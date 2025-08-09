import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch14_t3_qm1',
        type: "mcq",
        question: "In a pictograph showing books read in a week, if Monday shows 🔖🔖 and 🔖 = 4 books, how many books were read on Monday?",
        options: ["2 books", "6 books", "8 books", "4 books"],
        correctAnswer: "8 books",
        explanation: "When 🔖 represents 4 books, then 🔖🔖 means 2 × 4 = 8 books were read on Monday.",
        wrongAnswerExplanations: {
            "2 books": "This counts the number of symbols, not what they represent.",
            "6 books": "This calculation is incorrect.",
            "4 books": "This is what one symbol represents, not two symbols."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch14_t3_qm2',
        type: "mcq",
        question: "Look at this data for fruits sold: Monday: 15, Tuesday: 20, Wednesday: 10, Thursday: 30, Friday: 25. If we make a bar graph, which day would have the tallest bar?",
        options: ["Monday", "Wednesday", "Thursday", "Friday"],
        correctAnswer: "Thursday",
        explanation: "Thursday had 30 fruits sold, which is the highest number. On a bar graph, the day with the highest value would have the tallest bar.",
        wrongAnswerExplanations: {
            "Monday": "Monday had 15 fruits sold, which is not the highest value.",
            "Wednesday": "Wednesday had 10 fruits sold, which is the lowest value.",
            "Friday": "Friday had 25 fruits sold, which is not the highest value."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch14_t3_qm3',
        type: "mcq",
        question: "If a pictograph shows 🚲🚲🚲 for Class 4 and 🚲🚲🚲🚲 for Class 5, with 🚲 = 5 bicycles, how many more bicycles do Class 5 students have than Class 4 students?",
        options: ["1 bicycle", "5 bicycles", "5 more students", "20 bicycles"],
        correctAnswer: "5 bicycles",
        explanation: "Class 4: 🚲🚲🚲 = 3 × 5 = 15 bicycles. Class 5: 🚲🚲🚲🚲 = 4 × 5 = 20 bicycles. Difference: 20 - 15 = 5 bicycles.",
        wrongAnswerExplanations: {
            "1 bicycle": "This counts the difference in symbols, not the value they represent.",
            "5 more students": "The question is about bicycles, not students.",
            "20 bicycles": "This is the total for Class 5, not the difference between classes."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch14_t3_qm4',
        type: "mcq",
        question: "A bar graph shows the number of students who chose different fruits as their favorites. If the graph shows: Apples: 15, Bananas: 20, Oranges: 10, Mangoes: 25, what fraction of students chose mangoes?",
        options: ["25/15", "25/70", "25/45", "1/4"],
        correctAnswer: "25/70",
        explanation: "Total students: 15 + 20 + 10 + 25 = 70. Fraction who chose mangoes: 25/70 (which can be simplified to 5/14).",
        wrongAnswerExplanations: {
            "25/15": "This compares mangoes to apples only, not to the total.",
            "25/45": "This incorrectly uses 45 as the total.",
            "1/4": "This assumes equal distribution among 4 fruits, which is not the case."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch14_t3_qm5',
        type: "mcq",
        question: "In a pictograph, if full symbol 🌟 = 10 and half symbol ⭐ = 5, what does 🌟🌟⭐ represent?",
        options: ["25", "15", "21", "3 groups"],
        correctAnswer: "25",
        explanation: "🌟🌟 = 2 × 10 = 20 and ⭐ = 5. Total: 20 + 5 = 25.",
        wrongAnswerExplanations: {
            "15": "This miscalculates the value of the symbols.",
            "21": "This calculation is incorrect.",
            "3 groups": "This counts the number of symbols, not their value."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch14_t3_qm6',
        type: "mcq",
        question: "A bar graph shows the number of children playing different sports: Cricket: 45, Football: 30, Basketball: 25, Tennis: 20. What percentage of children play football?",
        options: ["25%", "30%", "45%", "25%"],
        correctAnswer: "25%",
        explanation: "Total children: 45 + 30 + 25 + 20 = 120. Percentage playing football: (30 ÷ 120) × 100 = 25%.",
        wrongAnswerExplanations: {
            "30%": "This is the number of children playing football, not the percentage.",
            "45%": "This is the number of children playing cricket, not the percentage of football players.",
            "25%": "This is the number of children playing basketball, not the percentage of football players."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch14_t3_qm7',
        type: "mcq",
        question: "If a tally chart shows marks as: |||||| |||| ||| ||||| ||, what is the total count?",
        options: ["5 groups", "20 marks", "15 marks", "25 marks"],
        correctAnswer: "20 marks",
        explanation: "Counting the tally marks: 6 + 4 + 3 + 5 + 2 = 20 marks total.",
        wrongAnswerExplanations: {
            "5 groups": "This counts the number of groups, not the total marks.",
            "15 marks": "This is an incorrect count of the tally marks.",
            "25 marks": "This is an incorrect count of the tally marks."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch14_t3_qm8',
        type: "mcq",
        question: "In a bar graph showing rainfall in different months, if January has 20mm and February has 30mm, by what percentage is February's rainfall more than January's?",
        options: ["10%", "33%", "50%", "150%"],
        correctAnswer: "50%",
        explanation: "Increase = 30 - 20 = 10mm. Percentage increase = (10 ÷ 20) × 100 = 50%.",
        wrongAnswerExplanations: {
            "10%": "This is just the absolute difference (10mm), not the percentage.",
            "33%": "This calculation is incorrect.",
            "150%": "This would mean February had 2.5 times January's rainfall, which is incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch14_t3_qm9',
        type: "mcq",
        question: "A pictograph shows books read by children: Amit: 📚📚, Ritu: 📚📚📚, Priya: 📚📚📚📚, Sam: 📚. If 📚 = 3 books, how many more books did Priya read than Amit?",
        options: ["2 books", "6 books", "9 books", "12 books"],
        correctAnswer: "6 books",
        explanation: "Amit: 📚📚 = 2 × 3 = 6 books. Priya: 📚📚📚📚 = 4 × 3 = 12 books. Difference: 12 - 6 = 6 books.",
        wrongAnswerExplanations: {
            "2 books": "This counts the difference in symbols, not books.",
            "9 books": "This calculation is incorrect.",
            "12 books": "This is Priya's total, not the difference."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch14_t3_qm10',
        type: "mcq",
        question: "A bar graph shows points scored by 4 teams: Team A: 25, Team B: 40, Team C: 35, Team D: 30. What is the average points scored per team?",
        options: ["25 points", "30 points", "32.5 points", "40 points"],
        correctAnswer: "32.5 points",
        explanation: "Total points: 25 + 40 + 35 + 30 = 130. Average: 130 ÷ 4 = 32.5 points per team.",
        wrongAnswerExplanations: {
            "25 points": "This is Team A's score, not the average.",
            "30 points": "This is Team D's score, not the average.",
            "40 points": "This is Team B's score, not the average."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch14_t3_qm11',
        type: "mcq",
        question: "In a pictograph of trees planted where 🌳 = 5 trees, how would you represent 27 trees?",
        options: ["🌳🌳🌳🌳🌳", "🌳🌳🌳🌳🌳🌳", "🌳🌳🌳🌳🌳 and a half symbol", "🌳🌳🌳🌳🌳🌳 with a half symbol crossed out"],
        correctAnswer: "🌳🌳🌳🌳🌳 and a half symbol",
        explanation: "27 trees = 5 full symbols (5 × 5 = 25 trees) plus a half symbol (2 trees). So 🌳🌳🌳🌳🌳 plus half a 🌳.",
        wrongAnswerExplanations: {
            "🌳🌳🌳🌳🌳": "This represents only 25 trees, not 27.",
            "🌳🌳🌳🌳🌳🌳": "This represents 30 trees, which is too many.",
            "🌳🌳🌳🌳🌳🌳 with a half symbol crossed out": "This approach is confusing and incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch14_t3_qm12',
        type: "mcq",
        question: "A bar graph shows how many children walk to school each day: Monday: 25, Tuesday: 30, Wednesday: 20, Thursday: 35, Friday: 40. On which two consecutive days was there the biggest increase?",
        options: ["Monday to Tuesday", "Tuesday to Wednesday", "Wednesday to Thursday", "Thursday to Friday"],
        correctAnswer: "Thursday to Friday",
        explanation: "Monday to Tuesday: 30-25=5, Tuesday to Wednesday: 20-30=-10 (decrease), Wednesday to Thursday: 35-20=15, Thursday to Friday: 40-35=5. The biggest increase is 15, from Wednesday to Thursday.",
        wrongAnswerExplanations: {
            "Monday to Tuesday": "This had an increase of 5 children, not the biggest.",
            "Tuesday to Wednesday": "This had a decrease of 10 children, not an increase.",
            "Thursday to Friday": "This had an increase of 5 children, not the biggest."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch14_t3_qm13',
        type: "mcq",
        question: "A pictograph shows stars earned by students: Maya: ⭐⭐⭐, Jay: ⭐⭐⭐⭐⭐, Zara: ⭐⭐, Raj: ⭐⭐⭐⭐. If ⭐ = 2 points, what fraction of the total points did Jay earn?",
        options: ["5/14", "10/28", "2/7", "5/7"],
        correctAnswer: "5/14",
        explanation: "Total ⭐: 3+5+2+4=14 stars or 28 points. Jay has 5 stars (10 points), so the fraction is 5/14 (stars) or 10/28 (points), which simplifies to 5/14.",
        wrongAnswerExplanations: {
            "10/28": "This is correct numerically, but can be simplified to 5/14.",
            "2/7": "This calculation is incorrect.",
            "5/7": "This calculation is incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch14_t3_qm14',
        type: "mcq",
        question: "If a bar graph showing fruits sold has a scale where each 1 cm represents 5 fruits, how tall would the bar for 35 fruits be?",
        options: ["5 cm", "7 cm", "35 cm", "30 cm"],
        correctAnswer: "7 cm",
        explanation: "If 1 cm represents 5 fruits, then 35 fruits would be represented by 35 ÷ 5 = 7 cm.",
        wrongAnswerExplanations: {
            "5 cm": "This would represent 25 fruits, not 35.",
            "35 cm": "This ignores the scale; it would represent 175 fruits.",
            "30 cm": "This calculation is incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch14_t3_qm15',
        type: "mcq",
        question: "A pictograph showing weekly rainfall uses 💧 to represent 2mm of rain. If Monday had 3mm, Tuesday 7mm, Wednesday 4mm, Thursday 5mm, and Friday 6mm, how would the symbol for Tuesday look?",
        options: ["💧💧💧", "💧💧💧 and a half symbol", "💧💧", "💧💧💧💧"],
        correctAnswer: "💧💧💧 and a half symbol",
        explanation: "If 💧 = 2mm, then 7mm = 3 full symbols (3 × 2 = 6mm) plus a half symbol (1mm). So 💧💧💧 plus half a 💧.",
        wrongAnswerExplanations: {
            "💧💧💧": "This represents 6mm, not 7mm.",
            "💧💧": "This represents only 4mm, not 7mm.",
            "💧💧💧💧": "This represents 8mm, which is too much."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch14_t3_qm16',
        type: "mcq",
        question: "In a bar graph showing test scores of 5 students, if the average score is 80, and 4 students scored 75, 85, 90, and 80, what was the 5th student's score?",
        options: ["70", "75", "80", "85"],
        correctAnswer: "70",
        explanation: "Total of 5 scores = 5 × 80 = 400. Sum of known scores = 75 + 85 + 90 + 80 = 330. Fifth score = 400 - 330 = 70.",
        wrongAnswerExplanations: {
            "75": "This is one of the known scores, not the unknown 5th score.",
            "80": "This is one of the known scores, not the unknown 5th score.",
            "85": "This is one of the known scores, not the unknown 5th score."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch14_t3_qm17',
        type: "mcq",
        question: "A classroom has 30 students. A pictograph showing their favorite color uses ❤️ to represent 5 students. If 12 like red, 8 like blue, and the rest like yellow, how would the symbol for yellow look?",
        options: ["❤️❤️", "❤️❤️ and ❤️", "❤️ and a half symbol", "❤️❤️❤️"],
        correctAnswer: "❤️❤️",
        explanation: "Students who like yellow = 30 - 12 - 8 = 10 students. If ❤️ = 5 students, then 10 students = ❤️❤️ (2 × 5 = 10).",
        wrongAnswerExplanations: {
            "❤️❤️ and ❤️": "This would represent 15 students, which is too many.",
            "❤️ and a half symbol": "This would represent 7.5 students, which is too few.",
            "❤️❤️❤️": "This would represent 15 students, which is too many."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch14_t3_qm18',
        type: "mcq",
        question: "A bar graph shows the number of books sold per day: Monday: 35, Tuesday: 25, Wednesday: 40, Thursday: 30, Friday: 45. What is the ratio of books sold on Wednesday to Friday?",
        options: ["40:45", "8:9", "5:4", "4:5"],
        correctAnswer: "8:9",
        explanation: "Books sold on Wednesday = 40, Friday = 45. Ratio 40:45 simplifies to 8:9.",
        wrongAnswerExplanations: {
            "40:45": "This is correct but can be simplified further.",
            "5:4": "This is the ratio of Friday to Wednesday, not Wednesday to Friday.",
            "4:5": "This ratio is incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch14_t3_qm19',
        type: "mcq",
        question: "A pictograph showing children participating in activities uses 👦 to represent 3 children. If swimming shows 👦👦👦👦, dance shows 👦👦, music shows 👦👦👦, and art shows 👦👦👦👦👦, how many more children do art than dance?",
        options: ["3 children", "9 children", "6 children", "15 children"],
        correctAnswer: "9 children",
        explanation: "Dance: 👦👦 = 2 × 3 = 6 children. Art: 👦👦👦👦👦 = 5 × 3 = 15 children. Difference: 15 - 6 = 9 children.",
        wrongAnswerExplanations: {
            "3 children": "This is the difference in the number of symbols, not children.",
            "6 children": "This is the total for dance, not the difference.",
            "15 children": "This is the total for art, not the difference."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch14_t3_qm20',
        type: "mcq",
        question: "A bar graph shows marks scored by a student in different subjects out of 50: Math: 45, Science: 40, English: 35, Social Studies: 30, Art: 48. What is the total percentage scored by the student across all subjects?",
        options: ["198%", "79.2%", "39.6%", "83.6%"],
        correctAnswer: "79.2%",
        explanation: "Total marks = 45 + 40 + 35 + 30 + 48 = 198. Maximum possible = 5 × 50 = 250. Percentage = (198 ÷ 250) × 100 = 79.2%.",
        wrongAnswerExplanations: {
            "198%": "This is the total marks, not the percentage.",
            "39.6%": "This calculation is incorrect.",
            "83.6%": "This calculation is incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    }
];
