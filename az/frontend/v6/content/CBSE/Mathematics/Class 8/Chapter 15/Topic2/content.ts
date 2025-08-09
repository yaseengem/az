import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

const content: TopicContent = {
    id: "cl8_ch15_t2",
    topicNumber: 2,
    topicName: "Pattern recognition exercises",
    duration: 45,
    description: "Learn to identify, analyze, and solve various types of pattern recognition problems using mathematical reasoning and logical thinking.",
    explanation: `Pattern recognition is a fundamental skill in mathematics that helps develop logical thinking, problem-solving abilities, and mathematical intuition. Let's explore different types of patterns and strategies to recognize and solve them.

1. Number Sequence Patterns
   - Arithmetic Sequences
     • Look for constant differences between consecutive terms
     • Example: 2, 5, 8, 11, 14 (constant difference of +3)
     • To find next term: Add the common difference to the last term
   
   - Geometric Sequences
     • Look for constant ratios between consecutive terms
     • Example: 2, 6, 18, 54, 162 (constant ratio of ×3)
     • To find next term: Multiply the last term by the common ratio

   - Growing Differences
     • Check if differences between terms form a pattern
     • Example: 2, 4, 7, 11, 16 (differences: +2, +3, +4, +5)
     • To find next term: Add the next difference in the pattern

2. Position-Based Patterns
   - Square Numbers
     • Numbers related to position by squaring
     • Example: 1, 4, 9, 16, 25 (1², 2², 3², 4², 5²)
     • Position number n gives term n²

   - Cubic Numbers
     • Numbers related to position by cubing
     • Example: 1, 8, 27, 64, 125 (1³, 2³, 3³, 4³, 5³)
     • Position number n gives term n³

   - Linear Patterns
     • Terms formed by multiplying or adding position number
     • Example: 3, 6, 9, 12, 15 (position × 3)
     • Example: 4, 7, 10, 13, 16 (3n + 1, where n is position)

3. Special Number Patterns
   - Fibonacci Sequence
     • Each number is sum of previous two numbers
     • Example: 1, 1, 2, 3, 5, 8, 13, 21
     • Pattern: Next = Current + Previous

   - Triangular Numbers
     • Sum of first n natural numbers
     • Example: 1, 3, 6, 10, 15, 21
     • Pattern: Add next natural number each time

   - Perfect Numbers
     • Equal to sum of their proper divisors
     • Example: 6 (1+2+3), 28 (1+2+4+7+14)
     • Useful in number theory problems

4. Shape and Visual Patterns
   - Repeating Patterns
     • Look for cycle length and repetition
     • Example: ○, □, △, ○, □, △ (cycle of 3)
     • Next shape follows the established cycle

   - Growing Patterns
     • Observe how shapes or elements increase
     • Example: *, **, ***, **** (add one each time)
     • Count elements and find the growth rule

5. Problem-Solving Strategies
   a) Analyze the First Few Terms
      • Write down several terms
      • Look for relationships between consecutive terms
      • Check for common differences or ratios

   b) Calculate Differences
      • Find differences between consecutive terms
      • Look for patterns in the differences
      • Check if differences form their own pattern

   c) Look for Position Relationships
      • Compare terms with their positions
      • Try squaring, cubing, or multiplying position
      • Consider combinations of operations

   d) Test Your Pattern
      • Verify pattern works for all given terms
      • Check if pattern predicts known terms
      • Ensure pattern makes mathematical sense

Sample Questions:
1. Find the next number: 2, 6, 12, 20, 30
   • Find differences: 4, 6, 8, 10
   • Differences increase by 2
   • Next difference will be 12
   • Therefore, 30 + 12 = 42

2. What comes next: 1, 4, 9, 16, 25
   • These are square numbers
   • Position numbers: 1, 2, 3, 4, 5
   • Next position is 6
   • Therefore, 6² = 36

3. Complete the pattern: 1, 1, 2, 3, 5, 8
   • Each number is sum of previous two
   • 5 + 8 = 13
   • Therefore, next number is 13

Tips for Success:
1. Write out terms clearly
2. Look for multiple patterns
3. Check differences between terms
4. Consider position relationships
5. Verify pattern works backwards
6. Draw diagrams for visual patterns

Summary:
- Pattern recognition requires systematic approach
- Different types need different strategies
- Position relationships often reveal patterns
- Differences between terms provide insights
- Visual representation helps understanding
- Practice improves pattern recognition skills`,
    quiz: {
        questions: [...easyQuestions, ...mediumQuestions]
    }
};

export default content; 