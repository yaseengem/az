import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch10_t1_qe1',
        type: "mcq",
        question: "What comes next in the pattern: 2, 4, 6, 8, ...?",
        options: ["9", "10", "12", "14"],
        correctAnswer: "10",
        explanation: "This is a pattern of even numbers increasing by 2 each time. After 8, the next even number is 10. 🔢",
        wrongAnswerExplanations: {
            "9": "9 is not part of the pattern because it's not an even number.",
            "12": "The pattern increases by 2 each time, not by 4, so after 8 comes 10, not 12.",
            "14": "The pattern increases by 2 each time, so after 8 comes 10, not 14."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch10_t1_qe2',
        type: "mcq",
        question: "Which shape would come next in this pattern? ○, □, △, ○, □, ...?",
        options: ["○", "□", "△", "⬡"],
        correctAnswer: "△",
        explanation: "The pattern repeats as circle, square, triangle. After square, the next shape should be triangle. 📐",
        wrongAnswerExplanations: {
            "○": "The pattern is circle, square, triangle, so after square should come triangle, not circle.",
            "□": "The pattern is circle, square, triangle, so after square should come triangle, not another square.",
            "⬡": "The pattern is circle, square, triangle, not circle, square, triangle, hexagon."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch10_t1_qe3',
        type: "mcq",
        question: "What is the missing number in this pattern? 5, 10, 15, ___, 25, 30",
        options: ["18", "20", "22", "24"],
        correctAnswer: "20",
        explanation: "The numbers increase by 5 each time (5 × 1, 5 × 2, 5 × 3, etc.). After 15, adding 5 gives 20. 🧮",
        wrongAnswerExplanations: {
            "18": "The pattern increases by 5 each time, so after 15 comes 20, not 18.",
            "22": "The pattern increases by 5 each time, so after 15 comes 20, not 22.",
            "24": "The pattern increases by 5 each time, so after 15 comes 20, not 24."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch10_t1_qe4',
        type: "mcq",
        question: "What comes next in this pattern? 1, 3, 5, 7, ...",
        options: ["8", "9", "10", "11"],
        correctAnswer: "9",
        explanation: "This is a pattern of odd numbers. Each number increases by 2, so after 7 comes 9. ➕",
        wrongAnswerExplanations: {
            "8": "8 is an even number, but the pattern shows odd numbers only.",
            "10": "10 is an even number, but the pattern shows odd numbers only.",
            "11": "The pattern increases by 2 each time, so after 7 comes 9, not 11."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch10_t1_qe5',
        type: "mcq",
        question: "What is the rule for this number pattern? 2, 4, 8, 16, 32",
        options: ["Add 2", "Multiply by 2", "Add 4", "Subtract 2"],
        correctAnswer: "Multiply by 2",
        explanation: "Each number is multiplied by 2 to get the next number: 2 × 2 = 4, 4 × 2 = 8, 8 × 2 = 16, 16 × 2 = 32. ✖️",
        wrongAnswerExplanations: {
            "Add 2": "If we add 2, we would get 2, 4, 6, 8, 10, which is not the given pattern.",
            "Add 4": "If we add 4, we would get 2, 6, 10, 14, 18, which is not the given pattern.",
            "Subtract 2": "If we subtract 2, the numbers would decrease, not increase as shown in the pattern."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl4_ch10_t1_qe6',
        type: "mcq",
        question: "Which pattern shows counting by 3s?",
        options: ["2, 4, 6, 8, 10", "3, 6, 9, 12, 15", "5, 10, 15, 20, 25", "1, 4, 7, 10, 13"],
        correctAnswer: "3, 6, 9, 12, 15",
        explanation: "Counting by 3s means adding 3 each time: 3, 3+3=6, 6+3=9, 9+3=12, 12+3=15. 🔢",
        wrongAnswerExplanations: {
            "2, 4, 6, 8, 10": "This pattern shows counting by 2s, not 3s.",
            "5, 10, 15, 20, 25": "This pattern shows counting by 5s, not 3s.",
            "1, 4, 7, 10, 13": "This pattern starts with 1 and adds 3 each time, which is different from counting by 3s."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch10_t1_qe7',
        type: "mcq",
        question: "Complete the pattern: red, blue, green, red, blue, green, red, ...",
        options: ["red", "blue", "green", "yellow"],
        correctAnswer: "blue",
        explanation: "The pattern repeats: red, blue, green. After red comes blue in the pattern. 🎨",
        wrongAnswerExplanations: {
            "red": "The pattern is red, blue, green, so after red comes blue, not another red.",
            "green": "The pattern is red, blue, green, so after red comes blue, not green.",
            "yellow": "Yellow is not part of the pattern at all. The pattern is red, blue, green."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch10_t1_qe8',
        type: "mcq",
        question: "What comes next in the pattern? 2, 5, 8, 11, ...",
        options: ["13", "14", "15", "12"],
        correctAnswer: "14",
        explanation: "Each number increases by 3: 2+3=5, 5+3=8, 8+3=11, 11+3=14. 📊",
        wrongAnswerExplanations: {
            "13": "The pattern increases by 3 each time, so after 11 comes 14, not 13.",
            "15": "The pattern increases by 3 each time, so after 11 comes 14, not 15.",
            "12": "The pattern increases by 3 each time, so after 11 comes 14, not 12."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch10_t1_qe9',
        type: "mcq",
        question: "Which shape pattern is correct?",
        options: ["△, △, △, □, □, □", "○, □, △, ○, △, □", "○, □, △, ○, □, △", "△, □, △, □, △, □"],
        correctAnswer: "○, □, △, ○, □, △",
        explanation: "The pattern ○, □, △ repeats once. A correct pattern should repeat the same sequence. 🔄",
        wrongAnswerExplanations: {
            "△, △, △, □, □, □": "This shows three triangles followed by three squares, which is not a repeating pattern.",
            "○, □, △, ○, △, □": "This doesn't correctly repeat the pattern. The first three shapes are ○, □, △, but then it changes.",
            "△, □, △, □, △, □": "This is an alternating pattern of triangle and square, not the pattern described."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl4_ch10_t1_qe10',
        type: "mcq",
        question: "What is the missing number? 10, 20, 30, ___, 50",
        options: ["35", "40", "45", "60"],
        correctAnswer: "40",
        explanation: "The pattern increases by 10 each time. After 30, adding 10 gives 40. 🔢",
        wrongAnswerExplanations: {
            "35": "The pattern increases by 10 each time, not by 5, so after 30 comes 40, not 35.",
            "45": "The pattern increases by 10 each time, so after 30 comes 40, not 45.",
            "60": "60 would come after 50 in this pattern, not between 30 and 50."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch10_t1_qe11',
        type: "mcq",
        question: "Which number pattern starts at 5 and adds 5 each time?",
        options: ["5, 6, 7, 8, 9", "5, 10, 15, 20, 25", "0, 5, 10, 15, 20", "1, 6, 11, 16, 21"],
        correctAnswer: "5, 10, 15, 20, 25",
        explanation: "The pattern starts at 5 and adds 5 each time: 5, 5+5=10, 10+5=15, 15+5=20, 20+5=25. 📈",
        wrongAnswerExplanations: {
            "5, 6, 7, 8, 9": "This pattern starts at 5 but adds 1 each time, not 5.",
            "0, 5, 10, 15, 20": "This pattern starts at 0, not 5, though it does add 5 each time.",
            "1, 6, 11, 16, 21": "This pattern starts at 1 and adds 5 each time, not starting at 5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl4_ch10_t1_qe12',
        type: "mcq",
        question: "What comes next? ●●, ●●●, ●●●●, _____",
        options: ["●", "●●", "●●●", "●●●●●"],
        correctAnswer: "●●●●●",
        explanation: "The pattern shows an increasing number of dots: 2, 3, 4, so next would be 5 dots. 🔵",
        wrongAnswerExplanations: {
            "●": "The pattern shows an increase in dots, not a decrease.",
            "●●": "The pattern already had 2 dots at the beginning, and it's increasing, not repeating.",
            "●●●": "The pattern already had 3 dots in the second position, and it's increasing, not repeating."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch10_t1_qe13',
        type: "mcq",
        question: "Which of these shows a pattern that increases by 2 each time?",
        options: ["1, 2, 3, 4", "1, 3, 5, 7", "2, 4, 8, 16", "10, 8, 6, 4"],
        correctAnswer: "1, 3, 5, 7",
        explanation: "Each number is 2 more than the previous: 1+2=3, 3+2=5, 5+2=7. 🧮",
        wrongAnswerExplanations: {
            "1, 2, 3, 4": "This pattern increases by 1 each time, not 2.",
            "2, 4, 8, 16": "This pattern doubles each time (multiplies by 2), rather than adding 2.",
            "10, 8, 6, 4": "This pattern decreases by 2 each time, not increases."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch10_t1_qe14',
        type: "mcq",
        question: "What is the pattern in the number sequence: 3, 8, 13, 18, 23?",
        options: ["Add 4", "Add 5", "Add 6", "Multiply by 2"],
        correctAnswer: "Add 5",
        explanation: "Each number increases by 5: 3+5=8, 8+5=13, 13+5=18, 18+5=23. ➕",
        wrongAnswerExplanations: {
            "Add 4": "If we add 4, we get 3, 7, 11, 15, 19, which is not the given pattern.",
            "Add 6": "If we add 6, we get 3, 9, 15, 21, 27, which is not the given pattern.",
            "Multiply by 2": "If we multiply by 2, we get 3, 6, 12, 24, 48, which is not the given pattern."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl4_ch10_t1_qe15',
        type: "mcq",
        question: "Complete the pattern: 25, 20, 15, ___, 5",
        options: ["10", "12", "13", "14"],
        correctAnswer: "10",
        explanation: "The pattern decreases by 5 each time: 25-5=20, 20-5=15, 15-5=10, 10-5=5. 📉",
        wrongAnswerExplanations: {
            "12": "The pattern decreases by 5 each time, not by 3, so after 15 comes 10, not 12.",
            "13": "The pattern decreases by 5 each time, not by 2, so after 15 comes 10, not 13.",
            "14": "The pattern decreases by 5 each time, not by 1, so after 15 comes 10, not 14."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch10_t1_qe16',
        type: "mcq",
        question: "Which pattern follows the rule 'start at 3 and add 4 each time'?",
        options: ["3, 6, 9, 12", "3, 7, 11, 15", "3, 5, 7, 9", "4, 8, 12, 16"],
        correctAnswer: "3, 7, 11, 15",
        explanation: "Starting at 3 and adding 4 each time gives: 3, 3+4=7, 7+4=11, 11+4=15. 🧩",
        wrongAnswerExplanations: {
            "3, 6, 9, 12": "This pattern adds 3 each time, not 4.",
            "3, 5, 7, 9": "This pattern adds 2 each time, not 4.",
            "4, 8, 12, 16": "This pattern starts at 4, not 3, and adds 4 each time."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl4_ch10_t1_qe17',
        type: "mcq",
        question: "What's the next shape in the pattern? ⬡, ⬡, △, △, ⬡, ⬡, △, △, ⬡, ⬡, ...",
        options: ["⬡", "△", "○", "□"],
        correctAnswer: "△",
        explanation: "The pattern has two hexagons followed by two triangles, repeating. After two hexagons, comes a triangle. 🔶",
        wrongAnswerExplanations: {
            "⬡": "The pattern shows two hexagons, then two triangles. After two hexagons, comes a triangle, not another hexagon.",
            "○": "Circles aren't part of this pattern at all.",
            "□": "Squares aren't part of this pattern at all."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl4_ch10_t1_qe18',
        type: "mcq",
        question: "Find the missing number: 2, 6, 10, 14, ___, 22",
        options: ["16", "18", "20", "24"],
        correctAnswer: "18",
        explanation: "The pattern adds 4 each time: 2+4=6, 6+4=10, 10+4=14, 14+4=18, 18+4=22. 🔍",
        wrongAnswerExplanations: {
            "16": "The pattern adds 4 each time, so after 14 comes 18, not 16.",
            "20": "The pattern adds 4 each time, so after 14 comes 18, not 20.",
            "24": "24 would come after 22 in this pattern, not between 14 and 22."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch10_t1_qe19',
        type: "mcq",
        question: "What comes next in this counting pattern? 4, 8, 12, 16, ...",
        options: ["18", "19", "20", "24"],
        correctAnswer: "20",
        explanation: "This is counting by 4s: 4, 8, 12, 16, 20. Each number increases by 4. 🔢",
        wrongAnswerExplanations: {
            "18": "The pattern adds 4 each time, so after 16 comes 20, not 18.",
            "19": "The pattern adds 4 each time, so after 16 comes 20, not 19.",
            "24": "24 would come after 20 in this pattern, not directly after 16."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch10_t1_qe20',
        type: "mcq",
        question: "Which of these is NOT a repeating pattern?",
        options: ["ABABAB", "12121212", "123123123", "123456"],
        correctAnswer: "123456",
        explanation: "A repeating pattern has a sequence that repeats. 123456 doesn't repeat any sequence. 🔄",
        wrongAnswerExplanations: {
            "ABABAB": "This is a repeating pattern with 'AB' repeating three times.",
            "12121212": "This is a repeating pattern with '12' repeating four times.",
            "123123123": "This is a repeating pattern with '123' repeating three times."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    }
];
