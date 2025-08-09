import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl3_ch9_t1_qe1',
        type: "mcq",
        question: "What does 3 × 4 represent?",
        options: ["3 groups of 4", "4 groups of 3", "3 + 4", "4 - 3"],
        correctAnswer: "3 groups of 4",
        explanation: "3 × 4 means 3 groups with 4 objects in each group.",
        wrongAnswerExplanations: {
            "4 groups of 3": "This would be written as 4 × 3, not 3 × 4.",
            "3 + 4": "This is addition, not multiplication.",
            "4 - 3": "This is subtraction, not multiplication."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch9_t1_qe2',
        type: "mcq",
        question: "Which of these shows 4 × 2 as repeated addition?",
        options: ["4 + 4", "2 + 2 + 2 + 2", "4 + 2", "2 + 4"],
        correctAnswer: "2 + 2 + 2 + 2",
        explanation: "4 × 2 means adding 2 four times: 2 + 2 + 2 + 2 = 8.",
        wrongAnswerExplanations: {
            "4 + 4": "This is 2 × 4, not 4 × 2.",
            "4 + 2": "This is simple addition, not multiplication.",
            "2 + 4": "This is simple addition, not multiplication."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch9_t1_qe3',
        type: "mcq",
        question: "If there are 5 baskets with 3 apples in each, how many apples are there in total?",
        options: ["8", "15", "5", "3"],
        correctAnswer: "15",
        explanation: "This is 5 × 3 = 3 + 3 + 3 + 3 + 3 = 15 apples in total.",
        wrongAnswerExplanations: {
            "8": "This is 5 + 3, not 5 × 3.",
            "5": "This is the number of baskets, not the total number of apples.",
            "3": "This is the number of apples in each basket, not the total."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch9_t1_qe4',
        type: "mcq",
        question: "What is 3 × 3 written as repeated addition?",
        options: ["3 + 3", "3 + 3 + 3", "3 × 3", "9"],
        correctAnswer: "3 + 3 + 3",
        explanation: "3 × 3 means adding 3 three times: 3 + 3 + 3 = 9.",
        wrongAnswerExplanations: {
            "3 + 3": "This is 2 × 3, not 3 × 3.",
            "3 × 3": "This is the multiplication expression, not the repeated addition form.",
            "9": "This is the answer, not the repeated addition form."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch9_t1_qe5',
        type: "mcq",
        question: "There are 4 children. Each child has 2 pencils. How many pencils are there altogether?",
        options: ["6", "8", "4", "2"],
        correctAnswer: "8",
        explanation: "This is 4 × 2 = 2 + 2 + 2 + 2 = 8 pencils in total.",
        wrongAnswerExplanations: {
            "6": "This is 4 + 2, not 4 × 2.",
            "4": "This is the number of children, not the total number of pencils.",
            "2": "This is the number of pencils each child has, not the total."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch9_t1_qe6',
        type: "mcq",
        question: "Which repeated addition equals 5 × 2?",
        options: ["5 + 5", "2 + 2 + 2 + 2 + 2", "5 + 2", "2 × 5"],
        correctAnswer: "2 + 2 + 2 + 2 + 2",
        explanation: "5 × 2 means adding 2 five times: 2 + 2 + 2 + 2 + 2 = 10.",
        wrongAnswerExplanations: {
            "5 + 5": "This is 2 × 5, not 5 × 2.",
            "5 + 2": "This is simple addition, not multiplication.",
            "2 × 5": "This is a related multiplication, but not the repeated addition form of 5 × 2."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch9_t1_qe7',
        type: "mcq",
        question: "What is 6 × 1 as repeated addition?",
        options: ["6 + 6", "1 + 1 + 1 + 1 + 1 + 1", "6 + 1", "6"],
        correctAnswer: "1 + 1 + 1 + 1 + 1 + 1",
        explanation: "6 × 1 means adding 1 six times: 1 + 1 + 1 + 1 + 1 + 1 = 6.",
        wrongAnswerExplanations: {
            "6 + 6": "This is 2 × 6, not 6 × 1.",
            "6 + 1": "This is simple addition, not multiplication.",
            "6": "This is the answer, not the repeated addition form."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch9_t1_qe8',
        type: "mcq",
        question: "If you have 3 boxes with 4 toys in each, how many toys do you have in total?",
        options: ["7", "12", "3", "4"],
        correctAnswer: "12",
        explanation: "This is 3 × 4 = 4 + 4 + 4 = 12 toys in total.",
        wrongAnswerExplanations: {
            "7": "This is 3 + 4, not 3 × 4.",
            "3": "This is the number of boxes, not the total number of toys.",
            "4": "This is the number of toys in each box, not the total."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch9_t1_qe9',
        type: "mcq",
        question: "How many wheels are there on 5 bicycles?",
        options: ["5", "10", "15", "7"],
        correctAnswer: "10",
        explanation: "Each bicycle has 2 wheels, so 5 bicycles have 5 × 2 = 2 + 2 + 2 + 2 + 2 = 10 wheels.",
        wrongAnswerExplanations: {
            "5": "This is the number of bicycles, not the total number of wheels.",
            "15": "This would be correct if each bicycle had 3 wheels, but bicycles have 2 wheels.",
            "7": "This is 5 + 2, not 5 × 2."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch9_t1_qe10',
        type: "mcq",
        question: "What is the correct way to write 2 + 2 + 2 as multiplication?",
        options: ["2 × 3", "3 × 2", "2 × 2", "3 + 2"],
        correctAnswer: "3 × 2",
        explanation: "2 + 2 + 2 means adding 2 three times, which is 3 × 2 = 6.",
        wrongAnswerExplanations: {
            "2 × 3": "This would be 3 + 3, not 2 + 2 + 2.",
            "2 × 2": "This would be 2 + 2 = 4, not 2 + 2 + 2 = 6.",
            "3 + 2": "This is simple addition, not multiplication."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch9_t1_qe11',
        type: "mcq",
        question: "If there are 2 hands and each hand has 5 fingers, how many fingers are there in total?",
        options: ["7", "10", "2", "5"],
        correctAnswer: "10",
        explanation: "This is 2 × 5 = 5 + 5 = 10 fingers in total.",
        wrongAnswerExplanations: {
            "7": "This is 2 + 5, not 2 × 5.",
            "2": "This is the number of hands, not the total number of fingers.",
            "5": "This is the number of fingers on each hand, not the total."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch9_t1_qe12',
        type: "mcq",
        question: "Which shows 3 × 5 as repeated addition?",
        options: ["3 + 5", "5 + 5 + 5", "3 + 3 + 3 + 3 + 3", "8"],
        correctAnswer: "5 + 5 + 5",
        explanation: "3 × 5 means adding 5 three times: 5 + 5 + 5 = 15.",
        wrongAnswerExplanations: {
            "3 + 5": "This is simple addition, not multiplication.",
            "3 + 3 + 3 + 3 + 3": "This is 5 × 3, not 3 × 5.",
            "8": "This is 3 + 5, not 3 × 5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch9_t1_qe13',
        type: "mcq",
        question: "How many legs do 4 cats have in total?",
        options: ["4", "16", "8", "12"],
        correctAnswer: "16",
        explanation: "Each cat has 4 legs, so 4 cats have 4 × 4 = 4 + 4 + 4 + 4 = 16 legs in total.",
        wrongAnswerExplanations: {
            "4": "This is the number of cats or the number of legs one cat has, not the total.",
            "8": "This would be correct for 2 cats, not 4 cats.",
            "12": "This would be correct for 3 cats, not 4 cats."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch9_t1_qe14',
        type: "mcq",
        question: "Which is equal to 7 × 1?",
        options: ["7 + 1", "1 + 1 + 1 + 1 + 1 + 1 + 1", "7", "14"],
        correctAnswer: "1 + 1 + 1 + 1 + 1 + 1 + 1",
        explanation: "7 × 1 means adding 1 seven times: 1 + 1 + 1 + 1 + 1 + 1 + 1 = 7.",
        wrongAnswerExplanations: {
            "7 + 1": "This is simple addition, not multiplication.",
            "7": "This is the answer, not the repeated addition form.",
            "14": "This would be 7 × 2, not 7 × 1."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch9_t1_qe15',
        type: "mcq",
        question: "There are 3 pencil boxes. Each box has 6 pencils. How many pencils are there altogether?",
        options: ["9", "18", "3", "6"],
        correctAnswer: "18",
        explanation: "This is 3 × 6 = 6 + 6 + 6 = 18 pencils in total.",
        wrongAnswerExplanations: {
            "9": "This is 3 × 3, not 3 × 6.",
            "3": "This is the number of pencil boxes, not the total number of pencils.",
            "6": "This is the number of pencils in each box, not the total."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch9_t1_qe16',
        type: "mcq",
        question: "What does 1 × 8 mean?",
        options: ["1 + 8", "8 + 8", "1 group of 8", "8 groups of 1"],
        correctAnswer: "1 group of 8",
        explanation: "1 × 8 means 1 group with 8 objects, which equals 8.",
        wrongAnswerExplanations: {
            "1 + 8": "This is addition, not multiplication.",
            "8 + 8": "This is 2 × 8, not 1 × 8.",
            "8 groups of 1": "This would be 8 × 1, not 1 × 8."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch9_t1_qe17',
        type: "mcq",
        question: "Which repeated addition is the same as 4 × 3?",
        options: ["4 + 3", "3 + 3 + 3 + 3", "4 + 4 + 4", "7"],
        correctAnswer: "3 + 3 + 3 + 3",
        explanation: "4 × 3 means adding 3 four times: 3 + 3 + 3 + 3 = 12.",
        wrongAnswerExplanations: {
            "4 + 3": "This is simple addition, not multiplication.",
            "4 + 4 + 4": "This is 3 × 4, not 4 × 3.",
            "7": "This is 4 + 3, not 4 × 3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch9_t1_qe18',
        type: "mcq",
        question: "How many days are there in 2 weeks?",
        options: ["2", "7", "14", "9"],
        correctAnswer: "14",
        explanation: "Each week has 7 days, so 2 weeks have 2 × 7 = 7 + 7 = 14 days.",
        wrongAnswerExplanations: {
            "2": "This is the number of weeks, not the total number of days.",
            "7": "This is the number of days in 1 week, not 2 weeks.",
            "9": "This is 2 + 7, not 2 × 7."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch9_t1_qe19',
        type: "mcq",
        question: "If you eat 2 chocolates every day for 3 days, how many chocolates will you eat in total?",
        options: ["5", "6", "2", "3"],
        correctAnswer: "6",
        explanation: "This is 3 × 2 = 2 + 2 + 2 = 6 chocolates in total.",
        wrongAnswerExplanations: {
            "5": "This is 3 + 2, not 3 × 2.",
            "2": "This is the number of chocolates eaten each day, not the total.",
            "3": "This is the number of days, not the total number of chocolates."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch9_t1_qe20',
        type: "mcq",
        question: "What is 0 × 5 equal to?",
        options: ["0", "5", "10", "1"],
        correctAnswer: "0",
        explanation: "0 × 5 means zero groups of 5, which equals 0. Any number multiplied by 0 equals 0.",
        wrongAnswerExplanations: {
            "5": "This would be 1 × 5, not 0 × 5.",
            "10": "This would be 2 × 5, not 0 × 5.",
            "1": "This is incorrect. 0 × 5 = 0."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
