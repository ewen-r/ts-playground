import { fib } from "../src/index";


describe("Fib tests",
  () => {
    test("test fib(0)", () => {
      const result = fib(0);
      expect(result).toEqual(0);
    });

    test("test fib(5)", () => {
      const result = fib(5);
      expect(result).toEqual(5);
    });

    test("test fib(10)", () => {
      const result = fib(10);
      expect(result).toEqual(55);
    });
  }
);
