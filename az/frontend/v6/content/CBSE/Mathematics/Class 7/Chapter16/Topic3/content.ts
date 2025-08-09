import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
    id: 'cl7_ch16_t3',
    topicNumber: 3,
    topicName: 'Deductive reasoning exercises',
    duration: 60,
    description: 'Practice logical deduction and reasoning through puzzles and exercises. Develop skills to draw conclusions from given facts.',
    explanation: `# Deductive Reasoning Exercises 🧠

Deductive reasoning is a powerful tool in mathematics and everyday life. It allows us to draw specific conclusions from general statements or known facts. In this topic, you will learn how to use logic to solve puzzles, analyze situations, and make sound decisions based on evidence.

## What is Deductive Reasoning? 🔍
Deductive reasoning is a logical process where you start with a general statement or rule and apply it to a specific case to reach a conclusion. If the premises (starting statements) are true, the conclusion must also be true.

**Example:**
- Premise 1: All mammals have a backbone.
- Premise 2: A whale is a mammal.
- Conclusion: Therefore, a whale has a backbone.

This type of reasoning is used in mathematics, science, law, and even in daily problem-solving.

## How is Deductive Reasoning Different from Inductive Reasoning?
- **Deductive reasoning** moves from general to specific. If the logic is correct, the conclusion is always true.
- **Inductive reasoning** moves from specific examples to a general rule. The conclusion may be likely, but not certain.

**Example of Inductive Reasoning:**
- The sun has risen every day in my life. Therefore, the sun will rise tomorrow. (Likely, but not guaranteed!)

## Steps in Deductive Reasoning
1. **Identify the premises:** What facts or rules are given?
2. **Apply logic:** Use the rules to connect the facts.
3. **Draw a conclusion:** The answer must follow from the premises.

## Types of Deductive Reasoning
- **Syllogism:** Classic form with two premises and a conclusion.
  - Example: All birds have feathers. A sparrow is a bird. Therefore, a sparrow has feathers.
- **Conditional reasoning:** Uses "if...then" statements.
  - Example: If it rains, the ground gets wet. It is raining. Therefore, the ground is wet.
- **Elimination:** Ruling out possibilities to find the answer.
  - Example: If only one student in a group has a red pen, and you see that Sam and Priya have blue pens, then the third student must have the red pen.

## Why is Deductive Reasoning Important? 🌟
- It helps you solve puzzles and brain teasers.
- It is essential for mathematics proofs and problem-solving.
- It improves decision-making in real life.
- It is used in computer programming, law, and science.

## Examples and Practice
### Example 1: Syllogism
- Premise 1: All squares are rectangles.
- Premise 2: All rectangles have four sides.
- Conclusion: All squares have four sides.

### Example 2: Conditional Reasoning
- If a number is divisible by 2, it is even.
- 18 is divisible by 2.
- Therefore, 18 is even.

### Example 3: Elimination
- There are three boxes: one contains apples, one contains oranges, and one contains both.
- The box labeled "apples" is incorrect.
- The box labeled "oranges" is incorrect.
- Therefore, the box labeled "both" must contain both apples and oranges.

## Sample Questions
1. If all cats are animals and some animals are black, can we say some cats are black?
2. If every student in a class passed the test, and Riya is a student in the class, did Riya pass the test?
3. If it is raining, the ground is wet. The ground is not wet. Is it raining?
4. If all triangles have three sides, and shape X has three sides, is shape X a triangle?
5. If only one of the three friends—Amit, Ritu, and Sam—has a bicycle, and Amit and Ritu do not, who has the bicycle?

## Tips for Deductive Reasoning Success
- Read the premises carefully. Do not assume anything not stated.
- Use diagrams or tables to organize information.
- Eliminate impossible options.
- Practice with puzzles and logic games.
- Check if your conclusion must be true, not just possible.

## Real-Life Applications
- **Mathematics:** Proving theorems, solving equations.
- **Science:** Drawing conclusions from experiments.
- **Law:** Making judgments based on evidence.
- **Daily Life:** Deciding what to wear based on the weather forecast.

## Practice Puzzle 🧩
Three friends—Asha, Beena, and Chitra—are sitting in a row. Asha is not at the end. Beena is to the right of Asha. Who is in the middle?

**Solution:**
- Asha cannot be at the end, so she must be in the middle or left.
- Beena is to the right of Asha, so Asha cannot be at the right end.
- Therefore, Asha is in the middle, Beena is on the right, and Chitra is on the left.

## Summary 📝
Deductive reasoning helps you make logical decisions and solve problems with certainty. By practicing these exercises, you will become a better thinker and problem solver. Remember: always start from what you know, apply logic, and reach a conclusion! 🚀
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 