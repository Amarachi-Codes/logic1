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
console.log(greaterThanZero(numbers));

// display only numbers from any given Array
["Daniel",34,"Doris","Sesan",23,90,"Mike"];//=>[34,23,90]

// ES6 Higher order function

const onlyNum = (numbers)=>{
    return numbers.filter(number=>typeof(number) === "number") 
}
console.log(onlyNum(["Daniel",34,"Doris","Sesan",23,90,"Mike"]));

// Basic js
let age = 33
console.log(typeof(age));

// remove duplicate from array using filter
// [2,4,6,2,9,4,2,4]=>[2,4,6,9]

const removeDuplicate = (nums)=>{
    return nums.filter((num,index)=>nums.indexOf(num)=== index)
}
console.log(removeDuplicate([2,4,6,2,9,4,2,4]));

const characters = [
    {
      name: "Luke SkyWalker",
      height: 172,
      mass: 77,
      eye_color: "blue",
      gender: "male",
      age:45,
    },
    {
      name: "Darth Vader",
      height: 202,
      mass: 136,
      eye_color: "yellow",
      gender: "male",
      age:23,
    },
    {
      name: "Leia Organa",
      height: 158,
      mass: 49,
      eye_color: "brown",
      gender: "female",
      age:null,
    },
    {
      name: "Anakin Skywalker",
      height: 188,
      mass: 84,
      eye_color: "blue",
      gender: "male",
      age:undefined
    },
  ];

  // 1. get character with mass greater than 100
  const greaterThan100 = characters=>{
    return characters.filter(character=>character.mass > 100)
  }
  console.log(greaterThan100(characters));


  //2. Get characters with height less thanm 200
const heightLess = characters=>{
    return characters.filter(character=>character.height < 200)
}
console.log(heightLess(characters));

//Get all male characters

const allMale = characters=>{
    return characters.filter(character=>character.gender === "male")
}
console.log(allMale(characters));

//filter invalid Age

const invalidAge = characters=>{
    return characters.filter((character)=>character.age !== undefined && typeof(character.age) === "number" && character.age !== isNaN)
}
console.log(invalidAge(characters));