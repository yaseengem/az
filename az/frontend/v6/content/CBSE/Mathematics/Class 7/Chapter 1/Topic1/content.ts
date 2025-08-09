import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
   id: 'cl7_ch1_t1',
   topicNumber: 1,
   topicName: "Operations: Addition, subtraction, multiplication, division",
   duration: 45,
   description: "Understanding basic operations on integers with real-life applications and properties",
   explanation: `
# Operations on Integers 🔢

Welcome to the fascinating world of integers! In this topic, we'll explore how to perform basic operations (addition, subtraction, multiplication, and division) with integers. Understanding these operations is crucial for solving real-life problems and building a strong foundation in mathematics. Let's dive in! 🚀

## Understanding Integers 🌟

Integers are whole numbers that can be positive, negative, or zero. They are represented on the number line as follows:
- Positive integers: 1, 2, 3, 4, ... (to the right of zero)
- Negative integers: -1, -2, -3, -4, ... (to the left of zero)
- Zero: 0 (the center point)

## Addition of Integers ➕

Adding integers can be visualized using the number line:
1. **Adding two positive integers**: Move right on the number line
   - Example: 3 + 4 = 7
   - Real-life example: If you have ₹3 and earn ₹4 more, you now have ₹7

2. **Adding two negative integers**: Move left on the number line
   - Example: (-3) + (-4) = -7
   - Real-life example: If you owe ₹3 and borrow ₹4 more, you now owe ₹7

3. **Adding positive and negative integers**: Move towards the larger number
   - Example: 5 + (-3) = 2
   - Real-life example: If you have ₹5 and spend ₹3, you have ₹2 left

## Subtraction of Integers ➖

Subtraction can be thought of as adding the opposite:
1. **Subtracting a positive integer**: Move left on the number line
   - Example: 7 - 3 = 4
   - Real-life example: If you have ₹7 and spend ₹3, you have ₹4 left

2. **Subtracting a negative integer**: Move right on the number line
   - Example: 5 - (-3) = 8
   - Real-life example: If you have ₹5 and a debt of ₹3 is forgiven, you now have ₹8

3. **Subtracting from a negative integer**:
   - Example: (-4) - 2 = -6
   - Real-life example: If you owe ₹4 and spend ₹2 more, you now owe ₹6

## Multiplication of Integers ✖️

The rules for multiplying integers are:
1. **Positive × Positive = Positive**
   - Example: 3 × 4 = 12
   - Real-life example: If you earn ₹3 per hour and work 4 hours, you earn ₹12

2. **Negative × Negative = Positive**
   - Example: (-3) × (-4) = 12
   - Real-life example: If you lose ₹3 per day and this happens for 4 days, you've lost ₹12

3. **Positive × Negative = Negative**
   - Example: 3 × (-4) = -12
   - Real-life example: If you spend ₹3 per day for 4 days, you've spent ₹12

4. **Negative × Positive = Negative**
   - Example: (-3) × 4 = -12
   - Real-life example: If you lose ₹3 per hour and this happens for 4 hours, you've lost ₹12

## Division of Integers ➗

The rules for dividing integers are similar to multiplication:
1. **Positive ÷ Positive = Positive**
   - Example: 12 ÷ 3 = 4
   - Real-life example: If you have ₹12 and want to divide it equally among 3 friends, each gets ₹4

2. **Negative ÷ Negative = Positive**
   - Example: (-12) ÷ (-3) = 4
   - Real-life example: If you owe ₹12 and this debt is divided among 3 people, each person owes ₹4

3. **Positive ÷ Negative = Negative**
   - Example: 12 ÷ (-3) = -4
   - Real-life example: If you have ₹12 and want to give ₹3 to each person, you can give to 4 people

4. **Negative ÷ Positive = Negative**
   - Example: (-12) ÷ 3 = -4
   - Real-life example: If you owe ₹12 and want to pay it back in 3 installments, each installment is ₹4

## Properties of Integer Operations 🔍

1. **Commutative Property**:
   - Addition: a + b = b + a
   - Multiplication: a × b = b × a
   - Example: 3 + 5 = 5 + 3 = 8

2. **Associative Property**:
   - Addition: (a + b) + c = a + (b + c)
   - Multiplication: (a × b) × c = a × (b × c)
   - Example: (2 + 3) + 4 = 2 + (3 + 4) = 9

3. **Distributive Property**:
   - a × (b + c) = a × b + a × c
   - Example: 3 × (4 + 5) = 3 × 4 + 3 × 5 = 27

4. **Identity Elements**:
   - Additive Identity: a + 0 = a
   - Multiplicative Identity: a × 1 = a
   - Example: 5 + 0 = 5, 5 × 1 = 5

## Real-Life Applications 🌍

1. **Temperature Changes**:
   - If the temperature is 5°C and drops by 7°C, the new temperature is -2°C
   - Example: 5 - 7 = -2

2. **Bank Transactions**:
   - If you have ₹1000 and withdraw ₹1500, your balance is -₹500
   - Example: 1000 - 1500 = -500

3. **Elevation Changes**:
   - If you're at 200m above sea level and descend 300m, you're at -100m
   - Example: 200 - 300 = -100

## Summary ✨

In this topic, we've learned:
1. How to add, subtract, multiply, and divide integers
2. The rules for operations with positive and negative integers
3. Important properties of integer operations
4. Real-life applications of integer operations

Remember these key points:
- Adding a negative is like subtracting
- Subtracting a negative is like adding
- Same signs in multiplication/division give positive results
- Different signs in multiplication/division give negative results

### Practice Problems:
1. Calculate: (-8) + 5 = ?
2. Find: 12 - (-4) = ?
3. Multiply: (-3) × (-6) = ?
4. Divide: (-15) ÷ 3 = ?
5. A submarine is at -200m and rises 150m. What is its new depth?

Answers:
1. -3
2. 16
3. 18
4. -5
5. -50m
`,
   quiz: {
      questions: [
         ...easyQuestions,
         ...mediumQuestions
      ]
   }
}; 