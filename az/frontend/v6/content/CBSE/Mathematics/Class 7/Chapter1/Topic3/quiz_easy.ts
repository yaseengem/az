import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch1_t3_qe1',
        type: "mcq",
        question: "If the temperature drops from 15°C to -3°C, what is the temperature change?",
        options: ["12°C increase", "18°C decrease", "12°C decrease", "18°C increase"],
        correctAnswer: "18°C decrease",
        explanation: "The temperature change is 15 - (-3) = 18°C decrease. A drop in temperature is represented by a negative change. ❄️",
        wrongAnswerExplanations: {
            "12°C increase": "The temperature decreased, not increased.",
            "12°C decrease": "The calculation is incorrect. The difference is 18°C.",
            "18°C increase": "The temperature decreased, not increased."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t3_qe2',
        type: "mcq",
        question: "A submarine is at 200m below sea level and rises 150m. What is its new position?",
        options: ["-350m", "-50m", "50m", "350m"],
        correctAnswer: "-50m",
        explanation: "The submarine's new position is -200m + 150m = -50m. It's still below sea level. 🚢",
        wrongAnswerExplanations: {
            "-350m": "This would be going deeper, not rising.",
            "50m": "The submarine is still below sea level.",
            "350m": "This is above sea level, but the submarine is still below."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t3_qe3',
        type: "mcq",
        question: "If you have ₹500 in your account and withdraw ₹700, what is your new balance?",
        options: ["₹1200", "₹200", "-₹200", "₹0"],
        correctAnswer: "-₹200",
        explanation: "The new balance is ₹500 - ₹700 = -₹200, indicating an overdraft. 💰",
        wrongAnswerExplanations: {
            "₹1200": "This would be adding the amounts, not subtracting.",
            "₹200": "This is the difference, not the balance.",
            "₹0": "The balance is negative, not zero."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t3_qe4',
        type: "mcq",
        question: "A football team has 15 points. They win a match (+3 points) and lose another (-1 point). What is their new total?",
        options: ["19 points", "17 points", "13 points", "11 points"],
        correctAnswer: "17 points",
        explanation: "The new total is 15 + 3 - 1 = 17 points. ⚽",
        wrongAnswerExplanations: {
            "19 points": "This would be adding all points, not subtracting the loss.",
            "13 points": "This would be subtracting both points.",
            "11 points": "This is incorrect calculation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t3_qe5',
        type: "mcq",
        question: "If it's 3 PM in Tokyo (UTC+9) and 6 AM in New York (UTC-5), what's the time difference?",
        options: ["14 hours", "12 hours", "16 hours", "18 hours"],
        correctAnswer: "14 hours",
        explanation: "The time difference is 9 - (-5) = 14 hours. ⏰",
        wrongAnswerExplanations: {
            "12 hours": "This doesn't account for both time zones correctly.",
            "16 hours": "This is incorrect calculation.",
            "18 hours": "This is incorrect calculation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t3_qe6',
        type: "mcq",
        question: "A scuba diver is at 30m below sea level and descends another 20m. What is their new position?",
        options: ["-10m", "-50m", "10m", "50m"],
        correctAnswer: "-50m",
        explanation: "The new position is -30m - 20m = -50m below sea level. 🤿",
        wrongAnswerExplanations: {
            "-10m": "This would be rising, not descending.",
            "10m": "The diver is below sea level.",
            "50m": "This is above sea level, but the diver is below."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t3_qe7',
        type: "mcq",
        question: "The temperature in a freezer is -18°C. If it rises by 5°C, what is the new temperature?",
        options: ["-23°C", "-13°C", "13°C", "23°C"],
        correctAnswer: "-13°C",
        explanation: "The new temperature is -18°C + 5°C = -13°C. ❄️",
        wrongAnswerExplanations: {
            "-23°C": "This would be getting colder, not warmer.",
            "13°C": "The temperature is still below freezing.",
            "23°C": "This is above freezing, but the freezer is still cold."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t3_qe8',
        type: "mcq",
        question: "A bank account has a balance of ₹-500. If ₹1000 is deposited, what is the new balance?",
        options: ["₹-1500", "₹-500", "₹500", "₹1500"],
        correctAnswer: "₹500",
        explanation: "The new balance is -₹500 + ₹1000 = ₹500. 💰",
        wrongAnswerExplanations: {
            "₹-1500": "This would be subtracting, not adding.",
            "₹-500": "The deposit should increase the balance.",
            "₹1500": "This is incorrect calculation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t3_qe9',
        type: "mcq",
        question: "A mountain is 2500m high and a valley is 500m below sea level. What is the difference in elevation?",
        options: ["2000m", "2500m", "3000m", "3500m"],
        correctAnswer: "3000m",
        explanation: "The difference is 2500m - (-500m) = 3000m. 🏔️",
        wrongAnswerExplanations: {
            "2000m": "This doesn't account for the valley being below sea level.",
            "2500m": "This only considers the mountain's height.",
            "3500m": "This is incorrect calculation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t3_qe10',
        type: "mcq",
        question: "A hiker starts at 200m above sea level, climbs 300m, then descends 150m. What is their final position?",
        options: ["150m", "250m", "350m", "450m"],
        correctAnswer: "350m",
        explanation: "The final position is 200m + 300m - 150m = 350m above sea level. 🥾",
        wrongAnswerExplanations: {
            "150m": "This is incorrect calculation.",
            "250m": "This is incorrect calculation.",
            "450m": "This doesn't account for the descent."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t3_qe11',
        type: "mcq",
        question: "If the temperature rises from -5°C to 8°C, what is the temperature change?",
        options: ["3°C increase", "13°C increase", "3°C decrease", "13°C decrease"],
        correctAnswer: "13°C increase",
        explanation: "The temperature change is 8 - (-5) = 13°C increase. 🌡️",
        wrongAnswerExplanations: {
            "3°C increase": "This is incorrect calculation.",
            "3°C decrease": "The temperature increased, not decreased.",
            "13°C decrease": "The temperature increased, not decreased."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t3_qe12',
        type: "mcq",
        question: "A shopkeeper has ₹1000 in his cash register. He makes sales of ₹2500 and has expenses of ₹1800. What is his final balance?",
        options: ["₹1700", "₹2700", "₹3300", "₹5300"],
        correctAnswer: "₹1700",
        explanation: "The final balance is ₹1000 + ₹2500 - ₹1800 = ₹1700. 💰",
        wrongAnswerExplanations: {
            "₹2700": "This doesn't account for the expenses.",
            "₹3300": "This is incorrect calculation.",
            "₹5300": "This is incorrect calculation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t3_qe13',
        type: "mcq",
        question: "A football team has 12 points. They lose a match (-1 point) and win another (+3 points). What is their new total?",
        options: ["8 points", "14 points", "16 points", "10 points"],
        correctAnswer: "14 points",
        explanation: "The new total is 12 - 1 + 3 = 14 points. ⚽",
        wrongAnswerExplanations: {
            "8 points": "This is incorrect calculation.",
            "16 points": "This is incorrect calculation.",
            "10 points": "This is incorrect calculation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t3_qe14',
        type: "mcq",
        question: "If you have ₹-200 in your account and deposit ₹500, what is your new balance?",
        options: ["₹-700", "₹-200", "₹300", "₹700"],
        correctAnswer: "₹300",
        explanation: "The new balance is -₹200 + ₹500 = ₹300. 💰",
        wrongAnswerExplanations: {
            "₹-700": "This would be subtracting, not adding.",
            "₹-200": "The deposit should increase the balance.",
            "₹700": "This is incorrect calculation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t3_qe15',
        type: "mcq",
        question: "A submarine is at 150m below sea level and rises 75m. What is its new position?",
        options: ["-225m", "-75m", "75m", "225m"],
        correctAnswer: "-75m",
        explanation: "The new position is -150m + 75m = -75m below sea level. 🚢",
        wrongAnswerExplanations: {
            "-225m": "This would be going deeper, not rising.",
            "75m": "The submarine is still below sea level.",
            "225m": "This is above sea level, but the submarine is still below."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t3_qe16',
        type: "mcq",
        question: "The temperature in a city was -5°C in the morning and rose to 8°C in the afternoon. What was the temperature change?",
        options: ["3°C increase", "13°C increase", "3°C decrease", "13°C decrease"],
        correctAnswer: "13°C increase",
        explanation: "The temperature change is 8 - (-5) = 13°C increase. 🌡️",
        wrongAnswerExplanations: {
            "3°C increase": "This is incorrect calculation.",
            "3°C decrease": "The temperature increased, not decreased.",
            "13°C decrease": "The temperature increased, not decreased."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t3_qe17',
        type: "mcq",
        question: "A hiker starts at 100m above sea level, climbs 200m, then descends 50m. What is their final position?",
        options: ["150m", "250m", "350m", "450m"],
        correctAnswer: "250m",
        explanation: "The final position is 100m + 200m - 50m = 250m above sea level. 🥾",
        wrongAnswerExplanations: {
            "150m": "This is incorrect calculation.",
            "350m": "This doesn't account for the descent.",
            "450m": "This is incorrect calculation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t3_qe18',
        type: "mcq",
        question: "If the temperature drops from 20°C to -10°C, what is the temperature change?",
        options: ["10°C increase", "30°C decrease", "10°C decrease", "30°C increase"],
        correctAnswer: "30°C decrease",
        explanation: "The temperature change is 20 - (-10) = 30°C decrease. ❄️",
        wrongAnswerExplanations: {
            "10°C increase": "The temperature decreased, not increased.",
            "10°C decrease": "This is incorrect calculation.",
            "30°C increase": "The temperature decreased, not increased."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t3_qe19',
        type: "mcq",
        question: "A shopkeeper has ₹500 in his cash register. He makes sales of ₹1500 and has expenses of ₹800. What is his final balance?",
        options: ["₹1200", "₹2200", "₹2800", "₹3800"],
        correctAnswer: "₹1200",
        explanation: "The final balance is ₹500 + ₹1500 - ₹800 = ₹1200. 💰",
        wrongAnswerExplanations: {
            "₹2200": "This doesn't account for the expenses.",
            "₹2800": "This is incorrect calculation.",
            "₹3800": "This is incorrect calculation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t3_qe20',
        type: "mcq",
        question: "A football team has 10 points. They win a match (+3 points) and lose another (-1 point). What is their new total?",
        options: ["6 points", "12 points", "14 points", "8 points"],
        correctAnswer: "12 points",
        explanation: "The new total is 10 + 3 - 1 = 12 points. ⚽",
        wrongAnswerExplanations: {
            "6 points": "This is incorrect calculation.",
            "14 points": "This doesn't account for the loss.",
            "8 points": "This is incorrect calculation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 