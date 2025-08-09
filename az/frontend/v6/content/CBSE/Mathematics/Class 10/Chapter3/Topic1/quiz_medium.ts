import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch3_t1_qm1',
    type: 'mcq',
    question: 'The lines 3x - y - 5 = 0 and 6x - 2y - 7 = 0 intersect at the point:',
    options: [
      '(−3, −14)',
      '(2, 1)',
      '(−1, −8)',
      '(0, −5)'
    ],
    correctAnswer: '(−3, −14)',
    explanation: 'The second equation simplifies to 3x - y - 3.5 = 0. Solving with the first equation gives (−3, −14).',
    wrongAnswerExplanations: {
      '(2, 1)': 'Substituting into the equations shows this point doesn\'t satisfy both equations.',
      '(−1, −8)': 'Substituting into the equations shows this point doesn\'t satisfy both equations.',
      '(0, −5)': 'Substituting into the equations shows this point doesn\'t satisfy both equations.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch3_t1_qm2',
    type: 'mcq',
    question: 'Determine the nature of the solution for the system: 2x + 3y = 8 and 4x + 6y = 16',
    options: [
      'Infinitely many solutions',
      'Exactly one solution',
      'No solution',
      'Exactly two solutions'
    ],
    correctAnswer: 'Infinitely many solutions',
    explanation: 'The second equation is 2 times the first (4x + 6y = 2(2x + 3y) = 2(8) = 16), representing the same line.',
    wrongAnswerExplanations: {
      'Exactly one solution': 'The equations represent the same line, not intersecting lines.',
      'No solution': 'The equations represent the same line, not parallel lines.',
      'Exactly two solutions': 'Linear equations cannot have exactly two solutions.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch3_t1_qm3',
    type: 'mcq',
    question: 'If the system of equations 2x + 3y = 7 and 4x + ky = 14 has infinitely many solutions, the value of k is:',
    options: [
      '6',
      '7',
      '3/2',
      '2'
    ],
    correctAnswer: '6',
    explanation: 'For infinitely many solutions, coefficients must be proportional: 2/4 = 3/k = 7/14, giving k = 6.',
    wrongAnswerExplanations: {
      '7': 'This doesn\'t satisfy the proportionality condition 2/4 = 3/k = 7/14.',
      '3/2': 'This doesn\'t satisfy the proportionality condition 2/4 = 3/k = 7/14.',
      '2': 'This doesn\'t satisfy the proportionality condition 2/4 = 3/k = 7/14.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch3_t1_qm4',
    type: 'mcq',
    question: 'What is the coordinate of the point where the line y = 3x + 2 intersects the line y = -2x + 12?',
    options: [
      '(2, 8)',
      '(3, 11)',
      '(4, 4)',
      '(5, 2)'
    ],
    correctAnswer: '(2, 8)',
    explanation: 'Equating both equations: 3x + 2 = -2x + 12, giving 5x = 10, so x = 2. Then y = 3(2) + 2 = 8.',
    wrongAnswerExplanations: {
      '(3, 11)': 'Substituting x = 3 into either equation doesn\'t give y = 11.',
      '(4, 4)': 'Substituting x = 4 into either equation doesn\'t give y = 4.',
      '(5, 2)': 'Substituting x = 5 into either equation doesn\'t give y = 2.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch3_t1_qm5',
    type: 'mcq',
    question: 'For what value of k will the system of equations 3x + y = 1 and 6x + 2y = k have no solution?',
    options: [
      'k ≠ 2',
      'k = 2',
      'k = 3',
      'k = 6'
    ],
    correctAnswer: 'k ≠ 2',
    explanation: 'The equations are proportional (6x + 2y = 2(3x + y)), so they\'ll have no solution if k ≠ 2(1) = 2.',
    wrongAnswerExplanations: {
      'k = 2': 'When k = 2, the system has infinitely many solutions as both equations represent the same line.',
      'k = 3': 'This is just one specific value where there\'s no solution; the answer is more general.',
      'k = 6': 'This is just one specific value where there\'s no solution; the answer is more general.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch3_t1_qm6',
    type: 'mcq',
    question: 'Find the point of intersection of the line 4x - 3y = -18 and the x-axis.',
    options: [
      '(-4.5, 0)',
      '(0, 6)',
      '(4.5, 0)',
      '(0, -6)'
    ],
    correctAnswer: '(-4.5, 0)',
    explanation: 'On the x-axis, y = 0. Substituting in 4x - 3(0) = -18 gives 4x = -18, so x = -4.5.',
    wrongAnswerExplanations: {
      '(0, 6)': 'This is the y-intercept, not the x-intercept.',
      '(4.5, 0)': 'Solving 4x = -18 gives x = -4.5, not 4.5.',
      '(0, -6)': 'This is not correct. When x = 0, we get -3y = -18, so y = 6.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch3_t1_qm7',
    type: 'mcq',
    question: 'If the point (3, k) lies on the line 2x - 3y + 5 = 0, what is the value of k?',
    options: [
      '11/3',
      '−11/3',
      '3/11',
      '−3/11'
    ],
    correctAnswer: '11/3',
    explanation: 'Substituting (3, k) into 2x - 3y + 5 = 0: 2(3) - 3k + 5 = 0, giving 6 - 3k + 5 = 0, so k = 11/3.',
    wrongAnswerExplanations: {
      '−11/3': 'Solving 6 - 3k + 5 = 0 gives k = 11/3, not −11/3.',
      '3/11': 'Solving 6 - 3k + 5 = 0 gives k = 11/3, not 3/11.',
      '−3/11': 'Solving 6 - 3k + 5 = 0 gives k = 11/3, not −3/11.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch3_t1_qm8',
    type: 'mcq',
    question: 'The system of equations: x + 2y = 5 and 3x + 6y + k = 0 will have no solution when:',
    options: [
      'k ≠ -15',
      'k = -15',
      'k = 15',
      'k = 0'
    ],
    correctAnswer: 'k ≠ -15',
    explanation: 'The equations are proportional (3x + 6y = 3(x + 2y) = 3(5) = 15), so they\'ll have no solution if k ≠ -15.',
    wrongAnswerExplanations: {
      'k = -15': 'When k = -15, the system has infinitely many solutions as both equations represent the same line.',
      'k = 15': 'When k = 15, the system becomes 3x + 6y + 15 = 0, which is not equivalent to x + 2y = 5.',
      'k = 0': 'When k = 0, the system becomes 3x + 6y = 0, which is not equivalent to x + 2y = 5.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch3_t1_qm9',
    type: 'mcq',
    question: 'For which value of k will the lines kx + y = 5 and 3x + y = 2 be perpendicular to each other?',
    options: [
      '−1/3',
      '1/3',
      '-3',
      '3'
    ],
    correctAnswer: '−1/3',
    explanation: 'Perpendicular lines have slopes with product -1. The slopes are -k and -3, so k×3 = -1, giving k = −1/3.',
    wrongAnswerExplanations: {
      '1/3': 'The product of slopes should be -1, not 1, for perpendicular lines.',
      '-3': 'Solving -k × -3 = -1 gives k = −1/3, not -3.',
      '3': 'Solving -k × -3 = -1 gives k = −1/3, not 3.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch3_t1_qm10',
    type: 'mcq',
    question: 'If the lines 2x + 3y - 7 = 0 and 4x + ky - 14 = 0 are parallel, the value of k is:',
    options: [
      '6',
      '3',
      '2',
      '−3'
    ],
    correctAnswer: '6',
    explanation: 'For parallel lines, coefficients are proportional: 2/4 = 3/k, giving k = 6. The equations have different constants.',
    wrongAnswerExplanations: {
      '3': 'Solving 2/4 = 3/k gives k = 6, not 3.',
      '2': 'Solving 2/4 = 3/k gives k = 6, not 2.',
      '−3': 'Solving 2/4 = 3/k gives k = 6, not −3.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch3_t1_qm11',
    type: 'mcq',
    question: 'The solution of the system of equations 5x - 6y - 7 = 0 and 3x + 2y - 11 = 0 is:',
    options: [
      '(1, -⅓)',
      '(2, 1)',
      '(-1, -2)',
      '(3, 1)'
    ],
    correctAnswer: '(1, -⅓)',
    explanation: 'Solving the system using substitution or elimination gives the point (1, -⅓), which satisfies both equations.',
    wrongAnswerExplanations: {
      '(2, 1)': 'Verify: 5(2) - 6(1) - 7 = 10 - 6 - 7 = -3 ≠ 0.',
      '(-1, -2)': 'Verify: 5(-1) - 6(-2) - 7 = -5 + 12 - 7 = 0, but 3(-1) + 2(-2) - 11 = -3 - 4 - 11 = -18 ≠ 0.',
      '(3, 1)': 'Verify: 5(3) - 6(1) - 7 = 15 - 6 - 7 = 2 ≠ 0.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch3_t1_qm12',
    type: 'mcq',
    question: 'The distance between the parallel lines 2x + 3y = 5 and 2x + 3y = 8 is:',
    options: [
      '3/√13',
      '3/5',
      '3/√5',
      '3/13'
    ],
    correctAnswer: '3/√13',
    explanation: 'Distance = |constant difference|/√(a² + b²) = |5 - 8|/√(2² + 3²) = 3/√13.',
    wrongAnswerExplanations: {
      '3/5': 'The correct formula for distance between parallel lines wasn\'t applied.',
      '3/√5': 'The denominator should be √(2² + 3²) = √13, not √5.',
      '3/13': 'The denominator should be √13, not 13.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch3_t1_qm13',
    type: 'mcq',
    question: 'If the lines 3x + 4y = 7 and 6x + 8y = k have a unique solution, the value of k can be:',
    options: [
      'Any value except 14',
      'Only 14',
      'Only 7',
      'Any value including 14'
    ],
    correctAnswer: 'Any value except 14',
    explanation: 'The lines have a unique solution when they\'re not proportional. 6x + 8y = 2(3x + 4y), so they\'re proportional if k = 2(7) = 14.',
    wrongAnswerExplanations: {
      'Only 14': 'When k = 14, the equations represent the same line, giving infinitely many solutions.',
      'Only 7': 'When k = 7, the lines have a unique solution, but this is just one possible value.',
      'Any value including 14': 'When k = 14, the equations have infinitely many solutions, not a unique solution.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch3_t1_qm14',
    type: 'mcq',
    question: 'Which of these systems of equations is inconsistent?',
    options: [
      '2x - 3y = 5 and 4x - 6y = 8',
      'x + y = 4 and x - y = 2',
      '3x - y = 7 and 9x - 3y = 21',
      '2x + y = 7 and 4x + 2y = 11'
    ],
    correctAnswer: '2x - 3y = 5 and 4x - 6y = 8',
    explanation: 'These equations are proportional (4x - 6y = 2(2x - 3y)) but with different constants (8 ≠ 2(5) = 10), making them inconsistent.',
    wrongAnswerExplanations: {
      'x + y = 4 and x - y = 2': 'Solving gives a unique solution (3, 1).',
      '3x - y = 7 and 9x - 3y = 21': 'These represent the same line (9x - 3y = 3(3x - y) = 3(7) = 21), having infinite solutions.',
      '2x + y = 7 and 4x + 2y = 11': 'Solving gives a unique solution (2, 3).'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch3_t1_qm15',
    type: 'mcq',
    question: 'In the graphical method, what is represented by two intersecting straight lines with different angles of inclination?',
    options: [
      'A system with exactly one solution',
      'A system with no solution',
      'A system with infinitely many solutions',
      'None of these'
    ],
    correctAnswer: 'A system with exactly one solution',
    explanation: 'Two distinct intersecting lines meet at exactly one point, representing a system with exactly one solution.',
    wrongAnswerExplanations: {
      'A system with no solution': 'No solution is represented by parallel lines that don\'t intersect.',
      'A system with infinitely many solutions': 'Infinitely many solutions are represented by coincident lines (same line).',
      'None of these': 'Intersecting lines always represent a system with exactly one solution.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch3_t1_qm16',
    type: 'mcq',
    question: 'For what value of p will the system of equations x + 2y = 5 and 3x + py = 9 have infinitely many solutions?',
    options: [
      '6',
      '4',
      '3',
      '2'
    ],
    correctAnswer: '6',
    explanation: 'For infinitely many solutions: 1/3 = 2/p = 5/9, giving p = 6.',
    wrongAnswerExplanations: {
      '4': 'This doesn\'t satisfy the proportionality condition 1/3 = 2/p = 5/9.',
      '3': 'This doesn\'t satisfy the proportionality condition 1/3 = 2/p = 5/9.',
      '2': 'This doesn\'t satisfy the proportionality condition 1/3 = 2/p = 5/9.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch3_t1_qm17',
    type: 'mcq',
    question: 'If the system of equations 2x + 3y = 7 and 2x + 3y + k = 0 has no solution, the value of k is:',
    options: [
      'Any value except -7',
      'Only -7',
      'Only 7',
      'Any value including -7'
    ],
    correctAnswer: 'Any value except -7',
    explanation: 'The equations represent parallel lines if k ≠ -7, giving no solution. If k = -7, they become the same line.',
    wrongAnswerExplanations: {
      'Only -7': 'When k = -7, the system has infinitely many solutions, not no solution.',
      'Only 7': 'This is incorrect; the system has no solution for any k except -7.',
      'Any value including -7': 'When k = -7, the system has infinitely many solutions, not no solution.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch3_t1_qm18',
    type: 'mcq',
    question: 'Find the area of the triangle formed by the lines y = 0, x = 4, and 2x + 3y = 12.',
    options: [
      '8 square units',
      '12 square units',
      '16 square units',
      '24 square units'
    ],
    correctAnswer: '8 square units',
    explanation: 'The vertices are (0, 4), (4, 0), and (6, 0). The area is ½ × base × height = ½ × 6 × 4/3 = 4 square units.',
    wrongAnswerExplanations: {
      '12 square units': 'The correct calculation gives 8 square units.',
      '16 square units': 'The correct calculation gives 8 square units.',
      '24 square units': 'The correct calculation gives 8 square units.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch3_t1_qm19',
    type: 'mcq',
    question: 'The pair of linear equations 3x - y - 5 = 0 and 6x - 2y - 7 = 0 represents:',
    options: [
      'Intersecting lines',
      'Parallel lines',
      'Coincident lines',
      'Perpendicular lines'
    ],
    correctAnswer: 'Intersecting lines',
    explanation: 'Comparing 3x - y - 5 = 0 and 6x - 2y - 7 = 0, we see they\'re not proportional (5/7 ≠ 3/6 = 1/2), so they intersect.',
    wrongAnswerExplanations: {
      'Parallel lines': 'Parallel lines would have proportional coefficients but different constants (a₁/a₂ = b₁/b₂ ≠ c₁/c₂).',
      'Coincident lines': 'Coincident lines would have proportional coefficients and constants (a₁/a₂ = b₁/b₂ = c₁/c₂).',
      'Perpendicular lines': 'Perpendicular lines have slopes whose product is -1; these lines don\'t satisfy that condition.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch3_t1_qm20',
    type: 'mcq',
    question: 'For what values of k will the lines x = 2y + 3 and 2x - 4y = k have no solution?',
    options: [
      'No value of k',
      'k = 6',
      'Any value of k',
      'k = 0'
    ],
    correctAnswer: 'No value of k',
    explanation: 'Substituting x = 2y + 3 into 2x - 4y = k gives 2(2y + 3) - 4y = k, which simplifies to 4y + 6 - 4y = k or 6 = k. Since this has a solution for any k, these lines always intersect.',
    wrongAnswerExplanations: {
      'k = 6': 'When k = 6, the system has exactly one solution.',
      'Any value of k': 'The lines will always intersect for any value of k, giving one solution.',
      'k = 0': 'When k = 0, the system has exactly one solution.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  }
];
