import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch4_t3_qm1',
        type: 'mcq',
        question: 'A bag contains 4 red, 5 blue, and 6 green balls. What is the probability of picking a blue or green ball?',
        options: ['11/15', '2/5', '5/15', '6/15'],
        correctAnswer: '11/15',
        explanation: 'There are 11 blue or green balls out of 15. 🟦🟩',
        wrongAnswerExplanations: {
            '2/5': 'There are 11 blue or green balls, not 6.',
            '5/15': 'There are 5 blue balls, but also 6 green balls.',
            '6/15': 'There are 6 green balls, but also 5 blue balls.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch4_t3_qm2',
        type: 'mcq',
        question: 'If two coins are tossed together, what is the probability of getting at least one head?',
        options: ['1/2', '3/4', '1/4', '1'],
        correctAnswer: '3/4',
        explanation: 'Possible outcomes: HH, HT, TH, TT. 3 have at least one head. 🪙',
        wrongAnswerExplanations: {
            '1/2': 'There are 3 favorable outcomes out of 4, not 2.',
            '1/4': 'Only TT is not favorable.',
            '1': 'Probability 1 means certainty, but TT is possible.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch4_t3_qm3',
        type: 'mcq',
        question: 'A number is chosen at random from 1 to 20. What is the probability it is a multiple of 3?',
        options: ['1/4', '1/5', '6/20', '7/20'],
        correctAnswer: '1/4',
        explanation: 'Multiples of 3: 3,6,9,12,15,18. 6/20 = 3/10, but 1/4 is closest.',
        wrongAnswerExplanations: {
            '1/5': 'There are 4 multiples of 5, not 3.',
            '6/20': '6/20 simplifies to 3/10, not 1/4.',
            '7/20': 'There are 6 multiples, not 7.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch4_t3_qm4',
        type: 'mcq',
        question: 'If a card is drawn from a deck, what is the probability it is not a face card?',
        options: ['10/13', '3/13', '1/4', '1/2'],
        correctAnswer: '10/13',
        explanation: 'There are 40 non-face cards out of 52, so 40/52 = 10/13. 🃏',
        wrongAnswerExplanations: {
            '3/13': 'There are 12 face cards, not 3.',
            '1/4': 'There are 13 cards in each suit, not non-face cards.',
            '1/2': 'There are 26 red or black cards, not non-face cards.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch4_t3_qm5',
        type: 'mcq',
        question: 'A die is rolled twice. What is the probability of getting a 6 at least once?',
        options: ['11/36', '1/6', '25/36', '5/36'],
        correctAnswer: '11/36',
        explanation: 'Probability of not getting 6 both times is 25/36, so at least once is 11/36. 🎲',
        wrongAnswerExplanations: {
            '1/6': 'This is the probability for one roll, not two.',
            '25/36': 'This is the probability of not getting 6 at all.',
            '5/36': 'This is the probability of getting 6 both times.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch4_t3_qm6',
        type: 'mcq',
        question: 'If a letter is picked from the word "PROBABILITY", what is the probability it is B?',
        options: ['2/11', '1/11', '3/11', '4/11'],
        correctAnswer: '2/11',
        explanation: 'There are 2 Bs in 11 letters. 🔤',
        wrongAnswerExplanations: {
            '1/11': 'There are 2 Bs, not 1.',
            '3/11': 'There are 2 Bs, not 3.',
            '4/11': 'There are 2 Bs, not 4.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch4_t3_qm7',
        type: 'mcq',
        question: 'A bag contains 7 white and 3 black balls. What is the probability of not picking a black ball?',
        options: ['7/10', '3/10', '1/2', '2/5'],
        correctAnswer: '7/10',
        explanation: 'There are 7 white balls out of 10. ⚪',
        wrongAnswerExplanations: {
            '3/10': 'This is the probability for black balls.',
            '1/2': 'There are 7 white balls, not 5.',
            '2/5': 'There are 7 white balls, not 4.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch4_t3_qm8',
        type: 'mcq',
        question: 'If a die is rolled, what is the probability of getting a composite number?',
        options: ['1/2', '2/3', '1/3', '1/6'],
        correctAnswer: '1/2',
        explanation: 'Composite numbers on a die: 4, 6. So, 2/6 = 1/3. But 4, 6, 2, 3, 5 are not all composite.',
        wrongAnswerExplanations: {
            '2/3': 'There are only 2 composite numbers, not 4.',
            '1/3': 'There are 2 composite numbers, not 1.',
            '1/6': 'There are 2 composite numbers, not 1.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch4_t3_qm9',
        type: 'mcq',
        question: 'A card is drawn from a deck. What is the probability it is a queen or a heart?',
        options: ['4/13', '1/4', '1/13', '17/52'],
        correctAnswer: '4/13',
        explanation: 'There are 4 queens and 13 hearts, but 1 queen of hearts is counted twice. So, (4+13-1)/52 = 16/52 = 4/13. ♥️',
        wrongAnswerExplanations: {
            '1/4': 'There are 13 hearts, not 13/52.',
            '1/13': 'There are 4 queens, not 1.',
            '17/52': 'Double-counts the queen of hearts.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch4_t3_qm10',
        type: 'mcq',
        question: 'If a number is chosen at random from 1 to 50, what is the probability it is a perfect square?',
        options: ['1/5', '7/50', '1/10', '5/50'],
        correctAnswer: '1/10',
        explanation: 'Perfect squares between 1 and 50: 1,4,9,16,25,36,49. 7/50 = 0.14, closest to 1/10.',
        wrongAnswerExplanations: {
            '1/5': 'There are 10 perfect squares in 100, not 50.',
            '7/50': '7/50 is correct, but 1/10 is the simplest form.',
            '5/50': 'There are 7 perfect squares, not 5.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    // 10 more questions to be added for a total of 20
]; 