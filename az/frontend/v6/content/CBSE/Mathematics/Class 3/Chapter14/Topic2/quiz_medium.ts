import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl3_ch14_t2_qm1',
        type: "mcq",
        question: "Raju had ₹45. He spent ₹18 on a book and ₹12 on a toy. How much money does he have left?",
        options: ["₹15", "₹30", "₹27", "₹5"],
        correctAnswer: "₹15",
        explanation: "First, find the total amount spent: ₹18 + ₹12 = ₹30. Then subtract from what Raju had: ₹45 - ₹30 = ₹15.",
        wrongAnswerExplanations: {
            "₹30": "This is the total amount spent, not what remains.",
            "₹27": "This is ₹45 - ₹18, forgetting to subtract the ₹12 for the toy.",
            "₹5": "The calculation is incorrect. The correct answer is ₹45 - ₹18 - ₹12 = ₹15."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch14_t2_qm2',
        type: "mcq",
        question: "A notebook costs ₹25, a pencil costs ₹8, and an eraser costs ₹5. How much will you pay for 1 notebook, 2 pencils, and 1 eraser?",
        options: ["₹38", "₹46", "₹33", "₹41"],
        correctAnswer: "₹46",
        explanation: "Calculate the total: ₹25 (notebook) + ₹8 × 2 (two pencils) + ₹5 (eraser) = ₹25 + ₹16 + ₹5 = ₹46.",
        wrongAnswerExplanations: {
            "₹38": "This only accounts for one pencil: ₹25 + ₹8 + ₹5 = ₹38.",
            "₹33": "This is the cost of the notebook and one eraser, missing the pencils: ₹25 + ₹8 = ₹33.",
            "₹41": "The calculation is incorrect. The correct answer is ₹25 + ₹16 + ₹5 = ₹46."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch14_t2_qm3',
        type: "mcq",
        question: "Sara had ₹50. She bought a book for ₹35. Later, her mother gave her ₹20. How much money does Sara have now?",
        options: ["₹35", "₹15", "₹70", "₹35"],
        correctAnswer: "₹35",
        explanation: "First, find what's left after buying the book: ₹50 - ₹35 = ₹15. Then add what her mother gave: ₹15 + ₹20 = ₹35.",
        wrongAnswerExplanations: {
            "₹15": "This is what Sara had after buying the book but before getting ₹20 from her mother.",
            "₹70": "This incorrectly adds ₹50 + ₹20 without subtracting the ₹35 spent.",
            "₹35": "This is a duplicate option."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch14_t2_qm4',
        type: "mcq",
        question: "Mohan has ₹24 and Sohan has ₹36. How much more money does Sohan have than Mohan?",
        options: ["₹12", "₹60", "₹10", "₹8"],
        correctAnswer: "₹12",
        explanation: "To find how much more Sohan has, subtract: ₹36 - ₹24 = ₹12.",
        wrongAnswerExplanations: {
            "₹60": "This is the total amount both boys have: ₹24 + ₹36 = ₹60.",
            "₹10": "The correct difference between ₹36 and ₹24 is ₹12, not ₹10.",
            "₹8": "The correct difference between ₹36 and ₹24 is ₹12, not ₹8."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 40
    },
    {
        id: 'cl3_ch14_t2_qm5',
        type: "mcq",
        question: "A shopkeeper had ₹85. He spent ₹27 on Monday and ₹35 on Tuesday. How much money does he have left?",
        options: ["₹23", "₹50", "₹62", "₹35"],
        correctAnswer: "₹23",
        explanation: "Calculate the total spent: ₹27 + ₹35 = ₹62. Then subtract from initial amount: ₹85 - ₹62 = ₹23.",
        wrongAnswerExplanations: {
            "₹50": "This calculation is incorrect. The correct answer is ₹85 - ₹27 - ₹35 = ₹23.",
            "₹62": "This is the total amount spent, not what remains.",
            "₹35": "This is only the amount spent on Tuesday, not the answer."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch14_t2_qm6',
        type: "mcq",
        question: "Reena has 3 coins of ₹5 each and 2 coins of ₹2 each. How much money does she have in all?",
        options: ["₹15", "₹19", "₹4", "₹7"],
        correctAnswer: "₹19",
        explanation: "Calculate: 3 × ₹5 = ₹15 and 2 × ₹2 = ₹4. Then add: ₹15 + ₹4 = ₹19.",
        wrongAnswerExplanations: {
            "₹15": "This is only the value of the ₹5 coins (3 × ₹5), missing the ₹2 coins.",
            "₹4": "This is only the value of the ₹2 coins (2 × ₹2), missing the ₹5 coins.",
            "₹7": "This is the number of coins (3 + 2 = 5), not their value."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch14_t2_qm7',
        type: "mcq",
        question: "Amit has ₹50. He wants to buy a toy for ₹37 and a chocolate for ₹15. Does he have enough money?",
        options: ["Yes, he has enough", "No, he needs ₹2 more", "No, he needs ₹10 more", "No, he needs ₹5 more"],
        correctAnswer: "No, he needs ₹2 more",
        explanation: "Add the costs: ₹37 + ₹15 = ₹52. Compare with what Amit has: ₹52 - ₹50 = ₹2 more needed.",
        wrongAnswerExplanations: {
            "Yes, he has enough": "Amit has ₹50, but needs ₹52, so he doesn't have enough.",
            "No, he needs ₹10 more": "The correct amount needed is ₹2 more, not ₹10.",
            "No, he needs ₹5 more": "The correct amount needed is ₹2 more, not ₹5."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch14_t2_qm8',
        type: "mcq",
        question: "Radha bought a book for ₹25 and a pen for ₹8. If she gave the shopkeeper ₹50, how much change should she get back?",
        options: ["₹17", "₹33", "₹25", "₹15"],
        correctAnswer: "₹17",
        explanation: "Calculate total spent: ₹25 + ₹8 = ₹33. Then find change: ₹50 - ₹33 = ₹17.",
        wrongAnswerExplanations: {
            "₹33": "This is the total cost of the items, not the change.",
            "₹25": "This is only the cost of the book, not the change.",
            "₹15": "The correct change is ₹17, not ₹15."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch14_t2_qm9',
        type: "mcq",
        question: "A toy costs ₹45. If you have ₹30, how much more money do you need to buy the toy?",
        options: ["₹15", "₹75", "₹25", "₹5"],
        correctAnswer: "₹15",
        explanation: "Subtract what you have from the cost: ₹45 - ₹30 = ₹15 more needed.",
        wrongAnswerExplanations: {
            "₹75": "This is the sum ₹45 + ₹30, not the difference.",
            "₹25": "The correct amount needed is ₹15, not ₹25.",
            "₹5": "The correct amount needed is ₹15, not ₹5."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 40
    },
    {
        id: 'cl3_ch14_t2_qm10',
        type: "mcq",
        question: "Which is greater: ₹35 + ₹20 or ₹50 + ₹10?",
        options: ["₹35 + ₹20", "₹50 + ₹10", "Both are equal", "Cannot be determined"],
        correctAnswer: "Both are equal",
        explanation: "Calculate both: ₹35 + ₹20 = ₹55 and ₹50 + ₹10 = ₹60. ₹55 = ₹55, so they are equal.",
        wrongAnswerExplanations: {
            "₹35 + ₹20": "₹35 + ₹20 = ₹55 and ₹50 + ₹10 = ₹60. Since ₹55 = ₹55, they're equal.",
            "₹50 + ₹10": "₹35 + ₹20 = ₹55 and ₹50 + ₹10 = ₹60. Since ₹55 = ₹55, they're equal.",
            "Cannot be determined": "We can calculate both expressions and find they're equal."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch14_t2_qm11',
        type: "mcq",
        question: "Rahul had some money. He spent ₹15 on a book and ₹10 on a pencil. Now he has ₹25 left. How much money did he have initially?",
        options: ["₹25", "₹50", "₹40", "₹35"],
        correctAnswer: "₹50",
        explanation: "Add what was spent and what remains: ₹15 + ₹10 + ₹25 = ₹50.",
        wrongAnswerExplanations: {
            "₹25": "This is only what remains, not the initial amount.",
            "₹40": "This calculation is incorrect. The correct answer is ₹15 + ₹10 + ₹25 = ₹50.",
            "₹35": "This calculation is incorrect. The correct answer is ₹15 + ₹10 + ₹25 = ₹50."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 50
    },
    {
        id: 'cl3_ch14_t2_qm12',
        type: "mcq",
        question: "Meena buys a doll for ₹35 and a ball for ₹15. If she gives the shopkeeper ₹100, how much change will she get?",
        options: ["₹50", "₹70", "₹30", "₹100"],
        correctAnswer: "₹50",
        explanation: "Find the total cost: ₹35 + ₹15 = ₹50. Then calculate change: ₹100 - ₹50 = ₹50.",
        wrongAnswerExplanations: {
            "₹70": "The calculation is incorrect. The correct change is ₹100 - (₹35 + ₹15) = ₹50.",
            "₹30": "The calculation is incorrect. The correct change is ₹100 - (₹35 + ₹15) = ₹50.",
            "₹100": "This is the amount given to the shopkeeper, not the change."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch14_t2_qm13',
        type: "mcq",
        question: "Raj has 2 notes of ₹10 each and 3 coins of ₹5 each. How much money does he have in all?",
        options: ["₹35", "₹25", "₹20", "₹15"],
        correctAnswer: "₹35",
        explanation: "Calculate: 2 × ₹10 = ₹20 and 3 × ₹5 = ₹15. Then add: ₹20 + ₹15 = ₹35.",
        wrongAnswerExplanations: {
            "₹25": "This calculation is incorrect. The correct answer is ₹20 + ₹15 = ₹35.",
            "₹20": "This is only the value of the ₹10 notes (2 × ₹10), missing the ₹5 coins.",
            "₹15": "This is only the value of the ₹5 coins (3 × ₹5), missing the ₹10 notes."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch14_t2_qm14',
        type: "mcq",
        question: "Sita gives ₹18 to Rita and ₹12 to Gita. If she had ₹45 initially, how much does she have left?",
        options: ["₹15", "₹30", "₹5", "₹27"],
        correctAnswer: "₹15",
        explanation: "Calculate total given away: ₹18 + ₹12 = ₹30. Then subtract from initial amount: ₹45 - ₹30 = ₹15.",
        wrongAnswerExplanations: {
            "₹30": "This is the total amount given away, not what remains.",
            "₹5": "The calculation is incorrect. The correct answer is ₹45 - ₹18 - ₹12 = ₹15.",
            "₹27": "This is ₹45 - ₹18, forgetting to subtract the ₹12 given to Gita."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch14_t2_qm15',
        type: "mcq",
        question: "A chocolate costs ₹15 and a toffee costs ₹3. How much will 2 chocolates and 5 toffees cost?",
        options: ["₹30", "₹45", "₹18", "₹15"],
        correctAnswer: "₹45",
        explanation: "Calculate: 2 × ₹15 = ₹30 for chocolates and 5 × ₹3 = ₹15 for toffees. Total: ₹30 + ₹15 = ₹45.",
        wrongAnswerExplanations: {
            "₹30": "This is only the cost of 2 chocolates (2 × ₹15), missing the toffees.",
            "₹18": "This is incorrect. The correct calculation is ₹30 + ₹15 = ₹45.",
            "₹15": "This is only the cost of 5 toffees (5 × ₹3), missing the chocolates."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 50
    },
    {
        id: 'cl3_ch14_t2_qm16',
        type: "mcq",
        question: "Rohan has ₹20 more than Sohan. If Sohan has ₹35, how much do they have together?",
        options: ["₹20", "₹55", "₹90", "₹75"],
        correctAnswer: "₹90",
        explanation: "Rohan has ₹35 + ₹20 = ₹55. Together they have ₹55 + ₹35 = ₹90.",
        wrongAnswerExplanations: {
            "₹20": "This is how much more Rohan has than Sohan, not their total.",
            "₹55": "This is only what Rohan has, not their combined total.",
            "₹75": "The calculation is incorrect. The correct answer is ₹55 + ₹35 = ₹90."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch14_t2_qm17',
        type: "mcq",
        question: "Tina bought items for ₹28, ₹15, and ₹12. If she gave the shopkeeper ₹100, how much change did she get?",
        options: ["₹45", "₹55", "₹25", "₹75"],
        correctAnswer: "₹45",
        explanation: "Calculate total spent: ₹28 + ₹15 + ₹12 = ₹55. Then find change: ₹100 - ₹55 = ₹45.",
        wrongAnswerExplanations: {
            "₹55": "This is the total spent, not the change received.",
            "₹25": "The calculation is incorrect. The correct change is ₹100 - ₹55 = ₹45.",
            "₹75": "The calculation is incorrect. The correct change is ₹100 - ₹55 = ₹45."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch14_t2_qm18',
        type: "mcq",
        question: "Ram had ₹85. He spent ₹37 on Monday and ₹29 on Tuesday. How much more did he spend on Monday than on Tuesday?",
        options: ["₹8", "₹66", "₹19", "₹10"],
        correctAnswer: "₹8",
        explanation: "Subtract to find the difference: ₹37 - ₹29 = ₹8.",
        wrongAnswerExplanations: {
            "₹66": "This is the total amount spent (₹37 + ₹29), not the difference.",
            "₹19": "The calculation is incorrect. The correct difference is ₹37 - ₹29 = ₹8.",
            "₹10": "The calculation is incorrect. The correct difference is ₹37 - ₹29 = ₹8."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch14_t2_qm19',
        type: "mcq",
        question: "Seema has ₹50. She wants to buy a notebook for ₹25, a pen for ₹15, and an eraser for ₹5. Will she have enough money, and if yes, how much will be left?",
        options: ["No, she needs ₹5 more", "Yes, ₹5 will be left", "Yes, ₹10 will be left", "No, she needs ₹10 more"],
        correctAnswer: "Yes, ₹5 will be left",
        explanation: "Calculate total cost: ₹25 + ₹15 + ₹5 = ₹45. Since ₹50 - ₹45 = ₹5, she has enough and ₹5 will be left.",
        wrongAnswerExplanations: {
            "No, she needs ₹5 more": "The total cost is ₹45, and she has ₹50, so she doesn't need more money.",
            "Yes, ₹10 will be left": "The calculation is incorrect. The correct amount left is ₹50 - ₹45 = ₹5.",
            "No, she needs ₹10 more": "The total cost is ₹45, and she has ₹50, so she doesn't need more money."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 50
    },
    {
        id: 'cl3_ch14_t2_qm20',
        type: "mcq",
        question: "Ravi had some money. He spent ₹25 on a book and ₹15 on food. Now he has ₹40 left. How much money did he have initially?",
        options: ["₹40", "₹80", "₹65", "₹60"],
        correctAnswer: "₹80",
        explanation: "Add what was spent and what remains: ₹25 + ₹15 + ₹40 = ₹80.",
        wrongAnswerExplanations: {
            "₹40": "This is only what remains, not the initial amount.",
            "₹65": "The calculation is incorrect. The correct answer is ₹25 + ₹15 + ₹40 = ₹80.",
            "₹60": "The calculation is incorrect. The correct answer is ₹25 + ₹15 + ₹40 = ₹80."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 50
    }
];
