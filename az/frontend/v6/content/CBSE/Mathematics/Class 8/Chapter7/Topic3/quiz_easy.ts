// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 8\Chapter7\Topic3\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch7_t3_qe1',
        type: 'mcq',
        question: 'What is the formula for simple interest?',
        options: [
            'Principal × Rate × Time',
            '(Principal × Rate × Time) / 100',
            'Principal + Rate + Time',
            '(Principal × Rate) / Time'
        ],
        correctAnswer: '(Principal × Rate × Time) / 100',
        explanation: 'Simple interest is calculated using the formula SI = (Principal × Rate × Time) / 100. This formula helps us find the interest earned or paid. 🧮',
        wrongAnswerExplanations: {
            'Principal × Rate × Time': 'This formula is incomplete as it misses dividing by 100 to convert percentage to decimal.',
            'Principal + Rate + Time': 'Adding these values does not give interest. We need to multiply and divide by 100.',
            '(Principal × Rate) / Time': 'This formula is incorrect as time should be multiplied, not divided.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch7_t3_qe2',
        type: 'mcq',
        question: 'If you borrow ₹1,000 at 5% per annum for 2 years, what is the simple interest?',
        options: ['₹100', '₹50', '₹200', '₹150'],
        correctAnswer: '₹100',
        explanation: 'SI = (1000 × 5 × 2) / 100 = ₹100. Using simple interest formula with P=1000, R=5%, T=2 years. 💸',
        wrongAnswerExplanations: {
            '₹50': 'This would be the interest for only 1 year at 5%.',
            '₹200': 'This would be the interest if the rate was 10% for 2 years.',
            '₹150': 'This would be the interest if the rate was 7.5% for 2 years.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch7_t3_qe3',
        type: 'mcq',
        question: 'What does "principal" mean in interest calculations?',
        options: [
            'Total amount after interest',
            'Original sum borrowed or invested',
            'Interest earned',
            'Rate of interest'
        ],
        correctAnswer: 'Original sum borrowed or invested',
        explanation: 'Principal is the initial or original amount of money that is borrowed or invested, before any interest is added. 🏦',
        wrongAnswerExplanations: {
            'Total amount after interest': 'This is the principal plus interest, not just the principal.',
            'Interest earned': 'This is the extra amount earned, not the original sum.',
            'Rate of interest': 'This is the percentage at which interest is calculated.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch7_t3_qe4',
        type: 'mcq',
        question: 'If the rate is 8% per annum, what does "per annum" mean?',
        options: ['Per month', 'Per week', 'Per year', 'Per day'],
        correctAnswer: 'Per year',
        explanation: '"Per annum" is Latin for "per year". In interest calculations, it means the rate is for a one-year period. 📅',
        wrongAnswerExplanations: {
            'Per month': 'Per annum is yearly, not monthly. Monthly would be 8%/12.',
            'Per week': 'Per annum is yearly, not weekly. Weekly would be 8%/52.',
            'Per day': 'Per annum is yearly, not daily. Daily would be 8%/365.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch7_t3_qe5',
        type: 'mcq',
        question: 'Which of these is NOT needed to calculate simple interest?',
        options: ['Principal', 'Rate', 'Time', 'Age'],
        correctAnswer: 'Age',
        explanation: 'Simple interest calculation needs only Principal (P), Rate (R), and Time (T). Age is not a factor in interest calculations. 🚫',
        wrongAnswerExplanations: {
            'Principal': 'Principal is essential as it is the base amount on which interest is calculated.',
            'Rate': 'Rate is necessary as it determines how much interest is charged.',
            'Time': 'Time period is crucial as it determines how long interest is calculated for.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch7_t3_qe6',
        type: 'mcq',
        question: 'If you invest ₹2,000 at 10% per annum for 1 year, what is the simple interest?',
        options: ['₹200', '₹100', '₹20', '₹2,000'],
        correctAnswer: '₹200',
        explanation: 'SI = (2000 × 10 × 1) / 100 = ₹200. Using simple interest formula with P=2000, R=10%, T=1 year. 💰',
        wrongAnswerExplanations: {
            '₹100': 'This would be the interest if the rate was 5%.',
            '₹20': 'This would be the interest if the rate was 1%.',
            '₹2,000': 'This is equal to the principal amount, not the interest.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch7_t3_qe7',
        type: 'mcq',
        question: 'What is the total amount after 2 years if principal is ₹500 and SI is ₹50?',
        options: ['₹450', '₹500', '₹550', '₹600'],
        correctAnswer: '₹550',
        explanation: 'Total amount = Principal + SI = ₹500 + ₹50 = ₹550. The total amount includes both the original sum and the interest earned. 🏦',
        wrongAnswerExplanations: {
            '₹450': 'This is less than the principal, which is incorrect as interest adds to principal.',
            '₹500': 'This is just the principal without adding the interest.',
            '₹600': 'This is more than principal + interest (₹500 + ₹50).'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch7_t3_qe8',
        type: 'mcq',
        question: 'Which type of interest is calculated only on the principal?',
        options: ['Compound interest', 'Simple interest', 'Both', 'None'],
        correctAnswer: 'Simple interest',
        explanation: 'Simple interest is calculated only on the principal amount, while compound interest includes interest on previously earned interest. ✔️',
        wrongAnswerExplanations: {
            'Compound interest': 'Compound interest is calculated on principal plus previously earned interest.',
            'Both': 'Only simple interest is calculated on principal alone.',
            'None': 'Simple interest is definitely calculated only on principal.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch7_t3_qe9',
        type: 'mcq',
        question: 'If the principal is ₹1,200, rate is 5%, and time is 3 years, what is the SI?',
        options: ['₹180', '₹150', '₹200', '₹120'],
        correctAnswer: '₹180',
        explanation: 'SI = (1200 × 5 × 3) / 100 = ₹180. Using simple interest formula with P=1200, R=5%, T=3 years. 🧾',
        wrongAnswerExplanations: {
            '₹150': 'This would be the interest for 2.5 years.',
            '₹200': 'This would be the interest if rate was about 5.5%.',
            '₹120': 'This would be the interest for 2 years.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch7_t3_qe10',
        type: 'mcq',
        question: 'What is the main difference between simple and compound interest?',
        options: [
            'Simple interest is on principal only',
            'Compound interest is on principal + previous interest',
            'Both A and B',
            'None'
        ],
        correctAnswer: 'Both A and B',
        explanation: 'The key difference is that simple interest uses only principal, while compound interest includes previous interest. Both statements are correct. 🔄',
        wrongAnswerExplanations: {
            'Simple interest is on principal only': 'This is true but incomplete as it does not explain compound interest.',
            'Compound interest is on principal + previous interest': 'This is true but incomplete as it does not explain simple interest.',
            'None': 'Both statements are actually correct.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch7_t3_qe11',
        type: 'mcq',
        question: 'If you invest ₹1,000 at 5% per annum for 4 years, what is the SI?',
        options: ['₹200', '₹250', '₹150', '₹100'],
        correctAnswer: '₹200',
        explanation: 'SI = (1000 × 5 × 4) / 100 = ₹200. Using simple interest formula with P=1000, R=5%, T=4 years. 💵',
        wrongAnswerExplanations: {
            '₹250': 'This would be the interest if rate was 6.25%.',
            '₹150': 'This would be the interest for 3 years.',
            '₹100': 'This would be the interest for 2 years.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch7_t3_qe12',
        type: 'mcq',
        question: 'Which of these grows faster over time?',
        options: ['Simple interest', 'Compound interest', 'Both same', 'Depends on rate'],
        correctAnswer: 'Compound interest',
        explanation: 'Compound interest grows faster because it earns interest on previously earned interest. 📈',
        wrongAnswerExplanations: {
            'Simple interest': 'Simple interest grows linearly and slower than compound interest.',
            'Both same': 'Compound interest always grows faster than simple interest over time.',
            'Depends on rate': 'Regardless of rate, compound interest grows faster than simple interest.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch7_t3_qe13',
        type: 'mcq',
        question: 'If the rate is 12% per annum, what is the rate for 6 months?',
        options: ['12%', '6%', '24%', '3%'],
        correctAnswer: '6%',
        explanation: 'Half-yearly rate = Annual rate ÷ 2 = 12% ÷ 2 = 6%. 🕒',
        wrongAnswerExplanations: {
            '12%': 'This is the annual rate, not the half-yearly rate.',
            '24%': 'This would be double the annual rate, which is incorrect.',
            '3%': 'This would be the quarterly rate (12% ÷ 4).'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch7_t3_qe14',
        type: 'mcq',
        question: 'What is the compound interest on ₹1,000 at 10% per annum for 1 year?',
        options: ['₹100', '₹110', '₹90', '₹120'],
        correctAnswer: '₹100',
        explanation: 'For 1 year, CI = SI = Principal × Rate = 1000 × 10% = ₹100. 🔢',
        wrongAnswerExplanations: {
            '₹110': 'This is more than 10% of the principal.',
            '₹90': 'This is less than 10% of the principal.',
            '₹120': 'This would be the interest if rate was 12%.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch7_t3_qe15',
        type: 'mcq',
        question: 'If you invest ₹500 at 8% per annum for 2 years, what is the SI?',
        options: ['₹80', '₹70', '₹60', '₹50'],
        correctAnswer: '₹80',
        explanation: 'SI = (500 × 8 × 2) / 100 = ₹80. Using simple interest formula with P=500, R=8%, T=2 years. 💡',
        wrongAnswerExplanations: {
            '₹70': 'This would be the interest if rate was 7%.',
            '₹60': 'This would be the interest if rate was 6%.',
            '₹50': 'This would be the interest if time was 1.25 years.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch7_t3_qe16',
        type: 'mcq',
        question: 'Which of these is a real-life example of compound interest?',
        options: ['Bank savings', 'Buying groceries', 'Paying rent', 'Bus fare'],
        correctAnswer: 'Bank savings',
        explanation: 'Bank savings accounts earn interest on both principal and previously earned interest. 🏦',
        wrongAnswerExplanations: {
            'Buying groceries': 'This is a direct purchase without any interest calculation.',
            'Paying rent': 'Rent is a fixed periodic payment without interest.',
            'Bus fare': 'This is a one-time payment for service.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch7_t3_qe17',
        type: 'mcq',
        question: 'If principal is ₹2,000, rate is 5%, and time is 2 years, what is the SI?',
        options: ['₹200', '₹100', '₹150', '₹50'],
        correctAnswer: '₹200',
        explanation: 'SI = (2000 × 5 × 2) / 100 = ₹200. Using simple interest formula with P=2000, R=5%, T=2 years. 🧾',
        wrongAnswerExplanations: {
            '₹100': 'This would be the interest for 1 year.',
            '₹150': 'This would be the interest for 1.5 years.',
            '₹50': 'This would be the interest for 6 months.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch7_t3_qe18',
        type: 'mcq',
        question: 'What is the total amount after 3 years if principal is ₹1,500 and SI is ₹225?',
        options: ['₹1,725', '₹1,500', '₹1,225', '₹1,800'],
        correctAnswer: '₹1,725',
        explanation: 'Total amount = Principal + SI = ₹1,500 + ₹225 = ₹1,725. The total includes both original sum and interest. 💳',
        wrongAnswerExplanations: {
            '₹1,500': 'This is just the principal without adding interest.',
            '₹1,225': 'This is less than the principal, which is incorrect.',
            '₹1,800': 'This is more than principal + interest.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch7_t3_qe19',
        type: 'mcq',
        question: 'Which of these is NOT a type of interest?',
        options: ['Simple', 'Compound', 'Mixed', 'None'],
        correctAnswer: 'Mixed',
        explanation: 'There are only two types of interest: simple and compound. Mixed interest is not a valid type. ❌',
        wrongAnswerExplanations: {
            'Simple': 'Simple interest is a valid type calculated on principal only.',
            'Compound': 'Compound interest is a valid type that includes interest on interest.',
            'None': 'Mixed is the correct answer as it is not a valid type of interest.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch7_t3_qe20',
        type: 'mcq',
        question: 'If you invest ₹1,000 at 5% per annum for 2 years, what is the SI?',
        options: ['₹100', '₹50', '₹200', '₹150'],
        correctAnswer: '₹100',
        explanation: 'SI = (1000 × 5 × 2) / 100 = ₹100. Using simple interest formula with P=1000, R=5%, T=2 years. 💸',
        wrongAnswerExplanations: {
            '₹50': 'This would be the interest for only 1 year.',
            '₹200': 'This would be the interest if rate was 10%.',
            '₹150': 'This would be the interest if rate was 7.5%.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 1
    }
];
