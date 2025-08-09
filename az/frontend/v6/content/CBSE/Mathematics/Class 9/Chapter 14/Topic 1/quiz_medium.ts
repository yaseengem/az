// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter14\Topic1\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch14_t1_qm1',
        type: "mcq",
        question: "A city's population P(t) after t years is modeled by the equation P(t) = 50,000 × (1.02)ᵗ. What does this model assume about population growth?",
        options: [
            "The population grows by exactly 1,000 people every year",
            "The population grows by exactly 2% each year",
            "The population decreases over time",
            "The population will reach exactly 100,000 after 10 years"
        ],
        correctAnswer: "The population grows by exactly 2% each year",
        explanation: "This is an exponential growth model P(t) = P₀eʳᵗ with base 1.02, indicating a 2% annual growth rate. The model assumes the growth rate remains constant regardless of population size. 📈",
        wrongAnswerExplanations: {
            "The population grows by exactly 1,000 people every year": "This would be a linear growth model, not an exponential one with base 1.02.",
            "The population decreases over time": "With a base greater than 1, the population increases over time.",
            "The population will reach exactly 100,000 after 10 years": "The actual value after 10 years would be about 60,950, not 100,000."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t1_qm2',
        type: "mcq",
        question: "When creating a mathematical model for the motion of a simple pendulum, which of these is typically assumed?",
        options: [
            "The pendulum bob has a complex, irregular shape",
            "Air resistance significantly affects the motion",
            "The pendulum string changes length during motion",
            "The pendulum swings through small angles only"
        ],
        correctAnswer: "The pendulum swings through small angles only",
        explanation: "The standard pendulum model assumes small angles, allowing the approximation sin θ ≈ θ, which simplifies the differential equation to a linear form. This makes the mathematical analysis much more tractable. 🔄",
        wrongAnswerExplanations: {
            "The pendulum bob has a complex, irregular shape": "Models typically assume a point mass or simple shape.",
            "Air resistance significantly affects the motion": "Basic models neglect air resistance.",
            "The pendulum string changes length during motion": "The string length is typically assumed constant."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t1_qm3',
        type: "mcq",
        question: "What is the main difference between deterministic and stochastic mathematical models?",
        options: [
            "Deterministic models are always simpler than stochastic models",
            "Deterministic models produce the same output for given inputs, while stochastic models incorporate randomness",
            "Stochastic models are always more accurate than deterministic models",
            "Deterministic models use calculus while stochastic models use algebra"
        ],
        correctAnswer: "Deterministic models produce the same output for given inputs, while stochastic models incorporate randomness",
        explanation: "Deterministic models yield identical results for given inputs. Stochastic models incorporate probability and random variation, producing different possible outcomes even with the same starting conditions. 🎲",
        wrongAnswerExplanations: {
            "Deterministic models are always simpler than stochastic models": "Complexity depends on the specific model, not whether it's deterministic or stochastic.",
            "Stochastic models are always more accurate than deterministic models": "Accuracy depends on the context; each type is appropriate for different situations.",
            "Deterministic models use calculus while stochastic models use algebra": "Both types can use various mathematical tools."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t1_qm4',
        type: "mcq",
        question: "What is sensitivity analysis in the context of mathematical modeling?",
        options: [
            "Testing if the model hurts people's feelings",
            "Examining how changes in inputs affect the model's outputs",
            "Making sure the model uses the most sensitive mathematical techniques",
            "Checking if the model satisfies ethical guidelines"
        ],
        correctAnswer: "Examining how changes in inputs affect the model's outputs",
        explanation: "Sensitivity analysis investigates how variations in input parameters influence model outcomes. This helps identify which factors most significantly impact results and assess model robustness under different conditions. 🔍",
        wrongAnswerExplanations: {
            "Testing if the model hurts people's feelings": "This is not related to mathematical sensitivity analysis.",
            "Making sure the model uses the most sensitive mathematical techniques": "Sensitivity refers to parameter influence, not technique selection.",
            "Checking if the model satisfies ethical guidelines": "Ethics evaluation is separate from sensitivity analysis."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t1_qm5',
        type: "mcq",
        question: "In the logistic growth model dP/dt = rP(1-P/K), what does the parameter K represent?",
        options: [
            "The initial population size",
            "The growth rate of the population",
            "The carrying capacity of the environment",
            "The time at which the population reaches its maximum"
        ],
        correctAnswer: "The carrying capacity of the environment",
        explanation: "K represents the carrying capacity—the maximum sustainable population size that the environment can support. As P approaches K, the growth rate approaches zero, reflecting resource limitations. 🌍",
        wrongAnswerExplanations: {
            "The initial population size": "Initial population would be P(0) or P₀, not K.",
            "The growth rate of the population": "The growth rate parameter is r in this equation.",
            "The time at which the population reaches its maximum": "K is a population size, not a time value."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t1_qm6',
        type: "mcq",
        question: "Which of these is an example of a discrete mathematical model?",
        options: [
            "Newton's laws of motion",
            "Differential equations describing heat flow",
            "The Fibonacci sequence modeling rabbit population",
            "Einstein's field equations"
        ],
        correctAnswer: "The Fibonacci sequence modeling rabbit population",
        explanation: "The Fibonacci sequence is a discrete model that updates at specific time steps rather than continuously. Each term represents the population after a discrete time period, with no values defined between steps. 🐇",
        wrongAnswerExplanations: {
            "Newton's laws of motion": "These use continuous differential equations.",
            "Differential equations describing heat flow": "Heat flow is typically modeled continuously.",
            "Einstein's field equations": "These are continuous differential equations in spacetime."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t1_qm7',
        type: "mcq",
        question: "In epidemic modeling, what does the basic reproduction number R₀ represent?",
        options: [
            "The number of days the disease lasts in an infected person",
            "The percentage of the population that is immune",
            "The average number of secondary infections produced by one infected individual in a fully susceptible population",
            "The rate at which recovered individuals become susceptible again"
        ],
        correctAnswer: "The average number of secondary infections produced by one infected individual in a fully susceptible population",
        explanation: "R₀ (R-naught) indicates how contagious a disease is by measuring how many new infections each case generates in a population with no immunity. When R₀ > 1, epidemics can grow exponentially. 🦠",
        wrongAnswerExplanations: {
            "The number of days the disease lasts in an infected person": "This is the infectious period, not R₀.",
            "The percentage of the population that is immune": "This would relate to herd immunity thresholds.",
            "The rate at which recovered individuals become susceptible again": "This is the waning immunity rate."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t1_qm8',
        type: "mcq",
        question: "Which of these equations represents an exponential decay model?",
        options: [
            "P(t) = P₀ + kt",
            "P(t) = P₀eᵏᵗ where k > 0",
            "P(t) = P₀eᵏᵗ where k < 0",
            "P(t) = P₀(1 - e⁻ᵏᵗ)"
        ],
        correctAnswer: "P(t) = P₀eᵏᵗ where k < 0",
        explanation: "When k < 0 in P(t) = P₀eᵏᵗ, the function decreases exponentially over time. This models phenomena like radioactive decay, where a constant proportion of the remaining amount decays in each time interval. ⬇️",
        wrongAnswerExplanations: {
            "P(t) = P₀ + kt": "This represents linear growth (k > 0) or decay (k < 0), not exponential decay.",
            "P(t) = P₀eᵏᵗ where k > 0": "This represents exponential growth, not decay.",
            "P(t) = P₀(1 - e⁻ᵏᵗ)": "This represents an approaching model that increases toward P₀."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t1_qm9',
        type: "mcq",
        question: "What is a key limitation of using linear models for population growth?",
        options: [
            "They require too much computational power",
            "They can't represent decline in population",
            "They don't account for resource limitations that affect growth rates",
            "They are too mathematically complex for practical use"
        ],
        correctAnswer: "They don't account for resource limitations that affect growth rates",
        explanation: "Linear models (P = P₀ + kt) assume constant growth regardless of population size. In reality, factors like resource competition, predation, and space limitations cause growth rates to vary with population size. 📉",
        wrongAnswerExplanations: {
            "They require too much computational power": "Linear models are actually computationally simple.",
            "They can't represent decline in population": "Linear models can show decline if k < 0.",
            "They are too mathematically complex for practical use": "Linear models are among the simplest mathematical models."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t1_qm10',
        type: "mcq",
        question: "What is meant by 'parameter estimation' in mathematical modeling?",
        options: [
            "Guessing the answers before solving the model",
            "Determining the values of model parameters that best fit observed data",
            "Estimating how long it will take to solve the equations",
            "Calculating the exact number of parameters needed"
        ],
        correctAnswer: "Determining the values of model parameters that best fit observed data",
        explanation: "Parameter estimation identifies the specific values for model parameters (like growth rates or carrying capacities) that make the model best match real-world observations, often using statistical methods. 🔧",
        wrongAnswerExplanations: {
            "Guessing the answers before solving the model": "Parameters are rigorously estimated, not guessed.",
            "Estimating how long it will take to solve the equations": "This refers to computational complexity, not parameter estimation.",
            "Calculating the exact number of parameters needed": "This relates to model structure, not fitting parameters to data."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t1_qm11',
        type: "mcq",
        question: "A coffee cup's temperature T (in °C) after t minutes is modeled by T(t) = 20 + 80e⁻⁰·⁰⁵ᵗ. What does this model assume?",
        options: [
            "The coffee starts at 100°C and cools at a rate proportional to its temperature difference from the surroundings",
            "The coffee starts at 20°C and warms up over time",
            "The coffee temperature oscillates between 20°C and 100°C",
            "The coffee will eventually reach 0°C"
        ],
        correctAnswer: "The coffee starts at 100°C and cools at a rate proportional to its temperature difference from the surroundings",
        explanation: "This model follows Newton's Law of Cooling: T(t) = Tₑ + (T₀-Tₑ)e⁻ᵏᵗ, where T₀=100°C is the initial temperature, Tₑ=20°C is the ambient temperature, and k=0.05 is the cooling constant. 🔥",
        wrongAnswerExplanations: {
            "The coffee starts at 20°C and warms up over time": "The model shows cooling from 100°C toward 20°C, not warming.",
            "The coffee temperature oscillates between 20°C and 100°C": "The model shows monotonic decay without oscillation.",
            "The coffee will eventually reach 0°C": "The temperature approaches 20°C, not 0°C."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t1_qm12',
        type: "mcq",
        question: "Which tool is most appropriate for analyzing how sensitive a mathematical model is to changes in its input parameters?",
        options: [
            "Monte Carlo simulation",
            "Integration by parts",
            "Polynomial factoring",
            "The quadratic formula"
        ],
        correctAnswer: "Monte Carlo simulation",
        explanation: "Monte Carlo simulation runs the model multiple times with randomly varied inputs to analyze how parameter changes affect outputs. This reveals which parameters most influence results and quantifies uncertainty. 🎲",
        wrongAnswerExplanations: {
            "Integration by parts": "This is a calculus technique for solving certain integrals, not for sensitivity analysis.",
            "Polynomial factoring": "This is an algebraic technique for finding roots, not for analyzing sensitivity.",
            "The quadratic formula": "This solves quadratic equations but doesn't analyze parameter sensitivity."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t1_qm13',
        type: "mcq",
        question: "What is the purpose of non-dimensionalization in mathematical modeling?",
        options: [
            "To make the model work in zero dimensions",
            "To remove all variables from the equations",
            "To scale variables into dimensionless quantities, simplifying the model and revealing important parameter groups",
            "To ensure the model only works with integers"
        ],
        correctAnswer: "To scale variables into dimensionless quantities, simplifying the model and revealing important parameter groups",
        explanation: "Non-dimensionalization transforms variables to remove physical units, reducing the number of parameters and highlighting the important parameter combinations that control the system's behavior. 📊",
        wrongAnswerExplanations: {
            "To make the model work in zero dimensions": "This misinterprets the meaning of 'dimensionless' in this context.",
            "To remove all variables from the equations": "Variables are transformed, not removed.",
            "To ensure the model only works with integers": "Non-dimensionalization doesn't restrict values to integers."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t1_qm14',
        type: "mcq",
        question: "When validating a mathematical model, which of these is NOT a typical approach?",
        options: [
            "Comparing model predictions with observed data",
            "Testing the model on scenarios with known outcomes",
            "Ensuring the model uses the most complex equations possible",
            "Checking if the model works for extreme or edge cases"
        ],
        correctAnswer: "Ensuring the model uses the most complex equations possible",
        explanation: "Model validation focuses on predictive accuracy and reliability, not complexity. In fact, unnecessary complexity can make models less useful due to overfitting, more parameters to estimate, and reduced interpretability. 🔍",
        wrongAnswerExplanations: {
            "Comparing model predictions with observed data": "This is a standard validation approach.",
            "Testing the model on scenarios with known outcomes": "This helps verify the model's accuracy.",
            "Checking if the model works for extreme or edge cases": "This tests the model's robustness."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t1_qm15',
        type: "mcq",
        question: "In a predator-prey model, what typically happens to the predator population when the prey population decreases significantly?",
        options: [
            "The predator population immediately becomes extinct",
            "The predator population increases to compensate",
            "The predator population eventually decreases due to food scarcity",
            "The predator population remains constant regardless of prey"
        ],
        correctAnswer: "The predator population eventually decreases due to food scarcity",
        explanation: "Predator-prey models (like Lotka-Volterra equations) show coupled oscillations where predator populations follow prey populations with a time lag. When prey declines, predators eventually decline due to reduced food availability. 🐺🐰",
        wrongAnswerExplanations: {
            "The predator population immediately becomes extinct": "The decline occurs with a time lag, not immediately.",
            "The predator population increases to compensate": "Lower prey availability cannot support increased predators.",
            "The predator population remains constant regardless of prey": "Predator populations depend heavily on prey availability."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t1_qm16',
        type: "mcq",
        question: "Which equation represents a logistic growth model?",
        options: [
            "dP/dt = rP",
            "dP/dt = rP(1-P/K)",
            "P = P₀ + rt",
            "P = P₀ + rt²"
        ],
        correctAnswer: "dP/dt = rP(1-P/K)",
        explanation: "The logistic model includes both growth (rP) and a limiting factor (1-P/K) that reduces growth as population P approaches carrying capacity K. This captures initial exponential growth followed by leveling off. 📈",
        wrongAnswerExplanations: {
            "dP/dt = rP": "This is the exponential growth model without limitations.",
            "P = P₀ + rt": "This is a linear growth model.",
            "P = P₀ + rt²": "This is a quadratic growth model."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t1_qm17',
        type: "mcq",
        question: "What is a key advantage of agent-based models over equation-based models?",
        options: [
            "They always provide exact analytical solutions",
            "They require less computational power",
            "They can more easily represent individual behavior and local interactions",
            "They always use fewer parameters"
        ],
        correctAnswer: "They can more easily represent individual behavior and local interactions",
        explanation: "Agent-based models simulate individual entities that follow rules and interact locally. This approach captures emergent behaviors and heterogeneity that equation-based models (which track aggregate variables) often cannot represent. 🧩",
        wrongAnswerExplanations: {
            "They always provide exact analytical solutions": "Agent-based models typically don't have analytical solutions.",
            "They require less computational power": "They generally require more computational resources.",
            "They always use fewer parameters": "They often use more parameters to define agent behaviors."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t1_qm18',
        type: "mcq",
        question: "A model of disease spread in a city makes certain assumptions. Which of these is likely to be the most problematic simplification?",
        options: [
            "Assuming the population is evenly distributed across the city",
            "Ignoring differences in temperature between day and night",
            "Not accounting for individuals' different movement patterns and social contacts",
            "Using rounded population numbers"
        ],
        correctAnswer: "Not accounting for individuals' different movement patterns and social contacts",
        explanation: "Disease spread is heavily influenced by individual movement and social network structures. Ignoring these variations can significantly reduce model accuracy, as 'super-spreader' events and local clusters often drive epidemics. 🦠",
        wrongAnswerExplanations: {
            "Assuming the population is evenly distributed across the city": "While important, spatial distribution is less critical than social contact patterns.",
            "Ignoring differences in temperature between day and night": "Temperature effects are typically secondary to contact patterns.",
            "Using rounded population numbers": "Minor numerical approximations rarely significantly affect results."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t1_qm19',
        type: "mcq",
        question: "What does it mean when a mathematical model is described as 'robust'?",
        options: [
            "It produces exactly perfect predictions",
            "It continues to provide reasonable results even with small changes in assumptions or inputs",
            "It is physically strong and durable",
            "It uses only the most advanced mathematics"
        ],
        correctAnswer: "It continues to provide reasonable results even with small changes in assumptions or inputs",
        explanation: "A robust model maintains reasonable predictive power despite minor variations in inputs or assumptions. This important quality shows the model captures fundamental relationships rather than being overfitted to specific conditions. ⚡",
        wrongAnswerExplanations: {
            "It produces exactly perfect predictions": "Perfect prediction is rarely possible due to natural variability.",
            "It is physically strong and durable": "This misinterprets robustness in a modeling context.",
            "It uses only the most advanced mathematics": "Mathematical sophistication doesn't determine robustness."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t1_qm20',
        type: "mcq",
        question: "In financial modeling, what does the Black-Scholes equation primarily describe?",
        options: [
            "The expected return of a stock portfolio",
            "The optimal savings rate for retirement",
            "The price of options on stocks",
            "The correlation between different market sectors"
        ],
        correctAnswer: "The price of options on stocks",
        explanation: "The Black-Scholes equation is a partial differential equation that models the theoretical price of derivatives, particularly stock options. It revolutionized financial markets by providing a mathematical framework for option pricing. 💹",
        wrongAnswerExplanations: {
            "The expected return of a stock portfolio": "Portfolio returns involve different models, like CAPM.",
            "The optimal savings rate for retirement": "This is addressed by different financial planning models.",
            "The correlation between different market sectors": "Correlation models use different statistical approaches."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];
