import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

const content: TopicContent = {
    id: "cl8_ch15_t1",
    topicNumber: 1,
    topicName: "Logical puzzles and brain teasers",
    duration: 45,
    description: "Learn to solve various types of logical puzzles and brain teasers using mathematical reasoning and pattern recognition.",
    explanation: `Logical puzzles and brain teasers are engaging mathematical problems that help develop critical thinking, pattern recognition, and problem-solving skills. Let's explore different types of puzzles and strategies to solve them.

1. Number Pattern Puzzles
   - Look for arithmetic sequences (adding/subtracting constant numbers)
   - Check geometric sequences (multiplying/dividing by constant numbers)
   - Observe differences between consecutive terms
   - Example: In sequence 2, 6, 12, 20, 30, the differences are 4, 6, 8, 10
   - Pattern: Differences increase by 2 each time, so next number is 42

2. Clock Puzzles
   - Hour hand moves 30° per hour (0.5° per minute)
   - Minute hand moves 6° per minute
   - Calculate angles between hands using these rates
   - Example: At 3:15, hour hand moves 7.5° from 3 (15 × 0.5°)
   - Minute hand at 15 minutes = 90°
   - Angle between hands = |90° - (90° + 7.5°)| = 82.5°

3. Coding and Decoding
   - Look for patterns in letter replacements
   - Check position-based codes (A=1, B=2, etc.)
   - Consider forward/backward shifts in alphabet
   - Example: If FAST = 6341 and LAST = 7341
   - Compare letters: L replaces F, so L=7, F=6
   - Common letters (A, S, T) have same codes

4. Direction and Arrangement Puzzles
   - Draw diagrams for spatial relationships
   - Use compass directions (N, S, E, W)
   - Track relative positions carefully
   - Example: If A is north of B, B is east of C
   - Draw: C -- B
         |
         A
   - A is northeast of C

5. Family Relationship Puzzles
   - Draw family trees
   - Track gender information
   - Follow relationships step by step
   - Example: A is B's mother, B is C's sister
   - Family tree: A (mother)
                  |
                  B (daughter) -- C (son)

6. Time and Distance
   - Convert units consistently
   - Use speed = distance/time formula
   - Consider relative speeds
   - Example: If A is 50% faster than B
   - Time taken by A = (2/3) × time taken by B

7. Mathematical Operations Puzzles
   - Follow order of operations (BODMAS)
   - Replace symbols carefully
   - Verify each step
   - Example: If × means +, ÷ means ×
   - 8 × 4 ÷ 2 becomes 8 + 4 × 2

8. Cube and Spatial Puzzles
   - Visualize 3D objects
   - Count faces, edges, vertices
   - Consider hidden parts
   - Example: Painted cube cut into 27 pieces
   - Corner cubes (3 faces): 8
   - Edge cubes (2 faces): 12
   - Center faces (1 face): 6
   - Center cube (0 faces): 1

Problem-Solving Strategies:
1. Read the question carefully
2. Identify the type of puzzle
3. Draw diagrams if helpful
4. Look for patterns and relationships
5. Solve step by step
6. Verify your answer

Sample Questions:
1. If GIVE = 7985 and TAKE = 2165, what is GATE?
   - Compare common letters
   - G=7, A=1, T=2, E=5
   - GATE = 7125

2. In sequence 3, 8, 15, 24, 35, what comes next?
   - Find differences: 5, 7, 9, 11
   - Pattern: Add 2 to previous difference
   - Next difference: 13
   - Next number: 35 + 13 = 48

Summary:
- Logical puzzles enhance mathematical thinking
- Different types require different approaches
- Drawing diagrams often helps
- Practice improves pattern recognition
- Step-by-step solving is crucial
- Always verify your answers`,
    quiz: {
        questions: [...easyQuestions, ...mediumQuestions]
    }
};

export default content; 