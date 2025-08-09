import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch11_t1_qm1',
        type: "mcq",
        question: "If a number is increased by 5 and then doubled, which expression represents this?",
        options: ["2(x + 5)", "2x + 5", "x + 10", "2x + 10"],
        correctAnswer: "2(x + 5)",
        explanation: "First, the number is increased by 5: (x + 5). Then, the whole expression is doubled: 2(x + 5). This follows the order of operations. 🔄",
        wrongAnswerExplanations: {
            "2x + 5": "This would mean 'double a number and then add 5'.",
            "x + 10": "This would mean 'a number plus 10'.",
            "2x + 10": "This would mean 'double a number and then add 10'."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch11_t1_qm2',
        type: "mcq",
        question: "If a rectangle's length is 3 more than its width, and the width is x, what is the perimeter?",
        options: ["4x + 6", "2x + 6", "4x + 3", "2x + 3"],
        correctAnswer: "4x + 6",
        explanation: "Width = x, Length = x + 3. Perimeter = 2(Length + Width) = 2(x + 3 + x) = 2(2x + 3) = 4x + 6. 📐",
        wrongAnswerExplanations: {
            "2x + 6": "This would be the sum of length and width, not the perimeter.",
            "4x + 3": "This would be incorrect as it doesn't account for both sides.",
            "2x + 3": "This would be just the length, not the perimeter."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch11_t1_qm3',
        type: "mcq",
        question: "If a number is divided by 4 and then 3 is added, which expression represents this?",
        options: ["x/4 + 3", "3 + x/4", "(x + 3)/4", "x/(4 + 3)"],
        correctAnswer: "x/4 + 3",
        explanation: "First, the number is divided by 4: x/4. Then, 3 is added: x/4 + 3. The order of operations matters here. ➗➕",
        wrongAnswerExplanations: {
            "(x + 3)/4": "This would mean 'add 3 to the number and then divide by 4'.",
            "x/(4 + 3)": "This would mean 'divide the number by 7'.",
            "3 + x/4": "This is mathematically equivalent but not the standard form."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch11_t1_qm4',
        type: "mcq",
        question: "If a number is tripled and then decreased by 7, which expression represents this?",
        options: ["3x - 7", "7 - 3x", "3(x - 7)", "x - 21"],
        correctAnswer: "3x - 7",
        explanation: "First, the number is tripled: 3x. Then, 7 is subtracted: 3x - 7. The order of operations is important. ✖️➖",
        wrongAnswerExplanations: {
            "7 - 3x": "This would mean 'subtract three times a number from 7'.",
            "3(x - 7)": "This would mean 'subtract 7 from the number and then triple it'.",
            "x - 21": "This would mean 'subtract 21 from the number'."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch11_t1_qm5',
        type: "mcq",
        question: "If a number is increased by 8 and then halved, which expression represents this?",
        options: ["(x + 8)/2", "x/2 + 8", "x/2 + 4", "x + 4"],
        correctAnswer: "(x + 8)/2",
        explanation: "First, the number is increased by 8: (x + 8). Then, the whole expression is halved: (x + 8)/2. The parentheses are important. ➕➗",
        wrongAnswerExplanations: {
            "x/2 + 8": "This would mean 'halve the number and then add 8'.",
            "x/2 + 4": "This would mean 'halve the number and then add 4'.",
            "x + 4": "This would mean 'add 4 to the number'."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch11_t1_qm6',
        type: "mcq",
        question: "If a square's side length is increased by 2, what is the new perimeter?",
        options: ["4x + 8", "4x + 2", "x + 8", "4(x + 2)"],
        correctAnswer: "4(x + 2)",
        explanation: "New side length = x + 2. Perimeter of square = 4 × side length = 4(x + 2). This can also be written as 4x + 8. ⬛",
        wrongAnswerExplanations: {
            "4x + 8": "This is equivalent but not in the standard form.",
            "4x + 2": "This would be incorrect as it doesn't account for all sides.",
            "x + 8": "This would be just one side plus 8."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch11_t1_qm7',
        type: "mcq",
        question: "If a number is multiplied by 5 and then decreased by twice the number, which expression represents this?",
        options: ["5x - 2x", "5(x - 2x)", "5x - 2", "5 - 2x"],
        correctAnswer: "5x - 2x",
        explanation: "First, multiply by 5: 5x. Then, subtract twice the number: 5x - 2x. This simplifies to 3x. ✖️➖",
        wrongAnswerExplanations: {
            "5(x - 2x)": "This would mean 'multiply 5 by (x minus twice x)'.",
            "5x - 2": "This would mean 'multiply by 5 and subtract 2'.",
            "5 - 2x": "This would mean 'subtract twice the number from 5'."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch11_t1_qm8',
        type: "mcq",
        question: "If a number is divided by 3 and then increased by 4 times the number, which expression represents this?",
        options: ["x/3 + 4x", "4x + x/3", "(x + 4x)/3", "x/(3 + 4x)"],
        correctAnswer: "x/3 + 4x",
        explanation: "First, divide by 3: x/3. Then, add 4 times the number: x/3 + 4x. This can be written as (1/3 + 4)x. ➗➕",
        wrongAnswerExplanations: {
            "(x + 4x)/3": "This would mean 'add 4 times the number and then divide by 3'.",
            "x/(3 + 4x)": "This would mean 'divide the number by (3 plus 4 times the number)'.",
            "4x + x/3": "This is mathematically equivalent but not the standard form."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch11_t1_qm9',
        type: "mcq",
        question: "If a number is increased by 6 and then multiplied by 3, which expression represents this?",
        options: ["3(x + 6)", "3x + 6", "x + 18", "3x + 18"],
        correctAnswer: "3(x + 6)",
        explanation: "First, add 6: (x + 6). Then, multiply by 3: 3(x + 6). This can also be written as 3x + 18. ➕✖️",
        wrongAnswerExplanations: {
            "3x + 6": "This would mean 'multiply by 3 and then add 6'.",
            "x + 18": "This would mean 'add 18 to the number'.",
            "3x + 18": "This is equivalent but not in the standard form."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch11_t1_qm10',
        type: "mcq",
        question: "If a number is decreased by 4 and then tripled, which expression represents this?",
        options: ["3(x - 4)", "3x - 4", "x - 12", "3x - 12"],
        correctAnswer: "3(x - 4)",
        explanation: "First, subtract 4: (x - 4). Then, multiply by 3: 3(x - 4). This can also be written as 3x - 12. ➖✖️",
        wrongAnswerExplanations: {
            "3x - 4": "This would mean 'multiply by 3 and then subtract 4'.",
            "x - 12": "This would mean 'subtract 12 from the number'.",
            "3x - 12": "This is equivalent but not in the standard form."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch11_t1_qm11',
        type: "mcq",
        question: "If a number is divided by 2 and then increased by 5 times the number, which expression represents this?",
        options: ["x/2 + 5x", "5x + x/2", "(x + 5x)/2", "x/(2 + 5x)"],
        correctAnswer: "x/2 + 5x",
        explanation: "First, divide by 2: x/2. Then, add 5 times the number: x/2 + 5x. This can be written as (1/2 + 5)x. ➗➕",
        wrongAnswerExplanations: {
            "(x + 5x)/2": "This would mean 'add 5 times the number and then divide by 2'.",
            "x/(2 + 5x)": "This would mean 'divide the number by (2 plus 5 times the number)'.",
            "5x + x/2": "This is mathematically equivalent but not the standard form."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch11_t1_qm12',
        type: "mcq",
        question: "If a number is multiplied by 4 and then decreased by 3 times the number, which expression represents this?",
        options: ["4x - 3x", "4(x - 3x)", "4x - 3", "4 - 3x"],
        correctAnswer: "4x - 3x",
        explanation: "First, multiply by 4: 4x. Then, subtract 3 times the number: 4x - 3x. This simplifies to x. ✖️➖",
        wrongAnswerExplanations: {
            "4(x - 3x)": "This would mean 'multiply 4 by (x minus 3 times x)'.",
            "4x - 3": "This would mean 'multiply by 4 and subtract 3'.",
            "4 - 3x": "This would mean 'subtract 3 times the number from 4'."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch11_t1_qm13',
        type: "mcq",
        question: "If a number is increased by 7 and then divided by 2, which expression represents this?",
        options: ["(x + 7)/2", "x/2 + 7", "x/2 + 3.5", "x + 3.5"],
        correctAnswer: "(x + 7)/2",
        explanation: "First, add 7: (x + 7). Then, divide by 2: (x + 7)/2. The parentheses are important. ➕➗",
        wrongAnswerExplanations: {
            "x/2 + 7": "This would mean 'halve the number and then add 7'.",
            "x/2 + 3.5": "This would mean 'halve the number and then add 3.5'.",
            "x + 3.5": "This would mean 'add 3.5 to the number'."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch11_t1_qm14',
        type: "mcq",
        question: "If a number is decreased by 5 and then doubled, which expression represents this?",
        options: ["2(x - 5)", "2x - 5", "x - 10", "2x - 10"],
        correctAnswer: "2(x - 5)",
        explanation: "First, subtract 5: (x - 5). Then, multiply by 2: 2(x - 5). This can also be written as 2x - 10. ➖✖️",
        wrongAnswerExplanations: {
            "2x - 5": "This would mean 'double the number and then subtract 5'.",
            "x - 10": "This would mean 'subtract 10 from the number'.",
            "2x - 10": "This is equivalent but not in the standard form."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch11_t1_qm15',
        type: "mcq",
        question: "If a number is divided by 5 and then increased by 2 times the number, which expression represents this?",
        options: ["x/5 + 2x", "2x + x/5", "(x + 2x)/5", "x/(5 + 2x)"],
        correctAnswer: "x/5 + 2x",
        explanation: "First, divide by 5: x/5. Then, add 2 times the number: x/5 + 2x. This can be written as (1/5 + 2)x. ➗➕",
        wrongAnswerExplanations: {
            "(x + 2x)/5": "This would mean 'add 2 times the number and then divide by 5'.",
            "x/(5 + 2x)": "This would mean 'divide the number by (5 plus 2 times the number)'.",
            "2x + x/5": "This is mathematically equivalent but not the standard form."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch11_t1_qm16',
        type: "mcq",
        question: "If a number is multiplied by 6 and then decreased by 4 times the number, which expression represents this?",
        options: ["6x - 4x", "6(x - 4x)", "6x - 4", "6 - 4x"],
        correctAnswer: "6x - 4x",
        explanation: "First, multiply by 6: 6x. Then, subtract 4 times the number: 6x - 4x. This simplifies to 2x. ✖️➖",
        wrongAnswerExplanations: {
            "6(x - 4x)": "This would mean 'multiply 6 by (x minus 4 times x)'.",
            "6x - 4": "This would mean 'multiply by 6 and subtract 4'.",
            "6 - 4x": "This would mean 'subtract 4 times the number from 6'."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch11_t1_qm17',
        type: "mcq",
        question: "If a number is increased by 9 and then divided by 3, which expression represents this?",
        options: ["(x + 9)/3", "x/3 + 9", "x/3 + 3", "x + 3"],
        correctAnswer: "(x + 9)/3",
        explanation: "First, add 9: (x + 9). Then, divide by 3: (x + 9)/3. The parentheses are important. ➕➗",
        wrongAnswerExplanations: {
            "x/3 + 9": "This would mean 'divide by 3 and then add 9'.",
            "x/3 + 3": "This would mean 'divide by 3 and then add 3'.",
            "x + 3": "This would mean 'add 3 to the number'."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch11_t1_qm18',
        type: "mcq",
        question: "If a number is decreased by 6 and then tripled, which expression represents this?",
        options: ["3(x - 6)", "3x - 6", "x - 18", "3x - 18"],
        correctAnswer: "3(x - 6)",
        explanation: "First, subtract 6: (x - 6). Then, multiply by 3: 3(x - 6). This can also be written as 3x - 18. ➖✖️",
        wrongAnswerExplanations: {
            "3x - 6": "This would mean 'multiply by 3 and then subtract 6'.",
            "x - 18": "This would mean 'subtract 18 from the number'.",
            "3x - 18": "This is equivalent but not in the standard form."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch11_t1_qm19',
        type: "mcq",
        question: "If a number is divided by 4 and then increased by 3 times the number, which expression represents this?",
        options: ["x/4 + 3x", "3x + x/4", "(x + 3x)/4", "x/(4 + 3x)"],
        correctAnswer: "x/4 + 3x",
        explanation: "First, divide by 4: x/4. Then, add 3 times the number: x/4 + 3x. This can be written as (1/4 + 3)x. ➗➕",
        wrongAnswerExplanations: {
            "(x + 3x)/4": "This would mean 'add 3 times the number and then divide by 4'.",
            "x/(4 + 3x)": "This would mean 'divide the number by (4 plus 3 times the number)'.",
            "3x + x/4": "This is mathematically equivalent but not the standard form."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch11_t1_qm20',
        type: "mcq",
        question: "If a number is multiplied by 7 and then decreased by 5 times the number, which expression represents this?",
        options: ["7x - 5x", "7(x - 5x)", "7x - 5", "7 - 5x"],
        correctAnswer: "7x - 5x",
        explanation: "First, multiply by 7: 7x. Then, subtract 5 times the number: 7x - 5x. This simplifies to 2x. ✖️➖",
        wrongAnswerExplanations: {
            "7(x - 5x)": "This would mean 'multiply 7 by (x minus 5 times x)'.",
            "7x - 5": "This would mean 'multiply by 7 and subtract 5'.",
            "7 - 5x": "This would mean 'subtract 5 times the number from 7'."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    }
]; 