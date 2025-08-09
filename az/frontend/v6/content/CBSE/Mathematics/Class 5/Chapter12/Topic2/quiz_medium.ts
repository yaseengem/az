import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl5_ch12_t2_qm1',
        type: "mcq",
        question: "In a line graph showing temperature over a week, if Monday was 20°C and Tuesday was 25°C, what was the temperature increase?",
        options: ["5°C", "10°C", "15°C", "20°C"],
        correctAnswer: "5°C",
        explanation: "25°C - 20°C = 5°C increase. The line would go up by 5 units. 🌡️",
        wrongAnswerExplanations: {
            "10°C": "This would be if Tuesday was 30°C.",
            "15°C": "This would be if Tuesday was 35°C.",
            "20°C": "This would be if Tuesday was 40°C."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t2_qm2',
        type: "mcq",
        question: "In a pie chart showing a class budget, if the stationery slice is 90 degrees, what percentage of the budget is it?",
        options: ["25%", "30%", "40%", "50%"],
        correctAnswer: "25%",
        explanation: "90 degrees is 1/4 of 360 degrees, so it represents 25% of the total. 📊",
        wrongAnswerExplanations: {
            "30%": "This would be 108 degrees.",
            "40%": "This would be 144 degrees.",
            "50%": "This would be 180 degrees."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t2_qm3',
        type: "mcq",
        question: "If a line graph shows plant growth and the line goes up by 2 cm each day for 5 days, what is the total growth?",
        options: ["10 cm", "15 cm", "20 cm", "25 cm"],
        correctAnswer: "10 cm",
        explanation: "2 cm × 5 days = 10 cm total growth. The line would rise steadily. 🌱",
        wrongAnswerExplanations: {
            "15 cm": "This would be 3 cm per day.",
            "20 cm": "This would be 4 cm per day.",
            "25 cm": "This would be 5 cm per day."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t2_qm4',
        type: "mcq",
        question: "In a pie chart showing favorite sports, if football is 40% and cricket is 30%, what angle is left for other sports?",
        options: ["108 degrees", "120 degrees", "144 degrees", "180 degrees"],
        correctAnswer: "108 degrees",
        explanation: "100% - 40% - 30% = 30% remaining; 30% of 360° = 108°. ⚽",
        wrongAnswerExplanations: {
            "120 degrees": "This would be 33.33% of the circle.",
            "144 degrees": "This would be 40% of the circle.",
            "180 degrees": "This would be 50% of the circle."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t2_qm5',
        type: "mcq",
        question: "If a line graph shows rainfall and Monday had 10mm, Tuesday had 15mm, and Wednesday had 5mm, what was the average rainfall?",
        options: ["10 mm", "15 mm", "20 mm", "25 mm"],
        correctAnswer: "10 mm",
        explanation: "(10 + 15 + 5) ÷ 3 = 10 mm average rainfall. 📊",
        wrongAnswerExplanations: {
            "15 mm": "This is Tuesday's rainfall, not the average.",
            "20 mm": "This is the sum of Monday and Wednesday.",
            "25 mm": "This is the sum of Monday and Tuesday."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t2_qm6',
        type: "mcq",
        question: "In a pie chart showing class pets, if 1/6 have cats and 1/3 have dogs, what percentage have other pets?",
        options: ["50%", "60%", "70%", "80%"],
        correctAnswer: "50%",
        explanation: "Cats: 1/6 ≈ 16.67%, Dogs: 1/3 ≈ 33.33%; Remaining: 100% - 16.67% - 33.33% = 50%. 🐾",
        wrongAnswerExplanations: {
            "60%": "This would leave too little for cats and dogs.",
            "70%": "This would leave too little for cats and dogs.",
            "80%": "This would leave too little for cats and dogs."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t2_qm7',
        type: "mcq",
        question: "If a line graph shows temperature and it drops by 2°C each hour for 4 hours, what is the total temperature change?",
        options: ["-8°C", "-6°C", "-4°C", "-2°C"],
        correctAnswer: "-8°C",
        explanation: "2°C × 4 hours = 8°C total decrease. The line would go down steadily. 🌡️",
        wrongAnswerExplanations: {
            "-6°C": "This would be 1.5°C per hour.",
            "-4°C": "This would be 1°C per hour.",
            "-2°C": "This would be 0.5°C per hour."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t2_qm8',
        type: "mcq",
        question: "In a pie chart showing favorite fruits, if apples are 30% and bananas are 20%, what angle represents oranges if they're 25%?",
        options: ["90 degrees", "108 degrees", "120 degrees", "144 degrees"],
        correctAnswer: "90 degrees",
        explanation: "25% of 360° = 90 degrees. 🍊",
        wrongAnswerExplanations: {
            "108 degrees": "This would be 30% of the circle.",
            "120 degrees": "This would be 33.33% of the circle.",
            "144 degrees": "This would be 40% of the circle."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t2_qm9',
        type: "mcq",
        question: "If a line graph shows plant height and it grows 3 cm in 2 days, what is the average growth per day?",
        options: ["1.5 cm", "2 cm", "2.5 cm", "3 cm"],
        correctAnswer: "1.5 cm",
        explanation: "3 cm ÷ 2 days = 1.5 cm per day average growth. 🌱",
        wrongAnswerExplanations: {
            "2 cm": "This would be 4 cm in 2 days.",
            "2.5 cm": "This would be 5 cm in 2 days.",
            "3 cm": "This would be 6 cm in 2 days."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t2_qm10',
        type: "mcq",
        question: "In a pie chart showing a budget, if rent is 40% and food is 30%, what percentage is left for other expenses?",
        options: ["30%", "40%", "50%", "60%"],
        correctAnswer: "30%",
        explanation: "100% - 40% - 30% = 30% remaining for other expenses. 💰",
        wrongAnswerExplanations: {
            "40%": "This would leave too little for rent and food.",
            "50%": "This would leave too little for rent and food.",
            "60%": "This would leave too little for rent and food."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t2_qm11',
        type: "mcq",
        question: "If a line graph shows temperature changes and it rises by 3°C, then falls by 5°C, what is the net change?",
        options: ["-2°C", "-1°C", "0°C", "2°C"],
        correctAnswer: "-2°C",
        explanation: "3°C - 5°C = -2°C net change. The line would end lower than it started. 🌡️",
        wrongAnswerExplanations: {
            "-1°C": "This would be a different combination of changes.",
            "0°C": "This would be if the rise and fall were equal.",
            "2°C": "This would be if the rise was greater than the fall."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t2_qm12',
        type: "mcq",
        question: "In a pie chart showing favorite colors, if blue is 45 degrees and red is 90 degrees, what percentage is green if it's 135 degrees?",
        options: ["37.5%", "40%", "42.5%", "45%"],
        correctAnswer: "37.5%",
        explanation: "135° ÷ 360° = 0.375 = 37.5%. 🎨",
        wrongAnswerExplanations: {
            "40%": "This would be 144 degrees.",
            "42.5%": "This would be 153 degrees.",
            "45%": "This would be 162 degrees."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t2_qm13',
        type: "mcq",
        question: "If a line graph shows rainfall and it was 5mm on Monday, 10mm on Tuesday, and 15mm on Wednesday, what was the percentage increase from Monday to Wednesday?",
        options: ["200%", "150%", "100%", "50%"],
        correctAnswer: "200%",
        explanation: "Increase = 15mm - 5mm = 10mm; Percentage = (10/5) × 100 = 200%. 🌧️",
        wrongAnswerExplanations: {
            "150%": "This would be if Wednesday was 12.5mm.",
            "100%": "This would be if Wednesday was 10mm.",
            "50%": "This would be if Wednesday was 7.5mm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t2_qm14',
        type: "mcq",
        question: "In a pie chart showing favorite subjects, if math is 60 degrees and science is 90 degrees, what percentage is left for other subjects?",
        options: ["58.33%", "60%", "62.5%", "65%"],
        correctAnswer: "58.33%",
        explanation: "Math: 60/360 = 16.67%, Science: 90/360 = 25%; Remaining: 100% - 16.67% - 25% = 58.33%. 📚",
        wrongAnswerExplanations: {
            "60%": "This would leave too little for math and science.",
            "62.5%": "This would leave too little for math and science.",
            "65%": "This would leave too little for math and science."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t2_qm15',
        type: "mcq",
        question: "If a line graph shows temperature and it was 20°C at 8 AM, 25°C at 12 PM, and 22°C at 4 PM, what was the highest temperature?",
        options: ["25°C", "24°C", "23°C", "22°C"],
        correctAnswer: "25°C",
        explanation: "The highest point on the graph would be at 12 PM with 25°C. 🌡️",
        wrongAnswerExplanations: {
            "24°C": "This temperature wasn't recorded.",
            "23°C": "This temperature wasn't recorded.",
            "22°C": "This was the 4 PM temperature, not the highest."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t2_qm16',
        type: "mcq",
        question: "In a pie chart showing a budget, if savings is 20% and entertainment is 15%, what angle represents food if it's 30%?",
        options: ["108 degrees", "120 degrees", "135 degrees", "150 degrees"],
        correctAnswer: "108 degrees",
        explanation: "30% of 360° = 108 degrees. 🍽️",
        wrongAnswerExplanations: {
            "120 degrees": "This would be 33.33% of the circle.",
            "135 degrees": "This would be 37.5% of the circle.",
            "150 degrees": "This would be 41.67% of the circle."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t2_qm17',
        type: "mcq",
        question: "If a line graph shows plant growth and it grows 2 cm in 3 days, what is the average growth per day?",
        options: ["0.67 cm", "0.75 cm", "0.8 cm", "0.9 cm"],
        correctAnswer: "0.67 cm",
        explanation: "2 cm ÷ 3 days ≈ 0.67 cm per day average growth. 🌱",
        wrongAnswerExplanations: {
            "0.75 cm": "This would be 2.25 cm in 3 days.",
            "0.8 cm": "This would be 2.4 cm in 3 days.",
            "0.9 cm": "This would be 2.7 cm in 3 days."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t2_qm18',
        type: "mcq",
        question: "In a pie chart showing favorite sports, if football is 40% and basketball is 25%, what percentage is left for other sports?",
        options: ["35%", "40%", "45%", "50%"],
        correctAnswer: "35%",
        explanation: "100% - 40% - 25% = 35% remaining for other sports. ⚽",
        wrongAnswerExplanations: {
            "40%": "This would leave too little for football and basketball.",
            "45%": "This would leave too little for football and basketball.",
            "50%": "This would leave too little for football and basketball."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t2_qm19',
        type: "mcq",
        question: "If a line graph shows temperature and it was 15°C at 6 AM, 20°C at 12 PM, and 18°C at 6 PM, what was the temperature range?",
        options: ["5°C", "6°C", "7°C", "8°C"],
        correctAnswer: "5°C",
        explanation: "Range = Highest - Lowest = 20°C - 15°C = 5°C. 🌡️",
        wrongAnswerExplanations: {
            "6°C": "This would be if the highest was 21°C.",
            "7°C": "This would be if the highest was 22°C.",
            "8°C": "This would be if the highest was 23°C."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t2_qm20',
        type: "mcq",
        question: "In a pie chart showing favorite fruits, if apples are 30% and bananas are 20%, what angle represents oranges if they're 15%?",
        options: ["54 degrees", "60 degrees", "72 degrees", "90 degrees"],
        correctAnswer: "54 degrees",
        explanation: "15% of 360° = 54 degrees. 🍊",
        wrongAnswerExplanations: {
            "60 degrees": "This would be 16.67% of the circle.",
            "72 degrees": "This would be 20% of the circle.",
            "90 degrees": "This would be 25% of the circle."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 