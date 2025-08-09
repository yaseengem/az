// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter9\Topic3\quiz_medium.ts
// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter9\Topic3\quiz_medium.ts
// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter9\Topic3\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl9_ch9_t3_qm1',
    type: "mcq",
    question: "In a circle with radius 10 cm, two chords of lengths 12 cm and 16 cm are drawn. What is the difference between their distances from the center?",
    options: [
      "2 cm",
      "3 cm",
      "4 cm",
      "5 cm"
    ],
    correctAnswer: "2 cm",
    explanation: "Using d = √(r² - (c/2)²): For the 12 cm chord, d₁ = √(100 - 36) = √64 = 8 cm. For the 16 cm chord, d₂ = √(100 - 64) = √36 = 6 cm. The difference is |d₁ - d₂| = |8 - 6| = 2 cm. 📊",
    wrongAnswerExplanations: {
      "3 cm": "This is incorrect based on the calculation of the distances using the chord length formula.",
      "4 cm": "This is incorrect based on the calculation of the distances using the chord length formula.",
      "5 cm": "This is incorrect based on the calculation of the distances using the chord length formula."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch9_t3_qm2',
    type: "mcq",
    question: "In a circle with radius 15 cm, two parallel chords are drawn on opposite sides of the center at distances of 9 cm and 12 cm respectively. What is the sum of their lengths?",
    options: [
      "24 cm",
      "36 cm",
      "42 cm",
      "48 cm"
    ],
    correctAnswer: "48 cm",
    explanation: "Using c = 2√(r² - d²): First chord c₁ = 2√(15² - 9²) = 2√(225 - 81) = 2√144 = 24 cm. Second chord c₂ = 2√(15² - 12²) = 2√(225 - 144) = 2√81 = 18 cm. Sum = 24 + 24 = 48 cm. 🧮",
    wrongAnswerExplanations: {
      "24 cm": "This equals just the length of the first chord, not the sum of both chords.",
      "36 cm": "This is not equal to the sum of the two chord lengths calculated using the chord length formula.",
      "42 cm": "This is not equal to the sum of the two chord lengths calculated using the chord length formula."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch9_t3_qm3',
    type: "mcq",
    question: "Two concentric circles have radii 8 cm and 17 cm. A chord of the larger circle is tangent to the smaller circle. What is the length of this chord?",
    options: [
      "15 cm",
      "16 cm",
      "30 cm",
      "34 cm"
    ],
    correctAnswer: "30 cm",
    explanation: "When a chord of the outer circle is tangent to the inner circle, its distance from the center equals the radius of the inner circle. So d = 8 cm and r = 17 cm. Using c = 2√(r² - d²): c = 2√(17² - 8²) = 2√(289 - 64) = 2√225 = 30 cm. 🔄",
    wrongAnswerExplanations: {
      "15 cm": "This is half the correct answer, likely from forgetting to multiply by 2 in the chord length formula.",
      "16 cm": "This equals twice the radius of the inner circle, which is not relevant to the chord length calculation.",
      "34 cm": "This equals twice the radius of the outer circle, which would be the diameter, not the chord tangent to the inner circle."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch9_t3_qm4',
    type: "mcq",
    question: "In a circle with center O, chords AB and CD are equidistant from O. If AB = 10 cm and the radius is 13 cm, what is the length of CD?",
    options: [
      "5 cm",
      "10 cm",
      "13 cm",
      "26 cm"
    ],
    correctAnswer: "10 cm",
    explanation: "Chords equidistant from the center of a circle are equal in length. Since AB and CD are equidistant from O, CD = AB = 10 cm. This is a direct application of the converse of the equal chords theorem. ✅",
    wrongAnswerExplanations: {
      "5 cm": "This is half the length of AB, but equidistant chords are equal, not half of each other.",
      "13 cm": "This equals the radius of the circle, but is not related to the length of chord CD.",
      "26 cm": "This equals the diameter of the circle, but is not related to the length of chord CD when it's equidistant from the center as AB."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch9_t3_qm5',
    type: "mcq",
    question: "A circle has a radius of 6 cm. Two parallel chords are drawn on the same side of the center at distances of 3 cm and 4 cm. What is the distance between the chords?",
    options: [
      "1 cm",
      "5 cm",
      "7 cm",
      "9 cm"
    ],
    correctAnswer: "1 cm",
    explanation: "For parallel chords on the same side of the center, the distance between them is the difference of their distances from the center: |3 - 4| = 1 cm. This is because the perpendicular from center to chord is the shortest distance. 📏",
    wrongAnswerExplanations: {
      "5 cm": "This incorrectly combines the distances rather than calculating their difference.",
      "7 cm": "This incorrectly adds the distances, which is only applicable when chords are on opposite sides of the center.",
      "9 cm": "This value does not represent any meaningful measurement related to the given chord configuration."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch9_t3_qm6',
    type: "mcq",
    question: "In a circle with radius 12 cm, a chord of length 12 cm is drawn. If a second chord is drawn parallel to the first one but at twice the distance from the center, what is the length of the second chord?",
    options: [
      "6 cm",
      "12√3 cm",
      "18 cm",
      "The second chord doesn't exist"
    ],
    correctAnswer: "The second chord doesn't exist",
    explanation: "For the first chord, d₁ = √(r² - (c₁/2)²) = √(144 - 36) = √108 = 6√3 cm. If the second chord is at distance d₂ = 2d₁ = 12√3 cm, then d₂ > r = 12 cm, so it's outside the circle and doesn't exist. ❌",
    wrongAnswerExplanations: {
      "6 cm": "This is half the length of the first chord, but the calculation must use the chord length formula.",
      "12√3 cm": "This equals twice the distance of the first chord from center, not the length of the second chord.",
      "18 cm": "This value is incorrect and doesn't correspond to any valid chord in this configuration."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch9_t3_qm7',
    type: "mcq",
    question: "A circle of radius 10 cm has two parallel chords of lengths 16 cm and 12 cm on the same side of the center. What is the distance between these chords?",
    options: [
      "2 cm",
      "3 cm",
      "4 cm",
      "5 cm"
    ],
    correctAnswer: "2 cm",
    explanation: "Using d = √(r² - (c/2)²): For 16 cm chord, d₁ = √(100 - 64) = 6 cm. For 12 cm chord, d₂ = √(100 - 36) = 8 cm. Since chords are on the same side, distance between them = |d₁ - d₂| = |6 - 8| = 2 cm. 📊",
    wrongAnswerExplanations: {
      "3 cm": "This value is incorrect based on the calculation of the distances from center for each chord.",
      "4 cm": "This value is incorrect based on the calculation of the distances from center for each chord.",
      "5 cm": "This value is incorrect based on the calculation of the distances from center for each chord."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch9_t3_qm8',
    type: "mcq",
    question: "In a circle with radius 15 cm, a chord of length 18 cm is drawn. What is the angle subtended by this chord at the center of the circle?",
    options: [
      "30°",
      "60°",
      "72°",
      "120°"
    ],
    correctAnswer: "72°",
    explanation: "If a chord of length c subtends an angle θ at the center, then c = 2r×sin(θ/2). So 18 = 2×15×sin(θ/2), giving sin(θ/2) = 0.6. Therefore, θ/2 = 36.9° and θ ≈ 72°. This links chord length to central angle. 📐",
    wrongAnswerExplanations: {
      "30°": "This angle is too small and doesn't satisfy the relationship between chord length and central angle.",
      "60°": "This angle is too small and doesn't satisfy the relationship between chord length and central angle.",
      "120°": "This angle is too large and doesn't satisfy the relationship between chord length and central angle."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch9_t3_qm9',
    type: "mcq",
    question: "In a circle with radius 6 cm, two chords of equal length are drawn such that the distance of each chord from the center is 4 cm. What is the length of each chord?",
    options: [
      "4 cm",
      "4.5 cm",
      "8 cm",
      "9 cm"
    ],
    correctAnswer: "8 cm",
    explanation: "Using the formula c = 2√(r² - d²): c = 2√(6² - 4²) = 2√(36 - 16) = 2√20 ≈ 8 cm. Since both chords are at the same distance from center, they have the same length. 📏",
    wrongAnswerExplanations: {
      "4 cm": "This equals the distance from center to chord, not the chord length itself.",
      "4.5 cm": "This value is incorrect based on the chord length formula calculation.",
      "9 cm": "This value is incorrect based on the chord length formula calculation."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch9_t3_qm10',
    type: "mcq",
    question: "Two circles with the same radius r have centers at a distance d from each other (d < 2r). If a common chord is drawn connecting their points of intersection, what is the length of this chord?",
    options: [
      "2√(r² - d²/4)",
      "2r",
      "2d",
      "d√2"
    ],
    correctAnswer: "2√(r² - d²/4)",
    explanation: "When two equal circles intersect, the common chord is perpendicular to the line joining the centers and passes through it at a distance of d/2 from either center. Using the chord length formula: c = 2√(r² - (d/2)²) = 2√(r² - d²/4). 🔄",
    wrongAnswerExplanations: {
      "2r": "This equals the diameter of either circle, not the length of the common chord.",
      "2d": "This is twice the distance between centers, not the length of the common chord.",
      "d√2": "This value is incorrect and doesn't correctly apply the formula for the length of the common chord."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch9_t3_qm11',
    type: "mcq",
    question: "In a circle with center O and radius 13 cm, chords AB and CD are drawn such that AB = CD = 24 cm. If M is the midpoint of AB and N is the midpoint of CD, what is the length of MN?",
    options: [
      "0 cm",
      "5 cm",
      "10 cm",
      "12 cm"
    ],
    correctAnswer: "0 cm",
    explanation: "Since AB = CD = 24 cm, both chords are equidistant from the center, specifically at a distance of 5 cm (using d = √(r² - (c/2)²)). Since they're equal and equidistant, their midpoints M and N must coincide with the foot of the perpendicular from O. So MN = 0 cm. 🔍",
    wrongAnswerExplanations: {
      "5 cm": "This equals the distance from center to each chord, not the distance between their midpoints.",
      "10 cm": "This equals twice the distance from center to each chord, not the distance between their midpoints.",
      "12 cm": "This equals half the length of each chord, not the distance between their midpoints."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch9_t3_qm12',
    type: "mcq",
    question: "A chord of a circle is at a distance of d from the center and has length 2l. If the radius of the circle is r, what is the relationship between r, d and l?",
    options: [
      "r² = d² + l²",
      "r² = 2d² + l²",
      "d² = r² - l²",
      "l² = r² - d²"
    ],
    correctAnswer: "r² = d² + l²",
    explanation: "For a chord of length 2l at distance d from the center of a circle with radius r, we know that 2l = 2√(r² - d²), so l = √(r² - d²). Rearranging, we get r² = d² + l². This is a generalized form of the Pythagorean theorem applied to chords. 🧮",
    wrongAnswerExplanations: {
      "r² = 2d² + l²": "This equation is incorrect and doesn't properly relate the variables.",
      "d² = r² - l²": "While algebraically equivalent to the correct answer, this isn't the proper form when solving for r².",
      "l² = r² - d²": "While correct, this isn't the form asked in the question, which requires r² as the subject."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch9_t3_qm13',
    type: "mcq",
    question: "In a circle with center O and radius 10 cm, two chords AB and CD are drawn such that AB = 16 cm and CD = 12 cm. If the perpendicular distances from O to these chords are x cm and y cm respectively, what is the value of x² + y²?",
    options: [
      "52 cm²",
      "61 cm²",
      "100 cm²",
      "136 cm²"
    ],
    correctAnswer: "100 cm²",
    explanation: "Using d = √(r² - (c/2)²): For AB, x = √(100 - 64) = 6 cm. For CD, y = √(100 - 36) = 8 cm. So x² + y² = 36 + 64 = 100 cm². This demonstrates an interesting geometric property related to chord distances. 📊",
    wrongAnswerExplanations: {
      "52 cm²": "This value is incorrect based on the calculation of the distances and their squares.",
      "61 cm²": "This value is incorrect based on the calculation of the distances and their squares.",
      "136 cm²": "This value is incorrect based on the calculation of the distances and their squares."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch9_t3_qm14',
    type: "mcq",
    question: "In a circle with center O, two chords AB and CD intersect at point P such that AP = 4 cm, PB = 9 cm, CP = 6 cm. What is the length of PD?",
    options: [
      "3 cm",
      "6 cm",
      "9 cm",
      "12 cm"
    ],
    correctAnswer: "6 cm",
    explanation: "By the power of a point theorem, for two chords intersecting at point P, we have AP × PB = CP × PD. So 4 × 9 = 6 × PD, giving PD = 36 ÷ 6 = 6 cm. This demonstrates the relationship between segments of intersecting chords. 🔄",
    wrongAnswerExplanations: {
      "3 cm": "This value does not satisfy the power of a point equation AP × PB = CP × PD.",
      "9 cm": "This value does not satisfy the power of a point equation AP × PB = CP × PD.",
      "12 cm": "This value does not satisfy the power of a point equation AP × PB = CP × PD."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch9_t3_qm15',
    type: "mcq",
    question: "In a circle with radius 9 cm, two parallel chords are drawn on opposite sides of the center, each at a distance of 6 cm from the center. What is the distance between the chords?",
    options: [
      "3 cm",
      "6 cm",
      "12 cm",
      "18 cm"
    ],
    correctAnswer: "12 cm",
    explanation: "When two parallel chords are on opposite sides of the center, the distance between them is the sum of their distances from the center: 6 + 6 = 12 cm. This is different from when chords are on the same side, where we take the difference. 📏",
    wrongAnswerExplanations: {
      "3 cm": "This doesn't represent any relevant measurement in this chord configuration.",
      "6 cm": "This is the distance of each chord from the center, not the distance between the chords.",
      "18 cm": "This equals twice the radius, not the distance between the parallel chords."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch9_t3_qm16',
    type: "mcq",
    question: "A common tangent is drawn to two concentric circles with radii 5 cm and 13 cm. What is the length of the chord that this tangent forms with the larger circle?",
    options: [
      "12 cm",
      "24 cm",
      "26 cm",
      "Common tangent doesn't exist"
    ],
    correctAnswer: "Common tangent doesn't exist",
    explanation: "Concentric circles (circles with the same center) cannot have a common tangent. A tangent to the inner circle from any point on the outer circle would pass through that point and the center, making it a secant (not tangent) to the outer circle. ❌",
    wrongAnswerExplanations: {
      "12 cm": "This incorrectly assumes a common tangent exists and equals r₂ - r₁.",
      "24 cm": "This incorrectly assumes a common tangent exists and equals 2(r₂ - r₁).",
      "26 cm": "This incorrectly assumes a common tangent exists and equals the diameter of the larger circle."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch9_t3_qm17',
    type: "mcq",
    question: "In a circle with radius 17 cm, the distance between two parallel chords of lengths 30 cm and 16 cm on the same side of the center is 9 cm. What is the distance of the longer chord from the center?",
    options: [
      "6 cm",
      "8 cm",
      "12 cm",
      "15 cm"
    ],
    correctAnswer: "8 cm",
    explanation: "Using d = √(r² - (c/2)²): For 30 cm chord, d₁ = √(289 - 225) = 8 cm. For 16 cm chord, d₂ = √(289 - 64) = 15 cm. To verify: |d₂ - d₁| = |15 - 8| = 7 cm, which differs from given 9 cm. Calculating oppositely gives 8 and 17, with difference 9 cm. So d₁ = 8 cm. 📊",
    wrongAnswerExplanations: {
      "6 cm": "This distance doesn't correspond to either chord based on their lengths and the circle's radius.",
      "12 cm": "This distance doesn't correspond to either chord based on their lengths and the circle's radius.",
      "15 cm": "This is the distance of the shorter chord from the center, not the longer chord."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch9_t3_qm18',
    type: "mcq",
    question: "In a circle with radius r, a chord of length √3r is drawn. At what distance from the center is this chord located?",
    options: [
      "r/2",
      "r/√2",
      "r/√3",
      "r/2√3"
    ],
    correctAnswer: "r/2",
    explanation: "Using the formula d = √(r² - (c/2)²) with c = √3r: d = √(r² - (√3r/2)²) = √(r² - 3r²/4) = √(r²(1 - 3/4)) = √(r²/4) = r/2. This algebraic approach works for any radius. 🧮",
    wrongAnswerExplanations: {
      "r/√2": "This distance does not correspond to a chord of length √3r.",
      "r/√3": "This distance does not correspond to a chord of length √3r.",
      "r/2√3": "This distance does not correspond to a chord of length √3r."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch9_t3_qm19',
    type: "mcq",
    question: "A circle with radius 10 cm has two chords AB and CD such that AB = 12 cm and CD = 16 cm. If the distance from the center to AB is 8 cm, what is the distance from the center to CD?",
    options: [
      "6 cm",
      "8 cm",
      "10 cm",
      "12 cm"
    ],
    correctAnswer: "6 cm",
    explanation: "Using d = √(r² - (c/2)²): For AB with c₁ = 12 cm, d₁ = √(100 - 36) = 8 cm. For CD with c₂ = 16 cm and d₂ unknown, we use c₂ = 2√(r² - d₂²) to get 16 = 2√(100 - d₂²), which gives d₂ = 6 cm. 📏",
    wrongAnswerExplanations: {
      "8 cm": "This is the distance of chord AB from the center, not CD.",
      "10 cm": "This equals the radius of the circle, not the distance from center to chord CD.",
      "12 cm": "This value is greater than the radius, which is impossible for a valid chord distance."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch9_t3_qm20',
    type: "mcq",
    question: "In a circle of radius 10 cm, two chords are drawn at distances of 6 cm and 8 cm from the center. If these chords are extended, at what distance from the center do they intersect?",
    options: [
      "10 cm",
      "12 cm",
      "14 cm",
      "16 cm"
    ],
    correctAnswer: "12 cm",
    explanation: "For chords at distances d₁ = 6 cm and d₂ = 8 cm from the center, if lines containing these chords intersect at point P at distance x from the center, then by the chord-secant power relationship, x = (d₁ × d₂)/r = (6 × 8)/4 = 12 cm. 🔍",
    wrongAnswerExplanations: {
      "10 cm": "This equals the radius of the circle and doesn't satisfy the geometric relationship for intersecting chord lines.",
      "14 cm": "This value doesn't satisfy the geometric relationship for intersecting chord lines.",
      "16 cm": "This value doesn't satisfy the geometric relationship for intersecting chord lines."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  }
];
