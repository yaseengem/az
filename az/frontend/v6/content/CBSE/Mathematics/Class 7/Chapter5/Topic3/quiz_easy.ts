import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch5_t3_qe1',
        type: "mcq",
        question: "If two vertically opposite angles measure 60° each, what are the measures of the other two angles?",
        options: ["60° each", "120° each", "30° each", "90° each"],
        correctAnswer: "60° each",
        explanation: "Vertically opposite angles are always equal. 📐",
        wrongAnswerExplanations: {
            "120° each": "Vertically opposite angles are equal, not supplementary.",
            "30° each": "Vertically opposite angles are equal, not half of the given angle.",
            "90° each": "Vertically opposite angles are equal, not necessarily right angles."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch5_t3_qe2',
        type: "mcq",
        question: "If one angle of a linear pair is 45°, what is the measure of the other angle?",
        options: ["135°", "45°", "90°", "180°"],
        correctAnswer: "135°",
        explanation: "Sum of angles in a linear pair is 180°. 180° - 45° = 135°. 📐",
        wrongAnswerExplanations: {
            "45°": "Angles in a linear pair are supplementary, not equal.",
            "90°": "The sum should be 180°, not 90°.",
            "180°": "The sum is 180°, but the other angle is 180° - 45° = 135°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch5_t3_qe3',
        type: "mcq",
        question: "Which of the following is true about vertically opposite angles?",
        options: ["They are equal", "They are supplementary", "They are complementary", "They are adjacent"],
        correctAnswer: "They are equal",
        explanation: "Vertically opposite angles are always equal in measure. 📐",
        wrongAnswerExplanations: {
            "They are supplementary": "Vertically opposite angles are equal, not supplementary.",
            "They are complementary": "Vertically opposite angles are equal, not complementary.",
            "They are adjacent": "Vertically opposite angles are opposite to each other, not adjacent."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch5_t3_qe4',
        type: "mcq",
        question: "What is the sum of angles in a linear pair?",
        options: ["180°", "90°", "360°", "45°"],
        correctAnswer: "180°",
        explanation: "Angles in a linear pair always add up to 180°. 📐",
        wrongAnswerExplanations: {
            "90°": "Linear pairs are supplementary (180°), not complementary (90°).",
            "360°": "360° is the sum of angles around a point, not a linear pair.",
            "45°": "45° is too small for the sum of a linear pair."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch5_t3_qe5',
        type: "mcq",
        question: "If two lines intersect and one angle is 70°, what is the measure of its vertically opposite angle?",
        options: ["70°", "110°", "20°", "290°"],
        correctAnswer: "70°",
        explanation: "Vertically opposite angles are always equal. 📐",
        wrongAnswerExplanations: {
            "110°": "Vertically opposite angles are equal, not supplementary.",
            "20°": "Vertically opposite angles are equal, not complementary.",
            "290°": "This is not a valid angle measure in this context."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch5_t3_qe6',
        type: "mcq",
        question: "Which of the following pairs of angles form a linear pair?",
        options: ["Adjacent angles on a straight line", "Vertically opposite angles", "Complementary angles", "Equal angles"],
        correctAnswer: "Adjacent angles on a straight line",
        explanation: "Linear pairs are adjacent angles that form a straight line. 📐",
        wrongAnswerExplanations: {
            "Vertically opposite angles": "Vertically opposite angles are opposite each other, not adjacent.",
            "Complementary angles": "Complementary angles add to 90°, not necessarily on a straight line.",
            "Equal angles": "Equal angles may or may not be adjacent or on a straight line."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch5_t3_qe7',
        type: "mcq",
        question: "If one angle of a linear pair is 120°, what is the measure of the other angle?",
        options: ["60°", "120°", "240°", "30°"],
        correctAnswer: "60°",
        explanation: "Sum of angles in a linear pair is 180°. 180° - 120° = 60°. 📐",
        wrongAnswerExplanations: {
            "120°": "Angles in a linear pair are supplementary, not equal.",
            "240°": "The sum should be 180°, not more.",
            "30°": "This is half of the given angle, not the supplementary angle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch5_t3_qe8',
        type: "mcq",
        question: "How many pairs of vertically opposite angles are formed when two lines intersect?",
        options: ["2", "1", "4", "3"],
        correctAnswer: "2",
        explanation: "Two lines intersect to form two pairs of vertically opposite angles. 📐",
        wrongAnswerExplanations: {
            "1": "There are two pairs of vertically opposite angles.",
            "4": "There are four angles but only two pairs of vertically opposite angles.",
            "3": "There are two pairs of vertically opposite angles."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch5_t3_qe9',
        type: "mcq",
        question: "If two angles form a linear pair and one angle is 90°, what is the other angle?",
        options: ["90°", "180°", "45°", "270°"],
        correctAnswer: "90°",
        explanation: "Sum of angles in a linear pair is 180°. 180° - 90° = 90°. 📐",
        wrongAnswerExplanations: {
            "180°": "The sum is 180°, but the other angle is 180° - 90° = 90°.",
            "45°": "This is half of the given angle, not the supplementary angle.",
            "270°": "This is more than the sum of a linear pair."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch5_t3_qe10',
        type: "mcq",
        question: "Which of the following is NOT true about vertically opposite angles?",
        options: ["They are adjacent", "They are equal", "They share a vertex", "They are formed by intersecting lines"],
        correctAnswer: "They are adjacent",
        explanation: "Vertically opposite angles are opposite each other, not adjacent. 📐",
        wrongAnswerExplanations: {
            "They are equal": "This is true - vertically opposite angles are equal.",
            "They share a vertex": "This is true - they share the point of intersection.",
            "They are formed by intersecting lines": "This is true - they are formed when two lines intersect."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch5_t3_qe11',
        type: "mcq",
        question: "If one angle of a linear pair is 30°, what is the measure of the other angle?",
        options: ["150°", "30°", "60°", "90°"],
        correctAnswer: "150°",
        explanation: "Sum of angles in a linear pair is 180°. 180° - 30° = 150°. 📐",
        wrongAnswerExplanations: {
            "30°": "Angles in a linear pair are supplementary, not equal.",
            "60°": "This is double the given angle, not the supplementary angle.",
            "90°": "This is a right angle, not the supplementary angle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch5_t3_qe12',
        type: "mcq",
        question: "What is the measure of each angle if two vertically opposite angles are 45° each?",
        options: ["45° each", "90° each", "135° each", "180° each"],
        correctAnswer: "45° each",
        explanation: "Vertically opposite angles are always equal. 📐",
        wrongAnswerExplanations: {
            "90° each": "Vertically opposite angles are equal to the given angle.",
            "135° each": "Vertically opposite angles are equal to the given angle.",
            "180° each": "Vertically opposite angles are equal to the given angle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch5_t3_qe13',
        type: "mcq",
        question: "If two lines intersect and form four angles, how many linear pairs are formed?",
        options: ["4", "2", "1", "3"],
        correctAnswer: "4",
        explanation: "Four linear pairs are formed when two lines intersect. 📐",
        wrongAnswerExplanations: {
            "2": "There are four linear pairs, not two.",
            "1": "There are four linear pairs, not one.",
            "3": "There are four linear pairs, not three."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch5_t3_qe14',
        type: "mcq",
        question: "If one angle of a linear pair is 75°, what is the measure of the other angle?",
        options: ["105°", "75°", "15°", "285°"],
        correctAnswer: "105°",
        explanation: "Sum of angles in a linear pair is 180°. 180° - 75° = 105°. 📐",
        wrongAnswerExplanations: {
            "75°": "Angles in a linear pair are supplementary, not equal.",
            "15°": "This is too small for the supplementary angle.",
            "285°": "This is more than the sum of a linear pair."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch5_t3_qe15',
        type: "mcq",
        question: "Which of the following is true about angles in a linear pair?",
        options: ["They are supplementary", "They are equal", "They are complementary", "They are vertically opposite"],
        correctAnswer: "They are supplementary",
        explanation: "Angles in a linear pair add up to 180° (supplementary). 📐",
        wrongAnswerExplanations: {
            "They are equal": "Angles in a linear pair are supplementary, not necessarily equal.",
            "They are complementary": "Complementary angles add to 90°, not 180°.",
            "They are vertically opposite": "Vertically opposite angles are equal, not supplementary."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch5_t3_qe16',
        type: "mcq",
        question: "If two lines intersect and one angle is 80°, what is the measure of its vertically opposite angle?",
        options: ["80°", "100°", "10°", "280°"],
        correctAnswer: "80°",
        explanation: "Vertically opposite angles are always equal. 📐",
        wrongAnswerExplanations: {
            "100°": "Vertically opposite angles are equal, not supplementary.",
            "10°": "Vertically opposite angles are equal, not complementary.",
            "280°": "This is not a valid angle measure in this context."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch5_t3_qe17',
        type: "mcq",
        question: "If one angle of a linear pair is 110°, what is the measure of the other angle?",
        options: ["70°", "110°", "20°", "290°"],
        correctAnswer: "70°",
        explanation: "Sum of angles in a linear pair is 180°. 180° - 110° = 70°. 📐",
        wrongAnswerExplanations: {
            "110°": "Angles in a linear pair are supplementary, not equal.",
            "20°": "This is too small for the supplementary angle.",
            "290°": "This is more than the sum of a linear pair."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch5_t3_qe18',
        type: "mcq",
        question: "How many angles are formed when two lines intersect?",
        options: ["4", "2", "1", "3"],
        correctAnswer: "4",
        explanation: "Two lines intersect to form four angles. 📐",
        wrongAnswerExplanations: {
            "2": "Two lines intersect to form four angles.",
            "1": "Two lines intersect to form four angles.",
            "3": "Two lines intersect to form four angles."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch5_t3_qe19',
        type: "mcq",
        question: "If one angle of a linear pair is 25°, what is the measure of the other angle?",
        options: ["155°", "25°", "65°", "205°"],
        correctAnswer: "155°",
        explanation: "Sum of angles in a linear pair is 180°. 180° - 25° = 155°. 📐",
        wrongAnswerExplanations: {
            "25°": "Angles in a linear pair are supplementary, not equal.",
            "65°": "This is not the supplementary angle.",
            "205°": "This is more than the sum of a linear pair."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch5_t3_qe20',
        type: "mcq",
        question: "Which of the following is NOT a property of vertically opposite angles?",
        options: ["They are supplementary", "They are equal", "They share a vertex", "They are formed by intersecting lines"],
        correctAnswer: "They are supplementary",
        explanation: "Vertically opposite angles are equal, not supplementary. 📐",
        wrongAnswerExplanations: {
            "They are equal": "This is true - vertically opposite angles are equal.",
            "They share a vertex": "This is true - they share the point of intersection.",
            "They are formed by intersecting lines": "This is true - they are formed when two lines intersect."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 