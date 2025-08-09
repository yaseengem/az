import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch18_t3_qm1',
        type: 'mcq',
        question: 'If you have 5 subjects to revise in 2.5 hours, how much time should you spend on each subject for equal distribution?',
        options: ['20 minutes', '25 minutes', '30 minutes', '35 minutes'],
        correctAnswer: '30 minutes',
        explanation: '2.5 hours = 150 minutes; 150 ÷ 5 = 30 minutes per subject. ⏱️',
        wrongAnswerExplanations: {
            '20 minutes': 'That would be 100 minutes divided by 5.',
            '25 minutes': 'That would be 125 minutes divided by 5.',
            '35 minutes': 'That would be 175 minutes divided by 5.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch18_t3_qm2',
        type: 'mcq',
        question: 'Which of the following is the best way to avoid last-minute stress before exams?',
        options: [
            'Start studying early',
            'Study only the night before',
            'Skip revision',
            "Rely on friends' notes"
        ],
        correctAnswer: 'Start studying early',
        explanation: 'Early preparation helps avoid stress and improves performance. 📚',
        wrongAnswerExplanations: {
            'Study only the night before': 'This can cause stress and poor results.',
            'Skip revision': 'Revision is important for remembering topics.',
            "Rely on friends' notes": 'It is better to make your own notes.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch18_t3_qm3',
        type: 'mcq',
        question: 'If you have a project due in 10 days, what is the best way to plan your work?',
        options: ['Do all work on the last day', 'Divide work over several days', 'Ignore the project', 'Ask someone else to do it'],
        correctAnswer: 'Divide work over several days',
        explanation: 'Spreading work helps you manage time and reduce stress. 📆',
        wrongAnswerExplanations: {
            'Do all work on the last day': 'This can lead to mistakes and stress.',
            'Ignore the project': 'Ignoring leads to incomplete work.',
            'Ask someone else to do it': 'You should do your own work.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch18_t3_qm4',
        type: 'mcq',
        question: 'Which of these is a time-wasting habit?',
        options: ['Making a plan', 'Checking social media often', 'Setting priorities', 'Using a timer'],
        correctAnswer: 'Checking social media often',
        explanation: 'Frequent social media use can waste time and distract you. 📱',
        wrongAnswerExplanations: {
            'Making a plan': 'Planning helps you save time.',
            'Setting priorities': 'Prioritizing is good for time management.',
            'Using a timer': 'Timers help you stay on track.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch18_t3_qm5',
        type: 'mcq',
        question: 'If you have 3 assignments and 4 days, how should you schedule your work?',
        options: ['Do all on the last day', 'Do one each day and rest one day', 'Do two on the first day', 'Ignore one assignment'],
        correctAnswer: 'Do one each day and rest one day',
        explanation: 'Spreading work and taking breaks helps you stay productive. 🗓️',
        wrongAnswerExplanations: {
            'Do all on the last day': 'This can cause stress and errors.',
            'Do two on the first day': 'This may be tiring and less effective.',
            'Ignore one assignment': 'All assignments should be completed.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch18_t3_qm6',
        type: 'mcq',
        question: 'What is the advantage of setting reminders for tasks?',
        options: ['You forget tasks', 'You remember tasks on time', 'You get distracted', 'You waste time'],
        correctAnswer: 'You remember tasks on time',
        explanation: 'Reminders help you complete tasks before deadlines. ⏰',
        wrongAnswerExplanations: {
            'You forget tasks': 'Reminders are meant to help you remember.',
            'You get distracted': 'Reminders keep you focused.',
            'You waste time': 'Reminders help you save time.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch18_t3_qm7',
        type: 'mcq',
        question: 'If you have 2 hours to study and 4 chapters, but one chapter is very difficult, what should you do?',
        options: ['Spend equal time on all', 'Spend more time on the difficult chapter', 'Skip the difficult chapter', 'Only read easy chapters'],
        correctAnswer: 'Spend more time on the difficult chapter',
        explanation: 'Difficult topics need more time for better understanding. 📖',
        wrongAnswerExplanations: {
            'Spend equal time on all': 'Some chapters may need more attention.',
            'Skip the difficult chapter': 'Do not skip important topics.',
            'Only read easy chapters': 'All chapters should be covered.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch18_t3_qm8',
        type: 'mcq',
        question: 'Which of these is a good way to track your progress on a big project?',
        options: ['Ignore progress', 'Break project into smaller tasks', 'Do everything at once', 'Wait until the end'],
        correctAnswer: 'Break project into smaller tasks',
        explanation: 'Breaking tasks helps you see progress and stay motivated. ✔️',
        wrongAnswerExplanations: {
            'Ignore progress': 'Tracking progress helps you stay on schedule.',
            'Do everything at once': 'This can be overwhelming and less effective.',
            'Wait until the end': 'Regular checks help you finish on time.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch18_t3_qm9',
        type: 'mcq',
        question: 'If you have 1 hour to finish a test with 40 questions, how much time can you spend on each question?',
        options: ['1 minute', '1.5 minutes', '2 minutes', '2.5 minutes'],
        correctAnswer: '1.5 minutes',
        explanation: '60 minutes ÷ 40 = 1.5 minutes per question. ⏳',
        wrongAnswerExplanations: {
            '1 minute': 'That would be 60 questions in 1 hour.',
            '2 minutes': 'That would be 30 questions in 1 hour.',
            '2.5 minutes': 'That would be 24 questions in 1 hour.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch18_t3_qm10',
        type: 'mcq',
        question: 'What is the best way to handle unexpected tasks in your schedule?',
        options: ['Panic', 'Adjust your plan', 'Ignore the task', 'Complain'],
        correctAnswer: 'Adjust your plan',
        explanation: 'Flexibility helps you manage new tasks without stress. 🔄',
        wrongAnswerExplanations: {
            'Panic': 'Panicking does not help solve the problem.',
            'Ignore the task': 'Ignoring can cause problems later.',
            'Complain': 'Complaining does not solve the issue.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch18_t3_qm11',
        type: 'mcq',
        question: 'If you have a group project, what is the best way to ensure everyone finishes on time?',
        options: ['Let everyone work whenever they want', 'Set deadlines for each part', 'Do all the work yourself', 'Wait until the last day'],
        correctAnswer: 'Set deadlines for each part',
        explanation: 'Setting deadlines helps everyone stay on track and finish together. 👫',
        wrongAnswerExplanations: {
            'Let everyone work whenever they want': 'This can cause delays and confusion.',
            'Do all the work yourself': 'Group work should be shared.',
            'Wait until the last day': 'This can lead to incomplete work.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch18_t3_qm12',
        type: 'mcq',
        question: 'What is the benefit of reviewing your schedule at the end of the day?',
        options: ['To see what you accomplished', 'To waste time', 'To forget tasks', 'To add more work'],
        correctAnswer: 'To see what you accomplished',
        explanation: 'Reviewing helps you track progress and plan better for the next day. 📊',
        wrongAnswerExplanations: {
            'To waste time': 'Reviewing helps you use time wisely.',
            'To forget tasks': 'Reviewing helps you remember tasks.',
            'To add more work': 'It helps you plan, not overload yourself.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch18_t3_qm13',
        type: 'mcq',
        question: 'If you have 6 hours to prepare for 3 subjects, but one subject is twice as important, how should you divide your time?',
        options: ['2 hours each', '3 hours for the important subject, 1.5 hours each for others', '1 hour each', '4 hours for one, 1 hour each for others'],
        correctAnswer: '3 hours for the important subject, 1.5 hours each for others',
        explanation: 'Allocate more time to important subjects for better results. ⏰',
        wrongAnswerExplanations: {
            '2 hours each': 'Not all subjects are equally important.',
            '1 hour each': 'This does not use all your time.',
            '4 hours for one, 1 hour each for others': 'This leaves less time for the other subjects.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch18_t3_qm14',
        type: 'mcq',
        question: 'Which of these is a sign of good time management?',
        options: ['Always feeling rushed', 'Finishing tasks before deadlines', 'Forgetting tasks', 'Skipping breaks'],
        correctAnswer: 'Finishing tasks before deadlines',
        explanation: 'Completing work early shows you are managing your time well. 🏅',
        wrongAnswerExplanations: {
            'Always feeling rushed': 'Good time management reduces stress.',
            'Forgetting tasks': 'Forgetting is a sign of poor planning.',
            'Skipping breaks': 'Breaks are important for productivity.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch18_t3_qm15',
        type: 'mcq',
        question: 'If you have 3 hours to study and want to take a 15-minute break every hour, how much time will you spend studying?',
        options: ['2 hours', '2 hours 15 minutes', '2 hours 30 minutes', '3 hours'],
        correctAnswer: '2 hours 30 minutes',
        explanation: 'You take two 15-minute breaks, so 3 hours - 30 minutes = 2.5 hours. ⏳',
        wrongAnswerExplanations: {
            '2 hours': 'That would be taking four 15-minute breaks.',
            '2 hours 15 minutes': 'That would be three 15-minute breaks.',
            '3 hours': 'You need to subtract break time.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch18_t3_qm16',
        type: 'mcq',
        question: 'What should you do if you keep missing deadlines?',
        options: ['Ignore the problem', 'Analyze your schedule and adjust', 'Blame others', 'Stop working'],
        correctAnswer: 'Analyze your schedule and adjust',
        explanation: 'Reviewing and adjusting your plan helps you meet deadlines. 🔍',
        wrongAnswerExplanations: {
            'Ignore the problem': 'Ignoring will not solve the issue.',
            'Blame others': 'Take responsibility for your own schedule.',
            'Stop working': 'Find solutions instead of giving up.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch18_t3_qm17',
        type: 'mcq',
        question: 'If you have a test at 11:00 AM and it is 9:45 AM now, how much time do you have to prepare?',
        options: ['1 hour', '1 hour 15 minutes', '1 hour 30 minutes', '2 hours'],
        correctAnswer: '1 hour 15 minutes',
        explanation: 'From 9:45 AM to 11:00 AM is 1 hour 15 minutes. ⏱️',
        wrongAnswerExplanations: {
            '1 hour': 'That would be from 10:00 AM to 11:00 AM.',
            '1 hour 30 minutes': 'That would be from 9:30 AM to 11:00 AM.',
            '2 hours': 'That would be from 9:00 AM to 11:00 AM.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch18_t3_qm18',
        type: 'mcq',
        question: 'Which of these is a good way to avoid forgetting important tasks?',
        options: ['Keep everything in your head', 'Use a checklist', 'Do not write anything down', 'Rely on others'],
        correctAnswer: 'Use a checklist',
        explanation: 'Checklists help you remember and complete all tasks. 📝',
        wrongAnswerExplanations: {
            'Keep everything in your head': 'You might forget if you do not write tasks down.',
            'Do not write anything down': 'Writing helps you remember.',
            'Rely on others': 'It is better to keep your own record.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch18_t3_qm19',
        type: 'mcq',
        question: 'If you have 8 tasks and only 4 hours, what is the best strategy?',
        options: ['Do all at once', 'Prioritize and do the most important first', 'Ignore half the tasks', 'Work without breaks'],
        correctAnswer: 'Prioritize and do the most important first',
        explanation: 'Focus on important tasks when time is limited. 🏆',
        wrongAnswerExplanations: {
            'Do all at once': 'Multitasking can reduce quality and increase mistakes.',
            'Ignore half the tasks': 'Try to complete as much as possible.',
            'Work without breaks': 'Breaks help you stay focused.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch18_t3_qm20',
        type: 'mcq',
        question: 'What is the main purpose of a planner?',
        options: ['To decorate', 'To organize tasks and time', 'To waste time', 'To confuse you'],
        correctAnswer: 'To organize tasks and time',
        explanation: 'A planner helps you schedule and manage your activities. 📒',
        wrongAnswerExplanations: {
            'To decorate': 'A planner is for organizing, not decorating.',
            'To waste time': 'A planner helps you save time.',
            'To confuse you': 'A planner is meant to make things clearer.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch18_t3_qm21',
        type: 'mcq',
        question: 'If you want to improve your time management skills, what should you do regularly?',
        options: ['Reflect and adjust your schedule', 'Never change your plan', 'Ignore your mistakes', 'Always do the same thing'],
        correctAnswer: 'Reflect and adjust your schedule',
        explanation: 'Regular reflection helps you learn and improve your planning. 🔄',
        wrongAnswerExplanations: {
            'Never change your plan': 'Adjusting your plan helps you improve.',
            'Ignore your mistakes': 'Learning from mistakes is important.',
            'Always do the same thing': 'Trying new strategies can help you find what works best.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    // ... (10+ more questions to reach 20, following the same structure and topic relevance)
]; 