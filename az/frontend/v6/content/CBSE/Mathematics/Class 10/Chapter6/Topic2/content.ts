import { generateId } from '../../../../../../app/utils/idGenerator';
import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
  id: 'cl10_ch6_t2',
  topicNumber: 2,
  topicName: "Criteria for similarity (AA, SAS, SSS)",
  duration: 45,
  description: "Understanding the criteria for determining when two triangles are similar, including Angle-Angle, Side-Angle-Side, and Side-Side-Side similarity criteria",
  explanation: `
# Criteria for Similarity of Triangles 🌟

Similar triangles are one of the most powerful concepts in geometry! While you've already been introduced to the idea of similar triangles, in this topic, we'll explore the specific criteria that help us determine when two triangles are similar. These criteria provide us with shortcuts to establish similarity without having to check every angle and side. Let's dive into the fascinating world of triangle similarity! 🔍

## What Makes Triangles Similar? 📐

Before we explore the specific criteria, let's quickly recap what it means for triangles to be similar:

Two triangles are similar if and only if:
1. Their corresponding angles are equal
2. Their corresponding sides are proportional

In similar triangles, if we denote the ratio of corresponding sides as k (called the **scale factor** or **ratio of similarity**), then:
- The ratio of their perimeters is also k
- The ratio of their areas is k²
- The ratio of their altitudes is k
- The ratio of their angle bisectors is k
- The ratio of their medians is k

Now, let's explore the three main criteria for establishing similarity!

## 1. The AA Similarity Criterion (Angle-Angle) 📊

The **AA criterion** (Angle-Angle) states that:
> If two angles of one triangle are equal to two angles of another triangle, then the triangles are similar.

### Key Points about AA Similarity:
- Only two angles need to be checked (not all three)
- This is because the sum of angles in any triangle is 180°, so if two angles are equal, the third must be equal as well
- AA similarity doesn't tell us the scale factor directly; we need to measure at least one pair of corresponding sides

### Example of AA Similarity 📋

**Example 1**: Consider triangles ABC and PQR with:
- ∠A = 30°, ∠B = 60°
- ∠P = 30°, ∠Q = 60°

By the AA criterion, triangles ABC and PQR are similar. The third angles, ∠C and ∠R, must both be 90° (as the sum of angles in a triangle is 180°).

**Example 2**: A triangle has angles of 45°, 45°, and 90°. Another triangle has angles of 45°, 45°, and 90°. Are they similar?

Yes, by the AA criterion, these triangles (both of which are isosceles right triangles) are similar.

**Sample Question** ❓: In triangles DEF and MNO, if ∠D = 70°, ∠E = 50°, ∠M = 50°, and ∠N = 70°, are the triangles similar?

**Solution**: 
- In triangle DEF: ∠D = 70°, ∠E = 50°, so ∠F = 60° (as angles sum to 180°)
- In triangle MNO: ∠M = 50°, ∠N = 70°, so ∠O = 60° (as angles sum to 180°)

Matching the corresponding vertices: D corresponds to N (both 70°), E corresponds to M (both 50°), and F corresponds to O (both 60°).

Yes, the triangles are similar by the AA criterion, with the correspondence being DEF ~ NMO.

## 2. The SAS Similarity Criterion (Side-Angle-Side) 📏

The **SAS similarity criterion** states that:
> If two sides of one triangle are proportional to two sides of another triangle, and the included angles are equal, then the triangles are similar.

### Key Points about SAS Similarity:
- Only two pairs of sides and one pair of angles (the included angles) need to be checked
- The scale factor is immediately known from the ratio of the corresponding sides
- This criterion combines proportional sides with an equal angle

### Example of SAS Similarity 📋

**Example 1**: Consider triangles ABC and PQR where:
- AB = 4 cm, AC = 6 cm, ∠A = 60°
- PQ = 6 cm, PR = 9 cm, ∠P = 60°

Since AB/PQ = 4/6 = 2/3 and AC/PR = 6/9 = 2/3, and the included angles ∠A and ∠P are equal (60°), the triangles are similar by the SAS criterion.

**Example 2**: In a pair of triangles, if two sides of the first triangle are 5 cm and 8 cm with the included angle of 110°, and two sides of the second triangle are 10 cm and 16 cm with the included angle of 110°, are the triangles similar?

Yes, because 5/10 = 8/16 = 1/2 and the included angles are equal (110°), the triangles are similar by the SAS criterion.

**Sample Question** ❓: Triangle ABC has sides AB = 7 cm, AC = 9 cm and included angle ∠A = 45°. Triangle DEF has sides DE = 14 cm, DF = 18 cm and included angle ∠D = 45°. Are the triangles similar?

**Solution**: 
- AB/DE = 7/14 = 1/2
- AC/DF = 9/18 = 1/2
- The included angles ∠A and ∠D are equal (45°)

Therefore, triangles ABC and DEF are similar by the SAS criterion, with a scale factor of 1:2.

## 3. The SSS Similarity Criterion (Side-Side-Side) 📏📏📏

The **SSS similarity criterion** states that:
> If the corresponding sides of two triangles are proportional, then the triangles are similar.

### Key Points about SSS Similarity:
- All three pairs of corresponding sides must be in the same ratio
- No angle measurements are needed
- The scale factor is immediately known from the ratio of the sides

### Example of SSS Similarity 📋

**Example 1**: Consider triangles ABC and PQR with:
- AB = 3 cm, BC = 4 cm, AC = 5 cm
- PQ = 6 cm, QR = 8 cm, PR = 10 cm

Since AB/PQ = 3/6 = 1/2, BC/QR = 4/8 = 1/2, and AC/PR = 5/10 = 1/2, the triangles are similar by the SSS criterion.

**Example 2**: A triangle has sides of 9 cm, 12 cm, and 15 cm. Another triangle has sides of 12 cm, 16 cm, and 20 cm. Are they similar?

Let's check the ratios:
- 9/12 = 3/4
- 12/16 = 3/4
- 15/20 = 3/4

Yes, the triangles are similar by the SSS criterion, with a scale factor of 3:4.

**Sample Question** ❓: Triangle ABC has sides AB = 5 cm, BC = 7 cm, and AC = 8 cm. Triangle PQR has sides PQ = 15 cm, QR = 21 cm, and PR = 24 cm. Are the triangles similar?

**Solution**: 
- AB/PQ = 5/15 = 1/3
- BC/QR = 7/21 = 1/3
- AC/PR = 8/24 = 1/3

Therefore, triangles ABC and PQR are similar by the SSS criterion, with a scale factor of 1:3.

## Applications of the Similarity Criteria 🛠️

These similarity criteria are not just theoretical—they have important applications in various fields:

### 1. Basic Proportionality Theorem (Thales' Theorem) 📊

This theorem states that if a line is drawn parallel to one side of a triangle, intersecting the other two sides, then it divides those sides proportionally.

**Example**: In triangle ABC, if DE is parallel to BC (with D on AB and E on AC), then:
- AD/DB = AE/EC

This result follows from the similarity of triangles ADE and ABC (by the AA criterion).

### 2. Angle Bisector Theorem 📐

This theorem states that if a line bisects an angle of a triangle, then it divides the opposite side into segments proportional to the adjacent sides.

**Example**: In triangle ABC, if AD bisects ∠BAC (with D on BC), then:
- BD/DC = AB/AC

This result can be proven using the SAS similarity criterion.

### 3. Similar Triangles in Construction and Architecture 🏛️

Architects and engineers use similar triangles to:
- Scale drawings and blueprints
- Calculate heights of structures
- Design proportional structures
- Create perspective drawings

### 4. Shadow Problems 🌞

Similar triangles help us solve problems involving shadows, like finding the height of buildings or trees using their shadows and a reference object.

**Example**: If a 6-meter pole casts a 4-meter shadow, and at the same time, a building casts a 20-meter shadow, the height of the building is:
- Height/6 = 20/4, giving Height = 30 meters

### 5. Navigation and Surveying 🧭

Surveyors and navigators use similar triangles for:
- Measuring distances to inaccessible points
- Creating maps
- Determining altitudes and elevations

## Common Mistakes to Avoid 🚫

1. **Confusing similarity with congruence**: Similar triangles have equal angles and proportional sides, while congruent triangles have equal angles and equal sides.

2. **Mismatching corresponding vertices**: When working with similar triangles, be careful to correctly identify which vertices correspond to each other.

3. **Using AAA as a criterion**: This is redundant since a triangle has only three angles, and if two are equal, the third must also be equal. AA is sufficient.

4. **Thinking that equal areas imply similarity**: Two triangles can have equal areas but different shapes, meaning they aren't necessarily similar.

5. **Assuming that if one pair of angles is equal, the triangles must be similar**: You need at least two pairs of equal angles for the AA criterion.

## Practice with Applications 🏋️‍♀️

### Application 1: Indirect Measurement 📏

You want to find the height of a tree. You measure a 5-foot vertical pole's shadow to be 3 feet long. At the same time, the tree's shadow is 27 feet long. How tall is the tree?

**Solution**:
- Using similar triangles: Tree height/5 = 27/3
- Tree height = 5 × (27/3) = 45 feet

### Application 2: Scale Drawing 📝

A model of a building is constructed with a scale of 1:50. If the model is 48 cm tall, what is the actual height of the building?

**Solution**:
- Actual height/Model height = 50/1
- Actual height = 48 cm × 50 = 2,400 cm = 24 meters

### Application 3: Art and Photography 📸

An 8" × 10" photograph needs to be enlarged to fit a 20" width frame. What will be the height of the enlarged photograph?

**Solution**:
- Using similar rectangles: New height/Old height = New width/Old width
- New height = 10" × (20"/8") = 25"

## Summary ✨

In this topic, we've explored the three main criteria for establishing the similarity of triangles:

1. **AA Criterion (Angle-Angle)**: If two angles of one triangle are equal to two angles of another triangle, the triangles are similar. This is because in a triangle, if two angles are equal, the third must also be equal.

2. **SAS Criterion (Side-Angle-Side)**: If two sides of one triangle are proportional to two sides of another triangle, and the included angles are equal, the triangles are similar.

3. **SSS Criterion (Side-Side-Side)**: If all three sides of one triangle are proportional to the three sides of another triangle, the triangles are similar.

These criteria provide efficient shortcuts for establishing similarity without having to check every angle and side ratio. They have numerous practical applications, from architecture and construction to navigation and art.

Remember, similar triangles have equal angles and proportional sides, with the ratio of similarity affecting not just the sides but also areas, perimeters, and various other measurements associated with the triangles.

### Additional Practice Problems:

1. In triangle ABC, D is a point on BC such that AD is the angle bisector of angle A. If AB = 12 cm, AC = 8 cm, and BC = 15 cm, find the length of BD.

2. Two poles of heights 8 m and 12 m stand vertically on level ground. If the distance between their feet is 15 m, find the distance between their tops.

3. A ladder 13 m long reaches a window 12 m above the ground. If the ladder is moved to reach another window, it has to be placed 8 m away from the wall. If the ladder forms the same angle with the ground in both cases, find the height of the second window.
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
