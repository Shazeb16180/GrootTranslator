var getText=document.querySelector("#txtarea");
var output=document.querySelector("#output");
var btnc=document.querySelector("#btn");
var url="https://api.funtranslations.com/translate/groot.json";
btnc.addEventListener("click",translateFunc);
function translateFunc(){
    url=url+"?text="+getText.value;
    console.log(url);
    fetch(url)
    .then(response=> response.json())
    .then(json=>{
        var output_txt=json.contents.translated;
        console.log("success");
        output.innerText=output_txt;
    })
    .catch(errorHandler);
    var errorHandler=()=>{
        console.log("Error.....")
    }
}