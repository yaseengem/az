import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch17_t3_qm1',
        type: "mcq",
        question: "If a train departs at 14:30 and takes 2 hours and 45 minutes to reach its destination, what time will it arrive? 🚂",
        options: [
            "17:15",
            "16:15",
            "17:45",
            "16:45"
        ],
        correctAnswer: "17:15",
        explanation: "Adding 2 hours and 45 minutes to 14:30: 14:30 + 2:45 = 17:15 (14:30 → 16:30 → 17:15).",
        wrongAnswerExplanations: {
            "16:15": "This would be only 1 hour and 45 minutes later.",
            "17:45": "This would be 3 hours and 15 minutes later.",
            "16:45": "This would be 2 hours and 15 minutes later."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch17_t3_qm2',
        type: "mcq",
        question: "A student needs to complete 3 assignments taking 45 minutes each and has a 2-hour study window. What's the best way to schedule the work? ⏱️",
        options: [
            "Complete all assignments with 15-minute breaks between them",
            "Do two assignments and leave one for later",
            "Try to rush through all assignments in 40 minutes each",
            "Take a long break after first assignment"
        ],
        correctAnswer: "Do two assignments and leave one for later",
        explanation: "3 assignments × 45 minutes = 135 minutes, which exceeds the 120-minute window. It's better to complete 2 assignments properly than rush through all 3.",
        wrongAnswerExplanations: {
            "Complete all assignments with 15-minute breaks between them": "This would require 165 minutes (assignments + breaks), exceeding available time.",
            "Try to rush through all assignments in 40 minutes each": "Rushing could lead to poor quality work.",
            "Take a long break after first assignment": "This would waste time needed for the assignments."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch17_t3_qm3',
        type: "mcq",
        question: "If a meeting starts at 09:15 AM and ends at 12:45 PM, how would you express its duration in hours and minutes? ⌚",
        options: [
            "3 hours and 30 minutes",
            "3 hours and 15 minutes",
            "3 hours and 45 minutes",
            "4 hours"
        ],
        correctAnswer: "3 hours and 30 minutes",
        explanation: "From 09:15 to 12:45 is 3 hours (09:15 → 10:15 → 11:15 → 12:15) plus 30 minutes (12:15 → 12:45).",
        wrongAnswerExplanations: {
            "3 hours and 15 minutes": "This would end at 12:30 PM.",
            "3 hours and 45 minutes": "This would end at 13:00 PM.",
            "4 hours": "This would end at 13:15 PM."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch17_t3_qm4',
        type: "mcq",
        question: "A factory worker's shift is from 08:00 to 16:30 with two 15-minute breaks and one 30-minute lunch break. How many hours of actual work time are there? 🏭",
        options: [
            "7 hours and 30 minutes",
            "8 hours",
            "7 hours and 45 minutes",
            "8 hours and 30 minutes"
        ],
        correctAnswer: "7 hours and 30 minutes",
        explanation: "Total shift (8:30) minus breaks (2×15 min + 30 min = 1 hour) equals 7 hours and 30 minutes of work time.",
        wrongAnswerExplanations: {
            "8 hours": "This doesn't account for all break times.",
            "7 hours and 45 minutes": "This only accounts for the lunch break.",
            "8 hours and 30 minutes": "This is the total shift time without subtracting breaks."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch17_t3_qm5',
        type: "mcq",
        question: "If you need to catch a flight at 10:45 AM and the airport requires check-in 2 hours before, plus it takes 45 minutes to reach the airport, what's the latest time you should leave home? ✈️",
        options: [
            "8:00 AM",
            "7:45 AM",
            "8:15 AM",
            "7:30 AM"
        ],
        correctAnswer: "8:00 AM",
        explanation: "Working backwards: 10:45 - 2:00 = 8:45 (check-in time), then 8:45 - 0:45 = 8:00 AM (departure time).",
        wrongAnswerExplanations: {
            "7:45 AM": "This allows extra unnecessary time.",
            "8:15 AM": "This would make you late for check-in.",
            "7:30 AM": "This allows too much extra time."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch17_t3_qm6',
        type: "mcq",
        question: "A student has 5 subjects to study for an exam, each requiring 40 minutes. If they start at 2:00 PM and take a 10-minute break between subjects, when will they finish? 📚",
        options: [
            "5:50 PM",
            "5:30 PM",
            "6:00 PM",
            "5:40 PM"
        ],
        correctAnswer: "5:50 PM",
        explanation: "5 subjects × 40 minutes = 200 minutes of study + 4 breaks × 10 minutes = 40 minutes of breaks. Total 240 minutes (4 hours) from 2:00 PM = 5:50 PM.",
        wrongAnswerExplanations: {
            "5:30 PM": "This doesn't account for all break times.",
            "6:00 PM": "This includes too much break time.",
            "5:40 PM": "This doesn't account for the correct number of breaks."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch17_t3_qm7',
        type: "mcq",
        question: "If a movie starts at 7:15 PM and runs for 2 hours 20 minutes with a 15-minute intermission, what time will it end? 🎬",
        options: [
            "9:50 PM",
            "9:35 PM",
            "10:05 PM",
            "9:20 PM"
        ],
        correctAnswer: "9:50 PM",
        explanation: "Movie duration (2:20) + intermission (0:15) = 2:35 total. Starting at 7:15 PM + 2:35 = 9:50 PM.",
        wrongAnswerExplanations: {
            "9:35 PM": "This doesn't include the intermission.",
            "10:05 PM": "This adds too much time.",
            "9:20 PM": "This is less than the movie duration alone."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch17_t3_qm8',
        type: "mcq",
        question: "A bus service runs every 15 minutes from 6:00 AM to 10:00 PM. How many buses run in total during this period? 🚌",
        options: [
            "65",
            "64",
            "66",
            "67"
        ],
        correctAnswer: "65",
        explanation: "From 6:00 AM to 10:00 PM is 16 hours = 960 minutes. 960 ÷ 15 = 64 intervals, meaning 65 buses (including first and last).",
        wrongAnswerExplanations: {
            "64": "This counts intervals but not the total number of buses.",
            "66": "This adds one too many buses.",
            "67": "This adds two too many buses."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch17_t3_qm9',
        type: "mcq",
        question: "If you have a 45-minute lunch break starting at 1:30 PM and a 30-minute meeting at 2:00 PM, what's the best scheduling solution? 💼",
        options: [
            "Shorten lunch to 30 minutes",
            "Reschedule the meeting",
            "Skip lunch",
            "Attend meeting 15 minutes late"
        ],
        correctAnswer: "Reschedule the meeting",
        explanation: "The meeting overlaps with lunch break by 15 minutes. Rescheduling avoids compromising either commitment.",
        wrongAnswerExplanations: {
            "Shorten lunch to 30 minutes": "This compromises necessary break time.",
            "Skip lunch": "This is unhealthy and affects productivity.",
            "Attend meeting 15 minutes late": "This is unprofessional and disrupts the meeting."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch17_t3_qm10',
        type: "mcq",
        question: "A doctor sees patients for 20 minutes each. If the clinic runs from 9:00 AM to 1:00 PM with a 20-minute break at 11:00 AM, how many patients can be seen? 👨‍⚕️",
        options: [
            "11",
            "12",
            "10",
            "13"
        ],
        correctAnswer: "11",
        explanation: "4 hours = 240 minutes - 20 minutes break = 220 minutes. 220 ÷ 20 = 11 patient slots.",
        wrongAnswerExplanations: {
            "12": "This doesn't account for the break time.",
            "10": "This underestimates available time.",
            "13": "This exceeds available time even without break."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch17_t3_qm11',
        type: "mcq",
        question: "If a task takes 1 hour and 45 minutes to complete, and you need to finish 3 such tasks between 9:00 AM and 3:00 PM, is it possible with a 30-minute lunch break? ⚡",
        options: [
            "Yes, with 45 minutes to spare",
            "Yes, with 30 minutes to spare",
            "No, you'll need 15 more minutes",
            "No, you'll need 30 more minutes"
        ],
        correctAnswer: "Yes, with 30 minutes to spare",
        explanation: "3 tasks × 1:45 = 5:15 + 0:30 lunch = 5:45 hours needed. 9:00 AM to 3:00 PM = 6 hours. 6:00 - 5:45 = 0:30 spare.",
        wrongAnswerExplanations: {
            "Yes, with 45 minutes to spare": "This overestimates spare time.",
            "No, you'll need 15 more minutes": "This incorrectly calculates total time.",
            "No, you'll need 30 more minutes": "This incorrectly calculates total time."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch17_t3_qm12',
        type: "mcq",
        question: "A gym class starts every 45 minutes from 6:00 AM. What time will the 5th class of the day start? 🏋️",
        options: [
            "9:00 AM",
            "8:45 AM",
            "9:15 AM",
            "8:30 AM"
        ],
        correctAnswer: "9:00 AM",
        explanation: "4 intervals of 45 minutes = 3 hours. Starting at 6:00 AM + 3 hours = 9:00 AM for the 5th class.",
        wrongAnswerExplanations: {
            "8:45 AM": "This would be too early.",
            "9:15 AM": "This would be too late.",
            "8:30 AM": "This counts only 3 intervals instead of 4."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch17_t3_qm13',
        type: "mcq",
        question: "If you have 3 hours to complete a project and each section takes 40 minutes, with 10-minute breaks needed between sections, how many sections can you complete? 📊",
        options: [
            "4",
            "3",
            "5",
            "2"
        ],
        correctAnswer: "4",
        explanation: "3 hours = 180 minutes. Each section + break = 50 minutes. 180 ÷ 50 = 3.6, allowing 4 sections (3 breaks needed).",
        wrongAnswerExplanations: {
            "3": "This leaves too much unused time.",
            "5": "This exceeds the available time.",
            "2": "This significantly underutilizes the time."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch17_t3_qm14',
        type: "mcq",
        question: "A meeting scheduled for 2:30 PM is delayed by 75 minutes. If it lasts for 45 minutes, when will it end? 🕒",
        options: [
            "4:30 PM",
            "4:15 PM",
            "4:45 PM",
            "4:00 PM"
        ],
        correctAnswer: "4:30 PM",
        explanation: "Original time (2:30) + delay (1:15) = 3:45 start time. 3:45 + 45 minutes = 4:30 PM end time.",
        wrongAnswerExplanations: {
            "4:15 PM": "This doesn't account for full delay time.",
            "4:45 PM": "This adds too much time.",
            "4:00 PM": "This doesn't account for meeting duration."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch17_t3_qm15',
        type: "mcq",
        question: "If a task takes 25 minutes and you need to complete it 12 times with 5-minute breaks between each, how long will it take in total? ⏳",
        options: [
            "5 hours and 30 minutes",
            "5 hours",
            "5 hours and 15 minutes",
            "5 hours and 45 minutes"
        ],
        correctAnswer: "5 hours and 30 minutes",
        explanation: "12 tasks × 25 minutes = 300 minutes + (11 breaks × 5 minutes = 55 minutes) = 355 minutes = 5 hours and 30 minutes.",
        wrongAnswerExplanations: {
            "5 hours": "This doesn't account for all breaks.",
            "5 hours and 15 minutes": "This underestimates break time.",
            "5 hours and 45 minutes": "This overestimates total time."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch17_t3_qm16',
        type: "mcq",
        question: "A library opens at 9:00 AM and closes at 6:00 PM with a 1-hour lunch break. If each book takes 15 minutes to catalog, how many books can be processed in a day? 📚",
        options: [
            "32",
            "30",
            "28",
            "34"
        ],
        correctAnswer: "32",
        explanation: "9 hours - 1 hour lunch = 8 hours = 480 minutes. 480 ÷ 15 = 32 books can be processed.",
        wrongAnswerExplanations: {
            "30": "This underestimates available time.",
            "28": "This significantly underestimates available time.",
            "34": "This doesn't account for lunch break properly."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch17_t3_qm17',
        type: "mcq",
        question: "If a movie starts at 6:45 PM and you arrive 20 minutes late, how much of the 2-hour movie will you miss? 🎥",
        options: [
            "16.7% of the movie",
            "15% of the movie",
            "20% of the movie",
            "10% of the movie"
        ],
        correctAnswer: "16.7% of the movie",
        explanation: "20 minutes out of 120 minutes = 20/120 = 1/6 = 16.7% of the total movie time.",
        wrongAnswerExplanations: {
            "15% of the movie": "This underestimates the percentage.",
            "20% of the movie": "This overestimates the percentage.",
            "10% of the movie": "This significantly underestimates the percentage."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch17_t3_qm18',
        type: "mcq",
        question: "A train journey of 6 hours is delayed by 25%. What is the actual journey time? 🚂",
        options: [
            "7 hours and 30 minutes",
            "7 hours",
            "8 hours",
            "6 hours and 45 minutes"
        ],
        correctAnswer: "7 hours and 30 minutes",
        explanation: "25% of 6 hours = 1.5 hours. Original time (6 hours) + delay (1.5 hours) = 7.5 hours = 7 hours and 30 minutes.",
        wrongAnswerExplanations: {
            "7 hours": "This underestimates the delay.",
            "8 hours": "This overestimates the delay.",
            "6 hours and 45 minutes": "This significantly underestimates the delay."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch17_t3_qm19',
        type: "mcq",
        question: "If you need to read 150 pages in 5 days, spending equal time each day, and can read 10 pages in 20 minutes, how long should you read each day? 📖",
        options: [
            "1 hour",
            "45 minutes",
            "1 hour and 15 minutes",
            "50 minutes"
        ],
        correctAnswer: "1 hour",
        explanation: "150 pages ÷ 5 days = 30 pages per day. At 10 pages per 20 minutes, 30 pages will take 60 minutes = 1 hour.",
        wrongAnswerExplanations: {
            "45 minutes": "This isn't enough time to complete 30 pages.",
            "1 hour and 15 minutes": "This is more time than needed.",
            "50 minutes": "This isn't enough time to complete 30 pages."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch17_t3_qm20',
        type: "mcq",
        question: "A worker's shift is from 8:00 AM to 4:30 PM. If they take three 15-minute breaks and one 30-minute lunch break, what percentage of their shift is break time? 👷",
        options: [
            "15.38%",
            "12.5%",
            "17.5%",
            "20%"
        ],
        correctAnswer: "15.38%",
        explanation: "Total shift = 8.5 hours = 510 minutes. Break time = 3×15 + 30 = 75 minutes. (75/510)×100 = 15.38%.",
        wrongAnswerExplanations: {
            "12.5%": "This underestimates the break percentage.",
            "17.5%": "This overestimates the break percentage.",
            "20%": "This significantly overestimates the break percentage."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 