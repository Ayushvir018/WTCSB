const Student= {  //creation of object
    name:"Ayush",
    age:22,
    address: {
        city: "Gzb",
        state: "UP"
    }
}
// const {name,age}=Student;
// // const age=Student.age;
// console.log(name,age);
// const {name: stuname="Amit",age,job="Berojgar",address:{
//     city}}=Student;
//     console.log(stuname,age,job,city);

//desc in function

// function displaystu(Object){
//     console.log(`My name is ${Object.name} and age is ${Object.age}`)
// }
// displaystu(Student);
//
// function displaystu({name,age}){
//     console.log(`My name is ${name} and age is ${age}`)
// }
// displaystu(Student);
// 

// let num=[10,20,30];
// // let[a,b,c]=num;
// let a,b,c =num;
// console.log(a);
// console.log(b);
// console.log(c);
//
// let data=[1,2];
// let [ a=10,b=20]=data;//have to put bracket
// console.log(a);
// console.log(b);

let p=1;
let q=2;
[p,q]=[q,p];//swap
console.log(p);
console.log(q);
let colors=["red","green"];
let[,secondColor]=colors;
console.log(secondColor);