import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch2_t3_qm1',
        type: "mcq",
        question: "In the equation 2(3x - 4) + 5 = 3(x + 2), what should be the first two steps to simplify it?",
        options: [
            "Distribute 2 and 3, then combine like terms",
            "Add 4 to both sides, then multiply by 2",
            "Distribute 2 only, then add 5",
            "Subtract 5 from both sides, then distribute"
        ],
        correctAnswer: "Distribute 2 and 3, then combine like terms",
        explanation: "First distribute: 6x - 8 + 5 = 3x + 6, then combine like terms on the left: 6x - 3 = 3x + 6. This removes parentheses and organizes terms. 🔄",
        wrongAnswerExplanations: {
            "Add 4 to both sides, then multiply by 2": "Cannot add 4 first as it's inside parentheses and multiplied by 2.",
            "Distribute 2 only, then add 5": "Need to distribute both 2 and 3 to remove all parentheses.",
            "Subtract 5 from both sides, then distribute": "Should distribute first to properly handle terms in parentheses."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t3_qm2',
        type: "mcq",
        question: "Which equation represents the correct simplification of (x/2 + 3) × 4 = 20?",
        options: [
            "2x + 12 = 20",
            "2x + 6 = 20",
            "x/2 + 12 = 20",
            "2x + 12 = 80"
        ],
        correctAnswer: "2x + 12 = 20",
        explanation: "Distribute 4: 4(x/2) + 4(3) = 20. Simplify: 2x + 12 = 20. When multiplying fractions, multiply numerators and denominators separately. 🧮",
        wrongAnswerExplanations: {
            "2x + 6 = 20": "The 3 should be multiplied by 4 to get 12.",
            "x/2 + 12 = 20": "The x/2 should be multiplied by 4 to get 2x.",
            "2x + 12 = 80": "The right side should not be multiplied by 4."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t3_qm3',
        type: "mcq",
        question: "What is the next step after getting 3x - 2x + 7 = x + 13 in solving an equation?",
        options: [
            "Combine x terms on the left side only",
            "Subtract x from both sides",
            "Add 2x to both sides",
            "Subtract 7 from both sides"
        ],
        correctAnswer: "Subtract x from both sides",
        explanation: "Subtract x from both sides to get 2x - 2x + 7 = 13, which simplifies to 7 = 13. This helps isolate variable terms on one side. ➖",
        wrongAnswerExplanations: {
            "Combine x terms on the left side only": "Need to handle x terms on both sides.",
            "Add 2x to both sides": "This would increase the number of x terms.",
            "Subtract 7 from both sides": "Should deal with variable terms before constants."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t3_qm4',
        type: "mcq",
        question: "Which equation shows the correct way to remove fractions from (x/3) + (x/6) = 4?",
        options: [
            "2x + x = 12",
            "x + x/2 = 12",
            "3x + x/2 = 12",
            "2x/3 = 12"
        ],
        correctAnswer: "x + x/2 = 12",
        explanation: "Multiply all terms by 6 (LCD): 6(x/3) + 6(x/6) = 6(4). Simplify: 2x + x = 24. Then combine like terms. 🔢",
        wrongAnswerExplanations: {
            "2x + x = 12": "The right side should be 24 after multiplying by 6.",
            "3x + x/2 = 12": "This doesn't correctly handle the fractions.",
            "2x/3 = 12": "This doesn't properly combine the fractions."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t3_qm5',
        type: "mcq",
        question: "In the equation 5(x - 2) = 3(x + 4), what is the result after distributing terms?",
        options: [
            "5x - 10 = 3x + 12",
            "5x - 2 = 3x + 4",
            "5x - 10 = 3x + 7",
            "5x - 7 = 3x + 12"
        ],
        correctAnswer: "5x - 10 = 3x + 12",
        explanation: "Distribute 5 on left: 5x - 10, and 3 on right: 3x + 12. The complete equation becomes 5x - 10 = 3x + 12. 🔄",
        wrongAnswerExplanations: {
            "5x - 2 = 3x + 4": "The numbers inside parentheses must be multiplied by their coefficients.",
            "5x - 10 = 3x + 7": "3 × 4 = 12, not 7.",
            "5x - 7 = 3x + 12": "5 × 2 = 10, not 7."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t3_qm6',
        type: "mcq",
        question: "What type of equation is 3x - 5 = 3x - 5?",
        options: [
            "No solution",
            "One solution: x = 0",
            "Infinite solutions",
            "One solution: x = 5"
        ],
        correctAnswer: "Infinite solutions",
        explanation: "Subtract 3x from both sides: -5 = -5. This is always true for any value of x, so the equation has infinite solutions. The left side equals the right side for all x. ∞",
        wrongAnswerExplanations: {
            "No solution": "The equation is valid for all values of x.",
            "One solution: x = 0": "The equation is true for all values of x, not just 0.",
            "One solution: x = 5": "The equation is true for all values of x, not just 5."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t3_qm7',
        type: "mcq",
        question: "Which step correctly simplifies 4(x/2 - 1/3) = 8?",
        options: [
            "2x - 4/3 = 8",
            "2x - 1/3 = 8",
            "4x - 4/3 = 8",
            "4x - 1/3 = 8"
        ],
        correctAnswer: "2x - 4/3 = 8",
        explanation: "Distribute 4: 4(x/2) - 4(1/3) = 8. Simplify: 2x - 4/3 = 8. When multiplying fractions, multiply numerators and denominators. 🧮",
        wrongAnswerExplanations: {
            "2x - 1/3 = 8": "The fraction 1/3 should be multiplied by 4.",
            "4x - 4/3 = 8": "4(x/2) simplifies to 2x, not 4x.",
            "4x - 1/3 = 8": "Both terms are incorrectly simplified."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t3_qm8',
        type: "mcq",
        question: "What is the result after combining like terms in 2x + 3(x - 4) - 5x = 12?",
        options: [
            "0x - 12 = 12",
            "-2x - 12 = 12",
            "5x - 12 = 12",
            "0x + 12 = 12"
        ],
        correctAnswer: "0x - 12 = 12",
        explanation: "Distribute 3: 2x + 3x - 12 - 5x = 12. Combine like terms: (2 + 3 - 5)x - 12 = 12, which simplifies to 0x - 12 = 12. 🔢",
        wrongAnswerExplanations: {
            "-2x - 12 = 12": "2 + 3 - 5 = 0, not -2.",
            "5x - 12 = 12": "The coefficients of x add to 0, not 5.",
            "0x + 12 = 12": "The -12 becomes +12 which is incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t3_qm9',
        type: "mcq",
        question: "Which equation represents the correct simplification of (2x + 1)/3 = 5?",
        options: [
            "2x + 1 = 15",
            "6x + 3 = 15",
            "2x/3 + 1/3 = 5",
            "2x + 3 = 15"
        ],
        correctAnswer: "2x + 1 = 15",
        explanation: "Multiply all terms by 3: 3((2x + 1)/3) = 3(5). This eliminates fractions and gives 2x + 1 = 15. The distributive property helps remove fractions. ➗",
        wrongAnswerExplanations: {
            "6x + 3 = 15": "The 2x should not be multiplied by 3.",
            "2x/3 + 1/3 = 5": "This doesn't eliminate the fractions.",
            "2x + 3 = 15": "The 1 should not become 3."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t3_qm10',
        type: "mcq",
        question: "What is the simplified form of 2(x + 3) = 2x + 6?",
        options: [
            "x = 3",
            "No solution",
            "Infinite solutions",
            "x = 6"
        ],
        correctAnswer: "Infinite solutions",
        explanation: "Distribute on left: 2x + 6 = 2x + 6. Subtract 2x from both sides: 6 = 6. This is always true, so there are infinite solutions. The equation is an identity. ∞",
        wrongAnswerExplanations: {
            "x = 3": "The equation is true for all values of x.",
            "No solution": "The equation has solutions - in fact, all values of x work.",
            "x = 6": "The equation is true for all values of x, not just 6."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t3_qm11',
        type: "mcq",
        question: "Which equation shows the correct way to remove decimals from 0.2x + 0.6 = 1.4?",
        options: [
            "2x + 6 = 14",
            "x + 3 = 7",
            "20x + 60 = 140",
            "2x + 0.6 = 1.4"
        ],
        correctAnswer: "2x + 6 = 14",
        explanation: "Multiply all terms by 10 to eliminate decimals: 10(0.2x + 0.6) = 10(1.4). This gives us 2x + 6 = 14. Multiplying by 10 moves the decimal point one place right. 🔢",
        wrongAnswerExplanations: {
            "x + 3 = 7": "This doesn't properly handle the decimals.",
            "20x + 60 = 140": "Multiplying by 100 is unnecessary and makes numbers too large.",
            "2x + 0.6 = 1.4": "This only removes some decimals."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t3_qm12',
        type: "mcq",
        question: "What is the simplified form of 3(x + 2) - 2(x + 2) = 10?",
        options: [
            "x + 2 = 10",
            "5x + 10 = 10",
            "x + 4 = 10",
            "x + 6 = 10"
        ],
        correctAnswer: "x + 2 = 10",
        explanation: "Distribute: 3x + 6 - 2x - 4 = 10. Combine like terms: (3 - 2)x + (6 - 4) = 10, which simplifies to x + 2 = 10. 🔄",
        wrongAnswerExplanations: {
            "5x + 10 = 10": "3 - 2 = 1, not 5.",
            "x + 4 = 10": "6 - 4 = 2, not 4.",
            "x + 6 = 10": "The constants 6 and 4 should be subtracted."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t3_qm13',
        type: "mcq",
        question: "Which step correctly simplifies (x + 4)/2 + (x - 2)/3 = 5?",
        options: [
            "3(x + 4) + 2(x - 2) = 30",
            "3x + 12 + 2x - 4 = 30",
            "6x + 24 + 6x - 12 = 60",
            "3x + 12 + 2x - 4 = 60"
        ],
        correctAnswer: "3(x + 4) + 2(x - 2) = 30",
        explanation: "Multiply all terms by 6 (LCD): 3(x + 4) + 2(x - 2) = 30. This eliminates fractions and sets up the equation for further simplification. 🧮",
        wrongAnswerExplanations: {
            "3x + 12 + 2x - 4 = 30": "This skips the step of showing the distributed terms.",
            "6x + 24 + 6x - 12 = 60": "The coefficients are incorrect after multiplying by 6.",
            "3x + 12 + 2x - 4 = 60": "The right side should be 30, not 60."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t3_qm14',
        type: "mcq",
        question: "What is the next step after getting 5x - 3 = 2x + 9?",
        options: [
            "Add 3 to both sides",
            "Subtract 2x from both sides",
            "Divide both sides by 3",
            "Multiply both sides by 2"
        ],
        correctAnswer: "Subtract 2x from both sides",
        explanation: "Subtract 2x from both sides to get 3x - 3 = 9. This groups all terms with x on the left side of the equation. ➖",
        wrongAnswerExplanations: {
            "Add 3 to both sides": "Should handle variable terms before constants.",
            "Divide both sides by 3": "Too early to divide, need to isolate x terms first.",
            "Multiply both sides by 2": "This would make the equation more complex."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t3_qm15',
        type: "mcq",
        question: "Which equation shows the correct distribution in 4(2x - 1) - 2(x + 3)?",
        options: [
            "8x - 4 - 2x + 6",
            "8x - 4 - 2x - 6",
            "8x - 2 - 2x - 6",
            "4x - 1 - 2x - 6"
        ],
        correctAnswer: "8x - 4 - 2x - 6",
        explanation: "Distribute 4: 8x - 4, then distribute -2: -2x - 6. The complete expression is 8x - 4 - 2x - 6. Remember that subtraction distributes as negative. 🔄",
        wrongAnswerExplanations: {
            "8x - 4 - 2x + 6": "The negative sign before 2(x + 3) makes it -2x - 6, not -2x + 6.",
            "8x - 2 - 2x - 6": "4 × 1 = 4, not 2.",
            "4x - 1 - 2x - 6": "4 × 2x = 8x, not 4x."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t3_qm16',
        type: "mcq",
        question: "What is the simplified form of (x + 2)/4 = (x - 1)/2?",
        options: [
            "2x + 4 = 2x - 2",
            "x + 2 = 2x - 2",
            "4x + 8 = 2x - 2",
            "2x + 4 = x - 1"
        ],
        correctAnswer: "2x + 4 = 2x - 2",
        explanation: "Multiply all terms by 4 to eliminate fractions: 4((x + 2)/4) = 4((x - 1)/2). This gives x + 2 = 2x - 2. Then multiply the right side by 2. 🔢",
        wrongAnswerExplanations: {
            "x + 2 = 2x - 2": "The left side should be multiplied by 4.",
            "4x + 8 = 2x - 2": "The x terms are incorrectly multiplied.",
            "2x + 4 = x - 1": "The right side should be multiplied by 2."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t3_qm17',
        type: "mcq",
        question: "Which equation represents the correct simplification of 3(2x - 1) = 2(3x + 1)?",
        options: [
            "6x - 3 = 6x + 2",
            "6x - 2 = 6x + 1",
            "6x - 3 = 6x + 1",
            "6x - 1 = 6x + 2"
        ],
        correctAnswer: "6x - 3 = 6x + 2",
        explanation: "Distribute on left: 6x - 3, and on right: 6x + 2. The complete equation is 6x - 3 = 6x + 2. Distribute each coefficient to all terms in parentheses. 🔄",
        wrongAnswerExplanations: {
            "6x - 2 = 6x + 1": "3 × 1 = 3 and 2 × 1 = 2.",
            "6x - 3 = 6x + 1": "2 × 1 = 2, not 1.",
            "6x - 1 = 6x + 2": "3 × 1 = 3, not 1."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t3_qm18',
        type: "mcq",
        question: "What is the result of combining like terms in 2(x - 3) + 3(x + 2) - (x - 1)?",
        options: [
            "4x - 3",
            "4x + 4",
            "6x - 2",
            "6x + 4"
        ],
        correctAnswer: "4x - 3",
        explanation: "Distribute: 2x - 6 + 3x + 6 - x + 1. Combine like terms: (2 + 3 - 1)x + (-6 + 6 + 1) = 4x - 3. Pay attention to signs when combining. 🧮",
        wrongAnswerExplanations: {
            "4x + 4": "The constants combine to -3, not +4.",
            "6x - 2": "The coefficients of x add to 4, not 6.",
            "6x + 4": "Both the coefficient of x and the constant term are incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t3_qm19',
        type: "mcq",
        question: "Which equation shows the correct way to remove decimals from 0.4(x - 0.5) = 0.8?",
        options: [
            "4(x - 0.5) = 8",
            "4x - 2 = 8",
            "4x - 0.5 = 8",
            "0.4x - 0.2 = 0.8"
        ],
        correctAnswer: "4x - 2 = 8",
        explanation: "Multiply all terms by 10: 10(0.4(x - 0.5)) = 10(0.8). This gives 4(x - 0.5) = 8, then distribute 4: 4x - 2 = 8. 🔢",
        wrongAnswerExplanations: {
            "4(x - 0.5) = 8": "This only removes some decimals.",
            "4x - 0.5 = 8": "The 0.5 should be multiplied by 4.",
            "0.4x - 0.2 = 0.8": "This doesn't remove the decimals."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t3_qm20',
        type: "mcq",
        question: "What type of equation is x/2 + 3 = x/2 + 5?",
        options: [
            "One solution: x = 4",
            "No solution",
            "Infinite solutions",
            "One solution: x = -4"
        ],
        correctAnswer: "No solution",
        explanation: "Subtract x/2 from both sides: 3 = 5. This is a false statement, so the equation has no solution. The constants differ but the variable terms are identical. 🚫",
        wrongAnswerExplanations: {
            "One solution: x = 4": "No value of x can make 3 equal to 5.",
            "Infinite solutions": "The equation is never true for any value of x.",
            "One solution: x = -4": "No value of x can make 3 equal to 5."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 