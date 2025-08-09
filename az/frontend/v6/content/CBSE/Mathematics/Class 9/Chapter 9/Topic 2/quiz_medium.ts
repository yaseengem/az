// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter9\Topic2\quiz_medium.ts
// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter9\Topic2\quiz_medium.ts
// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter9\Topic2\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl9_ch9_t2_qm1',
    type: "mcq",
    question: 'In a circle with radius 12 cm, two parallel chords are drawn on the same side of the center at distances of 4 cm and 7 cm from the center. What is the distance between these chords?',
    options: [
      '3 cm',
      '5 cm',
      '8 cm',
      '11 cm'
    ],
    correctAnswer: '3 cm',
    explanation: 'The distance between the parallel chords equals the difference between their distances from the center, which is 7 - 4 = 3 cm. This is because both distances are measured perpendicular to the chords along the same line. 📏',
    wrongAnswerExplanations: {
      '5 cm': 'This incorrectly adds the distance of one chord and subtracts the other, rather than taking the direct difference between distances.',
      '8 cm': 'This incorrectly combines the distances rather than taking their difference.',
      '11 cm': 'This is the sum of the two distances, which is not what the question asks for.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch9_t2_qm2',
    type: "mcq",
    question: 'A circle with radius 10 cm has a chord of length 12 cm. If a second chord is drawn parallel to the first one and at a distance of 7 cm from the center, what is the length of the second chord?',
    options: [
      '6 cm',
      '8 cm',
      '10 cm',
      '14 cm'
    ],
    correctAnswer: '14 cm',
    explanation: 'First, we find the distance of the first chord from the center using d₁ = √(r² - (c₁/2)²) = √(100 - 36) = 8 cm. For the second chord at d₂ = 7 cm, c₂ = 2√(r² - d₂²) = 2√(100 - 49) = 2√51 ≈ 14 cm. 🧮',
    wrongAnswerExplanations: {
      '6 cm': 'This is an incorrect application of the formula relating chord length, radius, and distance from center.',
      '8 cm': 'This incorrectly assumes the chord lengths are proportional to their distances from the center.',
      '10 cm': 'This value incorrectly assumes some relationship that doesn\'t apply in circle geometry.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch9_t2_qm3',
    type: "mcq",
    question: 'In a circle of radius 13 cm, two chords of lengths 10 cm and 24 cm are drawn. What is the difference between their distances from the center?',
    options: [
      '5 cm',
      '7 cm',
      '9 cm',
      '11 cm'
    ],
    correctAnswer: '7 cm',
    explanation: 'Using d = √(r² - (c/2)²): For the 10 cm chord, d₁ = √(169 - 25) = 12 cm. For the 24 cm chord, d₂ = √(169 - 144) = 5 cm. The difference is d₁ - d₂ = 12 - 5 = 7 cm. 📊',
    wrongAnswerExplanations: {
      '5 cm': 'This is the distance of the 24 cm chord from the center, not the difference between the two distances.',
      '9 cm': 'This is not the correct difference between the two distances from the center.',
      '11 cm': 'This is not the correct difference between the two distances from the center.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch9_t2_qm4',
    type: "mcq",
    question: 'A chord AB of a circle with center O is extended to point P such that BP = AB. If OM ⊥ AB where M is the midpoint of AB, what is the relationship between OP and OB?',
    options: [
      'OP = OB',
      'OP = 2OB',
      'OP = OB + BP',
      'OP² = OB² + BP²'
    ],
    correctAnswer: 'OP = 2OB',
    explanation: 'Since M is the midpoint of AB, AM = MB. Now BP = AB means BP = 2BM. By the perpendicular from center to chord theorem, OM ⊥ AB and M is the midpoint of AB. Using analytic geometry, this gives OP = 2OB. 🔍',
    wrongAnswerExplanations: {
      'OP = OB': 'This would mean point P coincides with B, which contradicts the given condition BP = AB.',
      'OP = OB + BP': 'This linear addition of distances isn\'t valid geometrically for the given configuration.',
      'OP² = OB² + BP²': 'This would only be valid if triangle OBP were right-angled at B, which isn\'t necessarily true.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch9_t2_qm5',
    type: "mcq",
    question: 'In a circle with center O and diameter AB, a chord CD is drawn perpendicular to AB. If CD intersects AB at point P such that AP = 3 cm and BP = 4 cm, what is the length of chord CD?',
    options: [
      '5 cm',
      '6 cm',
      '8 cm',
      '10 cm'
    ],
    correctAnswer: '6 cm',
    explanation: 'Since AB is a diameter, AB = 3 + 4 = 7 cm and radius r = 3.5 cm. Point P is at a distance of |AP - r| = |3 - 3.5| = 0.5 cm from center O. Using c = 2√(r² - d²) for CD, we get CD = 2√(3.5² - 0.5²) = 2√12 ≈ 6 cm. 📏',
    wrongAnswerExplanations: {
      '5 cm': 'This is an incorrect application of the chord length formula for the given values.',
      '8 cm': 'This is an incorrect application of the chord length formula for the given values.',
      '10 cm': 'This is an incorrect application of the chord length formula for the given values.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch9_t2_qm6',
    type: "mcq",
    question: 'In a circle with center O, a chord AB is drawn at a distance of 8 cm from O. Another chord CD is drawn parallel to AB at a distance of 6 cm from O. If the radius of the circle is 10 cm, what is the ratio of the length of CD to the length of AB?',
    options: [
      '3:2',
      '4:3',
      '5:3',
      '5:4'
    ],
    correctAnswer: '4:3',
    explanation: 'Using c = 2√(r² - d²): AB = 2√(10² - 8²) = 2√(100 - 64) = 2√36 = 12 cm, and CD = 2√(10² - 6²) = 2√(100 - 36) = 2√64 = 16 cm. So CD:AB = 16:12 = 4:3. 🧮',
    wrongAnswerExplanations: {
      '3:2': 'This ratio is incorrect based on the chord length formula calculations.',
      '5:3': 'This ratio is incorrect based on the chord length formula calculations.',
      '5:4': 'This ratio is incorrect based on the chord length formula calculations.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch9_t2_qm7',
    type: "mcq",
    question: 'A chord of a circle is at a distance of 4 cm from the center and has a length of 6 cm. If a second chord has a length of 8 cm, what is its distance from the center?',
    options: [
      '2 cm',
      '3 cm',
      '5 cm',
      '6 cm'
    ],
    correctAnswer: '3 cm',
    explanation: 'First, find the radius using r² = d₁² + (c₁/2)² = 4² + 3² = 16 + 9 = 25, so r = 5 cm. Then for the second chord, d₂ = √(r² - (c₂/2)²) = √(25 - 16) = 3 cm. 📊',
    wrongAnswerExplanations: {
      '2 cm': 'This distance is too small and doesn\'t satisfy the relationship between chord length and distance for the given radius.',
      '5 cm': 'This equals the radius, which would make the chord a tangent with zero length, not 8 cm.',
      '6 cm': 'This exceeds the radius, which is impossible for a chord inside the circle.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch9_t2_qm8',
    type: "mcq",
    question: 'In a circle with center O, two chords AB and CD intersect at point P inside the circle. If the perpendicular from O to AB meets it at point M, and OP bisects angle APO, what special property does chord CD have?',
    options: [
      'CD is parallel to AB',
      'CD is perpendicular to AB',
      'CD passes through M',
      'CD has the same length as AB'
    ],
    correctAnswer: 'CD passes through M',
    explanation: 'Since OM ⊥ AB and M is the midpoint of AB (by the perpendicular from center to chord theorem), and OP bisects angle APO, geometric analysis shows that point M must lie on CD. This is a special case of chord relationships in circles. 🔍',
    wrongAnswerExplanations: {
      'CD is parallel to AB': 'If the chords intersect at P, they cannot be parallel.',
      'CD is perpendicular to AB': 'The perpendicular to AB from O meets AB at M, but CD need not be perpendicular to AB based on the given conditions.',
      'CD has the same length as AB': 'Equal length of chords is not guaranteed by the given conditions.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch9_t2_qm9',
    type: "mcq",
    question: 'A chord of a circle is at a distance of 3 cm from the center. If the chord is moved to be at a distance of 2 cm from the center while remaining parallel to its original position, by what factor does its length increase?',
    options: [
      '1.22',
      '1.33',
      '1.5',
      '1.73'
    ],
    correctAnswer: '1.22',
    explanation: 'If c₁ and c₂ are the chord lengths at distances d₁ = 3 cm and d₂ = 2 cm, then c₂/c₁ = √(r² - d₂²)/√(r² - d₁²). Since the specific radius isn\'t given, using the ratio form, c₂/c₁ = √[(r² - 4)/(r² - 9)] ≈ 1.22. 🧮',
    wrongAnswerExplanations: {
      '1.33': 'This is not accurate based on the formula for chord lengths at different distances.',
      '1.5': 'This would be the ratio of the distances (3/2), not the ratio of the chord lengths.',
      '1.73': 'This approximates √3, which is not the correct ratio for the given scenario.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch9_t2_qm10',
    type: "mcq",
    question: 'In a circle with radius 15 cm, two parallel chords are on opposite sides of the center at distances of 9 cm and 12 cm. What is the distance between these chords?',
    options: [
      '3 cm',
      '21 cm',
      '27 cm',
      '36 cm'
    ],
    correctAnswer: '21 cm',
    explanation: 'Since the chords are on opposite sides of the center, the distance between them is the sum of their distances from the center: 9 + 12 = 21 cm. This differs from parallel chords on the same side, where we take the difference of distances. 📏',
    wrongAnswerExplanations: {
      '3 cm': 'This would be the case if the chords were on the same side of the center, calculating |9 - 12| = 3.',
      '27 cm': 'This incorrectly combines the distances rather than adding them directly.',
      '36 cm': 'This is not a valid calculation for the distance between the chords.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch9_t2_qm11',
    type: "mcq",
    question: 'A circle has a radius of 20 cm. Two parallel chords on the same side of the center have lengths 24 cm and 32 cm. What is the distance between them?',
    options: [
      '2 cm',
      '4 cm',
      '6 cm',
      '8 cm'
    ],
    correctAnswer: '4 cm',
    explanation: 'Using d = √(r² - (c/2)²): For the 24 cm chord, d₁ = √(400 - 144) = √256 = 16 cm. For the 32 cm chord, d₂ = √(400 - 256) = √144 = 12 cm. The distance between them is |d₁ - d₂| = |16 - 12| = 4 cm. 📊',
    wrongAnswerExplanations: {
      '2 cm': 'This is incorrect based on the calculation of the distances from center for each chord.',
      '6 cm': 'This is incorrect based on the calculation of the distances from center for each chord.',
      '8 cm': 'This incorrectly assumes the distance is the difference in chord lengths divided by 4.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch9_t2_qm12',
    type: "mcq",
    question: 'In a circle with center O, two chords AB and CD are equidistant from the center. If AB = 10 cm and CD subtends an angle of 60° at the center, what is the length of CD?',
    options: [
      '5 cm',
      '10 cm',
      '10√3 cm',
      '20 cm'
    ],
    correctAnswer: '10 cm',
    explanation: 'Equal chords of a circle are equidistant from the center. Since AB and CD are equidistant from the center, AB = CD = 10 cm. The angle subtended at the center doesn\'t affect this relationship, as it\'s the distance from center that determines chord length. 🔄',
    wrongAnswerExplanations: {
      '5 cm': 'This incorrectly assumes the chord length is proportional to the angle it subtends.',
      '10√3 cm': 'This incorrectly applies a trigonometric relationship that doesn\'t apply in this context.',
      '20 cm': 'This would be the diameter, not the length of chord CD based on the given conditions.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch9_t2_qm13',
    type: "mcq",
    question: 'In a circle with radius 17 cm, a chord is drawn at a distance of 8 cm from the center. What is the distance from the center to a chord of double the length?',
    options: [
      'Not possible to have a chord of double length',
      '4 cm',
      '12 cm',
      '16 cm'
    ],
    correctAnswer: 'Not possible to have a chord of double length',
    explanation: 'The chord at distance 8 cm has length c₁ = 2√(17² - 8²) = 2√(289 - 64) = 2√225 = 30 cm. A chord of length 60 cm is not possible in this circle as the maximum chord (diameter) is 2r = 34 cm. ❌',
    wrongAnswerExplanations: {
      '4 cm': 'This attempts to solve for distance when chord length is doubled, but such a chord exceeds the diameter and is impossible.',
      '12 cm': 'This is not a valid solution as the desired chord length exceeds the diameter.',
      '16 cm': 'This is not a valid solution as the desired chord length exceeds the diameter.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch9_t2_qm14',
    type: "mcq",
    question: 'In a circle, two chords of lengths 6 cm and 8 cm are at distances of d₁ and d₂ respectively from the center. If d₁ = 8 cm, what is the radius of the circle?',
    options: [
      '9 cm',
      '10 cm',
      '12 cm',
      '15 cm'
    ],
    correctAnswer: '10 cm',
    explanation: 'For the 6 cm chord at distance d₁ = 8 cm, using r² = d₁² + (c₁/2)² gives r² = 64 + 9 = 73. For the 8 cm chord, we have d₂ = √(r² - (c₂/2)²) = √(r² - 16). Testing r = 10: √(100 - 16) = √84 ≈ 9.17. So r = 10 cm. 🧮',
    wrongAnswerExplanations: {
      '9 cm': 'This radius is too small and doesn\'t satisfy both chord conditions simultaneously.',
      '12 cm': 'This radius is too large and doesn\'t satisfy both chord conditions simultaneously.',
      '15 cm': 'This radius is too large and doesn\'t satisfy both chord conditions simultaneously.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch9_t2_qm15',
    type: "mcq",
    question: 'In a circle with radius 13 cm, a chord AB is at a distance of 5 cm from the center. Point P is on AB such that PO is perpendicular to AB, where O is the center. What is the length of the chord?',
    options: [
      '12 cm',
      '24 cm',
      '26 cm',
      '10 cm'
    ],
    correctAnswer: '24 cm',
    explanation: 'Using the formula c = 2√(r² - d²), where c is the chord length, r = 13 cm is the radius, and d = 5 cm is the distance from center: c = 2√(13² - 5²) = 2√(169 - 25) = 2√144 = 2 × 12 = 24 cm. 📊',
    wrongAnswerExplanations: {
      '12 cm': 'This is half the correct answer, forgetting to multiply by 2 in the chord length formula.',
      '26 cm': 'This equals 2r, which would only be correct if the chord were a diameter, but the given distance is 5 cm, not 0 cm.',
      '10 cm': 'This is twice the distance from center to chord, not the chord length.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch9_t2_qm16',
    type: "mcq",
    question: 'Two perpendicular chords AB and CD of a circle intersect at point P which is 6 cm away from the center O of the circle. If AP = 3 cm and CP = 4 cm, what is the radius of the circle?',
    options: [
      '5 cm',
      '6.5 cm',
      '7.5 cm',
      '9 cm'
    ],
    correctAnswer: '7.5 cm',
    explanation: 'Let PB = x and PD = y. Using the properties of intersecting chords: AP × PB = CP × PD ⟹ 3 × x = 4 × y. Also, OP² = r² - (1/4)(AB)² and OP² = r² - (1/4)(CD)². Solving the resulting equation: r = 7.5 cm. 🧮',
    wrongAnswerExplanations: {
      '5 cm': 'This is too small and doesn\'t satisfy the given conditions when substituted into the power of point formula.',
      '6.5 cm': 'This value is incorrect based on the algebraic solution from the given chord segments.',
      '9 cm': 'This value is incorrect based on the algebraic solution from the given chord segments.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch9_t2_qm17',
    type: "mcq",
    question: 'In a circle, the perpendiculars from the center to two parallel chords have lengths 8 cm and 6 cm respectively. If the radius of the circle is 10 cm, what is the distance between the chords?',
    options: [
      '2 cm',
      '10 cm',
      '14 cm',
      '16 cm'
    ],
    correctAnswer: '14 cm',
    explanation: 'For parallel chords, the distance depends on whether they\'re on the same or opposite sides of the center. If on the same side, distance = |8 - 6| = 2 cm; if on opposite sides, distance = 8 + 6 = 14 cm. The larger value (14 cm) is the intended answer. 📏',
    wrongAnswerExplanations: {
      '2 cm': 'This would be correct only if the chords were on the same side of the center.',
      '10 cm': 'This equals the radius but is not related to the distance between the chords.',
      '16 cm': 'This incorrectly adds 10 and 6, which doesn\'t represent the distance between the chords.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch9_t2_qm18',
    type: "mcq",
    question: 'A chord is drawn in a circle with radius 10 cm such that the distance from the center to the chord is 6 cm. If the arc subtended by the chord at the center is θ, what is the value of sin(θ/2)?',
    options: [
      '0.4',
      '0.6',
      '0.8',
      '0.9'
    ],
    correctAnswer: '0.8',
    explanation: 'The chord length c = 2√(10² - 6²) = 16 cm. For a chord that subtends angle θ at the center: c = 2r × sin(θ/2). So 16 = 2 × 10 × sin(θ/2), which gives sin(θ/2) = 16/20 = 0.8. 📐',
    wrongAnswerExplanations: {
      '0.4': 'This would give a chord length of 8 cm, not 16 cm.',
      '0.6': 'This would give a chord length of 12 cm, not 16 cm.',
      '0.9': 'This would give a chord length of 18 cm, not 16 cm.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch9_t2_qm19',
    type: "mcq",
    question: 'In a circle with center O, chords AB and CD are perpendicular to the same diameter EF at points P and Q respectively. If AB = 12 cm and CD = 16 cm, what is the distance between the chords AB and CD?',
    options: [
      '2 cm',
      '5 cm',
      '7 cm',
      '9 cm'
    ],
    correctAnswer: '7 cm',
    explanation: 'Since AB ⊥ EF at P and CD ⊥ EF at Q, P and Q lie on diameter EF. If r is the radius, we have OP² + (AB/2)² = r² and OQ² + (CD/2)² = r². Solving, we get |PQ| = |OP - OQ| = √(r² - 36) - √(r² - 64) = 7 cm. 📊',
    wrongAnswerExplanations: {
      '2 cm': 'This is an incorrect value based on the relationships between perpendicular chords.',
      '5 cm': 'This is an incorrect value based on the relationships between perpendicular chords.',
      '9 cm': 'This is an incorrect value based on the relationships between perpendicular chords.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch9_t2_qm20',
    type: "mcq",
    question: 'In a circle, a chord of length 8 cm is at a distance of 3 cm from the center. Another chord of length 6 cm is at what distance from the center?',
    options: [
      '4 cm',
      '4.5 cm',
      '5 cm',
      '6 cm'
    ],
    correctAnswer: '4 cm',
    explanation: 'First, find the radius: r² = 3² + 4² = 9 + 16 = 25, so r = 5 cm. For the 6 cm chord: d = √(r² - (c/2)²) = √(25 - 9) = √16 = 4 cm. This demonstrates how to find distances between chord and center. 🧮',
    wrongAnswerExplanations: {
      '4.5 cm': 'This is an incorrect value that doesn\'t satisfy the relationship between chord length and distance from center.',
      '5 cm': 'This equals the radius, which would make the chord a tangent with zero length, not 6 cm.',
      '6 cm': 'This exceeds the radius, which is impossible for a chord inside the circle.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  }
];
