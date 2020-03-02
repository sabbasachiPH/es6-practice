class Parent{
    constructor(){
        this.fatherName = "saha";
    }
}
// class Child{
//     constructor(name){
//         this.name = name;
//     }
// }
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    fullName(){
       return this.name + " " + this.fatherName;
    }
}
const baby = new Child("Rentu");
const baby2 = new Child("Kalu");

console.log(baby);
console.log(baby.fullName());
console.log(baby2.fullName());
