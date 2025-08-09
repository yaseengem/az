import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch7_t3_qe1',
        type: "mcq",
        question: "What is 1/4 + 2/4?",
        options: ["1/4", "2/4", "3/4", "4/4"],
        correctAnswer: "3/4",
        explanation: "When denominators are the same, add numerators: 1 + 2 = 3, keep denominator 4. ➕",
        wrongAnswerExplanations: {
            "1/4": "This is just the first fraction, not the sum.",
            "2/4": "This is just the second fraction, not the sum.",
            "4/4": "This would be the sum of 2/4 + 2/4, not 1/4 + 2/4."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch7_t3_qe2',
        type: "mcq",
        question: "What is 3/5 - 1/5?",
        options: ["1/5", "2/5", "3/5", "4/5"],
        correctAnswer: "2/5",
        explanation: "When denominators are the same, subtract numerators: 3 - 1 = 2, keep denominator 5. ➖",
        wrongAnswerExplanations: {
            "1/5": "This is the second fraction, not the difference.",
            "3/5": "This is the first fraction, not the difference.",
            "4/5": "This would be the sum, not the difference."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch7_t3_qe3',
        type: "mcq",
        question: "If you eat 1/3 of a pizza 🍕 and your friend eats 1/3, how much pizza is left?",
        options: ["1/3", "2/3", "1/6", "0"],
        correctAnswer: "1/3",
        explanation: "Total eaten: 1/3 + 1/3 = 2/3. Left: 1 - 2/3 = 1/3. 🍕",
        wrongAnswerExplanations: {
            "2/3": "This is how much was eaten, not what's left.",
            "1/6": "This is incorrect. The whole pizza is 3/3.",
            "0": "There is still some pizza left."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch7_t3_qe4',
        type: "mcq",
        question: "What is 1/2 + 1/2?",
        options: ["1/4", "1/2", "1", "2"],
        correctAnswer: "1",
        explanation: "1/2 + 1/2 = 2/2 = 1. Two halves make a whole. 🔄",
        wrongAnswerExplanations: {
            "1/4": "This would be 1/2 × 1/2, not 1/2 + 1/2.",
            "1/2": "This is just one of the fractions, not the sum.",
            "2": "This would be 1/2 + 3/2, not 1/2 + 1/2."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch7_t3_qe5',
        type: "mcq",
        question: "What is 4/6 - 2/6?",
        options: ["1/6", "2/6", "3/6", "4/6"],
        correctAnswer: "2/6",
        explanation: "4/6 - 2/6 = (4-2)/6 = 2/6. Can be simplified to 1/3. ➖",
        wrongAnswerExplanations: {
            "1/6": "This would be 3/6 - 2/6, not 4/6 - 2/6.",
            "3/6": "This would be 5/6 - 2/6, not 4/6 - 2/6.",
            "4/6": "This is the first fraction, not the difference."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch7_t3_qe6',
        type: "mcq",
        question: "If you have 3/4 of a chocolate bar 🍫 and eat 1/4, how much is left?",
        options: ["1/4", "1/2", "3/4", "1"],
        correctAnswer: "1/2",
        explanation: "3/4 - 1/4 = 2/4 = 1/2. Half of the chocolate bar remains. 🍫",
        wrongAnswerExplanations: {
            "1/4": "This is what was eaten, not what's left.",
            "3/4": "This is what you started with, not what's left.",
            "1": "This would be the whole bar, but you ate some."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch7_t3_qe7',
        type: "mcq",
        question: "What is 1/3 + 1/3 + 1/3?",
        options: ["1/3", "2/3", "1", "3/3"],
        correctAnswer: "1",
        explanation: "1/3 + 1/3 + 1/3 = 3/3 = 1. Three thirds make a whole. 🔄",
        wrongAnswerExplanations: {
            "1/3": "This is just one of the fractions, not the sum.",
            "2/3": "This would be the sum of two 1/3s, not three.",
            "3/3": "This is correct but should be simplified to 1."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch7_t3_qe8',
        type: "mcq",
        question: "What is 5/8 - 3/8?",
        options: ["1/8", "2/8", "3/8", "4/8"],
        correctAnswer: "2/8",
        explanation: "5/8 - 3/8 = (5-3)/8 = 2/8. Can be simplified to 1/4. ➖",
        wrongAnswerExplanations: {
            "1/8": "This would be 4/8 - 3/8, not 5/8 - 3/8.",
            "3/8": "This is the second fraction, not the difference.",
            "4/8": "This would be 7/8 - 3/8, not 5/8 - 3/8."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch7_t3_qe9',
        type: "mcq",
        question: "If you walk 1/2 mile in the morning and 1/2 mile in the evening, how far did you walk?",
        options: ["1/2 mile", "1 mile", "2 miles", "1/4 mile"],
        correctAnswer: "1 mile",
        explanation: "1/2 + 1/2 = 2/2 = 1 mile. Two halves make a whole mile. 🚶‍♂️",
        wrongAnswerExplanations: {
            "1/2 mile": "This is just one of the distances, not the total.",
            "2 miles": "This would be 1 + 1, not 1/2 + 1/2.",
            "1/4 mile": "This would be 1/2 × 1/2, not 1/2 + 1/2."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch7_t3_qe10',
        type: "mcq",
        question: "What is 7/10 - 4/10?",
        options: ["1/10", "2/10", "3/10", "4/10"],
        correctAnswer: "3/10",
        explanation: "7/10 - 4/10 = (7-4)/10 = 3/10. Keep denominator same, subtract numerators. ➖",
        wrongAnswerExplanations: {
            "1/10": "This would be 5/10 - 4/10, not 7/10 - 4/10.",
            "2/10": "This would be 6/10 - 4/10, not 7/10 - 4/10.",
            "4/10": "This is the second fraction, not the difference."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch7_t3_qe11',
        type: "mcq",
        question: "What is 2/5 + 1/5 + 1/5?",
        options: ["2/5", "3/5", "4/5", "1"],
        correctAnswer: "4/5",
        explanation: "2/5 + 1/5 + 1/5 = (2+1+1)/5 = 4/5. Add numerators, keep denominator same. ➕",
        wrongAnswerExplanations: {
            "2/5": "This is just the first fraction, not the sum.",
            "3/5": "This would be 2/5 + 1/5, not including the third 1/5.",
            "1": "This would be 5/5, but the sum is 4/5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch7_t3_qe12',
        type: "mcq",
        question: "If you have 3/4 of a cake 🎂 and give away 1/4, how much cake do you have left?",
        options: ["1/4", "1/2", "3/4", "1"],
        correctAnswer: "1/2",
        explanation: "3/4 - 1/4 = 2/4 = 1/2. Half of the cake remains. 🎂",
        wrongAnswerExplanations: {
            "1/4": "This is what you gave away, not what's left.",
            "3/4": "This is what you started with, not what's left.",
            "1": "This would be the whole cake, but you gave some away."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch7_t3_qe13',
        type: "mcq",
        question: "What is 1/6 + 2/6 + 2/6?",
        options: ["3/6", "4/6", "5/6", "1"],
        correctAnswer: "5/6",
        explanation: "1/6 + 2/6 + 2/6 = (1+2+2)/6 = 5/6. Add numerators, keep denominator same. ➕",
        wrongAnswerExplanations: {
            "3/6": "This would be 1/6 + 2/6, not including the third 2/6.",
            "4/6": "This would be 2/6 + 2/6, not including the first 1/6.",
            "1": "This would be 6/6, but the sum is 5/6."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch7_t3_qe14',
        type: "mcq",
        question: "What is 9/12 - 5/12?",
        options: ["2/12", "3/12", "4/12", "5/12"],
        correctAnswer: "4/12",
        explanation: "9/12 - 5/12 = (9-5)/12 = 4/12. Can be simplified to 1/3. ➖",
        wrongAnswerExplanations: {
            "2/12": "This would be 7/12 - 5/12, not 9/12 - 5/12.",
            "3/12": "This would be 8/12 - 5/12, not 9/12 - 5/12.",
            "5/12": "This is the second fraction, not the difference."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch7_t3_qe15',
        type: "mcq",
        question: "If you drink 1/3 of a glass of juice 🥤 and then drink another 1/3, how much juice did you drink?",
        options: ["1/3", "2/3", "1", "1/6"],
        correctAnswer: "2/3",
        explanation: "1/3 + 1/3 = 2/3. You drank two-thirds of the juice. 🥤",
        wrongAnswerExplanations: {
            "1/3": "This is just one serving, not the total.",
            "1": "This would be the whole glass, but you drank less.",
            "1/6": "This would be 1/3 × 1/2, not 1/3 + 1/3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch7_t3_qe16',
        type: "mcq",
        question: "What is 1/8 + 3/8 + 2/8?",
        options: ["4/8", "5/8", "6/8", "7/8"],
        correctAnswer: "6/8",
        explanation: "1/8 + 3/8 + 2/8 = (1+3+2)/8 = 6/8. Can be simplified to 3/4. ➕",
        wrongAnswerExplanations: {
            "4/8": "This would be 1/8 + 3/8, not including the third 2/8.",
            "5/8": "This would be 3/8 + 2/8, not including the first 1/8.",
            "7/8": "This would be 2/8 + 3/8 + 2/8, not 1/8 + 3/8 + 2/8."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch7_t3_qe17',
        type: "mcq",
        question: "What is 11/12 - 7/12?",
        options: ["2/12", "3/12", "4/12", "5/12"],
        correctAnswer: "4/12",
        explanation: "11/12 - 7/12 = (11-7)/12 = 4/12. Can be simplified to 1/3. ➖",
        wrongAnswerExplanations: {
            "2/12": "This would be 9/12 - 7/12, not 11/12 - 7/12.",
            "3/12": "This would be 10/12 - 7/12, not 11/12 - 7/12.",
            "5/12": "This would be 12/12 - 7/12, not 11/12 - 7/12."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch7_t3_qe18',
        type: "mcq",
        question: "If you have 5/6 of a pie 🥧 and eat 2/6, how much pie is left?",
        options: ["1/6", "2/6", "3/6", "4/6"],
        correctAnswer: "3/6",
        explanation: "5/6 - 2/6 = 3/6. Can be simplified to 1/2. Half of the pie remains. 🥧",
        wrongAnswerExplanations: {
            "1/6": "This would be 3/6 - 2/6, not 5/6 - 2/6.",
            "2/6": "This is what you ate, not what's left.",
            "4/6": "This would be 6/6 - 2/6, not 5/6 - 2/6."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch7_t3_qe19',
        type: "mcq",
        question: "What is 2/7 + 3/7 + 1/7?",
        options: ["4/7", "5/7", "6/7", "1"],
        correctAnswer: "6/7",
        explanation: "2/7 + 3/7 + 1/7 = (2+3+1)/7 = 6/7. Add numerators, keep denominator same. ➕",
        wrongAnswerExplanations: {
            "4/7": "This would be 2/7 + 2/7, not including the third fraction.",
            "5/7": "This would be 2/7 + 3/7, not including the third fraction.",
            "1": "This would be 7/7, but the sum is 6/7."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch7_t3_qe20',
        type: "mcq",
        question: "What is 8/9 - 5/9?",
        options: ["1/9", "2/9", "3/9", "4/9"],
        correctAnswer: "3/9",
        explanation: "8/9 - 5/9 = (8-5)/9 = 3/9. Can be simplified to 1/3. ➖",
        wrongAnswerExplanations: {
            "1/9": "This would be 6/9 - 5/9, not 8/9 - 5/9.",
            "2/9": "This would be 7/9 - 5/9, not 8/9 - 5/9.",
            "4/9": "This would be 9/9 - 5/9, not 8/9 - 5/9."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 