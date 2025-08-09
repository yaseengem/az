import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch9_t1_qm1',
    type: 'mcq',
    question: 'From the top of a lighthouse, the angle of depression of two ships on the same side of the lighthouse are 30° and 45° respectively. If the height of the lighthouse is 60 meters, the distance between the ships is:',
    options: [
      '60(√3 - 1) meters',
      '60 meters',
      '30√3 meters',
      '60√3 meters'
    ],
    correctAnswer: '60(√3 - 1) meters',
    explanation: 'First ship distance = 60×√3 meters and second ship distance = 60 meters. The difference is 60(√3-1) meters.',
    wrongAnswerExplanations: {
      '60 meters': 'This is the distance of the second ship from the lighthouse.',
      '30√3 meters': 'This is half the distance of the first ship from the lighthouse.',
      '60√3 meters': 'This is the distance of the first ship from the lighthouse.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch9_t1_qm2',
    type: 'mcq',
    question: 'Two buildings of heights 40 meters and 25 meters stand on the same side of a road. If the angles of elevation of their tops from a point on the road are 30° and 45° respectively, the distance between the buildings is:',
    options: [
      '15 meters',
      '25 - 40/√3 meters',
      '40/√3 - 25 meters',
      '40 - 25√3 meters'
    ],
    correctAnswer: '40/√3 - 25 meters',
    explanation: 'Distance from point to taller building = 40/tan30° = 40×√3. Distance to shorter building = 25/tan45° = 25. Difference = 40×√3-25 meters.',
    wrongAnswerExplanations: {
      '15 meters': 'This is the difference in heights of the buildings.',
      '25 - 40/√3 meters': 'This is incorrect and would give a negative value.',
      '40 - 25√3 meters': 'This uses incorrect trigonometric values.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch9_t1_qm3',
    type: 'mcq',
    question: 'A man on the deck of a ship, which is 10 meters above water level, observes that the angle of elevation of the top of a hill is 60° and the angle of depression of its base is 30°. The height of the hill is:',
    options: [
      '40 meters',
      '50 meters',
      '30 meters',
      '35 meters'
    ],
    correctAnswer: '40 meters',
    explanation: 'Let h be hill height. From the angles: tan60° = (h-10)/d and tan30° = 10/d, where d is distance. Solving gives h = 40 meters.',
    wrongAnswerExplanations: {
      '50 meters': 'This is the result of an incorrect algebraic manipulation.',
      '30 meters': 'This doesn\'t account for the ship\'s height above water.',
      '35 meters': 'This is an arbitrary value, not based on the correct solution.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch9_t1_qm4',
    type: 'mcq',
    question: 'A balloon is connected to a meteorological station by a cable inclined at 60° to the horizontal. The balloon is drifting horizontally away from the station at a rate of 2 meters per minute. At what rate is the cable being paid out when 100 meters of cable has been released?',
    options: [
      '1 meter/minute',
      '4 meters/minute',
      '2 meters/minute',
      '2√3 meters/minute'
    ],
    correctAnswer: '4 meters/minute',
    explanation: 'Using related rates: if x is horizontal distance and s is cable length, then s = x/cos60° = 2x. Rate = 2×(dx/dt) = 2×2 = 4 meters/minute.',
    wrongAnswerExplanations: {
      '1 meter/minute': 'This is half the rate at which the balloon is drifting.',
      '2 meters/minute': 'This is the rate of horizontal drift, not cable payment.',
      '2√3 meters/minute': 'This uses tan60° instead of 1/cos60° in the calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch9_t1_qm5',
    type: 'mcq',
    question: 'From the top of a 60-meter high building, the angles of depression of the top and bottom of another building are 30° and 60° respectively. The height of the other building is:',
    options: [
      '20 meters',
      '30 meters',
      '40 meters',
      '45 meters'
    ],
    correctAnswer: '20 meters',
    explanation: 'Let h be other building`s height, d distance between buildings. From depressions: tan30° = (60-h)/d and tan60° = 60/d. Solving gives h = 20 meters.',
    wrongAnswerExplanations: {
      '30 meters': 'This is half the height of the first building.',
      '40 meters': 'This is incorrect and doesn\'t satisfy the given conditions.',
      '45 meters': 'This is three-quarters of the height of the first building.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch9_t1_qm6',
    type: 'mcq',
    question: 'A 1.6-meter tall person stands 20 meters away from a tower. The angle of elevation from the person`s eyes to the top of the tower is 30°. If the person`s eyes are 1.5 meters above the ground, the height of the tower is:',
    options: [
      '13 meters',
      '11.5 meters',
      '12.1 meters',
      '13.05 meters'
    ],
    correctAnswer: '13.05 meters',
    explanation: 'Using tan30° = (h-1.5)/20, we get h-1.5 = 20×tan30° = 20/√3 ≈ 11.55, so h ≈ 13.05 meters.',
    wrongAnswerExplanations: {
      '13 meters': 'This is a rounded approximation of the correct answer.',
      '11.5 meters': 'This is only the height above the person\'s eyes.',
      '12.1 meters': 'This is an incorrect calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch9_t1_qm7',
    type: 'mcq',
    question: 'From a window 15 meters high above the ground, the angle of elevation of the top of a tower is 30° and the angle of depression of its foot is 45°. The height of the tower is:',
    options: [
      '15(1 + √3) meters',
      '30 meters',
      '15√3 meters',
      '45 meters'
    ],
    correctAnswer: '15(1 + √3) meters',
    explanation: 'Let h be tower height, d distance to tower. Using tan45° = 15/d and tan30° = (h-15)/d, we get h = 15 + 15×tan30° = 15(1+1/√3) = 15(1+√3/3) meters.',
    wrongAnswerExplanations: {
      '30 meters': 'This is double the height of the window.',
      '15√3 meters': 'This is part of the calculation, but not the complete answer.',
      '45 meters': 'This is three times the height of the window.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch9_t1_qm8',
    type: 'mcq',
    question: 'A straight highway leads to the foot of a tower. A man from the top of the tower observes a car at an angle of depression of 30° moving towards the tower with uniform speed. After 6 minutes, the angle of depression becomes 60°. The time taken by the car to reach the foot of the tower from this position is:',
    options: [
      '1.5 minutes',
      '2 minutes',
      '3 minutes',
      '2.5 minutes'
    ],
    correctAnswer: '2 minutes',
    explanation: 'Let h be tower height and v car speed. If d₁ = h×√3 and d₂ = h/√3 are distances, then (d₁-d₂)/v = 6 minutes. Time to cover d₂ = d₂/v = 2 minutes.',
    wrongAnswerExplanations: {
      '1.5 minutes': 'This is a quarter of the time taken to change from 30° to 60°.',
      '3 minutes': 'This is half the time taken to change from 30° to 60°.',
      '2.5 minutes': 'This is an incorrect calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch9_t1_qm9',
    type: 'mcq',
    question: 'A kite is flying at a height of 75 meters from the ground. The string attached to the kite is temporarily fixed at a point on the ground. The inclination of the string with the ground is 60°. Find the length of the string:',
    options: [
      '25√3 meters',
      '50√3 meters',
      '75√3 meters',
      '150 meters'
    ],
    correctAnswer: '75/sin60° meters',
    explanation: 'Using height = string length × sin60°, we get string length = 75/sin60° = 75/(√3/2) = 50√3/3 ≈ 86.6 meters.',
    wrongAnswerExplanations: {
      '25√3 meters': 'This is a third of the correct answer.',
      '50√3 meters': 'This is incorrect and uses cos60° instead of sin60°.',
      '150 meters': 'This is double the height, not the string length.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch9_t1_qm10',
    type: 'mcq',
    question: 'The angle of elevation of the top of a tower from two points at distances a and b from the base of the tower and in the same straight line with it are complementary. The height of the tower is:',
    options: [
      '√ab',
      '(a+b)/2',
      'a+b',
      '√(a²+b²)'
    ],
    correctAnswer: '√ab',
    explanation: 'If angles are α and β where α+β = 90°, then tan α = h/a and tan β = h/b. Since tan α × tan β = 1 (complementary angles), h²/(ab) = 1, so h = √ab.',
    wrongAnswerExplanations: {
      '(a+b)/2': 'This is the average of the distances, not related to height.',
      'a+b': 'This is the sum of the distances, not related to height.',
      '√(a²+b²)': 'This is the hypotenuse of a right triangle with sides a and b.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch9_t1_qm11',
    type: 'mcq',
    question: 'Two stations due north of a leaning tower which is leaning towards north, observe angles of elevation of the top as α and β. If the height of the tower is h, the distance between the two stations is:',
    options: [
      'h(cot α - cot β)',
      'h(cot β - cot α)',
      'h(tan β - tan α)',
      'h(tan α - tan β)'
    ],
    correctAnswer: 'h(cot α - cot β)',
    explanation: 'If distances from tower base to stations are d₁ and d₂, then d₁ = h/tan α and d₂ = h/tan β = h×cot β. Distance = d₂-d₁ = h(cot β-cot α).',
    wrongAnswerExplanations: {
      'h(cot β - cot α)': 'This gives a negative value as α > β.',
      'h(tan β - tan α)': 'This uses tan instead of cot and would give a negative value.',
      'h(tan α - tan β)': 'This uses tan instead of cot.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch9_t1_qm12',
    type: 'mcq',
    question: 'From the top of a building 60 meters high, the angles of depression of the top and bottom of a tower are 30° and 60° respectively. The height of the tower is:',
    options: [
      '20 meters',
      '30 meters',
      '40 meters',
      '80 meters'
    ],
    correctAnswer: '40 meters',
    explanation: 'Let h be tower height and d distance between buildings. From depressions: tan30° = (60-h)/d and tan60° = 60/d. Solving gives h = 40 meters.',
    wrongAnswerExplanations: {
      '20 meters': 'This is a third of the building\'s height.',
      '30 meters': 'This is half the building\'s height.',
      '80 meters': 'This is greater than the building\'s height, which contradicts the angles.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch9_t1_qm13',
    type: 'mcq',
    question: 'A ladder rests against a vertical wall at an angle α to the horizontal. Its foot is pulled away from the wall through a distance `a` so that it slides a distance `b` down the wall. The length of the ladder is:',
    options: [
      'a/sin α',
      'b/cos α',
      'b/sin α',
      'a/cos α'
    ],
    correctAnswer: 'b/sin α',
    explanation: 'If ladder length is L, then vertical drop = L×sin α = b. Therefore, L = b/sin α.',
    wrongAnswerExplanations: {
      'a/sin α': 'This relates to the horizontal movement, not the ladder length.',
      'b/cos α': 'This incorrectly uses cos instead of sin.',
      'a/cos α': 'This relates to the horizontal position, not the ladder length.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch9_t1_qm14',
    type: 'mcq',
    question: 'The angle of elevation of the top of a tower from a point A due south of the tower is α and from a point B due east of the tower is β. If AB = d, the height of the tower is:',
    options: [
      'd tan α tan β/√(tan² α + tan² β)',
      'd/√(tan² α + tan² β)',
      'd tan α tan β',
      'd√(tan² α + tan² β)'
    ],
    correctAnswer: 'd tan α tan β/√(tan² α + tan² β)',
    explanation: 'If tower height is h, distances are h/tan α and h/tan β. Using Pythagoras theorem and distance d, we get h = d tan α tan β/√(tan² α + tan² β).',
    wrongAnswerExplanations: {
      'd/√(tan² α + tan² β)': 'This is incorrect and doesn\'t satisfy the conditions.',
      'd tan α tan β': 'This is missing the denominator in the formula.',
      'd√(tan² α + tan² β)': 'This is incorrect and doesn\'t satisfy the conditions.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 150
  },
  {
    id: 'cl10_ch9_t1_qm15',
    type: 'mcq',
    question: 'A vertical tower stands on a horizontal plane and is surmounted by a vertical flagstaff of height h. At a point on the plane, the angles of elevation of the top and bottom of the flagstaff are α and β respectively. The height of the tower is:',
    options: [
      'h cot β/(cot β - cot α)',
      'h tan β/(tan α - tan β)',
      'h tan α/(tan α - tan β)',
      'h/(tan α - tan β)'
    ],
    correctAnswer: 'h tan β/(tan α - tan β)',
    explanation: 'Let tower height be H. From elevation angles: tan β = H/d and tan α = (H+h)/d, where d is distance. Solving gives H = h tan β/(tan α-tan β).',
    wrongAnswerExplanations: {
      'h cot β/(cot β - cot α)': 'This uses cot instead of tan and is incorrect.',
      'h tan α/(tan α - tan β)': 'This flips the formula and gives a negative result.',
      'h/(tan α - tan β)': 'This is missing the tan β factor in the numerator.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch9_t1_qm16',
    type: 'mcq',
    question: 'From a point on level ground, the angle of elevation of the top of a tower is 30°. On moving 30 meters towards the tower, the angle of elevation becomes 60°. The height of the tower is:',
    options: [
      '15√3 meters',
      '10√3 meters',
      '30 meters',
      '45 meters'
    ],
    correctAnswer: '15√3 meters',
    explanation: 'Let h be height and x distance after moving. Solving tan60° = h/x and tan30° = h/(x+30) gives x = 15 and h = 15√3 meters.',
    wrongAnswerExplanations: {
      '10√3 meters': 'This is two-thirds of the correct answer.',
      '30 meters': 'This is the distance moved, not the height.',
      '45 meters': 'This is 30 + 15, which is unrelated to the height.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch9_t1_qm17',
    type: 'mcq',
    question: 'An airplane is flying parallel to the ground. An observer on the ground notes that the angle of elevation of the airplane increases from 30° to 60° in 15 seconds. If the speed of the airplane is 360 km/hr, the height of the airplane is:',
    options: [
      '500√3 meters',
      '1500 meters',
      '1500/√3 meters',
      '1000 meters'
    ],
    correctAnswer: '500√3 meters',
    explanation: 'Speed = 360 km/hr = 100 m/s. In 15s, plane travels 1500m. Let h be height. Using tan30° = h/d₁ and tan60° = h/d₂, where d₁-d₂ = 1500, gives h = 500√3m.',
    wrongAnswerExplanations: {
      '1500 meters': 'This is the distance traveled by the airplane, not its height.',
      '1500/√3 meters': 'This results from incorrect algebraic manipulation.',
      '1000 meters': 'This is an arbitrary value not related to the solution.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch9_t1_qm18',
    type: 'mcq',
    question: 'The angles of elevation of the top of a tower from two points P and Q at distances of a and b from the base and on the same side of the tower are complementary. The height of the tower is:',
    options: [
      '√ab',
      '(a+b)/2',
      'a+b',
      'ab/(a+b)'
    ],
    correctAnswer: '√ab',
    explanation: 'Let angles be θ and (90°-θ). Then tanθ = h/a and tan(90°-θ) = cotθ = h/b. Since tanθ×cotθ = 1, h²/(ab) = 1, so h = √ab.',
    wrongAnswerExplanations: {
      '(a+b)/2': 'This is the average of the distances, not the height.',
      'a+b': 'This is the sum of the distances, not the height.',
      'ab/(a+b)': 'This is the harmonic mean of a and b, not the height.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch9_t1_qm19',
    type: 'mcq',
    question: 'A tree 12 meters high is broken by the wind in such a way that its top touches the ground and makes an angle of 60° with the ground. At what height from the bottom did the tree break?',
    options: [
      '6 meters',
      '8 meters',
      '4 meters',
      '10 meters'
    ],
    correctAnswer: '6 meters',
    explanation: 'Let h be height of breaking point. Using trigonometry for the broken part: (12-h)²+d² = h² and tan60° = (12-h)/d. Solving gives h = 6m.',
    wrongAnswerExplanations: {
      '8 meters': 'This is two-thirds of the tree\'s height.',
      '4 meters': 'This is one-third of the tree\'s height.',
      '10 meters': 'This is more than 80% of the tree\'s height, which is too high.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch9_t1_qm20',
    type: 'mcq',
    question: 'A statue stands on top of a pedestal. From a point on the ground, the angle of elevation of the top of the statue is 60° and the angle of elevation of the top of the pedestal is 45°. If the pedestal is 10 meters high, the height of the statue is:',
    options: [
      '10(√3-1) meters',
      '10 meters',
      '10√3 meters',
      '20 meters'
    ],
    correctAnswer: '10(√3-1) meters',
    explanation: 'Let h be statue height and d distance from pedestal. Using tan45° = 10/d and tan60° = (10+h)/d, solving gives h = 10(√3-1) meters.',
    wrongAnswerExplanations: {
      '10 meters': 'This equals the height of the pedestal, not the statue.',
      '10√3 meters': 'This is part of the calculation but not the final answer.',
      '20 meters': 'This is twice the height of the pedestal, not the statue height.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  }
];
