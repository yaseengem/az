import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl5_ch17_t3_qe1',
        type: 'mcq',
        question: 'How many hours are there in a day?',
        options: [
            '12',
            '24',
            '36',
            '48'
        ],
        correctAnswer: '24',
        explanation: 'There are 24 hours in a day, divided into day and night.',
        wrongAnswerExplanations: {
            '12': 'This is half a day, not a full day.',
            '36': 'This is more than a day.',
            '48': 'This is two full days.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch17_t3_qe2',
        type: 'mcq',
        question: 'How many days are there in a week?',
        options: [
            '5',
            '6',
            '7',
            '8'
        ],
        correctAnswer: '7',
        explanation: 'There are 7 days in a week: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, and Sunday.',
        wrongAnswerExplanations: {
            '5': 'This is the number of weekdays, not the total days in a week.',
            '6': 'This is incorrect. A week has 7 days.',
            '8': 'This is more than a week.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch17_t3_qe3',
        type: 'mcq',
        question: 'If school starts at 8:00 AM and ends at 2:00 PM, how many hours do you spend in school?',
        options: [
            '4 hours',
            '5 hours',
            '6 hours',
            '7 hours'
        ],
        correctAnswer: '6 hours',
        explanation: 'From 8:00 AM to 2:00 PM is 6 hours (8:00-9:00, 9:00-10:00, 10:00-11:00, 11:00-12:00, 12:00-1:00, 1:00-2:00).',
        wrongAnswerExplanations: {
            '4 hours': 'This is too short for the given time period.',
            '5 hours': 'This is incorrect. Count the hours from 8 AM to 2 PM.',
            '7 hours': 'This is too long for the given time period.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch17_t3_qe4',
        type: 'mcq',
        question: 'Which month has 28 or 29 days?',
        options: [
            'January',
            'February',
            'March',
            'April'
        ],
        correctAnswer: 'February',
        explanation: 'February has 28 days in a common year and 29 days in a leap year.',
        wrongAnswerExplanations: {
            'January': 'January has 31 days.',
            'March': 'March has 31 days.',
            'April': 'April has 30 days.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch17_t3_qe5',
        type: 'mcq',
        question: 'If you sleep at 9:00 PM and wake up at 6:00 AM, how many hours do you sleep?',
        options: [
            '8 hours',
            '9 hours',
            '10 hours',
            '11 hours'
        ],
        correctAnswer: '9 hours',
        explanation: 'From 9:00 PM to 6:00 AM is 9 hours (9:00-10:00, 10:00-11:00, 11:00-12:00, 12:00-1:00, 1:00-2:00, 2:00-3:00, 3:00-4:00, 4:00-5:00, 5:00-6:00).',
        wrongAnswerExplanations: {
            '8 hours': 'This is too short for the given time period.',
            '10 hours': 'This is too long for the given time period.',
            '11 hours': 'This is incorrect. Count the hours from 9 PM to 6 AM.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch17_t3_qe6',
        type: 'mcq',
        question: 'How many months are there in a year?',
        options: [
            '10',
            '11',
            '12',
            '13'
        ],
        correctAnswer: '12',
        explanation: 'There are 12 months in a year: January, February, March, April, May, June, July, August, September, October, November, and December.',
        wrongAnswerExplanations: {
            '10': 'This is too few months.',
            '11': 'This is incorrect. A year has 12 months.',
            '13': 'This is too many months.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch17_t3_qe7',
        type: 'mcq',
        question: 'If you start homework at 3:00 PM and finish at 5:00 PM, how long did you spend on homework?',
        options: [
            '1 hour',
            '2 hours',
            '3 hours',
            '4 hours'
        ],
        correctAnswer: '2 hours',
        explanation: 'From 3:00 PM to 5:00 PM is 2 hours (3:00-4:00 and 4:00-5:00).',
        wrongAnswerExplanations: {
            '1 hour': 'This is too short for the given time period.',
            '3 hours': 'This is too long for the given time period.',
            '4 hours': 'This is incorrect. Count the hours from 3 PM to 5 PM.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch17_t3_qe8',
        type: 'mcq',
        question: 'Which day comes after Wednesday?',
        options: [
            'Monday',
            'Tuesday',
            'Thursday',
            'Friday'
        ],
        correctAnswer: 'Thursday',
        explanation: 'The days of the week in order are: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.',
        wrongAnswerExplanations: {
            'Monday': 'Monday comes before Wednesday.',
            'Tuesday': 'Tuesday comes before Wednesday.',
            'Friday': 'Friday comes after Thursday.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch17_t3_qe9',
        type: 'mcq',
        question: 'If you have a 30-minute break at 11:00 AM, when will your break end?',
        options: [
            '11:15 AM',
            '11:30 AM',
            '11:45 AM',
            '12:00 PM'
        ],
        correctAnswer: '11:30 AM',
        explanation: '30 minutes after 11:00 AM is 11:30 AM.',
        wrongAnswerExplanations: {
            '11:15 AM': 'This is only 15 minutes after 11:00 AM.',
            '11:45 AM': 'This is 45 minutes after 11:00 AM.',
            '12:00 PM': 'This is 1 hour after 11:00 AM.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch17_t3_qe10',
        type: 'mcq',
        question: 'How many minutes are there in an hour?',
        options: [
            '30',
            '45',
            '60',
            '90'
        ],
        correctAnswer: '60',
        explanation: 'There are 60 minutes in one hour.',
        wrongAnswerExplanations: {
            '30': 'This is half an hour.',
            '45': 'This is three-quarters of an hour.',
            '90': 'This is one and a half hours.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch17_t3_qe11',
        type: 'mcq',
        question: 'Which month comes after June?',
        options: [
            'May',
            'July',
            'August',
            'September'
        ],
        correctAnswer: 'July',
        explanation: 'The months in order are: January, February, March, April, May, June, July, August, September, October, November, December.',
        wrongAnswerExplanations: {
            'May': 'May comes before June.',
            'August': 'August comes after July.',
            'September': 'September comes after August.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch17_t3_qe12',
        type: 'mcq',
        question: 'If you start playing at 4:00 PM and play for 1 hour, when will you finish?',
        options: [
            '4:30 PM',
            '5:00 PM',
            '5:30 PM',
            '6:00 PM'
        ],
        correctAnswer: '5:00 PM',
        explanation: '1 hour after 4:00 PM is 5:00 PM.',
        wrongAnswerExplanations: {
            '4:30 PM': 'This is only 30 minutes after 4:00 PM.',
            '5:30 PM': 'This is 1 hour and 30 minutes after 4:00 PM.',
            '6:00 PM': 'This is 2 hours after 4:00 PM.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch17_t3_qe13',
        type: 'mcq',
        question: 'How many days are there in April?',
        options: [
            '28',
            '29',
            '30',
            '31'
        ],
        correctAnswer: '30',
        explanation: 'April has 30 days.',
        wrongAnswerExplanations: {
            '28': 'This is the number of days in February in a common year.',
            '29': 'This is the number of days in February in a leap year.',
            '31': 'This is the number of days in months like January, March, May, etc.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch17_t3_qe14',
        type: 'mcq',
        question: 'If you have dinner at 7:00 PM and it takes 30 minutes, when will you finish?',
        options: [
            '7:15 PM',
            '7:30 PM',
            '7:45 PM',
            '8:00 PM'
        ],
        correctAnswer: '7:30 PM',
        explanation: '30 minutes after 7:00 PM is 7:30 PM.',
        wrongAnswerExplanations: {
            '7:15 PM': 'This is only 15 minutes after 7:00 PM.',
            '7:45 PM': 'This is 45 minutes after 7:00 PM.',
            '8:00 PM': 'This is 1 hour after 7:00 PM.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch17_t3_qe15',
        type: 'mcq',
        question: 'Which day comes before Sunday?',
        options: [
            'Friday',
            'Saturday',
            'Monday',
            'Tuesday'
        ],
        correctAnswer: 'Saturday',
        explanation: 'The days of the week in order are: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.',
        wrongAnswerExplanations: {
            'Friday': 'Friday comes before Saturday.',
            'Monday': 'Monday comes after Sunday.',
            'Tuesday': 'Tuesday comes after Monday.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch17_t3_qe16',
        type: 'mcq',
        question: 'If you start reading at 6:00 PM and read for 45 minutes, when will you finish?',
        options: [
            '6:30 PM',
            '6:45 PM',
            '7:00 PM',
            '7:15 PM'
        ],
        correctAnswer: '6:45 PM',
        explanation: '45 minutes after 6:00 PM is 6:45 PM.',
        wrongAnswerExplanations: {
            '6:30 PM': 'This is only 30 minutes after 6:00 PM.',
            '7:00 PM': 'This is 1 hour after 6:00 PM.',
            '7:15 PM': 'This is 1 hour and 15 minutes after 6:00 PM.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch17_t3_qe17',
        type: 'mcq',
        question: 'How many weeks are there in a month?',
        options: [
            '2',
            '3',
            '4',
            '5'
        ],
        correctAnswer: '4',
        explanation: 'There are approximately 4 weeks in a month (28-31 days).',
        wrongAnswerExplanations: {
            '2': 'This is too few weeks for a month.',
            '3': 'This is too few weeks for a month.',
            '5': 'This is too many weeks for a month.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch17_t3_qe18',
        type: 'mcq',
        question: 'If you start watching TV at 5:30 PM and watch for 1 hour and 30 minutes, when will you finish?',
        options: [
            '6:30 PM',
            '7:00 PM',
            '7:30 PM',
            '8:00 PM'
        ],
        correctAnswer: '7:00 PM',
        explanation: '1 hour and 30 minutes after 5:30 PM is 7:00 PM.',
        wrongAnswerExplanations: {
            '6:30 PM': 'This is only 1 hour after 5:30 PM.',
            '7:30 PM': 'This is 2 hours after 5:30 PM.',
            '8:00 PM': 'This is 2 hours and 30 minutes after 5:30 PM.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch17_t3_qe19',
        type: 'mcq',
        question: 'Which month comes before October?',
        options: [
            'August',
            'September',
            'November',
            'December'
        ],
        correctAnswer: 'September',
        explanation: 'The months in order are: January, February, March, April, May, June, July, August, September, October, November, December.',
        wrongAnswerExplanations: {
            'August': 'August comes before September.',
            'November': 'November comes after October.',
            'December': 'December comes after November.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch17_t3_qe20',
        type: 'mcq',
        question: 'If you have a 15-minute break at 10:00 AM, when will your break end?',
        options: [
            '10:10 AM',
            '10:15 AM',
            '10:20 AM',
            '10:30 AM'
        ],
        correctAnswer: '10:15 AM',
        explanation: '15 minutes after 10:00 AM is 10:15 AM.',
        wrongAnswerExplanations: {
            '10:10 AM': 'This is only 10 minutes after 10:00 AM.',
            '10:20 AM': 'This is 20 minutes after 10:00 AM.',
            '10:30 AM': 'This is 30 minutes after 10:00 AM.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    }
];
