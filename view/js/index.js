async function getapi(url) {
    const response = await fetch(url);
    
    var data = await response.json();
    if (response) {}
    show(data);
};


const show = (data) => {
    console.log(data);
    var topSongs = "";
    for(let i=0; i<data.length; i++) {
        const date = new Date(data[i].rls_date).toLocaleString("en-us", { month: "long", day: "2-digit",  year: "numeric"});
        var tr = `<tr class="align-middle" style="align-items: center;">
        <td><img src="${data[i].cover_img}" alt="" width="100px" height="100px"></td>
        <td>${data[i].name}</td>
        <td>${date}</td>
        <td>${data[i].artists}</td>
        <td>${data[i].rating}</td>
        </tr>`;
        topSongs += tr;
    };
    document.getElementById("topSongs").innerHTML += topSongs;
};

const callApi = () => {
    const api_url = "http://localhost:8080/app/top_songs";
    getapi(api_url);
    // call top Artist api too
}
