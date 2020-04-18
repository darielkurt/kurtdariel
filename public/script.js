function functionTesting(){
    let x=5;

    while(x > 0){
    console.log(x);
    x = x -1;
    }
}

functionTesting();

//

function printAmount(amt){
    console.log(amt.toFixed(2));
}

function formatAmount(){
    return "$" + amount.toFixed(2);
}

var amount = 99.99;

printAmount(amount * 2);

amount = formatAmount();
console.log (amount);

// 

function cube(n){
    return n = Math.pow(n,3);
}

console.log(cube(3));

//

function discount(x,y){
    if(x==1){
       return y = y - (y*0.3);
    } else {
        return y
    }
}

console.log("The final amount to be paid is P" + discount(0,3000));

//

const TAX_RATE =  0.08;

function calculateFinalPurchaseAmount(amt){
    return amt = amt + (amt * TAX_RATE);
}

var amount = 99.99;
amount = calculateFinalPurchaseAmount(amount);

console.log(amount.toFixed(2));

//

const rateOfTax = 0.08, phonePrice = 2000, accessoryPrice = 500;
var balance=0,total=0,phoneCount=0,accessoryCount=0,finalTotal, spendingThreshold = 4000;

balance = prompt("What is the balance of your bank account");

while(total < balance){
    if (spendingThreshold > 0){
        spendingThreshold = spendingThreshold - phonePrice - accessoryPrice;
        balance = balance - phonePrice - accessoryPrice;
        total = total + phonePrice + accessoryPrice;

        phoneCount++;
        accessoryCount++;
    }else {
        balance = balance - phonePrice;
        total = total + phonePrice; 

        phoneCount++;
    }
}

console.log(total);

function calculatePurchaseAmount(amt2){
    return amt2 = amt2 + (amt2 * rateOfTax);
}

total = calculatePurchaseAmount(total);

function formatAmt(){
    return "$" + total.toFixed(2); 
}

finalTotal = formatAmt();

console.log("The total price is " + finalTotal);
console.log(phoneCount + " phones and " + accessoryCount + " accessories");
