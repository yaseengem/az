import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch11_t3_qe1',
        type: "mcq",
        question: "What is the formula for the volume of a right circular cone?",
        options: [
            "(1/3) × πr² × h",
            "πr² × h",
            "(1/3) × 2πr × h",
            "2πr × h"
        ],
        correctAnswer: "(1/3) × πr² × h",
        explanation: "The volume of a right circular cone is one-third of the product of the base area (πr²) and the height (h). So the formula is V = (1/3) × πr² × h.",
        wrongAnswerExplanations: {
            "πr² × h": "This is the formula for the volume of a cylinder, not a cone.",
            "(1/3) × 2πr × h": "This formula is incorrect. 2πr is the circumference of the base, not its area.",
            "2πr × h": "This formula is incorrect. It is related to the lateral surface area of a cylinder."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch11_t3_qe2',
        type: "mcq",
        question: "If a cone has a radius of 3 cm and a height of 4 cm, what is its volume?",
        options: [
            "12π cm³",
            "36π cm³",
            "9π cm³",
            "4π cm³"
        ],
        correctAnswer: "12π cm³",
        explanation: "Using the formula V = (1/3) × πr² × h, we substitute r = 3 cm and h = 4 cm: V = (1/3) × π × 3² × 4 = (1/3) × π × 9 × 4 = 12π cm³.",
        wrongAnswerExplanations: {
            "36π cm³": "This is incorrect. The formula includes factor of 1/3, which was not applied here.",
            "9π cm³": "This is incorrect. It only calculates the area of the base (πr²).",
            "4π cm³": "This is incorrect. It's not the correct application of the volume formula."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch11_t3_qe3',
        type: "mcq",
        question: "The volume of a right circular cone is directly proportional to both its height and the square of its radius.",
        options: [
            "True",
            "False"
        ],
        correctAnswer: "True",
        explanation: "According to the formula V = (1/3) × πr² × h, the volume is directly proportional to the height (h) and to the square of the radius (r²).",
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch11_t3_qe4',
        type: "mcq",
        question: "If the radius of a cone is doubled while keeping the height constant, how does the volume change?",
        options: [
            "It becomes 2 times the original volume",
            "It becomes 4 times the original volume",
            "It becomes 8 times the original volume",
            "It remains the same"
        ],
        correctAnswer: "It becomes 4 times the original volume",
        explanation: "From the formula V = (1/3) × πr² × h, if r is doubled to 2r, the new volume is V' = (1/3) × π(2r)² × h = (1/3) × π × 4r² × h = 4 × (1/3) × πr² × h = 4V. So the volume becomes 4 times the original.",
        wrongAnswerExplanations: {
            "It becomes 2 times the original volume": "This is incorrect. Since the radius is squared in the formula, doubling the radius increases the volume by a factor of 4.",
            "It becomes 8 times the original volume": "This is incorrect. Doubling the radius increases the volume by a factor of 4, not 8.",
            "It remains the same": "This is incorrect. Changing the radius will definitely change the volume."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch11_t3_qe5',
        type: "mcq",
        question: "If the height of a cone is tripled while keeping the radius constant, how does the volume change?",
        options: [
            "It becomes 3 times the original volume",
            "It becomes 6 times the original volume",
            "It becomes 9 times the original volume",
            "It becomes 27 times the original volume"
        ],
        correctAnswer: "It becomes 3 times the original volume",
        explanation: "From the formula V = (1/3) × πr² × h, if h is tripled to 3h, the new volume is V' = (1/3) × πr² × 3h = 3 × (1/3) × πr² × h = 3V. So the volume becomes 3 times the original.",
        wrongAnswerExplanations: {
            "It becomes 6 times the original volume": "This is incorrect. The volume is directly proportional to height, so tripling the height will triple the volume.",
            "It becomes 9 times the original volume": "This is incorrect. The volume is directly proportional to height, not to the square of height.",
            "It becomes 27 times the original volume": "This is incorrect. The volume is directly proportional to height, not to the cube of height."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch11_t3_qe6',
        type: "mcq",
        question: "What is the volume of a cone with radius 5 cm and height 12 cm?",
        options: [
            "100π cm³",
            "60π cm³",
            "300π cm³",
            "20π cm³"
        ],
        correctAnswer: "100π cm³",
        explanation: "Using the formula V = (1/3) × πr² × h, we substitute r = 5 cm and h = 12 cm: V = (1/3) × π × 5² × 12 = (1/3) × π × 25 × 12 = (1/3) × 300π = 100π cm³.",
        wrongAnswerExplanations: {
            "60π cm³": "This is incorrect. The calculation is not done correctly.",
            "300π cm³": "This is incorrect. You must multiply by 1/3 according to the formula.",
            "20π cm³": "This is incorrect. The calculation is not done correctly."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch11_t3_qe7',
        type: "mcq",
        question: "A cone and a cylinder have the same base radius and same height. What is the ratio of volume of cone to volume of cylinder?",
        options: [
            "1:1",
            "1:2",
            "1:3",
            "2:3"
        ],
        correctAnswer: "1:3",
        explanation: "The volume of a cone is (1/3) × πr² × h, and the volume of a cylinder is πr² × h. The ratio of their volumes is [(1/3) × πr² × h] : [πr² × h] = 1:3.",
        wrongAnswerExplanations: {
            "1:1": "This is incorrect. A cone's volume is one-third of a cylinder's volume with the same base and height.",
            "1:2": "This is incorrect. The ratio is 1:3, not 1:2.",
            "2:3": "This is incorrect. The ratio is 1:3, not 2:3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch11_t3_qe8',
        type: "mcq",
        question: "If both the radius and height of a cone are halved, what happens to its volume?",
        options: [
            "It becomes 1/2 of the original volume",
            "It becomes 1/4 of the original volume",
            "It becomes 1/8 of the original volume",
            "It remains the same"
        ],
        correctAnswer: "It becomes 1/8 of the original volume",
        explanation: "From the formula V = (1/3) × πr² × h, if both r and h are halved, the new volume is V' = (1/3) × π(r/2)² × (h/2) = (1/3) × π × r²/4 × h/2 = (1/8) × (1/3) × πr² × h = V/8. So the volume becomes 1/8 of the original.",
        wrongAnswerExplanations: {
            "It becomes 1/2 of the original volume": "This is incorrect. When both radius and height are halved, the volume reduction is by a factor of 1/8.",
            "It becomes 1/4 of the original volume": "This is incorrect. The volume depends on r² and h, so halving both leads to a factor of 1/8.",
            "It remains the same": "This is incorrect. Changing both radius and height definitely changes the volume."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch11_t3_qe9',
        type: "mcq",
        question: "Which of the following will have the greatest volume?",
        options: [
            "A cone with radius 3 cm and height 4 cm",
            "A cone with radius 2 cm and height 9 cm",
            "A cone with radius 4 cm and height 3 cm",
            "A cone with radius 6 cm and height 1 cm"
        ],
        correctAnswer: "A cone with radius 4 cm and height 3 cm",
        explanation: "Using V = (1/3) × πr² × h:\nFor cone 1: V₁ = (1/3) × π × 3² × 4 = (1/3) × π × 9 × 4 = 12π cm³\nFor cone 2: V₂ = (1/3) × π × 2² × 9 = (1/3) × π × 4 × 9 = 12π cm³\nFor cone 3: V₃ = (1/3) × π × 4² × 3 = (1/3) × π × 16 × 3 = 16π cm³\nFor cone 4: V₄ = (1/3) × π × 6² × 1 = (1/3) × π × 36 × 1 = 12π cm³\nSo cone 3 has the greatest volume.",
        wrongAnswerExplanations: {
            "A cone with radius 3 cm and height 4 cm": "This cone has a volume of 12π cm³, which is less than the volume of cone 3.",
            "A cone with radius 2 cm and height 9 cm": "This cone has a volume of 12π cm³, which is less than the volume of cone 3.",
            "A cone with radius 6 cm and height 1 cm": "This cone has a volume of 12π cm³, which is less than the volume of cone 3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch11_t3_qe10',
        type: "mcq",
        question: "The volume of a cone with radius 7 cm and height 3 cm is 49π cm³.",
        options: [
            "True",
            "False"
        ],
        correctAnswer: "True",
        explanation: "Using the formula V = (1/3) × πr² × h, we substitute r = 7 cm and h = 3 cm: V = (1/3) × π × 7² × 3 = (1/3) × π × 49 × 3 = 49π cm³. So the statement is true.",
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
