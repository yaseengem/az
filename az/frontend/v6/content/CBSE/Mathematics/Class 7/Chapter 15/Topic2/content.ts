import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
    id: 'cl7_ch15_t2',
    topicNumber: 2,
    topicName: 'Nets of solids',
    duration: 90,
    description: "Learn about nets - the 2D patterns that fold into 3D shapes, their properties, and how to create and analyze them.",
    explanation: `A net is a two-dimensional pattern that can be folded to create a three-dimensional shape. Understanding nets helps us visualize and construct 3D objects, making it an essential concept in geometry and real-world applications.

**What is a Net?**
A net is a flat pattern made up of polygons that can be folded along specific lines to form a three-dimensional shape. Think of it like "unfolding" a cardboard box until it lies flat on the table. The pattern you get is the net of that box (which is a cuboid).

**Properties of Nets:**
1. A net contains all the faces of the 3D shape
2. The faces in a net are connected
3. When folded, edges that meet must be equal in length
4. The net's total area equals the surface area of the 3D shape

**Common 3D Shapes and their Nets:**

1. **Cube**
- Has 6 equal squares
- Can have 11 different net patterns
- Most common pattern is a cross shape (1 square with 4 squares around it, plus 1 square attached to any of the 4)
- Each edge in the net becomes a fold line

2. **Cuboid (Rectangular Prism)**
- Has 6 rectangles (3 pairs of identical rectangles)
- Front and back faces are identical
- Top and bottom faces are identical
- Left and right faces are identical
- Multiple possible net arrangements

3. **Cylinder**
- Has 2 circular bases and 1 rectangular face
- Rectangle's length = circumference of circular base
- Rectangle's width = height of cylinder
- Circles represent top and bottom bases

4. **Cone**
- Has 1 circular base and 1 sector of a circle
- Sector angle determines the cone's shape
- Radius of sector = slant height of cone
- Arc length of sector = circumference of base

5. **Pyramid**
- Base can be any polygon
- Has triangular faces meeting at apex
- Number of triangular faces equals number of base edges
- Square pyramid has 1 square and 4 triangles

**How to Draw Nets:**
1. Start with the base shape
2. Add connected faces one by one
3. Ensure edges that will meet are equal
4. Check that all faces are included
5. Verify the folding pattern works

**Sample Problems:**

1. **Cube Net Problem:**
   Given a cube with edge 5 cm:
   - Each face is a 5 cm × 5 cm square
   - Total area of net = 6 × 25 = 150 square cm
   - Perimeter of net depends on arrangement

2. **Cylinder Net Problem:**
   For a cylinder with radius 7 cm and height 10 cm:
   - Rectangle size = 2πr × h = 44 cm × 10 cm
   - Circle radius = 7 cm
   - Total area = 2πr² + 2πrh

**Real-world Applications:**
1. Package Design: Creating boxes and containers
2. Architecture: Planning building structures
3. Engineering: Designing metal parts
4. Crafts: Making paper models and decorations
5. Education: Teaching spatial reasoning

**Common Mistakes to Avoid:**
1. Missing faces in the net
2. Incorrect edge lengths
3. Disconnected faces
4. Overlapping faces when folded
5. Incorrect angles between faces

**Tips for Working with Nets:**
1. Always count the faces to ensure none are missing
2. Check if edges that meet are equal
3. Try folding mentally before cutting
4. Use grid paper for accurate drawing
5. Label corresponding edges

**Summary:**
- Nets are 2D patterns that fold into 3D shapes
- Each 3D shape can have multiple valid nets
- Properties like edge length and face shape must be preserved
- Understanding nets helps in visualization and construction
- Real-world applications in packaging, design, and engineering

**Practice Activities:**
1. Draw different nets for the same shape
2. Create 3D models from nets
3. Identify missing faces in incomplete nets
4. Calculate surface areas using nets
5. Design packaging using nets

Remember: The key to mastering nets is practice and visualization. Start with simple shapes like cubes and gradually move to more complex shapes like pyramids and prisms.`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 