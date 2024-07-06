let checkbox=document.querySelector("input");
let monthlyprice=document.querySelectorAll(".monthly-pricing");
let annuallyprice=document.querySelectorAll(".annually-pricing");
let period="annually";
function update(){
    if(period=="annually"){
        period="monthly";
        monthlyprice.forEach(x=>x.style.display="flex");
        annuallyprice.forEach(x=>x.style.display="none");
    }
    else{
        period="annually";
        monthlyprice.forEach(x=>x.style.display="none");
        annuallyprice.forEach(x=>x.style.display="flex");
    }
    console.log(period);
}
checkbox.addEventListener('input',update);