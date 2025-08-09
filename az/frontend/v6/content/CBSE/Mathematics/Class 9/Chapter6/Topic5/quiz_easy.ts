// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter6\Topic5\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch6_t5_qe1',
        type: "mcq",
        question: "If two lines are parallel to the same line, what is their relationship to each other?",
        options: ["They are perpendicular to each other", "They intersect at a 45° angle", "They are parallel to each other", "They must be the same line"],
        correctAnswer: "They are parallel to each other",
        explanation: "If two lines are both parallel to a third line, they must be parallel to each other. This is a fundamental theorem in geometry known as the 'transitivity of parallelism'. ∥",
        wrongAnswerExplanations: {
            "They are perpendicular to each other": "This is incorrect. Lines parallel to the same line are parallel to each other, not perpendicular.",
            "They intersect at a 45° angle": "This is incorrect. Lines parallel to the same line don't intersect at all.",
            "They must be the same line": "This is incorrect. Two different lines can both be parallel to a third line."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch6_t5_qe2',
        type: "mcq",
        question: "If line p is parallel to line q, and line q is parallel to line r, what is the relationship between lines p and r?",
        options: ["p is parallel to r", "p is perpendicular to r", "p intersects r at an angle", "Cannot be determined"],
        correctAnswer: "p is parallel to r",
        explanation: "This illustrates the transitive property of parallel lines: if p ∥ q and q ∥ r, then p ∥ r. Parallelism is a transitive relation in Euclidean geometry. 📏",
        wrongAnswerExplanations: {
            "p is perpendicular to r": "This contradicts the transitive property of parallel lines.",
            "p intersects r at an angle": "Parallel lines, by definition, never intersect.",
            "Cannot be determined": "The relationship is definitely determinable through the transitive property."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch6_t5_qe3',
        type: "mcq",
        question: "In coordinate geometry, lines with the same slope are:",
        options: ["Perpendicular", "Parallel", "Intersecting at 45°", "Always the same line"],
        correctAnswer: "Parallel",
        explanation: "In coordinate geometry, parallel lines have the same slope. This is a direct application of the concept that lines parallel to the same line have the same slope. 📈",
        wrongAnswerExplanations: {
            "Perpendicular": "Perpendicular lines have slopes that are negative reciprocals of each other.",
            "Intersecting at 45°": "Lines with the same slope don't intersect at all.",
            "Always the same line": "Different lines can have the same slope and be parallel to each other."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch6_t5_qe4',
        type: "mcq",
        question: "If line a is parallel to line b, and line b is parallel to line c, which statement is necessarily true?",
        options: ["Line a is perpendicular to line c", "Line a intersects line c at some point", "Line a is parallel to line c", "Line a is identical to line c"],
        correctAnswer: "Line a is parallel to line c",
        explanation: "Due to the transitive property of parallelism, if a ∥ b and b ∥ c, then a ∥ c. This property is fundamental to understanding relationships between multiple parallel lines. 🔄",
        wrongAnswerExplanations: {
            "Line a is perpendicular to line c": "This contradicts the transitive property of parallel lines.",
            "Line a intersects line c at some point": "Parallel lines never intersect.",
            "Line a is identical to line c": "They're parallel but not necessarily the same line."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch6_t5_qe5',
        type: "mcq",
        question: "If two lines have equations y = 3x + 2 and y = 3x - 5, what is their relationship?",
        options: ["Intersecting", "Perpendicular", "Parallel", "Coincident"],
        correctAnswer: "Parallel",
        explanation: "Both lines have the same slope (m = 3) but different y-intercepts. Lines with the same slope are parallel to each other, a key concept in coordinate geometry. 📊",
        wrongAnswerExplanations: {
            "Intersecting": "Lines with the same slope don't intersect.",
            "Perpendicular": "Perpendicular lines have slopes that are negative reciprocals of each other.",
            "Coincident": "Coincident lines would have the same equation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch6_t5_qe6',
        type: "mcq",
        question: "A transversal intersects two parallel lines. If one pair of corresponding angles measures 65°, what is the measure of all other corresponding angles?",
        options: ["25°", "65°", "115°", "125°"],
        correctAnswer: "65°",
        explanation: "When a transversal intersects parallel lines, all corresponding angles are equal. If one pair is 65°, all other corresponding angles must also be 65°. This is a key property of parallel lines cut by a transversal. 📐",
        wrongAnswerExplanations: {
            "25°": "This doesn't follow the property of corresponding angles.",
            "115°": "This would be the measure of supplementary angles, not corresponding ones.",
            "125°": "This angle doesn't relate to the given information."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch6_t5_qe7',
        type: "mcq",
        question: "If three lines are all parallel to each other and a transversal intersects them, what can be said about the corresponding angles?",
        options: ["They form a linear pair", "They are complementary", "They are all equal", "They are all supplementary"],
        correctAnswer: "They are all equal",
        explanation: "When a transversal intersects multiple parallel lines, all corresponding angles are equal. This property extends to any number of parallel lines intersected by the same transversal. ∠",
        wrongAnswerExplanations: {
            "They form a linear pair": "Corresponding angles don't form linear pairs.",
            "They are complementary": "Corresponding angles aren't necessarily complementary.",
            "They are all supplementary": "Corresponding angles aren't supplementary."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch6_t5_qe8',
        type: "mcq",
        question: "Which of the following is NOT a valid conclusion about two lines that are each parallel to a third line?",
        options: ["They have the same slope", "They are parallel to each other", "They are equidistant from each other", "They never intersect"],
        correctAnswer: "They are equidistant from each other",
        explanation: "While lines parallel to the same line are parallel to each other and never intersect, they aren't necessarily equidistant from each other. They can be at different distances from the original line. ⚠️",
        wrongAnswerExplanations: {
            "They have the same slope": "Lines parallel to the same line do have the same slope.",
            "They are parallel to each other": "This is a valid conclusion based on the transitive property of parallelism.",
            "They never intersect": "Parallel lines never intersect by definition."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch6_t5_qe9',
        type: "mcq",
        question: "In the figure, if lines a and b are both parallel to line c, what is the value of angle x?",
        options: ["40°", "50°", "130°", "140°"],
        correctAnswer: "40°",
        explanation: "Since lines a and b are both parallel to line c, they are parallel to each other. When parallel lines are cut by a transversal, corresponding angles are equal. Hence, angle x equals 40°. 🔍",
        wrongAnswerExplanations: {
            "50°": "This doesn't follow from the properties of parallel lines.",
            "130°": "This would be the supplementary angle, not the corresponding one.",
            "140°": "This angle doesn't relate to the given information."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch6_t5_qe10',
        type: "mcq",
        question: "Which property is used to prove that lines parallel to the same line are parallel to each other?",
        options: ["Reflexive property", "Symmetric property", "Transitive property", "Associative property"],
        correctAnswer: "Transitive property",
        explanation: "The transitive property states that if a relation applies between elements a and b, and also between b and c, then it applies between a and c. For parallel lines, if a ∥ c and b ∥ c, then a ∥ b. 🧮",
        wrongAnswerExplanations: {
            "Reflexive property": "The reflexive property (a = a) isn't relevant to proving this theorem.",
            "Symmetric property": "The symmetric property (if a = b, then b = a) isn't the key property for this proof.",
            "Associative property": "The associative property applies to operations, not to parallelism relations."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch6_t5_qe11',
        type: "mcq",
        question: "If lines with equations y = 2x + 1, y = 2x - 3, and y = 2x + 7 are all parallel to the same line, what is the slope of that line?",
        options: ["1", "2", "3", "7"],
        correctAnswer: "2",
        explanation: "All three given lines have the slope m = 2. Any line parallel to these lines must also have a slope of 2, as parallel lines have equal slopes in coordinate geometry. 📈",
        wrongAnswerExplanations: {
            "1": "This isn't the slope of the given lines.",
            "3": "This isn't the slope of the given lines.",
            "7": "This is a y-intercept value, not the slope."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch6_t5_qe12',
        type: "mcq",
        question: "If line l is parallel to line m, and line n is parallel to line m, what is true about the slopes of lines l and n?",
        options: ["They are equal", "They are reciprocals", "They multiply to give -1", "They cannot be determined"],
        correctAnswer: "They are equal",
        explanation: "If l ∥ m and n ∥ m, then l ∥ n by the transitive property. Parallel lines have equal slopes, so the slopes of lines l and n must be equal. 📊",
        wrongAnswerExplanations: {
            "They are reciprocals": "Reciprocal slopes would indicate perpendicular lines, not parallel ones.",
            "They multiply to give -1": "This relationship applies to perpendicular lines, not parallel ones.",
            "They cannot be determined": "The relationship is determinable through the properties of parallel lines."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch6_t5_qe13',
        type: "mcq",
        question: "A carpenter wants to install floor joists parallel to an existing wall. After installing the first joist parallel to the wall, what's the easiest way to ensure all subsequent joists are also parallel to the wall?",
        options: ["Measure from the ceiling to each joist", "Make each joist parallel to the previous one", "Measure the diagonal from the wall to each joist", "Make all joists perpendicular to the opposite wall"],
        correctAnswer: "Make each joist parallel to the previous one",
        explanation: "By making each joist parallel to the previous one (which is parallel to the wall), all joists will be parallel to the wall through the transitive property of parallelism. This is a practical application of the concept. 🏗️",
        wrongAnswerExplanations: {
            "Measure from the ceiling to each joist": "This doesn't ensure parallelism to the wall.",
            "Measure the diagonal from the wall to each joist": "Diagonal measurements don't ensure parallelism.",
            "Make all joists perpendicular to the opposite wall": "This would only work if the opposite wall is perpendicular to the first wall."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch6_t5_qe14',
        type: "mcq",
        question: "If two lines have equations y = -4x + 2 and y = -4x - 5, what is their relationship?",
        options: ["They intersect at right angles", "They are the same line", "They are parallel", "They intersect at an acute angle"],
        correctAnswer: "They are parallel",
        explanation: "Both lines have the same slope (m = -4) but different y-intercepts. Lines with the same slope are parallel to each other, regardless of their y-intercepts. 📏",
        wrongAnswerExplanations: {
            "They intersect at right angles": "Lines with the same slope aren't perpendicular to each other.",
            "They are the same line": "Different y-intercepts mean they are distinct lines.",
            "They intersect at an acute angle": "Parallel lines don't intersect at all."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch6_t5_qe15',
        type: "mcq",
        question: "If three parallel lines are cut by a transversal and one of the alternate interior angles is 115°, what are the other alternate interior angles?",
        options: ["65°", "75°", "115°", "125°"],
        correctAnswer: "115°",
        explanation: "When parallel lines are cut by a transversal, all alternate interior angles are equal. If one is 115°, all other alternate interior angles are also 115°. This property holds for any number of parallel lines. 🔄",
        wrongAnswerExplanations: {
            "65°": "This would be the measure of corresponding angles, not alternate interior ones.",
            "75°": "This doesn't follow from the properties of parallel lines cut by a transversal.",
            "125°": "This doesn't follow from the properties of parallel lines cut by a transversal."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch6_t5_qe16',
        type: "mcq",
        question: "If line a is parallel to line b, line c is parallel to line d, and lines a and c intersect, what can we conclude about lines b and d?",
        options: ["They are parallel", "They must intersect", "They are perpendicular", "Nothing can be concluded"],
        correctAnswer: "They must intersect",
        explanation: "If a ∥ b and c ∥ d, and lines a and c intersect, then by the properties of parallel lines, lines b and d must also intersect. This follows from the fact that parallel lines maintain the same directional relationships. ✖️",
        wrongAnswerExplanations: {
            "They are parallel": "If the lines they're parallel to intersect, they cannot be parallel to each other.",
            "They are perpendicular": "No information suggests they intersect at right angles.",
            "Nothing can be concluded": "We can definitely conclude they must intersect based on the given conditions."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch6_t5_qe17',
        type: "mcq",
        question: "In a coordinate plane, which of the following pairs of lines are parallel to each other?",
        options: ["y = 3x + 2 and y = -1/3x + 4", "y = 5x - 1 and y = 5x + 6", "x + y = 4 and x - y = 2", "2x + 3y = 6 and 6x + 9y = 12"],
        correctAnswer: "y = 5x - 1 and y = 5x + 6",
        explanation: "Lines with equations y = 5x - 1 and y = 5x + 6 both have the same slope (m = 5), making them parallel. The slope is the coefficient of x when the equation is in slope-intercept form (y = mx + b). 📊",
        wrongAnswerExplanations: {
            "y = 3x + 2 and y = -1/3x + 4": "These lines have slopes 3 and -1/3, so they're perpendicular, not parallel.",
            "x + y = 4 and x - y = 2": "When rearranged, these have slopes -1 and 1, so they're not parallel.",
            "2x + 3y = 6 and 6x + 9y = 12": "These are the same line when simplified, not parallel lines."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch6_t5_qe18',
        type: "mcq",
        question: "If three lines are all perpendicular to the same line, what is their relationship to each other?",
        options: ["They are all perpendicular to each other", "They are all parallel to each other", "They all intersect at the same point", "They form a triangle"],
        correctAnswer: "They are all parallel to each other",
        explanation: "Lines that are perpendicular to the same line must be parallel to each other. This is an important theorem in geometry that extends the concept of lines parallel to the same line. 📐",
        wrongAnswerExplanations: {
            "They are all perpendicular to each other": "Being perpendicular to the same line doesn't make them perpendicular to each other.",
            "They all intersect at the same point": "Parallel lines don't intersect at all.",
            "They form a triangle": "Parallel lines cannot form a triangle since they never intersect."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch6_t5_qe19',
        type: "mcq",
        question: "If line l has equation y = 2x + 3 and line m has equation y = 2x - 5, what is the distance between these parallel lines?",
        options: ["4 units", "8 units", "√5 units", "4√5 units"],
        correctAnswer: "4 units",
        explanation: "The distance between parallel lines with equations y = mx + c₁ and y = mx + c₂ is |c₁ - c₂|/√(1 + m²). Here, m = 2, c₁ = 3, c₂ = -5, so the distance is |3 - (-5)|/√(1 + 2²) = 8/√5 = 8/√5 × √5/√5 = 8√5/5 ≈ 4 units. 📏",
        wrongAnswerExplanations: {
            "8 units": "This is just the difference in y-intercepts, not the perpendicular distance.",
            "√5 units": "This doesn't account for the y-intercept difference correctly.",
            "4√5 units": "This incorrectly applies the distance formula."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch6_t5_qe20',
        type: "mcq",
        question: "Which statement about lines parallel to the same line is FALSE?",
        options: ["They never intersect each other", "They all have the same direction", "They always maintain the same distance from each other", "Their transversal always creates equal corresponding angles"],
        correctAnswer: "They always maintain the same distance from each other",
        explanation: "Lines that are parallel to the same line are not necessarily equidistant from that line or from each other. They can be at varying distances while still maintaining the parallel relationship. ⚠️",
        wrongAnswerExplanations: {
            "They never intersect each other": "This is true; parallel lines never intersect by definition.",
            "They all have the same direction": "This is true; parallel lines maintain the same direction.",
            "Their transversal always creates equal corresponding angles": "This is true; a transversal creates equal corresponding angles with parallel lines."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    }
];
