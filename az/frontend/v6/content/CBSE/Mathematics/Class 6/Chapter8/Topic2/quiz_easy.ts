import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch8_t2_qe1',
        type: "mcq",
        question: "What is 0.5 + 0.3?",
        options: ["0.8", "0.2", "0.15", "0.53"],
        correctAnswer: "0.8",
        explanation: "When adding 0.5 and 0.3, we add the tenths place: 5 + 3 = 8 tenths, which is 0.8. ➕",
        wrongAnswerExplanations: {
            "0.2": "This is the difference between 0.5 and 0.3, not the sum.",
            "0.15": "This is the product of 0.5 and 0.3, not the sum.",
            "0.53": "This is just placing the numbers side by side, not adding them."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch8_t2_qe2',
        type: "mcq",
        question: "What is 1.2 - 0.5?",
        options: ["0.7", "1.7", "0.3", "0.5"],
        correctAnswer: "0.7",
        explanation: "When subtracting 0.5 from 1.2, we subtract the tenths place: 12 tenths - 5 tenths = 7 tenths, which is 0.7. ➖",
        wrongAnswerExplanations: {
            "1.7": "This is the sum of 1.2 and 0.5, not the difference.",
            "0.3": "This is the difference between 0.5 and 0.2, not 1.2 and 0.5.",
            "0.5": "This is the number being subtracted, not the result."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch8_t2_qe3',
        type: "mcq",
        question: "What is 0.25 + 0.15?",
        options: ["0.40", "0.10", "0.30", "0.20"],
        correctAnswer: "0.40",
        explanation: "When adding 0.25 and 0.15, we add both tenths and hundredths: 0.25 + 0.15 = 0.40. ➕",
        wrongAnswerExplanations: {
            "0.10": "This is the difference between 0.25 and 0.15, not the sum.",
            "0.30": "This is close but incorrect. The correct sum is 0.40.",
            "0.20": "This is the difference between 0.25 and 0.05, not the sum."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch8_t2_qe4',
        type: "mcq",
        question: "What is 0.8 - 0.3?",
        options: ["0.5", "1.1", "0.4", "0.6"],
        correctAnswer: "0.5",
        explanation: "When subtracting 0.3 from 0.8, we subtract the tenths place: 8 tenths - 3 tenths = 5 tenths, which is 0.5. ➖",
        wrongAnswerExplanations: {
            "1.1": "This is the sum of 0.8 and 0.3, not the difference.",
            "0.4": "This is the difference between 0.7 and 0.3, not 0.8 and 0.3.",
            "0.6": "This is the difference between 0.9 and 0.3, not 0.8 and 0.3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch8_t2_qe5',
        type: "mcq",
        question: "What is 0.4 + 0.6?",
        options: ["1.0", "0.10", "0.2", "0.8"],
        correctAnswer: "1.0",
        explanation: "When adding 0.4 and 0.6, we add the tenths place: 4 tenths + 6 tenths = 10 tenths, which is 1.0. ➕",
        wrongAnswerExplanations: {
            "0.10": "This is incorrect. 10 tenths make 1 whole.",
            "0.2": "This is the difference between 0.6 and 0.4, not the sum.",
            "0.8": "This is the sum of 0.4 and 0.4, not 0.4 and 0.6."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch8_t2_qe6',
        type: "mcq",
        question: "What is 1.5 - 0.7?",
        options: ["0.8", "2.2", "0.6", "0.9"],
        correctAnswer: "0.8",
        explanation: "When subtracting 0.7 from 1.5, we subtract the tenths place: 15 tenths - 7 tenths = 8 tenths, which is 0.8. ➖",
        wrongAnswerExplanations: {
            "2.2": "This is the sum of 1.5 and 0.7, not the difference.",
            "0.6": "This is the difference between 1.3 and 0.7, not 1.5 and 0.7.",
            "0.9": "This is the difference between 1.6 and 0.7, not 1.5 and 0.7."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch8_t2_qe7',
        type: "mcq",
        question: "What is 0.35 + 0.25?",
        options: ["0.60", "0.10", "0.50", "0.40"],
        correctAnswer: "0.60",
        explanation: "When adding 0.35 and 0.25, we add both tenths and hundredths: 0.35 + 0.25 = 0.60. ➕",
        wrongAnswerExplanations: {
            "0.10": "This is the difference between 0.35 and 0.25, not the sum.",
            "0.50": "This is the sum of 0.25 and 0.25, not 0.35 and 0.25.",
            "0.40": "This is the sum of 0.15 and 0.25, not 0.35 and 0.25."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch8_t2_qe8',
        type: "mcq",
        question: "What is 0.9 - 0.4?",
        options: ["0.5", "1.3", "0.4", "0.6"],
        correctAnswer: "0.5",
        explanation: "When subtracting 0.4 from 0.9, we subtract the tenths place: 9 tenths - 4 tenths = 5 tenths, which is 0.5. ➖",
        wrongAnswerExplanations: {
            "1.3": "This is the sum of 0.9 and 0.4, not the difference.",
            "0.4": "This is the number being subtracted, not the result.",
            "0.6": "This is the difference between 1.0 and 0.4, not 0.9 and 0.4."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch8_t2_qe9',
        type: "mcq",
        question: "What is 0.6 + 0.4?",
        options: ["1.0", "0.10", "0.2", "0.8"],
        correctAnswer: "1.0",
        explanation: "When adding 0.6 and 0.4, we add the tenths place: 6 tenths + 4 tenths = 10 tenths, which is 1.0. ➕",
        wrongAnswerExplanations: {
            "0.10": "This is incorrect. 10 tenths make 1 whole.",
            "0.2": "This is the difference between 0.6 and 0.4, not the sum.",
            "0.8": "This is the sum of 0.4 and 0.4, not 0.6 and 0.4."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch8_t2_qe10',
        type: "mcq",
        question: "What is 1.2 - 0.8?",
        options: ["0.4", "2.0", "0.3", "0.5"],
        correctAnswer: "0.4",
        explanation: "When subtracting 0.8 from 1.2, we subtract the tenths place: 12 tenths - 8 tenths = 4 tenths, which is 0.4. ➖",
        wrongAnswerExplanations: {
            "2.0": "This is the sum of 1.2 and 0.8, not the difference.",
            "0.3": "This is the difference between 1.1 and 0.8, not 1.2 and 0.8.",
            "0.5": "This is the difference between 1.3 and 0.8, not 1.2 and 0.8."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch8_t2_qe11',
        type: "mcq",
        question: "What is 0.45 + 0.15?",
        options: ["0.60", "0.30", "0.50", "0.40"],
        correctAnswer: "0.60",
        explanation: "When adding 0.45 and 0.15, we add both tenths and hundredths: 0.45 + 0.15 = 0.60. ➕",
        wrongAnswerExplanations: {
            "0.30": "This is the difference between 0.45 and 0.15, not the sum.",
            "0.50": "This is the sum of 0.35 and 0.15, not 0.45 and 0.15.",
            "0.40": "This is the sum of 0.25 and 0.15, not 0.45 and 0.15."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch8_t2_qe12',
        type: "mcq",
        question: "What is 0.7 - 0.2?",
        options: ["0.5", "0.9", "0.4", "0.6"],
        correctAnswer: "0.5",
        explanation: "When subtracting 0.2 from 0.7, we subtract the tenths place: 7 tenths - 2 tenths = 5 tenths, which is 0.5. ➖",
        wrongAnswerExplanations: {
            "0.9": "This is the sum of 0.7 and 0.2, not the difference.",
            "0.4": "This is the difference between 0.6 and 0.2, not 0.7 and 0.2.",
            "0.6": "This is the difference between 0.8 and 0.2, not 0.7 and 0.2."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch8_t2_qe13',
        type: "mcq",
        question: "What is 0.3 + 0.7?",
        options: ["1.0", "0.10", "0.4", "0.8"],
        correctAnswer: "1.0",
        explanation: "When adding 0.3 and 0.7, we add the tenths place: 3 tenths + 7 tenths = 10 tenths, which is 1.0. ➕",
        wrongAnswerExplanations: {
            "0.10": "This is incorrect. 10 tenths make 1 whole.",
            "0.4": "This is the difference between 0.7 and 0.3, not the sum.",
            "0.8": "This is the sum of 0.1 and 0.7, not 0.3 and 0.7."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch8_t2_qe14',
        type: "mcq",
        question: "What is 1.0 - 0.6?",
        options: ["0.4", "1.6", "0.3", "0.5"],
        correctAnswer: "0.4",
        explanation: "When subtracting 0.6 from 1.0, we subtract the tenths place: 10 tenths - 6 tenths = 4 tenths, which is 0.4. ➖",
        wrongAnswerExplanations: {
            "1.6": "This is the sum of 1.0 and 0.6, not the difference.",
            "0.3": "This is the difference between 0.9 and 0.6, not 1.0 and 0.6.",
            "0.5": "This is the difference between 1.1 and 0.6, not 1.0 and 0.6."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch8_t2_qe15',
        type: "mcq",
        question: "What is 0.55 + 0.25?",
        options: ["0.80", "0.30", "0.70", "0.60"],
        correctAnswer: "0.80",
        explanation: "When adding 0.55 and 0.25, we add both tenths and hundredths: 0.55 + 0.25 = 0.80. ➕",
        wrongAnswerExplanations: {
            "0.30": "This is the difference between 0.55 and 0.25, not the sum.",
            "0.70": "This is the sum of 0.45 and 0.25, not 0.55 and 0.25.",
            "0.60": "This is the sum of 0.35 and 0.25, not 0.55 and 0.25."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch8_t2_qe16',
        type: "mcq",
        question: "What is 0.8 - 0.3?",
        options: ["0.5", "1.1", "0.4", "0.6"],
        correctAnswer: "0.5",
        explanation: "When subtracting 0.3 from 0.8, we subtract the tenths place: 8 tenths - 3 tenths = 5 tenths, which is 0.5. ➖",
        wrongAnswerExplanations: {
            "1.1": "This is the sum of 0.8 and 0.3, not the difference.",
            "0.4": "This is the difference between 0.7 and 0.3, not 0.8 and 0.3.",
            "0.6": "This is the difference between 0.9 and 0.3, not 0.8 and 0.3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch8_t2_qe17',
        type: "mcq",
        question: "What is 0.2 + 0.8?",
        options: ["1.0", "0.10", "0.6", "0.8"],
        correctAnswer: "1.0",
        explanation: "When adding 0.2 and 0.8, we add the tenths place: 2 tenths + 8 tenths = 10 tenths, which is 1.0. ➕",
        wrongAnswerExplanations: {
            "0.10": "This is incorrect. 10 tenths make 1 whole.",
            "0.6": "This is the difference between 0.8 and 0.2, not the sum.",
            "0.8": "This is one of the addends, not the sum."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch8_t2_qe18',
        type: "mcq",
        question: "What is 1.4 - 0.9?",
        options: ["0.5", "2.3", "0.4", "0.6"],
        correctAnswer: "0.5",
        explanation: "When subtracting 0.9 from 1.4, we subtract the tenths place: 14 tenths - 9 tenths = 5 tenths, which is 0.5. ➖",
        wrongAnswerExplanations: {
            "2.3": "This is the sum of 1.4 and 0.9, not the difference.",
            "0.4": "This is the difference between 1.3 and 0.9, not 1.4 and 0.9.",
            "0.6": "This is the difference between 1.5 and 0.9, not 1.4 and 0.9."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch8_t2_qe19',
        type: "mcq",
        question: "What is 0.65 + 0.15?",
        options: ["0.80", "0.50", "0.70", "0.60"],
        correctAnswer: "0.80",
        explanation: "When adding 0.65 and 0.15, we add both tenths and hundredths: 0.65 + 0.15 = 0.80. ➕",
        wrongAnswerExplanations: {
            "0.50": "This is the difference between 0.65 and 0.15, not the sum.",
            "0.70": "This is the sum of 0.55 and 0.15, not 0.65 and 0.15.",
            "0.60": "This is the sum of 0.45 and 0.15, not 0.65 and 0.15."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch8_t2_qe20',
        type: "mcq",
        question: "What is 0.9 - 0.4?",
        options: ["0.5", "1.3", "0.4", "0.6"],
        correctAnswer: "0.5",
        explanation: "When subtracting 0.4 from 0.9, we subtract the tenths place: 9 tenths - 4 tenths = 5 tenths, which is 0.5. ➖",
        wrongAnswerExplanations: {
            "1.3": "This is the sum of 0.9 and 0.4, not the difference.",
            "0.4": "This is the number being subtracted, not the result.",
            "0.6": "This is the difference between 1.0 and 0.4, not 0.9 and 0.4."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 