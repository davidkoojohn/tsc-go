
export function tryVar() {
  // 变量：
  // 布尔，boolean
  // 数字，number
  // 字符串， string `${var}`
  // 数组，元素类型[], 数组泛型 Array<元素类型>
  // 元祖，Tuple
  // enum，enum Color { , }
  // any，
  // void，
  // null
  // undefined
  // never
  // Object

  let isDone: boolean = false
  console.log(typeof isDone, isDone)

  let num: number = 6
  console.log(typeof num, num)

  let name: string = 'davidkoojohn'
  console.log(typeof name, name)
  name = 'koo'
  console.log(name)

  let list: number[] = [1, 2, 3]
  console.log(typeof list, list)
  let listc: Array<number> = [3, 2, 4]
  console.log(typeof listc, listc)

  let x: [number, string]
  x = [1, 'asd']
  console.log(typeof x, x)
  // x = ['asdasd', 214]
  // console.log(typeof x, x)
  console.log(x[0])
  console.log(x[1])
  console.log(x[3])

  enum Color { Red = 2, Black, Yellow = 5 }
  let c: Color = Color.Black
  // let c: Color = Color['Black']
  console.log(typeof c, c)
  console.log(typeof Color, Color)
  let colorName: string = Color[2]
  console.log(typeof  colorName, colorName)

  let notSure: any = 4
  console.log(notSure)
  notSure = 'asdasdasdasdasdasd'
  console.log(notSure)
  notSure = false
  console.log(notSure)

  let lista: any[] = [1, 'asd', false]
  console.log(lista)
  
  function warnUser(): void {
    // let unable: void = undefined
    // console.log(unable)
    let unable: void = null
    console.log(unable)
    // alert('=====')
    console.log('=====')
  }
  warnUser()

  // 类型断言

  let someValue: any = 'david'
  // let strLength: number = (<number>someValue).length
  // let strLength: number = (<string>someValue).length
  console.log(strLength)


}


