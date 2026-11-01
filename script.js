/* ==================================
   MOLLA & AJI — UNIVERSAL LOVE UNIVERSE
   ================================== */


/* SELECT ELEMENTS */

const welcomeScreen = document.getElementById("welcomeScreen");
const mainWebsite = document.getElementById("mainWebsite");
const enterButton = document.getElementById("enterButton");

const toast = document.getElementById("toast");

const floatingDecorations =
    document.getElementById("floatingDecorations");


/* WELCOME SCREEN */

enterButton.addEventListener("click", function () {

    welcomeScreen.classList.add("hidden");

    mainWebsite.classList.remove("hidden");

    showToast("Welcome to our little universe! ♡");

    createFloatingDecorations();

});


/* TOAST MESSAGE */

let toastTimeout;

function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimeout);

    toastTimeout = setTimeout(function () {

        toast.classList.remove("show");

    }, 2500);

}


/* FLOATING DECORATIONS */

const decorationItems = [
    "💗",
    "🌷",
    "🦋",
    "✨",
    "⭐",
    "🌸",
    "♡",
    "💫"
];

function createFloatingDecorations() {

    const item = document.createElement("span");

    item.className = "floating-item";

    item.textContent =
        decorationItems[
            Math.floor(Math.random() * decorationItems.length)
        ];

    item.style.left = Math.random() * 100 + "%";

    item.style.fontSize =
        Math.random() * 18 + 15 + "px";

    const duration = Math.random() * 5 + 7;

    item.style.animationDuration = duration + "s";

    floatingDecorations.appendChild(item);

    setTimeout(function () {

        item.remove();

    }, duration * 1000);

}

setInterval(createFloatingDecorations, 1200);


/* NAVIGATION */

const menuToggle = document.getElementById("menuToggle");

const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", function () {

    navigation.classList.toggle("active");

});

document.querySelectorAll(".navbar nav a").forEach(function (link) {

    link.addEventListener("click", function () {

        navigation.classList.remove("active");

    });

});


/* RANDOM SURPRISE */

const surpriseButton =
    document.getElementById("surpriseButton");

const surpriseMessages = [

    "You make ordinary days feel special. 💗",

    "Somewhere in this universe, there is always room for kindness. 🌷",

    "You are a little piece of sunshine. ☀️",

    "Never forget how special your existence is. ✨",

    "May your days be filled with little happiness. 🦋",

    "A beautiful story is made from small moments. 💌"

];

surpriseButton.addEventListener("click", function () {

    const randomIndex =
        Math.floor(Math.random() * surpriseMessages.length);

    showToast(surpriseMessages[randomIndex]);

    createHeartBurst();

});


/* HEART BURST */

function createHeartBurst() {

    for (let i = 0; i < 12; i++) {

        const heart = document.createElement("span");

        heart.textContent = "💗";

        heart.style.position = "fixed";

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.top = Math.random() * 100 + "vh";

        heart.style.fontSize = "22px";

        heart.style.pointerEvents = "none";

        heart.style.zIndex = "3000";

        heart.style.transition = "all 1s ease";

        document.body.appendChild(heart);

        requestAnimationFrame(function () {

            heart.style.transform =
                `translate(${Math.random() * 100 - 50}px, -120px)`;

            heart.style.opacity = "0";

        });

        setTimeout(function () {

            heart.remove();

        }, 1100);

    }

}


/* SPECIAL DATE COUNTER */

const specialDate =
    document.getElementById("specialDate");

const daysElement =
    document.getElementById("days");

const hoursElement =
    document.getElementById("hours");

const minutesElement =
    document.getElementById("minutes");

const secondsElement =
    document.getElementById("seconds");


const savedDate = localStorage.getItem("mollaAjiDate");

if (savedDate) {

    specialDate.value = savedDate;

} else {

    specialDate.value = "2025-01-01";

}

