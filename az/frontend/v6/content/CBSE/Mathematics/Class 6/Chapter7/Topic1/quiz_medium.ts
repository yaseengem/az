import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch7_t1_qm1',
        type: "mcq",
        question: "Which of these fractions is equivalent to ¾?",
        options: ["6/8", "9/12", "12/16", "All of these"],
        correctAnswer: "All of these",
        explanation: "¾ = 6/8 = 9/12 = 12/16 because all can be simplified to ¾. 🔄",
        wrongAnswerExplanations: {
            "6/8": "6/8 is correct, but there are other correct answers.",
            "9/12": "9/12 is correct, but there are other correct answers.",
            "12/16": "12/16 is correct, but there are other correct answers."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch7_t1_qm2',
        type: "mcq",
        question: "If you have 2⅔ pizzas and eat 1½ pizzas, how much pizza is left?",
        options: ["1⅙", "1⅓", "1½", "1¾"],
        correctAnswer: "1⅙",
        explanation: "2⅔ - 1½ = 8/3 - 3/2 = 16/6 - 9/6 = 7/6 = 1⅙. 🍕",
        wrongAnswerExplanations: {
            "1⅓": "1⅓ would be 4/3, not 7/6.",
            "1½": "1½ would be 3/2, not 7/6.",
            "1¾": "1¾ would be 7/4, not 7/6."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch7_t1_qm3',
        type: "mcq",
        question: "Which fraction is between ½ and ¾?",
        options: ["1/3", "2/3", "4/5", "5/8"],
        correctAnswer: "5/8",
        explanation: "½ = 4/8, ¾ = 6/8, and 5/8 is between them. 🔄",
        wrongAnswerExplanations: {
            "1/3": "1/3 ≈ 0.33 is less than ½ = 0.5.",
            "2/3": "2/3 ≈ 0.67 is less than ¾ = 0.75 but not between ½ and ¾.",
            "4/5": "4/5 = 0.8 is greater than ¾ = 0.75."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch7_t1_qm4',
        type: "mcq",
        question: "If ⅔ of a cake is left and you eat ½ of what's left, what fraction of the whole cake did you eat?",
        options: ["⅓", "½", "¼", "⅙"],
        correctAnswer: "⅓",
        explanation: "½ of ⅔ = ½ × ⅔ = ⅓ of the whole cake. 🎂",
        wrongAnswerExplanations: {
            "½": "½ is the fraction of the remaining cake you ate, not the whole cake.",
            "¼": "¼ is less than the correct answer.",
            "⅙": "⅙ is less than the correct answer."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch7_t1_qm5',
        type: "mcq",
        question: "Which of these fractions is closest to 1?",
        options: ["7/8", "8/9", "9/10", "10/11"],
        correctAnswer: "10/11",
        explanation: "10/11 ≈ 0.909 is closest to 1 among the given options. 🔢",
        wrongAnswerExplanations: {
            "7/8": "7/8 = 0.875 is less than 10/11.",
            "8/9": "8/9 ≈ 0.889 is less than 10/11.",
            "9/10": "9/10 = 0.9 is less than 10/11."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch7_t1_qm6',
        type: "mcq",
        question: "If you have 3⅓ cups of sugar and use 1¾ cups, how much sugar is left?",
        options: ["1⅔", "1⅚", "1½", "1⅓"],
        correctAnswer: "1⅚",
        explanation: "3⅓ - 1¾ = 10/3 - 7/4 = 40/12 - 21/12 = 19/12 = 1⅚. 🥄",
        wrongAnswerExplanations: {
            "1⅔": "1⅔ = 5/3 is less than 19/12.",
            "1½": "1½ = 3/2 is less than 19/12.",
            "1⅓": "1⅓ = 4/3 is less than 19/12."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch7_t1_qm7',
        type: "mcq",
        question: "Which fraction is equivalent to 0.6?",
        options: ["3/5", "6/10", "9/15", "All of these"],
        correctAnswer: "All of these",
        explanation: "0.6 = 3/5 = 6/10 = 9/15 because all can be simplified to 3/5. 🔄",
        wrongAnswerExplanations: {
            "3/5": "3/5 is correct, but there are other correct answers.",
            "6/10": "6/10 is correct, but there are other correct answers.",
            "9/15": "9/15 is correct, but there are other correct answers."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch7_t1_qm8',
        type: "mcq",
        question: "If you have 2½ liters of juice and pour ¾ liter into each glass, how many full glasses can you pour?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "3",
        explanation: "2½ ÷ ¾ = 5/2 ÷ 3/4 = 5/2 × 4/3 = 20/6 = 3⅓, so 3 full glasses. 🥤",
        wrongAnswerExplanations: {
            "2": "2 glasses would use 1½ liters, leaving more juice.",
            "4": "4 glasses would need 3 liters, which is more than you have.",
            "5": "5 glasses would need 3¾ liters, which is more than you have."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch7_t1_qm9',
        type: "mcq",
        question: "Which of these fractions is greater than ⅔ but less than ¾?",
        options: ["3/5", "5/8", "7/10", "8/11"],
        correctAnswer: "7/10",
        explanation: "⅔ ≈ 0.667, ¾ = 0.75, and 7/10 = 0.7 is between them. 🔄",
        wrongAnswerExplanations: {
            "3/5": "3/5 = 0.6 is less than ⅔.",
            "5/8": "5/8 = 0.625 is less than ⅔.",
            "8/11": "8/11 ≈ 0.727 is less than ¾ but not the best answer."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch7_t1_qm10',
        type: "mcq",
        question: "If you have 1⅔ hours to complete a task and have already spent ¾ hour, how much time is left?",
        options: ["¾ hour", "⅚ hour", "1 hour", "1¼ hours"],
        correctAnswer: "⅚ hour",
        explanation: "1⅔ - ¾ = 5/3 - 3/4 = 20/12 - 9/12 = 11/12 = ⅚ hour. ⏰",
        wrongAnswerExplanations: {
            "¾ hour": "¾ hour is less than the correct answer.",
            "1 hour": "1 hour is more than the correct answer.",
            "1¼ hours": "1¼ hours is more than the correct answer."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch7_t1_qm11',
        type: "mcq",
        question: "Which fraction is equivalent to 0.75?",
        options: ["3/4", "6/8", "9/12", "All of these"],
        correctAnswer: "All of these",
        explanation: "0.75 = 3/4 = 6/8 = 9/12 because all can be simplified to 3/4. 🔄",
        wrongAnswerExplanations: {
            "3/4": "3/4 is correct, but there are other correct answers.",
            "6/8": "6/8 is correct, but there are other correct answers.",
            "9/12": "9/12 is correct, but there are other correct answers."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch7_t1_qm12',
        type: "mcq",
        question: "If you have 4⅔ meters of ribbon and cut it into pieces of ⅔ meter each, how many full pieces can you get?",
        options: ["5", "6", "7", "8"],
        correctAnswer: "7",
        explanation: "4⅔ ÷ ⅔ = 14/3 ÷ 2/3 = 14/3 × 3/2 = 42/6 = 7 pieces. 🎀",
        wrongAnswerExplanations: {
            "5": "5 pieces would use 3⅓ meters, leaving more ribbon.",
            "6": "6 pieces would use 4 meters, leaving more ribbon.",
            "8": "8 pieces would need 5⅓ meters, which is more than you have."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch7_t1_qm13',
        type: "mcq",
        question: "Which of these fractions is less than ½?",
        options: ["3/5", "4/7", "5/9", "6/11"],
        correctAnswer: "5/9",
        explanation: "5/9 ≈ 0.556 is less than ½ = 0.5. 🔄",
        wrongAnswerExplanations: {
            "3/5": "3/5 = 0.6 is greater than ½.",
            "4/7": "4/7 ≈ 0.571 is greater than ½.",
            "6/11": "6/11 ≈ 0.545 is less than ½ but not the best answer."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch7_t1_qm14',
        type: "mcq",
        question: "If you have 2¼ kilograms of flour and use 1⅓ kilograms, how much flour is left?",
        options: ["¾ kg", "⅚ kg", "11/12 kg", "1 kg"],
        correctAnswer: "11/12 kg",
        explanation: "2¼ - 1⅓ = 9/4 - 4/3 = 27/12 - 16/12 = 11/12 kg. 🥣",
        wrongAnswerExplanations: {
            "¾ kg": "¾ kg is less than the correct answer.",
            "⅚ kg": "⅚ kg is less than the correct answer.",
            "1 kg": "1 kg is more than the correct answer."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch7_t1_qm15',
        type: "mcq",
        question: "Which fraction is equivalent to 0.4?",
        options: ["2/5", "4/10", "6/15", "All of these"],
        correctAnswer: "All of these",
        explanation: "0.4 = 2/5 = 4/10 = 6/15 because all can be simplified to 2/5. 🔄",
        wrongAnswerExplanations: {
            "2/5": "2/5 is correct, but there are other correct answers.",
            "4/10": "4/10 is correct, but there are other correct answers.",
            "6/15": "6/15 is correct, but there are other correct answers."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch7_t1_qm16',
        type: "mcq",
        question: "If you have 3⅔ hours to study and spend 1½ hours on math, how much time is left?",
        options: ["1⅓ hours", "1⅚ hours", "2 hours", "2⅙ hours"],
        correctAnswer: "2⅙ hours",
        explanation: "3⅔ - 1½ = 11/3 - 3/2 = 22/6 - 9/6 = 13/6 = 2⅙ hours. 📚",
        wrongAnswerExplanations: {
            "1⅓ hours": "1⅓ hours is less than the correct answer.",
            "1⅚ hours": "1⅚ hours is less than the correct answer.",
            "2 hours": "2 hours is less than the correct answer."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch7_t1_qm17',
        type: "mcq",
        question: "Which of these fractions is between ⅓ and ½?",
        options: ["2/5", "3/7", "4/9", "5/12"],
        correctAnswer: "4/9",
        explanation: "⅓ ≈ 0.333, ½ = 0.5, and 4/9 ≈ 0.444 is between them. 🔄",
        wrongAnswerExplanations: {
            "2/5": "2/5 = 0.4 is between them but not the best answer.",
            "3/7": "3/7 ≈ 0.429 is between them but not the best answer.",
            "5/12": "5/12 ≈ 0.417 is between them but not the best answer."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch7_t1_qm18',
        type: "mcq",
        question: "If you have 5⅔ meters of cloth and need ¾ meter for each shirt, how many shirts can you make?",
        options: ["6", "7", "8", "9"],
        correctAnswer: "7",
        explanation: "5⅔ ÷ ¾ = 17/3 ÷ 3/4 = 17/3 × 4/3 = 68/9 = 7⅝, so 7 full shirts. 👕",
        wrongAnswerExplanations: {
            "6": "6 shirts would use 4½ meters, leaving more cloth.",
            "8": "8 shirts would need 6 meters, which is more than you have.",
            "9": "9 shirts would need 6¾ meters, which is more than you have."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch7_t1_qm19',
        type: "mcq",
        question: "Which fraction is equivalent to 0.8?",
        options: ["4/5", "8/10", "12/15", "All of these"],
        correctAnswer: "All of these",
        explanation: "0.8 = 4/5 = 8/10 = 12/15 because all can be simplified to 4/5. 🔄",
        wrongAnswerExplanations: {
            "4/5": "4/5 is correct, but there are other correct answers.",
            "8/10": "8/10 is correct, but there are other correct answers.",
            "12/15": "12/15 is correct, but there are other correct answers."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch7_t1_qm20',
        type: "mcq",
        question: "If you have 4⅓ liters of water and pour 1¾ liters into a bottle, how much water is left?",
        options: ["2½ liters", "2⅓ liters", "2⅚ liters", "3 liters"],
        correctAnswer: "2⅚ liters",
        explanation: "4⅓ - 1¾ = 13/3 - 7/4 = 52/12 - 21/12 = 31/12 = 2⅚ liters. 💧",
        wrongAnswerExplanations: {
            "2½ liters": "2½ liters is less than the correct answer.",
            "2⅓ liters": "2⅓ liters is less than the correct answer.",
            "3 liters": "3 liters is more than the correct answer."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    }
]; 