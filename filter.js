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
}console.log(greaterThanZero(numbers));