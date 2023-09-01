import { fizzBuzz } from '../src/index';


describe("FizzBuzz",
  () => {
    test('[3] should result in "fizz"', () => {
      expect(fizzBuzz([3])).toBe('fizz');
    });

    test('[5] should result in "buzz"', () => {
      expect(fizzBuzz([5])).toBe('buzz');
    });

    test('[15] should result in "fizzbuzz"', () => {
      expect(fizzBuzz([15])).toBe('fizzbuzz');
    });

    test('[1,2,3,5,11,15,29,30,32,45] should result in "1, 2, fizz, buzz, 11, fizzbuzz, 29, fizzbuzz, 32, fizzbuzz"', () => {
      expect(fizzBuzz([1,2,3,5,11,15,29,30,32,45])).toBe('1, 2, fizz, buzz, 11, fizzbuzz, 29, fizzbuzz, 32, fizzbuzz');
    });

  }
);