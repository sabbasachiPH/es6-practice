// class student{
//
// }
// const sutdent1 = new student();
// const sutdent2 = new student();
// console.log(sutdent1, sutdent2);

// class student{
//     constructor(){
//         this.id = 1;
//         this.name = "mir x ";
//     }
// }
// const sutdent1 = new student();
// const sutdent2 = new student();
// console.log(sutdent1, sutdent2);

class student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.schoolName = "Lalpu";
    }
}
const sutdent1 = new student(1, "Rumi");
const sutdent2 = new student(2, "Asif");
console.log(sutdent1, sutdent2);
console.log(sutdent1.id);
console.log(sutdent1.name);