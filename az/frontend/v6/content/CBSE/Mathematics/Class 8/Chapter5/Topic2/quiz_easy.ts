import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch5_t2_qe1',
        type: "mcq",
        question: "What is the prime factorization of 36?",
        options: ["2² × 3²", "2 × 3²", "2³ × 3", "2 × 3³"],
        correctAnswer: "2² × 3²",
        explanation: "36 = 2 × 2 × 3 × 3 = 2² × 3². This is verified by multiplying: 2² = 4, 3² = 9, and 4 × 9 = 36. 🔢",
        wrongAnswerExplanations: {
            "2 × 3²": "This equals 18, not 36.",
            "2³ × 3": "This equals 24, not 36.",
            "2 × 3³": "This equals 54, not 36."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch5_t2_qe2',
        type: "mcq",
        question: "Which method can be used to find the square root of 144?",
        options: ["Only prime factorization", "Only division method", "Both prime factorization and division method", "Neither method"],
        correctAnswer: "Both prime factorization and division method",
        explanation: "Both methods work for finding √144. Prime factorization: 144 = 2⁴ × 3², so √144 = 12. Division method also gives √144 = 12. 📐",
        wrongAnswerExplanations: {
            "Only prime factorization": "While prime factorization works, division method also works.",
            "Only division method": "While division method works, prime factorization also works.",
            "Neither method": "Both methods are valid and give the correct answer of 12."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch5_t2_qe3',
        type: "mcq",
        question: "In the prime factorization method, to find the square root of a number, what do we do with the prime factors?",
        options: ["Add their powers", "Multiply their powers", "Divide their powers by 2", "Square their powers"],
        correctAnswer: "Divide their powers by 2",
        explanation: "To find square root using prime factorization, divide each prime factor's power by 2. For example, √(2⁴) = 2². 🎯",
        wrongAnswerExplanations: {
            "Add their powers": "Adding powers doesn't give the square root.",
            "Multiply their powers": "Multiplying powers would make the number larger.",
            "Square their powers": "Squaring powers would make the number much larger."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch5_t2_qe4',
        type: "mcq",
        question: "What is the first step in the division method to find a square root?",
        options: ["Divide the number by 2", "Group digits in pairs from right to left", "Find the largest perfect square", "Multiply by 2"],
        correctAnswer: "Group digits in pairs from right to left",
        explanation: "In division method, first group digits in pairs from right to left. For example, for 1225, group as 12|25. This helps find the first digit of the square root. 🔍",
        wrongAnswerExplanations: {
            "Divide the number by 2": "This is not a step in the division method.",
            "Find the largest perfect square": "This comes after grouping digits in pairs.",
            "Multiply by 2": "This is not the first step in division method."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch5_t2_qe5',
        type: "mcq",
        question: "Which of these numbers can have its square root found using prime factorization?",
        options: ["72", "81", "90", "100"],
        correctAnswer: "81",
        explanation: "81 = 3⁴, so √81 = 3². 81 is a perfect square. The other numbers are not perfect squares, making prime factorization less useful. 🎲",
        wrongAnswerExplanations: {
            "72": "72 is not a perfect square, its square root is irrational.",
            "90": "90 is not a perfect square, its square root is irrational.",
            "100": "While 100 is a perfect square, it's not the correct answer here."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch5_t2_qe6',
        type: "mcq",
        question: "In the prime factorization of 400, how many times does 2 appear as a factor?",
        options: ["2 times", "4 times", "5 times", "6 times"],
        correctAnswer: "4 times",
        explanation: "400 = 2⁴ × 5². The prime factorization shows that 2 appears 4 times as a factor. 🔢",
        wrongAnswerExplanations: {
            "2 times": "This would make the power of 2 too small.",
            "5 times": "This would make the number larger than 400.",
            "6 times": "This would make the number larger than 400."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch5_t2_qe7',
        type: "mcq",
        question: "What is the square root of 225 using prime factorization?",
        options: ["3 × 5", "3² × 5", "3 × 5²", "3² × 5²"],
        correctAnswer: "3 × 5",
        explanation: "225 = 3² × 5². For square root, divide each power by 2: √225 = 3¹ × 5¹ = 3 × 5 = 15. 📊",
        wrongAnswerExplanations: {
            "3² × 5": "This equals 45, which is too large.",
            "3 × 5²": "This equals 75, which is too large.",
            "3² × 5²": "This equals 225, which is the original number."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch5_t2_qe8',
        type: "mcq",
        question: "In the division method, what do we do after finding the first digit of the square root?",
        options: ["Stop the process", "Add the next pair of digits", "Multiply by 2", "Divide by the first digit"],
        correctAnswer: "Add the next pair of digits",
        explanation: "After finding first digit, bring down next pair of digits and form new dividend. This continues until all pairs are used. 📝",
        wrongAnswerExplanations: {
            "Stop the process": "The process continues until all digit pairs are used.",
            "Multiply by 2": "This is not the next step.",
            "Divide by the first digit": "This is not part of the division method."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch5_t2_qe9',
        type: "mcq",
        question: "Which number's square root can be found using prime factorization: 169 or 170?",
        options: ["Only 169", "Only 170", "Both numbers", "Neither number"],
        correctAnswer: "Only 169",
        explanation: "169 = 13² is a perfect square, so √169 = 13. 170 is not a perfect square, so prime factorization won't give a rational square root. 🎯",
        wrongAnswerExplanations: {
            "Only 170": "170 is not a perfect square.",
            "Both numbers": "Only 169 is a perfect square.",
            "Neither number": "169 is a perfect square and can use prime factorization."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch5_t2_qe10',
        type: "mcq",
        question: "What is the prime factorization of 196?",
        options: ["2² × 7²", "2 × 7²", "2² × 7", "2 × 7⁴"],
        correctAnswer: "2² × 7²",
        explanation: "196 = 2 × 2 × 7 × 7 = 2² × 7². Therefore √196 = 2 × 7 = 14. 🔢",
        wrongAnswerExplanations: {
            "2 × 7²": "This equals 98, not 196.",
            "2² × 7": "This equals 28, not 196.",
            "2 × 7⁴": "This equals 2401, not 196."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch5_t2_qe11',
        type: "mcq",
        question: "Which method is more suitable for finding the square root of 3600?",
        options: ["Prime factorization", "Division method", "Both are equally suitable", "Neither method works"],
        correctAnswer: "Both are equally suitable",
        explanation: "3600 = 2⁴ × 3² × 5² (prime factorization) and division method both give √3600 = 60. Both methods work well for perfect squares. 📐",
        wrongAnswerExplanations: {
            "Prime factorization": "While this works, division method is equally effective.",
            "Division method": "While this works, prime factorization is equally effective.",
            "Neither method works": "Both methods work perfectly for 3600."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch5_t2_qe12',
        type: "mcq",
        question: "In the division method for √1225, how many pairs of digits are there?",
        options: ["1 pair", "2 pairs", "3 pairs", "4 pairs"],
        correctAnswer: "2 pairs",
        explanation: "In 1225, grouping from right to left gives 12|25, which is 2 pairs. This helps determine the steps needed in division method. 🔍",
        wrongAnswerExplanations: {
            "1 pair": "1225 has 4 digits, so it makes 2 pairs, not 1.",
            "3 pairs": "1225 has 4 digits, so it makes 2 pairs, not 3.",
            "4 pairs": "1225 has 4 digits, so it makes 2 pairs, not 4."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch5_t2_qe13',
        type: "mcq",
        question: "What is the prime factorization of 324?",
        options: ["2² × 3⁴", "2² × 3³", "2³ × 3³", "2⁴ × 3²"],
        correctAnswer: "2² × 3⁴",
        explanation: "324 = 2 × 2 × 3 × 3 × 3 × 3 = 2² × 3⁴. Therefore √324 = 2 × 3² = 18. 🎲",
        wrongAnswerExplanations: {
            "2² × 3³": "This equals 216, not 324.",
            "2³ × 3³": "This equals 216, not 324.",
            "2⁴ × 3²": "This equals 144, not 324."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch5_t2_qe14',
        type: "mcq",
        question: "Which of these is NOT a step in the division method?",
        options: ["Grouping digits in pairs", "Finding divisor", "Finding prime factors", "Bringing down next pair"],
        correctAnswer: "Finding prime factors",
        explanation: "Finding prime factors is part of prime factorization method, not division method. Division method uses digit pairs and divisors. 📝",
        wrongAnswerExplanations: {
            "Grouping digits in pairs": "This is a crucial step in division method.",
            "Finding divisor": "This is an essential step in division method.",
            "Bringing down next pair": "This is a key step in division method."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch5_t2_qe15',
        type: "mcq",
        question: "What is √441 using prime factorization?",
        options: ["3 × 7", "3² × 7", "3 × 7²", "3² × 7²"],
        correctAnswer: "3 × 7",
        explanation: "441 = 3² × 7². For square root, divide each power by 2: √441 = 3¹ × 7¹ = 3 × 7 = 21. 🔢",
        wrongAnswerExplanations: {
            "3² × 7": "This equals 63, which is too large.",
            "3 × 7²": "This equals 147, which is too large.",
            "3² × 7²": "This equals 441, which is the original number."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch5_t2_qe16',
        type: "mcq",
        question: "In prime factorization method, what happens if a prime factor has an odd power?",
        options: ["The number is a perfect square", "The number is not a perfect square", "The square root will be a whole number", "The power is ignored"],
        correctAnswer: "The number is not a perfect square",
        explanation: "If any prime factor has an odd power, the number isn't a perfect square. All powers must be even for a perfect square. 🎯",
        wrongAnswerExplanations: {
            "The number is a perfect square": "Odd powers mean it's not a perfect square.",
            "The square root will be a whole number": "Odd powers mean the square root won't be rational.",
            "The power is ignored": "Powers are crucial and can't be ignored."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch5_t2_qe17',
        type: "mcq",
        question: "What is the first step in prime factorization method?",
        options: ["Divide powers by 2", "Find smallest prime factor", "Group digits in pairs", "Add all factors"],
        correctAnswer: "Find smallest prime factor",
        explanation: "Start by finding the smallest prime factor that divides the number. Continue until the quotient becomes 1. 📊",
        wrongAnswerExplanations: {
            "Divide powers by 2": "This comes after finding all prime factors.",
            "Group digits in pairs": "This is for division method, not prime factorization.",
            "Add all factors": "We multiply factors, not add them."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch5_t2_qe18',
        type: "mcq",
        question: "Which of these numbers has the easiest prime factorization?",
        options: ["256", "289", "324", "361"],
        correctAnswer: "256",
        explanation: "256 = 2⁸, it only has one prime factor (2). Other numbers have multiple different prime factors, making factorization more complex. 🎲",
        wrongAnswerExplanations: {
            "289": "289 = 17², requires finding 17 as factor.",
            "324": "324 = 2² × 3⁴, has two different prime factors.",
            "361": "361 = 19², requires finding 19 as factor."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch5_t2_qe19',
        type: "mcq",
        question: "What makes the division method useful for finding square roots?",
        options: ["It only works for small numbers", "It works for any perfect square", "It only works for prime numbers", "It only works for even numbers"],
        correctAnswer: "It works for any perfect square",
        explanation: "Division method can find square root of any perfect square, regardless of size or prime factorization. It's systematic and reliable. 📐",
        wrongAnswerExplanations: {
            "It only works for small numbers": "It works for numbers of any size.",
            "It only works for prime numbers": "It works for any perfect square.",
            "It only works for even numbers": "It works for both even and odd perfect squares."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch5_t2_qe20',
        type: "mcq",
        question: "Which method would you use to find √625?",
        options: ["Only prime factorization", "Only division method", "Either method works well", "Neither method works"],
        correctAnswer: "Either method works well",
        explanation: "625 = 5⁴, so prime factorization gives √625 = 5². Division method also works: 6|25 = 25. Both methods give 25. 🔍",
        wrongAnswerExplanations: {
            "Only prime factorization": "While this works, division method also works.",
            "Only division method": "While this works, prime factorization also works.",
            "Neither method works": "Both methods work perfectly for 625."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 