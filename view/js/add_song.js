
async function getapi(url) {
    const response = await fetch(url);
    
    var data = await response.json();
    if (response) {}
    show(data);
};

const show = (data) => {
    for(let i=0; i<data.length; i++) {
        var option = document.createElement("option");
        option.setAttribute('value', `${data[i].id}`);
        option.innerHTML = data[i].name;
        document.getElementById("artists_list").appendChild(option);
    };
};

function addsong() {
    var artists_list = [];    
    $("#artists_list :selected").each(function(){
        artists_list.push($(this).val()); 
    });

    var form = new FormData($("#add_song")[0]);
    $.ajax({
        url: 'http://localhost:8080/app/addSong',
        method: "post",
        dataType: 'json',
        data: form,
        processData: false,
        contentType: false,
        success: function(result){alert("success");},
        error: function(er){alert(er)}
    });
};

const callApi = () => {
    const api_url = "http://localhost:8080/app/getArtistList";
    getapi(api_url);
}
