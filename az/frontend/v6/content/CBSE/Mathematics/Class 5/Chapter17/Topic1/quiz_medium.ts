import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl5_ch17_t1_qm1',
        type: 'mcq',
        question: 'If you receive ₹100 weekly and spend 60% of it, how much do you save in a month (4 weeks)?',
        options: [
            '₹120',
            '₹140',
            '₹160',
            '₹180'
        ],
        correctAnswer: '₹160',
        explanation: 'Weekly spending = 60% of ₹100 = ₹60. Weekly savings = ₹100 - ₹60 = ₹40. Monthly savings = ₹40 × 4 weeks = ₹160.',
        wrongAnswerExplanations: {
            '₹120': 'This is less than the correct amount. Calculate 60% of weekly income first.',
            '₹140': 'This is less than the correct amount. Check your percentage calculation.',
            '₹180': 'This is more than the correct amount. Check your calculations.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t1_qm2',
        type: 'mcq',
        question: 'If you want to save ₹500 in 2 months and you receive ₹100 weekly, what percentage of your income should you save?',
        options: [
            '50%',
            '60%',
            '70%',
            '80%'
        ],
        correctAnswer: '60%',
        explanation: 'Total income in 2 months = ₹100 × 8 weeks = ₹800. To save ₹500, you need to save 500/800 = 62.5% ≈ 60%.',
        wrongAnswerExplanations: {
            '50%': 'This would give you ₹400, which is less than ₹500.',
            '70%': 'This would give you ₹560, which is more than needed.',
            '80%': 'This would give you ₹640, which is more than needed.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t1_qm3',
        type: 'mcq',
        question: 'If you spend 40% of your ₹200 weekly allowance on needs, 30% on wants, and save the rest, how much do you save weekly?',
        options: [
            '₹40',
            '₹50',
            '₹60',
            '₹70'
        ],
        correctAnswer: '₹60',
        explanation: 'Needs = 40% of ₹200 = ₹80. Wants = 30% of ₹200 = ₹60. Savings = ₹200 - ₹80 - ₹60 = ₹60.',
        wrongAnswerExplanations: {
            '₹40': 'This is less than the correct amount. Calculate percentages first.',
            '₹50': 'This is less than the correct amount. Check your calculations.',
            '₹70': 'This is more than the correct amount. Check your calculations.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t1_qm4',
        type: 'mcq',
        question: 'If you save 25% of your ₹400 monthly allowance, how many months will it take to save ₹500?',
        options: [
            '4 months',
            '5 months',
            '6 months',
            '7 months'
        ],
        correctAnswer: '5 months',
        explanation: 'Monthly savings = 25% of ₹400 = ₹100. To save ₹500, you need 500/100 = 5 months.',
        wrongAnswerExplanations: {
            '4 months': 'This would give you ₹400, which is less than ₹500.',
            '6 months': 'This would give you ₹600, which is more than needed.',
            '7 months': 'This would give you ₹700, which is more than needed.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t1_qm5',
        type: 'mcq',
        question: 'If you spend ₹150 on needs and ₹100 on wants from your ₹300 weekly allowance, what percentage do you save?',
        options: [
            '15%',
            '16.67%',
            '17.5%',
            '18.33%'
        ],
        correctAnswer: '16.67%',
        explanation: 'Total spending = ₹150 + ₹100 = ₹250. Savings = ₹300 - ₹250 = ₹50. Savings percentage = (50/300) × 100 = 16.67%.',
        wrongAnswerExplanations: {
            '15%': 'This is less than the correct percentage. Calculate total spending first.',
            '17.5%': 'This is more than the correct percentage. Check your calculations.',
            '18.33%': 'This is more than the correct percentage. Check your calculations.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t1_qm6',
        type: 'mcq',
        question: 'If you want to buy a ₹600 bicycle and save 20% of your ₹100 weekly allowance, how many weeks will it take?',
        options: [
            '25 weeks',
            '30 weeks',
            '35 weeks',
            '40 weeks'
        ],
        correctAnswer: '30 weeks',
        explanation: 'Weekly savings = 20% of ₹100 = ₹20. To save ₹600, you need 600/20 = 30 weeks.',
        wrongAnswerExplanations: {
            '25 weeks': 'This would give you ₹500, which is less than ₹600.',
            '35 weeks': 'This would give you ₹700, which is more than needed.',
            '40 weeks': 'This would give you ₹800, which is more than needed.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t1_qm7',
        type: 'mcq',
        question: 'If you spend 45% of your ₹200 weekly allowance on needs and save 30%, how much do you spend on wants?',
        options: [
            '₹40',
            '₹45',
            '₹50',
            '₹55'
        ],
        correctAnswer: '₹50',
        explanation: 'Needs = 45% of ₹200 = ₹90. Savings = 30% of ₹200 = ₹60. Wants = ₹200 - ₹90 - ₹60 = ₹50.',
        wrongAnswerExplanations: {
            '₹40': 'This is less than the correct amount. Calculate needs and savings first.',
            '₹45': 'This is less than the correct amount. Check your calculations.',
            '₹55': 'This is more than the correct amount. Check your calculations.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t1_qm8',
        type: 'mcq',
        question: 'If you save 15% of your ₹500 monthly allowance, how much will you have after 3 months?',
        options: [
            '₹200',
            '₹225',
            '₹250',
            '₹275'
        ],
        correctAnswer: '₹225',
        explanation: 'Monthly savings = 15% of ₹500 = ₹75. After 3 months = ₹75 × 3 = ₹225.',
        wrongAnswerExplanations: {
            '₹200': 'This is less than the correct amount. Calculate monthly savings first.',
            '₹250': 'This is more than the correct amount. Check your calculations.',
            '₹275': 'This is more than the correct amount. Check your calculations.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t1_qm9',
        type: 'mcq',
        question: 'If you spend 35% of your ₹300 weekly allowance on needs and save 40%, what percentage is left for wants?',
        options: [
            '20%',
            '25%',
            '30%',
            '35%'
        ],
        correctAnswer: '25%',
        explanation: 'Total allocated = 35% (needs) + 40% (savings) = 75%. Left for wants = 100% - 75% = 25%.',
        wrongAnswerExplanations: {
            '20%': 'This is less than the correct percentage. Add needs and savings first.',
            '30%': 'This is more than the correct percentage. Check your calculations.',
            '35%': 'This is more than the correct percentage. Check your calculations.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t1_qm10',
        type: 'mcq',
        question: 'If you want to save ₹800 in 4 months and you receive ₹150 weekly, what percentage of your income should you save?',
        options: [
            '30%',
            '33.33%',
            '35%',
            '40%'
        ],
        correctAnswer: '33.33%',
        explanation: 'Total income in 4 months = ₹150 × 16 weeks = ₹2400. To save ₹800, you need to save 800/2400 = 33.33%.',
        wrongAnswerExplanations: {
            '30%': 'This would give you ₹720, which is less than ₹800.',
            '35%': 'This would give you ₹840, which is more than needed.',
            '40%': 'This would give you ₹960, which is more than needed.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t1_qm11',
        type: 'mcq',
        question: 'If you spend 50% of your ₹400 monthly allowance on needs and 25% on wants, how much do you save?',
        options: [
            '₹80',
            '₹90',
            '₹100',
            '₹110'
        ],
        correctAnswer: '₹100',
        explanation: 'Needs = 50% of ₹400 = ₹200. Wants = 25% of ₹400 = ₹100. Savings = ₹400 - ₹200 - ₹100 = ₹100.',
        wrongAnswerExplanations: {
            '₹80': 'This is less than the correct amount. Calculate needs and wants first.',
            '₹90': 'This is less than the correct amount. Check your calculations.',
            '₹110': 'This is more than the correct amount. Check your calculations.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t1_qm12',
        type: 'mcq',
        question: 'If you save 20% of your ₹250 weekly allowance, how many weeks will it take to save ₹400?',
        options: [
            '6 weeks',
            '7 weeks',
            '8 weeks',
            '9 weeks'
        ],
        correctAnswer: '8 weeks',
        explanation: 'Weekly savings = 20% of ₹250 = ₹50. To save ₹400, you need 400/50 = 8 weeks.',
        wrongAnswerExplanations: {
            '6 weeks': 'This would give you ₹300, which is less than ₹400.',
            '7 weeks': 'This would give you ₹350, which is less than ₹400.',
            '9 weeks': 'This would give you ₹450, which is more than needed.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t1_qm13',
        type: 'mcq',
        question: 'If you spend 40% of your ₹300 weekly allowance on needs and save 35%, how much do you spend on wants?',
        options: [
            '₹65',
            '₹70',
            '₹75',
            '₹80'
        ],
        correctAnswer: '₹75',
        explanation: 'Needs = 40% of ₹300 = ₹120. Savings = 35% of ₹300 = ₹105. Wants = ₹300 - ₹120 - ₹105 = ₹75.',
        wrongAnswerExplanations: {
            '₹65': 'This is less than the correct amount. Calculate needs and savings first.',
            '₹70': 'This is less than the correct amount. Check your calculations.',
            '₹80': 'This is more than the correct amount. Check your calculations.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t1_qm14',
        type: 'mcq',
        question: 'If you save 25% of your ₹600 monthly allowance, how much will you have after 2 months?',
        options: [
            '₹250',
            '₹275',
            '₹300',
            '₹325'
        ],
        correctAnswer: '₹300',
        explanation: 'Monthly savings = 25% of ₹600 = ₹150. After 2 months = ₹150 × 2 = ₹300.',
        wrongAnswerExplanations: {
            '₹250': 'This is less than the correct amount. Calculate monthly savings first.',
            '₹275': 'This is less than the correct amount. Check your calculations.',
            '₹325': 'This is more than the correct amount. Check your calculations.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t1_qm15',
        type: 'mcq',
        question: 'If you spend 45% of your ₹400 weekly allowance on needs and save 30%, what percentage is left for wants?',
        options: [
            '20%',
            '25%',
            '30%',
            '35%'
        ],
        correctAnswer: '25%',
        explanation: 'Total allocated = 45% (needs) + 30% (savings) = 75%. Left for wants = 100% - 75% = 25%.',
        wrongAnswerExplanations: {
            '20%': 'This is less than the correct percentage. Add needs and savings first.',
            '30%': 'This is more than the correct percentage. Check your calculations.',
            '35%': 'This is more than the correct percentage. Check your calculations.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t1_qm16',
        type: 'mcq',
        question: 'If you want to save ₹900 in 3 months and you receive ₹200 weekly, what percentage of your income should you save?',
        options: [
            '35%',
            '37.5%',
            '40%',
            '42.5%'
        ],
        correctAnswer: '37.5%',
        explanation: 'Total income in 3 months = ₹200 × 12 weeks = ₹2400. To save ₹900, you need to save 900/2400 = 37.5%.',
        wrongAnswerExplanations: {
            '35%': 'This would give you ₹840, which is less than ₹900.',
            '40%': 'This would give you ₹960, which is more than needed.',
            '42.5%': 'This would give you ₹1020, which is more than needed.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t1_qm17',
        type: 'mcq',
        question: 'If you spend 55% of your ₹500 monthly allowance on needs and 20% on wants, how much do you save?',
        options: [
            '₹100',
            '₹110',
            '₹120',
            '₹130'
        ],
        correctAnswer: '₹125',
        explanation: 'Needs = 55% of ₹500 = ₹275. Wants = 20% of ₹500 = ₹100. Savings = ₹500 - ₹275 - ₹100 = ₹125.',
        wrongAnswerExplanations: {
            '₹100': 'This is less than the correct amount. Calculate needs and wants first.',
            '₹110': 'This is less than the correct amount. Check your calculations.',
            '₹130': 'This is more than the correct amount. Check your calculations.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t1_qm18',
        type: 'mcq',
        question: 'If you save 30% of your ₹350 weekly allowance, how many weeks will it take to save ₹525?',
        options: [
            '4 weeks',
            '5 weeks',
            '6 weeks',
            '7 weeks'
        ],
        correctAnswer: '5 weeks',
        explanation: 'Weekly savings = 30% of ₹350 = ₹105. To save ₹525, you need 525/105 = 5 weeks.',
        wrongAnswerExplanations: {
            '4 weeks': 'This would give you ₹420, which is less than ₹525.',
            '6 weeks': 'This would give you ₹630, which is more than needed.',
            '7 weeks': 'This would give you ₹735, which is more than needed.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t1_qm19',
        type: 'mcq',
        question: 'If you spend 50% of your ₹450 weekly allowance on needs and save 25%, how much do you spend on wants?',
        options: [
            '₹100',
            '₹105',
            '₹110',
            '₹115'
        ],
        correctAnswer: '₹112.50',
        explanation: 'Needs = 50% of ₹450 = ₹225. Savings = 25% of ₹450 = ₹112.50. Wants = ₹450 - ₹225 - ₹112.50 = ₹112.50.',
        wrongAnswerExplanations: {
            '₹100': 'This is less than the correct amount. Calculate needs and savings first.',
            '₹105': 'This is less than the correct amount. Check your calculations.',
            '₹115': 'This is more than the correct amount. Check your calculations.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t1_qm20',
        type: 'mcq',
        question: 'If you save 35% of your ₹700 monthly allowance, how much will you have after 2 months?',
        options: [
            '₹450',
            '₹475',
            '₹490',
            '₹500'
        ],
        correctAnswer: '₹490',
        explanation: 'Monthly savings = 35% of ₹700 = ₹245. After 2 months = ₹245 × 2 = ₹490.',
        wrongAnswerExplanations: {
            '₹450': 'This is less than the correct amount. Calculate monthly savings first.',
            '₹475': 'This is less than the correct amount. Check your calculations.',
            '₹500': 'This is more than the correct amount. Check your calculations.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    }
];
