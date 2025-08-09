import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl5_ch9_t3_qe1',
        type: "mcq",
        question: "What is a front view of a 3D object?",
        options: [
            "What you see when looking straight at the object",
            "What you see from above",
            "What you see from the side",
            "What you see from behind"
        ],
        correctAnswer: "What you see when looking straight at the object",
        explanation: "The front view shows the object as if you're looking directly at its front face. 👀",
        wrongAnswerExplanations: {
            "What you see from above": "That's the top view.",
            "What you see from the side": "That's the side view.",
            "What you see from behind": "That's the back view."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t3_qe2',
        type: "mcq",
        question: "Which view shows the object from above?",
        options: ["Top view", "Front view", "Side view", "Bottom view"],
        correctAnswer: "Top view",
        explanation: "The top view shows what you would see if you looked down at the object from above. 🔽",
        wrongAnswerExplanations: {
            "Front view": "This shows the front of the object.",
            "Side view": "This shows the side of the object.",
            "Bottom view": "This shows the bottom of the object."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t3_qe3',
        type: "mcq",
        question: "If all three views of an object are squares, what is the object?",
        options: ["Cube", "Cylinder", "Cone", "Sphere"],
        correctAnswer: "Cube",
        explanation: "A cube looks like a square from the front, side, and top views. 🎲",
        wrongAnswerExplanations: {
            "Cylinder": "A cylinder has a circle in its top view.",
            "Cone": "A cone has a triangle in its front view.",
            "Sphere": "A sphere has circles in all views."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t3_qe4',
        type: "mcq",
        question: "What shape appears in the top view of a cylinder?",
        options: ["Circle", "Square", "Rectangle", "Triangle"],
        correctAnswer: "Circle",
        explanation: "Looking down at a cylinder, you see a circle. 🥫",
        wrongAnswerExplanations: {
            "Square": "A cube has squares in its views.",
            "Rectangle": "A cuboid has rectangles in its views.",
            "Triangle": "A cone has a triangle in its front view."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t3_qe5',
        type: "mcq",
        question: "How many main views are typically used to show a 3D object?",
        options: ["3", "2", "4", "1"],
        correctAnswer: "3",
        explanation: "The three main views are front, side, and top views. 📊",
        wrongAnswerExplanations: {
            "2": "Two views might not show all details.",
            "4": "Three views are usually enough.",
            "1": "One view doesn't show the full object."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t3_qe6',
        type: "mcq",
        question: "What shape appears in the front view of a cone?",
        options: ["Triangle", "Circle", "Square", "Rectangle"],
        correctAnswer: "Triangle",
        explanation: "Looking at a cone from the front, you see a triangle. 🍦",
        wrongAnswerExplanations: {
            "Circle": "A cone has a circle in its top view.",
            "Square": "A cube has squares in its views.",
            "Rectangle": "A cuboid has rectangles in its views."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t3_qe7',
        type: "mcq",
        question: "Which view shows the object from the side?",
        options: ["Side view", "Front view", "Top view", "Bottom view"],
        correctAnswer: "Side view",
        explanation: "The side view shows what you would see if you looked at the object from its side. ↔️",
        wrongAnswerExplanations: {
            "Front view": "This shows the front of the object.",
            "Top view": "This shows the top of the object.",
            "Bottom view": "This shows the bottom of the object."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t3_qe8',
        type: "mcq",
        question: "What shape appears in all views of a sphere?",
        options: ["Circle", "Square", "Triangle", "Rectangle"],
        correctAnswer: "Circle",
        explanation: "A sphere looks like a circle from any angle you view it. ⚽",
        wrongAnswerExplanations: {
            "Square": "A cube has squares in its views.",
            "Triangle": "A cone has a triangle in its front view.",
            "Rectangle": "A cuboid has rectangles in its views."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t3_qe9',
        type: "mcq",
        question: "What is the purpose of using multiple views?",
        options: [
            "To show the object completely",
            "To make the drawing look nice",
            "To use more paper",
            "To make it harder to understand"
        ],
        correctAnswer: "To show the object completely",
        explanation: "Multiple views help us understand the full shape of a 3D object. 🎯",
        wrongAnswerExplanations: {
            "To make the drawing look nice": "The purpose is to show the object clearly.",
            "To use more paper": "The purpose is to show the object completely.",
            "To make it harder to understand": "Multiple views make it easier to understand."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t3_qe10',
        type: "mcq",
        question: "What shape appears in the front view of a cube?",
        options: ["Square", "Circle", "Triangle", "Rectangle"],
        correctAnswer: "Square",
        explanation: "Looking at a cube from the front, you see a square. 🎲",
        wrongAnswerExplanations: {
            "Circle": "A cylinder has circles in its views.",
            "Triangle": "A cone has a triangle in its front view.",
            "Rectangle": "A cuboid has rectangles in its views."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t3_qe11',
        type: "mcq",
        question: "Which tool is most helpful for drawing 2D views?",
        options: ["Ruler", "Compass", "Protractor", "Calculator"],
        correctAnswer: "Ruler",
        explanation: "A ruler helps draw straight lines and measure lengths accurately. 📏",
        wrongAnswerExplanations: {
            "Compass": "A compass is used for drawing circles.",
            "Protractor": "A protractor measures angles.",
            "Calculator": "A calculator helps with numbers, not drawing."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t3_qe12',
        type: "mcq",
        question: "What shape appears in the top view of a cone?",
        options: ["Circle", "Triangle", "Square", "Rectangle"],
        correctAnswer: "Circle",
        explanation: "Looking down at a cone, you see a circle. 🍦",
        wrongAnswerExplanations: {
            "Triangle": "A cone has a triangle in its front view.",
            "Square": "A cube has squares in its views.",
            "Rectangle": "A cuboid has rectangles in its views."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t3_qe13',
        type: "mcq",
        question: "What is the first step in drawing 2D views?",
        options: [
            "Understand the 3D object",
            "Start drawing immediately",
            "Choose colors",
            "Measure the paper"
        ],
        correctAnswer: "Understand the 3D object",
        explanation: "First, you need to understand the 3D object before drawing its views. 🧠",
        wrongAnswerExplanations: {
            "Start drawing immediately": "Understanding comes before drawing.",
            "Choose colors": "Understanding the shape is more important than colors.",
            "Measure the paper": "Understanding the object comes first."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t3_qe14',
        type: "mcq",
        question: "What shape appears in the side view of a cylinder?",
        options: ["Rectangle", "Circle", "Square", "Triangle"],
        correctAnswer: "Rectangle",
        explanation: "Looking at a cylinder from the side, you see a rectangle. 🥫",
        wrongAnswerExplanations: {
            "Circle": "A cylinder has circles in its top and bottom views.",
            "Square": "A cube has squares in its views.",
            "Triangle": "A cone has a triangle in its front view."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t3_qe15',
        type: "mcq",
        question: "Which view shows the height of an object?",
        options: ["Front view", "Top view", "Side view", "Bottom view"],
        correctAnswer: "Front view",
        explanation: "The front view shows the height of the object clearly. 📏",
        wrongAnswerExplanations: {
            "Top view": "The top view shows the width and depth.",
            "Side view": "The side view shows the depth and height.",
            "Bottom view": "The bottom view shows the width and depth."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t3_qe16',
        type: "mcq",
        question: "What shape appears in the front view of a cuboid?",
        options: ["Rectangle", "Square", "Circle", "Triangle"],
        correctAnswer: "Rectangle",
        explanation: "Looking at a cuboid from the front, you see a rectangle. 📦",
        wrongAnswerExplanations: {
            "Square": "A cube has squares in its views.",
            "Circle": "A cylinder has circles in its views.",
            "Triangle": "A cone has a triangle in its front view."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t3_qe17',
        type: "mcq",
        question: "Which view shows the width of an object?",
        options: ["Top view", "Front view", "Side view", "Bottom view"],
        correctAnswer: "Top view",
        explanation: "The top view shows the width of the object clearly. 📏",
        wrongAnswerExplanations: {
            "Front view": "The front view shows the height and width.",
            "Side view": "The side view shows the depth and height.",
            "Bottom view": "The bottom view shows the width and depth."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t3_qe18',
        type: "mcq",
        question: "What shape appears in the side view of a cube?",
        options: ["Square", "Rectangle", "Circle", "Triangle"],
        correctAnswer: "Square",
        explanation: "Looking at a cube from the side, you see a square. 🎲",
        wrongAnswerExplanations: {
            "Rectangle": "A cuboid has rectangles in its views.",
            "Circle": "A cylinder has circles in its views.",
            "Triangle": "A cone has a triangle in its front view."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t3_qe19',
        type: "mcq",
        question: "Which view shows the depth of an object?",
        options: ["Side view", "Front view", "Top view", "Bottom view"],
        correctAnswer: "Side view",
        explanation: "The side view shows the depth of the object clearly. 📏",
        wrongAnswerExplanations: {
            "Front view": "The front view shows the height and width.",
            "Top view": "The top view shows the width and depth.",
            "Bottom view": "The bottom view shows the width and depth."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t3_qe20',
        type: "mcq",
        question: "What is the last step in drawing 2D views?",
        options: [
            "Check if all views match",
            "Start drawing",
            "Choose colors",
            "Measure the paper"
        ],
        correctAnswer: "Check if all views match",
        explanation: "After drawing, you should check if all views match and show the object correctly. ✅",
        wrongAnswerExplanations: {
            "Start drawing": "This is the first step.",
            "Choose colors": "Colors are not essential for 2D views.",
            "Measure the paper": "This is done before drawing."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 