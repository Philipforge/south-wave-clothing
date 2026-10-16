//menu icon

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("nav");

menuButton.addEventListener("click", function(){
    navMenu.classList.toggle("show");

});






//mt

let total = 25000;

if (total >= 20000) {
    console.log("You qualify for a discount");

    let discount = total * 0.10;
    let amountToPay = total - discount;

    console.log("Discount: ₦" + discount);
    console.log("Amount to pay: ₦" + amountToPay);
} else {
    console.log("Sorry, no discount");
}


let scores = 30;

if (scores >= 50) {
    console.log ('cONGRTS! YOU PaSSED');
} else {
    console.log ('Failed');
}

let Username = "admin";
let Password = "11111";

if (Username === "admin" && Password ==="12356") {
     console.log ('Login Sucessful');
} 
else {
    console.log("Invalid username or password.");
}
