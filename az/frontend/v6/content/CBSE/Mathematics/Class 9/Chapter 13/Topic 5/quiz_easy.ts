// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter13\Topic5\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch13_t5_qe1',
        type: "mcq",
        question: "What is the primary purpose of a mathematical proof?",
        options: [
            "To show a statement is true for most cases",
            "To establish the truth of a mathematical statement with absolute certainty",
            "To find examples where a statement works",
            "To simplify complex calculations"
        ],
        correctAnswer: "To establish the truth of a mathematical statement with absolute certainty",
        explanation: "The primary purpose of a mathematical proof is to establish the truth of a mathematical statement with absolute certainty through logical deduction. Unlike scientific theories which may be revised with new evidence, a valid mathematical proof provides definitive verification within its axiomatic system.",
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t5_qe2',
        type: "mcq",
        question: "Which of the following is NOT an essential characteristic of a mathematical proof?",
        options: [
            "It must be based on axioms and previously proven theorems",
            "It must use deductive reasoning",
            "It must include numerous examples to verify the pattern",
            "It must be rigorous and precise"
        ],
        correctAnswer: "It must include numerous examples to verify the pattern",
        explanation: "While examples can build intuition, a proof cannot rely on examples alone. This would be inductive reasoning, not deductive reasoning. A valid mathematical proof must establish the truth for all cases through logical deduction, not just verify a pattern with specific examples.",
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t5_qe3',
        type: "mcq",
        question: "In a direct proof, what is the general approach used?",
        options: [
            "Assume the statement is false and arrive at a contradiction",
            "Prove the contrapositive instead of the original statement",
            "Start with the hypothesis and use logical steps to reach the conclusion",
            "Test the statement with specific numerical examples"
        ],
        correctAnswer: "Start with the hypothesis and use logical steps to reach the conclusion",
        explanation: "A direct proof follows a straightforward approach: it starts with the given hypothesis or assumptions and proceeds through a sequence of logical steps, each following from the previous ones, until reaching the desired conclusion. This is the most straightforward method of proof when the path from hypothesis to conclusion is clear.",
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t5_qe4',
        type: "mcq",
        question: "Which proof technique would be most appropriate to disprove the statement 'All prime numbers are odd'?",
        options: [
            "Proof by induction",
            "Proof by contradiction",
            "Proof by counterexample",
            "Direct proof"
        ],
        correctAnswer: "Proof by counterexample",
        explanation: "To disprove a universal statement ('all...are...'), you only need to find one example where the statement fails. The number 2 is prime but even, making it a perfect counterexample that disproves the statement 'All prime numbers are odd.'",
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t5_qe5',
        type: "mcq",
        question: "What is the first step in the method of mathematical induction?",
        options: [
            "Prove the statement is true for n = k + 1",
            "Assume the statement is true for n = k",
            "Prove the statement is true for n = 0 or n = 1 (the base case)",
            "Apply the induction hypothesis"
        ],
        correctAnswer: "Prove the statement is true for n = 0 or n = 1 (the base case)",
        explanation: "Mathematical induction requires first establishing that the statement is true for a base case, typically n = 1 or sometimes n = 0. This serves as the foundation upon which the inductive argument builds. Only after proving the base case do you assume the statement for n = k and prove it for n = k + 1.",
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t5_qe6',
        type: "mcq",
        question: "In a proof by contradiction, what is the first step?",
        options: [
            "Divide the problem into several cases",
            "Assume the original statement is true",
            "Assume the negation of what we want to prove",
            "Establish a base case"
        ],
        correctAnswer: "Assume the negation of what we want to prove",
        explanation: "In a proof by contradiction, we begin by assuming the opposite (negation) of what we want to prove. We then show that this assumption leads to a logical contradiction, which means our original assumption must be false and therefore what we wanted to prove must be true.",
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t5_qe7',
        type: "mcq",
        question: "What is a proof by cases?",
        options: [
            "A proof that works only in special cases",
            "A proof that divides the problem into several exhaustive cases and proves each separately",
            "A proof that uses specific numerical examples",
            "A proof that relies on previously proven theorems"
        ],
        correctAnswer: "A proof that divides the problem into several exhaustive cases and proves each separately",
        explanation: "A proof by cases involves dividing the problem into several exhaustive scenarios (covering all possibilities) and then proving the statement separately for each case. When all cases have been proven, the original statement is established for all possible situations.",
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t5_qe8',
        type: "mcq",
        question: "What is the contrapositive of the statement 'If it is raining, then the ground is wet'?",
        options: [
            "If it is not raining, then the ground is not wet",
            "If the ground is wet, then it is raining",
            "If the ground is not wet, then it is not raining",
            "If it is not raining, then the ground is wet"
        ],
        correctAnswer: "If the ground is not wet, then it is not raining",
        explanation: "The contrapositive of a statement 'if P, then Q' is 'if not Q, then not P'. For the statement 'If it is raining (P), then the ground is wet (Q)', the contrapositive is 'If the ground is not wet (not Q), then it is not raining (not P)'. The contrapositive is always logically equivalent to the original statement.",
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t5_qe9',
        type: "mcq",
        question: "What is circular reasoning in a proof?",
        options: [
            "Using diagrams to illustrate concepts",
            "Repeating the same argument multiple times",
            "Using what you're trying to prove as part of your argument",
            "Moving from one idea to another in a circular pattern"
        ],
        correctAnswer: "Using what you're trying to prove as part of your argument",
        explanation: "Circular reasoning is a logical fallacy where the argument assumes what it's attempting to prove. In a circular proof, the conclusion is essentially embedded in the premises or reasoning steps, making the proof invalid because it doesn't actually establish the truth independently.",
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t5_qe10',
        type: "mcq",
        question: "What is the difference between a theorem and a proof?",
        options: [
            "A theorem is the statement to be proven, while a proof is the logical argument establishing its truth",
            "A theorem applies to geometry, while a proof applies to algebra",
            "A theorem is a minor result, while a proof establishes a major result",
            "A theorem uses symbols, while a proof uses words"
        ],
        correctAnswer: "A theorem is the statement to be proven, while a proof is the logical argument establishing its truth",
        explanation: "A theorem is the mathematical statement or claim whose truth needs to be established. A proof is the logical sequence of arguments and steps that demonstrates why the theorem is true. In other words, the theorem is the 'what' and the proof is the 'why' and 'how'.",
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t5_qe11',
        type: "mcq",
        question: "Which of the following statements can be disproven with a single counterexample?",
        options: [
            "There exists a prime number greater than 100",
            "All even numbers are divisible by 4",
            "Some triangles have three equal sides",
            "No solution exists for the equation x² = -1 using real numbers"
        ],
        correctAnswer: "All even numbers are divisible by 4",
        explanation: "Universal statements of the form 'All A are B' can be disproven with a single counterexample. The statement 'All even numbers are divisible by 4' is false because we can find a counterexample: 6 is an even number, but it's not divisible by 4.",
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t5_qe12',
        type: "mcq",
        question: "What does mathematical rigor in proofs refer to?",
        options: [
            "The difficulty level of the mathematics involved",
            "The historical importance of the theorem being proved",
            "The adherence to strict logical standards and precise reasoning",
            "The length and complexity of the proof"
        ],
        correctAnswer: "The adherence to strict logical standards and precise reasoning",
        explanation: "Mathematical rigor refers to the strictness, accuracy, and precision in mathematical reasoning. A rigorous proof leaves no logical gaps, makes all assumptions explicit, uses precise definitions, and follows the rules of logical inference exactly. Rigor ensures the reliability and trustworthiness of mathematical results.",
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t5_qe13',
        type: "mcq",
        question: "What is an existence proof in mathematics?",
        options: [
            "A proof that shows a mathematical statement exists in textbooks",
            "A proof that demonstrates a mathematical object with certain properties exists",
            "A proof that has existed for a long time and stood the test of time",
            "A proof that no solution exists for a given problem"
        ],
        correctAnswer: "A proof that demonstrates a mathematical object with certain properties exists",
        explanation: "An existence proof specifically demonstrates that there exists at least one mathematical object (like a number, function, or set) that satisfies certain given properties or conditions. It doesn't necessarily find or construct all such objects, nor does it need to provide a specific example—though constructive existence proofs do provide explicit examples.",
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t5_qe14',
        type: "mcq",
        question: "What does it mean when a proof is described as 'elegant'?",
        options: [
            "It uses advanced mathematical notation",
            "It was created by a famous mathematician",
            "It achieves the result with minimal steps and maximum insight",
            "It is written in formal language"
        ],
        correctAnswer: "It achieves the result with minimal steps and maximum insight",
        explanation: "In mathematics, an elegant proof is one that achieves its result in a surprisingly concise, clear, and insightful way. Elegance typically involves simplicity, depth of insight, unexpected connections, and a certain aesthetic quality that mathematicians value. An elegant proof often reveals the 'why' behind a result, not just the 'what'.",
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t5_qe15',
        type: "mcq",
        question: "How does a proof by induction show that a statement is true for all positive integers?",
        options: [
            "By checking the statement for all possible numbers",
            "By proving it for several random numbers",
            "By proving a base case and showing that the truth for one number implies the truth for the next number",
            "By using complicated formulas and equations"
        ],
        correctAnswer: "By proving a base case and showing that the truth for one number implies the truth for the next number",
        explanation: "Mathematical induction works like a chain reaction or falling dominoes. By proving that the statement is true for a starting value (base case, usually n=1) and then proving that if it's true for any number k, it must also be true for k+1, we establish that the statement is true for all positive integers starting from the base case.",
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t5_qe16',
        type: "mcq",
        question: "Which of the following is NOT a standard form of mathematical proof?",
        options: [
            "Direct proof",
            "Proof by contradiction",
            "Proof by popularity",
            "Proof by contrapositive"
        ],
        correctAnswer: "Proof by popularity",
        explanation: "Proof by popularity is not a valid mathematical proof method. The validity of a mathematical statement is not determined by how many people believe it or by consensus. Valid proof methods include direct proof, proof by contradiction, proof by contrapositive, mathematical induction, and proof by cases, among others.",
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t5_qe17',
        type: "mcq",
        question: "Why are computer-assisted proofs sometimes controversial in mathematics?",
        options: [
            "Computers make too many errors in calculations",
            "The software used is often not freely available",
            "Some mathematicians prefer traditional methods only",
            "They may be difficult to verify completely by human checking alone"
        ],
        correctAnswer: "They may be difficult to verify completely by human checking alone",
        explanation: "Computer-assisted proofs are sometimes controversial because they can involve calculations or case analyses too extensive for humans to verify completely by hand. This raises philosophical questions about the nature of mathematical knowledge and what constitutes understanding. Examples include the Four-Color Theorem and Kepler Conjecture proofs, which rely heavily on computer verification of numerous cases.",
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t5_qe18',
        type: "mcq",
        question: "What is the primary difference between a scientific theory and a mathematical theorem?",
        options: [
            "Scientific theories are always more complex than mathematical theorems",
            "Mathematical theorems can be proven with absolute certainty within their axiomatic system, while scientific theories remain open to revision",
            "Scientific theories are more useful in the real world",
            "Mathematical theorems require more advanced education to understand"
        ],
        correctAnswer: "Mathematical theorems can be proven with absolute certainty within their axiomatic system, while scientific theories remain open to revision",
        explanation: "The key difference is the nature of their truth claims. Mathematical theorems, once properly proven within their axiomatic system, are established with absolute certainty and will not be overturned by new evidence. Scientific theories, while they may be strongly supported by evidence, always remain provisional and open to revision if new evidence contradicts their predictions.",
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t5_qe19',
        type: "mcq",
        question: "Which statement about mathematical proofs is TRUE?",
        options: [
            "A proof is valid only if most mathematicians agree with it",
            "A proof needs to include numerical examples to be complete",
            "A valid proof establishes the truth of a statement beyond any doubt",
            "Modern proofs require computers to verify them"
        ],
        correctAnswer: "A valid proof establishes the truth of a statement beyond any doubt",
        explanation: "A valid mathematical proof uses rigorous logical reasoning to establish the truth of a statement with absolute certainty within its axiomatic framework. Unlike empirical sciences, mathematical truth doesn't depend on consensus or experimental validation, though the mathematical community does play a role in checking proofs for errors.",
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t5_qe20',
        type: "mcq",
        question: "A mathematical proof that works for several specific examples is sufficient to prove a general statement.",
        options: [
            "True",
            "False"
        ],
        correctAnswer: "False",
        explanation: "Checking specific examples, no matter how many, is not sufficient to prove a general mathematical statement. This approach, called inductive reasoning, can suggest patterns and build intuition, but a valid proof must use deductive reasoning to establish the statement for all cases within its domain. Counterexamples might exist for cases that weren't tested.",
        difficulty: "easy",
        marks: 1,
        recommendedTime: 20
    },
    {
        id: 'cl9_ch13_t5_qe21',
        type: "mcq",
        question: "The contrapositive of a statement always has the same truth value as the original statement.",
        options: [
            "True",
            "False"
        ],
        correctAnswer: "True",
        explanation: "The contrapositive of a statement 'if P then Q' is 'if not Q then not P'. These statements are logically equivalent, meaning they always have the same truth value. This is why proving the contrapositive is a valid proof technique—if you prove the contrapositive is true, you've also proven the original statement is true.",
        difficulty: "easy",
        marks: 1,
        recommendedTime: 20
    }
];
