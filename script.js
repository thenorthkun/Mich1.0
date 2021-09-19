var input = document.querySelector("#input")
var btn = document.querySelector("#btn-translate")
var output = document.querySelector("#output")

var serverURL = "https://api.funtranslations.com/translate/valyrian.json";

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error){
    alert("An unexpected error was caught !");
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
