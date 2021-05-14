// #1
type ConcatFn = (str1: string, str2: string) => string;

const concat: ConcatFn = (str1, str2) => {
  // tslint:disable-line:prefer-const
  return str1 + str2;
};

concat('Hello ', 'World');

// #2
interface MyHomeTask {
  howIDoIt: string;
  someArray: (string | number)[];
}

interface MyHomeTaskData {
  withData: MyHomeTask[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const myHomeTask: MyHomeTask | MyHomeTaskData = {
  howIDoIt: 'I Do It Wel',
  someArray: ['string one', 'string two', 42],
  withData: [{ howIDoIt: 'I Do It Wel', someArray: ['string one', 23] }],
};

// #3
interface MyArray<T> {
  [N: number]: T;

  reduce(fn: (previous: T, current: T, index: number, array: T[]) => T, initial: T): T;
}

const x: MyArray<string> = ['one', 'two', 'three'];
x.reduce((a, v) => `${a} ${v}`, 'zero');
