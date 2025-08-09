import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch4_t1_qm1',
        type: "mcq",
        question: "A father is 3 times as old as his son. The sum of their ages is 48 years. What is the equation?",
        options: ["x + 3x = 48", "x - 3x = 48", "x/3 + x = 48", "3x - x = 48"],
        correctAnswer: "x + 3x = 48",
        explanation: "Let son's age be x, then father's age is 3x. Sum is x + 3x = 48. 👨‍👦",
        wrongAnswerExplanations: {
            "x - 3x = 48": "This would subtract ages instead of adding.",
            "x/3 + x = 48": "This would make father younger than son.",
            "3x - x = 48": "This would find difference instead of sum."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch4_t1_qm2',
        type: "mcq",
        question: "The perimeter of a rectangle is 30 cm. If its length is 5 cm more than its width, what is the equation?",
        options: ["2(x + x) = 30", "2(x + x + 5) = 30", "x + x + 5 = 30", "2x + 5 = 30"],
        correctAnswer: "2(x + x + 5) = 30",
        explanation: "Let width be x, then length is x + 5. Perimeter is 2(length + width). 📐",
        wrongAnswerExplanations: {
            "2(x + x) = 30": "This ignores the 5 cm difference in length.",
            "x + x + 5 = 30": "This doesn't account for both sides of rectangle.",
            "2x + 5 = 30": "This doesn't represent perimeter correctly."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch4_t1_qm3',
        type: "mcq",
        question: "A number is divided by 3, then increased by 5, and the result is 12. What is the equation?",
        options: ["x/3 + 5 = 12", "3x + 5 = 12", "x + 5/3 = 12", "x/3 - 5 = 12"],
        correctAnswer: "x/3 + 5 = 12",
        explanation: "First divide by 3, then add 5, so x/3 + 5 = 12. ➗➕",
        wrongAnswerExplanations: {
            "3x + 5 = 12": "This would multiply instead of divide first.",
            "x + 5/3 = 12": "This would add 5/3 instead of dividing first.",
            "x/3 - 5 = 12": "This would subtract instead of add 5."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch4_t1_qm4',
        type: "mcq",
        question: "The sum of three consecutive even numbers is 36. What is the equation?",
        options: ["x + x + x = 36", "x + (x+1) + (x+2) = 36", "x + (x+2) + (x+4) = 36", "3x = 36"],
        correctAnswer: "x + (x+2) + (x+4) = 36",
        explanation: "Consecutive even numbers increase by 2, so x + (x+2) + (x+4) = 36. 🔢",
        wrongAnswerExplanations: {
            "x + x + x = 36": "This would use the same number three times.",
            "x + (x+1) + (x+2) = 36": "This would be consecutive numbers, not even numbers.",
            "3x = 36": "This would be three times the same number."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch4_t1_qm5',
        type: "mcq",
        question: "A shopkeeper has some apples. He sells half of them and then 5 more. He has 10 left. What is the equation?",
        options: ["x/2 - 5 = 10", "x - 5 = 10", "x/2 + 5 = 10", "2x - 5 = 10"],
        correctAnswer: "x/2 - 5 = 10",
        explanation: "Start with x, sell half (x/2), then 5 more, leaving 10. 🍎",
        wrongAnswerExplanations: {
            "x - 5 = 10": "This doesn't account for selling half first.",
            "x/2 + 5 = 10": "This would add 5 instead of subtract.",
            "2x - 5 = 10": "This would double the apples instead of halving."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch4_t1_qm6',
        type: "mcq",
        question: "The sum of two numbers is 45 and their difference is 15. What is the equation for the sum?",
        options: ["x - y = 45", "x + y = 45", "x = 45", "y = 45"],
        correctAnswer: "x + y = 45",
        explanation: "Sum means addition, so x + y = 45 represents the sum. ➕",
        wrongAnswerExplanations: {
            "x - y = 45": "This would represent the difference, not the sum.",
            "x = 45": "This would mean one number is 45.",
            "y = 45": "This would mean the other number is 45."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch4_t1_qm7',
        type: "mcq",
        question: "A number is multiplied by 4, then decreased by 7, and the result is 25. What is the equation?",
        options: ["4x - 7 = 25", "x/4 - 7 = 25", "4x + 7 = 25", "x - 7/4 = 25"],
        correctAnswer: "4x - 7 = 25",
        explanation: "First multiply by 4, then subtract 7, so 4x - 7 = 25. ✖️➖",
        wrongAnswerExplanations: {
            "x/4 - 7 = 25": "This would divide instead of multiply first.",
            "4x + 7 = 25": "This would add instead of subtract 7.",
            "x - 7/4 = 25": "This would subtract 7/4 instead of multiplying first."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch4_t1_qm8',
        type: "mcq",
        question: "The area of a rectangle is 48 cm². If its length is 3 times its width, what is the equation?",
        options: ["x × 3x = 48", "x + 3x = 48", "2(x + 3x) = 48", "x/3x = 48"],
        correctAnswer: "x × 3x = 48",
        explanation: "Let width be x, then length is 3x. Area = length × width. 📐",
        wrongAnswerExplanations: {
            "x + 3x = 48": "This would add instead of multiply.",
            "2(x + 3x) = 48": "This would calculate perimeter instead of area.",
            "x/3x = 48": "This would divide instead of multiply."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch4_t1_qm9',
        type: "mcq",
        question: "A number is increased by 20% and then decreased by 15. The result is 25. What is the equation?",
        options: ["1.2x - 15 = 25", "0.8x - 15 = 25", "1.2x + 15 = 25", "x - 15 = 25"],
        correctAnswer: "1.2x - 15 = 25",
        explanation: "20% increase means multiply by 1.2, then subtract 15. 📈",
        wrongAnswerExplanations: {
            "0.8x - 15 = 25": "This would decrease by 20% instead of increase.",
            "1.2x + 15 = 25": "This would add 15 instead of subtract.",
            "x - 15 = 25": "This doesn't account for the 20% increase."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch4_t1_qm10',
        type: "mcq",
        question: "The sum of three consecutive odd numbers is 51. What is the equation?",
        options: ["x + x + x = 51", "x + (x+1) + (x+2) = 51", "x + (x+2) + (x+4) = 51", "3x = 51"],
        correctAnswer: "x + (x+2) + (x+4) = 51",
        explanation: "Consecutive odd numbers increase by 2, so x + (x+2) + (x+4) = 51. 🔢",
        wrongAnswerExplanations: {
            "x + x + x = 51": "This would use the same number three times.",
            "x + (x+1) + (x+2) = 51": "This would be consecutive numbers, not odd numbers.",
            "3x = 51": "This would be three times the same number."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch4_t1_qm11',
        type: "mcq",
        question: "A number is divided by 5, then multiplied by 3, and the result is 12. What is the equation?",
        options: ["(x/5) × 3 = 12", "x/5 + 3 = 12", "x/5 - 3 = 12", "5x × 3 = 12"],
        correctAnswer: "(x/5) × 3 = 12",
        explanation: "First divide by 5, then multiply by 3, so (x/5) × 3 = 12. ➗✖️",
        wrongAnswerExplanations: {
            "x/5 + 3 = 12": "This would add 3 instead of multiply.",
            "x/5 - 3 = 12": "This would subtract 3 instead of multiply.",
            "5x × 3 = 12": "This would multiply by 5 first instead of divide."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch4_t1_qm12',
        type: "mcq",
        question: "A rectangle's length is 4 cm more than twice its width. If the perimeter is 32 cm, what is the equation?",
        options: ["2(x + 2x) = 32", "2(x + 2x + 4) = 32", "x + 2x + 4 = 32", "2x + 4 = 32"],
        correctAnswer: "2(x + 2x + 4) = 32",
        explanation: "Let width be x, then length is 2x + 4. Perimeter is 2(length + width). 📐",
        wrongAnswerExplanations: {
            "2(x + 2x) = 32": "This ignores the 4 cm addition to length.",
            "x + 2x + 4 = 32": "This doesn't account for both sides of rectangle.",
            "2x + 4 = 32": "This doesn't represent perimeter correctly."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch4_t1_qm13',
        type: "mcq",
        question: "A number is increased by 25% and then decreased by 10. The result is 35. What is the equation?",
        options: ["1.25x - 10 = 35", "0.75x - 10 = 35", "1.25x + 10 = 35", "x - 10 = 35"],
        correctAnswer: "1.25x - 10 = 35",
        explanation: "25% increase means multiply by 1.25, then subtract 10. 📈",
        wrongAnswerExplanations: {
            "0.75x - 10 = 35": "This would decrease by 25% instead of increase.",
            "1.25x + 10 = 35": "This would add 10 instead of subtract.",
            "x - 10 = 35": "This doesn't account for the 25% increase."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch4_t1_qm14',
        type: "mcq",
        question: "The sum of two numbers is 50. If one number is 10 more than the other, what is the equation?",
        options: ["x + (x + 10) = 50", "x - (x + 10) = 50", "x × (x + 10) = 50", "x/(x + 10) = 50"],
        correctAnswer: "x + (x + 10) = 50",
        explanation: "Let one number be x, then other is x + 10. Sum is x + (x + 10) = 50. ➕",
        wrongAnswerExplanations: {
            "x - (x + 10) = 50": "This would subtract instead of add.",
            "x × (x + 10) = 50": "This would multiply instead of add.",
            "x/(x + 10) = 50": "This would divide instead of add."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch4_t1_qm15',
        type: "mcq",
        question: "A number is multiplied by 3, then increased by 8, and the result is 29. What is the equation?",
        options: ["3x + 8 = 29", "x/3 + 8 = 29", "3x - 8 = 29", "x + 8/3 = 29"],
        correctAnswer: "3x + 8 = 29",
        explanation: "First multiply by 3, then add 8, so 3x + 8 = 29. ✖️➕",
        wrongAnswerExplanations: {
            "x/3 + 8 = 29": "This would divide instead of multiply first.",
            "3x - 8 = 29": "This would subtract 8 instead of add.",
            "x + 8/3 = 29": "This would add 8/3 instead of multiplying first."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch4_t1_qm16',
        type: "mcq",
        question: "The area of a square is 64 cm². What is the equation for its side length?",
        options: ["x = 64", "4x = 64", "x² = 64", "2x = 64"],
        correctAnswer: "x² = 64",
        explanation: "Area of square is side length squared, so x² = 64. ⬜",
        wrongAnswerExplanations: {
            "x = 64": "This would mean side length is 64 cm.",
            "4x = 64": "This would calculate perimeter instead of area.",
            "2x = 64": "This would double the side length."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch4_t1_qm17',
        type: "mcq",
        question: "A number is decreased by 15% and then increased by 20. The result is 45. What is the equation?",
        options: ["0.85x + 20 = 45", "1.15x + 20 = 45", "0.85x - 20 = 45", "x + 20 = 45"],
        correctAnswer: "0.85x + 20 = 45",
        explanation: "15% decrease means multiply by 0.85, then add 20. 📉",
        wrongAnswerExplanations: {
            "1.15x + 20 = 45": "This would increase by 15% instead of decrease.",
            "0.85x - 20 = 45": "This would subtract 20 instead of add.",
            "x + 20 = 45": "This doesn't account for the 15% decrease."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch4_t1_qm18',
        type: "mcq",
        question: "The sum of four consecutive numbers is 46. What is the equation?",
        options: ["x + x + x + x = 46", "x + (x+1) + (x+2) + (x+3) = 46", "4x = 46", "x + (x+2) + (x+4) + (x+6) = 46"],
        correctAnswer: "x + (x+1) + (x+2) + (x+3) = 46",
        explanation: "Consecutive numbers increase by 1, so x + (x+1) + (x+2) + (x+3) = 46. 🔢",
        wrongAnswerExplanations: {
            "x + x + x + x = 46": "This would use the same number four times.",
            "4x = 46": "This would be four times the same number.",
            "x + (x+2) + (x+4) + (x+6) = 46": "This would skip numbers."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch4_t1_qm19',
        type: "mcq",
        question: "A number is multiplied by 2, then divided by 3, and the result is 8. What is the equation?",
        options: ["(2x)/3 = 8", "2x + 3 = 8", "2x - 3 = 8", "x/3 × 2 = 8"],
        correctAnswer: "(2x)/3 = 8",
        explanation: "First multiply by 2, then divide by 3, so (2x)/3 = 8. ✖️➗",
        wrongAnswerExplanations: {
            "2x + 3 = 8": "This would add 3 instead of divide.",
            "2x - 3 = 8": "This would subtract 3 instead of divide.",
            "x/3 × 2 = 8": "This would divide first instead of multiply."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch4_t1_qm20',
        type: "mcq",
        question: "A rectangle's length is 3 cm less than twice its width. If the perimeter is 42 cm, what is the equation?",
        options: ["2(x + 2x) = 42", "2(x + 2x - 3) = 42", "x + 2x - 3 = 42", "2x - 3 = 42"],
        correctAnswer: "2(x + 2x - 3) = 42",
        explanation: "Let width be x, then length is 2x - 3. Perimeter is 2(length + width). 📐",
        wrongAnswerExplanations: {
            "2(x + 2x) = 42": "This ignores the 3 cm subtraction from length.",
            "x + 2x - 3 = 42": "This doesn't account for both sides of rectangle.",
            "2x - 3 = 42": "This doesn't represent perimeter correctly."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 