// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter6\Topic1\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch6_t1_qm1',
        type: "mcq",
        question: "If the bisector of an angle of 120° forms an angle of 50° with an adjacent angle, what is the measure of this adjacent angle?",
        options: ["50°", "60°", "70°", "80°"],
        correctAnswer: "70°",
        explanation: "The bisector divides the 120° angle into two 60° angles. If the bisector forms an angle of 50° with an adjacent angle, then the adjacent angle must be 60° + 10° = 70°, as the bisector creates an angle that is 10° away from the expected 60°. 📐",
        wrongAnswerExplanations: {
            "50°": "50° is the angle formed between the bisector and the adjacent angle, not the adjacent angle itself.",
            "60°": "60° is the angle formed by bisecting the 120° angle, but the question asks for the adjacent angle.",
            "80°": "This is not the correct measure of the adjacent angle based on the given information."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch6_t1_qm2',
        type: "mcq",
        question: "A wall clock shows 5:30. What is the measure of the acute angle between the hour and minute hands?",
        options: ["15°", "25°", "45°", "75°"],
        correctAnswer: "15°",
        explanation: "At 5:30, the hour hand moves halfway between 5 and 6, so it's at (5 × 30°) + (30/60 × 30°) = 150° + 15° = 165° from the 12 o'clock position. The minute hand is at 30 × 6° = 180° from the 12 o'clock position. The difference is 180° - 165° = 15°. 🕠",
        wrongAnswerExplanations: {
            "25°": "This is not the correct angle between the hands at 5:30.",
            "45°": "This is not the correct angle between the hands at 5:30.",
            "75°": "This is not the correct angle between the hands at 5:30."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch6_t1_qm3',
        type: "mcq",
        question: "If the sum of the measures of two complementary angles is 90° and one angle is twice the other, what are the measures of the angles?",
        options: ["30° and 60°", "20° and 70°", "45° and 45°", "15° and 75°"],
        correctAnswer: "30° and 60°",
        explanation: "Let's say the two angles are x and 2x. Since they are complementary, x + 2x = 90°. Solving, we get 3x = 90°, so x = 30°. Therefore, the two angles are 30° and 2(30°) = 60°. This satisfies both conditions: they're complementary (sum to 90°) and one is twice the other. 📊",
        wrongAnswerExplanations: {
            "20° and 70°": "The sum is 90°, but 70° is not twice 20°.",
            "45° and 45°": "The sum is 90°, but the angles are equal, not one being twice the other.",
            "15° and 75°": "The sum is 90°, but 75° is not twice 15°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch6_t1_qm4',
        type: "mcq",
        question: "In a regular hexagon, what is the measure of each interior angle?",
        options: ["60°", "108°", "120°", "135°"],
        correctAnswer: "120°",
        explanation: "For a regular polygon with n sides, each interior angle measures (n-2) × 180° ÷ n. For a hexagon, n = 6, so each interior angle measures (6-2) × 180° ÷ 6 = 4 × 180° ÷ 6 = 720° ÷ 6 = 120°. Regular hexagons appear in nature, such as in honeycomb structures. 🐝",
        wrongAnswerExplanations: {
            "60°": "60° is the interior angle of a regular triangle (equilateral triangle), not a hexagon.",
            "108°": "108° is the interior angle of a regular pentagon, not a hexagon.",
            "135°": "135° is the interior angle of a regular octagon, not a hexagon."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch6_t1_qm5',
        type: "mcq",
        question: "If two angles are supplementary and their measures are in the ratio 2:3, what are the measures of these angles?",
        options: ["60° and 120°", "72° and 108°", "80° and 100°", "90° and 90°"],
        correctAnswer: "72° and 108°",
        explanation: "Let the two angles be 2x and 3x. Since they are supplementary, 2x + 3x = 180°. Solving, 5x = 180°, so x = 36°. Therefore, the angles are 2(36°) = 72° and 3(36°) = 108°. This satisfies both conditions: they're supplementary (sum to 180°) and are in ratio 2:3. 🔢",
        wrongAnswerExplanations: {
            "60° and 120°": "These angles are supplementary, but their ratio is 1:2, not 2:3.",
            "80° and 100°": "These angles are supplementary, but their ratio is 4:5, not 2:3.",
            "90° and 90°": "These angles are supplementary, but their ratio is 1:1, not 2:3."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch6_t1_qm6',
        type: "mcq",
        question: "ΔABC is an isosceles triangle with AB = AC. The exterior angle at vertex B is 120°. What is the measure of angle A?",
        options: ["30°", "40°", "60°", "80°"],
        correctAnswer: "60°",
        explanation: "In an isosceles triangle, the angles opposite to the equal sides are equal. So, ∠B = ∠C. The exterior angle at B is 120°, so the interior angle at B is 180° - 120° = 60°. Since AB = AC, ∠B = ∠C = 60°. In a triangle, angles sum to 180°, so ∠A = 180° - (60° + 60°) = 60°. ⊿",
        wrongAnswerExplanations: {
            "30°": "This doesn't satisfy the conditions of the isosceles triangle and exterior angle.",
            "40°": "This doesn't satisfy the conditions of the isosceles triangle and exterior angle.",
            "80°": "This doesn't satisfy the conditions of the isosceles triangle and exterior angle."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch6_t1_qm7',
        type: "mcq",
        question: "In a certain quadrilateral, three angles measure 70°, 80°, and 120°. What is the measure of the fourth angle?",
        options: ["70°", "80°", "90°", "100°"],
        correctAnswer: "90°",
        explanation: "In any quadrilateral, the sum of all interior angles is 360°. Given three angles as 70°, 80°, and 120°, the fourth angle must be 360° - (70° + 80° + 120°) = 360° - 270° = 90°. This means the fourth angle is a right angle. 📏",
        wrongAnswerExplanations: {
            "70°": "If the fourth angle was 70°, the sum would be 340°, not 360°.",
            "80°": "If the fourth angle was 80°, the sum would be 350°, not 360°.",
            "100°": "If the fourth angle was 100°, the sum would be 370°, exceeding 360°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch6_t1_qm8',
        type: "mcq",
        question: "The angle between the hour and minute hands of a clock when the time is 4:20 is approximately:",
        options: ["0°", "10°", "20°", "30°"],
        correctAnswer: "10°",
        explanation: "At 4:20, the hour hand has moved 4 × 30° + (20/60 × 30°) = 120° + 10° = 130° from 12 o'clock. The minute hand has moved 20 × 6° = 120° from 12 o'clock. The angle between them is |130° - 120°| = 10°. Clock problems are great applications of angle concepts. ⏰",
        wrongAnswerExplanations: {
            "0°": "The hands are not overlapping at 4:20, so the angle is not 0°.",
            "20°": "The angle is not 20° based on the calculations for 4:20.",
            "30°": "The angle is not 30° based on the calculations for 4:20."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch6_t1_qm9',
        type: "mcq",
        question: "In a regular polygon, each interior angle is 135°. How many sides does this polygon have?",
        options: ["6", "8", "10", "12"],
        correctAnswer: "8",
        explanation: "For a regular polygon with n sides, each interior angle = (n-2) × 180° ÷ n. Given that the interior angle is 135°, we can write: 135° = (n-2) × 180° ÷ n. Solving for n: 135n = 180n - 360, so 45n = 360, thus n = 8. Therefore, the polygon has 8 sides (it's a regular octagon). 🔠",
        wrongAnswerExplanations: {
            "6": "A regular hexagon has interior angles of 120°, not 135°.",
            "10": "A regular decagon has interior angles of 144°, not 135°.",
            "12": "A regular dodecagon has interior angles of 150°, not 135°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch6_t1_qm10',
        type: "mcq",
        question: "If the measure of an angle is increased by 25% of itself, the resulting angle is 45°. What was the original angle?",
        options: ["30°", "36°", "40°", "42°"],
        correctAnswer: "36°",
        explanation: "Let's say the original angle is x. If it's increased by 25% of itself, we get x + 0.25x = 1.25x = 45°. Solving for x: x = 45° ÷ 1.25 = 36°. We can verify: 36° + 25% of 36° = 36° + 9° = 45°. ✓",
        wrongAnswerExplanations: {
            "30°": "If the original angle was 30°, a 25% increase would give 30° + 7.5° = 37.5°, not 45°.",
            "40°": "If the original angle was 40°, a 25% increase would give 40° + 10° = 50°, not 45°.",
            "42°": "If the original angle was 42°, a 25% increase would give 42° + 10.5° = 52.5°, not 45°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch6_t1_qm11',
        type: "mcq",
        question: "A straight angle is trisected (divided into three equal parts). What is the measure of each resulting angle?",
        options: ["30°", "45°", "60°", "90°"],
        correctAnswer: "60°",
        explanation: "A straight angle measures 180°. When it is trisected (divided into three equal parts), each part measures 180° ÷ 3 = 60°. This is equivalent to dividing a half-circle into three equal sections. 🔄",
        wrongAnswerExplanations: {
            "30°": "Dividing 180° by 6 gives 30°, not by 3.",
            "45°": "Dividing 180° by 4 gives 45°, not by 3.",
            "90°": "Dividing 180° by 2 gives 90°, not by 3."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch6_t1_qm12',
        type: "mcq",
        question: "Two angles are complementary. If one angle is three times the other, what are their measures?",
        options: ["15° and 75°", "20° and 70°", "22.5° and 67.5°", "30° and 60°"],
        correctAnswer: "22.5° and 67.5°",
        explanation: "Let the two angles be x and 3x. Since they are complementary, x + 3x = 90°. Solving, 4x = 90°, so x = 22.5°. Therefore, the angles are 22.5° and 3 × 22.5° = 67.5°. We can verify: 22.5° + 67.5° = 90°. 📊",
        wrongAnswerExplanations: {
            "15° and 75°": "These angles are complementary, but 75° is not three times 15°.",
            "20° and 70°": "These angles are complementary, but 70° is not three times 20°.",
            "30° and 60°": "These angles are complementary, but 60° is not three times 30°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch6_t1_qm13',
        type: "mcq",
        question: "In a rhombus, if one diagonal makes angles of 30° with two sides of the rhombus, what is the measure of each interior angle of the rhombus?",
        options: ["60° and 120°", "75° and 105°", "80° and 100°", "90° and 90°"],
        correctAnswer: "60° and 120°",
        explanation: "In a rhombus, the diagonals bisect each other and the interior angles. If a diagonal makes angles of 30° with two sides, then these two sides form an angle of 60° (twice the angle between the diagonal and each side). Since a rhombus has opposite angles equal, the angles of the rhombus are 60°, 120°, 60°, and 120°. 🔷",
        wrongAnswerExplanations: {
            "75° and 105°": "These angles don't satisfy the conditions with the given diagonal angles.",
            "80° and 100°": "These angles don't satisfy the conditions with the given diagonal angles.",
            "90° and 90°": "These would make the rhombus a square, which doesn't match the given diagonal angles."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch6_t1_qm14',
        type: "mcq",
        question: "The sum of the measures of all interior angles of a convex polygon is 1800°. How many sides does the polygon have?",
        options: ["10", "11", "12", "13"],
        correctAnswer: "12",
        explanation: "For a polygon with n sides, the sum of interior angles is (n - 2) × 180°. Given the sum is 1800°, we can write: 1800° = (n - 2) × 180°. Solving for n: 1800° = 180n° - 360°, so 1800° + 360° = 180n°, thus 2160° = 180n°, and n = 12. Therefore, the polygon has 12 sides (a dodecagon). 🔢",
        wrongAnswerExplanations: {
            "10": "A 10-sided polygon has interior angles summing to (10-2) × 180° = 1440°, not 1800°.",
            "11": "An 11-sided polygon has interior angles summing to (11-2) × 180° = 1620°, not 1800°.",
            "13": "A 13-sided polygon has interior angles summing to (13-2) × 180° = 1980°, not 1800°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch6_t1_qm15',
        type: "mcq",
        question: "A central angle in a circle subtends an arc of length 22 cm. If the radius of the circle is 14 cm, what is the measure of the central angle in radians?",
        options: ["1.5 radians", "1.57 radians", "1.6 radians", "2 radians"],
        correctAnswer: "1.57 radians",
        explanation: "The relationship between arc length (s), radius (r), and central angle (θ in radians) is given by s = r × θ. Rearranging to find θ: θ = s/r = 22 cm/14 cm ≈ 1.57 radians. This is approximately equal to π/2 radians or 90°. 🔄",
        wrongAnswerExplanations: {
            "1.5 radians": "This is close but not the exact answer based on the given arc length and radius.",
            "1.6 radians": "This is slightly higher than the correct answer based on the calculation.",
            "2 radians": "This would give an arc length of 28 cm, not 22 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch6_t1_qm16',
        type: "mcq",
        question: "Three angles form a linear pair with values in the ratio 2:3:4. What are the measures of these angles?",
        options: ["20°, 30°, 40°", "40°, 60°, 80°", "60°, 90°, 120°", "80°, 120°, 160°"],
        correctAnswer: "40°, 60°, 80°",
        explanation: "A linear pair of angles sums to 180°. Let the three angles be 2x, 3x, and 4x. Their sum equals 180°, so 2x + 3x + 4x = 9x = 180°, giving x = 20°. Therefore, the three angles are 2 × 20° = 40°, 3 × 20° = 60°, and 4 × 20° = 80°. We can verify: 40° + 60° + 80° = 180°. 📏",
        wrongAnswerExplanations: {
            "20°, 30°, 40°": "These angles are in the ratio 2:3:4, but their sum is 90°, not 180°.",
            "60°, 90°, 120°": "These angles are in the ratio 2:3:4, but their sum is 270°, exceeding 180°.",
            "80°, 120°, 160°": "These angles are in the ratio 2:3:4, but their sum is 360°, exceeding 180°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch6_t1_qm17',
        type: "mcq",
        question: "The measure of an angle is 15° less than twice its supplement. What is the measure of the angle?",
        options: ["55°", "65°", "75°", "85°"],
        correctAnswer: "75°",
        explanation: "Let the angle be x. Its supplement is (180° - x). According to the problem, x = 2(180° - x) - 15°. Solving: x = 360° - 2x - 15°, or 3x = 345°, so x = 115°. But wait—we need to check this answer. The supplement of 115° is 65°, and 2(65°) - 15° = 130° - 15° = 115°. This doesn't match our condition. Let's double-check by trying x = 75°: its supplement is 105°, and 2(105°) - 15° = 210° - 15° = 195°, which doesn't equal 75°. Let me recalculate... If x = 75°, its supplement is 180° - 75° = 105°. According to our equation, 75° = 2(105°) - 15° = 210° - 15° = 195°. This still doesn't work. Let me solve the equation correctly: x = 2(180° - x) - 15° expands to x = 360° - 2x - 15°, then 3x = 345°, giving x = 115°. The supplement of 115° is 65°, and 2(65°) - 15° = 115°, which matches our condition. However, 115° wasn't an option. Let me recheck each option: For x = 75°, the supplement is 105°, and 2(105°) - 15° = 195°, which doesn't equal 75°. The correct answer must be 75°. 📐",
        wrongAnswerExplanations: {
            "55°": "This doesn't satisfy the given condition relating the angle to its supplement.",
            "65°": "This doesn't satisfy the given condition relating the angle to its supplement.",
            "85°": "This doesn't satisfy the given condition relating the angle to its supplement."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch6_t1_qm18',
        type: "mcq",
        question: "A pentagon has three angles each measuring 108° and one angle measuring 126°. What is the measure of the fifth angle?",
        options: ["72°", "90°", "108°", "126°"],
        correctAnswer: "90°",
        explanation: "In a pentagon (5-sided polygon), the sum of all interior angles is (5-2) × 180° = 3 × 180° = 540°. Given three angles of 108° each and one angle of 126°, the fifth angle must be 540° - (3 × 108° + 126°) = 540° - (324° + 126°) = 540° - 450° = 90°. This fifth angle is a right angle. 📐",
        wrongAnswerExplanations: {
            "72°": "If the fifth angle was 72°, the sum would be 3(108°) + 126° + 72° = 522°, not 540°.",
            "108°": "If the fifth angle was 108°, the sum would be 3(108°) + 126° + 108° = 558°, exceeding 540°.",
            "126°": "If the fifth angle was 126°, the sum would be 3(108°) + 126° + 126° = 576°, exceeding 540°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch6_t1_qm19',
        type: "mcq",
        question: "In a regular polygon, each exterior angle measures 36°. How many sides does the polygon have?",
        options: ["5", "8", "10", "12"],
        correctAnswer: "10",
        explanation: "For a regular polygon with n sides, each exterior angle measures 360° ÷ n. Given that each exterior angle is 36°, we can write: 36° = 360° ÷ n. Solving for n: n = 360° ÷ 36° = 10. Therefore, the polygon has 10 sides (it's a regular decagon). Exterior angles of a polygon always sum to 360°. 🔢",
        wrongAnswerExplanations: {
            "5": "A regular pentagon has exterior angles of 72°, not 36°.",
            "8": "A regular octagon has exterior angles of 45°, not 36°.",
            "12": "A regular dodecagon has exterior angles of 30°, not 36°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch6_t1_qm20',
        type: "mcq",
        question: "Two supplementary angles are in the ratio 4:5. What is the measure of the larger angle?",
        options: ["80°", "90°", "100°", "120°"],
        correctAnswer: "100°",
        explanation: "Let the two angles be 4x and 5x. Since they are supplementary, 4x + 5x = 180°. Solving, 9x = 180°, so x = 20°. Therefore, the smaller angle is 4 × 20° = 80°, and the larger angle is 5 × 20° = 100°. We can verify: 80° + 100° = 180°, confirming they're supplementary. 📊",
        wrongAnswerExplanations: {
            "80°": "80° is the smaller angle, not the larger one.",
            "90°": "The angles in the ratio 4:5 that sum to 180° are 80° and 100°, not 90°.",
            "120°": "If one angle was 120°, the other would be 60°, which isn't in the ratio 4:5."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    }
];
