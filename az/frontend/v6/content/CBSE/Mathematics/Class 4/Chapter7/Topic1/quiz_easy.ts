import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch7_t1_qe1',
        type: "mcq",
        question: "Which of the following is the standard unit for measuring liquid volume?",
        options: ["Meter", "Kilogram", "Litre", "Centimeter"],
        correctAnswer: "Litre",
        explanation: "Litre is the standard unit for measuring liquid volume. 💧",
        wrongAnswerExplanations: {
            "Meter": "Meter is a unit of length, not volume.",
            "Kilogram": "Kilogram is a unit of weight/mass, not volume.",
            "Centimeter": "Centimeter is a unit of length, not volume."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch7_t1_qe2',
        type: "mcq",
        question: "How many millilitres (ml) make 1 litre?",
        options: ["10 ml", "100 ml", "1000 ml", "10000 ml"],
        correctAnswer: "1000 ml",
        explanation: "1 litre equals 1000 millilitres. This is a basic conversion in liquid measurement. 🧪",
        wrongAnswerExplanations: {
            "10 ml": "This is too small. 10 ml is just 1/100 of a litre.",
            "100 ml": "This is too small. 100 ml is just 1/10 of a litre.",
            "10000 ml": "This is too large. 10000 ml equals 10 litres."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch7_t1_qe3',
        type: "mcq",
        question: "Which container would hold more water? 🚿",
        options: ["A cup with 250 ml", "A mug with 300 ml", "A glass with 200 ml", "A bowl with 150 ml"],
        correctAnswer: "A mug with 300 ml",
        explanation: "300 ml is the largest volume among the given options, so the mug would hold more water.",
        wrongAnswerExplanations: {
            "A cup with 250 ml": "250 ml is less than 300 ml.",
            "A glass with 200 ml": "200 ml is less than 300 ml.",
            "A bowl with 150 ml": "150 ml is less than 300 ml."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch7_t1_qe4',
        type: "mcq",
        question: "If you pour 500 ml of water from a 1-litre bottle, how much water remains in the bottle?",
        options: ["250 ml", "500 ml", "750 ml", "1000 ml"],
        correctAnswer: "500 ml",
        explanation: "If 500 ml is poured out from 1 litre (1000 ml), then 1000 ml - 500 ml = 500 ml remains. 🧮",
        wrongAnswerExplanations: {
            "250 ml": "This is incorrect. 1000 ml - 500 ml = 500 ml, not 250 ml.",
            "750 ml": "This is incorrect. 1000 ml - 500 ml = 500 ml, not 750 ml.",
            "1000 ml": "This is incorrect. Some water was poured out, so it can't still be full."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch7_t1_qe5',
        type: "mcq",
        question: "Which is smaller in volume?",
        options: ["1 litre", "500 millilitres", "1500 millilitres", "2 litres"],
        correctAnswer: "500 millilitres",
        explanation: "500 ml = 0.5 litre, which is the smallest among all options. 📏",
        wrongAnswerExplanations: {
            "1 litre": "1 litre = 1000 ml, which is larger than 500 ml.",
            "1500 millilitres": "1500 ml = 1.5 litres, which is larger than 500 ml.",
            "2 litres": "2 litres = 2000 ml, which is larger than 500 ml."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch7_t1_qe6',
        type: "mcq",
        question: "Which activity would most likely involve measuring liquid volume? 🔍",
        options: ["Measuring the height of a door", "Baking a cake", "Weighing fruits", "Drawing a square"],
        correctAnswer: "Baking a cake",
        explanation: "Baking a cake involves measuring liquid ingredients like milk, water, or oil in specific volumes.",
        wrongAnswerExplanations: {
            "Measuring the height of a door": "This involves measuring length, not volume.",
            "Weighing fruits": "This involves measuring weight/mass, not volume.",
            "Drawing a square": "This involves measuring length and angles, not volume."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch7_t1_qe7',
        type: "mcq",
        question: "Which of these containers is typically used to measure small amounts of liquid in cooking? 🍲",
        options: ["Bucket", "Measuring cup", "Bathtub", "Water tank"],
        correctAnswer: "Measuring cup",
        explanation: "A measuring cup is designed to measure specific volumes of liquid for cooking recipes.",
        wrongAnswerExplanations: {
            "Bucket": "A bucket is too large for precise measurements in cooking.",
            "Bathtub": "A bathtub is for bathing, not for measuring cooking ingredients.",
            "Water tank": "A water tank stores large amounts of water, not for cooking measurements."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch7_t1_qe8',
        type: "mcq",
        question: "If Ravi drinks 2 glasses of water, each containing 200 ml, how much water did he drink in total?",
        options: ["100 ml", "200 ml", "400 ml", "600 ml"],
        correctAnswer: "400 ml",
        explanation: "2 glasses × 200 ml per glass = 400 ml total. This is simple multiplication. 💧",
        wrongAnswerExplanations: {
            "100 ml": "This is less than even one glass. 2 glasses × 200 ml = 400 ml.",
            "200 ml": "This is the amount in only one glass. 2 glasses × 200 ml = 400 ml.",
            "600 ml": "This is too much. 2 glasses × 200 ml = 400 ml, not 600 ml."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch7_t1_qe9',
        type: "mcq",
        question: "A small teaspoon can hold approximately:",
        options: ["5 millilitres", "50 millilitres", "500 millilitres", "5 litres"],
        correctAnswer: "5 millilitres",
        explanation: "A standard teaspoon holds about 5 ml of liquid, which is a common measurement in cooking. 🥄",
        wrongAnswerExplanations: {
            "50 millilitres": "This is too large for a teaspoon. A teaspoon holds about 5 ml.",
            "500 millilitres": "This is equal to half a litre, much larger than a teaspoon.",
            "5 litres": "This is extremely large, equal to 5000 ml or 1000 teaspoons."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch7_t1_qe10',
        type: "mcq",
        question: "Which of these would you most likely measure in litres? 🚰",
        options: ["The weight of a book", "The distance between two cities", "The amount of water in a fish tank", "The height of a plant"],
        correctAnswer: "The amount of water in a fish tank",
        explanation: "Water volume in containers like fish tanks is measured in litres or millilitres.",
        wrongAnswerExplanations: {
            "The weight of a book": "Weight is measured in units like grams or kilograms, not litres.",
            "The distance between two cities": "Distance is measured in units like kilometers or miles, not litres.",
            "The height of a plant": "Height is measured in units like centimeters or inches, not litres."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch7_t1_qe11',
        type: "mcq",
        question: "How many 250 ml cups can be filled from a 1-litre jug?",
        options: ["2 cups", "4 cups", "5 cups", "10 cups"],
        correctAnswer: "4 cups",
        explanation: "1 litre = 1000 ml. 1000 ÷ 250 = 4, so you can fill 4 cups of 250 ml each. 🧮",
        wrongAnswerExplanations: {
            "2 cups": "This is incorrect. 2 cups would be 500 ml, only half of the 1 litre.",
            "5 cups": "This is too many. 5 cups would need 1250 ml, more than 1 litre.",
            "10 cups": "This is far too many. 10 cups would need 2500 ml, more than twice 1 litre."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch7_t1_qe12',
        type: "mcq",
        question: "Which illustration shows a measurement of approximately 1 litre? 🧪",
        options: ["A small medicine dropper", "A standard water bottle", "A tea cup", "A large bathtub"],
        correctAnswer: "A standard water bottle",
        explanation: "A standard water bottle typically holds about 1 litre of liquid.",
        wrongAnswerExplanations: {
            "A small medicine dropper": "A medicine dropper holds just a few millilitres, much less than 1 litre.",
            "A tea cup": "A tea cup typically holds about 150-200 ml, much less than 1 litre.",
            "A large bathtub": "A bathtub holds many litres of water, much more than just 1 litre."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch7_t1_qe13',
        type: "mcq",
        question: "If you have a 500 ml bottle that is half full, how much water is in it?",
        options: ["125 ml", "250 ml", "500 ml", "1000 ml"],
        correctAnswer: "250 ml",
        explanation: "Half of 500 ml is 500 ÷ 2 = 250 ml. 🧮",
        wrongAnswerExplanations: {
            "125 ml": "This is a quarter of 500 ml, not half.",
            "500 ml": "This would be a completely full bottle, not half full.",
            "1000 ml": "This is twice the capacity of the bottle, which is impossible."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch7_t1_qe14',
        type: "mcq",
        question: "Which of these has the largest volume? 🌊",
        options: ["300 millilitres", "0.5 litres", "0.3 litres", "250 millilitres"],
        correctAnswer: "0.5 litres",
        explanation: "0.5 litres = 500 ml, which is greater than 300 ml, 300 ml, and 250 ml.",
        wrongAnswerExplanations: {
            "300 millilitres": "300 ml is less than 500 ml (0.5 litres).",
            "0.3 litres": "0.3 litres = 300 ml, which is less than 500 ml (0.5 litres).",
            "250 millilitres": "250 ml is less than 500 ml (0.5 litres)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch7_t1_qe15',
        type: "mcq",
        question: "If a recipe needs 750 ml of milk, how many 250 ml cups of milk should you use?",
        options: ["2 cups", "3 cups", "4 cups", "5 cups"],
        correctAnswer: "3 cups",
        explanation: "750 ÷ 250 = 3, so you need 3 cups of 250 ml each. 🥛",
        wrongAnswerExplanations: {
            "2 cups": "2 cups would give 500 ml, which is less than the required 750 ml.",
            "4 cups": "4 cups would give 1000 ml, which is more than the required 750 ml.",
            "5 cups": "5 cups would give 1250 ml, which is much more than the required 750 ml."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch7_t1_qe16',
        type: "mcq",
        question: "Which tool would be most appropriate for measuring 30 ml of liquid medicine? 💉",
        options: ["Measuring cup", "Bucket", "Syringe or medicine cup", "Watering can"],
        correctAnswer: "Syringe or medicine cup",
        explanation: "Syringes and medicine cups are designed to measure small, precise amounts of liquid.",
        wrongAnswerExplanations: {
            "Measuring cup": "A regular measuring cup is too large for precise small measurements of 30 ml.",
            "Bucket": "A bucket is far too large to measure a small amount like 30 ml.",
            "Watering can": "A watering can is for gardening and not precise enough for medicine."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch7_t1_qe17',
        type: "mcq",
        question: "Meera has 3 bottles of water. Each bottle contains 750 ml. How much water does she have in total?",
        options: ["1500 ml", "2250 ml", "2500 ml", "3000 ml"],
        correctAnswer: "2250 ml",
        explanation: "3 bottles × 750 ml = 2250 ml total. This is simple multiplication. 💧",
        wrongAnswerExplanations: {
            "1500 ml": "This would be for 2 bottles (2 × 750 ml), not 3 bottles.",
            "2500 ml": "This is incorrect. 3 × 750 ml = 2250 ml, not 2500 ml.",
            "3000 ml": "This would be for 4 bottles (4 × 750 ml), not 3 bottles."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch7_t1_qe18',
        type: "mcq",
        question: "Which of these would be measured in litres? 🚿",
        options: ["The length of a pencil", "The weight of a dog", "The water in a swimming pool", "The time taken to run a race"],
        correctAnswer: "The water in a swimming pool",
        explanation: "The volume of water in containers like swimming pools is measured in litres.",
        wrongAnswerExplanations: {
            "The length of a pencil": "Length is measured in units like centimeters or inches, not litres.",
            "The weight of a dog": "Weight is measured in units like kilograms or pounds, not litres.",
            "The time taken to run a race": "Time is measured in units like seconds or minutes, not litres."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch7_t1_qe19',
        type: "mcq",
        question: "A small glass can hold 200 ml of water. How many glasses would you need to drink 1 litre of water?",
        options: ["2 glasses", "4 glasses", "5 glasses", "10 glasses"],
        correctAnswer: "5 glasses",
        explanation: "1 litre = 1000 ml. 1000 ÷ 200 = 5, so you need 5 glasses of 200 ml each. 🧮",
        wrongAnswerExplanations: {
            "2 glasses": "2 glasses would give 400 ml, less than half of 1 litre.",
            "4 glasses": "4 glasses would give 800 ml, which is less than 1 litre.",
            "10 glasses": "10 glasses would give 2000 ml, which is 2 litres, not 1 litre."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch7_t1_qe20',
        type: "mcq",
        question: "Which statement is correct about liquid measurement? 🧪",
        options: [
            "A litre is smaller than a millilitre", 
            "1000 millilitres make 1 litre", 
            "We measure liquid volume in kilograms", 
            "Centimetres are used to measure liquid volume"
        ],
        correctAnswer: "1000 millilitres make 1 litre",
        explanation: "1 litre equals 1000 millilitres. This is the standard conversion in the metric system.",
        wrongAnswerExplanations: {
            "A litre is smaller than a millilitre": "This is incorrect. A litre is 1000 times larger than a millilitre.",
            "We measure liquid volume in kilograms": "Kilograms measure mass/weight, not volume. Litres measure volume.",
            "Centimetres are used to measure liquid volume": "Centimetres measure length, not volume. Litres measure volume."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
