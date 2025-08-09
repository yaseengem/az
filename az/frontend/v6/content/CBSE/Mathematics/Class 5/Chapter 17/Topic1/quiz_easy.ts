import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl5_ch17_t1_qe1',
        type: 'mcq',
        question: 'What is a budget?',
        options: [
            'A plan for how to spend and save money',
            'A type of bank account',
            'A shopping list',
            'A way to earn money'
        ],
        correctAnswer: 'A plan for how to spend and save money',
        explanation: 'A budget is a plan that helps you track your income and expenses, and decide how to spend and save your money wisely.',
        wrongAnswerExplanations: {
            'A type of bank account': 'A bank account is where you keep your money, not a plan for spending it.',
            'A shopping list': 'A shopping list is just for items to buy, not a complete money plan.',
            'A way to earn money': 'A budget helps manage money you already have, not earn new money.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch17_t1_qe2',
        type: 'mcq',
        question: 'What is income?',
        options: [
            'Money you spend',
            'Money you receive',
            'Money you save',
            'Money you borrow'
        ],
        correctAnswer: 'Money you receive',
        explanation: 'Income is money that you receive regularly, such as allowance, gifts, or money from small jobs.',
        wrongAnswerExplanations: {
            'Money you spend': 'Money you spend is called expenses, not income.',
            'Money you save': 'Saving is what you do with your income, not income itself.',
            'Money you borrow': 'Borrowed money needs to be paid back and is not considered income.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch17_t1_qe3',
        type: 'mcq',
        question: 'If you receive ₹50 daily and spend ₹30, how much can you save in a week?',
        options: [
            '₹100',
            '₹140',
            '₹180',
            '₹200'
        ],
        correctAnswer: '₹140',
        explanation: 'Daily savings = ₹50 - ₹30 = ₹20. Weekly savings = ₹20 × 7 days = ₹140.',
        wrongAnswerExplanations: {
            '₹100': 'This is less than the correct amount. Remember to multiply daily savings by 7 days.',
            '₹180': 'This is more than the correct amount. Check your calculations.',
            '₹200': 'This is more than the correct amount. Check your calculations.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch17_t1_qe4',
        type: 'mcq',
        question: 'What is the difference between needs and wants?',
        options: [
            'Needs are expensive, wants are cheap',
            'Needs are things you must have, wants are things you would like to have',
            'Needs are for adults, wants are for children',
            'There is no difference'
        ],
        correctAnswer: 'Needs are things you must have, wants are things you would like to have',
        explanation: 'Needs are essential items like food and school supplies, while wants are non-essential items like toys and games.',
        wrongAnswerExplanations: {
            'Needs are expensive, wants are cheap': 'Price is not the main difference between needs and wants.',
            'Needs are for adults, wants are for children': 'Both needs and wants apply to people of all ages.',
            'There is no difference': 'There is a clear difference between needs and wants.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch17_t1_qe5',
        type: 'mcq',
        question: 'If you save ₹10 daily, how much will you have in 30 days?',
        options: [
            '₹200',
            '₹250',
            '₹300',
            '₹350'
        ],
        correctAnswer: '₹300',
        explanation: '₹10 × 30 days = ₹300.',
        wrongAnswerExplanations: {
            '₹200': 'This is less than the correct amount. Remember to multiply by 30 days.',
            '₹250': 'This is less than the correct amount. Check your multiplication.',
            '₹350': 'This is more than the correct amount. Check your multiplication.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch17_t1_qe6',
        type: 'mcq',
        question: 'What is a fixed expense?',
        options: [
            'An expense that changes every month',
            'An expense that stays the same amount',
            'An expense that you don"t need to pay',
            'An expense that is very large'
        ],
        correctAnswer: 'An expense that stays the same amount',
        explanation: 'A fixed expense is one that remains the same amount regularly, like a daily school lunch cost.',
        wrongAnswerExplanations: {
            'An expense that changes every month': 'This describes a variable expense, not a fixed expense.',
            'An expense that you don"t need to pay': 'All expenses need to be paid, whether fixed or variable.',
            'An expense that is very large': 'The size of the expense doesn"t determine if it"s fixed or variable.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch17_t1_qe7',
        type: 'mcq',
        question: 'If your monthly allowance is ₹400 and you spend ₹250, how much do you save?',
        options: [
            '₹100',
            '₹150',
            '₹200',
            '₹250'
        ],
        correctAnswer: '₹150',
        explanation: 'Savings = Income - Expenses = ₹400 - ₹250 = ₹150.',
        wrongAnswerExplanations: {
            '₹100': 'This is less than the correct amount. Subtract expenses from income.',
            '₹200': 'This is more than the correct amount. Check your subtraction.',
            '₹250': 'This is the amount spent, not saved.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch17_t1_qe8',
        type: 'mcq',
        question: 'What is comparison shopping?',
        options: [
            'Buying everything you see',
            'Comparing prices before buying',
            'Shopping with friends',
            'Buying expensive items'
        ],
        correctAnswer: 'Comparing prices before buying',
        explanation: 'Comparison shopping means looking at different prices for the same item to find the best deal.',
        wrongAnswerExplanations: {
            'Buying everything you see': 'This is not smart shopping and can lead to overspending.',
            'Shopping with friends': 'This is social shopping, not comparison shopping.',
            'Buying expensive items': 'This is not the purpose of comparison shopping.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch17_t1_qe9',
        type: 'mcq',
        question: 'If a toy costs ₹200 and you save ₹10 daily, how many days will it take to buy it?',
        options: [
            '15 days',
            '20 days',
            '25 days',
            '30 days'
        ],
        correctAnswer: '20 days',
        explanation: '₹200 ÷ ₹10 per day = 20 days.',
        wrongAnswerExplanations: {
            '15 days': 'This is less than the correct number of days. Divide the cost by daily savings.',
            '25 days': 'This is more than the correct number of days. Check your division.',
            '30 days': 'This is more than the correct number of days. Check your division.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch17_t1_qe10',
        type: 'mcq',
        question: 'What is the first step in creating a budget?',
        options: [
            'List your expenses',
            'List your income',
            'Start spending',
            'Open a bank account'
        ],
        correctAnswer: 'List your income',
        explanation: 'The first step in creating a budget is to list all the money you receive (income).',
        wrongAnswerExplanations: {
            'List your expenses': 'This is the second step, not the first.',
            'Start spending': 'This should be done after creating a budget, not before.',
            'Open a bank account': 'While helpful, this is not the first step in creating a budget.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch17_t1_qe11',
        type: 'mcq',
        question: 'What is a savings goal?',
        options: [
            'A plan to spend all your money',
            'A specific amount you want to save',
            'A way to earn more money',
            'A type of bank account'
        ],
        correctAnswer: 'A specific amount you want to save',
        explanation: 'A savings goal is a specific amount of money you plan to save for a particular purpose.',
        wrongAnswerExplanations: {
            'A plan to spend all your money': 'This is the opposite of a savings goal.',
            'A way to earn more money': 'This is about income, not savings goals.',
            'A type of bank account': 'A bank account is where you keep money, not a goal itself.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch17_t1_qe12',
        type: 'mcq',
        question: 'If you have ₹500 and spend ₹300, how much is left?',
        options: [
            '₹100',
            '₹150',
            '₹200',
            '₹250'
        ],
        correctAnswer: '₹200',
        explanation: 'Money left = Total money - Money spent = ₹500 - ₹300 = ₹200.',
        wrongAnswerExplanations: {
            '₹100': 'This is less than the correct amount. Subtract the spent amount from the total.',
            '₹150': 'This is less than the correct amount. Check your subtraction.',
            '₹250': 'This is more than the correct amount. Check your subtraction.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch17_t1_qe13',
        type: 'mcq',
        question: 'What is a variable expense?',
        options: [
            'An expense that stays the same',
            'An expense that changes amount',
            'An expense that is very small',
            'An expense that is not important'
        ],
        correctAnswer: 'An expense that changes amount',
        explanation: 'A variable expense is one that changes in amount, like money spent on entertainment or snacks.',
        wrongAnswerExplanations: {
            'An expense that stays the same': 'This describes a fixed expense, not a variable expense.',
            'An expense that is very small': 'The size of the expense doesn"t determine if it"s variable.',
            'An expense that is not important': 'All expenses are important to track in a budget.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch17_t1_qe14',
        type: 'mcq',
        question: 'If you save ₹5 daily, how many days will it take to save ₹100?',
        options: [
            '15 days',
            '20 days',
            '25 days',
            '30 days'
        ],
        correctAnswer: '20 days',
        explanation: '₹100 ÷ ₹5 per day = 20 days.',
        wrongAnswerExplanations: {
            '15 days': 'This is less than the correct number of days. Divide the total by daily savings.',
            '25 days': 'This is more than the correct number of days. Check your division.',
            '30 days': 'This is more than the correct number of days. Check your division.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch17_t1_qe15',
        type: 'mcq',
        question: 'What is the purpose of tracking expenses?',
        options: [
            'To spend more money',
            'To know where your money goes',
            'To earn more money',
            'To avoid saving money'
        ],
        correctAnswer: 'To know where your money goes',
        explanation: 'Tracking expenses helps you understand how you"re spending your money and where you might save more.',
        wrongAnswerExplanations: {
        'To spend more money': 'The purpose is to manage money better, not spend more.',
        'To earn more money': 'Tracking expenses doesn"t directly help you earn more money.',
            'To avoid saving money': 'The purpose is to help you save money, not avoid it.'
        },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
    },
{
    id: 'cl5_ch17_t1_qe16',
        type: 'mcq',
            question: 'If you receive ₹100 weekly and spend ₹60, how much do you save in a month (4 weeks)?',
                options: [
                    '₹120',
                    '₹140',
                    '₹160',
                    '₹180'
                ],
                    correctAnswer: '₹160',
                        explanation: 'Weekly savings = ₹100 - ₹60 = ₹40. Monthly savings = ₹40 × 4 weeks = ₹160.',
                            wrongAnswerExplanations: {
        '₹120': 'This is less than the correct amount. Remember to multiply weekly savings by 4.',
            '₹140': 'This is less than the correct amount. Check your calculations.',
                '₹180': 'This is more than the correct amount. Check your calculations.'
    },
    difficulty: 'easy',
        marks: 1,
            recommendedTime: 30
},
{
    id: 'cl5_ch17_t1_qe17',
        type: 'mcq',
            question: 'What is the best way to save money?',
                options: [
                    'Spend all your money',
                    'Set aside money before spending',
                    'Borrow money from friends',
                    'Don"t track your spending'
                ],
                    correctAnswer: 'Set aside money before spending',
                        explanation: 'The best way to save is to set aside money for savings before spending on other things.',
                            wrongAnswerExplanations: {
        'Spend all your money': 'This is the opposite of saving money.',
            'Borrow money from friends': 'This is not a good way to save money.',
                'Don"t track your spending': 'Tracking spending helps you save money, not avoid it.'
    },
    difficulty: 'easy',
        marks: 1,
            recommendedTime: 30
},
{
    id: 'cl5_ch17_t1_qe18',
        type: 'mcq',
            question: 'If a book costs ₹150 and you have ₹200, how much will you have left after buying it?',
                options: [
                    '₹30',
                    '₹40',
                    '₹50',
                    '₹60'
                ],
                    correctAnswer: '₹50',
                        explanation: 'Money left = Total money - Cost of book = ₹200 - ₹150 = ₹50.',
                            wrongAnswerExplanations: {
        '₹30': 'This is less than the correct amount. Subtract the cost from your total money.',
            '₹40': 'This is less than the correct amount. Check your subtraction.',
                '₹60': 'This is more than the correct amount. Check your subtraction.'
    },
    difficulty: 'easy',
        marks: 1,
            recommendedTime: 30
},
{
    id: 'cl5_ch17_t1_qe19',
        type: 'mcq',
            question: 'What is the second step in creating a budget?',
                options: [
                    'List your income',
                    'List your expenses',
                    'Start spending',
                    'Open a bank account'
                ],
                    correctAnswer: 'List your expenses',
                        explanation: 'After listing income, the second step is to list all the money you spend (expenses).',
                            wrongAnswerExplanations: {
        'List your income': 'This is the first step, not the second.',
            'Start spending': 'This should be done after creating a budget, not during the planning.',
                'Open a bank account': 'While helpful, this is not a step in creating a budget.'
    },
    difficulty: 'easy',
        marks: 1,
            recommendedTime: 30
},
{
    id: 'cl5_ch17_t1_qe20',
        type: 'mcq',
            question: 'If you save ₹20 weekly, how much will you have in 2 months (8 weeks)?',
                options: [
                    '₹120',
                    '₹140',
                    '₹160',
                    '₹180'
                ],
                    correctAnswer: '₹160',
                        explanation: '₹20 × 8 weeks = ₹160.',
                            wrongAnswerExplanations: {
        '₹120': 'This is less than the correct amount. Remember to multiply by 8 weeks.',
            '₹140': 'This is less than the correct amount. Check your multiplication.',
                '₹180': 'This is more than the correct amount. Check your multiplication.'
    },
    difficulty: 'easy',
        marks: 1,
            recommendedTime: 30
}
];
