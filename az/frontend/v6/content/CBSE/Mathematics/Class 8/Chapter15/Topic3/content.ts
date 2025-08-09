import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

const content: TopicContent = {
    id: "cl8_ch15_t3",
    topicNumber: 3,
    topicName: "Deductive reasoning",
    duration: 45,
    description: "Learn to use logical steps and valid arguments to reach conclusions based on given statements or premises.",
    explanation: `Deductive reasoning is a logical thinking process where you reach a conclusion based on premises or statements that are assumed to be true. It's like solving a puzzle by carefully connecting the pieces of information you have. Let's explore how to use deductive reasoning effectively.

1. Understanding Deductive Reasoning
   - Definition
     • A method of logical thinking that moves from general statements to specific conclusions
     • Uses valid arguments based on given premises
     • Conclusion must be true if all premises are true
   
   - Key Components
     • Premises: Given statements assumed to be true
     • Logical Steps: Valid connections between premises
     • Conclusion: The final statement that follows from the premises

2. Types of Deductive Arguments
   a) Direct Reasoning
      • Uses straightforward logical steps
      • Example:
        - Premise 1: All squares are rectangles
        - Premise 2: All rectangles have four sides
        - Conclusion: Therefore, all squares have four sides

   b) Contrapositive Reasoning
      • If P → Q, then (not Q) → (not P)
      • Example:
        - Original: If a number is prime, it has exactly two factors
        - Contrapositive: If a number has more than two factors, it is not prime

   c) Transitive Property
      • If A → B and B → C, then A → C
      • Example:
        - If x > y and y > z, then x > z
        - If all dogs are mammals and all mammals are animals, then all dogs are animals

3. Common Applications in Mathematics
   a) Number Properties
      • Divisibility rules
      • Even and odd numbers
      • Prime numbers
      Example:
      - If all multiples of 4 are even numbers
      - And 12 is a multiple of 4
      - Then 12 must be an even number

   b) Geometric Properties
      • Triangle properties
      • Quadrilateral properties
      • Angle relationships
      Example:
      - If all squares are rectangles
      - And all rectangles have four right angles
      - Then all squares have four right angles

   c) Algebraic Reasoning
      • Equations and inequalities
      • Number sequences
      • Function properties
      Example:
      - If a < b and b < c
      - Then a < c

4. Steps in Deductive Reasoning
   1) Identify the Premises
      • List all given statements
      • Ensure they are clear and understood
      • Check if they are assumed to be true

   2) Analyze the Relationships
      • Look for connections between premises
      • Identify relevant properties or rules
      • Consider all given information

   3) Form Logical Steps
      • Connect premises using valid reasoning
      • Use known mathematical properties
      • Avoid making assumptions

   4) Draw Conclusion
      • State the final result clearly
      • Verify it follows from the premises
      • Check if it's the most specific possible

5. Common Mistakes to Avoid
   a) Invalid Assumptions
      • Don't assume facts not given in premises
      • Don't use personal knowledge outside premises
      • Example: Just because all squares are rectangles doesn't mean all rectangles are squares

   b) Reversed Logic
      • Don't reverse relationships without proof
      • Check if reverse statement is valid
      • Example: If all A are B, it doesn't mean all B are A

   c) Missing Steps
      • Don't skip logical steps
      • Show complete reasoning
      • Connect all premises properly

6. Practice Examples
   Example 1:
   - Given: All right angles are 90°
   - Given: Angle ABC is 85°
   - Conclusion: Angle ABC is not a right angle
   - Reasoning: Since all right angles are 90° and ABC is 85°, it cannot be a right angle

   Example 2:
   - Given: All multiples of 6 are even
   - Given: Number n is odd
   - Conclusion: n is not a multiple of 6
   - Reasoning: Using contrapositive - if all multiples of 6 are even, then any odd number cannot be a multiple of 6

   Example 3:
   - Given: All squares are rectangles
   - Given: All rectangles have parallel sides
   - Given: Shape PQRS has non-parallel sides
   - Conclusion: PQRS is not a square
   - Reasoning: Using transitive property and contrapositive

7. Tips for Success
   1. Write down all premises clearly
   2. Draw diagrams if helpful
   3. Use step-by-step reasoning
   4. Check if conclusion is valid
   5. Look for hidden assumptions
   6. Practice with various examples

Summary:
- Deductive reasoning moves from general to specific
- Uses valid logical steps based on true premises
- Common types: direct, contrapositive, transitive
- Important in mathematics and logical thinking
- Requires careful analysis and clear steps
- Avoid assumptions and invalid conclusions
- Practice with various mathematical concepts

Remember:
• Always check if premises are true
• Follow logical steps carefully
• Verify conclusions are valid
• Use appropriate reasoning type
• Practice regularly to improve skills`,
    quiz: {
        questions: [...easyQuestions, ...mediumQuestions]
    }
};

export default content; 