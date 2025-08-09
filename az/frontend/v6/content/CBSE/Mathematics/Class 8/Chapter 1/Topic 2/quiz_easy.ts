import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch1_t2_qe1',
        type: 'mcq',
        question: 'What is ⅖ + ⅖?',
        options: ['⅘', '⅖', '⅗', '⅙'],
        correctAnswer: '⅘',
        explanation: 'Add numerators: 2+2=4, denominator stays 5. ⁴⁄₅ = ⅘. ➕',
        wrongAnswerExplanations: {
            '⅖': 'That is just one of the addends, not the sum.',
            '⅗': 'Incorrect addition of numerators.',
            '⅙': 'Incorrect denominator.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch1_t2_qe2',
        type: 'mcq',
        question: 'What is ⅗ - ⅕?',
        options: ['⅖', '⅕', '⅗', '⅙'],
        correctAnswer: '⅖',
        explanation: 'Find common denominator: ³⁄₅ - ¹⁄₅ = ²⁄₅ = ⅖. ➖',
        wrongAnswerExplanations: {
            '⅕': 'That is just the subtrahend, not the result.',
            '⅗': 'That is the minuend, not the result.',
            '⅙': 'Incorrect subtraction.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch1_t2_qe3',
        type: 'mcq',
        question: 'What is ⅔ × ⅗?',
        options: ['²⁄₅', '⅚', '⅕', '⅗'],
        correctAnswer: '²⁄₅',
        explanation: 'Multiply numerators: 2×3=6, denominators: 3×5=15. ⁶⁄₁₅ = ²⁄₅ after simplification. ✖️',
        wrongAnswerExplanations: {
            '⅚': 'Incorrect multiplication.',
            '⅕': 'Incorrect multiplication.',
            '⅗': 'Incorrect multiplication.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch1_t2_qe4',
        type: 'mcq',
        question: 'What is ⅘ ÷ ⅖?',
        options: ['2', '⅗', '⅘', '½'],
        correctAnswer: '2',
        explanation: 'Divide by multiplying by reciprocal: ⅘ × ⁵⁄₂ = ²⁰⁄₁₀ = 2. ➗',
        wrongAnswerExplanations: {
            '⅗': 'Incorrect division.',
            '⅘': 'That is the dividend, not the result.',
            '½': 'Incorrect division.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch1_t2_qe5',
        type: 'mcq',
        question: 'What is -⅜ + ⅝?',
        options: ['¼', '-¼', '⅞', '0'],
        correctAnswer: '¼',
        explanation: 'Add numerators: -3+5=2, denominator is 8. ²⁄₈ = ¼. ➕',
        wrongAnswerExplanations: {
            '-¼': 'Incorrect addition.',
            '⅞': 'Incorrect addition.',
            '0': 'Sum is not zero.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch1_t2_qe6',
        type: 'mcq',
        question: 'What is the result of ⅞ - ⅖?',
        options: ['³⁹⁄₅₆', '⅞', '⅖', '½'],
        correctAnswer: '³⁹⁄₅₆',
        explanation: 'Find common denominator: ⁷⁄₈ - ²⁄₅ = ³⁵⁄₄₀ - ¹₆⁄₄₀ = ¹₉⁄₄₀. But for ⅞ - ⅖, common denominator is 56: 49/56 - 16/56 = 33/56.',
        wrongAnswerExplanations: {
            '⅞': 'That is the minuend, not the result.',
            '⅖': 'That is the subtrahend, not the result.',
            '½': 'Incorrect subtraction.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch1_t2_qe7',
        type: 'mcq',
        question: 'What is ⅚ × 1?',
        options: ['⅚', '1', '0', '½'],
        correctAnswer: '⅚',
        explanation: 'Any number times 1 is itself. 🆔',
        wrongAnswerExplanations: {
            '1': 'Only true if the number is 1.',
            '0': 'Multiplying by 0 gives 0.',
            '½': 'Incorrect multiplication.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch1_t2_qe8',
        type: 'mcq',
        question: 'What is ⅗ ÷ 1?',
        options: ['⅗', '1', '0', '½'],
        correctAnswer: '⅗',
        explanation: 'Any number divided by 1 is itself. ➗',
        wrongAnswerExplanations: {
            '1': 'Only true if the number is 1.',
            '0': 'Division by 1 does not give 0.',
            '½': 'Incorrect division.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch1_t2_qe9',
        type: 'mcq',
        question: 'What is ⅔ × 0?',
        options: ['0', '⅔', '1', '½'],
        correctAnswer: '0',
        explanation: 'Any number times 0 is 0. 🅾️',
        wrongAnswerExplanations: {
            '⅔': 'Multiplying by 0 gives 0.',
            '1': 'Multiplying by 0 gives 0.',
            '½': 'Multiplying by 0 gives 0.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch1_t2_qe10',
        type: 'mcq',
        question: 'What is ⅘ + (-⅕)?',
        options: ['⅗', '⅚', '⅘', '-⅚'],
        correctAnswer: '⅗',
        explanation: 'Add numerators: 4+(-1)=3. Denominator stays 5. ➕',
        wrongAnswerExplanations: {
            '⅚': 'Incorrect addition.',
            '⅘': 'Incorrect addition.',
            '-⅚': 'Incorrect addition.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch1_t2_qe11',
        type: 'mcq',
        question: 'What is ⅚ - ⅚?',
        options: ['0', '⅚', '1', '-⅚'],
        correctAnswer: '0',
        explanation: 'Subtracting a number from itself gives 0. 🅾️',
        wrongAnswerExplanations: {
            '⅚': 'Incorrect subtraction.',
            '1': 'Incorrect subtraction.',
            '-⅚': 'Incorrect subtraction.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch1_t2_qe12',
        type: 'mcq',
        question: 'What is ⅗ × ⅖?',
        options: ['²⁄₁₅', '⅕', '⅗', '⅖'],
        correctAnswer: '²⁄₁₅',
        explanation: 'Multiply numerators: 3×2=6, denominators: 5×5=25. ⁶⁄₂₅ = ²⁄₁₅ after simplification. ✖️',
        wrongAnswerExplanations: {
            '⅕': 'This is the simplified form.',
            '⅗': 'Incorrect multiplication.',
            '⅖': 'Incorrect multiplication.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch1_t2_qe13',
        type: 'mcq',
        question: 'What is ⅚ ÷ ⅗?',
        options: ['1½', '⅗', '⅚', '⅖'],
        correctAnswer: '1½',
        explanation: 'Divide by multiplying by reciprocal: ⅚ × ⁵⁄₃ = ³⁰⁄₁₈ = 1½. ➗',
        wrongAnswerExplanations: {
            '⅗': 'Incorrect division.',
            '⅚': 'Incorrect division.',
            '⅖': 'Incorrect division.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch1_t2_qe14',
        type: 'mcq',
        question: 'What is the reciprocal of ⅖?',
        options: ['5⁄2', '-⅖', '⅖', '-5⁄2'],
        correctAnswer: '5⁄2',
        explanation: 'Reciprocal means flip numerator and denominator. 🔄',
        wrongAnswerExplanations: {
            '-⅖': 'This is the additive inverse.',
            '⅖': 'This is the original number.',
            '-5⁄2': 'Incorrect sign.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch1_t2_qe15',
        type: 'mcq',
        question: 'What is ⅞ + ⅓?',
        options: ['¹⁷⁄₂₄', '⅞', '⅓', '⅝'],
        correctAnswer: '¹⁷⁄₂₄',
        explanation: 'Find common denominator: ²¹⁄₂₄ + ⁸⁄₂₄ = ²⁹⁄₂₄ = ¹⁷⁄₂₄. ➕',
        wrongAnswerExplanations: {
            '⅞': 'That is the first addend, not the sum.',
            '⅓': 'That is the second addend, not the sum.',
            '⅝': 'Incorrect addition.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch1_t2_qe16',
        type: 'mcq',
        question: 'What is ⅗ - ⅔?',
        options: ['-⅙', '⅓', '⅞', '⅕'],
        correctAnswer: '-⅙',
        explanation: 'Find common denominator: ²⁄₆ - ⁴⁄₆ = -²⁄₆ = -⅙. ➖',
        wrongAnswerExplanations: {
            '⅓': 'Incorrect subtraction.',
            '⅞': 'Incorrect subtraction.',
            '⅕': 'Incorrect subtraction.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch1_t2_qe17',
        type: 'mcq',
        question: 'What is ⅗ × 2?',
        options: ['1⅕', '⅗', '⅞', '⅖'],
        correctAnswer: '1⅕',
        explanation: 'Multiply numerator by 2: 3×2=6, denominator is 5. ⁶⁄₅ = 1⅕. ✖️',
        wrongAnswerExplanations: {
            '⅗': 'That is the original number, not the product.',
            '⅞': 'Incorrect multiplication.',
            '⅖': 'Incorrect multiplication.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch1_t2_qe18',
        type: 'mcq',
        question: 'What is ⅘ ÷ 2?',
        options: ['⅖', '⅘', '⅛', '⅗'],
        correctAnswer: '⅖',
        explanation: 'Divide numerator by 2: 4÷2=2, denominator is 5. ²⁄₅ = ⅖. ➗',
        wrongAnswerExplanations: {
            '⅘': 'That is the original number, not the quotient.',
            '⅛': 'Incorrect division.',
            '⅗': 'Incorrect division.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch1_t2_qe19',
        type: 'mcq',
        question: 'What is ⅗ + 0?',
        options: ['⅗', '0', '1', '⅕'],
        correctAnswer: '⅗',
        explanation: 'Any number plus 0 is itself. 🆔',
        wrongAnswerExplanations: {
            '0': 'Only true if the number is 0.',
            '1': 'Only true if the number is 1.',
            '⅕': 'Incorrect addition.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch1_t2_qe20',
        type: 'mcq',
        question: 'What is ⅔ - ⅔?',
        options: ['0', '⅔', '1', '-⅔'],
        correctAnswer: '0',
        explanation: 'Subtracting a number from itself gives 0. 🅾️',
        wrongAnswerExplanations: {
            '⅔': 'Incorrect subtraction.',
            '1': 'Incorrect subtraction.',
            '-⅔': 'Incorrect subtraction.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    }
]; 