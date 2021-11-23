// 死循环
type EndLess = () => never;

const endLess: EndLess = () => {
  while (true) {}
};

// 抛出异常
interface NeverError {
  (): () => never;
}

const neverError: NeverError = () => {
  throw new Error();
};
