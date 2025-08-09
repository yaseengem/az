// filepath: content/CBSE/Mathematics/Class 3/Chapter4/Topic2/quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl3_ch4_t2_qe1',
        type: "mcq",
        question: "Which is longer: 1 meter or 90 centimeters?",
        options: ["1 meter", "90 centimeters", "Both are equal", "Cannot be compared"],
        correctAnswer: "1 meter",
        explanation: "1 meter equals 100 centimeters, which is more than 90 centimeters.",
        wrongAnswerExplanations: {
            "90 centimeters": "90 centimeters is less than 1 meter (100 cm).",
            "Both are equal": "1 meter (100 cm) is longer than 90 centimeters.",
            "Cannot be compared": "Both are units of length and can be compared after conversion."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch4_t2_qe2',
        type: "mcq",
        question: "Which symbol should be used to compare 75 cm and 1 m?",
        options: [">", "<", "=", "≈"],
        correctAnswer: "<",
        explanation: "75 cm < 1 m because 75 cm is less than 100 cm (which equals 1 m).",
        wrongAnswerExplanations: {
            ">": "This is incorrect. 75 cm is less than 1 m, not greater.",
            "=": "This is incorrect. 75 cm is not equal to 1 m (100 cm).",
            "≈": "This is incorrect. We can determine the exact relationship, not just an approximation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch4_t2_qe3',
        type: "mcq",
        question: "Arrange in ascending order: 2 m, 150 cm, 95 cm",
        options: ["95 cm, 150 cm, 2 m", "95 cm, 2 m, 150 cm", "2 m, 150 cm, 95 cm", "150 cm, 2 m, 95 cm"],
        correctAnswer: "95 cm, 150 cm, 2 m",
        explanation: "95 cm < 150 cm < 2 m (200 cm). This puts them in ascending order (smallest to largest).",
        wrongAnswerExplanations: {
            "95 cm, 2 m, 150 cm": "This is incorrect. 2 m (200 cm) is greater than 150 cm.",
            "2 m, 150 cm, 95 cm": "This is descending order (largest to smallest), not ascending.",
            "150 cm, 2 m, 95 cm": "This is not in any logical order."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch4_t2_qe4',
        type: "mcq",
        question: "Which is the shortest length?",
        options: ["140 cm", "1 m", "1 m 50 cm", "125 cm"],
        correctAnswer: "1 m",
        explanation: "1 m = 100 cm, which is less than 125 cm, 140 cm, and 1 m 50 cm (150 cm).",
        wrongAnswerExplanations: {
            "140 cm": "140 cm is longer than 1 m (100 cm).",
            "1 m 50 cm": "1 m 50 cm (150 cm) is longer than 1 m (100 cm).",
            "125 cm": "125 cm is longer than 1 m (100 cm)."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch4_t2_qe5',
        type: "mcq",
        question: "Ravi's height is 130 cm and Sita's height is 125 cm. Who is taller?",
        options: ["Ravi", "Sita", "Both are of the same height", "Cannot be determined"],
        correctAnswer: "Ravi",
        explanation: "Ravi is 130 cm tall and Sita is 125 cm tall. Since 130 cm > 125 cm, Ravi is taller.",
        wrongAnswerExplanations: {
            "Sita": "Sita is 125 cm tall, which is less than Ravi's height of 130 cm.",
            "Both are of the same height": "Their heights are different: 130 cm and 125 cm.",
            "Cannot be determined": "We can determine who is taller by comparing the given heights."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch4_t2_qe6',
        type: "mcq",
        question: "Order these lengths from longest to shortest: 80 cm, 1 m, 90 cm",
        options: ["1 m, 90 cm, 80 cm", "90 cm, 80 cm, 1 m", "80 cm, 90 cm, 1 m", "1 m, 80 cm, 90 cm"],
        correctAnswer: "1 m, 90 cm, 80 cm",
        explanation: "1 m = 100 cm, so the order from longest to shortest is: 1 m (100 cm) > 90 cm > 80 cm.",
        wrongAnswerExplanations: {
            "90 cm, 80 cm, 1 m": "This is in the wrong order. 1 m (100 cm) is longer than both 90 cm and 80 cm.",
            "80 cm, 90 cm, 1 m": "This is in ascending order (shortest to longest), not descending.",
            "1 m, 80 cm, 90 cm": "This is incorrect. 90 cm is longer than 80 cm."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch4_t2_qe7',
        type: "mcq",
        question: "Complete the statement: 3 meters ___ 350 centimeters",
        options: [">", "<", "=", "≈"],
        correctAnswer: "<",
        explanation: "3 meters = 300 centimeters, which is less than 350 centimeters. So 3 m < 350 cm.",
        wrongAnswerExplanations: {
            ">": "This is incorrect. 3 m (300 cm) is less than 350 cm, not greater.",
            "=": "This is incorrect. 3 m (300 cm) is not equal to 350 cm.",
            "≈": "This is incorrect. We can determine the exact relationship, not just an approximation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch4_t2_qe8',
        type: "mcq",
        question: "Which is the correct comparison between 2 m 5 cm and 215 cm?",
        options: ["2 m 5 cm > 215 cm", "2 m 5 cm < 215 cm", "2 m 5 cm = 215 cm", "Cannot be compared"],
        correctAnswer: "2 m 5 cm < 215 cm",
        explanation: "2 m 5 cm = 205 cm, which is less than 215 cm. So 2 m 5 cm < 215 cm.",
        wrongAnswerExplanations: {
            "2 m 5 cm > 215 cm": "This is incorrect. 2 m 5 cm equals 205 cm, which is less than 215 cm.",
            "2 m 5 cm = 215 cm": "This is incorrect. 2 m 5 cm equals 205 cm, not 215 cm.",
            "Cannot be compared": "Both are length measurements and can be compared after converting to the same unit."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch4_t2_qe9',
        type: "mcq",
        question: "Which object is usually the longest?",
        options: ["A pencil", "A classroom", "An eraser", "A book"],
        correctAnswer: "A classroom",
        explanation: "A classroom is typically several meters long, while the other objects are much smaller.",
        wrongAnswerExplanations: {
            "A pencil": "A pencil is usually about 20 cm long, much shorter than a classroom.",
            "An eraser": "An eraser is typically only a few centimeters long.",
            "A book": "A book is usually less than 30 cm long, much shorter than a classroom."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch4_t2_qe10',
        type: "mcq",
        question: "Which statement is correct?",
        options: ["1 m = 100 cm", "1 m = 10 cm", "1 m = 1000 cm", "1 m = 50 cm"],
        correctAnswer: "1 m = 100 cm",
        explanation: "1 meter equals 100 centimeters. This is a basic conversion in the metric system.",
        wrongAnswerExplanations: {
            "1 m = 10 cm": "This is incorrect. 1 meter equals 100 cm, not 10 cm.",
            "1 m = 1000 cm": "This is incorrect. 1 meter equals 100 cm, not 1000 cm (1000 cm = 10 m).",
            "1 m = 50 cm": "This is incorrect. 1 meter equals 100 cm, not 50 cm."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch4_t2_qe11',
        type: "mcq",
        question: "Sheela's pencil is 15 cm long and Rahul's pencil is 12 cm long. How much longer is Sheela's pencil?",
        options: ["3 cm", "27 cm", "2 cm", "3 m"],
        correctAnswer: "3 cm",
        explanation: "To find the difference: 15 cm - 12 cm = 3 cm. So Sheela's pencil is 3 cm longer.",
        wrongAnswerExplanations: {
            "27 cm": "This is the sum (15 cm + 12 cm), not the difference.",
            "2 cm": "This is incorrect. The difference is 15 cm - 12 cm = 3 cm, not 2 cm.",
            "3 m": "This is incorrect. The difference is 3 cm, not 3 m (3 m would be 300 cm)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch4_t2_qe12',
        type: "mcq",
        question: "Arrange in descending order: 1 m, 75 cm, 120 cm, 50 cm",
        options: ["120 cm, 1 m, 75 cm, 50 cm", "1 m, 120 cm, 75 cm, 50 cm", "50 cm, 75 cm, 1 m, 120 cm", "120 cm, 1 m, 50 cm, 75 cm"],
        correctAnswer: "120 cm, 1 m, 75 cm, 50 cm",
        explanation: "Descending order means largest to smallest. 120 cm > 1 m (100 cm) > 75 cm > 50 cm.",
        wrongAnswerExplanations: {
            "1 m, 120 cm, 75 cm, 50 cm": "This is incorrect. 120 cm (1.2 m) is greater than 1 m.",
            "50 cm, 75 cm, 1 m, 120 cm": "This is ascending order (smallest to largest), not descending.",
            "120 cm, 1 m, 50 cm, 75 cm": "This is incorrect. 75 cm is greater than 50 cm."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch4_t2_qe13',
        type: "mcq",
        question: "Fill in the blank: 250 cm = ____ m 50 cm",
        options: ["2", "20", "25", "205"],
        correctAnswer: "2",
        explanation: "250 cm = 200 cm + 50 cm = 2 m + 50 cm = 2 m 50 cm.",
        wrongAnswerExplanations: {
            "20": "This is incorrect. 20 m would be 2000 cm, not 250 cm.",
            "25": "This is incorrect. 25 m would be 2500 cm, not 250 cm.",
            "205": "This is incorrect. 205 m would be 20500 cm, not 250 cm."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch4_t2_qe14',
        type: "mcq",
        question: "Which is more: 3 m or 30 cm?",
        options: ["3 m", "30 cm", "Both are equal", "Cannot be compared"],
        correctAnswer: "3 m",
        explanation: "3 m = 300 cm, which is more than 30 cm. So 3 m > 30 cm.",
        wrongAnswerExplanations: {
            "30 cm": "This is incorrect. 30 cm is much less than 3 m (300 cm).",
            "Both are equal": "This is incorrect. 3 m (300 cm) is not equal to 30 cm.",
            "Cannot be compared": "Both are length measurements and can be compared after converting to the same unit."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch4_t2_qe15',
        type: "mcq",
        question: "What is the relationship between 180 cm and 1 m 80 cm?",
        options: ["180 cm > 1 m 80 cm", "180 cm < 1 m 80 cm", "180 cm = 1 m 80 cm", "Cannot be compared"],
        correctAnswer: "180 cm = 1 m 80 cm",
        explanation: "180 cm = 1 m 80 cm because 1 m = 100 cm, so 1 m 80 cm = 100 cm + 80 cm = 180 cm.",
        wrongAnswerExplanations: {
            "180 cm > 1 m 80 cm": "This is incorrect. They are equal measurements.",
            "180 cm < 1 m 80 cm": "This is incorrect. They are equal measurements.",
            "Cannot be compared": "Both are length measurements and can be compared."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch4_t2_qe16',
        type: "mcq",
        question: "If Anu's height is 1 m 25 cm and Priya's height is 130 cm, who is taller?",
        options: ["Anu", "Priya", "Both are the same height", "Cannot be determined"],
        correctAnswer: "Anu",
        explanation: "Anu's height is 1 m 25 cm = 125 cm. Priya's height is 130 cm. Since 125 < 130, Priya is taller.",
        wrongAnswerExplanations: {
            "Anu": "This is incorrect. Anu is 125 cm tall, which is shorter than Priya at 130 cm.",
            "Both are the same height": "This is incorrect. Their heights are 125 cm and 130 cm, which are different.",
            "Cannot be determined": "We can determine the answer by converting to the same unit."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch4_t2_qe17',
        type: "mcq",
        question: "Which is shorter: 3 meters or 250 centimeters?",
        options: ["3 meters", "250 centimeters", "Both are equal", "Cannot be compared"],
        correctAnswer: "250 centimeters",
        explanation: "3 meters = 300 centimeters, which is more than 250 centimeters. So 250 cm is shorter.",
        wrongAnswerExplanations: {
            "3 meters": "This is incorrect. 3 m (300 cm) is longer than 250 cm.",
            "Both are equal": "This is incorrect. 3 m (300 cm) is not equal to 250 cm.",
            "Cannot be compared": "Both are length measurements and can be compared after converting to the same unit."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch4_t2_qe18',
        type: "mcq",
        question: "Compare: 1 m 50 cm ___ 125 cm",
        options: [">", "<", "=", "≈"],
        correctAnswer: ">",
        explanation: "1 m 50 cm = 150 cm. Since 150 cm > 125 cm, the correct symbol is >.",
        wrongAnswerExplanations: {
            "<": "This is incorrect. 1 m 50 cm (150 cm) is greater than 125 cm, not less.",
            "=": "This is incorrect. 150 cm is not equal to 125 cm.",
            "≈": "This is incorrect. We can determine the exact relationship, not just an approximation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch4_t2_qe19',
        type: "mcq",
        question: "Which object would typically have the shortest length?",
        options: ["A bicycle", "An eraser", "A pencil", "A desk"],
        correctAnswer: "An eraser",
        explanation: "An eraser is typically only a few centimeters long, shorter than the other objects listed.",
        wrongAnswerExplanations: {
            "A bicycle": "A bicycle is typically over 1 meter long.",
            "A pencil": "A pencil is usually about 20 cm long, longer than a typical eraser.",
            "A desk": "A desk is typically over 1 meter long and wide."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch4_t2_qe20',
        type: "mcq",
        question: "Fill in the blank: 1 meter 25 centimeters - 75 centimeters = ____",
        options: ["50 cm", "50 m", "2 m", "50 mm"],
        correctAnswer: "50 cm",
        explanation: "1 m 25 cm = 125 cm. Then 125 cm - 75 cm = 50 cm.",
        wrongAnswerExplanations: {
            "50 m": "This is incorrect. The answer is 50 cm, not 50 m (which would be 5000 cm).",
            "2 m": "This is incorrect. The answer is 50 cm (0.5 m), not 2 m.",
            "50 mm": "This is incorrect. The answer is 50 cm, not 50 mm (which would be 5 cm)."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    }
];
