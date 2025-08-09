import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch9_t3_qm1',
        type: "mcq",
        question: "Which representation shows that 1/2 and 2/4 are equal fractions?",
        options: [
            "A circle divided into 2 parts with 1 shaded and a circle divided into 4 parts with 2 shaded",
            "A circle divided into 4 parts with 2 shaded and a circle divided into 2 parts with 2 shaded",
            "A circle divided into 2 parts with 1 shaded and a circle divided into 4 parts with 1 shaded",
            "A circle completely shaded and a circle divided into 4 parts with 2 shaded"
        ],
        correctAnswer: "A circle divided into 2 parts with 1 shaded and a circle divided into 4 parts with 2 shaded",
        explanation: "When two fractions represent the same amount, they are equal. Visually, 1/2 and 2/4 shade the same portion. 🍕",
        wrongAnswerExplanations: {
            "A circle divided into 4 parts with 2 shaded and a circle divided into 2 parts with 2 shaded": "2/4 = 1/2, but a circle with 2/2 represents a whole, not 1/2.",
            "A circle divided into 2 parts with 1 shaded and a circle divided into 4 parts with 1 shaded": "1/2 ≠ 1/4, they represent different amounts.",
            "A circle completely shaded and a circle divided into 4 parts with 2 shaded": "A fully shaded circle is 1 whole, not 1/2."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch9_t3_qm2',
        type: "mcq",
        question: "If a square is divided into 8 equal parts and 2 parts are shaded, which other visual representation shows the same fraction?",
        options: [
            "A circle divided into 4 parts with 1 part shaded",
            "A rectangle divided into 12 parts with 3 parts shaded",
            "A triangle divided into 3 parts with 1 part shaded",
            "A hexagon divided into 6 parts with 1 part shaded"
        ],
        correctAnswer: "A circle divided into 4 parts with 1 part shaded",
        explanation: "2/8 = 1/4, so a shape divided into 4 equal parts with 1 part shaded represents the same fraction. 🟦",
        wrongAnswerExplanations: {
            "A rectangle divided into 12 parts with 3 parts shaded": "3/12 = 1/4 = 2/8, but the question asks about visuals, not numerical equivalence.",
            "A triangle divided into 3 parts with 1 part shaded": "1/3 ≠ 2/8 or 1/4.",
            "A hexagon divided into 6 parts with 1 part shaded": "1/6 ≠ 2/8 or 1/4."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch9_t3_qm3',
        type: "mcq",
        question: "Raj ate 2 slices of a pizza that was cut into 8 equal slices. Priya ate 1 slice of another pizza that was cut into 4 equal slices. Who ate more pizza?",
        options: [
            "Raj ate more",
            "Priya ate more",
            "They ate the same amount",
            "Cannot be determined without knowing the size of the pizzas"
        ],
        correctAnswer: "They ate the same amount",
        explanation: "Raj ate 2/8 = 1/4 of his pizza and Priya ate 1/4 of her pizza. If the pizzas are the same size, they ate equally. 🍕",
        wrongAnswerExplanations: {
            "Raj ate more": "Raj ate 2/8 = 1/4, the same fraction as Priya.",
            "Priya ate more": "Priya ate 1/4, the same fraction as Raj's 2/8.",
            "Cannot be determined without knowing the size of the pizzas": "The question implies the pizzas are the same size."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch9_t3_qm4',
        type: "mcq",
        question: "A rectangular garden is divided into 6 equal sections. If 4 sections are planted with flowers, what fraction of the garden is NOT planted with flowers?",
        options: [
            "2/6",
            "4/6",
            "1/3",
            "1/6"
        ],
        correctAnswer: "2/6",
        explanation: "If 4/6 of the garden has flowers, then 6/6 - 4/6 = 2/6 of the garden doesn't have flowers. 🌷",
        wrongAnswerExplanations: {
            "4/6": "4/6 represents the portion WITH flowers, not the unplanted portion.",
            "1/3": "1/3 = 2/6 is correct mathematically, but the direct observation is 2/6.",
            "1/6": "If 4 out of 6 sections have flowers, then 2 sections (2/6), not 1, are without flowers."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch9_t3_qm5',
        type: "mcq",
        question: "In which of these examples is MORE than 1/2 of the object shaded?",
        options: [
            "3 out of 4 equal parts of a circle",
            "2 out of 6 equal parts of a rectangle",
            "3 out of 8 equal parts of a square",
            "1 out of 3 equal parts of a triangle"
        ],
        correctAnswer: "3 out of 4 equal parts of a circle",
        explanation: "3/4 is greater than 1/2, while 2/6, 3/8, and 1/3 are all less than 1/2. 🔵",
        wrongAnswerExplanations: {
            "2 out of 6 equal parts of a rectangle": "2/6 = 1/3, which is less than 1/2.",
            "3 out of 8 equal parts of a square": "3/8 is less than 1/2 (which would be 4/8).",
            "1 out of 3 equal parts of a triangle": "1/3 is less than 1/2."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch9_t3_qm6',
        type: "mcq",
        question: "Meera divided a chocolate bar equally among herself and 3 friends. What fraction of the chocolate bar did each person receive?",
        options: [
            "1/4",
            "1/3",
            "3/4",
            "1/5"
        ],
        correctAnswer: "1/4",
        explanation: "Shared among 4 people (Meera and 3 friends), each person got 1/4 of the chocolate bar. 🍫",
        wrongAnswerExplanations: {
            "1/3": "This would be correct if there were only 3 people total.",
            "3/4": "This would be the amount shared with the 3 friends together, not each person.",
            "1/5": "This would be correct if there were 5 people total."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch9_t3_qm7',
        type: "mcq",
        question: "Which visual representation shows that 3/6 and 1/2 are equivalent fractions?",
        options: [
            "A rectangle divided into 6 parts with 3 shaded and another rectangle divided into 2 parts with 1 shaded",
            "A rectangle divided into 6 parts with 3 shaded and another rectangle divided into 2 parts with 2 shaded",
            "A rectangle divided into 6 parts with 2 shaded and another rectangle divided into 2 parts with 1 shaded",
            "A rectangle divided into 6 parts with 4 shaded and another rectangle divided into 2 parts with 1 shaded"
        ],
        correctAnswer: "A rectangle divided into 6 parts with 3 shaded and another rectangle divided into 2 parts with 1 shaded",
        explanation: "3/6 = 1/2, so both visual representations show the same amount shaded: half of each shape. 🟥",
        wrongAnswerExplanations: {
            "A rectangle divided into 6 parts with 3 shaded and another rectangle divided into 2 parts with 2 shaded": "2/2 = 1 whole, not 1/2.",
            "A rectangle divided into 6 parts with 2 shaded and another rectangle divided into 2 parts with 1 shaded": "2/6 = 1/3, which is not equal to 1/2.",
            "A rectangle divided into 6 parts with 4 shaded and another rectangle divided into 2 parts with 1 shaded": "4/6 = 2/3, which is not equal to 1/2."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch9_t3_qm8',
        type: "mcq",
        question: "If 3/4 of a circle is shaded, what fraction of the circle is unshaded?",
        options: [
            "1/4",
            "1/3",
            "1/2",
            "3/4"
        ],
        correctAnswer: "1/4",
        explanation: "If 3/4 is shaded, then 4/4 - 3/4 = 1/4 is unshaded. The total must equal one whole. 🔴",
        wrongAnswerExplanations: {
            "1/3": "The unshaded portion would be 1/4, not 1/3.",
            "1/2": "1/2 would mean half the circle is unshaded, but only 1/4 is unshaded.",
            "3/4": "3/4 is the shaded portion, not the unshaded portion."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch9_t3_qm9',
        type: "mcq",
        question: "Which fraction is visually represented by shading 3 parts of a rectangle divided into 5 equal parts?",
        options: [
            "3/5",
            "2/5",
            "3/8",
            "5/3"
        ],
        correctAnswer: "3/5",
        explanation: "3 shaded parts out of 5 equal parts represents the fraction 3/5. 🟫",
        wrongAnswerExplanations: {
            "2/5": "2/5 would mean 2 parts are shaded, not 3.",
            "3/8": "The rectangle is divided into 5 parts, not 8.",
            "5/3": "This is an improper fraction where the numerator is larger than the denominator."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch9_t3_qm10',
        type: "mcq",
        question: "A square is divided into 9 equal parts. If 6 parts are shaded, which of these fractions represents the shaded portion?",
        options: [
            "6/9",
            "2/3",
            "3/9",
            "6/3"
        ],
        correctAnswer: "6/9",
        explanation: "6 shaded parts out of 9 equal parts represents the fraction 6/9. 🟪",
        wrongAnswerExplanations: {
            "2/3": "2/3 = 6/9 is correct mathematically, but the direct observation is 6/9.",
            "3/9": "3/9 would mean 3 parts are shaded, not 6.",
            "6/3": "This is an improper fraction; the denominator should be 9, not 3."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch9_t3_qm11',
        type: "mcq",
        question: "Rohan spent 1/4 of his money on a book and 1/2 on a toy. What fraction of his money did he spend in total?",
        options: [
            "3/4",
            "2/6",
            "1/6",
            "2/4"
        ],
        correctAnswer: "3/4",
        explanation: "Rohan spent 1/4 + 1/2 = 1/4 + 2/4 = 3/4 of his money in total. 💰",
        wrongAnswerExplanations: {
            "2/6": "1/4 + 1/2 = 3/4, not 2/6.",
            "1/6": "1/4 + 1/2 = 3/4, not 1/6.",
            "2/4": "1/4 + 1/2 = 3/4, not 2/4."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch9_t3_qm12',
        type: "mcq",
        question: "Which of these shows 2/3 of a shape shaded?",
        options: [
            "A circle divided into 3 parts with 2 parts shaded",
            "A square divided into 4 parts with 2 parts shaded",
            "A rectangle divided into 6 parts with 4 parts shaded",
            "A triangle divided into 3 parts with 1 part shaded"
        ],
        correctAnswer: "A circle divided into 3 parts with 2 parts shaded",
        explanation: "2/3 means dividing a shape into 3 equal parts and shading 2 of those parts. 🟢",
        wrongAnswerExplanations: {
            "A square divided into 4 parts with 2 parts shaded": "This shows 2/4 = 1/2, not 2/3.",
            "A rectangle divided into 6 parts with 4 parts shaded": "This shows 4/6 = 2/3, but the question asks for the direct 2/3 representation.",
            "A triangle divided into 3 parts with 1 part shaded": "This shows 1/3, not 2/3."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch9_t3_qm13',
        type: "mcq",
        question: "Sara drank 1/3 of her water bottle in the morning and 1/3 in the afternoon. What fraction of the water bottle remains?",
        options: [
            "1/3",
            "2/3",
            "0/3",
            "3/3"
        ],
        correctAnswer: "1/3",
        explanation: "Sara drank 1/3 + 1/3 = 2/3 of her water, so 3/3 - 2/3 = 1/3 remains. 💧",
        wrongAnswerExplanations: {
            "2/3": "2/3 is what she drank in total, not what remains.",
            "0/3": "This would mean the bottle is empty, but 1/3 still remains.",
            "3/3": "This would mean the bottle is full, but Sara already drank 2/3."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch9_t3_qm14',
        type: "mcq",
        question: "A pizza is cut into 8 equal slices. Amit eats 2 slices and Ravi eats 1 slice. What fraction of the pizza is left?",
        options: [
            "5/8",
            "3/8",
            "2/8",
            "6/8"
        ],
        correctAnswer: "5/8",
        explanation: "Together they ate 2 + 1 = 3 slices out of 8, so 8 - 3 = 5 slices (5/8) are left. 🍕",
        wrongAnswerExplanations: {
            "3/8": "3/8 is what they ate, not what's left.",
            "2/8": "2/8 is what Amit ate, not what's left of the pizza.",
            "6/8": "If 3 slices were eaten, then 5 slices (5/8), not 6, are left."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch9_t3_qm15',
        type: "mcq",
        question: "Which visual representation correctly shows 3/8 of a shape?",
        options: [
            "A circle divided into 8 parts with 3 parts shaded",
            "A rectangle divided into 4 parts with 3 parts shaded",
            "A square divided into 8 parts with 5 parts shaded",
            "A triangle divided into 8 parts with 2 parts shaded"
        ],
        correctAnswer: "A circle divided into 8 parts with 3 parts shaded",
        explanation: "3/8 means dividing a shape into 8 equal parts and shading exactly 3 of those parts. 🔷",
        wrongAnswerExplanations: {
            "A rectangle divided into 4 parts with 3 parts shaded": "This shows 3/4, not 3/8.",
            "A square divided into 8 parts with 5 parts shaded": "This shows 5/8, not 3/8.",
            "A triangle divided into 8 parts with 2 parts shaded": "This shows 2/8 = 1/4, not 3/8."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch9_t3_qm16',
        type: "mcq",
        question: "If 3/4 of a class of 20 students are girls, how many boys are in the class?",
        options: [
            "5",
            "15",
            "10",
            "7"
        ],
        correctAnswer: "5",
        explanation: "3/4 of 20 = 15 girls, so 20 - 15 = 5 boys are in the class. 👦",
        wrongAnswerExplanations: {
            "15": "15 is the number of girls (3/4 of 20), not boys.",
            "10": "If half the class were boys, there would be 10 boys.",
            "7": "This is incorrect. 20 - 15 = 5 boys, not 7."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch9_t3_qm17',
        type: "mcq",
        question: "Which fraction is visually represented by dividing a rectangle into 4 equal rows and shading 1 row?",
        options: [
            "1/4",
            "2/4",
            "3/4",
            "4/4"
        ],
        correctAnswer: "1/4",
        explanation: "1 row shaded out of 4 equal rows represents the fraction 1/4. 🟧",
        wrongAnswerExplanations: {
            "2/4": "2/4 would mean 2 rows are shaded, not 1.",
            "3/4": "3/4 would mean 3 rows are shaded, not 1.",
            "4/4": "4/4 would mean all 4 rows are shaded, not just 1."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch9_t3_qm18',
        type: "mcq",
        question: "In a garden with 12 flowers, 1/3 are red and 1/4 are yellow. How many flowers are neither red nor yellow?",
        options: [
            "5",
            "7",
            "3",
            "9"
        ],
        correctAnswer: "5",
        explanation: "Red: 1/3 of 12 = 4 flowers. Yellow: 1/4 of 12 = 3 flowers. Neither: 12 - 4 - 3 = 5 flowers. 🌺",
        wrongAnswerExplanations: {
            "7": "This is incorrect. 12 - 4 - 3 = 5, not 7.",
            "3": "3 is the number of yellow flowers, not flowers that are neither red nor yellow.",
            "9": "This would mean only 3 flowers are either red or yellow, which is incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch9_t3_qm19',
        type: "mcq",
        question: "If a rectangle is divided into 10 equal parts and some parts are shaded to show 3/5, how many parts are shaded?",
        options: [
            "6",
            "5",
            "3",
            "2"
        ],
        correctAnswer: "6",
        explanation: "3/5 = 6/10, so 6 out of 10 equal parts should be shaded to represent 3/5. 🟩",
        wrongAnswerExplanations: {
            "5": "5/10 = 1/2, not 3/5.",
            "3": "3/10 is not equal to 3/5. To represent 3/5 with 10 parts, we need 6 parts shaded.",
            "2": "2/10 = 1/5, not 3/5."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch9_t3_qm20',
        type: "mcq",
        question: "A square is divided into 9 equal parts arranged in 3 rows and 3 columns. If the middle row is shaded, what fraction of the square is shaded?",
        options: [
            "1/3",
            "3/9",
            "1/9",
            "2/3"
        ],
        correctAnswer: "1/3",
        explanation: "The middle row contains 3 of the 9 parts, so 3/9 = 1/3 of the square is shaded. 📊",
        wrongAnswerExplanations: {
            "3/9": "3/9 = 1/3 is correct mathematically, but the simplest form is 1/3.",
            "1/9": "1/9 would represent only one part out of 9, not an entire row of 3 parts.",
            "2/3": "2/3 would mean 6 parts are shaded, not just 3."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];
