const classFun = () => {
  console.log('classFun, start');
  return (constructor: typeof Deco) => {
    console.log('flassFun End', constructor);
  };
};

function propertyFun() {
  console.log('propertyFun start');
  return (
    target: any, // 静态成员的类的构造函数，或实例成员的类的原型
    propertyKey: string, // 方法名
    descriptor: PropertyDescriptor // 描述符
  ) => {
    console.log('propertyFun end', target, propertyKey, descriptor);
  };
}

function required(key: string) {
  console.log('required start', key);
  return (target: any, propertyKey: string, paramterIndex: number) => {
    console.log('required end', target, propertyKey, paramterIndex);
  };
}

function format() {
  console.log('format start');
  return (target: any, propertyKey: string) => {
    console.log('format end', target, propertyKey);
  };
}

@classFun()
class Deco {
  @format()
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  @propertyFun()
  run(@required('name') name: string, @required('age') age: number) {}
}
