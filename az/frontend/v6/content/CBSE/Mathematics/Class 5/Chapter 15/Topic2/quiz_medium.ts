import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl5_ch15_t2_qm1',
    type: 'mcq',
    question: 'If all squares are rectangles and all rectangles have equal opposite sides, what can we say about squares?',
    options: ['Squares have equal opposite sides', 'Squares have unequal sides', 'Squares have three sides', 'Squares are circles'],
    correctAnswer: 'Squares have equal opposite sides',
    explanation: 'Squares are rectangles, so they have equal opposite sides.',
    wrongAnswerExplanations: {
      'Squares have unequal sides': 'Squares have all sides equal, so opposite sides are equal.',
      'Squares have three sides': 'Squares have four sides.',
      'Squares are circles': 'Squares and circles are different shapes.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl5_ch15_t2_qm2',
    type: 'mcq',
    question: 'If all mammals give birth to live young and whales are mammals, what do whales do?',
    options: ['Lay eggs', 'Give birth to live young', 'Fly', 'Have scales'],
    correctAnswer: 'Give birth to live young',
    explanation: 'Whales are mammals and give birth to live young.',
    wrongAnswerExplanations: {
      'Lay eggs': 'Mammals give birth to live young.',
      'Fly': 'Whales do not fly.',
      'Have scales': 'Whales do not have scales.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl5_ch15_t2_qm3',
    type: 'mcq',
    question: 'If all prime numbers are greater than 1 and 7 is a prime number, is 7 greater than 1?',
    options: ['Yes', 'No', 'Maybe', 'Cannot say'],
    correctAnswer: 'Yes',
    explanation: 'All prime numbers are greater than 1.',
    wrongAnswerExplanations: {
      'No': 'Prime numbers are always greater than 1.',
      'Maybe': 'Prime numbers are always greater than 1.',
      'Cannot say': 'Prime numbers are always greater than 1.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl5_ch15_t2_qm4',
    type: 'mcq',
    question: 'If all parallelograms have two pairs of parallel sides and a rhombus is a parallelogram, how many pairs of parallel sides does a rhombus have?',
    options: ['1', '2', '3', '4'],
    correctAnswer: '2',
    explanation: 'Rhombus is a parallelogram, so it has 2 pairs of parallel sides.',
    wrongAnswerExplanations: {
      '1': 'Parallelograms have 2 pairs of parallel sides.',
      '3': 'Parallelograms have 2 pairs of parallel sides.',
      '4': 'Parallelograms have 2 pairs of parallel sides.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl5_ch15_t2_qm5',
    type: 'mcq',
    question: 'If all even numbers are divisible by 2 and 36 is an even number, what is 36 divisible by?',
    options: ['2', '3', '5', '7'],
    correctAnswer: '2',
    explanation: 'All even numbers are divisible by 2.',
    wrongAnswerExplanations: {
      '3': '36 is divisible by 3, but the rule is about 2.',
      '5': '36 is not divisible by 5.',
      '7': '36 is not divisible by 7.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl5_ch15_t2_qm6',
    type: 'mcq',
    question: 'If all rectangles have four right angles and a shape has four right angles, is it definitely a rectangle?',
    options: ['Yes', 'No', 'Maybe', 'Cannot say'],
    correctAnswer: 'Maybe',
    explanation: 'Other shapes like squares also have four right angles.',
    wrongAnswerExplanations: {
      'Yes': 'Other shapes like squares also have four right angles.',
      'No': 'Other shapes like squares also have four right angles.',
      'Cannot say': 'Other shapes like squares also have four right angles.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl5_ch15_t2_qm7',
    type: 'mcq',
    question: 'If all birds can fly and ostrich is a bird, can ostrich fly?',
    options: ['Yes', 'No', 'Maybe', 'Cannot say'],
    correctAnswer: 'No',
    explanation: 'Ostrich is an exception; it cannot fly.',
    wrongAnswerExplanations: {
      'Yes': 'Ostrich is a bird but cannot fly.',
      'Maybe': 'Ostrich is a bird but cannot fly.',
      'Cannot say': 'Ostrich is a bird but cannot fly.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl5_ch15_t2_qm8',
    type: 'mcq',
    question: 'If all squares are parallelograms and all parallelograms have opposite sides equal, what can we say about squares?',
    options: ['Squares have equal opposite sides', 'Squares have unequal sides', 'Squares have three sides', 'Squares are triangles'],
    correctAnswer: 'Squares have equal opposite sides',
    explanation: 'Squares are parallelograms, so opposite sides are equal.',
    wrongAnswerExplanations: {
      'Squares have unequal sides': 'Squares have all sides equal.',
      'Squares have three sides': 'Squares have four sides.',
      'Squares are triangles': 'Squares and triangles are different.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl5_ch15_t2_qm9',
    type: 'mcq',
    question: 'If all rectangles are quadrilaterals and all quadrilaterals have four sides, how many sides does a rectangle have?',
    options: ['2', '3', '4', '5'],
    correctAnswer: '4',
    explanation: 'Rectangles are quadrilaterals, so they have four sides.',
    wrongAnswerExplanations: {
      '2': 'Rectangles have four sides.',
      '3': 'Rectangles have four sides.',
      '5': 'Rectangles have four sides.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl5_ch15_t2_qm10',
    type: 'mcq',
    question: 'If all multiples of 10 end with 0, does 70 end with 0?',
    options: ['Yes', 'No', 'Maybe', 'Cannot say'],
    correctAnswer: 'Yes',
    explanation: '70 ends with 0.',
    wrongAnswerExplanations: {
      'No': '70 ends with 0.',
      'Maybe': '70 ends with 0.',
      'Cannot say': '70 ends with 0.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  // ...10 more questions to reach 20...
  {
    id: 'cl5_ch15_t2_qm11',
    type: 'mcq',
    question: 'If all polygons have straight sides and a hexagon is a polygon, what kind of sides does a hexagon have?',
    options: ['Curved', 'Straight', 'Wavy', 'None'],
    correctAnswer: 'Straight',
    explanation: 'Polygons have straight sides.',
    wrongAnswerExplanations: {
      'Curved': 'Polygons have straight sides.',
      'Wavy': 'Polygons have straight sides.',
      'None': 'Polygons have straight sides.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl5_ch15_t2_qm12',
    type: 'mcq',
    question: 'If all mammals are warm-blooded and a whale is a mammal, what is a whale?',
    options: ['Cold-blooded', 'Warm-blooded', 'Neither', 'Cannot say'],
    correctAnswer: 'Warm-blooded',
    explanation: 'Whales are mammals and are warm-blooded.',
    wrongAnswerExplanations: {
      'Cold-blooded': 'Mammals are warm-blooded.',
      'Neither': 'Mammals are warm-blooded.',
      'Cannot say': 'Mammals are warm-blooded.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl5_ch15_t2_qm13',
    type: 'mcq',
    question: 'If all squares have equal sides and a shape has all sides equal, is it definitely a square?',
    options: ['Yes', 'No', 'Maybe', 'Cannot say'],
    correctAnswer: 'Maybe',
    explanation: 'Other shapes like rhombus also have equal sides.',
    wrongAnswerExplanations: {
      'Yes': 'Other shapes like rhombus also have equal sides.',
      'No': 'Other shapes like rhombus also have equal sides.',
      'Cannot say': 'Other shapes like rhombus also have equal sides.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl5_ch15_t2_qm14',
    type: 'mcq',
    question: 'If all rectangles have two pairs of equal sides and a square is a rectangle, how many pairs of equal sides does a square have?',
    options: ['1', '2', '3', '4'],
    correctAnswer: '2',
    explanation: 'Squares have two pairs of equal sides.',
    wrongAnswerExplanations: {
      '1': 'Squares have two pairs of equal sides.',
      '3': 'Squares have two pairs of equal sides.',
      '4': 'Squares have two pairs of equal sides.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl5_ch15_t2_qm15',
    type: 'mcq',
    question: 'If all birds lay eggs and a hen is a bird, what does a hen do?',
    options: ['Lays eggs', 'Gives milk', 'Barks', 'Roars'],
    correctAnswer: 'Lays eggs',
    explanation: 'All birds lay eggs.',
    wrongAnswerExplanations: {
      'Gives milk': 'Birds lay eggs, mammals give milk.',
      'Barks': 'Birds lay eggs, dogs bark.',
      'Roars': 'Birds lay eggs, lions roar.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl5_ch15_t2_qm16',
    type: 'mcq',
    question: 'If all triangles have three angles and a shape has three angles, is it definitely a triangle?',
    options: ['Yes', 'No', 'Maybe', 'Cannot say'],
    correctAnswer: 'Maybe',
    explanation: 'Other shapes may also have three angles.',
    wrongAnswerExplanations: {
      'Yes': 'Other shapes may also have three angles.',
      'No': 'Other shapes may also have three angles.',
      'Cannot say': 'Other shapes may also have three angles.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl5_ch15_t2_qm17',
    type: 'mcq',
    question: 'If all rectangles have four sides and a shape has four sides, is it definitely a rectangle?',
    options: ['Yes', 'No', 'Maybe', 'Cannot say'],
    correctAnswer: 'Maybe',
    explanation: 'Other shapes like squares also have four sides.',
    wrongAnswerExplanations: {
      'Yes': 'Other shapes like squares also have four sides.',
      'No': 'Other shapes like squares also have four sides.',
      'Cannot say': 'Other shapes like squares also have four sides.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl5_ch15_t2_qm18',
    type: 'mcq',
    question: 'If all parallelograms have opposite sides parallel and a rectangle is a parallelogram, what can we say about a rectangle?',
    options: ['Opposite sides are parallel', 'All sides are parallel', 'No sides are parallel', 'Only one pair is parallel'],
    correctAnswer: 'Opposite sides are parallel',
    explanation: 'Rectangles are parallelograms, so opposite sides are parallel.',
    wrongAnswerExplanations: {
      'All sides are parallel': 'Only opposite sides are parallel.',
      'No sides are parallel': 'Opposite sides are parallel.',
      'Only one pair is parallel': 'Both pairs are parallel.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl5_ch15_t2_qm19',
    type: 'mcq',
    question: 'If all squares are rectangles and all rectangles have four right angles, how many right angles does a square have?',
    options: ['2', '3', '4', '5'],
    correctAnswer: '4',
    explanation: 'Squares have four right angles.',
    wrongAnswerExplanations: {
      '2': 'Squares have four right angles.',
      '3': 'Squares have four right angles.',
      '5': 'Squares have four right angles.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl5_ch15_t2_qm20',
    type: 'mcq',
    question: 'If all rectangles have equal opposite sides and a square is a rectangle, what can we say about a square?',
    options: ['Has equal opposite sides', 'Has unequal sides', 'Has three sides', 'Is a triangle'],
    correctAnswer: 'Has equal opposite sides',
    explanation: 'Squares have equal opposite sides.',
    wrongAnswerExplanations: {
      'Has unequal sides': 'Squares have all sides equal.',
      'Has three sides': 'Squares have four sides.',
      'Is a triangle': 'Squares and triangles are different.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  }
];
