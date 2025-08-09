import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch8_t1_qe1',
        type: 'mcq',
        question: 'In the term 5x², what is the coefficient?',
        options: ['5', 'x²', '2', 'x'],
        correctAnswer: '5',
        explanation: 'The coefficient is the numerical factor 5 that multiplies the variable part x². 🔢',
        wrongAnswerExplanations: {
            'x²': 'x² is the variable part, not the coefficient.',
            '2': 'The 2 in x² is the power/exponent, not the coefficient.',
            'x': 'x is part of the variable term, not the coefficient.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch8_t1_qe2',
        type: 'mcq',
        question: 'Which of these is a constant term?',
        options: ['7', '3y', 'x²', 'pq'],
        correctAnswer: '7',
        explanation: 'A constant term has no variables, only a number. 💡',
        wrongAnswerExplanations: {
            '3y': 'This is a variable term containing y.',
            'x²': 'This is a variable term containing x.',
            'pq': 'This is a variable term containing p and q.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch8_t1_qe3',
        type: 'mcq',
        question: 'In the expression 3x + 4y + 5, how many terms are there?',
        options: ['3', '2', '4', '1'],
        correctAnswer: '3',
        explanation: 'The expression has three terms: 3x, 4y, and 5. 📝',
        wrongAnswerExplanations: {
            '2': 'There are three distinct terms separated by + signs.',
            '4': 'The expression only contains three terms.',
            '1': 'The expression is not a single term.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch8_t1_qe4',
        type: 'mcq',
        question: 'What is the coefficient of y in -y?',
        options: ['-1', '1', '0', 'y'],
        correctAnswer: '-1',
        explanation: '-y is the same as -1y, so the coefficient is -1. ➖',
        wrongAnswerExplanations: {
            '1': 'The negative sign makes the coefficient -1, not 1.',
            '0': 'If the coefficient were 0, the term would be 0.',
            'y': 'y is the variable, not the coefficient.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch8_t1_qe5',
        type: 'mcq',
        question: 'In 7xy, what are the variables?',
        options: ['x and y', '7', '7x', '7y'],
        correctAnswer: 'x and y',
        explanation: 'The variables are the letters x and y; 7 is the coefficient. 📊',
        wrongAnswerExplanations: {
            '7': '7 is the coefficient, not a variable.',
            '7x': 'This includes the coefficient; only x and y are variables.',
            '7y': 'This includes the coefficient; only x and y are variables.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch8_t1_qe6',
        type: 'mcq',
        question: 'Which expression has exactly two terms?',
        options: ['x + 5', 'x + y + z', '3', 'xy'],
        correctAnswer: 'x + 5',
        explanation: 'x + 5 has two terms: x and 5. ✌️',
        wrongAnswerExplanations: {
            'x + y + z': 'This expression has three terms.',
            '3': 'This is a single term.',
            'xy': 'This is a single term with two variables.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch8_t1_qe7',
        type: 'mcq',
        question: 'What type of term is 8?',
        options: ['Constant term', 'Variable term', 'Coefficient', 'Like term'],
        correctAnswer: 'Constant term',
        explanation: '8 is a constant term as it has no variables. 🎯',
        wrongAnswerExplanations: {
            'Variable term': 'A variable term must contain at least one variable.',
            'Coefficient': 'A coefficient multiplies a variable part.',
            'Like term': 'Like terms must have the same variables with same powers.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch8_t1_qe8',
        type: 'mcq',
        question: 'In 4x³, what is x³?',
        options: ['Variable part', 'Coefficient', 'Constant', 'Term'],
        correctAnswer: 'Variable part',
        explanation: 'x³ is the variable part, while 4 is the coefficient. 🔍',
        wrongAnswerExplanations: {
            'Coefficient': 'The coefficient is 4, not x³.',
            'Constant': 'x³ contains a variable, so it cannot be a constant.',
            'Term': 'The entire expression 4x³ is the term.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch8_t1_qe9',
        type: 'mcq',
        question: 'What is the coefficient of x in x?',
        options: ['1', '0', 'x', 'None'],
        correctAnswer: '1',
        explanation: 'When no coefficient is written, it is understood as 1. 💫',
        wrongAnswerExplanations: {
            '0': 'If the coefficient were 0, the term would be 0.',
            'x': 'x is the variable, not the coefficient.',
            'None': 'Every term has a coefficient, even if not written.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch8_t1_qe10',
        type: 'mcq',
        question: 'Which of these is a like term to 3x²?',
        options: ['7x²', 'x³', '3x', '3y²'],
        correctAnswer: '7x²',
        explanation: 'Like terms have the same variables raised to the same powers. 🎨',
        wrongAnswerExplanations: {
            'x³': 'The power of x is different (3 instead of 2).',
            '3x': 'The power of x is different (1 instead of 2).',
            '3y²': 'The variable is different (y instead of x).'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch8_t1_qe11',
        type: 'mcq',
        question: 'In the expression 5x + 3y + 2, what is 2?',
        options: ['Constant term', 'Coefficient', 'Variable', 'Like term'],
        correctAnswer: 'Constant term',
        explanation: '2 is a constant term as it stands alone without variables. 🔢',
        wrongAnswerExplanations: {
            'Coefficient': 'A coefficient multiplies a variable part.',
            'Variable': '2 does not contain any letters/variables.',
            'Like term': 'Like terms must have the same variables.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch8_t1_qe12',
        type: 'mcq',
        question: 'What is the degree of the term 4xy²?',
        options: ['3', '2', '1', '4'],
        correctAnswer: '3',
        explanation: 'The degree is the sum of powers of variables: 1 + 2 = 3. 📈',
        wrongAnswerExplanations: {
            '2': 'This is only the power of y, not the total degree.',
            '1': 'This is only the power of x.',
            '4': 'This is the coefficient, not the degree.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch8_t1_qe13',
        type: 'mcq',
        question: 'Which expression is a monomial?',
        options: ['5x²y', '3x + 2', 'a - b', 'p + q + r'],
        correctAnswer: '5x²y',
        explanation: 'A monomial is a single term with variables and coefficient. 🎯',
        wrongAnswerExplanations: {
            '3x + 2': 'This is a binomial (two terms).',
            'a - b': 'This is a binomial (two terms).',
            'p + q + r': 'This is a trinomial (three terms).'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch8_t1_qe14',
        type: 'mcq',
        question: 'In 2x + 3y + 4z + 5, how many variable terms are there?',
        options: ['3', '4', '2', '1'],
        correctAnswer: '3',
        explanation: '2x, 3y, and 4z are variable terms; 5 is a constant term. 📝',
        wrongAnswerExplanations: {
            '4': 'The constant term 5 is not a variable term.',
            '2': 'There are three terms containing variables.',
            '1': 'There are three terms containing variables.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch8_t1_qe15',
        type: 'mcq',
        question: 'What is the coefficient of y² in -y²?',
        options: ['-1', '1', '2', '0'],
        correctAnswer: '-1',
        explanation: '-y² is the same as -1y², so the coefficient is -1. ➖',
        wrongAnswerExplanations: {
            '1': 'The negative sign makes the coefficient -1.',
            '2': 'This is the power of y, not the coefficient.',
            '0': 'If the coefficient were 0, the term would be 0.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch8_t1_qe16',
        type: 'mcq',
        question: 'Which term has the highest degree?',
        options: ['xyz', 'x²', 'y³', '5'],
        correctAnswer: 'xyz',
        explanation: 'xyz has degree 3 (1 + 1 + 1), higher than others. 📊',
        wrongAnswerExplanations: {
            'x²': 'x² has degree 2.',
            'y³': 'y³ has degree 3, same as xyz.',
            '5': 'Constants have degree 0.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch8_t1_qe17',
        type: 'mcq',
        question: 'What type of expression is x + y?',
        options: ['Binomial', 'Monomial', 'Trinomial', 'Constant'],
        correctAnswer: 'Binomial',
        explanation: 'A binomial has exactly two terms. ✌️',
        wrongAnswerExplanations: {
            'Monomial': 'A monomial has only one term.',
            'Trinomial': 'A trinomial has three terms.',
            'Constant': 'Constants do not contain variables.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch8_t1_qe18',
        type: 'mcq',
        question: 'In 3x²y, what is the coefficient of x²y?',
        options: ['3', 'x²', 'y', 'x²y'],
        correctAnswer: '3',
        explanation: '3 is the numerical factor multiplying x²y. 🔢',
        wrongAnswerExplanations: {
            'x²': 'x² is part of the variable term.',
            'y': 'y is part of the variable term.',
            'x²y': 'This is the variable part, not the coefficient.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch8_t1_qe19',
        type: 'mcq',
        question: 'Which of these terms contains a coefficient?',
        options: ['-5xy', 'x', 'y²', 'z'],
        correctAnswer: '-5xy',
        explanation: '-5xy has coefficient -5; others have coefficient 1. 💫',
        wrongAnswerExplanations: {
            'x': 'x has coefficient 1 (understood).',
            'y²': 'y² has coefficient 1 (understood).',
            'z': 'z has coefficient 1 (understood).'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch8_t1_qe20',
        type: 'mcq',
        question: 'What makes terms "like terms"?',
        options: ['Same variables with same powers', 'Same coefficients', 'Same variables only', 'Same powers only'],
        correctAnswer: 'Same variables with same powers',
        explanation: 'Like terms must have identical variable parts. 🎯',
        wrongAnswerExplanations: {
            'Same coefficients': 'Coefficients can be different for like terms.',
            'Same variables only': 'The powers must also be the same.',
            'Same powers only': 'The variables must also be the same.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    }
];
