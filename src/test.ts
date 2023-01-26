let a: number;
let b: boolean;
let c: string;

type User = {
  name: string;
  surname: string;
  age: number;
  isAdmin: boolean;
};

const user: User = {
  name: "Luca",
  surname: "Leyva",
  age: 37,
  isAdmin: true,
};

const multiplication = (a: number, b: number): number => a * b;
const addition = (a: number, b: number): number => a + b;
