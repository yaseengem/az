import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch4_t3_qe1',
        type: "mcq",
        question: "How many hours are there in a day?",
        options: ["12 hours", "18 hours", "24 hours", "30 hours"],
        correctAnswer: "24 hours",
        explanation: "A complete day has 24 hours, which is why clocks go from 1 to 12 twice (AM and PM).",
        wrongAnswerExplanations: {
            "12 hours": "12 hours is half a day, not a complete day.",
            "18 hours": "A day has more than 18 hours.",
            "30 hours": "A day has fewer than 30 hours."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch4_t3_qe2',
        type: "mcq",
        question: "If a school period lasts for 45 minutes, how many complete periods can fit in 3 hours?",
        options: ["3 periods", "4 periods", "5 periods", "6 periods"],
        correctAnswer: "4 periods",
        explanation: "3 hours = 180 minutes. 180 ÷ 45 = 4 periods can fit completely in 180 minutes.",
        wrongAnswerExplanations: {
            "3 periods": "3 periods would only take 135 minutes, less than 3 hours.",
            "5 periods": "5 periods would need 225 minutes, which is more than 3 hours.",
            "6 periods": "6 periods would need 270 minutes, which is more than 3 hours."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch4_t3_qe3',
        type: "mcq",
        question: "If Ravi needs to reach school by 8:30 AM and it takes him 25 minutes to get ready and 20 minutes to travel, what is the latest time he should wake up?",
        options: ["7:35 AM", "7:45 AM", "7:55 AM", "8:05 AM"],
        correctAnswer: "7:45 AM",
        explanation: "Working backward: 8:30 - 20 minutes travel = 8:10, then 8:10 - 25 minutes getting ready = 7:45 AM.",
        wrongAnswerExplanations: {
            "7:35 AM": "This gives him too much time. He would arrive early.",
            "7:55 AM": "This is too late. He wouldn't have enough time to get ready and travel.",
            "8:05 AM": "This is much too late. He would definitely be late for school."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch4_t3_qe4',
        type: "mcq",
        question: "If a TV show starts at 5:15 PM and ends at 6:00 PM, how long is the show?",
        options: ["30 minutes", "35 minutes", "45 minutes", "60 minutes"],
        correctAnswer: "45 minutes",
        explanation: "From 5:15 PM to 6:00 PM is 45 minutes (5:15 to 6:00 = 45 minutes).",
        wrongAnswerExplanations: {
            "30 minutes": "The show would end at 5:45 PM if it were 30 minutes long.",
            "35 minutes": "The show would end at 5:50 PM if it were 35 minutes long.",
            "60 minutes": "The show would end at 6:15 PM if it were 60 minutes long."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch4_t3_qe5',
        type: "mcq",
        question: "How many minutes should you spend on homework if you start at 4:30 PM and finish at 5:15 PM?",
        options: ["30 minutes", "35 minutes", "45 minutes", "50 minutes"],
        correctAnswer: "45 minutes",
        explanation: "From 4:30 PM to 5:15 PM is 45 minutes (5:15 - 4:30 = 45 minutes).",
        wrongAnswerExplanations: {
            "30 minutes": "You would finish at 5:00 PM if you spent 30 minutes.",
            "35 minutes": "You would finish at 5:05 PM if you spent 35 minutes.",
            "50 minutes": "You would finish at 5:20 PM if you spent 50 minutes."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch4_t3_qe6',
        type: "mcq",
        question: "What is a good time management practice for a student?",
        options: [
            "Doing homework at the last minute", 
            "Watching TV all afternoon", 
            "Creating a schedule for study time", 
            "Playing games during study time"
        ],
        correctAnswer: "Creating a schedule for study time",
        explanation: "Creating a schedule helps organize time effectively and ensures important tasks get completed.",
        wrongAnswerExplanations: {
            "Doing homework at the last minute": "Last-minute work creates stress and often results in poor quality work.",
            "Watching TV all afternoon": "This uses time that could be spent on more important activities like homework.",
            "Playing games during study time": "This distracts from learning and makes studying take longer."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch4_t3_qe7',
        type: "mcq",
        question: "If Meera has a dance class from 5:00 PM to 6:00 PM and needs 15 minutes to get there, what time should she leave home?",
        options: ["4:30 PM", "4:45 PM", "4:50 PM", "5:00 PM"],
        correctAnswer: "4:45 PM",
        explanation: "If Meera needs 15 minutes to travel and class starts at 5:00 PM, she should leave at 4:45 PM.",
        wrongAnswerExplanations: {
            "4:30 PM": "She would arrive too early, at 4:45 PM.",
            "4:50 PM": "She would arrive 5 minutes late, at 5:05 PM.",
            "5:00 PM": "She would arrive 15 minutes late, at 5:15 PM."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch4_t3_qe8',
        type: "mcq",
        question: "If you have 2 hours free time and want to spend half of it reading, how many minutes will you spend reading?",
        options: ["30 minutes", "45 minutes", "60 minutes", "90 minutes"],
        correctAnswer: "60 minutes",
        explanation: "Half of 2 hours = 1 hour = 60 minutes.",
        wrongAnswerExplanations: {
            "30 minutes": "This is only a quarter of 2 hours, not half.",
            "45 minutes": "This is less than half of 2 hours.",
            "90 minutes": "This is more than half of 2 hours (it's 3/4 of the time)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch4_t3_qe9',
        type: "mcq",
        question: "What time would it be 30 minutes after 9:45 AM?",
        options: ["10:05 AM", "10:15 AM", "10:25 AM", "10:30 AM"],
        correctAnswer: "10:15 AM",
        explanation: "9:45 AM + 30 minutes = 10:15 AM.",
        wrongAnswerExplanations: {
            "10:05 AM": "This is only 20 minutes after 9:45 AM.",
            "10:25 AM": "This is 40 minutes after 9:45 AM.",
            "10:30 AM": "This is 45 minutes after 9:45 AM."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch4_t3_qe10',
        type: "mcq",
        question: "Which activity would take the longest time?",
        options: ["Brushing teeth", "Taking a bath", "Tying shoelaces", "Drinking a glass of water"],
        correctAnswer: "Taking a bath",
        explanation: "Among these activities, taking a bath typically takes the longest time, usually several minutes.",
        wrongAnswerExplanations: {
            "Brushing teeth": "Brushing teeth usually takes 2-3 minutes.",
            "Tying shoelaces": "Tying shoelaces takes less than a minute for most people.",
            "Drinking a glass of water": "Drinking water typically takes seconds, not minutes."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch4_t3_qe11',
        type: "mcq",
        question: "If a class starts at 8:00 AM and has four 45-minute periods with a 15-minute break after each period, when will the fourth period end?",
        options: ["10:45 AM", "11:15 AM", "11:45 AM", "12:00 PM"],
        correctAnswer: "11:45 AM",
        explanation: "8:00-8:45 (1st period), 8:45-9:00 (break), 9:00-9:45 (2nd), 9:45-10:00 (break), 10:00-10:45 (3rd), 10:45-11:00 (break), 11:00-11:45 (4th).",
        wrongAnswerExplanations: {
            "10:45 AM": "This is when the third period ends, not the fourth.",
            "11:15 AM": "This timing doesn't align with the schedule.",
            "12:00 PM": "This is too late based on the given schedule."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch4_t3_qe12',
        type: "mcq",
        question: "If Amit finishes his homework in 30 minutes and his sister Priya takes twice as long, how long does Priya take?",
        options: ["15 minutes", "45 minutes", "60 minutes", "90 minutes"],
        correctAnswer: "60 minutes",
        explanation: "Twice as long as 30 minutes is 2 × 30 = 60 minutes.",
        wrongAnswerExplanations: {
            "15 minutes": "This is half the time, not twice the time.",
            "45 minutes": "This is 1.5 times as long, not twice as long.",
            "90 minutes": "This is 3 times as long, not twice as long."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch4_t3_qe13',
        type: "mcq",
        question: "If school ends at 3:30 PM and you reach home at 4:00 PM, how long did the journey take?",
        options: ["15 minutes", "30 minutes", "45 minutes", "60 minutes"],
        correctAnswer: "30 minutes",
        explanation: "From 3:30 PM to 4:00 PM is 30 minutes.",
        wrongAnswerExplanations: {
            "15 minutes": "You would reach home at 3:45 PM if the journey took 15 minutes.",
            "45 minutes": "You would reach home at 4:15 PM if the journey took 45 minutes.",
            "60 minutes": "You would reach home at 4:30 PM if the journey took 60 minutes."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch4_t3_qe14',
        type: "mcq",
        question: "Which is the best example of using time efficiently?",
        options: [
            "Watching TV while doing homework", 
            "Reading notes while waiting for the bus", 
            "Playing games during study time", 
            "Taking a long break between short study sessions"
        ],
        correctAnswer: "Reading notes while waiting for the bus",
        explanation: "Using waiting time productively (like reviewing notes while waiting for transport) is efficient time management.",
        wrongAnswerExplanations: {
            "Watching TV while doing homework": "This splits attention and reduces the quality of both activities.",
            "Playing games during study time": "This distracts from learning and wastes study time.",
            "Taking a long break between short study sessions": "This uses time inefficiently with too much break time compared to study time."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch4_t3_qe15',
        type: "mcq",
        question: "If your bedtime is 9:00 PM and you need to wake up at 6:00 AM, how many hours will you sleep?",
        options: ["7 hours", "8 hours", "9 hours", "10 hours"],
        correctAnswer: "9 hours",
        explanation: "From 9:00 PM to 6:00 AM is 9 hours.",
        wrongAnswerExplanations: {
            "7 hours": "This would mean waking up at 4:00 AM or going to sleep at 11:00 PM.",
            "8 hours": "This would mean waking up at 5:00 AM or going to sleep at 10:00 PM.",
            "10 hours": "This would mean waking up at 7:00 AM or going to sleep at 8:00 PM."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch4_t3_qe16',
        type: "mcq",
        question: "What would be a good use of the 10-minute break between classes?",
        options: [
            "Starting a new video game", 
            "Going to the bathroom and getting books for next class", 
            "Starting a long conversation with friends", 
            "Beginning homework for the day"
        ],
        correctAnswer: "Going to the bathroom and getting books for next class",
        explanation: "Using break time to prepare for the next class and take care of basic needs is efficient time management.",
        wrongAnswerExplanations: {
            "Starting a new video game": "There isn't enough time to play properly in just 10 minutes.",
            "Starting a long conversation with friends": "A long conversation might not finish in time for the next class.",
            "Beginning homework for the day": "Homework typically requires more focused time than a short break offers."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch4_t3_qe17',
        type: "mcq",
        question: "What time would it be 45 minutes before 2:30 PM?",
        options: ["1:15 PM", "1:45 PM", "1:55 PM", "2:15 PM"],
        correctAnswer: "1:45 PM",
        explanation: "2:30 PM - 45 minutes = 1:45 PM.",
        wrongAnswerExplanations: {
            "1:15 PM": "This is 1 hour and 15 minutes before 2:30 PM.",
            "1:55 PM": "This is 35 minutes before 2:30 PM.",
            "2:15 PM": "This is only 15 minutes before 2:30 PM."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch4_t3_qe18',
        type: "mcq",
        question: "If you have a music lesson that lasts 40 minutes and an art class that lasts 50 minutes, how much time do both activities take together?",
        options: ["1 hour and 10 minutes", "1 hour and 20 minutes", "1 hour and 30 minutes", "2 hours"],
        correctAnswer: "1 hour and 30 minutes",
        explanation: "40 minutes + 50 minutes = 90 minutes = 1 hour and 30 minutes.",
        wrongAnswerExplanations: {
            "1 hour and 10 minutes": "This is 70 minutes, but the total is 90 minutes.",
            "1 hour and 20 minutes": "This is 80 minutes, but the total is 90 minutes.",
            "2 hours": "This is 120 minutes, which is more than the total of 90 minutes."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch4_t3_qe19',
        type: "mcq",
        question: "Which of these is NOT a good time management habit?",
        options: [
            "Making a to-do list", 
            "Setting priorities for tasks", 
            "Leaving homework until the last minute", 
            "Using a calendar to track activities"
        ],
        correctAnswer: "Leaving homework until the last minute",
        explanation: "Procrastination (leaving work until the last minute) creates stress and often results in poor quality work.",
        wrongAnswerExplanations: {
            "Making a to-do list": "Lists help organize tasks and ensure nothing is forgotten.",
            "Setting priorities for tasks": "Prioritizing helps focus on the most important tasks first.",
            "Using a calendar to track activities": "Calendars help plan ahead and ensure you don't overbook your time."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch4_t3_qe20',
        type: "mcq",
        question: "If you need to finish 20 math problems and each one takes about 3 minutes, approximately how long will the entire math homework take?",
        options: ["30 minutes", "45 minutes", "60 minutes", "90 minutes"],
        correctAnswer: "60 minutes",
        explanation: "20 problems × 3 minutes each = 60 minutes = 1 hour.",
        wrongAnswerExplanations: {
            "30 minutes": "This would only allow 1.5 minutes per problem, which is too little time.",
            "45 minutes": "This would only allow 2.25 minutes per problem, less than the given 3 minutes.",
            "90 minutes": "This would allow 4.5 minutes per problem, more than the given 3 minutes."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    }
];
