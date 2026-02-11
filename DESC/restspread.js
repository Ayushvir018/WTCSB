// function add(...number){ //restt h ...
//     // return a+b+c;
//     let total=0;
//     // for(let i=0;i<number.length;i++){
//     for(let i in number){
//         total=total+number[i]
//     }
//     return total
// }
// console.log(add(1,2,3,4,5))

// let a =[1,2,3,4,5];
// let[first,sec,...last]=a;
// console.log(first,sec,last);


// const even = (a) => {
//     if (a % 2 === 0) {
//         console.log("even");
//     } else {
//         console.log("odd");
//     }
// };

// even(5);

const reverseString = str => {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    return rev;
};

console.log(reverseString("world"));

