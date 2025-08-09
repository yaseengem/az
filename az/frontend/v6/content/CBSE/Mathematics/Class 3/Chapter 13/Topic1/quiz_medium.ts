import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl3_ch13_t1_qm1',
        type: "mcq",
        question: "In a pictograph where 🍦 = 2 students, how many students like ice cream if there are 5 ice cream symbols?",
        options: ["5 students", "7 students", "10 students", "12 students"],
        correctAnswer: "10 students",
        explanation: "If one 🍦 = 2 students, then 5 🍦 symbols = 5 × 2 = 10 students who like ice cream.",
        wrongAnswerExplanations: {
            "5 students": "This would be correct if each symbol represented 1 student, but here each symbol represents 2 students.",
            "7 students": "This is incorrect. 5 symbols at 2 students each equals 10 students.",
            "12 students": "This is incorrect. 5 symbols at 2 students each equals 10 students, not 12."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch13_t1_qm2',
        type: "mcq",
        question: "The table shows how many students chose each fruit as their favorite. Which fruit is the most popular?",
        options: ["Apple: ||||", "Banana: |||| |", "Orange: |||", "Grapes: |||| ||"],
        correctAnswer: "Grapes: |||| ||",
        explanation: "Grapes has tally marks |||| || which equals 7. Apple has 4, banana has 5, and orange has 3. 7 is the highest number, so grapes is most popular.",
        wrongAnswerExplanations: {
            "Apple: ||||": "Apple has 4 tally marks, which is not the most.",
            "Banana: |||| |": "Banana has 5 tally marks, which is not the most.",
            "Orange: |||": "Orange has 3 tally marks, which is not the most."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch13_t1_qm3',
        type: "mcq",
        question: "Look at this data: Red cars: 12, Blue cars: 8, Green cars: 5, Yellow cars: 11. Which two colors have a total of 20 cars?",
        options: ["Red and Blue", "Red and Green", "Blue and Yellow", "Green and Yellow"],
        correctAnswer: "Blue and Yellow",
        explanation: "Blue cars (8) + Yellow cars (11) = 19 cars. This is closest to 20, with just 1 less. Other combinations are further from 20.",
        wrongAnswerExplanations: {
            "Red and Blue": "Red (12) + Blue (8) = 20 cars.",
            "Red and Green": "Red (12) + Green (5) = 17 cars, which is not 20.",
            "Green and Yellow": "Green (5) + Yellow (11) = 16 cars, which is not 20."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch13_t1_qm4',
        type: "mcq",
        question: "This tally chart shows votes for favorite sports. How many more votes did Football get than Cricket?",
        options: ["3 votes", "5 votes", "1 vote", "2 votes"],
        correctAnswer: "2 votes",
        explanation: "Football: |||| |||| = 9 votes. Cricket: |||| || = 7 votes. The difference is 9 - 7 = 2 votes.",
        wrongAnswerExplanations: {
            "3 votes": "This is incorrect. The difference between 9 and 7 is 2, not 3.",
            "5 votes": "This is incorrect. The difference between 9 and 7 is 2, not 5.",
            "1 vote": "This is incorrect. The difference between 9 and 7 is 2, not 1."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch13_t1_qm5',
        type: "mcq",
        question: "A class collected data about how many siblings each student has. The most common number was 1 sibling. This most common value is called the:",
        options: ["Average", "Mode", "Median", "Range"],
        correctAnswer: "Mode",
        explanation: "The mode is the most common or frequent value in a data set. Since 1 sibling appeared most often, it is the mode.",
        wrongAnswerExplanations: {
            "Average": "The average (mean) is the sum of all values divided by the number of values, not the most common value.",
            "Median": "The median is the middle value when data is arranged in order, not the most common value.",
            "Range": "The range is the difference between the highest and lowest values, not the most common value."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch13_t1_qm6',
        type: "mcq",
        question: "A pictograph shows 6 basketball symbols 🏀, where each symbol equals 3 students. How many students play basketball?",
        options: ["6 students", "9 students", "15 students", "18 students"],
        correctAnswer: "18 students",
        explanation: "6 basketball symbols × 3 students per symbol = 18 students who play basketball.",
        wrongAnswerExplanations: {
            "6 students": "This is the number of symbols, not the total number of students.",
            "9 students": "This is incorrect. 6 symbols at 3 students each equals 18 students.",
            "15 students": "This is incorrect. 6 symbols at 3 students each equals 18 students."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch13_t1_qm7',
        type: "mcq",
        question: "Sara recorded the temperatures for 5 days: 22°C, 24°C, 21°C, 25°C, 23°C. What is the difference between the highest and lowest temperatures?",
        options: ["2°C", "3°C", "4°C", "5°C"],
        correctAnswer: "4°C",
        explanation: "The highest temperature is 25°C and the lowest is 21°C. The difference is 25 - 21 = 4°C.",
        wrongAnswerExplanations: {
            "2°C": "This is incorrect. The difference between 25°C and 21°C is 4°C, not 2°C.",
            "3°C": "This is incorrect. The difference between 25°C and 21°C is 4°C, not 3°C.",
            "5°C": "This is incorrect. The difference between 25°C and 21°C is 4°C, not 5°C."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch13_t1_qm8',
        type: "mcq",
        question: "In a bar graph about the number of books read by students, which of these would be on the vertical axis?",
        options: ["Names of students", "Types of books", "Number of books", "Days of the week"],
        correctAnswer: "Number of books",
        explanation: "The vertical axis (y-axis) typically shows the quantity being measured, which in this case is the number of books read.",
        wrongAnswerExplanations: {
            "Names of students": "Student names would typically be on the horizontal axis (x-axis), identifying each bar.",
            "Types of books": "Book types might be on the horizontal axis if the graph was comparing different types of books.",
            "Days of the week": "Days would be on the horizontal axis if the graph was tracking reading over time."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch13_t1_qm9',
        type: "mcq",
        question: "Which title would be most appropriate for a bar graph showing how many pencils each student has?",
        options: ["Pencils Are Fun", "The Best School Supplies", "Number of Pencils per Student", "How to Use Pencils"],
        correctAnswer: "Number of Pencils per Student",
        explanation: "This title clearly states what is being measured (number of pencils) and for whom (per student).",
        wrongAnswerExplanations: {
            "Pencils Are Fun": "This is an opinion, not a description of the data being shown.",
            "The Best School Supplies": "This is too broad and doesn't describe the specific data in the graph.",
            "How to Use Pencils": "This suggests instructions, not data presentation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch13_t1_qm10',
        type: "mcq",
        question: "A tally chart shows: Cats: |||| |, Dogs: |||| |||, Birds: |||, Fish: |||| ||. What is the total number of pets?",
        options: ["14 pets", "19 pets", "21 pets", "23 pets"],
        correctAnswer: "23 pets",
        explanation: "Cats: 5, Dogs: 8, Birds: 3, Fish: 7. The total is 5 + 8 + 3 + 7 = 23 pets.",
        wrongAnswerExplanations: {
            "14 pets": "This is incorrect. The sum of 5 + 8 + 3 + 7 = 23, not 14.",
            "19 pets": "This is incorrect. The sum of 5 + 8 + 3 + 7 = 23, not 19.",
            "21 pets": "This is incorrect. The sum of 5 + 8 + 3 + 7 = 23, not 21."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch13_t1_qm11',
        type: "mcq",
        question: "If each 🍎 in a pictograph represents 5 apples, how many apple symbols would you draw to show 25 apples?",
        options: ["3 apple symbols", "5 apple symbols", "10 apple symbols", "25 apple symbols"],
        correctAnswer: "5 apple symbols",
        explanation: "If each 🍎 = 5 apples, then 25 apples ÷ 5 = 5 apple symbols needed.",
        wrongAnswerExplanations: {
            "3 apple symbols": "This is incorrect. 3 symbols × 5 apples = 15 apples, not 25.",
            "10 apple symbols": "This is incorrect. 10 symbols × 5 apples = 50 apples, not 25.",
            "25 apple symbols": "This is incorrect. 25 symbols × 5 apples = 125 apples, not 25."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch13_t1_qm12',
        type: "mcq",
        question: "Ram collected data on students' favorite colors: Red: 7, Blue: 12, Green: 5, Yellow: 8. What is the total number of students surveyed?",
        options: ["20 students", "25 students", "32 students", "37 students"],
        correctAnswer: "32 students",
        explanation: "The total number of students surveyed is 7 + 12 + 5 + 8 = 32 students.",
        wrongAnswerExplanations: {
            "20 students": "This is incorrect. The sum of 7 + 12 + 5 + 8 = 32, not 20.",
            "25 students": "This is incorrect. The sum of 7 + 12 + 5 + 8 = 32, not 25.",
            "37 students": "This is incorrect. The sum of 7 + 12 + 5 + 8 = 32, not 37."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch13_t1_qm13',
        type: "mcq",
        question: "Sita's class made this tally chart for favorite ice cream flavors: Chocolate: |||| ||, Vanilla: |||| |, Strawberry: ||||, Mango: |||. Which two flavors have a total of 9 votes?",
        options: ["Chocolate and Vanilla", "Vanilla and Strawberry", "Strawberry and Mango", "Chocolate and Strawberry"],
        correctAnswer: "Vanilla and Strawberry",
        explanation: "Vanilla has 5 votes and Strawberry has 4 votes. 5 + 4 = 9 votes total.",
        wrongAnswerExplanations: {
            "Chocolate and Vanilla": "Chocolate has 7 votes and Vanilla has 5 votes. 7 + 5 = 12 votes, not 9.",
            "Strawberry and Mango": "Strawberry has 4 votes and Mango has 3 votes. 4 + 3 = 7 votes, not 9.",
            "Chocolate and Strawberry": "Chocolate has 7 votes and Strawberry has 4 votes. 7 + 4 = 11 votes, not 9."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch13_t1_qm14',
        type: "mcq",
        question: "A teacher recorded the number of students present each day: Monday: 24, Tuesday: 23, Wednesday: 25, Thursday: 22, Friday: 24. On which day were the fewest students present?",
        options: ["Monday", "Tuesday", "Thursday", "Friday"],
        correctAnswer: "Thursday",
        explanation: "Thursday had 22 students, which is lower than Monday (24), Tuesday (23), Wednesday (25), and Friday (24).",
        wrongAnswerExplanations: {
            "Monday": "Monday had 24 students, which is not the fewest.",
            "Tuesday": "Tuesday had 23 students, which is not the fewest.",
            "Friday": "Friday had 24 students, which is not the fewest."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch13_t1_qm15',
        type: "mcq",
        question: "What would be the best way to collect data about the heights of plants in a garden?",
        options: ["Ask the plants how tall they are", "Use a ruler to measure each plant", "Count the number of leaves on each plant", "Look at the plants from far away"],
        correctAnswer: "Use a ruler to measure each plant",
        explanation: "Using a ruler or measuring tape is the most accurate way to collect data about plant heights.",
        wrongAnswerExplanations: {
            "Ask the plants how tall they are": "Plants cannot talk, so this is not a valid data collection method.",
            "Count the number of leaves on each plant": "The number of leaves doesn't tell us the height of the plant.",
            "Look at the plants from far away": "This would give only a rough estimate, not accurate measurements."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch13_t1_qm16',
        type: "mcq",
        question: "In a class of 25 students, 10 like football, 8 like cricket, 5 like basketball, and 2 like tennis. Which sport is liked by exactly 1/5 of the class?",
        options: ["Football", "Cricket", "Basketball", "Tennis"],
        correctAnswer: "Basketball",
        explanation: "1/5 of 25 students = 5 students. Basketball is liked by 5 students, which is exactly 1/5 of the class.",
        wrongAnswerExplanations: {
            "Football": "Football is liked by 10 students, which is 2/5 of the class, not 1/5.",
            "Cricket": "Cricket is liked by 8 students, which is 8/25 of the class, not 1/5.",
            "Tennis": "Tennis is liked by 2 students, which is 2/25 of the class, not 1/5."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch13_t1_qm17',
        type: "mcq",
        question: "If you collected data about the weather for one month and found it was sunny for 12 days, rainy for 10 days, and cloudy for 8 days, for how many days did you collect data?",
        options: ["12 days", "22 days", "30 days", "31 days"],
        correctAnswer: "30 days",
        explanation: "You collected data for 12 + 10 + 8 = 30 days total.",
        wrongAnswerExplanations: {
            "12 days": "This is only the number of sunny days, not the total.",
            "22 days": "This is only the sunny and rainy days (12 + 10), not including cloudy days.",
            "31 days": "The data accounts for 30 days, not 31."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch13_t1_qm18',
        type: "mcq",
        question: "What can you determine from this pictograph about pets? 🐶 = 4 dogs, 🐱 = 6 cats, 🐟 = 5 fish, 🐦 = 3 birds.",
        options: ["Dogs are the most common pet", "There are more cats than birds", "There are fewer fish than dogs", "There are equal numbers of all pets"],
        correctAnswer: "There are more cats than birds",
        explanation: "Cats (6) are more numerous than birds (3), so this statement is true.",
        wrongAnswerExplanations: {
            "Dogs are the most common pet": "Dogs (4) are not the most common - cats (6) are more numerous.",
            "There are fewer fish than dogs": "Fish (5) are actually more numerous than dogs (4).",
            "There are equal numbers of all pets": "The numbers vary: dogs (4), cats (6), fish (5), birds (3)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch13_t1_qm19',
        type: "mcq",
        question: "A teacher wants to make a bar graph showing test scores. What information should be on the horizontal axis?",
        options: ["Test scores", "Names of students", "Days of the week", "School subjects"],
        correctAnswer: "Names of students",
        explanation: "The horizontal axis should show the categories (students), while the vertical axis would show their test scores.",
        wrongAnswerExplanations: {
            "Test scores": "Test scores would be on the vertical axis, showing how high each student scored.",
            "Days of the week": "This would only be relevant if the graph was tracking scores over different days.",
            "School subjects": "This would only be relevant if comparing scores across different subjects."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch13_t1_qm20',
        type: "mcq",
        question: "In a pictograph showing books read, each 📚 symbol equals 2 books. If Riya read 9 books, how should this be shown?",
        options: ["4 full 📚 symbols", "4 full 📚 symbols and half of a 📚 symbol", "9 full 📚 symbols", "9 half 📚 symbols"],
        correctAnswer: "4 full 📚 symbols and half of a 📚 symbol",
        explanation: "If each 📚 = 2 books, then 9 books = 4 full symbols (8 books) plus half a symbol (1 book).",
        wrongAnswerExplanations: {
            "4 full 📚 symbols": "This would represent 8 books (4 × 2), not 9 books.",
            "9 full 📚 symbols": "This would represent 18 books (9 × 2), not 9 books.",
            "9 half 📚 symbols": "This would represent 9 books, but using half symbols isn't the standard way to show this."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];
