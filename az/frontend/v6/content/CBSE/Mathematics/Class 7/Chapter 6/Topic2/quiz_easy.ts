// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter6\Topic2\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch6_t2_qe1',
        type: "mcq",
        question: "What is the sum of all interior angles in any triangle?",
        options: ["90°", "180°", "270°", "360°"],
        correctAnswer: "180°",
        explanation: "The angle sum property of triangles states that the sum of all interior angles in any triangle is always 180°. 📐",
        wrongAnswerExplanations: {
            "90°": "90° is the measure of a right angle, not the sum of all angles in a triangle.",
            "270°": "270° is not the sum of angles in a triangle. The correct sum is 180°.",
            "360°": "360° is the sum of angles in a quadrilateral, not a triangle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch6_t2_qe2',
        type: "mcq",
        question: "In triangle ABC, if ∠A = 45° and ∠B = 65°, what is the measure of ∠C?",
        options: ["45°", "65°", "70°", "80°"],
        correctAnswer: "70°",
        explanation: "Using the angle sum property: 45° + 65° + ∠C = 180°, so ∠C = 180° - 110° = 70°. This follows directly from the angle sum property of triangles. 🔍",
        wrongAnswerExplanations: {
            "45°": "If ∠C = 45°, then the sum would be 45° + 65° + 45° = 155°, which is less than 180°.",
            "65°": "If ∠C = 65°, then the sum would be 45° + 65° + 65° = 175°, which is less than 180°.",
            "80°": "If ∠C = 80°, then the sum would be 45° + 65° + 80° = 190°, which exceeds 180°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch6_t2_qe3',
        type: "mcq",
        question: "What is an exterior angle of a triangle?",
        options: [
            "An angle inside the triangle",
            "An angle formed when one side of the triangle is extended",
            "The sum of all angles in the triangle",
            "An angle that always measures 90°"
        ],
        correctAnswer: "An angle formed when one side of the triangle is extended",
        explanation: "An exterior angle is formed when any side of a triangle is extended beyond a vertex. It lies outside the triangle but is adjacent to an interior angle. 📊",
        wrongAnswerExplanations: {
            "An angle inside the triangle": "Angles inside the triangle are called interior angles, not exterior angles.",
            "The sum of all angles in the triangle": "The sum of all interior angles is 180°, but this doesn't define an exterior angle.",
            "An angle that always measures 90°": "Exterior angles can have various measures and are not always 90°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch6_t2_qe4',
        type: "mcq",
        question: "According to the exterior angle theorem, an exterior angle of a triangle is equal to:",
        options: [
            "The adjacent interior angle",
            "180° minus the adjacent interior angle",
            "The sum of all interior angles",
            "The sum of the two non-adjacent interior angles"
        ],
        correctAnswer: "The sum of the two non-adjacent interior angles",
        explanation: "By the exterior angle theorem, an exterior angle equals the sum of the two interior angles that are not adjacent to it. This is a fundamental property of triangles. ⭐",
        wrongAnswerExplanations: {
            "The adjacent interior angle": "The exterior angle and its adjacent interior angle are supplementary (sum to 180°), not equal.",
            "180° minus the adjacent interior angle": "This relationship describes the linear pair formed by an exterior angle and its adjacent interior angle.",
            "The sum of all interior angles": "The sum of all interior angles is always 180°, but the exterior angle property relates to only two specific interior angles."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl7_ch6_t2_qe5',
        type: "mcq",
        question: "In triangle XYZ, if ∠X = 50° and ∠Y = 60°, what is the measure of the exterior angle at Z?",
        options: ["50°", "70°", "110°", "130°"],
        correctAnswer: "110°",
        explanation: "The exterior angle at Z equals the sum of the non-adjacent interior angles: ∠X + ∠Y = 50° + 60° = 110°. This directly applies the exterior angle theorem. 🧮",
        wrongAnswerExplanations: {
            "50°": "The exterior angle is not equal to just one of the non-adjacent interior angles.",
            "70°": "70° is the measure of the interior angle at Z (since 180° - 50° - 60° = 70°).",
            "130°": "130° is not correct. The exterior angle at Z equals ∠X + ∠Y = 50° + 60° = 110°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl7_ch6_t2_qe6',
        type: "mcq",
        question: "What is the measure of each angle in an equilateral triangle?",
        options: ["30°", "45°", "60°", "90°"],
        correctAnswer: "60°",
        explanation: "In an equilateral triangle, all three angles are equal. Since the sum is 180°, each angle measures 180° ÷ 3 = 60°. All angles in an equilateral triangle are 60°. 🔺",
        wrongAnswerExplanations: {
            "30°": "If each angle were 30°, the sum would be 90°, which is less than the required 180°.",
            "45°": "If each angle were 45°, the sum would be 135°, which is less than the required 180°.",
            "90°": "If each angle were 90°, the sum would be 270°, which exceeds the required 180°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch6_t2_qe7',
        type: "mcq",
        question: "If an exterior angle of a triangle is 120° and one of its opposite interior angles is 45°, what is the other opposite interior angle?",
        options: ["60°", "75°", "55°", "35°"],
        correctAnswer: "75°",
        explanation: "Since exterior angle = sum of opposite interior angles, 120° = 45° + x, so x = 120° - 45° = 75°. This applies the exterior angle theorem directly. 📏",
        wrongAnswerExplanations: {
            "60°": "If the angle were 60°, the sum would be 45° + 60° = 105°, which is less than the exterior angle of 120°.",
            "55°": "If the angle were 55°, the sum would be 45° + 55° = 100°, which is less than the exterior angle of 120°.",
            "35°": "If the angle were 35°, the sum would be 45° + 35° = 80°, which is less than the exterior angle of 120°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl7_ch6_t2_qe8',
        type: "mcq",
        question: "In a right-angled triangle, if one angle is 90° and another is 35°, what is the measure of the third angle?",
        options: ["45°", "55°", "65°", "75°"],
        correctAnswer: "55°",
        explanation: "Using the angle sum property: 90° + 35° + third angle = 180°, so third angle = 180° - 125° = 55°. In a right triangle, the non-right angles are complementary. 📐",
        wrongAnswerExplanations: {
            "45°": "If the third angle were 45°, the sum would be 90° + 35° + 45° = 170°, which is less than 180°.",
            "65°": "If the third angle were 65°, the sum would be 90° + 35° + 65° = 190°, which exceeds 180°.",
            "75°": "If the third angle were 75°, the sum would be 90° + 35° + 75° = 200°, which exceeds 180°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl7_ch6_t2_qe9',
        type: "mcq",
        question: "The exterior angle at vertex C of triangle ABC is 130°. If ∠A = 50°, what is the measure of ∠B?",
        options: ["50°", "70°", "80°", "100°"],
        correctAnswer: "80°",
        explanation: "Since the exterior angle at C equals the sum of angles A and B, we have 130° = 50° + ∠B, so ∠B = 130° - 50° = 80°. This applies the exterior angle theorem. 🔢",
        wrongAnswerExplanations: {
            "50°": "If ∠B = 50°, then ∠A + ∠B = 50° + 50° = 100°, which is less than the exterior angle of 130°.",
            "70°": "If ∠B = 70°, then ∠A + ∠B = 50° + 70° = 120°, which is less than the exterior angle of 130°.",
            "100°": "If ∠B = 100°, then ∠A + ∠B = 50° + 100° = 150°, which exceeds the exterior angle of 130°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch6_t2_qe10',
        type: "mcq",
        question: "In an isosceles triangle, if the vertex angle is 40°, what is the measure of each base angle?",
        options: ["50°", "60°", "70°", "80°"],
        correctAnswer: "70°",
        explanation: "In an isosceles triangle, the two base angles are equal. Using the angle sum property: 40° + x + x = 180°, so 2x = 140° and x = 70°. Each base angle is 70°. 🔍",
        wrongAnswerExplanations: {
            "50°": "If each base angle were 50°, the sum would be 40° + 50° + 50° = 140°, which is less than 180°.",
            "60°": "If each base angle were 60°, the sum would be 40° + 60° + 60° = 160°, which is less than 180°.",
            "80°": "If each base angle were 80°, the sum would be 40° + 80° + 80° = 200°, which exceeds 180°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch6_t2_qe11',
        type: "mcq",
        question: "Which of the following statements is NOT a property of triangles?",
        options: [
            "The sum of all interior angles is 180°",
            "An exterior angle equals the sum of two non-adjacent interior angles",
            "The sum of all exterior angles is always 360°",
            "Each exterior angle is 180° minus its adjacent interior angle"
        ],
        correctAnswer: "The sum of all exterior angles is always 360°",
        explanation: "While each exterior angle is indeed supplementary to its adjacent interior angle, the sum of all exterior angles (one at each vertex) can vary. The statement about the sum being 360° is incorrect. 🚫",
        wrongAnswerExplanations: {
            "The sum of all interior angles is 180°": "This is the angle sum property of triangles and is always true.",
            "An exterior angle equals the sum of two non-adjacent interior angles": "This is the exterior angle theorem and is always true.",
            "Each exterior angle is 180° minus its adjacent interior angle": "This is true since exterior and adjacent interior angles form a straight line (180°)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch6_t2_qe12',
        type: "mcq",
        question: "In triangle PQR, ∠P = 25° and ∠Q = 75°. What is the measure of ∠R?",
        options: ["50°", "75°", "80°", "100°"],
        correctAnswer: "80°",
        explanation: "Using the angle sum property: 25° + 75° + ∠R = 180°, so ∠R = 180° - 100° = 80°. This is a direct application of the angle sum property. 📊",
        wrongAnswerExplanations: {
            "50°": "If ∠R = 50°, the sum would be 25° + 75° + 50° = 150°, which is less than 180°.",
            "75°": "If ∠R = 75°, the sum would be 25° + 75° + 75° = 175°, which is less than 180°.",
            "100°": "If ∠R = 100°, the sum would be 25° + 75° + 100° = 200°, which exceeds 180°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch6_t2_qe13',
        type: "mcq",
        question: "Which of the following triangles has all interior angles less than 90°?",
        options: ["Right triangle", "Acute triangle", "Obtuse triangle", "Equilateral triangle"],
        correctAnswer: "Acute triangle",
        explanation: "An acute triangle has all three angles measuring less than 90°. This is the definition of an acute triangle. All angles are less than 90°. 📏",
        wrongAnswerExplanations: {
            "Right triangle": "A right triangle has one angle equal to 90°, so not all angles are less than 90°.",
            "Obtuse triangle": "An obtuse triangle has one angle greater than 90°, so not all angles are less than 90°.",
            "Equilateral triangle": "While an equilateral triangle does have all angles equal to 60° (which is less than 90°), the most precise answer is 'acute triangle'."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl7_ch6_t2_qe14',
        type: "mcq",
        question: "If all the angles of a triangle are in the ratio 2:3:4, what are the angles?",
        options: ["20°, 30°, 40°", "30°, 45°, 60°", "40°, 60°, 80°", "45°, 60°, 75°"],
        correctAnswer: "40°, 60°, 80°",
        explanation: "If the angles are in ratio 2:3:4, let's say 2x, 3x, and 4x. According to the angle sum property: 2x + 3x + 4x = 180°, so 9x = 180° and x = 20°. The angles are 40°, 60°, and 80°. 🔢",
        wrongAnswerExplanations: {
            "20°, 30°, 40°": "The sum of these angles is 90°, which is less than 180°.",
            "30°, 45°, 60°": "The sum is 135°, which is less than 180°. Also, these angles are not in the ratio 2:3:4.",
            "45°, 60°, 75°": "The sum is 180°, but these angles are not in the ratio 2:3:4."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch6_t2_qe15',
        type: "mcq",
        question: "In triangle DEF, the exterior angle at E is 150° and ∠D = 70°. What is the measure of ∠F?",
        options: ["60°", "70°", "80°", "90°"],
        correctAnswer: "80°",
        explanation: "According to the exterior angle theorem, the exterior angle at E equals ∠D + ∠F. So, 150° = 70° + ∠F, which gives ∠F = 80°. This applies the exterior angle property. 📐",
        wrongAnswerExplanations: {
            "60°": "If ∠F = 60°, then 70° + 60° = 130°, which is less than the exterior angle of 150°.",
            "70°": "If ∠F = 70°, then 70° + 70° = 140°, which is less than the exterior angle of 150°.",
            "90°": "If ∠F = 90°, then 70° + 90° = 160°, which exceeds the exterior angle of 150°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch6_t2_qe16',
        type: "mcq",
        question: "If the measure of one angle of a triangle is 90°, what type of triangle is it?",
        options: ["Acute triangle", "Obtuse triangle", "Right triangle", "Isosceles triangle"],
        correctAnswer: "Right triangle",
        explanation: "A triangle with one angle measuring exactly 90° is called a right triangle. The 90° angle is called the right angle. This is the definition of a right triangle. 📏",
        wrongAnswerExplanations: {
            "Acute triangle": "An acute triangle has all angles less than 90°, but this triangle has one angle of 90°.",
            "Obtuse triangle": "An obtuse triangle has one angle greater than 90°, but this triangle has one angle of exactly 90°.",
            "Isosceles triangle": "An isosceles triangle has two equal sides (and two equal angles), but this classification doesn't specify the angle measures."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch6_t2_qe17',
        type: "mcq",
        question: "In a triangle, if two angles are 55° and 65°, which of the following cannot be the measure of the third angle?",
        options: ["60°", "50°", "70°", "65°"],
        correctAnswer: "70°",
        explanation: "Using the angle sum property: 55° + 65° + third angle = 180°, so third angle = 60°. Any other value would make the sum either more or less than 180°, which is impossible. 🚫",
        wrongAnswerExplanations: {
            "60°": "55° + 65° + 60° = 180°, which satisfies the angle sum property, so 60° is valid.",
            "50°": "55° + 65° + 50° = 170°, which is less than 180°, so 50° is not the correct answer.",
            "65°": "55° + 65° + 65° = 185°, which exceeds 180°, so 65° is not the correct answer."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch6_t2_qe18',
        type: "mcq",
        question: "Which of the following is true about the angles of an isosceles triangle?",
        options: [
            "All three angles are equal",
            "Two angles are equal",
            "No angles are equal",
            "One angle is always 90°"
        ],
        correctAnswer: "Two angles are equal",
        explanation: "In an isosceles triangle, two sides are equal, and the angles opposite to these sides are also equal. Therefore, two angles in an isosceles triangle are always equal. 🔍",
        wrongAnswerExplanations: {
            "All three angles are equal": "A triangle with all three angles equal is an equilateral triangle, not just isosceles.",
            "No angles are equal": "Isosceles triangles always have at least two equal angles (opposite the equal sides).",
            "One angle is always 90°": "Isosceles triangles can be acute, right, or obtuse. They don't always have a right angle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch6_t2_qe19',
        type: "mcq",
        question: "An exterior angle of a triangle measures 135°. If one of the opposite interior angles is 55°, what is the other opposite interior angle?",
        options: ["55°", "70°", "80°", "90°"],
        correctAnswer: "80°",
        explanation: "From the exterior angle theorem: Exterior angle = Sum of opposite interior angles. So, 135° = 55° + x, which gives x = 80°. This applies the exterior angle property directly. 📊",
        wrongAnswerExplanations: {
            "55°": "If the other angle were 55°, the sum would be 55° + 55° = 110°, which is less than 135°.",
            "70°": "If the other angle were 70°, the sum would be 55° + 70° = 125°, which is less than 135°.",
            "90°": "If the other angle were 90°, the sum would be 55° + 90° = 145°, which exceeds 135°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch6_t2_qe20',
        type: "mcq",
        question: "Triangle ABC has interior angles 30°, 60°, and 90°. What is the measure of the exterior angle at vertex A?",
        options: ["120°", "150°", "160°", "180°"],
        correctAnswer: "150°",
        explanation: "The exterior angle at A equals the sum of the non-adjacent interior angles B and C. So, exterior angle at A = 60° + 90° = 150°. This applies the exterior angle theorem directly. 🔍",
        wrongAnswerExplanations: {
            "120°": "This is not the correct application of the exterior angle theorem.",
            "160°": "This is not the correct application of the exterior angle theorem.",
            "180°": "The exterior angle cannot be 180° in a valid triangle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    }
];
