import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch9_t3_qe1',
        type: "mcq",
        question: "Which of these shows 1/4 of a circle shaded?",
        options: ["A circle divided into 4 parts with one part shaded", "A circle divided into 2 parts with one part shaded", "A circle divided into 8 parts with two parts shaded", "A complete shaded circle"],
        correctAnswer: "A circle divided into 4 parts with one part shaded",
        explanation: "One-fourth (1/4) means dividing the circle into 4 equal parts and shading 1 part. 🍕",
        wrongAnswerExplanations: {
            "A circle divided into 2 parts with one part shaded": "This shows 1/2 (one-half), not 1/4 (one-fourth).",
            "A circle divided into 8 parts with two parts shaded": "This shows 2/8 which equals 1/4, but the question asks specifically about 1/4 representation.",
            "A complete shaded circle": "This shows 1 whole (or 4/4), not 1/4."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t3_qe2',
        type: "mcq",
        question: "What fraction of the rectangle is shaded if it is divided into 8 equal parts and 2 parts are colored?",
        options: ["1/4", "1/2", "2/8", "2/10"],
        correctAnswer: "2/8",
        explanation: "2 parts out of 8 equal parts are shaded, which is represented as the fraction 2/8. 🟦",
        wrongAnswerExplanations: {
            "1/4": "1/4 = 2/8 is correct mathematically, but the direct observation is 2/8.",
            "1/2": "1/2 = 4/8, which would require 4 shaded parts out of 8.",
            "2/10": "The rectangle has 8 parts total, not 10."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t3_qe3',
        type: "mcq",
        question: "Which picture shows 3/4 of a pizza eaten?",
        options: ["A pizza with one slice missing", "A pizza with 3 slices missing out of 4", "A whole pizza with no slices missing", "Half of a pizza missing"],
        correctAnswer: "A pizza with 3 slices missing out of 4",
        explanation: "If 3/4 of a pizza is eaten, then 3 out of 4 equal slices are missing from the pizza. 🍕",
        wrongAnswerExplanations: {
            "A pizza with one slice missing": "This shows 1/4 eaten, not 3/4.",
            "A whole pizza with no slices missing": "This shows 0/4 eaten, not 3/4.",
            "Half of a pizza missing": "This shows 1/2 eaten, not 3/4."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t3_qe4',
        type: "mcq",
        question: "How would you represent 1/3 of a square visually?",
        options: ["Divide the square into 3 equal parts and shade 1 part", "Divide the square into 2 equal parts and shade 1 part", "Divide the square into 4 equal parts and shade 1 part", "Shade the entire square"],
        correctAnswer: "Divide the square into 3 equal parts and shade 1 part",
        explanation: "To show 1/3, divide the square into 3 equal parts and shade exactly 1 part. 🟪",
        wrongAnswerExplanations: {
            "Divide the square into 2 equal parts and shade 1 part": "This shows 1/2, not 1/3.",
            "Divide the square into 4 equal parts and shade 1 part": "This shows 1/4, not 1/3.",
            "Shade the entire square": "This shows 3/3 or a whole, not 1/3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t3_qe5',
        type: "mcq",
        question: "If a chocolate bar has 12 equal pieces and you eat 3 pieces, what fraction of the chocolate bar did you eat?",
        options: ["1/4", "3/12", "1/3", "3/9"],
        correctAnswer: "3/12",
        explanation: "You ate 3 pieces out of 12 total pieces, which is the fraction 3/12. 🍫",
        wrongAnswerExplanations: {
            "1/4": "1/4 = 3/12 is correct mathematically, but the direct observation is 3/12.",
            "1/3": "1/3 = 4/12, which would mean eating 4 pieces out of 12.",
            "3/9": "The chocolate has 12 pieces total, not 9."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t3_qe6',
        type: "mcq",
        question: "Which fraction is represented by the shaded part in a circle divided into 8 equal parts with 4 parts shaded?",
        options: ["1/2", "4/8", "4/4", "1/4"],
        correctAnswer: "4/8",
        explanation: "4 parts out of 8 equal parts are shaded, which gives us the fraction 4/8. 🔄",
        wrongAnswerExplanations: {
            "1/2": "1/2 = 4/8 is correct mathematically, but the direct observation is 4/8.",
            "4/4": "4/4 represents a whole circle completely shaded.",
            "1/4": "1/4 = 2/8, which would be 2 parts shaded out of 8."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t3_qe7',
        type: "mcq",
        question: "In a class of 20 students, 5 students are wearing red shirts. What fraction of the class is wearing red shirts?",
        options: ["5/20", "1/4", "5/15", "1/5"],
        correctAnswer: "5/20",
        explanation: "5 students out of 20 total students are wearing red shirts, giving us the fraction 5/20. 👕",
        wrongAnswerExplanations: {
            "1/4": "1/4 = 5/20 is correct mathematically, but the direct observation is 5/20.",
            "5/15": "The class has 20 students total, not 15.",
            "1/5": "1/5 = 4/20, which would be 4 students out of 20."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t3_qe8',
        type: "mcq",
        question: "If a rectangle is divided into 6 equal parts and 3 parts are colored blue, what fraction shows the blue part?",
        options: ["1/2", "3/6", "1/3", "3/3"],
        correctAnswer: "3/6",
        explanation: "3 parts colored out of 6 equal parts gives us the fraction 3/6. 🔵",
        wrongAnswerExplanations: {
            "1/2": "1/2 = 3/6 is correct mathematically, but the direct observation is 3/6.",
            "1/3": "1/3 = 2/6, which would be 2 parts colored out of 6.",
            "3/3": "3/3 would mean all parts are colored, but only half (3/6) are blue."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t3_qe9',
        type: "mcq",
        question: "How would you show 2/3 of a circle filled with water?",
        options: ["Divide the circle into 3 equal parts and shade 2 parts", "Divide the circle into 2 equal parts and shade 1 part", "Divide the circle into 6 equal parts and shade 2 parts", "Shade the entire circle"],
        correctAnswer: "Divide the circle into 3 equal parts and shade 2 parts",
        explanation: "To represent 2/3, divide the circle into 3 equal parts and shade 2 parts. 💧",
        wrongAnswerExplanations: {
            "Divide the circle into 2 equal parts and shade 1 part": "This shows 1/2, not 2/3.",
            "Divide the circle into 6 equal parts and shade 2 parts": "This shows 2/6 = 1/3, not 2/3.",
            "Shade the entire circle": "This shows 3/3 or a whole, not 2/3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t3_qe10',
        type: "mcq",
        question: "Which picture correctly shows 1/5 of a square shaded?",
        options: ["A square divided into 5 equal parts with 1 part shaded", "A square divided into 4 equal parts with 1 part shaded", "A square divided into 10 equal parts with 2 parts shaded", "A square divided into 5 equal parts with 4 parts shaded"],
        correctAnswer: "A square divided into 5 equal parts with 1 part shaded",
        explanation: "1/5 means dividing the square into 5 equal parts and shading exactly 1 part. ⬜",
        wrongAnswerExplanations: {
            "A square divided into 4 equal parts with 1 part shaded": "This shows 1/4, not 1/5.",
            "A square divided into 10 equal parts with 2 parts shaded": "This shows 2/10 = 1/5, but the direct observation asked for is 1/5.",
            "A square divided into 5 equal parts with 4 parts shaded": "This shows 4/5, not 1/5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t3_qe11',
        type: "mcq",
        question: "If you fold a piece of paper into 2 equal parts and then color 1 part, what fraction of the paper is colored?",
        options: ["1/2", "2/1", "1/4", "2/2"],
        correctAnswer: "1/2",
        explanation: "When you color 1 out of 2 equal parts, the colored portion is 1/2 of the whole paper. 📄",
        wrongAnswerExplanations: {
            "2/1": "This represents 2 wholes, which is impossible with just one piece of paper.",
            "1/4": "1/4 would mean the paper is divided into 4 equal parts with 1 part colored.",
            "2/2": "2/2 = 1 would mean the entire paper is colored."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t3_qe12',
        type: "mcq",
        question: "What fraction of an hour is 15 minutes?",
        options: ["1/4", "1/2", "1/3", "3/4"],
        correctAnswer: "1/4",
        explanation: "15 minutes is 1/4 of an hour, as there are 60 minutes in an hour and 60 ÷ 4 = 15. ⏰",
        wrongAnswerExplanations: {
            "1/2": "1/2 of an hour is 30 minutes, not 15 minutes.",
            "1/3": "1/3 of an hour is 20 minutes, not 15 minutes.",
            "3/4": "3/4 of an hour is 45 minutes, not 15 minutes."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t3_qe13',
        type: "mcq",
        question: "If a watermelon is cut into 8 equal slices and you eat 4 slices, what fraction of the watermelon did you eat?",
        options: ["1/2", "4/8", "4/4", "2/8"],
        correctAnswer: "4/8",
        explanation: "You ate 4 out of 8 equal slices, which gives us the fraction 4/8. 🍉",
        wrongAnswerExplanations: {
            "1/2": "1/2 = 4/8 is correct mathematically, but the direct observation is 4/8.",
            "4/4": "4/4 = 1 would mean you ate the entire watermelon.",
            "2/8": "2/8 would mean you ate 2 slices out of 8, not 4."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t3_qe14',
        type: "mcq",
        question: "Which of these fractions can be represented by shading 1 part of a rectangle divided into 3 equal parts?",
        options: ["1/3", "1/2", "2/3", "3/3"],
        correctAnswer: "1/3",
        explanation: "When 1 out of 3 equal parts is shaded in a rectangle, it represents the fraction 1/3. 🟩",
        wrongAnswerExplanations: {
            "1/2": "1/2 would require the rectangle to be divided into 2 equal parts.",
            "2/3": "2/3 would require 2 parts out of 3 to be shaded.",
            "3/3": "3/3 would require all 3 parts to be shaded, representing a whole."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t3_qe15',
        type: "mcq",
        question: "What fraction of a pizza is eaten if 2 slices out of 8 equal slices are gone?",
        options: ["2/8", "1/4", "2/6", "1/2"],
        correctAnswer: "2/8",
        explanation: "2 slices eaten out of 8 equal slices means 2/8 of the pizza is gone. 🍕",
        wrongAnswerExplanations: {
            "1/4": "1/4 = 2/8 is correct mathematically, but the direct observation is 2/8.",
            "2/6": "The pizza has 8 slices total, not 6.",
            "1/2": "1/2 = 4/8, which would mean 4 slices are gone out of 8."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t3_qe16',
        type: "mcq",
        question: "If you shade 3 out of 6 equal parts of a shape, which fraction does NOT represent the shaded portion?",
        options: ["1/2", "3/6", "2/4", "4/6"],
        correctAnswer: "4/6",
        explanation: "3 out of 6 parts is 3/6 or 1/2, not 4/6 which would mean 4 parts are shaded. ⚪",
        wrongAnswerExplanations: {
            "1/2": "1/2 = 3/6, so this correctly represents the shaded portion.",
            "3/6": "This directly represents 3 parts out of 6, which matches the shaded portion.",
            "2/4": "2/4 = 1/2 = 3/6, so this correctly represents the shaded portion."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t3_qe17',
        type: "mcq",
        question: "A rectangle is divided into 4 equal parts. If 3 parts are colored, what fraction of the rectangle is NOT colored?",
        options: ["1/4", "3/4", "1/3", "2/4"],
        correctAnswer: "1/4",
        explanation: "If 3/4 is colored, then 1/4 is not colored (4/4 - 3/4 = 1/4). ⬜",
        wrongAnswerExplanations: {
            "3/4": "3/4 represents the colored portion, not the uncolored portion.",
            "1/3": "The rectangle is divided into 4 parts, not 3.",
            "2/4": "If 3 parts out of 4 are colored, only 1 part (1/4) is uncolored."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t3_qe18',
        type: "mcq",
        question: "Which visual representation correctly shows 2/5 of a circle?",
        options: ["A circle divided into 5 equal parts with 2 parts shaded", "A circle divided into 2 equal parts with 1 part shaded", "A circle divided into 10 equal parts with 4 parts shaded", "A circle divided into 5 equal parts with 3 parts shaded"],
        correctAnswer: "A circle divided into 5 equal parts with 2 parts shaded",
        explanation: "2/5 means dividing the circle into 5 equal parts and shading exactly 2 parts. 🔵",
        wrongAnswerExplanations: {
            "A circle divided into 2 equal parts with 1 part shaded": "This shows 1/2, not 2/5.",
            "A circle divided into 10 equal parts with 4 parts shaded": "This shows 4/10 = 2/5, but the direct representation is 2/5.",
            "A circle divided into 5 equal parts with 3 parts shaded": "This shows 3/5, not 2/5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t3_qe19',
        type: "mcq",
        question: "What fraction of a day is 6 hours?",
        options: ["1/4", "1/6", "1/3", "1/2"],
        correctAnswer: "1/4",
        explanation: "6 hours is 1/4 of a day, because a day has 24 hours and 24 ÷ 4 = 6. 🕕",
        wrongAnswerExplanations: {
            "1/6": "1/6 of a day would be 4 hours, not 6 hours.",
            "1/3": "1/3 of a day would be 8 hours, not 6 hours.",
            "1/2": "1/2 of a day would be 12 hours, not 6 hours."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t3_qe20',
        type: "mcq",
        question: "If 2 out of 10 apples in a basket are red, what fraction of the apples is red?",
        options: ["2/10", "1/5", "2/8", "5/10"],
        correctAnswer: "2/10",
        explanation: "2 red apples out of 10 total apples gives us the fraction 2/10. 🍎",
        wrongAnswerExplanations: {
            "1/5": "1/5 = 2/10 is correct mathematically, but the direct observation is 2/10.",
            "2/8": "The basket has 10 apples total, not 8.",
            "5/10": "5/10 would mean 5 apples are red, not 2."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
