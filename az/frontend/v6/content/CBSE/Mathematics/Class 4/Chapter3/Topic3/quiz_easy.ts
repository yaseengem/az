import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch3_t3_qe1',
        type: "mcq",
        question: "If Ravi travels 5 km to school and then 3 km to his friend's house, what is the total distance he traveled?",
        options: ["2 km", "5 km", "8 km", "15 km"],
        correctAnswer: "8 km",
        explanation: "To find the total distance, add the distances: 5 km + 3 km = 8 km.",
        wrongAnswerExplanations: {
            "2 km": "This is the difference between the two distances, not the total.",
            "5 km": "This is only the distance to school, not the total distance.",
            "15 km": "This is the product of the two distances, not the sum."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch3_t3_qe2',
        type: "mcq",
        question: "A train travels at a speed of 60 kilometers per hour. How far will it travel in 2 hours?",
        options: ["30 kilometers", "60 kilometers", "90 kilometers", "120 kilometers"],
        correctAnswer: "120 kilometers",
        explanation: "Distance = Speed × Time. So, 60 km/h × 2 h = 120 km.",
        wrongAnswerExplanations: {
            "30 kilometers": "This is half the speed, not the distance traveled.",
            "60 kilometers": "This is the speed per hour, not the total distance.",
            "90 kilometers": "This is not the correct calculation of distance."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch3_t3_qe3',
        type: "mcq",
        question: "Meera's home is 800 meters away from school. How many kilometers is this distance?",
        options: ["0.08 km", "0.8 km", "8 km", "80 km"],
        correctAnswer: "0.8 km",
        explanation: "To convert meters to kilometers, divide by 1000. So, 800 ÷ 1000 = 0.8 km.",
        wrongAnswerExplanations: {
            "0.08 km": "This is an incorrect conversion. 800 m = 0.8 km, not 0.08 km.",
            "8 km": "This is an incorrect conversion. 800 m = 0.8 km, not 8 km.",
            "80 km": "This is an incorrect conversion. 800 m = 0.8 km, not 80 km."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch3_t3_qe4',
        type: "mcq",
        question: "If a bus travels 45 km in one hour, how far will it travel in 3 hours?",
        options: ["15 km", "90 km", "135 km", "180 km"],
        correctAnswer: "135 km",
        explanation: "Distance = Speed × Time. So, 45 km/h × 3 h = 135 km.",
        wrongAnswerExplanations: {
            "15 km": "This is 45 ÷ 3, not 45 × 3.",
            "90 km": "This is 45 × 2, not 45 × 3.",
            "180 km": "This is 45 × 4, not 45 × 3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch3_t3_qe5',
        type: "mcq",
        question: "A car travels 30 km in half an hour. What is its speed in kilometers per hour?",
        options: ["15 km/h", "30 km/h", "60 km/h", "90 km/h"],
        correctAnswer: "60 km/h",
        explanation: "Speed = Distance ÷ Time. So, 30 km ÷ 0.5 h = 60 km/h.",
        wrongAnswerExplanations: {
            "15 km/h": "This is 30 ÷ 2, but we need to divide by 0.5, not 2.",
            "30 km/h": "This is the distance, not the speed per hour.",
            "90 km/h": "This is 30 × 3, not 30 ÷ 0.5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch3_t3_qe6',
        type: "mcq",
        question: "If a journey takes 2 hours to complete at a speed of 40 km/h, what is the total distance?",
        options: ["20 km", "42 km", "80 km", "120 km"],
        correctAnswer: "80 km",
        explanation: "Distance = Speed × Time. So, 40 km/h × 2 h = 80 km.",
        wrongAnswerExplanations: {
            "20 km": "This is 40 ÷ 2, not 40 × 2.",
            "42 km": "This is an incorrect calculation of distance.",
            "120 km": "This is 40 × 3, not 40 × 2."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch3_t3_qe7',
        type: "mcq",
        question: "Rahul walks 2 km to the park and then 3 km to the library. If he takes a direct route home that is 4 km, how many kilometers did he travel in total?",
        options: ["5 km", "7 km", "9 km", "12 km"],
        correctAnswer: "9 km",
        explanation: "Total distance = Distance to park + Distance to library + Distance home = 2 km + 3 km + 4 km = 9 km.",
        wrongAnswerExplanations: {
            "5 km": "This is only the distance to the park and library, not including the way home.",
            "7 km": "This is an incorrect calculation of the total distance.",
            "12 km": "This is an incorrect calculation of the total distance."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch3_t3_qe8',
        type: "mcq",
        question: "A train leaves Bhopal at 8:00 AM and reaches Delhi at 2:00 PM. How many hours did the journey take?",
        options: ["4 hours", "6 hours", "8 hours", "10 hours"],
        correctAnswer: "6 hours",
        explanation: "Time elapsed = 2:00 PM - 8:00 AM = 6 hours.",
        wrongAnswerExplanations: {
            "4 hours": "This is an incorrect calculation of the journey time.",
            "8 hours": "This is an incorrect calculation of the journey time.",
            "10 hours": "This is an incorrect calculation of the journey time."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch3_t3_qe9',
        type: "mcq",
        question: "If a car travels at 50 km/h, how far will it travel in 15 minutes?",
        options: ["12.5 km", "15 km", "25 km", "75 km"],
        correctAnswer: "12.5 km",
        explanation: "First convert 15 minutes to hours: 15 min = 0.25 h. Then, Distance = Speed × Time = 50 km/h × 0.25 h = 12.5 km.",
        wrongAnswerExplanations: {
            "15 km": "This is the number of minutes, not the distance traveled.",
            "25 km": "This is 50 ÷ 2, which would be for 30 minutes, not 15 minutes.",
            "75 km": "This is 50 + 25, not the correct calculation for distance."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch3_t3_qe10',
        type: "mcq",
        question: "If a bus leaves at 10:30 AM and arrives at 12:45 PM, how long was the journey?",
        options: ["1 hour 15 minutes", "2 hours 15 minutes", "2 hours 45 minutes", "3 hours 15 minutes"],
        correctAnswer: "2 hours 15 minutes",
        explanation: "Time elapsed = 12:45 PM - 10:30 AM = 2 hours 15 minutes.",
        wrongAnswerExplanations: {
            "1 hour 15 minutes": "This is an incorrect calculation of the journey time.",
            "2 hours 45 minutes": "This is an incorrect calculation of the journey time.",
            "3 hours 15 minutes": "This is an incorrect calculation of the journey time."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch3_t3_qe11',
        type: "mcq",
        question: "The distance between Arun's home and school is 1.5 km. If he walks both ways each day, how far does he walk in 5 days?",
        options: ["7.5 km", "10 km", "15 km", "30 km"],
        correctAnswer: "15 km",
        explanation: "Daily distance = 1.5 km × 2 = 3 km. For 5 days: 3 km × 5 = 15 km.",
        wrongAnswerExplanations: {
            "7.5 km": "This is the distance for one way for 5 days, not both ways.",
            "10 km": "This is an incorrect calculation of the total distance.",
            "30 km": "This is 1.5 km × 2 × 10, not 1.5 km × 2 × 5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch3_t3_qe12',
        type: "mcq",
        question: "A train is 250 meters long. How many kilometers is this?",
        options: ["0.025 km", "0.25 km", "2.5 km", "25 km"],
        correctAnswer: "0.25 km",
        explanation: "To convert meters to kilometers, divide by 1000. So, 250 ÷ 1000 = 0.25 km.",
        wrongAnswerExplanations: {
            "0.025 km": "This is an incorrect conversion. 250 m = 0.25 km, not 0.025 km.",
            "2.5 km": "This is an incorrect conversion. 250 m = 0.25 km, not 2.5 km.",
            "25 km": "This is an incorrect conversion. 250 m = 0.25 km, not 25 km."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch3_t3_qe13',
        type: "mcq",
        question: "If a family travels 120 km in 3 hours on the first day and 150 km in 5 hours on the second day, on which day was their average speed higher?",
        options: ["First day", "Second day", "Both days had the same speed", "Cannot be determined"],
        correctAnswer: "First day",
        explanation: "Speed = Distance ÷ Time. First day: 120 km ÷ 3 h = 40 km/h. Second day: 150 km ÷ 5 h = 30 km/h. So, the speed was higher on the first day.",
        wrongAnswerExplanations: {
            "Second day": "The second day had a higher total distance but a lower speed because it took longer.",
            "Both days had the same speed": "The speeds were different: 40 km/h on the first day and 30 km/h on the second day.",
            "Cannot be determined": "We can determine the answer by calculating the speeds."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch3_t3_qe14',
        type: "mcq",
        question: "If a car travels at 60 km/h, how many kilometers will it cover in 2 hours and 30 minutes?",
        options: ["120 km", "150 km", "180 km", "210 km"],
        correctAnswer: "150 km",
        explanation: "Convert 2 hours 30 minutes to 2.5 hours. Then, Distance = Speed × Time = 60 km/h × 2.5 h = 150 km.",
        wrongAnswerExplanations: {
            "120 km": "This is the distance for 2 hours, not 2 hours 30 minutes.",
            "180 km": "This is the distance for 3 hours, not 2 hours 30 minutes.",
            "210 km": "This is an incorrect calculation of the distance."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch3_t3_qe15',
        type: "mcq",
        question: "Which of these is the longest distance?",
        options: ["500 meters", "0.6 kilometers", "75 centimeters", "900 millimeters"],
        correctAnswer: "0.6 kilometers",
        explanation: "Convert all to meters: 500 m, 0.6 km = 600 m, 75 cm = 0.75 m, 900 mm = 0.9 m. The longest is 600 m or 0.6 km.",
        wrongAnswerExplanations: {
            "500 meters": "This is less than 0.6 kilometers (600 meters).",
            "75 centimeters": "This is only 0.75 meters, much less than the other options.",
            "900 millimeters": "This is only 0.9 meters, much less than 500 meters or 0.6 kilometers."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch3_t3_qe16',
        type: "mcq",
        question: "Priya walked 3 km north, then 2 km east, and finally 1 km south. What is the total distance she walked?",
        options: ["4 km", "5 km", "6 km", "10 km"],
        correctAnswer: "6 km",
        explanation: "Total distance walked = 3 km + 2 km + 1 km = 6 km.",
        wrongAnswerExplanations: {
            "4 km": "This is not the total distance; it ignores one of the segments.",
            "5 km": "This is not the total distance; it ignores one of the segments.",
            "10 km": "This is an incorrect calculation of the total distance."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch3_t3_qe17',
        type: "mcq",
        question: "A family plans to travel 300 km in 6 hours. If they have already traveled 180 km in 4 hours, how many more kilometers do they need to travel?",
        options: ["100 km", "120 km", "150 km", "180 km"],
        correctAnswer: "120 km",
        explanation: "Distance left to travel = Total distance - Distance already traveled = 300 km - 180 km = 120 km.",
        wrongAnswerExplanations: {
            "100 km": "This is an incorrect calculation of the remaining distance.",
            "150 km": "This is 300 km ÷ 2, not the correct remaining distance.",
            "180 km": "This is the distance already traveled, not the remaining distance."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch3_t3_qe18',
        type: "mcq",
        question: "If a train covers a distance of 240 km in 3 hours, what is its speed in kilometers per hour?",
        options: ["60 km/h", "70 km/h", "80 km/h", "90 km/h"],
        correctAnswer: "80 km/h",
        explanation: "Speed = Distance ÷ Time = 240 km ÷ 3 h = 80 km/h.",
        wrongAnswerExplanations: {
            "60 km/h": "This is 240 km ÷ 4 h, not 240 km ÷ 3 h.",
            "70 km/h": "This is an incorrect calculation of the speed.",
            "90 km/h": "This is an incorrect calculation of the speed."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch3_t3_qe19',
        type: "mcq",
        question: "A bus travels 20 km in the first hour, 25 km in the second hour, and 30 km in the third hour. What is the average speed of the bus for the entire journey?",
        options: ["20 km/h", "25 km/h", "30 km/h", "75 km/h"],
        correctAnswer: "25 km/h",
        explanation: "Average speed = Total distance ÷ Total time = (20 + 25 + 30) km ÷ 3 h = 75 km ÷ 3 h = 25 km/h.",
        wrongAnswerExplanations: {
            "20 km/h": "This is the speed during the first hour only, not the average speed.",
            "30 km/h": "This is the speed during the third hour only, not the average speed.",
            "75 km/h": "This is the total distance, not the average speed."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch3_t3_qe20',
        type: "mcq",
        question: "If a cyclist travels at 15 km/h, how long will it take to cover a distance of 45 km?",
        options: ["2 hours", "3 hours", "4 hours", "5 hours"],
        correctAnswer: "3 hours",
        explanation: "Time = Distance ÷ Speed = 45 km ÷ 15 km/h = 3 hours.",
        wrongAnswerExplanations: {
            "2 hours": "This is 30 km ÷ 15 km/h, not 45 km ÷ 15 km/h.",
            "4 hours": "This is 60 km ÷ 15 km/h, not 45 km ÷ 15 km/h.",
            "5 hours": "This is 75 km ÷ 15 km/h, not 45 km ÷ 15 km/h."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
