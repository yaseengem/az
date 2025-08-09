import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch9_t1_qe1',
        type: "mcq",
        question: "What does a fraction represent?",
        options: ["Only whole numbers", "Parts of a whole", "Only decimal numbers", "Only negative numbers"],
        correctAnswer: "Parts of a whole",
        explanation: "Fractions represent parts of a whole divided into equal portions. 🍕",
        wrongAnswerExplanations: {
            "Only whole numbers": "Fractions show parts of wholes, not just whole numbers.",
            "Only decimal numbers": "While fractions can be written as decimals, they primarily represent parts.",
            "Only negative numbers": "Fractions can be positive or negative, representing parts."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t1_qe2',
        type: "mcq",
        question: "In the fraction 3/4, what does the number 4 represent?",
        options: ["The numerator", "The denominator", "The whole number", "The result"],
        correctAnswer: "The denominator",
        explanation: "In a fraction, the denominator (bottom number) shows the total equal parts in the whole. 🍰",
        wrongAnswerExplanations: {
            "The numerator": "The numerator is the top number (3), showing how many parts we have.",
            "The whole number": "4 shows how many parts the whole is divided into, not the whole number itself.",
            "The result": "4 is part of the fraction, not the result of a calculation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t1_qe3',
        type: "mcq",
        question: "Which fraction represents exactly half of something?",
        options: ["1/4", "1/2", "2/3", "3/4"],
        correctAnswer: "1/2",
        explanation: "1/2 means 1 part out of 2 equal parts, which is exactly half of the whole. ➗",
        wrongAnswerExplanations: {
            "1/4": "1/4 is one-quarter, which is less than half.",
            "2/3": "2/3 is more than half (which would be 2/4 or 1/2).",
            "3/4": "3/4 is three-quarters, which is more than half."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t1_qe4',
        type: "mcq",
        question: "If a pizza is cut into 8 equal slices and you eat 2 slices, what fraction of the pizza did you eat?",
        options: ["2/8", "8/2", "2/6", "1/4"],
        correctAnswer: "2/8",
        explanation: "You ate 2 out of 8 equal slices, so the fraction is 2/8. 🍕",
        wrongAnswerExplanations: {
            "8/2": "The denominator should show total slices (8) and numerator shows eaten slices (2).",
            "2/6": "There are 8 total slices, not 6, so denominator should be 8.",
            "1/4": "While 2/8 = 1/4 when simplified, the direct fraction from the scenario is 2/8."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t1_qe5',
        type: "mcq",
        question: "What is another way to write the fraction 2/4?",
        options: ["1/2", "4/2", "2/8", "1/4"],
        correctAnswer: "1/2",
        explanation: "2/4 simplifies to 1/2 by dividing both numbers by 2. Both represent the same amount. 🧮",
        wrongAnswerExplanations: {
            "4/2": "4/2 equals 2, which is not equal to 2/4.",
            "2/8": "2/8 equals 1/4, which is half of 2/4.",
            "1/4": "1/4 is half of 2/4, not equal to it."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t1_qe6',
        type: "mcq",
        question: "In a garden with 10 flowers, 4 are red. What fraction of the flowers are red?",
        options: ["4/10", "10/4", "6/10", "4/6"],
        correctAnswer: "4/10",
        explanation: "4 red flowers out of 10 total flowers gives the fraction 4/10. 🌹",
        wrongAnswerExplanations: {
            "10/4": "The denominator should be the total (10) and numerator the part (4).",
            "6/10": "6/10 represents the flowers that are not red.",
            "4/6": "The denominator should be 10 (total flowers), not 6."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t1_qe7',
        type: "mcq",
        question: "Which picture shows 1/4 shaded?",
        options: ["A circle with half shaded", "A rectangle with one-fourth shaded", "A triangle with one-third shaded", "A square with three-fourths shaded"],
        correctAnswer: "A rectangle with one-fourth shaded",
        explanation: "One-fourth (1/4) means one out of four equal parts is shaded. 🟩",
        wrongAnswerExplanations: {
            "A circle with half shaded": "Half shaded represents 1/2, not 1/4.",
            "A triangle with one-third shaded": "One-third represents 1/3, not 1/4.",
            "A square with three-fourths shaded": "Three-fourths represents 3/4, not 1/4."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t1_qe8',
        type: "mcq",
        question: "What fraction of an hour is 15 minutes?",
        options: ["1/2", "1/3", "1/4", "1/5"],
        correctAnswer: "1/4",
        explanation: "15 minutes is one-fourth of an hour (60 minutes), so it's 1/4 of an hour. ⏰",
        wrongAnswerExplanations: {
            "1/2": "Half an hour is 30 minutes, not 15.",
            "1/3": "One-third of an hour is 20 minutes, not 15.",
            "1/5": "One-fifth of an hour is 12 minutes, not 15."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t1_qe9',
        type: "mcq",
        question: "Which fraction is greater: 3/4 or 1/2?",
        options: ["3/4", "1/2", "Both are equal", "Can't be compared"],
        correctAnswer: "3/4",
        explanation: "3/4 equals 6/8, while 1/2 equals 4/8. Since 6/8 > 4/8, 3/4 is greater than 1/2. 📏",
        wrongAnswerExplanations: {
            "1/2": "1/2 is less than 3/4 (0.5 vs 0.75).",
            "Both are equal": "These fractions have different values (0.5 vs 0.75).",
            "Can't be compared": "Fractions can always be compared by converting to equivalent fractions."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t1_qe10',
        type: "mcq",
        question: "What fraction of days in a week is the weekend?",
        options: ["1/7", "2/7", "5/7", "7/2"],
        correctAnswer: "2/7",
        explanation: "Weekend has 2 days (Saturday and Sunday) out of 7 total days in a week, so 2/7. 📅",
        wrongAnswerExplanations: {
            "1/7": "The weekend has 2 days, not 1.",
            "5/7": "5/7 represents weekdays, not weekend days.",
            "7/2": "The denominator shows the total (7) and numerator shows the part (2)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t1_qe11',
        type: "mcq",
        question: "If you divide a chocolate bar into 6 equal pieces and eat 3 pieces, what fraction of the chocolate did you eat?",
        options: ["1/2", "3/6", "6/3", "1/3"],
        correctAnswer: "3/6",
        explanation: "You ate 3 pieces out of 6 total pieces, so the fraction is 3/6 (which equals 1/2). 🍫",
        wrongAnswerExplanations: {
            "1/2": "While 3/6 simplifies to 1/2, the direct fraction from the scenario is 3/6.",
            "6/3": "The denominator should be total pieces (6) and numerator eaten pieces (3).",
            "1/3": "1/3 would be 2 pieces out of 6, not 3 pieces."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t1_qe12',
        type: "mcq",
        question: "What does the numerator in a fraction tell us?",
        options: ["The total number of parts", "How many parts we're considering", "The size of each part", "The name of the fraction"],
        correctAnswer: "How many parts we're considering",
        explanation: "The numerator (top number) tells us how many parts of the whole we have. 🔢",
        wrongAnswerExplanations: {
            "The total number of parts": "This is what the denominator tells us, not the numerator.",
            "The size of each part": "The fraction as a whole indicates size, not just the numerator.",
            "The name of the fraction": "Numerator is a number, not the name of the fraction."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t1_qe13',
        type: "mcq",
        question: "In the fraction 1/3, how many equal parts is the whole divided into?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "3",
        explanation: "The denominator (3) tells us the whole is divided into 3 equal parts. 🔄",
        wrongAnswerExplanations: {
            "1": "1 is the numerator, showing how many parts we have.",
            "2": "The denominator is 3, not 2.",
            "4": "The denominator is 3, not 4."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t1_qe14',
        type: "mcq",
        question: "A water bottle is 3/4 full. What fraction of the bottle is empty?",
        options: ["1/4", "3/4", "1/3", "2/4"],
        correctAnswer: "1/4",
        explanation: "If 3/4 is full, then 1/4 is empty (3/4 + 1/4 = 4/4 = 1 whole). 💧",
        wrongAnswerExplanations: {
            "3/4": "3/4 is the full part, not the empty part.",
            "1/3": "If 3/4 is full, then 1/4 (not 1/3) is empty.",
            "2/4": "If 3/4 is full, then 1/4 (not 2/4) is empty."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t1_qe15',
        type: "mcq",
        question: "Which fraction shows a whole divided into 2 equal parts with 1 part taken?",
        options: ["1/2", "2/1", "1/4", "2/2"],
        correctAnswer: "1/2",
        explanation: "1/2 means a whole divided into 2 equal parts with 1 part taken. ➗",
        wrongAnswerExplanations: {
            "2/1": "2/1 means 2 wholes, not 1 part of 2.",
            "1/4": "1/4 means a whole divided into 4 parts with 1 part taken.",
            "2/2": "2/2 means all parts are taken, which equals 1 whole."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t1_qe16',
        type: "mcq",
        question: "What fraction of the alphabet do vowels (a, e, i, o, u) represent?",
        options: ["5/26", "21/26", "26/5", "1/5"],
        correctAnswer: "5/26",
        explanation: "There are 5 vowels out of 26 total letters in the alphabet, so the fraction is 5/26. 🔤",
        wrongAnswerExplanations: {
            "21/26": "21/26 represents consonants, not vowels.",
            "26/5": "The denominator should be total letters (26) and numerator vowels (5).",
            "1/5": "This isn't correct as there are 5 vowels out of 26 letters, not 1 out of 5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t1_qe17',
        type: "mcq",
        question: "Which fraction is the same as 2/4?",
        options: ["1/2", "4/8", "1/4", "3/6"],
        correctAnswer: "1/2",
        explanation: "2/4 simplifies to 1/2 by dividing both numbers by 2. They represent the same value. 🧮",
        wrongAnswerExplanations: {
            "4/8": "While 4/8 equals 1/2, the question asks specifically for the same as 2/4.",
            "1/4": "1/4 is half of 2/4, not equal to it.",
            "3/6": "While 3/6 equals 1/2, the question asks specifically for the same as 2/4."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t1_qe18',
        type: "mcq",
        question: "What happens when the numerator and denominator of a fraction are the same?",
        options: ["The fraction equals 0", "The fraction equals 1", "The fraction equals 2", "The fraction cannot be determined"],
        correctAnswer: "The fraction equals 1",
        explanation: "When numerator equals denominator (like 3/3), the fraction equals 1 whole. 🧩",
        wrongAnswerExplanations: {
            "The fraction equals 0": "Equal numerator and denominator never equals 0.",
            "The fraction equals 2": "Equal numerator and denominator always equals 1, not 2.",
            "The fraction cannot be determined": "Equal numerator and denominator has a definite value of 1."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t1_qe19',
        type: "mcq",
        question: "If a book has 20 pages and you've read 5 pages, what fraction of the book have you read?",
        options: ["5/20", "1/4", "1/5", "20/5"],
        correctAnswer: "5/20",
        explanation: "You've read 5 pages out of 20 total pages, so the fraction is 5/20 (which equals 1/4). 📚",
        wrongAnswerExplanations: {
            "1/4": "While 5/20 simplifies to 1/4, the direct fraction from the scenario is 5/20.",
            "1/5": "1/5 would be 4 pages out of 20, not 5 pages.",
            "20/5": "The denominator should be total pages (20) and numerator read pages (5)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch9_t1_qe20',
        type: "mcq",
        question: "What is the fraction of legs a dog has compared to a spider?",
        options: ["4/8", "1/2", "8/4", "2/1"],
        correctAnswer: "4/8",
        explanation: "A dog has 4 legs and a spider has 8 legs, so the fraction is 4/8 (or 1/2). 🐕🕷️",
        wrongAnswerExplanations: {
            "1/2": "While 4/8 simplifies to 1/2, the direct fraction from the scenario is 4/8.",
            "8/4": "This would be spider legs compared to dog legs, not the other way around.",
            "2/1": "This is incorrect as dogs have 4 legs and spiders have 8."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
