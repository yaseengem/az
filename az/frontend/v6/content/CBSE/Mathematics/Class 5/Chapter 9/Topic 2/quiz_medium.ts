import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl5_ch9_t2_qm1',
        type: "mcq",
        question: "If a cube has a side length of 3 cm, what is the total area of its net?",
        options: ["54 cm²", "36 cm²", "72 cm²", "108 cm²"],
        correctAnswer: "54 cm²",
        explanation: "A cube net has 6 squares. Each square has area 3 × 3 = 9 cm². Total area = 6 × 9 = 54 cm². 🎲",
        wrongAnswerExplanations: {
            "36 cm²": "This is the area of 4 squares.",
            "72 cm²": "This is the area of 8 squares.",
            "108 cm²": "This is the volume of the cube."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t2_qm2',
        type: "mcq",
        question: "Which arrangement of squares CANNOT form a cube net?",
        options: [
            "Four squares in a row with one square on each side",
            "Three squares in a row with one square on top and bottom",
            "Two squares in a row with two squares on each side",
            "Six squares in a cross shape"
        ],
        correctAnswer: "Four squares in a row with one square on each side",
        explanation: "This arrangement cannot fold into a cube because the squares on the sides would overlap when folded. 🎲",
        wrongAnswerExplanations: {
            "Three squares in a row with one square on top and bottom": "This is a valid cube net arrangement.",
            "Two squares in a row with two squares on each side": "This is a valid cube net arrangement.",
            "Six squares in a cross shape": "This is a valid cube net arrangement."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t2_qm3',
        type: "mcq",
        question: "If a cylinder has a radius of 2 cm and height of 5 cm, what is the length of the rectangle in its net?",
        options: ["12.56 cm", "10 cm", "15.7 cm", "6.28 cm"],
        correctAnswer: "12.56 cm",
        explanation: "The length of the rectangle equals the circumference of the circular faces. Circumference = 2πr = 2 × 3.14 × 2 = 12.56 cm. 🥫",
        wrongAnswerExplanations: {
            "10 cm": "This is the height of the cylinder.",
            "15.7 cm": "This is too long for the given radius.",
            "6.28 cm": "This is the circumference of one circle, but the rectangle wraps around both circles."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t2_qm4',
        type: "mcq",
        question: "What is the minimum number of tabs needed to assemble a cube net?",
        options: ["5", "3", "6", "4"],
        correctAnswer: "5",
        explanation: "A cube has 6 faces, so you need 5 tabs to connect all faces together. The last face doesn't need a tab. 🎲",
        wrongAnswerExplanations: {
            "3": "This is not enough to connect all faces.",
            "6": "You don't need a tab for the last face.",
            "4": "This is not enough to connect all faces."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t2_qm5',
        type: "mcq",
        question: "If a cuboid has dimensions 2 cm × 3 cm × 4 cm, what is the total area of its net?",
        options: ["52 cm²", "24 cm²", "48 cm²", "72 cm²"],
        correctAnswer: "52 cm²",
        explanation: "The net has: two 2×3 faces (12 cm²), two 2×4 faces (16 cm²), and two 3×4 faces (24 cm²). Total = 12 + 16 + 24 = 52 cm². 📦",
        wrongAnswerExplanations: {
            "24 cm²": "This is the volume of the cuboid.",
            "48 cm²": "This is the area of 4 faces.",
            "72 cm²": "This is the area of all faces if they were the same size."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t2_qm6',
        type: "mcq",
        question: "Which shape's net has the largest area for a given volume?",
        options: ["Cylinder", "Cube", "Cuboid", "Cone"],
        correctAnswer: "Cylinder",
        explanation: "A cylinder's net has a large rectangular part that wraps around its curved surface, giving it the largest area. 🥫",
        wrongAnswerExplanations: {
            "Cube": "A cube's net has less area than a cylinder's for the same volume.",
            "Cuboid": "A cuboid's net has less area than a cylinder's for the same volume.",
            "Cone": "A cone's net has less area than a cylinder's for the same volume."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t2_qm7',
        type: "mcq",
        question: "If a cone has a radius of 3 cm and slant height of 5 cm, what is the angle of the sector in its net?",
        options: ["216 degrees", "180 degrees", "270 degrees", "360 degrees"],
        correctAnswer: "216 degrees",
        explanation: "The sector's angle = (radius/slant height) × 360° = (3/5) × 360° = 216°. 🍦",
        wrongAnswerExplanations: {
            "180 degrees": "This is half a circle, not the correct angle.",
            "270 degrees": "This is three-quarters of a circle, not the correct angle.",
            "360 degrees": "This is a full circle, not the correct angle."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t2_qm8',
        type: "mcq",
        question: "What is the minimum number of cuts needed to make a cube net from a single sheet of paper?",
        options: ["5", "3", "4", "6"],
        correctAnswer: "5",
        explanation: "You need to make 5 cuts to separate the 6 faces of the cube net. 🎲",
        wrongAnswerExplanations: {
            "3": "This is not enough to separate all faces.",
            "4": "This is not enough to separate all faces.",
            "6": "You don't need to cut between every face."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t2_qm9',
        type: "mcq",
        question: "If a cylinder net has a rectangle that is 10 cm long and 5 cm wide, what is the radius of its circular faces?",
        options: ["1.59 cm", "2 cm", "3.18 cm", "5 cm"],
        correctAnswer: "1.59 cm",
        explanation: "The length of the rectangle equals the circumference. So, 2πr = 10 cm. r = 10/(2π) ≈ 1.59 cm. 🥫",
        wrongAnswerExplanations: {
            "2 cm": "This would give a circumference of 12.56 cm.",
            "3.18 cm": "This is the diameter, not the radius.",
            "5 cm": "This is the height of the cylinder."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t2_qm10',
        type: "mcq",
        question: "Which shape's net requires the most glue to assemble?",
        options: ["Cube and Cuboid", "Cylinder", "Cone", "Sphere"],
        correctAnswer: "Cube and Cuboid",
        explanation: "Cube and cuboid nets have the most edges to glue (12 edges each), requiring more glue than other shapes. 🎲📦",
        wrongAnswerExplanations: {
            "Cylinder": "A cylinder has fewer edges to glue.",
            "Cone": "A cone has fewer edges to glue.",
            "Sphere": "A sphere net has no edges to glue."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t2_qm11',
        type: "mcq",
        question: "If a cube net is made of squares with 2 cm sides, what is the minimum paper size needed?",
        options: ["6 cm × 4 cm", "4 cm × 4 cm", "8 cm × 6 cm", "6 cm × 6 cm"],
        correctAnswer: "6 cm × 4 cm",
        explanation: "The most compact cube net arrangement is 3 squares in a row with one square on top and bottom, requiring 6 cm × 4 cm paper. 🎲",
        wrongAnswerExplanations: {
            "4 cm × 4 cm": "This is too small for 6 squares.",
            "8 cm × 6 cm": "This is larger than necessary.",
            "6 cm × 6 cm": "This is larger than necessary."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t2_qm12',
        type: "mcq",
        question: "What is the ratio of the rectangle's length to width in a cylinder net?",
        options: ["2π:1", "π:1", "1:1", "1:2"],
        correctAnswer: "2π:1",
        explanation: "The rectangle's length is the circumference (2πr) and width is the height (h), so the ratio is 2π:1. 🥫",
        wrongAnswerExplanations: {
            "π:1": "This would be true if the length was just πr.",
            "1:1": "This would make a square, not a cylinder net.",
            "1:2": "This is the inverse of the correct ratio."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t2_qm13',
        type: "mcq",
        question: "If a cone net has a sector with radius 5 cm and angle 144 degrees, what is the radius of its base?",
        options: ["2 cm", "3 cm", "4 cm", "5 cm"],
        correctAnswer: "2 cm",
        explanation: "The sector's arc length equals the base circumference. (144/360) × 2π × 5 = 2πr. Solving gives r = 2 cm. 🍦",
        wrongAnswerExplanations: {
            "3 cm": "This would give a different arc length.",
            "4 cm": "This would give a different arc length.",
            "5 cm": "This is the sector's radius, not the base radius."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t2_qm14',
        type: "mcq",
        question: "Which shape's net has the most edges to fold?",
        options: ["Cube and Cuboid", "Cylinder", "Cone", "Sphere"],
        correctAnswer: "Cube and Cuboid",
        explanation: "Cube and cuboid nets have 12 edges to fold, while other shapes have fewer edges. 🎲📦",
        wrongAnswerExplanations: {
            "Cylinder": "A cylinder has fewer edges to fold.",
            "Cone": "A cone has fewer edges to fold.",
            "Sphere": "A sphere net has no edges to fold."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t2_qm15',
        type: "mcq",
        question: "If a cuboid net is made of rectangles with sides 2 cm and 3 cm, what is the minimum paper size needed?",
        options: ["8 cm × 6 cm", "6 cm × 4 cm", "10 cm × 8 cm", "12 cm × 6 cm"],
        correctAnswer: "8 cm × 6 cm",
        explanation: "The most compact cuboid net arrangement requires 8 cm × 6 cm paper to fit all rectangles. 📦",
        wrongAnswerExplanations: {
            "6 cm × 4 cm": "This is too small for all rectangles.",
            "10 cm × 8 cm": "This is larger than necessary.",
            "12 cm × 6 cm": "This is larger than necessary."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t2_qm16',
        type: "mcq",
        question: "What is the ratio of the sector's radius to the base radius in a cone net?",
        options: ["Equal to the slant height", "Equal to the height", "Equal to π", "Equal to 2π"],
        correctAnswer: "Equal to the slant height",
        explanation: "The sector's radius in a cone net equals the slant height of the cone. 🍦",
        wrongAnswerExplanations: {
            "Equal to the height": "The sector's radius is the slant height, not the height.",
            "Equal to π": "This is not related to the cone's dimensions.",
            "Equal to 2π": "This is not related to the cone's dimensions."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t2_qm17',
        type: "mcq",
        question: "If a cylinder net has circles with radius 2 cm and a rectangle that is 12.56 cm long, what is the height of the cylinder?",
        options: ["5 cm", "4 cm", "6 cm", "3 cm"],
        correctAnswer: "5 cm",
        explanation: "The rectangle's width equals the height of the cylinder. Since the length is 12.56 cm (2πr), the height must be 5 cm to make a reasonable cylinder. 🥫",
        wrongAnswerExplanations: {
            "4 cm": "This would make a very short cylinder.",
            "6 cm": "This would make a very tall cylinder.",
            "3 cm": "This would make a very short cylinder."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t2_qm18',
        type: "mcq",
        question: "Which shape's net has the most vertices to mark?",
        options: ["Cube and Cuboid", "Cylinder", "Cone", "Sphere"],
        correctAnswer: "Cube and Cuboid",
        explanation: "Cube and cuboid nets have 8 vertices each to mark, while other shapes have fewer vertices. 🎲📦",
        wrongAnswerExplanations: {
            "Cylinder": "A cylinder has no vertices to mark.",
            "Cone": "A cone has only one vertex to mark.",
            "Sphere": "A sphere net has no vertices to mark."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t2_qm19',
        type: "mcq",
        question: "If a cone net has a sector with radius 6 cm and angle 120 degrees, what is the slant height of the cone?",
        options: ["6 cm", "4 cm", "8 cm", "10 cm"],
        correctAnswer: "6 cm",
        explanation: "The sector's radius equals the slant height of the cone, which is 6 cm. 🍦",
        wrongAnswerExplanations: {
            "4 cm": "This is less than the sector's radius.",
            "8 cm": "This is more than the sector's radius.",
            "10 cm": "This is more than the sector's radius."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t2_qm20',
        type: "mcq",
        question: "What is the minimum number of measurements needed to draw a complete cube net?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "1",
        explanation: "You only need to know the length of one side since all sides of a cube are equal. 🎲",
        wrongAnswerExplanations: {
            "2": "A cube has equal sides, so only one measurement is needed.",
            "3": "A cube has equal sides, so only one measurement is needed.",
            "4": "A cube has equal sides, so only one measurement is needed."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 