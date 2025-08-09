import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl5_ch14_t1_qe1',
        type: "mcq",
        question: "Which unit is larger for measuring volume?",
        options: ["Millilitre (mL)", "Litre (L)", "Gram (g)", "Centimetre (cm)"],
        correctAnswer: "Litre (L)",
        explanation: "1 Litre = 1000 mL, so Litre (L) is larger than millilitre. Litres are used to measure larger volumes of liquids. 📏💧",
        wrongAnswerExplanations: {
            "Millilitre (mL)": "Millilitre is smaller than Litre. 1000 mL = 1 L.",
            "Gram (g)": "Gram is a unit of mass, not volume. It measures how heavy something is.",
            "Centimetre (cm)": "Centimetre is a unit of length, not volume. It measures distances."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch14_t1_qe2',
        type: "mcq",
        question: "How many millilitres are there in 1 litre?",
        options: ["10", "100", "1000", "500"],
        correctAnswer: "1000",
        explanation: "1 L = 1000 mL is the standard conversion between litres and millilitres in the metric system. 🧮",
        wrongAnswerExplanations: {
            "10": "10 mL is much less than 1 L. It's only 1/100th of a litre.",
            "100": "100 mL is only 1/10th of a litre.",
            "500": "500 mL is half a litre, not a full litre."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch14_t1_qe3',
        type: "mcq",
        question: "Which tool is best for measuring 200 mL of water?",
        options: ["Ruler", "Measuring cup", "Weighing scale", "Thermometer"],
        correctAnswer: "Measuring cup",
        explanation: "Measuring cups are marked with volume units like mL and L, making them perfect for measuring liquids accurately. 🥤",
        wrongAnswerExplanations: {
            "Ruler": "Rulers measure length, not volume.",
            "Weighing scale": "Weighing scales measure mass or weight, not volume directly.",
            "Thermometer": "Thermometers measure temperature, not volume."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch14_t1_qe4',
        type: "mcq",
        question: "A medicine cup holds 5 mL. How many cups would you need to measure 1 L?",
        options: ["20", "100", "200", "500"],
        correctAnswer: "200",
        explanation: "1000 mL ÷ 5 mL = 200 cups. You need 200 medicine cups to hold 1 L of liquid. 💊",
        wrongAnswerExplanations: {
            "20": "20 medicine cups would only hold 20 × 5 = 100 mL.",
            "100": "100 medicine cups would only hold 100 × 5 = 500 mL.",
            "500": "500 medicine cups would hold 500 × 5 = 2500 mL, which is more than 1 L."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch14_t1_qe5',
        type: "mcq",
        question: "Which of these is most likely to be measured in litres?",
        options: ["A drop of water", "A bucket of water", "A spoon of syrup", "A raindrop"],
        correctAnswer: "A bucket of water",
        explanation: "Buckets typically hold several litres of water, making litres the appropriate unit. Small amounts use mL. 🪣",
        wrongAnswerExplanations: {
            "A drop of water": "A single drop is very small, measured in mL or even smaller units.",
            "A spoon of syrup": "A spoonful is usually 5-15 mL, too small for litre measurements.",
            "A raindrop": "A raindrop is tiny, much smaller than 1 mL."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch14_t1_qe6',
        type: "mcq",
        question: "What is the volume of a standard water bottle?",
        options: ["500 mL", "5 L", "50 mL", "50 L"],
        correctAnswer: "500 mL",
        explanation: "Standard water bottles typically hold about 500 mL (half a litre) of water. 💦",
        wrongAnswerExplanations: {
            "5 L": "5 L is much larger than a standard water bottle, closer to a large jug.",
            "50 mL": "50 mL is very small, about the size of a shot glass.",
            "50 L": "50 L is extremely large, like a small water tank."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch14_t1_qe7',
        type: "mcq",
        question: "If you pour 300 mL of juice into a glass that can hold 400 mL, how much more juice can you add?",
        options: ["100 mL", "700 mL", "300 mL", "400 mL"],
        correctAnswer: "100 mL",
        explanation: "400 mL - 300 mL = 100 mL of space remains in the glass. 🧃",
        wrongAnswerExplanations: {
            "700 mL": "This exceeds the glass capacity of 400 mL.",
            "300 mL": "This would overflow as the glass already contains 300 mL.",
            "400 mL": "This would overflow since the glass already has 300 mL."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch14_t1_qe8',
        type: "mcq",
        question: "What volume of liquid is in a teaspoon?",
        options: ["About 5 mL", "About 50 mL", "About 500 mL", "About 1 L"],
        correctAnswer: "About 5 mL",
        explanation: "A standard teaspoon holds approximately 5 mL of liquid. Used for small measurements in cooking and medicine. 🥄",
        wrongAnswerExplanations: {
            "About 50 mL": "50 mL is about the volume of a shot glass, much larger than a teaspoon.",
            "About 500 mL": "500 mL is half a litre, the size of a water bottle.",
            "About 1 L": "1 L is much larger than a teaspoon, closer to a large water bottle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch14_t1_qe9',
        type: "mcq",
        question: "How much milk would fill a normal drinking glass?",
        options: ["About 2 mL", "About 20 mL", "About 200 mL", "About 2 L"],
        correctAnswer: "About 200 mL",
        explanation: "A typical drinking glass holds about 200-250 mL of liquid. 🥛",
        wrongAnswerExplanations: {
            "About 2 mL": "2 mL is just a few drops, much too small for a drinking glass.",
            "About 20 mL": "20 mL is about a tablespoon, too small for a drinking glass.",
            "About 2 L": "2 L is much too large for a standard drinking glass."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch14_t1_qe10',
        type: "mcq",
        question: "Which would hold more water?",
        options: ["2 L bottle", "1500 mL jug", "0.5 L cup", "750 mL container"],
        correctAnswer: "2 L bottle",
        explanation: "2 L = 2000 mL, which is larger than 1500 mL, 500 mL, or 750 mL. 📊",
        wrongAnswerExplanations: {
            "1500 mL jug": "1500 mL is less than 2 L (2000 mL).",
            "0.5 L cup": "0.5 L = 500 mL, which is much less than 2 L.",
            "750 mL container": "750 mL is less than half of 2 L (2000 mL)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch14_t1_qe11',
        type: "mcq",
        question: "What symbol represents the unit litre?",
        options: ["Lt", "l", "L", "lr"],
        correctAnswer: "L",
        explanation: "The capital letter L is the standard symbol for litre in the metric system. 📝",
        wrongAnswerExplanations: {
            "Lt": "Lt is not the standard symbol for litre.",
            "l": "Lowercase l can be confused with the number 1, so capital L is preferred.",
            "lr": "lr is not a standard unit symbol in the metric system."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch14_t1_qe12',
        type: "mcq",
        question: "Which would you use to measure the juice in a recipe?",
        options: ["Ruler", "Clock", "Measuring cup", "Scale"],
        correctAnswer: "Measuring cup",
        explanation: "Measuring cups show volume markings for liquids like juice, helping follow recipes precisely. 🧪",
        wrongAnswerExplanations: {
            "Ruler": "Rulers measure length, not liquid volume.",
            "Clock": "Clocks measure time, not volume.",
            "Scale": "Scales measure weight, not volume directly."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch14_t1_qe13',
        type: "mcq",
        question: "Half a litre is equal to:",
        options: ["5 mL", "50 mL", "500 mL", "5000 mL"],
        correctAnswer: "500 mL",
        explanation: "Half of 1 L = half of 1000 mL = 500 mL. 🧮",
        wrongAnswerExplanations: {
            "5 mL": "5 mL is only 0.005 L (a teaspoon).",
            "50 mL": "50 mL is only 0.05 L (1/20 of a litre).",
            "5000 mL": "5000 mL = 5 L, which is 5 times more than a litre."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch14_t1_qe14',
        type: "mcq",
        question: "A kettle holds 1.5 L of water. How many mL is this?",
        options: ["15 mL", "150 mL", "1500 mL", "15000 mL"],
        correctAnswer: "1500 mL",
        explanation: "1.5 L = 1.5 × 1000 mL = 1500 mL. 🫖",
        wrongAnswerExplanations: {
            "15 mL": "15 mL is too small, just a tablespoon.",
            "150 mL": "150 mL is only 0.15 L, much less than 1.5 L.",
            "15000 mL": "15000 mL = 15 L, which is 10 times more than 1.5 L."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch14_t1_qe15',
        type: "mcq",
        question: "A swimming pool contains thousands of litres of water. What does this tell us about litres?",
        options: ["Litres are only for small amounts", "Litres are a very small unit", "Litres can measure large volumes too", "Litres are only for cooking"],
        correctAnswer: "Litres can measure large volumes too",
        explanation: "Litres can measure both small and large volumes. For very large amounts, we simply use larger numbers of litres. 🏊",
        wrongAnswerExplanations: {
            "Litres are only for small amounts": "Litres can measure large volumes by using larger numbers.",
            "Litres are a very small unit": "Litres are not small; a litre is quite substantial.",
            "Litres are only for cooking": "Litres are used in many contexts beyond cooking."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch14_t1_qe16',
        type: "mcq",
        question: "Which is the smallest volume?",
        options: ["3 L", "300 mL", "3000 mL", "30 mL"],
        correctAnswer: "30 mL",
        explanation: "30 mL is the smallest: 30 mL < 300 mL < 3 L (3000 mL) = 3000 mL. 📉",
        wrongAnswerExplanations: {
            "3 L": "3 L = 3000 mL, larger than 30 mL.",
            "300 mL": "300 mL is larger than 30 mL.",
            "3000 mL": "3000 mL = 3 L, the largest option."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch14_t1_qe17',
        type: "mcq",
        question: "Which container is best for measuring 750 mL of water?",
        options: ["Teaspoon", "Medicine cup", "Measuring jug", "Eyedropper"],
        correctAnswer: "Measuring jug",
        explanation: "Measuring jugs are designed for volumes like 750 mL. They have clear markings and adequate capacity. 🧪",
        wrongAnswerExplanations: {
            "Teaspoon": "Teaspoons measure only about 5 mL, too small for 750 mL.",
            "Medicine cup": "Medicine cups typically hold 30-60 mL, too small for 750 mL.",
            "Eyedropper": "Eyedroppers measure drops (about 0.05 mL), far too small for 750 mL."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch14_t1_qe18',
        type: "mcq",
        question: "What might hold exactly 1 L of liquid?",
        options: ["A teacup", "A tablespoon", "A carton of milk", "A medicine dropper"],
        correctAnswer: "A carton of milk",
        explanation: "Standard milk cartons often hold exactly 1 L of milk. This is a common commercial packaging size. 🥛",
        wrongAnswerExplanations: {
            "A teacup": "Teacups typically hold about 200-250 mL, much less than 1 L.",
            "A tablespoon": "A tablespoon holds only about 15 mL.",
            "A medicine dropper": "Medicine droppers typically hold only 1-5 mL."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch14_t1_qe19',
        type: "mcq",
        question: "250 mL + 750 mL = ?",
        options: ["100 mL", "1 L", "10 L", "1000 mL"],
        correctAnswer: "1 L",
        explanation: "250 mL + 750 mL = 1000 mL = 1 L. Adding these volumes gives exactly one litre. 🧮",
        wrongAnswerExplanations: {
            "100 mL": "This is much less than the sum of 250 mL and 750 mL.",
            "10 L": "10 L = 10,000 mL, much more than 250 mL + 750 mL.",
            "1000 mL": "1000 mL is correct, but this equals 1 L, which is also listed."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch14_t1_qe20',
        type: "mcq",
        question: "What is the volume of liquid in a large bathtub?",
        options: ["About 2 mL", "About 200 mL", "About 200 L", "About 2000 L"],
        correctAnswer: "About 200 L",
        explanation: "A standard bathtub holds approximately 150-300 L of water. 🛁",
        wrongAnswerExplanations: {
            "About 2 mL": "2 mL is just a few drops, not enough to fill a bathtub.",
            "About 200 mL": "200 mL is less than a glass of water, nowhere near enough for a bathtub.",
            "About 2000 L": "2000 L is too much for a typical bathtub, more like a small swimming pool."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
