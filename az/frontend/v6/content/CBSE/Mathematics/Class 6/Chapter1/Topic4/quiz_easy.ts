// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 6\Chapter1\Topic4\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch1_t4_qe1',
        type: "mcq",
        question: "The population of a city is 1,234,567. How would you read this number?",
        options: [
            "One million two hundred thirty-four thousand five hundred sixty-seven",
            "One million two hundred thirty-four thousand five hundred sixty",
            "One million two hundred thirty-four thousand five hundred",
            "One million two hundred thirty-four thousand"
        ],
        correctAnswer: "One million two hundred thirty-four thousand five hundred sixty-seven",
        explanation: "The number 1,234,567 is read as one million, two hundred thirty-four thousand, five hundred sixty-seven. Each group of three digits represents a different place value. 📊",
        wrongAnswerExplanations: {
            "One million two hundred thirty-four thousand five hundred sixty": "This is missing the 'seven' at the end.",
            "One million two hundred thirty-four thousand five hundred": "This is missing the 'sixty-seven' at the end.",
            "One million two hundred thirty-four thousand": "This is missing the 'five hundred sixty-seven' at the end."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch1_t4_qe2',
        type: "mcq",
        question: "A company's annual revenue is ₹5,678,900. Which digit is in the hundred thousands place?",
        options: [
            "5",
            "6",
            "7",
            "8"
        ],
        correctAnswer: "6",
        explanation: "In ₹5,678,900, the digit 6 is in the hundred thousands place. The place values from right to left are: ones, tens, hundreds, thousands, ten thousands, hundred thousands, millions. 💰",
        wrongAnswerExplanations: {
            "5": "This is in the millions place.",
            "7": "This is in the ten thousands place.",
            "8": "This is in the thousands place."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch1_t4_qe3',
        type: "mcq",
        question: "The distance from Earth to the Moon is approximately 384,400 kilometers. How would you write this number in expanded form?",
        options: [
            "300,000 + 80,000 + 4,000 + 400",
            "300,000 + 80,000 + 4,000 + 40",
            "300,000 + 80,000 + 4,000 + 4",
            "300,000 + 80,000 + 4,000"
        ],
        correctAnswer: "300,000 + 80,000 + 4,000 + 400",
        explanation: "384,400 = 300,000 (3 hundred thousands) + 80,000 (8 ten thousands) + 4,000 (4 thousands) + 400 (4 hundreds). 🌙",
        wrongAnswerExplanations: {
            "300,000 + 80,000 + 4,000 + 40": "This would equal 384,040, not 384,400.",
            "300,000 + 80,000 + 4,000 + 4": "This would equal 384,004, not 384,400.",
            "300,000 + 80,000 + 4,000": "This would equal 384,000, not 384,400."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch1_t4_qe4',
        type: "mcq",
        question: "A stadium has 45,678 seats. What is the value of the digit 5 in this number?",
        options: [
            "5",
            "50",
            "5,000",
            "50,000"
        ],
        correctAnswer: "5,000",
        explanation: "In 45,678, the digit 5 is in the thousands place, so its value is 5,000. The place values are: 4 (ten thousands), 5 (thousands), 6 (hundreds), 7 (tens), 8 (ones). 🏟️",
        wrongAnswerExplanations: {
            "5": "This would be the value if 5 was in the ones place.",
            "50": "This would be the value if 5 was in the tens place.",
            "50,000": "This would be the value if 5 was in the ten thousands place."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch1_t4_qe5',
        type: "mcq",
        question: "The population of India is approximately 1,400,000,000. How many zeros are in this number?",
        options: [
            "6",
            "7",
            "8",
            "9"
        ],
        correctAnswer: "8",
        explanation: "1,400,000,000 has 8 zeros. It's read as one billion four hundred million. The number of zeros helps us understand the scale of large numbers. 🌍",
        wrongAnswerExplanations: {
            "6": "This would be for a number like 1,400,000 (one million four hundred thousand).",
            "7": "This would be for a number like 14,000,000 (fourteen million).",
            "9": "This would be for a number like 1,400,000,000,000 (one trillion four hundred billion)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch1_t4_qe6',
        type: "mcq",
        question: "A book has 123,456 words. What is the place value of the digit 2?",
        options: [
            "2",
            "20",
            "2,000",
            "20,000"
        ],
        correctAnswer: "20,000",
        explanation: "In 123,456, the digit 2 is in the ten thousands place, so its value is 20,000. Place values help us understand the magnitude of each digit. 📚",
        wrongAnswerExplanations: {
            "2": "This would be the value if 2 was in the ones place.",
            "20": "This would be the value if 2 was in the tens place.",
            "2,000": "This would be the value if 2 was in the thousands place."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch1_t4_qe7',
        type: "mcq",
        question: "A company sold 1,234,567 products last year. What is the value of the digit 3?",
        options: [
            "3",
            "30",
            "3,000",
            "30,000"
        ],
        correctAnswer: "30,000",
        explanation: "In 1,234,567, the digit 3 is in the ten thousands place, so its value is 30,000. Understanding place values helps in reading and writing large numbers. 📦",
        wrongAnswerExplanations: {
            "3": "This would be the value if 3 was in the ones place.",
            "30": "This would be the value if 3 was in the tens place.",
            "3,000": "This would be the value if 3 was in the thousands place."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch1_t4_qe8',
        type: "mcq",
        question: "The distance from Earth to the Sun is about 149,600,000 kilometers. How would you write this number in words?",
        options: [
            "One hundred forty-nine million six hundred thousand",
            "One hundred forty-nine million six hundred",
            "One hundred forty-nine million sixty thousand",
            "One hundred forty-nine million six thousand"
        ],
        correctAnswer: "One hundred forty-nine million six hundred thousand",
        explanation: "149,600,000 is read as one hundred forty-nine million, six hundred thousand. Each group of three digits represents a different place value. ☀️",
        wrongAnswerExplanations: {
            "One hundred forty-nine million six hundred": "This would be 149,000,600.",
            "One hundred forty-nine million sixty thousand": "This would be 149,060,000.",
            "One hundred forty-nine million six thousand": "This would be 149,006,000."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch1_t4_qe9',
        type: "mcq",
        question: "A city has 2,345,678 residents. What is the value of the digit 4?",
        options: [
            "4",
            "40",
            "4,000",
            "40,000"
        ],
        correctAnswer: "40,000",
        explanation: "In 2,345,678, the digit 4 is in the ten thousands place, so its value is 40,000. Place values help us understand the magnitude of each digit. 🏙️",
        wrongAnswerExplanations: {
            "4": "This would be the value if 4 was in the ones place.",
            "40": "This would be the value if 4 was in the tens place.",
            "4,000": "This would be the value if 4 was in the thousands place."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch1_t4_qe10',
        type: "mcq",
        question: "A company's annual profit is ₹12,345,678. Which digit is in the millions place?",
        options: [
            "1",
            "2",
            "3",
            "4"
        ],
        correctAnswer: "2",
        explanation: "In ₹12,345,678, the digit 2 is in the millions place. The place values from right to left are: ones, tens, hundreds, thousands, ten thousands, hundred thousands, millions, ten millions. 💵",
        wrongAnswerExplanations: {
            "1": "This is in the ten millions place.",
            "3": "This is in the hundred thousands place.",
            "4": "This is in the ten thousands place."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch1_t4_qe11',
        type: "mcq",
        question: "The number of stars in our galaxy is estimated to be 100,000,000,000. How many zeros are in this number?",
        options: [
            "9",
            "10",
            "11",
            "12"
        ],
        correctAnswer: "11",
        explanation: "100,000,000,000 has 11 zeros. It's read as one hundred billion. The number of zeros helps us understand the scale of very large numbers. 🌟",
        wrongAnswerExplanations: {
            "9": "This would be for a number like 1,000,000,000 (one billion).",
            "10": "This would be for a number like 10,000,000,000 (ten billion).",
            "12": "This would be for a number like 1,000,000,000,000 (one trillion)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch1_t4_qe12',
        type: "mcq",
        question: "A library has 123,456 books. What is the value of the digit 1?",
        options: [
            "1",
            "10",
            "100,000",
            "1,000,000"
        ],
        correctAnswer: "100,000",
        explanation: "In 123,456, the digit 1 is in the hundred thousands place, so its value is 100,000. Place values help us understand the magnitude of each digit. 📚",
        wrongAnswerExplanations: {
            "1": "This would be the value if 1 was in the ones place.",
            "10": "This would be the value if 1 was in the tens place.",
            "1,000,000": "This would be the value if 1 was in the millions place."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch1_t4_qe13',
        type: "mcq",
        question: "The population of a country is 34,567,890. What is the value of the digit 6?",
        options: [
            "6",
            "60",
            "6,000",
            "60,000"
        ],
        correctAnswer: "60,000",
        explanation: "In 34,567,890, the digit 6 is in the ten thousands place, so its value is 60,000. Understanding place values helps in reading and writing large numbers. 🌍",
        wrongAnswerExplanations: {
            "6": "This would be the value if 6 was in the ones place.",
            "60": "This would be the value if 6 was in the tens place.",
            "6,000": "This would be the value if 6 was in the thousands place."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch1_t4_qe14',
        type: "mcq",
        question: "A company's revenue is ₹56,789,012. Which digit is in the hundred thousands place?",
        options: [
            "5",
            "6",
            "7",
            "8"
        ],
        correctAnswer: "7",
        explanation: "In ₹56,789,012, the digit 7 is in the hundred thousands place. The place values from right to left are: ones, tens, hundreds, thousands, ten thousands, hundred thousands, millions, ten millions. 💰",
        wrongAnswerExplanations: {
            "5": "This is in the ten millions place.",
            "6": "This is in the millions place.",
            "8": "This is in the ten thousands place."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch1_t4_qe15',
        type: "mcq",
        question: "The number of cells in the human body is estimated to be 37,200,000,000,000. How would you read this number?",
        options: [
            "Thirty-seven trillion two hundred billion",
            "Thirty-seven billion two hundred million",
            "Thirty-seven million two hundred thousand",
            "Thirty-seven thousand two hundred"
        ],
        correctAnswer: "Thirty-seven trillion two hundred billion",
        explanation: "37,200,000,000,000 is read as thirty-seven trillion, two hundred billion. Each group of three digits represents a different place value. 🧬",
        wrongAnswerExplanations: {
            "Thirty-seven billion two hundred million": "This would be 37,200,000,000.",
            "Thirty-seven million two hundred thousand": "This would be 37,200,000.",
            "Thirty-seven thousand two hundred": "This would be 37,200."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch1_t4_qe16',
        type: "mcq",
        question: "A stadium has 89,123,456 seats. What is the value of the digit 2?",
        options: [
            "2",
            "20",
            "2,000",
            "20,000"
        ],
        correctAnswer: "20,000",
        explanation: "In 89,123,456, the digit 2 is in the ten thousands place, so its value is 20,000. Place values help us understand the magnitude of each digit. 🏟️",
        wrongAnswerExplanations: {
            "2": "This would be the value if 2 was in the ones place.",
            "20": "This would be the value if 2 was in the tens place.",
            "2,000": "This would be the value if 2 was in the thousands place."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch1_t4_qe17',
        type: "mcq",
        question: "The number of trees in a forest is 12,345,678. What is the value of the digit 3?",
        options: [
            "3",
            "30",
            "3,000",
            "30,000"
        ],
        correctAnswer: "30,000",
        explanation: "In 12,345,678, the digit 3 is in the ten thousands place, so its value is 30,000. Understanding place values helps in reading and writing large numbers. 🌳",
        wrongAnswerExplanations: {
            "3": "This would be the value if 3 was in the ones place.",
            "30": "This would be the value if 3 was in the tens place.",
            "3,000": "This would be the value if 3 was in the thousands place."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch1_t4_qe18',
        type: "mcq",
        question: "A company's annual sales are ₹45,678,901. Which digit is in the millions place?",
        options: [
            "4",
            "5",
            "6",
            "7"
        ],
        correctAnswer: "5",
        explanation: "In ₹45,678,901, the digit 5 is in the millions place. The place values from right to left are: ones, tens, hundreds, thousands, ten thousands, hundred thousands, millions, ten millions. 💵",
        wrongAnswerExplanations: {
            "4": "This is in the ten millions place.",
            "6": "This is in the hundred thousands place.",
            "7": "This is in the ten thousands place."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch1_t4_qe19',
        type: "mcq",
        question: "The number of grains of sand on a beach is estimated to be 7,500,000,000,000. How many zeros are in this number?",
        options: [
            "9",
            "10",
            "11",
            "12"
        ],
        correctAnswer: "11",
        explanation: "7,500,000,000,000 has 11 zeros. It's read as seven trillion five hundred billion. The number of zeros helps us understand the scale of very large numbers. 🏖️",
        wrongAnswerExplanations: {
            "9": "This would be for a number like 7,500,000,000 (seven billion five hundred million).",
            "10": "This would be for a number like 75,000,000,000 (seventy-five billion).",
            "12": "This would be for a number like 7,500,000,000,000,000 (seven quadrillion five hundred trillion)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch1_t4_qe20',
        type: "mcq",
        question: "A city's budget is ₹123,456,789. What is the value of the digit 4?",
        options: [
            "4",
            "40",
            "4,000",
            "40,000"
        ],
        correctAnswer: "40,000",
        explanation: "In ₹123,456,789, the digit 4 is in the ten thousands place, so its value is 40,000. Place values help us understand the magnitude of each digit. 💰",
        wrongAnswerExplanations: {
            "4": "This would be the value if 4 was in the ones place.",
            "40": "This would be the value if 4 was in the tens place.",
            "4,000": "This would be the value if 4 was in the thousands place."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
