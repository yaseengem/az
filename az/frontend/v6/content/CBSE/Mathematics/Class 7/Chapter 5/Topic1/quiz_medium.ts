import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch5_t1_qm1',
        type: "mcq",
        question: "If two angles are complementary and one is 15° more than the other, what are the angles?",
        options: ["37.5° and 52.5°", "30° and 60°", "45° and 45°", "20° and 70°"],
        correctAnswer: "37.5° and 52.5°",
        explanation: "Let x be the smaller angle. Then x + (x + 15) = 90° ⇒ x = 37.5° 📐",
        wrongAnswerExplanations: {
            "30° and 60°": "These angles don't have a 15° difference.",
            "45° and 45°": "These angles are equal, not differing by 15°.",
            "20° and 70°": "These angles don't have a 15° difference."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch5_t1_qm2',
        type: "mcq",
        question: "If two supplementary angles are in the ratio 4:5, what are the angles?",
        options: ["80° and 100°", "60° and 120°", "90° and 90°", "70° and 110°"],
        correctAnswer: "80° and 100°",
        explanation: "Let angles be 4x and 5x. Then 4x + 5x = 180° ⇒ x = 20° 📏",
        wrongAnswerExplanations: {
            "60° and 120°": "These angles are not in the ratio 4:5.",
            "90° and 90°": "These angles are equal, not in ratio 4:5.",
            "70° and 110°": "These angles are not in the ratio 4:5."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch5_t1_qm3',
        type: "mcq",
        question: "If three angles are adjacent and form a straight line, and the first two are 45° and 75°, what is the third angle?",
        options: ["60°", "45°", "75°", "90°"],
        correctAnswer: "60°",
        explanation: "Angles on a straight line add to 180°. 180° - 45° - 75° = 60° 📐",
        wrongAnswerExplanations: {
            "45°": "This would make the sum less than 180°.",
            "75°": "This would make the sum less than 180°.",
            "90°": "This would make the sum more than 180°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch5_t1_qm4',
        type: "mcq",
        question: "If two complementary angles are in the ratio 2:3, what are the angles?",
        options: ["36° and 54°", "30° and 60°", "45° and 45°", "40° and 50°"],
        correctAnswer: "36° and 54°",
        explanation: "Let angles be 2x and 3x. Then 2x + 3x = 90° ⇒ x = 18° 📐",
        wrongAnswerExplanations: {
            "30° and 60°": "These angles are not in the ratio 2:3.",
            "45° and 45°": "These angles are equal, not in ratio 2:3.",
            "40° and 50°": "These angles are not in the ratio 2:3."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch5_t1_qm5',
        type: "mcq",
        question: "If an angle is 20° less than its complement, what is the angle?",
        options: ["35°", "45°", "55°", "65°"],
        correctAnswer: "35°",
        explanation: "Let x be the angle. Then x + (x + 20) = 90° ⇒ x = 35° 📐",
        wrongAnswerExplanations: {
            "45°": "This would make its complement 45°, not 20° less.",
            "55°": "This would make its complement 35°, not 20° more.",
            "65°": "This would make its complement 25°, not 20° more."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch5_t1_qm6',
        type: "mcq",
        question: "If two supplementary angles are in the ratio 3:7, what is the difference between them?",
        options: ["72°", "54°", "90°", "108°"],
        correctAnswer: "72°",
        explanation: "Let angles be 3x and 7x. Then 3x + 7x = 180° ⇒ x = 18°. Difference = 7x - 3x = 4x = 72° 📏",
        wrongAnswerExplanations: {
            "54°": "This is the smaller angle, not the difference.",
            "90°": "This is incorrect calculation.",
            "108°": "This is the larger angle, not the difference."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch5_t1_qm7',
        type: "mcq",
        question: "If three angles are adjacent and form a straight line, and the first is twice the second, and the third is 30°, what is the second angle?",
        options: ["50°", "60°", "40°", "70°"],
        correctAnswer: "50°",
        explanation: "Let second angle be x. Then 2x + x + 30° = 180° ⇒ x = 50° 📐",
        wrongAnswerExplanations: {
            "60°": "This would make the sum more than 180°.",
            "40°": "This would make the sum less than 180°.",
            "70°": "This would make the sum more than 180°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch5_t1_qm8',
        type: "mcq",
        question: "If two complementary angles are in the ratio 1:4, what is the difference between them?",
        options: ["54°", "36°", "45°", "72°"],
        correctAnswer: "54°",
        explanation: "Let angles be x and 4x. Then x + 4x = 90° ⇒ x = 18°. Difference = 4x - x = 3x = 54° 📐",
        wrongAnswerExplanations: {
            "36°": "This is the smaller angle, not the difference.",
            "45°": "This is incorrect calculation.",
            "72°": "This is the larger angle, not the difference."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch5_t1_qm9',
        type: "mcq",
        question: "If an angle is 15° more than its supplement, what is the angle?",
        options: ["97.5°", "90°", "82.5°", "105°"],
        correctAnswer: "97.5°",
        explanation: "Let x be the angle. Then x + (x - 15) = 180° ⇒ x = 97.5° 📏",
        wrongAnswerExplanations: {
            "90°": "This would make its supplement 90°, not 15° less.",
            "82.5°": "This would make its supplement 97.5°, not 15° less.",
            "105°": "This would make its supplement 75°, not 15° less."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch5_t1_qm10',
        type: "mcq",
        question: "If two supplementary angles are in the ratio 5:13, what is the measure of the larger angle?",
        options: ["130°", "120°", "140°", "150°"],
        correctAnswer: "130°",
        explanation: "Let angles be 5x and 13x. Then 5x + 13x = 180° ⇒ x = 10°. Larger angle = 13x = 130° 📏",
        wrongAnswerExplanations: {
            "120°": "This is incorrect calculation.",
            "140°": "This is incorrect calculation.",
            "150°": "This is incorrect calculation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch5_t1_qm11',
        type: "mcq",
        question: "If three angles are adjacent and form a straight line, and the first is 30° more than the second, and the third is 60°, what is the first angle?",
        options: ["45°", "60°", "75°", "90°"],
        correctAnswer: "45°",
        explanation: "Let second angle be x. Then (x + 30) + x + 60° = 180° ⇒ x = 45° 📐",
        wrongAnswerExplanations: {
            "60°": "This would make the sum more than 180°.",
            "75°": "This would make the sum more than 180°.",
            "90°": "This would make the sum more than 180°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch5_t1_qm12',
        type: "mcq",
        question: "If two complementary angles are in the ratio 3:2, what is the measure of the larger angle?",
        options: ["54°", "36°", "45°", "60°"],
        correctAnswer: "54°",
        explanation: "Let angles be 3x and 2x. Then 3x + 2x = 90° ⇒ x = 18°. Larger angle = 3x = 54° 📐",
        wrongAnswerExplanations: {
            "36°": "This is the smaller angle.",
            "45°": "This is incorrect calculation.",
            "60°": "This is incorrect calculation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch5_t1_qm13',
        type: "mcq",
        question: "If an angle is 25° less than its supplement, what is the angle?",
        options: ["77.5°", "90°", "102.5°", "65°"],
        correctAnswer: "77.5°",
        explanation: "Let x be the angle. Then x + (x + 25) = 180° ⇒ x = 77.5° 📏",
        wrongAnswerExplanations: {
            "90°": "This would make its supplement 90°, not 25° more.",
            "102.5°": "This would make its supplement 77.5°, not 25° more.",
            "65°": "This would make its supplement 115°, not 25° more."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch5_t1_qm14',
        type: "mcq",
        question: "If two supplementary angles are in the ratio 2:3, what is the measure of the smaller angle?",
        options: ["72°", "108°", "90°", "60°"],
        correctAnswer: "72°",
        explanation: "Let angles be 2x and 3x. Then 2x + 3x = 180° ⇒ x = 36°. Smaller angle = 2x = 72° 📏",
        wrongAnswerExplanations: {
            "108°": "This is the larger angle.",
            "90°": "This is incorrect calculation.",
            "60°": "This is incorrect calculation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch5_t1_qm15',
        type: "mcq",
        question: "If three angles are adjacent and form a straight line, and the first is 40° more than the second, and the third is 50°, what is the second angle?",
        options: ["45°", "60°", "30°", "75°"],
        correctAnswer: "45°",
        explanation: "Let second angle be x. Then (x + 40) + x + 50° = 180° ⇒ x = 45° 📐",
        wrongAnswerExplanations: {
            "60°": "This would make the sum more than 180°.",
            "30°": "This would make the sum less than 180°.",
            "75°": "This would make the sum more than 180°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch5_t1_qm16',
        type: "mcq",
        question: "If two complementary angles are in the ratio 4:1, what is the measure of the smaller angle?",
        options: ["18°", "72°", "45°", "36°"],
        correctAnswer: "18°",
        explanation: "Let angles be 4x and x. Then 4x + x = 90° ⇒ x = 18° 📐",
        wrongAnswerExplanations: {
            "72°": "This is the larger angle.",
            "45°": "This is incorrect calculation.",
            "36°": "This is incorrect calculation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch5_t1_qm17',
        type: "mcq",
        question: "If an angle is 35° more than its complement, what is the angle?",
        options: ["62.5°", "45°", "55°", "70°"],
        correctAnswer: "62.5°",
        explanation: "Let x be the angle. Then x + (x - 35) = 90° ⇒ x = 62.5° 📐",
        wrongAnswerExplanations: {
            "45°": "This would make its complement 45°, not 35° less.",
            "55°": "This would make its complement 35°, not 35° less.",
            "70°": "This would make its complement 20°, not 35° less."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch5_t1_qm18',
        type: "mcq",
        question: "If two supplementary angles are in the ratio 1:5, what is the difference between them?",
        options: ["120°", "60°", "90°", "150°"],
        correctAnswer: "120°",
        explanation: "Let angles be x and 5x. Then x + 5x = 180° ⇒ x = 30°. Difference = 5x - x = 4x = 120° 📏",
        wrongAnswerExplanations: {
            "60°": "This is the smaller angle, not the difference.",
            "90°": "This is incorrect calculation.",
            "150°": "This is the larger angle, not the difference."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch5_t1_qm19',
        type: "mcq",
        question: "If three angles are adjacent and form a straight line, and the first is twice the second, and the third is 45°, what is the first angle?",
        options: ["90°", "60°", "45°", "75°"],
        correctAnswer: "90°",
        explanation: "Let second angle be x. Then 2x + x + 45° = 180° ⇒ x = 45°. First angle = 2x = 90° 📐",
        wrongAnswerExplanations: {
            "60°": "This would make the sum less than 180°.",
            "45°": "This is the second angle.",
            "75°": "This would make the sum more than 180°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch5_t1_qm20',
        type: "mcq",
        question: "If two complementary angles are in the ratio 5:4, what is the measure of the larger angle?",
        options: ["50°", "40°", "45°", "55°"],
        correctAnswer: "50°",
        explanation: "Let angles be 5x and 4x. Then 5x + 4x = 90° ⇒ x = 10°. Larger angle = 5x = 50° 📐",
        wrongAnswerExplanations: {
            "40°": "This is the smaller angle.",
            "45°": "This is incorrect calculation.",
            "55°": "This is incorrect calculation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];
