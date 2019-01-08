
- 声明空间
- 模块
- 命名空间

- @types
- 环境生命
- 接口

----

通过 `declare module 'somePath'` 来声明一个全局模块的方式
```typescript
// globals.d.ts
declare module 'foo' {
  // some variable declarations
  export var bar: number;
}

// anyOtherTsFileInYourProject.ts
import * as foo from 'foo';
// TypeScript 将假设（在没有做其他查找的情况下）
// foo 是 { bar: number }
```

> `globals.d.ts` 是一种扩充 `lib.d.ts` 很好的方式，

```typescript
namespace Utility {
  export function log(msg) {
    console.log(msg);
  }
  export function error(msg) {
    console.log(msg);
  }
}
// usage
Utility.log('Call me');
Utility.error('maybe');
// 编译后
(function (Utility) {
  // 添加属性至 Utility
})(Utility || Utility = {});
```

类型注解使用 `:TypeAnnotation` 语法

接口
```typescript
interface Name {
  first?: string;
  second: string;
}
```

内联类型注解:与创建一个接口不同，你可以使用内联注解语法注解任何内容

```typescript
let name: {
  first: string;
  second: string;
};
```

特殊类型：any、 null、 undefined 以及 void

联合类型：希望属性为多种类型之一，使用 `|` 作为标记，如 `string | number`

交叉类型：`extend` 是一种非常常见的模式

元组类型：使用 `:[typeofmember1, typeofmember2]` 能够为元组添加类型注解

```typescript
let nameNumber: [string, number];
nameNumber = ['Jenny', 322134];
const [name, num] = nameNumber;
```

类型别名：类型注解的便捷语法，不同于 `interface` 你可以提供一个类型别名至任意的类型注解上（在联合类型和交叉类型中比较实用）

```typescript
type StrOrNum = string | number;
// 使用
let sample: StrOrNum;
sample = 123;
sample = '123';

type Text = string | { text: string };
type Coordinates = [number, number];
type Callback = (data: string) => void;

// 1. 如果你需要使用类型注解的层次结构，请使用接口。它能使用 implements 和 extends
// 2. 为一个简单的对象类型（像例子中的 Coordinates）使用类型别名，仅仅有一个语义化的作用。与此相似，当你想给一个联合类型和交叉类型使用一个语意化的名称时，一个类型别名将会是一个好的选择。
```

接口

```typescript
// Lib a.d.ts
interface Point {
  x: number,
  y: number
}
declare const myPoint: Point
```

类可以实现接口：使用 `implements（实现）` 关键字来确保兼容性：

```typescript
class MyPoint implements Point {
  x: number;
  y: number; // Same as Point
}
// 限制了类实例的结构
let foo: Point = new MyPoint()
// !== foo: Point = MyPoint
```
















