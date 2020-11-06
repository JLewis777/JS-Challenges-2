
// Tom's Mass and Height
var tomMass = 8;
var tomHeight = 9;
// Jerry's Mass and Height
var jerryMass = 45;
var jerryHeight = 10;

function bmi(mass, height) {
  return mass / height ** 2;
}

var tomBmi = bmi(tomMass, tomHeight);
var jerryBmi = bmi(jerryMass, jerryHeight);

var tomHigherBmi = tomBmi > jerryBmi;


console.log(`Is Tom’s BMI higher than Jerry’s? ${tomHigherBmi}`);