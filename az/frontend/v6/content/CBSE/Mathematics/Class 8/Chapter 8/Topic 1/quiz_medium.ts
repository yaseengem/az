import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch8_t1_qm1',
        type: 'mcq',
        question: 'In the expression 3x²y + 2xy² - 5y² + 7, how many terms contain the variable y?',
        options: ['3', '2', '4', '1'],
        correctAnswer: '3',
        explanation: '3x²y, 2xy², and -5y² contain y. 📝',
        wrongAnswerExplanations: {
            '2': 'All terms except 7 contain y.',
            '4': 'The constant term 7 does not contain y.',
            '1': 'There are three terms containing y.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch8_t1_qm2',
        type: 'mcq',
        question: 'What is the coefficient of x²y in the term -3x²y?',
        options: ['-3', '3', '-3x²', '-3y'],
        correctAnswer: '-3',
        explanation: '-3 is the numerical factor multiplying x²y. 🔢',
        wrongAnswerExplanations: {
            '3': 'The negative sign makes it -3, not 3.',
            '-3x²': 'This includes part of the variable term.',
            '-3y': 'This includes part of the variable term.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch8_t1_qm3',
        type: 'mcq',
        question: 'Which expression has the highest degree term?',
        options: ['x³y²', 'x²y²z', 'x⁴', 'xy³'],
        correctAnswer: 'x²y²z',
        explanation: 'x²y²z has degree 5 (2 + 2 + 1), highest among all options. 📊',
        wrongAnswerExplanations: {
            'x³y²': 'Degree is 5 (3 + 2), same as x²y²z.',
            'x⁴': 'Degree is 4.',
            'xy³': 'Degree is 4 (1 + 3).'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch8_t1_qm4',
        type: 'mcq',
        question: 'In 5x²y - 3xy² + 2x - 7, which terms are like terms?',
        options: ['None of them', '5x²y and -3xy²', '2x and -7', '5x²y and 2x'],
        correctAnswer: 'None of them',
        explanation: 'No terms have the same variables with same powers. 🎯',
        wrongAnswerExplanations: {
            '5x²y and -3xy²': 'These terms have different powers of x and y.',
            '2x and -7': 'One has a variable, the other is a constant.',
            '5x²y and 2x': 'These terms have different variables and powers.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch8_t1_qm5',
        type: 'mcq',
        question: 'What is the degree of the expression x³y + xy² - y³ + 5?',
        options: ['3', '4', '2', '1'],
        correctAnswer: '3',
        explanation: 'The highest sum of powers in any term is 3. 📈',
        wrongAnswerExplanations: {
            '4': 'No term has total degree 4.',
            '2': 'Several terms have degree higher than 2.',
            '1': 'Several terms have degree higher than 1.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch8_t1_qm6',
        type: 'mcq',
        question: 'In the expression 2x²y³ - 4xy² + 3x - 5, how many terms have coefficient greater than 2?',
        options: ['2', '1', '3', '0'],
        correctAnswer: '2',
        explanation: '2x²y³ and 3x have coefficients > 2. 💫',
        wrongAnswerExplanations: {
            '1': 'Both 2x²y³ and 3x have coefficients > 2.',
            '3': 'Only two terms have coefficients > 2.',
            '0': 'There are two terms with coefficients > 2.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch8_t1_qm7',
        type: 'mcq',
        question: 'Which of these is a trinomial?',
        options: ['x² - 2x + 1', 'x² + 1', 'x³', 'x + y + z + 2'],
        correctAnswer: 'x² - 2x + 1',
        explanation: 'x² - 2x + 1 has exactly three terms. 🔍',
        wrongAnswerExplanations: {
            'x² + 1': 'This is a binomial (two terms).',
            'x³': 'This is a monomial (one term).',
            'x + y + z + 2': 'This has four terms (quadrinomial).'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch8_t1_qm8',
        type: 'mcq',
        question: 'What is the coefficient of x²y in the expression 3x²y - 2xy² + x²y + 5?',
        options: ['4', '3', '1', '2'],
        correctAnswer: '4',
        explanation: 'Combining like terms 3x²y + x²y gives coefficient 4. ➕',
        wrongAnswerExplanations: {
            '3': 'This is only the coefficient of the first x²y term.',
            '1': 'This is only the coefficient of the second x²y term.',
            '2': 'This is the coefficient of xy² term.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch8_t1_qm9',
        type: 'mcq',
        question: 'Which term has the same degree as x²y³?',
        options: ['xy⁴', 'x³y²', 'x⁵', 'x⁴y'],
        correctAnswer: 'x³y²',
        explanation: 'Both x²y³ and x³y² have degree 5. 🎨',
        wrongAnswerExplanations: {
            'xy⁴': 'Degree is 5 but not same arrangement.',
            'x⁵': 'Degree is 5 but single variable.',
            'x⁴y': 'Degree is 5 but different distribution.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch8_t1_qm10',
        type: 'mcq',
        question: 'In -2x³y² + 3xy - y + 8, what is the constant term?',
        options: ['8', '-2', '-1', '3'],
        correctAnswer: '8',
        explanation: '8 is the only term without variables. 🔢',
        wrongAnswerExplanations: {
            '-2': 'This is a coefficient, not a constant term.',
            '-1': 'The coefficient of y is -1, not a constant term.',
            '3': 'This is a coefficient, not a constant term.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch8_t1_qm11',
        type: 'mcq',
        question: 'Which expression contains only like terms?',
        options: ['3x² - 5x² + 2x²', '2xy + 3x + y', 'x + y + z', '2x + 3y²'],
        correctAnswer: '3x² - 5x² + 2x²',
        explanation: 'All terms have x². 🎯',
        wrongAnswerExplanations: {
            '2xy + 3x + y': 'These terms have different variables.',
            'x + y + z': 'Each term has different variables.',
            '2x + 3y²': 'These terms have different variables and powers.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch8_t1_qm12',
        type: 'mcq',
        question: 'What is the degree of xy² × x²y?',
        options: ['4', '3', '5', '2'],
        correctAnswer: '4',
        explanation: 'Multiply powers: x³y³, total degree = 3 + 3 = 4. 📊',
        wrongAnswerExplanations: {
            '3': 'This is only the power of x or y separately.',
            '5': 'The total degree is not 5.',
            '2': 'This is less than the actual degree.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch8_t1_qm13',
        type: 'mcq',
        question: 'In 5x²y - 3xy² + 2x - 7, how many terms have degree 2?',
        options: ['2', '1', '3', '0'],
        correctAnswer: '2',
        explanation: '5x²y and -3xy² both have degree 2. 🔍',
        wrongAnswerExplanations: {
            '1': 'Both 5x²y and -3xy² have degree 2.',
            '3': 'Only two terms have degree 2.',
            '0': 'There are two terms with degree 2.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch8_t1_qm14',
        type: 'mcq',
        question: 'Which term is not a monomial?',
        options: ['x + y', '5x²y', '-3xy', '2x³'],
        correctAnswer: 'x + y',
        explanation: 'x + y has two terms, not a single term. ✌️',
        wrongAnswerExplanations: {
            '5x²y': 'This is a single term with coefficient and variables.',
            '-3xy': 'This is a single term with coefficient and variables.',
            '2x³': 'This is a single term with coefficient and variable.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch8_t1_qm15',
        type: 'mcq',
        question: 'What is the coefficient of the term with highest degree in 2x³ + 3x²y - 5xy² + 7?',
        options: ['2', '3', '-5', '7'],
        correctAnswer: '2',
        explanation: '2x³ has the highest degree, coefficient is 2. 💫',
        wrongAnswerExplanations: {
            '3': 'x²y has lower degree than x³.',
            '-5': 'xy² has lower degree than x³.',
            '7': 'Constant term has degree 0.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch8_t1_qm16',
        type: 'mcq',
        question: 'How many variables are in the term 3x²y²z³?',
        options: ['3', '2', '4', '1'],
        correctAnswer: '3',
        explanation: 'The variables are x, y, and z. 📝',
        wrongAnswerExplanations: {
            '2': 'There are three different variables: x, y, and z.',
            '4': 'There are only three different variables.',
            '1': 'There are three different variables.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch8_t1_qm17',
        type: 'mcq',
        question: 'Which expression has the most number of terms?',
        options: ['x³ + x² + x + 1', 'x²y + xy²', '2x + 3y - 5', '5x²'],
        correctAnswer: 'x³ + x² + x + 1',
        explanation: 'It has 4 terms, more than other options. 🔢',
        wrongAnswerExplanations: {
            'x²y + xy²': 'This has only 2 terms.',
            '2x + 3y - 5': 'This has 3 terms.',
            '5x²': 'This has only 1 term.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch8_t1_qm18',
        type: 'mcq',
        question: 'In the expression 2x²y + xy - 3y + 5, what is the coefficient of the term with lowest degree?',
        options: ['-3', '2', '1', '5'],
        correctAnswer: '-3',
        explanation: '-3y has degree 1, lowest among variable terms. 📊',
        wrongAnswerExplanations: {
            '2': '2x²y has higher degree.',
            '1': 'xy has higher degree.',
            '5': '5 has degree 0, but we are looking at variable terms.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch8_t1_qm19',
        type: 'mcq',
        question: 'Which pair shows coefficients of like terms?',
        options: ['2x² and -5x²', '3xy and 2yx', '4x and 4y', '2x³ and 3x²'],
        correctAnswer: '3xy and 2yx',
        explanation: 'xy and yx represent the same term. 🎯',
        wrongAnswerExplanations: {
            '2x² and -5x²': 'These are like terms but not the answer.',
            '4x and 4y': 'These have different variables.',
            '2x³ and 3x²': 'These have different powers of x.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch8_t1_qm20',
        type: 'mcq',
        question: 'What is the sum of the coefficients in 2x² - 3xy + 5x - 7?',
        options: ['-3', '-2', '0', '3'],
        correctAnswer: '-3',
        explanation: '2 + (-3) + 5 + (-7) = -3. ➕',
        wrongAnswerExplanations: {
            '-2': 'The sum is -3, not -2.',
            '0': 'The sum is negative.',
            '3': 'The sum is negative, not positive.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    }
];
