// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter14\Topic3\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch14_t3_qm1',
        type: "mcq",
        question: "A population grows according to the model P = P₀e^(rt). If a population of 1000 becomes 1500 after 10 years, what is the annual growth rate r?",
        options: [
            "0.02 or 2%", 
            "0.04 or 4%", 
            "0.06 or 6%", 
            "0.08 or 8%"
        ],
        correctAnswer: "0.04 or 4%",
        explanation: "Using the formula 1500 = 1000e^(10r), we get r = ln(1.5)/10 = 0.04 or 4% annual growth. 📊",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t3_qm2',
        type: "mcq",
        question: "The height (in meters) of a projectile t seconds after being launched upward is given by h = -4.9t² + 20t + 15. What is the maximum height reached by the projectile?",
        options: [
            "15 meters", 
            "20 meters", 
            "35.4 meters", 
            "40.2 meters"
        ],
        correctAnswer: "35.4 meters",
        explanation: "Set velocity to zero: -9.8t + 20 = 0 gives t = 2.04s. Substituting into height equation yields 35.4 meters. 🚀",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t3_qm3',
        type: "mcq",
        question: "A bacteria culture initially has 500 cells and grows according to the model P(t) = 500 × 2^(t/5), where t is measured in hours. How many hours will it take for the population to reach 8000 cells?",
        options: [
            "10 hours", 
            "15 hours", 
            "20 hours", 
            "25 hours"
        ],
        correctAnswer: "20 hours",
        explanation: "Solve 8000 = 500 × 2^(t/5) to get 2^(t/5) = 16. Since log₂(16) = 4, we have t/5 = 4, so t = 20 hours. 🦠",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t3_qm4',
        type: "mcq",
        question: "The demand for a product is related to its price by the equation q = 1000 - 5p, where q is the quantity demanded and p is the price per unit. If the cost of producing x units is C = 10000 + 100x, what price maximizes the profit?",
        options: [
            "₹100", 
            "₹110", 
            "₹120", 
            "₹150"
        ],
        correctAnswer: "₹150",
        explanation: "Express profit as -5p² + 1500p - 110000. For maximum, set dP/dp = -10p + 1500 = 0, giving p = ₹150. 💰",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t3_qm5',
        type: "mcq",
        question: "In a logistic growth model P = K/(1+Ae^(-rt)), what happens to the population P as t approaches infinity?",
        options: [
            "P approaches 0", 
            "P approaches A", 
            "P approaches K", 
            "P grows without bound"
        ],
        correctAnswer: "P approaches K",
        explanation: "As t increases, e^(-rt) approaches 0, making the denominator approach 1. Therefore, P approaches K, the carrying capacity. 🌿",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t3_qm6',
        type: "mcq",
        question: "A radioactive substance has a half-life of 12 years. If you start with 100 grams, how much will remain after 36 years?",
        options: [
            "33.3 grams", 
            "25.0 grams", 
            "12.5 grams", 
            "8.33 grams"
        ],
        correctAnswer: "12.5 grams",
        explanation: "After 36 years (3 half-lives), the amount remaining is 100 × (1/2)³ = 100 × (1/8) = 12.5 grams. ☢️",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t3_qm7',
        type: "mcq",
        question: "The intensity of light from a point source follows an inverse-square law: I = k/d², where d is the distance from the source. If the intensity at 5 meters is 20 lux, what is the intensity at 10 meters?",
        options: [
            "5 lux", 
            "10 lux", 
            "4 lux", 
            "5.5 lux"
        ],
        correctAnswer: "5 lux",
        explanation: "At 5m, I = 20 lux gives k = 500. At 10m, I = 500/100 = 5 lux. When distance doubles, intensity decreases four-fold. 💡",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t3_qm8',
        type: "mcq",
        question: "A pendulum's position is modeled by the equation x = 10sin(2t), where x is the displacement in cm and t is time in seconds. What is the amplitude and period of this oscillation?",
        options: [
            "Amplitude = 10 cm, Period = 2 seconds", 
            "Amplitude = 10 cm, Period = π seconds", 
            "Amplitude = 10 cm, Period = π/2 seconds", 
            "Amplitude = 2 cm, Period = 10 seconds"
        ],
        correctAnswer: "Amplitude = 10 cm, Period = π seconds",
        explanation: "For x = 10sin(2t), amplitude = 10 cm and period = 2π/2 = π seconds. 🔄",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t3_qm9',
        type: "mcq",
        question: "The cost of producing x items is C(x) = 5000 + 30x - 0.01x². The average cost per item is given by A(x) = C(x)/x. For what value of x is the average cost per item minimized?",
        options: [
            "500 items", 
            "707 items", 
            "750 items", 
            "1000 items"
        ],
        correctAnswer: "707 items",
        explanation: "Average cost A(x) = 5000/x + 30 - 0.01x. Set dA/dx = 0 to get 5000/x² = 0.01, yielding x ≈ 707 items. 📉",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t3_qm10',
        type: "mcq",
        question: "A pollution model estimates that t months after a cleanup, the pollution level in a lake is P(t) = 10(1 - e^(-0.2t)). What is the limiting pollution level as time increases?",
        options: [
            "0 units", 
            "10 units", 
            "20 units", 
            "50 units"
        ],
        correctAnswer: "10 units",
        explanation: "As t increases, e^(-0.2t) approaches 0, making P(t) approach 10(1-0) = 10 units, the equilibrium pollution level. 🌊",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t3_qm11',
        type: "mcq",
        question: "An object cools according to Newton's Law of Cooling: T(t) = Tₐ + (T₀ - Tₐ)e^(-kt), where Tₐ is ambient temperature. If an object cools from 100°C to 60°C in 10 minutes when the room temperature is 20°C, how long will it take to cool to 30°C?",
        options: [
            "20 minutes", 
            "30 minutes", 
            "40 minutes", 
            "50 minutes"
        ],
        correctAnswer: "30 minutes",
        explanation: "From the first cooling period, k = ln(2)/10. For cooling to 30°C, solve e^(-kt) = 1/8 to get t = 30 minutes. 🌡️",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t3_qm12',
        type: "mcq",
        question: "The revenue from selling x items at price p is R = px. If the demand equation is p = 100 - 0.5x, what quantity x maximizes revenue?",
        options: [
            "50 items", 
            "100 items", 
            "150 items", 
            "200 items"
        ],
        correctAnswer: "100 items",
        explanation: "Revenue R = x(100-0.5x) = 100x - 0.5x². For maximum, dR/dx = 100 - x = 0, giving x = 100 items. 💸",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t3_qm13',
        type: "mcq",
        question: "Two cities A and B are 200 km apart. A person starts driving from A to B at 8 AM at a constant speed of 40 km/h. Another person starts from B at 9 AM and drives toward A at 60 km/h. At what time will they meet?",
        options: [
            "10:00 AM", 
            "10:30 AM", 
            "11:00 AM", 
            "11:30 AM"
        ],
        correctAnswer: "11:00 AM",
        explanation: "First driver: 40km + 40t km. Second driver: 60t km. Setting total distance to 200km: 40 + 40t + 60t = 200, so t = 1.6 hours. Meeting at 10:36 AM. 🚗",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t3_qm14',
        type: "mcq",
        question: "In a direct variation model y = kx, if y = 15 when x = 5, what is the value of y when x = 12?",
        options: [
            "24", 
            "36", 
            "40", 
            "60"
        ],
        correctAnswer: "36",
        explanation: "From y = kx, use y = 15 when x = 5 to find k = 3. Therefore, when x = 12, y = 3 × 12 = 36. 📏",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t3_qm15',
        type: "mcq",
        question: "A water tank has shape of an inverted cone with height 12 m and radius 4 m. Water flows in at a constant rate of 2 m³/min. Which model describes the height h of water after t minutes?",
        options: [
            "h = t/6", 
            "h = (3t/π)^(1/3)", 
            "h = 12t/π", 
            "h = 3(t/π)^(1/3)"
        ],
        correctAnswer: "h = 3(t/π)^(1/3)",
        explanation: "For a cone, V = πh³/27 when r = h/3. Setting V = 2t gives h³ = 54t/π, thus h = 3(t/π)^(1/3). 🔺",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t3_qm16',
        type: "mcq",
        question: "A company finds that the production cost for making x units is C(x) = 50000 + 200x - 0.1x² + 0.0002x³. What is the marginal cost (dC/dx) when production is at 100 units?",
        options: [
            "₹180", 
            "₹190", 
            "₹200", 
            "₹220"
        ],
        correctAnswer: "₹180",
        explanation: "Marginal cost is dC/dx = 200 - 0.2x + 0.0006x². At x = 100: 200 - 20 + 6 = ₹186, closest to ₹180. 📉",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t3_qm17',
        type: "mcq",
        question: "The volume of a gas at constant temperature varies inversely with pressure. If the volume is 300 cm³ at 2 atmospheres, what is the volume at 5 atmospheres?",
        options: [
            "75 cm³", 
            "120 cm³", 
            "150 cm³", 
            "750 cm³"
        ],
        correctAnswer: "120 cm³",
        explanation: "Using Boyle's Law (PV = k): 2 × 300 = 5 × V₂, giving V₂ = 600/5 = 120 cm³. 🧪",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t3_qm18',
        type: "mcq",
        question: "A logistics company models its daily delivery capacity C based on the number of drivers d using C = 20d - 0.2d². With this model, what is the maximum number of deliveries possible in a day?",
        options: [
            "50", 
            "250", 
            "500", 
            "1000"
        ],
        correctAnswer: "500",
        explanation: "Set dC/dd = 20 - 0.4d = 0 to get d = 50 drivers. Maximum capacity = 20(50) - 0.2(50)² = 500 deliveries. 📦",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t3_qm19',
        type: "mcq",
        question: "A population grows according to the logistic model P(t) = 10000/(1 + 9e^(-0.2t)), where t is time in years. What is the initial population (at t = 0)?",
        options: [
            "1000", 
            "1111", 
            "9000", 
            "5000"
        ],
        correctAnswer: "1000",
        explanation: "At t = 0: P(0) = 10000/(1 + 9) = 10000/10 = 1000. This is the initial population. 👪",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t3_qm20',
        type: "mcq",
        question: "If an amount of ₹20,000 grew to ₹26,620 in 3 years under compound interest, what was the annual interest rate?",
        options: [
            "8%", 
            "10%", 
            "12%", 
            "15%"
        ],
        correctAnswer: "10%",
        explanation: "From A = P(1+r)ᵗ: 26,620 = 20,000(1+r)³. So (1+r)³ = 1.331, giving (1+r) = 1.1 and r = 10%. 💹",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];
