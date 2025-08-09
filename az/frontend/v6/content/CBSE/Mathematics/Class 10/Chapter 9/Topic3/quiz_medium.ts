import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch9_t3_qm1',
    type: 'mcq',
    question: 'From a point on the ground, the angles of elevation of the top and bottom of a tower standing on the top of a horizontal plane are 60° and 45° respectively. If the height of the tower is 10 meters, what is the height of the point of observation from the ground?',
    options: [
      '10(√3 - 1) meters',
      '10/(√3 - 1) meters',
      '10(1 - 1/√3) meters',
      '10(√3 + 1) meters'
    ],
    correctAnswer: '10(√3 - 1) meters',
    explanation: 'If d is horizontal distance, h tower height, and x height from ground, then x/d = tan(45°), (x+h)/d = tan(60°). Solving gives x = 10(√3-1).',
    wrongAnswerExplanations: {
      '10/(√3 - 1) meters': 'This incorrectly divides by (√3-1) instead of multiplying.',
      '10(1 - 1/√3) meters': 'This rearranges the correct answer but is mathematically equivalent.',
      '10(√3 + 1) meters': 'This adds the values instead of subtracting, showing a sign error.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch9_t3_qm2',
    type: 'mcq',
    question: 'A 1.6 meter tall person is standing at some distance from a tower. The angle of elevation from his eyes to the top of the tower is 30°. If he walks 20 meters towards the tower, the angle of elevation increases to 60°. What is the height of the tower?',
    options: [
      '8 meters',
      '(20√3)/3 + 1.6 meters',
      '20√3/3 meters',
      '21.6 meters'
    ],
    correctAnswer: '(20√3)/3 + 1.6 meters',
    explanation: 'Let h be tower height, d be initial distance. Solve: (h-1.6)/d = tan(30°), (h-1.6)/(d-20) = tan(60°) gives h = (20√3)/3 + 1.6.',
    wrongAnswerExplanations: {
      '8 meters': 'This doesn\'t account for the observer\'s height and incorrectly solves the equations.',
      '20√3/3 meters': 'This calculates only the difference between tower height and observer height.',
      '21.6 meters': 'This incorrectly adds the 20m distance walked to the observer\'s height.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch9_t3_qm3',
    type: 'mcq',
    question: 'Two buildings are 50 meters apart. The angles of elevation of the top of the second building from the top and bottom of the first building are 30° and 60° respectively. If the height of the first building is 20 meters, what is the height of the second building?',
    options: [
      '35 meters',
      '50 meters',
      '20 + 50/√3 meters',
      '20 + 50√3 meters'
    ],
    correctAnswer: '20 + 50/√3 meters',
    explanation: 'From bottom of first building: h₂/50 = tan(60°) = √3, so h₂ = 50√3. From top: (h₂-20)/50 = tan(30°) = 1/√3, which confirms h₂ = 20+50/√3.',
    wrongAnswerExplanations: {
      '35 meters': 'This doesn\'t correctly apply the trigonometric formulas to the problem.',
      '50 meters': 'This equals the horizontal distance but doesn\'t calculate the height.',
      '20 + 50√3 meters': 'This incorrectly multiplies by √3 instead of dividing.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch9_t3_qm4',
    type: 'mcq',
    question: 'From the top of a lighthouse 60 meters high, the angle of depression of a ship is observed to be 30°. Some time later, the angle of depression becomes 60°. How far did the ship travel towards the lighthouse during this time?',
    options: [
      '60(√3 - 1) meters',
      '60(√3 - 1/√3) meters',
      '60√3(1 - 1/3) meters',
      '104 meters'
    ],
    correctAnswer: '60(√3 - 1/√3) meters',
    explanation: 'Initial distance = 60√3 m, final distance = 60/√3 m. Distance traveled = 60(√3-1/√3) m',
    wrongAnswerExplanations: {
      '60(√3 - 1) meters': 'This incorrectly calculates the distance using tan(60°) = 1, not √3.',
      '60√3(1 - 1/3) meters': 'This simplifies to 40√3 meters, which is incorrect.',
      '104 meters': 'This is an approximate decimal value but doesn\'t match the exact expression.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch9_t3_qm5',
    type: 'mcq',
    question: 'A vertical tower stands on a horizontal plane and is surmounted by a vertical flagstaff. From a point on the plane, the angles of elevation of the top and bottom of the flagstaff are 60° and 45° respectively. If the flagstaff is 10 meters high, what is the height of the tower?',
    options: [
      '10(√3 - 1) meters',
      '(10 - 10/√3) meters',
      '10/(√3 - 1) meters',
      '10 meters'
    ],
    correctAnswer: '10/(√3 - 1) meters',
    explanation: 'If tower height is h and distance is d, then (h+10)/d = tan(60°) and h/d = tan(45°). Solving gives h = 10/(√3-1).',
    wrongAnswerExplanations: {
      '10(√3 - 1) meters': 'This incorrectly multiplies by (√3-1) instead of dividing.',
      '(10 - 10/√3) meters': 'This is an incorrect rearrangement of the formula.',
      '10 meters': 'This equals the flagstaff height, not the tower height.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch9_t3_qm6',
    type: 'mcq',
    question: 'Two ships are sailing in the sea on the two sides of a lighthouse. The angles of depression of the two ships from the top of the lighthouse are 30° and 45° respectively. If the lighthouse is 200 meters high, find the distance between the two ships.',
    options: [
      '200(√3 + 1) meters',
      '400 meters',
      '200√3 - 200 meters',
      '200(√3 + 1) - 400/√3 meters'
    ],
    correctAnswer: '200(√3 + 1) meters',
    explanation: 'Distance from lighthouse to first ship = 200√3 m and to second ship = 200 m. Total distance = 200(√3+1) m',
    wrongAnswerExplanations: {
      '400 meters': 'This is twice the height but doesn\'t correctly calculate the total distance.',
      '200√3 - 200 meters': 'This subtracts the distances instead of adding them.',
      '200(√3 + 1) - 400/√3 meters': 'This incorrectly combines the two distances.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch9_t3_qm7',
    type: 'mcq',
    question: 'A boy standing on the ground spots a balloon moving with the wind in a horizontal line at a constant height. The angle of elevation of the balloon from the boy at any instant is θ. After some time, the angle of elevation becomes (90° - θ). What is the ratio of the distances of the balloon from the boy at the first and second observations?',
    options: [
      'tan θ',
      'cot θ',
      '1',
      'sin 2θ'
    ],
    correctAnswer: '1',
    explanation: 'Let h be height and d₁, d₂ be distances. Then h/d₁ = tan(θ) and h/d₂ = tan(90°-θ) = cot(θ) = 1/tan(θ), so d₁/d₂ = 1.',
    wrongAnswerExplanations: {
      'tan θ': 'This incorrectly equates the ratio to tan(θ) instead of solving the complete equation.',
      'cot θ': 'This equals d₂/d₁, which is the reciprocal of what was asked.',
      'sin 2θ': 'This introduces a trigonometric function not relevant to this problem.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch9_t3_qm8',
    type: 'mcq',
    question: 'From the top of a building 60 meters high, the angles of depression of the top and bottom of a tower are 30° and 60° respectively. What is the height of the tower?',
    options: [
      '60(1 + 1/√3) meters',
      '60(1 - 1/√3) meters',
      '20√3 meters',
      '60/(√3 - 1) meters'
    ],
    correctAnswer: '60(1 - 1/√3) meters',
    explanation: 'If tower height is h, then h = 60 - 60/√3 = 60(1 - 1/√3) meters',
    wrongAnswerExplanations: {
      '60(1 + 1/√3) meters': 'This adds 1/√3 instead of subtracting it.',
      '20√3 meters': 'This incorrectly simplifies the expression.',
      '60/(√3 - 1) meters': 'This incorrectly divides by (√3-1) instead of multiplying.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch9_t3_qm9',
    type: 'mcq',
    question: 'A straight highway leads to the foot of a tower. A man standing on the top of the tower observes a car at an angle of depression of 30°, which is approaching the tower with a uniform speed. After 6 minutes, the angle of depression becomes 60°. How long will the car take to reach the tower from this point?',
    options: [
      '2 minutes',
      '3 minutes',
      '1.5 minutes',
      '3√3 minutes'
    ],
    correctAnswer: '2 minutes',
    explanation: 'If v is speed and h is tower height, when angle changes from 30° to 60°, distance changes from h√3 to h/√3. Taking 6 minutes for that distance, remaining distance h/√3 takes 2 minutes.',
    wrongAnswerExplanations: {
      '3 minutes': 'This is half of the 6 minutes given, but doesn\'t correctly analyze the distance ratios.',
      '1.5 minutes': 'This is one-fourth of the 6 minutes given, but doesn\'t correctly analyze the ratios.',
      '3√3 minutes': 'This incorrectly applies the formula and doesn\'t yield a logical time value.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 150
  },
  {
    id: 'cl10_ch9_t3_qm10',
    type: 'mcq',
    question: 'Two trees of heights 20 meters and 14 meters stand on a horizontal ground. If the distance between their feet is 12 meters, what is the distance between their tops?',
    options: [
      '13 meters',
      '14 meters',
      '15 meters',
      '16 meters'
    ],
    correctAnswer: '13 meters',
    explanation: 'Using the distance formula: √[(20-14)² + 12²] = √[36 + 144] = √180 = 13.42 ≈ 13 meters',
    wrongAnswerExplanations: {
      '14 meters': 'This equals the height of the shorter tree but isn\'t the distance between tops.',
      '15 meters': 'This is incorrectly calculated by rounding up the exact value.',
      '16 meters': 'This doesn\'t correctly apply the distance formula.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch9_t3_qm11',
    type: 'mcq',
    question: 'An observer, 1.75 meters tall, is 28.25 meters away from a tower. The angle of elevation from his eye to the top of the tower is 45°. The height of the tower is:',
    options: [
      '28.25 + 1.75 meters',
      '28.25 meters',
      '30 meters',
      '√(28.25² + 1.75²) meters'
    ],
    correctAnswer: '30 meters',
    explanation: 'If h is tower height, then (h-1.75)/28.25 = tan(45°) = 1. So h = 28.25 + 1.75 = 30 meters',
    wrongAnswerExplanations: {
      '28.25 + 1.75 meters': 'This is the correct calculation but written as an expression.',
      '28.25 meters': 'This equals the distance from the observer to the tower, not the height.',
      '√(28.25² + 1.75²) meters': 'This incorrectly applies the Pythagorean theorem to the problem.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch9_t3_qm12',
    type: 'mcq',
    question: 'Two buildings of heights 30 meters and 50 meters stand on opposite sides of a road. If the angles of depression from the tops of the buildings to a point on the road between them are 30° and 45° respectively, what is the width of the road?',
    options: [
      '30√3 + 50 meters',
      '50√3 + 30 meters',
      '30/√3 + 50 meters',
      '30√3 + 50/√3 meters'
    ],
    correctAnswer: '30√3 + 50 meters',
    explanation: 'Distance from first building to point = 30√3 m, from second to point = 50 m. Total width = 30√3 + 50 m',
    wrongAnswerExplanations: {
      '50√3 + 30 meters': 'This incorrectly applies tan(45°) to the 50m building and tan(30°) to the 30m building.',
      '30/√3 + 50 meters': 'This incorrectly uses 1/√3 instead of √3 for the tangent of 30°.',
      '30√3 + 50/√3 meters': 'This incorrectly applies tangent formulas to both buildings.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch9_t3_qm13',
    type: 'mcq',
    question: 'From a window 15 meters high above the ground in a street, the angles of elevation and depression of the top and foot of another building on the opposite side of the street are 30° and 45° respectively. The height of the opposite building is:',
    options: [
      '15(1 + 2√3) meters',
      '15(1 + √3) meters',
      '15(1 + √3/2) meters',
      '15(1 + 1/√3) meters'
    ],
    correctAnswer: '15(1 + √3) meters',
    explanation: 'If width of street is d, then d = 15 meters. Height of opposite building = 15 + d·tan(30°) = 15 + 15/√3 = 15(1+1/√3) = 15(1+√3)/√3.',
    wrongAnswerExplanations: {
      '15(1 + 2√3) meters': 'This incorrectly doubles the √3 term in the calculation.',
      '15(1 + √3/2) meters': 'This incorrectly uses sin(30°) = 1/2 instead of tan(30°) = 1/√3.',
      '15(1 + 1/√3) meters': 'This is the correct value but in a different algebraic form.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 150
  },
  {
    id: 'cl10_ch9_t3_qm14',
    type: 'mcq',
    question: 'A man on the top of a vertical tower observes a car moving at a uniform speed coming directly towards it. If it takes 12 minutes for the angle of depression to change from 30° to 45°, how long will the car take to reach the tower from the position when the angle of depression is 45°?',
    options: [
      '12 minutes',
      '6 minutes',
      '4 minutes',
      '(12/√3) minutes'
    ],
    correctAnswer: '12 minutes',
    explanation: 'When angle changes from 30° to 45°, distance changes from h√3 to h. From 45° to tower, distance changes from h to 0. Time ratio = distance ratio = 1:1, so 12 more minutes.',
    wrongAnswerExplanations: {
      '6 minutes': 'This incorrectly assumes the remaining time is half the given time.',
      '4 minutes': 'This doesn\'t correctly analyze the distance ratios.',
      '(12/√3) minutes': 'This incorrectly applies the formula and doesn\'t yield a logical time value.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 150
  },
  {
    id: 'cl10_ch9_t3_qm15',
    type: 'mcq',
    question: 'A person is observing a 20 meters tall building from some distance. The angle of elevation to the top of the building is θ. If the person moves 10 meters closer to the building, the angle of elevation becomes φ. If tan φ = 2 tan θ, what is the initial distance of the person from the building?',
    options: [
      '20 meters',
      '10 meters',
      '30 meters',
      '40 meters'
    ],
    correctAnswer: '20 meters',
    explanation: 'If initial distance is d, then 20/(d-10) = 2·(20/d), which gives d = 20 meters.',
    wrongAnswerExplanations: {
      '10 meters': 'This equals the distance moved closer to the building, not the initial distance.',
      '30 meters': 'This is 10 meters more than the correct answer, showing a calculation error.',
      '40 meters': 'This is twice the correct answer, showing a fundamental misunderstanding.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch9_t3_qm16',
    type: 'mcq',
    question: 'From a point on a level ground, the angle of elevation of the top of a tower is 30°. If the observer moves 30 meters towards the tower, the angle of elevation becomes 60°. The height of the tower is:',
    options: [
      '15 meters',
      '15√3 meters',
      '30 meters',
      '10√3 meters'
    ],
    correctAnswer: '15√3 meters',
    explanation: 'If x is initial distance and h is height, then h/(x-30) = √3 and h/x = 1/√3. Solving gives h = 15√3 meters.',
    wrongAnswerExplanations: {
      '15 meters': 'This incorrectly omits the √3 factor in the height calculation.',
      '30 meters': 'This equals the distance moved but doesn\'t correctly solve for the height.',
      '10√3 meters': 'This is incorrectly calculated as 2/3 of the actual height.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch9_t3_qm17',
    type: 'mcq',
    question: 'A TV tower stands vertically on a bank of a river. From a point on the other bank directly opposite the tower, the angle of elevation of the top of the tower is 60°. From another point 20 meters away from this point on the line joining the foot of the tower to the first point, the angle of elevation of the top of the tower is 30°. The height of the tower is:',
    options: [
      '20√3 meters',
      '20 meters',
      '10√3 meters',
      '30 meters'
    ],
    correctAnswer: '10√3 meters',
    explanation: 'If h is height and d is width of river, then h/d = √3 and h/(d+20) = 1/√3. Solving gives h = 10√3 meters.',
    wrongAnswerExplanations: {
      '20√3 meters': 'This is twice the correct answer, showing a calculation error.',
      '20 meters': 'This equals the distance between the two observation points, not the height.',
      '30 meters': 'This is incorrectly calculated and doesn\'t satisfy the given angles.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 150
  },
  {
    id: 'cl10_ch9_t3_qm18',
    type: 'mcq',
    question: 'In the adjoining figure, PQ is a vertical pole with point P at the top and Q at the bottom. R and S are two points on the horizontal ground such that∠RPQ = 45° and ∠SPQ = 30°. If RS = 100 meters, then the height of the pole is:',
    options: [
      '50 meters',
      '50√3 meters',
      '50(√3 - 1) meters',
      '50(√3 + 1) meters'
    ],
    correctAnswer: '50(√3 - 1) meters',
    explanation: 'If PQ = h, QR = d+100, QS = d, then h/(d+100) = 1 and h/d = √3. Solving gives h = 50(√3-1) meters.',
    wrongAnswerExplanations: {
      '50 meters': 'This is half of RS but doesn\'t correctly solve the trigonometric equations.',
      '50√3 meters': 'This incorrectly calculates only part of the height expression.',
      '50(√3 + 1) meters': 'This adds the terms instead of subtracting them, showing a sign error.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 150
  },
  {
    id: 'cl10_ch9_t3_qm19',
    type: 'mcq',
    question: 'From the top of a hill, the angle of depression of a point on the ground is θ. The angle of depression of another point `h` meters directly below the first point is φ. The height of the hill is:',
    options: [
      'h·cot φ cot θ/(cot θ - cot φ) meters',
      'h·tan φ tan θ/(tan θ - tan φ) meters',
      'h·cot φ cot θ/(cot φ - cot θ) meters',
      'h/(cot φ - cot θ) meters'
    ],
    correctAnswer: 'h·cot φ cot θ/(cot φ - cot θ) meters',
    explanation: 'If hill height is H and horizontal distance is d, then d = H·cot(θ) and d = (H-h)·cot(φ). Solving for H gives the formula.',
    wrongAnswerExplanations: {
      'h·cot φ cot θ/(cot θ - cot φ) meters': 'This has the correct terms but incorrect sign in denominator.',
      'h·tan φ tan θ/(tan θ - tan φ) meters': 'This incorrectly uses tangent instead of cotangent.',
      'h/(cot φ - cot θ) meters': 'This omits the product of cotangents in the numerator.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 150
  },
  {
    id: 'cl10_ch9_t3_qm20',
    type: 'mcq',
    question: 'A statue stands on top of a pedestal. From a point on the ground 40 meters away from the pedestal, the angle of elevation of the top of the statue is 60° and the angle of elevation of the top of the pedestal is 45°. The height of the statue is:',
    options: [
      '40(√3 - 1) meters',
      '40 meters',
      '40/√3 meters',
      '20(√3 - 1) meters'
    ],
    correctAnswer: '40(√3 - 1) meters',
    explanation: 'If pedestal height is h₁ and statue height is h₂, then h₁/40 = 1 and (h₁+h₂)/40 = √3. Solving gives h₂ = 40(√3-1) meters.',
    wrongAnswerExplanations: {
      '40 meters': 'This equals the distance from the observation point but doesn\'t solve for the statue height.',
      '40/√3 meters': 'This incorrectly applies the tangent formula to the problem.',
      '20(√3 - 1) meters': 'This is half of the correct answer, showing a calculation error.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  }
];
