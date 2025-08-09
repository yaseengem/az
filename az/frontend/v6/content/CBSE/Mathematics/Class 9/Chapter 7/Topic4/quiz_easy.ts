// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter7\Topic4\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch7_t4_qe1',
        type: "mcq",
        question: "What is the sum of all angles in a triangle?",
        options: ["90°", "180°", "270°", "360°"],
        correctAnswer: "180°",
        explanation: "The sum of all interior angles in any triangle is always 180°. This is one of the fundamental properties of triangles. No matter how the triangle is shaped, the angles will always add up to 180°. 📐",
        wrongAnswerExplanations: {
            "90°": "90° is the sum of angles in a quarter circle, not a triangle.",
            "270°": "270° is the sum of angles in a quadrilateral minus one right angle.",
            "360°": "360° is the sum of angles in a quadrilateral, not a triangle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t4_qe2',
        type: "mcq",
        question: "In a triangle, if two angles are 45° and 60°, what is the measure of the third angle?",
        options: ["45°", "60°", "75°", "90°"],
        correctAnswer: "75°",
        explanation: "Using the angle sum property of triangles, the sum of all angles is 180°. If two angles are 45° and 60°, then the third angle is 180° - (45° + 60°) = 180° - 105° = 75°. 📏",
        wrongAnswerExplanations: {
            "45°": "If the third angle is 45°, the sum would be 45° + 60° + 45° = 150°, which is less than 180°.",
            "60°": "If the third angle is 60°, the sum would be 45° + 60° + 60° = 165°, which is less than 180°.",
            "90°": "If the third angle is 90°, the sum would be 45° + 60° + 90° = 195°, which exceeds 180°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t4_qe3',
        type: "mcq",
        question: "What is an exterior angle of a triangle?",
        options: [
            "An angle inside the triangle",
            "An angle formed by extending a side of the triangle",
            "An angle formed by the intersection of two sides",
            "The sum of all angles in the triangle"
        ],
        correctAnswer: "An angle formed by extending a side of the triangle",
        explanation: "An exterior angle is formed when one side of a triangle is extended. It is adjacent and supplementary to one of the interior angles. Exterior angles provide valuable relationships for solving triangle problems. 🔍",
        wrongAnswerExplanations: {
            "An angle inside the triangle": "This describes an interior angle, not an exterior angle.",
            "An angle formed by the intersection of two sides": "This is another way to describe an interior angle.",
            "The sum of all angles in the triangle": "This is a property of triangles, not a type of angle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t4_qe4',
        type: "mcq",
        question: "What is the measure of an exterior angle of a triangle equal to?",
        options: [
            "The sum of all interior angles",
            "The sum of the two interior opposite angles",
            "180° minus the adjacent interior angle",
            "None of the above"
        ],
        correctAnswer: "The sum of the two interior opposite angles",
        explanation: "According to the exterior angle theorem, an exterior angle of a triangle is equal to the sum of the two interior opposite angles. This is one of the fundamental properties of triangles. ⚠️",
        wrongAnswerExplanations: {
            "The sum of all interior angles": "The sum of all interior angles is 180°, not the measure of an exterior angle.",
            "180° minus the adjacent interior angle": "This gives the value of the exterior angle, but doesn't define what it equals in relation to other angles.",
            "None of the above": "The correct answer is stated in the exterior angle theorem."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t4_qe5',
        type: "mcq",
        question: "In a triangle, the relationship between the sides and angles is that:",
        options: [
            "The longest side is opposite to the smallest angle",
            "The longest side is opposite to the largest angle",
            "There is no relationship between sides and angles",
            "All sides are opposite to equal angles"
        ],
        correctAnswer: "The longest side is opposite to the largest angle",
        explanation: "In any triangle, the longest side is opposite to the largest angle, and the shortest side is opposite to the smallest angle. This is called the inequality property of triangles. 📐",
        wrongAnswerExplanations: {
            "The longest side is opposite to the smallest angle": "This is the opposite of the correct relationship.",
            "There is no relationship between sides and angles": "There is a definite relationship between sides and angles in triangles.",
            "All sides are opposite to equal angles": "This would only be true in an equilateral triangle where all angles are equal."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t4_qe6',
        type: "mcq",
        question: "Which of the following sets of lengths can form a triangle?",
        options: [
            "2 cm, 3 cm, 6 cm",
            "3 cm, 4 cm, 7 cm",
            "5 cm, 6 cm, 10 cm",
            "4 cm, 5 cm, 9 cm"
        ],
        correctAnswer: "5 cm, 6 cm, 10 cm",
        explanation: "For three lengths to form a triangle, the sum of any two sides must be greater than the third side. Checking 5+6>10, 6+10>5, and 10+5>6, all inequalities are satisfied, so this set can form a triangle. 📏",
        wrongAnswerExplanations: {
            "2 cm, 3 cm, 6 cm": "2 + 3 = 5, which is less than 6, so these lengths cannot form a triangle.",
            "3 cm, 4 cm, 7 cm": "3 + 4 = 7, which is equal to (not greater than) 7, so these lengths cannot form a triangle.",
            "4 cm, 5 cm, 9 cm": "4 + 5 = 9, which is equal to (not greater than) 9, so these lengths cannot form a triangle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t4_qe7',
        type: "mcq",
        question: "Which point represents the center of the inscribed circle of a triangle?",
        options: ["Centroid", "Incenter", "Orthocenter", "Circumcenter"],
        correctAnswer: "Incenter",
        explanation: "The incenter is the point where all three angle bisectors of a triangle intersect. It is equidistant from all three sides of the triangle and serves as the center of the inscribed circle. 🔄",
        wrongAnswerExplanations: {
            "Centroid": "The centroid is where the three medians of a triangle intersect, not the angle bisectors.",
            "Orthocenter": "The orthocenter is where the three altitudes of a triangle intersect.",
            "Circumcenter": "The circumcenter is where the three perpendicular bisectors of the sides intersect."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t4_qe8',
        type: "mcq",
        question: "What is a median of a triangle?",
        options: [
            "A line segment from a vertex to the midpoint of the opposite side",
            "A line segment that bisects an angle",
            "A line segment perpendicular to a side from the opposite vertex",
            "A line segment that bisects a side perpendicular to it"
        ],
        correctAnswer: "A line segment from a vertex to the midpoint of the opposite side",
        explanation: "A median is a line segment that joins a vertex of a triangle to the midpoint of the opposite side. Every triangle has three medians, which all intersect at a point called the centroid. 📊",
        wrongAnswerExplanations: {
            "A line segment that bisects an angle": "This is an angle bisector, not a median.",
            "A line segment perpendicular to a side from the opposite vertex": "This is an altitude, not a median.",
            "A line segment that bisects a side perpendicular to it": "This is a perpendicular bisector, not a median."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t4_qe9',
        type: "mcq",
        question: "The point where the three medians of a triangle meet is called:",
        options: ["Incentre", "Circumcentre", "Orthocentre", "Centroid"],
        correctAnswer: "Centroid",
        explanation: "The centroid is the point where the three medians of a triangle intersect. It is often described as the center of mass or balance point of the triangle. This point divides each median in the ratio 2:1. 📍",
        wrongAnswerExplanations: {
            "Incentre": "The incentre is where the angle bisectors meet, not the medians.",
            "Circumcentre": "The circumcentre is where the perpendicular bisectors of the sides meet.",
            "Orthocentre": "The orthocentre is where the three altitudes of the triangle meet."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t4_qe10',
        type: "mcq",
        question: "What is an altitude of a triangle?",
        options: [
            "A line from the vertex to the midpoint of the opposite side",
            "A perpendicular line from a vertex to the opposite side",
            "A line that bisects an angle of the triangle",
            "A line that bisects a side of the triangle"
        ],
        correctAnswer: "A perpendicular line from a vertex to the opposite side",
        explanation: "An altitude of a triangle is a perpendicular line segment from a vertex to the opposite side (or its extension). The three altitudes of a triangle intersect at the orthocenter. 📏",
        wrongAnswerExplanations: {
            "A line from the vertex to the midpoint of the opposite side": "This describes a median, not an altitude.",
            "A line that bisects an angle of the triangle": "This describes an angle bisector, not an altitude.",
            "A line that bisects a side of the triangle": "This is part of the definition of a perpendicular bisector, not specifically an altitude."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t4_qe11',
        type: "mcq",
        question: "In a triangle, which of the following can never be obtuse (greater than 90°)?",
        options: ["One angle", "Two angles", "All three angles", "There's no restriction"],
        correctAnswer: "All three angles",
        explanation: "Since the sum of all angles in a triangle is 180°, if all three angles were obtuse (each > 90°), their sum would exceed 180°, which is impossible. At most, one angle can be obtuse in a triangle. 📐",
        wrongAnswerExplanations: {
            "One angle": "A triangle can have one obtuse angle (e.g., 100°, 40°, 40°).",
            "Two angles": "A triangle cannot have two obtuse angles as their sum would already exceed 180°.",
            "There's no restriction": "There are definite restrictions based on the angle sum property."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t4_qe12',
        type: "mcq",
        question: "If the three sides of a triangle are 3 cm, a cm, and 5 cm, which of the following values can a take?",
        options: ["1 cm", "2 cm", "8 cm", "3 cm"],
        correctAnswer: "3 cm",
        explanation: "Using the triangle inequality theorem, the sum of any two sides must be greater than the third side. For the given sides 3, a, and 5: a + 3 > 5, a + 5 > 3, and 3 + 5 > a. Solving: a > 2, a < 8, and a can equal 3. 📏",
        wrongAnswerExplanations: {
            "1 cm": "If a = 1, then 1 + 3 = 4 < 5, which violates the triangle inequality.",
            "2 cm": "If a = 2, then 2 + 3 = 5, which is equal to (not greater than) 5, violating the strict inequality.",
            "8 cm": "If a = 8, then 3 + 5 = 8, which is equal to (not greater than) 8, violating the strict inequality."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t4_qe13',
        type: "mcq",
        question: "In a triangle, if one exterior angle measures 125°, what is the sum of the two remote interior angles?",
        options: ["55°", "125°", "180°", "360°"],
        correctAnswer: "125°",
        explanation: "According to the exterior angle theorem, an exterior angle of a triangle equals the sum of the two remote (non-adjacent) interior angles. Therefore, if the exterior angle is 125°, the sum of the two remote interior angles is also 125°. ⚠️",
        wrongAnswerExplanations: {
            "55°": "This would be 180° - 125°, which is the adjacent interior angle, not the sum of remote angles.",
            "180°": "This is the sum of all interior angles of a triangle, not just the two remote angles.",
            "360°": "This exceeds the sum of all angles in a triangle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t4_qe14',
        type: "mcq",
        question: "If ABC is a triangle with sides AB = 6 cm, BC = 8 cm, and AC = 10 cm, which angle is the largest?",
        options: ["∠A", "∠B", "∠C", "Cannot be determined"],
        correctAnswer: "∠B",
        explanation: "According to the inequality property of triangles, the largest angle is opposite to the longest side. In this triangle, the longest side is AC = 10 cm, which is opposite to angle B. Therefore, ∠B is the largest angle. 📊",
        wrongAnswerExplanations: {
            "∠A": "Angle A is opposite to side BC = 8 cm, which is not the longest side.",
            "∠C": "Angle C is opposite to side AB = 6 cm, which is the shortest side, so it's the smallest angle.",
            "Cannot be determined": "The relationship between sides and angles allows us to determine the relative sizes of angles."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t4_qe15',
        type: "mcq",
        question: "Which of the following triangles has three medians of the same length?",
        options: ["Scalene triangle", "Isosceles triangle", "Equilateral triangle", "Right-angled triangle"],
        correctAnswer: "Equilateral triangle",
        explanation: "In an equilateral triangle, all sides are equal, and all angles are 60°. Due to this symmetry, the three medians are also equal in length. In fact, any special lines (medians, altitudes, angle bisectors) in an equilateral triangle are equal. ✨",
        wrongAnswerExplanations: {
            "Scalene triangle": "A scalene triangle has all sides of different lengths, so its medians will also have different lengths.",
            "Isosceles triangle": "An isosceles triangle has two equal sides, which means two of its medians might be equal, but not all three.",
            "Right-angled triangle": "A right-angled triangle doesn't necessarily have equal medians unless it's also equilateral, which is impossible."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t4_qe16',
        type: "mcq",
        question: "In a triangle, the centroid divides each median in the ratio:",
        options: ["1:1", "1:2", "2:1", "3:2"],
        correctAnswer: "2:1",
        explanation: "The centroid of a triangle divides each median in the ratio 2:1, with the longer part closer to the vertex. This means the distance from any vertex to the centroid is twice the distance from the centroid to the midpoint of the opposite side. 📍",
        wrongAnswerExplanations: {
            "1:1": "This would mean the centroid is at the midpoint of each median, which is not true.",
            "1:2": "This is the inverse of the correct ratio.",
            "3:2": "This is not the ratio in which the centroid divides a median."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t4_qe17',
        type: "mcq",
        question: "Which of the following is always true for an obtuse-angled triangle?",
        options: [
            "All three altitudes lie inside the triangle",
            "The orthocenter lies inside the triangle",
            "At least one altitude falls outside the triangle",
            "The orthocenter lies outside the triangle"
        ],
        correctAnswer: "The orthocenter lies outside the triangle",
        explanation: "In an obtuse-angled triangle, the orthocenter (the point where the three altitudes or their extensions meet) always lies outside the triangle. This is because the altitude to the longest side falls outside the triangle. 🔍",
        wrongAnswerExplanations: {
            "All three altitudes lie inside the triangle": "In an obtuse triangle, at least one altitude falls outside the triangle.",
            "The orthocenter lies inside the triangle": "The orthocenter lies inside a triangle only if it's an acute triangle.",
            "At least one altitude falls outside the triangle": "This is true, but a more specific statement about the orthocenter is also true."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t4_qe18',
        type: "mcq",
        question: "Which of the following statements is true about the triangle inequality?",
        options: [
            "The longest side must be less than the sum of the other two sides",
            "All sides must be equal",
            "The sum of the three sides must be 180 units",
            "The longest side must be greater than the sum of the other two sides"
        ],
        correctAnswer: "The longest side must be less than the sum of the other two sides",
        explanation: "According to the triangle inequality theorem, the sum of the lengths of any two sides must be greater than the length of the third side. This means the longest side must be less than the sum of the other two sides. 📏",
        wrongAnswerExplanations: {
            "All sides must be equal": "This is true only for equilateral triangles, not all triangles.",
            "The sum of the three sides must be 180 units": "180 relates to the sum of angles in degrees, not the sum of sides.",
            "The longest side must be greater than the sum of the other two sides": "This is the opposite of the correct statement and would make triangle construction impossible."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t4_qe19',
        type: "mcq",
        question: "In a right-angled triangle, where is the orthocenter located?",
        options: [
            "At the centroid",
            "At the vertex of the right angle",
            "At the midpoint of the hypotenuse",
            "Outside the triangle"
        ],
        correctAnswer: "At the vertex of the right angle",
        explanation: "In a right-angled triangle, two of the altitudes are the legs of the triangle. The third altitude goes from the right angle vertex to the hypotenuse. Therefore, all three altitudes intersect at the right angle vertex, making it the orthocenter. 📐",
        wrongAnswerExplanations: {
            "At the centroid": "The centroid is where the medians intersect, not where the altitudes intersect.",
            "At the midpoint of the hypotenuse": "This is the circumcenter of a right triangle, not the orthocenter.",
            "Outside the triangle": "The orthocenter is outside only in obtuse triangles, not in right triangles."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t4_qe20',
        type: "mcq",
        question: "If the angles of a triangle are in the ratio 2:3:4, what are the angles?",
        options: ["20°, 30°, 40°", "40°, 60°, 80°", "30°, 45°, 60°", "20°, 60°, 100°"],
        correctAnswer: "40°, 60°, 80°",
        explanation: "If the angles are in the ratio 2:3:4, then we can write them as 2x, 3x, and 4x. Since the sum of angles in a triangle is 180°, we have 2x + 3x + 4x = 180°, which gives 9x = 180°, so x = 20°. Therefore, the angles are 2(20°) = 40°, 3(20°) = 60°, and 4(20°) = 80°. 🧮",
        wrongAnswerExplanations: {
            "20°, 30°, 40°": "These angles would be in the ratio 2:3:4, but their sum is 90°, not 180°.",
            "30°, 45°, 60°": "These angles don't follow the ratio 2:3:4, and their sum is only 135°, not 180°.",
            "20°, 60°, 100°": "These angles don't follow the ratio 2:3:4, although their sum is 180°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
