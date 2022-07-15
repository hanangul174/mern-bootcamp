var myArray = [1,-2,-3,4,6,-7];

function Negative_Numbers(array) {
  return array.filter(function(value) {
    return value < 0;
  });
}
console.log(Negative_Numbers(myArray));