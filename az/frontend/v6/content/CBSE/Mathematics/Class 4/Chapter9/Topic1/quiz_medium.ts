import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch9_t1_qm1',
        type: "mcq",
        question: "If a ribbon is 3/4 meter long and another ribbon is 1/2 meter long, which ribbon is longer?",
        options: ["3/4 meter ribbon", "1/2 meter ribbon", "Both are the same length", "Can't be determined"],
        correctAnswer: "3/4 meter ribbon",
        explanation: "3/4 equals 0.75 meters while 1/2 equals 0.5 meters. Since 0.75 > 0.5, the 3/4 meter ribbon is longer. 📏",
        wrongAnswerExplanations: {
            "1/2 meter ribbon": "1/2 (0.5) is less than 3/4 (0.75).",
            "Both are the same length": "3/4 and 1/2 are different values (0.75 vs 0.5).",
            "Can't be determined": "We can compare fractions by converting to the same denominator or decimals."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch9_t1_qm2',
        type: "mcq",
        question: "What fraction of a day is 8 hours?",
        options: ["8/24", "1/3", "2/3", "1/8"],
        correctAnswer: "1/3",
        explanation: "8 hours out of 24 hours in a day equals 8/24, which simplifies to 1/3. ⏰",
        wrongAnswerExplanations: {
            "8/24": "This is correct but can be simplified to 1/3.",
            "2/3": "2/3 of a day would be 16 hours, not 8.",
            "1/8": "This would mean a day has 64 hours, which is incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch9_t1_qm3',
        type: "mcq",
        question: "Which fraction is equivalent to 3/6?",
        options: ["1/2", "2/4", "5/10", "All of these"],
        correctAnswer: "All of these",
        explanation: "All fractions simplify to 1/2 (divide both numbers by their greatest common factor). They represent the same value. 🧮",
        wrongAnswerExplanations: {
            "1/2": "This is correct, but it's not the only equivalent fraction.",
            "2/4": "This is correct, but it's not the only equivalent fraction.",
            "5/10": "This is correct, but it's not the only equivalent fraction."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch9_t1_qm4',
        type: "mcq",
        question: "If a square is divided into 9 equal parts and 5 parts are colored red, what fraction is NOT colored red?",
        options: ["5/9", "4/9", "5/4", "9/5"],
        correctAnswer: "4/9",
        explanation: "If 5/9 is colored red, then 4/9 is not colored red (5/9 + 4/9 = 9/9 = 1 whole). 🟥⬜",
        wrongAnswerExplanations: {
            "5/9": "5/9 represents the parts that ARE colored red.",
            "5/4": "This is not a proper fraction for this context as the numerator is larger than denominator.",
            "9/5": "This does not represent any part of the square in this context."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch9_t1_qm5',
        type: "mcq",
        question: "Maria ate 1/4 of a pizza and Tom ate 2/8 of the same pizza. Who ate more pizza?",
        options: ["Maria", "Tom", "They ate the same amount", "Cannot be determined"],
        correctAnswer: "They ate the same amount",
        explanation: "1/4 equals 2/8 when simplified. Both represent the same portion of the pizza. 🍕",
        wrongAnswerExplanations: {
            "Maria": "Maria ate 1/4 which equals 2/8, the same as Tom.",
            "Tom": "Tom ate 2/8 which equals 1/4, the same as Maria.",
            "Cannot be determined": "We can compare these fractions and find they're equal."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch9_t1_qm6',
        type: "mcq",
        question: "A chocolate bar is divided into 12 equal pieces. What fraction represents 3 pieces?",
        options: ["1/4", "3/12", "4/1", "1/3"],
        correctAnswer: "3/12",
        explanation: "3 pieces out of 12 total pieces gives us 3/12, which can be simplified to 1/4. 🍫",
        wrongAnswerExplanations: {
            "1/4": "While 3/12 simplifies to 1/4, the direct fraction from the scenario is 3/12.",
            "4/1": "This would be 4 whole chocolate bars, not a fraction of one.",
            "1/3": "1/3 would be 4 pieces out of 12, not 3 pieces."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch9_t1_qm7',
        type: "mcq",
        question: "If you arrange these fractions from smallest to largest, which order is correct?",
        options: ["1/2, 3/8, 5/8", "3/8, 1/2, 5/8", "5/8, 1/2, 3/8", "5/8, 3/8, 1/2"],
        correctAnswer: "3/8, 1/2, 5/8",
        explanation: "Converting to equivalent fractions: 3/8 = 3/8, 1/2 = 4/8, 5/8 = 5/8. So 3/8 < 4/8 < 5/8. 📊",
        wrongAnswerExplanations: {
            "1/2, 3/8, 5/8": "1/2 (4/8) is greater than 3/8, not smaller.",
            "5/8, 1/2, 3/8": "This is largest to smallest, not smallest to largest.",
            "5/8, 3/8, 1/2": "This is neither smallest to largest nor largest to smallest."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch9_t1_qm8',
        type: "mcq",
        question: "In a class of 24 students, 3/8 are boys. How many boys are in the class?",
        options: ["3", "8", "9", "12"],
        correctAnswer: "9",
        explanation: "3/8 of 24 = 3 × 24 ÷ 8 = 72 ÷ 8 = 9 boys. 👦",
        wrongAnswerExplanations: {
            "3": "This is just the numerator, not the calculation result.",
            "8": "This is just the denominator, not the calculation result.",
            "12": "This would be 1/2 of 24, not 3/8 of 24."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch9_t1_qm9',
        type: "mcq",
        question: "Which fraction is NOT equivalent to 2/3?",
        options: ["4/6", "6/9", "8/12", "3/6"],
        correctAnswer: "3/6",
        explanation: "3/6 simplifies to 1/2, which is not equal to 2/3. All other options simplify to 2/3. 🔢",
        wrongAnswerExplanations: {
            "4/6": "4/6 simplifies to 2/3, so it is equivalent.",
            "6/9": "6/9 simplifies to 2/3, so it is equivalent.",
            "8/12": "8/12 simplifies to 2/3, so it is equivalent."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch9_t1_qm10',
        type: "mcq",
        question: "If you color 2/5 of a picture blue and 2/5 of it green, what fraction remains uncolored?",
        options: ["4/5", "2/5", "1/5", "0"],
        correctAnswer: "1/5",
        explanation: "2/5 blue + 2/5 green = 4/5 colored. So 5/5 - 4/5 = 1/5 remains uncolored. 🎨",
        wrongAnswerExplanations: {
            "4/5": "4/5 is the colored portion, not the uncolored portion.",
            "2/5": "This is the fraction colored in each color, not what remains uncolored.",
            "0": "Some portion (1/5) remains uncolored, not 0."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch9_t1_qm11',
        type: "mcq",
        question: "A recipe calls for 3/4 cup of flour. If you want to make half the recipe, how much flour do you need?",
        options: ["3/8 cup", "6/4 cup", "1 1/2 cups", "1/4 cup"],
        correctAnswer: "3/8 cup",
        explanation: "Half of 3/4 cup is 3/8 cup (3/4 ÷ 2 = 3/8). 🧁",
        wrongAnswerExplanations: {
            "6/4 cup": "This is double the amount, not half.",
            "1 1/2 cups": "This is twice the amount, not half.",
            "1/4 cup": "1/4 cup is 1/3 of 3/4, not half."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch9_t1_qm12',
        type: "mcq",
        question: "Which visual correctly represents the fraction 2/3?",
        options: ["2 circles divided into 3 parts each", "3 circles with 2 shaded", "1 circle with 2 out of 3 equal parts shaded", "3 circles with 2 parts each"],
        correctAnswer: "1 circle with 2 out of 3 equal parts shaded",
        explanation: "2/3 means 2 parts out of 3 equal parts of one whole are shaded. 🔵",
        wrongAnswerExplanations: {
            "2 circles divided into 3 parts each": "This represents 2 wholes divided into parts, not a fraction of one whole.",
            "3 circles with 2 shaded": "This represents 2/3 of the total circles, but not the fraction 2/3 of one circle.",
            "3 circles with 2 parts each": "This doesn't represent any fraction clearly."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch9_t1_qm13',
        type: "mcq",
        question: "In a bag of 20 marbles, 1/4 are blue and 2/5 are red. How many marbles are neither blue nor red?",
        options: ["7", "5", "13", "3"],
        correctAnswer: "7",
        explanation: "Blue: 1/4 of 20 = 5. Red: 2/5 of 20 = 8. Neither: 20 - 5 - 8 = 7 marbles. 🔵🔴⚪",
        wrongAnswerExplanations: {
            "5": "This is only the number of blue marbles.",
            "13": "This is the total of blue and red marbles, not those that are neither.",
            "3": "This is not the correct calculation result."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch9_t1_qm14',
        type: "mcq",
        question: "If 1/6 of a number is 8, what is the number?",
        options: ["48", "24", "6/8", "1 1/3"],
        correctAnswer: "48",
        explanation: "If 1/6 of the number is 8, then the whole number is 6 × 8 = 48. 🧮",
        wrongAnswerExplanations: {
            "24": "This would make 1/6 of the number equal to 4, not 8.",
            "6/8": "This is the inverse of the relationship, not the answer.",
            "1 1/3": "This is not related to the given information."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch9_t1_qm15',
        type: "mcq",
        question: "A garden is rectangular with a length of 3/4 meter and width of 2/3 meter. What is its area?",
        options: ["5/7 square meters", "1/2 square meter", "6/7 square meter", "5/12 square meter"],
        correctAnswer: "1/2 square meter",
        explanation: "Area = length × width = 3/4 × 2/3 = 6/12 = 1/2 square meter. 🌱",
        wrongAnswerExplanations: {
            "5/7 square meters": "This is not the correct calculation result.",
            "6/7 square meter": "This is not the correct calculation result.",
            "5/12 square meter": "This is not the correct calculation result."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch9_t1_qm16',
        type: "mcq",
        question: "Which of these shows fractions in ascending order (smallest to largest)?",
        options: ["1/6, 1/3, 1/2", "1/2, 1/3, 1/6", "1/3, 1/6, 1/2", "1/6, 1/2, 1/3"],
        correctAnswer: "1/6, 1/3, 1/2",
        explanation: "Converting to equivalent fractions: 1/6 = 1/6, 1/3 = 2/6, 1/2 = 3/6. So 1/6 < 2/6 < 3/6. 📈",
        wrongAnswerExplanations: {
            "1/2, 1/3, 1/6": "This is descending (largest to smallest), not ascending.",
            "1/3, 1/6, 1/2": "1/6 is smaller than 1/3, so this order is incorrect.",
            "1/6, 1/2, 1/3": "1/3 is smaller than 1/2, so this order is incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch9_t1_qm17',
        type: "mcq",
        question: "Which fraction pair has the same difference as 3/4 - 1/2?",
        options: ["2/3 - 1/3", "7/8 - 5/8", "5/6 - 1/2", "1 - 3/4"],
        correctAnswer: "7/8 - 5/8",
        explanation: "3/4 - 1/2 = 3/4 - 2/4 = 1/4. Similarly, 7/8 - 5/8 = 2/8 = 1/4. Both differences equal 1/4. 🧮",
        wrongAnswerExplanations: {
            "2/3 - 1/3": "This equals 1/3, not 1/4.",
            "5/6 - 1/2": "This equals 5/6 - 3/6 = 2/6 = 1/3, not 1/4.",
            "1 - 3/4": "This equals 4/4 - 3/4 = 1/4, which is correct, but the question asks for a fraction pair."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch9_t1_qm18',
        type: "mcq",
        question: "A watermelon weighs 3 kg. If 2/3 of the watermelon is water, how much does the water in the watermelon weigh?",
        options: ["1 kg", "2 kg", "2/3 kg", "5 kg"],
        correctAnswer: "2 kg",
        explanation: "Weight of water = 2/3 of 3 kg = 2/3 × 3 = 2 kg. 🍉",
        wrongAnswerExplanations: {
            "1 kg": "1 kg would be 1/3 of the watermelon, not 2/3.",
            "2/3 kg": "This is just the fraction, not multiplied by the weight.",
            "5 kg": "This is greater than the total weight of the watermelon."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch9_t1_qm19',
        type: "mcq",
        question: "If 3/4 of the students in a class are present and 6 students are absent, how many students are in the class?",
        options: ["18", "24", "30", "36"],
        correctAnswer: "24",
        explanation: "If 3/4 are present, then 1/4 are absent. So 1/4 of the class = 6 students. The whole class = 6 × 4 = 24 students. 👨‍🎓",
        wrongAnswerExplanations: {
            "18": "This would make 1/4 of the class equal to 4.5 students, not 6.",
            "30": "This would make 1/4 of the class equal to 7.5 students, not 6.",
            "36": "This would make 1/4 of the class equal to 9 students, not 6."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch9_t1_qm20',
        type: "mcq",
        question: "A rectangle is divided into 8 equal squares. If 5 squares are painted yellow, what fraction of the rectangle is NOT yellow?",
        options: ["5/8", "3/8", "5/3", "8/5"],
        correctAnswer: "3/8",
        explanation: "5/8 is yellow, so 8/8 - 5/8 = 3/8 is not yellow. 🟨⬜",
        wrongAnswerExplanations: {
            "5/8": "5/8 represents the yellow part, not the non-yellow part.",
            "5/3": "This is not a proper representation of any part of the rectangle.",
            "8/5": "This is not a proper representation of any part of the rectangle."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];
