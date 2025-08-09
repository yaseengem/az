import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch1_t2_qm1',
        type: "mcq",
        question: "A standard brick has dimensions of 20 cm × 10 cm × 5 cm. What is the ratio of its length to width to height?",
        options: ["2:1:0.5", "4:2:1", "10:5:2", "20:10:5"],
        correctAnswer: "4:2:1",
        explanation: "The brick dimensions are 20 cm × 10 cm × 5 cm. Simplifying this ratio gives 4:2:1, showing the proportional relationship between length, width, and height. 📏",
        wrongAnswerExplanations: {
            "2:1:0.5": "This is equivalent to 4:2:1 but using decimals is less conventional for ratios.",
            "10:5:2": "This doesn't simplify the ratio to its lowest terms.",
            "20:10:5": "This is the exact measurements, but not simplified to the lowest ratio."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch1_t2_qm2',
        type: "mcq",
        question: "If a brick wall is built with bricks of uniform size (20 cm × 10 cm × 5 cm) and the wall is 2 m high and 3 m long, approximately how many bricks are needed for a single-layer wall?",
        options: ["60", "75", "120", "300"],
        correctAnswer: "120",
        explanation: "The wall is 200 cm high × 300 cm long. Each brick covers 20 cm × 5 cm (length × height) when placed horizontally. Number of bricks = (300÷20) × (200÷5) = 15 × 40 = 600 ÷ 5 = 120. 🧱",
        wrongAnswerExplanations: {
            "60": "This would be correct if the bricks were placed vertically, but standard practice is horizontal placement.",
            "75": "This doesn't account for the correct orientation of bricks in a wall.",
            "300": "This incorrectly considers the full volume rather than the surface arrangement."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch1_t2_qm3',
        type: "mcq",
        question: "A brick has 6 faces. If you want to paint all faces of 10 bricks, how many individual faces will you need to paint in total?",
        options: ["36", "56", "60", "66"],
        correctAnswer: "60",
        explanation: "Each brick has 6 faces, so 10 bricks have 10 × 6 = 60 faces in total that need to be painted. This calculation considers each brick as a separate object. 🎨",
        wrongAnswerExplanations: {
            "36": "This would be if each brick had only 3.6 faces to paint, which is incorrect.",
            "56": "This is incorrect; perhaps miscounting the number of faces per brick.",
            "66": "This exceeds the correct calculation of 10 × 6 = 60."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch1_t2_qm4',
        type: "mcq",
        question: "Four bricks are arranged to form a square on the ground, with each brick touching two others. How many faces of the bricks are hidden (not visible from any side or top)?",
        options: ["2", "4", "6", "8"],
        correctAnswer: "8",
        explanation: "In this arrangement, each brick has one face touching the ground and one face touching another brick. With 4 bricks, there are 4 faces touching the ground and 4 internal faces, making 8 hidden faces in total. 🔍",
        wrongAnswerExplanations: {
            "2": "This is insufficient for the number of hidden faces in the described arrangement.",
            "4": "This only counts either the faces touching the ground or the internal faces, not both.",
            "6": "This incorrectly counts the number of hidden faces in the square arrangement."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch1_t2_qm5',
        type: "mcq",
        question: "A brick of dimensions 20 cm × 10 cm × 5 cm has a volume of 1000 cm³. If a miniature brick has all dimensions reduced to half, what is its volume?",
        options: ["125 cm³", "250 cm³", "500 cm³", "750 cm³"],
        correctAnswer: "125 cm³",
        explanation: "The miniature brick has dimensions 10 cm × 5 cm × 2.5 cm. Volume = 10 × 5 × 2.5 = 125 cm³. When all dimensions are halved, the volume becomes (1/2)³ = 1/8 of the original volume (1000 ÷ 8 = 125). 📊",
        wrongAnswerExplanations: {
            "250 cm³": "This would be correct if only two dimensions were halved, not all three.",
            "500 cm³": "This would be correct if only one dimension was halved, not all three.",
            "750 cm³": "This does not follow the correct relationship for scaling the volume."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch1_t2_qm6',
        type: "mcq",
        question: "If a special brick has dimensions in the ratio 3:2:1 and its height is 5 cm, what is the volume of the brick?",
        options: ["30 cm³", "60 cm³", "75 cm³", "150 cm³"],
        correctAnswer: "150 cm³",
        explanation: "If the ratio is 3:2:1 and height (smallest dimension) is 5 cm, then width = 10 cm and length = 15 cm. Volume = 15 × 10 × 5 = 750 ÷ 5 = 150 cm³. 🧱",
        wrongAnswerExplanations: {
            "30 cm³": "This calculation is incorrect and too small for the given dimensions.",
            "60 cm³": "This calculation is incorrect; it doesn't properly apply the ratio to the dimensions.",
            "75 cm³": "This calculation is incorrect, possibly from using 3×5 + 2×5 + 1×5 = 30 (perimeter-like calculation)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch1_t2_qm7',
        type: "mcq",
        question: "A brick manufacturer makes 1 million bricks per month. If each brick has a volume of 1000 cm³, how much clay (in m³) is needed for a month's production?",
        options: ["100 m³", "1,000 m³", "10,000 m³", "100,000 m³"],
        correctAnswer: "1,000 m³",
        explanation: "Total volume = 1,000,000 bricks × 1000 cm³ = 1,000,000,000 cm³. Converting to cubic meters: 1,000,000,000 cm³ = 1,000,000,000 ÷ 1,000,000 = 1,000 m³. This calculation uses the conversion 1 m³ = 1,000,000 cm³. 🏭",
        wrongAnswerExplanations: {
            "100 m³": "This underestimates the clay needed by a factor of 10.",
            "10,000 m³": "This overestimates the clay needed by a factor of 10.",
            "100,000 m³": "This significantly overestimates the amount of clay needed."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch1_t2_qm8',
        type: "mcq",
        question: "A cube has 6 square faces of equal size. If a rectangular brick has the same volume as the cube but has a length twice its width, how does the brick's height compare to the cube's edge length?",
        options: ["It equals half the cube's edge length", "It equals the cube's edge length", "It equals twice the cube's edge length", "It depends on the exact dimensions"],
        correctAnswer: "It equals half the cube's edge length",
        explanation: "If cube edge = a, then volume = a³. For the brick with length 2w and width w, if height = h and volume = a³, then 2w × w × h = a³. This means h = a³/(2w²). For equal volumes, if w = a, then h = a/2. 🧮",
        wrongAnswerExplanations: {
            "It equals the cube's edge length": "This would make the brick's volume larger than the cube's.",
            "It equals twice the cube's edge length": "This would make the brick's volume even larger.",
            "It depends on the exact dimensions": "While technically true, given the constraints, there is a specific relationship."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch1_t2_qm9',
        type: "mcq",
        question: "An L-shaped brick is made by removing a smaller brick of dimensions 5 cm × 5 cm × 5 cm from one corner of a larger brick of dimensions 15 cm × 10 cm × 5 cm. What is the volume of the L-shaped brick?",
        options: ["625 cm³", "650 cm³", "675 cm³", "750 cm³"],
        correctAnswer: "625 cm³",
        explanation: "Volume of large brick = 15 × 10 × 5 = 750 cm³. Volume of removed cube = 5 × 5 × 5 = 125 cm³. Volume of L-shaped brick = 750 - 125 = 625 cm³. This creates a distinctive L-shape with a corner removed. 📐",
        wrongAnswerExplanations: {
            "650 cm³": "This doesn't correctly calculate the volume difference.",
            "675 cm³": "This doesn't correctly calculate the volume difference.",
            "750 cm³": "This is the volume of the original brick before the corner was removed."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch1_t2_qm10',
        type: "mcq",
        question: "Hollow bricks have holes that pass completely through them. If a brick measuring 20 cm × 10 cm × 5 cm has two circular holes each with a diameter of 2 cm passing through its height, approximately how much material is saved compared to a solid brick?",
        options: ["31.4 cm³", "62.8 cm³", "78.5 cm³", "157 cm³"],
        correctAnswer: "31.4 cm³",
        explanation: "Volume of two circular holes = 2 × π × r² × h = 2 × 3.14 × 1² × 5 = 2 × 15.7 = 31.4 cm³. This is the amount of clay saved by including the holes. 🧱",
        wrongAnswerExplanations: {
            "62.8 cm³": "This would be correct if the holes passed through the length (20 cm), not the height.",
            "78.5 cm³": "This incorrectly calculates the volume of the holes.",
            "157 cm³": "This significantly overestimates the volume of the holes."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch1_t2_qm11',
        type: "mcq",
        question: "If the mass of a standard brick (20 cm × 10 cm × 5 cm) is 1.5 kg, and a larger brick has double the length, width, and height, what is the mass of the larger brick?",
        options: ["3 kg", "6 kg", "9 kg", "12 kg"],
        correctAnswer: "12 kg",
        explanation: "When all dimensions are doubled, the volume increases by a factor of 2³ = 8. Since mass is proportional to volume for the same material, the larger brick's mass = 1.5 × 8 = 12 kg. 🧮",
        wrongAnswerExplanations: {
            "3 kg": "This would be correct if only one dimension was doubled, not all three.",
            "6 kg": "This would be correct if only two dimensions were doubled, not all three.",
            "9 kg": "This does not correctly account for the volume increase when all dimensions are doubled."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch1_t2_qm12',
        type: "mcq",
        question: "A wedge-shaped brick for an arch has a trapezoidal face. If the parallel sides of the trapezoid are 10 cm and 8 cm, and its height is 5 cm, what is the area of that face?",
        options: ["35 cm²", "40 cm²", "45 cm²", "50 cm²"],
        correctAnswer: "45 cm²",
        explanation: "The area of a trapezoid = ½ × h × (a + b), where h is height and a, b are parallel sides. Area = ½ × 5 × (10 + 8) = 2.5 × 18 = 45 cm². This shape allows bricks to form curved arches. 🌉",
        wrongAnswerExplanations: {
            "35 cm²": "This is incorrectly calculated and too small for the given dimensions.",
            "40 cm²": "This is incorrectly calculated, possibly from averaging the parallel sides and multiplying by height.",
            "50 cm²": "This is incorrectly calculated, possibly from 10 × 5 without accounting for the trapezoidal shape."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch1_t2_qm13',
        type: "mcq",
        question: "A brick wall is built using a pattern where each brick overlaps the ones below it by half a brick length. If the visible face of each brick is 20 cm × 5 cm, how many complete bricks are visible in a wall section that is 100 cm wide and 25 cm high?",
        options: ["10", "15", "20", "25"],
        correctAnswer: "25",
        explanation: "Each brick covers 20 cm × 5 cm. In each row, 100 cm ÷ 20 cm = 5 bricks. For 25 cm height, we have 25 cm ÷ 5 cm = 5 rows. Total visible bricks = 5 × 5 = 25. Running bond pattern creates a strong, stable wall. 🏛️",
        wrongAnswerExplanations: {
            "10": "This doesn't account for all rows in the wall.",
            "15": "This calculation is incorrect for the given dimensions.",
            "20": "This calculation is incorrect for the given dimensions."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch1_t2_qm14',
        type: "mcq",
        question: "If a brick has dimensions 24 cm × 12 cm × 8 cm, and the same amount of clay could be used to make smaller bricks with dimensions 12 cm × 6 cm × 4 cm, how many smaller bricks can be made from the material of one large brick?",
        options: ["2", "4", "8", "16"],
        correctAnswer: "8",
        explanation: "Volume of large brick = 24 × 12 × 8 = 2304 cm³. Volume of small brick = 12 × 6 × 4 = 288 cm³. Number of small bricks = 2304 ÷ 288 = 8. Each dimension is halved, so volume ratio is 1:8. 🧱",
        wrongAnswerExplanations: {
            "2": "This doesn't correctly account for the volume ratio between the bricks.",
            "4": "This would be correct if only two dimensions were halved, not all three.",
            "16": "This overestimates the number of small bricks that can be made."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch1_t2_qm15',
        type: "mcq",
        question: "A rectangular brick has faces A, B, and C. If face A has area 200 cm², face B has area 100 cm², and face C has area 50 cm², what are the dimensions of the brick?",
        options: ["20 cm × 10 cm × 5 cm", "20 cm × 5 cm × 2.5 cm", "25 cm × 8 cm × 5 cm", "40 cm × 5 cm × 2.5 cm"],
        correctAnswer: "20 cm × 10 cm × 5 cm",
        explanation: "If the dimensions are length l, width w, and height h, then: Face A = l×w = 200 cm², Face B = l×h = 100 cm², Face C = w×h = 50 cm². Solving: l = 20 cm, w = 10 cm, h = 5 cm. These create the required face areas. 📏",
        wrongAnswerExplanations: {
            "20 cm × 5 cm × 2.5 cm": "These dimensions give areas of 100 cm², 50 cm², and 12.5 cm², which don't match the given values.",
            "25 cm × 8 cm × 5 cm": "These dimensions give areas of 200 cm², 125 cm², and 40 cm², which don't match.",
            "40 cm × 5 cm × 2.5 cm": "These dimensions give areas of 200 cm², 100 cm², and 12.5 cm², which don't all match."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
        },    {        id: 'cl4_ch1_t2_qm16',        type: "mcq",        question: "A brick wall uses bricks measuring 20 cm × 10 cm × 5 cm, with the 20 cm × 10 cm face showing. If bricks are placed with no gaps and no overlap, how many bricks are needed for a wall 2 m high and 3 m wide?",        options: ["60", "120", "150", "300"],        correctAnswer: "300",        explanation: "Wall dimensions: 200 cm × 300 cm. Visible brick face: 20 cm × 10 cm. Number of bricks in width = 300 ÷ 20 = 15. Number of bricks in height = 200 ÷ 10 = 20. Total = 15 × 20 = 300 bricks. 🏗️",        wrongAnswerExplanations: {            "60": "This would be correct if the 20 cm × 5 cm face was showing, which isn't the case.",            "120": "This would be correct if the wall was only 1 m high, not 2 m.",            "150": "This would be correct if the wall was 1 m high and 5 m wide, which isn't the case."        },        difficulty: "medium",        marks: 2,        recommendedTime: 60    },
    {
        id: 'cl4_ch1_t2_qm17',
        type: "mcq",
        question: "A special decorative brick is shaped like a triangular prism with a right-angled triangular base. If the two shorter sides of the triangle measure 6 cm and 8 cm, and the length of the prism is 20 cm, what is the volume of this brick?",
        options: ["480 cm³", "960 cm³", "1200 cm³", "1920 cm³"],
        correctAnswer: "480 cm³",
        explanation: "Volume of triangular prism = area of triangular base × length. Area of right-angled triangle = (6 × 8) ÷ 2 = 24 cm². Volume = 24 × 20 = 480 cm³. This shape creates interesting architectural details. 📐",
        wrongAnswerExplanations: {
            "960 cm³": "This would be correct if the base was a rectangle of 6 × 8, not a triangle.",
            "1200 cm³": "This calculation is incorrect for the given shape.",
            "1920 cm³": "This calculation is incorrect for the given shape."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch1_t2_qm18',
        type: "mcq",
        question: "A brick has a frog (depression) on one face that is 10 cm × 5 cm and 1 cm deep. If the brick's outer dimensions are 20 cm × 10 cm × 5 cm, what is the actual volume of clay in the brick?",
        options: ["950 cm³", "975 cm³", "990 cm³", "1000 cm³"],
        correctAnswer: "950 cm³",
        explanation: "Volume of brick without frog = 20 × 10 × 5 = 1000 cm³. Volume of frog = 10 × 5 × 1 = 50 cm³. Actual volume of clay = 1000 - 50 = 950 cm³. The frog reduces weight while maintaining strength. 🧱",
        wrongAnswerExplanations: {
            "975 cm³": "This calculation is incorrect for the given dimensions of the frog.",
            "990 cm³": "This calculation is incorrect for the given dimensions of the frog.",
            "1000 cm³": "This is the volume without accounting for the frog depression."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch1_t2_qm19',
        type: "mcq",
        question: "In a pyramid-shaped stack of identical cubic bricks, there are 25 bricks in the bottom square layer, 16 in the next layer up, then 9, then 4, and finally 1 brick at the top. How many bricks are in the entire pyramid?",
        options: ["45", "55", "60", "65"],
        correctAnswer: "55",
        explanation: "Total bricks = 25 + 16 + 9 + 4 + 1 = 55. This forms a perfect square pyramid with 5 layers. Each layer is a square with side length decreasing by 1 from the layer below. 🔺",
        wrongAnswerExplanations: {
            "45": "This doesn't account for all bricks in all layers.",
            "60": "This is more than the sum of bricks in all the given layers.",
            "65": "This is more than the sum of bricks in all the given layers."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch1_t2_qm20',
        type: "mcq",
        question: "A brick has dimensions 20 cm × 10 cm × 5 cm. What is the ratio of its total surface area to its volume?",
        options: ["0.7", "0.9", "1.1", "1.3"],
        correctAnswer: "0.7",
        explanation: "Surface area = 2(l×w + l×h + w×h) = 2(20×10 + 20×5 + 10×5) = 2(200 + 100 + 50) = 2(350) = 700 cm². Volume = 20 × 10 × 5 = 1000 cm³. Ratio = 700 ÷ 1000 = 0.7. 📊",
        wrongAnswerExplanations: {
            "0.9": "This calculation is incorrect for the given dimensions.",
            "1.1": "This calculation is incorrect for the given dimensions.",
            "1.3": "This calculation is incorrect for the given dimensions."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    }
]; 