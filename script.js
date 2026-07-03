// ===============================
// YouTube DPDP Prototype
// Premium Script
// ===============================

const screens = document.querySelectorAll(".screen");
const nextButtons = document.querySelectorAll(".next");
const backBtn = document.getElementById("backBtn");
const progressBar = document.getElementById("progressBar");
const stepNumber = document.getElementById("stepNumber");

let current = 0;

// Show Screen
function showScreen(index){

    screens.forEach(screen=>screen.classList.remove("active"));

    screens[index].classList.add("active");

    stepNumber.innerText=index+1;

    progressBar.style.width=((index+1)/screens.length)*100+"%";

    if(index===0){

        backBtn.style.visibility="hidden";

    }else{

        backBtn.style.visibility="visible";

    }

}

showScreen(current);

// ===============================
// NEXT BUTTON
// ===============================

nextButtons.forEach(button=>{

button.addEventListener("click",()=>{

    // Screen 2 Validation
    if(current===1){

        const dob=document.getElementById("dob").value;

        if(dob===""){

            alert("Please enter your Date of Birth");

            return;

        }

    }

    // Screen 3 Validation
    if(current===2){

        const phone=document.getElementById("parentPhone").value.trim();

        if(phone.length<10){

            alert("Enter a valid Parent Mobile Number");

            return;

        }

    }

    // Screen 4 Validation
    if(current===3){

        const otpInputs=document.querySelectorAll(".otp-container input");

        let otp="";

        otpInputs.forEach(input=>otp+=input.value);

        if(otp.length<6){

            alert("Please enter the complete OTP");

            return;

        }

    }

    if(current<screens.length-1){

        current++;

        showScreen(current);

    }

});

});

// ===============================
// BACK BUTTON
// ===============================

backBtn.addEventListener("click",()=>{

if(current>0){

current--;

showScreen(current);

}

});

// ===============================
// OTP AUTO MOVE
// ===============================

const otpInputs=document.querySelectorAll(".otp-container input");

otpInputs.forEach((input,index)=>{

input.addEventListener("input",()=>{

if(input.value.length===1 && index<otpInputs.length-1){

otpInputs[index+1].focus();

}

});

input.addEventListener("keydown",(e)=>{

if(e.key==="Backspace" && input.value==="" && index>0){

otpInputs[index-1].focus();

}

});

});

// ===============================
// FINISH BUTTON
// ===============================

const finish=document.querySelector(".finish");

if(finish){

finish.addEventListener("click",()=>{

alert("🎉 Thank you!\n\nYour DPDP-compliant YouTube account has been successfully created.");

});

}

// ===============================
// BUTTON ANIMATION
// ===============================

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("click",()=>{

button.style.transform="scale(.97)";

setTimeout(()=>{

button.style.transform="scale(1)";

},150);

});

});

// ===============================
// CARD HOVER EFFECT
// ===============================

document.querySelectorAll(".dashboard-card").forEach(card=>{

card.addEventListener("click",()=>{

card.style.borderColor="#ff0000";

setTimeout(()=>{

card.style.borderColor="#ECECEC";

},300);

});

});

// ===============================
// PREVENT FUTURE DOB
// ===============================

const dob=document.getElementById("dob");

if(dob){

const today=new Date().toISOString().split("T")[0];

dob.max=today;

}