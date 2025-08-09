import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
  id: 'cl10_ch1_t1',
  topicNumber: 1,
  topicName: "Euclid's Division Lemma",
  duration: 60,
  description: "Understand Euclid's division lemma, its statement, proof, and applications in finding HCF and number theory.",
  explanation: `
# Euclid's Division Lemma ✨

Euclid's division lemma is a fundamental result in number theory and forms the basis for many important theorems and algorithms, including the Euclidean algorithm for finding the Highest Common Factor (HCF) of two numbers. Let's explore what it means, how it works, and why it's so important for mathematics!

## What is Euclid's Division Lemma? 🤔

The lemma states:
> Given any two positive integers \( a \) and \( b \), there exist unique integers \( q \) and \( r \) such that:
> \( a = bq + r \), where \( 0 \leq r < b \).

- \( a \) is called the **dividend**
- \( b \) is the **divisor**
- \( q \) is the **quotient**
- \( r \) is the **remainder**

This means that when you divide any positive integer \( a \) by another positive integer \( b \), you always get a unique quotient and remainder, with the remainder being at least 0 and less than the divisor.

## Why is it called a "lemma"? 📚
A lemma is a proven statement used to prove other statements or theorems. Euclid's division lemma is used as a building block for more complex results, such as the Euclidean algorithm and the Fundamental Theorem of Arithmetic.

## Example Calculation 🧮
Let's see how it works with a simple example:

Suppose \( a = 23 \) and \( b = 5 \):
- Divide 23 by 5: 5 × 4 = 20, remainder is 3
- So, \( q = 4 \), \( r = 3 \)
- Therefore, \( 23 = 5 × 4 + 3 \), and 0 ≤ 3 < 5

## More Examples
- \( 100 = 9 × 11 + 1 \) (q = 11, r = 1)
- \( 42 = 8 × 5 + 2 \) (q = 5, r = 2)
- \( 77 = 6 × 12 + 5 \) (q = 12, r = 5)

## Properties of the Remainder
- The remainder \( r \) is always **non-negative**
- \( r \) is always **less than the divisor** \( b \)
- If \( r = 0 \), then \( a \) is exactly divisible by \( b \)

## Applications of Euclid's Division Lemma 🚀
1. **Finding the HCF (Euclidean Algorithm):**
   - The lemma is the basis for the Euclidean algorithm, which is a step-by-step process to find the HCF of two numbers.
2. **Proving the Fundamental Theorem of Arithmetic:**
   - This theorem states that every integer greater than 1 can be written as a product of prime numbers in a unique way. The lemma helps in its proof.
3. **Solving Linear Diophantine Equations:**
   - These are equations of the form \( ax + by = c \), where \( x \) and \( y \) are integers. The lemma helps in finding integer solutions.

## The Euclidean Algorithm (Finding HCF) 🏆
Let's see how the lemma is used to find the HCF of two numbers:

### Example: Find the HCF of 48 and 18
1. Divide 48 by 18: 48 = 18 × 2 + 12
2. Divide 18 by 12: 18 = 12 × 1 + 6
3. Divide 12 by 6: 12 = 6 × 2 + 0
4. When the remainder becomes 0, the divisor at that step is the HCF. Here, HCF = 6

### Another Example: HCF of 81 and 57
1. 81 = 57 × 1 + 24
2. 57 = 24 × 2 + 9
3. 24 = 9 × 2 + 6
4. 9 = 6 × 1 + 3
5. 6 = 3 × 2 + 0
6. HCF = 3

## Why is the Lemma Important? 🌟
- It guarantees that division with remainder always works for positive integers
- It is the foundation for algorithms in mathematics and computer science
- It helps in understanding the structure of numbers and their relationships

## Sample Questions for Practice 📝
1. Express 347 in the form 41q + r, where 0 ≤ r < 41.
2. Find the HCF of 135 and 225 using the Euclidean algorithm.
3. Show that every positive odd integer is of the form 4q + 1 or 4q + 3, where q is an integer.
4. If a = 56, b = 9, find q and r.
5. If a = 143, b = 13, what is the value of r?

## Summary 🎯
- **Euclid's division lemma**: For any two positive integers a and b, there exist unique integers q and r such that a = bq + r, 0 ≤ r < b
- **Applications**: HCF, number theory, proofs, and equations
- **Key skill**: Be able to apply the lemma to solve division and HCF problems

Understanding this lemma will help you solve many problems in mathematics, especially those involving divisibility, HCF, and number theory. Keep practicing with different numbers to master the concept! 💡
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
