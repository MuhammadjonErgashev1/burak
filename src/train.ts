//Task-I

function majorityElement(nums:number[]){ //1 2 2 3 4 5 4 2
  
  let countMax= 0;
  let maxSon=0;
  
  for(let i=0; i<nums.length; i++){
    let count = 0;

    for(let j=0; j<nums.length; j++){
      if(nums[i]===nums[j]){
        count++;
      }
    }
    if(count>countMax){
      countMax=count;
      maxSon=nums[i];
    }
      
}
return maxSon;
}
const son:number[]=[1,2,2,3,4,5,4,2,3,3,3,3];
console.log(majorityElement(son));



/** project standarts:
 -logging standart
-naming standart
    function, method, variable =>camel goHome
    class => pascal 
    folder => kebab
    css => snake
  -Error handling
**/




// // task H2

// import { isNumberObject } from "util/types";

// function getDigits(str: string) {
//   const text = str.split("");
//   const num: number[] = [];
//   for (let i = 0; i < text.length; i++) {
//     if (!isNaN(Number(text[i]))) {
//       num.push(Number(text[i]));
//     }
//   }

//   console.log("raqamlar:", num.join(""));
// }

// getDigits("11m");


//task H 1-usul

// function getPositive(arr:number[]){
    
//         const positiv = arr.filter(item=>item>0)
//         return positiv;
// }
// const numbers = [2,3,-1.0,8,10,-3,-7]
// console.log(getPositive(numbers));

// 2-usul
// function getPositive(arr:number[]){
//     const positivnumber: number[] = [];
//     for(let i=0; i<arr.length; i++)
//         {
//         if(arr[i]>0){
//             positivnumber.push(arr[i]);
//         }
//     }
//     return positivnumber;
// }
// const numbers = [2,3,-1.0,8,10,-3,-7]
// console.log(getPositive(numbers));


