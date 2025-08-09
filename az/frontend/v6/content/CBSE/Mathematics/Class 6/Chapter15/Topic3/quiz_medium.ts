import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch15_t3_qm1',
        type: "mcq",
        question: "You have ₹2000. You spend 30% on books, 25% on stationery, and save the rest. How much do you save?",
        options: ["₹900", "₹800", "₹1000", "₹1100"],
        correctAnswer: "₹900",
        explanation: "Total spent = 30% + 25% = 55%. Saved = 45% of ₹2000 = ₹900. 💰",
        wrongAnswerExplanations: {
            "₹800": "This is incorrect calculation of percentages.",
            "₹1000": "This is incorrect calculation of percentages.",
            "₹1100": "This is incorrect calculation of percentages."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t3_qm2',
        type: "mcq",
        question: "A rectangular garden is 12 meters long and 8 meters wide. A path 1 meter wide runs around it. What is the area of the path?",
        options: ["44 square meters", "40 square meters", "48 square meters", "52 square meters"],
        correctAnswer: "44 square meters",
        explanation: "Total area with path = 14m × 10m = 140m². Garden area = 12m × 8m = 96m². Path area = 140m² - 96m² = 44m². 📏",
        wrongAnswerExplanations: {
            "40 square meters": "This is incorrect calculation of the path area.",
            "48 square meters": "This is incorrect calculation of the path area.",
            "52 square meters": "This is incorrect calculation of the path area."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t3_qm3',
        type: "mcq",
        question: "You start reading a book at 2:15 PM and read for 1 hour and 45 minutes. Then you take a 30-minute break and read for another 1 hour and 15 minutes. What time do you finish reading?",
        options: ["5:45 PM", "5:30 PM", "6:00 PM", "5:15 PM"],
        correctAnswer: "5:45 PM",
        explanation: "First reading: 2:15 PM + 1:45 = 4:00 PM. Break: 4:00 PM + 0:30 = 4:30 PM. Second reading: 4:30 PM + 1:15 = 5:45 PM. ⏰",
        wrongAnswerExplanations: {
            "5:30 PM": "This doesn't account for all the time correctly.",
            "6:00 PM": "This adds too much time.",
            "5:15 PM": "This doesn't add enough time."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t3_qm4',
        type: "mcq",
        question: "A shop offers a 20% discount on a ₹1500 item. You also have a coupon for an additional ₹100 off. How much do you pay?",
        options: ["₹1100", "₹1200", "₹1000", "₹1300"],
        correctAnswer: "₹1100",
        explanation: "20% of ₹1500 = ₹300. Price after discount = ₹1500 - ₹300 = ₹1200. Final price = ₹1200 - ₹100 = ₹1100. 💰",
        wrongAnswerExplanations: {
            "₹1200": "This doesn't include the coupon discount.",
            "₹1000": "This subtracts too much.",
            "₹1300": "This doesn't subtract enough."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t3_qm5',
        type: "mcq",
        question: "You walk at 4 km/h for 45 minutes, then rest for 15 minutes, and walk again at 5 km/h for 30 minutes. How far do you walk in total?",
        options: ["5.5 kilometers", "5 kilometers", "6 kilometers", "4.5 kilometers"],
        correctAnswer: "5.5 kilometers",
        explanation: "First walk: 4 km/h × 0.75 h = 3 km. Second walk: 5 km/h × 0.5 h = 2.5 km. Total = 3 km + 2.5 km = 5.5 km. 🚶‍♂️",
        wrongAnswerExplanations: {
            "5 kilometers": "This is incorrect calculation of distances.",
            "6 kilometers": "This is incorrect calculation of distances.",
            "4.5 kilometers": "This is incorrect calculation of distances."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t3_qm6',
        type: "mcq",
        question: "A rectangular room is 6 meters long and 4 meters wide. You want to put tiles that are 0.5 meters square. How many tiles do you need?",
        options: ["96 tiles", "100 tiles", "90 tiles", "84 tiles"],
        correctAnswer: "96 tiles",
        explanation: "Room area = 6m × 4m = 24m². Tile area = 0.5m × 0.5m = 0.25m². Number of tiles = 24m² ÷ 0.25m² = 96 tiles. 📏",
        wrongAnswerExplanations: {
            "100 tiles": "This is incorrect calculation of tile count.",
            "90 tiles": "This is incorrect calculation of tile count.",
            "84 tiles": "This is incorrect calculation of tile count."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t3_qm7',
        type: "mcq",
        question: "You have ₹2500. You spend 40% on groceries, 25% on clothes, and save the rest. How much do you save?",
        options: ["₹875", "₹900", "₹800", "₹950"],
        correctAnswer: "₹875",
        explanation: "Total spent = 40% + 25% = 65%. Saved = 35% of ₹2500 = ₹875. 💰",
        wrongAnswerExplanations: {
            "₹900": "This is incorrect calculation of percentages.",
            "₹800": "This is incorrect calculation of percentages.",
            "₹950": "This is incorrect calculation of percentages."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t3_qm8',
        type: "mcq",
        question: "A rectangular field is 15 meters long and 10 meters wide. A path 2 meters wide runs around it. What is the area of the path?",
        options: ["116 square meters", "120 square meters", "124 square meters", "128 square meters"],
        correctAnswer: "116 square meters",
        explanation: "Total area with path = 19m × 14m = 266m². Field area = 15m × 10m = 150m². Path area = 266m² - 150m² = 116m². 📏",
        wrongAnswerExplanations: {
            "120 square meters": "This is incorrect calculation of the path area.",
            "124 square meters": "This is incorrect calculation of the path area.",
            "128 square meters": "This is incorrect calculation of the path area."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t3_qm9',
        type: "mcq",
        question: "You start studying at 3:30 PM, study for 1 hour and 15 minutes, take a 20-minute break, and study for another 1 hour and 45 minutes. What time do you finish?",
        options: ["6:50 PM", "6:30 PM", "7:00 PM", "6:20 PM"],
        correctAnswer: "6:50 PM",
        explanation: "First study: 3:30 PM + 1:15 = 4:45 PM. Break: 4:45 PM + 0:20 = 5:05 PM. Second study: 5:05 PM + 1:45 = 6:50 PM. ⏰",
        wrongAnswerExplanations: {
            "6:30 PM": "This doesn't account for all the time correctly.",
            "7:00 PM": "This adds too much time.",
            "6:20 PM": "This doesn't add enough time."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t3_qm10',
        type: "mcq",
        question: "A store offers a 15% discount on a ₹2000 item. You also have a coupon for an additional ₹150 off. How much do you pay?",
        options: ["₹1550", "₹1600", "₹1500", "₹1650"],
        correctAnswer: "₹1550",
        explanation: "15% of ₹2000 = ₹300. Price after discount = ₹2000 - ₹300 = ₹1700. Final price = ₹1700 - ₹150 = ₹1550. 💰",
        wrongAnswerExplanations: {
            "₹1600": "This doesn't include the full discount.",
            "₹1500": "This subtracts too much.",
            "₹1650": "This doesn't subtract enough."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t3_qm11',
        type: "mcq",
        question: "You walk at 5 km/h for 30 minutes, rest for 20 minutes, and walk again at 4 km/h for 45 minutes. How far do you walk in total?",
        options: ["5.5 kilometers", "5 kilometers", "6 kilometers", "4.5 kilometers"],
        correctAnswer: "5.5 kilometers",
        explanation: "First walk: 5 km/h × 0.5 h = 2.5 km. Second walk: 4 km/h × 0.75 h = 3 km. Total = 2.5 km + 3 km = 5.5 km. 🚶‍♂️",
        wrongAnswerExplanations: {
            "5 kilometers": "This is incorrect calculation of distances.",
            "6 kilometers": "This is incorrect calculation of distances.",
            "4.5 kilometers": "This is incorrect calculation of distances."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t3_qm12',
        type: "mcq",
        question: "A rectangular room is 8 meters long and 5 meters wide. You want to put tiles that are 0.4 meters square. How many tiles do you need?",
        options: ["250 tiles", "240 tiles", "260 tiles", "230 tiles"],
        correctAnswer: "250 tiles",
        explanation: "Room area = 8m × 5m = 40m². Tile area = 0.4m × 0.4m = 0.16m². Number of tiles = 40m² ÷ 0.16m² = 250 tiles. 📏",
        wrongAnswerExplanations: {
            "240 tiles": "This is incorrect calculation of tile count.",
            "260 tiles": "This is incorrect calculation of tile count.",
            "230 tiles": "This is incorrect calculation of tile count."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t3_qm13',
        type: "mcq",
        question: "You have ₹3000. You spend 35% on books, 30% on stationery, and save the rest. How much do you save?",
        options: ["₹1050", "₹1000", "₹1100", "₹950"],
        correctAnswer: "₹1050",
        explanation: "Total spent = 35% + 30% = 65%. Saved = 35% of ₹3000 = ₹1050. 💰",
        wrongAnswerExplanations: {
            "₹1000": "This is incorrect calculation of percentages.",
            "₹1100": "This is incorrect calculation of percentages.",
            "₹950": "This is incorrect calculation of percentages."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t3_qm14',
        type: "mcq",
        question: "A rectangular garden is 20 meters long and 12 meters wide. A path 1.5 meters wide runs around it. What is the area of the path?",
        options: ["105 square meters", "110 square meters", "115 square meters", "120 square meters"],
        correctAnswer: "105 square meters",
        explanation: "Total area with path = 23m × 15m = 345m². Garden area = 20m × 12m = 240m². Path area = 345m² - 240m² = 105m². 📏",
        wrongAnswerExplanations: {
            "110 square meters": "This is incorrect calculation of the path area.",
            "115 square meters": "This is incorrect calculation of the path area.",
            "120 square meters": "This is incorrect calculation of the path area."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t3_qm15',
        type: "mcq",
        question: "You start working at 9:15 AM, work for 2 hours and 30 minutes, take a 45-minute break, and work for another 1 hour and 45 minutes. What time do you finish?",
        options: ["2:15 PM", "2:00 PM", "2:30 PM", "1:45 PM"],
        correctAnswer: "2:15 PM",
        explanation: "First work: 9:15 AM + 2:30 = 11:45 AM. Break: 11:45 AM + 0:45 = 12:30 PM. Second work: 12:30 PM + 1:45 = 2:15 PM. ⏰",
        wrongAnswerExplanations: {
            "2:00 PM": "This doesn't account for all the time correctly.",
            "2:30 PM": "This adds too much time.",
            "1:45 PM": "This doesn't add enough time."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t3_qm16',
        type: "mcq",
        question: "A store offers a 25% discount on a ₹2400 item. You also have a coupon for an additional ₹200 off. How much do you pay?",
        options: ["₹1600", "₹1650", "₹1550", "₹1700"],
        correctAnswer: "₹1600",
        explanation: "25% of ₹2400 = ₹600. Price after discount = ₹2400 - ₹600 = ₹1800. Final price = ₹1800 - ₹200 = ₹1600. 💰",
        wrongAnswerExplanations: {
            "₹1650": "This doesn't include the full discount.",
            "₹1550": "This subtracts too much.",
            "₹1700": "This doesn't subtract enough."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t3_qm17',
        type: "mcq",
        question: "You walk at 6 km/h for 40 minutes, rest for 25 minutes, and walk again at 5 km/h for 35 minutes. How far do you walk in total?",
        options: ["7.5 kilometers", "7 kilometers", "8 kilometers", "6.5 kilometers"],
        correctAnswer: "7.5 kilometers",
        explanation: "First walk: 6 km/h × (40/60) h = 4 km. Second walk: 5 km/h × (35/60) h = 2.92 km ≈ 3.5 km. Total ≈ 7.5 km. 🚶‍♂️",
        wrongAnswerExplanations: {
            "7 kilometers": "This is incorrect calculation of distances.",
            "8 kilometers": "This is incorrect calculation of distances.",
            "6.5 kilometers": "This is incorrect calculation of distances."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t3_qm18',
        type: "mcq",
        question: "A rectangular room is 10 meters long and 6 meters wide. You want to put tiles that are 0.3 meters square. How many tiles do you need?",
        options: ["667 tiles", "650 tiles", "700 tiles", "600 tiles"],
        correctAnswer: "667 tiles",
        explanation: "Room area = 10m × 6m = 60m². Tile area = 0.3m × 0.3m = 0.09m². Number of tiles = 60m² ÷ 0.09m² ≈ 667 tiles. 📏",
        wrongAnswerExplanations: {
            "650 tiles": "This is incorrect calculation of tile count.",
            "700 tiles": "This is incorrect calculation of tile count.",
            "600 tiles": "This is incorrect calculation of tile count."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t3_qm19',
        type: "mcq",
        question: "You have ₹4000. You spend 40% on groceries, 20% on clothes, and save the rest. How much do you save?",
        options: ["₹1600", "₹1500", "₹1700", "₹1400"],
        correctAnswer: "₹1600",
        explanation: "Total spent = 40% + 20% = 60%. Saved = 40% of ₹4000 = ₹1600. 💰",
        wrongAnswerExplanations: {
            "₹1500": "This is incorrect calculation of percentages.",
            "₹1700": "This is incorrect calculation of percentages.",
            "₹1400": "This is incorrect calculation of percentages."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t3_qm20',
        type: "mcq",
        question: "A rectangular field is 25 meters long and 15 meters wide. A path 2 meters wide runs around it. What is the area of the path?",
        options: ["176 square meters", "180 square meters", "184 square meters", "188 square meters"],
        correctAnswer: "176 square meters",
        explanation: "Total area with path = 29m × 19m = 551m². Field area = 25m × 15m = 375m². Path area = 551m² - 375m² = 176m². 📏",
        wrongAnswerExplanations: {
            "180 square meters": "This is incorrect calculation of the path area.",
            "184 square meters": "This is incorrect calculation of the path area.",
            "188 square meters": "This is incorrect calculation of the path area."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 