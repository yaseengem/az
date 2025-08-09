import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl5_ch8_t2_qe1',
        type: "mcq",
        question: "If 1 cm on a map equals 100 meters in real life, how far is a 2 cm distance on the map?",
        options: ["200 meters", "100 meters", "50 meters", "400 meters"],
        correctAnswer: "200 meters",
        explanation: "Since 1 cm = 100 meters, then 2 cm = 2 × 100 = 200 meters. This is calculated by multiplying the map distance by the scale factor. 📏",
        wrongAnswerExplanations: {
            "100 meters": "This is the distance for 1 cm, not 2 cm.",
            "50 meters": "This is half of the correct answer.",
            "400 meters": "This is double the correct answer."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch8_t2_qe2',
        type: "mcq",
        question: "If the map scale is 1:1000, what does this mean?",
        options: ["1 cm on map = 1000 cm in real life", "1 cm on map = 1000 m in real life", "1 cm on map = 1000 km in real life", "1 cm on map = 100 cm in real life"],
        correctAnswer: "1 cm on map = 1000 cm in real life",
        explanation: "A scale of 1:1000 means that 1 unit on the map equals 1000 of the same units in real life. So 1 cm on the map equals 1000 cm in real life. 📏",
        wrongAnswerExplanations: {
            "1 cm on map = 1000 m in real life": "This would be a scale of 1:100000.",
            "1 cm on map = 1000 km in real life": "This would be a scale of 1:100000000.",
            "1 cm on map = 100 cm in real life": "This would be a scale of 1:100."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch8_t2_qe3',
        type: "mcq",
        question: "If 1 cm = 50 meters, how far is a 3 cm distance on the map?",
        options: ["150 meters", "50 meters", "100 meters", "200 meters"],
        correctAnswer: "150 meters",
        explanation: "Since 1 cm = 50 meters, then 3 cm = 3 × 50 = 150 meters. This is calculated by multiplying the map distance by the scale factor. 📏",
        wrongAnswerExplanations: {
            "50 meters": "This is the distance for 1 cm, not 3 cm.",
            "100 meters": "This is the distance for 2 cm.",
            "200 meters": "This is more than the correct answer."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch8_t2_qe4',
        type: "mcq",
        question: "If the map scale is 1:5000, how many meters does 1 cm on the map represent?",
        options: ["50 meters", "5 meters", "500 meters", "5000 meters"],
        correctAnswer: "50 meters",
        explanation: "At a scale of 1:5000, 1 cm = 5000 cm = 50 meters (since 100 cm = 1 meter). This is calculated by converting centimeters to meters. 📏",
        wrongAnswerExplanations: {
            "5 meters": "This is one-tenth of the correct answer.",
            "500 meters": "This is 10 times the correct answer.",
            "5000 meters": "This is 100 times the correct answer."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch8_t2_qe5',
        type: "mcq",
        question: "If 1 cm = 200 meters, how many centimeters on the map would represent 400 meters?",
        options: ["2 cm", "1 cm", "4 cm", "0.5 cm"],
        correctAnswer: "2 cm",
        explanation: "Since 1 cm = 200 meters, then to represent 400 meters we need 400 ÷ 200 = 2 cm. This is calculated by dividing the real distance by the scale factor. 📏",
        wrongAnswerExplanations: {
            "1 cm": "This would represent 200 meters, not 400 meters.",
            "4 cm": "This would represent 800 meters, not 400 meters.",
            "0.5 cm": "This would represent 100 meters, not 400 meters."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch8_t2_qe6',
        type: "mcq",
        question: "If the map scale is 1:10000, how many kilometers does 1 cm on the map represent?",
        options: ["0.1 km", "1 km", "10 km", "100 km"],
        correctAnswer: "0.1 km",
        explanation: "At a scale of 1:10000, 1 cm = 10000 cm = 100 meters = 0.1 km. This is calculated by converting centimeters to kilometers. 📏",
        wrongAnswerExplanations: {
            "1 km": "This is 10 times the correct answer.",
            "10 km": "This is 100 times the correct answer.",
            "100 km": "This is 1000 times the correct answer."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch8_t2_qe7',
        type: "mcq",
        question: "If 1 cm = 150 meters, how far is a 4 cm distance on the map?",
        options: ["600 meters", "150 meters", "300 meters", "450 meters"],
        correctAnswer: "600 meters",
        explanation: "Since 1 cm = 150 meters, then 4 cm = 4 × 150 = 600 meters. This is calculated by multiplying the map distance by the scale factor. 📏",
        wrongAnswerExplanations: {
            "150 meters": "This is the distance for 1 cm, not 4 cm.",
            "300 meters": "This is the distance for 2 cm.",
            "450 meters": "This is the distance for 3 cm."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch8_t2_qe8',
        type: "mcq",
        question: "If the map scale is 1:2000, how many meters does 2 cm on the map represent?",
        options: ["40 meters", "20 meters", "200 meters", "400 meters"],
        correctAnswer: "40 meters",
        explanation: "At a scale of 1:2000, 1 cm = 2000 cm = 20 meters. So 2 cm = 2 × 20 = 40 meters. This is calculated by converting centimeters to meters and then multiplying. 📏",
        wrongAnswerExplanations: {
            "20 meters": "This is the distance for 1 cm, not 2 cm.",
            "200 meters": "This is 5 times the correct answer.",
            "400 meters": "This is 10 times the correct answer."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch8_t2_qe9',
        type: "mcq",
        question: "If 1 cm = 75 meters, how many centimeters on the map would represent 300 meters?",
        options: ["4 cm", "2 cm", "3 cm", "5 cm"],
        correctAnswer: "4 cm",
        explanation: "Since 1 cm = 75 meters, then to represent 300 meters we need 300 ÷ 75 = 4 cm. This is calculated by dividing the real distance by the scale factor. 📏",
        wrongAnswerExplanations: {
            "2 cm": "This would represent 150 meters, not 300 meters.",
            "3 cm": "This would represent 225 meters, not 300 meters.",
            "5 cm": "This would represent 375 meters, not 300 meters."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch8_t2_qe10',
        type: "mcq",
        question: "If the map scale is 1:50000, how many kilometers does 2 cm on the map represent?",
        options: ["1 km", "0.5 km", "2 km", "5 km"],
        correctAnswer: "1 km",
        explanation: "At a scale of 1:50000, 1 cm = 50000 cm = 500 meters = 0.5 km. So 2 cm = 2 × 0.5 = 1 km. This is calculated by converting centimeters to kilometers and then multiplying. 📏",
        wrongAnswerExplanations: {
            "0.5 km": "This is the distance for 1 cm, not 2 cm.",
            "2 km": "This is double the correct answer.",
            "5 km": "This is 5 times the correct answer."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch8_t2_qe11',
        type: "mcq",
        question: "If 1 cm = 120 meters, how far is a 5 cm distance on the map?",
        options: ["600 meters", "120 meters", "240 meters", "480 meters"],
        correctAnswer: "600 meters",
        explanation: "Since 1 cm = 120 meters, then 5 cm = 5 × 120 = 600 meters. This is calculated by multiplying the map distance by the scale factor. 📏",
        wrongAnswerExplanations: {
            "120 meters": "This is the distance for 1 cm, not 5 cm.",
            "240 meters": "This is the distance for 2 cm.",
            "480 meters": "This is the distance for 4 cm."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch8_t2_qe12',
        type: "mcq",
        question: "If the map scale is 1:2500, how many meters does 3 cm on the map represent?",
        options: ["75 meters", "25 meters", "50 meters", "100 meters"],
        correctAnswer: "75 meters",
        explanation: "At a scale of 1:2500, 1 cm = 2500 cm = 25 meters. So 3 cm = 3 × 25 = 75 meters. This is calculated by converting centimeters to meters and then multiplying. 📏",
        wrongAnswerExplanations: {
            "25 meters": "This is the distance for 1 cm, not 3 cm.",
            "50 meters": "This is the distance for 2 cm.",
            "100 meters": "This is more than the correct answer."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch8_t2_qe13',
        type: "mcq",
        question: "If 1 cm = 80 meters, how many centimeters on the map would represent 400 meters?",
        options: ["5 cm", "4 cm", "6 cm", "3 cm"],
        correctAnswer: "5 cm",
        explanation: "Since 1 cm = 80 meters, then to represent 400 meters we need 400 ÷ 80 = 5 cm. This is calculated by dividing the real distance by the scale factor. 📏",
        wrongAnswerExplanations: {
            "4 cm": "This would represent 320 meters, not 400 meters.",
            "6 cm": "This would represent 480 meters, not 400 meters.",
            "3 cm": "This would represent 240 meters, not 400 meters."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch8_t2_qe14',
        type: "mcq",
        question: "If the map scale is 1:100000, how many kilometers does 3 cm on the map represent?",
        options: ["3 km", "1 km", "2 km", "4 km"],
        correctAnswer: "3 km",
        explanation: "At a scale of 1:100000, 1 cm = 100000 cm = 1000 meters = 1 km. So 3 cm = 3 × 1 = 3 km. This is calculated by converting centimeters to kilometers and then multiplying. 📏",
        wrongAnswerExplanations: {
            "1 km": "This is the distance for 1 cm, not 3 cm.",
            "2 km": "This is less than the correct answer.",
            "4 km": "This is more than the correct answer."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch8_t2_qe15',
        type: "mcq",
        question: "If 1 cm = 90 meters, how far is a 6 cm distance on the map?",
        options: ["540 meters", "90 meters", "180 meters", "360 meters"],
        correctAnswer: "540 meters",
        explanation: "Since 1 cm = 90 meters, then 6 cm = 6 × 90 = 540 meters. This is calculated by multiplying the map distance by the scale factor. 📏",
        wrongAnswerExplanations: {
            "90 meters": "This is the distance for 1 cm, not 6 cm.",
            "180 meters": "This is the distance for 2 cm.",
            "360 meters": "This is the distance for 4 cm."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch8_t2_qe16',
        type: "mcq",
        question: "If the map scale is 1:4000, how many meters does 4 cm on the map represent?",
        options: ["160 meters", "40 meters", "80 meters", "200 meters"],
        correctAnswer: "160 meters",
        explanation: "At a scale of 1:4000, 1 cm = 4000 cm = 40 meters. So 4 cm = 4 × 40 = 160 meters. This is calculated by converting centimeters to meters and then multiplying. 📏",
        wrongAnswerExplanations: {
            "40 meters": "This is the distance for 1 cm, not 4 cm.",
            "80 meters": "This is the distance for 2 cm.",
            "200 meters": "This is more than the correct answer."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch8_t2_qe17',
        type: "mcq",
        question: "If 1 cm = 110 meters, how many centimeters on the map would represent 550 meters?",
        options: ["5 cm", "4 cm", "6 cm", "3 cm"],
        correctAnswer: "5 cm",
        explanation: "Since 1 cm = 110 meters, then to represent 550 meters we need 550 ÷ 110 = 5 cm. This is calculated by dividing the real distance by the scale factor. 📏",
        wrongAnswerExplanations: {
            "4 cm": "This would represent 440 meters, not 550 meters.",
            "6 cm": "This would represent 660 meters, not 550 meters.",
            "3 cm": "This would represent 330 meters, not 550 meters."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch8_t2_qe18',
        type: "mcq",
        question: "If the map scale is 1:75000, how many kilometers does 2 cm on the map represent?",
        options: ["1.5 km", "0.75 km", "2 km", "3 km"],
        correctAnswer: "1.5 km",
        explanation: "At a scale of 1:75000, 1 cm = 75000 cm = 750 meters = 0.75 km. So 2 cm = 2 × 0.75 = 1.5 km. This is calculated by converting centimeters to kilometers and then multiplying. 📏",
        wrongAnswerExplanations: {
            "0.75 km": "This is the distance for 1 cm, not 2 cm.",
            "2 km": "This is more than the correct answer.",
            "3 km": "This is double the correct answer."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch8_t2_qe19',
        type: "mcq",
        question: "If 1 cm = 95 meters, how far is a 7 cm distance on the map?",
        options: ["665 meters", "95 meters", "190 meters", "475 meters"],
        correctAnswer: "665 meters",
        explanation: "Since 1 cm = 95 meters, then 7 cm = 7 × 95 = 665 meters. This is calculated by multiplying the map distance by the scale factor. 📏",
        wrongAnswerExplanations: {
            "95 meters": "This is the distance for 1 cm, not 7 cm.",
            "190 meters": "This is the distance for 2 cm.",
            "475 meters": "This is the distance for 5 cm."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch8_t2_qe20',
        type: "mcq",
        question: "If the map scale is 1:60000, how many kilometers does 5 cm on the map represent?",
        options: ["3 km", "1 km", "2 km", "4 km"],
        correctAnswer: "3 km",
        explanation: "At a scale of 1:60000, 1 cm = 60000 cm = 600 meters = 0.6 km. So 5 cm = 5 × 0.6 = 3 km. This is calculated by converting centimeters to kilometers and then multiplying. 📏",
        wrongAnswerExplanations: {
            "1 km": "This is less than the correct answer.",
            "2 km": "This is less than the correct answer.",
            "4 km": "This is more than the correct answer."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 