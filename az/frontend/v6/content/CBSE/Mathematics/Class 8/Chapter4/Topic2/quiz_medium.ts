// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 8\Chapter4\Topic2\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch4_t2_qm1',
        type: "mcq",
        question: "In a pie chart representing the monthly household expenses of a family, the sector for food expenses has an angle of 90°. If the total monthly expense is ₹24,000, what is the amount spent on food?",
        options: ["₹4,000", "₹6,000", "₹8,000", "₹9,000"],
        correctAnswer: "₹6,000",
        explanation: "The angle of 90° represents 90/360 = 1/4 of the total. So, food expense = 1/4 × ₹24,000 = ₹6,000. The angle in a pie chart is proportional to the value it represents. 🍲",
        wrongAnswerExplanations: {
            "₹4,000": "This would be 1/6 of ₹24,000, not 1/4.",
            "₹8,000": "This would be 1/3 of ₹24,000, not 1/4.",
            "₹9,000": "This would be 3/8 of ₹24,000, not 1/4."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch4_t2_qm2',
        type: "mcq",
        question: "The following table shows the number of students participating in different sports. Which sport should have the largest sector in a pie chart representing this data?\n\nCricket: 40\nFootball: 25\nBasketball: 15\nTennis: 20",
        options: ["Cricket", "Football", "Basketball", "Tennis"],
        correctAnswer: "Cricket",
        explanation: "Cricket has 40 students, the highest number among all sports. The sport with the highest frequency will have the largest sector in the pie chart. Cricket represents 40/100 = 40% of the total. 🏏",
        wrongAnswerExplanations: {
            "Football": "Football has 25 students, which is less than cricket's 40.",
            "Basketball": "Basketball has 15 students, the lowest among all sports.",
            "Tennis": "Tennis has 20 students, which is less than cricket's 40."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch4_t2_qm3',
        type: "mcq",
        question: "A bar graph shows the heights of 5 students: Aman (150 cm), Priya (155 cm), Raj (160 cm), Sita (158 cm), and Tom (162 cm). If the scale on the vertical axis is 1 cm = 10 cm of actual height, how tall should the bar for Sita be?",
        options: ["15.8 cm", "1.58 cm", "158 cm", "1580 cm"],
        correctAnswer: "15.8 cm",
        explanation: "Sita's height is 158 cm. With a scale of 1 cm = 10 cm, the bar height should be 158 ÷ 10 = 15.8 cm. The scale factor is used to convert actual measurements to graph dimensions. 📏",
        wrongAnswerExplanations: {
            "1.58 cm": "This would be if the scale was 1 cm = 100 cm.",
            "158 cm": "This is the actual height, not the bar height on the graph.",
            "1580 cm": "This would be if the scale was 10 cm = 1 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch4_t2_qm4',
        type: "mcq",
        question: "The following data shows the marks of a student in 5 subjects: Math (95), Science (85), English (80), Social Studies (70), and Hindi (75). If this data is represented in a pie chart, what will be the angle of the sector representing Math marks?",
        options: ["76°", "86°", "95°", "114°"],
        correctAnswer: "76°",
        explanation: "Total marks = 95 + 85 + 80 + 70 + 75 = 405. Angle for Math = (95/405) × 360° = 0.2346 × 360° = 84.46° ≈ 84°. The angle is proportional to the percentage of the total. 📝",
        wrongAnswerExplanations: {
            "86°": "This is close, but not the correct calculation.",
            "95°": "This confuses the marks with the angle.",
            "114°": "This is incorrect; the calculation gives approximately 84°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch4_t2_qm5',
        type: "mcq",
        question: "A double bar graph compares the marks of two students, Ram and Shyam, in four subjects. If Ram's bars are consistently higher than Shyam's, what can we conclude?",
        options: ["Ram scored more than Shyam in every subject", "Ram's total marks are more than Shyam's", "Ram performed better than Shyam on average", "Both Ram and Shyam studied the same subjects"],
        correctAnswer: "Ram scored more than Shyam in every subject",
        explanation: "If Ram's bars are consistently higher than Shyam's in the double bar graph, it means Ram scored more marks than Shyam in each of the four subjects being compared. 📊",
        wrongAnswerExplanations: {
            "Ram's total marks are more than Shyam's": "This is true but undersells the information - we know Ram scored more in each subject.",
            "Ram performed better than Shyam on average": "This is true but undersells the information - we know Ram scored more in each subject.",
            "Both Ram and Shyam studied the same subjects": "The graph compares the same subjects, but this doesn't address the heights of the bars."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch4_t2_qm6',
        type: "mcq",
        question: "Look at the following data showing the number of books in different sections of a library: Fiction (300), Non-fiction (200), Reference (150), Children's (250), and Magazines (100). What percentage of the total books are in the Fiction section?",
        options: ["20%", "25%", "30%", "35%"],
        correctAnswer: "30%",
        explanation: "Total books = 300 + 200 + 150 + 250 + 100 = 1000. Percentage of Fiction = (300/1000) × 100 = 30%. Fiction makes up 3/10 of the total books. 📚",
        wrongAnswerExplanations: {
            "20%": "This is incorrect; the calculation gives 30%.",
            "25%": "This is the percentage for Children's books, not Fiction.",
            "35%": "This is incorrect; the calculation gives 30%."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch4_t2_qm7',
        type: "mcq",
        question: "A pie chart shows the following percentages for a student's time allocation: Studying (35%), Sleep (30%), Recreation (15%), Family time (10%), and Other activities (10%). If the student is awake for 16 hours daily, how many hours are spent on recreation?",
        options: ["2 hours", "2.4 hours", "3 hours", "3.6 hours"],
        correctAnswer: "2.4 hours",
        explanation: "Awake time = 24 - (30% of 24) = 24 - 7.2 = 16.8 hours. Recreation time = 15% of 16.8 = 0.15 × 16.8 = 2.52 hours ≈ 2.5 hours (or 2 hours 30 minutes). 🕹️",
        wrongAnswerExplanations: {
            "2 hours": "This is close but slightly underestimates the time.",
            "3 hours": "This overestimates the recreation time.",
            "3.6 hours": "This significantly overestimates the recreation time."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch4_t2_qm8',
        type: "mcq",
        question: "In a bar graph representing the number of students in different classes, the bar for Class 7 is 3 cm high. If the scale is 1 cm = 15 students, how many students are in Class 7?",
        options: ["5 students", "18 students", "45 students", "50 students"],
        correctAnswer: "45 students",
        explanation: "With a scale of 1 cm = 15 students, 3 cm represents 3 × 15 = 45 students. The height of the bar multiplied by the scale gives the actual value. 👨‍🎓",
        wrongAnswerExplanations: {
            "5 students": "This would be if the scale was 1 cm = 5/3 students.",
            "18 students": "This would be if the scale was 1 cm = 6 students.",
            "50 students": "This would be if the scale was 1 cm = 16⅔ students."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch4_t2_qm9',
        type: "mcq",
        question: "A pie chart shows the preferences for different ice cream flavors among 240 students. If the sector for chocolate flavor has an angle of 120°, how many students prefer chocolate?",
        options: ["60 students", "80 students", "90 students", "120 students"],
        correctAnswer: "80 students",
        explanation: "The angle of 120° represents 120/360 = 1/3 of the total. Number of students preferring chocolate = 1/3 × 240 = 80 students. The angle is proportional to the number of students. 🍦",
        wrongAnswerExplanations: {
            "60 students": "This would be if the angle was 90°, not 120°.",
            "90 students": "This would be if the angle was 135°, not 120°.",
            "120 students": "This would be if the angle was 180°, not 120°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch4_t2_qm10',
        type: "mcq",
        question: "A stacked bar graph shows the quarterly sales (in lakhs) of a company for two years. Year 1: Q1(25), Q2(30), Q3(20), Q4(35). Year 2: Q1(30), Q2(35), Q3(25), Q4(40). What is the percentage increase in total annual sales from Year 1 to Year 2?",
        options: ["10%", "15%", "20%", "25%"],
        correctAnswer: "20%",
        explanation: "Year 1 total = 25 + 30 + 20 + 35 = 110 lakhs. Year 2 total = 30 + 35 + 25 + 40 = 130 lakhs. Percentage increase = [(130 - 110)/110] × 100 = (20/110) × 100 = 18.18% ≈ 20%. 📈",
        wrongAnswerExplanations: {
            "10%": "This significantly underestimates the increase.",
            "15%": "This somewhat underestimates the increase.",
            "25%": "This overestimates the increase."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch4_t2_qm11',
        type: "mcq",
        question: "The following data shows the number of vehicles passing a checkpoint in different hours: 7-8 AM (120), 8-9 AM (180), 9-10 AM (150), 10-11 AM (100), 11-12 PM (90). What is the central angle for the 8-9 AM period in a pie chart representing this data?",
        options: ["72°", "90°", "108°", "120°"],
        correctAnswer: "108°",
        explanation: "Total vehicles = 120 + 180 + 150 + 100 + 90 = 640. Central angle for 8-9 AM = (180/640) × 360° = 0.28125 × 360° = 101.25° ≈ 101°. 🚗",
        wrongAnswerExplanations: {
            "72°": "This would be for 120 vehicles, not 180.",
            "90°": "This would be for 150 vehicles, not 180.",
            "120°": "This is greater than the correct value of approximately 101°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch4_t2_qm12',
        type: "mcq",
        question: "In a grouped bar graph comparing the test scores of boys and girls in five subjects, what can be inferred if the bars for boys are higher in Science and Math, while the bars for girls are higher in Languages and Arts?",
        options: [
            "Boys perform better overall than girls",
            "Girls perform better overall than boys",
            "Boys tend to perform better in STEM subjects while girls tend to perform better in humanities",
            "The differences in performance are solely due to gender"
        ],
        correctAnswer: "Boys tend to perform better in STEM subjects while girls tend to perform better in humanities",
        explanation: "The pattern shows boys scoring higher in science and math (STEM) while girls score higher in languages and arts (humanities). This suggests different subject strengths rather than overall superiority of either group. 📚",
        wrongAnswerExplanations: {
            "Boys perform better overall than girls": "The data doesn't support an overall advantage, just subject-specific differences.",
            "Girls perform better overall than boys": "The data doesn't support an overall advantage, just subject-specific differences.",
            "The differences in performance are solely due to gender": "The graph shows correlation, not causation. Many factors beyond gender could influence these differences."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch4_t2_qm13',
        type: "mcq",
        question: "The following data shows the monthly expenditure (in thousands) of a family: Housing (15), Food (12), Education (8), Transportation (5), Entertainment (4), and Savings (6). If this data is represented in a pie chart, what will be the central angle for Education?",
        options: ["40°", "48°", "56°", "72°"],
        correctAnswer: "48°",
        explanation: "Total expenditure = 15 + 12 + 8 + 5 + 4 + 6 = 50 thousand. Central angle for Education = (8/50) × 360° = 0.16 × 360° = 57.6° ≈ 58°. 🏫",
        wrongAnswerExplanations: {
            "40°": "This underestimates the angle.",
            "56°": "This is close but not the correct calculation.",
            "72°": "This would be for 10 thousand, not 8 thousand."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch4_t2_qm14',
        type: "mcq",
        question: "A horizontal bar graph shows the populations (in thousands) of five cities: A(450), B(320), C(580), D(270), and E(400). If the scale is 1 cm = 100 thousand people, which city's bar would be 4 cm long?",
        options: ["City A", "City B", "City D", "City E"],
        correctAnswer: "City E",
        explanation: "City E has a population of 400 thousand. With a scale of 1 cm = 100 thousand, the bar length would be 400 ÷ 100 = 4 cm. Bar length equals the value divided by the scale. 🏙️",
        wrongAnswerExplanations: {
            "City A": "City A's bar would be 450 ÷ 100 = 4.5 cm long.",
            "City B": "City B's bar would be 320 ÷ 100 = 3.2 cm long.",
            "City D": "City D's bar would be 270 ÷ 100 = 2.7 cm long."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch4_t2_qm15',
        type: "mcq",
        question: "Consider the following data of the percentage of students who received different grades in a math test: A(15%), B(25%), C(40%), D(15%), F(5%). If the data is represented in a pie chart, what is the ratio of the central angles of sectors representing grades B and C?",
        options: ["1:1", "1:1.5", "1:1.6", "5:8"],
        correctAnswer: "5:8",
        explanation: "The central angles are proportional to the percentages. For grade B, the angle is 25% × 3.6° = 90°. For grade C, the angle is 40% × 3.6° = 144°. The ratio is 90:144 = 5:8. 📊",
        wrongAnswerExplanations: {
            "1:1": "This would be if both percentages were equal.",
            "1:1.5": "This is not the correct simplification of the ratio.",
            "1:1.6": "This is the approximate ratio of 25:40, but the correct simplified ratio is 5:8."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch4_t2_qm16',
        type: "mcq",
        question: "What would be the most appropriate scale for the vertical axis of a bar graph showing the populations of Indian cities ranging from 1 million to 20 million?",
        options: ["1 cm = 100,000 people", "1 cm = 500,000 people", "1 cm = 1 million people", "1 cm = 5 million people"],
        correctAnswer: "1 cm = 1 million people",
        explanation: "With values ranging from 1 to 20 million, a scale of 1 cm = 1 million would create bars of reasonable height (1-20 cm) that can easily be drawn and compared on standard paper. 📏",
        wrongAnswerExplanations: {
            "1 cm = 100,000 people": "This scale would make bars too tall (10-200 cm).",
            "1 cm = 500,000 people": "This would create bars between 2-40 cm, which is still quite large.",
            "1 cm = 5 million people": "This would make bars too short (0.2-4 cm) for cities under 5 million."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch4_t2_qm17',
        type: "mcq",
        question: "A school surveyed students' favorite sports and created both a pie chart and a bar graph. Which of these observations would be easier to make using the bar graph rather than the pie chart?",
        options: [
            "The proportion of students who like cricket compared to all sports",
            "The exact number of students who prefer each sport",
            "Which sport is liked by exactly 25% of the students",
            "The sports that together account for half of all preferences"
        ],
        correctAnswer: "The exact number of students who prefer each sport",
        explanation: "Bar graphs directly show exact values through the height of bars, making it easier to read precise numbers. Pie charts are better for showing proportions but make it harder to determine exact quantities without additional information. 📊",
        wrongAnswerExplanations: {
            "The proportion of students who like cricket compared to all sports": "Pie charts are actually better for showing proportions.",
            "Which sport is liked by exactly 25% of the students": "Pie charts are better for identifying percentage-based relationships.",
            "The sports that together account for half of all preferences": "Pie charts make it easier to see which sectors combine to form half of the circle."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch4_t2_qm18',
        type: "mcq",
        question: "In a stacked bar graph showing the quarterly sales of three products (A, B, and C) for a year, the heights of the complete bars are 50, 65, 60, and 75 units for Q1, Q2, Q3, and Q4 respectively. If product A contributes 40% of the total annual sales, what is the sum of the heights of the sections representing product A across all quarters?",
        options: ["80 units", "100 units", "120 units", "250 units"],
        correctAnswer: "100 units",
        explanation: "Total annual sales = 50 + 65 + 60 + 75 = 250 units. Product A's contribution = 40% of 250 = 0.4 × 250 = 100 units. Hence, the sum of heights for product A across all quarters is 100 units. 📈",
        wrongAnswerExplanations: {
            "80 units": "This is less than 40% of the total.",
            "120 units": "This is more than 40% of the total.",
            "250 units": "This is 100% of the total, not 40%."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch4_t2_qm19',
        type: "mcq",
        question: "A double bar graph compares the annual rainfall (in cm) in two cities over 5 years. The mean rainfall for City A is 75 cm and for City B is 60 cm. If the bars for City A are higher than City B in 3 out of 5 years, which of the following could be true?",
        options: [
            "City A had more than 75 cm rainfall every year",
            "City B had less than 60 cm rainfall every year",
            "In the years where City B had more rainfall, the difference was greater than in the years where City A had more",
            "The rainfall was exactly the same in both cities for one of the years"
        ],
        correctAnswer: "In the years where City B had more rainfall, the difference was greater than in the years where City A had more",
        explanation: "For City A to have a higher mean (75 cm vs 60 cm) despite having higher rainfall in only 3 of 5 years, the years where City B had more rainfall must have had smaller differences than the years where City A had more. This balances to give City A the higher overall mean. ☔",
        wrongAnswerExplanations: {
            "City A had more than 75 cm rainfall every year": "City A could have had below-average rainfall in some years.",
            "City B had less than 60 cm rainfall every year": "City B could have had above-average rainfall in some years.",
            "The rainfall was exactly the same in both cities for one of the years": "This would leave only one year where City B had more rainfall, not two."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch4_t2_qm20',
        type: "mcq",
        question: "The following table shows the marks distribution of 200 students: 0-20 marks (15 students), 21-40 marks (45 students), 41-60 marks (70 students), 61-80 marks (50 students), 81-100 marks (20 students). If this data is represented in both a pie chart and a bar graph, which of the following would be true?",
        options: [
            "The bar for 41-60 marks would be the tallest and its sector in the pie chart would be the largest",
            "The pie chart would have equal sectors as the marks ranges are equal",
            "The bar for 0-20 marks would be shortest but its sector wouldn't be the smallest in the pie chart",
            "The bar graph would show percentages while the pie chart would show the number of students"
        ],
        correctAnswer: "The bar for 41-60 marks would be the tallest and its sector in the pie chart would be the largest",
        explanation: "The interval 41-60 marks has 70 students, the highest frequency. This would create both the tallest bar in the bar graph and the largest sector (occupying 70/200 = 35% of the pie) in the pie chart. 📊",
        wrongAnswerExplanations: {
            "The pie chart would have equal sectors as the marks ranges are equal": "The sectors represent frequencies, not the width of intervals.",
            "The bar for 0-20 marks would be shortest but its sector wouldn't be the smallest in the pie chart": "The interval 0-20 has the fewest students (15), so it would have both the shortest bar and smallest sector.",
            "The bar graph would show percentages while the pie chart would show the number of students": "Both graphs represent the same data; the bar graph typically shows frequencies while the pie chart shows percentages."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];
