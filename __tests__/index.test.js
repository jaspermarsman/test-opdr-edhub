//const multiply = require("../index").multiply;
const { multiply } = require("../index");

test("multiply() should return the multiplication of 2 numbers", () => {
//ARRANGE
    const num1 = 4;
    const num2 = 3;

//ACT
const result = multiply(num1, num2);

//ASSERT
expect(result).toBe(12);
});