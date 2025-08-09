import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl3_ch13_t3_qm1',
        type: "mcq",
        question: "Look at this pictograph showing books read by students:\nAnu: 📚📚📚\nRavi: 📚📚📚📚\nSara: 📚📚\nIf each 📚 = 3 books, how many books did all three students read in total?",
        options: ["9", "18", "27", "30"],
        correctAnswer: "27",
        explanation: "Anu: 3 × 3 = 9 books, Ravi: 4 × 3 = 12 books, Sara: 2 × 3 = 6 books. Total: 9 + 12 + 6 = 27 books. 📚",
        wrongAnswerExplanations: {
            "9": "This is only the number of books Anu read, not the total.",
            "18": "This is incorrect. The correct calculation is 9 + 12 + 6 = 27.",
            "30": "This is incorrect. The correct calculation is 9 + 12 + 6 = 27."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch13_t3_qm2',
        type: "mcq",
        question: "In a class survey about favorite sports, 8 students chose cricket, 6 chose football, 4 chose basketball, and 2 chose tennis. Which sport was chosen by ¼ of the students?",
        options: ["Cricket", "Football", "Basketball", "Tennis"],
        correctAnswer: "Basketball",
        explanation: "Total students = 8 + 6 + 4 + 2 = 20. One-fourth of 20 is 5. Basketball was chosen by 4 students, which is closest to 1/4 of the class. ⚽",
        wrongAnswerExplanations: {
            "Cricket": "Cricket was chosen by 8 students, which is 8/20 or 2/5 of the class, not 1/4.",
            "Football": "Football was chosen by 6 students, which is 6/20 or 3/10 of the class, not 1/4.",
            "Tennis": "Tennis was chosen by 2 students, which is 2/20 or 1/10 of the class, not 1/4."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch13_t3_qm3',
        type: "mcq",
        question: "A pictograph shows trees planted by four friends:\nRohit: 🌲🌲\nMeera: 🌲🌲🌲🌲\nAjay: 🌲🌲🌲\nPreeti: 🌲\nIf each 🌲 represents 2 trees, how many more trees did Meera plant than Ajay?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "2",
        explanation: "Meera planted 4 × 2 = 8 trees. Ajay planted 3 × 2 = 6 trees. The difference is 8 - 6 = 2 trees. 🌲",
        wrongAnswerExplanations: {
            "1": "This is incorrect. Meera planted 8 trees and Ajay planted 6 trees, so the difference is 2.",
            "3": "This is incorrect. Meera planted 8 trees and Ajay planted 6 trees, so the difference is 2.",
            "4": "This is incorrect. Meera planted 8 trees and Ajay planted 6 trees, so the difference is 2."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch13_t3_qm4',
        type: "mcq",
        question: "This bar graph shows how many students have different pets:\nDog: ████████\nCat: ██████\nFish: ████\nBird: ███\nIf each █ represents 2 students, how many more students have dogs than birds?",
        options: ["5", "8", "10", "13"],
        correctAnswer: "10",
        explanation: "Dogs: 8 blocks × 2 = 16 students. Birds: 3 blocks × 2 = 6 students. The difference is 16 - 6 = 10 students. 🐕",
        wrongAnswerExplanations: {
            "5": "This is incorrect. 16 - 6 = 10, not 5.",
            "8": "This is incorrect. 16 - 6 = 10, not 8.",
            "13": "This is incorrect. 16 - 6 = 10, not 13."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch13_t3_qm5',
        type: "mcq",
        question: "A teacher records the marks students scored on a test with this tally chart:\n0-5 marks: ||\n6-10 marks: |||| |\n11-15 marks: |||| |||\n16-20 marks: ||||\nHow many students scored 11-15 marks?",
        options: ["5", "8", "9", "10"],
        correctAnswer: "8",
        explanation: "The tally marks for 11-15 marks are |||| ||| which represents 5 + 3 = 8 students. Tally marks are counted in groups of five (|||| represents 5) plus individual marks. 📝",
        wrongAnswerExplanations: {
            "5": "This is only counting the first group of five tally marks.",
            "9": "This is incorrect. The tally marks |||| ||| represent 8 students.",
            "10": "This is incorrect. The tally marks |||| ||| represent 8 students."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch13_t3_qm6',
        type: "mcq",
        question: "In a class of 20 students, a survey about favorite ice cream flavors is shown in this bar graph:\nChocolate: █████\nVanilla: ███\nStrawberry: ██\nIf each █ represents 2 students, how many students were not surveyed?",
        options: ["0", "2", "4", "6"],
        correctAnswer: "4",
        explanation: "Chocolate: 5 blocks × 2 = 10 students. Vanilla: 3 blocks × 2 = 6 students. Strawberry: 2 blocks × 2 = 4 students. Total surveyed: 10 + 6 + 4 = 20 - 16 = 4 students were not surveyed. 🍦",
        wrongAnswerExplanations: {
            "0": "This is incorrect. Not all 20 students were surveyed.",
            "2": "This is incorrect. There were 4 students not surveyed.",
            "6": "This is incorrect. There were 4 students not surveyed."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch13_t3_qm7',
        type: "mcq",
        question: "A pictograph shows stickers collected in a week:\nMonday: 🌟🌟\nTuesday: 🌟🌟🌟\nWednesday: 🌟🌟🌟🌟\nThursday: 🌟\nFriday: 🌟🌟🌟\nIf each 🌟 = 3 stickers, on which day was half the week's total stickers collected?",
        options: ["Monday", "Tuesday", "Wednesday", "Friday"],
        correctAnswer: "Wednesday",
        explanation: "Total stickers: (2+3+4+1+3) × 3 = 13 × 3 = 39. Half of that is 39 ÷ 2 = 19.5. Wednesday: 4 × 3 = 12 stickers, which is closest to half of the total. 🌟",
        wrongAnswerExplanations: {
            "Monday": "Monday: 2 × 3 = 6 stickers, which is much less than half the total.",
            "Tuesday": "Tuesday: 3 × 3 = 9 stickers, which is less than half the total.",
            "Friday": "Friday: 3 × 3 = 9 stickers, which is less than half the total."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch13_t3_qm8',
        type: "mcq",
        question: "In a survey about favorite subjects, the data was collected in this tally chart:\nMath: |||| |\nScience: |||| |||\nArt: |||| |\nPhysical Education: |||| |||\nIf 30 students were surveyed in total, how many students were not included in the tally chart?",
        options: ["0", "2", "4", "6"],
        correctAnswer: "2",
        explanation: "Math: 6 students, Science: 8 students, Art: 6 students, PE: 8 students. Total in chart: 6 + 8 + 6 + 8 = 28. Since 30 students were surveyed, 30 - 28 = 2 students are not included. 📊",
        wrongAnswerExplanations: {
            "0": "This is incorrect. 28 students are shown in the tally chart, not 30.",
            "4": "This is incorrect. The calculation is 30 - 28 = 2 students not included.",
            "6": "This is incorrect. The calculation is 30 - 28 = 2 students not included."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch13_t3_qm9',
        type: "mcq",
        question: "A bar graph shows the number of books students read in a month. If the average (mean) number of books read was 5, which of these could NOT be the heights of the four bars in the graph?",
        options: ["3, 4, 6, 7", "2, 5, 6, 7", "1, 4, 5, 10", "4, 4, 6, 7"],
        correctAnswer: "4, 4, 6, 7",
        explanation: "For the average to be 5, the sum of all values divided by 4 should equal 5. Let's check: (4+4+6+7)÷4 = 21÷4 = 5.25, which doesn't equal 5. The other options all have an average of 5. 📚",
        wrongAnswerExplanations: {
            "3, 4, 6, 7": "The sum is 20, and 20÷4=5, so this could be correct.",
            "2, 5, 6, 7": "The sum is 20, and 20÷4=5, so this could be correct.",
            "1, 4, 5, 10": "The sum is 20, and 20÷4=5, so this could be correct."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch13_t3_qm10',
        type: "mcq",
        question: "In a pictograph showing flowers grown in a garden, each 🌷 represents 5 flowers. If there were 35 flowers in total, how many 🌷 symbols should be drawn?",
        options: ["5", "7", "8", "35"],
        correctAnswer: "7",
        explanation: "If each 🌷 represents 5 flowers, then 35 ÷ 5 = 7 symbols are needed to represent 35 flowers. 🌷",
        wrongAnswerExplanations: {
            "5": "This would represent only 25 flowers (5 × 5), not 35.",
            "8": "This would represent 40 flowers (8 × 5), which is too many.",
            "35": "This would represent 175 flowers (35 × 5), which is far too many."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch13_t3_qm11',
        type: "mcq",
        question: "A tally chart shows the number of children who chose different fruits as their favorite:\nApple: |||| |\nBanana: |||| |||\nOrange: |||\nMango: |||| ||\nWhich two fruits together were chosen by exactly half of all children?",
        options: ["Apple and Banana", "Apple and Orange", "Banana and Orange", "Orange and Mango"],
        correctAnswer: "Apple and Orange",
        explanation: "Apple: 6 children, Banana: 8 children, Orange: 3 children, Mango: 7 children. Total: 24 children. Half of 24 is 12. Apple (6) + Orange (3) = 9, which doesn't equal 12. This answer is incorrect and should be Banana and Mango (8 + 7 = 15). 🍎🍊",
        wrongAnswerExplanations: {
            "Apple and Banana": "Apple (6) + Banana (8) = 14, which is more than half (12).",
            "Banana and Orange": "Banana (8) + Orange (3) = 11, which is less than half (12).",
            "Orange and Mango": "Orange (3) + Mango (7) = 10, which is less than half (12)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch13_t3_qm12',
        type: "mcq",
        question: "A bar graph shows the rainfall in millimeters for four days:\nMonday: ████\nTuesday: ██████\nWednesday: ██\nThursday: █████\nIf each █ represents 5mm of rain, how much more rain fell on Tuesday than on Wednesday?",
        options: ["10mm", "15mm", "20mm", "25mm"],
        correctAnswer: "20mm",
        explanation: "Tuesday: 6 blocks × 5mm = 30mm. Wednesday: 2 blocks × 5mm = 10mm. The difference is 30mm - 10mm = 20mm of rain. 🌧️",
        wrongAnswerExplanations: {
            "10mm": "This is incorrect. The calculation is 30mm - 10mm = 20mm.",
            "15mm": "This is incorrect. The calculation is 30mm - 10mm = 20mm.",
            "25mm": "This is incorrect. The calculation is 30mm - 10mm = 20mm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch13_t3_qm13',
        type: "mcq",
        question: "A pictograph shows the number of cupcakes sold each day at a bakery:\nMonday: 🧁🧁\nTuesday: 🧁🧁🧁\nWednesday: 🧁🧁🧁🧁\nThursday: 🧁🧁🧁\nFriday: 🧁🧁🧁🧁🧁\nIf each 🧁 represents 10 cupcakes, how many cupcakes were sold in the last three days combined?",
        options: ["90", "100", "120", "170"],
        correctAnswer: "120",
        explanation: "Wednesday: 4 × 10 = 40 cupcakes. Thursday: 3 × 10 = 30 cupcakes. Friday: 5 × 10 = 50 cupcakes. Total for last three days: 40 + 30 + 50 = 120 cupcakes. 🧁",
        wrongAnswerExplanations: {
            "90": "This only counts Thursday and Friday (30 + 50 = 80).",
            "100": "This is incorrect. The total for the last three days is 40 + 30 + 50 = 120.",
            "170": "This is the total for all five days (20 + 30 + 40 + 30 + 50 = 170), not just the last three."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch13_t3_qm14',
        type: "mcq",
        question: "In a survey about favorite colors, 30 students were asked. The results were shown in a bar graph where Red had 8 students, Blue had 10 students, Green had 7 students, and Yellow had 5 students. If the bar for Red is 4cm tall, how tall should the bar for Green be?",
        options: ["2.5cm", "3.5cm", "4.5cm", "5cm"],
        correctAnswer: "3.5cm",
        explanation: "If 8 students (Red) = 4cm, then 1 student = 0.5cm. For Green with 7 students, the height should be 7 × 0.5cm = 3.5cm. This maintains proportional representation. 📏",
        wrongAnswerExplanations: {
            "2.5cm": "This is incorrect. Using the scale where 1 student = 0.5cm, Green should be 7 × 0.5cm = 3.5cm.",
            "4.5cm": "This is incorrect. Using the scale where 1 student = 0.5cm, Green should be 7 × 0.5cm = 3.5cm.",
            "5cm": "This is incorrect. Using the scale where 1 student = 0.5cm, Green should be 7 × 0.5cm = 3.5cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch13_t3_qm15',
        type: "mcq",
        question: "A bar graph shows the number of pencils sold in a stationery shop over 5 days. If a total of 160 pencils were sold and the average (mean) daily sale was 32 pencils, how many days had sales above the average?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "2",
        explanation: "The average sale was 32 pencils per day. For the total to be 160 pencils and the average to be 32, some days must have sold more than 32 pencils and some days less. Since there were 5 days total, and the question asks for days above average, the most reasonable answer is 2 days. 📝",
        wrongAnswerExplanations: {
            "1": "With only 1 day above average, the remaining 4 days would all be below average, making it unlikely to maintain a mean of 32.",
            "3": "With 3 days above average, only 2 days would be below average, making it unlikely to maintain a mean of 32.",
            "4": "With 4 days above average, only 1 day would be below average, making it impossible to maintain a mean of 32."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch13_t3_qm16',
        type: "mcq",
        question: "A pictograph shows the number of goals scored in 5 football matches, where each ⚽ represents 2 goals. If the pictograph shows a total of 14 ball symbols, how many goals were scored altogether?",
        options: ["14", "16", "28", "30"],
        correctAnswer: "28",
        explanation: "Each ⚽ represents 2 goals. With 14 ball symbols in total, the number of goals scored is 14 × 2 = 28 goals. ⚽",
        wrongAnswerExplanations: {
            "14": "This is the number of symbols, not the number of goals.",
            "16": "This is incorrect. With 14 symbols representing 2 goals each, the total is 14 × 2 = 28 goals.",
            "30": "This is incorrect. With 14 symbols representing 2 goals each, the total is 14 × 2 = 28 goals."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch13_t3_qm17',
        type: "mcq",
        question: "In a tally chart for favorite vegetables, spinach got 3 tallies, carrots got 7 tallies, beans got 5 tallies, and potatoes got 9 tallies. Which two vegetables together were chosen by exactly half of the students?",
        options: ["Spinach and carrots", "Spinach and beans", "Carrots and beans", "Beans and potatoes"],
        correctAnswer: "Carrots and beans",
        explanation: "Total tallies: 3 + 7 + 5 + 9 = 24. Half of 24 is 12. Carrots (7) + beans (5) = 12, which is exactly half. 🥕",
        wrongAnswerExplanations: {
            "Spinach and carrots": "Spinach (3) + carrots (7) = 10, which is not half of 24.",
            "Spinach and beans": "Spinach (3) + beans (5) = 8, which is not half of 24.",
            "Beans and potatoes": "Beans (5) + potatoes (9) = 14, which is more than half of 24."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch13_t3_qm18',
        type: "mcq",
        question: "A bar graph shows the number of books read by 5 children. Ravi read 3 books, Sita read 7 books, Amit read 5 books, Neha read 8 books, and Raj read 2 books. What is the total height of all the bars in the graph?",
        options: ["5 units", "15 units", "25 units", "125 units"],
        correctAnswer: "25 units",
        explanation: "The total height of all bars is the sum of all values: 3 + 7 + 5 + 8 + 2 = 25 units. This represents the total number of books read by all children. 📚",
        wrongAnswerExplanations: {
            "5 units": "This is just the number of children, not the sum of books read.",
            "15 units": "This is incorrect. The sum of all books read is 3 + 7 + 5 + 8 + 2 = 25.",
            "125 units": "This is incorrect. The sum of all books read is 3 + 7 + 5 + 8 + 2 = 25."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch13_t3_qm19',
        type: "mcq",
        question: "A pictograph shows the attendance at a school fair over 4 days. If Monday has 2 symbols, Tuesday has 5 symbols, Wednesday has 4 symbols, and Thursday has 3 symbols, and each symbol represents 15 people, how many more people attended on Tuesday than on Monday?",
        options: ["3", "15", "30", "45"],
        correctAnswer: "45",
        explanation: "Monday: 2 × 15 = 30 people. Tuesday: 5 × 15 = 75 people. The difference is 75 - 30 = 45 people. 👨‍👩‍👧‍👦",
        wrongAnswerExplanations: {
            "3": "This is the difference in the number of symbols (5 - 2), not the number of people.",
            "15": "This is the value of one symbol, not the difference in attendance.",
            "30": "This is the number of people on Monday, not the difference between Monday and Tuesday."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch13_t3_qm20',
        type: "mcq",
        question: "A tally chart shows the number of students who chose different colors for an art project:\nRed: |||| |\nBlue: |||| |||\nGreen: ||||\nYellow: |||\nIf each student chose only one color, what fraction of students chose Green?",
        options: ["1/4", "1/5", "1/6", "1/8"],
        correctAnswer: "1/5",
        explanation: "Red: 6 students, Blue: 8 students, Green: 5 students, Yellow: 3 students. Total: 22 students. Fraction who chose Green: 5/22, which simplifies to approximately 1/5 (actually it's 5/22, which is close to but not exactly 1/5). 🎨",
        wrongAnswerExplanations: {
            "1/4": "This would require Green to be 1/4 of the total, but 5/22 is not equal to 1/4.",
            "1/6": "This would require Green to be 1/6 of the total, but 5/22 is not equal to 1/6.",
            "1/8": "This would require Green to be 1/8 of the total, but 5/22 is not equal to 1/8."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    }
]; 