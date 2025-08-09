// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 5\Chapter1\Topic1\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl5_ch1_t1_qm1',
        type: "mcq",
        question: "A fishing boat catches 2,500 kg of fish in the morning and 3,200 kg in the afternoon. What is the total catch for the day?",
        options: ["5,700 kg", "5,600 kg", "5,500 kg", "5,400 kg"],
        correctAnswer: "5,700 kg",
        explanation: "2,500 + 3,200 = 5,700 kg. This shows addition of large numbers. 🐟",
        wrongAnswerExplanations: {
            "5,600 kg": "This is incorrect. Check your addition of 2,500 and 3,200.",
            "5,500 kg": "This is incorrect. Check your addition of 2,500 and 3,200.",
            "5,400 kg": "This is incorrect. Check your addition of 2,500 and 3,200."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch1_t1_qm2',
        type: "mcq",
        question: "A boat can carry 4,500 kg. If each box weighs 75 kg, how many complete boxes can it carry?",
        options: ["60", "65", "70", "75"],
        correctAnswer: "60",
        explanation: "4,500 ÷ 75 = 60 complete boxes. This shows division with remainders. 📦",
        wrongAnswerExplanations: {
            "65": "This would exceed the boat's capacity. 65 × 75 = 4,875 kg.",
            "70": "This would exceed the boat's capacity. 70 × 75 = 5,250 kg.",
            "75": "This would exceed the boat's capacity. 75 × 75 = 5,625 kg."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch1_t1_qm3',
        type: "mcq",
        question: "A fish market sells 2,500 kg of fish at ₹180 per kg and 1,500 kg at ₹220 per kg. What is the total sales value?",
        options: ["₹750,000", "₹780,000", "₹800,000", "₹820,000"],
        correctAnswer: "₹780,000",
        explanation: "(2,500 × ₹180) + (1,500 × ₹220) = ₹450,000 + ₹330,000 = ₹780,000. 💰",
        wrongAnswerExplanations: {
            "₹750,000": "This is incorrect. Calculate both sales separately and add them.",
            "₹800,000": "This is incorrect. Calculate both sales separately and add them.",
            "₹820,000": "This is incorrect. Calculate both sales separately and add them."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl5_ch1_t1_qm4',
        type: "mcq",
        question: "A town's population increased from 25,000 to 28,500 in a year. What was the percentage increase?",
        options: ["12%", "14%", "16%", "18%"],
        correctAnswer: "14%",
        explanation: "Increase = 3,500. Percentage = (3,500 ÷ 25,000) × 100 = 14%. 👥",
        wrongAnswerExplanations: {
            "12%": "This is incorrect. Calculate the increase and divide by original population.",
            "16%": "This is incorrect. Calculate the increase and divide by original population.",
            "18%": "This is incorrect. Calculate the increase and divide by original population."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl5_ch1_t1_qm5',
        type: "mcq",
        question: "A boat travels 45 km in one hour. How far will it travel in 8 hours?",
        options: ["320 km", "340 km", "360 km", "380 km"],
        correctAnswer: "360 km",
        explanation: "45 km/h × 8 h = 360 km. This shows multiplication of large numbers. 🚢",
        wrongAnswerExplanations: {
            "320 km": "This is incorrect. Multiply 45 by 8.",
            "340 km": "This is incorrect. Multiply 45 by 8.",
            "380 km": "This is incorrect. Multiply 45 by 8."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch1_t1_qm6',
        type: "mcq",
        question: "A fishing company has 12 boats, each with a capacity of 3,500 kg. What is their total capacity?",
        options: ["40,000 kg", "41,000 kg", "42,000 kg", "43,000 kg"],
        correctAnswer: "42,000 kg",
        explanation: "12 × 3,500 = 42,000 kg. This shows multiplication of large numbers. ⚖️",
        wrongAnswerExplanations: {
            "40,000 kg": "This is incorrect. Multiply 12 by 3,500.",
            "41,000 kg": "This is incorrect. Multiply 12 by 3,500.",
            "43,000 kg": "This is incorrect. Multiply 12 by 3,500."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch1_t1_qm7',
        type: "mcq",
        question: "A fish market needs to transport 15,000 kg of fish using trucks that can carry 2,500 kg each. How many trucks are needed?",
        options: ["5", "6", "7", "8"],
        correctAnswer: "6",
        explanation: "15,000 ÷ 2,500 = 6 trucks needed. This shows division with rounding up. 🚛",
        wrongAnswerExplanations: {
            "5": "5 trucks can only carry 12,500 kg, which is not enough.",
            "7": "This is more than needed. 6 trucks can carry 15,000 kg.",
            "8": "This is more than needed. 6 trucks can carry 15,000 kg."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch1_t1_qm8',
        type: "mcq",
        question: "A fishing boat catches 3,200 kg of fish. If 25% is sold at ₹200/kg and the rest at ₹180/kg, what is the total value?",
        options: ["₹592,000", "₹594,000", "₹596,000", "₹598,000"],
        correctAnswer: "₹596,000",
        explanation: "25% = 800 kg × ₹200 = ₹160,000; 75% = 2,400 kg × ₹180 = ₹436,000; Total = ₹596,000. 💰",
        wrongAnswerExplanations: {
            "₹592,000": "This is incorrect. Calculate both portions separately and add them.",
            "₹594,000": "This is incorrect. Calculate both portions separately and add them.",
            "₹598,000": "This is incorrect. Calculate both portions separately and add them."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl5_ch1_t1_qm9',
        type: "mcq",
        question: "A town's population is 45,000. If it increases by 20% in a year, what is the new population?",
        options: ["52,000", "53,000", "54,000", "55,000"],
        correctAnswer: "54,000",
        explanation: "20% of 45,000 = 9,000; New population = 45,000 + 9,000 = 54,000. 👥",
        wrongAnswerExplanations: {
            "52,000": "This is incorrect. Calculate 20% of 45,000 and add it.",
            "53,000": "This is incorrect. Calculate 20% of 45,000 and add it.",
            "55,000": "This is incorrect. Calculate 20% of 45,000 and add it."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch1_t1_qm10',
        type: "mcq",
        question: "A boat travels 360 km in 8 hours. What is its average speed in km/h?",
        options: ["40 km/h", "42 km/h", "44 km/h", "45 km/h"],
        correctAnswer: "45 km/h",
        explanation: "360 km ÷ 8 h = 45 km/h. This shows division of large numbers. 🚢",
        wrongAnswerExplanations: {
            "40 km/h": "This is incorrect. Divide 360 by 8.",
            "42 km/h": "This is incorrect. Divide 360 by 8.",
            "44 km/h": "This is incorrect. Divide 360 by 8."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch1_t1_qm11',
        type: "mcq",
        question: "A fishing company has a total capacity of 42,000 kg. If they have 12 boats, what is the average capacity per boat?",
        options: ["3,400 kg", "3,500 kg", "3,600 kg", "3,700 kg"],
        correctAnswer: "3,500 kg",
        explanation: "42,000 ÷ 12 = 3,500 kg per boat. This shows division of large numbers. ⚖️",
        wrongAnswerExplanations: {
            "3,400 kg": "This is incorrect. Divide 42,000 by 12.",
            "3,600 kg": "This is incorrect. Divide 42,000 by 12.",
            "3,700 kg": "This is incorrect. Divide 42,000 by 12."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch1_t1_qm12',
        type: "mcq",
        question: "A fish market sells 2,500 kg at ₹180/kg and 1,800 kg at ₹200/kg. What is the average price per kg?",
        options: ["₹188/kg", "₹190/kg", "₹192/kg", "₹194/kg"],
        correctAnswer: "₹188/kg",
        explanation: "Total value = (2,500 × ₹180) + (1,800 × ₹200) = ₹810,000; Average = ₹810,000 ÷ 4,300 = ₹188/kg. 💰",
        wrongAnswerExplanations: {
            "₹190/kg": "This is incorrect. Calculate total value and divide by total kg.",
            "₹192/kg": "This is incorrect. Calculate total value and divide by total kg.",
            "₹194/kg": "This is incorrect. Calculate total value and divide by total kg."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl5_ch1_t1_qm13',
        type: "mcq",
        question: "A town's population increased from 35,000 to 42,000 in 5 years. What was the average annual increase?",
        options: ["1,200", "1,300", "1,400", "1,500"],
        correctAnswer: "1,400",
        explanation: "Total increase = 7,000; Annual increase = 7,000 ÷ 5 = 1,400. 👥",
        wrongAnswerExplanations: {
            "1,200": "This is incorrect. Divide the total increase by 5 years.",
            "1,300": "This is incorrect. Divide the total increase by 5 years.",
            "1,500": "This is incorrect. Divide the total increase by 5 years."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch1_t1_qm14',
        type: "mcq",
        question: "A boat travels 45 km upstream in 3 hours and 60 km downstream in 2 hours. What is its average speed for the whole journey?",
        options: ["19 km/h", "20 km/h", "21 km/h", "22 km/h"],
        correctAnswer: "21 km/h",
        explanation: "Total distance = 105 km; Total time = 5 h; Average speed = 105 ÷ 5 = 21 km/h. 🚢",
        wrongAnswerExplanations: {
            "19 km/h": "This is incorrect. Calculate total distance divided by total time.",
            "20 km/h": "This is incorrect. Calculate total distance divided by total time.",
            "22 km/h": "This is incorrect. Calculate total distance divided by total time."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl5_ch1_t1_qm15',
        type: "mcq",
        question: "A fishing company has 15 boats with an average catch of 2,800 kg per boat. What is their total catch?",
        options: ["40,000 kg", "41,000 kg", "42,000 kg", "43,000 kg"],
        correctAnswer: "42,000 kg",
        explanation: "15 × 2,800 = 42,000 kg. This shows multiplication of large numbers. ⚖️",
        wrongAnswerExplanations: {
            "40,000 kg": "This is incorrect. Multiply 15 by 2,800.",
            "41,000 kg": "This is incorrect. Multiply 15 by 2,800.",
            "43,000 kg": "This is incorrect. Multiply 15 by 2,800."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch1_t1_qm16',
        type: "mcq",
        question: "A fish market sells 3,500 kg at ₹180/kg and 2,500 kg at ₹220/kg. What is the total sales value?",
        options: ["₹1,180,000", "₹1,200,000", "₹1,220,000", "₹1,240,000"],
        correctAnswer: "₹1,180,000",
        explanation: "(3,500 × ₹180) + (2,500 × ₹220) = ₹630,000 + ₹550,000 = ₹1,180,000. 💰",
        wrongAnswerExplanations: {
            "₹1,200,000": "This is incorrect. Calculate both sales separately and add them.",
            "₹1,220,000": "This is incorrect. Calculate both sales separately and add them.",
            "₹1,240,000": "This is incorrect. Calculate both sales separately and add them."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl5_ch1_t1_qm17',
        type: "mcq",
        question: "A town's population is 48,000. If it decreases by 15% in a year, what is the new population?",
        options: ["39,800", "40,000", "40,200", "40,800"],
        correctAnswer: "40,800",
        explanation: "15% of 48,000 = 7,200; New population = 48,000 - 7,200 = 40,800. 👥",
        wrongAnswerExplanations: {
            "39,800": "This is incorrect. Calculate 15% of 48,000 and subtract it.",
            "40,000": "This is incorrect. Calculate 15% of 48,000 and subtract it.",
            "40,200": "This is incorrect. Calculate 15% of 48,000 and subtract it."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch1_t1_qm18',
        type: "mcq",
        question: "A boat travels 240 km downstream in 4 hours and 180 km upstream in 6 hours. What is its average speed for the whole journey?",
        options: ["36 km/h", "38 km/h", "40 km/h", "42 km/h"],
        correctAnswer: "42 km/h",
        explanation: "Total distance = 420 km; Total time = 10 h; Average speed = 420 ÷ 10 = 42 km/h. 🚢",
        wrongAnswerExplanations: {
            "36 km/h": "This is incorrect. Calculate total distance divided by total time.",
            "38 km/h": "This is incorrect. Calculate total distance divided by total time.",
            "40 km/h": "This is incorrect. Calculate total distance divided by total time."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl5_ch1_t1_qm19',
        type: "mcq",
        question: "A fishing company has 18 boats with an average catch of 2,500 kg per boat. What is their total catch?",
        options: ["43,000 kg", "44,000 kg", "45,000 kg", "46,000 kg"],
        correctAnswer: "45,000 kg",
        explanation: "18 × 2,500 = 45,000 kg. This shows multiplication of large numbers. ⚖️",
        wrongAnswerExplanations: {
            "43,000 kg": "This is incorrect. Multiply 18 by 2,500.",
            "44,000 kg": "This is incorrect. Multiply 18 by 2,500.",
            "46,000 kg": "This is incorrect. Multiply 18 by 2,500."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch1_t1_qm20',
        type: "mcq",
        question: "A fish market sells 4,000 kg at ₹190/kg and 3,000 kg at ₹210/kg. What is the average price per kg?",
        options: ["₹198/kg", "₹200/kg", "₹202/kg", "₹204/kg"],
        correctAnswer: "₹198/kg",
        explanation: "Total value = (4,000 × ₹190) + (3,000 × ₹210) = ₹1,390,000; Average = ₹1,390,000 ÷ 7,000 = ₹198/kg. 💰",
        wrongAnswerExplanations: {
            "₹200/kg": "This is incorrect. Calculate total value and divide by total kg.",
            "₹202/kg": "This is incorrect. Calculate total value and divide by total kg.",
            "₹204/kg": "This is incorrect. Calculate total value and divide by total kg."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    }
]; 