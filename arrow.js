/**one way */
function doubleIt(num){
    return num * 2;
}

const result = doubleIt(5);
console.log(result);
 /** way twwo */
const trippleIt = function myFun(num){
    return num * 3;
}
console.log(trippleIt(3));

/* way three arrow function */
const arrow = num => num *3 ;
//const arrowResult = arrow(3);
 console.log(arrow(4));
 const arrow1 = (x , y) => x + y ;
 const arrow2 = () => 2;
 const arrow3 = (x , y) => x * y ;
 const arrow4 = (x , y) => {
     const sum = x + y;
     const difference = x - y;
     const comb = sum + difference;
     return comb;
 }
 console.log(arrow2(), arrow1(2, 3), arrow3(3, 4));
 console.log(arrow4(5 , 3));





