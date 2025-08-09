import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch16_t2_qe1',
    type: 'mcq',
    question: 'Two dice are thrown simultaneously. What is the probability of getting a sum of 8?',
    options: ['5/36', '1/8', '1/9', '1/6'],
    correctAnswer: '5/36',
    explanation: 'Favorable outcomes for sum 8: (2,6), (3,5), (4,4), (5,3), (6,2). Total outcomes: 36. P(sum = 8) = 5/36',
    wrongAnswerExplanations: {
      '1/8': 'This is an incorrect calculation.',
      '1/9': 'This is the probability of getting a sum of 9.',
      '1/6': 'This is the probability of getting a sum of 7.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch16_t2_qe2',
    type: 'mcq',
    question: 'A card is drawn from a well-shuffled deck of playing cards. What is the probability of drawing a face card?',
    options: ['3/13', '1/4', '1/13', '12/52'],
    correctAnswer: '3/13',
    explanation: 'Face cards are Kings, Queens, and Jacks. There are 12 face cards in a deck of 52 cards. P(face card) = 12/52 = 3/13',
    wrongAnswerExplanations: {
      '1/4': 'This is the probability of drawing a card of a specific suit.',
      '1/13': 'This is the probability of drawing a specific rank.',
      '12/52': 'This equals 3/13 but is not in the simplest form.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch16_t2_qe3',
    type: 'mcq',
    question: 'What is the probability of getting exactly 2 heads when 4 coins are tossed simultaneously?',
    options: ['3/8', '1/4', '6/16', '1/2'],
    correctAnswer: '3/8',
    explanation: 'P(exactly 2 heads) = ⁴C₂ × (1/2)² × (1/2)² = 6 × (1/2)⁴ = 6/16 = 3/8',
    wrongAnswerExplanations: {
      '1/4': 'This uses incorrect combination calculation.',
      '6/16': 'This equals 3/8 but is not in simplest form.',
      '1/2': 'This is the probability of getting exactly one head when tossing two coins.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch16_t2_qe4',
    type: 'mcq',
    question: 'In a box, there are 10 white balls, 20 black balls, and 30 red balls. If one ball is selected at random, what is the probability it is not red?',
    options: ['1/2', '3/5', '2/5', '3/6'],
    correctAnswer: '1/2',
    explanation: 'Total balls = 10 + 20 + 30 = 60. Non-red balls = 10 + 20 = 30. P(not red) = 30/60 = 1/2',
    wrongAnswerExplanations: {
      '3/5': 'This is the probability of drawing a red ball.',
      '2/5': 'This uses incorrect calculation.',
      '3/6': 'This equals 1/2 but is not in simplest form.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch16_t2_qe5',
    type: 'mcq',
    question: 'What is the probability of getting a factor of 12 when a number is randomly selected from the set {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}?',
    options: ['2/5', '3/10', '1/2', '1/5'],
    correctAnswer: '2/5',
    explanation: 'Factors of 12 in the given set are 1, 2, 3, 4, 6. P(factor of 12) = 5/10 = 2/5',
    wrongAnswerExplanations: {
      '3/10': 'This misses some factors of 12 in the calculation.',
      '1/2': 'This is actually the correct answer in simplest form.',
      '1/5': 'This is an incorrect calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch16_t2_qe6',
    type: 'mcq',
    question: 'If a letter is randomly chosen from the English alphabet, what is the probability that it is a vowel?',
    options: ['5/26', '21/26', '1/5', '1/26'],
    correctAnswer: '5/26',
    explanation: 'There are 5 vowels (a, e, i, o, u) in the 26 letters of the English alphabet. P(vowel) = 5/26',
    wrongAnswerExplanations: {
      '21/26': 'This is the probability of selecting a consonant.',
      '1/5': 'This assumes there are 25 letters in the alphabet.',
      '1/26': 'This is the probability of selecting any specific letter.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch16_t2_qe7',
    type: 'mcq',
    question: 'A box contains 5 red marbles, 8 blue marbles, and 7 green marbles. If two marbles are drawn at random without replacement, what is the probability that both are red?',
    options: ['1/6', '5/19', '5/20', '2/19'],
    correctAnswer: '1/6',
    explanation: 'P(both red) = (5/20) × (4/19) = 20/380 = 1/19',
    wrongAnswerExplanations: {
      '5/19': 'This is an incorrect calculation.',
      '5/20': 'This is the probability of drawing a red marble in the first draw only.',
      '2/19': 'This is an incorrect calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch16_t2_qe8',
    type: 'mcq',
    question: 'If you roll a die twice, what is the probability that the second roll shows a larger number than the first roll?',
    options: ['5/12', '1/2', '1/3', '1/6'],
    correctAnswer: '5/12',
    explanation: 'There are 36 possible combinations. Number of favorable outcomes (second > first): 15. P(second > first) = 15/36 = 5/12',
    wrongAnswerExplanations: {
      '1/2': 'This incorrectly assumes equal probability for second roll being greater or less than first.',
      '1/3': 'This uses incorrect calculation.',
      '1/6': 'This is an incorrect calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch16_t2_qe9',
    type: 'trueFalse',
    question: 'The probability of an impossible event is 1.',
    options: ['True', 'False'],
    correctAnswer: 'False',
    explanation: 'The probability of an impossible event is 0, not 1. The probability of a certain event is 1.',
    wrongAnswerExplanations: {
      'True': 'This is incorrect. The probability of an impossible event is 0, while the probability of a certain event is 1.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch16_t2_qe10',
    type: 'mcq',
    question: 'From a well-shuffled deck of 52 cards, what is the probability of drawing a black king?',
    options: ['1/26', '2/52', '1/13', '1/4'],
    correctAnswer: '1/26',
    explanation: 'There are 2 black kings (clubs and spades) out of 52 cards. P(black king) = 2/52 = 1/26',
    wrongAnswerExplanations: {
      '2/52': 'This equals 1/26 but is not in simplest form.',
      '1/13': 'This is the probability of drawing any king.',
      '1/4': 'This is the probability of drawing any black card.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  }
];
