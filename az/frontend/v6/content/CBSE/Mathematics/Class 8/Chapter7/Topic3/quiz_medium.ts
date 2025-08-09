// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 8\Chapter7\Topic3\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch7_t3_qm1',
        type: 'mcq',
        question: 'If ₹2,000 is invested at 5% per annum compound interest for 2 years, what is the total amount?',
        options: ['₹2,100', '₹2,205', '₹2,200', '₹2,150'],
        correctAnswer: '₹2,205',
        explanation: 'Amount = 2000 × (1.05)² = ₹2,205. Using compound interest formula with P=2000, R=5%, T=2 years. 🔄',
        wrongAnswerExplanations: {
            '₹2,100': 'This would be the amount with simple interest, not compound interest.',
            '₹2,200': 'This would be the amount if interest was 5% on total each year without compounding.',
            '₹2,150': 'This is less than the actual amount as it does not account for compounding.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch7_t3_qm2',
        type: 'mcq',
        question: 'What is the compound interest on ₹1,500 at 8% per annum for 2 years?',
        options: ['₹240', '₹249.60', '₹260', '₹250'],
        correctAnswer: '₹249.60',
        explanation: 'CI = 1500 × (1.08)² - 1500 = ₹249.60. Using compound interest formula with P=1500, R=8%, T=2 years. 💹',
        wrongAnswerExplanations: {
            '₹240': 'This would be the simple interest amount (1500 × 8% × 2).',
            '₹260': 'This is more than the actual compound interest.',
            '₹250': 'This is a rounded approximation, not the exact amount.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch7_t3_qm3',
        type: 'mcq',
        question: 'If principal is ₹5,000, rate is 6%, and time is 3 years, what is the SI?',
        options: ['₹900', '₹800', '₹1,000', '₹600'],
        correctAnswer: '₹900',
        explanation: 'SI = (5000 × 6 × 3) / 100 = ₹900. Using simple interest formula with P=5000, R=6%, T=3 years. 🧮',
        wrongAnswerExplanations: {
            '₹800': 'This would be the interest if time was 2.67 years.',
            '₹1,000': 'This would be the interest if rate was about 6.67%.',
            '₹600': 'This would be the interest for 2 years.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch7_t3_qm4',
        type: 'mcq',
        question: 'Which formula is used to calculate compound interest?',
        options: [
            'CI = Amount - Principal',
            'CI = (Principal × Rate × Time) / 100',
            'CI = Principal + Rate + Time',
            'CI = Principal × Rate × Time'
        ],
        correctAnswer: 'CI = Amount - Principal',
        explanation: 'Compound interest is the difference between final amount and principal, where Amount = P(1 + R/100)ᵗ. 🧾',
        wrongAnswerExplanations: {
            'CI = (Principal × Rate × Time) / 100': 'This is the formula for simple interest, not compound interest.',
            'CI = Principal + Rate + Time': 'Adding these values does not give compound interest.',
            'CI = Principal × Rate × Time': 'This is an incorrect formula that does not account for compounding.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch7_t3_qm5',
        type: 'mcq',
        question: 'If ₹1,000 is invested at 10% per annum for 2 years (compounded yearly), what is the CI?',
        options: ['₹200', '₹210', '₹220', '₹100'],
        correctAnswer: '₹210',
        explanation: 'CI = 1000 × (1.1)² - 1000 = ₹210. Using compound interest formula with P=1000, R=10%, T=2 years. 🔢',
        wrongAnswerExplanations: {
            '₹200': 'This would be the simple interest amount (1000 × 10% × 2).',
            '₹220': 'This is more than the actual compound interest.',
            '₹100': 'This would be the interest for only 1 year.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch7_t3_qm6',
        type: 'mcq',
        question: 'Which of these statements is true about compound interest?',
        options: [
            'It is always less than simple interest',
            'It is calculated on principal and previous interest',
            'It is only for 1 year',
            'It does not depend on rate'
        ],
        correctAnswer: 'It is calculated on principal and previous interest',
        explanation: 'Compound interest includes interest on both principal and previously earned interest, making it grow faster than simple interest. 🔄',
        wrongAnswerExplanations: {
            'It is always less than simple interest': 'Compound interest is actually greater than simple interest over time.',
            'It is only for 1 year': 'Compound interest can be calculated for any time period.',
            'It does not depend on rate': 'Rate is a crucial factor in compound interest calculations.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch7_t3_qm7',
        type: 'mcq',
        question: 'If the rate is 12% per annum, what is the compound interest on ₹2,000 for 1 year?',
        options: ['₹240', '₹220', '₹200', '₹250'],
        correctAnswer: '₹240',
        explanation: 'CI = 2000 × 0.12 = ₹240 for 1 year. For one year, compound and simple interest are the same. 💰',
        wrongAnswerExplanations: {
            '₹220': 'This would be the interest if rate was about 11%.',
            '₹200': 'This would be the interest if rate was 10%.',
            '₹250': 'This would be the interest if rate was about 12.5%.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch7_t3_qm8',
        type: 'mcq',
        question: 'If principal is ₹1,800, rate is 5%, and time is 2 years, what is the SI?',
        options: ['₹180', '₹200', '₹150', '₹160'],
        correctAnswer: '₹180',
        explanation: 'SI = (1800 × 5 × 2) / 100 = ₹180. Using simple interest formula with P=1800, R=5%, T=2 years. 🏦',
        wrongAnswerExplanations: {
            '₹200': 'This would be the interest if rate was about 5.56%.',
            '₹150': 'This would be the interest if time was about 1.67 years.',
            '₹160': 'This would be the interest if rate was about 4.44%.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch7_t3_qm9',
        type: 'mcq',
        question: 'Which of these is NOT a real-life use of compound interest?',
        options: ['Bank loans', 'Savings accounts', 'Buying vegetables', 'Investments'],
        correctAnswer: 'Buying vegetables',
        explanation: 'Buying vegetables is a direct purchase without any interest calculation. Bank products and investments use compound interest. 🥦',
        wrongAnswerExplanations: {
            'Bank loans': 'Bank loans typically use compound interest for calculation.',
            'Savings accounts': 'Banks pay compound interest on savings accounts.',
            'Investments': 'Most investments earn compound interest over time.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch7_t3_qm10',
        type: 'mcq',
        question: 'If ₹2,500 is invested at 8% per annum for 3 years, what is the total amount (CI)?',
        options: ['₹3,149.25', '₹3,000', '₹2,900', '₹3,200'],
        correctAnswer: '₹3,149.25',
        explanation: 'Amount = 2500 × (1.08)³ ≈ ₹3,149.25. Using compound interest formula with P=2500, R=8%, T=3 years. 📈',
        wrongAnswerExplanations: {
            '₹3,000': 'This would be the amount with simple interest.',
            '₹2,900': 'This is less than even the simple interest amount.',
            '₹3,200': 'This is more than the actual compound interest amount.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch7_t3_qm11',
        type: 'mcq',
        question: 'What is the SI on ₹3,000 at 7% per annum for 2 years?',
        options: ['₹420', '₹400', '₹350', '₹300'],
        correctAnswer: '₹420',
        explanation: 'SI = (3000 × 7 × 2) / 100 = ₹420. Using simple interest formula with P=3000, R=7%, T=2 years. 💵',
        wrongAnswerExplanations: {
            '₹400': 'This would be the interest if rate was about 6.67%.',
            '₹350': 'This would be the interest if rate was about 5.83%.',
            '₹300': 'This would be the interest if rate was 5%.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch7_t3_qm12',
        type: 'mcq',
        question: 'If the principal is ₹2,000, rate is 5%, and time is 3 years, what is the CI (rounded)?',
        options: ['₹315', '₹310', '₹320', '₹300'],
        correctAnswer: '₹315',
        explanation: 'CI = 2000 × (1.05)³ - 2000 ≈ ₹315. Using compound interest formula with P=2000, R=5%, T=3 years. 🔢',
        wrongAnswerExplanations: {
            '₹310': 'This is less than the actual compound interest.',
            '₹320': 'This is more than the actual compound interest.',
            '₹300': 'This would be the simple interest amount.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch7_t3_qm13',
        type: 'mcq',
        question: 'Which factor increases compound interest the most?',
        options: ['Higher rate', 'Lower principal', 'Shorter time', 'Lower rate'],
        correctAnswer: 'Higher rate',
        explanation: 'Higher interest rate has the most significant impact on compound interest due to exponential growth. 📊',
        wrongAnswerExplanations: {
            'Lower principal': 'Lower principal would actually reduce the interest earned.',
            'Shorter time': 'Longer time periods increase compound interest, not shorter ones.',
            'Lower rate': 'Lower rate would reduce the interest earned.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch7_t3_qm14',
        type: 'mcq',
        question: 'If ₹1,200 is invested at 10% per annum for 2 years, what is the CI?',
        options: ['₹252', '₹240', '₹220', '₹200'],
        correctAnswer: '₹252',
        explanation: 'CI = 1200 × (1.1)² - 1200 = ₹252. Using compound interest formula with P=1200, R=10%, T=2 years. 🧮',
        wrongAnswerExplanations: {
            '₹240': 'This would be the simple interest amount.',
            '₹220': 'This is less than even the simple interest.',
            '₹200': 'This would be the interest if rate was about 8.33%.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch7_t3_qm15',
        type: 'mcq',
        question: 'Which of these is a benefit of compound interest?',
        options: ['Faster growth', 'Less money earned', 'No growth', 'No effect'],
        correctAnswer: 'Faster growth',
        explanation: 'Compound interest provides faster growth as it earns interest on previously earned interest. 🚀',
        wrongAnswerExplanations: {
            'Less money earned': 'Compound interest actually earns more money than simple interest.',
            'No growth': 'Compound interest definitely provides growth.',
            'No effect': 'Compound interest has a significant effect on money growth.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch7_t3_qm16',
        type: 'mcq',
        question: 'If principal is ₹2,500, rate is 4%, and time is 2 years, what is the SI?',
        options: ['₹200', '₹180', '₹220', '₹250'],
        correctAnswer: '₹200',
        explanation: 'SI = (2500 × 4 × 2) / 100 = ₹200. Using simple interest formula with P=2500, R=4%, T=2 years. 💡',
        wrongAnswerExplanations: {
            '₹180': 'This would be the interest if rate was 3.6%.',
            '₹220': 'This would be the interest if rate was 4.4%.',
            '₹250': 'This would be the interest if rate was 5%.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch7_t3_qm17',
        type: 'mcq',
        question: 'If ₹1,000 is invested at 5% per annum for 3 years (compounded yearly), what is the CI?',
        options: ['₹157.63', '₹150', '₹160', '₹170'],
        correctAnswer: '₹157.63',
        explanation: 'CI = 1000 × (1.05)³ - 1000 ≈ ₹157.63. Using compound interest formula with P=1000, R=5%, T=3 years. 🔄',
        wrongAnswerExplanations: {
            '₹150': 'This would be the simple interest amount.',
            '₹160': 'This is more than the actual compound interest.',
            '₹170': 'This is significantly more than the actual compound interest.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch7_t3_qm18',
        type: 'mcq',
        question: 'Which of these is NOT needed for compound interest calculation?',
        options: ['Principal', 'Rate', 'Time', 'Age'],
        correctAnswer: 'Age',
        explanation: 'Compound interest calculation requires only Principal, Rate, and Time. Age is not a factor. 🚫',
        wrongAnswerExplanations: {
            'Principal': 'Principal is essential as it is the base amount for calculation.',
            'Rate': 'Interest rate is crucial for determining the growth.',
            'Time': 'Time period is necessary to calculate compound interest.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch7_t3_qm19',
        type: 'mcq',
        question: 'If the rate is 6% per annum, what is the SI on ₹1,500 for 2 years?',
        options: ['₹180', '₹160', '₹150', '₹120'],
        correctAnswer: '₹180',
        explanation: 'SI = (1500 × 6 × 2) / 100 = ₹180. Using simple interest formula with P=1500, R=6%, T=2 years. 🏦',
        wrongAnswerExplanations: {
            '₹160': 'This would be the interest if rate was about 5.33%.',
            '₹150': 'This would be the interest if rate was 5%.',
            '₹120': 'This would be the interest if rate was 4%.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch7_t3_qm20',
        type: 'mcq',
        question: 'If ₹2,000 is invested at 5% per annum for 2 years (compounded yearly), what is the CI?',
        options: ['₹205', '₹200', '₹210', '₹215'],
        correctAnswer: '₹205',
        explanation: 'CI = 2000 × (1.05)² - 2000 = ₹205. Using compound interest formula with P=2000, R=5%, T=2 years. 🔢',
        wrongAnswerExplanations: {
            '₹200': 'This would be the simple interest amount.',
            '₹210': 'This is more than the actual compound interest.',
            '₹215': 'This is significantly more than the actual compound interest.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    }
];
