let a: number;
let b: boolean;
let c: string;
let d: Array<string>;

interface BasicUser<A = boolean> {
  name: string;
  surname: string;
  age: number;
  isAdmin: A;
  permissions?: string[];
}

const user: BasicUser = {
  name: "Luca",
  surname: "Leyva",
  age: 37,
  isAdmin: true,
};

const user2: BasicUser = {
  name: "Patrick",
  surname: "Manelski",
  age: 37,
  isAdmin: true,
  permissions: ["Manager", "Developer"],
};

let usersArray: BasicUser[] = [user, user, user];

function getFirst<T>(arr: T[]): T {
  return arr[0];
}

getFirst<BasicUser>(usersArray);

type MathFunc = (a: number, b: number) => number;

const multiplication: MathFunc = (a, b) => a * b;
const addition: MathFunc = (a, b) => a + b;
