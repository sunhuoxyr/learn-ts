function interfaceModel() {
  class Dog {
    constructor(public name: string) {
      this.name = name;
    }
    public age = 8;
    // private type: string; // 报错 接口继承中无法实现
    // protected type = 'ty[e]';
  }

  interface Husky extends Dog {}

  const husky: Husky = {
    name: 'husky',
    age: 2,
    wang() {},
  };

  // 类合并
  interface Husky {
    wang: () => void;
  }
}

function funExtends() {
  type T1 = 'x' extends 'x' ? 1 : 2; // 1
  type T2 = 'x' | 'y' extends 'x' ? 1 : 2; // 2
  /**
   * T2 是基础类型，会直接进行判断
   * T3 使用的是泛型，首先会分解联合类型
   * T4 不会进行分解
   */
  type P1<T> = T extends 'x' ? 1 : 2;
  type T3 = P1<'x' | 'y'>; // 1 | 2
  type T3Desc = ('x' extends 'x' ? 1 : 2) | ('y' extends 'x' ? 1 : 2);

  type P2<T> = [T] extends 'x' ? 1 : 2;
  type T4 = P2<'x' | 'y'>; // 2
}
