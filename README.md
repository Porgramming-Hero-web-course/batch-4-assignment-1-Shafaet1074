[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=17029880&assignment_repo_type=AssignmentRepo)

# TypeScript Union and Intersection Types

This guide explores the significance of union and intersection types in TypeScript, demonstrating how these types can enhance code flexibility, readability, and type safety.

## Table of Contents

- [Union Types](#union-types)
  - [Benefits of Union Types](#benefits-of-union-types)
- [Intersection Types](#intersection-types)
  - [Benefits of Intersection Types](#benefits-of-intersection-types)
- [Use Cases](#use-cases)
  - [Handling API Responses](#handling-api-responses)
  - [Combining Entity Properties](#combining-entity-properties)
- [Potential Pitfalls and Type Guards](#potential-pitfalls-and-type-guards)
- [Conclusion](#conclusion)

---

## Union Types

Union types in TypeScript allow a variable to represent multiple possible types. This approach is helpful when a variable’s type may vary based on different conditions.

### Example

```typescript
function printId(id: string | number) {
  console.log("Your ID is: " + id);
}

In this example, the printId function accepts either a string or a number as its parameter, making it versatile and adaptable to multiple input types.

Benefits of Union Types


Flexibility: Union types let you handle multiple types without creating separate functions.
Type Safety: TypeScript still enforces type-checking, reducing runtime errors.
Readability: Union types make code easier to understand by explicitly listing all possible types.
Intersection Types
An intersection type combines multiple types, creating a type that requires all properties from the combined types.

Usage Example:


interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeId: number;
}

type PersonEmployee = Person & Employee;

const john: PersonEmployee = {
  name: "John Doe",
  age: 30,
  employeeId: 1234
};


In this example, PersonEmployee is an intersection type that requires both Person and Employee properties.

Benefits of Intersection Types:


Combining Multiple Interfaces: Useful for scenarios where an object needs to meet multiple requirements.
Enhanced Type Safety: Enforces all required properties, reducing risks of incomplete data.
Code Organization: Helps keep code organized by merging multiple interfaces into one.
Use Cases
Handling API Responses
Union types can help handle varying data from API responses, improving versatility and error handling.



type ApiResponse = { success: true; data: any } | { success: false; error: string };

function handleResponse(response: ApiResponse) {
  if (response.success) {
    console.log("Data received:", response.data);
  } else {
    console.error("Error:", response.error);
  }
}
Combining Entity Properties
Intersection types allow you to combine multiple properties, like when managing different roles with specific attributes.

typescript
Copy code
interface Admin {
  privileges: string[];
}

interface User {
  name: string;
}

type AdminUser = Admin & User;

const admin: AdminUser = {
  name: "Alice",
  privileges: ["delete", "update"]
};

Potential Pitfalls and Type Guards:

When using union types, it’s essential to perform type checks before using a variable. Type guards, such as typeof, help ensure the correct behavior based on the variable’s specific type.


function printInfo(info: string | number) {
  if (typeof info === "string") {
    console.log("String information:", info.toUpperCase());
  } else {
    console.log("Number information:", info.toFixed(2));
  }

Conclusion:

Union and intersection types are fundamental tools in TypeScript, enhancing code flexibility and safety. Union types provide versatility by allowing variables to hold different types, while intersection types enforce all type requirements, ensuring data completeness. With these types, you can make TypeScript code that’s adaptable, readable, and error-free.


