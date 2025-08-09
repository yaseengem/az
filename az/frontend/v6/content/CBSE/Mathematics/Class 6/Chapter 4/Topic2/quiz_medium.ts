import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch4_t2_qm1',
        type: "mcq",
        question: "If two angles add up to 90°, what type of angles are they?",
        options: ["Complementary", "Supplementary", "Adjacent", "Vertical"],
        correctAnswer: "Complementary",
        explanation: "Two angles that add up to 90° are called complementary angles. 📐",
        wrongAnswerExplanations: {
            "Supplementary": "Supplementary angles add up to 180°, not 90°.",
            "Adjacent": "Adjacent angles share a common side and vertex, but don't necessarily add up to 90°.",
            "Vertical": "Vertical angles are opposite angles formed by intersecting lines."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch4_t2_qm2',
        type: "mcq",
        question: "What is the measure of the angle formed by the hands of a clock at 2:30?",
        options: ["105°", "90°", "120°", "135°"],
        correctAnswer: "105°",
        explanation: "At 2:30, the hour hand is halfway between 2 and 3 (15° from 2), and the minute hand is at 6, forming a 105° angle. ⏰",
        wrongAnswerExplanations: {
            "90°": "The angle is greater than 90° at 2:30.",
            "120°": "The angle is less than 120° at 2:30.",
            "135°": "The angle is less than 135° at 2:30."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch4_t2_qm3',
        type: "mcq",
        question: "If an angle is 35° more than its complement, what is the measure of the angle?",
        options: ["62.5°", "55°", "65°", "72.5°"],
        correctAnswer: "62.5°",
        explanation: "Let x be the angle, then its complement is 90° - x. x = (90° - x) + 35° → 2x = 125° → x = 62.5°. 🧮",
        wrongAnswerExplanations: {
            "55°": "55° + 35° = 90°, but 55° is not 35° more than its complement.",
            "65°": "65° + 25° = 90°, but 65° is not 35° more than its complement.",
            "72.5°": "72.5° + 17.5° = 90°, but 72.5° is not 35° more than its complement."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch4_t2_qm4',
        type: "mcq",
        question: "What is the measure of the angle formed by the hands of a clock at 1:20?",
        options: ["80°", "90°", "100°", "110°"],
        correctAnswer: "80°",
        explanation: "At 1:20, the hour hand is 1/3 of the way from 1 to 2 (10° from 1), and the minute hand is at 4, forming an 80° angle. ⏰",
        wrongAnswerExplanations: {
            "90°": "The angle is less than 90° at 1:20.",
            "100°": "The angle is less than 100° at 1:20.",
            "110°": "The angle is less than 110° at 1:20."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch4_t2_qm5',
        type: "mcq",
        question: "If two angles are supplementary and one is 40° more than the other, what is the measure of the larger angle?",
        options: ["70°", "110°", "120°", "130°"],
        correctAnswer: "110°",
        explanation: "Let x be the smaller angle, then x + (x + 40°) = 180° → 2x = 140° → x = 70°. The larger angle is 70° + 40° = 110°. 📐",
        wrongAnswerExplanations: {
            "70°": "70° is the measure of the smaller angle.",
            "120°": "120° + 80° = 200°, which is more than 180°.",
            "130°": "130° + 90° = 220°, which is more than 180°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch4_t2_qm6',
        type: "mcq",
        question: "What is the measure of the angle formed by the hands of a clock at 3:40?",
        options: ["130°", "140°", "150°", "160°"],
        correctAnswer: "130°",
        explanation: "At 3:40, the hour hand is 2/3 of the way from 3 to 4 (20° from 3), and the minute hand is at 8, forming a 130° angle. ⏰",
        wrongAnswerExplanations: {
            "140°": "The angle is less than 140° at 3:40.",
            "150°": "The angle is less than 150° at 3:40.",
            "160°": "The angle is less than 160° at 3:40."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch4_t2_qm7',
        type: "mcq",
        question: "If an angle is 25° less than its supplement, what is the measure of the angle?",
        options: ["77.5°", "82.5°", "87.5°", "92.5°"],
        correctAnswer: "77.5°",
        explanation: "Let x be the angle, then its supplement is 180° - x. x = (180° - x) - 25° → 2x = 155° → x = 77.5°. 🧮",
        wrongAnswerExplanations: {
            "82.5°": "82.5° + 97.5° = 180°, but 82.5° is not 25° less than its supplement.",
            "87.5°": "87.5° + 92.5° = 180°, but 87.5° is not 25° less than its supplement.",
            "92.5°": "92.5° + 87.5° = 180°, but 92.5° is not 25° less than its supplement."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch4_t2_qm8',
        type: "mcq",
        question: "What is the measure of the angle formed by the hands of a clock at 4:50?",
        options: ["155°", "160°", "165°", "170°"],
        correctAnswer: "155°",
        explanation: "At 4:50, the hour hand is 5/6 of the way from 4 to 5 (25° from 4), and the minute hand is at 10, forming a 155° angle. ⏰",
        wrongAnswerExplanations: {
            "160°": "The angle is less than 160° at 4:50.",
            "165°": "The angle is less than 165° at 4:50.",
            "170°": "The angle is less than 170° at 4:50."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch4_t2_qm9',
        type: "mcq",
        question: "If two angles are complementary and one is twice the other, what is the measure of the larger angle?",
        options: ["30°", "45°", "60°", "75°"],
        correctAnswer: "60°",
        explanation: "Let x be the smaller angle, then 2x is the larger angle. x + 2x = 90° → 3x = 90° → x = 30°. The larger angle is 2 × 30° = 60°. 📐",
        wrongAnswerExplanations: {
            "30°": "30° is the measure of the smaller angle.",
            "45°": "45° + 22.5° = 67.5°, which is less than 90°.",
            "75°": "75° + 37.5° = 112.5°, which is more than 90°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch4_t2_qm10',
        type: "mcq",
        question: "What is the measure of the angle formed by the hands of a clock at 5:10?",
        options: ["95°", "100°", "105°", "110°"],
        correctAnswer: "95°",
        explanation: "At 5:10, the hour hand is 1/6 of the way from 5 to 6 (5° from 5), and the minute hand is at 2, forming a 95° angle. ⏰",
        wrongAnswerExplanations: {
            "100°": "The angle is less than 100° at 5:10.",
            "105°": "The angle is less than 105° at 5:10.",
            "110°": "The angle is less than 110° at 5:10."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch4_t2_qm11',
        type: "mcq",
        question: "If an angle is 15° more than twice its complement, what is the measure of the angle?",
        options: ["35°", "45°", "55°", "65°"],
        correctAnswer: "65°",
        explanation: "Let x be the angle, then its complement is 90° - x. x = 2(90° - x) + 15° → x = 180° - 2x + 15° → 3x = 195° → x = 65°. 🧮",
        wrongAnswerExplanations: {
            "35°": "35° + 55° = 90°, but 35° is not 15° more than twice its complement.",
            "45°": "45° + 45° = 90°, but 45° is not 15° more than twice its complement.",
            "55°": "55° + 35° = 90°, but 55° is not 15° more than twice its complement."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch4_t2_qm12',
        type: "mcq",
        question: "What is the measure of the angle formed by the hands of a clock at 6:15?",
        options: ["97.5°", "102.5°", "107.5°", "112.5°"],
        correctAnswer: "97.5°",
        explanation: "At 6:15, the hour hand is 1/4 of the way from 6 to 7 (7.5° from 6), and the minute hand is at 3, forming a 97.5° angle. ⏰",
        wrongAnswerExplanations: {
            "102.5°": "The angle is less than 102.5° at 6:15.",
            "107.5°": "The angle is less than 107.5° at 6:15.",
            "112.5°": "The angle is less than 112.5° at 6:15."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch4_t2_qm13',
        type: "mcq",
        question: "If two angles are supplementary and one is three times the other, what is the measure of the larger angle?",
        options: ["45°", "90°", "135°", "150°"],
        correctAnswer: "135°",
        explanation: "Let x be the smaller angle, then 3x is the larger angle. x + 3x = 180° → 4x = 180° → x = 45°. The larger angle is 3 × 45° = 135°. 📐",
        wrongAnswerExplanations: {
            "45°": "45° is the measure of the smaller angle.",
            "90°": "90° + 30° = 120°, which is less than 180°.",
            "150°": "150° + 50° = 200°, which is more than 180°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch4_t2_qm14',
        type: "mcq",
        question: "What is the measure of the angle formed by the hands of a clock at 7:25?",
        options: ["72.5°", "77.5°", "82.5°", "87.5°"],
        correctAnswer: "72.5°",
        explanation: "At 7:25, the hour hand is 5/12 of the way from 7 to 8 (12.5° from 7), and the minute hand is at 5, forming a 72.5° angle. ⏰",
        wrongAnswerExplanations: {
            "77.5°": "The angle is less than 77.5° at 7:25.",
            "82.5°": "The angle is less than 82.5° at 7:25.",
            "87.5°": "The angle is less than 87.5° at 7:25."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch4_t2_qm15',
        type: "mcq",
        question: "If an angle is 20° less than three times its complement, what is the measure of the angle?",
        options: ["25°", "35°", "45°", "55°"],
        correctAnswer: "55°",
        explanation: "Let x be the angle, then its complement is 90° - x. x = 3(90° - x) - 20° → x = 270° - 3x - 20° → 4x = 250° → x = 62.5°. 🧮",
        wrongAnswerExplanations: {
            "25°": "25° + 65° = 90°, but 25° is not 20° less than three times its complement.",
            "35°": "35° + 55° = 90°, but 35° is not 20° less than three times its complement.",
            "45°": "45° + 45° = 90°, but 45° is not 20° less than three times its complement."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch4_t2_qm16',
        type: "mcq",
        question: "What is the measure of the angle formed by the hands of a clock at 8:35?",
        options: ["47.5°", "52.5°", "57.5°", "62.5°"],
        correctAnswer: "47.5°",
        explanation: "At 8:35, the hour hand is 7/12 of the way from 8 to 9 (17.5° from 8), and the minute hand is at 7, forming a 47.5° angle. ⏰",
        wrongAnswerExplanations: {
            "52.5°": "The angle is less than 52.5° at 8:35.",
            "57.5°": "The angle is less than 57.5° at 8:35.",
            "62.5°": "The angle is less than 62.5° at 8:35."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch4_t2_qm17',
        type: "mcq",
        question: "If two angles are supplementary and one is four times the other, what is the measure of the smaller angle?",
        options: ["30°", "36°", "40°", "45°"],
        correctAnswer: "36°",
        explanation: "Let x be the smaller angle, then 4x is the larger angle. x + 4x = 180° → 5x = 180° → x = 36°. 📐",
        wrongAnswerExplanations: {
            "30°": "30° + 120° = 150°, which is less than 180°.",
            "40°": "40° + 160° = 200°, which is more than 180°.",
            "45°": "45° + 180° = 225°, which is more than 180°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch4_t2_qm18',
        type: "mcq",
        question: "What is the measure of the angle formed by the hands of a clock at 9:45?",
        options: ["22.5°", "27.5°", "32.5°", "37.5°"],
        correctAnswer: "22.5°",
        explanation: "At 9:45, the hour hand is 3/4 of the way from 9 to 10 (22.5° from 9), and the minute hand is at 9, forming a 22.5° angle. ⏰",
        wrongAnswerExplanations: {
            "27.5°": "The angle is less than 27.5° at 9:45.",
            "32.5°": "The angle is less than 32.5° at 9:45.",
            "37.5°": "The angle is less than 37.5° at 9:45."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch4_t2_qm19',
        type: "mcq",
        question: "If an angle is 30° more than half its supplement, what is the measure of the angle?",
        options: ["50°", "60°", "70°", "80°"],
        correctAnswer: "80°",
        explanation: "Let x be the angle, then its supplement is 180° - x. x = (180° - x)/2 + 30° → 2x = 180° - x + 60° → 3x = 240° → x = 80°. 🧮",
        wrongAnswerExplanations: {
            "50°": "50° + 130° = 180°, but 50° is not 30° more than half its supplement.",
            "60°": "60° + 120° = 180°, but 60° is not 30° more than half its supplement.",
            "70°": "70° + 110° = 180°, but 70° is not 30° more than half its supplement."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch4_t2_qm20',
        type: "mcq",
        question: "What is the measure of the angle formed by the hands of a clock at 10:55?",
        options: ["2.5°", "5°", "7.5°", "10°"],
        correctAnswer: "2.5°",
        explanation: "At 10:55, the hour hand is 11/12 of the way from 10 to 11 (27.5° from 10), and the minute hand is at 11, forming a 2.5° angle. ⏰",
        wrongAnswerExplanations: {
            "5°": "The angle is less than 5° at 10:55.",
            "7.5°": "The angle is less than 7.5° at 10:55.",
            "10°": "The angle is less than 10° at 10:55."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    }
]; 