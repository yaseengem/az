import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch1_t1_qe1',
        type: "mcq",
        question: "What shape do most common bricks have?",
        options: ["Cube", "Rectangle", "Cylinder", "Sphere"],
        correctAnswer: "Rectangle",
        explanation: "Most common bricks are rectangular in shape, like a rectangular prism or cuboid. This shape makes them easy to stack in various patterns. 🧱",
        wrongAnswerExplanations: {
            "Cube": "Bricks are typically longer than they are wide or tall, making them rectangular rather than cubic.",
            "Cylinder": "Bricks are not round; they have flat surfaces and straight edges.",
            "Sphere": "Bricks have flat surfaces and straight edges, not rounded like a sphere."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch1_t1_qe2',
        type: "mcq",
        question: "In a brick wall pattern, the arrangement where bricks in one row overlap the joints of bricks in the row below is called:",
        options: ["Running bond", "Random pattern", "Herringbone pattern", "Stack bond"],
        correctAnswer: "Running bond",
        explanation: "The running bond pattern is where each row's bricks overlap the joints of the row below, creating a strong, stable wall structure. It's the most common brick pattern. 🧱",
        wrongAnswerExplanations: {
            "Random pattern": "A random pattern does not follow a specific arrangement rule like the running bond.",
            "Herringbone pattern": "Herringbone is a V-shaped pattern, not the basic overlapping joint pattern.",
            "Stack bond": "Stack bond aligns bricks directly on top of each other, with joints also aligned, not overlapping."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch1_t1_qe3',
        type: "mcq",
        question: "If a row has 10 bricks and you want to create a pattern where each new row has 2 more bricks than the previous row, how many bricks will be in the 3rd row?",
        options: ["12", "14", "16", "18"],
        correctAnswer: "14",
        explanation: "Starting with 10 bricks, the 2nd row has 10+2=12 bricks, and the 3rd row has 12+2=14 bricks. The pattern increases by 2 each time.",
        wrongAnswerExplanations: {
            "12": "12 bricks would be in the 2nd row, not the 3rd row.",
            "16": "16 bricks would be in the 4th row (10→12→14→16).",
            "18": "18 bricks would be in the 5th row (10→12→14→16→18)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl4_ch1_t1_qe4',
        type: "mcq",
        question: "Which of these is an example of a repeating pattern that could be made with bricks?",
        options: ["Red, blue, red, blue, red, blue", "Red, red, blue, red, blue, green", "Red, blue, green, orange, purple", "Red, red, red, blue, blue, blue"],
        correctAnswer: "Red, blue, red, blue, red, blue",
        explanation: "The pattern red, blue, red, blue... is a simple repeating pattern with a unit that repeats (red, blue). Repeating patterns have a predictable sequence that continues. 🔄",
        wrongAnswerExplanations: {
            "Red, red, blue, red, blue, green": "This is not a repeating pattern as there is no clear unit that repeats throughout.",
            "Red, blue, green, orange, purple": "This shows no repetition; each color appears just once.",
            "Red, red, red, blue, blue, blue": "While this has repetition, it's not a clear repeating pattern unless the sequence continues with red, red, red, blue, blue, blue again."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch1_t1_qe5',
        type: "mcq",
        question: "How many bricks would you need to build a wall that is 5 bricks long and 3 bricks high?",
        options: ["8", "15", "12", "18"],
        correctAnswer: "15",
        explanation: "To find the total number of bricks, multiply the length by the height: 5 × 3 = 15 bricks. This is a rectangular array of bricks with 5 columns and 3 rows.",
        wrongAnswerExplanations: {
            "8": "This is less than the correct answer. 8 bricks would not be enough to create a 5×3 grid.",
            "12": "This would be enough for a wall that is 4 bricks long and 3 bricks high (4×3=12).",
            "18": "This is more than needed. 18 bricks would build a 6×3 grid (6×3=18)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch1_t1_qe6',
        type: "mcq",
        question: "In a brick pattern where red and yellow bricks alternate (red, yellow, red, yellow...), if you have 20 bricks in total with equal numbers of each color, how many red bricks do you have?",
        options: ["5", "10", "15", "20"],
        correctAnswer: "10",
        explanation: "If red and yellow bricks are equal in number and there are 20 total, then half are red: 20 ÷ 2 = 10 red bricks. The pattern would have 10 red and 10 yellow bricks.",
        wrongAnswerExplanations: {
            "5": "5 red bricks would mean only 5 out of 20 bricks are red, which doesn't match the condition of equal numbers.",
            "15": "15 red bricks would mean 15 out of 20 bricks are red, which doesn't match the condition of equal numbers.",
            "20": "If all 20 bricks were red, there would be no yellow bricks, contradicting the alternating pattern."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl4_ch1_t1_qe7',
        type: "mcq",
        question: "If a brick wall follows the pattern: red, red, blue, red, red, blue..., how many blue bricks would you need for a wall with 18 bricks in total?",
        options: ["3", "6", "9", "12"],
        correctAnswer: "6",
        explanation: "In this pattern, 2 out of every 3 bricks are red, and 1 out of 3 is blue. For 18 bricks: 18 ÷ 3 = 6 groups, so there are 6 blue bricks. 🧮",
        wrongAnswerExplanations: {
            "3": "This would be the number of blue bricks in 9 total bricks (9 ÷ 3 = 3 groups).",
            "9": "This would mean half the bricks are blue, which doesn't match the pattern of 1 blue brick for every 3 bricks.",
            "12": "This would mean two-thirds of the bricks are blue, which contradicts the given pattern."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl4_ch1_t1_qe8',
        type: "mcq",
        question: "What comes next in this brick pattern: square, triangle, circle, square, triangle, circle, square, ___?",
        options: ["Square", "Triangle", "Circle", "Rectangle"],
        correctAnswer: "Triangle",
        explanation: "The pattern square, triangle, circle repeats. After square, triangle comes next. Repeating patterns continue the same sequence over and over. 🔄",
        wrongAnswerExplanations: {
            "Square": "Square would come after circle, not after square.",
            "Circle": "Circle would come after triangle, not after square.",
            "Rectangle": "Rectangle is not part of the established pattern of square, triangle, circle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch1_t1_qe9',
        type: "mcq",
        question: "A brick wall has a pattern that starts with 2 bricks in the first row, then 4 bricks in the second row, then 6 bricks in the third row. Following this pattern, how many bricks will be in the 5th row?",
        options: ["8", "10", "12", "14"],
        correctAnswer: "10",
        explanation: "The pattern increases by 2 bricks each row: 2, 4, 6, 8, 10. So the 5th row will have 10 bricks. This is an arithmetic sequence with a common difference of 2.",
        wrongAnswerExplanations: {
            "8": "8 bricks would be in the 4th row, not the 5th row.",
            "12": "12 bricks would be in the 6th row (2, 4, 6, 8, 10, 12).",
            "14": "14 bricks would be in the 7th row (2, 4, 6, 8, 10, 12, 14)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl4_ch1_t1_qe10',
        type: "mcq",
        question: "When bricks are arranged in a zigzag pattern, what shape does it most resemble?",
        options: ["Circle", "Straight line", "Wave", "Triangle"],
        correctAnswer: "Wave",
        explanation: "A zigzag pattern of bricks resembles a wave, with the bricks creating an up-and-down or side-to-side pattern similar to wave movement. 〰️",
        wrongAnswerExplanations: {
            "Circle": "A zigzag doesn't form a closed loop like a circle.",
            "Straight line": "A zigzag pattern has angles and changes direction, unlike a straight line.",
            "Triangle": "While zigzags have angles, they typically don't form complete triangles."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch1_t1_qe11',
        type: "mcq",
        question: "If you arrange 12 bricks in 3 equal rows, how many bricks will be in each row?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4",
        explanation: "To find bricks per row, divide total bricks by number of rows: 12 ÷ 3 = 4 bricks in each row. This creates a 3×4 rectangular arrangement.",
        wrongAnswerExplanations: {
            "3": "If each row had 3 bricks, there would be 9 bricks total (3×3=9), not 12.",
            "5": "If each row had 5 bricks, there would be 15 bricks total (3×5=15), not 12.",
            "6": "If each row had 6 bricks, there would be 18 bricks total (3×6=18), not 12."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch1_t1_qe12',
        type: "mcq",
        question: "In a pattern, red and blue bricks alternate in each row. If row 1 starts with red, row 2 starts with blue, and so on, what color will row 5 start with?",
        options: ["Red", "Blue", "Either red or blue", "Cannot be determined"],
        correctAnswer: "Red",
        explanation: "Odd-numbered rows start with red, even-numbered rows start with blue. Row 5 is odd, so it starts with red. The pattern alternates the starting color for each row. 🔄",
        wrongAnswerExplanations: {
            "Blue": "Blue starts even-numbered rows (2, 4, 6...), not odd-numbered rows like row 5.",
            "Either red or blue": "The pattern is deterministic, not random.",
            "Cannot be determined": "There is enough information to determine the pattern."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl4_ch1_t1_qe13',
        type: "mcq",
        question: "How many square-shaped bricks would you need to build a solid square that is 3 bricks on each side?",
        options: ["6", "9", "12", "27"],
        correctAnswer: "9",
        explanation: "A solid square with 3 bricks on each side forms a 3×3 grid, which needs 3×3=9 bricks. This creates a flat square pattern. 🟧",
        wrongAnswerExplanations: {
            "6": "6 bricks would not be enough to create a 3×3 square.",
            "12": "12 bricks would be too many for a 3×3a square but could make a 3×4 rectangle.",
            "27": "27 bricks would make a 3×3×3 cube, not a flat square."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch1_t1_qe14',
        type: "mcq",
        question: "What is the most common way to arrange bricks in a strong wall?",
        options: ["Stacking them directly on top of each other", "Placing them in zigzag lines", "Overlapping the joints", "Random arrangement"],
        correctAnswer: "Overlapping the joints",
        explanation: "Overlapping the joints (called running bond) is the strongest way to build a brick wall because it prevents continuous vertical joints that would weaken the structure. 🧱",
        wrongAnswerExplanations: {
            "Stacking them directly on top of each other": "This creates vertical joints that weaken the wall structure.",
            "Placing them in zigzag lines": "This is not a standard brick-laying technique for strong walls.",
            "Random arrangement": "Random arrangements may create weak points and are not standard practice."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch1_t1_qe15',
        type: "mcq",
        question: "A brick wall pattern starts with 1 brick in the first row, then 3 bricks in the second row, then 5 bricks in the third row. This is an example of what type of pattern?",
        options: ["Even number pattern", "Odd number pattern", "Random pattern", "Decreasing pattern"],
        correctAnswer: "Odd number pattern",
        explanation: "The pattern follows consecutive odd numbers: 1, 3, 5, which would continue as 7, 9, etc. Each row increases by 2 bricks, always resulting in an odd number. 🔢",
        wrongAnswerExplanations: {
            "Even number pattern": "Even numbers are 2, 4, 6, etc. The pattern shows 1, 3, 5, which are odd numbers.",
            "Random pattern": "The pattern has a clear structure (consecutive odd numbers), not random.",
            "Decreasing pattern": "The number of bricks is increasing with each row, not decreasing."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl4_ch1_t1_qe16',
        type: "mcq",
        question: "If a brick pattern has 3 red bricks, then 2 yellow bricks, then 3 red bricks again, what type of pattern is this?",
        options: ["Growing pattern", "Repeating pattern", "Shrinking pattern", "Random pattern"],
        correctAnswer: "Repeating pattern",
        explanation: "This is a repeating pattern because the sequence (3 red, 2 yellow) repeats. Repeating patterns have a fixed unit that occurs again and again. 🔄",
        wrongAnswerExplanations: {
            "Growing pattern": "A growing pattern would increase in some way, but this pattern maintains the same sequence.",
            "Shrinking pattern": "A shrinking pattern would decrease in some way, but this pattern maintains the same sequence.",
            "Random pattern": "The pattern follows a clear rule, not random placement."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch1_t1_qe17',
        type: "mcq",
        question: "In a brick pattern that goes red, blue, green, red, blue, green..., what is the 10th brick's color?",
        options: ["Red", "Blue", "Green", "Yellow"],
        correctAnswer: "Green",
        explanation: "The pattern repeats every 3 bricks. For the 10th brick: 10 ÷ 3 = 3 remainder 1. Counting from the start of a new cycle: red (1st), blue (2nd), green (3rd), so the 10th is green. 🟩",
        wrongAnswerExplanations: {
            "Red": "Red bricks are positions 1, 4, 7, 10... The 10th brick would be red only if the pattern started counting from 0.",
            "Blue": "Blue bricks are positions 2, 5, 8, 11... in this pattern.",
            "Yellow": "Yellow is not part of the given pattern of red, blue, green."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch1_t1_qe18',
        type: "mcq",
        question: "A wall has 4 rows of bricks. If each row has 6 bricks, how many bricks are in the entire wall?",
        options: ["10", "18", "24", "30"],
        correctAnswer: "24",
        explanation: "To find the total number of bricks, multiply rows by bricks per row: 4 × 6 = 24 bricks. This is a rectangular array with 4 rows and 6 columns.",
        wrongAnswerExplanations: {
            "10": "This is too few bricks for a 4×6 wall.",
            "18": "This would be enough for a 3×6 wall (3×6=18), not a 4×6 wall.",
            "30": "This would be enough for a 5×6 wall (5×6=30), not a 4×6 wall."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch1_t1_qe19',
        type: "mcq",
        question: "Which of these patterns would require the same number of red and blue bricks?",
        options: ["Red, red, blue, red, red, blue", "Red, blue, red, blue, red, blue", "Red, red, blue, blue, blue", "Red, blue, blue, red, blue, blue"],
        correctAnswer: "Red, blue, red, blue, red, blue",
        explanation: "In the pattern red, blue, red, blue, red, blue there are 3 red and 3 blue bricks, making them equal. The alternating pattern ensures each color appears the same number of times. 🔴🔵",
        wrongAnswerExplanations: {
            "Red, red, blue, red, red, blue": "This pattern has 4 red bricks and 2 blue bricks, so they're not equal.",
            "Red, red, blue, blue, blue": "This pattern has 2 red bricks and 3 blue bricks, so they're not equal.",
            "Red, blue, blue, red, blue, blue": "This pattern has 2 red bricks and 4 blue bricks, so they're not equal."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl4_ch1_t1_qe20',
        type: "mcq",
        question: "If a staircase pattern with bricks has 1 brick in the first step, 2 bricks in the second step, 3 bricks in the third step, and continues this pattern, how many bricks would be in the 6th step?",
        options: ["5", "6", "7", "8"],
        correctAnswer: "6",
        explanation: "The pattern follows the counting numbers: 1, 2, 3, 4, 5, 6... The number of bricks in each step equals the step number. So the 6th step has 6 bricks. 🧱",
        wrongAnswerExplanations: {
            "5": "The 5th step would have 5 bricks, not the 6th step.",
            "7": "The 7th step would have 7 bricks, not the 6th step.",
            "8": "This doesn't follow the established pattern where each step number matches its brick count."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    }
];