// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter6\Topic2\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch6_t2_qe1',
        type: "mcq",
        question: "Which of the following has no dimension?",
        options: ["Line", "Line segment", "Angle", "Point"],
        correctAnswer: "Point",
        explanation: "A point is a zero-dimensional object in geometry. It represents a specific location in space but has no size—no length, width, or thickness. ⚫",
        wrongAnswerExplanations: {
            "Line": "A line is one-dimensional, having length but no width or thickness.",
            "Line segment": "A line segment is one-dimensional, having finite length but no width or thickness.",
            "Angle": "An angle is two-dimensional, formed by two rays with a common endpoint."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t2_qe2',
        type: "mcq",
        question: "What symbol is used to denote perpendicular lines?",
        options: ["∥", "≅", "⊥", "≈"],
        correctAnswer: "⊥",
        explanation: "The symbol ⊥ is used to denote perpendicular lines. For example, if lines l and m are perpendicular to each other, we write l ⊥ m. This symbol represents the 90° angle formed at their intersection. 📐",
        wrongAnswerExplanations: {
            "∥": "The symbol ∥ is used to denote parallel lines, not perpendicular lines.",
            "≅": "The symbol ≅ is used to denote congruence, not perpendicularity.",
            "≈": "The symbol ≈ is used to denote approximately equal to, not perpendicularity."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t2_qe3',
        type: "mcq",
        question: "Which of the following is NOT a characteristic of a ray?",
        options: ["Has exactly one endpoint", "Extends infinitely in one direction", "Can be named using two points", "Has a definite length"],
        correctAnswer: "Has a definite length",
        explanation: "A ray has exactly one endpoint and extends infinitely in one direction, so it does not have a definite length. A ray can be named using two points, with the first point being the endpoint. 📡",
        wrongAnswerExplanations: {
            "Has exactly one endpoint": "A ray does have exactly one endpoint.",
            "Extends infinitely in one direction": "A ray does extend infinitely in one direction.",
            "Can be named using two points": "A ray can be named using two points, like ray AB or $\\overrightarrow{AB}$."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t2_qe4',
        type: "mcq",
        question: "What is an angle that measures exactly 90°?",
        options: ["Acute angle", "Right angle", "Obtuse angle", "Straight angle"],
        correctAnswer: "Right angle",
        explanation: "A right angle measures exactly 90°. It is depicted with a small square at the vertex in geometric diagrams. Right angles are everywhere in daily life—the corners of books, tables, and many buildings. 📐",
        wrongAnswerExplanations: {
            "Acute angle": "An acute angle measures less than 90°.",
            "Obtuse angle": "An obtuse angle measures more than 90° but less than 180°.",
            "Straight angle": "A straight angle measures exactly 180°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t2_qe5',
        type: "mcq",
        question: "What are two angles that sum to 90° called?",
        options: ["Supplementary angles", "Complementary angles", "Vertical angles", "Adjacent angles"],
        correctAnswer: "Complementary angles",
        explanation: "Complementary angles are two angles whose sum equals 90° (a right angle). For example, 30° and 60° are complementary angles because 30° + 60° = 90°. Each angle is the complement of the other. 🔄",
        wrongAnswerExplanations: {
            "Supplementary angles": "Supplementary angles are two angles whose sum equals 180° (a straight angle).",
            "Vertical angles": "Vertical angles are non-adjacent angles formed when two lines intersect; they are equal in measure.",
            "Adjacent angles": "Adjacent angles share a common vertex and a common side but don't necessarily sum to 90°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t2_qe6',
        type: "mcq",
        question: "Which of the following statements about parallel lines is TRUE?",
        options: ["Parallel lines meet at one point", "Parallel lines have different slopes", "Parallel lines maintain the same distance between them", "Parallel lines form an angle of 90°"],
        correctAnswer: "Parallel lines maintain the same distance between them",
        explanation: "Parallel lines never intersect and maintain the same perpendicular distance between them at all points. They're denoted by the symbol ∥, as in l₁ ∥ l₂. Examples include railway tracks and opposite sides of a rectangle. ∥",
        wrongAnswerExplanations: {
            "Parallel lines meet at one point": "Parallel lines never meet or intersect.",
            "Parallel lines have different slopes": "Parallel lines have the same slope (if neither is vertical).",
            "Parallel lines form an angle of 90°": "Parallel lines don't intersect, so they don't form any angle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t2_qe7',
        type: "mcq",
        question: "What is the measure of a straight angle?",
        options: ["90°", "180°", "270°", "360°"],
        correctAnswer: "180°",
        explanation: "A straight angle measures exactly 180° and forms a straight line. It's equivalent to half a complete rotation. Examples include the angle formed by a stretched-out arm pointing directly to the side. 📏",
        wrongAnswerExplanations: {
            "90°": "90° is a right angle, not a straight angle.",
            "270°": "270° is a reflex angle, not a straight angle.",
            "360°": "360° is a complete angle or full rotation, not a straight angle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t2_qe8',
        type: "mcq",
        question: "What are angles that share a common vertex and a common side called?",
        options: ["Complementary angles", "Supplementary angles", "Adjacent angles", "Vertical angles"],
        correctAnswer: "Adjacent angles",
        explanation: "Adjacent angles share a common vertex and a common side, with no overlap between their interiors. Examples include two neighboring angles in a polygon or two neighboring slices of a pie. 📐",
        wrongAnswerExplanations: {
            "Complementary angles": "Complementary angles sum to 90° but don't necessarily share a vertex or side.",
            "Supplementary angles": "Supplementary angles sum to 180° but don't necessarily share a vertex or side.",
            "Vertical angles": "Vertical angles are formed by two intersecting lines but are not adjacent."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t2_qe9',
        type: "mcq",
        question: "Which of the following is TRUE about collinear points?",
        options: ["They form a right angle", "They all lie on the same line", "They form a triangle", "They are equidistant from each other"],
        correctAnswer: "They all lie on the same line",
        explanation: "Collinear points are points that lie on the same straight line. For three points A, B, and C to be collinear, the distance |AB| + |BC| must equal |AC|. Examples include evenly spaced telephone poles along a straight road. 📍📍📍",
        wrongAnswerExplanations: {
            "They form a right angle": "Points themselves don't form angles; rays or lines do.",
            "They form a triangle": "Collinear points cannot form a triangle since they all lie on one line.",
            "They are equidistant from each other": "Collinear points don't need to be equally spaced."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t2_qe10',
        type: "mcq",
        question: "What is a line that intersects two or more lines at distinct points called?",
        options: ["Perpendicular line", "Transversal", "Parallel line", "Ray"],
        correctAnswer: "Transversal",
        explanation: "A transversal is a line that crosses (intersects) two or more lines at distinct points. When a transversal crosses two lines, it forms eight angles. Example: A road crossing multiple railway tracks. ↗",
        wrongAnswerExplanations: {
            "Perpendicular line": "A perpendicular line forms right angles with another line but doesn't necessarily intersect multiple lines.",
            "Parallel line": "Parallel lines never intersect.",
            "Ray": "A ray is a part of a line with one endpoint, not necessarily intersecting other lines."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t2_qe11',
        type: "mcq",
        question: "What are two angles that sum to 180° called?",
        options: ["Complementary angles", "Supplementary angles", "Vertical angles", "Corresponding angles"],
        correctAnswer: "Supplementary angles",
        explanation: "Supplementary angles are two angles whose sum equals 180° (a straight angle). For example, 30° and 150° are supplementary angles because 30° + 150° = 180°. Each angle is the supplement of the other. 🔄",
        wrongAnswerExplanations: {
            "Complementary angles": "Complementary angles sum to 90°, not 180°.",
            "Vertical angles": "Vertical angles are equal in measure but don't necessarily sum to 180°.",
            "Corresponding angles": "Corresponding angles are formed when a transversal crosses two lines but don't necessarily sum to 180°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t2_qe12',
        type: "mcq",
        question: "What is an angle that measures less than 90° called?",
        options: ["Right angle", "Acute angle", "Obtuse angle", "Reflex angle"],
        correctAnswer: "Acute angle",
        explanation: "An acute angle measures less than 90° (a right angle). Examples include 30°, 45°, and 60°. The word 'acute' means 'sharp,' which helps remember that these angles appear sharp or small. 🔹",
        wrongAnswerExplanations: {
            "Right angle": "A right angle measures exactly 90°.",
            "Obtuse angle": "An obtuse angle measures more than 90° but less than 180°.",
            "Reflex angle": "A reflex angle measures more than 180° but less than 360°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t2_qe13',
        type: "mcq",
        question: "What are the non-adjacent angles formed when two lines intersect called?",
        options: ["Adjacent angles", "Complementary angles", "Vertical angles", "Supplementary angles"],
        correctAnswer: "Vertical angles",
        explanation: "Vertical angles (or vertically opposite angles) are pairs of non-adjacent angles formed when two lines intersect. Vertical angles are always equal in measure. They appear opposite each other at the intersection. ⊗",
        wrongAnswerExplanations: {
            "Adjacent angles": "Adjacent angles share a common vertex and a common side.",
            "Complementary angles": "Complementary angles sum to 90° but aren't necessarily formed by intersecting lines.",
            "Supplementary angles": "Supplementary angles sum to 180° but aren't necessarily formed by intersecting lines."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t2_qe14',
        type: "mcq",
        question: "What is an angle that measures more than 90° but less than 180° called?",
        options: ["Acute angle", "Right angle", "Obtuse angle", "Reflex angle"],
        correctAnswer: "Obtuse angle",
        explanation: "An obtuse angle measures more than 90° (a right angle) but less than 180° (a straight angle). Examples include 120°, 150°, and 170°. The word 'obtuse' means 'blunt' or 'rounded,' which helps remember that these angles appear wide. 🔻",
        wrongAnswerExplanations: {
            "Acute angle": "An acute angle measures less than 90°.",
            "Right angle": "A right angle measures exactly 90°.",
            "Reflex angle": "A reflex angle measures more than 180° but less than 360°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t2_qe15',
        type: "mcq",
        question: "What is a linear pair of angles?",
        options: [
            "Two angles that sum to 90°",
            "Two adjacent angles whose non-common arms form a straight line",
            "Two angles formed by parallel lines",
            "Two angles that are exactly the same"
        ],
        correctAnswer: "Two adjacent angles whose non-common arms form a straight line",
        explanation: "A linear pair consists of two adjacent angles whose non-common arms form a straight line. The sum of angles in a linear pair is always 180°. They are always supplementary and adjacent. 📏",
        wrongAnswerExplanations: {
            "Two angles that sum to 90°": "These are complementary angles, not a linear pair.",
            "Two angles formed by parallel lines": "Parallel lines don't intersect, so they don't form angles with each other.",
            "Two angles that are exactly the same": "These are congruent angles, not necessarily a linear pair."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t2_qe16',
        type: "mcq",
        question: "What is the measure of an angle that makes a complete rotation?",
        options: ["90°", "180°", "270°", "360°"],
        correctAnswer: "360°",
        explanation: "A complete angle or full rotation measures 360°. This is the angle formed by starting at a point and making a complete turn back to the same position. Examples include the face of a clock over a 12-hour period. 🔄",
        wrongAnswerExplanations: {
            "90°": "90° is a quarter rotation (right angle), not a complete rotation.",
            "180°": "180° is a half rotation (straight angle), not a complete rotation.",
            "270°": "270° is a three-quarter rotation, not a complete rotation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t2_qe17',
        type: "mcq",
        question: "What symbol is used to denote parallel lines?",
        options: ["⊥", "≅", "∥", "≈"],
        correctAnswer: "∥",
        explanation: "The symbol ∥ is used to denote parallel lines. For example, if lines l and m are parallel to each other, we write l ∥ m. This symbol visually represents two lines that never intersect and maintain the same distance between them. ∥",
        wrongAnswerExplanations: {
            "⊥": "The symbol ⊥ is used to denote perpendicular lines, not parallel lines.",
            "≅": "The symbol ≅ is used to denote congruence, not parallel lines.",
            "≈": "The symbol ≈ is used to denote approximately equal to, not parallel lines."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t2_qe18',
        type: "mcq",
        question: "What is an angle that measures more than 180° but less than 360° called?",
        options: ["Obtuse angle", "Straight angle", "Reflex angle", "Complete angle"],
        correctAnswer: "Reflex angle",
        explanation: "A reflex angle measures more than 180° (a straight angle) but less than 360° (a complete angle). Examples include 270° and 315°. If you make more than a half-turn but less than a full turn, you're describing a reflex angle. 🔄",
        wrongAnswerExplanations: {
            "Obtuse angle": "An obtuse angle measures more than 90° but less than 180°.",
            "Straight angle": "A straight angle measures exactly 180°.",
            "Complete angle": "A complete angle measures exactly 360°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t2_qe19',
        type: "mcq",
        question: "Which of the following is a one-dimensional figure in geometry?",
        options: ["Point", "Line", "Angle", "Triangle"],
        correctAnswer: "Line",
        explanation: "A line is a one-dimensional figure that extends infinitely in both directions. It has length but no width or thickness. In comparison, a point is zero-dimensional, while angles and triangles are two-dimensional. ↔️",
        wrongAnswerExplanations: {
            "Point": "A point is a zero-dimensional figure with no length, width, or height.",
            "Angle": "An angle is formed by two rays and has two dimensions.",
            "Triangle": "A triangle is a two-dimensional figure with area and perimeter."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t2_qe20',
        type: "mcq",
        question: "What is the difference between a line and a line segment?",
        options: [
            "A line has one endpoint while a line segment has two endpoints",
            "A line extends infinitely in both directions while a line segment has finite length with two endpoints",
            "A line segment extends infinitely in one direction while a line has two endpoints",
            "There is no difference between a line and a line segment"
        ],
        correctAnswer: "A line extends infinitely in both directions while a line segment has finite length with two endpoints",
        explanation: "A line extends infinitely in both directions and has no endpoints. A line segment has a definite length with exactly two endpoints. For example, AB represents a line segment from point A to point B, while $\\overleftrightarrow{AB}$ represents a line through points A and B extending infinitely. 📏",
        wrongAnswerExplanations: {
            "A line has one endpoint while a line segment has two endpoints": "A line has no endpoints, not one endpoint.",
            "A line segment extends infinitely in one direction while a line has two endpoints": "A line segment doesn't extend infinitely, and a line has no endpoints.",
            "There is no difference between a line and a line segment": "There are significant differences between a line and a line segment."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
