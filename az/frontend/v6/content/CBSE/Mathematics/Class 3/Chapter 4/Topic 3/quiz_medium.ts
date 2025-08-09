// filepath: content/CBSE/Mathematics/Class 3/Chapter4/Topic3/quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl3_ch4_t3_qm1',
        type: "mcq",
        question: "Ravi wants to estimate the width of his classroom. Each of his steps is about 50 cm long. It takes 10 steps to cross the width. What is his estimated width of the classroom?",
        options: ["5 meters", "50 meters", "500 centimeters", "5 centimeters"],
        correctAnswer: "5 meters",
        explanation: "10 steps × 50 cm per step = 500 cm = 5 m.",
        wrongAnswerExplanations: {
            "50 meters": "This is incorrect. 10 steps × 50 cm = 500 cm = 5 m, not 50 m.",
            "500 centimeters": "This is correct but not in the preferred unit. 500 cm = 5 m.",
            "5 centimeters": "This is much too small. 10 steps × 50 cm = 500 cm, not 5 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch4_t3_qm2',
        type: "mcq",
        question: "Meera estimates that a table is 75 cm high. Sita estimates that the same table is 0.8 m high. Whose estimate is better if the actual height is 78 cm?",
        options: ["Meera's estimate", "Sita's estimate", "Both estimates are equally good", "Neither estimate is good"],
        correctAnswer: "Sita's estimate",
        explanation: "Meera: 75 cm (actual: 78 cm, difference: 3 cm). Sita: 0.8 m = 80 cm (actual: 78 cm, difference: 2 cm). Sita's estimate is closer.",
        wrongAnswerExplanations: {
            "Meera's estimate": "Meera's estimate is 3 cm away from the actual height, while Sita's is only 2 cm away.",
            "Both estimates are equally good": "Sita's estimate is closer (difference of 2 cm) than Meera's (difference of 3 cm).",
            "Neither estimate is good": "Both estimates are quite close to the actual height and are reasonable."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch4_t3_qm3',
        type: "mcq",
        question: "Which of these is a reasonable estimate for the height of a 3-year-old child?",
        options: ["90 cm", "9 m", "9 cm", "190 cm"],
        correctAnswer: "90 cm",
        explanation: "A typical 3-year-old child is about 90-95 cm tall.",
        wrongAnswerExplanations: {
            "9 m": "This is much too tall. 9 m is taller than a two-story building.",
            "9 cm": "This is much too short. 9 cm is smaller than a mobile phone.",
            "190 cm": "This is much too tall. 190 cm is the height of a tall adult."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch4_t3_qm4',
        type: "mcq",
        question: "Rahul wants to estimate the height of a tree. He knows that his father is 1.8 m tall. He observes that the tree is about 4 times as tall as his father. What is his estimate for the tree's height?",
        options: ["About 7.2 meters", "About 72 meters", "About 720 centimeters", "About 1.8 meters"],
        correctAnswer: "About 7.2 meters",
        explanation: "4 × 1.8 m = 7.2 m. The tree is about 7.2 meters tall.",
        wrongAnswerExplanations: {
            "About 72 meters": "This is incorrect. 4 × 1.8 m = 7.2 m, not 72 m.",
            "About 720 centimeters": "This is correct but not in the preferred unit. 720 cm = 7.2 m.",
            "About 1.8 meters": "This is just the height of Rahul's father, not the estimated height of the tree."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch4_t3_qm5',
        type: "mcq",
        question: "Anu's handspan (stretched hand from thumb to little finger) is 16 cm long. How many handspans would approximately equal the length of a 2-meter bed?",
        options: ["About 12-13 handspans", "About 2-3 handspans", "About 20-21 handspans", "About 32 handspans"],
        correctAnswer: "About 12-13 handspans",
        explanation: "2 m = 200 cm. 200 cm ÷ 16 cm = 12.5, which is about 12-13 handspans.",
        wrongAnswerExplanations: {
            "About 2-3 handspans": "This is far too few. 2-3 handspans would be only 32-48 cm.",
            "About 20-21 handspans": "This is too many. 20 handspans would be 320 cm (3.2 m).",
            "About 32 handspans": "This is much too many. 32 handspans would be 512 cm (5.12 m)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch4_t3_qm6',
        type: "mcq",
        question: "Sanjay estimates that the length of the school playground is 100 meters. He walks the length and counts 150 steps. If each of his steps is about 60 cm, what is the actual length of the playground?",
        options: ["90 meters", "9 meters", "900 meters", "0.9 meters"],
        correctAnswer: "90 meters",
        explanation: "150 steps × 60 cm per step = 9000 cm = 90 m. The actual length is 90 meters.",
        wrongAnswerExplanations: {
            "9 meters": "This is incorrect. 150 steps × 60 cm = 9000 cm = 90 m, not 9 m.",
            "900 meters": "This is incorrect. 150 steps × 60 cm = 9000 cm = 90 m, not 900 m.",
            "0.9 meters": "This is incorrect. 150 steps × 60 cm = 9000 cm = 90 m, not 0.9 m."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch4_t3_qm7',
        type: "mcq",
        question: "Which of these is a reasonable estimate for the thickness of a book?",
        options: ["2 cm", "2 mm", "2 m", "20 cm"],
        correctAnswer: "2 cm",
        explanation: "A typical book is about 1-3 cm thick, so 2 cm is a reasonable estimate.",
        wrongAnswerExplanations: {
            "2 mm": "This is too thin. 2 mm is about the thickness of 20 pages, not a whole book.",
            "2 m": "This is much too thick. 2 m is about the height of a door.",
            "20 cm": "This is too thick for a typical book. 20 cm is about the length of a pencil."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch4_t3_qm8',
        type: "mcq",
        question: "Riya estimates that a classroom is 8 meters long. If the actual length is 7.5 meters, what is the percentage error in her estimate?",
        options: ["About 6.7%", "About 67%", "About 0.67%", "About 0.5%"],
        correctAnswer: "About 6.7%",
        explanation: "Percentage error = |(Estimate - Actual)/Actual| × 100 = |(8 - 7.5)/7.5| × 100 = |0.5/7.5| × 100 = 6.67%.",
        wrongAnswerExplanations: {
            "About 67%": "This is incorrect. The error is 0.5 m out of 7.5 m, which is about 6.7%, not 67%.",
            "About 0.67%": "This is incorrect. The error is 0.5 m out of 7.5 m, which is about 6.7%, not 0.67%.",
            "About 0.5%": "This is incorrect. The error is 0.5 m out of 7.5 m, which is about 6.7%, not 0.5%."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch4_t3_qm9',
        type: "mcq",
        question: "If your foot is about 20 cm long, approximately how many 'foot lengths' would equal the length of a 5-meter room?",
        options: ["About 25 foot lengths", "About 250 foot lengths", "About 2.5 foot lengths", "About 100 foot lengths"],
        correctAnswer: "About 25 foot lengths",
        explanation: "5 m = 500 cm. 500 cm ÷ 20 cm = 25 foot lengths.",
        wrongAnswerExplanations: {
            "About 250 foot lengths": "This is incorrect. 500 cm ÷ 20 cm = 25, not 250.",
            "About 2.5 foot lengths": "This is incorrect. 500 cm ÷ 20 cm = 25, not 2.5.",
            "About 100 foot lengths": "This is incorrect. 500 cm ÷ 20 cm = 25, not 100."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch4_t3_qm10',
        type: "mcq",
        question: "A classroom is approximately 9 meters long and 6 meters wide. Without calculating, what is the best estimate for its perimeter?",
        options: ["30 meters", "15 meters", "54 square meters", "300 meters"],
        correctAnswer: "30 meters",
        explanation: "Perimeter = 2 × (length + width) = 2 × (9 m + 6 m) = 2 × 15 m = 30 m.",
        wrongAnswerExplanations: {
            "15 meters": "This is just the sum of length and width (9 m + 6 m), not the perimeter.",
            "54 square meters": "This is the area (9 m × 6 m), not the perimeter.",
            "300 meters": "This is much too large. The perimeter is 30 m, not 300 m."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch4_t3_qm11',
        type: "mcq",
        question: "Ram needs to buy a rope to hang clothes. He estimates he needs 3 meters. The shopkeeper has ropes in lengths of 2.5 m, 3.2 m, 3.5 m, and 4 m. Which length should Ram choose?",
        options: ["3.2 meters", "2.5 meters", "3.5 meters", "4 meters"],
        correctAnswer: "3.2 meters",
        explanation: "Ram needs about 3 m. The rope should be at least 3 m but not much longer to avoid waste. 3.2 m is the best choice.",
        wrongAnswerExplanations: {
            "2.5 meters": "This is shorter than the estimated need of 3 m, so it might not be long enough.",
            "3.5 meters": "This is more than needed. While it would work, 3.2 m is closer to the estimated need.",
            "4 meters": "This is much more than needed and would result in unnecessary waste."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch4_t3_qm12',
        type: "mcq",
        question: "Meera knows that her step length is about 40 cm. She wants to estimate the length of a path that is 120 meters long. About how many steps will she need to take?",
        options: ["About 300 steps", "About 30 steps", "About 3000 steps", "About 480 steps"],
        correctAnswer: "About 300 steps",
        explanation: "120 m = 12000 cm. 12000 cm ÷ 40 cm per step = 300 steps.",
        wrongAnswerExplanations: {
            "About 30 steps": "This is incorrect. 12000 cm ÷ 40 cm = 300 steps, not 30 steps.",
            "About 3000 steps": "This is incorrect. 12000 cm ÷ 40 cm = 300 steps, not 3000 steps.",
            "About 480 steps": "This is incorrect. 12000 cm ÷ 40 cm = 300 steps, not 480 steps."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch4_t3_qm13',
        type: "mcq",
        question: "A tree casts a shadow of 8 meters. At the same time, a 1.5-meter tall pole casts a shadow of 2 meters. What is the approximate height of the tree?",
        options: ["6 meters", "600 centimeters", "60 meters", "16 meters"],
        correctAnswer: "6 meters",
        explanation: "The height-to-shadow ratio is the same. 1.5 m pole : 2 m shadow = Tree height : 8 m shadow. So, tree height = (1.5 × 8) ÷ 2 = 6 m.",
        wrongAnswerExplanations: {
            "600 centimeters": "This is correct (600 cm = 6 m), but the answer should be in meters as specified.",
            "60 meters": "This is incorrect. Tree height = (1.5 × 8) ÷ 2 = 6 m, not 60 m.",
            "16 meters": "This is incorrect. Tree height = (1.5 × 8) ÷ 2 = 6 m, not 16 m."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch4_t3_qm14',
        type: "mcq",
        question: "Which of these methods would give the most accurate estimate of the length of a curved path?",
        options: [
            "Walking along the path and counting steps",
            "Using a measuring wheel",
            "Using a straight ruler",
            "Visually comparing with a nearby straight object"
        ],
        correctAnswer: "Using a measuring wheel",
        explanation: "A measuring wheel can follow the curves of the path, giving a more accurate measurement than the other methods.",
        wrongAnswerExplanations: {
            "Walking along the path and counting steps": "This can give a rough estimate but is less accurate than a measuring wheel.",
            "Using a straight ruler": "A straight ruler cannot accurately measure a curved path.",
            "Visually comparing with a nearby straight object": "This is the least accurate method for a curved path."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch4_t3_qm15',
        type: "mcq",
        question: "What is the best strategy to estimate the height of a tall building?",
        options: [
            "Compare it to a person of known height",
            "Count the number of floors and multiply by an average floor height",
            "Measure its shadow and use a proportion calculation",
            "All of the above are good strategies"
        ],
        correctAnswer: "All of the above are good strategies",
        explanation: "All three strategies are valid ways to estimate the height of a tall building, depending on the circumstances.",
        wrongAnswerExplanations: {
            "Compare it to a person of known height": "This alone is not the best option because the building might be much taller than a person.",
            "Count the number of floors and multiply by an average floor height": "This alone is not the best option because floor heights can vary.",
            "Measure its shadow and use a proportion calculation": "This alone is not the best option because it requires good sunlight and a reference object."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch4_t3_qm16',
        type: "mcq",
        question: "To estimate the distance between two cities, which of these reference measures would be most helpful?",
        options: [
            "The time it takes to travel by car at a known speed",
            "The length of a pencil",
            "Your handspan",
            "The height of a door"
        ],
        correctAnswer: "The time it takes to travel by car at a known speed",
        explanation: "Distance = Speed × Time. If you know how long it takes to drive at a certain speed, you can estimate the distance.",
        wrongAnswerExplanations: {
            "The length of a pencil": "A pencil is much too small to serve as a useful reference for distances between cities.",
            "Your handspan": "A handspan is much too small to serve as a useful reference for distances between cities.",
            "The height of a door": "A door's height is much too small to serve as a useful reference for distances between cities."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch4_t3_qm17',
        type: "mcq",
        question: "Anu estimates that a ribbon is 30 cm long. Bina estimates that the same ribbon is 35 cm long. The actual length is 32 cm. Which statement is correct?",
        options: [
            "Both estimates are reasonable",
            "Only Anu's estimate is reasonable",
            "Only Bina's estimate is reasonable",
            "Neither estimate is reasonable"
        ],
        correctAnswer: "Both estimates are reasonable",
        explanation: "Anu's estimate is 2 cm less than the actual length, and Bina's is 3 cm more. Both are within a reasonable range (about 10% error).",
        wrongAnswerExplanations: {
            "Only Anu's estimate is reasonable": "Both estimates are close to the actual length and have similar margins of error.",
            "Only Bina's estimate is reasonable": "Both estimates are close to the actual length and have similar margins of error.",
            "Neither estimate is reasonable": "Both estimates are quite close to the actual length of 32 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch4_t3_qm18',
        type: "mcq",
        question: "Rahul wants to fence a rectangular garden that is approximately 5 m by 3 m. He estimates he'll need about 16 meters of fencing. Is this a reasonable estimate?",
        options: [
            "Yes, it's very close to the correct amount",
            "No, he needs much more fencing",
            "No, he needs much less fencing",
            "Cannot be determined without exact measurements"
        ],
        correctAnswer: "Yes, it's very close to the correct amount",
        explanation: "Perimeter = 2 × (length + width) = 2 × (5 m + 3 m) = 2 × 8 m = 16 m. His estimate is correct.",
        wrongAnswerExplanations: {
            "No, he needs much more fencing": "The calculation shows he needs exactly 16 m, which matches his estimate.",
            "No, he needs much less fencing": "The calculation shows he needs exactly 16 m, which matches his estimate.",
            "Cannot be determined without exact measurements": "We can determine it's a good estimate using the given approximate dimensions."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch4_t3_qm19',
        type: "mcq",
        question: "The actual heights of four children are: Anu - 132 cm, Bina - 128 cm, Chitra - 135 cm, and Dev - 130 cm. Looking at them standing in a row, a teacher estimates their heights as: Anu - 130 cm, Bina - 125 cm, Chitra - 140 cm, and Dev - 135 cm. Whose height did the teacher estimate most accurately?",
        options: ["Anu", "Bina", "Chitra", "Dev"],
        correctAnswer: "Anu",
        explanation: "The differences between actual and estimated heights are: Anu: 2 cm, Bina: 3 cm, Chitra: 5 cm, Dev: 5 cm. Anu's height has the smallest difference.",
        wrongAnswerExplanations: {
            "Bina": "Bina's height was estimated with a difference of 3 cm, which is more than Anu's difference (2 cm).",
            "Chitra": "Chitra's height was estimated with a difference of 5 cm, which is more than Anu's difference (2 cm).",
            "Dev": "Dev's height was estimated with a difference of 5 cm, which is more than Anu's difference (2 cm)."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch4_t3_qm20',
        type: "mcq",
        question: "Which of these measurements would be considered a reasonable estimate for the length of a classroom wall if the actual length is 8 meters?",
        options: [
            "7.5 meters",
            "3 meters",
            "15 meters",
            "80 centimeters"
        ],
        correctAnswer: "7.5 meters",
        explanation: "7.5 meters is close to the actual length of 8 meters, with only a 0.5 m (or 6.25%) difference.",
        wrongAnswerExplanations: {
            "3 meters": "This is much too short, less than half the actual length.",
            "15 meters": "This is almost double the actual length, which is too inaccurate for a reasonable estimate.",
            "80 centimeters": "This is 0.8 meters, which is one-tenth of the actual length and much too short."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 