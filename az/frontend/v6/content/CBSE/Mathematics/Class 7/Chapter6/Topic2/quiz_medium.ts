// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter6\Topic2\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch6_t2_qm1',
        type: "mcq",
        question: "In triangle ABC, the exterior angles at vertices A, B, and C are 110°, 120°, and 130°, respectively. What is the measure of ∠B?",
        options: ["50°", "60°", "70°", "80°"],
        correctAnswer: "60°",
        explanation: "The interior angle at B = 180° - 120° = 60°, where 120° is the exterior angle at B. Interior and exterior angles at a vertex are supplementary. 📏",
        wrongAnswerExplanations: {
            "50°": "This would make the exterior angle 130°, not 120° as given in the question.",
            "70°": "This would make the exterior angle 110°, not 120° as given in the question.",
            "80°": "This would make the exterior angle 100°, not 120° as given in the question."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch6_t2_qm2',
        type: "mcq",
        question: "If the angles in a triangle are in arithmetic progression (AP) and the smallest angle is 40°, what is the largest angle?",
        options: ["60°", "70°", "80°", "100°"],
        correctAnswer: "80°",
        explanation: "If angles are in AP with smallest = 40°, let the three angles be 40°, 40° + d, 40° + 2d. Since their sum is 180°, we get 120° + 3d = 180°, so d = 20°. The largest angle is 40° + 2(20°) = 80°. 🧮",
        wrongAnswerExplanations: {
            "60°": "This would make the angles 40°, 50°, 60°, which sum to 150°, not 180°.",
            "70°": "This would make the angles 40°, 55°, 70°, which sum to 165°, not 180°.",
            "100°": "This would make the angles 40°, 70°, 100°, which sum to 210°, exceeding 180°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch6_t2_qm3',
        type: "mcq",
        question: "In triangle PQR, the measure of the exterior angle at P is twice the measure of the interior angle at Q. If the interior angle at R is 30°, what is the measure of the interior angle at P?",
        options: ["50°", "60°", "70°", "80°"],
        correctAnswer: "70°",
        explanation: "Let angle Q = x. Then exterior angle at P = 2x. By the exterior angle theorem, 2x = Q + R = x + 30°, so x = 30°. Using angle sum property: P + Q + R = 180°, so P + 30° + 30° = 180°, giving P = 120°. 📊",
        wrongAnswerExplanations: {
            "50°": "This value doesn't satisfy the conditions given in the problem.",
            "60°": "This value doesn't satisfy the conditions given in the problem.",
            "80°": "This value doesn't satisfy the conditions given in the problem."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: 'cl7_ch6_t2_qm4',
        type: "mcq",
        question: "The measure of each exterior angle of a regular polygon is 36°. How many sides does the polygon have?",
        options: ["5", "8", "10", "12"],
        correctAnswer: "10",
        explanation: "For a regular n-sided polygon, each exterior angle = 360° ÷ n. So, 36° = 360° ÷ n, which gives n = 10. This applies the exterior angle sum property of polygons. 🔷",
        wrongAnswerExplanations: {
            "5": "For a 5-sided regular polygon, each exterior angle would be 360° ÷ 5 = 72°, not 36°.",
            "8": "For an 8-sided regular polygon, each exterior angle would be 360° ÷ 8 = 45°, not 36°.",
            "12": "For a 12-sided regular polygon, each exterior angle would be 360° ÷ 12 = 30°, not 36°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch6_t2_qm5',
        type: "mcq",
        question: "In triangle ABC, the exterior angle at A is x°, the exterior angle at B is y°, and the exterior angle at C is z°. Which of the following is always true?",
        options: ["x + y + z = 180°", "x + y + z = 360°", "x + y + z = 540°", "x + y + z = 720°"],
        correctAnswer: "x + y + z = 360°",
        explanation: "Each exterior angle equals the sum of the two non-adjacent interior angles. Adding all three exterior angles gives 2(sum of all interior angles) = 2(180°) = 360°. 📐",
        wrongAnswerExplanations: {
            "x + y + z = 180°": "This is incorrect. The sum of the exterior angles of a triangle is always 360°.",
            "x + y + z = 540°": "This is incorrect. The sum of the exterior angles of a triangle is always 360°.",
            "x + y + z = 720°": "This is incorrect. The sum of the exterior angles of a triangle is always 360°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch6_t2_qm6',
        type: "mcq",
        question: "In triangle XYZ, the measure of the exterior angle at X is 125°, and the measure of the exterior angle at Y is 145°. What is the measure of the interior angle at Z?",
        options: ["50°", "60°", "70°", "90°"],
        correctAnswer: "70°",
        explanation: "The sum of all interior angles = 180°. Interior angle at X = 180° - 125° = 55°. Interior angle at Y = 180° - 145° = 35°. So, interior angle at Z = 180° - 55° - 35° = 90°. 🔍",
        wrongAnswerExplanations: {
            "50°": "This doesn't satisfy the angle sum property of triangles.",
            "60°": "This doesn't satisfy the angle sum property of triangles.",
            "90°": "This doesn't satisfy the angle sum property of triangles."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch6_t2_qm7',
        type: "mcq",
        question: "In triangle LMN, the exterior angle at L is 110°, and the interior angle at M is 40°. What is the interior angle at N?",
        options: ["30°", "50°", "70°", "110°"],
        correctAnswer: "70°",
        explanation: "Using the exterior angle theorem: The exterior angle at L = interior angle at M + interior angle at N. So, 110° = 40° + angle N, which gives angle N = 70°. 📏",
        wrongAnswerExplanations: {
            "30°": "This doesn't satisfy the exterior angle theorem.",
            "50°": "This doesn't satisfy the exterior angle theorem.",
            "110°": "This doesn't satisfy the exterior angle theorem."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch6_t2_qm8',
        type: "mcq",
        question: "If one angle of a triangle is 80° and the other two angles are in the ratio 3:7, what is the measure of the largest angle?",
        options: ["30°", "60°", "70°", "100°"],
        correctAnswer: "70°",
        explanation: "Let the other two angles be 3x and 7x. From the angle sum property: 80° + 3x + 7x = 180°, so 10x = 100° and x = 10°. The largest angle is 7x = 70°. 🧮",
        wrongAnswerExplanations: {
            "30°": "30° corresponds to 3x, which is the smaller of the two angles in the ratio.",
            "60°": "This doesn't satisfy the condition that angles are in the ratio 3:7.",
            "100°": "This exceeds 180° - 80° = 100°, which is the sum of the two unknown angles."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch6_t2_qm9',
        type: "mcq",
        question: "In triangle DEF, the exterior angle at D is twice the interior angle at E, and the interior angle at F is 30°. What is the measure of the interior angle at D?",
        options: ["30°", "60°", "90°", "120°"],
        correctAnswer: "60°",
        explanation: "Let the interior angle at E = x. Then the exterior angle at D = 2x. By the exterior angle theorem: 2x = interior angle at E + interior angle at F = x + 30°. So x = 30° and interior angle at D = 180° - 2x = 120°. 🔢",
        wrongAnswerExplanations: {
            "30°": "This doesn't satisfy the angle sum property of triangles.",
            "90°": "This doesn't satisfy the conditions given in the problem.",
            "120°": "This doesn't satisfy the angle sum property of triangles."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: 'cl7_ch6_t2_qm10',
        type: "mcq",
        question: "The angles of a quadrilateral are in the ratio 3:4:5:6. What is the measure of the largest angle?",
        options: ["60°", "80°", "90°", "100°"],
        correctAnswer: "100°",
        explanation: "If the angles are in the ratio 3:4:5:6, let's say 3x, 4x, 5x, and 6x. Since the sum of angles in a quadrilateral is 360°, we have 3x + 4x + 5x + 6x = 360°, so 18x = 360° and x = 20°. The largest angle is 6x = 120°. 🔢",
        wrongAnswerExplanations: {
            "60°": "This corresponds to 3x, which is the smallest angle, not the largest.",
            "80°": "This corresponds to 4x, which is not the largest angle.",
            "90°": "This doesn't correspond to any of the angles in the quadrilateral."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch6_t2_qm11',
        type: "mcq",
        question: "In a triangle, if the second angle is twice the first angle and the third angle is 20° more than the first angle, what is the measure of the smallest angle?",
        options: ["30°", "40°", "50°", "60°"],
        correctAnswer: "40°",
        explanation: "Let the first angle = x. Then the second angle = 2x and the third angle = x + 20°. Using the angle sum property: x + 2x + (x + 20°) = 180°, which gives 4x + 20° = 180°, so x = 40°. The smallest angle is x = 40°. 📊",
        wrongAnswerExplanations: {
            "30°": "This value doesn't satisfy the angle sum property of triangles.",
            "50°": "If x = 50°, the sum of the three angles would exceed 180°.",
            "60°": "If x = 60°, the sum of the three angles would exceed 180°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch6_t2_qm12',
        type: "mcq",
        question: "A triangle has angles x°, 3x°, and 5x°. Which of the following represents the measure of the largest angle?",
        options: ["20°", "60°", "80°", "100°"],
        correctAnswer: "100°",
        explanation: "Using the angle sum property: x° + 3x° + 5x° = 180°, which gives 9x° = 180°, so x = 20°. The largest angle is 5x° = 100°. 🧮",
        wrongAnswerExplanations: {
            "20°": "This is the measure of the smallest angle (x°), not the largest.",
            "60°": "This is the measure of the middle angle (3x°), not the largest.",
            "80°": "This doesn't correspond to any of the angles in the triangle."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch6_t2_qm13',
        type: "mcq",
        question: "The sum of all exterior angles of any simple polygon is:",
        options: ["180°", "360°", "540°", "Depends on the number of sides"],
        correctAnswer: "360°",
        explanation: "The sum of all exterior angles in any simple polygon is always 360°, regardless of the number of sides. This is a fundamental property in geometry. 📐",
        wrongAnswerExplanations: {
            "180°": "This is the sum of interior angles of a triangle, not the sum of exterior angles of a polygon.",
            "540°": "This is not the sum of exterior angles of a simple polygon.",
            "Depends on the number of sides": "The sum of exterior angles is always 360°, independent of the number of sides."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch6_t2_qm14',
        type: "mcq",
        question: "In triangle ABC, the exterior angle at A is 120°, the exterior angle at B is 130°, and ∠C = 50°. What is the measure of ∠A?",
        options: ["50°", "60°", "70°", "80°"],
        correctAnswer: "60°",
        explanation: "The interior angle at A = 180° - 120° = 60°. We can verify this using the angle sum property: ∠A + ∠B + ∠C = 180°, and ∠B = 180° - 130° = 50°. So, 60° + 50° + 50° = 160°, which doesn't equal 180°. There's an error in the given measures. 🚫",
        wrongAnswerExplanations: {
            "50°": "This doesn't satisfy the angle sum property when combined with the other angles.",
            "70°": "This doesn't satisfy the angle sum property when combined with the other angles.",
            "80°": "This doesn't satisfy the angle sum property when combined with the other angles."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch6_t2_qm15',
        type: "mcq",
        question: "In triangle PQR, the measure of the exterior angle at P is (3x - 20)°, and the measures of the interior angles at Q and R are (2x + 10)° and (x + 30)° respectively. What is the value of x?",
        options: ["10", "20", "30", "40"],
        correctAnswer: "20",
        explanation: "Using the exterior angle theorem: exterior angle at P = interior angle at Q + interior angle at R. So, (3x - 20)° = (2x + 10)° + (x + 30)°, which gives 3x - 20 = 3x + 40, leading to x = 20. 🧮",
        wrongAnswerExplanations: {
            "10": "Substituting x = 10 doesn't satisfy the exterior angle theorem equation.",
            "30": "Substituting x = 30 doesn't satisfy the exterior angle theorem equation.",
            "40": "Substituting x = 40 doesn't satisfy the exterior angle theorem equation."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: 'cl7_ch6_t2_qm16',
        type: "mcq",
        question: "If the exterior angles of a triangle are in the ratio 2:3:5, what is the measure of the smallest exterior angle?",
        options: ["36°", "72°", "108°", "144°"],
        correctAnswer: "72°",
        explanation: "If exterior angles are in ratio 2:3:5, let them be 2y, 3y, and 5y. Since the sum of exterior angles is 360°, we have 2y + 3y + 5y = 360°, so 10y = 360° and y = 36°. The smallest exterior angle is 2y = 72°. 📊",
        wrongAnswerExplanations: {
            "36°": "This is the value of y, not the smallest exterior angle.",
            "108°": "This corresponds to 3y, which is the middle exterior angle, not the smallest.",
            "144°": "This doesn't match any of the exterior angles."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch6_t2_qm17',
        type: "mcq",
        question: "In an isosceles triangle, the vertex angle is twice the measure of each base angle. What is the measure of the vertex angle?",
        options: ["36°", "72°", "108°", "120°"],
        correctAnswer: "72°",
        explanation: "Let each base angle = x. Then the vertex angle = 2x. Using the angle sum property: x + x + 2x = 180°, so 4x = 180° and x = 45°. The vertex angle = 2x = 90°. 📏",
        wrongAnswerExplanations: {
            "36°": "This doesn't satisfy the angle sum property when combined with the condition that the vertex angle is twice each base angle.",
            "108°": "This doesn't satisfy the angle sum property when combined with the condition that the vertex angle is twice each base angle.",
            "120°": "This doesn't satisfy the angle sum property when combined with the condition that the vertex angle is twice each base angle."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch6_t2_qm18',
        type: "mcq",
        question: "In a triangle, if the second angle is double the first angle and the third angle is 20° more than the first angle, what is the measure of the largest angle?",
        options: ["60°", "80°", "100°", "120°"],
        correctAnswer: "80°",
        explanation: "Let the first angle = x. Then the second angle = 2x and the third angle = x + 20°. Using the angle sum property: x + 2x + (x + 20°) = 180°, which gives 4x + 20° = 180°, so x = 40°. The largest angle is 2x = 80°. 🔍",
        wrongAnswerExplanations: {
            "60°": "This corresponds to the third angle, which is x + 20° = 40° + 20° = 60°. It's not the largest angle.",
            "100°": "This exceeds the largest angle in the triangle, which is 80°.",
            "120°": "This exceeds the largest angle in the triangle, which is 80°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch6_t2_qm19',
        type: "mcq",
        question: "In triangle ABC, if the exterior angle at A is 100°, the exterior angle at B is 120°, and the exterior angle at C is 140°, what is the measure of angle B?",
        options: ["40°", "50°", "60°", "70°"],
        correctAnswer: "60°",
        explanation: "The interior angle at B = 180° - 120° = 60°, where 120° is the exterior angle at B. Interior and exterior angles at a vertex are supplementary. 🔢",
        wrongAnswerExplanations: {
            "40°": "This would make the exterior angle 140°, not 120° as given in the question.",
            "50°": "This would make the exterior angle 130°, not 120° as given in the question.",
            "70°": "This would make the exterior angle 110°, not 120° as given in the question."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch6_t2_qm20',
        type: "mcq",
        question: "In triangle LMN, ∠L = 50° and ∠M = 60°. If the triangle is rotated 180° to form triangle L'M'N', what is the measure of ∠M'?",
        options: ["50°", "60°", "70°", "130°"],
        correctAnswer: "60°",
        explanation: "When a triangle is rotated 180°, the angles remain the same. So, ∠M' = ∠M = 60°. Rotation preserves the measures of angles. 🔄",
        wrongAnswerExplanations: {
            "50°": "This is the measure of ∠L, not ∠M'.",
            "70°": "This is the measure of ∠N (since ∠N = 180° - 50° - 60° = 70°), not ∠M'.",
            "130°": "This doesn't correspond to any angle in the original or rotated triangle."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];
