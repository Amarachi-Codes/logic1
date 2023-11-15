const numbers = [0, 1, 4, -5, 6, -2];
// //display only number that greater zero
 
// ES6 Higher Order Function
const moreThanZero = (numbers)=>{
    return numbers.filter(number=>number > 0)
}
console.log(moreThanZero(numbers));

//conventional method
function greaterThanZero (numbers){
    let res = []
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > 0){
            res.push(numbers[i])
        }
    } return res
}
// console.log(greaterThanZero(numbers));

// display only numbers from any given Array
["Daniel",34,"Doris","Sesan",23,90,"Mike"];//=>[34,23,90]

// ES6 Higher order function

const onlyNum = (numbers)=>{
    return numbers.filter(number=>typeof(number) === "number") 
}
// console.log(onlyNum(["Daniel",34,"Doris","Sesan",23,90,"Mike"]));

// Basic js
let age = 33
// console.log(typeof(age));

// remove duplicate from array using filter
// [2,4,6,2,9,4,2,4]=>[2,4,6,9]

const removeDuplicate = (nums)=>{
    return nums.filter((num,index)=>nums.indexOf(num)=== index)
}
console.log(removeDuplicate([2,4,6,2,9,4,2,4]));


