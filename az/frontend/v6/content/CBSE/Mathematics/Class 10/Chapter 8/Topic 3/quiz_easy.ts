import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch8_t3_qe1',
    type: 'mcq',
    question: 'From the top of a building 60 meters high, the angle of depression to a point on the ground is 30°. How far is the point from the base of the building?',
    options: [
      '60√3 meters',
      '30√3 meters',
      '20√3 meters',
      '40√3 meters'
    ],
    correctAnswer: '60√3 meters',
    explanation: 'Distance = height/tan(angle of depression) = 60/tan(30°) = 60/(1/√3) = 60√3 meters',
    wrongAnswerExplanations: {
      '30√3 meters': 'This would be correct if the height was 30 meters.',
      '20√3 meters': 'This is an incorrect calculation.',
      '40√3 meters': 'This would be correct if the height was 40 meters.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch8_t3_qe2',
    type: 'mcq',
    question: 'If the angle of elevation of the top of a tower from a point 30 meters away from its base is 45°, what is the height of the tower?',
    options: [
      '30 meters',
      '15 meters',
      '60 meters',
      '45 meters'
    ],
    correctAnswer: '30 meters',
    explanation: 'Height = distance × tan(angle of elevation) = 30 × tan(45°) = 30 × 1 = 30 meters',
    wrongAnswerExplanations: {
      '15 meters': 'This would be true if the angle was approximately 26.6°.',
      '60 meters': 'This would be true if the angle was approximately 63.4°.',
      '45 meters': 'This would be true if the angle was approximately 56.3°.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch8_t3_qe3',
    type: 'mcq',
    question: 'A ladder of length 10 meters is placed against a vertical wall such that it reaches a height of 8 meters on the wall. What is the angle that the ladder makes with the ground?',
    options: [
      '53.1°',
      '36.9°',
      '45°',
      '60°'
    ],
    correctAnswer: '53.1°',
    explanation: 'Using sin(θ) = 8/10 = 0.8, so θ = sin⁻¹(0.8) = 53.1°',
    wrongAnswerExplanations: {
      '36.9°': 'This is the complementary angle to the correct answer.',
      '45°': 'This would be true if height and distance were equal.',
      '60°': 'This would be true if height was approximately 8.7 meters.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch8_t3_qe4',
    type: 'mcq',
    question: 'From a point on the ground, the angles of elevation of the top and bottom of a flagstaff on a building are 60° and 45° respectively. If the height of the flagstaff is 10 meters, how tall is the building?',
    options: [
      '(10√3 - 10) meters',
      '10(√3 - 1) meters',
      '10(√3 + 1) meters',
      '10(2 - √3) meters'
    ],
    correctAnswer: '10(√3 - 1) meters',
    explanation: 'Using properties of similar triangles and tangent values: building height = 10(tan60° - tan45°)/(tan45°) = 10(√3 - 1) meters',
    wrongAnswerExplanations: {
      '(10√3 - 10) meters': 'This is the same as the correct answer but written differently.',
      '10(√3 + 1) meters': 'This uses incorrect arithmetic with the tangent values.',
      '10(2 - √3) meters': 'This is an incorrect calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch8_t3_qe5',
    type: 'mcq',
    question: 'From a point on level ground, the angle of elevation of the top of a tower is 30°. If the observer moves 20 meters closer to the tower, the angle of elevation becomes 60°. What is the height of the tower?',
    options: [
      '10√3 meters',
      '20 meters',
      '10 meters',
      '20√3 meters'
    ],
    correctAnswer: '10√3 meters',
    explanation: 'Let original distance be x. Then x·tan30° = (x-20)·tan60°. Solving gives x = 20√3, so height = 20√3·tan30° = 10√3 meters',
    wrongAnswerExplanations: {
      '20 meters': 'This is an incorrect calculation.',
      '10 meters': 'This is an incorrect calculation.',
      '20√3 meters': 'This is the original distance from the tower, not the height.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch8_t3_qe6',
    type: 'mcq',
    question: 'A person observes the angle of elevation of a tower as 30°. After walking 40 meters toward the tower, the angle of elevation becomes 60°. What is the height of the tower?',
    options: [
      '20√3 meters',
      '40√3 meters',
      '20 meters',
      '40 meters'
    ],
    correctAnswer: '20√3 meters',
    explanation: 'Using tan30° = h/(d+40) and tan60° = h/d where h is height and d is distance. Solving gives h = 20√3 meters',
    wrongAnswerExplanations: {
      '40√3 meters': 'This is an incorrect calculation.',
      '20 meters': 'This would be true if the second angle was approximately 45°.',
      '40 meters': 'This is the distance walked, not the height.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch8_t3_qe7',
    type: 'mcq',
    question: 'The angle of elevation of the top of a tower from a point A on the ground is 30°. From another point B, 20 meters vertically above A, the angle of elevation is 15°. What is the height of the tower?',
    options: [
      '20 + 20/tan15° meters',
      '20 + 20·tan15° meters',
      '20 - 20·tan15° meters',
      '20 + 20·sin15° meters'
    ],
    correctAnswer: '20 + 20/tan15° meters',
    explanation: 'If B is 20m above A, and tower height is h, then tan15° = (h-20)/d where d is the horizontal distance. Also, tan30° = h/d. Solving yields h = 20 + 20/tan15°',
    wrongAnswerExplanations: {
      '20 + 20·tan15° meters': 'This uses tan incorrectly in the formula.',
      '20 - 20·tan15° meters': 'This uses incorrect arithmetic in the formula.',
      '20 + 20·sin15° meters': 'This uses sin instead of tan in the formula.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch8_t3_qe8',
    type: 'mcq',
    question: 'From the top of a 15-meter tall building, the angle of depression of a car is 30°. How far is the car from the building?',
    options: [
      '15√3 meters',
      '15/√3 meters',
      '30 meters',
      '45 meters'
    ],
    correctAnswer: '15√3 meters',
    explanation: 'Distance = height/tan(angle of depression) = 15/tan30° = 15/(1/√3) = 15√3 meters',
    wrongAnswerExplanations: {
      '15/√3 meters': 'This equals 15/√3 = 15·√3/3 ≈ 8.7 meters, which is incorrect.',
      '30 meters': 'This would be true if the angle was 45°.',
      '45 meters': 'This would be true if the angle was approximately 18.4°.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch8_t3_qe9',
    type: 'mcq',
    question: 'A kite is flying at a height of 45 meters from the ground. The string attached to the kite is taut and makes an angle of 60° with the horizontal. If the wind moves the kite horizontally away from the person flying it, how long is the string?',
    options: [
      '45/sin60° meters',
      '45·sin60° meters',
      '45/cos60° meters',
      '45·cos60° meters'
    ],
    correctAnswer: '45/sin60° meters',
    explanation: 'Using sin60° = 45/string length. Therefore, string length = 45/sin60° = 45/(√3/2) = 90/√3 = 30√3 meters',
    wrongAnswerExplanations: {
      '45·sin60° meters': 'This equals 45·√3/2 ≈ 39 meters, which is incorrect.',
      '45/cos60° meters': 'This equals 45/0.5 = 90 meters, which is incorrect.',
      '45·cos60° meters': 'This equals 45·0.5 = 22.5 meters, which is incorrect.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch8_t3_qe10',
    type: 'mcq',
    question: 'The angle of elevation of the top of a tower from a point on the ground 200 meters away from the base of the tower is 30°. What is the height of the tower?',
    options: [
      '200/√3 meters',
      '200·√3 meters',
      '100·√3 meters',
      '400/√3 meters'
    ],
    correctAnswer: '200/√3 meters',
    explanation: 'Height = distance × tan(angle of elevation) = 200 × tan30° = 200 × (1/√3) = 200/√3 meters',
    wrongAnswerExplanations: {
      '200·√3 meters': 'This would be true if the angle was 60°.',
      '100·√3 meters': 'This is incorrect; it\'s half of 200·√3.',
      '400/√3 meters': 'This is twice the correct answer.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch8_t3_qe11',
    type: 'mcq',
    question: 'A ladder 10 meters long is leaning against a wall. The foot of the ladder is 6 meters from the wall. What angle does the ladder make with the wall?',
    options: [
      '53.1°',
      '36.9°',
      '30°',
      '60°'
    ],
    correctAnswer: '36.9°',
    explanation: 'Using cos(θ) = 6/10 = 0.6, where θ is the angle with wall, so θ = cos⁻¹(0.6) = 36.9°',
    wrongAnswerExplanations: {
      '53.1°': 'This would be the angle with the ground, not the wall.',
      '30°': 'This would be true if the distance was 5√3 ≈ 8.7 meters.',
      '60°': 'This would be true if the distance was 5 meters.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch8_t3_qe12',
    type: 'mcq',
    question: 'From a point 60 meters away from the foot of a tower, the angle of elevation of the top of the tower is 30°. The height of the tower is:',
    options: [
      '60/√3 meters',
      '30√3 meters',
      '20√3 meters',
      '60 meters'
    ],
    correctAnswer: '60/√3 meters',
    explanation: 'Height = distance × tan(angle of elevation) = 60 × tan30° = 60 × (1/√3) = 60/√3 = 20√3 meters',
    wrongAnswerExplanations: {
      '30√3 meters': 'This is 1.5 times the correct answer.',
      '20√3 meters': 'This is equal to 60/√3 but written differently.',
      '60 meters': 'This would be true if the angle was 45°.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch8_t3_qe13',
    type: 'mcq',
    question: 'The angle of elevation of the top of a building from a point on the ground, which is 30 meters away from the foot of the building is 45°. The height of the building is:',
    options: [
      '30 meters',
      '15√2 meters',
      '60 meters',
      '30√2 meters'
    ],
    correctAnswer: '30 meters',
    explanation: 'Height = distance × tan(angle of elevation) = 30 × tan45° = 30 × 1 = 30 meters',
    wrongAnswerExplanations: {
      '15√2 meters': 'This is approximately 21.2 meters, which is incorrect.',
      '60 meters': 'This is twice the correct answer.',
      '30√2 meters': 'This would be true if the angle was approximately 54.7°.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch8_t3_qe14',
    type: 'mcq',
    question: 'A man standing on the deck of a ship is 10 meters above water level. He observes the angle of depression of a boat as 45°. How far is the boat from the ship?',
    options: [
      '10 meters',
      '5 meters',
      '10√2 meters',
      '20 meters'
    ],
    correctAnswer: '10 meters',
    explanation: 'Distance = height/tan(angle of depression) = 10/tan45° = 10/1 = 10 meters',
    wrongAnswerExplanations: {
      '5 meters': 'This would be true if the angle was approximately 63.4°.',
      '10√2 meters': 'This would be the hypotenuse, not the horizontal distance.',
      '20 meters': 'This would be true if the angle was approximately 26.6°.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch8_t3_qe15',
    type: 'mcq',
    question: 'From a point P on the ground, the angle of elevation of the top of a 25-meter tall building is 30°. How far is P from the building?',
    options: [
      '25√3 meters',
      '50 meters',
      '25 meters',
      '50√3 meters'
    ],
    correctAnswer: '25√3 meters',
    explanation: 'Distance = height/tan(angle of elevation) = 25/tan30° = 25/(1/√3) = 25√3 meters',
    wrongAnswerExplanations: {
      '50 meters': 'This would be true if the angle was approximately 26.6°.',
      '25 meters': 'This would be true if the angle was 45°.',
      '50√3 meters': 'This is twice the correct answer.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch8_t3_qe16',
    type: 'mcq',
    question: 'A ladder placed against a wall makes an angle of 60° with the horizontal ground. If the foot of the ladder is 2 meters away from the wall, the length of the ladder is:',
    options: [
      '4 meters',
      '2√3 meters',
      '3 meters',
      '4√3 meters'
    ],
    correctAnswer: '4 meters',
    explanation: 'Length = distance/cos60° = 2/0.5 = 4 meters',
    wrongAnswerExplanations: {
      '2√3 meters': 'This would be the height up the wall, not the length of the ladder.',
      '3 meters': 'This is an incorrect calculation.',
      '4√3 meters': 'This is an incorrect calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch8_t3_qe17',
    type: 'mcq',
    question: 'From the top of a 100-meter tall lighthouse, the angle of depression of a ship is 45°. The distance of the ship from the lighthouse is:',
    options: [
      '100 meters',
      '50 meters',
      '100√2 meters',
      '200 meters'
    ],
    correctAnswer: '100 meters',
    explanation: 'Distance = height/tan(angle of depression) = 100/tan45° = 100/1 = 100 meters',
    wrongAnswerExplanations: {
      '50 meters': 'This would be true if the angle was approximately 63.4°.',
      '100√2 meters': 'This would be the straight-line distance, not the horizontal distance.',
      '200 meters': 'This would be true if the angle was approximately 26.6°.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch8_t3_qe18',
    type: 'mcq',
    question: 'Two buildings are 40 meters apart. From the top of the shorter building, which is 60 meters high, the angle of elevation of the top of the taller building is 30°. The height of the taller building is:',
    options: [
      '60 + 40/√3 meters',
      '60 + 20√3 meters',
      '60 - 40/√3 meters',
      '40√3 meters'
    ],
    correctAnswer: '60 + 40/√3 meters',
    explanation: 'If tan30° = h/40, where h is height difference, then h = 40·tan30° = 40/√3. So total height = 60 + 40/√3 meters',
    wrongAnswerExplanations: {
      '60 + 20√3 meters': 'This uses an incorrect calculation for the height difference.',
      '60 - 40/√3 meters': 'This subtracts instead of adding the height difference.',
      '40√3 meters': 'This would be the height difference if angle was 60°, not the total height.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch8_t3_qe19',
    type: 'mcq',
    question: 'A 20-meter ladder is placed against a vertical wall such that its foot is 5 meters away from the wall. The angle made by the ladder with the ground is:',
    options: [
      '75.5°',
      '14.5°',
      '60°',
      '45°'
    ],
    correctAnswer: '75.5°',
    explanation: 'Using cos(θ) = 5/20 = 0.25, where θ is the angle with ground, so θ = cos⁻¹(0.25) = 75.5°',
    wrongAnswerExplanations: {
      '14.5°': 'This would be the angle with the wall, not the ground.',
      '60°': 'This would be true if the distance was 10 meters.',
      '45°': 'This would be true if the distance was approximately 14.1 meters.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch8_t3_qe20',
    type: 'mcq',
    question: 'From the top of a tower 50 meters high, the angle of depression of an object on the ground is 60°. The distance of the object from the base of the tower is:',
    options: [
      '50/√3 meters',
      '25√3 meters',
      '50√3 meters',
      '50 meters'
    ],
    correctAnswer: '50/√3 meters',
    explanation: 'Distance = height/tan(angle of depression) = 50/tan60° = 50/√3 meters',
    wrongAnswerExplanations: {
      '25√3 meters': 'This would be true if the height was 25 meters.',
      '50√3 meters': 'This would be true if the angle was 30°.',
      '50 meters': 'This would be true if the angle was 45°.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  }
];
