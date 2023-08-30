# Chandrayaan 3 TDD Assessment

## Assessment Link

[Chandrayaan 3 TDD Assessment](https://blog.incubyte.co/blog/chandrayaan-3-tdd-assessment/)

## Intuition
We can not determine the correct position in 3-D space by only maintaining a single side of Chandrayaan.

At each step, we maintain two sides of Chandrayaan (the **direction** side and the **facing** side, which is perpendicular to the direction side) to determine the final position and direction of Chandrayaan in 3-D space.

- **Move Forward/Backward**
  
  Moving forward involves moving forward by 1 and moving backward by 1 in the **respective axis** in the pointing direction, while the facing side remains the same.

- **Turn Left/Right**
  
  When turning left/right in the **horizontal** plane, i.e., when the facing side is either U or D, Chandrayaan turns in its respective direction, and the **facing side remains unchanged**.

- **Rotate Up/Down/Left/Right**
  
  When rotating in any direction in the **galactic** (vertical) plane, both the direction side and the facing side change.
