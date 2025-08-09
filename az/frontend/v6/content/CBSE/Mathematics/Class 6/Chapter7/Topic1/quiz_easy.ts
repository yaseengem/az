import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch7_t1_qe1',
        type: "mcq",
        question: "Which of these is a proper fraction?",
        options: ["5/4", "3/2", "2/3", "7/7"],
        correctAnswer: "2/3",
        explanation: "A proper fraction has a numerator smaller than the denominator. 2/3 is proper because 2 < 3. 🧮",
        wrongAnswerExplanations: {
            "5/4": "5/4 is an improper fraction because 5 > 4.",
            "3/2": "3/2 is an improper fraction because 3 > 2.",
            "7/7": "7/7 is equal to 1, which is not a proper fraction."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch7_t1_qe2',
        type: "mcq",
        question: "What type of fraction is 1¾?",
        options: ["Proper fraction", "Improper fraction", "Mixed fraction", "None of these"],
        correctAnswer: "Mixed fraction",
        explanation: "1¾ is a mixed fraction because it has a whole number (1) and a proper fraction (¾). 🔄",
        wrongAnswerExplanations: {
            "Proper fraction": "Proper fractions don't have whole numbers.",
            "Improper fraction": "Improper fractions are written as a single fraction.",
            "None of these": "1¾ is definitely a mixed fraction."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch7_t1_qe3',
        type: "mcq",
        question: "If you have 5/4 of a pizza 🍕, how would you express this as a mixed fraction?",
        options: ["1¼", "1½", "1¾", "2¼"],
        correctAnswer: "1¼",
        explanation: "5 ÷ 4 = 1 with remainder 1, so 5/4 = 1¼. 🍕",
        wrongAnswerExplanations: {
            "1½": "1½ = 6/4, not 5/4.",
            "1¾": "1¾ = 7/4, not 5/4.",
            "2¼": "2¼ = 9/4, not 5/4."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch7_t1_qe4',
        type: "mcq",
        question: "Which of these is an improper fraction?",
        options: ["2/3", "3/4", "4/5", "5/4"],
        correctAnswer: "5/4",
        explanation: "5/4 is improper because the numerator (5) is greater than the denominator (4). 📈",
        wrongAnswerExplanations: {
            "2/3": "2/3 is a proper fraction because 2 < 3.",
            "3/4": "3/4 is a proper fraction because 3 < 4.",
            "4/5": "4/5 is a proper fraction because 4 < 5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch7_t1_qe5',
        type: "mcq",
        question: "Convert 2⅓ to an improper fraction.",
        options: ["5/3", "6/3", "7/3", "8/3"],
        correctAnswer: "7/3",
        explanation: "(2 × 3) + 1 = 7, so 2⅓ = 7/3. 🔄",
        wrongAnswerExplanations: {
            "5/3": "5/3 would be 1⅔, not 2⅓.",
            "6/3": "6/3 = 2, not 2⅓.",
            "8/3": "8/3 would be 2⅔, not 2⅓."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch7_t1_qe6',
        type: "mcq",
        question: "Which fraction is equivalent to ½?",
        options: ["2/3", "3/6", "4/5", "5/10"],
        correctAnswer: "3/6",
        explanation: "3/6 = ½ because both numerator and denominator can be divided by 3. 🔄",
        wrongAnswerExplanations: {
            "2/3": "2/3 is not equal to ½.",
            "4/5": "4/5 is not equal to ½.",
            "5/10": "5/10 = ½, but 3/6 is the simplest form."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch7_t1_qe7',
        type: "mcq",
        question: "If a pizza is cut into 8 slices and you eat 3 slices, what fraction of the pizza did you eat?",
        options: ["3/8", "5/8", "3/5", "8/3"],
        correctAnswer: "3/8",
        explanation: "You ate 3 out of 8 slices, which is 3/8 of the pizza. 🍕",
        wrongAnswerExplanations: {
            "5/8": "5/8 would mean you ate 5 slices.",
            "3/5": "3/5 would mean the pizza was cut into 5 slices.",
            "8/3": "8/3 is an improper fraction and doesn't make sense in this context."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch7_t1_qe8',
        type: "mcq",
        question: "Which of these is NOT a proper fraction?",
        options: ["1/2", "2/3", "3/4", "4/3"],
        correctAnswer: "4/3",
        explanation: "4/3 is an improper fraction because 4 > 3. ❌",
        wrongAnswerExplanations: {
            "1/2": "1/2 is a proper fraction because 1 < 2.",
            "2/3": "2/3 is a proper fraction because 2 < 3.",
            "3/4": "3/4 is a proper fraction because 3 < 4."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch7_t1_qe9',
        type: "mcq",
        question: "Convert 7/2 to a mixed fraction.",
        options: ["3½", "3¼", "2½", "2¾"],
        correctAnswer: "3½",
        explanation: "7 ÷ 2 = 3 with remainder 1, so 7/2 = 3½. 🔄",
        wrongAnswerExplanations: {
            "3¼": "3¼ would be 13/4, not 7/2.",
            "2½": "2½ would be 5/2, not 7/2.",
            "2¾": "2¾ would be 11/4, not 7/2."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch7_t1_qe10',
        type: "mcq",
        question: "Which fraction represents 'three quarters'?",
        options: ["1/4", "2/4", "3/4", "4/4"],
        correctAnswer: "3/4",
        explanation: "Three quarters means 3 out of 4 equal parts, which is 3/4. 📊",
        wrongAnswerExplanations: {
            "1/4": "1/4 is one quarter, not three quarters.",
            "2/4": "2/4 is two quarters (or one half), not three quarters.",
            "4/4": "4/4 is four quarters (or one whole), not three quarters."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch7_t1_qe11',
        type: "mcq",
        question: "What is the numerator in the fraction 5/8?",
        options: ["5", "8", "13", "3"],
        correctAnswer: "5",
        explanation: "In a fraction, the numerator is the top number. In 5/8, 5 is the numerator. 🔢",
        wrongAnswerExplanations: {
            "8": "8 is the denominator, not the numerator.",
            "13": "13 is not part of the fraction 5/8.",
            "3": "3 is not part of the fraction 5/8."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch7_t1_qe12',
        type: "mcq",
        question: "Which of these fractions is equal to 1?",
        options: ["1/2", "2/3", "3/4", "4/4"],
        correctAnswer: "4/4",
        explanation: "4/4 = 1 because when numerator equals denominator, the fraction equals 1. 🔄",
        wrongAnswerExplanations: {
            "1/2": "1/2 is less than 1.",
            "2/3": "2/3 is less than 1.",
            "3/4": "3/4 is less than 1."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch7_t1_qe13',
        type: "mcq",
        question: "If you have 2½ chocolate bars, how would you write this as an improper fraction?",
        options: ["3/2", "4/2", "5/2", "6/2"],
        correctAnswer: "5/2",
        explanation: "(2 × 2) + 1 = 5, so 2½ = 5/2. 🍫",
        wrongAnswerExplanations: {
            "3/2": "3/2 would be 1½, not 2½.",
            "4/2": "4/2 = 2, not 2½.",
            "6/2": "6/2 = 3, not 2½."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch7_t1_qe14',
        type: "mcq",
        question: "Which fraction is equivalent to 2/3?",
        options: ["4/6", "3/6", "6/9", "Both 4/6 and 6/9"],
        correctAnswer: "Both 4/6 and 6/9",
        explanation: "2/3 = 4/6 = 6/9 because all can be simplified to 2/3. 🔄",
        wrongAnswerExplanations: {
            "4/6": "4/6 is correct, but there's another correct answer.",
            "3/6": "3/6 = 1/2, not 2/3.",
            "6/9": "6/9 is correct, but there's another correct answer."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch7_t1_qe15',
        type: "mcq",
        question: "What is the denominator in the fraction 7/9?",
        options: ["7", "9", "16", "2"],
        correctAnswer: "9",
        explanation: "In a fraction, the denominator is the bottom number. In 7/9, 9 is the denominator. 🔢",
        wrongAnswerExplanations: {
            "7": "7 is the numerator, not the denominator.",
            "16": "16 is not part of the fraction 7/9.",
            "2": "2 is not part of the fraction 7/9."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch7_t1_qe16',
        type: "mcq",
        question: "Which of these is a mixed fraction?",
        options: ["3/4", "5/4", "1¾", "7/8"],
        correctAnswer: "1¾",
        explanation: "1¾ is a mixed fraction because it has a whole number (1) and a proper fraction (¾). 🔄",
        wrongAnswerExplanations: {
            "3/4": "3/4 is a proper fraction, not a mixed fraction.",
            "5/4": "5/4 is an improper fraction, not a mixed fraction.",
            "7/8": "7/8 is a proper fraction, not a mixed fraction."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch7_t1_qe17',
        type: "mcq",
        question: "Convert 9/4 to a mixed fraction.",
        options: ["2¼", "2½", "2¾", "3¼"],
        correctAnswer: "2¼",
        explanation: "9 ÷ 4 = 2 with remainder 1, so 9/4 = 2¼. 🔄",
        wrongAnswerExplanations: {
            "2½": "2½ would be 10/4, not 9/4.",
            "2¾": "2¾ would be 11/4, not 9/4.",
            "3¼": "3¼ would be 13/4, not 9/4."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch7_t1_qe18',
        type: "mcq",
        question: "Which fraction represents 'one third'?",
        options: ["1/2", "1/3", "1/4", "1/5"],
        correctAnswer: "1/3",
        explanation: "One third means 1 out of 3 equal parts, which is 1/3. 📊",
        wrongAnswerExplanations: {
            "1/2": "1/2 is one half, not one third.",
            "1/4": "1/4 is one quarter, not one third.",
            "1/5": "1/5 is one fifth, not one third."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch7_t1_qe19',
        type: "mcq",
        question: "Which of these fractions is greater than 1?",
        options: ["1/2", "2/3", "3/4", "5/4"],
        correctAnswer: "5/4",
        explanation: "5/4 > 1 because the numerator (5) is greater than the denominator (4). 📈",
        wrongAnswerExplanations: {
            "1/2": "1/2 < 1 because 1 < 2.",
            "2/3": "2/3 < 1 because 2 < 3.",
            "3/4": "3/4 < 1 because 3 < 4."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch7_t1_qe20',
        type: "mcq",
        question: "If you have 3⅔ cups of flour, how would you write this as an improper fraction?",
        options: ["8/3", "9/3", "10/3", "11/3"],
        correctAnswer: "11/3",
        explanation: "(3 × 3) + 2 = 11, so 3⅔ = 11/3. 🥣",
        wrongAnswerExplanations: {
            "8/3": "8/3 would be 2⅔, not 3⅔.",
            "9/3": "9/3 = 3, not 3⅔.",
            "10/3": "10/3 would be 3⅓, not 3⅔."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 