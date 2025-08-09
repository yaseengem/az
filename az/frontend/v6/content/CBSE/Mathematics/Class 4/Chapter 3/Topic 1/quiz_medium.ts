import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch3_t1_qm1',
        type: "mcq",
        question: "A family of 4 is traveling from Delhi to Bhopal by train. The fare for an adult is ₹450 and for a child is ₹225. If there are 2 adults and 2 children, what is the total fare?",
        options: ["₹1,125", "₹1,350", "₹1,575", "₹1,800"],
        correctAnswer: "₹1,350",
        explanation: "(2 × ₹450) + (2 × ₹225) = ₹900 + ₹450 = ₹1,350",
        wrongAnswerExplanations: {
            "₹1,125": "Incorrect calculation of the total fare.",
            "₹1,575": "Incorrect calculation of the total fare.",
            "₹1,800": "Incorrect calculation of the total fare."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch3_t1_qm2',
        type: "mcq",
        question: "A family is planning a trip to Bhopal. They need to save ₹5,000 for the trip. If they can save ₹250 per week, how many weeks will it take them to save enough money?",
        options: ["15 weeks", "18 weeks", "20 weeks", "25 weeks"],
        correctAnswer: "20 weeks",
        explanation: "Number of weeks = ₹5,000 ÷ ₹250 = 20 weeks",
        wrongAnswerExplanations: {
            "15 weeks": "Incorrect calculation. ₹5,000 ÷ ₹250 is not 15.",
            "18 weeks": "Incorrect calculation. ₹5,000 ÷ ₹250 is not 18.",
            "25 weeks": "Incorrect calculation. ₹5,000 ÷ ₹250 is not 25."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch3_t1_qm3',
        type: "mcq",
        question: "During a trip to Bhopal, Riya's family spent ₹2,500 on hotel, ₹1,800 on food, and ₹1,200 on sightseeing. What percentage of the total expenses was spent on food?",
        options: ["25%", "30%", "33%", "40%"],
        correctAnswer: "33%",
        explanation: "Total expenses = ₹2,500 + ₹1,800 + ₹1,200 = ₹5,500. Percentage on food = (₹1,800 ÷ ₹5,500) × 100 = 33%",
        wrongAnswerExplanations: {
            "25%": "Incorrect calculation of the percentage.",
            "30%": "Incorrect calculation of the percentage.",
            "40%": "Incorrect calculation of the percentage."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch3_t1_qm4',
        type: "mcq",
        question: "A train travels from Delhi to Bhopal, a distance of 750 kilometers. If the train makes 5 stops and each stop is for 10 minutes, how much total time is spent at stops?",
        options: ["40 minutes", "50 minutes", "60 minutes", "70 minutes"],
        correctAnswer: "50 minutes",
        explanation: "Total time at stops = 5 stops × 10 minutes = 50 minutes",
        wrongAnswerExplanations: {
            "40 minutes": "Incorrect multiplication. 5 × 10 is not 40.",
            "60 minutes": "Incorrect multiplication. 5 × 10 is not 60.",
            "70 minutes": "Incorrect multiplication. 5 × 10 is not 70."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch3_t1_qm5',
        type: "mcq",
        question: "A family of 5 is staying in a hotel for 4 nights. If each night costs ₹1,200, what is the total cost for their stay?",
        options: ["₹4,800", "₹6,000", "₹7,200", "₹8,400"],
        correctAnswer: "₹4,800",
        explanation: "Total cost = 4 nights × ₹1,200 = ₹4,800. The cost depends on the number of nights, not the number of people.",
        wrongAnswerExplanations: {
            "₹6,000": "Incorrect. This calculation might have assumed 5 nights instead of 4.",
            "₹7,200": "Incorrect. This calculation might have assumed 6 nights instead of 4.",
            "₹8,400": "Incorrect. This calculation might have assumed 7 nights instead of 4."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch3_t1_qm6',
        type: "mcq",
        question: "A shopkeeper buys 25 kg of apples for ₹1,500. He sells them at ₹75 per kg. What is his profit?",
        options: ["₹250", "₹325", "₹375", "₹425"],
        correctAnswer: "₹375",
        explanation: "Selling price = 25 kg × ₹75 = ₹1,875. Profit = ₹1,875 - ₹1,500 = ₹375",
        wrongAnswerExplanations: {
            "₹250": "Incorrect calculation of the profit.",
            "₹325": "Incorrect calculation of the profit.",
            "₹425": "Incorrect calculation of the profit."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch3_t1_qm7',
        type: "mcq",
        question: "A family is planning a picnic. They need 3 sandwiches per person. If there are 5 people in the family, how many sandwiches should they prepare?",
        options: ["8 sandwiches", "12 sandwiches", "15 sandwiches", "18 sandwiches"],
        correctAnswer: "15 sandwiches",
        explanation: "Number of sandwiches = 5 people × 3 sandwiches = 15 sandwiches",
        wrongAnswerExplanations: {
            "8 sandwiches": "Incorrect multiplication. 5 × 3 is not 8.",
            "12 sandwiches": "Incorrect multiplication. 5 × 3 is not 12.",
            "18 sandwiches": "Incorrect multiplication. 5 × 3 is not 18."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch3_t1_qm8',
        type: "mcq",
        question: "A school organizes a trip to Bhopal for 80 students. If each bus can seat 25 students, how many buses are needed?",
        options: ["3 buses", "4 buses", "5 buses", "6 buses"],
        correctAnswer: "4 buses",
        explanation: "Number of buses = 80 ÷ 25 = 3.2, which means 4 buses are needed as you can't have 0.2 of a bus.",
        wrongAnswerExplanations: {
            "3 buses": "Three buses can only accommodate 75 students, which is not enough.",
            "5 buses": "Five buses can accommodate 125 students, which is more than needed.",
            "6 buses": "Six buses can accommodate 150 students, which is far more than needed."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch3_t1_qm9',
        type: "mcq",
        question: "In a school trip to Bhopal, 45 students are going. The entry ticket to a museum is ₹35 for each student and ₹60 for each teacher. If 3 teachers are accompanying the students, what is the total cost for entry tickets?",
        options: ["₹1,575", "₹1,675", "₹1,755", "₹1,935"],
        correctAnswer: "₹1,755",
        explanation: "Cost for students = 45 × ₹35 = ₹1,575. Cost for teachers = 3 × ₹60 = ₹180. Total cost = ₹1,575 + ₹180 = ₹1,755",
        wrongAnswerExplanations: {
            "₹1,575": "This only accounts for the students' tickets, not the teachers'.",
            "₹1,675": "Incorrect calculation of the total cost.",
            "₹1,935": "Incorrect calculation of the total cost."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch3_t1_qm10',
        type: "mcq",
        question: "A train from Delhi to Bhopal takes 7 hours and 30 minutes. If the train departs at 10:15 AM, at what time will it reach Bhopal?",
        options: ["5:15 PM", "5:30 PM", "5:45 PM", "6:00 PM"],
        correctAnswer: "5:45 PM",
        explanation: "Arrival time = 10:15 AM + 7 hours and 30 minutes = 5:45 PM",
        wrongAnswerExplanations: {
            "5:15 PM": "Incorrect calculation of arrival time.",
            "5:30 PM": "Incorrect calculation of arrival time.",
            "6:00 PM": "Incorrect calculation of arrival time."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch3_t1_qm11',
        type: "mcq",
        question: "A shop sells 5 types of fruits. If each type has 24 fruits and 3/8 of all fruits are sold, how many fruits are left?",
        options: ["60 fruits", "75 fruits", "90 fruits", "120 fruits"],
        correctAnswer: "75 fruits",
        explanation: "Total fruits = 5 × 24 = 120. Fruits sold = 3/8 × 120 = 45. Fruits left = 120 - 45 = 75 fruits",
        wrongAnswerExplanations: {
            "60 fruits": "Incorrect calculation of the remaining fruits.",
            "90 fruits": "Incorrect calculation of the remaining fruits.",
            "120 fruits": "This is the total number of fruits, not the number remaining."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch3_t1_qm12',
        type: "mcq",
        question: "A train journey from Delhi to Bhopal costs ₹525 for one person. How much will it cost for a family of 2 adults and 3 children if children get a 40% discount?",
        options: ["₹1,890", "₹1,995", "₹2,100", "₹2,205"],
        correctAnswer: "₹1,995",
        explanation: "Adult cost = 2 × ₹525 = ₹1,050. Child cost = 3 × (₹525 × 0.6) = 3 × ₹315 = ₹945. Total = ₹1,050 + ₹945 = ₹1,995",
        wrongAnswerExplanations: {
            "₹1,890": "Incorrect calculation of the total cost.",
            "₹2,100": "Incorrect calculation of the total cost.",
            "₹2,205": "Incorrect calculation of the total cost."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch3_t1_qm13',
        type: "mcq",
        question: "In a class, there are 35 students. If 3/5 of them are girls, how many boys are there?",
        options: ["14 boys", "15 boys", "16 boys", "21 boys"],
        correctAnswer: "14 boys",
        explanation: "Number of girls = 3/5 × 35 = 21 girls. Number of boys = 35 - 21 = 14 boys",
        wrongAnswerExplanations: {
            "15 boys": "Incorrect calculation of the number of boys.",
            "16 boys": "Incorrect calculation of the number of boys.",
            "21 boys": "This is the number of girls, not boys."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch3_t1_qm14',
        type: "mcq",
        question: "A train from Delhi to Bhopal travels at an average speed of 60 km/h. If the distance is 720 km, how long will the journey take?",
        options: ["10 hours", "11 hours", "12 hours", "13 hours"],
        correctAnswer: "12 hours",
        explanation: "Time = Distance ÷ Speed = 720 km ÷ 60 km/h = 12 hours",
        wrongAnswerExplanations: {
            "10 hours": "Incorrect calculation of travel time.",
            "11 hours": "Incorrect calculation of travel time.",
            "13 hours": "Incorrect calculation of travel time."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch3_t1_qm15',
        type: "mcq",
        question: "A school collects ₹250 from each student for a field trip to Bhopal. If 120 students are going, and the total transportation cost is ₹18,000, how much money will be left for other expenses?",
        options: ["₹8,000", "₹10,000", "₹12,000", "₹14,000"],
        correctAnswer: "₹12,000",
        explanation: "Total collected = 120 × ₹250 = ₹30,000. Money left = ₹30,000 - ₹18,000 = ₹12,000",
        wrongAnswerExplanations: {
            "₹8,000": "Incorrect calculation of the remaining money.",
            "₹10,000": "Incorrect calculation of the remaining money.",
            "₹14,000": "Incorrect calculation of the remaining money."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch3_t1_qm16',
        type: "mcq",
        question: "A hotel in Bhopal charges ₹1,800 per night for a room. If a family stays for 5 nights and gets a discount of 10%, what is the total amount they pay?",
        options: ["₹7,200", "₹8,100", "₹8,800", "₹9,000"],
        correctAnswer: "₹8,100",
        explanation: "Regular cost = 5 × ₹1,800 = ₹9,000. Discount = 10% of ₹9,000 = ₹900. Amount paid = ₹9,000 - ₹900 = ₹8,100",
        wrongAnswerExplanations: {
            "₹7,200": "Incorrect calculation of the total amount paid.",
            "₹8,800": "Incorrect calculation of the total amount paid.",
            "₹9,000": "This is the cost without applying the discount."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch3_t1_qm17',
        type: "mcq",
        question: "During a trip to Bhopal, a family visits a zoo where the entry fee is ₹50 for adults and ₹30 for children. If 2 adults and 3 children visit, what is the total entry fee?",
        options: ["₹160", "₹170", "₹180", "₹190"],
        correctAnswer: "₹190",
        explanation: "Adult fee = 2 × ₹50 = ₹100. Children fee = 3 × ₹30 = ₹90. Total fee = ₹100 + ₹90 = ₹190",
        wrongAnswerExplanations: {
            "₹160": "Incorrect calculation of the total entry fee.",
            "₹170": "Incorrect calculation of the total entry fee.",
            "₹180": "Incorrect calculation of the total entry fee."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch3_t1_qm18',
        type: "mcq",
        question: "A trip to Bhopal requires 90 liters of fuel. If fuel costs ₹85 per liter and a car gives a mileage of 15 km per liter, what is the fuel cost for a 450 km journey?",
        options: ["₹2,350", "₹2,550", "₹2,750", "₹2,950"],
        correctAnswer: "₹2,550",
        explanation: "Fuel required = 450 km ÷ 15 km/liter = 30 liters. Fuel cost = 30 liters × ₹85 = ₹2,550",
        wrongAnswerExplanations: {
            "₹2,350": "Incorrect calculation of the fuel cost.",
            "₹2,750": "Incorrect calculation of the fuel cost.",
            "₹2,950": "Incorrect calculation of the fuel cost."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch3_t1_qm19',
        type: "mcq",
        question: "In a trip to Bhopal, a tour group of 36 students is divided equally among 4 guides. Each guide receives ₹350. What is the total amount paid to all guides?",
        options: ["₹1,050", "₹1,200", "₹1,350", "₹1,400"],
        correctAnswer: "₹1,400",
        explanation: "Total paid to guides = 4 guides × ₹350 = ₹1,400",
        wrongAnswerExplanations: {
            "₹1,050": "Incorrect calculation of the total amount paid.",
            "₹1,200": "Incorrect calculation of the total amount paid.",
            "₹1,350": "Incorrect calculation of the total amount paid."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch3_t1_qm20',
        type: "mcq",
        question: "A family budgets ₹12,000 for a trip to Bhopal. They spend ₹4,500 on transport, ₹5,200 on accommodation, and ₹1,800 on food. How much money do they have left?",
        options: ["₹300", "₹400", "₹500", "₹600"],
        correctAnswer: "₹500",
        explanation: "Total expenses = ₹4,500 + ₹5,200 + ₹1,800 = ₹11,500. Money left = ₹12,000 - ₹11,500 = ₹500",
        wrongAnswerExplanations: {
            "₹300": "Incorrect calculation of the remaining money.",
            "₹400": "Incorrect calculation of the remaining money.",
            "₹600": "Incorrect calculation of the remaining money."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];