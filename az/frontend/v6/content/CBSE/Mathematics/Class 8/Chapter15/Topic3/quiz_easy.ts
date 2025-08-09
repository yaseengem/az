import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch15_t3_qe1',
        type: "mcq",
        question: "If all birds can fly and a penguin is a bird, what can you deduce?",
        options: [
            "The premise is false because penguins cannot fly",
            "Penguins can fly",
            "Some birds cannot fly",
            "All birds are penguins"
        ],
        correctAnswer: "The premise is false because penguins cannot fly",
        explanation: "This is a classic example of deductive reasoning where we need to check if the initial premise (all birds can fly) is true before making conclusions. 🤔",
        wrongAnswerExplanations: {
            "Penguins can fly": "This conclusion would be logical if the premise was true, but we know penguins cannot fly.",
            "Some birds cannot fly": "While true, this isn't a direct deduction from the given premises.",
            "All birds are penguins": "This reverses the relationship and is not a valid deduction."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch15_t3_qe2',
        type: "mcq",
        question: "If all squares are rectangles, and all rectangles have four sides, what can you conclude about squares?",
        options: [
            "Squares have four sides",
            "All rectangles are squares",
            "Some squares have more than four sides",
            "Rectangles and squares are different shapes"
        ],
        correctAnswer: "Squares have four sides",
        explanation: "Using transitive property in deductive reasoning: if A→B and B→C, then A→C. Here, squares→rectangles→four sides, therefore squares→four sides. 📐",
        wrongAnswerExplanations: {
            "All rectangles are squares": "This reverses the relationship incorrectly.",
            "Some squares have more than four sides": "This contradicts the logical conclusion.",
            "Rectangles and squares are different shapes": "This doesn't follow from the given premises."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch15_t3_qe3',
        type: "mcq",
        question: "If x > y and y > z, what can you conclude about x and z?",
        options: [
            "x > z",
            "x < z",
            "x = z",
            "Cannot be determined"
        ],
        correctAnswer: "x > z",
        explanation: "Using transitive property in inequalities: if x > y and y > z, then x > z. This is a fundamental principle of deductive reasoning with inequalities. 🔢",
        wrongAnswerExplanations: {
            "x < z": "This contradicts the transitive property of inequalities.",
            "x = z": "This is impossible given x > y and y > z.",
            "Cannot be determined": "The relationship can be determined using transitive property."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch15_t3_qe4',
        type: "mcq",
        question: "If all multiples of 4 are even numbers, and 12 is a multiple of 4, what can you conclude?",
        options: [
            "12 is an even number",
            "All even numbers are multiples of 4",
            "12 is odd",
            "4 is a multiple of 12"
        ],
        correctAnswer: "12 is an even number",
        explanation: "Using syllogistic reasoning: if all multiples of 4 are even, and 12 is a multiple of 4, then 12 must be even. This is a valid deductive conclusion. 🎯",
        wrongAnswerExplanations: {
            "All even numbers are multiples of 4": "This reverses the relationship incorrectly.",
            "12 is odd": "This contradicts the logical conclusion.",
            "4 is a multiple of 12": "This reverses the multiple relationship incorrectly."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch15_t3_qe5',
        type: "mcq",
        question: "If no prime numbers are divisible by 4, and 16 is divisible by 4, what can you conclude about 16?",
        options: [
            "16 is not a prime number",
            "16 is a prime number",
            "16 might be prime",
            "Cannot determine if 16 is prime"
        ],
        correctAnswer: "16 is not a prime number",
        explanation: "Using contrapositive reasoning: if no primes are divisible by 4, then any number divisible by 4 must not be prime. Since 16 is divisible by 4, it's not prime. 🔍",
        wrongAnswerExplanations: {
            "16 is a prime number": "This contradicts the logical conclusion.",
            "16 might be prime": "The conclusion is definite, not possible.",
            "Cannot determine if 16 is prime": "We can determine it using the given information."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch15_t3_qe6',
        type: "mcq",
        question: "If all equilateral triangles have equal angles, and triangle ABC is equilateral, what can you conclude?",
        options: [
            "Triangle ABC has equal angles",
            "Only some angles in triangle ABC are equal",
            "Triangle ABC has one right angle",
            "Cannot determine the angles of triangle ABC"
        ],
        correctAnswer: "Triangle ABC has equal angles",
        explanation: "Using direct deductive reasoning: if all equilateral triangles have equal angles, and ABC is equilateral, then ABC must have equal angles. 📐",
        wrongAnswerExplanations: {
            "Only some angles in triangle ABC are equal": "All angles must be equal, not just some.",
            "Triangle ABC has one right angle": "Equilateral triangles have 60° angles, not right angles.",
            "Cannot determine the angles of triangle ABC": "We can determine that all angles are equal."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch15_t3_qe7',
        type: "mcq",
        question: "If all perfect squares end in 0, 1, 4, 5, 6, or 9, and a number ends in 3, what can you conclude?",
        options: [
            "It is not a perfect square",
            "It is a perfect square",
            "It might be a perfect square",
            "Need more information to decide"
        ],
        correctAnswer: "It is not a perfect square",
        explanation: "Using the contrapositive: if all perfect squares end in certain digits (not including 3), then a number ending in 3 cannot be a perfect square. 🎯",
        wrongAnswerExplanations: {
            "It is a perfect square": "This contradicts the given information.",
            "It might be a perfect square": "We can definitively say it's not a perfect square.",
            "Need more information to decide": "The given information is sufficient."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch15_t3_qe8',
        type: "mcq",
        question: "If all integers divisible by 6 are also divisible by 2, and 24 is divisible by 6, what can you conclude?",
        options: [
            "24 is divisible by 2",
            "24 is not divisible by 2",
            "24 might be divisible by 2",
            "Cannot determine if 24 is divisible by 2"
        ],
        correctAnswer: "24 is divisible by 2",
        explanation: "Using transitive property: if numbers divisible by 6 are divisible by 2, and 24 is divisible by 6, then 24 must be divisible by 2. 🔢",
        wrongAnswerExplanations: {
            "24 is not divisible by 2": "This contradicts the logical conclusion.",
            "24 might be divisible by 2": "The conclusion is definite, not possible.",
            "Cannot determine if 24 is divisible by 2": "We can determine it using the given information."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch15_t3_qe9',
        type: "mcq",
        question: "If all parallelograms have parallel opposite sides, and PQRS is not a parallelogram, what can you conclude?",
        options: [
            "PQRS does not have parallel opposite sides",
            "PQRS has parallel opposite sides",
            "PQRS might have parallel opposite sides",
            "PQRS is a rectangle"
        ],
        correctAnswer: "PQRS might have parallel opposite sides",
        explanation: "Just because all parallelograms have parallel sides doesn't mean only parallelograms have parallel sides. Other shapes can have parallel sides too. 📐",
        wrongAnswerExplanations: {
            "PQRS does not have parallel opposite sides": "This is not a valid conclusion as other shapes can have parallel sides.",
            "PQRS has parallel opposite sides": "We cannot conclude this from the given information.",
            "PQRS is a rectangle": "This contradicts the given information that PQRS is not a parallelogram."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch15_t3_qe10',
        type: "mcq",
        question: "If all right angles are 90°, and angle XYZ is 85°, what can you conclude?",
        options: [
            "Angle XYZ is not a right angle",
            "Angle XYZ is a right angle",
            "Angle XYZ might be a right angle",
            "Cannot determine if XYZ is a right angle"
        ],
        correctAnswer: "Angle XYZ is not a right angle",
        explanation: "Using direct reasoning: if all right angles are 90° and XYZ is 85°, then XYZ cannot be a right angle as it's not 90°. 📐",
        wrongAnswerExplanations: {
            "Angle XYZ is a right angle": "This contradicts the given information.",
            "Angle XYZ might be a right angle": "We can definitively say it's not a right angle.",
            "Cannot determine if XYZ is a right angle": "We can determine it using the given information."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch15_t3_qe11',
        type: "mcq",
        question: "If all prime numbers greater than 2 are odd, and 15 is odd, what can you conclude?",
        options: [
            "15 might be prime",
            "15 is definitely prime",
            "15 is not prime",
            "Cannot determine if 15 is prime"
        ],
        correctAnswer: "15 might be prime",
        explanation: "Being odd is a necessary but not sufficient condition for being prime (>2). Just because 15 is odd doesn't mean it's prime. 🔢",
        wrongAnswerExplanations: {
            "15 is definitely prime": "Being odd doesn't guarantee being prime.",
            "15 is not prime": "We cannot conclude this just from the given information.",
            "Cannot determine if 15 is prime": "We can determine it's possible but not certain."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch15_t3_qe12',
        type: "mcq",
        question: "If all isosceles triangles have two equal sides, and triangle DEF has all sides equal, what can you conclude?",
        options: [
            "Triangle DEF is isosceles",
            "Triangle DEF is not isosceles",
            "Cannot determine if DEF is isosceles",
            "Only two sides of DEF are equal"
        ],
        correctAnswer: "Triangle DEF is isosceles",
        explanation: "If all sides are equal, then any two sides are equal, which satisfies the definition of an isosceles triangle. This is a valid deductive conclusion. 📐",
        wrongAnswerExplanations: {
            "Triangle DEF is not isosceles": "This contradicts the logical conclusion.",
            "Cannot determine if DEF is isosceles": "We can determine it from the given information.",
            "Only two sides of DEF are equal": "The given information states all sides are equal."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch15_t3_qe13',
        type: "mcq",
        question: "If all multiples of 3 are multiples of 1, and 15 is a multiple of 3, what can you conclude?",
        options: [
            "15 is a multiple of 1",
            "1 is a multiple of 15",
            "3 is a multiple of 15",
            "Cannot determine if 15 is a multiple of 1"
        ],
        correctAnswer: "15 is a multiple of 1",
        explanation: "Using transitive property: if multiples of 3 are multiples of 1, and 15 is a multiple of 3, then 15 must be a multiple of 1. 🔢",
        wrongAnswerExplanations: {
            "1 is a multiple of 15": "This reverses the relationship incorrectly.",
            "3 is a multiple of 15": "This reverses the relationship incorrectly.",
            "Cannot determine if 15 is a multiple of 1": "We can determine it using the given information."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch15_t3_qe14',
        type: "mcq",
        question: "If all numbers divisible by 4 are even, and n is an odd number, what can you conclude?",
        options: [
            "n is not divisible by 4",
            "n is divisible by 4",
            "n might be divisible by 4",
            "Cannot determine if n is divisible by 4"
        ],
        correctAnswer: "n is not divisible by 4",
        explanation: "Using contrapositive: if all numbers divisible by 4 are even, then any odd number cannot be divisible by 4. 🎯",
        wrongAnswerExplanations: {
            "n is divisible by 4": "This contradicts the logical conclusion.",
            "n might be divisible by 4": "We can definitively say it's not divisible by 4.",
            "Cannot determine if n is divisible by 4": "We can determine it using the given information."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch15_t3_qe15',
        type: "mcq",
        question: "If all equilateral triangles have angles of 60°, and triangle PQR has one angle of 45°, what can you conclude?",
        options: [
            "PQR is not equilateral",
            "PQR is equilateral",
            "PQR might be equilateral",
            "Cannot determine if PQR is equilateral"
        ],
        correctAnswer: "PQR is not equilateral",
        explanation: "Using direct reasoning: if all equilateral triangles have 60° angles and PQR has a 45° angle, then PQR cannot be equilateral. 📐",
        wrongAnswerExplanations: {
            "PQR is equilateral": "This contradicts the given information.",
            "PQR might be equilateral": "We can definitively say it's not equilateral.",
            "Cannot determine if PQR is equilateral": "We can determine it using the given information."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch15_t3_qe16',
        type: "mcq",
        question: "If all squares have equal diagonals, and figure ABCD has unequal diagonals, what can you conclude?",
        options: [
            "ABCD is not a square",
            "ABCD is a square",
            "ABCD might be a square",
            "Cannot determine if ABCD is a square"
        ],
        correctAnswer: "ABCD is not a square",
        explanation: "Using contrapositive: if all squares have equal diagonals, then any figure with unequal diagonals cannot be a square. 📏",
        wrongAnswerExplanations: {
            "ABCD is a square": "This contradicts the given information.",
            "ABCD might be a square": "We can definitively say it's not a square.",
            "Cannot determine if ABCD is a square": "We can determine it using the given information."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch15_t3_qe17',
        type: "mcq",
        question: "If all multiples of 6 are multiples of 2 and 3, and x is not a multiple of 2, what can you conclude?",
        options: [
            "x is not a multiple of 6",
            "x is a multiple of 6",
            "x might be a multiple of 6",
            "x is a multiple of 3"
        ],
        correctAnswer: "x is not a multiple of 6",
        explanation: "Using contrapositive: if all multiples of 6 are multiples of 2, then any number not multiple of 2 cannot be a multiple of 6. 🔢",
        wrongAnswerExplanations: {
            "x is a multiple of 6": "This contradicts the logical conclusion.",
            "x might be a multiple of 6": "We can definitively say it's not a multiple of 6.",
            "x is a multiple of 3": "We cannot conclude this from the given information."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch15_t3_qe18',
        type: "mcq",
        question: "If all rectangles have four right angles, and shape WXYZ has three right angles, what can you conclude?",
        options: [
            "WXYZ is not a rectangle",
            "WXYZ is a rectangle",
            "WXYZ might be a rectangle",
            "Cannot determine if WXYZ is a rectangle"
        ],
        correctAnswer: "WXYZ is not a rectangle",
        explanation: "Using direct reasoning: if all rectangles have four right angles and WXYZ has only three, then WXYZ cannot be a rectangle. 📐",
        wrongAnswerExplanations: {
            "WXYZ is a rectangle": "This contradicts the given information.",
            "WXYZ might be a rectangle": "We can definitively say it's not a rectangle.",
            "Cannot determine if WXYZ is a rectangle": "We can determine it using the given information."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch15_t3_qe19',
        type: "mcq",
        question: "If all prime numbers have exactly two factors, and 8 has four factors, what can you conclude?",
        options: [
            "8 is not prime",
            "8 is prime",
            "8 might be prime",
            "Cannot determine if 8 is prime"
        ],
        correctAnswer: "8 is not prime",
        explanation: "Using contrapositive: if all primes have exactly two factors, then any number with more than two factors cannot be prime. 🎯",
        wrongAnswerExplanations: {
            "8 is prime": "This contradicts the given information.",
            "8 might be prime": "We can definitively say it's not prime.",
            "Cannot determine if 8 is prime": "We can determine it using the given information."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch15_t3_qe20',
        type: "mcq",
        question: "If all acute angles are less than 90°, and angle LMN is 90°, what can you conclude?",
        options: [
            "Angle LMN is not acute",
            "Angle LMN is acute",
            "Angle LMN might be acute",
            "Cannot determine if LMN is acute"
        ],
        correctAnswer: "Angle LMN is not acute",
        explanation: "Using direct reasoning: if all acute angles are less than 90° and LMN is 90°, then LMN cannot be acute. 📐",
        wrongAnswerExplanations: {
            "Angle LMN is acute": "This contradicts the given information.",
            "Angle LMN might be acute": "We can definitively say it's not acute.",
            "Cannot determine if LMN is acute": "We can determine it using the given information."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 