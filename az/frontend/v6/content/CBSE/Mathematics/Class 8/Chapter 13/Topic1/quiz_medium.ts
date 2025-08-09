import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch13_t1_qm1',
        type: "mcq",
        question: "A student collected data about the number of hours spent studying each day for a week. Which graph type would be most appropriate AND why?",
        options: [
            "Line graph, because it shows continuous data over time",
            "Bar graph, because the data is discrete daily measurements",
            "Pie chart, because it shows parts of a whole",
            "Scatter plot, because it shows correlation"
        ],
        correctAnswer: "Bar graph, because the data is discrete daily measurements",
        explanation: "Bar graphs are ideal for discrete daily measurements as each day is a separate entity, and the heights can easily show and compare study hours. 📚",
        wrongAnswerExplanations: {
            "Line graph, because it shows continuous data over time": "While time is involved, the data is discrete (separate days) rather than continuous.",
            "Pie chart, because it shows parts of a whole": "Study hours per day aren't parts of a whole; they're independent measurements.",
            "Scatter plot, because it shows correlation": "We're not showing a relationship between two variables."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch13_t1_qm2',
        type: "mcq",
        question: "In a line graph showing temperature changes, what does the steepness (slope) of the line indicate?",
        options: [
            "The highest temperature",
            "The rate of temperature change",
            "The time period",
            "The starting temperature"
        ],
        correctAnswer: "The rate of temperature change",
        explanation: "The steepness (slope) of a line in a line graph shows how quickly the value is changing - steeper lines indicate faster changes, gentler slopes show slower changes. 📈",
        wrongAnswerExplanations: {
            "The highest temperature": "The highest point shows the maximum temperature, not the slope.",
            "The time period": "Time period is shown on the x-axis, not by the slope.",
            "The starting temperature": "Starting temperature is shown by the y-value where the line begins."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch13_t1_qm3',
        type: "mcq",
        question: "When creating a pie chart for a class's favorite sports, if 15 students like cricket 🏏, 10 like football ⚽, and 5 like basketball 🏀, what angle should the cricket sector have?",
        options: [
            "90°",
            "120°",
            "180°",
            "150°"
        ],
        correctAnswer: "180°",
        explanation: "In a pie chart, total angle = 360°. For cricket: (15 ÷ 30) × 360° = 180°. The angle is proportional to the fraction of students who chose cricket. 📊",
        wrongAnswerExplanations: {
            "90°": "This would represent only 25% of students, but cricket has 50% (15/30).",
            "120°": "This would represent only 33.33% of students, but cricket has 50%.",
            "150°": "This would represent 41.67% of students, but cricket has 50%."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch13_t1_qm4',
        type: "mcq",
        question: "In a scatter plot showing height vs. age of students, what does it mean if the points roughly form a line going up from left to right?",
        options: [
            "There's no relationship between height and age",
            "Height decreases with age",
            "There's a positive correlation between height and age",
            "The data is incorrect"
        ],
        correctAnswer: "There's a positive correlation between height and age",
        explanation: "Points forming an upward trend from left to right indicate a positive correlation - as one variable (age) increases, the other (height) tends to increase too. 📊",
        wrongAnswerExplanations: {
            "There's no relationship between height and age": "Points scattered randomly would indicate no relationship.",
            "Height decreases with age": "This would show as a downward trend from left to right.",
            "The data is incorrect": "The pattern suggests a logical relationship, not incorrect data."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch13_t1_qm5',
        type: "mcq",
        question: "If you need to compare both the total rainfall AND its distribution across months for two years, which combination of graphs would be most effective?",
        options: [
            "Two pie charts",
            "Two line graphs",
            "Two bar graphs side by side",
            "A scatter plot"
        ],
        correctAnswer: "Two bar graphs side by side",
        explanation: "Side-by-side bar graphs allow easy comparison of both total rainfall (by summing bars) and monthly distribution (by comparing individual bars) between the two years. 🌧️",
        wrongAnswerExplanations: {
            "Two pie charts": "Pie charts would show distribution but make it hard to compare actual amounts.",
            "Two line graphs": "Line graphs could work but wouldn't show totals as clearly as bars.",
            "A scatter plot": "Scatter plots show relationships between variables, not comparisons over time."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch13_t1_qm6',
        type: "mcq",
        question: "In a histogram showing test scores, what does the width of each bar represent?",
        options: [
            "The number of students",
            "The average score",
            "The class interval",
            "The highest score"
        ],
        correctAnswer: "The class interval",
        explanation: "In a histogram, the width of each bar represents the class interval (range of values in that group), such as 0-10, 11-20, etc. The height shows frequency. 📊",
        wrongAnswerExplanations: {
            "The number of students": "This is shown by the height of the bar, not its width.",
            "The average score": "The average score isn't represented by bar width.",
            "The highest score": "The highest score would be at the end of the last interval."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch13_t1_qm7',
        type: "mcq",
        question: "When would a double bar graph be more useful than a single bar graph?",
        options: [
            "When comparing two sets of data for the same categories",
            "When showing changes over time",
            "When displaying parts of a whole",
            "When showing continuous data"
        ],
        correctAnswer: "When comparing two sets of data for the same categories",
        explanation: "Double bar graphs are perfect for comparing two related sets of data across the same categories, like boys' and girls' test scores in different subjects. 📊",
        wrongAnswerExplanations: {
            "When showing changes over time": "Line graphs are better for temporal changes.",
            "When displaying parts of a whole": "Pie charts are better for showing parts of a whole.",
            "When showing continuous data": "Histograms or line graphs are better for continuous data."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch13_t1_qm8',
        type: "mcq",
        question: "What can be concluded if a scatter plot shows points randomly scattered with no pattern?",
        options: [
            "The variables are positively correlated",
            "The variables are negatively correlated",
            "There is no correlation between the variables",
            "The data is incorrect"
        ],
        correctAnswer: "There is no correlation between the variables",
        explanation: "Random scattering of points indicates no correlation - changes in one variable don't consistently correspond to changes in the other variable. 📊",
        wrongAnswerExplanations: {
            "The variables are positively correlated": "This would show as an upward trend.",
            "The variables are negatively correlated": "This would show as a downward trend.",
            "The data is incorrect": "Random scatter can be valid data showing no relationship."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch13_t1_qm9',
        type: "mcq",
        question: "If you're creating a pictograph where one symbol 🍎 represents 5 items, how many symbols would you need to represent 23 items?",
        options: [
            "4 full symbols and 1 partial symbol (⅗)",
            "5 full symbols",
            "4 full symbols",
            "5 full symbols and 1 partial symbol (⅕)"
        ],
        correctAnswer: "4 full symbols and 1 partial symbol (⅗)",
        explanation: "23 ÷ 5 = 4.6, so we need 4 full symbols (20 items) plus ⅗ of a symbol (3 items). This maintains accuracy while using the scale. 🍎",
        wrongAnswerExplanations: {
            "5 full symbols": "This would represent 25 items, which is too many.",
            "4 full symbols": "This would represent only 20 items, which is too few.",
            "5 full symbols and 1 partial symbol (⅕)": "This would represent more than 25 items."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch13_t1_qm10',
        type: "mcq",
        question: "What type of graph would be most appropriate for showing both the amount AND pattern of rainfall over a year?",
        options: [
            "A line graph only",
            "A bar graph only",
            "Either a line or bar graph would work equally well",
            "A combination of line and bar graph"
        ],
        correctAnswer: "Either a line or bar graph would work equally well",
        explanation: "Both line and bar graphs can effectively show rainfall amounts and patterns over time. Line graphs show trends smoothly, while bars show discrete monthly totals clearly. 🌧️",
        wrongAnswerExplanations: {
            "A line graph only": "While good for trends, it's not the only suitable option.",
            "A bar graph only": "While good for amounts, it's not the only suitable option.",
            "A combination of line and bar graph": "Using both would be redundant as either type alone is sufficient."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch13_t1_qm11',
        type: "mcq",
        question: "When creating a line graph of daily temperatures, what should you do if data for one day is missing?",
        options: [
            "Connect the points on either side of the missing day",
            "Stop the line at the missing day and start a new line after it",
            "Use zero for the missing day",
            "Use the average of the previous and next day's temperatures"
        ],
        correctAnswer: "Stop the line at the missing day and start a new line after it",
        explanation: "Breaking the line shows there's missing data, avoiding misleading connections while maintaining data integrity. A gap is better than making assumptions. 📈",
        wrongAnswerExplanations: {
            "Connect the points on either side of the missing day": "This implies a trend we don't know existed.",
            "Use zero for the missing day": "This would create an incorrect and misleading dip.",
            "Use the average of the previous and next day's temperatures": "This assumes a linear change we can't verify."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch13_t1_qm12',
        type: "mcq",
        question: "In a pie chart showing monthly expenses, if rent takes up 120° of the circle, what fraction of the total expenses does rent represent?",
        options: [
            "1/4",
            "1/3",
            "1/2",
            "2/5"
        ],
        correctAnswer: "1/3",
        explanation: "In a pie chart, 360° represents the whole. If rent is 120°, then: 120° ÷ 360° = 1/3. This means rent represents one-third of total expenses. 🏠",
        wrongAnswerExplanations: {
            "1/4": "1/4 would be 90° (360° ÷ 4), which is less than 120°.",
            "1/2": "1/2 would be 180° (360° ÷ 2), which is more than 120°.",
            "2/5": "2/5 would be 144° (360° × 2/5), which is more than 120°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch13_t1_qm13',
        type: "mcq",
        question: "What would be the best way to represent data showing how students travel to school (walk, bike, bus, car) AND the average time taken by each method?",
        options: [
            "A single pie chart",
            "A single bar graph",
            "A pie chart for methods and a bar graph for times",
            "A double bar graph"
        ],
        correctAnswer: "A pie chart for methods and a bar graph for times",
        explanation: "A pie chart best shows the proportion of students using each method, while a bar graph clearly shows and compares the average times for each method. 🚌",
        wrongAnswerExplanations: {
            "A single pie chart": "Can't effectively show both proportions and times.",
            "A single bar graph": "Would either show counts or times, not both effectively.",
            "A double bar graph": "Not ideal for showing proportions of the whole."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch13_t1_qm14',
        type: "mcq",
        question: "What's the main advantage of using a grouped bar graph instead of multiple pie charts when comparing data across years?",
        options: [
            "It uses less space",
            "It's easier to see exact values",
            "It's better for showing percentages",
            "It shows patterns more clearly"
        ],
        correctAnswer: "It's easier to see exact values",
        explanation: "Grouped bar graphs allow direct comparison of values using the scale, while pie charts make it difficult to compare exact values between different charts. 📊",
        wrongAnswerExplanations: {
            "It uses less space": "Multiple pie charts might actually use less space.",
            "It's better for showing percentages": "Pie charts are actually better for showing percentages.",
            "It shows patterns more clearly": "Both can show patterns, but this isn't the main advantage."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch13_t1_qm15',
        type: "mcq",
        question: "When creating a histogram for test scores (0-100), what would be an appropriate class interval to use?",
        options: [
            "5 marks",
            "10 marks",
            "25 marks",
            "50 marks"
        ],
        correctAnswer: "10 marks",
        explanation: "10-mark intervals (0-9, 10-19, etc.) provide enough detail to show the distribution pattern without too many or too few bars. It's a standard interval for 100-point scales. 📚",
        wrongAnswerExplanations: {
            "5 marks": "Too small, would create too many bars and might obscure patterns.",
            "25 marks": "Too large, would hide important distribution details.",
            "50 marks": "Much too large, would hide most of the distribution pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch13_t1_qm16',
        type: "mcq",
        question: "If you're showing population growth over 50 years, why might you choose a line graph over a bar graph?",
        options: [
            "Line graphs are always better than bar graphs",
            "To emphasize continuous change and trends",
            "To show exact values more clearly",
            "To save space on the page"
        ],
        correctAnswer: "To emphasize continuous change and trends",
        explanation: "Line graphs emphasize the continuous nature of population change and make it easier to see overall trends, growth rates, and patterns over time. 📈",
        wrongAnswerExplanations: {
            "Line graphs are always better than bar graphs": "Each type has its own best uses.",
            "To show exact values more clearly": "Bar graphs actually show exact values more clearly.",
            "To save space on the page": "This isn't a primary reason for choosing graph types."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch13_t1_qm17',
        type: "mcq",
        question: "What's the key difference between a bar graph and a pictograph in terms of accuracy?",
        options: [
            "Bar graphs are always more accurate",
            "Pictographs are always more accurate",
            "Bar graphs show exact values while pictographs approximate",
            "There is no difference in accuracy"
        ],
        correctAnswer: "Bar graphs show exact values while pictographs approximate",
        explanation: "Bar graphs use a precise scale to show exact values, while pictographs often round to the nearest symbol or half-symbol, making them less precise. 📊",
        wrongAnswerExplanations: {
            "Bar graphs are always more accurate": "Too absolute - pictographs can be accurate for their purpose.",
            "Pictographs are always more accurate": "Incorrect - they're generally less precise.",
            "There is no difference in accuracy": "There is a clear difference in precision."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch13_t1_qm18',
        type: "mcq",
        question: "When creating a line graph of monthly temperatures, what effect does connecting the points have on the interpretation of the data?",
        options: [
            "It suggests continuous change between data points",
            "It makes the graph more colorful",
            "It has no effect on interpretation",
            "It makes the values more accurate"
        ],
        correctAnswer: "It suggests continuous change between data points",
        explanation: "Connecting points implies that temperature changes smoothly between measurements, showing a continuous trend rather than just discrete monthly values. 🌡️",
        wrongAnswerExplanations: {
            "It makes the graph more colorful": "Color is not related to data interpretation.",
            "It has no effect on interpretation": "The connections significantly affect how we interpret changes.",
            "It makes the values more accurate": "Connecting points doesn't improve accuracy."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch13_t1_qm19',
        type: "mcq",
        question: "What's the main consideration when choosing between a vertical and horizontal bar graph?",
        options: [
            "Vertical is always better",
            "Horizontal is always better",
            "Length of category labels and space available",
            "Number of categories only"
        ],
        correctAnswer: "Length of category labels and space available",
        explanation: "Horizontal bars work better with long category labels as they're easier to read. Space constraints and label length should guide the choice of orientation. 📊",
        wrongAnswerExplanations: {
            "Vertical is always better": "Each orientation has its uses.",
            "Horizontal is always better": "Each orientation has its uses.",
            "Number of categories only": "Label length is more important than category count."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch13_t1_qm20',
        type: "mcq",
        question: "When creating a graph showing annual rainfall, temperature, and humidity, what's the best way to handle the different scales?",
        options: [
            "Use the same scale for all",
            "Use separate graphs",
            "Use a dual y-axis",
            "Convert all to percentages"
        ],
        correctAnswer: "Use a dual y-axis",
        explanation: "A dual y-axis allows plotting of variables with different scales (mm for rainfall, °C for temperature, % for humidity) on the same graph while maintaining accuracy. 📈",
        wrongAnswerExplanations: {
            "Use the same scale for all": "Different units can't use the same scale meaningfully.",
            "Use separate graphs": "This makes it harder to see relationships between variables.",
            "Convert all to percentages": "This would distort the actual measurements."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 