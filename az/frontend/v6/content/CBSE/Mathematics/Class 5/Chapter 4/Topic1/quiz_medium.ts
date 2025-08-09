import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl5_ch4_t1_qm1',
        type: "mcq",
        question: "If a pizza is divided into 8 equal slices and you eat 3 slices, what fraction of the pizza have you eaten?",
        options: [
            "3/8",
            "5/8",
            "1/3",
            "3/5"
        ],
        correctAnswer: "3/8",
        explanation: "You ate 3 out of 8 equal parts, which is represented as 3/8. 🍕",
        wrongAnswerExplanations: {
            "5/8": "This would be the fraction remaining, not eaten.",
            "1/3": "This is incorrect as the pizza was divided into 8 parts, not 3.",
            "3/5": "This is incorrect as the denominator should be 8, not 5."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch4_t1_qm2',
        type: "mcq",
        question: "Which of these fractions represents the largest part of a whole?",
        options: [
            "5/6",
            "3/4",
            "2/3",
            "4/5"
        ],
        correctAnswer: "5/6",
        explanation: "5/6 is the largest as it's closest to 1 whole. 🔢",
        wrongAnswerExplanations: {
            "3/4": "This is less than 5/6.",
            "2/3": "This is less than 5/6.",
            "4/5": "This is less than 5/6."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch4_t1_qm3',
        type: "mcq",
        question: "If you have 2/3 of a chocolate bar and your friend has 1/2 of the same size chocolate bar, who has more?",
        options: [
            "You have more",
            "Your friend has more",
            "Both have equal amounts",
            "Cannot be determined"
        ],
        correctAnswer: "You have more",
        explanation: "2/3 (≈0.67) is greater than 1/2 (0.5). 🍫",
        wrongAnswerExplanations: {
            "Your friend has more": "1/2 is less than 2/3.",
            "Both have equal amounts": "2/3 and 1/2 are not equal.",
            "Cannot be determined": "We can compare these fractions."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch4_t1_qm4',
        type: "mcq",
        question: "Which fraction is equivalent to 2/4?",
        options: [
            "1/2",
            "3/6",
            "4/8",
            "All of the above"
        ],
        correctAnswer: "All of the above",
        explanation: "All these fractions equal 1/2 when simplified. 🔄",
        wrongAnswerExplanations: {
            "1/2": "This is correct, but not the only answer.",
            "3/6": "This is correct, but not the only answer.",
            "4/8": "This is correct, but not the only answer."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch4_t1_qm5',
        type: "mcq",
        question: "If a cake is divided into 12 equal pieces and you take 4 pieces, what fraction of the cake is left?",
        options: [
            "2/3",
            "1/3",
            "4/12",
            "8/12"
        ],
        correctAnswer: "2/3",
        explanation: "8 pieces remain out of 12, which simplifies to 2/3. 🎂",
        wrongAnswerExplanations: {
            "1/3": "This would be the fraction taken, not left.",
            "4/12": "This is the fraction taken, not left.",
            "8/12": "This is correct but not in simplest form."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch4_t1_qm6',
        type: "mcq",
        question: "Which of these fractions is in its simplest form?",
        options: [
            "3/4",
            "2/4",
            "4/6",
            "6/8"
        ],
        correctAnswer: "3/4",
        explanation: "3/4 cannot be simplified further. 📝",
        wrongAnswerExplanations: {
            "2/4": "This can be simplified to 1/2.",
            "4/6": "This can be simplified to 2/3.",
            "6/8": "This can be simplified to 3/4."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch4_t1_qm7',
        type: "mcq",
        question: "If you have 3/4 of a liter of juice and drink 1/4 liter, how much is left?",
        options: [
            "1/2 liter",
            "1/4 liter",
            "2/4 liter",
            "3/4 liter"
        ],
        correctAnswer: "1/2 liter",
        explanation: "3/4 - 1/4 = 2/4 = 1/2 liter. 🥤",
        wrongAnswerExplanations: {
            "1/4 liter": "This is incorrect. 3/4 - 1/4 = 1/2.",
            "2/4 liter": "This is correct but not in simplest form.",
            "3/4 liter": "This would be the original amount."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch4_t1_qm8',
        type: "mcq",
        question: "Which fraction is greater: 5/8 or 3/4?",
        options: [
            "3/4",
            "5/8",
            "They are equal",
            "Cannot be compared"
        ],
        correctAnswer: "3/4",
        explanation: "3/4 = 6/8, which is greater than 5/8. 📊",
        wrongAnswerExplanations: {
            "5/8": "5/8 is less than 3/4 (6/8).",
            "They are equal": "3/4 is greater than 5/8.",
            "Cannot be compared": "We can compare these fractions."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch4_t1_qm9',
        type: "mcq",
        question: "If a rectangle is divided into 6 equal parts and 2 parts are shaded, what fraction represents the unshaded area?",
        options: [
            "2/3",
            "1/3",
            "4/6",
            "2/6"
        ],
        correctAnswer: "2/3",
        explanation: "4 parts are unshaded out of 6, which simplifies to 2/3. 📐",
        wrongAnswerExplanations: {
            "1/3": "This would be the shaded fraction.",
            "4/6": "This is correct but not in simplest form.",
            "2/6": "This is the shaded fraction."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch4_t1_qm10',
        type: "mcq",
        question: "Which of these fractions is closest to 1?",
        options: [
            "7/8",
            "3/4",
            "5/6",
            "4/5"
        ],
        correctAnswer: "7/8",
        explanation: "7/8 is only 1/8 away from 1, the closest among options. 🔢",
        wrongAnswerExplanations: {
            "3/4": "This is 1/4 away from 1.",
            "5/6": "This is 1/6 away from 1.",
            "4/5": "This is 1/5 away from 1."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch4_t1_qm11',
        type: "mcq",
        question: "If you have 1/2 of a pizza and your friend gives you 1/4 of the same size pizza, how much pizza do you have in total?",
        options: [
            "3/4",
            "1/2",
            "1/4",
            "2/6"
        ],
        correctAnswer: "3/4",
        explanation: "1/2 + 1/4 = 2/4 + 1/4 = 3/4. 🍕",
        wrongAnswerExplanations: {
            "1/2": "This is only the first part.",
            "1/4": "This is only the second part.",
            "2/6": "This is incorrect. The denominators must be the same."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch4_t1_qm12',
        type: "mcq",
        question: "Which fraction is equivalent to 0.5?",
        options: [
            "1/2",
            "2/4",
            "3/6",
            "All of the above"
        ],
        correctAnswer: "All of the above",
        explanation: "All these fractions equal 0.5 when converted to decimal. 🔄",
        wrongAnswerExplanations: {
            "1/2": "This is correct, but not the only answer.",
            "2/4": "This is correct, but not the only answer.",
            "3/6": "This is correct, but not the only answer."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch4_t1_qm13',
        type: "mcq",
        question: "If a chocolate bar is divided into 10 equal pieces and you eat 3 pieces, what fraction of the chocolate bar is left?",
        options: [
            "7/10",
            "3/10",
            "3/7",
            "7/3"
        ],
        correctAnswer: "7/10",
        explanation: "7 pieces remain out of 10, which is 7/10. 🍫",
        wrongAnswerExplanations: {
            "3/10": "This is the fraction eaten, not left.",
            "3/7": "This is incorrect. The denominator should be 10.",
            "7/3": "This is an improper fraction and incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch4_t1_qm14',
        type: "mcq",
        question: "Which of these fractions is greater than 1/2?",
        options: [
            "3/5",
            "2/5",
            "1/3",
            "1/4"
        ],
        correctAnswer: "3/5",
        explanation: "3/5 = 0.6, which is greater than 1/2 (0.5). 📊",
        wrongAnswerExplanations: {
            "2/5": "2/5 = 0.4, which is less than 1/2.",
            "1/3": "1/3 ≈ 0.33, which is less than 1/2.",
            "1/4": "1/4 = 0.25, which is less than 1/2."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch4_t1_qm15',
        type: "mcq",
        question: "If you have 2/3 of a cake and give 1/6 of the cake to your friend, how much cake do you have left?",
        options: [
            "1/2",
            "1/3",
            "1/6",
            "2/6"
        ],
        correctAnswer: "1/2",
        explanation: "2/3 - 1/6 = 4/6 - 1/6 = 3/6 = 1/2. 🎂",
        wrongAnswerExplanations: {
            "1/3": "This is incorrect. 2/3 - 1/6 = 1/2.",
            "1/6": "This is what you gave away.",
            "2/6": "This is correct but not in simplest form."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch4_t1_qm16',
        type: "mcq",
        question: "Which fraction is equivalent to 4/8?",
        options: [
            "1/2",
            "2/4",
            "3/6",
            "All of the above"
        ],
        correctAnswer: "All of the above",
        explanation: "All these fractions equal 1/2 when simplified. 🔄",
        wrongAnswerExplanations: {
            "1/2": "This is correct, but not the only answer.",
            "2/4": "This is correct, but not the only answer.",
            "3/6": "This is correct, but not the only answer."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch4_t1_qm17',
        type: "mcq",
        question: "If a pizza is divided into 12 equal slices and you eat 5 slices, what fraction of the pizza have you eaten?",
        options: [
            "5/12",
            "7/12",
            "1/2",
            "5/7"
        ],
        correctAnswer: "5/12",
        explanation: "You ate 5 out of 12 equal parts, which is 5/12. 🍕",
        wrongAnswerExplanations: {
            "7/12": "This would be the fraction remaining.",
            "1/2": "This is incorrect. 5/12 is not equal to 1/2.",
            "5/7": "This is incorrect. The denominator should be 12."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch4_t1_qm18',
        type: "mcq",
        question: "Which of these fractions is less than 1/2?",
        options: [
            "1/3",
            "2/3",
            "3/4",
            "5/8"
        ],
        correctAnswer: "1/3",
        explanation: "1/3 ≈ 0.33, which is less than 1/2 (0.5). 📊",
        wrongAnswerExplanations: {
            "2/3": "2/3 ≈ 0.67, which is greater than 1/2.",
            "3/4": "3/4 = 0.75, which is greater than 1/2.",
            "5/8": "5/8 = 0.625, which is greater than 1/2."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch4_t1_qm19',
        type: "mcq",
        question: "If you have 3/4 of a liter of water and pour out 1/4 liter, how much water is left?",
        options: [
            "1/2 liter",
            "1/4 liter",
            "2/4 liter",
            "3/4 liter"
        ],
        correctAnswer: "1/2 liter",
        explanation: "3/4 - 1/4 = 2/4 = 1/2 liter. 💧",
        wrongAnswerExplanations: {
            "1/4 liter": "This is incorrect. 3/4 - 1/4 = 1/2.",
            "2/4 liter": "This is correct but not in simplest form.",
            "3/4 liter": "This would be the original amount."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch4_t1_qm20',
        type: "mcq",
        question: "Which fraction is in its simplest form?",
        options: [
            "2/3",
            "4/6",
            "6/9",
            "8/12"
        ],
        correctAnswer: "2/3",
        explanation: "2/3 cannot be simplified further. 📝",
        wrongAnswerExplanations: {
            "4/6": "This can be simplified to 2/3.",
            "6/9": "This can be simplified to 2/3.",
            "8/12": "This can be simplified to 2/3."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 