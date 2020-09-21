var personalinformation = document.getElementById('personalinformation')
var languages = document.getElementById('languages')
var education = document.getElementById('education')
var experience = document.getElementById('experience')

var btnpersonalinformation = document.getElementById('btnpersonalinformation')
var btnlanguages = document.getElementById('btnlanguages')
var btneducation = document.getElementById('btneducation')
var btnexperience = document.getElementById('btnexperience')



function displaypersonalinformation(){
   personalinformation.style.transform="translateX(0)";
    languages.style.transform="translateX(100%)";
    education.style.transform="translateX(100%)";
    experience.style.transform="translateX(100%)";

    btnpersonalinformation.style.color="rgb(44, 44, 143)";
    btnlanguages.style.color="#000";
    btneducation.style.color="#000";
    btnexperience.style.color="#000";
}
function displaylanguages(){
    personalinformation.style.transform="translateX(100%)";
    languages.style.transform=" translateX(0)";
    education.style.transform=" translateX(100%)";
    experience.style.transform=" translateX(100%)";

    btnpersonalinformation.style.color="#000";
    btnlanguages.style.color="rgb(44, 44, 143)";
    btneducation.style.color="#000";
    btnexperience.style.color="#000";
}
function displayeducation(){
    personalinformation.style.transform=" translateX(100%)";
    languages.style.transform=" translateX(100%)";
    education.style.transform=" translateX(0)";
    experience.style.transform=" translateX(100%)";

    btnpersonalinformation.style.color="#000";
    btnlanguages.style.color="#000";
    btneducation.style.color="rgb(44, 44, 143)";
    btnexperience.style.color="#000";
}
function displayexperience(){
  personalinformation .style.transform=" translateX(100%)";
    languages.style.transform=" translateX(100%)";
    education.style.transform=" translateX(100%)";
    experience.style.transform=" translateX(0)";

    btnpersonalinformation.style.color="000";
    btnlanguages.style.color="#000";
    btneducation.style.color="#000";
    btnexperience.style.color="rgb(44, 44, 143)";
}