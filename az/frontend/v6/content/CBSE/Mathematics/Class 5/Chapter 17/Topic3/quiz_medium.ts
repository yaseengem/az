import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl5_ch17_t3_qm1',
        type: 'mcq',
        question: 'If you have 3 hours of homework and 2 hours of play time, and you start at 3:00 PM, when will you finish all activities?',
        options: [
            '6:00 PM',
            '7:00 PM',
            '8:00 PM',
            '9:00 PM'
        ],
        correctAnswer: '8:00 PM',
        explanation: '3:00 PM + 3 hours homework = 6:00 PM, then + 2 hours play time = 8:00 PM.',
        wrongAnswerExplanations: {
            '6:00 PM': 'This is only the time after homework, not including play time.',
            '7:00 PM': 'This is incorrect. Add both the homework and play time to the start time.',
            '9:00 PM': 'This is too late. The total time is 5 hours (3 + 2).'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t3_qm2',
        type: 'mcq',
        question: 'If today is Monday, what day will it be 10 days from now?',
        options: [
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ],
        correctAnswer: 'Thursday',
        explanation: '10 days = 1 week (7 days) + 3 days. Monday + 3 days = Thursday.',
        wrongAnswerExplanations: {
            'Wednesday': 'This is 9 days from Monday.',
            'Friday': 'This is 11 days from Monday.',
            'Saturday': 'This is 12 days from Monday.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t3_qm3',
        type: 'mcq',
        question: 'If a movie starts at 6:45 PM and ends at 9:15 PM, how long is the movie?',
        options: [
            '2 hours',
            '2 hours 15 minutes',
            '2 hours 30 minutes',
            '2 hours 45 minutes'
        ],
        correctAnswer: '2 hours 30 minutes',
        explanation: 'From 6:45 PM to 9:15 PM is 2 hours and 30 minutes (6:45-7:45 = 1 hour, 7:45-8:45 = 1 hour, 8:45-9:15 = 30 minutes).',
        wrongAnswerExplanations: {
            '2 hours': 'This is too short. Count the minutes as well.',
            '2 hours 15 minutes': 'This is incorrect. Count the time carefully.',
            '2 hours 45 minutes': 'This is too long. Count the time carefully.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t3_qm4',
        type: 'mcq',
        question: 'If you have a 1-hour lunch break at 12:30 PM and then 2 hours of classes, when will your classes end?',
        options: [
            '2:30 PM',
            '3:00 PM',
            '3:30 PM',
            '4:00 PM'
        ],
        correctAnswer: '3:30 PM',
        explanation: '12:30 PM + 1 hour lunch = 1:30 PM, then + 2 hours classes = 3:30 PM.',
        wrongAnswerExplanations: {
            '2:30 PM': 'This is only after lunch, not including class time.',
            '3:00 PM': 'This is incorrect. Add both the lunch break and class time.',
            '4:00 PM': 'This is too late. The total time is 3 hours (1 + 2).'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t3_qm5',
        type: 'mcq',
        question: 'If today is March 15th, what date will it be 3 weeks from now?',
        options: [
            'April 1st',
            'April 5th',
            'April 8th',
            'April 12th'
        ],
        correctAnswer: 'April 5th',
        explanation: '3 weeks = 21 days. March has 31 days, so 15 + 21 = 36. 36 - 31 = 5, so it will be April 5th.',
        wrongAnswerExplanations: {
            'April 1st': 'This is less than 3 weeks from March 15th.',
            'April 8th': 'This is more than 3 weeks from March 15th.',
            'April 12th': 'This is much more than 3 weeks from March 15th.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t3_qm6',
        type: 'mcq',
        question: 'If you have a 45-minute piano lesson at 4:15 PM and then a 1-hour dance class, when will your dance class end?',
        options: [
            '5:30 PM',
            '6:00 PM',
            '6:15 PM',
            '6:30 PM'
        ],
        correctAnswer: '6:00 PM',
        explanation: '4:15 PM + 45 minutes = 5:00 PM, then + 1 hour = 6:00 PM.',
        wrongAnswerExplanations: {
            '5:30 PM': 'This is only after the piano lesson, not including dance class.',
            '6:15 PM': 'This is incorrect. Add both the piano lesson and dance class time.',
            '6:30 PM': 'This is too late. The total time is 1 hour and 45 minutes.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t3_qm7',
        type: 'mcq',
        question: 'If a train journey takes 2 hours and 45 minutes and starts at 10:20 AM, when will it arrive?',
        options: [
            '12:45 PM',
            '1:00 PM',
            '1:05 PM',
            '1:15 PM'
        ],
        correctAnswer: '1:05 PM',
        explanation: '10:20 AM + 2 hours = 12:20 PM, then + 45 minutes = 1:05 PM.',
        wrongAnswerExplanations: {
            '12:45 PM': 'This is only 2 hours and 25 minutes after 10:20 AM.',
            '1:00 PM': 'This is 2 hours and 40 minutes after 10:20 AM.',
            '1:15 PM': 'This is 2 hours and 55 minutes after 10:20 AM.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t3_qm8',
        type: 'mcq',
        question: 'If you have a 30-minute break at 11:00 AM and then 2 hours of study time, when will you finish studying?',
        options: [
            '12:30 PM',
            '1:00 PM',
            '1:30 PM',
            '2:00 PM'
        ],
        correctAnswer: '1:30 PM',
        explanation: '11:00 AM + 30 minutes = 11:30 AM, then + 2 hours = 1:30 PM.',
        wrongAnswerExplanations: {
            '12:30 PM': 'This is only after the break, not including study time.',
            '1:00 PM': 'This is incorrect. Add both the break and study time.',
            '2:00 PM': 'This is too late. The total time is 2 hours and 30 minutes.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t3_qm9',
        type: 'mcq',
        question: 'If today is January 28th, what date will it be 2 weeks from now?',
        options: [
            'February 4th',
            'February 11th',
            'February 18th',
            'February 25th'
        ],
        correctAnswer: 'February 11th',
        explanation: '2 weeks = 14 days. January has 31 days, so 28 + 14 = 42. 42 - 31 = 11, so it will be February 11th.',
        wrongAnswerExplanations: {
            'February 4th': 'This is less than 2 weeks from January 28th.',
            'February 18th': 'This is more than 2 weeks from January 28th.',
            'February 25th': 'This is much more than 2 weeks from January 28th.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t3_qm10',
        type: 'mcq',
        question: 'If you have a 1-hour art class at 2:30 PM and then a 45-minute music lesson, when will your music lesson end?',
        options: [
            '3:45 PM',
            '4:00 PM',
            '4:15 PM',
            '4:30 PM'
        ],
        correctAnswer: '4:15 PM',
        explanation: '2:30 PM + 1 hour = 3:30 PM, then + 45 minutes = 4:15 PM.',
        wrongAnswerExplanations: {
            '3:45 PM': 'This is only after the art class, not including music lesson.',
            '4:00 PM': 'This is incorrect. Add both the art class and music lesson time.',
            '4:30 PM': 'This is too late. The total time is 1 hour and 45 minutes.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t3_qm11',
        type: 'mcq',
        question: 'If a TV show starts at 7:15 PM and ends at 8:45 PM, how long is the show?',
        options: [
            '1 hour',
            '1 hour 15 minutes',
            '1 hour 30 minutes',
            '1 hour 45 minutes'
        ],
        correctAnswer: '1 hour 30 minutes',
        explanation: 'From 7:15 PM to 8:45 PM is 1 hour and 30 minutes (7:15-8:15 = 1 hour, 8:15-8:45 = 30 minutes).',
        wrongAnswerExplanations: {
            '1 hour': 'This is too short. Count the minutes as well.',
            '1 hour 15 minutes': 'This is incorrect. Count the time carefully.',
            '1 hour 45 minutes': 'This is too long. Count the time carefully.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t3_qm12',
        type: 'mcq',
        question: 'If you have a 20-minute break at 10:40 AM and then 1 hour and 30 minutes of class, when will your class end?',
        options: [
            '11:50 AM',
            '12:00 PM',
            '12:10 PM',
            '12:30 PM'
        ],
        correctAnswer: '12:30 PM',
        explanation: '10:40 AM + 20 minutes = 11:00 AM, then + 1 hour and 30 minutes = 12:30 PM.',
        wrongAnswerExplanations: {
            '11:50 AM': 'This is only after the break, not including class time.',
            '12:00 PM': 'This is incorrect. Add both the break and class time.',
            '12:10 PM': 'This is too early. The total time is 1 hour and 50 minutes.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t3_qm13',
        type: 'mcq',
        question: 'If today is April 25th, what date will it be 3 weeks from now?',
        options: [
            'May 9th',
            'May 16th',
            'May 23rd',
            'May 30th'
        ],
        correctAnswer: 'May 16th',
        explanation: '3 weeks = 21 days. April has 30 days, so 25 + 21 = 46. 46 - 30 = 16, so it will be May 16th.',
        wrongAnswerExplanations: {
            'May 9th': 'This is less than 3 weeks from April 25th.',
            'May 23rd': 'This is more than 3 weeks from April 25th.',
            'May 30th': 'This is much more than 3 weeks from April 25th.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t3_qm14',
        type: 'mcq',
        question: 'If you have a 1-hour swimming lesson at 3:45 PM and then a 45-minute break, when will your break end?',
        options: [
            '4:45 PM',
            '5:00 PM',
            '5:15 PM',
            '5:30 PM'
        ],
        correctAnswer: '5:30 PM',
        explanation: '3:45 PM + 1 hour = 4:45 PM, then + 45 minutes = 5:30 PM.',
        wrongAnswerExplanations: {
            '4:45 PM': 'This is only after the swimming lesson, not including break time.',
            '5:00 PM': 'This is incorrect. Add both the swimming lesson and break time.',
            '5:15 PM': 'This is too early. The total time is 1 hour and 45 minutes.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t3_qm15',
        type: 'mcq',
        question: 'If a bus journey takes 1 hour and 15 minutes and starts at 9:20 AM, when will it arrive?',
        options: [
            '10:20 AM',
            '10:35 AM',
            '10:45 AM',
            '11:00 AM'
        ],
        correctAnswer: '10:35 AM',
        explanation: '9:20 AM + 1 hour = 10:20 AM, then + 15 minutes = 10:35 AM.',
        wrongAnswerExplanations: {
            '10:20 AM': 'This is only 1 hour after 9:20 AM.',
            '10:45 AM': 'This is 1 hour and 25 minutes after 9:20 AM.',
            '11:00 AM': 'This is 1 hour and 40 minutes after 9:20 AM.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t3_qm16',
        type: 'mcq',
        question: 'If you have a 30-minute break at 2:00 PM and then 1 hour and 45 minutes of study time, when will you finish studying?',
        options: [
            '3:30 PM',
            '3:45 PM',
            '4:00 PM',
            '4:15 PM'
        ],
        correctAnswer: '4:15 PM',
        explanation: '2:00 PM + 30 minutes = 2:30 PM, then + 1 hour and 45 minutes = 4:15 PM.',
        wrongAnswerExplanations: {
            '3:30 PM': 'This is only after the break, not including study time.',
            '3:45 PM': 'This is incorrect. Add both the break and study time.',
            '4:00 PM': 'This is too early. The total time is 2 hours and 15 minutes.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t3_qm17',
        type: 'mcq',
        question: 'If today is July 20th, what date will it be 4 weeks from now?',
        options: [
            'August 10th',
            'August 17th',
            'August 24th',
            'August 31st'
        ],
        correctAnswer: 'August 17th',
        explanation: '4 weeks = 28 days. July has 31 days, so 20 + 28 = 48. 48 - 31 = 17, so it will be August 17th.',
        wrongAnswerExplanations: {
            'August 10th': 'This is less than 4 weeks from July 20th.',
            'August 24th': 'This is more than 4 weeks from July 20th.',
            'August 31st': 'This is much more than 4 weeks from July 20th.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t3_qm18',
        type: 'mcq',
        question: 'If you have a 45-minute art class at 4:30 PM and then a 1-hour dance class, when will your dance class end?',
        options: [
            '5:45 PM',
            '6:00 PM',
            '6:15 PM',
            '6:30 PM'
        ],
        correctAnswer: '6:15 PM',
        explanation: '4:30 PM + 45 minutes = 5:15 PM, then + 1 hour = 6:15 PM.',
        wrongAnswerExplanations: {
            '5:45 PM': 'This is only after the art class, not including dance class.',
            '6:00 PM': 'This is incorrect. Add both the art class and dance class time.',
            '6:30 PM': 'This is too late. The total time is 1 hour and 45 minutes.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t3_qm19',
        type: 'mcq',
        question: 'If a movie starts at 5:20 PM and ends at 7:50 PM, how long is the movie?',
        options: [
            '2 hours',
            '2 hours 15 minutes',
            '2 hours 30 minutes',
            '2 hours 45 minutes'
        ],
        correctAnswer: '2 hours 30 minutes',
        explanation: 'From 5:20 PM to 7:50 PM is 2 hours and 30 minutes (5:20-6:20 = 1 hour, 6:20-7:20 = 1 hour, 7:20-7:50 = 30 minutes).',
        wrongAnswerExplanations: {
            '2 hours': 'This is too short. Count the minutes as well.',
            '2 hours 15 minutes': 'This is incorrect. Count the time carefully.',
            '2 hours 45 minutes': 'This is too long. Count the time carefully.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t3_qm20',
        type: 'mcq',
        question: 'If you have a 15-minute break at 11:45 AM and then 2 hours of class, when will your class end?',
        options: [
            '1:45 PM',
            '2:00 PM',
            '2:15 PM',
            '2:30 PM'
        ],
        correctAnswer: '2:00 PM',
        explanation: '11:45 AM + 15 minutes = 12:00 PM, then + 2 hours = 2:00 PM.',
        wrongAnswerExplanations: {
            '1:45 PM': 'This is only after the break, not including class time.',
            '2:15 PM': 'This is incorrect. Add both the break and class time.',
            '2:30 PM': 'This is too late. The total time is 2 hours and 15 minutes.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    }
];
