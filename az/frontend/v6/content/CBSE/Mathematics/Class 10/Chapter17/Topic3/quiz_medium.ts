import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch17_t3_qm1',
    type: 'mcq',
    question: 'Using Vedic mathematics, what is 106 × 104?',
    options: ['11,024', '10,924', '11,124', '10,824'],
    correctAnswer: '11,024',
    explanation: 'Using the formula (a+b)(a-b): (105+1)(105-1) = 105² - 1² = 11,025 - 1 = 11,024.',
    wrongAnswerExplanations: {
      '10,924': 'The calculation is incorrect. Using the formula, 106×104=11,024.',
      '11,124': 'The calculation is incorrect. Using the formula, 106×104=11,024.',
      '10,824': 'The calculation is incorrect. Using the formula, 106×104=11,024.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch17_t3_qm2',
    type: 'mcq',
    question: 'If 43 × 47 = 2,021, then what is 53 × 57 using a number pattern?',
    options: ['3,021', '2,921', '3,121', '3,221'],
    correctAnswer: '3,021',
    explanation: '43×47 = (45-2)(45+2) = 45² - 2² = 2,025 - 4 = 2,021; Similarly, 53×57 = 55² - 2² = 3,025 - 4 = 3,021.',
    wrongAnswerExplanations: {
      '2,921': 'The calculation is incorrect. Using the pattern, 53×57=3,021.',
      '3,121': 'The calculation is incorrect. Using the pattern, 53×57=3,021.',
      '3,221': 'The calculation is incorrect. Using the pattern, 53×57=3,021.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch17_t3_qm3',
    type: 'mcq',
    question: 'Using the divisibility test for 7, is 1,001 divisible by 7?',
    options: ['Yes', 'No', 'Cannot determine', 'Need more information'],
    correctAnswer: 'Yes',
    explanation: '1001 = 7 × 143, so it is divisible by 7. Alternatively: 1001 = 1000 + 1; 1000 ÷ 7 leaves remainder 6, so 1000 + 1 = 7k + 6 + 1 = 7k + 7 = 7(k+1).',
    wrongAnswerExplanations: {
      'No': 'The calculation is incorrect. 1001 is divisible by 7.',
      'Cannot determine': 'We have sufficient information to determine divisibility by 7.',
      'Need more information': 'The given number is sufficient to check divisibility by 7.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch17_t3_qm4',
    type: 'mcq',
    question: 'What is the result of 997 × 1,003 using the formula (a-b)(a+b)?',
    options: ['1,000,000 - 9', '1,000,000 + 9', '1,000,000 - 3', '1,000,000 + 3'],
    correctAnswer: '1,000,000 - 9',
    explanation: '997×1003 = (1000-3)(1000+3) = 1000² - 3² = 1,000,000 - 9 = 999,991',
    wrongAnswerExplanations: {
      '1,000,000 + 9': 'The formula (a-b)(a+b) = a² - b², not a² + b².',
      '1,000,000 - 3': 'The calculation is incorrect. We subtract 3² = 9, not 3.',
      '1,000,000 + 3': 'The calculation is incorrect. The formula gives 1,000,000 - 9.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch17_t3_qm5',
    type: 'mcq',
    question: 'Using the Nikhilam method, what is 98 × 97?',
    options: ['9,506', '9,406', '9,606', '9,706'],
    correctAnswer: '9,506',
    explanation: 'Base is 100. Deficiencies: 98→2, 97→3. Cross-subtract: 98-3=95 or 97-2=95. Multiply deficiencies: 2×3=6. Result: 95|06 = 9,506.',
    wrongAnswerExplanations: {
      '9,406': 'The calculation is incorrect. Using Nikhilam method, 98×97=9,506.',
      '9,606': 'The calculation is incorrect. Using Nikhilam method, 98×97=9,506.',
      '9,706': 'The calculation is incorrect. Using Nikhilam method, 98×97=9,506.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch17_t3_qm6',
    type: 'mcq',
    question: 'Find 48² using the Yavadunam sutra (by deficiency method).',
    options: ['2,304', '2,204', '2,404', '2,104'],
    correctAnswer: '2,304',
    explanation: 'Base: 50. Deficiency: 2. 48² = (50-2)² = 50² - 2(50)(2) + 2² = 2500 - 200 + 4 = 2304',
    wrongAnswerExplanations: {
      '2,204': 'The calculation is incorrect. Using the deficiency method, 48²=2,304.',
      '2,404': 'The calculation is incorrect. Using the deficiency method, 48²=2,304.',
      '2,104': 'The calculation is incorrect. Using the deficiency method, 48²=2,304.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch17_t3_qm7',
    type: 'mcq',
    question: 'Using the digital root method, predict which of these numbers is divisible by 9.',
    options: ['4,563', '4,572', '4,581', '4,562'],
    correctAnswer: '4,572',
    explanation: 'Digital root of 4572: 4+5+7+2=18, 1+8=9. Since digital root is 9, 4572 is divisible by 9.',
    wrongAnswerExplanations: {
      '4,563': 'Digital root: 4+5+6+3=18, 1+8=9. It is divisible by 9.',
      '4,581': 'Digital root: 4+5+8+1=18, 1+8=9. It is divisible by 9.',
      '4,562': 'Digital root: 4+5+6+2=17. Not divisible by 9.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch17_t3_qm8',
    type: 'mcq',
    question: 'If a two-digit number has digits a and b, and a + b = 9, what is the sum of all such numbers?',
    options: ['495', '905', '450', '405'],
    correctAnswer: '495',
    explanation: 'Numbers are: 18,27,36,45,54,63,72,81,90. Sum = 18+27+36+45+54+63+72+81+90 = 486+9 = 495',
    wrongAnswerExplanations: {
      '905': 'The calculation is incorrect. The sum is 495.',
      '450': 'The calculation is incorrect. The sum is 495.',
      '405': 'The calculation is incorrect. The sum is 495.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch17_t3_qm9',
    type: 'mcq',
    question: 'Using the Ekadhikena Purvena sutra, find the cube of 7.',
    options: ['343', '363', '333', '373'],
    correctAnswer: '343',
    explanation: 'First, 7² = 49. Then, 7×49 = 343. This is 7³.',
    wrongAnswerExplanations: {
      '363': 'The calculation is incorrect. 7³=343.',
      '333': 'The calculation is incorrect. 7³=343.',
      '373': 'The calculation is incorrect. 7³=343.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch17_t3_qm10',
    type: 'mcq',
    question: 'What is the Vedic method for dividing any number by 9?',
    options: [
      'Add 1 to the number and multiply by 1/10',
      'Multiply by 2 and divide by 18',
      'Find the digital root',
      'Divide by 10 and add 1/10th of the quotient'
    ],
    correctAnswer: 'Divide by 10 and add 1/10th of the quotient',
    explanation: 'To divide by 9: Divide by 10, then add 1/10th of that result. Example: 72÷9 = 7.2 + 0.72 = 7.92 = 8.',
    wrongAnswerExplanations: {
      'Add 1 to the number and multiply by 1/10': 'This is not a valid method for division by 9.',
      'Multiply by 2 and divide by 18': 'This is equivalent to dividing by 9, but not a Vedic shortcut.',
      'Find the digital root': 'Digital root helps check divisibility but isn\'t a division method.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch17_t3_qm11',
    type: 'mcq',
    question: 'Using the Vedic squaring method, what is 95²?',
    options: ['9,025', '9,225', '9,125', '8,925'],
    correctAnswer: '9,025',
    explanation: '95² = (100-5)² = 10,000 - 2(100)(5) + 25 = 10,000 - 1,000 + 25 = 9,025',
    wrongAnswerExplanations: {
      '9,225': 'The calculation is incorrect. Using the formula, 95²=9,025.',
      '9,125': 'The calculation is incorrect. Using the formula, 95²=9,025.',
      '8,925': 'The calculation is incorrect. Using the formula, 95²=9,025.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch17_t3_qm12',
    type: 'mcq',
    question: 'Using the Anurupyena sutra, what is 125 × 48?',
    options: ['6,000', '5,000', '6,500', '5,500'],
    correctAnswer: '6,000',
    explanation: '125×48 = 125×(50-2) = 125×50 - 125×2 = 6,250 - 250 = 6,000',
    wrongAnswerExplanations: {
      '5,000': 'The calculation is incorrect. Using the formula, 125×48=6,000.',
      '6,500': 'The calculation is incorrect. Using the formula, 125×48=6,000.',
      '5,500': 'The calculation is incorrect. Using the formula, 125×48=6,000.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch17_t3_qm13',
    type: 'mcq',
    question: 'Which divisibility test states that a number is divisible by 6 if it is divisible by both 2 and 3?',
    options: ['Composite divisibility test', 'Prime factorization test', 'LCM test', 'Remainder test'],
    correctAnswer: 'Composite divisibility test',
    explanation: 'The composite divisibility test states that for coprime numbers (like 2 and 3), a number divisible by both is divisible by their product (6).',
    wrongAnswerExplanations: {
      'Prime factorization test': 'This refers to finding all prime factors, not a specific divisibility test.',
      'LCM test': 'This isn\'t a standard name for the test for divisibility by 6.',
      'Remainder test': 'This is too general and doesn\'t specify the method for testing divisibility by 6.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch17_t3_qm14',
    type: 'mcq',
    question: 'What is 625 × 625 using the Vedic method for squaring numbers ending in 25?',
    options: ['390,625', '389,625', '391,625', '392,625'],
    correctAnswer: '390,625',
    explanation: 'For 625²: 6×7=42, append 25². So 625²=42|0625=390,625',
    wrongAnswerExplanations: {
      '389,625': 'The calculation is incorrect. Using Vedic method, 625²=390,625.',
      '391,625': 'The calculation is incorrect. Using Vedic method, 625²=390,625.',
      '392,625': 'The calculation is incorrect. Using Vedic method, 625²=390,625.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch17_t3_qm15',
    type: 'mcq',
    question: 'Using the casting out elevens method, verify if 792 × 11 = 8,712 is correct.',
    options: ['Correct', 'Incorrect', 'Cannot verify', 'Need more information'],
    correctAnswer: 'Correct',
    explanation: 'For 792: 7-(9-2)=0. For 11: 1-1=0. For 8712: 8-(7-1+2)=0. Since 0×0=0 equals 0, the equation is correct.',
    wrongAnswerExplanations: {
      'Incorrect': 'The verification confirms the equation is correct.',
      'Cannot verify': 'We can verify using the casting out elevens method.',
      'Need more information': 'We have enough information to verify the equation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch17_t3_qm16',
    type: 'mcq',
    question: 'Using mental math, what is the remainder when 7^143 is divided by 10?',
    options: ['3', '7', '9', '1'],
    correctAnswer: '3',
    explanation: 'Powers of 7 have cyclical last digits: 7, 9, 3, 1. The cycle length is 4. 143÷4=35 with remainder 3. So 7^143 gives the same remainder as 7^3, which is 3.',
    wrongAnswerExplanations: {
      '7': 'This is the last digit of 7^1, not 7^143.',
      '9': 'This is the last digit of 7^2, not 7^143.',
      '1': 'This is the last digit of 7^4, not 7^143.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch17_t3_qm17',
    type: 'mcq',
    question: 'Using the Dwandwa Yoga method, what is the product of 93 × 87?',
    options: ['8,091', '8,191', '8,291', '7,991'],
    correctAnswer: '8,091',
    explanation: 'Base: 90. Deviations: 93→+3, 87→-3. First part: 90×90+3×(-3) = 8,100-9 = 8,091. Second part: 3×(-3) = -9. Result: 8,091.',
    wrongAnswerExplanations: {
      '8,191': 'The calculation is incorrect. Using Dwandwa Yoga, 93×87=8,091.',
      '8,291': 'The calculation is incorrect. Using Dwandwa Yoga, 93×87=8,091.',
      '7,991': 'The calculation is incorrect. Using Dwandwa Yoga, 93×87=8,091.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch17_t3_qm18',
    type: 'mcq',
    question: 'What is the sum of the first 100 positive integers using a mental math formula?',
    options: ['5,050', '5,500', '4,950', '10,100'],
    correctAnswer: '5,050',
    explanation: 'Sum = n(n+1)/2 = 100×101/2 = 5,050',
    wrongAnswerExplanations: {
      '5,500': 'The calculation is incorrect. The sum is 5,050.',
      '4,950': 'The calculation is incorrect. The sum is 5,050.',
      '10,100': 'This is 100×101, not 100×101/2.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch17_t3_qm19',
    type: 'mcq',
    question: 'Using Vedic division, what is 3,956 ÷ 11?',
    options: ['359.6363...', '350.6363...', '360', '358.7272...'],
    correctAnswer: '359.6363...',
    explanation: 'Divide each digit by 11: 3÷11=0 rem 3, 39÷11=3 rem 6, 35÷11=3 rem 2, 26÷11=2 rem 4, etc. = 359.6363...',
    wrongAnswerExplanations: {
      '350.6363...': 'The calculation is incorrect. The quotient is 359.6363...',
      '360': 'The calculation is incorrect. The quotient is 359.6363...',
      '358.7272...': 'The calculation is incorrect. The quotient is 359.6363...'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch17_t3_qm20',
    type: 'mcq',
    question: 'Using the divisibility test for 13, is 10,192 divisible by 13?',
    options: ['Yes', 'No', 'Cannot determine', 'Need more information'],
    correctAnswer: 'Yes',
    explanation: 'Apply the trick: 192 - 4×10 = 192-40 = 152; 15 - 4×2 = 15-8 = 7; 7 is not divisible by 13, so 10,192 is not divisible by 13.',
    wrongAnswerExplanations: {
      'Yes': 'The calculation is incorrect. 10,192 is not divisible by 13.',
      'Cannot determine': 'We have enough information to determine divisibility by 13.',
      'Need more information': 'The given number is sufficient to check divisibility by 13.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  }
];
