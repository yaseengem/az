// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter13\Topic6\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch13_t6_qm1',
        type: "mcq",
        question: "Consider the statement: 'If it is raining, then the ground is wet.' Which of the following is the contrapositive of this statement?",
        options: [
            "If the ground is wet, then it is raining.",
            "If the ground is not wet, then it is not raining.",
            "If it is not raining, then the ground is not wet.",
            "If the ground is wet, then it is not raining."
        ],
        correctAnswer: "If the ground is not wet, then it is not raining.",
        explanation: "The contrapositive swaps P and Q and negates both: 'If P, then Q' becomes 'If not Q, then not P'. 🔄",
        wrongAnswerExplanations: {
            "If the ground is wet, then it is raining.": "This is the converse of the original statement, not the contrapositive.",
            "If it is not raining, then the ground is not wet.": "This is the inverse of the original statement, not the contrapositive.",
            "If the ground is wet, then it is not raining.": "This negates only one part and doesn't properly swap the terms."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t6_qm2',
        type: "mcq",
        question: "In a proof by mathematical induction for a statement P(n) about natural numbers, what two steps must be proven?",
        options: [
            "P(1) and P(2)",
            "P(1) and if P(k) is true then P(k+1) is true",
            "P(0) and if P(k) is true then P(k+1) is true",
            "If P(k-1) is true then P(k) is true, and if P(k) is true then P(k+1) is true"
        ],
        correctAnswer: "P(1) and if P(k) is true then P(k+1) is true",
        explanation: "Induction requires proving the base case P(1) and the inductive step: if P(k) is true, then P(k+1) is true. This completes the chain for all natural numbers. 🔢",
        wrongAnswerExplanations: {
            "P(1) and P(2)": "Proving just the first two cases doesn't establish the result for all natural numbers.",
            "P(0) and if P(k) is true then P(k+1) is true": "Induction for natural numbers typically starts at n=1, not n=0.",
            "If P(k-1) is true then P(k) is true, and if P(k) is true then P(k+1) is true": "This contains redundant steps and misses the base case."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t6_qm3',
        type: "mcq",
        question: "Which proof technique would be most appropriate to prove that √2 is irrational?",
        options: [
            "Direct proof",
            "Proof by contradiction",
            "Mathematical induction",
            "Proof by contrapositive"
        ],
        correctAnswer: "Proof by contradiction",
        explanation: "Assuming √2 is rational leads to a contradiction where both a and b must be even in a fraction a/b in lowest form, which is impossible. ❌",
        wrongAnswerExplanations: {
            "Direct proof": "Directly showing a number is irrational is difficult without using contradiction.",
            "Mathematical induction": "Induction applies to statements about natural numbers, not proving a specific number is irrational.",
            "Proof by contrapositive": "The contrapositive approach isn't well-suited for proving irrationality."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t6_qm4',
        type: "mcq",
        question: "In a valid syllogism, which of the following must be true?",
        options: [
            "The conclusion contains information not present in the premises",
            "At least one premise must be false",
            "If the premises are true, the conclusion must be true",
            "The conclusion must contradict at least one premise"
        ],
        correctAnswer: "If the premises are true, the conclusion must be true",
        explanation: "Validity means truth flows logically from premises to conclusion - if premises are true, the conclusion must be true. 🧠",
        wrongAnswerExplanations: {
            "The conclusion contains information not present in the premises": "Valid deductions don't introduce new information not implied by premises.",
            "At least one premise must be false": "All premises in a valid argument can be true.",
            "The conclusion must contradict at least one premise": "The conclusion should align with premises, not contradict them."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t6_qm5',
        type: "mcq",
        question: "Consider the following argument:\nAll squares are rectangles.\nAll rectangles have four sides.\nTherefore, all squares have four sides.\nWhat type of reasoning is this?",
        options: [
            "Inductive reasoning",
            "Circular reasoning",
            "Deductive reasoning",
            "Analogical reasoning"
        ],
        correctAnswer: "Deductive reasoning",
        explanation: "This argument moves from general principles to a specific conclusion through logical steps, exemplifying deductive reasoning. 📐",
        wrongAnswerExplanations: {
            "Inductive reasoning": "Inductive reasoning would move from specific examples to a general conclusion.",
            "Circular reasoning": "The argument doesn't assume what it's trying to prove.",
            "Analogical reasoning": "This isn't based on comparing similar situations but on logical implication."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t6_qm6',
        type: "mcq",
        question: "What is the logical status of the statement 'If 2+2=5, then I am the Prime Minister'?",
        options: [
            "True statement",
            "False statement",
            "Neither true nor false",
            "Both true and false"
        ],
        correctAnswer: "True statement",
        explanation: "Since the antecedent (2+2=5) is false, the conditional statement is vacuously true regardless of the consequent's truth value. ✅",
        wrongAnswerExplanations: {
            "False statement": "A conditional is false only when the antecedent is true and the consequent is false.",
            "Neither true nor false": "In classical logic, every statement has a truth value.",
            "Both true and false": "No statement can be both true and false in classical logic."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t6_qm7',
        type: "mcq",
        question: "Consider the statement: 'All even numbers greater than 2 can be expressed as the sum of two prime numbers.' This statement is known as:",
        options: [
            "Fermat's Last Theorem",
            "Goldbach's Conjecture",
            "Pythagorean Theorem",
            "The Fundamental Theorem of Arithmetic"
        ],
        correctAnswer: "Goldbach's Conjecture",
        explanation: "This famous statement, proposed in 1742 but still unproven, is known as Goldbach's Conjecture. It remains one of mathematics' great unsolved problems. 🔍",
        wrongAnswerExplanations: {
            "Fermat's Last Theorem": "This theorem states no three positive integers a, b, c satisfy aⁿ + bⁿ = cⁿ for n > 2.",
            "Pythagorean Theorem": "This relates to right triangles: a² + b² = c².",
            "The Fundamental Theorem of Arithmetic": "This states every integer > 1 has a unique prime factorization."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t6_qm8',
        type: "mcq",
        question: "If we want to disprove the statement 'All integers are positive', what would be sufficient to show?",
        options: [
            "One integer that is not positive",
            "All integers are negative",
            "Most integers are not positive",
            "Some integers are positive"
        ],
        correctAnswer: "One integer that is not positive",
        explanation: "To disprove a universal statement ('all X are Y'), finding one counterexample (one X that is not Y) is sufficient. For example, -1 is an integer that's not positive. ❌",
        wrongAnswerExplanations: {
            "All integers are negative": "This is stronger than needed and incorrect since 0 isn't negative.",
            "Most integers are not positive": "Showing 'most' aren't positive is unnecessarily strong and hard to prove.",
            "Some integers are positive": "This doesn't contradict the original statement."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t6_qm9',
        type: "mcq",
        question: "Which statement is logically equivalent to 'If it is not sunny, then I do not go to the park'?",
        options: [
            "If it is sunny, then I go to the park",
            "If I go to the park, then it is sunny",
            "If I do not go to the park, then it is not sunny",
            "If it is sunny, then I do not go to the park"
        ],
        correctAnswer: "If I go to the park, then it is sunny",
        explanation: "The contrapositive of 'If ~P, then ~Q' is 'If Q, then P'. Here, 'If I go to the park, then it is sunny' is logically equivalent to the original. 🔄",
        wrongAnswerExplanations: {
            "If it is sunny, then I go to the park": "This is the converse of the contrapositive, not logically equivalent.",
            "If I do not go to the park, then it is not sunny": "This is the inverse of the original, not logically equivalent.",
            "If it is sunny, then I do not go to the park": "This contradicts the logically equivalent statement."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t6_qm10',
        type: "mcq",
        question: "What is the primary issue with the following 'proof'?\nTo prove: All numbers divisible by 4 are even.\nProof: 4 is divisible by 4 and is even.\n8 is divisible by 4 and is even.\n12 is divisible by 4 and is even.\nTherefore, all numbers divisible by 4 are even.",
        options: [
            "The conclusion is actually false",
            "The examples don't cover all possible cases",
            "The proof uses circular reasoning",
            "The statement is too obvious to need proof"
        ],
        correctAnswer: "The examples don't cover all possible cases",
        explanation: "This uses inductive reasoning with limited examples, not a rigorous deductive proof. Examples can't verify a universal statement about infinite numbers. 🔍",
        wrongAnswerExplanations: {
            "The conclusion is actually false": "The conclusion is true, but the reasoning method is flawed.",
            "The proof uses circular reasoning": "It doesn't assume what it's trying to prove, but fails to prove for all cases.",
            "The statement is too obvious to need proof": "Even obvious statements need rigorous proof in mathematics."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t6_qm11',
        type: "mcq",
        question: "Which of the following best describes the relationship between a conjecture and a theorem?",
        options: [
            "They are synonyms meaning the same thing",
            "A conjecture becomes a theorem once it has been proven",
            "A theorem becomes a conjecture when it is applied to specific cases",
            "A conjecture is more fundamental than a theorem"
        ],
        correctAnswer: "A conjecture becomes a theorem once it has been proven",
        explanation: "A conjecture is a mathematical statement believed to be true but lacking proof. Once rigorously proven, it earns the status of a theorem. 📚",
        wrongAnswerExplanations: {
            "They are synonyms meaning the same thing": "They have distinct meanings based on proof status.",
            "A theorem becomes a conjecture when it is applied to specific cases": "Application doesn't change a theorem's status.",
            "A conjecture is more fundamental than a theorem": "Theorems have stronger mathematical standing due to being proven."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t6_qm12',
        type: "mcq",
        question: "What is the correct negation of 'Every continuous function is differentiable'?",
        options: [
            "No continuous function is differentiable",
            "Some continuous functions are not differentiable",
            "Some differentiable functions are not continuous",
            "Every differentiable function is continuous"
        ],
        correctAnswer: "Some continuous functions are not differentiable",
        explanation: "To negate 'All A are B' correctly, we get 'Some A are not B'. Here, 'Some continuous functions are not differentiable'. ❌",
        wrongAnswerExplanations: {
            "No continuous function is differentiable": "This is too strong, changing 'all' to 'none'.",
            "Some differentiable functions are not continuous": "This negates the converse, not the original statement.",
            "Every differentiable function is continuous": "This is the converse, not the negation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t6_qm13',
        type: "mcq",
        question: "In the proof of a statement using mathematical induction, what is the purpose of the 'base case'?",
        options: [
            "To prove the statement works for a specific value like n=1",
            "To establish that the inductive step works properly",
            "To show the statement is false for certain values",
            "To demonstrate the statement is useful in applications"
        ],
        correctAnswer: "To prove the statement works for a specific value like n=1",
        explanation: "The base case verifies the statement for the starting value (usually n=1), establishing the beginning of the inductive chain. 🏁",
        wrongAnswerExplanations: {
            "To establish that the inductive step works properly": "This is the purpose of the inductive step itself.",
            "To show the statement is false for certain values": "The base case aims to show the statement is true for initial values.",
            "To demonstrate the statement is useful in applications": "Proving usefulness isn't part of the formal proof process."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t6_qm14',
        type: "mcq",
        question: "Consider the statement: 'If n is an even integer, then n² is even.'\nWhich of the following is a counterexample to this statement?",
        options: [
            "n = 2, since 2² = 4 is even",
            "n = 3, since 3² = 9 is odd",
            "n = 4, since 4² = 16 is even",
            "n = 0, since 0² = 0 is even"
        ],
        correctAnswer: "n = 3, since 3² = 9 is odd",
        explanation: "A counterexample must make the statement false. Since 3 is not even, it doesn't match the 'if' condition and can't be a counterexample. 🔍",
        wrongAnswerExplanations: {
            "n = 2, since 2² = 4 is even": "This example confirms the statement rather than contradicting it.",
            "n = 4, since 4² = 16 is even": "This example confirms the statement rather than contradicting it.",
            "n = 0, since 0² = 0 is even": "This example confirms the statement since 0 is even and 0² is even."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t6_qm15',
        type: "mcq",
        question: "Which of the following is NOT a valid rule of inference in deductive reasoning?",
        options: [
            "Modus Ponens: If P→Q is true and P is true, then Q is true",
            "Modus Tollens: If P→Q is true and Q is false, then P is false",
            "Affirming the Consequent: If P→Q is true and Q is true, then P is true",
            "Transitivity: If P→Q is true and Q→R is true, then P→R is true"
        ],
        correctAnswer: "Affirming the Consequent: If P→Q is true and Q is true, then P is true",
        explanation: "Affirming the consequent is a logical fallacy. Just because P implies Q and Q is true doesn't mean P must be true. Other causes for Q might exist. ❌",
        wrongAnswerExplanations: {
            "Modus Ponens: If P→Q is true and P is true, then Q is true": "This is a valid rule of inference.",
            "Modus Tollens: If P→Q is true and Q is false, then P is false": "This is a valid rule of inference.",
            "Transitivity: If P→Q is true and Q→R is true, then P→R is true": "This is a valid rule of inference."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t6_qm16',
        type: "mcq",
        question: "What distinguishes an axiom from a definition in mathematics?",
        options: [
            "Axioms can be proven while definitions cannot",
            "Definitions introduce new terminology while axioms assert relationships between terms",
            "Definitions are always true while axioms might be false",
            "Axioms apply only in geometry while definitions apply throughout mathematics"
        ],
        correctAnswer: "Definitions introduce new terminology while axioms assert relationships between terms",
        explanation: "Definitions establish meaning of mathematical objects; axioms state basic properties or relationships accepted without proof. Both are foundational. 📚",
        wrongAnswerExplanations: {
            "Axioms can be proven while definitions cannot": "Axioms are accepted without proof; they cannot be proven within the system.",
            "Definitions are always true while axioms might be false": "Both are assumed to be true within their mathematical system.",
            "Axioms apply only in geometry while definitions apply throughout mathematics": "Axioms exist in all mathematical systems, not just geometry."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t6_qm17',
        type: "mcq",
        question: "When attempting to prove that 'For all integers n, if n² is even, then n is even', which approach would be MOST effective?",
        options: [
            "Direct proof",
            "Proof by contradiction",
            "Proof by contrapositive",
            "Proof by mathematical induction"
        ],
        correctAnswer: "Proof by contrapositive",
        explanation: "Proving the contrapositive ('if n is odd, then n² is odd') is straightforward: if n=2k+1, then n²=4k²+4k+1=2(2k²+2k)+1, which is odd. 🔄",
        wrongAnswerExplanations: {
            "Direct proof": "Directly proving this statement is more complicated than using the contrapositive.",
            "Proof by contradiction": "While possible, the contrapositive is more elegant here.",
            "Proof by mathematical induction": "Induction isn't well-suited for this 'for all n' statement about parity."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t6_qm18',
        type: "mcq",
        question: "Which of the following statements is self-contradictory (a logical paradox)?",
        options: [
            "This statement is false",
            "All statements in mathematics are either true or false",
            "Some mathematical statements cannot be proven",
            "There exists a largest natural number"
        ],
        correctAnswer: "This statement is false",
        explanation: "If 'This statement is false' were true, it would be making a true claim about itself being false – a contradiction. If false, it correctly states it's false – making it true. ⚡",
        wrongAnswerExplanations: {
            "All statements in mathematics are either true or false": "This is the law of excluded middle, not self-contradictory.",
            "Some mathematical statements cannot be proven": "Gödel's incompleteness theorems show this is true, not paradoxical.",
            "There exists a largest natural number": "This is false, but not self-contradictory."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t6_qm19',
        type: "mcq",
        question: "If a statement is a tautology, it means:",
        options: [
            "It contains circular reasoning",
            "It is always true regardless of the truth values of its components",
            "It is sometimes true and sometimes false",
            "It is deliberately ambiguous"
        ],
        correctAnswer: "It is always true regardless of the truth values of its components",
        explanation: "A tautology is logically true under all possible interpretations of its components, like 'P or not P'. Truth table analysis confirms this. ✅",
        wrongAnswerExplanations: {
            "It contains circular reasoning": "Circular reasoning is a logical fallacy, not a tautology.",
            "It is sometimes true and sometimes false": "This describes a contingent statement, not a tautology.",
            "It is deliberately ambiguous": "Tautologies are precisely defined logical formulations, not ambiguous."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t6_qm20',
        type: "mcq",
        question: "To prove the statement 'If A, then B' using a proof by contradiction, you would:",
        options: [
            "Assume A is true and B is true, then derive a contradiction",
            "Assume A is true and B is false, then derive a contradiction",
            "Assume A is false and B is true, then derive a contradiction",
            "Assume A is false and B is false, then derive a contradiction"
        ],
        correctAnswer: "Assume A is true and B is false, then derive a contradiction",
        explanation: "For 'If A, then B', contradiction proof assumes A is true but B is false (the only case making the statement false), then shows this leads to a logical impossibility. ❌",
        wrongAnswerExplanations: {
            "Assume A is true and B is true, then derive a contradiction": "This case makes the original statement true, so no contradiction should arise.",
            "Assume A is false and B is true, then derive a contradiction": "This case makes the original statement true, so no contradiction should arise.",
            "Assume A is false and B is false, then derive a contradiction": "This case makes the original statement true, so no contradiction should arise."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];
