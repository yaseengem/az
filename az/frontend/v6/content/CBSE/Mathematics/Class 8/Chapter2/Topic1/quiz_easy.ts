import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    // 20+ MCQs on Solving linear equations, each with id 'cl8_ch2_t1_qeX', type 'mcq', unique options, clear explanations (<30 words), and appropriate emojis.
    {
        id: 'cl8_ch2_t1_qe1',
        type: 'mcq',
        question: 'What is the solution to the equation x + 5 = 12?',
        options: ['x = 7', 'x = 17', 'x = -7', 'x = 5'],
        correctAnswer: 'x = 7',
        explanation: 'Subtract 5 from both sides: x = 12 - 5 = 7. 🧮',
        wrongAnswerExplanations: {
            'x = 17': 'Adding 5 to 12 gives 17, not the solution.',
            'x = -7': 'Negative 7 is not correct; check your subtraction.',
            'x = 5': '5 is the constant, not the solution.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t1_qe2',
        type: 'mcq',
        question: 'Solve: 2x = 14',
        options: ['x = 7', 'x = 12', 'x = 16', 'x = 28'],
        correctAnswer: 'x = 7',
        explanation: 'Divide both sides by 2: x = 14 ÷ 2 = 7. 🔢',
        wrongAnswerExplanations: {
            'x = 12': 'This is incorrect. 2 × 12 = 24, not 14.',
            'x = 16': 'This is incorrect. 2 × 16 = 32, not 14.',
            'x = 28': 'This is incorrect. You multiplied by 2 instead of dividing.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t1_qe3',
        type: 'mcq',
        question: 'What is the value of x in x - 8 = 4?',
        options: ['x = 12', 'x = -4', 'x = 4', 'x = -12'],
        correctAnswer: 'x = 12',
        explanation: 'Add 8 to both sides: x = 4 + 8 = 12. ➕',
        wrongAnswerExplanations: {
            'x = -4': 'Adding 8 to -4 gives 4, but we need to add 8 to 4.',
            'x = 4': 'This is the number on the right side, not the solution.',
            'x = -12': 'This would give x - 8 = -20, not 4.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t1_qe4',
        type: 'mcq',
        question: 'Solve: x/3 = 6',
        options: ['x = 18', 'x = 2', 'x = 9', 'x = 3'],
        correctAnswer: 'x = 18',
        explanation: 'Multiply both sides by 3: x = 6 × 3 = 18. 📝',
        wrongAnswerExplanations: {
            'x = 2': 'This is incorrect. 2 ÷ 3 = ⅔, not 6.',
            'x = 9': 'This would give x/3 = 3, not 6.',
            'x = 3': 'This would give x/3 = 1, not 6.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t1_qe5',
        type: 'mcq',
        question: 'What is the solution to 5x = 25?',
        options: ['x = 5', 'x = 20', 'x = 125', 'x = 30'],
        correctAnswer: 'x = 5',
        explanation: 'Divide both sides by 5: x = 25 ÷ 5 = 5. ➗',
        wrongAnswerExplanations: {
            'x = 20': 'This would give 5x = 100, not 25.',
            'x = 125': 'This would give 5x = 625, not 25.',
            'x = 30': 'This would give 5x = 150, not 25.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t1_qe6',
        type: 'mcq',
        question: 'Solve: x + 3 = 0',
        options: ['x = -3', 'x = 3', 'x = 0', 'x = -1'],
        correctAnswer: 'x = -3',
        explanation: 'Subtract 3 from both sides: x = 0 - 3 = -3. 🔍',
        wrongAnswerExplanations: {
            'x = 3': 'This would give x + 3 = 6, not 0.',
            'x = 0': 'This would give x + 3 = 3, not 0.',
            'x = -1': 'This would give x + 3 = 2, not 0.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t1_qe7',
        type: 'mcq',
        question: 'What is the value of x in 4x = 12?',
        options: ['x = 3', 'x = 8', 'x = 16', 'x = 48'],
        correctAnswer: 'x = 3',
        explanation: 'Divide both sides by 4: x = 12 ÷ 4 = 3. 🧮',
        wrongAnswerExplanations: {
            'x = 8': 'This would give 4x = 32, not 12.',
            'x = 16': 'This would give 4x = 64, not 12.',
            'x = 48': 'This is 4 × 12, not 12 ÷ 4.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t1_qe8',
        type: 'mcq',
        question: 'Solve: x - 5 = 7',
        options: ['x = 12', 'x = 2', 'x = -2', 'x = -12'],
        correctAnswer: 'x = 12',
        explanation: 'Add 5 to both sides: x = 7 + 5 = 12. ✨',
        wrongAnswerExplanations: {
            'x = 2': 'This would give x - 5 = -3, not 7.',
            'x = -2': 'This would give x - 5 = -7, not 7.',
            'x = -12': 'This would give x - 5 = -17, not 7.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t1_qe9',
        type: 'mcq',
        question: 'What is the solution to 6x = 30?',
        options: ['x = 5', 'x = 24', 'x = 36', 'x = 180'],
        correctAnswer: 'x = 5',
        explanation: 'Divide both sides by 6: x = 30 ÷ 6 = 5. 📊',
        wrongAnswerExplanations: {
            'x = 24': 'This would give 6x = 144, not 30.',
            'x = 36': 'This would give 6x = 216, not 30.',
            'x = 180': 'This is 6 × 30, not 30 ÷ 6.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t1_qe10',
        type: 'mcq',
        question: 'Solve: x + 8 = 15',
        options: ['x = 7', 'x = 23', 'x = -7', 'x = 8'],
        correctAnswer: 'x = 7',
        explanation: 'Subtract 8 from both sides: x = 15 - 8 = 7. 🎯',
        wrongAnswerExplanations: {
            'x = 23': 'This is adding 8 to 15, not subtracting.',
            'x = -7': 'This would give x + 8 = 1, not 15.',
            'x = 8': 'This is the number being added, not the solution.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t1_qe11',
        type: 'mcq',
        question: 'What is the value of x in 3x = 21?',
        options: ['x = 7', 'x = 18', 'x = 24', 'x = 63'],
        correctAnswer: 'x = 7',
        explanation: 'Divide both sides by 3: x = 21 ÷ 3 = 7. 🎨',
        wrongAnswerExplanations: {
            'x = 18': 'This would give 3x = 54, not 21.',
            'x = 24': 'This would give 3x = 72, not 21.',
            'x = 63': 'This is 3 × 21, not 21 ÷ 3.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t1_qe12',
        type: 'mcq',
        question: 'Solve: x - 10 = 5',
        options: ['x = 15', 'x = -5', 'x = 5', 'x = -15'],
        correctAnswer: 'x = 15',
        explanation: 'Add 10 to both sides: x = 5 + 10 = 15. 🎭',
        wrongAnswerExplanations: {
            'x = -5': 'This would give x - 10 = -15, not 5.',
            'x = 5': 'This is the number on the right side, not the solution.',
            'x = -15': 'This would give x - 10 = -25, not 5.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t1_qe13',
        type: 'mcq',
        question: 'What is the solution to 8x = 40?',
        options: ['x = 5', 'x = 32', 'x = 48', 'x = 320'],
        correctAnswer: 'x = 5',
        explanation: 'Divide both sides by 8: x = 40 ÷ 8 = 5. 🎪',
        wrongAnswerExplanations: {
            'x = 32': 'This would give 8x = 256, not 40.',
            'x = 48': 'This would give 8x = 384, not 40.',
            'x = 320': 'This is 8 × 40, not 40 ÷ 8.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t1_qe14',
        type: 'mcq',
        question: 'Solve: x + 6 = 10',
        options: ['x = 4', 'x = 16', 'x = -4', 'x = 6'],
        correctAnswer: 'x = 4',
        explanation: 'Subtract 6 from both sides: x = 10 - 6 = 4. 🎠',
        wrongAnswerExplanations: {
            'x = 16': 'This is adding 6 to 10, not subtracting.',
            'x = -4': 'This would give x + 6 = 2, not 10.',
            'x = 6': 'This is the number being added, not the solution.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t1_qe15',
        type: 'mcq',
        question: 'What is the value of x in 7x = 28?',
        options: ['x = 4', 'x = 21', 'x = 35', 'x = 196'],
        correctAnswer: 'x = 4',
        explanation: 'Divide both sides by 7: x = 28 ÷ 7 = 4. 🎡',
        wrongAnswerExplanations: {
            'x = 21': 'This would give 7x = 147, not 28.',
            'x = 35': 'This would give 7x = 245, not 28.',
            'x = 196': 'This is 7 × 28, not 28 ÷ 7.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t1_qe16',
        type: 'mcq',
        question: 'Solve: x - 4 = 8',
        options: ['x = 12', 'x = 4', 'x = -4', 'x = -12'],
        correctAnswer: 'x = 12',
        explanation: 'Add 4 to both sides: x = 8 + 4 = 12. 🎢',
        wrongAnswerExplanations: {
            'x = 4': 'This would give x - 4 = 0, not 8.',
            'x = -4': 'This would give x - 4 = -8, not 8.',
            'x = -12': 'This would give x - 4 = -16, not 8.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t1_qe17',
        type: 'mcq',
        question: 'What is the solution to 9x = 45?',
        options: ['x = 5', 'x = 36', 'x = 54', 'x = 405'],
        correctAnswer: 'x = 5',
        explanation: 'Divide both sides by 9: x = 45 ÷ 9 = 5. 🎪',
        wrongAnswerExplanations: {
            'x = 36': 'This would give 9x = 324, not 45.',
            'x = 54': 'This would give 9x = 486, not 45.',
            'x = 405': 'This is 9 × 45, not 45 ÷ 9.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t1_qe18',
        type: 'mcq',
        question: 'Solve: x + 9 = 20',
        options: ['x = 11', 'x = 29', 'x = -11', 'x = 9'],
        correctAnswer: 'x = 11',
        explanation: 'Subtract 9 from both sides: x = 20 - 9 = 11. 🎭',
        wrongAnswerExplanations: {
            'x = 29': 'This is adding 9 to 20, not subtracting.',
            'x = -11': 'This would give x + 9 = -2, not 20.',
            'x = 9': 'This is the number being added, not the solution.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t1_qe19',
        type: 'mcq',
        question: 'What is the value of x in 10x = 50?',
        options: ['x = 5', 'x = 40', 'x = 60', 'x = 500'],
        correctAnswer: 'x = 5',
        explanation: 'Divide both sides by 10: x = 50 ÷ 10 = 5. 🎪',
        wrongAnswerExplanations: {
            'x = 40': 'This would give 10x = 400, not 50.',
            'x = 60': 'This would give 10x = 600, not 50.',
            'x = 500': 'This is 10 × 50, not 50 ÷ 10.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t1_qe20',
        type: 'mcq',
        question: 'Solve: x - 6 = 9',
        options: ['x = 15', 'x = 3', 'x = -3', 'x = -15'],
        correctAnswer: 'x = 15',
        explanation: 'Add 6 to both sides: x = 9 + 6 = 15. 🎯',
        wrongAnswerExplanations: {
            'x = 3': 'This would give x - 6 = -3, not 9.',
            'x = -3': 'This would give x - 6 = -9, not 9.',
            'x = -15': 'This would give x - 6 = -21, not 9.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    }
]; 