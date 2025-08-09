import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch17_t3_qe1',
        type: "mcq",
        question: "Which unit of time would be most appropriate for measuring the duration of a school day? ⏰",
        options: [
            "Minutes",
            "Hours",
            "Seconds",
            "Days"
        ],
        correctAnswer: "Hours",
        explanation: "School days are typically measured in hours as it's the most practical unit for periods spanning several hours.",
        wrongAnswerExplanations: {
            "Minutes": "Minutes would give too large a number for a school day.",
            "Seconds": "Seconds would give an impractically large number.",
            "Days": "Days would be too large as a unit for part of a day."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch17_t3_qe2',
        type: "mcq",
        question: "What is the most appropriate unit to measure the time taken to complete a marathon? 🏃",
        options: [
            "Hours and minutes",
            "Days",
            "Seconds only",
            "Weeks"
        ],
        correctAnswer: "Hours and minutes",
        explanation: "Marathons typically take a few hours to complete, so hours and minutes provide the right level of precision.",
        wrongAnswerExplanations: {
            "Days": "Days are too large for a marathon duration.",
            "Seconds only": "Seconds would give an unnecessarily large number.",
            "Weeks": "Weeks are far too large for a marathon duration."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch17_t3_qe3',
        type: "mcq",
        question: "Which time format is most appropriate for a train schedule? 🚂",
        options: [
            "24-hour format",
            "12-hour format without AM/PM",
            "Minutes past midnight",
            "Decimal hours"
        ],
        correctAnswer: "24-hour format",
        explanation: "24-hour format eliminates confusion between AM and PM, making it the standard for transportation schedules.",
        wrongAnswerExplanations: {
            "12-hour format without AM/PM": "This would be ambiguous without AM/PM specification.",
            "Minutes past midnight": "This would be impractical for daily schedules.",
            "Decimal hours": "This is not a standard time format for schedules."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch17_t3_qe4',
        type: "mcq",
        question: "What is the best way to represent the duration of a movie? 🎬",
        options: [
            "Hours and minutes",
            "Minutes only",
            "Seconds",
            "Hours only"
        ],
        correctAnswer: "Hours and minutes",
        explanation: "Movies typically last between 1-3 hours, so hours and minutes (like 2h 15min) provide the most practical representation.",
        wrongAnswerExplanations: {
            "Minutes only": "Using only minutes for longer movies can be confusing.",
            "Seconds": "Seconds would give an unnecessarily large number.",
            "Hours only": "Hours only wouldn't provide enough precision."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch17_t3_qe5',
        type: "mcq",
        question: "Which unit is most appropriate for measuring cooking time of instant noodles? 🍜",
        options: [
            "Minutes",
            "Hours",
            "Seconds",
            "Days"
        ],
        correctAnswer: "Minutes",
        explanation: "Instant noodles typically cook in 2-3 minutes, making minutes the most appropriate unit of measurement.",
        wrongAnswerExplanations: {
            "Hours": "Hours are too large for cooking instant noodles.",
            "Seconds": "While accurate, seconds are too precise for this cooking time.",
            "Days": "Days are far too large for cooking time."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch17_t3_qe6',
        type: "mcq",
        question: "What's the most suitable unit for expressing a flight duration? ✈️",
        options: [
            "Hours and minutes",
            "Days",
            "Minutes only",
            "Weeks"
        ],
        correctAnswer: "Hours and minutes",
        explanation: "Flight durations are typically several hours long, so hours and minutes provide the right level of detail.",
        wrongAnswerExplanations: {
            "Days": "Days are too large for most flight durations.",
            "Minutes only": "Minutes only would give unnecessarily large numbers.",
            "Weeks": "Weeks are far too large for flight durations."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch17_t3_qe7',
        type: "mcq",
        question: "Which time measurement would be most appropriate for a lunch break? 🍽️",
        options: [
            "Minutes",
            "Hours",
            "Seconds",
            "Days"
        ],
        correctAnswer: "Minutes",
        explanation: "Lunch breaks are typically 30-60 minutes, making minutes the most practical unit of measurement.",
        wrongAnswerExplanations: {
            "Hours": "Hours are too large for a typical lunch break.",
            "Seconds": "Seconds would give an unnecessarily large number.",
            "Days": "Days are far too large for a lunch break."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch17_t3_qe8',
        type: "mcq",
        question: "What's the most appropriate way to measure the time between two bus services? 🚌",
        options: [
            "Minutes",
            "Hours",
            "Days",
            "Weeks"
        ],
        correctAnswer: "Minutes",
        explanation: "Bus frequencies are typically measured in minutes (like every 15 minutes) for practical scheduling.",
        wrongAnswerExplanations: {
            "Hours": "Hours are too large for typical bus frequencies.",
            "Days": "Days are far too large for bus frequencies.",
            "Weeks": "Weeks are far too large for bus frequencies."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch17_t3_qe9',
        type: "mcq",
        question: "Which unit is most suitable for measuring the duration of a phone call? 📱",
        options: [
            "Minutes and seconds",
            "Hours only",
            "Days",
            "Weeks"
        ],
        correctAnswer: "Minutes and seconds",
        explanation: "Phone calls are typically measured in minutes and seconds for accurate billing and duration tracking.",
        wrongAnswerExplanations: {
            "Hours only": "Hours are too large for typical phone calls.",
            "Days": "Days are far too large for phone calls.",
            "Weeks": "Weeks are far too large for phone calls."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch17_t3_qe10',
        type: "mcq",
        question: "What's the most appropriate unit for measuring time spent on homework? 📚",
        options: [
            "Hours",
            "Days",
            "Seconds",
            "Weeks"
        ],
        correctAnswer: "Hours",
        explanation: "Homework typically takes a few hours, making hours the most practical unit for measurement.",
        wrongAnswerExplanations: {
            "Days": "Days are too large for daily homework.",
            "Seconds": "Seconds would give an unnecessarily large number.",
            "Weeks": "Weeks are far too large for homework time."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch17_t3_qe11',
        type: "mcq",
        question: "Which time format is best for a digital alarm clock? ⏰",
        options: [
            "12-hour format with AM/PM",
            "24-hour format",
            "Minutes since midnight",
            "Decimal hours"
        ],
        correctAnswer: "12-hour format with AM/PM",
        explanation: "12-hour format with AM/PM is most familiar for personal use and easy to read at a glance.",
        wrongAnswerExplanations: {
            "24-hour format": "While accurate, it's less common for home use.",
            "Minutes since midnight": "This would be impractical for daily use.",
            "Decimal hours": "This is not a standard time format."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch17_t3_qe12',
        type: "mcq",
        question: "What's the most appropriate unit for measuring a TV show episode length? 📺",
        options: [
            "Minutes",
            "Hours",
            "Seconds",
            "Days"
        ],
        correctAnswer: "Minutes",
        explanation: "TV episodes typically run for 20-60 minutes, making minutes the most practical unit.",
        wrongAnswerExplanations: {
            "Hours": "Hours are too large for typical TV episodes.",
            "Seconds": "Seconds would give an unnecessarily large number.",
            "Days": "Days are far too large for TV episodes."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch17_t3_qe13',
        type: "mcq",
        question: "Which unit is most appropriate for measuring the time between doctor's appointments? 🏥",
        options: [
            "Weeks",
            "Minutes",
            "Hours",
            "Seconds"
        ],
        correctAnswer: "Weeks",
        explanation: "Follow-up appointments are typically scheduled in weeks or months, making weeks a practical unit.",
        wrongAnswerExplanations: {
            "Minutes": "Minutes are too small for appointment intervals.",
            "Hours": "Hours are too small for appointment intervals.",
            "Seconds": "Seconds are far too small for appointment intervals."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch17_t3_qe14',
        type: "mcq",
        question: "What's the most suitable unit for measuring a sports game duration? ⚽",
        options: [
            "Hours",
            "Days",
            "Weeks",
            "Months"
        ],
        correctAnswer: "Hours",
        explanation: "Most sports games last a few hours, making hours the most appropriate unit.",
        wrongAnswerExplanations: {
            "Days": "Days are too large for a single game.",
            "Weeks": "Weeks are far too large for a game.",
            "Months": "Months are far too large for a game."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch17_t3_qe15',
        type: "mcq",
        question: "Which unit is most appropriate for measuring time between meals? 🍳",
        options: [
            "Hours",
            "Minutes",
            "Seconds",
            "Days"
        ],
        correctAnswer: "Hours",
        explanation: "The time between meals is typically several hours, making hours the most practical unit.",
        wrongAnswerExplanations: {
            "Minutes": "Minutes would give too large a number.",
            "Seconds": "Seconds would give an impractically large number.",
            "Days": "Days are too large for time between meals."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch17_t3_qe16',
        type: "mcq",
        question: "What's the most appropriate unit for measuring a school semester? 📚",
        options: [
            "Months",
            "Days",
            "Hours",
            "Minutes"
        ],
        correctAnswer: "Months",
        explanation: "School semesters typically span several months, making months the most practical unit.",
        wrongAnswerExplanations: {
            "Days": "Days would give too large a number.",
            "Hours": "Hours would give an impractically large number.",
            "Minutes": "Minutes would give an extremely large number."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch17_t3_qe17',
        type: "mcq",
        question: "Which unit is most suitable for measuring the duration of a music track? 🎵",
        options: [
            "Minutes and seconds",
            "Hours",
            "Days",
            "Weeks"
        ],
        correctAnswer: "Minutes and seconds",
        explanation: "Songs typically last a few minutes, making minutes and seconds the most appropriate units.",
        wrongAnswerExplanations: {
            "Hours": "Hours are too large for a single song.",
            "Days": "Days are far too large for a song.",
            "Weeks": "Weeks are far too large for a song."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch17_t3_qe18',
        type: "mcq",
        question: "What's the most appropriate unit for measuring battery life of a smartphone? 📱",
        options: [
            "Hours",
            "Minutes",
            "Seconds",
            "Weeks"
        ],
        correctAnswer: "Hours",
        explanation: "Battery life typically lasts several hours, making hours the most practical unit.",
        wrongAnswerExplanations: {
            "Minutes": "Minutes would give too large a number.",
            "Seconds": "Seconds would give an impractically large number.",
            "Weeks": "Weeks are too large for battery life."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch17_t3_qe19',
        type: "mcq",
        question: "Which unit is most appropriate for measuring time between oil changes in a car? 🚗",
        options: [
            "Months",
            "Hours",
            "Minutes",
            "Seconds"
        ],
        correctAnswer: "Months",
        explanation: "Car maintenance intervals are typically measured in months, making it the most practical unit.",
        wrongAnswerExplanations: {
            "Hours": "Hours would give too large a number.",
            "Minutes": "Minutes would give an impractically large number.",
            "Seconds": "Seconds would give an extremely large number."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch17_t3_qe20',
        type: "mcq",
        question: "What's the most appropriate unit for measuring the duration of a dental cleaning? 🦷",
        options: [
            "Minutes",
            "Hours",
            "Days",
            "Weeks"
        ],
        correctAnswer: "Minutes",
        explanation: "Dental cleanings typically take 30-60 minutes, making minutes the most practical unit.",
        wrongAnswerExplanations: {
            "Hours": "Hours are too large for a typical cleaning.",
            "Days": "Days are far too large for a cleaning.",
            "Weeks": "Weeks are far too large for a cleaning."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 