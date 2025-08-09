import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl9_ch9_t2_qe1',
    type: "mcq",
    question: "When a perpendicular is drawn from the center of a circle to a chord, what does it do to the chord?",
    options: [
      "It makes an angle of 45° with the chord",
      "It bisects the chord",
      "It is equal to the radius",
      "None of the above"
    ],
    correctAnswer: "It bisects the chord",
    explanation: "When a perpendicular is drawn from the center of a circle to a chord, it bisects the chord. This is a fundamental property in circle geometry that helps us find chord lengths and distances. 📏",
    wrongAnswerExplanations: {
      "It makes an angle of 45° with the chord": "The perpendicular makes a 90° angle with the chord by definition, not 45°.",
      "It is equal to the radius": "The length of the perpendicular is not necessarily equal to the radius. It equals the radius only if the chord passes through the center.",
      "None of the above": "The perpendicular from the center to a chord does bisect the chord, so this option is incorrect."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch9_t2_qe2',
    type: "mcq",
    question: "In a circle with center O, if OM is the perpendicular from O to chord AB, then which of the following is true?",
    options: [
      "AM = BM",
      "OM = AB",
      "OM = radius",
      "AM = OM"
    ],
    correctAnswer: "AM = BM",
    explanation: "When OM is perpendicular from center O to chord AB, it bisects the chord, meaning AM = BM. This property follows from the theorem that the perpendicular from the center of a circle to a chord bisects the chord. 🔍",
    wrongAnswerExplanations: {
      "OM = AB": "OM is the perpendicular distance from the center to the chord, which is generally not equal to the length of chord AB.",
      "OM = radius": "OM is the perpendicular distance from the center to the chord, which is equal to the radius only if the chord is a diameter.",
      "AM = OM": "AM is half the chord length while OM is the perpendicular distance from center to chord. These are generally not equal."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch9_t2_qe3',
    type: "mcq",
    question: "If a perpendicular from the center of a circle to a chord has length 5 cm and the radius of the circle is 13 cm, what is the length of the chord?",
    options: [
      "12 cm",
      "24 cm",
      "10 cm",
      "26 cm"
    ],
    correctAnswer: "24 cm",
    explanation: "Using Pythagorean theorem: With radius 13 cm and perpendicular 5 cm, half-chord length = √(13² - 5²) = √144 = 12 cm. Full chord length = 2 × 12 = 24 cm. 📐",
    wrongAnswerExplanations: {
      "12 cm": "This is only half the chord length. The complete chord is twice this value.",
      "10 cm": "This is incorrect. Using the Pythagorean theorem, the half-chord length is 12 cm, making the full chord 24 cm.",
      "26 cm": "This is incorrect. Using the Pythagorean theorem, the half-chord length is 12 cm, making the full chord 24 cm."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch9_t2_qe4',
    type: "mcq",
    question: "What is the relationship between the perpendicular distance from the center to a chord and the length of the chord?",
    options: [
      "As perpendicular distance increases, chord length increases",
      "As perpendicular distance increases, chord length decreases",
      "Chord length is independent of perpendicular distance",
      "Perpendicular distance is always equal to chord length"
    ],
    correctAnswer: "As perpendicular distance increases, chord length decreases",
    explanation: "In a circle, as the perpendicular distance from the center to a chord increases, the chord length decreases. This inverse relationship can be proven using the Pythagorean theorem and is an important property for solving problems involving chords. 📉",
    wrongAnswerExplanations: {
      "As perpendicular distance increases, chord length increases": "This is the opposite of the correct relationship. Chords farther from the center are shorter, not longer.",
      "Chord length is independent of perpendicular distance": "There is a clear mathematical relationship between chord length and its distance from the center, so they are not independent.",
      "Perpendicular distance is always equal to chord length": "The perpendicular distance from center to chord and the chord length are different measurements and generally not equal."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch9_t2_qe5',
    type: "mcq",
    question: "In a circle with radius 10 cm, a chord is at a distance of 6 cm from the center. What is the length of the chord?",
    options: [
      "8 cm",
      "16 cm",
      "12 cm",
      "14 cm"
    ],
    correctAnswer: "16 cm",
    explanation: "Using the formula: chord length = 2√(r² - d²), where r is radius (10 cm) and d is perpendicular distance (6 cm). So, chord length = 2√(10² - 6²) = 2√(100 - 36) = 2√64 = 2 × 8 = 16 cm. 🧮",
    wrongAnswerExplanations: {
      "8 cm": "This is half the chord length. The complete chord is twice this value.",
      "12 cm": "This is incorrect. The answer should be calculated as 2√(r² - d²) = 2√(100 - 36) = 16 cm.",
      "14 cm": "This is incorrect. The answer should be calculated as 2√(r² - d²) = 2√(100 - 36) = 16 cm."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch9_t2_qe6',
    type: "mcq",
    question: "If the perpendicular from the center of a circle to a chord has length d and the radius of the circle is r, which formula gives the length of the chord?",
    options: [
      "r + d",
      "r - d",
      "2√(r² - d²)",
      "2√(r² + d²)"
    ],
    correctAnswer: "2√(r² - d²)",
    explanation: "The formula for calculating the chord length is 2√(r² - d²), where r is the radius and d is the perpendicular distance from the center to the chord. This formula is derived from the Pythagorean theorem. 📊",
    wrongAnswerExplanations: {
      "r + d": "This formula doesn't correctly relate radius, perpendicular distance, and chord length.",
      "r - d": "This formula doesn't correctly relate radius, perpendicular distance, and chord length.",
      "2√(r² + d²)": "The correct formula uses subtraction (r² - d²), not addition under the square root."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch9_t2_qe7',
    type: "mcq",
    question: "Which theorem states that the perpendicular from the center of a circle to a chord bisects the chord?",
    options: [
      "Pythagoras Theorem",
      "Chord-Chord Power Theorem",
      "Perpendicular Chord Theorem",
      "Thales' Theorem"
    ],
    correctAnswer: "Perpendicular Chord Theorem",
    explanation: "The Perpendicular Chord Theorem states that the perpendicular from the center of a circle to a chord bisects the chord. This is a fundamental theorem in circle geometry with many applications. 📝",
    wrongAnswerExplanations: {
      "Pythagoras Theorem": "Pythagoras Theorem relates the sides of a right-angled triangle but doesn't specifically address perpendiculars from circle centers to chords.",
      "Chord-Chord Power Theorem": "This theorem relates products of segments of intersecting chords, not perpendicular distances from center to chord.",
      "Thales' Theorem": "Thales' Theorem states that any angle inscribed in a semicircle is a right angle, which is different from the perpendicular chord theorem."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch9_t2_qe8',
    type: "mcq",
    question: "In a circle with center O, if OM ⊥ chord AB and OM = 8 cm, radius = 10 cm, what is AM (half the chord length)?",
    options: [
      "6 cm",
      "4 cm",
      "12 cm",
      "16 cm"
    ],
    correctAnswer: "6 cm",
    explanation: "Using Pythagorean theorem: AM² = r² - OM² = 10² - 8² = 100 - 64 = 36. Therefore, AM = 6 cm, which is half the chord length. 📐",
    wrongAnswerExplanations: {
      "4 cm": "This is incorrect. The calculation should be AM = √(r² - OM²) = √(100 - 64) = 6 cm.",
      "12 cm": "This would be the full chord length (2 × AM), not half the chord length.",
      "16 cm": "This is incorrect. The calculation should be AM = √(r² - OM²) = √(100 - 64) = 6 cm."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch9_t2_qe9',
    type: "mcq",
    question: "What is the perpendicular distance from the center of a circle with radius 13 cm to a chord of length 10 cm?",
    options: [
      "5 cm",
      "12 cm",
      "8 cm",
      "24 cm"
    ],
    correctAnswer: "12 cm",
    explanation: "Using the formula: d = √(r² - (l/2)²), where r is radius (13 cm) and l is chord length (10 cm). So, d = √(13² - (10/2)²) = √(169 - 25) = √144 = 12 cm. 🧮",
    wrongAnswerExplanations: {
      "5 cm": "This is half the chord length, not the perpendicular distance.",
      "8 cm": "This is incorrect. The perpendicular distance should be calculated as √(r² - (l/2)²) = √(169 - 25) = 12 cm.",
      "24 cm": "This exceeds the radius, which isn't possible for a perpendicular from center to chord."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch9_t2_qe10',
    type: "mcq",
    question: "In a circle with center O, a chord AB is drawn such that its perpendicular distance from O is equal to the radius. What is special about this chord?",
    options: [
      "It is a diameter",
      "It passes through the center",
      "Its length equals the radius",
      "It is the shortest possible chord"
    ],
    correctAnswer: "Its length equals the radius",
    explanation: "When the perpendicular distance from the center to a chord equals the radius, the chord's length equals the radius. This creates a right triangle where the chord is perpendicular to the radius at the circle's edge. 🔄",
    wrongAnswerExplanations: {
      "It is a diameter": "A diameter passes through the center, making its perpendicular distance zero, not equal to the radius.",
      "It passes through the center": "If it passed through the center, the perpendicular distance would be zero, not equal to the radius.",
      "It is the shortest possible chord": "The shortest chord would be infinitesimally small near the circumference, not with length equal to radius."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch9_t2_qe11',
    type: "mcq",
    question: "If a chord of length 16 cm is at a distance of 15 cm from the center of a circle, what is the radius of the circle?",
    options: [
      "17 cm",
      "31 cm",
      "8 cm",
      "√481 cm"
    ],
    correctAnswer: "17 cm",
    explanation: "Using the formula: r² = d² + (l/2)² = 15² + (16/2)² = 225 + 64 = 289. Therefore, r = 17 cm. 📊",
    wrongAnswerExplanations: {
      "31 cm": "This is the sum of the perpendicular distance and the chord length, which is not the formula for radius.",
      "8 cm": "This is half the chord length, not the radius.",
      "√481 cm": "This is incorrect. The calculation gives r² = 15² + 8² = 289, so r = 17 cm, not √481 cm."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch9_t2_qe12',
    type: "mcq",
    question: "In a circle, two chords of equal length are drawn. What can be said about their perpendicular distances from the center?",
    options: [
      "The distances are equal",
      "The sum of distances equals the diameter",
      "The difference of distances equals the radius",
      "No relationship exists between the distances"
    ],
    correctAnswer: "The distances are equal",
    explanation: "Equal chords in a circle are equidistant from the center. This is a direct application of the theorem that states the perpendicular distance from the center to a chord determines the chord's length. 🔍",
    wrongAnswerExplanations: {
      "The sum of distances equals the diameter": "There is no mathematical relationship that states the sum of perpendicular distances equals the diameter.",
      "The difference of distances equals the radius": "There is no mathematical relationship that states the difference of perpendicular distances equals the radius.",
      "No relationship exists between the distances": "There is a definite relationship - equal chords are equidistant from the center."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch9_t2_qe13',
    type: "mcq",
    question: "What happens to the length of a chord if its perpendicular distance from the center of the circle is reduced to half?",
    options: [
      "The chord length becomes half",
      "The chord length becomes double",
      "The chord length increases",
      "The chord length decreases"
    ],
    correctAnswer: "The chord length increases",
    explanation: "As perpendicular distance from center to chord decreases, chord length increases. When the distance is halved, the chord length increases because more of the circle's width is captured by the chord position. 📈",
    wrongAnswerExplanations: {
      "The chord length becomes half": "The relationship between perpendicular distance and chord length is not directly proportional in this way.",
      "The chord length becomes double": "While the chord length does increase, it doesn't necessarily double unless specific conditions are met.",
      "The chord length decreases": "This is the opposite of what happens. As perpendicular distance decreases, chord length increases."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch9_t2_qe14',
    type: "mcq",
    question: "In a circle of radius 5 cm, the perpendicular distance from the center to a chord is 3 cm. If another chord has a perpendicular distance of 4 cm from the center, which chord is longer?",
    options: [
      "The chord at 3 cm distance",
      "The chord at 4 cm distance",
      "Both chords have equal length",
      "Cannot be determined"
    ],
    correctAnswer: "The chord at 3 cm distance",
    explanation: "Using the formula: chord length = 2√(r² - d²), the chord at 3 cm gives 2√(25 - 9) = 2√16 = 8 cm, while the chord at 4 cm gives 2√(25 - 16) = 2√9 = 6 cm. So the chord at 3 cm distance is longer. 📏",
    wrongAnswerExplanations: {
      "The chord at 4 cm distance": "This is incorrect. As the perpendicular distance increases, the chord length decreases.",
      "Both chords have equal length": "The chords have different perpendicular distances, so they cannot have equal lengths.",
      "Cannot be determined": "We can determine the chord lengths using the formula: chord length = 2√(r² - d²)."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch9_t2_qe15',
    type: "mcq",
    question: "A chord of a circle is at a distance of 12 cm from the center, and the radius of the circle is 13 cm. What is the length of the chord?",
    options: [
      "5 cm",
      "10 cm",
      "24 cm",
      "26 cm"
    ],
    correctAnswer: "10 cm",
    explanation: "Using the formula: chord length = 2√(r² - d²), where r = 13 cm and d = 12 cm. So, chord length = 2√(13² - 12²) = 2√(169 - 144) = 2√25 = 2 × 5 = 10 cm. 🧮",
    wrongAnswerExplanations: {
      "5 cm": "This is half the chord length (√25 = 5). The complete chord is twice this value.",
      "24 cm": "This is incorrect. The calculation should yield 2√(169 - 144) = 10 cm.",
      "26 cm": "This is twice the radius, which would be the diameter, not the chord length at a distance of 12 cm."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch9_t2_qe16',
    type: "mcq",
    question: "What is the locus of the midpoint of a chord of fixed length in a circle?",
    options: [
      "A straight line",
      "A circle concentric with the original circle",
      "A line passing through the center",
      "The original circle itself"
    ],
    correctAnswer: "A circle concentric with the original circle",
    explanation: "The midpoint of a chord of fixed length traces a circle concentric with the original circle. This is because chords of equal length are equidistant from the center, and their midpoints lie on a circle. 🔄",
    wrongAnswerExplanations: {
      "A straight line": "The midpoints of fixed-length chords do not lie on a straight line but on a circle.",
      "A line passing through the center": "The midpoints form a circle, not a line through the center.",
      "The original circle itself": "The midpoints form a smaller circle inside the original circle, not the original circle itself."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch9_t2_qe17',
    type: "mcq",
    question: "If a chord subtends a 90° angle at the center of a circle, what is the relationship between the chord length and the radius?",
    options: [
      "Chord length = radius",
      "Chord length = diameter",
      "Chord length = radius × √2",
      "Chord length = radius × √3"
    ],
    correctAnswer: "Chord length = radius × √2",
    explanation: "When a chord subtends a 90° angle at the center, it forms an isosceles right triangle. Using the Pythagorean theorem, the chord length equals r√2, where r is the radius. 📐",
    wrongAnswerExplanations: {
      "Chord length = radius": "This is true only when the chord subtends a 60° angle at the center, not 90°.",
      "Chord length = diameter": "The diameter is twice the radius and is a chord that subtends a 180° angle at the center, not 90°.",
      "Chord length = radius × √3": "This would be the chord length if it subtended a 120° angle at the center, not 90°."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch9_t2_qe18',
    type: "mcq",
    question: "In a circle of radius 15 cm, what is the perpendicular distance from the center to a chord whose length is 18 cm?",
    options: [
      "9 cm",
      "12 cm",
      "13 cm",
      "14 cm"
    ],
    correctAnswer: "12 cm",
    explanation: "Using the formula: d = √(r² - (l/2)²), where r = 15 cm and l = 18 cm. So, d = √(15² - 9²) = √(225 - 81) = √144 = 12 cm. 🧮",
    wrongAnswerExplanations: {
      "9 cm": "This is half the chord length, not the perpendicular distance.",
      "13 cm": "This is incorrect. The calculation should yield √(225 - 81) = 12 cm.",
      "14 cm": "This is incorrect. The calculation should yield √(225 - 81) = 12 cm."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch9_t2_qe19',
    type: "mcq",
    question: "If the perpendicular from the center of a circle to a chord makes an angle of 30° with a radius, what can you say about the chord?",
    options: [
      "The chord is a diameter",
      "The chord passes through the center",
      "The chord is perpendicular to that radius",
      "The chord makes a 60° angle with that radius"
    ],
    correctAnswer: "The chord makes a 60° angle with that radius",
    explanation: "If the perpendicular from the center makes an angle of 30° with a radius, then the chord makes a 60° angle with that radius (90° - 30° = 60°). This follows from the properties of perpendicular lines and angle relationships. 📐",
    wrongAnswerExplanations: {
      "The chord is a diameter": "A diameter passes through the center and would have a perpendicular distance of 0, not making a 30° angle with any radius.",
      "The chord passes through the center": "If it passed through the center, it would be a diameter with no perpendicular from center to chord.",
      "The chord is perpendicular to that radius": "If perpendicular to the radius, the angle would be 90°, not 60°."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch9_t2_qe20',
    type: "mcq",
    question: "What is the maximum possible length of a chord in a circle?",
    options: [
      "Equal to radius",
      "Equal to diameter",
      "Equal to circumference",
      "There is no maximum length"
    ],
    correctAnswer: "Equal to diameter",
    explanation: "The maximum length of a chord is equal to the diameter of the circle. This occurs when the chord passes through the center of the circle. Any other chord would be shorter than the diameter. 📏",
    wrongAnswerExplanations: {
      "Equal to radius": "The radius is half the diameter, so a chord can be longer than the radius (up to the diameter).",
      "Equal to circumference": "The circumference is the perimeter of the circle, which is much longer than any straight-line chord through the circle.",
      "There is no maximum length": "There is a maximum length for a chord, which is the diameter of the circle."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  }
];
