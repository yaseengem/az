import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl3_ch1_t1_qe1',
    type: 'mcq',
    question: 'If you are looking at a ball from the top, what shape will you see?',
    options: ['Circle', 'Square', 'Triangle', 'Rectangle'],
    correctAnswer: 'Circle',
    explanation: 'When you look at a ball from the top, you see a circular shape.',
    wrongAnswerExplanations: {
      'Square': 'A ball does not look like a square from any angle.',
      'Triangle': 'A ball does not appear triangular from any view.',
      'Rectangle': 'A ball does not look like a rectangle from any angle.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch1_t1_qe2',
    type: 'mcq',
    question: 'Which direction is opposite to north?',
    options: ['South', 'East', 'West', 'Up'],
    correctAnswer: 'South',
    explanation: 'South is directly opposite to north on a compass.',
    wrongAnswerExplanations: {
      'East': 'East is perpendicular to north, not opposite.',
      'West': 'West is perpendicular to north, not opposite.',
      'Up': 'Up is a vertical direction, while north is horizontal.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch1_t1_qe3',
    type: 'mcq',
    question: 'If a book is on top of a table, where is the book in relation to the table?',
    options: ['Above', 'Below', 'Inside', 'Behind'],
    correctAnswer: 'Above',
    explanation: 'When an object is on top of something, it is above that object.',
    wrongAnswerExplanations: {
      'Below': 'Below means underneath, which is the opposite of on top.',
      'Inside': 'Inside would mean the book is contained within the table.',
      'Behind': 'Behind means at the back of the table, not on its surface.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch1_t1_qe4',
    type: 'mcq',
    question: 'Which position word describes a cat under a chair?',
    options: ['Below', 'Above', 'On', 'In'],
    correctAnswer: 'Below',
    explanation: 'Below or under indicates a position beneath something else.',
    wrongAnswerExplanations: {
      'Above': 'Above means over or on top of something, not underneath.',
      'On': 'On means resting on the surface of something.',
      'In': 'In means inside or within something.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch1_t1_qe5',
    type: 'mcq',
    question: 'If you are facing east and turn right, which direction will you face?',
    options: ['South', 'North', 'West', 'East'],
    correctAnswer: 'South',
    explanation: 'When facing east, turning right means you will face south.',
    wrongAnswerExplanations: {
      'North': 'Turning left from east would make you face north, not right.',
      'West': 'You would face west if you turned around (180°) from east.',
      'East': 'You would still face east if you did not turn at all.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch1_t1_qe6',
    type: 'mcq',
    question: 'Which shape looks the same from all sides?',
    options: ['Ball', 'Book', 'Box', 'Pencil'],
    correctAnswer: 'Ball',
    explanation: 'A ball (sphere) looks the same circular shape from all angles.',
    wrongAnswerExplanations: {
      'Book': 'A book looks different from different angles - rectangle from front, thin line from side.',
      'Box': 'A box has different rectangular faces when viewed from different sides.',
      'Pencil': 'A pencil looks different when viewed from its end versus its side.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch1_t1_qe7',
    type: 'mcq',
    question: 'Where would you find the ceiling in a room?',
    options: ['Above', 'Below', 'To the left', 'To the right'],
    correctAnswer: 'Above',
    explanation: 'The ceiling is always above you in a room, opposite to the floor.',
    wrongAnswerExplanations: {
      'Below': 'The floor is below you in a room, not the ceiling.',
      'To the left': 'The ceiling is above you, not to your left.',
      'To the right': 'The ceiling is above you, not to your right.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch1_t1_qe8',
    type: 'mcq',
    question: 'Which position word describes a dog sitting next to a tree?',
    options: ['Beside', 'Inside', 'On', 'Under'],
    correctAnswer: 'Beside',
    explanation: 'Beside means next to or at the side of something.',
    wrongAnswerExplanations: {
      'Inside': 'Inside would mean the dog is within the tree, which is not possible.',
      'On': 'On would mean the dog is sitting on top of the tree.',
      'Under': 'Under would mean the dog is beneath the tree.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch1_t1_qe9',
    type: 'mcq',
    question: 'When looking at a book from the front, what shape do you see?',
    options: ['Rectangle', 'Circle', 'Triangle', 'Square'],
    correctAnswer: 'Rectangle',
    explanation: 'A book appears as a rectangle when viewed from the front cover.',
    wrongAnswerExplanations: {
      'Circle': 'Books are not circular in shape when viewed from the front.',
      'Triangle': 'Books do not have a triangular shape when viewed from the front.',
      'Square': 'Most books are taller than they are wide, making them rectangular, not square.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch1_t1_qe10',
    type: 'mcq',
    question: 'If the sun rises in the east, in which direction does it set?',
    options: ['West', 'North', 'South', 'East'],
    correctAnswer: 'West',
    explanation: 'The sun rises in the east and sets in the west each day.',
    wrongAnswerExplanations: {
      'North': 'The sun does not set in the north.',
      'South': 'The sun does not set in the south.',
      'East': 'The sun rises in the east but does not set there.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch1_t1_qe11',
    type: 'mcq',
    question: 'Which of these objects would look like a circle from above?',
    options: ['Cup', 'Book', 'Ruler', 'Pencil box'],
    correctAnswer: 'Cup',
    explanation: 'A cup appears circular when viewed from above.',
    wrongAnswerExplanations: {
      'Book': 'A book looks rectangular when viewed from above.',
      'Ruler': 'A ruler appears as a long rectangle when viewed from above.',
      'Pencil box': 'A pencil box typically looks rectangular when viewed from above.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch1_t1_qe12',
    type: 'mcq',
    question: 'If you are sitting at your desk, where is the floor?',
    options: ['Below you', 'Above you', 'In front of you', 'Behind you'],
    correctAnswer: 'Below you',
    explanation: 'The floor is always below you in a room.',
    wrongAnswerExplanations: {
      'Above you': 'The ceiling is above you, not the floor.',
      'In front of you': 'The floor extends in all directions, not just in front.',
      'Behind you': 'The floor extends in all directions, not just behind.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch1_t1_qe13',
    type: 'mcq',
    question: 'Which direction does your shadow point when the sun is behind you?',
    options: ['In front of you', 'Behind you', 'To your left', 'To your right'],
    correctAnswer: 'In front of you',
    explanation: 'Shadows form on the opposite side from the light source, so if the sun is behind you, the shadow points in front.',
    wrongAnswerExplanations: {
      'Behind you': 'If the sun is behind you, your shadow cannot be behind you as well.',
      'To your left': 'Your shadow would only point left if the sun is to your right.',
      'To your right': 'Your shadow would only point right if the sun is to your left.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch1_t1_qe14',
    type: 'mcq',
    question: 'When do shadows appear longest during the day?',
    options: ['Morning and evening', 'Noon', 'Midnight', 'Only at noon'],
    correctAnswer: 'Morning and evening',
    explanation: 'Shadows are longest in morning and evening when the sun is low in the sky.',
    wrongAnswerExplanations: {
      'Noon': 'At noon, the sun is high, making shadows shortest, not longest.',
      'Midnight': 'There are no shadows at midnight as there is no sunlight.',
      'Only at noon': 'Shadows are actually shortest at noon, not longest.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch1_t1_qe15',
    type: 'mcq',
    question: 'If you are looking in a mirror, which hand appears to be your right hand?',
    options: ['Your left hand', 'Your right hand', 'Both hands', 'Neither hand'],
    correctAnswer: 'Your left hand',
    explanation: 'A mirror reverses left and right, so your right hand appears on the left side in the mirror.',
    wrongAnswerExplanations: {
      'Your right hand': 'A mirror reverses left and right, so your right hand does not appear as right in the mirror.',
      'Both hands': 'Only one hand can appear as the right hand in the mirror.',
      'Neither hand': 'One of your hands will appear as the right hand in the mirror.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch1_t1_qe16',
    type: 'mcq',
    question: 'Which direction is between north and east?',
    options: ['Northeast', 'Northwest', 'Southeast', 'Southwest'],
    correctAnswer: 'Northeast',
    explanation: 'Northeast is the direction halfway between north and east.',
    wrongAnswerExplanations: {
      'Northwest': 'Northwest is between north and west, not north and east.',
      'Southeast': 'Southeast is between south and east, not north and east.',
      'Southwest': 'Southwest is between south and west, not north and east.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch1_t1_qe17',
    type: 'mcq',
    question: 'Which object would look different when viewed from different angles?',
    options: ['Shoe', 'Marble', 'Small ball', 'Round button'],
    correctAnswer: 'Shoe',
    explanation: 'A shoe has a complex shape that looks different from the front, side, top, etc.',
    wrongAnswerExplanations: {
      'Marble': 'A marble is spherical and looks the same circular shape from all angles.',
      'Small ball': 'A ball looks the same from all angles due to its spherical shape.',
      'Round button': 'A round button appears circular from most viewing angles.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch1_t1_qe18',
    type: 'mcq',
    question: 'If you stand with your back to the rising sun, which direction are you facing?',
    options: ['West', 'East', 'North', 'South'],
    correctAnswer: 'West',
    explanation: 'The sun rises in the east, so if your back is to the rising sun, you are facing west.',
    wrongAnswerExplanations: {
      'East': 'If you are facing east, you would be looking at the rising sun, not having your back to it.',
      'North': 'If your back is to the east (rising sun), you could be facing north only if you turned left.',
      'South': 'If your back is to the east (rising sun), you could be facing south only if you turned right.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch1_t1_qe19',
    type: 'mcq',
    question: 'Which letter looks the same when seen in a mirror from the front?',
    options: ['A', 'B', 'C', 'D'],
    correctAnswer: 'A',
    explanation: 'A has vertical symmetry, so it looks the same in a mirror.',
    wrongAnswerExplanations: {
      'B': 'B changes in a mirror because it does not have vertical symmetry.',
      'C': 'C appears reversed in a mirror, looking somewhat like a backward C.',
      'D': 'D changes in a mirror because it does not have vertical symmetry.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch1_t1_qe20',
    type: 'mcq',
    question: 'Which position word describes a bird flying in the sky?',
    options: ['Above', 'Below', 'Between', 'Inside'],
    correctAnswer: 'Above',
    explanation: 'A bird flying in the sky is above us on the ground.',
    wrongAnswerExplanations: {
      'Below': 'Below would mean the bird is under something, not flying in the sky.',
      'Between': 'Between would require the bird to be in the middle of two other objects.',
      'Inside': 'Inside would mean the bird is contained within something, not flying freely.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  }
];
