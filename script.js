function checkPass(){
    let input = document.getElementById("pass").value.trim().toLowerCase();

    const correctPassword = "baby";

    if(input === correctPassword){
        window.location.href = "cake.html";
    } else {
        alert("Wrong password 💔");
    }
}

/* SHOW / HIDE PASSWORD */
function togglePassword(){
    let pass = document.getElementById("pass");

    if(pass.type === "password"){
        pass.type = "text";
    } else {
        pass.type = "password";
    }
}

/* CLICK SOUND */
let clickSound = new Audio("sound/click.mp3");

/* OPEN MEDIA */
function openMedia(type, src, title){

    clickSound.currentTime = 0;
    clickSound.play();

    document.getElementById("popup").style.display = "flex";
    document.getElementById("title").innerText = title;

    let v = document.getElementById("video");
    let a = document.getElementById("audio");

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

    document.getElementById("popup").style.display = "none";

    let v = document.getElementById("video");
    let a = document.getElementById("audio");

    v.pause();
    a.pause();

    v.src = "";
    a.src = "";
}