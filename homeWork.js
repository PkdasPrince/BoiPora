//declare a variable called name and assign my name to it.
let myName='Prince';
console.log(myName);
//Create a variable age and assign my age to it.
let age= 32;
//Calculate the sum of two numbers, num1 and num2.
let num1= 20;
let num2= 25;
let sum = num1+ num2;
console.log(sum);
//Calculate the product of two numbers, num1 and num2.
let product_num1 = 5;
let product_num2 = 8;
let product = product_num1 * product_num2;
console.log(product);
//Check if a number is even or add. Create a variable isEven and assign true if the number is even and false if the number is odd
let number = 6;
let isEven = number % 2;
if (isEven = 0) {
    console.log(number + "is even");
}
else {
    console.log(number + "It's odd");
}
//Create an array favoriteColors containing three favorite colors of yours
const favoriteColors = ["red","blue", "green"];
//Accdss and log the 2nd favorite color from the favoriteColors array.
console.log("my favorite color is:",favoriteColors[1]);
//Add a new color, "purple,"to the favoriteColors array
favoriteColors.push('purple');
console.log(favoriteColors);
//Check if a given number is greater than 10. If it is ,log "Greater  than 10," otherwise, log "Less than or equal to 10."
let given_number = 10;
if (given_number >10){
    console.log("Greater than 10");
}
else if (given_number <=10){
    console.log("Less than or equal to 10")
}
// Create a variable isRaining and assign true if it's raining, and false if it is not.
let isRaining = true;
if (isRaining =true){
    console.log("it's is raining");
}
else("it is not");
//Create a variable temperature and assign a value. Then, check if it's hot (greater than 30),warm (between 20 and 30), or cold (less than 20).
let temperature = 30;
if (temperature > 30){
    console.log("it's hot");
} else if(temperature>= 20 && temperature<=30){
    console.log("it's warm");
}
else{
    console.log("It's cold");
}
// Calculate the area of a rectangle with a given width and height.
let width = 20;
let height = 10;
let area = width * height;
console.log('The area of rectangle is ${area}');
// Create an array favoriteFruits containing five favorite  fruits of yours.
const favoriteFruits = ["Mango", "Jackfruit", "Lichi", "Papaya", "Orange"];
// Access and log the 3rd favorite fruit from the favoriteFruits array.
console.log("my 3rd favorite furits is ",favoriteFruits[2]);
// Add a new favorite fruit, "grape", to the favoriteFruits aray.
favoriteFruits.unshift("grape");
console.log(favoriteFruits);
// Create an aray of three favorite movies.
const favoriteMovies = ["Barofi","SpaiderMan","Taitanic"];
console.log(favoriteMovies);
console.log(favoriteMovies.length);
console.log(favoriteMovies [1]);
//data type prctice
console.log('Hello World');
console.log( 10+15);
let x = 25;
let y = 20;
let n = "Number";
let m = true;
let p = 'prince';
let c = (x + y);
//Use of Arithmatic operator
let add = (x+y);
console.log(add);
let sub = ( x-y);
console.log(sub);
let div = (x/y);
console.log(div);
let multi = (x*y);
console.log(multi);
let modu = (x%y);
console.log(modu);
console.log(x + "+" + y+ "=" + c);
console.log(x + "-" + y+ "=" + (x-y));
console.log(x + "*" + y+ "=" + (x*y));
console.log(x + "/" + y+ "=" + (x/y));
console.log ( typeof x);
console.log ( typeof n);
console.log ( typeof m);
console.log ( typeof p); 
//Assignment operator
let asso = 15;
asso+=5;
console.log(asso);
asso/=5;
console.log(asso);
asso*=7;
console.log(asso);
asso-=4;
console.log(asso);

