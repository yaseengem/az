import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch6_t3_qe1',
    type: 'mcq',
    question: 'If two triangles are similar with scale factor 2:3, what is the ratio of their areas?',
    options: [
      '4:9',
      '2:3',
      '8:27',
      '9:4'
    ],
    correctAnswer: '4:9',
    explanation: 'For similar triangles with scale factor k, the ratio of areas is k². So for 2:3, the ratio is (2:3)² = 4:9.',
    wrongAnswerExplanations: {
      '2:3': 'This is the ratio of corresponding sides, not areas.',
      '8:27': 'This would be (2:3)³, which applies to volumes, not areas.',
      '9:4': 'This is the inverse of the correct ratio.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch6_t3_qe2',
    type: 'mcq',
    question: 'The ratio of areas of two similar triangles is 25:16. What is the ratio of their corresponding sides?',
    options: [
      '5:4',
      '25:16',
      '4:5',
      '√25:√16'
    ],
    correctAnswer: '5:4',
    explanation: 'If the area ratio is 25:16, the side ratio is √(25:16) = 5:4.',
    wrongAnswerExplanations: {
      '25:16': 'This is the ratio of areas, not sides.',
      '4:5': 'This is the inverse of the correct ratio.',
      '√25:√16': 'This simplifies to 5:4, but is expressed in an unnecessarily complex way.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch6_t3_qe3',
    type: 'mcq',
    question: 'If the areas of two similar triangles are in the ratio 9:4, what is the ratio of their corresponding heights?',
    options: [
      '3:2',
      '9:4',
      '2:3',
      '4:9'
    ],
    correctAnswer: '3:2',
    explanation: 'The ratio of heights is the same as the ratio of corresponding sides, which is √(area ratio) = √(9:4) = 3:2.',
    wrongAnswerExplanations: {
      '9:4': 'This is the ratio of areas, not heights.',
      '2:3': 'This is the inverse of the correct ratio.',
      '4:9': 'This is the inverse of the area ratio.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch6_t3_qe4',
    type: 'mcq',
    question: 'If the ratio of perimeters of two similar triangles is 5:3, what is the ratio of their areas?',
    options: [
      '25:9',
      '5:3',
      '125:27',
      '9:25'
    ],
    correctAnswer: '25:9',
    explanation: 'The ratio of areas is the square of the ratio of corresponding sides (or perimeters), so (5:3)² = 25:9.',
    wrongAnswerExplanations: {
      '5:3': 'This is the ratio of perimeters, not areas.',
      '125:27': 'This would be (5:3)³, which applies to volumes, not areas.',
      '9:25': 'This is the inverse of the correct ratio.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch6_t3_qe5',
    type: 'mcq',
    question: 'Two similar triangles have areas 64 cm² and 36 cm². If a side of the first triangle is 16 cm, what is the corresponding side of the second triangle?',
    options: [
      '12 cm',
      '9 cm',
      '8 cm',
      '24 cm'
    ],
    correctAnswer: '12 cm',
    explanation: 'For areas 64:36, the side ratio is √(64:36) = 4:3, so the side is 16 × (3/4) = 12 cm.',
    wrongAnswerExplanations: {
      '9 cm': 'This incorrectly assumes the side ratio equals 36/64.',
      '8 cm': 'This incorrectly assumes the side is halved.',
      '24 cm': 'This incorrectly multiplies by 3/2 instead of the correct ratio.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch6_t3_qe6',
    type: 'mcq',
    question: 'If triangle ABC is similar to triangle DEF with scale factor 1:2, and the area of triangle ABC is 9 cm², what is the area of triangle DEF?',
    options: [
      '36 cm²',
      '18 cm²',
      '4.5 cm²',
      '72 cm²'
    ],
    correctAnswer: '36 cm²',
    explanation: 'For scale factor 1:2, area ratio is (1:2)² = 1:4. So area of DEF = 9 × 4 = 36 cm².',
    wrongAnswerExplanations: {
      '18 cm²': 'This incorrectly doubles the area instead of multiplying by 4.',
      '4.5 cm²': 'This incorrectly divides by 2 instead of multiplying by 4.',
      '72 cm²': 'This incorrectly multiplies by 8 instead of 4.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch6_t3_qe7',
    type: 'mcq',
    question: 'The areas of two similar triangles are 121 cm² and 81 cm². If the altitude of the first triangle is 11 cm, what is the altitude of the second triangle?',
    options: [
      '9 cm',
      '11 cm',
      '13.5 cm',
      '7.33 cm'
    ],
    correctAnswer: '9 cm',
    explanation: 'The ratio of altitudes equals the ratio of corresponding sides, which is √(121:81) = 11:9. So altitude = 11 × (9/11) = 9 cm.',
    wrongAnswerExplanations: {
      '11 cm': 'This assumes both triangles have the same altitude.',
      '13.5 cm': 'This incorrectly multiplies by 9/11 × 11/9.',
      '7.33 cm': 'This incorrectly divides 11 by √(121/81).'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch6_t3_qe8',
    type: 'mcq',
    question: 'The mathematical relationship between the areas of two similar triangles and the ratio of their corresponding sides is:',
    options: [
      'Area₁/Area₂ = (Side₁/Side₂)²',
      'Area₁/Area₂ = Side₁/Side₂',
      'Area₁/Area₂ = (Side₁/Side₂)³',
      'Area₁/Area₂ = √(Side₁/Side₂)'
    ],
    correctAnswer: 'Area₁/Area₂ = (Side₁/Side₂)²',
    explanation: 'The ratio of areas of similar triangles equals the square of the ratio of their corresponding sides.',
    wrongAnswerExplanations: {
      'Area₁/Area₂ = Side₁/Side₂': 'This is incorrect; areas scale by the square of linear dimensions.',
      'Area₁/Area₂ = (Side₁/Side₂)³': 'This would apply to volumes, not areas.',
      'Area₁/Area₂ = √(Side₁/Side₂)': 'This is the inverse of the correct relationship.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch6_t3_qe9',
    type: 'mcq',
    question: 'If the ratio of corresponding sides of two similar triangles is 3:5, what is the ratio of their areas?',
    options: [
      '9:25',
      '3:5',
      '25:9',
      '6:10'
    ],
    correctAnswer: '9:25',
    explanation: 'For side ratio 3:5, the area ratio is (3:5)² = 9:25.',
    wrongAnswerExplanations: {
      '3:5': 'This is the ratio of sides, not areas.',
      '25:9': 'This is the inverse of the correct ratio.',
      '6:10': 'This simplifies to 3:5, which is the ratio of sides, not areas.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch6_t3_qe10',
    type: 'mcq',
    question: 'The areas of two similar triangles are 36 cm² and 64 cm². What is the ratio of their perimeters?',
    options: [
      '3:4',
      '6:8',
      '9:16',
      '36:64'
    ],
    correctAnswer: '3:4',
    explanation: 'The perimeter ratio equals the side ratio, which is √(area ratio) = √(36:64) = 3:4.',
    wrongAnswerExplanations: {
      '6:8': 'This simplifies to 3:4, so it\'s correct but not in simplest form.',
      '9:16': 'This is the ratio of areas, not perimeters.',
      '36:64': 'This simplifies to 9:16, which is the area ratio, not the perimeter ratio.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch6_t3_qe11',
    type: 'mcq',
    question: 'If the perimeters of two similar triangles are in the ratio 2:3, what is the ratio of their areas?',
    options: [
      '4:9',
      '2:3',
      '8:27',
      '9:4'
    ],
    correctAnswer: '4:9',
    explanation: 'For perimeter ratio 2:3, the area ratio is (2:3)² = 4:9.',
    wrongAnswerExplanations: {
      '2:3': 'This is the ratio of perimeters, not areas.',
      '8:27': 'This is (2:3)³, which would apply to volumes, not areas.',
      '9:4': 'This is the inverse of the correct ratio.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch6_t3_qe12',
    type: 'mcq',
    question: 'Triangle ABC has sides 3, 4, and 5 units. Triangle PQR is similar to ABC with a scale factor of 2. What is the area of triangle PQR?',
    options: [
      '24 square units',
      '12 square units',
      '6 square units',
      '36 square units'
    ],
    correctAnswer: '24 square units',
    explanation: 'Area of ABC = ½ × 3 × 4 = 6 square units. For scale factor 2, area of PQR = 6 × 2² = 24 square units.',
    wrongAnswerExplanations: {
      '12 square units': 'This incorrectly uses a scale factor of √2 for the area.',
      '6 square units': 'This assumes both triangles have the same area.',
      '36 square units': 'This incorrectly uses a scale factor of 3 for the area.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch6_t3_qe13',
    type: 'mcq',
    question: 'Two similar triangles have areas in the ratio 16:25. If a median of the smaller triangle is 8 cm, what is the corresponding median of the larger triangle?',
    options: [
      '10 cm',
      '16 cm',
      '12.5 cm',
      '6.4 cm'
    ],
    correctAnswer: '10 cm',
    explanation: 'The ratio of medians equals the ratio of sides, which is √(16:25) = 4:5. So the median = 8 × (5/4) = 10 cm.',
    wrongAnswerExplanations: {
      '16 cm': 'This incorrectly doubles the median.',
      '12.5 cm': 'This incorrectly multiplies by 25/16.',
      '6.4 cm': 'This incorrectly multiplies by 4/5.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch6_t3_qe14',
    type: 'mcq',
    question: 'If the ratio of areas of two similar triangles is 4:1, what is the ratio of their corresponding sides?',
    options: [
      '2:1',
      '4:1',
      '1:2',
      '√2:1'
    ],
    correctAnswer: '2:1',
    explanation: 'If the area ratio is 4:1, the side ratio is √(4:1) = 2:1.',
    wrongAnswerExplanations: {
      '4:1': 'This is the ratio of areas, not sides.',
      '1:2': 'This is the inverse of the correct ratio.',
      '√2:1': 'This would be correct if the area ratio was 2:1, not 4:1.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch6_t3_qe15',
    type: 'mcq',
    question: 'The area of a triangle is 48 cm². A similar triangle has sides twice as long. What is the area of the similar triangle?',
    options: [
      '192 cm²',
      '96 cm²',
      '144 cm²',
      '384 cm²'
    ],
    correctAnswer: '192 cm²',
    explanation: 'For a scale factor of 2, the area scales by 2² = 4. So the area is 48 × 4 = 192 cm².',
    wrongAnswerExplanations: {
      '96 cm²': 'This incorrectly doubles the area instead of multiplying by 4.',
      '144 cm²': 'This incorrectly multiplies the area by 3 instead of 4.',
      '384 cm²': 'This incorrectly multiplies the area by 8 instead of 4.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch6_t3_qe16',
    type: 'mcq',
    question: 'If two similar triangles have a scale factor of 1:3, what is the ratio of their medians?',
    options: [
      '1:3',
      '1:9',
      '3:1',
      '9:1'
    ],
    correctAnswer: '1:3',
    explanation: 'The ratio of medians equals the ratio of corresponding sides, which is 1:3.',
    wrongAnswerExplanations: {
      '1:9': 'This is the ratio of areas, not medians.',
      '3:1': 'This is the inverse of the correct ratio.',
      '9:1': 'This is the inverse of the area ratio.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch6_t3_qe17',
    type: 'mcq',
    question: 'Triangle ABC has area 54 cm². Triangle DEF is similar to ABC with corresponding sides in the ratio 2:3. What is the area of triangle DEF?',
    options: [
      '24 cm²',
      '36 cm²',
      '81 cm²',
      '121.5 cm²'
    ],
    correctAnswer: '24 cm²',
    explanation: 'Side ratio is 2:3, so area ratio is (2:3)² = 4:9. Area of DEF = 54 × (4/9) = 24 cm².',
    wrongAnswerExplanations: {
      '36 cm²': 'This incorrectly multiplies the area by 2/3 instead of 4/9.',
      '81 cm²': 'This incorrectly multiplies the area by 3/2.',
      '121.5 cm²': 'This incorrectly multiplies the area by 9/4.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch6_t3_qe18',
    type: 'mcq',
    question: 'If the ratio of corresponding sides of two similar triangles is k:1, the ratio of their areas is:',
    options: [
      'k²:1',
      'k:1',
      'k³:1',
      '√k:1'
    ],
    correctAnswer: 'k²:1',
    explanation: 'The ratio of areas equals the square of the ratio of corresponding sides.',
    wrongAnswerExplanations: {
      'k:1': 'This is the ratio of sides, not areas.',
      'k³:1': 'This would apply to volumes, not areas.',
      '√k:1': 'This is incorrect; areas scale as the square of linear dimensions.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch6_t3_qe19',
    type: 'mcq',
    question: 'The areas of two similar triangles are 25 cm² and 49 cm². If a side of the first triangle is 10 cm, what is the corresponding side of the second triangle?',
    options: [
      '14 cm',
      '7 cm',
      '5 cm',
      '20 cm'
    ],
    correctAnswer: '14 cm',
    explanation: 'The ratio of sides is √(area ratio) = √(25:49) = 5:7. So side = 10 × (7/5) = 14 cm.',
    wrongAnswerExplanations: {
      '7 cm': 'This incorrectly multiplies by 7/10.',
      '5 cm': 'This incorrectly halves the original side.',
      '20 cm': 'This incorrectly doubles the original side.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch6_t3_qe20',
    type: 'mcq',
    question: 'Which of the following represents the correct relationship between areas of similar triangles?',
    options: [
      'Area₁/Area₂ = (Side₁/Side₂)²',
      'Area₁/Area₂ = Side₁/Side₂',
      'Area₁/Area₂ = Side₁²/Side₂',
      'Area₁/Area₂ = (Side₁×Side₂)/2'
    ],
    correctAnswer: 'Area₁/Area₂ = (Side₁/Side₂)²',
    explanation: 'For similar triangles, the ratio of areas equals the square of the ratio of corresponding sides.',
    wrongAnswerExplanations: {
      'Area₁/Area₂ = Side₁/Side₂': 'This is incorrect; areas are proportional to squares of sides.',
      'Area₁/Area₂ = Side₁²/Side₂': 'This is dimensionally incorrect.',
      'Area₁/Area₂ = (Side₁×Side₂)/2': 'This formula doesn\'t represent the relationship between areas.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  }
];
