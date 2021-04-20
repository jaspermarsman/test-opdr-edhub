const { calculateCircleArea } = require("../index");
test("calculateCircleArea() should calcuelate the area of a circle and rounds the result to 2 decimals ", () => {
//ARRANGE
const radius = 2;

//ACT
const result = calculateCircleArea(radius);

//ASSERT
expect(result).toBe(12.57);
});