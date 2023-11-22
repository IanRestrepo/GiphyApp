function getUserInput() {
    var inputValue = document.querySelector(".input").value;
    return inputValue;
}

document.querySelector(".Switch-Theme").addEventListener('click', ()=> {

    var item = document.querySelector(".dark")

    if( item ){
        document.querySelector('body').classList.remove("dark")
    } else {
        document.querySelector('body').classList.add("dark")
    }

})

document.querySelector(".searchBtn").addEventListener("change", function () {
    var inputValue = document.querySelector(".input").value;
    var userInput = getUserInput();
    searchGiphy(userInput);
});

document.querySelector(".searchBtn").addEventListener("click", function () {
    var inputValue = document.querySelector(".input").value;
    var userInput = getUserInput();
    searchGiphy(userInput);
});


document.querySelector(".input").addEventListener("keyup", function (e) {

        if (e.which === 13) {
            var userInput = getUserInput();
            searchGiphy(userInput);
        }
    });

function searchGiphy(searchQuery) {
    var url = "https://api.giphy.com/v1/gifs/search?api_key=x5KKTi2QtklbXfP2KvhDY38g7CqtaX5A&q=" + searchQuery;

    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open("GET", url);
    GiphyAJAXCall.send();

    GiphyAJAXCall.addEventListener("load", function (data) {
        var actualData = data.target.response;
        pushToDOM(actualData);
        console.log(actualData);

    });
}


function pushToDOM(response) {
    response = JSON.parse(response);

    var images = response.data;

    var container = document.querySelector(".gif-results");

    container.innerHTML = "";

    images.forEach(function (image) {

        var src = image.images.fixed_height.url;

        container.innerHTML += "<div class='card'><a href='" + src +"'><img src='" + src + "' class='gif gif__image' /></a></div>";
    });
}
