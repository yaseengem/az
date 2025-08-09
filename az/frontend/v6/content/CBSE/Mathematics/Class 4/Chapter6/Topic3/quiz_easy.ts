import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch6_t3_qe1',
        type: "mcq",
        question: "Raju borrowed ₹50 from his friend and promised to return it after 2 days. This is an example of:",
        options: ["Sale", "Purchase", "Loan", "Donation"],
        correctAnswer: "Loan",
        explanation: "When someone takes money with a promise to return it later, it is called a loan. Raju has taken a simple loan from his friend.",
        wrongAnswerExplanations: {
            "Sale": "A sale involves exchanging goods for money, not borrowing money.",
            "Purchase": "A purchase means buying something with money, not borrowing.",
            "Donation": "A donation is giving money without expecting it back."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch6_t3_qe2',
        type: "mcq",
        question: "If you borrow ₹100 and need to return ₹110 after one month, the extra ₹10 is called:",
        options: ["Profit", "Interest", "Discount", "Loss"],
        correctAnswer: "Interest",
        explanation: "The extra money paid on a loan is called interest. Interest is the cost of borrowing money, similar to paying rent for using something.",
        wrongAnswerExplanations: {
            "Profit": "Profit is money gained in business, not the extra amount paid on a loan.",
            "Discount": "Discount is a reduction in price, not an additional payment.",
            "Loss": "Loss is money that decreases from the original amount, not an additional payment."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch6_t3_qe3',
        type: "mcq",
        question: "Meera bought a toy for ₹45 and gave the shopkeeper a ₹100 note. How much change should she receive?",
        options: ["₹45", "₹55", "₹65", "₹145"],
        correctAnswer: "₹55",
        explanation: "Change = Money given - Cost of item. So, ₹100 - ₹45 = ₹55. When purchasing items, the change is the difference between payment and cost.",
        wrongAnswerExplanations: {
            "₹45": "₹45 is the cost of the toy, not the change received.",
            "₹65": "This is an incorrect calculation. The correct change is ₹100 - ₹45 = ₹55.",
            "₹145": "This incorrectly adds the money given and the cost, rather than subtracting."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch6_t3_qe4',
        type: "mcq",
        question: "Ram borrowed ₹200 from his uncle to buy a cricket bat. If he pays back ₹50 each week, how many weeks will it take him to repay the full amount?",
        options: ["2 weeks", "3 weeks", "4 weeks", "5 weeks"],
        correctAnswer: "4 weeks",
        explanation: "Total repayment time = Total amount ÷ Weekly payment = ₹200 ÷ ₹50 = 4 weeks. When paying in equal installments, divide the total by each payment.",
        wrongAnswerExplanations: {
            "2 weeks": "In 2 weeks, Ram would only repay ₹100 (₹50 × 2), which is not enough.",
            "3 weeks": "In 3 weeks, Ram would repay ₹150 (₹50 × 3), which is not enough.",
            "5 weeks": "In 5 weeks, Ram would repay ₹250 (₹50 × 5), which is more than needed."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch6_t3_qe5',
        type: "mcq",
        question: "Sita lent ₹150 to her friend. If her friend returns ₹50 now and promises to give the rest next week, how much money will Sita receive next week?",
        options: ["₹50", "₹100", "₹150", "₹200"],
        correctAnswer: "₹100",
        explanation: "Amount to be returned = Total loan - Amount already paid = ₹150 - ₹50 = ₹100. The remaining balance is what still needs to be repaid.",
        wrongAnswerExplanations: {
            "₹50": "₹50 is the amount already paid, not what remains to be paid.",
            "₹150": "₹150 is the total loan amount, not what remains to be paid.",
            "₹200": "This incorrectly adds the total loan and the amount already paid."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch6_t3_qe6',
        type: "mcq",
        question: "Which of these is NOT an example of a loan?",
        options: ["Borrowing a book from a library", "Buying a chocolate with your pocket money", "Taking money from a bank to buy a house", "Using your sister's pencil for homework"],
        correctAnswer: "Buying a chocolate with your pocket money",
        explanation: "Buying with your own money is a purchase, not a loan. A loan involves borrowing something that must be returned later.",
        wrongAnswerExplanations: {
            "Borrowing a book from a library": "This is a loan as you must return the book to the library.",
            "Taking money from a bank to buy a house": "This is a loan as you borrow money from the bank that must be repaid.",
            "Using your sister's pencil for homework": "This is a loan as you're temporarily using something that belongs to someone else."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch6_t3_qe7',
        type: "mcq",
        question: "If you borrow ₹20 from a friend on Monday and return it on Wednesday, how many days did you borrow the money for?",
        options: ["1 day", "2 days", "3 days", "4 days"],
        correctAnswer: "2 days",
        explanation: "The loan period is from Monday to Wednesday, which is 2 days. When counting days between events, count the number of nights in between.",
        wrongAnswerExplanations: {
            "1 day": "This is incorrect. From Monday to Wednesday is 2 days (Monday to Tuesday, Tuesday to Wednesday).",
            "3 days": "This incorrectly counts Monday, Tuesday, and Wednesday as 3 days, but the loan is returned on Wednesday.",
            "4 days": "This is far too many days for the period described."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch6_t3_qe8',
        type: "mcq",
        question: "Rohan has ₹85. He wants to buy a game that costs ₹120. How much more money does he need?",
        options: ["₹25", "₹35", "₹45", "₹205"],
        correctAnswer: "₹35",
        explanation: "Extra money needed = Cost of item - Money Rohan has = ₹120 - ₹85 = ₹35. This represents the shortfall that needs to be covered.",
        wrongAnswerExplanations: {
            "₹25": "This is an incorrect calculation. ₹120 - ₹85 = ₹35, not ₹25.",
            "₹45": "This is an incorrect calculation. ₹120 - ₹85 = ₹35, not ₹45.",
            "₹205": "This incorrectly adds the cost and the money Rohan has, rather than finding the difference."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch6_t3_qe9',
        type: "mcq",
        question: "Mini borrowed ₹500 from the bank and needs to pay back ₹550. The bank is charging her an interest of:",
        options: ["₹50", "₹100", "₹450", "₹500"],
        correctAnswer: "₹50",
        explanation: "Interest = Amount to be repaid - Original loan amount = ₹550 - ₹500 = ₹50. Interest is the extra amount paid for borrowing money.",
        wrongAnswerExplanations: {
            "₹100": "This is incorrect. The interest is the difference between the repayment amount and the loan: ₹550 - ₹500 = ₹50.",
            "₹450": "This is incorrect. ₹450 is less than the original loan amount.",
            "₹500": "₹500 is the original loan amount, not the interest."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch6_t3_qe10',
        type: "mcq",
        question: "When Preeti borrowed ₹200 from her aunt, she promised to return it in 4 equal weekly payments. How much will she pay each week?",
        options: ["₹25", "₹40", "₹50", "₹100"],
        correctAnswer: "₹50",
        explanation: "Weekly payment = Total amount ÷ Number of weeks = ₹200 ÷ 4 = ₹50. Equal installments are calculated by dividing the total by the number of payments.",
        wrongAnswerExplanations: {
            "₹25": "This is incorrect. ₹200 ÷ 4 = ₹50, not ₹25.",
            "₹40": "This is incorrect. ₹200 ÷ 4 = ₹50, not ₹40.",
            "₹100": "This would mean repaying in 2 payments (₹200 ÷ ₹100 = 2), not 4."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch6_t3_qe11',
        type: "mcq",
        question: "What happens when you take a loan?",
        options: ["You give money away permanently", "You borrow something and must return it", "You sell something", "You buy something"],
        correctAnswer: "You borrow something and must return it",
        explanation: "A loan means temporarily borrowing something with the promise to return it. The key characteristic of a loan is the obligation to repay.",
        wrongAnswerExplanations: {
            "You give money away permanently": "This describes a gift or donation, not a loan.",
            "You sell something": "Selling means giving something away in exchange for money, not borrowing.",
            "You buy something": "Buying means paying to own something permanently, not borrowing."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch6_t3_qe12',
        type: "mcq",
        question: "Rahul borrowed ₹60 from his father. He returned ₹20 on Monday and ₹15 on Tuesday. How much money does he still need to return?",
        options: ["₹15", "₹20", "₹25", "₹35"],
        correctAnswer: "₹25",
        explanation: "Amount still to return = Total borrowed - Amount already returned = ₹60 - (₹20 + ₹15) = ₹60 - ₹35 = ₹25.",
        wrongAnswerExplanations: {
            "₹15": "This is only the amount returned on Tuesday, not the remaining balance.",
            "₹20": "This is only the amount returned on Monday, not the remaining balance.",
            "₹35": "₹35 is the total amount already returned (₹20 + ₹15), not what still needs to be returned."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch6_t3_qe13',
        type: "mcq",
        question: "Aman's father borrowed ₹5000 from a bank for 1 year. If the interest rate is 10% per year, how much interest will he pay?",
        options: ["₹100", "₹500", "₹1000", "₹5500"],
        correctAnswer: "₹500",
        explanation: "Interest = Principal × Rate × Time = ₹5000 × 10/100 × 1 = ₹500. The interest is the extra amount paid for using the borrowed money.",
        wrongAnswerExplanations: {
            "₹100": "This is an incorrect calculation. 10% of ₹5000 is ₹500, not ₹100.",
            "₹1000": "This is an incorrect calculation. 10% of ₹5000 is ₹500, not ₹1000.",
            "₹5500": "₹5500 is the total amount to be repaid (principal + interest), not just the interest."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch6_t3_qe14',
        type: "mcq",
        question: "If Seema buys a dress for ₹350 and pays with a ₹500 note, what transaction will take place after she makes the purchase?",
        options: ["Seema will get a loan of ₹150", "The shopkeeper will get a loan of ₹150", "Seema will receive ₹150 as change", "Seema will have to pay ₹150 more"],
        correctAnswer: "Seema will receive ₹150 as change",
        explanation: "Change = Money given - Cost of item = ₹500 - ₹350 = ₹150. The shopkeeper returns the extra money as change.",
        wrongAnswerExplanations: {
            "Seema will get a loan of ₹150": "This is incorrect. Seema is making a purchase, not taking a loan.",
            "The shopkeeper will get a loan of ₹150": "This is incorrect. The shopkeeper is selling an item, not taking a loan.",
            "Seema will have to pay ₹150 more": "This is incorrect. Seema has already paid more than the cost and will receive change."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch6_t3_qe15',
        type: "mcq",
        question: "Divya borrowed ₹400 from her mother to buy school supplies. If she returns ₹100 each month, after 2 months, how much will she still owe?",
        options: ["₹100", "₹200", "₹300", "₹400"],
        correctAnswer: "₹200",
        explanation: "Amount still owed = Total borrowed - Amount repaid = ₹400 - (2 × ₹100) = ₹400 - ₹200 = ₹200.",
        wrongAnswerExplanations: {
            "₹100": "This is incorrect. After paying ₹200 (2 months × ₹100), Divya still owes ₹200, not ₹100.",
            "₹300": "This would be the amount owed after only 1 month of payment (₹400 - ₹100).",
            "₹400": "This would be the amount owed if no payments had been made at all."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch6_t3_qe16',
        type: "mcq",
        question: "Which of these would NOT be considered a transaction?",
        options: ["Buying a sandwich", "Selling old toys", "Looking at items in a shop window", "Paying school fees"],
        correctAnswer: "Looking at items in a shop window",
        explanation: "A transaction involves the exchange of money, goods, or services. Looking at items without buying is not a transaction as nothing is exchanged.",
        wrongAnswerExplanations: {
            "Buying a sandwich": "This is a transaction as money is exchanged for food.",
            "Selling old toys": "This is a transaction as toys are exchanged for money.",
            "Paying school fees": "This is a transaction as money is exchanged for education services."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch6_t3_qe17',
        type: "mcq",
        question: "Rita borrowed ₹300 from her sister. She returned ₹100 after one week and another ₹150 after two weeks. How much money does she still need to return?",
        options: ["₹50", "₹100", "₹150", "₹250"],
        correctAnswer: "₹50",
        explanation: "Amount still owed = Total borrowed - Total repaid = ₹300 - (₹100 + ₹150) = ₹300 - ₹250 = ₹50.",
        wrongAnswerExplanations: {
            "₹100": "₹100 is the amount Rita returned after one week, not what she still owes.",
            "₹150": "₹150 is the amount Rita returned after two weeks, not what she still owes.",
            "₹250": "₹250 is the total amount Rita has already returned (₹100 + ₹150), not what she still owes."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch6_t3_qe18',
        type: "mcq",
        question: "Arjun has ₹200. He spends ₹75 on a book and ₹45 on snacks. How much money does he have left?",
        options: ["₹70", "₹80", "₹90", "₹120"],
        correctAnswer: "₹80",
        explanation: "Money left = Initial amount - Total spent = ₹200 - (₹75 + ₹45) = ₹200 - ₹120 = ₹80.",
        wrongAnswerExplanations: {
            "₹70": "This is an incorrect calculation. ₹200 - ₹75 - ₹45 = ₹80, not ₹70.",
            "₹90": "This is an incorrect calculation. ₹200 - ₹75 - ₹45 = ₹80, not ₹90.",
            "₹120": "₹120 is the total amount spent (₹75 + ₹45), not what Arjun has left."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch6_t3_qe19',
        type: "mcq",
        question: "In simple interest, what three factors determine how much interest you pay?",
        options: ["Principal, rate, and time", "Principal, discount, and time", "Rate, time, and distance", "Principal, weight, and volume"],
        correctAnswer: "Principal, rate, and time",
        explanation: "Simple interest depends on the principal (amount borrowed), rate (percentage charged), and time (duration of the loan).",
        wrongAnswerExplanations: {
            "Principal, discount, and time": "Discount is not a factor in calculating interest.",
            "Rate, time, and distance": "Distance is not relevant to interest calculations.",
            "Principal, weight, and volume": "Weight and volume are physical measurements not related to interest."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch6_t3_qe20',
        type: "mcq",
        question: "What is the main difference between borrowing from a friend and borrowing from a bank?",
        options: ["Banks always lend more money", "Banks usually charge interest while friends might not", "Friends always want the money back sooner", "There is no difference"],
        correctAnswer: "Banks usually charge interest while friends might not",
        explanation: "Banks are businesses that make money by charging interest on loans, while friends typically lend money without expecting extra payment.",
        wrongAnswerExplanations: {
            "Banks always lend more money": "This is not always true. Friends can sometimes lend significant amounts.",
            "Friends always want the money back sooner": "This is not necessarily true. Repayment terms depend on individual arrangements.",
            "There is no difference": "There are several important differences, primarily that banks charge interest as a business."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
