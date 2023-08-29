const moveForward = require("../chandrayaan");

describe("Chandrayaan 3 should", () => {
  it("when facing north moving forward by 1 should increase the y coordinate by 1", () => {
    const initialPosition = [0, 0, 0];
    const initialDirection = "N";

    expect(moveForward(initialPosition, initialDirection)).toEqual([0, 1, 0]);
  });
});
