// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter13\Topic3\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch13_t3_qm1',
        type: "mcq",
        question: "In the valid argument form modus tollens, what is the structure?",
        options: [
            "If p then q; p; therefore q",
            "If p then q; q; therefore p",
            "If p then q; not q; therefore not p",
            "If p then q; not p; therefore not q"
        ],
        correctAnswer: "If p then q; not q; therefore not p",
        explanation: "Modus tollens follows this structure: if p implies q, and q is false, then p must also be false. Example: If it rains, the ground gets wet; the ground is not wet; therefore it didn't rain. 🧠",
        wrongAnswerExplanations: {
            "If p then q; p; therefore q": "This describes modus ponens, not modus tollens.",
            "If p then q; q; therefore p": "This is the fallacy of affirming the consequent.",
            "If p then q; not p; therefore not q": "This is the fallacy of denying the antecedent."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t3_qm2',
        type: "mcq",
        question: "Which of the following is an invalid deductive argument form?",
        options: [
            "If p then q; p; therefore q (Modus Ponens)",
            "If p then q; if q then r; therefore if p then r (Hypothetical Syllogism)",
            "If p then q; not p; therefore not q (Denying the Antecedent)",
            "p or q; not p; therefore q (Disjunctive Syllogism)"
        ],
        correctAnswer: "If p then q; not p; therefore not q (Denying the Antecedent)",
        explanation: "Denying the antecedent is a logical fallacy. Just because p implies q, doesn't mean not-p implies not-q. Example: If I am in Paris, I'm in France; I am not in Paris; I may still be in France (e.g., Lyon). ❌",
        wrongAnswerExplanations: {
            "If p then q; p; therefore q (Modus Ponens)": "This is a valid argument form.",
            "If p then q; if q then r; therefore if p then r (Hypothetical Syllogism)": "This is a valid argument form.",
            "p or q; not p; therefore q (Disjunctive Syllogism)": "This is a valid argument form."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t3_qm3',
        type: "mcq",
        question: "In a sound deductive argument, which of the following must be true?",
        options: [
            "The premises must be true and the conclusion must follow logically",
            "The premises must be false but the conclusion must be true",
            "The logical form must be valid regardless of the truth of premises",
            "The conclusion must be more general than the premises"
        ],
        correctAnswer: "The premises must be true and the conclusion must follow logically",
        explanation: "A sound argument requires both true premises and valid logical form. This combination guarantees a true conclusion. Validity ensures the conclusion follows logically, while soundness adds the requirement that premises are actually true. 📚",
        wrongAnswerExplanations: {
            "The premises must be false but the conclusion must be true": "Sound arguments require true premises.",
            "The logical form must be valid regardless of the truth of premises": "This describes validity alone, not soundness.",
            "The conclusion must be more general than the premises": "This describes inductive, not deductive reasoning."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t3_qm4',
        type: "mcq",
        question: "In the syllogism: \"All quadrilaterals have four sides; All rectangles are quadrilaterals; Therefore, all rectangles have four sides\", identify the minor premise.",
        options: [
            "All quadrilaterals have four sides",
            "All rectangles are quadrilaterals",
            "All rectangles have four sides",
            "None of these is the minor premise"
        ],
        correctAnswer: "All rectangles are quadrilaterals",
        explanation: "In a standard syllogism, the minor premise contains the minor term (subject of the conclusion). Here, \"rectangles\" is the subject of the conclusion, so \"All rectangles are quadrilaterals\" is the minor premise. 📝",
        wrongAnswerExplanations: {
            "All quadrilaterals have four sides": "This is the major premise containing the major term (predicate of conclusion).",
            "All rectangles have four sides": "This is the conclusion, not a premise.",
            "None of these is the minor premise": "The minor premise is indeed present in the options."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t3_qm5',
        type: "mcq",
        question: "What is the primary difference between validity and soundness in deductive arguments?",
        options: [
            "Validity concerns logical form while soundness concerns both form and truth of premises",
            "Validity concerns empirical verification while soundness concerns logical structure",
            "Validity applies to inductive arguments while soundness applies to deductive arguments",
            "Validity ensures true conclusions while soundness only ensures logical consistency"
        ],
        correctAnswer: "Validity concerns logical form while soundness concerns both form and truth of premises",
        explanation: "A valid argument has correct logical structure where the conclusion necessarily follows from premises. Soundness requires both validity and true premises, ensuring a true conclusion. Valid arguments can have false premises. 🧩",
        wrongAnswerExplanations: {
            "Validity concerns empirical verification while soundness concerns logical structure": "This is reversed; validity is about logical structure.",
            "Validity applies to inductive arguments while soundness applies to deductive arguments": "Both concepts apply to deductive arguments.",
            "Validity ensures true conclusions while soundness only ensures logical consistency": "This is backwards; validity alone doesn't guarantee true conclusions."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t3_qm6',
        type: "mcq",
        question: "Consider this argument: \"If two lines are parallel, they never intersect. Lines A and B never intersect. Therefore, lines A and B are parallel.\" This argument commits which fallacy?",
        options: [
            "Denying the antecedent",
            "Affirming the consequent",
            "False dichotomy",
            "Circular reasoning"
        ],
        correctAnswer: "Affirming the consequent",
        explanation: "This argument has the form: If p then q; q; therefore p. This is the fallacy of affirming the consequent. Non-intersecting lines could be skew lines in 3D space, not necessarily parallel. ⚠️",
        wrongAnswerExplanations: {
            "Denying the antecedent": "This would have the form: If p then q; not p; therefore not q.",
            "False dichotomy": "This fallacy presents only two options when more exist, not relevant here.",
            "Circular reasoning": "This would use the conclusion as a premise, not the case here."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t3_qm7',
        type: "mcq",
        question: "Which type of deductive reasoning is used in this argument? \"Either the value of x is greater than 5 or it is less than or equal to 5. The value of x is not greater than 5. Therefore, the value of x is less than or equal to 5.\"",
        options: [
            "Modus ponens",
            "Modus tollens",
            "Disjunctive syllogism",
            "Hypothetical syllogism"
        ],
        correctAnswer: "Disjunctive syllogism",
        explanation: "This argument follows the form: p or q; not p; therefore q. This valid argument form is called disjunctive syllogism. When faced with two options where one must be true, eliminating one proves the other. 🔄",
        wrongAnswerExplanations: {
            "Modus ponens": "This has the form: If p then q; p; therefore q.",
            "Modus tollens": "This has the form: If p then q; not q; therefore not p.",
            "Hypothetical syllogism": "This has the form: If p then q; if q then r; therefore if p then r."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t3_qm8',
        type: "mcq",
        question: "When using the law of contraposition, the statement \"If p then q\" is equivalent to:",
        options: [
            "If q then p",
            "If not p then not q",
            "If not q then not p",
            "If p then not q"
        ],
        correctAnswer: "If not q then not p",
        explanation: "The contrapositive of \"If p then q\" is \"If not q then not p\". This logical equivalence is the law of contraposition. Both statements have the same truth value in all scenarios. 🔄",
        wrongAnswerExplanations: {
            "If q then p": "This is the converse, not logically equivalent.",
            "If not p then not q": "This is the inverse, not logically equivalent.",
            "If p then not q": "This contradicts the original statement."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t3_qm9',
        type: "mcq",
        question: "What makes a mathematical proof by deductive reasoning different from a scientific theory?",
        options: [
            "Mathematical proofs use more complex logic",
            "Mathematical proofs establish truth with certainty within their axiom system, while scientific theories remain provisional",
            "Mathematical proofs are more widely accepted than scientific theories",
            "Mathematical proofs require experimental verification"
        ],
        correctAnswer: "Mathematical proofs establish truth with certainty within their axiom system, while scientific theories remain provisional",
        explanation: "Mathematical proofs use deductive reasoning to establish conclusions with absolute certainty within their axiom system. Scientific theories, though well-supported, remain provisional and open to revision with new evidence. 📊",
        wrongAnswerExplanations: {
            "Mathematical proofs use more complex logic": "This is subjective and not the fundamental distinction.",
            "Mathematical proofs are more widely accepted than scientific theories": "Acceptance is not the key difference.",
            "Mathematical proofs require experimental verification": "The opposite is true; mathematical proofs rely on logic, not experiments."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t3_qm10',
        type: "mcq",
        question: "In Euclid's Elements, the proof that there are infinitely many prime numbers is an example of which proof technique?",
        options: [
            "Proof by mathematical induction",
            "Proof by contraposition",
            "Proof by contradiction",
            "Direct proof"
        ],
        correctAnswer: "Proof by contradiction",
        explanation: "Euclid proved the infinity of primes by assuming there are finitely many primes, multiplying them all together, adding 1, and showing this new number is either prime or has a prime factor not in our original list—contradicting our assumption. ∞",
        wrongAnswerExplanations: {
            "Proof by mathematical induction": "This technique proves statements for all natural numbers step-by-step.",
            "Proof by contraposition": "This proves \"if p then q\" by proving \"if not q then not p\".",
            "Direct proof": "This proves a statement by straightforward logical steps from premises to conclusion."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t3_qm11',
        type: "mcq",
        question: "Consider this argument: \"All natural numbers greater than 1 are either prime or composite. The number 15 is not prime. Therefore, 15 is composite.\" This illustrates which principle of deductive reasoning?",
        options: [
            "Law of excluded middle",
            "Law of contraposition",
            "Law of detachment",
            "Law of syllogism"
        ],
        correctAnswer: "Law of excluded middle",
        explanation: "This argument uses the law of excluded middle, which states that either a proposition is true or its negation is true (no third possibility). Here, a number must be either prime or composite, so if it's not prime, it must be composite. ◯❌",
        wrongAnswerExplanations: {
            "Law of contraposition": "This would transform \"if p then q\" into \"if not q then not p\".",
            "Law of detachment": "This is another name for modus ponens (if p then q; p; therefore q).",
            "Law of syllogism": "This combines conditional statements: if p→q and q→r, then p→r."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t3_qm12',
        type: "mcq",
        question: "Which of the following best illustrates a deductive approach to proving the Pythagorean theorem?",
        options: [
            "Measuring the sides of many right triangles and observing the pattern",
            "Starting with axioms about triangles and deriving the relationship a² + b² = c² through logical steps",
            "Showing that the theorem works for special cases like the 3-4-5 triangle",
            "Verifying the theorem through computer simulations"
        ],
        correctAnswer: "Starting with axioms about triangles and deriving the relationship a² + b² = c² through logical steps",
        explanation: "A deductive proof of the Pythagorean theorem begins with axioms and established geometric principles, then derives the relationship through logical steps. This provides certainty rather than just observed patterns. 📐",
        wrongAnswerExplanations: {
            "Measuring the sides of many right triangles and observing the pattern": "This is inductive reasoning.",
            "Showing that the theorem works for special cases like the 3-4-5 triangle": "Examples alone don't constitute a proof.",
            "Verifying the theorem through computer simulations": "Simulations provide empirical support, not deductive proof."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t3_qm13',
        type: "mcq",
        question: "What is the major weakness of deductive reasoning as applied in the real world?",
        options: [
            "It is too slow for solving practical problems",
            "It is too complex for most people to understand",
            "Its conclusions are only as good as its premises, which may be flawed or incomplete",
            "It cannot be applied outside of mathematics"
        ],
        correctAnswer: "Its conclusions are only as good as its premises, which may be flawed or incomplete",
        explanation: "While deductive reasoning guarantees valid conclusions if the premises are true, real-world premises often contain uncertainties, assumptions, or incompleteness. The reasoning may be perfect, but the premises problematic. 🌍",
        wrongAnswerExplanations: {
            "It is too slow for solving practical problems": "Speed isn't the fundamental weakness.",
            "It is too complex for most people to understand": "Complexity isn't the inherent weakness.",
            "It cannot be applied outside of mathematics": "Deductive reasoning is applicable in many fields."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t3_qm14',
        type: "mcq",
        question: "What is the deductive relationship between these three statements? (1) No squares are circles, (2) Some shapes are squares, (3) Some shapes are not circles.",
        options: [
            "Statement 3 follows deductively from statements 1 and 2",
            "Statement 2 follows deductively from statements 1 and 3",
            "Statement 1 follows deductively from statements 2 and 3",
            "The statements are unrelated deductively"
        ],
        correctAnswer: "Statement 3 follows deductively from statements 1 and 2",
        explanation: "From (1) no squares are circles and (2) some shapes are squares, we can deduce (3) some shapes are not circles. This follows the valid syllogistic pattern: No A are B; Some C are A; Therefore some C are not B. 🔷",
        wrongAnswerExplanations: {
            "Statement 2 follows deductively from statements 1 and 3": "Statements 1 and 3 don't guarantee the existence of squares.",
            "Statement 1 follows deductively from statements 2 and 3": "These don't prove that no squares are circles.",
            "The statements are unrelated deductively": "There is a valid deductive relationship."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t3_qm15',
        type: "mcq",
        question: "In mathematical proofs, what is the purpose of deductive reasoning?",
        options: [
            "To discover new mathematical principles through trial and error",
            "To establish mathematical truths with certainty based on axioms and previously proven theorems",
            "To convince skeptics through experimental verification",
            "To simplify complex calculations"
        ],
        correctAnswer: "To establish mathematical truths with certainty based on axioms and previously proven theorems",
        explanation: "In mathematics, deductive reasoning establishes truths with certainty by deriving conclusions from axioms and previously proven results through logical steps. This creates an interconnected body of knowledge built on rigorous foundations. 🧮",
        wrongAnswerExplanations: {
            "To discover new mathematical principles through trial and error": "This describes exploration, not proof.",
            "To convince skeptics through experimental verification": "Mathematical proof relies on logic, not experiments.",
            "To simplify complex calculations": "Proof establishes truth, not just computational simplification."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t3_qm16',
        type: "mcq",
        question: "Which of these represents the structure of a proof by contraposition?",
        options: [
            "To prove \"if p then q\", assume p and derive q",
            "To prove \"if p then q\", assume p and not q and derive a contradiction",
            "To prove \"if p then q\", prove the equivalent statement \"if not q then not p\"",
            "To prove \"if p then q\", prove \"if q then p\" and \"if not p then not q\""
        ],
        correctAnswer: "To prove \"if p then q\", prove the equivalent statement \"if not q then not p\"",
        explanation: "Contraposition leverages the logical equivalence between \"if p then q\" and \"if not q then not p\". This approach is useful when the contrapositive is easier to prove than the original statement. 🧠",
        wrongAnswerExplanations: {
            "To prove \"if p then q\", assume p and derive q": "This is direct proof, not contraposition.",
            "To prove \"if p then q\", assume p and not q and derive a contradiction": "This is proof by contradiction.",
            "To prove \"if p then q\", prove \"if q then p\" and \"if not p then not q\"": "This would establish a biconditional (if and only if)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t3_qm17',
        type: "mcq",
        question: "A categorical syllogism has the following form: \"All M are P; All S are M; Therefore, all S are P.\" This specific form of syllogism is known as:",
        options: [
            "Modus Ponens",
            "Disjunctive Syllogism",
            "Barbara",
            "Hypothetical Syllogism"
        ],
        correctAnswer: "Barbara",
        explanation: "This form (All M are P; All S are M; Therefore, all S are P) is the classical first-figure syllogism called Barbara. It's named using medieval mnemonic systems, where 'a' indicates universal affirmative propositions. 📜",
        wrongAnswerExplanations: {
            "Modus Ponens": "This refers to: If p then q; p; therefore q.",
            "Disjunctive Syllogism": "This refers to: p or q; not p; therefore q.",
            "Hypothetical Syllogism": "This refers to: If p then q; if q then r; therefore if p then r."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t3_qm18',
        type: "mcq",
        question: "Which proof technique is being used here? \"We want to prove that the square root of 2 is irrational. Assume √2 is rational. Then √2 = a/b where a and b are integers with no common factors. Squaring both sides: 2 = a²/b², so a² = 2b². Therefore, a² is even, which means a is even. If a = 2k, then 2b² = 4k², so b² = 2k², making b even also. But this contradicts our assumption that a and b have no common factors. Therefore, √2 must be irrational.\"",
        options: [
            "Direct proof",
            "Proof by contrapositive",
            "Proof by contradiction",
            "Proof by mathematical induction"
        ],
        correctAnswer: "Proof by contradiction",
        explanation: "This proof assumes the opposite of what we want to prove (that √2 is rational), then shows this leads to a logical contradiction. Since the assumption leads to an impossibility, the original statement must be true. √2 is irrational. ↯",
        wrongAnswerExplanations: {
            "Direct proof": "This would directly establish the irrationality without assuming the opposite.",
            "Proof by contrapositive": "This would prove \"if rational, then not √2\".",
            "Proof by mathematical induction": "This is used for statements about all natural numbers."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t3_qm19',
        type: "mcq",
        question: "What is the role of counterexamples in deductive reasoning?",
        options: [
            "To strengthen the validity of an argument",
            "To show that a general statement is false",
            "To prove a conclusion is true",
            "To establish the truth of premises"
        ],
        correctAnswer: "To show that a general statement is false",
        explanation: "A counterexample is a specific case that disproves a general statement by showing an instance where the statement fails. A single counterexample is sufficient to prove that a universal claim is false. 🚫",
        wrongAnswerExplanations: {
            "To strengthen the validity of an argument": "Counterexamples weaken or disprove arguments.",
            "To prove a conclusion is true": "Counterexamples prove statements are false, not true.",
            "To establish the truth of premises": "Counterexamples challenge conclusions, not establish premises."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch13_t3_qm20',
        type: "mcq",
        question: "Which statement best describes the relationship between deductive validity and truth?",
        options: [
            "Valid deductive arguments always have true conclusions",
            "Valid deductive arguments preserve truth from premises to conclusion",
            "Validity is determined by the truth of the conclusion",
            "A valid argument must have at least one true premise"
        ],
        correctAnswer: "Valid deductive arguments preserve truth from premises to conclusion",
        explanation: "Valid deductive arguments guarantee that if all premises are true, the conclusion must be true. This truth-preserving quality is the essence of valid deduction, though it doesn't guarantee the actual truth of premises or conclusion. ✓",
        wrongAnswerExplanations: {
            "Valid deductive arguments always have true conclusions": "The conclusion can be false if some premises are false.",
            "Validity is determined by the truth of the conclusion": "Validity depends on logical structure, not truth values.",
            "A valid argument must have at least one true premise": "Validity doesn't require any premises to be true."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];
