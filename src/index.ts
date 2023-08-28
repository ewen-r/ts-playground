



/** Hello World function.
  * @param {string} name Your name.
*/
export function hello(name: string = 'World') {
  console.log(`Hello ${name}!`);
}


function reverse1(st: string): string {
  const arr = Array.from(st);
  let ret: string[] = [];

  arr.forEach(a => {
    ret.unshift(a);
  });
  return ret.join('');
}


export function reverse2(st: string): string {
  const arr = Array.from(st);
  const ret = arr.reverse().join('');
  return ret;
}


function reverse3(st: string): string {
  let len = st.length;
  let ret: string = '';

  while (len--) {
    ret += st[len];
  }

  return ret;
}

export function reverse(st: string): string {
  const len = st.length - 1;
  let ret: string = '';

  for (let index = len; index >= 0; --index) {
    ret += st[index];
  }
  return ret;
}


/** Calculate Fibonacci number for given input.
  * @param {number} n Input number.
  * @returns {number} Fibonacci number.
*/
export function fib(n: number): number {
  if (!n) return 0;
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}


export function fizzBuzz(numbers: number[]) {
  let result: string[] = [];

  numbers.forEach(n => {
    if (n % 15 === 0) {
      result.push('fizzbuzz');
    } else if (n % 3 === 0) {
      result.push('fizz');
    } else if (n % 5 === 0) {
      result.push('buzz');
    } else {
      result.push(String(n));
    }
  });

  return result.join(', ');
}


// Run hello..
hello('Ewen');

const date = new Date();
console.log("Program running:", date.toLocaleDateString(), date.toLocaleTimeString());


// // Reverse a string
// console.log("reverse1: ", reverse1("Hello"), reverse1(" Hi"));
// console.log("reverse2: ", reverse2("Hello"), reverse2(" Hi"));
// console.log("reverse3: ", reverse3("Hello"), reverse3(" Hi"));
// console.log("reverse4: ", reverse4("Hello"), reverse4(" Hi"));

// // Run fibonacci sequence.
// for (let i = 0; i <= 10; i++) {
//   console.log("i = ", i, " fib= ", fib(i));
// }

// // Fibonacci sequence test.
// testFib();