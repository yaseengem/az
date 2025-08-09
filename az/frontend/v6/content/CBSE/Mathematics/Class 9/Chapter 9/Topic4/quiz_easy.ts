// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter9\Topic4\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl9_ch9_t4_qe1',
    type: "mcq",
    question: "In a circle, if an arc subtends an angle of 60° at the center, what angle does it subtend at any point on the alternate segment?",
    options: [
      "30°",
      "45°",
      "60°",
      "120°"
    ],
    correctAnswer: "30°",
    explanation: "According to the theorem, the angle subtended by an arc at the center is twice the angle subtended by it at any point on the alternate segment. So 60° ÷ 2 = 30°. 📐",
    wrongAnswerExplanations: {
      "45°": "This doesn't follow the theorem. The angle at a point on the alternate segment should be exactly half of the angle at the center.",
      "60°": "This would be the case if the point were at the center, not on the alternate segment of the circle.",
      "120°": "This would be twice the angle at the center, not half as required by the theorem."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch9_t4_qe2',
    type: "mcq",
    question: "If an arc of a circle subtends an angle of 80° at the center, what angle will it subtend at any point on the circle in the alternate segment?",
    options: [
      "20°",
      "40°",
      "80°",
      "160°"
    ],
    correctAnswer: "40°",
    explanation: "The angle subtended by an arc at any point on the alternate segment is half the angle subtended at the center. Therefore, 80° ÷ 2 = 40°. 🔄",
    wrongAnswerExplanations: {
      "20°": "This is not half of 80°. Remember the formula: angle at circumference = angle at center ÷ 2.",
      "80°": "This would be the angle at the center, not at a point on the alternate segment.",
      "160°": "This would be twice the angle at the center, which is not correct according to the theorem."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch9_t4_qe3',
    type: "mcq",
    question: "The angle in a semicircle is:",
    options: [
      "30°",
      "60°",
      "90°",
      "180°"
    ],
    correctAnswer: "90°",
    explanation: "The angle in a semicircle is always 90° (a right angle). This is a special case of the inscribed angle theorem where the inscribed angle is formed by a diameter. 📏",
    wrongAnswerExplanations: {
      "30°": "This does not represent the angle in a semicircle, which is always a right angle (90°).",
      "60°": "This does not represent the angle in a semicircle, which is always a right angle (90°).",
      "180°": "This is the angle at the center of a semicircle, not the angle in a semicircle (which is formed at a point on the circle)."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch9_t4_qe4',
    type: "mcq",
    question: "If two angles are in the same segment of a circle, they are:",
    options: [
      "Complementary",
      "Supplementary",
      "Equal",
      "Different but proportional"
    ],
    correctAnswer: "Equal",
    explanation: "Angles in the same segment of a circle are equal. This follows from the fact that they are subtended by the same arc and therefore equal to half the angle at the center. 🔍",
    wrongAnswerExplanations: {
      "Complementary": "Complementary angles sum to 90°, which is not a relationship between angles in the same segment.",
      "Supplementary": "Supplementary angles sum to 180°, which is not a relationship between angles in the same segment.",
      "Different but proportional": "Angles in the same segment are exactly equal, not just proportional."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch9_t4_qe5',
    type: "mcq",
    question: "The angle between a tangent to a circle and the chord drawn from the point of contact is equal to:",
    options: [
      "The angle in the alternate segment",
      "The angle at the center",
      "Twice the angle in the alternate segment",
      "Half the angle in the alternate segment"
    ],
    correctAnswer: "The angle in the alternate segment",
    explanation: "The angle between a tangent and a chord drawn from the point of contact equals the angle in the alternate segment. This is known as the alternate segment theorem. 🔄",
    wrongAnswerExplanations: {
      "The angle at the center": "This is not the relationship stated by the alternate segment theorem.",
      "Twice the angle in the alternate segment": "The angle equals exactly (not twice) the angle in the alternate segment.",
      "Half the angle in the alternate segment": "The angle equals exactly (not half) the angle in the alternate segment."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch9_t4_qe6',
    type: "mcq",
    question: "If an arc of a circle subtends an angle of 100° at the center, what angle does it subtend at a point on the same segment?",
    options: [
      "25°",
      "50°",
      "100°",
      "200°"
    ],
    correctAnswer: "50°",
    explanation: "The angle subtended by an arc at a point on the circle is half the angle subtended at the center. Therefore, 100° ÷ 2 = 50°. 📊",
    wrongAnswerExplanations: {
      "25°": "This is not half of 100°. Remember the formula: angle at circumference = angle at center ÷ 2.",
      "100°": "This would be the angle at the center, not at the circumference.",
      "200°": "This would be twice the angle at the center, not half as the theorem states."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch9_t4_qe7',
    type: "mcq",
    question: "In a circle, all angles in the same segment are:",
    options: [
      "Supplementary",
      "Complementary",
      "Equal",
      "Different based on position"
    ],
    correctAnswer: "Equal",
    explanation: "All angles in the same segment of a circle are equal because they all subtend the same arc and are therefore equal to half the angle subtended at the center by the same arc. 🌓",
    wrongAnswerExplanations: {
      "Supplementary": "Angles in the same segment are equal, not supplementary (sum to 180°).",
      "Complementary": "Angles in the same segment are equal, not complementary (sum to 90°).",
      "Different based on position": "Angles in the same segment are always equal regardless of position."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch9_t4_qe8',
    type: "mcq",
    question: "An arc of a circle subtends an angle of 30° at a point on the circle. What angle does it subtend at the center?",
    options: [
      "15°",
      "30°",
      "45°",
      "60°"
    ],
    correctAnswer: "60°",
    explanation: "The angle subtended by an arc at the center is twice the angle subtended at any point on the circle. Therefore, 30° × 2 = 60°. ⭕",
    wrongAnswerExplanations: {
      "15°": "This would be half the angle at the point on the circle, not twice as the theorem states.",
      "30°": "This is the angle at a point on the circle, not at the center.",
      "45°": "This is not twice the given angle, which would be 60°."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch9_t4_qe9',
    type: "mcq",
    question: "If a chord AB of a circle subtends an angle of 70° at the center, what angle does it subtend at any point on the major arc of the circle?",
    options: [
      "30°",
      "35°",
      "70°",
      "140°"
    ],
    correctAnswer: "35°",
    explanation: "The angle subtended by a chord at any point on the major arc is half the angle subtended at the center. Therefore, 70° ÷ 2 = 35°. 🧮",
    wrongAnswerExplanations: {
      "30°": "This is not half of 70°. The correct calculation is 70° ÷ 2 = 35°.",
      "70°": "This would be the angle at the center, not at a point on the major arc.",
      "140°": "This would be twice the angle at the center, not half as required by the theorem."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch9_t4_qe10',
    type: "mcq",
    question: "What is the relationship between the angle subtended by an arc at the center and the angle subtended by the same arc at any point on the alternate segment?",
    options: [
      "They are equal",
      "The angle at the center is twice the angle on the alternate segment",
      "The angle at the center is half the angle on the alternate segment",
      "There is no fixed relationship"
    ],
    correctAnswer: "The angle at the center is twice the angle on the alternate segment",
    explanation: "According to the inscribed angle theorem, the angle subtended by an arc at the center is twice the angle subtended by the same arc at any point on the alternate segment. 📐",
    wrongAnswerExplanations: {
      "They are equal": "This contradicts the inscribed angle theorem, which states the angle at center is twice the angle on the circle.",
      "The angle at the center is half the angle on the alternate segment": "This is the reverse of the correct relationship.",
      "There is no fixed relationship": "There is a definite relationship stated by the inscribed angle theorem."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch9_t4_qe11',
    type: "mcq",
    question: "A semicircle is drawn on AB as diameter. C is any point on the semicircle. The value of angle ACB is:",
    options: [
      "30°",
      "45°",
      "60°",
      "90°"
    ],
    correctAnswer: "90°",
    explanation: "When a semicircle is drawn on AB as diameter, the angle in the semicircle (angle ACB) is always 90° (a right angle). This is a special case of the inscribed angle theorem. 📏",
    wrongAnswerExplanations: {
      "30°": "The angle in a semicircle is always 90°, not 30°.",
      "45°": "The angle in a semicircle is always 90°, not 45°.",
      "60°": "The angle in a semicircle is always 90°, not 60°."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch9_t4_qe12',
    type: "mcq",
    question: "In a circle with center O, if arc AB subtends an angle θ at the center and angle β at a point P on the alternate segment, then the relationship between θ and β is:",
    options: [
      "θ = β",
      "θ = 2β",
      "θ = β/2",
      "θ = 3β"
    ],
    correctAnswer: "θ = 2β",
    explanation: "According to the inscribed angle theorem, the angle subtended by an arc at the center (θ) is twice the angle subtended by the same arc at any point on the alternate segment (β). Thus, θ = 2β. 🔄",
    wrongAnswerExplanations: {
      "θ = β": "This contradicts the inscribed angle theorem which states the angle at center is twice the angle on the circle.",
      "θ = β/2": "This is the reverse of the correct relationship. The center angle is larger, not smaller.",
      "θ = 3β": "The relationship is θ = 2β, not θ = 3β, according to the inscribed angle theorem."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch9_t4_qe13',
    type: "mcq",
    question: "If an arc of a circle subtends an angle of 120° at the center, what angle does it subtend at any point on the alternate segment?",
    options: [
      "40°",
      "60°",
      "120°",
      "240°"
    ],
    correctAnswer: "60°",
    explanation: "The angle subtended by an arc at any point on the alternate segment is half the angle subtended at the center. Therefore, 120° ÷ 2 = 60°. 📊",
    wrongAnswerExplanations: {
      "40°": "This is not half of 120°. The correct calculation is 120° ÷ 2 = 60°.",
      "120°": "This would be the angle at the center, not at a point on the alternate segment.",
      "240°": "This would be twice the angle at the center, not half as the theorem states."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch9_t4_qe14',
    type: "mcq",
    question: "The angle formed between a tangent to a circle and a radius drawn to the point of contact is:",
    options: [
      "30°",
      "45°",
      "60°",
      "90°"
    ],
    correctAnswer: "90°",
    explanation: "The angle between a tangent to a circle and the radius drawn to the point of contact is always 90° (a right angle). This is a fundamental property of tangents. 📐",
    wrongAnswerExplanations: {
      "30°": "The angle between a tangent and radius at the point of contact is always 90°, not 30°.",
      "45°": "The angle between a tangent and radius at the point of contact is always 90°, not 45°.",
      "60°": "The angle between a tangent and radius at the point of contact is always 90°, not 60°."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch9_t4_qe15',
    type: "mcq",
    question: "If an angle in a semicircle is 90°, what is the angle in a quarter circle?",
    options: [
      "30°",
      "45°",
      "60°",
      "90°"
    ],
    correctAnswer: "45°",
    explanation: "Using the inscribed angle theorem, an arc of 90° (quarter circle) would subtend an angle of 90°/2 = 45° at a point on the circle. 🔢",
    wrongAnswerExplanations: {
      "30°": "This is not correct. The angle in a quarter circle should be half of the central angle of 90°, which is 45°.",
      "60°": "This is not half of the central angle of a quarter circle (90°), which would be 45°.",
      "90°": "This is the angle in a semicircle, not a quarter circle. The angle in a quarter circle is 45°."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch9_t4_qe16',
    type: "mcq",
    question: "Points P and Q lie on the same segment of a circle. If angle PAQ = 35° (where A is a point on the circle), then angle PBQ (where B is another point on the same segment) is:",
    options: [
      "35°",
      "45°",
      "70°",
      "140°"
    ],
    correctAnswer: "35°",
    explanation: "Angles in the same segment of a circle are equal. Since P and Q lie on the same segment, and A and B are points on this segment, angle PAQ = angle PBQ = 35°. 🔄",
    wrongAnswerExplanations: {
      "45°": "This contradicts the principle that angles in the same segment are equal, which means angle PBQ should be 35°.",
      "70°": "This would be twice the angle, which is not correct according to the theorem about angles in the same segment.",
      "140°": "This value is unrelated to the given angle and does not follow from any theorem about angles in circles."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch9_t4_qe17',
    type: "mcq",
    question: "What is the angle subtended by a diameter at any point on the circle?",
    options: [
      "45°",
      "60°",
      "90°",
      "180°"
    ],
    correctAnswer: "90°",
    explanation: "A diameter subtends an angle of 90° at any point on the circle. This is the special case of the inscribed angle theorem where the central angle is 180°. 📏",
    wrongAnswerExplanations: {
      "45°": "A diameter subtends an angle of 90°, not 45°, at any point on the circle.",
      "60°": "A diameter subtends an angle of 90°, not 60°, at any point on the circle.",
      "180°": "This would be the angle at the center, not at a point on the circle."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch9_t4_qe18',
    type: "mcq",
    question: "If angles A and B are in the same segment of a circle, which of the following is true?",
    options: [
      "A = B",
      "A + B = 90°",
      "A + B = 180°",
      "A - B = 90°"
    ],
    correctAnswer: "A = B",
    explanation: "All angles in the same segment of a circle are equal. Therefore, if angles A and B are in the same segment, then A = B. This is a direct application of the inscribed angle theorem. 🔍",
    wrongAnswerExplanations: {
      "A + B = 90°": "This would make them complementary, which is not a property of angles in the same segment.",
      "A + B = 180°": "This would make them supplementary, which is not a property of angles in the same segment.",
      "A - B = 90°": "This relationship doesn't apply to angles in the same segment, which are equal."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch9_t4_qe19',
    type: "mcq",
    question: "The angle between a tangent at a point on a circle and a chord through that point is equal to:",
    options: [
      "The angle in the alternate segment",
      "The angle at the center",
      "Twice the angle in the alternate segment",
      "Half the angle in the alternate segment"
    ],
    correctAnswer: "The angle in the alternate segment",
    explanation: "According to the alternate segment theorem, the angle between a tangent and a chord at a point on a circle is equal to the angle in the alternate segment. 🔄",
    wrongAnswerExplanations: {
      "The angle at the center": "This contradicts the alternate segment theorem.",
      "Twice the angle in the alternate segment": "The angle equals exactly (not twice) the angle in the alternate segment.",
      "Half the angle in the alternate segment": "The angle equals exactly (not half) the angle in the alternate segment."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch9_t4_qe20',
    type: "mcq",
    question: "If an arc of a circle subtends an angle of 45° at a point on the minor arc, what angle does it subtend at the center?",
    options: [
      "22.5°",
      "45°",
      "90°",
      "180°"
    ],
    correctAnswer: "90°",
    explanation: "The angle subtended by an arc at the center is twice the angle subtended at any point on the circle. Therefore, if the angle at a point is 45°, the angle at the center is 45° × 2 = 90°. ⭕",
    wrongAnswerExplanations: {
      "22.5°": "This would be half of 45°, not twice as the theorem states.",
      "45°": "This is the angle at a point on the circle, not at the center.",
      "180°": "This would be four times the angle at the circumference, not twice as the theorem states."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  }
];
