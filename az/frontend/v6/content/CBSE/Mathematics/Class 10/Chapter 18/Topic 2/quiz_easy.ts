import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch18_t2_qe1',
    type: 'mcq',
    question: 'Which mental math strategy helps in multiplying a number by 5?',
    options: [
      'Multiply by 10, then divide by 2',
      'Add the number 5 times',
      'Multiply by 4, then add the original number',
      'Double the number, then multiply by 2.5'
    ],
    correctAnswer: 'Multiply by 10, then divide by 2',
    explanation: 'Multiplying by 5 is equivalent to multiplying by 10 and dividing by 2, which is easier mentally.',
    wrongAnswerExplanations: {
      'Add the number 5 times': 'This is inefficient for larger numbers.',
      'Multiply by 4, then add the original number': 'This works but is more complex than using 10 and dividing by 2.',
      'Double the number, then multiply by 2.5': 'This introduces decimals, making mental calculation harder.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30,
  },
  {
    id: 'cl10_ch18_t2_qe2',
    type: 'mcq',
    question: 'To mentally calculate 98 + 47, which strategy would be most efficient?',
    options: [
      'Round 98 to 100, add 47, then subtract 2',
      'Add the tens, then add the ones',
      'Split 47 into 40 and 7, then add separately',
      'Convert to 90+8+40+7 and add'
    ],
    correctAnswer: 'Round 98 to 100, add 47, then subtract 2',
    explanation: 'Rounding 98 to 100 makes addition easier: 100+47=147, then 147-2=145.',
    wrongAnswerExplanations: {
      'Add the tens, then add the ones': 'This works but isn\'t as efficient when dealing with numbers near multiples of 10.',
      'Split 47 into 40 and 7, then add separately': 'This method requires more steps than rounding.',
      'Convert to 90+8+40+7 and add': 'This involves more decomposition steps than necessary.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30,
  },
  {
    id: 'cl10_ch18_t2_qe3',
    type: 'mcq',
    question: 'What is the best mental strategy to quickly calculate 15% of 80?',
    options: [
      '10% of 80 + 5% of 80',
      'Divide 80 by 100, then multiply by 15',
      'Find 1% of 80, then multiply by 15',
      '(80 × 3) ÷ 20'
    ],
    correctAnswer: '10% of 80 + 5% of 80',
    explanation: '10% of 80 is 8, and 5% is half of that (4), so 15% is 12.',
    wrongAnswerExplanations: {
      'Divide 80 by 100, then multiply by 15': 'This involves multiple steps with decimals.',
      'Find 1% of 80, then multiply by 15': 'This requires more calculations than needed.',
      '(80 × 3) ÷ 20': 'This is a valid approach but harder to compute mentally.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30,
  },
  {
    id: 'cl10_ch18_t2_qe4',
    type: 'mcq',
    question: 'Which mental math strategy is most efficient for calculating 25 × 24?',
    options: [
      '25 × 25 - 25',
      '(20 × 25) + (4 × 25)',
      '(25 × 20) + (25 × 4)',
      '25 × 20 × 1.2'
    ],
    correctAnswer: '25 × 25 - 25',
    explanation: '25 × 25 = 625, and 625 - 25 = 600, using the pattern (n)(n+1) = n²+n.',
    wrongAnswerExplanations: {
      '(20 × 25) + (4 × 25)': 'This works but requires more calculations.',
      '(25 × 20) + (25 × 4)': 'This is the distributive property but requires more steps.',
      '25 × 20 × 1.2': 'This introduces decimals, making mental calculation harder.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30,
  },
  {
    id: 'cl10_ch18_t2_qe5',
    type: 'mcq',
    question: 'To quickly square 45, which mental math strategy would be most efficient?',
    options: [
      '(45 + 5)(45 - 5) + 25',
      '40² + 2(40 × 5) + 5²',
      '(50 - 5)²',
      '45 × 45'
    ],
    correctAnswer: '(45 + 5)(45 - 5) + 25',
    explanation: '(50)(40) + 25 = 2000 + 25 = 2025. Based on (a+b)(a-b)+b² = a²',
    wrongAnswerExplanations: {
      '40² + 2(40 × 5) + 5²': 'This uses the algebraic expansion (a+b)² but requires more calculations.',
      '(50 - 5)²': 'This is just restating the problem.',
      '45 × 45': 'This is direct multiplication without any mental math shortcut.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30,
  },
  {
    id: 'cl10_ch18_t2_qe6',
    type: 'mcq',
    question: 'Which mental math technique would help calculate 7 × 99 quickly?',
    options: [
      '7 × 100 - 7',
      '7 × 90 + 7 × 9',
      '(7 × 9) × 11',
      '(7 × 10) × 9.9'
    ],
    correctAnswer: '7 × 100 - 7',
    explanation: '7 × 100 = 700, then 700 - 7 = 693. Using the pattern a(b-1) = ab-a.',
    wrongAnswerExplanations: {
      '7 × 90 + 7 × 9': 'This uses distributive property but requires more calculations.',
      '(7 × 9) × 11': 'This is incorrect as 99 ≠ 9 × 11.',
      '(7 × 10) × 9.9': 'This introduces decimals unnecessarily.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30,
  },
  {
    id: 'cl10_ch18_t2_qe7',
    type: 'mcq',
    question: 'The most efficient way to mentally calculate 125 × 8 is:',
    options: [
      '1000 ÷ 1',
      '(120 × 8) + (5 × 8)',
      '(125 × 10) - (125 × 2)',
      '(100 × 8) + (25 × 8)'
    ],
    correctAnswer: '1000 ÷ 1',
    explanation: '125 × 8 = 1000. This uses the pattern 125 × 8 = 1000.',
    wrongAnswerExplanations: {
      '(120 × 8) + (5 × 8)': 'This is the distributive property but requires more calculations.',
      '(125 × 10) - (125 × 2)': 'This is another approach but with more steps.',
      '(100 × 8) + (25 × 8)': 'This uses the distributive property but requires more steps.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30,
  },
  {
    id: 'cl10_ch18_t2_qe8',
    type: 'mcq',
    question: 'What mental math strategy helps divide any number by 5 quickly?',
    options: [
      'Multiply by 2, then divide by 10',
      'Divide by 10, then multiply by 2',
      'Find half, then divide by 2.5',
      'Subtract 1/5 from the original number'
    ],
    correctAnswer: 'Multiply by 2, then divide by 10',
    explanation: 'Dividing by 5 is equivalent to multiplying by 2 and dividing by 10, which is easy mentally.',
    wrongAnswerExplanations: {
      'Divide by 10, then multiply by 2': 'This gives the same result but is less intuitive.',
      'Find half, then divide by 2.5': 'This introduces more complex division.',
      'Subtract 1/5 from the original number': 'This does not give the correct result.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30,
  },
  {
    id: 'cl10_ch18_t2_qe9',
    type: 'mcq',
    question: 'To mentally calculate 35% of 200, which strategy is most efficient?',
    options: [
      '(30% + 5%) of 200',
      '50% of 200 - 15% of 200',
      '7 × 10',
      '0.35 × 200'
    ],
    correctAnswer: '(30% + 5%) of 200',
    explanation: '30% of 200 is 60, 5% of 200 is 10, so 35% is 70.',
    wrongAnswerExplanations: {
      '50% of 200 - 15% of 200': 'This works but involves more calculations.',
      '7 × 10': 'This is incorrect as 35% of 200 ≠ 7 × 10.',
      '0.35 × 200': 'This is direct calculation without a mental math shortcut.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30,
  },
  {
    id: 'cl10_ch18_t2_qe10',
    type: 'mcq',
    question: 'Which mental math shortcut helps calculate 25² quickly?',
    options: [
      '(20 + 5)² using (a+b)² = a² + 2ab + b²',
      'Memorize that 25² = 625',
      '20² + 5²',
      '25 × 25 using long multiplication'
    ],
    correctAnswer: 'Memorize that 25² = 625',
    explanation: 'For common squares like 25², memorizing the result (625) is most efficient.',
    wrongAnswerExplanations: {
      '(20 + 5)² using (a+b)² = a² + 2ab + b²': 'Works but requires more calculations: 400+200+25=625.',
      '20² + 5²': 'This is incorrect as (a+b)² ≠ a² + b².',
      '25 × 25 using long multiplication': 'This is not a mental math shortcut.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30,
  },
  {
    id: 'cl10_ch18_t2_qe11',
    type: 'mcq',
    question: 'What is the quickest mental method to multiply 37 × 5?',
    options: [
      'Half of 37 × 10',
      '(30 × 5) + (7 × 5)',
      '(40 - 3) × 5',
      '37 + 37 + 37 + 37 + 37'
    ],
    correctAnswer: 'Half of 37 × 10',
    explanation: '37 × 10 = 370, half of 370 is 185. Multiplying by 5 equals multiplying by 10 and dividing by 2.',
    wrongAnswerExplanations: {
      '(30 × 5) + (7 × 5)': 'This distributive approach works but requires more calculations.',
      '(40 - 3) × 5': 'This requires calculating 40 × 5 first, then subtracting 3 × 5.',
      '37 + 37 + 37 + 37 + 37': 'This repeated addition is inefficient for mental math.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30,
  },
  {
    id: 'cl10_ch18_t2_qe12',
    type: 'mcq',
    question: 'The most efficient mental math strategy for calculating 112 - 97 is:',
    options: [
      'Add 3 to both numbers: 115 - 100 = 15',
      'Subtract 97 from 112 directly',
      'Subtract 100, then add 3',
      'Convert to 100 + 12 - 90 - 7'
    ],
    correctAnswer: 'Add 3 to both numbers: 115 - 100 = 15',
    explanation: 'Adding 3 to both maintains the difference but creates easier numbers: 115-100=15.',
    wrongAnswerExplanations: {
      'Subtract 97 from 112 directly': 'Direct subtraction is more difficult mentally.',
      'Subtract 100, then add 3': 'This works but requires negative numbers in the intermediate step.',
      'Convert to 100 + 12 - 90 - 7': 'This decomposition requires more steps than necessary.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30,
  },
  {
    id: 'cl10_ch18_t2_qe13',
    type: 'mcq',
    question: 'To calculate 15 × 12 mentally, which strategy is most efficient?',
    options: [
      '15 × 10 + 15 × 2',
      '(10 + 5) × 12',
      '(12 × 10) + (12 × 5)',
      '(15 + 12) × (15 - 12)'
    ],
    correctAnswer: '15 × 10 + 15 × 2',
    explanation: '15 × 10 = 150, 15 × 2 = 30, so 15 × 12 = 180.',
    wrongAnswerExplanations: {
      '(10 + 5) × 12': 'This requires calculating 10 × 12 and 5 × 12 separately.',
      '(12 × 10) + (12 × 5)': 'This is equivalent but usually harder to calculate mentally.',
      '(15 + 12) × (15 - 12)': 'This applies the difference of squares formula incorrectly.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30,
  },
  {
    id: 'cl10_ch18_t2_qe14',
    type: 'mcq',
    question: 'Which mental math technique can help calculate 88 ÷ 11?',
    options: [
      'Using the division pattern of multiples of 11',
      'Dividing 88 by 10, then adding 1/10 of the result',
      'Converting to the fraction 88/11 and simplifying',
      'Using long division mentally'
    ],
    correctAnswer: 'Using the division pattern of multiples of 11',
    explanation: '88 is 8 × 11, so 88 ÷ 11 = 8. Recognizing that 88 is a multiple of 11 makes this immediate.',
    wrongAnswerExplanations: {
      'Dividing 88 by 10, then adding 1/10 of the result': 'This is an incorrect approach for division by 11.',
      'Converting to the fraction 88/11 and simplifying': 'This works but requires additional simplification steps.',
      'Using long division mentally': 'This is more complex than recognizing the pattern of multiples of 11.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30,
  },
  {
    id: 'cl10_ch18_t2_qe15',
    type: 'mcq',
    question: 'What is the most efficient way to calculate 9 × 27 mentally?',
    options: [
      '(10 × 27) - 27',
      '(9 × 30) - (9 × 3)',
      '(9 × 20) + (9 × 7)',
      '9 × 9 × 3'
    ],
    correctAnswer: '(10 × 27) - 27',
    explanation: '10 × 27 = 270, 270 - 27 = 243. Using the pattern 9a = 10a - a.',
    wrongAnswerExplanations: {
      '(9 × 30) - (9 × 3)': 'This distributive approach works but involves more calculations.',
      '(9 × 20) + (9 × 7)': 'This requires calculating two products separately.',
      '9 × 9 × 3': 'This factorization is not immediately helpful for mental calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30,
  },
  {
    id: 'cl10_ch18_t2_qe16',
    type: 'mcq',
    question: 'To mentally find 20% of 85, which strategy would be most efficient?',
    options: [
      'Find 10% of 85, then double it',
      'Divide 85 by 5',
      'Calculate 85 ÷ 100 × 20',
      'Find 25% of 85, then subtract 5% of 85'
    ],
    correctAnswer: 'Find 10% of 85, then double it',
    explanation: '10% of 85 is 8.5, doubling gives 17. This uses the fact that 20% = 2 × 10%.',
    wrongAnswerExplanations: {
      'Divide 85 by 5': 'This works since 20% = 1/5, but division by 5 is harder than finding 10% and doubling.',
      'Calculate 85 ÷ 100 × 20': 'This direct calculation is less efficient mentally.',
      'Find 25% of 85, then subtract 5% of 85': 'This requires more steps than necessary.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30,
  },
  {
    id: 'cl10_ch18_t2_qe17',
    type: 'mcq',
    question: 'The mental math strategy that best helps calculate 496 + 204 is:',
    options: [
      'Recognize that they sum to 700',
      'Regrouping: (490 + 200) + (6 + 4)',
      'Add hundreds, tens, and ones separately',
      'Round 496 to 500, add 204, then subtract 4'
    ],
    correctAnswer: 'Recognize that they sum to 700',
    explanation: '496 is 4 less than 500, and 204 is 4 more than 200, so they sum to 700.',
    wrongAnswerExplanations: {
      'Regrouping: (490 + 200) + (6 + 4)': 'This works but requires more steps than recognizing the pattern directly.',
      'Add hundreds, tens, and ones separately': 'This traditional approach requires more calculations.',
      'Round 496 to 500, add 204, then subtract 4': 'This compensation strategy works but isn\'t the simplest approach here.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30,
  },
  {
    id: 'cl10_ch18_t2_qe18',
    type: 'mcq',
    question: 'Which mental calculation strategy helps find 624 ÷ 8 efficiently?',
    options: [
      'Divide 624 by 2 three times',
      'Divide 600 by 8, then divide 24 by 8, and add the results',
      'First find 624 ÷ 4, then divide the result by 2',
      'Convert to the fraction 624/8 and simplify'
    ],
    correctAnswer: 'Divide 624 by 2 three times',
    explanation: '624 ÷ 2 = 312, 312 ÷ 2 = 156, 156 ÷ 2 = 78. Dividing by 8 equals dividing by 2 three times.',
    wrongAnswerExplanations: {
      'Divide 600 by 8, then divide 24 by 8, and add the results': 'This distributive approach works but requires dividing by 8 twice.',
      'First find 624 ÷ 4, then divide the result by 2': 'This works but dividing by 2 repeatedly is typically easier.',
      'Convert to the fraction 624/8 and simplify': 'This requires additional simplification steps.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30,
  },
  {
    id: 'cl10_ch18_t2_qe19',
    type: 'mcq',
    question: 'The best mental math strategy to calculate 12.5% of 120 is:',
    options: [
      'Calculate 10% and add half of that',
      'Divide by 8',
      'Find 25% and divide by 2',
      'Calculate (10% + 2% + 0.5%) of 120'
    ],
    correctAnswer: 'Calculate 10% and add half of that',
    explanation: '10% of 120 is 12, half of that is 6, so 12.5% is 18. This uses 12.5% = 10% + (10%/2).',
    wrongAnswerExplanations: {
      'Divide by 8': 'This works since 12.5% = 1/8, but dividing by 8 is harder than using percentages.',
      'Find 25% and divide by 2': 'This works but finding 25% first may be less intuitive.',
      'Calculate (10% + 2% + 0.5%) of 120': 'This breaks the percentage down too much, adding complexity.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30,
  },
  {
    id: 'cl10_ch18_t2_qe20',
    type: 'mcq',
    question: 'Which property helps mentally multiply 25 × 32?',
    options: [
      '25 × 32 = 25 × 4 × 8 = 100 × 8 = 800',
      '25 × 32 = (20 + 5)(30 + 2)',
      '25 × 32 = 25 × 30 + 25 × 2',
      '25 × 32 = (25 × 3) × 10 + 25 × 2'
    ],
    correctAnswer: '25 × 32 = 25 × 4 × 8 = 100 × 8 = 800',
    explanation: 'Rewrite 32 as 4 × 8, then 25 × 4 = 100, and 100 × 8 = 800. Uses factor grouping for easier calculation.',
    wrongAnswerExplanations: {
      '25 × 32 = (20 + 5)(30 + 2)': 'Using FOIL method requires calculating four products and adding them.',
      '25 × 32 = 25 × 30 + 25 × 2': 'This distributive approach requires two multiplications and addition.',
      '25 × 32 = (25 × 3) × 10 + 25 × 2': 'This breaks down 32 as 30+2 but requires more complex calculations.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30,
  },
];
