import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch4_t1_qm1',
        type: "mcq",
        question: "A table shows the monthly rainfall in millimeters for a city. If you want to compare the rainfall between different months, what would be the most effective way to organize the data?",
        options: [
            "Months in random order with rainfall",
            "Rainfall amounts in ascending order without months",
            "Months in chronological order with corresponding rainfall",
            "Only months with highest rainfall"
        ],
        correctAnswer: "Months in chronological order with corresponding rainfall",
        explanation: "Chronological order allows easy tracking of rainfall patterns throughout the year and makes seasonal comparisons possible. 🌧️",
        wrongAnswerExplanations: {
            "Months in random order with rainfall": "Random order makes it difficult to identify seasonal patterns.",
            "Rainfall amounts in ascending order without months": "Without months, seasonal patterns cannot be identified.",
            "Only months with highest rainfall": "This excludes important data needed for complete analysis."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch4_t1_qm2',
        type: "mcq",
        question: "In a table showing test scores of 50 students, what would be the most efficient way to find the number of students who scored above 90%?",
        options: [
            "Count each score individually",
            "Organize scores in descending order",
            "Create a frequency distribution table",
            "List only scores above 90%"
        ],
        correctAnswer: "Create a frequency distribution table",
        explanation: "A frequency distribution table groups scores into ranges, making it easy to count how many students fall into each category. 📊",
        wrongAnswerExplanations: {
            "Count each score individually": "This method is time-consuming and prone to errors.",
            "Organize scores in descending order": "While helpful, it still requires counting each score.",
            "List only scores above 90%": "This loses important information about other score ranges."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch4_t1_qm3',
        type: "mcq",
        question: "A table shows sales data for different products. Which organization method would best help identify the best and worst selling products?",
        options: [
            "Alphabetical order by product name",
            "Random arrangement of products",
            "Arranging by sales volume in descending order",
            "Grouping products by category only"
        ],
        correctAnswer: "Arranging by sales volume in descending order",
        explanation: "Arranging by sales volume in descending order immediately shows highest and lowest selling products, making performance analysis straightforward. 📈",
        wrongAnswerExplanations: {
            "Alphabetical order by product name": "Alphabetical order doesn't help identify sales patterns.",
            "Random arrangement of products": "Random arrangement makes analysis difficult.",
            "Grouping products by category only": "Categories alone don't show individual product performance."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 40
    },
    {
        id: 'cl8_ch4_t1_qm4',
        type: "mcq",
        question: "When creating a table to track daily expenses, which column arrangement would be most useful for budget analysis?",
        options: [
            "Date, Amount only",
            "Date, Item, Amount, Category",
            "Item, Amount only",
            "Category, Amount only"
        ],
        correctAnswer: "Date, Item, Amount, Category",
        explanation: "This arrangement provides complete information for tracking expenses, allowing analysis by date, item, amount, and category. 💰",
        wrongAnswerExplanations: {
            "Date, Amount only": "Lacks details about what the expense was for.",
            "Item, Amount only": "Missing date makes it impossible to track spending over time.",
            "Category, Amount only": "Lacks specific details and timing of expenses."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch4_t1_qm5',
        type: "mcq",
        question: "In a large dataset, what's the best way to handle text that's too long to fit in a single cell?",
        options: [
            "Make the text smaller",
            "Remove part of the text",
            "Merge multiple cells",
            "Use text wrapping and adjust row height"
        ],
        correctAnswer: "Use text wrapping and adjust row height",
        explanation: "Text wrapping maintains readability while keeping all information visible, and adjusting row height ensures all content is displayed properly. 📝",
        wrongAnswerExplanations: {
            "Make the text smaller": "Reduces readability and accessibility.",
            "Remove part of the text": "Loses important information.",
            "Merge multiple cells": "Disrupts table structure and makes data analysis difficult."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 40
    },
    {
        id: 'cl8_ch4_t1_qm6',
        type: "mcq",
        question: "When creating a table to compare different products across multiple features, what's the most effective organization method?",
        options: [
            "Features in rows, products in columns",
            "Products in rows, features in columns",
            "All information in a single column",
            "Random arrangement of features and products"
        ],
        correctAnswer: "Products in rows, features in columns",
        explanation: "This arrangement makes it easy to compare different products across various features, with each column representing a specific characteristic. 🔍",
        wrongAnswerExplanations: {
            "Features in rows, products in columns": "Makes it harder to compare products at a glance.",
            "All information in a single column": "Makes comparison extremely difficult.",
            "Random arrangement of features and products": "Creates confusion and makes comparison impossible."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch4_t1_qm7',
        type: "mcq",
        question: "What's the best way to handle missing data in a table?",
        options: [
            "Leave the cell empty",
            "Put a dash (-) or NA in the cell",
            "Fill with zeros",
            "Delete the entire row"
        ],
        correctAnswer: "Put a dash (-) or NA in the cell",
        explanation: "Using a dash or NA clearly indicates missing data, preventing confusion with zero values or empty cells that might appear to be overlooked. 📊",
        wrongAnswerExplanations: {
            "Leave the cell empty": "Empty cells might be mistaken for overlooked data.",
            "Fill with zeros": "Zeros could be mistaken for actual data points.",
            "Delete the entire row": "Loses other valuable information in that row."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 40
    },
    {
        id: 'cl8_ch4_t1_qm8',
        type: "mcq",
        question: "When creating a table to track inventory across multiple locations, which organization method would be most effective?",
        options: [
            "Single column listing all items and locations",
            "Separate tables for each location",
            "Items in rows, locations in columns",
            "Random arrangement of items and locations"
        ],
        correctAnswer: "Items in rows, locations in columns",
        explanation: "This layout allows easy comparison of item quantities across different locations, making inventory management more efficient. 📦",
        wrongAnswerExplanations: {
            "Single column listing all items and locations": "Makes it difficult to compare quantities across locations.",
            "Separate tables for each location": "Makes it hard to get an overview of all locations.",
            "Random arrangement of items and locations": "Creates confusion and makes tracking difficult."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch4_t1_qm9',
        type: "mcq",
        question: "In a table showing monthly expenses for different departments, what's the best way to highlight departments that exceeded their budget?",
        options: [
            "Make text bigger",
            "Add multiple exclamation marks",
            "Use conditional formatting or highlighting",
            "Write 'over budget' in the cell"
        ],
        correctAnswer: "Use conditional formatting or highlighting",
        explanation: "Conditional formatting visually identifies departments over budget without cluttering the table, making it easy to spot issues quickly. 💡",
        wrongAnswerExplanations: {
            "Make text bigger": "Inconsistent text sizes make the table look unprofessional.",
            "Add multiple exclamation marks": "Looks unprofessional and clutters the table.",
            "Write 'over budget' in the cell": "Takes up space and makes the table harder to read."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 40
    },
    {
        id: 'cl8_ch4_t1_qm10',
        type: "mcq",
        question: "When creating a table to track student attendance over a semester, which format would be most effective?",
        options: [
            "One column for all dates and attendance",
            "Students in columns, dates in rows",
            "Students in rows, dates in columns",
            "Separate tables for each student"
        ],
        correctAnswer: "Students in rows, dates in columns",
        explanation: "This format allows easy tracking of individual student attendance patterns over time and quick calculation of attendance percentages. 📅",
        wrongAnswerExplanations: {
            "One column for all dates and attendance": "Makes it difficult to see patterns and calculate statistics.",
            "Students in columns, dates in rows": "Makes it harder to track individual student patterns.",
            "Separate tables for each student": "Makes it difficult to compare students and see class patterns."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch4_t1_qm11',
        type: "mcq",
        question: "What's the most effective way to show trends in monthly sales data spanning multiple years?",
        options: [
            "List all months sequentially",
            "Create separate tables for each year",
            "Months in rows, years in columns",
            "Random arrangement by month and year"
        ],
        correctAnswer: "Months in rows, years in columns",
        explanation: "This arrangement allows easy comparison of same months across different years, making it simple to identify seasonal patterns and year-over-year growth. 📊",
        wrongAnswerExplanations: {
            "List all months sequentially": "Makes it difficult to compare same months across years.",
            "Create separate tables for each year": "Makes year-to-year comparison difficult.",
            "Random arrangement by month and year": "Makes it impossible to identify patterns."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch4_t1_qm12',
        type: "mcq",
        question: "When creating a table to compare different countries' populations over decades, what's the best way to handle large numbers?",
        options: [
            "Write all digits with commas",
            "Use scientific notation",
            "Express in millions with appropriate decimal places",
            "Round to nearest whole number"
        ],
        correctAnswer: "Express in millions with appropriate decimal places",
        explanation: "Using millions with decimals makes large numbers more readable while maintaining accuracy, and allows easier comparison between values. 🌍",
        wrongAnswerExplanations: {
            "Write all digits with commas": "Makes the table cluttered and harder to read quickly.",
            "Use scientific notation": "Makes it harder for general audience to understand.",
            "Round to nearest whole number": "Loses too much precision for population data."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch4_t1_qm13',
        type: "mcq",
        question: "In a table tracking daily temperature readings, what's the best way to show temperature changes?",
        options: [
            "List only highest temperatures",
            "Show maximum and minimum temperatures in separate tables",
            "Include columns for max, min, and average temperatures",
            "Show only temperature differences"
        ],
        correctAnswer: "Include columns for max, min, and average temperatures",
        explanation: "This provides a complete picture of daily temperature variations and trends, allowing comprehensive analysis of weather patterns. 🌡️",
        wrongAnswerExplanations: {
            "List only highest temperatures": "Misses important information about temperature range.",
            "Show maximum and minimum temperatures in separate tables": "Makes it harder to see daily ranges.",
            "Show only temperature differences": "Loses important absolute temperature values."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch4_t1_qm14',
        type: "mcq",
        question: "When creating a table to track project progress, which combination of columns would be most informative?",
        options: [
            "Task name and deadline only",
            "Task name, start date, end date, status, assigned to",
            "Task name and status only",
            "Task name and assigned person only"
        ],
        correctAnswer: "Task name, start date, end date, status, assigned to",
        explanation: "This combination provides complete information about each task's timeline, current status, and responsibility, enabling effective project management. 📋",
        wrongAnswerExplanations: {
            "Task name and deadline only": "Misses important tracking information.",
            "Task name and status only": "Lacks timeline and responsibility information.",
            "Task name and assigned person only": "Missing crucial timeline and progress information."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 40
    },
    {
        id: 'cl8_ch4_t1_qm15',
        type: "mcq",
        question: "What's the most effective way to organize a grade book table for multiple subjects and assessments?",
        options: [
            "All grades in one column",
            "Separate tables for each subject",
            "Students in rows, subjects and assessments in columns",
            "Assessments in rows, students in columns"
        ],
        correctAnswer: "Students in rows, subjects and assessments in columns",
        explanation: "This organization allows easy tracking of individual student performance across all subjects and assessments, facilitating comprehensive evaluation. 📚",
        wrongAnswerExplanations: {
            "All grades in one column": "Makes it impossible to analyze performance patterns.",
            "Separate tables for each subject": "Makes it difficult to see overall student performance.",
            "Assessments in rows, students in columns": "Makes it harder to track individual student progress."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch4_t1_qm16',
        type: "mcq",
        question: "When creating a comparison table for different products' specifications, what's the best way to handle features that don't apply to all products?",
        options: [
            "Leave cells empty",
            "Write 'not applicable' or 'N/A'",
            "Use a dash (-)",
            "Remove those features from the table"
        ],
        correctAnswer: "Write 'not applicable' or 'N/A'",
        explanation: "Using 'N/A' clearly indicates that a feature doesn't apply to a product, preventing confusion with missing data or zero values. 🔍",
        wrongAnswerExplanations: {
            "Leave cells empty": "Empty cells might be interpreted as missing data.",
            "Use a dash (-)": "Could be confused with zero or negative values.",
            "Remove those features from the table": "Loses important comparison information."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 40
    },
    {
        id: 'cl8_ch4_t1_qm17',
        type: "mcq",
        question: "In a table tracking monthly expenses across different categories, what's the most useful additional column to include?",
        options: [
            "Random notes",
            "Color codes",
            "Percentage of total budget",
            "Category codes"
        ],
        correctAnswer: "Percentage of total budget",
        explanation: "Including percentage of total budget helps quickly identify which categories consume the most resources and aids in budget planning. 💲",
        wrongAnswerExplanations: {
            "Random notes": "Unstructured information doesn't aid analysis.",
            "Color codes": "Doesn't add quantitative value to the analysis.",
            "Category codes": "Adds complexity without providing additional insights."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch4_t1_qm18',
        type: "mcq",
        question: "When creating a table to track inventory levels over time, what's the most important column to include besides quantity?",
        options: [
            "Item color",
            "Random notes",
            "Reorder point",
            "Supplier phone number"
        ],
        correctAnswer: "Reorder point",
        explanation: "Including reorder point helps maintain optimal inventory levels by indicating when new stock should be ordered, preventing stockouts. 📦",
        wrongAnswerExplanations: {
            "Item color": "Not critical for inventory management.",
            "Random notes": "Unstructured information doesn't help inventory tracking.",
            "Supplier phone number": "Contact information should be in a separate reference table."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 40
    },
    {
        id: 'cl8_ch4_t1_qm19',
        type: "mcq",
        question: "What's the best way to organize a table showing daily sales across multiple store locations?",
        options: [
            "All sales in one column",
            "Separate tables for each store",
            "Days in rows, stores in columns",
            "Random arrangement of data"
        ],
        correctAnswer: "Days in rows, stores in columns",
        explanation: "This arrangement allows easy comparison of daily sales across different locations and helps identify patterns in store performance. 🏪",
        wrongAnswerExplanations: {
            "All sales in one column": "Makes it impossible to compare stores easily.",
            "Separate tables for each store": "Makes it difficult to compare performance across stores.",
            "Random arrangement of data": "Makes analysis and comparison impossible."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch4_t1_qm20',
        type: "mcq",
        question: "When creating a table to track student performance in different skills, what's the most effective rating system to use?",
        options: [
            "Just 'good' or 'bad'",
            "Random comments",
            "Numerical scale (1-5) with clear descriptors",
            "Different emoji for each student"
        ],
        correctAnswer: "Numerical scale (1-5) with clear descriptors",
        explanation: "A numerical scale with clear descriptors provides consistent, measurable evaluation criteria while maintaining clarity in assessment. 📊",
        wrongAnswerExplanations: {
            "Just 'good' or 'bad'": "Too simplistic, doesn't show varying levels of performance.",
            "Random comments": "Lacks consistency and makes comparison difficult.",
            "Different emoji for each student": "Too subjective and lacks standardization."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 