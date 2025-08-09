import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
    id: 'cl7_ch15_t1',
    topicNumber: 1,
    topicName: '3D Shapes: Faces, Edges, Vertices',
    duration: 90,
    description: "Learn about three-dimensional shapes and their basic elements - faces, edges, and vertices - and how these elements relate to each other.",
    explanation: `Three-dimensional (3D) shapes are solid objects that have length, width, and height. Understanding the elements of 3D shapes - faces, edges, and vertices - is fundamental to visualizing and working with solid shapes.

**Elements of 3D Shapes:**

1. **Faces**
- Flat or curved surfaces that form the shape
- Can be regular or irregular
- Examples: squares in a cube, rectangles in a cuboid
- Some shapes like spheres have no flat faces
- Faces meet at edges

2. **Edges**
- Lines where two faces meet
- Can be straight or curved
- Form the outline of faces
- Example: a cube has 12 straight edges
- Edges meet at vertices

3. **Vertices**
- Points where edges meet
- Also called corners
- Some shapes have no vertices (sphere, cylinder)
- Example: a cube has 8 vertices

**Common 3D Shapes and their Elements:**

1. **Cube**
- Faces: 6 identical square faces
- Edges: 12 equal straight edges
- Vertices: 8 vertices
- Each vertex connects 3 edges
- Each edge connects 2 faces

2. **Cuboid (Rectangular Prism)**
- Faces: 6 rectangular faces (3 pairs)
- Edges: 12 straight edges
- Vertices: 8 vertices
- Similar structure to cube
- Opposite faces are identical

3. **Cylinder**
- Faces: 2 circular faces (bases) and 1 curved surface
- Edges: 2 circular edges
- Vertices: No vertices
- Curved surface connects the bases

4. **Cone**
- Face: 1 circular face (base) and 1 curved surface
- Edge: 1 circular edge
- Vertex: 1 vertex (apex)
- Curved surface connects base to apex

5. **Sphere**
- No faces (1 continuous curved surface)
- No edges
- No vertices
- Perfectly symmetrical

6. **Pyramid**
- Faces: 1 base (any polygon) + triangular faces
- Edges: Number depends on base shape
- Vertices: Number of base corners + 1 apex
- All faces except base are triangles

**Important Relationships:**

1. **Euler's Formula**
- For any polyhedron: V + F = E + 2
  where V = vertices, F = faces, E = edges
- Examples:
  * Cube: 8 + 6 = 12 + 2
  * Square pyramid: 5 + 5 = 8 + 2
  * Triangular prism: 6 + 5 = 9 + 2

2. **Face-Edge Relationships**
- Each face has edges equal to its sides
- Each edge connects exactly 2 faces
- Number of edges meeting at a vertex varies

**Properties to Remember:**

1. **Regular vs. Irregular Shapes**
- Regular: All faces are identical regular polygons
- Irregular: Faces may be different or irregular
- Example: Cube is regular, cuboid is not

2. **Curved vs. Flat Surfaces**
- Some shapes have only flat faces (polyhedra)
- Some have curved surfaces (cylinder, cone)
- Some have only curved surface (sphere)

3. **Parallel and Perpendicular Elements**
- Parallel faces: Opposite faces in cubes/cuboids
- Perpendicular edges: Adjacent edges in cubes
- Perpendicular faces: Adjacent faces in cubes

**Common Misconceptions:**

1. **About Faces**
- Curved surfaces count as faces
- A face is a complete surface, not just the visible part
- Faces can be inside the shape (cross-sections)

2. **About Edges**
- Edges can be curved (cylinder base)
- Not all shapes have edges (sphere)
- Edges are where faces meet, not just lines

3. **About Vertices**
- Not all 3D shapes have vertices
- A vertex is where edges meet, not just a point
- The number of edges at a vertex can vary

**Practical Applications:**

1. **Architecture**
- Building design uses faces and edges
- Structural strength depends on vertices
- Room layouts based on face arrangements

2. **Engineering**
- Part design considers faces and edges
- Assembly points often at vertices
- Strength calculations use edge relationships

3. **Everyday Objects**
- Packaging design (faces and edges)
- Furniture construction (vertices and edges)
- Building blocks and toys

**Learning Tips:**

1. **Counting Elements**
- Start with faces, then edges, then vertices
- Use systematic approach (mark counted elements)
- Verify using Euler's formula

2. **Identifying Elements**
- Look for flat and curved surfaces (faces)
- Find where surfaces meet (edges)
- Locate where edges meet (vertices)

3. **Visualization Practice**
- Use physical 3D models
- Draw and label elements
- Practice with everyday objects

**Summary:**
- 3D shapes are made up of faces, edges, and vertices
- Different shapes have different combinations of elements
- Euler's formula connects these elements
- Understanding these helps in real-world applications

Remember: The key to understanding 3D shapes is recognizing how faces, edges, and vertices work together to form complete solid shapes.`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 