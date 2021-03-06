// Tom - height:  9in mass: 8 g
// Jerry - height: 10in mass: 45 g

// Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
// BMI = mass / height ^2 = mass / (height * height)

// Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. 
// Create a Boolean variable containing information about whether Tom has a higher BMI than Jerry. 
// Print a string to the console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).

const jerry = BMI (10, 45);
const tom = BMI (9, 8);

function BMI (mass, height) {
    return (mass) / (Math.pow(height, 2))
}

console.log(`Is Tom's BMI higher than Jerry's? ${tom > jerry}`);


