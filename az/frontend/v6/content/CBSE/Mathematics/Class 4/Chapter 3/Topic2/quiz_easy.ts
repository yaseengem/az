import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch3_t2_qe1',
        type: "mcq",
        question: "Ravi needs about 20 oranges for a party. How many dozen oranges should he buy?",
        options: ["1 dozen", "2 dozen", "3 dozen", "4 dozen"],
        correctAnswer: "2 dozen",
        explanation: "1 dozen = 12 oranges. 2 dozen = 24 oranges, which is close to the needed 20 oranges.",
        wrongAnswerExplanations: {
            "1 dozen": "1 dozen is only 12 oranges, which is less than 20.",
            "3 dozen": "3 dozen is 36 oranges, which is much more than needed.",
            "4 dozen": "4 dozen is 48 oranges, which is far more than required."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch3_t2_qe2',
        type: "mcq",
        question: "If tickets for a movie cost ₹95 each, about how much money will 4 friends need to buy tickets?",
        options: ["About ₹300", "About ₹350", "About ₹380", "About ₹400"],
        correctAnswer: "About ₹380",
        explanation: "4 tickets at ₹95 each = 4 × 95 = ₹380. This is closest to ₹380.",
        wrongAnswerExplanations: {
            "About ₹300": "This is too low - 4 × 95 is much more than ₹300.",
            "About ₹350": "This is still less than the actual amount of ₹380.",
            "About ₹400": "This is a bit more than the actual amount of ₹380."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch3_t2_qe3',
        type: "mcq",
        question: "Rohit estimates that he needs about 25 minutes to finish his homework. If he starts at 5:40 PM, around what time will he finish?",
        options: ["Around 5:55 PM", "Around 6:05 PM", "Around 6:15 PM", "Around 6:25 PM"],
        correctAnswer: "Around 6:05 PM",
        explanation: "Starting at 5:40 PM and working for 25 minutes means finishing at 6:05 PM. 5:40 + 0:25 = 6:05.",
        wrongAnswerExplanations: {
            "Around 5:55 PM": "This is only 15 minutes after starting, not 25.",
            "Around 6:15 PM": "This is 35 minutes after starting, which is too long.",
            "Around 6:25 PM": "This is 45 minutes after starting, which is far too long."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch3_t2_qe4',
        type: "mcq",
        question: "Meena has about ₹50. If an ice cream costs ₹12, about how many ice creams can she buy?",
        options: ["About 2", "About 4", "About 6", "About 8"],
        correctAnswer: "About 4",
        explanation: "₹50 ÷ ₹12 = 4.16, which is closest to 4 ice creams.",
        wrongAnswerExplanations: {
            "About 2": "₹12 × 2 = ₹24, which uses less than half of her money.",
            "About 6": "₹12 × 6 = ₹72, which is more than she has.",
            "About 8": "₹12 × 8 = ₹96, which is far more than she has."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch3_t2_qe5',
        type: "mcq",
        question: "A train travels about 60 kilometers in one hour. How far will it travel in 3 hours?",
        options: ["About 160 km", "About 180 km", "About 200 km", "About 220 km"],
        correctAnswer: "About 180 km",
        explanation: "60 km × 3 hours = 180 km. The train will travel about 180 kilometers in 3 hours.",
        wrongAnswerExplanations: {
            "About 160 km": "This is less than the correct answer of 60 km × 3 = 180 km.",
            "About 200 km": "This is more than the correct answer of 60 km × 3 = 180 km.",
            "About 220 km": "This is much more than the correct answer of 60 km × 3 = 180 km."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch3_t2_qe6',
        type: "mcq",
        question: "Rajesh wants to estimate how many biscuits are in a packet. If there are 4 rows with about 7 biscuits in each row, about how many biscuits are there?",
        options: ["About 21", "About 28", "About 35", "About 42"],
        correctAnswer: "About 28",
        explanation: "4 rows × 7 biscuits = 28 biscuits. An estimate of about 28 biscuits is reasonable.",
        wrongAnswerExplanations: {
            "About 21": "This is 3 rows × 7 biscuits, but there are 4 rows.",
            "About 35": "This is 5 rows × 7 biscuits, but there are only 4 rows.",
            "About 42": "This is 6 rows × 7 biscuits, but there are only 4 rows."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch3_t2_qe7',
        type: "mcq",
        question: "Rina's storybook has about 85 pages. If she reads about 15 pages every day, approximately how many days will she take to finish the book?",
        options: ["About 4 days", "About 5 days", "About 6 days", "About 7 days"],
        correctAnswer: "About 6 days",
        explanation: "85 ÷ 15 = 5.67, which rounds to about 6 days to finish the book.",
        wrongAnswerExplanations: {
            "About 4 days": "Reading 15 pages per day for 4 days = 60 pages, which is not enough.",
            "About 5 days": "Reading 15 pages per day for 5 days = 75 pages, which is still less than 85.",
            "About 7 days": "Reading 15 pages per day for 7 days = 105 pages, which is more than needed."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl4_ch3_t2_qe8',
        type: "mcq",
        question: "A family of 5 people needs about 2 liters of milk daily. About how many liters will they need for a week?",
        options: ["About 10 liters", "About 12 liters", "About 14 liters", "About 16 liters"],
        correctAnswer: "About 14 liters",
        explanation: "2 liters × 7 days = 14 liters of milk needed for one week.",
        wrongAnswerExplanations: {
            "About 10 liters": "This is less than 2 liters × 7 days = 14 liters.",
            "About 12 liters": "This is less than 2 liters × 7 days = 14 liters.",
            "About 16 liters": "This is more than 2 liters × 7 days = 14 liters."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch3_t2_qe9',
        type: "mcq",
        question: "Sita has ₹200. If a notebook costs about ₹45, about how much money will she have left after buying 3 notebooks?",
        options: ["About ₹45", "About ₹55", "About ₹65", "About ₹75"],
        correctAnswer: "About ₹65",
        explanation: "Cost of 3 notebooks = 3 × ₹45 = ₹135. Money left = ₹200 - ₹135 = ₹65.",
        wrongAnswerExplanations: {
            "About ₹45": "Buying 3 notebooks costs ₹135, leaving ₹65, not ₹45.",
            "About ₹55": "Buying 3 notebooks costs ₹135, leaving ₹65, not ₹55.",
            "About ₹75": "Buying 3 notebooks costs ₹135, leaving ₹65, not ₹75."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl4_ch3_t2_qe10',
        type: "mcq",
        question: "A bus travels at about 40 kilometers per hour. How far will it travel in half an hour?",
        options: ["About 15 km", "About 20 km", "About 25 km", "About 30 km"],
        correctAnswer: "About 20 km",
        explanation: "40 km per hour × ½ hour = 20 km. The bus travels about 20 kilometers in half an hour.",
        wrongAnswerExplanations: {
            "About 15 km": "This is less than 40 km × ½ = 20 km.",
            "About 25 km": "This is more than 40 km × ½ = 20 km.",
            "About 30 km": "This is much more than 40 km × ½ = 20 km."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch3_t2_qe11',
        type: "mcq",
        question: "If a water bottle holds 750 milliliters (ml), about how many bottles would you need to get 3 liters of water?",
        options: ["About 2 bottles", "About 3 bottles", "About 4 bottles", "About 5 bottles"],
        correctAnswer: "About 4 bottles",
        explanation: "3 liters = 3000 ml. 3000 ÷ 750 = 4 bottles needed to get 3 liters.",
        wrongAnswerExplanations: {
            "About 2 bottles": "2 bottles would give 2 × 750 = 1500 ml, which is less than 3 liters.",
            "About 3 bottles": "3 bottles would give 3 × 750 = 2250 ml, which is less than 3 liters.",
            "About 5 bottles": "5 bottles would give 5 × 750 = 3750 ml, which is more than needed."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl4_ch3_t2_qe12',
        type: "mcq",
        question: "Which is the best estimate for the number of chairs needed for 42 students?",
        options: ["About 30 chairs", "About 40 chairs", "About 50 chairs", "About 60 chairs"],
        correctAnswer: "About 40 chairs",
        explanation: "42 is closest to 40, so about 40 chairs would be needed for 42 students.",
        wrongAnswerExplanations: {
            "About 30 chairs": "This is too few chairs for 42 students.",
            "About 50 chairs": "This is more chairs than needed for 42 students.",
            "About 60 chairs": "This is far more chairs than needed for 42 students."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch3_t2_qe13',
        type: "mcq",
        question: "A box of pencils contains 10 pencils. About how many boxes are needed for 45 students if each student needs 1 pencil?",
        options: ["About 3 boxes", "About 4 boxes", "About 5 boxes", "About 6 boxes"],
        correctAnswer: "About 5 boxes",
        explanation: "45 students ÷ 10 pencils per box = 4.5 boxes, which rounds to 5 boxes.",
        wrongAnswerExplanations: {
            "About 3 boxes": "3 boxes would provide only 30 pencils, which is not enough.",
            "About 4 boxes": "4 boxes would provide 40 pencils, which is not enough for 45 students.",
            "About 6 boxes": "6 boxes would provide 60 pencils, which is more than needed."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch3_t2_qe14',
        type: "mcq",
        question: "Raju is traveling to his grandmother's house. The journey takes about 3 hours by car. If he leaves at 9:30 AM, around what time will he reach?",
        options: ["Around 11:30 AM", "Around 12:30 PM", "Around 1:30 PM", "Around 2:30 PM"],
        correctAnswer: "Around 12:30 PM",
        explanation: "Starting at 9:30 AM and traveling for 3 hours means arriving at 12:30 PM.",
        wrongAnswerExplanations: {
            "Around 11:30 AM": "This is only 2 hours after 9:30 AM, not 3 hours.",
            "Around 1:30 PM": "This is 4 hours after 9:30 AM, not 3 hours.",
            "Around 2:30 PM": "This is 5 hours after 9:30 AM, not 3 hours."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch3_t2_qe15',
        type: "mcq",
        question: "If a classroom has 35 students and each student needs 2 notebooks, about how many notebooks are needed in total?",
        options: ["About 50", "About 60", "About 70", "About 80"],
        correctAnswer: "About 70",
        explanation: "35 students × 2 notebooks = 70 notebooks needed in total.",
        wrongAnswerExplanations: {
            "About 50": "This is less than 35 students × 2 notebooks = 70.",
            "About 60": "This is less than 35 students × 2 notebooks = 70.",
            "About 80": "This is more than 35 students × 2 notebooks = 70."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch3_t2_qe16',
        type: "mcq",
        question: "A family plans to save about ₹300 per month. About how much will they save in one year?",
        options: ["About ₹2400", "About ₹3000", "About ₹3600", "About ₹4200"],
        correctAnswer: "About ₹3600",
        explanation: "₹300 per month × 12 months = ₹3600 saved in one year.",
        wrongAnswerExplanations: {
            "About ₹2400": "This would be saving ₹200 per month, not ₹300.",
            "About ₹3000": "This would be saving ₹250 per month, not ₹300.",
            "About ₹4200": "This would be saving ₹350 per month, not ₹300."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch3_t2_qe17',
        type: "mcq",
        question: "Which is the closest estimate to 38 + 45?",
        options: ["About 70", "About 80", "About 90", "About 100"],
        correctAnswer: "About 80",
        explanation: "38 + 45 = 83, which is closest to 80.",
        wrongAnswerExplanations: {
            "About 70": "This is too low - 38 + 45 = 83, which is closer to 80.",
            "About 90": "This is too high - 38 + 45 = 83, which is closer to 80.",
            "About 100": "This is much too high - 38 + 45 = 83, which is closer to 80."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch3_t2_qe18',
        type: "mcq",
        question: "Geeta wants to buy a toy that costs ₹225. She has saved ₹180 so far. About how much more money does she need?",
        options: ["About ₹25", "About ₹35", "About ₹45", "About ₹55"],
        correctAnswer: "About ₹45",
        explanation: "₹225 - ₹180 = ₹45. Geeta needs about ₹45 more.",
        wrongAnswerExplanations: {
            "About ₹25": "This is too little - ₹225 - ₹180 = ₹45.",
            "About ₹35": "This is less than what she needs - ₹225 - ₹180 = ₹45.",
            "About ₹55": "This is more than what she needs - ₹225 - ₹180 = ₹45."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch3_t2_qe19',
        type: "mcq",
        question: "If a school has about 250 students and each classroom can fit about 30 students, approximately how many classrooms are needed?",
        options: ["About 6", "About 8", "About 10", "About 12"],
        correctAnswer: "About 8",
        explanation: "250 students ÷ 30 students per classroom = 8.33, which is about 8 classrooms.",
        wrongAnswerExplanations: {
            "About 6": "6 classrooms would fit only 6 × 30 = 180 students, which is not enough.",
            "About 10": "10 classrooms would fit 10 × 30 = 300 students, which is more than needed.",
            "About 12": "12 classrooms would fit 12 × 30 = 360 students, which is far more than needed."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl4_ch3_t2_qe20',
        type: "mcq",
        question: "If each page of a book has about 25 lines, about how many lines are there in 12 pages?",
        options: ["About 200 lines", "About 250 lines", "About 300 lines", "About 350 lines"],
        correctAnswer: "About 300 lines",
        explanation: "25 lines × 12 pages = 300 lines in total.",
        wrongAnswerExplanations: {
            "About 200 lines": "This is too few - 25 lines × 12 pages = 300 lines.",
            "About 250 lines": "This is less than 25 lines × 12 pages = 300 lines.",
            "About 350 lines": "This is more than 25 lines × 12 pages = 300 lines."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];