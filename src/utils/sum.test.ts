import { sum } from './sum';

describe("Sum", () => {
  it("Should sum two positive numbers", () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
