import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl5_ch8_t2_qm1',
        type: "mcq",
        question: "If a map scale is 1:25000 and two points are 4.5 cm apart on the map, what is the real distance between them in kilometers?",
        options: ["1.125 km", "0.9 km", "1.5 km", "1.8 km"],
        correctAnswer: "1.125 km",
        explanation: "At 1:25000 scale, 1 cm = 25000 cm = 250 meters. So 4.5 cm = 4.5 × 250 = 1125 meters = 1.125 km. This requires multiple conversions and decimal multiplication. 📏",
        wrongAnswerExplanations: {
            "0.9 km": "This is less than the correct answer.",
            "1.5 km": "This is more than the correct answer.",
            "1.8 km": "This is significantly more than the correct answer."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch8_t2_qm2',
        type: "mcq",
        question: "A map shows a road that is 3.2 cm long. If the scale is 1:50000, what is the actual length of the road in kilometers?",
        options: ["1.6 km", "1.2 km", "2 km", "2.4 km"],
        correctAnswer: "1.6 km",
        explanation: "At 1:50000 scale, 1 cm = 50000 cm = 500 meters = 0.5 km. So 3.2 cm = 3.2 × 0.5 = 1.6 km. This involves decimal multiplication and unit conversion. 📏",
        wrongAnswerExplanations: {
            "1.2 km": "This is less than the correct answer.",
            "2 km": "This is more than the correct answer.",
            "2.4 km": "This is significantly more than the correct answer."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch8_t2_qm3',
        type: "mcq",
        question: "If a real distance of 2.7 km needs to be shown on a map with scale 1:30000, how many centimeters should it be on the map?",
        options: ["9 cm", "6 cm", "12 cm", "15 cm"],
        correctAnswer: "9 cm",
        explanation: "At 1:30000 scale, 1 cm = 30000 cm = 300 meters = 0.3 km. To show 2.7 km, we need 2.7 ÷ 0.3 = 9 cm. This requires division and unit conversion. 📏",
        wrongAnswerExplanations: {
            "6 cm": "This would represent 1.8 km, not 2.7 km.",
            "12 cm": "This would represent 3.6 km, not 2.7 km.",
            "15 cm": "This would represent 4.5 km, not 2.7 km."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch8_t2_qm4',
        type: "mcq",
        question: "A map has a scale of 1:40000. If a lake is 1.8 km long in real life, how long should it be on the map in centimeters?",
        options: ["4.5 cm", "3.6 cm", "5.4 cm", "6.3 cm"],
        correctAnswer: "4.5 cm",
        explanation: "At 1:40000 scale, 1 cm = 40000 cm = 400 meters = 0.4 km. To show 1.8 km, we need 1.8 ÷ 0.4 = 4.5 cm. This involves decimal division and unit conversion. 📏",
        wrongAnswerExplanations: {
            "3.6 cm": "This would represent 1.44 km, not 1.8 km.",
            "5.4 cm": "This would represent 2.16 km, not 1.8 km.",
            "6.3 cm": "This would represent 2.52 km, not 1.8 km."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch8_t2_qm5',
        type: "mcq",
        question: "If a map scale is 1:15000 and a building is 2.4 cm wide on the map, what is its actual width in meters?",
        options: ["360 meters", "240 meters", "480 meters", "600 meters"],
        correctAnswer: "360 meters",
        explanation: "At 1:15000 scale, 1 cm = 15000 cm = 150 meters. So 2.4 cm = 2.4 × 150 = 360 meters. This involves decimal multiplication and unit conversion. 📏",
        wrongAnswerExplanations: {
            "240 meters": "This is less than the correct answer.",
            "480 meters": "This is more than the correct answer.",
            "600 meters": "This is significantly more than the correct answer."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch8_t2_qm6',
        type: "mcq",
        question: "A map scale is 1:35000. If a river is 1.05 km long in real life, how long should it be on the map in centimeters?",
        options: ["3 cm", "2.5 cm", "3.5 cm", "4 cm"],
        correctAnswer: "3 cm",
        explanation: "At 1:35000 scale, 1 cm = 35000 cm = 350 meters = 0.35 km. To show 1.05 km, we need 1.05 ÷ 0.35 = 3 cm. This involves decimal division and unit conversion. 📏",
        wrongAnswerExplanations: {
            "2.5 cm": "This would represent 0.875 km, not 1.05 km.",
            "3.5 cm": "This would represent 1.225 km, not 1.05 km.",
            "4 cm": "This would represent 1.4 km, not 1.05 km."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch8_t2_qm7',
        type: "mcq",
        question: "If a map scale is 1:45000 and a park is 1.8 cm long on the map, what is its actual length in kilometers?",
        options: ["0.81 km", "0.72 km", "0.9 km", "1.08 km"],
        correctAnswer: "0.81 km",
        explanation: "At 1:45000 scale, 1 cm = 45000 cm = 450 meters = 0.45 km. So 1.8 cm = 1.8 × 0.45 = 0.81 km. This involves decimal multiplication and unit conversion. 📏",
        wrongAnswerExplanations: {
            "0.72 km": "This is less than the correct answer.",
            "0.9 km": "This is more than the correct answer.",
            "1.08 km": "This is significantly more than the correct answer."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch8_t2_qm8',
        type: "mcq",
        question: "A map has a scale of 1:28000. If a bridge is 0.84 km long in real life, how long should it be on the map in centimeters?",
        options: ["3 cm", "2.5 cm", "3.5 cm", "4 cm"],
        correctAnswer: "3 cm",
        explanation: "At 1:28000 scale, 1 cm = 28000 cm = 280 meters = 0.28 km. To show 0.84 km, we need 0.84 ÷ 0.28 = 3 cm. This involves decimal division and unit conversion. 📏",
        wrongAnswerExplanations: {
            "2.5 cm": "This would represent 0.7 km, not 0.84 km.",
            "3.5 cm": "This would represent 0.98 km, not 0.84 km.",
            "4 cm": "This would represent 1.12 km, not 0.84 km."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch8_t2_qm9',
        type: "mcq",
        question: "If a map scale is 1:32000 and a field is 2.5 cm wide on the map, what is its actual width in meters?",
        options: ["800 meters", "640 meters", "960 meters", "1120 meters"],
        correctAnswer: "800 meters",
        explanation: "At 1:32000 scale, 1 cm = 32000 cm = 320 meters. So 2.5 cm = 2.5 × 320 = 800 meters. This involves decimal multiplication and unit conversion. 📏",
        wrongAnswerExplanations: {
            "640 meters": "This is less than the correct answer.",
            "960 meters": "This is more than the correct answer.",
            "1120 meters": "This is significantly more than the correct answer."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch8_t2_qm10',
        type: "mcq",
        question: "A map scale is 1:42000. If a stadium is 1.26 km long in real life, how long should it be on the map in centimeters?",
        options: ["3 cm", "2.5 cm", "3.5 cm", "4 cm"],
        correctAnswer: "3 cm",
        explanation: "At 1:42000 scale, 1 cm = 42000 cm = 420 meters = 0.42 km. To show 1.26 km, we need 1.26 ÷ 0.42 = 3 cm. This involves decimal division and unit conversion. 📏",
        wrongAnswerExplanations: {
            "2.5 cm": "This would represent 1.05 km, not 1.26 km.",
            "3.5 cm": "This would represent 1.47 km, not 1.26 km.",
            "4 cm": "This would represent 1.68 km, not 1.26 km."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch8_t2_qm11',
        type: "mcq",
        question: "If a map scale is 1:38000 and a road is 1.9 cm long on the map, what is its actual length in kilometers?",
        options: ["0.722 km", "0.608 km", "0.836 km", "0.95 km"],
        correctAnswer: "0.722 km",
        explanation: "At 1:38000 scale, 1 cm = 38000 cm = 380 meters = 0.38 km. So 1.9 cm = 1.9 × 0.38 = 0.722 km. This involves decimal multiplication and unit conversion. 📏",
        wrongAnswerExplanations: {
            "0.608 km": "This is less than the correct answer.",
            "0.836 km": "This is more than the correct answer.",
            "0.95 km": "This is significantly more than the correct answer."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch8_t2_qm12',
        type: "mcq",
        question: "A map has a scale of 1:33000. If a park is 0.99 km long in real life, how long should it be on the map in centimeters?",
        options: ["3 cm", "2.5 cm", "3.5 cm", "4 cm"],
        correctAnswer: "3 cm",
        explanation: "At 1:33000 scale, 1 cm = 33000 cm = 330 meters = 0.33 km. To show 0.99 km, we need 0.99 ÷ 0.33 = 3 cm. This involves decimal division and unit conversion. 📏",
        wrongAnswerExplanations: {
            "2.5 cm": "This would represent 0.825 km, not 0.99 km.",
            "3.5 cm": "This would represent 1.155 km, not 0.99 km.",
            "4 cm": "This would represent 1.32 km, not 0.99 km."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch8_t2_qm13',
        type: "mcq",
        question: "If a map scale is 1:41000 and a building is 2.05 cm tall on the map, what is its actual height in meters?",
        options: ["840.5 meters", "820 meters", "861 meters", "902.5 meters"],
        correctAnswer: "840.5 meters",
        explanation: "At 1:41000 scale, 1 cm = 41000 cm = 410 meters. So 2.05 cm = 2.05 × 410 = 840.5 meters. This involves decimal multiplication and unit conversion. 📏",
        wrongAnswerExplanations: {
            "820 meters": "This is less than the correct answer.",
            "861 meters": "This is more than the correct answer.",
            "902.5 meters": "This is significantly more than the correct answer."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch8_t2_qm14',
        type: "mcq",
        question: "A map scale is 1:47000. If a river is 1.41 km long in real life, how long should it be on the map in centimeters?",
        options: ["3 cm", "2.5 cm", "3.5 cm", "4 cm"],
        correctAnswer: "3 cm",
        explanation: "At 1:47000 scale, 1 cm = 47000 cm = 470 meters = 0.47 km. To show 1.41 km, we need 1.41 ÷ 0.47 = 3 cm. This involves decimal division and unit conversion. 📏",
        wrongAnswerExplanations: {
            "2.5 cm": "This would represent 1.175 km, not 1.41 km.",
            "3.5 cm": "This would represent 1.645 km, not 1.41 km.",
            "4 cm": "This would represent 1.88 km, not 1.41 km."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch8_t2_qm15',
        type: "mcq",
        question: "If a map scale is 1:36000 and a field is 1.8 cm wide on the map, what is its actual width in kilometers?",
        options: ["0.648 km", "0.576 km", "0.72 km", "0.864 km"],
        correctAnswer: "0.648 km",
        explanation: "At 1:36000 scale, 1 cm = 36000 cm = 360 meters = 0.36 km. So 1.8 cm = 1.8 × 0.36 = 0.648 km. This involves decimal multiplication and unit conversion. 📏",
        wrongAnswerExplanations: {
            "0.576 km": "This is less than the correct answer.",
            "0.72 km": "This is more than the correct answer.",
            "0.864 km": "This is significantly more than the correct answer."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch8_t2_qm16',
        type: "mcq",
        question: "A map has a scale of 1:29000. If a road is 0.87 km long in real life, how long should it be on the map in centimeters?",
        options: ["3 cm", "2.5 cm", "3.5 cm", "4 cm"],
        correctAnswer: "3 cm",
        explanation: "At 1:29000 scale, 1 cm = 29000 cm = 290 meters = 0.29 km. To show 0.87 km, we need 0.87 ÷ 0.29 = 3 cm. This involves decimal division and unit conversion. 📏",
        wrongAnswerExplanations: {
            "2.5 cm": "This would represent 0.725 km, not 0.87 km.",
            "3.5 cm": "This would represent 1.015 km, not 0.87 km.",
            "4 cm": "This would represent 1.16 km, not 0.87 km."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch8_t2_qm17',
        type: "mcq",
        question: "If a map scale is 1:44000 and a building is 2.2 cm tall on the map, what is its actual height in meters?",
        options: ["968 meters", "880 meters", "1056 meters", "1232 meters"],
        correctAnswer: "968 meters",
        explanation: "At 1:44000 scale, 1 cm = 44000 cm = 440 meters. So 2.2 cm = 2.2 × 440 = 968 meters. This involves decimal multiplication and unit conversion. 📏",
        wrongAnswerExplanations: {
            "880 meters": "This is less than the correct answer.",
            "1056 meters": "This is more than the correct answer.",
            "1232 meters": "This is significantly more than the correct answer."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch8_t2_qm18',
        type: "mcq",
        question: "A map scale is 1:31000. If a river is 0.93 km long in real life, how long should it be on the map in centimeters?",
        options: ["3 cm", "2.5 cm", "3.5 cm", "4 cm"],
        correctAnswer: "3 cm",
        explanation: "At 1:31000 scale, 1 cm = 31000 cm = 310 meters = 0.31 km. To show 0.93 km, we need 0.93 ÷ 0.31 = 3 cm. This involves decimal division and unit conversion. 📏",
        wrongAnswerExplanations: {
            "2.5 cm": "This would represent 0.775 km, not 0.93 km.",
            "3.5 cm": "This would represent 1.085 km, not 0.93 km.",
            "4 cm": "This would represent 1.24 km, not 0.93 km."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch8_t2_qm19',
        type: "mcq",
        question: "If a map scale is 1:39000 and a field is 1.95 cm wide on the map, what is its actual width in kilometers?",
        options: ["0.7605 km", "0.702 km", "0.819 km", "0.936 km"],
        correctAnswer: "0.7605 km",
        explanation: "At 1:39000 scale, 1 cm = 39000 cm = 390 meters = 0.39 km. So 1.95 cm = 1.95 × 0.39 = 0.7605 km. This involves decimal multiplication and unit conversion. 📏",
        wrongAnswerExplanations: {
            "0.702 km": "This is less than the correct answer.",
            "0.819 km": "This is more than the correct answer.",
            "0.936 km": "This is significantly more than the correct answer."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch8_t2_qm20',
        type: "mcq",
        question: "A map has a scale of 1:34000. If a road is 1.02 km long in real life, how long should it be on the map in centimeters?",
        options: ["3 cm", "2.5 cm", "3.5 cm", "4 cm"],
        correctAnswer: "3 cm",
        explanation: "At 1:34000 scale, 1 cm = 34000 cm = 340 meters = 0.34 km. To show 1.02 km, we need 1.02 ÷ 0.34 = 3 cm. This involves decimal division and unit conversion. 📏",
        wrongAnswerExplanations: {
            "2.5 cm": "This would represent 0.85 km, not 1.02 km.",
            "3.5 cm": "This would represent 1.19 km, not 1.02 km.",
            "4 cm": "This would represent 1.36 km, not 1.02 km."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 