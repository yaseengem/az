import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch3_t2_qm1',
        type: "mcq",
        question: "A train travels at a speed of 55 km per hour. Estimate how far it will travel in 4 hours.",
        options: ["About 200 km", "About 220 km", "About 240 km", "About 260 km"],
        correctAnswer: "About 220 km",
        explanation: "55 km/h × 4 hours = 220 km. This is closest to 220 km.",
        wrongAnswerExplanations: {
            "About 200 km": "This is an underestimate. 55 × 4 = 220 km, not 200 km.",
            "About 240 km": "This is an overestimate. 55 × 4 = 220 km, not 240 km.",
            "About 260 km": "This is a large overestimate. 55 × 4 = 220 km, not 260 km."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch3_t2_qm2',
        type: "mcq",
        question: "Rahul's family used about 25 liters of water daily. Approximately how much water will they use in February (28 days)?",
        options: ["About 600 liters", "About 700 liters", "About 750 liters", "About 800 liters"],
        correctAnswer: "About 700 liters",
        explanation: "25 liters × 28 days = 700 liters. This gives the total water usage for February.",
        wrongAnswerExplanations: {
            "About 600 liters": "This is too little. 25 liters × 28 days = 700 liters, not 600 liters.",
            "About 750 liters": "This is too much. 25 liters × 28 days = 700 liters, not 750 liters.",
            "About 800 liters": "This is far too much. 25 liters × 28 days = 700 liters, not 800 liters."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch3_t2_qm3',
        type: "mcq",
        question: "A school wants to take 196 students on a trip. If each bus can carry 45 students, how many buses should they book?",
        options: ["4 buses", "5 buses", "6 buses", "7 buses"],
        correctAnswer: "5 buses",
        explanation: "196 ÷ 45 = 4.35 buses. Since we can't have a partial bus, we need 5 buses.",
        wrongAnswerExplanations: {
            "4 buses": "4 buses would only carry 4 × 45 = 180 students, which is not enough for 196 students.",
            "6 buses": "6 buses is more than needed. 5 buses can carry 5 × 45 = 225 students, enough for 196 students.",
            "7 buses": "7 buses is far more than needed. 5 buses is sufficient."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch3_t2_qm4',
        type: "mcq",
        question: "Priya reads about 18 pages of a storybook each day. The book has 159 pages. About how many days will she take to finish the book?",
        options: ["About 7 days", "About 8 days", "About 9 days", "About 10 days"],
        correctAnswer: "About 9 days",
        explanation: "159 ÷ 18 = 8.83, which rounds to about 9 days to finish the book.",
        wrongAnswerExplanations: {
            "About 7 days": "Reading 18 pages for 7 days = 126 pages, which is not enough to finish 159 pages.",
            "About 8 days": "Reading 18 pages for 8 days = 144 pages, which is still not enough for 159 pages.",
            "About 10 days": "Reading 18 pages for 10 days = 180 pages, which is more than needed."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch3_t2_qm5',
        type: "mcq",
        question: "A shop sells 48 water bottles per day. The shop owner wants to stock enough bottles for 2 weeks. How many bottles should he order?",
        options: ["About 480 bottles", "About 580 bottles", "About 670 bottles", "About 750 bottles"],
        correctAnswer: "About 670 bottles",
        explanation: "48 bottles × 14 days = 672 bottles, which is closest to 670 bottles.",
        wrongAnswerExplanations: {
            "About 480 bottles": "This is only enough for 10 days (48 × 10 = 480), not 14 days.",
            "About 580 bottles": "This is only enough for about 12 days (48 × 12 = 576), not 14 days.",
            "About 750 bottles": "This is more than needed. 48 × 14 = 672 bottles, which is closest to 670."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch3_t2_qm6',
        type: "mcq",
        question: "Suresh has ₹450. He spends about ₹78 on Monday, ₹92 on Tuesday, and ₹105 on Wednesday. About how much money does he have left?",
        options: ["About ₹165", "About ₹175", "About ₹185", "About ₹195"],
        correctAnswer: "About ₹175",
        explanation: "Money spent = ₹78 + ₹92 + ₹105 = ₹275. Money left = ₹450 - ₹275 = ₹175.",
        wrongAnswerExplanations: {
            "About ₹165": "This underestimates how much is left. ₹450 - ₹275 = ₹175, not ₹165.",
            "About ₹185": "This overestimates how much is left. ₹450 - ₹275 = ₹175, not ₹185.",
            "About ₹195": "This greatly overestimates how much is left. ₹450 - ₹275 = ₹175, not ₹195."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch3_t2_qm7',
        type: "mcq",
        question: "A teacher needs to divide 72 students into teams for a sports day. If each team should have about 8 students, approximately how many teams will there be?",
        options: ["7 teams", "8 teams", "9 teams", "10 teams"],
        correctAnswer: "9 teams",
        explanation: "72 students ÷ 8 students per team = 9 teams.",
        wrongAnswerExplanations: {
            "7 teams": "7 teams would have 7 × 8 = 56 students, which is not enough for 72 students.",
            "8 teams": "8 teams would have 8 × 8 = 64 students, which is not enough for 72 students.",
            "10 teams": "10 teams would have 10 × 8 = 80 students, which is more than 72 students."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch3_t2_qm8',
        type: "mcq",
        question: "A water tank holds 195 liters. If each bucket can hold 15 liters, about how many buckets are needed to fill the tank?",
        options: ["11 buckets", "12 buckets", "13 buckets", "14 buckets"],
        correctAnswer: "13 buckets",
        explanation: "195 liters ÷ 15 liters per bucket = 13 buckets.",
        wrongAnswerExplanations: {
            "11 buckets": "11 buckets would hold 11 × 15 = 165 liters, which is not enough to fill the tank.",
            "12 buckets": "12 buckets would hold 12 × 15 = 180 liters, which is still not enough.",
            "14 buckets": "14 buckets would hold 14 × 15 = 210 liters, which is more than needed."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch3_t2_qm9',
        type: "mcq",
        question: "Amit has to prepare gift bags for 28 children. Each gift bag needs about 8 candies and 4 chocolates. How many candies does Amit need?",
        options: ["About 204", "About 214", "About 224", "About 234"],
        correctAnswer: "About 224",
        explanation: "28 children × 8 candies = 224 candies needed in total.",
        wrongAnswerExplanations: {
            "About 204": "This is too few. 28 × 8 = 224 candies are needed, not 204.",
            "About 214": "This is too few. 28 × 8 = 224 candies are needed, not 214.",
            "About 234": "This is too many. 28 × 8 = 224 candies are needed, not 234."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch3_t2_qm10',
        type: "mcq",
        question: "A fruit seller has 385 apples. He packs them in boxes with 12 apples in each box. About how many full boxes can he pack?",
        options: ["About 30 boxes", "About 32 boxes", "About 34 boxes", "About 36 boxes"],
        correctAnswer: "About 32 boxes",
        explanation: "385 ÷ 12 = 32.08, which means about 32 full boxes can be packed.",
        wrongAnswerExplanations: {
            "About 30 boxes": "30 boxes would hold 30 × 12 = 360 apples, which is less than 385.",
            "About 34 boxes": "34 boxes would need 34 × 12 = 408 apples, which is more than available.",
            "About 36 boxes": "36 boxes would need 36 × 12 = 432 apples, which is far more than available."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch3_t2_qm11',
        type: "mcq",
        question: "A school library has about 3500 books. If the librarian wants to arrange them equally on 8 shelves, approximately how many books will be on each shelf?",
        options: ["About 390 books", "About 410 books", "About 430 books", "About 450 books"],
        correctAnswer: "About 430 books",
        explanation: "3500 books ÷ 8 shelves = 437.5 books per shelf, which is closest to 430 books.",
        wrongAnswerExplanations: {
            "About 390 books": "This is too few. 3500 ÷ 8 = 437.5, which rounds to about 430, not 390.",
            "About 410 books": "This is still less than the actual result of about 430 books per shelf.",
            "About 450 books": "This is more than the actual result of about 430 books per shelf."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch3_t2_qm12',
        type: "mcq",
        question: "Mohan walks about 4 km each day. How far will he walk in 25 days?",
        options: ["About 90 km", "About 100 km", "About 110 km", "About 120 km"],
        correctAnswer: "About 100 km",
        explanation: "4 km per day × 25 days = 100 km total distance walked.",
        wrongAnswerExplanations: {
            "About 90 km": "This is less than 4 km × 25 days = 100 km.",
            "About 110 km": "This is more than 4 km × 25 days = 100 km.",
            "About 120 km": "This is much more than 4 km × 25 days = 100 km."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch3_t2_qm13',
        type: "mcq",
        question: "A class has 45 students. For a project, students are grouped so that each group has 6 students. How many complete groups can be formed, and how many students will be left out?",
        options: ["7 groups, 3 students left", "7 groups, 4 students left", "8 groups, 1 student left", "8 groups, 3 students left"],
        correctAnswer: "7 groups, 3 students left",
        explanation: "45 ÷ 6 = 7 remainder 3. So 7 complete groups can be formed with 3 students left over.",
        wrongAnswerExplanations: {
            "7 groups, 4 students left": "7 groups use 7 × 6 = 42 students, leaving 45 - 42 = 3 students, not 4.",
            "8 groups, 1 student left": "8 groups would need 8 × 6 = 48 students, which is more than available.",
            "8 groups, 3 students left": "8 groups would need 8 × 6 = 48 students, which is more than available."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch3_t2_qm14',
        type: "mcq",
        question: "A shopkeeper has 275 chocolates. She wants to make packets with 8 chocolates in each. How many full packets can she make, and how many chocolates will be left?",
        options: ["33 packets, 7 leftover", "34 packets, 3 leftover", "34 packets, 7 leftover", "35 packets, 5 leftover"],
        correctAnswer: "34 packets, 3 leftover",
        explanation: "275 ÷ 8 = 34 remainder 3. She can make 34 full packets with 3 chocolates left.",
        wrongAnswerExplanations: {
            "33 packets, 7 leftover": "33 packets use 33 × 8 = 264 chocolates, leaving 275 - 264 = 11, not 7.",
            "34 packets, 7 leftover": "34 packets use 34 × 8 = 272 chocolates, leaving 275 - 272 = 3, not 7.",
            "35 packets, 5 leftover": "35 packets would need 35 × 8 = 280 chocolates, which is more than available."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch3_t2_qm15',
        type: "mcq",
        question: "A baker made 156 cookies. She wants to pack them in boxes with 12 cookies in each box. How many boxes will she need?",
        options: ["11 boxes", "12 boxes", "13 boxes", "14 boxes"],
        correctAnswer: "13 boxes",
        explanation: "156 ÷ 12 = 13 boxes exactly. She needs 13 boxes to pack all cookies.",
        wrongAnswerExplanations: {
            "11 boxes": "11 boxes would hold only 11 × 12 = 132 cookies, which is not enough.",
            "12 boxes": "12 boxes would hold only 12 × 12 = 144 cookies, which is not enough.",
            "14 boxes": "14 boxes would hold 14 × 12 = 168 cookies, which is more than needed."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch3_t2_qm16',
        type: "mcq",
        question: "The distance between two cities is 325 kilometers. A car travels at about 65 kilometers per hour. About how long will the journey take?",
        options: ["About 4 hours", "About 5 hours", "About 6 hours", "About 7 hours"],
        correctAnswer: "About 5 hours",
        explanation: "325 km ÷ 65 km/h = 5 hours. The journey will take about 5 hours.",
        wrongAnswerExplanations: {
            "About 4 hours": "At 65 km/h, in 4 hours the car would travel 4 × 65 = 260 km, which is not enough.",
            "About 6 hours": "At 65 km/h, in 6 hours the car would travel 6 × 65 = 390 km, which is too far.",
            "About 7 hours": "At 65 km/h, in 7 hours the car would travel 7 × 65 = 455 km, which is far too much."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch3_t2_qm17',
        type: "mcq",
        question: "Sanya spent ₹145 on Monday, ₹95 on Tuesday, and ₹125 on Wednesday. Estimate her total spending for these three days.",
        options: ["About ₹325", "About ₹345", "About ₹365", "About ₹385"],
        correctAnswer: "About ₹365",
        explanation: "₹145 + ₹95 + ₹125 = ₹365. Sanya spent about ₹365 in total.",
        wrongAnswerExplanations: {
            "About ₹325": "This is less than the actual amount of ₹145 + ₹95 + ₹125 = ₹365.",
            "About ₹345": "This is less than the actual amount of ₹145 + ₹95 + ₹125 = ₹365.",
            "About ₹385": "This is more than the actual amount of ₹145 + ₹95 + ₹125 = ₹365."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch3_t2_qm18',
        type: "mcq",
        question: "A playground is approximately rectangular with length 35 meters and width 28 meters. What is the approximate area of the playground?",
        options: ["About 880 square meters", "About 980 square meters", "About 1080 square meters", "About 1180 square meters"],
        correctAnswer: "About 980 square meters",
        explanation: "Area = length × width = 35 m × 28 m = 980 square meters.",
        wrongAnswerExplanations: {
            "About 880 square meters": "This is less than the actual area of 35 m × 28 m = 980 square meters.",
            "About 1080 square meters": "This is more than the actual area of 35 m × 28 m = 980 square meters.",
            "About 1180 square meters": "This is much more than the actual area of 35 m × 28 m = 980 square meters."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch3_t2_qm19',
        type: "mcq",
        question: "A recipe requires 250 grams of flour for 4 people. How much flour is needed to make the same recipe for 15 people?",
        options: ["About 750 grams", "About 850 grams", "About 950 grams", "About 1050 grams"],
        correctAnswer: "About 950 grams",
        explanation: "Flour for 1 person = 250 ÷ 4 = 62.5 grams. For 15 people = 62.5 × 15 = 937.5 grams, about 950 grams.",
        wrongAnswerExplanations: {
            "About 750 grams": "This is too little flour for 15 people. The correct amount is about 950 grams.",
            "About 850 grams": "This is less than needed for 15 people. The correct amount is about 950 grams.",
            "About 1050 grams": "This is more than needed for 15 people. The correct amount is about 950 grams."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch3_t2_qm20',
        type: "mcq",
        question: "A school organized a trip for which each student paid ₹225. If 128 students went on the trip, approximately how much money was collected?",
        options: ["About ₹26,000", "About ₹28,000", "About ₹29,000", "About ₹31,000"],
        correctAnswer: "About ₹29,000",
        explanation: "128 students × ₹225 = ₹28,800, which is closest to ₹29,000.",
        wrongAnswerExplanations: {
            "About ₹26,000": "This is less than the actual amount of 128 × ₹225 = ₹28,800.",
            "About ₹28,000": "This is close but less than the actual amount of ₹28,800, which rounds to ₹29,000.",
            "About ₹31,000": "This is more than the actual amount of 128 × ₹225 = ₹28,800."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];