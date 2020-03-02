
/* Traditional way to declare default value of a parameter in a function
function add(num1, num2){
    num2 = num2 || 0;
    return num1 + num2;
}
console.log(add(2));

es6 version of declearing function default value
function add(num1, num2 = 5){
    return num1 + num2;
}
console.log(add(5)); */