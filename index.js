let weather ='snowy';

if (weather === 'rainy') {
  console.log("Take an umbrella!"); 
}else {
    console.log("Enjoy the sunshine!"); // Expected output: "Enjoy the sunshine!"
  }
  weather = 'sunny';

if (weather === 'sunny') {
  console.log("Wear sunglasses!"); // Expected output: "Wear sunglasses!"
}

if (weather === 'snowy') {
  console.log("Wear a coat!"); // Expected output: (This will not print because the condition is false)
}

age = 18;
minDrivingAge = '18';
let hasLicense = false;

// Using && (AND) operator to check if both conditions are true
if (age == minDrivingAge && hasLicense) {
  console.log("You can drive."); // Expected output: (This will not print because hasLicense is false)
} else {
  console.log("You cannot drive."); // Expected output: "You cannot drive."
}

let isWeekend = false;
if (!isWeekend) {
  console.log("It's a weekday."); // Expected output: "It's a weekday."
}