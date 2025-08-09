import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl3_ch9_t3_qm1',
        type: "mcq",
        question: "Ramya bought 4 packets of crayons for her art class. Each packet has 8 crayons. Her friend Samir bought 2 packets of markers. Each packet has 6 markers. How many art supplies (crayons and markers) did they buy in total?",
        options: ["28 supplies", "32 supplies", "44 supplies", "56 supplies"],
        correctAnswer: "44 supplies",
        explanation: "Ramya bought 4 × 8 = 32 crayons. Samir bought 2 × 6 = 12 markers. Total: 32 + 12 = 44 supplies.",
        wrongAnswerExplanations: {
            "28 supplies": "This is incorrect. The correct calculation is (4 × 8) + (2 × 6) = 32 + 12 = 44.",
            "32 supplies": "This is incorrect. 32 is only the number of crayons Ramya bought (4 × 8).",
            "56 supplies": "This is incorrect. The correct calculation is (4 × 8) + (2 × 6) = 32 + 12 = 44, not 56."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch9_t3_qm2',
        type: "mcq",
        question: "A fruit vendor arranges apples in 5 rows. Each row has 7 apples. He sells 8 apples to a customer. How many apples are left?",
        options: ["27 apples", "29 apples", "35 apples", "42 apples"],
        correctAnswer: "27 apples",
        explanation: "Total apples: 5 × 7 = 35 apples. After selling 8 apples: 35 - 8 = 27 apples are left.",
        wrongAnswerExplanations: {
            "29 apples": "This is incorrect. The calculation is 5 × 7 = 35, then 35 - 8 = 27, not 29.",
            "35 apples": "This is incorrect. 35 is the total number before selling any apples.",
            "42 apples": "This is incorrect. The total is only 5 × 7 = 35, not 42."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch9_t3_qm3',
        type: "mcq",
        question: "Mrs. Sharma bought 3 packets of biscuits. Each packet contains 10 biscuits. She distributed them equally among her 6 children. How many biscuits did each child get?",
        options: ["3 biscuits", "5 biscuits", "6 biscuits", "8 biscuits"],
        correctAnswer: "5 biscuits",
        explanation: "Total biscuits: 3 × 10 = 30 biscuits. Each child gets: 30 ÷ 6 = 5 biscuits.",
        wrongAnswerExplanations: {
            "3 biscuits": "This is incorrect. The calculation is (3 × 10) ÷ 6 = 30 ÷ 6 = 5, not 3.",
            "6 biscuits": "This is incorrect. The calculation is (3 × 10) ÷ 6 = 30 ÷ 6 = 5, not 6.",
            "8 biscuits": "This is incorrect. The calculation is (3 × 10) ÷ 6 = 30 ÷ 6 = 5, not 8."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch9_t3_qm4',
        type: "mcq",
        question: "Rahul has 4 boxes of pencils. Each box has 6 pencils. He gives 2 pencils to each of his 3 friends. How many pencils does he have left?",
        options: ["12 pencils", "16 pencils", "18 pencils", "24 pencils"],
        correctAnswer: "18 pencils",
        explanation: "Total pencils: 4 × 6 = 24 pencils. Gave away: 2 × 3 = 6 pencils. Left: 24 - 6 = 18 pencils.",
        wrongAnswerExplanations: {
            "12 pencils": "This is incorrect. The calculation is 4 × 6 = 24, then 24 - (2 × 3) = 24 - 6 = 18, not 12.",
            "16 pencils": "This is incorrect. The calculation is 4 × 6 = 24, then 24 - (2 × 3) = 24 - 6 = 18, not 16.",
            "24 pencils": "This is incorrect. 24 is the total before giving any away to his friends."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch9_t3_qm5',
        type: "mcq",
        question: "A shopkeeper has 9 boxes of chocolates. Each box has 5 chocolates. If he sells all chocolates at ₹3 per chocolate, how much money will he earn?",
        options: ["₹90", "₹115", "₹135", "₹150"],
        correctAnswer: "₹135",
        explanation: "Total chocolates: 9 × 5 = 45 chocolates. Money earned: 45 × 3 = ₹135.",
        wrongAnswerExplanations: {
            "₹90": "This is incorrect. The calculation is 9 × 5 × 3 = 45 × 3 = 135, not 90.",
            "₹115": "This is incorrect. The calculation is 9 × 5 × 3 = 45 × 3 = 135, not 115.",
            "₹150": "This is incorrect. The calculation is 9 × 5 × 3 = 45 × 3 = 135, not 150."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch9_t3_qm6',
        type: "mcq",
        question: "Meena reads 6 pages of her storybook every day. If the book has 42 pages, how many days will it take her to finish the book?",
        options: ["6 days", "7 days", "8 days", "9 days"],
        correctAnswer: "7 days",
        explanation: "To find the number of days: 42 ÷ 6 = 7 days.",
        wrongAnswerExplanations: {
            "6 days": "This is incorrect. The calculation is 42 ÷ 6 = 7, not 6.",
            "8 days": "This is incorrect. The calculation is 42 ÷ 6 = 7, not 8.",
            "9 days": "This is incorrect. The calculation is 42 ÷ 6 = 7, not 9."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch9_t3_qm7',
        type: "mcq",
        question: "Anand has 6 bags with 8 marbles in each bag. He gives 4 marbles to Vikas and 6 marbles to Sunil. How many marbles does Anand have left?",
        options: ["34 marbles", "38 marbles", "42 marbles", "48 marbles"],
        correctAnswer: "38 marbles",
        explanation: "Total marbles: 6 × 8 = 48 marbles. Gave away: 4 + 6 = 10 marbles. Left: 48 - 10 = 38 marbles.",
        wrongAnswerExplanations: {
            "34 marbles": "This is incorrect. The calculation is 6 × 8 = 48, then 48 - (4 + 6) = 48 - 10 = 38, not 34.",
            "42 marbles": "This is incorrect. The calculation is 6 × 8 = 48, then 48 - (4 + 6) = 48 - 10 = 38, not 42.",
            "48 marbles": "This is incorrect. 48 is the total before giving any away to his friends."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch9_t3_qm8',
        type: "mcq",
        question: "A garden has 3 rows of rose plants. Each row has 7 plants. There are also 4 rows of sunflower plants with 5 plants in each row. How many plants are there in the garden?",
        options: ["30 plants", "35 plants", "41 plants", "45 plants"],
        correctAnswer: "41 plants",
        explanation: "Rose plants: 3 × 7 = 21 plants. Sunflower plants: 4 × 5 = 20 plants. Total: 21 + 20 = 41 plants.",
        wrongAnswerExplanations: {
            "30 plants": "This is incorrect. The calculation is (3 × 7) + (4 × 5) = 21 + 20 = 41, not 30.",
            "35 plants": "This is incorrect. The calculation is (3 × 7) + (4 × 5) = 21 + 20 = 41, not 35.",
            "45 plants": "This is incorrect. The calculation is (3 × 7) + (4 × 5) = 21 + 20 = 41, not 45."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch9_t3_qm9',
        type: "mcq",
        question: "Raj buys 4 toys for ₹15 each and 3 books for ₹25 each. How much money does he spend in total?",
        options: ["₹85", "₹115", "₹120", "₹135"],
        correctAnswer: "₹135",
        explanation: "Money spent on toys: 4 × 15 = ₹60. Money spent on books: 3 × 25 = ₹75. Total: 60 + 75 = ₹135.",
        wrongAnswerExplanations: {
            "₹85": "This is incorrect. The calculation is (4 × 15) + (3 × 25) = 60 + 75 = 135, not 85.",
            "₹115": "This is incorrect. The calculation is (4 × 15) + (3 × 25) = 60 + 75 = 135, not 115.",
            "₹120": "This is incorrect. The calculation is (4 × 15) + (3 × 25) = 60 + 75 = 135, not 120."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch9_t3_qm10',
        type: "mcq",
        question: "Neha walks 2 kilometers every day to school. How many kilometers does she walk in 5 days to go to school and come back home?",
        options: ["10 kilometers", "15 kilometers", "20 kilometers", "25 kilometers"],
        correctAnswer: "20 kilometers",
        explanation: "Distance for one round trip: 2 × 2 = 4 kilometers. Total for 5 days: 4 × 5 = 20 kilometers.",
        wrongAnswerExplanations: {
            "10 kilometers": "This is incorrect. This would be just going to school (2 km × 5 days), but she also comes back.",
            "15 kilometers": "This is incorrect. The calculation is 2 × 2 × 5 = 4 × 5 = 20, not 15.",
            "25 kilometers": "This is incorrect. The calculation is 2 × 2 × 5 = 4 × 5 = 20, not 25."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch9_t3_qm11',
        type: "mcq",
        question: "A school bus can seat 35 students. If there are 3 such buses, how many students can they transport in 2 trips?",
        options: ["105 students", "175 students", "210 students", "245 students"],
        correctAnswer: "210 students",
        explanation: "Capacity of 3 buses: 35 × 3 = 105 students. For 2 trips: 105 × 2 = 210 students.",
        wrongAnswerExplanations: {
            "105 students": "This is incorrect. This is just for 1 trip of all 3 buses.",
            "175 students": "This is incorrect. The calculation is 35 × 3 × 2 = 105 × 2 = 210, not 175.",
            "245 students": "This is incorrect. The calculation is 35 × 3 × 2 = 105 × 2 = 210, not 245."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch9_t3_qm12',
        type: "mcq",
        question: "Mr. Gupta buys 6 boxes of apples. Each box has 8 apples. If he wants to divide them equally among his 4 children, how many apples will each child get?",
        options: ["10 apples", "12 apples", "14 apples", "16 apples"],
        correctAnswer: "12 apples",
        explanation: "Total apples: 6 × 8 = 48 apples. Each child gets: 48 ÷ 4 = 12 apples.",
        wrongAnswerExplanations: {
            "10 apples": "This is incorrect. The calculation is (6 × 8) ÷ 4 = 48 ÷ 4 = 12, not 10.",
            "14 apples": "This is incorrect. The calculation is (6 × 8) ÷ 4 = 48 ÷ 4 = 12, not 14.",
            "16 apples": "This is incorrect. The calculation is (6 × 8) ÷ 4 = 48 ÷ 4 = 12, not 16."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch9_t3_qm13',
        type: "mcq",
        question: "A classroom has 5 rows of desks. Each row has 6 desks. Each desk can seat 2 students. How many students can sit in the classroom?",
        options: ["30 students", "50 students", "60 students", "90 students"],
        correctAnswer: "60 students",
        explanation: "Total desks: 5 × 6 = 30 desks. Total students: 30 × 2 = 60 students.",
        wrongAnswerExplanations: {
            "30 students": "This is incorrect. This is just the number of desks (5 × 6), not the number of students.",
            "50 students": "This is incorrect. The calculation is 5 × 6 × 2 = 30 × 2 = 60, not 50.",
            "90 students": "This is incorrect. The calculation is 5 × 6 × 2 = 30 × 2 = 60, not 90."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch9_t3_qm14',
        type: "mcq",
        question: "Shilpa has saved ₹5 every day for 9 days. She then spends ₹12 on a notebook. How much money does she have left?",
        options: ["₹23", "₹33", "₹38", "₹45"],
        correctAnswer: "₹33",
        explanation: "Money saved: 5 × 9 = ₹45. Money left after spending: 45 - 12 = ₹33.",
        wrongAnswerExplanations: {
            "₹23": "This is incorrect. The calculation is 5 × 9 = 45, then 45 - 12 = 33, not 23.",
            "₹38": "This is incorrect. The calculation is 5 × 9 = 45, then 45 - 12 = 33, not 38.",
            "₹45": "This is incorrect. This is the total amount saved before spending on the notebook."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch9_t3_qm15',
        type: "mcq",
        question: "A fruit seller arranges oranges in 7 baskets. Each basket contains 9 oranges. He sells 25 oranges. How many oranges are left?",
        options: ["38 oranges", "40 oranges", "63 oranges", "38 oranges"],
        correctAnswer: "38 oranges",
        explanation: "Total oranges: 7 × 9 = 63 oranges. After selling: 63 - 25 = 38 oranges are left.",
        wrongAnswerExplanations: {
            "40 oranges": "This is incorrect. The calculation is 7 × 9 = 63, then 63 - 25 = 38, not 40.",
            "63 oranges": "This is incorrect. This is the total before selling any oranges.",
            "38 oranges": "This answer appears twice in the options."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch9_t3_qm16',
        type: "mcq",
        question: "A baker makes 7 trays of cookies. Each tray has 8 cookies. He packs them in boxes of 4 cookies each. How many boxes does he need?",
        options: ["11 boxes", "14 boxes", "15 boxes", "16 boxes"],
        correctAnswer: "14 boxes",
        explanation: "Total cookies: 7 × 8 = 56 cookies. Number of boxes: 56 ÷ 4 = 14 boxes.",
        wrongAnswerExplanations: {
            "11 boxes": "This is incorrect. The calculation is (7 × 8) ÷ 4 = 56 ÷ 4 = 14, not 11.",
            "15 boxes": "This is incorrect. The calculation is (7 × 8) ÷ 4 = 56 ÷ 4 = 14, not 15.",
            "16 boxes": "This is incorrect. The calculation is (7 × 8) ÷ 4 = 56 ÷ 4 = 14, not 16."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch9_t3_qm17',
        type: "mcq",
        question: "Each student in a class needs 3 notebooks and 2 pencils. If there are 25 students, how many items (notebooks and pencils) are needed in total?",
        options: ["75 items", "100 items", "125 items", "150 items"],
        correctAnswer: "125 items",
        explanation: "Notebooks needed: 3 × 25 = 75. Pencils needed: 2 × 25 = 50. Total items: 75 + 50 = 125 items.",
        wrongAnswerExplanations: {
            "75 items": "This is incorrect. This counts only the notebooks (3 × 25), not the pencils.",
            "100 items": "This is incorrect. The calculation is (3 × 25) + (2 × 25) = 75 + 50 = 125, not 100.",
            "150 items": "This is incorrect. The calculation is (3 × 25) + (2 × 25) = 75 + 50 = 125, not 150."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch9_t3_qm18',
        type: "mcq",
        question: "Rakesh buys 4 packets of balloons for his birthday party. Each packet has 12 balloons. If 10 balloons burst during the party, how many balloons are left?",
        options: ["28 balloons", "38 balloons", "42 balloons", "48 balloons"],
        correctAnswer: "38 balloons",
        explanation: "Total balloons: 4 × 12 = 48 balloons. After bursting: 48 - 10 = 38 balloons are left.",
        wrongAnswerExplanations: {
            "28 balloons": "This is incorrect. The calculation is 4 × 12 = 48, then 48 - 10 = 38, not 28.",
            "42 balloons": "This is incorrect. The calculation is 4 × 12 = 48, then 48 - 10 = 38, not 42.",
            "48 balloons": "This is incorrect. This is the total before any balloons burst."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch9_t3_qm19',
        type: "mcq",
        question: "A library shelf has 6 rows. Each row can hold 9 books. If there are 45 books now, how many more books can be kept on the shelf?",
        options: ["7 books", "9 books", "10 books", "54 books"],
        correctAnswer: "9 books",
        explanation: "Total capacity: 6 × 9 = 54 books. Available space: 54 - 45 = 9 more books can be kept.",
        wrongAnswerExplanations: {
            "7 books": "This is incorrect. The calculation is (6 × 9) - 45 = 54 - 45 = 9, not 7.",
            "10 books": "This is incorrect. The calculation is (6 × 9) - 45 = 54 - 45 = 9, not 10.",
            "54 books": "This is incorrect. 54 is the total capacity, not the number of additional books that can be kept."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch9_t3_qm20',
        type: "mcq",
        question: "Mrs. Sharma buys vegetables for the week: 3 kg of potatoes at ₹20 per kg, 2 kg of tomatoes at ₹15 per kg, and 1 kg of onions at ₹25 per kg. How much does she spend in total?",
        options: ["₹85", "₹90", "₹95", "₹100"],
        correctAnswer: "₹95",
        explanation: "Cost of potatoes: 3 × 20 = ₹60. Cost of tomatoes: 2 × 15 = ₹30. Cost of onions: 1 × 25 = ₹25. Total: 60 + 30 + 25 = ₹95.",
        wrongAnswerExplanations: {
            "₹85": "This is incorrect. The calculation is (3 × 20) + (2 × 15) + (1 × 25) = 60 + 30 + 25 = 95, not 85.",
            "₹90": "This is incorrect. The calculation is (3 × 20) + (2 × 15) + (1 × 25) = 60 + 30 + 25 = 95, not 90.",
            "₹100": "This is incorrect. The calculation is (3 × 20) + (2 × 15) + (1 × 25) = 60 + 30 + 25 = 95, not 100."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    }
]; 