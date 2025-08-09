import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch12_t2_qm1',
        type: "mcq",
        question: "If 12 workers can build a wall in 8 days, how many workers are needed to build the same wall in 6 days?",
        options: ["14 workers", "16 workers", "18 workers", "20 workers"],
        correctAnswer: "16 workers",
        explanation: "Total work = 12 workers × 8 days = 96 worker-days. Workers needed = 96 ÷ 6 = 16 workers. 🏗️",
        wrongAnswerExplanations: {
            "14 workers": "This would take about 6.86 days, not 6 days.",
            "18 workers": "This would take about 5.33 days, not 6 days.",
            "20 workers": "This would take 4.8 days, not 6 days."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t2_qm2',
        type: "mcq",
        question: "If a car travels 420 km in 7 hours, how long will it take to travel 600 km at the same speed?",
        options: ["8 hours", "9 hours", "10 hours", "11 hours"],
        correctAnswer: "10 hours",
        explanation: "Speed = 420 km ÷ 7 hours = 60 km/h. Time = 600 km ÷ 60 km/h = 10 hours. 🚗",
        wrongAnswerExplanations: {
            "8 hours": "This would cover 480 km, not 600 km.",
            "9 hours": "This would cover 540 km, not 600 km.",
            "11 hours": "This would cover 660 km, not 600 km."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t2_qm3',
        type: "mcq",
        question: "If 15 kg of rice costs ₹750, how much rice can be bought for ₹1200?",
        options: ["22 kg", "24 kg", "26 kg", "28 kg"],
        correctAnswer: "24 kg",
        explanation: "Cost of 1 kg = ₹750 ÷ 15 = ₹50. Rice for ₹1200 = ₹1200 ÷ ₹50 = 24 kg. 🍚",
        wrongAnswerExplanations: {
            "22 kg": "This would cost ₹1100, not ₹1200.",
            "26 kg": "This would cost ₹1300, not ₹1200.",
            "28 kg": "This would cost ₹1400, not ₹1200."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t2_qm4',
        type: "mcq",
        question: "If 8 machines can produce 400 items in 5 days, how many items can 12 machines produce in 6 days?",
        options: ["600 items", "720 items", "800 items", "900 items"],
        correctAnswer: "720 items",
        explanation: "1 machine in 1 day = 400 ÷ (8 × 5) = 10 items. 12 machines in 6 days = 10 × 12 × 6 = 720 items. 🏭",
        wrongAnswerExplanations: {
            "600 items": "This would be for 10 machines in 6 days.",
            "800 items": "This would be for 10 machines in 8 days.",
            "900 items": "This would be for 15 machines in 6 days."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t2_qm5',
        type: "mcq",
        question: "If 5 workers can complete a job in 12 days, how many additional workers are needed to complete it in 8 days?",
        options: ["2 workers", "2.5 workers", "3 workers", "3.5 workers"],
        correctAnswer: "2.5 workers",
        explanation: "Total work = 5 × 12 = 60 worker-days. Workers needed = 60 ÷ 8 = 7.5. Additional workers = 7.5 - 5 = 2.5. 👷",
        wrongAnswerExplanations: {
            "2 workers": "This would take 8.57 days, not 8 days.",
            "3 workers": "This would take 7.5 days, not 8 days.",
            "3.5 workers": "This would take 7.06 days, not 8 days."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t2_qm6',
        type: "mcq",
        question: "If a train travels 540 km in 6 hours, how much distance will it cover in 8 hours at the same speed?",
        options: ["680 km", "700 km", "720 km", "740 km"],
        correctAnswer: "720 km",
        explanation: "Speed = 540 km ÷ 6 hours = 90 km/h. Distance = 90 km/h × 8 = 720 km. 🚂",
        wrongAnswerExplanations: {
            "680 km": "This would require a speed of 85 km/h.",
            "700 km": "This would require a speed of 87.5 km/h.",
            "740 km": "This would require a speed of 92.5 km/h."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t2_qm7',
        type: "mcq",
        question: "If 9 kg of sugar costs ₹360, how much sugar can be bought for ₹560?",
        options: ["12 kg", "14 kg", "16 kg", "18 kg"],
        correctAnswer: "14 kg",
        explanation: "Cost of 1 kg = ₹360 ÷ 9 = ₹40. Sugar for ₹560 = ₹560 ÷ ₹40 = 14 kg. 🍬",
        wrongAnswerExplanations: {
            "12 kg": "This would cost ₹480, not ₹560.",
            "16 kg": "This would cost ₹640, not ₹560.",
            "18 kg": "This would cost ₹720, not ₹560."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t2_qm8',
        type: "mcq",
        question: "If 6 pumps can fill a tank in 8 hours, how many pumps are needed to fill it in 6 hours?",
        options: ["7 pumps", "8 pumps", "9 pumps", "10 pumps"],
        correctAnswer: "8 pumps",
        explanation: "Total work = 6 pumps × 8 hours = 48 pump-hours. Pumps needed = 48 ÷ 6 = 8 pumps. ⛽",
        wrongAnswerExplanations: {
            "7 pumps": "This would take 6.86 hours, not 6 hours.",
            "9 pumps": "This would take 5.33 hours, not 6 hours.",
            "10 pumps": "This would take 4.8 hours, not 6 hours."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t2_qm9',
        type: "mcq",
        question: "If 12 workers can build a wall in 10 days, how many days will 8 workers take to build the same wall?",
        options: ["12 days", "14 days", "15 days", "16 days"],
        correctAnswer: "15 days",
        explanation: "Total work = 12 workers × 10 days = 120 worker-days. Time for 8 workers = 120 ÷ 8 = 15 days. 🏗️",
        wrongAnswerExplanations: {
            "12 days": "This would require 10 workers, not 8 workers.",
            "14 days": "This would require 8.57 workers, not 8 workers.",
            "16 days": "This would require 7.5 workers, not 8 workers."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t2_qm10',
        type: "mcq",
        question: "If a car travels 480 km in 8 hours, how long will it take to travel 720 km at the same speed?",
        options: ["10 hours", "11 hours", "12 hours", "13 hours"],
        correctAnswer: "12 hours",
        explanation: "Speed = 480 km ÷ 8 hours = 60 km/h. Time = 720 km ÷ 60 km/h = 12 hours. 🚗",
        wrongAnswerExplanations: {
            "10 hours": "This would cover 600 km, not 720 km.",
            "11 hours": "This would cover 660 km, not 720 km.",
            "13 hours": "This would cover 780 km, not 720 km."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t2_qm11',
        type: "mcq",
        question: "If 10 kg of rice costs ₹500, how much rice can be bought for ₹800?",
        options: ["14 kg", "16 kg", "18 kg", "20 kg"],
        correctAnswer: "16 kg",
        explanation: "Cost of 1 kg = ₹500 ÷ 10 = ₹50. Rice for ₹800 = ₹800 ÷ ₹50 = 16 kg. 🍚",
        wrongAnswerExplanations: {
            "14 kg": "This would cost ₹700, not ₹800.",
            "18 kg": "This would cost ₹900, not ₹800.",
            "20 kg": "This would cost ₹1000, not ₹800."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t2_qm12',
        type: "mcq",
        question: "If 15 workers can complete a job in 8 days, how many additional workers are needed to complete it in 6 days?",
        options: ["3 workers", "4 workers", "5 workers", "6 workers"],
        correctAnswer: "5 workers",
        explanation: "Total work = 15 × 8 = 120 worker-days. Workers needed = 120 ÷ 6 = 20. Additional workers = 20 - 15 = 5. 👷",
        wrongAnswerExplanations: {
            "3 workers": "This would take 6.67 days, not 6 days.",
            "4 workers": "This would take 6.32 days, not 6 days.",
            "6 workers": "This would take 5.71 days, not 6 days."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t2_qm13',
        type: "mcq",
        question: "If a train travels 600 km in 8 hours, how much distance will it cover in 10 hours at the same speed?",
        options: ["700 km", "750 km", "800 km", "850 km"],
        correctAnswer: "750 km",
        explanation: "Speed = 600 km ÷ 8 hours = 75 km/h. Distance = 75 km/h × 10 = 750 km. 🚂",
        wrongAnswerExplanations: {
            "700 km": "This would require a speed of 70 km/h.",
            "800 km": "This would require a speed of 80 km/h.",
            "850 km": "This would require a speed of 85 km/h."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t2_qm14',
        type: "mcq",
        question: "If 8 kg of sugar costs ₹320, how much sugar can be bought for ₹600?",
        options: ["12 kg", "14 kg", "15 kg", "16 kg"],
        correctAnswer: "15 kg",
        explanation: "Cost of 1 kg = ₹320 ÷ 8 = ₹40. Sugar for ₹600 = ₹600 ÷ ₹40 = 15 kg. 🍬",
        wrongAnswerExplanations: {
            "12 kg": "This would cost ₹480, not ₹600.",
            "14 kg": "This would cost ₹560, not ₹600.",
            "16 kg": "This would cost ₹640, not ₹600."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t2_qm15',
        type: "mcq",
        question: "If 10 pumps can fill a tank in 6 hours, how many pumps are needed to fill it in 4 hours?",
        options: ["12 pumps", "14 pumps", "15 pumps", "16 pumps"],
        correctAnswer: "15 pumps",
        explanation: "Total work = 10 pumps × 6 hours = 60 pump-hours. Pumps needed = 60 ÷ 4 = 15 pumps. ⛽",
        wrongAnswerExplanations: {
            "12 pumps": "This would take 5 hours, not 4 hours.",
            "14 pumps": "This would take 4.29 hours, not 4 hours.",
            "16 pumps": "This would take 3.75 hours, not 4 hours."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t2_qm16',
        type: "mcq",
        question: "If 16 workers can build a wall in 9 days, how many days will 12 workers take to build the same wall?",
        options: ["10 days", "11 days", "12 days", "13 days"],
        correctAnswer: "12 days",
        explanation: "Total work = 16 workers × 9 days = 144 worker-days. Time for 12 workers = 144 ÷ 12 = 12 days. 🏗️",
        wrongAnswerExplanations: {
            "10 days": "This would require 14.4 workers, not 12 workers.",
            "11 days": "This would require 13.09 workers, not 12 workers.",
            "13 days": "This would require 11.08 workers, not 12 workers."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t2_qm17',
        type: "mcq",
        question: "If a car travels 540 km in 9 hours, how long will it take to travel 840 km at the same speed?",
        options: ["12 hours", "13 hours", "14 hours", "15 hours"],
        correctAnswer: "14 hours",
        explanation: "Speed = 540 km ÷ 9 hours = 60 km/h. Time = 840 km ÷ 60 km/h = 14 hours. 🚗",
        wrongAnswerExplanations: {
            "12 hours": "This would cover 720 km, not 840 km.",
            "13 hours": "This would cover 780 km, not 840 km.",
            "15 hours": "This would cover 900 km, not 840 km."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t2_qm18',
        type: "mcq",
        question: "If 12 kg of rice costs ₹600, how much rice can be bought for ₹900?",
        options: ["16 kg", "17 kg", "18 kg", "19 kg"],
        correctAnswer: "18 kg",
        explanation: "Cost of 1 kg = ₹600 ÷ 12 = ₹50. Rice for ₹900 = ₹900 ÷ ₹50 = 18 kg. 🍚",
        wrongAnswerExplanations: {
            "16 kg": "This would cost ₹800, not ₹900.",
            "17 kg": "This would cost ₹850, not ₹900.",
            "19 kg": "This would cost ₹950, not ₹900."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t2_qm19',
        type: "mcq",
        question: "If 18 workers can complete a job in 10 days, how many additional workers are needed to complete it in 6 days?",
        options: ["8 workers", "10 workers", "12 workers", "14 workers"],
        correctAnswer: "12 workers",
        explanation: "Total work = 18 × 10 = 180 worker-days. Workers needed = 180 ÷ 6 = 30. Additional workers = 30 - 18 = 12. 👷",
        wrongAnswerExplanations: {
            "8 workers": "This would take 6.92 days, not 6 days.",
            "10 workers": "This would take 6.43 days, not 6 days.",
            "14 workers": "This would take 5.63 days, not 6 days."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t2_qm20',
        type: "mcq",
        question: "If a train travels 720 km in 12 hours, how much distance will it cover in 15 hours at the same speed?",
        options: ["850 km", "900 km", "950 km", "1000 km"],
        correctAnswer: "900 km",
        explanation: "Speed = 720 km ÷ 12 hours = 60 km/h. Distance = 60 km/h × 15 = 900 km. 🚂",
        wrongAnswerExplanations: {
            "850 km": "This would require a speed of 56.67 km/h.",
            "950 km": "This would require a speed of 63.33 km/h.",
            "1000 km": "This would require a speed of 66.67 km/h."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 