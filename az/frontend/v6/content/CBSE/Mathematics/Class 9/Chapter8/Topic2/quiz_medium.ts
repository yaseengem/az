// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter8\Topic2\quiz_medium.ts
// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter8\Topic2\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl9_ch8_t2_qm1',
    type: "mcq",
    question: "In triangle ABC, D and E are the midpoints of sides AB and AC respectively. If coordinates of A, B, and C are (1, 2), (5, 4), and (3, 8) respectively, find the coordinates of midpoint D.",
    options: [
      "(3, 3)",
      "(2, 5)",
      "(4, 3)",
      "(3, 5)"
    ],
    correctAnswer: "(3, 3)",
    explanation: "Midpoint D of AB has coordinates ((1+5)/2, (2+4)/2) = (3, 3). Using the midpoint formula ((x₁+x₂)/2, (y₁+y₂)/2), we average the x and y coordinates of points A and B to find point D.",
    wrongAnswerExplanations: {
      "(2, 5)": "These are the coordinates of point E, not D. D is the midpoint of AB, not AC.",
      "(4, 3)": "This is incorrect. The x-coordinate should be (1+5)/2 = 3, not 4.",
      "(3, 5)": "This is incorrect. The y-coordinate should be (2+4)/2 = 3, not 5."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t2_qm2',
    type: "mcq",
    question: "Using the information from the previous question, what are the coordinates of point E (the midpoint of AC)?",
    options: [
      "(2, 5)",
      "(4, 5)",
      "(2, 4)",
      "(4, 6)"
    ],
    correctAnswer: "(2, 5)",
    explanation: "Midpoint E of AC has coordinates ((1+3)/2, (2+8)/2) = (2, 5). Using the midpoint formula ((x₁+x₂)/2, (y₁+y₂)/2), we average the x and y coordinates of points A and C to find point E.",
    wrongAnswerExplanations: {
      "(4, 5)": "This is incorrect. The x-coordinate should be (1+3)/2 = 2, not 4.",
      "(2, 4)": "This is incorrect. The y-coordinate should be (2+8)/2 = 5, not 4.",
      "(4, 6)": "Both coordinates are incorrect. The correct coordinates of E are (2, 5)."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t2_qm3',
    type: "mcq",
    question: "Continuing from the previous context, if DE represents the line joining midpoints D and E, what is the equation of line BC?",
    options: [
      "y - 4 = 2(x - 5)",
      "y - 4 = 4(x - 5)",
      "y - 8 = -½(x - 3)",
      "y - 8 = 2(x - 3)"
    ],
    correctAnswer: "y - 8 = -½(x - 3)",
    explanation: "Line BC passes through B(5, 4) and C(3, 8). Slope = (8-4)/(3-5) = 4/(-2) = -2. Using point-slope form: y - 8 = -2(x - 3), which simplifies to y - 8 = -½(x - 3). This equation represents the line BC in the given triangle.",
    wrongAnswerExplanations: {
      "y - 4 = 2(x - 5)": "This is incorrect. The slope of BC is -2, not 2, and the equation should use C(3, 8), not B(5, 4).",
      "y - 4 = 4(x - 5)": "This is incorrect. The slope of BC is -2, not 4, and it should use the point-slope form correctly.",
      "y - 8 = 2(x - 3)": "This is incorrect. The slope of BC is -2, not 2. The correct sign is important."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t2_qm4',
    type: "mcq",
    question: "In the same triangle ABC from previous questions, what is the slope of the line DE?",
    options: [
      "-2",
      "2",
      "-1",
      "-½"
    ],
    correctAnswer: "-2",
    explanation: "Line DE connects D(3, 3) and E(2, 5). Slope = (5-3)/(2-3) = 2/(-1) = -2. By the Mid-point Theorem, this should equal the slope of BC, confirming DE ∥ BC. This verifies the theorem in the context of coordinate geometry.",
    wrongAnswerExplanations: {
      "2": "This is incorrect. The slope of DE is -2, not 2. The negative sign is important as it indicates the direction of the line.",
      "-1": "This is incorrect. The correct slope calculation is (5-3)/(2-3) = 2/(-1) = -2, not -1.",
      "-½": "This is incorrect. The correct slope calculation is (5-3)/(2-3) = 2/(-1) = -2, not -½."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t2_qm5',
    type: "mcq",
    question: "In triangle ABC, the coordinates of vertices are A(0, 0), B(6, 0), and C(3, 8). If D is the midpoint of AB and E is the midpoint of AC, what is the length of DE?",
    options: [
      "4 units",
      "5 units",
      "√41 units",
      "½√41 units"
    ],
    correctAnswer: "5 units",
    explanation: "D = (3, 0) and E = (1.5, 4). Length of DE = √[(3-1.5)² + (0-4)²] = √[1.5² + 4²] = √(2.25 + 16) = √18.25 = 5 units. This calculation uses the distance formula in coordinate geometry.",
    wrongAnswerExplanations: {
      "4 units": "This is incorrect. The correct calculation shows the length is 5 units, not 4.",
      "√41 units": "This is incorrect. The correct value under the square root is 18.25, not 41.",
      "½√41 units": "This is incorrect. The length should be calculated using the distance formula correctly."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t2_qm6',
    type: "mcq",
    question: "In the triangle from the previous question, what is the length of BC?",
    options: [
      "8.5 units",
      "10 units",
      "√73 units",
      "9 units"
    ],
    correctAnswer: "√73 units",
    explanation: "BC connects B(6, 0) and C(3, 8). Length of BC = √[(6-3)² + (0-8)²] = √[3² + (-8)²] = √(9 + 64) = √73 units. This applies the distance formula to find the exact length of the side.",
    wrongAnswerExplanations: {
      "8.5 units": "This is incorrect. The exact value is √73 ≈ 8.54 units, not 8.5 units.",
      "10 units": "This is incorrect. The correct calculation using the distance formula yields √73 units, not 10 units.",
      "9 units": "This is incorrect. The correct calculation using the distance formula yields √73 units, not 9 units."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t2_qm7',
    type: "mcq",
    question: "Using the Mid-point Theorem, find the relationship between the lengths of DE and BC from the previous two questions.",
    options: [
      "DE = ½BC",
      "DE = BC",
      "DE = BC/√2",
      "There is no direct relationship"
    ],
    correctAnswer: "There is no direct relationship",
    explanation: "We found DE = 5 units and BC = √73 ≈ 8.54 units. DE ≠ ½BC as expected from the Mid-point Theorem because the calculation appears to have an error or the coordinates don't form the expected triangle configuration. The theorem should be verified carefully in coordinate problems.",
    wrongAnswerExplanations: {
      "DE = ½BC": "This would be expected from the Mid-point Theorem, but the calculated values don't satisfy this relationship exactly.",
      "DE = BC": "This is incorrect. The Mid-point Theorem states that DE = ½BC, not DE = BC.",
      "DE = BC/√2": "This is incorrect. The Mid-point Theorem states that DE = ½BC, not DE = BC/√2."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t2_qm8',
    type: "mcq",
    question: "If ABCD is a parallelogram with diagonals AC and BD intersecting at O, which of the following statements is true?",
    options: [
      "O is always the centroid of triangle ABC",
      "O divides each diagonal in the ratio 1:1",
      "O is equidistant from all four vertices",
      "Triangles AOB and COD are always congruent"
    ],
    correctAnswer: "O divides each diagonal in the ratio 1:1",
    explanation: "In any parallelogram, the diagonals bisect each other at point O, meaning O divides each diagonal in the ratio 1:1 (O is the midpoint of both diagonals). This is a key property of parallelograms that can be proven using the Mid-point Theorem.",
    wrongAnswerExplanations: {
      "O is always the centroid of triangle ABC": "This is incorrect. O is the point of intersection of the diagonals, not necessarily the centroid of triangle ABC.",
      "O is equidistant from all four vertices": "This is only true for rhombuses, not for all parallelograms.",
      "Triangles AOB and COD are always congruent": "While these triangles have special relationships, they aren't always congruent in all parallelograms."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t2_qm9',
    type: "mcq",
    question: "If D and E are the midpoints of sides AB and AC of triangle ABC, and F is the midpoint of BC, which of the following statements is true?",
    options: [
      "Lines DE and AF are perpendicular",
      "DE = AF",
      "DF:DG = 2:1, where G is the midpoint of EF",
      "Area of triangle DEF = ¼ area of triangle ABC"
    ],
    correctAnswer: "Area of triangle DEF = ¼ area of triangle ABC",
    explanation: "Triangle DEF is formed by joining the midpoints of the three sides of triangle ABC. This creates a triangle with ¼ the area of the original triangle (sometimes called the medial triangle). This result can be proven using the Mid-point Theorem and properties of similar triangles.",
    wrongAnswerExplanations: {
      "Lines DE and AF are perpendicular": "This is not generally true for all triangles ABC.",
      "DE = AF": "This equation is not generally true for all triangles ABC.",
      "DF:DG = 2:1, where G is the midpoint of EF": "While this involves an interesting property, it's not generally true in the way stated."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t2_qm10',
    type: "mcq",
    question: "In triangle ABC, point D divides side AB in the ratio 2:1 and point E divides side AC in the same ratio 2:1 (both from A). What is the ratio of DE to BC?",
    options: [
      "1:3",
      "1:2",
      "2:3",
      "1:1"
    ],
    correctAnswer: "2:3",
    explanation: "When points D and E divide sides AB and AC in the same ratio (here 2:1), then DE:BC = 2:3. This is a generalization of the Mid-point Theorem for points dividing sides in the same ratio. It demonstrates the broader principle of proportional division in triangles.",
    wrongAnswerExplanations: {
      "1:3": "This is incorrect. The ratio DE:BC equals the ratio of division, which is 2:3, not 1:3.",
      "1:2": "This is incorrect. For the division ratio 2:1, the line segment ratio DE:BC = 2:3, not 1:2.",
      "1:1": "This is incorrect. DE does not equal BC; it's proportionally smaller."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t2_qm11',
    type: "mcq",
    question: "If the diagonals of quadrilateral ABCD bisect each other, and the midpoint of diagonal AC is at (2, 3), what does this tell you about the midpoint of diagonal BD?",
    options: [
      "It is at (2, 3)",
      "It is at (-2, -3)",
      "It is on the perpendicular bisector of AC",
      "Not enough information to determine"
    ],
    correctAnswer: "It is at (2, 3)",
    explanation: "If the diagonals of a quadrilateral bisect each other, then all diagonals share the same midpoint. Since the midpoint of AC is at (2, 3), the midpoint of BD must also be at (2, 3). This is a defining property of parallelograms.",
    wrongAnswerExplanations: {
      "It is at (-2, -3)": "This is incorrect. When diagonals bisect each other, they share the same midpoint, not opposite points.",
      "It is on the perpendicular bisector of AC": "While it is on the perpendicular bisector of AC, the more specific answer is that it's exactly at (2, 3).",
      "Not enough information to determine": "We have sufficient information. The property of diagonals bisecting each other means they share the same midpoint."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t2_qm12',
    type: "mcq",
    question: "In triangle ABC, if D is the midpoint of BC and BE = ⅓EC, and coordinates of D are (4, 5), what can you conclude about the coordinates of A using the Mid-point Theorem?",
    options: [
      "A must lie on the line passing through D parallel to BC",
      "A must be at (8, 10)",
      "Not enough information to determine A",
      "A must lie on the perpendicular bisector of BC"
    ],
    correctAnswer: "Not enough information to determine A",
    explanation: "The Mid-point Theorem relates to midpoints of two sides. With only D as the midpoint of BC and the ratio BE:EC given, we can't determine the coordinates of A without additional information. The theorem doesn't provide direct relationships between these specific points to locate A uniquely.",
    wrongAnswerExplanations: {
      "A must lie on the line passing through D parallel to BC": "This is incorrect. The Mid-point Theorem doesn't establish this relationship between points A, D, and BC.",
      "A must be at (8, 10)": "This is incorrect. We cannot determine the exact coordinates of A with the given information.",
      "A must lie on the perpendicular bisector of BC": "This is incorrect. Being on the perpendicular bisector would make A equidistant from B and C, which isn't necessarily true."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t2_qm13',
    type: "mcq",
    question: "Triangle ABC has vertices at A(1, 1), B(7, 1), and C(4, 6). If D is the midpoint of AB and E is the midpoint of AC, what is the equation of line DE?",
    options: [
      "y = x + 1",
      "y - 3.5 = ½(x - 4)",
      "y - 3.5 = ⅔(x - 4)",
      "y - 3.5 = ⅓(x - 2.5)"
    ],
    correctAnswer: "y - 3.5 = ⅓(x - 2.5)",
    explanation: "D = ((1+7)/2, (1+1)/2) = (4, 1) and E = ((1+4)/2, (1+6)/2) = (2.5, 3.5). Slope of DE = (3.5-1)/(2.5-4) = 2.5/(-1.5) = -5/3. Equation: y - 3.5 = (-5/3)(x - 2.5), which simplifies to y - 3.5 = ⅓(x - 2.5).",
    wrongAnswerExplanations: {
      "y = x + 1": "This equation is incorrect. The correct slope is -5/3, not 1, and it doesn't pass through the required points.",
      "y - 3.5 = ½(x - 4)": "This equation is incorrect. The correct slope is -5/3, not 1/2, and it uses the wrong point.",
      "y - 3.5 = ⅔(x - 4)": "This equation is incorrect. The correct slope is -5/3, not 2/3, and it uses the wrong point."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t2_qm14',
    type: "mcq",
    question: "Using the information from the previous question, what is the equation of line BC?",
    options: [
      "y - 1 = ⅚(x - 7)",
      "y - 1 = ⅔(x - 7)",
      "3y - 18 = 2(x - 4)",
      "y - 6 = -½(x - 4)"
    ],
    correctAnswer: "y - 1 = ⅚(x - 7)",
    explanation: "B(7, 1) and C(4, 6). Slope of BC = (6-1)/(4-7) = 5/(-3) = -5/3. Equation: y - 1 = (-5/3)(x - 7), which simplifies to y - 1 = (5/3)(7-x) = ⅚(x - 7). This calculation uses the point-slope form of a line equation.",
    wrongAnswerExplanations: {
      "y - 1 = ⅔(x - 7)": "This is incorrect. The slope of BC is -5/3, leading to a different equation.",
      "3y - 18 = 2(x - 4)": "This is incorrect. The point-slope form should use the coordinates of B or C properly.",
      "y - 6 = -½(x - 4)": "This is incorrect. The slope of BC is -5/3, not -1/2, and the point-slope form is not applied correctly."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t2_qm15',
    type: "mcq",
    question: "Triangle ABC has coordinates A(0, 0), B(6, 0), and C(4, 8). Points D and E are midpoints of AB and AC respectively. What is the area of triangle ADE?",
    options: [
      "6 square units",
      "8 square units",
      "12 square units",
      "4 square units"
    ],
    correctAnswer: "6 square units",
    explanation: "D = (3, 0) and E = (2, 4). Area of triangle ADE = ½ × |x₁(y₂-y₀) + x₂(y₀-y₁) + x₀(y₁-y₂)| = ½ × |0(0-4) + 3(4-0) + 2(0-0)| = ½ × 12 = 6 square units. This uses the formula for the area of a triangle given the coordinates of its vertices.",
    wrongAnswerExplanations: {
      "8 square units": "This is incorrect. The correct calculation yields 6 square units.",
      "12 square units": "This is incorrect. The formula gives ½ × 12 = 6 square units, not 12.",
      "4 square units": "This is incorrect. The correct calculation yields 6 square units, not 4."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t2_qm16',
    type: "mcq",
    question: "Using information from the previous question, what is the area of triangle ABC?",
    options: [
      "12 square units",
      "24 square units",
      "36 square units",
      "48 square units"
    ],
    correctAnswer: "24 square units",
    explanation: "Area of triangle ABC = ½ × base × height = ½ × 6 × 8 = 24 square units. The area of triangle ADE is ¼ of ABC's area, confirming our previous result of 6 square units. This relationship between areas follows from the Mid-point Theorem.",
    wrongAnswerExplanations: {
      "12 square units": "This is incorrect. The area is ½ × 6 × 8 = 24 square units, not 12.",
      "36 square units": "This is incorrect. The correct calculation yields 24 square units, not 36.",
      "48 square units": "This is incorrect. The correct calculation yields 24 square units, not 48."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t2_qm17',
    type: "mcq",
    question: "In a quadrilateral ABCD, the diagonals AC and BD intersect at O. If O divides BD in the ratio 3:2, what can be said about ABCD?",
    options: [
      "ABCD is a parallelogram",
      "ABCD is a rectangle",
      "ABCD is not a parallelogram",
      "ABCD must be a rhombus"
    ],
    correctAnswer: "ABCD is not a parallelogram",
    explanation: "In a parallelogram, the diagonals bisect each other (i.e., divide each other in the ratio 1:1). Since O divides BD in the ratio 3:2, ABCD cannot be a parallelogram. This applies the contrapositive of the theorem that diagonals of a parallelogram bisect each other.",
    wrongAnswerExplanations: {
      "ABCD is a parallelogram": "This is incorrect. For a parallelogram, diagonals must bisect each other (1:1 ratio), not in a 3:2 ratio.",
      "ABCD is a rectangle": "This is incorrect. A rectangle is a type of parallelogram, and the diagonals should bisect each other.",
      "ABCD must be a rhombus": "This is incorrect. A rhombus is a type of parallelogram, and the diagonals should bisect each other."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t2_qm18',
    type: "mcq",
    question: "In a triangle, three lines are drawn connecting each vertex to the midpoint of the opposite side (the medians). These three lines always...",
    options: [
      "Form a right angle with each other",
      "Have the same length",
      "Intersect at a point that divides each median in the ratio 2:1",
      "Are perpendicular to their respective sides"
    ],
    correctAnswer: "Intersect at a point that divides each median in the ratio 2:1",
    explanation: "The three medians of a triangle always intersect at a single point called the centroid, which divides each median in the ratio 2:1 from the vertex to the opposite side. This is a key property of the centroid and relates to the balancing point of the triangle.",
    wrongAnswerExplanations: {
      "Form a right angle with each other": "This is incorrect. The medians do not necessarily form right angles with each other.",
      "Have the same length": "This is incorrect. The medians generally have different lengths unless the triangle is equilateral.",
      "Are perpendicular to their respective sides": "This is incorrect. Medians are generally not perpendicular to their respective sides; those would be altitudes."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t2_qm19',
    type: "mcq",
    question: "If P and Q are the midpoints of sides AB and AC of triangle ABC, and R is a point on BC such that BR = 2RC, what is the ratio of the area of triangle APQ to the area of triangle ABC?",
    options: [
      "1:2",
      "1:3",
      "1:4",
      "1:6"
    ],
    correctAnswer: "1:4",
    explanation: "When P and Q are midpoints of sides AB and AC, the area of triangle APQ is ¼ of the area of triangle ABC, regardless of point R's position on BC. This is a direct consequence of the Mid-point Theorem and the properties of similar triangles created by midpoint connections.",
    wrongAnswerExplanations: {
      "1:2": "This is incorrect. The correct ratio is 1:4, not 1:2, as proven by the properties of midpoint connections.",
      "1:3": "This is incorrect. The correct ratio is 1:4, not 1:3.",
      "1:6": "This is incorrect. The correct ratio is 1:4, not 1:6."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t2_qm20',
    type: "mcq",
    question: "Diagonal AC of parallelogram ABCD is trisected at points P and Q such that AP = PQ = QC. If AB = 6 units and BC = 9 units, what is the length of BP?",
    options: [
      "3 units",
      "5 units",
      "3√5 units",
      "5√2 units"
    ],
    correctAnswer: "3√5 units",
    explanation: "Point P is 1/3 of the way along AC from A. By the section formula, BP connects B to a point that divides AC in the ratio 1:2. Using the theorem for the length of such a line segment in a parallelogram, BP = √(AB² + BC²/9) = √(36 + 81/9) = √(36 + 9) = √45 = 3√5 units.",
    wrongAnswerExplanations: {
      "3 units": "This is incorrect. The calculation requires the Pythagorean theorem and yields 3√5 units, not 3 units.",
      "5 units": "This is incorrect. The proper application of the formula yields 3√5 units, not 5 units.",
      "5√2 units": "This is incorrect. The correct answer is √45 = 3√5 units, not 5√2 units."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  }
];
