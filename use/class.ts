function classModel() {
  class Animal {
    constructor(public name: string) {
      this.name = name;
      this.age = 10;
      this.color = 'animal color';
    }
    // 属性必须进行初始化或者在 contructor 中赋值
    public age: number;
    // 可选属性
    test?: string;
    protected type = 'type'; //  只能在类和子类中访问，不能被实例访问。 可以继承，不能实例化
    private color = 'color'; // 私有成员只能被类的本身调用，不能被实例和子类调用, 不能被实例化 和继承
    readonly legs = 4; // 只读属性必须实例化
    static food: string = 'bones'; // 只能通过类名调用， 可以被调用

    run() {
      console.log(this.color);
    }
  }

  // 继承
  class Dog extends Animal {
    constructor(public name: string) {
      super(name);
      this.name = 'extends name';
      this.age = 20;
      this.type = 'extends type';

      // 不能被继承使用
      // console.log(this.color);

      // 只能被类名引用
      Animal.food = 'new bones';
    }
  }

  const dog = new Dog('dog');
  console.log(Animal.food);
  console.log('dog', dog);
  console.log('dog property', dog.name, dog.age);

  const animal = new Animal('er');
  console.log('animal', animal.age, animal.name);
}

classModel();
