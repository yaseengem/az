// Topic 1: Construction of line segments and angles
// content.ts will be created here for the topic.

import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
    id: 'cl6_ch14_t1',
    topicNumber: 1,
    topicName: "Construction of Line Segments and Angles",
    duration: 45,
    description: "Learn how to construct line segments and angles using ruler and compass, with practical applications in geometry",
    explanation: `
# Construction of Line Segments and Angles 📐

Welcome to the fascinating world of geometric constructions! 🎨 In this topic, we'll learn how to create precise line segments and angles using just a ruler and compass. These fundamental skills are essential for more complex geometric constructions. Let's get started! 🚀

## Understanding Basic Tools 🛠️

Before we begin constructing, let's understand our essential tools:

1. **Ruler (Straightedge)** 📏
   - Used to draw straight lines
   - Helps in measuring lengths
   - No markings are used for pure geometric constructions

2. **Compass** 🧭
   - Used to draw circles and arcs
   - Helps in transferring lengths
   - Essential for creating precise angles

## Constructing Line Segments 📏

### Basic Line Segment Construction
1. **Given Length** 📐
   - Draw a point A
   - Open compass to required length
   - Draw an arc from point A
   - Mark point B where arc intersects
   - Connect A and B with ruler

2. **Copying a Line Segment** 🔄
   - Draw a reference line segment AB
   - Draw a new point C
   - Open compass to length AB
   - Draw arc from C
   - Mark point D where arc intersects
   - CD is equal to AB

### Practical Applications
- Drawing straight edges for shapes
- Creating equal sides in polygons
- Measuring distances in diagrams

## Constructing Angles 📐

### Basic Angle Construction
1. **Given Angle** 📐
   - Draw a base line
   - Mark vertex point
   - Use protractor to measure angle
   - Draw second line from vertex

2. **Copying an Angle** 🔄
   - Draw reference angle ABC
   - Draw new line DE
   - Copy arc from reference angle
   - Transfer arc to new line
   - Complete angle construction

### Special Angles
1. **Right Angle (90°)** 📐
   - Draw base line
   - Use compass to create perpendicular
   - Verify with protractor

2. **Acute Angle (<90°)** 📐
   - Draw base line
   - Use protractor to measure
   - Draw second line

3. **Obtuse Angle (>90°)** 📐
   - Draw base line
   - Use protractor to measure
   - Draw second line

## Step-by-Step Examples 📝

### Example 1: Constructing a 5 cm Line Segment
1. Draw point A
2. Open compass to 5 cm
3. Draw arc from A
4. Mark point B
5. Connect A and B

### Example 2: Constructing a 60° Angle
1. Draw base line
2. Mark vertex point
3. Use protractor to measure 60°
4. Draw second line
5. Verify angle

## Common Mistakes to Avoid ❌

1. **Inaccurate Measurements** 📏
   - Always double-check compass settings
   - Ensure ruler is properly aligned
   - Verify final measurements

2. **Sloppy Construction** 🎨
   - Keep lines clean and precise
   - Make sure arcs are clear
   - Avoid unnecessary marks

3. **Tool Misuse** 🛠️
   - Don't use ruler markings for pure construction
   - Keep compass tight when drawing
   - Maintain proper tool angles

## Practice Problems 🏋️‍♀️

1. **Problem**: Construct a line segment of 7 cm
   - Solution: Use ruler and compass method
   - Verification: Measure with ruler

2. **Problem**: Copy a given angle of 45°
   - Solution: Use angle copying method
   - Verification: Check with protractor

3. **Problem**: Construct a right angle
   - Solution: Use perpendicular construction
   - Verification: Measure with protractor

## Summary ✨

In this topic, we learned:
- How to use ruler and compass effectively
- Methods for constructing line segments
- Techniques for creating different angles
- Common mistakes to avoid
- Practical applications of constructions

### Additional Examples and Sample Questions:

1. **Example**: Construct a line segment of 8 cm and then divide it into two equal parts
   - Solution: Use compass to find midpoint
   - Verification: Both parts should be 4 cm

2. **Example**: Construct a 30° angle and then copy it to a new position
   - Solution: Use angle copying method
   - Verification: Both angles should measure 30°

3. **Question**: How would you construct a 120° angle?
   - Answer: Draw base line, use protractor to measure 120°, draw second line

4. **Question**: What's the best way to verify a constructed angle?
   - Answer: Use a protractor to measure the angle and compare with required measurement
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
};
