export const mediumQuestions = [
    {
        id: 'cl9_ch5_t2_qm1',
        type: "mcq",
        question: "If a straight line falls on two parallel lines, then:",
        options: [
            "All corresponding angles are supplementary",
            "All alternate interior angles are equal",
            "All consecutive interior angles are equal",
            "All alternate exterior angles are supplementary"
        ],
        correctAnswer: "All alternate interior angles are equal",
        explanation: "When a transversal intersects parallel lines, alternate interior angles are equal. This is a direct consequence of Euclid's parallel postulate and is essential in the study of parallel lines.",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch5_t2_qm2',
        type: "mcq",
        question: "Which of the following statements best explains why Euclid's fifth postulate is different from the other four?",
        options: [
            "It can be proven using the other four postulates",
            "It refers to infinite processes not immediately verifiable",
            "It contains an explicit measurement of angles",
            "It has no practical applications"
        ],
        correctAnswer: "It refers to infinite processes not immediately verifiable",
        explanation: "Euclid's fifth postulate is unique because it makes assertions about what happens when lines extend indefinitely, which cannot be directly verified in a finite drawing, unlike the more intuitive first four postulates.",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch5_t2_qm3',
        type: "mcq",
        question: "Which geometry is obtained by modifying Euclid's fifth postulate to state that 'through a point not on a given line, no parallel line can be drawn'?",
        options: [
            "Euclidean geometry",
            "Hyperbolic geometry",
            "Elliptic geometry",
            "Fractal geometry"
        ],
        correctAnswer: "Elliptic geometry",
        explanation: "Elliptic geometry results when we modify the fifth postulate to state that no parallel lines exist. In this geometry, all straight lines eventually intersect, similar to great circles on a sphere.",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch5_t2_qm4',
        type: "mcq",
        question: "Which of these statements is equivalent to the statement that the sum of angles in a triangle is 180°?",
        options: [
            "A quadrilateral has exactly four sides",
            "Through a point not on a line, exactly one parallel line can be drawn to the given line",
            "All triangles can be divided into three equal parts",
            "A circle can be divided into equal segments"
        ],
        correctAnswer: "Through a point not on a line, exactly one parallel line can be drawn to the given line",
        explanation: "The statement that the sum of angles in a triangle is 180° is equivalent to Euclid's fifth postulate in the form of Playfair's axiom, which states that through a point not on a line, exactly one parallel line can be drawn.",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch5_t2_qm5',
        type: "mcq",
        question: "If we deny Euclid's fifth postulate and assume instead that multiple parallel lines can be drawn through a point not on a given line, what would happen to the sum of angles in a triangle?",
        options: [
            "It would always be exactly 180°",
            "It would always be greater than 180°",
            "It would always be less than 180°",
            "It would vary unpredictably"
        ],
        correctAnswer: "It would always be less than 180°",
        explanation: "In hyperbolic geometry, where multiple parallels can be drawn through a point not on a line, the sum of angles in a triangle is always less than 180°. The deficit is proportional to the triangle's area.",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch5_t2_qm6',
        type: "mcq",
        question: "Why did mathematicians spend centuries trying to prove the fifth postulate from the other four?",
        options: [
            "They believed Euclid made an error in his work",
            "It seemed too complex to be a fundamental assumption",
            "They wanted to simplify Euclid's geometry",
            "All of the above"
        ],
        correctAnswer: "It seemed too complex to be a fundamental assumption",
        explanation: "Mathematicians tried to prove the fifth postulate because it seemed too complex and less self-evident compared to the other four. They believed it should be derivable from simpler principles rather than being an axiom itself.",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch5_t2_qm7',
        type: "mcq",
        question: "What happens to rectangles in hyperbolic geometry?",
        options: [
            "They have exactly four right angles",
            "They cannot exist because the sum of angles would exceed 360°",
            "They cannot exist because four right angles cannot occur in the same quadrilateral",
            "They are identical to squares"
        ],
        correctAnswer: "They cannot exist because four right angles cannot occur in the same quadrilateral",
        explanation: "In hyperbolic geometry, rectangles (quadrilaterals with four right angles) cannot exist because the sum of angles in any quadrilateral is less than 360°. This follows from the fact that triangles have angle sums less than 180°.",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch5_t2_qm8',
        type: "mcq",
        question: "If vertically opposite angles are always equal, which of Euclid's axioms or postulates is most directly involved in proving this?",
        options: [
            "First postulate (about drawing a straight line)",
            "Axiom that things equal to the same thing are equal to each other",
            "Fourth postulate (about right angles)",
            "Axiom that if equals are added to equals, the wholes are equal"
        ],
        correctAnswer: "Axiom that if equals are added to equals, the wholes are equal",
        explanation: "Proving that vertically opposite angles are equal involves showing that both pairs of angles are supplementary to the same angle, then using the axiom that 'if equals are subtracted from equals, the remainders are equal.'",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch5_t2_qm9',
        type: "mcq",
        question: "What is the flaw in the following 'proof' that all triangles are isosceles? 'Draw the angle bisector from the vertex angle to the base. This creates two congruent triangles, proving the base sides are equal.'",
        options: [
            "The angle bisector doesn't exist",
            "The angle bisector doesn't necessarily intersect the base perpendicularly",
            "The resulting triangles aren't necessarily congruent",
            "Angle bisectors don't create congruent triangles"
        ],
        correctAnswer: "The angle bisector doesn't necessarily intersect the base perpendicularly",
        explanation: "The flaw is assuming the angle bisector from the vertex creates equal perpendicular distances to the base sides. Without establishing perpendicularity, we can't prove the triangles are congruent or that base sides are equal.",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch5_t2_qm10',
        type: "mcq",
        question: "Which mathematician first published a consistent geometry based on the assumption that multiple parallel lines can be drawn through a point not on a given line?",
        options: [
            "Euclid",
            "Pythagoras",
            "Nikolai Lobachevsky",
            "René Descartes"
        ],
        correctAnswer: "Nikolai Lobachevsky",
        explanation: "Nikolai Lobachevsky (along with János Bolyai who worked independently) first published a consistent hyperbolic geometry where multiple parallels can be drawn through a point not on a line, challenging Euclid's fifth postulate.",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch5_t2_qm11',
        type: "mcq",
        question: "What impact did the discovery of non-Euclidean geometries have on mathematics?",
        options: [
            "It proved Euclid's work was entirely incorrect",
            "It showed that multiple consistent geometric systems could exist",
            "It eliminated the need for axioms in mathematics",
            "It simplified geometric proofs"
        ],
        correctAnswer: "It showed that multiple consistent geometric systems could exist",
        explanation: "The discovery of non-Euclidean geometries revolutionized mathematics by showing that multiple, equally valid geometric systems could exist side by side, challenging the notion of a single 'true' geometry of space.",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch5_t2_qm12',
        type: "mcq",
        question: "In Euclidean geometry, what is the necessary and sufficient condition for two triangles to be similar?",
        options: [
            "They have the same perimeter",
            "They have the same area",
            "Their corresponding angles are equal",
            "They have the same number of sides"
        ],
        correctAnswer: "Their corresponding angles are equal",
        explanation: "In Euclidean geometry, two triangles are similar if and only if their corresponding angles are equal. This is actually equivalent to the parallel postulate, which doesn't hold in non-Euclidean geometries.",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch5_t2_qm13',
        type: "mcq",
        question: "A mathematical system with undefined terms, defined terms, axioms, and theorems is called:",
        options: [
            "A theoretical framework",
            "An axiomatic system",
            "A logical fallacy",
            "A mathematical model"
        ],
        correctAnswer: "An axiomatic system",
        explanation: "A mathematical system built on undefined terms, defined terms, axioms, and theorems is called an axiomatic system. Euclid's geometry was the first well-developed example of such a system in mathematics.",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch5_t2_qm14',
        type: "mcq",
        question: "What does the existence of non-Euclidean geometries tell us about the nature of mathematical truth?",
        options: [
            "That mathematical truth is arbitrary",
            "That mathematical truth depends on the axioms we choose to accept",
            "That there is no such thing as mathematical truth",
            "That all mathematical systems are equally useful"
        ],
        correctAnswer: "That mathematical truth depends on the axioms we choose to accept",
        explanation: "The existence of non-Euclidean geometries shows that mathematical truth is relative to the axiom system chosen. Within each system, results are true if they follow logically from the axioms, regardless of our intuitive expectations.",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch5_t2_qm15',
        type: "mcq",
        question: "Which of the following statements is true about the relationship between axioms and theorems?",
        options: [
            "Axioms are proven using theorems",
            "Theorems are proven using axioms and previously proven theorems",
            "Axioms and theorems are both proven using definitions",
            "Neither axioms nor theorems require proof"
        ],
        correctAnswer: "Theorems are proven using axioms and previously proven theorems",
        explanation: "Theorems are statements that are proven to be true using logical deduction from axioms and previously established theorems. Axioms, by contrast, are accepted without proof as the foundation of the system.",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch5_t2_qm16',
        type: "mcq",
        question: "The 'equidistance criterion' states that a line is parallel to another if all points on one line are the same distance from the other line. Is this equivalent to Euclid's parallel postulate?",
        options: [
            "No, it's an independent statement",
            "Yes, it's logically equivalent to the parallel postulate",
            "No, it contradicts the parallel postulate",
            "Yes, but only in two-dimensional geometry"
        ],
        correctAnswer: "Yes, it's logically equivalent to the parallel postulate",
        explanation: "The equidistance criterion is logically equivalent to Euclid's parallel postulate. If we accept one, we can prove the other. Both lead to the same Euclidean geometry and both fail in non-Euclidean geometries.",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch5_t2_qm17',
        type: "mcq",
        question: "In the proof that base angles of an isosceles triangle are equal, which of these principles is used?",
        options: [
            "The Pythagorean theorem",
            "The concept of congruent triangles",
            "Circle properties",
            "The law of sines"
        ],
        correctAnswer: "The concept of congruent triangles",
        explanation: "The classical proof that base angles of an isosceles triangle are equal uses the concept of congruent triangles. By drawing the bisector from the vertex angle, we create two congruent triangles with equal base angles.",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch5_t2_qm18',
        type: "mcq",
        question: "Which of the following cannot be defined in terms of other concepts in Euclidean geometry?",
        options: [
            "A triangle",
            "A circle",
            "A point",
            "A square"
        ],
        correctAnswer: "A point",
        explanation: "In Euclidean geometry, a point is a primitive or undefined term that cannot be defined in terms of simpler concepts. We understand what it means intuitively, but formal definitions would be circular.",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch5_t2_qm19',
        type: "mcq",
        question: "In modern axiomatic geometry, which of these is considered a more fundamental flaw in Euclid's original axiom system?",
        options: [
            "His failure to define points and lines adequately",
            "His inclusion of the parallel postulate",
            "His assumption of implicit properties of betweenness and continuity",
            "His exclusion of three-dimensional objects"
        ],
        correctAnswer: "His assumption of implicit properties of betweenness and continuity",
        explanation: "Modern geometers identified that Euclid's system implicitly assumed properties of betweenness and continuity without explicitly stating them as axioms. These gaps were addressed in later axiom systems by Hilbert and others.",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch5_t2_qm20',
        type: "mcq",
        question: "Which aspect of Einstein's theory of general relativity directly contradicts Euclidean geometry?",
        options: [
            "The speed of light is constant",
            "Energy and matter are equivalent",
            "Space-time is curved by gravity",
            "Quantum uncertainty"
        ],
        correctAnswer: "Space-time is curved by gravity",
        explanation: "Einstein's general relativity shows that space-time is curved by gravitational fields, contradicting Euclidean geometry's assumption of flat space. This curvature requires non-Euclidean geometry to describe accurately.",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];