specialDate.addEventListener("change", function () {

    localStorage.setItem("mollaAjiDate", specialDate.value);

    updateCounter();

    showToast("Special date updated! 💗");

});


function updateCounter() {

    if (!specialDate.value) return;

    const startDate =
        new Date(specialDate.value + "T00:00:00");

    const currentDate = new Date();

    let difference =
        currentDate.getTime() - startDate.getTime();

    if (difference < 0) {

        daysElement.textContent = "0";

        hoursElement.textContent = "00";

        minutesElement.textContent = "00";

        secondsElement.textContent = "00";

        return;

    }

    const seconds =
        Math.floor(difference / 1000);

    const days =
        Math.floor(seconds / 86400);

    const hours =
        Math.floor((seconds % 86400) / 3600);

    const minutes =
        Math.floor((seconds % 3600) / 60);

    const remainingSeconds =
        seconds % 60;

    daysElement.textContent = days;

    hoursElement.textContent =
        String(hours).padStart(2, "0");

    minutesElement.textContent =
        String(minutes).padStart(2, "0");

    secondsElement.textContent =
        String(remainingSeconds).padStart(2, "0");

}

setInterval(updateCounter, 1000);

updateCounter();


/* GALLERY LIGHTBOX */

const galleryItems =
    document.querySelectorAll(".gallery-item img");

const imageModal =
    document.getElementById("imageModal");

const modalImage =
    document.getElementById("modalImage");

const closeImage =
    document.getElementById("closeImage");


galleryItems.forEach(function (image) {

    image.addEventListener("click", function () {

        modalImage.src = image.src;

        imageModal.classList.add("active");

    });

});


closeImage.addEventListener("click", function () {

    imageModal.classList.remove("active");

});


imageModal.addEventListener("click", function (event) {

    if (event.target === imageModal) {

        imageModal.classList.remove("active");

    }

});


/* RANDOM LOVE MESSAGE */

const randomMessage =
    document.getElementById("randomMessage");

const messageButton =
    document.getElementById("messageButton");

const loveMessages = [

    "Semoga kita selalu punya alasan untuk tersenyum.",

    "Hal-hal kecil terkadang menjadi kenangan paling indah.",

    "Terima kasih sudah menjadi bagian dari cerita ini.",

    "Semoga hari ini membawa banyak kebahagiaan untukmu.",

    "Dunia ini luas, tetapi setiap orang punya tempat kecil yang istimewa.",

    "Jangan lupa bahagia dan selalu sayangi dirimu sendiri.",

    "Aku suka bagaimana cerita sederhana bisa menjadi begitu berarti.",

    "Semoga semua mimpi baikmu menemukan jalannya.",

    "Kamu pantas mendapatkan hal-hal baik dalam hidup.",

    "Bersama-sama, kita bisa belajar menjadi lebih baik.",

    "Keep shining like the brightest star.",

    "Every little moment can become a beautiful memory.",

    "You deserve all the happiness in this universe.",

    "May your heart always find a reason to smile.",

    "Stay soft, stay kind, and keep growing."

];


messageButton.addEventListener("click", function () {

    const index =
        Math.floor(Math.random() * loveMessages.length);

    randomMessage.textContent = loveMessages[index];

    randomMessage.style.animation = "none";

    randomMessage.offsetHeight;

    randomMessage.style.animation = "welcomeAppear .5s ease";

});


/* FLOWER GARDEN */

const flowerGarden =
    document.getElementById("flowerGarden");

const plantButton =
    document.getElementById("plantButton");

const flowerCount =
    document.getElementById("flowerCount");

let flowersPlanted = 0;

const flowerTypes = [
    "🌷",
    "🌸",
    "🌻",
    "🌼",
    "🌺",
    "💐"
];


