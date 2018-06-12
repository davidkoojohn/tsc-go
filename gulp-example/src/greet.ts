export function sayHello(name: string) {
/*
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


  // console.log(x[0].substr(1)); // OK
  // console.log(x[1].substr(1));
  // Initialize it incorrectly
  // x = [10, 'hello']; // Error
  // console.log(x)

  // enum 枚举
  // enum Color {Red, Green, Blue}
  // enum Color {Red = 1, Green, Blue}
  // let c: Color = Color.Green;
  // console.log(c)
  // console.log(Color)

  enum Color {Red = 1, Green, Blue}
  let colorName: string = Color[2];
  console.log(colorName)

  // any
  let notSure: any = 4;
  notSure = "maybe a string instead";
  console.log(notSure)
  notSure = false;
  console.log(notSure)

  let testStr: string = 'koo'
  console.log(typeof testStr)
  testStr = 1
  console.log(typeof testStr)
  let prettySure: Object = 4;
  prettySure.toFixed();
  console.log(prettySure)
    // void
  function warnUser(): void {
    alert("This is my warning message");
  }
  warnUser()
  // null, undefined
  // never
  // object
*/

// 类型断言
  let someValue: any = "this is a string";
  // let strLength: number = (<string>someValue).length;
  let strLength: number = (someValue as string).length;
  console.log(strLength)


  return `Hello from ${name}`;
}
