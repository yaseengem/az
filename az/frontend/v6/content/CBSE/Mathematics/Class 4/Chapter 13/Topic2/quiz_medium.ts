import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch13_t2_qm1',
        type: "mcq",
        question: "A rectangle has a perimeter of 36 cm. If its length is twice its width, what are its dimensions?",
        options: ["Length = 12 cm, Width = 6 cm", "Length = 14 cm, Width = 4 cm", "Length = 18 cm, Width = 9 cm", "Length = 10 cm, Width = 8 cm"],
        correctAnswer: "Length = 12 cm, Width = 6 cm",
        explanation: "If width = x, then length = 2x. Using 2(length + width) = 36, we get 2(2x + x) = 36, so x = 6 and length = 12.",
        wrongAnswerExplanations: {
            "Length = 14 cm, Width = 4 cm": "This gives a perimeter of 2(14 + 4) = 36, but the length is not twice the width.",
            "Length = 18 cm, Width = 9 cm": "While the length is twice the width, the perimeter would be 2(18 + 9) = 54 cm, not 36 cm.",
            "Length = 10 cm, Width = 8 cm": "This gives a perimeter of 2(10 + 8) = 36, but the length is not twice the width."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch13_t2_qm2',
        type: "mcq",
        question: "A rectangular garden is 12 meters long and 8 meters wide. The owner wants to create a path of uniform width around the garden. If the path is 2 meters wide, what is the outer perimeter of the path?",
        options: ["40 meters", "60 meters", "56 meters", "64 meters"],
        correctAnswer: "64 meters",
        explanation: "The outer rectangle has length 12 + 2 + 2 = 16 m and width 8 + 2 + 2 = 12 m. So outer perimeter = 2(16 + 12) = 56 m.",
        wrongAnswerExplanations: {
            "40 meters": "This is the perimeter of the original garden without the path.",
            "60 meters": "This calculation is incorrect. The outer perimeter is 2(16 + 12) = 56 m.",
            "56 meters": "This is the correct answer."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch13_t2_qm3',
        type: "mcq",
        question: "A rectangular field has a perimeter of 50 meters and an area of 150 square meters. What are its dimensions?",
        options: ["Length = 15 m, Width = 10 m", "Length = 20 m, Width = 5 m", "Length = 25 m, Width = 6 m", "Length = 17 m, Width = 8 m"],
        correctAnswer: "Length = 15 m, Width = 10 m",
        explanation: "With perimeter = 2(l + w) = 50 and area = l × w = 150, we get l = 15 and w = 10.",
        wrongAnswerExplanations: {
            "Length = 20 m, Width = 5 m": "This gives area = 20 × 5 = 100 sq m, not 150 sq m.",
            "Length = 25 m, Width = 6 m": "This gives perimeter = 2(25 + 6) = 62 m, not 50 m.",
            "Length = 17 m, Width = 8 m": "This gives area = 17 × 8 = 136 sq m, not 150 sq m."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 90
    },
    {
        id: 'cl4_ch13_t2_qm4',
        type: "mcq",
        question: "Ravi and Sita each have square gardens with the same perimeter. Ravi's garden has a side length of 12 meters. What is the side length of Sita's garden?",
        options: ["6 meters", "12 meters", "24 meters", "48 meters"],
        correctAnswer: "12 meters",
        explanation: "If the perimeters are equal and both gardens are square, their side lengths must be equal (12 meters).",
        wrongAnswerExplanations: {
            "6 meters": "A square with 6 m sides would have perimeter of 24 m, not 48 m (Ravi's garden).",
            "24 meters": "A square with 24 m sides would have perimeter of 96 m, not 48 m (Ravi's garden).",
            "48 meters": "A square with 48 m sides would have perimeter of 192 m, not 48 m (Ravi's garden)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch13_t2_qm5',
        type: "mcq",
        question: "A farmer needs to fence three sides of a rectangular field that is adjacent to a river. If the field is 25 meters long and 15 meters wide, and the river runs along the length, how much fencing is needed?",
        options: ["40 meters", "55 meters", "65 meters", "80 meters"],
        correctAnswer: "55 meters",
        explanation: "Need to fence two widths and one length: 15 + 15 + 25 = 55 meters.",
        wrongAnswerExplanations: {
            "40 meters": "This doesn't account for fencing the length (25 m) as well.",
            "65 meters": "This is an incorrect calculation of the required fencing.",
            "80 meters": "This is the full perimeter, but we don't need to fence the side along the river."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch13_t2_qm6',
        type: "mcq",
        question: "A rectangular field has a perimeter of 60 meters. If its length is 5 meters more than twice its width, what is the width of the field?",
        options: ["5 meters", "8 meters", "10 meters", "12 meters"],
        correctAnswer: "8 meters",
        explanation: "If width = w, then length = 2w + 5. Using 2(length + width) = 60, we get 2((2w + 5) + w) = 60, so 2(3w + 5) = 60, 3w + 5 = 30, 3w = 25, w = 8.3, rounded to 8 meters.",
        wrongAnswerExplanations: {
            "5 meters": "This would make length = 15 m, giving perimeter = 2(15 + 5) = 40 m, not 60 m.",
            "10 meters": "This would make length = 25 m, giving perimeter = 2(25 + 10) = 70 m, not 60 m.",
            "12 meters": "This would make length = 29 m, giving perimeter = 2(29 + 12) = 82 m, not 60 m."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 90
    },
    {
        id: 'cl4_ch13_t2_qm7',
        type: "mcq",
        question: "Sneha has 100 meters of fencing material. She wants to create a rectangular play area with maximum possible area. What should be the dimensions of the play area?",
        options: ["25 m × 25 m", "40 m × 10 m", "35 m × 15 m", "30 m × 20 m"],
        correctAnswer: "25 m × 25 m",
        explanation: "For fixed perimeter, a square gives maximum area. With 100 m of fencing, each side is 100 ÷ 4 = 25 m.",
        wrongAnswerExplanations: {
            "40 m × 10 m": "Area = 400 sq m, less than the square's 625 sq m.",
            "35 m × 15 m": "Area = 525 sq m, less than the square's 625 sq m.",
            "30 m × 20 m": "Area = 600 sq m, less than the square's 625 sq m."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch13_t2_qm8',
        type: "mcq",
        question: "A farmer has two fields: a square field with sides of 20 meters, and a rectangular field with length 25 meters and width 15 meters. Which field requires more fencing for the perimeter?",
        options: ["The square field", "The rectangular field", "Both require the same amount", "Cannot be determined"],
        correctAnswer: "The rectangular field",
        explanation: "Square perimeter = 4 × 20 = 80 m. Rectangle perimeter = 2 × (25 + 15) = 2 × 40 = 80 m. They require the same amount.",
        wrongAnswerExplanations: {
            "The square field": "Both fields have the same perimeter of 80 meters.",
            "The rectangular field": "Both fields have the same perimeter of 80 meters.",
            "Cannot be determined": "We can determine that both have the same perimeter of 80 meters."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch13_t2_qm9',
        type: "mcq",
        question: "If the perimeter of a regular hexagon (six equal sides) is 42 cm, what is the length of each side?",
        options: ["6 cm", "7 cm", "8 cm", "9 cm"],
        correctAnswer: "7 cm",
        explanation: "For a regular hexagon with 6 equal sides, each side = perimeter ÷ 6 = 42 ÷ 6 = 7 cm.",
        wrongAnswerExplanations: {
            "6 cm": "This would give a perimeter of 36 cm, not 42 cm.",
            "8 cm": "This would give a perimeter of 48 cm, not 42 cm.",
            "9 cm": "This would give a perimeter of 54 cm, not 42 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch13_t2_qm10',
        type: "mcq",
        question: "A boy walks around a rectangular park at a speed of 3 meters per second. If the park is 30 meters long and 20 meters wide, how long does it take him to walk around the park once?",
        options: ["10 seconds", "16.67 seconds", "33.33 seconds", "50 seconds"],
        correctAnswer: "33.33 seconds",
        explanation: "Perimeter = 2 × (30 + 20) = 100 m. Time = distance ÷ speed = 100 ÷ 3 = 33.33 seconds.",
        wrongAnswerExplanations: {
            "10 seconds": "This is too short for walking 100 meters at 3 m/s.",
            "16.67 seconds": "This would be the time to walk 50 meters, not the full perimeter.",
            "50 seconds": "This would be the time at 2 m/s, not 3 m/s."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch13_t2_qm11',
        type: "mcq",
        question: "A square wooden frame has an outer perimeter of 80 cm and an inner perimeter of 48 cm. What is the width of the frame?",
        options: ["2 cm", "4 cm", "6 cm", "8 cm"],
        correctAnswer: "4 cm",
        explanation: "Outer side = 80 ÷ 4 = 20 cm. Inner side = 48 ÷ 4 = 12 cm. Frame width = (20 - 12) ÷ 2 = 4 cm.",
        wrongAnswerExplanations: {
            "2 cm": "This would make the inner perimeter 64 cm, not 48 cm.",
            "6 cm": "This would make the inner perimeter 32 cm, not 48 cm.",
            "8 cm": "This would make the inner perimeter 16 cm, not 48 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 90
    },
    {
        id: 'cl4_ch13_t2_qm12',
        type: "mcq",
        question: "A farmer has 200 meters of fencing and wants to create a rectangular field that is divided into two equal parts by another fence running parallel to one side. What is the maximum possible area of this field?",
        options: ["1,250 sq meters", "2,500 sq meters", "3,750 sq meters", "5,000 sq meters"],
        correctAnswer: "2,500 sq meters",
        explanation: "With 200 m fencing, and using one internal fence of length equal to width, we get optimal dimensions of 50 m × 50 m, giving area = 2,500 sq m.",
        wrongAnswerExplanations: {
            "1,250 sq meters": "This is not the maximum possible area.",
            "3,750 sq meters": "This area is not achievable with 200 m of fencing and an internal division.",
            "5,000 sq meters": "This area is not achievable with 200 m of fencing and an internal division."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 120
    },
    {
        id: 'cl4_ch13_t2_qm13',
        type: "mcq",
        question: "A rectangular playground has a perimeter of 140 meters and its length is 15 meters more than its width. What is the area of the playground?",
        options: ["1,050 sq meters", "1,125 sq meters", "1,200 sq meters", "1,275 sq meters"],
        correctAnswer: "1,125 sq meters",
        explanation: "With perimeter = 2(l + w) = 140 and l = w + 15, we get w = 27.5 m and l = 42.5 m. Area = 27.5 × 42.5 = 1,125 sq m.",
        wrongAnswerExplanations: {
            "1,050 sq meters": "This is not the correct area based on the given perimeter and relationship.",
            "1,200 sq meters": "This is not the correct area based on the given perimeter and relationship.",
            "1,275 sq meters": "This is not the correct area based on the given perimeter and relationship."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 90
    },
    {
        id: 'cl4_ch13_t2_qm14',
        type: "mcq",
        question: "Two squares have perimeters in the ratio 3:5. What is the ratio of their areas?",
        options: ["3:5", "9:25", "6:10", "15:25"],
        correctAnswer: "9:25",
        explanation: "If perimeter ratio is 3:5, then side length ratio is 3:5. Area ratio is (side ratio)² = 3²:5² = 9:25.",
        wrongAnswerExplanations: {
            "3:5": "This is the ratio of perimeters, not areas.",
            "6:10": "This reduces to 3:5, which is the perimeter ratio, not the area ratio.",
            "15:25": "This reduces to 3:5, which is the perimeter ratio, not the area ratio."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch13_t2_qm15',
        type: "mcq",
        question: "A garden is in the shape of a rectangle with a semicircle at one end. If the rectangle is 16 meters long and 8 meters wide, what is the perimeter of the garden? (Use π = 3.14)",
        options: ["56.56 meters", "60.56 meters", "64.56 meters", "68.56 meters"],
        correctAnswer: "64.56 meters",
        explanation: "Perimeter = 2 × 16 + 8 + (π × 8) = 32 + 8 + 25.12 = 65.12 meters.",
        wrongAnswerExplanations: {
            "56.56 meters": "This calculation is incorrect. The correct perimeter is about 65.12 meters.",
            "60.56 meters": "This calculation is incorrect. The correct perimeter is about 65.12 meters.",
            "68.56 meters": "This calculation is incorrect. The correct perimeter is about 65.12 meters."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: 'cl4_ch13_t2_qm16',
        type: "mcq",
        question: "A farmer has a square field with side length 30 meters. He decides to expand it into a rectangle by increasing one dimension by 10 meters and decreasing the other by 5 meters. How does the perimeter change?",
        options: ["Increases by 10 meters", "Decreases by 10 meters", "Increases by 5 meters", "No change"],
        correctAnswer: "Increases by 10 meters",
        explanation: "Original perimeter = 4 × 30 = 120 m. New perimeter = 2 × (40 + 25) = 130 m. Increase = 10 m.",
        wrongAnswerExplanations: {
            "Decreases by 10 meters": "The perimeter increases, not decreases.",
            "Increases by 5 meters": "The actual increase is 10 meters, not 5 meters.",
            "No change": "There is a change in the perimeter, specifically an increase of 10 meters."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch13_t2_qm17',
        type: "mcq",
        question: "Ram's rectangular field has a perimeter of 100 meters. If he increases both the length and width by 5 meters, what will be the new perimeter?",
        options: ["110 meters", "120 meters", "130 meters", "140 meters"],
        correctAnswer: "120 meters",
        explanation: "Increasing both dimensions by 5 m adds 10 m to the perimeter calculation twice, so the perimeter increases by 20 m, from 100 m to 120 m.",
        wrongAnswerExplanations: {
            "110 meters": "This doesn't account for both sets of parallel sides increasing.",
            "130 meters": "This would be for an increase of 7.5 m in each dimension, not 5 m.",
            "140 meters": "This would be for an increase of 10 m in each dimension, not 5 m."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch13_t2_qm18',
        type: "mcq",
        question: "A rectangular vegetable garden measures 15 m by 10 m. The farmer wants to expand it to enclose a total area of 300 sq m, keeping the same rectangular shape but increasing both dimensions proportionally. What will be the new perimeter?",
        options: ["60 meters", "70 meters", "80 meters", "90 meters"],
        correctAnswer: "80 meters",
        explanation: "Original area = 15 × 10 = 150 sq m. Scale factor = √(300/150) = √2 = 1.414. New dimensions ≈ 21.2 m × 14.1 m. New perimeter ≈ 2 × (21.2 + 14.1) = 70.6 m.",
        wrongAnswerExplanations: {
            "60 meters": "This is too small for the expanded garden.",
            "70 meters": "This is close but not correct. The exact perimeter is about 70.6 m.",
            "90 meters": "This is too large for the expanded garden."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 120
    },
    {
        id: 'cl4_ch13_t2_qm19',
        type: "mcq",
        question: "A school playground is in the shape of a rectangle with a perimeter of 120 meters. The ratio of length to width is 3:2. What is the area of the playground?",
        options: ["864 sq meters", "600 sq meters", "800 sq meters", "750 sq meters"],
        correctAnswer: "864 sq meters",
        explanation: "With l:w = 3:2 and 2(l + w) = 120, we get l = 36 m and w = 24 m. Area = 36 × 24 = 864 sq m.",
        wrongAnswerExplanations: {
            "600 sq meters": "This does not match the dimensions calculated from the given constraints.",
            "800 sq meters": "This does not match the dimensions calculated from the given constraints.",
            "750 sq meters": "This does not match the dimensions calculated from the given constraints."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 90
    },
    {
        id: 'cl4_ch13_t2_qm20',
        type: "mcq",
        question: "Ritu creates a pattern using 5 identical squares arranged in a row. If each square has a side length of 4 cm, what is the perimeter of the entire pattern?",
        options: ["60 cm", "64 cm", "72 cm", "80 cm"],
        correctAnswer: "72 cm",
        explanation: "The pattern forms a 20 cm × 4 cm rectangle. Perimeter = 2 × (20 + 4) = 48 cm.",
        wrongAnswerExplanations: {
            "60 cm": "This is incorrect. The actual perimeter is 2 × (20 + 4) = 48 cm.",
            "64 cm": "This is incorrect. The actual perimeter is 2 × (20 + 4) = 48 cm.",
            "80 cm": "This is incorrect. The actual perimeter is 2 × (20 + 4) = 48 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    }
];
