import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch14_t2_qm1',
        type: "mcq",
        question: "In a pictograph showing sports equipment, if 🏀 = 8 basketballs, and the school has 3 and a half 🏀 symbols, how many basketballs does the school have?",
        options: ["11.5 basketballs", "24 basketballs", "28 basketballs", "32 basketballs"],
        correctAnswer: "28 basketballs",
        explanation: "3 whole 🏀 symbols = 24 basketballs (3 × 8). Half a 🏀 symbol = 4 basketballs (0.5 × 8). Total: 24 + 4 = 28 basketballs.",
        wrongAnswerExplanations: {
            "11.5 basketballs": "This incorrectly multiplies 3.5 by 3.25, not by 8.",
            "24 basketballs": "This counts only the whole symbols (3 × 8), ignoring the half symbol.",
            "32 basketballs": "This incorrectly calculates 4 whole symbols (4 × 8), not 3.5 symbols."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch14_t2_qm2',
        type: "mcq",
        question: "Look at this bar graph of fruits sold at a store. If apples have a bar height of 35 units and oranges have a bar height of 25 units, how many more apples than oranges were sold?",
        options: ["10", "60", "35", "25"],
        correctAnswer: "10",
        explanation: "The difference between the heights of the bars shows the difference in values: 35 - 25 = 10 more apples than oranges were sold.",
        wrongAnswerExplanations: {
            "60": "This incorrectly adds the two values (35 + 25) instead of finding the difference.",
            "35": "This is just the number of apples sold, not the difference.",
            "25": "This is just the number of oranges sold, not the difference."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch14_t2_qm3',
        type: "mcq",
        question: "A pictograph shows books read by four students. If 📚 = 5 books, and the students have 2, 4, 3, and 5 book symbols respectively, how many books did they read altogether?",
        options: ["14 books", "70 books", "60 books", "28 books"],
        correctAnswer: "70 books",
        explanation: "Total symbols: 2 + 4 + 3 + 5 = 14 symbols. Since each 📚 = 5 books, the total is 14 × 5 = 70 books.",
        wrongAnswerExplanations: {
            "14 books": "This counts the number of symbols, not what they represent.",
            "60 books": "This is not the correct calculation. The correct sum is 14 × 5 = 70 books.",
            "28 books": "This incorrectly multiplies by 2 instead of by 5."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch14_t2_qm4',
        type: "mcq",
        question: "In a bar graph showing the number of students in different classes, Class 4-A has 25 students and Class 4-B has 30 students. What is the ratio of students in Class 4-A to Class 4-B?",
        options: ["5:6", "6:5", "25:30", "1:5"],
        correctAnswer: "5:6",
        explanation: "The ratio of students is 25:30, which simplifies to 5:6 by dividing both numbers by their GCD of 5.",
        wrongAnswerExplanations: {
            "6:5": "This incorrectly reverses the order of the classes.",
            "25:30": "This is correct but can be simplified to 5:6.",
            "1:5": "This is not the correct ratio of 25 to 30."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch14_t2_qm5',
        type: "mcq",
        question: "A pictograph shows toys collected by Classes 1-4. If Class 1 has 2 toy symbols, Class 2 has 4 toy symbols, Class 3 has 1 toy symbol, and Class 4 has 3 toy symbols, and each 🧸 = 10 toys, which statement is TRUE?",
        options: [
            "Class 3 collected 100 toys",
            "Classes 1 and 3 together collected 30 toys",
            "Classes 2 and 4 collected 70 toys",
            "All classes together collected 90 toys"
        ],
        correctAnswer: "Classes 2 and 4 collected 70 toys",
        explanation: "Class 2: 4 symbols × 10 toys = 40 toys. Class 4: 3 symbols × 10 toys = 30 toys. Together: 40 + 30 = 70 toys.",
        wrongAnswerExplanations: {
            "Class 3 collected 100 toys": "Class 3 had only 1 symbol, so they collected 1 × 10 = 10 toys, not 100.",
            "Classes 1 and 3 together collected 30 toys": "Class 1: 2 × 10 = 20 toys. Class 3: 1 × 10 = 10 toys. Together: 20 + 10 = 30 toys, which is correct, but not the answer choice.",
            "All classes together collected 90 toys": "Total symbols: 2 + 4 + 1 + 3 = 10. Total toys: 10 × 10 = 100 toys, not 90."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch14_t2_qm6',
        type: "mcq",
        question: "In a bar graph showing ice cream sales, Monday has a bar height of 15 units, Tuesday 25 units, Wednesday 20 units, Thursday 30 units, and Friday 35 units. On which two consecutive days was the increase in sales the greatest?",
        options: [
            "Monday to Tuesday",
            "Tuesday to Wednesday",
            "Wednesday to Thursday",
            "Thursday to Friday"
        ],
        correctAnswer: "Monday to Tuesday",
        explanation: "Monday to Tuesday: 25 - 15 = 10 units increase. Tuesday to Wednesday: 20 - 25 = -5 units (decrease). Wednesday to Thursday: 30 - 20 = 10 units increase. Thursday to Friday: 35 - 30 = 5 units increase. The greatest increase was 10 units from Monday to Tuesday.",
        wrongAnswerExplanations: {
            "Tuesday to Wednesday": "This was actually a decrease of 5 units, not an increase.",
            "Wednesday to Thursday": "This was an increase of 10 units, which ties with Monday to Tuesday, but in the given options, Monday to Tuesday comes first.",
            "Thursday to Friday": "This was an increase of 5 units, which is less than the 10 unit increase from Monday to Tuesday."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch14_t2_qm7',
        type: "mcq",
        question: "A pictograph shows the number of pencils ✏️ sold in a week, where each pencil symbol represents 20 pencils. If there are 2 whole pencil symbols and half a pencil symbol for Monday, 3 whole symbols for Tuesday, and 1 whole symbol and half a symbol for Wednesday, how many pencils were sold in these three days?",
        options: ["120 pencils", "130 pencils", "140 pencils", "150 pencils"],
        correctAnswer: "140 pencils",
        explanation: "Monday: 2.5 × 20 = 50 pencils. Tuesday: 3 × 20 = 60 pencils. Wednesday: 1.5 × 20 = 30 pencils. Total: 50 + 60 + 30 = 140 pencils.",
        wrongAnswerExplanations: {
            "120 pencils": "This doesn't account for all the half symbols correctly.",
            "130 pencils": "This is not the correct sum of 50 + 60 + 30 = 140.",
            "150 pencils": "This incorrectly counts one extra half symbol."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch14_t2_qm8',
        type: "mcq",
        question: "In a bar graph showing rainfall in different months, if March has a bar of height 30 mm and April has a bar of height 45 mm, what percentage more rainfall did April have compared to March?",
        options: ["15%", "33.33%", "50%", "100%"],
        correctAnswer: "50%",
        explanation: "The increase is 45 - 30 = 15 mm. The percentage increase is (15 ÷ 30) × 100 = 50%.",
        wrongAnswerExplanations: {
            "15%": "This is just the numerical difference (45 - 30 = 15), not the percentage.",
            "33.33%": "This incorrectly calculates (15 ÷ 45) × 100 instead of (15 ÷ 30) × 100.",
            "100%": "A 100% increase would mean April had twice as much rainfall as March (60 mm), not 45 mm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch14_t2_qm9',
        type: "mcq",
        question: "In a pictograph showing the number of stickers collected by students, if 🌟 = 15 stickers, how many complete star symbols are needed to show 90 stickers?",
        options: ["5 stars", "6 stars", "7 stars", "8 stars"],
        correctAnswer: "6 stars",
        explanation: "If each 🌟 = 15 stickers, then the number of stars needed for 90 stickers is 90 ÷ 15 = 6 stars.",
        wrongAnswerExplanations: {
            "5 stars": "5 stars would represent only 5 × 15 = 75 stickers, which is less than 90.",
            "7 stars": "7 stars would represent 7 × 15 = 105 stickers, which is more than 90.",
            "8 stars": "8 stars would represent 8 × 15 = 120 stickers, which is much more than 90."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch14_t2_qm10',
        type: "mcq",
        question: "A bar graph shows the height of five children in centimeters: Amir (120 cm), Bina (125 cm), Chen (118 cm), Diya (122 cm), and Eli (130 cm). What is the difference between the tallest and shortest child?",
        options: ["5 cm", "10 cm", "12 cm", "130 cm"],
        correctAnswer: "12 cm",
        explanation: "The tallest child is Eli at 130 cm. The shortest child is Chen at 118 cm. The difference is 130 - 118 = 12 cm.",
        wrongAnswerExplanations: {
            "5 cm": "This is the difference between Amir and Bina, not between the tallest and shortest.",
            "10 cm": "This is the difference between Eli and Amir, not between the tallest and shortest.",
            "130 cm": "This is Eli's height, not the difference between heights."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch14_t2_qm11',
        type: "mcq",
        question: "A pictograph shows the number of flowers 🌷 planted by different classes. If 🌷 = 12 flowers, Class 4-A planted 4 complete flower symbols, and Class 4-B planted 2 and a half flower symbols. How many more flowers did Class 4-A plant than Class 4-B?",
        options: ["18 flowers", "24 flowers", "30 flowers", "48 flowers"],
        correctAnswer: "18 flowers",
        explanation: "Class 4-A: 4 × 12 = 48 flowers. Class 4-B: 2.5 × 12 = 30 flowers. Difference: 48 - 30 = 18 flowers.",
        wrongAnswerExplanations: {
            "24 flowers": "This is an incorrect calculation of the difference.",
            "30 flowers": "This is the number of flowers planted by Class 4-B, not the difference.",
            "48 flowers": "This is the number of flowers planted by Class 4-A, not the difference."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch14_t2_qm12',
        type: "mcq",
        question: "A bar graph shows the points scored by Teams A, B, C, and D as 45, 30, 60, and 35 points respectively. If the teams are arranged from highest to lowest score, what is the correct order?",
        options: ["A, B, C, D", "C, A, D, B", "C, D, A, B", "B, D, A, C"],
        correctAnswer: "C, A, D, B",
        explanation: "Team C: 60 points, Team A: 45 points, Team D: 35 points, Team B: 30 points. Arranged from highest to lowest: C, A, D, B.",
        wrongAnswerExplanations: {
            "A, B, C, D": "This is alphabetical order, not score order.",
            "C, D, A, B": "This incorrectly places D before A.",
            "B, D, A, C": "This is the reverse of the correct order."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch14_t2_qm13',
        type: "mcq",
        question: "In a pictograph showing the number of books read by students, if 📖 = 8 books, what would half a book symbol represent?",
        options: ["4 books", "2 books", "6 books", "16 books"],
        correctAnswer: "4 books",
        explanation: "If one complete 📖 symbol represents 8 books, then half a book symbol represents 8 ÷ 2 = 4 books.",
        wrongAnswerExplanations: {
            "2 books": "This incorrectly divides 8 by 4 instead of by 2.",
            "6 books": "This incorrectly subtracts 2 from 8 instead of dividing by 2.",
            "16 books": "This incorrectly multiplies 8 by 2 instead of dividing by 2."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch14_t2_qm14',
        type: "mcq",
        question: "A bar graph shows the number of fruits sold in a week: Monday (50), Tuesday (45), Wednesday (60), Thursday (30), and Friday (65). What is the average number of fruits sold per day?",
        options: ["45", "50", "60", "65"],
        correctAnswer: "50",
        explanation: "Average = Sum of all values ÷ Number of days = (50 + 45 + 60 + 30 + 65) ÷ 5 = 250 ÷ 5 = 50 fruits per day.",
        wrongAnswerExplanations: {
            "45": "This is the number sold on Tuesday, not the average.",
            "60": "This is the number sold on Wednesday, not the average.",
            "65": "This is the number sold on Friday, not the average."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch14_t2_qm15',
        type: "mcq",
        question: "In a pictograph showing the number of marbles collected by children, if a whole marble symbol 🔮 = 25 marbles and a quarter marble symbol = 6.25 marbles, how many marbles does one-third of a marble symbol represent?",
        options: ["about 8.33 marbles", "about 12.5 marbles", "about 10 marbles", "about 7.5 marbles"],
        correctAnswer: "about 8.33 marbles",
        explanation: "If a whole 🔮 symbol represents 25 marbles, one-third of a symbol represents 25 ÷ 3 = 8.33 marbles.",
        wrongAnswerExplanations: {
            "about 12.5 marbles": "This is half a symbol (25 ÷ 2 = 12.5), not one-third.",
            "about 10 marbles": "This is incorrectly calculating 25 ÷ 2.5 instead of 25 ÷ 3.",
            "about 7.5 marbles": "This is not the correct calculation of one-third of 25."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch14_t2_qm16',
        type: "mcq",
        question: "A bar graph shows the number of students who chose different sports: Cricket (35), Football (25), Basketball (20), and Tennis (30). What fraction of students chose Basketball?",
        options: ["20/110", "1/5", "20/35", "2/11"],
        correctAnswer: "20/110",
        explanation: "Total students: 35 + 25 + 20 + 30 = 110. Fraction choosing Basketball: 20/110.",
        wrongAnswerExplanations: {
            "1/5": "This would be correct if the total were 100, but it's 110.",
            "20/35": "This incorrectly compares Basketball to Cricket, not to the total.",
            "2/11": "This simplifies 20/110 = 2/11, which is correct but not one of the options."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch14_t2_qm17',
        type: "mcq",
        question: "In a pictograph of trees 🌳 planted by different grades, if 🌳 = 15 trees, Grade 1 planted 2 tree symbols, Grade 2 planted 3 tree symbols, Grade 3 planted 1 tree symbol, and Grade 4 planted 4 tree symbols, what is the mean (average) number of trees planted per grade?",
        options: ["37.5 trees", "40 trees", "45 trees", "37 trees"],
        correctAnswer: "37.5 trees",
        explanation: "Total tree symbols: 2 + 3 + 1 + 4 = 10 symbols. Total trees: 10 × 15 = 150 trees. Mean: 150 ÷ 4 = 37.5 trees per grade.",
        wrongAnswerExplanations: {
            "40 trees": "This incorrectly divides by 3.75 instead of 4.",
            "45 trees": "This incorrectly multiplies the average number of symbols (2.5) by 15.",
            "37 trees": "This is an approximation of 37.5, but not the exact answer."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch14_t2_qm18',
        type: "mcq",
        question: "A bar graph shows daily water consumption in litres: Day 1 (3 litres), Day 2 (4.5 litres), Day 3 (3.5 litres), Day 4 (5 litres), and Day 5 (4 litres). How much water was consumed in all 5 days?",
        options: ["16 litres", "20 litres", "22 litres", "24 litres"],
        correctAnswer: "20 litres",
        explanation: "Total water consumption = 3 + 4.5 + 3.5 + 5 + 4 = 20 litres.",
        wrongAnswerExplanations: {
            "16 litres": "This is an incorrect sum, missing some values.",
            "22 litres": "This is an incorrect calculation of the total.",
            "24 litres": "This incorrectly assumes all days had 4 or more litres."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch14_t2_qm19',
        type: "mcq",
        question: "In a pictograph showing books 📚 read by students, if 📚 = 6 books, and Ram read 3 book symbols, Sita read 5 book symbols, Anand read 2 book symbols, and Priya read 4 book symbols, who read twice as many books as Anand?",
        options: ["Ram", "Sita", "Priya", "No one"],
        correctAnswer: "Ram",
        explanation: "Anand read 2 × 6 = 12 books. Twice that amount is 12 × 2 = 24 books. Ram read 3 × 6 = 18 books, Sita read 5 × 6 = 30 books, Priya read 4 × 6 = 24 books. So Priya read twice as many as Anand.",
        wrongAnswerExplanations: {
            "Ram": "Ram read 3 × 6 = 18 books, which is 1.5 times Anand's 12 books, not twice.",
            "Sita": "Sita read 5 × 6 = 30 books, which is 2.5 times Anand's 12 books, not twice.",
            "No one": "Priya read exactly twice as many books as Anand."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch14_t2_qm20',
        type: "mcq",
        question: "A bar graph shows the heights of plants in centimeters after different weeks: Week 1 (5 cm), Week 2 (8 cm), Week 3 (13 cm), Week 4 (20 cm), and Week 5 (30 cm). By how many centimeters did the plant grow between Week 3 and Week 5?",
        options: ["10 cm", "17 cm", "25 cm", "20 cm"],
        correctAnswer: "17 cm",
        explanation: "The plant height in Week 3 was 13 cm and in Week 5 was 30 cm. The growth was 30 - 13 = 17 cm.",
        wrongAnswerExplanations: {
            "10 cm": "This is the growth from Week 3 to Week 4 (20 - 13 = 7), not to Week 5.",
            "25 cm": "This is the total growth from Week 1 to Week 5 (30 - 5 = 25), not from Week 3.",
            "20 cm": "This is an incorrect calculation of the difference."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];
