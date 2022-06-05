var xhr = new XMLHttpRequest();
const imgOfDay = document.getElementById('imgOfDay');
document.getElementById('dateImg').max = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0];
const dateImg = document.getElementById('dateImg');
const btnGenerate = document.getElementById('btnGenerate');
var date = '';



btnGenerate.addEventListener("click", function(){
    var date = dateImg.value;
    console.log(date);

    xhr.open("GET", "https://api.nasa.gov/planetary/apod?api_key=khhytc59d7lVqx3YBCrNSjrgdRzucdBDGgcatozV&date="+date);
xhr.send();
xhr.addEventListener("load", function() {
    var statusAjax = xhr.status
    var resposta = ''
    if (statusAjax == 200) {

        resposta = xhr.responseText
        console.log(resposta);
        var respostaJSON = JSON.parse(resposta);
        console.log(respostaJSON);
        img = respostaJSON.hdurl;
        console.log(img);
        imgOfDay.src = img;
    }
})


})

