// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter1\Topic5\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch1_t5_qe1',
        type: "mcq",
        question: "What is the value of 2⁴ × 2³?",
        options: [
            "2⁷",
            "2¹²",
            "4³",
            "6⁷"
        ],
        correctAnswer: "2⁷",
        explanation: "When multiplying exponential expressions with the same base, we add the exponents: 2⁴ × 2³ = 2⁴⁺³ = 2⁷. This is the first law of exponents: x^a × x^b = x^(a+b), where x is the base and a, b are the exponents. 📝",
        wrongAnswerExplanations: {
            "2¹²": "This is incorrect. We add the exponents, not multiply them. 2⁴ × 2³ = 2⁴⁺³ = 2⁷, not 2¹².",
            "4³": "This is incorrect. The expression is 2⁴ × 2³, not (2²)³ = 4³.",
            "6⁷": "This is incorrect. We don't add the bases (2+2=4). The base remains 2, and we add the exponents."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t5_qe2',
        type: "mcq",
        question: "Simplify: 5⁵ ÷ 5²",
        options: [
            "5³",
            "5⁷",
            "5²·⁵",
            "25"
        ],
        correctAnswer: "5³",
        explanation: "When dividing exponential expressions with the same base, we subtract the exponents: 5⁵ ÷ 5² = 5⁵⁻² = 5³. This is the second law of exponents: x^a ÷ x^b = x^(a-b), where x is the base and a, b are the exponents. 🔢",
        wrongAnswerExplanations: {
            "5⁷": "This is incorrect. When dividing with the same base, we subtract the exponents, not add them.",
            "5²·⁵": "This is incorrect. We don't divide the exponents (5÷2=2.5). Instead, we subtract them: 5⁵ ÷ 5² = 5⁵⁻² = 5³.",
            "25": "This is incorrect. 25 = 5², but the correct answer is 5³ = 125."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t5_qe3',
        type: "mcq",
        question: "What is the value of (3²)⁴?",
        options: [
            "3⁸",
            "3⁶",
            "6⁴",
            "9⁴"
        ],
        correctAnswer: "3⁸",
        explanation: "When raising a power to another power, we multiply the exponents: (3²)⁴ = 3²ˣ⁴ = 3⁸. This is the third law of exponents: (x^a)^b = x^(a×b), where x is the base and a, b are the exponents. 📊",
        wrongAnswerExplanations: {
            "3⁶": "This is incorrect. When raising a power to another power, we multiply the exponents (2×4=8), not add them (2+4=6).",
            "6⁴": "This is incorrect. We don't multiply the base by the first exponent. The expression (3²)⁴ means (3²) is raised to the power 4.",
            "9⁴": "This is incorrect. While 3² = 9, the expression is asking for (3²)⁴ = 3⁸, not (3²)⁴ = 9⁴."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t5_qe4',
        type: "mcq",
        question: "Simplify: (2³ × 2⁴)²",
        options: [
            "2¹⁴",
            "2⁷",
            "2⁷ˣ²",
            "4⁷"
        ],
        correctAnswer: "2¹⁴",
        explanation: "First, use the first law to add exponents inside the parentheses: (2³ × 2⁴)² = (2³⁺⁴)² = (2⁷)² \nNext, use the third law to multiply exponents: (2⁷)² = 2⁷ˣ² = 2¹⁴ \nThis combines the first and third laws of exponents to simplify the expression efficiently. 🧮",
        wrongAnswerExplanations: {
            "2⁷": "This is only the result of the first step (2³ × 2⁴ = 2⁷). The full simplification requires applying the exponent 2 as well.",
            "2⁷ˣ²": "This is written incorrectly. The correct simplified form is 2¹⁴, not 2⁷ˣ².",
            "4⁷": "This is incorrect. 4 = 2², but the expression simplifies to 2¹⁴, not 4⁷."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t5_qe5',
        type: "mcq",
        question: "What is the value of 3⁰?",
        options: [
            "0",
            "1",
            "3",
            "Undefined"
        ],
        correctAnswer: "1",
        explanation: "Any non-zero number raised to the power 0 equals 1. So 3⁰ = 1. This is a fundamental law of exponents: x⁰ = 1 (where x ≠ 0). This rule is consistent with the general law of exponents for division, as x^a ÷ x^a = x^(a-a) = x⁰ = 1. 🔍",
        wrongAnswerExplanations: {
            "0": "This is incorrect. Any number raised to the power 0 equals 1, not 0 (assuming the base is not 0).",
            "3": "This is incorrect. 3⁰ = 1, not 3.",
            "Undefined": "This is incorrect. 3⁰ is defined and equals 1."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t5_qe6',
        type: "mcq",
        question: "Simplify: 7¹ × 7³ × 7⁵",
        options: [
            "7⁹",
            "7¹⁵",
            "7⁸",
            "7³"
        ],
        correctAnswer: "7⁹",
        explanation: "Using the first law of exponents, when multiplying powers with the same base, add the exponents: 7¹ × 7³ × 7⁵ = 7¹⁺³⁺⁵ = 7⁹. This extends the first law to multiple factors: x^a × x^b × x^c = x^(a+b+c). 🧮",
        wrongAnswerExplanations: {
            "7¹⁵": "This is incorrect. The exponents are added, not multiplied. 1+3+5=9, not 15.",
            "7⁸": "This is incorrect. The sum of the exponents is 1+3+5=9, not 8.",
            "7³": "This is incorrect. The sum of the exponents is 1+3+5=9, not 3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t5_qe7',
        type: "mcq",
        question: "What is the value of 5⁻²?",
        options: [
            "-10",
            "-25",
            "1/25",
            "25"
        ],
        correctAnswer: "1/25",
        explanation: "A negative exponent means the reciprocal of the positive exponent: 5⁻² = 1/5² = 1/25. This is the law of negative exponents: x^(-n) = 1/(x^n), where x ≠ 0. So any number with a negative exponent equals 1 divided by the same number with a positive exponent. 📝",
        wrongAnswerExplanations: {
            "-10": "This is incorrect. A negative exponent doesn't make the result negative; it means taking the reciprocal.",
            "-25": "This is incorrect. 5⁻² doesn't equal -5². It equals 1/5².",
            "25": "This is incorrect. 5² = 25, but 5⁻² = 1/25."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t5_qe8',
        type: "mcq",
        question: "Simplify: (4⁻¹ × 2⁻²)⁻¹",
        options: [
            "4 × 2²",
            "4 ÷ 2²",
            "4⁻¹ ÷ 2⁻²",
            "4⁻¹ × 2⁻²"
        ],
        correctAnswer: "4 × 2²",
        explanation: "Using the law of negative exponents: (4⁻¹ × 2⁻²)⁻¹ = 1/(4⁻¹ × 2⁻²) = 1/(1/4 × 1/2²) = 1/(1/4 × 1/4) = 1/(1/16) = 16 = 4 × 2². Alternatively, we can use (x^a)^b = x^(a×b) and x^(-a) = 1/x^a to get (4⁻¹)⁻¹ × (2⁻²)⁻¹ = 4¹ × 2² = 4 × 4 = 16. 🔢",
        wrongAnswerExplanations: {
            "4 ÷ 2²": "This is incorrect. The reciprocal of a product is the product of the reciprocals with their signs flipped.",
            "4⁻¹ ÷ 2⁻²": "This is incorrect. When taking the reciprocal of an expression, the exponents change sign.",
            "4⁻¹ × 2⁻²": "This is just the expression inside the outer exponent, not the simplified answer."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t5_qe9',
        type: "mcq",
        question: "Simplify: 6³ ÷ 6⁵",
        options: [
            "6²",
            "6⁻²",
            "1/6²",
            "1/36"
        ],
        correctAnswer: "6⁻²",
        explanation: "When dividing powers with the same base, subtract the exponents: 6³ ÷ 6⁵ = 6³⁻⁵ = 6⁻² = 1/6². This follows from the second law of exponents: x^a ÷ x^b = x^(a-b). Since a < b in this case, the result has a negative exponent. 🔍",
        wrongAnswerExplanations: {
            "6²": "This is incorrect. The exponents are subtracted as 3-5=-2, not 2.",
            "1/6²": "This is the correct numerical value (1/36), but written in a different form. The answer in exponential form is 6⁻².",
            "1/36": "This is the correct numerical value, but the question asks for the simplified exponential form, which is 6⁻²."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t5_qe10',
        type: "mcq",
        question: "What is the value of (2/3)⁻²?",
        options: [
            "2²/3²",
            "3²/2²",
            "2⁻²/3⁻²",
            "-2²/3²"
        ],
        correctAnswer: "3²/2²",
        explanation: "When a fraction is raised to a negative exponent, we can flip the fraction and make the exponent positive: (2/3)⁻² = (3/2)² = 3²/2² = 9/4. This combines the laws of negative exponents and fractions: (x/y)^(-n) = (y/x)^n. 📊",
        wrongAnswerExplanations: {
            "2²/3²": "This is incorrect. A negative exponent means we need to flip the fraction first.",
            "2⁻²/3⁻²": "This is incorrect. The negative exponent applies to the entire fraction, not to each part separately.",
            "-2²/3²": "This is incorrect. A negative exponent doesn't make the result negative."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t5_qe11',
        type: "mcq",
        question: "Simplify: (10⁴ × 10⁻⁶) ÷ 10⁻³",
        options: [
            "10¹",
            "10⁻³",
            "10⁷",
            "10⁻¹"
        ],
        correctAnswer: "10¹",
        explanation: "First, use the first law to simplify the multiplication: (10⁴ × 10⁻⁶) = 10⁴⁺(⁻⁶) = 10⁻² \nThen, use the second law for division: 10⁻² ÷ 10⁻³ = 10⁻²⁻(⁻³) = 10⁻²⁺³ = 10¹ \nThe final answer is 10¹, which equals 10. This applies multiple laws of exponents in sequence. 🧮",
        wrongAnswerExplanations: {
            "10⁻³": "This is incorrect. The calculation gives 10¹, not 10⁻³.",
            "10⁷": "This is incorrect. Be careful with the negative exponents in the calculation.",
            "10⁻¹": "This is incorrect. The calculation gives 10¹, not 10⁻¹."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t5_qe12',
        type: "mcq",
        question: "What is the value of (2⁻¹ + 3⁻¹)⁻¹?",
        options: [
            "2 + 3",
            "6/5",
            "2/3",
            "5"
        ],
        correctAnswer: "6/5",
        explanation: "(2⁻¹ + 3⁻¹)⁻¹ = (1/2 + 1/3)⁻¹ = (3/6 + 2/6)⁻¹ = (5/6)⁻¹ = 6/5. This uses the law of negative exponents twice: first to convert each term to a fraction, then to take the reciprocal of the sum. 🔢",
        wrongAnswerExplanations: {
            "2 + 3": "This is incorrect. The expression is not just the sum of the bases.",
            "2/3": "This is incorrect. The correct calculation gives 6/5.",
            "5": "This is incorrect. The expression evaluates to 6/5, not 5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t5_qe13',
        type: "mcq",
        question: "If 2^x = 32, what is the value of x?",
        options: [
            "16",
            "6",
            "5",
            "4"
        ],
        correctAnswer: "5",
        explanation: "We need to find x where 2^x = 32. Writing 32 in terms of powers of 2: 32 = 2^5. Since the bases are the same (2), the exponents must be equal. Therefore, x = 5. This uses the property that if a^m = a^n, then m = n (for a ≠ 0,1). 🔍",
        wrongAnswerExplanations: {
            "16": "This is incorrect. If x = 16, then 2^x = 2^16, which is much larger than 32.",
            "6": "This is incorrect. 2^6 = 64, which is not equal to 32.",
            "4": "This is incorrect. 2^4 = 16, which is not equal to 32."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t5_qe14',
        type: "mcq",
        question: "Simplify: (3^2 × 3^-4) × 3^5",
        options: [
            "3^3",
            "3^7",
            "3",
            "3^-1"
        ],
        correctAnswer: "3^3",
        explanation: "Using the laws of exponents: (3^2 × 3^-4) × 3^5 = 3^(2+(-4)) × 3^5 = 3^-2 × 3^5 = 3^(-2+5) = 3^3 = 27. This applies the first law multiple times, combining all exponents by addition. 📝",
        wrongAnswerExplanations: {
            "3^7": "This is incorrect. Be careful with the negative exponent: 2+(-4)+5=3, not 7.",
            "3": "This is incorrect. The answer is 3^3 = 27, not 3^1 = 3.",
            "3^-1": "This is incorrect. The calculation gives 3^3, which is positive, not negative."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t5_qe15',
        type: "mcq",
        question: "If 4^x = 64, what is the value of x?",
        options: [
            "6",
            "3",
            "4",
            "8"
        ],
        correctAnswer: "3",
        explanation: "We need to solve 4^x = 64. Let's rewrite 64 in terms of 4: 64 = 4^3 (since 4^3 = 64). Since the bases are equal (4), the exponents must be equal. Therefore, x = 3. Alternatively, we can solve using logarithms: log₄(64) = x, which gives x = 3. 🔢",
        wrongAnswerExplanations: {
            "6": "This is incorrect. 4^6 = 4096, not 64.",
            "4": "This is incorrect. 4^4 = 256, not 64.",
            "8": "This is incorrect. 4^8 is much larger than 64."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t5_qe16',
        type: "mcq",
        question: "What is the value of 9^(1/2)?",
        options: [
            "4.5",
            "3",
            "81",
            "18"
        ],
        correctAnswer: "3",
        explanation: "9^(1/2) means the square root of 9, which is 3. This is because (3)² = 9, so 3 is the number that, when squared, gives 9. In general, x^(1/n) represents the nth root of x. So x^(1/2) is the square root of x. 📊",
        wrongAnswerExplanations: {
            "4.5": "This is incorrect. 4.5 is half of 9, but 9^(1/2) means the square root of 9, not 9 divided by 2.",
            "81": "This is incorrect. 81 is 9², not 9^(1/2).",
            "18": "This is incorrect. 18 is 9×2, not 9^(1/2)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t5_qe17',
        type: "mcq",
        question: "Simplify: 8^(2/3)",
        options: [
            "4",
            "16/3",
            "2^(4/3)",
            "4√2"
        ],
        correctAnswer: "4",
        explanation: "8^(2/3) means (8^(1/3))^2. First, find 8^(1/3), which is the cube root of 8, which equals 2 (since 2^3 = 8). Then, square this result: 2^2 = 4. Alternatively, we can write 8 as 2^3, so 8^(2/3) = (2^3)^(2/3) = 2^(3×2/3) = 2^2 = 4. 🧮",
        wrongAnswerExplanations: {
            "16/3": "This is incorrect. The fractional exponent 2/3 means 'cube root, then square', not division.",
            "2^(4/3)": "This is incorrect. 8^(2/3) simplifies to 4, which equals 2^2, not 2^(4/3).",
            "4√2": "This is incorrect. 8^(2/3) = 4, not 4√2."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t5_qe18',
        type: "mcq",
        question: "What is the value of (1/25)^(-1/2)?",
        options: [
            "5",
            "1/5",
            "-5",
            "25"
        ],
        correctAnswer: "5",
        explanation: "(1/25)^(-1/2) = ((1/25)^(-1))^(1/2) = (25)^(1/2) = 5. This uses two laws: first, the negative exponent flips the fraction (so (1/25)^(-1) = 25), and then the 1/2 exponent takes the square root. 🔍",
        wrongAnswerExplanations: {
            "1/5": "This is incorrect. (1/25)^(1/2) = 1/5, but the given exponent is -1/2, not 1/2.",
            "-5": "This is incorrect. The negative in the exponent doesn't make the result negative.",
            "25": "This is incorrect. (1/25)^(-1) = 25, but we still need to apply the 1/2 exponent."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t5_qe19',
        type: "mcq",
        question: "Simplify: (16^(1/2))^(1/2)",
        options: [
            "4",
            "2",
            "8",
            "16"
        ],
        correctAnswer: "2",
        explanation: "(16^(1/2))^(1/2) means to take the square root of 16, then take the square root again. 16^(1/2) = 4, and 4^(1/2) = 2. Using the law of exponents directly: (16^(1/2))^(1/2) = 16^(1/2×1/2) = 16^(1/4) = 2 (since 2^4 = 16). 📝",
        wrongAnswerExplanations: {
            "4": "This is only the first square root of 16, but we need to take another square root.",
            "8": "This is incorrect. The calculation gives 2, not 8.",
            "16": "This is the original number, not the result after taking two square roots."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t5_qe20',
        type: "mcq",
        question: "If 5^x = 125, what is the value of 5^(x-1)?",
        options: [
            "25",
            "5",
            "625",
            "1/25"
        ],
        correctAnswer: "25",
        explanation: "First, find x: 5^x = 125 = 5^3, so x = 3. \nNow, 5^(x-1) = 5^(3-1) = 5^2 = 25. \nThis uses the property that if a^m = a^n, then m = n (for a ≠ 0,1), and then applies the result to a related expression. 🔢",
        wrongAnswerExplanations: {
            "5": "This is 5^1, not 5^2 = 25.",
            "625": "This is 5^4, not 5^2 = 25.",
            "1/25": "This is 5^(-2), not 5^2 = 25."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
