// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter13\Topic6\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch13_t6_qe1',
        type: "mcq",
        question: "What is a mathematical statement?",
        options: [
            "Any sentence written using mathematical symbols",
            "A declarative sentence that is either true or false, but not both",
            "A question about mathematics",
            "An equation with variables"
        ],
        correctAnswer: "A declarative sentence that is either true or false, but not both",
        explanation: "A mathematical statement must have a definite truth value - either true or false, but never both simultaneously. 📝",
        wrongAnswerExplanations: {
            "Any sentence written using mathematical symbols": "Mathematical symbols alone don't make a statement; it needs a definite truth value.",
            "A question about mathematics": "Questions don't have truth values and thus aren't mathematical statements.",
            "An equation with variables": "This is an open sentence until values are assigned to the variables."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t6_qe2',
        type: "mcq",
        question: "Which of the following is NOT a mathematical statement?",
        options: [
            "All right angles are equal to 90°",
            "x + 5 = 10",
            "The sum of two prime numbers is always even",
            "Every triangle has three sides"
        ],
        correctAnswer: "x + 5 = 10",
        explanation: "x + 5 = 10 is an open sentence with variable x, not a statement until a value is assigned to x. 🔍",
        wrongAnswerExplanations: {
            "All right angles are equal to 90°": "This is a true mathematical statement with a definite truth value.",
            "The sum of two prime numbers is always even": "This is a false mathematical statement (e.g., 3 + 5 = 8).",
            "Every triangle has three sides": "This is a true mathematical statement based on the definition of triangles."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t6_qe3',
        type: "mcq",
        question: "What is deductive reasoning in mathematics?",
        options: [
            "Drawing general conclusions from specific examples",
            "Making educated guesses based on patterns",
            "Drawing logical conclusions from accepted statements or premises",
            "Proving statements through numerical calculation"
        ],
        correctAnswer: "Drawing logical conclusions from accepted statements or premises",
        explanation: "Deductive reasoning moves from general principles to specific conclusions through logical steps. 🧠",
        wrongAnswerExplanations: {
            "Drawing general conclusions from specific examples": "This describes inductive reasoning, not deductive reasoning.",
            "Making educated guesses based on patterns": "This is more related to conjectures or inductive reasoning.",
            "Proving statements through numerical calculation": "Calculations may be part of a proof but don't define deductive reasoning."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t6_qe4',
        type: "mcq",
        question: "What is an axiom in mathematics?",
        options: [
            "A statement that has been proven true",
            "A statement that needs to be proven",
            "A statement accepted without proof as a starting point",
            "A statement that is sometimes true and sometimes false"
        ],
        correctAnswer: "A statement accepted without proof as a starting point",
        explanation: "Axioms are fundamental assumptions accepted without proof that serve as building blocks for mathematical systems. 🏛️",
        wrongAnswerExplanations: {
            "A statement that has been proven true": "This describes a theorem, not an axiom.",
            "A statement that needs to be proven": "This describes a conjecture or theorem, not an axiom.",
            "A statement that is sometimes true and sometimes false": "Axioms are always considered true within their mathematical system."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t6_qe5',
        type: "mcq",
        question: "What is a theorem in mathematics?",
        options: [
            "A statement accepted without proof",
            "A statement that has been proven true based on axioms and other theorems",
            "A statement that is believed to be true but not yet proven",
            "A statement that is always false"
        ],
        correctAnswer: "A statement that has been proven true based on axioms and other theorems",
        explanation: "Theorems are statements that have been logically deduced and verified based on axioms and previously proven results. ✅",
        wrongAnswerExplanations: {
            "A statement accepted without proof": "This describes an axiom, not a theorem.",
            "A statement that is believed to be true but not yet proven": "This describes a conjecture, not a theorem.",
            "A statement that is always false": "Theorems are proven to be true, not false."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t6_qe6',
        type: "mcq",
        question: "What is a conjecture in mathematics?",
        options: [
            "A proven mathematical statement",
            "A statement accepted without proof",
            "A statement believed to be true but not yet proven",
            "A statement known to be false"
        ],
        correctAnswer: "A statement believed to be true but not yet proven",
        explanation: "Conjectures are mathematical statements that appear to be true based on evidence but haven't been formally proven. 🔍",
        wrongAnswerExplanations: {
            "A proven mathematical statement": "This describes a theorem, not a conjecture.",
            "A statement accepted without proof": "This describes an axiom, not a conjecture.",
            "A statement known to be false": "Conjectures are believed to be true, not known to be false."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t6_qe7',
        type: "mcq",
        question: "What is a direct proof in mathematics?",
        options: [
            "Proving a statement by showing its opposite leads to a contradiction",
            "Starting with known facts and proceeding with logical steps to reach the conclusion",
            "Proving a statement by showing examples where it works",
            "Proving by assuming the statement is false"
        ],
        correctAnswer: "Starting with known facts and proceeding with logical steps to reach the conclusion",
        explanation: "Direct proofs follow a straightforward logical chain from known facts to the desired conclusion. 📝",
        wrongAnswerExplanations: {
            "Proving a statement by showing its opposite leads to a contradiction": "This describes proof by contradiction, not direct proof.",
            "Proving a statement by showing examples where it works": "This is verification by examples, not a valid proof method.",
            "Proving by assuming the statement is false": "This is the beginning of a proof by contradiction, not direct proof."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t6_qe8',
        type: "mcq",
        question: "What is a proof by contradiction?",
        options: [
            "Proving a statement directly from axioms",
            "Assuming a statement is true and showing it leads to a contradiction",
            "Assuming a statement is false and showing it leads to a contradiction",
            "Proving by showing specific examples"
        ],
        correctAnswer: "Assuming a statement is false and showing it leads to a contradiction",
        explanation: "In proof by contradiction, we assume the opposite of what we want to prove and show this leads to a logical impossibility. ❌",
        wrongAnswerExplanations: {
            "Proving a statement directly from axioms": "This describes a direct proof, not proof by contradiction.",
            "Assuming a statement is true and showing it leads to a contradiction": "This would disprove the statement, not prove it.",
            "Proving by showing specific examples": "Examples don't constitute a formal proof in mathematics."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t6_qe9',
        type: "mcq",
        question: "What is a contrapositive of 'If P, then Q'?",
        options: [
            "If Q, then P",
            "If not P, then not Q",
            "If not Q, then not P",
            "If P, then not Q"
        ],
        correctAnswer: "If not Q, then not P",
        explanation: "The contrapositive swaps the terms and negates both - changing 'If P, then Q' to 'If not Q, then not P'. They are logically equivalent. 🔄",
        wrongAnswerExplanations: {
            "If Q, then P": "This is the converse, not the contrapositive.",
            "If not P, then not Q": "This is the inverse, not the contrapositive.",
            "If P, then not Q": "This negates only the conclusion, creating a statement that contradicts the original."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t6_qe10',
        type: "mcq",
        question: "What is mathematical induction primarily used to prove?",
        options: [
            "Statements about complex numbers",
            "Statements about irrational numbers",
            "Statements about natural numbers",
            "Statements about prime numbers"
        ],
        correctAnswer: "Statements about natural numbers",
        explanation: "Mathematical induction is specifically designed to prove statements that apply to all natural numbers (1, 2, 3, ...). 🔢",
        wrongAnswerExplanations: {
            "Statements about complex numbers": "Induction works with natural numbers, not complex numbers specifically.",
            "Statements about irrational numbers": "Induction works with natural numbers, not irrational numbers specifically.",
            "Statements about prime numbers": "Induction works with all natural numbers, not just primes."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t6_qe11',
        type: "mcq",
        question: "Which of these is NOT a logical connective in mathematical statements?",
        options: [
            "AND (conjunction)",
            "OR (disjunction)",
            "MAYBE (possibility)",
            "NOT (negation)"
        ],
        correctAnswer: "MAYBE (possibility)",
        explanation: "MAYBE introduces uncertainty, which is not part of formal mathematical logic. Mathematical statements have definite truth values. ❓",
        wrongAnswerExplanations: {
            "AND (conjunction)": "AND is a valid logical connective combining two statements.",
            "OR (disjunction)": "OR is a valid logical connective joining two alternatives.",
            "NOT (negation)": "NOT is a valid logical operator that flips the truth value of a statement."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t6_qe12',
        type: "mcq",
        question: "What is a conditional statement in mathematics?",
        options: [
            "A statement that is always true",
            "A statement of the form 'If P, then Q'",
            "A statement that combines two simpler statements with AND",
            "A statement that is only sometimes true"
        ],
        correctAnswer: "A statement of the form 'If P, then Q'",
        explanation: "Conditional statements establish a relationship where one statement (P) implies another (Q), written as 'If P, then Q'. ➡️",
        wrongAnswerExplanations: {
            "A statement that is always true": "This describes a tautology, not specifically a conditional statement.",
            "A statement that combines two simpler statements with AND": "This describes a conjunction, not a conditional statement.",
            "A statement that is only sometimes true": "This could describe many types of statements, not specifically conditionals."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t6_qe13',
        type: "mcq",
        question: "What is a biconditional statement in mathematics?",
        options: [
            "A statement that is either true or false",
            "A statement of the form 'P if and only if Q'",
            "A statement with two different conditions",
            "A statement that is true under two specific conditions"
        ],
        correctAnswer: "A statement of the form 'P if and only if Q'",
        explanation: "Biconditional statements assert that P and Q are logically equivalent - each implies the other. They're true when both have the same truth value. ⟺",
        wrongAnswerExplanations: {
            "A statement that is either true or false": "This describes any mathematical statement, not specifically biconditionals.",
            "A statement with two different conditions": "This is too vague and doesn't capture the meaning of biconditional.",
            "A statement that is true under two specific conditions": "This doesn't describe the logical relationship in a biconditional."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t6_qe14',
        type: "mcq",
        question: "What is a circular argument in mathematical proofs?",
        options: [
            "An argument that proves a theorem in geometry",
            "An argument where the conclusion is used as one of the premises",
            "An argument that goes around in circles without reaching a conclusion",
            "An argument that uses diagrams to prove a statement"
        ],
        correctAnswer: "An argument where the conclusion is used as one of the premises",
        explanation: "Circular reasoning commits the logical fallacy of assuming what you're trying to prove, making the proof invalid. ⭕",
        wrongAnswerExplanations: {
            "An argument that proves a theorem in geometry": "Geometric proofs can be perfectly valid and not circular.",
            "An argument that goes around in circles without reaching a conclusion": "This is vague and doesn't capture the specific logical error of circular reasoning.",
            "An argument that uses diagrams to prove a statement": "Using diagrams doesn't make an argument circular."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t6_qe15',
        type: "mcq",
        question: "Which of the following is an example of an axiom in Euclidean geometry?",
        options: [
            "The Pythagorean Theorem",
            "Through any two distinct points, there is exactly one line",
            "The sum of angles in a triangle is 180°",
            "All radii of a circle are equal"
        ],
        correctAnswer: "Through any two distinct points, there is exactly one line",
        explanation: "This is Euclid's first postulate, an axiom accepted without proof as a fundamental truth in Euclidean geometry. 📏",
        wrongAnswerExplanations: {
            "The Pythagorean Theorem": "This is a theorem that can be proven, not an axiom.",
            "The sum of angles in a triangle is 180°": "This is a theorem that can be proven from Euclidean axioms.",
            "All radii of a circle are equal": "This follows from the definition of a circle and is not an axiom."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t6_qe16',
        type: "mcq",
        question: "What is a lemma in mathematics?",
        options: [
            "A major result in a mathematical theory",
            "A statement accepted without proof",
            "A helper theorem used to prove other theorems",
            "A mathematical conjecture"
        ],
        correctAnswer: "A helper theorem used to prove other theorems",
        explanation: "A lemma is a proven statement that's primarily used as a stepping stone to prove other, often more significant results. 🪜",
        wrongAnswerExplanations: {
            "A major result in a mathematical theory": "This describes a theorem, not specifically a lemma.",
            "A statement accepted without proof": "This describes an axiom, not a lemma.",
            "A mathematical conjecture": "Conjectures haven't been proven yet, while lemmas have."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t6_qe17',
        type: "mcq",
        question: "What is a corollary in mathematics?",
        options: [
            "A statement that must be proven independently",
            "A direct consequence that follows easily from a theorem",
            "A statement that contradicts a theorem",
            "The first step in a mathematical proof"
        ],
        correctAnswer: "A direct consequence that follows easily from a theorem",
        explanation: "A corollary is a result that can be readily deduced from a theorem with little additional proof required. 🏷️",
        wrongAnswerExplanations: {
            "A statement that must be proven independently": "Corollaries follow from theorems and don't require independent proofs.",
            "A statement that contradicts a theorem": "Corollaries support theorems, not contradict them.",
            "The first step in a mathematical proof": "Corollaries are results, not steps in a proof."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t6_qe18',
        type: "mcq",
        question: "What are the two steps needed to prove a statement by mathematical induction?",
        options: [
            "Prove a base case and assume the statement is true for all cases",
            "Prove a base case and prove the statement for one example",
            "Prove a base case and prove that if the statement is true for k, then it's true for k+1",
            "Show the statement works for a few examples and generalize"
        ],
        correctAnswer: "Prove a base case and prove that if the statement is true for k, then it's true for k+1",
        explanation: "Induction requires proving the base case (often n=1) and the inductive step (if true for k, then true for k+1). 🔢",
        wrongAnswerExplanations: {
            "Prove a base case and assume the statement is true for all cases": "We can't just assume the general case; we need to prove the inductive step.",
            "Prove a base case and prove the statement for one example": "One example beyond the base case isn't sufficient for induction.",
            "Show the statement works for a few examples and generalize": "Examples alone don't constitute a valid proof by induction."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t6_qe19',
        type: "mcq",
        question: "Which type of proof is being used when we assume the opposite of what we want to prove and show it leads to an impossibility?",
        options: [
            "Direct proof",
            "Proof by contradiction",
            "Proof by mathematical induction",
            "Proof by contrapositive"
        ],
        correctAnswer: "Proof by contradiction",
        explanation: "Proof by contradiction (reductio ad absurdum) assumes the negation of the statement and derives a logical impossibility. ❌",
        wrongAnswerExplanations: {
            "Direct proof": "Direct proofs proceed straightforwardly from premises to conclusion without assuming the opposite.",
            "Proof by mathematical induction": "Induction is used for statements about natural numbers using base and inductive steps.",
            "Proof by contrapositive": "Contrapositive proofs show that 'if not Q, then not P' is true, not that the negation leads to a contradiction."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t6_qe20',
        type: "mcq",
        question: "What makes a deductive argument valid?",
        options: [
            "If the conclusion contains new information not in the premises",
            "If the premises and conclusion are all true statements",
            "If it's impossible for the premises to be true and the conclusion false",
            "If all mathematicians agree with the argument"
        ],
        correctAnswer: "If it's impossible for the premises to be true and the conclusion false",
        explanation: "A valid deductive argument guarantees that if the premises are true, the conclusion must be true - the truth flows logically from premises to conclusion. ✅",
        wrongAnswerExplanations: {
            "If the conclusion contains new information not in the premises": "Valid deductions don't add new information not implied by the premises.",
            "If the premises and conclusion are all true statements": "This describes a sound argument, not just validity.",
            "If all mathematicians agree with the argument": "Validity is about logical structure, not consensus."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
