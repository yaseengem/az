import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl5_ch12_t3_qe1',
        type: "mcq",
        question: "What is data analysis?",
        options: ["Understanding information from data", "Drawing pictures", "Counting numbers", "Making graphs"],
        correctAnswer: "Understanding information from data",
        explanation: "Data analysis means looking at information carefully to understand what it tells us. 📊",
        wrongAnswerExplanations: {
            "Drawing pictures": "Drawing pictures is part of making graphs, not analyzing data.",
            "Counting numbers": "Counting is just one part of data analysis.",
            "Making graphs": "Making graphs is a way to show data, not analyze it."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t3_qe2',
        type: "mcq",
        question: "What is the first step in analyzing data?",
        options: ["Looking at the data carefully", "Drawing a graph", "Adding numbers", "Choosing colors"],
        correctAnswer: "Looking at the data carefully",
        explanation: "We need to understand what the data shows before we can analyze it. 👀",
        wrongAnswerExplanations: {
            "Drawing a graph": "We need to understand the data first before making graphs.",
            "Adding numbers": "Adding is just one way to analyze data.",
            "Choosing colors": "Colors are for presentation, not analysis."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t3_qe3',
        type: "mcq",
        question: "What does 'highest' mean in data analysis?",
        options: ["The biggest number", "The smallest number", "The middle number", "The last number"],
        correctAnswer: "The biggest number",
        explanation: "The highest value is the largest number in a set of data. 📈",
        wrongAnswerExplanations: {
            "The smallest number": "That would be the lowest value.",
            "The middle number": "That would be the median.",
            "The last number": "The last number might not be the highest."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t3_qe4',
        type: "mcq",
        question: "What does 'lowest' mean in data analysis?",
        options: ["The smallest number", "The biggest number", "The first number", "The last number"],
        correctAnswer: "The smallest number",
        explanation: "The lowest value is the smallest number in a set of data. 📉",
        wrongAnswerExplanations: {
            "The biggest number": "That would be the highest value.",
            "The first number": "The first number might not be the lowest.",
            "The last number": "The last number might not be the lowest."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t3_qe5',
        type: "mcq",
        question: "What is a pattern in data?",
        options: ["Something that repeats", "A single number", "A random point", "A color"],
        correctAnswer: "Something that repeats",
        explanation: "A pattern is when we see the same thing happening again and again in the data. 🔄",
        wrongAnswerExplanations: {
            "A single number": "A pattern involves multiple numbers.",
            "A random point": "Random points don't show patterns.",
            "A color": "Colors are for presentation, not patterns."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t3_qe6',
        type: "mcq",
        question: "What is comparison in data analysis?",
        options: ["Looking at how things are different or similar", "Adding numbers", "Drawing lines", "Choosing colors"],
        correctAnswer: "Looking at how things are different or similar",
        explanation: "Comparison means seeing how things are alike or different in the data. ↔️",
        wrongAnswerExplanations: {
            "Adding numbers": "Adding is just one way to analyze data.",
            "Drawing lines": "Lines are for graphs, not comparison.",
            "Choosing colors": "Colors are for presentation, not comparison."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t3_qe7',
        type: "mcq",
        question: "What is a trend in data?",
        options: ["A general direction of change", "A single number", "A random point", "A color"],
        correctAnswer: "A general direction of change",
        explanation: "A trend shows if values are generally going up, down, or staying the same. 📈📉",
        wrongAnswerExplanations: {
            "A single number": "A trend involves multiple numbers.",
            "A random point": "Random points don't show trends.",
            "A color": "Colors are for presentation, not trends."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t3_qe8',
        type: "mcq",
        question: "What is the difference between two numbers?",
        options: ["How much one is bigger or smaller than the other", "Adding them together", "Multiplying them", "Drawing them"],
        correctAnswer: "How much one is bigger or smaller than the other",
        explanation: "The difference shows how far apart two numbers are. ➖",
        wrongAnswerExplanations: {
            "Adding them together": "That would be the sum, not the difference.",
            "Multiplying them": "That would be the product, not the difference.",
            "Drawing them": "Drawing shows the numbers but doesn't find the difference."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t3_qe9',
        type: "mcq",
        question: "What is an average?",
        options: ["The total divided by how many numbers there are", "The biggest number", "The smallest number", "A random number"],
        correctAnswer: "The total divided by how many numbers there are",
        explanation: "The average helps us understand what's typical in a set of numbers. 📊",
        wrongAnswerExplanations: {
            "The biggest number": "That would be the maximum.",
            "The smallest number": "That would be the minimum.",
            "A random number": "An average is calculated, not random."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t3_qe10',
        type: "mcq",
        question: "What is a conclusion in data analysis?",
        options: ["What we learn from the data", "A single number", "A graph", "A color"],
        correctAnswer: "What we learn from the data",
        explanation: "A conclusion is what we understand after looking at the data carefully. 💡",
        wrongAnswerExplanations: {
            "A single number": "A conclusion is more than just one number.",
            "A graph": "A graph shows data but isn't a conclusion.",
            "A color": "Colors are for presentation, not conclusions."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t3_qe11',
        type: "mcq",
        question: "What is a prediction in data analysis?",
        options: ["Guessing what might happen next", "A past number", "A current number", "A color"],
        correctAnswer: "Guessing what might happen next",
        explanation: "A prediction is an educated guess about what might happen based on the data. 🔮",
        wrongAnswerExplanations: {
            "A past number": "That's historical data, not a prediction.",
            "A current number": "That's present data, not a prediction.",
            "A color": "Colors are for presentation, not predictions."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t3_qe12',
        type: "mcq",
        question: "What is a range in data?",
        options: ["The difference between highest and lowest", "The average", "The middle number", "A color"],
        correctAnswer: "The difference between highest and lowest",
        explanation: "The range shows how spread out the numbers are. ↔️",
        wrongAnswerExplanations: {
            "The average": "That's the mean, not the range.",
            "The middle number": "That's the median, not the range.",
            "A color": "Colors are for presentation, not ranges."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t3_qe13',
        type: "mcq",
        question: "What is a category in data?",
        options: ["A group of similar things", "A single number", "A color", "A line"],
        correctAnswer: "A group of similar things",
        explanation: "Categories help us organize similar items together. 📑",
        wrongAnswerExplanations: {
            "A single number": "A category includes multiple items.",
            "A color": "Colors are for presentation, not categories.",
            "A line": "Lines are for graphs, not categories."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t3_qe14',
        type: "mcq",
        question: "What is a percentage?",
        options: ["A part out of 100", "A whole number", "A decimal", "A fraction"],
        correctAnswer: "A part out of 100",
        explanation: "A percentage shows how much out of 100 something is. %",
        wrongAnswerExplanations: {
            "A whole number": "A percentage can be any number from 0 to 100.",
            "A decimal": "A decimal is a different way to write a fraction.",
            "A fraction": "A fraction can be any part, not just out of 100."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t3_qe15',
        type: "mcq",
        question: "What is a total in data analysis?",
        options: ["The sum of all numbers", "The biggest number", "The smallest number", "A color"],
        correctAnswer: "The sum of all numbers",
        explanation: "The total is what we get when we add all the numbers together. ➕",
        wrongAnswerExplanations: {
            "The biggest number": "That would be the maximum.",
            "The smallest number": "That would be the minimum.",
            "A color": "Colors are for presentation, not totals."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t3_qe16',
        type: "mcq",
        question: "What is a ratio in data analysis?",
        options: ["Comparing two numbers", "Adding numbers", "Multiplying numbers", "Drawing lines"],
        correctAnswer: "Comparing two numbers",
        explanation: "A ratio shows how many times one number contains another. ↔️",
        wrongAnswerExplanations: {
            "Adding numbers": "That would be a sum, not a ratio.",
            "Multiplying numbers": "That would be a product, not a ratio.",
            "Drawing lines": "Lines are for graphs, not ratios."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t3_qe17',
        type: "mcq",
        question: "What is a frequency in data?",
        options: ["How often something happens", "A single number", "A color", "A line"],
        correctAnswer: "How often something happens",
        explanation: "Frequency tells us how many times something occurs. 🔄",
        wrongAnswerExplanations: {
            "A single number": "Frequency involves counting occurrences.",
            "A color": "Colors are for presentation, not frequency.",
            "A line": "Lines are for graphs, not frequency."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t3_qe18',
        type: "mcq",
        question: "What is a sample in data analysis?",
        options: ["A small part of the whole", "The entire data", "A single number", "A color"],
        correctAnswer: "A small part of the whole",
        explanation: "A sample is a smaller group we study to understand the whole. 🔍",
        wrongAnswerExplanations: {
            "The entire data": "That would be the population, not a sample.",
            "A single number": "A sample includes multiple numbers.",
            "A color": "Colors are for presentation, not samples."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t3_qe19',
        type: "mcq",
        question: "What is a variable in data?",
        options: ["Something that can change", "A fixed number", "A color", "A line"],
        correctAnswer: "Something that can change",
        explanation: "A variable is something that can have different values. 🔄",
        wrongAnswerExplanations: {
            "A fixed number": "A fixed number doesn't change.",
            "A color": "Colors are for presentation, not variables.",
            "A line": "Lines are for graphs, not variables."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t3_qe20',
        type: "mcq",
        question: "What is data interpretation?",
        options: ["Explaining what the data means", "Drawing pictures", "Adding numbers", "Choosing colors"],
        correctAnswer: "Explaining what the data means",
        explanation: "Interpretation means understanding and explaining what the data tells us. 💡",
        wrongAnswerExplanations: {
            "Drawing pictures": "Drawing is for presentation, not interpretation.",
            "Adding numbers": "Adding is just one way to analyze data.",
            "Choosing colors": "Colors are for presentation, not interpretation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 