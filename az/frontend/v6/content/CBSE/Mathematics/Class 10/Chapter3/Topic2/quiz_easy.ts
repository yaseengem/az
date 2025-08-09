import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch3_t2_qe1',
    type: 'mcq',
    question: 'Which method involves expressing one variable in terms of the other from one equation and substituting it into the second equation?',
    options: ['Substitution method', 'Elimination method', 'Cross-multiplication method', 'Graphical method'],
    correctAnswer: 'Substitution method',
    explanation: 'The substitution method involves expressing one variable in terms of the other from one equation and substituting it into the second equation.',
    wrongAnswerExplanations: {
      'Elimination method': 'Elimination method involves adding or subtracting equations to eliminate one variable.',
      'Cross-multiplication method': 'Cross-multiplication method uses determinants to find the values of variables.',
      'Graphical method': 'Graphical method involves plotting both equations and finding the point of intersection.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch3_t2_qe2',
    type: 'mcq',
    question: 'In the elimination method, what do we do to eliminate a variable?',
    options: [
      'Add or subtract the equations',
      'Multiply and then add or subtract the equations',
      'Divide the equations',
      'Square the equations'
    ],
    correctAnswer: 'Multiply and then add or subtract the equations',
    explanation: 'In elimination, we multiply equations by suitable numbers so that adding or subtracting eliminates one variable.',
    wrongAnswerExplanations: {
      'Add or subtract the equations': 'We may need to multiply first to make coefficients equal in magnitude.',
      'Divide the equations': 'Division is not typically used in the elimination method.',
      'Square the equations': 'Squaring equations changes their properties and doesn\'t help in elimination.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch3_t2_qe3',
    type: 'mcq',
    question: 'Which formula correctly represents the solution for x in a pair of linear equations using cross-multiplication?',
    options: [
      'x = (b₁c₂ - b₂c₁)/(a₁b₂ - a₂b₁)',
      'x = (b₁c₂ - b₂c₁)/(a₂b₁ - a₁b₂)',
      'x = (c₁b₂ - c₂b₁)/(a₁b₂ - a₂b₁)',
      'x = (c₂b₁ - c₁b₂)/(a₁b₂ - a₂b₁)'
    ],
    correctAnswer: 'x = (c₁b₂ - c₂b₁)/(a₁b₂ - a₂b₁)',
    explanation: 'Using Cramer\'s rule, x = Dx/D where Dx is the determinant with coefficients of x replaced by constants.',
    wrongAnswerExplanations: {
      'x = (b₁c₂ - b₂c₁)/(a₁b₂ - a₂b₁)': 'This formula incorrectly interchanges the positions of constants and coefficients.',
      'x = (b₁c₂ - b₂c₁)/(a₂b₁ - a₁b₂)': 'This formula has incorrect signs in the denominator.',
      'x = (c₂b₁ - c₁b₂)/(a₁b₂ - a₂b₁)': 'This formula has the subtraction order reversed in the numerator.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch3_t2_qe4',
    type: 'mcq',
    question: 'To solve the pair of equations 3x + 2y = 13 and 5x - y = 7 using the substitution method, which is the correct first step?',
    options: [
      'Express y in terms of x from the first equation',
      'Express x in terms of y from the first equation',
      'Express y in terms of x from the second equation',
      'Express x in terms of y from the second equation'
    ],
    correctAnswer: 'Express y in terms of x from the second equation',
    explanation: 'From the second equation, we can easily get y = 5x - 7, which is simpler to substitute into the first equation.',
    wrongAnswerExplanations: {
      'Express y in terms of x from the first equation': 'This would give y = (13-3x)/2, which is more complex to substitute.',
      'Express x in terms of y from the first equation': 'This gives x = (13-2y)/3, making substitution more complex.',
      'Express x in terms of y from the second equation': 'This gives x = (7+y)/5, which would lead to more complex calculations.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch3_t2_qe5',
    type: 'mcq',
    question: 'When solving a pair of linear equations using elimination, which scenario is most efficient for directly adding the equations?',
    options: [
      'When the coefficients of one variable are equal',
      'When the coefficients of one variable are opposites',
      'When the coefficients of both variables are equal',
      'When all coefficients and constants are equal'
    ],
    correctAnswer: 'When the coefficients of one variable are opposites',
    explanation: 'When coefficients of one variable are opposites (like 3x and -3x), adding equations directly eliminates that variable.',
    wrongAnswerExplanations: {
      'When the coefficients of one variable are equal': 'Equal coefficients require subtraction, not addition, to eliminate the variable.',
      'When the coefficients of both variables are equal': 'This doesn\'t help elimination as both variables would remain after operations.',
      'When all coefficients and constants are equal': 'This would mean the equations are identical, not yielding a unique solution.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch3_t2_qe6',
    type: 'mcq',
    question: 'For the equations 5x + 3y = 11 and 2x + y = 5, which method might be easiest to apply?',
    options: ['Substitution', 'Elimination', 'Cross-multiplication', 'Graphical'],
    correctAnswer: 'Substitution',
    explanation: 'From the second equation, y = 5 - 2x is easily obtained and can be directly substituted into the first equation.',
    wrongAnswerExplanations: {
      'Elimination': 'Would require multiplying equations by factors to eliminate variables, adding complexity.',
      'Cross-multiplication': 'Requires more calculation steps when simpler methods are available.',
      'Graphical': 'Less precise and more time-consuming than algebraic methods for exact solutions.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch3_t2_qe7',
    type: 'mcq',
    question: 'What is the formula for y in cross-multiplication method, where a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0?',
    options: [
      'y = (a₁c₂ - a₂c₁)/(a₂b₁ - a₁b₂)',
      'y = (a₁c₂ - a₂c₁)/(a₁b₂ - a₂b₁)',
      'y = (a₂c₁ - a₁c₂)/(a₁b₂ - a₂b₁)',
      'y = (a₂c₁ - a₁c₂)/(b₁a₂ - b₂a₁)'
    ],
    correctAnswer: 'y = (a₂c₁ - a₁c₂)/(a₁b₂ - a₂b₁)',
    explanation: 'Using Cramer\'s rule, y = Dy/D where Dy is the determinant with coefficients of y replaced by constants.',
    wrongAnswerExplanations: {
      'y = (a₁c₂ - a₂c₁)/(a₂b₁ - a₁b₂)': 'This formula has incorrect order and signs in both numerator and denominator.',
      'y = (a₁c₂ - a₂c₁)/(a₁b₂ - a₂b₁)': 'This formula has incorrect order in the numerator.',
      'y = (a₂c₁ - a₁c₂)/(b₁a₂ - b₂a₁)': 'This formula has incorrect order in the denominator.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch3_t2_qe8',
    type: 'mcq',
    question: 'What condition must be satisfied for a pair of linear equations to have a unique solution?',
    options: [
      'a₁/a₂ = b₁/b₂ = c₁/c₂',
      'a₁/a₂ = b₁/b₂ ≠ c₁/c₂',
      'a₁/a₂ ≠ b₁/b₂',
      'a₁b₂ - a₂b₁ = 0'
    ],
    correctAnswer: 'a₁/a₂ ≠ b₁/b₂',
    explanation: 'For a unique solution, the ratio of coefficients must differ, meaning lines have different slopes and intersect.',
    wrongAnswerExplanations: {
      'a₁/a₂ = b₁/b₂ = c₁/c₂': 'This indicates infinitely many solutions (coincident lines).',
      'a₁/a₂ = b₁/b₂ ≠ c₁/c₂': 'This indicates no solution (parallel lines).',
      'a₁b₂ - a₂b₁ = 0': 'This indicates the lines are either parallel or coincident, not having a unique solution.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch3_t2_qe9',
    type: 'mcq',
    question: 'When is the elimination method particularly advantageous over substitution?',
    options: [
      'When coefficients can easily be made equal',
      'When one equation has a variable with coefficient 1',
      'When the equations involve fractions',
      'When one variable has very small coefficients'
    ],
    correctAnswer: 'When coefficients can easily be made equal',
    explanation: 'Elimination works best when coefficients can easily be made equal, allowing direct addition or subtraction.',
    wrongAnswerExplanations: {
      'When one equation has a variable with coefficient 1': 'This actually favors the substitution method.',
      'When the equations involve fractions': 'Fractions often make elimination more complex, not advantageous.',
      'When one variable has very small coefficients': 'Small coefficients don\'t specifically advantage elimination over other methods.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch3_t2_qe10',
    type: 'mcq',
    question: 'If a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0 have no solution, what is true about the lines they represent?',
    options: [
      'They are parallel',
      'They are perpendicular',
      'They are coincident',
      'They intersect at exactly one point'
    ],
    correctAnswer: 'They are parallel',
    explanation: 'No solution means parallel lines with the same slope (a₁/a₂ = b₁/b₂) but different y-intercepts (a₁/a₂ ≠ c₁/c₂).',
    wrongAnswerExplanations: {
      'They are perpendicular': 'Perpendicular lines still intersect and have a solution.',
      'They are coincident': 'Coincident lines represent infinitely many solutions, not no solution.',
      'They intersect at exactly one point': 'Intersecting lines have exactly one solution.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch3_t2_qe11',
    type: 'mcq',
    question: 'Using the substitution method, what is the solution to 2x + y = 7 and 3x - 2y = 8?',
    options: [
      'x = 3, y = 1',
      'x = 4, y = -1',
      'x = 3, y = 2',
      'x = 5, y = -3'
    ],
    correctAnswer: 'x = 3, y = 1',
    explanation: 'From first equation: y = 7 - 2x. Substituting into second: 3x - 2(7 - 2x) = 8. Solving: x = 3, y = 1.',
    wrongAnswerExplanations: {
      'x = 4, y = -1': 'These values don\'t satisfy both equations. Check: 2(4) + (-1) = 7 ✓, but 3(4) - 2(-1) = 14 ≠ 8',
      'x = 3, y = 2': 'These values don\'t satisfy both equations. Check: 2(3) + 2 = 8 ≠ 7',
      'x = 5, y = -3': 'These values don\'t satisfy both equations. Check: 2(5) + (-3) = 7 ✓, but 3(5) - 2(-3) = 21 ≠ 8'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch3_t2_qe12',
    type: 'mcq',
    question: 'Using the elimination method, what is the solution to 4x + 3y = 25 and 2x - 3y = 5?',
    options: [
      'x = 5, y = 5/3',
      'x = 4, y = 3',
      'x = 5, y = -3',
      'x = 6, y = 1/3'
    ],
    correctAnswer: 'x = 5, y = 5/3',
    explanation: 'Adding the equations eliminates y: 6x = 30, so x = 5. Substituting back: 4(5) + 3y = 25, so y = 5/3.',
    wrongAnswerExplanations: {
      'x = 4, y = 3': 'These values don\'t satisfy both equations. Check: 4(4) + 3(3) = 25 ✓, but 2(4) - 3(3) = -1 ≠ 5',
      'x = 5, y = -3': 'These values don\'t satisfy both equations. Check: 4(5) + 3(-3) = 11 ≠ 25',
      'x = 6, y = 1/3': 'These values don\'t satisfy both equations. Check: 4(6) + 3(1/3) = 25 ✓, but 2(6) - 3(1/3) = 11 ≠ 5'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch3_t2_qe13',
    type: 'mcq',
    question: 'Using cross-multiplication method, what is the solution to 5x - 3y = 13 and 2x + y = 7?',
    options: [
      'x = 2, y = 3',
      'x = 3, y = 1',
      'x = 2, y = 1',
      'x = 1, y = 5'
    ],
    correctAnswer: 'x = 2, y = 3',
    explanation: 'Using formula: x = (c₁b₂-c₂b₁)/(a₁b₂-a₂b₁) = (13×1-7×(-3))/(5×1-2×(-3)) = 34/11 = 2, y = 3',
    wrongAnswerExplanations: {
      'x = 3, y = 1': 'These values don\'t satisfy both equations. Check: 5(3) - 3(1) = 12 ≠ 13',
      'x = 2, y = 1': 'These values don\'t satisfy both equations. Check: 2(2) + 1 = 5 ≠ 7',
      'x = 1, y = 5': 'These values don\'t satisfy both equations. Check: 5(1) - 3(5) = -10 ≠ 13'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch3_t2_qe14',
    type: 'mcq',
    question: 'In which case is the cross-multiplication method most efficient?',
    options: [
      'When the coefficients have convenient numerical values',
      'When you need both x and y values directly',
      'When one equation has a variable with coefficient 1',
      'When the equations have very different forms'
    ],
    correctAnswer: 'When you need both x and y values directly',
    explanation: 'Cross-multiplication gives both x and y directly using formulas, without needing to substitute values back.',
    wrongAnswerExplanations: {
      'When the coefficients have convenient numerical values': 'Convenient values benefit all methods, not specifically cross-multiplication.',
      'When one equation has a variable with coefficient 1': 'This particularly benefits the substitution method.',
      'When the equations have very different forms': 'The form of equations doesn\'t specifically advantage cross-multiplication.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch3_t2_qe15',
    type: 'mcq',
    question: 'Which of these is NOT a valid algebraic method for solving linear equations in two variables?',
    options: [
      'Integration method',
      'Substitution method',
      'Elimination method',
      'Cross-multiplication method'
    ],
    correctAnswer: 'Integration method',
    explanation: 'Integration is a calculus concept used for finding areas and anti-derivatives, not for solving linear equations.',
    wrongAnswerExplanations: {
      'Substitution method': 'Substitution is a valid algebraic method for solving linear equations.',
      'Elimination method': 'Elimination is a valid algebraic method for solving linear equations.',
      'Cross-multiplication method': 'Cross-multiplication is a valid algebraic method for solving linear equations.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch3_t2_qe16',
    type: 'mcq',
    question: 'What does a₁b₂ - a₂b₁ = 0 indicate about the pair of linear equations a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0?',
    options: [
      'The equations have a unique solution',
      'The equations have no solution or infinitely many solutions',
      'The equations always have exactly two solutions',
      'The equations represent perpendicular lines'
    ],
    correctAnswer: 'The equations have no solution or infinitely many solutions',
    explanation: 'When a₁b₂ - a₂b₁ = 0, the lines are either parallel (no solution) or coincident (infinitely many solutions).',
    wrongAnswerExplanations: {
      'The equations have a unique solution': 'Unique solutions occur when a₁b₂ - a₂b₁ ≠ 0.',
      'The equations always have exactly two solutions': 'Linear equations never have exactly two solutions.',
      'The equations represent perpendicular lines': 'Perpendicular lines aren\'t determined by a₁b₂ - a₂b₁ = 0.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch3_t2_qe17',
    type: 'mcq',
    question: 'What is the first step in solving 3x - 4y = 10 and 2x + 5y = 7 using the elimination method?',
    options: [
      'Multiply the first equation by 2 and the second equation by 3',
      'Multiply the first equation by 5 and the second equation by 4',
      'Solve for x in terms of y in the first equation',
      'Add the two equations directly'
    ],
    correctAnswer: 'Multiply the first equation by 5 and the second equation by 4',
    explanation: 'Multiplying by 5 and 4 makes the y coefficients -20 and 20, which can then be eliminated by addition.',
    wrongAnswerExplanations: {
      'Multiply the first equation by 2 and the second equation by 3': 'This makes coefficients of x equal, not y.',
      'Solve for x in terms of y in the first equation': 'This is the substitution method, not elimination.',
      'Add the two equations directly': 'Direct addition won\'t eliminate either variable with the given coefficients.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch3_t2_qe18',
    type: 'mcq',
    question: 'Which statement about the substitution method is TRUE?',
    options: [
      'It always involves solving for y first',
      'It is most efficient when one variable has coefficient 1',
      'It requires both equations to have the same variables on the left side',
      'It can only be used when both equations are in the form ax + by = c'
    ],
    correctAnswer: 'It is most efficient when one variable has coefficient 1',
    explanation: 'When a variable has coefficient 1, solving for it is simpler, making substitution more efficient.',
    wrongAnswerExplanations: {
      'It always involves solving for y first': 'We can solve for either x or y first, depending on which is more convenient.',
      'It requires both equations to have the same variables on the left side': 'The form of the equation doesn\'t restrict the use of substitution.',
      'It can only be used when both equations are in the form ax + by = c': 'Substitution works with any form of linear equations.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch3_t2_qe19',
    type: 'mcq',
    question: 'If x = (c₁b₂ - c₂b₁)/(a₁b₂ - a₂b₁) and the denominator equals 0, what can you conclude?',
    options: [
      'x = 0',
      'There is no unique solution',
      'x has an infinite value',
      'x must be negative'
    ],
    correctAnswer: 'There is no unique solution',
    explanation: 'When a₁b₂ - a₂b₁ = 0, the lines are either parallel (no solution) or coincident (infinitely many solutions).',
    wrongAnswerExplanations: {
      'x = 0': 'Zero denominator doesn\'t imply x = 0; it indicates the formula can\'t be used to find a unique x.',
      'x has an infinite value': 'Division by zero is undefined, not infinity.',
      'x must be negative': 'The denominator being 0 doesn\'t determine the sign of x.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch3_t2_qe20',
    type: 'mcq',
    question: 'When solving two linear equations, if you get 0 = 0 after elimination or substitution, what does this mean?',
    options: [
      'You made a calculation error',
      'The system has infinite solutions',
      'The system has no solution',
      'The system has exactly one solution at the origin'
    ],
    correctAnswer: 'The system has infinite solutions',
    explanation: '0 = 0 is always true, indicating the equations are dependent and have infinitely many solutions.',
    wrongAnswerExplanations: {
      'You made a calculation error': 'Getting 0 = 0 is a valid mathematical outcome, not necessarily an error.',
      'The system has no solution': 'No solution would yield a false statement like 0 = 5.',
      'The system has exactly one solution at the origin': 'Infinite solutions exist, not just the origin.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  }
];
