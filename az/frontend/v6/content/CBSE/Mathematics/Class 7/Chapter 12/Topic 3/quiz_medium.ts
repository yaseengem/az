// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter12\Topic3\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch12_t3_qm1',
        type: "mcq",
        question: "The sum of three consecutive even numbers is 36. Which expression can be used to find the smallest number?",
        options: ["x + (x+2) + (x+4) = 36", "x + (x+1) + (x+2) = 36", "2x + (2x+2) + (2x+4) = 36", "x + x + x = 36"],
        correctAnswer: "x + (x+2) + (x+4) = 36",
        explanation: "Three consecutive even numbers can be written as x, x+2, x+4. Their sum equals 36, so x + (x+2) + (x+4) = 36. 🔢",
        wrongAnswerExplanations: {
            "x + (x+1) + (x+2) = 36": "These are consecutive integers, not consecutive even numbers.",
            "2x + (2x+2) + (2x+4) = 36": "This expression has incorrect variables; it simplifies to 6x+6=36.",
            "x + x + x = 36": "This represents three equal numbers, not consecutive even numbers."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch12_t3_qm2',
        type: "mcq",
        question: "A rectangle has length 5 more than its width. If the width is w cm, which expression represents its perimeter?",
        options: ["2w + 10", "2w + 5", "2(w + 5)", "2(2w + 5)"],
        correctAnswer: "2(2w + 5)",
        explanation: "Length = w + 5, perimeter = 2(length + width) = 2((w+5) + w) = 2(2w+5). 📏",
        wrongAnswerExplanations: {
            "2w + 10": "This only accounts for two sides, not all four sides of the rectangle.",
            "2w + 5": "This is an incomplete calculation that doesn't represent the entire perimeter.",
            "2(w + 5)": "This represents twice the length, not the complete perimeter."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch12_t3_qm3',
        type: "mcq",
        question: "If a number is tripled and then increased by 7, the result is 25. Which equation can be used to find the original number?",
        options: ["3x + 7 = 25", "3 + x + 7 = 25", "3(x + 7) = 25", "x/3 + 7 = 25"],
        correctAnswer: "3x + 7 = 25",
        explanation: "Tripling a number means 3x, and increasing by 7 means adding 7. So the equation is 3x + 7 = 25. 🧮",
        wrongAnswerExplanations: {
            "3 + x + 7 = 25": "This represents adding 3 to the number, not tripling it.",
            "3(x + 7) = 25": "This represents tripling (x+7), not tripling x and then adding 7.",
            "x/3 + 7 = 25": "This represents dividing by 3, not multiplying by 3."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch12_t3_qm4',
        type: "mcq",
        question: "A taxi charges ₹50 for the first kilometer and ₹10 for each additional kilometer. Which expression represents the cost for a journey of d kilometers (where d > 1)?",
        options: ["50d + 10", "10d + 40", "50 + 10d", "50 + 10(d - 1)"],
        correctAnswer: "50 + 10(d - 1)",
        explanation: "First km costs ₹50, remaining (d-1) km cost ₹10 each. Total: ₹50 + ₹10(d-1). 🚕",
        wrongAnswerExplanations: {
            "50d + 10": "This charges ₹50 for each kilometer, not just the first.",
            "10d + 40": "This gives the wrong base fare and doesn't account for the different first-kilometer charge.",
            "50 + 10d": "This charges ₹10 for each kilometer including the first, which is incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch12_t3_qm5',
        type: "mcq",
        question: "The sum of two consecutive integers is equal to three times the smaller number. Which equation represents this situation?",
        options: ["x + (x+1) = 3x", "(x-1) + x = 3x", "x + (x+1) = 3(x+1)", "2x + 1 = 3x"],
        correctAnswer: "x + (x+1) = 3x",
        explanation: "Let x = smaller number, x+1 = larger number. Sum = 3 × smaller, so x + (x+1) = 3x. 🔢",
        wrongAnswerExplanations: {
            "(x-1) + x = 3x": "This incorrectly makes x the larger number, not the smaller.",
            "x + (x+1) = 3(x+1)": "This sets the sum equal to 3 times the larger number, not the smaller.",
            "2x + 1 = 3x": "While algebraically equivalent to the correct answer, it doesn't clearly represent the word problem."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch12_t3_qm6',
        type: "mcq",
        question: "A batch of cookies requires 2 cups of flour and 3 cups of sugar. If you have f cups of flour and s cups of sugar, what is the maximum number of batches you can make?",
        options: ["(f + s)/5", "min(f/2, s/3)", "2f + 3s", "f/2 + s/3"],
        correctAnswer: "min(f/2, s/3)",
        explanation: "You can make f/2 batches with flour or s/3 with sugar. The limiting ingredient determines the maximum, so min(f/2, s/3). 🍪",
        wrongAnswerExplanations: {
            "(f + s)/5": "This incorrectly adds the ingredients before determining the number of batches.",
            "2f + 3s": "This calculates how many cups are needed for one batch times what you have, not batches possible.",
            "f/2 + s/3": "This adds the individual batch capabilities, which is meaningless here."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch12_t3_qm7',
        type: "mcq",
        question: "The sum of a number and its square is 42. Which equation represents this?",
        options: ["x + x² = 42", "x + x + x = 42", "2x = 42", "x² = 42"],
        correctAnswer: "x + x² = 42",
        explanation: "If x is the number, then 'a number and its square' means x + x², which equals 42. 🧮",
        wrongAnswerExplanations: {
            "x + x + x = 42": "This represents three times the number, not the number plus its square.",
            "2x = 42": "This represents twice the number, not the number plus its square.",
            "x² = 42": "This represents only the square of the number, not the number plus its square."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch12_t3_qm8',
        type: "mcq",
        question: "Mr. Sharma's age is three times his son's age. In 5 years, his age will be twice his son's age. If the son's current age is x years, which equation finds x?",
        options: ["3x + 5 = 2(x + 5)", "3x = 2x + 5", "3(x + 5) = 2x + 10", "3x = 2(x + 5)"],
        correctAnswer: "3x + 5 = 2(x + 5)",
        explanation: "Current: father = 3x, son = x. In 5 years: father = 3x+5, son = x+5. Then 3x+5 = 2(x+5). 👨‍👦",
        wrongAnswerExplanations: {
            "3x = 2x + 5": "This incorrectly attempts to relate current ages only.",
            "3(x + 5) = 2x + 10": "This incorrectly calculates future ages.",
            "3x = 2(x + 5)": "This incorrectly mixes current and future ages without proper adjustment."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch12_t3_qm9',
        type: "mcq",
        question: "A fruit seller buys mangoes at ₹x per dozen and sells them at ₹(x+24) per dozen. What is the profit percentage?",
        options: ["24%", "100%", "(24/x)%", "(24/x) × 100%"],
        correctAnswer: "(24/x) × 100%",
        explanation: "Profit% = (Profit/Cost) × 100% = ((x+24-x)/x) × 100% = (24/x) × 100%. 🥭",
        wrongAnswerExplanations: {
            "24%": "This assumes x = 100, which isn't necessarily true.",
            "100%": "This assumes the selling price is double the cost price, which isn't true.",
            "(24/x)%": "This is missing the multiplication by 100 to convert to percentage."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch12_t3_qm10',
        type: "mcq",
        question: "If three times a number is added to seven, the result is twice the number plus seventeen. Which equation represents this?",
        options: ["3x + 7 = 2x + 17", "3x - 7 = 2x + 17", "3(x + 7) = 2x + 17", "3x + 7 = 2(x + 17)"],
        correctAnswer: "3x + 7 = 2x + 17",
        explanation: "Three times the number (3x) plus seven equals twice the number (2x) plus seventeen, so 3x + 7 = 2x + 17. 🔢",
        wrongAnswerExplanations: {
            "3x - 7 = 2x + 17": "This subtracts 7 instead of adding it.",
            "3(x + 7) = 2x + 17": "This multiplies the sum (x+7) by 3, not just the number.",
            "3x + 7 = 2(x + 17)": "This multiplies (x+17) by 2, not just the number."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch12_t3_qm11',
        type: "mcq",
        question: "A number is equal to 1/2 of itself plus 9. Which equation can be used to find the number?",
        options: ["x = x/2 + 9", "x = 2x + 9", "x = x/2 - 9", "x = 9 - x/2"],
        correctAnswer: "x = x/2 + 9",
        explanation: "If x is the number, then it equals half of itself plus 9, which gives us x = x/2 + 9. 🧮",
        wrongAnswerExplanations: {
            "x = 2x + 9": "This states the number equals twice itself plus 9, not half of itself plus 9.",
            "x = x/2 - 9": "This subtracts 9 instead of adding it.",
            "x = 9 - x/2": "This incorrectly arranges the equation with subtraction."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch12_t3_qm12',
        type: "mcq",
        question: "The width of a rectangle is 3 cm less than its length. If the area of the rectangle is 40 cm², which equation gives the length?",
        options: ["x(x-3) = 40", "x(x+3) = 40", "x - 3 = 40", "x - 3x = 40"],
        correctAnswer: "x(x-3) = 40",
        explanation: "If length = x cm, width = (x-3) cm. Area = length × width = x(x-3) = 40 cm². 📏",
        wrongAnswerExplanations: {
            "x(x+3) = 40": "This incorrectly adds 3 to the length instead of subtracting from it.",
            "x - 3 = 40": "This represents the difference between length and width, not the area.",
            "x - 3x = 40": "This is an incorrect representation that doesn't match the problem."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch12_t3_qm13',
        type: "mcq",
        question: "The perimeter of a square exceeds twice its area by 4 units. Which equation finds the side length of the square?",
        options: ["4x = 2x² + 4", "4x - 4 = 2x²", "4x - 2x² = 4", "4x = 2x² - 4"],
        correctAnswer: "4x - 2x² = 4",
        explanation: "For square with side x: perimeter = 4x, area = x². So 4x - 2x² = 4. ⬜",
        wrongAnswerExplanations: {
            "4x = 2x² + 4": "This rearranges the equation incorrectly to 4x - 2x² = 4.",
            "4x - 4 = 2x²": "This incorrectly rearranges the equation.",
            "4x = 2x² - 4": "This incorrectly states that perimeter equals twice area minus 4."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch12_t3_qm14',
        type: "mcq",
        question: "At a school, the ratio of boys to girls is 3:2. If there are g girls, which expression represents the total number of students?",
        options: ["3g + 2", "3g", "2g", "5g/2"],
        correctAnswer: "5g/2",
        explanation: "If girls = g, then boys = (3/2)g. Total students = g + (3/2)g = (5/2)g. 👨‍👩‍👧‍👦",
        wrongAnswerExplanations: {
            "3g + 2": "This doesn't correctly apply the ratio to find the number of boys.",
            "3g": "This incorrectly assumes girls are 1/3 of students, not 2/5.",
            "2g": "This incorrectly assumes the ratio 3:2 means boys = 2g."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch12_t3_qm15',
        type: "mcq",
        question: "A car travels at a constant speed of v km/h. After traveling for 2 hours, it increases speed by 10 km/h and travels for 3 more hours. Which expression gives the total distance covered?",
        options: ["5v + 10", "2v + 3(v+10)", "5v + 30", "2v + 3v + 10"],
        correctAnswer: "2v + 3(v+10)",
        explanation: "First 2 hours at v km/h: 2v km. Next 3 hours at (v+10) km/h: 3(v+10) km. Total: 2v + 3(v+10) km. 🚗",
        wrongAnswerExplanations: {
            "5v + 10": "This incorrectly adds the speed increase to the total distance once.",
            "5v + 30": "This incorrectly adds the speed increase multiplied by 3 to 5v.",
            "2v + 3v + 10": "This doesn't correctly account for the increased speed in the last 3 hours."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch12_t3_qm16',
        type: "mcq",
        question: "If the sum of three consecutive integers is 5 more than twice the largest of the three integers, which equation represents this?",
        options: ["(x-1) + x + (x+1) = 2(x+1) + 5", "x + (x+1) + (x+2) = 2(x+2) + 5", "(x-1) + x + (x+1) = 2(x-1) + 5", "x + (x+1) + (x+2) = 2x + 5"],
        correctAnswer: "x + (x+1) + (x+2) = 2(x+2) + 5",
        explanation: "With consecutive integers x, x+1, x+2, we get x + (x+1) + (x+2) = 2(x+2) + 5. 🔢",
        wrongAnswerExplanations: {
            "(x-1) + x + (x+1) = 2(x+1) + 5": "This doesn't use the correct largest number in the right side.",
            "(x-1) + x + (x+1) = 2(x-1) + 5": "This uses the smallest number on the right side instead of the largest.",
            "x + (x+1) + (x+2) = 2x + 5": "This incorrectly uses 2x instead of 2(x+2) on the right side."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch12_t3_qm17',
        type: "mcq",
        question: "A bag contains x red marbles and y blue marbles. After adding 5 red and 3 blue marbles, there are twice as many red as blue marbles. Which equation represents this?",
        options: ["x + 5 = 2(y + 3)", "x + y + 8 = 2(y + 3)", "(x + 5) + (y + 3) = 2(y + 3)", "x + 5 = 2y + 6"],
        correctAnswer: "x + 5 = 2(y + 3)",
        explanation: "After adding marbles: red = x+5, blue = y+3. Red is twice blue, so x+5 = 2(y+3). 🔴🔵",
        wrongAnswerExplanations: {
            "x + y + 8 = 2(y + 3)": "This adds red and blue marbles together, which doesn't represent the relationship.",
            "(x + 5) + (y + 3) = 2(y + 3)": "This adds both types of marbles instead of comparing them.",
            "x + 5 = 2y + 6": "While algebraically equivalent to the correct answer, the problem asks for an equation that directly represents the situation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch12_t3_qm18',
        type: "mcq",
        question: "Ritu's age is 5 years less than twice Sita's age. If Ritu is r years old, which expression gives Sita's age?",
        options: ["2r - 5", "r/2 + 5", "(r + 5)/2", "2r + 5"],
        correctAnswer: "(r + 5)/2",
        explanation: "If Ritu is r years old, and Ritu = 2×Sita - 5, then Sita = (r + 5)/2. 👧👧",
        wrongAnswerExplanations: {
            "2r - 5": "This gives Ritu's age in terms of Sita's, not Sita's in terms of Ritu's.",
            "r/2 + 5": "This incorrectly adds 5 after dividing by 2.",
            "2r + 5": "This incorrectly adds 5 instead of subtracting, and doubles Ritu's age."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch12_t3_qm19',
        type: "mcq",
        question: "A shopkeeper marks up the price of an item by 20% and then offers a discount of 10%. If the cost price is ₹c, which expression represents the final selling price?",
        options: ["1.1c", "0.9c", "1.08c", "1.32c"],
        correctAnswer: "1.08c",
        explanation: "Marked price = 1.2c. After 10% discount: final price = 1.2c × 0.9 = 1.08c. 💰",
        wrongAnswerExplanations: {
            "1.1c": "This only accounts for the 10% discount, not the 20% markup.",
            "0.9c": "This only applies the 10% discount to the original price, ignoring the markup.",
            "1.32c": "This incorrectly adds the percentages as 1c + 0.2c + 0.1c = 1.3c."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch12_t3_qm20',
        type: "mcq",
        question: "The difference between the squares of two consecutive integers is 13. Which equation can be used to find the integers?",
        options: ["(x+1)² - x² = 13", "x² - (x+1)² = 13", "(x+1)² - (x-1)² = 13", "x² - (x-1)² = 13"],
        correctAnswer: "(x+1)² - x² = 13",
        explanation: "For consecutive integers x and x+1, the equation is (x+1)² - x² = 13. 📊",
        wrongAnswerExplanations: {
            "x² - (x+1)² = 13": "This gives a negative result since (x+1)² > x², contradicting the given difference of 13.",
            "(x+1)² - (x-1)² = 13": "This represents non-consecutive integers x-1 and x+1.",
            "x² - (x-1)² = 13": "This doesn't represent consecutive integers in the correct order."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];
