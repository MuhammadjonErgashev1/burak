 // task ZU

 function sumOfUnique(nums: number[]): number {
    const counts: Record<number, number> = {};
    let totalSum: number = 0;

    // Takrorlanishlar sonini yig'ish
    for (const num of nums) {
        counts[num] = (counts[num] || 0) + 1;
    }

    // Unique (takrorlanmagan) sonlarni hisoblash
    for (const key in counts) {
        if (counts[key] === 1) {
            totalSum += parseInt(key);
        }
    }

    return totalSum;
}
console.log(sumOfUnique([1, 2, 3, 2]));
// // task ZT

// function firstUniqueCharIndex(str: string): number {
//     const count: Record<string, number> = {};

//     // Harflar sonini hisoblash
//     for (const ch of str) {
//         count[ch] = (count[ch] ?? 0) + 1;
//     }

//     // Birinchi takrorlanmagan harfni topish
//     for (let i = 0; i < str.length; i++) {
//         if (count[str[i]] === 1) {
//             return i;
//         }
//     }

//     return -1;
// }

// // Misol
// console.log(firstUniqueCharIndex("stamp")); // 0


// //task ZS

// function singleNumber(nums: number[]): number {
//   const map: Record<number, number> = {};

//   for (const num of nums) {
//     map[num] = (map[num] || 0) + 1;
//   }

//   for (const key in map) {
//     if (map[key] === 1) {
//       return Number(key);
//     }
//   }

//   throw new Error("Array ichida bitta element topilmadi");
// }

// console.log(singleNumber([4, 2, 1, 2, 1])); // 4


// //task ZR

// function areArraysEqual(arr1: number[], arr2: number[]): boolean {
//   return arr1.every(item => arr2.includes(item));
// }
// console.log(areArraysEqual([1, 2, 3], [3, 1, 2]));      // true
// console.log(areArraysEqual([1, 2, 3], [3, 1, 2, 1]));   // true
// console.log(areArraysEqual([1, 2, 3], [4, 1, 2]));      // false



// //task ZQ
// function findDuplicates(arr: number[]): number[] {
//   const count: Record<number, number> = {};
//   const result: number[] = [];

//   for (const num of arr) {
//     count[num] = (count[num] || 0) + 1;
//   }

//   for (const num in count) {
//     if (count[num] >= 2) {
//       result.push(Number(num));
//     }
//   }

//   return result;
// }

// // Misol
// console.log(findDuplicates([1, 2, 3, 4, 5, 4, 3, 5, 4])); // [3, 4]

// task ZP

// function countNumberAndLetters(str:string) {
//   let number = 0;
//   let letter = 0;

//   for (const char of str) {
//     if (char >= '0' && char <= '9') {
//       number++;
//     } else if (
//       (char >= 'a' && char <= 'z') ||
//       (char >= 'A' && char <= 'Z')
//     ) {
//       letter++;
//     }
//   }

//   return { number, letter };
// }


// console.log(countNumberAndLetters("string152%\\¥"));
// { number: 3, letter: 6 }


// /Task ZO

// function areParenthesesBalanced(str:string) {
//   let balance = 0;

//   for (const char of str) {
//     if (char === '(') balance++;
//     if (char === ')') balance--;

    
//     if (balance < 0) return false;
//   }

//   return balance === 0;
// }


// console.log(areParenthesesBalanced("string()ichida(qavslar)soni()balansda")); // true
// console.log(areParenthesesBalanced("(abc))")); 



//task ZM
// function reverseInteger(num:number) {
//   return Number(String(num).split('').reverse().join(''));
// }
// console.log(reverseInteger(123456789)); // 987654321


// //task ZL

// function stringToKebab(str: string) {
//   return str
//     .toLowerCase()          
//     .trim()               
//     .replace(/\s+/g, '-');
// }

// console.log(stringToKebab("I love Kebab"));

// //task ZK

// function printNumbers() {
//   let count = 1;

//   const intervalId = setInterval(() => {
//     console.log(count);

//     if (count === 5) {
//       clearInterval(intervalId); // to‘xtatadi
//     }

//     count++;
//   }, 1000);
// }

// printNumbers();


// //task ZJ

// interface NestedArray extends Array<number | NestedArray> {}

// function reduceNestedArray(arr: NestedArray): number {
//   return arr.reduce((sum:number, item) => {
//     if (Array.isArray(item)) {
//       return sum + reduceNestedArray(item);
//     }
//     return sum + item;
//   }, 0);
// }

