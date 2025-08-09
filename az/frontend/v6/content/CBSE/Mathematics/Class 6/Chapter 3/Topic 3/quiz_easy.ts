// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 6\Chapter3\Topic3\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch3_t3_qe1',
        type: "mcq",
        question: "Which of the following numbers is divisible by 2?",
        options: ["125", "237", "346", "459"],
        correctAnswer: "346",
        explanation: "346 ends in 6, which is even. Any number ending in 0, 2, 4, 6, or 8 is divisible by 2. ✅",
        wrongAnswerExplanations: {
            "125": "125 ends in 5, which is odd. Numbers ending in odd digits are not divisible by 2.",
            "237": "237 ends in 7, which is odd. Numbers ending in odd digits are not divisible by 2.",
            "459": "459 ends in 9, which is odd. Numbers ending in odd digits are not divisible by 2."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t3_qe2',
        type: "mcq",
        question: "Which number is divisible by 3?",
        options: ["241", "523", "902", "753"],
        correctAnswer: "753",
        explanation: "Sum of digits in 753: 7+5+3=15, and 15 is divisible by 3. So 753 is divisible by 3. 🧮",
        wrongAnswerExplanations: {
            "241": "Sum of digits in 241: 2+4+1=7, which is not divisible by 3.",
            "523": "Sum of digits in 523: 5+2+3=10, which is not divisible by 3.",
            "902": "Sum of digits in 902: 9+0+2=11, which is not divisible by 3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t3_qe3',
        type: "mcq",
        question: "Which of the following numbers is divisible by 4?",
        options: ["1236", "2345", "3456", "4567"],
        correctAnswer: "3456",
        explanation: "Last two digits of 3456 are 56, and 56 is divisible by 4. So 3456 is divisible by 4. ➗",
        wrongAnswerExplanations: {
            "1236": "Last two digits of 1236 are 36, and 36 is not divisible by 4.",
            "2345": "Last two digits of 2345 are 45, and 45 is not divisible by 4.",
            "4567": "Last two digits of 4567 are 67, and 67 is not divisible by 4."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t3_qe4',
        type: "mcq",
        question: "Which number is divisible by 5?",
        options: ["2346", "3457", "4568", "5670"],
        correctAnswer: "5670",
        explanation: "5670 ends in 0. Any number ending in 0 or 5 is divisible by 5. 🔢",
        wrongAnswerExplanations: {
            "2346": "2346 ends in 6, which is not 0 or 5, so it's not divisible by 5.",
            "3457": "3457 ends in 7, which is not 0 or 5, so it's not divisible by 5.",
            "4568": "4568 ends in 8, which is not 0 or 5, so it's not divisible by 5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t3_qe5',
        type: "mcq",
        question: "Which of the following numbers is divisible by 6?",
        options: ["235", "342", "457", "569"],
        correctAnswer: "342",
        explanation: "342 is even (ends in 2) and sum of digits 3+4+2=9 is divisible by 3. So it's divisible by 6. ✅",
        wrongAnswerExplanations: {
            "235": "235 is odd (not divisible by 2), so it can't be divisible by 6.",
            "457": "457 is odd (not divisible by 2), so it can't be divisible by 6.",
            "569": "569 is odd (not divisible by 2), so it can't be divisible by 6."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t3_qe6',
        type: "mcq",
        question: "Which number is divisible by 9?",
        options: ["235", "347", "458", "729"],
        correctAnswer: "729",
        explanation: "Sum of digits in 729: 7+2+9=18, and 18 is divisible by 9. So 729 is divisible by 9. 🧩",
        wrongAnswerExplanations: {
            "235": "Sum of digits in 235: 2+3+5=10, which is not divisible by 9.",
            "347": "Sum of digits in 347: 3+4+7=14, which is not divisible by 9.",
            "458": "Sum of digits in 458: 4+5+8=17, which is not divisible by 9."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t3_qe7',
        type: "mcq",
        question: "Which of the following numbers is divisible by 10?",
        options: ["123", "456", "789", "890"],
        correctAnswer: "890",
        explanation: "890 ends in 0. Any number ending in 0 is divisible by 10. 🔟",
        wrongAnswerExplanations: {
            "123": "123 doesn't end in 0, so it's not divisible by 10.",
            "456": "456 doesn't end in 0, so it's not divisible by 10.",
            "789": "789 doesn't end in 0, so it's not divisible by 10."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t3_qe8',
        type: "mcq",
        question: "Which divisibility rule states that the sum of all digits must be divisible by 3?",
        options: ["Divisibility by 2", "Divisibility by 3", "Divisibility by 4", "Divisibility by 5"],
        correctAnswer: "Divisibility by 3",
        explanation: "For divisibility by 3, the sum of all digits must be divisible by 3. 🧮",
        wrongAnswerExplanations: {
            "Divisibility by 2": "Divisibility by 2 checks if the last digit is 0, 2, 4, 6, or 8.",
            "Divisibility by 4": "Divisibility by 4 checks if the last two digits form a number divisible by 4.",
            "Divisibility by 5": "Divisibility by 5 checks if the last digit is 0 or 5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t3_qe9',
        type: "mcq",
        question: "What is the divisibility rule for 5?",
        options: [
            "The number must be odd",
            "The number must be even",
            "The last digit must be 0 or 5",
            "The sum of digits must be divisible by 5"
        ],
        correctAnswer: "The last digit must be 0 or 5",
        explanation: "A number is divisible by 5 if its last digit is 0 or 5. 🖐️",
        wrongAnswerExplanations: {
            "The number must be odd": "Being odd or even determines divisibility by 2, not 5.",
            "The number must be even": "Being odd or even determines divisibility by 2, not 5.",
            "The sum of digits must be divisible by 5": "This is not the divisibility rule for 5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t3_qe10',
        type: "mcq",
        question: "Which number is both divisible by 2 and 3?",
        options: ["11", "14", "21", "24"],
        correctAnswer: "24",
        explanation: "24 is even (divisible by 2) and 2+4=6 is divisible by 3. So 24 is divisible by both. ✨",
        wrongAnswerExplanations: {
            "11": "11 is odd (not divisible by 2) and 1+1=2 is not divisible by 3.",
            "14": "14 is even (divisible by 2) but 1+4=5 is not divisible by 3.",
            "21": "21 is odd (not divisible by 2) but 2+1=3 is divisible by 3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t3_qe11',
        type: "mcq",
        question: "What is the divisibility rule for 4?",
        options: [
            "The last digit must be divisible by 4",
            "The last two digits must form a number divisible by 4",
            "The sum of all digits must be divisible by 4",
            "The number must be even"
        ],
        correctAnswer: "The last two digits must form a number divisible by 4",
        explanation: "A number is divisible by 4 if the last two digits form a number that is divisible by 4. 🧩",
        wrongAnswerExplanations: {
            "The last digit must be divisible by 4": "This is not the divisibility rule for 4.",
            "The sum of all digits must be divisible by 4": "This is not the divisibility rule for 4.",
            "The number must be even": "Being even is necessary but not sufficient for divisibility by 4."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t3_qe12',
        type: "mcq",
        question: "Which of the following is the divisibility rule for 10?",
        options: [
            "The number must be even",
            "The last digit must be 0",
            "The sum of digits must be divisible by 10",
            "The last two digits must be divisible by 10"
        ],
        correctAnswer: "The last digit must be 0",
        explanation: "A number is divisible by 10 if its last digit is 0. 🔟",
        wrongAnswerExplanations: {
            "The number must be even": "Being even determines divisibility by 2, not 10.",
            "The sum of digits must be divisible by 10": "This is not the divisibility rule for 10.",
            "The last two digits must be divisible by 10": "This is not the divisibility rule for 10."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t3_qe13',
        type: "mcq",
        question: "Is 2358 divisible by 6?",
        options: ["Yes", "No", "Cannot be determined", "Need more information"],
        correctAnswer: "Yes",
        explanation: "2358 is even (ends in 8) and 2+3+5+8=18 is divisible by 3. So it's divisible by 6. ✅",
        wrongAnswerExplanations: {
            "No": "2358 meets both conditions for divisibility by 6.",
            "Cannot be determined": "We can determine divisibility by 6 using its rules.",
            "Need more information": "We have all the information needed to check divisibility by 6."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t3_qe14',
        type: "mcq",
        question: "Which of these numbers is divisible by 9?",
        options: ["123", "245", "367", "999"],
        correctAnswer: "999",
        explanation: "Sum of digits in 999: 9+9+9=27, and 27 is divisible by 9. So 999 is divisible by 9. 🧮",
        wrongAnswerExplanations: {
            "123": "Sum of digits in 123: 1+2+3=6, which is not divisible by 9.",
            "245": "Sum of digits in 245: 2+4+5=11, which is not divisible by 9.",
            "367": "Sum of digits in 367: 3+6+7=16, which is not divisible by 9."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t3_qe15',
        type: "mcq",
        question: "A number is divisible by 6 if it is divisible by:",
        options: ["2 and 3", "2 and 4", "3 and 4", "3 and 5"],
        correctAnswer: "2 and 3",
        explanation: "A number is divisible by 6 if it is divisible by both 2 and 3. 🔢",
        wrongAnswerExplanations: {
            "2 and 4": "Being divisible by 2 and 4 makes a number divisible by 4, not necessarily by 6.",
            "3 and 4": "Being divisible by 3 and 4 makes a number divisible by 12, not just 6.",
            "3 and 5": "Being divisible by 3 and 5 makes a number divisible by 15, not 6."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t3_qe16',
        type: "mcq",
        question: "Is 3475 divisible by 5?",
        options: ["Yes", "No", "Cannot be determined", "Need more information"],
        correctAnswer: "Yes",
        explanation: "3475 ends in 5. Any number ending in 0 or 5 is divisible by 5. ✅",
        wrongAnswerExplanations: {
            "No": "3475 meets the condition for divisibility by 5.",
            "Cannot be determined": "We can determine divisibility by 5 using its rule.",
            "Need more information": "We have all the information needed to check divisibility by 5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t3_qe17',
        type: "mcq",
        question: "Which of the following is NOT divisible by 3?",
        options: ["123", "234", "345", "457"],
        correctAnswer: "457",
        explanation: "Sum of digits in 457: 4+5+7=16, and 16 is not divisible by 3. So 457 is not divisible by 3. ❌",
        wrongAnswerExplanations: {
            "123": "Sum of digits in 123: 1+2+3=6, which is divisible by 3.",
            "234": "Sum of digits in 234: 2+3+4=9, which is divisible by 3.",
            "345": "Sum of digits in 345: 3+4+5=12, which is divisible by 3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t3_qe18',
        type: "mcq",
        question: "If a number is divisible by both 2 and 5, then it is definitely divisible by:",
        options: ["7", "8", "9", "10"],
        correctAnswer: "10",
        explanation: "A number divisible by both 2 and 5 is divisible by 10. Such numbers end in 0. 🔟",
        wrongAnswerExplanations: {
            "7": "Divisibility by 2 and 5 doesn't guarantee divisibility by 7.",
            "8": "Divisibility by 2 and 5 doesn't guarantee divisibility by 8.",
            "9": "Divisibility by 2 and 5 doesn't guarantee divisibility by 9."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t3_qe19',
        type: "mcq",
        question: "The divisibility rule for 2 states that:",
        options: [
            "The sum of digits must be divisible by 2",
            "The last digit must be divisible by 2",
            "The last digit must be 0, 2, 4, 6, or 8",
            "The first digit must be even"
        ],
        correctAnswer: "The last digit must be 0, 2, 4, 6, or 8",
        explanation: "A number is divisible by 2 if its last digit is 0, 2, 4, 6, or 8 (even). ✌️",
        wrongAnswerExplanations: {
            "The sum of digits must be divisible by 2": "This is not the divisibility rule for 2.",
            "The last digit must be divisible by 2": "This is technically correct, but not the standard way to state the rule.",
            "The first digit must be even": "The first digit has no bearing on divisibility by 2."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t3_qe20',
        type: "mcq",
        question: "Which number is divisible by both 2 and 5?",
        options: ["15", "22", "30", "45"],
        correctAnswer: "30",
        explanation: "30 ends in 0, so it's divisible by both 2 and 5. Any number ending in 0 has this property. 🎯",
        wrongAnswerExplanations: {
            "15": "15 ends in 5, so it's divisible by 5 but not by 2.",
            "22": "22 ends in 2, so it's divisible by 2 but not by 5.",
            "45": "45 ends in 5, so it's divisible by 5 but not by 2."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
