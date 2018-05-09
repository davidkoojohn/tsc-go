
## 编译代码

```
tsc greeter.ts
```

## 类型注解

```
function greeter(person: string) {
    return "Hello, " + person;
}
let user = [0, 1, 2];

document.body.innerHTML = greeter(user);

// error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.
```

## 接口

> 只在两个类型内部的结构兼容那么这两个类型就是兼容的。

```
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
```

## 类



