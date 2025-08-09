import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch5_t2_qm1',
        type: "mcq",
        question: "If a number has prime factorization 2³ × 3⁴ × 5², what is its square root?",
        options: ["2 × 3² × 5", "2² × 3² × 5", "2³ × 3² × 5", "2 × 3⁴ × 5"],
        correctAnswer: "2 × 3² × 5",
        explanation: "Divide each power by 2: 2³ ÷ 2 = 2¹, 3⁴ ÷ 2 = 3², 5² ÷ 2 = 5¹. Therefore, square root = 2 × 3² × 5. 🔢",
        wrongAnswerExplanations: {
            "2² × 3² × 5": "Power of 2 is incorrect.",
            "2³ × 3² × 5": "Power of 2 is too large.",
            "2 × 3⁴ × 5": "Power of 3 is too large."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch5_t2_qm2',
        type: "mcq",
        question: "Using division method to find √2304, what is the first digit of the square root?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4",
        explanation: "Group as 23|04. Largest square ≤ 23 is 16 (4²). So first digit is 4. Complete √2304 = 48. 📐",
        wrongAnswerExplanations: {
            "3": "3² = 9, too small for leftmost group 23.",
            "5": "5² = 25, too large for leftmost group 23.",
            "6": "6² = 36, too large for leftmost group 23."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch5_t2_qm3',
        type: "mcq",
        question: "In the division method for √3136, after grouping digits (31|36), what is the divisor for finding the second digit?",
        options: ["10", "20", "100", "110"],
        correctAnswer: "110",
        explanation: "First digit is 5 (5² ≤ 31). Divisor for second digit = 2 × 50 + 6 = 110. This helps find the second digit 6. 🎯",
        wrongAnswerExplanations: {
            "10": "This is too small for a number in thousands.",
            "20": "This would give an incorrect second digit.",
            "100": "This is close but not correct; forgot to add the second digit."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch5_t2_qm4',
        type: "mcq",
        question: "Which of these numbers requires the most steps in prime factorization to find its square root?",
        options: ["900", "961", "1024", "1089"],
        correctAnswer: "900",
        explanation: "900 = 2² × 3² × 5². Has three different prime factors. 961 = 31², 1024 = 2¹⁰, 1089 = 33² have fewer different prime factors. 📊",
        wrongAnswerExplanations: {
            "961": "961 = 31², only one prime factor.",
            "1024": "1024 = 2¹⁰, only one prime factor.",
            "1089": "1089 = 33², only one prime factor."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch5_t2_qm5',
        type: "mcq",
        question: "If a number N = 2⁴ × 3² × 5³, which statement is true?",
        options: [
            "N is a perfect square",
            "√N is a rational number",
            "√N is an irrational number",
            "N is a perfect cube"
        ],
        correctAnswer: "√N is an irrational number",
        explanation: "5³ has odd power, so N isn't a perfect square. Therefore, √N is irrational. For a perfect square, all prime factors must have even powers. 🎲",
        wrongAnswerExplanations: {
            "N is a perfect square": "5 has power 3 (odd), so N isn't a perfect square.",
            "√N is a rational number": "Since N isn't a perfect square, √N is irrational.",
            "N is a perfect cube": "Powers don't match for a perfect cube."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch5_t2_qm6',
        type: "mcq",
        question: "In finding √4489 using division method, what is the remainder after the first step?",
        options: ["49", "89", "289", "489"],
        correctAnswer: "289",
        explanation: "Group as 44|89. 6² = 36 < 44, 7² = 49 > 44, so 6 is first digit. 44 - 36 = 8, bring down 89. Remainder = 289. 🔍",
        wrongAnswerExplanations: {
            "49": "This is not the correct calculation.",
            "89": "This ignores the first step calculation.",
            "489": "This is larger than the original first group."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch5_t2_qm7',
        type: "mcq",
        question: "Which property makes prime factorization useful for finding square roots?",
        options: [
            "Prime factors are always less than 10",
            "Square root of a product equals product of square roots",
            "Prime factors are unique for each number",
            "Prime factorization always gives whole numbers"
        ],
        correctAnswer: "Square root of a product equals product of square roots",
        explanation: "√(a × b) = √a × √b makes prime factorization effective. We can find square root of each prime factor separately. 📝",
        wrongAnswerExplanations: {
            "Prime factors are always less than 10": "Many prime numbers are larger than 10.",
            "Prime factors are unique for each number": "True, but not why it's useful for square roots.",
            "Prime factorization always gives whole numbers": "Not always true for square roots."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch5_t2_qm8',
        type: "mcq",
        question: "For which number would division method be more efficient than prime factorization?",
        options: ["1024", "1156", "1225", "1296"],
        correctAnswer: "1156",
        explanation: "1156 = 34². Finding this prime factorization is harder than using division method. Other options have simpler prime factorizations. 🎯",
        wrongAnswerExplanations: {
            "1024": "1024 = 2¹⁰, easy prime factorization.",
            "1225": "1225 = 35², easy to recognize.",
            "1296": "1296 = 2⁴ × 3⁴, systematic factorization."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch5_t2_qm9',
        type: "mcq",
        question: "What is the next step after getting 2² × 3⁴ × 5² in prime factorization method?",
        options: [
            "Add all powers",
            "Multiply all numbers",
            "Divide each power by 2",
            "Square all prime factors"
        ],
        correctAnswer: "Divide each power by 2",
        explanation: "To find square root, divide each power by 2: 2² ÷ 2 = 2¹, 3⁴ ÷ 2 = 3², 5² ÷ 2 = 5¹. Then multiply results. 🔢",
        wrongAnswerExplanations: {
            "Add all powers": "Adding powers doesn't give square root.",
            "Multiply all numbers": "This gives original number.",
            "Square all prime factors": "This makes number larger."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch5_t2_qm10',
        type: "mcq",
        question: "In division method for √2025, what is the divisor for the second digit if first digit is 4?",
        options: ["40", "80", "85", "90"],
        correctAnswer: "85",
        explanation: "After 4 (first digit), divisor = 2 × 40 + 5 = 85. This helps find second digit 5, making √2025 = 45. 📐",
        wrongAnswerExplanations: {
            "40": "This is just the first digit × 10.",
            "80": "This is 2 × 40, forgot to add second digit.",
            "90": "This is too large, would give wrong answer."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch5_t2_qm11',
        type: "mcq",
        question: "If a number has prime factorization 2⁶ × 3⁴ × 7², what is the prime factorization of its square root?",
        options: [
            "2³ × 3² × 7",
            "2² × 3² × 7",
            "2³ × 3 × 7",
            "2² × 3 × 7"
        ],
        correctAnswer: "2³ × 3² × 7",
        explanation: "Divide each power by 2: 2⁶÷2 = 2³, 3⁴÷2 = 3², 7²÷2 = 7¹. The square root is 2³ × 3² × 7. 🎲",
        wrongAnswerExplanations: {
            "2² × 3² × 7": "Power of 2 is incorrect.",
            "2³ × 3 × 7": "Power of 3 is incorrect.",
            "2² × 3 × 7": "Powers of both 2 and 3 are incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch5_t2_qm12',
        type: "mcq",
        question: "Using division method for √3600, after finding first digit 6, what is brought down?",
        options: ["0", "00", "600", "3600"],
        correctAnswer: "00",
        explanation: "Group as 36|00. After 6² = 36, bring down next pair '00'. This helps find second digit 0. √3600 = 60. 🔍",
        wrongAnswerExplanations: {
            "0": "Must bring down pair of digits.",
            "600": "Only bring down next pair, not whole number.",
            "3600": "Only bring down next pair, not original number."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch5_t2_qm13',
        type: "mcq",
        question: "Which number would be quickest to find square root of using prime factorization?",
        options: ["1296", "1369", "1444", "1521"],
        correctAnswer: "1369",
        explanation: "1369 = 37². Only one prime factor (37) with power 2. Others have multiple prime factors or larger numbers. 📊",
        wrongAnswerExplanations: {
            "1296": "1296 = 2⁴ × 3⁴, more factors to work with.",
            "1444": "1444 = 2² × 19², more factors to work with.",
            "1521": "1521 = 3 × 507, harder to factorize."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch5_t2_qm14',
        type: "mcq",
        question: "In division method, why do we pair digits from right to left?",
        options: [
            "Makes calculation easier",
            "Each pair represents a digit in square root",
            "Follows decimal system",
            "Reduces number of steps"
        ],
        correctAnswer: "Each pair represents a digit in square root",
        explanation: "Each pair of digits in the number corresponds to one digit in its square root. This relationship helps in systematic calculation. 🎯",
        wrongAnswerExplanations: {
            "Makes calculation easier": "Not the main reason for pairing.",
            "Follows decimal system": "Not related to decimal system.",
            "Reduces number of steps": "Doesn't affect number of steps."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch5_t2_qm15',
        type: "mcq",
        question: "What is the relationship between the number of digit pairs and the number of digits in the square root?",
        options: [
            "They are equal",
            "Square root has one more digit",
            "Square root has one less digit",
            "No fixed relationship"
        ],
        correctAnswer: "They are equal",
        explanation: "Number of digit pairs equals number of digits in square root. Example: 1225 has 2 pairs (12|25) and √1225 = 35 has 2 digits. 🔢",
        wrongAnswerExplanations: {
            "Square root has one more digit": "This is incorrect pattern.",
            "Square root has one less digit": "This is incorrect pattern.",
            "No fixed relationship": "There is a fixed relationship."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch5_t2_qm16',
        type: "mcq",
        question: "If a number N = 2⁴ × 3³ × 5², which statement about √N is true?",
        options: [
            "It's a natural number",
            "It's an irrational number",
            "It's a perfect square",
            "It equals N/2"
        ],
        correctAnswer: "It's an irrational number",
        explanation: "3³ has odd power, so N isn't perfect square. Therefore, √N is irrational. For rational square root, all powers must be even. 📝",
        wrongAnswerExplanations: {
            "It's a natural number": "Since 3 has odd power, √N isn't rational.",
            "It's a perfect square": "√N isn't even a rational number.",
            "It equals N/2": "Square root doesn't work this way."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch5_t2_qm17',
        type: "mcq",
        question: "In division method for √2916, what makes 5 an incorrect choice for first digit?",
        options: [
            "5² < 29",
            "5² > 29",
            "5 is not a factor of 2916",
            "5 is too small"
        ],
        correctAnswer: "5² > 29",
        explanation: "Group as 29|16. 5² = 25 is too small, but 6² = 36 > 29, so 5 is incorrect. First digit should be 5. 🎯",
        wrongAnswerExplanations: {
            "5² < 29": "Actually, 5² = 25 < 29.",
            "5 is not a factor of 2916": "Not relevant for division method.",
            "5 is too small": "Need specific reason why it's wrong."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch5_t2_qm18',
        type: "mcq",
        question: "Which step is crucial in both prime factorization and division methods?",
        options: [
            "Checking if number is perfect square",
            "Finding factors of 2",
            "Grouping digits in pairs",
            "Multiplying by 2"
        ],
        correctAnswer: "Checking if number is perfect square",
        explanation: "Both methods need to verify if number is perfect square. Prime factorization checks powers, division method checks for zero remainder. 🔍",
        wrongAnswerExplanations: {
            "Finding factors of 2": "Not crucial in division method.",
            "Grouping digits in pairs": "Only for division method.",
            "Multiplying by 2": "Not a crucial step in either method."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch5_t2_qm19',
        type: "mcq",
        question: "For √1764, which method would be more efficient?",
        options: [
            "Prime factorization because it's 2² × 3² × 7²",
            "Division method because it's 42²",
            "Both methods take same time",
            "Depends on calculator availability"
        ],
        correctAnswer: "Division method because it's 42²",
        explanation: "Division method is quicker: 17|64 gives 42 directly. Prime factorization requires finding multiple factors: 2² × 3² × 7². 📐",
        wrongAnswerExplanations: {
            "Prime factorization because it's 2² × 3² × 7²": "Finding these factors takes longer.",
            "Both methods take same time": "Division method is clearly faster here.",
            "Depends on calculator availability": "Even without calculator, division is faster."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch5_t2_qm20',
        type: "mcq",
        question: "What is the key difference between prime factorization and division method for finding square roots?",
        options: [
            "One works for decimals, other doesn't",
            "One gives approximate values",
            "One uses factors, other uses place value",
            "One is always faster"
        ],
        correctAnswer: "One uses factors, other uses place value",
        explanation: "Prime factorization uses prime factors and their powers, while division method uses place value and digit pairs. Both are valid but use different principles. 🎲",
        wrongAnswerExplanations: {
            "One works for decimals, other doesn't": "Both can work with decimals.",
            "One gives approximate values": "Both give exact values for perfect squares.",
            "One is always faster": "Speed depends on the number."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 