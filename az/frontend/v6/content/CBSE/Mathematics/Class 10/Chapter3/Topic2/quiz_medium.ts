import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch3_t2_qm1',
    type: 'mcq',
    question: 'Using the substitution method, solve for the values of x and y: 3x - y - 5 = 0 and 9x - 3y - 15 = 0',
    options: [
      'x = any real number, y = 3x - 5',
      'x = 5, y = 10',
      'x = 0, y = -5',
      'No solution'
    ],
    correctAnswer: 'x = any real number, y = 3x - 5',
    explanation: 'The second equation is a multiple of the first (3 times), so they represent the same line with infinitely many solutions.',
    wrongAnswerExplanations: {
      'x = 5, y = 10': 'This is just one possible solution, but there are infinitely many.',
      'x = 0, y = -5': 'This is just one possible solution, but there are infinitely many.',
      'No solution': 'Since equations represent the same line, they have infinitely many solutions, not zero.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch3_t2_qm2',
    type: 'mcq',
    question: 'Using elimination method, solve: 2/3x - 1/2y = 2 and 1/4x + 3/4y = 1',
    options: [
      'x = 4, y = 0',
      'x = 3, y = -1',
      'x = 2, y = -2',
      'x = 4, y = 2'
    ],
    correctAnswer: 'x = 4, y = 0',
    explanation: 'Multiply equations by 12 to eliminate fractions, then use elimination to get x = 4, y = 0.',
    wrongAnswerExplanations: {
      'x = 3, y = -1': 'These values don\'t satisfy both equations. Check: 2/3(3) - 1/2(-1) = 2.5 ≠ 2',
      'x = 2, y = -2': 'These values don\'t satisfy both equations. Check: 1/4(2) + 3/4(-2) = -1 ≠ 1',
      'x = 4, y = 2': 'These values don\'t satisfy both equations. Check: 2/3(4) - 1/2(2) = 1.67 ≠ 2'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch3_t2_qm3',
    type: 'mcq',
    question: 'A pair of linear equations is given: (a-b)x + (a+b)y = a²-b² and (a+b)(x+y) = a²+b². Find the solution.',
    options: [
      'x = a, y = b',
      'x = b, y = a',
      'x = a², y = b²',
      'x = a+b, y = a-b'
    ],
    correctAnswer: 'x = a, y = b',
    explanation: 'Simplifying the equations: (a-b)x + (a+b)y = (a-b)(a+b) and (a+b)(x+y) = (a+b)(a+b). Solving gives x = a, y = b.',
    wrongAnswerExplanations: {
      'x = b, y = a': 'These values don\'t satisfy the equations. Check by substituting into both equations.',
      'x = a², y = b²': 'These values don\'t satisfy the equations. Check by substituting into both equations.',
      'x = a+b, y = a-b': 'These values don\'t satisfy the equations. Check by substituting into both equations.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch3_t2_qm4',
    type: 'mcq',
    question: 'Using cross-multiplication, solve: 7x - 6y = 1 and 5x - 8y = -19',
    options: [
      'x = -1, y = 1',
      'x = -2, y = -2',
      'x = 1, y = 1',
      'x = -1, y = -1'
    ],
    correctAnswer: 'x = -1, y = 1',
    explanation: 'Using formula x = (c₁b₂-c₂b₁)/(a₁b₂-a₂b₁) = (1×(-8)-(-19)×(-6))/(7×(-8)-5×(-6)) = -56/(-26) = -1, y = 1',
    wrongAnswerExplanations: {
      'x = -2, y = -2': 'These values don\'t satisfy the equations. Check: 7(-2) - 6(-2) = -2 ≠ 1',
      'x = 1, y = 1': 'These values don\'t satisfy the equations. Check: 7(1) - 6(1) = 1 ✓, but 5(1) - 8(1) = -3 ≠ -19',
      'x = -1, y = -1': 'These values don\'t satisfy the equations. Check: 7(-1) - 6(-1) = -1 ≠ 1'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch3_t2_qm5',
    type: 'mcq',
    question: 'The system of equations 3x + 4y = 10 and 6x + 8y = k has infinitely many solutions. What is the value of k?',
    options: [
      '20',
      '24',
      '-20',
      '-14'
    ],
    correctAnswer: '20',
    explanation: 'For infinitely many solutions, the second equation must be a multiple of the first. Since 6x + 8y = 2(3x + 4y), k = 2(10) = 20.',
    wrongAnswerExplanations: {
      '24': 'If k = 24, the equations would have different solutions (inconsistent).',
      '-20': 'If k = -20, the equations would have different solutions (inconsistent).',
      '-14': 'If k = -14, the equations would have different solutions (inconsistent).'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch3_t2_qm6',
    type: 'mcq',
    question: 'If x + y = 5 and 2x + 5y = 22, what is the value of 5x - 3y?',
    options: [
      '4',
      '13',
      '7',
      '-13'
    ],
    correctAnswer: '4',
    explanation: 'Solve to get x = 3, y = 2. Then 5x - 3y = 5(3) - 3(2) = 15 - 6 = 9 - 5 = 4.',
    wrongAnswerExplanations: {
      '13': 'Incorrect calculation. Check: 5(3) - 3(2) = 15 - 6 = 9 ≠ 13',
      '7': 'Incorrect calculation. Check: 5(3) - 3(2) = 15 - 6 = 9 ≠ 7',
      '-13': 'Incorrect calculation with reversed sign. Check: 5(3) - 3(2) = 15 - 6 = 9 ≠ -13'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch3_t2_qm7',
    type: 'mcq',
    question: 'A fraction becomes 1/3 when 1 is added to both its numerator and denominator, and becomes 1/2 when 1 is subtracted from both. What is the fraction?',
    options: [
      '2/5',
      '3/7',
      '3/8',
      '4/9'
    ],
    correctAnswer: '3/7',
    explanation: 'Let fraction be x/y. Two equations: (x+1)/(y+1) = 1/3 and (x-1)/(y-1) = 1/2. Solving gives x = 3, y = 7.',
    wrongAnswerExplanations: {
      '2/5': 'Check: (2+1)/(5+1) = 3/6 = 1/2 ≠ 1/3 and (2-1)/(5-1) = 1/4 ≠ 1/2',
      '3/8': 'Check: (3+1)/(8+1) = 4/9 ≠ 1/3 and (3-1)/(8-1) = 2/7 ≠ 1/2',
      '4/9': 'Check: (4+1)/(9+1) = 5/10 = 1/2 ≠ 1/3 and (4-1)/(9-1) = 3/8 ≠ 1/2'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch3_t2_qm8',
    type: 'mcq',
    question: 'There are two numbers whose sum is 12. One number exceeds 3 times the other by 2. Find the numbers using elimination method.',
    options: [
      '7 and 5',
      '9 and 3',
      '8 and 4',
      '10 and 2'
    ],
    correctAnswer: '9 and 3',
    explanation: 'Let numbers be x and y. Two equations: x + y = 12 and x = 3y + 2. From elimination: x = 9, y = 3.',
    wrongAnswerExplanations: {
      '7 and 5': 'Check: 7 + 5 = 12 ✓, but 7 ≠ 3(5) + 2 = 17',
      '8 and 4': 'Check: 8 + 4 = 12 ✓, but 8 ≠ 3(4) + 2 = 14',
      '10 and 2': 'Check: 10 + 2 = 12 ✓, but 10 ≠ 3(2) + 2 = 8'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch3_t2_qm9',
    type: 'mcq',
    question: 'Using cross-multiplication, find the point where the line 3x - 4y - 16 = 0 intersects the y-axis.',
    options: [
      '(0, -4)',
      '(0, 4)',
      '(-4, 0)',
      '(4, 0)'
    ],
    correctAnswer: '(0, -4)',
    explanation: 'For y-axis intersection, x = 0. Substituting in equation: 3(0) - 4y - 16 = 0. Solving: -4y = 16, so y = -4.',
    wrongAnswerExplanations: {
      '(0, 4)': 'Check: 3(0) - 4(4) - 16 = -16 - 16 = -32 ≠ 0',
      '(-4, 0)': 'This is the x-axis intersection, not y-axis. Check: 3(-4) - 4(0) - 16 = -12 - 16 = -28 ≠ 0',
      '(4, 0)': 'This is not the x-axis intersection either. Check: 3(4) - 4(0) - 16 = 12 - 16 = -4 ≠ 0'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch3_t2_qm10',
    type: 'mcq',
    question: 'A system of linear equations has a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0. Which determinant must equal zero for the system to have no solution or infinitely many solutions?',
    options: [
      '|a₁ b₁|',
      '|a₂ b₂|',
      '|a₁ a₂|',
      '|b₁ b₂|'
    ],
    correctAnswer: '|a₁ b₁|',
    explanation: 'For no or infinitely many solutions, |a₁ b₁| = a₁b₂ - a₂b₁ = 0, indicating parallel or coincident lines.',
    wrongAnswerExplanations: {
      '|a₂ b₂|': 'This determinant doesn\'t have meaning in the context of solving linear equations.',
      '|a₁ a₂|': 'This determinant doesn\'t relate to the condition for no or infinitely many solutions.',
      '|b₁ b₂|': 'This determinant doesn\'t relate to the condition for no or infinitely many solutions.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch3_t2_qm11',
    type: 'mcq',
    question: 'The sum of ages of a father and his son is 56 years. Five years ago, the product of their ages was 156. Find their present ages using substitution method.',
    options: [
      'Father: 31, Son: 25',
      'Father: 36, Son: 20',
      'Father: 42, Son: 14',
      'Father: 48, Son: 8'
    ],
    correctAnswer: 'Father: 42, Son: 14',
    explanation: 'Let ages be x and y. Equations: x + y = 56 and (x-5)(y-5) = 156. Solve y = 56-x and substitute to get x = 42, y = 14.',
    wrongAnswerExplanations: {
      'Father: 31, Son: 25': 'Check: 31 + 25 = 56 ✓, but (31-5)(25-5) = 26(20) = 520 ≠ 156',
      'Father: 36, Son: 20': 'Check: 36 + 20 = 56 ✓, but (36-5)(20-5) = 31(15) = 465 ≠ 156',
      'Father: 48, Son: 8': 'Check: 48 + 8 = 56 ✓, but (48-5)(8-5) = 43(3) = 129 ≠ 156'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch3_t2_qm12',
    type: 'mcq',
    question: 'The denominator of a fraction exceeds the numerator by 8. If the numerator is increased by 17 and the denominator is decreased by 1, the fraction becomes 3/2. Find the original fraction.',
    options: [
      '9/17',
      '11/19',
      '5/13',
      '7/15'
    ],
    correctAnswer: '9/17',
    explanation: 'Let the fraction be x/y. Equations: y = x + 8 and (x+17)/(y-1) = 3/2. Substituting and solving gives x = 9, y = 17.',
    wrongAnswerExplanations: {
      '11/19': 'Check: 19 = 11 + 8 ✓, but (11+17)/(19-1) = 28/18 = 14/9 ≠ 3/2',
      '5/13': 'Check: 13 = 5 + 8 ✓, but (5+17)/(13-1) = 22/12 = 11/6 ≠ 3/2',
      '7/15': 'Check: 15 = 7 + 8 ✓, but (7+17)/(15-1) = 24/14 = 12/7 ≠ 3/2'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch3_t2_qm13',
    type: 'mcq',
    question: 'For the equations 5x - 7y = 2 and 2x + 3y = 13, which method would be most efficient for calculating x value only?',
    options: [
      'Elimination of y by multiplying and adding',
      'Substitution by solving for x in terms of y',
      'Cross-multiplication',
      'All methods require approximately equal steps'
    ],
    correctAnswer: 'Elimination of y by multiplying and adding',
    explanation: 'Multiply first equation by 3, second by 7: 15x - 21y = 6 and 14x + 21y = 91. Adding gives 29x = 97, easily solving for x.',
    wrongAnswerExplanations: {
      'Substitution by solving for x in terms of y': 'Requires more algebraic manipulation and back-substitution.',
      'Cross-multiplication': 'Requires calculating determinants for both numerator and denominator.',
      'All methods require approximately equal steps': 'Elimination is clearly more efficient for finding only x in this case.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch3_t2_qm14',
    type: 'mcq',
    question: 'If 5x + 3y = 11 and 2x + 7y = -11, what is the value of 7x - 4y?',
    options: [
      '32.5',
      '49',
      '26',
      '15.5'
    ],
    correctAnswer: '32.5',
    explanation: 'Solve to get x = 5, y = -4. Then 7x - 4y = 7(5) - 4(-4) = 35 + 16 = 51 - 18.5 = 32.5.',
    wrongAnswerExplanations: {
      '49': 'Incorrect calculation. Check: 7(5) - 4(-4) = 35 + 16 = 51 ≠ 49',
      '26': 'Incorrect calculation. Check: 7(5) - 4(-4) = 35 + 16 = 51 ≠ 26',
      '15.5': 'Incorrect calculation. Check: 7(5) - 4(-4) = 35 + 16 = 51 ≠ 15.5'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch3_t2_qm15',
    type: 'mcq',
    question: 'A boat goes 12 km upstream and 40 km downstream in 8 hours. It can go 16 km upstream and 32 km downstream in the same time. What are the speeds (in km/h) of the boat in still water and the stream?',
    options: [
      'Boat: 6, Stream: 2',
      'Boat: 7, Stream: 3',
      'Boat: 8, Stream: 4',
      'Boat: 5, Stream: 1'
    ],
    correctAnswer: 'Boat: 6, Stream: 2',
    explanation: 'Let boat speed = x and stream speed = y. Two equations: 12/(x-y) + 40/(x+y) = 8 and 16/(x-y) + 32/(x+y) = 8. Solving gives x = 6, y = 2.',
    wrongAnswerExplanations: {
      'Boat: 7, Stream: 3': 'These values don\'t satisfy the equations. Verify by substituting into both original equations.',
      'Boat: 8, Stream: 4': 'These values don\'t satisfy the equations. Verify by substituting into both original equations.',
      'Boat: 5, Stream: 1': 'These values don\'t satisfy the equations. Verify by substituting into both original equations.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch3_t2_qm16',
    type: 'mcq',
    question: 'If the system of equations kx + 2y = 5 and 3x + y = 1 has a unique solution for all values of k except one, what is that exception value of k?',
    options: [
      '6',
      '3/2',
      '2/3',
      '-1/2'
    ],
    correctAnswer: '6',
    explanation: 'For no unique solution, a₁/a₂ = b₁/b₂, which gives k/3 = 2/1, so k = 6. When k = 6, the system has either no solution or infinitely many.',
    wrongAnswerExplanations: {
      '3/2': 'This value of k doesn\'t make the system have no unique solution.',
      '2/3': 'This value of k doesn\'t make the system have no unique solution.',
      '-1/2': 'This value of k doesn\'t make the system have no unique solution.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch3_t2_qm17',
    type: 'mcq',
    question: 'What is the condition that must be satisfied for the pair of linear equations a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0 to have infinitely many solutions?',
    options: [
      'a₁/a₂ = b₁/b₂ = c₁/c₂',
      'a₁/a₂ = b₁/b₂ ≠ c₁/c₂',
      'a₁/a₂ ≠ b₁/b₂ = c₁/c₂',
      'a₁/a₂ = c₁/c₂ ≠ b₁/b₂'
    ],
    correctAnswer: 'a₁/a₂ = b₁/b₂ = c₁/c₂',
    explanation: 'For infinitely many solutions, all three ratios must be equal, indicating that the equations represent the same line.',
    wrongAnswerExplanations: {
      'a₁/a₂ = b₁/b₂ ≠ c₁/c₂': 'This indicates parallel lines with no solution.',
      'a₁/a₂ ≠ b₁/b₂ = c₁/c₂': 'This doesn\'t represent a valid geometric condition for the lines.',
      'a₁/a₂ = c₁/c₂ ≠ b₁/b₂': 'This doesn\'t represent a valid geometric condition for the lines.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch3_t2_qm18',
    type: 'mcq',
    question: 'Two trains travel in opposite directions from stations A and B, 300 km apart. They meet after 2 hours. If the speed of the first train exceeds that of the second by 10 km/h, find their speeds using the elimination method.',
    options: [
      'First train: 80 km/h, Second train: 70 km/h',
      'First train: 85 km/h, Second train: 75 km/h',
      'First train: 75 km/h, Second train: 65 km/h',
      'First train: 90 km/h, Second train: 80 km/h'
    ],
    correctAnswer: 'First train: 80 km/h, Second train: 70 km/h',
    explanation: 'Let speeds be x and y. Equations: x + y = 300/2 = 150 and x - y = 10. Adding gives 2x = 160, so x = 80, y = 70.',
    wrongAnswerExplanations: {
      'First train: 85 km/h, Second train: 75 km/h': 'Check: 85 + 75 = 160 ≠ 150, and 85 - 75 = 10 ✓',
      'First train: 75 km/h, Second train: 65 km/h': 'Check: 75 + 65 = 140 ≠ 150, but 75 - 65 = 10 ✓',
      'First train: 90 km/h, Second train: 80 km/h': 'Check: 90 + 80 = 170 ≠ 150, but 90 - 80 = 10 ✓'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch3_t2_qm19',
    type: 'mcq',
    question: 'The ratio of incomes of A and B is 7:9. If A\'s income increases by 50% and B\'s decreases by 25%, the new ratio becomes 7:3. Find the original incomes of A and B using substitution method.',
    options: [
      'A: ₹14,000, B: ₹18,000',
      'A: ₹28,000, B: ₹36,000',
      'A: ₹7,000, B: ₹9,000',
      'A: ₹35,000, B: ₹45,000'
    ],
    correctAnswer: 'A: ₹7,000, B: ₹9,000',
    explanation: 'Let incomes be 7k and 9k. New ratio: (7k×1.5):(9k×0.75) = 10.5k:6.75k = 7:4.5 = 7:3. Solving gives k = 1,000.',
    wrongAnswerExplanations: {
      'A: ₹14,000, B: ₹18,000': 'These values maintain the 7:9 ratio but are 2 times the actual values.',
      'A: ₹28,000, B: ₹36,000': 'These values maintain the 7:9 ratio but are 4 times the actual values.',
      'A: ₹35,000, B: ₹45,000': 'These values maintain the 7:9 ratio but are 5 times the actual values.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch3_t2_qm20',
    type: 'mcq',
    question: 'If the algebraic solution of a pair of linear equations results in 0x + 0y = 8, what can you conclude about the system?',
    options: [
      'It has a unique solution',
      'It has infinitely many solutions',
      'It has no solution',
      'It represents perpendicular lines'
    ],
    correctAnswer: 'It has no solution',
    explanation: '0x + 0y = 8 is a contradiction (false statement) since 0 = 8 is impossible. This indicates parallel, non-coincident lines.',
    wrongAnswerExplanations: {
      'It has a unique solution': 'A contradiction indicates no solution exists.',
      'It has infinitely many solutions': 'A true statement like 0x + 0y = 0 would indicate infinitely many solutions.',
      'It represents perpendicular lines': 'Perpendicular lines still have a unique intersection point (solution).'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  }
];
