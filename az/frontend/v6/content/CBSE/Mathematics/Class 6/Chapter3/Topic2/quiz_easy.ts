// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 6\Chapter3\Topic2\quiz_easy.ts
// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 6\Chapter3\Topic2\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch3_t2_qe1',
        type: "mcq",
        question: "Which of the following numbers is a prime number?",
        options: ["15", "23", "27", "35"],
        correctAnswer: "23",
        explanation: "23 has only two factors: 1 and 23. It cannot be divided evenly by any other number, making it prime. 🔍",
        wrongAnswerExplanations: {
            "15": "15 = 3 × 5, so it has factors other than 1 and itself.",
            "27": "27 = 3³, so it has factors other than 1 and itself.",
            "35": "35 = 5 × 7, so it has factors other than 1 and itself."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t2_qe2',
        type: "mcq",
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        correctAnswer: "2",
        explanation: "2 is the smallest prime number and the only even prime. 1 is not a prime number as it has only one factor. 🔢",
        wrongAnswerExplanations: {
            "0": "0 is not a prime number as it has infinite factors.",
            "1": "1 has only one factor (itself), but prime numbers must have exactly two factors.",
            "3": "3 is a prime number, but not the smallest one."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t2_qe3',
        type: "mcq",
        question: "Which of these numbers is a composite number?",
        options: ["7", "11", "14", "19"],
        correctAnswer: "14",
        explanation: "14 = 2 × 7, so it has more than two factors (1, 2, 7, 14), making it composite. ✅",
        wrongAnswerExplanations: {
            "7": "7 has only two factors: 1 and 7, making it prime.",
            "11": "11 has only two factors: 1 and 11, making it prime.",
            "19": "19 has only two factors: 1 and 19, making it prime."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t2_qe4',
        type: "mcq",
        question: "How many prime numbers are there between 10 and 20?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4",
        explanation: "The prime numbers between 10 and 20 are 11, 13, 17, and 19. That's a total of 4 prime numbers. 🧮",
        wrongAnswerExplanations: {
            "3": "There are more than 3 prime numbers in this range.",
            "5": "There are fewer than 5 prime numbers in this range.",
            "6": "There are fewer than 6 prime numbers in this range."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t2_qe5',
        type: "mcq",
        question: "Which of the following is the prime factorization of 20?",
        options: ["2 × 10", "2² × 5", "2 × 2 × 10", "4 × 5"],
        correctAnswer: "2² × 5",
        explanation: "20 = 2² × 5 = 4 × 5. This shows all factors as prime numbers, which is the definition of prime factorization. ⭐",
        wrongAnswerExplanations: {
            "2 × 10": "10 is not a prime number, so this is not a prime factorization.",
            "2 × 2 × 10": "10 is not a prime number, so this is not a prime factorization.",
            "4 × 5": "4 is not a prime number, so this is not a prime factorization."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t2_qe6',
        type: "mcq",
        question: "What is a number called if it has exactly two factors?",
        options: ["Composite number", "Prime number", "Even number", "Odd number"],
        correctAnswer: "Prime number",
        explanation: "A prime number has exactly two factors: 1 and itself. Numbers with more than two factors are composite. 📊",
        wrongAnswerExplanations: {
            "Composite number": "Composite numbers have more than two factors.",
            "Even number": "Even numbers can be either prime (like 2) or composite (like 4, 6, 8...).",
            "Odd number": "Odd numbers can be either prime (like 3, 5, 7...) or composite (like 9, 15, 21...)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t2_qe7',
        type: "mcq",
        question: "Which of these statements about the number 1 is true?",
        options: ["1 is a prime number", "1 is a composite number", "1 is both prime and composite", "1 is neither prime nor composite"],
        correctAnswer: "1 is neither prime nor composite",
        explanation: "1 has only one factor (itself). Prime numbers must have exactly two factors, so 1 is neither prime nor composite. 🎯",
        wrongAnswerExplanations: {
            "1 is a prime number": "1 has only one factor, but prime numbers must have exactly two factors.",
            "1 is a composite number": "Composite numbers have more than two factors, but 1 has only one factor.",
            "1 is both prime and composite": "A number cannot be both prime and composite as these are mutually exclusive categories."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t2_qe8',
        type: "mcq",
        question: "What is the prime factorization of 18?",
        options: ["2 × 9", "3 × 6", "2 × 3²", "3²"],
        correctAnswer: "2 × 3²",
        explanation: "18 = 2 × 9 = 2 × 3² = 2 × 3 × 3. This expresses 18 as a product of its prime factors. ✓",
        wrongAnswerExplanations: {
            "2 × 9": "9 is not a prime number, so this is not a prime factorization.",
            "3 × 6": "6 is not a prime number, so this is not a prime factorization.",
            "3²": "3² = 9, which equals 18, so this is incorrect."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t2_qe9',
        type: "mcq",
        question: "Which of the following numbers is NOT a prime number?",
        options: ["13", "17", "21", "29"],
        correctAnswer: "21",
        explanation: "21 = 3 × 7, so it has factors other than 1 and itself, making it composite. The others are all prime. ❌",
        wrongAnswerExplanations: {
            "13": "13 has only two factors: 1 and 13, making it prime.",
            "17": "17 has only two factors: 1 and 17, making it prime.",
            "29": "29 has only two factors: 1 and 29, making it prime."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t2_qe10',
        type: "mcq",
        question: "How many factors does a prime number have?",
        options: ["1", "2", "3", "Depends on the number"],
        correctAnswer: "2",
        explanation: "By definition, a prime number has exactly two factors: 1 and the number itself. No exceptions. 🔢",
        wrongAnswerExplanations: {
            "1": "A number with only one factor is 1, which is not prime.",
            "3": "If a number has 3 or more factors, it's composite, not prime.",
            "Depends on the number": "All prime numbers have exactly 2 factors by definition."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t2_qe11',
        type: "mcq",
        question: "Which number below is a composite number?",
        options: ["2", "3", "5", "9"],
        correctAnswer: "9",
        explanation: "9 = 3², so it has factors 1, 3, and 9. Having more than two factors makes it composite. 📈",
        wrongAnswerExplanations: {
            "2": "2 has only two factors: 1 and 2, making it prime.",
            "3": "3 has only two factors: 1 and 3, making it prime.",
            "5": "5 has only two factors: 1 and 5, making it prime."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t2_qe12',
        type: "mcq",
        question: "Which of these is a prime number?",
        options: ["21", "31", "45", "51"],
        correctAnswer: "31",
        explanation: "31 cannot be divided evenly by any number except 1 and itself, making it prime. ✅",
        wrongAnswerExplanations: {
            "21": "21 = 3 × 7, so it is composite.",
            "45": "45 = 3² × 5 = 9 × 5, so it is composite.",
            "51": "51 = 3 × 17, so it is composite."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t2_qe13',
        type: "mcq",
        question: "Which of the following shows the correct prime factorization of 30?",
        options: ["2 × 15", "2 × 3 × 5", "5 × 6", "3 × 10"],
        correctAnswer: "2 × 3 × 5",
        explanation: "30 = 2 × 3 × 5. All factors (2, 3, and 5) are prime numbers, making this the prime factorization. 🧩",
        wrongAnswerExplanations: {
            "2 × 15": "15 is not a prime number, so this is not a prime factorization.",
            "5 × 6": "6 is not a prime number, so this is not a prime factorization.",
            "3 × 10": "10 is not a prime number, so this is not a prime factorization."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t2_qe14',
        type: "mcq",
        question: "Which of the following is an even prime number?",
        options: ["4", "2", "6", "8"],
        correctAnswer: "2",
        explanation: "2 is the only even prime number. All other even numbers are divisible by 2, making them composite. 🎲",
        wrongAnswerExplanations: {
            "4": "4 = 2², so it has factors 1, 2, and 4, making it composite.",
            "6": "6 = 2 × 3, so it has factors 1, 2, 3, and 6, making it composite.",
            "8": "8 = 2³, so it has factors 1, 2, 4, and 8, making it composite."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t2_qe15',
        type: "mcq",
        question: "What is the prime factorization of 36?",
        options: ["2² × 3²", "6²", "2 × 18", "4 × 9"],
        correctAnswer: "2² × 3²",
        explanation: "36 = 2² × 3² = 4 × 9. This expresses 36 using only prime number factors. ⚖️",
        wrongAnswerExplanations: {
            "6²": "6 is not a prime number, so this is not a prime factorization.",
            "2 × 18": "18 is not a prime number, so this is not a prime factorization.",
            "4 × 9": "Neither 4 nor 9 is prime, so this is not a prime factorization."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t2_qe16',
        type: "mcq",
        question: "Which statement about prime numbers is true?",
        options: ["All prime numbers are odd", "All prime numbers are even", "There are infinitely many prime numbers", "The largest prime number is 97"],
        correctAnswer: "There are infinitely many prime numbers",
        explanation: "Euclid proved over 2000 years ago that there are infinitely many prime numbers. There is no largest prime number. 🌠",
        wrongAnswerExplanations: {
            "All prime numbers are odd": "2 is an even prime number, so not all primes are odd.",
            "All prime numbers are even": "Only 2 is an even prime; all other primes are odd.",
            "The largest prime number is 97": "There are known prime numbers with millions of digits."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t2_qe17',
        type: "mcq",
        question: "How many composite numbers are there between 1 and 10?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4",
        explanation: "The composite numbers between 1 and 10 are 4, 6, 8, and 9. That's a total of 4 composite numbers. 🧮",
        wrongAnswerExplanations: {
            "3": "There are more than 3 composite numbers in this range.",
            "5": "There are fewer than 5 composite numbers in this range.",
            "6": "There are fewer than 6 composite numbers in this range."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t2_qe18',
        type: "mcq",
        question: "What is the prime factorization of 50?",
        options: ["2 × 25", "5²", "2 × 5²", "10 × 5"],
        correctAnswer: "2 × 5²",
        explanation: "50 = 2 × 25 = 2 × 5² = 2 × 5 × 5. This expresses 50 as a product of its prime factors. 🔍",
        wrongAnswerExplanations: {
            "2 × 25": "25 is not a prime number, so this is not a prime factorization.",
            "5²": "5² = 25, which is not equal to 50.",
            "10 × 5": "10 is not a prime number, so this is not a prime factorization."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t2_qe19',
        type: "mcq",
        question: "Which of the following numbers is a prime number?",
        options: ["39", "41", "51", "57"],
        correctAnswer: "41",
        explanation: "41 has only two factors: 1 and 41. It is not divisible by any other number, making it prime. ✓",
        wrongAnswerExplanations: {
            "39": "39 = 3 × 13, so it's composite.",
            "51": "51 = 3 × 17, so it's composite.",
            "57": "57 = 3 × 19, so it's composite."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t2_qe20',
        type: "mcq",
        question: "Which number is neither prime nor composite?",
        options: ["0", "1", "2", "4"],
        correctAnswer: "1",
        explanation: "1 has only one factor (itself). Prime numbers need exactly two factors, and composite numbers need more than two. ⭐",
        wrongAnswerExplanations: {
            "0": "0 is not considered in the classification of prime or composite numbers.",
            "2": "2 is a prime number as it has exactly two factors: 1 and 2.",
            "4": "4 is a composite number as it has more than two factors: 1, 2, and 4."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
