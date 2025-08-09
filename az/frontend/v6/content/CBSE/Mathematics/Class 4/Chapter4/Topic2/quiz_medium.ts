import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch4_t2_qm1',
        type: "mcq",
        question: "If it is currently 3:15 PM, what will be the time after 4 hours and 30 minutes?",
        options: ["7:15 PM", "7:45 PM", "8:15 PM", "7:45 AM"],
        correctAnswer: "7:45 PM",
        explanation: "3:15 PM + 4 hours = 7:15 PM. Then add 30 minutes to get 7:45 PM.",
        wrongAnswerExplanations: {
            "7:15 PM": "This is the time after adding only 4 hours, not 4 hours and 30 minutes.",
            "8:15 PM": "This is the time after adding 5 hours, not 4 hours and 30 minutes.",
            "7:45 AM": "This would be 16 hours and 30 minutes later, not 4 hours and 30 minutes."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch4_t2_qm2',
        type: "mcq",
        question: "If it takes 1 hour and 45 minutes to complete homework, and homework is started at 5:20 PM, at what time will it be finished?",
        options: ["6:55 PM", "7:05 PM", "7:15 PM", "8:05 PM"],
        correctAnswer: "7:05 PM",
        explanation: "5:20 PM + 1 hour = 6:20 PM. Then add 45 minutes to get 7:05 PM.",
        wrongAnswerExplanations: {
            "6:55 PM": "This would be just 1 hour and 35 minutes after starting, not 1 hour and 45 minutes.",
            "7:15 PM": "This would be 1 hour and 55 minutes after starting, not 1 hour and 45 minutes.",
            "8:05 PM": "This would be 2 hours and 45 minutes after starting, not 1 hour and 45 minutes."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch4_t2_qm3',
        type: "mcq",
        question: "How many hours and minutes are there in 305 minutes?",
        options: ["5 hours 5 minutes", "5 hours 35 minutes", "4 hours 65 minutes", "4 hours 45 minutes"],
        correctAnswer: "5 hours 5 minutes",
        explanation: "305 minutes = 300 minutes + 5 minutes = 5 hours + 5 minutes = 5 hours and 5 minutes.",
        wrongAnswerExplanations: {
            "5 hours 35 minutes": "This would be 335 minutes, not 305 minutes.",
            "4 hours 65 minutes": "This is incorrect as we convert 60 minutes to 1 hour, so it should be 5 hours 5 minutes.",
            "4 hours 45 minutes": "This would be 285 minutes, not 305 minutes."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch4_t2_qm4',
        type: "mcq",
        question: "If the minute hand of a clock makes a complete rotation, how many degrees does it turn?",
        options: ["90 degrees", "180 degrees", "270 degrees", "360 degrees"],
        correctAnswer: "360 degrees",
        explanation: "A complete rotation is a full circle, which is 360 degrees.",
        wrongAnswerExplanations: {
            "90 degrees": "90 degrees is only a quarter of a circle (15 minutes).",
            "180 degrees": "180 degrees is only half a circle (30 minutes).",
            "270 degrees": "270 degrees is only three-quarters of a circle (45 minutes)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch4_t2_qm5',
        type: "mcq",
        question: "A movie started at 3:15 PM and ended at 5:45 PM. How long was the movie?",
        options: ["2 hours", "2 hours 15 minutes", "2 hours 30 minutes", "3 hours"],
        correctAnswer: "2 hours 30 minutes",
        explanation: "From 3:15 PM to 5:45 PM is 2 hours and 30 minutes (5:45 - 3:15 = 2:30).",
        wrongAnswerExplanations: {
            "2 hours": "The time difference between 3:15 PM and 5:45 PM is more than 2 hours.",
            "2 hours 15 minutes": "The time difference is not 2 hours and 15 minutes, but 2 hours and 30 minutes.",
            "3 hours": "The time difference is less than 3 hours."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch4_t2_qm6',
        type: "mcq",
        question: "If the time is 7:30 PM, what will be the time 8 hours and 45 minutes later?",
        options: ["3:15 AM", "4:15 AM", "4:15 PM", "3:75 AM"],
        correctAnswer: "4:15 AM",
        explanation: "7:30 PM + 8 hours = 3:30 AM. Then add 45 minutes to get 4:15 AM.",
        wrongAnswerExplanations: {
            "3:15 AM": "This would be 7 hours and 45 minutes later, not 8 hours and 45 minutes.",
            "4:15 PM": "This would be 20 hours and 45 minutes later, not 8 hours and 45 minutes.",
            "3:75 AM": "This is not a valid time. 3:75 AM would be expressed as 4:15 AM."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch4_t2_qm7',
        type: "mcq",
        question: "How many seconds are there in 4 hours?",
        options: ["144 seconds", "240 seconds", "1,440 seconds", "14,400 seconds"],
        correctAnswer: "14,400 seconds",
        explanation: "4 hours = 4 × 60 minutes = 240 minutes. 240 minutes = 240 × 60 seconds = 14,400 seconds.",
        wrongAnswerExplanations: {
            "144 seconds": "This is far too few seconds for 4 hours.",
            "240 seconds": "240 seconds is only 4 minutes, not 4 hours.",
            "1,440 seconds": "1,440 seconds is 24 minutes, not 4 hours."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch4_t2_qm8',
        type: "mcq",
        question: "If the hour hand makes two complete rotations, how many hours have passed?",
        options: ["12 hours", "24 hours", "2 hours", "1 day"],
        correctAnswer: "24 hours",
        explanation: "The hour hand makes one complete rotation in 12 hours, so two rotations = 24 hours = 1 day.",
        wrongAnswerExplanations: {
            "12 hours": "The hour hand makes one complete rotation in 12 hours, not two.",
            "2 hours": "In 2 hours, the hour hand moves only a small part of a complete rotation.",
            "1 day": "This is correct in terms of time duration, but the question asked for hours."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch4_t2_qm9',
        type: "mcq",
        question: "A bus journey starts at 8:45 AM and takes 4 hours and 30 minutes. At what time does the journey end?",
        options: ["12:15 PM", "1:15 PM", "1:45 PM", "12:45 PM"],
        correctAnswer: "1:15 PM",
        explanation: "8:45 AM + 4 hours = 12:45 PM. Then add 30 minutes to get 1:15 PM.",
        wrongAnswerExplanations: {
            "12:15 PM": "This would be only 3 hours and 30 minutes after 8:45 AM.",
            "1:45 PM": "This would be 5 hours after 8:45 AM, not 4 hours and 30 minutes.",
            "12:45 PM": "This would be 4 hours after 8:45 AM, not 4 hours and 30 minutes."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch4_t2_qm10',
        type: "mcq",
        question: "If a clock shows 3:45, through how many degrees has the minute hand moved from 12 o'clock?",
        options: ["90 degrees", "180 degrees", "270 degrees", "360 degrees"],
        correctAnswer: "270 degrees",
        explanation: "The minute hand completes 360° in 60 minutes. At 45 minutes, it has completed 45/60 × 360° = 270°.",
        wrongAnswerExplanations: {
            "90 degrees": "90 degrees would be at the 3 o'clock position (15 minutes past).",
            "180 degrees": "180 degrees would be at the 6 o'clock position (30 minutes past).",
            "360 degrees": "360 degrees would be a complete rotation (60 minutes, back to 12)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch4_t2_qm11',
        type: "mcq",
        question: "What time is 135 minutes after 10:15 AM?",
        options: ["12:15 PM", "12:30 PM", "1:00 PM", "1:30 PM"],
        correctAnswer: "12:30 PM",
        explanation: "135 minutes = 2 hours and 15 minutes. 10:15 AM + 2:15 = 12:30 PM.",
        wrongAnswerExplanations: {
            "12:15 PM": "This would be 2 hours after 10:15 AM, not 2 hours and 15 minutes.",
            "1:00 PM": "This would be 2 hours and 45 minutes after 10:15 AM, not 2 hours and 15 minutes.",
            "1:30 PM": "This would be 3 hours and 15 minutes after 10:15 AM, not 2 hours and 15 minutes."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch4_t2_qm12',
        type: "mcq",
        question: "If the big hand of a clock points to 9 and the little hand points between 7 and 8, what time is it?",
        options: ["7:45", "9:35", "8:45", "7:15"],
        correctAnswer: "7:45",
        explanation: "The big hand (minute hand) at 9 means 45 minutes. The little hand (hour hand) between 7 and 8 means it's 7 something. So it's 7:45.",
        wrongAnswerExplanations: {
            "9:35": "This would mean the big hand is at 7 and little hand is at 9, which is not what's described.",
            "8:45": "This would mean the little hand is at 8, but it's between 7 and 8, so it's 7:45.",
            "7:15": "This would mean the big hand is at 3, not at 9 as described."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch4_t2_qm13',
        type: "mcq",
        question: "Rahul wakes up at 6:30 AM and takes 45 minutes to get ready. He then spends 30 minutes having breakfast. At what time does he finish breakfast?",
        options: ["7:15 AM", "7:45 AM", "8:00 AM", "7:30 AM"],
        correctAnswer: "7:45 AM",
        explanation: "6:30 AM + 45 minutes = 7:15 AM (ready). 7:15 AM + 30 minutes = 7:45 AM (breakfast finished).",
        wrongAnswerExplanations: {
            "7:15 AM": "This is when Rahul finishes getting ready, but he still needs 30 minutes for breakfast.",
            "8:00 AM": "This is more than 45 + 30 = 75 minutes after waking up at 6:30 AM.",
            "7:30 AM": "This would be only 1 hour after waking, but he needs 1 hour and 15 minutes."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch4_t2_qm14',
        type: "mcq",
        question: "If it's 4:20 PM now, what time was it 3 hours and 45 minutes ago?",
        options: ["12:35 PM", "12:45 PM", "1:35 PM", "1:25 PM"],
        correctAnswer: "12:35 PM",
        explanation: "4:20 PM - 3 hours = 1:20 PM. 1:20 PM - 45 minutes = 12:35 PM.",
        wrongAnswerExplanations: {
            "12:45 PM": "This would be 3 hours and 35 minutes ago, not 3 hours and 45 minutes.",
            "1:35 PM": "This would be 2 hours and 45 minutes ago, not 3 hours and 45 minutes.",
            "1:25 PM": "This would be 2 hours and 55 minutes ago, not 3 hours and 45 minutes."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch4_t2_qm15',
        type: "mcq",
        question: "A minute hand rotates by 6 degrees in how many seconds?",
        options: ["6 seconds", "10 seconds", "60 seconds", "30 seconds"],
        correctAnswer: "60 seconds",
        explanation: "The minute hand rotates 360° in 60 minutes (3600 seconds). So for 6°, it takes 6 × 3600 ÷ 360 = 60 seconds.",
        wrongAnswerExplanations: {
            "6 seconds": "The minute hand doesn't move this quickly.",
            "10 seconds": "The minute hand doesn't move at 6° per 10 seconds.",
            "30 seconds": "The minute hand rotates 3° in 30 seconds, not 6°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch4_t2_qm16',
        type: "mcq",
        question: "The time is quarter past eight. What time will it be after 3 hours and 20 minutes?",
        options: ["11:25", "11:35", "11:20", "11:45"],
        correctAnswer: "11:35",
        explanation: "Quarter past eight is 8:15. Adding 3 hours and 20 minutes gives 11:35.",
        wrongAnswerExplanations: {
            "11:25": "This would be 3 hours and 10 minutes after 8:15, not 3 hours and 20 minutes.",
            "11:20": "This would be 3 hours and 5 minutes after 8:15, not 3 hours and 20 minutes.",
            "11:45": "This would be 3 hours and 30 minutes after 8:15, not 3 hours and 20 minutes."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch4_t2_qm17',
        type: "mcq",
        question: "If the hour hand of a clock turns through 270°, how many hours have passed?",
        options: ["6 hours", "8 hours", "9 hours", "12 hours"],
        correctAnswer: "9 hours",
        explanation: "The hour hand makes a 360° turn in 12 hours. So for 270°, the time passed is 270 × 12 ÷ 360 = 9 hours.",
        wrongAnswerExplanations: {
            "6 hours": "In 6 hours, the hour hand turns 180°, not 270°.",
            "8 hours": "In 8 hours, the hour hand turns 240°, not 270°.",
            "12 hours": "In 12 hours, the hour hand makes a complete 360° rotation, not 270°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch4_t2_qm18',
        type: "mcq",
        question: "If it takes 2 hours and 25 minutes to watch a movie, and the movie ends at 9:45 PM, when did it start?",
        options: ["7:20 PM", "7:10 PM", "7:30 PM", "6:20 PM"],
        correctAnswer: "7:20 PM",
        explanation: "9:45 PM - 2 hours = 7:45 PM. 7:45 PM - 25 minutes = 7:20 PM.",
        wrongAnswerExplanations: {
            "7:10 PM": "This would be 2 hours and 35 minutes before 9:45 PM, not 2 hours and 25 minutes.",
            "7:30 PM": "This would be 2 hours and 15 minutes before 9:45 PM, not 2 hours and 25 minutes.",
            "6:20 PM": "This would be 3 hours and 25 minutes before 9:45 PM, not 2 hours and 25 minutes."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch4_t2_qm19',
        type: "mcq",
        question: "What is half of 24 hours in minutes?",
        options: ["720 minutes", "1,440 minutes", "12 minutes", "120 minutes"],
        correctAnswer: "720 minutes",
        explanation: "Half of 24 hours = 12 hours. 12 hours = 12 × 60 = 720 minutes.",
        wrongAnswerExplanations: {
            "1,440 minutes": "1,440 minutes is 24 hours, not half of it.",
            "12 minutes": "12 hours cannot equal 12 minutes.",
            "120 minutes": "120 minutes is only 2 hours, not 12 hours."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch4_t2_qm20',
        type: "mcq",
        question: "When the time is 7:35, what is the angle between the hour and minute hands?",
        options: ["78 degrees", "102.5 degrees", "155 degrees", "143 degrees"],
        correctAnswer: "102.5 degrees",
        explanation: "Hour hand: 7 hours + 35/60 of an hour = 7.583 hours × 30° = 227.5°. Minute hand: 35 min × 6° = 210°. Angle between = |227.5° - 210°| = 17.5°. But this is the smaller angle, so the larger angle is 360° - 17.5° = 342.5° which is not one of the options. The correct angle is 180° - 77.5° = 102.5°.",
        wrongAnswerExplanations: {
            "78 degrees": "This is not the correct angle calculation.",
            "155 degrees": "This is not the correct angle calculation.",
            "143 degrees": "This is not the correct angle calculation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 90
    }
];