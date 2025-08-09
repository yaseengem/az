import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch13_t3_qe1',
        type: "mcq",
        question: "What is the primary purpose of a line graph? 📈",
        options: [
            "To show changes over time",
            "To compare different categories",
            "To show parts of a whole",
            "To show location of points"
        ],
        correctAnswer: "To show changes over time",
        explanation: "Line graphs are best used to show trends and changes over time, displaying continuous data and how values change from one point to another.",
        wrongAnswerExplanations: {
            "To compare different categories": "Bar graphs are better suited for comparing categories.",
            "To show parts of a whole": "Pie charts are better for showing parts of a whole.",
            "To show location of points": "Scatter plots are better for showing location of points."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t3_qe2',
        type: "mcq",
        question: "In a temperature graph, if the line is going up, what does it indicate? 🌡️",
        options: [
            "Temperature is increasing",
            "Temperature is decreasing",
            "Temperature is constant",
            "Temperature is negative"
        ],
        correctAnswer: "Temperature is increasing",
        explanation: "An upward-moving line in a graph indicates an increase in the measured value - in this case, rising temperature.",
        wrongAnswerExplanations: {
            "Temperature is decreasing": "A downward line would indicate decreasing temperature.",
            "Temperature is constant": "A horizontal line would indicate constant temperature.",
            "Temperature is negative": "The direction of the line doesn't indicate positive or negative values."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t3_qe3',
        type: "mcq",
        question: "What does a horizontal line in a graph represent? ➡️",
        options: [
            "No change in value",
            "Rapid increase",
            "Steady decrease",
            "Maximum value"
        ],
        correctAnswer: "No change in value",
        explanation: "A horizontal line parallel to the x-axis shows that the value remains constant over time with no increase or decrease.",
        wrongAnswerExplanations: {
            "Rapid increase": "An increase would be shown by an upward-sloping line.",
            "Steady decrease": "A decrease would be shown by a downward-sloping line.",
            "Maximum value": "A horizontal line doesn't necessarily indicate maximum value."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t3_qe4',
        type: "mcq",
        question: "Which axis typically represents time in a line graph? ⏰",
        options: [
            "X-axis (horizontal)",
            "Y-axis (vertical)",
            "Both axes",
            "Neither axis"
        ],
        correctAnswer: "X-axis (horizontal)",
        explanation: "In most line graphs, time is plotted on the horizontal x-axis, while the measured variable is shown on the vertical y-axis.",
        wrongAnswerExplanations: {
            "Y-axis (vertical)": "The y-axis typically shows the measured variable or dependent variable.",
            "Both axes": "Time is conventionally shown only on the x-axis.",
            "Neither axis": "Time is always shown on the x-axis in time-series graphs."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t3_qe5',
        type: "mcq",
        question: "What does the intersection point of two lines in a graph indicate? 🎯",
        options: [
            "Both lines have the same value at that point",
            "One line stops",
            "The graph ends",
            "An error in the graph"
        ],
        correctAnswer: "Both lines have the same value at that point",
        explanation: "When two lines intersect, they share the same x and y coordinates at that point, meaning both quantities are equal at that moment.",
        wrongAnswerExplanations: {
            "One line stops": "Lines continue past intersection points unless specifically indicated.",
            "The graph ends": "Intersection doesn't indicate the end of a graph.",
            "An error in the graph": "Intersection is a valid and meaningful feature of graphs."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t3_qe6',
        type: "mcq",
        question: "What information can you get from the steepness of a line in a graph? 📊",
        options: [
            "Rate of change",
            "Starting value",
            "Ending value",
            "Time period"
        ],
        correctAnswer: "Rate of change",
        explanation: "The steepness (slope) of a line indicates how quickly the value is changing - steeper lines show faster change, gentler slopes show slower change.",
        wrongAnswerExplanations: {
            "Starting value": "Starting value is shown by where the line begins, not its steepness.",
            "Ending value": "Ending value is shown by where the line ends, not its steepness.",
            "Time period": "Time period is shown by the x-axis range, not line steepness."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t3_qe7',
        type: "mcq",
        question: "In a population growth graph, what does a steep upward line indicate? 👥",
        options: [
            "Rapid population increase",
            "Slow population growth",
            "Population decrease",
            "No population change"
        ],
        correctAnswer: "Rapid population increase",
        explanation: "A steep upward line shows that the population is growing quickly, with large increases over short periods of time.",
        wrongAnswerExplanations: {
            "Slow population growth": "Slow growth would be shown by a gentle upward slope.",
            "Population decrease": "Population decrease would be shown by a downward line.",
            "No population change": "No change would be shown by a horizontal line."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t3_qe8',
        type: "mcq",
        question: "What does the highest point on a line graph represent? ⬆️",
        options: [
            "Maximum value",
            "Minimum value",
            "Average value",
            "Starting value"
        ],
        correctAnswer: "Maximum value",
        explanation: "The highest point (peak) on a line graph represents the maximum value reached by the measured variable during the time period shown.",
        wrongAnswerExplanations: {
            "Minimum value": "The minimum value would be the lowest point on the graph.",
            "Average value": "Average value would be between the highest and lowest points.",
            "Starting value": "Starting value is where the line begins, not necessarily the highest point."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t3_qe9',
        type: "mcq",
        question: "What type of graph is best for showing daily temperature changes? 🌡️",
        options: [
            "Line graph",
            "Bar graph",
            "Pie chart",
            "Pictograph"
        ],
        correctAnswer: "Line graph",
        explanation: "Line graphs are ideal for showing continuous changes over time, making them perfect for displaying temperature variations throughout the day.",
        wrongAnswerExplanations: {
            "Bar graph": "Bar graphs are better for comparing discrete categories.",
            "Pie chart": "Pie charts show parts of a whole, not changes over time.",
            "Pictograph": "Pictographs are better for showing simple quantities with pictures."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t3_qe10',
        type: "mcq",
        question: "What does a gap in a line graph indicate? ⚡",
        options: [
            "Missing data",
            "Zero value",
            "Maximum value",
            "End of graph"
        ],
        correctAnswer: "Missing data",
        explanation: "A gap or break in a line graph typically indicates that data is missing or wasn't recorded for that period.",
        wrongAnswerExplanations: {
            "Zero value": "Zero values are shown on the line at the zero level.",
            "Maximum value": "Maximum values are shown as peaks on the line.",
            "End of graph": "The end of a graph is shown by the line's endpoint."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t3_qe11',
        type: "mcq",
        question: "What information can you find from the y-axis of a graph? 📏",
        options: [
            "Measured values",
            "Time periods",
            "Categories",
            "Dates"
        ],
        correctAnswer: "Measured values",
        explanation: "The y-axis (vertical axis) shows the measured or dependent variable values, such as temperature, population, or cost.",
        wrongAnswerExplanations: {
            "Time periods": "Time periods are typically shown on the x-axis.",
            "Categories": "Categories are usually shown on the x-axis in bar graphs.",
            "Dates": "Dates are typically shown on the x-axis."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t3_qe12',
        type: "mcq",
        question: "In a rainfall graph, what would a downward line indicate? 🌧️",
        options: [
            "Decreasing rainfall",
            "Increasing rainfall",
            "Constant rainfall",
            "No rainfall"
        ],
        correctAnswer: "Decreasing rainfall",
        explanation: "A downward-sloping line shows that the measured value (rainfall) is decreasing over the time period shown.",
        wrongAnswerExplanations: {
            "Increasing rainfall": "Increasing rainfall would be shown by an upward line.",
            "Constant rainfall": "Constant rainfall would be shown by a horizontal line.",
            "No rainfall": "No rainfall would be shown by a line at zero level."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t3_qe13',
        type: "mcq",
        question: "What does the scale on a graph help you determine? 📐",
        options: [
            "Exact values of points",
            "Graph title",
            "Line color",
            "Graph shape"
        ],
        correctAnswer: "Exact values of points",
        explanation: "The scale on axes helps you read the exact numerical values of any point on the graph by showing the unit divisions.",
        wrongAnswerExplanations: {
            "Graph title": "The title is shown at the top of the graph, not in the scale.",
            "Line color": "Line color is a visual element, not determined by scale.",
            "Graph shape": "Graph shape is determined by data points, not the scale."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t3_qe14',
        type: "mcq",
        question: "What does a zigzag line in a graph suggest? ⚡",
        options: [
            "Frequent value changes",
            "No change in values",
            "Missing data",
            "Constant increase"
        ],
        correctAnswer: "Frequent value changes",
        explanation: "A zigzag line indicates that the measured value is frequently changing, alternating between increases and decreases.",
        wrongAnswerExplanations: {
            "No change in values": "No change would be shown by a horizontal line.",
            "Missing data": "Missing data would be shown by gaps in the line.",
            "Constant increase": "Constant increase would be shown by a straight upward line."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t3_qe15',
        type: "mcq",
        question: "What information does the origin (0,0) point tell you? 🎯",
        options: [
            "Starting point of both axes",
            "Maximum value",
            "Average value",
            "End point"
        ],
        correctAnswer: "Starting point of both axes",
        explanation: "The origin (0,0) is where both x and y axes intersect, representing the starting point or zero value for both measurements.",
        wrongAnswerExplanations: {
            "Maximum value": "Maximum value is the highest point on the graph.",
            "Average value": "Average value is typically between extremes.",
            "End point": "End point is where the data series ends."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t3_qe16',
        type: "mcq",
        question: "What does the legend of a graph help you understand? 🔍",
        options: [
            "What different lines represent",
            "The graph's title",
            "The time period",
            "The scale used"
        ],
        correctAnswer: "What different lines represent",
        explanation: "The legend explains what each line or element in the graph represents, helping identify different data series.",
        wrongAnswerExplanations: {
            "The graph's title": "The title is shown at the top of the graph.",
            "The time period": "Time period is shown on the x-axis.",
            "The scale used": "Scale is shown on the axes."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t3_qe17',
        type: "mcq",
        question: "In a sales graph, what does a flat line at zero indicate? 💰",
        options: [
            "No sales",
            "Maximum sales",
            "Average sales",
            "Increasing sales"
        ],
        correctAnswer: "No sales",
        explanation: "A line that stays flat at the zero level indicates that there were no sales during that time period.",
        wrongAnswerExplanations: {
            "Maximum sales": "Maximum sales would be shown by peaks in the line.",
            "Average sales": "Average sales would be shown by a line above zero.",
            "Increasing sales": "Increasing sales would be shown by an upward line."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t3_qe18',
        type: "mcq",
        question: "What can you learn from comparing two lines on the same graph? 📊",
        options: [
            "How two variables relate to each other",
            "The graph's title",
            "The time scale",
            "The graph's color"
        ],
        correctAnswer: "How two variables relate to each other",
        explanation: "Comparing lines shows how different variables relate and change relative to each other over the same time period.",
        wrongAnswerExplanations: {
            "The graph's title": "The title is shown at the top, not through line comparison.",
            "The time scale": "Time scale is shown on the x-axis.",
            "The graph's color": "Colors are visual elements, not comparative data."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t3_qe19',
        type: "mcq",
        question: "What does equally spaced markings on an axis indicate? 📏",
        options: [
            "Uniform scale",
            "Maximum value",
            "Minimum value",
            "Graph title"
        ],
        correctAnswer: "Uniform scale",
        explanation: "Equally spaced markings on an axis show that the scale is uniform, with each interval representing the same amount of change.",
        wrongAnswerExplanations: {
            "Maximum value": "Maximum value is shown by the highest point, not axis markings.",
            "Minimum value": "Minimum value is shown by the lowest point, not axis markings.",
            "Graph title": "The title is shown at the top, not through axis markings."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t3_qe20',
        type: "mcq",
        question: "What does the title of a graph tell you? 📝",
        options: [
            "What the graph is about",
            "The scale used",
            "The line color",
            "The time period"
        ],
        correctAnswer: "What the graph is about",
        explanation: "The title provides information about what the graph is measuring or displaying, giving context to the data shown.",
        wrongAnswerExplanations: {
            "The scale used": "Scale is shown on the axes, not in the title.",
            "The line color": "Line color is a visual element, not shown in title.",
            "The time period": "Time period is shown on the x-axis."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 