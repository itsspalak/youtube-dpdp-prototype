const screens = document.querySelectorAll(".screen");
const nextButtons = document.querySelectorAll(".nextBtn");

let currentScreen = 0;

nextButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Hide current screen
        screens[currentScreen].classList.remove("active");

        // Go to next screen
        currentScreen++;

        // Prevent going beyond last screen
        if(currentScreen >= screens.length){
            currentScreen = screens.length - 1;
        }

        // Show next screen
        screens[currentScreen].classList.add("active");

    });

});