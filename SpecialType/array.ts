const numbers = [1, 2, 3]; // inferred to type number[]

numbers.push(4); 
//numbers.push("2"); 

console.log(numbers);

let head: number = numbers[0]; 

console.log(head);