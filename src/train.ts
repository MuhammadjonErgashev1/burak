function reverseSentence(str:string){
  let reversed = str.split("").reverse().join("");
  return reversed.split(" ").reverse().join(" ");
}
console.log(reverseSentence("hello world"))

/*
 front validation
 backend validation
 database validation
 */








//task K. //A, E, I, O, U 
// 1-usul
// function countVowels(str: string) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   let count = 0;

//   for (let char of str.toLowerCase()) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }

//   return count;
// }

// 2-usul

// function countVowels(str:string){
//   let count = 0;
//   let vowels=['a','e','i','o','u']; //buyuk
// for(let i=0; i<str.length; i++){
//   if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o'|| str[i] === 'u'){
//     count ++;
    
//   }
// }
// return count;
// }
// const result=countVowels("ensiklopediyaai")
// console.log(result);










// //TAsK J
// function findLongestWord(str:string) {
//   let words = str.split(" ");
//   let longest = "";
//   for (let word of words) {
//     if (word.length > longest.length) {
//       longest = word;
//     }
//   }
//   return longest;
// }

// const result = findLongestWord("this is uzbekistan")
// console.log(result)





// //Task-I

// function majorityElement(nums:number[]){ //1 2 2 3 4 5 4 2
  
//   let countMax= 0;
//   let maxSon=0;
  
//   for(let i=0; i<nums.length; i++){
//     let count = 0;

//     for(let j=0; j<nums.length; j++){
//       if(nums[i]===nums[j]){
//         count++;
//       }
//     }
//     if(count>countMax){
//       countMax=count;
//       maxSon=nums[i];
//     }
      
// }
// return maxSon;
// }
// const son:number[]=[1,2,2,3,4,5,4,2,3,3,3,3];
// console.log(majorityElement(son));



/** project standarts:
 -logging standart
-naming standart
    function, method, variable =>camel goHome
    class => pascal 
    folder => kebab
    css => snake
  -Error handling
**/

/* 
Traditional frontend development  => BSSR(Admin) yoki SSR =>ejs;
Modern frontend development       => SPA(User) =>REACT;
*/




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


