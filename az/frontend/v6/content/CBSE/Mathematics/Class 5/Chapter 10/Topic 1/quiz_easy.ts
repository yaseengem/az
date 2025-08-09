import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl5_ch10_t1_qe1',
        type: "mcq",
        question: "What is the value of 5 in the number 3.456?",
        options: ["5 tenths", "5 hundredths", "5 thousandths", "5 ones"],
        correctAnswer: "5 hundredths",
        explanation: "In 3.456, 5 is in the hundredths place, representing 0.05. 🔢",
        wrongAnswerExplanations: {
            "5 tenths": "The tenths place is the first digit after the decimal point.",
            "5 thousandths": "The thousandths place is the third digit after the decimal point.",
            "5 ones": "The ones place is before the decimal point."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch10_t1_qe2',
        type: "mcq",
        question: "Which decimal represents 'three and two tenths'?",
        options: ["3.2", "3.02", "3.002", "3.20"],
        correctAnswer: "3.2",
        explanation: "Three and two tenths is written as 3.2, where 2 is in the tenths place. 📝",
        wrongAnswerExplanations: {
            "3.02": "This represents three and two hundredths.",
            "3.002": "This represents three and two thousandths.",
            "3.20": "This represents three and twenty hundredths."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch10_t1_qe3',
        type: "mcq",
        question: "What is the decimal form of 7/10?",
        options: ["0.7", "0.07", "0.007", "7.0"],
        correctAnswer: "0.7",
        explanation: "7/10 means 7 tenths, which is written as 0.7. 🔟",
        wrongAnswerExplanations: {
            "0.07": "This represents 7 hundredths.",
            "0.007": "This represents 7 thousandths.",
            "7.0": "This represents 7 wholes."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch10_t1_qe4',
        type: "mcq",
        question: "Which number has 4 in the hundredths place?",
        options: ["2.34", "2.43", "2.304", "2.034"],
        correctAnswer: "2.34",
        explanation: "In 2.34, 4 is in the hundredths place. 💯",
        wrongAnswerExplanations: {
            "2.43": "4 is in the tenths place here.",
            "2.304": "4 is in the thousandths place here.",
            "2.034": "4 is in the thousandths place here."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch10_t1_qe5',
        type: "mcq",
        question: "What is the value of 0.25 in words?",
        options: ["Twenty-five hundredths", "Twenty-five tenths", "Twenty-five thousandths", "Twenty-five ones"],
        correctAnswer: "Twenty-five hundredths",
        explanation: "0.25 means 25 hundredths, as 2 is in tenths and 5 is in hundredths place. 📊",
        wrongAnswerExplanations: {
            "Twenty-five tenths": "This would be 2.5.",
            "Twenty-five thousandths": "This would be 0.025.",
            "Twenty-five ones": "This would be 25."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch10_t1_qe6',
        type: "mcq",
        question: "Which decimal is equivalent to 1/2?",
        options: ["0.5", "0.05", "0.005", "0.50"],
        correctAnswer: "0.5",
        explanation: "1/2 equals 0.5, which is five tenths. 🎯",
        wrongAnswerExplanations: {
            "0.05": "This is 5 hundredths.",
            "0.005": "This is 5 thousandths.",
            "0.50": "This is also correct but not in simplest form."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch10_t1_qe7',
        type: "mcq",
        question: "What is the decimal form of 3/100?",
        options: ["0.03", "0.3", "0.003", "3.0"],
        correctAnswer: "0.03",
        explanation: "3/100 means 3 hundredths, written as 0.03. 💯",
        wrongAnswerExplanations: {
            "0.3": "This is 3 tenths.",
            "0.003": "This is 3 thousandths.",
            "3.0": "This is 3 wholes."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch10_t1_qe8',
        type: "mcq",
        question: "Which number has 7 in the thousandths place?",
        options: ["4.567", "4.576", "4.657", "4.675"],
        correctAnswer: "4.567",
        explanation: "In 4.567, 7 is in the thousandths place. 1000",
        wrongAnswerExplanations: {
            "4.576": "7 is in the hundredths place here.",
            "4.657": "7 is in the thousandths place but 6 is in the hundredths.",
            "4.675": "7 is in the tenths place here."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch10_t1_qe9',
        type: "mcq",
        question: "What is the value of 0.125 in words?",
        options: ["One hundred twenty-five thousandths", "One hundred twenty-five hundredths", "One hundred twenty-five tenths", "One hundred twenty-five ones"],
        correctAnswer: "One hundred twenty-five thousandths",
        explanation: "0.125 has 1 in tenths, 2 in hundredths, and 5 in thousandths place. 📝",
        wrongAnswerExplanations: {
            "One hundred twenty-five hundredths": "This would be 1.25.",
            "One hundred twenty-five tenths": "This would be 12.5.",
            "One hundred twenty-five ones": "This would be 125."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch10_t1_qe10',
        type: "mcq",
        question: "Which decimal represents 'two and three hundredths'?",
        options: ["2.03", "2.3", "2.003", "2.30"],
        correctAnswer: "2.03",
        explanation: "Two and three hundredths is written as 2.03. 🔢",
        wrongAnswerExplanations: {
            "2.3": "This represents two and three tenths.",
            "2.003": "This represents two and three thousandths.",
            "2.30": "This represents two and thirty hundredths."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch10_t1_qe11',
        type: "mcq",
        question: "What is the decimal form of 9/1000?",
        options: ["0.009", "0.09", "0.9", "9.0"],
        correctAnswer: "0.009",
        explanation: "9/1000 means 9 thousandths, written as 0.009. 1000",
        wrongAnswerExplanations: {
            "0.09": "This is 9 hundredths.",
            "0.9": "This is 9 tenths.",
            "9.0": "This is 9 wholes."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch10_t1_qe12',
        type: "mcq",
        question: "Which number has 6 in the tenths place?",
        options: ["3.64", "3.46", "3.064", "3.046"],
        correctAnswer: "3.64",
        explanation: "In 3.64, 6 is in the tenths place. 🔟",
        wrongAnswerExplanations: {
            "3.46": "6 is in the hundredths place here.",
            "3.064": "6 is in the hundredths place here.",
            "3.046": "6 is in the thousandths place here."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch10_t1_qe13',
        type: "mcq",
        question: "What is the value of 0.75 in words?",
        options: ["Seventy-five hundredths", "Seventy-five tenths", "Seventy-five thousandths", "Seventy-five ones"],
        correctAnswer: "Seventy-five hundredths",
        explanation: "0.75 means 75 hundredths, as 7 is in tenths and 5 is in hundredths place. 📊",
        wrongAnswerExplanations: {
            "Seventy-five tenths": "This would be 7.5.",
            "Seventy-five thousandths": "This would be 0.075.",
            "Seventy-five ones": "This would be 75."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch10_t1_qe14',
        type: "mcq",
        question: "Which decimal is equivalent to 3/4?",
        options: ["0.75", "0.075", "0.0075", "0.750"],
        correctAnswer: "0.75",
        explanation: "3/4 equals 0.75, which is seventy-five hundredths. 🎯",
        wrongAnswerExplanations: {
            "0.075": "This is 75 thousandths.",
            "0.0075": "This is 75 ten-thousandths.",
            "0.750": "This is also correct but not in simplest form."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch10_t1_qe15',
        type: "mcq",
        question: "What is the decimal form of 1/8?",
        options: ["0.125", "0.0125", "0.00125", "1.25"],
        correctAnswer: "0.125",
        explanation: "1/8 equals 0.125, which is one hundred twenty-five thousandths. 📝",
        wrongAnswerExplanations: {
            "0.0125": "This is 125 ten-thousandths.",
            "0.00125": "This is 125 hundred-thousandths.",
            "1.25": "This is one and twenty-five hundredths."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch10_t1_qe16',
        type: "mcq",
        question: "Which number has 8 in the hundredths place?",
        options: ["5.28", "5.82", "5.082", "5.028"],
        correctAnswer: "5.28",
        explanation: "In 5.28, 8 is in the hundredths place. 💯",
        wrongAnswerExplanations: {
            "5.82": "8 is in the tenths place here.",
            "5.082": "8 is in the hundredths place but 0 is in the tenths.",
            "5.028": "8 is in the thousandths place here."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch10_t1_qe17',
        type: "mcq",
        question: "What is the value of 0.333 in words?",
        options: ["Three hundred thirty-three thousandths", "Three hundred thirty-three hundredths", "Three hundred thirty-three tenths", "Three hundred thirty-three ones"],
        correctAnswer: "Three hundred thirty-three thousandths",
        explanation: "0.333 has 3 in tenths, 3 in hundredths, and 3 in thousandths place. 🔢",
        wrongAnswerExplanations: {
            "Three hundred thirty-three hundredths": "This would be 3.33.",
            "Three hundred thirty-three tenths": "This would be 33.3.",
            "Three hundred thirty-three ones": "This would be 333."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch10_t1_qe18',
        type: "mcq",
        question: "Which decimal represents 'four and seven tenths'?",
        options: ["4.7", "4.07", "4.007", "4.70"],
        correctAnswer: "4.7",
        explanation: "Four and seven tenths is written as 4.7. 🔟",
        wrongAnswerExplanations: {
            "4.07": "This represents four and seven hundredths.",
            "4.007": "This represents four and seven thousandths.",
            "4.70": "This represents four and seventy hundredths."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch10_t1_qe19',
        type: "mcq",
        question: "What is the decimal form of 2/5?",
        options: ["0.4", "0.04", "0.004", "0.40"],
        correctAnswer: "0.4",
        explanation: "2/5 equals 0.4, which is four tenths. 🎯",
        wrongAnswerExplanations: {
            "0.04": "This is 4 hundredths.",
            "0.004": "This is 4 thousandths.",
            "0.40": "This is also correct but not in simplest form."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch10_t1_qe20',
        type: "mcq",
        question: "Which number has 9 in the thousandths place?",
        options: ["6.789", "6.798", "6.879", "6.897"],
        correctAnswer: "6.789",
        explanation: "In 6.789, 9 is in the thousandths place. 1000",
        wrongAnswerExplanations: {
            "6.798": "9 is in the hundredths place here.",
            "6.879": "9 is in the thousandths place but 7 is in the hundredths.",
            "6.897": "9 is in the tenths place here."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 