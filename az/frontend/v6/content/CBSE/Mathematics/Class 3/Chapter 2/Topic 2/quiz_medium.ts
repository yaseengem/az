import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl3_ch2_t2_qm1',
    type: 'mcq',
    question: 'Arrange these numbers in ascending order: 284, 248, 482, 842',
    options: ['248, 284, 482, 842', '842, 482, 284, 248', '284, 248, 842, 482', '248, 842, 284, 482'],
    correctAnswer: '248, 284, 482, 842',
    explanation: 'Ascending order is smallest to largest. Compare leftmost digits first: 248 and 284 have 2 in hundreds, 482 and 842 have 4 and 8 respectively.',
    wrongAnswerExplanations: {
      '842, 482, 284, 248': 'This is descending order (largest to smallest), not ascending order.',
      '284, 248, 842, 482': 'This is incorrect. 248 is smaller than 284 because 4<8 in tens place.',
      '248, 842, 284, 482': 'This is incorrect. 284 should come before 482 and 842.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch2_t2_qm2',
    type: 'mcq',
    question: 'What is the smallest 3-digit number you can make using the digits 7, 1, and 4?',
    options: ['147', '174', '417', '471'],
    correctAnswer: '147',
    explanation: 'To make the smallest number, place the smallest digit (1) in hundreds place, next smallest (4) in tens place, and largest (7) in ones place.',
    wrongAnswerExplanations: {
      '174': 'This isn\'t the smallest because 7>4 in ones place.',
      '417': 'This isn\'t the smallest because 4>1 in hundreds place.',
      '471': 'This isn\'t the smallest because 4>1 in hundreds place and 7>1 in tens place.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 40
  },
  {
    id: 'cl3_ch2_t2_qm3',
    type: 'mcq',
    question: 'What is the greatest 3-digit number you can make using the digits 3, 0, and 6?',
    options: ['306', '360', '603', '630'],
    correctAnswer: '630',
    explanation: 'To make the greatest number, place the largest digit (6) in hundreds place, next largest (3) in tens place, and smallest (0) in ones place.',
    wrongAnswerExplanations: {
      '306': 'This isn\'t the greatest because 3<6 in hundreds place.',
      '360': 'This isn\'t the greatest because 3<6 in hundreds place.',
      '603': 'This isn\'t the greatest because 0<3 in tens place.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 40
  },
  {
    id: 'cl3_ch2_t2_qm4',
    type: 'mcq',
    question: 'Which number is between 345 and 354?',
    options: ['340', '350', '355', '344'],
    correctAnswer: '350',
    explanation: '350 lies between 345 and 354 because 345 < 350 < 354.',
    wrongAnswerExplanations: {
      '340': '340 is less than 345, not between 345 and 354.',
      '355': '355 is greater than 354, not between 345 and 354.',
      '344': '344 is less than 345, not between 345 and 354.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 40
  },
  {
    id: 'cl3_ch2_t2_qm5',
    type: 'mcq',
    question: 'Put these numbers in descending order: 506, 560, 650, 605',
    options: ['650, 605, 560, 506', '650, 560, 605, 506', '506, 560, 605, 650', '560, 506, 650, 605'],
    correctAnswer: '650, 605, 560, 506',
    explanation: 'Descending order is largest to smallest. 650 has the largest hundreds digit (6). 605 and 560 both have 6 and 5, but 605 > 560 (6>5 in hundreds).',
    wrongAnswerExplanations: {
      '650, 560, 605, 506': 'This is incorrect because 605 > 560 (6>5 in hundreds place).',
      '506, 560, 605, 650': 'This is ascending order (smallest to largest), not descending.',
      '560, 506, 650, 605': 'This is in no particular order.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 50
  },
  {
    id: 'cl3_ch2_t2_qm6',
    type: 'mcq',
    question: 'Which symbol makes this statement true? 726 ___ 762',
    options: ['>', '<', '=', '≠'],
    correctAnswer: '<',
    explanation: '726 < 762 because when comparing digits from left, 7=7 in hundreds place, 2<6 in tens place.',
    wrongAnswerExplanations: {
      '>': 'This would indicate 726 is greater than 762, which is incorrect.',
      '=': 'This would indicate the numbers are equal, which is incorrect.',
      '≠': 'While this is true (the numbers are not equal), the question asks for comparing their values.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 40
  },
  {
    id: 'cl3_ch2_t2_qm7',
    type: 'mcq',
    question: 'What is the largest number that is less than 300?',
    options: ['299', '301', '300', '199'],
    correctAnswer: '299',
    explanation: 'The largest number less than 300 is 299, which is 1 less than 300.',
    wrongAnswerExplanations: {
      '301': '301 is greater than 300, not less than it.',
      '300': '300 is equal to 300, not less than it.',
      '199': '199 is less than 300, but it\'s not the largest such number.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 40
  },
  {
    id: 'cl3_ch2_t2_qm8',
    type: 'mcq',
    question: 'Which number is greater than 427 but less than 472?',
    options: ['417', '426', '447', '473'],
    correctAnswer: '447',
    explanation: '447 is greater than 427 (4=4 in hundreds place, 4>2 in tens place) and less than 472 (4=4 in hundreds place, 4<7 in tens place).',
    wrongAnswerExplanations: {
      '417': '417 is less than 427, not greater than it.',
      '426': '426 is less than 427, not greater than it.',
      '473': '473 is greater than 472, not less than it.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch2_t2_qm9',
    type: 'mcq',
    question: 'If you arrange the numbers 376, 367, 736, 673 in ascending order, which number would be third?',
    options: ['367', '376', '673', '736'],
    correctAnswer: '673',
    explanation: 'Ascending order: 367, 376, 673, 736. The third number is 673.',
    wrongAnswerExplanations: {
      '367': '367 would be first in ascending order, not third.',
      '376': '376 would be second in ascending order, not third.',
      '736': '736 would be fourth in ascending order, not third.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 50
  },
  {
    id: 'cl3_ch2_t2_qm10',
    type: 'mcq',
    question: 'What comes just before the smallest 3-digit number?',
    options: ['99', '100', '101', '1000'],
    correctAnswer: '99',
    explanation: 'The smallest 3-digit number is 100. The number just before 100 is 99.',
    wrongAnswerExplanations: {
      '100': '100 is the smallest 3-digit number itself, not what comes before it.',
      '101': '101 comes after 100, not before it.',
      '1000': '1000 is much larger than the smallest 3-digit number.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 40
  },
  {
    id: 'cl3_ch2_t2_qm11',
    type: 'mcq',
    question: 'What is the greatest 3-digit number?',
    options: ['900', '990', '999', '1000'],
    correctAnswer: '999',
    explanation: 'The greatest 3-digit number is 999. It has the largest possible digit (9) in all three places.',
    wrongAnswerExplanations: {
      '900': '900 is less than 999.',
      '990': '990 is less than 999.',
      '1000': '1000 is a 4-digit number, not a 3-digit number.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 35
  },
  {
    id: 'cl3_ch2_t2_qm12',
    type: 'mcq',
    question: 'Which statement about the numbers 508 and 580 is true?',
    options: ['>', '<', '=', 'None of these'],
    correctAnswer: '<',
    explanation: '508 < 580 because when comparing digits from left, 5=5 in hundreds place but 0<8 in tens place.',
    wrongAnswerExplanations: {
      '>': 'This is incorrect. 508 is less than 580.',
      '=': 'This is incorrect. 508 and 580 are different numbers.',
      'None of these': 'The statement 508 < 580 is true.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 40
  },
  {
    id: 'cl3_ch2_t2_qm13',
    type: 'mcq',
    question: 'If the number 52_ is greater than 526, what could be the missing digit?',
    options: ['5', '6', '7', '4'],
    correctAnswer: '7',
    explanation: 'For 52_ to be greater than 526, the missing digit must be greater than 6. The only option greater than 6 is 7.',
    wrongAnswerExplanations: {
      '5': '525 is less than 526, not greater.',
      '6': '526 is equal to 526, not greater.',
      '4': '524 is less than 526, not greater.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch2_t2_qm14',
    type: 'mcq',
    question: 'Which number is closer to 500: 487 or 516?',
    options: ['487', '516', 'Both are equally close', 'Cannot be determined'],
    correctAnswer: '487',
    explanation: '487 is 13 less than 500 (500 - 487 = 13), while 516 is 16 more than 500 (516 - 500 = 16). Since 13 < 16, 487 is closer to 500.',
    wrongAnswerExplanations: {
      '516': '516 is 16 away from 500, which is further than 487 (13 away).',
      'Both are equally close': 'They are not equally close. 487 is 13 units away, while 516 is 16 units away.',
      'Cannot be determined': 'It can be determined by calculating the difference from 500.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 50
  },
  {
    id: 'cl3_ch2_t2_qm15',
    type: 'mcq',
    question: 'What are the next two numbers in this sequence: 335, 345, 355, ...?',
    options: ['365, 375', '360, 365', '365, 370', '365, 385'],
    correctAnswer: '365, 375',
    explanation: 'The pattern adds 10 each time. After 355, the next numbers would be 355 + 10 = 365 and 365 + 10 = 375.',
    wrongAnswerExplanations: {
      '360, 365': 'This doesn\'t follow the pattern of adding 10 each time.',
      '365, 370': 'This doesn\'t follow the pattern. After 365, adding 10 gives 375, not 370.',
      '365, 385': 'This doesn\'t follow the pattern. It correctly adds 10 to get 365, but then adds 20 instead of 10.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch2_t2_qm16',
    type: 'mcq',
    question: 'If you arrange all possible 3-digit numbers using the digits 1, 4, and 7 (using each digit exactly once), how many numbers will you get?',
    options: ['3', '6', '9', '12'],
    correctAnswer: '6',
    explanation: 'There are 6 possible arrangements: 147, 174, 417, 471, 714, and 741.',
    wrongAnswerExplanations: {
      '3': 'This is too few. There are 6 different arrangements possible.',
      '9': 'This is too many. With 3 distinct digits, there are only 6 arrangements possible.',
      '12': 'This is too many. With 3 distinct digits, there are only 6 arrangements possible.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 50
  },
  {
    id: 'cl3_ch2_t2_qm17',
    type: 'mcq',
    question: 'Which set of numbers is in order from smallest to largest?',
    options: ['203, 230, 302, 320', '302, 320, 203, 230', '230, 203, 320, 302', '203, 302, 230, 320'],
    correctAnswer: '203, 230, 302, 320',
    explanation: '203 and 230 have 2 in hundreds place, while 302 and 320 have 3. Between 203 and 230, 0<3 in tens place. Between 302 and 320, 0<2 in tens place.',
    wrongAnswerExplanations: {
      '302, 320, 203, 230': 'This is incorrect. Numbers with 3 in hundreds place are larger than those with 2 in hundreds place.',
      '230, 203, 320, 302': 'This is incorrect. 203 < 230 because 0<3 in tens place.',
      '203, 302, 230, 320': 'This is incorrect. 230 < 302 because 2<3 in hundreds place.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch2_t2_qm18',
    type: 'mcq',
    question: 'Rohan wrote all the numbers from 101 to 110. How many times did he write the digit 1?',
    options: ['10', '11', '12', '13'],
    correctAnswer: '12',
    explanation: 'In 101-109: each number has at least one 1 in hundreds place; 101 has another 1 in ones place. In 110: the 1 in hundreds and tens places. Total: 12 ones.',
    wrongAnswerExplanations: {
      '10': 'This is too few. There are 12 instances of the digit 1.',
      '11': 'This is too few. There are 12 instances of the digit 1.',
      '13': 'This is too many. There are 12 instances of the digit 1.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 50
  },
  {
    id: 'cl3_ch2_t2_qm19',
    type: 'mcq',
    question: 'What is the difference between the largest and smallest 3-digit numbers?',
    options: ['899', '900', '998', '999'],
    correctAnswer: '899',
    explanation: 'Largest 3-digit number: 999. Smallest 3-digit number: 100. The difference is 999 - 100 = 899.',
    wrongAnswerExplanations: {
      '900': 'This is incorrect. 999 - 100 = 899, not 900.',
      '998': 'This is incorrect. 999 - 100 = 899, not 998.',
      '999': 'This is incorrect. 999 - 100 = 899, not 999.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch2_t2_qm20',
    type: 'mcq',
    question: 'Which number would come next in this ordering: 135, 153, 315, 351, ...?',
    options: ['513', '531', '515', '355'],
    correctAnswer: '513',
    explanation: 'This is ordering all possible arrangements of the digits 1, 3, and 5. The remaining arrangements are 513 and 531, with 513 coming first.',
    wrongAnswerExplanations: {
      '531': '531 would come after 513 in this sequence, not next.',
      '515': '515 uses the digit 5 twice and 1 once, which doesn\'t match the pattern of using 1, 3, and 5 once each.',
      '355': '355 uses the digit 5 twice and 3 once, which doesn\'t match the pattern of using 1, 3, and 5 once each.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 50
  }
];
