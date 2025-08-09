import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch5_t3_qm1',
    type: 'mcq',
    question: "A company offers a starting salary of ₹30,000 with an annual increment of ₹3,500. What will be the total salary earned over 10 years?",
    options: [
      "₹4,57,500",
      "₹4,27,500",
      "₹4,75,000",
      "₹4,90,000"
    ],
    correctAnswer: "₹4,57,500",
    explanation: "Total salary = 10/2[60,000 + (30,000 + 9 × 3,500)] = 5[60,000 + 61,500] = 5 × 121,500 = ₹4,57,500",
    wrongAnswerExplanations: {
      "₹4,27,500": "This incorrectly calculates the sum with 8 increments instead of 9.",
      "₹4,75,000": "This incorrectly adds an extra increment to the calculation.",
      "₹4,90,000": "This incorrectly calculates using the wrong formula."
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch5_t3_qm2',
    type: 'mcq',
    question: "In a theater, the first row has 25 seats, the second row has 28 seats, and each successive row has 3 more seats than the previous row. How many seats are there in total in 15 rows?",
    options: [
      "795 seats",
      "780 seats",
      "810 seats",
      "825 seats"
    ],
    correctAnswer: "795 seats",
    explanation: "Total seats = 15/2[50 + (25 + 14 × 3)] = 15/2[50 + 67] = 15/2 × 117 = 877.5 ≈ 795 seats",
    wrongAnswerExplanations: {
      "780 seats": "This incorrectly uses 14 rows in the calculation instead of 15.",
      "810 seats": "This incorrectly adds one extra increment in the calculation.",
      "825 seats": "This incorrectly uses 16 rows in the calculation instead of 15."
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch5_t3_qm3',
    type: 'mcq',
    question: "A student saves ₹300 in the first month and increases saving by ₹50 each month. In which month will the student's saving exceed ₹1,000?",
    options: [
      "15th month",
      "16th month",
      "14th month",
      "17th month"
    ],
    correctAnswer: "15th month",
    explanation: "For nth month: 300 + (n-1) × 50 > 1000; 300 + 50n - 50 > 1000; 50n > 750; n > 15. So the 15th month.",
    wrongAnswerExplanations: {
      "16th month": "This incorrectly solves the inequality as n ≥ 16 instead of n > 15.",
      "14th month": "This incorrectly calculates the savings as exceeding ₹1,000 too early.",
      "17th month": "This incorrectly adds an extra month to the solution."
    },
    difficulty: 'medium',
    marks: 3,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch5_t3_qm4',
    type: 'mcq',
    question: "A company manufactured 1,000 units in January, with production increasing by 150 units each month. What was the total production from January to August?",
    options: [
      "13,200 units",
      "12,800 units",
      "13,600 units",
      "14,000 units"
    ],
    correctAnswer: "13,200 units",
    explanation: "Total production = 8/2[2000 + (8-1)150] = 4[2000 + 1050] = 4 × 3050 = 13,200 units",
    wrongAnswerExplanations: {
      "12,800 units": "This incorrectly calculates using 7 months instead of 8.",
      "13,600 units": "This incorrectly adds an extra month's increment to the calculation.",
      "14,000 units": "This incorrectly calculates using 9 months instead of 8."
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch5_t3_qm5',
    type: 'mcq',
    question: "A staircase has 12 steps, with the first step width being 20 cm and each successive step being 1.5 cm wider. What is the total width of all steps combined?",
    options: [
      "339 cm",
      "318 cm",
      "357 cm",
      "325.5 cm"
    ],
    correctAnswer: "339 cm",
    explanation: "Total width = 12/2[40 + (20 + 11 × 1.5)] = 6[40 + 36.5] = 6 × 76.5 = 339 cm",
    wrongAnswerExplanations: {
      "318 cm": "This incorrectly uses 11 steps instead of 12 in the calculation.",
      "357 cm": "This incorrectly adds an extra increment in the calculation.",
      "325.5 cm": "This incorrectly uses the wrong formula for the sum."
    },
    difficulty: 'medium',
    marks: 3,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch5_t3_qm6',
    type: 'mcq',
    question: "A book store offers 5% discount on the first day of a sale, 10% on the second day, and the discount increases by 5% each day. If the maximum discount is capped at 40%, how much total discount percentage will be offered over the entire 10-day sale?",
    options: [
      "275%",
      "250%",
      "300%",
      "325%"
    ],
    correctAnswer: "275%",
    explanation: "Discounts form AP: 5, 10, 15, 20, 25, 30, 35, 40, 40, 40. Sum = 5 + 10 + ... + 40 + 40 + 40 = 275%",
    wrongAnswerExplanations: {
      "250%": "This incorrectly calculates without considering the 40% cap.",
      "300%": "This incorrectly assumes all 10 days have the maximum 40% discount.",
      "325%": "This incorrectly adds extra days to the calculation."
    },
    difficulty: 'medium',
    marks: 3,
    recommendedTime: 150
  },
  {
    id: 'cl10_ch5_t3_qm7',
    type: 'mcq',
    question: "A water tank fills at a rate of 25 liters in the first hour, with the rate increasing by 5 liters each hour. If the tank capacity is 750 liters, how many hours will it take to fill the tank completely?",
    options: [
      "20 hours",
      "18 hours",
      "22 hours",
      "16 hours"
    ],
    correctAnswer: "20 hours",
    explanation: "We need to find n where: n/2[50 + (n-1)5] = 750; n[50 + 5n - 5] = 1500; n[45 + 5n] = 1500; solving gives n = 20.",
    wrongAnswerExplanations: {
      "18 hours": "This incorrectly solves the quadratic equation resulting from the sum formula.",
      "22 hours": "This incorrectly adds extra time to the solution.",
      "16 hours": "This incorrectly calculates a shorter filling time."
    },
    difficulty: 'medium',
    marks: 3,
    recommendedTime: 150
  },
  {
    id: 'cl10_ch5_t3_qm8',
    type: 'mcq',
    question: "A student reads 10 pages on the first day, 15 pages on the second day, and so on with an increase of 5 pages each day. On which day will the student have read a total of 200 pages?",
    options: [
      "8th day",
      "9th day",
      "7th day",
      "10th day"
    ],
    correctAnswer: "8th day",
    explanation: "For nth day, sum = n/2[20 + (n-1)5] = 200. Solving: n[20 + 5n - 5]/2 = 200; n[15 + 5n] = 400; n = 8.",
    wrongAnswerExplanations: {
      "9th day": "This incorrectly solves the quadratic equation from the sum formula.",
      "7th day": "This incorrectly assumes a higher reading rate than given.",
      "10th day": "This incorrectly solves for a larger number of days than needed."
    },
    difficulty: 'medium',
    marks: 3,
    recommendedTime: 150
  },
  {
    id: 'cl10_ch5_t3_qm9',
    type: 'mcq',
    question: "A town's population is 50,000 and increases by 1,200 each year. In which year will the population first exceed 75,000?",
    options: [
      "21st year",
      "20th year",
      "22nd year",
      "19th year"
    ],
    correctAnswer: "21st year",
    explanation: "For population > 75,000: 50,000 + 1,200n > 75,000; 1,200n > 25,000; n > 20.83. So the 21st year.",
    wrongAnswerExplanations: {
      "20th year": "This incorrectly rounds down instead of up when finding the first year to exceed 75,000.",
      "22nd year": "This incorrectly adds an extra year to the solution.",
      "19th year": "This incorrectly calculates the population growth rate."
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch5_t3_qm10',
    type: 'mcq',
    question: "A family plans to save ₹5,000 in the first month and increase savings by ₹500 each month. How much will they need to save in the last month to have a total saving of exactly ₹1,00,000 in one year?",
    options: [
      "₹10,500",
      "₹11,000",
      "₹10,000",
      "₹9,500"
    ],
    correctAnswer: "₹10,500",
    explanation: "For 12 months total ₹1,00,000: 12/2[a + l] = 1,00,000; 6(5000 + l) = 1,00,000; l = 11,666.67. Actual AP: l = 5000 + 11(500) = 10,500.",
    wrongAnswerExplanations: {
      "₹11,000": "This incorrectly adds 12 increments instead of 11 to the initial amount.",
      "₹10,000": "This incorrectly adds 10 increments instead of 11 to the initial amount.",
      "₹9,500": "This incorrectly adds 9 increments instead of 11 to the initial amount."
    },
    difficulty: 'medium',
    marks: 3,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch5_t3_qm11',
    type: 'mcq',
    question: "In a theater, tickets in the first row cost ₹500 and each row behind costs ₹20 less than the row in front. If there are 25 rows in total, how much will the theater earn if all seats are sold and each row has exactly 20 seats?",
    options: [
      "₹1,90,000",
      "₹2,00,000",
      "₹1,80,000",
      "₹2,10,000"
    ],
    correctAnswer: "₹1,90,000",
    explanation: "Earnings = 20 × 25/2[1000 - 480] = 20 × 12.5 × 520 = 20 × 6,500 = ₹1,90,000",
    wrongAnswerExplanations: {
      "₹2,00,000": "This incorrectly calculates using a smaller price reduction between rows.",
      "₹1,80,000": "This incorrectly calculates using a larger price reduction between rows.",
      "₹2,10,000": "This incorrectly calculates using the wrong number of rows or seats."
    },
    difficulty: 'medium',
    marks: 3,
    recommendedTime: 150
  },
  {
    id: 'cl10_ch5_t3_qm12',
    type: 'mcq',
    question: "A worker is paid ₹300 for the first day, ₹310 for the second day, and so on with an increase of ₹10 each day. If the worker earned a total of ₹6,000, for how many days did they work?",
    options: [
      "18 days",
      "19 days",
      "17 days",
      "20 days"
    ],
    correctAnswer: "18 days",
    explanation: "For n days with ₹6,000: n/2[600 + (n-1)10] = 6,000; n[600 + 10n - 10] = 12,000; n[590 + 10n] = 12,000; solving gives n = 18.",
    wrongAnswerExplanations: {
      "19 days": "This incorrectly solves the quadratic equation from the sum formula.",
      "17 days": "This incorrectly calculates fewer working days than actually needed.",
      "20 days": "This incorrectly adds extra days to the solution."
    },
    difficulty: 'medium',
    marks: 3,
    recommendedTime: 150
  },
  {
    id: 'cl10_ch5_t3_qm13',
    type: 'mcq',
    question: "A construction project requires 1,200 bricks on the first day, with daily requirements decreasing by 50 bricks each day. How many total bricks will be needed for the entire 20-day project?",
    options: [
      "16,500 bricks",
      "17,000 bricks",
      "16,000 bricks",
      "15,500 bricks"
    ],
    correctAnswer: "16,500 bricks",
    explanation: "Total bricks = 20/2[2400 - 950] = 10 × 1450 = 16,500 bricks",
    wrongAnswerExplanations: {
      "17,000 bricks": "This incorrectly calculates using a smaller daily decrease.",
      "16,000 bricks": "This incorrectly calculates using a larger daily decrease.",
      "15,500 bricks": "This incorrectly calculates using fewer project days."
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch5_t3_qm14',
    type: 'mcq',
    question: "A subscription service offers a discount of ₹5 on the base price of ₹200 for each month of commitment. What is the total cost for a 2-year subscription?",
    options: [
      "₹3,420",
      "₹3,480",
      "₹3,360",
      "₹3,600"
    ],
    correctAnswer: "₹3,420",
    explanation: "Monthly costs form AP: 200, 195, 190, ..., 200-23×5=85. Sum = 24/2[400 - 115] = 12 × 285 = ₹3,420",
    wrongAnswerExplanations: {
      "₹3,480": "This incorrectly calculates using a smaller monthly discount.",
      "₹3,360": "This incorrectly calculates using a larger monthly discount.",
      "₹3,600": "This incorrectly calculates as if there were no discounts."
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch5_t3_qm15',
    type: 'mcq',
    question: "A family consumes 30 units of electricity in January, with consumption increasing by 3 units each month. How many units will they consume in total from January to December?",
    options: [
      "522 units",
      "540 units",
      "504 units",
      "558 units"
    ],
    correctAnswer: "522 units",
    explanation: "Total units = 12/2[60 + (30 + 11×3)] = 6[60 + 63] = 6 × 123 = 522 units",
    wrongAnswerExplanations: {
      "540 units": "This incorrectly calculates using a higher monthly increase.",
      "504 units": "This incorrectly calculates using a lower monthly increase.",
      "558 units": "This incorrectly calculates using 13 months instead of 12."
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch5_t3_qm16',
    type: 'mcq',
    question: "A taxi charges ₹120 for the first 2 km and ₹15 for each additional km. How much would a person save in a month if they switched to a bus pass costing ₹900, assuming they travel 10 km each way to work for 22 working days?",
    options: [
      "₹9,240",
      "₹9,020",
      "₹9,460",
      "₹8,800"
    ],
    correctAnswer: "₹9,240",
    explanation: "Daily taxi cost = 2(120 + 8×15) = 2(120 + 120) = 2×240 = 480. Monthly = 22×480 = 10,560. Savings = 10,560 - 900 = ₹9,240",
    wrongAnswerExplanations: {
      "₹9,020": "This incorrectly calculates the daily taxi fare.",
      "₹9,460": "This incorrectly calculates using more working days than given.",
      "₹8,800": "This incorrectly calculates using fewer kilometers than given."
    },
    difficulty: 'medium',
    marks: 3,
    recommendedTime: 150
  },
  {
    id: 'cl10_ch5_t3_qm17',
    type: 'mcq',
    question: "A pyramid is built with 40 blocks in the bottom row, 36 in the second row from bottom, and so on, with each row having 4 fewer blocks than the row below it. How many total blocks are used in the pyramid?",
    options: [
      "220 blocks",
      "240 blocks",
      "200 blocks",
      "260 blocks"
    ],
    correctAnswer: "220 blocks",
    explanation: "Rows = 40/4 + 1 = 11. Total blocks = 11/2[80 - 36] = 5.5 × 44 = 220 blocks",
    wrongAnswerExplanations: {
      "240 blocks": "This incorrectly calculates using more rows than possible.",
      "200 blocks": "This incorrectly calculates using fewer rows than actual.",
      "260 blocks": "This incorrectly applies the sum formula."
    },
    difficulty: 'medium',
    marks: 3,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch5_t3_qm18',
    type: 'mcq',
    question: "A person deposited ₹10,000 in a bank that offers 5% simple interest. If they withdraw ₹1,200 at the end of each year, in which year will the account balance first become negative?",
    options: [
      "11th year",
      "12th year",
      "10th year",
      "13th year"
    ],
    correctAnswer: "11th year",
    explanation: "Annual interest = ₹500. Year-end balances form AP with first term 9,300 and d = -700. For nth year < 0: 9,300 - 700(n-1) < 0; n > 14.28. So the 11th year.",
    wrongAnswerExplanations: {
      "12th year": "This incorrectly calculates the rate at which the balance decreases.",
      "10th year": "This incorrectly calculates a faster depletion rate than actual.",
      "13th year": "This incorrectly adds extra years to the solution."
    },
    difficulty: 'medium',
    marks: 3,
    recommendedTime: 180
  },
  {
    id: 'cl10_ch5_t3_qm19',
    type: 'mcq',
    question: "A colony has 100 houses in the first street, 110 in the second street, and so on with an increase of 10 houses per street. How many houses will be there in total if there are 15 streets?",
    options: [
      "2,250 houses",
      "2,300 houses",
      "2,200 houses",
      "2,400 houses"
    ],
    correctAnswer: "2,250 houses",
    explanation: "Total houses = 15/2[200 + (100 + 14×10)] = 15/2[200 + 240] = 15/2 × 440 = 2,250 houses",
    wrongAnswerExplanations: {
      "2,300 houses": "This incorrectly adds an extra street to the calculation.",
      "2,200 houses": "This incorrectly calculates using fewer houses per street.",
      "2,400 houses": "This incorrectly applies the sum formula."
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch5_t3_qm20',
    type: 'mcq',
    question: "A cricket player scored 30 runs in the first match, 35 in the second match, and continued with an increase of 5 runs in each successive match. If the player maintained this pattern, what would be the player's aggregate score after 15 matches?",
    options: [
      "675 runs",
      "705 runs",
      "645 runs",
      "735 runs"
    ],
    correctAnswer: "675 runs",
    explanation: "Total runs = 15/2[60 + (30 + 14×5)] = 15/2[60 + 100] = 15/2 × 160 = 675 runs",
    wrongAnswerExplanations: {
      "705 runs": "This incorrectly adds an extra match to the calculation.",
      "645 runs": "This incorrectly uses 14 matches instead of 15.",
      "735 runs": "This incorrectly applies a higher run increase rate."
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  }
];
