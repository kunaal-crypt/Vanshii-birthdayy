/* ========================================= */
/* ELEMENTS */
/* ========================================= */

const loader = document.getElementById("loader");

const passwordScreen = document.getElementById("passwordScreen");

const introPage = document.getElementById("introPage");

const celebrationPage = document.getElementById("celebrationPage");

const homePage = document.getElementById("homePage");

const endingScreen = document.getElementById("endingScreen");

const passwordInput = document.getElementById("passwordInput");

const unlockBtn = document.getElementById("unlockBtn");

const passwordError = document.getElementById("passwordError");

const startCelebration =
document.getElementById("startCelebration");

const lightCandlesBtn =
document.getElementById("lightCandlesBtn");

const wishBtn =
document.getElementById("wishBtn");

const balloonBtn =
document.getElementById("balloonBtn");

const cakeBtn =
document.getElementById("cakeBtn");

const finishWebsite =
document.getElementById("finishWebsite");

/* ========================================= */
/* LOADER */
/* ========================================= */

window.addEventListener("load",()=>{

setTimeout(()=>{

loader.style.opacity="0";

loader.style.transition="1s";

setTimeout(()=>{

loader.style.display="none";

passwordScreen.classList.remove("hidden");

},900);

},2200);

});

/* ========================================= */
/* PASSWORD */
/* ========================================= */

unlockBtn.addEventListener("click",()=>{

const password=passwordInput.value.trim();

if(password==="17-07"){

passwordScreen.classList.add("hidden");

introPage.classList.remove("hidden");

}

else{

passwordError.innerHTML=

"❌ Wrong Password";

passwordInput.value="";

}

});

passwordInput.addEventListener("keypress",(e)=>{

if(e.key==="Enter"){

unlockBtn.click();

}

});

/* ========================================= */
/* INTRO */
/* ========================================= */

startCelebration.addEventListener("click",()=>{

introPage.classList.add("hidden");

celebrationPage.classList.remove("hidden");

});

/* ========================================= */
/* CELEBRATION */
/* ========================================= */

lightCandlesBtn.addEventListener("click",()=>{

alert("🕯 The candles are glowing beautifully!");

lightCandlesBtn.disabled=true;

wishBtn.disabled=false;

});

wishBtn.addEventListener("click",()=>{

alert("🌠 Close your eyes and make a beautiful wish!");

wishBtn.disabled=true;

balloonBtn.disabled=false;

});

balloonBtn.addEventListener("click",()=>{

alert("🎈 Pop Pop Pop!! Happy Birthday Panda!");

balloonBtn.disabled=true;

cakeBtn.disabled=false;

});

cakeBtn.addEventListener("click",()=>{

alert("🍰 Happy Birthday Vanshika!!");

celebrationPage.classList.add("hidden");

homePage.classList.remove("hidden");

});
/* ========================================= */
/* PAGE NAVIGATION */
/* ========================================= */

const pages = document.querySelectorAll(".page");

const menuCards = document.querySelectorAll(".menuCard");

const backButtons = document.querySelectorAll(".backBtn");

menuCards.forEach(card=>{

card.addEventListener("click",()=>{

const target=card.dataset.page;

homePage.classList.add("hidden");

pages.forEach(page=>{

page.classList.add("hidden");

});

document
.getElementById(target)
.classList.remove("hidden");

});

});

backButtons.forEach(button=>{

button.addEventListener("click",()=>{

pages.forEach(page=>{

page.classList.add("hidden");

});

homePage.classList.remove("hidden");

});

});

/* ========================================= */
/* GALLERY ANIMATION */
/* ========================================= */

const galleryImages=document.querySelectorAll(".galleryGrid img");

galleryImages.forEach(image=>{

image.addEventListener("click",()=>{

image.style.transform="scale(1.15)";

image.style.transition=".35s";

setTimeout(()=>{

image.style.transform="scale(1)";

},350);

});

});

/* ========================================= */
/* FINAL PAGE */
/* ========================================= */

finishWebsite.addEventListener("click",()=>{

document
.getElementById("finalPage")
.classList.add("hidden");

endingScreen.classList.remove("hidden");

});

/* ========================================= */
/* SIMPLE TYPEWRITER EFFECT */
/* ========================================= */

const titles=document.querySelectorAll("h1");

titles.forEach(title=>{

title.style.opacity="0";

setTimeout(()=>{

title.style.transition="1s";

title.style.opacity="1";

},300);

});

/* ========================================= */
/* BUTTON RIPPLE EFFECT */
/* ========================================= */

const allButtons=document.querySelectorAll("button");

allButtons.forEach(button=>{

button.addEventListener("click",()=>{

button.style.transform="scale(.95)";

setTimeout(()=>{

button.style.transform="scale(1)";

},120);

});

});

/* ========================================= */
/* FLOATING CONFETTI */
/* ========================================= */

