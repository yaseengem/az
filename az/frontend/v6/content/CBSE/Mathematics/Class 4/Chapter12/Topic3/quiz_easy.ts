import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch12_t3_qe1',
        type: "mcq",
        question: "Which of these objects would be heavier?",
        options: ["A pencil", "A watermelon", "An eraser", "A paper clip"],
        correctAnswer: "A watermelon",
        explanation: "A watermelon is much heavier than small objects like pencils, erasers, and paper clips. ⚖️",
        wrongAnswerExplanations: {
            "A pencil": "A pencil is very light and weighs only a few grams.",
            "An eraser": "An eraser is small and lightweight, usually weighing less than 10 grams.",
            "A paper clip": "A paper clip is one of the lightest objects in this list, weighing about 1 gram."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch12_t3_qe2',
        type: "mcq",
        question: "When comparing weights on a balance scale, if the left side goes down, it means:",
        options: ["The left side is lighter", "The left side is heavier", "Both sides weigh the same", "The scale is broken"],
        correctAnswer: "The left side is heavier",
        explanation: "On a balance scale, the heavier side goes down while the lighter side rises up. This shows us which object weighs more. ⚖️",
        wrongAnswerExplanations: {
            "The left side is lighter": "If the left side were lighter, it would rise up, not go down.",
            "Both sides weigh the same": "If both sides weighed the same, the scale would be balanced horizontally.",
            "The scale is broken": "The scale is working correctly by showing which side is heavier."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch12_t3_qe3',
        type: "mcq",
        question: "If a stone weighs 500 grams and a book weighs half a kilogram, what can you say about their weights?",
        options: ["The stone is heavier", "The book is heavier", "They weigh the same", "Cannot be determined"],
        correctAnswer: "They weigh the same",
        explanation: "Half a kilogram equals 500 grams, so both objects weigh exactly the same. This shows that different units can express the same weight. ⚖️",
        wrongAnswerExplanations: {
            "The stone is heavier": "500 grams equals half a kilogram, so neither is heavier.",
            "The book is heavier": "Half a kilogram equals 500 grams, not more.",
            "Cannot be determined": "We have enough information to compare the weights."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl4_ch12_t3_qe4',
        type: "mcq",
        question: "Ravi has three identical boxes. Box A has 5 marbles, Box B has 8 marbles, and Box C has 3 marbles. Which box would feel the lightest when lifted?",
        options: ["Box A", "Box B", "Box C", "All would feel the same"],
        correctAnswer: "Box C",
        explanation: "Box C has the fewest marbles (only 3), so it would be the lightest box to lift. Fewer items of the same type means less weight. 🏋️",
        wrongAnswerExplanations: {
            "Box A": "Box A has 5 marbles, which is more than Box C, so it would be heavier.",
            "Box B": "Box B has 8 marbles, which is the most of all three boxes, so it would be the heaviest.",
            "All would feel the same": "Since the boxes contain different numbers of identical marbles, they would have different weights."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl4_ch12_t3_qe5',
        type: "mcq",
        question: "Which of these would be the best tool to compare the weights of two small toys?",
        options: ["A ruler", "A balance scale", "A thermometer", "A clock"],
        correctAnswer: "A balance scale",
        explanation: "A balance scale is specifically designed to compare the weights of objects by showing which one is heavier or if they weigh the same. ⚖️",
        wrongAnswerExplanations: {
            "A ruler": "A ruler measures length, not weight.",
            "A thermometer": "A thermometer measures temperature, not weight.",
            "A clock": "A clock measures time, not weight."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch12_t3_qe6',
        type: "mcq",
        question: "If a bag of rice weighs 2 kg and a bag of sugar weighs 1500 grams, which is heavier?",
        options: ["Rice bag", "Sugar bag", "Both weigh the same", "Cannot compare because units are different"],
        correctAnswer: "Rice bag",
        explanation: "The rice bag weighs 2 kg, which equals 2000 grams. The sugar bag weighs 1500 grams, so the rice bag is heavier by 500 grams. 🍚",
        wrongAnswerExplanations: {
            "Sugar bag": "The sugar bag weighs 1500 grams, which is less than 2 kg (2000 grams).",
            "Both weigh the same": "They don't weigh the same - the rice bag is heavier.",
            "Cannot compare because units are different": "We can compare by converting to the same unit - 2 kg = 2000 grams."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch12_t3_qe7',
        type: "mcq",
        question: "If you place a 100g weight on one side of a balance scale and an apple on the other side, and the scale balances perfectly, what does this tell you?",
        options: ["The apple weighs more than 100g", "The apple weighs less than 100g", "The apple weighs exactly 100g", "The scale is not working properly"],
        correctAnswer: "The apple weighs exactly 100g",
        explanation: "When a balance scale is perfectly level, it means both sides have exactly the same weight. So the apple must weigh exactly 100g. 🍎",
        wrongAnswerExplanations: {
            "The apple weighs more than 100g": "If the apple weighed more, its side of the scale would go down.",
            "The apple weighs less than 100g": "If the apple weighed less, its side of the scale would go up.",
            "The scale is not working properly": "The scale is working correctly by showing that the weights are equal."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl4_ch12_t3_qe8',
        type: "mcq",
        question: "Meera wants to weigh her pet rabbit. Which unit would be most appropriate?",
        options: ["Milligrams", "Grams", "Kilograms", "Tons"],
        correctAnswer: "Kilograms",
        explanation: "A rabbit typically weighs between 1-3 kg, making kilograms the most appropriate unit for measuring its weight. 🐰",
        wrongAnswerExplanations: {
            "Milligrams": "Milligrams are too small for weighing a rabbit - they're used for very tiny amounts.",
            "Grams": "While possible, the number would be very large (1000-3000g), making kilograms more practical.",
            "Tons": "Tons are used for extremely heavy objects like cars or elephants, not small animals."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch12_t3_qe9',
        type: "mcq",
        question: "What happens to the reading on a weighing scale if you place a 500g stone and a 250g apple on it together?",
        options: ["It will show 250g", "It will show 500g", "It will show 750g", "It will show 125g"],
        correctAnswer: "It will show 750g",
        explanation: "When multiple objects are placed on a weighing scale, their weights add up. 500g + 250g = 750g. The scale measures the total weight of all objects placed on it. ⚖️",
        wrongAnswerExplanations: {
            "It will show 250g": "This is just the weight of the apple, not the combined weight.",
            "It will show 500g": "This is just the weight of the stone, not the combined weight.",
            "It will show 125g": "This is not the correct sum of the weights."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl4_ch12_t3_qe10',
        type: "mcq",
        question: "If Box A is heavier than Box B, and Box B is heavier than Box C, which box is the lightest?",
        options: ["Box A", "Box B", "Box C", "Cannot be determined"],
        correctAnswer: "Box C",
        explanation: "If A > B and B > C (where > means 'heavier than'), then logically, C must be the lightest of the three boxes. This is basic comparison logic. 📦",
        wrongAnswerExplanations: {
            "Box A": "Box A is the heaviest since it's heavier than Box B, which is heavier than Box C.",
            "Box B": "Box B is heavier than Box C but lighter than Box A, so it's in the middle.",
            "Cannot be determined": "We have enough information to determine the order of weights."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl4_ch12_t3_qe11',
        type: "mcq",
        question: "A teacher asks students to arrange three objects in order from lightest to heaviest using a balance scale. Which step should they do first?",
        options: ["Arrange the objects randomly", "Compare the first two objects on the scale", "Put all three objects on the scale at once", "Guess which is heaviest without using the scale"],
        correctAnswer: "Compare the first two objects on the scale",
        explanation: "To arrange objects by weight, you should first compare two objects using the balance scale, then compare the third object with one of the first two. This method gives accurate results. ⚖️",
        wrongAnswerExplanations: {
            "Arrange the objects randomly": "Random arrangement doesn't help determine the weights.",
            "Put all three objects on the scale at once": "A balance scale can only compare two sides at a time.",
            "Guess which is heaviest without using the scale": "Guessing isn't accurate - using the scale gives proper measurements."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch12_t3_qe12',
        type: "mcq",
        question: "Which material would likely be heavier: 1 liter of water or 1 liter of oil?",
        options: ["Water", "Oil", "Both weigh exactly the same", "It depends on the type of oil"],
        correctAnswer: "Water",
        explanation: "Water is denser than most oils, so the same volume of water weighs more than the same volume of oil. This is why oil floats on water. 💧",
        wrongAnswerExplanations: {
            "Oil": "Oil is less dense than water, so a liter of oil weighs less than a liter of water.",
            "Both weigh exactly the same": "Objects of the same volume but different materials generally have different weights.",
            "It depends on the type of oil": "While different oils have slightly different densities, all common oils are less dense than water."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl4_ch12_t3_qe13',
        type: "mcq",
        question: "If you have a 1 kg weight and want to weigh an object that is 1200 grams, what else would you need on the balance scale?",
        options: ["Another 1 kg weight", "A 200 gram weight", "A 2 kg weight", "A 100 gram weight"],
        correctAnswer: "A 200 gram weight",
        explanation: "1 kg = 1000 grams. To balance 1200 grams, you need 1000 grams (your 1 kg weight) plus 200 more grams. 1000g + 200g = 1200g. ⚖️",
        wrongAnswerExplanations: {
            "Another 1 kg weight": "That would be 2000 grams, which is too heavy.",
            "A 2 kg weight": "That would be 2000 grams, which is too heavy.",
            "A 100 gram weight": "1000g + 100g = 1100g, which is too light to balance 1200g."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch12_t3_qe14',
        type: "mcq",
        question: "Sita has 3 identical bottles. She fills one completely with water, one halfway with water, and leaves one empty. If she places them on a balance scale, which arrangement would balance?",
        options: ["Full bottle on one side, empty bottle on the other", "Full bottle on one side, half-full bottle on the other", "Half-full bottle on one side, empty bottle on the other", "Full and empty bottles on one side, half-full bottle on the other"],
        correctAnswer: "Full and empty bottles on one side, half-full bottle on the other",
        explanation: "The full bottle has twice the weight of the half-full bottle. So a full bottle plus an empty bottle would equal two half-full bottles. Since there's only one half-full bottle, it would balance against a full and an empty bottle. 🍼",
        wrongAnswerExplanations: {
            "Full bottle on one side, empty bottle on the other": "The full bottle is much heavier than the empty one, so they wouldn't balance.",
            "Full bottle on one side, half-full bottle on the other": "The full bottle is heavier than the half-full bottle, so they wouldn't balance.",
            "Half-full bottle on one side, empty bottle on the other": "The half-full bottle is heavier than the empty one, so they wouldn't balance."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch12_t3_qe15',
        type: "mcq",
        question: "Which would be a better choice to weigh a letter: a kitchen scale that measures in grams or a bathroom scale that measures in kilograms?",
        options: ["Kitchen scale", "Bathroom scale", "Both are equally good", "Neither would work"],
        correctAnswer: "Kitchen scale",
        explanation: "A letter typically weighs just a few grams. A kitchen scale that measures in grams is more precise for light objects, while a bathroom scale (measuring in kg) might not even detect such a small weight. 📫",
        wrongAnswerExplanations: {
            "Bathroom scale": "A bathroom scale measures in kilograms and may not be sensitive enough to detect the small weight of a letter.",
            "Both are equally good": "The kitchen scale is clearly better for small weights like letters.",
            "Neither would work": "A kitchen scale would work well for weighing a letter."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl4_ch12_t3_qe16',
        type: "mcq",
        question: "If you have a balance scale with equal arms, what can you use as weights if you don't have standard weights?",
        options: ["Only special weight sets will work", "Any objects with known weights", "Only metal objects", "Only objects of the same size"],
        correctAnswer: "Any objects with known weights",
        explanation: "You can use any objects with known weights as reference weights on a balance scale. This could include coins, small packages, or other items of known weight. ⚖️",
        wrongAnswerExplanations: {
            "Only special weight sets will work": "While standard weights are ideal, any object with a known weight can be used.",
            "Only metal objects": "The material doesn't matter - only the weight matters.",
            "Only objects of the same size": "Size doesn't matter for a balance scale - weight is what makes it balance."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl4_ch12_t3_qe17',
        type: "mcq",
        question: "Raja needs to weigh his luggage before a flight. The limit is 20 kg. If his suitcase weighs 15 kg and his backpack weighs 6 kg, what should he do?",
        options: ["Take both - he's under the limit", "Leave the backpack behind", "Remove some items to reduce weight", "Pay for extra weight allowance"],
        correctAnswer: "Remove some items to reduce weight",
        explanation: "Raja's total luggage weight is 15 kg + 6 kg = 21 kg, which exceeds the 20 kg limit. He needs to remove at least 1 kg to stay within the weight restriction. ✈️",
        wrongAnswerExplanations: {
            "Take both - he's under the limit": "15 kg + 6 kg = 21 kg, which is over the 20 kg limit.",
            "Leave the backpack behind": "This would reduce too much weight and he'd lose all items in the backpack.",
            "Pay for extra weight allowance": "While possible, this isn't necessary if he can just remove a small amount of weight."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch12_t3_qe18',
        type: "mcq",
        question: "If a 1-rupee coin weighs 3.5 grams, approximately how much would 10 such coins weigh?",
        options: ["3.5 grams", "7 grams", "35 grams", "350 grams"],
        correctAnswer: "35 grams",
        explanation: "To find the total weight, multiply the weight of one coin by the number of coins: 3.5 grams × 10 = 35 grams. This is basic multiplication. 💰",
        wrongAnswerExplanations: {
            "3.5 grams": "This is the weight of just one coin, not ten coins.",
            "7 grams": "This would be the weight of only two coins (3.5 × 2 = 7).",
            "350 grams": "This is ten times too much. The correct calculation is 3.5 × 10 = 35."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl4_ch12_t3_qe19',
        type: "mcq",
        question: "Which of these is NOT a proper comparison of weights?",
        options: ["A pencil is lighter than a book", "A car is heavier than a bicycle", "A liter of water is lighter than a liter of milk", "An elephant is heavier than a horse"],
        correctAnswer: "A liter of water is lighter than a liter of milk",
        explanation: "A liter of milk is actually slightly heavier than a liter of water due to the dissolved solids in milk. All the other comparisons are correct. 🥛",
        wrongAnswerExplanations: {
            "A pencil is lighter than a book": "This is a correct comparison - pencils are indeed lighter than books.",
            "A car is heavier than a bicycle": "This is a correct comparison - cars are much heavier than bicycles.",
            "An elephant is heavier than a horse": "This is a correct comparison - elephants are much heavier than horses."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl4_ch12_t3_qe20',
        type: "mcq",
        question: "On a traditional balance scale, if both sides have the same number of identical objects and the scale is balanced, what can you conclude?",
        options: ["The objects on the left side are heavier", "The objects on the right side are heavier", "The objects on both sides weigh exactly the same", "The scale needs calibration"],
        correctAnswer: "The objects on both sides weigh exactly the same",
        explanation: "When a balance scale is level, it means both sides have equal weight. If both sides have the same number of identical objects, each individual object must also weigh the same. ⚖️",
        wrongAnswerExplanations: {
            "The objects on the left side are heavier": "If the left side objects were heavier, that side would go down and the scale wouldn't be balanced.",
            "The objects on the right side are heavier": "If the right side objects were heavier, that side would go down and the scale wouldn't be balanced.",
            "The scale needs calibration": "The scale is working properly by showing equal weights on both sides."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    }
];
