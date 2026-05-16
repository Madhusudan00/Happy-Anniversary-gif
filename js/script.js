function unlockStory(){
    window.location.href = "cake.html";
}

/* CLICK SOUND */
let clickSound = new Audio("sound/click.mp3");

/* OPEN MEDIA */
function openMedia(type, src, title){

    // play click sound safely
    if(clickSound){
        clickSound.currentTime = 0;
        clickSound.play();
    }

    let popup = document.getElementById("popup");
    let titleEl = document.getElementById("title");
    let v = document.getElementById("video");
    let a = document.getElementById("audio");

    if(!popup || !titleEl || !v || !a) return;

    popup.style.display = "flex";
    titleEl.innerText = title;

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

/* CLOSE POPUP */
function closeMedia(){

    let popup = document.getElementById("popup");
    let v = document.getElementById("video");
    let a = document.getElementById("audio");

    if(popup) popup.style.display = "none";

    if(v){
        v.pause();
        v.src = "";
    }

    if(a){
        a.pause();
        a.src = "";
    }
}