function launchConfetti(){

for(let i=0;i<40;i++){

const confetti=document.createElement("div");

confetti.innerHTML="🎉";

confetti.style.position="fixed";

confetti.style.left=Math.random()*100+"vw";

confetti.style.top="-30px";

confetti.style.fontSize=(18+Math.random()*20)+"px";

confetti.style.zIndex="99999";

confetti.style.transition="4s linear";

document.body.appendChild(confetti);

setTimeout(()=>{

confetti.style.transform=

`translateY(${window.innerHeight+100}px)
rotate(${720+Math.random()*720}deg)`;

confetti.style.opacity="0";

},50);

setTimeout(()=>{

confetti.remove();

},4200);

}

}

/* ========================================= */
/* CELEBRATION EFFECTS */
/* ========================================= */

lightCandlesBtn.addEventListener("click",launchConfetti);

balloonBtn.addEventListener("click",launchConfetti);

cakeBtn.addEventListener("click",launchConfetti);

finishWebsite.addEventListener("click",launchConfetti);
/* ========================================= */
/* BACKGROUND MUSIC */
/* ========================================= */

const music = new Audio("music/song.mp3");

music.loop = true;

music.volume = 0.5;

cakeBtn.addEventListener("click",()=>{

music.play().catch(()=>{});

});

/* ========================================= */
/* MUSIC BUTTON */
/* ========================================= */

const musicButton = document.createElement("button");

musicButton.innerHTML = "🎵";

musicButton.id = "musicButton";

document.body.appendChild(musicButton);

musicButton.style.position = "fixed";
musicButton.style.right = "20px";
musicButton.style.bottom = "20px";
musicButton.style.width = "60px";
musicButton.style.height = "60px";
musicButton.style.borderRadius = "50%";
musicButton.style.border = "none";
musicButton.style.cursor = "pointer";
musicButton.style.fontSize = "26px";
musicButton.style.background = "#ffffff";
musicButton.style.boxShadow = "0 10px 25px rgba(0,0,0,.25)";
musicButton.style.zIndex = "99999";

musicButton.addEventListener("click",()=>{

if(music.paused){

music.play();

musicButton.innerHTML="⏸";

}

else{

music.pause();

musicButton.innerHTML="🎵";

}

});

/* ========================================= */
/* PAGE FADE ANIMATION */
/* ========================================= */

function showPage(page){

document.querySelectorAll("section").forEach(sec=>{

sec.classList.add("hidden");

});

page.classList.remove("hidden");

page.style.opacity="0";

setTimeout(()=>{

page.style.transition=".7s";

page.style.opacity="1";

},50);

}

/* ========================================= */
/* FLOATING SPARKLES */
/* ========================================= */

setInterval(()=>{

const spark=document.createElement("div");

spark.innerHTML="✨";

spark.style.position="fixed";

spark.style.left=Math.random()*100+"vw";

spark.style.top=Math.random()*100+"vh";

spark.style.fontSize=(12+Math.random()*20)+"px";

spark.style.pointerEvents="none";

spark.style.transition="2.5s";

spark.style.zIndex="1";

document.body.appendChild(spark);

setTimeout(()=>{

spark.style.opacity="0";

spark.style.transform="scale(2)";

},100);

setTimeout(()=>{

spark.remove();

},2500);

},900);

/* ========================================= */
/* FLOATING BALLOONS */
/* ========================================= */

setInterval(()=>{

const balloon=document.createElement("div");

balloon.innerHTML="🎈";

balloon.style.position="fixed";

balloon.style.left=Math.random()*100+"vw";

balloon.style.bottom="-80px";

balloon.style.fontSize=(35+Math.random()*25)+"px";

balloon.style.transition="12s linear";

balloon.style.pointerEvents="none";

balloon.style.zIndex="0";

document.body.appendChild(balloon);

setTimeout(()=>{

balloon.style.transform="translateY(-130vh)";

},50);

setTimeout(()=>{

balloon.remove();

},12000);

},3000);

/* ========================================= */
/* FLOATING PETALS */
/* ========================================= */

setInterval(()=>{

const petal=document.createElement("div");

petal.innerHTML="🌸";

petal.style.position="fixed";

petal.style.left=Math.random()*100+"vw";

petal.style.top="-40px";

petal.style.fontSize=(18+Math.random()*12)+"px";

petal.style.transition="10s linear";

petal.style.pointerEvents="none";

document.body.appendChild(petal);

setTimeout(()=>{

petal.style.transform="translateY(120vh) rotate(720deg)";

},50);

setTimeout(()=>{

petal.remove();

},10000);

},1500);

/* ========================================= */
/* HAPPY BIRTHDAY TITLE */
/* ========================================= */

console.log("🎂 Happy Birthday Vanshika 🐼💜");

/* ========================================= */
/* END */
/* ========================================= */

