import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch13_t3_qm1',
        type: "mcq",
        question: "In a distance-time graph, what does the slope of the line represent? 🚗",
        options: [
            "Speed of the object",
            "Total distance covered",
            "Total time taken",
            "Starting position"
        ],
        correctAnswer: "Speed of the object",
        explanation: "The slope (steepness) of a line in a distance-time graph represents speed - steeper lines indicate higher speed, gentler slopes show lower speed.",
        wrongAnswerExplanations: {
            "Total distance covered": "Total distance is shown by the y-axis value, not the slope.",
            "Total time taken": "Total time is shown by the x-axis value, not the slope.",
            "Starting position": "Starting position is shown by the y-intercept."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch13_t3_qm2',
        type: "mcq",
        question: "If a line graph shows profit over months and has a negative slope, what does it indicate about the business? 📉",
        options: [
            "Decreasing profits",
            "Business closure",
            "No profit",
            "Increasing profits"
        ],
        correctAnswer: "Decreasing profits",
        explanation: "A negative slope (downward line) in a profit graph shows that profits are decreasing over time, indicating declining business performance.",
        wrongAnswerExplanations: {
            "Business closure": "A negative slope doesn't necessarily mean closure, just declining profits.",
            "No profit": "No profit would be shown by a line at zero level.",
            "Increasing profits": "Increasing profits would be shown by a positive slope (upward line)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch13_t3_qm3',
        type: "mcq",
        question: "In a temperature graph that shows two lines for maximum and minimum temperatures, what does the area between the lines represent? 🌡️",
        options: [
            "Temperature range for each day",
            "Average temperature",
            "Total temperature",
            "Temperature difference"
        ],
        correctAnswer: "Temperature range for each day",
        explanation: "The area between maximum and minimum temperature lines shows the range of temperatures experienced each day, indicating daily temperature variation.",
        wrongAnswerExplanations: {
            "Average temperature": "Average temperature would be a single line between max and min.",
            "Total temperature": "Total temperature is not represented by the area between lines.",
            "Temperature difference": "While related, this doesn't fully describe what the area represents."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch13_t3_qm4',
        type: "mcq",
        question: "What can you conclude if two lines in a graph are parallel to each other? 📊",
        options: [
            "They change at the same rate",
            "They have the same values",
            "They intersect eventually",
            "One line depends on the other"
        ],
        correctAnswer: "They change at the same rate",
        explanation: "Parallel lines in a graph have the same slope, meaning the quantities they represent are changing at the same rate over time.",
        wrongAnswerExplanations: {
            "They have the same values": "Parallel lines maintain the same distance but may have different values.",
            "They intersect eventually": "Parallel lines never intersect by definition.",
            "One line depends on the other": "Parallel lines don't imply dependency between variables."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch13_t3_qm5',
        type: "mcq",
        question: "In a population growth graph, what does the area under the curve represent? 👥",
        options: [
            "Total person-years",
            "Average population",
            "Population density",
            "Growth rate"
        ],
        correctAnswer: "Total person-years",
        explanation: "The area under a population curve represents the total person-years (sum of population × time), showing cumulative population existence over the period.",
        wrongAnswerExplanations: {
            "Average population": "Average population would be the mean height of the curve.",
            "Population density": "Population density isn't shown by the area under the curve.",
            "Growth rate": "Growth rate is shown by the slope of the curve."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch13_t3_qm6',
        type: "mcq",
        question: "What does it mean when two lines in a cost-benefit graph intersect? 💰",
        options: [
            "Break-even point is reached",
            "Maximum profit point",
            "Minimum cost point",
            "End of analysis"
        ],
        correctAnswer: "Break-even point is reached",
        explanation: "The intersection of cost and benefit lines shows where they are equal - the break-even point where costs equal benefits.",
        wrongAnswerExplanations: {
            "Maximum profit point": "Maximum profit is where the difference between benefit and cost is greatest.",
            "Minimum cost point": "Minimum cost would be the lowest point on the cost line.",
            "End of analysis": "Intersection doesn't indicate the end of analysis."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch13_t3_qm7',
        type: "mcq",
        question: "In a rainfall graph showing monthly data, what does the area of each bar represent? 🌧️",
        options: [
            "Total rainfall volume",
            "Average daily rainfall",
            "Maximum rainfall",
            "Rainfall intensity"
        ],
        correctAnswer: "Total rainfall volume",
        explanation: "In a monthly rainfall bar graph, the area of each bar represents the total volume of rainfall received during that month.",
        wrongAnswerExplanations: {
            "Average daily rainfall": "Average daily rainfall would need to be calculated by dividing the total by days.",
            "Maximum rainfall": "Maximum rainfall would be a single peak value.",
            "Rainfall intensity": "Intensity would be rainfall rate, not total volume."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch13_t3_qm8',
        type: "mcq",
        question: "What can you determine from the spacing between points on a line graph? 📈",
        options: [
            "Rate of change between measurements",
            "Total change in values",
            "Average of all values",
            "Final value"
        ],
        correctAnswer: "Rate of change between measurements",
        explanation: "The spacing between points shows how quickly values change between measurements - closer points indicate slower change, wider spacing shows faster change.",
        wrongAnswerExplanations: {
            "Total change in values": "Total change is the difference between first and last values.",
            "Average of all values": "Average would need to consider all values, not just spacing.",
            "Final value": "Final value is shown by the last point, not spacing."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch13_t3_qm9',
        type: "mcq",
        question: "In a growth chart showing height vs age, what does a plateau indicate? 📏",
        options: [
            "Growth has temporarily stopped",
            "Measurement error",
            "Maximum height reached",
            "Age increase only"
        ],
        correctAnswer: "Growth has temporarily stopped",
        explanation: "A plateau (horizontal section) in a growth chart indicates a period where height remained constant while age increased.",
        wrongAnswerExplanations: {
            "Measurement error": "A plateau can be a natural part of growth, not necessarily an error.",
            "Maximum height reached": "Maximum height would be shown by the highest point.",
            "Age increase only": "This is true but doesn't explain the biological meaning."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch13_t3_qm10',
        type: "mcq",
        question: "What can you conclude if a line graph shows increasing steepness over time? 📊",
        options: [
            "Rate of change is accelerating",
            "Values are only increasing",
            "Maximum value is reached",
            "Change is constant"
        ],
        correctAnswer: "Rate of change is accelerating",
        explanation: "Increasing steepness (slope getting steeper) shows that the rate of change is growing - the quantity is changing faster over time.",
        wrongAnswerExplanations: {
            "Values are only increasing": "While values may increase, this describes the acceleration of change.",
            "Maximum value is reached": "Increasing steepness doesn't indicate a maximum.",
            "Change is constant": "Increasing steepness shows change is accelerating, not constant."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch13_t3_qm11',
        type: "mcq",
        question: "In a weather graph showing temperature and humidity, what does an inverse relationship between lines indicate? 🌤️",
        options: [
            "As one increases, the other decreases",
            "Both increase together",
            "Both decrease together",
            "No relationship exists"
        ],
        correctAnswer: "As one increases, the other decreases",
        explanation: "An inverse relationship shows that when one variable increases, the other decreases, creating mirror-like patterns in the lines.",
        wrongAnswerExplanations: {
            "Both increase together": "This would be a direct relationship, not inverse.",
            "Both decrease together": "This would be a direct relationship, not inverse.",
            "No relationship exists": "An inverse relationship shows a clear pattern of opposite changes."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch13_t3_qm12',
        type: "mcq",
        question: "What does the frequency of peaks in a cyclic graph indicate? 🔄",
        options: [
            "How often the pattern repeats",
            "Maximum value reached",
            "Total duration observed",
            "Average value over time"
        ],
        correctAnswer: "How often the pattern repeats",
        explanation: "The frequency of peaks in a cyclic graph shows how often the pattern repeats itself - more frequent peaks indicate faster cycles.",
        wrongAnswerExplanations: {
            "Maximum value reached": "Maximum value is shown by the height of peaks, not their frequency.",
            "Total duration observed": "Duration is shown by the total time span, not peak frequency.",
            "Average value over time": "Average value would consider all points, not just peak frequency."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch13_t3_qm13',
        type: "mcq",
        question: "In a graph showing exam scores over time, what does a sudden vertical jump indicate? 📚",
        options: [
            "Rapid improvement in scores",
            "Gradual progress",
            "No change in scores",
            "Decreasing performance"
        ],
        correctAnswer: "Rapid improvement in scores",
        explanation: "A sudden vertical jump shows a rapid increase in values over a very short time period, indicating dramatic improvement.",
        wrongAnswerExplanations: {
            "Gradual progress": "Gradual progress would show as a gentle slope.",
            "No change in scores": "No change would show as a horizontal line.",
            "Decreasing performance": "Decreasing performance would show as a downward line."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch13_t3_qm14',
        type: "mcq",
        question: "What can you determine from the amplitude of oscillations in a periodic graph? 🌊",
        options: [
            "Maximum variation from average",
            "Time period of cycle",
            "Average value",
            "Total duration"
        ],
        correctAnswer: "Maximum variation from average",
        explanation: "Amplitude in a periodic graph shows the maximum deviation from the mean value, indicating the extent of variation in each cycle.",
        wrongAnswerExplanations: {
            "Time period of cycle": "Time period is shown by the distance between peaks.",
            "Average value": "Average value would be the midline of oscillations.",
            "Total duration": "Duration is shown by the total time span covered."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch13_t3_qm15',
        type: "mcq",
        question: "In a graph showing multiple data series, what does overlapping of lines indicate? 🔄",
        options: [
            "Same values at those points",
            "Error in measurement",
            "End of data collection",
            "Invalid data"
        ],
        correctAnswer: "Same values at those points",
        explanation: "When lines overlap in a multi-series graph, it means the different variables have identical values at those specific points.",
        wrongAnswerExplanations: {
            "Error in measurement": "Overlapping can be valid data, not necessarily an error.",
            "End of data collection": "Overlapping doesn't indicate end of data collection.",
            "Invalid data": "Overlapping represents valid equal values, not invalid data."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch13_t3_qm16',
        type: "mcq",
        question: "What does the density of data points on a line graph indicate about the measurement frequency? 📊",
        options: [
            "How often measurements were taken",
            "Accuracy of measurements",
            "Total duration of study",
            "Maximum value recorded"
        ],
        correctAnswer: "How often measurements were taken",
        explanation: "The density of points shows measurement frequency - more closely spaced points indicate more frequent measurements.",
        wrongAnswerExplanations: {
            "Accuracy of measurements": "Point density shows frequency, not accuracy.",
            "Total duration of study": "Duration is shown by the total time span.",
            "Maximum value recorded": "Maximum value is shown by the highest point."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch13_t3_qm17',
        type: "mcq",
        question: "In a step graph, what does the length of each horizontal segment represent? 📈",
        options: [
            "Duration of constant value",
            "Rate of change",
            "Total change in value",
            "Average value"
        ],
        correctAnswer: "Duration of constant value",
        explanation: "In a step graph, horizontal segments show how long a value remained constant before changing to the next level.",
        wrongAnswerExplanations: {
            "Rate of change": "Rate of change is shown by vertical steps, not horizontal segments.",
            "Total change in value": "Total change is the difference between start and end values.",
            "Average value": "Average value would need to consider all values over time."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch13_t3_qm18',
        type: "mcq",
        question: "What can you determine from the symmetry of peaks and troughs in a periodic graph? 🔄",
        options: [
            "Regularity of the cycle",
            "Maximum value only",
            "Minimum value only",
            "Total time period"
        ],
        correctAnswer: "Regularity of the cycle",
        explanation: "Symmetrical peaks and troughs indicate a regular, consistent cycle where increases and decreases follow a uniform pattern.",
        wrongAnswerExplanations: {
            "Maximum value only": "Symmetry shows pattern regularity, not just maximum values.",
            "Minimum value only": "Symmetry shows pattern regularity, not just minimum values.",
            "Total time period": "Time period is shown by the distance between peaks."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch13_t3_qm19',
        type: "mcq",
        question: "In a compound graph showing both bars and lines, what does the relationship between them typically represent? 📊",
        options: [
            "Related but different measurements",
            "Same measurement in different units",
            "Measurement errors",
            "Graph drawing mistakes"
        ],
        correctAnswer: "Related but different measurements",
        explanation: "Compound graphs with bars and lines typically show related but different types of measurements for the same subject.",
        wrongAnswerExplanations: {
            "Same measurement in different units": "Different visualization methods usually show different measurements.",
            "Measurement errors": "Using both bars and lines is intentional, not an error.",
            "Graph drawing mistakes": "This is a valid way to show multiple related measurements."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch13_t3_qm20',
        type: "mcq",
        question: "What does the smoothness of a line in a graph indicate about the data collection? 📈",
        options: [
            "Continuity of measurements",
            "Accuracy of data",
            "Total time period",
            "Maximum value"
        ],
        correctAnswer: "Continuity of measurements",
        explanation: "A smooth line indicates continuous or very frequent measurements, while a jagged line suggests discrete or less frequent data collection.",
        wrongAnswerExplanations: {
            "Accuracy of data": "Smoothness indicates measurement frequency, not necessarily accuracy.",
            "Total time period": "Time period is shown by the x-axis span.",
            "Maximum value": "Maximum value is shown by the highest point."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 