plantButton.addEventListener("click", function () {

    if (flowersPlanted >= 30) {

        showToast("Our garden is full of flowers! 🌷");

        return;

    }

    const flower =
        document.createElement("span");

    flower.className = "garden-flower";

    flower.textContent =
        flowerTypes[
            Math.floor(Math.random() * flowerTypes.length)
        ];

    flowerGarden.insertBefore(
        flower,
        flowerGarden.querySelector(".garden-ground")
    );

    flowersPlanted++;

    flowerCount.textContent =
        "Flowers planted: " + flowersPlanted;

    showToast("A new flower has grown! 🌷");

});


/* TEDDY BEAR */

const teddyCharacter =
    document.getElementById("teddyCharacter");

const teddyMessage =
    document.getElementById("teddyMessage");

const happinessFill =
    document.getElementById("happinessFill");

const happinessValue =
    document.getElementById("happinessValue");

const feedTeddy =
    document.getElementById("feedTeddy");

const playTeddy =
    document.getElementById("playTeddy");

const loveTeddy =
    document.getElementById("loveTeddy");

let happiness = 50;


function updateHappiness(amount, message) {

    happiness += amount;

    happiness = Math.max(
        0,
        Math.min(100, happiness)
    );

    happinessFill.style.width =
        happiness + "%";

    happinessValue.textContent = happiness;

    teddyMessage.textContent = message;

    teddyCharacter.style.transform = "scale(1.2)";

    setTimeout(function () {

        teddyCharacter.style.transform = "scale(1)";

    }, 300);

}


feedTeddy.addEventListener("click", function () {

    updateHappiness(
        10,
        "Yummy! Teddy loves honey! 🍯"
    );

});


playTeddy.addEventListener("click", function () {

    updateHappiness(
        15,
        "Yay! Playing is so much fun! 🎈"
    );

});


loveTeddy.addEventListener("click", function () {

    updateHappiness(
        20,
        "Awww! Teddy sends you lots of love! 💗"
    );

});


/* CATCH THE HEARTS GAME */

const gameArea =
    document.getElementById("gameArea");

const gameHeart =
    document.getElementById("gameHeart");

const scoreElement =
    document.getElementById("score");

const startGame =
    document.getElementById("startGame");

const gameMessage =
    document.getElementById("gameMessage");

let score = 0;

let gameRunning = false;


function moveHeart() {

    const maxX =
        gameArea.clientWidth - 45;

    const maxY =
        gameArea.clientHeight - 45;

    const x = Math.random() * maxX;

    const y = Math.random() * maxY;

    gameHeart.style.left = x + "px";

    gameHeart.style.top = y + "px";

    gameHeart.style.transform = "none";

}


gameHeart.addEventListener("click", function () {

    if (!gameRunning) return;

    score++;

    scoreElement.textContent = score;

    moveHeart();

    if (score % 5 === 0) {

        showToast("Amazing! " + score + " hearts! 💗");

    }

});


startGame.addEventListener("click", function () {

    if (gameRunning) {

        return;

    }

    score = 0;

    scoreElement.textContent = score;

    gameRunning = true;

    gameMessage.textContent =
        "Catch as many hearts as you can!";

    startGame.textContent = "Playing...";

    moveHeart();

    let remainingTime = 20;

    gameMessage.textContent =
        "Time: " + remainingTime + " seconds";

    const timer = setInterval(function () {

        remainingTime--;

        gameMessage.textContent =
            "Time: " + remainingTime + " seconds";

        if (remainingTime <= 0) {

            clearInterval(timer);

            gameRunning = false;

            startGame.textContent = "Play Again ♡";

            gameMessage.textContent =
                "Game over! You collected " +
                score + " hearts! 💗";

            showToast("Your score: " + score);

        }

    }, 1000);

});


/* PLANET MESSAGES */

const planetCards =
    document.querySelectorAll(".planet-card");

const planetMessage =
    document.getElementById("planetMessage");


planetCards.forEach(function (planet) {

    planet.addEventListener("click", function () {

        planetMessage.textContent =
            planet.dataset.message;

        planetMessage.style.animation =
            "welcomeAppear .4s ease";

        createHeartBurst();

    });

});


