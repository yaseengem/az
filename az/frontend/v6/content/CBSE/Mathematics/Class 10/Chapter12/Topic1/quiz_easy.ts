import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch12_t1_qe1',
    type: 'mcq',
    question: 'What is the formula for finding the area of a circle?',
    options: ['πr²', '2πr', '2πr²', 'πr'],
    correctAnswer: 'πr²',
    explanation: 'The area of a circle is calculated using the formula πr², where r is the radius.',
    wrongAnswerExplanations: {
      '2πr': '2πr is the formula for the circumference (perimeter) of a circle, not its area.',
      '2πr²': 'The formula for the area of a circle is πr², not 2πr².',
      'πr': 'πr is not a valid formula for area or perimeter of a circle.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch12_t1_qe2',
    type: 'mcq',
    question: 'What is the formula for finding the circumference of a circle?',
    options: ['2πr', 'πr²', 'πd', '2πd'],
    correctAnswer: '2πr',
    explanation: 'The circumference (perimeter) of a circle is calculated using the formula 2πr, where r is the radius.',
    wrongAnswerExplanations: {
      'πr²': 'πr² is the formula for the area of a circle, not its circumference.',
      'πd': 'The formula for circumference using diameter is πd.',
      '2πd': '2πd is not the correct formula; it would be equal to 4πr.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch12_t1_qe3',
    type: 'mcq',
    question: 'If the radius of a circle is 7 cm, what is its area?',
    options: ['154 cm²', '49π cm²', '14π cm²', '7π cm²'],
    correctAnswer: '49π cm²',
    explanation: 'Area = πr² = π × 7² = 49π cm².',
    wrongAnswerExplanations: {
      '154 cm²': 'This is the approximate value using π ≈ 3.14, but the exact answer is 49π cm².',
      '14π cm²': '14π would be 2πr, which is the circumference, not area.',
      '7π cm²': '7π cm² is not the correct calculation of the area.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch12_t1_qe4',
    type: 'mcq',
    question: 'If the diameter of a circle is 14 cm, what is its circumference?',
    options: ['44 cm', '14π cm', '28π cm', '7π cm'],
    correctAnswer: '14π cm',
    explanation: 'Circumference = πd = π × 14 = 14π cm.',
    wrongAnswerExplanations: {
      '44 cm': 'This is the approximate value using π ≈ 3.14, but the exact answer is 14π cm.',
      '28π cm': '28π cm would be 2πd, which is not the correct formula.',
      '7π cm': '7π cm would be the circumference if the radius is 3.5 cm, not diameter 14 cm.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch12_t1_qe5',
    type: 'mcq',
    question: 'What is the relationship between the radius and diameter of a circle?',
    options: ['Diameter = 2 × Radius', 'Radius = 2 × Diameter', 'Diameter = π × Radius', 'Radius = π × Diameter'],
    correctAnswer: 'Diameter = 2 × Radius',
    explanation: 'The diameter of a circle is always twice its radius.',
    wrongAnswerExplanations: {
      'Radius = 2 × Diameter': 'This is incorrect. Radius is half of the diameter, not twice.',
      'Diameter = π × Radius': 'This is incorrect. The diameter is 2 times the radius, not π times.',
      'Radius = π × Diameter': 'This is incorrect. Radius is diameter/2, not π times diameter.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl10_ch12_t1_qe6',
    type: 'mcq',
    question: 'A circular park has a circumference of 132 m. What is its area?',
    options: ['1386 m²', '5544 m²', '441π m²', '1386π m²'],
    correctAnswer: '1386 m²',
    explanation: 'From circumference, radius = 21 m. Area = π × 21² = 441π ≈ 1386 m².',
    wrongAnswerExplanations: {
      '5544 m²': 'This is incorrect. The correct area is about 1386 m².',
      '441π m²': 'This is the exact formula, but the question asks for the numerical value.',
      '1386π m²': 'This is incorrect. 441π is the exact area, which is approximately 1386 m².'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch12_t1_qe7',
    type: 'mcq',
    question: 'What is the area of a circle with diameter 8 cm?',
    options: ['16π cm²', '4π cm²', '8π cm²', '64π cm²'],
    correctAnswer: '16π cm²',
    explanation: 'Radius = 8/2 = 4 cm. Area = πr² = π × 4² = 16π cm².',
    wrongAnswerExplanations: {
      '4π cm²': 'This would be the area if the radius were 2 cm, not 4 cm.',
      '8π cm²': 'This would be the area if the radius were 2√2 cm, not 4 cm.',
      '64π cm²': 'This would be the area if the radius were 8 cm, not 4 cm.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch12_t1_qe8',
    type: 'mcq',
    question: 'If the circumference of a circle is 22 cm, what is its radius?',
    options: ['3.5 cm', '7 cm', '11 cm', '22/π cm'],
    correctAnswer: '22/π cm',
    explanation: 'Circumference = 2πr ⟹ r = circumference/(2π) = 22/(2π) = 11/π cm.',
    wrongAnswerExplanations: {
      '3.5 cm': 'This is not correct. Using 2πr = 22, radius is 11/π cm.',
      '7 cm': 'This is not correct. Using 2πr = 22, radius is 11/π cm.',
      '11 cm': 'This is not correct. Using 2πr = 22, radius is 11/π cm.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch12_t1_qe9',
    type: 'mcq',
    question: 'A circular field has an area of 154 m². What is its approximate circumference?',
    options: ['22 m', '44 m', '28 m', '14 m'],
    correctAnswer: '44 m',
    explanation: 'Area = πr² ⟹ r = √(154/π) ≈ 7 m. Circumference = 2πr ≈ 44 m.',
    wrongAnswerExplanations: {
      '22 m': 'This would be the circumference if the radius were half of what it actually is.',
      '28 m': 'This is not correct. Circumference = 2πr ≈ 2 × 3.14 × 7 ≈ 44 m.',
      '14 m': 'This is approximately πr, not 2πr.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch12_t1_qe10',
    type: 'mcq',
    question: 'What happens to the area of a circle if its radius is doubled?',
    options: ['Area becomes 4 times', 'Area becomes 2 times', 'Area becomes π times', 'Area becomes 8 times'],
    correctAnswer: 'Area becomes 4 times',
    explanation: 'Area = πr². If r doubles to 2r, area becomes π(2r)² = 4πr², which is 4 times the original.',
    wrongAnswerExplanations: {
      'Area becomes 2 times': 'This is incorrect. The area increases by a factor of radius squared, so 2² = 4.',
      'Area becomes π times': 'This is incorrect. The area changes by a factor of (new radius/old radius)².',
      'Area becomes 8 times': 'This would be true if the radius were tripled, not doubled.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch12_t1_qe11',
    type: 'mcq',
    question: 'What happens to the circumference of a circle if its radius is halved?',
    options: ['Circumference becomes 1/2 times', 'Circumference becomes 1/4 times', 'Circumference becomes π/2 times', 'Circumference becomes 2 times'],
    correctAnswer: 'Circumference becomes 1/2 times',
    explanation: 'Circumference = 2πr. If r becomes r/2, circumference becomes 2π(r/2) = πr, which is 1/2 of 2πr.',
    wrongAnswerExplanations: {
      'Circumference becomes 1/4 times': 'This would be true for area, not circumference.',
      'Circumference becomes π/2 times': 'This is incorrect. Circumference changes proportionally to the radius.',
      'Circumference becomes 2 times': 'This is incorrect. When radius decreases, circumference also decreases.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch12_t1_qe12',
    type: 'mcq',
    question: 'What is the ratio of the circumference to the diameter of any circle?',
    options: ['π', '2π', 'π/2', '2'],
    correctAnswer: 'π',
    explanation: 'The ratio of circumference (2πr) to diameter (2r) is 2πr/2r = π, which is constant for all circles.',
    wrongAnswerExplanations: {
      '2π': 'This is the ratio of circumference to radius, not to diameter.',
      'π/2': 'This is the ratio of area to radius squared, not circumference to diameter.',
      '2': 'This is the ratio of diameter to radius, not circumference to diameter.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch12_t1_qe13',
    type: 'mcq',
    question: 'A circular pond has a radius of 5 m. What is its perimeter?',
    options: ['10π m', '25π m', '10 m', '5π m'],
    correctAnswer: '10π m',
    explanation: 'Perimeter (circumference) = 2πr = 2π × 5 = 10π m.',
    wrongAnswerExplanations: {
      '25π m': 'This is the area (πr²), not the perimeter.',
      '10 m': 'This is the diameter, not the perimeter.',
      '5π m': 'This would be half the correct perimeter.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch12_t1_qe14',
    type: 'mcq',
    question: 'A wire of length 22 cm is bent to form a circle. What is its area?',
    options: ['38.5 cm²', '11 cm²', '38.5π cm²', '11/π cm²'],
    correctAnswer: '38.5 cm²',
    explanation: 'Circumference = 22 cm ⟹ r = 22/(2π) ≈ 3.5 cm. Area = πr² ≈ 3.14 × 3.5² ≈ 38.5 cm².',
    wrongAnswerExplanations: {
      '11 cm²': 'This is not the correct calculation of area.',
      '38.5π cm²': 'The area is approximately 38.5 cm², not 38.5π cm².',
      '11/π cm²': 'This is not the correct calculation of area.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch12_t1_qe15',
    type: 'mcq',
    question: 'Which of the following is true regarding the circumference C and area A of a circle with radius r?',
    options: ['A = (1/2) × r × C', 'A = r × C', 'A = (1/4) × r × C', 'A = 2r × C'],
    correctAnswer: 'A = (1/2) × r × C',
    explanation: 'C = 2πr and A = πr². Substituting, A = πr² = (2πr × r)/2 = (C × r)/2.',
    wrongAnswerExplanations: {
      'A = r × C': 'This is incorrect. The correct relationship is A = (r × C)/2.',
      'A = (1/4) × r × C': 'This is incorrect. The correct relationship is A = (r × C)/2.',
      'A = 2r × C': 'This is incorrect. The correct relationship is A = (r × C)/2.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch12_t1_qe16',
    type: 'mcq',
    question: 'If the perimeter of a circle is equal to the perimeter of a square, and if the side of the square is 11 cm, what is the radius of the circle?',
    options: ['14 cm', '7 cm', '11 cm', '5.5 cm'],
    correctAnswer: '7 cm',
    explanation: 'Square perimeter = 4 × 11 = 44 cm. Circle perimeter = 2πr ⟹ r = 44/(2π) = 7 cm.',
    wrongAnswerExplanations: {
      '14 cm': 'This would be the diameter, not the radius.',
      '11 cm': 'This is the side of the square, not the radius of the circle.',
      '5.5 cm': 'This is half the side of the square, not the radius of the circle.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch12_t1_qe17',
    type: 'mcq',
    question: 'A circular sheet of paper has an area of 100π cm². What will be its area if it is folded in half along a diameter?',
    options: ['50π cm²', '100π cm²', '25π cm²', '200π cm²'],
    correctAnswer: '50π cm²',
    explanation: 'When folded in half, the resulting shape is a semicircle with area = (πr²)/2 = 100π/2 = 50π cm².',
    wrongAnswerExplanations: {
      '100π cm²': 'This is the original area before folding.',
      '25π cm²': 'This would be the area if it were folded to 1/4 of its original area.',
      '200π cm²': 'The area cannot increase by folding.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch12_t1_qe18',
    type: 'mcq',
    question: 'If a circle and a square have the same area, which has the greater perimeter?',
    options: ['The square', 'The circle', 'Both have the same perimeter', 'Cannot be determined'],
    correctAnswer: 'The square',
    explanation: 'For equal areas, the circle has the minimum perimeter among all shapes, so the square\'s perimeter is greater.',
    wrongAnswerExplanations: {
      'The circle': 'This is incorrect. The circle has the minimum perimeter for a given area.',
      'Both have the same perimeter': 'This is false. For equal areas, shapes have different perimeters.',
      'Cannot be determined': 'This can be determined mathematically. The square has a greater perimeter.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch12_t1_qe19',
    type: 'mcq',
    question: 'What is the circumference of a circle with area 81π cm²?',
    options: ['18π cm', '9π cm', '81 cm', '162 cm'],
    correctAnswer: '18π cm',
    explanation: 'Area = πr² ⟹ 81π = πr² ⟹ r = 9. Circumference = 2πr = 2π × 9 = 18π cm.',
    wrongAnswerExplanations: {
      '9π cm': 'This would be the circumference if the radius were 4.5 cm, not 9 cm.',
      '81 cm': 'This is not the correct calculation for the circumference.',
      '162 cm': 'This is approximately 18π × 3.14, but the exact answer is 18π cm.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch12_t1_qe20',
    type: 'mcq',
    question: 'Two concentric circles have radii 3 cm and 5 cm. What is the area of the ring between them?',
    options: ['16π cm²', '8π cm²', '25π cm²', '9π cm²'],
    correctAnswer: '16π cm²',
    explanation: 'Area of ring = π(R² - r²) = π(5² - 3²) = π(25 - 9) = 16π cm².',
    wrongAnswerExplanations: {
      '8π cm²': 'This is half the correct area of the ring.',
      '25π cm²': 'This is the area of the larger circle, not the ring.',
      '9π cm²': 'This is the area of the smaller circle, not the ring.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  }
];
