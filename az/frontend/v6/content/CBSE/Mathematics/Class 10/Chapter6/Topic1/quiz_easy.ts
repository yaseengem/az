import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch6_t1_qe1',
    type: 'mcq',
    question: 'Two triangles are said to be similar if:',
    options: [
      'Their corresponding angles are equal and corresponding sides are proportional',
      'Their corresponding sides are equal',
      'Their areas are equal',
      'Their perimeters are equal'
    ],
    correctAnswer: 'Their corresponding angles are equal and corresponding sides are proportional',
    explanation: 'Similar triangles have equal corresponding angles and proportional corresponding sides.',
    wrongAnswerExplanations: {
      'Their corresponding sides are equal': 'This defines congruent triangles, not similar triangles.',
      'Their areas are equal': 'Similar triangles can have different areas while maintaining proportional sides.',
      'Their perimeters are equal': 'Similar triangles can have different perimeters while maintaining proportional sides.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch6_t1_qe2',
    type: 'mcq',
    question: 'If two triangles are similar, the ratio of their areas is:',
    options: [
      'Equal to the square of the ratio of their corresponding sides',
      'Equal to the ratio of their corresponding sides',
      'Equal to the square root of the ratio of their corresponding sides',
      'Not related to the ratio of their corresponding sides'
    ],
    correctAnswer: 'Equal to the square of the ratio of their corresponding sides',
    explanation: 'If the sides are in ratio k, the areas are in ratio k².',
    wrongAnswerExplanations: {
      'Equal to the ratio of their corresponding sides': 'Area depends on the square of linear dimensions.',
      'Equal to the square root of the ratio of their corresponding sides': 'The relationship is squared, not square root.',
      'Not related to the ratio of their corresponding sides': 'There is a definite mathematical relationship between them.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch6_t1_qe3',
    type: 'mcq',
    question: 'The similarity criterion AA stands for:',
    options: [
      'Angle-Angle',
      'Angle-Angle-Angle',
      'Area-Area',
      'Acute-Acute'
    ],
    correctAnswer: 'Angle-Angle',
    explanation: 'AA criterion states that if two angles of one triangle equal two angles of another, the triangles are similar.',
    wrongAnswerExplanations: {
      'Angle-Angle-Angle': 'Only two angles are needed as the third can be determined from the others.',
      'Area-Area': 'This is not a valid similarity criterion.',
      'Acute-Acute': 'This is not a valid similarity criterion.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch6_t1_qe4',
    type: 'mcq',
    question: 'In similar triangles, the ratio of corresponding heights is:',
    options: [
      'Equal to the ratio of corresponding sides',
      'Equal to the ratio of corresponding angles',
      'Equal to the square of the ratio of corresponding sides',
      'Equal to the square root of the ratio of corresponding sides'
    ],
    correctAnswer: 'Equal to the ratio of corresponding sides',
    explanation: 'Heights, being linear measurements, are in the same ratio as the corresponding sides.',
    wrongAnswerExplanations: {
      'Equal to the ratio of corresponding angles': 'Angles are equal, not proportional, in similar triangles.',
      'Equal to the square of the ratio of corresponding sides': 'This applies to areas, not heights.',
      'Equal to the square root of the ratio of corresponding sides': 'No such relationship exists.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch6_t1_qe5',
    type: 'mcq',
    question: 'Which of the following is NOT a valid criterion for similarity of triangles?',
    options: [
      'SSA (Side-Side-Angle)',
      'SAS (Side-Angle-Side)',
      'SSS (Side-Side-Side)',
      'AA (Angle-Angle)'
    ],
    correctAnswer: 'SSA (Side-Side-Angle)',
    explanation: 'SSA is not a valid criterion for similarity as it does not guarantee proportional sides.',
    wrongAnswerExplanations: {
      'SAS (Side-Angle-Side)': 'This is a valid criterion (SAS similarity).',
      'SSS (Side-Side-Side)': 'This is a valid criterion (SSS similarity).',
      'AA (Angle-Angle)': 'This is a valid criterion (AA similarity).'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch6_t1_qe6',
    type: 'mcq',
    question: 'If two triangles have their corresponding angles equal, then:',
    options: [
      'The triangles are similar',
      'The triangles are congruent',
      'Only two sides are proportional',
      'Nothing can be concluded about similarity'
    ],
    correctAnswer: 'The triangles are similar',
    explanation: 'By the AA criterion, equal corresponding angles ensure triangle similarity.',
    wrongAnswerExplanations: {
      'The triangles are congruent': 'Equal angles don\'t guarantee equal sides, only proportional sides.',
      'Only two sides are proportional': 'All three sides will be proportional.',
      'Nothing can be concluded about similarity': 'AA criterion definitively establishes similarity.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch6_t1_qe7',
    type: 'mcq',
    question: 'A triangle has sides 3 cm, 4 cm, and 5 cm. A similar triangle has shortest side 6 cm. What is its longest side?',
    options: [
      '10 cm',
      '8 cm',
      '12 cm',
      '15 cm'
    ],
    correctAnswer: '10 cm',
    explanation: 'The scale factor is 6/3 = 2, so the longest side is 5 × 2 = 10 cm.',
    wrongAnswerExplanations: {
      '8 cm': 'This would not maintain the correct proportion.',
      '12 cm': 'This is too large for the given scale factor.',
      '15 cm': 'This is too large for the given scale factor.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch6_t1_qe8',
    type: 'mcq',
    question: 'If the ratio of corresponding sides of two similar triangles is 2:3, what is the ratio of their areas?',
    options: [
      '4:9',
      '2:3',
      '8:27',
      '9:4'
    ],
    correctAnswer: '4:9',
    explanation: 'The ratio of areas is (2:3)² = 4:9.',
    wrongAnswerExplanations: {
      '2:3': 'This is the ratio of sides, not areas.',
      '8:27': 'This would be (2:3)³, which applies to volumes, not areas.',
      '9:4': 'This is the inverse of the correct ratio.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch6_t1_qe9',
    type: 'mcq',
    question: 'Two similar triangles have perimeters 18 cm and 24 cm. If a side of the first triangle is 5 cm, what is the corresponding side of the second triangle?',
    options: [
      '6.67 cm',
      '5 cm',
      '7.5 cm',
      '10 cm'
    ],
    correctAnswer: '6.67 cm',
    explanation: 'The ratio of sides is the same as the ratio of perimeters: 24/18 = 4/3. So the side is 5 × 4/3 ≈ 6.67 cm.',
    wrongAnswerExplanations: {
      '5 cm': 'This assumes the triangles are congruent, which they aren\'t.',
      '7.5 cm': 'This uses an incorrect ratio of 3:2 rather than 4:3.',
      '10 cm': 'This assumes the ratio is 2:1 which is incorrect.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch6_t1_qe10',
    type: 'mcq',
    question: 'What does the SAS similarity criterion state?',
    options: [
      'If two sides of a triangle are proportional to two sides of another and the included angles are equal, the triangles are similar',
      'If all three sides of a triangle are proportional to three sides of another, the triangles are similar',
      'If two angles of a triangle are equal to two angles of another, the triangles are similar',
      'If two triangles have the same area, they are similar'
    ],
    correctAnswer: 'If two sides of a triangle are proportional to two sides of another and the included angles are equal, the triangles are similar',
    explanation: 'SAS similarity requires proportional sides with an equal included angle.',
    wrongAnswerExplanations: {
      'If all three sides of a triangle are proportional to three sides of another, the triangles are similar': 'This is the SSS similarity criterion.',
      'If two angles of a triangle are equal to two angles of another, the triangles are similar': 'This is the AA similarity criterion.',
      'If two triangles have the same area, they are similar': 'Equal areas don\'t guarantee similarity.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch6_t1_qe11',
    type: 'mcq',
    question: 'A shadow of a 15-meter tall building is 9 meters long. At the same time, a pole casts a shadow of 3 meters. How tall is the pole?',
    options: [
      '5 meters',
      '7.5 meters',
      '6 meters',
      '4.5 meters'
    ],
    correctAnswer: '5 meters',
    explanation: 'By similar triangles, pole height/building height = pole shadow/building shadow, so pole height = 15 × 3/9 = 5 m.',
    wrongAnswerExplanations: {
      '7.5 meters': 'This incorrectly assumes the ratio is 1:2 instead of 1:3.',
      '6 meters': 'This incorrectly uses the ratio of shadows as 1:2.5.',
      '4.5 meters': 'This incorrectly uses a different proportion.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch6_t1_qe12',
    type: 'mcq',
    question: 'If the scale factor of two similar triangles is 1:4, what is the ratio of their perimeters?',
    options: [
      '1:4',
      '1:2',
      '1:16',
      '1:8'
    ],
    correctAnswer: '1:4',
    explanation: 'Perimeter is a linear measurement, so its ratio equals the scale factor, which is 1:4.',
    wrongAnswerExplanations: {
      '1:2': 'This would be the ratio if scale factor referred to the area ratio.',
      '1:16': 'This is the ratio of areas, not perimeters.',
      '1:8': 'This ratio doesn\'t correspond to any relationship between similar triangles.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch6_t1_qe13',
    type: 'mcq',
    question: 'In similar triangles, which of the following is NOT proportional?',
    options: [
      'Angles',
      'Sides',
      'Perimeters',
      'Medians'
    ],
    correctAnswer: 'Angles',
    explanation: 'In similar triangles, angles are equal (not proportional), while sides, perimeters, and medians are proportional.',
    wrongAnswerExplanations: {
      'Sides': 'Sides are proportional in similar triangles by definition.',
      'Perimeters': 'Perimeters are proportional as they are sums of proportional sides.',
      'Medians': 'Medians are proportional in similar triangles.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch6_t1_qe14',
    type: 'mcq',
    question: 'If ΔABC ~ ΔPQR, which of the following is true?',
    options: [
      'AB/PQ = BC/QR = CA/RP',
      'AB/PQ = BC/RP = CA/QR',
      'AB/QR = BC/RP = CA/PQ',
      'AB/RP = BC/PQ = CA/QR'
    ],
    correctAnswer: 'AB/PQ = BC/QR = CA/RP',
    explanation: 'In similar triangles, corresponding sides are proportional, so AB/PQ = BC/QR = CA/RP.',
    wrongAnswerExplanations: {
      'AB/PQ = BC/RP = CA/QR': 'This incorrectly matches sides that don\'t correspond.',
      'AB/QR = BC/RP = CA/PQ': 'This incorrectly matches sides that don\'t correspond.',
      'AB/RP = BC/PQ = CA/QR': 'This incorrectly matches sides that don\'t correspond.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch6_t1_qe15',
    type: 'mcq',
    question: 'If ΔABC ~ ΔDEF and AB = 3 cm, DE = 5 cm, BC = 4 cm, then EF = ?',
    options: [
      '6⅔ cm',
      '2.4 cm',
      '8 cm',
      '7.5 cm'
    ],
    correctAnswer: '6⅔ cm',
    explanation: 'The scale factor is DE/AB = 5/3, so EF = BC × 5/3 = 4 × 5/3 = 6⅔ cm.',
    wrongAnswerExplanations: {
      '2.4 cm': 'This uses the inverse ratio 3/5 instead of 5/3.',
      '8 cm': 'This incorrectly doubles the original side.',
      '7.5 cm': 'This adds rather than multiplies by the scale factor.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch6_t1_qe16',
    type: 'mcq',
    question: 'How many minimum pieces of information are needed to establish similarity between two triangles?',
    options: [
      '3',
      '2',
      '4',
      '6'
    ],
    correctAnswer: '3',
    explanation: 'Typically 3 pieces of information are needed: 2 angles (AA), 2 sides and included angle (SAS), or 3 sides (SSS).',
    wrongAnswerExplanations: {
      '2': 'Two pieces are insufficient to establish similarity.',
      '4': 'Three pieces are sufficient; 4 would be redundant.',
      '6': 'This is far more than needed for similarity.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch6_t1_qe17',
    type: 'mcq',
    question: 'What can be concluded if two triangles have their corresponding angles equal?',
    options: [
      'The triangles are similar',
      'The triangles are identical',
      'The triangles have equal areas',
      'The triangles have equal perimeters'
    ],
    correctAnswer: 'The triangles are similar',
    explanation: 'By the AA criterion, if corresponding angles are equal, the triangles are similar.',
    wrongAnswerExplanations: {
      'The triangles are identical': 'Equal angles don\'t guarantee identical triangles, just similarity.',
      'The triangles have equal areas': 'Similar triangles can have different areas.',
      'The triangles have equal perimeters': 'Similar triangles can have different perimeters.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch6_t1_qe18',
    type: 'mcq',
    question: 'If ΔABC ~ ΔXYZ and area of ΔABC is 16 cm² while area of ΔXYZ is 4 cm², what is the ratio of corresponding sides?',
    options: [
      '2:1',
      '4:1',
      '1:2',
      '√2:1'
    ],
    correctAnswer: '2:1',
    explanation: 'If the ratio of areas is 16:4 = 4:1, the ratio of sides is √(4:1) = 2:1.',
    wrongAnswerExplanations: {
      '4:1': 'This is the ratio of areas, not sides.',
      '1:2': 'This is the inverse of the correct ratio.',
      '√2:1': 'This incorrectly applies a different mathematical relationship.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch6_t1_qe19',
    type: 'mcq',
    question: 'A triangle has angles 30°, 60°, and 90°. Which of the following triangles is similar to it?',
    options: [
      'A triangle with angles 30°, 60°, and 90°',
      'A triangle with sides 3 cm, 4 cm, and 5 cm',
      'A triangle with angles 45°, 45°, and 90°',
      'A triangle with angles 60°, 60°, and 60°'
    ],
    correctAnswer: 'A triangle with angles 30°, 60°, and 90°',
    explanation: 'Similar triangles have equal corresponding angles (AA criterion).',
    wrongAnswerExplanations: {
      'A triangle with sides 3 cm, 4 cm, and 5 cm': 'This is a right triangle but doesn\'t have the same angles.',
      'A triangle with angles 45°, 45°, and 90°': 'The angles don\'t match the original triangle.',
      'A triangle with angles 60°, 60°, and 60°': 'This is an equilateral triangle with different angles.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch6_t1_qe20',
    type: 'mcq',
    question: 'If the corresponding sides of two similar triangles are in the ratio 3:4, what is the ratio of their heights?',
    options: [
      '3:4',
      '9:16',
      '4:3',
      '16:9'
    ],
    correctAnswer: '3:4',
    explanation: 'Heights are linear measurements, so they are in the same ratio as corresponding sides (3:4).',
    wrongAnswerExplanations: {
      '9:16': 'This is the ratio of areas, not heights.',
      '4:3': 'This is the inverse of the correct ratio.',
      '16:9': 'This is the ratio of areas in reverse order.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  }
];
