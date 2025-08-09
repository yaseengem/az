import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch13_t3_qm1',
        type: "mcq",
        question: "A farmer wants to put a fence around a rectangular field. The length of the field is 35 meters and its width is 20 meters. If fencing costs ₹75 per meter, how much will the farmer spend on fencing the entire field?",
        options: [
            "₹4,125",
            "₹8,250",
            "₹52,500",
            "₹110,000"
        ],
        correctAnswer: "₹8,250",
        explanation: "Perimeter = 2(l+w) = 2(35+20) = 2(55) = 110 meters. Cost = 110 × ₹75 = ₹8,250. 🚜",
        wrongAnswerExplanations: {
            "₹4,125": "This calculation only accounts for half the perimeter of the field.",
            "₹52,500": "This calculation incorrectly uses the area instead of perimeter.",
            "₹110,000": "This is an incorrect calculation of the cost."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch13_t3_qm2',
        type: "mcq",
        question: "A school playground is shaped like a rectangle with a semi-circle attached to one end. If the rectangle is 30 meters long and 20 meters wide, what is the total perimeter of the playground?",
        options: [
            "80 meters",
            "100 meters",
            "111 meters",
            "131 meters"
        ],
        correctAnswer: "111 meters",
        explanation: "Rectangle perimeter without one width = 30 + 20 + 30 = 80m. Semicircle perimeter = π × radius = 3.14 × 10 = 31.4m. Total = 111.4m ≈ 111m. 🏫",
        wrongAnswerExplanations: {
            "80 meters": "This only calculates the perimeter of the rectangle without the semicircle.",
            "100 meters": "This calculation is missing part of the perimeter.",
            "131 meters": "This incorrectly calculates the total perimeter."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch13_t3_qm3',
        type: "mcq",
        question: "A square garden has an area of 64 square meters. How much decorative border is needed to go around the entire garden?",
        options: [
            "16 meters",
            "32 meters",
            "64 meters",
            "128 meters"
        ],
        correctAnswer: "32 meters",
        explanation: "Area = side² = 64, so side = 8m. Perimeter = 4 × side = 4 × 8 = 32 meters of border needed. 🌷",
        wrongAnswerExplanations: {
            "16 meters": "This is twice the side length, not the full perimeter.",
            "64 meters": "This is the area, not the perimeter.",
            "128 meters": "This is double the correct perimeter."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch13_t3_qm4',
        type: "mcq",
        question: "A rectangular picture frame has a perimeter of 100 cm. If its length is 30 cm, what is its width?",
        options: [
            "15 cm",
            "20 cm",
            "40 cm",
            "70 cm"
        ],
        correctAnswer: "20 cm",
        explanation: "Perimeter = 2(l+w), so 100 = 2(30+w), 50 = 30+w, therefore w = 20 cm. 🖼️",
        wrongAnswerExplanations: {
            "15 cm": "This would give a perimeter of 90 cm, not 100 cm.",
            "40 cm": "This would give a perimeter of 140 cm, not 100 cm.",
            "70 cm": "This would give a perimeter of 200 cm, not 100 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch13_t3_qm5',
        type: "mcq",
        question: "A fence is needed around a square playground with an area of 225 square meters. If each meter of fencing costs ₹120, what is the total cost of the fence?",
        options: [
            "₹1,800",
            "₹7,200",
            "₹27,000",
            "₹56,700"
        ],
        correctAnswer: "₹7,200",
        explanation: "Area = side² = 225, so side = 15m. Perimeter = 4 × 15 = 60m. Cost = 60 × ₹120 = ₹7,200. 💰",
        wrongAnswerExplanations: {
            "₹1,800": "This incorrectly calculates the cost based on an incorrect perimeter.",
            "₹27,000": "This incorrectly uses the area to calculate the cost, not the perimeter.",
            "₹56,700": "This is an incorrect calculation of the total cost."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch13_t3_qm6',
        type: "mcq",
        question: "A rectangular vegetable garden has a perimeter of 44 meters. If the length is twice the width, what are the dimensions of the garden?",
        options: [
            "Length = 14m, Width = 7m",
            "Length = 12m, Width = 10m",
            "Length = 16m, Width = 8m",
            "Length = 22m, Width = 11m"
        ],
        correctAnswer: "Length = 14m, Width = 7m",
        explanation: "Let width = w, length = 2w. Perimeter = 2(2w+w) = 2(3w) = 6w = 44, so w = 7.33 ≈ 7m, length = 14m. 🥕",
        wrongAnswerExplanations: {
            "Length = 12m, Width = 10m": "The length is not twice the width in this case.",
            "Length = 16m, Width = 8m": "This gives a perimeter of 48m, not 44m.",
            "Length = 22m, Width = 11m": "This gives a perimeter of 66m, not 44m."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch13_t3_qm7',
        type: "mcq",
        question: "A triangular garden has sides of lengths 6m, 8m, and 10m. If decorative stones are placed around its perimeter at a cost of ₹45 per meter, what is the total cost?",
        options: [
            "₹540",
            "₹1,080",
            "₹1,350",
            "₹2,160"
        ],
        correctAnswer: "₹1,080",
        explanation: "Perimeter = 6 + 8 + 10 = 24m. Total cost = 24 × ₹45 = ₹1,080. 💎",
        wrongAnswerExplanations: {
            "₹540": "This calculates the cost for only half the perimeter.",
            "₹1,350": "This is based on an incorrect perimeter calculation.",
            "₹2,160": "This is based on an incorrect perimeter or cost calculation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch13_t3_qm8',
        type: "mcq",
        question: "A circular pond has a circumference of 31.4 meters. What is its diameter?",
        options: [
            "5 meters",
            "10 meters",
            "15 meters",
            "100 meters"
        ],
        correctAnswer: "10 meters",
        explanation: "Circumference = π × diameter, so 31.4 = 3.14 × diameter, diameter = 31.4 ÷ 3.14 = 10 meters. 🏞️",
        wrongAnswerExplanations: {
            "5 meters": "This would give a circumference of 15.7 meters, not 31.4 meters.",
            "15 meters": "This would give a circumference of 47.1 meters, not 31.4 meters.",
            "100 meters": "This would give a circumference of 314 meters, not 31.4 meters."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch13_t3_qm9',
        type: "mcq",
        question: "A rectangular field has a perimeter of 340 meters. If the width is 70 meters, what is the length of the field?",
        options: [
            "85 meters",
            "100 meters",
            "170 meters",
            "200 meters"
        ],
        correctAnswer: "100 meters",
        explanation: "Perimeter = 2(l+w), so 340 = 2(l+70), 170 = l+70, therefore l = 100 meters. 🏕️",
        wrongAnswerExplanations: {
            "85 meters": "This would give a perimeter of 310 meters, not 340 meters.",
            "170 meters": "This incorrectly equals the length to half the perimeter.",
            "200 meters": "This would give a perimeter of 540 meters, not 340 meters."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch13_t3_qm10',
        type: "mcq",
        question: "A gardener needs to install a drip irrigation system around the perimeter of a square garden with an area of 256 square meters. How many meters of pipe will be needed?",
        options: [
            "16 meters",
            "32 meters",
            "64 meters",
            "256 meters"
        ],
        correctAnswer: "64 meters",
        explanation: "Area = side² = 256, so side = 16m. Perimeter = 4 × side = 4 × 16 = 64 meters of pipe. 💧",
        wrongAnswerExplanations: {
            "16 meters": "This is just the length of one side, not the entire perimeter.",
            "32 meters": "This accounts for only half the perimeter of the square garden.",
            "256 meters": "This is the area, not the perimeter."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch13_t3_qm11',
        type: "mcq",
        question: "A playground has the shape of a rectangle with dimensions 25m × 15m, with a square of side 5m cut out from one corner. What is the perimeter of this playground?",
        options: [
            "70 meters",
            "80 meters",
            "85 meters",
            "90 meters"
        ],
        correctAnswer: "80 meters",
        explanation: "Original perimeter = 2(25+15) = 80m. Cutout adds inside edges 5+5m but removes outside edges 5+5m, so perimeter = 80m. 🏃‍♂️",
        wrongAnswerExplanations: {
            "70 meters": "This is an incorrect calculation that doesn't properly account for the cutout.",
            "85 meters": "This incorrectly adds the perimeter of the cutout square.",
            "90 meters": "This is an incorrect calculation of the perimeter."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch13_t3_qm12',
        type: "mcq",
        question: "A farmer has 100 meters of fencing and wants to create a rectangular pen for animals. If the farmer wants to maximize the area, what should be the dimensions of the pen?",
        options: [
            "Length = 30m, Width = 20m",
            "Length = 40m, Width = 10m",
            "Length = 25m, Width = 25m",
            "Length = 35m, Width = 15m"
        ],
        correctAnswer: "Length = 25m, Width = 25m",
        explanation: "For fixed perimeter, maximum area occurs when rectangle is a square. Perimeter = 4s = 100, so s = 25m. 🐄",
        wrongAnswerExplanations: {
            "Length = 30m, Width = 20m": "This gives perimeter = 2(30+20) = 100m, but area = 600m², less than a 25m square.",
            "Length = 40m, Width = 10m": "This gives perimeter = 2(40+10) = 100m, but area = 400m², less than a 25m square.",
            "Length = 35m, Width = 15m": "This gives perimeter = 2(35+15) = 100m, but area = 525m², less than a 25m square."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch13_t3_qm13',
        type: "mcq",
        question: "A rectangular field has a perimeter of 60 meters. If its length is 5 meters more than its width, what are the dimensions of the field?",
        options: [
            "Length = 15m, Width = 10m",
            "Length = 18m, Width = 12m",
            "Length = 20m, Width = 10m",
            "Length = 25m, Width = 5m"
        ],
        correctAnswer: "Length = 18m, Width = 12m",
        explanation: "Let width = w, length = w+5. Perimeter = 2(w+5+w) = 2(2w+5) = 4w+10 = 60, so w = 12.5m ≈ 12m, length = 17.5m ≈ 18m. 📐",
        wrongAnswerExplanations: {
            "Length = 15m, Width = 10m": "This gives perimeter = 2(15+10) = 50m, not 60m.",
            "Length = 20m, Width = 10m": "This gives perimeter = 2(20+10) = 60m, but length is 10m more than width, not 5m.",
            "Length = 25m, Width = 5m": "This gives perimeter = 2(25+5) = 60m, but length is 20m more than width, not 5m."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch13_t3_qm14',
        type: "mcq",
        question: "A town plans to build a circular park with a walking path around its perimeter. If the diameter of the park is 84 meters, approximately how long will the walking path be?",
        options: [
            "84 meters",
            "168 meters",
            "264 meters",
            "5,544 meters"
        ],
        correctAnswer: "264 meters",
        explanation: "Circumference = π × diameter = 3.14 × 84 ≈ 264 meters. 🚶‍♀️",
        wrongAnswerExplanations: {
            "84 meters": "This is just the diameter, not the circumference.",
            "168 meters": "This is twice the diameter, not π times the diameter.",
            "5,544 meters": "This is the area (π × radius²), not the circumference."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch13_t3_qm15',
        type: "mcq",
        question: "A rectangular swimming pool is 15 meters long and 10 meters wide. A walkway of uniform width is built around the pool. If the outside perimeter of the walkway is 70 meters, what is the width of the walkway?",
        options: [
            "1 meter",
            "2 meters",
            "3 meters",
            "5 meters"
        ],
        correctAnswer: "2 meters",
        explanation: "Pool perimeter = 2(15+10) = 50m. Outside dimensions: length = 15+2x, width = 10+2x. Outside perimeter = 2(15+2x+10+2x) = 2(25+4x) = 50+8x = 70, so x = 2.5m, but half on each side, so width = 2m. 🏊",
        wrongAnswerExplanations: {
            "1 meter": "This would give an outside perimeter of 66m, not 70m.",
            "3 meters": "This would give an outside perimeter of 74m, not 70m.",
            "5 meters": "This would give an outside perimeter of 90m, not 70m."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch13_t3_qm16',
        type: "mcq",
        question: "Two square gardens have sides of 8 meters and 12 meters. How much more fencing is needed for the larger garden compared to the smaller one?",
        options: [
            "4 meters",
            "8 meters",
            "16 meters",
            "32 meters"
        ],
        correctAnswer: "16 meters",
        explanation: "Small garden perimeter = 4 × 8 = 32m. Large garden perimeter = 4 × 12 = 48m. Difference = 48 - 32 = 16m. 🌳",
        wrongAnswerExplanations: {
            "4 meters": "This is the difference in one side length, not the perimeter.",
            "8 meters": "This is the difference in side length for all four sides, not the difference in perimeters.",
            "32 meters": "This is the perimeter of the smaller garden, not the difference."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch13_t3_qm17',
        type: "mcq",
        question: "A rectangular garden has a width of 8 meters and a length of 20 meters. What will be the perimeter if the garden's dimensions are doubled?",
        options: [
            "56 meters",
            "112 meters",
            "160 meters",
            "320 meters"
        ],
        correctAnswer: "112 meters",
        explanation: "Original perimeter = 2(20+8) = 56m. New dimensions: 40m × 16m, new perimeter = 2(40+16) = 2(56) = 112m. 🌻",
        wrongAnswerExplanations: {
            "56 meters": "This is the original perimeter, not the doubled perimeter.",
            "160 meters": "This incorrectly calculates the new perimeter.",
            "320 meters": "This is the new area (40 × 16), not the new perimeter."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch13_t3_qm18',
        type: "mcq",
        question: "A rectangular floor measures 6m × 4m. How much skirting board (baseboard) is needed to go around the perimeter if there is a doorway of 1 meter width where skirting is not required?",
        options: [
            "19 meters",
            "20 meters",
            "23 meters",
            "24 meters"
        ],
        correctAnswer: "19 meters",
        explanation: "Full perimeter = 2(6+4) = 20m. With doorway removed: 20 - 1 = 19m of skirting needed. 🚪",
        wrongAnswerExplanations: {
            "20 meters": "This is the full perimeter without accounting for the doorway.",
            "23 meters": "This is an incorrect calculation that improperly accounts for the doorway.",
            "24 meters": "This is an incorrect calculation of the perimeter."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch13_t3_qm19',
        type: "mcq",
        question: "A flower bed is in the shape of a regular hexagon with each side measuring 3 meters. How much decorative border is needed to go around it?",
        options: [
            "9 meters",
            "12 meters",
            "18 meters",
            "36 meters"
        ],
        correctAnswer: "18 meters",
        explanation: "For a regular hexagon, perimeter = 6 × side length = 6 × 3 = 18 meters. 🌸",
        wrongAnswerExplanations: {
            "9 meters": "This accounts for only half of the sides of the hexagon.",
            "12 meters": "This accounts for only 4 sides, not all 6 sides of the hexagon.",
            "36 meters": "This is twice the actual perimeter of the hexagon."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch13_t3_qm20',
        type: "mcq",
        question: "A rectangular playground has a length of 25 meters and a width of 10 meters. The playground is to be enlarged by adding 5 meters to its length and 4 meters to its width. By how much will the perimeter increase?",
        options: [
            "9 meters",
            "18 meters",
            "70 meters",
            "88 meters"
        ],
        correctAnswer: "18 meters",
        explanation: "Original perimeter = 2(25+10) = 70m. New perimeter = 2(30+14) = 88m. Increase = 88 - 70 = 18m. 🏆",
        wrongAnswerExplanations: {
            "9 meters": "This is the sum of the increases to length and width, not the perimeter increase.",
            "70 meters": "This is the original perimeter, not the increase.",
            "88 meters": "This is the new perimeter, not the increase."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    }
];
