import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch4_t3_qm1',
        type: "mcq",
        question: "Neha's school bus arrives at her stop at 7:25 AM. If she needs 10 minutes to walk to the bus stop and 15 minutes to get ready in the morning, what is the latest time she should wake up?",
        options: ["6:50 AM", "7:00 AM", "7:10 AM", "7:15 AM"],
        correctAnswer: "7:00 AM",
        explanation: "Working backward: 7:25 - 10 minutes walking = 7:15, then 7:15 - 15 minutes getting ready = 7:00 AM.",
        wrongAnswerExplanations: {
            "6:50 AM": "This gives too much extra time. She would arrive at the bus stop early.",
            "7:10 AM": "This is too late. She wouldn't have enough time to get ready and walk to the bus stop.",
            "7:15 AM": "This is much too late. She would miss the bus."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch4_t3_qm2',
        type: "mcq",
        question: "Raj has three activities after school: 30 minutes of reading, 45 minutes of homework, and 20 minutes of helping with dishes. If he arrives home at 3:45 PM and wants to finish all activities before dinner at 6:00 PM, how much free time will he have?",
        options: ["60 minutes", "65 minutes", "80 minutes", "85 minutes"],
        correctAnswer: "85 minutes",
        explanation: "Total activity time: 30 + 45 + 20 = 95 minutes. Time available: 3:45 PM to 6:00 PM = 135 minutes. Free time: 135 - 95 = 85 minutes.",
        wrongAnswerExplanations: {
            "60 minutes": "This calculation doesn't account for all the time available.",
            "65 minutes": "This calculation is inaccurate.",
            "80 minutes": "This is close but slightly miscalculated."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch4_t3_qm3',
        type: "mcq",
        question: "A movie starts at 5:30 PM and ends at 7:15 PM. Sita reaches the theater 15 minutes before the movie starts and spends 10 minutes after the movie buying snacks. At what time will she leave the theater?",
        options: ["7:15 PM", "7:25 PM", "7:30 PM", "7:40 PM"],
        correctAnswer: "7:25 PM",
        explanation: "The movie ends at 7:15 PM. Sita spends 10 more minutes buying snacks, so she leaves at 7:25 PM.",
        wrongAnswerExplanations: {
            "7:15 PM": "This is when the movie ends, but Sita still spends 10 minutes buying snacks afterward.",
            "7:30 PM": "This gives her 15 minutes after the movie, but she only spends 10 minutes.",
            "7:40 PM": "This is too late based on the given information."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch4_t3_qm4',
        type: "mcq",
        question: "Raju goes to bed at 9:30 PM and wakes up at 6:30 AM. If he takes 15 minutes to fall asleep, how many hours of sleep does he get?",
        options: ["8 hours 45 minutes", "9 hours", "9 hours 15 minutes", "9 hours 45 minutes"],
        correctAnswer: "8 hours 45 minutes",
        explanation: "From 9:30 PM to 6:30 AM is 9 hours. Subtracting 15 minutes to fall asleep, Raju sleeps for 9 - 0.25 = 8.75 hours = 8 hours 45 minutes.",
        wrongAnswerExplanations: {
            "9 hours": "This doesn't account for the 15 minutes it takes Raju to fall asleep.",
            "9 hours 15 minutes": "This incorrectly adds the 15 minutes instead of subtracting it.",
            "9 hours 45 minutes": "This calculation is incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch4_t3_qm5',
        type: "mcq",
        question: "Meena has math, science, and English homework. Math takes 30 minutes, science takes twice as long as math, and English takes half as long as science. How much total time does Meena need for homework?",
        options: ["75 minutes", "90 minutes", "105 minutes", "120 minutes"],
        correctAnswer: "105 minutes",
        explanation: "Math = 30 min. Science = 2 × 30 = 60 min. English = 60 ÷ 2 = 30 min. Total: 30 + 60 + 30 = 105 minutes.",
        wrongAnswerExplanations: {
            "75 minutes": "This calculation is incorrect.",
            "90 minutes": "This doesn't account for all the homework times correctly.",
            "120 minutes": "This is more time than needed based on the given information."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch4_t3_qm6',
        type: "mcq",
        question: "A football match has two halves of 45 minutes each with a 15-minute break in between. If the match starts at 4:15 PM, at what time will it end?",
        options: ["5:45 PM", "6:00 PM", "6:15 PM", "6:30 PM"],
        correctAnswer: "6:00 PM",
        explanation: "First half: 4:15-5:00 PM (45 min). Break: 5:00-5:15 PM (15 min). Second half: 5:15-6:00 PM (45 min). Total: 4:15-6:00 PM.",
        wrongAnswerExplanations: {
            "5:45 PM": "This doesn't include the break and second half correctly.",
            "6:15 PM": "This includes too much time, perhaps counting an extra 15 minutes.",
            "6:30 PM": "This includes too much time, perhaps counting an extra 30 minutes."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch4_t3_qm7',
        type: "mcq",
        question: "Arun's daily schedule includes: 1 hour for morning routine, 6 hours at school, 2 hours for homework and study, 3 hours for play and activities, 1 hour for meals, and the rest for sleep. How many hours does Arun sleep daily?",
        options: ["9 hours", "10 hours", "11 hours", "12 hours"],
        correctAnswer: "11 hours",
        explanation: "Total time for activities: 1 + 6 + 2 + 3 + 1 = 13 hours. A day has 24 hours, so sleep time = 24 - 13 = 11 hours.",
        wrongAnswerExplanations: {
            "9 hours": "This calculation is incorrect.",
            "10 hours": "This doesn't correctly account for all 24 hours in the day.",
            "12 hours": "This gives too many hours for sleep based on the schedule."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch4_t3_qm8',
        type: "mcq",
        question: "If Priya completes her homework in 1 hour and 20 minutes, and Rahul takes ¾ of that time, how many minutes does Rahul take?",
        options: ["45 minutes", "60 minutes", "75 minutes", "80 minutes"],
        correctAnswer: "60 minutes",
        explanation: "Priya's time: 1 hour 20 minutes = 80 minutes. Rahul's time: ¾ × 80 = 60 minutes = 1 hour.",
        wrongAnswerExplanations: {
            "45 minutes": "This would be a little more than half (½) of Priya's time, not ¾.",
            "75 minutes": "This is slightly less than Priya's time but more than ¾ of it.",
            "80 minutes": "This is Priya's full time, not ¾ of it."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch4_t3_qm9',
        type: "mcq",
        question: "Ram's school starts at 8:30 AM and ends at 3:00 PM with a 30-minute lunch break. How many hours of class time does Ram have each day?",
        options: ["6 hours", "6 hours 30 minutes", "7 hours", "7 hours 30 minutes"],
        correctAnswer: "6 hours",
        explanation: "From 8:30 AM to 3:00 PM is 6 hours 30 minutes. Subtracting the 30-minute lunch break gives 6 hours of class time.",
        wrongAnswerExplanations: {
            "6 hours 30 minutes": "This doesn't subtract the lunch break from the total time.",
            "7 hours": "This is more than the actual class time.",
            "7 hours 30 minutes": "This is more than the total time at school."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch4_t3_qm10',
        type: "mcq",
        question: "If Anita reads 3 pages of a book in 15 minutes, how long will it take her to read a 24-page story?",
        options: ["1 hour", "1 hour 15 minutes", "2 hours", "2 hours 15 minutes"],
        correctAnswer: "2 hours",
        explanation: "Anita reads 3 pages in 15 minutes, so 1 page takes 5 minutes. 24 pages × 5 minutes = 120 minutes = 2 hours.",
        wrongAnswerExplanations: {
            "1 hour": "This would only be enough time to read 12 pages at Anita's reading speed.",
            "1 hour 15 minutes": "This would only be enough time to read 15 pages.",
            "2 hours 15 minutes": "This is more time than needed to read 24 pages."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch4_t3_qm11',
        type: "mcq",
        question: "The school library is open from 9:00 AM to 4:30 PM. If Divya spends 2 hours 45 minutes in the library and leaves just before closing time, at what time did she arrive?",
        options: ["1:15 PM", "1:30 PM", "1:45 PM", "2:00 PM"],
        correctAnswer: "1:45 PM",
        explanation: "Working backward: Divya leaves at 4:30 PM. She spends 2 hours 45 minutes there, so she arrives at 4:30 - 2:45 = 1:45 PM.",
        wrongAnswerExplanations: {
            "1:15 PM": "This would mean spending 3 hours 15 minutes in the library, not 2 hours 45 minutes.",
            "1:30 PM": "This would mean spending 3 hours in the library, not 2 hours 45 minutes.",
            "2:00 PM": "This would mean spending 2 hours 30 minutes in the library, not 2 hours 45 minutes."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch4_t3_qm12',
        type: "mcq",
        question: "Arjun's weekly schedule includes 35 hours of school, 14 hours of sleep each day, and 7 hours of playtime. How many hours remain in the week for other activities?",
        options: ["14 hours", "16 hours", "18 hours", "20 hours"],
        correctAnswer: "16 hours",
        explanation: "Total hours in a week: 7 days × 24 hours = 168 hours. Used time: 35 (school) + 98 (sleep: 7 days × 14 hours) + 7 (play) = 140 hours. Remaining: 168 - 140 = 28 hours.",
        wrongAnswerExplanations: {
            "14 hours": "This calculation is incorrect.",
            "18 hours": "This calculation is incorrect.",
            "20 hours": "This calculation is incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch4_t3_qm13',
        type: "mcq",
        question: "A train journey begins at 8:15 AM and ends at 11:45 AM. If the train makes three stops of 10 minutes each, how long is the actual traveling time?",
        options: ["3 hours", "3 hours 10 minutes", "3 hours 20 minutes", "3 hours 30 minutes"],
        correctAnswer: "3 hours",
        explanation: "Total journey time: 8:15 AM to 11:45 AM = 3 hours 30 minutes. Three 10-minute stops = 30 minutes. Actual traveling time = 3 hours 30 minutes - 30 minutes = 3 hours.",
        wrongAnswerExplanations: {
            "3 hours 10 minutes": "This doesn't correctly account for all three stops.",
            "3 hours 20 minutes": "This doesn't correctly account for all three stops.",
            "3 hours 30 minutes": "This is the total journey time including stops, not the actual traveling time."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch4_t3_qm14',
        type: "mcq",
        question: "Sanjay's swimming class is from 5:30 PM to 6:15 PM on Mondays and Wednesdays. If he attends for 8 weeks, how many total minutes of swimming classes will he have?",
        options: ["360 minutes", "540 minutes", "720 minutes", "1080 minutes"],
        correctAnswer: "720 minutes",
        explanation: "Each class: 6:15 - 5:30 = 45 minutes. Number of classes: 2 days × 8 weeks = 16 classes. Total time: 16 × 45 = 720 minutes.",
        wrongAnswerExplanations: {
            "360 minutes": "This only accounts for one day per week for 8 weeks.",
            "540 minutes": "This calculation is incorrect.",
            "1080 minutes": "This calculation is incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch4_t3_qm15',
        type: "mcq",
        question: "Vijay is preparing a weekly schedule. If he spends 40 hours at school, sleeps 8 hours daily, and needs 2 hours daily for meals and 1 hour daily for bathing and dressing, how many hours per week does he have for other activities?",
        options: ["37 hours", "39 hours", "49 hours", "51 hours"],
        correctAnswer: "51 hours",
        explanation: "School: 40 hours. Sleep: 7 days × 8 hours = 56 hours. Meals: 7 days × 2 hours = 14 hours. Bathing/dressing: 7 days × 1 hour = 7 hours. Total used: 40 + 56 + 14 + 7 = 117 hours. Total in week: 7 × 24 = 168 hours. Remaining: 168 - 117 = 51 hours.",
        wrongAnswerExplanations: {
            "37 hours": "This calculation is incorrect.",
            "39 hours": "This calculation is incorrect.",
            "49 hours": "This calculation is off by a small amount."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch4_t3_qm16',
        type: "mcq",
        question: "A TV program schedule shows: News (15 minutes), Cartoon (25 minutes), Educational show (30 minutes), and Music (20 minutes). If the program begins at 4:00 PM, at what time will the Music section end?",
        options: ["5:15 PM", "5:20 PM", "5:30 PM", "5:45 PM"],
        correctAnswer: "5:30 PM",
        explanation: "News: 4:00-4:15 PM (15 min). Cartoon: 4:15-4:40 PM (25 min). Educational show: 4:40-5:10 PM (30 min). Music: 5:10-5:30 PM (20 min).",
        wrongAnswerExplanations: {
            "5:15 PM": "This doesn't account for the full length of all programs.",
            "5:20 PM": "This doesn't account for the full length of all programs.",
            "5:45 PM": "This includes more time than the total of all programs."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch4_t3_qm17',
        type: "mcq",
        question: "Riya divided her 2-hour study session into 4 equal parts to study different subjects. She took a 5-minute break after each part except the last. How long did she spend studying each subject?",
        options: ["25 minutes", "28 minutes", "30 minutes", "35 minutes"],
        correctAnswer: "28 minutes",
        explanation: "Total time: 2 hours = 120 minutes. Breaks: 3 breaks × 5 minutes = 15 minutes. Study time: 120 - 15 = 105 minutes. Each subject: 105 ÷ 4 = 26.25 minutes, which rounds to 26 minutes.",
        wrongAnswerExplanations: {
            "25 minutes": "This doesn't account for the breaks correctly.",
            "30 minutes": "This would give 120 minutes of study time, not accounting for breaks.",
            "35 minutes": "This would exceed the total available time."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch4_t3_qm18',
        type: "mcq",
        question: "A recipe calls for baking a cake for 35 minutes. If you put it in the oven at 3:15 PM, what is the earliest time you should check if it's ready?",
        options: ["3:40 PM", "3:45 PM", "3:50 PM", "4:00 PM"],
        correctAnswer: "3:50 PM",
        explanation: "Starting at 3:15 PM and baking for 35 minutes means the cake will be ready at 3:15 + 0:35 = 3:50 PM.",
        wrongAnswerExplanations: {
            "3:40 PM": "This is only 25 minutes of baking time, which is not enough.",
            "3:45 PM": "This is only 30 minutes of baking time, which is not enough.",
            "4:00 PM": "This is 45 minutes of baking time, which is too long."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch4_t3_qm19',
        type: "mcq",
        question: "Aman's Sunday schedule includes: breakfast (30 minutes), homework (1 hour 45 minutes), playing with friends (2 hours 15 minutes), and family time (1 hour 30 minutes). How much total time do these activities take?",
        options: ["5 hours", "5 hours 30 minutes", "6 hours", "6 hours 30 minutes"],
        correctAnswer: "6 hours",
        explanation: "Breakfast: 30 minutes. Homework: 1 hour 45 minutes = 105 minutes. Playing: 2 hours 15 minutes = 135 minutes. Family time: 1 hour 30 minutes = 90 minutes. Total: 30 + 105 + 135 + 90 = 360 minutes = 6 hours.",
        wrongAnswerExplanations: {
            "5 hours": "This doesn't account for all the time correctly.",
            "5 hours 30 minutes": "This doesn't account for all the time correctly.",
            "6 hours 30 minutes": "This counts too much time for the activities."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch4_t3_qm20',
        type: "mcq",
        question: "A movie starts at 3:45 PM. There are 15 minutes of advertisements, followed by 20 minutes of previews before the actual movie begins. If the movie itself is 1 hour 35 minutes long, at what time will the movie end?",
        options: ["5:55 PM", "6:05 PM", "6:25 PM", "6:55 PM"],
        correctAnswer: "5:55 PM",
        explanation: "Advertisements and previews: 15 + 20 = 35 minutes. Movie starts at: 3:45 + 0:35 = 4:20 PM. Movie length: 1 hour 35 minutes. End time: 4:20 + 1:35 = 5:55 PM.",
        wrongAnswerExplanations: {
            "6:05 PM": "This adds too much time.",
            "6:25 PM": "This adds too much time, perhaps counting previews twice.",
            "6:55 PM": "This adds much too much time to the calculation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    }
];
