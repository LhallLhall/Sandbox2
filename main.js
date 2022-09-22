let p = document.getElementById("h1")

// function randomValueFromArray(symbols){
    //     const random = Math.floor(Math.random()*symbols.length);
    //     return symbols[random];
    // }
    // console.log(randomValueFromArray())
    // function shuffleArray(symbols) {
    //     for (let i = array.length - 1; i > 0; i--) {
    //         const random = Math.floor(Math.random() * (i + 1));
    //         [symbols[i], symbols[random]] = [symbols[random], symbols[i]];
    //     }
    // }
    // var arr = [2, 11, 37, 42];
    // shuffle(arr);
    // console.log(arr);

function randomArrayShuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
}
let symbols = ["!", "@", "%", "$" , "*", "#", "?", "~",]
randomArrayShuffle(symbols); 
console.log(randomArrayShuffle(symbols))

let num = []
let symbolNum = 0

for(let i = 0; i < 99; i++) {   
  num.push(symbols[symbolIndex] + '' + i)
  symbolNum++
  if(symbolNum % 9){

  }
}
// console.log(numbers)
console.log(num)
// console.log(text)
let numbersAndSymbols = num + symbols
console.log(numbersAndSymbols)
