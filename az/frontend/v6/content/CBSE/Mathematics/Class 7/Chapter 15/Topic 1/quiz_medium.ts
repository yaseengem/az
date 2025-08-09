// filepath: content/CBSE/Mathematics/Class 7/Chapter15/Topic1/quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: "cl7_ch15_t1_qm1",
        type: "mcq",
        question: "If a 3D shape has 6 vertices and 12 edges, how many faces does it have?",
        options: [
            "6",
            "7",
            "8",
            "9"
        ],
        correctAnswer: "8",
        explanation: "Using Euler's formula (V + F = E + 2), where V=6 vertices, E=12 edges: 6 + F = 12 + 2, so F = 8 faces. 📐",
        wrongAnswerExplanations: {
            "6": "This doesn't satisfy Euler's formula V + F = E + 2.",
            "7": "This doesn't satisfy Euler's formula V + F = E + 2.",
            "9": "This doesn't satisfy Euler's formula V + F = E + 2."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch15_t1_qm2",
        type: "mcq",
        question: "In a regular hexagonal prism, how many edges are parallel to the axis of the prism?",
        options: [
            "4",
            "6",
            "8",
            "12"
        ],
        correctAnswer: "6",
        explanation: "A hexagonal prism has 6 edges parallel to its axis, one from each vertex of the hexagonal base to the corresponding vertex on the top. 📏",
        wrongAnswerExplanations: {
            "4": "This would be true for a square prism, not a hexagonal prism.",
            "8": "This is more than the number of vertices in a hexagon.",
            "12": "This is the total number of edges in a cube."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch15_t1_qm3",
        type: "mcq",
        question: "What is the relationship between the number of faces (F), vertices (V), and edges (E) in any convex polyhedron?",
        options: [
            "F + V = E",
            "V + E = F + 2",
            "V + F = E + 2",
            "E + F = V + 2"
        ],
        correctAnswer: "V + F = E + 2",
        explanation: "This is Euler's formula: V + F = E + 2. It works for all convex polyhedra. For example, in a cube: 8 + 6 = 12 + 2. 🧮",
        wrongAnswerExplanations: {
            "F + V = E": "This equation is incorrect. It doesn't include the +2.",
            "V + E = F + 2": "This rearrangement doesn't match Euler's formula.",
            "E + F = V + 2": "This rearrangement doesn't match Euler's formula."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch15_t1_qm4",
        type: "mcq",
        question: "A triangular pyramid has how many edges meeting at its apex?",
        options: [
            "2",
            "3",
            "4",
            "6"
        ],
        correctAnswer: "3",
        explanation: "At the apex of a triangular pyramid, 3 edges meet, connecting the top vertex to each of the 3 vertices of the triangular base. 🔺",
        wrongAnswerExplanations: {
            "2": "Two edges wouldn't form a pyramid structure.",
            "4": "This would be for a square pyramid, not triangular.",
            "6": "This is the total number of edges in a triangular pyramid."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch15_t1_qm5",
        type: "mcq",
        question: "If you increase the number of sides in a regular prism's base by 1, how many more edges does the prism have?",
        options: [
            "1",
            "2",
            "3",
            "4"
        ],
        correctAnswer: "3",
        explanation: "Adding one side to the base adds 1 edge to each base (2 total) plus 1 vertical edge, making 3 new edges total. For example, going from pentagonal to hexagonal prism. 📈",
        wrongAnswerExplanations: {
            "1": "This doesn't account for both bases and vertical edge.",
            "2": "This only counts the base edges, not the vertical edge.",
            "4": "This is more than the actual increase."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch15_t1_qm6",
        type: "mcq",
        question: "In a regular octahedron, how many faces meet at each vertex?",
        options: [
            "3",
            "4",
            "5",
            "8"
        ],
        correctAnswer: "4",
        explanation: "In a regular octahedron, exactly 4 triangular faces meet at each vertex. This is true for all 6 vertices of the octahedron. 🎲",
        wrongAnswerExplanations: {
            "3": "This is true for a tetrahedron, not an octahedron.",
            "5": "This is more than the number of faces that meet at a vertex.",
            "8": "This is the total number of faces in an octahedron."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch15_t1_qm7",
        type: "mcq",
        question: "What is the total number of right angles in a rectangular prism?",
        options: [
            "8",
            "12",
            "24",
            "36"
        ],
        correctAnswer: "24",
        explanation: "A rectangular prism has 24 right angles: 4 in each of its 6 faces (4 × 6 = 24). Each vertex contains 3 right angles. 📦",
        wrongAnswerExplanations: {
            "8": "This is the number of vertices, not right angles.",
            "12": "This is the number of edges, not right angles.",
            "36": "This exceeds the actual number of right angles."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch15_t1_qm8",
        type: "mcq",
        question: "If a pyramid has a pentagonal base, how many edges does it have in total?",
        options: [
            "8",
            "10",
            "12",
            "15"
        ],
        correctAnswer: "10",
        explanation: "A pentagonal pyramid has 5 edges in the base and 5 edges from the apex to each base vertex, totaling 10 edges. 🔺",
        wrongAnswerExplanations: {
            "8": "This would be for a square pyramid.",
            "12": "This is too many edges for a pentagonal pyramid.",
            "15": "This exceeds the possible number of edges."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch15_t1_qm9",
        type: "mcq",
        question: "Which of these combinations of faces, edges, and vertices is impossible for a convex polyhedron?",
        options: [
            "F=4, E=6, V=4",
            "F=6, E=12, V=8",
            "F=5, E=8, V=5",
            "F=8, E=12, V=6"
        ],
        correctAnswer: "F=5, E=8, V=5",
        explanation: "Using Euler's formula (V + F = E + 2): 5 + 5 = 8 + 2 is false. 10 ≠ 10, so this combination is impossible. 🚫",
        wrongAnswerExplanations: {
            "F=4, E=6, V=4": "This satisfies Euler's formula (tetrahedron).",
            "F=6, E=12, V=8": "This satisfies Euler's formula (cube).",
            "F=8, E=12, V=6": "This satisfies Euler's formula."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch15_t1_qm10",
        type: "mcq",
        question: "In a regular hexagonal prism, how many vertices are there in total?",
        options: [
            "8",
            "10",
            "12",
            "14"
        ],
        correctAnswer: "12",
        explanation: "A hexagonal prism has 6 vertices on each base (top and bottom), making 12 vertices total. Each vertex of the hexagon creates one vertex on each base. 📐",
        wrongAnswerExplanations: {
            "8": "This is the number of vertices in a cube.",
            "10": "This is too few vertices for a hexagonal prism.",
            "14": "This exceeds the number of vertices in a hexagonal prism."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch15_t1_qm11",
        type: "mcq",
        question: "What is the minimum number of faces that must be removed from a cube to see all its vertices?",
        options: [
            "1",
            "2",
            "3",
            "4"
        ],
        correctAnswer: "3",
        explanation: "You need to remove 3 faces meeting at a vertex to see all 8 vertices of a cube. Two faces aren't enough as some vertices would still be hidden. 📦",
        wrongAnswerExplanations: {
            "1": "One face only reveals 4 vertices.",
            "2": "Two faces reveal 6 vertices at most.",
            "4": "Three faces are sufficient; four is unnecessary."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch15_t1_qm12",
        type: "mcq",
        question: "If a prism has 15 edges, how many sides does its base have?",
        options: [
            "3",
            "4",
            "5",
            "6"
        ],
        correctAnswer: "5",
        explanation: "For a prism with n-sided base: edges = 3n (n in base, n on top, n vertical). If total is 15, then 3n = 15, so n = 5. 🧮",
        wrongAnswerExplanations: {
            "3": "A triangular prism has 9 edges.",
            "4": "A square prism has 12 edges.",
            "6": "A hexagonal prism has 18 edges."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch15_t1_qm13",
        type: "mcq",
        question: "How many diagonals can be drawn on all faces of a cube combined?",
        options: [
            "12",
            "24",
            "36",
            "48"
        ],
        correctAnswer: "24",
        explanation: "Each face of a cube is a square with 2 diagonals. With 6 faces, total face diagonals = 6 × 2 = 24. 📐",
        wrongAnswerExplanations: {
            "12": "This counts only half the face diagonals.",
            "36": "This exceeds the actual number of face diagonals.",
            "48": "This is twice the actual number of face diagonals."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch15_t1_qm14",
        type: "mcq",
        question: "In a regular octahedron, how many edges meet at each vertex?",
        options: [
            "3",
            "4",
            "6",
            "8"
        ],
        correctAnswer: "4",
        explanation: "In a regular octahedron, 4 edges meet at each vertex. This is consistent for all 6 vertices of the octahedron. 🎲",
        wrongAnswerExplanations: {
            "3": "This is true for a tetrahedron, not an octahedron.",
            "6": "This is the total number of vertices.",
            "8": "This is the total number of faces."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch15_t1_qm15",
        type: "mcq",
        question: "What is the relationship between the number of faces in a prism and its base shape?",
        options: [
            "Faces = Base sides",
            "Faces = Base sides + 1",
            "Faces = Base sides + 2",
            "Faces = 2 × Base sides"
        ],
        correctAnswer: "Faces = Base sides + 2",
        explanation: "A prism has two bases plus one rectangular face for each side of the base. For n sides: faces = n + 2. Example: triangular prism has 5 faces. 📊",
        wrongAnswerExplanations: {
            "Faces = Base sides": "This doesn't count the two bases.",
            "Faces = Base sides + 1": "This doesn't count both bases.",
            "Faces = 2 × Base sides": "This overcounts the number of faces."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch15_t1_qm16",
        type: "mcq",
        question: "If you connect the centers of all faces of a cube, what 3D shape do you get?",
        options: [
            "Tetrahedron",
            "Octahedron",
            "Dodecahedron",
            "Another cube"
        ],
        correctAnswer: "Octahedron",
        explanation: "Connecting the centers of a cube's faces creates an octahedron. This is a dual relationship between these Platonic solids. 🎲",
        wrongAnswerExplanations: {
            "Tetrahedron": "A tetrahedron has 4 faces, not 8.",
            "Dodecahedron": "A dodecahedron has 12 faces, not 8.",
            "Another cube": "The resulting shape has 8 triangular faces, not 6 square faces."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch15_t1_qm17",
        type: "mcq",
        question: "How many vertices does a pentagonal pyramid share with its base?",
        options: [
            "1",
            "4",
            "5",
            "6"
        ],
        correctAnswer: "5",
        explanation: "A pentagonal pyramid shares all 5 vertices of its pentagonal base, plus has one additional vertex at its apex. 🔺",
        wrongAnswerExplanations: {
            "1": "This is just the apex vertex, not base vertices.",
            "4": "This would be for a square pyramid.",
            "6": "This is the total number of vertices."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch15_t1_qm18",
        type: "mcq",
        question: "What happens to the number of faces in a prism as you increase the number of sides in its base by 2?",
        options: [
            "Increases by 1",
            "Increases by 2",
            "Increases by 3",
            "Increases by 4"
        ],
        correctAnswer: "Increases by 2",
        explanation: "Adding 2 sides to the base adds 2 rectangular faces to the prism. The number of bases stays the same. Example: pentagon to heptagon prism. 📈",
        wrongAnswerExplanations: {
            "Increases by 1": "This underestimates the increase.",
            "Increases by 3": "This overestimates the increase.",
            "Increases by 4": "This greatly overestimates the increase."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch15_t1_qm19",
        type: "mcq",
        question: "Which of these is true about the faces of a triangular prism?",
        options: [
            "All faces are triangles",
            "All faces are rectangles",
            "3 rectangular faces and 2 triangular faces",
            "2 rectangular faces and 3 triangular faces"
        ],
        correctAnswer: "3 rectangular faces and 2 triangular faces",
        explanation: "A triangular prism has 2 triangular bases and 3 rectangular faces connecting them. The rectangular faces are formed by parallel edges. 📐",
        wrongAnswerExplanations: {
            "All faces are triangles": "Only the bases are triangular.",
            "All faces are rectangles": "The bases are triangular, not rectangular.",
            "2 rectangular faces and 3 triangular faces": "This reverses the correct numbers."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch15_t1_qm20",
        type: "mcq",
        question: "What is the total number of parallel edge pairs in a cube?",
        options: [
            "4",
            "6",
            "8",
            "12"
        ],
        correctAnswer: "6",
        explanation: "In a cube, edges come in parallel pairs. With 12 edges total, there are 6 pairs of parallel edges (12 ÷ 2 = 6). 📦",
        wrongAnswerExplanations: {
            "4": "This underestimates the number of parallel pairs.",
            "8": "This overestimates the number of parallel pairs.",
            "12": "This is the total number of edges, not parallel pairs."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 