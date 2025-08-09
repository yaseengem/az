import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch9_t3_qm1',
        type: "mcq",
        question: "A cylindrical container's radius is increased by 10% while its height is decreased by 10%. How does this affect its volume?",
        options: ["Decreases by 10%", "Increases by 10%", "Decreases by 1%", "Increases by 1%"],
        correctAnswer: "Decreases by 1%",
        explanation: "New volume = π(1.1r)²(0.9h) = 1.21 × 0.9 × πr²h = 0.99V (99% of original). Volume decreases by 1%. This helps understand dimensional changes. 📐",
        wrongAnswerExplanations: {
            "Decreases by 10%": "The effect of radius change is squared, making this incorrect.",
            "Increases by 10%": "The volume actually decreases, not increases.",
            "Increases by 1%": "The volume decreases by 1%, not increases."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch9_t3_qm2',
        type: "mcq",
        question: "A cube is melted and recast into a cylinder of equal volume. If the cylinder's radius equals its height, how does the cylinder's radius compare to the cube's edge?",
        options: ["r = a", "r = a/2", "r = a/∛π", "r = a/√π"],
        correctAnswer: "r = a/∛π",
        explanation: "If cube volume = cylinder volume, then a³ = πr²r (since h = r). So r³ = a³/π, therefore r = a/∛π. This helps in material conservation problems. 🔄",
        wrongAnswerExplanations: {
            "r = a": "This would make the cylinder's volume much larger than the cube's.",
            "r = a/2": "This would make the cylinder's volume smaller than the cube's.",
            "r = a/√π": "This doesn't account for the cube root needed in volume equality."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch9_t3_qm3',
        type: "mcq",
        question: "A water tank in the shape of a cuboid has base area 2 m². If 1000 liters of water fills it to a height of 50 cm, what is its capacity in liters?",
        options: ["2000 L", "3000 L", "4000 L", "5000 L"],
        correctAnswer: "4000 L",
        explanation: "Tank height = 2 m (since 1000 L = 1 m³ fills 0.5 m). Volume = base area × height = 2 × 2 = 4 m³ = 4000 L. This helps in storage calculations. 💧",
        wrongAnswerExplanations: {
            "2000 L": "This only considers half the height.",
            "3000 L": "This is an incorrect calculation of the volume.",
            "5000 L": "This overestimates the tank's capacity."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch9_t3_qm4',
        type: "mcq",
        question: "A solid metal cube of side 10 cm is melted and drawn into a wire of circular cross-section with diameter 1 cm. What is the length of the wire in meters?",
        options: ["4 m", "40 m", "400 m", "4000 m"],
        correctAnswer: "40 m",
        explanation: "Cube volume = wire volume. 10³ = π(0.5)²L. So L = 1000/(π/4) = 40 m. This helps in material transformation problems. 🔧",
        wrongAnswerExplanations: {
            "4 m": "This underestimates the length by a factor of 10.",
            "400 m": "This overestimates the length by a factor of 10.",
            "4000 m": "This overestimates the length by a factor of 100."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch9_t3_qm5',
        type: "mcq",
        question: "A cylindrical bucket of radius 14 cm and height 30 cm is filled with water. If it is poured into cubic boxes of side 7 cm, how many boxes can be filled completely?",
        options: ["24 boxes", "36 boxes", "48 boxes", "60 boxes"],
        correctAnswer: "36 boxes",
        explanation: "Bucket volume = πr²h = π × 14² × 30. Box volume = 7³. Number of boxes = (π × 196 × 30)/(343) ≈ 36. This helps in volume conversion. 🪣",
        wrongAnswerExplanations: {
            "24 boxes": "This underestimates the number of boxes needed.",
            "48 boxes": "This overestimates the number of boxes needed.",
            "60 boxes": "This greatly overestimates the number of boxes needed."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch9_t3_qm6',
        type: "mcq",
        question: "A cylindrical pipe of inner radius 7 cm and thickness 1 cm has length 5 m. What is the volume of metal used in making the pipe?",
        options: ["440π cm³", "880π cm³", "1320π cm³", "1760π cm³"],
        correctAnswer: "880π cm³",
        explanation: "Volume = π(outer radius)²L - π(inner radius)²L = π(8² - 7²) × 500 = 880π cm³. This helps calculate material requirements. 🔨",
        wrongAnswerExplanations: {
            "440π cm³": "This is half of the correct volume.",
            "1320π cm³": "This overestimates the volume of metal used.",
            "1760π cm³": "This greatly overestimates the volume of metal used."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch9_t3_qm7',
        type: "mcq",
        question: "A solid cylinder fits exactly inside a cube. If the cube's edge is 10 cm, what is the volume of the space between the cube and cylinder in cubic centimeters?",
        options: ["1000(1 - π/4)", "100(10 - π)", "250(4 - π)", "1000(4 - π)"],
        correctAnswer: "1000(1 - π/4)",
        explanation: "Cube volume = 1000 cm³, cylinder volume = π(5)²(10) = 250π cm³. Difference = 1000 - 250π = 1000(1 - π/4) cm³. This helps in packaging design. 📦",
        wrongAnswerExplanations: {
            "100(10 - π)": "This uses incorrect dimensions in the calculation.",
            "250(4 - π)": "This doesn't correctly represent the volume difference.",
            "1000(4 - π)": "This overestimates the volume difference."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch9_t3_qm8',
        type: "mcq",
        question: "A hemispherical bowl of radius 7 cm is completely filled with water. If the water is poured into a cylindrical pipe of radius 3.5 cm, what will be the height of water in the pipe?",
        options: ["4.67 cm", "9.33 cm", "14 cm", "28 cm"],
        correctAnswer: "14 cm",
        explanation: "Bowl volume = (2/3)πr³ = (2/3)π(7³). Pipe volume = πr²h. Equating: (2/3)π(7³) = π(3.5)²h. So h = 14 cm. This helps in volume transfer problems. 🥣",
        wrongAnswerExplanations: {
            "4.67 cm": "This is one-third of the correct height.",
            "9.33 cm": "This is two-thirds of the correct height.",
            "28 cm": "This is twice the correct height."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch9_t3_qm9',
        type: "mcq",
        question: "A metal sheet of area 1848 cm² is used to make a closed cylindrical can. If the radius of the base is 7 cm, what is the height of the can?",
        options: ["12 cm", "13 cm", "14 cm", "15 cm"],
        correctAnswer: "13 cm",
        explanation: "Area = 2πr² + 2πrh. 1848 = 2π(49) + 2π(7)h. Solving: h = 13 cm. This helps in container manufacturing calculations. 🥫",
        wrongAnswerExplanations: {
            "12 cm": "This gives a surface area less than 1848 cm².",
            "14 cm": "This gives a surface area more than 1848 cm².",
            "15 cm": "This gives a surface area much more than 1848 cm²."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch9_t3_qm10',
        type: "mcq",
        question: "A solid metal sphere of radius 6 cm is melted and recast into a cube. What is the edge length of the cube?",
        options: ["6 cm", "8 cm", "9.6 cm", "12 cm"],
        correctAnswer: "9.6 cm",
        explanation: "Sphere volume = cube volume. (4/3)πr³ = a³. So a = ∛((4/3)π × 216) ≈ 9.6 cm. This helps in material conservation problems. 🔄",
        wrongAnswerExplanations: {
            "6 cm": "This would make the cube's volume much smaller than the sphere's.",
            "8 cm": "This gives a cube with insufficient volume.",
            "12 cm": "This would make the cube's volume too large."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 