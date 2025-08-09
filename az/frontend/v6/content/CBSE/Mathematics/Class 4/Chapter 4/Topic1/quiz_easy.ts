import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch4_t1_qe1',
        type: "mcq",
        question: "What do the hour and minute hands on an analog clock tell us?",
        options: [
            "The date and month",
            "The time of day",
            "The weather outside",
            "The temperature"
        ],
        correctAnswer: "The time of day",
        explanation: "Hour and minute hands show the current time by pointing to numbers on the clock face. ⏰",
        wrongAnswerExplanations: {
            "The date and month": "Clocks don't show dates or months, only time.",
            "The weather outside": "Clocks can't tell us about weather conditions.",
            "The temperature": "Clocks don't measure temperature."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch4_t1_qe2',
        type: "mcq",
        question: "Which hand is the shortest on an analog clock?",
        options: [
            "Hour hand",
            "Minute hand",
            "Second hand",
            "All hands are the same length"
        ],
        correctAnswer: "Hour hand",
        explanation: "The hour hand is the shortest hand on an analog clock. It moves the slowest too! 🕓",
        wrongAnswerExplanations: {
            "Minute hand": "The minute hand is longer than the hour hand.",
            "Second hand": "The second hand is usually the thinnest, not the shortest.",
            "All hands are the same length": "Clock hands have different lengths to help tell them apart."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch4_t1_qe3',
        type: "mcq",
        question: "How many numbers are there on a standard analog clock face?",
        options: [
            "10",
            "12",
            "24",
            "60"
        ],
        correctAnswer: "12",
        explanation: "A standard analog clock has 12 numbers (1-12) arranged in a circle around the face. 🕐",
        wrongAnswerExplanations: {
            "10": "Clocks have 12 numbers, not 10.",
            "24": "24-hour time is shown on digital clocks, not standard analog ones.",
            "60": "There are 60 minutes in an hour, but only 12 numbers on a clock face."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch4_t1_qe4',
        type: "mcq",
        question: "If the hour hand points to 3 and the minute hand points to 12, what time is it?",
        options: [
            "12:3",
            "3:00",
            "3:12",
            "12:15"
        ],
        correctAnswer: "3:00",
        explanation: "When the minute hand points to 12, it means 0 minutes past the hour shown by the hour hand. 🕒",
        wrongAnswerExplanations: {
            "12:3": "This is incorrect format. Time is read as hours:minutes.",
            "3:12": "When minute hand is at 12, it's the start of the hour (zero minutes).",
            "12:15": "This would be when the hour hand is at 12 and minute hand at 3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch4_t1_qe5',
        type: "mcq",
        question: "When the minute hand makes one complete rotation around the clock, how much time has passed?",
        options: [
            "1 minute",
            "12 minutes",
            "1 hour",
            "12 hours"
        ],
        correctAnswer: "1 hour",
        explanation: "When the minute hand goes all the way around the clock once, 60 minutes or 1 hour has passed. ⏱️",
        wrongAnswerExplanations: {
            "1 minute": "It takes 1 minute for the minute hand to move from one minute mark to the next.",
            "12 minutes": "This is not correct. A complete rotation is 60 minutes.",
            "12 hours": "The hour hand takes 12 hours to make a complete rotation, not the minute hand."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch4_t1_qe6',
        type: "mcq",
        question: "What time is shown when the hour hand is between 4 and 5, and the minute hand points to 6?",
        options: [
            "4:30",
            "4:06",
            "5:30",
            "6:04"
        ],
        correctAnswer: "4:30",
        explanation: "When the minute hand points to 6, it's 30 minutes past the hour. The hour hand is at 4, so it's 4:30. 🕟",
        wrongAnswerExplanations: {
            "4:06": "When minute hand points to 6, it's 30 minutes past, not 6 minutes.",
            "5:30": "The hour hand is just past 4, not at 5 yet.",
            "6:04": "This reads the hands backward. Hour hand shows hours, minute hand shows minutes."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch4_t1_qe7',
        type: "mcq",
        question: "When it's quarter past 7, where does the minute hand point?",
        options: [
            "3",
            "4",
            "7",
            "15"
        ],
        correctAnswer: "3",
        explanation: "A quarter past means 15 minutes after the hour. On a clock, the minute hand points to 3 at quarter past. 🕢",
        wrongAnswerExplanations: {
            "4": "When the minute hand points to 4, it's 20 minutes past the hour.",
            "7": "This is where the hour hand points, not the minute hand.",
            "15": "There is no 15 on a standard clock face, which only has numbers 1-12."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch4_t1_qe8',
        type: "mcq",
        question: "What does it mean when we say 'half past 8'?",
        options: [
            "8:15",
            "8:30",
            "8:45",
            "8:50"
        ],
        correctAnswer: "8:30",
        explanation: "Half past means 30 minutes after the hour. So half past 8 is 8:30. ⏰",
        wrongAnswerExplanations: {
            "8:15": "This is quarter past 8, not half past.",
            "8:45": "This is quarter to 9, not half past 8.",
            "8:50": "This is 10 minutes to 9, not half past 8."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch4_t1_qe9',
        type: "mcq",
        question: "If it's quarter to 6, what time is it in digital format?",
        options: [
            "5:45",
            "6:15",
            "5:15",
            "6:45"
        ],
        correctAnswer: "5:45",
        explanation: "Quarter to 6 means 15 minutes before 6, which is 5:45. 🕡",
        wrongAnswerExplanations: {
            "6:15": "This is quarter past 6, not quarter to 6.",
            "5:15": "This is quarter past 5, not quarter to 6.",
            "6:45": "This is quarter to 7, not quarter to 6."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch4_t1_qe10',
        type: "mcq",
        question: "How many minutes does the minute hand take to move from 12 to 3?",
        options: [
            "3 minutes",
            "15 minutes",
            "30 minutes",
            "45 minutes"
        ],
        correctAnswer: "15 minutes",
        explanation: "The minute hand takes 15 minutes to move from 12 to 3 (a quarter of the way around the clock). ⏱️",
        wrongAnswerExplanations: {
            "3 minutes": "The number 3 on the clock represents 15 minutes, not 3 minutes.",
            "30 minutes": "Moving from 12 to 6 takes 30 minutes, not 12 to 3.",
            "45 minutes": "Moving from 12 to 9 takes 45 minutes, not 12 to 3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch4_t1_qe11',
        type: "mcq",
        question: "Which of these times shows 7:30?",
        options: [
            "Half past 6",
            "Half past 7",
            "Quarter past 7",
            "Quarter to 8"
        ],
        correctAnswer: "Half past 7",
        explanation: "7:30 is the same as half past 7, meaning 30 minutes after 7 o'clock. 🕢",
        wrongAnswerExplanations: {
            "Half past 6": "Half past 6 is 6:30, not 7:30.",
            "Quarter past 7": "Quarter past 7 is 7:15, not 7:30.",
            "Quarter to 8": "Quarter to 8 is 7:45, not 7:30."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch4_t1_qe12',
        type: "mcq",
        question: "When both hands point to 12, what time is it?",
        options: [
            "Midnight or Noon",
            "6:00",
            "3:00",
            "9:00"
        ],
        correctAnswer: "Midnight or Noon",
        explanation: "When both hands point to 12, it's either 12:00 midnight or 12:00 noon. 🕛",
        wrongAnswerExplanations: {
            "6:00": "At 6:00, the hour hand points to 6 and minute hand to 12.",
            "3:00": "At 3:00, the hour hand points to 3 and minute hand to 12.",
            "9:00": "At 9:00, the hour hand points to 9 and minute hand to 12."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch4_t1_qe13',
        type: "mcq",
        question: "What time is shown when the hour hand is between 1 and 2, and the minute hand points to 9?",
        options: [
            "1:45",
            "9:15",
            "1:09",
            "2:45"
        ],
        correctAnswer: "1:45",
        explanation: "When the minute hand points to 9, it's 45 minutes past the hour. The hour hand is past 1, so it's 1:45. 🕜",
        wrongAnswerExplanations: {
            "9:15": "This misinterprets the hands. Minute hand at 9 means 45 minutes, not 9:15.",
            "1:09": "When minute hand points to 9, it's 45 minutes past, not 9 minutes.",
            "2:45": "The hour hand is still closer to 1 than to 2, so it's 1:45."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch4_t1_qe14',
        type: "mcq",
        question: "How many times in a day does the hour hand make a complete rotation on an analog clock?",
        options: [
            "1 time",
            "2 times",
            "12 times",
            "24 times"
        ],
        correctAnswer: "2 times",
        explanation: "The hour hand makes a complete rotation twice a day - once from midnight to noon, and once from noon to midnight. 🕰️",
        wrongAnswerExplanations: {
            "1 time": "It takes 12 hours for one rotation, so in 24 hours there are 2 rotations.",
            "12 times": "The hour hand takes 12 hours for one rotation, not 1 hour.",
            "24 times": "This would mean 1 rotation per hour, which is how the minute hand moves, not the hour hand."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch4_t1_qe15',
        type: "mcq",
        question: "Which of these is another way to say 5:45?",
        options: [
            "Quarter past 5",
            "Quarter to 5",
            "Quarter to 6",
            "Half past 5"
        ],
        correctAnswer: "Quarter to 6",
        explanation: "5:45 means 45 minutes past 5, which is also 15 minutes to 6, or quarter to 6. 🕧",
        wrongAnswerExplanations: {
            "Quarter past 5": "Quarter past 5 is 5:15, not 5:45.",
            "Quarter to 5": "Quarter to 5 is 4:45, not 5:45.",
            "Half past 5": "Half past 5 is 5:30, not 5:45."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch4_t1_qe16',
        type: "mcq",
        question: "If school starts at 8:30 and ends at 3:15, how many hours and minutes are spent in school?",
        options: [
            "5 hours 15 minutes",
            "6 hours 15 minutes",
            "6 hours 45 minutes",
            "7 hours 15 minutes"
        ],
        correctAnswer: "6 hours 45 minutes",
        explanation: "From 8:30 to 3:15 is 6 hours and 45 minutes (8:30 to 3:00 is 6 hours 30 minutes, plus 15 more minutes). ⏱️",
        wrongAnswerExplanations: {
            "5 hours 15 minutes": "This is too short. Count the hours between 8:30 and 3:15.",
            "6 hours 15 minutes": "This misses 30 minutes in the calculation.",
            "7 hours 15 minutes": "This counts an extra 30 minutes that weren't spent in school."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch4_t1_qe17',
        type: "mcq",
        question: "What is special about where the minute hand points at 9:15?",
        options: [
            "It points to 9",
            "It points to 3",
            "It points to 15",
            "It points to 45"
        ],
        correctAnswer: "It points to 3",
        explanation: "At 9:15, the minute hand points to 3 on the clock, which represents 15 minutes. 🕘",
        wrongAnswerExplanations: {
            "It points to 9": "The hour hand points near 9, but the minute hand points to 3.",
            "It points to 15": "There is no 15 on a standard clock face; the minute hand points to 3.",
            "It points to 45": "At 9:45, the minute hand would point to 9, not at 9:15."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch4_t1_qe18',
        type: "mcq",
        question: "How many degrees does the hour hand move in 1 hour?",
        options: [
            "15 degrees",
            "30 degrees",
            "60 degrees",
            "90 degrees"
        ],
        correctAnswer: "30 degrees",
        explanation: "The hour hand moves 30 degrees in 1 hour (360 degrees ÷ 12 hours = 30 degrees per hour). 📐",
        wrongAnswerExplanations: {
            "15 degrees": "The hour hand moves 30 degrees in 1 hour, not 15 degrees.",
            "60 degrees": "The minute hand moves 360 degrees in 1 hour; the hour hand moves more slowly.",
            "90 degrees": "The hour hand would take 3 hours to move 90 degrees."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch4_t1_qe19',
        type: "mcq",
        question: "Which of these times is NOT correctly expressed?",
        options: [
            "Half past 3 (3:30)",
            "Quarter past 7 (7:15)",
            "Quarter to 9 (8:45)",
            "Half to 6 (5:30)"
        ],
        correctAnswer: "Half to 6 (5:30)",
        explanation: "We say 'half past 5' for 5:30, not 'half to 6'. 'Half to' is not a correct time expression. ⏰",
        wrongAnswerExplanations: {
            "Half past 3 (3:30)": "This is correctly expressed.",
            "Quarter past 7 (7:15)": "This is correctly expressed.",
            "Quarter to 9 (8:45)": "This is correctly expressed."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch4_t1_qe20',
        type: "mcq",
        question: "If a movie starts at 3:15 and ends at 5:00, how long is the movie?",
        options: [
            "1 hour 15 minutes",
            "1 hour 45 minutes",
            "2 hours",
            "2 hours 15 minutes"
        ],
        correctAnswer: "1 hour 45 minutes",
        explanation: "From 3:15 to 5:00 is 1 hour and 45 minutes (3:15 to 4:15 is 1 hour, plus 45 more minutes to 5:00). 🎬",
        wrongAnswerExplanations: {
            "1 hour 15 minutes": "This is too short. Count from 3:15 to 5:00 carefully.",
            "2 hours": "This would be from 3:00 to 5:00, but the movie starts at 3:15.",
            "2 hours 15 minutes": "This is too long. Count from 3:15 to 5:00 carefully."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];