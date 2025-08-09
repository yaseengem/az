import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch11_t1_qm1',
    type: 'mcq',
    question: 'If a line segment AB = 15 cm is divided by point P such that AP:PB = 2:3, and another point Q divides AB in the ratio 1:4, then the distance PQ is:',
    options: [
      '3 cm',
      '4 cm',
      '5 cm',
      '2.5 cm'
    ],
    correctAnswer: '3 cm',
    explanation: 'AP = (2/5)×15 = 6 cm, AQ = (1/5)×15 = 3 cm, therefore PQ = |AP-AQ| = 3 cm.',
    wrongAnswerExplanations: {
      '4 cm': 'This calculation doesn\'t properly account for the positions of P and Q.',
      '5 cm': 'This calculation doesn\'t correctly find the distance between the two points.',
      '2.5 cm': 'This is not the correct calculation for the distance between P and Q.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch11_t1_qm2',
    type: 'mcq',
    question: 'To divide a line segment in the ratio 5:3, the number of equal parts the line joining the end point to the last division should be divided into is:',
    options: [
      '8',
      '5',
      '3',
      '15'
    ],
    correctAnswer: '8',
    explanation: 'For ratio 5:3, we need 5+3=8 equal divisions, with the parallel to 8th point passing through the 5th division.',
    wrongAnswerExplanations: {
      '5': 'This only accounts for the first part of the ratio.',
      '3': 'This only accounts for the second part of the ratio.',
      '15': 'This is 5×3, not the sum of ratio parts.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch11_t1_qm3',
    type: 'mcq',
    question: 'In the figure for dividing a line segment AB in the ratio 3:4, if point C₃ is the third mark on the ray and point D is the division point on AB, then:',
    options: [
      'The line through C₃ parallel to C₇B intersects AB at D',
      'The line through C₃ parallel to AB intersects C₇B at D',
      'The line through C₃ perpendicular to C₇B gives D',
      'The angle bisector from C₃ to AB gives D'
    ],
    correctAnswer: 'The line through C₃ parallel to C₇B intersects AB at D',
    explanation: 'To locate division point D, draw a line through the 3rd point parallel to the line joining the 7th point and B.',
    wrongAnswerExplanations: {
      'The line through C₃ parallel to AB intersects C₇B at D': 'This doesn\'t create similar triangles to divide AB correctly.',
      'The line through C₃ perpendicular to C₇B gives D': 'Perpendicular lines don\'t create the required ratio.',
      'The angle bisector from C₃ to AB gives D': 'Angle bisectors aren\'t used in this construction.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch11_t1_qm4',
    type: 'mcq',
    question: 'Which of these ratios would require the most divisions on the ray when constructing a division of a line segment?',
    options: [
      '7:9',
      '6:8',
      '5:6',
      '4:5'
    ],
    correctAnswer: '7:9',
    explanation: '7:9 requires 7+9=16 divisions, which is more than the other options (6+8=14, 5+6=11, 4+5=9).',
    wrongAnswerExplanations: {
      '6:8': 'Requires 6+8=14 divisions, which is less than 16.',
      '5:6': 'Requires 5+6=11 divisions, which is less than 16.',
      '4:5': 'Requires 4+5=9 divisions, which is less than 16.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch11_t1_qm5',
    type: 'mcq',
    question: 'If point P divides line segment AB internally in the ratio 2:5 and Q divides it externally in the ratio 2:5, then:',
    options: [
      'AP × AQ = AB²',
      'AP + AQ = AB',
      'AP/AQ = AB/2',
      'AP - AQ = AB'
    ],
    correctAnswer: 'AP × AQ = AB²',
    explanation: 'For internal and external division in same ratio, AP×AQ=AB² (a property of harmonic division).',
    wrongAnswerExplanations: {
      'AP + AQ = AB': 'This property doesn\'t hold for internal and external division in the same ratio.',
      'AP/AQ = AB/2': 'This relationship isn\'t correct for the given scenario.',
      'AP - AQ = AB': 'This doesn\'t represent the relationship between internal and external division.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch11_t1_qm6',
    type: 'mcq',
    question: 'If AB = 12 cm and point P divides it internally in ratio 3:1, find the distance of P from the midpoint of AB.',
    options: [
      '3 cm',
      '9 cm',
      '6 cm',
      '2 cm'
    ],
    correctAnswer: '3 cm',
    explanation: 'P is at (3/4)×12 = 9 cm from A. Midpoint is at 6 cm. Distance = |9-6| = 3 cm.',
    wrongAnswerExplanations: {
      '9 cm': 'This is the distance AP, not the distance from the midpoint.',
      '6 cm': 'This is the position of the midpoint, not the distance required.',
      '2 cm': 'This calculation doesn\'t correctly find the distance from the midpoint.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch11_t1_qm7',
    type: 'mcq',
    question: 'Which construction technique can be used to divide a line segment in ratio 3:7 without drawing a ray with 10 divisions?',
    options: [
      'Using similar triangles with heights in ratio 3:7',
      'Using circle of radius 3/7 of the line segment',
      'Using perpendicular bisector twice',
      'None of these'
    ],
    correctAnswer: 'Using similar triangles with heights in ratio 3:7',
    explanation: 'Similar triangles with heights in ratio 3:7 can divide the base in the same ratio.',
    wrongAnswerExplanations: {
      'Using circle of radius 3/7 of the line segment': 'This method doesn\'t guarantee division in ratio 3:7.',
      'Using perpendicular bisector twice': 'This divides in ratio 1:1:2, not 3:7.',
      'None of these': 'Similar triangles method works without 10 divisions.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch11_t1_qm8',
    type: 'mcq',
    question: 'If a line segment AB = 8 cm is divided by points P and Q such that AP:PQ:QB = 2:3:3, find the length of PQ.',
    options: [
      '3 cm',
      '2 cm',
      '4 cm',
      '1 cm'
    ],
    correctAnswer: '3 cm',
    explanation: 'For ratio 2:3:3, PQ = (3/8)×8 = 3 cm.',
    wrongAnswerExplanations: {
      '2 cm': 'This is the length of AP, not PQ.',
      '4 cm': 'This doesn\'t match the given ratio AP:PQ:QB = 2:3:3.',
      '1 cm': 'This doesn\'t correspond to any of the ratio calculations.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch11_t1_qm9',
    type: 'mcq',
    question: 'Which theorem is being applied when we say that corresponding sides of similar triangles are proportional?',
    options: [
      'Basic proportionality theorem',
      'Pythagoras theorem',
      'Angle bisector theorem',
      'AAA similarity criterion'
    ],
    correctAnswer: 'Basic proportionality theorem',
    explanation: 'Basic proportionality theorem establishes proportionality of sides in similar triangles.',
    wrongAnswerExplanations: {
      'Pythagoras theorem': 'Relates squares of sides in right triangles, not proportionality in similar triangles.',
      'Angle bisector theorem': 'States that an angle bisector divides the opposite side proportionally to adjacent sides.',
      'AAA similarity criterion': 'Establishes similarity of triangles, but doesn\'t directly state the proportionality.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch11_t1_qm10',
    type: 'mcq',
    question: 'For a line segment AB, points P and Q divide it internally and externally in the same ratio. Which of these is true?',
    options: [
      'AP·AQ = AB·BQ',
      'AP·AQ = AB²',
      'AP + AQ = AB',
      'AP/AQ = AB/2'
    ],
    correctAnswer: 'AP·AQ = AB·BQ',
    explanation: 'For internal and external division in the same ratio, AP·AQ = AB·BQ.',
    wrongAnswerExplanations: {
      'AP·AQ = AB²': 'This is incorrect. The correct relation is AP·AQ = AB·BQ.',
      'AP + AQ = AB': 'This relationship doesn\'t hold for internal and external division.',
      'AP/AQ = AB/2': 'This doesn\'t represent the relationship between internal and external division.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch11_t1_qm11',
    type: 'mcq',
    question: 'If a line segment AB is divided by point P in the ratio 2:3, then the ratio BP:AB is:',
    options: [
      '3:5',
      '2:5',
      '2:3',
      '3:2'
    ],
    correctAnswer: '3:5',
    explanation: 'If AP:PB = 2:3, then BP:AB = 3:(2+3) = 3:5.',
    wrongAnswerExplanations: {
      '2:5': 'This is the ratio AP:AB, not BP:AB.',
      '2:3': 'This is the ratio AP:PB, not BP:AB.',
      '3:2': 'This is the ratio PB:AP, not BP:AB.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch11_t1_qm12',
    type: 'mcq',
    question: 'In the construction to divide a line segment AB in the ratio 4:7, the parallel line drawn from which point on the ray will give the required division?',
    options: [
      'The 4th point',
      'The 7th point',
      'The 11th point',
      'The 28th point'
    ],
    correctAnswer: 'The 4th point',
    explanation: 'Draw parallel from the 4th point to the line joining the 11th point and B.',
    wrongAnswerExplanations: {
      'The 7th point': 'Drawing from the 7th point would give division in ratio 7:4, not 4:7.',
      'The 11th point': 'The 11th point is used to join to B, not for drawing the parallel.',
      'The 28th point': 'This is 4×7, which isn\'t relevant to the construction.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch11_t1_qm13',
    type: 'mcq',
    question: 'In a triangle ABC, a line parallel to BC intersects AB at D and AC at E. If AD:DB = 3:2, then AE:EC equals:',
    options: [
      '3:2',
      '2:3',
      '3:5',
      '2:5'
    ],
    correctAnswer: '3:2',
    explanation: 'By basic proportionality theorem, if AD:DB = 3:2, then AE:EC = 3:2.',
    wrongAnswerExplanations: {
      '2:3': 'This is the inverse of the correct ratio.',
      '3:5': 'This compares AD to AB, not AE to EC.',
      '2:5': 'This compares DB to AB, not AE to EC.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch11_t1_qm14',
    type: 'mcq',
    question: 'If a line divides any two sides of a triangle in the same ratio, then it is:',
    options: [
      'Parallel to the third side',
      'Perpendicular to the third side',
      'Angle bisector of the opposite angle',
      'Median to the third side'
    ],
    correctAnswer: 'Parallel to the third side',
    explanation: 'By converse of basic proportionality theorem, a line dividing two sides in same ratio is parallel to the third side.',
    wrongAnswerExplanations: {
      'Perpendicular to the third side': 'Equal ratio division doesn\'t create perpendicularity.',
      'Angle bisector of the opposite angle': 'Angle bisector divides opposite side proportionally to adjacent sides, not equally.',
      'Median to the third side': 'Median divides the opposite side in ratio 1:1, not any arbitrary ratio.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch11_t1_qm15',
    type: 'mcq',
    question: 'To divide a line segment AB in the ratio 3:5 externally, which of these is the correct procedure?',
    options: [
      'Extend BA beyond A and divide this extension in ratio 3:5',
      'Extend AB beyond B and divide this extension in ratio 3:5',
      'Divide AB internally in ratio 5:3',
      'Divide AB internally in ratio 3:5'
    ],
    correctAnswer: 'Extend AB beyond B and divide this extension in ratio 3:5',
    explanation: 'For external division in ratio 3:5, extend AB beyond B and apply the division construction.',
    wrongAnswerExplanations: {
      'Extend BA beyond A and divide this extension in ratio 3:5': 'This places the point on the wrong side.',
      'Divide AB internally in ratio 5:3': 'This gives internal division in the wrong ratio.',
      'Divide AB internally in ratio 3:5': 'This gives internal, not external division.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch11_t1_qm16',
    type: 'mcq',
    question: 'If point P divides line segment AB such that AP:PB = 2:3, and AB = 15cm, the coordinates of P in terms of the coordinates of A and B are:',
    options: [
      '(2A+3B)/5',
      '(3A+2B)/5',
      '(A+B)/2',
      '(2A+B)/3'
    ],
    correctAnswer: '(2A+3B)/5',
    explanation: 'For P dividing AB in ratio m:n, coordinates of P = (mA+nB)/(m+n) = (2A+3B)/5.',
    wrongAnswerExplanations: {
      '(3A+2B)/5': 'This gives division in ratio 3:2, not 2:3.',
      '(A+B)/2': 'This gives the midpoint, dividing in ratio 1:1.',
      '(2A+B)/3': 'This gives division in ratio 2:1, not 2:3.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch11_t1_qm17',
    type: 'mcq',
    question: 'The section formula for finding the coordinates of a point P that divides a line segment AB in the ratio m:n is:',
    options: [
      '(mx₂ + nx₁)/(m+n), (my₂ + ny₁)/(m+n)',
      '(mx₁ + nx₂)/(m+n), (my₁ + ny₂)/(m+n)',
      '(x₁ + x₂)/2, (y₁ + y₂)/2',
      '(mx₂ - nx₁)/(m-n), (my₂ - ny₁)/(m-n)'
    ],
    correctAnswer: '(mx₂ + nx₁)/(m+n), (my₂ + ny₁)/(m+n)',
    explanation: 'The section formula for division in ratio m:n is (mx₂ + nx₁)/(m+n), (my₂ + ny₁)/(m+n).',
    wrongAnswerExplanations: {
      '(mx₁ + nx₂)/(m+n), (my₁ + ny₂)/(m+n)': 'This is the formula with x₁,x₂ swapped, giving incorrect coordinates.',
      '(x₁ + x₂)/2, (y₁ + y₂)/2': 'This is only for the midpoint (ratio 1:1).',
      '(mx₂ - nx₁)/(m-n), (my₂ - ny₁)/(m-n)': 'This is for external division, not internal division.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch11_t1_qm18',
    type: 'mcq',
    question: 'In a triangle ABC, the points D, E, F are on sides BC, CA, and AB such that BD:DC = CE:EA = AF:FB = 1:2. The ratio of the area of triangle DEF to the area of triangle ABC is:',
    options: [
      '1:9',
      '1:3',
      '2:9',
      '1:6'
    ],
    correctAnswer: '1:9',
    explanation: 'When a triangle is formed by points dividing sides in equal ratio k, area ratio is k².',
    wrongAnswerExplanations: {
      '1:3': 'This is the ratio of corresponding sides, not areas.',
      '2:9': 'This doesn\'t represent the correct area ratio.',
      '1:6': 'This doesn\'t represent the correct area ratio.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch11_t1_qm19',
    type: 'mcq',
    question: 'Which property of similar triangles is directly used in the construction to divide a line segment in a given ratio?',
    options: [
      'Corresponding sides are proportional',
      'Corresponding angles are equal',
      'Areas are proportional to the square of corresponding sides',
      'Perimeters are proportional to corresponding sides'
    ],
    correctAnswer: 'Corresponding sides are proportional',
    explanation: 'Line segment division construction uses proportional sides of similar triangles created by parallel lines.',
    wrongAnswerExplanations: {
      'Corresponding angles are equal': 'While true for similar triangles, it\'s not the property directly used.',
      'Areas are proportional to the square of corresponding sides': 'This relation isn\'t used in line segment division.',
      'Perimeters are proportional to corresponding sides': 'This property isn\'t used in the construction.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch11_t1_qm20',
    type: 'mcq',
    question: 'If the midpoint of a line segment AB is M, and point P divides AB in the ratio 3:5, then the ratio MP:MB equals:',
    options: [
      '1:4',
      '1:5',
      '3:5',
      '1:2'
    ],
    correctAnswer: '1:4',
    explanation: 'P is at 3/8 of AB from A, M is at 1/2, so MP:MB = (1/2 - 3/8):(1/2) = 1:4.',
    wrongAnswerExplanations: {
      '1:5': 'This calculation doesn\'t correctly find the ratio MP:MB.',
      '3:5': 'This is the division ratio of AB, not the ratio MP:MB.',
      '1:2': 'This would be true if P were at 1/3 of AB, not at 3/8.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  }
];
