import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch15_t1_qm1',
        type: "mcq",
        question: "In a clock, at what time between 4 and 5 will the hour and minute hands overlap?",
        options: ["4:21:49", "4:21:27", "4:21:38", "4:21:58"],
        correctAnswer: "4:21:49",
        explanation: "Hour hand moves (21/60)×30° + (49/3600)×30° = 10.9°, minute hand moves 21×6° + (49/60)×6° = 130.9°. They overlap at 130.9°. 🕐",
        wrongAnswerExplanations: {
            "4:21:27": "Hands don't overlap at this time.",
            "4:21:38": "Minute hand ahead of hour hand.",
            "4:21:58": "Hour hand ahead of minute hand."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t1_qm2',
        type: "mcq",
        question: "If MATHEMATICS is coded as 13-1-20-8-5-13-1-20-9-3-19, how is LOGICAL coded?",
        options: ["12-15-7-9-3-1-12", "12-15-7-9-3-12-1", "12-15-7-9-1-3-12", "12-15-7-3-9-1-12"],
        correctAnswer: "12-15-7-9-3-1-12",
        explanation: "Each letter is replaced by its position in alphabet: L=12, O=15, G=7, I=9, C=3, A=1, L=12. 🔤",
        wrongAnswerExplanations: {
            "12-15-7-9-3-12-1": "Letters in wrong order.",
            "12-15-7-9-1-3-12": "C and A swapped.",
            "12-15-7-3-9-1-12": "Multiple positions wrong."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t1_qm3',
        type: "mcq",
        question: "In a sequence: 3, 8, 15, 24, 35, ?, 63, what is the missing number?",
        options: ["48", "45", "50", "52"],
        correctAnswer: "48",
        explanation: "Differences between terms: 5, 7, 9, 11, 13, 15. Each difference increases by 2. So 35 + 13 = 48. 📈",
        wrongAnswerExplanations: {
            "45": "Pattern requires +13.",
            "50": "Too large for pattern.",
            "52": "Breaks the sequence."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t1_qm4',
        type: "mcq",
        question: "If A × B means A is to the north of B, A + B means A is to the south of B, A ÷ B means A is to the east of B, A - B means A is to the west of B. If P + Q - R × S ÷ T is given, which of these is closest to P?",
        options: ["Q", "R", "S", "T"],
        correctAnswer: "Q",
        explanation: "P is south of Q, Q is west of R, R is north of S, S is east of T. Following directions, Q is closest to P. 🧭",
        wrongAnswerExplanations: {
            "R": "Two positions away from P.",
            "S": "Three positions away from P.",
            "T": "Four positions away from P."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t1_qm5',
        type: "mcq",
        question: "If 5 machines make 5 parts in 5 minutes, how many machines are needed to make 100 parts in 100 minutes?",
        options: ["5", "20", "25", "100"],
        correctAnswer: "5",
        explanation: "Time and parts both increased 20 times. Same machines can produce 20 times more parts in 20 times more time. 🏭",
        wrongAnswerExplanations: {
            "20": "No need for more machines.",
            "25": "Time increase compensates.",
            "100": "Proportional increase unnecessary."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t1_qm6',
        type: "mcq",
        question: "In a certain code language, if TRIANGLE is written as SQHZMFKD, how will SQUARE be written?",
        options: ["RPTBQD", "RPTZQD", "RPTBSD", "RPTZSD"],
        correctAnswer: "RPTBQD",
        explanation: "Each letter is shifted one position back, except vowels which are shifted two positions back. 📐",
        wrongAnswerExplanations: {
            "RPTZQD": "Z not correct for A.",
            "RPTBSD": "Last letter wrong.",
            "RPTZSD": "Multiple letters wrong."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t1_qm7',
        type: "mcq",
        question: "If ⭕ means ×, △ means +, ◻ means ÷, and ⬡ means -, what is the value of 15 ⭕ 3 △ 45 ◻ 9 ⬡ 6?",
        options: ["44", "50", "54", "60"],
        correctAnswer: "44",
        explanation: "Converting symbols: 15 × 3 + 45 ÷ 9 - 6 = 45 + 5 - 6 = 44. Follow BODMAS. 🧮",
        wrongAnswerExplanations: {
            "50": "Wrong order of operations.",
            "54": "Check subtraction step.",
            "60": "Multiple calculation errors."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t1_qm8',
        type: "mcq",
        question: "A cube has six faces numbered 1 to 6. If 1 is on top and 2 is facing you, what number is on the bottom?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "6",
        explanation: "Opposite faces sum to 7 (1+6, 2+5, 3+4). If 1 is on top, 6 must be on bottom. 🎲",
        wrongAnswerExplanations: {
            "3": "3 and 4 are opposite pairs.",
            "4": "4 is opposite to 3.",
            "5": "5 is opposite to 2."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t1_qm9',
        type: "mcq",
        question: "In a certain code, 'pit a pat' is written as '3% 7% 3%', 'sit a bit' is written as '4% 7% 4%'. How is 'tap it pat' written?",
        options: ["3% 2% 3%", "3% 4% 3%", "4% 2% 3%", "3% 3% 4%"],
        correctAnswer: "3% 2% 3%",
        explanation: "3-letter words with same letters = 3%, 'it' = 2%, 'a' = 7%. Following pattern: tap(3%) it(2%) pat(3%). 🔍",
        wrongAnswerExplanations: {
            "3% 4% 3%": "Middle code wrong.",
            "4% 2% 3%": "First word code wrong.",
            "3% 3% 4%": "Last word code wrong."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t1_qm10',
        type: "mcq",
        question: "If today is Monday and the day after tomorrow is a holiday, what day will it be the day before the day after the holiday?",
        options: ["Tuesday", "Wednesday", "Thursday", "Friday"],
        correctAnswer: "Wednesday",
        explanation: "Today(Monday) → tomorrow(Tuesday) → holiday(Wednesday). Day before the day after holiday is Wednesday. 📅",
        wrongAnswerExplanations: {
            "Tuesday": "One day early.",
            "Thursday": "One day late.",
            "Friday": "Two days late."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t1_qm11',
        type: "mcq",
        question: "What comes next in the pattern: 2, 5, 10, 17, 26, ?",
        options: ["35", "37", "39", "41"],
        correctAnswer: "37",
        explanation: "Differences increase by 2: +3, +5, +7, +9, +11. So 26 + 11 = 37. 🔢",
        wrongAnswerExplanations: {
            "35": "Difference too small.",
            "39": "Difference too large.",
            "41": "Pattern broken."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t1_qm12',
        type: "mcq",
        question: "In a family of six, A is the mother of B, B is the sister of C, C is the son of D, D is the father of E, E is the brother of B. How many male members are there in the family?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "3",
        explanation: "Males: C(son), D(father), E(brother). A(mother) and B(sister) are females. 👨‍👩‍👧‍👦",
        wrongAnswerExplanations: {
            "2": "Missed one male member.",
            "4": "Counted a female as male.",
            "5": "More than total members."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t1_qm13',
        type: "mcq",
        question: "If FRIEND is coded as 373956 and HELP is coded as 4527, what is the code for PRIDE?",
        options: ["73956", "73365", "73965", "73596"],
        correctAnswer: "73965",
        explanation: "Each letter coded by position: P=7, R=3, I=9, D=6, E=5. Pattern matches FRIEND code. 🔤",
        wrongAnswerExplanations: {
            "73956": "I and D swapped.",
            "73365": "Multiple digits wrong.",
            "73596": "Last three digits wrong."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t1_qm14',
        type: "mcq",
        question: "A train travels 50% faster than a car. If the car takes 6 hours to reach a destination, how long will the train take?",
        options: ["3 hours", "4 hours", "2 hours", "5 hours"],
        correctAnswer: "4 hours",
        explanation: "50% faster means time reduced by 1/3. So train takes 6 × (2/3) = 4 hours. 🚂",
        wrongAnswerExplanations: {
            "3 hours": "Too much reduction.",
            "2 hours": "Time reduced by 2/3.",
            "5 hours": "Not fast enough."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t1_qm15',
        type: "mcq",
        question: "If × means ÷, ÷ means ×, + means -, and - means +, then what is the value of 24 ÷ 3 × 2 + 8 - 7?",
        options: ["12", "15", "18", "21"],
        correctAnswer: "15",
        explanation: "Converting: 24 × 3 ÷ 2 - 8 + 7 = 72 ÷ 2 - 8 + 7 = 36 - 8 + 7 = 35 - 20 = 15. 🧮",
        wrongAnswerExplanations: {
            "12": "Wrong order of operations.",
            "18": "Check final addition.",
            "21": "Multiple calculation errors."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t1_qm16',
        type: "mcq",
        question: "In a certain code, '247' means 'hot filtered coffee', '256' means 'very hot day' and '346' means 'coffee day out'. What is the code for 'hot'?",
        options: ["2", "3", "4", "7"],
        correctAnswer: "2",
        explanation: "Comparing codes: '2' appears in 'hot filtered coffee' and 'very hot day', but 'hot' is the only common word. 🔍",
        wrongAnswerExplanations: {
            "3": "Appears with 'coffee' and 'day'.",
            "4": "Appears with 'filtered' and 'coffee'.",
            "7": "Only appears with 'filtered coffee'."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t1_qm17',
        type: "mcq",
        question: "If A = 1, B = 2, C = 3, what is the value of (A + B)³ - (B + C)³ + (A + C)³?",
        options: ["0", "8", "16", "24"],
        correctAnswer: "0",
        explanation: "(1+2)³ - (2+3)³ + (1+3)³ = 27 - 125 + 64 = -34 + 64 = 0. 🎯",
        wrongAnswerExplanations: {
            "8": "Check calculations again.",
            "16": "Sum equals zero.",
            "24": "Final result is zero."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t1_qm18',
        type: "mcq",
        question: "Three pipes A, B, and C can fill a tank in 6 hours, 8 hours, and 12 hours respectively. If all pipes are opened together, in how many hours will the tank be filled?",
        options: ["2.4", "2.6", "2.8", "3.0"],
        correctAnswer: "2.6",
        explanation: "Rate = 1/6 + 1/8 + 1/12 = 23/48 tank/hour. Time = 48/23 ≈ 2.6 hours. 🚰",
        wrongAnswerExplanations: {
            "2.4": "Rate calculation error.",
            "2.8": "Too slow filling rate.",
            "3.0": "Much too slow."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t1_qm19',
        type: "mcq",
        question: "If PAPER = 90985 and PENCIL = 984673, what is CLIP?",
        options: ["6379", "7369", "6397", "7396"],
        correctAnswer: "6379",
        explanation: "From given codes: C=6, L=3, I=7, P=9. Therefore CLIP = 6379. 🖊️",
        wrongAnswerExplanations: {
            "7369": "Digits in wrong order.",
            "6397": "L and I swapped.",
            "7396": "Multiple digits wrong."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t1_qm20',
        type: "mcq",
        question: "A cube is painted red on all faces. It is then cut into 27 smaller equal cubes. How many small cubes have exactly two faces painted red?",
        options: ["8", "12", "24", "48"],
        correctAnswer: "12",
        explanation: "Edge cubes (not corners) have two faces painted. 3 edges × 4 cubes per edge = 12 cubes. 🎨",
        wrongAnswerExplanations: {
            "8": "This is number of corner cubes.",
            "24": "Too many cubes counted.",
            "48": "Impossible for 3×3×3 cube."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 