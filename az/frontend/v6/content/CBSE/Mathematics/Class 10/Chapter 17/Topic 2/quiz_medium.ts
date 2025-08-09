import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch17_t2_qm1',
    type: 'mcq',
    question: 'Which mental math strategy is most efficient for calculating 997 × 997?',
    options: ['(1000 - 3)² using algebra', '997 × 1000 - 997 × 3', '(997)² = 997 × 997', '1000² - 2(1000)(3) + 3²'],
    correctAnswer: '1000² - 2(1000)(3) + 3²',
    explanation: '997² = (1000 - 3)² = 1000² - 2(1000)(3) + 3² = 1,000,000 - 6,000 + 9 = 994,009',
    wrongAnswerExplanations: {
      '(1000 - 3)² using algebra': 'This is the correct approach but doesn\'t show the full calculation.',
      '997 × 1000 - 997 × 3': 'Makes calculation more complex than needed.',
      '(997)² = 997 × 997': 'This just restates the question without providing a strategy.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch17_t2_qm2',
    type: 'mcq',
    question: 'Which calculation can NOT be easily performed using the Vedic sutra "By one more than the previous one"?',
    options: ['13²', '999²', '111²', '95²'],
    correctAnswer: '95²',
    explanation: 'This sutra works best for numbers near powers of 10, like 999 (near 1000) or 111 (near 100). 95 doesn\'t fit this pattern.',
    wrongAnswerExplanations: {
      '13²': 'Can use "By one more than the previous one" as 13 × 14 = 182.',
      '999²': 'Can use "By one more than the previous one" as 999 × 1000 = 999000, minus 999 = 998001.',
      '111²': 'Can use "By one more than the previous one" as 111 × 112 = 12432.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch17_t2_qm3',
    type: 'mcq',
    question: 'To calculate 48 × 52 mentally, which is the most efficient approach?',
    options: ['(50 - 2) × (50 + 2)', '(48 × 50) + (48 × 2)', '(50 × 50) - (2 × 50) + (2 × 50) - (2 × 2)', '48 × 50 + 48 × 2'],
    correctAnswer: '(50 - 2) × (50 + 2)',
    explanation: '48 × 52 = (50 - 2)(50 + 2) = 50² - 2² = 2500 - 4 = 2496',
    wrongAnswerExplanations: {
      '(48 × 50) + (48 × 2)': 'Works but requires more calculations than difference of squares.',
      '(50 × 50) - (2 × 50) + (2 × 50) - (2 × 2)': 'Unnecessarily complex approach.',
      '48 × 50 + 48 × 2': 'Same as second option, just rewritten.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch17_t2_qm4',
    type: 'mcq',
    question: 'Using the Vedic sutra "Vertically and Crosswise," what is 92 × 98?',
    options: ['9,016', '8,816', '9,116', '8,916'],
    correctAnswer: '9,016',
    explanation: 'First: 9×9=81, Middle: (9×8)+(2×9)=72+18=90, Last: 2×8=16. Answer: 9016',
    wrongAnswerExplanations: {
      '8,816': 'Calculation error in the cross-multiplication step.',
      '9,116': 'Calculation error in the last step.',
      '8,916': 'Calculation error in the cross-multiplication step.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch17_t2_qm5',
    type: 'mcq',
    question: 'To divide 832 by 13 mentally, which approach is most efficient?',
    options: ['Convert to (832 ÷ 13) = (845 - 13) ÷ 13 = 65 - 1 = 64', '(800 ÷ 13) + (32 ÷ 13)', '(780 ÷ 13) + (52 ÷ 13)', 'Calculate 83.2 ÷ 1.3 and then multiply by 10'],
    correctAnswer: 'Convert to (832 ÷ 13) = (845 - 13) ÷ 13 = 65 - 1 = 64',
    explanation: 'Finding a nearby multiple of 13 (845 = 13 × 65) and adjusting is most efficient.',
    wrongAnswerExplanations: {
      '(800 ÷ 13) + (32 ÷ 13)': 'Dividing by 13 twice is more complex.',
      '(780 ÷ 13) + (52 ÷ 13)': 'Breaking into 780 and 52 doesn\'t simplify the calculation.',
      'Calculate 83.2 ÷ 1.3 and then multiply by 10': 'Decimal division is more complex than finding multiples.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch17_t2_qm6',
    type: 'mcq',
    question: 'What mental math technique is most efficient for calculating 999,999 ÷ 3?',
    options: ['1,000,000 ÷ 3 - 1/3', '333,333', '(1,000,000 - 1) ÷ 3', '999,999 = 3 × 333,333'],
    correctAnswer: '(1,000,000 - 1) ÷ 3',
    explanation: '999,999 ÷ 3 = (1,000,000 - 1) ÷ 3 = 1,000,000 ÷ 3 - 1 ÷ 3 = 333,333⅓ - ⅓ = 333,333',
    wrongAnswerExplanations: {
      '1,000,000 ÷ 3 - 1/3': 'Correct approach but not expressed clearly.',
      '333,333': 'This is the answer but not the technique.',
      '999,999 = 3 × 333,333': 'This verifies the answer but doesn\'t show how to calculate it.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch17_t2_qm7',
    type: 'mcq',
    question: 'To find the square of 15 mentally, which approach gives 225?',
    options: ['(10 + 5)² = 10² + 2(10)(5) + 5²', '(20 - 5)² = 20² - 2(20)(5) + 5²', '(10)(20) + 25', '10² + 5²'],
    correctAnswer: '(10 + 5)² = 10² + 2(10)(5) + 5²',
    explanation: '15² = (10 + 5)² = 10² + 2(10)(5) + 5² = 100 + 100 + 25 = 225',
    wrongAnswerExplanations: {
      '(20 - 5)² = 20² - 2(20)(5) + 5²': 'This calculates 15² as 400 - 200 + 25 = 225, also correct.',
      '(10)(20) + 25': 'This equals 200 + 25 = 225, but the logic is unclear.',
      '10² + 5²': 'This equals 100 + 25 = 125, which is incorrect.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch17_t2_qm8',
    type: 'mcq',
    question: 'Using complementary numbers, which is the most efficient way to calculate 57 + 86 mentally?',
    options: ['(57 + 3) + (86 - 3) = 60 + 83 = 143', '(57 + 13) + (86 - 13) = 70 + 73 = 143', '(57 - 7) + (86 + 7) = 50 + 93 = 143', 'None of these'],
    correctAnswer: '(57 + 3) + (86 - 3) = 60 + 83 = 143',
    explanation: 'Adding/subtracting 3 creates a round number 60, making addition easier.',
    wrongAnswerExplanations: {
      '(57 + 13) + (86 - 13) = 70 + 73 = 143': 'Works but 13 is less convenient than 3.',
      '(57 - 7) + (86 + 7) = 50 + 93 = 143': 'Works but involves larger adjustments.',
      'None of these': 'Several complementary approaches work; this isn\'t correct.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch17_t2_qm9',
    type: 'mcq',
    question: 'Which mental math shortcut is being used: 87 × 99 = 87 × 100 - 87 = 8700 - 87 = 8613?',
    options: ['Compensation', 'Distributive property', 'Factorization', 'Vedic mathematics'],
    correctAnswer: 'Compensation',
    explanation: 'Compensation involves adjusting one factor and then compensating with opposite adjustment to maintain equality.',
    wrongAnswerExplanations: {
      'Distributive property': 'This would be 87 × (90 + 9) = (87 × 90) + (87 × 9).',
      'Factorization': 'No factoring is being used in this calculation.',
      'Vedic mathematics': 'While some Vedic techniques use similar principles, this is standard compensation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch17_t2_qm10',
    type: 'mcq',
    question: 'What is the result of 625 × 16 using factorization and powers?',
    options: ['10,000', '10,500', '9,500', '9,000'],
    correctAnswer: '10,000',
    explanation: '625 × 16 = (5⁴) × (2⁴) = (5 × 2)⁴ = 10⁴ = 10,000',
    wrongAnswerExplanations: {
      '10,500': 'This is an incorrect calculation.',
      '9,500': 'This is an incorrect calculation.',
      '9,000': 'This is an incorrect calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch17_t2_qm11',
    type: 'mcq',
    question: 'Which calculation is fastest to perform mentally?',
    options: ['98 × 102', '87 × 93', '68 × 72', '51 × 49'],
    correctAnswer: '51 × 49',
    explanation: '51 × 49 = (50 + 1)(50 - 1) = 50² - 1² = 2500 - 1 = 2499',
    wrongAnswerExplanations: {
      '98 × 102': 'Uses difference of squares: (100 - 2)(100 + 2) = 10000 - 4 = 9996, but larger numbers.',
      '87 × 93': 'Uses difference of squares but with less convenient numbers than 51 × 49.',
      '68 × 72': 'Uses difference of squares but with less convenient numbers than 51 × 49.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch17_t2_qm12',
    type: 'mcq',
    question: 'A train travels at 72 km/h. How many meters does it cover in 50 seconds using mental math?',
    options: ['1000 m', '1200 m', '600 m', '900 m'],
    correctAnswer: '1000 m',
    explanation: '72 km/h = 72000 m/3600 s = 20 m/s, so in 50 s: 20 × 50 = 1000 m',
    wrongAnswerExplanations: {
      '1200 m': 'This would be 72 km/h for 60 seconds.',
      '600 m': 'This would be 72 km/h for 30 seconds.',
      '900 m': 'This is an incorrect calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch17_t2_qm13',
    type: 'mcq',
    question: 'Simplify √288 mentally using factor trees.',
    options: ['12√2', '4√18', '6√8', '9√3.56'],
    correctAnswer: '12√2',
    explanation: '√288 = √(144 × 2) = √144 × √2 = 12√2',
    wrongAnswerExplanations: {
      '4√18': 'Incorrect factorization.',
      '6√8': 'Incorrect factorization.',
      '9√3.56': 'Incorrect approach and calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch17_t2_qm14',
    type: 'mcq',
    question: 'If 37 × 43 = 1591, what is 37 × 44 without performing the full multiplication?',
    options: ['1628', '1635', '1554', '1665'],
    correctAnswer: '1628',
    explanation: '37 × 44 = 37 × (43 + 1) = 37 × 43 + 37 × 1 = 1591 + 37 = 1628',
    wrongAnswerExplanations: {
      '1635': 'This would add 44 to 1591.',
      '1554': 'This is an incorrect calculation.',
      '1665': 'This would be adding 37 × 2 (74) to 1591.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch17_t2_qm15',
    type: 'mcq',
    question: 'To find 37.5% of 240 mentally, which approach is most efficient?',
    options: ['Find 25% + 12.5%', 'Find 50% - 12.5%', 'Find 3/8 of 240', 'All are equally efficient'],
    correctAnswer: 'Find 3/8 of 240',
    explanation: '37.5% = 3/8, so 3/8 of 240 = 3 × (240 ÷ 8) = 3 × 30 = 90',
    wrongAnswerExplanations: {
      'Find 25% + 12.5%': 'Works but requires more steps: 60 + 30 = 90.',
      'Find 50% - 12.5%': 'Works but requires more steps: 120 - 30 = 90.',
      'All are equally efficient': 'The fraction approach is most direct.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch17_t2_qm16',
    type: 'mcq',
    question: 'Which number would be easiest to divide by mentally using special number properties?',
    options: ['1001', '1024', '256', '125'],
    correctAnswer: '1001',
    explanation: '1001 = 7 × 11 × 13, which allows division using cyclic patterns in these prime factors.',
    wrongAnswerExplanations: {
      '1024': 'While 1024 = 2¹⁰, dividing by it isn\'t as special as 1001\'s properties.',
      '256': '256 = 2⁸ is easy to multiply by (shifting binary) but not divide by.',
      '125': '125 = 5³ has some special properties but not as distinctive as 1001.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch17_t2_qm17',
    type: 'mcq',
    question: 'When using Vedic mathematics, which sutra helps verify divisibility by 9?',
    options: ['Digit sum', 'Vertically and Crosswise', 'All from 9 and the last from 10', 'By addition and by subtraction'],
    correctAnswer: 'Digit sum',
    explanation: 'If the sum of digits is divisible by 9, the original number is divisible by 9.',
    wrongAnswerExplanations: {
      'Vertically and Crosswise': 'This relates to multiplication, not divisibility tests.',
      'All from 9 and the last from 10': 'This relates to subtraction from powers of 10.',
      'By addition and by subtraction': 'This relates to solving equations, not divisibility.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch17_t2_qm18',
    type: 'mcq',
    question: 'What is the mental math shortcut for squaring numbers ending in 5?',
    options: ['Take the tens digit, multiply by its successor, append 25', 'Double the number and multiply by half', 'Multiply the tens digit by itself and append 25', 'There is no shortcut'],
    correctAnswer: 'Take the tens digit, multiply by its successor, append 25',
    explanation: '85² = 8 × 9 = 72, append 25 = 7225. Works for any number ending in 5.',
    wrongAnswerExplanations: {
      'Double the number and multiply by half': 'This doesn\'t yield the square.',
      'Multiply the tens digit by itself and append 25': 'This yields incorrect results.',
      'There is no shortcut': 'Several mental math shortcuts exist for squaring numbers ending in 5.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch17_t2_qm19',
    type: 'mcq',
    question: 'To mentally determine if 4851 is divisible by 11, you would:',
    options: ['Check if the alternating sum of digits is divisible by 11', 'Check if the sum of digits is divisible by 11', 'Check if the last two digits form a number divisible by 11', 'Check if 4851 ÷ 11 has no remainder'],
    correctAnswer: 'Check if the alternating sum of digits is divisible by 11',
    explanation: '4 - 8 + 5 - 1 = 0, which is divisible by 11, so 4851 is divisible by 11.',
    wrongAnswerExplanations: {
      'Check if the sum of digits is divisible by 11': 'This tests divisibility by 9, not 11.',
      'Check if the last two digits form a number divisible by 11': 'This tests divisibility by 4, not 11.',
      'Check if 4851 ÷ 11 has no remainder': 'This is the definition of divisibility, not a mental math technique.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch17_t2_qm20',
    type: 'mcq',
    question: 'What is 23² + 27² using the formula a² + b² = (a - b)² + 2ab?',
    options: ['1,258', '1,268', '1,228', '1,238'],
    correctAnswer: '1,258',
    explanation: '23² + 27² = (23 - 27)² + 2(23)(27) = (-4)² + 2(23)(27) = 16 + 1242 = 1258',
    wrongAnswerExplanations: {
      '1,268': 'This is an incorrect calculation.',
      '1,228': 'This is an incorrect calculation.',
      '1,238': 'This is an incorrect calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  }
];
