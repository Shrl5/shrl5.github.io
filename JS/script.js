function scrollup(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function SpotifyLink(){
    if(window.location.pathname.includes("/HTML/index.html")){
    window.open('https://open.spotify.com/track/5Z01UMMf7V1o0MzF86s6WJ?si=0b580687ee464515', '_blank');
    }else if(window.location.pathname.includes("/HTML/oceanland.html")){
    window.open('https://open.spotify.com/track/4Op6l7h9XlNLDKZbqZmZJ3?si=6eb3b1314423406c', '_blank');
    }else if(window.location.pathname.includes("/HTML/coffin.html")){
    window.open('https://open.spotify.com/track/4HqPiUgeE9z0MHLXkgUQkQ?si=c47083cc9ed743b6', '_blank');
    }else{
        console.log("Failed opening the Spotify Link");
    }
}
function YoutubeLink(){
    if(window.location.pathname.includes("/HTML/index.html")){
        window.open('https://youtu.be/_Yhyp-_hX2s?si=fiRFlu369C-A9FfM', '_blank');
    }else if(window.location.pathname.includes("/HTML/oceanland.html")){
        window.open('https://youtu.be/LAGV67gDq4c?si=szOWev80DhxGaY21', '_blank');
    }else if(window.location.pathname.includes("/HTML/coffin.html")){
        window.open('https://youtu.be/TfBaVaubcyw?si=0TUMOnZCkBO6rKFI', '_blank');
    }else{
            console.log("Failed opening the Youtube Link");
    }
}
function SoundcloudLink(){
    if(window.location.pathname.includes("/HTML/index.html")){
        window.open('https://soundcloud.com/eminemofficial/lose-yourself?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing', '_blank');
    }else if(window.location.pathname.includes("/HTML/coffin.html")){
        window.open('https://soundcloud.com/jessiereyez/coffin-feat-eminem?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing', '_blank');
    }else{
            console.log("Failed opening the Soundcloud Link");
    }
}
function alerting(){
    alert("This feature isn't available yet.");
}
function GoBack(){
    window.history.back();
}

function Login(){
    var EmailValue = document.getElementById("email").value;
    var PasswordValue = document.getElementById("password").value;
    if (EmailValue === "admin@mail.com" && PasswordValue === "admin") {
        window.open('/HTML/index.html', '_self');
        return false;
    } else {
        alert("Please use the email & password that's provided.");
    }
    return false;
}

function copy(id) {
    var textarea = document.createElement("textarea");
    var email = document.getElementById("adminemail");
    var password = document.getElementById("adminpassword");
    if(id === 1){
        textarea.value = "admin@mail.com";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        email.textContent="Copied Successfully..."
        setTimeout(() => {
            email.textContent = "admin@mail.com";
        }, 1000);
    }else if(id === 2){
        textarea.value = "admin";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        password.textContent="Copied Successfully..."
        setTimeout(() => {
            password.textContent = "admin";
        }, 1000);
    }
    else{
        alert("Error copying..")
    }
}