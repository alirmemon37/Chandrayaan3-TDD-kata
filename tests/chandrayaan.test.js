const moveForward = require("../chandrayaan");

describe("Chandrayaan 3 should", () => {
  it.each`
    direction | movement | expected
    ${"N"}    | ${"f"}   | ${[0, 1, 0]}
    ${"E"}    | ${"f"}   | ${[1, 0, 0]}
    ${"U"}    | ${"f"}   | ${[0, 0, 1]}
  `(
    "when facing $direction moving $movement by 1 should change the position correctly",
    ({ direction, movement, expected }) => {
      const initialPosition = [0, 0, 0];
      const initialDirection = direction;

      expect(moveForward(initialPosition, initialDirection)).toEqual(expected);
    }
  );
});
