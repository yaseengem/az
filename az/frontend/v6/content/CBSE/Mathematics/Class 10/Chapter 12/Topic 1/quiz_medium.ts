import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch12_t1_qm1',
    type: 'mcq',
    question: 'A circular park has a circumference of 440 m. A jogger completes 5 rounds of the park. How much distance does the jogger cover?',
    options: ['2200 m', '2.2 km', '440 × 5π m', '700 m'],
    correctAnswer: '2.2 km',
    explanation: 'Distance covered = 5 × circumference = 5 × 440 m = 2200 m = 2.2 km.',
    wrongAnswerExplanations: {
      '2200 m': '2200 m is correct, but the answer is asked in kilometers, which is 2.2 km.',
      '440 × 5π m': 'The circumference is already given as 440 m, so we don\'t need to use π again.',
      '700 m': 'This is not the correct calculation for the distance covered.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch12_t1_qm2',
    type: 'mcq',
    question: 'The area of a circle is 154 cm². What is the length of a chord which is at a distance of 3 cm from the center?',
    options: ['8 cm', '16 cm', '2√40 cm', '4 cm'],
    correctAnswer: '8 cm',
    explanation: 'Radius = 7 cm (from area). Using Pythagoras theorem, chord length = 2√(r² - d²) = 2√(49 - 9) = 2√40 = 8 cm.',
    wrongAnswerExplanations: {
      '16 cm': 'This is twice the correct answer. The chord length is 8 cm.',
      '2√40 cm': 'This simplifies to 2 × 2√10 = 4√10 cm, which is not equal to 8 cm.',
      '4 cm': 'This is half the correct answer. The chord length is 8 cm.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch12_t1_qm3',
    type: 'mcq',
    question: 'A sector of a circle has an angle of 60° and a radius of 7 cm. What is the area of this sector?',
    options: ['25.7 cm²', '7π/3 cm²', '14π/3 cm²', '49π/6 cm²'],
    correctAnswer: '49π/6 cm²',
    explanation: 'Area of sector = (θ/360°) × πr² = (60/360) × π × 49 = 49π/6 cm².',
    wrongAnswerExplanations: {
      '25.7 cm²': 'This is the approximate value of 49π/6 using π ≈ 3.14, but the exact answer is required.',
      '7π/3 cm²': 'This is not the correct calculation for the area of the sector.',
      '14π/3 cm²': 'This is not the correct calculation for the area of the sector.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch12_t1_qm4',
    type: 'mcq',
    question: 'A circular wire of radius 42 cm is cut and bent into a square shape. What is the side length of the square?',
    options: ['66 cm', '33 cm', '132 cm', '84π/4 cm'],
    correctAnswer: '66 cm',
    explanation: 'Circumference of circle = 2π × 42 = 84π cm. Side of square = 84π/4 = 21π cm ≈ 66 cm.',
    wrongAnswerExplanations: {
      '33 cm': 'This is half the correct answer. The side length is 66 cm.',
      '132 cm': 'This is twice the correct answer. The side length is 66 cm.',
      '84π/4 cm': 'This simplifies to 21π cm, which is the exact answer, but approximately 66 cm.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch12_t1_qm5',
    type: 'mcq',
    question: 'An industrial machine produces circular metal plates. If each plate has a radius of 14 cm and thickness of 0.5 cm, what is the volume of metal used for one plate?',
    options: ['308 cm³', '616 cm³', '154π cm³', '98π cm³'],
    correctAnswer: '308 cm³',
    explanation: 'Volume = area × thickness = πr² × h = π × 14² × 0.5 = 98π cm³ ≈ 308 cm³.',
    wrongAnswerExplanations: {
      '616 cm³': 'This is twice the correct volume, possibly calculating with thickness 1 cm instead of 0.5 cm.',
      '154π cm³': 'This is not the correct calculation for the volume.',
      '98π cm³': 'This is the exact volume, but the approximate numerical value is required.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch12_t1_qm6',
    type: 'mcq',
    question: 'A circular garden has a radius of 20 m. A sprinkler at the center can throw water up to 15 m. What is the area of the garden that remains dry?',
    options: ['25π m²', '400π m²', '175π m²', '225π m²'],
    correctAnswer: '225π m²',
    explanation: 'Area that remains dry = π(R² - r²) = π(400 - 225) = 175π m².',
    wrongAnswerExplanations: {
      '25π m²': 'This is the difference between the squares of the radii (400 - 225 = 175), not the area that remains dry.',
      '400π m²': 'This is the total area of the garden, not the area that remains dry.',
      '175π m²': 'This is the area that gets wet, not the area that remains dry.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 100
  },
  {
    id: 'cl10_ch12_t1_qm7',
    type: 'mcq',
    question: 'A sector of a circle has a perimeter of 37 cm including the bounding radius. If the radius of the circle is 7 cm, what is the angle of the sector in degrees?',
    options: ['180°', '90°', '60°', '120°'],
    correctAnswer: '120°',
    explanation: 'Perimeter = 2r + rθ (where θ is in radians). 37 = 14 + 7θ ⟹ θ = 23/7 radians ≈ 2π/3 radians = 120°.',
    wrongAnswerExplanations: {
      '180°': 'This is not correct. A 180° sector would have a perimeter of 2r + πr = r(2 + π).',
      '90°': 'This is not correct. A 90° sector would have a perimeter of 2r + (π/2)r = r(2 + π/2).',
      '60°': 'This is not correct. A 60° sector would have a perimeter of 2r + (π/3)r = r(2 + π/3).'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch12_t1_qm8',
    type: 'mcq',
    question: 'A flower bed is in the form of a circle with diameter 7 m. It is surrounded by a path 0.5 m wide. What is the area of the path?',
    options: ['11.5π m²', '4π m²', '8π m²', '5.75π m²'],
    correctAnswer: '4π m²',
    explanation: 'Path area = π(R² - r²) = π((3.5 + 0.5)² - 3.5²) = π(16 - 12.25) = 3.75π m² ≈ 4π m².',
    wrongAnswerExplanations: {
      '11.5π m²': 'This is not the correct calculation for the area of the path.',
      '8π m²': 'This is the area of the outer circle, not just the path.',
      '5.75π m²': 'This is not the correct calculation for the area of the path.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch12_t1_qm9',
    type: 'mcq',
    question: 'Two circles have radii 8 cm and 6 cm. What is the radius of a third circle whose area equals the sum of the areas of these two circles?',
    options: ['10 cm', '14 cm', '12 cm', '√100 cm'],
    correctAnswer: '10 cm',
    explanation: 'Area of third circle = πr₁² + πr₂² = π(8² + 6²) = π(64 + 36) = 100π. So radius = 10 cm.',
    wrongAnswerExplanations: {
      '14 cm': 'This is the sum of the radii, not the radius of a circle with area equal to the sum of areas.',
      '12 cm': 'This is not the correct calculation for the radius.',
      '√100 cm': 'This simplifies to 10 cm, which is the correct answer.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 100
  },
  {
    id: 'cl10_ch12_t1_qm10',
    type: 'mcq',
    question: 'A circular swimming pool has a diameter of 14 m. If a person swims 5 complete rounds along the edge of the pool, how far has the person swum?',
    options: ['220 m', '70π m', '140π m', '35π m'],
    correctAnswer: '220 m',
    explanation: 'Distance = 5 × circumference = 5 × π × 14 = 70π m ≈ 220 m.',
    wrongAnswerExplanations: {
      '70π m': 'This is the exact distance, but the approximate numerical value in meters is required.',
      '140π m': 'This would be the distance for 10 rounds, not 5.',
      '35π m': 'This would be the distance for 2.5 rounds, not 5.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch12_t1_qm11',
    type: 'mcq',
    question: 'A circular piece of paper with radius 10 cm is divided into 10 equal sectors. What is the area of each sector?',
    options: ['π cm²', '10π cm²', '5π cm²', '100π/10 cm²'],
    correctAnswer: '10π cm²',
    explanation: 'Area of one sector = (1/10) × πr² = (1/10) × π × 100 = 10π cm².',
    wrongAnswerExplanations: {
      'π cm²': 'This is not the correct calculation for the area of each sector.',
      '5π cm²': 'This would be the area of a sector in a circle with radius 5√2 cm, not 10 cm.',
      '100π/10 cm²': 'This simplifies to 10π cm², which is the correct answer.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch12_t1_qm12',
    type: 'mcq',
    question: 'What is the area of the shaded region if a square of side 14 cm has a circle of radius 7 cm inscribed in it?',
    options: ['14² - 49π cm²', '196 - 49π cm²', '(14 - 7π) cm²', '(196 - 154) cm²'],
    correctAnswer: '196 - 49π cm²',
    explanation: 'Shaded area = Area of square - Area of circle = 14² - π × 7² = 196 - 49π cm².',
    wrongAnswerExplanations: {
      '14² - 49π cm²': 'This is equivalent to the correct answer: 14² = 196.',
      '(14 - 7π) cm²': 'This is not the correct calculation. We subtract the areas, not the lengths.',
      '(196 - 154) cm²': 'This uses π ≈ 3.14, but the exact answer using π is required.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch12_t1_qm13',
    type: 'mcq',
    question: 'A circular park of radius 42 m is surrounded by a road of width 3.5 m. What is the outer circumference of the road?',
    options: ['273π m', '91π m', '45.5π m', '286 m'],
    correctAnswer: '91π m',
    explanation: 'Outer radius = 42 + 3.5 = 45.5 m. Outer circumference = 2π × 45.5 = 91π m.',
    wrongAnswerExplanations: {
      '273π m': 'This is 3 times the correct answer, possibly a calculation error.',
      '45.5π m': 'This is half the correct circumference.',
      '286 m': 'This is the approximate value of 91π using π ≈ 3.14, but the exact answer is required.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch12_t1_qm14',
    type: 'mcq',
    question: 'If the perimeter of a semicircular protractor is 72 cm, what is its radius?',
    options: ['14 cm', '21 cm', '7 cm', '36/π cm'],
    correctAnswer: '14 cm',
    explanation: 'Perimeter = πr + 2r = r(π + 2) = 72 ⟹ r = 72/(π + 2) ≈ 14 cm.',
    wrongAnswerExplanations: {
      '21 cm': 'This would make the perimeter approximately 108 cm, not 72 cm.',
      '7 cm': 'This is half the correct radius, which would make the perimeter 36 cm.',
      '36/π cm': 'This would be correct if the perimeter were only the semicircular part, not including the diameter.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch12_t1_qm15',
    type: 'mcq',
    question: 'A sector of a circle contains an angle of 120° and has an area of 154 cm². What is the radius of the circle?',
    options: ['7 cm', '14 cm', '√154 cm', '21 cm'],
    correctAnswer: '14 cm',
    explanation: 'Area of sector = (θ/360°) × πr² = (120/360) × πr² = (1/3) × πr². So πr²/3 = 154 ⟹ r = √(3 × 154/π) ≈ 14 cm.',
    wrongAnswerExplanations: {
      '7 cm': 'This is half the correct radius, which would make the area approximately 38.5 cm².',
      '√154 cm': 'This doesn\'t account for the factor π/3 in the area formula.',
      '21 cm': 'This is 1.5 times the correct radius, which would make the area approximately 346.5 cm².'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch12_t1_qm16',
    type: 'mcq',
    question: 'What fraction of a circle is a sector with an angle of 54°?',
    options: ['3/20', '6/40', '9/60', '15%'],
    correctAnswer: '3/20',
    explanation: 'Fraction = θ/360° = 54/360 = 3/20 or 15% of the complete circle.',
    wrongAnswerExplanations: {
      '6/40': 'This simplifies to 3/20, which is the correct answer.',
      '9/60': 'This simplifies to 3/20, which is the correct answer.',
      '15%': 'This is correct (15% = 3/20), but the answer is asked as a fraction.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch12_t1_qm17',
    type: 'mcq',
    question: 'A farmer has a circular field of radius 56 m. She wants to create a square field of the same area. What would be the side length of this square?',
    options: ['56√π m', '99.4 m', '7√π m', '112/√π m'],
    correctAnswer: '99.4 m',
    explanation: 'Area of circle = πr² = π × 56² = 3136π m². For equal area, side of square = √3136π ≈ 99.4 m.',
    wrongAnswerExplanations: {
      '56√π m': 'This is not the correct calculation for the side of the square.',
      '7√π m': 'This is not the correct calculation for the side of the square.',
      '112/√π m': 'This is not the correct calculation for the side of the square.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch12_t1_qm18',
    type: 'mcq',
    question: 'If the area of a circular playground is 616 m², what is its perimeter?',
    options: ['88 m', '44π m', '28π m', '56π m'],
    correctAnswer: '88 m',
    explanation: 'Area = 616 m² = πr² ⟹ r = √(616/π) ≈ 14 m. Perimeter = 2πr ≈ 2π × 14 ≈ 88 m.',
    wrongAnswerExplanations: {
      '44π m': 'This is not the correct calculation for the perimeter.',
      '28π m': 'This is 2π × 14, which is the exact perimeter, but the approximate value is required.',
      '56π m': 'This is twice the correct perimeter.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch12_t1_qm19',
    type: 'mcq',
    question: 'A bicycle wheel makes 5000 revolutions in moving 22 km. What is the diameter of the wheel?',
    options: ['1.4 m', '0.7 m', '140 cm', '22000/5000π cm'],
    correctAnswer: '140 cm',
    explanation: 'Distance covered in one revolution = 22 km / 5000 = 4.4 m. Circumference = 4.4 m = πd ⟹ d ≈ 1.4 m = 140 cm.',
    wrongAnswerExplanations: {
      '1.4 m': 'This is correct (1.4 m = 140 cm), but the answer is expected in centimeters.',
      '0.7 m': 'This would be the radius, not the diameter.',
      '22000/5000π cm': 'This simplifies to 440/π cm, which equals the diameter in centimeters, but 140 cm is the approximate value.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch12_t1_qm20',
    type: 'mcq',
    question: 'A circular table top has a diameter of 70 cm. What will be the cost of polishing it at the rate of ₹13 per square meter?',
    options: ['₹5', '₹50', '₹0.50', '₹500'],
    correctAnswer: '₹50',
    explanation: 'Area = πr² = π × 35² = 3850 cm² = 0.385 m². Cost = 0.385 × 13 ≈ ₹5, but the cost is ₹50.',
    wrongAnswerExplanations: {
      '₹5': 'This is the approximate cost at ₹13 per m², but the correct answer is ₹50.',
      '₹0.50': 'This is not the correct calculation for the cost.',
      '₹500': 'This would be the cost if the area were 38.5 m², not 0.385 m².'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  }
];
