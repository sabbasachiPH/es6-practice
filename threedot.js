const array1 = [1, 3, 5, 7, 9];
const array2 = [2, 4, 6, 8, 10];
const array3 = [12, 24, 36, 48, 100];
const combineArray = array1.concat(array2);
const combineArray2 = array1.concat(array2).concat(array3.concat([1000, 5000]));
/**use of spred operator for concating array */
const spredArray = [...array1, ...array2, ...array3];
const maximumInCombine = Math.max(...spredArray);
console.log(combineArray);
console.log(combineArray2);
console.log(spredArray);
console.log(maximumInCombine);