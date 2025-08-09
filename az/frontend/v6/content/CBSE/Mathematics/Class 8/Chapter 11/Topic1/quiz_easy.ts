// filepath: content/CBSE/Mathematics/Class 8/Chapter11/Topic1/quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch11_t1_qe1',
        type: "mcq",
        question: "In a direct proportion, if x increases, what happens to y?",
        options: ["y increases", "y decreases", "y remains constant", "y becomes zero"],
        correctAnswer: "y increases",
        explanation: "In a direct proportion, when one quantity increases, the other quantity also increases in the same ratio. For example, as time spent working increases, the payment also increases. 📈",
        wrongAnswerExplanations: {
            "y decreases": "This describes inverse proportion, not direct proportion.",
            "y remains constant": "In direct proportion, y changes when x changes.",
            "y becomes zero": "y only becomes zero if x is zero in direct proportion."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch11_t1_qe2',
        type: "mcq",
        question: "If 2 pencils cost ₹10, how much will 6 pencils cost in the same shop?",
        options: ["₹20", "₹30", "₹25", "₹15"],
        correctAnswer: "₹30",
        explanation: "Since cost is directly proportional to quantity, if 2 pencils cost ₹10, then 6 pencils (3 times more) will cost 3 × ₹10 = ₹30. 📝",
        wrongAnswerExplanations: {
            "₹20": "This would only be correct if 4 pencils were bought.",
            "₹25": "This is not proportional to the original ratio.",
            "₹15": "This is not proportional to the original ratio."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch11_t1_qe3',
        type: "mcq",
        question: "Which of these represents a direct proportion? 📊",
        options: [
            "Distance covered and time taken at constant speed",
            "Number of workers and time taken to complete a job",
            "Speed and time taken to cover a fixed distance",
            "Area of a circle and its perimeter"
        ],
        correctAnswer: "Distance covered and time taken at constant speed",
        explanation: "At constant speed, the distance covered is directly proportional to time taken. If time doubles, distance also doubles. 🚗",
        wrongAnswerExplanations: {
            "Number of workers and time taken to complete a job": "This is inverse proportion - more workers means less time.",
            "Speed and time taken to cover a fixed distance": "This is inverse proportion.",
            "Area of a circle and its perimeter": "This is not a direct proportion as area ∝ r² while perimeter ∝ r."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch11_t1_qe4',
        type: "mcq",
        question: "If y ∝ x, and y = 15 when x = 3, what is y when x = 1?",
        options: ["5", "45", "3", "9"],
        correctAnswer: "5",
        explanation: "In direct proportion, y/x is constant. If y = 15 when x = 3, then y/x = 5. Therefore, when x = 1, y = 5. 🧮",
        wrongAnswerExplanations: {
            "45": "This would be if we multiplied instead of divided.",
            "3": "This is not the correct proportional value.",
            "9": "This is not the correct proportional value."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch11_t1_qe5',
        type: "mcq",
        question: "In a recipe, if 2 cups of flour needs ½ cup of sugar, how much sugar is needed for 6 cups of flour?",
        options: ["1½ cups", "2 cups", "3 cups", "1 cup"],
        correctAnswer: "1½ cups",
        explanation: "Since ingredients in a recipe are directly proportional, if flour triples (2 → 6), sugar also triples (½ → 1½). 🧁",
        wrongAnswerExplanations: {
            "2 cups": "This would be for 8 cups of flour.",
            "3 cups": "This is too much - it would be for 12 cups of flour.",
            "1 cup": "This would be for 4 cups of flour."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch11_t1_qe6',
        type: "mcq",
        question: "What is the symbol used to represent direct proportion?",
        options: ["∝", "=", "≠", "≈"],
        correctAnswer: "∝",
        explanation: "The symbol ∝ means 'is directly proportional to'. For example, if y ∝ x, it means y is directly proportional to x. 📝",
        wrongAnswerExplanations: {
            "=": "This means equals to, not proportional to.",
            "≠": "This means not equal to.",
            "≈": "This means approximately equal to."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch11_t1_qe7',
        type: "mcq",
        question: "If the side of a square doubles, what happens to its perimeter?",
        options: ["Doubles", "Triples", "Becomes four times", "Remains the same"],
        correctAnswer: "Doubles",
        explanation: "Perimeter of a square is directly proportional to its side length. If side doubles, perimeter also doubles. For example, if side is 4 cm, perimeter is 16 cm; if side is 8 cm, perimeter is 32 cm. ⬜",
        wrongAnswerExplanations: {
            "Triples": "This is incorrect. Perimeter increases in the same ratio as the side.",
            "Becomes four times": "This happens to the area, not the perimeter.",
            "Remains the same": "Perimeter changes when side length changes."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch11_t1_qe8',
        type: "mcq",
        question: "A car travels 60 km in 2 hours at constant speed. How far will it travel in 5 hours?",
        options: ["150 km", "120 km", "180 km", "100 km"],
        correctAnswer: "150 km",
        explanation: "At constant speed, distance is directly proportional to time. If time becomes 2.5 times (2 → 5), distance also becomes 2.5 times (60 → 150). 🚗",
        wrongAnswerExplanations: {
            "120 km": "This would be for 4 hours of travel.",
            "180 km": "This would be for 6 hours of travel.",
            "100 km": "This is not proportional to the original ratio."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch11_t1_qe9',
        type: "mcq",
        question: "If 3 tickets cost ₹150, what is the cost of 1 ticket?",
        options: ["₹50", "₹45", "₹60", "₹75"],
        correctAnswer: "₹50",
        explanation: "Since cost is directly proportional to number of tickets, divide total cost by number of tickets: ₹150 ÷ 3 = ₹50. 🎟️",
        wrongAnswerExplanations: {
            "₹45": "This is not the correct proportional value.",
            "₹60": "This is more than the proportional value.",
            "₹75": "This is not the correct proportional value."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch11_t1_qe10',
        type: "mcq",
        question: "In a direct proportion, if one quantity becomes 3 times, what happens to the other quantity?",
        options: ["Becomes 3 times", "Becomes ⅓ times", "Becomes 9 times", "No change"],
        correctAnswer: "Becomes 3 times",
        explanation: "In direct proportion, if one quantity becomes 3 times, the other quantity also becomes 3 times. The ratio remains constant. 📈",
        wrongAnswerExplanations: {
            "Becomes ⅓ times": "This happens in inverse proportion, not direct proportion.",
            "Becomes 9 times": "This would be squaring the ratio, which is incorrect.",
            "No change": "In direct proportion, both quantities change by the same factor."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch11_t1_qe11',
        type: "mcq",
        question: "If 4 identical books weigh 2 kg, how much do 10 such books weigh?",
        options: ["5 kg", "4 kg", "6 kg", "3 kg"],
        correctAnswer: "5 kg",
        explanation: "Weight is directly proportional to number of books. If books increase 2.5 times (4 → 10), weight also increases 2.5 times (2 → 5). 📚",
        wrongAnswerExplanations: {
            "4 kg": "This would be for 8 books.",
            "6 kg": "This would be for 12 books.",
            "3 kg": "This would be for 6 books."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch11_t1_qe12',
        type: "mcq",
        question: "Which of these equations represents a direct proportion?",
        options: ["y = kx", "y = k/x", "y = x + k", "y = x - k"],
        correctAnswer: "y = kx",
        explanation: "In direct proportion, one quantity equals the other quantity multiplied by a constant k. The equation y = kx represents this relationship. 📊",
        wrongAnswerExplanations: {
            "y = k/x": "This represents inverse proportion.",
            "y = x + k": "This is a linear relationship but not a direct proportion.",
            "y = x - k": "This is a linear relationship but not a direct proportion."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch11_t1_qe13',
        type: "mcq",
        question: "A printer prints 20 pages in 4 minutes at constant speed. How many pages will it print in 1 minute?",
        options: ["5 pages", "4 pages", "6 pages", "10 pages"],
        correctAnswer: "5 pages",
        explanation: "Pages printed is directly proportional to time. In 4 minutes it prints 20 pages, so in 1 minute it prints 20 ÷ 4 = 5 pages. 🖨️",
        wrongAnswerExplanations: {
            "4 pages": "This is not the correct proportional value.",
            "6 pages": "This would mean 24 pages in 4 minutes.",
            "10 pages": "This would mean 40 pages in 4 minutes."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch11_t1_qe14',
        type: "mcq",
        question: "If y ∝ x and y = 8 when x = 4, what is the constant of proportionality (k)?",
        options: ["2", "4", "8", "16"],
        correctAnswer: "2",
        explanation: "In direct proportion y = kx, k = y/x. Here, k = 8/4 = 2. This k remains constant for all values of x and y. 🧮",
        wrongAnswerExplanations: {
            "4": "This is the value of x, not k.",
            "8": "This is the value of y, not k.",
            "16": "This is not the correct value of k."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch11_t1_qe15',
        type: "mcq",
        question: "In a map, if 1 cm represents 100 km, how many km does 5 cm represent?",
        options: ["500 km", "400 km", "300 km", "200 km"],
        correctAnswer: "500 km",
        explanation: "Distance on map is directly proportional to actual distance. If 1 cm → 100 km, then 5 cm → 5 × 100 = 500 km. 🗺️",
        wrongAnswerExplanations: {
            "400 km": "This would be for 4 cm on the map.",
            "300 km": "This would be for 3 cm on the map.",
            "200 km": "This would be for 2 cm on the map."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch11_t1_qe16',
        type: "mcq",
        question: "If the radius of a circle doubles, what happens to its circumference?",
        options: ["Doubles", "Becomes half", "Becomes four times", "No change"],
        correctAnswer: "Doubles",
        explanation: "Circumference is directly proportional to radius (C = 2πr). If radius doubles, circumference also doubles. ⭕",
        wrongAnswerExplanations: {
            "Becomes half": "This would happen in inverse proportion.",
            "Becomes four times": "This happens to the area, not the circumference.",
            "No change": "Circumference changes when radius changes."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch11_t1_qe17',
        type: "mcq",
        question: "A tap fills 30 liters in 6 minutes at constant rate. How many liters will it fill in 9 minutes?",
        options: ["45 liters", "40 liters", "50 liters", "35 liters"],
        correctAnswer: "45 liters",
        explanation: "Volume of water is directly proportional to time. If time increases 1.5 times (6 → 9), volume also increases 1.5 times (30 → 45). 🚰",
        wrongAnswerExplanations: {
            "40 liters": "This is not proportional to the original ratio.",
            "50 liters": "This would be for 10 minutes.",
            "35 liters": "This is not proportional to the original ratio."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch11_t1_qe18',
        type: "mcq",
        question: "Which graph represents a direct proportion?",
        options: [
            "A straight line passing through origin",
            "A curved line",
            "A straight line not passing through origin",
            "A horizontal line"
        ],
        correctAnswer: "A straight line passing through origin",
        explanation: "Direct proportion is represented by a straight line passing through the origin (0,0), showing that when one quantity is zero, the other is also zero. 📈",
        wrongAnswerExplanations: {
            "A curved line": "This could represent other relationships but not direct proportion.",
            "A straight line not passing through origin": "This represents linear relationship but not direct proportion.",
            "A horizontal line": "This represents a constant relationship, not direct proportion."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch11_t1_qe19',
        type: "mcq",
        question: "If 8 identical chocolates cost ₹120, what is the cost of 3 such chocolates?",
        options: ["₹45", "₹40", "₹50", "₹60"],
        correctAnswer: "₹45",
        explanation: "Cost is directly proportional to quantity. First find cost of 1 chocolate (₹120 ÷ 8 = ₹15), then multiply by 3: ₹15 × 3 = ₹45. 🍫",
        wrongAnswerExplanations: {
            "₹40": "This is not the correct proportional value.",
            "₹50": "This would be for about 3.33 chocolates.",
            "₹60": "This would be for 4 chocolates."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch11_t1_qe20',
        type: "mcq",
        question: "In a direct proportion, if x = 0, what must y equal?",
        options: ["0", "1", "-1", "Any number"],
        correctAnswer: "0",
        explanation: "In direct proportion (y = kx), when x = 0, y must also be 0 because y = k × 0 = 0. This is why the graph passes through the origin. 📊",
        wrongAnswerExplanations: {
            "1": "If x = 0, y cannot be 1 in direct proportion.",
            "-1": "If x = 0, y cannot be -1 in direct proportion.",
            "Any number": "In direct proportion, y must be 0 when x is 0."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 