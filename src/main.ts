import './style.css';
import typescriptLogo from './typescript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);

const numArray: number[] = [1, 2, 3];

const total = (nums: number[]): number => {
  return nums.reduce((pre, current) => pre + current, 0);
};

const summ = total(numArray);

console.log(summ);

//get books

const friends: friendItem[] = [
  {
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21,
  },
  {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26,
  },
  {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18,
  },
];

export interface friendItem {
  name: string;
  books?: string[];
  age: number;
}

const getAllBooks = (friends: friendItem[]): string[] => {
  return friends.reduce((prev, current) => {
    if (!current?.books) {
      return prev;
    } else {
      return [...prev, ...current.books];
    }
  }, [] as string[]);
};

const allBooks = getAllBooks(friends);

console.log(allBooks);

const flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
];

const allArray = flattened.reduce((pre, current) => {
  return pre.concat(current);
}, []);

console.log(allArray);


const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice" , "Bob"];

const counterList:countList=names.reduce((pre,current)=>{

  if(pre[current]){
    ++pre[current]
  }else{
    pre[current]=1
  }

  return pre
},{} as countList)

console.log(counterList);

export interface countList {
  [key: string]: number;
}