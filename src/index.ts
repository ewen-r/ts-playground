

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


// -------------------------------------------------------------

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


// -------------------------------------------------------------

// An ID is considered valid if:

// The first 4 characters of the studentId are correct
// The verification code matches
// How is the ID code formed:
// SH: First 2 characters of the students lastname
// RO: First 2 characters of the student firstname
// 2022: Full year of joining
// 08: 2 digit representing the month of joining
// 01: 2 digits representing the days of joining
// a verification digit which is computed as the following:
// Take the numeric part of the studentID without the verification
// Sum all the digits in the odd positions
// Sum all the digits in the even position
// Difference between O & E say this is V
// If v is a negative ignore the sign
// if v is greater than 9 divide it by 10 and take the reminder
//
// Example ID (valid) = {
// StudentID: SHRO202208017
// Firstname: Robert
// Lastname: Shepherd
// }
//
// Example ID (invalid) = {
// StudentID: XXRO202208017
// Firstname: Robert
// Lastname: Shepherd
// }
export function isValid(id: string, firstName: string, lastName: string): boolean {
  // console.log('isValid(): RUNNING:', firstName, lastName, id);

  // Check input params.
  if (firstName?.length < 2
    || lastName?.length < 2
    || id?.length !== 13) {
    console.error('isValid(): Bad input');
    return false;
  }

  /* Check first 4 characters of the studentId are correct
   * SH: First 2 characters of the students lastname
   * RO: First 2 characters of the student firstname */
  const firstNameChars = firstName.slice(0, 2).toUpperCase();
  const lastNameChars = lastName.slice(0, 2).toUpperCase();
  const idStart = id.slice(0, 4);
  if (idStart !== (lastNameChars + firstNameChars)) {
    // Bad first 4 chars
    console.error('isValid(): Bad first 4 chars');
    return false;
  }

  // Take the numeric part of the studentID without the verification
  const idCode = id.slice(4, 12);

  // Sum all the digits in the odd positions
  let oddSum: number = 0;
  // Sum all the digits in the even position
  let evenSum: number = 0;
  const arr = Array.from(idCode);
  arr.forEach((v, index) => {
    const num = Number(v);
    if (index % 2) {
      oddSum += num;
    } else {
      evenSum += num;
    }
  });

  // Difference between O & E say this is V.
  // If v is a negative ignore the sign
  let v = Math.abs(evenSum - oddSum);

  // If v is greater than 9 divide it by 10 and take the reminder
  if (v > 9) {
    v = v % 10;
  }

  // Retrieve checkVal from id.
  const checkVal = id.slice(-1);

  // Verify checkVal === v
  if (Number(checkVal) !== v) {
    console.error('isValid(): Bad checkVal', checkVal, v);
    return false;
  }

  console.log('isValid(): SUCCESS');
  return true;
}

