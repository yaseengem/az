import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch2_t1_qm1',
        type: "mcq",
        question: "If ⅔ of a pizza is divided equally among 4 people, what fraction of the whole pizza does each person get?",
        options: ["⅙", "⅛", "⅔", "⅜"],
        correctAnswer: "⅙",
        explanation: "⅔ ÷ 4 = ⅔ × ¼ = 2/12 = ⅙ of the whole pizza. 🍕",
        wrongAnswerExplanations: {
            "⅛": "Incorrect division - forgot to multiply by reciprocal.",
            "⅔": "This is the original fraction, not the divided portion.",
            "⅜": "Incorrect division and simplification."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t1_qm2',
        type: "mcq",
        question: "A recipe calls for 1½ cups of flour. If you want to make ⅔ of the recipe, how much flour do you need?",
        options: ["1 cup", "½ cup", "⅔ cup", "¾ cup"],
        correctAnswer: "1 cup",
        explanation: "1½ × ⅔ = 3/2 × 2/3 = 6/6 = 1 cup. 👩‍🍳",
        wrongAnswerExplanations: {
            "½ cup": "Incorrect multiplication of mixed number and fraction.",
            "⅔ cup": "This is the fraction of the recipe, not the amount of flour.",
            "¾ cup": "Incorrect multiplication and simplification."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t1_qm3',
        type: "mcq",
        question: "What is 0.125 × 0.8?",
        options: ["0.1", "0.01", "1.0", "0.001"],
        correctAnswer: "0.1",
        explanation: "125×8=1000, then place decimal point after 4 places (3+1). ✖️",
        wrongAnswerExplanations: {
            "0.01": "Incorrect multiplication and decimal placement.",
            "1.0": "Incorrect multiplication and decimal placement.",
            "0.001": "Incorrect multiplication and decimal placement."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t1_qm4',
        type: "mcq",
        question: "If a book is ¾ full and you read ⅔ of what's filled, what fraction of the whole book have you read?",
        options: ["½", "⅔", "¾", "⅛"],
        correctAnswer: "½",
        explanation: "¾ × ⅔ = 12/24 = ½ of the whole book. 📚",
        wrongAnswerExplanations: {
            "⅔": "This is the fraction read of the filled portion, not the whole book.",
            "¾": "This is the fraction filled, not the fraction read.",
            "⅛": "Incorrect multiplication and simplification."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t1_qm5',
        type: "mcq",
        question: "What is 2.5 ÷ 0.125?",
        options: ["20", "2", "0.2", "200"],
        correctAnswer: "20",
        explanation: "Move decimal points: 2500 ÷ 125 = 20. ➗",
        wrongAnswerExplanations: {
            "2": "Incorrect decimal point movement and division.",
            "0.2": "Incorrect decimal point movement and division.",
            "200": "Incorrect decimal point movement and division."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t1_qm6',
        type: "mcq",
        question: "If a tank is ⅝ full and you remove ⅖ of the water, what fraction of the tank is now filled?",
        options: ["⅜", "⅝", "⅖", "⅛"],
        correctAnswer: "⅜",
        explanation: "⅝ × (1 - ⅖) = ⅝ × ⅗ = 15/40 = ⅜. 🚰",
        wrongAnswerExplanations: {
            "⅝": "This is the original fraction, not after removal.",
            "⅖": "This is the fraction removed, not remaining.",
            "⅛": "Incorrect multiplication and simplification."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t1_qm7',
        type: "mcq",
        question: "What is 1.25 × 0.08?",
        options: ["0.1", "0.01", "1.0", "0.001"],
        correctAnswer: "0.1",
        explanation: "125×8=1000, then place decimal point after 4 places (2+2). ✖️",
        wrongAnswerExplanations: {
            "0.01": "Incorrect multiplication and decimal placement.",
            "1.0": "Incorrect multiplication and decimal placement.",
            "0.001": "Incorrect multiplication and decimal placement."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t1_qm8',
        type: "mcq",
        question: "If you have 2⅓ meters of ribbon and cut it into pieces that are ⅚ meters long, how many pieces can you make?",
        options: ["2 pieces", "3 pieces", "2⅓ pieces", "2⅚ pieces"],
        correctAnswer: "2 pieces",
        explanation: "2⅓ ÷ ⅚ = 7/3 ÷ 5/6 = 7/3 × 6/5 = 42/15 = 2.8, so 2 full pieces. 🎀",
        wrongAnswerExplanations: {
            "3 pieces": "Incorrect division and rounding.",
            "2⅓ pieces": "This is the original length, not the number of pieces.",
            "2⅚ pieces": "Incorrect division and simplification."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t1_qm9',
        type: "mcq",
        question: "What is 0.375 ÷ 0.125?",
        options: ["3", "0.3", "30", "0.03"],
        correctAnswer: "3",
        explanation: "Move decimal points: 375 ÷ 125 = 3. ➗",
        wrongAnswerExplanations: {
            "0.3": "Incorrect decimal point movement.",
            "30": "Incorrect decimal point movement.",
            "0.03": "Incorrect decimal point movement."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t1_qm10',
        type: "mcq",
        question: "If a recipe requires 1¼ cups of sugar and you want to make 1½ times the recipe, how much sugar do you need?",
        options: ["1⅞ cups", "2 cups", "1½ cups", "1¾ cups"],
        correctAnswer: "1⅞ cups",
        explanation: "1¼ × 1½ = 5/4 × 3/2 = 15/8 = 1⅞ cups. 👩‍🍳",
        wrongAnswerExplanations: {
            "2 cups": "Incorrect multiplication of mixed numbers.",
            "1½ cups": "This is the multiplier, not the amount needed.",
            "1¾ cups": "Incorrect multiplication and simplification."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t1_qm11',
        type: "mcq",
        question: "What is 0.625 × 0.16?",
        options: ["0.1", "0.01", "1.0", "0.001"],
        correctAnswer: "0.1",
        explanation: "625×16=10000, then place decimal point after 5 places (3+2). ✖️",
        wrongAnswerExplanations: {
            "0.01": "Incorrect multiplication and decimal placement.",
            "1.0": "Incorrect multiplication and decimal placement.",
            "0.001": "Incorrect multiplication and decimal placement."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t1_qm12',
        type: "mcq",
        question: "If a tank is ⅔ full and you add ½ of its current capacity, what fraction of the tank is now filled?",
        options: ["1⅙", "⅔", "½", "⅚"],
        correctAnswer: "1⅙",
        explanation: "⅔ + (½ × ⅔) = ⅔ + ⅓ = 1⅙. 🚰",
        wrongAnswerExplanations: {
            "⅔": "This is the original fraction, not after addition.",
            "½": "This is the fraction added, not the total.",
            "⅚": "Incorrect addition of fractions."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t1_qm13',
        type: "mcq",
        question: "What is 1.6 ÷ 0.32?",
        options: ["5", "0.5", "50", "0.05"],
        correctAnswer: "5",
        explanation: "Move decimal points: 160 ÷ 32 = 5. ➗",
        wrongAnswerExplanations: {
            "0.5": "Incorrect decimal point movement.",
            "50": "Incorrect decimal point movement.",
            "0.05": "Incorrect decimal point movement."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t1_qm14',
        type: "mcq",
        question: "If you have 3¾ meters of fabric and need 1⅛ meters for each project, how many complete projects can you make?",
        options: ["3 projects", "4 projects", "3⅓ projects", "3½ projects"],
        correctAnswer: "3 projects",
        explanation: "3¾ ÷ 1⅛ = 15/4 ÷ 9/8 = 15/4 × 8/9 = 120/36 = 3.33, so 3 complete projects. 🧵",
        wrongAnswerExplanations: {
            "4 projects": "Incorrect division and rounding.",
            "3⅓ projects": "This is the exact number, not complete projects.",
            "3½ projects": "Incorrect division and simplification."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t1_qm15',
        type: "mcq",
        question: "What is 0.875 × 0.24?",
        options: ["0.21", "0.021", "2.1", "0.0021"],
        correctAnswer: "0.21",
        explanation: "875×24=21000, then place decimal point after 5 places (3+2). ✖️",
        wrongAnswerExplanations: {
            "0.021": "Incorrect multiplication and decimal placement.",
            "2.1": "Incorrect multiplication and decimal placement.",
            "0.0021": "Incorrect multiplication and decimal placement."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t1_qm16',
        type: "mcq",
        question: "If a recipe needs 2⅔ cups of flour and you want to make ¾ of the recipe, how much flour do you need?",
        options: ["2 cups", "1½ cups", "2 cups", "1¾ cups"],
        correctAnswer: "2 cups",
        explanation: "2⅔ × ¾ = 8/3 × 3/4 = 24/12 = 2 cups. 👩‍🍳",
        wrongAnswerExplanations: {
            "1½ cups": "Incorrect multiplication of mixed number and fraction.",
            "2 cups": "This is the original amount, not the reduced amount.",
            "1¾ cups": "Incorrect multiplication and simplification."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t1_qm17',
        type: "mcq",
        question: "What is 0.75 ÷ 0.15?",
        options: ["5", "0.5", "50", "0.05"],
        correctAnswer: "5",
        explanation: "Move decimal points: 75 ÷ 15 = 5. ➗",
        wrongAnswerExplanations: {
            "0.5": "Incorrect decimal point movement.",
            "50": "Incorrect decimal point movement.",
            "0.05": "Incorrect decimal point movement."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t1_qm18',
        type: "mcq",
        question: "If a tank is ⅗ full and you remove ¼ of the water, what fraction of the tank is now filled?",
        options: ["9/20", "⅗", "¼", "⅛"],
        correctAnswer: "9/20",
        explanation: "⅗ × (1 - ¼) = ⅗ × ¾ = 9/20. 🚰",
        wrongAnswerExplanations: {
            "⅗": "This is the original fraction, not after removal.",
            "¼": "This is the fraction removed, not remaining.",
            "⅛": "Incorrect multiplication and simplification."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t1_qm19',
        type: "mcq",
        question: "What is 1.125 × 0.32?",
        options: ["0.36", "0.036", "3.6", "0.0036"],
        correctAnswer: "0.36",
        explanation: "1125×32=36000, then place decimal point after 5 places (3+2). ✖️",
        wrongAnswerExplanations: {
            "0.036": "Incorrect multiplication and decimal placement.",
            "3.6": "Incorrect multiplication and decimal placement.",
            "0.0036": "Incorrect multiplication and decimal placement."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t1_qm20',
        type: "mcq",
        question: "If you have 4½ liters of juice and pour it into glasses that hold ⅜ liter each, how many full glasses can you fill?",
        options: ["12 glasses", "11 glasses", "12½ glasses", "13 glasses"],
        correctAnswer: "12 glasses",
        explanation: "4½ ÷ ⅜ = 9/2 ÷ 3/8 = 9/2 × 8/3 = 72/6 = 12 glasses. 🥤",
        wrongAnswerExplanations: {
            "11 glasses": "Incorrect division and rounding.",
            "12½ glasses": "This is the exact number, not full glasses.",
            "13 glasses": "Incorrect division and rounding."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 