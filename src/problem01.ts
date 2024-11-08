//Problem  01 -  Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

const sumArray=(array : number[]) : number  => {

  return array.reduce((acc,current) => acc + current ,0);

}
sumArray([1, 2, 3, 4, 5]);