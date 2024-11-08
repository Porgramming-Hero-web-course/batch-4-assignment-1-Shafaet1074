// problem 02 - Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

const removeDuplicates=(array : number[]) : number[]  => {

  let newArray : number[] = [];
  for(let i=0 ; i < array.length;i++){
    if(array[i]===array[i+1]){
       newArray.filter(() =>array[i]
       )
    }
    else{
       newArray= [...newArray,array[i]];
    }
 
  }
    return newArray
  }
  removeDuplicates([1, 2,3,3,4,5])