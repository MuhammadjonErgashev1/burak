//task H 1-usul
// function getPositive(arr:number[]){
    
//         const positiv = arr.filter(item=>item>0)
//         return positiv;
// }
// const numbers = [2,3,-1.0,8,10,-3,-7]
// console.log(getPositive(numbers));

// 2-usul
function getPositive(arr:number[]){
    const positivnumber: number[] = [];
    for(let i=0; i<arr.length; i++)
        {
        if(arr[i]>0){
            positivnumber.push(arr[i]);
        }
    }
    return positivnumber;
}
const numbers = [2,3,-1.0,8,10,-3,-7]
console.log(getPositive(numbers));


