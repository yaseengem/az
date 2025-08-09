import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch2_t2_q1_easy',
        type: 'mcq',
        question: 'Which property states that changing the order of numbers being added does not change the sum?',
        options: [
            'Commutative Property of Addition',
            'Associative Property of Addition',
            'Distributive Property',
            'Identity Property'
        ],
        correctAnswer: 'Commutative Property of Addition',
        explanation: 'The commutative property of addition states that a + b = b + a.',
        wrongAnswerExplanations: {
            'Associative Property of Addition': 'The associative property deals with grouping, not order.',
            'Distributive Property': 'The distributive property deals with multiplication over addition.',
            'Identity Property': 'The identity property deals with special numbers, not order.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch2_t2_q2_easy',
        type: 'mcq',
        question: 'What is the simplified form of ⅔ + ¼?',
        options: [
            '11/12',
            '⅚',
            '¾',
            '½'
        ],
        correctAnswer: '11/12',
        explanation: 'To add fractions, find a common denominator (12) and add the numerators: 8/12 + 3/12 = 11/12.',
        wrongAnswerExplanations: {
            '⅚': 'This is incorrect addition of fractions.',
            '¾': 'This is incorrect addition of fractions.',
            '½': 'This is incorrect addition of fractions.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch2_t2_q3_easy',
        type: 'mcq',
        question: 'Which property is shown by (⅔ + ¼) + ½ = ⅔ + (¼ + ½)?',
        options: [
            'Associative Property of Addition',
            'Commutative Property of Addition',
            'Distributive Property',
            'Identity Property'
        ],
        correctAnswer: 'Associative Property of Addition',
        explanation: 'The associative property of addition states that (a + b) + c = a + (b + c).',
        wrongAnswerExplanations: {
            'Commutative Property of Addition': 'The commutative property deals with order, not grouping.',
            'Distributive Property': 'The distributive property deals with multiplication over addition.',
            'Identity Property': 'The identity property deals with special numbers, not grouping.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch2_t2_q4_easy',
        type: 'mcq',
        question: 'What is the simplified form of ⅔ × ¾?',
        options: [
            '½',
            '⅚',
            '¾',
            '⅔'
        ],
        correctAnswer: '½',
        explanation: 'To multiply fractions, multiply numerators and denominators: (2 × 3)/(3 × 4) = 6/12 = ½.',
        wrongAnswerExplanations: {
            '⅚': 'This is incorrect multiplication of fractions.',
            '¾': 'This is incorrect multiplication of fractions.',
            '⅔': 'This is incorrect multiplication of fractions.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch2_t2_q5_easy',
        type: 'mcq',
        question: 'Which property states that multiplying a number by 1 leaves it unchanged?',
        options: [
            'Multiplicative Identity Property',
            'Additive Identity Property',
            'Commutative Property',
            'Associative Property'
        ],
        correctAnswer: 'Multiplicative Identity Property',
        explanation: 'The multiplicative identity property states that a × 1 = a.',
        wrongAnswerExplanations: {
            'Additive Identity Property': 'The additive identity deals with addition, not multiplication.',
            'Commutative Property': 'The commutative property deals with order, not identity.',
            'Associative Property': 'The associative property deals with grouping, not identity.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch2_t2_q6_easy',
        type: 'mcq',
        question: 'What is the simplified form of 0.5 + 0.25?',
        options: [
            '0.75',
            '0.5',
            '0.25',
            '1.0'
        ],
        correctAnswer: '0.75',
        explanation: 'To add decimals, align the decimal points and add: 0.50 + 0.25 = 0.75.',
        wrongAnswerExplanations: {
            '0.5': 'This is incorrect addition of decimals.',
            '0.25': 'This is incorrect addition of decimals.',
            '1.0': 'This is incorrect addition of decimals.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch2_t2_q7_easy',
        type: 'mcq',
        question: 'Which property is shown by ⅔ × ¾ = ¾ × ⅔?',
        options: [
            'Commutative Property of Multiplication',
            'Associative Property of Multiplication',
            'Distributive Property',
            'Identity Property'
        ],
        correctAnswer: 'Commutative Property of Multiplication',
        explanation: 'The commutative property of multiplication states that a × b = b × a.',
        wrongAnswerExplanations: {
            'Associative Property of Multiplication': 'The associative property deals with grouping, not order.',
            'Distributive Property': 'The distributive property deals with multiplication over addition.',
            'Identity Property': 'The identity property deals with special numbers, not order.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch2_t2_q8_easy',
        type: 'mcq',
        question: 'What is the simplified form of ⅔ ÷ ¼?',
        options: [
            '8/3',
            '⅙',
            '⅔',
            '¾'
        ],
        correctAnswer: '8/3',
        explanation: 'To divide fractions, multiply by the reciprocal: ⅔ ÷ ¼ = ⅔ × 4/1 = 8/3.',
        wrongAnswerExplanations: {
            '⅙': 'This is incorrect division of fractions.',
            '⅔': 'This is incorrect division of fractions.',
            '¾': 'This is incorrect division of fractions.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch2_t2_q9_easy',
        type: 'mcq',
        question: 'Which property states that adding zero to a number leaves it unchanged?',
        options: [
            'Additive Identity Property',
            'Multiplicative Identity Property',
            'Commutative Property',
            'Associative Property'
        ],
        correctAnswer: 'Additive Identity Property',
        explanation: 'The additive identity property states that a + 0 = a.',
        wrongAnswerExplanations: {
            'Multiplicative Identity Property': 'The multiplicative identity deals with multiplication, not addition.',
            'Commutative Property': 'The commutative property deals with order, not identity.',
            'Associative Property': 'The associative property deals with grouping, not identity.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch2_t2_q10_easy',
        type: 'mcq',
        question: 'What is the simplified form of 0.5 × 0.25?',
        options: [
            '0.125',
            '0.25',
            '0.5',
            '0.75'
        ],
        correctAnswer: '0.125',
        explanation: 'To multiply decimals, multiply as whole numbers and count decimal places: 0.5 × 0.25 = 0.125.',
        wrongAnswerExplanations: {
            '0.25': 'This is incorrect multiplication of decimals.',
            '0.5': 'This is incorrect multiplication of decimals.',
            '0.75': 'This is incorrect multiplication of decimals.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch2_t2_q11_easy',
        type: 'mcq',
        question: 'Which property is shown by (⅔ × ¾) × ½ = ⅔ × (¾ × ½)?',
        options: [
            'Associative Property of Multiplication',
            'Commutative Property of Multiplication',
            'Distributive Property',
            'Identity Property'
        ],
        correctAnswer: 'Associative Property of Multiplication',
        explanation: 'The associative property of multiplication states that (a × b) × c = a × (b × c).',
        wrongAnswerExplanations: {
            'Commutative Property of Multiplication': 'The commutative property deals with order, not grouping.',
            'Distributive Property': 'The distributive property deals with multiplication over addition.',
            'Identity Property': 'The identity property deals with special numbers, not grouping.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch2_t2_q12_easy',
        type: 'mcq',
        question: 'What is the simplified form of ⅔ - ¼?',
        options: [
            '5/12',
            '⅙',
            '⅔',
            '¾'
        ],
        correctAnswer: '5/12',
        explanation: 'To subtract fractions, find a common denominator (12) and subtract the numerators: 8/12 - 3/12 = 5/12.',
        wrongAnswerExplanations: {
            '⅙': 'This is incorrect subtraction of fractions.',
            '⅔': 'This is incorrect subtraction of fractions.',
            '¾': 'This is incorrect subtraction of fractions.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch2_t2_q13_easy',
        type: 'mcq',
        question: 'Which property states that a number plus its opposite equals zero?',
        options: [
            'Additive Inverse Property',
            'Multiplicative Inverse Property',
            'Commutative Property',
            'Associative Property'
        ],
        correctAnswer: 'Additive Inverse Property',
        explanation: 'The additive inverse property states that a + (-a) = 0.',
        wrongAnswerExplanations: {
            'Multiplicative Inverse Property': 'The multiplicative inverse deals with multiplication, not addition.',
            'Commutative Property': 'The commutative property deals with order, not inverses.',
            'Associative Property': 'The associative property deals with grouping, not inverses.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch2_t2_q14_easy',
        type: 'mcq',
        question: 'What is the simplified form of 0.5 - 0.25?',
        options: [
            '0.25',
            '0.5',
            '0.75',
            '1.0'
        ],
        correctAnswer: '0.25',
        explanation: 'To subtract decimals, align the decimal points and subtract: 0.50 - 0.25 = 0.25.',
        wrongAnswerExplanations: {
            '0.5': 'This is incorrect subtraction of decimals.',
            '0.75': 'This is incorrect subtraction of decimals.',
            '1.0': 'This is incorrect subtraction of decimals.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch2_t2_q15_easy',
        type: 'mcq',
        question: 'Which property is shown by ⅔ × (¾ + ½) = (⅔ × ¾) + (⅔ × ½)?',
        options: [
            'Distributive Property',
            'Commutative Property',
            'Associative Property',
            'Identity Property'
        ],
        correctAnswer: 'Distributive Property',
        explanation: 'The distributive property states that a × (b + c) = (a × b) + (a × c).',
        wrongAnswerExplanations: {
            'Commutative Property': 'The commutative property deals with order, not distribution.',
            'Associative Property': 'The associative property deals with grouping, not distribution.',
            'Identity Property': 'The identity property deals with special numbers, not distribution.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch2_t2_q16_easy',
        type: 'mcq',
        question: 'What is the simplified form of ⅔ ÷ ½?',
        options: [
            '4/3',
            '⅓',
            '⅔',
            '1'
        ],
        correctAnswer: '4/3',
        explanation: 'To divide fractions, multiply by the reciprocal: ⅔ ÷ ½ = ⅔ × 2/1 = 4/3.',
        wrongAnswerExplanations: {
            '⅓': 'This is incorrect division of fractions.',
            '⅔': 'This is incorrect division of fractions.',
            '1': 'This is incorrect division of fractions.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch2_t2_q17_easy',
        type: 'mcq',
        question: 'Which property states that a number times its reciprocal equals one?',
        options: [
            'Multiplicative Inverse Property',
            'Additive Inverse Property',
            'Commutative Property',
            'Associative Property'
        ],
        correctAnswer: 'Multiplicative Inverse Property',
        explanation: 'The multiplicative inverse property states that a × (1/a) = 1.',
        wrongAnswerExplanations: {
            'Additive Inverse Property': 'The additive inverse deals with addition, not multiplication.',
            'Commutative Property': 'The commutative property deals with order, not inverses.',
            'Associative Property': 'The associative property deals with grouping, not inverses.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch2_t2_q18_easy',
        type: 'mcq',
        question: 'What is the simplified form of 0.5 ÷ 0.25?',
        options: [
            '2.0',
            '0.25',
            '0.5',
            '1.0'
        ],
        correctAnswer: '2.0',
        explanation: 'To divide decimals, multiply both numbers by 100 to make them whole numbers: 50 ÷ 25 = 2.0.',
        wrongAnswerExplanations: {
            '0.25': 'This is incorrect division of decimals.',
            '0.5': 'This is incorrect division of decimals.',
            '1.0': 'This is incorrect division of decimals.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch2_t2_q19_easy',
        type: 'mcq',
        question: 'Which property is shown by ⅔ + 0 = ⅔?',
        options: [
            'Additive Identity Property',
            'Multiplicative Identity Property',
            'Commutative Property',
            'Associative Property'
        ],
        correctAnswer: 'Additive Identity Property',
        explanation: 'The additive identity property states that a + 0 = a.',
        wrongAnswerExplanations: {
            'Multiplicative Identity Property': 'The multiplicative identity deals with multiplication, not addition.',
            'Commutative Property': 'The commutative property deals with order, not identity.',
            'Associative Property': 'The associative property deals with grouping, not identity.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch2_t2_q20_easy',
        type: 'mcq',
        question: 'What is the simplified form of ⅔ × 1?',
        options: [
            '⅔',
            '1',
            '⅓',
            '2'
        ],
        correctAnswer: '⅔',
        explanation: 'The multiplicative identity property states that any number times 1 is itself.',
        wrongAnswerExplanations: {
            '1': 'This is incorrect multiplication by 1.',
            '⅓': 'This is incorrect multiplication by 1.',
            '2': 'This is incorrect multiplication by 1.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    }
]; 