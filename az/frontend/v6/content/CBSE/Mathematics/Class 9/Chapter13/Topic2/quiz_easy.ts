// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter13\Topic2\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch13_t2_qe1',
        type: "mcq",
        question: "Which of these is a mathematically acceptable statement?",
        options: [
            "The rose is a beautiful flower",
            "Mathematics is interesting",
            "The sum of three consecutive integers is divisible by 3",
            "Some books are interesting to read"
        ],
        correctAnswer: "The sum of three consecutive integers is divisible by 3",
        explanation: "This statement can be proven to be either true or false using mathematical principles. It's a precise claim that can be verified through logical reasoning. 📝",
        wrongAnswerExplanations: {
            "The rose is a beautiful flower": "This is subjective and cannot be proven mathematically as beauty is in the eye of the beholder.",
            "Mathematics is interesting": "Whether something is interesting is subjective and varies from person to person.",
            "Some books are interesting to read": "This is a subjective statement that cannot be proven mathematically."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t2_qe2',
        type: "mcq",
        question: "Which statement is an example of a well-defined mathematical statement?",
        options: [
            "The weather is nice today",
            "Every even integer greater than 2 can be expressed as the sum of two prime numbers",
            "This book is heavy",
            "That painting is beautiful"
        ],
        correctAnswer: "Every even integer greater than 2 can be expressed as the sum of two prime numbers",
        explanation: "This is the Goldbach's conjecture, which is well-defined because it makes a clear claim that can be proven true or false through mathematical reasoning. 🧮",
        wrongAnswerExplanations: {
            "The weather is nice today": "This is subjective and depends on personal preferences about weather.",
            "This book is heavy": "What constitutes 'heavy' is relative and not mathematically defined.",
            "That painting is beautiful": "Beauty is subjective and not a mathematical property."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t2_qe3',
        type: "mcq",
        question: "Which of these is NOT a mathematical statement?",
        options: [
            "All right angles are equal",
            "What time is it?",
            "The square root of 2 is irrational",
            "There are infinitely many prime numbers"
        ],
        correctAnswer: "What time is it?",
        explanation: "A question is not a statement that can be judged as true or false. All mathematical statements must be declarative sentences that are either true or false. ❓",
        wrongAnswerExplanations: {
            "All right angles are equal": "This is a mathematical statement that can be proven true using geometric principles.",
            "The square root of 2 is irrational": "This is a mathematical statement that has been proven true.",
            "There are infinitely many prime numbers": "This is a mathematical statement proven by Euclid over 2000 years ago."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t2_qe4',
        type: "mcq",
        question: "For a mathematical statement to be valid, it must be:",
        options: [
            "Long and detailed",
            "Written in English",
            "Either true or false, but not both",
            "Written using variables"
        ],
        correctAnswer: "Either true or false, but not both",
        explanation: "A mathematical statement must have a definite truth value - it must be either true or false, but cannot be both simultaneously. This is known as the Law of Excluded Middle. ✓",
        wrongAnswerExplanations: {
            "Long and detailed": "Mathematical statements can be short and concise, length is not a criterion for validity.",
            "Written in English": "Mathematical statements can be expressed in any language or using symbolic notation.",
            "Written using variables": "While many mathematical statements use variables, they are not required for a statement to be valid."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t2_qe5',
        type: "mcq",
        question: "If p is the statement \"It is raining\" and q is the statement \"The ground is wet\", then the statement \"If it is raining, then the ground is wet\" can be written in symbolic logic as:",
        options: [
            "p ∧ q",
            "p ∨ q",
            "p → q",
            "p ↔ q"
        ],
        correctAnswer: "p → q",
        explanation: "The statement \"If p, then q\" is a conditional statement, represented by the implication symbol p → q. It states that whenever p is true, q must also be true. 🌧️",
        wrongAnswerExplanations: {
            "p ∧ q": "This represents 'p and q', meaning both statements are true simultaneously.",
            "p ∨ q": "This represents 'p or q', meaning at least one of the statements is true.",
            "p ↔ q": "This represents 'p if and only if q', meaning both statements must have the same truth value."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t2_qe6',
        type: "mcq",
        question: "A mathematical statement that can be derived from axioms or previously proven statements is called:",
        options: [
            "A definition",
            "A theory",
            "A theorem",
            "An algorithm"
        ],
        correctAnswer: "A theorem",
        explanation: "A theorem is a mathematical statement that has been proven based on axioms or previously proven statements through logical deduction. Theorems represent mathematical truths. 📚",
        wrongAnswerExplanations: {
            "A definition": "A definition explains the meaning of a term rather than establishing a truth.",
            "A theory": "In mathematics, a theory is a body of knowledge, not a single statement.",
            "An algorithm": "An algorithm is a step-by-step procedure, not a statement of truth."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t2_qe7',
        type: "mcq",
        question: "The negation of the statement \"All integers are positive\" is:",
        options: [
            "All integers are negative",
            "No integers are positive",
            "Some integers are positive",
            "Some integers are not positive"
        ],
        correctAnswer: "Some integers are not positive",
        explanation: "To negate \"All A are B\", we get \"Some A are not B\". The negation of \"All integers are positive\" is \"Some integers are not positive\", which is true since negative integers exist. ❎",
        wrongAnswerExplanations: {
            "All integers are negative": "This is too strong; the negation only needs to show that not all integers are positive.",
            "No integers are positive": "This claims that zero positive integers exist, which is false.",
            "Some integers are positive": "This doesn't contradict the original statement."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t2_qe8',
        type: "mcq",
        question: "The compound statement \"It is sunny and it is warm\" is true when:",
        options: [
            "Either it is sunny or it is warm",
            "It is sunny but not warm",
            "It is both sunny and warm",
            "It is neither sunny nor warm"
        ],
        correctAnswer: "It is both sunny and warm",
        explanation: "A compound statement joined by \"and\" (conjunction) is true only when both of its component statements are true. So \"It is sunny and it is warm\" is true only when it is both sunny and warm. ☀️",
        wrongAnswerExplanations: {
            "Either it is sunny or it is warm": "This describes an 'or' statement, not an 'and' statement.",
            "It is sunny but not warm": "For an 'and' statement to be true, both parts must be true.",
            "It is neither sunny nor warm": "This makes the statement false, not true."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t2_qe9',
        type: "mcq",
        question: "The statement \"If 2 + 2 = 5, then cows can fly\" is:",
        options: [
            "Always false",
            "Always true",
            "Sometimes true, sometimes false",
            "Meaningless"
        ],
        correctAnswer: "Always true",
        explanation: "In logic, a conditional statement \"If P, then Q\" is false only when P is true and Q is false. Since the antecedent \"2 + 2 = 5\" is false, the entire statement is always true regardless of the consequent. 🐄",
        wrongAnswerExplanations: {
            "Always false": "A conditional statement with a false antecedent is not false.",
            "Sometimes true, sometimes false": "The statement has a fixed truth value based on formal logic.",
            "Meaningless": "While the statement seems absurd, it has a definite truth value in formal logic."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t2_qe10',
        type: "mcq",
        question: "A statement that is assumed to be true without proof is called:",
        options: [
            "A theorem",
            "An axiom",
            "A conjecture",
            "A corollary"
        ],
        correctAnswer: "An axiom",
        explanation: "An axiom (or postulate) is a statement that is accepted as true without proof and serves as a starting point for deriving other statements. They form the foundation of mathematical systems. 🧱",
        wrongAnswerExplanations: {
            "A theorem": "A theorem is a statement that is proven using axioms and logical reasoning.",
            "A conjecture": "A conjecture is an unproven statement believed to be true.",
            "A corollary": "A corollary is a proposition that follows directly from a proven theorem."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t2_qe11',
        type: "mcq",
        question: "The statement \"x > 5\" is an example of:",
        options: [
            "A predicate",
            "A tautology",
            "A contradiction",
            "A fallacy"
        ],
        correctAnswer: "A predicate",
        explanation: "A predicate is a statement whose truth value depends on the value of a variable. The statement \"x > 5\" is true for some values of x and false for others, making it a predicate. 🧩",
        wrongAnswerExplanations: {
            "A tautology": "A tautology is a statement that is always true regardless of variables.",
            "A contradiction": "A contradiction is a statement that is always false regardless of variables.",
            "A fallacy": "A fallacy is an error in reasoning, not a type of mathematical statement."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t2_qe12',
        type: "mcq",
        question: "The contrapositive of \"If it is raining, then I carry an umbrella\" is:",
        options: [
            "If I don't carry an umbrella, then it is not raining",
            "If it is not raining, then I don't carry an umbrella",
            "If I carry an umbrella, then it is raining",
            "If I don't carry an umbrella, then it is raining"
        ],
        correctAnswer: "If I don't carry an umbrella, then it is not raining",
        explanation: "The contrapositive of \"If P, then Q\" is \"If not Q, then not P\". So for \"If raining, then umbrella\", the contrapositive is \"If no umbrella, then not raining\". A contrapositive always has the same truth value as the original statement. ☔",
        wrongAnswerExplanations: {
            "If it is not raining, then I don't carry an umbrella": "This is the inverse of the original statement.",
            "If I carry an umbrella, then it is raining": "This is the converse of the original statement.",
            "If I don't carry an umbrella, then it is raining": "This contradicts the original statement."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t2_qe13',
        type: "mcq",
        question: "Which of these is an example of a tautology?",
        options: [
            "All triangles have three sides",
            "Either it is raining or it is not raining",
            "If today is Sunday, then tomorrow is Monday",
            "All prime numbers greater than 2 are odd"
        ],
        correctAnswer: "Either it is raining or it is not raining",
        explanation: "A tautology is a statement that is always true by logical necessity. \"P or not P\" is a fundamental tautology in logic. It must be true regardless of whether P itself is true or false. 💯",
        wrongAnswerExplanations: {
            "All triangles have three sides": "This is true by definition, not by logical structure.",
            "If today is Sunday, then tomorrow is Monday": "This is true based on our calendar system, not by logical necessity.",
            "All prime numbers greater than 2 are odd": "This is a mathematical truth, not a tautology."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t2_qe14',
        type: "mcq",
        question: "The statement \"x² + 1 = 0 has a solution in the set of real numbers\" is:",
        options: [
            "True",
            "False",
            "Indeterminate",
            "Meaningless"
        ],
        correctAnswer: "False",
        explanation: "For a real number x, the value of x² is always non-negative. So x² + 1 will always be at least 1, meaning it can never equal 0. Therefore, the statement is false. 🔢",
        wrongAnswerExplanations: {
            "True": "The equation has solutions in complex numbers (x = ±i), but not in real numbers.",
            "Indeterminate": "The statement has a definite truth value in the specified domain.",
            "Meaningless": "The statement is perfectly meaningful and can be evaluated."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t2_qe15',
        type: "mcq",
        question: "In symbolic logic, the statement \"p and q\" is represented as:",
        options: [
            "p + q",
            "p ∨ q",
            "p → q",
            "p ∧ q"
        ],
        correctAnswer: "p ∧ q",
        explanation: "The logical operator \"and\" (conjunction) is represented by the symbol ∧. So \"p and q\" is written as p ∧ q in symbolic logic notation. 🔣",
        wrongAnswerExplanations: {
            "p + q": "The plus sign is used for addition in mathematics, not for logical conjunction.",
            "p ∨ q": "This symbol represents \"or\" (disjunction), not \"and\".",
            "p → q": "This symbol represents \"if p then q\" (implication), not \"and\"."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t2_qe16',
        type: "mcq",
        question: "The negation of \"Some students are hardworking\" is:",
        options: [
            "All students are hardworking",
            "Some students are not hardworking",
            "No students are hardworking",
            "All students are not hardworking"
        ],
        correctAnswer: "No students are hardworking",
        explanation: "The negation of \"Some A are B\" is \"No A are B\" or equivalently \"All A are not B\". So the negation of \"Some students are hardworking\" is \"No students are hardworking\". 📚",
        wrongAnswerExplanations: {
            "All students are hardworking": "This is stronger than the negation requires.",
            "Some students are not hardworking": "This can be true simultaneously with the original statement.",
            "All students are not hardworking": "This is correct but usually stated as \"No students are hardworking\"."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t2_qe17',
        type: "mcq",
        question: "A statement that is always false regardless of the truth values of its components is called:",
        options: [
            "A tautology",
            "A contradiction",
            "A contingency",
            "A premise"
        ],
        correctAnswer: "A contradiction",
        explanation: "A contradiction is a compound statement that is always false, regardless of the truth values of its component statements. For example, \"p ∧ (¬p)\" (p and not p) is always false. ❌",
        wrongAnswerExplanations: {
            "A tautology": "A tautology is always true, not always false.",
            "A contingency": "A contingency can be either true or false depending on the truth values of its components.",
            "A premise": "A premise is a statement assumed to be true in an argument, not always false."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t2_qe18',
        type: "mcq",
        question: "If p is false and q is true, then the statement \"p → q\" is:",
        options: [
            "True",
            "False",
            "Neither true nor false",
            "Both true and false"
        ],
        correctAnswer: "True",
        explanation: "In a conditional statement \"if p, then q\" (p → q), when the antecedent p is false, the entire statement is true regardless of the truth value of q. This is called vacuous truth. ✓",
        wrongAnswerExplanations: {
            "False": "A conditional statement is false only when p is true and q is false.",
            "Neither true nor false": "Every properly formed logical statement must be either true or false.",
            "Both true and false": "No statement can be both true and false simultaneously (Law of Non-Contradiction)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t2_qe19',
        type: "mcq",
        question: "The statement \"For every positive integer n, n² ≥ n\" is an example of:",
        options: [
            "An existential statement",
            "A universal statement",
            "A disjunction",
            "A negation"
        ],
        correctAnswer: "A universal statement",
        explanation: "A universal statement makes a claim about all members of a set. This statement asserts something about every positive integer n, making it a universal statement, often written as \"∀n > 0, n² ≥ n\". 🔍",
        wrongAnswerExplanations: {
            "An existential statement": "An existential statement would claim that there exists at least one element with a property.",
            "A disjunction": "A disjunction is a compound statement using 'or'.",
            "A negation": "A negation is the denial of a statement."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t2_qe20',
        type: "mcq",
        question: "What is the conjunction of \"Today is Tuesday\" and \"It is raining\"?",
        options: [
            "Today is Tuesday or it is raining",
            "If today is Tuesday, then it is raining",
            "Today is Tuesday and it is raining",
            "Today is Tuesday if and only if it is raining"
        ],
        correctAnswer: "Today is Tuesday and it is raining",
        explanation: "A conjunction combines two statements with the word \"and\". The conjunction of \"Today is Tuesday\" and \"It is raining\" is simply \"Today is Tuesday and it is raining\". 🌧️",
        wrongAnswerExplanations: {
            "Today is Tuesday or it is raining": "This is a disjunction ('or' statement), not a conjunction.",
            "If today is Tuesday, then it is raining": "This is a conditional statement, not a conjunction.",
            "Today is Tuesday if and only if it is raining": "This is a biconditional statement, not a conjunction."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
