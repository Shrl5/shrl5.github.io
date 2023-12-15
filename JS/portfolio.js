function PhoneShow() {
    var text = document.getElementById('phoneNO')
    var phoneNumber = "+9647732077629";
    text.textContent = phoneNumber;
    alert("Please only contact with me via this phone number when it's necessary, you can still send me an email instead.")
    Copy(phoneNumber);
    document.getElementById('CopyMSG').style.display = 'block';
}
function Copy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = 0;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    var txt = document.getElementById('CopyMSG');
    if (text === 'abasasadi8@gmail.com') {
        txt.textContent = 'Email auto copied successfully...';
    } else {
        txt.textContent = `(${text}) auto copied successfully...`;
    }
    document.getElementById('CopyMSG').style.display = 'block';
    document.getElementById('CopyMSG').style.animationName = 'FadeOut';
    document.getElementById('CopyMSG').style.animationDuration = '15s';
    setTimeout(() => {
        document.getElementById('CopyMSG').style.display = 'none';
    }, 8000);
}
function ClassChanger(section){
    document.getElementById('aboutNav').classList.remove('active');
    document.getElementById('workNav').classList.remove('active');
    document.getElementById('contactNav').classList.remove('active');
    document.getElementById(`${section}Nav`).classList.add('active');
}