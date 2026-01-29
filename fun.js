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
function per(){
    this.age=25;
    setTimeout(()=>{
        console.log(this.age);
    },1000);
}
new per();