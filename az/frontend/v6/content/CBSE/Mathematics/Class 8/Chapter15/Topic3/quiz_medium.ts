import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch15_t3_qm1',
        type: "mcq",
        question: "Given: All students who study hard pass the exam. Some students who play sports study hard. What can you conclude?",
        options: [
            "Some students who play sports pass the exam",
            "All students who play sports pass the exam",
            "No students who play sports pass the exam",
            "Cannot make a valid conclusion"
        ],
        correctAnswer: "Some students who play sports pass the exam",
        explanation: "Using syllogistic reasoning: If some sports players study hard, and all hard studiers pass, then some sports players must pass. 🎓",
        wrongAnswerExplanations: {
            "All students who play sports pass the exam": "We only know about some sports players, not all.",
            "No students who play sports pass the exam": "This contradicts the logical conclusion.",
            "Cannot make a valid conclusion": "We can make a valid conclusion using syllogistic reasoning."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t3_qm2',
        type: "mcq",
        question: "If a ≤ b and b < c, which statement must be true?",
        options: [
            "a < c",
            "a = c",
            "a ≤ c",
            "a > c"
        ],
        correctAnswer: "a < c",
        explanation: "Using transitive property with inequalities: if a ≤ b and b < c, then a must be less than c (not equal to c possible). 🔢",
        wrongAnswerExplanations: {
            "a = c": "This is impossible given b < c and a ≤ b.",
            "a ≤ c": "While true, it's not the most specific conclusion possible.",
            "a > c": "This contradicts the given inequalities."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t3_qm3',
        type: "mcq",
        question: "Given: All perfect squares are non-negative. All negative numbers are less than zero. Number x is negative. What can you conclude about x?",
        options: [
            "x is not a perfect square",
            "x is a perfect square",
            "x might be a perfect square",
            "Need more information about x"
        ],
        correctAnswer: "x is not a perfect square",
        explanation: "Using contrapositive: if all perfect squares are non-negative, and x is negative, then x cannot be a perfect square. 🎯",
        wrongAnswerExplanations: {
            "x is a perfect square": "This contradicts the given information.",
            "x might be a perfect square": "We can definitively say it's not a perfect square.",
            "Need more information about x": "The given information is sufficient."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t3_qm4',
        type: "mcq",
        question: "If all equilateral triangles are isosceles, and all isosceles triangles have at least two equal angles, what can you conclude about equilateral triangles?",
        options: [
            "All equilateral triangles have at least two equal angles",
            "Only some equilateral triangles have equal angles",
            "Equilateral triangles have no equal angles",
            "Cannot determine anything about angles in equilateral triangles"
        ],
        correctAnswer: "All equilateral triangles have at least two equal angles",
        explanation: "Using transitive property: if equilateral→isosceles and isosceles→two equal angles, then equilateral→two equal angles. 📐",
        wrongAnswerExplanations: {
            "Only some equilateral triangles have equal angles": "The conclusion applies to all equilateral triangles.",
            "Equilateral triangles have no equal angles": "This contradicts the logical conclusion.",
            "Cannot determine anything about angles in equilateral triangles": "We can determine using transitive property."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t3_qm5',
        type: "mcq",
        question: "Given: All numbers divisible by 6 are divisible by 2. All numbers divisible by 6 are divisible by 3. Number n is not divisible by 2. What can you conclude?",
        options: [
            "n is not divisible by 6",
            "n is divisible by 3",
            "n is divisible by 6",
            "n might be divisible by 6"
        ],
        correctAnswer: "n is not divisible by 6",
        explanation: "Using contrapositive: if all numbers divisible by 6 are divisible by 2, then any number not divisible by 2 cannot be divisible by 6. 🔢",
        wrongAnswerExplanations: {
            "n is divisible by 3": "We cannot conclude this from the given information.",
            "n is divisible by 6": "This contradicts the logical conclusion.",
            "n might be divisible by 6": "We can definitively say it's not divisible by 6."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t3_qm6',
        type: "mcq",
        question: "If all prime numbers greater than 2 are odd, and all odd numbers are not divisible by 2, what can you conclude about prime numbers greater than 2?",
        options: [
            "They are not divisible by 2",
            "They are divisible by 2",
            "Some might be divisible by 2",
            "Cannot determine divisibility by 2"
        ],
        correctAnswer: "They are not divisible by 2",
        explanation: "Using transitive property: if prime>2→odd and odd→not divisible by 2, then prime>2→not divisible by 2. 🎯",
        wrongAnswerExplanations: {
            "They are divisible by 2": "This contradicts the logical conclusion.",
            "Some might be divisible by 2": "We can definitively say none are divisible by 2.",
            "Cannot determine divisibility by 2": "We can determine using transitive property."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t3_qm7',
        type: "mcq",
        question: "Given: All right triangles have one 90° angle. Triangle ABC has angles 60°, 60°, and 60°. What can you conclude?",
        options: [
            "ABC is not a right triangle",
            "ABC is a right triangle",
            "ABC might be a right triangle",
            "Need more information about ABC"
        ],
        correctAnswer: "ABC is not a right triangle",
        explanation: "Using direct reasoning: if all right triangles have one 90° angle, and ABC has no 90° angle (sum = 180°), then ABC cannot be right. 📐",
        wrongAnswerExplanations: {
            "ABC is a right triangle": "This contradicts the given information.",
            "ABC might be a right triangle": "We can definitively say it's not right.",
            "Need more information about ABC": "The given information is sufficient."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t3_qm8',
        type: "mcq",
        question: "If all multiples of 3 are multiples of 1, and all multiples of 9 are multiples of 3, what can you conclude about multiples of 9?",
        options: [
            "They are multiples of 1",
            "They are not multiples of 1",
            "Some might be multiples of 1",
            "Cannot determine relationship with 1"
        ],
        correctAnswer: "They are multiples of 1",
        explanation: "Using transitive property: if 9→3 and 3→1, then 9→1 (where → means 'is multiple of'). This shows multiples of 9 are multiples of 1. 🔢",
        wrongAnswerExplanations: {
            "They are not multiples of 1": "This contradicts the logical conclusion.",
            "Some might be multiples of 1": "We can definitively say all are multiples of 1.",
            "Cannot determine relationship with 1": "We can determine using transitive property."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t3_qm9',
        type: "mcq",
        question: "Given: All squares are rectangles. All rectangles have four right angles. Shape PQRS has three right angles. What can you conclude about PQRS?",
        options: [
            "PQRS is not a square",
            "PQRS is a square",
            "PQRS might be a square",
            "Need more information about PQRS"
        ],
        correctAnswer: "PQRS is not a square",
        explanation: "Using transitive property: if square→rectangle→four right angles, and PQRS has only three right angles, then PQRS cannot be a square. 📏",
        wrongAnswerExplanations: {
            "PQRS is a square": "This contradicts the logical conclusion.",
            "PQRS might be a square": "We can definitively say it's not a square.",
            "Need more information about PQRS": "The given information is sufficient."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t3_qm10',
        type: "mcq",
        question: "If all even numbers are divisible by 2, and all numbers divisible by 2 are divisible by 1, what can you conclude about even numbers?",
        options: [
            "They are divisible by 1",
            "They are not divisible by 1",
            "Some might be divisible by 1",
            "Cannot determine divisibility by 1"
        ],
        correctAnswer: "They are divisible by 1",
        explanation: "Using transitive property: if even→divisible by 2 and divisible by 2→divisible by 1, then even→divisible by 1. 🔢",
        wrongAnswerExplanations: {
            "They are not divisible by 1": "This contradicts the logical conclusion.",
            "Some might be divisible by 1": "We can definitively say all are divisible by 1.",
            "Cannot determine divisibility by 1": "We can determine using transitive property."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t3_qm11',
        type: "mcq",
        question: "Given: All numbers greater than 10 are greater than 5. Number x is not greater than 5. What can you conclude about x?",
        options: [
            "x is not greater than 10",
            "x is greater than 10",
            "x might be greater than 10",
            "Cannot determine relationship with 10"
        ],
        correctAnswer: "x is not greater than 10",
        explanation: "Using contrapositive: if all numbers >10 are >5, then any number not >5 cannot be >10. This is a valid deductive conclusion. 🎯",
        wrongAnswerExplanations: {
            "x is greater than 10": "This contradicts the logical conclusion.",
            "x might be greater than 10": "We can definitively say it's not greater than 10.",
            "Cannot determine relationship with 10": "We can determine using contrapositive."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t3_qm12',
        type: "mcq",
        question: "If all equilateral triangles have equal sides, and all triangles with equal sides have equal angles, what can you conclude about equilateral triangles?",
        options: [
            "They have equal angles",
            "They have unequal angles",
            "Some angles might be equal",
            "Cannot determine anything about angles"
        ],
        correctAnswer: "They have equal angles",
        explanation: "Using transitive property: if equilateral→equal sides and equal sides→equal angles, then equilateral→equal angles. 📐",
        wrongAnswerExplanations: {
            "They have unequal angles": "This contradicts the logical conclusion.",
            "Some angles might be equal": "We can definitively say all angles are equal.",
            "Cannot determine anything about angles": "We can determine using transitive property."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t3_qm13',
        type: "mcq",
        question: "Given: All numbers divisible by 8 are divisible by 4. Number y is not divisible by 4. What can you conclude about y?",
        options: [
            "y is not divisible by 8",
            "y is divisible by 8",
            "y might be divisible by 8",
            "Cannot determine divisibility by 8"
        ],
        correctAnswer: "y is not divisible by 8",
        explanation: "Using contrapositive: if all numbers divisible by 8 are divisible by 4, then any number not divisible by 4 cannot be divisible by 8. 🔢",
        wrongAnswerExplanations: {
            "y is divisible by 8": "This contradicts the logical conclusion.",
            "y might be divisible by 8": "We can definitively say it's not divisible by 8.",
            "Cannot determine divisibility by 8": "We can determine using contrapositive."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t3_qm14',
        type: "mcq",
        question: "If all rhombuses have equal sides, and all squares are rhombuses, what can you conclude about squares?",
        options: [
            "They have equal sides",
            "They have unequal sides",
            "Some sides might be equal",
            "Cannot determine about sides"
        ],
        correctAnswer: "They have equal sides",
        explanation: "Using transitive property: if square→rhombus and rhombus→equal sides, then square→equal sides. This is a valid deductive conclusion. 📏",
        wrongAnswerExplanations: {
            "They have unequal sides": "This contradicts the logical conclusion.",
            "Some sides might be equal": "We can definitively say all sides are equal.",
            "Cannot determine about sides": "We can determine using transitive property."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t3_qm15',
        type: "mcq",
        question: "Given: All prime numbers have exactly two factors. Number n has three factors. What can you conclude about n?",
        options: [
            "n is not prime",
            "n is prime",
            "n might be prime",
            "Cannot determine if n is prime"
        ],
        correctAnswer: "n is not prime",
        explanation: "Using contrapositive: if all primes have exactly two factors, then any number with three factors cannot be prime. 🎯",
        wrongAnswerExplanations: {
            "n is prime": "This contradicts the given information.",
            "n might be prime": "We can definitively say it's not prime.",
            "Cannot determine if n is prime": "We can determine using the given information."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t3_qm16',
        type: "mcq",
        question: "If all obtuse angles are greater than 90°, and all right angles are equal to 90°, what can you conclude about obtuse angles?",
        options: [
            "They are greater than right angles",
            "They are equal to right angles",
            "They might be equal to right angles",
            "Cannot compare with right angles"
        ],
        correctAnswer: "They are greater than right angles",
        explanation: "Using direct comparison: if obtuse angles > 90° and right angles = 90°, then obtuse angles > right angles. 📐",
        wrongAnswerExplanations: {
            "They are equal to right angles": "This contradicts the given information.",
            "They might be equal to right angles": "We can definitively say they're greater.",
            "Cannot compare with right angles": "We can compare using the given information."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t3_qm17',
        type: "mcq",
        question: "Given: All multiples of 6 are even. All even numbers are divisible by 2. Number x is not divisible by 2. What can you conclude?",
        options: [
            "x is not a multiple of 6",
            "x is a multiple of 6",
            "x might be a multiple of 6",
            "Cannot determine about multiple of 6"
        ],
        correctAnswer: "x is not a multiple of 6",
        explanation: "Using contrapositive and transitive property: if 6→even→divisible by 2, then not divisible by 2→not multiple of 6. 🔢",
        wrongAnswerExplanations: {
            "x is a multiple of 6": "This contradicts the logical conclusion.",
            "x might be a multiple of 6": "We can definitively say it's not a multiple of 6.",
            "Cannot determine about multiple of 6": "We can determine using contrapositive."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t3_qm18',
        type: "mcq",
        question: "If all isosceles triangles have at least two equal angles, and triangle ABC has no equal angles, what can you conclude?",
        options: [
            "ABC is not isosceles",
            "ABC is isosceles",
            "ABC might be isosceles",
            "Need more information about ABC"
        ],
        correctAnswer: "ABC is not isosceles",
        explanation: "Using contrapositive: if all isosceles triangles have at least two equal angles, then a triangle with no equal angles cannot be isosceles. 📐",
        wrongAnswerExplanations: {
            "ABC is isosceles": "This contradicts the given information.",
            "ABC might be isosceles": "We can definitively say it's not isosceles.",
            "Need more information about ABC": "The given information is sufficient."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t3_qm19',
        type: "mcq",
        question: "Given: All perfect cubes end in 0, 1, 5, 6, or 8. Number y ends in 4. What can you conclude about y?",
        options: [
            "y is not a perfect cube",
            "y is a perfect cube",
            "y might be a perfect cube",
            "Need more information about y"
        ],
        correctAnswer: "y is not a perfect cube",
        explanation: "Using contrapositive: if all perfect cubes end in certain digits (not including 4), then a number ending in 4 cannot be a perfect cube. 🎯",
        wrongAnswerExplanations: {
            "y is a perfect cube": "This contradicts the given information.",
            "y might be a perfect cube": "We can definitively say it's not a perfect cube.",
            "Need more information about y": "The given information is sufficient."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t3_qm20',
        type: "mcq",
        question: "If all parallelograms have parallel opposite sides, and all rectangles are parallelograms, what can you conclude about rectangles?",
        options: [
            "They have parallel opposite sides",
            "They have non-parallel opposite sides",
            "Some opposite sides might be parallel",
            "Cannot determine about opposite sides"
        ],
        correctAnswer: "They have parallel opposite sides",
        explanation: "Using transitive property: if rectangle→parallelogram and parallelogram→parallel opposite sides, then rectangle→parallel opposite sides. 📏",
        wrongAnswerExplanations: {
            "They have non-parallel opposite sides": "This contradicts the logical conclusion.",
            "Some opposite sides might be parallel": "We can definitively say all opposite sides are parallel.",
            "Cannot determine about opposite sides": "We can determine using transitive property."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 