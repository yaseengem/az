import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch6_t2_qm1',
    type: 'mcq',
    question: 'In triangles ABC and DEF, if ∠A = ∠D, ∠B = ∠E, AB = 5 cm, DE = 7.5 cm, and BC = 6 cm, what is the length of EF?',
    options: [
      '9 cm',
      '7 cm',
      '8 cm',
      '10 cm'
    ],
    correctAnswer: '9 cm',
    explanation: 'Since the triangles are similar (by AA), DE/AB = EF/BC, so EF = (DE/AB) × BC = (7.5/5) × 6 = 9 cm.',
    wrongAnswerExplanations: {
      '7 cm': 'This is incorrect. Using the proportion for similar triangles: EF = (DE/AB) × BC = (7.5/5) × 6 = 9 cm.',
      '8 cm': 'This is incorrect. Using the proportion for similar triangles: EF = (DE/AB) × BC = (7.5/5) × 6 = 9 cm.',
      '10 cm': 'This is incorrect. Using the proportion for similar triangles: EF = (DE/AB) × BC = (7.5/5) × 6 = 9 cm.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch6_t2_qm2',
    type: 'mcq',
    question: 'In ∆PQR, point S divides PQ in the ratio 2:1 and point T divides PR in the ratio 2:1. What can be concluded about line segment ST?',
    options: [
      'ST is parallel to QR and ST = (2/3)QR',
      'ST is parallel to QR and ST = (1/3)QR',
      'ST is perpendicular to QR',
      'ST intersects QR at its midpoint'
    ],
    correctAnswer: 'ST is parallel to QR and ST = (2/3)QR',
    explanation: 'By basic proportionality theorem, ST is parallel to QR. Since S and T divide sides in ratio 2:1, ST = (2/3)QR.',
    wrongAnswerExplanations: {
      'ST is parallel to QR and ST = (1/3)QR': 'ST is parallel to QR, but the ratio is 2/3, not 1/3, as both sides are divided in ratio 2:1.',
      'ST is perpendicular to QR': 'ST is parallel to QR, not perpendicular, according to the basic proportionality theorem.',
      'ST intersects QR at its midpoint': 'ST doesn\'t intersect QR; it\'s parallel to it according to the basic proportionality theorem.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch6_t2_qm3',
    type: 'mcq',
    question: 'Triangle ABC has vertices A(0,0), B(6,0), and C(0,8). Triangle DEF has vertices D(0,0), E(3,0), and F(0,4). What can be concluded about these two triangles?',
    options: [
      'They are similar with a scale factor of 2',
      'They are similar with a scale factor of 1/2',
      'They are congruent',
      'They are not similar'
    ],
    correctAnswer: 'They are similar with a scale factor of 2',
    explanation: 'Both are right triangles with corresponding sides in proportion 6:3 = 8:4 = 2:1. Scale factor from DEF to ABC is 2.',
    wrongAnswerExplanations: {
      'They are similar with a scale factor of 1/2': 'The scale factor from ABC to DEF is 1/2, but from DEF to ABC is 2.',
      'They are congruent': 'The triangles have different dimensions: ABC has sides 6, 8, 10 while DEF has 3, 4, 5, so they\'re not congruent.',
      'They are not similar': 'The triangles are similar because they\'re both right triangles with corresponding sides in proportion.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch6_t2_qm4',
    type: 'mcq',
    question: 'If triangles ABC and DEF are similar with ∠A = ∠D, ∠B = ∠E, and ∠C = ∠F, which of the following statements is NOT necessarily true?',
    options: [
      'AB × DE = BC × EF',
      'AB/DE = BC/EF = AC/DF',
      'Area of ∆ABC/Area of ∆DEF = (AB/DE)²',
      'Perimeter of ∆ABC/Perimeter of ∆DEF = AB/DE'
    ],
    correctAnswer: 'AB × DE = BC × EF',
    explanation: 'In similar triangles, AB/DE = BC/EF, so AB × EF = BC × DE, not AB × DE = BC × EF.',
    wrongAnswerExplanations: {
      'AB/DE = BC/EF = AC/DF': 'This is true for similar triangles - corresponding sides are proportional.',
      'Area of ∆ABC/Area of ∆DEF = (AB/DE)²': 'This is true - the ratio of areas equals the square of the ratio of corresponding sides.',
      'Perimeter of ∆ABC/Perimeter of ∆DEF = AB/DE': 'This is true - the ratio of perimeters equals the ratio of corresponding sides.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch6_t2_qm5',
    type: 'mcq',
    question: 'In ∆ABC, DE is drawn parallel to BC where D is on AB and E is on AC. If AB = 12 cm, AD = 4 cm, and BC = 9 cm, what is the length of DE?',
    options: [
      '3 cm',
      '4 cm',
      '6 cm',
      '7.5 cm'
    ],
    correctAnswer: '3 cm',
    explanation: 'By the basic proportionality theorem, AD/DB = AE/EC = 4/8 = 1/2. So DE/BC = AD/AB = 1/3. Thus DE = (1/3) × 9 = 3 cm.',
    wrongAnswerExplanations: {
      '4 cm': 'This is incorrect. DE/BC = AD/AB = 4/12 = 1/3, so DE = (1/3) × 9 = 3 cm.',
      '6 cm': 'This is incorrect. DE/BC = AD/AB = 4/12 = 1/3, so DE = (1/3) × 9 = 3 cm.',
      '7.5 cm': 'This is incorrect. DE/BC = AD/AB = 4/12 = 1/3, so DE = (1/3) × 9 = 3 cm.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch6_t2_qm6',
    type: 'mcq',
    question: 'In triangle ABC, point D divides BC in the ratio 3:2 (BD:DC = 3:2). Point E divides AC in the ratio 1:4 (AE:EC = 1:4). What is the ratio of areas of triangle ABE to triangle ABC?',
    options: [
      '1/5',
      '3/10',
      '2/5',
      '1/4'
    ],
    correctAnswer: '3/10',
    explanation: 'Using the formula for area ratios with different division points: Area of ABE/Area of ABC = (AE/AC) × (AB/(AB+BC×(AE/AC))) = (1/5) × (3/5) = 3/25.',
    wrongAnswerExplanations: {
      '1/5': 'This only accounts for the ratio AE:AC = 1:5 but ignores the position of point D.',
      '2/5': 'This incorrectly combines the ratios. The correct calculation gives 3/25, not 2/5.',
      '1/4': 'This would be the case if D divided BC in the middle and E divided AC in the ratio 1:4, which is not the case here.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch6_t2_qm7',
    type: 'mcq',
    question: 'A vertical pole of height 6 m casts a shadow of length 4 m. At the same time, a building casts a shadow of length 28 m. What is the height of the building?',
    options: [
      '42 m',
      '36 m',
      '32 m',
      '48 m'
    ],
    correctAnswer: '42 m',
    explanation: 'By similar triangles, Height of building/Height of pole = Building\'s shadow/Pole\'s shadow. So height = (6 × 28)/4 = 42 m.',
    wrongAnswerExplanations: {
      '36 m': 'This is incorrect. Using the proportion: h/6 = 28/4, giving h = (6 × 28)/4 = 42 m.',
      '32 m': 'This is incorrect. Using the proportion: h/6 = 28/4, giving h = (6 × 28)/4 = 42 m.',
      '48 m': 'This is incorrect. Using the proportion: h/6 = 28/4, giving h = (6 × 28)/4 = 42 m.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch6_t2_qm8',
    type: 'mcq',
    question: 'In ∆ABC, ∠A = 60°, ∠B = 80° and ∠C = 40°. Triangle PQR has ∠P = 40°. If these triangles are similar, what are the values of ∠Q and ∠R?',
    options: [
      '∠Q = 60°, ∠R = 80°',
      '∠Q = 80°, ∠R = 60°',
      '∠Q = 40°, ∠R = 100°',
      '∠Q = 100°, ∠R = 40°'
    ],
    correctAnswer: '∠Q = 80°, ∠R = 60°',
    explanation: 'For similar triangles, ∠P = ∠C = 40°. Since ∠A = 60° and ∠B = 80°, we must have ∠Q = ∠B = 80° and ∠R = ∠A = 60°.',
    wrongAnswerExplanations: {
      '∠Q = 60°, ∠R = 80°': 'This incorrectly matches ∠Q with ∠A and ∠R with ∠B. The correct correspondence gives ∠Q = 80° and ∠R = 60°.',
      '∠Q = 40°, ∠R = 100°': 'This is incorrect. If ∠P = 40°, then for similar triangles, ∠Q = 80° and ∠R = 60°.',
      '∠Q = 100°, ∠R = 40°': 'This gives a sum of angles > 180°, which is impossible in a triangle.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch6_t2_qm9',
    type: 'mcq',
    question: 'In triangle ABC, the coordinates of the vertices are A(0,0), B(4,0), and C(0,3). If triangle DEF is similar to ABC with a scale factor of 1.5, and D is at the origin, what are the possible coordinates of E?',
    options: [
      '(6,0)',
      '(0,6)',
      '(6,4.5)',
      '(4.5,6)'
    ],
    correctAnswer: '(6,0)',
    explanation: 'If D is at origin (like A), E must correspond to B. With scale factor 1.5, E\'s coordinates are (4 × 1.5, 0) = (6,0).',
    wrongAnswerExplanations: {
      '(0,6)': 'This would mean E corresponds to C, not B. If D is at origin, and scale factor is 1.5, E should be at (6,0).',
      '(6,4.5)': 'This doesn\'t correspond to any vertex in the similar triangle with scale factor 1.5.',
      '(4.5,6)': 'This doesn\'t correspond to any vertex in the similar triangle with scale factor 1.5.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch6_t2_qm10',
    type: 'mcq',
    question: 'Two poles of heights 6 m and 10 m stand on a plane ground. If the distance between their feet is 12 m, what is the distance between their tops?',
    options: [
      '13 m',
      '12 m',
      '14 m',
      '15 m'
    ],
    correctAnswer: '13 m',
    explanation: 'Using the distance formula for the tops: √[(12)² + (10-6)²] = √[144 + 16] = √160 = 4√10 ≈ 13 m.',
    wrongAnswerExplanations: {
      '12 m': 'This would be true only if the poles were of equal height. The height difference creates a different distance between tops.',
      '14 m': 'This is incorrect. Using the distance formula: √[(12)² + (10-6)²] = √[144 + 16] = √160 ≈ 13 m.',
      '15 m': 'This is incorrect. Using the distance formula: √[(12)² + (10-6)²] = √[144 + 16] = √160 ≈ 13 m.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch6_t2_qm11',
    type: 'mcq',
    question: 'In triangle ABC, D is a point on BC such that AD is the angle bisector of ∠BAC. If AB = 8 cm, AC = 6 cm, and BC = 12 cm, what is the length of BD?',
    options: [
      '8 cm',
      '7.2 cm',
      '6.4 cm',
      '4.8 cm'
    ],
    correctAnswer: '7.2 cm',
    explanation: 'Using the angle bisector theorem: BD/DC = AB/AC = 8/6. With BC = 12, BD + DC = 12, so BD = 7.2 cm.',
    wrongAnswerExplanations: {
      '8 cm': 'This is incorrect. Using the angle bisector theorem: BD/DC = AB/AC = 8/6, so BD = 7.2 cm with BC = 12.',
      '6.4 cm': 'This is incorrect. Using the angle bisector theorem: BD/DC = AB/AC = 8/6, so BD = 7.2 cm with BC = 12.',
      '4.8 cm': 'This is DC, not BD. BD = 7.2 cm using the angle bisector theorem.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch6_t2_qm12',
    type: 'mcq',
    question: 'In a ∆ABC, if D, E, and F are the midpoints of sides BC, CA, and AB respectively, what is the ratio of the area of ∆DEF to the area of ∆ABC?',
    options: [
      '1/4',
      '1/2',
      '3/4',
      '1/3'
    ],
    correctAnswer: '1/4',
    explanation: 'When D, E, F are midpoints of the sides of triangle ABC, the midsegment triangle DEF has area 1/4 of the original triangle.',
    wrongAnswerExplanations: {
      '1/2': 'This is incorrect. The midsegment triangle has area 1/4, not 1/2, of the original triangle.',
      '3/4': 'This is incorrect. The midsegment triangle has area 1/4, not 3/4, of the original triangle.',
      '1/3': 'This is incorrect. The midsegment triangle has area 1/4, not 1/3, of the original triangle.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch6_t2_qm13',
    type: 'mcq',
    question: 'Triangle ABC has vertices A(0,0), B(4,0), and C(0,3). Triangle PQR has vertices P(2,1), Q(6,1), and R(2,4). Are these triangles similar?',
    options: [
      'Yes, with scale factor 1',
      'Yes, with scale factor 4/3',
      'No, they are not similar',
      'Yes, with scale factor 3/4'
    ],
    correctAnswer: 'Yes, with scale factor 1',
    explanation: 'Both are right triangles with legs of lengths 4 and 3. Triangle PQR is simply a translation of ABC, so they\'re similar with scale factor 1.',
    wrongAnswerExplanations: {
      'Yes, with scale factor 4/3': 'The triangles have the same dimensions, just in different positions, so scale factor is 1, not 4/3.',
      'No, they are not similar': 'The triangles are similar (in fact congruent) - both are right triangles with legs of 4 and 3 units.',
      'Yes, with scale factor 3/4': 'The triangles have the same dimensions, just in different positions, so scale factor is 1, not 3/4.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch6_t2_qm14',
    type: 'mcq',
    question: 'Which of the following pairs of triangles are similar by the SSS criterion?',
    options: [
      'Triangle with sides 3, 4, 5 and triangle with sides 6, 8, 10',
      'Triangle with sides 3, 4, 5 and triangle with sides 6, 8, 9',
      'Triangle with sides 3, 4, 5 and triangle with sides 5, 6, 7',
      'Triangle with sides 3, 4, 6 and triangle with sides 4, 6, 9'
    ],
    correctAnswer: 'Triangle with sides 3, 4, 5 and triangle with sides 6, 8, 10',
    explanation: 'For SSS similarity, corresponding sides must be proportional: 3/6 = 4/8 = 5/10 = 1/2, so these triangles are similar.',
    wrongAnswerExplanations: {
      'Triangle with sides 3, 4, 5 and triangle with sides 6, 8, 9': '3/6 = 4/8 = 1/2, but 5/9 ≠ 1/2, so sides aren\'t proportional.',
      'Triangle with sides 3, 4, 5 and triangle with sides 5, 6, 7': 'These sides don\'t form a constant proportion: 3/5 ≠ 4/6 ≠ 5/7.',
      'Triangle with sides 3, 4, 6 and triangle with sides 4, 6, 9': 'These sides don\'t form a constant proportion: 3/4 ≠ 4/6 ≠ 6/9.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch6_t2_qm15',
    type: 'mcq',
    question: 'In triangle ABC, points D and E are on sides AB and AC respectively such that AD:DB = AE:EC = 2:1. If the area of triangle ABC is 63 cm², what is the area of triangle ADE?',
    options: [
      '14 cm²',
      '21 cm²',
      '28 cm²',
      '42 cm²'
    ],
    correctAnswer: '14 cm²',
    explanation: 'When D divides AB in ratio 2:1 and E divides AC in same ratio, then area of ADE/area of ABC = (AD/AB)² = (2/3)² = 4/9. So area of ADE = (4/9) × 63 = 28 cm².',
    wrongAnswerExplanations: {
      '21 cm²': 'This is incorrect. Using the formula: area of ADE = (AD/AB)² × area of ABC = (2/3)² × 63 = 28 cm².',
      '28 cm²': 'This is correct. Area of ADE = (2/3)² × 63 = 4/9 × 63 = 28 cm².',
      '42 cm²': 'This is incorrect. Using the formula: area of ADE = (AD/AB)² × area of ABC = (2/3)² × 63 = 28 cm².'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch6_t2_qm16',
    type: 'mcq',
    question: 'If the coordinates of the vertices of a triangle are (1,1), (4,2), and (2,5), and another triangle has vertices (2,2), (8,4), and (4,10), what can be said about these two triangles?',
    options: [
      'They are similar with scale factor 2',
      'They are similar with scale factor 1/2',
      'They are congruent',
      'They are not similar'
    ],
    correctAnswer: 'They are similar with scale factor 2',
    explanation: 'Second triangle has vertices at (2×1,2×1), (2×4,2×2), and (2×2,2×5), so it\'s a scaled version of first triangle with factor 2.',
    wrongAnswerExplanations: {
      'They are similar with scale factor 1/2': 'The scale factor from first to second is 2, not 1/2.',
      'They are congruent': 'The triangles have different sizes; the second is twice the size of the first.',
      'They are not similar': 'The triangles are similar with a scale factor of 2, as verified by comparing corresponding coordinates.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch6_t2_qm17',
    type: 'mcq',
    question: 'In triangle ABC, AD is the angle bisector of ∠A, where D lies on BC. If AB = 10 cm, AC = 12 cm, and BC = 18 cm, what is the length of BD?',
    options: [
      '10 cm',
      '8 cm',
      '7.5 cm',
      '9 cm'
    ],
    correctAnswer: '8 cm',
    explanation: 'Using the angle bisector theorem: BD/DC = AB/AC = 10/12 = 5/6. With BC = 18, BD + DC = 18, so BD = 8 cm.',
    wrongAnswerExplanations: {
      '10 cm': 'This is incorrect. Using the angle bisector theorem: BD/DC = AB/AC = 10/12 = 5/6, so BD = 8 cm with BC = 18.',
      '7.5 cm': 'This is incorrect. Using the angle bisector theorem: BD/DC = AB/AC = 10/12 = 5/6, so BD = 8 cm with BC = 18.',
      '9 cm': 'This is incorrect. Using the angle bisector theorem: BD/DC = AB/AC = 10/12 = 5/6, so BD = 8 cm with BC = 18.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch6_t2_qm18',
    type: 'mcq',
    question: 'In triangle ABC, point P is on BC such that AP divides ∠BAC in the ratio 1:2. If AB = 6 cm and AC = 9 cm, what is the ratio BP:PC?',
    options: [
      '2:3',
      '1:2',
      '1:3',
      '1:1'
    ],
    correctAnswer: '1:2',
    explanation: 'If AP divides ∠BAC in ratio 1:2, then by the modified angle bisector theorem, BP/PC = AB/AC = 6/9 = 2/3, so BP:PC = 1:1.5 = 2:3.',
    wrongAnswerExplanations: {
      '2:3': 'This is the ratio BP:PC when AP bisects ∠BAC, but here AP divides the angle in ratio 1:2.',
      '1:3': 'This is incorrect. For the given angle division, BP:PC would be 1:2 when AB = 6 cm and AC = 9 cm.',
      '1:1': 'This would be true only if AB = AC, which is not the case here.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch6_t2_qm19',
    type: 'mcq',
    question: 'Two triangles ABC and PQR are similar. If AB = 3 cm, BC = 4 cm, AC = 5 cm, PQ = 6 cm, and QR = 8 cm, what is the length of PR?',
    options: [
      '10 cm',
      '12 cm',
      '9 cm',
      '8 cm'
    ],
    correctAnswer: '10 cm',
    explanation: 'Since triangles are similar, their corresponding sides are proportional: PQ/AB = QR/BC = PR/AC. So PR = (PQ/AB) × AC = (6/3) × 5 = 10 cm.',
    wrongAnswerExplanations: {
      '12 cm': 'This incorrectly uses the ratio 6/3 = 2 with BC = 4 instead of AC = 5. PR = 2 × 5 = 10 cm.',
      '9 cm': 'This incorrectly combines the ratios. The correct calculation gives PR = 2 × 5 = 10 cm.',
      '8 cm': 'This confuses PR with QR. PR = (6/3) × 5 = 10 cm.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch6_t2_qm20',
    type: 'mcq',
    question: 'In triangle ABC, points D and E are on sides AB and AC respectively such that AD = (3/4)AB and AE = (3/4)AC. If the area of triangle ABC is 64 cm², what is the area of triangle ADE?',
    options: [
      '36 cm²',
      '25 cm²',
      '16 cm²',
      '9 cm²'
    ],
    correctAnswer: '36 cm²',
    explanation: 'When D is at (3/4) of AB and E at (3/4) of AC from A, area of ADE/area of ABC = (AD/AB)² = (3/4)² = 9/16. So area of ADE = (9/16) × 64 = 36 cm².',
    wrongAnswerExplanations: {
      '25 cm²': 'This is incorrect. Using the formula: area of ADE = (AD/AB)² × area of ABC = (3/4)² × 64 = 36 cm².',
      '16 cm²': 'This is incorrect. Using the formula: area of ADE = (AD/AB)² × area of ABC = (3/4)² × 64 = 36 cm².',
      '9 cm²': 'This is incorrect. Using the formula: area of ADE = (AD/AB)² × area of ABC = (3/4)² × 64 = 36 cm².'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  }
];
