import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl5_ch8_t1_qm1',
        type: "mcq",
        question: "If a map scale shows 1 cm = 5 km, how far is a 3 cm distance on the map in real life?",
        options: ["15 km", "5 km", "3 km", "8 km"],
        correctAnswer: "15 km",
        explanation: "Since 1 cm represents 5 km, then 3 cm would represent 3 × 5 = 15 km in real life. This is calculated by multiplying the map distance by the scale factor. 📏",
        wrongAnswerExplanations: {
            "5 km": "This is the distance represented by 1 cm, not 3 cm.",
            "3 km": "This is the map distance, not the real distance.",
            "8 km": "This is the sum of the numbers, not the correct calculation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch8_t1_qm2',
        type: "mcq",
        question: "If you're at point A and want to go to point B which is Northeast of A, which direction should you face?",
        options: ["Northeast", "North", "East", "Southeast"],
        correctAnswer: "Northeast",
        explanation: "To go Northeast, you should face Northeast. This is because Northeast is both the direction you want to go and the direction you should face. ↗️",
        wrongAnswerExplanations: {
            "North": "Facing North would take you too far to the left of your destination.",
            "East": "Facing East would take you too far to the right of your destination.",
            "Southeast": "Southeast is the opposite direction of where you want to go."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_t1_qm3',
        type: "mcq",
        question: "What does a dashed line (---) usually represent on a map?",
        options: ["Railway line", "Road", "River", "Boundary"],
        correctAnswer: "Railway line",
        explanation: "A dashed line (---) is commonly used to represent railway lines on maps. This helps distinguish them from solid lines which usually represent roads. 🚂",
        wrongAnswerExplanations: {
            "Road": "Roads are usually shown with solid lines, not dashed lines.",
            "River": "Rivers are usually shown with blue lines, not dashed lines.",
            "Boundary": "Boundaries are usually shown with dotted lines, not dashed lines."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch8_t1_qm4',
        type: "mcq",
        question: "If a map has a scale of 1:50,000, what does this mean?",
        options: ["1 cm on map = 50,000 cm in real life", "1 cm on map = 500 m in real life", "1 cm on map = 5 km in real life", "1 cm on map = 50 km in real life"],
        correctAnswer: "1 cm on map = 50,000 cm in real life",
        explanation: "A scale of 1:50,000 means that 1 unit on the map equals 50,000 of the same units in real life. So 1 cm on the map equals 50,000 cm in real life. 📏",
        wrongAnswerExplanations: {
            "1 cm on map = 500 m in real life": "This would be a scale of 1:50,000, but expressed in meters.",
            "1 cm on map = 5 km in real life": "This would be a scale of 1:500,000.",
            "1 cm on map = 50 km in real life": "This would be a scale of 1:5,000,000."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch8_t1_qm5',
        type: "mcq",
        question: "What does a star (★) symbol usually represent on a map?",
        options: ["Capital city", "Mountain peak", "Tourist attraction", "Airport"],
        correctAnswer: "Capital city",
        explanation: "A star (★) symbol is commonly used to represent capital cities on maps. This helps distinguish them from other cities. ⭐",
        wrongAnswerExplanations: {
            "Mountain peak": "Mountain peaks are usually shown with a triangle symbol (△).",
            "Tourist attraction": "Tourist attractions usually have their own specific symbols.",
            "Airport": "Airports are usually shown with a plane symbol (✈️)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch8_t1_qm6',
        type: "mcq",
        question: "If you're facing Northwest, which direction is to your left?",
        options: ["Southwest", "Northeast", "Southeast", "Northwest"],
        correctAnswer: "Southwest",
        explanation: "When facing Northwest, Southwest is to your left. This is because the directions follow a clockwise pattern from North. ↖️",
        wrongAnswerExplanations: {
            "Northeast": "Northeast is to your right when facing Northwest.",
            "Southeast": "Southeast is behind you when facing Northwest.",
            "Northwest": "Northwest is the direction you're facing, not to your left."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch8_t1_qm7',
        type: "mcq",
        question: "What does a dotted line (•••) usually represent on a map?",
        options: ["Boundary", "Road", "River", "Railway"],
        correctAnswer: "Boundary",
        explanation: "A dotted line (•••) is commonly used to represent boundaries between countries, states, or other administrative divisions on maps. 🗺️",
        wrongAnswerExplanations: {
            "Road": "Roads are usually shown with solid lines.",
            "River": "Rivers are usually shown with blue lines.",
            "Railway": "Railways are usually shown with dashed lines."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch8_t1_qm8',
        type: "mcq",
        question: "If a map scale shows 1 inch = 10 miles, how far is a 2.5 inch distance on the map in real life?",
        options: ["25 miles", "10 miles", "2.5 miles", "12.5 miles"],
        correctAnswer: "25 miles",
        explanation: "Since 1 inch represents 10 miles, then 2.5 inches would represent 2.5 × 10 = 25 miles in real life. This is calculated by multiplying the map distance by the scale factor. 📏",
        wrongAnswerExplanations: {
            "10 miles": "This is the distance represented by 1 inch, not 2.5 inches.",
            "2.5 miles": "This is the map distance, not the real distance.",
            "12.5 miles": "This is half of the correct answer."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch8_t1_qm9',
        type: "mcq",
        question: "What does a triangle (△) symbol usually represent on a map?",
        options: ["Mountain peak", "Capital city", "Airport", "Hospital"],
        correctAnswer: "Mountain peak",
        explanation: "A triangle (△) symbol is commonly used to represent mountain peaks on maps. The height of the peak is often written next to the symbol. ⛰️",
        wrongAnswerExplanations: {
            "Capital city": "Capital cities are usually shown with a star symbol (★).",
            "Airport": "Airports are usually shown with a plane symbol (✈️).",
            "Hospital": "Hospitals are usually shown with a 🏥 symbol."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch8_t1_qm10',
        type: "mcq",
        question: "If you're facing Southeast, which direction is to your right?",
        options: ["Southwest", "Northeast", "Northwest", "Southeast"],
        correctAnswer: "Southwest",
        explanation: "When facing Southeast, Southwest is to your right. This is because the directions follow a clockwise pattern from North. ↘️",
        wrongAnswerExplanations: {
            "Northeast": "Northeast is behind you when facing Southeast.",
            "Northwest": "Northwest is to your left when facing Southeast.",
            "Southeast": "Southeast is the direction you're facing, not to your right."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch8_t1_qm11',
        type: "mcq",
        question: "What does a plane (✈️) symbol usually represent on a map?",
        options: ["Airport", "Capital city", "Tourist attraction", "Hospital"],
        correctAnswer: "Airport",
        explanation: "A plane (✈️) symbol is commonly used to represent airports on maps. This helps people locate air travel facilities. ✈️",
        wrongAnswerExplanations: {
            "Capital city": "Capital cities are usually shown with a star symbol (★).",
            "Tourist attraction": "Tourist attractions usually have their own specific symbols.",
            "Hospital": "Hospitals are usually shown with a 🏥 symbol."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch8_t1_qm12',
        type: "mcq",
        question: "If a map has a scale of 1:25,000, how many kilometers does 4 cm on the map represent?",
        options: ["1 km", "0.25 km", "2.5 km", "10 km"],
        correctAnswer: "1 km",
        explanation: "At a scale of 1:25,000, 1 cm = 25,000 cm = 0.25 km. So 4 cm = 4 × 0.25 km = 1 km. This is calculated by converting the scale to kilometers and then multiplying by the map distance. 📏",
        wrongAnswerExplanations: {
            "0.25 km": "This is the distance represented by 1 cm, not 4 cm.",
            "2.5 km": "This is 10 times the correct answer.",
            "10 km": "This is 100 times the correct answer."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch8_t1_qm13',
        type: "mcq",
        question: "What does a tent (⛺) symbol usually represent on a map?",
        options: ["Camping site", "Hospital", "School", "Park"],
        correctAnswer: "Camping site",
        explanation: "A tent (⛺) symbol is commonly used to represent camping sites on maps. This helps people locate places to camp. ⛺",
        wrongAnswerExplanations: {
            "Hospital": "Hospitals are usually shown with a 🏥 symbol.",
            "School": "Schools are usually shown with a 🏫 symbol.",
            "Park": "Parks are usually shown with a 🌳 symbol."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch8_t1_qm14',
        type: "mcq",
        question: "If you're facing Southwest, which direction is to your right?",
        options: ["Northwest", "Southeast", "Northeast", "Southwest"],
        correctAnswer: "Northwest",
        explanation: "When facing Southwest, Northwest is to your right. This is because the directions follow a clockwise pattern from North. ↙️",
        wrongAnswerExplanations: {
            "Southeast": "Southeast is to your left when facing Southwest.",
            "Northeast": "Northeast is behind you when facing Southwest.",
            "Southwest": "Southwest is the direction you're facing, not to your right."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch8_t1_qm15',
        type: "mcq",
        question: "What does a fork and knife (🍴) symbol usually represent on a map?",
        options: ["Restaurant", "Hospital", "School", "Park"],
        correctAnswer: "Restaurant",
        explanation: "A fork and knife (🍴) symbol is commonly used to represent restaurants on maps. This helps people locate places to eat. 🍴",
        wrongAnswerExplanations: {
            "Hospital": "Hospitals are usually shown with a 🏥 symbol.",
            "School": "Schools are usually shown with a 🏫 symbol.",
            "Park": "Parks are usually shown with a 🌳 symbol."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch8_t1_qm16',
        type: "mcq",
        question: "If a map scale shows 1 cm = 2 km, how many centimeters on the map would represent 10 km in real life?",
        options: ["5 cm", "2 cm", "10 cm", "20 cm"],
        correctAnswer: "5 cm",
        explanation: "Since 1 cm represents 2 km, then to represent 10 km we need 10 ÷ 2 = 5 cm on the map. This is calculated by dividing the real distance by the scale factor. 📏",
        wrongAnswerExplanations: {
            "2 cm": "This would represent 4 km, not 10 km.",
            "10 cm": "This would represent 20 km, not 10 km.",
            "20 cm": "This would represent 40 km, not 10 km."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch8_t1_qm17',
        type: "mcq",
        question: "What does a bed (🛏️) symbol usually represent on a map?",
        options: ["Hotel", "Hospital", "School", "Park"],
        correctAnswer: "Hotel",
        explanation: "A bed (🛏️) symbol is commonly used to represent hotels on maps. This helps people locate places to stay. 🏨",
        wrongAnswerExplanations: {
            "Hospital": "Hospitals are usually shown with a 🏥 symbol.",
            "School": "Schools are usually shown with a 🏫 symbol.",
            "Park": "Parks are usually shown with a 🌳 symbol."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch8_t1_qm18',
        type: "mcq",
        question: "If you're facing Northeast, which direction is to your left?",
        options: ["Northwest", "Southeast", "Southwest", "Northeast"],
        correctAnswer: "Northwest",
        explanation: "When facing Northeast, Northwest is to your left. This is because the directions follow a clockwise pattern from North. ↗️",
        wrongAnswerExplanations: {
            "Southeast": "Southeast is to your right when facing Northeast.",
            "Southwest": "Southwest is behind you when facing Northeast.",
            "Northeast": "Northeast is the direction you're facing, not to your left."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch8_t1_qm19',
        type: "mcq",
        question: "What does a gas pump (⛽) symbol usually represent on a map?",
        options: ["Gas station", "Hospital", "School", "Park"],
        correctAnswer: "Gas station",
        explanation: "A gas pump (⛽) symbol is commonly used to represent gas stations on maps. This helps people locate places to refuel their vehicles. ⛽",
        wrongAnswerExplanations: {
            "Hospital": "Hospitals are usually shown with a 🏥 symbol.",
            "School": "Schools are usually shown with a 🏫 symbol.",
            "Park": "Parks are usually shown with a 🌳 symbol."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch8_t1_qm20',
        type: "mcq",
        question: "If a map has a scale of 1:100,000, how many kilometers does 3 cm on the map represent?",
        options: ["3 km", "1 km", "0.3 km", "30 km"],
        correctAnswer: "3 km",
        explanation: "At a scale of 1:100,000, 1 cm = 100,000 cm = 1 km. So 3 cm = 3 × 1 km = 3 km. This is calculated by converting the scale to kilometers and then multiplying by the map distance. 📏",
        wrongAnswerExplanations: {
            "1 km": "This is the distance represented by 1 cm, not 3 cm.",
            "0.3 km": "This is one-tenth of the correct answer.",
            "30 km": "This is 10 times the correct answer."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 