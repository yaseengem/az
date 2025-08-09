import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch17_t3_qe1',
        type: "mcq",
        question: "How many minutes are in 1 hour?",
        options: ["30", "45", "60", "90"],
        correctAnswer: "60",
        explanation: "1 hour = 60 minutes. This is a basic time conversion. ⏰",
        wrongAnswerExplanations: {
            "30": "This is half an hour, not a full hour.",
            "45": "This is three-quarters of an hour.",
            "90": "This is 1 hour and 30 minutes."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t3_qe2',
        type: "mcq",
        question: "How many days are in a week?",
        options: ["5", "6", "7", "8"],
        correctAnswer: "7",
        explanation: "There are 7 days in a week: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, and Sunday. 📅",
        wrongAnswerExplanations: {
            "5": "This is the number of weekdays, not all days in a week.",
            "6": "This is incorrect. A week has 7 days.",
            "8": "This is more than the number of days in a week."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t3_qe3',
        type: "mcq",
        question: "If a class starts at 9:00 AM and ends at 10:30 AM, how long is the class?",
        options: ["1 hour", "1 hour 15 minutes", "1 hour 30 minutes", "2 hours"],
        correctAnswer: "1 hour 30 minutes",
        explanation: "From 9:00 AM to 10:30 AM is 1 hour and 30 minutes. ⏱️",
        wrongAnswerExplanations: {
            "1 hour": "This is less than the actual duration.",
            "1 hour 15 minutes": "This is not the correct duration.",
            "2 hours": "This is more than the actual duration."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t3_qe4',
        type: "mcq",
        question: "How many months are in a year?",
        options: ["10", "11", "12", "13"],
        correctAnswer: "12",
        explanation: "There are 12 months in a year: January, February, March, April, May, June, July, August, September, October, November, and December. 📅",
        wrongAnswerExplanations: {
            "10": "This is less than the number of months in a year.",
            "11": "This is less than the number of months in a year.",
            "13": "This is more than the number of months in a year."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t3_qe5',
        type: "mcq",
        question: "If you start studying at 4:00 PM and study for 45 minutes, what time will you finish?",
        options: ["4:30 PM", "4:45 PM", "5:00 PM", "5:15 PM"],
        correctAnswer: "4:45 PM",
        explanation: "Starting at 4:00 PM + 45 minutes = 4:45 PM. ⏰",
        wrongAnswerExplanations: {
            "4:30 PM": "This is only 30 minutes after starting.",
            "5:00 PM": "This is 1 hour after starting.",
            "5:15 PM": "This is 1 hour and 15 minutes after starting."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t3_qe6',
        type: "mcq",
        question: "How many hours are in a day?",
        options: ["12", "20", "24", "30"],
        correctAnswer: "24",
        explanation: "There are 24 hours in a day, from 12:00 AM to 11:59 PM. ⏰",
        wrongAnswerExplanations: {
            "12": "This is half a day.",
            "20": "This is less than a full day.",
            "30": "This is more than a full day."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t3_qe7',
        type: "mcq",
        question: "If a movie starts at 2:15 PM and is 1 hour and 45 minutes long, what time will it end?",
        options: ["3:30 PM", "3:45 PM", "4:00 PM", "4:15 PM"],
        correctAnswer: "4:00 PM",
        explanation: "2:15 PM + 1 hour and 45 minutes = 4:00 PM. 🎬",
        wrongAnswerExplanations: {
            "3:30 PM": "This is only 1 hour and 15 minutes after starting.",
            "3:45 PM": "This is only 1 hour and 30 minutes after starting.",
            "4:15 PM": "This is 2 hours after starting."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t3_qe8',
        type: "mcq",
        question: "How many seconds are in 1 minute?",
        options: ["30", "45", "60", "90"],
        correctAnswer: "60",
        explanation: "1 minute = 60 seconds. This is a basic time conversion. ⏱️",
        wrongAnswerExplanations: {
            "30": "This is half a minute.",
            "45": "This is three-quarters of a minute.",
            "90": "This is 1 minute and 30 seconds."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t3_qe9',
        type: "mcq",
        question: "If you have a 30-minute break between two 45-minute classes, how much total time will you spend?",
        options: ["1 hour", "1 hour 15 minutes", "1 hour 30 minutes", "2 hours"],
        correctAnswer: "2 hours",
        explanation: "45 minutes + 30 minutes + 45 minutes = 120 minutes = 2 hours. ⏰",
        wrongAnswerExplanations: {
            "1 hour": "This is less than the total time.",
            "1 hour 15 minutes": "This is less than the total time.",
            "1 hour 30 minutes": "This is less than the total time."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t3_qe10',
        type: "mcq",
        question: "How many days are in February in a non-leap year?",
        options: ["28", "29", "30", "31"],
        correctAnswer: "28",
        explanation: "February has 28 days in a non-leap year and 29 days in a leap year. 📅",
        wrongAnswerExplanations: {
            "29": "This is for a leap year.",
            "30": "This is incorrect for February.",
            "31": "This is incorrect for February."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t3_qe11',
        type: "mcq",
        question: "If you start a task at 10:00 AM and it takes 2 hours and 30 minutes, what time will you finish?",
        options: ["12:00 PM", "12:15 PM", "12:30 PM", "12:45 PM"],
        correctAnswer: "12:30 PM",
        explanation: "10:00 AM + 2 hours and 30 minutes = 12:30 PM. ⏰",
        wrongAnswerExplanations: {
            "12:00 PM": "This is only 2 hours after starting.",
            "12:15 PM": "This is 2 hours and 15 minutes after starting.",
            "12:45 PM": "This is 2 hours and 45 minutes after starting."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t3_qe12',
        type: "mcq",
        question: "How many hours are in half a day?",
        options: ["6", "8", "12", "16"],
        correctAnswer: "12",
        explanation: "Half of 24 hours is 12 hours. ⏰",
        wrongAnswerExplanations: {
            "6": "This is a quarter of a day.",
            "8": "This is one-third of a day.",
            "16": "This is more than half a day."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t3_qe13',
        type: "mcq",
        question: "If a class starts at 1:15 PM and ends at 2:45 PM, how long is the class?",
        options: ["1 hour", "1 hour 15 minutes", "1 hour 30 minutes", "2 hours"],
        correctAnswer: "1 hour 30 minutes",
        explanation: "From 1:15 PM to 2:45 PM is 1 hour and 30 minutes. ⏱️",
        wrongAnswerExplanations: {
            "1 hour": "This is less than the actual duration.",
            "1 hour 15 minutes": "This is not the correct duration.",
            "2 hours": "This is more than the actual duration."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t3_qe14',
        type: "mcq",
        question: "How many minutes are in 2 hours?",
        options: ["60", "90", "120", "150"],
        correctAnswer: "120",
        explanation: "2 hours = 2 × 60 minutes = 120 minutes. ⏰",
        wrongAnswerExplanations: {
            "60": "This is for 1 hour.",
            "90": "This is for 1 hour and 30 minutes.",
            "150": "This is for 2 hours and 30 minutes."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t3_qe15',
        type: "mcq",
        question: "If you start reading at 3:30 PM and read for 1 hour and 15 minutes, what time will you finish?",
        options: ["4:30 PM", "4:45 PM", "5:00 PM", "5:15 PM"],
        correctAnswer: "4:45 PM",
        explanation: "3:30 PM + 1 hour and 15 minutes = 4:45 PM. 📚",
        wrongAnswerExplanations: {
            "4:30 PM": "This is only 1 hour after starting.",
            "5:00 PM": "This is 1 hour and 30 minutes after starting.",
            "5:15 PM": "This is 1 hour and 45 minutes after starting."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t3_qe16',
        type: "mcq",
        question: "How many days are in April?",
        options: ["28", "29", "30", "31"],
        correctAnswer: "30",
        explanation: "April has 30 days. Remember: 'Thirty days hath September, April, June, and November.' 📅",
        wrongAnswerExplanations: {
            "28": "This is for February in a non-leap year.",
            "29": "This is for February in a leap year.",
            "31": "This is for months like January, March, May, etc."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t3_qe17',
        type: "mcq",
        question: "If a TV show starts at 7:00 PM and is 45 minutes long, what time will it end?",
        options: ["7:30 PM", "7:45 PM", "8:00 PM", "8:15 PM"],
        correctAnswer: "7:45 PM",
        explanation: "7:00 PM + 45 minutes = 7:45 PM. 📺",
        wrongAnswerExplanations: {
            "7:30 PM": "This is only 30 minutes after starting.",
            "8:00 PM": "This is 1 hour after starting.",
            "8:15 PM": "This is 1 hour and 15 minutes after starting."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t3_qe18',
        type: "mcq",
        question: "How many hours are in 3 days?",
        options: ["48", "60", "72", "84"],
        correctAnswer: "72",
        explanation: "3 days = 3 × 24 hours = 72 hours. ⏰",
        wrongAnswerExplanations: {
            "48": "This is for 2 days.",
            "60": "This is for 2.5 days.",
            "84": "This is for 3.5 days."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t3_qe19',
        type: "mcq",
        question: "If you start a game at 5:45 PM and play for 1 hour and 30 minutes, what time will you finish?",
        options: ["6:45 PM", "7:00 PM", "7:15 PM", "7:30 PM"],
        correctAnswer: "7:15 PM",
        explanation: "5:45 PM + 1 hour and 30 minutes = 7:15 PM. 🎮",
        wrongAnswerExplanations: {
            "6:45 PM": "This is only 1 hour after starting.",
            "7:00 PM": "This is 1 hour and 15 minutes after starting.",
            "7:30 PM": "This is 1 hour and 45 minutes after starting."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t3_qe20',
        type: "mcq",
        question: "How many minutes are in 3 hours and 15 minutes?",
        options: ["165", "180", "195", "210"],
        correctAnswer: "195",
        explanation: "3 hours = 180 minutes + 15 minutes = 195 minutes. ⏰",
        wrongAnswerExplanations: {
            "165": "This is 2 hours and 45 minutes.",
            "180": "This is 3 hours without the extra 15 minutes.",
            "210": "This is 3 hours and 30 minutes."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 