// filepath: content/CBSE/Mathematics/Class 7/Chapter15/Topic2/quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: "cl7_ch15_t2_qm1",
        type: "mcq",
        question: "How many different possible nets does a cube have?",
        options: [
            "6",
            "8",
            "11",
            "12"
        ],
        correctAnswer: "11",
        explanation: "A cube has exactly 11 unique nets - different arrangements of 6 squares that fold into a cube. 🎲",
        wrongAnswerExplanations: {
            "6": "This is the number of faces, not possible nets.",
            "8": "There are more possible nets than this.",
            "12": "This exceeds the actual number of unique nets."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch15_t2_qm2",
        type: "mcq",
        question: "If a cylinder's height is equal to the diameter of its base, what is the ratio of length to width in its rectangular part of the net?",
        options: [
            "1:1",
            "π:1",
            "2π:1",
            "π:2"
        ],
        correctAnswer: "2π:1",
        explanation: "The rectangle's length is the circumference (πd = 2πr), and width is height (= d = 2r), so ratio is 2π:1. ⭕",
        wrongAnswerExplanations: {
            "1:1": "This would make the cylinder too short.",
            "π:1": "This is half the actual ratio.",
            "π:2": "This would make the cylinder too short."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch15_t2_qm3",
        type: "mcq",
        question: "In a regular hexagonal prism's net, what is the total number of regular hexagons?",
        options: [
            "1",
            "2",
            "3",
            "6"
        ],
        correctAnswer: "2",
        explanation: "A hexagonal prism has 2 regular hexagonal bases and 6 rectangular faces connecting them. 🔷",
        wrongAnswerExplanations: {
            "1": "Need two hexagons for top and bottom bases.",
            "3": "Only two bases are hexagonal.",
            "6": "This is the number of rectangular faces."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch15_t2_qm4",
        type: "mcq",
        question: "What angle should the sector in a cone's net have to form a cone with a base radius equal to its height?",
        options: [
            "90°",
            "180°",
            "270°",
            "360°"
        ],
        correctAnswer: "360°",
        explanation: "When radius equals height, the sector angle must be 360° to form a cone with 45° slant. 📐",
        wrongAnswerExplanations: {
            "90°": "This would make the cone too narrow.",
            "180°": "This would make the cone incomplete.",
            "270°": "This would leave a gap in the cone."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch15_t2_qm5",
        type: "mcq",
        question: "In a square pyramid's net, if the base edge is 6 cm and height is 8 cm, what is the height of each triangular face?",
        options: [
            "8 cm",
            "10 cm",
            "12 cm",
            "14 cm"
        ],
        correctAnswer: "10 cm",
        explanation: "Using Pythagorean theorem: √(8² + 3²) = 10 cm is the slant height of triangular faces. 📏",
        wrongAnswerExplanations: {
            "8 cm": "This is the pyramid's height, not face height.",
            "12 cm": "This is too long for the faces.",
            "14 cm": "This would make the pyramid too tall."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch15_t2_qm6",
        type: "mcq",
        question: "What is the relationship between the perimeter of a cylinder's base and the length of its rectangular net part?",
        options: [
            "They are equal",
            "Base perimeter is half the length",
            "Base perimeter is twice the length",
            "No fixed relationship"
        ],
        correctAnswer: "They are equal",
        explanation: "The rectangle's length equals the base circumference as it wraps around exactly once. ⭕",
        wrongAnswerExplanations: {
            "Base perimeter is half the length": "This would leave gaps.",
            "Base perimeter is twice the length": "This would cause overlapping.",
            "No fixed relationship": "There is a fixed 1:1 relationship."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch15_t2_qm7",
        type: "mcq",
        question: "If you increase a cube's edge length by 50%, how does the area of its net change?",
        options: [
            "Increases by 50%",
            "Increases by 100%",
            "Increases by 125%",
            "Increases by 150%"
        ],
        correctAnswer: "Increases by 125%",
        explanation: "Area increases by (1.5)² = 2.25, which is a 125% increase. Surface area grows quadratically. 📈",
        wrongAnswerExplanations: {
            "Increases by 50%": "This only accounts for linear increase.",
            "Increases by 100%": "This is less than actual increase.",
            "Increases by 150%": "This exceeds the actual increase."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch15_t2_qm8",
        type: "mcq",
        question: "What happens to the angles in a net when it's folded into a 3D shape?",
        options: [
            "They all become 90°",
            "They stay the same",
            "They become smaller",
            "They form dihedral angles"
        ],
        correctAnswer: "They form dihedral angles",
        explanation: "When folded, flat angles between faces become 3D dihedral angles between faces. 📐",
        wrongAnswerExplanations: {
            "They all become 90°": "Not all angles in 3D shapes are 90°.",
            "They stay the same": "Angles change when folded into 3D.",
            "They become smaller": "They form new types of angles."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch15_t2_qm9",
        type: "mcq",
        question: "In a regular octahedron's net, how many triangles share a vertex at the center?",
        options: [
            "3",
            "4",
            "5",
            "6"
        ],
        correctAnswer: "4",
        explanation: "Four equilateral triangles meet at the central vertex in one common net arrangement. 🎲",
        wrongAnswerExplanations: {
            "3": "This wouldn't form a complete octahedron.",
            "5": "This is too many triangles at center.",
            "6": "This exceeds possible arrangement."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch15_t2_qm10",
        type: "mcq",
        question: "What is the minimum number of faces that must be cut to flatten a cube into its net?",
        options: [
            "3",
            "5",
            "7",
            "9"
        ],
        correctAnswer: "7",
        explanation: "Need to cut 7 edges to open cube into a connected net without creating separate pieces. ✂️",
        wrongAnswerExplanations: {
            "3": "Too few cuts to open the cube.",
            "5": "Not enough cuts to flatten completely.",
            "9": "More cuts than necessary."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch15_t2_qm11",
        type: "mcq",
        question: "If a triangular prism's base is an equilateral triangle with side 4 cm and height 6 cm, what's the total area of its net?",
        options: [
            "48 cm²",
            "72 cm²",
            "84 cm²",
            "96 cm²"
        ],
        correctAnswer: "84 cm²",
        explanation: "Area = 2(½×4×3.46) + 3(4×6) = 13.84 + 72 = 84 cm² (two triangles + three rectangles). 📐",
        wrongAnswerExplanations: {
            "48 cm²": "This only counts rectangular faces.",
            "72 cm²": "This misses triangular bases.",
            "96 cm²": "This overestimates the area."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch15_t2_qm12",
        type: "mcq",
        question: "Which property must be preserved when drawing a net of any polyhedron?",
        options: [
            "Face angles only",
            "Edge lengths only",
            "Both face angles and edge lengths",
            "Neither face angles nor edge lengths"
        ],
        correctAnswer: "Both face angles and edge lengths",
        explanation: "Both face angles and edge lengths must stay unchanged for the net to fold correctly. 📏",
        wrongAnswerExplanations: {
            "Face angles only": "Edge lengths must also match.",
            "Edge lengths only": "Face angles must also match.",
            "Neither face angles nor edge lengths": "Both must be preserved."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch15_t2_qm13",
        type: "mcq",
        question: "What happens to parallel faces in a cuboid when it's opened into a net?",
        options: [
            "They must be adjacent",
            "They must be opposite",
            "They can be anywhere",
            "They must share an edge"
        ],
        correctAnswer: "They can be anywhere",
        explanation: "Parallel faces can be positioned anywhere in the net as long as the folding pattern works. 🎨",
        wrongAnswerExplanations: {
            "They must be adjacent": "Parallel faces can be separated.",
            "They must be opposite": "No such restriction exists.",
            "They must share an edge": "Parallel faces never share edges."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch15_t2_qm14",
        type: "mcq",
        question: "In a regular tetrahedron's net, what is the angle between any two adjacent triangles when flat?",
        options: [
            "60°",
            "90°",
            "120°",
            "180°"
        ],
        correctAnswer: "120°",
        explanation: "Three equilateral triangles meet at a vertex in the net, so angle between any two is 120°. 🔺",
        wrongAnswerExplanations: {
            "60°": "This is the angle in equilateral triangle.",
            "90°": "This angle would make wrong fold.",
            "180°": "This would make faces coplanar."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch15_t2_qm15",
        type: "mcq",
        question: "What determines the sector angle in a cone's net?",
        options: [
            "Height only",
            "Base radius only",
            "Ratio of radius to height",
            "Sum of radius and height"
        ],
        correctAnswer: "Ratio of radius to height",
        explanation: "The sector angle depends on the ratio of base circumference to slant height (r/h ratio). 📐",
        wrongAnswerExplanations: {
            "Height only": "Need radius information too.",
            "Base radius only": "Need height information too.",
            "Sum of radius and height": "Ratio matters, not sum."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch15_t2_qm16",
        type: "mcq",
        question: "What's the relationship between a cube's surface area and its net's area?",
        options: [
            "Net area is larger",
            "Surface area is larger",
            "They are equal",
            "Depends on the net pattern"
        ],
        correctAnswer: "They are equal",
        explanation: "The net simply unfolds the surface area - no stretching or changing of area occurs. 📦",
        wrongAnswerExplanations: {
            "Net area is larger": "Unfolding doesn't change area.",
            "Surface area is larger": "Area stays constant when unfolded.",
            "Depends on the net pattern": "Area is constant regardless of pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch15_t2_qm17",
        type: "mcq",
        question: "If a cube's net is cut into separate pieces, what's the minimum number of pieces needed to still form the cube?",
        options: [
            "2",
            "3",
            "4",
            "5"
        ],
        correctAnswer: "2",
        explanation: "A cube can be formed from 2 pieces: one with 5 faces in cross shape, one with single face. ✂️",
        wrongAnswerExplanations: {
            "3": "Can be done with fewer pieces.",
            "4": "Can be done with fewer pieces.",
            "5": "Can be done with fewer pieces."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch15_t2_qm18",
        type: "mcq",
        question: "What happens to the perimeter of a net when the 3D shape's size is doubled?",
        options: [
            "Doubles",
            "Triples",
            "Quadruples",
            "Depends on the shape"
        ],
        correctAnswer: "Doubles",
        explanation: "When a shape's dimensions double, its edges (perimeter) also double, following linear scaling. 📏",
        wrongAnswerExplanations: {
            "Triples": "Linear dimensions only double.",
            "Quadruples": "This is for area, not perimeter.",
            "Depends on the shape": "Linear scaling is consistent."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch15_t2_qm19",
        type: "mcq",
        question: "Which property of a 3D shape is NOT preserved in its net?",
        options: [
            "Face shapes",
            "Edge lengths",
            "Face angles",
            "Dihedral angles"
        ],
        correctAnswer: "Dihedral angles",
        explanation: "Dihedral angles (between faces) become flat in net form, while other properties stay same. 📐",
        wrongAnswerExplanations: {
            "Face shapes": "Faces keep their shape in nets.",
            "Edge lengths": "Edges maintain their length.",
            "Face angles": "Angles within faces stay same."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch15_t2_qm20",
        type: "mcq",
        question: "What's the relationship between a regular octahedron's edge length and its net's perimeter?",
        options: [
            "Perimeter = 6 × edge length",
            "Perimeter = 8 × edge length",
            "Perimeter = 12 × edge length",
            "Perimeter = 18 × edge length"
        ],
        correctAnswer: "Perimeter = 18 × edge length",
        explanation: "Each edge appears 3 times in the net's perimeter, and octahedron has 6 edges: 6 × 3 = 18. 🎲",
        wrongAnswerExplanations: {
            "Perimeter = 6 × edge length": "Counts each edge only once.",
            "Perimeter = 8 × edge length": "Incorrect multiplication.",
            "Perimeter = 12 × edge length": "Counts each edge twice only."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 