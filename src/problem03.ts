// problem-03 - Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.


const countWordOccurrences =(sentence:string ,word:string ) : number=>{

  let count: number =0;
  let result = word;

 
  while (result[result.length - 1] === "!") {
    
    result = result.slice(0, -1);
  }
  
  let words=sentence.split(" ");
  for(let i=0; i < words.length;i++){

    let resultS=words[i];

   

    
         if(resultS.toLowerCase() === result.toLowerCase()){
          count ++
         }

  

  }
  return count;
}



console.log(countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript!"));