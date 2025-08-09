import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch1_t2_qm1',
        type: 'mcq',
        question: 'What is the value of ⅚ + ⅔?',
        options: ['⁹⁄₁₈', '⁷⁄₁₅', '⁷⁄₁₈', '⅓'],
        correctAnswer: '⁹⁄₁₈',
        explanation: 'Find common denominator: ¹⁵⁄₁₈ + ⁴⁄₁₈ = ¹⁹⁄₁₈. ➕',
        wrongAnswerExplanations: {
            '⁷⁄₁₅': 'Incorrect addition.',
            '⁷⁄₁₈': 'Incorrect addition.',
            '⅓': 'Incorrect addition.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch1_t2_qm2',
        type: 'mcq',
        question: 'What is -¾ + ⅝?',
        options: ['-⅛', '⅛', '¼', '-¼'],
        correctAnswer: '-⅛',
        explanation: 'Find common denominator: -⁶⁄₈ + ⅝ = -⅛. ➕',
        wrongAnswerExplanations: {
            '⅛': 'Incorrect addition.',
            '¼': 'Incorrect addition.',
            '-¼': 'Incorrect addition.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch1_t2_qm3',
        type: 'mcq',
        question: 'What is ⁷⁄₁₂ - ⅚?',
        options: ['¹¹⁄₃₆', '⅓', '²⁄₃₆', '½'],
        correctAnswer: '¹¹⁄₃₆',
        explanation: 'Find common denominator: ²¹⁄₃₆ - ¹⁰⁄₃₆ = ¹¹⁄₃₆. ➖',
        wrongAnswerExplanations: {
            '⅓': 'Incorrect subtraction.',
            '²⁄₃₆': 'Incorrect subtraction.',
            '½': 'Incorrect subtraction.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch1_t2_qm4',
        type: 'mcq',
        question: 'What is ⅗ × (-⁵⁄₉)?',
        options: ['-⅔', '⅔', '-⅓', '⅓'],
        correctAnswer: '-⅔',
        explanation: 'Multiply numerators and denominators: 3×-5=-15, 5×9=45, so -¹⁵⁄₄₅ = -⅔. ✖️',
        wrongAnswerExplanations: {
            '⅔': 'Incorrect sign.',
            '-⅓': 'Incorrect multiplication.',
            '⅓': 'Incorrect sign.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch1_t2_qm5',
        type: 'mcq',
        question: 'What is ⅘ ÷ ⅔?',
        options: ['1', '⅔', '⁸⁄₁₉', '⁶⁄₅'],
        correctAnswer: '⁶⁄₅',
        explanation: 'Divide by reciprocal: ⅘ × ³⁄₂ = ¹²⁄₁₀ = ⁶⁄₅. ➗',
        wrongAnswerExplanations: {
            '1': 'Incorrect division.',
            '⅔': 'Incorrect division.',
            '⁸⁄₁₉': 'Incorrect division.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch1_t2_qm6',
        type: 'mcq',
        question: 'What is the result of -⅚ × -¾?',
        options: ['⅝', '¹⁵⁄₂₄', '-¹⁵⁄₂₄', '-⅝'],
        correctAnswer: '¹⁵⁄₂₄',
        explanation: 'Negative × negative = positive. 5×3=15, 6×4=24. ✖️',
        wrongAnswerExplanations: {
            '⅝': 'Incorrect multiplication.',
            '-¹⁵⁄₂₄': 'Incorrect sign.',
            '-⅝': 'Incorrect multiplication.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch1_t2_qm7',
        type: 'mcq',
        question: 'What is ⅞ + (-⅔)?',
        options: ['-⅙', '⅓', '⅚', '⁷⁄₁₂'],
        correctAnswer: '⅙',
        explanation: 'Find common denominator: ²¹⁄₂₄ - ¹⁶⁄₂₄ = ⁵⁄₂₄ = ⅙. ➕',
        wrongAnswerExplanations: {
            '⅓': 'Incorrect addition.',
            '⅚': 'Incorrect addition.',
            '⁷⁄₁₂': 'Incorrect addition.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch1_t2_qm8',
        type: 'mcq',
        question: 'What is the reciprocal of -⁷⁄₁₁?',
        options: ['-¹¹⁄₇', '¹¹⁄₇', '-⁷⁄₁₁', '⁷⁄₁₁'],
        correctAnswer: '-¹¹⁄₇',
        explanation: 'Reciprocal: flip numerator and denominator, keep sign. 🔄',
        wrongAnswerExplanations: {
            '¹¹⁄₇': 'Sign is incorrect.',
            '-⁷⁄₁₁': 'This is the original number.',
            '⁷⁄₁₁': 'Sign is incorrect.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch1_t2_qm9',
        type: 'mcq',
        question: 'What is ⅖ ÷ -⅘?',
        options: ['-½', '⅖', '-⅖', '½'],
        correctAnswer: '-½',
        explanation: 'Multiply by reciprocal: ⅖ × -⁵⁄₄ = -¹⁰⁄₂₀ = -½. ➗',
        wrongAnswerExplanations: {
            '⅖': 'Incorrect division.',
            '-⅖': 'Incorrect division.',
            '½': 'Sign is incorrect.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch1_t2_qm10',
        type: 'mcq',
        question: 'What is ⅞ + ⅔?',
        options: ['¹⁹⁄₂₄', '⁸⁄₂₀', '½', '¹⁵⁄₂₀'],
        correctAnswer: '¹⁹⁄₂₄',
        explanation: 'Find common denominator: ²¹⁄₂₄ + ¹⁶⁄₂₄ = ¹⁹⁄₂₄. ➕',
        wrongAnswerExplanations: {
            '⁸⁄₂₀': 'Incorrect addition.',
            '½': 'Incorrect addition.',
            '¹⁵⁄₂₀': 'Incorrect addition.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch1_t2_qm11',
        type: 'mcq',
        question: 'What is ⅞ - ⅕?',
        options: ['¹⁷⁄₄₀', '⅝', '⁹⁄₇', '⁵⁄₁₅'],
        correctAnswer: '¹⁷⁄₄₀',
        explanation: 'Find common denominator: ³⁵⁄₄₀ - ⁸⁄₄₀ = ²⁷⁄₄₀. ➖',
        wrongAnswerExplanations: {
            '⅝': 'Incorrect subtraction.',
            '⁹⁄₇': 'Incorrect subtraction.',
            '⁵⁄₁₅': 'Incorrect subtraction.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch1_t2_qm12',
        type: 'mcq',
        question: 'What is -⅔ × ⁷⁄₉?',
        options: ['-⅔', '⅔', '-¹⁴⁄₂₇', '¹⁴⁄₂₇'],
        correctAnswer: '-⅔',
        explanation: 'Multiply: -2×7=-14, 3×9=27, so -¹⁴⁄₂₇ = -⅔. ✖️',
        wrongAnswerExplanations: {
            '⅔': 'Sign is incorrect.',
            '-¹⁴⁄₂₇': 'This is the unsimplified form.',
            '¹⁴⁄₂₇': 'Sign is incorrect.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch1_t2_qm13',
        type: 'mcq',
        question: 'What is ⅚ ÷ ⅝?',
        options: ['1⅓', '1', '¹⁰⁄₄₈', '⁶⁄₅'],
        correctAnswer: '1⅓',
        explanation: 'Divide by reciprocal: ⅚ × ⁸⁄₅ = ⁴⁰⁄₃₀ = 1⅓. ➗',
        wrongAnswerExplanations: {
            '1': 'Incorrect division.',
            '¹⁰⁄₄₈': 'Incorrect division.',
            '⁶⁄₅': 'Incorrect division.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch1_t2_qm14',
        type: 'mcq',
        question: 'What is ⅔ + ⅘ - ⅕?',
        options: ['1⅕', '⅗', '⅘', '⅔'],
        correctAnswer: '1⅕',
        explanation: 'Add/subtract: ²⁰⁄₃₀ + ²⁴⁄₃₀ - ⁶⁄₃₀ = ³⁸⁄₃₀ = 1⅕. ➕➖',
        wrongAnswerExplanations: {
            '⅗': 'Incorrect calculation.',
            '⅘': 'Incorrect calculation.',
            '⅔': 'Incorrect calculation.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch1_t2_qm15',
        type: 'mcq',
        question: 'What is ¾ × ⅞?',
        options: ['⅔', '²⁴⁄₃₆', '¹¹⁄₁₃', '⅜'],
        correctAnswer: '⅔',
        explanation: 'Multiply: 3×7=21, 4×8=32, so ²¹⁄₃₂ = ⅔. ✖️',
        wrongAnswerExplanations: {
            '²⁴⁄₃₆': 'This is the unsimplified form.',
            '¹¹⁄₁₃': 'Incorrect multiplication.',
            '⅜': 'Incorrect multiplication.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch1_t2_qm16',
        type: 'mcq',
        question: 'What is ⅞ - ½ + ⅛?',
        options: ['⅜', '⁷⁄₁₆', '½', '⅝'],
        correctAnswer: '½',
        explanation: 'Subtract/add: ⁷⁄₈ - ⁴⁄₈ + ⅛ = ½. ➖➕',
        wrongAnswerExplanations: {
            '⅜': 'Incorrect calculation.',
            '⁷⁄₁₆': 'Incorrect calculation.',
            '⅝': 'Incorrect calculation.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch1_t2_qm17',
        type: 'mcq',
        question: 'What is ⅖ × ⁵⁄₂?',
        options: ['1', '⁴⁄₂₅', '⁷⁄₁₀', '²⁄₇'],
        correctAnswer: '1',
        explanation: 'Multiplying reciprocals gives 1. ✖️',
        wrongAnswerExplanations: {
            '⁴⁄₂₅': 'Incorrect multiplication.',
            '⁷⁄₁₀': 'Incorrect multiplication.',
            '²⁄₇': 'Incorrect multiplication.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch1_t2_qm18',
        type: 'mcq',
        question: 'What is ⁹⁄₁₀ ÷ ⅗?',
        options: ['1½', '⁹⁄₁₅', '⁶⁄₁₅', '⁵⁄₃'],
        correctAnswer: '1½',
        explanation: 'Divide by reciprocal: ⁹⁄₁₀ × ⁵⁄₃ = ⁴⁵⁄₃₀ = 1½. ➗',
        wrongAnswerExplanations: {
            '⁹⁄₁₅': 'Incorrect division.',
            '⁶⁄₁₅': 'Incorrect division.',
            '⁵⁄₃': 'Incorrect division.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch1_t2_qm19',
        type: 'mcq',
        question: 'What is ⅘ + ⅖ - ⅕?',
        options: ['1', '⅗', '⅘', '⅔'],
        correctAnswer: '1',
        explanation: 'Add/subtract: ⁸⁄₁₀ + ⁴⁄₁₀ - ²⁄₁₀ = ¹⁰⁄₁₀ = 1. ➕➖',
        wrongAnswerExplanations: {
            '⅗': 'Incorrect calculation.',
            '⅘': 'Incorrect calculation.',
            '⅔': 'Incorrect calculation.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch1_t2_qm20',
        type: 'mcq',
        question: 'What is ⅚ × 0?',
        options: ['0', '⅚', '1', '⁶⁄₅'],
        correctAnswer: '0',
        explanation: 'Any number times 0 is 0. 🅾️',
        wrongAnswerExplanations: {
            '⅚': 'Multiplying by 0 gives 0.',
            '1': 'Multiplying by 0 gives 0.',
            '⁶⁄₅': 'Multiplying by 0 gives 0.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    }
]; 