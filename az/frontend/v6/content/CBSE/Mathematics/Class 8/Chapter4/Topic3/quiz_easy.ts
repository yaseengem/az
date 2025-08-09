import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch4_t3_qe1',
        type: 'mcq',
        question: 'What is the probability of getting a head when tossing a fair coin?',
        options: ['0', '1', '1/2', '2'],
        correctAnswer: '1/2',
        explanation: 'A fair coin has two sides, so the probability of head is 1/2. 🪙',
        wrongAnswerExplanations: {
            '0': 'There is a chance to get a head, so probability is not 0.',
            '1': 'Probability 1 means certainty, but both head and tail are possible.',
            '2': 'Probability cannot be greater than 1.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch4_t3_qe2',
        type: 'mcq',
        question: 'If a die is rolled, what is the probability of getting a number less than 5?',
        options: ['1/2', '2/3', '4/6', '1/3'],
        correctAnswer: '2/3',
        explanation: 'Numbers less than 5 are 1, 2, 3, 4. So, 4/6 = 2/3. 🎲',
        wrongAnswerExplanations: {
            '1/2': 'There are 4 favorable outcomes out of 6, not 3.',
            '4/6': '4/6 simplifies to 2/3.',
            '1/3': 'Only 2 numbers (1,2) are less than 3, not 4.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch4_t3_qe3',
        type: 'mcq',
        question: 'What is the probability of drawing a red card from a standard deck of 52 cards?',
        options: ['1/2', '1/4', '1/13', '1/26'],
        correctAnswer: '1/2',
        explanation: 'There are 26 red cards out of 52, so probability is 1/2. 🂡',
        wrongAnswerExplanations: {
            '1/4': 'There are 13 cards in each suit, but 26 red cards in total.',
            '1/13': 'This is the probability of drawing a specific card, not any red card.',
            '1/26': 'There are 26 red cards, but probability is 26/52 = 1/2.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch4_t3_qe4',
        type: 'mcq',
        question: 'If you pick a day at random from a week, what is the probability it is a weekend?',
        options: ['1/7', '2/7', '3/7', '5/7'],
        correctAnswer: '2/7',
        explanation: 'There are 2 weekend days (Saturday, Sunday) out of 7. 📅',
        wrongAnswerExplanations: {
            '1/7': 'Only one day would be 1/7, but there are two weekend days.',
            '3/7': 'There are only 2 weekend days, not 3.',
            '5/7': 'There are 5 weekdays, not weekends.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch4_t3_qe5',
        type: 'mcq',
        question: 'What is the probability of getting an even number when rolling a die?',
        options: ['1/2', '1/3', '2/3', '1/6'],
        correctAnswer: '1/2',
        explanation: 'Even numbers are 2, 4, 6. So, 3/6 = 1/2. 🎲',
        wrongAnswerExplanations: {
            '1/3': 'There are 2 even numbers in 6, but actually there are 3.',
            '2/3': 'There are 3 even numbers, but 3/6 = 1/2.',
            '1/6': 'Only one number would be 1/6, but there are 3 even numbers.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch4_t3_qe6',
        type: 'mcq',
        question: 'If a bag contains 5 red and 3 blue balls, what is the probability of picking a blue ball?',
        options: ['3/8', '5/8', '1/2', '1/3'],
        correctAnswer: '3/8',
        explanation: 'There are 3 blue balls out of 8 total, so 3/8. 🔵',
        wrongAnswerExplanations: {
            '5/8': '5/8 is the probability for red balls.',
            '1/2': 'There are not equal numbers of red and blue balls.',
            '1/3': 'There are 3 blue balls, but 8 total balls.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch4_t3_qe7',
        type: 'mcq',
        question: 'What is the probability of getting a 7 when rolling a standard die?',
        options: ['0', '1/6', '1', '1/7'],
        correctAnswer: '0',
        explanation: 'A standard die has numbers 1 to 6, so 7 is impossible. 🚫',
        wrongAnswerExplanations: {
            '1/6': 'There is no 7 on a standard die.',
            '1': 'Probability 1 means certainty, but 7 is not possible.',
            '1/7': 'A die has only 6 faces.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch4_t3_qe8',
        type: 'mcq',
        question: 'If a card is drawn from a deck, what is the probability it is a king?',
        options: ['1/13', '1/4', '1/26', '1/52'],
        correctAnswer: '1/13',
        explanation: 'There are 4 kings in 52 cards, so 4/52 = 1/13. 👑',
        wrongAnswerExplanations: {
            '1/4': 'There are 4 suits, but 13 cards in each suit.',
            '1/26': 'There are 26 red or black cards, not kings.',
            '1/52': 'This is the probability for a specific card, not any king.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch4_t3_qe9',
        type: 'mcq',
        question: 'What is the probability of getting a vowel when picking a letter from the word "PROBABILITY"?',
        options: ['3/11', '4/11', '2/11', '5/11'],
        correctAnswer: '4/11',
        explanation: 'Vowels are O, A, I, I. There are 4 vowels in 11 letters. 🔤',
        wrongAnswerExplanations: {
            '3/11': 'There are 4 vowels, not 3.',
            '2/11': 'There are 4 vowels, not 2.',
            '5/11': 'There are 4 vowels, not 5.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch4_t3_qe10',
        type: 'mcq',
        question: 'If a spinner has 5 equal sections numbered 1 to 5, what is the probability of landing on 3?',
        options: ['1/5', '2/5', '1/3', '1/2'],
        correctAnswer: '1/5',
        explanation: 'There is only one section with 3 out of 5. 🎡',
        wrongAnswerExplanations: {
            '2/5': 'There is only one section with 3.',
            '1/3': 'There are 5 sections, not 3.',
            '1/2': 'There are 5 sections, not 2.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch4_t3_qe11',
        type: 'mcq',
        question: 'What is the probability of getting a tail when tossing a fair coin?',
        options: ['1/2', '1', '0', '2'],
        correctAnswer: '1/2',
        explanation: 'A fair coin has two sides, so the probability of tail is 1/2. 🪙',
        wrongAnswerExplanations: {
            '1': 'Probability 1 means certainty, but both head and tail are possible.',
            '0': 'There is a chance to get a tail, so probability is not 0.',
            '2': 'Probability cannot be greater than 1.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch4_t3_qe12',
        type: 'mcq',
        question: 'If a bag contains 6 green and 4 yellow marbles, what is the probability of picking a yellow marble?',
        options: ['2/5', '4/10', '3/5', '1/2'],
        correctAnswer: '2/5',
        explanation: 'There are 4 yellow marbles out of 10, so 4/10 = 2/5. 🟡',
        wrongAnswerExplanations: {
            '4/10': '4/10 simplifies to 2/5.',
            '3/5': 'There are 6 green marbles, not yellow.',
            '1/2': 'There are 4 yellow out of 10, not 5.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch4_t3_qe13',
        type: 'mcq',
        question: 'What is the probability of getting a number greater than 4 when rolling a die?',
        options: ['1/3', '1/2', '2/3', '1/6'],
        correctAnswer: '1/3',
        explanation: 'Numbers greater than 4 are 5 and 6. So, 2/6 = 1/3. 🎲',
        wrongAnswerExplanations: {
            '1/2': 'There are 2 numbers greater than 4, not 3.',
            '2/3': 'There are 2 numbers, not 4.',
            '1/6': 'There are 2 numbers, not 1.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch4_t3_qe14',
        type: 'mcq',
        question: 'If a letter is picked at random from the word "MATHS", what is the probability it is a vowel?',
        options: ['1/5', '2/5', '3/5', '4/5'],
        correctAnswer: '1/5',
        explanation: 'Only A is a vowel in MATHS, so 1/5. 🔠',
        wrongAnswerExplanations: {
            '2/5': 'There is only one vowel, not two.',
            '3/5': 'There is only one vowel, not three.',
            '4/5': 'There is only one vowel, not four.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch4_t3_qe15',
        type: 'mcq',
        question: 'What is the probability of getting a black card from a deck of 52 cards?',
        options: ['1/2', '1/4', '1/13', '1/26'],
        correctAnswer: '1/2',
        explanation: 'There are 26 black cards out of 52, so probability is 1/2. ♠️',
        wrongAnswerExplanations: {
            '1/4': 'There are 13 cards in each suit, but 26 black cards in total.',
            '1/13': 'This is the probability of a specific card, not any black card.',
            '1/26': 'There are 26 black cards, but probability is 26/52 = 1/2.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch4_t3_qe16',
        type: 'mcq',
        question: 'If a bag contains 10 balls numbered 1 to 10, what is the probability of picking a ball with an odd number?',
        options: ['1/2', '2/5', '3/10', '1/10'],
        correctAnswer: '1/2',
        explanation: 'There are 5 odd numbers out of 10, so 5/10 = 1/2. ⚽',
        wrongAnswerExplanations: {
            '2/5': 'There are 5 odd numbers, not 4.',
            '3/10': 'There are 5 odd numbers, not 3.',
            '1/10': 'There are 5 odd numbers, not 1.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch4_t3_qe17',
        type: 'mcq',
        question: 'What is the probability of getting a consonant when picking a letter from the word "PROBABILITY"?',
        options: ['7/11', '6/11', '5/11', '4/11'],
        correctAnswer: '7/11',
        explanation: 'There are 7 consonants in 11 letters. 🔤',
        wrongAnswerExplanations: {
            '6/11': 'There are 7 consonants, not 6.',
            '5/11': 'There are 7 consonants, not 5.',
            '4/11': 'There are 7 consonants, not 4.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch4_t3_qe18',
        type: 'mcq',
        question: 'If a die is rolled, what is the probability of getting a prime number?',
        options: ['1/2', '1/3', '1/6', '2/3'],
        correctAnswer: '1/2',
        explanation: 'Prime numbers on a die are 2, 3, 5. So, 3/6 = 1/2. 🎲',
        wrongAnswerExplanations: {
            '1/3': 'There are 3 prime numbers, but 3/6 = 1/2.',
            '1/6': 'There are 3 prime numbers, not 1.',
            '2/3': 'There are 3 prime numbers, not 4.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch4_t3_qe19',
        type: 'mcq',
        question: 'What is the probability of getting a face card when drawing from a deck of 52 cards?',
        options: ['3/13', '1/4', '1/13', '1/3'],
        correctAnswer: '3/13',
        explanation: 'There are 12 face cards (J, Q, K) in 52 cards, so 12/52 = 3/13. 🃏',
        wrongAnswerExplanations: {
            '1/4': 'There are 13 cards in each suit, not face cards.',
            '1/13': 'This is the probability for a specific card, not any face card.',
            '1/3': 'There are 12 face cards, not 17.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch4_t3_qe20',
        type: 'mcq',
        question: 'If a bag contains 4 red, 3 blue, and 3 green balls, what is the probability of picking a green ball?',
        options: ['3/10', '4/10', '7/10', '1/3'],
        correctAnswer: '3/10',
        explanation: 'There are 3 green balls out of 10, so 3/10. 🟢',
        wrongAnswerExplanations: {
            '4/10': 'There are 4 red balls, not green.',
            '7/10': 'There are 7 non-green balls.',
            '1/3': 'There are 3 green balls, but 10 total balls.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    }
]; 