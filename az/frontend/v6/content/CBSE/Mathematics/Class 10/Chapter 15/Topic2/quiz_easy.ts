import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch15_t2_qe1',
    type: 'mcq',
    question: 'When a die is rolled, what is the probability of getting a number greater than 4?',
    options: ['1/3', '1/2', '1/6', '2/3'],
    correctAnswer: '1/3',
    explanation: 'Numbers greater than 4 are 5 and 6, so P(number > 4) = 2/6 = 1/3',
    wrongAnswerExplanations: {
      '1/2': 'This incorrectly assumes 3 favorable outcomes out of 6.',
      '1/6': 'This counts only one favorable outcome instead of two.',
      '2/3': 'This incorrectly counts 4 favorable outcomes out of 6.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch15_t2_qe2',
    type: 'mcq',
    question: 'A card is drawn at random from a standard deck of 52 cards. What is the probability of drawing a king?',
    options: ['1/13', '1/4', '1/26', '4/52'],
    correctAnswer: '1/13',
    explanation: 'There are 4 kings in a deck of 52 cards, so P(king) = 4/52 = 1/13',
    wrongAnswerExplanations: {
      '1/4': 'This is the probability of drawing a king if only face cards are considered.',
      '1/26': 'This incorrectly assumes there are only 2 kings in the deck.',
      '4/52': 'This is the same as 1/13 but not in simplest form.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch15_t2_qe3',
    type: 'mcq',
    question: 'When two coins are tossed together, what is the probability of getting exactly one head?',
    options: ['1/2', '1/4', '3/4', '0'],
    correctAnswer: '1/2',
    explanation: 'When two coins are tossed, the sample space is {HH, HT, TH, TT}. Exactly one head occurs in HT and TH. So P(exactly one head) = 2/4 = 1/2',
    wrongAnswerExplanations: {
      '1/4': 'This counts only one of the two favorable outcomes (HT or TH).',
      '3/4': 'This incorrectly counts HH as having exactly one head.',
      '0': 'This indicates no chance, which is incorrect as there are favorable outcomes.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch15_t2_qe4',
    type: 'mcq',
    question: 'A bag contains 5 red balls and 7 blue balls. If a ball is drawn at random, what is the probability of getting a red ball?',
    options: ['5/12', '7/12', '1/2', '1/3'],
    correctAnswer: '5/12',
    explanation: 'Total balls = 5 + 7 = 12. P(red ball) = 5/12',
    wrongAnswerExplanations: {
      '7/12': 'This is the probability of drawing a blue ball.',
      '1/2': 'This assumes equal number of red and blue balls.',
      '1/3': 'This is an incorrect calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch15_t2_qe5',
    type: 'mcq',
    question: 'If you roll a fair six-sided die, what is the probability of getting an odd number?',
    options: ['1/2', '1/3', '2/3', '1/6'],
    correctAnswer: '1/2',
    explanation: 'Odd numbers on a die are 1, 3, 5. P(odd number) = 3/6 = 1/2',
    wrongAnswerExplanations: {
      '1/3': 'This incorrectly counts only two odd numbers.',
      '2/3': 'This incorrectly counts four odd numbers.',
      '1/6': 'This counts only one odd number instead of three.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch15_t2_qe6',
    type: 'mcq',
    question: 'When a die is rolled, what is the probability of getting a number less than 3?',
    options: ['1/3', '2/6', '1/2', '1/6'],
    correctAnswer: '1/3',
    explanation: 'Numbers less than 3 are 1 and 2. P(number < 3) = 2/6 = 1/3',
    wrongAnswerExplanations: {
      '2/6': 'This is equal to 1/3 but not in simplest form.',
      '1/2': 'This incorrectly counts 3 favorable outcomes.',
      '1/6': 'This counts only one favorable outcome instead of two.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch15_t2_qe7',
    type: 'mcq',
    question: 'Two dice are rolled together. What is the probability of getting a sum of 7?',
    options: ['1/6', '5/36', '1/12', '7/36'],
    correctAnswer: '1/6',
    explanation: 'Favorable outcomes: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1). Total outcomes: 36. P(sum = 7) = 6/36 = 1/6',
    wrongAnswerExplanations: {
      '5/36': 'This incorrectly counts 5 favorable outcomes instead of 6.',
      '1/12': 'This uses incorrect calculation 3/36 = 1/12.',
      '7/36': 'This adds an extra favorable outcome that doesn`t exist.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch15_t2_qe8',
    type: 'mcq',
    question: 'In a class of 50 students, 30 like mathematics. If a student is selected at random, what is the probability that the student likes mathematics?',
    options: ['3/5', '2/5', '1/5', '4/5'],
    correctAnswer: '3/5',
    explanation: 'P(likes mathematics) = 30/50 = 3/5',
    wrongAnswerExplanations: {
      '2/5': 'This is the probability that the student doesn`t like mathematics.',
      '1/5': 'This is an incorrect calculation.',
      '4/5': 'This incorrectly assumes 40 students like mathematics.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch15_t2_qe9',
    type: 'mcq',
    question: 'A card is drawn from a deck of 52 cards. What is the probability of drawing a spade?',
    options: ['1/4', '1/13', '1/2', '13/52'],
    correctAnswer: '1/4',
    explanation: 'There are 13 spades in a deck of 52 cards. P(spade) = 13/52 = 1/4',
    wrongAnswerExplanations: {
      '1/13': 'This is the probability of drawing a specific rank, not a suit.',
      '1/2': 'This incorrectly assumes 26 spades in the deck.',
      '13/52': 'This is equal to 1/4 but not in simplest form.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch15_t2_qe10',
    type: 'mcq',
    question: 'Three coins are tossed simultaneously. What is the probability of getting at least one head?',
    options: ['7/8', '3/4', '1/2', '1/8'],
    correctAnswer: '7/8',
    explanation: 'P(at least one head) = 1 - P(no heads) = 1 - 1/8 = 7/8',
    wrongAnswerExplanations: {
      '3/4': 'This is the probability for two coins, not three.',
      '1/2': 'This is incorrect; it doesn`t account for multiple possible outcomes.',
      '1/8': 'This is the probability of getting no heads (all tails).'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch15_t2_qe11',
    type: 'mcq',
    question: 'A bag contains 3 red balls, 5 green balls, and 2 blue balls. If a ball is drawn at random, what is the probability of drawing a ball that is not blue?',
    options: ['4/5', '2/10', '3/10', '1/2'],
    correctAnswer: '4/5',
    explanation: 'P(not blue) = (3+5)/10 = 8/10 = 4/5',
    wrongAnswerExplanations: {
      '2/10': 'This is the probability of drawing a blue ball.',
      '3/10': 'This is the probability of drawing a red ball.',
      '1/2': 'This is an incorrect calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch15_t2_qe12',
    type: 'mcq',
    question: 'If you select a number randomly from the set {1, 2, 3, 4, 5, 6, 7, 8, 9}, what is the probability of selecting a prime number?',
    options: ['4/9', '5/9', '1/3', '2/9'],
    correctAnswer: '4/9',
    explanation: 'Prime numbers in the set are 2, 3, 5, 7. P(prime) = 4/9',
    wrongAnswerExplanations: {
      '5/9': 'This counts a non-prime number as prime.',
      '1/3': 'This incorrectly counts only 3 prime numbers.',
      '2/9': 'This incorrectly counts only 2 prime numbers.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch15_t2_qe13',
    type: 'mcq',
    question: 'A box contains 20 red balls and 10 white balls. Two balls are drawn at random. What is the probability of drawing 2 red balls if the first ball is replaced before drawing the second?',
    options: ['4/9', '2/3', '4/15', '2/5'],
    correctAnswer: '4/9',
    explanation: 'With replacement: P(2 red balls) = (20/30) × (20/30) = (2/3) × (2/3) = 4/9',
    wrongAnswerExplanations: {
      '2/3': 'This is the probability of drawing one red ball.',
      '4/15': 'This is calculated without replacement, which is not the case here.',
      '2/5': 'This is an incorrect calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch15_t2_qe14',
    type: 'mcq',
    question: 'If a fair coin is tossed 5 times, what is the probability of getting exactly 3 heads?',
    options: ['5/16', '10/32', '1/4', '3/8'],
    correctAnswer: '5/16',
    explanation: 'P(3 heads in 5 tosses) = ⁵C₃ × (1/2)³ × (1/2)² = 10 × (1/2)⁵ = 10/32 = 5/16',
    wrongAnswerExplanations: {
      '10/32': 'This is equal to 5/16 but not in simplest form.',
      '1/4': 'This uses incorrect combination calculation.',
      '3/8': 'This is the probability for a different scenario.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch15_t2_qe15',
    type: 'mcq',
    question: 'A letter is chosen at random from the word "PROBABILITY". What is the probability that the letter chosen is a vowel?',
    options: ['3/11', '4/11', '5/11', '2/11'],
    correctAnswer: '3/11',
    explanation: 'Vowels in "PROBABILITY" are O, A, I (3 letters). Total letters = 11. P(vowel) = 3/11',
    wrongAnswerExplanations: {
      '4/11': 'This incorrectly counts Y as a vowel in this context.',
      '5/11': 'This incorrectly counts additional letters as vowels.',
      '2/11': 'This incorrectly counts only 2 vowels.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch15_t2_qe16',
    type: 'mcq',
    question: 'Two dice are rolled. What is the probability that the sum of the numbers on the dice is even?',
    options: ['1/2', '1/3', '1/6', '2/3'],
    correctAnswer: '1/2',
    explanation: 'Sum is even when (even, even) or (odd, odd). P(even sum) = 18/36 = 1/2',
    wrongAnswerExplanations: {
      '1/3': 'This is an incorrect calculation.',
      '1/6': 'This is the probability of getting a specific sum like 7.',
      '2/3': 'This is an incorrect calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch15_t2_qe17',
    type: 'mcq',
    question: 'A bag contains 6 black and 4 white balls. Two balls are drawn at random without replacement. What is the probability that both balls are of the same color?',
    options: ['7/15', '2/5', '8/15', '1/3'],
    correctAnswer: '7/15',
    explanation: 'P(both black) = (6/10) × (5/9) = 30/90. P(both white) = (4/10) × (3/9) = 12/90. P(same color) = 42/90 = 7/15',
    wrongAnswerExplanations: {
      '2/5': 'This only accounts for both balls being black.',
      '8/15': 'This uses incorrect calculation.',
      '1/3': 'This is an incorrect calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch15_t2_qe18',
    type: 'mcq',
    question: 'From a standard deck of 52 cards, what is the probability of drawing either a king or a queen?',
    options: ['2/13', '8/52', '1/13', '8/26'],
    correctAnswer: '2/13',
    explanation: 'P(king or queen) = (4+4)/52 = 8/52 = 2/13',
    wrongAnswerExplanations: {
      '8/52': 'This is equal to 2/13 but not in simplest form.',
      '1/13': 'This counts either kings or queens, not both.',
      '8/26': 'This is incorrectly reduced from 8/52.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch15_t2_qe19',
    type: 'mcq',
    question: 'What is the probability of getting a sum of 9 when two dice are rolled together?',
    options: ['1/9', '4/36', '1/6', '1/4'],
    correctAnswer: '1/9',
    explanation: 'Favorable outcomes: (3,6), (4,5), (5,4), (6,3). P(sum = 9) = 4/36 = 1/9',
    wrongAnswerExplanations: {
      '4/36': 'This is equal to 1/9 but not in simplest form.',
      '1/6': 'This is the probability of getting a sum of 7.',
      '1/4': 'This is an incorrect calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch15_t2_qe20',
    type: 'mcq',
    question: 'A card is drawn from a standard deck of 52 cards. What is the probability of drawing a red face card?',
    options: ['3/26', '6/52', '1/13', '1/4'],
    correctAnswer: '3/26',
    explanation: 'Red face cards: K♥, Q♥, J♥, K♦, Q♦, J♦ (6 cards). P(red face card) = 6/52 = 3/26',
    wrongAnswerExplanations: {
      '6/52': 'This is equal to 3/26 but not in simplest form.',
      '1/13': 'This is the probability of drawing any face card regardless of color.',
      '1/4': 'This is the probability of drawing any red card.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  }
];
