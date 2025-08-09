// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter1\Topic3\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch1_t3_qe1',
        type: "mcq",
        question: "Which of the following best describes real numbers?",
        options: [
            "Only numbers that can be written as fractions",
            "Only numbers with terminating decimal expansions",
            "The union of rational and irrational numbers",
            "Only numbers with non-terminating decimal expansions"
        ],
        correctAnswer: "The union of rational and irrational numbers",
        explanation: "Real numbers consist of the complete set of both rational and irrational numbers. They represent all points on the number line and include numbers with both terminating and non-terminating decimal expansions. This comprehensive set forms the foundation for most mathematical operations. 🔢",
        wrongAnswerExplanations: {
            "Only numbers that can be written as fractions": "This describes rational numbers, which are only a subset of real numbers.",
            "Only numbers with terminating decimal expansions": "Numbers with terminating decimal expansions are only a subset of rational numbers.",
            "Only numbers with non-terminating decimal expansions": "While irrational numbers have non-terminating decimal expansions, rational numbers with repeating decimals also have non-terminating expansions."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t3_qe2',
        type: "mcq",
        question: "A real number with a terminating decimal expansion is always:",
        options: [
            "Irrational",
            "Rational",
            "An integer",
            "A natural number"
        ],
        correctAnswer: "Rational",
        explanation: "A real number with a terminating decimal expansion is always rational. It can be expressed as a fraction p/q where p and q are integers (q ≠ 0). For example, 3.75 = 375/100 = 15/4. Every terminating decimal can be written as a fraction with a denominator that is a power of 10. ➗",
        wrongAnswerExplanations: {
            "Irrational": "Irrational numbers, by definition, have non-terminating and non-repeating decimal expansions.",
            "An integer": "While integers have terminating decimal expansions, many terminating decimals (like 0.5) are not integers.",
            "A natural number": "Natural numbers are a subset of integers, but many terminating decimals are not natural numbers."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t3_qe3',
        type: "mcq",
        question: "Which of these decimal expansions represents a rational number?",
        options: [
            "3.14159265...",
            "0.101001000100001...",
            "4.3333...",
            "2.7182818284..."
        ],
        correctAnswer: "4.3333...",
        explanation: "4.3333... (with 3 repeating infinitely) represents a rational number because it has a repeating pattern. It can be written as the fraction 13/3. Any decimal expansion that either terminates or has a repeating pattern represents a rational number. The notation 4.3333... is equivalent to 4.3̅, where the bar indicates the repeating digit. 🔄",
        wrongAnswerExplanations: {
            "3.14159265...": "This is π (pi), which is an irrational number with a non-repeating decimal expansion.",
            "0.101001000100001...": "This has an increasing pattern of 0s between 1s and is non-repeating, making it irrational.",
            "2.7182818284...": "This is e (Euler's number), which is an irrational number with a non-repeating decimal expansion."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl9_ch1_t3_qe4',
        type: "mcq",
        question: "The decimal expansion of the fraction 3/8 is:",
        options: [
            "0.375",
            "0.3333...",
            "0.3737...",
            "0.3750000..."
        ],
        correctAnswer: "0.375",
        explanation: "The decimal expansion of 3/8 is 0.375, which is a terminating decimal. We can verify this by division: 3 ÷ 8 = 0.375. This is because the fraction 3/8 can be written as 3/(2³), where the denominator only has prime factors of 2, resulting in a terminating decimal expansion. 🧮",
        wrongAnswerExplanations: {
            "0.3333...": "This is the decimal expansion of 1/3, not 3/8.",
            "0.3737...": "This is not the decimal expansion of 3/8.",
            "0.3750000...": "While this is technically equal to 0.375, the question asks for the decimal expansion, which is simply 0.375."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t3_qe5',
        type: "mcq",
        question: "When will a fraction p/q (in lowest form) have a terminating decimal expansion?",
        options: [
            "When q has only 2 or 5 as prime factors",
            "When q is a prime number",
            "When p is divisible by q",
            "When q is divisible by 10"
        ],
        correctAnswer: "When q has only 2 or 5 as prime factors",
        explanation: "A fraction p/q in lowest form will have a terminating decimal expansion only when the prime factorization of q contains only 2s and 5s. This is because 10 = 2×5, and division by powers of 10 gives terminating decimals. For example, 3/8 = 3/(2³) gives 0.375, while 1/3 gives the repeating decimal 0.333... 🔍",
        wrongAnswerExplanations: {
            "When q is a prime number": "This is incorrect. If q is a prime number other than 2 or 5, the decimal will not terminate.",
            "When p is divisible by q": "If p is divisible by q, then p/q would be an integer, which is just a special case.",
            "When q is divisible by 10": "If q is divisible by 10, then p/q would have a terminating decimal, but this is too restrictive."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t3_qe6',
        type: "mcq",
        question: "The decimal expansion of 2/9 is:",
        options: [
            "0.2",
            "0.22222...",
            "0.2222",
            "0.22222222"
        ],
        correctAnswer: "0.22222...",
        explanation: "The decimal expansion of 2/9 is 0.22222... (with 2 repeating infinitely). We can verify this by long division: 2 ÷ 9 = 0.22222... Since 9 has a prime factor (3) that is neither 2 nor 5, the decimal expansion will not terminate but will repeat. This is often written as 0.2̅. 📝",
        wrongAnswerExplanations: {
            "0.2": "This is incorrect. 2/9 is not equal to 0.2 (which is 1/5).",
            "0.2222": "This is a terminating decimal that approximates 2/9, but it's not the exact value.",
            "0.22222222": "This is a terminating decimal that approximates 2/9, but it's not the exact value."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t3_qe7',
        type: "mcq",
        question: "Which of the following fractions will have a non-terminating repeating decimal expansion?",
        options: [
            "1/8",
            "7/20",
            "3/7",
            "4/25"
        ],
        correctAnswer: "3/7",
        explanation: "3/7 will have a non-terminating repeating decimal expansion because 7 is a prime number that is not 2 or 5. When we perform the division 3 ÷ 7, we get 0.428571428571... where the digits 428571 repeat. Fractions with denominators containing prime factors other than 2 and 5 always have repeating decimal expansions. ♻️",
        wrongAnswerExplanations: {
            "1/8": "1/8 = 0.125, which is a terminating decimal because 8 = 2³ only has prime factor 2.",
            "7/20": "7/20 = 0.35, which is a terminating decimal because 20 = 2²×5 only has prime factors 2 and 5.",
            "4/25": "4/25 = 0.16, which is a terminating decimal because 25 = 5² only has prime factor 5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t3_qe8',
        type: "mcq",
        question: "On the real number line, the point corresponding to √2 lies:",
        options: [
            "Exactly at 1.4",
            "Exactly at 1.5",
            "Between 1 and 2",
            "Exactly at 2"
        ],
        correctAnswer: "Between 1 and 2",
        explanation: "On the real number line, the point corresponding to √2 lies between 1 and 2. We know this because 1² = 1 and 2² = 4, so √2 must be between 1 and 2. More precisely, √2 ≈ 1.414, but its exact position corresponds to the length of the diagonal of a unit square. 📏",
        wrongAnswerExplanations: {
            "Exactly at 1.4": "This is only an approximation. √2 ≈ 1.414..., which is not exactly 1.4.",
            "Exactly at 1.5": "√2 ≈ 1.414..., which is less than 1.5.",
            "Exactly at 2": "√2 ≈ 1.414..., which is less than 2. Note that √4 = 2."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t3_qe9',
        type: "mcq",
        question: "Which property allows us to represent every real number as a unique point on the number line?",
        options: [
            "Ordering property of real numbers",
            "Density property of real numbers",
            "Completeness property of real numbers",
            "Commutative property of real numbers"
        ],
        correctAnswer: "Completeness property of real numbers",
        explanation: "The completeness property of real numbers ensures that every real number corresponds to exactly one point on the number line, and every point on the number line corresponds to exactly one real number. This creates a one-to-one correspondence between real numbers and points on the line, with no gaps or overlaps. 📊",
        wrongAnswerExplanations: {
            "Ordering property of real numbers": "This property states that any two real numbers can be compared, but doesn't ensure the correspondence with points on a line.",
            "Density property of real numbers": "This property states that between any two distinct real numbers, there is another real number.",
            "Commutative property of real numbers": "This refers to operations like a + b = b + a, which isn't related to the representation on a number line."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t3_qe10',
        type: "mcq",
        question: "If a real number has a non-terminating non-repeating decimal expansion, it is:",
        options: [
            "Always rational",
            "Always irrational",
            "Sometimes rational and sometimes irrational",
            "Neither rational nor irrational"
        ],
        correctAnswer: "Always irrational",
        explanation: "A real number with a non-terminating, non-repeating decimal expansion is always irrational. This is the defining characteristic of irrational numbers - they cannot be expressed as fractions of integers precisely because their decimal expansions never terminate or repeat. Examples include π, e, and √2. 🧠",
        wrongAnswerExplanations: {
            "Always rational": "This is incorrect. Rational numbers have either terminating or repeating decimal expansions.",
            "Sometimes rational and sometimes irrational": "This is incorrect. The description uniquely identifies irrational numbers.",
            "Neither rational nor irrational": "Every real number is either rational or irrational, not neither."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t3_qe11',
        type: "mcq",
        question: "Which of these fractions will have a repeating decimal with the longest period?",
        options: [
            "1/3",
            "1/7",
            "1/9",
            "1/11"
        ],
        correctAnswer: "1/7",
        explanation: "1/7 = 0.142857142857... has a repeating decimal with a period of 6 digits. For 1/p (where p is prime), the period can be up to p-1 digits. 1/3 = 0.333... (period 1), 1/9 = 0.111... (period 1), and 1/11 = 0.09090... (period 2). The period for 1/7 is the longest among the options. 🔄",
        wrongAnswerExplanations: {
            "1/3": "1/3 = 0.333..., which has a period of 1 digit.",
            "1/9": "1/9 = 0.111..., which has a period of 1 digit.",
            "1/11": "1/11 = 0.09090..., which has a period of 2 digits."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t3_qe12',
        type: "mcq",
        question: "What is the rational number form of 0.53?",
        options: [
            "53/100",
            "53/90",
            "53/99",
            "59/100"
        ],
        correctAnswer: "53/100",
        explanation: "0.53 is a terminating decimal that can be written as 53/100. Since 100 = 10² = 2² × 5², the fraction has a terminating decimal expansion. The fraction can be reduced to 53/100, which is already in its lowest form since 53 and 100 do not share any common factors. 🔢",
        wrongAnswerExplanations: {
            "53/90": "This is incorrect. 53/90 = 0.5888..., not 0.53.",
            "53/99": "This is incorrect. 53/99 = 0.535353..., not 0.53.",
            "59/100": "This is incorrect. 59/100 = 0.59, not 0.53."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch1_t3_qe13',
        type: "mcq",
        question: "The decimal expansion of 5/6 is:",
        options: [
            "0.8333...",
            "0.833",
            "0.8",
            "0.83333"
        ],
        correctAnswer: "0.8333...",
        explanation: "5/6 = 0.8333... (with 3 repeating infinitely). We get this by dividing 5 by 6, which gives 0.8333... Since 6 = 2 × 3 and 3 is a prime factor that's not 2 or 5, the decimal expansion will be non-terminating and repeating. This can also be written as 0.83̅. 📝",
        wrongAnswerExplanations: {
            "0.833": "This is a terminating decimal approximation of 5/6, not the exact value.",
            "0.8": "This is 4/5, not 5/6.",
            "0.83333": "This is a terminating decimal approximation of 5/6, not the exact value."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t3_qe14',
        type: "mcq",
        question: "To convert a repeating decimal like 0.636363... to a fraction, we use:",
        options: [
            "Direct division",
            "Algebraic method using equations",
            "Approximation to the nearest fraction",
            "Converting to a percentage first"
        ],
        correctAnswer: "Algebraic method using equations",
        explanation: "To convert a repeating decimal to a fraction, we use an algebraic method: Let x = 0.636363... Then 100x = 63.6363... Subtracting: 100x - x = 63.6363... - 0.636363... giving 99x = 63, so x = 63/99 = 7/11. This method works by creating an equation that cancels out the repeating portion of the decimal. 📊",
        wrongAnswerExplanations: {
            "Direct division": "This would be used to go from fraction to decimal, not the other way around.",
            "Approximation to the nearest fraction": "This gives an estimate, not the exact fractional representation.",
            "Converting to a percentage first": "Converting to a percentage doesn't help find the exact fraction."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t3_qe15',
        type: "mcq",
        question: "Which of the following decimals represents an irrational number?",
        options: [
            "0.333333...",
            "0.142857142857...",
            "0.101001000100001...",
            "0.125"
        ],
        correctAnswer: "0.101001000100001...",
        explanation: "0.101001000100001... represents an irrational number because its decimal expansion is non-terminating and non-repeating. The pattern of digits (increasing numbers of 0s between 1s) shows there's no fixed repeating sequence. Irrational numbers are precisely those with non-terminating, non-repeating decimal expansions. 🧩",
        wrongAnswerExplanations: {
            "0.333333...": "This is 1/3, a rational number with a repeating decimal expansion.",
            "0.142857142857...": "This is 1/7, a rational number with a repeating decimal expansion.",
            "0.125": "This is 1/8, a rational number with a terminating decimal expansion."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t3_qe16',
        type: "mcq",
        question: "Every point on the real number line corresponds to:",
        options: [
            "Only rational numbers",
            "Only irrational numbers",
            "Exactly one real number",
            "Multiple real numbers"
        ],
        correctAnswer: "Exactly one real number",
        explanation: "Every point on the real number line corresponds to exactly one real number, and every real number corresponds to exactly one point on the line. This one-to-one correspondence is fundamental to our understanding of real numbers and allows us to visualize them geometrically. This is part of the completeness property of real numbers. 📏",
        wrongAnswerExplanations: {
            "Only rational numbers": "This is incorrect. There are points on the number line that correspond to irrational numbers like √2 and π.",
            "Only irrational numbers": "This is incorrect. There are points on the number line that correspond to rational numbers like 1/2 and 3.",
            "Multiple real numbers": "This is incorrect. Each point corresponds to exactly one real number."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t3_qe17',
        type: "mcq",
        question: "The decimal expansion of 1/11 is:",
        options: [
            "0.111...",
            "0.0909...",
            "0.1111",
            "0.11111..."
        ],
        correctAnswer: "0.0909...",
        explanation: "1/11 = 0.0909... (with 09 repeating). When we divide 1 by 11, we get a repeating pattern of 09. This is a non-terminating repeating decimal because 11 has factors other than 2 and 5. This can also be written as 0.0̅9̅ with a bar over both digits to indicate the repeating pattern. 🔄",
        wrongAnswerExplanations: {
            "0.111...": "This is 1/9, not 1/11.",
            "0.1111": "This is a terminating decimal and not equal to 1/11.",
            "0.11111...": "This is 1/9, not 1/11."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t3_qe18',
        type: "mcq",
        question: "Which of these numbers has a terminating decimal expansion?",
        options: [
            "7/12",
            "3/20",
            "5/14",
            "2/9"
        ],
        correctAnswer: "3/20",
        explanation: "3/20 has a terminating decimal expansion because 20 = 2²×5, so its prime factorization only contains 2 and 5. When we divide 3 by 20, we get 0.15, which terminates. A fraction p/q (in lowest form) has a terminating decimal if and only if the prime factorization of q contains only factors of 2 and 5. ➗",
        wrongAnswerExplanations: {
            "7/12": "12 = 2²×3 contains the prime factor 3, so 7/12 = 0.5833... doesn't terminate.",
            "5/14": "14 = 2×7 contains the prime factor 7, so 5/14 = 0.357142857142... doesn't terminate.",
            "2/9": "9 = 3² only contains the prime factor 3, so 2/9 = 0.222... doesn't terminate."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t3_qe19',
        type: "mcq",
        question: "A real number that is both rational and irrational:",
        options: [
            "Doesn't exist",
            "Equals 0",
            "Equals 1",
            "Is any integer"
        ],
        correctAnswer: "Doesn't exist",
        explanation: "A number cannot be both rational and irrational. By definition, these are mutually exclusive categories that together make up all real numbers. Every real number is either rational (can be expressed as a ratio of integers) or irrational (cannot be expressed as a ratio of integers), but never both. This is a fundamental classification of real numbers. 🧠",
        wrongAnswerExplanations: {
            "Equals 0": "0 = 0/1 is a rational number, not both rational and irrational.",
            "Equals 1": "1 = 1/1 is a rational number, not both rational and irrational.",
            "Is any integer": "All integers are rational numbers, not both rational and irrational."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t3_qe20',
        type: "mcq",
        question: "What kind of decimal expansion does the number 0.999999... have?",
        options: [
            "Terminating decimal",
            "Non-terminating repeating decimal",
            "Non-terminating non-repeating decimal",
            "None of these"
        ],
        correctAnswer: "Non-terminating repeating decimal",
        explanation: "0.999999... is a non-terminating repeating decimal where the digit 9 repeats infinitely. Any decimal where a digit or sequence of digits repeats infinitely is a non-terminating repeating decimal. Interestingly, 0.999... = 1, which can be proven using the algebraic method for converting repeating decimals to fractions. 🔍",
        wrongAnswerExplanations: {
            "Terminating decimal": "A terminating decimal ends after a finite number of digits. 0.999... continues infinitely.",
            "Non-terminating non-repeating decimal": "The decimal 0.999... has a clear repeating pattern (the digit 9), so it's not non-repeating.",
            "None of these": "0.999... clearly fits the category of non-terminating repeating decimal."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
