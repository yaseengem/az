// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter6\Topic4\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch6_t4_qm1',
        type: "mcq",
        question: "If two angles are complementary and one of them is 27°, what is the measure of the other angle?",
        options: ["53°", "63°", "73°", "83°"],
        correctAnswer: "63°",
        explanation: "Complementary angles sum to 90°. So, if one angle is 27°, then the other angle is 90° - 27° = 63°. This relationship is fundamental in solving various geometric problems. 📐",
        wrongAnswerExplanations: {
            "53°": "This is incorrect because 27° + 53° = 80°, not 90°.",
            "73°": "This is incorrect because 27° + 73° = 100°, which exceeds 90°.",
            "83°": "This is incorrect because 27° + 83° = 110°, which exceeds 90°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch6_t4_qm2',
        type: "mcq",
        question: "If two angles are supplementary and one of them is 112°, what is the measure of the other angle?",
        options: ["58°", "68°", "78°", "88°"],
        correctAnswer: "68°",
        explanation: "Supplementary angles sum to 180°. So, if one angle is 112°, then the other angle is 180° - 112° = 68°. This concept is frequently used in solving linear pair problems. 🔄",
        wrongAnswerExplanations: {
            "58°": "This is incorrect because 112° + 58° = 170°, not 180°.",
            "78°": "This is incorrect because 112° + 78° = 190°, which exceeds 180°.",
            "88°": "This is incorrect because 112° + 88° = 200°, which exceeds 180°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch6_t4_qm3',
        type: "mcq",
        question: "Two angles are vertically opposite. If one angle measures 118°, what is the measure of the other angle?",
        options: ["62°", "118°", "128°", "152°"],
        correctAnswer: "118°",
        explanation: "Vertically opposite angles are always equal. So, if one angle is 118°, the other vertically opposite angle is also 118°. This is a fundamental property of intersecting lines. ✖️",
        wrongAnswerExplanations: {
            "62°": "This is incorrect because vertically opposite angles are equal, not supplementary.",
            "128°": "This is incorrect because vertically opposite angles have the same measure.",
            "152°": "This is incorrect because vertically opposite angles are equal, not related by this value."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch6_t4_qm4',
        type: "mcq",
        question: "Two adjacent angles form a linear pair. If one angle is three times the other, what are the measures of the two angles?",
        options: ["45° and 135°", "30° and 150°", "60° and 120°", "36° and 144°"],
        correctAnswer: "45° and 135°",
        explanation: "If two angles x and 3x form a linear pair, then x + 3x = 180°. Solving, we get 4x = 180°, so x = 45° and 3x = 135°. These angles satisfy both conditions: they form a linear pair and maintain the given ratio. 📏",
        wrongAnswerExplanations: {
            "30° and 150°": "These angles sum to 180° but aren't in the ratio 1:3.",
            "60° and 120°": "These angles sum to 180° but aren't in the ratio 1:3.",
            "36° and 144°": "These angles sum to 180° but aren't in the ratio 1:3 (they're in ratio 1:4)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch6_t4_qm5',
        type: "mcq",
        question: "In the given figure, if lines l and m intersect at point O and ∠AOC = 120°, what is the value of ∠BOD?",
        options: ["60°", "90°", "120°", "180°"],
        correctAnswer: "120°",
        explanation: "When two lines intersect, the vertically opposite angles are equal. If ∠AOC = 120°, then its vertically opposite angle ∠BOD is also 120°. This property holds true regardless of the angle's size. ⚡",
        wrongAnswerExplanations: {
            "60°": "This is incorrect because vertically opposite angles are equal, not supplementary to half the angle.",
            "90°": "This is incorrect because vertically opposite angles have the same measure.",
            "180°": "This is incorrect because vertically opposite angles are equal to the original angle, not supplementary to it."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch6_t4_qm6',
        type: "mcq",
        question: "If two adjacent angles are complementary, what is the measure of the angle between their bisectors?",
        options: ["45°", "90°", "135°", "180°"],
        correctAnswer: "135°",
        explanation: "If two adjacent angles are complementary (sum to 90°), their angle bisectors make an angle of 135° with each other. This can be proven using angle bisector properties and the fact that these angles sum to 90°. 🔍",
        wrongAnswerExplanations: {
            "45°": "This is incorrect because the angle between the bisectors is not 45° when the adjacent angles are complementary.",
            "90°": "This is incorrect because the angle between bisectors of complementary adjacent angles is not 90°.",
            "180°": "This is incorrect because the angle between bisectors cannot be 180° in this case."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch6_t4_qm7',
        type: "mcq",
        question: "If two supplementary angles differ by 48°, what are the measures of these angles?",
        options: ["66° and 114°", "62° and 118°", "64° and 116°", "68° and 112°"],
        correctAnswer: "66° and 114°",
        explanation: "Let the angles be x and 180°-x. Their difference is (180°-x)-x = 180°-2x = 48°. Solving, 180°-2x = 48°, so 2x = 132°, thus x = 66°. The angles are 66° and 114°, which are supplementary and differ by 48°. 🧮",
        wrongAnswerExplanations: {
            "62° and 118°": "These angles are supplementary but their difference is 56°, not 48°.",
            "64° and 116°": "These angles are supplementary but their difference is 52°, not 48°.",
            "68° and 112°": "These angles are supplementary but their difference is 44°, not 48°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch6_t4_qm8',
        type: "mcq",
        question: "If two complementary angles are in the ratio 2:3, what are their measures?",
        options: ["36° and 54°", "30° and 60°", "25° and 65°", "20° and 70°"],
        correctAnswer: "36° and 54°",
        explanation: "Let the angles be 2x and 3x. Since they're complementary, 2x + 3x = 90°, so 5x = 90°, giving x = 18°. Therefore, the angles are 2(18°) = 36° and 3(18°) = 54°. Their sum is 90° and ratio is 2:3. ✓",
        wrongAnswerExplanations: {
            "30° and 60°": "These angles are complementary but their ratio is 1:2, not 2:3.",
            "25° and 65°": "These angles are complementary but their ratio is not 2:3.",
            "20° and 70°": "These angles are complementary but their ratio is 2:7, not 2:3."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch6_t4_qm9',
        type: "mcq",
        question: "Two adjacent angles are in the ratio 3:7. If they form a straight angle, what are their measures?",
        options: ["54° and 126°", "60° and 120°", "36° and 144°", "45° and 135°"],
        correctAnswer: "54° and 126°",
        explanation: "Let the angles be 3x and 7x. Since they form a straight angle, 3x + 7x = 180°, so 10x = 180°, giving x = 18°. Therefore, the angles are 3(18°) = 54° and 7(18°) = 126°. ⟨",
        wrongAnswerExplanations: {
            "60° and 120°": "These angles form a straight angle but their ratio is 1:2, not 3:7.",
            "36° and 144°": "These angles form a straight angle but their ratio is 1:4, not 3:7.",
            "45° and 135°": "These angles form a straight angle but their ratio is 1:3, not 3:7."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch6_t4_qm10',
        type: "mcq",
        question: "In the figure, if lines p and q intersect at point O such that ∠AOD = 65° and ∠BOC = 130°, what is the value of ∠AOB?",
        options: ["65°", "85°", "95°", "115°"],
        correctAnswer: "85°",
        explanation: "When two lines intersect, opposite angles are equal and adjacent angles are supplementary. Since ∠BOC = 130°, ∠AOB = 180° - 130° = 50°. However, we know that ∠AOD = 65°. Since ∠AOD = ∠AOC + ∠COD and ∠COD = ∠BOC - 90° = 130° - 90° = 40°, we find that ∠AOC = 65° - 40° = 25°. Therefore, ∠AOB = 50° + 25° = 75°. 🔍",
        wrongAnswerExplanations: {
            "65°": "This is the value of ∠AOD, not ∠AOB.",
            "95°": "This value is incorrect based on the given angles.",
            "115°": "This value is incorrect based on the given angles."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch6_t4_qm11',
        type: "mcq",
        question: "If two angles are both supplementary and complementary to the same angle, what is the sum of these two angles?",
        options: ["45°", "90°", "135°", "180°"],
        correctAnswer: "135°",
        explanation: "If x is supplementary to angle A, then x + A = 180°, or x = 180° - A. If x is complementary to angle B, then x + B = 90°, or x = 90° - B. Since these are equal, 180° - A = 90° - B, giving B - A = 90°. The sum A + B = 135°. 📐",
        wrongAnswerExplanations: {
            "45°": "This is incorrect based on the relationship between supplementary and complementary angles.",
            "90°": "This would only be true if the angles were both complementary.",
            "180°": "This would only be true if the angles were both supplementary."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch6_t4_qm12',
        type: "mcq",
        question: "Two angles are complementary. If the first angle is increased by 10° and the second is decreased by 5°, the resulting angles are:",
        options: ["Still complementary", "Supplementary", "Equal", "None of these"],
        correctAnswer: "None of these",
        explanation: "Initially, x + y = 90° (complementary). After changes, (x+10°) + (y-5°) = x + y + 5° = 90° + 5° = 95°. Since their sum is 95°, they're neither complementary (90°) nor supplementary (180°) nor equal. ➗",
        wrongAnswerExplanations: {
            "Still complementary": "Complementary angles sum to 90°, but these sum to 95°.",
            "Supplementary": "Supplementary angles sum to 180°, not 95°.",
            "Equal": "The angles aren't necessarily equal after these changes."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch6_t4_qm13',
        type: "mcq",
        question: "If three angles form a straight angle and are in the ratio 1:3:5, what is the measure of the largest angle?",
        options: ["75°", "90°", "100°", "120°"],
        correctAnswer: "100°",
        explanation: "Let the three angles be x, 3x, and 5x. Since they form a straight angle, x + 3x + 5x = 180°, so 9x = 180°, giving x = 20°. The largest angle is 5x = 5(20°) = 100°. 📏",
        wrongAnswerExplanations: {
            "75°": "This would be correct if the ratio was 5:3:2, not 1:3:5.",
            "90°": "This is not the correct value based on the ratios provided.",
            "120°": "This exceeds the value calculated from the given ratio."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch6_t4_qm14',
        type: "mcq",
        question: "Two angles are supplementary. If one of them is increased by 20% and the other is decreased by 20%, the resulting pair is:",
        options: ["Still supplementary", "Complementary", "Forms a 150° angle", "Forms a 200° angle"],
        correctAnswer: "Still supplementary",
        explanation: "If x + y = 180° (supplementary), after changes, 1.2x + 0.8y = 1.2x + 0.8(180°-x) = 1.2x + 144° - 0.8x = 144° + 0.4x. Since x + y = 180°, the final sum remains 180°. Thus, they remain supplementary. ✓",
        wrongAnswerExplanations: {
            "Complementary": "Complementary angles sum to 90°, not 180°.",
            "Forms a 150° angle": "The sum remains 180°, not 150°.",
            "Forms a 200° angle": "The changes don't increase the total beyond 180°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch6_t4_qm15',
        type: "mcq",
        question: "In the given figure, if lines l and m are parallel and the value of ∠a = 55°, what is the value of ∠b?",
        options: ["55°", "125°", "135°", "145°"],
        correctAnswer: "55°",
        explanation: "When two parallel lines are cut by a transversal, corresponding angles are equal. Since ∠a = 55° and ∠b is its corresponding angle, ∠b = 55°. This fundamental property helps solve many geometric problems. ∥",
        wrongAnswerExplanations: {
            "125°": "This would be the value of the angle supplementary to ∠a, not its corresponding angle.",
            "135°": "This is not related to the corresponding angle relationship.",
            "145°": "This is not related to the corresponding angle relationship."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch6_t4_qm16',
        type: "mcq",
        question: "If two supplementary angles differ by 60°, what are their measures?",
        options: ["60° and 120°", "50° and 130°", "40° and 140°", "30° and 150°"],
        correctAnswer: "60° and 120°",
        explanation: "Let the angles be x and 180°-x. Their difference is (180°-x)-x = 180°-2x = 60°. Solving, 180°-2x = 60°, so 2x = 120°, thus x = 60°. The angles are 60° and 120°, which are supplementary and differ by 60°. 🧮",
        wrongAnswerExplanations: {
            "50° and 130°": "These angles are supplementary but their difference is 80°, not 60°.",
            "40° and 140°": "These angles are supplementary but their difference is 100°, not 60°.",
            "30° and 150°": "These angles are supplementary but their difference is 120°, not 60°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch6_t4_qm17',
        type: "mcq",
        question: "Two angles are vertically opposite. If one of them is decreasing at a rate of 2° per minute, how is the other angle changing?",
        options: ["Increasing at 2° per minute", "Decreasing at 2° per minute", "Remains constant", "Increasing at 4° per minute"],
        correctAnswer: "Decreasing at 2° per minute",
        explanation: "Vertically opposite angles are always equal in measure. If one angle is decreasing at 2° per minute, the other vertically opposite angle must also decrease at 2° per minute to maintain their equality. 🔄",
        wrongAnswerExplanations: {
            "Increasing at 2° per minute": "This would make the angles unequal, contradicting the property of vertically opposite angles.",
            "Remains constant": "If one angle changes, the other must change to maintain equality.",
            "Increasing at 4° per minute": "This rate of change is incorrect and would make the angles unequal."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch6_t4_qm18',
        type: "mcq",
        question: "In the given figure, lines l and m intersect at point O. If ∠AOB = 70° and ∠BOC = 40°, what is the value of ∠AOC?",
        options: ["30°", "40°", "110°", "140°"],
        correctAnswer: "110°",
        explanation: "In the figure, ∠AOC = ∠AOB + ∠BOC = 70° + 40° = 110°. This is a direct application of the angle addition property. 📏",
        wrongAnswerExplanations: {
            "30°": "This would be correct if we were finding the difference, not the sum.",
            "40°": "This is the value of ∠BOC, not ∠AOC.",
            "140°": "This is incorrect because ∠AOC = 70° + 40° = 110°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch6_t4_qm19',
        type: "mcq",
        question: "Two angles are complementary. If twice the first angle equals three times the second, what are the measures of the two angles?",
        options: ["36° and 54°", "30° and 60°", "54° and 36°", "60° and 30°"],
        correctAnswer: "54° and 36°",
        explanation: "Let the angles be x and y. Since they're complementary, x + y = 90°. Given that 2x = 3y, or x = 3y/2. Substituting, 3y/2 + y = 90°, so 5y/2 = 90°, giving y = 36°. Thus, x = 54°. The angles are 54° and 36°. ✓",
        wrongAnswerExplanations: {
            "36° and 54°": "This has the order of angles reversed based on the condition 2x = 3y.",
            "30° and 60°": "These angles are complementary but don't satisfy 2x = 3y.",
            "60° and 30°": "These angles are complementary but don't satisfy 2x = 3y."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch6_t4_qm20',
        type: "mcq",
        question: "If an angle is decreased by one-third of its measure, the resulting angle is 64°. What was the original measure of the angle?",
        options: ["96°", "72°", "128°", "192°"],
        correctAnswer: "96°",
        explanation: "Let the original angle be x. If it's decreased by one-third of its measure, we have x - x/3 = 64°. Simplifying, 2x/3 = 64°, so x = 64° × 3/2 = 96°. We can verify: 96° - 96°/3 = 96° - 32° = 64°. ✓",
        wrongAnswerExplanations: {
            "72°": "If the original angle was 72°, decreasing by one-third would give 72° - 24° = 48°, not 64°.",
            "128°": "If the original angle was 128°, decreasing by one-third would give 128° - 42.67° ≈ 85.33°, not 64°.",
            "192°": "If the original angle was 192°, decreasing by one-third would give 192° - 64° = 128°, not 64°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    }
];
