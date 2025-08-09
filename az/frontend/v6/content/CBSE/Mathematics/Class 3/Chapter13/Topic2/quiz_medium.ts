import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl3_ch13_t2_qm1',
        type: "mcq",
        question: "A pictograph shows students' favorite fruits. If there are 6 apple symbols 🍎 and each symbol represents 3 students, how many students chose apples?",
        options: ["6 students", "12 students", "15 students", "18 students"],
        correctAnswer: "18 students",
        explanation: "6 apple symbols × 3 students per symbol = 18 students who chose apples.",
        wrongAnswerExplanations: {
            "6 students": "This is the number of symbols, not the total number of students.",
            "12 students": "Incorrect calculation. 6 × 3 = 18, not 12.",
            "15 students": "Incorrect calculation. 6 × 3 = 18, not 15."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch13_t2_qm2',
        type: "mcq",
        question: "In a bar graph showing the number of books read by students, Ravi's bar is at 8 and Meera's bar is at 12. How many more books did Meera read than Ravi?",
        options: ["3 books", "4 books", "5 books", "20 books"],
        correctAnswer: "4 books",
        explanation: "Meera read 12 books and Ravi read 8 books. The difference is 12 - 8 = 4 books.",
        wrongAnswerExplanations: {
            "3 books": "Incorrect calculation. 12 - 8 = 4, not 3.",
            "5 books": "Incorrect calculation. 12 - 8 = 4, not 5.",
            "20 books": "This is the sum (12 + 8), not the difference."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch13_t2_qm3',
        type: "mcq",
        question: "A pictograph uses half symbols. If one full pencil ✏️ represents 4 pencils, what does half a pencil symbol represent?",
        options: ["1 pencil", "2 pencils", "3 pencils", "4 pencils"],
        correctAnswer: "2 pencils",
        explanation: "If a full symbol = 4 pencils, then half a symbol = 4 ÷ 2 = 2 pencils.",
        wrongAnswerExplanations: {
            "1 pencil": "Incorrect calculation. Half of 4 is 2, not 1.",
            "3 pencils": "Incorrect calculation. Half of 4 is 2, not 3.",
            "4 pencils": "This is what a full symbol represents, not half a symbol."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch13_t2_qm4',
        type: "mcq",
        question: "Which title would be most appropriate for a bar graph showing the number of students in different grades?",
        options: ["Colors of School Uniforms", "School Enrollment by Grade", "Names of Teachers", "School Building Height"],
        correctAnswer: "School Enrollment by Grade",
        explanation: "This title clearly describes the data being shown: number of students in each grade.",
        wrongAnswerExplanations: {
            "Colors of School Uniforms": "This doesn't relate to student numbers in grades.",
            "Names of Teachers": "This doesn't relate to student numbers in grades.",
            "School Building Height": "This doesn't relate to student numbers in grades."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch13_t2_qm5',
        type: "mcq",
        question: "A class recorded their favorite colors in this tally chart: Red: |||| ||, Blue: |||| ||||, Green: ||||, Yellow: |||. Which color is the most popular?",
        options: ["Red", "Blue", "Green", "Yellow"],
        correctAnswer: "Blue",
        explanation: "Blue has 10 tally marks, Red has 7, Green has 5, and Yellow has 3. Blue has the most.",
        wrongAnswerExplanations: {
            "Red": "Red has 7 tally marks, which is not the most.",
            "Green": "Green has 5 tally marks, which is not the most.",
            "Yellow": "Yellow has 3 tally marks, which is not the most."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch13_t2_qm6',
        type: "mcq",
        question: "In a bar graph, what should be labeled on the vertical axis?",
        options: ["Only colors", "The title of the graph", "The scale and what is being measured", "The date the graph was made"],
        correctAnswer: "The scale and what is being measured",
        explanation: "The vertical axis should show the scale and unit of measurement (e.g., 'Number of Students').",
        wrongAnswerExplanations: {
            "Only colors": "Colors don't belong on the axis labels.",
            "The title of the graph": "The title goes at the top of the graph, not on the axis.",
            "The date the graph was made": "This would be in a caption, not on the axis."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch13_t2_qm7',
        type: "mcq",
        question: "A pictograph shows 8 full ice cream symbols 🍦 and 1 half symbol. If each full symbol is 2 ice creams, how many ice creams are shown in total?",
        options: ["8 ice creams", "9 ice creams", "16 ice creams", "17 ice creams"],
        correctAnswer: "17 ice creams",
        explanation: "8 full symbols × 2 = 16 ice creams, plus 1 more for half symbol (1), equals 17 total.",
        wrongAnswerExplanations: {
            "8 ice creams": "This only counts the number of full symbols, not what they represent.",
            "9 ice creams": "This counts the symbols (8.5) but not what they represent (17).",
            "16 ice creams": "This doesn't include the half symbol, which represents 1 more ice cream."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch13_t2_qm8',
        type: "mcq",
        question: "Look at the data: Monday: 5, Tuesday: 8, Wednesday: 10, Thursday: 7, Friday: 6. On which two days is the total 15?",
        options: ["Monday and Tuesday", "Monday and Friday", "Tuesday and Thursday", "Wednesday and Friday"],
        correctAnswer: "Tuesday and Thursday",
        explanation: "Tuesday (8) + Thursday (7) = 15.",
        wrongAnswerExplanations: {
            "Monday and Tuesday": "Monday (5) + Tuesday (8) = 13, not 15.",
            "Monday and Friday": "Monday (5) + Friday (6) = 11, not 15.",
            "Wednesday and Friday": "Wednesday (10) + Friday (6) = 16, not 15."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch13_t2_qm9',
        type: "mcq",
        question: "A bar graph shows students' test scores out of 10. If the average score is 7, which of these student scores is above average?",
        options: ["5 points", "6 points", "7 points", "8 points"],
        correctAnswer: "8 points",
        explanation: "A score of 8 is greater than the average of 7, so it's above average.",
        wrongAnswerExplanations: {
            "5 points": "This is below the average of 7.",
            "6 points": "This is below the average of 7.",
            "7 points": "This equals the average, so it's not above average."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch13_t2_qm10',
        type: "mcq",
        question: "In a pictograph about favorite sports, 1 full football symbol ⚽ represents 5 students. How would you show 13 students who like football?",
        options: ["2 full symbols and 1 half symbol", "3 full symbols", "2 full symbols and 3 half symbols", "13 full symbols"],
        correctAnswer: "2 full symbols and 3 half symbols",
        explanation: "2 full symbols = 10 students. For 3 more students, we need 3/5 of a symbol (3 half symbols).",
        wrongAnswerExplanations: {
            "2 full symbols and 1 half symbol": "This would represent 12.5 students, not 13.",
            "3 full symbols": "This would represent 15 students, not 13.",
            "13 full symbols": "This would represent 65 students, not 13."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch13_t2_qm11',
        type: "mcq",
        question: "What do we call the process of collecting information to make a graph?",
        options: ["Graphing", "Data collection", "Axis making", "Bar raising"],
        correctAnswer: "Data collection",
        explanation: "Data collection is the process of gathering information before creating a graph.",
        wrongAnswerExplanations: {
            "Graphing": "This refers to making the graph itself, not collecting the information.",
            "Axis making": "This refers to creating the framework of the graph, not collecting data.",
            "Bar raising": "This isn't a real term for data or graph creation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch13_t2_qm12',
        type: "mcq",
        question: "A pictograph shows the number of books students read. If 3 book symbols 📚 represent 6 books, how many books do 7 book symbols represent?",
        options: ["7 books", "10 books", "14 books", "21 books"],
        correctAnswer: "14 books",
        explanation: "If 3 symbols = 6 books, 1 symbol = 2 books. So 7 symbols = 7 × 2 = 14 books.",
        wrongAnswerExplanations: {
            "7 books": "This counts the symbols, not what they represent.",
            "10 books": "Incorrect calculation. If 1 symbol = 2 books, 7 symbols = 14 books, not 10.",
            "21 books": "Incorrect calculation. If 1 symbol = 2 books, 7 symbols = 14 books, not 21."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch13_t2_qm13',
        type: "mcq",
        question: "A class survey about favorite fruits is shown in a bar graph. If 15 students chose apples and 10 chose bananas, how many more students chose apples than bananas?",
        options: ["5 students", "10 students", "15 students", "25 students"],
        correctAnswer: "5 students",
        explanation: "15 students chose apples and 10 chose bananas. The difference is 15 - 10 = 5 students.",
        wrongAnswerExplanations: {
            "10 students": "This is how many chose bananas, not the difference.",
            "15 students": "This is how many chose apples, not the difference.",
            "25 students": "This is the total (15 + 10), not the difference."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch13_t2_qm14',
        type: "mcq",
        question: "What would be the best scale to use on the vertical axis of a bar graph if the values range from 0 to 24?",
        options: ["0 to 10", "0 to 25, counting by 5s", "0 to 100", "0 to 5"],
        correctAnswer: "0 to 25, counting by 5s",
        explanation: "A scale from 0 to 25 counting by 5s (0, 5, 10, 15, 20, 25) would best fit data up to 24.",
        wrongAnswerExplanations: {
            "0 to 10": "This is too small to show values up to 24.",
            "0 to 100": "This is too large and would make the bars appear very small.",
            "0 to 5": "This is much too small to show values up to 24."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch13_t2_qm15',
        type: "mcq",
        question: "A pictograph uses 🏀 to show students who play basketball. If 4 full symbols represent 20 students, how many students does 1 full symbol represent?",
        options: ["4 students", "5 students", "10 students", "20 students"],
        correctAnswer: "5 students",
        explanation: "If 4 symbols = 20 students, then 1 symbol = 20 ÷ 4 = 5 students.",
        wrongAnswerExplanations: {
            "4 students": "Incorrect calculation. 20 ÷ 4 = 5, not 4.",
            "10 students": "Incorrect calculation. 20 ÷ 4 = 5, not 10.",
            "20 students": "This is what 4 symbols represent, not 1 symbol."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch13_t2_qm16',
        type: "mcq",
        question: "A bar graph shows test scores for 5 subjects. If Math is 85, Science is 90, English is 80, Social Studies is 75, and Art is 95, what is the difference between the highest and lowest scores?",
        options: ["5 points", "10 points", "15 points", "20 points"],
        correctAnswer: "20 points",
        explanation: "Highest score is Art at 95, lowest is Social Studies at 75. The difference is 95 - 75 = 20 points.",
        wrongAnswerExplanations: {
            "5 points": "Incorrect calculation. The difference between 95 and 75 is 20, not 5.",
            "10 points": "Incorrect calculation. The difference between 95 and 75 is 20, not 10.",
            "15 points": "Incorrect calculation. The difference between 95 and 75 is 20, not 15."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch13_t2_qm17',
        type: "mcq",
        question: "In a pictograph showing library books borrowed, each 📚 = 10 books. What is the correct way to show 45 books?",
        options: ["4 full symbols and 1 half symbol", "4 full symbols and 5 half symbols", "4.5 symbols", "45 symbols"],
        correctAnswer: "4 full symbols and 1 half symbol",
        explanation: "4 full symbols = 40 books. Half a symbol = 5 books. Total: 45 books.",
        wrongAnswerExplanations: {
            "4 full symbols and 5 half symbols": "This would represent 65 books (40 + 25), not 45.",
            "4.5 symbols": "This is correct mathematically but not how pictographs are displayed.",
            "45 symbols": "This would represent 450 books, not 45."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch13_t2_qm18',
        type: "mcq",
        question: "A class collected this tally data of favorite sports: Cricket: |||| ||, Football: |||| |||, Hockey: ||||, Tennis: |||. How many students were surveyed in total?",
        options: ["15 students", "20 students", "22 students", "25 students"],
        correctAnswer: "22 students",
        explanation: "Cricket: 7, Football: 8, Hockey: 4, Tennis: 3. Total: 7 + 8 + 4 + 3 = 22 students.",
        wrongAnswerExplanations: {
            "15 students": "Incorrect calculation. The sum of 7 + 8 + 4 + 3 = 22, not 15.",
            "20 students": "Incorrect calculation. The sum of 7 + 8 + 4 + 3 = 22, not 20.",
            "25 students": "Incorrect calculation. The sum of 7 + 8 + 4 + 3 = 22, not 25."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch13_t2_qm19',
        type: "mcq",
        question: "If you need to represent the heights of plants in a garden over time, which type of graph would be best?",
        options: ["Pictograph", "Bar graph", "Tally chart", "Word description"],
        correctAnswer: "Bar graph",
        explanation: "A bar graph can clearly show and compare different heights using the vertical scale.",
        wrongAnswerExplanations: {
            "Pictograph": "Pictographs are better for showing quantities of discrete items, not measurements.",
            "Tally chart": "Tally charts count occurrences but don't show measurements well.",
            "Word description": "This wouldn't provide a visual comparison of the heights."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch13_t2_qm20',
        type: "mcq",
        question: "In a pictograph where each 🏠 represents 4 houses, how many symbols would you need to show 30 houses?",
        options: ["6 house symbols", "7 house symbols", "7.5 house symbols", "30 house symbols"],
        correctAnswer: "7.5 house symbols",
        explanation: "30 houses ÷ 4 houses per symbol = 7.5 symbols (7 full and 1 half symbol).",
        wrongAnswerExplanations: {
            "6 house symbols": "This would only represent 24 houses (6 × 4), not 30.",
            "7 house symbols": "This would only represent 28 houses (7 × 4), not 30.",
            "30 house symbols": "This would represent 120 houses (30 × 4), not 30."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];
