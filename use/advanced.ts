const unionAndCross = () => {
  interface Dog {
    name: string;
    age: number;
    wang: () => {};
  }
  interface Cat {
    name: string;
    type: string;
    miao: () => {};
  }

  const union = (arg: Dog & Cat) => {
    arg.name;
    arg.age;
    arg.type;
    arg.wang();
    arg.miao;
  };

  const cross = (arg: Dog | Cat) => {
    arg.name;
  };
};

function Tempalte() {
  type message = 'message';
  type upMessage = Uppercase<message>; // 'MESSAGE'
  type lowMessage = Lowercase<upMessage>; // message
  type capMessage = Capitalize<lowMessage>; // Message
  type unMessage = Uncapitalize<upMessage>; // mESSAGE
}

function testKeyof() {
  interface Person {
    name: string;
    age: number;
  }

  const key: keyof Person = 'age';
}

function getValue<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  return keys.map((key) => obj[key]);
}

function map() {
  interface T {
    readonly read: 2;
    name: string;
    age?: number;
  }
  /**
   * 只读
   * type read = {
   *  readonly read: 2;
   *  readonly name: string;
   *  readonly age?: number | undefined;
   * }
   */
  type read = Readonly<T>;

  /**
   * 必选
   * type required = {
   *  readonly read: 2;
   *  name: string;
   *  age: number;
   * }
   */
  type required = Required<T>;

  /**
   * 可选
   * type partial = {
   *  readonly read?: 2 | undefined;
   *  name?: string | undefined;
   *  age?: number | undefined;
   * }
   */
  type partial = Partial<T>;

  /**
   * T 生成只含 k 的子对象
   * type pick = {
   *  name: string;
   * }
   */
  type pick = Pick<required, 'name' | 'age'>;

  /**
   * T 生成不含 k 的子对象
   * type omit = {
   *  age: number;
   *  readonly read: 2;
   * }
   */
  type omit = Omit<required, 'name'>;

  /**
   * 将 T 的类型映射到 key 上
   * type record = {
   *  a: T;
   * }
   */
  type record = Record<'a', required>;
  const re: record = {
    a: {
      name: 'name',
      read: 2,
      age: 8,
    },
  };
}

function fun() {
  type fun = (num: number, str: string) => string;
  // type parametersObj = [num: number, str: string]
  type parametersObj = Parameters<fun>;
  // type returnTypeObj = string
  type returnTypeObj = ReturnType<(num: number, str: string) => string>;
}

function contidion() {
  // type T0 = "b"
  type T0 = Exclude<'a' | 'b', 'a'>;
  // type T1 = "a"
  type T1 = Extract<'a' | 'b', 'a'>;
  // type T2 = "a" | "b"
  type T2 = NonNullable<'a' | 'b' | undefined>;
}
