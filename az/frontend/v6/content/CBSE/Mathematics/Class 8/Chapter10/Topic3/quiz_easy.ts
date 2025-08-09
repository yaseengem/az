import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch10_t3_qe1',
        type: 'mcq',
        question: 'What is 10⁻² equal to?',
        options: ['0.01', '0.1', '0.001', '100'],
        correctAnswer: '0.01',
        explanation: 'When an exponent is negative, it means we divide by the positive power: 1 ÷ 10² = 0.01',
        wrongAnswerExplanations: {
            '0.1': 'This would be 10⁻¹, not 10⁻²',
            '0.001': 'This would be 10⁻³, not 10⁻²',
            '100': 'This would be 10², not 10⁻²'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t3_qe2',
        type: 'mcq',
        question: 'Which of these is equal to 2⁻³?',
        options: ['1/8', '1/6', '1/4', '1/2'],
        correctAnswer: '1/8',
        explanation: '2⁻³ = 1 ÷ 2³ = 1 ÷ 8 = 1/8',
        wrongAnswerExplanations: {
            '1/6': 'This is not a power of 2',
            '1/4': 'This would be 2⁻², not 2⁻³',
            '1/2': 'This would be 2⁻¹, not 2⁻³'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t3_qe3',
        type: 'mcq',
        question: 'What is 5⁻¹?',
        options: ['1/5', '5', '-5', '-1/5'],
        correctAnswer: '1/5',
        explanation: '5⁻¹ means 1 divided by 5¹, which equals 1/5',
        wrongAnswerExplanations: {
            '5': 'This would be 5¹, not 5⁻¹',
            '-5': 'Negative exponent doesn`t make the number negative',
            '-1/5': 'Negative exponent doesn`t make the fraction negative'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t3_qe4',
        type: 'mcq',
        question: 'Convert 3⁻² to a fraction.',
        options: ['1/9', '1/6', '1/3', '9'],
        correctAnswer: '1/9',
        explanation: '3⁻² = 1 ÷ 3² = 1 ÷ 9 = 1/9',
        wrongAnswerExplanations: {
            '1/6': 'This is not a power of 3',
            '1/3': 'This would be 3⁻¹, not 3⁻²',
            '9': 'This would be 3², not 3⁻²'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t3_qe5',
        type: 'mcq',
        question: 'What is the value of 10⁻³?',
        options: ['0.001', '0.01', '0.1', '1000'],
        correctAnswer: '0.001',
        explanation: '10⁻³ = 1 ÷ 10³ = 1 ÷ 1000 = 0.001',
        wrongAnswerExplanations: {
            '0.01': 'This would be 10⁻², not 10⁻³',
            '0.1': 'This would be 10⁻¹, not 10⁻³',
            '1000': 'This would be 10³, not 10⁻³'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t3_qe6',
        type: 'mcq',
        question: 'Which expression equals 1/25?',
        options: ['5⁻²', '5⁻¹', '(1/5)²', '25⁻¹'],
        correctAnswer: '5⁻²',
        explanation: '5⁻² = 1 ÷ 5² = 1 ÷ 25 = 1/25',
        wrongAnswerExplanations: {
            '5⁻¹': 'This equals 1/5, not 1/25',
            '(1/5)²': 'This equals 1/25 but is not in negative exponent form',
            '25⁻¹': 'This equals 1/25 but is not simplified'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t3_qe7',
        type: 'mcq',
        question: 'What is 2⁻¹ × 2⁻² equal to?',
        options: ['2⁻³', '2⁻¹', '2⁻⁴', '2³'],
        correctAnswer: '2⁻³',
        explanation: 'When multiplying powers with same base, add exponents: 2⁻¹ × 2⁻² = 2⁻¹⁻² = 2⁻³',
        wrongAnswerExplanations: {
            '2⁻¹': 'You need to add the exponents',
            '2⁻⁴': 'This would be 2⁻² × 2⁻²',
            '2³': 'Adding negative exponents doesn`t give positive'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t3_qe8',
        type: 'mcq',
        question: 'What is 4⁻¹?',
        options: ['1/4', '4', '-4', '-1/4'],
        correctAnswer: '1/4',
        explanation: '4⁻¹ means 1 divided by 4¹, which equals 1/4',
        wrongAnswerExplanations: {
            '4': 'This would be 4¹, not 4⁻¹',
            '-4': 'Negative exponent doesn`t make the number negative',
            '-1/4': 'Negative exponent doesn`t make the fraction negative'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t3_qe9',
        type: 'mcq',
        question: 'Which of these equals 10⁻¹?',
        options: ['0.1', '10', '1', '-0.1'],
        correctAnswer: '0.1',
        explanation: '10⁻¹ = 1 ÷ 10¹ = 1/10 = 0.1',
        wrongAnswerExplanations: {
            '10': 'This would be 10¹, not 10⁻¹',
            '1': 'This would be 10⁰, not 10⁻¹',
            '-0.1': 'Negative exponent doesn`t make the number negative'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t3_qe10',
        type: 'mcq',
        question: 'What is 3⁻¹ × 3⁻¹?',
        options: ['3⁻²', '3⁻¹', '3²', '3'],
        correctAnswer: '3⁻²',
        explanation: 'When multiplying same base, add exponents: 3⁻¹ × 3⁻¹ = 3⁻¹⁻¹ = 3⁻²',
        wrongAnswerExplanations: {
            '3⁻¹': 'You need to add the exponents',
            '3²': 'Adding negative exponents doesn`t give positive',
            '3': 'This would be 3¹, not 3⁻²'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t3_qe11',
        type: 'mcq',
        question: 'What is the decimal form of 2⁻⁴?',
        options: ['0.0625', '0.125', '0.25', '0.5'],
        correctAnswer: '0.0625',
        explanation: '2⁻⁴ = 1 ÷ 2⁴ = 1 ÷ 16 = 0.0625',
        wrongAnswerExplanations: {
            '0.125': 'This would be 2⁻³, not 2⁻⁴',
            '0.25': 'This would be 2⁻², not 2⁻⁴',
            '0.5': 'This would be 2⁻¹, not 2⁻⁴'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t3_qe12',
        type: 'mcq',
        question: 'Which expression represents 1/100?',
        options: ['10⁻²', '10⁻¹', '100⁻¹', '(1/10)²'],
        correctAnswer: '10⁻²',
        explanation: '10⁻² = 1 ÷ 10² = 1 ÷ 100 = 1/100',
        wrongAnswerExplanations: {
            '10⁻¹': 'This equals 1/10, not 1/100',
            '100⁻¹': 'This equals 1/100 but is not simplified',
            '(1/10)²': 'This equals 1/100 but is not in negative exponent form'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t3_qe13',
        type: 'mcq',
        question: 'What is 5⁻² equal to?',
        options: ['1/25', '1/5', '25', '-1/25'],
        correctAnswer: '1/25',
        explanation: '5⁻² = 1 ÷ 5² = 1 ÷ 25 = 1/25',
        wrongAnswerExplanations: {
            '1/5': 'This would be 5⁻¹, not 5⁻²',
            '25': 'This would be 5², not 5⁻²',
            '-1/25': 'Negative exponent doesn`t make the fraction negative'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t3_qe14',
        type: 'mcq',
        question: 'Which of these equals 1/1000?',
        options: ['10⁻³', '10⁻²', '10⁻¹', '1000⁻¹'],
        correctAnswer: '10⁻³',
        explanation: '10⁻³ = 1 ÷ 10³ = 1 ÷ 1000 = 1/1000',
        wrongAnswerExplanations: {
                '10⁻²': 'This equals 1/100, not 1/1000',
                '10⁻¹': 'This equals 1/10, not 1/1000',
                '1000⁻¹': 'This equals 1/1000 but is not simplified'
            },
            difficulty: 'easy',
            marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t3_qe15',
        type: 'mcq',
        question: 'What is 2⁻² × 2⁻³?',
        options: ['2⁻⁵', '2⁻¹', '2⁵', '2⁻⁶'],
        correctAnswer: '2⁻⁵',
        explanation: 'When multiplying powers with same base, add exponents: 2⁻² × 2⁻³ = 2⁻²⁻³ = 2⁻⁵',
        wrongAnswerExplanations: {
            '2⁻¹': 'You need to add the exponents',
            '2⁵': 'Adding negative exponents doesn`t give positive',
            '2⁻⁶': 'This would be 2⁻³ × 2⁻³'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t3_qe16',
        type: 'mcq',
        question: 'What is 3⁻³ equal to?',
        options: ['1/27', '1/9', '1/3', '27'],
        correctAnswer: '1/27',
        explanation: '3⁻³ = 1 ÷ 3³ = 1 ÷ 27 = 1/27',
        wrongAnswerExplanations: {
            '1/9': 'This would be 3⁻², not 3⁻³',
            '1/3': 'This would be 3⁻¹, not 3⁻³',
            '27': 'This would be 3³, not 3⁻³'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t3_qe17',
        type: 'mcq',
        question: 'Which expression equals 0.2?',
        options: ['2 × 10⁻¹', '2 × 10¹', '2 × 10⁻²', '2 × 10²'],
        correctAnswer: '2 × 10⁻¹',
        explanation: '2 × 10⁻¹ = 2 × (1/10) = 2/10 = 0.2',
        wrongAnswerExplanations: {
            '2 × 10¹': 'This equals 20, not 0.2',
            '2 × 10⁻²': 'This equals 0.02, not 0.2',
            '2 × 10²': 'This equals 200, not 0.2'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t3_qe18',
        type: 'mcq',
        question: 'What is 4⁻² equal to?',
        options: ['1/16', '1/4', '16', '-1/16'],
        correctAnswer: '1/16',
        explanation: '4⁻² = 1 ÷ 4² = 1 ÷ 16 = 1/16',
        wrongAnswerExplanations: {
            '1/4': 'This would be 4⁻¹, not 4⁻²',
            '16': 'This would be 4², not 4⁻²',
            '-1/16': 'Negative exponent doesn`t make the fraction negative'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t3_qe19',
        type: 'mcq',
        question: 'Which of these equals 1/8?',
        options: ['2⁻³', '2⁻²', '2⁻¹', '8⁻¹'],
        correctAnswer: '2⁻³',
        explanation: '2⁻³ = 1 ÷ 2³ = 1 ÷ 8 = 1/8',
        wrongAnswerExplanations: {
            '2⁻²': 'This equals 1/4, not 1/8',
            '2⁻¹': 'This equals 1/2, not 1/8',
            '8⁻¹': 'This equals 1/8 but is not in terms of base 2'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t3_qe20',
        type: 'mcq',
        question: 'What is 5⁻¹ × 5⁻²?',
        options: ['5⁻³', '5⁻²', '5³', '5⁻⁴'],
        correctAnswer: '5⁻³',
            explanation: 'When multiplying powers with same base, add exponents: 5⁻¹ × 5⁻² = 5⁻¹⁻² = 5⁻³',
            wrongAnswerExplanations: {
                '5⁻²': 'You need to add the exponents',
                '5³': 'Adding negative exponents doesn`t give positive',
            '5⁻⁴': 'This would be 5⁻² × 5⁻²'
        },
            difficulty: 'easy',
            marks: 2,
            recommendedTime: 1
    }
]; 