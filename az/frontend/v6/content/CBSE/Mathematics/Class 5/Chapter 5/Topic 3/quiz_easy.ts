import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl5_ch5_t3_qe1',
        type: "mcq",
        question: "What is the order of rotation for a square?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "4",
        explanation: "A square has order 4 rotational symmetry because it looks the same after rotating 90°, 180°, 270°, and 360°. 🔄",
        wrongAnswerExplanations: {
            "2": "A square matches itself more than 2 times in a full rotation.",
            "3": "A square matches itself more than 3 times in a full rotation.",
            "5": "A square matches itself less than 5 times in a full rotation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch5_t3_qe2',
        type: "mcq",
        question: "Which shape has infinite order of rotational symmetry?",
        options: ["Square", "Circle", "Triangle", "Rectangle"],
        correctAnswer: "Circle",
        explanation: "A circle has infinite order of rotational symmetry because it looks the same at every angle of rotation. ⭕",
        wrongAnswerExplanations: {
            "Square": "A square has order 4 rotational symmetry.",
            "Triangle": "A triangle has order 3 rotational symmetry.",
            "Rectangle": "A rectangle has order 2 rotational symmetry."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch5_t3_qe3',
        type: "mcq",
        question: "What is the order of rotation for an equilateral triangle?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "3",
        explanation: "An equilateral triangle has order 3 rotational symmetry because it looks the same after rotating 120°, 240°, and 360°. 🔺",
        wrongAnswerExplanations: {
            "2": "An equilateral triangle matches itself more than 2 times in a full rotation.",
            "4": "An equilateral triangle matches itself less than 4 times in a full rotation.",
            "5": "An equilateral triangle matches itself less than 5 times in a full rotation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch5_t3_qe4',
        type: "mcq",
        question: "What is the order of rotation for a regular pentagon?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "5",
        explanation: "A regular pentagon has order 5 rotational symmetry because it looks the same after rotating 72°, 144°, 216°, 288°, and 360°. ⭐",
        wrongAnswerExplanations: {
            "3": "A regular pentagon matches itself more than 3 times in a full rotation.",
            "4": "A regular pentagon matches itself more than 4 times in a full rotation.",
            "6": "A regular pentagon matches itself less than 6 times in a full rotation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch5_t3_qe5',
        type: "mcq",
        question: "What is the order of rotation for a rectangle?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "2",
        explanation: "A rectangle has order 2 rotational symmetry because it looks the same after rotating 180° and 360°. 📏",
        wrongAnswerExplanations: {
            "1": "A rectangle matches itself more than 1 time in a full rotation.",
            "3": "A rectangle matches itself less than 3 times in a full rotation.",
            "4": "A rectangle matches itself less than 4 times in a full rotation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch5_t3_qe6',
        type: "mcq",
        question: "Which shape has order 6 rotational symmetry?",
        options: ["Regular Hexagon", "Square", "Triangle", "Rectangle"],
        correctAnswer: "Regular Hexagon",
        explanation: "A regular hexagon has order 6 rotational symmetry because it looks the same after rotating 60°, 120°, 180°, 240°, 300°, and 360°. ⬡",
        wrongAnswerExplanations: {
            "Square": "A square has order 4 rotational symmetry.",
            "Triangle": "A triangle has order 3 rotational symmetry.",
            "Rectangle": "A rectangle has order 2 rotational symmetry."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch5_t3_qe7',
        type: "mcq",
        question: "What is the order of rotation for a regular octagon?",
        options: ["6", "7", "8", "9"],
        correctAnswer: "8",
        explanation: "A regular octagon has order 8 rotational symmetry because it looks the same after rotating 45°, 90°, 135°, 180°, 225°, 270°, 315°, and 360°. ⬢",
        wrongAnswerExplanations: {
            "6": "A regular octagon matches itself more than 6 times in a full rotation.",
            "7": "A regular octagon matches itself more than 7 times in a full rotation.",
            "9": "A regular octagon matches itself less than 9 times in a full rotation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch5_t3_qe8',
        type: "mcq",
        question: "Which shape has order 1 rotational symmetry?",
        options: ["Square", "Circle", "Scalene Triangle", "Rectangle"],
        correctAnswer: "Scalene Triangle",
        explanation: "A scalene triangle has order 1 rotational symmetry because it only looks the same after a full 360° rotation. 🔺",
        wrongAnswerExplanations: {
            "Square": "A square has order 4 rotational symmetry.",
            "Circle": "A circle has infinite order of rotational symmetry.",
            "Rectangle": "A rectangle has order 2 rotational symmetry."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch5_t3_qe9',
        type: "mcq",
        question: "What is the order of rotation for a regular decagon?",
        options: ["8", "9", "10", "11"],
        correctAnswer: "10",
        explanation: "A regular decagon has order 10 rotational symmetry because it looks the same after rotating 36°, 72°, 108°, 144°, 180°, 216°, 252°, 288°, 324°, and 360°. 🔟",
        wrongAnswerExplanations: {
            "8": "A regular decagon matches itself more than 8 times in a full rotation.",
            "9": "A regular decagon matches itself more than 9 times in a full rotation.",
            "11": "A regular decagon matches itself less than 11 times in a full rotation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch5_t3_qe10',
        type: "mcq",
        question: "Which shape has order 4 rotational symmetry?",
        options: ["Regular Pentagon", "Square", "Triangle", "Rectangle"],
        correctAnswer: "Square",
        explanation: "A square has order 4 rotational symmetry because it looks the same after rotating 90°, 180°, 270°, and 360°. ⬜",
        wrongAnswerExplanations: {
            "Regular Pentagon": "A regular pentagon has order 5 rotational symmetry.",
            "Triangle": "A triangle has order 3 rotational symmetry.",
            "Rectangle": "A rectangle has order 2 rotational symmetry."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch5_t3_qe11',
        type: "mcq",
        question: "What is the order of rotation for a regular heptagon?",
        options: ["5", "6", "7", "8"],
        correctAnswer: "7",
        explanation: "A regular heptagon has order 7 rotational symmetry because it looks the same after rotating 51.43°, 102.86°, 154.29°, 205.71°, 257.14°, 308.57°, and 360°. ⬣",
        wrongAnswerExplanations: {
            "5": "A regular heptagon matches itself more than 5 times in a full rotation.",
            "6": "A regular heptagon matches itself more than 6 times in a full rotation.",
            "8": "A regular heptagon matches itself less than 8 times in a full rotation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch5_t3_qe12',
        type: "mcq",
        question: "Which shape has order 3 rotational symmetry?",
        options: ["Square", "Circle", "Equilateral Triangle", "Rectangle"],
        correctAnswer: "Equilateral Triangle",
        explanation: "An equilateral triangle has order 3 rotational symmetry because it looks the same after rotating 120°, 240°, and 360°. 🔺",
        wrongAnswerExplanations: {
            "Square": "A square has order 4 rotational symmetry.",
            "Circle": "A circle has infinite order of rotational symmetry.",
            "Rectangle": "A rectangle has order 2 rotational symmetry."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch5_t3_qe13',
        type: "mcq",
        question: "What is the order of rotation for a regular nonagon?",
        options: ["7", "8", "9", "10"],
        correctAnswer: "9",
        explanation: "A regular nonagon has order 9 rotational symmetry because it looks the same after rotating 40°, 80°, 120°, 160°, 200°, 240°, 280°, 320°, and 360°. 9️⃣",
        wrongAnswerExplanations: {
            "7": "A regular nonagon matches itself more than 7 times in a full rotation.",
            "8": "A regular nonagon matches itself more than 8 times in a full rotation.",
            "10": "A regular nonagon matches itself less than 10 times in a full rotation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch5_t3_qe14',
        type: "mcq",
        question: "Which shape has order 2 rotational symmetry?",
        options: ["Regular Pentagon", "Square", "Triangle", "Rectangle"],
        correctAnswer: "Rectangle",
        explanation: "A rectangle has order 2 rotational symmetry because it looks the same after rotating 180° and 360°. 📏",
        wrongAnswerExplanations: {
            "Regular Pentagon": "A regular pentagon has order 5 rotational symmetry.",
            "Square": "A square has order 4 rotational symmetry.",
            "Triangle": "A triangle has order 3 rotational symmetry."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch5_t3_qe15',
        type: "mcq",
        question: "What is the order of rotation for a regular dodecagon?",
        options: ["10", "11", "12", "13"],
        correctAnswer: "12",
        explanation: "A regular dodecagon has order 12 rotational symmetry because it looks the same after rotating 30°, 60°, 90°, 120°, 150°, 180°, 210°, 240°, 270°, 300°, 330°, and 360°. 🔢",
        wrongAnswerExplanations: {
            "10": "A regular dodecagon matches itself more than 10 times in a full rotation.",
            "11": "A regular dodecagon matches itself more than 11 times in a full rotation.",
            "13": "A regular dodecagon matches itself less than 13 times in a full rotation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch5_t3_qe16',
        type: "mcq",
        question: "Which shape has order 5 rotational symmetry?",
        options: ["Regular Pentagon", "Square", "Triangle", "Rectangle"],
        correctAnswer: "Regular Pentagon",
        explanation: "A regular pentagon has order 5 rotational symmetry because it looks the same after rotating 72°, 144°, 216°, 288°, and 360°. ⭐",
        wrongAnswerExplanations: {
            "Square": "A square has order 4 rotational symmetry.",
            "Triangle": "A triangle has order 3 rotational symmetry.",
            "Rectangle": "A rectangle has order 2 rotational symmetry."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch5_t3_qe17',
        type: "mcq",
        question: "What is the order of rotation for a regular hendecagon?",
        options: ["9", "10", "11", "12"],
        correctAnswer: "11",
        explanation: "A regular hendecagon has order 11 rotational symmetry because it looks the same after rotating 32.73°, 65.45°, 98.18°, 130.91°, 163.64°, 196.36°, 229.09°, 261.82°, 294.55°, 327.27°, and 360°. 🔢",
        wrongAnswerExplanations: {
            "9": "A regular hendecagon matches itself more than 9 times in a full rotation.",
            "10": "A regular hendecagon matches itself more than 10 times in a full rotation.",
            "12": "A regular hendecagon matches itself less than 12 times in a full rotation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch5_t3_qe18',
        type: "mcq",
        question: "Which shape has order 8 rotational symmetry?",
        options: ["Regular Octagon", "Square", "Triangle", "Rectangle"],
        correctAnswer: "Regular Octagon",
        explanation: "A regular octagon has order 8 rotational symmetry because it looks the same after rotating 45°, 90°, 135°, 180°, 225°, 270°, 315°, and 360°. ⬢",
        wrongAnswerExplanations: {
            "Square": "A square has order 4 rotational symmetry.",
            "Triangle": "A triangle has order 3 rotational symmetry.",
            "Rectangle": "A rectangle has order 2 rotational symmetry."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch5_t3_qe19',
        type: "mcq",
        question: "What is the order of rotation for a regular tridecagon?",
        options: ["11", "12", "13", "14"],
        correctAnswer: "13",
        explanation: "A regular tridecagon has order 13 rotational symmetry because it looks the same after rotating 27.69°, 55.38°, 83.08°, 110.77°, 138.46°, 166.15°, 193.85°, 221.54°, 249.23°, 276.92°, 304.62°, 332.31°, and 360°. 🔢",
        wrongAnswerExplanations: {
            "11": "A regular tridecagon matches itself more than 11 times in a full rotation.",
            "12": "A regular tridecagon matches itself more than 12 times in a full rotation.",
            "14": "A regular tridecagon matches itself less than 14 times in a full rotation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch5_t3_qe20',
        type: "mcq",
        question: "Which shape has order 7 rotational symmetry?",
        options: ["Regular Heptagon", "Square", "Triangle", "Rectangle"],
        correctAnswer: "Regular Heptagon",
        explanation: "A regular heptagon has order 7 rotational symmetry because it looks the same after rotating 51.43°, 102.86°, 154.29°, 205.71°, 257.14°, 308.57°, and 360°. ⬣",
        wrongAnswerExplanations: {
            "Square": "A square has order 4 rotational symmetry.",
            "Triangle": "A triangle has order 3 rotational symmetry.",
            "Rectangle": "A rectangle has order 2 rotational symmetry."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 