import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch6_t1_qm1',
    type: 'mcq',
    question: 'In ΔABC, DE is parallel to BC and divides AB and AC in the ratio 2:3. If BC = 15 cm, what is DE?',
    options: [
      '9 cm',
      '10 cm',
      '6 cm',
      '12 cm'
    ],
    correctAnswer: '9 cm',
    explanation: 'When a line divides two sides in the same ratio, it is parallel to the third side and DE/BC = AB₁/AB = 2/5, so DE = 15 × 2/5 = 6 cm.',
    wrongAnswerExplanations: {
      '10 cm': 'This incorrectly uses the ratio 2:3 instead of 2:5.',
      '6 cm': 'This incorrectly calculates the ratio.',
      '12 cm': 'This incorrectly uses the ratio 4:5 instead of 2:5.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch6_t1_qm2',
    type: 'mcq',
    question: 'If two triangles are similar, and the ratio of their perimeters is 3:5, what is the ratio of their areas?',
    options: [
      '9:25',
      '3:5',
      '27:125',
      '6:10'
    ],
    correctAnswer: '9:25',
    explanation: 'The ratio of sides is the same as the ratio of perimeters (3:5). The ratio of areas is the square of this ratio: (3:5)² = 9:25.',
    wrongAnswerExplanations: {
      '3:5': 'This is the ratio of sides, not areas.',
      '27:125': 'This is the ratio of volumes (3:5)³, not areas.',
      '6:10': 'This is a simplified form of 3:5, still not the area ratio.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch6_t1_qm3',
    type: 'mcq',
    question: 'In ΔABC, the mid-points of sides AB, BC, and CA are D, E, and F respectively. The ratio of the area of ΔDEF to the area of ΔABC is:',
    options: [
      '1:4',
      '1:2',
      '3:4',
      '1:3'
    ],
    correctAnswer: '1:4',
    explanation: 'When a triangle is formed by joining the midpoints of the sides of another triangle, its area is 1/4 of the original.',
    wrongAnswerExplanations: {
      '1:2': 'This would be the ratio of linear measurements, not areas.',
      '3:4': 'This ratio doesn\'t represent the relationship between the areas.',
      '1:3': 'This doesn\'t represent the correct relationship.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch6_t1_qm4',
    type: 'mcq',
    question: 'If ΔABC ~ ΔPQR, ∠A = 65° and ∠Q = 45°, then ∠C equals:',
    options: [
      '45°',
      '65°',
      '70°',
      '80°'
    ],
    correctAnswer: '45°',
    explanation: 'In similar triangles, corresponding angles are equal. Since ∠A corresponds to ∠P, ∠B to ∠Q, ∠C corresponds to ∠R, so ∠C = ∠R = 45°.',
    wrongAnswerExplanations: {
      '65°': 'This assumes ∠A corresponds to ∠Q, which is incorrect.',
      '70°': 'This is calculated incorrectly.',
      '80°': 'This doesn\'t follow from the given information.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch6_t1_qm5',
    type: 'mcq',
    question: 'In similar triangles, the ratio of the in-radii (radii of inscribed circles) is:',
    options: [
      'Equal to the ratio of corresponding sides',
      'Equal to the ratio of their areas',
      'Equal to the square of the ratio of corresponding sides',
      'Equal to the cube of the ratio of corresponding sides'
    ],
    correctAnswer: 'Equal to the ratio of corresponding sides',
    explanation: 'The in-radius is a linear measurement, so it`s proportional to the sides with the same ratio as the sides.',
    wrongAnswerExplanations: {
      'Equal to the ratio of their areas': 'This would make it proportional to the square of the ratio of sides.',
      'Equal to the square of the ratio of corresponding sides': 'In-radius is a linear measurement, not an area.',
      'Equal to the cube of the ratio of corresponding sides': 'This relationship is incorrect.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch6_t1_qm6',
    type: 'mcq',
    question: 'If a line DE is drawn parallel to the base BC of a triangle ABC, then:',
    options: [
      'AB/AD = AC/AE',
      'AB/AD = AE/AC',
      'AD/AB = AE/AC',
      'AB/AD = BC/DE'
    ],
    correctAnswer: 'AB/AD = AC/AE',
    explanation: 'By the basic proportionality theorem, if DE ∥ BC, then AB/AD = AC/AE.',
    wrongAnswerExplanations: {
      'AB/AD = AE/AC': 'This incorrectly reverses one of the ratios.',
      'AD/AB = AE/AC': 'This incorrectly reverses both ratios.',
      'AB/AD = BC/DE': 'This incorrectly relates non-corresponding segments.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch6_t1_qm7',
    type: 'mcq',
    question: 'If ΔABC ~ ΔDEF with a scale factor of 1:2, and the altitude from A to BC is 3 cm, what is the altitude from D to EF?',
    options: [
      '6 cm',
      '1.5 cm',
      '3 cm',
      '9 cm'
    ],
    correctAnswer: '6 cm',
    explanation: 'Altitude is a linear measurement, so it scales by the same factor as the sides (1:2). Thus, the new altitude is 3 × 2 = 6 cm.',
    wrongAnswerExplanations: {
      '1.5 cm': 'This uses the inverse of the scale factor (2:1).',
      '3 cm': 'This assumes the altitudes are equal, which they aren\'t.',
      '9 cm': 'This incorrectly squares the scale factor.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch6_t1_qm8',
    type: 'mcq',
    question: 'A person 1.5 m tall stands 15 m away from a lamppost. The shadow of the person is 2.5 m long. What is the height of the lamppost?',
    options: [
      '9 m',
      '7.5 m',
      '10 m',
      '12.5 m'
    ],
    correctAnswer: '9 m',
    explanation: 'Using similar triangles, 1.5/h = 2.5/(15 + 2.5). Solving: h = 1.5 × 17.5/2.5 = 10.5 m.',
    wrongAnswerExplanations: {
      '7.5 m': 'This uses incorrect measurements in the proportion.',
      '10 m': 'This uses an approximate calculation.',
      '12.5 m': 'This uses incorrect measurements in the proportion.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch6_t1_qm9',
    type: 'mcq',
    question: 'If ΔABC and ΔPQR are similar with AB = 4 cm, BC = 5 cm, CA = 6 cm, PQ = 8 cm, and QR = 10 cm, what is RP?',
    options: [
      '12 cm',
      '6 cm',
      '15 cm',
      '9 cm'
    ],
    correctAnswer: '12 cm',
    explanation: 'The scale factor is PQ/AB = 8/4 = 2. So RP = CA × 2 = 6 × 2 = 12 cm.',
    wrongAnswerExplanations: {
      '6 cm': 'This assumes the triangles are congruent, not similar.',
      '15 cm': 'This incorrectly uses BC × 3 instead of CA × 2.',
      '9 cm': 'This incorrectly uses a scale factor of 1.5 instead of 2.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch6_t1_qm10',
    type: 'mcq',
    question: 'What is the relationship between the medians of two similar triangles?',
    options: [
      'They are in the same ratio as the corresponding sides',
      'They are in the same ratio as the corresponding angles',
      'They are in the same ratio as the areas of the triangles',
      'They are in the inverse ratio of the corresponding sides'
    ],
    correctAnswer: 'They are in the same ratio as the corresponding sides',
    explanation: 'Medians are linear measurements, so they are in the same ratio as corresponding sides in similar triangles.',
    wrongAnswerExplanations: {
      'They are in the same ratio as the corresponding angles': 'Angles are equal, not proportional, in similar triangles.',
      'They are in the same ratio as the areas of the triangles': 'This would be the square of the ratio of sides.',
      'They are in the inverse ratio of the corresponding sides': 'This is incorrect; the ratio is direct, not inverse.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch6_t1_qm11',
    type: 'mcq',
    question: 'If ΔABC ~ ΔDEF, AB = 5 cm, DE = 7 cm, and area of ΔABC = 20 cm², what is the area of ΔDEF?',
    options: [
      '39.2 cm²',
      '28 cm²',
      '14 cm²',
      '35 cm²'
    ],
    correctAnswer: '39.2 cm²',
    explanation: 'The ratio of areas = (ratio of sides)² = (7/5)² = 49/25. Area of ΔDEF = 20 × 49/25 = 39.2 cm².',
    wrongAnswerExplanations: {
      '28 cm²': 'This incorrectly uses the direct ratio 7/5 instead of squaring it.',
      '14 cm²': 'This incorrectly uses the ratio 7:10 instead of 7:5.',
      '35 cm²': 'This incorrectly multiplies 5 × 7 instead of using the correct formula.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch6_t1_qm12',
    type: 'mcq',
    question: 'In a triangle ABC, D and E are points on sides AB and AC such that DE is parallel to BC. If AD = 3 cm, DB = 4 cm, AE = 4.5 cm, what is EC?',
    options: [
      '6 cm',
      '7.5 cm',
      '3.75 cm',
      '8 cm'
    ],
    correctAnswer: '6 cm',
    explanation: 'By the basic proportionality theorem, AD/DB = AE/EC. So 3/4 = 4.5/EC, thus EC = 4.5 × 4/3 = 6 cm.',
    wrongAnswerExplanations: {
      '7.5 cm': 'This incorrectly uses addition instead of the proportionality theorem.',
      '3.75 cm': 'This incorrectly uses the ratio AD/AB = AE/AC.',
      '8 cm': 'This uses an incorrect calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch6_t1_qm13',
    type: 'mcq',
    question: 'If two triangles have their sides in the ratio 2:3 and their heights in the ratio 2:3, what is the ratio of their areas?',
    options: [
      '4:9',
      '2:3',
      '8:27',
      '4:6'
    ],
    correctAnswer: '4:9',
    explanation: 'Area ratio = base ratio × height ratio = 2/3 × 2/3 = 4/9 or 4:9.',
    wrongAnswerExplanations: {
      '2:3': 'This is just the ratio of sides or heights, not areas.',
      '8:27': 'This would be (2:3)³, which is not relevant here.',
      '4:6': 'This simplifies to 2:3, which is incorrect for area ratio.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch6_t1_qm14',
    type: 'mcq',
    question: 'In ΔABC, point D is on AB such that AD:DB = 2:1. Point E is on AC such that AE:EC = 2:1. If BC = 6 cm, what is the length of DE?',
    options: [
      '4 cm',
      '2 cm',
      '3 cm',
      '6 cm'
    ],
    correctAnswer: '4 cm',
    explanation: 'When D divides AB in ratio 2:1 and E divides AC in ratio 2:1, DE is parallel to BC and DE/BC = 2/3. So DE = 6 × 2/3 = 4 cm.',
    wrongAnswerExplanations: {
      '2 cm': 'This incorrectly uses the ratio 1:3 instead of 2:3.',
      '3 cm': 'This incorrectly uses the ratio 1:2 instead of 2:3.',
      '6 cm': 'This assumes DE = BC, which is incorrect when D and E divide the sides.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch6_t1_qm15',
    type: 'mcq',
    question: 'A 6 meter tall man casts a shadow of 4 meters. At the same time, a building casts a shadow of 28 meters. What is the height of the building?',
    options: [
      '42 meters',
      '36 meters',
      '38 meters',
      '48 meters'
    ],
    correctAnswer: '42 meters',
    explanation: 'By similar triangles: building height/man height = building shadow/man shadow. So height = 6 × 28/4 = 42 meters.',
    wrongAnswerExplanations: {
      '36 meters': 'This incorrectly uses the ratio 6:1 instead of 6:4.',
      '38 meters': 'This is an incorrect calculation.',
      '48 meters': 'This incorrectly uses the ratio 6:3.5 instead of 6:4.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch6_t1_qm16',
    type: 'mcq',
    question: 'In triangle ABC, angle C = 90°. If AD ⊥ BC and AD = 4 cm, BD = 3 cm, DC = 5 cm, what is the length of AB?',
    options: [
      '5 cm',
      '7 cm',
      '6 cm',
      '8 cm'
    ],
    correctAnswer: '5 cm',
    explanation: 'Triangle ABD ~ triangle ABC (AA similarity). So AB/AC = AD/AB, thus AB = √(AD × AC) = √(4 × 6.25) = 5 cm.',
    wrongAnswerExplanations: {
      '7 cm': 'This uses an incorrect calculation.',
      '6 cm': 'This assumes AB = BD + DC, which is not true here.',
      '8 cm': 'This uses an incorrect calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch6_t1_qm17',
    type: 'mcq',
    question: 'If two triangles are similar with scale factor 2:5 and the perimeter of the smaller triangle is 24 cm, what is the perimeter of the larger triangle?',
    options: [
      '60 cm',
      '48 cm',
      '40 cm',
      '30 cm'
    ],
    correctAnswer: '60 cm',
    explanation: 'Perimeter ratio equals the scale factor. So larger perimeter = 24 × 5/2 = 60 cm.',
    wrongAnswerExplanations: {
      '48 cm': 'This incorrectly doubles the original perimeter instead of using the scale factor.',
      '40 cm': 'This incorrectly uses a scale factor of 5:3 instead of 5:2.',
      '30 cm': 'This incorrectly adds 6 cm to each side instead of scaling by 5:2.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch6_t1_qm18',
    type: 'mcq',
    question: 'In triangle ABC, DE is parallel to BC where D is on AB and E is on AC. If AB = 12 cm, AD = 8 cm, and BC = 9 cm, what is the length of DE?',
    options: [
      '6 cm',
      '4 cm',
      '7.5 cm',
      '3 cm'
    ],
    correctAnswer: '6 cm',
    explanation: 'When DE is parallel to BC, DE/BC = AD/AB. So DE = BC × AD/AB = 9 × 8/12 = 6 cm.',
    wrongAnswerExplanations: {
      '4 cm': 'This incorrectly uses DE/BC = AD/BD instead of AD/AB.',
      '7.5 cm': 'This incorrectly calculates 9 × 5/6 instead of 9 × 2/3.',
      '3 cm': 'This incorrectly divides BC by 3 instead of multiplying by 2/3.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch6_t1_qm19',
    type: 'mcq',
    question: 'A flag pole 18 meters high casts a shadow 30 meters long. At the same time, a building casts a shadow 50 meters long. What is the height of the building?',
    options: [
      '30 meters',
      '45 meters',
      '36 meters',
      '27 meters'
    ],
    correctAnswer: '30 meters',
    explanation: 'By similar triangles: building height/pole height = building shadow/pole shadow. So height = 18 × 50/30 = 30 meters.',
    wrongAnswerExplanations: {
      '45 meters': 'This incorrectly uses the ratio 18:20 instead of 18:30.',
      '36 meters': 'This incorrectly doubles the pole height instead of using the proportion.',
      '27 meters': 'This incorrectly uses the ratio 18:10 × 50/30.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch6_t1_qm20',
    type: 'mcq',
    question: 'In triangle ABC, AD is the angle bisector of angle A, meeting BC at D. If AB = 8 cm, AC = 12 cm, and BC = 15 cm, what is the length of BD?',
    options: [
      '6 cm',
      '7.5 cm',
      '5 cm',
      '9 cm'
    ],
    correctAnswer: '6 cm',
    explanation: 'By the angle bisector theorem, BD/DC = AB/AC = 8/12 = 2/3. Since BC = 15, BD = 15 × 2/(2+3) = 15 × 2/5 = 6 cm.',
    wrongAnswerExplanations: {
      '7.5 cm': 'This incorrectly calculates BC/2 instead of using the angle bisector theorem.',
      '5 cm': 'This incorrectly uses BD:DC = 1:2 instead of 2:3.',
      '9 cm': 'This incorrectly uses BD:DC = 3:2 instead of 2:3.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  }
];
