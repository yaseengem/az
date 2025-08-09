import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: "cl9_ch1_t6_qe1",
        type: "mcq",
        question: "Which of these is a terminating decimal?",
        options: ["0.5", "0.333...", "\( \pi \)", "\( \sqrt{2} \)"],
        correctAnswer: "0.5",
        explanation: "0.5 is a terminating decimal as it comes to an end.",
        wrongAnswerExplanations: {
            "0.333...": "0.333... is a non-terminating repeating decimal.",
            "\( \pi \)": "\( \pi \) is a non-terminating non-repeating decimal.",
            "\( \sqrt{2} \)": "\( \sqrt{2} \) is a non-terminating non-repeating decimal."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl9_ch1_t6_qe2",
        type: "mcq",
        question: "What type of decimal is 1.666...?",
        options: ["Terminating", "Non-Terminating Repeating", "Non-Terminating Non-Repeating", "Undefined"],
        correctAnswer: "Non-Terminating Repeating",
        explanation: "1.666... is a non-terminating repeating decimal as it has a repeating pattern.",
        wrongAnswerExplanations: {
            "Terminating": "Terminating decimals come to an end.",
            "Non-Terminating Non-Repeating": "Non-Terminating Non-Repeating decimals do not have a repeating pattern.",
            "Undefined": "The decimal is defined and is non-terminating repeating."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl9_ch1_t6_qe3",
        type: "mcq",
        question: "Which of the following is a rational number?",
        options: ["\( \sqrt{7} \)", "0.5", "\( \pi \)", "\( \sqrt{2} \)"],
        correctAnswer: "0.5",
        explanation: "0.5 is a rational number because it can be expressed as a ratio of two integers: 1/2.",
        wrongAnswerExplanations: {
            "\( \sqrt{7} \)": "\( \sqrt{7} \) is an irrational number as it cannot be expressed as a ratio of integers.",
            "\( \pi \)": "\( \pi \) is an irrational number as it cannot be expressed as a ratio of integers.",
            "\( \sqrt{2} \)": "\( \sqrt{2} \) is an irrational number as it cannot be expressed as a ratio of integers."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl9_ch1_t6_qe4",
        type: "mcq",
        question: "What is 1/4 as a decimal?",
        options: ["0.25", "0.4", "0.75", "0.5"],
        correctAnswer: "0.25",
        explanation: "1/4 = 0.25, which is a terminating decimal.",
        wrongAnswerExplanations: {
            "0.4": "0.4 = 2/5, not 1/4.",
            "0.75": "0.75 = 3/4, not 1/4.",
            "0.5": "0.5 = 1/2, not 1/4."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl9_ch1_t6_qe5",
        type: "mcq",
        question: "Which of the following is an irrational number?",
        options: ["\( \pi \)", "0.25", "1/3", "6"],
        correctAnswer: "\( \pi \)",
        explanation: "\( \pi \) is an irrational number because it cannot be expressed as a ratio of two integers.",
        wrongAnswerExplanations: {
            "0.25": "0.25 = 1/4, which is a rational number.",
            "1/3": "1/3 is a rational number as it is already expressed as a ratio of two integers.",
            "6": "6 = 6/1, which is a rational number."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl9_ch1_t6_qe6",
        type: "mcq",
        question: "What is 3/4 as a decimal?",
        options: ["0.75", "0.25", "0.5", "1.75"],
        correctAnswer: "0.75",
        explanation: "3/4 = 0.75, which is a terminating decimal.",
        wrongAnswerExplanations: {
            "0.25": "0.25 = 1/4, not 3/4.",
            "0.5": "0.5 = 1/2, not 3/4.",
            "1.75": "1.75 = 7/4, not 3/4."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl9_ch1_t6_qe7",
        type: "mcq",
        question: "Every rational number can be expressed as:",
        options: ["A fraction", "A repeating decimal", "A terminating decimal", "A whole number"],
        correctAnswer: "A fraction",
        explanation: "Every rational number, by definition, can be expressed as a fraction p/q where p and q are integers and q ≠ 0.",
        wrongAnswerExplanations: {
            "A repeating decimal": "Not all rational numbers have repeating decimals; some have terminating decimals.",
            "A terminating decimal": "Not all rational numbers have terminating decimals; some have repeating decimals.",
            "A whole number": "Many rational numbers are not whole numbers, such as 1/2."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl9_ch1_t6_qe8",
        type: "mcq",
        question: "What is 1/3 as a decimal?",
        options: ["0.333...", "0.3", "0.33", "3"],
        correctAnswer: "0.333...",
        explanation: "1/3 = 0.333... (where 3 repeats infinitely), which is a non-terminating repeating decimal.",
        wrongAnswerExplanations: {
            "0.3": "0.3 = 3/10, not 1/3.",
            "0.33": "0.33 = 33/100, not 1/3.",
            "3": "3 = 3/1, not 1/3."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl9_ch1_t6_qe9",
        type: "mcq",
        question: "Which number is rational?",
        options: ["1/2", "\( \sqrt{3} \)", "\( \pi \)", "\( e \)"],
        correctAnswer: "1/2",
        explanation: "1/2 is a rational number because it is expressed as a ratio of two integers.",
        wrongAnswerExplanations: {
            "\( \sqrt{3} \)": "\( \sqrt{3} \) is an irrational number as it cannot be expressed as a ratio of integers.",
            "\( \pi \)": "\( \pi \) is an irrational number as it cannot be expressed as a ratio of integers.",
            "\( e \)": "\( e \) is an irrational number as it cannot be expressed as a ratio of integers."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl9_ch1_t6_qe10",
        type: "mcq",
        question: "What is the decimal representation of 2/5?",
        options: ["0.4", "0.5", "0.2", "0.25"],
        correctAnswer: "0.4",
        explanation: "2/5 = 0.4, which is a terminating decimal.",
        wrongAnswerExplanations: {
            "0.5": "0.5 = 1/2, not 2/5.",
            "0.2": "0.2 = 1/5, not 2/5.",
            "0.25": "0.25 = 1/4, not 2/5."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl9_ch1_t6_qe11",
        type: "mcq",
        question: "Which of the following is a terminating decimal?",
        options: ["3/8", "1/3", "2/7", "5/6"],
        correctAnswer: "3/8",
        explanation: "3/8 = 0.375, which is a terminating decimal. This is because the prime factorization of its denominator only contains 2, which is one of the factors (2 and 5) that lead to terminating decimals.",
        wrongAnswerExplanations: {
            "1/3": "1/3 = 0.333... which is a non-terminating repeating decimal.",
            "2/7": "2/7 = 0.285714... which is a non-terminating repeating decimal.",
            "5/6": "5/6 = 0.833... which is a non-terminating repeating decimal because its denominator has a factor of 3."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl9_ch1_t6_qe12",
        type: "mcq",
        question: "What is \( \sqrt{4} \) equal to?",
        options: ["2", "1.5", "\( \sqrt{2} \)", "4"],
        correctAnswer: "2",
        explanation: "\( \sqrt{4} \) = 2 because 2 × 2 = 4.",
        wrongAnswerExplanations: {
            "1.5": "1.5 × 1.5 = 2.25, not 4.",
            "\( \sqrt{2} \)": "\( \sqrt{2} \) × \( \sqrt{2} \) = 2, not 4.",
            "4": "4 × 4 = 16, not 4."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl9_ch1_t6_qe13",
        type: "mcq",
        question: "Is 0.101001000100001... a terminating decimal?",
        options: ["No", "Yes", "Cannot be determined", "Depends on the pattern"],
        correctAnswer: "No",
        explanation: "0.101001000100001... continues indefinitely without a repeating pattern, so it is not a terminating decimal.",
        wrongAnswerExplanations: {
            "Yes": "A terminating decimal has a finite number of digits after the decimal point.",
            "Cannot be determined": "The pattern shows it continues indefinitely, so it is clearly not terminating.",
            "Depends on the pattern": "The given pattern already indicates it is not terminating."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl9_ch1_t6_qe14",
        type: "mcq",
        question: "What is the decimal representation of 1/5?",
        options: ["0.2", "0.5", "0.25", "0.3"],
        correctAnswer: "0.2",
        explanation: "1/5 = 0.2, which is a terminating decimal.",
        wrongAnswerExplanations: {
            "0.5": "0.5 = 1/2, not 1/5.",
            "0.25": "0.25 = 1/4, not 1/5.",
            "0.3": "0.3 = 3/10, not 1/5."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl9_ch1_t6_qe15",
        type: "mcq",
        question: "What is 3/2 as a decimal?",
        options: ["1.5", "0.67", "1.67", "0.3"],
        correctAnswer: "1.5",
        explanation: "3/2 = 1.5, which is a terminating decimal.",
        wrongAnswerExplanations: {
            "0.67": "0.67 is approximately 2/3, not 3/2.",
            "1.67": "1.67 is approximately 5/3, not 3/2.",
            "0.3": "0.3 = 3/10, not 3/2."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl9_ch1_t6_qe16",
        type: "mcq",
        question: "Which of the following is an irrational number?",
        options: ["\( \sqrt{5} \)", "0.5", "3/4", "1.5"],
        correctAnswer: "\( \sqrt{5} \)",
        explanation: "\( \sqrt{5} \) is an irrational number because it cannot be expressed as a ratio of two integers.",
        wrongAnswerExplanations: {
            "0.5": "0.5 = 1/2, which is a rational number.",
            "3/4": "3/4 is already expressed as a ratio of integers, so it's rational.",
            "1.5": "1.5 = 3/2, which is a rational number."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl9_ch1_t6_qe17",
        type: "mcq",
        question: "What is 5/4 as a decimal?",
        options: ["1.25", "1.5", "0.8", "4.5"],
        correctAnswer: "1.25",
        explanation: "5/4 = 1.25, which is a terminating decimal.",
        wrongAnswerExplanations: {
            "1.5": "1.5 = 3/2, not 5/4.",
            "0.8": "0.8 = 4/5, not 5/4.",
            "4.5": "4.5 = 9/2, not 5/4."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl9_ch1_t6_qe18",
        type: "mcq",
        question: "Which of these represents 0.7 as a fraction in lowest terms?",
        options: ["7/10", "7/100", "70/100", "7/1000"],
        correctAnswer: "7/10",
        explanation: "0.7 = 7/10, which is already in its lowest terms because 7 and 10 have no common factors other than 1.",
        wrongAnswerExplanations: {
            "7/100": "7/100 = 0.07, not 0.7.",
            "70/100": "70/100 = 0.7, but this is not in lowest terms (it simplifies to 7/10).",
            "7/1000": "7/1000 = 0.007, not 0.7."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl9_ch1_t6_qe19",
        type: "mcq",
        question: "What is 1/8 as a decimal?",
        options: ["0.125", "0.25", "0.5", "0.8"],
        correctAnswer: "0.125",
        explanation: "1/8 = 0.125, which is a terminating decimal.",
        wrongAnswerExplanations: {
            "0.25": "0.25 = 1/4, not 1/8.",
            "0.5": "0.5 = 1/2, not 1/8.",
            "0.8": "0.8 = 4/5, not 1/8."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl9_ch1_t6_qe20",
        type: "mcq",
        question: "Which number is equal to 1.5?",
        options: ["3/2", "1/2", "5/3", "5/2"],
        correctAnswer: "3/2",
        explanation: "1.5 = 3/2, which is the fraction in its lowest terms.",
        wrongAnswerExplanations: {
            "1/2": "1/2 = 0.5, not 1.5.",
            "5/3": "5/3 = 1.666..., not 1.5.",
            "5/2": "5/2 = 2.5, not 1.5."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    }
];