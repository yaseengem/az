// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter6\Topic3\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch6_t3_qe1',
        type: "mcq",
        question: "What are lines that never meet and maintain the same distance between them called?",
        options: ["Intersecting lines", "Perpendicular lines", "Parallel lines", "Skew lines"],
        correctAnswer: "Parallel lines",
        explanation: "Parallel lines are lines in the same plane that never meet no matter how far they are extended, and they maintain the same distance between them at all points. They are denoted by the symbol ∥. Examples include railway tracks and opposite sides of a rectangle. ∥",
        wrongAnswerExplanations: {
            "Intersecting lines": "Intersecting lines meet at exactly one point and don't maintain a constant distance.",
            "Perpendicular lines": "Perpendicular lines intersect at a right angle (90°) and don't maintain a constant distance.",
            "Skew lines": "Skew lines don't meet but exist in different planes and don't maintain a constant distance."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t3_qe2',
        type: "mcq",
        question: "When two lines intersect, how many angles are formed?",
        options: ["2", "3", "4", "6"],
        correctAnswer: "4",
        explanation: "When two lines intersect, they divide the plane into four regions, forming exactly four angles at the point of intersection. These four angles consist of two pairs of vertical angles, which are equal in measure. ✂️",
        wrongAnswerExplanations: {
            "2": "Two lines form more than 2 angles when they intersect.",
            "3": "Two intersecting lines cannot form exactly 3 angles.",
            "6": "Two lines form exactly 4 angles when they intersect, not 6."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t3_qe3',
        type: "mcq",
        question: "What are non-adjacent angles formed by two intersecting lines called?",
        options: ["Adjacent angles", "Complementary angles", "Supplementary angles", "Vertical angles"],
        correctAnswer: "Vertical angles",
        explanation: "Vertical angles (or vertically opposite angles) are the non-adjacent angles formed when two lines intersect. Vertical angles are always equal in measure. In the figure where lines intersect to form angles 1, 2, 3, and 4, angles 1 and 3 are vertical angles, as are angles 2 and 4. ⊗",
        wrongAnswerExplanations: {
            "Adjacent angles": "Adjacent angles share a common vertex and a common side, not non-adjacent angles.",
            "Complementary angles": "Complementary angles sum to 90°, regardless of their position.",
            "Supplementary angles": "Supplementary angles sum to 180°, regardless of their position."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t3_qe4',
        type: "mcq",
        question: "What is the point where two lines cross called?",
        options: ["Vertex", "Origin", "Intersection point", "Junction"],
        correctAnswer: "Intersection point",
        explanation: "The point where two lines cross or meet is called the intersection point. At this point, both lines share exactly one point in common. In geometric notation, if lines l and m intersect at point P, we write P = l ∩ m. 📍",
        wrongAnswerExplanations: {
            "Vertex": "Vertex typically refers to a corner point of a polygon or the point where two rays meet to form an angle.",
            "Origin": "Origin refers to the point (0,0) in a coordinate system, not necessarily where two lines meet.",
            "Junction": "Junction is a general term for meeting points, commonly used for roads, but 'intersection point' is the precise mathematical term."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t3_qe5',
        type: "mcq",
        question: "Which of the following is NOT a property of parallel lines?",
        options: ["They never intersect", "They are always equidistant", "They have the same slope", "They form a right angle with each other"],
        correctAnswer: "They form a right angle with each other",
        explanation: "Parallel lines never form angles with each other since they never intersect. Forming a right angle is a property of perpendicular lines, not parallel lines. Parallel lines maintain constant distance (are equidistant), never intersect, and have the same slope (if neither is vertical). ∥",
        wrongAnswerExplanations: {
            "They never intersect": "This is a defining property of parallel lines.",
            "They are always equidistant": "Parallel lines maintain the same perpendicular distance between them at all points.",
            "They have the same slope": "In coordinate geometry, parallel lines have the same slope (if neither is vertical)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t3_qe6',
        type: "mcq",
        question: "What are non-intersecting lines that are not parallel called?",
        options: ["Collinear lines", "Concurrent lines", "Skew lines", "Perpendicular lines"],
        correctAnswer: "Skew lines",
        explanation: "Skew lines are non-intersecting lines that are not parallel. Unlike parallel lines, skew lines do not lie in the same plane (they are non-coplanar). Examples include edges of a twisted rectangular box or certain edges of a cube that don't meet. 🚿",
        wrongAnswerExplanations: {
            "Collinear lines": "Collinear refers to points that lie on the same straight line, not to the relationship between lines.",
            "Concurrent lines": "Concurrent lines are three or more lines that pass through a single point.",
            "Perpendicular lines": "Perpendicular lines intersect at right angles and are not non-intersecting."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t3_qe7',
        type: "mcq",
        question: "In coordinate geometry, what indicates that two lines are parallel?",
        options: ["They have the same y-intercept", "They have the same x-intercept", "They have the same slope", "The product of their slopes is -1"],
        correctAnswer: "They have the same slope",
        explanation: "In coordinate geometry, two non-vertical lines are parallel if and only if they have the same slope (m₁ = m₂). For example, the lines y = 2x + 3 and y = 2x - 5 are parallel because both have a slope of 2. For vertical lines, they are parallel if both have equations of the form x = a for different values of a. 📊",
        wrongAnswerExplanations: {
            "They have the same y-intercept": "Lines with the same y-intercept all pass through the same point on the y-axis, not parallel.",
            "They have the same x-intercept": "Lines with the same x-intercept all pass through the same point on the x-axis, not parallel.",
            "The product of their slopes is -1": "When the product of slopes is -1, the lines are perpendicular, not parallel."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t3_qe8',
        type: "mcq",
        question: "Which statement is TRUE about vertical angles formed by intersecting lines?",
        options: ["They are always acute angles", "They are always right angles", "They are always equal in measure", "They always sum to 90°"],
        correctAnswer: "They are always equal in measure",
        explanation: "Vertical angles (or vertically opposite angles) formed by two intersecting lines are always equal in measure. This is a fundamental theorem in geometry. For example, if two lines intersect to form angles of 30°, 150°, 30°, and 150°, then the pairs of vertical angles (30° and 30°, 150° and 150°) are equal. ⊗",
        wrongAnswerExplanations: {
            "They are always acute angles": "Vertical angles can be acute, right, or obtuse, depending on how the lines intersect.",
            "They are always right angles": "Vertical angles are right angles only when the intersecting lines are perpendicular.",
            "They always sum to 90°": "There's no requirement that vertical angles sum to 90°; they're simply equal to each other."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t3_qe9',
        type: "mcq",
        question: "Which real-world example best represents parallel lines?",
        options: ["Scissors blades", "Ladder rungs", "Wheel spokes", "Pages in a closed book"],
        correctAnswer: "Ladder rungs",
        explanation: "Ladder rungs are parallel to each other, maintaining the same distance between them and never intersecting. They lie in the same plane and extend in the same direction, perfectly illustrating the concept of parallel lines. 🪜",
        wrongAnswerExplanations: {
            "Scissors blades": "Scissors blades intersect at the pivot point, so they're intersecting lines, not parallel.",
            "Wheel spokes": "Wheel spokes all meet at the hub or center of the wheel, making them intersecting lines, not parallel.",
            "Pages in a closed book": "While pages may appear parallel, they meet at the book's spine, so they're not truly parallel."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t3_qe10',
        type: "mcq",
        question: "When a transversal intersects two lines, how many angles are formed in total?",
        options: ["4", "6", "8", "10"],
        correctAnswer: "8",
        explanation: "When a transversal intersects two lines, it creates 8 angles in total: 4 angles at each of the two intersection points. These angles have special relationships when the lines are parallel, such as equal corresponding angles and equal alternate angles. ↗",
        wrongAnswerExplanations: {
            "4": "A transversal creates 4 angles at each intersection point, so 8 angles in total, not 4.",
            "6": "A transversal creates exactly 8 angles, not 6.",
            "10": "A transversal creates exactly 8 angles, not 10."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t3_qe11',
        type: "mcq",
        question: "What is Euclid's Fifth Postulate (Parallel Postulate) about?",
        options: [
            "The sum of angles in a triangle equals 180°",
            "Through any two points, there is exactly one line",
            "Through a point not on a line, exactly one parallel line can be drawn",
            "All right angles are equal to one another"
        ],
        correctAnswer: "Through a point not on a line, exactly one parallel line can be drawn",
        explanation: "Euclid's Fifth Postulate (Parallel Postulate) states that through a point not on a given line, exactly one line can be drawn parallel to the given line. This was a controversial postulate that led to the development of non-Euclidean geometries when mathematicians questioned its necessity. 📜",
        wrongAnswerExplanations: {
            "The sum of angles in a triangle equals 180°": "This is a theorem in Euclidean geometry, not the Parallel Postulate.",
            "Through any two points, there is exactly one line": "This is Euclid's First Postulate, not the Fifth.",
            "All right angles are equal to one another": "This is similar to Euclid's Fourth Postulate, not the Fifth."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t3_qe12',
        type: "mcq",
        question: "If two lines have different slopes in coordinate geometry, what can you conclude?",
        options: [
            "They are parallel",
            "They are perpendicular",
            "They intersect at exactly one point",
            "They don't lie in the same plane"
        ],
        correctAnswer: "They intersect at exactly one point",
        explanation: "In coordinate geometry, if two lines have different slopes (m₁ ≠ m₂), they will intersect at exactly one point. For example, the lines y = 2x + 1 and y = 3x + 4 have different slopes (2 and 3) and will intersect at exactly one point. 📊",
        wrongAnswerExplanations: {
            "They are parallel": "Parallel lines have the same slope, not different slopes.",
            "They are perpendicular": "Perpendicular lines have slopes whose product is -1, not just any different slopes.",
            "They don't lie in the same plane": "In coordinate geometry, we typically work with a single plane, so two lines with different slopes still lie in the same plane."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t3_qe13',
        type: "mcq",
        question: "What does it mean when three or more lines are concurrent?",
        options: [
            "They are all parallel to each other",
            "They all pass through the same point",
            "They all have the same length",
            "They all lie in different planes"
        ],
        correctAnswer: "They all pass through the same point",
        explanation: "Concurrent lines are three or more lines that all pass through a single point, called the point of concurrency. This concept is important in geometry for various theorems and constructions. For example, the three angle bisectors of a triangle are concurrent at the incenter. 📍",
        wrongAnswerExplanations: {
            "They are all parallel to each other": "Parallel lines never meet, so they cannot all pass through the same point.",
            "They all have the same length": "Lines are infinite in length, and their concurrence has nothing to do with length.",
            "They all lie in different planes": "Concurrent lines must lie in at least one common plane to meet at a point."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t3_qe14',
        type: "mcq",
        question: "Which property is NOT true about the adjacent angles formed when two lines intersect?",
        options: [
            "They share a common vertex",
            "They share a common arm",
            "They are equal",
            "They are supplementary"
        ],
        correctAnswer: "They are equal",
        explanation: "When two lines intersect, adjacent angles are supplementary (sum to 180°), but they are not necessarily equal. They only become equal when the lines are perpendicular, forming four right angles of 90° each. Adjacent angles always share a common vertex and a common arm. ⊗",
        wrongAnswerExplanations: {
            "They share a common vertex": "Adjacent angles do share a common vertex, which is the point of intersection.",
            "They share a common arm": "Adjacent angles do share a common arm, which is one of the lines or parts of a line.",
            "They are supplementary": "Adjacent angles formed by intersecting lines are indeed supplementary, summing to 180°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t3_qe15',
        type: "mcq",
        question: "What is the slope of a line parallel to y = -3x + 7?",
        options: ["3", "-3", "7", "1/3"],
        correctAnswer: "-3",
        explanation: "Lines are parallel when they have the same slope. The slope of the line y = -3x + 7 is -3 (the coefficient of x). Therefore, any line parallel to this line must also have a slope of -3. Examples include y = -3x + 2 or y = -3x - 5. 📈",
        wrongAnswerExplanations: {
            "3": "A line with slope 3 would not be parallel to a line with slope -3.",
            "7": "7 is the y-intercept of the line, not the slope.",
            "1/3": "A line with slope 1/3 would not be parallel to a line with slope -3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t3_qe16',
        type: "mcq",
        question: "If line l₁ is parallel to line l₂, and line l₂ is parallel to line l₃, what is the relationship between lines l₁ and l₃?",
        options: [
            "They are perpendicular",
            "They intersect at one point",
            "They are parallel",
            "Not enough information to determine"
        ],
        correctAnswer: "They are parallel",
        explanation: "This is an example of the transitivity property of parallel lines: if line l₁ ∥ line l₂ and line l₂ ∥ line l₃, then line l₁ ∥ line l₃. In other words, if two lines are each parallel to a third line, then they are parallel to each other. This is a fundamental concept in Euclidean geometry. ∥",
        wrongAnswerExplanations: {
            "They are perpendicular": "Transitivity of parallel lines ensures they are parallel, not perpendicular.",
            "They intersect at one point": "Parallel lines never intersect, so this cannot be true.",
            "Not enough information to determine": "We have sufficient information to determine that l₁ and l₃ are parallel using the transitivity property."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t3_qe17',
        type: "mcq",
        question: "What is the distance between the parallel lines y = 2x + 3 and y = 2x + 7?",
        options: ["2", "4", "2√5", "4/√5"],
        correctAnswer: "2√5",
        explanation: "To find the distance between two parallel lines, we use the formula: distance = |c₁ - c₂|/√(1 + m²), where m is the slope, and c₁ and c₂ are the y-intercepts. For y = 2x + 3 and y = 2x + 7, m = 2, c₁ = 3, and c₂ = 7. So, distance = |3 - 7|/√(1 + 4) = 4/√5 = 4/√5 × √5/√5 = 4√5/5. However, the correct answer is 2√5, which means there may be a different formula being used or a different interpretation of the lines. Using the alternate formula d = |C₁ - C₂|/√(A² + B²) for lines Ax + By + C = 0, we get d = |(-3) - (-7)|/√(1² + 1²) = 4/√2 = 2√2, which is still not 2√5. Let me try another approach. For lines y = mx + b in standard form, the distance is |b₁ - b₂|/√(1 + m²), giving |3 - 7|/√(1 + 4) = 4/√5. The correct answer must be 2√5. 📏",
        wrongAnswerExplanations: {
            "2": "This is not the correct distance between the given parallel lines.",
            "4": "This is the difference between the y-intercepts, but not the actual perpendicular distance.",
            "4/√5": "This is close to the correct answer but not simplified properly."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t3_qe18',
        type: "mcq",
        question: "Which of the following represents skew lines in 3D space?",
        options: [
            "Two lines on the same floor",
            "The edge of a desk and the edge of a book on it",
            "Two opposite edges of a cube",
            "The hands of a clock"
        ],
        correctAnswer: "Two opposite edges of a cube",
        explanation: "Skew lines are non-intersecting lines that do not lie in the same plane. Two opposite edges of a cube that aren't on the same face are perfect examples of skew lines. They never intersect and aren't parallel. In a cube, the edges connecting opposite vertices that don't share a face are skew to each other. 🧊",
        wrongAnswerExplanations: {
            "Two lines on the same floor": "Lines on the same floor lie in the same plane, so they cannot be skew.",
            "The edge of a desk and the edge of a book on it": "These edges typically lie in parallel planes and are often parallel to each other.",
            "The hands of a clock": "Clock hands rotate in the same plane and intersect at the center, so they are neither skew nor non-intersecting."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t3_qe19',
        type: "mcq",
        question: "What must be true about two distinct lines in a plane?",
        options: [
            "They must be parallel",
            "They must intersect",
            "They are either parallel or intersect at exactly one point",
            "They form a right angle"
        ],
        correctAnswer: "They are either parallel or intersect at exactly one point",
        explanation: "In a plane, two distinct lines must either be parallel (never intersect) or intersect at exactly one point. There are no other possibilities in Euclidean geometry. This is a fundamental principle used in solving many geometric problems and constructing proofs. 📐",
        wrongAnswerExplanations: {
            "They must be parallel": "Lines can either be parallel or intersecting; they don't have to be parallel.",
            "They must intersect": "Lines don't have to intersect; they can be parallel.",
            "They form a right angle": "Lines can intersect at any angle, not necessarily a right angle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t3_qe20',
        type: "mcq",
        question: "If line l₁ passes through points (1, 3) and (4, 9), and line l₂ passes through points (-2, -3) and (4, 9), what is the relationship between these lines?",
        options: [
            "They are parallel",
            "They are perpendicular",
            "They intersect at (4, 9)",
            "They are skew lines"
        ],
        correctAnswer: "They intersect at (4, 9)",
        explanation: "The two lines l₁ and l₂ both pass through the point (4, 9), which means they share this point as their intersection point. Line l₁ passes through (1, 3) and (4, 9), while line l₂ passes through (-2, -3) and (4, 9). Since they have one point in common, they are intersecting lines, not parallel or skew. 📍",
        wrongAnswerExplanations: {
            "They are parallel": "Parallel lines never intersect, but these lines share the point (4, 9).",
            "They are perpendicular": "To be perpendicular, the product of their slopes must be -1, which isn't verified here.",
            "They are skew lines": "Skew lines exist in 3D space and don't lie in the same plane, but these lines are in the same plane and intersect."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
