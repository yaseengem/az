import { QuizQuestion, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
    id: 'cl8_ch9_t3',
    topicNumber: 3,
    topicName: "Practical measurement problems",
    duration: 60,
    description: "Learn how to solve real-world problems involving surface area and volume calculations of cubes, cuboids, and cylinders.",
    explanation: `
# Practical Measurement Problems 📏

In our daily lives, we often encounter situations where we need to calculate measurements of three-dimensional objects. Whether it's determining how much paint is needed to cover a room, how much water a tank can hold, or how much material is required to make a container, understanding how to solve practical measurement problems is essential. Let's explore various real-world applications and problem-solving strategies! 🌟

## 1. Storage Containers and Packaging 📦

### Water Storage Tanks
- **Problem Type**: Volume calculation for storage capacity
- **Common Shapes**: Cylindrical or cubical tanks
- **Key Considerations**:
  * 1 cubic meter (m³) = 1000 liters
  * Height of water level
  * Safety margin from top
- **Example**: A cylindrical water tank with radius 1.4 m and height 2 m can hold:
  * Volume = πr²h = π × 1.4² × 2 ≈ 12.32 m³ = 12,320 liters

### Packaging Boxes
- **Problem Type**: Surface area for material needed
- **Common Shapes**: Cubical or cuboid boxes
- **Key Considerations**:
  * Material wastage allowance
  * Overlap for joining edges
  * Cost optimization
- **Example**: A gift box of dimensions 30 cm × 20 cm × 15 cm needs:
  * Surface area = 2(lw + lh + wh) = 2(600 + 450 + 300) = 2,700 cm² of wrapping paper

## 2. Construction and Interior Design 🏗️

### Room Painting
- **Problem Type**: Surface area calculation
- **Key Calculations**:
  * Wall area (excluding windows and doors)
  * Paint coverage per liter
  * Multiple coat requirements
- **Example**: A room 4 m × 3 m × 3 m with a door (2 m × 1 m) and window (1.5 m × 1 m):
  * Total wall area = 2(4 × 3 + 3 × 3) = 42 m²
  * Excluding openings = 42 - (2 × 1 + 1.5 × 1) = 38.5 m²

### Flooring and Tiling
- **Problem Type**: Area calculation with wastage
- **Key Considerations**:
  * Tile size and pattern
  * Cutting waste
  * Extra tiles for replacements
- **Example**: For a 15 m × 12 m floor with 30 cm × 30 cm tiles:
  * Number of tiles needed = (15 × 100 × 12 × 100)/(30 × 30) = 2000 tiles
  * With 10% extra = 2200 tiles

## 3. Manufacturing and Material Usage 🏭

### Container Manufacturing
- **Problem Type**: Surface area and volume optimization
- **Key Calculations**:
  * Material required (surface area)
  * Storage capacity (volume)
  * Cost efficiency
- **Example**: A cylindrical can with radius 5 cm and height 15 cm:
  * Material needed = 2πr² + 2πrh = 2π(25 + 75) = 628.32 cm²
  * Storage capacity = πr²h = 1178.10 cm³

### Pipe Systems
- **Problem Type**: Volume and flow calculations
- **Key Considerations**:
  * Inner and outer dimensions
  * Flow rate
  * Material volume
- **Example**: A pipe with outer radius 5.2 cm, inner radius 5 cm, length 10 m:
  * Material volume = π(R² - r²)L = π(5.2² - 5²) × 1000 ≈ 6,283.19 cm³

## 4. Problem-Solving Strategies 🎯

### Step 1: Understand the Problem
- Identify the shape(s) involved
- List given measurements
- Determine what needs to be found
- Note any unit conversions needed

### Step 2: Draw and Label
- Sketch the 3D object
- Label all dimensions
- Mark unknown values
- Show any subdivisions needed

### Step 3: Choose the Right Formula
- Surface Area:
  * Cube: 6a²
  * Cuboid: 2(lw + lh + wh)
  * Cylinder: 2πr² + 2πrh
- Volume:
  * Cube: a³
  * Cuboid: l × w × h
  * Cylinder: πr²h

### Step 4: Solve and Check
- Substitute values carefully
- Keep track of units
- Verify answer makes sense
- Round appropriately

## 5. Common Unit Conversions 📊

### Length
- 1 m = 100 cm = 1000 mm
- 1 km = 1000 m
- 1 foot = 30.48 cm

### Area
- 1 m² = 10000 cm²
- 1 hectare = 10000 m²
- 1 square foot = 929.03 cm²

### Volume
- 1 m³ = 1000000 cm³
- 1 L = 1000 cm³ = 1000 mL
- 1 m³ = 1000 L

## 6. Cost Calculations 💰

### Material Cost
- Calculate total surface area
- Add wastage percentage
- Multiply by cost per unit area
- Include labor costs if applicable

### Volume-based Cost
- Calculate total volume
- Convert to required units
- Multiply by cost per unit volume
- Add transportation costs if needed

## 7. Practical Tips and Tricks ✨

### For Surface Area
- Always add extra for overlaps in packaging
- Consider texture and pattern matching
- Include wastage factor (usually 5-10%)
- Account for irregular features

### For Volume
- Leave appropriate space for expansion
- Consider internal fixtures or fittings
- Use appropriate rounding
- Include safety margins

## 8. Real-World Applications 🌍

### Home and Garden
- Paint required for walls
- Carpet area calculations
- Garden storage solutions
- Swimming pool capacity

### Industry
- Product packaging design
- Storage tank construction
- Pipeline installations
- Material optimization

### Commerce
- Shipping container volumes
- Warehouse space utilization
- Product display units
- Transportation planning

## Summary 📝

Practical measurement problems require:
1. Clear understanding of the problem
2. Correct identification of shapes and dimensions
3. Appropriate formula selection
4. Careful calculations with proper units
5. Consideration of real-world factors
6. Cost and efficiency optimization

Remember:
- Always draw diagrams when solving problems
- Double-check your units
- Include practical considerations
- Verify your answer makes sense
- Keep safety margins in mind

Practice solving various types of problems to build confidence and speed in calculations. Real-world applications often combine multiple concepts, so understanding the fundamentals is crucial! 🎯
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 