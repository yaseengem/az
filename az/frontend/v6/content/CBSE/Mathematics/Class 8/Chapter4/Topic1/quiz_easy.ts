import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch4_t1_qe1',
        type: "mcq",
        question: "What is the primary purpose of organizing data in a table?",
        options: [
            "To make the data look colorful",
            "To make the data easier to read and understand",
            "To make the data more difficult to access",
            "To hide certain information"
        ],
        correctAnswer: "To make the data easier to read and understand",
        explanation: "Tables organize data systematically in rows and columns, making it easier to read, understand, and analyze information. 📊",
        wrongAnswerExplanations: {
            "To make the data look colorful": "While tables can be colored, their main purpose is organization, not aesthetics.",
            "To make the data more difficult to access": "Tables aim to improve data accessibility, not make it harder.",
            "To hide certain information": "Tables are meant to present information clearly, not hide it."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch4_t1_qe2',
        type: "mcq",
        question: "In a data table, what do we call the horizontal lines of data?",
        options: ["Columns", "Rows", "Cells", "Headers"],
        correctAnswer: "Rows",
        explanation: "Horizontal lines of data in a table are called rows. They run from left to right across the table. 📝",
        wrongAnswerExplanations: {
            "Columns": "Columns are vertical lines of data in a table.",
            "Cells": "Cells are individual boxes where rows and columns intersect.",
            "Headers": "Headers are typically the top row or leftmost column that label the data."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch4_t1_qe3',
        type: "mcq",
        question: "What is the intersection point of a row and column called?",
        options: ["Point", "Box", "Cell", "Grid"],
        correctAnswer: "Cell",
        explanation: "The intersection point of a row and column in a table is called a cell. Each cell contains a specific piece of data. 📱",
        wrongAnswerExplanations: {
            "Point": "Point is a geometric term, not used for table intersections.",
            "Box": "While a cell looks like a box, 'cell' is the correct technical term.",
            "Grid": "Grid refers to the entire network of rows and columns."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch4_t1_qe4',
        type: "mcq",
        question: "Which of these is NOT a benefit of organizing data in tables?",
        options: [
            "Easy comparison of data",
            "Quick reference of information",
            "Automatic calculation of values",
            "Clear presentation of relationships"
        ],
        correctAnswer: "Automatic calculation of values",
        explanation: "Tables by themselves don't automatically calculate values - that's a feature of spreadsheet software. Tables simply organize and present data. 🧮",
        wrongAnswerExplanations: {
            "Easy comparison of data": "Tables do make it easy to compare data across rows and columns.",
            "Quick reference of information": "Tables allow for quick and easy reference of information.",
            "Clear presentation of relationships": "Tables effectively show relationships between different data points."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl8_ch4_t1_qe5',
        type: "mcq",
        question: "What do we call the top row of a table that describes the content of each column?",
        options: ["Title row", "Header row", "Description row", "Label row"],
        correctAnswer: "Header row",
        explanation: "The top row of a table that describes the content of each column is called the header row. It helps identify what information each column contains. 📋",
        wrongAnswerExplanations: {
            "Title row": "Title typically refers to the name of the entire table, not column descriptions.",
            "Description row": "While it describes the columns, 'header row' is the correct term.",
            "Label row": "Though it labels the columns, 'header row' is the standard term."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch4_t1_qe6',
        type: "mcq",
        question: "In a student marks table, what would be the most appropriate way to organize the data?",
        options: [
            "Random arrangement of marks",
            "Students in rows and subjects in columns",
            "All information in one column",
            "Subjects in random cells"
        ],
        correctAnswer: "Students in rows and subjects in columns",
        explanation: "Organizing students in rows and subjects in columns creates a clear, logical structure where each student's performance across subjects can be easily read and compared. 📚",
        wrongAnswerExplanations: {
            "Random arrangement of marks": "Random arrangements make it difficult to find and compare information.",
            "All information in one column": "This would make it hard to read and compare different subjects.",
            "Subjects in random cells": "Random placement makes it difficult to locate specific information."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch4_t1_qe7',
        type: "mcq",
        question: "What is the purpose of gridlines in a table?",
        options: [
            "To make the table colorful",
            "To separate and distinguish data clearly",
            "To make the table larger",
            "To add decoration"
        ],
        correctAnswer: "To separate and distinguish data clearly",
        explanation: "Gridlines in a table serve to separate and distinguish data clearly, making it easier to read information from specific rows and columns. 📏",
        wrongAnswerExplanations: {
            "To make the table colorful": "Gridlines are for organization, not decoration.",
            "To make the table larger": "Gridlines don't affect the table's size.",
            "To add decoration": "While they may look neat, their primary purpose is functional."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch4_t1_qe8',
        type: "mcq",
        question: "When creating a table, what should you do first?",
        options: [
            "Add colors",
            "Draw borders",
            "Identify what data needs to be organized",
            "Add random numbers"
        ],
        correctAnswer: "Identify what data needs to be organized",
        explanation: "Before creating a table, you should first identify what data needs to be organized. This helps determine the appropriate structure and layout. 🎯",
        wrongAnswerExplanations: {
            "Add colors": "Visual elements should be considered after the basic structure is planned.",
            "Draw borders": "The structure should be planned before adding visual elements.",
            "Add random numbers": "Data should be meaningful and organized, not random."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl8_ch4_t1_qe9',
        type: "mcq",
        question: "What makes a data table 'well-organized'?",
        options: [
            "Lots of colors and decorations",
            "Clear headers, consistent formatting, and logical arrangement",
            "Very small text to fit more data",
            "Random placement of information"
        ],
        correctAnswer: "Clear headers, consistent formatting, and logical arrangement",
        explanation: "A well-organized table has clear headers, consistent formatting, and a logical arrangement of data that makes information easy to find and understand. 📑",
        wrongAnswerExplanations: {
            "Lots of colors and decorations": "Excessive decoration can distract from the data.",
            "Very small text to fit more data": "Text should be readable and clear.",
            "Random placement of information": "Random placement makes data harder to find and understand."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 40
    },
    {
        id: 'cl8_ch4_t1_qe10',
        type: "mcq",
        question: "Which of these would be most appropriate to present in a table format?",
        options: [
            "A short story",
            "A poem",
            "Monthly temperature readings",
            "A drawing"
        ],
        correctAnswer: "Monthly temperature readings",
        explanation: "Monthly temperature readings are numerical data that can be organized systematically in rows and columns, making them ideal for table presentation. 🌡️",
        wrongAnswerExplanations: {
            "A short story": "Narrative text is better presented in paragraph form.",
            "A poem": "Poetry has a specific format and shouldn't be in a table.",
            "A drawing": "Visual art cannot be effectively presented in a table format."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl8_ch4_t1_qe11',
        type: "mcq",
        question: "What is the advantage of using a table to organize numerical data?",
        options: [
            "It makes numbers bigger",
            "It allows for easy comparison and analysis",
            "It changes the values",
            "It makes calculations automatic"
        ],
        correctAnswer: "It allows for easy comparison and analysis",
        explanation: "Tables organize numerical data in a way that makes it easy to compare values and analyze patterns or trends. 📊",
        wrongAnswerExplanations: {
            "It makes numbers bigger": "Tables don't change the size of numbers.",
            "It changes the values": "Tables present data but don't modify values.",
            "It makes calculations automatic": "Tables organize data but don't perform calculations."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch4_t1_qe12',
        type: "mcq",
        question: "In a weather data table, what would be the most logical way to organize daily temperature readings?",
        options: [
            "Random order of days",
            "Temperatures in random cells",
            "Days in chronological order",
            "Only showing highest temperatures"
        ],
        correctAnswer: "Days in chronological order",
        explanation: "Organizing days in chronological order makes it easy to track temperature changes over time and identify patterns. 📅",
        wrongAnswerExplanations: {
            "Random order of days": "Random ordering makes it difficult to track patterns over time.",
            "Temperatures in random cells": "Random placement makes data analysis difficult.",
            "Only showing highest temperatures": "This would omit important data points."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl8_ch4_t1_qe13',
        type: "mcq",
        question: "What is the purpose of leaving spaces between columns in a table?",
        options: [
            "To waste paper",
            "To make the table bigger",
            "To improve readability",
            "To add more columns later"
        ],
        correctAnswer: "To improve readability",
        explanation: "Spaces between columns help distinguish different categories of data and make the table easier to read. 👀",
        wrongAnswerExplanations: {
            "To waste paper": "Spacing serves a functional purpose, not to waste space.",
            "To make the table bigger": "The purpose is clarity, not size.",
            "To add more columns later": "Spaces are for readability, not future additions."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch4_t1_qe14',
        type: "mcq",
        question: "Which of these is an important consideration when creating a table?",
        options: [
            "Using as many different fonts as possible",
            "Making the table as large as possible",
            "Ensuring consistent spacing and alignment",
            "Adding decorative images in every cell"
        ],
        correctAnswer: "Ensuring consistent spacing and alignment",
        explanation: "Consistent spacing and alignment make a table look professional and easy to read. It helps users quickly locate and understand the data. 📐",
        wrongAnswerExplanations: {
            "Using as many different fonts as possible": "Multiple fonts can make the table confusing and unprofessional.",
            "Making the table as large as possible": "Size should be appropriate for the data, not maximized.",
            "Adding decorative images in every cell": "Unnecessary decoration can distract from the data."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl8_ch4_t1_qe15',
        type: "mcq",
        question: "What type of data is best suited for organization in a table?",
        options: [
            "Long paragraphs of text",
            "Structured data with clear categories",
            "Abstract art",
            "Musical notes"
        ],
        correctAnswer: "Structured data with clear categories",
        explanation: "Tables are ideal for organizing structured data with clear categories, making it easy to present and analyze information systematically. 📊",
        wrongAnswerExplanations: {
            "Long paragraphs of text": "Paragraphs are better presented in regular text format.",
            "Abstract art": "Visual art cannot be effectively organized in a table.",
            "Musical notes": "Musical notation has its own specific format."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch4_t1_qe16',
        type: "mcq",
        question: "When organizing data about different fruits and their prices, what would be the best column headers?",
        options: [
            "A, B, C, D",
            "1, 2, 3, 4",
            "Fruit Name, Price per kg",
            "X, Y"
        ],
        correctAnswer: "Fruit Name, Price per kg",
        explanation: "Descriptive headers like 'Fruit Name' and 'Price per kg' clearly indicate what information each column contains. 🍎",
        wrongAnswerExplanations: {
            "A, B, C, D": "Letters don't describe the content of the columns.",
            "1, 2, 3, 4": "Numbers don't indicate what information the columns contain.",
            "X, Y": "These symbols don't describe the data in the columns."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl8_ch4_t1_qe17',
        type: "mcq",
        question: "What should you do if you have too much data to fit in a single table?",
        options: [
            "Make the text very small",
            "Remove important information",
            "Create multiple related tables",
            "Squeeze everything together"
        ],
        correctAnswer: "Create multiple related tables",
        explanation: "When data doesn't fit in one table, creating multiple related tables helps maintain organization and readability. 📑",
        wrongAnswerExplanations: {
            "Make the text very small": "Small text reduces readability.",
            "Remove important information": "Removing data loses valuable information.",
            "Squeeze everything together": "Cramming data makes the table hard to read."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 40
    },
    {
        id: 'cl8_ch4_t1_qe18',
        type: "mcq",
        question: "What is the purpose of bold text in table headers?",
        options: [
            "To use more ink",
            "To make the table prettier",
            "To emphasize and distinguish headers from data",
            "To make the table longer"
        ],
        correctAnswer: "To emphasize and distinguish headers from data",
        explanation: "Bold text in headers helps distinguish column titles from the data, making the table structure clearer and easier to read. 🖊️",
        wrongAnswerExplanations: {
            "To use more ink": "Bold text serves a functional purpose, not to use more ink.",
            "To make the table prettier": "While it may look nice, the purpose is functional.",
            "To make the table longer": "Bold text doesn't affect table length."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch4_t1_qe19',
        type: "mcq",
        question: "Which of these would make a table harder to read?",
        options: [
            "Clear headers",
            "Consistent spacing",
            "Mixed font sizes and styles",
            "Aligned numbers"
        ],
        correctAnswer: "Mixed font sizes and styles",
        explanation: "Using different font sizes and styles creates visual inconsistency and makes the table harder to read and understand. 👓",
        wrongAnswerExplanations: {
            "Clear headers": "Clear headers improve readability.",
            "Consistent spacing": "Consistent spacing makes the table easier to read.",
            "Aligned numbers": "Properly aligned numbers improve readability."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl8_ch4_t1_qe20',
        type: "mcq",
        question: "What is the best way to align numerical data in a table?",
        options: [
            "Left alignment",
            "Center alignment",
            "Right alignment",
            "Random alignment"
        ],
        correctAnswer: "Right alignment",
        explanation: "Right alignment of numbers makes it easier to compare values and spot patterns, especially with decimal points. 🔢",
        wrongAnswerExplanations: {
            "Left alignment": "Left alignment makes it harder to compare numerical values.",
            "Center alignment": "Center alignment can make it difficult to scan numbers quickly.",
            "Random alignment": "Inconsistent alignment makes the table hard to read."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 