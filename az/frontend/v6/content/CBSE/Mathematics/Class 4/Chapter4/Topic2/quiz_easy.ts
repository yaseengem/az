import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch4_t2_qe1',
        type: "mcq",
        question: "How many minutes are there in 1 hour?",
        options: ["30 minutes", "45 minutes", "60 minutes", "100 minutes"],
        correctAnswer: "60 minutes",
        explanation: "There are 60 minutes in 1 hour. This is the standard time unit conversion.",
        wrongAnswerExplanations: {
            "30 minutes": "30 minutes is half an hour, not a full hour.",
            "45 minutes": "45 minutes is three-quarters of an hour, not a full hour.",
            "100 minutes": "There are exactly 60 minutes in an hour, not 100."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch4_t2_qe2',
        type: "mcq",
        question: "How many seconds are there in 1 minute?",
        options: ["30 seconds", "45 seconds", "60 seconds", "100 seconds"],
        correctAnswer: "60 seconds",
        explanation: "There are 60 seconds in 1 minute. This is the standard time measurement.",
        wrongAnswerExplanations: {
            "30 seconds": "30 seconds is half a minute, not a full minute.",
            "45 seconds": "45 seconds is three-quarters of a minute, not a full minute.",
            "100 seconds": "There are exactly 60 seconds in a minute, not 100."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch4_t2_qe3',
        type: "mcq",
        question: "How many hours are there in 1 day?",
        options: ["12 hours", "18 hours", "20 hours", "24 hours"],
        correctAnswer: "24 hours",
        explanation: "A complete day has 24 hours, covering both day and night time.",
        wrongAnswerExplanations: {
            "12 hours": "12 hours is only half a day, not a full day.",
            "18 hours": "A complete day has 24 hours, not 18 hours.",
            "20 hours": "A complete day has 24 hours, not 20 hours."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch4_t2_qe4',
        type: "mcq",
        question: "Which of these shows the correct time in words for 4:30?",
        options: ["Half past four", "Quarter past four", "Quarter to four", "Half to four"],
        correctAnswer: "Half past four",
        explanation: "4:30 is expressed as 'half past four' because it's half an hour past 4 o'clock.",
        wrongAnswerExplanations: {
            "Quarter past four": "Quarter past four means 4:15, which is 15 minutes after 4.",
            "Quarter to four": "Quarter to four means 3:45, which is 15 minutes before 4.",
            "Half to four": "This is incorrect. We say 'half past four' for 4:30."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch4_t2_qe5',
        type: "mcq",
        question: "Which of these shows the correct time in words for 3:15?",
        options: ["Quarter past three", "Half past three", "Quarter to three", "Three quarters past three"],
        correctAnswer: "Quarter past three",
        explanation: "3:15 is expressed as 'quarter past three' because it's one quarter of an hour after 3.",
        wrongAnswerExplanations: {
            "Half past three": "Half past three means 3:30, which is 30 minutes after 3.",
            "Quarter to three": "Quarter to three means 2:45, which is 15 minutes before 3.",
            "Three quarters past three": "This is incorrect. We say 'quarter past three' for 3:15."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch4_t2_qe6',
        type: "mcq",
        question: "Which hand moves the fastest on a clock?",
        options: ["Hour hand", "Minute hand", "Second hand", "All move at the same speed"],
        correctAnswer: "Second hand",
        explanation: "The second hand completes a full circle in 60 seconds, making it the fastest hand on a clock.",
        wrongAnswerExplanations: {
            "Hour hand": "The hour hand is the slowest, completing a full circle in 12 hours.",
            "Minute hand": "The minute hand completes a full circle in 60 minutes, slower than the second hand.",
            "All move at the same speed": "The three hands move at different speeds."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch4_t2_qe7',
        type: "mcq",
        question: "If the time now is 4:30 PM, what will be the time after 2 hours?",
        options: ["2:30 PM", "6:30 PM", "4:30 AM", "7:30 PM"],
        correctAnswer: "6:30 PM",
        explanation: "Adding 2 hours to 4:30 PM gives us 6:30 PM.",
        wrongAnswerExplanations: {
            "2:30 PM": "This is 2 hours before 4:30 PM, not after.",
            "4:30 AM": "This is 12 hours after 4:30 PM, not 2 hours.",
            "7:30 PM": "This is 3 hours after 4:30 PM, not 2 hours."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch4_t2_qe8',
        type: "mcq",
        question: "Which of these shows the correct time in words for 5:45?",
        options: ["Quarter past five", "Quarter to five", "Quarter to six", "Quarter past six"],
        correctAnswer: "Quarter to six",
        explanation: "5:45 is 15 minutes before 6, so we say 'quarter to six'.",
        wrongAnswerExplanations: {
            "Quarter past five": "Quarter past five means 5:15, not 5:45.",
            "Quarter to five": "Quarter to five means 4:45, not 5:45.",
            "Quarter past six": "Quarter past six means 6:15, not 5:45."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch4_t2_qe9',
        type: "mcq",
        question: "How many minutes are there in 2 hours?",
        options: ["60 minutes", "90 minutes", "120 minutes", "180 minutes"],
        correctAnswer: "120 minutes",
        explanation: "2 hours = 2 × 60 minutes = 120 minutes.",
        wrongAnswerExplanations: {
            "60 minutes": "60 minutes is equal to 1 hour, not 2 hours.",
            "90 minutes": "90 minutes is equal to 1 hour and 30 minutes, not 2 hours.",
            "180 minutes": "180 minutes is equal to 3 hours, not 2 hours."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch4_t2_qe10',
        type: "mcq",
        question: "How many seconds are there in 2 minutes?",
        options: ["60 seconds", "90 seconds", "120 seconds", "180 seconds"],
        correctAnswer: "120 seconds",
        explanation: "2 minutes = 2 × 60 seconds = 120 seconds.",
        wrongAnswerExplanations: {
            "60 seconds": "60 seconds is equal to 1 minute, not 2 minutes.",
            "90 seconds": "90 seconds is equal to 1 minute and 30 seconds, not 2 minutes.",
            "180 seconds": "180 seconds is equal to 3 minutes, not 2 minutes."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch4_t2_qe11',
        type: "mcq",
        question: "What time does this clock show? ⌚ (Clock showing 7:00)",
        options: ["7:00", "5:00", "12:35", "10:10"],
        correctAnswer: "7:00",
        explanation: "When the hour hand points to 7 and the minute hand points to 12, the time is 7:00.",
        wrongAnswerExplanations: {
            "5:00": "At 5:00, the hour hand would point to 5, not 7.",
            "12:35": "At 12:35, the hour hand would point to 12 and minute hand would point to 7.",
            "10:10": "At 10:10, the hour hand would point to 10 and minute hand would point to 2."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch4_t2_qe12',
        type: "mcq",
        question: "If school starts at 8:30 AM and ends at 3:30 PM, how many hours do children spend at school?",
        options: ["5 hours", "6 hours", "7 hours", "8 hours"],
        correctAnswer: "7 hours",
        explanation: "From 8:30 AM to 3:30 PM is 7 hours (3:30 - 8:30 = 7:00).",
        wrongAnswerExplanations: {
            "5 hours": "Counting from 8:30 AM to 3:30 PM gives 7 hours, not 5.",
            "6 hours": "Counting from 8:30 AM to 3:30 PM gives 7 hours, not 6.",
            "8 hours": "Counting from 8:30 AM to 3:30 PM gives 7 hours, not 8."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch4_t2_qe13',
        type: "mcq",
        question: "What time will it be 30 minutes after 11:45?",
        options: ["12:15", "11:75", "12:45", "11:15"],
        correctAnswer: "12:15",
        explanation: "Adding 30 minutes to 11:45 gives 11:75, which is written as 12:15.",
        wrongAnswerExplanations: {
            "11:75": "There are only 60 minutes in an hour, so 11:75 is expressed as 12:15.",
            "12:45": "Adding 30 minutes to 11:45 gives 12:15, not 12:45.",
            "11:15": "11:15 is 30 minutes before 11:45, not after."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch4_t2_qe14',
        type: "mcq",
        question: "In a 12-hour clock, what comes after 11:59 AM?",
        options: ["11:60 AM", "12:00 AM", "12:00 PM", "0:00 PM"],
        correctAnswer: "12:00 PM",
        explanation: "After 11:59 AM comes 12:00 PM (noon), not AM.",
        wrongAnswerExplanations: {
            "11:60 AM": "There are only 60 minutes in an hour, so 11:60 doesn't exist.",
            "12:00 AM": "12:00 AM is midnight, not what follows 11:59 AM.",
            "0:00 PM": "We don't use 0:00 in 12-hour format; it would be 12:00 PM."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch4_t2_qe15',
        type: "mcq",
        question: "What comes first in a day?",
        options: ["12:00 AM", "12:00 PM", "1:00 AM", "1:00 PM"],
        correctAnswer: "12:00 AM",
        explanation: "12:00 AM is midnight, the beginning of a new day.",
        wrongAnswerExplanations: {
            "12:00 PM": "12:00 PM is noon, which comes later in the day than midnight.",
            "1:00 AM": "1:00 AM comes after 12:00 AM (midnight).",
            "1:00 PM": "1:00 PM is in the afternoon, many hours after the day begins."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch4_t2_qe16',
        type: "mcq",
        question: "Which of these would NOT be a correct time?",
        options: ["2:30 PM", "14:30 AM", "2:30 AM", "14:30"],
        correctAnswer: "14:30 AM",
        explanation: "14:30 AM is incorrect because the 24-hour format doesn't use AM/PM.",
        wrongAnswerExplanations: {
            "2:30 PM": "This is correct in 12-hour format.",
            "2:30 AM": "This is correct in 12-hour format.",
            "14:30": "This is correct in 24-hour format (equal to 2:30 PM)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch4_t2_qe17',
        type: "mcq",
        question: "How many minutes is a quarter of an hour?",
        options: ["10 minutes", "15 minutes", "20 minutes", "25 minutes"],
        correctAnswer: "15 minutes",
        explanation: "A quarter of an hour is one-fourth of 60 minutes, which is 15 minutes.",
        wrongAnswerExplanations: {
            "10 minutes": "A quarter of an hour is 15 minutes, not 10 minutes.",
            "20 minutes": "A quarter of an hour is 15 minutes, not 20 minutes.",
            "25 minutes": "A quarter of an hour is 15 minutes, not 25 minutes."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch4_t2_qe18',
        type: "mcq",
        question: "How many hours are there in half a day?",
        options: ["6 hours", "8 hours", "12 hours", "24 hours"],
        correctAnswer: "12 hours",
        explanation: "Half a day is 12 hours since a full day has 24 hours.",
        wrongAnswerExplanations: {
            "6 hours": "Half a day is 12 hours, not 6 hours.",
            "8 hours": "Half a day is 12 hours, not 8 hours.",
            "24 hours": "24 hours is a full day, not half a day."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch4_t2_qe19',
        type: "mcq",
        question: "What time will it be 45 minutes after 3:30?",
        options: ["3:75", "4:15", "3:85", "4:05"],
        correctAnswer: "4:15",
        explanation: "Adding 45 minutes to 3:30 gives 3:75, which is written as 4:15.",
        wrongAnswerExplanations: {
            "3:75": "There are only 60 minutes in an hour, so 3:75 is expressed as 4:15.",
            "3:85": "This is not a valid time format.",
            "4:05": "Adding 45 minutes to 3:30 gives 4:15, not 4:05."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch4_t2_qe20',
        type: "mcq",
        question: "What is another way to say 1:00 PM?",
        options: ["One in the morning", "One o'clock in the morning", "One in the afternoon", "Thirteen hundred hours"],
        correctAnswer: "One in the afternoon",
        explanation: "1:00 PM is one o'clock in the afternoon.",
        wrongAnswerExplanations: {
            "One in the morning": "1:00 AM is one in the morning, not 1:00 PM.",
            "One o'clock in the morning": "1:00 AM is one o'clock in the morning, not 1:00 PM.",
            "Thirteen hundred hours": "13:00 is military time for 1:00 PM, but is not commonly used in daily life."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];