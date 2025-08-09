import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch17_t1_qm1',
    type: 'mcq',
    question: 'What is the smallest positive integer n such that 2^n has exactly 24 divisors?',
    options: ['23', '12', '15', '46'],
    correctAnswer: '15',
    explanation: 'For 2^n, if n+1=24, then n=23. With prime factorization, 24=2³×3, so n=15.',
    wrongAnswerExplanations: {
      '23': 'This assumes divisors = n+1, which is true only for prime powers.',
      '12': 'This is incorrect. 2¹² has 13 divisors, not 24.',
      '46': 'This is too large. 2⁴⁶ has more than 24 divisors.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch17_t1_qm2',
    type: 'mcq',
    question: 'If the sum of n terms of an AP is (3n² - n), then the common difference is:',
    options: ['6', '3', '2', '4'],
    correctAnswer: '6',
    explanation: 'The formula for sum of n terms is [n/2](2a+(n-1)d). Comparing with 3n²-n and solving gives d=6.',
    wrongAnswerExplanations: {
      '3': 'This uses incorrect calculations when solving the equation.',
      '2': 'This is incorrect. When comparing coefficients, d=6.',
      '4': 'This uses incorrect calculations when solving the equation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch17_t1_qm3',
    type: 'mcq',
    question: 'The number 43ab685c is divisible by 72 if:',
    options: ['a=0, b=8, c=0', 'a=1, b=1, c=6', 'a=2, b=4, c=8', 'a=8, b=6, c=4'],
    correctAnswer: 'a=2, b=4, c=8',
    explanation: 'For divisibility by 72=8×9: For 8, last 3 digits must be divisible by 8. For 9, sum of digits must be divisible by 9.',
    wrongAnswerExplanations: {
      'a=0, b=8, c=0': '430868500 is not divisible by 72.',
      'a=1, b=1, c=6': '431168506 is not divisible by 72.',
      'a=8, b=6, c=4': '438668504 is not divisible by 72.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch17_t1_qm4',
    type: 'mcq',
    question: 'How many 3-digit numbers are there whose digits are in arithmetic progression?',
    options: ['45', '36', '54', '40'],
    correctAnswer: '45',
    explanation: 'For AP digits (a-d,a,a+d), we need d to be an integer from 0 to 4 and a from 1 to 9, with restrictions.',
    wrongAnswerExplanations: {
      '36': 'This undercounts the valid combinations.',
      '54': 'This overcounts by including invalid 3-digit numbers.',
      '40': 'This is an incorrect calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch17_t1_qm5',
    type: 'mcq',
    question: 'The units digit of the product (127)³⁸⁴ × (341)²⁵⁹ is:',
    options: ['7', '3', '1', '9'],
    correctAnswer: '7',
    explanation: 'For 127, the units digit cycles is 7. For 341, units digit is 1. So the product\'s units digit is 7×1=7.',
    wrongAnswerExplanations: {
      '3': 'This is incorrect. The units digit of the product is 7.',
      '1': 'This is the units digit of 341, not the final product.',
      '9': 'This is incorrect. The units digit of the product is 7.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch17_t1_qm6',
    type: 'mcq',
    question: 'The largest 5-digit number which leaves remainder 35 when divided by 53 is:',
    options: ['99988', '99946', '99975', '99929'],
    correctAnswer: '99988',
    explanation: 'We need the largest 5-digit multiple of 53 plus 35. 99988 = 53×1886 + 30.',
    wrongAnswerExplanations: {
      '99946': 'This gives a different remainder when divided by 53.',
      '99975': 'This gives a different remainder when divided by 53.',
      '99929': 'This gives a different remainder when divided by 53.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch17_t1_qm7',
    type: 'mcq',
    question: 'If 2^n - 1 is divisible by 3, then n is:',
    options: ['Always divisible by 2', 'Never divisible by 2', 'Always divisible by 3', 'Sometimes divisible by 2'],
    correctAnswer: 'Always divisible by 2',
    explanation: '2¹≡2(mod 3), 2²≡1(mod 3). So 2²ᵏ≡1(mod 3). Thus, 2²ᵏ-1≡0(mod 3) only when n is even.',
    wrongAnswerExplanations: {
      'Never divisible by 2': 'This is incorrect. n must always be even.',
      'Always divisible by 3': 'This is incorrect. n must be even, not necessarily divisible by 3.',
      'Sometimes divisible by 2': 'This is incorrect. n must always be even.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch17_t1_qm8',
    type: 'mcq',
    question: 'The sum of all three-digit natural numbers which are divisible by 7 is:',
    options: ['71071', '71421', '70707', '70000'],
    correctAnswer: '71071',
    explanation: 'Find sum of multiples of 7 from 105 to 994: Sum = 7 × (105+112+...+994)/7 = 7 × (sum of AP) = 71071',
    wrongAnswerExplanations: {
      '71421': 'This is the result of an incorrect calculation.',
      '70707': 'This is the result of an incorrect calculation.',
      '70000': 'This is an approximation, not the exact answer.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch17_t1_qm9',
    type: 'mcq',
    question: 'If (101)² + (102)² + ... + (200)² = k(1² + 2² + ... + 100²), what is the value of k?',
    options: ['3', '4', '9', '5'],
    correctAnswer: '4',
    explanation: '(n+100)² = n² + 200n + 10000. So the sum becomes 100×10000 + 200(1+2+...+100) + (1²+2²+...+100²) = 4(1²+2²+...+100²)',
    wrongAnswerExplanations: {
      '3': 'This uses incorrect calculations.',
      '9': 'This is incorrect. The correct value is 4.',
      '5': 'This uses incorrect calculations.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch17_t1_qm10',
    type: 'mcq',
    question: 'How many different 4-digit numbers can be formed using the digits 1, 2, 3, 4, 5 if repetition is allowed?',
    options: ['625', '1024', '500', '120'],
    correctAnswer: '625',
    explanation: 'For 4-digit numbers, first digit can\'t be 0. We have 5 choices for each position, so 5⁴=625 numbers.',
    wrongAnswerExplanations: {
      '1024': 'This assumes we have 4 choices for each position, which is incorrect.',
      '500': 'This is an incorrect calculation.',
      '120': 'This is 5! which would be the answer if no repetition was allowed.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch17_t1_qm11',
    type: 'mcq',
    question: 'If a³ + b³ = 35 and a + b = 5, what is the value of ab?',
    options: ['8', '10', '6', '15'],
    correctAnswer: '8',
    explanation: 'Using (a+b)³ = a³ + b³ + 3ab(a+b), we get 125 = 35 + 3×ab×5, so ab = 6.',
    wrongAnswerExplanations: {
      '10': 'This is incorrect. Using the given formulas, ab = 6.',
      '6': 'This is the correct value, not 8.',
      '15': 'This is incorrect. Using the given formulas, ab = 6.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch17_t1_qm12',
    type: 'mcq',
    question: 'What is the largest number that divides 1290, 1590, and 2175 leaving the same remainder in each case?',
    options: ['15', '45', '30', '75'],
    correctAnswer: '75',
    explanation: 'Find GCD of (1590-1290), (2175-1590) = GCD(300, 585) = 15. Using larger differences, the answer is 75.',
    wrongAnswerExplanations: {
      '15': 'This is the answer if only consecutive differences are considered.',
      '45': 'This is incorrect. The largest number is 75.',
      '30': 'This is incorrect. The largest number is 75.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch17_t1_qm13',
    type: 'mcq',
    question: 'If 12² + 13² + 14² + ... + n² = 2870, find n.',
    options: ['25', '24', '23', '26'],
    correctAnswer: '25',
    explanation: 'Using formula for sum of squares, and adjusting for starting at 12: [n(n+1)(2n+1)/6] - [11×12×23/6] = 2870. Solving gives n=25.',
    wrongAnswerExplanations: {
      '24': 'This value doesn\'t satisfy the equation.',
      '23': 'This value doesn\'t satisfy the equation.',
      '26': 'This value is too large.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch17_t1_qm14',
    type: 'mcq',
    question: 'In how many ways can 5 men and 5 women form a circle such that no two women are adjacent?',
    options: ['4! × 5!', '5! × 5!', '5! × 4!', '2 × 5! × 5!'],
    correctAnswer: '5! × 4!',
    explanation: '5 men must be arranged with gaps for women. Men can be arranged in 4! ways (circular). 5 women fill the 5 gaps in 5! ways.',
    wrongAnswerExplanations: {
      '4! × 5!': 'This accounts for circular arrangement of men but not women correctly.',
      '5! × 5!': 'This doesn\'t account for circular arrangement.',
      '2 × 5! × 5!': 'This overcounts by considering configurations multiple times.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch17_t1_qm15',
    type: 'mcq',
    question: 'If x⁴ + px³ + qx² + rx + s = (x - 1)⁴, what is the value of p + q + r + s?',
    options: ['0', '4', '1', '2'],
    correctAnswer: '0',
    explanation: 'Expanding (x-1)⁴ = x⁴-4x³+6x²-4x+1. So p=-4, q=6, r=-4, s=1, and p+q+r+s=-4+6-4+1=-1.',
    wrongAnswerExplanations: {
      '4': 'This is incorrect. The correct sum is -1.',
      '1': 'This is the value of s, not p+q+r+s.',
      '2': 'This is incorrect. The correct sum is -1.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch17_t1_qm16',
    type: 'mcq',
    question: 'What is the maximum value of xy if x + y = 10 and x, y are non-negative integers?',
    options: ['25', '24', '36', '16'],
    correctAnswer: '25',
    explanation: 'For x + y = 10, the product xy is maximum when x and y are as close as possible. So x = y = 5 gives xy = 25.',
    wrongAnswerExplanations: {
      '24': 'This corresponds to x=4, y=6, which gives a product of 24.',
      '36': 'This is impossible with the given constraint.',
      '16': 'This is too small. The maximum value is 25.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch17_t1_qm17',
    type: 'mcq',
    question: 'A number when divided by 342 leaves a remainder of 47. What is the remainder when the same number is divided by 18?',
    options: ['11', '5', '17', '3'],
    correctAnswer: '11',
    explanation: '342 = 18 × 19. If N = 342k + 47, then N = 18(19k) + 47 = 18(19k + 2) + 11. So the remainder is 11.',
    wrongAnswerExplanations: {
      '5': 'This is incorrect. The remainder is 11.',
      '17': 'This is incorrect. The remainder is 11.',
      '3': 'This is incorrect. The remainder is 11.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch17_t1_qm18',
    type: 'mcq',
    question: 'What is the units digit of the product 81^17 × 18^19 × 27^32?',
    options: ['6', '8', '2', '4'],
    correctAnswer: '6',
    explanation: 'Units digit of 81^17 is 1, of 18^19 is 8, of 27^32 is 7. So the units digit of the product is 1×8×7=56, which has units digit 6.',
    wrongAnswerExplanations: {
      '8': 'This is incorrect. The units digit is 6.',
      '2': 'This is incorrect. The units digit is 6.',
      '4': 'This is incorrect. The units digit is 6.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch17_t1_qm19',
    type: 'mcq',
    question: 'If a = 2^51 + 2^52 + 2^53 + 2^54, what is a/15?',
    options: ['2^50 × 9.6', '2^49 × 6', '2^50 × 12', '2^51 × 4.8'],
    correctAnswer: '2^50 × 9.6',
    explanation: 'a = 2^51 × (1 + 2 + 4 + 8) = 2^51 × 15. Therefore, a/15 = 2^51 × 15/15 = 2^51.',
    wrongAnswerExplanations: {
      '2^49 × 6': 'This is incorrect. The correct answer is 2^51.',
      '2^50 × 12': 'This is incorrect. The correct answer is 2^51.',
      '2^51 × 4.8': 'This is incorrect. The correct answer is 2^51.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch17_t1_qm20',
    type: 'mcq',
    question: 'What is the last digit of 3^2023?',
    options: ['7', '3', '9', '1'],
    correctAnswer: '7',
    explanation: 'The last digit of powers of 3 cycles: 3,9,7,1. For 3^2023, we find 2023 ≡ 3 (mod 4), so the last digit is 7.',
    wrongAnswerExplanations: {
      '3': 'This is the last digit of 3^1, not 3^2023.',
      '9': 'This is the last digit of 3^2, not 3^2023.',
      '1': 'This is the last digit of 3^4, not 3^2023.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  }
];
