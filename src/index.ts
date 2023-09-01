

const date = new Date();
console.log("Program running:", date.toLocaleDateString(), date.toLocaleTimeString());



/** Hello World function.
  * @param {string} name Your name.
*/
export function hello(name: string = 'World') {
  console.log(`Hello ${name}!`);
}


// Run hello..
hello('Ewen');



// -------------------------------------------------------------
export function reverse(st: string): string {
  const len = st.length - 1;
  let ret: string = '';

  for (let index = len; index >= 0; --index) {
    ret += st[index];
  }

  return ret;
}


export function reverse1(st: string): string {
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


export function reverse3(st: string): string {
  let len = st.length;
  let ret: string = '';

  while (len--) {
    ret += st[len];
  }

  return ret;
}


// -------------------------------------------------------------

/** Calculate Fibonacci number for given input.
  * @param {number} n Input number.
  * @returns {number} Fibonacci number.
*/
export function fib(n: number): number {
  if (!n) return 0;
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}


/** FizzBuzz.
  * @param {number[]} arr Array of numbers.
  * - Loop through input array and return a new array where..
  * - - If input number is divisible by 3, return 'fizz'.
  * - - If input number is divisible by 5, return 'buzz'.
  * - - If input number is divisible by 3 and 5, return 'fizzbuzz'.
  * - - Otherwise return input number.
*/
export function fizzBuzz(arr: number[]) {
  let result: string[] = [];

  arr.forEach(n => {
    if (n % 15 === 0) {
      // Input number is divisible by 3 and 5, return 'fizzbuzz'.
      result.push('fizzbuzz');
    } else if (n % 3 === 0) {
      // Input number is divisible by 3, return 'fizz'.
      result.push('fizz');
    } else if (n % 5 === 0) {
      // Input number is divisible by 5, return 'buzz'.
      result.push('buzz');
    } else {
      result.push(String(n));
    }
  });

  return result.join(', ');
}

