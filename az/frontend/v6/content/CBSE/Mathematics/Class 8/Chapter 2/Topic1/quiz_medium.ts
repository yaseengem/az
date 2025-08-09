import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch2_t1_qm1',
        type: 'mcq',
        question: 'If 3x - 7 = 11, what is the value of x?',
        options: ['x = 6', 'x = 4', 'x = -6', 'x = 3'],
        correctAnswer: 'x = 6',
        explanation: 'Add 7 to both sides, then divide by 3: x = 6. ✏️',
        wrongAnswerExplanations: {
            'x = 4': 'Check your arithmetic; try solving step by step.',
            'x = -6': 'Negative 6 is not correct; check your steps.',
            'x = 3': '3 is too low; try solving again.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t1_qm2',
        type: 'mcq',
        question: 'Solve: 2x + 5 = 13',
        options: ['x = 4', 'x = 9', 'x = -4', 'x = 8'],
        correctAnswer: 'x = 4',
        explanation: 'Subtract 5 from both sides, then divide by 2: (13 - 5) ÷ 2 = 4. 📐',
        wrongAnswerExplanations: {
            'x = 9': 'You only subtracted 5, forgot to divide by 2.',
            'x = -4': 'Check your signs; the solution is positive.',
            'x = 8': 'This would give 2x + 5 = 21, not 13.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t1_qm3',
        type: 'mcq',
        question: 'If 5x + 3 = 2x - 9, what is x?',
        options: ['x = -4', 'x = 4', 'x = -12', 'x = 12'],
        correctAnswer: 'x = -4',
        explanation: 'Subtract 2x from both sides, subtract 3: 3x = -12, then divide by 3. 🎯',
        wrongAnswerExplanations: {
            'x = 4': 'Check your signs when solving.',
            'x = -12': 'You forgot to divide by 3 at the end.',
            'x = 12': 'This would give 5x + 3 = 2x + 9, not 2x - 9.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t1_qm4',
        type: 'mcq',
        question: 'Solve: 4(x + 2) = 24',
        options: ['x = 4', 'x = 6', 'x = 8', 'x = 10'],
        correctAnswer: 'x = 4',
        explanation: 'First divide by 4: x + 2 = 6, then subtract 2: x = 4. 🎨',
        wrongAnswerExplanations: {
            'x = 6': 'You forgot to subtract 2 at the end.',
            'x = 8': 'This would give 4(x + 2) = 40, not 24.',
            'x = 10': 'This would give 4(x + 2) = 48, not 24.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t1_qm5',
        type: 'mcq',
        question: 'What is the value of x in 3(x - 1) = 15?',
        options: ['x = 6', 'x = 4', 'x = 5', 'x = 8'],
        correctAnswer: 'x = 6',
        explanation: 'Divide by 3: x - 1 = 5, then add 1: x = 6. 🎭',
        wrongAnswerExplanations: {
            'x = 4': 'This would give 3(x - 1) = 9, not 15.',
            'x = 5': 'You forgot to add 1 at the end.',
            'x = 8': 'This would give 3(x - 1) = 21, not 15.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t1_qm6',
        type: 'mcq',
        question: 'Solve: 2(x + 3) = 3(x - 1)',
        options: ['x = 9', 'x = 7', 'x = 5', 'x = 11'],
        correctAnswer: 'x = 9',
        explanation: 'Expand brackets: 2x + 6 = 3x - 3, subtract 2x, then add 3: x = 9. 🎪',
        wrongAnswerExplanations: {
            'x = 7': 'Check your signs when combining like terms.',
            'x = 5': 'This would make the left side smaller than the right.',
            'x = 11': 'This would make the equation unbalanced.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t1_qm7',
        type: 'mcq',
        question: 'If 4(x - 2) = 2(x + 4), what is x?',
        options: ['x = 8', 'x = 6', 'x = 10', 'x = 12'],
        correctAnswer: 'x = 8',
        explanation: 'Expand: 4x - 8 = 2x + 8, subtract 2x, add 8: 2x = 16, so x = 8. 🎭',
        wrongAnswerExplanations: {
            'x = 6': 'This would make the left side smaller than the right.',
            'x = 10': 'This would make the equation unbalanced.',
            'x = 12': 'This value doesn`t satisfy the equation.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t1_qm8',
        type: 'mcq',
        question: 'Solve: 5(x + 1) = 3(x + 5)',
        options: ['x = 7', 'x = 5', 'x = 9', 'x = 11'],
        correctAnswer: 'x = 7',
        explanation: 'Expand: 5x + 5 = 3x + 15, subtract 3x, subtract 5: 2x = 10, so x = 7. 🎪',
        wrongAnswerExplanations: {
            'x = 5': 'This would make the left side smaller than the right.',
            'x = 9': 'This would make the equation unbalanced.',
            'x = 11': 'This value is too large for the equation.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t1_qm9',
        type: 'mcq',
        question: 'What is x if 3(2x - 1) = 15?',
        options: ['x = 3', 'x = 4', 'x = 5', 'x = 6'],
        correctAnswer: 'x = 3',
        explanation: 'Expand: 6x - 3 = 15, add 3: 6x = 18, divide by 6: x = 3. 🎯',
        wrongAnswerExplanations: {
            'x = 4': 'This would give 3(2x - 1) = 21, not 15.',
            'x = 5': 'This would give 3(2x - 1) = 27, not 15.',
            'x = 6': 'This would give 3(2x - 1) = 33, not 15.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t1_qm10',
        type: 'mcq',
        question: 'Solve: 4(x - 3) = 2(x + 5)',
        options: ['x = 11', 'x = 13', 'x = 15', 'x = 17'],
        correctAnswer: 'x = 11',
        explanation: 'Expand: 4x - 12 = 2x + 10, subtract 2x, add 12: 2x = 22, so x = 11. 🎨',
        wrongAnswerExplanations: {
            'x = 13': 'This would make the equation unbalanced.',
            'x = 15': 'This value is too large for the equation.',
            'x = 17': 'This would give incorrect values when substituted.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t1_qm11',
        type: 'mcq',
        question: 'If 2(3x + 1) = 4(x + 2), what is x?',
        options: ['x = 2', 'x = 3', 'x = 4', 'x = 5'],
        correctAnswer: 'x = 2',
        explanation: 'Expand: 6x + 2 = 4x + 8, subtract 4x, subtract 2: 2x = 6, so x = 2. 🎭',
        wrongAnswerExplanations: {
            'x = 3': 'This would make the equation unbalanced.',
            'x = 4': 'This value is too large for the equation.',
            'x = 5': 'This would give incorrect values when substituted.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t1_qm12',
        type: 'mcq',
        question: 'Solve: 3(2x - 4) = 2(3x + 1)',
        options: ['x = 14', 'x = 16', 'x = 18', 'x = 20'],
        correctAnswer: 'x = 14',
        explanation: 'Expand: 6x - 12 = 6x + 2, subtract 6x, add 12: 0 = 14, so x = 14. 🎪',
        wrongAnswerExplanations: {
            'x = 16': 'This would make the equation unbalanced.',
            'x = 18': 'This value is too large for the equation.',
            'x = 20': 'This would give incorrect values when substituted.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t1_qm13',
        type: 'mcq',
        question: 'What is x in 5(x - 2) = 3(x + 4)?',
        options: ['x = 10', 'x = 12', 'x = 14', 'x = 16'],
        correctAnswer: 'x = 10',
        explanation: 'Expand: 5x - 10 = 3x + 12, subtract 3x, add 10: 2x = 22, so x = 10. 🎯',
        wrongAnswerExplanations: {
            'x = 12': 'This would make the equation unbalanced.',
            'x = 14': 'This value is too large for the equation.',
            'x = 16': 'This would give incorrect values when substituted.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t1_qm14',
        type: 'mcq',
        question: 'Solve: 4(3x - 1) = 2(5x + 3)',
        options: ['x = 5', 'x = 7', 'x = 9', 'x = 11'],
        correctAnswer: 'x = 5',
        explanation: 'Expand: 12x - 4 = 10x + 6, subtract 10x, add 4: 2x = 10, so x = 5. 🎨',
        wrongAnswerExplanations: {
            'x = 7': 'This would make the equation unbalanced.',
            'x = 9': 'This value is too large for the equation.',
            'x = 11': 'This would give incorrect values when substituted.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t1_qm15',
        type: 'mcq',
        question: 'If 3(x + 2) = 2(x + 5), what is x?',
        options: ['x = 4', 'x = 6', 'x = 8', 'x = 10'],
        correctAnswer: 'x = 4',
        explanation: 'Expand: 3x + 6 = 2x + 10, subtract 2x, subtract 6: x = 4. 🎭',
        wrongAnswerExplanations: {
            'x = 6': 'This would make the equation unbalanced.',
            'x = 8': 'This value is too large for the equation.',
            'x = 10': 'This would give incorrect values when substituted.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t1_qm16',
        type: 'mcq',
        question: 'Solve: 2(4x - 3) = 3(2x + 1)',
        options: ['x = 3', 'x = 5', 'x = 7', 'x = 9'],
        correctAnswer: 'x = 3',
        explanation: 'Expand: 8x - 6 = 6x + 3, subtract 6x, add 6: 2x = 9, so x = 3. 🎪',
        wrongAnswerExplanations: {
            'x = 5': 'This would make the equation unbalanced.',
            'x = 7': 'This value is too large for the equation.',
            'x = 9': 'This would give incorrect values when substituted.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t1_qm17',
        type: 'mcq',
        question: 'What is x if 5(2x + 1) = 3(3x + 4)?',
        options: ['x = 2', 'x = 4', 'x = 6', 'x = 8'],
        correctAnswer: 'x = 2',
        explanation: 'Expand: 10x + 5 = 9x + 12, subtract 9x, subtract 5: x = 7, so x = 2. 🎯',
        wrongAnswerExplanations: {
            'x = 4': 'This would make the equation unbalanced.',
            'x = 6': 'This value is too large for the equation.',
            'x = 8': 'This would give incorrect values when substituted.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t1_qm18',
        type: 'mcq',
        question: 'Solve: 3(2x - 5) = 4(x - 2)',
        options: ['x = 7', 'x = 8', 'x = 9', 'x = 10'],
        correctAnswer: 'x = 7',
        explanation: 'Expand: 6x - 15 = 4x - 8, subtract 4x, add 15: 2x = 7, so x = 7. 🎨',
        wrongAnswerExplanations: {
            'x = 8': 'This would make the equation unbalanced.',
            'x = 9': 'This value is too large for the equation.',
            'x = 10': 'This would give incorrect values when substituted.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t1_qm19',
        type: 'mcq',
        question: 'If 4(3x - 2) = 5(2x + 1), what is x?',
        options: ['x = 8', 'x = 10', 'x = 12', 'x = 14'],
        correctAnswer: 'x = 8',
        explanation: 'Expand: 12x - 8 = 10x + 5, subtract 10x, add 8: 2x = 13, so x = 8. 🎭',
        wrongAnswerExplanations: {
            'x = 10': 'This would make the equation unbalanced.',
            'x = 12': 'This value is too large for the equation.',
            'x = 14': 'This would give incorrect values when substituted.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t1_qm20',
        type: 'mcq',
        question: 'Solve: 2(5x - 3) = 3(3x + 2)',
        options: ['x = 6', 'x = 9', 'x = 12', 'x = 15'],
        correctAnswer: 'x = 6',
        explanation: 'Expand: 10x - 6 = 9x + 6, subtract 9x, add 6: x = 12, so x = 6. 🎪',
        wrongAnswerExplanations: {
            'x = 9': 'This would make the equation unbalanced.',
            'x = 12': 'This value is too large for the equation.',
            'x = 15': 'This would give incorrect values when substituted.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    }
];