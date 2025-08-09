import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch9_t2_qe1',
    type: 'mcq',
    question: 'From the top of a building 60 m high, the angle of depression of a point on the ground is 30°. The distance of the point from the base of the building is:',
    options: [
      '60 m',
      '60√3 m',
      '30√3 m',
      '30 m'
    ],
    correctAnswer: '60√3 m',
    explanation: 'Using tan 30° = 60/x, we get x = 60/tan 30° = 60/(1/√3) = 60√3 m',
    wrongAnswerExplanations: {
      '60 m': 'This would be correct if the angle of depression was 45°, not 30°.',
      '30√3 m': 'This is half the correct answer - check your calculations.',
      '30 m': 'This is incorrect. The distance is not equal to half the height.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch9_t2_qe2',
    type: 'mcq',
    question: 'The angle of elevation of the top of a tower from a point on the ground is 30°. If the point is 50 m away from the base of the tower, the height of the tower is:',
    options: [
      '25 m',
      '50/√3 m',
      '50√3/3 m',
      '50/3 m'
    ],
    correctAnswer: '50/√3 m',
    explanation: 'Using tan 30° = h/50, we get h = 50 × tan 30° = 50 × (1/√3) = 50/√3 m',
    wrongAnswerExplanations: {
      '25 m': 'This is incorrect. The height is not half the distance.',
      '50√3/3 m': 'This is an incorrect simplification of 50/√3.',
      '50/3 m': 'This does not use the correct value for tan 30°.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch9_t2_qe3',
    type: 'mcq',
    question: 'A ladder 10 m long reaches a window 8 m above the ground. The distance of the foot of the ladder from the base of the wall is:',
    options: [
      '6 m',
      '8 m',
      '4 m',
      '2 m'
    ],
    correctAnswer: '6 m',
    explanation: 'Using Pythagoras theorem: 10² = 8² + x², so x² = 100 - 64 = 36, thus x = 6 m',
    wrongAnswerExplanations: {
      '8 m': 'This is the height the ladder reaches, not the distance from the wall.',
      '4 m': 'This is an incorrect calculation.',
      '2 m': 'This is an incorrect calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch9_t2_qe4',
    type: 'mcq',
    question: 'From a point on the ground, the angles of elevation of the bottom and top of a tower on the top of a building are 30° and 60° respectively. If the height of the tower is 50 m, the height of the building is:',
    options: [
      '50 m',
      '50(√3 - 1) m',
      '50(√3 + 1) m',
      '50/√3 m'
    ],
    correctAnswer: '50(√3 - 1) m',
    explanation: 'If h₁ is building height and h₂ is tower height: tan 30° = h₁/d, tan 60° = (h₁+h₂)/d. Solving gives h₁ = h₂(√3-1) = 50(√3-1) m',
    wrongAnswerExplanations: {
      '50 m': 'This assumes the building and tower have the same height, which is incorrect.',
      '50(√3 + 1) m': 'This uses an incorrect formula for the building height.',
      '50/√3 m': 'This is an incorrect calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch9_t2_qe5',
    type: 'mcq',
    question: 'A person observes the angle of elevation of the top of a tower as 30°. When he walks 20 m towards the tower, the angle of elevation becomes 60°. The height of the tower is:',
    options: [
      '10√3 m',
      '20 m',
      '10 m',
      '20√3 m'
    ],
    correctAnswer: '10√3 m',
    explanation: 'If x is distance from first position to tower base: tan 30° = h/x, tan 60° = h/(x-20). Solving gives h = 10√3 m',
    wrongAnswerExplanations: {
      '20 m': 'This is the distance walked, not the height of the tower.',
      '10 m': 'This assumes tan 30° = 1/2, which is incorrect.',
      '20√3 m': 'This is an incorrect calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch9_t2_qe6',
    type: 'mcq',
    question: 'The angle of depression of a car from the top of a tower 100 m high is 30°. The distance of the car from the base of the tower is:',
    options: [
      '100√3 m',
      '50√3 m',
      '100 m',
      '200 m'
    ],
    correctAnswer: '100√3 m',
    explanation: 'Using tan 30° = 100/d, we get d = 100/tan 30° = 100/(1/√3) = 100√3 m',
    wrongAnswerExplanations: {
      '50√3 m': 'This incorrectly halves the height before calculating.',
      '100 m': 'This would be true if the angle of depression was 45°.',
      '200 m': 'This is double the height, not related to trigonometric calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch9_t2_qe7',
    type: 'mcq',
    question: 'A kite is flying at a height of 60 m from the ground. The string makes an angle of 60° with the ground. The length of the string is:',
    options: [
      '60√3 m',
      '30√3 m',
      '60 m',
      '120 m'
    ],
    correctAnswer: '60√3/3 m',
    explanation: 'Using sin 60° = 60/l, we get l = 60/sin 60° = 60/(√3/2) = 60 × 2/√3 = 120/√3 = 40√3 m',
    wrongAnswerExplanations: {
      '60√3 m': 'This uses the tangent ratio incorrectly instead of sine.',
      '60 m': 'This is the height, not the string length.',
      '120 m': 'This is an incorrect calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch9_t2_qe8',
    type: 'mcq',
    question: 'From a point on the ground 20 m away from the foot of a tower, the angle of elevation of the top of the tower is 60°. The height of the tower is:',
    options: [
      '20√3 m',
      '10√3 m',
      '40 m',
      '20 m'
    ],
    correctAnswer: '20√3 m',
    explanation: 'Using tan 60° = h/20, we get h = 20 × tan 60° = 20 × √3 = 20√3 m',
    wrongAnswerExplanations: {
      '10√3 m': 'This incorrectly uses tan 30° instead of tan 60°.',
      '40 m': 'This is an incorrect calculation.',
      '20 m': 'This would be correct if the angle was 45°, not 60°.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch9_t2_qe9',
    type: 'mcq',
    question: 'A tree breaks due to storm and the broken part bends so that the top of the tree touches the ground making an angle of 30° with the ground. The distance from the foot of the tree to the point where the top touches the ground is 8 m. The height of the tree is:',
    options: [
      '16 m',
      '8√3 m',
      '16/√3 m',
      '8 m'
    ],
    correctAnswer: '16 m',
    explanation: 'If broken part = l, then sin 30° = 8/l, so l = 8/sin 30° = 8/(1/2) = 16 m',
    wrongAnswerExplanations: {
      '8√3 m': 'This uses tangent instead of sine in the calculation.',
      '16/√3 m': 'This uses cosine instead of sine in the calculation.',
      '8 m': 'This is the distance on the ground, not the height of the tree.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch9_t2_qe10',
    type: 'mcq',
    question: 'The angle of elevation of the sun when the length of the shadow of a pole is equal to its height is:',
    options: [
      '30°',
      '45°',
      '60°',
      '90°'
    ],
    correctAnswer: '45°',
    explanation: 'If h is height and s is shadow length, tan θ = h/s. When h = s, tan θ = 1, so θ = 45°',
    wrongAnswerExplanations: {
      '30°': 'This would make the shadow length √3 times the height.',
      '60°': 'This would make the shadow length 1/√3 times the height.',
      '90°': 'At this angle, there would be no shadow at all.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch9_t2_qe11',
    type: 'mcq',
    question: 'The horizontal distance between two towers is 60 m. The angle of elevation of the top of the taller tower from the top of the shorter tower is 30°. If the height of the taller tower is 150 m, the height of the shorter tower is:',
    options: [
      '115 m',
      '120 m',
      '125 m',
      '130 m'
    ],
    correctAnswer: '115 m',
    explanation: 'If h₁ and h₂ are heights of towers, tan 30° = (h₂-h₁)/60, so (h₂-h₁) = 60 × tan 30° = 60/√3 ≈ 35 m. Thus h₁ = 150 - 35 = 115 m',
    wrongAnswerExplanations: {
      '120 m': 'This uses an incorrect value for tan 30°.',
      '125 m': 'This is an incorrect calculation.',
      '130 m': 'This is an incorrect calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch9_t2_qe12',
    type: 'mcq',
    question: 'A man on the deck of a ship is 10 m above water level. He observes the angle of depression of a boat as 45°. The distance of the boat from the ship is:',
    options: [
      '10 m',
      '10√2 m',
      '5√2 m',
      '20 m'
    ],
    correctAnswer: '10 m',
    explanation: 'Using tan 45° = 10/d, we get d = 10/tan 45° = 10/1 = 10 m',
    wrongAnswerExplanations: {
      '10√2 m': 'This is the hypotenuse distance, not the horizontal distance.',
      '5√2 m': 'This is an incorrect calculation.',
      '20 m': 'This would be correct if the angle was approximately 26.6°, not 45°.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch9_t2_qe13',
    type: 'mcq',
    question: 'From the top of a cliff 90 m high, the angles of depression of the top and bottom of a tower are 30° and 60° respectively. The height of the tower is:',
    options: [
      '45 m',
      '60 m',
      '30 m',
      '40 m'
    ],
    correctAnswer: '40 m',
    explanation: 'If h is tower height: tan 30° = 90/d₁, tan 60° = 90/(d₁-h). Solving these equations gives h = 40 m',
    wrongAnswerExplanations: {
      '45 m': 'This is half the height of the cliff, but not the correct answer.',
      '60 m': 'This is 2/3 of the cliff height, but not the correct answer.',
      '30 m': 'This is 1/3 of the cliff height, but not the correct answer.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch9_t2_qe14',
    type: 'mcq',
    question: 'The angle of elevation of an airplane from a point on the ground is 60°. After flying for 30 seconds, the angle of elevation becomes 30°. If the airplane is flying at a constant height of 3000 m, the speed of the airplane is:',
    options: [
      '100 m/s',
      '200 m/s',
      '150 m/s',
      '173.2 m/s'
    ],
    correctAnswer: '173.2 m/s',
    explanation: 'At 60°, distance d₁ = 3000/tan 60° = 3000/√3. At 30°, d₂ = 3000/tan 30° = 3000×√3. Speed = (d₂-d₁)/30 = 3000×(√3-1/√3)/30 = 173.2 m/s',
    wrongAnswerExplanations: {
      '100 m/s': 'This is an incorrect calculation.',
      '200 m/s': 'This is an incorrect calculation.',
      '150 m/s': 'This is an incorrect calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch9_t2_qe15',
    type: 'mcq',
    question: 'Two buildings are 40 m apart. From the top of the first building, which is 30 m high, the angle of elevation of the top of the second building is 30°. The height of the second building is:',
    options: [
      '30 + 40/√3 m',
      '30 + 40√3 m',
      '30 + 20√3 m',
      '53.1 m'
    ],
    correctAnswer: '53.1 m',
    explanation: 'If h₂ is height of second building: tan 30° = (h₂-30)/40, so h₂-30 = 40 × tan 30° = 40/√3 ≈ 23.1 m. Thus h₂ = 30 + 23.1 = 53.1 m',
    wrongAnswerExplanations: {
      '30 + 40/√3 m': 'This is the exact expression, which equals approximately 53.1 m.',
      '30 + 40√3 m': 'This incorrectly uses 40√3 instead of 40/√3.',
      '30 + 20√3 m': 'This incorrectly uses 20√3 instead of 40/√3.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch9_t2_qe16',
    type: 'mcq',
    question: 'A man standing on the deck of a ship, which is 10 m above sea level, observes the angle of elevation of the top of a hill as 60° and the angle of depression of the base of the hill as 30°. The distance of the hill from the ship and the height of the hill are, respectively:',
    options: [
      '10√3 m and 10(1+√3) m',
      '10√3 m and 20√3 m',
      '10 m and 10(1+√3) m',
      '10 m and 20 m'
    ],
    correctAnswer: '10√3 m and 10(1+√3) m',
    explanation: 'For base: tan 30° = 10/d, so d = 10√3 m. For top: tan 60° = H/d, where H = height of hill - 10, so H = d × tan 60° = 10√3 × √3 = 30 m. Height = 30 + 10 = 10(1+√3) m',
    wrongAnswerExplanations: {
      '10√3 m and 20√3 m': 'The height calculation is incorrect.',
      '10 m and 10(1+√3) m': 'The distance calculation uses tan 45° instead of tan 30°.',
      '10 m and 20 m': 'Both the distance and height calculations are incorrect.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch9_t2_qe17',
    type: 'mcq',
    question: 'A straight highway passes through the foot of a tower. A man on the top of the tower observes a car at an angle of depression of 30° which changes to 60° after 18 seconds. If the car is moving with uniform speed, the time taken by the car to reach the tower from this point is:',
    options: [
      '6 seconds',
      '9 seconds',
      '12 seconds',
      '3 seconds'
    ],
    correctAnswer: '9 seconds',
    explanation: 'If car is at distances x₁ and x₂ at the two observations: tan 30° = h/x₁ and tan 60° = h/x₂, so x₁/x₂ = tan 60°/tan 30° = 3/1. The car covers 2x₂/3 in 18s, so it will take (18/3) = 9s to reach the tower',
    wrongAnswerExplanations: {
      '6 seconds': 'This incorrectly assumes the car travels at twice its actual speed.',
      '12 seconds': 'This incorrectly assumes the car travels at 2/3 its actual speed.',
      '3 seconds': 'This incorrectly assumes the car travels at 6 times its actual speed.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch9_t2_qe18',
    type: 'mcq',
    question: 'The angle of elevation of the top of a tower from a point on the ground is 45°. After moving 10 m towards the base of the tower, the angle of elevation becomes 60°. The height of the tower is:',
    options: [
      '10(√3 + 1) m',
      '10√3 m',
      '10(√3 - 1) m',
      '20 m'
    ],
    correctAnswer: '10(√3 + 1) m',
    explanation: 'Let d be distance from second position to tower and h be height. Then tan 60° = h/d and tan 45° = h/(d+10), which gives h = 10(√3+1) m',
    wrongAnswerExplanations: {
      '10√3 m': 'This ignores the first angle measurement.',
      '10(√3 - 1) m': 'This uses an incorrect formula.',
      '20 m': 'This is an incorrect calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch9_t2_qe19',
    type: 'mcq',
    question: 'A ladder 13 m long reaches a window which is 12 m above the ground on one side of a street. Keeping the foot of the ladder at the same point, if the ladder is turned to the other side of the street, it reaches a window 5 m high. The width of the street is:',
    options: [
      '12 m',
      '13 m',
      '5 m',
      '8.5 m'
    ],
    correctAnswer: '12 m',
    explanation: 'Using Pythagoras theorem: 13² = 12² + x₁² and 13² = 5² + (w-x₁)², where w is street width. Solving gives w = 12 m',
    wrongAnswerExplanations: {
      '13 m': 'This is the length of the ladder, not the width of the street.',
      '5 m': 'This is the height of the second window, not the width of the street.',
      '8.5 m': 'This is an incorrect calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch9_t2_qe20',
    type: 'mcq',
    question: 'From the top of a tower 15 m high, the angle of depression of an object is observed to be 45°. The distance of the object from the foot of the tower is:',
    options: [
      '15 m',
      '15√2 m',
      '30 m',
      '7.5 m'
    ],
    correctAnswer: '15 m',
    explanation: 'Using tan 45° = 15/d, we get d = 15/tan 45° = 15/1 = 15 m',
    wrongAnswerExplanations: {
      '15√2 m': 'This is the slant distance, not the horizontal distance.',
      '30 m': 'This is twice the height, not related to the angle of depression.',
      '7.5 m': 'This is half the height, not related to the angle of depression.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  }
];
