// ===============================
// ELEMENTS
// ===============================

const loader = document.getElementById("loader");
const passwordScreen = document.getElementById("passwordScreen");
const passwordInput = document.getElementById("passwordInput");
const unlockBtn = document.getElementById("unlockBtn");
const passwordError = document.getElementById("passwordError");

const introPage = document.getElementById("introPage");
const startCelebration = document.getElementById("startCelebration");

const celebrationPage = document.getElementById("celebrationPage");
const homePage = document.getElementById("homePage");

const lightCandlesBtn = document.getElementById("lightCandlesBtn");
const wishBtn = document.getElementById("wishBtn");
const balloonBtn = document.getElementById("balloonBtn");
const cakeBtn = document.getElementById("cakeBtn");

const cakeMessage = document.getElementById("cakeMessage");

const menuButtons = document.querySelectorAll(".menuCard");
const pages = document.querySelectorAll(".page");

const backButtons = document.querySelectorAll(".backBtn");

const playMusicBtn = document.getElementById("playMusicBtn");
const birthdayMusic = document.getElementById("birthdayMusic");

const restartBtn = document.getElementById("restartBtn");





// ===============================
// LOADER
// ===============================

window.onload = () => {

    setTimeout(() => {

        loader.style.display = "none";

    },2000);

};





// ===============================
// PASSWORD
// ===============================


unlockBtn.onclick = () => {


    if(passwordInput.value === "17-07"){


        passwordScreen.classList.add("hidden");

        introPage.classList.remove("hidden");


    }

    else{


        passwordError.innerHTML =
        "Wrong password 😭 Try again";


    }


};







// ===============================
// START CELEBRATION
// ===============================


startCelebration.onclick = () => {


introPage.classList.add("hidden");

celebrationPage.classList.remove("hidden");


};








// ===============================
// CANDLE BUTTON
// ===============================


lightCandlesBtn.onclick = () => {


lightCandlesBtn.innerHTML =
"🕯 Candles Are Lit ✨";


wishBtn.disabled = false;


};







// ===============================
// WISH BUTTON
// ===============================


wishBtn.onclick = () => {


wishBtn.innerHTML =
"🌠 Wish Made 💜";


balloonBtn.disabled = false;


};







// ===============================
// BALLOONS
// ===============================


balloonBtn.onclick = () => {


balloonBtn.innerHTML =
"🎈 Balloons Popped 🎉";


cakeBtn.disabled = false;


};







// ===============================
// CAKE
// ===============================


cakeBtn.onclick = () => {


cakeMessage.innerHTML =
"🍰 Cake Cut Successfully! <br><br> Happy Birthday Vanshika 🐼💜";


setTimeout(()=>{


celebrationPage.classList.add("hidden");

homePage.classList.remove("hidden");


},2000);


};







// ===============================
// MENU NAVIGATION
// ===============================


menuButtons.forEach(button=>{


button.onclick = ()=>{


let pageId = button.getAttribute("data-page");


homePage.classList.add("hidden");


document.getElementById(pageId)
.classList.remove("hidden");


};


});








// ===============================
// BACK BUTTON
// ===============================


backButtons.forEach(button=>{


button.onclick = ()=>{


pages.forEach(page=>{

page.classList.add("hidden");

});


homePage.classList.remove("hidden");


};


});







// ===============================
// MUSIC
// ===============================


playMusicBtn.onclick = ()=>{


if(birthdayMusic.paused){


birthdayMusic.play();


playMusicBtn.innerHTML =
"⏸ Pause Song";


}

else{


birthdayMusic.pause();


playMusicBtn.innerHTML =
"🎵 Play Birthday Song";


}


};







// ===============================
// RESTART
// ===============================


restartBtn.onclick = ()=>{


location.reload();


};
