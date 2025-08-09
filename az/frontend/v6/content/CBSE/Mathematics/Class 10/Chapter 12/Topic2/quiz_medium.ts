import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch12_t2_qm1',
    type: 'mcq',
    question: 'A sector of a circle has a central angle of 120° and radius 6 cm. What is the area of the corresponding segment?',
    options: [
      '12π - 9√3 cm²',
      '36π/3 cm²',
      '12π + 9√3 cm²',
      '12π cm²'
    ],
    correctAnswer: '12π - 9√3 cm²',
    explanation: 'Segment area = Sector area - Triangle area = 12π - ½ × 6² × sin(120°) = 12π - 9√3 cm²',
    wrongAnswerExplanations: {
      '36π/3 cm²': 'This is incorrect. This is just the sector area without subtracting the triangle.',
      '12π + 9√3 cm²': 'This is incorrect. We subtract the triangle area, not add it.',
      '12π cm²': 'This is incorrect. This only accounts for the sector area.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch12_t2_qm2',
    type: 'mcq',
    question: 'In a circle with radius 8 cm, a chord of length 8 cm is drawn. What is the area of the minor segment formed?',
    options: [
      '16 - 8π/3 cm²',
      '16π/3 - 8 cm²',
      '64 - 16π/3 cm²',
      '16π/3 cm²'
    ],
    correctAnswer: '16 - 8π/3 cm²',
    explanation: 'Using formula A = ½r²(θ - sin θ) where θ = 2sin⁻¹(4/8) = 2sin⁻¹(0.5) = π/3, we get 16 - 8π/3 cm²',
    wrongAnswerExplanations: {
      '16π/3 - 8 cm²': 'This is incorrect. The formula is being applied incorrectly.',
      '64 - 16π/3 cm²': 'This is incorrect. This would be for a larger segment.',
      '16π/3 cm²': 'This is incorrect. This is just the sector area without the triangle.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch12_t2_qm3',
    type: 'mcq',
    question: 'A sector of a circle has an area equal to the area of its corresponding segment. What is the central angle of this sector?',
    options: [
      '60°',
      '90°',
      '120°',
      '180°'
    ],
    correctAnswer: '60°',
    explanation: 'This occurs when sector area = triangle area × 2, which happens at θ = sin θ, approximately 60°.',
    wrongAnswerExplanations: {
      '90°': 'This is incorrect. At 90°, the sector area is greater than twice the triangle area.',
      '120°': 'This is incorrect. At 120°, the angle is too large for this equality.',
      '180°': 'This is incorrect. At 180°, we have a semicircle with no triangle.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch12_t2_qm4',
    type: 'mcq',
    question: 'A circle has a radius of 13 cm. A chord of length 24 cm is drawn. What is the area of the minor segment formed?',
    options: [
      '26.65 cm²',
      '39.57 cm²',
      '52.43 cm²',
      '78.54 cm²'
    ],
    correctAnswer: '52.43 cm²',
    explanation: 'Using A = ½r²(θ - sin θ) where θ = 2sin⁻¹(12/13) ≈ 2.14 rad, area ≈ 52.43 cm²',
    wrongAnswerExplanations: {
      '26.65 cm²': 'This is incorrect. This is approximately half the correct area.',
      '39.57 cm²': 'This is incorrect. This might be from using incorrect formula.',
      '78.54 cm²': 'This is incorrect. This is approximately 1.5 times the correct area.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch12_t2_qm5',
    type: 'mcq',
    question: 'A sector has an area of 25π cm² and an arc length of 10π cm. What is the radius of the circle?',
    options: [
      '5 cm',
      '10 cm',
      '15 cm',
      '20 cm'
    ],
    correctAnswer: '5 cm',
    explanation: 'Using arc length = rθ and area = ½r²θ, we get r = 2(area/arc length) = 2(25π/10π) = 5 cm',
    wrongAnswerExplanations: {
      '10 cm': 'This is incorrect. This would give an area of 50π cm².',
      '15 cm': 'This is incorrect. This would give an area of 75π cm².',
      '20 cm': 'This is incorrect. This would give an area of 100π cm².'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch12_t2_qm6',
    type: 'mcq',
    question: 'In a circle with radius 10 cm, two radii form an angle of 120°. What is the area of the corresponding sector?',
    options: [
      '100π/3 cm²',
      '50π/3 cm²',
      '25π cm²',
      '50π cm²'
    ],
    correctAnswer: '100π/3 cm²',
    explanation: 'Sector area = ½r²θ = ½ × 10² × (120/360 × 2π) = ½ × 100 × 2π/3 = 100π/3 cm²',
    wrongAnswerExplanations: {
      '50π/3 cm²': 'This is incorrect. This is half the correct area.',
      '25π cm²': 'This is incorrect. This would be the area for a 90° sector.',
      '50π cm²': 'This is incorrect. This would be the area for a 180° sector (semicircle).'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch12_t2_qm7',
    type: 'mcq',
    question: 'A sector of a circle has a perimeter of 27 cm and a central angle of 60°. What is the area of this sector?',
    options: [
      '36π cm²',
      '54π/6 cm²',
      '36π/6 cm²',
      '25π cm²'
    ],
    correctAnswer: '36π/6 cm²',
    explanation: 'From perimeter = 2r + rθ = 27, for θ = π/3, r = 9 cm. So area = ½r²θ = ½ × 9² × π/3 = 36π/6 cm²',
    wrongAnswerExplanations: {
      '36π cm²': 'This is incorrect. This would be the area of the full circle.',
      '54π/6 cm²': 'This is incorrect. Check your calculation of the radius from perimeter.',
      '25π cm²': 'This is incorrect. This area doesn\'t match the given perimeter and angle.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch12_t2_qm8',
    type: 'mcq',
    question: 'In a circle with diameter 16 cm, what is the area of a segment whose chord is 12 cm long?',
    options: [
      '24 cm²',
      '32 cm²',
      '36 cm²',
      '48 cm²'
    ],
    correctAnswer: '32 cm²',
    explanation: 'Using A = ½r²(θ - sin θ) where θ = 2sin⁻¹(6/8) ≈ 1.848 rad, area ≈ 32 cm²',
    wrongAnswerExplanations: {
      '24 cm²': 'This is incorrect. This is approximately 3/4 of the correct area.',
      '36 cm²': 'This is incorrect. This is 1.125 times the correct area.',
      '48 cm²': 'This is incorrect. This is 1.5 times the correct area.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch12_t2_qm9',
    type: 'mcq',
    question: 'The area of a sector is 40 cm² and its perimeter is 20 cm. What is the radius of the circle?',
    options: [
      '4 cm',
      '5 cm',
      '8 cm',
      '10 cm'
    ],
    correctAnswer: '5 cm',
    explanation: 'If perimeter = 2r + rθ = 20 and area = ½r²θ = 40, solving gives r = 5 cm',
    wrongAnswerExplanations: {
      '4 cm': 'This is incorrect. This radius doesn\'t satisfy both conditions.',
      '8 cm': 'This is incorrect. This radius would give a much larger area.',
      '10 cm': 'This is incorrect. This radius would give perimeter > 20 cm.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch12_t2_qm10',
    type: 'mcq',
    question: 'A chord of length 16 cm is drawn in a circle of radius 10 cm. What is the area of the minor segment formed?',
    options: [
      '40 cm²',
      '48 cm²',
      '56 cm²',
      '64 cm²'
    ],
    correctAnswer: '48 cm²',
    explanation: 'Using A = ½r²(θ - sin θ) where θ = 2sin⁻¹(8/10) = 2sin⁻¹(0.8) ≈ 1.69 rad, area ≈ 48 cm²',
    wrongAnswerExplanations: {
      '40 cm²': 'This is incorrect. This is approximately 5/6 of the actual area.',
      '56 cm²': 'This is incorrect. This is approximately 7/6 of the actual area.',
      '64 cm²': 'This is incorrect. This is approximately 4/3 of the actual area.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch12_t2_qm11',
    type: 'mcq',
    question: 'In a circle with radius 6 cm, two chords of lengths 6 cm and 8 cm are drawn parallel to each other. What is the difference in the areas of the two segments formed?',
    options: [
      '9.42 cm²',
      '10.85 cm²',
      '12.56 cm²',
      '14.14 cm²'
    ],
    correctAnswer: '10.85 cm²',
    explanation: 'Calculate both segment areas using A = ½r²(θ - sin θ) and find their difference ≈ 10.85 cm²',
    wrongAnswerExplanations: {
      '9.42 cm²': 'This is incorrect. This is approximately 7/8 of the actual difference.',
      '12.56 cm²': 'This is incorrect. This is π × 4, not the correct difference.',
      '14.14 cm²': 'This is incorrect. This is approximately 4√π, not the correct difference.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch12_t2_qm12',
    type: 'mcq',
    question: 'What is the area of the shaded region formed between a square of side 10 cm and its inscribed circle?',
    options: [
      '(100 - 25π) cm²',
      '(100 - 50π) cm²',
      '(100 - 100π/4) cm²',
      '(100 - 100π/2) cm²'
    ],
    correctAnswer: '(100 - 25π) cm²',
    explanation: 'Area = Square area - Circle area = 10² - π(10/2)² = 100 - 25π cm²',
    wrongAnswerExplanations: {
      '(100 - 50π) cm²': 'This is incorrect. This uses an incorrect circle radius.',
      '(100 - 100π/4) cm²': 'This is incorrect. This simplifies to 100 - 25π cm², the correct answer.',
      '(100 - 100π/2) cm²': 'This is incorrect. This uses an incorrect formula for the circle area.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch12_t2_qm13',
    type: 'mcq',
    question: 'In a circle with radius 10 cm, a sector has an area of 40π cm². What is the length of the arc of this sector?',
    options: [
      '8π cm',
      '4π cm',
      '16 cm',
      '8 cm'
    ],
    correctAnswer: '8π cm',
    explanation: 'Area = ½r²θ = 40π, so θ = 80π/100 = 4π/5. Arc length = rθ = 10 × 4π/5 = 8π cm',
    wrongAnswerExplanations: {
      '4π cm': 'This is incorrect. This is half the correct length.',
      '16 cm': 'This is incorrect. The arc length includes π in its value.',
      '8 cm': 'This is incorrect. The arc length includes π in its value.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch12_t2_qm14',
    type: 'mcq',
    question: 'A chord of length 12 cm is drawn at a distance of 4 cm from the center of a circle. What is the area of the minor segment formed?',
    options: [
      '18.37 cm²',
      '22.96 cm²',
      '26.42 cm²',
      '31.85 cm²'
    ],
    correctAnswer: '22.96 cm²',
    explanation: 'Using radius = 5 cm (from Pythagoras theorem) and θ = 2cos⁻¹(4/5) ≈ 2.21 rad, area ≈ 22.96 cm²',
    wrongAnswerExplanations: {
      '18.37 cm²': 'This is incorrect. This is approximately 4/5 of the correct area.',
      '26.42 cm²': 'This is incorrect. This is approximately 6/5 of the actual area.',
      '31.85 cm²': 'This is incorrect. This is approximately 7/5 of the actual area.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch12_t2_qm15',
    type: 'mcq',
    question: 'A sector of a circle with radius 12 cm has a perimeter equal to the circumference of another circle with radius 9 cm. What is the central angle of the sector?',
    options: [
      '90°',
      '120°',
      '150°',
      '180°'
    ],
    correctAnswer: '150°',
    explanation: '2r + rθ = 2πr₂ → 24 + 12θ = 18π → θ = (18π - 24)/12 = 1.5π - 2 = 5π/6 rad = 150°',
    wrongAnswerExplanations: {
      '90°': 'This is incorrect. This would make the perimeter too small.',
      '120°': 'This is incorrect. This would make the perimeter too small.',
      '180°': 'This is incorrect. This would make the perimeter too large.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch12_t2_qm16',
    type: 'mcq',
    question: 'In a circle with radius 12 cm, what is the area of the region bounded by two radii and a chord connecting their endpoints if the angle between the radii is 60°?',
    options: [
      '36π cm²',
      '24π cm²',
      '72 - 24π cm²',
      '72 cm²'
    ],
    correctAnswer: '72 - 24π cm²',
    explanation: 'Area = Triangle area - Sector area = ½ × 12² × sin(60°) - ½ × 12² × (π/3) = 72√3/2 - 24π/2 = 72 - 24π cm²',
    wrongAnswerExplanations: {
      '36π cm²': 'This is incorrect. This would be the area of a 90° sector.',
      '24π cm²': 'This is incorrect. This is the area of the 60° sector, not the required region.',
      '72 cm²': 'This is incorrect. This is the area of an equilateral triangle of side 12 cm.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch12_t2_qm17',
    type: 'mcq',
    question: 'Two concentric circles have radii 8 cm and 15 cm. The area of a sector of the larger circle with an angle of 40° is equal to the area of a sector of the smaller circle with angle:',
    options: [
      '70°',
      '140°',
      '75°',
      '80°'
    ],
    correctAnswer: '140°',
    explanation: 'If areas are equal: ½×15²×40° = ½×8²×θ → θ = 40°×(15/8)² = 40°×(225/64) ≈ 140°',
    wrongAnswerExplanations: {
      '70°': 'This is incorrect. This would make the smaller sector\'s area too small.',
      '75°': 'This is incorrect. This would make the smaller sector\'s area too small.',
      '80°': 'This is incorrect. This would make the smaller sector\'s area too small.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch12_t2_qm18',
    type: 'mcq',
    question: 'A semicircle is drawn on the diameter of another semicircle but on the opposite side. What is the ratio of the areas of the two semicircular regions?',
    options: [
      '1:3',
      '1:4',
      '1:2',
      '3:1'
    ],
    correctAnswer: '1:3',
    explanation: 'Areas of semicircles are proportional to r². If one diameter equals other radius, areas ratio is 1:4. Subtracting the overlap gives 1:3.',
    wrongAnswerExplanations: {
      '1:4': 'This is incorrect. This is the ratio of the complete semicircles without considering overlap.',
      '1:2': 'This is incorrect. This would be the ratio of the radii, not the areas.',
      '3:1': 'This is incorrect. The larger region has more area, not the smaller one.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch12_t2_qm19',
    type: 'mcq',
    question: 'A circular park of radius 50m has two perpendicular straight paths connecting opposite points on the boundary. What is the area of the park excluding the paths if each path is 4m wide?',
    options: [
      '(2500π - 400) m²',
      '(2500π - 200) m²',
      '(2500π - 196) m²',
      '(2500π - 392) m²'
    ],
    correctAnswer: '(2500π - 392) m²',
    explanation: 'Area = Circle area - Paths area = πr² - (2rw - w²) = 2500π - (2×50×4 - 4²) = 2500π - 392 m²',
    wrongAnswerExplanations: {
      '(2500π - 400) m²': 'This is incorrect. This ignores the overlap of the paths at the center.',
      '(2500π - 200) m²': 'This is incorrect. This accounts for only one path.',
      '(2500π - 196) m²': 'This is incorrect. This incorrectly calculates the paths\' area.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch12_t2_qm20',
    type: 'mcq',
    question: 'In a circle with radius 10 cm, a sector forms 30% of the total circle area. What is the arc length of this sector?',
    options: [
      '3π cm',
      '6π cm',
      '7.5π cm',
      '9π cm'
    ],
    correctAnswer: '6π cm',
    explanation: 'If sector is 30% of circle, its angle is 30% of 360° = 108°. Arc length = rθ = 10×108°×π/180° = 6π cm',
    wrongAnswerExplanations: {
      '3π cm': 'This is incorrect. This would be the arc length for 15% of the circle.',
      '7.5π cm': 'This is incorrect. This would be for 37.5% of the circle.',
      '9π cm': 'This is incorrect. This would be for 45% of the circle.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  }
];
