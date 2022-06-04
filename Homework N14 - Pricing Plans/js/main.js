const checkerBtn = document.querySelector(".pricing-plan-switcher");

let activeDuration = document.querySelector(".active-duration");

let monthly = true;

const monthlyPrices = ['$49', '$99' , '$149'];
const yearlyPrices = ['$550', '$1100', '$1500'];

let priceArea = document.querySelectorAll(".price");
let durationArea = document.querySelectorAll('.duration');


checkerBtn.addEventListener("click",  () => {
    if(monthly === true) {
        monthly = false;
        activeDuration.style.left = "calc(100% - 108px)";
        
        for(let i = 0; i < priceArea.length; i++){
            priceArea[i].innerText = yearlyPrices[i];
            durationArea[i].innerText = "/ year";
        }
    } else {
        monthly = true;
        activeDuration.style.left = "8px";
        
        for(let i = 0; i < priceArea.length; i++){
            priceArea[i].innerText = monthlyPrices[i];
            durationArea[i].innerText = "/ month";
        }
    }
});