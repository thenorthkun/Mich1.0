var input = document.querySelector("#input")
var btn = document.querySelector("#bta-translate")
var output = document.querySelector("#output")

var serverURL = "";

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error){
    output.innerText = "Error, please try again later"

}

function clickHandler(){
    var inputText = input.value;
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var outputText = json.contents.translated;
        output.innerText = outputText;
    })
    .catch(errorHandler)
    

}

btn.addEventListener("click", clickHandler)
