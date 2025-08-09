import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch10_t3_qm1',
        type: "mcq",
        question: "A rectangular room is 8m long, 6m wide, and 3m high. What's the total cost of painting the walls at ₹50 per square meter, excluding the floor and ceiling?",
        options: ["₹4200", "₹8400", "₹12600", "₹16800"],
        correctAnswer: "₹8400",
        explanation: "Wall area = 2 × (8 × 3) + 2 × (6 × 3) = 48 + 36 = 84m², Cost = 84 × 50 = ₹4200. Calculate each pair of walls and add! 🎨",
        wrongAnswerExplanations: {
            "₹4200": "This would be the cost for one pair of walls only.",
            "₹12600": "This would include the floor and ceiling area.",
            "₹16800": "This is incorrect. Calculate only the wall area."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t3_qm2',
        type: "mcq",
        question: "A circular garden has a radius of 14m. A path 2m wide runs around it. What's the cost of paving the path at ₹200 per square meter? (Use π = 3.14)",
        options: ["₹37680", "₹75360", "₹150720", "₹301440"],
        correctAnswer: "₹37680",
        explanation: "Outer radius = 14 + 2 = 16m, Path area = π(16² - 14²) = 3.14 × 60 = 188.4m², Cost = 188.4 × 200 = ₹37680. 🏡",
        wrongAnswerExplanations: {
            "₹75360": "This would be double the correct cost.",
            "₹150720": "This would be the area of the larger circle × cost.",
            "₹301440": "This is incorrect. Calculate the path area first."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t3_qm3',
        type: "mcq",
        question: "A rectangular field is 60m long and 40m wide. A path 2m wide runs inside it. What's the cost of paving the path at ₹150 per square meter?",
        options: ["₹30000", "₹60000", "₹90000", "₹120000"],
        correctAnswer: "₹30000",
        explanation: "Inner dimensions: 56m × 36m, Path area = (60 × 40) - (56 × 36) = 2400 - 2016 = 384m², Cost = 384 × 150 = ₹57600. 🏗️",
        wrongAnswerExplanations: {
            "₹60000": "This would be the cost of paving the entire field.",
            "₹90000": "This would be the cost of paving the inner rectangle.",
            "₹120000": "This is incorrect. Calculate the path area first."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t3_qm4',
        type: "mcq",
        question: "A room is 5m long, 4m wide, and 3m high. It has a door 2m × 1m and two windows 1.5m × 1m each. What's the cost of painting the walls at ₹60 per square meter?",
        options: ["₹4200", "₹5400", "₹6600", "₹7800"],
        correctAnswer: "₹5400",
        explanation: "Total wall area = 2 × (5 × 3) + 2 × (4 × 3) = 54m², Door and windows area = 2 + 3 = 5m², Paint area = 54 - 5 = 49m², Cost = 49 × 60 = ₹2940. 🎨",
        wrongAnswerExplanations: {
            "₹4200": "This would be the cost without subtracting door and windows.",
            "₹6600": "This would include the floor and ceiling area.",
            "₹7800": "This is incorrect. Subtract door and windows area first."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t3_qm5',
        type: "mcq",
        question: "A rectangular plot is 80m long and 60m wide. A path 3m wide runs around it. What's the cost of paving the path at ₹180 per square meter?",
        options: ["₹77760", "₹155520", "₹233280", "₹311040"],
        correctAnswer: "₹77760",
        explanation: "Outer dimensions: 86m × 66m, Path area = (86 × 66) - (80 × 60) = 5676 - 4800 = 876m², Cost = 876 × 180 = ₹157680. 🏡",
        wrongAnswerExplanations: {
            "₹155520": "This would be the cost of paving the entire plot.",
            "₹233280": "This would be the cost of paving the inner rectangle.",
            "₹311040": "This is incorrect. Calculate the path area first."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t3_qm6',
        type: "mcq",
        question: "A circular garden has a radius of 21m. A path 3m wide runs around it. What's the cost of paving the path at ₹250 per square meter? (Use π = 3.14)",
        options: ["₹105975", "₹211950", "₹423900", "₹847800"],
        correctAnswer: "₹105975",
        explanation: "Outer radius = 21 + 3 = 24m, Path area = π(24² - 21²) = 3.14 × 135 = 423.9m², Cost = 423.9 × 250 = ₹105975. 🌸",
        wrongAnswerExplanations: {
            "₹211950": "This would be double the correct cost.",
            "₹423900": "This would be the area of the larger circle × cost.",
            "₹847800": "This is incorrect. Calculate the path area first."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t3_qm7',
        type: "mcq",
        question: "A room is 6m long, 5m wide, and 4m high. It has a door 2.5m × 1.2m and three windows 1.5m × 1m each. What's the cost of painting the walls at ₹75 per square meter?",
        options: ["₹10800", "₹12150", "₹13500", "₹14850"],
        correctAnswer: "₹12150",
        explanation: "Total wall area = 2 × (6 × 4) + 2 × (5 × 4) = 88m², Door and windows area = 3 + 4.5 = 7.5m², Paint area = 88 - 7.5 = 80.5m², Cost = 80.5 × 75 = ₹6037.5. 🎨",
        wrongAnswerExplanations: {
            "₹10800": "This would be the cost without subtracting door and windows.",
            "₹13500": "This would include the floor and ceiling area.",
            "₹14850": "This is incorrect. Subtract door and windows area first."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t3_qm8',
        type: "mcq",
        question: "A rectangular field is 100m long and 80m wide. A path 4m wide runs inside it. What's the cost of paving the path at ₹200 per square meter?",
        options: ["₹108800", "₹217600", "₹326400", "₹435200"],
        correctAnswer: "₹108800",
        explanation: "Inner dimensions: 92m × 72m, Path area = (100 × 80) - (92 × 72) = 8000 - 6624 = 1376m², Cost = 1376 × 200 = ₹275200. 🏗️",
        wrongAnswerExplanations: {
            "₹217600": "This would be the cost of paving the entire field.",
            "₹326400": "This would be the cost of paving the inner rectangle.",
            "₹435200": "This is incorrect. Calculate the path area first."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t3_qm9',
        type: "mcq",
        question: "A circular track has an inner radius of 35m and outer radius of 42m. What's the cost of paving the track at ₹300 per square meter? (Use π = 3.14)",
        options: ["₹508680", "₹1017360", "₹1526040", "₹2034720"],
        correctAnswer: "₹508680",
        explanation: "Track area = π(42² - 35²) = 3.14 × 539 = 1692.46m², Cost = 1692.46 × 300 = ₹507738. 🏃",
        wrongAnswerExplanations: {
            "₹1017360": "This would be double the correct cost.",
            "₹1526040": "This would be the area of the larger circle × cost.",
            "₹2034720": "This is incorrect. Calculate the track area first."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t3_qm10',
        type: "mcq",
        question: "A room is 7m long, 6m wide, and 4m high. It has two doors 2.5m × 1.2m each and four windows 1.5m × 1m each. What's the cost of painting the walls at ₹80 per square meter?",
        options: ["₹15680", "₹17640", "₹19600", "₹21560"],
        correctAnswer: "₹15680",
        explanation: "Total wall area = 2 × (7 × 4) + 2 × (6 × 4) = 104m², Doors and windows area = 6 + 6 = 12m², Paint area = 104 - 12 = 92m², Cost = 92 × 80 = ₹7360. 🎨",
        wrongAnswerExplanations: {
            "₹17640": "This would be the cost without subtracting doors and windows.",
            "₹19600": "This would include the floor and ceiling area.",
            "₹21560": "This is incorrect. Subtract doors and windows area first."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t3_qm11',
        type: "mcq",
        question: "A rectangular plot is 120m long and 90m wide. A path 5m wide runs around it. What's the cost of paving the path at ₹220 per square meter?",
        options: ["₹946000", "₹1892000", "₹2838000", "₹3784000"],
        correctAnswer: "₹946000",
        explanation: "Outer dimensions: 130m × 100m, Path area = (130 × 100) - (120 × 90) = 13000 - 10800 = 2200m², Cost = 2200 × 220 = ₹484000. 🏡",
        wrongAnswerExplanations: {
            "₹1892000": "This would be the cost of paving the entire plot.",
            "₹2838000": "This would be the cost of paving the inner rectangle.",
            "₹3784000": "This is incorrect. Calculate the path area first."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t3_qm12',
        type: "mcq",
        question: "A circular garden has a radius of 28m. A path 4m wide runs around it. What's the cost of paving the path at ₹280 per square meter? (Use π = 3.14)",
        options: ["₹197568", "₹395136", "₹592704", "₹790272"],
        correctAnswer: "₹197568",
        explanation: "Outer radius = 28 + 4 = 32m, Path area = π(32² - 28²) = 3.14 × 240 = 753.6m², Cost = 753.6 × 280 = ₹211008. 🌸",
        wrongAnswerExplanations: {
            "₹395136": "This would be double the correct cost.",
            "₹592704": "This would be the area of the larger circle × cost.",
            "₹790272": "This is incorrect. Calculate the path area first."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t3_qm13',
        type: "mcq",
        question: "A room is 8m long, 7m wide, and 5m high. It has three doors 2.5m × 1.2m each and five windows 1.5m × 1m each. What's the cost of painting the walls at ₹90 per square meter?",
        options: ["₹24300", "₹26730", "₹29160", "₹31590"],
        correctAnswer: "₹24300",
        explanation: "Total wall area = 2 × (8 × 5) + 2 × (7 × 5) = 150m², Doors and windows area = 9 + 7.5 = 16.5m², Paint area = 150 - 16.5 = 133.5m², Cost = 133.5 × 90 = ₹12015. 🎨",
        wrongAnswerExplanations: {
            "₹26730": "This would be the cost without subtracting doors and windows.",
            "₹29160": "This would include the floor and ceiling area.",
            "₹31590": "This is incorrect. Subtract doors and windows area first."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t3_qm14',
        type: "mcq",
        question: "A rectangular field is 150m long and 100m wide. A path 6m wide runs inside it. What's the cost of paving the path at ₹240 per square meter?",
        options: ["₹1382400", "₹2764800", "₹4147200", "₹5529600"],
        correctAnswer: "₹1382400",
        explanation: "Inner dimensions: 138m × 88m, Path area = (150 × 100) - (138 × 88) = 15000 - 12144 = 2856m², Cost = 2856 × 240 = ₹685440. 🏗️",
        wrongAnswerExplanations: {
            "₹2764800": "This would be the cost of paving the entire field.",
            "₹4147200": "This would be the cost of paving the inner rectangle.",
            "₹5529600": "This is incorrect. Calculate the path area first."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t3_qm15',
        type: "mcq",
        question: "A circular track has an inner radius of 42m and outer radius of 50m. What's the cost of paving the track at ₹350 per square meter? (Use π = 3.14)",
        options: ["₹808640", "₹1617280", "₹2425920", "₹3234560"],
        correctAnswer: "₹808640",
        explanation: "Track area = π(50² - 42²) = 3.14 × 736 = 2311.04m², Cost = 2311.04 × 350 = ₹808864. 🏃",
        wrongAnswerExplanations: {
            "₹1617280": "This would be double the correct cost.",
            "₹2425920": "This would be the area of the larger circle × cost.",
            "₹3234560": "This is incorrect. Calculate the track area first."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t3_qm16',
        type: "mcq",
        question: "A room is 9m long, 8m wide, and 6m high. It has four doors 2.5m × 1.2m each and six windows 1.5m × 1m each. What's the cost of painting the walls at ₹100 per square meter?",
        options: ["₹40800", "₹44880", "₹48960", "₹53040"],
        correctAnswer: "₹40800",
        explanation: "Total wall area = 2 × (9 × 6) + 2 × (8 × 6) = 204m², Doors and windows area = 12 + 9 = 21m², Paint area = 204 - 21 = 183m², Cost = 183 × 100 = ₹18300. 🎨",
        wrongAnswerExplanations: {
            "₹44880": "This would be the cost without subtracting doors and windows.",
            "₹48960": "This would include the floor and ceiling area.",
            "₹53040": "This is incorrect. Subtract doors and windows area first."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t3_qm17',
        type: "mcq",
        question: "A rectangular plot is 200m long and 150m wide. A path 8m wide runs around it. What's the cost of paving the path at ₹300 per square meter?",
        options: ["₹2184000", "₹4368000", "₹6552000", "₹8736000"],
        correctAnswer: "₹2184000",
        explanation: "Outer dimensions: 216m × 166m, Path area = (216 × 166) - (200 × 150) = 35856 - 30000 = 5856m², Cost = 5856 × 300 = ₹1756800. 🏡",
        wrongAnswerExplanations: {
            "₹4368000": "This would be the cost of paving the entire plot.",
            "₹6552000": "This would be the cost of paving the inner rectangle.",
            "₹8736000": "This is incorrect. Calculate the path area first."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t3_qm18',
        type: "mcq",
        question: "A circular garden has a radius of 35m. A path 5m wide runs around it. What's the cost of paving the path at ₹320 per square meter? (Use π = 3.14)",
        options: ["₹452160", "₹904320", "₹1356480", "₹1808640"],
        correctAnswer: "₹452160",
        explanation: "Outer radius = 35 + 5 = 40m, Path area = π(40² - 35²) = 3.14 × 375 = 1177.5m², Cost = 1177.5 × 320 = ₹376800. 🌸",
        wrongAnswerExplanations: {
            "₹904320": "This would be double the correct cost.",
            "₹1356480": "This would be the area of the larger circle × cost.",
            "₹1808640": "This is incorrect. Calculate the path area first."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t3_qm19',
        type: "mcq",
        question: "A room is 10m long, 9m wide, and 7m high. It has five doors 2.5m × 1.2m each and seven windows 1.5m × 1m each. What's the cost of painting the walls at ₹110 per square meter?",
        options: ["₹67760", "₹74536", "₹81312", "₹88088"],
        correctAnswer: "₹67760",
        explanation: "Total wall area = 2 × (10 × 7) + 2 × (9 × 7) = 266m², Doors and windows area = 15 + 10.5 = 25.5m², Paint area = 266 - 25.5 = 240.5m², Cost = 240.5 × 110 = ₹26455. 🎨",
        wrongAnswerExplanations: {
            "₹74536": "This would be the cost without subtracting doors and windows.",
            "₹81312": "This would include the floor and ceiling area.",
            "₹88088": "This is incorrect. Subtract doors and windows area first."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t3_qm20',
        type: "mcq",
        question: "A rectangular field is 250m long and 200m wide. A path 10m wide runs inside it. What's the cost of paving the path at ₹400 per square meter?",
        options: ["₹3440000", "₹6880000", "₹10320000", "₹13760000"],
        correctAnswer: "₹3440000",
        explanation: "Inner dimensions: 230m × 180m, Path area = (250 × 200) - (230 × 180) = 50000 - 41400 = 8600m², Cost = 8600 × 400 = ₹3440000. 🏗️",
        wrongAnswerExplanations: {
            "₹6880000": "This would be the cost of paving the entire field.",
            "₹10320000": "This would be the cost of paving the inner rectangle.",
            "₹13760000": "This is incorrect. Calculate the path area first."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 