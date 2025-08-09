import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch16_t3_qe1',
        type: "mcq",
        question: "What is the result of 25 × 25 using the trick: (20 + 5)(20 + 5) = 20² + 2(20 × 5) + 5²?",
        options: ["525", "625", "725", "825"],
        correctAnswer: "625",
        explanation: "Using the trick: 20² = 400, 2(20 × 5) = 200, 5² = 25. So 400 + 200 + 25 = 625. 🧮",
        wrongAnswerExplanations: {
            "525": "This is incorrect. You might have missed adding one of the terms.",
            "725": "This is incorrect. You might have added an extra 100.",
            "825": "This is incorrect. You might have doubled one of the terms."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch16_t3_qe2',
        type: "mcq",
        question: "Using the divisibility rule for 11, is 45,672 divisible by 11?",
        options: ["Yes, because alternating sum is 0", "No, because alternating sum is 11", "Yes, because alternating sum is 22", "No, because alternating sum is -1"],
        correctAnswer: "No, because alternating sum is -1",
        explanation: "Alternating sum: 2 - 7 + 6 - 5 + 4 - 4 = -1. Since -1 ≠ 0, 45,672 is not divisible by 11. 🔢",
        wrongAnswerExplanations: {
            "Yes, because alternating sum is 0": "The alternating sum is not 0, it's -1.",
            "No, because alternating sum is 11": "The alternating sum is not 11, it's -1.",
            "Yes, because alternating sum is 22": "The alternating sum is not 22, it's -1."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch16_t3_qe3',
        type: "mcq",
        question: "What is 15² using the trick: (a + b)² = a² + 2ab + b², where 15 = 10 + 5?",
        options: ["205", "215", "225", "235"],
        correctAnswer: "225",
        explanation: "Using (10 + 5)² = 10² + 2(10 × 5) + 5² = 100 + 100 + 25 = 225. 📐",
        wrongAnswerExplanations: {
            "205": "You might have forgotten to add 2ab correctly.",
            "215": "You might have made a calculation error in one of the terms.",
            "235": "You might have added the terms incorrectly."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch16_t3_qe4',
        type: "mcq",
        question: "Using the divisibility rule for 3, is 5,724 divisible by 3?",
        options: ["Yes, sum is 18", "No, sum is 17", "Yes, sum is 19", "No, sum is 20"],
        correctAnswer: "Yes, sum is 18",
        explanation: "Sum of digits: 5 + 7 + 2 + 4 = 18. Since 18 is divisible by 3, 5,724 is divisible by 3. ➗",
        wrongAnswerExplanations: {
            "No, sum is 17": "The sum is actually 18, not 17.",
            "Yes, sum is 19": "The sum is actually 18, not 19.",
            "No, sum is 20": "The sum is actually 18, not 20."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch16_t3_qe5',
        type: "mcq",
        question: "What is 45 × 45 using the trick: (40 + 5)(40 + 5)?",
        options: ["1,825", "2,025", "2,225", "2,425"],
        correctAnswer: "2,025",
        explanation: "Using (40 + 5)² = 40² + 2(40 × 5) + 5² = 1,600 + 400 + 25 = 2,025. 🎯",
        wrongAnswerExplanations: {
            "1,825": "You might have made an error in calculating 40².",
            "2,225": "You might have added an extra 200.",
            "2,425": "You might have doubled one of the terms incorrectly."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl8_ch16_t3_qe6',
        type: "mcq",
        question: "Using the divisibility rule for 4, is 1,356 divisible by 4?",
        options: ["Yes, last two digits form 56", "No, last two digits form 56", "Yes, last two digits form 36", "No, last two digits form 36"],
        correctAnswer: "Yes, last two digits form 56",
        explanation: "56 is divisible by 4 (56 = 4 × 14), so 1,356 is divisible by 4. 🎲",
        wrongAnswerExplanations: {
            "No, last two digits form 56": "56 is divisible by 4, so the number is divisible by 4.",
            "Yes, last two digits form 36": "The last two digits are 56, not 36.",
            "No, last two digits form 36": "The last two digits are 56, not 36."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch16_t3_qe7',
        type: "mcq",
        question: "What is 95 × 95 using the trick: (100 - 5)(100 - 5)?",
        options: ["8,025", "8,525", "9,025", "9,525"],
        correctAnswer: "9,025",
        explanation: "Using (100 - 5)² = 100² - 2(100 × 5) + 5² = 10,000 - 1,000 + 25 = 9,025. 🎨",
        wrongAnswerExplanations: {
            "8,025": "You might have subtracted too much in the middle term.",
            "8,525": "You might have made a calculation error.",
            "9,525": "You might have added instead of subtracting the middle term."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch16_t3_qe8',
        type: "mcq",
        question: "Using the divisibility rule for 8, is 3,456 divisible by 8?",
        options: ["Yes, last three digits form 456", "No, last three digits form 456", "Yes, last three digits form 356", "No, last three digits form 356"],
        correctAnswer: "Yes, last three digits form 456",
        explanation: "456 is divisible by 8 (456 = 8 × 57), so 3,456 is divisible by 8. 🎭",
        wrongAnswerExplanations: {
            "No, last three digits form 456": "456 is divisible by 8, so the number is divisible by 8.",
            "Yes, last three digits form 356": "The last three digits are 456, not 356.",
            "No, last three digits form 356": "The last three digits are 456, not 356."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch16_t3_qe9',
        type: "mcq",
        question: "What is 85 × 85 using the trick: (80 + 5)(80 + 5)?",
        options: ["6,225", "7,225", "8,225", "9,225"],
        correctAnswer: "7,225",
        explanation: "Using (80 + 5)² = 80² + 2(80 × 5) + 5² = 6,400 + 800 + 25 = 7,225. 🎪",
        wrongAnswerExplanations: {
            "6,225": "You might have made an error in calculating 80².",
            "8,225": "You might have added an extra 1,000.",
            "9,225": "You might have doubled one of the terms incorrectly."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch16_t3_qe10',
        type: "mcq",
        question: "Using the divisibility rule for 6, is 4,578 divisible by 6?",
        options: ["Yes, divisible by both 2 and 3", "No, only divisible by 2", "Yes, only divisible by 3", "No, not divisible by 2 or 3"],
        correctAnswer: "No, only divisible by 2",
        explanation: "4,578 is even (divisible by 2) but sum of digits = 24 ÷ 3 = 8 remainder 0, so it's divisible by 2 but not 3. 🎯",
        wrongAnswerExplanations: {
            "Yes, divisible by both 2 and 3": "While it's divisible by 2, it's not divisible by 3.",
            "Yes, only divisible by 3": "It's not divisible by 3, but it is divisible by 2.",
            "No, not divisible by 2 or 3": "It is divisible by 2, though not by 3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch16_t3_qe11',
        type: "mcq",
        question: "What is 75 × 75 using the trick: (70 + 5)(70 + 5)?",
        options: ["5,225", "5,425", "5,625", "5,825"],
        correctAnswer: "5,625",
        explanation: "Using (70 + 5)² = 70² + 2(70 × 5) + 5² = 4,900 + 700 + 25 = 5,625. 🎨",
        wrongAnswerExplanations: {
            "5,225": "You might have made an error in calculating 70².",
            "5,425": "You might have made a calculation error in the middle term.",
            "5,825": "You might have added the terms incorrectly."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch16_t3_qe12',
        type: "mcq",
        question: "Using the divisibility rule for 9, is 8,127 divisible by 9?",
        options: ["Yes, sum is 18", "No, sum is 18", "Yes, sum is 19", "No, sum is 19"],
        correctAnswer: "No, sum is 18",
        explanation: "Sum of digits: 8 + 1 + 2 + 7 = 18. Since 18 is not divisible by 9, 8,127 is not divisible by 9. 🎭",
        wrongAnswerExplanations: {
            "Yes, sum is 18": "While the sum is 18, it's not divisible by 9.",
            "Yes, sum is 19": "The sum is 18, not 19.",
            "No, sum is 19": "The sum is 18, not 19."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch16_t3_qe13',
        type: "mcq",
        question: "What is 65 × 65 using the trick: (60 + 5)(60 + 5)?",
        options: ["4,025", "4,225", "4,425", "4,625"],
        correctAnswer: "4,225",
        explanation: "Using (60 + 5)² = 60² + 2(60 × 5) + 5² = 3,600 + 600 + 25 = 4,225. 🎪",
        wrongAnswerExplanations: {
            "4,025": "You might have made an error in calculating 60².",
            "4,425": "You might have added an extra 200.",
            "4,625": "You might have doubled one of the terms incorrectly."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch16_t3_qe14',
        type: "mcq",
        question: "Using the divisibility rule for 5, which numbers are divisible by 5?",
        options: ["123, 455, 780", "125, 450, 785", "120, 455, 789", "125, 455, 780"],
        correctAnswer: "125, 455, 780",
        explanation: "Numbers ending in 0 or 5 are divisible by 5. So 125, 455, and 780 are divisible by 5. 🎯",
        wrongAnswerExplanations: {
            "123, 455, 780": "123 doesn't end in 0 or 5.",
            "125, 450, 785": "785 doesn't end in 0 or 5.",
            "120, 455, 789": "789 doesn't end in 0 or 5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch16_t3_qe15',
        type: "mcq",
        question: "What is 55 × 55 using the trick: (50 + 5)(50 + 5)?",
        options: ["2,825", "3,025", "3,225", "3,425"],
        correctAnswer: "3,025",
        explanation: "Using (50 + 5)² = 50² + 2(50 × 5) + 5² = 2,500 + 500 + 25 = 3,025. 🎨",
        wrongAnswerExplanations: {
            "2,825": "You might have made an error in calculating 50².",
            "3,225": "You might have added an extra 200.",
            "3,425": "You might have doubled one of the terms incorrectly."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch16_t3_qe16',
        type: "mcq",
        question: "Using the divisibility rule for 2, which numbers are even?",
        options: ["123, 456, 789", "122, 456, 788", "123, 457, 789", "122, 457, 788"],
        correctAnswer: "122, 456, 788",
        explanation: "Numbers ending in 0, 2, 4, 6, or 8 are even. So 122, 456, and 788 are even. 🎭",
        wrongAnswerExplanations: {
            "123, 456, 789": "123 and 789 are odd numbers.",
            "123, 457, 789": "All these numbers are odd.",
            "122, 457, 788": "457 is an odd number."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch16_t3_qe17',
        type: "mcq",
        question: "What is 35 × 35 using the trick: (30 + 5)(30 + 5)?",
        options: ["1,025", "1,225", "1,425", "1,625"],
        correctAnswer: "1,225",
        explanation: "Using (30 + 5)² = 30² + 2(30 × 5) + 5² = 900 + 300 + 25 = 1,225. 🎪",
        wrongAnswerExplanations: {
            "1,025": "You might have made an error in calculating 30².",
            "1,425": "You might have added an extra 200.",
            "1,625": "You might have doubled one of the terms incorrectly."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch16_t3_qe18',
        type: "mcq",
        question: "Using the divisibility rule for 10, which numbers are divisible by 10?",
        options: ["120, 345, 670", "125, 350, 675", "130, 355, 680", "120, 350, 670"],
        correctAnswer: "120, 350, 670",
        explanation: "Numbers ending in 0 are divisible by 10. So 120, 350, and 670 are divisible by 10. 🎯",
        wrongAnswerExplanations: {
            "120, 345, 670": "345 doesn't end in 0.",
            "125, 350, 675": "125 and 675 don't end in 0.",
            "130, 355, 680": "355 doesn't end in 0."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch16_t3_qe19',
        type: "mcq",
        question: "What is 45 × 55 using the trick: (50 - 5)(50 + 5)?",
        options: ["2,275", "2,375", "2,475", "2,575"],
        correctAnswer: "2,475",
        explanation: "Using (50 - 5)(50 + 5) = 50² - 5² = 2,500 - 25 = 2,475. 🎨",
        wrongAnswerExplanations: {
            "2,275": "You might have subtracted too much.",
            "2,375": "You might have made a calculation error.",
            "2,575": "You might have added instead of subtracting."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch16_t3_qe20',
        type: "mcq",
        question: "Using the divisibility rule for 7, is 2,457 divisible by 7?",
        options: ["Yes, because 2,457 ÷ 7 = 351", "No, because 2,457 ÷ 7 = 351.5", "Yes, because 2,457 ÷ 7 = 350", "No, because 2,457 ÷ 7 = 350.5"],
        correctAnswer: "Yes, because 2,457 ÷ 7 = 351",
        explanation: "2,457 ÷ 7 = 351 (no remainder), so 2,457 is divisible by 7. 🎭",
        wrongAnswerExplanations: {
            "No, because 2,457 ÷ 7 = 351.5": "The division is exact with no decimal.",
            "Yes, because 2,457 ÷ 7 = 350": "The quotient is 351, not 350.",
            "No, because 2,457 ÷ 7 = 350.5": "The quotient is 351, not 350.5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    }
]; 