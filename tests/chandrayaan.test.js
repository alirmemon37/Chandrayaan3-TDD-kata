const { move, turnLeft } = require("../chandrayaan");

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

      const newPosition = move(initialPosition, initialDirection, movement);

      expect(newPosition).toEqual(expected);
    }
  );

  it.each`
    direction | facing | turn   | expectDirection | expectFacing
    ${"N"}    | ${"U"} | ${"l"} | ${"W"}          | ${"U"}
    ${"E"}    | ${"U"} | ${"l"} | ${"N"}          | ${"U"}
    ${"S"}    | ${"U"} | ${"l"} | ${"E"}          | ${"U"}
    ${"W"}    | ${"U"} | ${"l"} | ${"S"}          | ${"U"}
  `(
    "when direction is $direction and facing $facing then on turning $turn, direction is $expectDirection and facing $expectFacing",
    ({ direction, facing, turn, expectDirection, expectFacing }) => {
      const initialDirection = direction;
      const initialFacing = facing;

      // tracking two directions on of horizontal plane and other for galactic plane
      const { newDirection, newFacing } = turnLeft(
        initialDirection,
        initialFacing
      );

      expect({ newDirection, newFacing }).toEqual({
        newDirection: expectDirection,
        newFacing: expectFacing,
      });
    }
  );
});
