import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch9_t2_qm1',
        type: "mcq",
        question: "Which fraction is larger: 2/3 or 3/5?",
        options: ["2/3", "3/5", "Both are equal", "Cannot be compared"],
        correctAnswer: "2/3",
        explanation: "Converting to same denominator: 2/3 = 10/15 and 3/5 = 9/15, so 2/3 is larger. 📊",
        wrongAnswerExplanations: {
            "3/5": "When converted to the same denominator, 3/5 = 9/15 which is less than 2/3 = 10/15.",
            "Both are equal": "They are not equal; 2/3 is larger than 3/5.",
            "Cannot be compared": "Fractions can be compared by converting to a common denominator."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch9_t2_qm2',
        type: "mcq",
        question: "If you cut a pizza into 8 equal slices and eat 3 slices, what fraction of the pizza is left?",
        options: ["3/8", "5/8", "3/5", "8/5"],
        correctAnswer: "5/8",
        explanation: "After eating 3 out of 8 slices, 8-3=5 slices remain, so 5/8 of the pizza is left. 🍕",
        wrongAnswerExplanations: {
            "3/8": "3/8 is the fraction eaten, not what remains.",
            "3/5": "3/5 is not correct; the denominator must be 8 as the pizza has 8 slices.",
            "8/5": "8/5 is greater than 1, which cannot represent a remaining portion."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch9_t2_qm3',
        type: "mcq",
        question: "Which of these fractions is equivalent to 4/6?",
        options: ["2/3", "3/4", "6/8", "8/12"],
        correctAnswer: "2/3",
        explanation: "4/6 can be simplified by dividing both numbers by 2: 4÷2=2, 6÷2=3, so 4/6 = 2/3. ✂️",
        wrongAnswerExplanations: {
            "3/4": "3/4 = 9/12, which is not equal to 4/6 = 8/12.",
            "6/8": "6/8 = 3/4, which is not equal to 4/6 = 2/3.",
            "8/12": "8/12 = 2/3, but the question asks for the simplest equivalent form."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch9_t2_qm4',
        type: "mcq",
        question: "A watermelon is cut into 6 equal pieces. How many pieces make 2/3 of the watermelon?",
        options: ["2 pieces", "3 pieces", "4 pieces", "5 pieces"],
        correctAnswer: "4 pieces",
        explanation: "To find 2/3 of 6 pieces: 2/3 × 6 = 4 pieces. 🍉",
        wrongAnswerExplanations: {
            "2 pieces": "2 pieces would be 2/6 = 1/3 of the watermelon, not 2/3.",
            "3 pieces": "3 pieces would be 3/6 = 1/2 of the watermelon, not 2/3.",
            "5 pieces": "5 pieces would be 5/6 of the watermelon, not 2/3."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch9_t2_qm5',
        type: "mcq",
        question: "What is 1/2 of 1/2?",
        options: ["1/2", "1/4", "2/4", "1/1"],
        correctAnswer: "1/4",
        explanation: "To find 1/2 of 1/2, multiply: 1/2 × 1/2 = 1/4. 🧮",
        wrongAnswerExplanations: {
            "1/2": "1/2 is the original fraction, not half of it.",
            "2/4": "2/4 = 1/2, which is not half of 1/2.",
            "1/1": "1/1 = 1, which is twice 1/2, not half of it."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch9_t2_qm6',
        type: "mcq",
        question: "If 3/4 of the students in a class are present, what fraction is absent?",
        options: ["1/4", "1/3", "3/7", "1/2"],
        correctAnswer: "1/4",
        explanation: "If 3/4 are present, then 4/4 - 3/4 = 1/4 of the students are absent. 👨‍🎓",
        wrongAnswerExplanations: {
            "1/3": "1/3 is not correct; if 3/4 are present, then 1/4 are absent.",
            "3/7": "3/7 is not related to the given information.",
            "1/2": "1/2 is too large; if 3/4 are present, then only 1/4 are absent."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch9_t2_qm7',
        type: "mcq",
        question: "A rectangular garden is divided into 8 equal parts. If 5 parts are planted with flowers, what fraction is NOT planted with flowers?",
        options: ["5/8", "3/8", "5/3", "8/5"],
        correctAnswer: "3/8",
        explanation: "If 5/8 is planted, then 8/8 - 5/8 = 3/8 is not planted with flowers. 🌷",
        wrongAnswerExplanations: {
            "5/8": "5/8 is the fraction planted with flowers, not the unplanted portion.",
            "5/3": "5/3 is greater than 1, which cannot represent a portion of the whole garden.",
            "8/5": "8/5 is greater than 1, which cannot represent a portion of the whole garden."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch9_t2_qm8',
        type: "mcq",
        question: "In a class of 20 students, 1/4 are absent. How many students are present?",
        options: ["5 students", "15 students", "10 students", "4 students"],
        correctAnswer: "15 students",
        explanation: "If 1/4 are absent, then 3/4 are present: 3/4 × 20 = 15 students. 📚",
        wrongAnswerExplanations: {
            "5 students": "5 students is 1/4 of 20, which is the number absent, not present.",
            "10 students": "10 students is 1/2 of 20, not 3/4 of 20.",
            "4 students": "4 students is 1/5 of 20, not 3/4 of 20."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch9_t2_qm9',
        type: "mcq",
        question: "What is 3/4 + 1/4?",
        options: ["4/4", "4/8", "1", "3/2"],
        correctAnswer: "1",
        explanation: "3/4 + 1/4 = 4/4 = 1, meaning the whole quantity. 🔢",
        wrongAnswerExplanations: {
            "4/4": "While 4/4 is correct, it equals 1, which is the simplified answer.",
            "4/8": "4/8 = 1/2, which is not equal to 3/4 + 1/4 = 1.",
            "3/2": "3/2 = 1.5, which is greater than 3/4 + 1/4 = 1."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch9_t2_qm10',
        type: "mcq",
        question: "If 2/3 of a tank is filled with water, how much more needs to be filled to make it 5/6 full?",
        options: ["1/6", "1/3", "2/6", "3/6"],
        correctAnswer: "1/6",
        explanation: "Current: 2/3. Needed: 5/6. Difference: 5/6 - 2/3 = 5/6 - 4/6 = 1/6 more needed. 💧",
        wrongAnswerExplanations: {
            "1/3": "1/3 is too much; the difference between 5/6 and 2/3 is 1/6.",
            "2/6": "2/6 = 1/3, which is too much; the correct difference is 1/6.",
            "3/6": "3/6 = 1/2, which is too much; the correct difference is 1/6."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch9_t2_qm11',
        type: "mcq",
        question: "What fraction of a week is 3 days?",
        options: ["3/7", "1/2", "3/4", "2/7"],
        correctAnswer: "3/7",
        explanation: "A week has 7 days, so 3 days is 3/7 of a week. 📅",
        wrongAnswerExplanations: {
            "1/2": "Half a week is 3.5 days, not 3 days.",
            "3/4": "Three-quarters of a week is 5.25 days, not 3 days.",
            "2/7": "2/7 of a week is 2 days, not 3 days."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch9_t2_qm12',
        type: "mcq",
        question: "A cake recipe requires 3/4 cup of sugar. If you want to make half the recipe, how much sugar do you need?",
        options: ["3/8 cup", "1/2 cup", "6/4 cup", "1/4 cup"],
        correctAnswer: "3/8 cup",
        explanation: "For half the recipe, you need half of 3/4: 1/2 × 3/4 = 3/8 cup of sugar. 🧁",
        wrongAnswerExplanations: {
            "1/2 cup": "1/2 cup is not correct; half of 3/4 is 3/8, not 1/2.",
            "6/4 cup": "6/4 = 1.5 cups, which is twice 3/4, not half of it.",
            "1/4 cup": "1/4 cup is only 1/3 of 3/4, not half of it."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch9_t2_qm13',
        type: "mcq",
        question: "Which of these pairs of fractions are equivalent?",
        options: ["1/2 and 3/5", "2/5 and 4/10", "3/4 and 9/12", "1/3 and 4/9"],
        correctAnswer: "2/5 and 4/10",
        explanation: "2/5 = 4/10 because if we multiply both numbers in 2/5 by 2, we get 4/10. ⚖️",
        wrongAnswerExplanations: {
            "1/2 and 3/5": "These are not equivalent; 1/2 = 5/10 and 3/5 = 6/10.",
            "3/4 and 9/12": "While close, 3/4 = 9/12.",
            "1/3 and 4/9": "These are not equivalent; 1/3 = 3/9 and 4/9 is larger."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch9_t2_qm14',
        type: "mcq",
        question: "If 2/5 of the apples in a basket are red and 1/5 are green, what fraction are neither red nor green?",
        options: ["2/5", "3/5", "1/5", "0"],
        correctAnswer: "2/5",
        explanation: "Red: 2/5, Green: 1/5. Neither: 5/5 - (2/5 + 1/5) = 5/5 - 3/5 = 2/5. 🍎",
        wrongAnswerExplanations: {
            "3/5": "3/5 is the fraction that are either red or green, not neither.",
            "1/5": "1/5 is the fraction that are green, not the fraction that are neither red nor green.",
            "0": "0 would mean all apples are either red or green, which isn't the case."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch9_t2_qm15',
        type: "mcq",
        question: "Which fraction is closest to 1/2?",
        options: ["2/5", "4/10", "7/10", "3/10"],
        correctAnswer: "4/10",
        explanation: "4/10 = 0.4, which is closest to 1/2 = 0.5 compared to other options. 📏",
        wrongAnswerExplanations: {
            "2/5": "2/5 = 0.4, but 4/10 is equally close to 1/2.",
            "7/10": "7/10 = 0.7, which is 0.2 away from 1/2, while 4/10 is only 0.1 away.",
            "3/10": "3/10 = 0.3, which is 0.2 away from 1/2, while 4/10 is only 0.1 away."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch9_t2_qm16',
        type: "mcq",
        question: "If 3/8 of a ribbon is blue and 2/8 is red, what fraction is either blue or red?",
        options: ["5/8", "1/8", "5/16", "6/16"],
        correctAnswer: "5/8",
        explanation: "Blue: 3/8, Red: 2/8. Either blue or red: 3/8 + 2/8 = 5/8. 🎀",
        wrongAnswerExplanations: {
            "1/8": "1/8 is neither the blue nor red portion, nor their combination.",
            "5/16": "5/16 is not correct; the sum of 3/8 and 2/8 is 5/8, not 5/16.",
            "6/16": "6/16 = 3/8, which is just the blue portion, not both."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch9_t2_qm17',
        type: "mcq",
        question: "A pizza is cut into 8 equal slices. If Jane eats 2 slices and Tom eats 3 slices, what fraction of the pizza do they eat together?",
        options: ["5/8", "2/3", "1/2", "5/16"],
        correctAnswer: "5/8",
        explanation: "Jane: 2/8, Tom: 3/8. Together: 2/8 + 3/8 = 5/8 of the pizza. 🍕",
        wrongAnswerExplanations: {
            "2/3": "2/3 is not correct; they eat 5/8, not 2/3.",
            "1/2": "1/2 = 4/8, which is less than the 5/8 they eat together.",
            "5/16": "5/16 is less than 5/8; it would be if the pizza had 16 slices and they ate 5."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch9_t2_qm18',
        type: "mcq",
        question: "In a class of 24 students, what fraction represents 6 students?",
        options: ["1/6", "1/4", "6/24", "1/8"],
        correctAnswer: "1/4",
        explanation: "6 out of 24 students is 6/24 = 1/4 of the class. 👨‍👩‍👧‍👦",
        wrongAnswerExplanations: {
            "1/6": "1/6 of 24 would be 4 students, not 6.",
            "6/24": "While 6/24 is correct, it simplifies to 1/4.",
            "1/8": "1/8 of 24 would be 3 students, not 6."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch9_t2_qm19',
        type: "mcq",
        question: "A book has 40 pages. Ravi read 3/8 of the book. How many pages did he read?",
        options: ["10 pages", "15 pages", "20 pages", "5 pages"],
        correctAnswer: "15 pages",
        explanation: "3/8 of 40 pages = 3/8 × 40 = 15 pages. 📚",
        wrongAnswerExplanations: {
            "10 pages": "10 pages would be 1/4 of 40, not 3/8.",
            "20 pages": "20 pages would be 1/2 of 40, not 3/8.",
            "5 pages": "5 pages would be 1/8 of 40, not 3/8."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch9_t2_qm20',
        type: "mcq",
        question: "If you divide a circle into 6 equal parts, what fraction represents 4 parts?",
        options: ["2/3", "4/6", "1/4", "4/10"],
        correctAnswer: "2/3",
        explanation: "4 out of 6 equal parts is 4/6, which simplifies to 2/3. ⚪",
        wrongAnswerExplanations: {
            "4/6": "While 4/6 is correct, it simplifies to 2/3.",
            "1/4": "1/4 would represent 1 part out of 4 equal parts, not 4 out of 6.",
            "4/10": "4/10 = 2/5, which doesn't represent 4 parts out of 6."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];
