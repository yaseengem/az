// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter8\Topic2\quiz_easy.ts
// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter8\Topic2\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl9_ch8_t2_qe1',
    type: "mcq",
    question: "According to the Mid-point Theorem, the line joining the midpoints of two sides of a triangle is...",
    options: [
      "Perpendicular to the third side",
      "Parallel to the third side and equal to its length",
      "Parallel to the third side and equal to half its length",
      "Equal to the third side but not necessarily parallel"
    ],
    correctAnswer: "Parallel to the third side and equal to half its length",
    explanation: "The Mid-point Theorem states that the line joining the midpoints of two sides of a triangle is parallel to the third side and equal to half its length. This is a fundamental property in geometry.",
    wrongAnswerExplanations: {
      "Perpendicular to the third side": "The line joining the midpoints is parallel, not perpendicular, to the third side.",
      "Parallel to the third side and equal to its length": "While it is parallel, it's equal to half the length, not the full length of the third side.",
      "Equal to the third side but not necessarily parallel": "The line is necessarily parallel to the third side, not just equal in length."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t2_qe2',
    type: "mcq",
    question: "In triangle ABC, if D and E are the midpoints of sides AB and AC respectively, then DE is equal to...",
    options: [
      "BC",
      "½BC",
      "2BC",
      "¼BC"
    ],
    correctAnswer: "½BC",
    explanation: "By the Mid-point Theorem, when D and E are the midpoints of sides AB and AC of triangle ABC, then DE = ½BC. This illustrates that the line joining the midpoints is half the length of the parallel side.",
    wrongAnswerExplanations: {
      "BC": "DE is not equal to BC but half of it, as stated by the Mid-point Theorem.",
      "2BC": "DE is not twice BC but half of it, as stated by the Mid-point Theorem.",
      "¼BC": "DE equals half of BC, not a quarter of it, according to the Mid-point Theorem."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t2_qe3',
    type: "mcq",
    question: "According to the converse of the Mid-point Theorem, if a line passes through the midpoint of one side of a triangle and is parallel to another side, then it...",
    options: [
      "Bisects the third side",
      "Is perpendicular to the third side",
      "Is equal to half the second side",
      "Forms an isosceles triangle"
    ],
    correctAnswer: "Bisects the third side",
    explanation: "The converse of the Mid-point Theorem states that if a line passes through the midpoint of one side of a triangle and is parallel to another side, then it bisects the third side. This is a key property for solving many geometric problems.",
    wrongAnswerExplanations: {
      "Is perpendicular to the third side": "The line is not necessarily perpendicular to the third side, but it does bisect it.",
      "Is equal to half the second side": "This statement relates to the length, but the converse theorem addresses the bisection property, not length.",
      "Forms an isosceles triangle": "The converse theorem doesn't necessarily create an isosceles triangle."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t2_qe4',
    type: "mcq",
    question: "In triangle PQR, if S is the midpoint of PQ and T is the midpoint of PR, then ST is parallel to...",
    options: [
      "PQ",
      "PR",
      "QR",
      "None of these"
    ],
    correctAnswer: "QR",
    explanation: "By the Mid-point Theorem, the line joining midpoints S and T of sides PQ and PR respectively is parallel to the third side QR. This is a direct application of the theorem to identify parallel relationships.",
    wrongAnswerExplanations: {
      "PQ": "ST cannot be parallel to PQ because point S lies on PQ itself.",
      "PR": "ST cannot be parallel to PR because point T lies on PR itself.",
      "None of these": "The Mid-point Theorem explicitly states that ST is parallel to QR."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t2_qe5',
    type: "mcq",
    question: "In triangle ABC with vertices A(1,1), B(5,1), and C(3,5), the midpoint of AB is...",
    options: [
      "(3,1)",
      "(3,3)",
      "(2,3)",
      "(4,2)"
    ],
    correctAnswer: "(3,1)",
    explanation: "The midpoint of AB is calculated as ((1+5)/2, (1+1)/2) = (3,1). The x-coordinate is the average of 1 and 5, and the y-coordinate is the average of both 1s. Coordinate geometry is often used to verify the Mid-point Theorem.",
    wrongAnswerExplanations: {
      "(3,3)": "This is not the midpoint of AB, as the y-coordinate should be 1, not 3.",
      "(2,3)": "This is not the midpoint of AB. The correct x-coordinate is 3, not 2, and the y-coordinate is 1, not 3.",
      "(4,2)": "This is not the midpoint of AB. The correct coordinates are (3,1)."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t2_qe6',
    type: "mcq",
    question: "In triangle ABC, D is the midpoint of AB and E is the midpoint of BC. If AC = 10cm, what is the length of DE?",
    options: [
      "5 cm",
      "10 cm",
      "Cannot be determined with given information",
      "2.5 cm"
    ],
    correctAnswer: "Cannot be determined with given information",
    explanation: "The Mid-point Theorem relates to midpoints of two sides and the third side. Since D and E are midpoints of AB and BC (not AB and AC), we cannot directly apply the theorem with the given information. More data would be needed.",
    wrongAnswerExplanations: {
      "5 cm": "This answer incorrectly assumes DE = ½AC, but the Mid-point Theorem doesn't apply to this configuration.",
      "10 cm": "This answer incorrectly assumes DE = AC, which is not supported by the Mid-point Theorem.",
      "2.5 cm": "This answer makes an incorrect assumption about the relationship between DE and AC."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t2_qe7',
    type: "mcq",
    question: "In a quadrilateral ABCD, if the diagonals AC and BD bisect each other at point O, then ABCD is a...",
    options: [
      "Rectangle",
      "Rhombus",
      "Parallelogram",
      "Square"
    ],
    correctAnswer: "Parallelogram",
    explanation: "When the diagonals of a quadrilateral bisect each other, it is a defining property of a parallelogram. This can be proven using the Mid-point Theorem and is a key characteristic used to identify parallelograms.",
    wrongAnswerExplanations: {
      "Rectangle": "While a rectangle is a type of parallelogram, the property of diagonals bisecting each other is common to all parallelograms, not just rectangles.",
      "Rhombus": "While a rhombus is a type of parallelogram, the property of diagonals bisecting each other is common to all parallelograms, not just rhombuses.",
      "Square": "While a square is a type of parallelogram, the property of diagonals bisecting each other is common to all parallelograms, not just squares."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t2_qe8',
    type: "mcq",
    question: "If D and E are the midpoints of sides AB and AC of triangle ABC, and BC = 8 cm, then DE = ?",
    options: [
      "2 cm",
      "4 cm",
      "8 cm",
      "16 cm"
    ],
    correctAnswer: "4 cm",
    explanation: "By the Mid-point Theorem, when D and E are midpoints of sides AB and AC, then DE = ½BC. Since BC = 8 cm, DE = 4 cm. This direct application of the theorem helps us find the length of line segments in triangles.",
    wrongAnswerExplanations: {
      "2 cm": "This answer incorrectly assumes DE = ¼BC, but the Mid-point Theorem states that DE = ½BC.",
      "8 cm": "This answer incorrectly assumes DE = BC, but the Mid-point Theorem states that DE = ½BC.",
      "16 cm": "This answer incorrectly assumes DE = 2BC, but the Mid-point Theorem states that DE = ½BC."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t2_qe9',
    type: "mcq",
    question: "In a triangle, the line segment joining the midpoints of two sides always divides the triangle into...",
    options: [
      "Two congruent triangles",
      "Two similar triangles with different areas",
      "One triangle and one quadrilateral",
      "Two triangles with equal areas"
    ],
    correctAnswer: "One triangle and one quadrilateral",
    explanation: "The line segment joining the midpoints of two sides of a triangle divides it into one triangle and one quadrilateral, not two triangles. This geometric division is an important consequence of the Mid-point Theorem.",
    wrongAnswerExplanations: {
      "Two congruent triangles": "The line segment doesn't create two congruent triangles but rather one triangle and one quadrilateral.",
      "Two similar triangles with different areas": "The line segment doesn't create two triangles but rather one triangle and one quadrilateral.",
      "Two triangles with equal areas": "The line segment doesn't create two triangles but rather one triangle and one quadrilateral."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t2_qe10',
    type: "mcq",
    question: "The midpoint of the line segment joining (3, -1) and (5, 7) is...",
    options: [
      "(4, 3)",
      "(4, 4)",
      "(8, 6)",
      "(2, 3)"
    ],
    correctAnswer: "(4, 3)",
    explanation: "The midpoint of a line segment with endpoints (x₁, y₁) and (x₂, y₂) is ((x₁+x₂)/2, (y₁+y₂)/2). So the midpoint is ((3+5)/2, (-1+7)/2) = (4, 3). This formula is essential for applying the Mid-point Theorem in coordinate geometry.",
    wrongAnswerExplanations: {
      "(4, 4)": "This is incorrect. The y-coordinate should be (-1+7)/2 = 3, not 4.",
      "(8, 6)": "This is incorrect. The formula for midpoint gives (4, 3), not (8, 6).",
      "(2, 3)": "This is incorrect. The x-coordinate should be (3+5)/2 = 4, not 2."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t2_qe11',
    type: "mcq",
    question: "If M and N are the midpoints of sides PQ and PR of triangle PQR, and QR = 12 cm, then MN = ?",
    options: [
      "3 cm",
      "6 cm",
      "12 cm",
      "24 cm"
    ],
    correctAnswer: "6 cm",
    explanation: "According to the Mid-point Theorem, when M and N are midpoints of sides PQ and PR of triangle PQR, then MN = ½QR. Since QR = 12 cm, MN = 6 cm. This is a direct application of the theorem to find unknown lengths.",
    wrongAnswerExplanations: {
      "3 cm": "This answer incorrectly assumes MN = ¼QR, but the Mid-point Theorem states that MN = ½QR.",
      "12 cm": "This answer incorrectly assumes MN = QR, but the Mid-point Theorem states that MN = ½QR.",
      "24 cm": "This answer incorrectly assumes MN = 2QR, but the Mid-point Theorem states that MN = ½QR."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t2_qe12',
    type: "mcq",
    question: "Which of the following is NOT a direct application of the Mid-point Theorem?",
    options: [
      "Finding the length of a line joining midpoints of two sides of a triangle",
      "Proving that a given quadrilateral is a parallelogram",
      "Calculating the area of a triangle",
      "Constructing a line parallel to a given line"
    ],
    correctAnswer: "Calculating the area of a triangle",
    explanation: "The Mid-point Theorem helps find lengths and relationships between parallel lines, but calculating the area of a triangle directly is not an application of this theorem. Area calculations rely on different formulas involving base and height.",
    wrongAnswerExplanations: {
      "Finding the length of a line joining midpoints of two sides of a triangle": "This is a direct application of the Mid-point Theorem, which states that this line equals half the third side.",
      "Proving that a given quadrilateral is a parallelogram": "The Mid-point Theorem can be used to prove properties of quadrilaterals, including identifying parallelograms.",
      "Constructing a line parallel to a given line": "The Mid-point Theorem provides a way to construct parallel lines by connecting midpoints."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t2_qe13',
    type: "mcq",
    question: "In triangle ABC, points D and E are midpoints of sides AB and AC respectively. If BC = 10 units and the area of triangle ADE is 10 square units, what is the area of triangle ABC?",
    options: [
      "20 square units",
      "30 square units",
      "40 square units",
      "50 square units"
    ],
    correctAnswer: "40 square units",
    explanation: "The area of triangle ADE is ¼ of the area of triangle ABC (due to the Mid-point Theorem). So, if the area of triangle ADE is 10 square units, the area of triangle ABC is 4 × 10 = 40 square units. This relationship is derived from the properties of similar triangles.",
    wrongAnswerExplanations: {
      "20 square units": "This answer incorrectly assumes the area ratio is 1:2, but it's actually 1:4.",
      "30 square units": "This answer incorrectly estimates the area ratio between the triangles.",
      "50 square units": "This answer incorrectly estimates the area ratio between the triangles."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t2_qe14',
    type: "mcq",
    question: "If P and Q are the midpoints of sides AB and AC of triangle ABC, then the ratio of areas of triangle APQ to triangle ABC is...",
    options: [
      "1:2",
      "1:3",
      "1:4",
      "1:6"
    ],
    correctAnswer: "1:4",
    explanation: "When P and Q are midpoints of AB and AC, triangle APQ has base PQ which is half of BC, and the same height from A. Therefore, the area ratio is 1:4. This is a consequence of the Mid-point Theorem and properties of similar triangles.",
    wrongAnswerExplanations: {
      "1:2": "This answer incorrectly estimates the ratio between the areas of the triangles.",
      "1:3": "This answer incorrectly estimates the ratio between the areas of the triangles.",
      "1:6": "This answer incorrectly estimates the ratio between the areas of the triangles."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t2_qe15',
    type: "mcq",
    question: "The coordinates of the midpoint of the line segment from (2, -3) to (8, 5) are...",
    options: [
      "(5, 1)",
      "(5, 2)",
      "(4, 1)",
      "(6, 1)"
    ],
    correctAnswer: "(5, 1)",
    explanation: "The midpoint is calculated as ((2+8)/2, (-3+5)/2) = (5, 1), using the midpoint formula ((x₁+x₂)/2, (y₁+y₂)/2). This formula is fundamental in coordinate geometry and is used to verify the Mid-point Theorem.",
    wrongAnswerExplanations: {
      "(5, 2)": "This is incorrect. The y-coordinate should be (-3+5)/2 = 1, not 2.",
      "(4, 1)": "This is incorrect. The x-coordinate should be (2+8)/2 = 5, not 4.",
      "(6, 1)": "This is incorrect. The x-coordinate should be (2+8)/2 = 5, not 6."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t2_qe16',
    type: "mcq",
    question: "In triangle ABC, D is the midpoint of BC and E is the midpoint of AC. The line segment AD...",
    options: [
      "Is parallel to BE",
      "Has the same length as BE",
      "Bisects BE",
      "None of these"
    ],
    correctAnswer: "None of these",
    explanation: "The Mid-point Theorem relates to the line joining midpoints of two sides. In this case, AD and BE connect vertices to midpoints of sides, so the theorem doesn't apply directly. None of the given options must be true based solely on the information given.",
    wrongAnswerExplanations: {
      "Is parallel to BE": "This is not necessarily true for all triangles ABC where D and E are midpoints of BC and AC respectively.",
      "Has the same length as BE": "This is not necessarily true for all triangles ABC where D and E are midpoints of BC and AC respectively.",
      "Bisects BE": "This is not necessarily true for all triangles ABC where D and E are midpoints of BC and AC respectively."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t2_qe17',
    type: "mcq",
    question: "Which symbol represents \"is parallel to\" in the context of the Mid-point Theorem?",
    options: [
      "⊥",
      "=",
      "∥",
      "≅"
    ],
    correctAnswer: "∥",
    explanation: "The symbol \"∥\" represents \"is parallel to\" in geometry. In the Mid-point Theorem, we say that the line joining the midpoints of two sides of a triangle is parallel (∥) to the third side. This notation is standard in geometric proofs.",
    wrongAnswerExplanations: {
      "⊥": "This symbol represents \"is perpendicular to\", not \"is parallel to\".",
      "=": "This symbol represents \"is equal to\", not \"is parallel to\".",
      "≅": "This symbol represents \"is congruent to\", not \"is parallel to\"."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t2_qe18',
    type: "mcq",
    question: "If ABCD is a parallelogram, and P, Q, R, S are the midpoints of sides AB, BC, CD, and DA respectively, then PQRS is a...",
    options: [
      "Square",
      "Rectangle",
      "Rhombus",
      "Parallelogram"
    ],
    correctAnswer: "Parallelogram",
    explanation: "Using the Mid-point Theorem repeatedly, we can show that when P, Q, R, S are midpoints of the sides of parallelogram ABCD, PQRS is also a parallelogram. This is because opposite sides of PQRS are parallel and equal in length.",
    wrongAnswerExplanations: {
      "Square": "PQRS is not necessarily a square unless ABCD is a square.",
      "Rectangle": "PQRS is not necessarily a rectangle unless ABCD is a rectangle.",
      "Rhombus": "PQRS is not necessarily a rhombus unless ABCD is a rhombus."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t2_qe19',
    type: "mcq",
    question: "In triangle PQR, S is the midpoint of PQ and T is the midpoint of PR. If PQ = 6 cm, PR = 8 cm, and QR = 10 cm, what is the length of ST?",
    options: [
      "4 cm",
      "5 cm",
      "7 cm",
      "8 cm"
    ],
    correctAnswer: "5 cm",
    explanation: "By the Mid-point Theorem, ST = ½QR. Since QR = 10 cm, ST = 5 cm. The values of PQ and PR don't affect this calculation. This is a direct application of the theorem to find the length of a line joining midpoints.",
    wrongAnswerExplanations: {
      "4 cm": "This is incorrect. By the Mid-point Theorem, ST = ½QR = ½ × 10 = 5 cm, not 4 cm.",
      "7 cm": "This is incorrect. By the Mid-point Theorem, ST = ½QR = ½ × 10 = 5 cm, not 7 cm.",
      "8 cm": "This is incorrect. By the Mid-point Theorem, ST = ½QR = ½ × 10 = 5 cm, not 8 cm."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t2_qe20',
    type: "mcq",
    question: "Which of the following best describes the relationship between the Mid-point Theorem and coordinate geometry?",
    options: [
      "They are completely unrelated concepts",
      "The Mid-point Theorem can be easily proven using coordinate geometry",
      "Coordinate geometry cannot be used to verify the Mid-point Theorem",
      "The Mid-point Theorem is only applicable in three-dimensional coordinate geometry"
    ],
    correctAnswer: "The Mid-point Theorem can be easily proven using coordinate geometry",
    explanation: "The Mid-point Theorem can be elegantly proven using coordinate geometry by placing the triangle in a coordinate system and algebraically showing the relationship between the line joining midpoints and the third side. This demonstrates the power of coordinate methods in geometric proofs.",
    wrongAnswerExplanations: {
      "They are completely unrelated concepts": "This is incorrect. Coordinate geometry is actually a powerful tool for proving and applying the Mid-point Theorem.",
      "Coordinate geometry cannot be used to verify the Mid-point Theorem": "This is incorrect. Coordinate geometry provides one of the most straightforward proofs of the Mid-point Theorem.",
      "The Mid-point Theorem is only applicable in three-dimensional coordinate geometry": "This is incorrect. The Mid-point Theorem is applicable in two-dimensional geometry and can be proven using 2D coordinate geometry."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  }
];
