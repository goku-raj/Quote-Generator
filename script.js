// https://github.com/lukePeavey/quotable = api for quote generation

const quote = document.getElementById('quote');
const author = document.getElementById('author');

const apiURL = "https://api.quotable.io/random";

async function getQuote(url){
    const response = await fetch(url);
    var data = await response.json();
    // console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

getQuote(apiURL);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "---- by "+ author.innerHTML, "Tweet Window", "width= 600, height= 300")
}