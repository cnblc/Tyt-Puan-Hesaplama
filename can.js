function hesapla(){

    var diplomaCheck = document.getElementById("checkbox-obp");

if (diplomaCheck.checked == true)
{
var diplomaPuani = (((document.getElementById("obp").value) * 0.6)/2);
}
else
{
var diplomaPuani = ((document.getElementById("obp").value) * 0.6);
}


var turkceDogru = document.getElementById('dogruTurkce').value;
var turkceYanlis = document.getElementById('yanlisTurkce').value;
var turkceNet = turkceDogru - (turkceYanlis / 4);
document.getElementById('turkceNet').innerHTML = turkceNet;

var sosyalDogru = document.getElementById('dogruSosyal').value;
var sosyalYanlis = document.getElementById('yanlisSosyal').value;
var sosyalNet = sosyalDogru - (sosyalYanlis / 4);
document.getElementById('sosyalNet').innerHTML = sosyalNet;

var matematikDogru = document.getElementById('dogruMatematik').value;
var matematikYanlis= document.getElementById('yanlisMatematik').value;
var matematikNet = matematikDogru - (matematikYanlis / 4);
document.getElementById('matematikNet').innerHTML = matematikNet;

var fenDogru = document.getElementById('dogruFen').value;
var fenYanlis = document.getElementById('yanlisFen').value;
var fenNet = fenDogru - (fenYanlis / 4);
document.getElementById('fenNet').innerHTML = fenNet;



document.getElementById('turkceNet').value = turkceDogru - (turkceYanlis / 4);
document.getElementById('sosyalNet').value = sosyalDogru - (sosyalYanlis / 4);
document.getElementById('matematikNet').value = matematikDogru - (matematikYanlis / 4);
document.getElementById('fenNet').value = fenDogru - (fenYanlis / 4);



var tytHamPuan = (turkceNet * 3.3) + (matematikNet * 3.3) +(sosyalNet * 3.4) + (fenNet * 3.4) + 100;

var yerlestirmePuan = tytHamPuan + parseFloat(diplomaPuani);

document.getElementById("demo").value = yerlestirmePuan;

document.getElementById("demo").innerHTML = yerlestirmePuan;



}