// // Test
// console.log(reduceNestedArray([1, [1, 2, [4]]])); // 8




// //task ZI

// function delayHelloWorld(text: string) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(text);
//     }, 3000);
//   });
// }


// delayHelloWorld("Hello World!").then(result => {
//   console.log(result);
// });


// task ZG

// function capitalizeWords(str: string): string {
//   if (!str) return '';
  
//   return str
//     .trim() 
//     .toLowerCase()
//     .replace(/\s+/g, '_'); 
// }


// console.log(capitalizeWords('name should be a string')); // 'name_should_be_a_string'
// console.log(capitalizeWords('  Hello World  ')); // 'hello_world'


// //Task ZF

// function capitalizeWords(str: string) {
//   return str
//     .split(' ')
//     .map(word => {
//       if (word.length <= 2) {
//         return word; // 1 yoki 2 harfli so'zlar o'zgarishsiz
//       }
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     })
//     .join(' ');
// }
// console.log(capitalizeWords('name should be a string'));


// //Task ZD

// function changeNumberInArray(index:number, arr:number[], newNumber:number) {
//   if (index < 0 || index >= arr.length) {
//     return "Index notogri";
//   }

//   const newArr = [...arr];
//   newArr[index] = newNumber;
//   return newArr;
// }
// console.log(changeNumberInArray(1, [1, 3, 7, 2], 2))


// //Task ZC

// function celsiusToFahrenheit(celsius:number) {
//     return celsius * 9/5 + 32;
// }
// console.log(celsiusToFahrenheit(0)) ;  
// console.log(celsiusToFahrenheit(10));  
// console.log(celsiusToFahrenheit(25));  


//Task ZB

// function randomBetween(min:number, max:number) {
//   const numbers = [];
//   for (let i = min; i <= max; i++) {
//     numbers.push(i);
//   }
//   // bu indexlarni aniqlab beradi random holda
//   const randomIndex = Math.floor(Math.random() * numbers.length);
//   return numbers[randomIndex];
// }


// console.log(randomBetween(30, 50)); 



// //Task Z

// function sumEvens(arr:number[]) {
//     let sum = 0;

//     for (let num of arr) {
//         if (num % 2 === 0) {
//             sum += num;
//         }
//     }

//     return sum;
// }

// console.log(sumEvens([1, 2, 3, 2]) )


//Task Y
// function findIntersection(arr1: number[], arr2: number[]): number[] {
//     const result: number[] = [];

//     // arr1 elemtlarini tekshirish
//     for (let i = 0; i < arr1.length; i++) {
//         const current = arr1[i];

//         // arr2 ichida bor-yo‘qligini tekshirish
//         for (let j = 0; j < arr2.length; j++) {
//             if (current === arr2[j]) {
//                 result.push(current);
//                 break; // takroran qo‘shilmasligi uchun
//             }
//         }
//     }

//     return result;
// }
// const result=findIntersection([1,2,3,0], [3,2,0])
// console.log(result);





// //Task X
// function countOccurrences(obj: Record<string, any>, keyName: string): number {
//   let count = 0;

//   function recursiveCheck(currentObj: Record<string, any>) {
//     for (const key in currentObj) {

//       // bunda kalit nomlari bir xil bo'lsa sanalayapti
//       if (key === keyName) {
//         count++;
//       }

//       // agar qiymat array yoki object bo'lsa ichiga kirilayapti
//       const value = currentObj[key];
//       if (typeof value === "object" && value !== null) {
//         recursiveCheck(value);
//       }
//     }
//   }

//   recursiveCheck(obj);
//   return count;
// }
// const data = {
//   model: "Bugatti",
//   steer: {
//     model: "HANKOOK",
//     size: 30
//   }
// };
// console.log(countOccurrences(data, "model")); 


// // Task W

// function chunkArray(arr: number[], size: number): number[][] {
//   const result: number[][] = [];
//   let temp: number[] = [];

//   for (let i = 0; i < arr.length; i++) {
//     temp.push(arr[i]);   

//     if (temp.length === size) {
//       result.push(temp); 
//       temp = [];       
//     }
//   }

  
//   if (temp.length > 0) {
//     result.push(temp);
//   }

//   return result;
// }

// console.log(chunkArray([1,2,3,5,4,6,7,9,22,1,1], 3))
  



