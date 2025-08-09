import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl5_ch15_t2_qe1',
    type: 'mcq',
    question: 'If all cats are animals and Tom is a cat, what is Tom?',
    options: ['A dog', 'A bird', 'An animal', 'A fish'],
    correctAnswer: 'An animal',
    explanation: 'Tom is a cat, and all cats are animals.',
    wrongAnswerExplanations: {
      'A dog': 'Tom is a cat, not a dog.',
      'A bird': 'Tom is a cat, not a bird.',
      'A fish': 'Tom is a cat, not a fish.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl5_ch15_t2_qe2',
    type: 'mcq',
    question: 'All squares have four sides. A shape has four sides. Is it definitely a square?',
    options: ['Yes', 'No', 'Maybe', 'Cannot say'],
    correctAnswer: 'No',
    explanation: 'Other shapes like rectangles also have four sides.',
    wrongAnswerExplanations: {
      'Yes': 'Not all four-sided shapes are squares.',
      'Maybe': 'We need more information.',
      'Cannot say': 'We need more information.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl5_ch15_t2_qe3',
    type: 'mcq',
    question: 'If all birds have feathers and a penguin is a bird, what does a penguin have?',
    options: ['Fur', 'Feathers', 'Scales', 'Shell'],
    correctAnswer: 'Feathers',
    explanation: 'All birds, including penguins, have feathers.',
    wrongAnswerExplanations: {
      'Fur': 'Birds have feathers, not fur.',
      'Scales': 'Birds have feathers, not scales.',
      'Shell': 'Birds do not have shells.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl5_ch15_t2_qe4',
    type: 'mcq',
    question: 'If all even numbers are divisible by 2, is 18 divisible by 2?',
    options: ['Yes', 'No', 'Only sometimes', 'Cannot say'],
    correctAnswer: 'Yes',
    explanation: '18 is even, so it is divisible by 2.',
    wrongAnswerExplanations: {
      'No': 'All even numbers are divisible by 2.',
      'Only sometimes': 'All even numbers are always divisible by 2.',
      'Cannot say': 'We know 18 is even.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl5_ch15_t2_qe5',
    type: 'mcq',
    question: 'If all rectangles have four sides and this shape is a rectangle, how many sides does it have?',
    options: ['3', '4', '5', '6'],
    correctAnswer: '4',
    explanation: 'All rectangles have four sides.',
    wrongAnswerExplanations: {
      '3': 'Rectangles have four sides.',
      '5': 'Rectangles have four sides.',
      '6': 'Rectangles have four sides.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl5_ch15_t2_qe6',
    type: 'mcq',
    question: 'If all triangles have three sides, can a shape with four sides be a triangle?',
    options: ['Yes', 'No', 'Maybe', 'Cannot say'],
    correctAnswer: 'No',
    explanation: 'Triangles always have three sides.',
    wrongAnswerExplanations: {
      'Yes': 'Triangles have three sides, not four.',
      'Maybe': 'Triangles have three sides, not four.',
      'Cannot say': 'Triangles have three sides, not four.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl5_ch15_t2_qe7',
    type: 'mcq',
    question: 'If all apples are fruits and all fruits have seeds, what do apples have?',
    options: ['Leaves', 'Seeds', 'Roots', 'Flowers'],
    correctAnswer: 'Seeds',
    explanation: 'All fruits, including apples, have seeds.',
    wrongAnswerExplanations: {
      'Leaves': 'Fruits have seeds, not leaves.',
      'Roots': 'Fruits have seeds, not roots.',
      'Flowers': 'Fruits have seeds, not flowers.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl5_ch15_t2_qe8',
    type: 'mcq',
    question: 'If all squares are rectangles, is every rectangle a square?',
    options: ['Yes', 'No', 'Maybe', 'Cannot say'],
    correctAnswer: 'No',
    explanation: 'Not all rectangles are squares.',
    wrongAnswerExplanations: {
      'Yes': 'Only all squares are rectangles, not the other way.',
      'Maybe': 'Not all rectangles are squares.',
      'Cannot say': 'Not all rectangles are squares.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl5_ch15_t2_qe9',
    type: 'mcq',
    question: 'If all dogs bark and Max is a dog, what does Max do?',
    options: ['Meows', 'Barks', 'Roars', 'Chirps'],
    correctAnswer: 'Barks',
    explanation: 'All dogs bark, so Max barks.',
    wrongAnswerExplanations: {
      'Meows': 'Dogs bark, cats meow.',
      'Roars': 'Dogs bark, lions roar.',
      'Chirps': 'Dogs bark, birds chirp.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl5_ch15_t2_qe10',
    type: 'mcq',
    question: 'If all multiples of 5 end with 0 or 5, does 35 end with 0 or 5?',
    options: ['Yes', 'No', 'Maybe', 'Cannot say'],
    correctAnswer: 'Yes',
    explanation: '35 ends with 5.',
    wrongAnswerExplanations: {
      'No': '35 ends with 5.',
      'Maybe': '35 ends with 5.',
      'Cannot say': '35 ends with 5.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  // ...10 more questions to reach 20...
  {
    id: 'cl5_ch15_t2_qe11',
    type: 'mcq',
    question: 'If all cars have wheels and a bus is a car, what does a bus have?',
    options: ['Wings', 'Wheels', 'Fins', 'Horns'],
    correctAnswer: 'Wheels',
    explanation: 'All cars, including buses, have wheels.',
    wrongAnswerExplanations: {
      'Wings': 'Cars have wheels, not wings.',
      'Fins': 'Cars have wheels, not fins.',
      'Horns': 'Cars have wheels, not horns.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl5_ch15_t2_qe12',
    type: 'mcq',
    question: 'If all rectangles have right angles, does a square have right angles?',
    options: ['Yes', 'No', 'Maybe', 'Cannot say'],
    correctAnswer: 'Yes',
    explanation: 'Squares are rectangles and have right angles.',
    wrongAnswerExplanations: {
      'No': 'Squares have right angles.',
      'Maybe': 'Squares have right angles.',
      'Cannot say': 'Squares have right angles.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl5_ch15_t2_qe13',
    type: 'mcq',
    question: 'If all triangles have three sides, how many sides does a triangle have?',
    options: ['2', '3', '4', '5'],
    correctAnswer: '3',
    explanation: 'Triangles have three sides.',
    wrongAnswerExplanations: {
      '2': 'Triangles have three sides.',
      '4': 'Triangles have three sides.',
      '5': 'Triangles have three sides.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl5_ch15_t2_qe14',
    type: 'mcq',
    question: 'If all fish can swim and Goldie is a fish, what can Goldie do?',
    options: ['Fly', 'Swim', 'Run', 'Jump'],
    correctAnswer: 'Swim',
    explanation: 'All fish can swim.',
    wrongAnswerExplanations: {
      'Fly': 'Fish swim, they do not fly.',
      'Run': 'Fish swim, they do not run.',
      'Jump': 'Fish swim, they do not jump.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl5_ch15_t2_qe15',
    type: 'mcq',
    question: 'If all mammals have hair and a dog is a mammal, what does a dog have?',
    options: ['Scales', 'Hair', 'Feathers', 'Shell'],
    correctAnswer: 'Hair',
    explanation: 'All mammals have hair.',
    wrongAnswerExplanations: {
      'Scales': 'Mammals have hair, not scales.',
      'Feathers': 'Mammals have hair, not feathers.',
      'Shell': 'Mammals have hair, not shells.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl5_ch15_t2_qe16',
    type: 'mcq',
    question: 'If all rectangles have equal opposite sides, does a square have equal opposite sides?',
    options: ['Yes', 'No', 'Maybe', 'Cannot say'],
    correctAnswer: 'Yes',
    explanation: 'Squares are rectangles and have equal opposite sides.',
    wrongAnswerExplanations: {
      'No': 'Squares have equal opposite sides.',
      'Maybe': 'Squares have equal opposite sides.',
      'Cannot say': 'Squares have equal opposite sides.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl5_ch15_t2_qe17',
    type: 'mcq',
    question: 'If all birds lay eggs and a sparrow is a bird, what does a sparrow do?',
    options: ['Lays eggs', 'Gives milk', 'Barks', 'Roars'],
    correctAnswer: 'Lays eggs',
    explanation: 'All birds lay eggs.',
    wrongAnswerExplanations: {
      'Gives milk': 'Birds lay eggs, mammals give milk.',
      'Barks': 'Birds lay eggs, dogs bark.',
      'Roars': 'Birds lay eggs, lions roar.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl5_ch15_t2_qe18',
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
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl5_ch15_t2_qe19',
    type: 'mcq',
    question: 'If all rectangles have two pairs of equal sides, does a square have two pairs of equal sides?',
    options: ['Yes', 'No', 'Maybe', 'Cannot say'],
    correctAnswer: 'Yes',
    explanation: 'Squares have two pairs of equal sides.',
    wrongAnswerExplanations: {
      'No': 'Squares have two pairs of equal sides.',
      'Maybe': 'Squares have two pairs of equal sides.',
      'Cannot say': 'Squares have two pairs of equal sides.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl5_ch15_t2_qe20',
    type: 'mcq',
    question: 'If all triangles have three angles, how many angles does a triangle have?',
    options: ['2', '3', '4', '5'],
    correctAnswer: '3',
    explanation: 'Triangles have three angles.',
    wrongAnswerExplanations: {
      '2': 'Triangles have three angles.',
      '4': 'Triangles have three angles.',
      '5': 'Triangles have three angles.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  }
];
