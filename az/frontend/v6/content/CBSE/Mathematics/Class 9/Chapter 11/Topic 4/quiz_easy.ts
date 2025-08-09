import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch11_t4_qe1',
        type: "mcq",
        question: "What is the formula for the volume of a sphere?",
        options: [
            "(4/3) × πr³",
            "4πr²",
            "(2/3) × πr³",
            "πr³"
        ],
        correctAnswer: "(4/3) × πr³",
        explanation: "The volume of a sphere is given by the formula V = (4/3) × πr³, where r is the radius of the sphere.",
        wrongAnswerExplanations: {
            "4πr²": "This is the formula for the surface area of a sphere, not its volume.",
            "(2/3) × πr³": "This is incorrect. The correct coefficient is 4/3, not 2/3.",
            "πr³": "This is incorrect. The volume of a sphere includes the factor 4/3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch11_t4_qe2',
        type: "mcq",
        question: "Calculate the volume of a sphere with radius 3 cm.",
        options: [
            "36π cm³",
            "9π cm³",
            "12π cm³",
            "4π cm³"
        ],
        correctAnswer: "36π cm³",
        explanation: "Using the formula V = (4/3) × πr³, we get V = (4/3) × π × 3³ = (4/3) × π × 27 = 36π cm³.",
        wrongAnswerExplanations: {
            "9π cm³": "This is incorrect. It's only πr² (the area of the great circle), not the volume.",
            "12π cm³": "This is incorrect. The calculation is not done properly.",
            "4π cm³": "This is incorrect. This would be the result if we calculated r² instead of r³."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch11_t4_qe3',
        type: "mcq",
        question: "The volume of a sphere is directly proportional to the cube of its radius.",
        options: [
            "True",
            "False"
        ],
        correctAnswer: "True",
        explanation: "According to the formula V = (4/3) × πr³, the volume is directly proportional to r³ (the cube of the radius).",
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch11_t4_qe4',
        type: "mcq",
        question: "If the radius of a sphere is doubled, what happens to its volume?",
        options: [
            "It becomes 2 times the original volume",
            "It becomes 4 times the original volume",
            "It becomes 6 times the original volume",
            "It becomes 8 times the original volume"
        ],
        correctAnswer: "It becomes 8 times the original volume",
        explanation: "When radius increases from r to 2r, volume changes from V = (4/3)πr³ to V' = (4/3)π(2r)³ = (4/3)π(8r³) = 8V. The volume is 8 times larger.",
        wrongAnswerExplanations: {
            "It becomes 2 times the original volume": "This is incorrect. Since the volume depends on r³, doubling the radius makes the volume 8 times larger.",
            "It becomes 4 times the original volume": "This is incorrect. Doubling the radius increases the volume by a factor of 8, not 4.",
            "It becomes 6 times the original volume": "This is incorrect. The volume increases by a factor of 8 when the radius is doubled."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch11_t4_qe5',
        type: "mcq",
        question: "If the volume of a sphere is 288π cm³, what is its radius?",
        options: [
            "6 cm",
            "12 cm",
            "4 cm",
            "3 cm"
        ],
        correctAnswer: "6 cm",
        explanation: "Using the formula V = (4/3) × πr³, we get: 288π = (4/3) × πr³\n288 = (4/3) × r³\n288 × 3/4 = r³\n216 = r³\nr = ∛216 = 6 cm",
        wrongAnswerExplanations: {
            "12 cm": "This is incorrect. A radius of 12 cm would give a volume of 2304π cm³.",
            "4 cm": "This is incorrect. A radius of 4 cm would give a volume of 64π/3 cm³.",
            "3 cm": "This is incorrect. A radius of 3 cm would give a volume of 36π cm³."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch11_t4_qe6',
        type: "mcq",
        question: "A hemisphere has a radius of 3 cm. What is its volume?",
        options: [
            "18π cm³",
            "9π cm³",
            "36π cm³",
            "6π cm³"
        ],
        correctAnswer: "18π cm³",
        explanation: "Hemisphere volume is half the sphere volume. For radius 3 cm, sphere volume is V = (4/3)π(3³) = (4/3)π(27) = 36π cm³, so hemisphere volume is 18π cm³.",
        wrongAnswerExplanations: {
            "9π cm³": "This is incorrect. This would be the area of the circular base, not the volume.",
            "36π cm³": "This is incorrect. This is the volume of the full sphere, not the hemisphere.",
            "6π cm³": "This is incorrect. The calculation is not done properly."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch11_t4_qe7',
        type: "mcq",
        question: "If the radius of a sphere is tripled, what happens to its volume?",
        options: [
            "It becomes 3 times the original volume",
            "It becomes 9 times the original volume",
            "It becomes 27 times the original volume",
            "It becomes 12 times the original volume"
        ],
        correctAnswer: "It becomes 27 times the original volume",
        explanation: "When radius increases from r to 3r, volume changes from V = (4/3)πr³ to V' = (4/3)π(3r)³ = (4/3)π(27r³) = 27V. The volume is 27 times larger.",
        wrongAnswerExplanations: {
            "It becomes 3 times the original volume": "This is incorrect. Since the volume depends on r³, tripling the radius makes the volume 27 times larger.",
            "It becomes 9 times the original volume": "This is incorrect. Tripling the radius increases the volume by a factor of 27, not 9.",
            "It becomes 12 times the original volume": "This is incorrect. The volume increases by a factor of 27 when the radius is tripled."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch11_t4_qe8',
        type: "mcq",
        question: "The volume of a sphere is 32π/3 cm³. What is its diameter?",
        options: [
            "4 cm",
            "8 cm",
            "2 cm",
            "6 cm"
        ],
        correctAnswer: "4 cm",
        explanation: "Using the formula V = (4/3) × πr³, we get: 32π/3 = (4/3) × πr³\n32 = 4 × r³\nr³ = 8\nr = 2 cm\nSince diameter = 2r, the diameter is 2 × 2 = 4 cm.",
        wrongAnswerExplanations: {
            "8 cm": "This is incorrect. This would be the diameter if the volume were 256π/3 cm³.",
            "2 cm": "This is incorrect. This is the radius, not the diameter.",
            "6 cm": "This is incorrect. This is not equal to twice the calculated radius."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch11_t4_qe9',
        type: "mcq",
        question: "A sphere with diameter 10 cm has the same volume as two spheres each with diameter 5 cm.",
        options: [
            "True",
            "False"
        ],
        correctAnswer: "False",
        explanation: "For the large sphere with diameter 10 cm (radius 5 cm): V₁ = (4/3) × π × 5³ = (4/3) × π × 125 = 500π/3 cm³.\nFor each small sphere with diameter 5 cm (radius 2.5 cm): V₂ = (4/3) × π × 2.5³ = (4/3) × π × 15.625 = 62.5π/3 cm³.\nTotal volume of two small spheres = 2 × 62.5π/3 = 125π/3 cm³.\nSince 125π/3 ≠ 500π/3, the statement is false.",
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch11_t4_qe10',
        type: "mcq",
        question: "What is the volume of a sphere with diameter 8 cm?",
        options: [
            "256π/3 cm³",
            "64π cm³",
            "32π cm³",
            "16π cm³"
        ],
        correctAnswer: "256π/3 cm³",
        explanation: "For a sphere with diameter 8 cm, the radius is r = 4 cm.\nUsing the formula V = (4/3) × πr³, we get V = (4/3) × π × 4³ = (4/3) × π × 64 = 256π/3 cm³.",
        wrongAnswerExplanations: {
            "64π cm³": "This is incorrect. The calculation does not properly account for the factor 4/3.",
            "32π cm³": "This is incorrect. The calculation is not done properly.",
            "16π cm³": "This is incorrect. This would be the volume of a sphere with radius 2 cm (or diameter 4 cm)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