// //Task V

// function countChars(str:string) {
//    const result: Record<string, number> = {};

//   for (let char of str) {
//     if (result[char]) {
//       result[char]++;         
//     } else {
//       result[char] = 1;      
//     }
//   }

//   return result;
// }

// console.log(countChars("hello"));
// //Task U

// function oddNumbers(num:number){
//   let count = 0;
  
//   while(num>0)
//   {
//     if(num%2===1)
//     {
//       count++;
       
//     }
//     num-=2;
// }
//   return count-1;
// }

// console.log(oddNumbers(9))

// //Task T

// function mergeSortedArray(num1:number[],num2:number[]){
//   let i=0;
//   let j=0;
//   let merged = [];

//   while(i<num1.length && j<num2.length){
//     if(num1[i]<num2[j]){
//       console.log("num1-",num1[i])
//       console.log("num2-",num2[j])
//       merged.push(num1[i])
//       i++;
//     }
//     else{
//       merged.push(num2[j])
//       j++;
//     }
//   }
//   while (i < num1.length) {
//     merged.push(num1[i]);
//     i++;
//   }

//   while (j < num2.length) {
//     merged.push(num2[j]);
//     j++;
//   }

//   return merged;

// }
// console.log(mergeSortedArray([0,1,5], [2,3,4]))

// //Task S
// function missingNumber(nums:number[]){
//   let sum = 0;
//   const length=nums.length
//   for(let i=0; i<length; i++)
//   {
//     sum+=nums[i];
//   }
//   const result = (length*(length+1)/2)-sum;
//   return result;
// }
// console.log(missingNumber([3, 0, 1])); // 2
// console.log(missingNumber([0, 1]));    // 2
// console.log(missingNumber([9,6,4,2,3,5,7,0,1])); // 8

// //Task R

// function calculate(str:string) {
  
//   str = str.replace(/\s+/g, '');

//   let currentNumber = ""; 
//   let sum = 0;            

  
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
    

//     if (char >= '0' && char <= '9') {
     
//       currentNumber += char;
//     } else if (char === '+') {
      
//       sum += Number(currentNumber);
//       currentNumber = ""; 
//     }
//   }

  
//   if (currentNumber !== "") {
//     sum += Number(currentNumber);
//   }

//   return sum;
// }


// console.log(calculate("1 + 3"));         
// console.log(calculate("1 + 2 + 3 + 4"));  
// console.log(calculate("10 + 20 + 30"));   






// //Task Q

// interface User{
//   name: string,
//   brand: string,
// }

// function hasProperty(user: User, key: string){
//   return key in user;
// }
// console.log(hasProperty({ name: "BMW", brand: "M3" }, "brand"));
// console.log(hasProperty({ name: "BMW", brand: "M3" }, "year"));



// // Task P

// function objectToArray(obj: object): [string, any][] {
//   const result: [string, any][] = [];

//   for (const key in obj) {
//     result.push([key, (obj as any)[key]]);
//   }

//   return result;
// }

// console.log(objectToArray({ a: 10, b: 20 }));
// // [['a', 10], ['b', 20]]





// //task O

// function calculateSumOfNumbers( arr: any[]){
//     let sum = 0;
//     for(let i = 0; i< arr.length; i++){
//         if(typeof arr[i] === "number"){
//             sum += arr[i];
//         }
        
//     }
//     return sum;
// }

// const result = [1, 5, 10, "bobur", {x: 10}, true, undefined];
// console.log(calculateSumOfNumbers(result));





// //task N

// function palindromCheck(str:string){
//      for(let i = 0; i< str.length/2; i++){
//             if(str[i] !== str[str.length-1-i])
//             {
//                 return false
//             }
//         }
//         return true;
//     }
 
//  console.log(palindromCheck("dad"))
//  console.log(palindromCheck("son"))
//  console.log(palindromCheck("zammaz"))






// //task M
// function getSquareNumber(nums:number[]){
//   let newArray=[];
  
//   for(let i=0; i<nums.length; i++){
//    newArray.push([nums[i], nums[i]*nums[i]])
//   }
  
//     return newArray
// } 
// console.log(getSquareNumber([1,2,3]))




// function reverseSentence(str:string){
//   let reversed = str.split("").reverse().join("");
//   return reversed.split(" ").reverse().join(" ");
// }
// console.log(reverseSentence("hello world"))

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


