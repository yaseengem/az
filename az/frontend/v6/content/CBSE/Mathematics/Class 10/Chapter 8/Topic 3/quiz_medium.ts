import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch8_t3_qm1',
    type: 'mcq',
    question: 'From a point on a bridge across a river, the angles of depression of the banks on opposite sides of the river are 30° and 45° respectively. If the bridge is 20 meters above the river, what is the width of the river?',
    options: [
      '20(√3 + 1) meters',
      '20(√3 - 1) meters',
      '40 meters',
      '20√3 meters'
    ],
    correctAnswer: '20(√3 + 1) meters',
    explanation: 'Distance to first bank = 20/tan30° = 20√3. Distance to second bank = 20/tan45° = 20. Total width = 20√3 + 20 = 20(√3 + 1)',
    wrongAnswerExplanations: {
      '20(√3 - 1) meters': 'This calculates the difference rather than the sum of the distances.',
      '40 meters': 'This ignores the different angles of depression.',
      '20√3 meters': 'This is only the distance to the first bank.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch8_t3_qm2',
    type: 'mcq',
    question: 'A tower stands at the center of a circular park. From a point on the boundary of the park, the angle of elevation of the top of the tower is 60°. If the radius of the park is 30 meters, what is the height of the tower?',
    options: [
      '30√3 meters',
      '60 meters',
      '15√3 meters',
      '45 meters'
    ],
    correctAnswer: '30√3 meters',
    explanation: 'Height = radius × tan(angle of elevation) = 30 × tan60° = 30 × √3 = 30√3 meters',
    wrongAnswerExplanations: {
      '60 meters': 'This would be true if the angle was approximately 63.4°.',
      '15√3 meters': 'This is half of the correct answer.',
      '45 meters': 'This would be true if the angle was approximately 56.3°.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch8_t3_qm3',
    type: 'mcq',
    question: 'Two ships are sailing in the sea on either side of a lighthouse. The angles of depression of the ships from the top of the lighthouse are 30° and 45°. If the lighthouse is 200 meters tall, find the distance between the ships.',
    options: [
      '200(√3 + 1) meters',
      '400 meters',
      '200√3 meters',
      '200(√3 - 1) meters'
    ],
    correctAnswer: '200(√3 + 1) meters',
    explanation: 'Distance from first ship to lighthouse = 200/tan30° = 200√3. Distance from second ship = 200/tan45° = 200. Total = 200(√3 + 1)',
    wrongAnswerExplanations: {
      '400 meters': 'This is twice the height but doesn\'t account for the angles.',
      '200√3 meters': 'This is only the distance to the first ship.',
      '200(√3 - 1) meters': 'This calculates the difference rather than the sum.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch8_t3_qm4',
    type: 'mcq',
    question: 'From the top of a 100-meter high cliff, the angle of depression of a boat is observed to be 30°. After some time, the angle of depression becomes 60°. How far has the boat moved during this time?',
    options: [
      '100(√3 - 1/√3) meters',
      '100(√3 + 1/√3) meters',
      '100√3 meters',
      '100/√3 meters'
    ],
    correctAnswer: '100(√3 - 1/√3) meters',
    explanation: 'Initially d₁ = 100/tan30° = 100√3. Later d₂ = 100/tan60° = 100/√3. Distance moved = d₁-d₂ = 100(√3-1/√3) meters',
    wrongAnswerExplanations: {
      '100(√3 + 1/√3) meters': 'This calculates the sum rather than the difference of distances.',
      '100√3 meters': 'This is only the initial distance from the cliff.',
      '100/√3 meters': 'This is only the final distance from the cliff.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch8_t3_qm5',
    type: 'mcq',
    question: 'From a window 25 meters high above the ground, the angles of elevation and depression of the top and bottom of a tower are observed to be 30° and 45° respectively. What is the height of the tower?',
    options: [
      '25(1 + √3) meters',
      '50 meters',
      '25(√3 - 1) meters',
      '25√3 meters'
    ],
    correctAnswer: '25(1 + √3) meters',
    explanation: 'Distance from window to tower = 25/tan45° = 25. Height above window = 25·tan30° = 25/√3. Total height = 25 + 25/√3 = 25(1 + 1/√3) = 25(1 + √3/3) ≈ 39.4m',
    wrongAnswerExplanations: {
      '50 meters': 'This is twice the height of the window.',
      '25(√3 - 1) meters': 'This calculates the difference rather than the sum.',
      '25√3 meters': 'This uses incorrect formula for the calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 150
  },
  {
    id: 'cl10_ch8_t3_qm6',
    type: 'mcq',
    question: 'A person observes two buildings from a point between them. The angles of elevation of the tops of the buildings are 60° and 45°. If the buildings are 60 meters apart, how far is the observer from the taller building?',
    options: [
      '60/(1 + √3) meters',
      '60/(√3 - 1) meters',
      '30 meters',
      '20√3 meters'
    ],
    correctAnswer: '60/(1 + √3) meters',
    explanation: 'If distances are x and 60-x, then h₁/x = tan60° = √3 and h₂/(60-x) = tan45° = 1. Since h₁ = h₂, x·√3 = 60-x. Solving: x = 60/(1+√3)',
    wrongAnswerExplanations: {
      '60/(√3 - 1) meters': 'This uses incorrect algebraic manipulation.',
      '30 meters': 'This assumes the observer is exactly halfway between buildings.',
      '20√3 meters': 'This is an incorrect calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 150
  },
  {
    id: 'cl10_ch8_t3_qm7',
    type: 'mcq',
    question: 'The angles of depression of two ships from the top of a 100-meter high cliff are 45° and 30° in opposite directions. What is the distance between the ships?',
    options: [
      '100(1 + √3) meters',
      '200 meters',
      '100(√3 - 1) meters',
      '100√3 meters'
    ],
    correctAnswer: '100(1 + √3) meters',
    explanation: 'Distance to first ship = 100/tan45° = 100. Distance to second ship = 100/tan30° = 100√3. Total distance = 100 + 100√3 = 100(1 + √3)',
    wrongAnswerExplanations: {
      '200 meters': 'This would be true if both angles were 45°.',
      '100(√3 - 1) meters': 'This calculates the difference rather than the sum.',
      '100√3 meters': 'This is only the distance to the second ship.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch8_t3_qm8',
    type: 'mcq',
    question: 'From a point on the ground, the angles of elevation of the top of a building before and after walking 30 meters towards the building are 45° and 60° respectively. What is the height of the building?',
    options: [
      '30(1 + 1/√3) meters',
      '15√3 meters',
      '30√3 meters',
      '45 meters'
    ],
    correctAnswer: '30(1 + 1/√3) meters',
    explanation: 'If initial distance is x, then tan45° = h/x and tan60° = h/(x-30). Solving: h = 30(1+1/√3) meters',
    wrongAnswerExplanations: {
      '15√3 meters': 'This is an incorrect calculation.',
      '30√3 meters': 'This would be true if the initial angle was 30°, not 45°.',
      '45 meters': 'This would be true if the initial distance was 45 meters.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch8_t3_qm9',
    type: 'mcq',
    question: 'A statue 1.8 meters tall stands on a pedestal. From a point on the ground, the angle of elevation of the top of the statue is 60° and that of the top of the pedestal is 45°. What is the height of the pedestal?',
    options: [
      '1.8(√3 - 1) meters',
      '1.8√3 meters',
      '3.6 meters',
      '0.9√3 meters'
    ],
    correctAnswer: '1.8(√3 - 1) meters',
    explanation: 'If distance from point is x, then tan45° = h₁/x and tan60° = (h₁+1.8)/x where h₁ is pedestal height. Solving: h₁ = 1.8(√3-1)',
    wrongAnswerExplanations: {
      '1.8√3 meters': 'This would be true if the angle to the pedestal was 30°.',
      '3.6 meters': 'This is twice the height of the statue.',
      '0.9√3 meters': 'This is an incorrect calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 150
  },
  {
    id: 'cl10_ch8_t3_qm10',
    type: 'mcq',
    question: 'From the top of a hill, the angles of depression of two cars on a straight road on opposite sides of the hill are 30° and 45°. If the cars are 100 meters apart, what is the height of the hill?',
    options: [
      '100/(1 + √3) meters',
      '50 meters',
      '100/(√3 - 1) meters',
      '25√3 meters'
    ],
    correctAnswer: '100/(1 + √3) meters',
    explanation: 'If distances are x and 100-x, then x = h·cot30° = h·√3 and 100-x = h·cot45° = h. Solving: h·√3 + h = 100, so h = 100/(1+√3)',
    wrongAnswerExplanations: {
      '50 meters': 'This is half the distance between the cars.',
      '100/(√3 - 1) meters': 'This uses incorrect algebraic manipulation.',
      '25√3 meters': 'This is an incorrect calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 150
  },
  {
    id: 'cl10_ch8_t3_qm11',
    type: 'mcq',
    question: 'A boy flies a kite which is 150 meters high. The string of the kite makes an angle of 60° with the horizontal. Assuming the string is straight, find the length of the string.',
    options: [
      '150·2/√3 meters',
      '150√3 meters',
      '300 meters',
      '150 meters'
    ],
    correctAnswer: '150·2/√3 meters',
    explanation: 'Using sin60° = 150/string length. Therefore, string length = 150/sin60° = 150/(√3/2) = 300/√3 = 150·2/√3 meters',
    wrongAnswerExplanations: {
      '150√3 meters': 'This would be the horizontal distance, not the string length.',
      '300 meters': 'This would be true if the angle was 30°.',
      '150 meters': 'This would be true if the angle was 90° (vertical).'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch8_t3_qm12',
    type: 'mcq',
    question: 'Two buildings are on opposite sides of a road. From a point on the road between them, the angles of elevation of their tops are 60° and 30°. If the heights of the buildings are 50 meters and 25 meters respectively, find the width of the road.',
    options: [
      '50(√3 - 1/3) meters',
      '75 meters',
      '50 meters',
      '25√3 meters'
    ],
    correctAnswer: '50(√3 - 1/3) meters',
    explanation: 'If distances are x and y, then tan60° = 50/x and tan30° = 25/y. Width = x+y = 50/√3 + 25·√3 = 50(1/√3 + √3/2) = 50(√3-1/3) meters',
    wrongAnswerExplanations: {
      '75 meters': 'This is the sum of the heights, not the width.',
      '50 meters': 'This is the height of the taller building.',
      '25√3 meters': 'This is an incorrect calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 150
  },
  {
    id: 'cl10_ch8_t3_qm13',
    type: 'mcq',
    question: 'A man on the deck of a ship is 10 meters above sea level. He observes the angle of elevation of the top of a cliff as 45° and the angle of depression of the base of the cliff as 30°. What is the height of the cliff?',
    options: [
      '10 + 10√3 meters',
      '20 meters',
      '10(1 + √3) meters',
      '10√3 meters'
    ],
    correctAnswer: '10 + 10√3 meters',
    explanation: 'Distance to cliff = 10/tan30° = 10√3. Height of cliff above eye level = 10√3·tan45° = 10√3. Total height = 10 + 10√3 meters',
    wrongAnswerExplanations: {
      '20 meters': 'This is twice the height of the man above sea level.',
      '10(1 + √3) meters': 'This is the same as the correct answer but written differently.',
      '10√3 meters': 'This is only the height above the observer\'s eye level.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 150
  },
  {
    id: 'cl10_ch8_t3_qm14',
    type: 'mcq',
    question: 'From a balloon vertically above a straight road, the angles of depression of two milestone posts on the same side of the balloon are 45° and 60°. If the distance between the posts is 200 meters, what is the height of the balloon?',
    options: [
      '200(√3)/(√3-1) meters',
      '100 meters',
      '200 meters',
      '200√3 meters'
    ],
    correctAnswer: '200(√3)/(√3-1) meters',
    explanation: 'If heights are h and distances x and x+200, then tan45° = h/x and tan60° = h/(x+200). Solving: h = 200(√3)/(√3-1) ≈ 346.4m',
    wrongAnswerExplanations: {
      '100 meters': 'This is half the distance between the posts.',
      '200 meters': 'This is the distance between the posts.',
      '200√3 meters': 'This would be true if the balloon was directly above the first post.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 150
  },
  {
    id: 'cl10_ch8_t3_qm15',
    type: 'mcq',
    question: 'From a point on level ground, the angle of elevation of the top of a tower is θ. After moving a distance of d meters towards the tower, the angle of elevation becomes φ. The height of the tower is:',
    options: [
      'd·tan(θ)·tan(φ)/(tan(φ)-tan(θ)) meters',
      'd·tan(θ) meters',
      'd·tan(φ) meters',
      'd·(tan(φ)+tan(θ)) meters'
    ],
    correctAnswer: 'd·tan(θ)·tan(φ)/(tan(φ)-tan(θ)) meters',
    explanation: 'If distance is x initially, then height h = x·tan(θ) = (x-d)·tan(φ). Solving for x and substituting: h = d·tan(θ)·tan(φ)/(tan(φ)-tan(θ))',
    wrongAnswerExplanations: {
      'd·tan(θ) meters': 'This would be true only if the initial position was at the base.',
      'd·tan(φ) meters': 'This would be true only if the final position was at the base.',
      'd·(tan(φ)+tan(θ)) meters': 'This uses incorrect algebraic manipulation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 150
  },
  {
    id: 'cl10_ch8_t3_qm16',
    type: 'mcq',
    question: 'A man standing on the top of a tower observes a car moving towards the tower with a uniform speed along a straight road. If the angle of depression of the car changes from 30° to 45° in 12 minutes, how much more time will the car take to reach the tower?',
    options: [
      '(12√3 - 12) minutes',
      '12 minutes',
      '6 minutes',
      '4 minutes'
    ],
    correctAnswer: '(12√3 - 12) minutes',
    explanation: 'For angle changes from 30° to 45°, distance changes from h·cot30° = h·√3 to h·cot45° = h. Time proportional to distance: t₁/t₂ = (h·√3-h)/(h) = √3-1, so t₂ = 12(√3-1)',
    wrongAnswerExplanations: {
      '12 minutes': 'This assumes linear relationship with angle, not distance.',
      '6 minutes': 'This is half of the time taken for previous movement.',
      '4 minutes': 'This is an incorrect calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 150
  },
  {
    id: 'cl10_ch8_t3_qm17',
    type: 'mcq',
    question: 'The angle of elevation of a cloud from a point 200 meters above a lake is 30° and the angle of depression of its reflection in the lake is 60°. What is the height of the cloud above the lake?',
    options: [
      '400 meters',
      '600 meters',
      '300 meters',
      '200√3 meters'
    ],
    correctAnswer: '400 meters',
    explanation: 'If h is height of cloud and x is horizontal distance, then tan30° = (h-200)/x and tan60° = (h+200)/x. Solving: h = 400m',
    wrongAnswerExplanations: {
      '600 meters': 'This uses incorrect algebraic manipulation.',
      '300 meters': 'This is an incorrect calculation.',
      '200√3 meters': 'This is an incorrect calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 150
  },
  {
    id: 'cl10_ch8_t3_qm18',
    type: 'mcq',
    question: 'A person standing on the bank of a river observes that the angle of elevation of the top of a tree on the opposite bank is 60°. When he moves 40 meters away from the bank, the angle of elevation becomes 30°. What is the height of the tree?',
    options: [
      '20√3 meters',
      '40 meters',
      '20 meters',
      '40√3 meters'
    ],
    correctAnswer: '20√3 meters',
    explanation: 'If river width is x and tree height is h, then tan60° = h/x and tan30° = h/(x+40). Solving: h = 20√3 meters',
    wrongAnswerExplanations: {
      '40 meters': 'This is the distance the person moved, not the height.',
      '20 meters': 'This would be true if the angles were different.',
      '40√3 meters': 'This is twice the correct answer.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch8_t3_qm19',
    type: 'mcq',
    question: 'The angle of elevation of the top of a tower from a point A on the ground is 30°. From another point B, 50 meters vertically above A, the angle of elevation is 15°. The height of the tower is:',
    options: [
      '50 + 50/tan15° meters',
      '100 meters',
      '50√3 meters',
      '50(1 + √3) meters'
    ],
    correctAnswer: '50 + 50/tan15° meters',
    explanation: 'If tower height is h, horizontal distance is d, then tan30° = h/d and tan15° = (h-50)/d. Solving: h = 50 + 50/tan15° meters',
    wrongAnswerExplanations: {
      '100 meters': 'This is twice the height of point B above A.',
      '50√3 meters': 'This would be true if the second observation point was on ground.',
      '50(1 + √3) meters': 'This is an incorrect calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 150
  },
  {
    id: 'cl10_ch8_t3_qm20',
    type: 'mcq',
    question: 'A boy is flying a kite. The length of the string is 200 meters and it makes an angle of 30° with the horizontal. Assuming that there is no slack in the string, find the height of the kite from the ground if the boy is 1.5 meters tall.',
    options: [
      '101.5 meters',
      '100 meters',
      '200 meters',
      '200.5 meters'
    ],
    correctAnswer: '101.5 meters',
    explanation: 'Height of kite from ground = 1.5 + 200·sin30° = 1.5 + 200·(1/2) = 1.5 + 100 = 101.5 meters',
    wrongAnswerExplanations: {
      '100 meters': 'This ignores the height of the boy.',
      '200 meters': 'This is the length of the string, not the height.',
      '200.5 meters': 'This adds the boy\'s height to the string length, not the vertical component.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  }
];
