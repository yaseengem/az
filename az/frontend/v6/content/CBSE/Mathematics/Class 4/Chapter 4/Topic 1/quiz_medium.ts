import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch4_t1_qm1',
        type: "mcq",
        question: "If the hour hand moves from 2 to 6, how many hours have passed?",
        options: [
            "2 hours",
            "4 hours",
            "6 hours",
            "8 hours"
        ],
        correctAnswer: "4 hours",
        explanation: "From 2 to 6 on the clock is 4 hours (count: 2→3→4→5→6). The hour hand moves through 4 numbers. ⏰",
        wrongAnswerExplanations: {
            "2 hours": "This isn't enough time. Count the numbers the hour hand passes through.",
            "6 hours": "This counts to 6, not the difference between 2 and 6.",
            "8 hours": "This is double the actual time. From 2 to 6 is 4 hours."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch4_t1_qm2',
        type: "mcq",
        question: "Raj's birthday party starts at 4:15 PM and ends at 6:45 PM. How long does the party last?",
        options: [
            "2 hours",
            "2 hours 15 minutes",
            "2 hours 30 minutes",
            "2 hours 45 minutes"
        ],
        correctAnswer: "2 hours 30 minutes",
        explanation: "From 4:15 to 6:45 is 2 hours and 30 minutes (4:15 to 6:15 is 2 hours, plus 30 more minutes). 🎂",
        wrongAnswerExplanations: {
            "2 hours": "This doesn't account for the additional minutes.",
            "2 hours 15 minutes": "This is 15 minutes short of the correct answer.",
            "2 hours 45 minutes": "This counts 15 minutes too many."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch4_t1_qm3',
        type: "mcq",
        question: "The hour hand makes a complete rotation in how many hours?",
        options: [
            "1 hour",
            "6 hours",
            "12 hours",
            "24 hours"
        ],
        correctAnswer: "12 hours",
        explanation: "The hour hand completes one full rotation in 12 hours, going from 12 all the way around and back to 12. 🕐",
        wrongAnswerExplanations: {
            "1 hour": "The minute hand completes a rotation in 1 hour, not the hour hand.",
            "6 hours": "In 6 hours, the hour hand completes half a rotation.",
            "24 hours": "In 24 hours, the hour hand completes two rotations."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch4_t1_qm4',
        type: "mcq",
        question: "What time will it be 3 hours and 25 minutes after 10:15?",
        options: [
            "1:30",
            "1:40",
            "1:35",
            "1:50"
        ],
        correctAnswer: "1:40",
        explanation: "10:15 + 3 hours = 1:15, then 1:15 + 25 minutes = 1:40. Add hours first, then minutes. ⏱️",
        wrongAnswerExplanations: {
            "1:30": "This is 10 minutes short. Check the calculation again.",
            "1:35": "This is 5 minutes short. Check the calculation again.",
            "1:50": "This is 10 minutes too many. Check the calculation again."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch4_t1_qm5',
        type: "mcq",
        question: "If it takes 45 minutes to cook a chicken, and you put it in the oven at 2:25, at what time will it be ready?",
        options: [
            "3:00",
            "3:10",
            "3:15",
            "3:20"
        ],
        correctAnswer: "3:10",
        explanation: "2:25 + 45 minutes = 3:10 (2:25 + 35 minutes = 3:00, then 3:00 + 10 more minutes = 3:10). 🍗",
        wrongAnswerExplanations: {
            "3:00": "This is only 35 minutes after 2:25, not 45 minutes.",
            "3:15": "This is 50 minutes after 2:25, which is 5 minutes too long.",
            "3:20": "This is 55 minutes after 2:25, which is 10 minutes too long."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch4_t1_qm6',
        type: "mcq",
        question: "If the minute hand moves from 3 to 9 on the clock face, how many minutes have passed?",
        options: [
            "6 minutes",
            "15 minutes",
            "30 minutes",
            "45 minutes"
        ],
        correctAnswer: "30 minutes",
        explanation: "From 3 to 9 is halfway around the clock. The minute hand takes 30 minutes to move halfway around. 🕧",
        wrongAnswerExplanations: {
            "6 minutes": "This counts the difference between 3 and 9 as numbers, not as minutes on a clock.",
            "15 minutes": "This is the time from 12 to 3, not from 3 to 9.",
            "45 minutes": "This is the time from 9 to 3 going the long way around, not from 3 to 9."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch4_t1_qm7',
        type: "mcq",
        question: "What angle is formed by the hands of a clock at 3:00?",
        options: [
            "0 degrees",
            "90 degrees",
            "180 degrees",
            "270 degrees"
        ],
        correctAnswer: "90 degrees",
        explanation: "At 3:00, the hour hand points to 3 and the minute hand to 12, making a right angle (90 degrees). 📐",
        wrongAnswerExplanations: {
            "0 degrees": "The hands would be together at 0 degrees, which happens at 12:00.",
            "180 degrees": "The hands would be opposite at 180 degrees, which happens at 6:00.",
            "270 degrees": "This is 3/4 of a full circle, which is not the angle formed at 3:00."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch4_t1_qm8',
        type: "mcq",
        question: "Maya starts her homework at 5:20 PM and finishes at 6:05 PM. How long did she spend on homework?",
        options: [
            "35 minutes",
            "40 minutes",
            "45 minutes",
            "55 minutes"
        ],
        correctAnswer: "45 minutes",
        explanation: "From 5:20 to 6:05 is 45 minutes (5:20 to 6:00 is 40 minutes, plus 5 more minutes to 6:05). 📚",
        wrongAnswerExplanations: {
            "35 minutes": "This is 10 minutes short. Count from 5:20 to 6:05 carefully.",
            "40 minutes": "This is 5 minutes short. It only counts from 5:20 to 6:00.",
            "55 minutes": "This is 10 minutes too long. Count from 5:20 to 6:05 carefully."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch4_t1_qm9',
        type: "mcq",
        question: "What time is 135 minutes after 2:30 PM?",
        options: [
            "4:15 PM",
            "4:30 PM",
            "4:45 PM",
            "5:00 PM"
        ],
        correctAnswer: "4:45 PM",
        explanation: "135 minutes = 2 hours 15 minutes. So 2:30 + 2:15 = 4:45. Break the total into hours and minutes. ⏲️",
        wrongAnswerExplanations: {
            "4:15 PM": "This is only 105 minutes after 2:30, not 135 minutes.",
            "4:30 PM": "This is 2 hours after 2:30, but we need 2 hours and 15 minutes.",
            "5:00 PM": "This is 150 minutes after 2:30, which is 15 minutes too many."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch4_t1_qm10',
        type: "mcq",
        question: "A movie starts at 6:15 PM and is 2 hours and 25 minutes long. At what time will the movie end?",
        options: [
            "8:30 PM",
            "8:40 PM",
            "8:45 PM",
            "9:00 PM"
        ],
        correctAnswer: "8:40 PM",
        explanation: "6:15 + 2 hours = 8:15, then 8:15 + 25 minutes = 8:40. Add hours first, then minutes. 🎬",
        wrongAnswerExplanations: {
            "8:30 PM": "This is 10 minutes short. The movie is 2 hours and 25 minutes long.",
            "8:45 PM": "This is 5 minutes too long. Check your calculation again.",
            "9:00 PM": "This is 20 minutes too long. The movie is 2 hours and 25 minutes long."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch4_t1_qm11',
        type: "mcq",
        question: "How many hours are there from 9:30 AM to 3:45 PM?",
        options: [
            "5 hours 45 minutes",
            "6 hours 15 minutes",
            "6 hours 30 minutes",
            "7 hours 15 minutes"
        ],
        correctAnswer: "6 hours 15 minutes",
        explanation: "From 9:30 AM to 3:30 PM is 6 hours, plus 15 more minutes to 3:45 PM, so 6 hours 15 minutes. 🕑",
        wrongAnswerExplanations: {
            "5 hours 45 minutes": "This is 30 minutes short. Count the hours from 9:30 to 3:45 carefully.",
            "6 hours 30 minutes": "This is 15 minutes too many. Count the minutes carefully.",
            "7 hours 15 minutes": "This is 1 hour too many. Count the hours from 9:30 to 3:45 carefully."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch4_t1_qm12',
        type: "mcq",
        question: "A bus journey starts at 8:15 AM and ends at 11:50 AM. How long does the journey take?",
        options: [
            "3 hours 35 minutes",
            "3 hours 45 minutes",
            "3 hours 25 minutes",
            "3 hours 15 minutes"
        ],
        correctAnswer: "3 hours 35 minutes",
        explanation: "From 8:15 to 11:15 is 3 hours, then 11:15 to 11:50 is 35 minutes more. Total: 3 hours 35 minutes. 🚌",
        wrongAnswerExplanations: {
            "3 hours 45 minutes": "This is 10 minutes too long. Check the minutes from 11:15 to 11:50.",
            "3 hours 25 minutes": "This is 10 minutes short. Check the minutes from 11:15 to 11:50.",
            "3 hours 15 minutes": "This is 20 minutes short. Check the minutes from 8:15 to 11:50."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch4_t1_qm13',
        type: "mcq",
        question: "If the hour hand is pointing exactly at 7, where might the minute hand point if it's 7:00?",
        options: [
            "At 7",
            "At 12",
            "At 1",
            "At 5"
        ],
        correctAnswer: "At 12",
        explanation: "At exactly 7:00, the hour hand points to 7 and the minute hand points to 12 (0 minutes past 7). ⏰",
        wrongAnswerExplanations: {
            "At 7": "If the minute hand pointed to 7, it would be 7:35, not 7:00.",
            "At 1": "If the minute hand pointed to 1, it would be 7:05, not 7:00.",
            "At 5": "If the minute hand pointed to 5, it would be 7:25, not 7:00."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch4_t1_qm14',
        type: "mcq",
        question: "What is the smallest angle between the hour and minute hands at 3:15?",
        options: [
            "0 degrees",
            "7.5 degrees",
            "15 degrees",
            "45 degrees"
        ],
        correctAnswer: "7.5 degrees",
        explanation: "At 3:15, the hour hand has moved 1/4 of the way to 4 (7.5°), while the minute hand points at 3. The angle between them is 7.5°. 📐",
        wrongAnswerExplanations: {
            "0 degrees": "The hands aren't pointing in the same direction at 3:15.",
            "15 degrees": "This is too large. Calculate the exact angle carefully.",
            "45 degrees": "This is much too large. The hands are quite close to each other at 3:15."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch4_t1_qm15',
        type: "mcq",
        question: "School ends at 3:30 PM. If it's 1:50 PM now, how long until school ends?",
        options: [
            "1 hour 20 minutes",
            "1 hour 40 minutes",
            "1 hour 50 minutes",
            "2 hours"
        ],
        correctAnswer: "1 hour 40 minutes",
        explanation: "From 1:50 to 3:30 is 1 hour 40 minutes (1:50 to 2:50 is 1 hour, then 40 more minutes to 3:30). 🏫",
        wrongAnswerExplanations: {
            "1 hour 20 minutes": "This is 20 minutes short. Count from 1:50 to 3:30 carefully.",
            "1 hour 50 minutes": "This is 10 minutes too many. Count from 1:50 to 3:30 carefully.",
            "2 hours": "This is 20 minutes too many. Count from 1:50 to 3:30 carefully."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch4_t1_qm16',
        type: "mcq",
        question: "What is unique about the angle between the hour and minute hands at 6:00?",
        options: [
            "They form a right angle",
            "They form a straight line",
            "They point in the same direction",
            "They form a 45-degree angle"
        ],
        correctAnswer: "They form a straight line",
        explanation: "At 6:00, the hour hand points down to 6 and the minute hand points up to 12, forming a straight line (180 degrees). 🕕",
        wrongAnswerExplanations: {
            "They form a right angle": "A right angle (90°) is formed at 3:00 or 9:00, not 6:00.",
            "They point in the same direction": "The hands point in the same direction at 12:00, not 6:00.",
            "They form a 45-degree angle": "They don't form a 45° angle at 6:00."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch4_t1_qm17',
        type: "mcq",
        question: "If Rohan needs to be at the doctor's office at 10:15 AM and it takes 35 minutes to get there, what time should he leave home?",
        options: [
            "9:30 AM",
            "9:40 AM",
            "9:45 AM",
            "9:50 AM"
        ],
        correctAnswer: "9:40 AM",
        explanation: "Counting backward: 10:15 - 35 minutes = 9:40 (10:15 - 15 minutes = 10:00, then 10:00 - 20 minutes = 9:40). 🏥",
        wrongAnswerExplanations: {
            "9:30 AM": "This is 10 minutes too early. Count 35 minutes before 10:15 carefully.",
            "9:45 AM": "This is 5 minutes too late. Rohan wouldn't arrive on time.",
            "9:50 AM": "This is 10 minutes too late. Rohan would be late to his appointment."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch4_t1_qm18',
        type: "mcq",
        question: "How many degrees does the minute hand turn in 24 minutes?",
        options: [
            "120 degrees",
            "144 degrees",
            "180 degrees",
            "240 degrees"
        ],
        correctAnswer: "144 degrees",
        explanation: "The minute hand turns 6 degrees per minute (360° ÷ 60 min = 6° per min). In 24 minutes: 24 × 6° = 144°. 📐",
        wrongAnswerExplanations: {
            "120 degrees": "This would be for 20 minutes (20 × 6° = 120°), not 24 minutes.",
            "180 degrees": "This would be for 30 minutes (30 × 6° = 180°), not 24 minutes.",
            "240 degrees": "This would be for 40 minutes (40 × 6° = 240°), not 24 minutes."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch4_t1_qm19',
        type: "mcq",
        question: "If the time is 4:25, how would you read it in words?",
        options: [
            "Twenty-five minutes past four",
            "Twenty-five minutes to four",
            "Twenty-five minutes to five",
            "Twenty-five minutes past five"
        ],
        correctAnswer: "Twenty-five minutes past four",
        explanation: "4:25 is read as 'twenty-five minutes past four' because it's 25 minutes after 4 o'clock. ⏰",
        wrongAnswerExplanations: {
            "Twenty-five minutes to four": "This would be 3:35, not 4:25.",
            "Twenty-five minutes to five": "This would be 4:35, not 4:25.",
            "Twenty-five minutes past five": "This would be 5:25, not 4:25."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch4_t1_qm20',
        type: "mcq",
        question: "A train journey starts at 7:15 AM and takes 4 hours and 50 minutes. What time does the train arrive?",
        options: [
            "11:55 AM",
            "12:05 PM",
            "12:15 PM",
            "12:25 PM"
        ],
        correctAnswer: "12:05 PM",
        explanation: "7:15 + 4 hours = 11:15, then 11:15 + 50 minutes = 12:05. Add hours first, then minutes. 🚂",
        wrongAnswerExplanations: {
            "11:55 AM": "This is 10 minutes short. The journey is 4 hours and 50 minutes.",
            "12:15 PM": "This is 10 minutes too long. Check your calculation again.",
            "12:25 PM": "This is 20 minutes too long. The journey is 4 hours and 50 minutes."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];