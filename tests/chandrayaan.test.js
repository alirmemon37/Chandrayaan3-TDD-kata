const moveForward = require("../chandrayaan");

describe("Chandrayaan 3 should", () => {
  it.each`
    direction | movement | expected
    ${"N"}    | ${"f"}   | ${[0, 1, 0]}
    ${"E"}    | ${"f"}   | ${[1, 0, 0]}
    ${"U"}    | ${"f"}   | ${[0, 0, 1]}
    ${"S"}    | ${"f"}   | ${[0, -1, 0]}
    ${"W"}    | ${"f"}   | ${[-1, 0, 0]}
    ${"D"}    | ${"f"}   | ${[0, 0, -1]}
    ${"N"}    | ${"b"}   | ${[0, -1, 0]}
    ${"E"}    | ${"b"}   | ${[-1, 0, 0]}
    ${"U"}    | ${"b"}   | ${[0, 0, -1]}
    ${"S"}    | ${"b"}   | ${[0, 1, 0]}
    ${"W"}    | ${"b"}   | ${[1, 0, 0]}
    ${"D"}    | ${"b"}   | ${[0, 0, 1]}
  `(
    "when facing $direction moving $movement by 1 should change the position correctly",
    ({ direction, movement, expected }) => {
      const initialPosition = [0, 0, 0];
      const initialDirection = direction;

      if (movement === "f") {
        expect(moveForward(initialPosition, initialDirection, movement)).toEqual(expected);
      } else {
        expect(moveBackward(initialPosition, initialDirection, movement)).toEqual(expected);
      }
    }
  );
});
