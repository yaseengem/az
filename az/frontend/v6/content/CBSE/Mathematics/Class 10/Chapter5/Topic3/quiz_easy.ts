import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch5_t3_qe1',
    type: 'mcq',
    question: "A company offers a starting salary of ₹25,000 with an annual increment of ₹3,000. What will be the salary in the 5th year?",
    options: [
      "₹37,000",
      "₹40,000",
      "₹25,000",
      "₹34,000"
    ],
    correctAnswer: "₹37,000",
    explanation: "Salary in 5th year = 25,000 + (5-1) × 3,000 = 25,000 + 12,000 = ₹37,000",
    wrongAnswerExplanations: {
      "₹40,000": "This incorrectly includes 5 increments instead of 4.",
      "₹25,000": "This is just the starting salary without any increments.",
      "₹34,000": "This accounts for only 3 increments instead of 4."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch5_t3_qe2',
    type: 'mcq',
    question: "In a theater, the first row has 20 seats, the second row has 22 seats, and each successive row has 2 more seats than the previous row. How many seats are there in the 10th row?",
    options: [
      "38 seats",
      "40 seats",
      "36 seats",
      "42 seats"
    ],
    correctAnswer: "38 seats",
    explanation: "Seats in 10th row = 20 + (10-1) × 2 = 20 + 18 = 38 seats",
    wrongAnswerExplanations: {
      "40 seats": "This incorrectly adds 20 seats instead of 18 to the initial number.",
      "36 seats": "This incorrectly adds 16 seats instead of 18 to the initial number.",
      "42 seats": "This incorrectly adds 22 seats instead of 18 to the initial number."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch5_t3_qe3',
    type: 'mcq',
    question: "A person saves ₹500 in the first month, ₹550 in the second month, and so on with an increase of ₹50 each month. How much will they save in the 12th month?",
    options: [
      "₹1,050",
      "₹1,000",
      "₹1,100",
      "₹950"
    ],
    correctAnswer: "₹1,050",
    explanation: "Savings in 12th month = 500 + (12-1) × 50 = 500 + 550 = ₹1,050",
    wrongAnswerExplanations: {
      "₹1,000": "This incorrectly adds 500 to the initial amount instead of 550.",
      "₹1,100": "This incorrectly adds 600 to the initial amount instead of 550.",
      "₹950": "This incorrectly adds 450 to the initial amount instead of 550."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch5_t3_qe4',
    type: 'mcq',
    question: "A factory produced 1,000 units in the first week and increased production by 100 units each week. How many units will be produced in the 8th week?",
    options: [
      "1,700 units",
      "1,800 units",
      "1,600 units",
      "1,500 units"
    ],
    correctAnswer: "1,700 units",
    explanation: "Production in 8th week = 1,000 + (8-1) × 100 = 1,000 + 700 = 1,700 units",
    wrongAnswerExplanations: {
      "1,800 units": "This incorrectly adds 800 units instead of 700 to the initial production.",
      "1,600 units": "This incorrectly adds 600 units instead of 700 to the initial production.",
      "1,500 units": "This incorrectly adds 500 units instead of 700 to the initial production."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch5_t3_qe5',
    type: 'mcq',
    question: "A staircase has 10 steps, with the first step being 25 cm high and each successive step being 0.5 cm higher than the previous one. What is the height of the 10th step?",
    options: [
      "29.5 cm",
      "30 cm",
      "29 cm",
      "28.5 cm"
    ],
    correctAnswer: "29.5 cm",
    explanation: "Height of 10th step = 25 + (10-1) × 0.5 = 25 + 4.5 = 29.5 cm",
    wrongAnswerExplanations: {
      "30 cm": "This incorrectly adds 5 cm instead of 4.5 cm to the initial height.",
      "29 cm": "This incorrectly adds 4 cm instead of 4.5 cm to the initial height.",
      "28.5 cm": "This incorrectly adds 3.5 cm instead of 4.5 cm to the initial height."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch5_t3_qe6',
    type: 'mcq',
    question: "In a mobile data plan, the first GB costs ₹200 and each additional GB costs ₹20 less than the previous GB. What will the 5th GB cost?",
    options: [
      "₹120",
      "₹140",
      "₹100",
      "₹80"
    ],
    correctAnswer: "₹120",
    explanation: "Cost of 5th GB = 200 - (5-1) × 20 = 200 - 80 = ₹120",
    wrongAnswerExplanations: {
      "₹140": "This incorrectly subtracts 60 instead of 80 from the initial cost.",
      "₹100": "This incorrectly subtracts 100 instead of 80 from the initial cost.",
      "₹80": "This incorrectly subtracts 120 instead of 80 from the initial cost."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch5_t3_qe7',
    type: 'mcq',
    question: "A water tank fills at the rate of 10 liters in the first minute, 12 liters in the second minute, and increases by 2 liters each minute. How many liters will it fill in the 15th minute?",
    options: [
      "38 liters",
      "40 liters",
      "36 liters",
      "42 liters"
    ],
    correctAnswer: "38 liters",
    explanation: "Water filled in 15th minute = 10 + (15-1) × 2 = 10 + 28 = 38 liters",
    wrongAnswerExplanations: {
      "40 liters": "This incorrectly adds 30 liters instead of 28 to the initial rate.",
      "36 liters": "This incorrectly adds 26 liters instead of 28 to the initial rate.",
      "42 liters": "This incorrectly adds 32 liters instead of 28 to the initial rate."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch5_t3_qe8',
    type: 'mcq',
    question: "A student reads 5 pages on the first day, 8 pages on the second day, and so on, with an increase of 3 pages each day. How many pages will the student read on the 10th day?",
    options: [
      "32 pages",
      "35 pages",
      "29 pages",
      "38 pages"
    ],
    correctAnswer: "32 pages",
    explanation: "Pages read on 10th day = 5 + (10-1) × 3 = 5 + 27 = 32 pages",
    wrongAnswerExplanations: {
      "35 pages": "This incorrectly adds 30 pages instead of 27 to the initial number.",
      "29 pages": "This incorrectly adds 24 pages instead of 27 to the initial number.",
      "38 pages": "This incorrectly adds 33 pages instead of 27 to the initial number."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch5_t3_qe9',
    type: 'mcq',
    question: "A town's population is 50,000 and increases by 1,500 each year. What will be the population after 7 years?",
    options: [
      "60,500",
      "59,000",
      "62,000",
      "60,000"
    ],
    correctAnswer: "60,500",
    explanation: "Population after 7 years = 50,000 + 7 × 1,500 = 50,000 + 10,500 = 60,500",
    wrongAnswerExplanations: {
      "59,000": "This incorrectly adds 6 years of growth instead of 7 years.",
      "62,000": "This incorrectly adds 12,000 instead of 10,500 to the initial population.",
      "60,000": "This incorrectly adds 10,000 instead of 10,500 to the initial population."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl10_ch5_t3_qe10',
    type: 'mcq',
    question: "A company's profit was ₹5 lakhs in the first year and increased by ₹1.2 lakhs each year. What would be the profit in the 6th year?",
    options: [
      "₹11 lakhs",
      "₹10 lakhs",
      "₹12 lakhs",
      "₹11.2 lakhs"
    ],
    correctAnswer: "₹11 lakhs",
    explanation: "Profit in 6th year = 5 + (6-1) × 1.2 = 5 + 6 = ₹11 lakhs",
    wrongAnswerExplanations: {
      "₹10 lakhs": "This incorrectly adds only 4 increments instead of 5.",
      "₹12 lakhs": "This incorrectly adds 7 increments instead of 5.",
      "₹11.2 lakhs": "This incorrectly calculates by adding 6.2 instead of 6 to the initial profit."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch5_t3_qe11',
    type: 'mcq',
    question: "In a theater, tickets for the first row cost ₹500, for the second row ₹450, and each row behind costs ₹50 less than the row in front. How much would a ticket in the 8th row cost?",
    options: [
      "₹150",
      "₹200",
      "₹100",
      "₹250"
    ],
    correctAnswer: "₹150",
    explanation: "Cost of ticket in 8th row = 500 - (8-1) × 50 = 500 - 350 = ₹150",
    wrongAnswerExplanations: {
      "₹200": "This incorrectly subtracts 300 instead of 350 from the initial cost.",
      "₹100": "This incorrectly subtracts 400 instead of 350 from the initial cost.",
      "₹250": "This incorrectly subtracts 250 instead of 350 from the initial cost."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch5_t3_qe12',
    type: 'mcq',
    question: "A shopkeeper arranges products on shelves where the first shelf has 15 products, the second has 18, and each successive shelf has 3 more products than the previous one. How many products will be on the 9th shelf?",
    options: [
      "39 products",
      "42 products",
      "36 products",
      "45 products"
    ],
    correctAnswer: "39 products",
    explanation: "Products on 9th shelf = 15 + (9-1) × 3 = 15 + 24 = 39 products",
    wrongAnswerExplanations: {
      "42 products": "This incorrectly adds 27 products instead of 24 to the initial number.",
      "36 products": "This incorrectly adds 21 products instead of 24 to the initial number.",
      "45 products": "This incorrectly adds 30 products instead of 24 to the initial number."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch5_t3_qe13',
    type: 'mcq',
    question: "A construction project uses 80 bricks on the first day, 76 bricks on the second day, and 4 fewer bricks on each successive day. How many bricks will be used on the 10th day?",
    options: [
      "44 bricks",
      "40 bricks",
      "48 bricks",
      "36 bricks"
    ],
    correctAnswer: "44 bricks",
    explanation: "Bricks on 10th day = 80 - (10-1) × 4 = 80 - 36 = 44 bricks",
    wrongAnswerExplanations: {
      "40 bricks": "This incorrectly subtracts 40 instead of 36 from the initial number.",
      "48 bricks": "This incorrectly subtracts 32 instead of 36 from the initial number.",
      "36 bricks": "This incorrectly subtracts 44 instead of 36 from the initial number."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch5_t3_qe14',
    type: 'mcq',
    question: "A discount sale offers 5% off on the first day, 10% off on the second day, and increases by 5% each day. What will be the discount percentage on the 7th day?",
    options: [
      "35%",
      "40%",
      "30%",
      "45%"
    ],
    correctAnswer: "35%",
    explanation: "Discount on 7th day = 5 + (7-1) × 5 = 5 + 30 = 35%",
    wrongAnswerExplanations: {
      "40%": "This incorrectly adds 35% instead of 30% to the initial discount.",
      "30%": "This incorrectly adds 25% instead of 30% to the initial discount.",
      "45%": "This incorrectly adds 40% instead of 30% to the initial discount."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl10_ch5_t3_qe15',
    type: 'mcq',
    question: "A taxi charges ₹50 for the first kilometer and ₹12 for each additional kilometer. How much would a journey of 15 kilometers cost?",
    options: [
      "₹218",
      "₹230",
      "₹200",
      "₹242"
    ],
    correctAnswer: "₹218",
    explanation: "Cost = 50 + (15-1) × 12 = 50 + 168 = ₹218",
    wrongAnswerExplanations: {
      "₹230": "This incorrectly calculates as 50 + 15 × 12 instead of 50 + 14 × 12.",
      "₹200": "This incorrectly adds only 150 instead of 168 to the base fare.",
      "₹242": "This incorrectly adds 192 instead of 168 to the base fare."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch5_t3_qe16',
    type: 'mcq',
    question: "A student scores 85 marks in the first test, 88 marks in the second test, and continues with an increase of 3 marks in each successive test. What will the score be in the 8th test?",
    options: [
      "106 marks",
      "103 marks",
      "109 marks",
      "100 marks"
    ],
    correctAnswer: "106 marks",
    explanation: "Score in 8th test = 85 + (8-1) × 3 = 85 + 21 = 106 marks",
    wrongAnswerExplanations: {
      "103 marks": "This incorrectly adds 18 marks instead of 21 to the initial score.",
      "109 marks": "This incorrectly adds 24 marks instead of 21 to the initial score.",
      "100 marks": "This incorrectly adds 15 marks instead of 21 to the initial score."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch5_t3_qe17',
    type: 'mcq',
    question: "A farmer plants 50 trees in the first row, 54 trees in the second row, and each successive row has 4 more trees than the previous row. How many trees will be in the 12th row?",
    options: [
      "94 trees",
      "98 trees",
      "90 trees",
      "102 trees"
    ],
    correctAnswer: "94 trees",
    explanation: "Trees in 12th row = 50 + (12-1) × 4 = 50 + 44 = 94 trees",
    wrongAnswerExplanations: {
      "98 trees": "This incorrectly adds 48 trees instead of 44 to the initial number.",
      "90 trees": "This incorrectly adds 40 trees instead of 44 to the initial number.",
      "102 trees": "This incorrectly adds 52 trees instead of 44 to the initial number."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch5_t3_qe18',
    type: 'mcq',
    question: "A subscription service costs ₹300 in the first month and increases by ₹25 each month. How much will the subscription cost in the 24th month?",
    options: [
      "₹875",
      "₹900",
      "₹850",
      "₹825"
    ],
    correctAnswer: "₹875",
    explanation: "Cost in 24th month = 300 + (24-1) × 25 = 300 + 575 = ₹875",
    wrongAnswerExplanations: {
      "₹900": "This incorrectly adds 600 instead of 575 to the initial cost.",
      "₹850": "This incorrectly adds 550 instead of 575 to the initial cost.",
      "₹825": "This incorrectly adds 525 instead of 575 to the initial cost."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch5_t3_qe19',
    type: 'mcq',
    question: "A company's electricity bill was ₹5,000 in the first month and increased by ₹350 each month. What would be the bill in the 6th month?",
    options: [
      "₹6,750",
      "₹7,000",
      "₹6,500",
      "₹7,100"
    ],
    correctAnswer: "₹6,750",
    explanation: "Bill in 6th month = 5,000 + (6-1) × 350 = 5,000 + 1,750 = ₹6,750",
    wrongAnswerExplanations: {
      "₹7,000": "This incorrectly adds 2,000 instead of 1,750 to the initial bill.",
      "₹6,500": "This incorrectly adds 1,500 instead of 1,750 to the initial bill.",
      "₹7,100": "This incorrectly adds 2,100 instead of 1,750 to the initial bill."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch5_t3_qe20',
    type: 'mcq',
    question: "A fuel tank has 40 liters on day 1 and consumes 3 liters each day. How many liters will remain in the tank after 10 days?",
    options: [
      "10 liters",
      "13 liters",
      "7 liters",
      "9 liters"
    ],
    correctAnswer: "10 liters",
    explanation: "Fuel after 10 days = 40 - 10 × 3 = 40 - 30 = 10 liters",
    wrongAnswerExplanations: {
      "13 liters": "This incorrectly subtracts 27 liters instead of 30 from the initial amount.",
      "7 liters": "This incorrectly subtracts 33 liters instead of 30 from the initial amount.",
      "9 liters": "This incorrectly subtracts 31 liters instead of 30 from the initial amount."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  }
];
