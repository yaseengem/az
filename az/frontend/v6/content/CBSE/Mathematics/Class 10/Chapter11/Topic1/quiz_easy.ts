import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch11_t1_qe1',
    type: 'mcq',
    question: 'To divide a line segment in a given ratio, we use:',
    options: [
      'Basic proportionality theorem',
      'Pythagoras theorem',
      'Angle bisector theorem',
      'Thales theorem'
    ],
    correctAnswer: 'Basic proportionality theorem',
    explanation: 'Division of a line segment is based on the basic proportionality theorem application.',
    wrongAnswerExplanations: {
      'Pythagoras theorem': 'Pythagoras theorem relates to the sides of a right-angled triangle, not line division.',
      'Angle bisector theorem': 'Angle bisector theorem divides angles, not specifically line segments in a given ratio.',
      'Thales theorem': 'While related to proportions, Thales theorem isn\'t the primary method for dividing line segments.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch11_t1_qe2',
    type: 'mcq',
    question: 'To divide a line segment AB in the ratio 2:3, we need to:',
    options: [
      'Divide AB into 5 equal parts and take 2 parts',
      'Draw a ray at an angle from A and mark 5 equal divisions on it',
      'Draw a ray at an angle from B and mark 5 equal divisions on it',
      'Draw a perpendicular bisector of AB'
    ],
    correctAnswer: 'Draw a ray at an angle from A and mark 5 equal divisions on it',
    explanation: 'We draw a ray from A, mark 5 (2+3) equal divisions, join the 5th point to B, and draw parallels.',
    wrongAnswerExplanations: {
      'Divide AB into 5 equal parts and take 2 parts': 'This method doesn\'t use construction techniques and isn\'t the standard approach.',
      'Draw a ray at an angle from B and mark 5 equal divisions on it': 'Starting from B would give the inverse ratio.',
      'Draw a perpendicular bisector of AB': 'This divides the line in ratio 1:1, not 2:3.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch11_t1_qe3',
    type: 'mcq',
    question: 'Which compass setting is needed to mark equal divisions on a ray?',
    options: [
      'Any convenient length',
      'Exactly half the line segment\'s length',
      'The same length as the line segment',
      'The length of the ratio`s denominator'
    ],
    correctAnswer: 'Any convenient length',
    explanation: 'Any convenient compass setting works as long as all divisions are equal.',
    wrongAnswerExplanations: {
      'Exactly half the line segment\'s length': 'The compass setting doesn\'t need to be related to the line segment length.',
      'The same length as the line segment': 'The compass setting can be any convenient length.',
      'The length of the ratio`s denominator': 'The compass setting doesn\'t depend on the ratio values.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch11_t1_qe4',
    type: 'mcq',
    question: 'In the construction to divide a line segment in ratio m:n, how many points do we mark on the ray?',
    options: [
      'm + n',
      'm × n',
      'm - n',
      'n - m'
    ],
    correctAnswer: 'm + n',
    explanation: 'We mark m+n points to represent the total ratio parts.',
    wrongAnswerExplanations: {
      'm × n': 'The product of ratio terms isn\'t used for division construction.',
      'm - n': 'The difference of ratio terms isn\'t relevant for this construction.',
      'n - m': 'The difference of ratio terms in reverse order isn\'t used.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch11_t1_qe5',
    type: 'mcq',
    question: 'The principle behind dividing a line segment using construction is:',
    options: [
      'Similar triangles',
      'Congruent triangles',
      'Complementary angles',
      'Supplementary angles'
    ],
    correctAnswer: 'Similar triangles',
    explanation: 'Division of a line segment uses similar triangles created by parallel lines.',
    wrongAnswerExplanations: {
      'Congruent triangles': 'Line segment division relies on similarity, not congruence.',
      'Complementary angles': 'Angle relationships aren\'t the main principle in line division.',
      'Supplementary angles': 'Supplementary angles aren\'t directly used in line segment division.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch11_t1_qe6',
    type: 'mcq',
    question: 'To divide AB in ratio 3:2, after drawing a ray from A making an angle with AB, what do you do next?',
    options: [
      'Mark 5 equal divisions on the ray',
      'Mark 3 equal divisions on the ray',
      'Mark 2 equal divisions on the ray',
      'Mark 6 equal divisions on the ray'
    ],
    correctAnswer: 'Mark 5 equal divisions on the ray',
    explanation: 'Mark 3+2=5 equal divisions since the sum represents total parts.',
    wrongAnswerExplanations: {
      'Mark 3 equal divisions on the ray': 'We need to mark the sum of both parts of the ratio (3+2).',
      'Mark 2 equal divisions on the ray': 'This is insufficient for a 3:2 ratio.',
      'Mark 6 equal divisions on the ray': 'The total parts needed are 3+2=5, not 6.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch11_t1_qe7',
    type: 'mcq',
    question: 'In the construction to divide AB in ratio k:1, how many equal divisions should be marked on the ray?',
    options: [
      'k + 1',
      'k',
      '1',
      '2k'
    ],
    correctAnswer: 'k + 1',
    explanation: 'For ratio k:1, mark k+1 points to represent all parts of the ratio.',
    wrongAnswerExplanations: {
      'k': 'This doesn\'t account for the second part of the ratio.',
      '1': 'This is insufficient for representing the complete ratio.',
      '2k': 'This doubles the required points unnecessarily.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch11_t1_qe8',
    type: 'mcq',
    question: 'Which angle should the ray make with the line segment for division construction?',
    options: [
      'Any angle',
      'Only 90°',
      'Only 60°',
      'Only 45°'
    ],
    correctAnswer: 'Any angle',
    explanation: 'The ray can be drawn at any angle with the line segment, though acute angles are convenient.',
    wrongAnswerExplanations: {
      'Only 90°': 'The angle doesn\'t have to be 90° specifically.',
      'Only 60°': 'The angle doesn\'t have to be 60° specifically.',
      'Only 45°': 'The angle doesn\'t have to be 45° specifically.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch11_t1_qe9',
    type: 'mcq',
    question: 'To divide a line segment in ratio 2:3, the point of division divides the line in the ratio:',
    options: [
      '2:3',
      '3:2',
      '2:5',
      '3:5'
    ],
    correctAnswer: '2:3',
    explanation: 'The point divides the line so the ratio of the two parts is 2:3 as required.',
    wrongAnswerExplanations: {
      '3:2': 'This is the inverse of the required ratio.',
      '2:5': 'This compares the first part to the whole line, not to the second part.',
      '3:5': 'This compares the second part to the whole line, not to the first part.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch11_t1_qe10',
    type: 'mcq',
    question: 'If point P divides line segment AB in the ratio 3:4, then AP:PB equals:',
    options: [
      '3:4',
      '4:3',
      '3:7',
      '4:7'
    ],
    correctAnswer: '3:4',
    explanation: 'By definition, if P divides AB in ratio 3:4, then AP:PB = 3:4.',
    wrongAnswerExplanations: {
      '4:3': 'This is the inverse of the correct ratio.',
      '3:7': 'This compares AP to the whole line AB, not to PB.',
      '4:7': 'This compares PB to the whole line AB, not to AP.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch11_t1_qe11',
    type: 'mcq',
    question: 'In a line segment division construction, what tool is used to draw parallel lines?',
    options: [
      'Set square and ruler',
      'Compass only',
      'Protractor',
      'Divider'
    ],
    correctAnswer: 'Set square and ruler',
    explanation: 'Set square and ruler are used to draw parallel lines accurately.',
    wrongAnswerExplanations: {
      'Compass only': 'Compass alone cannot draw accurate parallel lines.',
      'Protractor': 'Protractor measures angles, not ideal for drawing parallel lines.',
      'Divider': 'Divider measures distances, not used for drawing parallel lines.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch11_t1_qe12',
    type: 'mcq',
    question: 'If a line segment AB is 10cm and point P divides it in ratio 2:3, what is the length of AP?',
    options: [
      '4cm',
      '6cm',
      '2cm',
      '3cm'
    ],
    correctAnswer: '4cm',
    explanation: 'For ratio 2:3, AP = (2/(2+3)) × 10 = (2/5) × 10 = 4cm.',
    wrongAnswerExplanations: {
      '6cm': 'This is PB, not AP.',
      '2cm': 'This is just the first number in the ratio, not the length.',
      '3cm': 'This is just the second number in the ratio, not the length.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch11_t1_qe13',
    type: 'mcq',
    question: 'Which theorem is directly applied when drawing a line parallel to one side of a triangle?',
    options: [
      'Basic proportionality theorem',
      'Pythagoras theorem',
      'Angle sum property',
      'Midpoint theorem'
    ],
    correctAnswer: 'Basic proportionality theorem',
    explanation: 'The basic proportionality (Thales) theorem states that a line parallel to one side of a triangle divides the other sides proportionally.',
    wrongAnswerExplanations: {
      'Pythagoras theorem': 'Relates to squares of sides in a right triangle, not parallel lines.',
      'Angle sum property': 'States that angles in a triangle sum to 180°, not related to parallel lines.',
      'Midpoint theorem': 'Specifically about the line joining midpoints, not any parallel line.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch11_t1_qe14',
    type: 'mcq',
    question: 'In a division construction, after joining the last point to B, we draw:',
    options: [
      'A line parallel to this joining line through the appropriate division point',
      'A perpendicular from the division point to AB',
      'An angle bisector from the division point',
      'A circle with center at the division point'
    ],
    correctAnswer: 'A line parallel to this joining line through the appropriate division point',
    explanation: 'Drawing a parallel line through the division point creates proportional triangles, dividing AB in the required ratio.',
    wrongAnswerExplanations: {
      'A perpendicular from the division point to AB': 'This doesn\'t help in dividing the line segment in the required ratio.',
      'An angle bisector from the division point': 'Angle bisectors aren\'t used in this construction.',
      'A circle with center at the division point': 'Circles aren\'t needed for this construction.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch11_t1_qe15',
    type: 'mcq',
    question: 'To divide a line segment in ratio 1:1, the simplest method is to:',
    options: [
      'Construct its perpendicular bisector',
      'Use the standard ratio division method with 1+1 points',
      'Draw a 60° angle from both ends',
      'Use a ruler to measure its midpoint'
    ],
    correctAnswer: 'Construct its perpendicular bisector',
    explanation: 'A perpendicular bisector divides a line exactly in half (ratio 1:1).',
    wrongAnswerExplanations: {
      'Use the standard ratio division method with 1+1 points': 'While possible, this is not the simplest method.',
      'Draw a 60° angle from both ends': 'This alone doesn\'t ensure equal division.',
      'Use a ruler to measure its midpoint': 'This is measurement, not construction.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch11_t1_qe16',
    type: 'mcq',
    question: 'The minimum number of points needed on a ray to divide a line segment in ratio 3:5 is:',
    options: [
      '8',
      '3',
      '5',
      '15'
    ],
    correctAnswer: '8',
    explanation: 'Need 3+5=8 points to represent all parts of the ratio.',
    wrongAnswerExplanations: {
      '3': 'This only accounts for the first part of the ratio.',
      '5': 'This only accounts for the second part of the ratio.',
      '15': 'This is 3×5, which is not relevant for the construction.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch11_t1_qe17',
    type: 'mcq',
    question: 'When drawing a ray for division construction, which end of the original line segment should it start from?',
    options: [
      'Either end',
      'Only the left end',
      'Only the right end',
      'Both ends simultaneously'
    ],
    correctAnswer: 'Either end',
    explanation: 'The ray can start from either end, but subsequent steps must be consistent with that choice.',
    wrongAnswerExplanations: {
      'Only the left end': 'Construction works from either end with appropriate adjustments.',
      'Only the right end': 'Construction works from either end with appropriate adjustments.',
      'Both ends simultaneously': 'Construction typically starts from one end only.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch11_t1_qe18',
    type: 'mcq',
    question: 'If point P divides AB in ratio 2:3 and Q divides it in ratio 3:2, then:',
    options: [
      'P and Q are on opposite sides of the midpoint',
      'P and Q are on the same side of the midpoint',
      'P and Q are the same point',
      'P must be the midpoint of AB'
    ],
    correctAnswer: 'P and Q are on opposite sides of the midpoint',
    explanation: 'P divides AB in ratio 2:3 (closer to A) while Q divides it in ratio 3:2 (closer to B).',
    wrongAnswerExplanations: {
      'P and Q are on the same side of the midpoint': 'The ratios 2:3 and 3:2 place points on opposite sides of the midpoint.',
      'P and Q are the same point': 'Different ratios result in different division points.',
      'P must be the midpoint of AB': 'P divides AB in ratio 2:3, not 1:1, so it\'s not the midpoint.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch11_t1_qe19',
    type: 'mcq',
    question: 'After marking divisions on the ray, the next step in dividing line segment AB in ratio m:n is to:',
    options: [
      'Join the (m+n)th point to the other end of AB',
      'Join the mth point to the other end of AB',
      'Join the nth point to the other end of AB',
      'Connect the mth and nth points'
    ],
    correctAnswer: 'Join the (m+n)th point to the other end of AB',
    explanation: 'Join the last marked point (m+n)th to the opposite end of the line segment.',
    wrongAnswerExplanations: {
      'Join the mth point to the other end of AB': 'This doesn\'t account for the complete ratio.',
      'Join the nth point to the other end of AB': 'This doesn\'t account for the complete ratio.',
      'Connect the mth and nth points': 'These points are on the ray, not giving the division point.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch11_t1_qe20',
    type: 'mcq',
    question: 'If three parallel lines divide two transversals proportionally, this principle is known as:',
    options: [
      'Thales theorem',
      'Angle bisector theorem',
      'Midpoint theorem',
      'Intercept theorem'
    ],
    correctAnswer: 'Thales theorem',
    explanation: 'Thales theorem states that parallel lines cut transversals proportionally.',
    wrongAnswerExplanations: {
      'Angle bisector theorem': 'Relates to division of sides by angle bisectors, not parallel lines.',
      'Midpoint theorem': 'Specific to the line joining midpoints of two sides of a triangle.',
      'Intercept theorem': 'While similar in concept, Thales theorem is the standard name in this context.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  }
];
