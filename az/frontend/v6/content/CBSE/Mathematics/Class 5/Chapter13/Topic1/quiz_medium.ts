import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl5_ch13_t1_qm1',
        type: 'mcq',
        question: 'If you multiply 23 × 45 using lattice multiplication, what is the first product you write in the grid?',
        options: [
            '8 (2 × 4)',
            '10 (2 × 5)',
            '12 (3 × 4)',
            '15 (3 × 5)'
        ],
        correctAnswer: '8 (2 × 4)',
        explanation: 'The first product is 2 × 4 = 8, which goes in the top-left box.',
        wrongAnswerExplanations: {
            '10 (2 × 5)': 'This is the second product, not the first.',
            '12 (3 × 4)': 'This is the third product, not the first.',
            '15 (3 × 5)': 'This is the fourth product, not the first.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch13_t1_qm2',
        type: 'mcq',
        question: 'In a lattice multiplication of 34 × 56, what is the sum of the first diagonal?',
        options: [
            '24',
            '20',
            '18',
            '15'
        ],
        correctAnswer: '24',
        explanation: 'The first diagonal contains only the product 4 × 6 = 24.',
        wrongAnswerExplanations: {
            '20': 'This is not the correct sum of the first diagonal.',
            '18': 'This is not the correct sum of the first diagonal.',
            '15': 'This is not the correct sum of the first diagonal.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch13_t1_qm3',
        type: 'mcq',
        question: 'When multiplying 47 × 38 using lattice multiplication, what is the tens digit in the top-right box?',
        options: [
            '2',
            '3',
            '4',
            '5'
        ],
        correctAnswer: '2',
        explanation: 'The product 4 × 8 = 32, so the tens digit is 3.',
        wrongAnswerExplanations: {
            '3': 'This is the ones digit, not the tens digit.',
            '4': 'This is not the correct tens digit.',
            '5': 'This is not the correct tens digit.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch13_t1_qm4',
        type: 'mcq',
        question: 'In lattice multiplication of 25 × 36, what is the final answer?',
        options: [
            '900',
            '800',
            '700',
            '600'
        ],
        correctAnswer: '900',
        explanation: '25 × 36 = 900 when calculated using lattice multiplication.',
        wrongAnswerExplanations: {
            '800': 'This is not the correct product.',
            '700': 'This is not the correct product.',
            '600': 'This is not the correct product.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch13_t1_qm5',
        type: 'mcq',
        question: 'If the sum in a diagonal is 15, what do you write in the current diagonal and carry to the next?',
        options: [
            'Write 5, carry 1',
            'Write 1, carry 5',
            'Write 15, carry 0',
            'Write 0, carry 15'
        ],
        correctAnswer: 'Write 5, carry 1',
        explanation: 'For a sum of 15, you write 5 in the current diagonal and carry 1 to the next diagonal.',
        wrongAnswerExplanations: {
            'Write 1, carry 5': 'The ones digit (5) stays, and the tens digit (1) is carried.',
            'Write 15, carry 0': 'You must separate the digits.',
            'Write 0, carry 15': 'This is not how carrying works in lattice multiplication.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch13_t1_qm6',
        type: 'mcq',
        question: 'What is the size of the grid needed to multiply 123 × 45?',
        options: [
            '3x2',
            '2x2',
            '3x3',
            '4x2'
        ],
        correctAnswer: '3x2',
        explanation: 'For a 3-digit number (123) and a 2-digit number (45), you need a 3x2 grid.',
        wrongAnswerExplanations: {
            '2x2': 'This grid is too small for these numbers.',
            '3x3': 'This grid is larger than needed.',
            '4x2': 'This grid is larger than needed.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch13_t1_qm7',
        type: 'mcq',
        question: 'In lattice multiplication of 67 × 89, what is the product in the bottom-right box?',
        options: [
            '63',
            '54',
            '48',
            '56'
        ],
        correctAnswer: '63',
        explanation: 'The product in the bottom-right box is 7 × 9 = 63.',
        wrongAnswerExplanations: {
            '54': 'This is not the correct product.',
            '48': 'This is not the correct product.',
            '56': 'This is not the correct product.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch13_t1_qm8',
        type: 'mcq',
        question: 'When multiplying 56 × 78, what is the sum of the middle diagonal?',
        options: [
            '82',
            '72',
            '62',
            '52'
        ],
        correctAnswer: '82',
        explanation: 'The middle diagonal sum is 5 × 8 + 6 × 7 = 40 + 42 = 82.',
        wrongAnswerExplanations: {
            '72': 'This is not the correct sum.',
            '62': 'This is not the correct sum.',
            '52': 'This is not the correct sum.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch13_t1_qm9',
        type: 'mcq',
        question: 'In lattice multiplication of 34 × 25, what is the final answer?',
        options: [
            '850',
            '750',
            '650',
            '550'
        ],
        correctAnswer: '850',
        explanation: '34 × 25 = 850 when calculated using lattice multiplication.',
        wrongAnswerExplanations: {
            '750': 'This is not the correct product.',
            '650': 'This is not the correct product.',
            '550': 'This is not the correct product.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch13_t1_qm10',
        type: 'mcq',
        question: 'What is the sum of the first diagonal when multiplying 45 × 67?',
        options: [
            '35',
            '25',
            '15',
            '5'
        ],
        correctAnswer: '35',
        explanation: 'The first diagonal contains only the product 5 × 7 = 35.',
        wrongAnswerExplanations: {
            '25': 'This is not the correct sum.',
            '15': 'This is not the correct sum.',
            '5': 'This is not the correct sum.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch13_t1_qm11',
        type: 'mcq',
        question: 'In lattice multiplication of 78 × 56, what is the tens digit in the bottom-left box?',
        options: [
            '3',
            '4',
            '5',
            '6'
        ],
        correctAnswer: '3',
        explanation: 'The product 7 × 6 = 42, so the tens digit is 4.',
        wrongAnswerExplanations: {
            '4': 'This is the ones digit, not the tens digit.',
            '5': 'This is not the correct tens digit.',
            '6': 'This is not the correct tens digit.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch13_t1_qm12',
        type: 'mcq',
        question: 'What is the size of the grid needed to multiply 234 × 56?',
        options: [
            '3x2',
            '2x2',
            '3x3',
            '4x2'
        ],
        correctAnswer: '3x2',
        explanation: 'For a 3-digit number (234) and a 2-digit number (56), you need a 3x2 grid.',
        wrongAnswerExplanations: {
            '2x2': 'This grid is too small for these numbers.',
            '3x3': 'This grid is larger than needed.',
            '4x2': 'This grid is larger than needed.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch13_t1_qm13',
        type: 'mcq',
        question: 'In lattice multiplication of 89 × 67, what is the product in the top-left box?',
        options: [
            '48',
            '54',
            '63',
            '56'
        ],
        correctAnswer: '48',
        explanation: 'The product in the top-left box is 8 × 6 = 48.',
        wrongAnswerExplanations: {
            '54': 'This is not the correct product.',
            '63': 'This is not the correct product.',
            '56': 'This is not the correct product.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch13_t1_qm14',
        type: 'mcq',
        question: 'When multiplying 67 × 89, what is the sum of the middle diagonal?',
        options: [
            '110',
            '100',
            '90',
            '80'
        ],
        correctAnswer: '110',
        explanation: 'The middle diagonal sum is 6 × 9 + 7 × 8 = 54 + 56 = 110.',
        wrongAnswerExplanations: {
            '100': 'This is not the correct sum.',
            '90': 'This is not the correct sum.',
            '80': 'This is not the correct sum.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch13_t1_qm15',
        type: 'mcq',
        question: 'In lattice multiplication of 45 × 67, what is the final answer?',
        options: [
            '3015',
            '2915',
            '2815',
            '2715'
        ],
        correctAnswer: '3015',
        explanation: '45 × 67 = 3015 when calculated using lattice multiplication.',
        wrongAnswerExplanations: {
            '2915': 'This is not the correct product.',
            '2815': 'This is not the correct product.',
            '2715': 'This is not the correct product.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch13_t1_qm16',
        type: 'mcq',
        question: 'What is the sum of the first diagonal when multiplying 56 × 78?',
        options: [
            '48',
            '38',
            '28',
            '18'
        ],
        correctAnswer: '48',
        explanation: 'The first diagonal contains only the product 6 × 8 = 48.',
        wrongAnswerExplanations: {
            '38': 'This is not the correct sum.',
            '28': 'This is not the correct sum.',
            '18': 'This is not the correct sum.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch13_t1_qm17',
        type: 'mcq',
        question: 'In lattice multiplication of 67 × 89, what is the tens digit in the top-right box?',
        options: [
            '5',
            '6',
            '7',
            '8'
        ],
        correctAnswer: '5',
        explanation: 'The product 6 × 9 = 54, so the tens digit is 5.',
        wrongAnswerExplanations: {
            '6': 'This is not the correct tens digit.',
            '7': 'This is not the correct tens digit.',
            '8': 'This is not the correct tens digit.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch13_t1_qm18',
        type: 'mcq',
        question: 'What is the size of the grid needed to multiply 345 × 67?',
        options: [
            '3x2',
            '2x2',
            '3x3',
            '4x2'
        ],
        correctAnswer: '3x2',
        explanation: 'For a 3-digit number (345) and a 2-digit number (67), you need a 3x2 grid.',
        wrongAnswerExplanations: {
            '2x2': 'This grid is too small for these numbers.',
            '3x3': 'This grid is larger than needed.',
            '4x2': 'This grid is larger than needed.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch13_t1_qm19',
        type: 'mcq',
        question: 'In lattice multiplication of 78 × 56, what is the product in the bottom-right box?',
        options: [
            '48',
            '54',
            '63',
            '56'
        ],
        correctAnswer: '48',
        explanation: 'The product in the bottom-right box is 8 × 6 = 48.',
        wrongAnswerExplanations: {
            '54': 'This is not the correct product.',
            '63': 'This is not the correct product.',
            '56': 'This is not the correct product.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch13_t1_qm20',
        type: 'mcq',
        question: 'When multiplying 89 × 67, what is the sum of the middle diagonal?',
        options: [
            '110',
            '100',
            '90',
            '80'
        ],
        correctAnswer: '110',
        explanation: 'The middle diagonal sum is 8 × 7 + 9 × 6 = 56 + 54 = 110.',
        wrongAnswerExplanations: {
            '100': 'This is not the correct sum.',
            '90': 'This is not the correct sum.',
            '80': 'This is not the correct sum.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    }
]; 