import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

const content: TopicContent = {
  id: 'cl8_ch6_t1',
  topicNumber: 1,
  topicName: 'Perfect cubes and cube roots',
  duration: 60,
  description: 'Learn about perfect cubes, finding cube roots, and their applications in mathematics.',
  explanation: `# Perfect Cubes and Cube Roots

## What is a Perfect Cube?

A perfect cube is a number that is the result of multiplying an integer by itself three times. In other words, it's the cube of an integer. If we take any integer n, then n³ (n × n × n) is a perfect cube.

### Examples of Perfect Cubes:
- 1 = 1³ (1 × 1 × 1)
- 8 = 2³ (2 × 2 × 2)
- 27 = 3³ (3 × 3 × 3)
- 64 = 4³ (4 × 4 × 4)
- 125 = 5³ (5 × 5 × 5)
- 216 = 6³ (6 × 6 × 6)
- 343 = 7³ (7 × 7 × 7)
- 512 = 8³ (8 × 8 × 8)
- 729 = 9³ (9 × 9 × 9)
- 1000 = 10³ (10 × 10 × 10)

## What is a Cube Root?

The cube root of a number is the value that, when multiplied by itself three times, gives the original number. We denote the cube root of a number n by ∛n.

If n = a³, then ∛n = a.

### Examples of Cube Roots:
- ∛1 = 1 (since 1³ = 1)
- ∛8 = 2 (since 2³ = 8)
- ∛27 = 3 (since 3³ = 27)
- ∛64 = 4 (since 4³ = 64)
- ∛125 = 5 (since 5³ = 125)

## Properties of Cubes and Cube Roots

### 1. Cube of a negative number is negative
When we cube a negative number, the result is always negative.
Example: (-3)³ = (-3) × (-3) × (-3) = -27

### 2. Cube root of a negative number is negative
If n is a negative number, then ∛n is also negative.
Example: ∛(-27) = -3 (since (-3)³ = -27)

### 3. Multiplication property
The cube root of a product equals the product of the cube roots.
∛(a × b) = ∛a × ∛b
Example: ∛(8 × 27) = ∛8 × ∛27 = 2 × 3 = 6

### 4. Division property
The cube root of a quotient equals the quotient of the cube roots.
∛(a / b) = ∛a / ∛b (where b ≠ 0)
Example: ∛(8/27) = ∛8/∛27 = 2/3

### 5. Power property
The cube root of a number raised to a power equals the cube root of the number raised to the power divided by 3.
∛(a^n) = (∛a)^(n/3)
Example: ∛(8²) = (∛8)^(2/3) = 2^(2/3) = 2^(2/3)

## Methods to Find Cube Roots

### 1. Prime Factorization Method

To find the cube root of a number using prime factorization:
1. Express the number as a product of prime factors
2. Group the prime factors in triplets (sets of 3 identical primes)
3. Take one factor from each triplet to form the cube root

Example: Find ∛216
- Prime factorization of 216: 2³ × 3³ = (2 × 2 × 2) × (3 × 3 × 3)
- Taking one factor from each triplet: 2 × 3 = 6
- Therefore, ∛216 = 6

### 2. Estimation Method

For numbers that aren't perfect cubes, we can estimate the cube root by finding the perfect cubes that are just below and above the given number.

Example: Estimate ∛150
- 125 = 5³ < 150 < 216 = 6³
- Since 150 is closer to 125, ∛150 is approximately 5.3

### 3. Decimal Expansion Method

For more precise calculations, we can use long division or other algorithmic approaches to find the decimal expansion of a cube root.

## Applications of Cubes and Cube Roots

### 1. Volume Calculations
The volume of a cube with side length 'a' is a³. Conversely, if the volume of a cube is V, then the side length is ∛V.

Example: If the volume of a cube is 125 cubic cm, the length of its side is ∛125 = 5 cm.

### 2. Real-life Applications
- Architecture and construction: Calculating dimensions of cube-shaped structures
- Physics: Volume and density calculations
- Engineering: Material strength and stress calculations

## Sample Problems

### Problem 1:
Find the cube root of 343.
Solution:
343 = 7³, therefore ∛343 = 7

### Problem 2:
Find the cube root of 1/125.
Solution:
∛(1/125) = ∛1/∛125 = 1/5 = 0.2

### Problem 3:
Find the value of ∛27 + ∛8
Solution:
∛27 + ∛8 = 3 + 2 = 5

### Problem 4:
If the volume of a cube is 27 cubic cm, find its surface area.
Solution:
Side length = ∛27 = 3 cm
Surface area = 6 × (side length)² = 6 × 3² = 6 × 9 = 54 square cm

## Summary

Perfect cubes are numbers that can be expressed as the cube of an integer. Cube roots represent the value that, when cubed, gives the original number. Understanding perfect cubes and cube roots is essential for solving various mathematical problems, especially those related to volume calculations. The prime factorization method is a systematic approach to finding cube roots of perfect cubes, while estimation methods can be used for approximating cube roots of non-perfect cubes.`,
  quiz: {
    questions: [...easyQuestions, ...mediumQuestions]
  }
};

export default content;
