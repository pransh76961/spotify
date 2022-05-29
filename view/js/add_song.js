
const api_url = "http://localhost:8080/app/getArtistList";

// Defining async function
async function getapi(url) {
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    if (response) {}
    show(data);
}
// Calling that async function
// post song_add, get top 10 songs and artists, get rating add, 
getapi(api_url);

const show = (data) => {
    console.log(data);
    for(let i=0; i<data.length; i++) {
        const option = document.createElement("option");
        option.setAttribute('value', `${data[i].id}`);
        option.innerHTML = data[i].name;
        document.getElementById("artists_list").appendChild(option);
    };
};
