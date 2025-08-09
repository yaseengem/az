// filepath: content/CBSE/Mathematics/Class 9/Chapter7/Topic2/quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch7_t2_qe1',
        type: "mcq",
        question: "What does it mean for two triangles to be congruent?",
        options: [
            "They have the same area",
            "They have the same shape and size",
            "They have the same perimeter",
            "They have the same angles"
        ],
        correctAnswer: "They have the same shape and size",
        explanation: "Congruent triangles have exactly the same shape and size. This means all corresponding sides have equal lengths and all corresponding angles have equal measures. Two triangles with the same shape but different sizes would be similar, not congruent. 📏",
        wrongAnswerExplanations: {
            "They have the same area": "Triangles with the same area can have different shapes and sizes, so this alone doesn't make them congruent.",
            "They have the same perimeter": "Triangles with equal perimeters can have different shapes, so this alone doesn't make them congruent.",
            "They have the same angles": "Triangles with equal angles have the same shape but may have different sizes, which makes them similar but not necessarily congruent."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t2_qe2',
        type: "mcq",
        question: "Which symbol is used to denote congruence?",
        options: [
            "=",
            "~",
            "≅",
            "≈"
        ],
        correctAnswer: "≅",
        explanation: "The symbol '≅' is used to denote congruence between geometric figures. For example, if triangle ABC is congruent to triangle DEF, we write △ABC ≅ △DEF. This symbol indicates that the figures have exactly the same size and shape. ✓",
        wrongAnswerExplanations: {
            "=": "The equals sign (=) typically denotes equality, not geometric congruence.",
            "~": "The tilde (~) often represents similarity in geometry, not congruence.",
            "≈": "The approximately equal sign (≈) represents approximate equality, not congruence."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 25
    },
    {
        id: 'cl9_ch7_t2_qe3',
        type: "mcq",
        question: "If △ABC ≅ △PQR, which of the following must be true?",
        options: [
            "A corresponds to P, B to Q, and C to R",
            "AB = PQ, BC = QR, and CA = PR",
            "The area of △ABC equals the area of △PQR",
            "All of the above"
        ],
        correctAnswer: "All of the above",
        explanation: "When △ABC ≅ △PQR, it means A corresponds to P, B to Q, and C to R. This implies that corresponding sides (AB = PQ, BC = QR, CA = PR) and angles are equal. Congruent triangles have the same area because they have identical dimensions. 🔢",
        wrongAnswerExplanations: {
            "A corresponds to P, B to Q, and C to R": "This is true, but it's not the only correct statement.",
            "AB = PQ, BC = QR, and CA = PR": "This is true, but it's not the only correct statement.",
            "The area of △ABC equals the area of △PQR": "This is true, but it's not the only correct statement."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl9_ch7_t2_qe4',
        type: "mcq",
        question: "What is the difference between congruent triangles and similar triangles?",
        options: [
            "Congruent triangles have the same shape, while similar triangles have the same size",
            "Congruent triangles have the same shape and size, while similar triangles have the same shape but possibly different sizes",
            "Congruent triangles have the same angles, while similar triangles have the same sides",
            "There is no difference; the terms are interchangeable"
        ],
        correctAnswer: "Congruent triangles have the same shape and size, while similar triangles have the same shape but possibly different sizes",
        explanation: "Congruent triangles have identical shape and size with all corresponding sides and angles equal. Similar triangles have the same shape (equal angles) but may have different sizes, with corresponding sides in proportion. Think of similar triangles as enlarged or reduced versions of each other. 🔄",
        wrongAnswerExplanations: {
            "Congruent triangles have the same shape, while similar triangles have the same size": "This is incorrect. Similar triangles have the same shape, and congruent triangles have both the same shape and size.",
            "Congruent triangles have the same angles, while similar triangles have the same sides": "Both congruent and similar triangles have the same angles. Congruent triangles have equal corresponding sides, while similar triangles have proportional sides.",
            "There is no difference; the terms are interchangeable": "The terms have distinct meanings in geometry and are not interchangeable."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl9_ch7_t2_qe5',
        type: "mcq",
        question: "Which statement about corresponding parts of congruent triangles is true?",
        options: [
            "They are in proportion",
            "They are equal",
            "They have the same shape",
            "They have the same orientation"
        ],
        correctAnswer: "They are equal",
        explanation: "Corresponding parts of congruent triangles are equal. This principle is often referred to as CPCTC (Corresponding Parts of Congruent Triangles are Congruent). If △ABC ≅ △DEF, then AB = DE, BC = EF, CA = FD, and all corresponding angles are equal. 📐",
        wrongAnswerExplanations: {
            "They are in proportion": "Corresponding parts being in proportion applies to similar triangles, not necessarily congruent ones. For congruent triangles, the parts are actually equal.",
            "They have the same shape": "While this is true for the triangles as a whole, it doesn't specifically describe the relationship between corresponding parts.",
            "They have the same orientation": "Congruent triangles can have different orientations. What matters is that corresponding parts are equal."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t2_qe6',
        type: "mcq",
        question: "If △ABC ≅ △DEF, and angle B = 60°, what is angle E?",
        options: [
            "30°",
            "45°",
            "60°",
            "Cannot be determined"
        ],
        correctAnswer: "60°",
        explanation: "In congruent triangles, corresponding angles are equal. Since △ABC ≅ △DEF, angle B corresponds to angle E. Given that angle B = 60°, angle E must also be 60°. This is a direct application of the CPCTC principle (Corresponding Parts of Congruent Triangles are Congruent). 🔍",
        wrongAnswerExplanations: {
            "30°": "This contradicts the principle that corresponding angles in congruent triangles are equal.",
            "45°": "This contradicts the principle that corresponding angles in congruent triangles are equal.",
            "Cannot be determined": "Since the triangles are congruent, we can determine that angle E = 60°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t2_qe7',
        type: "mcq",
        question: "Two triangles are congruent. If the first triangle has sides of lengths 3 cm, 4 cm, and 5 cm, what are the side lengths of the second triangle?",
        options: [
            "3 cm, 4 cm, 5 cm",
            "6 cm, 8 cm, 10 cm",
            "1.5 cm, 2 cm, 2.5 cm",
            "Any three lengths that form a triangle"
        ],
        correctAnswer: "3 cm, 4 cm, 5 cm",
        explanation: "Congruent triangles have equal corresponding sides. If the first triangle has sides of 3 cm, 4 cm, and 5 cm, then the second congruent triangle must also have sides of 3 cm, 4 cm, and 5 cm (though not necessarily in the same order of correspondence). 📏",
        wrongAnswerExplanations: {
            "6 cm, 8 cm, 10 cm": "These lengths are in the same proportion as 3:4:5 but are twice as large, which would make the triangles similar but not congruent.",
            "1.5 cm, 2 cm, 2.5 cm": "These lengths are in the same proportion as 3:4:5 but are half as large, which would make the triangles similar but not congruent.",
            "Any three lengths that form a triangle": "Congruent triangles must have corresponding sides equal, not just any lengths that form a triangle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t2_qe8',
        type: "mcq",
        question: "What happens to triangle ABC if it is reflected across a line?",
        options: [
            "It becomes larger",
            "It becomes smaller",
            "It remains congruent to the original triangle",
            "It becomes similar but not congruent to the original triangle"
        ],
        correctAnswer: "It remains congruent to the original triangle",
        explanation: "Reflection is a rigid transformation that preserves the size and shape of figures. When triangle ABC is reflected across a line, the resulting triangle is congruent to the original triangle. Reflections, rotations, and translations are all rigid motions that preserve congruence. 🪞",
        wrongAnswerExplanations: {
            "It becomes larger": "Reflection doesn't change the size of a figure.",
            "It becomes smaller": "Reflection doesn't change the size of a figure.",
            "It becomes similar but not congruent to the original triangle": "Reflection preserves both shape and size, so the triangles are congruent, not just similar."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl9_ch7_t2_qe9',
        type: "mcq",
        question: "Which of the following transformations preserves congruence?",
        options: [
            "Dilation",
            "Translation",
            "Stretching",
            "Compression"
        ],
        correctAnswer: "Translation",
        explanation: "Translation (sliding a figure without rotating or changing its size) is a rigid motion that preserves congruence. Rigid motions like translations, rotations, and reflections maintain the size and shape of figures, resulting in congruent images. 🔄",
        wrongAnswerExplanations: {
            "Dilation": "Dilation changes the size of a figure while preserving its shape, resulting in similar but not congruent figures.",
            "Stretching": "Stretching changes both the size and shape of a figure, so it doesn't preserve congruence.",
            "Compression": "Compression reduces the size of a figure, resulting in similar but not congruent figures."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t2_qe10',
        type: "mcq",
        question: "In the statement △ABC ≅ △XYZ, what does vertex B correspond to?",
        options: [
            "X",
            "Y",
            "Z",
            "Cannot be determined"
        ],
        correctAnswer: "Y",
        explanation: "In the congruence statement △ABC ≅ △XYZ, the order of vertices indicates correspondence. The first vertex A corresponds to X, the second vertex B corresponds to Y, and the third vertex C corresponds to Z. This ordering is crucial for identifying which parts correspond to each other. ✏️",
        wrongAnswerExplanations: {
            "X": "X corresponds to A, not B.",
            "Z": "Z corresponds to C, not B.",
            "Cannot be determined": "The correspondence is determined by the order in the congruence statement."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 25
    },
    {
        id: 'cl9_ch7_t2_qe11',
        type: "mcq",
        question: "Two congruent triangles must have the same:",
        options: [
            "Orientation",
            "Position in space",
            "Perimeter",
            "Color"
        ],
        correctAnswer: "Perimeter",
        explanation: "Congruent triangles have equal corresponding sides, so they must have the same perimeter. Their orientation and position in space can differ, as congruent figures can be moved, rotated, or reflected. Color is not a geometric property related to congruence. 📊",
        wrongAnswerExplanations: {
            "Orientation": "Congruent triangles can have different orientations. One triangle can be flipped or rotated compared to the other.",
            "Position in space": "Congruent triangles can be located in different positions in space.",
            "Color": "Color is not a geometric property and has no bearing on congruence."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t2_qe12',
        type: "mcq",
        question: "If △ABC and △DEF are congruent, and the area of △ABC is 12 square units, what is the area of △DEF?",
        options: [
            "6 square units",
            "12 square units",
            "24 square units",
            "Cannot be determined"
        ],
        correctAnswer: "12 square units",
        explanation: "Congruent triangles have the same area because they have identical dimensions. Since △ABC and △DEF are congruent, and the area of △ABC is 12 square units, the area of △DEF must also be 12 square units. This follows directly from the definition of congruence. 🔢",
        wrongAnswerExplanations: {
            "6 square units": "This would be half the area, which contradicts the fact that congruent triangles have equal areas.",
            "24 square units": "This would be double the area, which contradicts the fact that congruent triangles have equal areas.",
            "Cannot be determined": "We can determine that the area is 12 square units based on the congruence of the triangles."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t2_qe13',
        type: "mcq",
        question: "What does the acronym CPCTC stand for in the context of triangle congruence?",
        options: [
            "Congruent Parts of Congruent Triangles are Common",
            "Corresponding Parts of Congruent Triangles are Congruent",
            "Common Parts of Coincident Triangles are Congruent",
            "Congruent Parts of Common Triangles are Coincident"
        ],
        correctAnswer: "Corresponding Parts of Congruent Triangles are Congruent",
        explanation: "CPCTC stands for 'Corresponding Parts of Congruent Triangles are Congruent.' This principle states that if two triangles are congruent, then their corresponding sides and angles are equal. It's a fundamental concept used in geometric proofs involving congruent triangles. 📐",
        wrongAnswerExplanations: {
            "Congruent Parts of Congruent Triangles are Common": "This is not the correct meaning of CPCTC.",
            "Common Parts of Coincident Triangles are Congruent": "This is not the correct meaning of CPCTC.",
            "Congruent Parts of Common Triangles are Coincident": "This is not the correct meaning of CPCTC."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t2_qe14',
        type: "mcq",
        question: "Which of the following is NOT a way to verify if two physical triangles are congruent?",
        options: [
            "Placing one triangle on top of the other to see if they match perfectly",
            "Measuring all sides and angles to check if they are equal",
            "Calculating their areas to see if they are equal",
            "Using a compass and straightedge to construct a copy of one triangle and comparing it to the other"
        ],
        correctAnswer: "Calculating their areas to see if they are equal",
        explanation: "While congruent triangles do have equal areas, having equal areas alone doesn't guarantee congruence. Triangles with the same area can have different shapes. To verify congruence, you need to check that corresponding sides and angles are equal. 🔍",
        wrongAnswerExplanations: {
            "Placing one triangle on top of the other to see if they match perfectly": "This is a valid way to verify congruence as it directly checks if the triangles have the same size and shape.",
            "Measuring all sides and angles to check if they are equal": "This is a valid way to verify congruence as it checks if corresponding parts are equal.",
            "Using a compass and straightedge to construct a copy of one triangle and comparing it to the other": "This is a valid way to verify congruence through construction."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl9_ch7_t2_qe15',
        type: "mcq",
        question: "Which of the following pairs of triangles are always congruent?",
        options: [
            "Two equilateral triangles with sides of different lengths",
            "Two right-angled triangles with one equal side",
            "Two isosceles triangles with equal bases",
            "Two equilateral triangles with sides of the same length"
        ],
        correctAnswer: "Two equilateral triangles with sides of the same length",
        explanation: "Two equilateral triangles with sides of the same length are always congruent because all their sides are equal and all their angles are 60°. This means all corresponding parts are equal, which is the definition of congruence. The other pairs may be similar but not necessarily congruent. 🔺",
        wrongAnswerExplanations: {
            "Two equilateral triangles with sides of different lengths": "These triangles are similar but not congruent, as their sizes differ.",
            "Two right-angled triangles with one equal side": "Having just one equal side isn't sufficient to guarantee congruence.",
            "Two isosceles triangles with equal bases": "Having equal bases isn't sufficient to guarantee congruence, as the other sides could differ."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl9_ch7_t2_qe16',
        type: "mcq",
        question: "In a regular hexagon, all triangles formed by connecting the center to any two adjacent vertices are:",
        options: [
            "Similar but not congruent",
            "Congruent to each other",
            "Always right-angled",
            "Always scalene"
        ],
        correctAnswer: "Congruent to each other",
        explanation: "In a regular hexagon, all triangles formed by connecting the center to any two adjacent vertices are congruent. This is because all sides of a regular hexagon are equal, and all angles are equal. Therefore, each triangle has the same three sides: two radii of equal length and one side of the hexagon. 🔄",
        wrongAnswerExplanations: {
            "Similar but not congruent": "These triangles are not just similar; they are congruent because they have the same size and shape.",
            "Always right-angled": "These triangles are not right-angled; they are isosceles with two equal sides (the radii).",
            "Always scalene": "These triangles are isosceles, not scalene, because two of their sides (the radii) are equal."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl9_ch7_t2_qe17',
        type: "mcq",
        question: "If two triangles are congruent, which of the following must be equal?",
        options: [
            "The coordinates of their vertices",
            "Their orientations",
            "Their heights",
            "Their positions on a plane"
        ],
        correctAnswer: "Their heights",
        explanation: "If two triangles are congruent, their heights must be equal because congruent triangles have identical dimensions. The coordinates of vertices, orientations, and positions can differ, as congruent figures can be placed anywhere in space and still remain congruent. 📏",
        wrongAnswerExplanations: {
            "The coordinates of their vertices": "Congruent triangles can be positioned differently in space, so their vertices can have different coordinates.",
            "Their orientations": "One triangle can be rotated or reflected compared to the other and still be congruent.",
            "Their positions on a plane": "Congruent triangles can be at different positions on a plane."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t2_qe18',
        type: "mcq",
        question: "Which of the following is a practical application of triangle congruence?",
        options: [
            "Calculating the volume of a sphere",
            "Determining the strength of a bridge truss",
            "Finding the roots of a quadratic equation",
            "Measuring the mass of an object"
        ],
        correctAnswer: "Determining the strength of a bridge truss",
        explanation: "Triangle congruence is used in structural engineering, particularly in bridge truss designs. The use of congruent triangles in trusses provides stability and distributes forces evenly. This principle is why triangular shapes are commonly used in construction for their rigidity and strength. 🏗️",
        wrongAnswerExplanations: {
            "Calculating the volume of a sphere": "This uses formulas from solid geometry, not triangle congruence.",
            "Finding the roots of a quadratic equation": "This is an algebraic process not directly related to triangle congruence.",
            "Measuring the mass of an object": "This is a physical measurement not related to triangle congruence."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t2_qe19',
        type: "mcq",
        question: "Which of the following geometric properties does congruence preserve?",
        options: [
            "Only length",
            "Only angle measure",
            "Both length and angle measure",
            "Neither length nor angle measure"
        ],
        correctAnswer: "Both length and angle measure",
        explanation: "Congruence preserves both length and angle measure. When two triangles are congruent, all their corresponding sides have equal lengths and all their corresponding angles have equal measures. This complete preservation of size and shape is what defines congruence. 📐",
        wrongAnswerExplanations: {
            "Only length": "Congruence preserves both length and angle measure, not just length.",
            "Only angle measure": "Preserving only angle measure would result in similar triangles, not necessarily congruent ones.",
            "Neither length nor angle measure": "Congruence definitely preserves both length and angle measure."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t2_qe20',
        type: "mcq",
        question: "If triangle ABC is congruent to triangle DEF, and angle A = 45°, side AB = 5 cm, which of the following must be true?",
        options: [
            "Angle D = 45° only",
            "Side DE = 5 cm only",
            "Both angle D = 45° and side DE = 5 cm",
            "Either angle D = 45° or side DE = 5 cm"
        ],
        correctAnswer: "Both angle D = 45° and side DE = 5 cm",
        explanation: "Since triangle ABC is congruent to triangle DEF, all corresponding parts are equal. If angle A = 45° and side AB = 5 cm, then their corresponding parts in triangle DEF, which are angle D and side DE, must also be 45° and 5 cm respectively. This follows from the CPCTC principle. 🔍",
        wrongAnswerExplanations: {
            "Angle D = 45° only": "This is incomplete, as congruence implies all corresponding parts are equal, not just angles.",
            "Side DE = 5 cm only": "This is incomplete, as congruence implies all corresponding parts are equal, not just sides.",
            "Either angle D = 45° or side DE = 5 cm": "Congruence requires both corresponding parts to be equal, not just one or the other."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    }
]; 