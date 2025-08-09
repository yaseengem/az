import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch2_t3_qe1',
        type: "mcq",
        question: "What is the first step in reducing the equation 3x + 5 = 2x - 7 to a simpler form?",
        options: [
            "Add 7 to both sides",
            "Subtract 2x from both sides",
            "Divide both sides by 3",
            "Combine like terms on each side"
        ],
        correctAnswer: "Subtract 2x from both sides",
        explanation: "To isolate variable terms on one side, first subtract 2x from both sides to get x + 5 = -7. This helps organize the equation with variables on one side. ➖",
        wrongAnswerExplanations: {
            "Add 7 to both sides": "While this would eliminate -7, it's better to first group like terms (terms with x).",
            "Divide both sides by 3": "This would complicate the equation since not all terms have a factor of 3.",
            "Combine like terms on each side": "There are no like terms to combine on either side yet."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t3_qe2',
        type: "mcq",
        question: "In the equation 4x - 8 = 12, what operation should be performed first to isolate x?",
        options: [
            "Divide both sides by 4",
            "Add 8 to both sides",
            "Subtract 12 from both sides",
            "Multiply both sides by 4"
        ],
        correctAnswer: "Add 8 to both sides",
        explanation: "First add 8 to both sides to get 4x = 20. This eliminates the constant term on the left side, making it easier to isolate x. ➕",
        wrongAnswerExplanations: {
            "Divide both sides by 4": "While this is needed, it should be done after adding 8 to both sides.",
            "Subtract 12 from both sides": "This would make the equation more complicated.",
            "Multiply both sides by 4": "This would make the equation more complex and is unnecessary."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t3_qe3',
        type: "mcq",
        question: "Which equation is already in its simplest form?",
        options: [
            "2x + 3x = 15",
            "x = 5",
            "x + 0 = 10",
            "1x = 8"
        ],
        correctAnswer: "x = 5",
        explanation: "x = 5 is in simplest form because the variable is isolated on one side and its coefficient is 1. No further reduction is possible. ✨",
        wrongAnswerExplanations: {
            "2x + 3x = 15": "Like terms (2x and 3x) can be combined.",
            "x + 0 = 10": "The 0 can be eliminated.",
            "1x = 8": "The coefficient 1 is unnecessary and can be removed."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t3_qe4',
        type: "mcq",
        question: "What is wrong with the equation 2x + 3 = 2x + 5?",
        options: [
            "It has no solution",
            "It has infinite solutions",
            "The 2x terms should be on different sides",
            "It can't be simplified further"
        ],
        correctAnswer: "It has no solution",
        explanation: "After subtracting 2x from both sides, we get 3 = 5, which is false. Therefore, the equation has no solution as no value of x can make this true. 🚫",
        wrongAnswerExplanations: {
            "It has infinite solutions": "If it had infinite solutions, both sides would be equal for any value of x.",
            "The 2x terms should be on different sides": "The position of terms doesn't affect the solution.",
            "It can't be simplified further": "It can be simplified by subtracting 2x from both sides."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t3_qe5',
        type: "mcq",
        question: "Which operation should be performed last when solving for x in 6x + 12 = 30?",
        options: [
            "Subtract 12",
            "Add 12",
            "Divide by 6",
            "Multiply by 6"
        ],
        correctAnswer: "Divide by 6",
        explanation: "After subtracting 12 from both sides to get 6x = 18, the final step is to divide both sides by 6 to isolate x. Division is typically the last step. ➗",
        wrongAnswerExplanations: {
            "Subtract 12": "This should be done first to isolate the term with x.",
            "Add 12": "Adding 12 would make the equation more complex.",
            "Multiply by 6": "Multiplying would make the equation more complex."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t3_qe6',
        type: "mcq",
        question: "In the equation 3(x + 2) = 15, what should be the first step?",
        options: [
            "Subtract 2 from both sides",
            "Divide both sides by 3",
            "Add 2 to both sides",
            "Distribute the 3"
        ],
        correctAnswer: "Distribute the 3",
        explanation: "First distribute 3 to get 3x + 6 = 15. This removes the parentheses, making the equation easier to solve step by step. 🔄",
        wrongAnswerExplanations: {
            "Subtract 2 from both sides": "Can't subtract 2 directly as it's inside parentheses multiplied by 3.",
            "Divide both sides by 3": "Can't divide by 3 first as it would affect the term inside parentheses.",
            "Add 2 to both sides": "Adding 2 would make the equation more complex."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t3_qe7',
        type: "mcq",
        question: "What is the simplified form of x + x + x = 12?",
        options: [
            "x = 12",
            "2x = 12",
            "3x = 12",
            "4x = 12"
        ],
        correctAnswer: "3x = 12",
        explanation: "Combine like terms: x + x + x = 3x, so the equation simplifies to 3x = 12. Three x's added together equals 3x. 🧮",
        wrongAnswerExplanations: {
            "x = 12": "This ignores that there are three x terms to combine.",
            "2x = 12": "This only combines two of the three x terms.",
            "4x = 12": "This incorrectly combines the x terms."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t3_qe8',
        type: "mcq",
        question: "Which equation shows the correct way to remove fractions from 1/2x = 3?",
        options: [
            "x = 6",
            "x = 3/2",
            "x = 1.5",
            "2x = 3"
        ],
        correctAnswer: "2x = 3",
        explanation: "Multiply both sides by 2 to eliminate the fraction: 2(1/2x) = 2(3). This gives us 2x = 3, removing the fraction. 🔢",
        wrongAnswerExplanations: {
            "x = 6": "This is the solution after solving 2x = 3, not the first step.",
            "x = 3/2": "This is the solution, not the step to remove fractions.",
            "x = 1.5": "This is the decimal form of the solution, not the step to remove fractions."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t3_qe9',
        type: "mcq",
        question: "What is the next step after getting 4x = 20 when solving an equation?",
        options: [
            "Add 4 to both sides",
            "Subtract 20 from both sides",
            "Divide both sides by 4",
            "Multiply both sides by 4"
        ],
        correctAnswer: "Divide both sides by 4",
        explanation: "Divide both sides by 4 to isolate x: 4x ÷ 4 = 20 ÷ 4, giving x = 5. This is the final step to get x by itself. ➗",
        wrongAnswerExplanations: {
            "Add 4 to both sides": "This would make the equation more complex.",
            "Subtract 20 from both sides": "This would give us 4x - 20 = 0, making it more complex.",
            "Multiply both sides by 4": "This would make the coefficient of x larger."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t3_qe10',
        type: "mcq",
        question: "Which step is incorrect in solving: 2x - 6 = 8?",
        options: [
            "Add 6 to both sides to get 2x = 14",
            "Divide both sides by 2 to get x = 7",
            "Subtract 8 from both sides to get 2x = -2",
            "Multiply both sides by 2 to get 4x - 12 = 16"
        ],
        correctAnswer: "Subtract 8 from both sides to get 2x = -2",
        explanation: "Subtracting 8 moves away from isolating x. The correct step is to add 6 to both sides, then divide by 2. ❌",
        wrongAnswerExplanations: {
            "Add 6 to both sides to get 2x = 14": "This is correct as it isolates the term with x.",
            "Divide both sides by 2 to get x = 7": "This is correct as it isolates x.",
            "Multiply both sides by 2 to get 4x - 12 = 16": "This would make the equation more complex."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t3_qe11',
        type: "mcq",
        question: "What is the simplified form of 5x + 2x + x = 24?",
        options: [
            "7x = 24",
            "8x = 24",
            "6x = 24",
            "3x = 24"
        ],
        correctAnswer: "8x = 24",
        explanation: "Combine like terms: 5x + 2x + x = (5 + 2 + 1)x = 8x. Therefore, 8x = 24 is the simplified form. 🧮",
        wrongAnswerExplanations: {
            "7x = 24": "This misses one x in the addition.",
            "6x = 24": "This incorrectly adds the coefficients.",
            "3x = 24": "This doesn't properly combine all the x terms."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t3_qe12',
        type: "mcq",
        question: "Which equation shows the correct distribution in 2(x + 3) = 14?",
        options: [
            "2x + 3 = 14",
            "2x + 6 = 14",
            "x + 6 = 14",
            "2x + 5 = 14"
        ],
        correctAnswer: "2x + 6 = 14",
        explanation: "When distributing 2, multiply both terms inside parentheses by 2: 2(x + 3) = 2x + 2(3) = 2x + 6 = 14. 🔄",
        wrongAnswerExplanations: {
            "2x + 3 = 14": "The 3 should also be multiplied by 2.",
            "x + 6 = 14": "The x should be multiplied by 2.",
            "2x + 5 = 14": "2 times 3 is 6, not 5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t3_qe13',
        type: "mcq",
        question: "What is the correct way to remove decimals from 0.5x = 2.5?",
        options: [
            "Multiply both sides by 0.5",
            "Multiply both sides by 2",
            "Divide both sides by 0.5",
            "Divide both sides by 2"
        ],
        correctAnswer: "Multiply both sides by 2",
        explanation: "Multiply both sides by 2 to eliminate decimals: 2(0.5x) = 2(2.5), giving x = 5. This converts 0.5 to 1 as the coefficient of x. ✖️",
        wrongAnswerExplanations: {
            "Multiply both sides by 0.5": "This would create more decimals.",
            "Divide both sides by 0.5": "This is equivalent to multiplying by 2 but less straightforward.",
            "Divide both sides by 2": "This would create more decimals."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t3_qe14',
        type: "mcq",
        question: "Which equation is equivalent to x/3 + 2 = 8?",
        options: [
            "x + 2 = 24",
            "x + 6 = 8",
            "x + 2 = 8/3",
            "3x + 6 = 24"
        ],
        correctAnswer: "3x + 6 = 24",
        explanation: "Multiply all terms by 3 to eliminate the fraction: 3(x/3) + 3(2) = 3(8), giving x + 6 = 24. Then combine like terms. 🔢",
        wrongAnswerExplanations: {
            "x + 2 = 24": "This doesn't properly handle the fraction x/3.",
            "x + 6 = 8": "This incorrectly multiplies only some terms by 3.",
            "x + 2 = 8/3": "This moves in the wrong direction, creating more fractions."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t3_qe15',
        type: "mcq",
        question: "What is the simplified form of x + 5 = x - 3?",
        options: [
            "0 = -8",
            "2x = 2",
            "x = -4",
            "No solution"
        ],
        correctAnswer: "No solution",
        explanation: "Subtract x from both sides: 5 = -3. This is a false statement, so the equation has no solution. No value of x can make this equation true. 🚫",
        wrongAnswerExplanations: {
            "0 = -8": "While this shows the contradiction, it's not the final answer.",
            "2x = 2": "This is incorrect as the x terms cancel out.",
            "x = -4": "There is no value of x that satisfies this equation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t3_qe16',
        type: "mcq",
        question: "Which step correctly simplifies 3(2x - 4) = 18?",
        options: [
            "6x - 4 = 18",
            "6x - 12 = 18",
            "2x - 12 = 18",
            "3x - 12 = 18"
        ],
        correctAnswer: "6x - 12 = 18",
        explanation: "Distribute 3: 3(2x) - 3(4) = 18, giving 6x - 12 = 18. The 3 multiplies both terms inside the parentheses. 🔄",
        wrongAnswerExplanations: {
            "6x - 4 = 18": "The 4 should also be multiplied by 3.",
            "2x - 12 = 18": "The 2x should be multiplied by 3.",
            "3x - 12 = 18": "The 2x should be multiplied by 3 to get 6x."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t3_qe17',
        type: "mcq",
        question: "What is the next step in simplifying 4x + 7 = 3x + 10?",
        options: [
            "Add 3x to both sides",
            "Subtract 3x from both sides",
            "Subtract 7 from both sides",
            "Subtract 10 from both sides"
        ],
        correctAnswer: "Subtract 3x from both sides",
        explanation: "Subtract 3x from both sides to get x + 7 = 10. This groups all terms with x on one side of the equation. ➖",
        wrongAnswerExplanations: {
            "Add 3x to both sides": "This would increase the number of x terms on both sides.",
            "Subtract 7 from both sides": "First, we should deal with the x terms.",
            "Subtract 10 from both sides": "First, we should deal with the x terms."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t3_qe18',
        type: "mcq",
        question: "Which equation shows all terms properly combined in 2x + 5 + 3x + 2 = 20?",
        options: [
            "5x + 7 = 20",
            "2x + 3x + 7 = 20",
            "5x + 5 + 2 = 20",
            "6x + 7 = 20"
        ],
        correctAnswer: "5x + 7 = 20",
        explanation: "Combine like terms: 2x + 3x = 5x and 5 + 2 = 7, giving 5x + 7 = 20. Group variables and constants separately. 🧮",
        wrongAnswerExplanations: {
            "2x + 3x + 7 = 20": "The x terms should be combined.",
            "5x + 5 + 2 = 20": "The constant terms should be combined.",
            "6x + 7 = 20": "2x + 3x = 5x, not 6x."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t3_qe19',
        type: "mcq",
        question: "What is the simplified form of x = x + 5?",
        options: [
            "x = 5",
            "0 = 5",
            "No solution",
            "x = 0"
        ],
        correctAnswer: "No solution",
        explanation: "Subtract x from both sides: 0 = 5. This is a false statement, so the equation has no solution. No value of x can make x equal to x + 5. 🚫",
        wrongAnswerExplanations: {
            "x = 5": "This doesn't satisfy the equation as 5 ≠ 5 + 5.",
            "0 = 5": "While this shows the contradiction, it's not the final answer.",
            "x = 0": "This doesn't satisfy the equation as 0 ≠ 0 + 5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t3_qe20',
        type: "mcq",
        question: "Which is the correct order of steps to solve 2(x + 3) - 4 = 10?",
        options: [
            "Distribute, subtract 3, divide by 2",
            "Distribute, add 4, divide by 2",
            "Add 4, distribute, divide by 2",
            "Divide by 2, distribute, add 4"
        ],
        correctAnswer: "Distribute, add 4, divide by 2",
        explanation: "First distribute: 2x + 6 - 4 = 10, then add 4: 2x + 2 = 14, finally divide by 2: x = 6. Follow order of operations. 📝",
        wrongAnswerExplanations: {
            "Distribute, subtract 3, divide by 2": "We need to add 4, not subtract 3.",
            "Add 4, distribute, divide by 2": "We should distribute first to remove parentheses.",
            "Divide by 2, distribute, add 4": "Dividing by 2 first would incorrectly affect all terms."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 