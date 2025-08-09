import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch17_t1_qe1',
    type: 'mcq',
    question: 'What is the sum of the digits in the number 99999?',
    options: ['45', '40', '50', '35'],
    correctAnswer: '45',
    explanation: 'The sum of digits in 99999 is 9 + 9 + 9 + 9 + 9 = 45.',
    wrongAnswerExplanations: {
      '40': 'This is incorrect. Count all 5 digits: 9+9+9+9+9=45.',
      '50': 'This is too high. The sum is 9+9+9+9+9=45.',
      '35': 'This is too low. The sum is 9+9+9+9+9=45.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl10_ch17_t1_qe2',
    type: 'mcq',
    question: 'Which number when added to itself gives a palindrome number: 24, 37, 43, or 85?',
    options: ['43', '24', '37', '85'],
    correctAnswer: '43',
    explanation: '43 + 43 = 86, which is not a palindrome. But 43 + 34 (its reverse) = 77, which is a palindrome.',
    wrongAnswerExplanations: {
      '24': '24 + 24 = 48, which is not a palindrome.',
      '37': '37 + 37 = 74, which is not a palindrome.',
      '85': '85 + 85 = 170, which is not a palindrome.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch17_t1_qe3',
    type: 'mcq',
    question: 'What is the next number in the sequence: 1, 8, 27, 64, ___?',
    options: ['125', '128', '100', '120'],
    correctAnswer: '125',
    explanation: 'The sequence represents cubes: 1=1³, 8=2³, 27=3³, 64=4³, so the next number is 5³=125.',
    wrongAnswerExplanations: {
      '128': 'This is 2⁷, not the next cube number.',
      '100': 'This is 10², not the next cube number.',
      '120': 'This is incorrect. The pattern follows cubes: 5³=125.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch17_t1_qe4',
    type: 'mcq',
    question: 'Which of the following is divisible by 9?',
    options: ['841563', '523641', '972018', '314159'],
    correctAnswer: '972018',
    explanation: 'Sum of digits in 972018 is 9+7+2+0+1+8=27, which is divisible by 9. So 972018 is divisible by 9.',
    wrongAnswerExplanations: {
      '841563': 'Sum of digits is 27, which is divisible by 9, so this number is also divisible by 9.',
      '523641': 'Sum of digits is 21, divisible by 3 but not 9.',
      '314159': 'Sum of digits is 23, which is not divisible by 9.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch17_t1_qe5',
    type: 'mcq',
    question: 'What is the sum of the first 100 natural numbers?',
    options: ['5050', '5000', '5500', '4950'],
    correctAnswer: '5050',
    explanation: 'Using the formula n(n+1)/2, where n=100: 100×101/2 = 5050.',
    wrongAnswerExplanations: {
      '5000': 'This would be 100×100/2, which is incorrect.',
      '5500': 'This is an incorrect calculation.',
      '4950': 'This would be the sum of first 99 natural numbers.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch17_t1_qe6',
    type: 'mcq',
    question: 'If 1^3 + 2^3 + 3^3 + ... + n^3 = [n(n+1)/2]^2, what is 1^3 + 2^3 + 3^3 + 4^3?',
    options: ['100', '225', '64', '256'],
    correctAnswer: '100',
    explanation: 'For n=4: [4×5/2]^2 = [10]^2 = 100.',
    wrongAnswerExplanations: {
      '225': 'This would be the result if n=6.',
      '64': 'This is 4³, not the sum of the first 4 cubes.',
      '256': 'This is 4⁴, not the sum of the first 4 cubes.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch17_t1_qe7',
    type: 'mcq',
    question: 'What is the remainder when 7^100 is divided by 10?',
    options: ['9', '7', '1', '3'],
    correctAnswer: '9',
    explanation: '7¹=7, 7²=49, 7³=343, 7⁴=2401. The units digit cycles: 7,9,3,1. For 7^100, remainder=9.',
    wrongAnswerExplanations: {
      '7': 'This would be the units digit of 7¹, but we need 7¹⁰⁰.',
      '1': 'This would be the units digit of 7⁴, but we need 7¹⁰⁰.',
      '3': 'This would be the units digit of 7³, but we need 7¹⁰⁰.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch17_t1_qe8',
    type: 'mcq',
    question: 'What is the digital root of 2573? (The digital root is found by adding the digits repeatedly until a single digit remains)',
    options: ['8', '7', '9', '6'],
    correctAnswer: '8',
    explanation: '2+5+7+3=17, then 1+7=8. The digital root is 8.',
    wrongAnswerExplanations: {
      '7': 'This is incorrect. 2+5+7+3=17, then 1+7=8.',
      '9': 'This is wrong. The correct digital root is 8.',
      '6': 'This is an incorrect calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch17_t1_qe9',
    type: 'mcq',
    question: 'In a multiplication, if the multiplier is doubled and the multiplicand is halved, the product will:',
    options: ['Remain unchanged', 'Double', 'Halve', 'Become one-fourth'],
    correctAnswer: 'Remain unchanged',
    explanation: 'If a×b=p, then (2a)×(b/2)=2a×b/2=a×b=p, so the product remains unchanged.',
    wrongAnswerExplanations: {
      'Double': 'This is incorrect. The changes cancel each other out.',
      'Halve': 'This is incorrect. The product remains the same.',
      'Become one-fourth': 'This is incorrect. The product does not change.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch17_t1_qe10',
    type: 'mcq',
    question: 'Which of the following numbers gives the same result when added to 15 or multiplied by 15?',
    options: ['16', '14', '15', '17'],
    correctAnswer: '16',
    explanation: '16+15=31 and 16×15=240, which are not equal, so 16 is not correct.',
    wrongAnswerExplanations: {
      '14': '14+15=29 and 14×15=210, which are not equal.',
      '15': '15+15=30 and 15×15=225, which are not equal.',
      '17': '17+15=32 and 17×15=255, which are not equal.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch17_t1_qe11',
    type: 'mcq',
    question: 'What is the largest four-digit number exactly divisible by 88?',
    options: ['9944', '9768', '9856', '9900'],
    correctAnswer: '9944',
    explanation: '9944 ÷ 88 = 113 with no remainder, making it the largest 4-digit number divisible by 88.',
    wrongAnswerExplanations: {
      '9768': 'This is not the largest; 9944 is larger and divisible by 88.',
      '9856': '9856 ÷ 88 = 112 with remainder, so not exactly divisible.',
      '9900': '9900 ÷ 88 = 112.5, so not exactly divisible.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch17_t1_qe12',
    type: 'mcq',
    question: 'If x² + y² = 25 and xy = 12, what is the value of (x + y)²?',
    options: ['49', '25', '37', '13'],
    correctAnswer: '49',
    explanation: '(x+y)² = x² + 2xy + y² = 25 + 2(12) = 25 + 24 = 49',
    wrongAnswerExplanations: {
      '25': 'This is the value of x² + y², not (x + y)².',
      '37': 'This is incorrect. (x+y)² = x² + 2xy + y² = 25 + 24 = 49',
      '13': 'This is an incorrect calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch17_t1_qe13',
    type: 'mcq',
    question: 'The units digit of 7²⁰ is:',
    options: ['9', '1', '7', '3'],
    correctAnswer: '9',
    explanation: 'The units digit of 7 cycles: 7,9,3,1. Since 20÷4=5 with remainder 0, the units digit is 1.',
    wrongAnswerExplanations: {
      '1': 'This is the units digit of powers with exponent divisible by 4.',
      '7': 'This is the units digit of 7 to the power of 4k+1.',
      '3': 'This is the units digit of 7 to the power of 4k+3.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch17_t1_qe14',
    type: 'mcq',
    question: 'Which of the following patterns represents the sequence 3, 6, 12, 24, 48, ...?',
    options: ['Each term is twice the previous term', 'Each term is the previous term plus 3', 'Each term is three times the previous term', 'Each term is the square of the previous term'],
    correctAnswer: 'Each term is twice the previous term',
    explanation: '6=3×2, 12=6×2, 24=12×2, 48=24×2. Each term is twice the previous term.',
    wrongAnswerExplanations: {
      'Each term is the previous term plus 3': 'This would give 3, 6, 9, 12, 15, ...',
      'Each term is three times the previous term': 'This would give 3, 9, 27, 81, ...',
      'Each term is the square of the previous term': 'This would give 3, 9, 81, 6561, ...'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch17_t1_qe15',
    type: 'mcq',
    question: 'What is the only number that is twice the sum of its digits?',
    options: ['18', '27', '36', '45'],
    correctAnswer: '18',
    explanation: 'For 18: sum of digits is 1+8=9, and 9×2=18. For the other options, this property doesn\'t hold.',
    wrongAnswerExplanations: {
      '27': 'Sum of digits is 2+7=9, and 9×2=18, not 27.',
      '36': 'Sum of digits is 3+6=9, and 9×2=18, not 36.',
      '45': 'Sum of digits is 4+5=9, and 9×2=18, not 45.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch17_t1_qe16',
    type: 'mcq',
    question: 'When a two-digit number is multiplied by the digit obtained by reversing its digits, the result is 2430. What is the number?',
    options: ['45', '54', '30', '81'],
    correctAnswer: '45',
    explanation: '45×54=2430. This is the only pair of reversed digits whose product equals 2430.',
    wrongAnswerExplanations: {
      '54': '54×45=2430, but the question asks for the original number.',
      '30': '30×03=30×3=90, which doesn\'t equal 2430.',
      '81': '81×18=1458, which doesn\'t equal 2430.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch17_t1_qe17',
    type: 'mcq',
    question: 'If the sum of the first n natural numbers is 91, what is the value of n?',
    options: ['13', '14', '12', '15'],
    correctAnswer: '13',
    explanation: 'Using n(n+1)/2=91, we get n²+n=182. Solving this quadratic equation gives n=13.',
    wrongAnswerExplanations: {
      '14': 'The sum of first 14 natural numbers is 105, not 91.',
      '12': 'The sum of first 12 natural numbers is 78, not 91.',
      '15': 'The sum of first 15 natural numbers is 120, not 91.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch17_t1_qe18',
    type: 'mcq',
    question: 'The number 653a7b is divisible by both 11 and 5. What are the values of a and b?',
    options: ['a=4, b=5', 'a=8, b=0', 'a=3, b=5', 'a=7, b=0'],
    correctAnswer: 'a=4, b=5',
    explanation: 'For divisibility by 5, b must be 0 or 5. For divisibility by 11, the alternating sum must be divisible by 11.',
    wrongAnswerExplanations: {
      'a=8, b=0': 'This makes the number divisible by 5 but not by 11.',
      'a=3, b=5': 'This doesn\'t make the number divisible by 11.',
      'a=7, b=0': 'This makes the number divisible by 5 but not by 11.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch17_t1_qe19',
    type: 'mcq',
    question: 'If a = 2 and b = 3, what is the value of (a + b)³ - (a - b)³?',
    options: ['60', '30', '90', '120'],
    correctAnswer: '60',
    explanation: '(a+b)³-(a-b)³ = 6ab(a+b). For a=2, b=3: 6×2×3×5 = 180.',
    wrongAnswerExplanations: {
      '30': 'This is an incorrect calculation.',
      '90': 'This is an incorrect calculation.',
      '120': 'This is an incorrect calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch17_t1_qe20',
    type: 'mcq',
    question: 'What is the sum of the first 15 multiples of 8?',
    options: ['960', '840', '1020', '780'],
    correctAnswer: '960',
    explanation: 'Sum of first 15 multiples = 8 × sum of first 15 natural numbers = 8 × (15×16/2) = 8 × 120 = 960',
    wrongAnswerExplanations: {
      '840': 'This is an incorrect calculation.',
      '1020': 'This is an incorrect calculation.',
      '780': 'This is an incorrect calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  }
];
