import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch3_t1_qe1',
    type: 'mcq',
    question: 'What does a point of intersection of two lines in a graph represent?',
    options: [
      'A solution that satisfies both equations',
      'No solution exists',
      'Infinite solutions exist',
      'The equations are parallel'
    ],
    correctAnswer: 'A solution that satisfies both equations',
    explanation: 'The point where two lines intersect represents the values of x and y that satisfy both equations simultaneously.',
    wrongAnswerExplanations: {
      'No solution exists': 'If no solution exists, the lines would be parallel and never intersect.',
      'Infinite solutions exist': 'Infinite solutions occur when the lines are coincident, not at intersection points.',
      'The equations are parallel': 'Parallel equations have no intersection points and no common solution.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch3_t1_qe2',
    type: 'mcq',
    question: 'If two straight lines have no point of intersection, what can we conclude about the pair of linear equations they represent?',
    options: [
      'The equations have no solution',
      'The equations have exactly one solution',
      'The equations have infinite solutions',
      'The equations are perpendicular'
    ],
    correctAnswer: 'The equations have no solution',
    explanation: 'Non-intersecting lines are parallel, representing a pair of linear equations with no solution.',
    wrongAnswerExplanations: {
      'The equations have exactly one solution': 'Exactly one solution occurs when lines intersect at exactly one point.',
      'The equations have infinite solutions': 'Infinite solutions occur when the lines coincide completely.',
      'The equations are perpendicular': 'Perpendicular lines still intersect at one point, yielding one solution.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch3_t1_qe3',
    type: 'mcq',
    question: 'When two lines coincide, what does it mean for the pair of linear equations?',
    options: [
      'They have infinitely many common solutions',
      'They have exactly one solution',
      'They have no solution',
      'They have exactly two solutions'
    ],
    correctAnswer: 'They have infinitely many common solutions',
    explanation: 'Coincident lines represent the same equation, meaning every point on the line satisfies both equations.',
    wrongAnswerExplanations: {
      'They have exactly one solution': 'One solution happens when lines intersect at exactly one point, not when they coincide.',
      'They have no solution': 'No solution occurs when lines are parallel but not coincident.',
      'They have exactly two solutions': 'Linear equations can never have exactly two solutions.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch3_t1_qe4',
    type: 'mcq',
    question: 'When plotting the graph for x + y = 5, which points do we need to plot?',
    options: [
      'Any two points satisfying the equation',
      'At least three points satisfying the equation',
      'Points (0, 5) and (5, 0)',
      'All points where x = 0 or y = 0'
    ],
    correctAnswer: 'Any two points satisfying the equation',
    explanation: 'A straight line is uniquely determined by any two distinct points that satisfy the equation.',
    wrongAnswerExplanations: {
      'At least three points satisfying the equation': 'Only two points are necessary to determine a straight line.',
      'Points (0, 5) and (5, 0)': 'While these points work for this equation, they aren\'t the only ones that can be used.',
      'All points where x = 0 or y = 0': 'Only the points where the line crosses the axes satisfy this condition.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch3_t1_qe5',
    type: 'mcq',
    question: 'What are the coordinates of the point where the line 2x - 3y = 6 intersects the y-axis?',
    options: [
      '(0, -2)',
      '(0, 2)',
      '(3, 0)',
      '(-3, 0)'
    ],
    correctAnswer: '(0, -2)',
    explanation: 'When x = 0 (y-axis), we get -3y = 6, so y = -2, giving the point (0, -2).',
    wrongAnswerExplanations: {
      '(0, 2)': 'Substituting x = 0 gives -3y = 6, which yields y = -2, not 2.',
      '(3, 0)': 'This is the x-intercept, not the y-intercept.',
      '(-3, 0)': 'This is not correct. The x-intercept is (3, 0), not (-3, 0).'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch3_t1_qe6',
    type: 'mcq',
    question: 'If the lines representing two equations are parallel, what can you say about the coefficients of the variables?',
    options: [
      'They are proportional',
      'They are equal',
      'Their product is zero',
      'Their sum is zero'
    ],
    correctAnswer: 'They are proportional',
    explanation: 'For parallel lines, the coefficients of x and y are proportional, meaning a₁/a₂ = b₁/b₂ ≠ c₁/c₂.',
    wrongAnswerExplanations: {
      'They are equal': 'Equal coefficients would make the equations identical, not parallel.',
      'Their product is zero': 'This isn\'t related to parallel lines.',
      'Their sum is zero': 'The sum of coefficients has no relation to whether lines are parallel.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch3_t1_qe7',
    type: 'mcq',
    question: 'The graphical solution of the system of equations 2x + y = 5 and 3x - 2y = 4 is:',
    options: [
      '(2, 1)',
      '(1, 3)',
      '(3, -1)',
      '(-1, 7)'
    ],
    correctAnswer: '(2, 1)',
    explanation: 'Plotting both lines and finding their intersection point gives (2, 1), which satisfies both equations.',
    wrongAnswerExplanations: {
      '(1, 3)': 'This point doesn\'t satisfy both equations. Check by substitution.',
      '(3, -1)': 'This point doesn\'t satisfy both equations. Check by substitution.',
      '(-1, 7)': 'This point doesn\'t satisfy both equations. Check by substitution.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch3_t1_qe8',
    type: 'mcq',
    question: 'How many points are needed to graph a straight line?',
    options: [
      'At least 2 points',
      'At least 3 points',
      'At least 4 points',
      'Only 1 point'
    ],
    correctAnswer: 'At least 2 points',
    explanation: 'A straight line is uniquely determined by any two distinct points on the line.',
    wrongAnswerExplanations: {
      'At least 3 points': 'Two points are sufficient to draw a unique straight line.',
      'At least 4 points': 'Two points are sufficient to draw a unique straight line.',
      'Only 1 point': 'One point is insufficient to determine a unique straight line.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch3_t1_qe9',
    type: 'mcq',
    question: 'What is the slope of the line represented by 2x - 3y = 6?',
    options: [
      '⅔',
      '−⅔',
      '3/2',
      '−3/2'
    ],
    correctAnswer: '⅔',
    explanation: 'Rewrite as y = (2x - 6)/3 = ⅔x - 2. The coefficient of x, ⅔, is the slope.',
    wrongAnswerExplanations: {
      '−⅔': 'When solving for y, the coefficient of x becomes ⅔, not −⅔.',
      '3/2': 'When solving for y, the coefficient of x is ⅔, not 3/2.',
      '−3/2': 'When solving for y, the coefficient of x is ⅔, not −3/2.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch3_t1_qe10',
    type: 'mcq',
    question: 'The point of intersection of the lines x - y = 1 and 2x + y = 8 is:',
    options: [
      '(3, 2)',
      '(2, 3)',
      '(3, -2)',
      '(2, -1)'
    ],
    correctAnswer: '(3, 2)',
    explanation: 'Solving the system: from second equation, y = 8 - 2x. Substitute into first: x - (8 - 2x) = 1, giving x = 3, y = 2.',
    wrongAnswerExplanations: {
      '(2, 3)': 'Verify by substitution: 2-3=-1≠1 and 2(2)+3=7≠8.',
      '(3, -2)': 'Verify by substitution: 3-(-2)=5≠1 and 2(3)+(-2)=4≠8.',
      '(2, -1)': 'Verify by substitution: 2-(-1)=3≠1 and 2(2)+(-1)=3≠8.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch3_t1_qe11',
    type: 'mcq',
    question: 'Which of the following pairs of linear equations has no solution?',
    options: [
      '2x + 3y = 5 and 4x + 6y = 12',
      'x + y = 5 and x - y = 3',
      '3x - 2y = 7 and 9x - 6y = 14',
      'x + 2y = 5 and 2x + 4y = 10'
    ],
    correctAnswer: '3x - 2y = 7 and 9x - 6y = 14',
    explanation: 'These lines are parallel as coefficients are proportional (3/9 = -2/-6 = 1/3) but constants aren\'t (7/14 = 1/2).',
    wrongAnswerExplanations: {
      '2x + 3y = 5 and 4x + 6y = 12': 'These are proportional equations with proportional constants (5/12 = 5/12), giving infinite solutions.',
      'x + y = 5 and x - y = 3': 'These lines intersect at (4, 1), giving one solution.',
      'x + 2y = 5 and 2x + 4y = 10': 'These are proportional equations with proportional constants (5/10 = 1/2), giving infinite solutions.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch3_t1_qe12',
    type: 'mcq',
    question: 'For the system of equations x - y = 2 and 3x - 3y = 6, the number of solutions is:',
    options: [
      'Infinitely many',
      'Exactly one',
      'Exactly two',
      'None'
    ],
    correctAnswer: 'Infinitely many',
    explanation: 'The second equation is 3 times the first (3x - 3y = 3(x - y) = 3(2) = 6), so they represent the same line.',
    wrongAnswerExplanations: {
      'Exactly one': 'The equations represent the same line, giving infinitely many solutions.',
      'Exactly two': 'A system of linear equations cannot have exactly two solutions.',
      'None': 'The equations represent the same line, not parallel lines, so solutions exist.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch3_t1_qe13',
    type: 'mcq',
    question: 'Which of the following represents the point where the line ax + by + c = 0 intersects the y-axis?',
    options: [
      '(0, -c/b)',
      '(-c/a, 0)',
      '(a/c, 0)',
      '(0, b/c)'
    ],
    correctAnswer: '(0, -c/b)',
    explanation: 'At y-axis, x = 0. Substituting in ax + by + c = 0 gives by + c = 0, so y = -c/b.',
    wrongAnswerExplanations: {
      '(-c/a, 0)': 'This represents the x-intercept, not the y-intercept.',
      '(a/c, 0)': 'The x-intercept is (-c/a, 0), not (a/c, 0).',
      '(0, b/c)': 'The y-intercept is (0, -c/b), not (0, b/c).'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch3_t1_qe14',
    type: 'mcq',
    question: 'Which of these steps is NOT required in the graphical method of solving linear equations?',
    options: [
      'Finding the determinant of coefficients',
      'Plotting at least two points for each equation',
      'Drawing lines through the plotted points',
      'Identifying the coordinates of the point of intersection'
    ],
    correctAnswer: 'Finding the determinant of coefficients',
    explanation: 'The determinant is used in algebraic methods, not in the graphical method of solution.',
    wrongAnswerExplanations: {
      'Plotting at least two points for each equation': 'This is essential to draw each line accurately.',
      'Drawing lines through the plotted points': 'This is a necessary step to represent each equation graphically.',
      'Identifying the coordinates of the point of intersection': 'This gives the solution to the system of equations.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch3_t1_qe15',
    type: 'mcq',
    question: 'In the equation 2x + 3y = 12, when x = 3, what is the value of y?',
    options: [
      '2',
      '3',
      '4',
      '6'
    ],
    correctAnswer: '2',
    explanation: 'Substituting x = 3: 2(3) + 3y = 12, so 6 + 3y = 12, giving 3y = 6, thus y = 2.',
    wrongAnswerExplanations: {
      '3': 'When x = 3, we get 2(3) + 3y = 12, solving gives y = 2, not 3.',
      '4': 'When x = 3, we get 2(3) + 3y = 12, solving gives y = 2, not 4.',
      '6': 'When x = 3, we get 2(3) + 3y = 12, solving gives y = 2, not 6.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch3_t1_qe16',
    type: 'mcq',
    question: 'What is the x-intercept of the line represented by 3x - 4y = 12?',
    options: [
      '(4, 0)',
      '(0, -3)',
      '(0, -4)',
      '(-4, 0)'
    ],
    correctAnswer: '(4, 0)',
    explanation: 'For x-intercept, y = 0. Substituting in 3x - 4(0) = 12 gives 3x = 12, so x = 4.',
    wrongAnswerExplanations: {
      '(0, -3)': 'This is not the x-intercept as the x-coordinate is not 0.',
      '(0, -4)': 'This is not the x-intercept as the x-coordinate is not 0.',
      '(-4, 0)': 'Substituting y = 0 in 3x - 4y = 12 gives x = 4, not -4.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch3_t1_qe17',
    type: 'mcq',
    question: 'Which point lies on the line 2x + 5y = 20?',
    options: [
      '(5, 2)',
      '(10, 0)',
      '(0, 5)',
      '(2, 5)'
    ],
    correctAnswer: '(5, 2)',
    explanation: 'For point (5, 2): 2(5) + 5(2) = 10 + 10 = 20, which satisfies the equation.',
    wrongAnswerExplanations: {
      '(10, 0)': 'For point (10, 0): 2(10) + 5(0) = 20 + 0 = 20, so this point also lies on the line.',
      '(0, 5)': 'For point (0, 5): 2(0) + 5(5) = 0 + 25 = 25 ≠ 20.',
      '(2, 5)': 'For point (2, 5): 2(2) + 5(5) = 4 + 25 = 29 ≠ 20.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch3_t1_qe18',
    type: 'mcq',
    question: 'When will the lines ax + by + c = 0 and dx + ey + f = 0 have infinitely many solutions?',
    options: [
      'a/d = b/e = c/f',
      'a/d = b/e ≠ c/f',
      'a/d ≠ b/e = c/f',
      'a/d ≠ b/e ≠ c/f'
    ],
    correctAnswer: 'a/d = b/e = c/f',
    explanation: 'Infinitely many solutions occur when lines coincide, requiring all pairs of coefficients to be proportional.',
    wrongAnswerExplanations: {
      'a/d = b/e ≠ c/f': 'This condition creates parallel lines with no solutions.',
      'a/d ≠ b/e = c/f': 'This creates non-coincident lines with one solution.',
      'a/d ≠ b/e ≠ c/f': 'This typically creates non-coincident lines with one solution.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch3_t1_qe19',
    type: 'mcq',
    question: 'The most efficient way to check if a point is the solution to a pair of linear equations is to:',
    options: [
      'Substitute the point into both equations',
      'Plot the point on the graph',
      'Use the distance formula',
      'Calculate the slope of each line'
    ],
    correctAnswer: 'Substitute the point into both equations',
    explanation: 'Substituting the coordinates into both equations verifies if they satisfy both equations simultaneously.',
    wrongAnswerExplanations: {
      'Plot the point on the graph': 'Plotting is less precise than direct substitution.',
      'Use the distance formula': 'Distance formula doesn\'t verify if a point satisfies an equation.',
      'Calculate the slope of each line': 'Slope calculation doesn\'t determine if a point lies on both lines.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch3_t1_qe20',
    type: 'mcq',
    question: 'If two lines intersect at right angles, what is the relationship between their slopes m₁ and m₂?',
    options: [
      'm₁ × m₂ = -1',
      'm₁ × m₂ = 1',
      'm₁ + m₂ = 0',
      'm₁ = m₂'
    ],
    correctAnswer: 'm₁ × m₂ = -1',
    explanation: 'Perpendicular lines have slopes whose product is -1, making them negative reciprocals of each other.',
    wrongAnswerExplanations: {
      'm₁ × m₂ = 1': 'This would make the lines have the same direction, not perpendicular.',
      'm₁ + m₂ = 0': 'This means m₁ = -m₂, which applies to lines with opposite slopes, not perpendicular lines.',
      'm₁ = m₂': 'Equal slopes mean the lines are parallel, not perpendicular.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  }
];
