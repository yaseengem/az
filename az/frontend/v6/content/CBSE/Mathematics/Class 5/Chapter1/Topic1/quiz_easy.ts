// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 5\Chapter1\Topic1\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl5_ch1_t1_qe1',
        type: "mcq",
        question: "A fishing boat catches 2,500 fish in one day. How many groups of 100 fish is this?",
        options: ["2", "25", "250", "2,500"],
        correctAnswer: "25",
        explanation: "2,500 ÷ 100 = 25 groups of 100 fish. This helps us understand large numbers better. 🐟",
        wrongAnswerExplanations: {
            "2": "2 groups would be 200 fish, which is much less than 2,500.",
            "250": "250 groups would be 25,000 fish, which is too many.",
            "2,500": "This is the total number of fish, not the number of groups of 100."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch1_t1_qe2',
        type: "mcq",
        question: "Which number is greater: 45,000 or 54,000?",
        options: ["45,000", "54,000", "They are equal", "Cannot be determined"],
        correctAnswer: "54,000",
        explanation: "54,000 is greater than 45,000 because 5 is greater than 4 in the ten thousands place. 🔢",
        wrongAnswerExplanations: {
            "45,000": "45,000 is less than 54,000. Look at the ten thousands place.",
            "They are equal": "The numbers are different. Look at the ten thousands place.",
            "Cannot be determined": "We can compare these numbers by looking at their place values."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch1_t1_qe3',
        type: "mcq",
        question: "A boat can carry 5,000 kg of fish. How many metric tons is this?",
        options: ["5 tons", "50 tons", "500 tons", "5,000 tons"],
        correctAnswer: "5 tons",
        explanation: "1 metric ton = 1,000 kg, so 5,000 kg = 5 metric tons. 🚢",
        wrongAnswerExplanations: {
            "50 tons": "50 tons would be 50,000 kg, which is too much.",
            "500 tons": "500 tons would be 500,000 kg, which is way too much.",
            "5,000 tons": "5,000 tons would be 5,000,000 kg, which is incorrect."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch1_t1_qe4',
        type: "mcq",
        question: "Round 3,678 to the nearest 100.",
        options: ["3,600", "3,700", "3,680", "3,700"],
        correctAnswer: "3,700",
        explanation: "The digit in the tens place is 7, which is 5 or greater, so we round up to 3,700. 🔄",
        wrongAnswerExplanations: {
            "3,600": "This would be rounding down, but we need to round up because of the 7 in the tens place.",
            "3,680": "This is rounding to the nearest 10, not 100.",
            "3,700": "This is the correct answer, but it appears twice in the options."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch1_t1_qe5',
        type: "mcq",
        question: "A fish market sells 3,500 kg of fish daily. If each kg costs ₹200, what are the total daily sales?",
        options: ["₹70,000", "₹700,000", "₹7,000,000", "₹70,000,000"],
        correctAnswer: "₹700,000",
        explanation: "3,500 × ₹200 = ₹700,000. This is a large number representing daily sales. 💰",
        wrongAnswerExplanations: {
            "₹70,000": "This would be the answer if we multiplied by ₹20 instead of ₹200.",
            "₹7,000,000": "This would be the answer if we multiplied by ₹2,000 instead of ₹200.",
            "₹70,000,000": "This is way too large for the given numbers."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch1_t1_qe6',
        type: "mcq",
        question: "In the number 45,678, which digit is in the thousands place?",
        options: ["4", "5", "6", "7"],
        correctAnswer: "5",
        explanation: "The digit 5 is in the thousands place, representing 5,000. 🔢",
        wrongAnswerExplanations: {
            "4": "4 is in the ten thousands place, representing 40,000.",
            "6": "6 is in the hundreds place, representing 600.",
            "7": "7 is in the tens place, representing 70."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch1_t1_qe7',
        type: "mcq",
        question: "A town has 25,000 people. If 1,000 new people move in, what is the new population?",
        options: ["24,000", "25,000", "26,000", "27,000"],
        correctAnswer: "26,000",
        explanation: "25,000 + 1,000 = 26,000 people. This shows how populations can grow. 👥",
        wrongAnswerExplanations: {
            "24,000": "This would be the answer if people left instead of moved in.",
            "25,000": "This is the original population before the new people arrived.",
            "27,000": "This would be adding 2,000 people, not 1,000."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch1_t1_qe8',
        type: "mcq",
        question: "Which symbol should be used to compare 3,000 and 2,500?",
        options: [">", "<", "=", "≥"],
        correctAnswer: ">",
        explanation: "3,000 is greater than 2,500, so we use the > symbol. 🔍",
        wrongAnswerExplanations: {
            "<": "This would mean 3,000 is less than 2,500, which is not true.",
            "=": "This would mean the numbers are equal, which they are not.",
            "≥": "While 3,000 is greater than 2,500, the ≥ symbol is not needed here."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch1_t1_qe9',
        type: "mcq",
        question: "A boat can carry 4,000 kg. If each box weighs 50 kg, how many boxes can it carry?",
        options: ["8", "80", "800", "8,000"],
        correctAnswer: "80",
        explanation: "4,000 ÷ 50 = 80 boxes. This shows how to divide large numbers. 📦",
        wrongAnswerExplanations: {
            "8": "This would be the answer if each box weighed 500 kg.",
            "800": "This would be the answer if each box weighed 5 kg.",
            "8,000": "This is way too many boxes for the given weight."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch1_t1_qe10',
        type: "mcq",
        question: "What is 5,000,000 grams equal to in kilograms?",
        options: ["5 kg", "50 kg", "500 kg", "5,000 kg"],
        correctAnswer: "5,000 kg",
        explanation: "1,000 grams = 1 kg, so 5,000,000 grams = 5,000 kg. ⚖️",
        wrongAnswerExplanations: {
            "5 kg": "This would be 5,000 grams, not 5,000,000 grams.",
            "50 kg": "This would be 50,000 grams, not 5,000,000 grams.",
            "500 kg": "This would be 500,000 grams, not 5,000,000 grams."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch1_t1_qe11',
        type: "mcq",
        question: "Which of these numbers is the smallest?",
        options: ["45,000", "54,000", "35,000", "53,000"],
        correctAnswer: "35,000",
        explanation: "35,000 is the smallest number among the options. Look at the ten thousands place. 🔍",
        wrongAnswerExplanations: {
            "45,000": "This is larger than 35,000.",
            "54,000": "This is the largest number among the options.",
            "53,000": "This is larger than 35,000."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch1_t1_qe12',
        type: "mcq",
        question: "A small shop makes ₹50,000 in a month. How much does it make in 6 months?",
        options: ["₹250,000", "₹300,000", "₹350,000", "₹400,000"],
        correctAnswer: "₹300,000",
        explanation: "₹50,000 × 6 = ₹300,000. This shows how to multiply large numbers. 💰",
        wrongAnswerExplanations: {
            "₹250,000": "This would be the answer for 5 months, not 6.",
            "₹350,000": "This would be the answer for 7 months, not 6.",
            "₹400,000": "This would be the answer for 8 months, not 6."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch1_t1_qe13',
        type: "mcq",
        question: "Round 12,345 to the nearest 1,000.",
        options: ["12,000", "12,300", "12,400", "13,000"],
        correctAnswer: "12,000",
        explanation: "The digit in the hundreds place is 3, which is less than 5, so we round down to 12,000. 🔄",
        wrongAnswerExplanations: {
            "12,300": "This is rounding to the nearest 100, not 1,000.",
            "12,400": "This is not the correct rounding to the nearest 1,000.",
            "13,000": "We round down because the hundreds digit is less than 5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch1_t1_qe14',
        type: "mcq",
        question: "A school has 1,250 students. If 250 more students join, what is the new total?",
        options: ["1,000", "1,250", "1,500", "1,750"],
        correctAnswer: "1,500",
        explanation: "1,250 + 250 = 1,500 students. This shows how to add large numbers. 👨‍🎓",
        wrongAnswerExplanations: {
            "1,000": "This would be the answer if 250 students left instead of joined.",
            "1,250": "This is the original number of students before the new ones joined.",
            "1,750": "This would be adding 500 students, not 250."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch1_t1_qe15',
        type: "mcq",
        question: "Which of these is NOT a way to write 2,500?",
        options: ["Twenty-five hundred", "Two thousand five hundred", "2,500", "2,050"],
        correctAnswer: "2,050",
        explanation: "2,050 is two thousand fifty, not two thousand five hundred. 🔢",
        wrongAnswerExplanations: {
            "Twenty-five hundred": "This is a correct way to say 2,500.",
            "Two thousand five hundred": "This is a correct way to say 2,500.",
            "2,500": "This is the standard way to write 2,500."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch1_t1_qe16',
        type: "mcq",
        question: "A fishing boat catches 2,500 kg of fish. If each kg sells for ₹150, what's the total value?",
        options: ["₹375,000", "₹375,500", "₹375,050", "₹375,005"],
        correctAnswer: "₹375,000",
        explanation: "2,500 × ₹150 = ₹375,000. This shows how to multiply large numbers. 💰",
        wrongAnswerExplanations: {
            "₹375,500": "This is not the correct product of 2,500 and 150.",
            "₹375,050": "This is not the correct product of 2,500 and 150.",
            "₹375,005": "This is not the correct product of 2,500 and 150."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch1_t1_qe17',
        type: "mcq",
        question: "Which number is between 3,000 and 4,000?",
        options: ["2,500", "3,500", "4,500", "5,000"],
        correctAnswer: "3,500",
        explanation: "3,500 is greater than 3,000 and less than 4,000. 🔍",
        wrongAnswerExplanations: {
            "2,500": "This is less than 3,000.",
            "4,500": "This is greater than 4,000.",
            "5,000": "This is greater than 4,000."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch1_t1_qe18',
        type: "mcq",
        question: "What is the place value of 7 in 45,678?",
        options: ["7", "70", "700", "7,000"],
        correctAnswer: "70",
        explanation: "The digit 7 is in the tens place, so its value is 70. 🔢",
        wrongAnswerExplanations: {
            "7": "This would be the value if 7 was in the ones place.",
            "700": "This would be the value if 7 was in the hundreds place.",
            "7,000": "This would be the value if 7 was in the thousands place."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch1_t1_qe19',
        type: "mcq",
        question: "A boat can carry 5,000 kg. If it already has 3,500 kg, how much more can it carry?",
        options: ["1,000 kg", "1,500 kg", "2,000 kg", "2,500 kg"],
        correctAnswer: "1,500 kg",
        explanation: "5,000 - 3,500 = 1,500 kg more can be carried. ⚖️",
        wrongAnswerExplanations: {
            "1,000 kg": "This is less than the actual remaining capacity.",
            "2,000 kg": "This is more than the actual remaining capacity.",
            "2,500 kg": "This is more than the actual remaining capacity."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch1_t1_qe20',
        type: "mcq",
        question: "Which of these numbers is closest to 2,500?",
        options: ["2,400", "2,450", "2,550", "2,600"],
        correctAnswer: "2,450",
        explanation: "2,450 is only 50 away from 2,500, which is the smallest difference. 🔍",
        wrongAnswerExplanations: {
            "2,400": "This is 100 away from 2,500.",
            "2,550": "This is 50 away from 2,500, but 2,450 is also 50 away.",
            "2,600": "This is 100 away from 2,500."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 