// problem08 -  Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.


function validateKeys<T extends object>(obj: T , keys:(keyof T)[]) {
     

 
  for (let i = 0; i < keys.length; i++) {
    if ((keys[i] in obj)) {
      return true; 
    }
  }
  return false;

  
}

const people = { name: "Alice", age: 25, email: "alice@example.com" };
validateKeys(people, ["email","name"]);

