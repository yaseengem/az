import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl5_ch9_t3_qm1',
        type: "mcq",
        question: "If a cube has a side length of 4 cm, what is the area of its front view?",
        options: ["16 cm²", "8 cm²", "24 cm²", "32 cm²"],
        correctAnswer: "16 cm²",
        explanation: "The front view of a cube is a square with area = side × side = 4 cm × 4 cm = 16 cm². 📐",
        wrongAnswerExplanations: {
            "8 cm²": "This is half the correct area.",
            "24 cm²": "This is the total surface area of the cube.",
            "32 cm²": "This is the volume of the cube."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t3_qm2',
        type: "mcq",
        question: "A cylinder has a height of 10 cm and diameter of 6 cm. What shape and dimensions appear in its side view?",
        options: [
            "Rectangle: 10 cm × 6 cm",
            "Circle: diameter 6 cm",
            "Square: 10 cm × 10 cm",
            "Rectangle: 6 cm × 6 cm"
        ],
        correctAnswer: "Rectangle: 10 cm × 6 cm",
        explanation: "The side view shows a rectangle with height = cylinder height (10 cm) and width = cylinder diameter (6 cm). 📏",
        wrongAnswerExplanations: {
            "Circle: diameter 6 cm": "This is the top view.",
            "Square: 10 cm × 10 cm": "The width should match the diameter.",
            "Rectangle: 6 cm × 6 cm": "The height should be 10 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t3_qm3',
        type: "mcq",
        question: "If a cuboid's front view shows a 5 cm × 3 cm rectangle and its side view shows a 3 cm × 4 cm rectangle, what are its dimensions?",
        options: [
            "5 cm × 3 cm × 4 cm",
            "5 cm × 4 cm × 3 cm",
            "3 cm × 4 cm × 5 cm",
            "4 cm × 3 cm × 5 cm"
        ],
        correctAnswer: "5 cm × 3 cm × 4 cm",
        explanation: "Front view shows length × height (5×3), side view shows width × height (3×4), so dimensions are 5×3×4 cm. 📦",
        wrongAnswerExplanations: {
            "5 cm × 4 cm × 3 cm": "The width should be 3 cm from the side view.",
            "3 cm × 4 cm × 5 cm": "The length should be 5 cm from the front view.",
            "4 cm × 3 cm × 5 cm": "The dimensions are in the wrong order."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t3_qm4',
        type: "mcq",
        question: "A cone has a height of 8 cm and base diameter of 6 cm. What shape and dimensions appear in its front view?",
        options: [
            "Triangle: height 8 cm, base 6 cm",
            "Circle: diameter 6 cm",
            "Rectangle: 8 cm × 6 cm",
            "Triangle: height 6 cm, base 8 cm"
        ],
        correctAnswer: "Triangle: height 8 cm, base 6 cm",
        explanation: "The front view shows a triangle with height = cone height (8 cm) and base = cone diameter (6 cm). 🍦",
        wrongAnswerExplanations: {
            "Circle: diameter 6 cm": "This is the top view.",
            "Rectangle: 8 cm × 6 cm": "This would be a cylinder's side view.",
            "Triangle: height 6 cm, base 8 cm": "The dimensions are reversed."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t3_qm5',
        type: "mcq",
        question: "If a cube's front view has an area of 25 cm², what is its volume?",
        options: ["125 cm³", "25 cm³", "75 cm³", "100 cm³"],
        correctAnswer: "125 cm³",
        explanation: "Area = side² = 25 cm², so side = 5 cm. Volume = side³ = 5 × 5 × 5 = 125 cm³. 📦",
        wrongAnswerExplanations: {
            "25 cm³": "This is the area, not the volume.",
            "75 cm³": "This is 3 times the area.",
            "100 cm³": "This is 4 times the area."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t3_qm6',
        type: "mcq",
        question: "A pyramid has a square base of 4 cm and height of 6 cm. What shape appears in its front view?",
        options: [
            "Triangle: height 6 cm, base 4 cm",
            "Square: 4 cm × 4 cm",
            "Rectangle: 6 cm × 4 cm",
            "Triangle: height 4 cm, base 6 cm"
        ],
        correctAnswer: "Triangle: height 6 cm, base 4 cm",
        explanation: "The front view shows a triangle with height = pyramid height (6 cm) and base = base side (4 cm). 🏛️",
        wrongAnswerExplanations: {
            "Square: 4 cm × 4 cm": "This is the top view.",
            "Rectangle: 6 cm × 4 cm": "This would be a prism's side view.",
            "Triangle: height 4 cm, base 6 cm": "The dimensions are reversed."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t3_qm7',
        type: "mcq",
        question: "If a cylinder's side view shows a 10 cm × 8 cm rectangle, what is its volume? (Use π = 3.14)",
        options: ["502.4 cm³", "251.2 cm³", "1004.8 cm³", "628 cm³"],
        correctAnswer: "502.4 cm³",
        explanation: "Height = 10 cm, diameter = 8 cm, radius = 4 cm. Volume = πr²h = 3.14 × 4² × 10 = 502.4 cm³. 🥫",
        wrongAnswerExplanations: {
            "251.2 cm³": "This is half the correct volume.",
            "1004.8 cm³": "This is double the correct volume.",
            "628 cm³": "This uses the diameter instead of radius."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t3_qm8',
        type: "mcq",
        question: "A triangular prism has a base triangle with sides 3 cm, 4 cm, 5 cm and height 6 cm. What shape appears in its front view?",
        options: [
            "Rectangle: 6 cm × 5 cm",
            "Triangle: sides 3 cm, 4 cm, 5 cm",
            "Rectangle: 6 cm × 4 cm",
            "Square: 6 cm × 6 cm"
        ],
        correctAnswer: "Rectangle: 6 cm × 5 cm",
        explanation: "The front view shows a rectangle with height = prism height (6 cm) and width = longest base side (5 cm). 📐",
        wrongAnswerExplanations: {
            "Triangle: sides 3 cm, 4 cm, 5 cm": "This is the top view.",
            "Rectangle: 6 cm × 4 cm": "The width should be the longest side.",
            "Square: 6 cm × 6 cm": "The width should match the longest base side."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t3_qm9',
        type: "mcq",
        question: "If a sphere has a diameter of 10 cm, what is the area of its top view? (Use π = 3.14)",
        options: ["78.5 cm²", "314 cm²", "157 cm²", "39.25 cm²"],
        correctAnswer: "78.5 cm²",
        explanation: "Top view is a circle with radius = 5 cm. Area = πr² = 3.14 × 5² = 78.5 cm². ⚽",
        wrongAnswerExplanations: {
            "314 cm²": "This is the surface area of the sphere.",
            "157 cm²": "This is half the surface area.",
            "39.25 cm²": "This uses radius = 2.5 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t3_qm10',
        type: "mcq",
        question: "A hexagonal prism has a side length of 3 cm and height of 8 cm. What shape appears in its front view?",
        options: [
            "Rectangle: 8 cm × 6 cm",
            "Hexagon: side 3 cm",
            "Rectangle: 8 cm × 3 cm",
            "Square: 8 cm × 8 cm"
        ],
        correctAnswer: "Rectangle: 8 cm × 6 cm",
        explanation: "The front view shows a rectangle with height = prism height (8 cm) and width = hexagon width (2 × side = 6 cm). 📏",
        wrongAnswerExplanations: {
            "Hexagon: side 3 cm": "This is the top view.",
            "Rectangle: 8 cm × 3 cm": "The width should be twice the side length.",
            "Square: 8 cm × 8 cm": "The width should match the hexagon's width."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t3_qm11',
        type: "mcq",
        question: "If a cube's front view has a perimeter of 20 cm, what is its total surface area?",
        options: ["150 cm²", "100 cm²", "200 cm²", "50 cm²"],
        correctAnswer: "150 cm²",
        explanation: "Perimeter = 4 × side = 20 cm, so side = 5 cm. Surface area = 6 × side² = 6 × 25 = 150 cm². 📦",
        wrongAnswerExplanations: {
            "100 cm²": "This is 4 times the area of one face.",
            "200 cm²": "This is 8 times the area of one face.",
            "50 cm²": "This is the area of two faces."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t3_qm12',
        type: "mcq",
        question: "A cone has a slant height of 10 cm and base radius of 6 cm. What shape appears in its front view?",
        options: [
            "Triangle: height 8 cm, base 12 cm",
            "Circle: radius 6 cm",
            "Triangle: height 10 cm, base 12 cm",
            "Rectangle: 10 cm × 12 cm"
        ],
        correctAnswer: "Triangle: height 8 cm, base 12 cm",
        explanation: "Front view shows a triangle with base = diameter (12 cm) and height = √(slant height² - radius²) = 8 cm. 🍦",
        wrongAnswerExplanations: {
            "Circle: radius 6 cm": "This is the top view.",
            "Triangle: height 10 cm, base 12 cm": "The height should be less than the slant height.",
            "Rectangle: 10 cm × 12 cm": "This would be a cylinder's side view."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t3_qm13',
        type: "mcq",
        question: "If a cylinder's top view has an area of 78.5 cm², what is its height if the side view shows a 10 cm × 8 cm rectangle?",
        options: ["10 cm", "8 cm", "12 cm", "6 cm"],
        correctAnswer: "10 cm",
        explanation: "Top view area = πr² = 78.5 cm², so r = 5 cm, diameter = 10 cm. Side view shows height × diameter = 10 cm × 8 cm, so height = 10 cm. 📏",
        wrongAnswerExplanations: {
            "8 cm": "This is the diameter from the side view.",
            "12 cm": "This is more than shown in the side view.",
            "6 cm": "This is less than shown in the side view."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t3_qm14',
        type: "mcq",
        question: "A triangular pyramid has a base triangle with sides 5 cm, 12 cm, 13 cm and height 8 cm. What shape appears in its front view?",
        options: [
            "Triangle: height 8 cm, base 13 cm",
            "Triangle: sides 5 cm, 12 cm, 13 cm",
            "Rectangle: 8 cm × 13 cm",
            "Square: 8 cm × 8 cm"
        ],
        correctAnswer: "Triangle: height 8 cm, base 13 cm",
        explanation: "The front view shows a triangle with height = pyramid height (8 cm) and base = longest base side (13 cm). 🏛️",
        wrongAnswerExplanations: {
            "Triangle: sides 5 cm, 12 cm, 13 cm": "This is the top view.",
            "Rectangle: 8 cm × 13 cm": "This would be a prism's side view.",
            "Square: 8 cm × 8 cm": "The base should match the longest side."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t3_qm15',
        type: "mcq",
        question: "If a cube's front view has a diagonal of 7√2 cm, what is its volume?",
        options: ["343 cm³", "49 cm³", "147 cm³", "294 cm³"],
        correctAnswer: "343 cm³",
        explanation: "Diagonal = side√2 = 7√2 cm, so side = 7 cm. Volume = side³ = 7 × 7 × 7 = 343 cm³. 📦",
        wrongAnswerExplanations: {
            "49 cm³": "This is the area of one face.",
            "147 cm³": "This is 3 times the area of one face.",
            "294 cm³": "This is 6 times the area of one face."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t3_qm16',
        type: "mcq",
        question: "A pentagonal prism has a side length of 4 cm and height of 7 cm. What shape appears in its front view?",
        options: [
            "Rectangle: 7 cm × 8 cm",
            "Pentagon: side 4 cm",
            "Rectangle: 7 cm × 4 cm",
            "Square: 7 cm × 7 cm"
        ],
        correctAnswer: "Rectangle: 7 cm × 8 cm",
        explanation: "The front view shows a rectangle with height = prism height (7 cm) and width ≈ 2 × side (8 cm). 📏",
        wrongAnswerExplanations: {
            "Pentagon: side 4 cm": "This is the top view.",
            "Rectangle: 7 cm × 4 cm": "The width should be about twice the side length.",
            "Square: 7 cm × 7 cm": "The width should match the pentagon's width."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t3_qm17',
        type: "mcq",
        question: "If a sphere's top view has an area of 113.04 cm², what is its surface area? (Use π = 3.14)",
        options: ["452.16 cm²", "226.08 cm²", "113.04 cm²", "56.52 cm²"],
        correctAnswer: "452.16 cm²",
        explanation: "Top view area = πr² = 113.04 cm², so r = 6 cm. Surface area = 4πr² = 4 × 113.04 = 452.16 cm². ⚽",
        wrongAnswerExplanations: {
            "226.08 cm²": "This is half the surface area.",
            "113.04 cm²": "This is the area of one view.",
            "56.52 cm²": "This is half the area of one view."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t3_qm18',
        type: "mcq",
        question: "A cone has a volume of 100π cm³ and height of 12 cm. What shape appears in its front view?",
        options: [
            "Triangle: height 12 cm, base 10 cm",
            "Circle: radius 5 cm",
            "Triangle: height 10 cm, base 12 cm",
            "Rectangle: 12 cm × 10 cm"
        ],
        correctAnswer: "Triangle: height 12 cm, base 10 cm",
        explanation: "Volume = (1/3)πr²h = 100π, so r = 5 cm. Front view shows triangle with height = 12 cm, base = 2r = 10 cm. 🍦",
        wrongAnswerExplanations: {
            "Circle: radius 5 cm": "This is the top view.",
            "Triangle: height 10 cm, base 12 cm": "The dimensions are reversed.",
            "Rectangle: 12 cm × 10 cm": "This would be a cylinder's side view."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t3_qm19',
        type: "mcq",
        question: "If a cuboid's front view shows a 6 cm × 4 cm rectangle and its side view shows a 4 cm × 5 cm rectangle, what is its volume?",
        options: ["120 cm³", "24 cm³", "60 cm³", "48 cm³"],
        correctAnswer: "120 cm³",
        explanation: "Dimensions are 6 cm × 4 cm × 5 cm. Volume = length × width × height = 6 × 4 × 5 = 120 cm³. 📦",
        wrongAnswerExplanations: {
            "24 cm³": "This is the area of the front view.",
            "60 cm³": "This is half the correct volume.",
            "48 cm³": "This is the area of the side view."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t3_qm20',
        type: "mcq",
        question: "A cylinder has a surface area of 150.72 cm² and height of 6 cm. What shape appears in its side view? (Use π = 3.14)",
        options: [
            "Rectangle: 6 cm × 8 cm",
            "Circle: radius 4 cm",
            "Rectangle: 6 cm × 4 cm",
            "Square: 6 cm × 6 cm"
        ],
        correctAnswer: "Rectangle: 6 cm × 8 cm",
        explanation: "Surface area = 2πr² + 2πrh = 150.72, so r = 4 cm. Side view shows rectangle with height = 6 cm, width = 2r = 8 cm. 🥫",
        wrongAnswerExplanations: {
            "Circle: radius 4 cm": "This is the top view.",
            "Rectangle: 6 cm × 4 cm": "The width should be twice the radius.",
            "Square: 6 cm × 6 cm": "The width should match the diameter."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 