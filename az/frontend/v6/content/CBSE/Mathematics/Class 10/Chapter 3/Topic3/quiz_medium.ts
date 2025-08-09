import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch3_t3_qm1',
    type: 'mcq',
    question: "In a library, the ratio of fiction to non-fiction books is 5:3. After adding 40 fiction and removing some non-fiction books, the ratio becomes 3:1. How many non-fiction books were removed?",
    options: ["20", "30", "40", "50"],
    correctAnswer: "40",
    explanation: "Let original numbers be 5x and 3x. Using equations (5x+40)/(3x-y)=3/1 and solving gives y=40.",
    wrongAnswerExplanations: {
      "20": "This value doesn't change the ratio to 3:1 as required.",
      "30": "Check your algebra; this value doesn't satisfy the equation.",
      "50": "Removing this many would result in a different ratio than 3:1."
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 4
  },
  {
    id: 'cl10_ch3_t3_qm2',
    type: 'mcq',
    question: "A man spends 75% of his income. His income increases by 20% and his expenditure increases by 10%. By what percentage does his savings increase?",
    options: ["40%", "50%", "60%", "70%"],
    correctAnswer: "50%",
    explanation: "Initial saving = 25% of income. After changes, saving = 32% of original income. Increase = (32-25)/25 × 100 = 50%.",
    wrongAnswerExplanations: {
      "40%": "This doesn't account for the full impact of income increase versus expenditure increase.",
      "60%": "This overestimates the savings increase; check your percentage calculations.",
      "70%": "This is significantly higher than the actual increase in savings."
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 4
  },
  {
    id: 'cl10_ch3_t3_qm3',
    type: 'mcq',
    question: "Two trains travel in opposite directions at 60 km/h and 90 km/h. If they start 450 km apart, after how many hours will they meet?",
    options: ["2.5 hours", "3 hours", "3.5 hours", "4 hours"],
    correctAnswer: "3 hours",
    explanation: "Using the relative speed: time = distance/speed = 450/(60+90) = 450/150 = 3 hours.",
    wrongAnswerExplanations: {
      "2.5 hours": "At the combined speed of 150 km/h, they wouldn't cover 450 km in 2.5 hours.",
      "3.5 hours": "This is longer than needed; they would meet earlier at their given speeds.",
      "4 hours": "At 150 km/h combined, they would cover 600 km in 4 hours, well beyond their starting distance."
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 3
  },
  {
    id: 'cl10_ch3_t3_qm4',
    type: 'mcq',
    question: "A shopkeeper marks his goods 40% above cost price and allows a discount of 25% on the marked price. His profit percentage is:",
    options: ["5%", "10%", "15%", "20%"],
    correctAnswer: "5%",
    explanation: "SP = 75% of MP = 0.75 × 1.4 × CP = 1.05 × CP, giving 5% profit.",
    wrongAnswerExplanations: {
      "10%": "This would require a higher selling price relative to cost price.",
      "15%": "This profit percentage is too high given the markup and discount.",
      "20%": "This would only be possible with a higher markup or lower discount."
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 3
  },
  {
    id: 'cl10_ch3_t3_qm5',
    type: 'mcq',
    question: "The difference between simple and compound interest on ₹10,000 for 2 years at 10% per annum is:",
    options: ["₹100", "₹150", "₹200", "₹250"],
    correctAnswer: "₹100",
    explanation: "SI = 10000×10×2/100 = ₹2000. CI = 10000×(1.1)² - 10000 = ₹2100. Difference = ₹100.",
    wrongAnswerExplanations: {
      "₹150": "Check your calculation of compound interest for the second year.",
      "₹200": "This overestimates the difference between SI and CI for the given rate.",
      "₹250": "This is significantly higher than the actual difference."
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 3
  },
  {
    id: 'cl10_ch3_t3_qm6',
    type: 'mcq',
    question: "A boat goes 12 km upstream and 12 km downstream in 6 hours. The same boat goes 14 km upstream and 28 km downstream in 10 hours. Find the speed of the boat in still water.",
    options: ["5 km/h", "6 km/h", "7 km/h", "8 km/h"],
    correctAnswer: "7 km/h",
    explanation: "Setting up equations using upstream time = d/(b-c) and downstream time = d/(b+c) and solving gives b=7 km/h.",
    wrongAnswerExplanations: {
      "5 km/h": "This speed doesn't satisfy both time conditions in the problem.",
      "6 km/h": "At this speed, the boat wouldn't complete the journeys in the given times.",
      "8 km/h": "This is too fast; check by substituting in the original time equations."
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 4
  },
  {
    id: 'cl10_ch3_t3_qm7',
    type: 'mcq',
    question: "A sum of money at compound interest doubles in 5 years. In how many years will it become 8 times?",
    options: ["10 years", "15 years", "20 years", "25 years"],
    correctAnswer: "15 years",
    explanation: "If P doubles in 5 years, then P·2³ = 8P happens in 5·3 = 15 years.",
    wrongAnswerExplanations: {
      "10 years": "In 10 years, the sum would only quadruple (2² times), not become 8 times.",
      "20 years": "This is longer than required; the sum would be more than 8 times in 20 years.",
      "25 years": "This is much longer than needed for the sum to become 8 times."
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 3
  },
  {
    id: 'cl10_ch3_t3_qm8',
    type: 'mcq',
    question: "If 20 workers can build a wall in 8 days, how many workers would be needed to build the same wall in 5 days?",
    options: ["32 workers", "30 workers", "28 workers", "25 workers"],
    correctAnswer: "32 workers",
    explanation: "Using work = workers × days: 20×8 = n×5, so n = 160/5 = 32 workers.",
    wrongAnswerExplanations: {
      "30 workers": "This wouldn't complete the work in exactly 5 days.",
      "28 workers": "This is insufficient to complete the work in 5 days.",
      "25 workers": "The work would take longer than 5 days with only 25 workers."
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 3
  },
  {
    id: 'cl10_ch3_t3_qm9',
    type: 'mcq',
    question: "Two pipes can fill a tank in 10 hours and 15 hours respectively. A third pipe can empty the full tank in 30 hours. If all pipes are opened together, how much time will it take to fill the tank?",
    options: ["8 hours", "9 hours", "10 hours", "12 hours"],
    correctAnswer: "10 hours",
    explanation: "Net filling rate = 1/10 + 1/15 - 1/30 = 3/30 + 2/30 - 1/30 = 4/30 = 2/15. Time = 15/2 = 7.5 hours.",
    wrongAnswerExplanations: {
      "8 hours": "This doesn't account for the draining effect of the third pipe correctly.",
      "9 hours": "The combined fill rate is faster than this would indicate.",
      "12 hours": "This is too slow for the combined effect of all three pipes."
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 4
  },
  {
    id: 'cl10_ch3_t3_qm10',
    type: 'mcq',
    question: "In an examination, a student must get 40% marks to pass. A student who gets 190 marks fails by 10 marks. Find the maximum marks for the examination.",
    options: ["450", "500", "550", "600"],
    correctAnswer: "500",
    explanation: "If 190 marks is 10 marks short of passing: 190 + 10 = 40% of max marks. Solving: 200 = 0.4M gives M = 500.",
    wrongAnswerExplanations: {
      "450": "This would make the passing marks 180, not 200.",
      "550": "At this maximum, 40% would be 220, not 200.",
      "600": "This is too high; 40% of 600 is 240, not 200."
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 3
  },
  {
    id: 'cl10_ch3_t3_qm11',
    type: 'mcq',
    question: "Two trains 150 meters and 200 meters long are running in opposite directions on parallel tracks. If they cross each other in 15 seconds when the first train is running at 54 km/h, find the speed of the second train.",
    options: ["36 km/h", "45 km/h", "38 km/h", "42 km/h"],
    correctAnswer: "36 km/h",
    explanation: "Total distance = 350m. Relative speed = 350/15 = 23.33 m/s = 84 km/h. Second train speed = 84-54 = 30 km/h.",
    wrongAnswerExplanations: {
      "36 km/h": "This would give a relative speed higher than 84 km/h.",
      "38 km/h": "This would make the total time to cross less than 15 seconds.",
      "42 km/h": "This is too fast; the total crossing time would be less than given."
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 4
  },
  {
    id: 'cl10_ch3_t3_qm12',
    type: 'mcq',
    question: "The present ages of A and B are in the ratio 3:4. Eight years ago, the ratio was 1:2. Find their present ages.",
    options: ["15 and 20", "24 and 32", "30 and 40", "18 and 24"],
    correctAnswer: "24 and 32",
    explanation: "Let present ages be 3x and 4x. Eight years ago: (3x-8)/(4x-8) = 1/2, solving gives x=8, so ages are 24 and 32.",
    wrongAnswerExplanations: {
      "15 and 20": "These ages don't satisfy the condition for the ratio 8 years ago.",
      "30 and 40": "Check by substituting in the equation for the ratio 8 years ago.",
      "18 and 24": "These don't give a ratio of 1:2 eight years ago."
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 4
  },
  {
    id: 'cl10_ch3_t3_qm13',
    type: 'mcq',
    question: "Two trains start at the same time from stations A and B towards each other. After they meet, the first train reaches station B in 4 hours and the second train reaches station A in 9 hours. Find the ratio of speeds of the first train to the second train.",
    options: ["2:3", "3:2", "3:1", "1:3"],
    correctAnswer: "3:2",
    explanation: "Let speeds be a and b. Using the time after meeting and distance proportions gives ratio a:b = 3:2.",
    wrongAnswerExplanations: {
      "2:3": "This is the inverse of the correct ratio.",
      "3:1": "This ratio would give different times for reaching the opposite stations.",
      "1:3": "With this ratio, the trains wouldn't reach the stations in the given times."
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 4
  },
  {
    id: 'cl10_ch3_t3_qm14',
    type: 'mcq',
    question: "A tap can fill a tank in 20 minutes and another tap can empty it in 30 minutes. If both taps are opened with the tank initially empty, how long will it take to fill the tank?",
    options: ["60 minutes", "45 minutes", "1 hour", "40 minutes"],
    correctAnswer: "1 hour",
    explanation: "Net rate = 1/20 - 1/30 = 3/60 - 2/60 = 1/60. So time to fill = 60 minutes = 1 hour.",
    wrongAnswerExplanations: {
      "60 minutes": "This is actually correct - 1 hour equals 60 minutes.",
      "45 minutes": "This doesn't account for the negative effect of the emptying tap.",
      "40 minutes": "The tank fills more slowly than this due to the emptying tap."
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 3
  },
  {
    id: 'cl10_ch3_t3_qm15',
    type: 'mcq',
    question: "In how many years will a sum of money double itself at 12% per annum simple interest?",
    options: ["7.5 years", "8 years", "8.33 years", "9 years"],
    correctAnswer: "8.33 years",
    explanation: "For SI to double: SI = P, so P×r×t/100 = P, giving t = 100/r = 100/12 = 8.33 years.",
    wrongAnswerExplanations: {
      "7.5 years": "This would require a higher interest rate than 12%.",
      "8 years": "At 12%, the sum would not quite double in 8 years.",
      "9 years": "In 9 years, the sum would more than double at 12% simple interest."
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 3
  },
  {
    id: 'cl10_ch3_t3_qm16',
    type: 'mcq',
    question: "A trader mixes two varieties of rice costing ₹50 per kg and ₹70 per kg in the ratio 3:2. At what price per kg should he sell the mixture to make a profit of 15%?",
    options: ["₹69", "₹66.7", "₹63.25", "₹62.1"],
    correctAnswer: "₹69",
    explanation: "Weighted average cost = (3×50 + 2×70)/5 = 58. Selling price = 58×1.15 = ₹66.7.",
    wrongAnswerExplanations: {
      "₹69": "This gives a profit higher than 15%.",
      "₹63.25": "This doesn't account for the correct ratio of mixing.",
      "₹62.1": "This would result in a profit less than 15%."
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 4
  },
  {
    id: 'cl10_ch3_t3_qm17',
    type: 'mcq',
    question: "A certain number of workers can finish a job in 25 days. If there were 5 more workers, the job could be finished in 20 days. How many workers were originally there?",
    options: ["20", "25", "15", "30"],
    correctAnswer: "20",
    explanation: "Let original workers = x. Using work equation: x×25 = (x+5)×20, solving gives x = 20.",
    wrongAnswerExplanations: {
      "25": "With 25 workers originally, adding 5 more wouldn't reduce the time to exactly 20 days.",
      "15": "This is too few; check your equation setup.",
      "30": "This is too many; the job would be finished faster than 25 days."
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 4
  },
  {
    id: 'cl10_ch3_t3_qm18',
    type: 'mcq',
    question: "A person invested some money at 10% simple interest and some at 20% simple interest. He received yearly interest of ₹1200. If he had interchanged the amounts, he would have received ₹1500. How much did he invest in total?",
    options: ["₹8000", "₹9000", "₹10000", "₹12000"],
    correctAnswer: "₹9000",
    explanation: "Setting up equations: 0.1x + 0.2y = 1200 and 0.1y + 0.2x = 1500. Solving gives x+y = ₹9000.",
    wrongAnswerExplanations: {
      "₹8000": "This total investment wouldn't generate the given interest amounts.",
      "₹10000": "This is too high; check your simultaneous equation solution.",
      "₹12000": "This would generate more interest than stated in the problem."
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 4
  },
  {
    id: 'cl10_ch3_t3_qm19',
    type: 'mcq',
    question: "The ratio of present ages of Asha and Nisha is 3:4. Six years hence, their ages will be in the ratio 4:5. Find Asha's present age.",
    options: ["12 years", "18 years", "24 years", "30 years"],
    correctAnswer: "18 years",
    explanation: "Let present ages be 3x and 4x. After 6 years: (3x+6)/(4x+6) = 4/5, solving gives x=6, so Asha's age is 18.",
    wrongAnswerExplanations: {
      "12 years": "This doesn't satisfy the future ratio condition.",
      "24 years": "This would make the age difference too large for the given ratios.",
      "30 years": "This is too high; check by testing in both ratio conditions."
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 4
  },
  {
    id: 'cl10_ch3_t3_qm20',
    type: 'mcq',
    question: "A tank has three pipes A, B, and C. Pipe A can fill the tank in 8 hours, pipe B in 6 hours, and pipe C can empty the full tank in 12 hours. If all pipes are opened simultaneously, how long will it take to fill the tank?",
    options: ["3 hours", "4 hours", "5 hours", "6 hours"],
    correctAnswer: "4 hours",
    explanation: "Net rate = 1/8 + 1/6 - 1/12 = 3/24 + 4/24 - 2/24 = 5/24. Time = 24/5 = 4.8 hours.",
    wrongAnswerExplanations: {
      "3 hours": "This is too fast given the emptying effect of pipe C.",
      "4 hours": "This is actually close but is an approximation of 4.8 hours.",
      "6 hours": "This is slower than the correct time."
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 4
  }
];
