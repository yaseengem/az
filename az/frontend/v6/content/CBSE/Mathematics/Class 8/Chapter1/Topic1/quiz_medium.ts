import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch1_t1_qm1',
        type: 'mcq',
        question: 'If a and b are rational numbers, which of the following is always true?',
        options: ['a + b is rational', 'a × b is irrational', 'a - b is irrational', 'a ÷ b is always irrational'],
        correctAnswer: 'a + b is rational',
        explanation: 'The sum of two rational numbers is always rational. ➕',
        wrongAnswerExplanations: {
            'a × b is irrational': 'Product of rationals is rational.',
            'a - b is irrational': 'Difference of rationals is rational.',
            'a ÷ b is always irrational': 'Quotient of rationals (b ≠ 0) is rational.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch1_t1_qm2',
        type: 'mcq',
        question: 'Which of the following is the multiplicative inverse of -2/9?',
        options: ['-9/2', '9/2', '2/9', '-2/9'],
        correctAnswer: '-9/2',
        explanation: 'Inverse of a/b is b/a, keep the sign. 🔄',
        wrongAnswerExplanations: {
            '9/2': 'Sign must match the original.',
            '2/9': 'Inverse is -9/2.',
            '-2/9': 'Inverse is -9/2.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch1_t1_qm3',
        type: 'mcq',
        question: 'Which property is shown by: (a × b) × c = a × (b × c) for rational numbers?',
        options: ['Commutative', 'Associative', 'Closure', 'Identity'],
        correctAnswer: 'Associative',
        explanation: 'Grouping does not affect the product. 🤝',
        wrongAnswerExplanations: {
            'Commutative': 'Commutative is about order, not grouping.',
            'Closure': 'Closure is about result being rational.',
            'Identity': 'Identity involves 1.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch1_t1_qm4',
        type: 'mcq',
        question: 'Which of the following is NOT a rational number: 2/5, 0.121212..., √7, -3?',
        options: ['2/5', '0.121212...', '√7', '-3'],
        correctAnswer: '√7',
        explanation: '√7 is irrational, cannot be written as p/q. 🧩',
        wrongAnswerExplanations: {
            '2/5': '2/5 is rational.',
            '0.121212...': 'Repeating decimals are rational.',
            '-3': '-3 is rational.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch1_t1_qm5',
        type: 'mcq',
        question: 'If x = 3/4 and y = 5/6, what is x × y?',
        options: ['15/24', '1/2', '5/8', '3/10'],
        correctAnswer: '5/8',
        explanation: '3/4 × 5/6 = 15/24 = 5/8. ✖️',
        wrongAnswerExplanations: {
            '15/24': 'Simplify the fraction.',
            '1/2': 'Incorrect multiplication.',
            '3/10': 'Incorrect multiplication.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch1_t1_qm6',
        type: 'mcq',
        question: 'Which of the following is the additive inverse of 7/11?',
        options: ['-7/11', '11/7', '7/11', '-11/7'],
        correctAnswer: '-7/11',
        explanation: 'Additive inverse of a is -a. ➖',
        wrongAnswerExplanations: {
            '11/7': 'Inverse is -7/11.',
            '7/11': 'Inverse is -7/11.',
            '-11/7': 'Inverse is -7/11.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch1_t1_qm7',
        type: 'mcq',
        question: 'Which property is shown by: a + (b + c) = (a + b) + c?',
        options: ['Commutative', 'Associative', 'Closure', 'Identity'],
        correctAnswer: 'Associative',
        explanation: 'Grouping does not affect the sum. 🤝',
        wrongAnswerExplanations: {
            'Commutative': 'Commutative is about order.',
            'Closure': 'Closure is about result being rational.',
            'Identity': 'Identity involves 0.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch1_t1_qm8',
        type: 'mcq',
        question: 'Which of the following is a rational number between 0 and 1?',
        options: ['1/3', 'π', '√2', '2'],
        correctAnswer: '1/3',
        explanation: '1/3 is rational and between 0 and 1. 📏',
        wrongAnswerExplanations: {
            'π': 'π is irrational.',
            '√2': '√2 is irrational.',
            '2': '2 is greater than 1.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch1_t1_qm9',
        type: 'mcq',
        question: 'If a = 1/2, what is the multiplicative inverse of a?',
        options: ['2', '-2', '1/2', '-1/2'],
        correctAnswer: '2',
        explanation: 'Inverse of 1/2 is 2. 🔄',
        wrongAnswerExplanations: {
            '-2': 'Inverse is positive 2.',
            '1/2': 'Inverse is 2.',
            '-1/2': 'Inverse is 2.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch1_t1_qm10',
        type: 'mcq',
        question: 'Which of the following is NOT a property of rational numbers?',
        options: ['Closure', 'Commutativity', 'Associativity', 'Irrationality'],
        correctAnswer: 'Irrationality',
        explanation: 'Irrationality is not a property of rationals. 🚫',
        wrongAnswerExplanations: {
            'Closure': 'Closure is a property.',
            'Commutativity': 'Commutativity is a property.',
            'Associativity': 'Associativity is a property.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch1_t1_qm11',
        type: 'mcq',
        question: 'If x = 2/3 and y = 3/2, what is x × y?',
        options: ['1', '2', '3', '5/6'],
        correctAnswer: '1',
        explanation: '2/3 × 3/2 = 1. ✖️',
        wrongAnswerExplanations: {
            '2': 'Incorrect multiplication.',
            '3': 'Incorrect multiplication.',
            '5/6': 'Incorrect multiplication.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch1_t1_qm12',
        type: 'mcq',
        question: 'Which of the following is a rational number: 0.272727..., π, √11, 1/9?',
        options: ['0.272727...', 'π', '√11', '1/9'],
        correctAnswer: '0.272727...',
        explanation: 'Repeating decimals are rational. 🔢',
        wrongAnswerExplanations: {
            'π': 'π is irrational.',
            '√11': '√11 is irrational.',
            '1/9': '1/9 is rational, but 0.272727... is the repeating decimal.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch1_t1_qm13',
        type: 'mcq',
        question: 'If a = 5/8, what is the additive inverse of a?',
        options: ['-5/8', '8/5', '5/8', '-8/5'],
        correctAnswer: '-5/8',
        explanation: 'Additive inverse of a is -a. ➖',
        wrongAnswerExplanations: {
            '8/5': 'Inverse is -5/8.',
            '5/8': 'Inverse is -5/8.',
            '-8/5': 'Inverse is -5/8.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch1_t1_qm14',
        type: 'mcq',
        question: 'Which of the following is a rational number: 0, -1, 2/7, all of these?',
        options: ['0', '-1', '2/7', 'all of these'],
        correctAnswer: 'all of these',
        explanation: 'All are rational numbers. 🔢',
        wrongAnswerExplanations: {
            '0': 'All options are rational.',
            '-1': 'All options are rational.',
            '2/7': 'All options are rational.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch1_t1_qm15',
        type: 'mcq',
        question: 'If a = 3/5 and b = 2/3, what is a - b?',
        options: ['-1/15', '1/15', '5/8', '8/15'],
        correctAnswer: '-1/15',
        explanation: '3/5 - 2/3 = 9/15 - 10/15 = -1/15. ➖',
        wrongAnswerExplanations: {
            '1/15': 'Incorrect subtraction.',
            '5/8': 'Incorrect subtraction.',
            '8/15': 'Incorrect subtraction.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch1_t1_qm16',
        type: 'mcq',
        question: 'Which of the following is the result of (4/7) ÷ (2/3)?',
        options: ['6/7', '7/6', '8/21', '12/7'],
        correctAnswer: '6/7',
        explanation: '4/7 ÷ 2/3 = 4/7 × 3/2 = 12/14 = 6/7. ➗',
        wrongAnswerExplanations: {
            '7/6': 'Incorrect division.',
            '8/21': 'Incorrect division.',
            '12/7': 'Incorrect division.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch1_t1_qm17',
        type: 'mcq',
        question: 'Which of the following is a rational number: √16, π, 1/5, both √16 and 1/5?',
        options: ['√16', 'π', '1/5', 'both √16 and 1/5'],
        correctAnswer: 'both √16 and 1/5',
        explanation: '√16 = 4 (rational), 1/5 is rational. 🧮',
        wrongAnswerExplanations: {
            '√16': '1/5 is also rational.',
            'π': 'π is irrational.',
            '1/5': '√16 is also rational.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch1_t1_qm18',
        type: 'mcq',
        question: 'If a = -2/3, what is the additive inverse of a?',
        options: ['2/3', '-2/3', '3/2', '-3/2'],
        correctAnswer: '2/3',
        explanation: 'Additive inverse of -2/3 is 2/3. ➖',
        wrongAnswerExplanations: {
            '-2/3': 'Inverse is 2/3.',
            '3/2': 'Inverse is 2/3.',
            '-3/2': 'Inverse is 2/3.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch1_t1_qm19',
        type: 'mcq',
        question: 'Which of the following is a rational number: 0.5, 1/2, both, neither?',
        options: ['0.5', '1/2', 'both', 'neither'],
        correctAnswer: 'both',
        explanation: '0.5 = 1/2, both are rational. 🔢',
        wrongAnswerExplanations: {
            '0.5': '1/2 is also rational.',
            '1/2': '0.5 is also rational.',
            'neither': 'Both are rational.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch1_t1_qm20',
        type: 'mcq',
        question: 'If a = 4/9 and b = 3/4, what is a ÷ b?',
        options: ['16/27', '27/16', '1/3', '3/13'],
        correctAnswer: '16/27',
        explanation: '4/9 ÷ 3/4 = 4/9 × 4/3 = 16/27. ➗',
        wrongAnswerExplanations: {
            '27/16': 'Incorrect division.',
            '1/3': 'Incorrect division.',
            '3/13': 'Incorrect division.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    }
]; 