// const cal=(a,b)=>{
//     const add= (a,b)=>{
//         res=a+b;
//     };
//     const sub= (a,b)=>{
//         res=a-b;
//     };
//     const mul= (a,b)=>{
//         res=a*b;
//     };
//     const div= (a,b)=>{
//         res=a/b;
//     };
//     console.log(cal)
// }
//  2
// const cal=(a,b)=>({
//     add: (a,b)=>a+b,
//     sub: (a,b)=>a-b,
//     mul: (a,b)=>a*b,
//     div: (a,b)=>(b==0 ? "Error aa gai " : a/b),

// });
// console.log(cal().add(11,5));
// console.log(cal().mul(11,5));
// console.log(cal().sub(11,5));
// console.log(cal().div(11,5));

//  3
// const cal = (a, b) => {
//     return {
//         add: a + b,
//         sub: a - b,
//         mul: a * b,
//         div: a / b
//     };
// };

// const result = cal(10, 5);
// console.log(result);
//

//  4 switch 
const cal = (a, b, op) => {
    switch (op) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return b !== 0 ? a / b : "Cannot divide by zero";
        default:
            return "Invalid operator";
    }
};
console.log(cal(10, 5, "+"));
console.log(cal(10, 5, "-"));
console.log(cal(10, 5, "*"));
console.log(cal(10, 5, "/"));




