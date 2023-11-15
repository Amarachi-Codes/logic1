// const numberthanZero = () => {
//   return numbers.filter((number) => number > 0);
// };

// // console.log(numberthanZero());

// function morethanZero(numbers) {
//   const newArr = [];
//   for (let i = 0; i < numbers.length; i++) {
//     let elem = numbers[i];
//     if (elem > 0) {
//       newArr.push(elem);
//     }
//   }
//   return newArr;
// }

// console.log(morethanZero([0,1,4,-5,6,-2]));

// display only numbers from any given Array
// ["Daniel",34,"Doris","Sesan",23,90,"Mike"];=>[34,23,90]

// const onlyNumber = (numbers) => {
//   return numbers.filter((num) => typeof num === "number");
// };

//  console.log(onlyNumber(["Daniel",34,"Doris","Sesan",23,90,"Mike"]));

//remove duplicate from array using filter
//[2,4,6,2,9,4,2,4]=>[2,4,6,9]

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
  const greater100Charater = (characters) => {
    return characters.filter((character) => character.mass > 100);
  };
  
  // console.log(greater100Charater(characters));
  //2. Get characters with height less thanm 200
  
  const shorter200Charater = (characters) => {
    return characters.filter((character) => character.height < 200);
  };
  //   console.log(shorter200Charater(characters));
  
  //Get all male characters
  
  const getGender = (characters, myGender) => {
   return characters.filter(characters=>characters.gender===myGender);
  };
  
  // console.log(getGender(characters,'female'));
  
  //remove repeated  numbers
  
  const numbers = [3,12,54,12,4,4,3,12,16]
  // console.log(numbers.indexOf(12));
   
  const filteredNumber = numbers =>{
      return numbers.filter((number,index)=>numbers.indexOf(number)===index)
                     .filter((number)=>number%2 !==0)
      
  }
  
  const filterInvalidCharacter = characters=>{
      return characters.filter((character)=>character.age !== undefined && typeof character.age ==='number' && !isNaN(character.age))
  }
  
  console.log(filterInvalidCharacter(characters));
  