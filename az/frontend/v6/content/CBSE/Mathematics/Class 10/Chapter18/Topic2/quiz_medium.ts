import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch18_t2_qm1',
    type: 'mcq',
    question: 'Which mental math strategy would be most effective for calculating 613 - 287?',
    options: [
      'Add 13 to both numbers: 626 - 300 = 326',
      'Subtract 287 from 600, then add 13',
      'Convert to 613 + (-287)',
      'Use complementary addition: 287 + ? = 613'
    ],
    correctAnswer: 'Add 13 to both numbers: 626 - 300 = 326',
    explanation: 'Adding 13 to both maintains the difference but creates easier numbers (626-300=326).',
    wrongAnswerExplanations: {
      'Subtract 287 from 600, then add 13': 'This works but adds an extra step of calculation.',
      'Convert to 613 + (-287)': 'This doesn\'t simplify the calculation.',
      'Use complementary addition: 287 + ? = 613': 'Finding the complement is often harder than direct subtraction.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60,
  },
  {
    id: 'cl10_ch18_t2_qm2',
    type: 'mcq',
    question: 'To mentally calculate 37 × 11, which approach is most efficient?',
    options: [
      'For two-digit numbers: put sum of digits between the digits (3(3+7)7 = 407)',
      '(37 × 10) + 37',
      '(30 × 11) + (7 × 11)',
      '(40 - 3) × 11'
    ],
    correctAnswer: 'For two-digit numbers: put sum of digits between the digits (3(3+7)7 = 407)',
    explanation: 'For multiplying by 11, place sum of digits (3+7=10) between them: 3,10,7 → 407. Carry if needed.',
    wrongAnswerExplanations: {
      '(37 × 10) + 37': 'This works but requires more calculation steps.',
      '(30 × 11) + (7 × 11)': 'This distributive approach requires calculating two products.',
      '(40 - 3) × 11': 'This introduces more complex subtraction and multiplication.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60,
  },
  {
    id: 'cl10_ch18_t2_qm3',
    type: 'mcq',
    question: 'What mental math approach would help calculate 112 × 88 efficiently?',
    options: [
      'Use the difference of squares: (100 + 12)(100 - 12) = 100² - 12²',
      'Multiply 112 × 90, then subtract 112 × 2',
      '(110 + 2) × (90 - 2)',
      '112 × 80 + 112 × 8'
    ],
    correctAnswer: 'Use the difference of squares: (100 + 12)(100 - 12) = 100² - 12²',
    explanation: '(100+12)(100-12) = 100² - 12² = 10000 - 144 = 9856. Uses the identity (a+b)(a-b) = a²-b².',
    wrongAnswerExplanations: {
      'Multiply 112 × 90, then subtract 112 × 2': 'This requires more complex multiplication.',
      '(110 + 2) × (90 - 2)': 'This would require distributing all terms.',
      '112 × 80 + 112 × 8': 'This distributive approach requires multiple steps.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60,
  },
  {
    id: 'cl10_ch18_t2_qm4',
    type: 'mcq',
    question: 'To mentally calculate 64 × 25, which strategy is most efficient?',
    options: [
      '64 × 25 = 64 × 100 ÷ 4 = 1600',
      '(60 + 4) × 25 = 60 × 25 + 4 × 25',
      '(64 × 100) ÷ 4',
      '64 × (20 + 5)'
    ],
    correctAnswer: '64 × 25 = 64 × 100 ÷ 4 = 1600',
    explanation: 'Multiply by 100 (6400) then divide by 4 (1600). Uses the fact that 25 = 100 ÷ 4.',
    wrongAnswerExplanations: {
      '(60 + 4) × 25 = 60 × 25 + 4 × 25': 'This distributive approach requires more calculations.',
      '(64 × 100) ÷ 4': 'This is the same as the correct answer but written differently.',
      '64 × (20 + 5)': 'This requires calculating 64×20 and 64×5 separately.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60,
  },
  {
    id: 'cl10_ch18_t2_qm5',
    type: 'mcq',
    question: 'Which mental math property helps calculate 96 × 5 most efficiently?',
    options: [
      '(96 × 10) ÷ 2',
      '(90 × 5) + (6 × 5)',
      '(100 - 4) × 5',
      '96 + 96 + 96 + 96 + 96'
    ],
    correctAnswer: '(96 × 10) ÷ 2',
    explanation: '96 × 10 = 960, 960 ÷ 2 = 480. Multiplying by 5 equals multiplying by 10 and halving.',
    wrongAnswerExplanations: {
      '(90 × 5) + (6 × 5)': 'This distributive approach requires more calculations.',
      '(100 - 4) × 5': 'This requires calculating 100×5 first, then subtracting 4×5.',
      '96 + 96 + 96 + 96 + 96': 'Repeated addition is inefficient for mental math.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60,
  },
  {
    id: 'cl10_ch18_t2_qm6',
    type: 'mcq',
    question: 'What`s the most efficient method to mentally calculate 87½% of 640?',
    options: [
      '7/8 of 640',
      '75% of 640 + 12½% of 640',
      '100% of 640 - 12½% of 640',
      '(80% + 7% + 0.5%) of 640'
    ],
    correctAnswer: '7/8 of 640',
    explanation: '87½% = 7/8, and 640 ÷ 8 = 80, so 7/8 of 640 = 7 × 80 = 560.',
    wrongAnswerExplanations: {
      '75% of 640 + 12½% of 640': 'This requires calculating two percentages separately.',
      '100% of 640 - 12½% of 640': 'This requires calculating 12½% first and then subtracting.',
      '(80% + 7% + 0.5%) of 640': 'Breaking down the percentage this way adds complexity.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60,
  },
  {
    id: 'cl10_ch18_t2_qm7',
    type: 'mcq',
    question: 'To mentally calculate 47 × 99, which method is most efficient?',
    options: [
      '47 × 100 - 47',
      '(50 - 3) × 99',
      '47 × (100 - 1)',
      '(47 × 9) × 11'
    ],
    correctAnswer: '47 × 100 - 47',
    explanation: '47 × 100 = 4700, 4700 - 47 = 4653. Uses the pattern a(b-1) = ab-a.',
    wrongAnswerExplanations: {
      '(50 - 3) × 99': 'This requires distributing 99 across 50 and -3.',
      '47 × (100 - 1)': 'This is the same as the correct answer but less direct for calculation.',
      '(47 × 9) × 11': 'This is incorrect as 99 ≠ 9 × 11.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60,
  },
  {
    id: 'cl10_ch18_t2_qm8',
    type: 'mcq',
    question: 'Which technique is most efficient for mentally calculating 15² - 5²?',
    options: [
      '(15 + 5)(15 - 5)',
      '15² - 2(15 × 5) + 5²',
      '225 - 25',
      '(15 - 5)²'
    ],
    correctAnswer: '(15 + 5)(15 - 5)',
    explanation: '(15+5)(15-5) = 20×10 = 200. Uses the difference of squares formula: a²-b² = (a+b)(a-b).',
    wrongAnswerExplanations: {
      '15² - 2(15 × 5) + 5²': 'This is the formula for (a-b)², not a²-b².',
      '225 - 25': 'Direct calculation requires knowing square values.',
      '(15 - 5)²': 'This equals (15-5)², not 15²-5².'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60,
  },
  {
    id: 'cl10_ch18_t2_qm9',
    type: 'mcq',
    question: 'What mental math approach can help calculate 1 ÷ 16 as a decimal?',
    options: [
      'Halve repeatedly: 0.5, 0.25, 0.125, 0.0625',
      'Convert to the fraction 1/16 and use long division',
      'Use the pattern 1/16 = 0.0625',
      'Calculate 100 ÷ 16 ÷ 100'
    ],
    correctAnswer: 'Halve repeatedly: 0.5, 0.25, 0.125, 0.0625',
    explanation: 'Dividing by 16 means halving 4 times: 1→0.5→0.25→0.125→0.0625.',
    wrongAnswerExplanations: {
      'Convert to the fraction 1/16 and use long division': 'Long division is more complex than halving repeatedly.',
      'Use the pattern 1/16 = 0.0625': 'Memorization is useful but not a calculation strategy.',
      'Calculate 100 ÷ 16 ÷ 100': 'This approach is more complex than needed.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60,
  },
  {
    id: 'cl10_ch18_t2_qm10',
    type: 'mcq',
    question: 'To mentally calculate 68 × 9, which method is most effective?',
    options: [
      '(68 × 10) - 68',
      '(70 - 2) × 9',
      '(60 × 9) + (8 × 9)',
      '(68 × 3) × 3'
    ],
    correctAnswer: '(68 × 10) - 68',
    explanation: '68 × 10 = 680, 680 - 68 = 612. Using the pattern a×9 = a×10 - a.',
    wrongAnswerExplanations: {
      '(70 - 2) × 9': 'This requires distributing 9 across 70 and -2.',
      '(60 × 9) + (8 × 9)': 'This distributive approach requires more calculations.',
      '(68 × 3) × 3': 'This approach requires multiplying by 3 twice.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60,
  },
  {
    id: 'cl10_ch18_t2_qm11',
    type: 'mcq',
    question: 'Which mental math technique can help calculate 0.25 × 84?',
    options: [
      'Divide 84 by 4',
      '(0.25 × 80) + (0.25 × 4)',
      'Find 25% of 84',
      '(84 ÷ 100) × 25'
    ],
    correctAnswer: 'Divide 84 by 4',
    explanation: '0.25 = 1/4, so 0.25 × 84 = 84 ÷ 4 = 21. Converting decimal to fraction simplifies calculation.',
    wrongAnswerExplanations: {
      '(0.25 × 80) + (0.25 × 4)': 'This distributive approach requires more calculations.',
      'Find 25% of 84': 'This is the same approach but phrased differently.',
      '(84 ÷ 100) × 25': 'Working with decimals is typically harder than using equivalent fractions.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60,
  },
  {
    id: 'cl10_ch18_t2_qm12',
    type: 'mcq',
    question: 'To mentally calculate 13², which technique is most efficient?',
    options: [
      'Use (a+b)²: (10+3)² = 10² + 2(10×3) + 3²',
      'Use (a-b)(a+b): (13-3)(13+3) - 3²',
      'Square 13 directly',
      'Use (13×13) = (13×10) + (13×3)'
    ],
    correctAnswer: 'Use (a+b)²: (10+3)² = 10² + 2(10×3) + 3²',
    explanation: '10²=100, 2(10×3)=60, 3²=9, so 100+60+9=169. Uses (a+b)² = a²+2ab+b².',
    wrongAnswerExplanations: {
      'Use (a-b)(a+b): (13-3)(13+3) - 3²': 'This approach doesn\'t directly relate to calculating a².',
      'Square 13 directly': 'Direct calculation is typically harder than using algebraic identities.',
      'Use (13×13) = (13×10) + (13×3)': 'This distribution doesn\'t simplify the calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60,
  },
  {
    id: 'cl10_ch18_t2_qm13',
    type: 'mcq',
    question: 'For mentally calculating 16⅔% of 150, which approach is most efficient?',
    options: [
      '1/6 of 150',
      '(15% + 1⅔%) of 150',
      '20% of 150 - 3⅓% of 150',
      '(15 + 1⅔)% of 150'
    ],
    correctAnswer: '1/6 of 150',
    explanation: '16⅔% = 1/6, so 1/6 of 150 = 150 ÷ 6 = 25. Converting percentage to fraction simplifies calculation.',
    wrongAnswerExplanations: {
      '(15% + 1⅔%) of 150': 'Breaking down the percentage makes calculation more complex.',
      '20% of 150 - 3⅓% of 150': 'This approach requires multiple calculations.',
      '(15 + 1⅔)% of 150': 'This is just restating the original problem.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60,
  },
  {
    id: 'cl10_ch18_t2_qm14',
    type: 'mcq',
    question: 'The most efficient mental math strategy for calculating 4.75 × 4 is:',
    options: [
      '(4 × 4) + (0.75 × 4)',
      '(5 - 0.25) × 4',
      '4 × 5 - 4 × 0.25',
      '4 × 4.75'
    ],
    correctAnswer: '(5 - 0.25) × 4',
    explanation: '(5-0.25)×4 = 5×4 - 0.25×4 = 20 - 1 = 19. Replacing 4.75 with 5-0.25 simplifies calculation.',
    wrongAnswerExplanations: {
      '(4 × 4) + (0.75 × 4)': 'This requires calculating with decimals, which is harder mentally.',
      '4 × 5 - 4 × 0.25': 'This is equivalent to the correct answer but phrased differently.',
      '4 × 4.75': 'Direct multiplication with decimals is typically harder than strategic adjustment.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60,
  },
  {
    id: 'cl10_ch18_t2_qm15',
    type: 'mcq',
    question: 'Which mental math approach most efficiently calculates 37.5% of 840?',
    options: [
      '3/8 of 840',
      '(25% + 12.5%) of 840',
      '(30% + 7.5%) of 840',
      '50% of 840 - 12.5% of 840'
    ],
    correctAnswer: '3/8 of 840',
    explanation: '37.5% = 3/8, so 3/8 of 840 = 3 × (840 ÷ 8) = 3 × 105 = 315.',
    wrongAnswerExplanations: {
      '(25% + 12.5%) of 840': 'This requires calculating two percentages separately.',
      '(30% + 7.5%) of 840': 'This requires calculating two percentages separately.',
      '50% of 840 - 12.5% of 840': 'This requires calculating two percentages separately.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60,
  },
  {
    id: 'cl10_ch18_t2_qm16',
    type: 'mcq',
    question: 'What mental math strategy helps calculate 57 × 101 most efficiently?',
    options: [
      '57 × 100 + 57',
      '(60 - 3) × 101',
      '(50 + 7) × (100 + 1)',
      '(57 × 90) + (57 × 11)'
    ],
    correctAnswer: '57 × 100 + 57',
    explanation: '57 × 100 = 5700, 5700 + 57 = 5757. Uses the pattern a(b+1) = ab+a.',
    wrongAnswerExplanations: {
      '(60 - 3) × 101': 'This requires distributing 101 across 60 and -3.',
      '(50 + 7) × (100 + 1)': 'This requires distributing both expressions.',
      '(57 × 90) + (57 × 11)': 'This distributive approach requires more calculations.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60,
  },
  {
    id: 'cl10_ch18_t2_qm17',
    type: 'mcq',
    question: 'Which mental math technique is best for calculating 528 ÷ 11?',
    options: [
      'Check if the sum of digits is divisible by 11',
      'Divide 550 by 11, then subtract 2',
      '(500 + 28) ÷ 11',
      'Convert to fraction 528/11 and simplify'
    ],
    correctAnswer: 'Check if the sum of digits is divisible by 11',
    explanation: 'For divisibility by 11: 5-2+8=11, which is divisible by 11, so 528 is divisible by 11. 528÷11=48.',
    wrongAnswerExplanations: {
      'Divide 550 by 11, then subtract 2': 'This is incorrect as division doesn\'t work this way.',
      '(500 + 28) ÷ 11': 'Splitting the number doesn\'t simplify division by 11.',
      'Convert to fraction 528/11 and simplify': 'This doesn\'t simplify the calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60,
  },
  {
    id: 'cl10_ch18_t2_qm18',
    type: 'mcq',
    question: 'To mentally calculate 26², which approach is most efficient?',
    options: [
      'Use (a-b)(a+b)+b²: (26-6)(26+6)+6²',
      '(20+6)² = 20² + 2(20×6) + 6²',
      '26 × 26',
      '(25+1)² = 25² + 2(25) + 1'
    ],
    correctAnswer: 'Use (a-b)(a+b)+b²: (26-6)(26+6)+6²',
    explanation: '(26-6)(26+6)+6² = 20×32+36 = 640+36 = 676. Uses (a-b)(a+b)+b² = a².',
    wrongAnswerExplanations: {
      '(20+6)² = 20² + 2(20×6) + 6²': 'This works but requires more calculations: 400+240+36=676.',
      '26 × 26': 'Direct multiplication is typically harder than using algebraic identities.',
      '(25+1)² = 25² + 2(25) + 1': 'This works but requires knowing 25² = 625.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60,
  },
  {
    id: 'cl10_ch18_t2_qm19',
    type: 'mcq',
    question: 'Which mental math technique would help calculate 62.5% of 480?',
    options: [
      '5/8 of 480',
      '50% of 480 + 12.5% of 480',
      '(60% + 2.5%) of 480',
      'Half of 125% of 480'
    ],
    correctAnswer: '5/8 of 480',
    explanation: '62.5% = 5/8, so 5/8 of 480 = 5 × (480 ÷ 8) = 5 × 60 = 300.',
    wrongAnswerExplanations: {
      '50% of 480 + 12.5% of 480': 'This requires calculating two percentages separately.',
      '(60% + 2.5%) of 480': 'This requires calculating two percentages separately.',
      'Half of 125% of 480': 'This requires calculating 125% first, which is more complex.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60,
  },
  {
    id: 'cl10_ch18_t2_qm20',
    type: 'mcq',
    question: 'To mentally calculate √144, which approach is most efficient?',
    options: [
      'Recognize that 144 = 12² so √144 = 12',
      'Find factors: 144 = 2⁴ × 3² so √144 = 2² × 3 = 12',
      'Estimate between perfect squares: 121 < 144 < 169',
      'Divide by 12: 144 ÷ 12 = 12'
    ],
    correctAnswer: 'Recognize that 144 = 12² so √144 = 12',
    explanation: 'Memorizing perfect squares like 12² = 144 provides immediate recognition that √144 = 12.',
    wrongAnswerExplanations: {
      'Find factors: 144 = 2⁴ × 3² so √144 = 2² × 3 = 12': 'Prime factorization works but is more complex mentally.',
      'Estimate between perfect squares: 121 < 144 < 169': 'Estimation is useful when exact answer is unknown.',
      'Divide by 12: 144 ÷ 12 = 12': 'This circular reasoning assumes you already know the answer is 12.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60,
  },
];
