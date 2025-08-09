import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch3_t1_qe1',
        type: "mcq",
        question: "What is data?",
        options: [
            "A collection of facts or information",
            "A type of computer program",
            "A mathematical formula",
            "A scientific experiment"
        ],
        correctAnswer: "A collection of facts or information",
        explanation: "Data is a collection of facts, numbers, or information that can be used for analysis. 📊",
        wrongAnswerExplanations: {
            "A type of computer program": "Data is not a program, but information that can be processed by programs.",
            "A mathematical formula": "Data is raw information, not a formula.",
            "A scientific experiment": "Data can be collected from experiments, but it's not the experiment itself."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t1_qe2',
        type: "mcq",
        question: "Which of these is an example of quantitative data?",
        options: [
            "Favorite colors of students",
            "Height of students in centimeters",
            "Types of fruits in a basket",
            "Names of students in a class"
        ],
        correctAnswer: "Height of students in centimeters",
        explanation: "Height is quantitative data because it can be measured in numbers. 📏",
        wrongAnswerExplanations: {
            "Favorite colors of students": "This is qualitative data as it describes categories.",
            "Types of fruits in a basket": "This is qualitative data as it describes categories.",
            "Names of students in a class": "This is qualitative data as it describes categories."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t1_qe3',
        type: "mcq",
        question: "What is the first step in data organization?",
        options: [
            "Drawing graphs",
            "Collecting data",
            "Analyzing results",
            "Making conclusions"
        ],
        correctAnswer: "Collecting data",
        explanation: "The first step is always collecting the raw data before organizing it. 📝",
        wrongAnswerExplanations: {
            "Drawing graphs": "Graphs come after data collection and organization.",
            "Analyzing results": "Analysis comes after data collection and organization.",
            "Making conclusions": "Conclusions come after all other steps."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t1_qe4',
        type: "mcq",
        question: "Which method of data collection involves asking people questions?",
        options: [
            "Direct observation",
            "Survey",
            "Experiment",
            "Secondary data"
        ],
        correctAnswer: "Survey",
        explanation: "Surveys involve asking people questions to gather information. 📋",
        wrongAnswerExplanations: {
            "Direct observation": "This involves watching and recording events.",
            "Experiment": "This involves conducting tests.",
            "Secondary data": "This involves using existing data."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t1_qe5',
        type: "mcq",
        question: "What type of graph uses bars to represent data?",
        options: [
            "Pie chart",
            "Bar graph",
            "Line graph",
            "Pictograph"
        ],
        correctAnswer: "Bar graph",
        explanation: "Bar graphs use bars of different heights to represent data. 📊",
        wrongAnswerExplanations: {
            "Pie chart": "Pie charts use sectors of a circle.",
            "Line graph": "Line graphs use connected points.",
            "Pictograph": "Pictographs use pictures or symbols."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t1_qe6',
        type: "mcq",
        question: "Which of these is an example of qualitative data?",
        options: [
            "Temperature readings",
            "Number of students",
            "Types of flowers",
            "Height measurements"
        ],
        correctAnswer: "Types of flowers",
        explanation: "Types of flowers is qualitative data as it describes categories. 🌸",
        wrongAnswerExplanations: {
            "Temperature readings": "This is quantitative data as it can be measured.",
            "Number of students": "This is quantitative data as it can be counted.",
            "Height measurements": "This is quantitative data as it can be measured."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t1_qe7',
        type: "mcq",
        question: "What is a frequency distribution table?",
        options: [
            "A table showing raw data",
            "A table showing how often each value occurs",
            "A table of mathematical formulas",
            "A table of survey questions"
        ],
        correctAnswer: "A table showing how often each value occurs",
        explanation: "Frequency distribution shows how often each value appears in the data. 📈",
        wrongAnswerExplanations: {
            "A table showing raw data": "This is a raw data table, not frequency distribution.",
            "A table of mathematical formulas": "Frequency distribution is about data, not formulas.",
            "A table of survey questions": "This is a questionnaire, not frequency distribution."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t1_qe8',
        type: "mcq",
        question: "Which graph is best for showing parts of a whole?",
        options: [
            "Bar graph",
            "Pie chart",
            "Line graph",
            "Pictograph"
        ],
        correctAnswer: "Pie chart",
        explanation: "Pie charts show how parts make up a whole using sectors. 🥧",
        wrongAnswerExplanations: {
            "Bar graph": "Bar graphs are better for comparing quantities.",
            "Line graph": "Line graphs show trends over time.",
            "Pictograph": "Pictographs use pictures to show quantities."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t1_qe9',
        type: "mcq",
        question: "What is the purpose of organizing data?",
        options: [
            "To make it look pretty",
            "To make it easier to understand and analyze",
            "To make it take up less space",
            "To make it more colorful"
        ],
        correctAnswer: "To make it easier to understand and analyze",
        explanation: "Organized data helps in understanding patterns and making decisions. 🎯",
        wrongAnswerExplanations: {
            "To make it look pretty": "Organization is about clarity, not appearance.",
            "To make it take up less space": "Space saving is not the main purpose.",
            "To make it more colorful": "Color is not essential for data organization."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t1_qe10',
        type: "mcq",
        question: "Which of these is NOT a method of data collection?",
        options: [
            "Survey",
            "Observation",
            "Guessing",
            "Experiment"
        ],
        correctAnswer: "Guessing",
        explanation: "Guessing is not a valid method of data collection. ❌",
        wrongAnswerExplanations: {
            "Survey": "This is a valid method of data collection.",
            "Observation": "This is a valid method of data collection.",
            "Experiment": "This is a valid method of data collection."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t1_qe11',
        type: "mcq",
        question: "What is a pictograph?",
        options: [
            "A graph using pictures or symbols",
            "A graph using bars",
            "A graph using lines",
            "A graph using circles"
        ],
        correctAnswer: "A graph using pictures or symbols",
        explanation: "Pictographs use pictures or symbols to represent data. 🖼️",
        wrongAnswerExplanations: {
            "A graph using bars": "This describes a bar graph.",
            "A graph using lines": "This describes a line graph.",
            "A graph using circles": "This describes a pie chart."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t1_qe12',
        type: "mcq",
        question: "Which of these is an example of secondary data?",
        options: [
            "Counting cars passing by",
            "Conducting a class survey",
            "Using census data",
            "Measuring plant growth"
        ],
        correctAnswer: "Using census data",
        explanation: "Census data is secondary data as it was collected by others. 📚",
        wrongAnswerExplanations: {
            "Counting cars passing by": "This is direct observation.",
            "Conducting a class survey": "This is primary data collection.",
            "Measuring plant growth": "This is an experiment."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t1_qe13',
        type: "mcq",
        question: "What should be included in a good data table?",
        options: [
            "Only numbers",
            "Clear labels and organized columns",
            "Colorful designs",
            "Mathematical formulas"
        ],
        correctAnswer: "Clear labels and organized columns",
        explanation: "Good data tables need clear labels and organization. 📋",
        wrongAnswerExplanations: {
            "Only numbers": "Tables need labels and context.",
            "Colorful designs": "Design is not essential for data tables.",
            "Mathematical formulas": "Formulas are not part of basic data tables."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t1_qe14',
        type: "mcq",
        question: "Which graph is best for showing changes over time?",
        options: [
            "Bar graph",
            "Line graph",
            "Pie chart",
            "Pictograph"
        ],
        correctAnswer: "Line graph",
        explanation: "Line graphs show trends and changes over time. 📈",
        wrongAnswerExplanations: {
            "Bar graph": "Bar graphs are better for comparing categories.",
            "Pie chart": "Pie charts show parts of a whole.",
            "Pictograph": "Pictographs use pictures to show quantities."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t1_qe15',
        type: "mcq",
        question: "What is the main purpose of a survey?",
        options: [
            "To entertain people",
            "To collect information from people",
            "To solve mathematical problems",
            "To draw pictures"
        ],
        correctAnswer: "To collect information from people",
        explanation: "Surveys are designed to gather information from respondents. 📝",
        wrongAnswerExplanations: {
            "To entertain people": "Surveys are for data collection, not entertainment.",
            "To solve mathematical problems": "Surveys collect data, not solve problems.",
            "To draw pictures": "Surveys are not about drawing."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t1_qe16',
        type: "mcq",
        question: "Which of these is NOT a type of data representation?",
        options: [
            "Bar graph",
            "Pie chart",
            "Story writing",
            "Pictograph"
        ],
        correctAnswer: "Story writing",
        explanation: "Story writing is not a method of data representation. ❌",
        wrongAnswerExplanations: {
            "Bar graph": "This is a valid data representation.",
            "Pie chart": "This is a valid data representation.",
            "Pictograph": "This is a valid data representation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t1_qe17',
        type: "mcq",
        question: "What is the purpose of labels in a graph?",
        options: [
            "To make it colorful",
            "To explain what the data represents",
            "To make it bigger",
            "To add decoration"
        ],
        correctAnswer: "To explain what the data represents",
        explanation: "Labels help understand what the data shows. 🔍",
        wrongAnswerExplanations: {
            "To make it colorful": "Color is not the purpose of labels.",
            "To make it bigger": "Size is not the purpose of labels.",
            "To add decoration": "Labels are for information, not decoration."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t1_qe18',
        type: "mcq",
        question: "Which of these is an example of direct observation?",
        options: [
            "Reading a weather report",
            "Counting birds in a park",
            "Asking people questions",
            "Using census data"
        ],
        correctAnswer: "Counting birds in a park",
        explanation: "Direct observation involves watching and recording events. 👀",
        wrongAnswerExplanations: {
            "Reading a weather report": "This is using secondary data.",
            "Asking people questions": "This is conducting a survey.",
            "Using census data": "This is using secondary data."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t1_qe19',
        type: "mcq",
        question: "What is the last step in data organization?",
        options: [
            "Collecting data",
            "Drawing graphs",
            "Analyzing results",
            "Making tables"
        ],
        correctAnswer: "Analyzing results",
        explanation: "Analysis is the final step after organizing and representing data. 📊",
        wrongAnswerExplanations: {
            "Collecting data": "This is the first step.",
            "Drawing graphs": "This comes before analysis.",
            "Making tables": "This comes before analysis."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t1_qe20',
        type: "mcq",
        question: "Which of these is important in data collection?",
        options: [
            "Making up data",
            "Being accurate and honest",
            "Using only even numbers",
            "Making it colorful"
        ],
        correctAnswer: "Being accurate and honest",
        explanation: "Accuracy and honesty are crucial in data collection. ✅",
        wrongAnswerExplanations: {
            "Making up data": "This is unethical and incorrect.",
            "Using only even numbers": "Data should reflect reality, not be limited.",
            "Making it colorful": "Color is not essential for data collection."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 