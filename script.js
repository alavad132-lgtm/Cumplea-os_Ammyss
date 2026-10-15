/*==================================================
        FELIZ CUMPLEAÑOS AMMY
        script.js
        PARTE 1
==================================================*/


/*==========================================
            ELEMENTOS
==========================================*/

const openCard = document.getElementById("openCard");
const card = document.getElementById("card");

const music = document.getElementById("music");
const playMusic = document.getElementById("playMusic");
const loveButton = document.getElementById("loveButton");

const sliderImage = document.getElementById("sliderImage");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const thumbs = document.querySelectorAll(".thumb");

const typing = document.getElementById("typing");


/*==========================================
            IMÁGENES
==========================================*/

const images = [

    "img/foto1.jpg",
    "img/foto2.jpg",
    "img/foto3.jpg",
    "img/foto4.jpg",
    "img/foto5.jpg",
    "img/foto6.jpg",
    "img/foto7.jpg",
    "img/foto9.jpeg",
];

let currentImage = 0;


/*==========================================
        ABRIR TARJETA
==========================================*/

openCard.addEventListener("click", () => {

    card.classList.remove("hidden");

    card.scrollIntoView({

        behavior: "smooth"

    });

});


/*==========================================
            MÚSICA
==========================================*/

let playing = false;

playMusic.addEventListener("click", () => {

    if (!playing) {

        music.play();

        playMusic.innerHTML = "⏸️ Pausar Música";

    } else {

        music.pause();

        playMusic.innerHTML = "🎵 Reproducir Música";

    }

    playing = !playing;

});


/*==========================================
        BOTÓN TE QUIERO
==========================================*/

loveButton.addEventListener("click", () => {

    loveButton.innerHTML = "💖 ¡Yo también te adoro! 💖";

    loveButton.style.transform = "scale(1.15)";

    setTimeout(() => {

        loveButton.style.transform = "scale(1)";

    }, 400);

});


/*==========================================
        CAMBIAR IMAGEN
==========================================*/

function showImage(index) {

    sliderImage.style.opacity = 0;

    setTimeout(() => {

        sliderImage.src = images[index];

        sliderImage.style.opacity = 1;

    }, 250);


    thumbs.forEach((thumb) => {

        thumb.classList.remove("active");

    });

    thumbs[index].classList.add("active");

}


/*==========================================
            SIGUIENTE
==========================================*/

next.addEventListener("click", () => {

    currentImage++;

    if (currentImage >= images.length) {

        currentImage = 0;

    }

    showImage(currentImage);

});


/*==========================================
            ANTERIOR
==========================================*/

prev.addEventListener("click", () => {

    currentImage--;

    if (currentImage < 0) {

        currentImage = images.length - 1;

    }

    showImage(currentImage);

});


/*==========================================
        MINIATURAS
==========================================*/

thumbs.forEach((thumb, index) => {

    thumb.addEventListener("click", () => {

        currentImage = index;

        showImage(currentImage);

    });

});


/*==========================================
        CAMBIO AUTOMÁTICO
==========================================*/

setInterval(() => {

    currentImage++;

    if (currentImage >= images.length) {

        currentImage = 0;

    }

    showImage(currentImage);

}, 5000);


/*==========================================
        EFECTO ESCRITURA
==========================================*/

const message =

`💖Hoy quiero recordarte lo increíble que eres.✨

Gracias por existir 🥹, por iluminar mi vida con tu hermosa sonrisa 😊💕 y por hacer que cada momento sea único y especial. 🌹

Espero que este nuevo año esté lleno de alegría 😄, salud 💖, amor ❤️, éxitos 🌟 y muchísimas bendiciones de parte de Dios. 🙏✨

Nunca olvides lo importante que eres para mí. 🫶💕

Que nuestro Dios siempre te llene de amor ❤️, felicidad 😊, paz 🕊️ y cuide cada uno de tus pasos. 🙏✨

No soy alguien de muchas palabras 😅, y mucho menos cuando hablo contigo, porque simplemente no existen las palabras suficientes para expresar todo lo que siento por ti. 🥹💖

Eres una de mis personitas más importantes en mi vida. 🌎❤️ Cada día hago lo posible para que nunca te alejes de mí, porque tenerte cerca es uno de los regalos más bonitos que Dios me ha dado. 🫂💞

Espero que disfrutes esta pequeña sorpresa y este detalle que preparé para ti con todo mi cariño, ilusión y mucho amor. 🎁🌹❤️

¡Feliz cumpleaños! 🎂🎉🎈 Que hoy y siempre seas inmensamente feliz. 🌸✨

Con mucho amor, de mi parte.❤️🥰
`;

