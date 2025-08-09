import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch3_t3_qm1',
        type: "mcq",
        question: "A train leaves Bhopal at 8:15 AM and reaches Delhi at 4:45 PM. How long was the journey?",
        options: ["6 hours 30 minutes", "7 hours", "8 hours 30 minutes", "9 hours 30 minutes"],
        correctAnswer: "8 hours 30 minutes",
        explanation: "Time elapsed = 4:45 PM - 8:15 AM = 8 hours 30 minutes.",
        wrongAnswerExplanations: {
            "6 hours 30 minutes": "This is an incorrect calculation of the journey time.",
            "7 hours": "This is an incorrect calculation of the journey time.",
            "9 hours 30 minutes": "This is an incorrect calculation of the journey time."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch3_t3_qm2',
        type: "mcq",
        question: "Rani walked 2.5 km to reach her friend's house. Her friend drove her back halfway, and she walked the rest. How far did Rani walk in total?",
        options: ["2.5 km", "3.75 km", "5 km", "6.25 km"],
        correctAnswer: "3.75 km",
        explanation: "Total distance walked = Distance to friend's house + Distance walking back = 2.5 km + (2.5 km ÷ 2) = 2.5 km + 1.25 km = 3.75 km.",
        wrongAnswerExplanations: {
            "2.5 km": "This is only the distance to her friend's house, not the total distance walked.",
            "5 km": "This would be if she walked both ways, but she was driven halfway back.",
            "6.25 km": "This is an incorrect calculation of the total distance walked."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch3_t3_qm3',
        type: "mcq",
        question: "A car travels at 60 km/h for 2 hours and then at 40 km/h for 3 hours. What is the total distance traveled?",
        options: ["120 km", "180 km", "200 km", "240 km"],
        correctAnswer: "240 km",
        explanation: "Total distance = (Speed × Time) + (Speed × Time) = (60 km/h × 2 h) + (40 km/h × 3 h) = 120 km + 120 km = 240 km.",
        wrongAnswerExplanations: {
            "120 km": "This is only the distance for the first 2 hours, not the total distance.",
            "180 km": "This is 60 km/h × 3 h, not the correct total distance calculation.",
            "200 km": "This is an incorrect calculation of the total distance."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch3_t3_qm4',
        type: "mcq",
        question: "If a train travels 60 km in 45 minutes, what is its speed in kilometers per hour?",
        options: ["40 km/h", "60 km/h", "75 km/h", "80 km/h"],
        correctAnswer: "80 km/h",
        explanation: "Convert 45 minutes to hours: 45 min = 0.75 h. Then, Speed = Distance ÷ Time = 60 km ÷ 0.75 h = 80 km/h.",
        wrongAnswerExplanations: {
            "40 km/h": "This is an incorrect calculation of the speed.",
            "60 km/h": "This is the distance traveled, not the speed per hour.",
            "75 km/h": "This is 60 + 15, not the correct calculation for speed."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch3_t3_qm5',
        type: "mcq",
        question: "A family travels 180 km in a car. If the car's fuel efficiency is 15 km per liter, how many liters of fuel were used for the journey?",
        options: ["8 liters", "12 liters", "15 liters", "18 liters"],
        correctAnswer: "12 liters",
        explanation: "Fuel used = Total distance ÷ Fuel efficiency = 180 km ÷ 15 km/L = 12 liters.",
        wrongAnswerExplanations: {
            "8 liters": "This is an incorrect calculation of the fuel used.",
            "15 liters": "This is the fuel efficiency, not the amount of fuel used.",
            "18 liters": "This is 180 ÷ 10, not 180 ÷ 15."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch3_t3_qm6',
        type: "mcq",
        question: "A bus covered a distance of 300 km in 5 hours. For the first 3 hours, it traveled at 50 km/h. What was its speed for the remaining journey?",
        options: ["50 km/h", "60 km/h", "70 km/h", "75 km/h"],
        correctAnswer: "75 km/h",
        explanation: "Distance in first 3 hours = 50 km/h × 3 h = 150 km. Remaining distance = 300 km - 150 km = 150 km. Remaining time = 5 h - 3 h = 2 h. Speed = 150 km ÷ 2 h = 75 km/h.",
        wrongAnswerExplanations: {
            "50 km/h": "This is the speed for the first 3 hours, not the remaining journey.",
            "60 km/h": "This is the average speed for the entire journey, not the remaining part.",
            "70 km/h": "This is an incorrect calculation of the speed for the remaining journey."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch3_t3_qm7',
        type: "mcq",
        question: "Arun's school is 3 km from his home. If he cycles at 12 km/h, how many minutes will it take him to reach school?",
        options: ["10 minutes", "15 minutes", "20 minutes", "25 minutes"],
        correctAnswer: "15 minutes",
        explanation: "Time = Distance ÷ Speed = 3 km ÷ 12 km/h = 0.25 h = 0.25 × 60 min = 15 minutes.",
        wrongAnswerExplanations: {
            "10 minutes": "This is an incorrect calculation of the time taken.",
            "20 minutes": "This is an incorrect calculation of the time taken.",
            "25 minutes": "This is an incorrect calculation of the time taken."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch3_t3_qm8',
        type: "mcq",
        question: "A train 150 meters long passes a platform 250 meters long in 20 seconds. What is the speed of the train in km/h?",
        options: ["45 km/h", "60 km/h", "72 km/h", "90 km/h"],
        correctAnswer: "72 km/h",
        explanation: "Total distance = Length of train + Length of platform = 150 m + 250 m = 400 m. Speed = 400 m ÷ 20 s = 20 m/s. Convert to km/h: 20 m/s × 3.6 = 72 km/h.",
        wrongAnswerExplanations: {
            "45 km/h": "This is an incorrect calculation of the speed.",
            "60 km/h": "This is an incorrect calculation of the speed.",
            "90 km/h": "This is an incorrect calculation of the speed."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch3_t3_qm9',
        type: "mcq",
        question: "Ravi and Meera start from the same point and walk in opposite directions. If Ravi walks at 5 km/h and Meera at 3 km/h, how far apart will they be after 2 hours?",
        options: ["4 km", "8 km", "16 km", "32 km"],
        correctAnswer: "16 km",
        explanation: "Distance between them = (Ravi's speed + Meera's speed) × Time = (5 km/h + 3 km/h) × 2 h = 8 km/h × 2 h = 16 km.",
        wrongAnswerExplanations: {
            "4 km": "This is an incorrect calculation of the distance between them.",
            "8 km": "This is the combined speed per hour, not the total distance apart after 2 hours.",
            "32 km": "This is an incorrect calculation of the distance between them."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch3_t3_qm10',
        type: "mcq",
        question: "A family plans a trip to a city 450 km away. If they want to reach in 6 hours with a 30-minute break in between, what should be their driving speed?",
        options: ["70 km/h", "75 km/h", "80 km/h", "82 km/h"],
        correctAnswer: "82 km/h",
        explanation: "Actual driving time = 6 hours - 0.5 hours = 5.5 hours. Required speed = Distance ÷ Time = 450 km ÷ 5.5 h = 81.82 km/h ≈ 82 km/h.",
        wrongAnswerExplanations: {
            "70 km/h": "This is an incorrect calculation of the required speed.",
            "75 km/h": "This is 450 km ÷ 6 h, not accounting for the break time.",
            "80 km/h": "This is an incorrect calculation of the required speed."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch3_t3_qm11',
        type: "mcq",
        question: "A train 200 meters long crosses a bridge 300 meters long. If the train takes 25 seconds to completely cross the bridge, what is its speed in km/h?",
        options: ["60 km/h", "64.8 km/h", "72 km/h", "84 km/h"],
        correctAnswer: "72 km/h",
        explanation: "Total distance to cross the bridge completely = Length of train + Length of bridge = 200 m + 300 m = 500 m. Speed = 500 m ÷ 25 s = 20 m/s = 20 × 3.6 km/h = 72 km/h.",
        wrongAnswerExplanations: {
            "60 km/h": "This is an incorrect calculation of the speed.",
            "64.8 km/h": "This is an incorrect calculation of the speed.",
            "84 km/h": "This is an incorrect calculation of the speed."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch3_t3_qm12',
        type: "mcq",
        question: "Two trains leave stations A and B, 300 km apart, and travel towards each other. If one train travels at 60 km/h and the other at 40 km/h, after how long will they meet?",
        options: ["2 hours", "2.5 hours", "3 hours", "4 hours"],
        correctAnswer: "3 hours",
        explanation: "Combined speed = 60 km/h + 40 km/h = 100 km/h. Time to meet = Total distance ÷ Combined speed = 300 km ÷ 100 km/h = 3 hours.",
        wrongAnswerExplanations: {
            "2 hours": "This is an incorrect calculation of the time to meet.",
            "2.5 hours": "This is an incorrect calculation of the time to meet.",
            "4 hours": "This is an incorrect calculation of the time to meet."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch3_t3_qm13',
        type: "mcq",
        question: "A boy walks from his home to school at 4 km/h and reaches 5 minutes late. If he walks at 5 km/h, he reaches 10 minutes early. How far is the school from his home?",
        options: ["4 km", "5 km", "6 km", "8 km"],
        correctAnswer: "5 km",
        explanation: "The time difference between the two journeys is 15 minutes (0.25 hours). For a distance of d km, time difference = d/4 - d/5 = d/20 hours = 0.25 hours. So, d = 5 km.",
        wrongAnswerExplanations: {
            "4 km": "This is an incorrect calculation of the distance.",
            "6 km": "This is an incorrect calculation of the distance.",
            "8 km": "This is an incorrect calculation of the distance."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch3_t3_qm14',
        type: "mcq",
        question: "Meena walks 2.5 km to the market in 30 minutes. On her way back, she walks at a slower pace and takes 40 minutes. What is her average speed for the entire journey?",
        options: ["3.6 km/h", "4.2 km/h", "4.5 km/h", "5 km/h"],
        correctAnswer: "4.2 km/h",
        explanation: "Total distance = 2.5 km × 2 = 5 km. Total time = 30 min + 40 min = 70 min = 7/6 h. Average speed = 5 km ÷ (7/6) h = 30/7 km/h ≈ 4.2 km/h.",
        wrongAnswerExplanations: {
            "3.6 km/h": "This is an incorrect calculation of the average speed.",
            "4.5 km/h": "This is an incorrect calculation of the average speed.",
            "5 km/h": "This is the speed for the way to the market, not the average speed for the entire journey."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch3_t3_qm15',
        type: "mcq",
        question: "A bus left Delhi at 8:00 AM and reached Agra at 11:30 AM. If the distance between the cities is 230 km, what was the average speed of the bus?",
        options: ["55 km/h", "65.7 km/h", "70 km/h", "76.7 km/h"],
        correctAnswer: "65.7 km/h",
        explanation: "Travel time = 11:30 AM - 8:00 AM = 3.5 hours. Average speed = Distance ÷ Time = 230 km ÷ 3.5 h = 65.7 km/h.",
        wrongAnswerExplanations: {
            "55 km/h": "This is an incorrect calculation of the average speed.",
            "70 km/h": "This is an incorrect calculation of the average speed.",
            "76.7 km/h": "This is an incorrect calculation of the average speed."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch3_t3_qm16',
        type: "mcq",
        question: "A car travels 120 km in 2 hours on a highway. On city roads, it takes 3 hours to cover 90 km. What is the difference in the car's speed on the highway compared to city roads?",
        options: ["15 km/h", "30 km/h", "45 km/h", "60 km/h"],
        correctAnswer: "30 km/h",
        explanation: "Highway speed = 120 km ÷ 2 h = 60 km/h. City speed = 90 km ÷ 3 h = 30 km/h. Difference = 60 km/h - 30 km/h = 30 km/h.",
        wrongAnswerExplanations: {
            "15 km/h": "This is an incorrect calculation of the speed difference.",
            "45 km/h": "This is an incorrect calculation of the speed difference.",
            "60 km/h": "This is the highway speed, not the difference in speeds."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch3_t3_qm17',
        type: "mcq",
        question: "A family travels from city A to city B, which are 90 km apart. If they start at 2:30 PM and reach at 4:00 PM, what is their average speed?",
        options: ["50 km/h", "55 km/h", "60 km/h", "65 km/h"],
        correctAnswer: "60 km/h",
        explanation: "Travel time = 4:00 PM - 2:30 PM = 1.5 hours. Average speed = Distance ÷ Time = 90 km ÷ 1.5 h = 60 km/h.",
        wrongAnswerExplanations: {
            "50 km/h": "This is an incorrect calculation of the average speed.",
            "55 km/h": "This is an incorrect calculation of the average speed.",
            "65 km/h": "This is an incorrect calculation of the average speed."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch3_t3_qm18',
        type: "mcq",
        question: "A truck travels 400 km using 40 liters of diesel. If diesel costs ₹80 per liter, what is the fuel cost per kilometer?",
        options: ["₹4", "₹8", "₹10", "₹12"],
        correctAnswer: "₹8",
        explanation: "Fuel efficiency = 400 km ÷ 40 L = 10 km/L. Cost per kilometer = Diesel price ÷ Fuel efficiency = ₹80 ÷ 10 km/L = ₹8 per km.",
        wrongAnswerExplanations: {
            "₹4": "This is an incorrect calculation of the fuel cost per kilometer.",
            "₹10": "This is an incorrect calculation of the fuel cost per kilometer.",
            "₹12": "This is an incorrect calculation of the fuel cost per kilometer."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch3_t3_qm19',
        type: "mcq",
        question: "A train 300 meters long passes a pole in 15 seconds. What is the speed of the train in km/h?",
        options: ["60 km/h", "68 km/h", "72 km/h", "80 km/h"],
        correctAnswer: "72 km/h",
        explanation: "Speed = Distance ÷ Time = 300 m ÷ 15 s = 20 m/s. Convert to km/h: 20 m/s × 3.6 = 72 km/h.",
        wrongAnswerExplanations: {
            "60 km/h": "This is an incorrect conversion from m/s to km/h.",
            "68 km/h": "This is an incorrect calculation of the speed.",
            "80 km/h": "This is an incorrect calculation of the speed."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch3_t3_qm20',
        type: "mcq",
        question: "Rahul cycles at 12 km/h and reaches school in 20 minutes. If he wants to reach in 15 minutes, at what speed should he cycle?",
        options: ["15 km/h", "16 km/h", "18 km/h", "20 km/h"],
        correctAnswer: "16 km/h",
        explanation: "Distance to school = 12 km/h × (20/60) h = 4 km. New speed = Distance ÷ New time = 4 km ÷ (15/60) h = 4 km ÷ 0.25 h = 16 km/h.",
        wrongAnswerExplanations: {
            "15 km/h": "This is an incorrect calculation of the required speed.",
            "18 km/h": "This is an incorrect calculation of the required speed.",
            "20 km/h": "This is an incorrect calculation of the required speed."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    }
];
