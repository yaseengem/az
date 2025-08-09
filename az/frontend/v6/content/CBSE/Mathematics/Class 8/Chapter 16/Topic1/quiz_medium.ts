import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch16_t1_qm1',
        type: "mcq",
        question: "Using mental math tricks, calculate 98 × 5 by breaking it down into simpler steps. Which method is most efficient?",
        options: [
            "(100 × 5) - (2 × 5)",
            "(98 × 10) ÷ 2",
            "98 + 98 + 98 + 98 + 98",
            "(100 - 2) × 5"
        ],
        correctAnswer: "(98 × 10) ÷ 2",
        explanation: "Multiply by 10 (980) then divide by 2 = 490. This is more efficient than subtracting 10 from 500 or adding 98 five times. The trick works because 5 = 10 ÷ 2. 🧮",
        wrongAnswerExplanations: {
            "(100 × 5) - (2 × 5)": "While correct (500 - 10 = 490), it requires more steps than multiplying by 10 and dividing by 2.",
            "98 + 98 + 98 + 98 + 98": "This is time-consuming and prone to errors.",
            "(100 - 2) × 5": "This gives the same result but requires more mental steps."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch16_t1_qm2',
        type: "mcq",
        question: "To find 15% of 460 mentally, which method is most efficient?",
        options: [
            "Find 10% (46) and add half of it (23)",
            "(460 × 3) ÷ 20",
            "460 × 0.15",
            "(460 ÷ 100) × 15"
        ],
        correctAnswer: "Find 10% (46) and add half of it (23)",
        explanation: "10% of 460 = 46, half of 46 = 23, so 15% = 46 + 23 = 69. Breaking down 15% into 10% + 5% makes the calculation easier mentally. This uses the fact that 5% is half of 10%. 📊",
        wrongAnswerExplanations: {
            "(460 × 3) ÷ 20": "While correct, this involves more complex multiplication and division.",
            "460 × 0.15": "Decimal multiplication is harder mentally.",
            "(460 ÷ 100) × 15": "This requires more steps and harder calculations."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch16_t1_qm3',
        type: "mcq",
        question: "What's the quickest way to calculate 999 × 7 mentally?",
        options: [
            "(1000 × 7) - 7",
            "(999 × 10) - (999 × 3)",
            "999 + 999 + 999 + 999 + 999 + 999 + 999",
            "(1000 - 1) × 7"
        ],
        correctAnswer: "(1000 × 7) - 7",
        explanation: "Multiply 7 by 1000 (7000) and subtract 7 = 6993. This uses the distributive property: 999 × 7 = (1000 - 1) × 7 = 7000 - 7. Working with 1000 is easier than 999. 🎯",
        wrongAnswerExplanations: {
            "(999 × 10) - (999 × 3)": "This involves more complex calculations.",
            "999 + 999 + 999 + 999 + 999 + 999 + 999": "This is extremely time-consuming.",
            "(1000 - 1) × 7": "This requires more mental steps than (1000 × 7) - 7."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch16_t1_qm4',
        type: "mcq",
        question: "To multiply 625 by 8 mentally, which method is most efficient?",
        options: [
            "Double it three times (625 × 2 × 2 × 2)",
            "(625 × 10) - (625 × 2)",
            "625 + 625 + 625 + 625 + 625 + 625 + 625 + 625",
            "(1000 × 5) - (375 × 8)"
        ],
        correctAnswer: "Double it three times (625 × 2 × 2 × 2)",
        explanation: "625 × 2 = 1250, × 2 = 2500, × 2 = 5000. Doubling three times is easier because 8 = 2³. Each step only requires doubling, which is simpler than other operations. 🎲",
        wrongAnswerExplanations: {
            "(625 × 10) - (625 × 2)": "This involves larger numbers and subtraction.",
            "625 + 625 + 625 + 625 + 625 + 625 + 625 + 625": "This is extremely time-consuming.",
            "(1000 × 5) - (375 × 8)": "This involves complex calculations with large numbers."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch16_t1_qm5',
        type: "mcq",
        question: "What's the most efficient way to calculate 88 × 25 mentally?",
        options: [
            "(88 × 100) ÷ 4",
            "(88 ÷ 4) × 100",
            "88 × (100 ÷ 4)",
            "All of the above"
        ],
        correctAnswer: "All of the above",
        explanation: "All methods give 2200. The easiest is often (88 × 100) ÷ 4: add two zeros (8800) then divide by 4 (2200). This works because 25 = 100 ÷ 4. The order of operations doesn't matter here. 🎭",
        wrongAnswerExplanations: {
            "(88 × 100) ÷ 4": "This is correct but not the only valid method.",
            "(88 ÷ 4) × 100": "This is correct but not the only valid method.",
            "88 × (100 ÷ 4)": "This is correct but not the only valid method."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch16_t1_qm6',
        type: "mcq",
        question: "To find 75% of 280 mentally, which method requires the least calculation?",
        options: [
            "Find 25% (70) and multiply by 3",
            "Find 50% (140) and add half of that (70)",
            "280 - (280 ÷ 4)",
            "All methods require the same amount of calculation"
        ],
        correctAnswer: "280 - (280 ÷ 4)",
        explanation: "75% = 100% - 25%, so subtract ¼ from the whole. 280 ÷ 4 = 70, then 280 - 70 = 210. This is often quicker than finding 25% and multiplying by 3 or finding 50% and adding half. 💫",
        wrongAnswerExplanations: {
            "Find 25% (70) and multiply by 3": "This requires an extra multiplication step.",
            "Find 50% (140) and add half of that (70)": "This requires more steps than just subtracting ¼.",
            "All methods require the same amount of calculation": "The methods have different numbers of steps."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch16_t1_qm7',
        type: "mcq",
        question: "What's the most efficient way to multiply 45 by 11 mentally?",
        options: [
            "Add a zero and add the original number (450 + 45)",
            "Add the digits (4 + 5 = 9) and place it between the original digits",
            "Multiply by 10 and add 45",
            "Double 45 and subtract 45 from 100 × 45"
        ],
        correctAnswer: "Add the digits (4 + 5 = 9) and place it between the original digits",
        explanation: "For two-digit numbers × 11, add the digits and place the sum between them: 4 and 5 → 4(4+5)5 = 495. This pattern works for any two-digit number multiplied by 11 (unless the sum of digits > 9). 🎪",
        wrongAnswerExplanations: {
            "Add a zero and add the original number (450 + 45)": "This works but requires more calculation.",
            "Multiply by 10 and add 45": "This is the same as the first option but less clear.",
            "Double 45 and subtract 45 from 100 × 45": "This is much more complex."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch16_t1_qm8',
        type: "mcq",
        question: "To multiply 32 by 125 mentally, which method is most efficient?",
        options: [
            "(32 × 1000) ÷ 8",
            "(32 ÷ 8) × 1000",
            "32 × 100 + (32 × 100) ÷ 4",
            "All of the above"
        ],
        correctAnswer: "(32 × 1000) ÷ 8",
        explanation: "Add three zeros to 32 (32000) then divide by 8 = 4000. This works because 125 = 1000 ÷ 8. Adding zeros then dividing is usually easier than dividing first or using multiple steps. 🎨",
        wrongAnswerExplanations: {
            "(32 ÷ 8) × 1000": "Division first is usually harder with larger numbers.",
            "32 × 100 + (32 × 100) ÷ 4": "This requires more steps and calculations.",
            "All of the above": "While all methods work, they're not equally efficient."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch16_t1_qm9',
        type: "mcq",
        question: "What's the quickest way to calculate 96 × 12 mentally?",
        options: [
            "(96 × 10) + (96 × 2)",
            "(100 × 12) - (4 × 12)",
            "(96 × 3) × 4",
            "(96 × 6) × 2"
        ],
        correctAnswer: "(96 × 10) + (96 × 2)",
        explanation: "96 × 10 = 960, 96 × 2 = 192, 960 + 192 = 1152. Breaking 12 into 10 + 2 makes the calculation easier because multiplying by 10 is simple. This uses the distributive property. 🎯",
        wrongAnswerExplanations: {
            "(100 × 12) - (4 × 12)": "This requires more complex calculations with larger numbers.",
            "(96 × 3) × 4": "This involves harder multiplication steps.",
            "(96 × 6) × 2": "Multiplying by 6 is harder than multiplying by 10 and 2."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch16_t1_qm10',
        type: "mcq",
        question: "To find 35% of 240 mentally, which method is most efficient?",
        options: [
            "Find 10% (24) × 3.5",
            "(25% + 10%) of 240",
            "(50% - 15%) of 240",
            "Find 30% and add 5%"
        ],
        correctAnswer: "Find 30% and add 5%",
        explanation: "30% = (10% × 3) = 24 × 3 = 72, 5% = 24 ÷ 2 = 12, so 35% = 72 + 12 = 84. Breaking down into 30% + 5% uses easier percentages. 30% is just 3 tens, and 5% is half of 10%. 📊",
        wrongAnswerExplanations: {
            "Find 10% (24) × 3.5": "Multiplying by decimals is harder mentally.",
            "(25% + 10%) of 240": "Finding 25% first is less efficient than using 30%.",
            "(50% - 15%) of 240": "This requires more complex calculations."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch16_t1_qm11',
        type: "mcq",
        question: "What's the most efficient way to multiply 64 by 15 mentally?",
        options: [
            "(64 × 10) + (64 × 5)",
            "(64 × 10) + (32 × 10)",
            "(60 × 15) + (4 × 15)",
            "(64 × 20) - (64 × 5)"
        ],
        correctAnswer: "(64 × 10) + (32 × 10)",
        explanation: "64 × 10 = 640, 32 × 10 = 320, 640 + 320 = 960. This method uses the fact that 15 = 10 + (5) = 10 + (10 ÷ 2). Multiplying by 10 is easy, and halving once is simpler than other operations. 🎭",
        wrongAnswerExplanations: {
            "(64 × 10) + (64 × 5)": "Multiplying by 5 is harder than halving and multiplying by 10.",
            "(60 × 15) + (4 × 15)": "Breaking down 64 creates more complex calculations.",
            "(64 × 20) - (64 × 5)": "This involves more difficult calculations."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch16_t1_qm12',
        type: "mcq",
        question: "To calculate 95 × 11 mentally, which method is most efficient?",
        options: [
            "(100 × 11) - (5 × 11)",
            "(95 × 10) + 95",
            "Place 9 + 5 = 14 between 9 and 5",
            "Double 95 and subtract 95 from 100 × 95"
        ],
        correctAnswer: "Place 9 + 5 = 14 between 9 and 5",
        explanation: "For two-digit × 11: add digits (9 + 5 = 14), put 4 between 9 and 5, carry 1 to first digit: 1045. When sum > 9, carry the tens digit to the left. This pattern works for all two-digit numbers × 11. 🎪",
        wrongAnswerExplanations: {
            "(100 × 11) - (5 × 11)": "This requires more calculations with larger numbers.",
            "(95 × 10) + 95": "This involves addition of larger numbers.",
            "Double 95 and subtract 95 from 100 × 95": "This is much more complex."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch16_t1_qm13',
        type: "mcq",
        question: "What's the quickest way to find 16⅔% of 360 mentally?",
        options: [
            "Find 50% ÷ 3",
            "(10% × 1.667) × 360",
            "Find 1/6 of 360",
            "(15% + 1⅔%) of 360"
        ],
        correctAnswer: "Find 1/6 of 360",
        explanation: "16⅔% = 100% ÷ 6 = 1/6. So just divide 360 by 6 = 60. Recognizing that 16⅔% is exactly 1/6 makes the calculation much simpler than working with percentages. 💫",
        wrongAnswerExplanations: {
            "Find 50% ÷ 3": "This is more complex than recognizing 1/6.",
            "(10% × 1.667) × 360": "Working with decimals is much harder mentally.",
            "(15% + 1⅔%) of 360": "Breaking it into percentages is more complicated."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch16_t1_qm14',
        type: "mcq",
        question: "To multiply 85 by 101 mentally, which method is most efficient?",
        options: [
            "Add 85 to itself 101 times",
            "Add 85 to (85 × 100)",
            "(85 × 100) + 85",
            "(90 × 101) - (5 × 101)"
        ],
        correctAnswer: "Add 85 to (85 × 100)",
        explanation: "85 × 100 = 8500, add 85 = 8585. Since 101 = 100 + 1, multiply by 100 (add two zeros) and add the original number once. This uses the distributive property: 85 × (100 + 1). 🎨",
        wrongAnswerExplanations: {
            "Add 85 to itself 101 times": "This is extremely time-consuming.",
            "(85 × 100) + 85": "This is the same method, just written differently.",
            "(90 × 101) - (5 × 101)": "Breaking down 85 creates more complex calculations."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch16_t1_qm15',
        type: "mcq",
        question: "What's the most efficient way to calculate 624 × 25 mentally?",
        options: [
            "(624 × 100) ÷ 4",
            "(624 ÷ 4) × 100",
            "624 × (20 + 5)",
            "(600 × 25) + (24 × 25)"
        ],
        correctAnswer: "(624 × 100) ÷ 4",
        explanation: "Add two zeros to 624 (62400) then divide by 4 = 15600. This works because 25 = 100 ÷ 4. Adding zeros then dividing by 4 is usually easier than other methods. 🎯",
        wrongAnswerExplanations: {
            "(624 ÷ 4) × 100": "Dividing 624 by 4 first is harder.",
            "624 × (20 + 5)": "Breaking down 25 creates more steps.",
            "(600 × 25) + (24 × 25)": "Breaking down 624 makes it more complex."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch16_t1_qm16',
        type: "mcq",
        question: "To find 87.5% of 640 mentally, which method is most efficient?",
        options: [
            "Find 100% - 12.5%",
            "(75% + 12.5%) of 640",
            "Find 7/8 of 640",
            "(80% + 7.5%) of 640"
        ],
        correctAnswer: "Find 7/8 of 640",
        explanation: "87.5% = 7/8. Divide 640 by 8 (80) then multiply by 7: 80 × 7 = 560. Converting to the fraction 7/8 makes the calculation simpler than working with decimals or multiple percentages. 📊",
        wrongAnswerExplanations: {
            "Find 100% - 12.5%": "Working with 12.5% is more complex.",
            "(75% + 12.5%) of 640": "Breaking into these percentages is harder.",
            "(80% + 7.5%) of 640": "Working with decimal percentages is more difficult."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch16_t1_qm17',
        type: "mcq",
        question: "What's the quickest way to multiply 256 by 125 mentally?",
        options: [
            "(256 × 1000) ÷ 8",
            "256 × (100 + 25)",
            "(250 × 125) + (6 × 125)",
            "(256 × 100) + (256 × 25)"
        ],
        correctAnswer: "(256 × 1000) ÷ 8",
        explanation: "Add three zeros to 256 (256000) then divide by 8 = 32000. This works because 125 = 1000 ÷ 8. Adding zeros then dividing by 8 is simpler than other methods. 🎭",
        wrongAnswerExplanations: {
            "256 × (100 + 25)": "Breaking down 125 creates more complex steps.",
            "(250 × 125) + (6 × 125)": "Breaking down 256 makes it more complicated.",
            "(256 × 100) + (256 × 25)": "This requires more calculations."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch16_t1_qm18',
        type: "mcq",
        question: "To multiply 68 by 99 mentally, which method is most efficient?",
        options: [
            "(68 × 100) - 68",
            "68 × (100 - 1)",
            "(70 × 99) - (2 × 99)",
            "(68 × 100) - (68 × 1)"
        ],
        correctAnswer: "(68 × 100) - 68",
        explanation: "Add two zeros to 68 (6800) then subtract 68 = 6732. This works because 99 = 100 - 1. Adding zeros then subtracting once is simpler than other methods. 🎪",
        wrongAnswerExplanations: {
            "68 × (100 - 1)": "This is the same method but less clear.",
            "(70 × 99) - (2 × 99)": "Breaking down 68 creates more complex calculations.",
            "(68 × 100) - (68 × 1)": "This is the same method written differently."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch16_t1_qm19',
        type: "mcq",
        question: "What's the most efficient way to find 37.5% of 880 mentally?",
        options: [
            "Find 3/8 of 880",
            "(25% + 12.5%) of 880",
            "Find 40% - 2.5% of 880",
            "(30% + 7.5%) of 880"
        ],
        correctAnswer: "Find 3/8 of 880",
        explanation: "37.5% = 3/8. Divide 880 by 8 (110) then multiply by 3: 110 × 3 = 330. Converting to the fraction 3/8 makes the calculation simpler than working with decimals or multiple percentages. 💫",
        wrongAnswerExplanations: {
            "(25% + 12.5%) of 880": "Breaking into these percentages is more complex.",
            "Find 40% - 2.5% of 880": "Working with 2.5% is harder.",
            "(30% + 7.5%) of 880": "Working with decimal percentages is more difficult."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch16_t1_qm20',
        type: "mcq",
        question: "To multiply 144 by 75 mentally, which method is most efficient?",
        options: [
            "(144 × 100) - (144 × 25)",
            "(144 × 25) × 3",
            "(144 × 100) ÷ 4 × 3",
            "(150 × 75) - (6 × 75)"
        ],
        correctAnswer: "(144 × 100) ÷ 4 × 3",
        explanation: "Add two zeros (14400), divide by 4 (3600), multiply by 3 = 10800. This works because 75 = (100 ÷ 4) × 3. Adding zeros then working with 4 and 3 is simpler than other methods. 🎨",
        wrongAnswerExplanations: {
            "(144 × 100) - (144 × 25)": "Subtracting large numbers is more complex.",
            "(144 × 25) × 3": "Starting with 25 is harder than starting with 100.",
            "(150 × 75) - (6 × 75)": "Breaking down 144 creates more complex calculations."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    }
]; 