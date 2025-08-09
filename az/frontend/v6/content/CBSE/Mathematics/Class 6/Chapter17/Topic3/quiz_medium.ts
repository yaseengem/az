import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch17_t3_qm1',
        type: "mcq",
        question: "If you have three 45-minute classes with 15-minute breaks between them, what is the total time from start to finish?",
        options: ["2 hours", "2 hours 15 minutes", "2 hours 30 minutes", "2 hours 45 minutes"],
        correctAnswer: "2 hours 45 minutes",
        explanation: "3 classes × 45 minutes = 135 minutes + 2 breaks × 15 minutes = 30 minutes. Total = 165 minutes = 2 hours 45 minutes. ⏰",
        wrongAnswerExplanations: {
            "2 hours": "This doesn't include all the breaks.",
            "2 hours 15 minutes": "This doesn't account for all the time.",
            "2 hours 30 minutes": "This is close but not the correct total."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t3_qm2',
        type: "mcq",
        question: "If a project takes 3 hours and 20 minutes to complete, and you start at 1:45 PM, what time should you schedule your next activity?",
        options: ["4:45 PM", "5:00 PM", "5:05 PM", "5:15 PM"],
        correctAnswer: "5:05 PM",
        explanation: "1:45 PM + 3 hours and 20 minutes = 5:05 PM. Remember to add both hours and minutes correctly. ⏰",
        wrongAnswerExplanations: {
            "4:45 PM": "This is only 3 hours after starting.",
            "5:00 PM": "This doesn't account for the extra 20 minutes.",
            "5:15 PM": "This is 3 hours and 30 minutes after starting."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t3_qm3',
        type: "mcq",
        question: "If you need to complete 4 tasks that each take 35 minutes, with 10-minute breaks between them, what is the total time needed?",
        options: ["2 hours 20 minutes", "2 hours 30 minutes", "2 hours 40 minutes", "2 hours 50 minutes"],
        correctAnswer: "2 hours 50 minutes",
        explanation: "4 tasks × 35 minutes = 140 minutes + 3 breaks × 10 minutes = 30 minutes. Total = 170 minutes = 2 hours 50 minutes. ⏱️",
        wrongAnswerExplanations: {
            "2 hours 20 minutes": "This doesn't include the breaks.",
            "2 hours 30 minutes": "This doesn't account for all the time.",
            "2 hours 40 minutes": "This is close but not the correct total."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t3_qm4',
        type: "mcq",
        question: "If you start studying at 2:30 PM and want to finish by 5:45 PM, how many 25-minute study sessions with 5-minute breaks can you fit in?",
        options: ["6", "7", "8", "9"],
        correctAnswer: "7",
        explanation: "Total time = 3 hours 15 minutes = 195 minutes. Each session + break = 30 minutes. 195 ÷ 30 = 6.5, so 7 complete sessions. 📚",
        wrongAnswerExplanations: {
            "6": "This doesn't use all the available time.",
            "8": "This would exceed the available time.",
            "9": "This would exceed the available time."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t3_qm5',
        type: "mcq",
        question: "If a train journey takes 2 hours and 45 minutes, and you need to arrive by 3:30 PM, what is the latest time you can depart?",
        options: ["12:30 PM", "12:45 PM", "1:00 PM", "1:15 PM"],
        correctAnswer: "12:45 PM",
        explanation: "3:30 PM - 2 hours and 45 minutes = 12:45 PM. Remember to subtract both hours and minutes. 🚂",
        wrongAnswerExplanations: {
            "12:30 PM": "This would make you arrive too early.",
            "1:00 PM": "This would make you arrive too late.",
            "1:15 PM": "This would make you arrive too late."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t3_qm6',
        type: "mcq",
        question: "If you have 5 classes that each last 40 minutes, with 15-minute breaks between them, what is the total time from first class to last class?",
        options: ["3 hours 20 minutes", "3 hours 35 minutes", "3 hours 50 minutes", "4 hours 5 minutes"],
        correctAnswer: "3 hours 50 minutes",
        explanation: "5 classes × 40 minutes = 200 minutes + 4 breaks × 15 minutes = 60 minutes. Total = 260 minutes = 4 hours 20 minutes. ⏰",
        wrongAnswerExplanations: {
            "3 hours 20 minutes": "This doesn't include the breaks.",
            "3 hours 35 minutes": "This doesn't account for all the time.",
            "4 hours 5 minutes": "This is close but not the correct total."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t3_qm7',
        type: "mcq",
        question: "If you start a movie at 6:15 PM and it's 2 hours and 25 minutes long, what time will it end?",
        options: ["8:30 PM", "8:40 PM", "8:45 PM", "8:50 PM"],
        correctAnswer: "8:40 PM",
        explanation: "6:15 PM + 2 hours and 25 minutes = 8:40 PM. Remember to add both hours and minutes correctly. 🎬",
        wrongAnswerExplanations: {
            "8:30 PM": "This is only 2 hours and 15 minutes after starting.",
            "8:45 PM": "This is 2 hours and 30 minutes after starting.",
            "8:50 PM": "This is 2 hours and 35 minutes after starting."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t3_qm8',
        type: "mcq",
        question: "If you have 3.5 hours to complete 4 tasks, how much time can you spend on each task if you want equal time for each?",
        options: ["45 minutes", "50 minutes", "52.5 minutes", "55 minutes"],
        correctAnswer: "52.5 minutes",
        explanation: "3.5 hours = 210 minutes. 210 minutes ÷ 4 tasks = 52.5 minutes per task. ⏱️",
        wrongAnswerExplanations: {
            "45 minutes": "This would only use 3 hours total.",
            "50 minutes": "This would only use 3 hours and 20 minutes total.",
            "55 minutes": "This would exceed the available time."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t3_qm9',
        type: "mcq",
        question: "If you start a game at 4:20 PM and play for 1 hour and 55 minutes, what time will you finish?",
        options: ["6:05 PM", "6:10 PM", "6:15 PM", "6:20 PM"],
        correctAnswer: "6:15 PM",
        explanation: "4:20 PM + 1 hour and 55 minutes = 6:15 PM. Remember to add both hours and minutes correctly. 🎮",
        wrongAnswerExplanations: {
            "6:05 PM": "This is only 1 hour and 45 minutes after starting.",
            "6:10 PM": "This is only 1 hour and 50 minutes after starting.",
            "6:20 PM": "This is 2 hours after starting."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t3_qm10',
        type: "mcq",
        question: "If you have 2 hours and 30 minutes to complete 5 tasks, how much time can you spend on each task if you want equal time for each?",
        options: ["25 minutes", "28 minutes", "30 minutes", "32 minutes"],
        correctAnswer: "30 minutes",
        explanation: "2 hours and 30 minutes = 150 minutes. 150 minutes ÷ 5 tasks = 30 minutes per task. ⏰",
        wrongAnswerExplanations: {
            "25 minutes": "This would only use 2 hours and 5 minutes total.",
            "28 minutes": "This would only use 2 hours and 20 minutes total.",
            "32 minutes": "This would exceed the available time."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t3_qm11',
        type: "mcq",
        question: "If you start reading at 3:45 PM and want to finish by 6:15 PM, how many 20-minute reading sessions with 5-minute breaks can you fit in?",
        options: ["5", "6", "7", "8"],
        correctAnswer: "6",
        explanation: "Total time = 2 hours 30 minutes = 150 minutes. Each session + break = 25 minutes. 150 ÷ 25 = 6 complete sessions. 📚",
        wrongAnswerExplanations: {
            "5": "This doesn't use all the available time.",
            "7": "This would exceed the available time.",
            "8": "This would exceed the available time."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t3_qm12',
        type: "mcq",
        question: "If a flight takes 3 hours and 15 minutes, and you need to arrive by 8:30 PM, what is the latest time you can depart?",
        options: ["5:00 PM", "5:15 PM", "5:30 PM", "5:45 PM"],
        correctAnswer: "5:15 PM",
        explanation: "8:30 PM - 3 hours and 15 minutes = 5:15 PM. Remember to subtract both hours and minutes. ✈️",
        wrongAnswerExplanations: {
            "5:00 PM": "This would make you arrive too early.",
            "5:30 PM": "This would make you arrive too late.",
            "5:45 PM": "This would make you arrive too late."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t3_qm13',
        type: "mcq",
        question: "If you have 4.5 hours to complete 6 tasks, how much time can you spend on each task if you want equal time for each?",
        options: ["40 minutes", "42 minutes", "45 minutes", "48 minutes"],
        correctAnswer: "45 minutes",
        explanation: "4.5 hours = 270 minutes. 270 minutes ÷ 6 tasks = 45 minutes per task. ⏱️",
        wrongAnswerExplanations: {
            "40 minutes": "This would only use 4 hours total.",
            "42 minutes": "This would only use 4 hours and 12 minutes total.",
            "48 minutes": "This would exceed the available time."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t3_qm14',
        type: "mcq",
        question: "If you start a project at 9:30 AM and it takes 4 hours and 45 minutes to complete, what time will you finish?",
        options: ["2:00 PM", "2:15 PM", "2:30 PM", "2:45 PM"],
        correctAnswer: "2:15 PM",
        explanation: "9:30 AM + 4 hours and 45 minutes = 2:15 PM. Remember to add both hours and minutes correctly. ⏰",
        wrongAnswerExplanations: {
            "2:00 PM": "This is only 4 hours and 30 minutes after starting.",
            "2:30 PM": "This is 5 hours after starting.",
            "2:45 PM": "This is 5 hours and 15 minutes after starting."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t3_qm15',
        type: "mcq",
        question: "If you have 3 hours to complete 5 tasks, how much time can you spend on each task if you want equal time for each?",
        options: ["32 minutes", "34 minutes", "36 minutes", "38 minutes"],
        correctAnswer: "36 minutes",
        explanation: "3 hours = 180 minutes. 180 minutes ÷ 5 tasks = 36 minutes per task. ⏱️",
        wrongAnswerExplanations: {
            "32 minutes": "This would only use 2 hours and 40 minutes total.",
            "34 minutes": "This would only use 2 hours and 50 minutes total.",
            "38 minutes": "This would exceed the available time."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t3_qm16',
        type: "mcq",
        question: "If you start studying at 7:15 PM and want to finish by 10:00 PM, how many 30-minute study sessions with 10-minute breaks can you fit in?",
        options: ["4", "5", "6", "7"],
        correctAnswer: "5",
        explanation: "Total time = 2 hours 45 minutes = 165 minutes. Each session + break = 40 minutes. 165 ÷ 40 = 4.125, so 5 complete sessions. 📚",
        wrongAnswerExplanations: {
            "4": "This doesn't use all the available time.",
            "6": "This would exceed the available time.",
            "7": "This would exceed the available time."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t3_qm17',
        type: "mcq",
        question: "If a bus journey takes 2 hours and 35 minutes, and you need to arrive by 11:45 AM, what is the latest time you can depart?",
        options: ["9:00 AM", "9:10 AM", "9:15 AM", "9:20 AM"],
        correctAnswer: "9:10 AM",
        explanation: "11:45 AM - 2 hours and 35 minutes = 9:10 AM. Remember to subtract both hours and minutes. 🚌",
        wrongAnswerExplanations: {
            "9:00 AM": "This would make you arrive too early.",
            "9:15 AM": "This would make you arrive too late.",
            "9:20 AM": "This would make you arrive too late."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t3_qm18',
        type: "mcq",
        question: "If you have 5 hours to complete 8 tasks, how much time can you spend on each task if you want equal time for each?",
        options: ["35 minutes", "37.5 minutes", "40 minutes", "42.5 minutes"],
        correctAnswer: "37.5 minutes",
        explanation: "5 hours = 300 minutes. 300 minutes ÷ 8 tasks = 37.5 minutes per task. ⏱️",
        wrongAnswerExplanations: {
            "35 minutes": "This would only use 4 hours and 40 minutes total.",
            "40 minutes": "This would exceed the available time.",
            "42.5 minutes": "This would exceed the available time."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t3_qm19',
        type: "mcq",
        question: "If you start a game at 2:50 PM and play for 2 hours and 40 minutes, what time will you finish?",
        options: ["5:20 PM", "5:25 PM", "5:30 PM", "5:35 PM"],
        correctAnswer: "5:30 PM",
        explanation: "2:50 PM + 2 hours and 40 minutes = 5:30 PM. Remember to add both hours and minutes correctly. 🎮",
        wrongAnswerExplanations: {
            "5:20 PM": "This is only 2 hours and 30 minutes after starting.",
            "5:25 PM": "This is only 2 hours and 35 minutes after starting.",
            "5:35 PM": "This is 2 hours and 45 minutes after starting."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t3_qm20',
        type: "mcq",
        question: "If you have 6 hours to complete 9 tasks, how much time can you spend on each task if you want equal time for each?",
        options: ["35 minutes", "38 minutes", "40 minutes", "42 minutes"],
        correctAnswer: "40 minutes",
        explanation: "6 hours = 360 minutes. 360 minutes ÷ 9 tasks = 40 minutes per task. ⏰",
        wrongAnswerExplanations: {
            "35 minutes": "This would only use 5 hours and 15 minutes total.",
            "38 minutes": "This would only use 5 hours and 42 minutes total.",
            "42 minutes": "This would exceed the available time."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 