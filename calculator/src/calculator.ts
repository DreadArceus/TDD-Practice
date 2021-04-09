export class Caclulator {
  constructor() {}

  sum = (a: number, b: number) => {
    return a + b;
  };

  subtract = (a: number, b: number) => {
    return a - b;
  };

  multiply = (a: number, b: number) => {
    return a * b;
  };

  divide = (a: number, b: number) => {
    if (b === 0) throw new Error("Divide by Zero");
    return a / b;
  };
}
