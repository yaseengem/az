import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch18_t1_qe1',
    type: 'mcq',
    question: 'Which of the following is NOT a component of a personal budget?',
    options: ['Income', 'Expenses', 'Assets', 'Weather forecast'],
    correctAnswer: 'Weather forecast',
    explanation: 'A personal budget includes income, expenses, and assets, but not weather forecasts which are unrelated to financial planning.',
    wrongAnswerExplanations: {
      'Income': 'Income is a key component that shows money coming in.',
      'Expenses': 'Expenses track where your money is being spent.',
      'Assets': 'Assets are what you own and are often included in comprehensive budgets.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch18_t1_qe2',
    type: 'mcq',
    question: 'Simple interest is calculated on:',
    options: ['Principal amount only', 'Principal plus accumulated interest', 'Only the interest portion', 'Market value of assets'],
    correctAnswer: 'Principal amount only',
    explanation: 'Simple interest is calculated only on the original principal, not on any interest previously earned.',
    wrongAnswerExplanations: {
      'Principal plus accumulated interest': 'This describes compound interest, not simple interest.',
      'Only the interest portion': 'Interest cannot be calculated on itself in simple interest.',
      'Market value of assets': 'Interest is calculated on monetary amounts, not asset valuations.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch18_t1_qe3',
    type: 'mcq',
    question: 'What does the "50-30-20" rule in budgeting refer to?',
    options: ['Tax brackets', 'Allocation of income to needs, wants, and savings', 'Investment portfolio diversification', 'Debt-to-income ratio thresholds'],
    correctAnswer: 'Allocation of income to needs, wants, and savings',
    explanation: 'The 50-30-20 rule suggests allocating 50% of income to needs, 30% to wants, and 20% to savings/debt repayment.',
    wrongAnswerExplanations: {
      'Tax brackets': 'Tax brackets refer to income ranges for taxation, not budgeting allocation.',
      'Investment portfolio diversification': 'This relates to spreading investments, not budgeting percentages.',
      'Debt-to-income ratio thresholds': 'This measures debt relative to income, not budget allocation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch18_t1_qe4',
    type: 'mcq',
    question: 'If you deposit ₹5000 at 8% simple interest for 3 years, how much interest will you earn?',
    options: ['₹1200', '₹1000', '₹1500', '₹400'],
    correctAnswer: '₹1200',
    explanation: 'Simple Interest = P×r×t = 5000×(8/100)×3 = 5000×0.08×3 = ₹1200',
    wrongAnswerExplanations: {
      '₹1000': 'This would be the interest if the rate was about 6.67%.',
      '₹1500': 'This is more than the actual interest amount.',
      '₹400': 'This would be the interest for 1 year, not 3 years.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch18_t1_qe5',
    type: 'mcq',
    question: 'Which of the following is a fixed expense in a typical budget?',
    options: ['Rent', 'Dining out', 'Gift purchases', 'Movie tickets'],
    correctAnswer: 'Rent',
    explanation: 'Rent is typically a fixed expense as it remains constant for the duration of a lease agreement.',
    wrongAnswerExplanations: {
      'Dining out': 'Dining expenses can vary month to month and are discretionary.',
      'Gift purchases': 'Gift expenses are variable and occasional.',
      'Movie tickets': 'Entertainment expenses like movies are discretionary and variable.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch18_t1_qe6',
    type: 'mcq',
    question: 'The formula for calculating simple interest is:',
    options: ['P×r×t', 'P(1+r)^t - P', 'P + (P×r×t)', 'P×r×t/100'],
    correctAnswer: 'P×r×t',
    explanation: 'Simple interest = Principal × Rate (in decimal) × Time. When rate is given as percentage, we convert it to decimal.',
    wrongAnswerExplanations: {
      'P(1+r)^t - P': 'This is the formula for compound interest, not simple interest.',
      'P + (P×r×t)': 'This gives the amount (principal + interest), not just the interest.',
      'P×r×t/100': 'This is technically correct if r is in percent, but we convert percentage to decimal first.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch18_t1_qe7',
    type: 'mcq',
    question: 'What is the difference between gross income and net income?',
    options: [
      'Gross income is before tax deductions, net income is after',
      'Gross income includes investments, net income doesn`t',
      'Net income includes loans, gross income doesn`t',
      'They are different terms for the same concept'
    ],
    correctAnswer: 'Gross income is before tax deductions, net income is after',
    explanation: 'Gross income is total income before deductions; net income is what you actually receive after taxes and other deductions.',
    wrongAnswerExplanations: {
      'Gross income includes investments, net income doesn`t': 'Both may include investment income if applicable.',
      'Net income includes loans, gross income doesn`t': 'Loans are not income in either calculation.',
      'They are different terms for the same concept': 'They represent different stages of income calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch18_t1_qe8',
    type: 'mcq',
    question: 'A ₹10,000 loan at 12% simple interest for 6 months would accrue how much interest?',
    options: ['₹600', '₹1,200', '₹500', '₹720'],
    correctAnswer: '₹600',
    explanation: 'Interest = 10,000×0.12×(6/12) = 10,000×0.12×0.5 = ₹600',
    wrongAnswerExplanations: {
      '₹1,200': 'This would be the interest for a full year, not 6 months.',
      '₹500': 'This is less than the actual interest amount.',
      '₹720': 'This calculation contains an error.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch18_t1_qe9',
    type: 'mcq',
    question: 'Which budgeting method involves allocating money into different categories or "envelopes"?',
    options: ['Envelope budgeting', 'Zero-based budgeting', 'Snowball method', 'Avalanche method'],
    correctAnswer: 'Envelope budgeting',
    explanation: 'Envelope budgeting involves assigning available money to specific spending categories, traditionally using physical envelopes.',
    wrongAnswerExplanations: {
      'Zero-based budgeting': 'This involves starting from zero each period and justifying all expenses.',
      'Snowball method': 'This is a debt repayment strategy, not a budgeting method.',
      'Avalanche method': 'This is another debt repayment strategy, not a budgeting method.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch18_t1_qe10',
    type: 'mcq',
    question: 'What happens to the simple interest earned on a principal amount when the time period doubles?',
    options: ['It doubles', 'It quadruples', 'It increases by 50%', 'It remains the same'],
    correctAnswer: 'It doubles',
    explanation: 'Since time appears as a direct multiplier in the simple interest formula (P×r×t), doubling time doubles the interest.',
    wrongAnswerExplanations: {
      'It quadruples': 'This would happen with compound interest over long periods, not simple interest.',
      'It increases by 50%': 'This is incorrect; the relationship is proportional.',
      'It remains the same': 'Interest increases with time, not stays constant.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch18_t1_qe11',
    type: 'mcq',
    question: 'Which of these is considered a liability rather than an asset in personal finance?',
    options: ['Credit card debt', 'Savings account', 'Stock investments', 'Real estate property'],
    correctAnswer: 'Credit card debt',
    explanation: 'Credit card debt is a liability as it represents money you owe, not something of value that you own.',
    wrongAnswerExplanations: {
      'Savings account': 'This is an asset as it represents money you own.',
      'Stock investments': 'These are assets that have monetary value and potential to grow.',
      'Real estate property': 'Property is an asset that you own with potential value.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch18_t1_qe12',
    type: 'mcq',
    question: 'If a loan of ₹8,000 accrues ₹1,200 in simple interest after a certain period, what is the rate if the time period is 3 years?',
    options: ['5%', '4%', '6%', '5.5%'],
    correctAnswer: '5%',
    explanation: 'Using I=P×r×t: 1,200=8,000×r×3, so r=1,200÷(8,000×3)=1,200÷24,000=0.05=5%',
    wrongAnswerExplanations: {
      '4%': 'This rate would yield ₹960 in interest, not ₹1,200.',
      '6%': 'This rate would yield ₹1,440 in interest, not ₹1,200.',
      '5.5%': 'This rate would yield ₹1,320 in interest, not ₹1,200.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch18_t1_qe13',
    type: 'mcq',
    question: 'Which statement about compound interest is correct?',
    options: [
      'It calculates interest on both principal and accumulated interest',
      'It is always less beneficial than simple interest for savers',
      'It is calculated only on the original principal',
      'It does not depend on the frequency of compounding'
    ],
    correctAnswer: 'It calculates interest on both principal and accumulated interest',
    explanation: 'Compound interest adds interest to the principal, then calculates new interest on the combined amount.',
    wrongAnswerExplanations: {
      'It is always less beneficial than simple interest for savers': 'Compound interest is more beneficial for savers over time.',
      'It is calculated only on the original principal': 'This describes simple interest, not compound interest.',
      'It does not depend on the frequency of compounding': 'The frequency of compounding directly affects the total interest.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch18_t1_qe14',
    type: 'mcq',
    question: 'What is the time period required for ₹12,000 to earn ₹3,600 in simple interest at an annual rate of 10%?',
    options: ['3 years', '2.5 years', '4 years', '3.5 years'],
    correctAnswer: '3 years',
    explanation: 'Using I=P×r×t: 3,600=12,000×0.10×t, so t=3,600÷1,200=3 years',
    wrongAnswerExplanations: {
      '2.5 years': 'This would yield ₹3,000 in interest, not ₹3,600.',
      '4 years': 'This would yield ₹4,800 in interest, not ₹3,600.',
      '3.5 years': 'This would yield ₹4,200 in interest, not ₹3,600.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch18_t1_qe15',
    type: 'mcq',
    question: 'Which of these is typically NOT included in an emergency fund calculation?',
    options: ['Vacation expenses', 'Rent/mortgage payments', 'Utility bills', 'Grocery costs'],
    correctAnswer: 'Vacation expenses',
    explanation: 'Emergency funds cover essential living expenses during financial hardships, not discretionary expenses like vacations.',
    wrongAnswerExplanations: {
      'Rent/mortgage payments': 'Housing is a critical expense covered by emergency funds.',
      'Utility bills': 'Utilities are essential expenses that emergency funds should cover.',
      'Grocery costs': 'Food is a basic necessity that should be covered by emergency funds.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch18_t1_qe16',
    type: 'mcq',
    question: 'If a family spends ₹35,000 on monthly expenses and has a monthly income of ₹42,000, what percentage of their income do they save?',
    options: ['16.67%', '20%', '15%', '17.5%'],
    correctAnswer: '16.67%',
    explanation: 'Savings = ₹42,000-₹35,000 = ₹7,000; Percentage = (7,000÷42,000)×100 = 16.67%',
    wrongAnswerExplanations: {
      '20%': 'This would require savings of ₹8,400, not ₹7,000.',
      '15%': 'This would require savings of ₹6,300, not ₹7,000.',
      '17.5%': 'This would require savings of ₹7,350, not ₹7,000.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch18_t1_qe17',
    type: 'mcq',
    question: 'The principal amount that would earn ₹450 as simple interest at 9% per annum in 2.5 years is:',
    options: ['₹2,000', '₹2,500', '₹1,800', '₹2,200'],
    correctAnswer: '₹2,000',
    explanation: 'Using I=P×r×t: 450=P×0.09×2.5, so P=450÷(0.09×2.5)=450÷0.225=₹2,000',
    wrongAnswerExplanations: {
      '₹2,500': 'This principal would earn ₹562.50, not ₹450.',
      '₹1,800': 'This principal would earn ₹405, not ₹450.',
      '₹2,200': 'This principal would earn ₹495, not ₹450.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch18_t1_qe18',
    type: 'mcq',
    question: 'What is the primary purpose of creating a budget?',
    options: [
      'To track and plan your income and expenses',
      'To increase your credit score',
      'To qualify for loans',
      'To calculate tax deductions'
    ],
    correctAnswer: 'To track and plan your income and expenses',
    explanation: 'A budget helps track where money comes from and goes to, enabling better financial planning and decision-making.',
    wrongAnswerExplanations: {
      'To increase your credit score': 'Budgeting may help this indirectly, but it`s not the primary purpose.',
      'To qualify for loans': 'Budgeting helps manage finances, not specifically to qualify for loans.',
      'To calculate tax deductions': 'Budgeting focuses on income and expense planning, not tax calculations.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch18_t1_qe19',
    type: 'mcq',
    question: 'If you save ₹500 per month for a year, how much will you have saved (excluding any interest)?',
    options: ['₹6,000', '₹5,500', '₹6,500', '₹12,000'],
    correctAnswer: '₹6,000',
    explanation: 'Total savings = Monthly saving × Number of months = ₹500 × 12 = ₹6,000',
    wrongAnswerExplanations: {
      '₹5,500': 'This would be the savings for 11 months, not 12.',
      '₹6,500': 'This is more than the actual amount saved.',
      '₹12,000': 'This would be the savings at ₹1,000 per month, not ₹500.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch18_t1_qe20',
    type: 'mcq',
    question: 'What does EMI stand for in the context of loan repayments?',
    options: [
      'Equated Monthly Installment',
      'Equal Money Investment',
      'Extended Monthly Income',
      'Extra Monthly Interest'
    ],
    correctAnswer: 'Equated Monthly Installment',
    explanation: 'EMI is the fixed payment amount made by a borrower to a lender at a specified date each month.',
    wrongAnswerExplanations: {
      'Equal Money Investment': 'This is not a standard financial term related to loan repayments.',
      'Extended Monthly Income': 'This is not a standard financial term related to loan repayments.',
      'Extra Monthly Interest': 'This is not a standard financial term related to loan repayments.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  }
];
