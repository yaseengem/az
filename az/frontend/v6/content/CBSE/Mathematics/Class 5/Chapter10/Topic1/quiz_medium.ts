import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl5_ch10_t1_qm1',
        type: "mcq",
        question: "If a number has 3 in the tenths place, 4 in the hundredths place, and 5 in the thousandths place, what is the number?",
        options: ["0.345", "0.354", "0.435", "0.453"],
        correctAnswer: "0.345",
        explanation: "The number is 0.345, with digits in their respective decimal places. 🔢",
        wrongAnswerExplanations: {
            "0.354": "This has digits in wrong places.",
            "0.435": "This has digits in wrong places.",
            "0.453": "This has digits in wrong places."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch10_t1_qm2',
        type: "mcq",
        question: "Which of these numbers is equivalent to 0.75?",
        options: ["75/100", "7/10 + 5/100", "3/4", "All of the above"],
        correctAnswer: "All of the above",
        explanation: "All options represent 0.75 in different forms. 🎯",
        wrongAnswerExplanations: {
            "75/100": "This is correct but not the only answer.",
            "7/10 + 5/100": "This is correct but not the only answer.",
            "3/4": "This is correct but not the only answer."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch10_t1_qm3',
        type: "mcq",
        question: "What is the sum of 0.3 and 0.07?",
        options: ["0.37", "0.307", "0.73", "0.037"],
        correctAnswer: "0.37",
        explanation: "0.3 + 0.07 = 0.37, adding tenths and hundredths. ➕",
        wrongAnswerExplanations: {
            "0.307": "This would be 0.3 + 0.007.",
            "0.73": "This is 0.7 + 0.03.",
            "0.037": "This would be 0.03 + 0.007."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch10_t1_qm4',
        type: "mcq",
        question: "Which number is greater: 0.45 or 0.405?",
        options: ["0.45", "0.405", "They are equal", "Cannot be determined"],
        correctAnswer: "0.45",
        explanation: "0.45 is greater than 0.405 as 45 hundredths > 40 hundredths. 📈",
        wrongAnswerExplanations: {
            "0.405": "This is less than 0.45.",
            "They are equal": "The numbers are different.",
            "Cannot be determined": "The numbers can be compared."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch10_t1_qm5',
        type: "mcq",
        question: "What is the difference between 0.8 and 0.08?",
        options: ["0.72", "0.88", "0.08", "0.008"],
        correctAnswer: "0.72",
        explanation: "0.8 - 0.08 = 0.72, subtracting hundredths from tenths. ➖",
        wrongAnswerExplanations: {
            "0.88": "This would be the sum, not the difference.",
            "0.08": "This is the smaller number.",
            "0.008": "This is too small."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch10_t1_qm6',
        type: "mcq",
        question: "Which of these is equivalent to 0.125?",
        options: ["1/8", "125/1000", "12.5/100", "All of the above"],
        correctAnswer: "All of the above",
        explanation: "All options represent 0.125 in different forms. 🎯",
        wrongAnswerExplanations: {
            "1/8": "This is correct but not the only answer.",
            "125/1000": "This is correct but not the only answer.",
            "12.5/100": "This is correct but not the only answer."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch10_t1_qm7',
        type: "mcq",
        question: "What is the product of 0.2 and 0.3?",
        options: ["0.06", "0.6", "0.006", "0.0006"],
        correctAnswer: "0.06",
        explanation: "0.2 × 0.3 = 0.06, multiplying tenths. ✖️",
        wrongAnswerExplanations: {
            "0.6": "This would be 0.2 × 3.",
            "0.006": "This would be 0.2 × 0.03.",
            "0.0006": "This is too small."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch10_t1_qm8',
        type: "mcq",
        question: "Which number is between 0.45 and 0.5?",
        options: ["0.48", "0.4", "0.55", "0.05"],
        correctAnswer: "0.48",
        explanation: "0.48 is between 0.45 and 0.5. 🔍",
        wrongAnswerExplanations: {
            "0.4": "This is less than 0.45.",
            "0.55": "This is greater than 0.5.",
            "0.05": "This is less than 0.45."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch10_t1_qm9',
        type: "mcq",
        question: "What is the sum of 0.25 and 0.75?",
        options: ["1.0", "0.100", "0.10", "0.1"],
        correctAnswer: "1.0",
        explanation: "0.25 + 0.75 = 1.0, as 25 hundredths + 75 hundredths = 100 hundredths. ➕",
        wrongAnswerExplanations: {
            "0.100": "This is too small.",
            "0.10": "This is too small.",
            "0.1": "This is too small."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch10_t1_qm10',
        type: "mcq",
        question: "Which of these is equivalent to 0.333...?",
        options: ["1/3", "333/1000", "33.3/100", "All of the above"],
        correctAnswer: "1/3",
        explanation: "1/3 is exactly equal to 0.333..., while others are approximations. 🔄",
        wrongAnswerExplanations: {
            "333/1000": "This is 0.333, not 0.333...",
            "33.3/100": "This is 0.333, not 0.333...",
            "All of the above": "Only 1/3 is exactly equal."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch10_t1_qm11',
        type: "mcq",
        question: "What is the difference between 1.0 and 0.99?",
        options: ["0.01", "0.1", "0.001", "0.0001"],
        correctAnswer: "0.01",
        explanation: "1.0 - 0.99 = 0.01, as 100 hundredths - 99 hundredths = 1 hundredth. ➖",
        wrongAnswerExplanations: {
            "0.1": "This is too large.",
            "0.001": "This is too small.",
            "0.0001": "This is too small."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch10_t1_qm12',
        type: "mcq",
        question: "Which number is closest to 0.5?",
        options: ["0.49", "0.51", "0.45", "0.55"],
        correctAnswer: "0.49",
        explanation: "0.49 is 0.01 away from 0.5, which is the smallest difference. 📏",
        wrongAnswerExplanations: {
            "0.51": "This is 0.01 away, same as 0.49.",
            "0.45": "This is 0.05 away.",
            "0.55": "This is 0.05 away."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch10_t1_qm13',
        type: "mcq",
        question: "What is the product of 0.5 and 0.2?",
        options: ["0.1", "0.01", "0.001", "0.0001"],
        correctAnswer: "0.1",
        explanation: "0.5 × 0.2 = 0.1, as 5 tenths × 2 tenths = 10 hundredths. ✖️",
        wrongAnswerExplanations: {
            "0.01": "This would be 0.1 × 0.1.",
            "0.001": "This is too small.",
            "0.0001": "This is too small."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch10_t1_qm14',
        type: "mcq",
        question: "Which of these is equivalent to 0.6?",
        options: ["6/10", "60/100", "3/5", "All of the above"],
        correctAnswer: "All of the above",
        explanation: "All options represent 0.6 in different forms. 🎯",
        wrongAnswerExplanations: {
            "6/10": "This is correct but not the only answer.",
            "60/100": "This is correct but not the only answer.",
            "3/5": "This is correct but not the only answer."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch10_t1_qm15',
        type: "mcq",
        question: "What is the sum of 0.125 and 0.375?",
        options: ["0.5", "0.05", "0.005", "0.0005"],
        correctAnswer: "0.5",
        explanation: "0.125 + 0.375 = 0.5, as 125 thousandths + 375 thousandths = 500 thousandths. ➕",
        wrongAnswerExplanations: {
            "0.05": "This is too small.",
            "0.005": "This is too small.",
            "0.0005": "This is too small."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch10_t1_qm16',
        type: "mcq",
        question: "Which number is between 0.33 and 0.34?",
        options: ["0.335", "0.33", "0.34", "0.35"],
        correctAnswer: "0.335",
        explanation: "0.335 is between 0.33 and 0.34. 🔍",
        wrongAnswerExplanations: {
            "0.33": "This is the lower bound.",
            "0.34": "This is the upper bound.",
            "0.35": "This is greater than 0.34."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch10_t1_qm17',
        type: "mcq",
        question: "What is the difference between 0.9 and 0.09?",
        options: ["0.81", "0.99", "0.09", "0.009"],
        correctAnswer: "0.81",
        explanation: "0.9 - 0.09 = 0.81, subtracting hundredths from tenths. ➖",
        wrongAnswerExplanations: {
            "0.99": "This would be the sum, not the difference.",
            "0.09": "This is the smaller number.",
            "0.009": "This is too small."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch10_t1_qm18',
        type: "mcq",
        question: "Which of these is equivalent to 0.4?",
        options: ["2/5", "4/10", "40/100", "All of the above"],
        correctAnswer: "All of the above",
        explanation: "All options represent 0.4 in different forms. 🎯",
        wrongAnswerExplanations: {
            "2/5": "This is correct but not the only answer.",
            "4/10": "This is correct but not the only answer.",
            "40/100": "This is correct but not the only answer."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch10_t1_qm19',
        type: "mcq",
        question: "What is the product of 0.25 and 0.4?",
        options: ["0.1", "0.01", "0.001", "0.0001"],
        correctAnswer: "0.1",
        explanation: "0.25 × 0.4 = 0.1, as 25 hundredths × 4 tenths = 100 thousandths. ✖️",
        wrongAnswerExplanations: {
            "0.01": "This would be 0.1 × 0.1.",
            "0.001": "This is too small.",
            "0.0001": "This is too small."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch10_t1_qm20',
        type: "mcq",
        question: "Which number is closest to 0.75?",
        options: ["0.749", "0.751", "0.74", "0.76"],
        correctAnswer: "0.749",
        explanation: "0.749 is 0.001 away from 0.75, which is the smallest difference. 📏",
        wrongAnswerExplanations: {
            "0.751": "This is 0.001 away, same as 0.749.",
            "0.74": "This is 0.01 away.",
            "0.76": "This is 0.01 away."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 