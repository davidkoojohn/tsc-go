export function sayHello(name: string) {

  // boolean
  let isDone: boolean = false
  console.log(isDone)
  // number
  // 所有数字都是浮点数。 这些浮点数的类型是number
  let decLiteral: number = 6;
  let hexLiteral: number = 0xf00d;
  let binaryLiteral: number = 0b1010;
  let octalLiteral: number = 0o744;
  console.log(decLiteral)
  console.log(hexLiteral)
  console.log(binaryLiteral)
  console.log(octalLiteral)

  // string
  let kname: string = "bob";
  console.log(kname)
  kname = "smith";
  console.log(kname)

  let cname: string = `Gene`;
  let age: number = 37;
  let sentence: string = `Hello, my name is ${ cname }.
  I'll be ${ age + 1 } years old next month.`;
  console.log(sentence)

  // []
  let list1: number[] = [1, 2, 3]
  let list2: Array<number> = [1, 2, 3]
  console.log(list1)
  console.log(list2)

  // Tuple
  // Declare a tuple type
  let x: [string, number];
  // Initialize it
  x = ['hello', 10]; // OK
  console.log(x)
  // Initialize it incorrectly
  x = [10, 'hello']; // Error
  console.log(x)

  return `Hello from ${name}`;
}
