const multiply = require("./app");
// it("проверяем что 2*2 равно 4", () => {
//   expect(multiply(2, 2)).toBe(4);
// });
describe("tesing app.js", () => {
  it("проверяем что 2*2 равно 4", () => {
    expect(multiply(2, 2)).toBe(4);
  });
  it("проверяем что если элементы не переданы то вернется 0", () => {
    expect(multiply()).toBe(0);
  });
});
