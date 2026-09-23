// ========================================
// GET ELEMENTS
// ========================================

const openBtn =
    document.getElementById("openBtn");

const cover =
    document.getElementById("cover");

const main =
    document.getElementById("main");

const guestNameDisplay =
    document.getElementById("guestName");

const welcomeGuest =
    document.getElementById("welcomeGuest");



// ========================================
// GET GUEST NAME FROM URL
// ========================================

// Example:
//
// ?name=Dara
//
// Online:
//
// https://yourwebsite.vercel.app/?name=Dara


const params =
    new URLSearchParams(
        window.location.search
    );


const guestName =
    params.get("name");



// ========================================
// SHOW GUEST NAME
// ========================================

if (guestName) {

    guestNameDisplay.textContent =
        guestName;

}
else {

    guestNameDisplay.textContent =
        "ចេង សុគារ៉ា & គាត ភីន";

}



// ========================================
// OPEN INVITATION
// ========================================

openBtn.addEventListener(
    "click",
    function () {


        // Show guest name inside website

        if (guestName) {

            welcomeGuest.textContent =
                "សូមស្វាគមន៍ " +
                guestName;

        }
        else {

            welcomeGuest.textContent =
                "សូមស្វាគមន៍ ភ្ញៀវកិត្តិយស";

        }



        // Fade opening page

        cover.style.transition =
            "opacity 0.7s ease";


        cover.style.opacity =
            "0";



        setTimeout(

            function () {


                cover.style.display =
                    "none";


                main.classList.remove(
                    "hidden"
                );


                window.scrollTo(
                    0,
                    0
                );


            },

            700

        );

    }

);



// ========================================
// WEDDING COUNTDOWN
// ========================================

// December 21, 2026
// 5:30 PM

const weddingDate =
    new Date(
        "2026-12-21T17:30:00"
    );



function countdown() {


    const now =
        new Date();


    const distance =
        weddingDate - now;



    if (distance <= 0) {


        document.getElementById(
            "days"
        ).textContent =
            "00";


        document.getElementById(
            "hours"
        ).textContent =
            "00";


        document.getElementById(
            "minutes"
        ).textContent =
            "00";


        document.getElementById(
            "seconds"
        ).textContent =
            "00";


        return;

    }



    // DAYS

    const days =
        Math.floor(

            distance /

            (
                1000 *
                60 *
                60 *
                24
            )

        );



    // HOURS

    const hours =
        Math.floor(

            (

                distance /

                (
                    1000 *
                    60 *
                    60
                )

            )

            % 24

        );



    // MINUTES

    const minutes =
        Math.floor(

            (

                distance /

                (
                    1000 *
                    60
                )

            )

            % 60

        );



    // SECONDS

    const seconds =
        Math.floor(

            (

                distance /
                1000

            )

            % 60

        );



    // DISPLAY

    document.getElementById(
        "days"
    ).textContent =

        String(
            days
        ).padStart(
            2,
            "0"
        );


    document.getElementById(
        "hours"
    ).textContent =

        String(
            hours
        ).padStart(
            2,
            "0"
        );


    document.getElementById(
        "minutes"
    ).textContent =

        String(
            minutes
        ).padStart(
            2,
            "0"
        );


    document.getElementById(
        "seconds"
    ).textContent =

        String(
            seconds
        ).padStart(
            2,
            "0"
        );

}



// Start countdown

countdown();


setInterval(
    countdown,
    1000
);



// ========================================
// FALLING HEART ANIMATION
// ========================================

const heartContainer =
    document.getElementById(
        "heart-container"
    );



function createHeart() {


    const heart =
        document.createElement(
            "div"
        );


    heart.classList.add(
        "falling-heart"
    );


    heart.innerHTML =
        "♥";
        "❤️";



    // Random left position

    heart.style.left =
        Math.random() *
        100 +
        "vw";



    // Bigger heart size
    // 22px - 42px

    heart.style.fontSize =
        (
            Math.random() *
            20 +
            22
        )
        +
        "px";



    // Random falling speed

    heart.style.animationDuration =
        (
            Math.random() *
            4 +
            5
        )
        +
        "s";



    heartContainer.appendChild(
        heart
    );



    // Delete heart after animation

    setTimeout(

        function () {

            heart.remove();

        },

        100000

    );

}



// ========================================
// CREATE MORE HEARTS
// ========================================

// Creates 2 hearts every 350ms

setInterval(

    function () {


        createHeart();

        createHeart();


    },

    350

);