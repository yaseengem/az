// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter14\Topic3\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch14_t3_qe1',
        type: "mcq",
        question: "Which mathematical model would best represent the relationship between distance traveled and time for a car moving at constant speed?",
        options: [
            "Exponential model", 
            "Linear model", 
            "Quadratic model", 
            "Logistic model"
        ],
        correctAnswer: "Linear model",
        explanation: "For a car moving at constant speed, the distance is directly proportional to time (d = vt), making a linear model the most appropriate representation. 🚗",
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch14_t3_qe2',
        type: "mcq",
        question: "If a bank offers simple interest at 5% per annum, which equation represents the amount A after t years if P is the principal?",
        options: [
            "A = P(1 + 0.05)ᵗ", 
            "A = P + 0.05Pt", 
            "A = P + 5t", 
            "A = 0.05Pt"
        ],
        correctAnswer: "A = P + 0.05Pt",
        explanation: "For simple interest, the amount equals the principal plus interest. Interest equals principal times rate times time: A = P + Prt = P + 0.05Pt. 💰",
        difficulty: "easy",
        recommendedTime: 30,
        marks: 1
    },
    {
        id: 'cl9_ch14_t3_qe3',
        type: "mcq",
        question: "Which model describes population growth without any limiting factors?",
        options: [
            "Linear model", 
            "Exponential model", 
            "Logistic model", 
            "Inverse variation model"
        ],
        correctAnswer: "Exponential model",
        explanation: "Exponential models (P = P₀eʳᵗ) describe unlimited growth where the rate of increase is proportional to the current population size, ideal for modeling unconstrained population growth. 🌱",
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch14_t3_qe4',
        type: "mcq",
        question: "The height of an object thrown upward is modeled by h = -4.9t² + 20t + 5. What does the term -4.9 represent?",
        options: [
            "Initial velocity", 
            "Initial height", 
            "Half of gravitational acceleration", 
            "Maximum height"
        ],
        correctAnswer: "Half of gravitational acceleration",
        explanation: "In the projectile motion model h = -4.9t² + 20t + 5, the coefficient -4.9 represents -g/2, where g ≈ 9.8 m/s² is the acceleration due to gravity. 🏀",
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch14_t3_qe5',
        type: "mcq",
        question: "A bacteria population doubles every 3 hours. If there are initially 100 bacteria, which model gives the population after t hours?",
        options: [
            "P = 100 + 2t", 
            "P = 100 × 2^(t/3)", 
            "P = 100 × 3^(t/2)", 
            "P = 100 × (1 + t/3)"
        ],
        correctAnswer: "P = 100 × 2^(t/3)",
        explanation: "When doubling occurs every 3 hours, the growth model is P = P₀ × 2^(t/k), where k is time to double. So P = 100 × 2^(t/3) correctly models the bacteria growth. 🦠",
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch14_t3_qe6',
        type: "mcq",
        question: "Which of these is an example of an inverse variation model?",
        options: [
            "Distance = Speed × Time", 
            "Force = Mass × Acceleration", 
            "Pressure × Volume = Constant (Boyle's Law)", 
            "Area of square = Side length²"
        ],
        correctAnswer: "Pressure × Volume = Constant (Boyle's Law)",
        explanation: "Boyle's Law (PV = k) is an inverse variation model because pressure (P) is inversely proportional to volume (V). When one increases, the other decreases proportionally. 🧪",
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch14_t3_qe7',
        type: "mcq",
        question: "In the model y = 3x + 5, what does the number 5 represent?",
        options: [
            "Slope", 
            "y-intercept", 
            "Rate of growth", 
            "x-intercept"
        ],
        correctAnswer: "y-intercept",
        explanation: "In a linear model y = mx + b, the constant term b is the y-intercept, representing the value of y when x = 0. In this case, y = 3x + 5, b = 5. 📊",
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch14_t3_qe8',
        type: "mcq",
        question: "Which model would be most appropriate for describing the height of a tide over time?",
        options: [
            "Linear model", 
            "Exponential model", 
            "Trigonometric model", 
            "Quadratic model"
        ],
        correctAnswer: "Trigonometric model",
        explanation: "Tides follow a cyclical pattern of rising and falling, making trigonometric models like y = A sin(Bt + C) + D ideal for representing their periodic nature. 🌊",
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch14_t3_qe9',
        type: "mcq",
        question: "A model that accounts for population growth but includes a limiting factor (carrying capacity) is called:",
        options: [
            "Exponential growth model", 
            "Linear growth model", 
            "Logistic growth model", 
            "Inverse variation model"
        ],
        correctAnswer: "Logistic growth model",
        explanation: "Logistic growth models (P = K/(1+Ae^(-rt))) describe population growth that slows as it approaches a maximum sustainable level called the carrying capacity (K). 🌿",
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch14_t3_qe10',
        type: "mcq",
        question: "If an item originally costs ₹1000 and loses 10% of its value each year, which model describes its value V after t years?",
        options: [
            "V = 1000 - 100t", 
            "V = 1000 × (0.9)ᵗ", 
            "V = 1000 × (1.1)ᵗ", 
            "V = 1000/t"
        ],
        correctAnswer: "V = 1000 × (0.9)ᵗ",
        explanation: "This is an exponential decay model. Each year the value is 90% of the previous year, so V = 1000 × (0.9)ᵗ correctly models the depreciation. 📉",
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch14_t3_qe11',
        type: "mcq",
        question: "In the distance formula d = rt, which is a variable and which is a parameter if we're modeling the distance traveled by a specific car?",
        options: [
            "d is variable, r and t are parameters", 
            "d and t are variables, r is a parameter", 
            "d and r are variables, t is a parameter", 
            "d, r, and t are all variables"
        ],
        correctAnswer: "d and t are variables, r is a parameter",
        explanation: "For a specific car, the speed (r) is a fixed characteristic (parameter), while distance (d) and time (t) are quantities that can vary (variables). 🚗",
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch14_t3_qe12',
        type: "mcq",
        question: "Which model represents compound interest, where P is principal, r is annual rate, and t is time in years?",
        options: [
            "A = P + Prt", 
            "A = P(1 + r)ᵗ", 
            "A = P + rt", 
            "A = Prt"
        ],
        correctAnswer: "A = P(1 + r)ᵗ",
        explanation: "Compound interest formula A = P(1 + r)ᵗ accounts for interest earned on previously accumulated interest, creating exponential growth in the investment. 💵",
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch14_t3_qe13',
        type: "mcq",
        question: "Which of these situations would be modeled by a quadratic equation?",
        options: [
            "A savings account with a fixed interest rate", 
            "The height of a ball thrown into the air", 
            "The growth of a bacteria population", 
            "The relationship between time and distance for a car moving at constant speed"
        ],
        correctAnswer: "The height of a ball thrown into the air",
        explanation: "The height of a projectile like a thrown ball is affected by gravity, creating a parabolic path that's modeled by a quadratic equation h = h₀ + v₀t - (1/2)gt². 🏈",
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch14_t3_qe14',
        type: "mcq",
        question: "In a linear model y = mx + b, what does the parameter m represent?",
        options: [
            "The starting value of y", 
            "The value of x when y = 0", 
            "The rate of change of y with respect to x", 
            "The total increase in y"
        ],
        correctAnswer: "The rate of change of y with respect to x",
        explanation: "In a linear model y = mx + b, the parameter m is the slope, which represents the rate at which y changes when x increases by one unit. 📈",
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch14_t3_qe15',
        type: "mcq",
        question: "A radioactive substance decays according to the model A = A₀e^(-λt), where A is the amount remaining after time t. What does λ represent?",
        options: [
            "Initial amount", 
            "Half-life", 
            "Decay constant", 
            "Final amount"
        ],
        correctAnswer: "Decay constant",
        explanation: "In the radioactive decay model A = A₀e^(-λt), λ is the decay constant which determines how quickly the substance decays. Higher values of λ indicate faster decay. ☢️",
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch14_t3_qe16',
        type: "mcq",
        question: "If 8 workers can complete a job in 6 days, which model relates the number of workers (w) to the time taken (t)?",
        options: [
            "t = w + 6", 
            "t = 48/w", 
            "t = 8w/6", 
            "t = 6/w"
        ],
        correctAnswer: "t = 48/w",
        explanation: "This is an inverse variation where work (constant) = workers × time. With 8 workers taking 6 days, work = 48. So t = 48/w models the relationship correctly. 👷",
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch14_t3_qe17',
        type: "mcq",
        question: "Which of these models represents a direct proportion relationship?",
        options: [
            "y = x² + 2", 
            "y = 5x", 
            "y = 3/x", 
            "y = 2ˣ"
        ],
        correctAnswer: "y = 5x",
        explanation: "A direct proportion has the form y = kx where k is a constant. The model y = 5x fits this pattern with k = 5, meaning y is directly proportional to x. 📏",
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch14_t3_qe18',
        type: "mcq",
        question: "The cost of making x items is C = 500 + 20x. What does the 500 represent?",
        options: [
            "Variable cost", 
            "Fixed cost", 
            "Profit margin", 
            "Revenue"
        ],
        correctAnswer: "Fixed cost",
        explanation: "In the cost model C = 500 + 20x, the constant 500 represents fixed costs that don't change with production volume, while 20x represents variable costs. 💼",
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch14_t3_qe19',
        type: "mcq",
        question: "Which model would best represent the temperature of a cup of hot tea cooling down in a room?",
        options: [
            "Linear model", 
            "Exponential decay model", 
            "Quadratic model", 
            "Logistic model"
        ],
        correctAnswer: "Exponential decay model",
        explanation: "According to Newton's Law of Cooling, the rate of cooling is proportional to the temperature difference, leading to an exponential decay model T = Tₑ + (T₀-Tₑ)e^(-kt). 🍵",
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch14_t3_qe20',
        type: "mcq",
        question: "A city's population follows the model P = 50000(1 + 0.02)ᵗ. What is the growth rate per year?",
        options: [
            "0.02%", 
            "0.2%", 
            "2%", 
            "20%"
        ],
        correctAnswer: "2%",
        explanation: "In the population model P = P₀(1+r)ᵗ, r represents the growth rate. Here, r = 0.02, which equals 2% annual growth. The population increases by 2% each year. 👪",
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
