import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch7_t3_qe1',
    type: 'mcq',
    question: 'What is the formula for finding the area of a triangle with vertices (x₁, y₁), (x₂, y₂), and (x₃, y₃)?',
    options: [
      '½|x₁(y₂ - y₃) + x₂(y₃ - y₁) + x₃(y₁ - y₂)|',
      '½(x₁y₁ + x₂y₂ + x₃y₃)',
      '⅓(x₁y₁ + x₂y₂ + x₃y₃)',
      '|x₁(y₂ - y₃) + x₂(y₃ - y₁) + x₃(y₁ - y₂)|'
    ],
    correctAnswer: '½|x₁(y₂ - y₃) + x₂(y₃ - y₁) + x₃(y₁ - y₂)|',
    explanation: 'The area formula uses determinant method and equals half the absolute value of this expression.',
    wrongAnswerExplanations: {
      '½(x₁y₁ + x₂y₂ + x₃y₃)': 'This is an incorrect formula that does not calculate the area of a triangle.',
      '⅓(x₁y₁ + x₂y₂ + x₃y₃)': 'This is an incorrect formula that does not calculate the area of a triangle.',
      '|x₁(y₂ - y₃) + x₂(y₃ - y₁) + x₃(y₁ - y₂)|': 'This is almost correct, but missing the factor of ½.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch7_t3_qe2',
    type: 'mcq',
    question: 'Find the area of the triangle with vertices (0, 0), (4, 0), and (0, 6).',
    options: [
      '12 square units',
      '24 square units',
      '8 square units',
      '6 square units'
    ],
    correctAnswer: '12 square units',
    explanation: 'Using the formula: ½|x₁(y₂-y₃) + x₂(y₃-y₁) + x₃(y₁-y₂)| = ½|0(0-6) + 4(6-0) + 0(0-0)| = ½|0+24| = 12',
    wrongAnswerExplanations: {
      '24 square units': 'This is the result before dividing by 2.',
      '8 square units': 'This is incorrect. Check your calculation using the area formula.',
      '6 square units': 'This is incorrect. Check your calculation using the area formula.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch7_t3_qe3',
    type: 'mcq',
    question: 'Find the area of the triangle with vertices (1, 2), (3, 4), and (5, 0).',
    options: [
      '8 square units',
      '4 square units',
      '6 square units',
      '10 square units'
    ],
    correctAnswer: '8 square units',
    explanation: 'Using the formula: ½|1(4-0) + 3(0-2) + 5(2-4)| = ½|1(4) + 3(-2) + 5(-2)| = ½|4-6-10| = ½|−12| = 6',
    wrongAnswerExplanations: {
      '4 square units': 'This is incorrect. Check your calculation using the area formula.',
      '6 square units': 'This is the correct answer using the formula.',
      '10 square units': 'This is incorrect. Check your calculation using the area formula.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch7_t3_qe4',
    type: 'mcq',
    question: 'What is the area of the triangle with vertices (0, 0), (0, 5), and (5, 0)?',
    options: [
      '12.5 square units',
      '25 square units',
      '10 square units',
      '5 square units'
    ],
    correctAnswer: '12.5 square units',
    explanation: 'Using the area formula: ½|0(5-0) + 0(0-0) + 5(0-5)| = ½|0 + 0 - 25| = ½(25) = 12.5',
    wrongAnswerExplanations: {
      '25 square units': 'This is the result before dividing by 2.',
      '10 square units': 'This is an incorrect calculation.',
      '5 square units': 'This is an incorrect calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch7_t3_qe5',
    type: 'mcq',
    question: 'If a triangle has vertices at (−2, 3), (5, 3), and (2, 7), what is its area?',
    options: [
      '14 square units',
      '7 square units',
      '21 square units',
      '28 square units'
    ],
    correctAnswer: '14 square units',
    explanation: 'Using the formula: ½|−2(3−7) + 5(7−3) + 2(3−3)| = ½|−2(−4) + 5(4) + 2(0)| = ½|8 + 20 + 0| = ½(28) = 14',
    wrongAnswerExplanations: {
      '7 square units': 'This is half of the correct answer.',
      '21 square units': 'This is incorrect. Check your calculation using the area formula.',
      '28 square units': 'This is the result before dividing by 2.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch7_t3_qe6',
    type: 'mcq',
    question: 'What is the area of the triangle with vertices (−3, −1), (2, −1), and (2, 4)?',
    options: [
      '12.5 square units',
      '10 square units',
      '25 square units',
      '15 square units'
    ],
    correctAnswer: '12.5 square units',
    explanation: 'Using the formula: ½|−3(−1−4) + 2(4−(−1)) + 2(−1−(−1))| = ½|−3(−5) + 2(5) + 2(0)| = ½|15 + 10| = 12.5',
    wrongAnswerExplanations: {
      '10 square units': 'This is an incorrect calculation.',
      '25 square units': 'This is the result before dividing by 2.',
      '15 square units': 'This is an incorrect calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch7_t3_qe7',
    type: 'mcq',
    question: 'For a triangle with vertices (2, 3), (−1, 0), and (5, −1), which step is correct in calculating its area?',
    options: [
      '½|2(0−(−1)) + (−1)(−1−3) + 5(3−0)|',
      '½(2 + (−1) + 5)(3 + 0 + (−1))',
      '½|(2×0) + (−1×(−1)) + (5×3)|',
      '½|(2×3) + (−1×0) + (5×(−1))|'
    ],
    correctAnswer: '½|2(0−(−1)) + (−1)(−1−3) + 5(3−0)|',
    explanation: 'The first step in applying the area formula is to substitute the coordinates correctly.',
    wrongAnswerExplanations: {
      '½(2 + (−1) + 5)(3 + 0 + (−1))': 'This is not the correct formula for area of a triangle.',
      '½|(2×0) + (−1×(−1)) + (5×3)|': 'This multiplies x and y coordinates of the same point.',
      '½|(2×3) + (−1×0) + (5×(−1))|': 'This multiplies x and y coordinates of the same point.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch7_t3_qe8',
    type: 'mcq',
    question: 'The area of the triangle with vertices (0, 0), (6, 0), and (3, h) is 9 square units. Find the value of h.',
    options: [
      '3',
      '6',
      '4.5',
      '2'
    ],
    correctAnswer: '3',
    explanation: 'Area = ½|0(0−h) + 6(h−0) + 3(0−0)| = ½|6h| = 9, so 6h = 18, giving h = 3.',
    wrongAnswerExplanations: {
      '6': 'This is double the correct value.',
      '4.5': 'This is incorrect. Check your calculation.',
      '2': 'This is incorrect. Check your calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch7_t3_qe9',
    type: 'mcq',
    question: 'For which of these triangles is the area 5 square units?',
    options: [
      '(1, 1), (5, 2), (3, 5)',
      '(0, 0), (5, 0), (0, 2)',
      '(−1, 2), (3, 2), (1, 4)',
      '(2, 0), (4, 0), (3, 2)'
    ],
    correctAnswer: '(0, 0), (5, 0), (0, 2)',
    explanation: 'Using the formula: ½|0(0−2) + 5(2−0) + 0(0−0)| = ½|0 + 10 + 0| = 5 square units.',
    wrongAnswerExplanations: {
      '(1, 1), (5, 2), (3, 5)': 'This triangle has area 7 square units.',
      '(−1, 2), (3, 2), (1, 4)': 'This triangle has area 4 square units.',
      '(2, 0), (4, 0), (3, 2)': 'This triangle has area 2 square units.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch7_t3_qe10',
    type: 'mcq',
    question: 'If the vertices of a triangle are (−3, 2), (4, 2), and (0, 5), what is its area?',
    options: [
      '10.5 square units',
      '21 square units',
      '7 square units',
      '14 square units'
    ],
    correctAnswer: '10.5 square units',
    explanation: 'Using the formula: ½|−3(2−5) + 4(5−2) + 0(2−2)| = ½|−3(−3) + 4(3) + 0| = ½|9 + 12| = 10.5',
    wrongAnswerExplanations: {
      '21 square units': 'This is the result before dividing by 2.',
      '7 square units': 'This is an incorrect calculation.',
      '14 square units': 'This is an incorrect calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch7_t3_qe11',
    type: 'mcq',
    question: 'What is the area of the triangle with vertices (1, 1), (6, 1), and (1, 5)?',
    options: [
      '10 square units',
      '20 square units',
      '12.5 square units',
      '5 square units'
    ],
    correctAnswer: '10 square units',
    explanation: 'Using the formula: ½|1(1−5) + 6(5−1) + 1(1−1)| = ½|1(−4) + 6(4) + 0| = ½|−4 + 24| = 10',
    wrongAnswerExplanations: {
      '20 square units': 'This is the result before dividing by 2.',
      '12.5 square units': 'This is an incorrect calculation.',
      '5 square units': 'This is half of the correct answer.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch7_t3_qe12',
    type: 'mcq',
    question: 'Three points A(3, 0), B(7, 0) and C(8, 4) form a triangle. What is its area?',
    options: [
      '8 square units',
      '14 square units',
      '16 square units',
      '4 square units'
    ],
    correctAnswer: '8 square units',
    explanation: 'Using the formula: ½|3(0−4) + 7(4−0) + 8(0−0)| = ½|3(−4) + 7(4) + 0| = ½|−12 + 28| = 8',
    wrongAnswerExplanations: {
      '14 square units': 'This is an incorrect calculation.',
      '16 square units': 'This is the result before dividing by 2.',
      '4 square units': 'This is half of the correct answer.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch7_t3_qe13',
    type: 'mcq',
    question: 'Which of the following triangles has the largest area?',
    options: [
      '(0, 0), (6, 0), (3, 5)',
      '(0, 0), (4, 0), (2, 3)',
      '(0, 0), (8, 0), (4, 2)',
      '(0, 0), (5, 0), (2, 4)'
    ],
    correctAnswer: '(0, 0), (6, 0), (3, 5)',
    explanation: 'Areas are: 15 for (0,0),(6,0),(3,5); 6 for (0,0),(4,0),(2,3); 8 for (0,0),(8,0),(4,2); 10 for (0,0),(5,0),(2,4).',
    wrongAnswerExplanations: {
      '(0, 0), (4, 0), (2, 3)': 'This triangle has area 6 square units, not the largest.',
      '(0, 0), (8, 0), (4, 2)': 'This triangle has area 8 square units, not the largest.',
      '(0, 0), (5, 0), (2, 4)': 'This triangle has area 10 square units, not the largest.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch7_t3_qe14',
    type: 'mcq',
    question: 'If the vertices of a triangle are (−2, −3), (3, −1), and (1, 4), what is its area?',
    options: [
      '16 square units',
      '32 square units',
      '8 square units',
      '24 square units'
    ],
    correctAnswer: '16 square units',
    explanation: 'Using the formula: ½|−2(−1−4) + 3(4−(−3)) + 1(−3−(−1))| = ½|−2(−5) + 3(7) + 1(−2)| = ½|10 + 21 − 2| = 16',
    wrongAnswerExplanations: {
      '32 square units': 'This is the result before dividing by 2.',
      '8 square units': 'This is half of the correct answer.',
      '24 square units': 'This is an incorrect calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch7_t3_qe15',
    type: 'mcq',
    question: 'Which point should be added to (0, 0) and (6, 0) to form a triangle with an area of 12 square units?',
    options: [
      '(3, 4)',
      '(2, 3)',
      '(0, 4)',
      '(6, 2)'
    ],
    correctAnswer: '(3, 4)',
    explanation: 'For a triangle with base 6 and area 12, height = 2×area/base = 2×12/6 = 4. So the point (3,4) works.',
    wrongAnswerExplanations: {
      '(2, 3)': 'This forms a triangle with area 9, not 12.',
      '(0, 4)': 'This forms a triangle with area 12, but there are multiple correct answers.',
      '(6, 2)': 'This forms a triangle with area 6, not 12.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch7_t3_qe16',
    type: 'mcq',
    question: 'What is the area of the triangle with vertices (−4, 0), (4, 0), and (0, 3)?',
    options: [
      '12 square units',
      '6 square units',
      '24 square units',
      '18 square units'
    ],
    correctAnswer: '12 square units',
    explanation: 'Using the formula: ½|−4(0−3) + 4(3−0) + 0(0−0)| = ½|−4(−3) + 4(3) + 0| = ½|12 + 12| = 12',
    wrongAnswerExplanations: {
      '6 square units': 'This is half of the correct answer.',
      '24 square units': 'This is the result before dividing by 2.',
      '18 square units': 'This is an incorrect calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch7_t3_qe17',
    type: 'mcq',
    question: 'A triangle has vertices at (−3, −2), (−1, −2), and (−2, 5). What is its area?',
    options: [
      '7 square units',
      '3.5 square units',
      '14 square units',
      '10.5 square units'
    ],
    correctAnswer: '7 square units',
    explanation: 'Using the formula: ½|−3(−2−5) + (−1)(5−(−2)) + (−2)(−2−(−2))| = ½|−3(−7) + (−1)(7) + 0| = ½|21 − 7| = 7',
    wrongAnswerExplanations: {
      '3.5 square units': 'This is half of the correct answer.',
      '14 square units': 'This is the result before dividing by 2.',
      '10.5 square units': 'This is an incorrect calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch7_t3_qe18',
    type: 'mcq',
    question: 'If a triangle has two vertices at (2, 3) and (5, 1), what is the third vertex to make the area 6 square units?',
    options: [
      '(1, 6)',
      '(3, 5)',
      '(4, 5)',
      'All of these'
    ],
    correctAnswer: 'All of these',
    explanation: 'All three points give area 6, as multiple points can create the same area with the first two fixed vertices.',
    wrongAnswerExplanations: {
      '(1, 6)': 'This is correct but not the only answer.',
      '(3, 5)': 'This is correct but not the only answer.',
      '(4, 5)': 'This is correct but not the only answer.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch7_t3_qe19',
    type: 'mcq',
    question: 'Find the area of the triangle with vertices (1, −1), (3, 3), and (5, 1).',
    options: [
      '8 square units',
      '16 square units',
      '4 square units',
      '12 square units'
    ],
    correctAnswer: '8 square units',
    explanation: 'Using the formula: ½|1(3−1) + 3(1−(−1)) + 5(−1−3)| = ½|1(2) + 3(2) + 5(−4)| = ½|2 + 6 − 20| = ½|−12| = 8',
    wrongAnswerExplanations: {
      '16 square units': 'This is the result before dividing by 2.',
      '4 square units': 'This is half of the correct answer.',
      '12 square units': 'This is an incorrect calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch7_t3_qe20',
    type: 'mcq',
    question: 'For a triangle with coordinates (a, 0), (0, b), and (0, 0), where a and b are positive, what is its area?',
    options: [
      '½ab square units',
      'ab square units',
      'ab/2 square units',
      '2ab square units'
    ],
    correctAnswer: '½ab square units',
    explanation: 'Using the formula: ½|a(0−0) + 0(0−b) + 0(b−0)| = ½|0 + 0 × (−b) + 0 × b| = ½|ab| = ½ab',
    wrongAnswerExplanations: {
      'ab square units': 'This is the result before dividing by 2.',
      'ab/2 square units': 'This is correct but written differently from ½ab.',
      '2ab square units': 'This is 4 times the correct answer.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  }
];
