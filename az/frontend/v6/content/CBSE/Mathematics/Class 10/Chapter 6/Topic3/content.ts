import { generateId } from '../../../../../../app/utils/idGenerator';
import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
  id: 'cl10_ch6_t3',
  topicNumber: 3,
  topicName: "Areas of similar triangles",
  duration: 45,
  description: "Understanding how areas of similar triangles are related to their corresponding sides, and applying these relationships to solve geometric problems.",
  explanation: `
# Areas of Similar Triangles 📐

When two triangles are similar, their shapes are identical but their sizes may differ. This topic explores an important relationship: **how the areas of similar triangles relate to the lengths of their corresponding sides**. Understanding this relationship opens up powerful ways to solve geometric problems. Let's dive in! 🔍

## The Fundamental Relationship 📏

For similar triangles, we already know that:
- Corresponding angles are equal
- Corresponding sides are proportional

But what about their areas? 🤔

If two triangles are similar with a scale factor of k (meaning corresponding sides are in the ratio k:1), then:

> **The ratio of their areas is k²:1**

This is one of the most important relationships in similar triangles! Let's understand why this is true and how to apply it.

## Why Areas Scale as the Square of Linear Dimensions 🧮

Consider two similar triangles ABC and PQR with a scale factor of k between corresponding sides.

If we denote:
- The area of triangle ABC as Area₁
- The area of triangle PQR as Area₂
- The sides of ABC as a, b, and c
- The corresponding sides of PQR as ka, kb, and kc

The area of a triangle can be calculated using the formula:
Area = ½ × base × height

For triangle ABC:
Area₁ = ½ × a × h₁ (where h₁ is the height from vertex C to side AB)

For triangle PQR:
Area₂ = ½ × ka × h₂ (where h₂ is the height from the corresponding vertex to the corresponding side)

Since the triangles are similar, heights are also in the same ratio as corresponding sides:
h₂ = k × h₁

Therefore:
Area₂ = ½ × ka × (k × h₁) = k² × (½ × a × h₁) = k² × Area₁

This gives us our fundamental relationship:
**Area₂ : Area₁ = k² : 1**

## Visual Demonstration 👁️

Imagine a triangle that is scaled by a factor of 2 in each dimension:
- Each side is twice as long
- The height is also twice as tall
- The area increases by a factor of 2² = 4

If you stack four of the original triangles together, they would fit perfectly into the larger similar triangle. This visually confirms that the area scales by the square of the scale factor!

## Key Formulas for Similar Triangles 📝

If triangles ABC and DEF are similar with a scale factor of k (ratio of corresponding sides), then:

1. **Area Ratio Formula**: 
   Area of DEF / Area of ABC = k²

2. **Side-Area Relationship**: 
   If AB/DE = BC/EF = CA/FD = k, then:
   Area of ABC / Area of DEF = 1/k²

3. **Perimeter-Area Relationship**: 
   If Perimeter₁/Perimeter₂ = k, then:
   Area₁/Area₂ = k²

## Practical Applications 🌟

### Example 1: Finding the Area of a Similar Triangle
Triangle ABC has sides of 3 cm, 4 cm, and 5 cm with an area of 6 cm². Triangle DEF is similar to ABC with the shortest side measuring 9 cm. What is the area of triangle DEF?

**Solution:**
- Scale factor = 9 cm ÷ 3 cm = 3
- Area of DEF = Area of ABC × (scale factor)²
- Area of DEF = 6 cm² × 3² = 6 cm² × 9 = 54 cm²

### Example 2: Finding the Scale Factor
Triangle PQR has an area of 16 cm² and triangle XYZ has an area of 64 cm². If the triangles are similar, what is the ratio of corresponding sides?

**Solution:**
- Area ratio = 64 cm² ÷ 16 cm² = 4
- If Area₂/Area₁ = k², then k = √(Area₂/Area₁)
- k = √4 = 2
- Therefore, the ratio of corresponding sides is 2:1

### Example 3: Using the Ratio of Perimeters
Triangle ABC has a perimeter of 36 cm and an area of 54 cm². Triangle PQR is similar to ABC with a perimeter of 24 cm. Find the area of triangle PQR.

**Solution:**
- Perimeter ratio = 24 cm ÷ 36 cm = 2/3
- Area ratio = (2/3)² = 4/9
- Area of PQR = 54 cm² × (4/9) = 24 cm²

## Special Cases and Extensions 🔄

### 1. Similarity and Medians
For similar triangles, not only are the sides and areas related, but other corresponding parts maintain specific relationships:
- **Medians** are in the same ratio as the sides (k:1)
- **Angle bisectors** are in the same ratio as the sides (k:1)
- **Altitudes** are in the same ratio as the sides (k:1)

### 2. Areas of Similar Triangles on a Coordinate Plane
When working with triangles on a coordinate plane, we can use the formula:
Area = ½|x₁(y₂-y₃) + x₂(y₃-y₁) + x₃(y₁-y₂)|

If one triangle is a scaled version of another (with scale factor k), the area will be k² times larger.

### 3. Similar Right Triangles
In right triangles, if the scale factor between two similar triangles is k, then:
- The ratio of hypotenuses is k
- The ratio of corresponding legs is k
- The ratio of areas is k²

## Solving Problems Using Areas of Similar Triangles 🧩

### Method 1: Find the Scale Factor First
1. Identify corresponding sides or other elements
2. Calculate the scale factor k
3. Use k² to find the ratio of areas

### Method 2: Direct Area Formula
If you know the areas of both triangles and need to find the scale factor:
k = √(Area₂/Area₁)

### Method 3: Using Coordinates
For triangles on a coordinate plane:
1. Find the coordinates of all vertices
2. Calculate the areas using the coordinate formula
3. Find the ratio of areas
4. The scale factor is the square root of this ratio

## Common Mistakes to Avoid ⚠️

1. **Confusing the scale factor**: Remember the scale factor refers to the ratio of corresponding sides, not areas
2. **Using linear scaling for areas**: Areas scale as the square of linear dimensions, not linearly
3. **Forgetting to square the scale factor**: When going from side ratio to area ratio, don't forget to square the scale factor
4. **Inverting the ratio**: Be clear about which triangle is larger when setting up your scale factor

## Sample Questions 📝

**Question 1:** Triangle ABC has an area of 12 cm². Triangle PQR is similar to triangle ABC with sides twice as long. What is the area of triangle PQR?
**Answer:** 48 cm² (Since the scale factor is 2, the area is 12 × 2² = 48 cm²)

**Question 2:** If two similar triangles have their areas in the ratio 9:4, what is the ratio of their corresponding sides?
**Answer:** 3:2 (Since √(9:4) = 3:2)

**Question 3:** Triangle XYZ has sides 7 cm, 24 cm, and 25 cm with area 84 cm². A similar triangle has its shortest side equal to 14 cm. What is its area?
**Answer:** 336 cm² (Scale factor = 14/7 = 2, so area = 84 × 2² = 336 cm²)

## Real-Life Applications 🌎

1. **Map Scaling**: Maps are similar figures to the actual terrain. If a map is scaled at 1:10,000, the actual area is 10,000² = 100,000,000 times larger than the map area.

2. **Architectural Models**: Architectural models are similar to actual buildings. The area ratio helps architects estimate materials needed for construction.

3. **Photography**: When resizing photographs, if you double the linear dimensions, the area increases by a factor of 4.

4. **Shadow Problems**: Similar triangles formed by objects and their shadows can be used to find heights of tall objects.

## Summary ✨

Let's recap the key points about areas of similar triangles:

1. **Fundamental Relationship**: If two triangles are similar with a scale factor of k for their sides, their areas have a ratio of k².

2. **Mathematical Expression**: 
   - If Side₂/Side₁ = k, then Area₂/Area₁ = k²
   - If Area₂/Area₁ = m, then Side₂/Side₁ = √m

3. **Practical Applications**: 
   - Finding areas of similar triangles
   - Determining the scale factor from areas
   - Solving indirect measurement problems

4. **Remember**: Areas scale as the square of linear dimensions, not linearly.

Understanding the relationship between areas of similar triangles is not just mathematically fascinating but also practical for solving real-world problems involving proportional scaling. Whether you're working with maps, models, or measuring indirectly, these principles provide powerful tools for geometric analysis! 🔍📐

### Additional Practice Problems:

1. Triangle ABC has sides 5 cm, 7 cm, and 10 cm with area 17.5 cm². Triangle DEF is similar to ABC with corresponding sides in the ratio 3:1. Find the area of triangle DEF.

2. The areas of two similar triangles are 81 cm² and 49 cm². If a side of the first triangle is 18 cm, what is the corresponding side of the second triangle?

3. Two similar triangles have perimeters 24 cm and 36 cm. If the area of the smaller triangle is 30 cm², what is the area of the larger triangle?
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
