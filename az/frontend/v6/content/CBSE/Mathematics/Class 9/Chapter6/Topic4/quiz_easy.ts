// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter6\Topic4\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch6_t4_qe1',
        type: "mcq",
        question: "Two angles are complementary. If one angle is 37°, what is the other angle?",
        options: ["53°", "143°", "37°", "90°"],
        correctAnswer: "53°",
        explanation: "Complementary angles are two angles whose sum is 90°. If one angle is 37°, then the other angle must be 90° - 37° = 53°. You can verify this is correct because 37° + 53° = 90°. 📐",
        wrongAnswerExplanations: {
            "143°": "This would make the sum 37° + 143° = 180°, which is supplementary, not complementary.",
            "37°": "If both angles were 37°, their sum would be 74°, not 90°.",
            "90°": "If one angle is 90°, the other would be 0°, not 37°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t4_qe2',
        type: "mcq",
        question: "Two angles are supplementary. If one angle is 125°, what is the other angle?",
        options: ["55°", "35°", "65°", "125°"],
        correctAnswer: "55°",
        explanation: "Supplementary angles are two angles whose sum is 180°. If one angle is 125°, then the other angle must be 180° - 125° = 55°. You can verify this is correct because 125° + 55° = 180°. 📚",
        wrongAnswerExplanations: {
            "35°": "This would make the sum 125° + 35° = 160°, which is not 180°.",
            "65°": "This would make the sum 125° + 65° = 190°, which exceeds 180°.",
            "125°": "This would make the sum 125° + 125° = 250°, which exceeds 180°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t4_qe3',
        type: "mcq",
        question: "Which of the following defines adjacent angles?",
        options: [
            "Two angles that share a common vertex",
            "Two angles that share a common vertex and a common side",
            "Two angles whose sum is 90°",
            "Two angles whose sum is 180°"
        ],
        correctAnswer: "Two angles that share a common vertex and a common side",
        explanation: "Adjacent angles share a common vertex and a common side, and their interiors don't overlap. For example, when two rays emanate from a point, they form adjacent angles with any third ray that also emanates from that point. 📍",
        wrongAnswerExplanations: {
            "Two angles that share a common vertex": "This is incomplete. Adjacent angles must share both a common vertex and a common side.",
            "Two angles whose sum is 90°": "This defines complementary angles, not adjacent angles.",
            "Two angles whose sum is 180°": "This defines supplementary angles, not adjacent angles."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t4_qe4',
        type: "mcq",
        question: "What are vertically opposite angles?",
        options: [
            "Angles that are opposite to each other vertically",
            "Angles formed by intersecting lines that are opposite to each other",
            "Angles that add up to 90°",
            "Angles that form a linear pair"
        ],
        correctAnswer: "Angles formed by intersecting lines that are opposite to each other",
        explanation: "Vertically opposite angles are formed when two lines intersect. They are the non-adjacent angles that lie on opposite sides of the point of intersection. A key property is that vertically opposite angles are always equal in measure. ✖️",
        wrongAnswerExplanations: {
            "Angles that are opposite to each other vertically": "This is vague and doesn't capture the geometric definition.",
            "Angles that add up to 90°": "These are complementary angles, not vertically opposite angles.",
            "Angles that form a linear pair": "A linear pair consists of adjacent angles that sum to 180°, not vertically opposite angles."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t4_qe5',
        type: "mcq",
        question: "Which of the following statements is true about a linear pair of angles?",
        options: [
            "They are always complementary",
            "They are always supplementary",
            "They are always equal",
            "They always measure 90° each"
        ],
        correctAnswer: "They are always supplementary",
        explanation: "A linear pair consists of two adjacent angles whose non-common sides form a straight line. By definition, these angles are supplementary, meaning they sum to 180°. For example, if one angle in a linear pair is 30°, the other angle must be 150°. 📏",
        wrongAnswerExplanations: {
            "They are always complementary": "Complementary angles sum to 90°, not 180° as required for a linear pair.",
            "They are always equal": "Linear pair angles are only equal if each measures 90°, which isn't always the case.",
            "They always measure 90° each": "This is a special case. Generally, linear pair angles can have any measures that sum to 180°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t4_qe6',
        type: "mcq",
        question: "When two lines intersect, how many pairs of vertically opposite angles are formed?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "2",
        explanation: "When two lines intersect, they form four angles. These four angles create two pairs of vertically opposite angles. If we label the angles as 1, 2, 3, and 4 going clockwise around the intersection point, then angles 1 and 3 form one pair of vertically opposite angles, and angles 2 and 4 form the other pair. ✖️",
        wrongAnswerExplanations: {
            "1": "Two lines intersecting create two pairs of vertically opposite angles, not one.",
            "3": "The maximum number of pairs of vertically opposite angles from two intersecting lines is 2.",
            "4": "Two intersecting lines form only 4 angles total, which create 2 pairs of vertically opposite angles."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t4_qe7',
        type: "mcq",
        question: "If two adjacent angles are complementary, what can you conclude about their non-common sides?",
        options: [
            "They form a straight line",
            "They are parallel",
            "They are perpendicular",
            "Nothing can be concluded"
        ],
        correctAnswer: "They are perpendicular",
        explanation: "Adjacent angles share a vertex and a common side. If they are complementary (sum to 90°), their non-common sides form a right angle, making them perpendicular to each other. This is because a right angle measures exactly 90°. 📐",
        wrongAnswerExplanations: {
            "They form a straight line": "If the non-common sides formed a straight line, the angles would be supplementary (sum to 180°), not complementary (90°).",
            "They are parallel": "Two rays from the same point cannot be parallel.",
            "Nothing can be concluded": "We can definitely conclude the non-common sides are perpendicular based on the given information."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t4_qe8',
        type: "mcq",
        question: "What is the measure of the complement of a 28° angle?",
        options: ["62°", "152°", "118°", "72°"],
        correctAnswer: "62°",
        explanation: "The complement of an angle is the angle that, when added to it, gives 90°. For a 28° angle, its complement is 90° - 28° = 62°. You can verify this is correct because 28° + 62° = 90°. 🧩",
        wrongAnswerExplanations: {
            "152°": "This is the supplement of 28° (180° - 28°), not its complement.",
            "118°": "This doesn't relate to either the complement or supplement of 28°.",
            "72°": "This isn't the correct value for the complement of 28°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t4_qe9',
        type: "mcq",
        question: "What is the measure of the supplement of a 42° angle?",
        options: ["48°", "138°", "142°", "148°"],
        correctAnswer: "138°",
        explanation: "The supplement of an angle is the angle that, when added to it, gives 180°. For a 42° angle, its supplement is 180° - 42° = 138°. You can verify this is correct because 42° + 138° = 180°. 📚",
        wrongAnswerExplanations: {
            "48°": "This is the complement of 42° (90° - 42°), not its supplement.",
            "142°": "This is close but incorrect. The supplement should be 180° - 42° = 138°.",
            "148°": "This doesn't relate to either the complement or supplement of 42°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t4_qe10',
        type: "mcq",
        question: "Which of the following angle pairs must always be equal?",
        options: [
            "Complementary angles",
            "Supplementary angles",
            "Adjacent angles",
            "Vertically opposite angles"
        ],
        correctAnswer: "Vertically opposite angles",
        explanation: "Vertically opposite angles are always equal in measure. This is a fundamental property of intersecting lines. The other angle pairs mentioned (complementary, supplementary, and adjacent) can have different measures as long as they satisfy their respective definitions. ✖️",
        wrongAnswerExplanations: {
            "Complementary angles": "Complementary angles sum to 90° but can have different measures (e.g., 30° and 60°).",
            "Supplementary angles": "Supplementary angles sum to 180° but can have different measures (e.g., 45° and 135°).",
            "Adjacent angles": "Adjacent angles share a vertex and a side but can have any measures."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t4_qe11',
        type: "mcq",
        question: "If two angles form a linear pair, which of the following must be true?",
        options: [
            "The angles are equal",
            "The angles are complementary",
            "The angles are supplementary",
            "The angles are vertically opposite"
        ],
        correctAnswer: "The angles are supplementary",
        explanation: "A linear pair consists of two adjacent angles whose non-common sides form a straight line. By definition, these angles are supplementary, meaning they sum to 180°. This is a key property of linear pairs. 📏",
        wrongAnswerExplanations: {
            "The angles are equal": "Linear pair angles are only equal if each is 90°, which isn't always the case.",
            "The angles are complementary": "Complementary angles sum to 90°, not 180° as required for a linear pair.",
            "The angles are vertically opposite": "Vertically opposite angles are non-adjacent angles formed by intersecting lines, not a linear pair."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t4_qe12',
        type: "mcq",
        question: "In the figure, if ∠AOC = 70° and ∠BOC = 40°, what is the value of ∠AOB?",
        options: ["30°", "40°", "110°", "70°"],
        correctAnswer: "30°",
        explanation: "When three rays OA, OB, and OC emanate from a point O, the angle ∠AOB can be found by finding the difference between ∠AOC and ∠BOC (assuming B is between A and C). Given ∠AOC = 70° and ∠BOC = 40°, we have ∠AOB = ∠AOC - ∠BOC = 70° - 40° = 30°. 📍",
        wrongAnswerExplanations: {
            "40°": "This is the value of ∠BOC, not ∠AOB.",
            "110°": "This would be the sum of ∠AOC and ∠BOC, which doesn't give ∠AOB.",
            "70°": "This is the value of ∠AOC, not ∠AOB."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t4_qe13',
        type: "mcq",
        question: "If the complement of an angle is twice the angle itself, what is the measure of the angle?",
        options: ["30°", "45°", "60°", "90°"],
        correctAnswer: "30°",
        explanation: "Let's call the angle x. Its complement is (90° - x). According to the problem, (90° - x) = 2x. Solving this equation: 90° - x = 2x, which gives 90° = 3x, so x = 30°. We can verify this is correct because the complement of 30° is 90° - 30° = 60°, which is indeed twice 30°. 🧮",
        wrongAnswerExplanations: {
            "45°": "If the angle is 45°, its complement is also 45°, which is not twice 45°.",
            "60°": "If the angle is 60°, its complement is 30°, which is half of 60°, not twice it.",
            "90°": "A 90° angle has no complement because 90° + 0° = 90°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t4_qe14',
        type: "mcq",
        question: "What is the relationship between angles A and B in the figure if they form a linear pair?",
        options: [
            "A + B = 90°",
            "A + B = 180°",
            "A = B",
            "A and B are vertically opposite"
        ],
        correctAnswer: "A + B = 180°",
        explanation: "Angles that form a linear pair are adjacent angles whose non-common sides form a straight line. By definition, these angles are supplementary, meaning they sum to 180°. Therefore, A + B = 180°. 📏",
        wrongAnswerExplanations: {
            "A + B = 90°": "This would make the angles complementary, not a linear pair.",
            "A = B": "Linear pair angles aren't necessarily equal; they're only equal if each is 90°.",
            "A and B are vertically opposite": "Linear pair angles are adjacent, not vertically opposite."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t4_qe15',
        type: "mcq",
        question: "In the figure, lines PQ and RS intersect at point O. If ∠POS = 120°, what is the value of ∠ROQ?",
        options: ["60°", "30°", "120°", "None of these"],
        correctAnswer: "60°",
        explanation: "When two lines intersect, vertically opposite angles are equal, and adjacent angles are supplementary. In this case, ∠POS and ∠ROQ are adjacent angles that form a linear pair, so ∠POS + ∠ROQ = 180°. Given ∠POS = 120°, we have ∠ROQ = 180° - 120° = 60°. ✖️",
        wrongAnswerExplanations: {
            "30°": "This doesn't satisfy the property that adjacent angles on a straight line sum to 180°.",
            "120°": "This would make ∠POS + ∠ROQ = 240°, which exceeds 180°.",
            "None of these": "60° is the correct answer based on the properties of intersecting lines."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t4_qe16',
        type: "mcq",
        question: "What is the complement of the complement of a 25° angle?",
        options: ["25°", "65°", "115°", "155°"],
        correctAnswer: "25°",
        explanation: "The complement of an angle x is (90° - x). So, the complement of 25° is 90° - 25° = 65°. Now, the complement of 65° is 90° - 65° = 25°, which brings us back to the original angle. This demonstrates that the complement of the complement of an angle is the angle itself. 🧩",
        wrongAnswerExplanations: {
            "65°": "This is the complement of 25°, not the complement of the complement.",
            "115°": "This doesn't relate to the complement of the complement of 25°.",
            "155°": "This doesn't relate to the complement of the complement of 25°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t4_qe17',
        type: "mcq",
        question: "Which of the following pairs of angles cannot be supplementary?",
        options: [
            "30° and 150°",
            "45° and 135°",
            "90° and 90°",
            "100° and 100°"
        ],
        correctAnswer: "100° and 100°",
        explanation: "Supplementary angles sum to 180°. Checking each pair: 30° + 150° = 180°, 45° + 135° = 180°, and 90° + 90° = 180°. But 100° + 100° = 200°, which exceeds 180°. Therefore, two angles of 100° each cannot be supplementary. 📚",
        wrongAnswerExplanations: {
            "30° and 150°": "These are supplementary since 30° + 150° = 180°.",
            "45° and 135°": "These are supplementary since 45° + 135° = 180°.",
            "90° and 90°": "These are supplementary since 90° + 90° = 180°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t4_qe18',
        type: "mcq",
        question: "If a ray makes an angle of 140° with a line, what is the measure of the other angle formed?",
        options: ["40°", "140°", "220°", "320°"],
        correctAnswer: "40°",
        explanation: "When a ray stands on a line, it forms two angles that constitute a linear pair. These angles sum to 180°. If one angle is 140°, the other must be 180° - 140° = 40°. This follows from the property that a straight angle measures 180°. 📐",
        wrongAnswerExplanations: {
            "140°": "This is the measure of the given angle, not the other angle.",
            "220°": "This would make the sum of angles 140° + 220° = 360°, which is a full rotation, not a straight line.",
            "320°": "This exceeds the measure of a straight angle and doesn't make sense in this context."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t4_qe19',
        type: "mcq",
        question: "Which of the following statements is TRUE about complementary angles?",
        options: [
            "They always form a linear pair",
            "They are always adjacent",
            "They sum to 90°",
            "They are always equal"
        ],
        correctAnswer: "They sum to 90°",
        explanation: "Complementary angles are defined as two angles whose sum is 90° (a right angle). They don't need to be adjacent or equal, and they don't necessarily form a linear pair. The only requirement is that their sum equals 90°. 🧩",
        wrongAnswerExplanations: {
            "They always form a linear pair": "Linear pairs sum to 180°, not 90°.",
            "They are always adjacent": "Complementary angles can be anywhere; they don't need to be adjacent.",
            "They are always equal": "Complementary angles are only equal if each is 45°, which isn't always the case."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t4_qe20',
        type: "mcq",
        question: "In the figure, lines AB and CD intersect at point O. If ∠AOC = 50°, what is the value of ∠BOD?",
        options: ["40°", "50°", "130°", "140°"],
        correctAnswer: "50°",
        explanation: "When two lines intersect, vertically opposite angles are equal in measure. In this case, ∠AOC and ∠BOD are vertically opposite angles, so ∠BOD = ∠AOC = 50°. This is a fundamental property of vertically opposite angles. ✖️",
        wrongAnswerExplanations: {
            "40°": "This doesn't follow from the properties of vertically opposite angles.",
            "130°": "This would be the measure of ∠AOD or ∠BOC, which are adjacent to ∠AOC (180° - 50° = 130°).",
            "140°": "This doesn't follow from the properties of intersecting lines."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
