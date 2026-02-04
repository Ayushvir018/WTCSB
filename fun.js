// (function show(){
//     console.log("Hello");
// })();
//"2"
// (()=> {
//     console.log("Hello");
// })();
//"3"
// const show=()=> {

//      console.log("Hello");
// };
// show();
//"4"
// function per(){
//     this.age=25;
//     setTimeout(function(){
//         console.log(this.age);
//     },1000);
// }
// new per();
//"5"
// function per(){
//     this.age=25;
//     setTimeout(()=>{
//         console.log(this.age);
//     },1000);
// }
// new per();
// 6
const aa= ()=> { return { user: "name"}};
console.log(aa());
const bb= ()=> [1,2,3,4,5];
console.log(bb());

const user = {
    name : "ag", age :20,
    welcome :  function(){
        console.log(`hello ${this.name}`);
        console.log(this)

    }
};
const f=user.welcome();
console.log(f);

// user.name= "ayush";
// user.welcome();
