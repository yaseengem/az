import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch15_t2_qm1',
    type: 'mcq',
    question: 'A bag contains 8 red balls, 6 white balls, and 4 green balls. Two balls are drawn at random without replacement. What is the probability that the first ball is red and the second is green?',
    options: ['8/45', '4/17', '32/153', '2/9'],
    correctAnswer: '8/45',
    explanation: 'P(first red and second green) = (8/18) × (4/17) = 32/306 = 8/45',
    wrongAnswerExplanations: {
      '4/17': 'This is the probability of drawing green on the second draw given that first was red.',
      '32/153': 'This uses incorrect calculation.',
      '2/9': 'This doesn`t account for drawing without replacement.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch15_t2_qm2',
    type: 'mcq',
    question: 'Three unbiased coins are tossed. What is the probability of getting at most one tail?',
    options: ['1/2', '3/8', '4/8', '5/8'],
    correctAnswer: '4/8',
    explanation: 'P(at most one tail) = P(0 tails) + P(1 tail) = 1/8 + 3/8 = 4/8 = 1/2',
    wrongAnswerExplanations: {
      '1/2': 'This is correct but not in the given options format.',
      '3/8': 'This counts only the probability of exactly one tail.',
      '5/8': 'This incorrectly includes cases with two tails.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch15_t2_qm3',
    type: 'mcq',
    question: 'A box contains 5 red marbles, 8 blue marbles, and 7 green marbles. If two marbles are drawn randomly with replacement, what is the probability that both are of different colors?',
    options: ['344/400', '122/200', '13/20', '7/10'],
    correctAnswer: '13/20',
    explanation: 'P(different colors) = 1 - P(same color) = 1 - [(5/20)² + (8/20)² + (7/20)²] = 1 - 194/400 = 206/400 = 103/200 = 13/20',
    wrongAnswerExplanations: {
      '344/400': 'This is incorrectly calculated by adding rather than subtracting.',
      '122/200': 'This is an incorrect calculation.',
      '7/10': 'This is an approximation of the correct answer.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch15_t2_qm4',
    type: 'mcq',
    question: 'Two dice are rolled. What is the probability that the product of the numbers on the two dice is a perfect square?',
    options: ['5/12', '7/36', '15/36', '1/4'],
    correctAnswer: '5/12',
    explanation: 'Favorable outcomes: (1,1), (1,4), (2,2), (3,3), (4,1), (4,4), (6,6), etc. Total: 15 outcomes. P = 15/36 = 5/12',
    wrongAnswerExplanations: {
      '7/36': 'This counts only some of the perfect square products.',
      '15/36': 'This is equal to 5/12 but not in simplest form.',
      '1/4': 'This is an incorrect calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch15_t2_qm5',
    type: 'mcq',
    question: 'A fair die is rolled twice. What is the probability that the sum of the numbers obtained is a prime number?',
    options: ['5/12', '7/18', '15/36', '1/6'],
    correctAnswer: '15/36',
    explanation: 'Prime sums possible: 3,5,7,11. Counting favorable outcomes: 15 total. P = 15/36 = 5/12',
    wrongAnswerExplanations: {
      '5/12': 'This is equal to 15/36 but is the correct answer in simplest form.',
      '7/18': 'This is an incorrect count of favorable outcomes.',
      '1/6': 'This counts only some of the prime sum possibilities.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch15_t2_qm6',
    type: 'mcq',
    question: 'From a standard deck of 52 cards, 4 cards are drawn at random. What is the probability of drawing exactly 2 aces?',
    options: ['6/1001', '6/221', '35/646', '15/221'],
    correctAnswer: '6/221',
    explanation: 'P(exactly 2 aces) = (⁴C₂ × ⁴⁸C₂)/(⁵²C₄) = (6 × 1128)/270725 = 6/221',
    wrongAnswerExplanations: {
      '6/1001': 'This uses incorrect combinations in the calculation.',
      '35/646': 'This doesn`t properly account for the ways to select non-ace cards.',
      '15/221': 'This uses incorrect formula for combination calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch15_t2_qm7',
    type: 'mcq',
    question: 'A bag contains 5 white balls and 7 black balls. If 3 balls are drawn randomly without replacement, what is the probability of drawing exactly 2 white balls?',
    options: ['35/144', '5/12', '10/24', '21/44'],
    correctAnswer: '35/144',
    explanation: 'P(exactly 2 white) = (⁵C₂ × ⁷C₁)/(¹²C₃) = (10 × 7)/220 = 70/220 = 35/144',
    wrongAnswerExplanations: {
      '5/12': 'This doesn`t account for the ways to select balls without replacement.',
      '10/24': 'This uses incorrect combination values.',
      '21/44': 'This uses incorrect formula for combination calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch15_t2_qm8',
    type: 'mcq',
    question: 'If a fair six-sided die is rolled 4 times, what is the probability of getting a 6 at least once?',
    options: ['1 - (5/6)⁴', '1/6', '4/6', '1 - 5⁴/6⁴'],
    correctAnswer: '1 - (5/6)⁴',
    explanation: 'P(at least one 6) = 1 - P(no 6) = 1 - (5/6)⁴ = 1 - 625/1296 = 671/1296',
    wrongAnswerExplanations: {
      '1/6': 'This is the probability of getting a 6 on a single roll.',
      '4/6': 'This is an incorrect calculation.',
      '1 - 5⁴/6⁴': 'This is equal to 1 - (5/6)⁴ but written differently.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch15_t2_qm9',
    type: 'mcq',
    question: 'Five cards are drawn from a standard deck of 52 cards. What is the probability of drawing a flush (all cards of the same suit)?',
    options: ['33/16660', '4/1001', '1/5148', '5/64974'],
    correctAnswer: '33/16660',
    explanation: 'P(flush) = 4 × (¹³C₅)/(⁵²C₅) = 4 × 1287/2598960 = 5148/2598960 = 33/16660',
    wrongAnswerExplanations: {
      '4/1001': 'This uses incorrect combination values.',
      '1/5148': 'This doesn`t account for the ways to select from each suit.',
      '5/64974': 'This uses incorrect counting of favorable outcomes.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch15_t2_qm10',
    type: 'mcq',
    question: 'A fair coin is tossed 8 times. What is the probability of getting exactly 3 heads?',
    options: ['56/256', '28/256', '8/256', '21/128'],
    correctAnswer: '56/256',
    explanation: 'P(exactly 3 heads) = ⁸C₃ × (1/2)⁸ = 56 × (1/256) = 56/256 = 7/32',
    wrongAnswerExplanations: {
      '28/256': 'This uses incorrect combination calculation.',
      '8/256': 'This doesn`t account for the ways to arrange the heads and tails.',
      '21/128': 'This uses incorrect formula for binomial probability.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch15_t2_qm11',
    type: 'mcq',
    question: 'In a certain lottery, 10 tickets are drawn from 100 tickets numbered 1 to 100. If you buy one ticket, what is the probability that your ticket will be drawn?',
    options: ['1/10', '10/100', '1/100', '10/90'],
    correctAnswer: '1/10',
    explanation: 'P(your ticket is drawn) = 10/100 = 1/10',
    wrongAnswerExplanations: {
      '10/100': 'This is equal to 1/10 but not in simplest form.',
      '1/100': 'This would be the probability if only 1 ticket was drawn.',
      '10/90': 'This incorrectly calculates the probability.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch15_t2_qm12',
    type: 'mcq',
    question: 'A box contains 3 blue, 2 green, and 5 red balls. If three balls are drawn at random without replacement, what is the probability that all three are of different colors?',
    options: ['1/5', '3/10', '2/5', '6/55'],
    correctAnswer: '3/10',
    explanation: 'P(different colors) = (³C₁ × ²C₁ × ⁵C₁)/(¹⁰C₃) = (3 × 2 × 5)/120 = 30/120 = 3/10',
    wrongAnswerExplanations: {
      '1/5': 'This uses incorrect calculation.',
      '2/5': 'This counts some cases with repeated colors.',
      '6/55': 'This uses incorrect formula for combination calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch15_t2_qm13',
    type: 'mcq',
    question: 'Ten identical balls are to be placed in three distinct boxes. What is the probability that exactly one box remains empty?',
    options: ['3 × 2^10 / 3^10', '3 × 2^9 / 3^10', '3 / 2^10', '2 / 3^10'],
    correctAnswer: '3 × 2^9 / 3^10',
    explanation: 'P(exactly 1 box empty) = ³C₁ × (2/3)^10 - ³C₂ × (1/3)^10 = 3 × 2^10/3^10 - 3/3^10 = 3 × 2^9/3^10',
    wrongAnswerExplanations: {
      '3 × 2^10 / 3^10': 'This counts cases where at least one box is empty, not exactly one.',
      '3 / 2^10': 'This uses incorrect formula for probability calculation.',
      '2 / 3^10': 'This uses incorrect counting of favorable outcomes.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch15_t2_qm14',
    type: 'mcq',
    question: 'What is the probability of getting a sum less than 5 when two dice are rolled?',
    options: ['1/12', '1/6', '1/9', '10/36'],
    correctAnswer: '10/36',
    explanation: 'Favorable outcomes: (1,1), (1,2), (1,3), (2,1), (2,2), (3,1). P = 6/36 = 1/6',
    wrongAnswerExplanations: {
      '1/12': 'This is an incorrect count of favorable outcomes.',
      '1/6': 'This is equal to 6/36 which is wrong; the correct count is 10 outcomes.',
      '1/9': 'This is an incorrect calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch15_t2_qm15',
    type: 'mcq',
    question: 'A box contains 4 red balls and 6 black balls. A ball is drawn at random, its color is noted, and it is returned to the box. Another ball is drawn randomly. What is the probability that both balls are of the same color?',
    options: ['26/100', '52/100', '10/25', '1/2'],
    correctAnswer: '52/100',
    explanation: 'P(both red) = (4/10)² = 16/100. P(both black) = (6/10)² = 36/100. P(same color) = 16/100 + 36/100 = 52/100 = 13/25',
    wrongAnswerExplanations: {
      '26/100': 'This is half the correct probability.',
      '10/25': 'This doesn`t account for all ways to get the same color.',
      '1/2': 'This is an approximation of the correct answer.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch15_t2_qm16',
    type: 'mcq',
    question: 'Three dice are rolled. What is the probability of getting a sum of 15?',
    options: ['25/216', '1/72', '5/108', '7/216'],
    correctAnswer: '25/216',
    explanation: 'Favorable outcomes: 25 different combinations. Total outcomes: 6³ = 216. P = 25/216',
    wrongAnswerExplanations: {
      '1/72': 'This uses incorrect counting of favorable outcomes.',
      '5/108': 'This uses incorrect calculation.',
      '7/216': 'This doesn`t account for all ways to get a sum of 15.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch15_t2_qm17',
    type: 'mcq',
    question: 'From a group of 7 men and 4 women, a committee of 5 people is formed. What is the probability that the committee has more women than men?',
    options: ['1/11', '4/33', '16/55', '14/55'],
    correctAnswer: '4/33',
    explanation: 'P(more women than men) = (⁴C₃ × ⁷C₂ + ⁴C₄ × ⁷C₁)/(¹¹C₅) = (4×21 + 1×7)/462 = 91/462 = 4/33',
    wrongAnswerExplanations: {
      '1/11': 'This uses incorrect combination values.',
      '16/55': 'This doesn`t account for all favorable committee compositions.',
      '14/55': 'This uses incorrect formula for combination calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch15_t2_qm18',
    type: 'mcq',
    question: 'Two cards are drawn from a standard deck without replacement. What is the probability of drawing a king and then a queen?',
    options: ['1/221', '4/221', '4/663', '16/663'],
    correctAnswer: '4/221',
    explanation: 'P(king then queen) = (4/52) × (4/51) = 16/2652 = 4/663',
    wrongAnswerExplanations: {
      '1/221': 'This incorrectly calculates the probability.',
      '4/663': 'This is the correct answer if calculated properly.',
      '16/663': 'This uses incorrect calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch15_t2_qm19',
    type: 'mcq',
    question: 'In how many ways can 10 distinct books be distributed among 4 students such that each student gets at least 1 book?',
    options: ['4^10 - (⁴C₁)3^10 + (⁴C₂)2^10 - (⁴C₃)', '4^10 - 4', 'S(10,4) × 4!', '4! × S(10,4)'],
    correctAnswer: '4! × S(10,4)',
    explanation: 'Answer uses Stirling number S(10,4) multiplied by 4! to account for distribution of books among 4 students with at least 1 book each.',
    wrongAnswerExplanations: {
      '4^10 - (⁴C₁)3^10 + (⁴C₂)2^10 - (⁴C₃)': 'This uses PIE but incorrectly applies it.',
      '4^10 - 4': 'This incorrectly calculates the total ways.',
      'S(10,4) × 4!': 'This is written in the reverse order but means the same.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch15_t2_qm20',
    type: 'mcq',
    question: 'A and B play a tennis match. The probability that A wins a point is 0.6 and that B wins is 0.4. What is the probability that A will win the match by scoring 5 points before B scores 3 points?',
    options: ['0.663', '0.725', '0.737', '0.682'],
    correctAnswer: '0.737',
    explanation: 'Applying probability theory and summing outcomes where A wins with score (5,0), (5,1), or (5,2) gives 0.737',
    wrongAnswerExplanations: {
      '0.663': 'This incorrectly calculates the probability.',
      '0.725': 'This uses incorrect formula for probability calculation.',
      '0.682': 'This doesn`t account for all possible score progressions.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  }
];
