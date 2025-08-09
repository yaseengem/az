// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter13\Topic3\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch13_t3_qe1',
        type: "mcq",
        question: "What is deductive reasoning?",
        options: [
            "Drawing specific conclusions from general principles",
            "Drawing general conclusions from specific examples",
            "Making educated guesses based on patterns",
            "Relying on personal experiences to form opinions"
        ],
        correctAnswer: "Drawing specific conclusions from general principles",
        explanation: "Deductive reasoning involves applying general principles, rules, or laws to reach specific logical conclusions. It moves from the general to the particular with certainty. 🧠",
        wrongAnswerExplanations: {
            "Drawing general conclusions from specific examples": "This describes inductive reasoning, not deductive reasoning.",
            "Making educated guesses based on patterns": "This describes abductive reasoning or pattern recognition.",
            "Relying on personal experiences to form opinions": "This is subjective reasoning, not deductive reasoning."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t3_qe2',
        type: "mcq",
        question: "Which of these is an example of deductive reasoning?",
        options: [
            "The first five multiples of 3 are odd, so all multiples of 3 must be odd",
            "All even numbers are divisible by 2; 6 is an even number; therefore 6 is divisible by 2",
            "Every time I wear this shirt, my team wins; I'll wear it today so they win",
            "Most politicians are wealthy; Maya is a politician; therefore Maya is probably wealthy"
        ],
        correctAnswer: "All even numbers are divisible by 2; 6 is an even number; therefore 6 is divisible by 2",
        explanation: "This is deductive reasoning because it starts with a general rule (all even numbers are divisible by 2), applies it to a specific case (6 is even), and reaches a logically certain conclusion. ✅",
        wrongAnswerExplanations: {
            "The first five multiples of 3 are odd, so all multiples of 3 must be odd": "This is inductive reasoning and is actually incorrect (3, 6, 9, 12, 15 - most are not odd).",
            "Every time I wear this shirt, my team wins; I'll wear it today so they win": "This is superstitious thinking, not logical deduction.",
            "Most politicians are wealthy; Maya is a politician; therefore Maya is probably wealthy": "This is inductive reasoning with probability, not deductive certainty."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t3_qe3',
        type: "mcq",
        question: "Which of these best describes a valid deductive argument?",
        options: [
            "If the premises are true, the conclusion might be true",
            "If the premises are true, the conclusion must be true",
            "If the premises are accepted by most people, the conclusion is likely true",
            "If the conclusion is true, the premises must be true"
        ],
        correctAnswer: "If the premises are true, the conclusion must be true",
        explanation: "A valid deductive argument guarantees that if all premises are true, the conclusion must also be true. The conclusion follows necessarily from the premises through logical rules. 🔍",
        wrongAnswerExplanations: {
            "If the premises are true, the conclusion might be true": "Valid deduction provides certainty, not just possibility.",
            "If the premises are accepted by most people, the conclusion is likely true": "Validity depends on logical structure, not popular acceptance.",
            "If the conclusion is true, the premises must be true": "This reverses the relationship; true conclusions can come from false premises."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t3_qe4',
        type: "mcq",
        question: "What is the difference between inductive and deductive reasoning?",
        options: [
            "Deductive reasoning uses examples while inductive reasoning uses principles",
            "Deductive reasoning goes from general to specific while inductive goes from specific to general",
            "Deductive reasoning is used in science while inductive reasoning is used in mathematics",
            "Deductive reasoning is less certain than inductive reasoning"
        ],
        correctAnswer: "Deductive reasoning goes from general to specific while inductive goes from specific to general",
        explanation: "Deductive reasoning starts with general principles and derives specific conclusions. Inductive reasoning examines specific cases to infer general patterns or principles. They work in opposite directions. ⬆️⬇️",
        wrongAnswerExplanations: {
            "Deductive reasoning uses examples while inductive reasoning uses principles": "This is reversed; inductive uses examples, deductive uses principles.",
            "Deductive reasoning is used in science while inductive reasoning is used in mathematics": "Both types of reasoning are used in both fields.",
            "Deductive reasoning is less certain than inductive reasoning": "Deductive reasoning provides certainty, while induction only provides probability."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t3_qe5',
        type: "mcq",
        question: "In deductive reasoning, if the premises are true and the argument valid, then:",
        options: [
            "The conclusion might be false",
            "The conclusion must be true",
            "The argument is circular",
            "The conclusion is probably true"
        ],
        correctAnswer: "The conclusion must be true",
        explanation: "When the premises of a valid deductive argument are true, the conclusion must be true. This guaranteed truth preservation is what makes deductive reasoning so powerful in mathematics. 💯",
        wrongAnswerExplanations: {
            "The conclusion might be false": "This contradicts the definition of a valid deductive argument.",
            "The argument is circular": "Validity doesn't imply circularity.",
            "The conclusion is probably true": "Deductive reasoning provides certainty, not just probability."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t3_qe6',
        type: "mcq",
        question: "Which logical form represents valid deductive reasoning?",
        options: [
            "If p then q; p; therefore q",
            "If p then q; q; therefore p",
            "If p then q; not p; therefore not q",
            "If p then q; not q; therefore p"
        ],
        correctAnswer: "If p then q; p; therefore q",
        explanation: "This is the valid deductive form called modus ponens. It states: If the conditional (if p then q) is true, and the antecedent (p) is true, then the consequent (q) must be true. 🧩",
        wrongAnswerExplanations: {
            "If p then q; q; therefore p": "This is the fallacy of affirming the consequent.",
            "If p then q; not p; therefore not q": "This is the fallacy of denying the antecedent.",
            "If p then q; not q; therefore p": "This should be 'therefore not p' to be valid (modus tollens)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t3_qe7',
        type: "mcq",
        question: "Which is a characteristic of deductive reasoning in mathematics?",
        options: [
            "It leads to probable conclusions",
            "It requires experimental verification",
            "It reaches conclusions with absolute certainty within the given system",
            "It works primarily from specific cases to general rules"
        ],
        correctAnswer: "It reaches conclusions with absolute certainty within the given system",
        explanation: "Deductive reasoning in mathematics provides absolute certainty of conclusions within the axiom system, which is why mathematical proofs are considered definitive rather than probable. 📚",
        wrongAnswerExplanations: {
            "It leads to probable conclusions": "This describes inductive reasoning, not deductive reasoning.",
            "It requires experimental verification": "Mathematical deduction relies on logical necessity, not experiments.",
            "It works primarily from specific cases to general rules": "This describes inductive reasoning, not deductive."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t3_qe8',
        type: "mcq",
        question: "Which of these is NOT a valid deductive argument form?",
        options: [
            "Modus ponens: If p then q; p; therefore q",
            "Modus tollens: If p then q; not q; therefore not p",
            "Affirming the consequent: If p then q; q; therefore p",
            "Hypothetical syllogism: If p then q; if q then r; therefore if p then r"
        ],
        correctAnswer: "Affirming the consequent: If p then q; q; therefore p",
        explanation: "Affirming the consequent is an invalid argument form. Just because q is true doesn't mean p must be true. For example: \"If it rains, the ground is wet; the ground is wet; therefore it rained\" is invalid (sprinklers could cause wetness). ❌",
        wrongAnswerExplanations: {
            "Modus ponens: If p then q; p; therefore q": "This is a valid argument form.",
            "Modus tollens: If p then q; not q; therefore not p": "This is a valid argument form.",
            "Hypothetical syllogism: If p then q; if q then r; therefore if p then r": "This is a valid argument form."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t3_qe9',
        type: "mcq",
        question: "What is a syllogism?",
        options: [
            "A type of inductive reasoning where examples lead to general rules",
            "A form of deductive argument with two premises and a conclusion",
            "A logical fallacy involving circular reasoning",
            "A mathematical formula used to solve algebraic equations"
        ],
        correctAnswer: "A form of deductive argument with two premises and a conclusion",
        explanation: "A syllogism is a deductive argument form with two premises and a conclusion. The classic example is: \"All men are mortal; Socrates is a man; therefore Socrates is mortal.\" 🧑‍🏫",
        wrongAnswerExplanations: {
            "A type of inductive reasoning where examples lead to general rules": "This describes induction, not syllogisms.",
            "A logical fallacy involving circular reasoning": "A syllogism is a valid argument form, not a fallacy.",
            "A mathematical formula used to solve algebraic equations": "Syllogisms are logical structures, not mathematical formulas."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t3_qe10',
        type: "mcq",
        question: "In the syllogism: \"All squares are rectangles; All rectangles have four sides; Therefore all squares have four sides,\" which term appears in both premises but not in the conclusion?",
        options: [
            "Squares",
            "Rectangles",
            "Four sides",
            "All"
        ],
        correctAnswer: "Rectangles",
        explanation: "\"Rectangles\" is the middle term that connects the major and minor terms but doesn't appear in the conclusion. In syllogisms, the middle term allows us to make a connection between the other two terms. 🔄",
        wrongAnswerExplanations: {
            "Squares": "Squares appears in the first premise and the conclusion.",
            "Four sides": "Four sides appears in the second premise and the conclusion.",
            "All": "All is a quantifier that appears in all three statements."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t3_qe11',
        type: "mcq",
        question: "Which of the following best describes a sound deductive argument?",
        options: [
            "An argument where the premises support the conclusion",
            "An argument with true premises and a valid logical structure",
            "An argument where the conclusion is definitely true",
            "An argument accepted by most experts in the field"
        ],
        correctAnswer: "An argument with true premises and a valid logical structure",
        explanation: "A sound argument must satisfy two conditions: (1) it must be valid (the conclusion follows logically from the premises), and (2) all premises must be true. This combination guarantees a true conclusion. 📊",
        wrongAnswerExplanations: {
            "An argument where the premises support the conclusion": "This describes relevance but not necessarily validity or truth.",
            "An argument where the conclusion is definitely true": "The conclusion can be true even if the argument isn't sound.",
            "An argument accepted by most experts in the field": "Expert consensus doesn't define soundness."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t3_qe12',
        type: "mcq",
        question: "Which process is central to deductive reasoning in mathematics?",
        options: [
            "Statistical analysis",
            "Empirical observation",
            "Logical inference",
            "Numerical computation"
        ],
        correctAnswer: "Logical inference",
        explanation: "Logical inference—the process of drawing conclusions based on logical rules and previously established statements—is the core of deductive reasoning in mathematics. It ensures that conclusions follow necessarily from premises. 🧩",
        wrongAnswerExplanations: {
            "Statistical analysis": "This relates more to inductive and probabilistic reasoning.",
            "Empirical observation": "Mathematics relies on logical necessity rather than observation.",
            "Numerical computation": "While important in math, computation is separate from the reasoning process."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t3_qe13',
        type: "mcq",
        question: "In Euclid's geometry, what role does deductive reasoning play?",
        options: [
            "It helps in measuring angles precisely",
            "It derives theorems from axioms and postulates",
            "It provides practical applications for geometric shapes",
            "It explains the historical development of geometric concepts"
        ],
        correctAnswer: "It derives theorems from axioms and postulates",
        explanation: "Euclid's geometry exemplifies deductive reasoning by starting with basic axioms and postulates, then deriving increasingly complex theorems through logical steps. Each new theorem builds on previously established results. 📐",
        wrongAnswerExplanations: {
            "It helps in measuring angles precisely": "Measurement is practical application, not deductive reasoning.",
            "It provides practical applications for geometric shapes": "Applications come after theory, not from the reasoning process itself.",
            "It explains the historical development of geometric concepts": "History is separate from the logical structure."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t3_qe14',
        type: "mcq",
        question: "What is the term for an invalid deductive argument that appears valid due to its structure?",
        options: [
            "A paradox",
            "A fallacy",
            "A hypothesis",
            "A premise"
        ],
        correctAnswer: "A fallacy",
        explanation: "A fallacy is a flawed reasoning pattern that appears logical but contains errors that make it invalid. Common logical fallacies include affirming the consequent and denying the antecedent. ⚠️",
        wrongAnswerExplanations: {
            "A paradox": "A paradox is a statement that seems contradictory but may be true.",
            "A hypothesis": "A hypothesis is a proposed explanation or proposition.",
            "A premise": "A premise is a statement used to build an argument, not the argument itself."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t3_qe15',
        type: "mcq",
        question: "What does it mean when a deductive argument is valid but not sound?",
        options: [
            "The conclusion is always false",
            "The logical structure is correct, but at least one premise is false",
            "The premises are true but they don't support the conclusion",
            "The argument uses circular reasoning"
        ],
        correctAnswer: "The logical structure is correct, but at least one premise is false",
        explanation: "A valid argument has correct logical structure, but it's only sound if all premises are true. If the structure is valid but any premise is false, the argument is valid but unsound. Example: \"All fish fly; Sharks are fish; Therefore sharks fly.\" 🦈",
        wrongAnswerExplanations: {
            "The conclusion is always false": "A valid argument with false premises can have either a true or false conclusion.",
            "The premises are true but they don't support the conclusion": "This would make the argument invalid, not just unsound.",
            "The argument uses circular reasoning": "Circular reasoning is a specific fallacy, not related to soundness."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t3_qe16',
        type: "mcq",
        question: "What type of reasoning is used in mathematical proof?",
        options: [
            "Primarily inductive reasoning",
            "Primarily deductive reasoning",
            "Equal amounts of inductive and deductive reasoning",
            "Neither inductive nor deductive reasoning"
        ],
        correctAnswer: "Primarily deductive reasoning",
        explanation: "Mathematical proof relies primarily on deductive reasoning. It starts with axioms and previously proven theorems and uses logical rules to derive new conclusions with absolute certainty within the mathematical system. 📚",
        wrongAnswerExplanations: {
            "Primarily inductive reasoning": "While induction can help discover patterns, formal proofs use deduction.",
            "Equal amounts of inductive and deductive reasoning": "Deductive reasoning strongly dominates in formal proofs.",
            "Neither inductive nor deductive reasoning": "Mathematical proof definitely uses deductive reasoning."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t3_qe17',
        type: "mcq",
        question: "Which of these is a valid deductive argument?",
        options: [
            "All cats have tails; Rex has a tail; Therefore Rex is a cat",
            "All planets orbit stars; Earth orbits the Sun; Therefore Earth is a planet",
            "If it's raining, the ground is wet; The ground is wet; Therefore it's raining",
            "If you study hard, you'll pass the exam; You didn't study hard; Therefore you won't pass the exam"
        ],
        correctAnswer: "All planets orbit stars; Earth orbits the Sun; Therefore Earth is a planet",
        explanation: "This is a valid argument because the conclusion follows logically from the premises. If all planets orbit stars and Earth orbits the Sun (a star), then Earth is a planet. This is the correct application of deductive logic. 🌍",
        wrongAnswerExplanations: {
            "All cats have tails; Rex has a tail; Therefore Rex is a cat": "This commits the fallacy of affirming the consequent. Many animals have tails.",
            "If it's raining, the ground is wet; The ground is wet; Therefore it's raining": "This is the fallacy of affirming the consequent. The ground could be wet for other reasons.",
            "If you study hard, you'll pass the exam; You didn't study hard; Therefore you won't pass the exam": "This is the fallacy of denying the antecedent."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t3_qe18',
        type: "mcq",
        question: "Which of these statements best describes the relationship between axioms and deductive reasoning?",
        options: [
            "Axioms are proven using deductive reasoning",
            "Axioms are the end results of deductive arguments",
            "Axioms serve as the starting points for deductive reasoning",
            "Axioms contradict the conclusions of deductive reasoning"
        ],
        correctAnswer: "Axioms serve as the starting points for deductive reasoning",
        explanation: "Axioms are fundamental assumptions accepted without proof that serve as the foundation or starting points for deductive reasoning. From these basic truths, we derive more complex statements through logical steps. 🧱",
        wrongAnswerExplanations: {
            "Axioms are proven using deductive reasoning": "By definition, axioms are accepted without proof.",
            "Axioms are the end results of deductive arguments": "Axioms are starting points, not conclusions.",
            "Axioms contradict the conclusions of deductive reasoning": "Axioms form the basis for conclusions, not contradict them."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t3_qe19',
        type: "mcq",
        question: "What is necessary for a valid deductive argument?",
        options: [
            "True premises",
            "A logical structure where the conclusion necessarily follows from the premises",
            "A conclusion that can be verified by observation",
            "Premises that are accepted by most people"
        ],
        correctAnswer: "A logical structure where the conclusion necessarily follows from the premises",
        explanation: "Validity in deductive reasoning concerns only the logical structure—whether the conclusion follows necessarily from the premises. A valid argument can have false premises and still be valid, though not sound. 🧩",
        wrongAnswerExplanations: {
            "True premises": "Validity concerns structure, not the truth of premises; that's soundness.",
            "A conclusion that can be verified by observation": "Deductive validity is about logical necessity, not empirical verification.",
            "Premises that are accepted by most people": "Validity is about logical structure, not popular acceptance."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch13_t3_qe20',
        type: "mcq",
        question: "Which field relies most heavily on pure deductive reasoning?",
        options: [
            "Biology",
            "Chemistry",
            "Pure mathematics",
            "Sociology"
        ],
        correctAnswer: "Pure mathematics",
        explanation: "Pure mathematics relies almost exclusively on deductive reasoning, deriving theorems from axioms through logical steps. Unlike empirical sciences, it doesn't depend on observations or experiments to establish its truths. 📊",
        wrongAnswerExplanations: {
            "Biology": "Biology relies heavily on observation, experimentation, and inductive reasoning.",
            "Chemistry": "Chemistry combines theory with extensive experimental verification.",
            "Sociology": "Sociology uses observational studies and statistical analysis of human behavior."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
