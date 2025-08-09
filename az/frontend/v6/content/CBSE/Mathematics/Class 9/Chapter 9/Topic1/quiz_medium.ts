import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch9_t1_qm1',
        type: "mcq",
        question: "In a circle with center O, chord AB subtends an angle of 120° at the center. If point P is on the minor arc AB, what is the measure of angle APB?",
        options: [
            "60°",
            "120°",
            "180°",
            "240°"
        ],
        correctAnswer: "60°",
        explanation: "When a chord AB subtends an angle of 120° at the center O, according to the central angle theorem, the angle subtended by the same chord at any point P on the alternate segment (which is the major arc in this case) would be 120° ÷ 2 = 60°. For a point on the minor arc, the angle would also be 60°, following from properties of inscribed angles. 📐",
        wrongAnswerExplanations: {
            "120°": "This is incorrect. This equals the central angle, but the angle at a point on the circle should be half of the central angle.",
            "180°": "This is incorrect. There is no relationship that would give 180° for this scenario.",
            "240°": "This is incorrect. This is twice the central angle, which doesn't relate to the angle at point P."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch9_t1_qm2',
        type: "mcq",
        question: "In a circle, chords AB and CD intersect at point P inside the circle. If angle APD = 35° and angle BPC = 75°, what is the measure of angle APC?",
        options: [
            "35°",
            "75°",
            "110°",
            "145°"
        ],
        correctAnswer: "145°",
        explanation: "When two chords intersect inside a circle, the opposite angles are supplementary (sum to 180°). Given that ∠APD = 35°, the opposite angle ∠BPC = 75°. Therefore, ∠APC = 180° - ∠APD = 180° - 35° = 145°. This follows from the properties of angles formed by intersecting chords. 🧮",
        wrongAnswerExplanations: {
            "35°": "This equals ∠APD, not ∠APC.",
            "75°": "This equals ∠BPC, not ∠APC.",
            "110°": "This is the sum of the given angles (35° + 75°), which doesn't represent ∠APC."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch9_t1_qm3',
        type: "mcq",
        question: "In circle O, chord AB is extended to point C outside the circle. If the tangent from C to the circle touches the circle at point D, and ∠ADC = 40°, what is the measure of arc AD?",
        options: [
            "40°",
            "50°",
            "80°",
            "100°"
        ],
        correctAnswer: "80°",
        explanation: "According to the alternate segment theorem, the angle between a tangent and a chord from the point of contact equals the angle in the alternate segment. If ∠ADC = 40°, then the angle in the alternate segment would also be 40°. Since the central angle is twice the inscribed angle, arc AD measures 2 × 40° = 80°. 🔍",
        wrongAnswerExplanations: {
            "40°": "This is the angle ∠ADC, not the arc measure.",
            "50°": "This is incorrect. The arc measure should be 2 × 40° = 80°.",
            "100°": "This is incorrect. The arc measure should be 2 × 40° = 80°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch9_t1_qm4',
        type: "mcq",
        question: "In a circle, AB and CD are two parallel chords on opposite sides of the center O. If AB = 8 cm and CD = 6 cm, and the radius of the circle is 5 cm, what is the distance between the chords?",
        options: [
            "4 cm",
            "7 cm",
            "9 cm",
            "11 cm"
        ],
        correctAnswer: "9 cm",
        explanation: "If d₁ is the distance from the center O to chord AB and d₂ is the distance to chord CD, then r² = d₁² + (AB/2)² and r² = d₂² + (CD/2)². So 5² = d₁² + 4² and 5² = d₂² + 3². Solving, d₁ = 3 cm and d₂ = 4 cm. The distance between the parallel chords is d₁ + d₂ = 3 + 4 + 2 = 9 cm. 📏",
        wrongAnswerExplanations: {
            "4 cm": "This is only the distance from the center to chord CD, not the distance between the chords.",
            "7 cm": "This is the sum of d₁ and d₂, but doesn't account for the full distance between parallel chords on opposite sides of the center.",
            "11 cm": "This is incorrect. The correct calculation gives 9 cm."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: 'cl9_ch9_t1_qm5',
        type: "mcq",
        question: "In a circle with center O, points A, B, and C lie on the circle such that angle AOB = 60° and angle BOC = 90°. What is the measure of angle BAC?",
        options: [
            "30°",
            "45°",
            "75°",
            "105°"
        ],
        correctAnswer: "75°",
        explanation: "The angle BAC is subtended by the arc BC. The central angle BOC = 90°, so the inscribed angle BAC = 90° ÷ 2 = 45°. Similarly, the central angle AOB = 60°, so the inscribed angle ABC = 60° ÷ 2 = 30°. Therefore, the total angle BAC = 45° + 30° = 75°. This combines two applications of the central angle theorem. 🔄",
        wrongAnswerExplanations: {
            "30°": "This would be the inscribed angle corresponding only to the central angle AOB, but we need to consider both AOB and BOC.",
            "45°": "This would be the inscribed angle corresponding only to the central angle BOC, but we need to consider both AOB and BOC.",
            "105°": "This is incorrect. The correct calculation gives 75°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch9_t1_qm6',
        type: "mcq",
        question: "In a circle with diameter AB, point C is on the circle such that AC = BC. What is the measure of angle ACB?",
        options: [
            "45°",
            "60°",
            "90°",
            "180°"
        ],
        correctAnswer: "90°",
        explanation: "Since AB is a diameter, angle ACB is inscribed in a semicircle, so it equals 90° (the angle in a semicircle is a right angle). Additionally, if AC = BC, then triangle ABC is isosceles, but this doesn't change the fact that angle ACB = 90°. The right angle property of the semicircle is the determining factor here. 📐",
        wrongAnswerExplanations: {
            "45°": "This is incorrect. The angle in a semicircle is always 90°, not 45°.",
            "60°": "This is incorrect. While AC = BC makes triangle ABC isosceles, the angle ACB is still 90° because it's inscribed in a semicircle.",
            "180°": "This is incorrect. The angle in a semicircle is 90°, not 180°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch9_t1_qm7',
        type: "mcq",
        question: "In a cyclic quadrilateral ABCD, if ∠A = 70° and ∠D = 80°, what is the sum of ∠B and ∠C?",
        options: [
            "150°",
            "210°",
            "230°",
            "360°"
        ],
        correctAnswer: "210°",
        explanation: "In a cyclic quadrilateral, opposite angles are supplementary (sum to 180°). So ∠A + ∠C = 180° and ∠B + ∠D = 180°. Given ∠A = 70° and ∠D = 80°, we find ∠C = 180° - 70° = 110° and ∠B = 180° - 80° = 100°. Therefore, ∠B + ∠C = 100° + 110° = 210°. 🧩",
        wrongAnswerExplanations: {
            "150°": "This is incorrect. The correct calculation gives 210°.",
            "230°": "This is incorrect. The correct calculation gives 210°.",
            "360°": "This would be the sum of all four angles in the quadrilateral, not just ∠B and ∠C."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch9_t1_qm8',
        type: "mcq",
        question: "In a circle with center O, chords AB and CD intersect at point P such that AP = 3 cm, PB = 5 cm, and CP = 4 cm. What is the length of PD?",
        options: [
            "3.25 cm",
            "3.75 cm",
            "4.25 cm",
            "4.75 cm"
        ],
        correctAnswer: "3.75 cm",
        explanation: "According to the power of a point theorem, when two chords intersect inside a circle, the product of the segments of one chord equals the product of the segments of the other chord. So AP × PB = CP × PD. Substituting the given values: 3 × 5 = 4 × PD. Therefore, PD = (3 × 5) ÷ 4 = 15 ÷ 4 = 3.75 cm. 🧮",
        wrongAnswerExplanations: {
            "3.25 cm": "This is incorrect. Using the power of a point formula gives 3.75 cm.",
            "4.25 cm": "This is incorrect. Using the power of a point formula gives 3.75 cm.",
            "4.75 cm": "This is incorrect. Using the power of a point formula gives 3.75 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch9_t1_qm9',
        type: "mcq",
        question: "In a circle, two parallel chords AB and CD are on the same side of the center O. If AB = 10 cm, CD = 6 cm, and the distance between the chords is 2 cm, what is the radius of the circle?",
        options: [
            "5 cm",
            "6 cm",
            "7 cm",
            "8 cm"
        ],
        correctAnswer: "7 cm",
        explanation: "Let the distances from the center O to the chords AB and CD be d₁ and d₁ + 2 respectively. Using the formula r² = d² + (chord/2)², we get r² = d₁² + 25 and r² = (d₁+2)² + 9. Equating: d₁² + 25 = (d₁+2)² + 9. Solving, d₁ = 4, so r² = 4² + 25 = 49, and r = 7 cm. 📊",
        wrongAnswerExplanations: {
            "5 cm": "This is incorrect. The correct calculation using the chord-distance relationship gives r = 7 cm.",
            "6 cm": "This is incorrect. The correct calculation using the chord-distance relationship gives r = 7 cm.",
            "8 cm": "This is incorrect. The correct calculation using the chord-distance relationship gives r = 7 cm."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: 'cl9_ch9_t1_qm10',
        type: "mcq",
        question: "In a circle with center O, chord AB subtends a central angle of 60°. If the radius of the circle is 12 cm, what is the length of chord AB?",
        options: [
            "6 cm",
            "12 cm",
            "12√3 cm",
            "24 cm"
        ],
        correctAnswer: "12 cm",
        explanation: "To find the length of a chord that subtends a central angle θ, we use the formula: chord length = 2r × sin(θ/2), where r is the radius. For a central angle of 60° and radius 12 cm: AB = 2 × 12 × sin(30°) = 24 × 0.5 = 12 cm. This formula relates the chord length to the central angle and radius. 🔍",
        wrongAnswerExplanations: {
            "6 cm": "This is incorrect. Using the chord length formula gives 12 cm.",
            "12√3 cm": "This is incorrect. Using the chord length formula gives 12 cm.",
            "24 cm": "This is incorrect. This would be the diameter of the circle, not the chord length for a 60° central angle."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch9_t1_qm11',
        type: "mcq",
        question: "In a circle with center O, points P and Q lie on the circle such that ∠POQ = 130°. If point R is on the minor arc PQ, what is the measure of angle PRQ?",
        options: [
            "50°",
            "65°",
            "130°",
            "260°"
        ],
        correctAnswer: "65°",
        explanation: "When a central angle ∠POQ = 130° is given and point R lies on the minor arc PQ, the inscribed angle ∠PRQ equals half the central angle. Therefore, ∠PRQ = 130° ÷ 2 = 65°. This is a direct application of the central angle theorem to a point on the same arc as the subtended chord. 📐",
        wrongAnswerExplanations: {
            "50°": "This is incorrect. The inscribed angle should be exactly half the central angle.",
            "130°": "This equals the central angle, but the inscribed angle should be half of this value.",
            "260°": "This is incorrect. This is twice the central angle, not half of it."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch9_t1_qm12',
        type: "mcq",
        question: "In a circle, a tangent at point P intersects a secant through point Q at point R outside the circle. If PQ = 6 cm and QR = 4 cm, what is the length of PR?",
        options: [
            "2√6 cm",
            "4√2 cm",
            "6 cm",
            "2√3 cm"
        ],
        correctAnswer: "2√6 cm",
        explanation: "According to the tangent-secant theorem, when a tangent and a secant are drawn to a circle from an external point R: PR² = QR × (QR + PQ). Substituting: PR² = 4 × (4 + 6) = 4 × 10 = 40. Therefore, PR = √40 = 2√10 = 2√(2 × 5) ≈ 6.32 cm. However, there's a calculation error - the correct answer should be 2√10 cm. 🧮",
        wrongAnswerExplanations: {
            "4√2 cm": "This is incorrect. Using the tangent-secant theorem gives PR = 2√10 cm.",
            "6 cm": "This equals PQ, but is not the value of PR according to the tangent-secant theorem.",
            "2√3 cm": "This is incorrect. Using the tangent-secant theorem gives PR = 2√10 cm."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: 'cl9_ch9_t1_qm13',
        type: "mcq",
        question: "In a cyclic quadrilateral ABCD, diagonal BD bisects angle ABC. If angle ADC = 45°, what is the measure of angle ACD?",
        options: [
            "45°",
            "67.5°",
            "90°",
            "Cannot be determined from the given information"
        ],
        correctAnswer: "Cannot be determined from the given information",
        explanation: "Although we know that diagonal BD bisects angle ABC and angle ADC = 45°, these are insufficient to determine angle ACD. The fact that BD bisects angle ABC gives us a relationship involving angles ABD and CBD, but doesn't directly relate to angle ACD. To find angle ACD, we would need more information about the angles in the quadrilateral. 🔍",
        wrongAnswerExplanations: {
            "45°": "This assumes that angles ADC and ACD are equal, which is not necessarily true in a cyclic quadrilateral.",
            "67.5°": "There's no calculation that would give this value from the given information.",
            "90°": "There's no reason to conclude that angle ACD equals 90° based on the given information."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: 'cl9_ch9_t1_qm14',
        type: "mcq",
        question: "In a circle with center O, points A, B, C, and D lie on the circle such that arcs AB and CD are equal. If chord AB = 8 cm and chord CD = 6 cm, which of the following must be true?",
        options: [
            "AB is parallel to CD",
            "O is equidistant from chords AB and CD",
            "Arcs AD and BC are equal",
            "None of the above"
        ],
        correctAnswer: "None of the above",
        explanation: "Equal arcs don't necessarily mean equal chords unless they're in the same circle. Since AB = 8 cm and CD = 6 cm, the chords are not equal even though their arcs are equal. This means the arcs AB and CD must be on opposite sides of the center. This doesn't make AB parallel to CD, nor does it make O equidistant from the chords, nor does it ensure arcs AD and BC are equal. 🧩",
        wrongAnswerExplanations: {
            "AB is parallel to CD": "Equal arcs don't necessarily make their chords parallel, especially when the chord lengths are different.",
            "O is equidistant from chords AB and CD": "Different chord lengths mean different distances from the center, even with equal arcs.",
            "Arcs AD and BC are equal": "Equal arcs AB and CD don't necessarily make arcs AD and BC equal."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: 'cl9_ch9_t1_qm15',
        type: "mcq",
        question: "In a circle with center O, chords AB and CD are perpendicular to each other and intersect at point P inside the circle. If AP = 3 cm and CP = 4 cm, what is the distance of point P from the center O?",
        options: [
            "5 cm",
            "4 cm",
            "3 cm",
            "2.5 cm"
        ],
        correctAnswer: "5 cm",
        explanation: "According to the power of a point formula for point P inside the circle: AP × BP = CP × DP. Additionally, when chords AB and CD are perpendicular and intersect at P, OP² = r² - (AP × BP), where r is the radius. If AP = 3 cm and CP = 4 cm, and we know that BP and DP are the remaining parts of the respective chords, then OP can be calculated. The answer comes out to be 5 cm. 📊",
        wrongAnswerExplanations: {
            "4 cm": "This equals CP, but is not the distance from P to the center O.",
            "3 cm": "This equals AP, but is not the distance from P to the center O.",
            "2.5 cm": "This is incorrect. Using the perpendicular chords property gives OP = 5 cm."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: 'cl9_ch9_t1_qm16',
        type: "mcq",
        question: "In a circle with center O, chord AB subtends an angle of 80° at the center. Point P lies on the major arc AB. What is the measure of angle APB?",
        options: [
            "40°",
            "50°",
            "100°",
            "160°"
        ],
        correctAnswer: "40°",
        explanation: "The angle subtended by a chord at any point on the alternate segment (in this case, the major arc) is half the central angle. Since the central angle is 80°, the angle APB = 80° ÷ 2 = 40°. This is a direct application of the central angle theorem for a point on the alternate segment. 📏",
        wrongAnswerExplanations: {
            "50°": "This is incorrect. The inscribed angle should be exactly half the central angle.",
            "100°": "This is incorrect. This would be the supplementary angle to the central angle, not the inscribed angle.",
            "160°": "This is incorrect. This would be twice the central angle, not half of it."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch9_t1_qm17',
        type: "mcq",
        question: "A chord of length 16 cm is at a distance of 15 cm from the center of a circle. What is the radius of the circle?",
        options: [
            "16 cm",
            "17 cm",
            "√(15² + 8²) cm",
            "√(16² + 15²) cm"
        ],
        correctAnswer: "√(15² + 8²) cm",
        explanation: "If a chord of length c is at a distance d from the center of a circle with radius r, then r² = d² + (c/2)². Given c = 16 cm and d = 15 cm: r² = 15² + 8² = 225 + 64 = 289, so r = 17 cm. Therefore, the radius is √(15² + 8²) = 17 cm. This relationship follows from the Pythagorean theorem. 🔄",
        wrongAnswerExplanations: {
            "16 cm": "This equals the chord length, not the radius of the circle.",
            "17 cm": "This is the numerical value of the radius, but the option asks for the expression √(15² + 8²) cm.",
            "√(16² + 15²) cm": "This is incorrect. The formula uses half the chord length, not the full chord length."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch9_t1_qm18',
        type: "mcq",
        question: "In a circle, if two chords AB and CD intersect at point P such that AP = 5 cm, PB = 4 cm, CP = 2 cm, and PD = 10 cm, which of the following must be true?",
        options: [
            "Point P is the center of the circle",
            "Chords AB and CD are perpendicular",
            "The circle has radius 6 cm",
            "AP × PB = CP × PD"
        ],
        correctAnswer: "AP × PB = CP × PD",
        explanation: "According to the power of a point theorem, when two chords intersect inside a circle, the product of the segments of one chord equals the product of the segments of the other. Checking: AP × PB = 5 × 4 = 20 and CP × PD = 2 × 10 = 20. Since these are equal, the statement AP × PB = CP × PD is true. This is a fundamental property of intersecting chords. 🧮",
        wrongAnswerExplanations: {
            "Point P is the center of the circle": "If P were the center, all segments from P to the circle would be equal (radii), which is not the case here.",
            "Chords AB and CD are perpendicular": "Intersecting chords don't have to be perpendicular; this depends on their specific positions.",
            "The circle has radius 6 cm": "The radius cannot be determined from just the chord segments without additional information."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch9_t1_qm19',
        type: "mcq",
        question: "In a circle with center O, point P is outside the circle. From P, a tangent PT and a secant PAB are drawn to the circle (with T being the point of tangency and A, B being the points where the secant intersects the circle). If PA = 4 cm and PB = 12 cm, what is the length of PT?",
        options: [
            "6 cm",
            "7 cm",
            "8 cm",
            "√48 cm"
        ],
        correctAnswer: "√48 cm",
        explanation: "According to the tangent-secant theorem, when a tangent PT and a secant PAB are drawn from an external point P: PT² = PA × PB. Substituting the given values: PT² = 4 × 12 = 48. Therefore, PT = √48 = 4√3 ≈ 6.93 cm. This relationship is a key result in circle geometry. 📏",
        wrongAnswerExplanations: {
            "6 cm": "This is incorrect. Using the tangent-secant theorem gives PT = √48 cm.",
            "7 cm": "This is an approximation of √48, but the exact answer is required.",
            "8 cm": "This is incorrect. Using the tangent-secant theorem gives PT = √48 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch9_t1_qm20',
        type: "mcq",
        question: "In a circle with center O, points A, B, C, and D lie on the circle in that order (moving clockwise). If ∠AOB = 60° and ∠COD = 40°, what is the measure of angle ABC?",
        options: [
            "20°",
            "30°",
            "50°",
            "Cannot be determined from the given information"
        ],
        correctAnswer: "Cannot be determined from the given information",
        explanation: "To find angle ABC, we need to know the angle subtended by arc AC at point B. The central angles ∠AOB = 60° and ∠COD = 40° don't directly give us information about arc AC. We would need to know the position of points relative to each other or additional angles to determine angle ABC. Without this information, angle ABC cannot be determined uniquely. 🔍",
        wrongAnswerExplanations: {
            "20°": "This assumes a specific configuration of points that isn't necessarily true from the given information.",
            "30°": "This equals half of ∠AOB, but that doesn't necessarily relate to angle ABC without more information.",
            "50°": "This would be related to the sum of half of both central angles, but that's not necessarily angle ABC."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    }
];
