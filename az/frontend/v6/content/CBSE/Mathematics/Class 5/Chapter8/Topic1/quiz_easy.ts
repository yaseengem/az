import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl5_ch8_t1_qe1',
        type: "mcq",
        question: "What does this symbol usually mean on a map? 🏫",
        options: ["School", "Hospital", "Park", "Library"],
        correctAnswer: "School",
        explanation: "The 🏫 symbol represents a school on most maps. It's a common map symbol that helps people find educational institutions. 📚",
        wrongAnswerExplanations: {
            "Hospital": "Hospitals are usually represented by a 🏥 symbol.",
            "Park": "Parks are usually represented by a 🌳 or 🌲 symbol.",
            "Library": "Libraries usually have their own specific symbol, not the school symbol."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch8_t1_qe2',
        type: "mcq",
        question: "Which direction is shown by the arrow pointing up (⬆️) on a map?",
        options: ["North", "South", "East", "West"],
        correctAnswer: "North",
        explanation: "On maps, the upward direction (⬆️) always points to North. This is a standard convention in map-making. 🧭",
        wrongAnswerExplanations: {
            "South": "South is the opposite direction of North, shown by a downward arrow (⬇️).",
            "East": "East is shown by an arrow pointing right (➡️).",
            "West": "West is shown by an arrow pointing left (⬅️)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch8_t1_qe3',
        type: "mcq",
        question: "What is the purpose of a map key or legend?",
        options: ["To explain map symbols", "To show directions", "To measure distances", "To find locations"],
        correctAnswer: "To explain map symbols",
        explanation: "A map key or legend explains what the different symbols on a map mean. It's like a dictionary for map symbols. 🔑",
        wrongAnswerExplanations: {
            "To show directions": "Directions are shown by the compass rose, not the map key.",
            "To measure distances": "Distances are measured using the map scale, not the key.",
            "To find locations": "Locations are found using coordinates or landmarks, not the key."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch8_t1_qe4',
        type: "mcq",
        question: "Which symbol would you look for to find a hospital on a map?",
        options: ["🏥", "🏫", "🏪", "🏢"],
        correctAnswer: "🏥",
        explanation: "The 🏥 symbol is the standard symbol used to represent hospitals on maps. It helps people locate medical facilities. 🏥",
        wrongAnswerExplanations: {
            "🏫": "This symbol represents a school, not a hospital.",
            "🏪": "This symbol represents a convenience store, not a hospital.",
            "🏢": "This symbol represents a generic building, not specifically a hospital."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch8_t1_qe5',
        type: "mcq",
        question: "What does the compass rose on a map show?",
        options: ["Directions", "Distances", "Symbols", "Locations"],
        correctAnswer: "Directions",
        explanation: "The compass rose shows the cardinal directions (North, South, East, West) and sometimes intermediate directions. It helps with orientation. 🧭",
        wrongAnswerExplanations: {
            "Distances": "Distances are shown by the map scale, not the compass rose.",
            "Symbols": "Symbols are explained in the map key, not the compass rose.",
            "Locations": "Locations are shown by coordinates or landmarks, not the compass rose."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch8_t1_qe6',
        type: "mcq",
        question: "If you're facing North, which direction is behind you?",
        options: ["South", "East", "West", "North"],
        correctAnswer: "South",
        explanation: "When facing North, South is directly behind you. This is because North and South are opposite directions. ⬆️⬇️",
        wrongAnswerExplanations: {
            "East": "East is to your right when facing North.",
            "West": "West is to your left when facing North.",
            "North": "North is the direction you're facing, not behind you."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch8_t1_qe7',
        type: "mcq",
        question: "What color is typically used to show water on a map?",
        options: ["Blue", "Green", "Brown", "Black"],
        correctAnswer: "Blue",
        explanation: "Blue is the standard color used to represent water features like oceans, lakes, and rivers on maps. It's an international convention. 💧",
        wrongAnswerExplanations: {
            "Green": "Green is typically used to show vegetation or parks.",
            "Brown": "Brown is often used to show mountains or elevation.",
            "Black": "Black is usually used for man-made features like roads."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch8_t1_qe8',
        type: "mcq",
        question: "What is the purpose of a map scale?",
        options: ["To show real distances", "To show directions", "To explain symbols", "To find locations"],
        correctAnswer: "To show real distances",
        explanation: "A map scale shows the relationship between distances on the map and real distances in the world. It helps calculate actual distances. 📏",
        wrongAnswerExplanations: {
            "To show directions": "Directions are shown by the compass rose, not the scale.",
            "To explain symbols": "Symbols are explained in the map key, not the scale.",
            "To find locations": "Locations are found using coordinates or landmarks, not the scale."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch8_t1_qe9',
        type: "mcq",
        question: "Which symbol would you look for to find a park on a map?",
        options: ["🌳", "🏥", "🏫", "🏪"],
        correctAnswer: "🌳",
        explanation: "The 🌳 symbol is commonly used to represent parks and green spaces on maps. It helps people locate recreational areas. 🌳",
        wrongAnswerExplanations: {
            "🏥": "This symbol represents a hospital, not a park.",
            "🏫": "This symbol represents a school, not a park.",
            "🏪": "This symbol represents a convenience store, not a park."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch8_t1_qe10',
        type: "mcq",
        question: "If you're facing East, which direction is to your right?",
        options: ["South", "North", "East", "West"],
        correctAnswer: "South",
        explanation: "When facing East, South is to your right. This is because the directions follow a clockwise pattern from North. ➡️",
        wrongAnswerExplanations: {
            "North": "North is to your left when facing East.",
            "East": "East is the direction you're facing, not to your right.",
            "West": "West is behind you when facing East."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch8_t1_qe11',
        type: "mcq",
        question: "What does this symbol usually mean on a map? 🏢",
        options: ["Building", "School", "Hospital", "Park"],
        correctAnswer: "Building",
        explanation: "The 🏢 symbol represents a generic building on maps. It's used when the specific type of building isn't important. 🏢",
        wrongAnswerExplanations: {
            "School": "Schools are represented by the 🏫 symbol.",
            "Hospital": "Hospitals are represented by the 🏥 symbol.",
            "Park": "Parks are represented by the 🌳 symbol."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch8_t1_qe12',
        type: "mcq",
        question: "Which direction is between North and East?",
        options: ["Northeast", "Northwest", "Southeast", "Southwest"],
        correctAnswer: "Northeast",
        explanation: "Northeast is the intermediate direction between North and East. It's halfway between these two cardinal directions. ↗️",
        wrongAnswerExplanations: {
            "Northwest": "Northwest is between North and West.",
            "Southeast": "Southeast is between South and East.",
            "Southwest": "Southwest is between South and West."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch8_t1_qe13',
        type: "mcq",
        question: "What color is typically used to show roads on a map?",
        options: ["Black", "Blue", "Green", "Brown"],
        correctAnswer: "Black",
        explanation: "Black is the standard color used to represent roads and highways on maps. It makes them easy to distinguish from other features. 🛣️",
        wrongAnswerExplanations: {
            "Blue": "Blue is used for water features.",
            "Green": "Green is used for vegetation and parks.",
            "Brown": "Brown is used for mountains and elevation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch8_t1_qe14',
        type: "mcq",
        question: "What does this symbol usually mean on a map? 🏪",
        options: ["Store", "School", "Hospital", "Park"],
        correctAnswer: "Store",
        explanation: "The 🏪 symbol represents a store or shopping area on maps. It helps people locate places to shop. 🛍️",
        wrongAnswerExplanations: {
            "School": "Schools are represented by the 🏫 symbol.",
            "Hospital": "Hospitals are represented by the 🏥 symbol.",
            "Park": "Parks are represented by the 🌳 symbol."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch8_t1_qe15',
        type: "mcq",
        question: "Which direction is between South and West?",
        options: ["Southwest", "Southeast", "Northwest", "Northeast"],
        correctAnswer: "Southwest",
        explanation: "Southwest is the intermediate direction between South and West. It's halfway between these two cardinal directions. ↙️",
        wrongAnswerExplanations: {
            "Southeast": "Southeast is between South and East.",
            "Northwest": "Northwest is between North and West.",
            "Northeast": "Northeast is between North and East."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch8_t1_qe16',
        type: "mcq",
        question: "What does this symbol usually mean on a map? 🌳",
        options: ["Park", "School", "Hospital", "Store"],
        correctAnswer: "Park",
        explanation: "The 🌳 symbol represents a park or green space on maps. It helps people locate recreational areas. 🌳",
        wrongAnswerExplanations: {
            "School": "Schools are represented by the 🏫 symbol.",
            "Hospital": "Hospitals are represented by the 🏥 symbol.",
            "Store": "Stores are represented by the 🏪 symbol."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch8_t1_qe17',
        type: "mcq",
        question: "Which direction is between North and West?",
        options: ["Northwest", "Northeast", "Southwest", "Southeast"],
        correctAnswer: "Northwest",
        explanation: "Northwest is the intermediate direction between North and West. It's halfway between these two cardinal directions. ↖️",
        wrongAnswerExplanations: {
            "Northeast": "Northeast is between North and East.",
            "Southwest": "Southwest is between South and West.",
            "Southeast": "Southeast is between South and East."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch8_t1_qe18',
        type: "mcq",
        question: "What color is typically used to show mountains on a map?",
        options: ["Brown", "Blue", "Green", "Black"],
        correctAnswer: "Brown",
        explanation: "Brown is the standard color used to represent mountains and elevation on maps. It helps show changes in terrain. ⛰️",
        wrongAnswerExplanations: {
            "Blue": "Blue is used for water features.",
            "Green": "Green is used for vegetation and parks.",
            "Black": "Black is used for roads and man-made features."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch8_t1_qe19',
        type: "mcq",
        question: "What does this symbol usually mean on a map? 🏥",
        options: ["Hospital", "School", "Park", "Store"],
        correctAnswer: "Hospital",
        explanation: "The 🏥 symbol represents a hospital or medical facility on maps. It helps people locate healthcare services. 🏥",
        wrongAnswerExplanations: {
            "School": "Schools are represented by the 🏫 symbol.",
            "Park": "Parks are represented by the 🌳 symbol.",
            "Store": "Stores are represented by the 🏪 symbol."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch8_t1_qe20',
        type: "mcq",
        question: "Which direction is between South and East?",
        options: ["Southeast", "Southwest", "Northeast", "Northwest"],
        correctAnswer: "Southeast",
        explanation: "Southeast is the intermediate direction between South and East. It's halfway between these two cardinal directions. ↘️",
        wrongAnswerExplanations: {
            "Southwest": "Southwest is between South and West.",
            "Northeast": "Northeast is between North and East.",
            "Northwest": "Northwest is between North and West."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 