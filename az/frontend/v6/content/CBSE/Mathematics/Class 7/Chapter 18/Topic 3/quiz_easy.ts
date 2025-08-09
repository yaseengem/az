import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch18_t3_qe1',
        type: 'mcq',
        question: 'Which of the following is the best tool to keep track of your daily schedule?',
        options: ['Calculator', 'Calendar', 'Ruler', 'Compass'],
        correctAnswer: 'Calendar',
        explanation: 'A calendar helps you organize and plan your daily activities and events. 🗓️',
        wrongAnswerExplanations: {
            'Calculator': 'A calculator is used for mathematical calculations, not for scheduling.',
            'Ruler': 'A ruler is used to measure length, not to manage time.',
            'Compass': 'A compass is used for drawing circles or navigation, not for scheduling.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch18_t3_qe2',
        type: 'mcq',
        question: 'If your school starts at 8:00 AM and ends at 2:00 PM, how many hours do you spend at school?',
        options: ['4 hours', '5 hours', '6 hours', '7 hours'],
        correctAnswer: '6 hours',
        explanation: 'From 8:00 AM to 2:00 PM is 6 hours. ⏰',
        wrongAnswerExplanations: {
            '4 hours': '8:00 AM to 12:00 PM is 4 hours, but school ends at 2:00 PM.',
            '5 hours': 'That would be from 8:00 AM to 1:00 PM.',
            '7 hours': 'That would be from 8:00 AM to 3:00 PM.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch18_t3_qe3',
        type: 'mcq',
        question: 'What is the first step in effective time management?',
        options: ['Start working without a plan', 'Make a to-do list', 'Do the hardest task first', 'Skip breaks'],
        correctAnswer: 'Make a to-do list',
        explanation: 'Making a to-do list helps you organize tasks and manage your time better. 📝',
        wrongAnswerExplanations: {
            'Start working without a plan': 'Planning is important for effective time management.',
            'Do the hardest task first': 'This can be helpful, but planning comes first.',
            'Skip breaks': 'Skipping breaks can make you tired and less productive.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch18_t3_qe4',
        type: 'mcq',
        question: 'If you have 3 tasks and 2 hours, what should you do to finish on time?',
        options: ['Do all tasks at once', 'Prioritize tasks and set time for each', 'Ignore one task', 'Work without stopping'],
        correctAnswer: 'Prioritize tasks and set time for each',
        explanation: 'Prioritizing and allocating time helps you complete all tasks efficiently. ⏳',
        wrongAnswerExplanations: {
            'Do all tasks at once': 'Multitasking can reduce quality and increase mistakes.',
            'Ignore one task': 'All tasks should be managed, not ignored.',
            'Work without stopping': 'Breaks are important for focus and energy.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch18_t3_qe5',
        type: 'mcq',
        question: 'Which of these is a good habit for time management?',
        options: ['Procrastinate', 'Set reminders', 'Forget deadlines', 'Do everything at the last minute'],
        correctAnswer: 'Set reminders',
        explanation: 'Reminders help you remember important tasks and deadlines. ⏰',
        wrongAnswerExplanations: {
            'Procrastinate': 'Procrastination delays your work and causes stress.',
            'Forget deadlines': 'Missing deadlines can lead to incomplete work.',
            'Do everything at the last minute': 'Rushing can cause mistakes and stress.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch18_t3_qe6',
        type: 'mcq',
        question: 'If you spend 30 minutes on homework, 1 hour on sports, and 1.5 hours on reading, how much time is that in total?',
        options: ['2 hours', '2.5 hours', '3 hours', '3.5 hours'],
        correctAnswer: '3 hours',
        explanation: '0.5 + 1 + 1.5 = 3 hours in total. 🕒',
        wrongAnswerExplanations: {
            '2 hours': 'Add all the times: 0.5 + 1 + 1.5 = 3 hours.',
            '2.5 hours': 'Check the addition again.',
            '3.5 hours': 'That would be 0.5 + 1 + 2 = 3.5 hours.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch18_t3_qe7',
        type: 'mcq',
        question: 'What should you do if you are running out of time for a project?',
        options: ['Panic', 'Ask for help or reschedule', 'Give up', 'Ignore the project'],
        correctAnswer: 'Ask for help or reschedule',
        explanation: 'Seeking help or rescheduling can help you complete the project on time. 🤝',
        wrongAnswerExplanations: {
            'Panic': 'Panicking does not solve the problem.',
            'Give up': 'It is better to seek help than to give up.',
            'Ignore the project': 'Ignoring leads to incomplete work.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch18_t3_qe8',
        type: 'mcq',
        question: 'Which of these is NOT a time management tool?',
        options: ['Alarm clock', 'Timer', 'Notebook', 'Microscope'],
        correctAnswer: 'Microscope',
        explanation: 'A microscope is used in science labs, not for managing time.',
        wrongAnswerExplanations: {
            'Alarm clock': 'Alarm clocks help you wake up or remember tasks.',
            'Timer': 'Timers help you track time for tasks.',
            'Notebook': 'Notebooks can be used to make schedules or lists.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch18_t3_qe9',
        type: 'mcq',
        question: 'If you have a test at 10:00 AM and it is 9:15 AM now, how much time do you have left?',
        options: ['30 minutes', '45 minutes', '1 hour', '1 hour 15 minutes'],
        correctAnswer: '45 minutes',
        explanation: 'From 9:15 AM to 10:00 AM is 45 minutes. ⏱️',
        wrongAnswerExplanations: {
            '30 minutes': '9:15 to 9:45 is 30 minutes, but the test is at 10:00.',
            '1 hour': 'That would be from 9:00 to 10:00.',
            '1 hour 15 minutes': 'That would be from 8:45 to 10:00.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch18_t3_qe10',
        type: 'mcq',
        question: 'What is a "deadline"?',
        options: ['A type of clock', 'The latest time to finish a task', 'A holiday', 'A break time'],
        correctAnswer: 'The latest time to finish a task',
        explanation: 'A deadline is the final time or date by which a task must be completed. ⏳',
        wrongAnswerExplanations: {
            'A type of clock': 'A deadline is not a clock.',
            'A holiday': 'A deadline is not a holiday.',
            'A break time': 'A deadline is not a break.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch18_t3_qe11',
        type: 'mcq',
        question: 'Which activity should you do first if you have homework, a test to study for, and a game to play?',
        options: ['Play the game', 'Do homework', 'Study for the test', 'Decide based on deadlines'],
        correctAnswer: 'Decide based on deadlines',
        explanation: 'Prioritize tasks based on which is due soonest. 🗂️',
        wrongAnswerExplanations: {
            'Play the game': 'Fun activities should come after important tasks.',
            'Do homework': 'Homework may not always be the most urgent.',
            'Study for the test': 'Study if the test is sooner, but always check deadlines.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch18_t3_qe12',
        type: 'mcq',
        question: 'What is the benefit of using a timetable?',
        options: ['It wastes time', 'It helps organize your day', 'It makes you forget tasks', 'It is only for adults'],
        correctAnswer: 'It helps organize your day',
        explanation: 'A timetable helps you plan and use your time wisely. 📅',
        wrongAnswerExplanations: {
            'It wastes time': 'Timetables save time by organizing tasks.',
            'It makes you forget tasks': 'Timetables help you remember tasks.',
            'It is only for adults': 'Anyone can use a timetable.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch18_t3_qe13',
        type: 'mcq',
        question: 'If you have 4 subjects to study and 2 hours, how much time can you spend on each subject if you divide the time equally?',
        options: ['15 minutes', '20 minutes', '30 minutes', '45 minutes'],
        correctAnswer: '30 minutes',
        explanation: '2 hours = 120 minutes; 120 ÷ 4 = 30 minutes per subject. ⏲️',
        wrongAnswerExplanations: {
            '15 minutes': 'That would be 60 minutes divided by 4.',
            '20 minutes': '120 ÷ 6 = 20, but there are 4 subjects.',
            '45 minutes': 'That would be 180 minutes divided by 4.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch18_t3_qe14',
        type: 'mcq',
        question: 'Which of these is a sign of poor time management?',
        options: ['Finishing tasks early', 'Missing deadlines', 'Taking breaks', 'Making a plan'],
        correctAnswer: 'Missing deadlines',
        explanation: 'Missing deadlines means you are not managing your time well. ⏳',
        wrongAnswerExplanations: {
            'Finishing tasks early': 'This is a sign of good time management.',
            'Taking breaks': 'Breaks are important for productivity.',
            'Making a plan': 'Planning is a good time management habit.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch18_t3_qe15',
        type: 'mcq',
        question: 'If you start your homework at 5:00 PM and finish at 6:30 PM, how long did you work?',
        options: ['1 hour', '1 hour 30 minutes', '2 hours', '2 hours 30 minutes'],
        correctAnswer: '1 hour 30 minutes',
        explanation: '6:30 PM - 5:00 PM = 1 hour 30 minutes. ⏰',
        wrongAnswerExplanations: {
            '1 hour': 'That would be from 5:00 PM to 6:00 PM.',
            '2 hours': 'That would be from 5:00 PM to 7:00 PM.',
            '2 hours 30 minutes': 'That would be from 5:00 PM to 7:30 PM.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch18_t3_qe16',
        type: 'mcq',
        question: 'What should you do if you finish your work before the deadline?',
        options: ['Relax or review your work', 'Start a new task without checking', 'Forget about the work', 'Complain about free time'],
        correctAnswer: 'Relax or review your work',
        explanation: 'Use extra time to relax or check your work for mistakes. ✅',
        wrongAnswerExplanations: {
            'Start a new task without checking': 'Always review your work before moving on.',
            'Forget about the work': 'Reviewing helps catch errors.',
            'Complain about free time': 'Free time is a reward for good planning.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch18_t3_qe17',
        type: 'mcq',
        question: 'Which of these is a good way to avoid distractions while studying?',
        options: ['Keep your phone away', 'Watch TV', 'Chat with friends', 'Play games'],
        correctAnswer: 'Keep your phone away',
        explanation: 'Keeping your phone away helps you focus on your studies. 📵',
        wrongAnswerExplanations: {
            'Watch TV': 'TV can distract you from studying.',
            'Chat with friends': 'Chatting can break your concentration.',
            'Play games': 'Games can distract you from your work.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch18_t3_qe18',
        type: 'mcq',
        question: 'If you have 10 minutes left before the school bus arrives, what should you do?',
        options: ['Start a new big project', 'Pack your bag and get ready', 'Go back to sleep', 'Watch a movie'],
        correctAnswer: 'Pack your bag and get ready',
        explanation: 'Use the time to prepare for school and avoid being late. 🚌',
        wrongAnswerExplanations: {
            'Start a new big project': 'There is not enough time for a big project.',
            'Go back to sleep': 'You might miss the bus if you sleep.',
            'Watch a movie': 'There is not enough time for a movie.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch18_t3_qe19',
        type: 'mcq',
        question: 'What is the best way to remember important dates like exams or birthdays?',
        options: ['Rely on memory only', 'Write them in a planner or calendar', 'Ask friends every day', 'Ignore them'],
        correctAnswer: 'Write them in a planner or calendar',
        explanation: 'Writing important dates helps you remember and prepare. 🗓️',
        wrongAnswerExplanations: {
            'Rely on memory only': "You might forget if you don't write them down.",
            'Ask friends every day': 'It is better to keep your own record.',
            'Ignore them': 'Ignoring important dates can cause problems.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch18_t3_qe20',
        type: 'mcq',
        question: 'If you have 5 tasks and only 2 hours, what should you do?',
        options: ['Do the easiest tasks first', 'Prioritize the most important tasks', 'Do nothing', 'Try to do all at once'],
        correctAnswer: 'Prioritize the most important tasks',
        explanation: 'Focus on the most important tasks when time is limited. 🏆',
        wrongAnswerExplanations: {
            'Do the easiest tasks first': 'Important tasks should be done first if time is short.',
            'Do nothing': 'You should try to complete as much as possible.',
            'Try to do all at once': 'Multitasking can reduce quality and increase mistakes.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch18_t3_qe21',
        type: 'mcq',
        question: 'What is a "break" in time management?',
        options: ['A time to rest between tasks', 'A time to skip work', 'A time to forget tasks', 'A time to start new work'],
        correctAnswer: 'A time to rest between tasks',
        explanation: 'Breaks help you relax and improve focus for the next task. 💤',
        wrongAnswerExplanations: {
            'A time to skip work': 'Breaks are for rest, not for skipping work.',
            'A time to forget tasks': 'Breaks help you refresh, not forget.',
            'A time to start new work': 'Breaks are for rest, not for starting new work.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    // ... (10+ more questions to reach 20, following the same structure and topic relevance)
]; 