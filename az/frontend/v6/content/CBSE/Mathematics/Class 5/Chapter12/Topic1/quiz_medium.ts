import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl5_ch12_t1_qm1',
        type: "mcq",
        question: "In a pictograph showing monthly rainfall, if 🌧️ represents 5 cm of rain, how much rain fell in a month with 🌧️🌧️🌧️🌧️🌧️🌧️?",
        options: ["25 cm", "30 cm", "35 cm", "40 cm"],
        correctAnswer: "30 cm",
        explanation: "6 raindrops × 5 cm = 30 cm of rainfall. 🌧️",
        wrongAnswerExplanations: {
            "25 cm": "This would be for five symbols, not six.",
            "35 cm": "This would be for seven symbols, not six.",
            "40 cm": "This would be for eight symbols, not six."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t1_qm2',
        type: "mcq",
        question: "If a bar graph shows the number of books read by students in different grades, and Grade 5's bar reaches 15 on the y-axis, what does this mean?",
        options: ["15 students read books", "15 books were read", "15 minutes spent reading", "15 different types of books"],
        correctAnswer: "15 books were read",
        explanation: "The y-axis shows the quantity being measured, which is the number of books. 📚",
        wrongAnswerExplanations: {
            "15 students read books": "The graph shows books read, not number of students.",
            "15 minutes spent reading": "Time is not shown on this graph.",
            "15 different types of books": "The graph shows quantity, not variety."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t1_qm3',
        type: "mcq",
        question: "In a pictograph showing favorite pets, if 🐶 represents 4 students and there are 🐶🐶🐶🐶🐶, how many more students like dogs than cats if there are 🐱🐱🐱 for cats?",
        options: ["8 more", "12 more", "16 more", "20 more"],
        correctAnswer: "8 more",
        explanation: "Dogs: 5 × 4 = 20 students; Cats: 3 × 4 = 12 students; Difference: 20 - 12 = 8 students. 🐕",
        wrongAnswerExplanations: {
            "12 more": "This is the number of students who like cats, not the difference.",
            "16 more": "This is the number of students who like dogs, not the difference.",
            "20 more": "This is the total for dogs, not the difference."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t1_qm4',
        type: "mcq",
        question: "If a bar graph shows the number of students in different sports teams, and the basketball team's bar is twice as tall as the soccer team's bar, what does this mean?",
        options: ["Basketball is more popular", "Basketball has twice as many players", "Basketball practice is longer", "Basketball scores are higher"],
        correctAnswer: "Basketball has twice as many players",
        explanation: "The height of the bars represents the quantity being measured, which is the number of players. 🏀",
        wrongAnswerExplanations: {
            "Basketball is more popular": "Popularity is not directly shown by the graph.",
            "Basketball practice is longer": "Practice time is not shown on this graph.",
            "Basketball scores are higher": "Scores are not shown on this graph."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t1_qm5',
        type: "mcq",
        question: "In a pictograph showing favorite colors, if 🟥 represents 3 students and there are 🟥🟥🟥🟥, how many students like red if blue has 🟦🟦🟦🟦🟦?",
        options: ["3 more like blue", "6 more like blue", "9 more like blue", "12 more like blue"],
        correctAnswer: "6 more like blue",
        explanation: "Red: 4 × 3 = 12 students; Blue: 5 × 3 = 15 students; Difference: 15 - 12 = 3 more students. 🎨",
        wrongAnswerExplanations: {
            "3 more like blue": "This is the difference in number of symbols, not students.",
            "9 more like blue": "This is the total for blue, not the difference.",
            "12 more like blue": "This is the total for red, not the difference."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t1_qm6',
        type: "mcq",
        question: "If a bar graph shows the number of books read each month, and January's bar reaches 10 while February's reaches 15, what is the difference?",
        options: ["5 books", "10 books", "15 books", "25 books"],
        correctAnswer: "5 books",
        explanation: "15 books (February) - 10 books (January) = 5 more books. 📚",
        wrongAnswerExplanations: {
            "10 books": "This is January's total, not the difference.",
            "15 books": "This is February's total, not the difference.",
            "25 books": "This is the sum, not the difference."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t1_qm7',
        type: "mcq",
        question: "In a pictograph showing favorite fruits, if 🍎 represents 2 students and there are 🍎🍎🍎🍎🍎, how many students like apples if oranges have 🍊🍊🍊?",
        options: ["2 more like apples", "4 more like apples", "6 more like apples", "8 more like apples"],
        correctAnswer: "4 more like apples",
        explanation: "Apples: 5 × 2 = 10 students; Oranges: 3 × 2 = 6 students; Difference: 10 - 6 = 4 more students. 🍎",
        wrongAnswerExplanations: {
            "2 more like apples": "This is the difference in number of symbols, not students.",
            "6 more like apples": "This is the total for oranges, not the difference.",
            "8 more like apples": "This is the total for apples, not the difference."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t1_qm8',
        type: "mcq",
        question: "If a bar graph shows the height of plants in centimeters, and Plant A's bar reaches 20 while Plant B's reaches 30, what is the ratio of their heights?",
        options: ["1:2", "2:3", "3:4", "4:5"],
        correctAnswer: "2:3",
        explanation: "Plant A: 20 cm, Plant B: 30 cm; Ratio = 20:30 = 2:3. 🌱",
        wrongAnswerExplanations: {
            "1:2": "This would be if Plant A was 15 cm and Plant B was 30 cm.",
            "3:4": "This would be if Plant A was 22.5 cm and Plant B was 30 cm.",
            "4:5": "This would be if Plant A was 24 cm and Plant B was 30 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t1_qm9',
        type: "mcq",
        question: "In a pictograph showing favorite sports, if ⚽ represents 4 students and there are ⚽⚽⚽⚽, how many students like soccer if basketball has 🏀🏀🏀🏀🏀?",
        options: ["4 more like basketball", "8 more like basketball", "12 more like basketball", "16 more like basketball"],
        correctAnswer: "4 more like basketball",
        explanation: "Soccer: 4 × 4 = 16 students; Basketball: 5 × 4 = 20 students; Difference: 20 - 16 = 4 more students. 🏀",
        wrongAnswerExplanations: {
            "8 more like basketball": "This is the difference in number of symbols, not students.",
            "12 more like basketball": "This is the total for soccer, not the difference.",
            "16 more like basketball": "This is the total for basketball, not the difference."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t1_qm10',
        type: "mcq",
        question: "If a bar graph shows the number of students in different grades, and Grade 4 has 25 students while Grade 5 has 35 students, what percentage more students are in Grade 5?",
        options: ["10%", "20%", "30%", "40%"],
        correctAnswer: "40%",
        explanation: "Difference = 35 - 25 = 10 students; Percentage = (10/25) × 100 = 40%. 📊",
        wrongAnswerExplanations: {
            "10%": "This would be if Grade 5 had 27.5 students.",
            "20%": "This would be if Grade 5 had 30 students.",
            "30%": "This would be if Grade 5 had 32.5 students."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t1_qm11',
        type: "mcq",
        question: "In a pictograph showing favorite colors, if 🟡 represents 3 students and there are 🟡🟡🟡🟡, how many students like yellow if green has 🟢🟢🟢🟢🟢?",
        options: ["3 more like green", "6 more like green", "9 more like green", "12 more like green"],
        correctAnswer: "3 more like green",
        explanation: "Yellow: 4 × 3 = 12 students; Green: 5 × 3 = 15 students; Difference: 15 - 12 = 3 more students. 🎨",
        wrongAnswerExplanations: {
            "6 more like green": "This is the difference in number of symbols, not students.",
            "9 more like green": "This is the total for yellow, not the difference.",
            "12 more like green": "This is the total for green, not the difference."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t1_qm12',
        type: "mcq",
        question: "If a bar graph shows the number of books read each month, and March's bar is 1.5 times taller than April's bar which reaches 20, how many books were read in March?",
        options: ["25 books", "30 books", "35 books", "40 books"],
        correctAnswer: "30 books",
        explanation: "April: 20 books; March: 20 × 1.5 = 30 books. 📚",
        wrongAnswerExplanations: {
            "25 books": "This would be if March was 1.25 times April.",
            "35 books": "This would be if March was 1.75 times April.",
            "40 books": "This would be if March was 2 times April."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t1_qm13',
        type: "mcq",
        question: "In a pictograph showing favorite fruits, if 🍓 represents 2 students and there are 🍓🍓🍓🍓, how many students like strawberries if bananas have 🍌🍌🍌🍌🍌🍌?",
        options: ["4 more like bananas", "8 more like bananas", "12 more like bananas", "16 more like bananas"],
        correctAnswer: "4 more like bananas",
        explanation: "Strawberries: 4 × 2 = 8 students; Bananas: 6 × 2 = 12 students; Difference: 12 - 8 = 4 more students. 🍌",
        wrongAnswerExplanations: {
            "8 more like bananas": "This is the difference in number of symbols, not students.",
            "12 more like bananas": "This is the total for bananas, not the difference.",
            "16 more like bananas": "This is twice the total for strawberries, not the difference."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t1_qm14',
        type: "mcq",
        question: "If a bar graph shows the height of plants in centimeters, and Plant X's bar reaches 15 while Plant Y's reaches 25, what is the average height?",
        options: ["15 cm", "20 cm", "25 cm", "30 cm"],
        correctAnswer: "20 cm",
        explanation: "Average = (15 + 25) ÷ 2 = 20 cm. 🌱",
        wrongAnswerExplanations: {
            "15 cm": "This is Plant X's height, not the average.",
            "25 cm": "This is Plant Y's height, not the average.",
            "30 cm": "This is the sum, not the average."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t1_qm15',
        type: "mcq",
        question: "In a pictograph showing favorite pets, if 🐱 represents 3 students and there are 🐱🐱🐱🐱, how many students like cats if dogs have 🐶🐶🐶🐶🐶?",
        options: ["3 more like dogs", "6 more like dogs", "9 more like dogs", "12 more like dogs"],
        correctAnswer: "3 more like dogs",
        explanation: "Cats: 4 × 3 = 12 students; Dogs: 5 × 3 = 15 students; Difference: 15 - 12 = 3 more students. 🐕",
        wrongAnswerExplanations: {
            "6 more like dogs": "This is the difference in number of symbols, not students.",
            "9 more like dogs": "This is the total for cats, not the difference.",
            "12 more like dogs": "This is the total for dogs, not the difference."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t1_qm16',
        type: "mcq",
        question: "If a bar graph shows the number of students in different grades, and Grade 3 has 20 students while Grade 4 has 30 students, what is the total number of students?",
        options: ["40 students", "45 students", "50 students", "55 students"],
        correctAnswer: "50 students",
        explanation: "Total = 20 + 30 = 50 students. 👥",
        wrongAnswerExplanations: {
            "40 students": "This would be if Grade 4 had 20 students.",
            "45 students": "This would be if Grade 4 had 25 students.",
            "55 students": "This would be if Grade 4 had 35 students."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t1_qm17',
        type: "mcq",
        question: "In a pictograph showing favorite colors, if 🟦 represents 4 students and there are 🟦🟦🟦, how many students like blue if red has 🟥🟥🟥🟥?",
        options: ["4 more like red", "8 more like red", "12 more like red", "16 more like red"],
        correctAnswer: "4 more like red",
        explanation: "Blue: 3 × 4 = 12 students; Red: 4 × 4 = 16 students; Difference: 16 - 12 = 4 more students. 🎨",
        wrongAnswerExplanations: {
            "8 more like red": "This is the difference in number of symbols, not students.",
            "12 more like red": "This is the total for blue, not the difference.",
            "16 more like red": "This is the total for red, not the difference."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t1_qm18',
        type: "mcq",
        question: "If a bar graph shows the number of books read each month, and January's bar reaches 15 while February's reaches 25, what is the percentage increase?",
        options: ["50%", "60%", "66.67%", "75%"],
        correctAnswer: "66.67%",
        explanation: "Increase = 25 - 15 = 10 books; Percentage = (10/15) × 100 ≈ 66.67%. 📚",
        wrongAnswerExplanations: {
            "50%": "This would be if February had 22.5 books.",
            "60%": "This would be if February had 24 books.",
            "75%": "This would be if February had 26.25 books."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t1_qm19',
        type: "mcq",
        question: "In a pictograph showing favorite fruits, if 🍎 represents 2 students and there are 🍎🍎🍎, how many students like apples if oranges have 🍊🍊🍊🍊?",
        options: ["2 more like oranges", "4 more like oranges", "6 more like oranges", "8 more like oranges"],
        correctAnswer: "2 more like oranges",
        explanation: "Apples: 3 × 2 = 6 students; Oranges: 4 × 2 = 8 students; Difference: 8 - 6 = 2 more students. 🍊",
        wrongAnswerExplanations: {
            "4 more like oranges": "This is the difference in number of symbols, not students.",
            "6 more like oranges": "This is the total for apples, not the difference.",
            "8 more like oranges": "This is the total for oranges, not the difference."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t1_qm20',
        type: "mcq",
        question: "If a bar graph shows the height of plants in centimeters, and Plant A's bar reaches 18 while Plant B's reaches 27, what is the ratio of their heights?",
        options: ["2:3", "3:4", "4:5", "5:6"],
        correctAnswer: "2:3",
        explanation: "Plant A: 18 cm, Plant B: 27 cm; Ratio = 18:27 = 2:3. 🌱",
        wrongAnswerExplanations: {
            "3:4": "This would be if Plant A was 20.25 cm and Plant B was 27 cm.",
            "4:5": "This would be if Plant A was 21.6 cm and Plant B was 27 cm.",
            "5:6": "This would be if Plant A was 22.5 cm and Plant B was 27 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 