// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 6\Chapter3\Topic3\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch3_t3_qm1',
        type: "mcq",
        question: "If a number is divisible by both 3 and 4, it is also divisible by:",
        options: ["6", "7", "12", "15"],
        correctAnswer: "12",
        explanation: "A number divisible by both 3 and 4 is divisible by their LCM, which is 12. 🔢",
        wrongAnswerExplanations: {
            "6": "6 = 2 × 3. A number divisible by 4 is already divisible by 2, so it's divisible by 6 too, but that's not the complete answer.",
            "7": "Divisibility by 3 and 4 doesn't guarantee divisibility by 7.",
            "15": "15 = 3 × 5. Divisibility by 3 and 4 doesn't guarantee divisibility by 5 or 15."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t3_qm2',
        type: "mcq",
        question: "Which of these numbers is divisible by both 4 and 9?",
        options: ["36", "72", "108", "136"],
        correctAnswer: "108",
        explanation: "108 is divisible by 4 (last two digits 08 are divisible by 4) and by 9 (sum 1+0+8=9). ✅",
        wrongAnswerExplanations: {
            "36": "36 is divisible by 9 (sum 3+6=9) but not by 4 (36 ÷ 4 = 9 with remainder).",
            "72": "72 is divisible by 4 (72 = 4 × 18) but sum 7+2=9, which is divisible by 9, so it's divisible by both.",
            "136": "136 is divisible by 4 (last two digits 36 are divisible by 4) but not by 9 (1+3+6=10)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t3_qm3',
        type: "mcq",
        question: "Which divisibility test would you apply first to check if 3570 is divisible by 6?",
        options: [
            "Check if it's divisible by 2",
            "Check if it's divisible by 3",
            "Check if it's divisible by both 2 and 3 separately",
            "Divide 3570 by 6 directly"
        ],
        correctAnswer: "Check if it's divisible by both 2 and 3 separately",
        explanation: "For divisibility by 6, check divisibility by both 2 and 3, as 6 = 2 × 3. 🧩",
        wrongAnswerExplanations: {
            "Check if it's divisible by 2": "This is only part of the check for divisibility by 6.",
            "Check if it's divisible by 3": "This is only part of the check for divisibility by 6.",
            "Divide 3570 by 6 directly": "Using divisibility rules is more efficient than direct division."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t3_qm4',
        type: "mcq",
        question: "A number is divisible by 4 if:",
        options: [
            "It's an even number",
            "The last digit is divisible by 4",
            "The last two digits form a number divisible by 4",
            "The sum of its digits is divisible by 4"
        ],
        correctAnswer: "The last two digits form a number divisible by 4",
        explanation: "A number is divisible by 4 if the number formed by its last two digits is divisible by 4. 🔢",
        wrongAnswerExplanations: {
            "It's an even number": "Being even means divisible by 2, not necessarily by 4.",
            "The last digit is divisible by 4": "This is not the divisibility rule for 4.",
            "The sum of its digits is divisible by 4": "This is not the divisibility rule for 4."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t3_qm5',
        type: "mcq",
        question: "Which statement about divisibility rules is FALSE?",
        options: [
            "A number divisible by 2 and 3 is divisible by 6",
            "A number divisible by 3 and 4 is divisible by 12",
            "A number divisible by 2 and 5 is divisible by 7",
            "A number divisible by 5 and 9 is divisible by 45"
        ],
        correctAnswer: "A number divisible by 2 and 5 is divisible by 7",
        explanation: "A number divisible by 2 and 5 is divisible by 10 (not 7). 7 is not related to 2 and 5. ❌",
        wrongAnswerExplanations: {
            "A number divisible by 2 and 3 is divisible by 6": "This is true because 6 = 2 × 3.",
            "A number divisible by 3 and 4 is divisible by 12": "This is true because 12 = 3 × 4.",
            "A number divisible by 5 and 9 is divisible by 45": "This is true because 45 = 5 × 9."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t3_qm6',
        type: "mcq",
        question: "What is the smallest positive number that is divisible by both 6 and 9?",
        options: ["18", "36", "54", "72"],
        correctAnswer: "18",
        explanation: "The LCM of 6 and 9 is 18, which is the smallest number divisible by both 6 and 9. 📊",
        wrongAnswerExplanations: {
            "36": "36 is divisible by both 6 and 9, but it's not the smallest such number.",
            "54": "54 is divisible by both 6 and 9, but it's not the smallest such number.",
            "72": "72 is divisible by both 6 and 9, but it's not the smallest such number."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t3_qm7',
        type: "mcq",
        question: "Which numbers are divisible by 3? (Select all that apply)",
        options: ["123", "234", "345", "456"],
        correctAnswer: "123, 234, 345, 456",
        explanation: "All these numbers have digit sums divisible by 3. 123: 6, 234: 9, 345: 12, 456: 15. ✨",
        wrongAnswerExplanations: {
            "123": "Sum of digits in 123 is 6, which is divisible by 3.",
            "234": "Sum of digits in 234 is 9, which is divisible by 3.",
            "345": "Sum of digits in 345 is 12, which is divisible by 3.",
            "456": "Sum of digits in 456 is 15, which is divisible by 3."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t3_qm8',
        type: "mcq",
        question: "If a number is divisible by 9, it is also divisible by:",
        options: ["2", "3", "4", "6"],
        correctAnswer: "3",
        explanation: "Any number divisible by 9 is also divisible by 3, since 9 = 3 × 3. 🔢",
        wrongAnswerExplanations: {
            "2": "Divisibility by 9 doesn't guarantee divisibility by 2.",
            "4": "Divisibility by 9 doesn't guarantee divisibility by 4.",
            "6": "Divisibility by 9 guarantees divisibility by 3, but not necessarily by 2, so not by 6."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t3_qm9',
        type: "mcq",
        question: "Which of these numbers is divisible by 4, 6, and 9?",
        options: ["72", "96", "144", "216"],
        correctAnswer: "72",
        explanation: "72 is divisible by 4 (last two digits divisible by 4), by 6 (even and sum 7+2=9 divisible by 3), and by 9 (7+2=9). ✅",
        wrongAnswerExplanations: {
            "96": "96 is divisible by 4 and 6, but not by 9 (9+6=15, not divisible by 9).",
            "144": "144 is divisible by 4 and 9, but not by 6.",
            "216": "216 is divisible by 4, 6, and 9, but it's not the smallest such number."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t3_qm10',
        type: "mcq",
        question: "What is the remainder when 2345 is divided by 9?",
        options: ["0", "2", "5", "7"],
        correctAnswer: "5",
        explanation: "Sum of digits in 2345: 2+3+4+5=14. 14÷9=1 with remainder 5. So 2345÷9 has remainder 5. 🧮",
        wrongAnswerExplanations: {
            "0": "If the remainder was 0, 2345 would be divisible by 9.",
            "2": "The remainder when 2345 is divided by 9 is not 2.",
            "7": "The remainder when 2345 is divided by 9 is not 7."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t3_qm11',
        type: "mcq",
        question: "Which of these numbers is NOT divisible by 4?",
        options: ["124", "236", "348", "456"],
        correctAnswer: "236",
        explanation: "Last two digits of 236 are 36. Since 36 is not divisible by 4, 236 is not divisible by 4. ❌",
        wrongAnswerExplanations: {
            "124": "Last two digits of 124 are 24, which is divisible by 4 (24 = 4 × 6).",
            "348": "Last two digits of 348 are 48, which is divisible by 4 (48 = 4 × 12).",
            "456": "Last two digits of 456 are 56, which is divisible by 4 (56 = 4 × 14)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t3_qm12',
        type: "mcq",
        question: "A number is divisible by 6 if:",
        options: [
            "It's an even number",
            "It's divisible by 3",
            "It ends in 6",
            "It's divisible by both 2 and 3"
        ],
        correctAnswer: "It's divisible by both 2 and 3",
        explanation: "A number is divisible by 6 if it's divisible by both 2 and 3, as 6 = 2 × 3. ✅",
        wrongAnswerExplanations: {
            "It's an even number": "Being even means divisible by 2, not necessarily by 6.",
            "It's divisible by 3": "Being divisible by 3 doesn't guarantee divisibility by 6.",
            "It ends in 6": "Ending in 6 makes a number even, but doesn't guarantee divisibility by 6."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t3_qm13',
        type: "mcq",
        question: "Which digit can replace * in 234*5 to make it divisible by 9?",
        options: ["1", "3", "6", "9"],
        correctAnswer: "6",
        explanation: "For divisibility by 9, sum of digits must be divisible by 9. 2+3+4+*+5 = 14+* must be divisible by 9. So, *=4 works. 🧩",
        wrongAnswerExplanations: {
            "1": "Sum would be 2+3+4+1+5 = 15, which is not divisible by 9.",
            "3": "Sum would be 2+3+4+3+5 = 17, which is not divisible by 9.",
            "9": "Sum would be 2+3+4+9+5 = 23, which is not divisible by 9."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t3_qm14',
        type: "mcq",
        question: "Which of these numbers is divisible by both 5 and 6?",
        options: ["30", "45", "55", "75"],
        correctAnswer: "30",
        explanation: "30 ends in 0 (divisible by 5) and 3+0=3 is divisible by 3, plus it's even, making it divisible by 6. ✨",
        wrongAnswerExplanations: {
            "45": "45 ends in 5 (divisible by 5) but it's odd, so not divisible by 6.",
            "55": "55 ends in 5 (divisible by 5) but it's odd, so not divisible by 6.",
            "75": "75 ends in 5 (divisible by 5) but it's odd, so not divisible by 6."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t3_qm15',
        type: "mcq",
        question: "Which number is NOT divisible by 3?",
        options: ["252", "357", "483", "572"],
        correctAnswer: "572",
        explanation: "Sum of digits in 572: 5+7+2=14, and 14 is not divisible by 3. So 572 is not divisible by 3. ❌",
        wrongAnswerExplanations: {
            "252": "Sum of digits in 252: 2+5+2=9, which is divisible by 3.",
            "357": "Sum of digits in 357: 3+5+7=15, which is divisible by 3.",
            "483": "Sum of digits in 483: 4+8+3=15, which is divisible by 3."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t3_qm16',
        type: "mcq",
        question: "For which of these numbers is the digit sum divisible by 9?",
        options: ["2345", "3456", "4567", "5678"],
        correctAnswer: "3456",
        explanation: "Sum of digits in 3456: 3+4+5+6=18, which is divisible by 9. So 3456 is divisible by 9. ✅",
        wrongAnswerExplanations: {
            "2345": "Sum of digits in 2345: 2+3+4+5=14, which is not divisible by 9.",
            "4567": "Sum of digits in 4567: 4+5+6+7=22, which is not divisible by 9.",
            "5678": "Sum of digits in 5678: 5+6+7+8=26, which is not divisible by 9."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t3_qm17',
        type: "mcq",
        question: "Which of the following numbers is divisible by 3 but not by 9?",
        options: ["108", "123", "234", "999"],
        correctAnswer: "123",
        explanation: "Sum of digits in 123: 1+2+3=6, divisible by 3 but not by 9. So 123 is divisible by 3 but not 9. 🔢",
        wrongAnswerExplanations: {
            "108": "Sum of digits in 108: 1+0+8=9, which is divisible by both 3 and 9.",
            "234": "Sum of digits in 234: 2+3+4=9, which is divisible by both 3 and 9.",
            "999": "Sum of digits in 999: 9+9+9=27, which is divisible by both 3 and 9."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t3_qm18',
        type: "mcq",
        question: "If a number is divisible by 10, it must always be divisible by:",
        options: ["2 and 5", "2 only", "5 only", "Neither 2 nor 5"],
        correctAnswer: "2 and 5",
        explanation: "A number divisible by 10 ends in 0, making it divisible by both 2 and 5. 🔟",
        wrongAnswerExplanations: {
            "2 only": "A number divisible by 10 is also divisible by 5, not just 2.",
            "5 only": "A number divisible by 10 is also divisible by 2, not just 5.",
            "Neither 2 nor 5": "A number divisible by 10 is always divisible by both 2 and 5."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t3_qm19',
        type: "mcq",
        question: "What digit could replace * in 45*8 to make the number divisible by 6?",
        options: ["0", "2", "4", "6"],
        correctAnswer: "4",
        explanation: "45*8 must be even (it is) and divisible by 3. Sum 4+5+*+8=17+* must be divisible by 3. 17+4=21 is divisible by 3. ✅",
        wrongAnswerExplanations: {
            "0": "Sum would be 4+5+0+8 = 17, which is not divisible by 3.",
            "2": "Sum would be 4+5+2+8 = 19, which is not divisible by 3.",
            "6": "Sum would be 4+5+6+8 = 23, which is not divisible by 3."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t3_qm20',
        type: "mcq",
        question: "Which of the following is true about a number that is divisible by both 9 and 10?",
        options: [
            "It must end in 9",
            "It must end in 0",
            "Its digit sum must be 9",
            "It is also divisible by 5"
        ],
        correctAnswer: "It must end in 0",
        explanation: "A number divisible by 10 must end in 0. Since it's also divisible by 9, its digit sum must be divisible by 9. 🎯",
        wrongAnswerExplanations: {
            "It must end in 9": "A number divisible by 10 must end in 0, not 9.",
            "Its digit sum must be 9": "Its digit sum must be divisible by 9, not necessarily equal to 9.",
            "It is also divisible by 5": "While true, this is incomplete since a number divisible by 10 must end in 0."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];
