import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl3_ch13_t1_qe1',
        type: "mcq",
        question: "What is data?",
        options: ["Numbers only", "Information collected about something", "Only pictures and charts", "Only names of people"],
        correctAnswer: "Information collected about something",
        explanation: "Data is information collected about something. It can include numbers, words, measurements, or observations.",
        wrongAnswerExplanations: {
            "Numbers only": "Data can include numbers, but also words, pictures, and other information.",
            "Only pictures and charts": "Pictures and charts are ways to display data, not the data itself.",
            "Only names of people": "Names can be data, but data includes many other types of information too."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch13_t1_qe2',
        type: "mcq",
        question: "Which of these is a way to collect data?",
        options: ["Counting objects", "Sleeping", "Playing games", "Eating food"],
        correctAnswer: "Counting objects",
        explanation: "Counting objects is a method of collecting data. It helps us gather information about quantities.",
        wrongAnswerExplanations: {
            "Sleeping": "Sleeping is not a method of collecting data.",
            "Playing games": "Playing games is not directly a method of collecting data.",
            "Eating food": "Eating food is not a method of collecting data."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch13_t1_qe3',
        type: "mcq",
        question: "If Ravi counts the number of students wearing blue shirts in his class, what is he collecting?",
        options: ["Food items", "Data", "Toys", "Books"],
        correctAnswer: "Data",
        explanation: "Ravi is collecting data because he is gathering information by counting students with blue shirts.",
        wrongAnswerExplanations: {
            "Food items": "Ravi is not counting or collecting food items.",
            "Toys": "Ravi is not counting or collecting toys.",
            "Books": "Ravi is not counting or collecting books."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch13_t1_qe4',
        type: "mcq",
        question: "What is a tally mark used for?",
        options: ["Drawing pictures", "Keeping track of counting", "Writing letters", "Making patterns"],
        correctAnswer: "Keeping track of counting",
        explanation: "Tally marks help us keep track of counting by making a mark for each item counted.",
        wrongAnswerExplanations: {
            "Drawing pictures": "Tally marks are not primarily used for drawing pictures.",
            "Writing letters": "Tally marks are not used for writing letters.",
            "Making patterns": "While tally marks can form patterns, their main purpose is counting."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch13_t1_qe5',
        type: "mcq",
        question: "How do we usually show a group of 5 tally marks?",
        options: ["IIIII", "||||", "|||| |", "||||I"],
        correctAnswer: "|||| |",
        explanation: "We show a group of 5 tally marks as 4 vertical lines with 1 line crossing through them (|||| |).",
        wrongAnswerExplanations: {
            "IIIII": "This is incorrect. Tally marks use vertical lines, not the letter I.",
            "||||": "This shows only 4 tally marks, not 5.",
            "||||I": "This is incorrect. The fifth mark should cross through the previous four, not be written separately."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch13_t1_qe6',
        type: "mcq",
        question: "What do we call a chart that uses pictures to represent data?",
        options: ["Word chart", "Pictograph", "Letter chart", "Number line"],
        correctAnswer: "Pictograph",
        explanation: "A pictograph uses pictures or symbols to represent data, making it easy to understand visually.",
        wrongAnswerExplanations: {
            "Word chart": "A word chart typically uses words, not pictures to represent data.",
            "Letter chart": "A letter chart is not a standard way to represent data.",
            "Number line": "A number line shows numbers in order, not data using pictures."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch13_t1_qe7',
        type: "mcq",
        question: "If 🍎 represents 2 apples in a pictograph, what do 3 apple symbols (🍎🍎🍎) represent?",
        options: ["3 apples", "5 apples", "6 apples", "9 apples"],
        correctAnswer: "6 apples",
        explanation: "If one 🍎 symbol represents 2 apples, then 3 symbols (🍎🍎🍎) represent 3 × 2 = 6 apples.",
        wrongAnswerExplanations: {
            "3 apples": "This would be correct if each symbol represented 1 apple, but here each symbol represents 2 apples.",
            "5 apples": "This is incorrect. 3 symbols at 2 apples each equals 6 apples.",
            "9 apples": "This is incorrect. 3 symbols at 2 apples each equals 6 apples."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch13_t1_qe8',
        type: "mcq",
        question: "What is a bar graph?",
        options: ["A kind of candy", "A chart that uses bars to display data", "A type of ruler", "A set of numbers"],
        correctAnswer: "A chart that uses bars to display data",
        explanation: "A bar graph displays data using rectangular bars of different heights or lengths.",
        wrongAnswerExplanations: {
            "A kind of candy": "This is not related to data or charts.",
            "A type of ruler": "A ruler is a measuring tool, not a way to display data.",
            "A set of numbers": "A set of numbers is data itself, not a way to display data."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch13_t1_qe9',
        type: "mcq",
        question: "What information does a title on a chart provide?",
        options: ["The color of the chart", "What the chart is about", "How many people made the chart", "When to use the chart"],
        correctAnswer: "What the chart is about",
        explanation: "The title tells us what information the chart is displaying or what the chart is about.",
        wrongAnswerExplanations: {
            "The color of the chart": "The title doesn't describe the physical appearance of the chart.",
            "How many people made the chart": "The title doesn't typically tell us who made the chart.",
            "When to use the chart": "The title doesn't tell us when to use the chart."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch13_t1_qe10',
        type: "mcq",
        question: "In a pictograph about favorite fruits, what might each 🍌 symbol represent?",
        options: ["One student", "One fruit", "One classroom", "One school"],
        correctAnswer: "One student",
        explanation: "In a pictograph about favorite fruits, each symbol typically represents one vote or one student's choice.",
        wrongAnswerExplanations: {
            "One fruit": "This would be confusing in a chart about favorite fruits, as the symbol itself is a fruit.",
            "One classroom": "This would be too large a unit for a simple pictograph about individual preferences.",
            "One school": "This would be too large a unit for a simple pictograph about individual preferences."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch13_t1_qe11',
        type: "mcq",
        question: "Which of these questions could be answered using data collection?",
        options: ["What is your name?", "What color is the sky?", "How many students like pizza in our class?", "How do birds fly?"],
        correctAnswer: "How many students like pizza in our class?",
        explanation: "This question requires gathering information (data) from multiple students to find the total number.",
        wrongAnswerExplanations: {
            "What is your name?": "This asks for a single piece of information about one person, not data collection from a group.",
            "What color is the sky?": "This is a simple observation question, not data collection.",
            "How do birds fly?": "This is a scientific question about mechanism, not data collection."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch13_t1_qe12',
        type: "mcq",
        question: "What does a key or legend in a pictograph tell us?",
        options: ["How to lock the chart", "What each symbol represents", "Who made the chart", "Where to put the chart"],
        correctAnswer: "What each symbol represents",
        explanation: "A key or legend explains what each symbol in the pictograph represents or how to interpret it.",
        wrongAnswerExplanations: {
            "How to lock the chart": "This is not related to charts or data.",
            "Who made the chart": "A key doesn't typically tell us who created the chart.",
            "Where to put the chart": "A key doesn't tell us where to display the chart."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch13_t1_qe13',
        type: "mcq",
        question: "In a bar graph showing heights of plants, what do the taller bars represent?",
        options: ["Shorter plants", "Taller plants", "Older plants", "More water"],
        correctAnswer: "Taller plants",
        explanation: "In a bar graph, taller bars represent larger values. For plant heights, taller bars would show taller plants.",
        wrongAnswerExplanations: {
            "Shorter plants": "This would be incorrect as taller bars represent larger values, not smaller ones.",
            "Older plants": "The graph is about height, not age, so we can't determine this.",
            "More water": "The graph is about height, not water, so we can't determine this."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch13_t1_qe14',
        type: "mcq",
        question: "What is the first step in collecting data?",
        options: ["Making a graph", "Deciding what information you want to gather", "Telling others about your results", "Coloring a picture"],
        correctAnswer: "Deciding what information you want to gather",
        explanation: "The first step is deciding what information you need, so you know what data to collect.",
        wrongAnswerExplanations: {
            "Making a graph": "This comes after you've collected the data, not before.",
            "Telling others about your results": "This comes after you've collected and analyzed the data.",
            "Coloring a picture": "This is not related to data collection."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch13_t1_qe15',
        type: "mcq",
        question: "What are the vertical lines called in a bar graph?",
        options: ["Roads", "Sticks", "Bars", "Lines"],
        correctAnswer: "Bars",
        explanation: "The vertical rectangles in a bar graph are called bars, which is why it's called a bar graph.",
        wrongAnswerExplanations: {
            "Roads": "Bar graphs don't have components called roads.",
            "Sticks": "The rectangles in bar graphs are called bars, not sticks.",
            "Lines": "While a bar graph may have lines for axes, the data representations are called bars."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch13_t1_qe16',
        type: "mcq",
        question: "If we want to know the most popular pet in our class, what should we do first?",
        options: ["Buy pets for everyone", "Ask each student what pet they have", "Make a bar graph", "Read a book about pets"],
        correctAnswer: "Ask each student what pet they have",
        explanation: "To find the most popular pet, we first need to collect data by asking each student about their pet.",
        wrongAnswerExplanations: {
            "Buy pets for everyone": "This doesn't help us find out what pets are already popular.",
            "Make a bar graph": "We can't make a graph until after we collect the data.",
            "Read a book about pets": "Reading about pets doesn't tell us which ones our classmates have."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch13_t1_qe17',
        type: "mcq",
        question: "What is the purpose of organizing data?",
        options: ["To make it confusing", "To make it colorful", "To make it easier to understand", "To make it disappear"],
        correctAnswer: "To make it easier to understand",
        explanation: "We organize data to make it clearer and easier to understand, analyze, and draw conclusions from.",
        wrongAnswerExplanations: {
            "To make it confusing": "The purpose of organizing data is the opposite—to make it clear, not confusing.",
            "To make it colorful": "While charts may use colors, the main purpose of organizing data isn't about appearance.",
            "To make it disappear": "Organizing data helps highlight information, not hide it."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch13_t1_qe18',
        type: "mcq",
        question: "How many tally marks are in this group: |||| |||| |?",
        options: ["9", "10", "11", "12"],
        correctAnswer: "11",
        explanation: "There are two complete groups of 5 (|||| |) which is 10, plus 1 more tally mark, for a total of 11.",
        wrongAnswerExplanations: {
            "9": "This is incorrect. There are 10 marks in the two complete groups of 5, plus 1 more.",
            "10": "This is incorrect. There are 10 marks in the two complete groups of 5, plus 1 more.",
            "12": "This is incorrect. There are 10 marks in the two complete groups of 5, plus 1 more."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch13_t1_qe19',
        type: "mcq",
        question: "What would be a good title for a chart showing how many books each student read last month?",
        options: ["Books Are Fun", "My Favorite Color", "Number of Books Read Last Month", "School Library"],
        correctAnswer: "Number of Books Read Last Month",
        explanation: "This title clearly explains what information the chart is showing—the number of books each student read.",
        wrongAnswerExplanations: {
            "Books Are Fun": "This is an opinion, not a description of what the chart shows.",
            "My Favorite Color": "This is unrelated to the data about books read.",
            "School Library": "This is related to books but doesn't describe what the chart is showing."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch13_t1_qe20',
        type: "mcq",
        question: "Which of these would help you count the number of rainy days in a month?",
        options: ["A storybook", "A calendar with weather marks", "A toy car", "A television"],
        correctAnswer: "A calendar with weather marks",
        explanation: "A calendar where you mark each rainy day helps you collect and count data about weather patterns.",
        wrongAnswerExplanations: {
            "A storybook": "A storybook doesn't help track actual weather data.",
            "A toy car": "A toy car is unrelated to tracking weather data.",
            "A television": "While TV may give weather reports, it doesn't help you personally track and count rainy days."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
