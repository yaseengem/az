import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch10_t2_qe1',
        type: 'mcq',
        question: 'What is 3600 written in scientific notation?',
        options: ['3.6 × 10³', '36 × 10²', '0.36 × 10⁴', '3.6 × 10⁴'],
        correctAnswer: '3.6 × 10³',
        explanation: 'In scientific notation, move the decimal point to get a number between 1 and 10, then multiply by 10 to the appropriate power.',
        wrongAnswerExplanations: {
            '36 × 10²': 'The first number should be between 1 and 10',
            '0.36 × 10⁴': 'The first number should be between 1 and 10',
            '3.6 × 10⁴': 'Moving the decimal point 3 places gives 3.6 × 10³'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t2_qe2',
        type: 'mcq',
        question: 'Which number is written in scientific notation? 🔍',
        options: ['45 × 10⁴', '4.5 × 10⁴', '0.45 × 10⁴', '45.0 × 10³'],
        correctAnswer: '4.5 × 10⁴',
        explanation: 'Scientific notation requires a number between 1 and 10 multiplied by a power of 10.',
        wrongAnswerExplanations: {
            '45 × 10⁴': 'The first number must be between 1 and 10',
            '0.45 × 10⁴': 'The first number must be between 1 and 10',
            '45.0 × 10³': 'The first number must be between 1 and 10'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t2_qe3',
        type: 'mcq',
        question: 'What is 0.00045 in scientific notation? 🔢',
        options: ['4.5 × 10⁻⁴', '4.5 × 10⁴', '0.45 × 10⁻³', '45 × 10⁻⁵'],
        correctAnswer: '4.5 × 10⁻⁴',
        explanation: 'Move decimal point 4 places right to get 4.5, so multiply by 10⁻⁴.',
        wrongAnswerExplanations: {
            '4.5 × 10⁴': 'This would be a large number, not a small decimal',
            '0.45 × 10⁻³': 'The first number should be between 1 and 10',
            '45 × 10⁻⁵': 'The first number should be between 1 and 10'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t2_qe4',
        type: 'mcq',
        question: 'Convert 7,000,000 to scientific notation 📝',
        options: ['7 × 10⁶', '70 × 10⁵', '7.0 × 10⁶', '0.7 × 10⁷'],
        correctAnswer: '7.0 × 10⁶',
        explanation: 'Move decimal point 6 places left to get 7.0, so multiply by 10⁶.',
        wrongAnswerExplanations: {
            '7 × 10⁶': 'Need decimal point for precision',
            '70 × 10⁵': 'First number should be between 1 and 10',
            '0.7 × 10⁷': 'First number should be between 1 and 10'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t2_qe5',
        type: 'mcq',
        question: 'Which is equal to 2.5 × 10³? 🤔',
        options: ['2500', '250', '25000', '0.0025'],
        correctAnswer: '2500',
        explanation: 'Move decimal point 3 places right: 2.5 → 25.0 → 250.0 → 2500',
        wrongAnswerExplanations: {
            '250': 'Moved decimal point only 2 places',
            '25000': 'Moved decimal point 4 places',
            '0.0025': 'Moved decimal point left instead of right'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t2_qe6',
        type: 'mcq',
        question: 'What is 0.0000789 in scientific notation? 🔍',
        options: ['7.89 × 10⁻⁵', '78.9 × 10⁻⁵', '7.89 × 10⁻⁴', '7.89 × 10⁵'],
        correctAnswer: '7.89 × 10⁻⁵',
        explanation: 'Move decimal point 5 places right to get 7.89, so multiply by 10⁻⁵.',
        wrongAnswerExplanations: {
            '78.9 × 10⁻⁵': 'First number should be between 1 and 10',
            '7.89 × 10⁻⁴': 'Decimal moved wrong number of places',
            '7.89 × 10⁵': 'Should be negative exponent for small number'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t2_qe7',
        type: 'mcq',
        question: 'Express 4,500,000,000 in scientific notation 📊',
        options: ['4.5 × 10⁹', '45 × 10⁸', '4.5 × 10⁸', '4.5 × 10¹⁰'],
        correctAnswer: '4.5 × 10⁹',
        explanation: 'Move decimal point 9 places left to get 4.5, so multiply by 10⁹.',
        wrongAnswerExplanations: {
            '45 × 10⁸': 'First number should be between 1 and 10',
            '4.5 × 10⁸': 'Moved decimal point wrong number of places',
            '4.5 × 10¹⁰': 'Moved decimal point too many places'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t2_qe8',
        type: 'mcq',
        question: 'Which is NOT in scientific notation? 🚫',
        options: ['3.14 × 10⁵', '31.4 × 10⁴', '3.14 × 10⁻³', '3.14 × 10⁰'],
        correctAnswer: '31.4 × 10⁴',
        explanation: 'Scientific notation requires first number between 1 and 10; 31.4 is greater than 10.',
        wrongAnswerExplanations: {
            '3.14 × 10⁵': 'This is correct scientific notation',
            '3.14 × 10⁻³': 'This is correct scientific notation',
            '3.14 × 10⁰': 'This is correct scientific notation'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t2_qe9',
        type: 'mcq',
        question: 'Convert 0.00000901 to scientific notation 📝',
        options: ['9.01 × 10⁻⁶', '9.01 × 10⁻⁵', '9.01 × 10⁶', '90.1 × 10⁻⁷'],
        correctAnswer: '9.01 × 10⁻⁶',
        explanation: 'Move decimal point 6 places right to get 9.01, so multiply by 10⁻⁶.',
        wrongAnswerExplanations: {
            '9.01 × 10⁻⁵': 'Moved decimal point wrong number of places',
            '9.01 × 10⁶': 'Should be negative exponent for small number',
            '90.1 × 10⁻⁷': 'First number should be between 1 and 10'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t2_qe10',
        type: 'mcq',
        question: 'What is 1.5 × 10⁴ written as a standard number? 🔢',
        options: ['15000', '1500', '150', '15'],
        correctAnswer: '15000',
        explanation: 'Move decimal point 4 places right: 1.5 → 15.0 → 150.0 → 1500.0 → 15000',
        wrongAnswerExplanations: {
            '1500': 'Moved decimal point only 3 places',
            '150': 'Moved decimal point only 2 places',
            '15': 'Moved decimal point only 1 place'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t2_qe11',
        type: 'mcq',
        question: 'Which represents 0.000000456 in scientific notation? 🤔',
        options: ['4.56 × 10⁻⁷', '4.56 × 10⁻⁶', '4.56 × 10⁻⁸', '4.56 × 10⁷'],
        correctAnswer: '4.56 × 10⁻⁷',
        explanation: 'Move decimal point 7 places right to get 4.56, so multiply by 10⁻⁷.',
        wrongAnswerExplanations: {
            '4.56 × 10⁻⁶': 'Moved decimal point wrong number of places',
            '4.56 × 10⁻⁸': 'Moved decimal point too many places',
            '4.56 × 10⁷': 'Should be negative exponent for small number'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t2_qe12',
        type: 'mcq',
        question: 'What is 8,400,000 in scientific notation? 📊',
        options: ['8.4 × 10⁶', '84 × 10⁵', '8.4 × 10⁵', '8.4 × 10⁷'],
        correctAnswer: '8.4 × 10⁶',
        explanation: 'Move decimal point 6 places left to get 8.4, so multiply by 10⁶.',
        wrongAnswerExplanations: {
            '84 × 10⁵': 'First number should be between 1 and 10',
            '8.4 × 10⁵': 'Moved decimal point wrong number of places',
            '8.4 × 10⁷': 'Moved decimal point too many places'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t2_qe13',
        type: 'mcq',
        question: 'Convert 0.0000000789 to scientific notation 🔍',
        options: ['7.89 × 10⁻⁸', '7.89 × 10⁻⁷', '7.89 × 10⁸', '78.9 × 10⁻⁹'],
        correctAnswer: '7.89 × 10⁻⁸',
        explanation: 'Move decimal point 8 places right to get 7.89, so multiply by 10⁻⁸.',
        wrongAnswerExplanations: {
            '7.89 × 10⁻⁷': 'Moved decimal point wrong number of places',
            '7.89 × 10⁸': 'Should be negative exponent for small number',
            '78.9 × 10⁻⁹': 'First number should be between 1 and 10'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t2_qe14',
        type: 'mcq',
        question: 'Which is equal to 3.6 × 10⁻⁴? 🤔',
        options: ['0.00036', '0.0036', '0.036', '0.00000036'],
        correctAnswer: '0.00036',
        explanation: 'Move decimal point 4 places left: 3.6 → 0.36 → 0.036 → 0.0036 → 0.00036',
        wrongAnswerExplanations: {
            '0.0036': 'Moved decimal point only 3 places',
            '0.036': 'Moved decimal point only 2 places',
            '0.00000036': 'Moved decimal point too many places'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t2_qe15',
        type: 'mcq',
        question: 'What is 2,000,000,000 in scientific notation? 📝',
        options: ['2.0 × 10⁹', '2.0 × 10⁸', '20 × 10⁸', '2.0 × 10¹⁰'],
        correctAnswer: '2.0 × 10⁹',
        explanation: 'Move decimal point 9 places left to get 2.0, so multiply by 10⁹.',
        wrongAnswerExplanations: {
            '2.0 × 10⁸': 'Moved decimal point wrong number of places',
            '20 × 10⁸': 'First number should be between 1 and 10',
            '2.0 × 10¹⁰': 'Moved decimal point too many places'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t2_qe16',
        type: 'mcq',
        question: 'Which number is in scientific notation? 🔍',
        options: ['5.67 × 10⁴', '56.7 × 10³', '0.567 × 10⁵', '567 × 10¹'],
        correctAnswer: '5.67 × 10⁴',
        explanation: 'Scientific notation has first number between 1 and 10; only 5.67 × 10⁴ meets this requirement.',
        wrongAnswerExplanations: {
            '56.7 × 10³': 'First number is greater than 10',
            '0.567 × 10⁵': 'First number is less than 1',
            '567 × 10¹': 'First number is greater than 10'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t2_qe17',
        type: 'mcq',
        question: 'Express 0.000000000456 in scientific notation 📊',
        options: ['4.56 × 10⁻¹⁰', '4.56 × 10⁻⁹', '4.56 × 10¹⁰', '45.6 × 10⁻¹¹'],
        correctAnswer: '4.56 × 10⁻¹⁰',
        explanation: 'Move decimal point 10 places right to get 4.56, so multiply by 10⁻¹⁰.',
        wrongAnswerExplanations: {
            '4.56 × 10⁻⁹': 'Moved decimal point wrong number of places',
            '4.56 × 10¹⁰': 'Should be negative exponent for small number',
            '45.6 × 10⁻¹¹': 'First number should be between 1 and 10'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t2_qe18',
        type: 'mcq',
        question: 'What is 6.7 × 10⁻³ as a standard number? 🔢',
        options: ['0.0067', '0.067', '0.00067', '0.67'],
        correctAnswer: '0.0067',
        explanation: 'Move decimal point 3 places left: 6.7 → 0.67 → 0.067 → 0.0067',
        wrongAnswerExplanations: {
            '0.067': 'Moved decimal point only 2 places',
            '0.00067': 'Moved decimal point too many places',
            '0.67': 'Moved decimal point only 1 place'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t2_qe19',
        type: 'mcq',
        question: 'Which represents 34,000 in scientific notation? 🤔',
        options: ['3.4 × 10⁴', '34 × 10³', '3.4 × 10³', '3.4 × 10⁵'],
        correctAnswer: '3.4 × 10⁴',
        explanation: 'Move decimal point 4 places left to get 3.4, so multiply by 10⁴.',
        wrongAnswerExplanations: {
            '34 × 10³': 'First number should be between 1 and 10',
            '3.4 × 10³': 'Moved decimal point wrong number of places',
            '3.4 × 10⁵': 'Moved decimal point too many places'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t2_qe20',
        type: 'mcq',
        question: 'What is 9.8 × 10⁻² written as a standard number? 📝',
        options: ['0.098', '0.98', '0.0098', '9.8'],
        correctAnswer: '0.098',
        explanation: 'Move decimal point 2 places left: 9.8 → 0.98 → 0.098',
        wrongAnswerExplanations: {
            '0.98': 'Moved decimal point only 1 place',
            '0.0098': 'Moved decimal point too many places',
            '9.8': 'Did not move decimal point'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    }
]; 