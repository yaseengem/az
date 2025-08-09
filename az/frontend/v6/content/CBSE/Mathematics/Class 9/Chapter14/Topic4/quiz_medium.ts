// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter14\Topic4\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch14_t4_qm1',
        type: "mcq",
        question: "A city planner is developing a model to optimize traffic flow. Which of these would be most important to include in the validation process?",
        options: [
            "Comparing the model predictions with actual traffic data", 
            "Making the model as complex as possible", 
            "Using only the most recent mathematical techniques", 
            "Ensuring the model looks visually appealing"
        ],
        correctAnswer: "Comparing the model predictions with actual traffic data",
        explanation: "Validation requires testing the model against real-world observations. For a traffic flow model, comparing predictions with actual traffic data is essential to verify that the model accurately represents the system it aims to describe. 🚦",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t4_qm2',
        type: "mcq",
        question: "When would increasing the complexity of a mathematical model NOT be beneficial?",
        options: [
            "When more accurate predictions are needed", 
            "When additional important factors have been identified", 
            "When the available data is limited and cannot support the added complexity", 
            "When stakeholders request a more sophisticated model"
        ],
        correctAnswer: "When the available data is limited and cannot support the added complexity",
        explanation: "Adding complexity without sufficient data to properly calibrate and validate the model can lead to overfitting, where the model matches existing data well but performs poorly with new data due to capturing noise rather than true patterns. 📉",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t4_qm3',
        type: "mcq",
        question: "A population growth model assumes unlimited resources and uniform growth rates. In what situation would this model likely fail?",
        options: [
            "When predicting short-term growth in a small population", 
            "When applied to a species introduced to a new environment with abundant resources", 
            "When predicting growth in a densely populated area with resource constraints", 
            "When used for bacterial growth in a laboratory setting with controlled conditions"
        ],
        correctAnswer: "When predicting growth in a densely populated area with resource constraints",
        explanation: "The model assumes unlimited resources, but in densely populated areas, resource limitations (food, water, space) create carrying capacities that slow growth. The model would fail to account for these density-dependent factors, leading to unrealistic predictions. 🌱",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t4_qm4',
        type: "mcq",
        question: "In sensitivity analysis, a model's output changes drastically when a particular parameter is slightly modified. What does this indicate?",
        options: [
            "The model is working perfectly", 
            "The parameter should be fixed at its original value", 
            "The model is especially sensitive to this parameter and requires careful calibration", 
            "The parameter should be removed from the model"
        ],
        correctAnswer: "The model is especially sensitive to this parameter and requires careful calibration",
        explanation: "High sensitivity to a parameter suggests that small estimation errors can lead to significantly different outcomes. This parameter requires particularly accurate estimation, additional research, and possibly explicit uncertainty analysis to ensure reliable model results. 🔍",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t4_qm5',
        type: "mcq",
        question: "Which of these best describes the trade-off between model complexity and utility?",
        options: [
            "More complex models are always better than simple models", 
            "Simple models are always better than complex models", 
            "The most useful model balances adequate representation of reality with usability", 
            "Model complexity has no relationship to its utility"
        ],
        correctAnswer: "The most useful model balances adequate representation of reality with usability",
        explanation: "The optimal model complexity exists at a balance point: complex enough to capture essential system behavior but simple enough to understand, validate, and use. Both overly simple and overly complex models can reduce utility for different reasons. 🧩",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t4_qm6',
        type: "mcq",
        question: "An investment model predicted 7% annual returns over 10 years but actual returns averaged only 4%. What might explain this discrepancy?",
        options: [
            "The mathematics in the model contained errors", 
            "The model was based on historical data that didn't reflect future economic conditions", 
            "The model wasn't complex enough", 
            "The computer running the model was too slow"
        ],
        correctAnswer: "The model was based on historical data that didn't reflect future economic conditions",
        explanation: "Financial models often assume that past patterns will continue, but economic conditions change. The discrepancy likely stems from changes in market conditions, economic policies, or other factors that weren't represented in the historical data used to build the model. 💹",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t4_qm7',
        type: "mcq",
        question: "Which approach would be most effective for communicating model uncertainty to non-technical decision-makers?",
        options: [
            "Including all mathematical equations with error terms", 
            "Presenting only the most likely outcome to avoid confusion", 
            "Providing multiple scenarios with clear explanations of key assumptions", 
            "Using technical statistical terminology to be precise"
        ],
        correctAnswer: "Providing multiple scenarios with clear explanations of key assumptions",
        explanation: "For non-technical audiences, scenario analysis (best-case, worst-case, most-likely) with clear explanations of underlying assumptions makes uncertainty understandable and actionable without requiring statistical expertise. This approach highlights the range of possible outcomes. 📊",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t4_qm8',
        type: "mcq",
        question: "A climate model fails to accurately predict temperature changes over a decade. What should researchers NOT do in response?",
        options: [
            "Revise the model based on new data", 
            "Examine which assumptions might be invalid", 
            "Abandon modelling climate altogether", 
            "Consider additional factors that might influence the system"
        ],
        correctAnswer: "Abandon modelling climate altogether",
        explanation: "Model failures provide valuable learning opportunities to refine our understanding. Rather than abandoning the entire modeling approach, researchers should revise assumptions, incorporate new data, consider additional factors, and refine the model to improve future predictions. 🌡️",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t4_qm9',
        type: "mcq",
        question: "Which step in the modelling process typically requires the most collaboration between mathematicians and subject matter experts?",
        options: [
            "Solving the mathematical equations", 
            "Problem formulation and identifying key variables", 
            "Coding the model into a computer program", 
            "Publishing the results"
        ],
        correctAnswer: "Problem formulation and identifying key variables",
        explanation: "Problem formulation requires deep understanding of both the subject domain (to identify relevant factors) and mathematical techniques (to determine appropriate representation). This essential step demands collaboration between subject experts and mathematicians to create a valid model. 🤝",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t4_qm10',
        type: "mcq",
        question: "What is the primary difference between model verification and model validation?",
        options: [
            "Verification checks the model's mathematics while validation tests against real-world data", 
            "Verification involves peer review while validation is done by the original modelers", 
            "Verification happens before model development while validation happens after", 
            "Verification is optional while validation is required"
        ],
        correctAnswer: "Verification checks the model's mathematics while validation tests against real-world data",
        explanation: "Verification ensures the model is correctly implemented (answering 'Did we build the model right?'), while validation tests whether the model adequately represents reality (answering 'Did we build the right model?'). Both are essential but distinct quality checks. ✓",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t4_qm11',
        type: "mcq",
        question: "Which statement about mathematical modelling in policy-making is most accurate?",
        options: [
            "Models should be the sole basis for policy decisions", 
            "Models are too academic to be useful for real policy issues", 
            "Models can inform policy decisions but should be one of several inputs", 
            "Policy-makers should only use models they can fully understand mathematically"
        ],
        correctAnswer: "Models can inform policy decisions but should be one of several inputs",
        explanation: "While models provide valuable insights for policy-making, they should complement other inputs like expert judgment, ethical considerations, and stakeholder perspectives. No model captures all relevant factors, especially those that are difficult to quantify. 📋",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t4_qm12',
        type: "mcq",
        question: "Which of these would be a sign that a model is being misused?",
        options: [
            "The model is regularly updated with new data", 
            "The model's limitations are clearly stated when results are presented", 
            "The model is applied to situations very different from what it was designed for", 
            "Multiple models are used to analyze the same problem"
        ],
        correctAnswer: "The model is applied to situations very different from what it was designed for",
        explanation: "Models are designed with specific purposes and contexts in mind. Applying a model to significantly different situations (extrapolation beyond its valid domain) without proper adaptation can lead to highly misleading results and is a common form of model misuse. ⚠️",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t4_qm13',
        type: "mcq",
        question: "A pharmaceutical company develops a model to predict drug effectiveness across different age groups, but validation shows it works well only for middle-aged adults. What should they do?",
        options: [
            "Use the model for all age groups anyway since it works for some", 
            "Clearly specify the age range for which the model is valid and develop separate models for other groups", 
            "Add more complexity until the model works for everyone", 
            "Discard the model entirely"
        ],
        correctAnswer: "Clearly specify the age range for which the model is valid and develop separate models for other groups",
        explanation: "When a model works well only for specific cases, its domain of validity should be clearly defined. Different physiological factors affect drug metabolism in children and elderly patients, likely requiring separate specialized models for those populations. 💊",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t4_qm14',
        type: "mcq",
        question: "What does it mean when a model is said to be 'overfitted'?",
        options: [
            "It contains too many variables and captures noise in the data rather than underlying patterns", 
            "It has been tested on too many datasets", 
            "It has too few parameters to accurately represent the system", 
            "It has been used by too many researchers"
        ],
        correctAnswer: "It contains too many variables and captures noise in the data rather than underlying patterns",
        explanation: "An overfitted model matches training data extremely well by adapting to random noise or fluctuations specific to that dataset. While it performs well on existing data, it typically performs poorly on new data because it captured peculiarities rather than general patterns. 📉",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t4_qm15',
        type: "mcq",
        question: "In which situation would a deterministic model likely be insufficient, requiring a probabilistic approach instead?",
        options: [
            "Calculating the trajectory of a projectile in a vacuum", 
            "Determining compound interest on a fixed deposit", 
            "Predicting the outcome of rolling dice in a game of chance", 
            "Computing the area of geometric shapes"
        ],
        correctAnswer: "Predicting the outcome of rolling dice in a game of chance",
        explanation: "Dice rolls are inherently random processes where outcomes cannot be precisely determined beforehand, only assigned probabilities. A probabilistic model capturing this uncertainty is necessary, while the other examples involve deterministic processes with definite outcomes. 🎲",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t4_qm16',
        type: "mcq",
        question: "What challenge do modelers face when attempting to incorporate human behavior in mathematical models?",
        options: [
            "Human behavior is too simple to model mathematically", 
            "Human behavior follows predictable patterns that are easy to express in equations", 
            "Human behavior is influenced by psychological, social, and cultural factors that are difficult to quantify", 
            "There is no data available about human behavior"
        ],
        correctAnswer: "Human behavior is influenced by psychological, social, and cultural factors that are difficult to quantify",
        explanation: "Human behavior involves complex psychological, social, and cultural influences that are difficult to quantify mathematically. People don't always act rationally or consistently, making their behavior challenging to capture in mathematical formulations. 🧠",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t4_qm17',
        type: "mcq",
        question: "Which approach would be most appropriate for modeling a system with significant uncertainty in several key parameters?",
        options: [
            "Using a single best-guess value for each parameter", 
            "Dropping the uncertain parameters from the model", 
            "Running the model with ranges of values for uncertain parameters to analyze sensitivity", 
            "Delaying modeling until all parameters are known with certainty"
        ],
        correctAnswer: "Running the model with ranges of values for uncertain parameters to analyze sensitivity",
        explanation: "For systems with significant parameter uncertainty, running multiple model scenarios with different values within plausible ranges (Monte Carlo simulation or sensitivity analysis) provides insight into possible outcomes and how sensitive results are to specific parameters. 🔄",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t4_qm18',
        type: "mcq",
        question: "Which of these best describes the role of peer review in mathematical modeling?",
        options: [
            "It's an unnecessary step that delays model implementation", 
            "It's a formality required only for academic publications", 
            "It helps identify errors, test assumptions, and improve model quality", 
            "It's only relevant for models used in research, not in practical applications"
        ],
        correctAnswer: "It helps identify errors, test assumptions, and improve model quality",
        explanation: "Peer review brings external expertise to evaluate a model's structure, assumptions, and implementation. This scrutiny helps detect errors, questionable assumptions, and methodological flaws, ultimately improving the model's validity and reliability. 🔍",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t4_qm19',
        type: "mcq",
        question: "Which of these would NOT be a good practice in documenting a mathematical model?",
        options: [
            "Listing all assumptions made in developing the model", 
            "Specifying the model's intended use and limitations", 
            "Keeping the model's structure secret to maintain competitive advantage", 
            "Describing how the model was validated"
        ],
        correctAnswer: "Keeping the model's structure secret to maintain competitive advantage",
        explanation: "Good model documentation promotes transparency so users understand how the model works and its limitations. While some proprietary aspects may be protected, concealing the model's basic structure and assumptions prevents proper evaluation and appropriate use. 📝",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch14_t4_qm20',
        type: "mcq",
        question: "A model prediction diverges from observed data. After investigation, the modelers discover that the real system recently experienced a significant change in conditions. What is the most appropriate next step?",
        options: [
            "Continue using the original model but ignore the recent data points", 
            "Abandon the modeling approach entirely", 
            "Update the model to incorporate the new conditions and revalidate", 
            "Artificially adjust the data to match the model"
        ],
        correctAnswer: "Update the model to incorporate the new conditions and revalidate",
        explanation: "When system conditions change significantly, models should be updated to reflect the new reality. This involves revising assumptions or parameters, incorporating the new conditions, and then revalidating the updated model against current data. 🔄",
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];
