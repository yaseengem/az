import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch3_t3_qe1',
    type: 'mcq',
    question: "In a mixture of milk and water, the ratio of milk to water is 3:2. If 5 liters of water is added, the ratio becomes 3:5. How much milk is in the original mixture?",
    options: ["9 liters", "6 liters", "12 liters", "15 liters"],
    correctAnswer: "9 liters",
    explanation: "Using linear equations and ratio concept, we can find that the original mixture had 9 liters of milk.",
    wrongAnswerExplanations: {
      "6 liters": "This doesn't result in the changed ratio of 3:5 after adding 5 liters of water.",
      "12 liters": "This is too high; check your calculations for the original mixture.",
      "15 liters": "This value will give a different ratio when 5 liters of water is added."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 2
  },
  {
    id: 'cl10_ch3_t3_qe2',
    type: 'mcq',
    question: "Ravi's age is three times Sohan's age. Ten years ago, Ravi was five times as old as Sohan. Find their present ages.",
    options: ["30 and 10 years", "40 and 20 years", "45 and 15 years", "60 and 20 years"],
    correctAnswer: "30 and 10 years",
    explanation: "Setting up equations where R = 3S and R-10 = 5(S-10) leads to S=10 and R=30 years.",
    wrongAnswerExplanations: {
      "40 and 20 years": "These values don't satisfy the condition that ten years ago, Ravi was five times Sohan's age.",
      "45 and 15 years": "Check by substituting in the original conditions to verify these don't work.",
      "60 and 20 years": "These ages don't satisfy the first condition that Ravi's age is three times Sohan's."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 2
  },
  {
    id: 'cl10_ch3_t3_qe3',
    type: 'mcq',
    question: "A boat goes 30 km upstream and 44 km downstream in 10 hours. It can go 40 km upstream and 55 km downstream in 13 hours. Find the speed of the boat in still water.",
    options: ["8 km/hr", "9 km/hr", "10 km/hr", "12 km/hr"],
    correctAnswer: "8 km/hr",
    explanation: "By setting up equations with boat speed (b) and stream speed (s), solving gives b=8 km/hr.",
    wrongAnswerExplanations: {
      "9 km/hr": "This value doesn't satisfy both the time conditions given in the problem.",
      "10 km/hr": "Substituting this in the equations results in inconsistent stream speeds.",
      "12 km/hr": "This is too high; the boat would cover much more distance in the given time."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 2
  },
  {
    id: 'cl10_ch3_t3_qe4',
    type: 'mcq',
    question: "If 4 men or 6 women can finish a work in 24 days, how many days will it take if 6 men and 8 women work together?",
    options: ["8 days", "9 days", "10 days", "12 days"],
    correctAnswer: "8 days",
    explanation: "Using work equations, 1 man = 1/96 work/day and 1 woman = 1/144 work/day. Total work rate gives 8 days.",
    wrongAnswerExplanations: {
      "9 days": "This doesn't account for the correct work rates of men and women combined.",
      "10 days": "The combined workforce completes the job faster than this.",
      "12 days": "This is too long given the increased workforce."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 2
  },
  {
    id: 'cl10_ch3_t3_qe5',
    type: 'mcq',
    question: "A shopkeeper sells two items at ₹1200 each. On one he gains 20% and on the other he loses 20%. His overall gain/loss percentage is:",
    options: ["No profit, no loss", "4% loss", "4% profit", "8% loss"],
    correctAnswer: "4% loss",
    explanation: "Selling price is same but cost prices differ. Using equations, the net result is a 4% loss.",
    wrongAnswerExplanations: {
      "No profit, no loss": "Equal percentage gain and loss on equal selling prices doesn't balance out.",
      "4% profit": "The loss percentage actually outweighs the gain percentage.",
      "8% loss": "The loss is not this high; check your percentage calculation."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 2
  },
  {
    id: 'cl10_ch3_t3_qe6',
    type: 'mcq',
    question: "In a two-digit number, the digit in the tens place is twice the digit in the units place. If the digits are reversed, the new number is 27 less than the original number. Find the original number.",
    options: ["63", "84", "42", "64"],
    correctAnswer: "63",
    explanation: "If x is units digit, then 10(2x) + x = 21x is original number. Solving with reversed number gives x=3.",
    wrongAnswerExplanations: {
      "84": "When digits are reversed, the difference isn't 27.",
      "42": "The tens digit isn't twice the units digit here.",
      "64": "This doesn't satisfy the condition that the reversed number is 27 less."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 2
  },
  {
    id: 'cl10_ch3_t3_qe7',
    type: 'mcq',
    question: "The sum of ages of a father and his son is 45 years. Five years ago, the product of their ages was 124. Find the present age of the father.",
    options: ["29 years", "36 years", "25 years", "40 years"],
    correctAnswer: "36 years",
    explanation: "Setting up equations with f+s=45 and (f-5)(s-5)=124 and solving gives father's age as 36 years.",
    wrongAnswerExplanations: {
      "29 years": "This doesn't satisfy both equations when substituted.",
      "25 years": "With this age, the father would have been too young when the son was born.",
      "40 years": "This value doesn't match when checking with the product of ages 5 years ago."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 2
  },
  {
    id: 'cl10_ch3_t3_qe8',
    type: 'mcq',
    question: "A train travels 360 km at a uniform speed. If the speed is increased by 5 km/h, the journey would take 1 hour less. Find the original speed of the train.",
    options: ["40 km/h", "45 km/h", "50 km/h", "55 km/h"],
    correctAnswer: "45 km/h",
    explanation: "Using t = d/s and the condition that increasing speed by 5 km/h saves 1 hour gives speed = 45 km/h.",
    wrongAnswerExplanations: {
      "40 km/h": "At this speed, increasing by 5 km/h wouldn't save exactly 1 hour.",
      "50 km/h": "This speed is too high; check your equation setup.",
      "55 km/h": "This doesn't satisfy the time reduction condition when speed increases by 5 km/h."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 2
  },
  {
    id: 'cl10_ch3_t3_qe9',
    type: 'mcq',
    question: "A sum of ₹10,000 is invested partly at 8% and partly at 10% per annum simple interest. The total interest earned after 2 years is ₹1,840. How much was invested at 8%?",
    options: ["₹6,000", "₹4,000", "₹5,000", "₹7,000"],
    correctAnswer: "₹4,000",
    explanation: "Setting up the equation: 0.08(2)x + 0.10(2)(10000-x) = 1840 and solving gives x = ₹4,000.",
    wrongAnswerExplanations: {
      "₹6,000": "This investment split would yield more than ₹1,840 in interest.",
      "₹5,000": "With this amount at 8%, the total interest would be different.",
      "₹7,000": "This would result in less interest than ₹1,840."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 2
  },
  {
    id: 'cl10_ch3_t3_qe10',
    type: 'mcq',
    question: "The ages of two friends Ani and Biju differ by 3 years. Ani's father Dhamu is twice as old as Ani and Biju is twice as old as his sister Sita. If Sita's age is 7 years, find the age of Dhamu.",
    options: ["34 years", "36 years", "38 years", "40 years"],
    correctAnswer: "34 years",
    explanation: "Sita is 7, so Biju is 14. If Ani is x, then x-Biju=±3. Only x=17 works with Dhamu=2x=34.",
    wrongAnswerExplanations: {
      "36 years": "This doesn't align with the age relationships described in the problem.",
      "38 years": "Check your calculations for the age difference between Ani and Biju.",
      "40 years": "This would make Ani too old relative to Biju and Sita."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 2
  },
  {
    id: 'cl10_ch3_t3_qe11',
    type: 'mcq',
    question: "A dealer bought a washing machine for ₹15,600. At what price should he sell it to make a profit of 12%?",
    options: ["₹17,472", "₹17,000", "₹18,000", "₹16,500"],
    correctAnswer: "₹17,472",
    explanation: "Selling price = Cost price × (1 + profit%) = 15600 × 1.12 = ₹17,472.",
    wrongAnswerExplanations: {
      "₹17,000": "This gives less than 12% profit on the cost price.",
      "₹18,000": "This would yield more than 12% profit.",
      "₹16,500": "This price doesn't represent exactly 12% profit."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 2
  },
  {
    id: 'cl10_ch3_t3_qe12',
    type: 'mcq',
    question: "A rectangular field has area 528 m². If the length is increased by 10% and breadth is decreased by 10%, the new area will be:",
    options: ["528 m²", "475.2 m²", "580.8 m²", "500 m²"],
    correctAnswer: "528 m²",
    explanation: "New area = (1.1L)×(0.9B) = 0.99LB = 0.99×528 = 522.72 m².",
    wrongAnswerExplanations: {
      "528 m²": "The area actually changes because length increases and breadth decreases.",
      "580.8 m²": "This would happen if both dimensions increased by 10%.",
      "500 m²": "This is an approximation but not the exact result."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 2
  },
  {
    id: 'cl10_ch3_t3_qe13',
    type: 'mcq',
    question: "A boat covers a distance of 24 km upstream in 6 hours. If the speed of the stream is 2 km/hr, what is the speed of the boat in still water?",
    options: ["6 km/hr", "8 km/hr", "4 km/hr", "10 km/hr"],
    correctAnswer: "6 km/hr",
    explanation: "Upstream speed = boat speed - stream speed = 4 km/hr. So boat speed = 4 + 2 = 6 km/hr.",
    wrongAnswerExplanations: {
      "8 km/hr": "This would result in an upstream speed of 6 km/hr, not 4 km/hr.",
      "4 km/hr": "This would make upstream speed 2 km/hr, too slow to cover the distance in 6 hours.",
      "10 km/hr": "This is too high; check the relationship between boat speed and upstream speed."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 2
  },
  {
    id: 'cl10_ch3_t3_qe14',
    type: 'mcq',
    question: "A cylindrical tank of radius 7 m and height 2 m is filled with water. How many liters of water does it contain?",
    options: ["307.72 liters", "30772 liters", "3077.2 liters", "307720 liters"],
    correctAnswer: "307720 liters",
    explanation: "Volume = πr²h = 3.14×7²×2 = 307.72 m³ = 307720 liters (1 m³ = 1000 liters).",
    wrongAnswerExplanations: {
      "307.72 liters": "This is the volume in cubic meters, not liters.",
      "30772 liters": "Check your conversion from cubic meters to liters.",
      "3077.2 liters": "This doesn't account for the correct conversion factor."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 2
  },
  {
    id: 'cl10_ch3_t3_qe15',
    type: 'mcq',
    question: "The ratio of boys to girls in a class is 3:2. If there are 20 girls, how many students are there in total?",
    options: ["50", "45", "40", "30"],
    correctAnswer: "50",
    explanation: "If girls = 20, boys = 3/2 × 20 = 30. Total students = 30 + 20 = 50.",
    wrongAnswerExplanations: {
      "45": "This doesn't maintain the 3:2 ratio between boys and girls.",
      "40": "With 20 girls, this would mean 20 boys, which doesn't match the 3:2 ratio.",
      "30": "This is the number of boys, not the total number of students."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 2
  },
  {
    id: 'cl10_ch3_t3_qe16',
    type: 'mcq',
    question: "Two pipes A and B can fill a tank in 12 minutes and 15 minutes respectively. If both pipes are opened together, how long will it take to fill the tank?",
    options: ["6.67 minutes", "7.5 minutes", "6 minutes", "5.4 minutes"],
    correctAnswer: "6.67 minutes",
    explanation: "Combined rate = 1/12 + 1/15 = 5/60 + 4/60 = 9/60 = 3/20. Time taken = 20/3 = 6.67 minutes.",
    wrongAnswerExplanations: {
      "7.5 minutes": "This doesn't correctly account for the combined fill rate of both pipes.",
      "6 minutes": "The combined rate would fill faster than either pipe alone, but not this fast.",
      "5.4 minutes": "Check your calculation of the combined rate of filling."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 2
  },
  {
    id: 'cl10_ch3_t3_qe17',
    type: 'mcq',
    question: "If a car travels from city A to city B at 60 km/h and returns at 40 km/h, what is the average speed for the entire journey?",
    options: ["48 km/h", "50 km/h", "45 km/h", "52 km/h"],
    correctAnswer: "48 km/h",
    explanation: "Average speed = Total distance/Total time = 2d/(d/60 + d/40) = 2d/(5d/120) = 48 km/h.",
    wrongAnswerExplanations: {
      "50 km/h": "This is the arithmetic mean of the speeds, not the true average speed.",
      "45 km/h": "The average speed is higher than this value.",
      "52 km/h": "This is too high for the harmonic mean of 60 and 40."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 2
  },
  {
    id: 'cl10_ch3_t3_qe18',
    type: 'mcq',
    question: "A mixture contains milk and water in the ratio 5:3. If 4 liters of water is added, the ratio becomes 5:5. How much milk is in the original mixture?",
    options: ["10 liters", "15 liters", "20 liters", "25 liters"],
    correctAnswer: "20 liters",
    explanation: "Setting up equations with m:w = 5:3 and m:(w+4) = 5:5, solving gives m = 20 liters of milk.",
    wrongAnswerExplanations: {
      "10 liters": "With this amount, adding 4 liters of water wouldn't give the new ratio 5:5.",
      "15 liters": "Check by substituting in the original ratio and the new ratio after adding water.",
      "25 liters": "This is too high; verify with the given ratios."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 2
  },
  {
    id: 'cl10_ch3_t3_qe19',
    type: 'mcq',
    question: "The simple interest on a sum of money is 4/9 of the principal. If the rate of interest is 10% per annum, find the time period.",
    options: ["4 years", "4.5 years", "5 years", "3.5 years"],
    correctAnswer: "4.5 years",
    explanation: "SI = P×r×t/100. If SI = 4P/9, then 4P/9 = P×10×t/100, solving gives t = 4.5 years.",
    wrongAnswerExplanations: {
      "4 years": "This period would give less interest than 4/9 of the principal.",
      "5 years": "This would result in a higher interest amount.",
      "3.5 years": "This is too short to generate interest equal to 4/9 of principal at 10% p.a."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 2
  },
  {
    id: 'cl10_ch3_t3_qe20',
    type: 'mcq',
    question: "A shopkeeper allows a discount of 10% and still makes a profit of 26%. If the marked price is ₹880, what is the cost price?",
    options: ["₹600", "₹630", "₹700", "₹650"],
    correctAnswer: "₹630",
    explanation: "SP = 90% of MP = 0.9×880 = 792. CP = SP/(1+profit%) = 792/1.26 = 630.",
    wrongAnswerExplanations: {
      "₹600": "This cost price would result in a higher profit percentage than 26%.",
      "₹700": "This is too high; the profit would be less than 26%.",
      "₹650": "Check your calculation of selling price after discount."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 2
  }
];
