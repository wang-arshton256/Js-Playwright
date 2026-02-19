// Concaination & interpolation
var itemName = "Cup";
var priceOfItem = 50;

// Interpolation
var messageToPrint = (`The price of your ${itemName} is ${priceOfItem} dollars`);
console.log(messageToPrint);

// Concatination
var messageToPrint2 = "The price of your" + " " + itemName + " " + "is" + " " + priceOfItem + " " + "dollars"; 
console.log(messageToPrint2);
