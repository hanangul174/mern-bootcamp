const array = [1, -2, 3, 4,6,-10,11];
const array1 = [1, 42.2, 3.4, 0.4,6,0.200];
let sumPositive = 0;
let sumdecimal = 0;
for (let i = 0; i < array.length; i++) {
    sumPositive += array[i];
}
for (let i = 0; i < array1.length; i++) {
    sumdecimal += array1[i];
}
console.log(sumPositive);
console.log(sumdecimal);