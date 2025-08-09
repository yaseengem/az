import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl3_ch10_t1_qe1',
        type: "mcq",
        question: "What comes next in the pattern: 2, 4, 6, 8, ___?",
        options: ["9", "10", "12", "14"],
        correctAnswer: "10",
        explanation: "This is a pattern of even numbers that increases by 2 each time: 2, 4, 6, 8, 10.",
        wrongAnswerExplanations: {
            "9": "The pattern shows even numbers increasing by 2, not odd numbers.",
            "12": "The pattern increases by 2 each time, not by 4.",
            "14": "The pattern increases by 2 each time, so after 8 comes 10, not 14."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch10_t1_qe2',
        type: "mcq",
        question: "What comes next in the pattern: 5, 10, 15, 20, ___?",
        options: ["21", "25", "30", "35"],
        correctAnswer: "25",
        explanation: "This is a pattern that counts by 5s: 5, 10, 15, 20, 25.",
        wrongAnswerExplanations: {
            "21": "The pattern increases by 5 each time, not by 1.",
            "30": "The pattern increases by 5 each time, so after 20 comes 25, not 30.",
            "35": "The pattern increases by 5 each time, so after 20 comes 25, not 35."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch10_t1_qe3',
        type: "mcq",
        question: "What comes next in the pattern: 3, 6, 9, 12, ___?",
        options: ["13", "15", "16", "18"],
        correctAnswer: "15",
        explanation: "This is a pattern that counts by 3s: 3, 6, 9, 12, 15.",
        wrongAnswerExplanations: {
            "13": "The pattern increases by 3 each time, not by 1.",
            "16": "The pattern increases by 3 each time, so after 12 comes 15, not 16.",
            "18": "The pattern increases by 3 each time, so after 12 comes 15, not 18."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch10_t1_qe4',
        type: "mcq",
        question: "What shape would come next? 🔵 🔴 🔵 🔴 ___",
        options: ["🔵", "🔴", "🟢", "🟡"],
        correctAnswer: "🔵",
        explanation: "The pattern alternates between blue and red circles: 🔵 🔴 🔵 🔴, so blue circle 🔵 comes next.",
        wrongAnswerExplanations: {
            "🔴": "The pattern alternates between blue and red, and since the last shape is red, blue comes next.",
            "🟢": "The pattern uses only blue and red circles, not green.",
            "🟡": "The pattern uses only blue and red circles, not yellow."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch10_t1_qe5',
        type: "mcq",
        question: "What shape would come next? 🔺 🔺 🔴 🔺 🔺 🔴 ___",
        options: ["🔴", "🔺", "🔶", "🔷"],
        correctAnswer: "🔺",
        explanation: "The pattern is two triangles followed by a circle, repeating: 🔺 🔺 🔴, 🔺 🔺 🔴, so triangle 🔺 comes next.",
        wrongAnswerExplanations: {
            "🔴": "After the circle, the pattern starts over with a triangle.",
            "🔶": "The pattern uses only triangles and circles, not diamonds.",
            "🔷": "The pattern uses only triangles and circles, not blue diamonds."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch10_t1_qe6',
        type: "mcq",
        question: "What comes next in the pattern: 1, 3, 5, 7, ___?",
        options: ["8", "9", "10", "11"],
        correctAnswer: "9",
        explanation: "This is a pattern of odd numbers that increases by 2 each time: 1, 3, 5, 7, 9.",
        wrongAnswerExplanations: {
            "8": "The pattern shows odd numbers, not even numbers.",
            "10": "The pattern shows odd numbers, and 10 is even.",
            "11": "The pattern increases by 2 each time, so after 7 comes 9, not 11."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch10_t1_qe7',
        type: "mcq",
        question: "What number comes next? 2, 4, 8, 16, ___",
        options: ["18", "20", "24", "32"],
        correctAnswer: "32",
        explanation: "This pattern doubles each number: 2, 4, 8, 16, 32. Each number is multiplied by 2.",
        wrongAnswerExplanations: {
            "18": "The pattern doubles each number, not adds 2.",
            "20": "The pattern doubles each number, not adds 4.",
            "24": "The pattern doubles each number, so 16 × 2 = 32, not 24."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch10_t1_qe8',
        type: "mcq",
        question: "What shape would come next? ⭐ 🔵 ⭐ 🔵 ⭐ ___",
        options: ["⭐", "🔵", "🔶", "🔺"],
        correctAnswer: "🔵",
        explanation: "The pattern alternates between star and circle: ⭐ 🔵 ⭐ 🔵 ⭐, so circle 🔵 comes next.",
        wrongAnswerExplanations: {
            "⭐": "The pattern alternates between star and circle, and since the last shape is star, circle comes next.",
            "🔶": "The pattern uses only stars and circles, not diamonds.",
            "🔺": "The pattern uses only stars and circles, not triangles."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch10_t1_qe9',
        type: "mcq",
        question: "What comes next in the pattern: 10, 9, 8, 7, ___?",
        options: ["5", "6", "7", "8"],
        correctAnswer: "6",
        explanation: "This is a decreasing pattern that counts down by 1: 10, 9, 8, 7, 6.",
        wrongAnswerExplanations: {
            "5": "The pattern decreases by 1 each time, so after 7 comes 6, not 5.",
            "7": "The pattern is decreasing, not repeating the same number.",
            "8": "The pattern is decreasing, not going back up."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch10_t1_qe10',
        type: "mcq",
        question: "What shape comes next? 🟥 🟦 🟩 🟥 🟦 ___",
        options: ["🟥", "🟦", "🟩", "🟨"],
        correctAnswer: "🟩",
        explanation: "The pattern repeats red, blue, green: 🟥 🟦 🟩, 🟥 🟦 🟩, so green 🟩 comes next.",
        wrongAnswerExplanations: {
            "🟥": "The pattern is red, blue, green, so after blue comes green, not red.",
            "🟦": "The pattern is red, blue, green, so after blue comes green, not blue again.",
            "🟨": "The pattern uses only red, blue, and green squares, not yellow."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch10_t1_qe11',
        type: "mcq",
        question: "What comes next in the pattern: 25, 20, 15, 10, ___?",
        options: ["0", "5", "10", "15"],
        correctAnswer: "5",
        explanation: "This is a decreasing pattern that counts down by 5: 25, 20, 15, 10, 5.",
        wrongAnswerExplanations: {
            "0": "The pattern decreases by 5 each time, so after 10 comes 5, not 0.",
            "10": "The pattern is decreasing, not repeating the same number.",
            "15": "The pattern is decreasing, not going back up."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch10_t1_qe12',
        type: "mcq",
        question: "What number comes next? 1, 4, 7, 10, ___",
        options: ["11", "12", "13", "14"],
        correctAnswer: "13",
        explanation: "This pattern adds 3 each time: 1, 4, 7, 10, 13. Each number increases by 3.",
        wrongAnswerExplanations: {
            "11": "The pattern adds 3 each time, not 1.",
            "12": "The pattern adds 3 each time, not 2.",
            "14": "The pattern adds 3 each time, so 10 + 3 = 13, not 14."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch10_t1_qe13',
        type: "mcq",
        question: "What comes next in the pattern: 2, 5, 8, 11, ___?",
        options: ["13", "14", "15", "16"],
        correctAnswer: "14",
        explanation: "This pattern adds 3 each time: 2, 5, 8, 11, 14. Each number increases by 3.",
        wrongAnswerExplanations: {
            "13": "The pattern adds 3 each time, not 2.",
            "15": "The pattern adds 3 each time, not 4.",
            "16": "The pattern adds 3 each time, not 5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch10_t1_qe14',
        type: "mcq",
        question: "What shape comes next? 🔴 🔴 🔵 🔴 🔴 🔵 🔴 ___",
        options: ["🔴", "🔵", "🟢", "🟡"],
        correctAnswer: "🔴",
        explanation: "The pattern is two red circles, one blue circle, repeating: 🔴 🔴 🔵, 🔴 🔴 🔵, 🔴..., so red circle 🔴 comes next.",
        wrongAnswerExplanations: {
            "🔵": "The pattern is two red circles, then one blue circle, so after one red circle, another red circle comes next.",
            "🟢": "The pattern uses only red and blue circles, not green.",
            "🟡": "The pattern uses only red and blue circles, not yellow."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch10_t1_qe15',
        type: "mcq",
        question: "What number comes next? 100, 90, 80, 70, ___",
        options: ["50", "60", "65", "75"],
        correctAnswer: "60",
        explanation: "This is a decreasing pattern that counts down by 10: 100, 90, 80, 70, 60.",
        wrongAnswerExplanations: {
            "50": "The pattern decreases by 10 each time, so after 70 comes 60, not 50.",
            "65": "The pattern decreases by 10 each time, not 5.",
            "75": "The pattern is decreasing, not increasing."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch10_t1_qe16',
        type: "mcq",
        question: "What shape comes next? 🔺 🟦 🟦 🔺 🟦 🟦 ___",
        options: ["🔺", "🟦", "🟨", "🔴"],
        correctAnswer: "🔺",
        explanation: "The pattern is triangle, square, square, repeating: 🔺 🟦 🟦, 🔺 🟦 🟦, so triangle 🔺 comes next.",
        wrongAnswerExplanations: {
            "🟦": "The pattern is triangle, square, square, so after two squares comes triangle.",
            "🟨": "The pattern uses only triangles and blue squares, not yellow squares.",
            "🔴": "The pattern uses only triangles and blue squares, not red circles."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch10_t1_qe17',
        type: "mcq",
        question: "What comes next in the pattern: 7, 14, 21, 28, ___?",
        options: ["34", "35", "36", "37"],
        correctAnswer: "35",
        explanation: "This pattern adds 7 each time: 7, 14, 21, 28, 35. Each number increases by 7.",
        wrongAnswerExplanations: {
            "34": "The pattern adds 7 each time, not 6.",
            "36": "The pattern adds 7 each time, not 8.",
            "37": "The pattern adds 7 each time, not 9."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch10_t1_qe18',
        type: "mcq",
        question: "What number comes next? 5, 10, 20, 40, ___",
        options: ["45", "60", "80", "100"],
        correctAnswer: "80",
        explanation: "This pattern doubles each number: 5, 10, 20, 40, 80. Each number is multiplied by 2.",
        wrongAnswerExplanations: {
            "45": "The pattern doubles each number, not adds 5.",
            "60": "The pattern doubles each number, not adds 20.",
            "100": "The pattern doubles each number, so 40 × 2 = 80, not 100."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch10_t1_qe19',
        type: "mcq",
        question: "What comes next in the pattern? 🟥 🟨 🟨 🟥 🟨 🟨 ___",
        options: ["🟥", "🟨", "🟦", "🟩"],
        correctAnswer: "🟥",
        explanation: "The pattern is red square, yellow square, yellow square, repeating: 🟥 🟨 🟨, 🟥 🟨 🟨, so red square 🟥 comes next.",
        wrongAnswerExplanations: {
            "🟨": "The pattern is red, yellow, yellow, so after two yellows comes red.",
            "🟦": "The pattern uses only red and yellow squares, not blue.",
            "🟩": "The pattern uses only red and yellow squares, not green."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch10_t1_qe20',
        type: "mcq",
        question: "What number comes next? 3, 6, 12, 24, ___",
        options: ["27", "36", "42", "48"],
        correctAnswer: "48",
        explanation: "This pattern doubles each number: 3, 6, 12, 24, 48. Each number is multiplied by 2.",
        wrongAnswerExplanations: {
            "27": "The pattern doubles each number, not adds 3.",
            "36": "The pattern doubles each number, not adds 12.",
            "42": "The pattern doubles each number, not adds 18."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
