import { Caclulator } from "./calculator";

describe("Calculator Class", () => {
  let calculator: Caclulator;
  beforeEach(() => {
    calculator = new Caclulator();
  });

  test("Calculator is defined", () => {
    return expect(calculator).toBeDefined();
  });

  describe("Sum Function", () => {
    test("Sum is a defined class function", () => {
      return expect(calculator.sum).toBeDefined();
    });

    test("Sum(1, 2) is 3", () => {
      return expect(calculator.sum(1, 2)).toBe(3);
    });

    test("Sum(3, 4) is 7", () => {
      return expect(calculator.sum(3, 4)).toBe(7);
    });

    test("Sum(-3, 2) is -1", () => {
      return expect(calculator.sum(-3, 2)).toBe(-1);
    });

    test("Sum(1.25, 3.7) is 4.95", () => {
      return expect(calculator.sum(1.25, 3.7)).toBe(4.95);
    });
  });

  describe("Subtract Function", () => {
    test("Subtract is a defined class function", () => {
      return expect(calculator.subtract).toBeDefined();
    });

    test("Subtract(1, 2) is -1", () => {
      return expect(calculator.subtract(1, 2)).toBe(-1);
    });

    test("Subtract(3, 6) is -3", () => {
      return expect(calculator.subtract(3, 6)).toBe(-3);
    });

    test("Subtract(-13, -17) is 4", () => {
      return expect(calculator.subtract(-13, -17)).toBe(4);
    });

    test("Subtract(1.5, -2.3) is 3.8", () => {
      return expect(calculator.subtract(1.5, -2.3)).toBe(3.8);
    });
  });

  describe("Multiply Function", () => {
    test("Multiply is a defined class function", () => {
      return expect(calculator.multiply).toBeDefined();
    });

    test("Multiply(2, 3) is 6", () => {
      return expect(calculator.multiply(2, 3)).toBe(6);
    });

    test("Multiply(3, 5) is 15", () => {
      return expect(calculator.multiply(3, 5)).toBe(15);
    });

    test("Multiply(-3, 4) is -12", () => {
      return expect(calculator.multiply(-3, 4)).toBe(-12);
    });

    test("Multiply(-1.6, 2) is -3.2", () => {
      return expect(calculator.multiply(-1.6, 2)).toBe(-3.2);
    });
  });

  describe("Divide Function", () => {
    test("Divide is a defined class function", () => {
      return expect(calculator.divide).toBeDefined();
    });

    test("Divide(6, 3) is 2", () => {
      return expect(calculator.divide(6, 3)).toBe(2);
    });

    test("Divide(14, 2) is 7", () => {
      return expect(calculator.divide(14, 2)).toBe(7);
    });

    test("Divide(12, -4) is -3", () => {
      return expect(calculator.divide(12, -4)).toBe(-3);
    });

    test("Divide(6.4, 2) is 3.2", () => {
      return expect(calculator.divide(6.4, 2)).toBe(3.2);
    });

    test("Divide(1, 2) is 0.5", () => {
      return expect(calculator.divide(1, 2)).toBe(0.5);
    });

    test('Divide(1, 0) raises error "Divide by Zero"', () => {
      return expect(() => calculator.divide(1, 0)).toThrow("Divide by Zero");
    });
  });
});
