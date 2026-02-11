// console.log("first")
// console.log("dec")
// //-----Asynch
// console.log("3rdd")

// function aa(){
//     console.log("first")
// }
// setTimeout(aa,2000)
// setTimeout(()=>{
//     console.log("first");
// },2000);//take 2 sec time
   


// //   set interval
// let count=0;
// let id = setInterval(()=>{
//     console.log("first");
//     count ++;
//     if(count==5){
//         clearInterval(id);
//     }
// },2000);


// 
// function roll(num,next){
//     let c=1000;
//     setTimeout(()=>{
//         console.log("Roll. no. is "+num);
//         if(next)next();
//             c=c+1000;


//     },c)
//     //node callback.jsc= c+1000;
// }
// roll(12212,()=>{

//         //c=c+1000;

// console.log("wait");
// roll(12312,()=>{
//     console.log("wait");
//     roll(12512);
// });
// });

let ulTeam=["a","b","c"];
let flutterTeam=["d","e","f"];
function showMenu(){
    console.log(ulTeam);
    console.log(flutterTeam);
    let merge=[...ulTeam ,...flutterTeam];
    console.log(merge);
}
showMenu()
