// 泛型函数
function generic<T>(arg: T): T {
  return arg;
}

// 泛型类型
type TGeneric = <T>(arg: T) => T;
const tGeneric: TGeneric = generic;

// 泛型接口
interface IGeneric<T> {
  (arg: T): T;
}
const iGeneric: IGeneric<Number> = generic;

// 泛型约束
// T extends U => T 必须居于
