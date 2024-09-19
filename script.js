// Declare and use variables
let studentName = "John";
let studentAge = 21;
let isEnrolled = true;

console.log(studentName);
console.log(studentAge);
console.log(isEnrolled);

// Demonstrate Data Types

let productName = "lamp";
let productPrice = 10.99;
let productAvailability = false;
let productSet = ["table", "chair", "lamp", "carpet"];
let productProperties = {
    manufacturer: "LampCorp", 
    weightKg: 5, 
    productNumber: 1037358, 
    inProduction: true
};

console.log(productName);
console.log(productPrice);
console.log(productAvailability);
console.log(productSet);
console.log(productProperties);

// Use Basic Operators

studentAge *= 3;
productPrice -= 2;
productProperties["weightKg"] *= 1.5;
productProperties["productNumber"] /= 8;

console.log(studentAge);
console.log(productPrice);
console.log(productProperties["weightKg"]);
console.log(productProperties["productNumber"] );

console.log(studentAge > productPrice);
console.log(productPrice < productProperties["weightKg"]);
console.log(studentAge === "63");
console.log(productPrice !== "8.99");
console.log(productAvailability && productProperties["inProduction"]);
console.log(productAvailability || productProperties["inProduction"]);
console.log(!productAvailability);