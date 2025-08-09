import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch2_t2_q1_medium',
        type: 'mcq',
        question: 'If ½ × (⅓ + ¼) = (½ × ⅓) + (½ × ¼), which property is being demonstrated?',
        options: [
            'Distributive Property',
            'Commutative Property',
            'Associative Property',
            'Identity Property'
        ],
        correctAnswer: 'Distributive Property',
        explanation: 'The distributive property shows that multiplication distributes over addition.',
        wrongAnswerExplanations: {
            'Commutative Property': 'The commutative property deals with order, not distribution.',
            'Associative Property': 'The associative property deals with grouping, not distribution.',
            'Identity Property': 'The identity property deals with special numbers, not distribution.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t2_q2_medium',
        type: 'mcq',
        question: 'What is the result of (½ + ⅓) + ¼ using the associative property?',
        options: [
            '13/12',
            '⅚',
            '¾',
            '1'
        ],
        correctAnswer: '13/12',
        explanation: 'Using the associative property: (½ + ⅓) + ¼ = ½ + (⅓ + ¼) = ½ + 7/12 = 13/12.',
        wrongAnswerExplanations: {
            '⅚': 'This is incorrect addition of fractions.',
            '¾': 'This is incorrect addition of fractions.',
            '1': 'This is incorrect addition of fractions.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t2_q3_medium',
        type: 'mcq',
        question: 'Which expression demonstrates the commutative property of multiplication?',
        options: [
            '⅔ × ¾ = ¾ × ⅔',
            '(⅔ × ¾) × ½ = ⅔ × (¾ × ½)',
            '⅔ × (¾ + ½) = (⅔ × ¾) + (⅔ × ½)',
            '⅔ × 1 = ⅔'
        ],
        correctAnswer: '⅔ × ¾ = ¾ × ⅔',
        explanation: 'The commutative property of multiplication states that changing the order of numbers being multiplied does not change the product.',
        wrongAnswerExplanations: {
            '(⅔ × ¾) × ½ = ⅔ × (¾ × ½)': 'This shows the associative property, not commutative.',
            '⅔ × (¾ + ½) = (⅔ × ¾) + (⅔ × ½)': 'This shows the distributive property, not commutative.',
            '⅔ × 1 = ⅔': 'This shows the identity property, not commutative.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t2_q4_medium',
        type: 'mcq',
        question: 'What is the simplified form of (⅔ + ¼) × (⅗ - ⅒)?',
        options: [
            '11/24',
            '⅚',
            '⅜',
            '½'
        ],
        correctAnswer: '11/24',
        explanation: 'First simplify inside parentheses: (⅔ + ¼) = 11/12 and (⅗ - ⅒) = ½. Then multiply: 11/12 × ½ = 11/24.',
        wrongAnswerExplanations: {
            '⅚': 'This is incorrect simplification and multiplication.',
            '⅜': 'This is incorrect simplification and multiplication.',
            '½': 'This is incorrect simplification and multiplication.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t2_q5_medium',
        type: 'mcq',
        question: 'Which of these is equivalent to 0.75 using the distributive property?',
        options: [
            '0.5 + 0.25',
            '0.5 × 1.5',
            '1 - 0.25',
            '0.5 × 0.5'
        ],
        correctAnswer: '0.5 + 0.25',
        explanation: 'Using the distributive property: 0.75 = 0.5 + 0.25 = 0.5 × (1 + 0.5).',
        wrongAnswerExplanations: {
            '0.5 × 1.5': 'This is multiplication, not addition.',
            '1 - 0.25': 'This is subtraction, not addition.',
            '0.5 × 0.5': 'This is multiplication of the same number.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t2_q6_medium',
        type: 'mcq',
        question: 'What is the result of (⅔ × ¾) × ½ using the associative property?',
        options: [
            '¼',
            '⅜',
            '½',
            '⅙'
        ],
        correctAnswer: '¼',
        explanation: 'Using the associative property: (⅔ × ¾) × ½ = ⅔ × (¾ × ½) = ⅔ × ⅜ = ¼.',
        wrongAnswerExplanations: {
            '⅜': 'This is incorrect multiplication of fractions.',
            '½': 'This is incorrect multiplication of fractions.',
            '⅙': 'This is incorrect multiplication of fractions.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t2_q7_medium',
        type: 'mcq',
        question: 'Which expression shows the additive inverse property?',
        options: [
            '⅔ + (-⅔) = 0',
            '⅔ × 1 = ⅔',
            '⅔ + 0 = ⅔',
            '⅔ × 3/2 = 1'
        ],
        correctAnswer: '⅔ + (-⅔) = 0',
        explanation: 'The additive inverse property states that a number plus its opposite equals zero.',
        wrongAnswerExplanations: {
            '⅔ × 1 = ⅔': 'This shows the multiplicative identity, not additive inverse.',
            '⅔ + 0 = ⅔': 'This shows the additive identity, not additive inverse.',
            '⅔ × 3/2 = 1': 'This shows the multiplicative inverse, not additive inverse.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t2_q8_medium',
        type: 'mcq',
        question: 'What is the simplified form of (⅜ + ⅝) × (⅔ - ⅓)?',
        options: [
            '⅓',
            '½',
            '⅔',
            '¼'
        ],
        correctAnswer: '⅓',
        explanation: 'First simplify inside parentheses: (⅜ + ⅝) = 1 and (⅔ - ⅓) = ⅓. Then multiply: 1 × ⅓ = ⅓.',
        wrongAnswerExplanations: {
            '½': 'This is incorrect simplification and multiplication.',
            '⅔': 'This is incorrect simplification and multiplication.',
            '¼': 'This is incorrect simplification and multiplication.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t2_q9_medium',
        type: 'mcq',
        question: 'Which of these demonstrates the multiplicative inverse property?',
        options: [
            '⅔ × 3/2 = 1',
            '⅔ + (-⅔) = 0',
            '⅔ × 1 = ⅔',
            '⅔ + 0 = ⅔'
        ],
        correctAnswer: '⅔ × 3/2 = 1',
        explanation: 'The multiplicative inverse property states that a number times its reciprocal equals one.',
        wrongAnswerExplanations: {
            '⅔ + (-⅔) = 0': 'This shows the additive inverse, not multiplicative inverse.',
            '⅔ × 1 = ⅔': 'This shows the multiplicative identity, not multiplicative inverse.',
            '⅔ + 0 = ⅔': 'This shows the additive identity, not multiplicative inverse.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t2_q10_medium',
        type: 'mcq',
        question: 'What is the result of (0.4 + 0.6) × (0.8 - 0.3) using the distributive property?',
        options: [
            '0.5',
            '0.4',
            '0.6',
            '0.7'
        ],
        correctAnswer: '0.5',
        explanation: 'First simplify inside parentheses: (0.4 + 0.6) = 1 and (0.8 - 0.3) = 0.5. Then multiply: 1 × 0.5 = 0.5.',
        wrongAnswerExplanations: {
            '0.4': 'This is incorrect simplification and multiplication.',
            '0.6': 'This is incorrect simplification and multiplication.',
            '0.7': 'This is incorrect simplification and multiplication.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t2_q11_medium',
        type: 'mcq',
        question: 'Which expression shows the associative property of addition with decimals?',
        options: [
            '(0.2 + 0.3) + 0.4 = 0.2 + (0.3 + 0.4)',
            '0.2 + 0.3 = 0.3 + 0.2',
            '0.2 × (0.3 + 0.4) = (0.2 × 0.3) + (0.2 × 0.4)',
            '0.2 + 0 = 0.2'
        ],
        correctAnswer: '(0.2 + 0.3) + 0.4 = 0.2 + (0.3 + 0.4)',
        explanation: 'The associative property of addition states that the way numbers are grouped in addition does not change the sum.',
        wrongAnswerExplanations: {
            '0.2 + 0.3 = 0.3 + 0.2': 'This shows the commutative property, not associative.',
            '0.2 × (0.3 + 0.4) = (0.2 × 0.3) + (0.2 × 0.4)': 'This shows the distributive property, not associative.',
            '0.2 + 0 = 0.2': 'This shows the identity property, not associative.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t2_q12_medium',
        type: 'mcq',
        question: 'What is the simplified form of (⅚ - ⅓) × (¾ + ½)?',
        options: [
            '⅝',
            '¾',
            '⅔',
            '½'
        ],
        correctAnswer: '⅝',
        explanation: 'First simplify inside parentheses: (⅚ - ⅓) = ½ and (¾ + ½) = 5/4. Then multiply: ½ × 5/4 = ⅝.',
        wrongAnswerExplanations: {
            '¾': 'This is incorrect simplification and multiplication.',
            '⅔': 'This is incorrect simplification and multiplication.',
            '½': 'This is incorrect simplification and multiplication.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t2_q13_medium',
        type: 'mcq',
        question: 'Which of these demonstrates the commutative property of addition with fractions?',
        options: [
            '⅔ + ¾ = ¾ + ⅔',
            '(⅔ + ¾) + ½ = ⅔ + (¾ + ½)',
            '⅔ × (¾ + ½) = (⅔ × ¾) + (⅔ × ½)',
            '⅔ + 0 = ⅔'
        ],
        correctAnswer: '⅔ + ¾ = ¾ + ⅔',
        explanation: 'The commutative property of addition states that changing the order of numbers being added does not change the sum.',
        wrongAnswerExplanations: {
            '(⅔ + ¾) + ½ = ⅔ + (¾ + ½)': 'This shows the associative property, not commutative.',
            '⅔ × (¾ + ½) = (⅔ × ¾) + (⅔ × ½)': 'This shows the distributive property, not commutative.',
            '⅔ + 0 = ⅔': 'This shows the identity property, not commutative.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t2_q14_medium',
        type: 'mcq',
        question: 'What is the result of (0.6 × 0.4) × 0.5 using the associative property?',
        options: [
            '0.12',
            '0.24',
            '0.36',
            '0.48'
        ],
        correctAnswer: '0.12',
        explanation: 'Using the associative property: (0.6 × 0.4) × 0.5 = 0.6 × (0.4 × 0.5) = 0.6 × 0.2 = 0.12.',
        wrongAnswerExplanations: {
            '0.24': 'This is incorrect multiplication of decimals.',
            '0.36': 'This is incorrect multiplication of decimals.',
            '0.48': 'This is incorrect multiplication of decimals.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t2_q15_medium',
        type: 'mcq',
        question: 'Which expression shows the multiplicative identity property?',
        options: [
            '⅔ × 1 = ⅔',
            '⅔ + (-⅔) = 0',
            '⅔ × 3/2 = 1',
            '⅔ + 0 = ⅔'
        ],
        correctAnswer: '⅔ × 1 = ⅔',
        explanation: 'The multiplicative identity property states that multiplying any number by 1 leaves it unchanged.',
        wrongAnswerExplanations: {
            '⅔ + (-⅔) = 0': 'This shows the additive inverse, not multiplicative identity.',
            '⅔ × 3/2 = 1': 'This shows the multiplicative inverse, not multiplicative identity.',
            '⅔ + 0 = ⅔': 'This shows the additive identity, not multiplicative identity.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t2_q16_medium',
        type: 'mcq',
        question: 'What is the simplified form of (⅜ + ⅝) × (⅔ - ⅓)?',
        options: [
            '⅓',
            '½',
            '⅔',
            '¼'
        ],
        correctAnswer: '⅓',
        explanation: 'First simplify inside parentheses: (⅜ + ⅝) = 1 and (⅔ - ⅓) = ⅓. Then multiply: 1 × ⅓ = ⅓.',
        wrongAnswerExplanations: {
            '½': 'This is incorrect simplification and multiplication.',
            '⅔': 'This is incorrect simplification and multiplication.',
            '¼': 'This is incorrect simplification and multiplication.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t2_q17_medium',
        type: 'mcq',
        question: 'Which of these demonstrates the additive identity property?',
        options: [
            '⅔ + 0 = ⅔',
            '⅔ + (-⅔) = 0',
            '⅔ × 1 = ⅔',
            '⅔ × 3/2 = 1'
        ],
        correctAnswer: '⅔ + 0 = ⅔',
        explanation: 'The additive identity property states that adding zero to any number leaves it unchanged.',
        wrongAnswerExplanations: {
            '⅔ + (-⅔) = 0': 'This shows the additive inverse, not additive identity.',
            '⅔ × 1 = ⅔': 'This shows the multiplicative identity, not additive identity.',
            '⅔ × 3/2 = 1': 'This shows the multiplicative inverse, not additive identity.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t2_q18_medium',
        type: 'mcq',
        question: 'What is the result of (0.8 - 0.3) × (0.4 + 0.6) using the distributive property?',
        options: [
            '0.5',
            '0.4',
            '0.6',
            '0.7'
        ],
        correctAnswer: '0.5',
        explanation: 'First simplify inside parentheses: (0.8 - 0.3) = 0.5 and (0.4 + 0.6) = 1. Then multiply: 0.5 × 1 = 0.5.',
        wrongAnswerExplanations: {
            '0.4': 'This is incorrect simplification and multiplication.',
            '0.6': 'This is incorrect simplification and multiplication.',
            '0.7': 'This is incorrect simplification and multiplication.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t2_q19_medium',
        type: 'mcq',
        question: 'Which expression shows the commutative property of multiplication with decimals?',
        options: [
            '0.2 × 0.3 = 0.3 × 0.2',
            '(0.2 × 0.3) × 0.4 = 0.2 × (0.3 × 0.4)',
            '0.2 × (0.3 + 0.4) = (0.2 × 0.3) + (0.2 × 0.4)',
            '0.2 × 1 = 0.2'
        ],
        correctAnswer: '0.2 × 0.3 = 0.3 × 0.2',
        explanation: 'The commutative property of multiplication states that changing the order of numbers being multiplied does not change the product.',
        wrongAnswerExplanations: {
            '(0.2 × 0.3) × 0.4 = 0.2 × (0.3 × 0.4)': 'This shows the associative property, not commutative.',
            '0.2 × (0.3 + 0.4) = (0.2 × 0.3) + (0.2 × 0.4)': 'This shows the distributive property, not commutative.',
            '0.2 × 1 = 0.2': 'This shows the identity property, not commutative.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t2_q20_medium',
        type: 'mcq',
        question: 'What is the simplified form of (⅔ + ¼) × (⅗ - ⅒)?',
        options: [
            '11/24',
            '⅚',
            '⅜',
            '½'
        ],
        correctAnswer: '11/24',
        explanation: 'First simplify inside parentheses: (⅔ + ¼) = 11/12 and (⅗ - ⅒) = ½. Then multiply: 11/12 × ½ = 11/24.',
        wrongAnswerExplanations: {
            '⅚': 'This is incorrect simplification and multiplication.',
            '⅜': 'This is incorrect simplification and multiplication.',
            '½': 'This is incorrect simplification and multiplication.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    }
]; 