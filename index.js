// start task1
// Add Variables Here
var number_one=10;
var number_two=20;
// Ouput
console.log(number_one +"" +number_two); // Normal Concatenate => 1020
console.log(typeof (number_one +"" +number_two)); // Normal Concatenate => String
console.log(`${number_one}${number_two}`); // Template Literals Way => 1020
console.log(typeof(`${number_one}${number_two}`)); // Template Literals Way => String

console.log(number_one +"\n"+number_two);
/*
  Normal Concatenate
  20
  10
*/

console.log(`${number_one}
${number_two}`);
/*
  Template Literals Way
  20
  10
*/
// end task 1
// start task 2

console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

// end task 2
// start task 3
console.log("\`I'm In \n\\\\ \nLove \\\\ \"\"\" \'\'\' \n++ With ++ \n\\\"\"\"\\\"\"\"\n\"\"JavaScript\"\"\`\`");
// end task 3
// start task 4
let a = 21;
let b = 20;

console.log("_"+a+"_"+b+a+"_"+b+a+"_"+b+"_"); // _21_2021_2021_2021_20_
// end task 4