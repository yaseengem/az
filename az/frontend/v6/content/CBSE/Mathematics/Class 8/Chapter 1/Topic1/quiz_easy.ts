import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch1_t1_qe1',
        type: 'mcq',
        question: 'Which of the following is a rational number?',
        options: ['√2', 'π', '3/4', 'e'],
        correctAnswer: '3/4',
        explanation: '3/4 is a rational number because it can be written as a fraction of two integers. 🧮',
        wrongAnswerExplanations: {
            '√2': '√2 is an irrational number.',
            'π': 'π is an irrational number.',
            'e': 'e is an irrational number.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch1_t1_qe2',
        type: 'mcq',
        question: 'What is the additive identity for rational numbers?',
        options: ['1', '0', '-1', 'Any number'],
        correctAnswer: '0',
        explanation: '0 is the additive identity for rational numbers. ➕',
        wrongAnswerExplanations: {
            '1': '1 is the multiplicative identity.',
            '-1': 'Additive identity is 0, not -1.',
            'Any number': 'Only 0 is the additive identity.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch1_t1_qe3',
        type: 'mcq',
        question: 'Which property is shown by: (2/3) + (4/5) = (4/5) + (2/3)?',
        options: ['Associative', 'Commutative', 'Closure', 'Identity'],
        correctAnswer: 'Commutative',
        explanation: 'Order does not matter in addition: commutative property. 🔄',
        wrongAnswerExplanations: {
            'Associative': 'Associative is about grouping, not order.',
            'Closure': 'Closure means result is rational, not order.',
            'Identity': 'Identity involves 0 or 1.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch1_t1_qe4',
        type: 'mcq',
        question: 'What is the multiplicative inverse of 5/7?',
        options: ['7/5', '-5/7', '-7/5', '1/5'],
        correctAnswer: '7/5',
        explanation: 'Multiplicative inverse of a/b is b/a. 🔁',
        wrongAnswerExplanations: {
            '-5/7': 'Inverse is positive 7/5.',
            '-7/5': 'Inverse is positive 7/5.',
            '1/5': 'Inverse is 7/5.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch1_t1_qe5',
        type: 'mcq',
        question: 'Which operation is NOT always closed for rational numbers?',
        options: ['Addition', 'Multiplication', 'Division', 'Subtraction'],
        correctAnswer: 'Division',
        explanation: 'Division by 0 is not defined for rationals. 🚫',
        wrongAnswerExplanations: {
            'Addition': 'Addition is always closed.',
            'Multiplication': 'Multiplication is always closed.',
            'Subtraction': 'Subtraction is always closed.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch1_t1_qe6',
        type: 'mcq',
        question: 'Which of the following is the additive inverse of -3/8?',
        options: ['3/8', '-3/8', '8/3', '-8/3'],
        correctAnswer: '3/8',
        explanation: 'Additive inverse of a is -a. ➖',
        wrongAnswerExplanations: {
            '-3/8': 'Inverse of -3/8 is 3/8.',
            '8/3': 'Inverse is 3/8.',
            '-8/3': 'Inverse is 3/8.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch1_t1_qe7',
        type: 'mcq',
        question: 'Which of these is NOT a rational number?',
        options: ['-2', '0.25', '√5', '7/9'],
        correctAnswer: '√5',
        explanation: '√5 is irrational, cannot be written as p/q. 🧩',
        wrongAnswerExplanations: {
            '-2': '-2 is rational.',
            '0.25': '0.25 = 1/4, rational.',
            '7/9': '7/9 is rational.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch1_t1_qe8',
        type: 'mcq',
        question: 'What is the result of (3/4) × 1?',
        options: ['3/4', '1', '0', '4/3'],
        correctAnswer: '3/4',
        explanation: 'Multiplying by 1 gives the same number. 🆔',
        wrongAnswerExplanations: {
            '1': 'Multiplying by 1 keeps the number unchanged.',
            '0': 'Multiplying by 0 gives 0.',
            '4/3': '4/3 is not the result.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch1_t1_qe9',
        type: 'mcq',
        question: 'Which property is shown by: [(1/2) + (1/3)] + (1/4) = (1/2) + [(1/3) + (1/4)]?',
        options: ['Commutative', 'Associative', 'Closure', 'Identity'],
        correctAnswer: 'Associative',
        explanation: 'Grouping does not affect the sum: associative property. 🤝',
        wrongAnswerExplanations: {
            'Commutative': 'Commutative is about order, not grouping.',
            'Closure': 'Closure is about result being rational.',
            'Identity': 'Identity involves 0 or 1.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch1_t1_qe10',
        type: 'mcq',
        question: 'Which of the following is a rational number between 1/2 and 1?',
        options: ['2/3', '3/2', 'π', '√2'],
        correctAnswer: '2/3',
        explanation: '2/3 is between 1/2 and 1 and is rational. 📏',
        wrongAnswerExplanations: {
            '3/2': '3/2 is greater than 1.',
            'π': 'π is irrational.',
            '√2': '√2 is irrational.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch1_t1_qe11',
        type: 'mcq',
        question: 'What is the value of (0) + (5/7)?',
        options: ['0', '5/7', '1', '-5/7'],
        correctAnswer: '5/7',
        explanation: 'Adding 0 does not change the number. ➕',
        wrongAnswerExplanations: {
            '0': '0 is the additive identity, but the answer is 5/7.',
            '1': '1 is the multiplicative identity.',
            '-5/7': 'Negative is not the answer.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch1_t1_qe12',
        type: 'mcq',
        question: 'Which of the following is the multiplicative identity for rational numbers?',
        options: ['0', '1', '-1', 'Any number'],
        correctAnswer: '1',
        explanation: '1 is the multiplicative identity. ✖️',
        wrongAnswerExplanations: {
            '0': '0 is the additive identity.',
            '-1': 'Identity is 1, not -1.',
            'Any number': 'Only 1 is the multiplicative identity.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch1_t1_qe13',
        type: 'mcq',
        question: 'Which of these is a rational number: 0.333...?',
        options: ['Yes', 'No', 'Only if it ends', 'Only if it is negative'],
        correctAnswer: 'Yes',
        explanation: '0.333... = 1/3, which is rational. 🔢',
        wrongAnswerExplanations: {
            'No': 'Repeating decimals are rational.',
            'Only if it ends': 'Repeating decimals are rational.',
            'Only if it is negative': 'Sign does not affect rationality.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch1_t1_qe14',
        type: 'mcq',
        question: 'What is the result of (2/5) × (5/2)?',
        options: ['1', '0', '2', '5'],
        correctAnswer: '1',
        explanation: 'A number times its inverse is 1. 🔄',
        wrongAnswerExplanations: {
            '0': 'Multiplying by 0 gives 0.',
            '2': '2 is not the result.',
            '5': '5 is not the result.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch1_t1_qe15',
        type: 'mcq',
        question: 'Which of the following is NOT a property of rational numbers?',
        options: ['Closure', 'Commutativity', 'Associativity', 'Transcendence'],
        correctAnswer: 'Transcendence',
        explanation: 'Transcendence is not a property of rationals. 🚫',
        wrongAnswerExplanations: {
            'Closure': 'Closure is a property.',
            'Commutativity': 'Commutativity is a property.',
            'Associativity': 'Associativity is a property.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch1_t1_qe16',
        type: 'mcq',
        question: 'Which of the following is a rational number: π, 1/7, √3, 0.1010010001...?',
        options: ['π', '1/7', '√3', '0.1010010001...'],
        correctAnswer: '1/7',
        explanation: '1/7 is rational, others are not. 🧮',
        wrongAnswerExplanations: {
            'π': 'π is irrational.',
            '√3': '√3 is irrational.',
            '0.1010010001...': 'This is a non-repeating, non-terminating decimal.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch1_t1_qe17',
        type: 'mcq',
        question: 'If a = 2/3 and b = 3/4, what is a + b?',
        options: ['17/12', '5/7', '1', '6/7'],
        correctAnswer: '17/12',
        explanation: '2/3 + 3/4 = 8/12 + 9/12 = 17/12. ➕',
        wrongAnswerExplanations: {
            '5/7': 'Incorrect addition.',
            '1': 'Incorrect addition.',
            '6/7': 'Incorrect addition.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch1_t1_qe18',
        type: 'mcq',
        question: 'Which of the following is the result of (1/2) - (3/2)?',
        options: ['1', '-1', '0', '2'],
        correctAnswer: '-1',
        explanation: '1/2 - 3/2 = -1. ➖',
        wrongAnswerExplanations: {
            '1': 'Incorrect subtraction.',
            '0': 'Incorrect subtraction.',
            '2': 'Incorrect subtraction.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch1_t1_qe19',
        type: 'mcq',
        question: 'Which of the following is a rational number: 0, 1, -2, 3/5?',
        options: ['All of these', 'Only 0 and 1', 'Only 3/5', 'Only -2 and 0'],
        correctAnswer: 'All of these',
        explanation: 'All are rational numbers. 🔢',
        wrongAnswerExplanations: {
            'Only 0 and 1': 'All options are rational.',
            'Only 3/5': 'All options are rational.',
            'Only -2 and 0': 'All options are rational.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch1_t1_qe20',
        type: 'mcq',
        question: 'What is the result of (7/8) ÷ (1/4)?',
        options: ['7/2', '8/7', '1/2', '4/7'],
        correctAnswer: '7/2',
        explanation: '7/8 ÷ 1/4 = 7/8 × 4/1 = 28/8 = 7/2. ➗',
        wrongAnswerExplanations: {
            '8/7': 'Incorrect division.',
            '1/2': 'Incorrect division.',
            '4/7': 'Incorrect division.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    }
]; 