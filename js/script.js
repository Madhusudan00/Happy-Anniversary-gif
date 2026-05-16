function checkPass(){
if(document.getElementById("pass").value==="love"){
window.location.href="cake.html";
}else{
alert("Wrong password 💔");
}
}

/* CLICK SOUND */
let clickSound = new Audio("sound/click.mp3");

function openMedia(type,src,title){

clickSound.play();

document.getElementById("popup").style.display="flex";
document.getElementById("title").innerText=title;

let v=document.getElementById("video");
let a=document.getElementById("audio");

v.pause(); a.pause();
v.style.display="none";
a.style.display="none";

if(type==="video"){
v.style.display="block";
v.src=src;
v.play();
}

if(type==="audio"){
a.style.display="block";
a.src=src;
a.play();
}

}

function closeMedia(){
document.getElementById("popup").style.display="none";
}