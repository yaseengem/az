import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl3_ch2_t2_qe1',
    type: 'mcq',
    question: 'Which symbol is used to show that one number is greater than another?',
    options: ['>', '<', '=', '≠'],
    correctAnswer: '>',
    explanation: 'The ">" symbol means `greater than`. For example, 8 > 5 means 8 is greater than 5.',
    wrongAnswerExplanations: {
      '<': 'This symbol means `less than`, not `greater than`.',
      '=': 'This symbol means `equal to`, not `greater than`.',
      '≠': 'This symbol means `not equal to`, not `greater than`.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch2_t2_qe2',
    type: 'mcq',
    question: 'Which symbol should go in the blank? 45 ___ 54',
    options: ['>', '<', '=', '≠'],
    correctAnswer: '<',
    explanation: '45 is less than 54, so we use the "<" symbol. 45 < 54 is correct.',
    wrongAnswerExplanations: {
      '>': 'This would mean 45 is greater than 54, which is incorrect.',
      '=': 'This would mean 45 is equal to 54, which is incorrect.',
      '≠': 'While 45 is not equal to 54, the question asks for comparing their size.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch2_t2_qe3',
    type: 'mcq',
    question: 'Which number is greater than 327?',
    options: ['372', '273', '237', '323'],
    correctAnswer: '372',
    explanation: '372 is greater than 327 because when comparing digit by digit from left, 3=3 in hundreds place, but 7>2 in tens place.',
    wrongAnswerExplanations: {
      '273': '273 is less than 327 because 2<3 in hundreds place.',
      '237': '237 is less than 327 because 2<3 in hundreds place.',
      '323': '323 is less than 327 because 3=3 in hundreds place, 2<2 in tens place, and 3<7 in ones place.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 35
  },
  {
    id: 'cl3_ch2_t2_qe4',
    type: 'mcq',
    question: 'Which number is less than 546?',
    options: ['564', '654', '465', '549'],
    correctAnswer: '465',
    explanation: '465 is less than 546 because 4<5 in hundreds place.',
    wrongAnswerExplanations: {
      '564': '564 is greater than 546 because 5=5 in hundreds place, but 6>4 in tens place.',
      '654': '654 is greater than 546 because 6>5 in hundreds place.',
      '549': '549 is greater than 546 because 5=5 in hundreds place, 4=4 in tens place, but 9>6 in ones place.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 35
  },
  {
    id: 'cl3_ch2_t2_qe5',
    type: 'mcq',
    question: 'Put these numbers in order from smallest to largest: 125, 215, 152',
    options: ['125, 152, 215', '125, 215, 152', '152, 125, 215', '215, 152, 125'],
    correctAnswer: '125, 152, 215',
    explanation: '125 is smallest (1 in hundreds), 152 is next (1 in hundreds but 5>2 in tens), and 215 is largest (2 in hundreds).',
    wrongAnswerExplanations: {
      '125, 215, 152': 'This is incorrect because 152 is smaller than 215.',
      '152, 125, 215': 'This is incorrect because 125 is smaller than 152.',
      '215, 152, 125': 'This is the opposite order - largest to smallest instead of smallest to largest.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 40
  },
  {
    id: 'cl3_ch2_t2_qe6',
    type: 'mcq',
    question: 'Which symbol correctly compares 408 and 480?',
    options: ['408 > 480', '408 < 480', '408 = 480', 'None of these'],
    correctAnswer: '408 < 480',
    explanation: '408 is less than 480 because 4=4 in hundreds place, but 0<8 in tens place.',
    wrongAnswerExplanations: {
      '408 > 480': 'This is incorrect because 408 is less than 480.',
      '408 = 480': 'This is incorrect because 408 and 480 are different numbers.',
      'None of these': '408 < 480 is the correct comparison.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 35
  },
  {
    id: 'cl3_ch2_t2_qe7',
    type: 'mcq',
    question: 'What is the smallest number you can make using the digits 4, 7, and 1 exactly once?',
    options: ['147', '174', '417', '471'],
    correctAnswer: '147',
    explanation: 'To make the smallest number, place the smallest digit in hundreds place, next smallest in tens, and largest in ones: 147.',
    wrongAnswerExplanations: {
      '174': 'This isn\'t the smallest possible because 4>1 in tens place.',
      '417': 'This isn\'t the smallest possible because 4>1 in hundreds place.',
      '471': 'This isn\'t the smallest possible because 4>1 in hundreds place.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 40
  },
  {
    id: 'cl3_ch2_t2_qe8',
    type: 'mcq',
    question: 'Which of these numbers is the largest?',
    options: ['391', '319', '931', '193'],
    correctAnswer: '931',
    explanation: '931 is largest because it has 9 in hundreds place, which is greater than the first digits of the other numbers.',
    wrongAnswerExplanations: {
      '391': 'This is less than 931 because 3<9 in hundreds place.',
      '319': 'This is less than 931 because 3<9 in hundreds place.',
      '193': 'This is less than 931 because 1<9 in hundreds place.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 35
  },
  {
    id: 'cl3_ch2_t2_qe9',
    type: 'mcq',
    question: 'Arrange these numbers in order from largest to smallest: 264, 246, 426',
    options: ['426, 264, 246', '264, 246, 426', '246, 264, 426', '426, 246, 264'],
    correctAnswer: '426, 264, 246',
    explanation: '426 is largest (4 in hundreds), 264 is next (2 in hundreds, 6 in tens), and 246 is smallest (2 in hundreds, 4 in tens).',
    wrongAnswerExplanations: {
      '264, 246, 426': 'This order is incorrect because 426 is the largest number.',
      '246, 264, 426': 'This is actually smallest to largest, not largest to smallest.',
      '426, 246, 264': 'This is incorrect because 264 is greater than 246.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 40
  },
  {
    id: 'cl3_ch2_t2_qe10',
    type: 'mcq',
    question: 'Which number comes just after 599?',
    options: ['598', '600', '590', '609'],
    correctAnswer: '600',
    explanation: 'The number that comes just after 599 is 600. When you add 1 to 599, you get 600.',
    wrongAnswerExplanations: {
      '598': '598 comes before 599, not after it.',
      '590': '590 is less than 599, not greater.',
      '609': '609 is 10 more than 599, not just 1 more.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch2_t2_qe11',
    type: 'mcq',
    question: 'Which statement is TRUE?',
    options: ['678 > 687', '543 < 534', '295 < 259', '403 > 304'],
    correctAnswer: '403 > 304',
    explanation: '403 is greater than 304 because 4>3 in hundreds place.',
    wrongAnswerExplanations: {
      '678 > 687': 'This is false because 678 < 687 (6=6 in hundreds, 7<8 in tens).',
      '543 < 534': 'This is false because 543 > 534 (5=5 in hundreds, 4<3 in tens).',
      '295 < 259': 'This is false because 295 > 259 (2=2 in hundreds, 9>5 in tens).'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 40
  },
  {
    id: 'cl3_ch2_t2_qe12',
    type: 'mcq',
    question: 'What is the largest number you can make using the digits 2, 0, and 5 exactly once?',
    options: ['205', '250', '502', '520'],
    correctAnswer: '520',
    explanation: 'To make the largest number, place the largest digit in hundreds place (5), next largest in tens (2), and smallest in ones (0): 520.',
    wrongAnswerExplanations: {
      '205': 'This isn\'t the largest possible because 2<5 in hundreds place.',
      '250': 'This isn\'t the largest possible because 2<5 in hundreds place.',
      '502': 'This isn\'t the largest possible because 0<2 in tens place.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 40
  },
  {
    id: 'cl3_ch2_t2_qe13',
    type: 'mcq',
    question: 'Which number comes just before 300?',
    options: ['299', '301', '399', '290'],
    correctAnswer: '299',
    explanation: 'The number just before 300 is 299. When you subtract 1 from 300, you get 299.',
    wrongAnswerExplanations: {
      '301': '301 comes after 300, not before it.',
      '399': '399 is 99 more than 300, not 1 less.',
      '290': '290 is 10 less than 300, not just 1 less.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch2_t2_qe14',
    type: 'mcq',
    question: 'Arrange the numbers in ascending order: 148, 184, 418, 841',
    options: ['148, 184, 418, 841', '841, 418, 184, 148', '184, 148, 841, 418', '418, 841, 148, 184'],
    correctAnswer: '148, 184, 418, 841',
    explanation: 'Ascending means smallest to largest. 148 has the smallest hundreds digit (1), then 184, then 418 (4 in hundreds), and 841 is largest.',
    wrongAnswerExplanations: {
      '841, 418, 184, 148': 'This is descending order (largest to smallest), not ascending.',
      '184, 148, 841, 418': 'This order is incorrect. 148 is smaller than 184.',
      '418, 841, 148, 184': 'This order is incorrect. 148 and 184 are smaller than 418 and 841.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 40
  },
  {
    id: 'cl3_ch2_t2_qe15',
    type: 'mcq',
    question: 'Which statement is FALSE?',
    options: ['724 > 427', '635 > 563', '289 < 298', '145 < 415'],
    correctAnswer: '635 > 563',
    explanation: '635 is actually greater than 563 (6>5 in hundreds). The statement "635 > 563" is TRUE, not FALSE.',
    wrongAnswerExplanations: {
      '724 > 427': 'This statement is true because 724 > 427 (7>4 in hundreds).',
      '289 < 298': 'This statement is true because 289 < 298 (2=2 in hundreds, 8<9 in tens).',
      '145 < 415': 'This statement is true because 145 < 415 (1<4 in hundreds).'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 40
  },
  {
    id: 'cl3_ch2_t2_qe16',
    type: 'mcq',
    question: 'Which number is between 456 and 465?',
    options: ['450', '460', '475', '455'],
    correctAnswer: '460',
    explanation: '460 is between 456 and 465 because 456 < 460 < 465.',
    wrongAnswerExplanations: {
      '450': '450 is less than 456, not between 456 and 465.',
      '475': '475 is greater than 465, not between 456 and 465.',
      '455': '455 is less than 456, not between 456 and 465.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 35
  },
  {
    id: 'cl3_ch2_t2_qe17',
    type: 'mcq',
    question: 'In the number 523, which digit has the greatest value?',
    options: ['5', '2', '3', 'All have the same value'],
    correctAnswer: '5',
    explanation: '5 is in the hundreds place, so its value is 500, which is greater than 2 (20) or 3 (3).',
    wrongAnswerExplanations: {
      '2': '2 is in the tens place with a value of 20, which is less than 500.',
      '3': '3 is in the ones place with a value of 3, which is less than 500.',
      'All have the same value': 'The value of a digit depends on its place value, so they don\'t have the same value.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 35
  },
  {
    id: 'cl3_ch2_t2_qe18',
    type: 'mcq',
    question: 'Which number is the smallest?',
    options: ['321', '312', '231', '213'],
    correctAnswer: '213',
    explanation: '213 is smallest because comparing from left, 2 is the smallest digit in hundreds place compared to 3 in the other numbers.',
    wrongAnswerExplanations: {
      '321': '321 is greater than 213 because 3>2 in hundreds place.',
      '312': '312 is greater than 213 because 3>2 in hundreds place.',
      '231': '231 is greater than 213 because 2=2 in hundreds place, but 3>1 in tens place.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 35
  },
  {
    id: 'cl3_ch2_t2_qe19',
    type: 'mcq',
    question: 'Put these numbers in descending order: 602, 620, 260',
    options: ['620, 602, 260', '260, 602, 620', '602, 620, 260', '260, 620, 602'],
    correctAnswer: '620, 602, 260',
    explanation: 'Descending means largest to smallest. 620 and 602 both have 6 in hundreds place, but 620 > 602 because 2>0 in tens place. 260 is smallest (2 in hundreds).',
    wrongAnswerExplanations: {
      '260, 602, 620': 'This is ascending order (smallest to largest), not descending.',
      '602, 620, 260': 'This is incorrect because 620 > 602.',
      '260, 620, 602': 'This order is incorrect. 260 is smaller than both 620 and 602.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 40
  },
  {
    id: 'cl3_ch2_t2_qe20',
    type: 'mcq',
    question: 'Which statement is correct?',
    options: ['807 = 870', '999 > 990', '450 < 405', '302 = 320'],
    correctAnswer: '999 > 990',
    explanation: '999 is greater than 990 because 9=9 in hundreds place, 9=9 in tens place, but 9>0 in ones place.',
    wrongAnswerExplanations: {
      '807 = 870': 'This is incorrect because 807 ≠ 870; they are different numbers.',
      '450 < 405': 'This is incorrect because 450 > 405 (4=4 in hundreds place, but 5>0 in tens place).',
      '302 = 320': 'This is incorrect because 302 ≠ 320; they are different numbers.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 35
  }
];
