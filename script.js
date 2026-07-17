// PASSWORD SYSTEM

const passwordInput = document.getElementById("passwordInput");
const unlockBtn = document.getElementById("unlockBtn");

const passwordScreen = document.getElementById("passwordScreen");
const introPage = document.getElementById("introPage");



if(unlockBtn){

unlockBtn.addEventListener("click",()=>{


    if(passwordInput.value === "17-07"){


        passwordScreen.classList.add("hidden");

        introPage.classList.remove("hidden");


        startEffects();


    }

    else{


        alert("Wrong password 💜");


    }


});


}



// ENTER KEY

if(passwordInput){

passwordInput.addEventListener("keypress",(e)=>{


    if(e.key==="Enter"){

        unlockBtn.click();

    }


});


}




// MUSIC AFTER USER INTERACTION

const birthdayMusic = document.getElementById("birthdayMusic");


function playMusic(){


    if(birthdayMusic){


        birthdayMusic.volume = 0.35;

        birthdayMusic.play().catch(()=>{});


    }


}



function startEffects(){


    playMusic();


    createBalloons();


    createConfetti();


}




// BALLOONS

function createBalloons(){


    for(let i=0;i<20;i++){


        let balloon=document.createElement("div");


        balloon.innerHTML="🎈";


        balloon.style.position="fixed";

        balloon.style.left=Math.random()*100+"%";

        balloon.style.bottom="-50px";

        balloon.style.fontSize="35px";

        balloon.style.animation=`float ${4+Math.random()*5}s linear`;


        document.body.appendChild(balloon);



        setTimeout(()=>{

            balloon.remove();

        },9000);


    }


}





// CONFETTI

function createConfetti(){


    for(let i=0;i<50;i++){


        let conf=document.createElement("div");


        conf.innerHTML="✨";


        conf.style.position="fixed";

        conf.style.left=Math.random()*100+"%";

        conf.style.top=Math.random()*100+"%";

        conf.style.fontSize="20px";


        document.body.appendChild(conf);



        setTimeout(()=>{

            conf.remove();

        },3000);


    }


}
