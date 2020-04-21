// Challenge 1
// write a function that takes an array and an index and prints out the value of that index
// i.e. for array ["cool", "dude"] and index 0, I would get "cool"
var wordsArray = ["cool", "dude"];

console.log(wordsArray[0])



// Challenge 2
// write a function that takes and array of something and tells you if the name "Luna" is in that array
const isLuna = (arr) => {
  return arr.includes('Luna');
}

console.log(isLuna(['Luna', 'Matt', 'Luke']))
