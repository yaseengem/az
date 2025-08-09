import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch14_t1_qm1',
        type: "mcq",
        question: "A survey was conducted to find out students' favorite sports. The results are: Football: 12, Cricket: 15, Basketball: 8, Tennis: 5. What is the total number of students surveyed?",
        options: ["35", "40", "30", "25"],
        correctAnswer: "40",
        explanation: "Add all the values: 12 + 15 + 8 + 5 = 40 students total. Data collection requires counting all participants.",
        wrongAnswerExplanations: {
            "35": "This is an incorrect sum. The correct addition is 12 + 15 + 8 + 5 = 40.",
            "30": "This is an incorrect sum. The correct addition is 12 + 15 + 8 + 5 = 40.",
            "25": "This is an incorrect sum. The correct addition is 12 + 15 + 8 + 5 = 40."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch14_t1_qm2',
        type: "mcq",
        question: "In a pictograph, if 🚗 represents 4 cars, how many cars are represented by 🚗🚗🚗🚗🚗?",
        options: ["9 cars", "20 cars", "15 cars", "5 cars"],
        correctAnswer: "20 cars",
        explanation: "If 🚗 = 4 cars, then 🚗🚗🚗🚗🚗 = 5 × 4 = 20 cars. Pictographs use symbols to represent multiple items.",
        wrongAnswerExplanations: {
            "9 cars": "Incorrect calculation. If each symbol represents 4 cars, 5 symbols represent 5 × 4 = 20 cars.",
            "15 cars": "Incorrect calculation. If each symbol represents 4 cars, 5 symbols represent 5 × 4 = 20 cars.",
            "5 cars": "This counts the number of symbols, not what they represent. Each symbol represents 4 cars."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch14_t1_qm3',
        type: "mcq",
        question: "The tally marks |||| |||| ||| were recorded for students' favorite colors. How many students were surveyed?",
        options: ["8", "12", "13", "3"],
        correctAnswer: "13",
        explanation: "Count the tally marks: The first group is 5, the second group is 5, and the third group is 3, for a total of 5 + 5 + 3 = 13.",
        wrongAnswerExplanations: {
            "8": "This is an incorrect count of the tally marks shown.",
            "12": "This is an incorrect count of the tally marks shown.",
            "3": "This counts the groups of tally marks, not the individual marks."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch14_t1_qm4',
        type: "mcq",
        question: "A teacher made this table showing how many students got different marks in a test:\nMarks: 5 | 6 | 7 | 8 | 9 | 10\nStudents: 3 | 5 | 8 | 7 | 4 | 3\nHow many students scored 7 or better?",
        options: ["15", "22", "30", "8"],
        correctAnswer: "22",
        explanation: "Students with 7 or better marks: 8 + 7 + 4 + 3 = 22. Tables help organize data for easy analysis.",
        wrongAnswerExplanations: {
            "15": "This doesn't include all students with marks of 7 or better.",
            "30": "This is the total number of students, not just those with marks of 7 or better.",
            "8": "This is only the number of students who got a mark of 7."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch14_t1_qm5',
        type: "mcq",
        question: "Look at this pictograph about books read:\nRam: 📚📚📚\nShyam: 📚📚\nPreeti: 📚📚📚📚\nNeha: 📚📚📚📚📚\nIf 📚 represents 2 books, who read exactly 8 books?",
        options: ["Ram", "Preeti", "Neha", "Shyam"],
        correctAnswer: "Preeti",
        explanation: "Preeti has 4 book symbols. If each 📚 = 2 books, then Preeti read 4 × 2 = 8 books.",
        wrongAnswerExplanations: {
            "Ram": "Ram has 3 book symbols, representing 3 × 2 = 6 books.",
            "Neha": "Neha has 5 book symbols, representing 5 × 2 = 10 books.",
            "Shyam": "Shyam has 2 book symbols, representing 2 × 2 = 4 books."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch14_t1_qm6',
        type: "mcq",
        question: "A survey recorded these fruits brought by students for lunch:\nApple: |||| |\nBanana: |||| ||||\nOrange: |||| ||\nGrapes: |||\nWhich fruit was brought by most students?",
        options: ["Apple", "Banana", "Orange", "Grapes"],
        correctAnswer: "Banana",
        explanation: "Banana has |||| |||| = 10 tally marks, the most among all fruits. Tally marks help count frequency.",
        wrongAnswerExplanations: {
            "Apple": "Apple has |||| | = 6 tally marks, not the most.",
            "Orange": "Orange has |||| || = 7 tally marks, not the most.",
            "Grapes": "Grapes has ||| = 3 tally marks, not the most."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch14_t1_qm7',
        type: "mcq",
        question: "Students in Class 4 were asked about their favorite subjects. The results were: Math: 8, Science: 12, English: 7, Art: 5, and PE: 8. What fraction of students chose Science as their favorite subject?",
        options: ["12/40", "12/5", "12/8", "5/40"],
        correctAnswer: "12/40",
        explanation: "Total students: 8 + 12 + 7 + 5 + 8 = 40. Fraction choosing Science: 12/40 = 3/10.",
        wrongAnswerExplanations: {
            "12/5": "This compares Science to Art, not to the total.",
            "12/8": "This compares Science to Math or PE, not to the total.",
            "5/40": "This is the fraction for Art, not Science."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch14_t1_qm8',
        type: "mcq",
        question: "In a class of 30 students, data was collected about eye color. If 15 students have brown eyes, 9 have black eyes, and the rest have blue eyes, how many students have blue eyes?",
        options: ["6", "15", "9", "24"],
        correctAnswer: "6",
        explanation: "Total students with known eye colors: 15 + 9 = 24. Students with blue eyes: 30 - 24 = 6.",
        wrongAnswerExplanations: {
            "15": "This is the number of students with brown eyes.",
            "9": "This is the number of students with black eyes.",
            "24": "This is the total of students with brown and black eyes."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch14_t1_qm9',
        type: "mcq",
        question: "A teacher recorded the number of siblings each student has:\n0 siblings: |||\n1 sibling: |||| |||\n2 siblings: |||| |\n3 siblings: ||\nWhat is the most common number of siblings?",
        options: ["0 siblings", "1 sibling", "2 siblings", "3 siblings"],
        correctAnswer: "1 sibling",
        explanation: "1 sibling has |||| ||| = 8 tally marks, the highest frequency in the data.",
        wrongAnswerExplanations: {
            "0 siblings": "0 siblings has ||| = 3 tally marks, not the highest.",
            "2 siblings": "2 siblings has |||| | = 6 tally marks, not the highest.",
            "3 siblings": "3 siblings has || = 2 tally marks, not the highest."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch14_t1_qm10',
        type: "mcq",
        question: "In a survey about favorite animals, each 🐶 in a pictograph represents 3 votes. If cats received 🐶🐶, dogs received 🐶🐶🐶, and rabbits received 🐶, how many more votes did dogs get than rabbits?",
        options: ["3", "6", "2", "9"],
        correctAnswer: "6",
        explanation: "Dogs: 🐶🐶🐶 = 3 × 3 = 9 votes. Rabbits: 🐶 = 1 × 3 = 3 votes. Difference: 9 - 3 = 6 votes.",
        wrongAnswerExplanations: {
            "3": "This is the number of votes for rabbits, not the difference.",
            "2": "This is the difference in the number of symbols, not votes.",
            "9": "This is the total votes for dogs, not the difference between dogs and rabbits."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch14_t1_qm11',
        type: "mcq",
        question: "In a class of 25 students, data was collected about transportation to school. 10 students walk, 8 come by bus, 5 come by car, and the rest come by bicycle. How many students come by bicycle?",
        options: ["2", "10", "7", "5"],
        correctAnswer: "2",
        explanation: "Students with known transportation: 10 + 8 + 5 = 23. Students by bicycle: 25 - 23 = 2.",
        wrongAnswerExplanations: {
            "10": "This is the number of students who walk to school.",
            "7": "This is not the correct calculation: 25 - (10 + 8 + 5) = 2, not 7.",
            "5": "This is the number of students who come by car."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch14_t1_qm12',
        type: "mcq",
        question: "A student collected data about the weather for 30 days in April. If there were 12 sunny days, 10 cloudy days, and 5 rainy days, how many days had mixed weather?",
        options: ["3", "5", "7", "13"],
        correctAnswer: "3",
        explanation: "Days with known weather: 12 + 10 + 5 = 27. Days with mixed weather: 30 - 27 = 3.",
        wrongAnswerExplanations: {
            "5": "This is the number of rainy days.",
            "7": "This is not the correct calculation: 30 - (12 + 10 + 5) = 3, not 7.",
            "13": "This is not the correct calculation: 30 - (12 + 10 + 5) = 3, not 13."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch14_t1_qm13',
        type: "mcq",
        question: "A pictograph shows information about fruits sold in a store. If 🍎 represents 5 kg, 🍌 represents 8 kg, and 🍊 represents 6 kg, and the store sold 🍎🍎🍎 of apples, 🍌🍌 of bananas, and 🍊🍊🍊🍊 of oranges, how many kilograms of fruit were sold in total?",
        options: ["15 kg", "50 kg", "89 kg", "79 kg"],
        correctAnswer: "89 kg",
        explanation: "Apples: 3 × 5 = 15 kg. Bananas: 2 × 8 = 16 kg. Oranges: 4 × 6 = 24 kg. Total: 15 + 16 + 24 = 55 kg.",
        wrongAnswerExplanations: {
            "15 kg": "This is only the weight of apples sold.",
            "50 kg": "This is an incorrect calculation of the total.",
            "79 kg": "This is an incorrect calculation of the total."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch14_t1_qm14',
        type: "mcq",
        question: "A teacher recorded the heights of students in centimeters: 120, 125, 122, 130, 128, 120, 124, 126, 120, 129. How many students are 120 cm tall?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "3",
        explanation: "Count the number of times 120 appears in the data: 120, 120, 120. It appears 3 times.",
        wrongAnswerExplanations: {
            "1": "The height 120 cm appears 3 times, not once.",
            "2": "The height 120 cm appears 3 times, not twice.",
            "4": "The height 120 cm appears 3 times, not 4 times."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch14_t1_qm15',
        type: "mcq",
        question: "A class collected data on the number of teeth lost by each student. The data is: 0, 2, 1, 3, 2, 0, 5, 2, 1, 4, 2, 1, 3, 2, 0. What is the mode of this data?",
        options: ["0", "1", "2", "3"],
        correctAnswer: "2",
        explanation: "The number 2 appears 5 times, more than any other value. Mode is the most frequent value in a dataset.",
        wrongAnswerExplanations: {
            "0": "0 appears 3 times, not the most frequent.",
            "1": "1 appears 3 times, not the most frequent.",
            "3": "3 appears 2 times, not the most frequent."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch14_t1_qm16',
        type: "mcq",
        question: "Students were asked to record the number of books they read last month. The results were: 2, 3, 1, 0, 4, 2, 3, 5, 2, 1, 3, 2, 0, 3, 2. Which number occurred most frequently?",
        options: ["1", "2", "3", "0"],
        correctAnswer: "2",
        explanation: "Count the frequency: 0 (2 times), 1 (2 times), 2 (5 times), 3 (4 times), 4 (1 time), 5 (1 time). 2 appears most often.",
        wrongAnswerExplanations: {
            "1": "1 appears 2 times, not the most frequent.",
            "3": "3 appears 4 times, not the most frequent.",
            "0": "0 appears 2 times, not the most frequent."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch14_t1_qm17',
        type: "mcq",
        question: "A survey about favorite colors shows: Red: |||| |, Blue: |||| |||, Green: |||| ||, Yellow: ||||. How many more students prefer Blue than Yellow?",
        options: ["3", "4", "5", "9"],
        correctAnswer: "4",
        explanation: "Blue has |||| ||| = 8 tally marks. Yellow has |||| = 5 tally marks. Difference: 8 - 5 = 3.",
        wrongAnswerExplanations: {
            "3": "This is not the correct calculation. Blue has 8 tally marks, Yellow has 5, so 8 - 5 = 3.",
            "5": "This is the count for Yellow, not the difference.",
            "9": "This is not the correct calculation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch14_t1_qm18',
        type: "mcq",
        question: "In a pictograph about pets, each 🐾 represents 3 pets. If dogs are shown as 🐾🐾🐾, cats as 🐾🐾, fish as 🐾🐾🐾🐾, and birds as 🐾, how many pets are represented in total?",
        options: ["10", "30", "40", "50"],
        correctAnswer: "30",
        explanation: "Dogs: 3 × 3 = 9, Cats: 2 × 3 = 6, Fish: 4 × 3 = 12, Birds: 1 × 3 = 3. Total: 9 + 6 + 12 + 3 = 30 pets.",
        wrongAnswerExplanations: {
            "10": "This counts the symbols, not what they represent.",
            "40": "This is an incorrect calculation of the total.",
            "50": "This is an incorrect calculation of the total."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch14_t1_qm19',
        type: "mcq",
        question: "Students recorded the number of siblings they have: 0 siblings: 4 students, 1 sibling: 8 students, 2 siblings: 6 students, 3 siblings: 2 students. What fraction of students have more than 1 sibling?",
        options: ["6/20", "8/20", "8/12", "8/10"],
        correctAnswer: "8/20",
        explanation: "Students with more than 1 sibling: 6 + 2 = 8. Total students: 4 + 8 + 6 + 2 = 20. Fraction: 8/20 = 2/5.",
        wrongAnswerExplanations: {
            "6/20": "This counts only students with 2 siblings, not all with more than 1.",
            "8/12": "This compares students with more than 1 sibling to those with 0 or 1 sibling.",
            "8/10": "This is an incorrect calculation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch14_t1_qm20',
        type: "mcq",
        question: "A class conducted a survey about favorite seasons. The results were: Spring: 8, Summer: 10, Autumn: 7, Winter: 5. If this data is shown in a pictograph where ☀️ represents 2 votes, how many ☀️ symbols will represent Winter?",
        options: ["2", "2.5", "5", "10"],
        correctAnswer: "2.5",
        explanation: "If ☀️ represents 2 votes, then 5 votes for Winter would be represented by 5 ÷ 2 = 2.5 ☀️ symbols.",
        wrongAnswerExplanations: {
            "2": "This is incorrect. 5 votes ÷ 2 votes per symbol = 2.5 symbols.",
            "5": "This would be correct if each symbol represented 1 vote, not 2.",
            "10": "This would be correct if each symbol represented 0.5 votes, not 2."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];
