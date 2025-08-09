import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch17_t3_qe1',
    type: 'mcq',
    question: 'Using the divisibility by 11 trick, determine if 924 is divisible by 11.',
    options: ['Yes', 'No', 'Cannot determine', 'Need more information'],
    correctAnswer: 'Yes',
    explanation: 'Sum of alternate digits: 9+4=13, 2=2. Difference: 13-2=11, which is divisible by 11, so 924 is divisible by 11.',
    wrongAnswerExplanations: {
      'No': 'The calculation is incorrect. Using the alternate digits rule shows that 924 is divisible by 11.',
      'Cannot determine': 'We have sufficient information to determine divisibility.',
      'Need more information': 'The given number is sufficient to check divisibility by 11.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch17_t3_qe2',
    type: 'mcq',
    question: 'What is the last digit of 7^99?',
    options: ['7', '9', '3', '1'],
    correctAnswer: '7',
    explanation: 'Looking at the pattern of last digits of powers of 7: 7¹=7, 7²=49, 7³=343, 7⁴=2401. The pattern repeats every 4 powers, so 7^99 ends with 7.',
    wrongAnswerExplanations: {
      '9': 'This would be the last digit of 7^9, not 7^99.',
      '3': 'This would be the last digit of 7^3, not 7^99.',
      '1': 'Powers of 7 never end with 1.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch17_t3_qe3',
    type: 'mcq',
    question: 'Using the casting out nines method, verify if 467 × 12 = 5604 is correct.',
    options: ['Correct', 'Incorrect', 'Cannot verify', 'Need to recalculate'],
    correctAnswer: 'Correct',
    explanation: 'For 467: 4+6+7=17, 1+7=8. For 12: 1+2=3. 8×3=24, 2+4=6. For 5604: 5+6+0+4=15, 1+5=6. Since both equal 6, equation is correct.',
    wrongAnswerExplanations: {
      'Incorrect': 'The verification shows the equation is correct, as both sides reduce to 6 using casting out nines.',
      'Cannot verify': 'We can verify using the casting out nines method.',
      'Need to recalculate': 'The verification is complete and shows the equation is correct.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch17_t3_qe4',
    type: 'mcq',
    question: 'What is the digital root of 2573?',
    options: ['8', '17', '7', '6'],
    correctAnswer: '8',
    explanation: '2+5+7+3=17, then 1+7=8. The digital root is 8.',
    wrongAnswerExplanations: {
      '17': 'This is the first step sum, not the digital root.',
      '7': 'The calculation is incorrect. The digital root is 8.',
      '6': 'The calculation is incorrect. The digital root is 8.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch17_t3_qe5',
    type: 'mcq',
    question: 'Using the "multiply by 11" shortcut, what is 43 × 11?',
    options: ['473', '513', '463', '493'],
    correctAnswer: '473',
    explanation: 'For two-digit numbers: write 4, add 4+3=7, write 3. Result: 473.',
    wrongAnswerExplanations: {
      '513': 'The calculation is incorrect. Using the shortcut, 43×11=473.',
      '463': 'The calculation is incorrect. Using the shortcut, 43×11=473.',
      '493': 'The calculation is incorrect. Using the shortcut, 43×11=473.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch17_t3_qe6',
    type: 'mcq',
    question: 'Which of these multiplication results can be quickly verified using the "multiply by 9" trick: multiply by 10 and subtract the original number?',
    options: ['68 × 9', '32 × 3', '45 × 11', '77 × 8'],
    correctAnswer: '68 × 9',
    explanation: '68×9 = 68×10-68 = 680-68 = 612, which is correct.',
    wrongAnswerExplanations: {
      '32 × 3': 'This doesn\'t use the multiply by 9 trick.',
      '45 × 11': 'This would use the multiply by 11 trick, not the 9 trick.',
      '77 × 8': 'This doesn\'t use the multiply by 9 trick.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch17_t3_qe7',
    type: 'mcq',
    question: 'Using the divisibility rule for 3, is 5247 divisible by 3?',
    options: ['Yes', 'No', 'Cannot determine', 'Need more information'],
    correctAnswer: 'Yes',
    explanation: 'Sum of digits: 5+2+4+7=18, which is divisible by 3, so 5247 is divisible by 3.',
    wrongAnswerExplanations: {
      'No': 'The calculation is incorrect. The sum of digits is 18, which is divisible by 3.',
      'Cannot determine': 'We have sufficient information to determine divisibility by 3.',
      'Need more information': 'The given number is sufficient to check divisibility by 3.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch17_t3_qe8',
    type: 'mcq',
    question: 'Which mental math strategy would be most efficient to calculate 48 × 25?',
    options: ['48 × 100 ÷ 4', '50 × 24', '48 × 30 - 48 × 5', '(50 - 2) × 25'],
    correctAnswer: '48 × 100 ÷ 4',
    explanation: '48×25 = 48×100÷4 = 4800÷4 = 1200, which is simpler than other methods.',
    wrongAnswerExplanations: {
      '50 × 24': 'This introduces two approximations and requires more calculations.',
      '48 × 30 - 48 × 5': 'This requires two multiplications and a subtraction.',
      '(50 - 2) × 25': 'This requires distribution and then multiplication.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch17_t3_qe9',
    type: 'mcq',
    question: 'Using the Vedic squaring method for numbers ending in 5, what is 35²?',
    options: ['1225', '1025', '1325', '925'],
    correctAnswer: '1225',
    explanation: 'For 35²: Multiply 3×4=12, append 25. Result: 1225.',
    wrongAnswerExplanations: {
      '1025': 'The calculation is incorrect. Using the method, 35²=1225.',
      '1325': 'The calculation is incorrect. Using the method, 35²=1225.',
      '925': 'The calculation is incorrect. Using the method, 35²=1225.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch17_t3_qe10',
    type: 'mcq',
    question: 'What is the quickest way to find 15% of 120?',
    options: ['10% + 5%', '20% - 5%', '30% ÷ 2', '50% ÷ 3 - 5%'],
    correctAnswer: '10% + 5%',
    explanation: '10% of 120 is 12, 5% is 6, so 15% = 12+6=18.',
    wrongAnswerExplanations: {
      '20% - 5%': 'This requires finding 20% and 5% separately, then subtracting.',
      '30% ÷ 2': 'This is finding 15% via a more complex route.',
      '50% ÷ 3 - 5%': 'This involves unnecessary calculations.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch17_t3_qe11',
    type: 'mcq',
    question: 'Using the divisibility test for 4, is 1236 divisible by 4?',
    options: ['Yes', 'No', 'Cannot determine', 'Need more information'],
    correctAnswer: 'Yes',
    explanation: 'Last two digits are 36, and 36 is divisible by 4, so 1236 is divisible by 4.',
    wrongAnswerExplanations: {
      'No': 'The calculation is incorrect. The last two digits 36 are divisible by 4.',
      'Cannot determine': 'We have sufficient information to determine divisibility by 4.',
      'Need more information': 'The given number is sufficient to check divisibility by 4.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch17_t3_qe12',
    type: 'mcq',
    question: 'What is 29² using the formula (a-b)²?',
    options: ['841', '821', '851', '861'],
    correctAnswer: '841',
    explanation: '29² = (30-1)² = 900-60+1 = 841',
    wrongAnswerExplanations: {
      '821': 'The calculation is incorrect. Using (30-1)², 29²=841.',
      '851': 'The calculation is incorrect. Using (30-1)², 29²=841.',
      '861': 'The calculation is incorrect. Using (30-1)², 29²=841.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch17_t3_qe13',
    type: 'mcq',
    question: 'Using the distributive property, what is 7 × 98?',
    options: ['686', '696', '676', '666'],
    correctAnswer: '686',
    explanation: '7×98 = 7×(100-2) = 700-14 = 686',
    wrongAnswerExplanations: {
      '696': 'The calculation is incorrect. 7×98=686.',
      '676': 'The calculation is incorrect. 7×98=686.',
      '666': 'The calculation is incorrect. 7×98=686.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch17_t3_qe14',
    type: 'mcq',
    question: 'For a two-digit number ending in 9, what\'s the quickest method to square it?',
    options: ['Add 1 to the number, multiply by units digit, append the square of units digit', 'Multiply by itself digitwise',  
    'Add 10 to the number, multiply by original number', 'Use (a+b)(a-b) formula'],
    correctAnswer: 'Add 1 to the number, multiply by units digit, append the square of units digit',
    explanation: 'For numbers ending in 9 (like 39): 40×3=120, append 9²=81. Result: 12081.',
    wrongAnswerExplanations: {
      'Multiply by itself digitwise': 'This is standard multiplication, not a shortcut.',
      'Add 10 to the number, multiply by original number': 'This is not a valid shortcut formula.',
      'Use (a+b)(a-b) formula': 'This formula is for difference of squares, not squaring.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch17_t3_qe15',
    type: 'mcq',
    question: 'Which of these is the result of 997 × 997 using the difference of squares formula?',
    options: ['994,009', '993,009', '995,009', '999,009'],
    correctAnswer: '994,009',
    explanation: '997² = (1000-3)² = 1000² - 2(1000)(3) + 3² = 1,000,000 - 6,000 + 9 = 994,009',
    wrongAnswerExplanations: {
      '993,009': 'The calculation is incorrect. Using the formula, 997²=994,009.',
      '995,009': 'The calculation is incorrect. Using the formula, 997²=994,009.',
      '999,009': 'The calculation is incorrect. Using the formula, 997²=994,009.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch17_t3_qe16',
    type: 'mcq',
    question: 'What is the most efficient way to calculate 85 × 84?',
    options: ['85 × 84 = 85²-85', '85 × 84 = (80+5)(80+4)', '85 × 84 = 80 × 85 + 4 × 85', '85 × 84 = 90 × 80 - 10'],
    correctAnswer: '85 × 84 = 85²-85',
    explanation: '85×84 = 85(85-1) = 85² - 85 = 7,225 - 85 = 7,140',
    wrongAnswerExplanations: {
      '85 × 84 = (80+5)(80+4)': 'This requires FOIL method with multiple calculations.',
      '85 × 84 = 80 × 85 + 4 × 85': 'This distributive approach requires more steps.',
      '85 × 84 = 90 × 80 - 10': 'This is incorrect and doesn\'t equal 85×84.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch17_t3_qe17',
    type: 'mcq',
    question: 'What is 87 + 98 + 113 when calculated using mental math?',
    options: ['298', '288', '300', '296'],
    correctAnswer: '298',
    explanation: 'Group 87+113=200, then add 98 to get 298.',
    wrongAnswerExplanations: {
      '288': 'The calculation is incorrect. The sum is 298.',
      '300': 'The calculation is incorrect. The sum is 298.',
      '296': 'The calculation is incorrect. The sum is 298.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch17_t3_qe18',
    type: 'mcq',
    question: 'What is the last digit of 6^245?',
    options: ['6', '4', '0', '8'],
    correctAnswer: '6',
    explanation: 'Powers of 6 cycle through last digits: 6, 6, 6, 6... The last digit is always 6.',
    wrongAnswerExplanations: {
      '4': 'The last digit of any power of 6 is 6.',
      '0': 'The last digit of any power of 6 is 6.',
      '8': 'The last digit of any power of 6 is 6.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch17_t3_qe19',
    type: 'mcq',
    question: 'Using the complement method, what is 1000 - 387?',
    options: ['613', '603', '713', '513'],
    correctAnswer: '613',
    explanation: 'Complement of 387 with respect to 1000: 999-387=612, then add 1: 613.',
    wrongAnswerExplanations: {
      '603': 'The calculation is incorrect. The correct answer is 613.',
      '713': 'The calculation is incorrect. The correct answer is 613.',
      '513': 'The calculation is incorrect. The correct answer is 613.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch17_t3_qe20',
    type: 'mcq',
    question: 'What is 17 × 17 using the squaring formula (a + b)²?',
    options: ['289', '299', '279', '269'],
    correctAnswer: '289',
    explanation: '17² = (10+7)² = 10² + 2(10)(7) + 7² = 100 + 140 + 49 = 289',
    wrongAnswerExplanations: {
      '299': 'The calculation is incorrect. Using the formula, 17²=289.',
      '279': 'The calculation is incorrect. Using the formula, 17²=289.',
      '269': 'The calculation is incorrect. Using the formula, 17²=289.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  }
];
