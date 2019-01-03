
```typescript
interface labelValue {
  label: string;
  color?: string;
  width?: number;
}

function printLabel(labelObj: labelValue): {color: string; area: number;} {
  let newSquare = { color: 'white', area: 100 };
  if (labelObj.color) {
    newSquare.color = labelObj.color
  }
  
  if (labelObj.width) {
    newSquare.area = labelObj.width * labelObj.width
  }
  console.log(labelObj.label)
  return newSquare
}

let myObj = { width: 10, label: 'koo' };
printLabel(myObj)
// 类型断言
printLabel(myObj) as labelValue

interface Point {
  readonly x: number;
  readonly y: number;
  [propName: string]: void;
}
let p1: Point = { x: 10, y: 20 }
p1.x = 30 // error

let a: number[] = [1, 2, 4]
let ro: ReadonlyArray<number> = a
ro[0] = 3 // error
ro.push(5) // error

// 类型断言
a = ro as number[]

/*
* interface 接口
* ? 可选
* readonly 只读 | 作为变量使用的用const；作为属性使用 readonly
* ReadonlyArray
* 函数类型
* 可索引的类型
* 
* 
* */
```