/* THEME CHANGER */

const themeButtons =
    document.querySelectorAll(".theme-buttons button");


function changeTheme(theme) {

    document.body.dataset.theme = theme;

    localStorage.setItem("mollaAjiTheme", theme);

    showToast("Your universe has changed! ✨");

}


themeButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const selectedTheme =
            button.dataset.theme;

        changeTheme(selectedTheme);

    });

});


const savedTheme =
    localStorage.getItem("mollaAjiTheme");

if (savedTheme) {

    document.body.dataset.theme = savedTheme;

} else {

    document.body.dataset.theme = "pink";

}


/* MUSIC PLAYER */

const musicPlayer =
    document.getElementById("musicPlayer");

const musicPlay =
    document.getElementById("musicPlay");

const musicMute =
    document.getElementById("musicMute");

const musicProgress =
    document.getElementById("musicProgress");

const musicStatus =
    document.getElementById("musicStatus");


musicPlay.addEventListener("click", function () {

    if (musicPlayer.paused) {

        musicPlayer.play().then(function () {

            musicPlay.textContent = "❚❚";

            musicStatus.textContent =
                "Now playing ♡";

        }).catch(function () {

            showToast("Periksa file music/lagu.mp3");

        });

    } else {

        musicPlayer.pause();

        musicPlay.textContent = "▶";

        musicStatus.textContent =
            "Music paused";

    }

});


musicMute.addEventListener("click", function () {

    musicPlayer.muted = !musicPlayer.muted;

    musicMute.textContent =
        musicPlayer.muted ? "🔇" : "🔊";

});


musicPlayer.addEventListener("timeupdate", function () {

    if (!musicPlayer.duration) return;

    const progress =
        (musicPlayer.currentTime / musicPlayer.duration) * 100;

    musicProgress.style.width =
        progress + "%";

});


musicPlayer.addEventListener("ended", function () {

    musicPlay.textContent = "▶";

    musicStatus.textContent =
        "Song finished ♡";

});


/* LOVE LETTER MODAL */

const openLetter =
    document.getElementById("openLetter");

const closeLetter =
    document.getElementById("closeLetter");

const letterModal =
    document.getElementById("letterModal");


openLetter.addEventListener("click", function () {

    letterModal.classList.add("active");

    createHeartBurst();

});


closeLetter.addEventListener("click", function () {

    letterModal.classList.remove("active");

});


letterModal.addEventListener("click", function (event) {

    if (event.target === letterModal) {

        letterModal.classList.remove("active");

    }

});


/* KEYBOARD ESCAPE */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        letterModal.classList.remove("active");

        imageModal.classList.remove("active");

    }

});


/* SCROLL REVEAL */

const observerOptions = {

    threshold: 0.12

};


const revealObserver =
    new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    }, observerOptions);


document.querySelectorAll(
    ".section, .quote-section"
).forEach(function (section) {

    section.classList.add("reveal");

    revealObserver.observe(section);

});


/* RANDOM DECORATION ON CLICK */

document.addEventListener("click", function (event) {

    if (
        event.target.tagName === "BUTTON" ||
        event.target.tagName === "A"
    ) {

        const sparkle =
            document.createElement("span");

        sparkle.textContent = "✨";

        sparkle.style.position = "fixed";

        sparkle.style.left = event.clientX + "px";

        sparkle.style.top = event.clientY + "px";

        sparkle.style.pointerEvents = "none";

        sparkle.style.zIndex = "5000";

        sparkle.style.fontSize = "18px";

        sparkle.style.transition = "all .7s ease";

        document.body.appendChild(sparkle);

        requestAnimationFrame(function () {

            sparkle.style.transform = "translateY(-35px)";

            sparkle.style.opacity = "0";

        });

        setTimeout(function () {

            sparkle.remove();

        }, 800);

    }

});


/* INITIALIZATION */

console.log(
    "Molla & Aji Universal Love Universe is ready! 💗"
);