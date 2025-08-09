import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch9_t1_qe1',
    type: 'mcq',
    question: 'The angle of elevation of the top of a tower from a point on the ground is 30°. If the height of the tower is 30 meters, how far is the point from the base of the tower?',
    options: [
      '51.96 meters',
      '30√3 meters',
      '60 meters',
      '15√3 meters'
    ],
    correctAnswer: '30√3 meters',
    explanation: 'Using tan(30°) = h/d = 30/d, so d = 30/tan(30°) = 30/(1/√3) = 30√3 meters.',
    wrongAnswerExplanations: {
      '51.96 meters': 'This is the result of incorrectly using sin instead of tan.',
      '60 meters': 'This is twice the height of the tower, not the distance.',
      '15√3 meters': 'This is half the correct answer.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch9_t1_qe2',
    type: 'mcq',
    question: 'From a point on the ground, the angle of elevation of the top of a tower is 45°. If the height of the tower is 50 meters, what is the distance of the point from the base of the tower?',
    options: [
      '50 meters',
      '25 meters',
      '50√2 meters',
      '100 meters'
    ],
    correctAnswer: '50 meters',
    explanation: 'Using tan(45°) = h/d = 50/d, so d = 50/tan(45°) = 50/1 = 50 meters.',
    wrongAnswerExplanations: {
      '25 meters': 'This is half the height of the tower.',
      '50√2 meters': 'This would be the result if using sec instead of tan.',
      '100 meters': 'This is double the correct answer.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch9_t1_qe3',
    type: 'mcq',
    question: 'A ladder is leaning against a wall making an angle of 60° with the ground. If the foot of the ladder is 3 meters away from the wall, how high does the ladder reach on the wall?',
    options: [
      '3√3 meters',
      '6 meters',
      '5.2 meters',
      '3 meters'
    ],
    correctAnswer: '3√3 meters',
    explanation: 'Using tan(60°) = h/3, so h = 3×tan(60°) = 3×√3 = 3√3 meters.',
    wrongAnswerExplanations: {
      '6 meters': 'This is double the distance from the wall.',
      '5.2 meters': 'This is approximately 3×1.73, which is 3√3, but not exact.',
      '3 meters': 'This is equal to the distance from the wall, not the height.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch9_t1_qe4',
    type: 'mcq',
    question: 'From the top of a 75-meter building, the angle of depression to a car on the ground is 30°. How far is the car from the building?',
    options: [
      '43.3 meters',
      '75√3 meters',
      '129.9 meters',
      '150 meters'
    ],
    correctAnswer: '75√3 meters',
    explanation: 'For angle of depression 30°, angle of elevation is 30°. So tan(30°) = 75/d, giving d = 75/tan(30°) = 75×√3 meters.',
    wrongAnswerExplanations: {
      '43.3 meters': 'This is 75×tan(30°), but we need 75/tan(30°).',
      '129.9 meters': 'This is approximately 75×√3, but not exact.',
      '150 meters': 'This is twice the height of the building.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch9_t1_qe5',
    type: 'mcq',
    question: 'A person observes the angle of elevation of a tower as 60°. If the person moves 20 meters closer to the tower, the angle of elevation becomes 75°. What is the height of the tower?',
    options: [
      '20√3 meters',
      '20(√3 + 2) meters',
      '20√3(1 + tan15°) meters',
      '10√3 meters'
    ],
    correctAnswer: '20√3 meters',
    explanation: 'Using tan equations and solving: tan60° = h/(x+20) and tan75° = h/x gives h = 20√3 meters.',
    wrongAnswerExplanations: {
      '20(√3 + 2) meters': 'This involves incorrect trigonometric calculation.',
      '20√3(1 + tan15°) meters': 'This involves incorrect application of the formula.',
      '10√3 meters': 'This is half the correct answer.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch9_t1_qe6',
    type: 'mcq',
    question: 'From a point on the ground, the angles of elevation of the top and bottom of a flagstaff on a building are 60° and 45° respectively. If the height of the building is 20 meters, what is the height of the flagstaff?',
    options: [
      '20(√3 - 1) meters',
      '20(1 - 1/√3) meters',
      '20(√3 - 1)/√3 meters',
      '20(√3 - 1)/(√3) meters'
    ],
    correctAnswer: '20(√3 - 1) meters',
    explanation: 'Let flagstaff height be h. Using tan formulas and solving: 20+h = d×tan60° and 20 = d×tan45° gives h = 20(√3-1).',
    wrongAnswerExplanations: {
      '20(1 - 1/√3) meters': 'This is a simplification of 20(√3-1)/√3, not the correct answer.',
      '20(√3 - 1)/√3 meters': 'This is the result of incorrect algebraic manipulation.',
      '20(√3 - 1)/(√3) meters': 'This is a simplification of 20(1-1/√3), not the correct answer.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch9_t1_qe7',
    type: 'mcq',
    question: 'A tree breaks due to a storm and the broken part bends so that the top touches the ground making an angle of 30° with the ground. The distance from the base of the tree to the point where the top touches the ground is 8 meters. What was the height of the tree?',
    options: [
      '8√3 meters',
      '4√3 meters',
      '16 meters',
      '8 meters'
    ],
    correctAnswer: '8√3 meters',
    explanation: 'Let h be tree height and b be broken part. Using trigonometry, b×sin30° = 8 gives b = 16. Since h = b, h = 8√3 meters.',
    wrongAnswerExplanations: {
      '4√3 meters': 'This is half the correct answer.',
      '16 meters': 'This is the length of the broken part, not the height.',
      '8 meters': 'This is the distance from the base to where the top touches ground.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch9_t1_qe8',
    type: 'mcq',
    question: 'The angle of elevation of the top of a tower from a point A on the ground is 30°. On moving 40 meters towards the tower to a point B, the angle of elevation becomes 60°. The height of the tower is:',
    options: [
      '20 meters',
      '20√3 meters',
      '40 meters',
      '40/√3 meters'
    ],
    correctAnswer: '20√3 meters',
    explanation: 'Let h be height and x distance to B from tower. Solving tan60° = h/x and tan30° = h/(x+40) gives h = 20√3 meters.',
    wrongAnswerExplanations: {
      '20 meters': 'This answer ignores the trigonometric ratios involved.',
      '40 meters': 'This is the distance moved, not the height of the tower.',
      '40/√3 meters': 'This results from incorrect algebraic manipulation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch9_t1_qe9',
    type: 'mcq',
    question: 'From a point on the ground, the angle of elevation of the top of a tower is found to be 30°. If the observer moves 60 meters towards the tower, the angle of elevation becomes 60°. The height of the tower is:',
    options: [
      '30√3 meters',
      '60 meters',
      '20√3 meters',
      '30 meters'
    ],
    correctAnswer: '30√3 meters',
    explanation: 'Let h be height and x distance from tower after moving. Using tan equations and solving gives h = 30√3 meters.',
    wrongAnswerExplanations: {
      '60 meters': 'This is the distance moved, not the height of the tower.',
      '20√3 meters': 'This results from incorrect algebraic manipulation.',
      '30 meters': 'This ignores the trigonometric ratios involved.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch9_t1_qe10',
    type: 'mcq',
    question: 'The angle of elevation of the top of a building from a point on the ground is 45°. On moving 10 meters closer to the building, the angle of elevation increases to 60°. The height of the building is:',
    options: [
      '10(√3 + 1) meters',
      '10√3 meters',
      '10 meters',
      '20 meters'
    ],
    correctAnswer: '10(√3 + 1) meters',
    explanation: 'Let h be height and x distance after moving. Solving tan60° = h/x and tan45° = h/(x+10) gives h = 10(√3+1) meters.',
    wrongAnswerExplanations: {
      '10√3 meters': 'This results from incorrect algebraic manipulation.',
      '10 meters': 'This is the distance moved, not the height of the building.',
      '20 meters': 'This ignores the trigonometric ratios involved.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch9_t1_qe11',
    type: 'mcq',
    question: 'From the top of a cliff 60 meters high, the angle of depression of a boat is 30°. How far is the boat from the base of the cliff?',
    options: [
      '60√3 meters',
      '30√3 meters',
      '60 meters',
      '120 meters'
    ],
    correctAnswer: '60√3 meters',
    explanation: 'For angle of depression 30°, angle of elevation is 30°. So tan30° = 60/d, giving d = 60/tan30° = 60×√3 meters.',
    wrongAnswerExplanations: {
      '30√3 meters': 'This is half the correct answer.',
      '60 meters': 'This is equal to the height of the cliff, not the distance.',
      '120 meters': 'This is twice the height of the cliff, not the distance.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch9_t1_qe12',
    type: 'mcq',
    question: 'A ladder is placed against a wall such that its foot is at a distance of 3.5 meters from the wall and its top reaches a window 4.5 meters above the ground. The length of the ladder is:',
    options: [
      '5.7 meters',
      '8 meters',
      '4 meters',
      '9 meters'
    ],
    correctAnswer: '5.7 meters',
    explanation: 'Using Pythagoras theorem: length² = 3.5² + 4.5² = 12.25 + 20.25 = 32.5. So length = √32.5 ≈ 5.7 meters.',
    wrongAnswerExplanations: {
      '8 meters': 'This is the sum of the height and distance from the wall.',
      '4 meters': 'This is less than the height of the window.',
      '9 meters': 'This is approximately twice the height of the window.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch9_t1_qe13',
    type: 'mcq',
    question: 'From the top of a lighthouse 48 meters high, the angle of depression of a ship is 30°. The distance of the ship from the base of the lighthouse is:',
    options: [
      '48√3 meters',
      '16√3 meters',
      '48 meters',
      '24√3 meters'
    ],
    correctAnswer: '48√3 meters',
    explanation: 'For angle of depression 30°, angle of elevation is 30°. So tan30° = 48/d, giving d = 48/tan30° = 48×√3 meters.',
    wrongAnswerExplanations: {
      '16√3 meters': 'This is one-third of the correct answer.',
      '48 meters': 'This equals the height of the lighthouse, not the distance.',
      '24√3 meters': 'This is half of the correct answer.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch9_t1_qe14',
    type: 'mcq',
    question: 'A man standing on the deck of a ship, which is 10 meters above water level, observes the angle of elevation of the top of a cliff as 45° and the angle of depression of the base of the cliff as 30°. The height of the cliff is:',
    options: [
      '10(1 + √3) meters',
      '20 meters',
      '10√3 meters',
      '30 meters'
    ],
    correctAnswer: '10(1 + √3) meters',
    explanation: 'Let h be cliff height. From the given angles, h-10 = d and 10 = d/√3. Solving gives h = 10 + 10√3 = 10(1+√3) meters.',
    wrongAnswerExplanations: {
      '20 meters': 'This ignores the information about the angle of depression.',
      '10√3 meters': 'This is only part of the calculation for the height.',
      '30 meters': 'This is an approximation of the correct answer, not exact.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch9_t1_qe15',
    type: 'mcq',
    question: 'From a point on the ground, the angles of elevation of the top and the bottom of a window of a building are 60° and 45° respectively. If the window is 6 meters high, the height of the bottom of the window from the ground is:',
    options: [
      '6 meters',
      '3√3 meters',
      '6(√3 - 1) meters',
      '12 meters'
    ],
    correctAnswer: '6(√3 - 1) meters',
    explanation: 'Let h be height of bottom window from ground and d distance from building. Solving tan45° = h/d and tan60° = (h+6)/d gives h = 6(√3-1).',
    wrongAnswerExplanations: {
      '6 meters': 'This is the height of the window, not the height from the ground.',
      '3√3 meters': 'This results from incorrect algebraic manipulation.',
      '12 meters': 'This is double the height of the window, not the correct height.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch9_t1_qe16',
    type: 'mcq',
    question: 'An observer 1.5 meters tall is 28.5 meters away from a tower. The angle of elevation of the top of the tower from the eye of the observer is 45°. The height of the tower is:',
    options: [
      '30 meters',
      '28.5 meters',
      '10 meters',
      '20 meters'
    ],
    correctAnswer: '30 meters',
    explanation: 'Let h be tower height. Using tan45° = (h-1.5)/28.5, we get h-1.5 = 28.5, so h = 30 meters.',
    wrongAnswerExplanations: {
      '28.5 meters': 'This is the distance from the observer to the tower.',
      '10 meters': 'This is much less than the correct answer.',
      '20 meters': 'This ignores the height of the observer.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch9_t1_qe17',
    type: 'mcq',
    question: 'Two buildings are 60 meters apart. From the top of the first building, which is 80 meters high, the angle of depression of the top of the second building is 30°. The height of the second building is:',
    options: [
      '80 - 60/√3 meters',
      '80 - 60√3 meters',
      '20 meters',
      '40 meters'
    ],
    correctAnswer: '80 - 60/√3 meters',
    explanation: 'Let h be height of second building. Using tan30° = (80-h)/60, we get 80-h = 60×tan30° = 60/√3, so h = 80 - 60/√3 meters.',
    wrongAnswerExplanations: {
      '80 - 60√3 meters': 'This involves incorrect trigonometric calculation.',
      '20 meters': 'This is a quarter of the height of the first building.',
      '40 meters': 'This is half of the height of the first building.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch9_t1_qe18',
    type: 'mcq',
    question: 'From the top of a 120-meter high building, the angle of depression of a car on the road is 45°. The distance of the car from the building is:',
    options: [
      '120 meters',
      '60 meters',
      '240 meters',
      '180 meters'
    ],
    correctAnswer: '120 meters',
    explanation: 'For angle of depression 45°, angle of elevation is 45°. So tan45° = 120/d gives d = 120/1 = 120 meters.',
    wrongAnswerExplanations: {
      '60 meters': 'This is half the height of the building.',
      '240 meters': 'This is twice the height of the building.',
      '180 meters': 'This is 1.5 times the height of the building.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch9_t1_qe19',
    type: 'mcq',
    question: 'A vertical tower stands on a horizontal plane and is surmounted by a vertical flagstaff. From a point on the plane, the angles of elevation of the top and bottom of the flagstaff are 60° and 45° respectively. If the flagstaff is 10 meters high, the height of the tower is:',
    options: [
      '10(√3 - 1) meters',
      '10 meters',
      '10/(√3 - 1) meters',
      '10√3 meters'
    ],
    correctAnswer: '10/(√3 - 1) meters',
    explanation: 'Let h be tower height, and d be distance. From equations: tan45° = h/d and tan60° = (h+10)/d, solving gives h = 10/(√3-1) meters.',
    wrongAnswerExplanations: {
      '10(√3 - 1) meters': 'This is the result when the formula is inverted.',
      '10 meters': 'This is the height of the flagstaff, not the tower.',
      '10√3 meters': 'This is an incorrect application of the formula.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch9_t1_qe20',
    type: 'mcq',
    question: 'The angle of elevation of the top of a tower from a point 60 meters away from its base is 30°. The height of the tower is:',
    options: [
      '20√3 meters',
      '60/√3 meters',
      '30 meters',
      '20 meters'
    ],
    correctAnswer: '20√3 meters',
    explanation: 'Using tan30° = h/60, we get h = 60×tan30° = 60×(1/√3) = 20√3 meters.',
    wrongAnswerExplanations: {
      '60/√3 meters': 'This equals 20√3 but is expressed differently.',
      '30 meters': 'This is half the distance from the base.',
      '20 meters': 'This ignores the √3 factor in the tangent formula.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  }
];
