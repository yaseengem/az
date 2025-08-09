import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch10_t2_qe1',
        type: "mcq",
        question: "What skill are you mainly developing when finding missing elements in a pattern?",
        options: ["Reading", "Observation", "Writing", "Coloring"],
        correctAnswer: "Observation",
        explanation: "Finding missing elements in patterns requires strong observation skills to identify rules and notice details. 👁️",
        wrongAnswerExplanations: {
            "Reading": "Reading helps understand pattern instructions but isn't the main skill being developed.",
            "Writing": "Writing may help describe patterns but isn't the main skill being developed.",
            "Coloring": "Coloring may be used to create patterns but isn't the main skill being developed."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch10_t2_qe2',
        type: "mcq",
        question: "What comes next in the pattern: 🌟, 🔴, 🌟, 🔴, 🌟, ___?",
        options: ["🌟", "🔴", "🔵", "🔶"],
        correctAnswer: "🔴",
        explanation: "The pattern alternates between 🌟 and 🔴, so after 🌟 comes 🔴. This shows a repeating pattern with two elements.",
        wrongAnswerExplanations: {
            "🌟": "This breaks the alternating pattern of star-circle-star-circle.",
            "🔵": "The pattern uses red circles, not blue ones, and follows a specific sequence.",
            "🔶": "The pattern uses stars and circles, not diamonds, and follows a specific sequence."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch10_t2_qe3',
        type: "mcq",
        question: "Look at the pattern: 2, 4, 6, 8, ___. What number comes next?",
        options: ["9", "10", "12", "14"],
        correctAnswer: "10",
        explanation: "The pattern is counting by 2s (even numbers). After 8, the next even number is 10.",
        wrongAnswerExplanations: {
            "9": "9 is odd, but the pattern shows even numbers counting by 2s.",
            "12": "12 would skip 10, which breaks the pattern of counting by 2s.",
            "14": "14 would skip two numbers (10 and 12), breaking the pattern."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch10_t2_qe4',
        type: "mcq",
        question: "What shape would likely come next in this pattern? ▲, ■, ●, ▲, ■, ●, ▲, ___",
        options: ["▲", "■", "●", "♦"],
        correctAnswer: "■",
        explanation: "The pattern repeats: triangle, square, circle. After triangle comes square according to this repeating pattern.",
        wrongAnswerExplanations: {
            "▲": "Triangle just appeared, so this would break the repeating pattern.",
            "●": "Circle comes after square in this pattern, not after triangle.",
            "♦": "Diamond isn't part of the established pattern of triangle-square-circle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch10_t2_qe5',
        type: "mcq",
        question: "In the number pattern 5, 10, 15, 20, ___, what comes next?",
        options: ["21", "25", "30", "35"],
        correctAnswer: "25",
        explanation: "The pattern shows counting by 5s. After 20, the next number in the pattern is 25.",
        wrongAnswerExplanations: {
            "21": "Adding 1 to 20 gives 21, but the pattern is adding 5 each time.",
            "30": "30 would skip 25, breaking the pattern of counting by 5s.",
            "35": "35 would skip two numbers (25 and 30) in the pattern."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch10_t2_qe6',
        type: "mcq",
        question: "What is the rule in this pattern? 3, 6, 9, 12, 15",
        options: ["Add 2", "Add 3", "Add 4", "Add 5"],
        correctAnswer: "Add 3",
        explanation: "Each number is 3 more than the previous number. The pattern shows counting by 3s.",
        wrongAnswerExplanations: {
            "Add 2": "If we added 2 each time, the pattern would be 3, 5, 7, 9, 11.",
            "Add 4": "If we added 4 each time, the pattern would be 3, 7, 11, 15, 19.",
            "Add 5": "If we added 5 each time, the pattern would be 3, 8, 13, 18, 23."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch10_t2_qe7',
        type: "mcq",
        question: "Which observation skill helps you most when continuing a pattern?",
        options: ["Speed reading", "Identifying rules", "Memorizing colors", "Counting objects"],
        correctAnswer: "Identifying rules",
        explanation: "Identifying the rule that governs a pattern is essential for continuing it correctly.",
        wrongAnswerExplanations: {
            "Speed reading": "Speed reading might help read instructions but doesn't directly help continue patterns.",
            "Memorizing colors": "While colors might be part of patterns, identifying the pattern rule is more important.",
            "Counting objects": "Counting may be involved but identifying the pattern rule is the key skill."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch10_t2_qe8',
        type: "mcq",
        question: "Look at this pattern: 🍎, 🍌, 🍎, 🍌, 🍎. What fruit comes next?",
        options: ["🍎", "🍌", "🍊", "🍉"],
        correctAnswer: "🍌",
        explanation: "The pattern alternates between apple and banana. After apple comes banana following this alternating pattern.",
        wrongAnswerExplanations: {
            "🍎": "Apple just appeared, so repeating it would break the alternating pattern.",
            "🍊": "Orange isn't part of the established pattern of apple-banana-apple-banana.",
            "🍉": "Watermelon isn't part of the established pattern of apple-banana-apple-banana."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch10_t2_qe9',
        type: "mcq",
        question: "What is the missing number in this pattern? 10, 20, 30, ___, 50",
        options: ["35", "40", "45", "55"],
        correctAnswer: "40",
        explanation: "The pattern adds 10 each time. After 30, adding 10 gives 40, which comes before 50.",
        wrongAnswerExplanations: {
            "35": "Adding 5 to 30 gives 35, but the pattern is adding 10 each time.",
            "45": "Adding 15 to 30 gives 45, but the pattern is adding 10 each time.",
            "55": "55 would come after 50, not between 30 and 50."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch10_t2_qe10',
        type: "mcq",
        question: "In the pattern AB, ABB, ABBB, ABBBB, what comes next?",
        options: ["ABBBBB", "ABBBA", "AABBB", "BABBB"],
        correctAnswer: "ABBBBB",
        explanation: "Each term adds one more B. The pattern shows A followed by an increasing number of Bs.",
        wrongAnswerExplanations: {
            "ABBBA": "This adds an A at the end instead of another B, breaking the pattern.",
            "AABBB": "This adds an A at the beginning instead of another B, breaking the pattern.",
            "BABBB": "This changes the first letter from A to B, breaking the pattern."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch10_t2_qe11',
        type: "mcq",
        question: "Look at the pattern: 🔵🔴, 🔵🔵🔴, 🔵🔵🔵🔴, ___. What comes next?",
        options: ["🔵🔵🔵🔵", "🔵🔵🔵🔵🔴", "🔴🔵🔵🔵🔵", "🔵🔴🔵🔴"],
        correctAnswer: "🔵🔵🔵🔵🔴",
        explanation: "The pattern adds one blue circle each time, always ending with a red circle.",
        wrongAnswerExplanations: {
            "🔵🔵🔵🔵": "This pattern is missing the red circle at the end.",
            "🔴🔵🔵🔵🔵": "This puts the red circle at the beginning instead of the end.",
            "🔵🔴🔵🔴": "This alternates colors, which breaks the established pattern."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch10_t2_qe12',
        type: "mcq",
        question: "What comes next in this number pattern? 2, 4, 8, 16, ___",
        options: ["18", "24", "32", "64"],
        correctAnswer: "32",
        explanation: "Each number is doubled from the previous number (×2). After 16, the next number is 32.",
        wrongAnswerExplanations: {
            "18": "Adding 2 gives 18, but the pattern is doubling each time.",
            "24": "Adding 8 gives 24, but the pattern is doubling each time.",
            "64": "Multiplying by 4 gives 64, but the pattern is doubling (×2) each time."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch10_t2_qe13',
        type: "mcq",
        question: "When observing a growing pattern, what should you look for?",
        options: ["Only colors", "Only shapes", "How it changes from step to step", "Only the first and last items"],
        correctAnswer: "How it changes from step to step",
        explanation: "Observing how a pattern changes from one step to the next helps identify the rule and continue it.",
        wrongAnswerExplanations: {
            "Only colors": "Colors may be part of the pattern but aren't the only aspect to observe.",
            "Only shapes": "Shapes may be part of the pattern but aren't the only aspect to observe.",
            "Only the first and last items": "You need to observe all steps to understand how the pattern develops."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch10_t2_qe14',
        type: "mcq",
        question: "What is missing in this pattern? 1, 3, ___, 7, 9",
        options: ["4", "5", "6", "8"],
        correctAnswer: "5",
        explanation: "The pattern is adding 2 each time. After 3, adding 2 gives 5, then 7, then 9.",
        wrongAnswerExplanations: {
            "4": "Adding 1 gives 4, but the pattern is adding 2 each time.",
            "6": "Adding 3 gives 6, but the pattern is adding 2 each time.",
            "8": "8 would come after 7, not between 3 and 7."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch10_t2_qe15',
        type: "mcq",
        question: "In the pattern ◯◯△, ◯◯△△, ◯◯△△△, what comes next?",
        options: ["◯◯△△△△", "◯◯◯△△△", "◯△△△△", "△△△△"],
        correctAnswer: "◯◯△△△△",
        explanation: "The pattern keeps two circles and adds one triangle each time.",
        wrongAnswerExplanations: {
            "◯◯◯△△△": "This adds a circle, but the pattern keeps two circles and only adds triangles.",
            "◯△△△△": "This reduces to one circle, but the pattern maintains two circles.",
            "△△△△": "This removes the circles, but the pattern maintains two circles."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch10_t2_qe16',
        type: "mcq",
        question: "What skills does observing patterns help develop?",
        options: ["Only mathematics", "Only art", "Memory and prediction", "Only language"],
        correctAnswer: "Memory and prediction",
        explanation: "Pattern observation develops memory (remembering the pattern) and prediction (anticipating what comes next).",
        wrongAnswerExplanations: {
            "Only mathematics": "Pattern skills help with math but also benefit many other areas.",
            "Only art": "Pattern skills help with art but also benefit many other areas.",
            "Only language": "Pattern skills help with language but also benefit many other areas."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch10_t2_qe17',
        type: "mcq",
        question: "Look at the pattern: 25, 20, 15, 10, ___. What comes next?",
        options: ["0", "5", "8", "12"],
        correctAnswer: "5",
        explanation: "The pattern subtracts 5 each time. After 10, subtracting 5 gives 5.",
        wrongAnswerExplanations: {
            "0": "Subtracting 10 gives 0, but the pattern is subtracting 5 each time.",
            "8": "Subtracting 2 gives 8, but the pattern is subtracting 5 each time.",
            "12": "Adding 2 gives 12, but the pattern is subtracting, not adding."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch10_t2_qe18',
        type: "mcq",
        question: "In the shape pattern □, □□, □□□, □□□□, what would be the 6th shape?",
        options: ["□□□□□", "□□□□□□", "□□□□□□□", "□□□□□□□□"],
        correctAnswer: "□□□□□□",
        explanation: "The pattern adds one square each time. The 6th shape would have 6 squares.",
        wrongAnswerExplanations: {
            "□□□□□": "This has 5 squares, which would be the 5th shape, not the 6th.",
            "□□□□□□□": "This has 7 squares, which would be the 7th shape, not the 6th.",
            "□□□□□□□□": "This has 8 squares, which would be the 8th shape, not the 6th."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch10_t2_qe19',
        type: "mcq",
        question: "Look at the pattern: 1, 4, 9, 16, ___. What comes next?",
        options: ["20", "23", "25", "36"],
        correctAnswer: "25",
        explanation: "These are square numbers: 1=1², 4=2², 9=3², 16=4². The next square is 5²=25.",
        wrongAnswerExplanations: {
            "20": "Adding 4 gives 20, but these are square numbers, not adding a fixed amount.",
            "23": "Adding 7 gives 23, but these are square numbers, not adding a fixed amount.",
            "36": "36 is 6², which would skip 5² (25)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch10_t2_qe20',
        type: "mcq",
        question: "What observation helps you find the rule in a number pattern?",
        options: ["Only looking at colors", "Seeing how each number relates to the previous one", "Counting all numbers together", "Always adding 1"],
        correctAnswer: "Seeing how each number relates to the previous one",
        explanation: "Finding the relationship between consecutive numbers helps identify the pattern rule.",
        wrongAnswerExplanations: {
            "Only looking at colors": "Colors aren't typically part of number patterns.",
            "Counting all numbers together": "The sum doesn't usually help identify the pattern rule.",
            "Always adding 1": "Not all patterns involve adding 1; many follow different rules."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
