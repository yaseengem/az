// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter13\Topic2\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch13_t2_qm1',
        type: "mcq",
        question: "What is the truth value of the statement \"If 2 + 3 = 5, then the sun rises in the east\"?",
        options: [
            "True",
            "False",
            "Indeterminate",
            "Meaningless"
        ],
        correctAnswer: "True",
        explanation: "This is a conditional statement (p → q) where both p and q are true. When both the antecedent and consequent are true, the entire conditional statement is true according to the rules of logic. 🌅",
        wrongAnswerExplanations: {
            "False": "For a conditional to be false, the antecedent must be true and the consequent false.",
            "Indeterminate": "The statement has a definite truth value based on logical rules.",
            "Meaningless": "Though the statements seem unrelated, the conditional has a definite logical meaning."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t2_qm2',
        type: "mcq",
        question: "If p: \"It is raining\" is true, and q: \"The ground is wet\" is false, then the truth value of the statement \"If it is raining, then the ground is wet\" (p → q) is:",
        options: [
            "True",
            "False",
            "Indeterminate",
            "Cannot be determined without more information"
        ],
        correctAnswer: "False",
        explanation: "A conditional statement p → q is false only when p is true and q is false. Here, p (\"It is raining\") is true but q (\"The ground is wet\") is false, making the conditional statement false. 🌧️",
        wrongAnswerExplanations: {
            "True": "A conditional with true antecedent and false consequent is always false.",
            "Indeterminate": "The statement has a definite truth value based on the given truth values of p and q.",
            "Cannot be determined without more information": "The information provided is sufficient to determine the truth value."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t2_qm3',
        type: "mcq",
        question: "What is the converse of the statement \"If it snows, then it is cold\"?",
        options: [
            "If it does not snow, then it is not cold",
            "If it is cold, then it snows",
            "If it is not cold, then it does not snow",
            "If it does not snow, then it is cold"
        ],
        correctAnswer: "If it is cold, then it snows",
        explanation: "The converse of a conditional statement \"If p, then q\" is obtained by swapping p and q to get \"If q, then p\". So the converse of \"If it snows, then it is cold\" is \"If it is cold, then it snows\". ❄️",
        wrongAnswerExplanations: {
            "If it does not snow, then it is not cold": "This is the inverse of the original statement.",
            "If it is not cold, then it does not snow": "This is the contrapositive of the original statement.",
            "If it does not snow, then it is cold": "This doesn't correspond to any standard logical form of the original."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t2_qm4',
        type: "mcq",
        question: "Which of the following is logically equivalent to \"If p, then q\"?",
        options: [
            "If q, then p",
            "If not p, then not q",
            "Not p or q",
            "p and not q"
        ],
        correctAnswer: "Not p or q",
        explanation: "The conditional statement p → q is logically equivalent to ¬p ∨ q (not p or q). This can be verified using a truth table. For example, \"If it rains, I take an umbrella\" means the same as \"Either it doesn't rain or I take an umbrella\". 🔣",
        wrongAnswerExplanations: {
            "If q, then p": "This is the converse, which is not logically equivalent to the original.",
            "If not p, then not q": "This is the inverse, which is not logically equivalent to the original.",
            "p and not q": "This is the negation of the conditional, not equivalent to the conditional itself."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t2_qm5',
        type: "mcq",
        question: "The statement \"All equilateral triangles are equiangular\" is logically equivalent to:",
        options: [
            "If a triangle is equilateral, then it is equiangular",
            "If a triangle is not equilateral, then it is not equiangular",
            "If a triangle is equiangular, then it is equilateral",
            "Some equilateral triangles are equiangular"
        ],
        correctAnswer: "If a triangle is equilateral, then it is equiangular",
        explanation: "The statement \"All A are B\" is logically equivalent to the conditional statement \"If something is A, then it is B\". So \"All equilateral triangles are equiangular\" means \"If a triangle is equilateral, then it is equiangular\". 📐",
        wrongAnswerExplanations: {
            "If a triangle is not equilateral, then it is not equiangular": "This is the inverse, which is not logically equivalent.",
            "If a triangle is equiangular, then it is equilateral": "This is the converse, which is also true in this case but not logically equivalent to the original.",
            "Some equilateral triangles are equiangular": "This is weaker than the original statement, which claims all equilateral triangles are equiangular."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t2_qm6',
        type: "mcq",
        question: "The negation of the statement \"Some integers are negative\" is:",
        options: [
            "Some integers are not negative",
            "All integers are negative",
            "No integers are negative",
            "All integers are not negative"
        ],
        correctAnswer: "No integers are negative",
        explanation: "The negation of \"Some A are B\" is \"No A are B\" (or equivalently, \"All A are not B\"). So the negation of \"Some integers are negative\" is \"No integers are negative\". 🔢",
        wrongAnswerExplanations: {
            "Some integers are not negative": "This doesn't contradict the original statement.",
            "All integers are negative": "This is stronger than the negation requires.",
            "All integers are not negative": "This is correct but typically expressed as \"No integers are negative\"."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t2_qm7',
        type: "mcq",
        question: "If p: \"It is sunny\" and q: \"It is warm\", then which of the following expresses \"It is neither sunny nor warm\"?",
        options: [
            "p ∧ q",
            "¬p ∧ ¬q",
            "¬(p ∨ q)",
            "¬p ∨ ¬q"
        ],
        correctAnswer: "¬p ∧ ¬q",
        explanation: "\"Neither A nor B\" means \"not A and not B\". So \"It is neither sunny nor warm\" is represented as \"It is not sunny and it is not warm\", which is ¬p ∧ ¬q. ☁️",
        wrongAnswerExplanations: {
            "p ∧ q": "This represents \"It is sunny and warm\", the opposite of what we want.",
            "¬(p ∨ q)": "This also means \"neither p nor q\" by De Morgan's Laws, but is less direct.",
            "¬p ∨ ¬q": "This means \"Either it's not sunny or it's not warm\", which is different."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t2_qm8',
        type: "mcq",
        question: "According to De Morgan's laws, the negation of \"p and q\" is:",
        options: [
            "not p and not q",
            "not p or not q",
            "p or q",
            "neither p nor q"
        ],
        correctAnswer: "not p or not q",
        explanation: "De Morgan's laws state that ¬(p ∧ q) = ¬p ∨ ¬q. The negation of \"p and q\" is \"not p or not q\". For example, the negation of \"It is sunny and warm\" is \"It is not sunny or it is not warm\". 🧮",
        wrongAnswerExplanations: {
            "not p and not q": "This is stronger than the negation requires.",
            "p or q": "This is not the negation of \"p and q\".",
            "neither p nor q": "This means \"not p and not q\", which is stronger than required."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t2_qm9',
        type: "mcq",
        question: "Which of the following statements is the contrapositive of \"If it is a square, then it is a rectangle\"?",
        options: [
            "If it is not a square, then it is not a rectangle",
            "If it is a rectangle, then it is a square",
            "If it is not a rectangle, then it is not a square",
            "If it is not a rectangle, then it is a square"
        ],
        correctAnswer: "If it is not a rectangle, then it is not a square",
        explanation: "The contrapositive of \"If p, then q\" is \"If not q, then not p\". So for \"If it is a square, then it is a rectangle\", the contrapositive is \"If it is not a rectangle, then it is not a square\". 🔄",
        wrongAnswerExplanations: {
            "If it is not a square, then it is not a rectangle": "This is the inverse, not the contrapositive.",
            "If it is a rectangle, then it is a square": "This is the converse, not the contrapositive.",
            "If it is not a rectangle, then it is a square": "This contradicts the original statement."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t2_qm10',
        type: "mcq",
        question: "The statement \"x is odd if and only if x² is odd\" is an example of:",
        options: [
            "A conditional statement",
            "A biconditional statement",
            "A conjunction",
            "A disjunction"
        ],
        correctAnswer: "A biconditional statement",
        explanation: "A biconditional statement has the form \"p if and only if q\" (p ↔ q) and is true when p and q have the same truth value. This statement asserts that x is odd exactly when x² is odd. 🔄",
        wrongAnswerExplanations: {
            "A conditional statement": "A conditional has the form \"if p then q\" but doesn't assert the converse.",
            "A conjunction": "A conjunction has the form \"p and q\".",
            "A disjunction": "A disjunction has the form \"p or q\"."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t2_qm11',
        type: "mcq",
        question: "What is the difference between a proposition and a predicate?",
        options: [
            "Propositions are always false, while predicates can be true",
            "Propositions have a definite truth value, while predicates contain variables and their truth depends on the value of those variables",
            "Predicates are always mathematical, while propositions can be about anything",
            "Propositions use symbolic logic, while predicates use natural language"
        ],
        correctAnswer: "Propositions have a definite truth value, while predicates contain variables and their truth depends on the value of those variables",
        explanation: "A proposition is a statement that is either true or false. A predicate contains variables and becomes a proposition when values are assigned to those variables. For example, \"x > 5\" is a predicate, while \"7 > 5\" is a proposition. 🧩",
        wrongAnswerExplanations: {
            "Propositions are always false, while predicates can be true": "Propositions can be either true or false.",
            "Predicates are always mathematical, while propositions can be about anything": "Both can be about any subject matter.",
            "Propositions use symbolic logic, while predicates use natural language": "Both can be expressed in either symbolic logic or natural language."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t2_qm12',
        type: "mcq",
        question: "The statement \"For every real number x, there exists a real number y such that x + y = 0\" uses which quantifiers?",
        options: [
            "Universal only",
            "Existential only",
            "Both universal and existential",
            "Neither universal nor existential"
        ],
        correctAnswer: "Both universal and existential",
        explanation: "This statement uses both quantifiers: the universal quantifier \"for every\" (∀) and the existential quantifier \"there exists\" (∃). It can be written symbolically as ∀x∃y(x + y = 0). 🔍",
        wrongAnswerExplanations: {
            "Universal only": "The statement uses both \"for every\" (universal) and \"there exists\" (existential).",
            "Existential only": "The statement uses both quantifiers, not just the existential one.",
            "Neither universal nor existential": "The statement clearly uses both types of quantifiers."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t2_qm13',
        type: "mcq",
        question: "In which case is a conditional statement p → q definitely false?",
        options: [
            "When p is true and q is true",
            "When p is true and q is false",
            "When p is false and q is true",
            "When p is false and q is false"
        ],
        correctAnswer: "When p is true and q is false",
        explanation: "A conditional statement \"if p then q\" (p → q) is false only when the antecedent p is true and the consequent q is false. For example, \"If it is a square, then it has 3 sides\" is false because squares have 4 sides, not 3. ❌",
        wrongAnswerExplanations: {
            "When p is true and q is true": "When both are true, the conditional is true.",
            "When p is false and q is true": "When p is false, the conditional is always true, regardless of q.",
            "When p is false and q is false": "When p is false, the conditional is always true, regardless of q."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t2_qm14',
        type: "mcq",
        question: "If the statement \"If p then q\" is false, what can you conclude?",
        options: [
            "p is true and q is true",
            "p is true and q is false",
            "p is false and q is true",
            "p is false and q is false"
        ],
        correctAnswer: "p is true and q is false",
        explanation: "If p → q is false, then the only possibility is that p is true and q is false. This is the only combination that makes a conditional statement false according to the definition of conditional logic. 💭",
        wrongAnswerExplanations: {
            "p is true and q is true": "When both p and q are true, p → q is true, not false.",
            "p is false and q is true": "When p is false and q is true, p → q is true, not false.",
            "p is false and q is false": "When both p and q are false, p → q is true, not false."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t2_qm15',
        type: "mcq",
        question: "Which of the following statements is logically equivalent to \"If it is not raining, then the ground is not wet\"?",
        options: [
            "If the ground is wet, then it is raining",
            "If it is raining, then the ground is wet",
            "If the ground is not wet, then it is not raining",
            "If it is raining, then the ground is not wet"
        ],
        correctAnswer: "If the ground is wet, then it is raining",
        explanation: "The contrapositive of \"If not p, then not q\" is \"If q, then p\", which is logically equivalent to the original. So \"If it is not raining, then the ground is not wet\" is equivalent to \"If the ground is wet, then it is raining\". 🌧️",
        wrongAnswerExplanations: {
            "If it is raining, then the ground is wet": "This is the converse of the contrapositive, not logically equivalent.",
            "If the ground is not wet, then it is not raining": "This is the original statement rewritten, but not in a standard form.",
            "If it is raining, then the ground is not wet": "This contradicts the implied relationship."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t2_qm16',
        type: "mcq",
        question: "What is the symbolic representation of the statement \"It is necessary and sufficient for a triangle to have three equal sides in order to have three equal angles\"?",
        options: [
            "p → q",
            "q → p",
            "p ↔ q",
            "(p → q) ∧ (q → p)"
        ],
        correctAnswer: "p ↔ q",
        explanation: "This statement asserts that having three equal sides is both necessary and sufficient for having three equal angles. This is a biconditional statement of the form \"p if and only if q\" and is represented as p ↔ q. 📐",
        wrongAnswerExplanations: {
            "p → q": "This only captures \"sufficient\" but not \"necessary\".",
            "q → p": "This captures \"necessary\" but not \"sufficient\".",
            "(p → q) ∧ (q → p)": "This is correct but is the explicit form of p ↔ q."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t2_qm17',
        type: "mcq",
        question: "What is the truth value of the statement \"All unicorns have one horn\" in traditional logic?",
        options: [
            "True",
            "False",
            "Indeterminate",
            "True by definition (vacuously true)"
        ],
        correctAnswer: "True by definition (vacuously true)",
        explanation: "In traditional logic, universal statements about empty sets (like unicorns) are considered vacuously true. Since there are no unicorns, there cannot be a unicorn without one horn to serve as a counterexample. 🦄",
        wrongAnswerExplanations: {
            "True": "While technically correct, \"vacuously true\" is more precise.",
            "False": "For the statement to be false, there would need to be at least one unicorn without one horn.",
            "Indeterminate": "In classical logic, every well-formed statement has a definite truth value."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t2_qm18',
        type: "mcq",
        question: "What type of statement is \"Either x > 5 or x < 3\"?",
        options: [
            "A conjunction",
            "A disjunction",
            "A conditional",
            "A biconditional"
        ],
        correctAnswer: "A disjunction",
        explanation: "A disjunction is a compound statement of the form \"p or q\". The given statement \"Either x > 5 or x < 3\" has the form \"p or q\" and is thus a disjunction. 🔀",
        wrongAnswerExplanations: {
            "A conjunction": "A conjunction has the form \"p and q\".",
            "A conditional": "A conditional has the form \"if p then q\".",
            "A biconditional": "A biconditional has the form \"p if and only if q\"."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t2_qm19',
        type: "mcq",
        question: "If p: \"The shape is a square\" and q: \"The shape has four equal sides\", which of the following is true?",
        options: [
            "p → q only",
            "q → p only",
            "Both p → q and q → p",
            "Neither p → q nor q → p"
        ],
        correctAnswer: "p → q only",
        explanation: "A square always has four equal sides, so \"If the shape is a square, then it has four equal sides\" (p → q) is true. However, a rhombus also has four equal sides but isn't a square, so \"If the shape has four equal sides, then it is a square\" (q → p) is false. 🟦",
        wrongAnswerExplanations: {
            "q → p only": "Having four equal sides is not sufficient to ensure a shape is a square (e.g., a rhombus).",
            "Both p → q and q → p": "Only p → q is true, not q → p.",
            "Neither p → q nor q → p": "The statement p → q is true."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t2_qm20',
        type: "mcq",
        question: "Which of the following is an open statement (predicate)?",
        options: [
            "Paris is the capital of France",
            "All triangles have three sides",
            "x² - 3x + 2 = 0",
            "The sum of the interior angles of a triangle is 180°"
        ],
        correctAnswer: "x² - 3x + 2 = 0",
        explanation: "An open statement (predicate) contains variables and has no definite truth value until values are assigned to those variables. The equation \"x² - 3x + 2 = 0\" is true for x = 1 or x = 2, and false for other values of x. 🧩",
        wrongAnswerExplanations: {
            "Paris is the capital of France": "This is a proposition with a definite truth value (true).",
            "All triangles have three sides": "This is a proposition with a definite truth value (true by definition).",
            "The sum of the interior angles of a triangle is 180°": "This is a proposition with a definite truth value (true in Euclidean geometry)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];
