// ======================================
// VANSHiKA BIRTHDAY WEBSITE JAVASCRIPT
// ======================================


// LOADER

window.addEventListener("load",()=>{

    const loader=document.getElementById("loader");

    if(loader){

        setTimeout(()=>{

            loader.style.display="none";

        },2500);

    }

});




// ELEMENTS

const passwordScreen=document.getElementById("passwordScreen");
const passwordInput=document.getElementById("passwordInput");
const unlockBtn=document.getElementById("unlockBtn");
const passwordError=document.getElementById("passwordError");

const introPage=document.getElementById("introPage");
const startCelebration=document.getElementById("startCelebration");

const celebrationPage=document.getElementById("celebrationPage");
const homePage=document.getElementById("homePage");

const lightCandlesBtn=document.getElementById("lightCandlesBtn");
const wishBtn=document.getElementById("wishBtn");
const balloonBtn=document.getElementById("balloonBtn");
const cakeBtn=document.getElementById("cakeBtn");

const celebrationMessage=document.getElementById("celebrationMessage");

const menuButtons=document.querySelectorAll(".menu-btn");
const pages=document.querySelectorAll(".page");

const backButtons=document.querySelectorAll(".backBtn");

const playMusicBtn=document.getElementById("playMusicBtn");
const birthdayMusic=document.getElementById("birthdayMusic");

const restartBtn=document.getElementById("restartBtn");






// PASSWORD

unlockBtn.addEventListener("click",()=>{


    if(passwordInput.value==="17-07"){


        passwordScreen.classList.add("hidden");

        introPage.classList.remove("hidden");


    }

    else{


        passwordError.innerHTML="Wrong password 😭 Try again";


    }


});






// ENTER KEY PASSWORD

passwordInput.addEventListener("keypress",(e)=>{

    if(e.key==="Enter"){

        unlockBtn.click();

    }

});







// INTRO TO CELEBRATION

startCelebration.addEventListener("click",()=>{


    introPage.classList.add("hidden");

    celebrationPage.classList.remove("hidden");


});









// CANDLE BUTTON

lightCandlesBtn.addEventListener("click",()=>{


    lightCandlesBtn.innerHTML="🕯 Candles Are Glowing ✨";


    document.body.style.background=
    "linear-gradient(135deg,#4c1d95,#9333ea)";


    wishBtn.disabled=false;


    createConfetti();


});







// WISH BUTTON

wishBtn.addEventListener("click",()=>{


    wishBtn.innerHTML="🌠 Wish Made 💜";


    createConfetti();


    balloonBtn.disabled=false;


});







// BALLOON BUTTON

balloonBtn.addEventListener("click",()=>{


    balloonBtn.innerHTML="🎈 Balloons Flying 🎉";


    createBalloons();


    cakeBtn.disabled=false;


});







// CAKE BUTTON

cakeBtn.addEventListener("click",()=>{


    cakeBtn.innerHTML="🍰 Cake Cut!";


    celebrationMessage.innerHTML=
    "🎂 Happy Birthday Vanshika 🐼💜<br><br>May your life always be filled with happiness and success ✨";


    createConfetti();


    setTimeout(()=>{


        celebrationPage.classList.add("hidden");


        homePage.classList.remove("hidden");


    },3000);



});









// MENU NAVIGATION


menuButtons.forEach(button=>{


    button.addEventListener("click",()=>{


        let target=button.getAttribute("data-page");


        homePage.classList.add("hidden");


        document.getElementById(target)
        .classList.remove("hidden");



    });


});








// BACK BUTTONS


backButtons.forEach(button=>{


    button.addEventListener("click",()=>{


        pages.forEach(page=>{


            page.classList.add("hidden");


        });



        homePage.classList.remove("hidden");



    });


});









// MUSIC


if(playMusicBtn && birthdayMusic){


playMusicBtn.addEventListener("click",()=>{


    if(birthdayMusic.paused){


        birthdayMusic.play();


        playMusicBtn.innerHTML="⏸ Pause Music";


    }

    else{


        birthdayMusic.pause();


        playMusicBtn.innerHTML="🎵 Play Music";


    }


});


}









// BALLOON CREATOR


function createBalloons(){


    for(let i=0;i<25;i++){


        let balloon=document.createElement("div");


        balloon.className="balloon";


        balloon.innerHTML="🎈";


        balloon.style.left=Math.random()*100+"vw";


        balloon.style.animationDuration=
        (4+Math.random()*4)+"s";



        document.body.appendChild(balloon);



        setTimeout(()=>{


            balloon.remove();


        },7000);



    }



}









// CONFETTI CREATOR


function createConfetti(){


    let symbols=[
        "🎉",
        "✨",
        "💜",
        "🌸",
        "⭐"
    ];



    for(let i=0;i<40;i++){


        let confetti=document.createElement("div");


        confetti.className="confetti";


        confetti.innerHTML=
        symbols[Math.floor(Math.random()*symbols.length)];



        confetti.style.left=
        Math.random()*100+"vw";



        confetti.style.animationDuration=
        (3+Math.random()*3)+"s";



        document.body.appendChild(confetti);



        setTimeout(()=>{


            confetti.remove();


        },6000);



    }


}








// RESTART

if(restartBtn){


restartBtn.addEventListener("click",()=>{


    location.reload();


});


            }
