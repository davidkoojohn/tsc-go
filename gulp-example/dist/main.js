"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greet_1 = require("./greet");
console.log(greet_1.sayHello('koo'));
function hello(compiler) {
    console.log("Hello from " + compiler);
}
hello("TypeScript");