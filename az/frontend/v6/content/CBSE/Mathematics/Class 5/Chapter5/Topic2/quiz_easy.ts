import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl5_ch5_t2_qe1',
        type: "mcq",
        question: "Which shape has a vertical line of symmetry?",
        options: ["Square", "Triangle", "Rectangle", "Circle"],
        correctAnswer: "Square",
        explanation: "A square has a vertical line of symmetry that divides it into two equal halves. ⬜",
        wrongAnswerExplanations: {
            "Triangle": "A triangle may or may not have vertical symmetry depending on its type.",
            "Rectangle": "A rectangle has vertical symmetry but is not the only correct answer.",
            "Circle": "A circle has infinite lines of symmetry, not just vertical."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch5_t2_qe2',
        type: "mcq",
        question: "Which shape has both horizontal and vertical symmetry?",
        options: ["Square", "Rectangle", "Triangle", "Parallelogram"],
        correctAnswer: "Square",
        explanation: "A square has both horizontal and vertical lines of symmetry. ⬜",
        wrongAnswerExplanations: {
            "Rectangle": "A rectangle has both horizontal and vertical symmetry but is not the only correct answer.",
            "Triangle": "A triangle may or may not have both types of symmetry.",
            "Parallelogram": "A parallelogram has no lines of symmetry."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch5_t2_qe3',
        type: "mcq",
        question: "Which shape has exactly two lines of symmetry?",
        options: ["Rectangle", "Square", "Circle", "Triangle"],
        correctAnswer: "Rectangle",
        explanation: "A rectangle has exactly two lines of symmetry - one vertical and one horizontal. 📐",
        wrongAnswerExplanations: {
            "Square": "A square has four lines of symmetry.",
            "Circle": "A circle has infinite lines of symmetry.",
            "Triangle": "A triangle may have 0, 1, or 3 lines of symmetry."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch5_t2_qe4',
        type: "mcq",
        question: "Which shape has only one line of symmetry?",
        options: ["Isosceles Triangle", "Square", "Rectangle", "Circle"],
        correctAnswer: "Isosceles Triangle",
        explanation: "An isosceles triangle has exactly one line of symmetry - from the vertex angle to the midpoint of the base. 📐",
        wrongAnswerExplanations: {
            "Square": "A square has four lines of symmetry.",
            "Rectangle": "A rectangle has two lines of symmetry.",
            "Circle": "A circle has infinite lines of symmetry."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch5_t2_qe5',
        type: "mcq",
        question: "Which shape has no lines of symmetry?",
        options: ["Scalene Triangle", "Square", "Rectangle", "Circle"],
        correctAnswer: "Scalene Triangle",
        explanation: "A scalene triangle has no lines of symmetry because all sides and angles are different. 📐",
        wrongAnswerExplanations: {
            "Square": "A square has four lines of symmetry.",
            "Rectangle": "A rectangle has two lines of symmetry.",
            "Circle": "A circle has infinite lines of symmetry."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch5_t2_qe6',
        type: "mcq",
        question: "Which shape has exactly three lines of symmetry?",
        options: ["Equilateral Triangle", "Square", "Rectangle", "Circle"],
        correctAnswer: "Equilateral Triangle",
        explanation: "An equilateral triangle has exactly three lines of symmetry - one from each vertex to the midpoint of the opposite side. 📐",
        wrongAnswerExplanations: {
            "Square": "A square has four lines of symmetry.",
            "Rectangle": "A rectangle has two lines of symmetry.",
            "Circle": "A circle has infinite lines of symmetry."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch5_t2_qe7',
        type: "mcq",
        question: "Which shape has exactly four lines of symmetry?",
        options: ["Square", "Rectangle", "Circle", "Triangle"],
        correctAnswer: "Square",
        explanation: "A square has exactly four lines of symmetry - two diagonals, one vertical, and one horizontal. ⬜",
        wrongAnswerExplanations: {
            "Rectangle": "A rectangle has only two lines of symmetry.",
            "Circle": "A circle has infinite lines of symmetry.",
            "Triangle": "A triangle may have 0, 1, or 3 lines of symmetry."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch5_t2_qe8',
        type: "mcq",
        question: "Which shape has diagonal lines of symmetry?",
        options: ["Square", "Rectangle", "Circle", "Triangle"],
        correctAnswer: "Square",
        explanation: "A square has two diagonal lines of symmetry in addition to its vertical and horizontal lines. ⬜",
        wrongAnswerExplanations: {
            "Rectangle": "A rectangle does not have diagonal lines of symmetry.",
            "Circle": "A circle has infinite lines of symmetry but not specifically diagonal.",
            "Triangle": "A triangle may or may not have diagonal lines of symmetry."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch5_t2_qe9',
        type: "mcq",
        question: "Which shape has rotational symmetry of order 4?",
        options: ["Square", "Rectangle", "Circle", "Triangle"],
        correctAnswer: "Square",
        explanation: "A square has rotational symmetry of order 4 because it looks the same after rotating 90°, 180°, 270°, and 360°. ⬜",
        wrongAnswerExplanations: {
            "Rectangle": "A rectangle has rotational symmetry of order 2.",
            "Circle": "A circle has infinite rotational symmetry.",
            "Triangle": "A triangle may have rotational symmetry of order 1, 2, or 3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch5_t2_qe10',
        type: "mcq",
        question: "Which shape has rotational symmetry of order 3?",
        options: ["Equilateral Triangle", "Square", "Rectangle", "Circle"],
        correctAnswer: "Equilateral Triangle",
        explanation: "An equilateral triangle has rotational symmetry of order 3 because it looks the same after rotating 120°, 240°, and 360°. 📐",
        wrongAnswerExplanations: {
            "Square": "A square has rotational symmetry of order 4.",
            "Rectangle": "A rectangle has rotational symmetry of order 2.",
            "Circle": "A circle has infinite rotational symmetry."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch5_t2_qe11',
        type: "mcq",
        question: "Which shape has rotational symmetry of order 2?",
        options: ["Rectangle", "Square", "Circle", "Triangle"],
        correctAnswer: "Rectangle",
        explanation: "A rectangle has rotational symmetry of order 2 because it looks the same after rotating 180° and 360°. 📐",
        wrongAnswerExplanations: {
            "Square": "A square has rotational symmetry of order 4.",
            "Circle": "A circle has infinite rotational symmetry.",
            "Triangle": "A triangle may have rotational symmetry of order 1, 2, or 3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch5_t2_qe12',
        type: "mcq",
        question: "Which shape has infinite lines of symmetry?",
        options: ["Circle", "Square", "Rectangle", "Triangle"],
        correctAnswer: "Circle",
        explanation: "A circle has infinite lines of symmetry because it looks the same when rotated by any angle. ⭕",
        wrongAnswerExplanations: {
            "Square": "A square has only four lines of symmetry.",
            "Rectangle": "A rectangle has only two lines of symmetry.",
            "Triangle": "A triangle has at most three lines of symmetry."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch5_t2_qe13',
        type: "mcq",
        question: "Which shape has no rotational symmetry?",
        options: ["Scalene Triangle", "Square", "Rectangle", "Circle"],
        correctAnswer: "Scalene Triangle",
        explanation: "A scalene triangle has no rotational symmetry because it looks different when rotated by any angle. 📐",
        wrongAnswerExplanations: {
            "Square": "A square has rotational symmetry of order 4.",
            "Rectangle": "A rectangle has rotational symmetry of order 2.",
            "Circle": "A circle has infinite rotational symmetry."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch5_t2_qe14',
        type: "mcq",
        question: "Which shape has both line and rotational symmetry?",
        options: ["Square", "Rectangle", "Circle", "Triangle"],
        correctAnswer: "Square",
        explanation: "A square has both line symmetry (4 lines) and rotational symmetry (order 4). ⬜",
        wrongAnswerExplanations: {
            "Rectangle": "A rectangle has both types of symmetry but not as many as a square.",
            "Circle": "A circle has both types of symmetry but is not the only correct answer.",
            "Triangle": "A triangle may or may not have both types of symmetry."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch5_t2_qe15',
        type: "mcq",
        question: "Which shape has the most lines of symmetry?",
        options: ["Circle", "Square", "Rectangle", "Triangle"],
        correctAnswer: "Circle",
        explanation: "A circle has infinite lines of symmetry, which is more than any other shape. ⭕",
        wrongAnswerExplanations: {
            "Square": "A square has only four lines of symmetry.",
            "Rectangle": "A rectangle has only two lines of symmetry.",
            "Triangle": "A triangle has at most three lines of symmetry."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch5_t2_qe16',
        type: "mcq",
        question: "Which shape has exactly one line of symmetry?",
        options: ["Isosceles Triangle", "Square", "Rectangle", "Circle"],
        correctAnswer: "Isosceles Triangle",
        explanation: "An isosceles triangle has exactly one line of symmetry - from the vertex angle to the midpoint of the base. 📐",
        wrongAnswerExplanations: {
            "Square": "A square has four lines of symmetry.",
            "Rectangle": "A rectangle has two lines of symmetry.",
            "Circle": "A circle has infinite lines of symmetry."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch5_t2_qe17',
        type: "mcq",
        question: "Which shape has exactly two lines of symmetry?",
        options: ["Rectangle", "Square", "Circle", "Triangle"],
        correctAnswer: "Rectangle",
        explanation: "A rectangle has exactly two lines of symmetry - one vertical and one horizontal. 📐",
        wrongAnswerExplanations: {
            "Square": "A square has four lines of symmetry.",
            "Circle": "A circle has infinite lines of symmetry.",
            "Triangle": "A triangle may have 0, 1, or 3 lines of symmetry."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch5_t2_qe18',
        type: "mcq",
        question: "Which shape has exactly three lines of symmetry?",
        options: ["Equilateral Triangle", "Square", "Rectangle", "Circle"],
        correctAnswer: "Equilateral Triangle",
        explanation: "An equilateral triangle has exactly three lines of symmetry - one from each vertex to the midpoint of the opposite side. 📐",
        wrongAnswerExplanations: {
            "Square": "A square has four lines of symmetry.",
            "Rectangle": "A rectangle has two lines of symmetry.",
            "Circle": "A circle has infinite lines of symmetry."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch5_t2_qe19',
        type: "mcq",
        question: "Which shape has exactly four lines of symmetry?",
        options: ["Square", "Rectangle", "Circle", "Triangle"],
        correctAnswer: "Square",
        explanation: "A square has exactly four lines of symmetry - two diagonals, one vertical, and one horizontal. ⬜",
        wrongAnswerExplanations: {
            "Rectangle": "A rectangle has only two lines of symmetry.",
            "Circle": "A circle has infinite lines of symmetry.",
            "Triangle": "A triangle may have 0, 1, or 3 lines of symmetry."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch5_t2_qe20',
        type: "mcq",
        question: "Which shape has infinite rotational symmetry?",
        options: ["Circle", "Square", "Rectangle", "Triangle"],
        correctAnswer: "Circle",
        explanation: "A circle has infinite rotational symmetry because it looks the same when rotated by any angle. ⭕",
        wrongAnswerExplanations: {
            "Square": "A square has rotational symmetry of order 4.",
            "Rectangle": "A rectangle has rotational symmetry of order 2.",
            "Triangle": "A triangle has at most rotational symmetry of order 3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 