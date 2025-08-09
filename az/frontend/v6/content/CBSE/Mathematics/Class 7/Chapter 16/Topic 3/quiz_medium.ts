import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch16_t3_qm1',
        type: 'mcq',
        question: 'If all roses are flowers and some flowers fade quickly, what can be deduced about some roses?',
        options: [
            'All roses fade quickly',
            'Some roses may fade quickly',
            'No roses fade quickly',
            'All flowers are roses'
        ],
        correctAnswer: 'Some roses may fade quickly',
        explanation: 'If some flowers fade quickly and all roses are flowers, some roses may fade quickly.',
        wrongAnswerExplanations: {
            'All roses fade quickly': 'Not all flowers fade quickly, so not all roses do.',
            'No roses fade quickly': 'Some may, since roses are flowers.',
            'All flowers are roses': 'Not all flowers are roses.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 60
    },
    // ... 19+ more questions, all MCQ, on deductive reasoning, logic puzzles, and related Class 7-appropriate content ...
]; 