typing.textContent = "";

let letter = 0;

function writeText() {

    if (letter < message.length) {

        typing.textContent += message.charAt(letter);

        letter++;

        setTimeout(writeText, 35);

    }

}

writeText();
/*==================================================
            SCRIPT.JS
            PARTE 2A
    CORAZONES - PARTÍCULAS - FRASES
==================================================*/


/*=========================================
            CONTENEDORES
=========================================*/

const heartsContainer = document.getElementById("hearts");
const particlesContainer = document.getElementById("particles");


/*=========================================
        CORAZONES FLOTANTES
=========================================*/

function createHeart(){

    const heart = document.createElement("span");

    heart.className = "heart";

    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
        (12 + Math.random() * 24) + "px";

    heart.style.animationDuration =
        (6 + Math.random() * 5) + "s";

    heart.style.opacity =
        0.5 + Math.random() * 0.5;

    heartsContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    },11000);

}


/*=========================================
        CREAR MUCHOS CORAZONES
=========================================*/

setInterval(createHeart,350);


/*=========================================
            PARTÍCULAS
=========================================*/

function createParticle(){

    const particle = document.createElement("span");

    particle.className = "particle";

    const size = 2 + Math.random() * 6;

    particle.style.width = size + "px";

    particle.style.height = size + "px";

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.animationDuration =
        (4 + Math.random() * 4) + "s";

    particlesContainer.appendChild(particle);

    setTimeout(()=>{

        particle.remove();

    },9000);

}

setInterval(createParticle,180);



/*=========================================
        FRASES AUTOMÁTICAS
=========================================*/

const quotes = document.querySelectorAll(".quote");

let quoteIndex = 0;

function changeQuote(){

    quotes.forEach(q=>{

        q.classList.remove("active");

    });

    quoteIndex++;

    if(quoteIndex>=quotes.length){

        quoteIndex=0;

    }

    quotes[quoteIndex].classList.add("active");

}

setInterval(changeQuote,5000);



/*=========================================
        EFECTO BOTÓN AMOR
=========================================*/

function createMiniHeart(){

    const heart = document.createElement("div");

    heart.innerHTML="💖";

    heart.style.position="fixed";

    heart.style.left=
        (loveButton.getBoundingClientRect().left+50)+"px";

    heart.style.top=
        (loveButton.getBoundingClientRect().top)+"px";

    heart.style.fontSize="24px";

    heart.style.pointerEvents="none";

    heart.style.zIndex="9999";

    heart.style.transition="1.8s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.style.transform="translateY(-180px) scale(2)";

        heart.style.opacity="0";

    },20);

    setTimeout(()=>{

        heart.remove();

    },1800);

}

loveButton.addEventListener("click",()=>{

    for(let i=0;i<10;i++){

        setTimeout(createMiniHeart,i*120);

    }

});



/*=========================================
        EFECTO BOTÓN MÚSICA
=========================================*/

playMusic.addEventListener("mouseenter",()=>{

    playMusic.style.boxShadow=

    "0 0 25px #ff5fa2";

});


playMusic.addEventListener("mouseleave",()=>{

    playMusic.style.boxShadow="";

});



/*=========================================
        LATIDO DEL TÍTULO
=========================================*/

const title=document.querySelector(".hero h2");

setInterval(()=>{

    title.animate([

        {

            transform:"scale(1)"

        },

        {

            transform:"scale(1.08)"

        },

        {

            transform:"scale(1)"

        }

    ],{

        duration:900

    });

},2200);



/*=========================================
        EFECTO BRILLO
=========================================*/

document.querySelectorAll("section").forEach(sec=>{

    sec.addEventListener("mouseenter",()=>{

        sec.style.transition=".4s";

        sec.style.boxShadow=

        "0 0 45px rgba(255,95,162,.25)";

    });

    sec.addEventListener("mouseleave",()=>{

        sec.style.boxShadow="";

    });

});