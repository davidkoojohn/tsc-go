import { sayHello } from './greet'

console.log(sayHello('koo'))
function hello(compiler: string) {
  console.log(`Hello from ${compiler}`);
}
hello("TypeScript");
