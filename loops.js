/*
loops forLoop(array) adds `"I am ${i} strange loop${i === 0 ? '' : 's'}."` to an array 25 times:
  2) loops whileLoop(n) counts down from n to 0:
  3) loops doWhileLoop(array) removes elements from `array` until `array` is empty or until `maybeTrue()` returns `false`:
*/

function forLoop(array){
  for(let i = 0; i < 25; i++){
  console.log(`I am ${i} strange loop${i === 0 ? '' : 's'}.`)
  return array
}
}
