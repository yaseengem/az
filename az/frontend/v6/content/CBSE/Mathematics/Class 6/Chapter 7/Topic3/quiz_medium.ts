import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch7_t3_qm1',
        type: "mcq",
        question: "What is 1/2 + 1/3?",
        options: ["1/5", "2/5", "5/6", "2/3"],
        correctAnswer: "5/6",
        explanation: "LCD is 6. Convert: 1/2 = 3/6, 1/3 = 2/6. Add: 3/6 + 2/6 = 5/6. ➕",
        wrongAnswerExplanations: {
            "1/5": "Cannot add denominators directly.",
            "2/5": "Cannot add numerators and denominators separately.",
            "2/3": "This is 1/3 + 1/3, not 1/2 + 1/3."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch7_t3_qm2',
        type: "mcq",
        question: "What is 3/4 - 1/3?",
        options: ["1/4", "2/4", "5/12", "1/2"],
        correctAnswer: "5/12",
        explanation: "LCD is 12. Convert: 3/4 = 9/12, 1/3 = 4/12. Subtract: 9/12 - 4/12 = 5/12. ➖",
        wrongAnswerExplanations: {
            "1/4": "Cannot subtract denominators directly.",
            "2/4": "Cannot subtract numerators and denominators separately.",
            "1/2": "This is 3/4 - 1/4, not 3/4 - 1/3."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch7_t3_qm3',
        type: "mcq",
        question: "What is 1 1/2 + 2 1/4?",
        options: ["3 1/2", "3 3/4", "4", "3 1/4"],
        correctAnswer: "3 3/4",
        explanation: "Convert to improper: 3/2 + 9/4. LCD is 4. Convert: 6/4 + 9/4 = 15/4 = 3 3/4. ➕",
        wrongAnswerExplanations: {
            "3 1/2": "This would be 1 1/2 + 2, not 1 1/2 + 2 1/4.",
            "4": "This would be 1 1/2 + 2 1/2, not 1 1/2 + 2 1/4.",
            "3 1/4": "This would be 1 1/2 + 1 3/4, not 1 1/2 + 2 1/4."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 75
    },
    {
        id: 'cl6_ch7_t3_qm4',
        type: "mcq",
        question: "What is 2 1/3 - 1 1/4?",
        options: ["1 1/12", "1 1/2", "1 1/6", "1 1/3"],
        correctAnswer: "1 1/12",
        explanation: "Convert to improper: 7/3 - 5/4. LCD is 12. Convert: 28/12 - 15/12 = 13/12 = 1 1/12. ➖",
        wrongAnswerExplanations: {
            "1 1/2": "This would be 2 1/3 - 5/6, not 2 1/3 - 1 1/4.",
            "1 1/6": "This would be 2 1/3 - 1 1/6, not 2 1/3 - 1 1/4.",
            "1 1/3": "This would be 2 1/3 - 1, not 2 1/3 - 1 1/4."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 75
    },
    {
        id: 'cl6_ch7_t3_qm5',
        type: "mcq",
        question: "What is 1/3 + 1/4 + 1/6?",
        options: ["3/13", "3/4", "9/12", "13/12"],
        correctAnswer: "9/12",
        explanation: "LCD is 12. Convert: 4/12 + 3/12 + 2/12 = 9/12. Can be simplified to 3/4. ➕",
        wrongAnswerExplanations: {
            "3/13": "Cannot add denominators directly.",
            "3/4": "This is the simplified form, but 9/12 is more accurate.",
            "13/12": "This would be 1/3 + 1/4 + 1/2, not 1/3 + 1/4 + 1/6."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch7_t3_qm6',
        type: "mcq",
        question: "What is 2/3 - 1/4 - 1/6?",
        options: ["1/12", "1/4", "1/3", "1/2"],
        correctAnswer: "1/4",
        explanation: "LCD is 12. Convert: 8/12 - 3/12 - 2/12 = 3/12 = 1/4. ➖",
        wrongAnswerExplanations: {
            "1/12": "This would be 2/3 - 1/4 - 1/3, not 2/3 - 1/4 - 1/6.",
            "1/3": "This would be 2/3 - 1/3, not 2/3 - 1/4 - 1/6.",
            "1/2": "This would be 2/3 - 1/6, not 2/3 - 1/4 - 1/6."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch7_t3_qm7',
        type: "mcq",
        question: "If you have 2 1/2 cups of flour and use 1 3/4 cups, how much flour is left?",
        options: ["1/2 cup", "3/4 cup", "1 cup", "1 1/4 cups"],
        correctAnswer: "3/4 cup",
        explanation: "2 1/2 - 1 3/4 = 5/2 - 7/4 = 10/4 - 7/4 = 3/4 cup. 🥄",
        wrongAnswerExplanations: {
            "1/2 cup": "This would be 2 1/2 - 2, not 2 1/2 - 1 3/4.",
            "1 cup": "This would be 2 1/2 - 1 1/2, not 2 1/2 - 1 3/4.",
            "1 1/4 cups": "This would be 2 1/2 - 1 1/4, not 2 1/2 - 1 3/4."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 75
    },
    {
        id: 'cl6_ch7_t3_qm8',
        type: "mcq",
        question: "What is 1/5 + 2/3 + 1/2?",
        options: ["3/10", "4/10", "41/30", "3/5"],
        correctAnswer: "41/30",
        explanation: "LCD is 30. Convert: 6/30 + 20/30 + 15/30 = 41/30 = 1 11/30. ➕",
        wrongAnswerExplanations: {
            "3/10": "Cannot add denominators directly.",
            "4/10": "Cannot add numerators and denominators separately.",
            "3/5": "This would be 1/5 + 2/5, not 1/5 + 2/3 + 1/2."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch7_t3_qm9',
        type: "mcq",
        question: "What is 3 1/4 - 1 2/3?",
        options: ["1 1/2", "1 7/12", "2 1/12", "1 5/12"],
        correctAnswer: "1 7/12",
        explanation: "Convert to improper: 13/4 - 5/3. LCD is 12. Convert: 39/12 - 20/12 = 19/12 = 1 7/12. ➖",
        wrongAnswerExplanations: {
            "1 1/2": "This would be 3 1/4 - 1 3/4, not 3 1/4 - 1 2/3.",
            "2 1/12": "This would be 3 1/4 - 1 1/6, not 3 1/4 - 1 2/3.",
            "1 5/12": "This would be 3 1/4 - 1 2/3 + 1/6, not just 3 1/4 - 1 2/3."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 75
    },
    {
        id: 'cl6_ch7_t3_qm10',
        type: "mcq",
        question: "What is 1/2 + 1/3 + 1/4 + 1/6?",
        options: ["1 1/4", "1 1/2", "1 3/4", "2"],
        correctAnswer: "1 1/4",
        explanation: "LCD is 12. Convert: 6/12 + 4/12 + 3/12 + 2/12 = 15/12 = 1 1/4. ➕",
        wrongAnswerExplanations: {
            "1 1/2": "This would be 1/2 + 1/3 + 1/4 + 1/12, not 1/2 + 1/3 + 1/4 + 1/6.",
            "1 3/4": "This would be 1/2 + 1/3 + 1/4 + 1/3, not 1/2 + 1/3 + 1/4 + 1/6.",
            "2": "This would be 1/2 + 1/2 + 1/2 + 1/2, not 1/2 + 1/3 + 1/4 + 1/6."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 75
    },
    {
        id: 'cl6_ch7_t3_qm11',
        type: "mcq",
        question: "What is 2 2/3 - 1 1/2 - 1/4?",
        options: ["7/12", "11/12", "1", "1 1/12"],
        correctAnswer: "11/12",
        explanation: "Convert to improper: 8/3 - 3/2 - 1/4. LCD is 12. Convert: 32/12 - 18/12 - 3/12 = 11/12. ➖",
        wrongAnswerExplanations: {
            "7/12": "This would be 2 2/3 - 1 1/2 - 1/2, not 2 2/3 - 1 1/2 - 1/4.",
            "1": "This would be 2 2/3 - 1 2/3, not 2 2/3 - 1 1/2 - 1/4.",
            "1 1/12": "This would be 2 2/3 - 1 1/2 + 1/4, not 2 2/3 - 1 1/2 - 1/4."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 75
    },
    {
        id: 'cl6_ch7_t3_qm12',
        type: "mcq",
        question: "If you walk 1 1/2 miles in the morning and 2 1/3 miles in the evening, how far did you walk?",
        options: ["3 1/2 miles", "3 5/6 miles", "4 miles", "3 2/3 miles"],
        correctAnswer: "3 5/6 miles",
        explanation: "1 1/2 + 2 1/3 = 3/2 + 7/3 = 9/6 + 14/6 = 23/6 = 3 5/6 miles. 🚶‍♂️",
        wrongAnswerExplanations: {
            "3 1/2 miles": "This would be 1 1/2 + 2, not 1 1/2 + 2 1/3.",
            "4 miles": "This would be 1 1/2 + 2 1/2, not 1 1/2 + 2 1/3.",
            "3 2/3 miles": "This would be 1 1/2 + 2 1/6, not 1 1/2 + 2 1/3."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 75
    },
    {
        id: 'cl6_ch7_t3_qm13',
        type: "mcq",
        question: "What is 1/8 + 1/4 + 1/2?",
        options: ["3/14", "7/8", "1", "1 1/8"],
        correctAnswer: "7/8",
        explanation: "LCD is 8. Convert: 1/8 + 2/8 + 4/8 = 7/8. ➕",
        wrongAnswerExplanations: {
            "3/14": "Cannot add denominators directly.",
            "1": "This would be 1/8 + 3/8 + 4/8, not 1/8 + 1/4 + 1/2.",
            "1 1/8": "This would be 1/8 + 1/4 + 1/2 + 1/4, not just 1/8 + 1/4 + 1/2."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch7_t3_qm14',
        type: "mcq",
        question: "What is 2 1/2 - 1 3/4 - 1/8?",
        options: ["1/2", "5/8", "3/4", "7/8"],
        correctAnswer: "5/8",
        explanation: "Convert to improper: 5/2 - 7/4 - 1/8. LCD is 8. Convert: 20/8 - 14/8 - 1/8 = 5/8. ➖",
        wrongAnswerExplanations: {
            "1/2": "This would be 2 1/2 - 1 3/4, not including -1/8.",
            "3/4": "This would be 2 1/2 - 1 3/4 + 1/8, not 2 1/2 - 1 3/4 - 1/8.",
            "7/8": "This would be 2 1/2 - 1 3/4 + 1/4, not 2 1/2 - 1 3/4 - 1/8."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 75
    },
    {
        id: 'cl6_ch7_t3_qm15',
        type: "mcq",
        question: "What is 1/3 + 1/6 + 1/9?",
        options: ["1/2", "11/18", "1/3", "5/9"],
        correctAnswer: "11/18",
        explanation: "LCD is 18. Convert: 6/18 + 3/18 + 2/18 = 11/18. ➕",
        wrongAnswerExplanations: {
            "1/2": "This would be 1/3 + 1/6, not including 1/9.",
            "1/3": "This is just the first fraction, not the sum.",
            "5/9": "This would be 1/3 + 1/6 + 1/18, not 1/3 + 1/6 + 1/9."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch7_t3_qm16',
        type: "mcq",
        question: "What is 3 1/3 - 1 1/2 - 1/6?",
        options: ["1 1/2", "1 2/3", "1 5/6", "2"],
        correctAnswer: "1 2/3",
        explanation: "Convert to improper: 10/3 - 3/2 - 1/6. LCD is 6. Convert: 20/6 - 9/6 - 1/6 = 10/6 = 1 2/3. ➖",
        wrongAnswerExplanations: {
            "1 1/2": "This would be 3 1/3 - 1 5/6, not 3 1/3 - 1 1/2 - 1/6.",
            "1 5/6": "This would be 3 1/3 - 1 1/2, not including -1/6.",
            "2": "This would be 3 1/3 - 1 1/3, not 3 1/3 - 1 1/2 - 1/6."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 75
    },
    {
        id: 'cl6_ch7_t3_qm17',
        type: "mcq",
        question: "What is 1/4 + 1/5 + 1/10?",
        options: ["3/19", "11/20", "1/2", "3/5"],
        correctAnswer: "11/20",
        explanation: "LCD is 20. Convert: 5/20 + 4/20 + 2/20 = 11/20. ➕",
        wrongAnswerExplanations: {
            "3/19": "Cannot add denominators directly.",
            "1/2": "This would be 1/4 + 1/4, not 1/4 + 1/5 + 1/10.",
            "3/5": "This would be 1/5 + 2/5, not 1/4 + 1/5 + 1/10."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch7_t3_qm18',
        type: "mcq",
        question: "What is 4 1/2 - 2 1/3 - 1/6?",
        options: ["1 2/3", "2", "2 1/3", "2 1/2"],
        correctAnswer: "2",
        explanation: "Convert to improper: 9/2 - 7/3 - 1/6. LCD is 6. Convert: 27/6 - 14/6 - 1/6 = 12/6 = 2. ➖",
        wrongAnswerExplanations: {
            "1 2/3": "This would be 4 1/2 - 2 5/6, not 4 1/2 - 2 1/3 - 1/6.",
            "2 1/3": "This would be 4 1/2 - 2 1/6, not 4 1/2 - 2 1/3 - 1/6.",
            "2 1/2": "This would be 4 1/2 - 2, not 4 1/2 - 2 1/3 - 1/6."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 75
    },
    {
        id: 'cl6_ch7_t3_qm19',
        type: "mcq",
        question: "What is 1/2 + 1/3 + 1/4 + 1/5?",
        options: ["77/60", "4/14", "1", "1 1/4"],
        correctAnswer: "77/60",
        explanation: "LCD is 60. Convert: 30/60 + 20/60 + 15/60 + 12/60 = 77/60 = 1 17/60. ➕",
        wrongAnswerExplanations: {
            "4/14": "Cannot add denominators directly.",
            "1": "This would be 1/2 + 1/3 + 1/6, not 1/2 + 1/3 + 1/4 + 1/5.",
            "1 1/4": "This would be 1/2 + 1/3 + 1/4 + 1/12, not 1/2 + 1/3 + 1/4 + 1/5."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 75
    },
    {
        id: 'cl6_ch7_t3_qm20',
        type: "mcq",
        question: "What is 5 1/4 - 2 1/3 - 1 1/6?",
        options: ["1 1/2", "1 3/4", "2", "2 1/4"],
        correctAnswer: "1 3/4",
        explanation: "Convert to improper: 21/4 - 7/3 - 7/6. LCD is 12. Convert: 63/12 - 28/12 - 14/12 = 21/12 = 1 3/4. ➖",
        wrongAnswerExplanations: {
            "1 1/2": "This would be 5 1/4 - 3 3/4, not 5 1/4 - 2 1/3 - 1 1/6.",
            "2": "This would be 5 1/4 - 3 1/4, not 5 1/4 - 2 1/3 - 1 1/6.",
            "2 1/4": "This would be 5 1/4 - 3, not 5 1/4 - 2 1/3 - 1 1/6."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 75
    }
]; 