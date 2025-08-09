import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch11_t5_qe1',
        type: "mcq",
        question: "Which of the following has a volume formula of (1/3) × πr² × h?",
        options: [
            "Cylinder",
            "Cone",
            "Sphere",
            "Hemisphere"
        ],
        correctAnswer: "Cone",
        explanation: "The volume of a cone is calculated using the formula V = (1/3) × πr² × h, where r is the radius of the base and h is the height of the cone.",
        wrongAnswerExplanations: {
            "Cylinder": "The volume formula for a cylinder is V = πr² × h, without the factor of 1/3.",
            "Sphere": "The volume formula for a sphere is V = (4/3) × πr³, which depends on the cube of the radius, not the height.",
            "Hemisphere": "The volume formula for a hemisphere is V = (2/3) × πr³, which is half the volume of a sphere."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch11_t5_qe2',
        type: "mcq",
        question: "What is the formula for the lateral surface area of a cylinder?",
        options: [
            "2πr²",
            "2πrh",
            "πr² + πrl",
            "πrl"
        ],
        correctAnswer: "2πrh",
        explanation: "The lateral surface area of a cylinder is the area of the curved surface, calculated using the formula 2πrh, where r is the radius of the base and h is the height of the cylinder.",
        wrongAnswerExplanations: {
            "2πr²": "This is the formula for the total surface area of the two circular ends of a cylinder, not its lateral surface area.",
            "πr² + πrl": "This is not a correct formula. It incorrectly combines elements from different surface area formulas.",
            "πrl": "This is the formula for the lateral surface area of a cone (where l is the slant height), not a cylinder."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch11_t5_qe3',
        type: "mcq",
        question: "The total surface area of a sphere is four times the area of its great circle.",
        options: [
            "True",
            "False"
        ],
        correctAnswer: "True",
        explanation: "The total surface area of a sphere is 4πr², and the area of its great circle is πr². Therefore, the surface area is four times the area of its great circle.",
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch11_t5_qe4',
        type: "mcq",
        question: "Which of the following is the formula for the total surface area of a cone?",
        options: [
            "πr² + πrl",
            "2πrl",
            "πr² + 2πrl",
            "πrl"
        ],
        correctAnswer: "πr² + πrl",
        explanation: "The total surface area of a cone is the sum of the area of its circular base (πr²) and the area of its curved surface (πrl), where r is the radius of the base and l is the slant height. So, the total surface area is πr² + πrl.",
        wrongAnswerExplanations: {
            "2πrl": "This is twice the curved surface area of a cone, not the total surface area.",
            "πr² + 2πrl": "This is incorrect. The curved surface area of a cone is πrl, not 2πrl.",
            "πrl": "This is only the curved surface area of a cone, not including the circular base."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch11_t5_qe5',
        type: "mcq",
        question: "The total surface area of a hemisphere with radius r is:",
        options: [
            "2πr²",
            "3πr²",
            "4πr²",
            "πr²"
        ],
        correctAnswer: "3πr²",
        explanation: "The total surface area of a hemisphere is the sum of the curved surface area (2πr²) and the area of its circular base (πr²). So, the total surface area is 2πr² + πr² = 3πr².",
        wrongAnswerExplanations: {
            "2πr²": "This is only the curved surface area of a hemisphere, not including its circular base.",
            "4πr²": "This is the total surface area of a full sphere, not a hemisphere.",
            "πr²": "This is only the area of the circular base of a hemisphere, not including its curved surface."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch11_t5_qe6',
        type: "mcq",
        question: "If the radius of a sphere is doubled, by what factor does its volume increase?",
        options: [
            "2 times",
            "4 times",
            "6 times",
            "8 times"
        ],
        correctAnswer: "8 times",
        explanation: "Sphere volume is V = (4/3) × πr³. If radius doubles to 2r, new volume is V' = (4/3) × π × (2r)³ = 8 × (4/3) × πr³ = 8V. Volume becomes 8 times larger.",
        wrongAnswerExplanations: {
            "2 times": "This is incorrect. The volume increases by a factor of 2³ = 8, not 2.",
            "4 times": "This is incorrect. The volume increases by a factor of 2³ = 8, not 4. (4 would be the factor if the surface area was considered, not volume).",
            "6 times": "This is incorrect. The volume increases by a factor of 2³ = 8, not 6."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch11_t5_qe7',
        type: "mcq",
        question: "If the height of a cylinder is doubled while keeping the radius constant, by what factor does its volume increase?",
        options: [
            "2 times",
            "4 times",
            "6 times",
            "8 times"
        ],
        correctAnswer: "2 times",
        explanation: "Cylinder volume is V = πr² × h. If height doubles to 2h, new volume is V' = πr² × 2h = 2V. Volume becomes twice the original.",
        wrongAnswerExplanations: {
            "4 times": "This is incorrect. The volume increases by a factor of 2, not 4. (It would be 4 if both the radius and height were doubled).",
            "6 times": "This is incorrect. The volume increases by a factor of 2, not 6.",
            "8 times": "This is incorrect. The volume increases by a factor of 2, not 8. (It would be 8 if the radius was doubled and the height was doubled)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch11_t5_qe8',
        type: "mcq",
        question: "The volume of a cone is one-third the volume of a cylinder with the same base radius and height.",
        options: [
            "True",
            "False"
        ],
        correctAnswer: "True",
        explanation: "Cylinder volume is V_cylinder = πr² × h, and cone volume is V_cone = (1/3) × πr² × h. Therefore, V_cone = (1/3) × V_cylinder, or 1/3 the cylinder volume.",
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch11_t5_qe9',
        type: "mcq",
        question: "Which of the following 3D shapes has the formula (4/3) × πr³ for its volume?",
        options: [
            "Cylinder",
            "Cone",
            "Sphere",
            "Hemisphere"
        ],
        correctAnswer: "Sphere",
        explanation: "The volume of a sphere is calculated using the formula V = (4/3) × πr³, where r is the radius of the sphere.",
        wrongAnswerExplanations: {
            "Cylinder": "The volume formula for a cylinder is V = πr² × h, which depends on both radius and height.",
            "Cone": "The volume formula for a cone is V = (1/3) × πr² × h, which depends on both radius and height.",
            "Hemisphere": "The volume formula for a hemisphere is V = (2/3) × πr³, which is half the volume of a sphere."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch11_t5_qe10',
        type: "mcq",
        question: "What is the relationship between the curved surface area (CSA) and the slant height (l) of a right circular cone with base radius r?",
        options: [
            "CSA = πrl",
            "CSA = 2πrl",
            "CSA = πr²l",
            "CSA = πl"
        ],
        correctAnswer: "CSA = πrl",
        explanation: "The curved surface area (CSA) of a right circular cone is calculated using the formula CSA = πrl, where r is the radius of the base and l is the slant height.",
        wrongAnswerExplanations: {
            "CSA = 2πrl": "This is incorrect. 2πrl is the curved surface area of a cylinder, not a cone.",
            "CSA = πr²l": "This is incorrect. The correct formula for the curved surface area of a cone is πrl.",
            "CSA = πl": "This is incorrect. The curved surface area depends on both the radius and the slant height."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
