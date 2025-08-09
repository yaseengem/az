import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch15_t1_qm1',
    type: 'mcq',
    question: 'A bag contains 3 red, 5 black, and 7 white balls. Amit draws a ball 45 times with replacement and gets a red ball 12 times, a black ball 16 times, and a white ball 17 times. The experimental probability of drawing a non-white ball is:',
    options: ['28/45', '17/45', '12/45', '16/45'],
    correctAnswer: '28/45',
    explanation: 'Non-white balls drawn = Red + Black = 12 + 16 = 28 times. Experimental probability = 28/45',
    wrongAnswerExplanations: {
      '17/45': 'This is the experimental probability of drawing a white ball, not a non-white ball.',
      '12/45': 'This is only the experimental probability of drawing a red ball.',
      '16/45': 'This is only the experimental probability of drawing a black ball.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch15_t1_qm2',
    type: 'mcq',
    question: 'A die is thrown 200 times with the following outcomes: 1(30 times), 2(32 times), 3(34 times), 4(35 times), 5(33 times), 6(36 times). If the die is thrown once more, what is the experimental probability of getting a number greater than 4?',
    options: ['69/200', '131/200', '69/201', '36/200'],
    correctAnswer: '69/200',
    explanation: 'Numbers > 4 are 5 and 6, which appeared 33 + 36 = 69 times. Experimental probability = 69/200',
    wrongAnswerExplanations: {
      '131/200': 'This is the experimental probability of getting a number less than or equal to 4.',
      '69/201': 'This incorrectly includes the new throw in the probability calculation.',
      '36/200': 'This is only the experimental probability of getting a 6.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch15_t1_qm3',
    type: 'mcq',
    question: 'In a cricket tournament, a batsman scored the following runs in 20 innings: 0(3 times), 15(2 times), 24(4 times), 32(2 times), 47(3 times), 50(2 times), 61(1 time), 72(2 times), 85(1 time). The experimental probability that he scored a half-century or more in an innings is:',
    options: ['1/4', '5/20', '3/10', '1/5'],
    correctAnswer: '5/20',
    explanation: 'Scores ≥ 50 are 50, 61, 72, 85 which occurred 2+1+2+1 = 6 times. Experimental probability = 6/20 = 3/10',
    wrongAnswerExplanations: {
      '1/4': 'This is equal to 5/20, which is incorrect as the batsman scored ≥ 50 runs 6 times, not 5.',
      '3/10': 'This is the simplified form of 6/20, but the calculation itself is correct.',
      '1/5': 'This equals 4/20, which is incorrect as the batsman scored ≥ 50 runs 6 times, not 4.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch15_t1_qm4',
    type: 'mcq',
    question: 'Two dice are rolled 120 times, and the sum of numbers on the two dice is noted each time. The results are given below:\n\nSum: 2(3 times), 3(8 times), 4(10 times), 5(14 times), 6(18 times), 7(22 times), 8(17 times), 9(12 times), 10(7 times), 11(5 times), 12(4 times)\n\nThe experimental probability of getting a sum less than or equal to 5 is:',
    options: ['35/120', '2/5', '7/24', '29/120'],
    correctAnswer: '35/120',
    explanation: 'Sum ≤ 5 occurs when sum is 2, 3, 4, or 5, which happened 3+8+10+14 = 35 times. Experimental probability = 35/120',
    wrongAnswerExplanations: {
      '2/5': 'This is nearly 48/120, which is incorrect.',
      '7/24': 'This equals 35/120, which is correctly calculated but we keep the original fraction.',
      '29/120': 'This is an incorrect calculation of the frequency of sums ≤ 5.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch15_t1_qm5',
    type: 'mcq',
    question: 'A survey was conducted in a locality where 320 families were asked if they own a car. It was found that 192 families own a car. If another family from the same locality is selected at random, the experimental probability that they do not own a car is:',
    options: ['192/320', '128/320', '0.6', '0.4'],
    correctAnswer: '128/320',
    explanation: 'Number of families without cars = 320 - 192 = 128. Experimental probability = 128/320 = 2/5',
    wrongAnswerExplanations: {
      '192/320': 'This is the experimental probability that a family owns a car, not the opposite.',
      '0.6': 'This is the decimal form of 192/320, not the probability of not owning a car.',
      '0.4': 'This is the decimal equivalent of 128/320, but we keep the fraction form.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch15_t1_qm6',
    type: 'mcq',
    question: 'In a school, 400 students were surveyed about their preference for sports. 160 preferred cricket, 120 preferred football, 80 preferred basketball, and 40 preferred other sports. If a student is selected at random, what is the experimental probability that the student prefers either cricket or football?',
    options: ['280/400', '2/5', '7/10', '160/400'],
    correctAnswer: '280/400',
    explanation: 'Students preferring cricket or football = 160 + 120 = 280. Experimental probability = 280/400 = 7/10',
    wrongAnswerExplanations: {
      '2/5': 'This equals 160/400, which is only the probability of preferring cricket.',
      '7/10': 'This is the simplified form of 280/400, but we keep the original fraction.',
      '160/400': 'This is only the probability of preferring cricket, not cricket or football.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch15_t1_qm7',
    type: 'mcq',
    question: 'A dice is thrown 300 times with the following frequencies: 1(42 times), 2(50 times), 3(55 times), 4(53 times), 5(48 times), 6(52 times). The experimental probability of getting a prime number is:',
    options: ['110/300', '150/300', '157/300', '143/300'],
    correctAnswer: '157/300',
    explanation: 'Prime numbers on a die are 2, 3, 5 which appeared 50+55+48 = 153 times. Experimental probability = 153/300 = 51/100',
    wrongAnswerExplanations: {
      '110/300': 'This incorrectly counts which numbers are prime on a die.',
      '150/300': 'This is an incorrect calculation of the frequency of prime numbers.',
      '143/300': 'This is an incorrect calculation of the frequency of prime numbers.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch15_t1_qm8',
    type: 'mcq',
    question: 'In a blood donor camp, the blood groups of 200 people were recorded as follows: A(64), B(72), AB(24), O(40). If one of these people is selected at random, what is the experimental probability that the person has blood group A or AB?',
    options: ['88/200', '64/200', '11/25', '96/200'],
    correctAnswer: '88/200',
    explanation: 'People with blood group A or AB = 64 + 24 = 88. Experimental probability = 88/200 = 11/25',
    wrongAnswerExplanations: {
      '64/200': 'This is only the probability of having blood group A, not A or AB.',
      '11/25': 'This is the simplified form of 88/200, but we keep the original fraction.',
      '96/200': 'This is an incorrect calculation of people with blood groups A and AB.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch15_t1_qm9',
    type: 'mcq',
    question: 'A company selected 500 mobile phones randomly from their production and found that 15 were defective. Based on this sample, if the company produces 10,000 phones, the expected number of defective phones would be:',
    options: ['300', '250', '350', '150'],
    correctAnswer: '300',
    explanation: 'Experimental probability of defective phones = 15/500 = 3/100. Expected defective phones = 10000 × (3/100) = 300',
    wrongAnswerExplanations: {
      '250': 'This is incorrectly calculated using 12.5 as the numerator instead of 15.',
      '350': 'This is incorrectly calculated using 17.5 as the numerator instead of 15.',
      '150': 'This is incorrectly calculated by dividing by 200 instead of 100.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch15_t1_qm10',
    type: 'mcq',
    question: 'Two coins are tossed together 160 times. The results are: (Two Heads: 32 times, One Head and One Tail: 84 times, Two Tails: 44 times). The experimental probability of getting at least one head is:',
    options: ['116/160', '32/160', '84/160', '44/160'],
    correctAnswer: '116/160',
    explanation: 'At least one head appears in cases: Two Heads + One Head and One Tail = 32 + 84 = 116 times. Experimental probability = 116/160 = 29/40',
    wrongAnswerExplanations: {
      '32/160': 'This is only the probability of getting two heads.',
      '84/160': 'This is only the probability of getting exactly one head.',
      '44/160': 'This is the probability of getting two tails, not at least one head.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch15_t1_qm11',
    type: 'mcq',
    question: 'Three coins are tossed 200 times. If exactly two heads show up 84 times, what is the experimental probability of getting exactly two heads?',
    options: ['84/200', '42/100', '21/50', '0.42'],
    correctAnswer: '84/200',
    explanation: 'Experimental probability = Number of times exactly two heads appeared / Total number of tosses = 84/200 = 21/50',
    wrongAnswerExplanations: {
      '42/100': 'This is the simplified form of 84/200, but we keep the original fraction.',
      '21/50': 'This is the simplified form of 84/200, but we keep the original fraction.',
      '0.42': 'This is the decimal equivalent of 84/200, but we keep the fraction form.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch15_t1_qm12',
    type: 'mcq',
    question: 'A card is drawn from a well-shuffled deck of 52 cards 130 times with replacement. If hearts are drawn 38 times and spades 24 times, what is the experimental probability of drawing a red card?',
    options: ['38/130', '68/130', '62/130', '92/130'],
    correctAnswer: '68/130',
    explanation: 'Red cards are hearts and diamonds. Hearts drawn 38 times. Diamonds = Red cards - Hearts = 68 - 38 = 30. Experimental probability = 68/130 = 34/65',
    wrongAnswerExplanations: {
      '38/130': 'This is only the probability of drawing hearts, not red cards (hearts and diamonds).',
      '62/130': 'This is the probability of drawing black cards (clubs and spades).',
      '92/130': 'This is an incorrect calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch15_t1_qm13',
    type: 'mcq',
    question: 'A dice is loaded in such a way that the probability of getting a 6 is twice the probability of getting any other number. The dice is rolled 210 times and a 6 is observed 70 times. What is the experimental probability of not getting a 6?',
    options: ['140/210', '2/3', '70/210', '1/3'],
    correctAnswer: '140/210',
    explanation: 'Number of times 6 does not appear = 210 - 70 = 140. Experimental probability = 140/210 = 2/3',
    wrongAnswerExplanations: {
      '2/3': 'This is the simplified form of 140/210, but we keep the original fraction.',
      '70/210': 'This is the experimental probability of getting a 6, not of not getting a 6.',
      '1/3': 'This is the decimal form of 70/210, not the probability of not getting a 6.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch15_t1_qm14',
    type: 'mcq',
    question: 'In a school of 400 students, each student takes exactly one foreign language. The distribution is: French(150), Spanish(120), German(80), and Japanese(50). If two students are selected at random one after another (without replacement), what is the experimental probability that both students take the same language?',
    options: ['150/400 × 149/399', '0.373', '399/1600', '0.248'],
    correctAnswer: '399/1600',
    explanation: 'Probability = [150×149 + 120×119 + 80×79 + 50×49]/[400×399] = 57875/159600 = 399/1600',
    wrongAnswerExplanations: {
      '150/400 × 149/399': 'This calculates only the probability of selecting two students studying French.',
      '0.373': 'This is a decimal approximation that does not match the exact fraction.',
      '0.248': 'This is an incorrect calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch15_t1_qm15',
    type: 'mcq',
    question: 'In a factory, 5% of the products are found to be defective on average. In a sample of 500 products, what is the expected number of non-defective products?',
    options: ['25', '475', '450', '95%'],
    correctAnswer: '475',
    explanation: 'Expected defective products = 500 × 0.05 = 25. Expected non-defective products = 500 - 25 = 475',
    wrongAnswerExplanations: {
      '25': 'This is the expected number of defective products, not non-defective ones.',
      '450': 'This incorrectly uses 10% as the defect rate instead of 5%.',
      '95%': 'This is the percentage of non-defective products, not the expected count.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch15_t1_qm16',
    type: 'mcq',
    question: 'A biased coin (with P(H) = 0.6) is tossed 250 times. What is the expected number of times tails would appear?',
    options: ['150', '100', '60', '0.4×250'],
    correctAnswer: '100',
    explanation: 'Probability of tails = 1 - 0.6 = 0.4. Expected number of tails = 250 × 0.4 = 100',
    wrongAnswerExplanations: {
      '150': 'This is the expected number of heads (250 × 0.6), not tails.',
      '60': 'This incorrectly multiplies 0.6 × 100 instead of 0.4 × 250.',
      '0.4×250': 'This is the formula, not the calculated value which is 100.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch15_t1_qm17',
    type: 'mcq',
    question: 'A fair die is rolled 180 times. What is the expected frequency of getting a multiple of 3?',
    options: ['30', '60', '90', '120'],
    correctAnswer: '60',
    explanation: 'Multiples of 3 on a die are 3 and 6, so probability = 2/6 = 1/3. Expected frequency = 180 × (1/3) = 60',
    wrongAnswerExplanations: {
      '30': 'This incorrectly uses 1/6 as the probability instead of 1/3.',
      '90': 'This incorrectly uses 1/2 as the probability instead of 1/3.',
      '120': 'This incorrectly uses 2/3 as the probability instead of 1/3.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch15_t1_qm18',
    type: 'mcq',
    question: 'An electronic component has a 2% failure rate. In a batch of 1000 components, what is the expected number of working components?',
    options: ['20', '980', '800', '998'],
    correctAnswer: '980',
    explanation: 'Probability of working component = 1 - 0.02 = 0.98. Expected working components = 1000 × 0.98 = 980',
    wrongAnswerExplanations: {
      '20': 'This is the expected number of failed components, not working ones.',
      '800': 'This incorrectly uses 0.8 as the working probability instead of 0.98.',
      '998': 'This incorrectly uses 0.2% as the failure rate instead of 2%.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch15_t1_qm19',
    type: 'mcq',
    question: 'Five coins are tossed 320 times. If exactly 3 heads appear 140 times, what is the experimental probability of getting exactly 3 heads?',
    options: ['140/320', '7/16', '9/20', '0.4375'],
    correctAnswer: '140/320',
    explanation: 'Experimental probability = Number of times exactly 3 heads appeared / Total tosses = 140/320 = 7/16',
    wrongAnswerExplanations: {
      '7/16': 'This is the simplified form of 140/320, but we keep the original fraction.',
      '9/20': 'This is an incorrect simplification (0.45 ≠ 140/320 which is 0.4375).',
      '0.4375': 'This is the decimal equivalent of 140/320, but we keep the fraction form.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch15_t1_qm20',
    type: 'mcq',
    question: 'In a survey of 500 households, it was found that 320 households have internet connection. Based on this data, out of 2000 households in a locality, how many would you expect to have internet connection?',
    options: ['1280', '1500', '1000', '1600'],
    correctAnswer: '1280',
    explanation: 'Experimental probability of having internet = 320/500 = 0.64. Expected households with internet = 2000 × 0.64 = 1280',
    wrongAnswerExplanations: {
      '1500': 'This incorrectly uses 0.75 as the probability instead of 0.64.',
      '1000': 'This incorrectly uses 0.5 as the probability instead of 0.64.',
      '1600': 'This incorrectly uses 0.8 as the probability instead of 0.64.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  }
];
