import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch12_t2_qm1',
        type: "mcq",
        question: "Ravi buys 2 kg 350 g of apples and 1 kg 750 g of oranges. What is the total weight of the fruits?",
        options: [
            "3 kg 100 g",
            "4 kg",
            "4 kg 100 g",
            "4 kg 150 g"
        ],
        correctAnswer: "4 kg 100 g",
        explanation: "Adding the weights: 2 kg 350 g + 1 kg 750 g = 3 kg + 1100 g = 4 kg 100 g. We combine the kg parts and g parts separately.",
        wrongAnswerExplanations: {
            "3 kg 100 g": "This is incorrect. The kg parts add up to 3 kg, but the g parts add up to 1100 g, giving a total of 4 kg 100 g.",
            "4 kg": "This is close but not exact. Adding the g parts: 350 g + 750 g = 1100 g = 1 kg 100 g.",
            "4 kg 150 g": "This is incorrect. The g parts add up to 350 g + 750 g = 1100 g, not 150 g."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch12_t2_qm2',
        type: "mcq",
        question: "Seema had 5 kg of rice. She used 2 kg 750 g for cooking. How much rice is left?",
        options: [
            "2 kg 250 g",
            "2 kg 750 g",
            "3 kg 250 g",
            "3 kg 750 g"
        ],
        correctAnswer: "2 kg 250 g",
        explanation: "Original amount - used amount = 5 kg - 2 kg 750 g. First convert: 5 kg = 5000 g. Then subtract: 5000 g - 2750 g = 2250 g = 2 kg 250 g.",
        wrongAnswerExplanations: {
            "2 kg 750 g": "This is incorrect. 2 kg 750 g is the amount used, not what's left.",
            "3 kg 250 g": "This is incorrect. 5 kg - 2 kg = 3 kg, but we also need to subtract 750 g.",
            "3 kg 750 g": "This is incorrect. This would mean only 1 kg 250 g was used."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch12_t2_qm3',
        type: "mcq",
        question: "A bag of mixed nuts contains 250 g of almonds, 150 g of cashews, and 175 g of pistachios. What is the total weight of nuts?",
        options: [
            "475 g",
            "525 g",
            "575 g",
            "625 g"
        ],
        correctAnswer: "575 g",
        explanation: "Total weight = 250 g + 150 g + 175 g = 575 g. Adding weights of all three types of nuts gives the total.",
        wrongAnswerExplanations: {
            "475 g": "This is too low. The sum of all three weights is 575 g.",
            "525 g": "This is incorrect. 250 g + 150 g + 175 g = 575 g.",
            "625 g": "This is too high. The correct sum is 575 g."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch12_t2_qm4',
        type: "mcq",
        question: "If 1 kg of potatoes costs ₹20, how much would 3 kg 500 g cost?",
        options: [
            "₹60",
            "₹65",
            "₹70",
            "₹75"
        ],
        correctAnswer: "₹70",
        explanation: "3 kg 500 g = 3.5 kg. Cost for 3.5 kg = 3.5 × ₹20 = ₹70. We convert the mixed weight to a decimal and multiply by the cost per kg.",
        wrongAnswerExplanations: {
            "₹60": "This is the cost of exactly 3 kg, but we need to include the additional 500 g.",
            "₹65": "This is incorrect. 3.5 kg at ₹20 per kg would cost ₹70.",
            "₹75": "This is too high. 3.5 kg at ₹20 per kg costs ₹70."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch12_t2_qm5',
        type: "mcq",
        question: "A recipe calls for 300 g of flour. If you want to make half the recipe, how much flour will you need?",
        options: [
            "150 g",
            "200 g",
            "250 g",
            "350 g"
        ],
        correctAnswer: "150 g",
        explanation: "Half of 300 g = 300 g ÷ 2 = 150 g. When making half a recipe, we use half of each ingredient.",
        wrongAnswerExplanations: {
            "200 g": "This is incorrect. Half of 300 g is 150 g, not 200 g.",
            "250 g": "This is incorrect. 250 g is not half of 300 g.",
            "350 g": "This is more than the original amount, which can't be half the recipe."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch12_t2_qm6',
        type: "mcq",
        question: "A weighing scale shows 2 kg 400 g when a box is placed on it. If the empty box weighs 400 g, what is the weight of the contents of the box?",
        options: [
            "2 kg",
            "2 kg 800 g",
            "1 kg 600 g",
            "1 kg 800 g"
        ],
        correctAnswer: "2 kg",
        explanation: "Total weight - box weight = contents weight. 2 kg 400 g - 400 g = 2 kg. We subtract the weight of the empty box from the total.",
        wrongAnswerExplanations: {
            "2 kg 800 g": "This is incorrect. Adding 400 g instead of subtracting it gives this wrong answer.",
            "1 kg 600 g": "This is incorrect. 2 kg 400 g - 400 g = 2 kg 0 g = 2 kg.",
            "1 kg 800 g": "This is incorrect. 2 kg 400 g - 400 g = 2 kg 0 g = 2 kg."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch12_t2_qm7',
        type: "mcq",
        question: "If 1 orange weighs 150 g, how many oranges are in a bag weighing 1 kg 200 g?",
        options: [
            "6 oranges",
            "7 oranges",
            "8 oranges",
            "9 oranges"
        ],
        correctAnswer: "8 oranges",
        explanation: "1 kg 200 g = 1200 g. Number of oranges = 1200 g ÷ 150 g = 8 oranges. We divide the total weight by the weight of one orange.",
        wrongAnswerExplanations: {
            "6 oranges": "6 oranges would weigh 6 × 150 g = 900 g, less than 1 kg 200 g.",
            "7 oranges": "7 oranges would weigh 7 × 150 g = 1050 g, less than 1 kg 200 g.",
            "9 oranges": "9 oranges would weigh 9 × 150 g = 1350 g, more than 1 kg 200 g."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch12_t2_qm8',
        type: "mcq",
        question: "A packet weighs 750 g. How many such packets would make 4 kg 500 g?",
        options: [
            "5 packets",
            "6 packets",
            "6 packets and 1/3 of a packet",
            "7 packets"
        ],
        correctAnswer: "6 packets",
        explanation: "4 kg 500 g = 4500 g. Packets needed = 4500 g ÷ 750 g = 6 packets. We convert to the same unit and divide.",
        wrongAnswerExplanations: {
            "5 packets": "5 packets would weigh 5 × 750 g = 3750 g, less than 4500 g.",
            "6 packets and 1/3 of a packet": "This is incorrect. 6 × 750 g = 4500 g exactly, so we need 6 whole packets.",
            "7 packets": "7 packets would weigh 7 × 750 g = 5250 g, more than 4500 g."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch12_t2_qm9',
        type: "mcq",
        question: "A postman delivers 3 packages weighing 2 kg 250 g, 1 kg 750 g, and 3 kg 500 g. What is the total weight he delivers?",
        options: [
            "6 kg 500 g",
            "7 kg",
            "7 kg 500 g",
            "8 kg"
        ],
        correctAnswer: "7 kg 500 g",
        explanation: "Total = 2 kg 250 g + 1 kg 750 g + 3 kg 500 g = 6 kg + 1500 g = 7 kg 500 g. We add all kg parts and all g parts.",
        wrongAnswerExplanations: {
            "6 kg 500 g": "This is incorrect. The kg parts add up to 7 kg, not 6 kg.",
            "7 kg": "This is incorrect. The g parts add up to 500 g, not 0 g.",
            "8 kg": "This is too high. The correct total is 7 kg 500 g."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch12_t2_qm10',
        type: "mcq",
        question: "Rohan has 3 marbles, each weighing 25 g. Sohan has 2 marbles, each weighing 40 g. Whose marbles weigh more?",
        options: [
            "Rohan's marbles",
            "Sohan's marbles",
            "Both have the same weight",
            "Cannot be determined"
        ],
        correctAnswer: "Sohan's marbles",
        explanation: "Rohan's marbles weigh 3 × 25 g = 75 g. Sohan's marbles weigh 2 × 40 g = 80 g. Since 80 g > 75 g, Sohan's marbles weigh more.",
        wrongAnswerExplanations: {
            "Rohan's marbles": "Rohan's marbles weigh 75 g, which is less than Sohan's 80 g.",
            "Both have the same weight": "They don't weigh the same. Rohan's are 75 g and Sohan's are 80 g.",
            "Cannot be determined": "We can determine this by calculating the total weight for each person."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch12_t2_qm11',
        type: "mcq",
        question: "A grocery bag contains 1 kg 250 g of sugar, 750 g of dal, and 1 kg 500 g of rice. How much does it weigh altogether?",
        options: [
            "2 kg 750 g",
            "3 kg",
            "3 kg 500 g",
            "4 kg"
        ],
        correctAnswer: "3 kg 500 g",
        explanation: "Total weight = 1 kg 250 g + 750 g + 1 kg 500 g = 2 kg 2500 g = 3 kg 500 g. We add all weights together.",
        wrongAnswerExplanations: {
            "2 kg 750 g": "This is too low. The kg parts alone add up to 2 kg.",
            "3 kg": "This is too low. The g parts add up to 500 g more.",
            "4 kg": "This is too high. The correct total is 3 kg 500 g."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch12_t2_qm12',
        type: "mcq",
        question: "A fruit vendor has 5 kg 300 g of apples. After selling some, he has 2 kg 150 g left. How many grams of apples did he sell?",
        options: [
            "3 kg 50 g",
            "3 kg 150 g",
            "3 kg 450 g",
            "3 kg 550 g"
        ],
        correctAnswer: "3 kg 150 g",
        explanation: "Amount sold = Original amount - Amount left = 5 kg 300 g - 2 kg 150 g = 3 kg 150 g. We subtract to find the difference.",
        wrongAnswerExplanations: {
            "3 kg 50 g": "This is incorrect. 5 kg 300 g - 2 kg 150 g = 3 kg 150 g.",
            "3 kg 450 g": "This is incorrect. The g parts give 300 g - 150 g = 150 g, not 450 g.",
            "3 kg 550 g": "This is too high. The correct difference is 3 kg 150 g."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch12_t2_qm13',
        type: "mcq",
        question: "If 250 g of flour costs ₹10, how much would 1 kg of flour cost?",
        options: [
            "₹25",
            "₹30",
            "₹40",
            "₹50"
        ],
        correctAnswer: "₹40",
        explanation: "1 kg = 1000 g = 4 × 250 g. So, 4 × ₹10 = ₹40. Since 1 kg is 4 times 250 g, the cost is also 4 times.",
        wrongAnswerExplanations: {
            "₹25": "This is incorrect. 1 kg is 4 times 250 g, not 2.5 times.",
            "₹30": "This is incorrect. 1 kg = 1000 g = 4 × 250 g, so cost should be ₹40.",
            "₹50": "This is too high. 1 kg is 4 times 250 g, so the cost is 4 × ₹10 = ₹40."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch12_t2_qm14',
        type: "mcq",
        question: "A balance scale has a 2 kg weight on one side. How many 500 g weights should be placed on the other side to balance the scale?",
        options: [
            "2 weights",
            "3 weights",
            "4 weights",
            "5 weights"
        ],
        correctAnswer: "4 weights",
        explanation: "To balance 2 kg (2000 g), we need 2000 g ÷ 500 g = 4 weights of 500 g each.",
        wrongAnswerExplanations: {
            "2 weights": "2 weights of 500 g each would be only 1000 g, which is 1 kg.",
            "3 weights": "3 weights of 500 g each would be 1500 g, less than 2 kg.",
            "5 weights": "5 weights of 500 g each would be 2500 g, more than 2 kg."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch12_t2_qm15',
        type: "mcq",
        question: "The weight of 6 identical balls is 750 g. What is the weight of each ball?",
        options: [
            "115 g",
            "120 g",
            "125 g",
            "130 g"
        ],
        correctAnswer: "125 g",
        explanation: "Weight of one ball = Total weight ÷ Number of balls = 750 g ÷ 6 = 125 g. Each ball weighs the same amount.",
        wrongAnswerExplanations: {
            "115 g": "This is incorrect. 6 × 115 g = 690 g, not 750 g.",
            "120 g": "This is incorrect. 6 × 120 g = 720 g, not 750 g.",
            "130 g": "This is incorrect. 6 × 130 g = 780 g, not 750 g."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch12_t2_qm16',
        type: "mcq",
        question: "A tin of paint weighs 3 kg 750 g. After some paint is used, the tin weighs 2 kg 250 g. How much paint was used?",
        options: [
            "1 kg",
            "1 kg 250 g",
            "1 kg 500 g",
            "2 kg"
        ],
        correctAnswer: "1 kg 500 g",
        explanation: "Paint used = Original weight - Final weight = 3 kg 750 g - 2 kg 250 g = 1 kg 500 g. We subtract to find how much was used.",
        wrongAnswerExplanations: {
            "1 kg": "This is too low. The difference is 1 kg 500 g.",
            "1 kg 250 g": "This is incorrect. 3 kg 750 g - 2 kg 250 g = 1 kg 500 g.",
            "2 kg": "This is too high. The correct difference is 1 kg 500 g."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch12_t2_qm17',
        type: "mcq",
        question: "Rani buys 4 packets of biscuits, each weighing 120 g. What is the total weight of biscuits in kilograms?",
        options: [
            "48 kg",
            "4.8 kg",
            "0.48 kg",
            "0.048 kg"
        ],
        correctAnswer: "0.48 kg",
        explanation: "Total weight = 4 × 120 g = 480 g = 0.48 kg. To convert from g to kg, we divide by 1000.",
        wrongAnswerExplanations: {
            "48 kg": "This is much too high. 4 packets at 120 g each is only 480 g or 0.48 kg.",
            "4.8 kg": "This is too high. 4 × 120 g = 480 g = 0.48 kg.",
            "0.048 kg": "This is too low. 480 g = 0.48 kg, not 0.048 kg."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch12_t2_qm18',
        type: "mcq",
        question: "A box has 12 chocolates. Each chocolate weighs 25 g. What is the total weight of all the chocolates?",
        options: [
            "300 g",
            "250 g",
            "225 g",
            "325 g"
        ],
        correctAnswer: "300 g",
        explanation: "Total weight = Number of chocolates × Weight of each chocolate = 12 × 25 g = 300 g.",
        wrongAnswerExplanations: {
            "250 g": "This is incorrect. 12 × 25 g = 300 g, not 250 g.",
            "225 g": "This is incorrect. 9 × 25 g = 225 g, but there are 12 chocolates, not 9.",
            "325 g": "This is incorrect. 13 × 25 g = 325 g, but there are 12 chocolates, not 13."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch12_t2_qm19',
        type: "mcq",
        question: "A vegetable basket contains 1 kg 500 g of potatoes, 750 g of tomatoes, and 1 kg 250 g of onions. What is the total weight of vegetables?",
        options: [
            "2 kg 500 g",
            "3 kg",
            "3 kg 500 g",
            "4 kg"
        ],
        correctAnswer: "3 kg 500 g",
        explanation: "Total weight = 1 kg 500 g + 750 g + 1 kg 250 g = 2 kg 2500 g = 3 kg 500 g. We add all weights together.",
        wrongAnswerExplanations: {
            "2 kg 500 g": "This is too low. The kg parts alone add up to at least 2 kg.",
            "3 kg": "This is too low. The correct total is 3 kg 500 g.",
            "4 kg": "This is too high. The correct total is 3 kg 500 g."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch12_t2_qm20',
        type: "mcq",
        question: "A watermelon weighs 5 kg 250 g. After cutting and removing the rind, the edible part weighs 3 kg 750 g. How much does the rind weigh?",
        options: [
            "1 kg",
            "1 kg 250 g",
            "1 kg 500 g",
            "2 kg"
        ],
        correctAnswer: "1 kg 500 g",
        explanation: "Rind weight = Total weight - Edible part weight = 5 kg 250 g - 3 kg 750 g = 1 kg 500 g. We subtract to find the difference.",
        wrongAnswerExplanations: {
            "1 kg": "This is too low. The correct difference is 1 kg 500 g.",
            "1 kg 250 g": "This is incorrect. 5 kg 250 g - 3 kg 750 g = 1 kg 500 g.",
            "2 kg": "This is too high. The correct difference is 1 kg 500 g."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    }
];
