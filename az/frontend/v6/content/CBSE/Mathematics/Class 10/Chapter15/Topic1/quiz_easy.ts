import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch15_t1_qe1',
    type: 'mcq',
    question: 'When a coin is tossed 200 times and a head is obtained 120 times, the experimental probability of getting a head is:',
    options: ['0.5', '0.6', '0.4', '0.3'],
    correctAnswer: '0.6',
    explanation: 'Experimental probability = Number of times event occurred / Total number of trials = 120/200 = 0.6',
    wrongAnswerExplanations: {
      '0.5': 'This is the theoretical probability of getting a head, not the experimental result.',
      '0.4': 'This would be the experimental probability of getting a tail (80/200).',
      '0.3': 'This is an incorrect calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch15_t1_qe2',
    type: 'mcq',
    question: 'If a die is rolled 50 times and a "6" appears 12 times, what is the experimental probability of getting a "6"?',
    options: ['1/6', '6/25', '12/50', '1/4'],
    correctAnswer: '12/50',
    explanation: 'Experimental probability = Number of times 6 appeared / Total number of rolls = 12/50 = 6/25',
    wrongAnswerExplanations: {
      '1/6': 'This is the theoretical probability, not the experimental result.',
      '6/25': 'This is the simplified form of 12/50, but we keep the original fraction.',
      '1/4': 'This equals 0.25, which is not equal to 12/50 (0.24).'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch15_t1_qe3',
    type: 'mcq',
    question: 'The experimental probability of an event can never be:',
    options: ['Greater than 1', 'Equal to 0', 'Equal to 1', 'A fraction'],
    correctAnswer: 'Greater than 1',
    explanation: 'Probability is always between 0 and 1 inclusive. It represents the ratio of favorable outcomes to total trials.',
    wrongAnswerExplanations: {
      'Equal to 0': 'If an event never occurs in the experiments, its probability is 0.',
      'Equal to 1': 'If an event occurs in every trial, its probability is 1.',
      'A fraction': 'Probability is often expressed as a fraction between 0 and 1.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch15_t1_qe4',
    type: 'mcq',
    question: 'When a die is thrown 80 times, a prime number turns up 35 times. The experimental probability of getting a prime number is:',
    options: ['7/16', '35/80', '1/2', '3/8'],
    correctAnswer: '35/80',
    explanation: 'Experimental probability = Number of times prime numbers appeared / Total trials = 35/80',
    wrongAnswerExplanations: {
      '7/16': 'This is the simplified form of 35/80, but we keep the original fraction.',
      '1/2': 'This equals 0.5, which is not equal to 35/80 (0.4375).',
      '3/8': 'This is an incorrect calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch15_t1_qe5',
    type: 'mcq',
    question: 'The formula used to calculate experimental probability is:',
    options: [
      'Number of favorable outcomes / Total number of possible outcomes', 
      'Number of times event occurred / Total number of trials', 
      'Number of trials / Number of favorable outcomes',
      'Total number of possible outcomes / Number of favorable outcomes'
    ],
    correctAnswer: 'Number of times event occurred / Total number of trials',
    explanation: 'Experimental probability is calculated by dividing the number of times an event occurs by the total number of trials conducted.',
    wrongAnswerExplanations: {
      'Number of favorable outcomes / Total number of possible outcomes': 'This describes theoretical probability, not experimental.',
      'Number of trials / Number of favorable outcomes': 'This is the inverse of the experimental probability formula.',
      'Total number of possible outcomes / Number of favorable outcomes': 'This is not a valid probability formula.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch15_t1_qe6',
    type: 'mcq',
    question: 'In an experiment, a spinner with 4 equal sections numbered 1 to 4 was spun 40 times. If it landed on 3 exactly 13 times, what is the experimental probability of landing on 3?',
    options: ['1/4', '13/40', '0.325', '10/40'],
    correctAnswer: '13/40',
    explanation: 'Experimental probability = Number of times it landed on 3 / Total number of spins = 13/40',
    wrongAnswerExplanations: {
      '1/4': 'This is the theoretical probability, not the experimental result.',
      '0.325': 'This is the decimal equivalent of 13/40, but we keep the fraction form.',
      '10/40': 'This is an incorrect calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch15_t1_qe7',
    type: 'mcq',
    question: 'If you toss a coin 150 times and get 70 heads, what is the experimental probability of getting tails?',
    options: ['70/150', '80/150', '1/2', '70/80'],
    correctAnswer: '80/150',
    explanation: 'Number of tails = 150 - 70 = 80. Experimental probability of tails = 80/150',
    wrongAnswerExplanations: {
      '70/150': 'This is the experimental probability of getting heads, not tails.',
      '1/2': 'This is the theoretical probability of tails, not the experimental result.',
      '70/80': 'This incorrectly uses number of heads in the denominator.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch15_t1_qe8',
    type: 'mcq',
    question: 'In an experiment, a die was rolled 60 times. The number of times each face appeared is: 1(8 times), 2(10 times), 3(9 times), 4(11 times), 5(13 times), 6(9 times). What is the experimental probability of getting a number less than 3?',
    options: ['18/60', '30/60', '1/3', '29/60'],
    correctAnswer: '18/60',
    explanation: 'Numbers less than 3 are 1 and 2, which appeared 8 + 10 = 18 times. Experimental probability = 18/60 = 3/10',
    wrongAnswerExplanations: {
      '30/60': 'This incorrectly includes the frequency of 3.',
      '1/3': 'This is the theoretical probability, not the experimental result.',
      '29/60': 'This incorrectly includes the frequencies of other numbers.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch15_t1_qe9',
    type: 'mcq',
    question: 'What happens to the experimental probability as the number of trials increases?',
    options: [
      'It always increases', 
      'It always decreases', 
      'It tends to approach the theoretical probability',
      'It becomes equal to 1'
    ],
    correctAnswer: 'It tends to approach the theoretical probability',
    explanation: 'As the number of trials increases, the experimental probability tends to get closer to the theoretical probability due to the law of large numbers.',
    wrongAnswerExplanations: {
      'It always increases': 'Experimental probability doesn\'t necessarily increase with more trials.',
      'It always decreases': 'Experimental probability doesn\'t necessarily decrease with more trials.',
      'It becomes equal to 1': 'Probability only equals 1 if the event is certain to occur.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch15_t1_qe10',
    type: 'mcq',
    question: 'A bag contains 3 red, 4 blue, and 5 green balls. If a ball is drawn 60 times with replacement and a red ball is drawn 15 times, what is the experimental probability of drawing a red ball?',
    options: ['1/4', '3/12', '15/60', '1/3'],
    correctAnswer: '15/60',
    explanation: 'Experimental probability = Number of times red ball was drawn / Total number of draws = 15/60 = 1/4',
    wrongAnswerExplanations: {
      '1/4': 'This is the theoretical probability and simplification of 15/60, but we keep original fraction.',
      '3/12': 'This is the ratio of red balls in the bag, not the experimental result.',
      '1/3': 'This does not match the given experimental data.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch15_t1_qe11',
    type: 'mcq',
    question: 'If a card is drawn from a standard deck 52 times with replacement, and hearts are drawn 16 times, what is the experimental probability of drawing a heart?',
    options: ['16/52', '1/4', '13/52', '1/3'],
    correctAnswer: '16/52',
    explanation: 'Experimental probability = Number of times hearts appeared / Total number of draws = 16/52 = 4/13',
    wrongAnswerExplanations: {
      '1/4': 'This is the theoretical probability, not the experimental result.',
      '13/52': 'This represents the number of hearts in the deck, not the experimental result.',
      '1/3': 'This does not match the given data.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch15_t1_qe12',
    type: 'mcq',
    question: 'When a die is rolled 30 times, the outcomes are: 1(3 times), 2(5 times), 3(6 times), 4(6 times), 5(5 times), 6(5 times). The experimental probability of getting a multiple of 3 is:',
    options: ['1/5', '1/3', '11/30', '12/30'],
    correctAnswer: '11/30',
    explanation: 'Multiples of 3 are 3 and 6, which appeared 6 + 5 = 11 times. Experimental probability = 11/30',
    wrongAnswerExplanations: {
      '1/5': 'This is not equal to 11/30 (approximately 0.367).',
      '1/3': 'This is the theoretical probability, not the experimental result.',
      '12/30': 'This is an incorrect calculation of the frequency of multiples of 3.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch15_t1_qe13',
    type: 'mcq',
    question: 'In a weather experiment, it was recorded that out of 40 days, it rained on 12 days. The experimental probability that it will not rain on a given day is:',
    options: ['12/40', '0.3', '28/40', '0.7'],
    correctAnswer: '28/40',
    explanation: 'Number of days it did not rain = 40 - 12 = 28. Experimental probability = 28/40 = 0.7',
    wrongAnswerExplanations: {
      '12/40': 'This is the experimental probability that it will rain, not that it won\'t rain.',
      '0.3': 'This is the decimal form of the probability of rain, not of no rain.',
      '0.7': 'This is the decimal equivalent of 28/40, but we keep the fraction form.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch15_t1_qe14',
    type: 'mcq',
    question: 'In a cricket match, a player hits a boundary on 24 balls out of 120 balls faced. The experimental probability of the player hitting a boundary is:',
    options: ['24/120', '0.2', '1/5', '96/120'],
    correctAnswer: '24/120',
    explanation: 'Experimental probability = Number of boundaries / Total balls faced = 24/120 = 1/5',
    wrongAnswerExplanations: {
      '0.2': 'This is the decimal equivalent of 24/120, but we keep the fraction form.',
      '1/5': 'This is the simplified form of 24/120, but we keep the original fraction.',
      '96/120': 'This is the probability of not hitting a boundary, not hitting one.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch15_t1_qe15',
    type: 'mcq',
    question: 'Two dice are rolled together 50 times. If a sum of 7 is obtained 9 times, the experimental probability of getting a sum of 7 is:',
    options: ['9/50', '1/6', '0.18', '7/50'],
    correctAnswer: '9/50',
    explanation: 'Experimental probability = Number of times sum 7 appeared / Total number of rolls = 9/50',
    wrongAnswerExplanations: {
      '1/6': 'This is the theoretical probability of getting a sum of 7, not the experimental result.',
      '0.18': 'This is the decimal equivalent of 9/50, but we keep the fraction form.',
      '7/50': 'This is an incorrect calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch15_t1_qe16',
    type: 'mcq',
    question: 'A spinner has 4 equal sections colored red, blue, green, and yellow. If the spinner is spun 100 times and lands on red 28 times, what is the experimental probability of not landing on red?',
    options: ['28/100', '72/100', '0.28', '0.72'],
    correctAnswer: '72/100',
    explanation: 'Number of times not landing on red = 100 - 28 = 72. Experimental probability = 72/100 = 18/25',
    wrongAnswerExplanations: {
      '28/100': 'This is the experimental probability of landing on red, not of not landing on red.',
      '0.28': 'This is the decimal form of landing on red, not of not landing on red.',
      '0.72': 'This is the decimal equivalent of 72/100, but we keep the fraction form.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch15_t1_qe17',
    type: 'mcq',
    question: 'In 400 births in a hospital, 224 were boys. The experimental probability of a baby being a girl is:',
    options: ['224/400', '176/400', '0.56', '0.44'],
    correctAnswer: '176/400',
    explanation: 'Number of girls = 400 - 224 = 176. Experimental probability = 176/400 = 11/25',
    wrongAnswerExplanations: {
      '224/400': 'This is the experimental probability of a baby being a boy, not a girl.',
      '0.56': 'This is the decimal form of the probability of a boy, not a girl.',
      '0.44': 'This is the decimal equivalent of 176/400, but we keep the fraction form.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch15_t1_qe18',
    type: 'mcq',
    question: 'A box contains some white and black balls. If a ball is drawn 50 times with replacement, and a white ball is drawn 20 times, what is the experimental probability of drawing a black ball?',
    options: ['20/50', '30/50', '1/2', '2/5'],
    correctAnswer: '30/50',
    explanation: 'Number of times black ball was drawn = 50 - 20 = 30. Experimental probability = 30/50 = 3/5',
    wrongAnswerExplanations: {
      '20/50': 'This is the experimental probability of drawing a white ball, not a black ball.',
      '1/2': 'This is not equal to 30/50 (which is 3/5).',
      '2/5': 'This equals 20/50, which is the probability of drawing a white ball.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch15_t1_qe19',
    type: 'mcq',
    question: 'When a die is rolled 90 times, an even number appears 43 times. The experimental probability of getting an odd number is:',
    options: ['43/90', '47/90', '45/90', '1/2'],
    correctAnswer: '47/90',
    explanation: 'Number of times odd number appeared = 90 - 43 = 47. Experimental probability = 47/90',
    wrongAnswerExplanations: {
      '43/90': 'This is the experimental probability of getting an even number, not odd.',
      '45/90': 'This would be the theoretical probability (3/6 = 1/2), not the experimental result.',
      '1/2': 'This is the theoretical probability, not the experimental result.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch15_t1_qe20',
    type: 'mcq',
    question: 'A coin is tossed 120 times and it shows heads 68 times. If the same coin is tossed one more time, the experimental probability of getting a tail is:',
    options: ['68/120', '52/120', '68/121', '52/121'],
    correctAnswer: '52/120',
    explanation: 'Using past experiment data, tails appeared 120 - 68 = 52 times. Experimental probability = 52/120',
    wrongAnswerExplanations: {
      '68/120': 'This is the experimental probability of getting heads, not tails.',
      '68/121': 'This incorrectly includes the new toss in the probability calculation.',
      '52/121': 'This incorrectly includes the new toss in the probability calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  }
];
