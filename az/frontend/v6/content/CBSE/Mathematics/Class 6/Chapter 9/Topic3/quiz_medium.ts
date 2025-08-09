import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch9_t3_qm1',
        type: "mcq",
        question: "A bar graph shows the number of books read by students. If the scale is 1 cm = 5 books, and a bar is 4.5 cm tall, how many books were read?",
        options: ["22.5 books", "20 books", "25 books", "18 books"],
        correctAnswer: "22.5 books",
        explanation: "4.5 cm × 5 books/cm = 22.5 books. 📊",
        wrongAnswerExplanations: {
            "20 books": "This would be for 4 cm, not 4.5 cm.",
            "25 books": "This would be for 5 cm.",
            "18 books": "This is not the correct calculation."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch9_t3_qm2',
        type: "mcq",
        question: "In a pictograph, if 🌟 = 4 stars and a student has 🌟🌟½, how many stars do they have?",
        options: ["10 stars", "8 stars", "9 stars", "12 stars"],
        correctAnswer: "10 stars",
        explanation: "2 full stars = 8 stars, plus half a star = 2 stars, total 10 stars. 📊",
        wrongAnswerExplanations: {
            "8 stars": "This ignores the half star.",
            "9 stars": "This is not the correct calculation.",
            "12 stars": "This would be for 3 full stars."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch9_t3_qm3',
        type: "mcq",
        question: "A pie chart shows the distribution of a day's activities. If 'Sleep' is 30%, 'Study' is 25%, 'Play' is 20%, and 'Other' is 25%, which two activities take the same amount of time?",
        options: ["Study and Other", "Sleep and Study", "Play and Other", "Sleep and Play"],
        correctAnswer: "Study and Other",
        explanation: "Both 'Study' and 'Other' take 25% of the time. 📊",
        wrongAnswerExplanations: {
            "Sleep and Study": "Sleep is 30%, Study is 25%.",
            "Play and Other": "Play is 20%, Other is 25%.",
            "Sleep and Play": "Sleep is 30%, Play is 20%."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch9_t3_qm4',
        type: "mcq",
        question: "A bar graph shows the heights of plants. If the scale is 2 cm = 50 cm, and a bar is 3.6 cm tall, what is the actual height of the plant?",
        options: ["90 cm", "75 cm", "100 cm", "80 cm"],
        correctAnswer: "90 cm",
        explanation: "3.6 cm ÷ 2 cm = 1.8 units, 1.8 × 50 cm = 90 cm. 📊",
        wrongAnswerExplanations: {
            "75 cm": "This is not the correct calculation.",
            "100 cm": "This would be for 4 cm.",
            "80 cm": "This is not the correct calculation."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch9_t3_qm5',
        type: "mcq",
        question: "In a pictograph showing fruits sold, if 🍎 = 6 apples and a vendor has 🍎🍎🍎½, how many apples did they sell?",
        options: ["21 apples", "18 apples", "24 apples", "15 apples"],
        correctAnswer: "21 apples",
        explanation: "3 full apples = 18 apples, plus half an apple = 3 apples, total 21 apples. 📊",
        wrongAnswerExplanations: {
            "18 apples": "This ignores the half apple.",
            "24 apples": "This would be for 4 full apples.",
            "15 apples": "This is not the correct calculation."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch9_t3_qm6',
        type: "mcq",
        question: "A pie chart shows the distribution of marks in a test. If 'A' is 40%, 'B' is 30%, 'C' is 20%, and 'D' is 10%, what percentage of students got either A or B?",
        options: ["70%", "60%", "80%", "50%"],
        correctAnswer: "70%",
        explanation: "40% (A) + 30% (B) = 70%. 📊",
        wrongAnswerExplanations: {
            "60%": "This is just the percentage for A.",
            "80%": "This would include C as well.",
            "50%": "This is not the correct calculation."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch9_t3_qm7',
        type: "mcq",
        question: "A bar graph shows the number of students in different classes. If Class 6A has 35 students, Class 6B has 40 students, and Class 6C has 30 students, what is the total number of students?",
        options: ["105 students", "95 students", "110 students", "100 students"],
        correctAnswer: "105 students",
        explanation: "35 + 40 + 30 = 105 students. 📊",
        wrongAnswerExplanations: {
            "95 students": "This is not the correct sum.",
            "110 students": "This is not the correct sum.",
            "100 students": "This is not the correct sum."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch9_t3_qm8',
        type: "mcq",
        question: "In a pictograph showing trees planted, if 🌳 = 8 trees and a group has 🌳🌳🌳½, how many trees did they plant?",
        options: ["28 trees", "24 trees", "32 trees", "20 trees"],
        correctAnswer: "28 trees",
        explanation: "3 full trees = 24 trees, plus half a tree = 4 trees, total 28 trees. 📊",
        wrongAnswerExplanations: {
            "24 trees": "This ignores the half tree.",
            "32 trees": "This would be for 4 full trees.",
            "20 trees": "This is not the correct calculation."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch9_t3_qm9',
        type: "mcq",
        question: "A pie chart shows the distribution of a budget. If 'Food' is 40%, 'Rent' is 30%, 'Transport' is 20%, and 'Other' is 10%, what percentage is spent on non-food items?",
        options: ["60%", "40%", "70%", "50%"],
        correctAnswer: "60%",
        explanation: "30% (Rent) + 20% (Transport) + 10% (Other) = 60%. 📊",
        wrongAnswerExplanations: {
            "40%": "This is just the percentage for Food.",
            "70%": "This would include Food as well.",
            "50%": "This is not the correct calculation."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch9_t3_qm10',
        type: "mcq",
        question: "A bar graph shows the number of pages read. If the scale is 1 cm = 10 pages, and a bar is 2.5 cm tall, how many pages were read?",
        options: ["25 pages", "20 pages", "30 pages", "15 pages"],
        correctAnswer: "25 pages",
        explanation: "2.5 cm × 10 pages/cm = 25 pages. 📊",
        wrongAnswerExplanations: {
            "20 pages": "This would be for 2 cm.",
            "30 pages": "This would be for 3 cm.",
            "15 pages": "This is not the correct calculation."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch9_t3_qm11',
        type: "mcq",
        question: "In a pictograph showing books read, if 📚 = 5 books and a student has 📚📚📚½, how many books did they read?",
        options: ["17.5 books", "15 books", "20 books", "12.5 books"],
        correctAnswer: "17.5 books",
        explanation: "3 full books = 15 books, plus half a book = 2.5 books, total 17.5 books. 📊",
        wrongAnswerExplanations: {
            "15 books": "This ignores the half book.",
            "20 books": "This would be for 4 full books.",
            "12.5 books": "This is not the correct calculation."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch9_t3_qm12',
        type: "mcq",
        question: "A pie chart shows the distribution of time spent on activities. If 'Study' is 35%, 'Play' is 25%, 'Sleep' is 30%, and 'Other' is 10%, which activity takes the most time?",
        options: ["Study", "Sleep", "Play", "Other"],
        correctAnswer: "Study",
        explanation: "Study takes 35%, which is more than any other activity. 📊",
        wrongAnswerExplanations: {
            "Sleep": "Sleep takes 30%, less than Study.",
            "Play": "Play takes 25%, less than Study.",
            "Other": "Other takes 10%, less than Study."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch9_t3_qm13',
        type: "mcq",
        question: "A bar graph shows the number of goals scored. If the scale is 2 cm = 8 goals, and a bar is 3.5 cm tall, how many goals were scored?",
        options: ["14 goals", "12 goals", "16 goals", "10 goals"],
        correctAnswer: "14 goals",
        explanation: "3.5 cm ÷ 2 cm = 1.75 units, 1.75 × 8 goals = 14 goals. 📊",
        wrongAnswerExplanations: {
            "12 goals": "This would be for 3 cm.",
            "16 goals": "This would be for 4 cm.",
            "10 goals": "This is not the correct calculation."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch9_t3_qm14',
        type: "mcq",
        question: "In a pictograph showing fruits sold, if 🍌 = 7 bananas and a vendor has 🍌🍌🍌½, how many bananas did they sell?",
        options: ["24.5 bananas", "21 bananas", "28 bananas", "17.5 bananas"],
        correctAnswer: "24.5 bananas",
        explanation: "3 full bananas = 21 bananas, plus half a banana = 3.5 bananas, total 24.5 bananas. 📊",
        wrongAnswerExplanations: {
            "21 bananas": "This ignores the half banana.",
            "28 bananas": "This would be for 4 full bananas.",
            "17.5 bananas": "This is not the correct calculation."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch9_t3_qm15',
        type: "mcq",
        question: "A pie chart shows the distribution of a budget. If 'Food' is 45%, 'Rent' is 30%, and 'Other' is 25%, what percentage is spent on non-rent items?",
        options: ["70%", "55%", "75%", "60%"],
        correctAnswer: "70%",
        explanation: "45% (Food) + 25% (Other) = 70%. 📊",
        wrongAnswerExplanations: {
            "55%": "This is not the correct calculation.",
            "75%": "This would include Rent as well.",
            "60%": "This is not the correct calculation."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch9_t3_qm16',
        type: "mcq",
        question: "A bar graph shows the number of students in different classes. If Class 6A has 28 students, Class 6B has 32 students, and Class 6C has 24 students, what is the total number of students?",
        options: ["84 students", "76 students", "88 students", "80 students"],
        correctAnswer: "84 students",
        explanation: "28 + 32 + 24 = 84 students. 📊",
        wrongAnswerExplanations: {
            "76 students": "This is not the correct sum.",
            "88 students": "This is not the correct sum.",
            "80 students": "This is not the correct sum."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch9_t3_qm17',
        type: "mcq",
        question: "In a pictograph showing trees planted, if 🌲 = 6 trees and a group has 🌲🌲🌲½, how many trees did they plant?",
        options: ["21 trees", "18 trees", "24 trees", "15 trees"],
        correctAnswer: "21 trees",
        explanation: "3 full trees = 18 trees, plus half a tree = 3 trees, total 21 trees. 📊",
        wrongAnswerExplanations: {
            "18 trees": "This ignores the half tree.",
            "24 trees": "This would be for 4 full trees.",
            "15 trees": "This is not the correct calculation."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch9_t3_qm18',
        type: "mcq",
        question: "A pie chart shows the distribution of marks in a test. If 'A' is 35%, 'B' is 30%, 'C' is 25%, and 'D' is 10%, what percentage of students got either C or D?",
        options: ["35%", "25%", "40%", "30%"],
        correctAnswer: "35%",
        explanation: "25% (C) + 10% (D) = 35%. 📊",
        wrongAnswerExplanations: {
            "25%": "This is just the percentage for C.",
            "40%": "This is not the correct calculation.",
            "30%": "This is not the correct calculation."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch9_t3_qm19',
        type: "mcq",
        question: "A bar graph shows the number of pages read. If the scale is 1 cm = 8 pages, and a bar is 2.5 cm tall, how many pages were read?",
        options: ["20 pages", "16 pages", "24 pages", "12 pages"],
        correctAnswer: "20 pages",
        explanation: "2.5 cm × 8 pages/cm = 20 pages. 📊",
        wrongAnswerExplanations: {
            "16 pages": "This would be for 2 cm.",
            "24 pages": "This would be for 3 cm.",
            "12 pages": "This is not the correct calculation."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch9_t3_qm20',
        type: "mcq",
        question: "In a pictograph showing books read, if 📖 = 4 books and a student has 📖📖📖½, how many books did they read?",
        options: ["14 books", "12 books", "16 books", "10 books"],
        correctAnswer: "14 books",
        explanation: "3 full books = 12 books, plus half a book = 2 books, total 14 books. 📊",
        wrongAnswerExplanations: {
            "12 books": "This ignores the half book.",
            "16 books": "This would be for 4 full books.",
            "10 books": "This is not the correct calculation."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    }
]; 