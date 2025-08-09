import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch1_t2_qe1',
        type: "mcq",
        question: "What is the most common shape of a standard brick?",
        options: ["Cube", "Rectangular prism", "Cylinder", "Sphere"],
        correctAnswer: "Rectangular prism",
        explanation: "A standard brick is a rectangular prism (cuboid) with length greater than width and height, allowing for stable and efficient stacking. 🧱",
        wrongAnswerExplanations: {
            "Cube": "Cubes have equal length, width, and height, while bricks are typically longer than they are wide or tall.",
            "Cylinder": "Cylinders have circular bases, whereas bricks have rectangular faces.",
            "Sphere": "Spheres are round and would roll, making them impractical for building."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch1_t2_qe2',
        type: "mcq",
        question: "How many faces does a standard rectangular brick have?",
        options: ["4", "6", "8", "12"],
        correctAnswer: "6",
        explanation: "A rectangular brick is a 3D shape with 6 rectangular faces - front, back, top, bottom, and two sides. This 3D shape is called a rectangular prism or cuboid. 📦",
        wrongAnswerExplanations: {
            "4": "A rectangle (2D) has 4 sides, but a brick is a 3D shape with 6 faces.",
            "8": "A brick has 8 vertices (corners), not 8 faces.",
            "12": "A brick has 12 edges, not 12 faces."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch1_t2_qe3',
        type: "mcq",
        question: "Which of these shapes is most similar to the shape of a brick?",
        options: ["A ball", "A book", "A pencil", "A coin"],
        correctAnswer: "A book",
        explanation: "A book has a rectangular prism shape with length, width, and height, similar to a brick. Both are cuboid shapes with 6 rectangular faces. 📚",
        wrongAnswerExplanations: {
            "A ball": "A ball is spherical, while a brick has flat rectangular faces.",
            "A pencil": "A pencil is more like a cylinder or hexagonal prism, not a rectangular prism like a brick.",
            "A coin": "A coin is a flat cylinder, unlike the rectangular prism shape of a brick."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch1_t2_qe4',
        type: "mcq",
        question: "How many edges does a standard brick have?",
        options: ["6", "8", "12", "24"],
        correctAnswer: "12",
        explanation: "A brick is a rectangular prism with 12 edges where its faces meet. Each of the 6 faces contributes 4 edges, but each edge is counted twice, so total = (6×4)÷2 = 12. 🔍",
        wrongAnswerExplanations: {
            "6": "A brick has 6 faces, not 6 edges.",
            "8": "A brick has 8 vertices (corners), not 8 edges.",
            "24": "If we count each face's edges separately, we get 24, but that counts each edge twice."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch1_t2_qe5',
        type: "mcq",
        question: "Which of these is the correct number of vertices (corners) in a rectangular brick?",
        options: ["4", "6", "8", "12"],
        correctAnswer: "8",
        explanation: "A rectangular brick has 8 vertices or corners where three edges meet. This is a property of cuboids or rectangular prisms. 🧮",
        wrongAnswerExplanations: {
            "4": "A rectangle (2D) has 4 vertices, but a brick is a 3D shape with 8 vertices.",
            "6": "A brick has 6 faces, not 6 vertices.",
            "12": "A brick has 12 edges, not 12 vertices."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch1_t2_qe6',
        type: "mcq",
        question: "If a brick is 20 cm long, 10 cm wide, and 5 cm high, what shape is it?",
        options: ["Cube", "Square", "Rectangular prism", "Triangle"],
        correctAnswer: "Rectangular prism",
        explanation: "With different measurements for length, width, and height, this brick is a rectangular prism. A cuboid where all dimensions (length, width, height) are different. 📏",
        wrongAnswerExplanations: {
            "Cube": "A cube has equal dimensions on all sides, but this brick has different length, width, and height.",
            "Square": "A square is a 2D shape, while a brick is a 3D object.",
            "Triangle": "A triangle is a 2D shape with three sides, unlike a brick which is 3D."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch1_t2_qe7',
        type: "mcq",
        question: "If all bricks in a wall have the same size and shape, what property do they share?",
        options: ["Weight", "Color", "Uniformity", "Temperature"],
        correctAnswer: "Uniformity",
        explanation: "Bricks sharing the same size and shape display uniformity, making them interchangeable and allowing for consistent, stable construction patterns. 🏗️",
        wrongAnswerExplanations: {
            "Weight": "While uniform bricks may have similar weights, this answer doesn't directly address size and shape.",
            "Color": "Bricks can be uniform in shape and size but have different colors.",
            "Temperature": "Temperature is not related to the physical dimensions of bricks."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch1_t2_qe8',
        type: "mcq",
        question: "Which dimension is usually the smallest in a standard building brick?",
        options: ["Length", "Width", "Height", "All dimensions are equal"],
        correctAnswer: "Height",
        explanation: "In standard building bricks, height is typically the smallest dimension, followed by width, with length being the largest. This shape aids in stable wall construction. 🧱",
        wrongAnswerExplanations: {
            "Length": "Length is typically the largest dimension of a standard brick.",
            "Width": "Width is usually between the length and height in size.",
            "All dimensions are equal": "Standard bricks are rectangular prisms, not cubes, so dimensions are not equal."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch1_t2_qe9',
        type: "mcq",
        question: "What happens to the shape of a brick if all its dimensions (length, width, and height) are equal?",
        options: ["It becomes a rectangle", "It becomes a cube", "It becomes a sphere", "It remains a brick"],
        correctAnswer: "It becomes a cube",
        explanation: "When all dimensions are equal, a brick becomes a cube. A cube is a special case of a rectangular prism where length = width = height. 🎲",
        wrongAnswerExplanations: {
            "It becomes a rectangle": "A rectangle is a 2D shape, while a brick with equal dimensions would be 3D.",
            "It becomes a sphere": "Equal dimensions don't make a shape rounded like a sphere.",
            "It remains a brick": "While still technically a brick, it would specifically be a cube-shaped brick."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch1_t2_qe10',
        type: "mcq",
        question: "If you cut a brick exactly in half along its length, how many faces will each half have?",
        options: ["5", "6", "7", "8"],
        correctAnswer: "7",
        explanation: "Cutting a brick in half along its length creates 7 faces on each half: the 6 original faces (with one cut in half) plus the new face created by the cut. 🪓",
        wrongAnswerExplanations: {
            "5": "Cutting a brick adds a face rather than removing faces.",
            "6": "This would be correct if no new face was created, but cutting creates a new face.",
            "8": "Cutting a rectangular prism in half creates 7, not 8 faces."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch1_t2_qe11',
        type: "mcq",
        question: "Which of these is NOT typically a shape used for special decorative bricks?",
        options: ["L-shaped bricks", "Circular bricks", "Wedge-shaped bricks", "Hollow bricks"],
        correctAnswer: "Circular bricks",
        explanation: "Circular bricks are rarely used because they wouldn't stack efficiently in walls. L-shaped, wedge-shaped, and hollow bricks are all common specialty brick shapes. 🏛️",
        wrongAnswerExplanations: {
            "L-shaped bricks": "L-shaped bricks are commonly used for corners and decorative elements.",
            "Wedge-shaped bricks": "Wedge-shaped bricks are used for arches and curved structures.",
            "Hollow bricks": "Hollow bricks are common for insulation and reducing material use."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch1_t2_qe12',
        type: "mcq",
        question: "If you arrange 8 identical cube-shaped bricks in a row, what shape do they form together?",
        options: ["A larger cube", "A rectangular prism", "A pyramid", "A sphere"],
        correctAnswer: "A rectangular prism",
        explanation: "8 cubes in a row form a rectangular prism that is 8 times longer than it is wide or tall. It's essentially a long box-shape with square cross-section. 📏",
        wrongAnswerExplanations: {
            "A larger cube": "A larger cube would require equal dimensions in all directions, but 8 cubes in a row creates length much greater than width or height.",
            "A pyramid": "A pyramid has a polygon base that tapers to a point, unlike cubes arranged in a row.",
            "A sphere": "Cubes arranged in a row maintain flat faces and edges, unlike a sphere which is round."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch1_t2_qe13',
        type: "mcq",
        question: "What is the purpose of the hollow space found in some bricks?",
        options: ["To make them prettier", "To make them lighter and use less material", "To make them stronger", "To make them more expensive"],
        correctAnswer: "To make them lighter and use less material",
        explanation: "Hollow spaces in bricks reduce weight and material usage while maintaining structural strength. They also improve insulation properties by trapping air. 🧱",
        wrongAnswerExplanations: {
            "To make them prettier": "Hollow spaces are functional rather than decorative.",
            "To make them stronger": "Solid bricks are typically stronger, but hollow bricks balance strength with weight and material efficiency.",
            "To make them more expensive": "Hollow bricks typically use less material and are often less expensive to produce."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch1_t2_qe14',
        type: "mcq",
        question: "What shape are the bricks typically used to build arches?",
        options: ["Regular rectangular bricks", "Cube-shaped bricks", "Wedge-shaped bricks", "Spherical bricks"],
        correctAnswer: "Wedge-shaped bricks",
        explanation: "Arches use wedge-shaped (tapered) bricks where one face is wider than the opposite face. This trapezoid shape allows bricks to fit together in a curved pattern. 🌉",
        wrongAnswerExplanations: {
            "Regular rectangular bricks": "Regular bricks don't naturally form curved shapes needed for arches.",
            "Cube-shaped bricks": "Cube-shaped bricks have equal dimensions and don't naturally form arches.",
            "Spherical bricks": "Spherical bricks would roll and wouldn't stack properly for construction."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch1_t2_qe15',
        type: "mcq",
        question: "If you stack two identical bricks one on top of the other, what shape do they form together?",
        options: ["A cube", "A taller rectangular prism", "A wider rectangular prism", "A sphere"],
        correctAnswer: "A taller rectangular prism",
        explanation: "Stacking two identical rectangular prism bricks creates a taller rectangular prism. The length and width remain the same, but the height doubles. 📚",
        wrongAnswerExplanations: {
            "A cube": "Stacking two identical bricks would only form a cube if the original bricks were shaped so that width×2=length=height.",
            "A wider rectangular prism": "Stacking vertically doesn't change the width.",
            "A sphere": "Rectangular bricks stacked together cannot form a sphere, which has no flat faces."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch1_t2_qe16',
        type: "mcq",
        question: "What is the name of the small indentation often found on the top face of a brick?",
        options: ["Frog", "Hole", "Dimple", "Groove"],
        correctAnswer: "Frog",
        explanation: "The indentation on a brick's top surface is called a 'frog'. It reduces material, makes the brick lighter, and helps mortar grip better when bricks are stacked. 🧱",
        wrongAnswerExplanations: {
            "Hole": "Holes typically go all the way through an object, while the indentation in a brick doesn't.",
            "Dimple": "Dimple is a small depression on a surface, but isn't the technical term for the brick indentation.",
            "Groove": "Groove typically refers to a long narrow channel, not the wider depression in a brick."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch1_t2_qe17',
        type: "mcq",
        question: "If you have a brick that is 20 cm × 10 cm × 5 cm and another brick that is 10 cm × 5 cm × 2.5 cm, how do they compare?",
        options: ["They have the same shape but different sizes", "They have different shapes and different sizes", "They have the same shape and the same size", "The second brick is exactly half the size of the first brick"],
        correctAnswer: "They have the same shape but different sizes",
        explanation: "Both bricks are rectangular prisms with proportional dimensions (ratio 4:2:1). The second brick is smaller but maintains the same shape as the first. They are geometrically similar. 📐",
        wrongAnswerExplanations: {
            "They have different shapes and different sizes": "While different in size, both have the same rectangular prism shape with similar proportions.",
            "They have the same shape and the same size": "They have the same shape but clearly different sizes.",
            "The second brick is exactly half the size of the first brick": "The second brick is actually 1/8 the size of the first (half in each dimension)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch1_t2_qe18',
        type: "mcq",
        question: "What is the usual shape of the small holes that go all the way through some bricks?",
        options: ["Triangle", "Square", "Circle", "Star"],
        correctAnswer: "Circle",
        explanation: "Holes in bricks are typically circular. Circular holes reduce stress concentration and are easier to manufacture through extrusion processes. 🕳️",
        wrongAnswerExplanations: {
            "Triangle": "Triangular holes are rare in bricks as they create stress points at the corners.",
            "Square": "Square holes are possible but less common than circular holes in bricks.",
            "Star": "Star-shaped holes would be impractical to create and would have structural weaknesses."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch1_t2_qe19',
        type: "mcq",
        question: "If you place bricks side by side to form a square on the ground, what shape are you creating in 3D space?",
        options: ["Cube", "Rectangular prism", "Cylinder", "Square prism"],
        correctAnswer: "Square prism",
        explanation: "Arranging bricks in a square pattern creates a square prism - a 3D shape with square top and bottom faces connected by rectangular side faces. It has the height of a brick. 🔲",
        wrongAnswerExplanations: {
            "Cube": "A cube would require the height to equal the length and width of the square base.",
            "Rectangular prism": "A square base with equal sides creates a square prism, a special case of rectangular prism.",
            "Cylinder": "A cylinder has circular bases, not square ones."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch1_t2_qe20',
        type: "mcq",
        question: "Why are bricks often made with slightly rough surfaces rather than perfectly smooth ones?",
        options: ["To look more attractive", "To help mortar stick better", "To make them lighter", "To make them stronger"],
        correctAnswer: "To help mortar stick better",
        explanation: "Rough surfaces on bricks provide better grip for mortar, creating stronger bonds between bricks. This improves wall stability and structural integrity. 🏗️",
        wrongAnswerExplanations: {
            "To look more attractive": "While texture can be decorative, the primary purpose is functional.",
            "To make them lighter": "Surface roughness has minimal impact on brick weight.",
            "To make them stronger": "Surface roughness doesn't significantly affect the brick's internal strength."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 