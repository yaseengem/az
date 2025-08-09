import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch18_t1_qm1',
    type: 'mcq',
    question: 'Rohit takes a loan of ₹25,000 at 8% simple interest. If he repays ₹31,000 at the end of the term, how long was the loan for?',
    options: ['3 years', '2.5 years', '3.5 years', '4 years'],
    correctAnswer: '3 years',
    explanation: 'Interest = ₹31,000-₹25,000 = ₹6,000. Using I=P×r×t: 6,000=25,000×0.08×t. t=6,000÷2,000=3 years',
    wrongAnswerExplanations: {
      '2.5 years': 'This would result in an interest of ₹5,000, not ₹6,000.',
      '3.5 years': 'This would result in an interest of ₹7,000, not ₹6,000.',
      '4 years': 'This would result in an interest of ₹8,000, not ₹6,000.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch18_t1_qm2',
    type: 'mcq',
    question: 'A sum of money doubles itself at simple interest in 10 years. The rate of interest is:',
    options: ['10%', '12.5%', '5%', '20%'],
    correctAnswer: '10%',
    explanation: 'If money doubles, then interest = principal. Using I=P×r×10=P, we get r=1÷10=0.1=10%',
    wrongAnswerExplanations: {
      '12.5%': 'At this rate, the money would more than double in 10 years.',
      '5%': 'At this rate, it would take 20 years to double the money.',
      '20%': 'At this rate, the money would more than double in just 5 years.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch18_t1_qm3',
    type: 'mcq',
    question: 'Priya created a monthly budget with categories for housing (₹15,000), food (₹8,000), transportation (₹4,000), entertainment (₹3,000), and savings (₹5,000). What percentage of her budget is allocated to fixed expenses if housing and transportation are considered fixed?',
    options: ['46.43%', '50%', '42.86%', '57.14%'],
    correctAnswer: '46.43%',
    explanation: 'Fixed expenses = ₹15,000+₹4,000 = ₹19,000. Total budget = ₹35,000. Percentage = (19,000÷35,000)×100 = 46.43%',
    wrongAnswerExplanations: {
      '50%': 'This percentage is slightly higher than the actual calculation.',
      '42.86%': 'This percentage is lower than the actual amount for fixed expenses.',
      '57.14%': 'This percentage is significantly higher than the actual fixed expenses.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch18_t1_qm4',
    type: 'mcq',
    question: 'What is the compound interest on ₹10,000 at 8% per annum for 2 years, compounded annually?',
    options: ['₹1,664', '₹1,600', '₹1,700', '₹1,683.20'],
    correctAnswer: '₹1,664',
    explanation: 'A = P(1+r)^t = 10,000×(1+0.08)^2 = 10,000×1.1664 = ₹11,664. CI = ₹11,664-₹10,000 = ₹1,664',
    wrongAnswerExplanations: {
      '₹1,600': 'This would be the simple interest for 2 years.',
      '₹1,700': 'This is higher than the actual compound interest.',
      '₹1,683.20': 'This would be the CI if compounded quarterly, not annually.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch18_t1_qm5',
    type: 'mcq',
    question: 'In debt-to-income ratio calculations, if your monthly debt payments are ₹20,000 and your gross monthly income is ₹60,000, what is your debt-to-income ratio?',
    options: ['33.33%', '30%', '35%', '40%'],
    correctAnswer: '33.33%',
    explanation: 'Debt-to-income ratio = (Monthly debt payments ÷ Gross monthly income) × 100 = (20,000÷60,000)×100 = 33.33%',
    wrongAnswerExplanations: {
      '30%': 'This ratio would require debt payments of ₹18,000, not ₹20,000.',
      '35%': 'This ratio would require debt payments of ₹21,000, not ₹20,000.',
      '40%': 'This ratio would require debt payments of ₹24,000, not ₹20,000.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch18_t1_qm6',
    type: 'mcq',
    question: 'If the difference between simple and compound interest on a sum for 2 years at 8% per annum is ₹64, what is the principal amount?',
    options: ['₹10,000', '₹8,000', '₹12,000', '₹9,000'],
    correctAnswer: '₹10,000',
    explanation: 'Difference = P[(1+r)^t - (1+rt)] = P[(1.08)^2 - (1+0.08×2)] = P[1.1664-1.16] = 0.0064P. So 64 = 0.0064P, thus P = ₹10,000',
    wrongAnswerExplanations: {
      '₹8,000': 'This principal would yield a difference of ₹51.20, not ₹64.',
      '₹12,000': 'This principal would yield a difference of ₹76.80, not ₹64.',
      '₹9,000': 'This principal would yield a difference of ₹57.60, not ₹64.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch18_t1_qm7',
    type: 'mcq',
    question: 'Aman wants to save ₹1,00,000 in 5 years. How much should he save each month, assuming he invests in a fund earning 6% annual interest compounded monthly?',
    options: ['₹1,466', '₹1,543', '₹1,598', '₹1,667'],
    correctAnswer: '₹1,543',
    explanation: 'Using future value of annuity formula: P=A[r/((1+r)^n-1)] where r=0.06/12 and n=60 months, we get approximately ₹1,543',
    wrongAnswerExplanations: {
      '₹1,466': 'This amount is insufficient to reach the target.',
      '₹1,598': 'This amount exceeds what`s needed to reach the target.',
      '₹1,667': 'This would be the amount if no interest were earned (₹100,000÷60).'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch18_t1_qm8',
    type: 'mcq',
    question: 'If you have a home loan of ₹30,00,000 at 7.5% interest per annum for 20 years, what would be the approximate monthly EMI?',
    options: ['₹24,115', '₹23,968', '₹25,200', '₹22,500'],
    correctAnswer: '₹24,115',
    explanation: 'Using EMI formula: EMI = P×r×(1+r)^n/((1+r)^n-1) where r=0.075/12 and n=240 months ≈ ₹24,115',
    wrongAnswerExplanations: {
      '₹23,968': 'This calculation uses incorrect rounding in the formula.',
      '₹25,200': 'This is higher than the actual EMI amount.',
      '₹22,500': 'This is lower than the actual EMI amount.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch18_t1_qm9',
    type: 'mcq',
    question: 'Compound interest compounded half-yearly means:',
    options: [
      'Interest is added to principal twice a year',
      'Only half of the interest is added to principal',
      'Interest is calculated for half the time period',
      'Interest rate is halved'
    ],
    correctAnswer: 'Interest is added to principal twice a year',
    explanation: 'Half-yearly compounding means interest is calculated and added to the principal every six months.',
    wrongAnswerExplanations: {
      'Only half of the interest is added to principal': 'All calculated interest is added in each compounding period.',
      'Interest is calculated for half the time period': 'Full time period is considered, just divided into half-year intervals.',
      'Interest rate is halved': 'The annual rate is divided by 2 for each period, but this doesn`t define the term.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch18_t1_qm10',
    type: 'mcq',
    question: 'A family spending 25% of income on housing, 15% on transportation, 20% on food, 10% on utilities, and saving the rest. If their monthly income is ₹60,000, how much do they save per month?',
    options: ['₹18,000', '₹15,000', '₹12,000', '₹20,000'],
    correctAnswer: '₹18,000',
    explanation: 'Total spending percentage = 25+15+20+10 = 70%. Savings = 30% of ₹60,000 = 0.3×60,000 = ₹18,000',
    wrongAnswerExplanations: {
      '₹15,000': 'This would be 25% of income, not the savings amount.',
      '₹12,000': 'This would be 20% of income, not the savings amount.',
      '₹20,000': 'This would be savings if spending were 66.67% of income, not 70%.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch18_t1_qm11',
    type: 'mcq',
    question: 'A mutual fund that earned 8%, 9%, and 7% returns in three consecutive years has an average annual return of:',
    options: ['8%', '7.33%', '8.33%', '8.03%'],
    correctAnswer: '8%',
    explanation: 'Average annual return = (8+9+7)÷3 = 24÷3 = 8%',
    wrongAnswerExplanations: {
      '7.33%': 'This is lower than the actual average.',
      '8.33%': 'This is higher than the actual average.',
      '8.03%': 'This would be the compound annual growth rate, not the average annual return.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch18_t1_qm12',
    type: 'mcq',
    question: 'If a credit card charges 2% monthly interest, what is the equivalent annual percentage rate (APR)?',
    options: ['24%', '26.82%', '24.66%', '27.44%'],
    correctAnswer: '26.82%',
    explanation: 'Annual equivalent = (1+0.02)^12-1 = 1.2682-1 = 0.2682 = 26.82%',
    wrongAnswerExplanations: {
      '24%': 'This is simple multiplication (2%×12), which doesn`t account for compounding.',
      '24.66%': 'This is an incorrect calculation.',
      '27.44%': 'This is higher than the actual APR.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch18_t1_qm13',
    type: 'mcq',
    question: 'A car worth ₹8,00,000 depreciates at 15% per year. Its value after 3 years will be approximately:',
    options: ['₹4,91,513', '₹5,20,000', '₹4,40,000', '₹5,44,000'],
    correctAnswer: '₹4,91,513',
    explanation: 'Value after 3 years = 800000×(1-0.15)^3 = 800000×0.6141 = ₹491,513',
    wrongAnswerExplanations: {
      '₹5,20,000': 'This reflects depreciation of 35% over 3 years, not compounded 15% yearly.',
      '₹4,40,000': 'This reflects depreciation of 45% over 3 years, not compounded 15% yearly.',
      '₹5,44,000': 'This reflects depreciation of 32% over 3 years, not compounded 15% yearly.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch18_t1_qm14',
    type: 'mcq',
    question: 'If the EMI on a ₹5,00,000 loan for 5 years is ₹10,350, what is the approximate annual interest rate?',
    options: ['9%', '8%', '10%', '7.5%'],
    correctAnswer: '9%',
    explanation: 'Using EMI formula and solving for r, where EMI=₹10,350, P=₹5,00,000, n=60 months, gives r≈0.75% monthly or 9% annually',
    wrongAnswerExplanations: {
      '8%': 'This rate would result in a lower EMI of about ₹10,140.',
      '10%': 'This rate would result in a higher EMI of about ₹10,570.',
      '7.5%': 'This rate would result in a lower EMI of about ₹10,020.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch18_t1_qm15',
    type: 'mcq',
    question: 'The "Rule of 72" approximates how long it takes money to double. At 8% interest, money would double in approximately:',
    options: ['9 years', '7.2 years', '10 years', '8 years'],
    correctAnswer: '9 years',
    explanation: 'Using the Rule of 72: Time to double = 72÷interest rate = 72÷8 = 9 years',
    wrongAnswerExplanations: {
      '7.2 years': 'This would be the result if the formula used were Rule of 60 (not standard).',
      '10 years': 'This would be the doubling time at simple interest of 10%, not 8%.',
      '8 years': 'This is just the interest rate itself, not the doubling time.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch18_t1_qm16',
    type: 'mcq',
    question: 'If the inflation rate is 6% and your salary increases by 4%, what is the real change in your purchasing power?',
    options: ['-1.89%', '-2%', '-1.96%', '-2.5%'],
    correctAnswer: '-1.89%',
    explanation: 'Real change = [(1+0.04)÷(1+0.06)]-1 = 1.04÷1.06-1 = 0.9811-1 = -0.0189 = -1.89%',
    wrongAnswerExplanations: {
      '-2%': 'This is a simple approximation (6%-4%), not accounting for compounding effects.',
      '-1.96%': 'This calculation contains a rounding error.',
      '-2.5%': 'This is lower than the actual real change.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch18_t1_qm17',
    type: 'mcq',
    question: 'A bank offers 8% interest compounded quarterly. The effective annual interest rate is:',
    options: ['8.24%', '8.5%', '8.16%', '8.3%'],
    correctAnswer: '8.24%',
    explanation: 'Effective annual rate = (1+0.08/4)^4-1 = (1+0.02)^4-1 = 1.0824-1 = 0.0824 = 8.24%',
    wrongAnswerExplanations: {
      '8.5%': 'This is higher than the actual effective rate.',
      '8.16%': 'This would be the rate if compounded twice a year, not quarterly.',
      '8.3%': 'This calculation contains an error.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch18_t1_qm18',
    type: 'mcq',
    question: 'Which of the following budgeting methods focuses on assigning every rupee of income to a specific category until zero remains unallocated?',
    options: ['Zero-based budgeting', '50-30-20 method', 'Pay-yourself-first method', 'Envelope method'],
    correctAnswer: 'Zero-based budgeting',
    explanation: 'Zero-based budgeting requires allocating all income to specific categories until no money remains unassigned.',
    wrongAnswerExplanations: {
      '50-30-20 method': 'This allocates by percentages to needs, wants, and savings, not to zero out all income.',
      'Pay-yourself-first method': 'This prioritizes savings before expenses but doesn`t necessarily allocate all to zero.',
      'Envelope method': 'This uses physical or virtual envelopes for categories but doesn`t require zeroing out all funds.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch18_t1_qm19',
    type: 'mcq',
    question: 'A home valued at ₹50,00,000 increases in value by 5% annually. What will be its approximate value after 4 years?',
    options: ['₹60,77,531', '₹60,00,000', '₹62,50,000', '₹61,05,100'],
    correctAnswer: '₹60,77,531',
    explanation: 'Future value = 5000000×(1+0.05)^4 = 5000000×1.2155 = ₹6,077,531',
    wrongAnswerExplanations: {
      '₹60,00,000': 'This would be the value with a 20% total increase, not compounded annually.',
      '₹62,50,000': 'This would be the value with a 25% total increase, not compounded annually.',
      '₹61,05,100': 'This calculation contains an error.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch18_t1_qm20',
    type: 'mcq',
    question: 'If you borrow ₹2,50,000 at 12% simple interest and repay through 36 equal monthly installments, what is each EMI approximately?',
    options: ['₹8,167', '₹8,333', '₹8,750', '₹7,986'],
    correctAnswer: '₹8,167',
    explanation: 'Total interest = ₹250,000×0.12×3 = ₹90,000. Total repayment = ₹250,000 + ₹90,000 = ₹340,000. Monthly EMI = ₹340,000÷36 = ₹8,167',
    wrongAnswerExplanations: {
      '₹8,333': 'This would be the monthly payment without interest (principal only).',
      '₹8,750': 'This is higher than the actual EMI.',
      '₹7,986': 'This is lower than the actual EMI.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  }
];
