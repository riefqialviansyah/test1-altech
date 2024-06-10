const { expect, it } = require("@jest/globals");
const no3 = require("../no3");

it("katak adalah palindrom", () => {
  const result = no3("katak");
  expect(result).toEqual(true);
});
it("makan bukanlah palindrom", () => {
  const result = no3("makan");
  expect(result).toEqual(false);
});
it("kakak adalah palindrom", () => {
  const result = no3("kakak");
  expect(result).toEqual(true);
});
it("tidur bukanlah palindrom", () => {
  const result = no3("tidur");
  expect(result).toEqual(false);
});
it("kasur rusak adalah palindrom", () => {
  const result = no3("kasur rusak");
  expect(result).toEqual(true);
});
it("hidup bukanlah palindrom", () => {
  const result = no3("hidup");
  expect(result).toEqual(false);
});
it("level adalah palindrom", () => {
  const result = no3("level");
  expect(result).toEqual(true);
});
