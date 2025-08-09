import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch12_t2_qe1',
    type: 'mcq',
    question: 'The area of a sector of a circle with radius r and central angle θ (in radians) is:',
    options: [
      '½ × r² × θ',
      'r × θ',
      'r² × θ',
      '2 × r × θ'
    ],
    correctAnswer: '½ × r² × θ',
    explanation: 'The formula for the area of a sector is ½ × r² × θ, where θ is in radians.',
    wrongAnswerExplanations: {
      'r × θ': 'This is incorrect. This expression calculates the arc length, not the area.',
      'r² × θ': 'This is incorrect. The correct formula includes the factor of ½.',
      '2 × r × θ': 'This is incorrect. This is closer to the formula for arc length (r × θ).'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch12_t2_qe2',
    type: 'mcq',
    question: 'If a sector has a central angle of 72° in a circle with radius 5 cm, what is its area?',
    options: [
      '5π cm²',
      '10π cm²',
      '15π cm²',
      '25π cm²'
    ],
    correctAnswer: '5π cm²',
    explanation: 'Area = ½ × r² × θ = ½ × 5² × (72/360 × 2π) = ½ × 25 × (1/5 × 2π) = 5π cm²',
    wrongAnswerExplanations: {
      '10π cm²': 'This is incorrect. Check your calculation of the angle in radians.',
      '15π cm²': 'This is incorrect. Make sure you`re using the formula ½ × r² × θ correctly.',
      '25π cm²': 'This is incorrect. This would be the total area of the circle, not the sector.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch12_t2_qe3',
    type: 'mcq',
    question: 'What is the area of a sector with central angle 60° in a circle of diameter 14 cm?',
    options: [
      '49π/6 cm²',
      '7π/3 cm²',
      '49π/3 cm²',
      '7π cm²'
    ],
    correctAnswer: '49π/6 cm²',
    explanation: 'Area = ½ × r² × θ = ½ × 7² × (60/360 × 2π) = ½ × 49 × (π/3) = 49π/6 cm²',
    wrongAnswerExplanations: {
      '7π/3 cm²': 'This is incorrect. You may have used radius instead of radius squared.',
      '49π/3 cm²': 'This is incorrect. You may have forgotten to multiply by ½.',
      '7π cm²': 'This is incorrect. Check your calculation of the angle in radians.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch12_t2_qe4',
    type: 'mcq',
    question: 'The formula for the length of an arc with radius r and central angle θ (in radians) is:',
    options: [
      'r × θ',
      'r² × θ',
      '½ × r × θ',
      '2 × r × θ'
    ],
    correctAnswer: 'r × θ',
    explanation: 'The formula for arc length is r × θ, where θ is in radians.',
    wrongAnswerExplanations: {
      'r² × θ': 'This is incorrect. The arc length is not proportional to the square of radius.',
      '½ × r × θ': 'This is incorrect. The ½ factor appears in the sector area formula, not arc length.',
      '2 × r × θ': 'This is incorrect. This would give twice the actual arc length.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch12_t2_qe5',
    type: 'mcq',
    question: 'The area of a sector is 15π cm² and the radius of the circle is 5 cm. What is the central angle in degrees?',
    options: [
      '108°',
      '216°',
      '54°',
      '72°'
    ],
    correctAnswer: '108°',
    explanation: '15π = ½ × 5² × (θ/360 × 2π) → θ = (15π × 360)/(½ × 25 × 2π) = 108°',
    wrongAnswerExplanations: {
      '216°': 'This is incorrect. You may have doubled the actual angle.',
      '54°': 'This is incorrect. You may have taken half the actual angle.',
      '72°': 'This is incorrect. Check your calculation process again.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch12_t2_qe6',
    type: 'mcq',
    question: 'What is a segment of a circle?',
    options: [
      'The region bounded by an arc and its chord',
      'The region bounded by two radii and an arc',
      'Half of the circle',
      'The line joining center to any point on the circle'
    ],
    correctAnswer: 'The region bounded by an arc and its chord',
    explanation: 'A segment is the region bounded by an arc and the chord connecting the endpoints of the arc.',
    wrongAnswerExplanations: {
      'The region bounded by two radii and an arc': 'This describes a sector, not a segment.',
      'Half of the circle': 'This is a semicircle, not a general segment.',
      'The line joining center to any point on the circle': 'This describes a radius, not a segment.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch12_t2_qe7',
    type: 'mcq',
    question: 'The area of a segment of a circle can be calculated by:',
    options: [
      'Area of sector - Area of triangle',
      'Area of sector + Area of triangle',
      'Area of circle - Area of triangle',
      'Area of circle + Area of triangle'
    ],
    correctAnswer: 'Area of sector - Area of triangle',
    explanation: 'Segment area equals sector area minus the triangle formed by the chord and the two radii.',
    wrongAnswerExplanations: {
      'Area of sector + Area of triangle': 'This is incorrect. We subtract, not add, the triangle area.',
      'Area of circle - Area of triangle': 'This is incorrect. We use sector area, not full circle area.',
      'Area of circle + Area of triangle': 'This is incorrect. The segment is smaller than the full circle.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch12_t2_qe8',
    type: 'mcq',
    question: 'In a circle with radius 10 cm, what is the area of a sector with central angle 45°?',
    options: [
      '25π cm²',
      '50π cm²',
      '100π/8 cm²',
      '25π/2 cm²'
    ],
    correctAnswer: '25π cm²',
    explanation: 'Area = ½ × r² × θ = ½ × 10² × (45/360 × 2π) = ½ × 100 × π/4 = 25π cm²',
    wrongAnswerExplanations: {
      '50π cm²': 'This is incorrect. You may have used the wrong angle conversion.',
      '100π/8 cm²': 'This is incorrect. Simplify your fraction to get 25π/2 cm².',
      '25π/2 cm²': 'This is incorrect. Simplify further to get 25π cm².'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch12_t2_qe9',
    type: 'mcq',
    question: 'If the perimeter of a sector of circle with radius 5 cm is 21 cm, what is the central angle in degrees?',
    options: [
      '72°',
      '108°',
      '144°',
      '36°'
    ],
    correctAnswer: '72°',
    explanation: 'Perimeter = 2r + rθ = 21 → 10 + 5θ = 21 → 5θ = 11 → θ = 11/5 radians = 72°',
    wrongAnswerExplanations: {
      '108°': 'This is incorrect. You may have made an error in converting radians to degrees.',
      '144°': 'This is incorrect. Check your calculation of the angle from the perimeter.',
      '36°': 'This is incorrect. This is half of the correct answer.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch12_t2_qe10',
    type: 'mcq',
    question: 'A sector has an area of 77 cm² and an arc length of 14 cm. What is the radius of the circle?',
    options: [
      '11 cm',
      '7 cm',
      '5.5 cm',
      '14 cm'
    ],
    correctAnswer: '11 cm',
    explanation: 'Arc length = rθ = 14 and Area = ½r²θ = 77. Dividing, r = 2(Area/Arc length) = 2(77/14) = 11 cm',
    wrongAnswerExplanations: {
      '7 cm': 'This is incorrect. Check the relationship between arc length and area.',
      '5.5 cm': 'This is incorrect. This is half of the correct answer.',
      '14 cm': 'This is incorrect. This equals the arc length, not the radius.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch12_t2_qe11',
    type: 'mcq',
    question: 'What is the ratio of areas of a sector of angle 30° to the full circle?',
    options: [
      '1:12',
      '1:6',
      '1:3',
      '1:24'
    ],
    correctAnswer: '1:12',
    explanation: 'Ratio = 30°/360° = 1/12, as the sector area is proportional to its central angle.',
    wrongAnswerExplanations: {
      '1:6': 'This is incorrect. The correct ratio is 30/360 = 1/12.',
      '1:3': 'This is incorrect. This would be the ratio for a 120° sector.',
      '1:24': 'This is incorrect. This would be the ratio for a 15° sector.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch12_t2_qe12',
    type: 'mcq',
    question: 'If a semicircle has an area of 98π cm², what is the radius of the circle?',
    options: [
      '14 cm',
      '7 cm',
      '28 cm',
      '49 cm'
    ],
    correctAnswer: '14 cm',
    explanation: 'Semicircle area = ½ × πr² = 98π → r² = 98 × 2 = 196 → r = 14 cm',
    wrongAnswerExplanations: {
      '7 cm': 'This is incorrect. This would give a semicircle area of 24.5π cm².',
      '28 cm': 'This is incorrect. This is twice the correct radius.',
      '49 cm': 'This is incorrect. This is r² instead of r.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch12_t2_qe13',
    type: 'mcq',
    question: 'What is the formula for the area of a minor segment with central angle θ (in radians) and radius r?',
    options: [
      '½r²(θ - sin θ)',
      '½r²(θ + sin θ)',
      'r²(θ - sin θ)',
      'r²(θ + sin θ)'
    ],
    correctAnswer: '½r²(θ - sin θ)',
    explanation: 'The area of a minor segment is (sector area - triangle area) = ½r²θ - ½r²sin θ = ½r²(θ - sin θ)',
    wrongAnswerExplanations: {
      '½r²(θ + sin θ)': 'This is incorrect. The formula involves subtracting sin θ, not adding it.',
      'r²(θ - sin θ)': 'This is incorrect. Missing the factor of ½.',
      'r²(θ + sin θ)': 'This is incorrect. Missing ½ and uses + instead of -.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch12_t2_qe14',
    type: 'mcq',
    question: 'If the area of a circle is 154 cm² and the area of a sector of this circle is 55 cm², what is the central angle of the sector?',
    options: [
      '90°',
      '120°',
      '128.57°',
      '135°'
    ],
    correctAnswer: '128.57°',
    explanation: 'Ratio of areas = 55/154 = angle/360° → angle = (55 × 360°)/154 ≈ 128.57°',
    wrongAnswerExplanations: {
      '90°': 'This is incorrect. 90° would give a sector with area 38.5 cm².',
      '120°': 'This is incorrect. 120° would give a sector with area 51.33 cm².',
      '135°': 'This is incorrect. 135° would give a sector with area 57.75 cm².'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch12_t2_qe15',
    type: 'mcq',
    question: 'The perimeter of a semicircle with radius r is:',
    options: [
      'πr + 2r',
      '2πr',
      'πr',
      '2r + πr/2'
    ],
    correctAnswer: 'πr + 2r',
    explanation: 'Perimeter = Arc length + Diameter = πr + 2r',
    wrongAnswerExplanations: {
      '2πr': 'This is incorrect. This is the perimeter of the full circle.',
      'πr': 'This is incorrect. This is only the arc length of the semicircle.',
      '2r + πr/2': 'This is incorrect. The arc length of a semicircle is πr, not πr/2.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch12_t2_qe16',
    type: 'mcq',
    question: 'In a circle with diameter 20 cm, what is the length of an arc that subtends a central angle of 45°?',
    options: [
      '5π cm',
      '10π/4 cm',
      '5π/2 cm',
      '10π cm'
    ],
    correctAnswer: '5π/2 cm',
    explanation: 'Arc length = rθ = 10 × (45/360 × 2π) = 10 × π/4 = 5π/2 cm',
    wrongAnswerExplanations: {
      '5π cm': 'This is incorrect. Check your angle conversion.',
      '10π/4 cm': 'This is incorrect. Simplify to get 5π/2 cm.',
      '10π cm': 'This is incorrect. This would be the circumference of the full circle.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch12_t2_qe17',
    type: 'mcq',
    question: 'A sector has a central angle of 2π/3 radians. What fraction of the circle`s area does it represent?',
    options: [
      '1/3',
      '2/3',
      '1/6',
      '5/6'
    ],
    correctAnswer: '1/3',
    explanation: 'Fraction = angle/2π = (2π/3)/(2π) = 1/3',
    wrongAnswerExplanations: {
      '2/3': 'This is incorrect. The angle 2π/3 is one-third of a full rotation (2π).',
      '1/6': 'This is incorrect. This would correspond to an angle of π/3 radians.',
      '5/6': 'This is incorrect. This would correspond to an angle of 5π/3 radians.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch12_t2_qe18',
    type: 'mcq',
    question: 'What is the area of a major segment in a circle with radius 8 cm and central angle 240°?',
    options: [
      '128π/3 cm²',
      '32π cm²',
      '64π/3 cm²',
      '96π cm²'
    ],
    correctAnswer: '128π/3 cm²',
    explanation: 'Major segment area = Circle area - Minor segment area = 64π - 64π × (120/360) = 64π × 2/3 = 128π/3 cm²',
    wrongAnswerExplanations: {
      '32π cm²': 'This is incorrect. This is the area of a sector with 90°.',
      '64π/3 cm²': 'This is incorrect. This is the area of a minor segment with angle 120°.',
      '96π cm²': 'This is incorrect. The circle area is 64π cm².'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch12_t2_qe19',
    type: 'mcq',
    question: 'If a sector has an area of 36π cm² in a circle with radius 12 cm, what is its central angle in radians?',
    options: [
      'π/2',
      'π/3',
      'π/4',
      'π/6'
    ],
    correctAnswer: 'π/2',
    explanation: '36π = ½ × 12² × θ → θ = (36π)/(½ × 144) = π/2 radians',
    wrongAnswerExplanations: {
      'π/3': 'This is incorrect. This angle would give an area of 24π cm².',
      'π/4': 'This is incorrect. This angle would give an area of 18π cm².',
      'π/6': 'This is incorrect. This angle would give an area of 12π cm².'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch12_t2_qe20',
    type: 'mcq',
    question: 'A sector has a perimeter of 30 cm and a central angle of 60°. What is the radius of the circle?',
    options: [
      '10 cm',
      '12 cm',
      '15 cm',
      '9 cm'
    ],
    correctAnswer: '10 cm',
    explanation: 'Perimeter = 2r + rθ = 2r + r(π/3) = r(2 + π/3) = 30 → r = 30/(2 + π/3) = 10 cm',
    wrongAnswerExplanations: {
      '12 cm': 'This is incorrect. Check your calculation with the perimeter formula.',
      '15 cm': 'This is incorrect. This would give a perimeter of 45 cm.',
      '9 cm': 'This is incorrect. This would give a perimeter of 27 cm.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  }
];
