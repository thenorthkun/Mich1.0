var input = document.querySelector("#input")
var btn = document.querySelector("#btn-translate")
var output = document.querySelector("#output")

var serverURL = "https://api.funtranslations.com/translate/valyrian.json";

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text;
    
}


function clickHandler(){
    var inputText = input.value;
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        if(json.error) throw json.error.message;
        var outputText = json.contents.translated;
        output.innerText = outputText;
    })

    .catch(errorHandler)
}

function errorHandler(error){
    output.innerText = error
    // console.log(error);
}

btn.addEventListener("click", clickHandler)
