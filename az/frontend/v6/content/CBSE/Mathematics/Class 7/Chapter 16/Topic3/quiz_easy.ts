import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch16_t3_qe1',
        type: 'mcq',
        question: 'Which of the following best describes deductive reasoning?',
        options: [
            'Drawing a general conclusion from specific examples',
            'Drawing a specific conclusion from general principles',
            'Guessing based on intuition',
            'Making decisions based on emotions'
        ],
        correctAnswer: 'Drawing a specific conclusion from general principles',
        explanation: 'Deductive reasoning starts with general principles to reach a specific conclusion.',
        wrongAnswerExplanations: {
            'Drawing a general conclusion from specific examples': 'That is inductive reasoning, not deductive.',
            'Guessing based on intuition': 'Deductive reasoning is logical, not based on intuition.',
            'Making decisions based on emotions': 'Deductive reasoning is logical, not emotional.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 45
    },
    // ... 19+ more questions, all MCQ, on deductive reasoning, logic puzzles, and related Class 7-appropriate content ...
]; 