import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch6_t2_qe1',
    type: 'mcq',
    question: 'What does AA criterion for similarity stand for?',
    options: [
      'Angle-Angle',
      'Angle-Area',
      'Area-Area',
      'Angle-Altitude'
    ],
    correctAnswer: 'Angle-Angle',
    explanation: 'AA criterion means if two angles of one triangle are equal to two angles of another triangle, the triangles are similar.',
    wrongAnswerExplanations: {
      'Angle-Area': 'AA stands for Angle-Angle, not Angle-Area. The criterion compares angles, not areas.',
      'Area-Area': 'AA stands for Angle-Angle, not Area-Area. The criterion involves angle measurements, not area comparison.',
      'Angle-Altitude': 'AA stands for Angle-Angle, not Angle-Altitude. It involves the equality of two angles between triangles.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch6_t2_qe2',
    type: 'mcq',
    question: 'If two triangles are similar, which of the following is true?',
    options: [
      'Their corresponding angles are equal',
      'Their corresponding sides are equal',
      'Their areas are equal',
      'Their perimeters are equal'
    ],
    correctAnswer: 'Their corresponding angles are equal',
    explanation: 'Similar triangles have equal corresponding angles, while their corresponding sides are proportional (not equal).',
    wrongAnswerExplanations: {
      'Their corresponding sides are equal': 'Similar triangles have proportional sides, not equal sides. Equal sides would make them congruent.',
      'Their areas are equal': 'Similar triangles have areas proportional to the square of the ratio of their corresponding sides, not equal.',
      'Their perimeters are equal': 'Similar triangles have proportional perimeters, not equal perimeters.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch6_t2_qe3',
    type: 'mcq',
    question: 'What is the minimum information needed to establish the AA similarity criterion?',
    options: [
      'One pair of equal angles',
      'Two pairs of equal angles',
      'Three pairs of equal angles',
      'One pair of equal angles and one pair of proportional sides'
    ],
    correctAnswer: 'One pair of equal angles',
    explanation: 'Since sum of angles in a triangle is 180°, if one pair of angles is equal, the third angles must also be equal.',
    wrongAnswerExplanations: {
      'Two pairs of equal angles': 'Only one pair of equal angles is sufficient because the third angle can be determined by the angle sum property.',
      'Three pairs of equal angles': 'A triangle has only three angles, and if two are equal, the third must be equal too.',
      'One pair of equal angles and one pair of proportional sides': 'For AA criterion, we only need angle information, not side proportions.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch6_t2_qe4',
    type: 'mcq',
    question: 'Which similarity criterion states that if the three sides of one triangle are proportional to the three sides of another triangle, then the triangles are similar?',
    options: [
      'SSS similarity criterion',
      'SAS similarity criterion',
      'AA similarity criterion',
      'ASA similarity criterion'
    ],
    correctAnswer: 'SSS similarity criterion',
    explanation: 'SSS similarity: if corresponding sides of two triangles are in proportion, the triangles are similar.',
    wrongAnswerExplanations: {
      'SAS similarity criterion': 'SAS similarity involves two sides and the included angle, not just three sides.',
      'AA similarity criterion': 'AA similarity involves equality of angles, not proportionality of sides.',
      'ASA similarity criterion': 'ASA is a congruence criterion, not a standard similarity criterion for triangles.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch6_t2_qe5',
    type: 'mcq',
    question: 'In SAS similarity criterion, what does "S" stand for?',
    options: [
      'Side',
      'Similarity',
      'Sum',
      'Segment'
    ],
    correctAnswer: 'Side',
    explanation: 'In SAS similarity criterion, "S" stands for Side and "A" stands for Angle.',
    wrongAnswerExplanations: {
      'Similarity': '"S" stands for Side, not Similarity. Similarity is the concept being established by the criterion.',
      'Sum': '"S" stands for Side, not Sum. The criterion compares corresponding sides, not sums.',
      'Segment': '"S" stands for Side, not Segment. Though sides are line segments, in this context "S" specifically means the sides of the triangle.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch6_t2_qe6',
    type: 'mcq',
    question: 'If triangles ABC and DEF are similar, which of the following represents the correct proportion?',
    options: [
      'AB/DE = BC/EF = AC/DF',
      'AB/DE = BC/DF = AC/EF',
      'AB/BC = DE/EF = AC/DF',
      'AB/AC = DE/DF = BC/EF'
    ],
    correctAnswer: 'AB/DE = BC/EF = AC/DF',
    explanation: 'In similar triangles, the ratios of corresponding sides are equal.',
    wrongAnswerExplanations: {
      'AB/DE = BC/DF = AC/EF': 'The corresponding sides are incorrectly matched. DF corresponds to AC, and EF corresponds to BC.',
      'AB/BC = DE/EF = AC/DF': 'This compares ratios within each triangle, not corresponding sides between triangles.',
      'AB/AC = DE/DF = BC/EF': 'This compares ratios within each triangle, not corresponding sides between triangles.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch6_t2_qe7',
    type: 'mcq',
    question: 'What is the SAS similarity criterion?',
    options: [
      'If two sides of a triangle are proportional to two sides of another triangle and the included angles are equal, then the triangles are similar',
      'If three sides of a triangle are proportional to three sides of another triangle, then the triangles are similar',
      'If two angles of a triangle are equal to two angles of another triangle, then the triangles are similar',
      'If two sides of a triangle are equal to two sides of another triangle and the included angles are equal, then the triangles are similar'
    ],
    correctAnswer: 'If two sides of a triangle are proportional to two sides of another triangle and the included angles are equal, then the triangles are similar',
    explanation: 'SAS similarity requires proportional sides and equal included angles between the triangles.',
    wrongAnswerExplanations: {
      'If three sides of a triangle are proportional to three sides of another triangle, then the triangles are similar': 'This is the SSS similarity criterion, not SAS.',
      'If two angles of a triangle are equal to two angles of another triangle, then the triangles are similar': 'This is the AA similarity criterion, not SAS.',
      'If two sides of a triangle are equal to two sides of another triangle and the included angles are equal, then the triangles are similar': 'This is the SAS congruence criterion, not similarity. For similarity, sides must be proportional, not equal.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch6_t2_qe8',
    type: 'mcq',
    question: 'If ∆ABC ~ ∆DEF, which of the following statements is true?',
    options: [
      '∠A = ∠D, ∠B = ∠E, and ∠C = ∠F',
      '∠A = ∠E, ∠B = ∠F, and ∠C = ∠D',
      '∠A = ∠F, ∠B = ∠D, and ∠C = ∠E',
      'AB = DE, BC = EF, and AC = DF'
    ],
    correctAnswer: '∠A = ∠D, ∠B = ∠E, and ∠C = ∠F',
    explanation: 'In similar triangles, the corresponding angles are equal.',
    wrongAnswerExplanations: {
      '∠A = ∠E, ∠B = ∠F, and ∠C = ∠D': 'This incorrectly matches the corresponding angles between the two triangles.',
      '∠A = ∠F, ∠B = ∠D, and ∠C = ∠E': 'This incorrectly matches the corresponding angles between the two triangles.',
      'AB = DE, BC = EF, and AC = DF': 'In similar triangles, corresponding sides are proportional, not equal. Equal sides would make them congruent.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch6_t2_qe9',
    type: 'mcq',
    question: 'If two triangles are similar, the ratio of their areas is:',
    options: [
      'Equal to the square of the ratio of their corresponding sides',
      'Equal to the ratio of their corresponding sides',
      'Equal to the ratio of their corresponding angles',
      'Always equal to 1'
    ],
    correctAnswer: 'Equal to the square of the ratio of their corresponding sides',
    explanation: 'If the ratio of corresponding sides is k, the ratio of areas is k².',
    wrongAnswerExplanations: {
      'Equal to the ratio of their corresponding sides': 'The ratio of areas is the square of the ratio of corresponding sides, not just the ratio itself.',
      'Equal to the ratio of their corresponding angles': 'Corresponding angles are equal in similar triangles, so their ratio is 1. Areas follow the square of side ratios.',
      'Always equal to 1': 'The ratio of areas is not always 1; it depends on the ratio of corresponding sides.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch6_t2_qe10',
    type: 'mcq',
    question: 'In triangle ABC, if D is a point on AB such that AD/DB = 3/2 and E is a point on AC such that AE/EC = 3/2, then DE is:',
    options: [
      'Parallel to BC',
      'Perpendicular to BC',
      'Makes a 45° angle with BC',
      'Makes a 60° angle with BC'
    ],
    correctAnswer: 'Parallel to BC',
    explanation: 'When a line divides two sides of a triangle in the same ratio, it is parallel to the third side (basic similarity theorem).',
    wrongAnswerExplanations: {
      'Perpendicular to BC': 'According to the basic similarity theorem, DE is parallel to BC, not perpendicular to it.',
      'Makes a 45° angle with BC': 'DE is parallel to BC, so it makes a 0° angle with a line parallel to BC, not 45°.',
      'Makes a 60° angle with BC': 'DE is parallel to BC, so it makes a 0° angle with a line parallel to BC, not 60°.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch6_t2_qe11',
    type: 'mcq',
    question: 'Two triangles are similar if:',
    options: [
      'Their corresponding angles are equal',
      'Their corresponding sides are equal',
      'Their areas are equal',
      'They have the same perimeter'
    ],
    correctAnswer: 'Their corresponding angles are equal',
    explanation: 'Similar triangles have equal corresponding angles. This is the AA criterion for similarity.',
    wrongAnswerExplanations: {
      'Their corresponding sides are equal': 'Equal corresponding sides define congruent triangles, not similar triangles.',
      'Their areas are equal': 'Similar triangles have proportional areas, not necessarily equal areas.',
      'They have the same perimeter': 'Similar triangles have proportional perimeters, not necessarily equal perimeters.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch6_t2_qe12',
    type: 'mcq',
    question: 'If two triangles are similar with a scale factor of 2, what is the ratio of their areas?',
    options: [
      '4:1',
      '2:1',
      '1:2',
      '1:4'
    ],
    correctAnswer: '4:1',
    explanation: 'If the scale factor of similar triangles is k, the ratio of their areas is k². Here, k=2, so ratio is 2²:1 = 4:1.',
    wrongAnswerExplanations: {
      '2:1': 'The ratio of areas is the square of the scale factor (2² = 4), not just the scale factor itself.',
      '1:2': 'This is incorrect. If the scale factor is 2, the larger triangle has 4 times the area of the smaller one.',
      '1:4': 'This is the inverse of the correct ratio. The ratio should be 4:1, not 1:4.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch6_t2_qe13',
    type: 'mcq',
    question: 'Which similarity criterion states that if in two triangles, two angles of one triangle are respectively equal to two angles of the other triangle, then the two triangles are similar?',
    options: [
      'AA similarity',
      'SAS similarity',
      'SSS similarity',
      'AAA similarity'
    ],
    correctAnswer: 'AA similarity',
    explanation: 'AA similarity criterion requires two angles of one triangle to equal two angles of another triangle.',
    wrongAnswerExplanations: {
      'SAS similarity': 'SAS involves two sides and the included angle, not just two angles.',
      'SSS similarity': 'SSS involves three sides in proportion, not angles.',
      'AAA similarity': 'AAA is redundant since a triangle has only three angles and if two are equal, the third must be equal too.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch6_t2_qe14',
    type: 'mcq',
    question: 'If ∆ABC ~ ∆PQR and AB = 3 cm, BC = 4 cm, AC = 5 cm, PQ = 6 cm, what is the length of QR?',
    options: [
      '8 cm',
      '10 cm',
      '12 cm',
      '15 cm'
    ],
    correctAnswer: '8 cm',
    explanation: 'Since triangles are similar, PQ/AB = QR/BC = PR/AC. So QR = (PQ/AB) × BC = (6/3) × 4 = 8 cm.',
    wrongAnswerExplanations: {
      '10 cm': 'This is incorrect. Using the proportion QR = (PQ/AB) × BC = (6/3) × 4 = 8 cm.',
      '12 cm': 'This is incorrect. Using the proportion QR = (PQ/AB) × BC = (6/3) × 4 = 8 cm.',
      '15 cm': 'This might be confusing PR with QR. PR would be (6/3) × 5 = 10 cm, but the question asks for QR.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch6_t2_qe15',
    type: 'mcq',
    question: 'Which of the following is NOT a valid criterion for similarity of triangles?',
    options: [
      'ASA (Angle-Side-Angle)',
      'AAA (Angle-Angle-Angle)',
      'SAS (Side-Angle-Side)',
      'SSS (Side-Side-Side)'
    ],
    correctAnswer: 'AAA (Angle-Angle-Angle)',
    explanation: 'AAA is redundant because in a triangle, if two angles are equal, the third must also be equal. AA is sufficient.',
    wrongAnswerExplanations: {
      'ASA (Angle-Side-Angle)': 'ASA is a criterion for congruence, not similarity. For similarity, we use AA, SAS, and SSS.',
      'SAS (Side-Angle-Side)': 'SAS is a valid similarity criterion when two sides are proportional and the included angle is equal.',
      'SSS (Side-Side-Side)': 'SSS is a valid similarity criterion when all three sides are proportional.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch6_t2_qe16',
    type: 'mcq',
    question: 'If two triangles are similar with a ratio of similarity of 3:2, what is the ratio of their perimeters?',
    options: [
      '3:2',
      '9:4',
      '2:3',
      '4:9'
    ],
    correctAnswer: '3:2',
    explanation: 'The ratio of perimeters of similar triangles is the same as the ratio of corresponding sides.',
    wrongAnswerExplanations: {
      '9:4': 'The ratio of areas would be (3:2)² = 9:4, but the question asks for perimeters, which is 3:2.',
      '2:3': 'This is the inverse of the correct ratio. The ratio should be 3:2, not 2:3.',
      '4:9': 'This is the inverse of the ratio of areas. The ratio of perimeters is 3:2.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch6_t2_qe17',
    type: 'mcq',
    question: 'In ∆ABC, D is a point on BC such that AD bisects ∠BAC. If AB = 8 cm and AC = 12 cm, what is the ratio BD:DC?',
    options: [
      '2:3',
      '3:2',
      '4:3',
      '3:4'
    ],
    correctAnswer: '2:3',
    explanation: 'According to the angle bisector theorem, if AD is the angle bisector of ∠BAC, then BD:DC = AB:AC = 8:12 = 2:3.',
    wrongAnswerExplanations: {
      '3:2': 'This is the inverse of the correct ratio. By the angle bisector theorem, BD:DC = AB:AC = 8:12 = 2:3.',
      '4:3': 'This is incorrect. By the angle bisector theorem, BD:DC = AB:AC = 8:12 = 2:3.',
      '3:4': 'This is incorrect. By the angle bisector theorem, BD:DC = AB:AC = 8:12 = 2:3.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch6_t2_qe18',
    type: 'mcq',
    question: 'If two triangles have the same shape but different sizes, they are:',
    options: [
      'Similar triangles',
      'Congruent triangles',
      'Equilateral triangles',
      'Regular triangles'
    ],
    correctAnswer: 'Similar triangles',
    explanation: 'Triangles with the same shape but different sizes are similar triangles, with proportional sides and equal angles.',
    wrongAnswerExplanations: {
      'Congruent triangles': 'Congruent triangles have both the same shape AND the same size, not different sizes.',
      'Equilateral triangles': 'Equilateral triangles have all sides equal, which is a specific shape, not a relation between two triangles.',
      'Regular triangles': 'Regular triangles are equilateral triangles. This doesn\'t describe the relationship between two triangles.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch6_t2_qe19',
    type: 'mcq',
    question: 'In the SAS similarity criterion, which of the following must be true?',
    options: [
      'The included angles must be equal',
      'All three angles must be equal',
      'All three sides must be proportional',
      'The sides must be equal'
    ],
    correctAnswer: 'The included angles must be equal',
    explanation: 'In SAS similarity, the included angles between the two pairs of proportional sides must be equal.',
    wrongAnswerExplanations: {
      'All three angles must be equal': 'SAS only requires one pair of equal angles (the included angles), though ultimately all angles will be equal.',
      'All three sides must be proportional': 'SAS requires only two pairs of proportional sides, though in similar triangles all sides end up proportional.',
      'The sides must be equal': 'In similarity, sides are proportional, not equal. Equal sides would indicate congruence.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch6_t2_qe20',
    type: 'mcq',
    question: 'If ∆ABC ~ ∆DEF with scale factor 2, and the area of ∆ABC is 16 cm², what is the area of ∆DEF?',
    options: [
      '64 cm²',
      '32 cm²',
      '8 cm²',
      '4 cm²'
    ],
    correctAnswer: '64 cm²',
    explanation: 'If scale factor is k, area ratio is k². With k=2 and area of ∆ABC=16 cm², area of ∆DEF = 16 × 2² = 64 cm².',
    wrongAnswerExplanations: {
      '32 cm²': 'This incorrectly uses the scale factor, not its square. The correct calculation is 16 × 2² = 64 cm².',
      '8 cm²': 'This incorrectly divides by the scale factor. The area of ∆DEF should be larger, not smaller.',
      '4 cm²': 'This incorrectly divides by the square of the scale factor. The area of ∆DEF should be larger.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  }
];
