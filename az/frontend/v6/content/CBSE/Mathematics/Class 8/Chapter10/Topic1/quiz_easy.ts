import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch10_t1_qe1',
        type: 'mcq',
        question: 'What is the value of 2³ × 2⁴?',
        options: ['2⁷', '2¹²', '4⁷', '8⁷'],
        correctAnswer: '2⁷',
        explanation: 'When multiplying powers with same base, add the exponents: 2³ × 2⁴ = 2³⁺⁴ = 2⁷',
        wrongAnswerExplanations: {
            '2¹²': 'You multiplied the exponents instead of adding them',
            '4⁷': 'You changed the base to 4 which is incorrect',
            '8⁷': 'You changed the base to 8 which is incorrect'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t1_qe2',
        type: 'mcq',
        question: 'What is the value of 5⁴ ÷ 5²?',
        options: ['5²', '5⁶', '25', '125'],
        correctAnswer: '5²',
        explanation: 'When dividing powers with same base, subtract the exponents: 5⁴ ÷ 5² = 5⁴⁻² = 5²',
        wrongAnswerExplanations: {
            '5⁶': 'You added the exponents instead of subtracting them',
            '25': 'You calculated 5² which is not the answer',
            '125': 'You calculated 5³ which is not the answer'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t1_qe3',
        type: 'mcq',
        question: 'What is (3²)³?',
        options: ['3⁵', '3⁶', '9³', '27²'],
        correctAnswer: '3⁶',
        explanation: 'When raising a power to another power, multiply the exponents: (3²)³ = 3²ˣ³ = 3⁶',
        wrongAnswerExplanations: {
            '3⁵': 'You added the exponents instead of multiplying them',
            '9³': 'You calculated 3² first which is incorrect',
            '27²': 'You calculated (3²)³ as a number first which is incorrect'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t1_qe4',
        type: 'mcq',
        question: 'What is (2 × 3)²?',
        options: ['2² × 3²', '4 × 9', '36', '12'],
        correctAnswer: '2² × 3²',
        explanation: 'When raising a product to a power, each factor is raised to that power: (2 × 3)² = 2² × 3²',
        wrongAnswerExplanations: {
            '4 × 9': 'This is the calculated value, not the expression',
            '36': 'This is the final answer, not the expression',
            '12': 'You only multiplied 2 × 3 without squaring'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t1_qe5',
        type: 'mcq',
        question: 'What is 7⁰?',
        options: ['0', '1', '7', '∞'],
        correctAnswer: '1',
        explanation: 'Any number (except 0) raised to the power 0 equals 1',
        wrongAnswerExplanations: {
            '0': 'Any number raised to 0 is not 0',
            '7': 'A number raised to 0 is not equal to itself',
            '∞': 'A number raised to 0 is not infinity'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t1_qe6',
        type: 'mcq',
        question: 'What is 1⁵?',
        options: ['0', '1', '5', '25'],
        correctAnswer: '1',
        explanation: '1 raised to any power equals 1',
        wrongAnswerExplanations: {
            '0': '1 raised to any power is never 0',
            '5': 'The exponent does not become the answer',
            '25': 'You confused it with 5²'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t1_qe7',
        type: 'mcq',
        question: 'If 2³ = 8, what is (2³)²?',
        options: ['16', '32', '64', '128'],
        correctAnswer: '64',
        explanation: '(2³)² = 2⁶ = 64, as we multiply the exponents when raising a power to another power',
        wrongAnswerExplanations: {
            '16': 'You only squared 8 once',
            '32': 'You added the exponents instead of multiplying',
            '128': 'You multiplied 8 by 16 which is incorrect'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t1_qe8',
        type: 'mcq',
        question: 'What is 4² × 4³?',
        options: ['4⁵', '4⁶', '16 × 64', '256'],
        correctAnswer: '4⁵',
        explanation: 'When multiplying powers with same base, add the exponents: 4² × 4³ = 4²⁺³ = 4⁵',
        wrongAnswerExplanations: {
            '4⁶': 'You added one extra to the exponent',
            '16 × 64': 'You calculated each power separately which is not needed',
            '256': 'This is the calculated value, not the expression'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t1_qe9',
        type: 'mcq',
        question: 'What is 10³ ÷ 10²?',
        options: ['10', '10⁵', '100', '1000'],
        correctAnswer: '10',
        explanation: 'When dividing powers with same base, subtract the exponents: 10³ ÷ 10² = 10³⁻² = 10¹ = 10',
        wrongAnswerExplanations: {
            '10⁵': 'You added the exponents instead of subtracting',
            '100': 'This is 10², not 10³ ÷ 10²',
            '1000': 'This is 10³, not 10³ ÷ 10²'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t1_qe10',
        type: 'mcq',
        question: 'What is (2 × 5)³?',
        options: ['2³ × 5³', '10³', '30³', '1000'],
        correctAnswer: '2³ × 5³',
        explanation: 'When raising a product to a power, each factor is raised to that power: (2 × 5)³ = 2³ × 5³',
        wrongAnswerExplanations: {
            '10³': 'You multiplied inside parentheses first which is incorrect',
            '30³': 'You multiplied 2 × 5 first which is incorrect',
            '1000': 'This is the calculated value, not the expression'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t1_qe11',
        type: 'mcq',
        question: 'What is 6¹?',
        options: ['1', '0', '6', '36'],
        correctAnswer: '6',
        explanation: 'Any number raised to power 1 equals the number itself',
        wrongAnswerExplanations: {
            '1': 'Power 1 is not the same as power 0',
            '0': 'A number raised to 1 is not 0',
            '36': 'You squared the number instead of using power 1'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t1_qe12',
        type: 'mcq',
        question: 'What is 3² × 3⁰?',
        options: ['3²', '3³', '9', '1'],
        correctAnswer: '3²',
        explanation: '3² × 3⁰ = 3²⁺⁰ = 3², since any number raised to power 0 equals 1',
        wrongAnswerExplanations: {
            '3³': 'You added 1 instead of 0 to the exponent',
            '9': 'This is the calculated value, not the expression',
            '1': 'You only considered 3⁰'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t1_qe13',
        type: 'mcq',
        question: 'What is (2²)⁰?',
        options: ['0', '1', '2', '4'],
        correctAnswer: '1',
        explanation: 'Any number (except 0) raised to power 0 equals 1, regardless of its base',
        wrongAnswerExplanations: {
            '0': 'Power 0 never gives 0 as result',
            '2': 'You ignored both powers',
            '4': 'You only calculated 2²'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t1_qe14',
        type: 'mcq',
        question: 'What is 8² ÷ 8²?',
        options: ['8⁴', '8⁰', '64', '1'],
        correctAnswer: '1',
        explanation: 'When dividing same powers, 8² ÷ 8² = 8²⁻² = 8⁰ = 1',
        wrongAnswerExplanations: {
            '8⁴': 'You added the exponents instead of subtracting',
            '8⁰': 'This is the step before the final answer',
            '64': 'You only calculated 8²'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t1_qe15',
        type: 'mcq',
        question: 'What is (3 × 4)¹?',
        options: ['3¹ × 4¹', '7', '12', '34'],
        correctAnswer: '12',
        explanation: 'Any expression raised to power 1 equals the expression itself: (3 × 4)¹ = 12',
        wrongAnswerExplanations: {
            '3¹ × 4¹': 'Power 1 means the expression stays as is',
            '7': 'You added instead of multiplying',
            '34': 'You concatenated the numbers'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t1_qe16',
        type: 'mcq',
        question: 'What is 5³ × 5⁰?',
        options: ['5⁰', '5¹', '5²', '5³'],
        correctAnswer: '5³',
        explanation: '5³ × 5⁰ = 5³⁺⁰ = 5³, since any number raised to power 0 equals 1',
        wrongAnswerExplanations: {
            '5⁰': 'You only considered the second term',
            '5¹': 'You subtracted instead of adding exponents',
            '5²': 'You subtracted 1 from the exponent'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t1_qe17',
        type: 'mcq',
        question: 'What is (7¹)²?',
        options: ['7', '7²', '7³', '49'],
        correctAnswer: '7²',
        explanation: '(7¹)² = 7¹ˣ² = 7², as we multiply the exponents when raising a power to another power',
        wrongAnswerExplanations: {
            '7': 'You only considered power 1',
            '7³': 'You added the exponents instead of multiplying',
            '49': 'This is the calculated value, not the expression'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t1_qe18',
        type: 'mcq',
        question: 'What is 2² × 3²?',
        options: ['5⁴', '6⁴', '36', '13'],
        correctAnswer: '36',
        explanation: '2² × 3² = 4 × 9 = 36, multiply the powers separately then multiply the results',
        wrongAnswerExplanations: {
            '5⁴': 'You added the bases and multiplied by total power',
            '6⁴': 'You multiplied the bases and kept total power',
            '13': 'You added all numbers'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t1_qe19',
        type: 'mcq',
        question: 'What is 9¹ × 9²?',
        options: ['9²', '9³', '9⁴', '81'],
        correctAnswer: '9³',
        explanation: '9¹ × 9² = 9¹⁺² = 9³, add exponents when multiplying same base numbers',
        wrongAnswerExplanations: {
            '9²': 'You only considered the second power',
            '9⁴': 'You multiplied the exponents instead of adding',
            '81': 'This is 9², not 9³'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch10_t1_qe20',
        type: 'mcq',
        question: 'What is (2 × 3 × 4)¹?',
        options: ['9', '14', '24', '234'],
        correctAnswer: '24',
        explanation: 'Any expression raised to power 1 equals the expression itself: (2 × 3 × 4)¹ = 24',
        wrongAnswerExplanations: {
            '9': 'You only multiplied 2 × 3',
            '14': 'You added all numbers',
            '234': 'You concatenated all numbers'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    }
]; 