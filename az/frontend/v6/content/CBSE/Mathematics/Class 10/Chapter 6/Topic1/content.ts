import { generateId } from '../../../../../../app/utils/idGenerator';
import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
  id: 'cl10_ch6_t1',
  topicNumber: 1,
  topicName: "Similarity of triangles",
  duration: 45,
  description: "Understanding the concept of similar triangles, the criteria for similarity, and practical applications of triangle similarity in geometry",
  explanation: `
# Similarity of Triangles 🌟

Similar triangles are a fundamental concept in geometry that helps us solve many real-world problems! 📏✨ In this topic, we'll explore what makes triangles similar, how to identify similar triangles, and how to use similarity to find unknown measurements. Let's dive into this fascinating geometric relationship! 🚀

## What Does "Similar Triangles" Mean? 🤔

Two triangles are **similar** when they have the **same shape** but potentially different sizes. More precisely:

- Their corresponding angles are **equal**
- Their corresponding sides are **proportional**

Think of similar triangles as photocopies of each other that might have been enlarged or reduced. 📸

### Key Notation

When triangles ABC and DEF are similar, we write:
- △ABC ~ △DEF (the ~ symbol means "similar to")

When writing about corresponding parts, we list vertices in the same order:
- A corresponds to D
- B corresponds to E
- C corresponds to F

So the corresponding sides are: AB and DE, BC and EF, AC and DF.

## Criteria for Similarity of Triangles 📋

We don't need to check all angles and sides to determine if triangles are similar. The following criteria are sufficient:

### 1. Angle-Angle (AA) Criterion 📐

**Statement**: If two angles of one triangle are equal to two angles of another triangle, then the triangles are similar.

**Why it works**: Since the sum of angles in any triangle is 180°, if two angles are equal, the third must be equal too.

**Example**:
- In △ABC, if ∠A = 50° and ∠B = 60°, then ∠C = 70°
- In △PQR, if ∠P = 50° and ∠Q = 60°, then ∠R = 70°
- Since two angles match, △ABC ~ △PQR by the AA criterion

**Note**: Sometimes this is called the AAA criterion, but since the third angle is determined by the first two, AA is sufficient.

### 2. Side-Angle-Side (SAS) Similarity Criterion 📏

**Statement**: If the ratio of two sides of one triangle equals the ratio of two corresponding sides of another triangle, and the included angles are equal, then the triangles are similar.

**Example**:
- In △ABC and △DEF, if:
  * AB/DE = AC/DF
  * ∠A = ∠D
- Then △ABC ~ △DEF by the SAS similarity criterion

### 3. Side-Side-Side (SSS) Similarity Criterion 📏📏📏

**Statement**: If the corresponding sides of two triangles are proportional, then the triangles are similar.

**Example**:
- In △ABC and △PQR, if:
  * AB/PQ = BC/QR = CA/RP
- Then △ABC ~ △PQR by the SSS similarity criterion

## Properties of Similar Triangles 🔍

When triangles are similar, several relationships hold true:

### 1. Corresponding Angles Are Equal

In similar triangles △ABC ~ △DEF:
- ∠A = ∠D
- ∠B = ∠E
- ∠C = ∠F

### 2. Corresponding Sides Are Proportional

If △ABC ~ △DEF, then:
- AB/DE = BC/EF = AC/DF = k (where k is the scale factor)

### 3. Ratio of Areas

If △ABC ~ △DEF with a scale factor k for the sides, then:
- Area of △ABC / Area of △DEF = k²

**Example**: If the sides of triangle DEF are twice as long as the corresponding sides of triangle ABC, then the area of DEF is 2² = 4 times the area of ABC.

### 4. Ratio of Perimeters

If △ABC ~ △DEF with a scale factor k for the sides, then:
- Perimeter of △ABC / Perimeter of △DEF = k

### 5. Corresponding Medians, Angle Bisectors, and Altitudes

All of these are in the same ratio as the corresponding sides.

## Basic Proportionality Theorem (Thales' Theorem) 📐

This theorem helps us identify parallel lines and establish similar triangles:

**Statement**: If a line is drawn parallel to one side of a triangle, it divides the other two sides proportionally.

**Mathematical form**: In △ABC, if DE ∥ BC and D is on AB, E is on AC, then:
- AD/DB = AE/EC
- Also, AB/AD = AC/AE

**Converse**: If a line divides two sides of a triangle proportionally, it is parallel to the third side.

**Example**:
- In △ABC, if D is on AB, E is on AC, and AD/DB = AE/EC = 2/3, then DE ∥ BC
- Moreover, DE/BC = 2/5 (since the ratio is AD/AB = 2/5)

## Similar Right Triangles 📐

Right triangles have special similarity properties:

1. **If an altitude is drawn from the right angle to the hypotenuse**:
   - The altitude divides the original triangle into two triangles that are both similar to the original triangle
   - If the right angle is at A and AD ⊥ BC, then △ABC ~ △ADB ~ △ADC

2. **Special theorem**: If AD ⊥ BC, then:
   - AD² = BD × DC
   - AB² = BC × BD
   - AC² = BC × DC

These are powerful tools for solving problems involving right triangles!

## Applications of Similar Triangles 🌍

Similar triangles have many practical applications:

### 1. Finding Heights Indirectly 🏢

**Example**: To find the height of a tall building:
1. Measure your height (e.g., 1.8 m)
2. Measure your shadow (e.g., 2.4 m)
3. Measure the building's shadow (e.g., 16 m)
4. Set up a proportion: 1.8/building height = 2.4/16
5. Solve: building height = 1.8 × 16/2.4 = 12 m

This works because the triangles formed by you and your shadow and the building and its shadow are similar.

### 2. Distance Measurement 🌊

**Example**: To find the distance across a river:
1. Place markers A and C on one bank
2. Place marker B on the opposite bank, forming triangle ABC
3. Extend AC to point D such that AC = CD
4. Place marker E on the opposite bank such that CE ∥ AB
5. Measure DE (e.g., 25 m)
6. Distance across (AB) = DE = 25 m

This works because of similar triangles created by parallel lines.

### 3. Map Scaling 🗺️

Maps use similarity principles to represent large areas in manageable sizes while maintaining proportions. If a map has a scale of 1:10,000, a 2 cm measurement on the map represents 20,000 cm (200 m) in real life.

## Examples and Problems 📝

### Example 1: Basic Similarity
In △ABC, ∠A = 65°, ∠B = 45°, and ∠C = 70°.
In △PQR, ∠P = 65°, ∠Q = 45°, and ∠R = 70°.
Are these triangles similar? If yes, why?

**Solution**:
Yes, △ABC ~ △PQR by the AA similarity criterion because:
- ∠A = ∠P = 65°
- ∠B = ∠Q = 45°
(We don't need to check the third angle, but we can confirm ∠C = ∠R = 70°)

### Example 2: Finding Unknown Side
In △ABC and △DEF, ∠A = ∠D, ∠B = ∠E, AB = 5 cm, AC = 7 cm, and DE = 10 cm.
Find DF.

**Solution**:
Since ∠A = ∠D and ∠B = ∠E, △ABC ~ △DEF by the AA criterion.
Since corresponding sides are proportional:
AB/DE = AC/DF
5/10 = 7/DF
DF = 7 × 10/5 = 14 cm

### Example 3: Basic Proportionality Theorem
In △ABC, point D is on AB and point E is on AC such that DE ∥ BC.
If AD = 4 cm, DB = 6 cm, and AE = 8 cm, find EC.

**Solution**:
By the Basic Proportionality Theorem:
AD/DB = AE/EC
4/6 = 8/EC
EC = 6 × 8/4 = 12 cm

### Example 4: Area Ratio
Two similar triangles have sides in the ratio 3:4. What is the ratio of their areas?

**Solution**:
If the ratio of corresponding sides is 3:4, then the ratio of their areas is (3:4)² = 9:16.

## Common Mistakes to Avoid ⚠️

1. **Incorrect correspondence**: When identifying similar triangles, make sure you correctly match corresponding vertices.
   - In △ABC ~ △DEF, A corresponds to D, B to E, and C to F
   - Incorrect matching will lead to wrong conclusions

2. **Confusing similarity with congruence**: Similar triangles have the same shape but may have different sizes; congruent triangles are identical in both shape and size.

3. **Forgetting to square the ratio**: When calculating the ratio of areas of similar triangles, don't forget to square the ratio of corresponding sides.

4. **Using AAA or AAS as similarity criteria**: While AAA works (but is redundant since it reduces to AA), AAS is not a valid standalone similarity criterion.

5. **Incorrectly applying proportionality**: When using the Basic Proportionality Theorem, make sure you set up the correct proportions.

## Sample Questions ❓

**Question 1**: In △ABC, DE is parallel to BC with D on AB and E on AC. If AD = 3 cm, DB = 4 cm, and AE = 4.5 cm, find EC.

**Answer**: Since DE ∥ BC, by the Basic Proportionality Theorem, AD/AB = AE/AC. 
So, AD/DB = AE/EC, which gives 3/4 = 4.5/EC. 
Solving for EC: EC = 4.5 × 4/3 = 6 cm.

**Question 2**: A 5-meter pole casts a 3-meter shadow. At the same time, a building casts a 36-meter shadow. How tall is the building?

**Answer**: Using similar triangles,
pole height/building height = pole shadow/building shadow
5/h = 3/36
h = 5 × 36/3 = 60 meters

**Question 3**: In similar triangles, if the ratio of their perimeters is 2:3, what is the ratio of their areas?

**Answer**: If the ratio of perimeters is 2:3, then the ratio of corresponding sides is also 2:3.
The ratio of areas is (2:3)² = 4:9.

## Summary ✨

Similar triangles are a powerful concept in geometry that help us solve many real-world problems. Here's what we've learned:

- Two triangles are similar when their corresponding angles are equal and their corresponding sides are proportional
- Three criteria for similarity: AA, SAS similarity, and SSS similarity
- Properties of similar triangles include proportional sides, equal angles, and area ratio = (side ratio)²
- Basic Proportionality Theorem states that a line parallel to one side of a triangle divides the other two sides proportionally
- Similar triangles have numerous practical applications in measuring heights, distances, and scaling
- In right triangles, the altitude to the hypotenuse creates triangles similar to the original triangle

By understanding these principles, you can solve complex geometric problems and apply these concepts to real-world situations! 🎯

### Additional Practice:

1. In △ABC, if ∠A = 55°, ∠B = 65°, and ∠C = 60°, is it possible to find another triangle similar to △ABC? Why or why not?

2. In similar triangles △ABC and △PQR, if AB = 5 cm, BC = 7 cm, CA = 8 cm, and PQ = 15 cm, find QR and RP.

3. In △ABC, D is a point on BC such that AD bisects ∠BAC. If AB = 8 cm, AC = 12 cm, find the ratio BD:DC.
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
