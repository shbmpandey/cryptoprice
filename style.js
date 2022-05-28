var btc= document.getElementById("Bitcoin")
var eth= document.getElementById("Ethereum")
var doge= document.getElementById("Dogecoin")


var settings = {

    "async":true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=inr",
    "method":"GET",
    "headers":{}
}
$.ajax(settings).done(function (response){
        btc.innerHTML=response.bitcoin.inr;
        eth.innerHTML=response.ethereum.inr;
        doge.innerHTML=response.dogecoin.inr;

});