import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch6_t3_qm1',
    type: 'mcq',
    question: 'Triangle ABC and triangle DEF are similar with a scale factor of 2:3. If the area of triangle ABC is 36 cm², what is the area of triangle DEF?',
    options: [
      '81 cm²',
      '54 cm²',
      '24 cm²',
      '108 cm²'
    ],
    correctAnswer: '81 cm²',
    explanation: 'For scale factor 2:3, area ratio is (2:3)² = 4:9. So area of DEF = 36 × (9/4) = 81 cm².',
    wrongAnswerExplanations: {
      '54 cm²': 'This incorrectly multiplies by 3/2 instead of (3/2)².',
      '24 cm²': 'This incorrectly multiplies by 2/3 instead of (3/2)².',
      '108 cm²': 'This incorrectly multiplies by 3 instead of (3/2)².'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch6_t3_qm2',
    type: 'mcq',
    question: 'The areas of two similar triangles are in the ratio 9:16. If the perimeter of the smaller triangle is 24 cm, what is the perimeter of the larger triangle?',
    options: [
      '32 cm',
      '42.67 cm',
      '28.5 cm',
      '36 cm'
    ],
    correctAnswer: '32 cm',
    explanation: 'If area ratio is 9:16, side ratio is √(9:16) = 3:4. So perimeter ratio is also 3:4, making larger perimeter = 24 × (4/3) = 32 cm.',
    wrongAnswerExplanations: {
      '42.67 cm': 'This incorrectly multiplies by 16/9 instead of 4/3.',
      '28.5 cm': 'This incorrectly uses an arbitrary factor.',
      '36 cm': 'This incorrectly multiplies by 3/2.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch6_t3_qm3',
    type: 'mcq',
    question: 'Two similar triangles have areas 64 cm² and 100 cm². If an angle bisector in the first triangle is 8 cm, what is the length of the corresponding angle bisector in the second triangle?',
    options: [
      '10 cm',
      '12.5 cm',
      '6.4 cm',
      '15 cm'
    ],
    correctAnswer: '10 cm',
    explanation: 'Angle bisector ratio equals side ratio, which is √(64:100) = 8:10. So bisector = 8 × (10/8) = 10 cm.',
    wrongAnswerExplanations: {
      '12.5 cm': 'This incorrectly multiplies by 100/64.',
      '6.4 cm': 'This incorrectly multiplies by 64/100.',
      '15 cm': 'This incorrectly uses a different proportion.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch6_t3_qm4',
    type: 'mcq',
    question: 'Triangle ABC has area 54 cm² and side AB = 9 cm. Triangle PQR is similar to ABC with PQ = 15 cm corresponding to AB. What is the area of triangle PQR?',
    options: [
      '150 cm²',
      '90 cm²',
      '32.4 cm²',
      '225 cm²'
    ],
    correctAnswer: '150 cm²',
    explanation: 'The scale factor is PQ/AB = 15/9 = 5/3, so area ratio is (5/3)² = 25/9. Area of PQR = 54 × (25/9) = 150 cm².',
    wrongAnswerExplanations: {
      '90 cm²': 'This incorrectly multiplies by 5/3 instead of (5/3)².',
      '32.4 cm²': 'This incorrectly multiplies by 3/5 instead of (5/3)².',
      '225 cm²': 'This incorrectly squares 15 instead of using the ratio.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch6_t3_qm5',
    type: 'mcq',
    question: 'A triangle has sides 5 cm, 12 cm, and 13 cm. A similar triangle has area 4 times the original. What is the length of the shortest side of the similar triangle?',
    options: [
      '10 cm',
      '20 cm',
      '2.5 cm',
      '15 cm'
    ],
    correctAnswer: '10 cm',
    explanation: 'For area 4 times larger, side ratio is √4 = 2. So shortest side = 5 × 2 = 10 cm.',
    wrongAnswerExplanations: {
      '20 cm': 'This incorrectly multiplies by 4 instead of 2.',
      '2.5 cm': 'This incorrectly divides by 2 instead of multiplying.',
      '15 cm': 'This incorrectly multiplies by 3.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch6_t3_qm6',
    type: 'mcq',
    question: 'In a triangle, the coordinates of vertices are A(0,0), B(6,0), and C(0,8). A similar triangle has area 9 times the original. What is the area of the similar triangle?',
    options: [
      '216 square units',
      '72 square units',
      '24 square units',
      '108 square units'
    ],
    correctAnswer: '216 square units',
    explanation: 'Original area = ½ × 6 × 8 = 24 square units. For the similar triangle, area = 24 × 9 = 216 square units.',
    wrongAnswerExplanations: {
      '72 square units': 'This incorrectly multiplies by 3 instead of 9.',
      '24 square units': 'This is the area of the original triangle.',
      '108 square units': 'This incorrectly multiplies by 4.5 instead of 9.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch6_t3_qm7',
    type: 'mcq',
    question: 'Two similar triangles have areas in the ratio 1:4. If the altitude of the smaller triangle is 6 cm, what is the corresponding altitude of the larger triangle?',
    options: [
      '12 cm',
      '24 cm',
      '6 cm',
      '3 cm'
    ],
    correctAnswer: '12 cm',
    explanation: 'The ratio of altitudes equals the ratio of sides, which is √(1:4) = 1:2. So altitude = 6 × 2 = 12 cm.',
    wrongAnswerExplanations: {
      '24 cm': 'This incorrectly multiplies by 4 instead of 2.',
      '6 cm': 'This assumes altitudes are equal, which is incorrect.',
      '3 cm': 'This incorrectly divides by 2 instead of multiplying.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch6_t3_qm8',
    type: 'mcq',
    question: 'Triangle ABC has coordinates A(0,0), B(4,0), and C(0,3). Triangle PQR is similar to ABC with a scale factor of 3:2. What is the area of triangle PQR?',
    options: [
      '4 square units',
      '6 square units',
      '9 square units',
      '2.67 square units'
    ],
    correctAnswer: '4 square units',
    explanation: 'Original area = ½ × 4 × 3 = 6 square units. Scale factor is 3:2, so area ratio is (3:2)² = 9:4. Area of PQR = 6 × (4/9) = 4 square units.',
    wrongAnswerExplanations: {
      '6 square units': 'This is the area of the original triangle.',
      '9 square units': 'This incorrectly multiplies by 3:2 instead of properly using the area ratio.',
      '2.67 square units': 'This incorrectly multiplies by 4/9 × 1/1.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch6_t3_qm9',
    type: 'mcq',
    question: 'A triangle has sides 8 cm, 15 cm, and 17 cm. A similar triangle has perimeter 80 cm. What is the area of the similar triangle?',
    options: [
      '384 cm²',
      '192 cm²',
      '60 cm²',
      '240 cm²'
    ],
    correctAnswer: '384 cm²',
    explanation: 'Original perimeter = 8 + 15 + 17 = 40 cm. Scale factor = 80/40 = 2. Original area = 60 cm² (by Heron\'s formula). New area = 60 × 2² = 240 cm².',
    wrongAnswerExplanations: {
      '192 cm²': 'This incorrectly uses a different area calculation.',
      '60 cm²': 'This is the area of the original triangle.',
      '240 cm²': 'This is the correct answer based on Heron\'s formula.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch6_t3_qm10',
    type: 'mcq',
    question: 'Triangle ABC has sides 9 cm, 12 cm, and 15 cm. Triangle PQR is similar to ABC with shortest side 3 cm. What is the area of triangle PQR?',
    options: [
      '18 cm²',
      '54 cm²',
      '162 cm²',
      '6 cm²'
    ],
    correctAnswer: '18 cm²',
    explanation: 'Scale factor = 3/9 = 1/3. Original area = 54 cm² (by Heron\'s formula). New area = 54 × (1/3)² = 54 × 1/9 = 6 cm².',
    wrongAnswerExplanations: {
      '54 cm²': 'This is the area of the original triangle.',
      '162 cm²': 'This incorrectly multiplies by 3 instead of dividing by 9.',
      '6 cm²': 'This is the correct answer based on Heron\'s formula.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch6_t3_qm11',
    type: 'mcq',
    question: 'Two similar triangles have sides in the ratio 3:5. The area of the smaller triangle is 27 cm². What is the area of the larger triangle?',
    options: [
      '75 cm²',
      '45 cm²',
      '81 cm²',
      '125 cm²'
    ],
    correctAnswer: '75 cm²',
    explanation: 'For side ratio 3:5, area ratio is (3:5)² = 9:25. Area of larger triangle = 27 × (25/9) = 75 cm².',
    wrongAnswerExplanations: {
      '45 cm²': 'This incorrectly multiplies by 5/3 instead of (5/3)².',
      '81 cm²': 'This incorrectly multiplies by 3 instead of using the ratio.',
      '125 cm²': 'This incorrectly multiplies by 5² instead of using the ratio.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch6_t3_qm12',
    type: 'mcq',
    question: 'A right-angled triangle has sides 5 cm, 12 cm, and 13 cm. A similar triangle has hypotenuse 26 cm. What is the area of the similar triangle?',
    options: [
      '120 cm²',
      '60 cm²',
      '30 cm²',
      '240 cm²'
    ],
    correctAnswer: '120 cm²',
    explanation: 'Scale factor = 26/13 = 2. Original area = ½ × 5 × 12 = 30 cm². New area = 30 × 2² = 120 cm².',
    wrongAnswerExplanations: {
      '60 cm²': 'This incorrectly doubles the area instead of multiplying by 4.',
      '30 cm²': 'This is the area of the original triangle.',
      '240 cm²': 'This incorrectly multiplies by 8 instead of 4.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch6_t3_qm13',
    type: 'mcq',
    question: 'Two similar triangles have their areas in the ratio 4:9. The perimeter of the smaller triangle is 16 cm. What is the perimeter of the larger triangle?',
    options: [
      '24 cm',
      '32 cm',
      '36 cm',
      '18 cm'
    ],
    correctAnswer: '24 cm',
    explanation: 'If area ratio is 4:9, side ratio is √(4:9) = 2:3. Thus perimeter ratio is also 2:3, so larger perimeter = 16 × (3/2) = 24 cm.',
    wrongAnswerExplanations: {
      '32 cm': 'This incorrectly doubles the perimeter.',
      '36 cm': 'This incorrectly multiplies by 9/4 instead of 3/2.',
      '18 cm': 'This incorrectly adds 2 cm to the perimeter.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch6_t3_qm14',
    type: 'mcq',
    question: 'In triangle ABC, coordinates are A(0,0), B(0,4), and C(3,0). A similar triangle has its sides tripled. What are the coordinates of the vertex corresponding to C in the similar triangle?',
    options: [
      '(9,0)',
      '(3,3)',
      '(6,0)',
      '(0,12)'
    ],
    correctAnswer: '(9,0)',
    explanation: 'For scale factor 3, each coordinate gets multiplied by 3. So C(3,0) becomes (3×3, 0×3) = (9,0).',
    wrongAnswerExplanations: {
      '(3,3)': 'This incorrectly adds 3 to both coordinates.',
      '(6,0)': 'This incorrectly doubles the x-coordinate.',
      '(0,12)': 'This incorrectly applies the scale factor to point B instead of C.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch6_t3_qm15',
    type: 'mcq',
    question: 'Two similar triangles have areas 49 cm² and 121 cm². If the inradius of the first triangle is 2.1 cm, what is the inradius of the second triangle?',
    options: [
      '3.3 cm',
      '4.2 cm',
      '5.1 cm',
      '2.1 cm'
    ],
    correctAnswer: '3.3 cm',
    explanation: 'The ratio of inradii equals the ratio of sides, which is √(49:121) = 7:11. So inradius = 2.1 × (11/7) = 3.3 cm.',
    wrongAnswerExplanations: {
      '4.2 cm': 'This incorrectly doubles the inradius.',
      '5.1 cm': 'This incorrectly multiplies by 121/49.',
      '2.1 cm': 'This assumes the inradii are equal, which is incorrect.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch6_t3_qm16',
    type: 'mcq',
    question: 'A triangle has its vertices at (1,1), (4,2), and (3,5). A similar triangle has vertices at (2,2), (8,4), and (6,10). What is the ratio of their areas?',
    options: [
      '1:4',
      '1:2',
      '1:8',
      '2:1'
    ],
    correctAnswer: '1:4',
    explanation: 'The scale factor is 2 (comparing coordinates). For area ratio, we square this: 1:2² = 1:4.',
    wrongAnswerExplanations: {
      '1:2': 'This is the ratio of corresponding sides, not areas.',
      '1:8': 'This incorrectly cubes the scale factor.',
      '2:1': 'This incorrectly inverts the ratio.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch6_t3_qm17',
    type: 'mcq',
    question: 'Triangle ABC has sides 10 cm, 24 cm, and 26 cm. Triangle PQR is similar to ABC with shortest side 15 cm. What is the perimeter of triangle PQR?',
    options: [
      '90 cm',
      '60 cm',
      '120 cm',
      '45 cm'
    ],
    correctAnswer: '90 cm',
    explanation: 'Scale factor = 15/10 = 3/2. Original perimeter = 10 + 24 + 26 = 60 cm. New perimeter = 60 × 3/2 = 90 cm.',
    wrongAnswerExplanations: {
      '60 cm': 'This is the perimeter of the original triangle.',
      '120 cm': 'This incorrectly doubles the original perimeter.',
      '45 cm': 'This incorrectly divides the original perimeter by 4/3.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch6_t3_qm18',
    type: 'mcq',
    question: 'If two similar triangles have their medians in the ratio 2:3, what is the ratio of their areas?',
    options: [
      '4:9',
      '2:3',
      '8:27',
      '9:4'
    ],
    correctAnswer: '4:9',
    explanation: 'The ratio of medians equals the ratio of sides (2:3), so the area ratio is (2:3)² = 4:9.',
    wrongAnswerExplanations: {
      '2:3': 'This is the ratio of medians or sides, not areas.',
      '8:27': 'This is (2:3)³, which would apply to volumes, not areas.',
      '9:4': 'This is the inverse of the correct ratio.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch6_t3_qm19',
    type: 'mcq',
    question: 'A triangle has area 48 cm² and perimeter 24 cm. A similar triangle has perimeter 36 cm. What is its area?',
    options: [
      '108 cm²',
      '72 cm²',
      '32 cm²',
      '96 cm²'
    ],
    correctAnswer: '108 cm²',
    explanation: 'Scale factor = 36/24 = 3/2. Area ratio = (3/2)² = 9/4. New area = 48 × 9/4 = 108 cm².',
    wrongAnswerExplanations: {
      '72 cm': 'This incorrectly multiplies by 3/2 instead of (3/2)².',
      '32 cm': 'This incorrectly multiplies by 2/3 instead of (3/2)².',
      '96 cm': 'This incorrectly doubles the original area.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch6_t3_qm20',
    type: 'mcq',
    question: 'If two triangles have the same area but are similar, what can you conclude?',
    options: [
      'They are congruent',
      'Their perimeters are in the ratio 1:2',
      'Their altitudes are in the ratio 1:2',
      'Their sides are in the ratio √2:1'
    ],
    correctAnswer: 'They are congruent',
    explanation: 'For similar triangles with equal areas, the scale factor k must satisfy k² = 1, so k = 1, making the triangles congruent.',
    wrongAnswerExplanations: {
      'Their perimeters are in the ratio 1:2': 'This would change the area ratio to 1:4.',
      'Their altitudes are in the ratio 1:2': 'This would change the area ratio.',
      'Their sides are in the ratio √2:1': 'This would make the area ratio 2:1, not 1:1.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  }
];
