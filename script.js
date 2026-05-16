function checkPass(){
    let input = document.getElementById("pass").value.trim();

    if(input === "07/24"){
        window.location.href = "cake.html";
    } else {
        alert("Wrong password 💔");
    }
}


/* CLICK SOUND */
let clickSound = new Audio("sound/click.mp3");


function openMedia(type, src, title){

    // play click sound safely
    clickSound.currentTime = 0;
    clickSound.play();

    document.getElementById("popup").style.display = "flex";
    document.getElementById("title").innerText = title;

    let v = document.getElementById("video");
    let a = document.getElementById("audio");

    // reset both
    v.pause();
    a.pause();
    v.style.display = "none";
    a.style.display = "none";

    if(type === "video"){
        v.style.display = "block";
        v.src = src;
        v.play();
    }

    if(type === "audio"){
        a.style.display = "block";
        a.src = src;
        a.play();
    }
}


function closeMedia(){

    document.getElementById("popup").style.display = "none";

    let v = document.getElementById("video");
    let a = document.getElementById("audio");

    // STOP media properly
    v.pause();
    a.pause();

    v.src = "";
    a.src = "";
}