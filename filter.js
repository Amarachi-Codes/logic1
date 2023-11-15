const numbers = [0, 1, 4, -5, 6, -2];
// //display only number that greater zero

const moreThanZero = (numbers)=>{
    return numbers.filter(number=>number > 0)
}
console.log(moreThanZero(numbers));