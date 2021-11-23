function checking(x: string | number) {
  // 接口类型
  interface A {
    name: string;
  }
  interface B extends A {
    age: number;
  }
  const b: B = {
    name: 'name',
    age: 8,
  };
  const a: A = b;

  // 函数类型
  const fun = (a: A) => {};
  fun(b);

  // 类类型
  class Animall {
    protected legs = 4;
  }
  class Cat extends Animall {
    constructor(public name: string) {
      super();
    }
    eat() {}
  }
  class Dog extends Animall {
    constructor(public name: string) {
      super();
    }
    eat() {}
    static type = 'type';
  }

  let cat = new Cat('cat');
  let dog: Dog = cat;

  class Other {
    constructor(public name: string) {}
    eat() {}
    protected legs = 4;
  }
  // protected 来自不同的类
  // const other: Other = cat;

  // 类型保护
  class Java {
    helloJava() {}
    java: any;
  }

  class JavaScript {
    helloJavaScript() {}
    javascript: any;
  }

  const hello = new Java() || new JavaScript();

  if (hello instanceof Java) {
    hello.helloJava();
  }

  if ('java' in hello) {
    hello.helloJava();
  }

  if (typeof x === 'number') {
    x.toFixed();
  }

  const isJava = (lang: Java | JavaScript): lang is Java => {
    return (lang as Java).helloJava !== undefined;
  };

  if (isJava(hello)) {
    hello.helloJava();
  }
}
