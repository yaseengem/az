import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch9_t2_qe1',
        type: "mcq",
        question: "What fraction represents half of a whole?",
        options: ["1/4", "1/2", "3/4", "2/2"],
        correctAnswer: "1/2",
        explanation: "Half means dividing into 2 equal parts and taking 1 part, which is written as 1/2. 🍕",
        wrongAnswerExplanations: {
            "1/4": "1/4 represents one-quarter, which is smaller than half.",
            "3/4": "3/4 represents three-quarters, which is larger than half.",
            "2/2": "2/2 equals 1, which is a whole, not half."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t2_qe2',
        type: "mcq",
        question: "If a pizza is divided into 4 equal slices, what fraction represents one slice?",
        options: ["1/2", "1/3", "1/4", "1/5"],
        correctAnswer: "1/4",
        explanation: "When divided into 4 equal parts, each part is one-quarter (1/4) of the whole pizza. 🍕",
        wrongAnswerExplanations: {
            "1/2": "1/2 would be if the pizza was cut into 2 equal slices, not 4.",
            "1/3": "1/3 would be if the pizza was cut into 3 equal slices, not 4.",
            "1/5": "1/5 would be if the pizza was cut into 5 equal slices, not 4."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t2_qe3',
        type: "mcq",
        question: "Which fraction shows three-quarters of a whole?",
        options: ["1/4", "2/4", "3/4", "4/4"],
        correctAnswer: "3/4",
        explanation: "Three-quarters means 3 parts out of 4 equal parts, which is written as 3/4. 🥧",
        wrongAnswerExplanations: {
            "1/4": "1/4 represents one-quarter, not three-quarters.",
            "2/4": "2/4 represents two-quarters, which equals 1/2, not three-quarters.",
            "4/4": "4/4 equals 1, which is the whole, not three-quarters."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t2_qe4',
        type: "mcq",
        question: "What fraction of a square is shaded if 1 out of 2 equal parts is colored?",
        options: ["1/2", "1/4", "2/2", "0/2"],
        correctAnswer: "1/2",
        explanation: "If 1 part out of 2 equal parts is shaded, the fraction is 1/2 or one-half. 🟦",
        wrongAnswerExplanations: {
            "1/4": "1/4 would be if 1 out of 4 equal parts was shaded, not 1 out of 2.",
            "2/2": "2/2 would be if all parts were shaded, not just 1 out of 2.",
            "0/2": "0/2 would mean no parts are shaded, not 1 out of 2."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t2_qe5',
        type: "mcq",
        question: "If a rectangle is divided into 3 equal parts and 2 parts are colored, what fraction is colored?",
        options: ["1/3", "2/3", "3/3", "1/2"],
        correctAnswer: "2/3",
        explanation: "If 2 out of 3 equal parts are colored, the fraction is 2/3 or two-thirds. 📊",
        wrongAnswerExplanations: {
            "1/3": "1/3 would be if only 1 part out of 3 was colored.",
            "3/3": "3/3 would be if all parts were colored, which equals the whole.",
            "1/2": "1/2 would be if 1 out of 2 equal parts was colored, not 2 out of 3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t2_qe6',
        type: "mcq",
        question: "Which fraction is equal to 2/4?",
        options: ["1/2", "1/4", "3/4", "4/2"],
        correctAnswer: "1/2",
        explanation: "2/4 can be simplified by dividing both numbers by 2: 2÷2=1 and 4÷2=2, giving 1/2. 🔢",
        wrongAnswerExplanations: {
            "1/4": "1/4 is half of 2/4, not equal to it.",
            "3/4": "3/4 is larger than 2/4, not equal to it.",
            "4/2": "4/2 equals 2, which is not equal to 2/4 (which is 0.5)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t2_qe7',
        type: "mcq",
        question: "If you eat 1/4 of a chocolate bar, what fraction of the bar is left?",
        options: ["1/4", "2/4", "3/4", "4/4"],
        correctAnswer: "3/4",
        explanation: "If you eat 1/4, then 4/4 - 1/4 = 3/4 of the chocolate bar remains. 🍫",
        wrongAnswerExplanations: {
            "1/4": "1/4 is what was eaten, not what remains.",
            "2/4": "2/4 (or 1/2) is not correct; 3/4 of the bar remains.",
            "4/4": "4/4 equals the whole bar, not what remains after eating 1/4."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t2_qe8',
        type: "mcq",
        question: "Which picture represents 1/4?",
        options: ["A circle with 1 out of 2 parts shaded", "A circle with 1 out of 4 parts shaded", "A circle with 2 out of 4 parts shaded", "A circle with 3 out of 4 parts shaded"],
        correctAnswer: "A circle with 1 out of 4 parts shaded",
        explanation: "1/4 means 1 part out of 4 equal parts, so a circle with 1 out of 4 parts shaded shows 1/4. ⚪",
        wrongAnswerExplanations: {
            "A circle with 1 out of 2 parts shaded": "This represents 1/2, not 1/4.",
            "A circle with 2 out of 4 parts shaded": "This represents 2/4, which equals 1/2, not 1/4.",
            "A circle with 3 out of 4 parts shaded": "This represents 3/4, not 1/4."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t2_qe9',
        type: "mcq",
        question: "If a cake is cut into 8 equal pieces and you take 4 pieces, what fraction of the cake did you take?",
        options: ["1/8", "4/8", "1/2", "8/4"],
        correctAnswer: "4/8",
        explanation: "Taking 4 out of 8 equal pieces means you took 4/8 of the cake, which also equals 1/2. 🎂",
        wrongAnswerExplanations: {
            "1/8": "1/8 would be if you took only 1 piece out of 8, not 4 pieces.",
            "1/2": "While 4/8 equals 1/2, the direct fraction from the problem is 4/8.",
            "8/4": "8/4 equals 2, which means taking two whole cakes, not a fraction of one."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t2_qe10',
        type: "mcq",
        question: "Which fraction is bigger: 1/2 or 1/4?",
        options: ["1/2", "1/4", "Both are equal", "Can't be determined"],
        correctAnswer: "1/2",
        explanation: "1/2 means 1 part out of 2, while 1/4 means 1 part out of 4. Since 1/2 = 2/4, it's bigger than 1/4. 📏",
        wrongAnswerExplanations: {
            "1/4": "1/4 is smaller than 1/2 because 1/2 = 2/4, which is twice as much as 1/4.",
            "Both are equal": "They are not equal; 1/2 is larger than 1/4.",
            "Can't be determined": "We can determine that 1/2 is larger than 1/4."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t2_qe11',
        type: "mcq",
        question: "What fraction of a day is 6 hours?",
        options: ["1/6", "1/4", "1/2", "2/3"],
        correctAnswer: "1/4",
        explanation: "A day has 24 hours. 6 hours is 6/24 = 1/4 of a day. 🕒",
        wrongAnswerExplanations: {
            "1/6": "This isn't correct. 1/6 of 24 hours would be 4 hours, not 6 hours.",
            "1/2": "Half a day is 12 hours, not 6 hours.",
            "2/3": "Two-thirds of 24 hours is 16 hours, not 6 hours."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t2_qe12',
        type: "mcq",
        question: "If you fold a square paper in half, what fraction of the original square is each part?",
        options: ["1/2", "1/4", "2/1", "1/1"],
        correctAnswer: "1/2",
        explanation: "Folding once creates 2 equal parts, so each part is 1/2 of the original square. 📄",
        wrongAnswerExplanations: {
            "1/4": "1/4 would be if you folded the paper twice, creating 4 equal parts.",
            "2/1": "2/1 equals 2, which doesn't represent a part of the whole.",
            "1/1": "1/1 equals 1, which represents the whole square, not a part of it."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t2_qe13',
        type: "mcq",
        question: "Which fraction is NOT equivalent to 1/2?",
        options: ["2/4", "3/6", "4/8", "2/5"],
        correctAnswer: "2/5",
        explanation: "To be equal to 1/2, numerator must be exactly half of denominator. 2 is not half of 5. 🔢",
        wrongAnswerExplanations: {
            "2/4": "2/4 equals 1/2 because 2 is half of 4.",
            "3/6": "3/6 equals 1/2 because 3 is half of 6.",
            "4/8": "4/8 equals 1/2 because 4 is half of 8."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t2_qe14',
        type: "mcq",
        question: "If a ribbon is 8 meters long and you use 2 meters, what fraction of the ribbon did you use?",
        options: ["1/4", "1/8", "2/8", "1/2"],
        correctAnswer: "2/8",
        explanation: "Using 2 meters out of 8 meters means you used 2/8 of the ribbon, which equals 1/4. 🎀",
        wrongAnswerExplanations: {
            "1/4": "While 2/8 simplifies to 1/4, the direct fraction from the problem is 2/8.",
            "1/8": "1/8 would be if you used 1 meter out of 8, not 2 meters.",
            "1/2": "1/2 would be if you used 4 meters out of 8, not 2 meters."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t2_qe15',
        type: "mcq",
        question: "Which fraction shows one-fourth of 12 apples?",
        options: ["3/12", "4/12", "3 apples", "4 apples"],
        correctAnswer: "3 apples",
        explanation: "One-fourth of 12 apples is 12 ÷ 4 = 3 apples. 🍎",
        wrongAnswerExplanations: {
            "3/12": "3/12 is a fraction of the whole, not the number of apples.",
            "4/12": "4/12 is one-third of 12, not one-fourth.",
            "4 apples": "4 apples is one-third of 12, not one-fourth."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t2_qe16',
        type: "mcq",
        question: "Which fraction of an hour is 15 minutes?",
        options: ["1/4", "1/2", "1/3", "2/4"],
        correctAnswer: "1/4",
        explanation: "An hour has 60 minutes, so 15 minutes is 15/60 = 1/4 of an hour. ⏰",
        wrongAnswerExplanations: {
            "1/2": "Half an hour is 30 minutes, not 15 minutes.",
            "1/3": "One-third of an hour is 20 minutes, not 15 minutes.",
            "2/4": "2/4 equals 1/2, which is 30 minutes, not 15 minutes."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t2_qe17',
        type: "mcq",
        question: "If 3/4 of a glass is filled with water, what fraction of the glass is empty?",
        options: ["1/4", "2/4", "3/4", "4/4"],
        correctAnswer: "1/4",
        explanation: "If 3/4 is filled, then 4/4 - 3/4 = 1/4 of the glass is empty. 🥛",
        wrongAnswerExplanations: {
            "2/4": "If 3/4 is filled, then more than 1/4 is empty, which is incorrect.",
            "3/4": "3/4 is the filled portion, not the empty portion.",
            "4/4": "4/4 represents a full glass, not the empty portion."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t2_qe18',
        type: "mcq",
        question: "What is another way to write 2/4?",
        options: ["1/2", "1/4", "4/2", "3/6"],
        correctAnswer: "1/2",
        explanation: "2/4 can be simplified by dividing both numbers by 2: 2÷2=1, 4÷2=2, so 2/4 = 1/2. ✂️",
        wrongAnswerExplanations: {
            "1/4": "1/4 is half of 2/4, not equal to it.",
            "4/2": "4/2 equals 2, not 1/2.",
            "3/6": "3/6 equals 1/2, but the simplest form of 2/4 is 1/2."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t2_qe19',
        type: "mcq",
        question: "How many quarters make one whole?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "4",
        explanation: "One whole equals 4/4, so it takes 4 quarters (1/4 each) to make one whole. 🔄",
        wrongAnswerExplanations: {
            "2": "2 quarters make 2/4 or 1/2, not a whole.",
            "3": "3 quarters make 3/4, not a whole.",
            "5": "5 quarters make 5/4, which is more than one whole."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t2_qe20',
        type: "mcq",
        question: "If a chocolate bar has 6 pieces and you eat 3 pieces, what fraction of the bar did you eat?",
        options: ["1/2", "1/3", "3/6", "2/3"],
        correctAnswer: "3/6",
        explanation: "Eating 3 pieces out of 6 means you ate 3/6 of the bar, which equals 1/2. 🍫",
        wrongAnswerExplanations: {
            "1/2": "While 3/6 equals 1/2, the direct fraction from the problem is 3/6.",
            "1/3": "1/3 would be if you ate 2 pieces out of 6, not 3 pieces.",
            "2/3": "2/3 would be if you ate 4 pieces out of 6, not 3 pieces."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
