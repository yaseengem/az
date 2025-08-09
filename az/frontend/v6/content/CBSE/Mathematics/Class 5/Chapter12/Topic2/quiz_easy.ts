import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl5_ch12_t2_qe1',
        type: "mcq",
        question: "What does a line graph show?",
        options: ["Changes over time", "Categories of data", "Pictures of data", "Colors of data"],
        correctAnswer: "Changes over time",
        explanation: "Line graphs are used to show how data changes over time, like temperature changes throughout a day. 📈",
        wrongAnswerExplanations: {
            "Categories of data": "Categories are better shown in bar graphs.",
            "Pictures of data": "Pictures are used in pictographs.",
            "Colors of data": "Colors are just for visualization, not the main purpose."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t2_qe2',
        type: "mcq",
        question: "What shape is a pie chart?",
        options: ["Circle", "Square", "Triangle", "Rectangle"],
        correctAnswer: "Circle",
        explanation: "A pie chart is a circular graph divided into slices to show parts of a whole. 🥧",
        wrongAnswerExplanations: {
            "Square": "Pie charts are always circular.",
            "Triangle": "Pie charts are always circular.",
            "Rectangle": "Pie charts are always circular."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t2_qe3',
        type: "mcq",
        question: "In a line graph showing temperature, what should be on the x-axis?",
        options: ["Time", "Temperature", "Days", "Hours"],
        correctAnswer: "Time",
        explanation: "The x-axis in a line graph typically shows time periods. ⏰",
        wrongAnswerExplanations: {
            "Temperature": "Temperature would go on the y-axis.",
            "Days": "Days are a type of time measurement.",
            "Hours": "Hours are a type of time measurement."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t2_qe4',
        type: "mcq",
        question: "What do the slices in a pie chart represent?",
        options: ["Parts of a whole", "Different colors", "Time periods", "Categories"],
        correctAnswer: "Parts of a whole",
        explanation: "Each slice shows what part of the total each category represents. 🥧",
        wrongAnswerExplanations: {
            "Different colors": "Colors are just for differentiation.",
            "Time periods": "Time is shown in line graphs.",
            "Categories": "While categories are shown, the main purpose is to show parts of a whole."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t2_qe5',
        type: "mcq",
        question: "If a line graph goes up, what does it mean?",
        options: ["The value is increasing", "The value is decreasing", "The value is the same", "The graph is wrong"],
        correctAnswer: "The value is increasing",
        explanation: "An upward line shows that the values are getting larger over time. 📈",
        wrongAnswerExplanations: {
            "The value is decreasing": "A decreasing value would show a downward line.",
            "The value is the same": "The same value would show a flat line.",
            "The graph is wrong": "The graph is correct if it shows increasing values."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t2_qe6',
        type: "mcq",
        question: "What is the total of all slices in a pie chart?",
        options: ["100%", "50%", "200%", "0%"],
        correctAnswer: "100%",
        explanation: "A pie chart always represents 100% of the data being shown. 🥧",
        wrongAnswerExplanations: {
            "50%": "This would be half of the total.",
            "200%": "This would be double the total.",
            "0%": "This would mean no data at all."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t2_qe7',
        type: "mcq",
        question: "In a line graph showing plant growth, what should be on the y-axis?",
        options: ["Height in cm", "Days", "Time", "Plant names"],
        correctAnswer: "Height in cm",
        explanation: "The y-axis shows the measurement being tracked, which is height in this case. 📏",
        wrongAnswerExplanations: {
            "Days": "Days would go on the x-axis.",
            "Time": "Time would go on the x-axis.",
            "Plant names": "Names would be in the legend or labels."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t2_qe8',
        type: "mcq",
        question: "What is a legend in a graph?",
        options: ["A key that explains the data", "A title of the graph", "A type of line", "A measurement scale"],
        correctAnswer: "A key that explains the data",
        explanation: "The legend helps us understand what different lines or colors represent. 🔑",
        wrongAnswerExplanations: {
            "A title of the graph": "The title is separate from the legend.",
            "A type of line": "Lines are part of the graph, not the legend.",
            "A measurement scale": "The scale is on the axes, not in the legend."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t2_qe9',
        type: "mcq",
        question: "If a pie chart slice is half the circle, what percentage does it represent?",
        options: ["50%", "25%", "75%", "100%"],
        correctAnswer: "50%",
        explanation: "Half of a circle represents 50% of the total. 🥧",
        wrongAnswerExplanations: {
            "25%": "This would be a quarter of the circle.",
            "75%": "This would be three-quarters of the circle.",
            "100%": "This would be the whole circle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t2_qe10',
        type: "mcq",
        question: "What does a flat line in a line graph mean?",
        options: ["No change over time", "Increasing values", "Decreasing values", "Missing data"],
        correctAnswer: "No change over time",
        explanation: "A flat line shows that the values stayed the same during that time period. 📈",
        wrongAnswerExplanations: {
            "Increasing values": "Increasing values would show an upward line.",
            "Decreasing values": "Decreasing values would show a downward line.",
            "Missing data": "Missing data would show a gap in the line."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t2_qe11',
        type: "mcq",
        question: "In a pie chart showing favorite fruits, if the apple slice is 1/4 of the circle, what percentage is it?",
        options: ["25%", "50%", "75%", "100%"],
        correctAnswer: "25%",
        explanation: "One quarter of a circle represents 25% of the total. 🍎",
        wrongAnswerExplanations: {
            "50%": "This would be half of the circle.",
            "75%": "This would be three-quarters of the circle.",
            "100%": "This would be the whole circle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t2_qe12',
        type: "mcq",
        question: "What is the best use of a line graph?",
        options: ["Showing temperature changes", "Comparing categories", "Showing parts of a whole", "Counting items"],
        correctAnswer: "Showing temperature changes",
        explanation: "Line graphs are best for showing how things change over time, like temperature. 🌡️",
        wrongAnswerExplanations: {
            "Comparing categories": "Categories are better shown in bar graphs.",
            "Showing parts of a whole": "Parts of a whole are shown in pie charts.",
            "Counting items": "Counting is better shown in bar graphs or pictographs."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t2_qe13',
        type: "mcq",
        question: "What is the best use of a pie chart?",
        options: ["Showing budget allocation", "Tracking temperature", "Counting students", "Measuring height"],
        correctAnswer: "Showing budget allocation",
        explanation: "Pie charts are best for showing how a total amount is divided into parts. 💰",
        wrongAnswerExplanations: {
            "Tracking temperature": "Temperature changes are better shown in line graphs.",
            "Counting students": "Counting is better shown in bar graphs.",
            "Measuring height": "Measurements over time are better shown in line graphs."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t2_qe14',
        type: "mcq",
        question: "If a line graph shows rainfall and the line goes down, what does it mean?",
        options: ["Rainfall decreased", "Rainfall increased", "Rainfall stayed same", "Graph is wrong"],
        correctAnswer: "Rainfall decreased",
        explanation: "A downward line shows that the values are getting smaller over time. 🌧️",
        wrongAnswerExplanations: {
            "Rainfall increased": "Increasing rainfall would show an upward line.",
            "Rainfall stayed same": "Same rainfall would show a flat line.",
            "Graph is wrong": "The graph is correct if it shows decreasing rainfall."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t2_qe15',
        type: "mcq",
        question: "In a pie chart showing class pets, if 1/3 of students have dogs, what is the angle of the dog slice?",
        options: ["120 degrees", "90 degrees", "180 degrees", "360 degrees"],
        correctAnswer: "120 degrees",
        explanation: "A full circle is 360 degrees, so 1/3 would be 120 degrees. 🐕",
        wrongAnswerExplanations: {
            "90 degrees": "This would be 1/4 of the circle.",
            "180 degrees": "This would be 1/2 of the circle.",
            "360 degrees": "This would be the whole circle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t2_qe16',
        type: "mcq",
        question: "What is the advantage of a line graph?",
        options: ["Shows trends over time", "Shows exact numbers", "Uses pictures", "Shows categories"],
        correctAnswer: "Shows trends over time",
        explanation: "Line graphs make it easy to see how values change and identify patterns over time. 📈",
        wrongAnswerExplanations: {
            "Shows exact numbers": "All graphs can show exact numbers.",
            "Uses pictures": "Pictures are used in pictographs.",
            "Shows categories": "Categories are better shown in bar graphs."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t2_qe17',
        type: "mcq",
        question: "What is the advantage of a pie chart?",
        options: ["Shows parts of a whole", "Shows changes over time", "Counts items", "Measures height"],
        correctAnswer: "Shows parts of a whole",
        explanation: "Pie charts make it easy to see what portion each category represents of the total. 🥧",
        wrongAnswerExplanations: {
            "Shows changes over time": "Changes over time are better shown in line graphs.",
            "Counts items": "Counting is better shown in bar graphs.",
            "Measures height": "Measurements are better shown in line graphs."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t2_qe18',
        type: "mcq",
        question: "In a line graph, what does a steep line mean?",
        options: ["Rapid change", "No change", "Slow change", "Missing data"],
        correctAnswer: "Rapid change",
        explanation: "A steep line shows that the values changed quickly over a short time. 📈",
        wrongAnswerExplanations: {
            "No change": "No change would show a flat line.",
            "Slow change": "Slow change would show a gentle slope.",
            "Missing data": "Missing data would show a gap in the line."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t2_qe19',
        type: "mcq",
        question: "If a pie chart slice is 1/5 of the circle, what percentage is it?",
        options: ["20%", "25%", "50%", "75%"],
        correctAnswer: "20%",
        explanation: "One fifth of a circle represents 20% of the total. 🥧",
        wrongAnswerExplanations: {
            "25%": "This would be 1/4 of the circle.",
            "50%": "This would be 1/2 of the circle.",
            "75%": "This would be 3/4 of the circle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t2_qe20',
        type: "mcq",
        question: "What should you include in a good graph?",
        options: ["Title, labels, and legend", "Only numbers", "Only colors", "Only lines"],
        correctAnswer: "Title, labels, and legend",
        explanation: "A good graph needs a title to explain what it shows, labels for the axes, and a legend to explain the data. 📊",
        wrongAnswerExplanations: {
            "Only numbers": "Numbers alone don't explain the graph's meaning.",
            "Only colors": "Colors alone don't explain the data.",
            "Only lines": "Lines alone don't explain what they represent."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 