import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
    id: 'cl9_ch7_t2',
    topicNumber: 2,
    topicName: "Congruence of Triangles",
    duration: 45,
    description: "Understanding the concept of congruence in triangles, its meaning, and significance in geometric reasoning",
    explanation: `
# Congruence of Triangles 🔄

Congruence is a fundamental concept in geometry that allows us to compare figures and determine if they have the same size and shape. 📐 In this topic, we'll explore what it means for triangles to be congruent and why this concept is so important in mathematical reasoning.

## What is Congruence? 🤔

Two geometric figures are said to be **congruent** if they have exactly the same size and shape. In simpler terms, if you could pick up one figure and place it exactly on top of the other with no overlap or gaps, they are congruent.

For triangles specifically, congruence means:
- All three corresponding sides are equal in length
- All three corresponding angles are equal in measure

When two triangles are congruent, we write it as:
△ABC ≅ △DEF

This means triangle ABC is congruent to triangle DEF, where:
- Vertex A corresponds to vertex D
- Vertex B corresponds to vertex E
- Vertex C corresponds to vertex F

The order of the vertices is important because it tells us which parts correspond to each other.

## Corresponding Parts of Congruent Triangles 📊

When two triangles are congruent, their corresponding parts are equal. These parts include:

1. **Corresponding Sides**: The three pairs of sides match in length.
   - If △ABC ≅ △DEF, then AB = DE, BC = EF, and CA = FD.

2. **Corresponding Angles**: The three pairs of angles match in measure.
   - If △ABC ≅ △DEF, then ∠A = ∠D, ∠B = ∠E, and ∠C = ∠F.

This principle is often referred to as CPCTC (Corresponding Parts of Congruent Triangles are Congruent).

## Congruence vs. Similarity 🔄

It's important to distinguish between congruence and similarity:

- **Congruent Triangles**: Same size and same shape. All corresponding sides and angles are equal.
- **Similar Triangles**: Same shape but possibly different sizes. Corresponding angles are equal, and corresponding sides are proportional.

**Example** 🔍: 
- Two equilateral triangles with sides of 5 cm each are congruent.
- An equilateral triangle with sides of 3 cm and another with sides of 6 cm are similar but not congruent.

## Rigid Motions and Congruence 🔁

Congruence can also be understood through the concept of rigid motions. Rigid motions are transformations that preserve the distance between points, such as:

1. **Translation (Slide)**: Moving a figure without rotating or flipping it.
2. **Rotation (Turn)**: Turning a figure around a fixed point.
3. **Reflection (Flip)**: Flipping a figure over a line.

Two figures are congruent if one can be transformed into the other using a series of rigid motions.

**Example** 🔍: If △ABC is reflected over a line and then translated to a new position, the resulting triangle is congruent to △ABC.

## Methods to Verify Congruence ✅

To verify if two triangles are congruent, we need to check if all their corresponding sides and angles are equal. However, this would require measuring six different quantities (three sides and three angles). Thankfully, we don't always need to check all six! There are certain criteria (which we'll explore in detail in the next topic) that allow us to determine congruence by checking fewer measurements.

## Applications of Congruence 🏗️

Congruence has numerous practical applications:

1. **Manufacturing**: When mass-producing items, ensuring all pieces are congruent ensures consistency.

2. **Construction**: Architectural designs often rely on congruent shapes for stability and aesthetics.

3. **Art and Design**: Artists and designers use congruent shapes to create patterns and symmetrical designs.

4. **Surveying**: Land surveyors use the principles of congruence to accurately measure and map terrain.

5. **Geometric Proofs**: Congruence is a powerful tool in proving geometric theorems and solving problems.

## Recognizing Congruent Triangles 👁️

It's important to be able to visually recognize when two triangles are likely to be congruent:

- They look identical in size and shape
- They can be superimposed perfectly
- All corresponding measurements match

However, visual inspection alone isn't sufficient for mathematical proof. We need to apply specific criteria to establish congruence with certainty.

**Sample Question** ❓: Look at the triangles below and determine which pairs appear to be congruent:
- Triangle 1: sides 5 cm, 7 cm, 9 cm; angles 45°, 55°, 80°
- Triangle 2: sides 7 cm, 9 cm, 5 cm; angles 55°, 80°, 45°
- Triangle 3: sides 5 cm, 7 cm, 9 cm; angles 45°, 55°, 80°

Answer: Triangles 1 and 3 are congruent (identical measurements), and Triangle 2 is also congruent to them (same measurements but listed in a different order).

## Congruence in Mathematical Reasoning 🧠

Congruence is a powerful concept in mathematical reasoning because:

1. **It establishes equality**: If two triangles are congruent, we know all their corresponding parts are equal.

2. **It enables deduction**: If we know two triangles are congruent, we can deduce information about unknown parts.

3. **It simplifies proofs**: Many geometric proofs rely on establishing that certain triangles are congruent.

4. **It connects different parts of a diagram**: In complex geometric problems, identifying congruent triangles can reveal hidden relationships.

## Notation for Congruent Triangles ✏️

When denoting congruent triangles, the order of vertices is crucial:

- If we write △ABC ≅ △PQR, it means:
  * Vertex A corresponds to vertex P
  * Vertex B corresponds to vertex Q
  * Vertex C corresponds to vertex R
  * Side AB corresponds to side PQ
  * Angle A corresponds to angle P
  * And so on...

**Example** 🔍: If △ABC ≅ △XYZ, then:
- Side AB = Side XY
- Side BC = Side YZ
- Side CA = Side ZX
- Angle A = Angle X
- Angle B = Angle Y
- Angle C = Angle Z

## Testing for Congruence 🔬

To test if two physical triangles are congruent, you could:

1. Trace one triangle and place it over the other to see if they match perfectly.
2. Measure all sides and angles of both triangles to verify if corresponding parts are equal.
3. Use a compass and straightedge to construct a triangle identical to one of them, and then compare it to the other.

## Congruence Symbols Around the World 🌍

The symbol "≅" is the standard notation for congruence in most English-speaking countries. However, different symbols are used in different countries:

- "≡" is used in some European countries
- "=" is used in some older texts
- "~=" is sometimes used in digital formats

## Summary ✨

In this topic, we've explored the concept of congruence in triangles:

- **Congruence Definition**: Two triangles are congruent if they have exactly the same size and shape.
- **Corresponding Parts**: When triangles are congruent, their corresponding sides and angles are equal (CPCTC).
- **Congruence vs. Similarity**: Congruent figures have the same size and shape, while similar figures have the same shape but possibly different sizes.
- **Rigid Motions**: Congruence can be understood through translations, rotations, and reflections.
- **Applications**: Congruence has practical applications in manufacturing, construction, art, surveying, and geometric proofs.
- **Notation**: The symbol "≅" denotes congruence, and the order of vertices indicates corresponding parts.

In the next topic, we'll explore specific criteria that allow us to determine when two triangles are congruent without having to check all sides and angles.

### Additional Examples and Sample Questions:

1. **Example**: In a rhombus ABCD, the diagonals AC and BD intersect at point O. Prove that triangles AOB and COD are congruent.

2. **Question**: If △ABC and △DEF are congruent, and AB = 5 cm, BC = 7 cm, and ∠B = 60°, what are the values of DE, EF, and ∠E?
   Answer: Since corresponding parts of congruent triangles are equal, DE = 5 cm, EF = 7 cm, and ∠E = 60°.

3. **Example**: In an isosceles triangle ABC, if AB = AC, then prove that the angles opposite to these sides (∠C and ∠B) are equal.
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 