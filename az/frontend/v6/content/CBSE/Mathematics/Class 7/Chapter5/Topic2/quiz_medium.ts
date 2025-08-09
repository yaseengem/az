import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch5_t2_qm1',
        type: "mcq",
        question: "If two lines are parallel and a transversal cuts them, what is the relationship between corresponding angles?",
        options: ["They are equal", "They add up to 90°", "They add up to 180°", "They are supplementary"],
        correctAnswer: "They are equal",
        explanation: "Corresponding angles formed by a transversal cutting parallel lines are equal in measure. 🔄",
        wrongAnswerExplanations: {
            "They add up to 90°": "Angles that add up to 90° are complementary, not corresponding angles.",
            "They add up to 180°": "Angles that add up to 180° are supplementary, not corresponding angles.",
            "They are supplementary": "Supplementary angles add up to 180°, but corresponding angles are equal."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch5_t2_qm2',
        type: "mcq",
        question: "If two lines are parallel and a transversal cuts them, what is the relationship between alternate interior angles?",
        options: ["They are equal", "They add up to 90°", "They add up to 180°", "They are supplementary"],
        correctAnswer: "They are equal",
        explanation: "Alternate interior angles formed by a transversal cutting parallel lines are equal in measure. ↔️",
        wrongAnswerExplanations: {
            "They add up to 90°": "Angles that add up to 90° are complementary, not alternate interior angles.",
            "They add up to 180°": "Angles that add up to 180° are supplementary, not alternate interior angles.",
            "They are supplementary": "Supplementary angles add up to 180°, but alternate interior angles are equal."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch5_t2_qm3',
        type: "mcq",
        question: "If two lines are parallel and a transversal cuts them, what is the relationship between consecutive interior angles?",
        options: ["They are equal", "They add up to 90°", "They add up to 180°", "They are complementary"],
        correctAnswer: "They add up to 180°",
        explanation: "Consecutive interior angles formed by a transversal cutting parallel lines add up to 180° (they are supplementary). ➕",
        wrongAnswerExplanations: {
            "They are equal": "Consecutive interior angles are not equal, they are supplementary.",
            "They add up to 90°": "Angles that add up to 90° are complementary, not consecutive interior angles.",
            "They are complementary": "Complementary angles add up to 90°, but consecutive interior angles add up to 180°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch5_t2_qm4',
        type: "mcq",
        question: "If two lines are parallel and a transversal cuts them, what is the relationship between alternate exterior angles?",
        options: ["They are equal", "They add up to 90°", "They add up to 180°", "They are supplementary"],
        correctAnswer: "They are equal",
        explanation: "Alternate exterior angles formed by a transversal cutting parallel lines are equal in measure. ↔️",
        wrongAnswerExplanations: {
            "They add up to 90°": "Angles that add up to 90° are complementary, not alternate exterior angles.",
            "They add up to 180°": "Angles that add up to 180° are supplementary, not alternate exterior angles.",
            "They are supplementary": "Supplementary angles add up to 180°, but alternate exterior angles are equal."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch5_t2_qm5',
        type: "mcq",
        question: "If two lines are parallel and a transversal cuts them, what is the relationship between consecutive exterior angles?",
        options: ["They are equal", "They add up to 90°", "They add up to 180°", "They are complementary"],
        correctAnswer: "They add up to 180°",
        explanation: "Consecutive exterior angles formed by a transversal cutting parallel lines add up to 180° (they are supplementary). ➕",
        wrongAnswerExplanations: {
            "They are equal": "Consecutive exterior angles are not equal, they are supplementary.",
            "They add up to 90°": "Angles that add up to 90° are complementary, not consecutive exterior angles.",
            "They are complementary": "Complementary angles add up to 90°, but consecutive exterior angles add up to 180°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch5_t2_qm6',
        type: "mcq",
        question: "If two lines are parallel and a transversal cuts them, what is the relationship between vertically opposite angles?",
        options: ["They are equal", "They add up to 90°", "They add up to 180°", "They are supplementary"],
        correctAnswer: "They are equal",
        explanation: "Vertically opposite angles formed by a transversal cutting parallel lines are equal in measure. ⚖️",
        wrongAnswerExplanations: {
            "They add up to 90°": "Angles that add up to 90° are complementary, not vertically opposite angles.",
            "They add up to 180°": "Angles that add up to 180° are supplementary, not vertically opposite angles.",
            "They are supplementary": "Supplementary angles add up to 180°, but vertically opposite angles are equal."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch5_t2_qm7',
        type: "mcq",
        question: "If two lines are parallel and a transversal cuts them, what is the relationship between adjacent angles?",
        options: ["They are equal", "They add up to 90°", "They add up to 180°", "They are complementary"],
        correctAnswer: "They add up to 180°",
        explanation: "Adjacent angles formed by a transversal cutting parallel lines add up to 180° (they are supplementary). ➕",
        wrongAnswerExplanations: {
            "They are equal": "Adjacent angles are not equal, they are supplementary.",
            "They add up to 90°": "Angles that add up to 90° are complementary, not adjacent angles.",
            "They are complementary": "Complementary angles add up to 90°, but adjacent angles add up to 180°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch5_t2_qm8',
        type: "mcq",
        question: "If two lines are parallel and a transversal cuts them, what is the relationship between linear pairs?",
        options: ["They are equal", "They add up to 90°", "They add up to 180°", "They are complementary"],
        correctAnswer: "They add up to 180°",
        explanation: "Linear pairs formed by a transversal cutting parallel lines add up to 180° (they are supplementary). ➕",
        wrongAnswerExplanations: {
            "They are equal": "Linear pairs are not equal, they are supplementary.",
            "They add up to 90°": "Angles that add up to 90° are complementary, not linear pairs.",
            "They are complementary": "Complementary angles add up to 90°, but linear pairs add up to 180°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch5_t2_qm9',
        type: "mcq",
        question: "If two lines are parallel and a transversal cuts them, what is the relationship between co-interior angles?",
        options: ["They are equal", "They add up to 90°", "They add up to 180°", "They are complementary"],
        correctAnswer: "They add up to 180°",
        explanation: "Co-interior angles formed by a transversal cutting parallel lines add up to 180° (they are supplementary). ➕",
        wrongAnswerExplanations: {
            "They are equal": "Co-interior angles are not equal, they are supplementary.",
            "They add up to 90°": "Angles that add up to 90° are complementary, not co-interior angles.",
            "They are complementary": "Complementary angles add up to 90°, but co-interior angles add up to 180°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch5_t2_qm10',
        type: "mcq",
        question: "If two lines are parallel and a transversal cuts them, what is the relationship between co-exterior angles?",
        options: ["They are equal", "They add up to 90°", "They add up to 180°", "They are complementary"],
        correctAnswer: "They add up to 180°",
        explanation: "Co-exterior angles formed by a transversal cutting parallel lines add up to 180° (they are supplementary). ➕",
        wrongAnswerExplanations: {
            "They are equal": "Co-exterior angles are not equal, they are supplementary.",
            "They add up to 90°": "Angles that add up to 90° are complementary, not co-exterior angles.",
            "They are complementary": "Complementary angles add up to 90°, but co-exterior angles add up to 180°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch5_t2_qm11',
        type: "mcq",
        question: "If two lines are parallel and a transversal cuts them, what is the relationship between alternate angles?",
        options: ["They are equal", "They add up to 90°", "They add up to 180°", "They are supplementary"],
        correctAnswer: "They are equal",
        explanation: "Alternate angles formed by a transversal cutting parallel lines are equal in measure. ↔️",
        wrongAnswerExplanations: {
            "They add up to 90°": "Angles that add up to 90° are complementary, not alternate angles.",
            "They add up to 180°": "Angles that add up to 180° are supplementary, not alternate angles.",
            "They are supplementary": "Supplementary angles add up to 180°, but alternate angles are equal."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch5_t2_qm12',
        type: "mcq",
        question: "If two lines are parallel and a transversal cuts them, what is the relationship between consecutive angles?",
        options: ["They are equal", "They add up to 90°", "They add up to 180°", "They are complementary"],
        correctAnswer: "They add up to 180°",
        explanation: "Consecutive angles formed by a transversal cutting parallel lines add up to 180° (they are supplementary). ➕",
        wrongAnswerExplanations: {
            "They are equal": "Consecutive angles are not equal, they are supplementary.",
            "They add up to 90°": "Angles that add up to 90° are complementary, not consecutive angles.",
            "They are complementary": "Complementary angles add up to 90°, but consecutive angles add up to 180°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch5_t2_qm13',
        type: "mcq",
        question: "If two lines are parallel and a transversal cuts them, what is the relationship between interior angles on the same side of the transversal?",
        options: ["They are equal", "They add up to 90°", "They add up to 180°", "They are complementary"],
        correctAnswer: "They add up to 180°",
        explanation: "Interior angles on the same side of the transversal add up to 180° (they are supplementary). ➕",
        wrongAnswerExplanations: {
            "They are equal": "Interior angles on the same side are not equal, they are supplementary.",
            "They add up to 90°": "Angles that add up to 90° are complementary, not interior angles on the same side.",
            "They are complementary": "Complementary angles add up to 90°, but interior angles on the same side add up to 180°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch5_t2_qm14',
        type: "mcq",
        question: "If two lines are parallel and a transversal cuts them, what is the relationship between exterior angles on the same side of the transversal?",
        options: ["They are equal", "They add up to 90°", "They add up to 180°", "They are complementary"],
        correctAnswer: "They add up to 180°",
        explanation: "Exterior angles on the same side of the transversal add up to 180° (they are supplementary). ➕",
        wrongAnswerExplanations: {
            "They are equal": "Exterior angles on the same side are not equal, they are supplementary.",
            "They add up to 90°": "Angles that add up to 90° are complementary, not exterior angles on the same side.",
            "They are complementary": "Complementary angles add up to 90°, but exterior angles on the same side add up to 180°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch5_t2_qm15',
        type: "mcq",
        question: "If two lines are parallel and a transversal cuts them, what is the relationship between alternate angles on the same side of the transversal?",
        options: ["They are equal", "They add up to 90°", "They add up to 180°", "They are complementary"],
        correctAnswer: "They are equal",
        explanation: "Alternate angles on the same side of the transversal are equal in measure. ↔️",
        wrongAnswerExplanations: {
            "They add up to 90°": "Angles that add up to 90° are complementary, not alternate angles on the same side.",
            "They add up to 180°": "Angles that add up to 180° are supplementary, not alternate angles on the same side.",
            "They are complementary": "Complementary angles add up to 90°, but alternate angles on the same side are equal."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch5_t2_qm16',
        type: "mcq",
        question: "If two lines are parallel and a transversal cuts them, what is the relationship between consecutive angles on the same side of the transversal?",
        options: ["They are equal", "They add up to 90°", "They add up to 180°", "They are complementary"],
        correctAnswer: "They add up to 180°",
        explanation: "Consecutive angles on the same side of the transversal add up to 180° (they are supplementary). ➕",
        wrongAnswerExplanations: {
            "They are equal": "Consecutive angles on the same side are not equal, they are supplementary.",
            "They add up to 90°": "Angles that add up to 90° are complementary, not consecutive angles on the same side.",
            "They are complementary": "Complementary angles add up to 90°, but consecutive angles on the same side add up to 180°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch5_t2_qm17',
        type: "mcq",
        question: "If two lines are parallel and a transversal cuts them, what is the relationship between interior angles on opposite sides of the transversal?",
        options: ["They are equal", "They add up to 90°", "They add up to 180°", "They are complementary"],
        correctAnswer: "They are equal",
        explanation: "Interior angles on opposite sides of the transversal are equal in measure. ↔️",
        wrongAnswerExplanations: {
            "They add up to 90°": "Angles that add up to 90° are complementary, not interior angles on opposite sides.",
            "They add up to 180°": "Angles that add up to 180° are supplementary, not interior angles on opposite sides.",
            "They are complementary": "Complementary angles add up to 90°, but interior angles on opposite sides are equal."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch5_t2_qm18',
        type: "mcq",
        question: "If two lines are parallel and a transversal cuts them, what is the relationship between exterior angles on opposite sides of the transversal?",
        options: ["They are equal", "They add up to 90°", "They add up to 180°", "They are complementary"],
        correctAnswer: "They are equal",
        explanation: "Exterior angles on opposite sides of the transversal are equal in measure. ↔️",
        wrongAnswerExplanations: {
            "They add up to 90°": "Angles that add up to 90° are complementary, not exterior angles on opposite sides.",
            "They add up to 180°": "Angles that add up to 180° are supplementary, not exterior angles on opposite sides.",
            "They are complementary": "Complementary angles add up to 90°, but exterior angles on opposite sides are equal."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch5_t2_qm19',
        type: "mcq",
        question: "If two lines are parallel and a transversal cuts them, what is the relationship between alternate angles on opposite sides of the transversal?",
        options: ["They are equal", "They add up to 90°", "They add up to 180°", "They are complementary"],
        correctAnswer: "They are equal",
        explanation: "Alternate angles on opposite sides of the transversal are equal in measure. ↔️",
        wrongAnswerExplanations: {
            "They add up to 90°": "Angles that add up to 90° are complementary, not alternate angles on opposite sides.",
            "They add up to 180°": "Angles that add up to 180° are supplementary, not alternate angles on opposite sides.",
            "They are complementary": "Complementary angles add up to 90°, but alternate angles on opposite sides are equal."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch5_t2_qm20',
        type: "mcq",
        question: "If two lines are parallel and a transversal cuts them, what is the relationship between consecutive angles on opposite sides of the transversal?",
        options: ["They are equal", "They add up to 90°", "They add up to 180°", "They are complementary"],
        correctAnswer: "They add up to 180°",
        explanation: "Consecutive angles on opposite sides of the transversal add up to 180° (they are supplementary). ➕",
        wrongAnswerExplanations: {
            "They are equal": "Consecutive angles on opposite sides are not equal, they are supplementary.",
            "They add up to 90°": "Angles that add up to 90° are complementary, not consecutive angles on opposite sides.",
            "They are complementary": "Complementary angles add up to 90°, but consecutive angles on opposite sides add up to 180°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 