import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch10_t1_qm1',
        type: 'mcq',
        question: 'What is the value of (2³ × 3²)²?',
        options: ['2⁶ × 3⁴', '(6)⁵', '72²', '144'],
        correctAnswer: '2⁶ × 3⁴',
        explanation: 'First use power of product rule: (2³ × 3²)² = (2³)² × (3²)² = 2⁶ × 3⁴',
        wrongAnswerExplanations: {
            '(6)⁵': 'You multiplied the bases first which is incorrect',
            '72²': 'You calculated the product first then squared',
            '144': 'This is the calculated value, not the expression'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch10_t1_qm2',
        type: 'mcq',
        question: 'If 2⁴ × 5ⁿ = 1000, what is the value of n?',
        options: ['2', '3', '4', '5'],
        correctAnswer: '3',
        explanation: '2⁴ × 5³ = 16 × 125 = 1000, so n = 3',
        wrongAnswerExplanations: {
            '2': 'This gives a value less than 1000',
            '4': 'This gives a value greater than 1000',
            '5': 'This gives a value much greater than 1000'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch10_t1_qm3',
        type: 'mcq',
        question: 'What is (4² × 2³) ÷ (2⁴ × 4)?',
        options: ['2³', '4²', '8', '16'],
        correctAnswer: '2³',
        explanation: '(4² × 2³) ÷ (2⁴ × 4) = (2⁴ × 2³) ÷ (2⁴ × 2²) = 2⁷⁻⁶ = 2¹ = 2³⁻² = 2¹',
        wrongAnswerExplanations: {
            '4²': 'You did not convert 4 to powers of 2',
            '8': 'You only considered some of the terms',
            '16': 'You multiplied instead of dividing some terms'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch10_t1_qm4',
        type: 'mcq',
        question: 'What is the value of (2⁵ × 3⁴) ÷ (2³ × 3²)?',
        options: ['2² × 3²', '2⁸ × 3⁶', '6³', '72'],
        correctAnswer: '2² × 3²',
        explanation: '(2⁵ × 3⁴) ÷ (2³ × 3²) = 2⁵⁻³ × 3⁴⁻² = 2² × 3²',
        wrongAnswerExplanations: {
            '2⁸ × 3⁶': 'You added the exponents instead of subtracting',
            '6³': 'You multiplied the bases first which is incorrect',
            '72': 'This is the calculated value, not the expression'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch10_t1_qm5',
        type: 'mcq',
        question: 'If (2ᵃ)³ = 64, what is the value of a?',
        options: ['1', '2', '3', '4'],
        correctAnswer: '2',
        explanation: '(2ᵃ)³ = 2³ᵃ = 64 = 2⁶, so 3a = 6, therefore a = 2',
        wrongAnswerExplanations: {
            '1': 'This would give 2³ = 8, not 64',
            '3': 'This would give 2⁹ = 512, too large',
            '4': 'This would give 2¹² = 4096, much too large'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch10_t1_qm6',
        type: 'mcq',
        question: 'What is (3² × 2)³ ÷ (3³ × 2²)?',
        options: ['3³', '2⁴', '18', '54'],
        correctAnswer: '3³',
        explanation: '(3² × 2)³ ÷ (3³ × 2²) = (3⁶ × 2³) ÷ (3³ × 2²) = 3³ × 2¹ = 3³ × 2',
        wrongAnswerExplanations: {
            '2⁴': 'You focused only on powers of 2',
            '18': 'You calculated partially and incorrectly',
            '54': 'This is the calculated value, not the expression'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch10_t1_qm7',
        type: 'mcq',
        question: 'If 3ᵃ × 3⁴ = 3⁹, what is the value of a?',
        options: ['3', '5', '13', '36'],
        correctAnswer: '5',
        explanation: '3ᵃ × 3⁴ = 3ᵃ⁺⁴ = 3⁹, so a + 4 = 9, therefore a = 5',
        wrongAnswerExplanations: {
            '3': 'This would give 3⁷, not 3⁹',
            '13': 'You added 9 and 4',
            '36': 'You multiplied 9 and 4'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch10_t1_qm8',
        type: 'mcq',
        question: 'What is (2⁴ × 5²)² ÷ (2⁵ × 5³)?',
        options: ['2³ × 5', '2⁸ × 5⁴', '100', '200'],
        correctAnswer: '2³ × 5',
        explanation: '(2⁴ × 5²)² ÷ (2⁵ × 5³) = (2⁸ × 5⁴) ÷ (2⁵ × 5³) = 2³ × 5',
        wrongAnswerExplanations: {
            '2⁸ × 5⁴': 'You did not divide by the denominator',
            '100': 'This is a calculated value, not the expression',
            '200': 'This is an incorrect calculated value'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch10_t1_qm9',
        type: 'mcq',
        question: 'If (2ᵃ × 3ᵇ)² = 2⁶ × 3⁸, what are the values of a and b?',
        options: ['a=3, b=4', 'a=2, b=3', 'a=4, b=2', 'a=6, b=8'],
        correctAnswer: 'a=3, b=4',
        explanation: '(2ᵃ × 3ᵇ)² = 2²ᵃ × 3²ᵇ = 2⁶ × 3⁸, so 2a=6 and 2b=8, therefore a=3, b=4',
        wrongAnswerExplanations: {
            'a=2, b=3': 'These values give smaller powers than required',
            'a=4, b=2': 'These values give incorrect powers',
            'a=6, b=8': 'You did not divide the final powers by 2'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch10_t1_qm10',
        type: 'mcq',
        question: 'What is (2³ × 3²)³ ÷ (2⁵ × 3⁴)?',
        options: ['2⁴ × 3²', '2² × 3⁴', '72', '144'],
        correctAnswer: '2⁴ × 3²',
        explanation: '(2³ × 3²)³ ÷ (2⁵ × 3⁴) = (2⁹ × 3⁶) ÷ (2⁵ × 3⁴) = 2⁴ × 3²',
        wrongAnswerExplanations: {
            '2² × 3⁴': 'You subtracted exponents incorrectly',
            '72': 'This is a calculated value, not the expression',
            '144': 'This is an incorrect calculated value'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch10_t1_qm11',
        type: 'mcq',
        question: 'If 2ᵃ = 8 and 2ᵇ = 32, what is the value of a + b?',
        options: ['3', '5', '8', '35'],
        correctAnswer: '8',
        explanation: 'If 2ᵃ = 8, then a = 3. If 2ᵇ = 32, then b = 5. Therefore a + b = 3 + 5 = 8',
        wrongAnswerExplanations: {
            '3': 'This is only the value of a',
            '5': 'This is only the value of b',
            '35': 'You concatenated 3 and 5 instead of adding'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch10_t1_qm12',
        type: 'mcq',
        question: 'What is (4³)² ÷ (2³)³?',
        options: ['2³', '4²', '8', '16'],
        correctAnswer: '2³',
        explanation: '(4³)² = (2⁶)² = 2¹², (2³)³ = 2⁹, so 2¹² ÷ 2⁹ = 2³',
        wrongAnswerExplanations: {
            '4²': 'You did not convert 4 to powers of 2',
            '8': 'This is the calculated value, not the expression',
            '16': 'This is 2⁴, not 2³'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch10_t1_qm13',
        type: 'mcq',
        question: 'If 5ᵃ × 5⁴ = 5¹², what is the value of a?',
        options: ['3', '8', '16', '20'],
        correctAnswer: '8',
        explanation: '5ᵃ × 5⁴ = 5ᵃ⁺⁴ = 5¹², so a + 4 = 12, therefore a = 8',
        wrongAnswerExplanations: {
            '3': 'This would give 5⁷, not 5¹²',
            '16': 'You multiplied 4 by 4',
            '20': 'You added 12 and 8'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch10_t1_qm14',
        type: 'mcq',
        question: 'What is (3² × 2³)² ÷ (3³ × 2²)?',
        options: ['3 × 2⁴', '6⁴', '72', '144'],
        correctAnswer: '3 × 2⁴',
        explanation: '(3² × 2³)² ÷ (3³ × 2²) = (3⁴ × 2⁶) ÷ (3³ × 2²) = 3 × 2⁴',
        wrongAnswerExplanations: {
            '6⁴': 'You multiplied the bases which is incorrect',
            '72': 'This is a calculated value, not the expression',
            '144': 'This is an incorrect calculated value'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch10_t1_qm15',
        type: 'mcq',
        question: 'If (3ᵃ)² = 729, what is the value of a?',
        options: ['3', '4', '5', '6'],
        correctAnswer: '3',
        explanation: '(3ᵃ)² = 3²ᵃ = 729 = 3⁶, so 2a = 6, therefore a = 3',
        wrongAnswerExplanations: {
            '4': 'This would give 3⁸, too large',
            '5': 'This would give 3¹⁰, much too large',
            '6': 'This is the final power, not a'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch10_t1_qm16',
        type: 'mcq',
        question: 'What is (2⁴ × 5²)³ ÷ (2⁸ × 5³)?',
        options: ['2⁴ × 5³', '2⁸ × 5⁴', '1000', '2000'],
        correctAnswer: '2⁴ × 5³',
        explanation: '(2⁴ × 5²)³ ÷ (2⁸ × 5³) = (2¹² × 5⁶) ÷ (2⁸ × 5³) = 2⁴ × 5³',
        wrongAnswerExplanations: {
            '2⁸ × 5⁴': 'You added instead of subtracting some exponents',
            '1000': 'This is a calculated value, not the expression',
            '2000': 'This is an incorrect calculated value'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch10_t1_qm17',
        type: 'mcq',
        question: 'If 2ᵃ × 3ᵇ = 72 and a = 3, what is b?',
        options: ['1', '2', '3', '4'],
        correctAnswer: '2',
        explanation: '2³ × 3ᵇ = 72, so 8 × 3ᵇ = 72, therefore 3ᵇ = 9, so b = 2',
        wrongAnswerExplanations: {
            '1': 'This gives too small a value',
            '3': 'This gives too large a value',
            '4': 'This gives much too large a value'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch10_t1_qm18',
        type: 'mcq',
        question: 'What is (2² × 3³)² ÷ (2³ × 3⁴)?',
        options: ['2 × 3²', '2⁴ × 3⁶', '18', '36'],
        correctAnswer: '2 × 3²',
        explanation: '(2² × 3³)² ÷ (2³ × 3⁴) = (2⁴ × 3⁶) ÷ (2³ × 3⁴) = 2 × 3²',
        wrongAnswerExplanations: {
            '2⁴ × 3⁶': 'You did not divide by the denominator',
            '18': 'This is a calculated value, not the expression',
            '36': 'This is an incorrect calculated value'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch10_t1_qm19',
        type: 'mcq',
        question: 'If 4ᵃ = 256, what is the value of a?',
        options: ['3', '4', '8', '16'],
        correctAnswer: '4',
        explanation: '4ᵃ = 256 = 4⁴, therefore a = 4',
        wrongAnswerExplanations: {
            '3': 'This gives 64, which is too small',
            '8': 'This gives too large a value',
            '16': 'This is much too large'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch10_t1_qm20',
        type: 'mcq',
        question: 'What is (5² × 2)³ ÷ (5³ × 2²)?',
        options: ['5³', '2⁴', '125', '250'],
        correctAnswer: '5³',
        explanation: '(5² × 2)³ ÷ (5³ × 2²) = (5⁶ × 2³) ÷ (5³ × 2²) = 5³ × 2',
        wrongAnswerExplanations: {
            '2⁴': 'You focused only on powers of 2',
            '125': 'This is 5³ calculated, not the expression',
            '250': 'This is the calculated value, not the expression'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 2
    }
]; 