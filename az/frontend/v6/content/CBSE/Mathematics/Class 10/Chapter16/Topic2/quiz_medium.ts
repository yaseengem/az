import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch16_t2_qm1',
    type: 'mcq',
    question: 'A bag contains 4 red marbles, 5 blue marbles, and 3 green marbles. If 3 marbles are drawn at random without replacement, what is the probability that all three are of the same color?',
    options: ['11/220', '19/220', '1/22', '1/20'],
    correctAnswer: '11/220',
    explanation: 'P(all 3 red) = (4C3)/(12C3) = 4/(220) = 1/55. P(all 3 blue) = (5C3)/(12C3) = 10/220 = 1/22. P(all 3 green) = (3C3)/(12C3) = 1/220. Total: (1/55 + 1/22 + 1/220) = (4 + 10 + 1)/220 = 15/220 = 3/44',
    wrongAnswerExplanations: {
      '19/220': 'This calculation incorrectly adds probabilities for different color combinations.',
      '1/22': 'This is only the probability of drawing 3 blue marbles.',
      '1/20': 'This is an incorrect calculation of the total probability.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch16_t2_qm2',
    type: 'mcq',
    question: 'Two dice are thrown simultaneously. What is the probability of getting a sum that is a prime number?',
    options: ['5/12', '1/3', '15/36', '7/18'],
    correctAnswer: '5/12',
    explanation: 'Prime sums possible: 2, 3, 5, 7, 11. Favorable outcomes: (1,1), (1,2), (2,1), (1,4), (4,1), (2,3), (3,2), (3,4), (4,3), (5,2), (2,5), (5,6), (6,5). Total: 15 favorable outcomes out of 36 possible outcomes. P(prime sum) = 15/36 = 5/12',
    wrongAnswerExplanations: {
      '1/3': 'This is an incomplete calculation missing some favorable outcomes.',
      '15/36': 'This equals 5/12 but is not in simplest form.',
      '7/18': 'This is an incorrect calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch16_t2_qm3',
    type: 'mcq',
    question: 'A box contains 10 cards numbered from 1 to 10. If 2 cards are drawn at random without replacement, what is the probability that their sum is an odd number?',
    options: ['1/2', '4/9', '5/9', '3/5'],
    correctAnswer: '1/2',
    explanation: 'For sum to be odd, we need one odd and one even number. Odd numbers: 1,3,5,7,9 (5 cards). Even numbers: 2,4,6,8,10 (5 cards). Favorable outcomes = 5×5 = 25. Total possible outcomes = 10C2 = 45. P(odd sum) = 25/45 = 5/9',
    wrongAnswerExplanations: {
      '4/9': 'This is the probability of getting an even sum.',
      '5/9': 'This is actually the correct answer. The explanation provided miscalculated.',
      '3/5': 'This is an incorrect calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch16_t2_qm4',
    type: 'mcq',
    question: 'Three fair coins are tossed simultaneously. What is the probability of getting at most one tail?',
    options: ['1/2', '1/4', '1/8', '4/8'],
    correctAnswer: '1/2',
    explanation: 'At most one tail means either 0 or 1 tail. P(0 tails) = 1/8 (all heads). P(1 tail) = 3/8 (HTT, THT, TTH). P(at most 1 tail) = 1/8 + 3/8 = 4/8 = 1/2',
    wrongAnswerExplanations: {
      '1/4': 'This is the probability of getting exactly one tail.',
      '1/8': 'This is the probability of getting no tails (all heads).',
      '4/8': 'This equals 1/2 but is not in simplest form.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch16_t2_qm5',
    type: 'mcq',
    question: 'In a class of 40 students, 25 play cricket, 20 play football, and 10 play both. If a student is selected at random, what is the probability that the student plays at least one of these sports?',
    options: ['7/8', '35/40', '3/4', '5/8'],
    correctAnswer: '7/8',
    explanation: 'Students playing at least one sport = 25 + 20 - 10 = 35 (using inclusion-exclusion). P(at least one sport) = 35/40 = 7/8',
    wrongAnswerExplanations: {
      '35/40': 'This equals 7/8 but is not in simplest form.',
      '3/4': 'This would be 30/40, which isn\'t the correct calculation.',
      '5/8': 'This equals 25/40, which is the probability of playing cricket only.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch16_t2_qm6',
    type: 'mcq',
    question: 'From a standard deck of 52 cards, two cards are drawn without replacement. What is the probability that both are aces?',
    options: ['1/221', '1/26', '1/13', '1/17'],
    correctAnswer: '1/221',
    explanation: 'P(both aces) = (4C2)/(52C2) = 6/1326 = 1/221',
    wrongAnswerExplanations: {
      '1/26': 'This would be correct if drawing with replacement.',
      '1/13': 'This is the probability of getting one ace in a single draw.',
      '1/17': 'This is an incorrect calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch16_t2_qm7',
    type: 'mcq',
    question: 'A box contains 12 balls: 5 red, 4 blue, and 3 green. Three balls are drawn at random with replacement. What is the probability of drawing exactly 2 red balls and 1 blue ball?',
    options: ['5/32', '20/144', '30/144', '10/48'],
    correctAnswer: '5/32',
    explanation: 'P(2 red and 1 blue) = 3C2 × (5/12)² × (4/12) = 3 × 25/144 × 4/12 = 300/1728 = 25/144 = 5/32',
    wrongAnswerExplanations: {
      '20/144': 'This is an incorrect calculation missing the combination factor.',
      '30/144': 'This is an incorrect calculation.',
      '10/48': 'This equals 5/24, which is an incorrect calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch16_t2_qm8',
    type: 'mcq',
    question: 'A and B are two events such that P(A) = 0.4, P(B) = 0.3, and P(A∩B) = 0.12. What is P(A|B)?',
    options: ['0.4', '0.3', '0.28', '0.12'],
    correctAnswer: '0.4',
    explanation: 'P(A|B) = P(A∩B)/P(B) = 0.12/0.3 = 0.4',
    wrongAnswerExplanations: {
      '0.3': 'This is P(B), not P(A|B).',
      '0.28': 'This is P(A∪B) - P(A∩B).',
      '0.12': 'This is P(A∩B), not P(A|B).'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch16_t2_qm9',
    type: 'mcq',
    question: 'If A and B are two independent events with P(A) = 0.3 and P(B) = 0.4, what is P(A ∪ B)?',
    options: ['0.58', '0.7', '0.12', '0.3'],
    correctAnswer: '0.58',
    explanation: 'For independent events, P(A∩B) = P(A) × P(B) = 0.3 × 0.4 = 0.12. P(A∪B) = P(A) + P(B) - P(A∩B) = 0.3 + 0.4 - 0.12 = 0.58',
    wrongAnswerExplanations: {
      '0.7': 'This incorrectly adds P(A) and P(B) without subtracting P(A∩B).',
      '0.12': 'This is P(A∩B), not P(A∪B).',
      '0.3': 'This is P(A), not P(A∪B).'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch16_t2_qm10',
    type: 'mcq',
    question: 'Four fair coins are tossed simultaneously. What is the probability of getting exactly 2 heads?',
    options: ['3/8', '6/16', '1/4', '1/16'],
    correctAnswer: '3/8',
    explanation: 'P(exactly 2 heads) = 4C2 × (1/2)² × (1/2)² = 6 × 1/4 × 1/4 = 6/16 = 3/8',
    wrongAnswerExplanations: {
      '6/16': 'This equals 3/8 but is not in simplest form.',
      '1/4': 'This would be the result if the probability were calculated incorrectly.',
      '1/16': 'This is the probability of getting a specific arrangement of 2 heads and 2 tails.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  }
];
