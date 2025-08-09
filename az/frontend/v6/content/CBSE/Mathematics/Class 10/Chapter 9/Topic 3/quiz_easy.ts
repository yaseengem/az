import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch9_t3_qe1',
    type: 'mcq',
    question: 'From a point on the ground, the angle of elevation to the top of a tower is 30°. If the height of the tower is 50 meters, how far is the point from the base of the tower?',
    options: [
      '50√3 meters',
      '50/√3 meters',
      '100 meters',
      '25√3 meters'
    ],
    correctAnswer: '50√3 meters',
    explanation: 'Using tan(30°) = 1/√3 = 50/x, we get x = 50√3 meters',
    wrongAnswerExplanations: {
      '50/√3 meters': 'This results from incorrectly using tan(30°) = √3 instead of 1/√3.',
      '100 meters': 'This is not the correct application of the tangent formula.',
      '25√3 meters': 'This is half of the correct answer, showing an error in calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch9_t3_qe2',
    type: 'mcq',
    question: 'The angle of elevation of the top of a building from a point on the ground, which is 30 m away from the foot of the building, is 45°. The height of the building is:',
    options: [
      '30 meters',
      '15 meters',
      '45 meters',
      '60 meters'
    ],
    correctAnswer: '30 meters',
    explanation: 'Using tan(45°) = 1 = h/30, the height h = 30 meters',
    wrongAnswerExplanations: {
      '15 meters': 'This is half of the correct answer, showing a calculation error.',
      '45 meters': 'This results from incorrectly adding the angle and distance values.',
      '60 meters': 'This is twice the correct answer, showing a fundamental misunderstanding.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch9_t3_qe3',
    type: 'mcq',
    question: 'From the top of a 60 meter high building, the angle of depression of a car on the ground is 30°. How far is the car from the building?',
    options: [
      '60√3 meters',
      '120 meters',
      '30√3 meters',
      '60/√3 meters'
    ],
    correctAnswer: '60√3 meters',
    explanation: 'Using tan(30°) = 1/√3 = 60/x, we get x = 60√3 meters',
    wrongAnswerExplanations: {
      '120 meters': 'This is twice the height but doesn\'t correctly apply the tangent formula.',
      '30√3 meters': 'This is half of the correct answer, showing a calculation error.',
      '60/√3 meters': 'This incorrectly applies the formula by dividing instead of multiplying.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch9_t3_qe4',
    type: 'mcq',
    question: 'A ladder 10 meters long reaches a window 8 meters above the ground. What is the distance of the foot of the ladder from the wall?',
    options: [
      '6 meters',
      '2 meters',
      '4 meters',
      '8 meters'
    ],
    correctAnswer: '6 meters',
    explanation: 'Using Pythagoras theorem: 10² = 8² + x², x² = 36, so x = 6 meters',
    wrongAnswerExplanations: {
      '2 meters': 'This is the difference between ladder length and height, not the horizontal distance.',
      '4 meters': 'This is incorrect application of the Pythagorean theorem.',
      '8 meters': 'This equals the height, not the horizontal distance.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch9_t3_qe5',
    type: 'mcq',
    question: 'If the angle of elevation of the sun is 60°, how tall is a tree that casts a shadow 10 meters long?',
    options: [
      '10√3 meters',
      '5√3 meters',
      '20 meters',
      '10/√3 meters'
    ],
    correctAnswer: '10√3 meters',
    explanation: 'Using tan(60°) = √3 = h/10, so height h = 10√3 meters',
    wrongAnswerExplanations: {
      '5√3 meters': 'This is half of the correct answer, showing a calculation error.',
      '20 meters': 'This is twice the shadow length but doesn\'t correctly apply tangent.',
      '10/√3 meters': 'This incorrectly applies the formula by dividing instead of multiplying.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch9_t3_qe6',
    type: 'mcq',
    question: 'From a point on the ground, the angles of elevation of the top and bottom of a flagpole placed on the top of a building are 60° and 45° respectively. If the height of the building is 20 meters, what is the height of the flagpole?',
    options: [
      '(20√3 - 20) meters',
      '(20√3 + 20) meters',
      '20(√3 - 1) meters',
      '20(√3/3 - 1) meters'
    ],
    correctAnswer: '20(√3 - 1) meters',
    explanation: 'h = 20(tan(60°) - tan(45°)) = 20(√3 - 1) meters',
    wrongAnswerExplanations: {
      '(20√3 - 20) meters': 'This rearranges the correct answer but is mathematically equivalent.',
      '(20√3 + 20) meters': 'This adds the tangent values instead of subtracting them.',
      '20(√3/3 - 1) meters': 'This incorrectly uses tan(60°) = √3/3 instead of √3.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch9_t3_qe7',
    type: 'mcq',
    question: 'A kite is flying at a height of 75 meters from the ground. The string attached to the kite is taut and makes an angle of 60° with the horizontal. How much string has been released?',
    options: [
      '75√3/3 meters',
      '150 meters',
      '75/sin(60°) meters',
      '86.6 meters'
    ],
    correctAnswer: '75/sin(60°) meters',
    explanation: 'Length of string = height/sin(angle) = 75/sin(60°) = 75/(√3/2) = 86.6 meters',
    wrongAnswerExplanations: {
      '75√3/3 meters': 'This incorrectly applies the formula using tangent instead of sine.',
      '150 meters': 'This is twice the height, not accounting for the angle.',
      '86.6 meters': 'This is the approximate decimal value of the correct answer.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch9_t3_qe8',
    type: 'mcq',
    question: 'From the top of a cliff 100 meters high, the angle of depression of a boat is 30°. How far is the boat from the base of the cliff?',
    options: [
      '100√3 meters',
      '100/√3 meters',
      '50√3 meters',
      '173.2 meters'
    ],
    correctAnswer: '100√3 meters',
    explanation: 'Using tan(30°) = 1/√3 = 100/x, so x = 100√3 ≈ 173.2 meters',
    wrongAnswerExplanations: {
      '100/√3 meters': 'This incorrectly divides by √3 instead of multiplying.',
      '50√3 meters': 'This is half of the correct answer, showing a calculation error.',
      '173.2 meters': 'This is the approximate decimal value of the correct answer.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch9_t3_qe9',
    type: 'mcq',
    question: 'A person standing on the bank of a river observes that the angle of elevation of the top of a tree on the opposite bank is 60°. When he moves 40 meters away from the bank, the angle of elevation becomes 30°. What is the height of the tree?',
    options: [
      '20√3 meters',
      '40 meters',
      '20 meters',
      '10√3 meters'
    ],
    correctAnswer: '20√3 meters',
    explanation: 'Using the equations x·tan(60°) = h and (x+40)·tan(30°) = h, we get h = 20√3 meters',
    wrongAnswerExplanations: {
      '40 meters': 'This equals the distance moved but doesn\'t correctly solve the equations.',
      '20 meters': 'This is part of the solution but doesn\'t include the √3 factor.',
      '10√3 meters': 'This is half of the correct answer, showing a calculation error.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch9_t3_qe10',
    type: 'mcq',
    question: 'A tree breaks due to a storm and the broken part bends so that the top of the tree touches the ground making an angle of 30° with the ground. The distance from the foot of the tree to the point where the top touches the ground is 8 meters. What was the original height of the tree?',
    options: [
      '16 meters',
      '8√3 meters',
      '8 meters',
      '16/√3 meters'
    ],
    correctAnswer: '8√3 meters',
    explanation: 'Let h be the height. Using tan(60°) = h/8 = √3, we get h = 8√3 meters',
    wrongAnswerExplanations: {
      '16 meters': 'This is twice the distance but doesn\'t correctly apply the tangent formula.',
      '8 meters': 'This equals the distance to where the top touches the ground, not the height.',
      '16/√3 meters': 'This incorrectly applies the formula by dividing instead of multiplying.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch9_t3_qe11',
    type: 'mcq',
    question: 'If the angle of elevation of the sun changes from 30° to 60°, by what factor does the length of the shadow of a pole decrease?',
    options: [
      '1/3',
      '1/2',
      '1/√3',
      '2/3'
    ],
    correctAnswer: '1/3',
    explanation: 'Shadow lengths ratio = tan(30°)/tan(60°) = (1/√3)/√3 = 1/3',
    wrongAnswerExplanations: {
      '1/2': 'This is the ratio of the sines, not the tangents of the angles.',
      '1/√3': 'This is the value of tan(30°), not the ratio of the shadow lengths.',
      '2/3': 'This is an incorrect calculation of the ratio.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch9_t3_qe12',
    type: 'mcq',
    question: 'A tower stands vertically on the ground. From a point on the ground, 25 meters away from the foot of the tower, the angle of elevation of the top of the tower is 30°. The height of the tower is:',
    options: [
      '25/√3 meters',
      '25√3/3 meters',
      '50/√3 meters',
      '25/3 meters'
    ],
    correctAnswer: '25/√3 meters',
    explanation: 'Using tan(30°) = h/25 = 1/√3, so h = 25/√3 meters',
    wrongAnswerExplanations: {
      '25√3/3 meters': 'This incorrectly multiplies by √3/3 instead of dividing by √3.',
      '50/√3 meters': 'This doubles the distance but doesn\'t correctly apply the formula.',
      '25/3 meters': 'This is an approximate decimal calculation but not the exact value.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch9_t3_qe13',
    type: 'mcq',
    question: 'From a point on the ground, the angles of elevation of the top of a tower before and after walking 30 meters towards it are 60° and 75° respectively. The height of the tower is:',
    options: [
      '30(1 + √3) meters',
      '30√3 meters',
      '30(√3 + tan(75°)) meters',
      '90 meters'
    ],
    correctAnswer: '30(1 + √3) meters',
    explanation: 'Using equations d·tan(75°) = h and (d+30)·tan(60°) = h, we can solve for h = 30(1 + √3)',
    wrongAnswerExplanations: {
      '30√3 meters': 'This is part of the correct answer but misses the addition of 30.',
      '30(√3 + tan(75°)) meters': 'This incorrectly combines the tangent values.',
      '90 meters': 'This is three times the distance walked but doesn\'t correctly solve the equations.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch9_t3_qe14',
    type: 'mcq',
    question: 'A man on the deck of a ship is 10 meters above water level. He observes the angle of depression of a boat as 45°. How far is the boat from the ship?',
    options: [
      '10 meters',
      '20 meters',
      '5 meters',
      '10√2 meters'
    ],
    correctAnswer: '10 meters',
    explanation: 'Using tan(45°) = 10/x = 1, so x = 10 meters',
    wrongAnswerExplanations: {
      '20 meters': 'This is twice the height but doesn\'t correctly apply the tangent formula.',
      '5 meters': 'This is half the height, showing a calculation error.',
      '10√2 meters': 'This incorrectly applies Pythagoras theorem instead of using tangent.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch9_t3_qe15',
    type: 'mcq',
    question: 'From the top of a lighthouse, the angles of depression of two ships on the same side of the lighthouse are 45° and 30°. If the height of the lighthouse is 60 meters, the distance between the ships is:',
    options: [
      '60(√3 - 1) meters',
      '120 meters',
      '60 meters',
      '30(√3 - 1) meters'
    ],
    correctAnswer: '60(√3 - 1) meters',
    explanation: 'Distance from lighthouse to first ship = 60 meters, to second ship = 60√3 meters. Difference = 60(√3-1)',
    wrongAnswerExplanations: {
      '120 meters': 'This is twice the height but doesn\'t correctly calculate the difference.',
      '60 meters': 'This equals the distance to the first ship, not the distance between ships.',
      '30(√3 - 1) meters': 'This is half of the correct answer, showing a calculation error.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch9_t3_qe16',
    type: 'mcq',
    question: 'A balloon is connected to a meteorological station by a cable of length 200 meters inclined at 60° to the horizontal. The height of the balloon is:',
    options: [
      '100√3 meters',
      '200 meters',
      '200 sin(60°) meters',
      '173.2 meters'
    ],
    correctAnswer: '200 sin(60°) meters',
    explanation: 'Height = length × sin(angle) = 200 × sin(60°) = 200 × (√3/2) ≈ 173.2 meters',
    wrongAnswerExplanations: {
      '100√3 meters': 'This incorrectly uses half the cable length in the calculation.',
      '200 meters': 'This equals the cable length, not accounting for the angle.',
      '173.2 meters': 'This is the approximate decimal value of the correct answer.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch9_t3_qe17',
    type: 'mcq',
    question: 'A man is standing on the deck of a ship, which is 10 meters above sea level. He observes a boat at an angle of depression of 30°. The distance of the boat from the ship is:',
    options: [
      '10√3 meters',
      '20 meters',
      '5√3 meters',
      '17.3 meters'
    ],
    correctAnswer: '10√3 meters',
    explanation: 'Using tan(30°) = 10/x = 1/√3, so x = 10√3 meters',
    wrongAnswerExplanations: {
      '20 meters': 'This is twice the height but doesn\'t correctly apply the tangent formula.',
      '5√3 meters': 'This is half of the correct answer, showing a calculation error.',
      '17.3 meters': 'This is the approximate decimal value of the correct answer.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch9_t3_qe18',
    type: 'mcq',
    question: 'The angle of elevation of the top of a building from a point on the ground is 45°. On moving 10 meters closer to the building, the angle of elevation becomes 60°. The height of the building is:',
    options: [
      '10(√3 + 1) meters',
      '10√3 meters',
      '20 meters',
      '10 meters'
    ],
    correctAnswer: '10(√3 + 1) meters',
    explanation: 'If d is distance after moving and h is height, (d+10)tan(45°) = h and d·tan(60°) = h gives h = 10(√3+1)',
    wrongAnswerExplanations: {
      '10√3 meters': 'This is part of the correct answer but misses the addition of 10.',
      '20 meters': 'This is twice the distance moved but doesn\'t correctly solve the equations.',
      '10 meters': 'This equals the distance moved, not the height of the building.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch9_t3_qe19',
    type: 'mcq',
    question: 'From the top of a 150 meter high cliff, the angle of depression of a boat is 30°. The distance of the boat from the foot of the cliff is:',
    options: [
      '150√3 meters',
      '150/√3 meters',
      '75√3 meters',
      '259.8 meters'
    ],
    correctAnswer: '150√3 meters',
    explanation: 'Using tan(30°) = 150/x = 1/√3, so x = 150√3 meters',
    wrongAnswerExplanations: {
      '150/√3 meters': 'This incorrectly divides by √3 instead of multiplying.',
      '75√3 meters': 'This is half of the correct answer, showing a calculation error.',
      '259.8 meters': 'This is the approximate decimal value of the correct answer.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch9_t3_qe20',
    type: 'mcq',
    question: 'A ladder, 13 meters long, is placed against a wall reaching a window 12 meters above the ground. The distance of the foot of the ladder from the wall is:',
    options: [
      '5 meters',
      '4 meters',
      '3 meters',
      '5.5 meters'
    ],
    correctAnswer: '5 meters',
    explanation: 'Using Pythagoras theorem: 13² = 12² + x², x² = 25, so x = 5 meters',
    wrongAnswerExplanations: {
      '4 meters': 'This is an incorrect application of the Pythagorean theorem.',
      '3 meters': 'This doesn\'t satisfy the Pythagorean relationship.',
      '5.5 meters': 'This is more than the correct answer, showing a calculation error.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  }
];
