const moveForward = require("../chandrayaan");

describe("Chandrayaan 3 should", () => {
  it("when facing N moving forward by 1 should increase the y coordinate by 1", () => {
    const initialPosition = [0, 0, 0];
    const initialDirection = "N";

    expect(moveForward(initialPosition, initialDirection)).toEqual([0, 1, 0]);
  });

  it("when facing E moving forward by 1 should increase the x coordinate by 1", () => {
    const initialPosition = [0, 0, 0];
    const initialDirection = "E";

    expect(moveForward(initialPosition, initialDirection)).toEqual([1, 0, 0]);
  });

  it("when facing Up moving forward by 1 should increase the z coordinate by 1", () => {
    const initialPosition = [0, 0, 0];
    const initialDirection = "U";

    expect(moveForward(initialPosition, initialDirection)).toEqual([0, 0, 1]);
  });
});
