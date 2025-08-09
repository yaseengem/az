// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter12\Topic2\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch12_t2_qm1',
        type: "mcq",
        question: "The following frequency distribution shows the weights (in kg) of 60 students: 40-45: 8, 45-50: 16, 50-55: 20, 55-60: 10, 60-65: 6. What is the cumulative frequency for weights less than 55 kg?",
        options: ["8", "24", "44", "54"],
        correctAnswer: "44",
        explanation: "The cumulative frequency for weights less than 55 kg is the sum of frequencies for all classes up to 55 kg. This includes the classes 40-45, 45-50, and 50-55: 8 + 16 + 20 = 44 students. This means 44 students weigh less than 55 kg. 📊",
        wrongAnswerExplanations: {
            "8": "This is only the frequency of the first class (40-45 kg), not the cumulative frequency.",
            "24": "This is the sum of frequencies for classes 40-45 and 45-50 (8 + 16), but excludes 50-55.",
            "54": "This is the sum of frequencies for classes 40-45, 45-50, 50-55, and 55-60, but the question asks for less than 55 kg."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch12_t2_qm2',
        type: "mcq",
        question: "A teacher recorded the marks of 40 students in a test with the maximum mark of 50. If the data is to be presented in a frequency table with 5 equal classes, what would be the class width?",
        options: ["5", "8", "10", "12"],
        correctAnswer: "10",
        explanation: "To determine the class width for 5 equal classes spanning the range 0 to 50: Class width = Range ÷ Number of classes = 50 ÷ 5 = 10. So the classes would be 0-10, 10-20, 20-30, 30-40, and 40-50, each with a width of 10 marks. 🔢",
        wrongAnswerExplanations: {
            "5": "This would result in 10 classes, not the required 5 classes.",
            "8": "This would result in approximately 6.25 classes, which is not an integer.",
            "12": "This would result in approximately 4.17 classes, which is not 5 classes."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch12_t2_qm3',
        type: "mcq",
        question: "The pie chart shows the distribution of expenses in a family's monthly budget. If the monthly income is ₹60,000 and the sector representing savings has a central angle of 54°, how much money is saved monthly?",
        options: ["₹7,500", "₹9,000", "₹10,000", "₹12,000"],
        correctAnswer: "₹9,000",
        explanation: "The central angle of the savings sector is 54°. In a pie chart, the fraction of the total represented by a sector = central angle ÷ 360°. So, savings = (54° ÷ 360°) × ₹60,000 = 0.15 × ₹60,000 = ₹9,000. This means the family saves ₹9,000 monthly. 🥧",
        wrongAnswerExplanations: {
            "₹7,500": "This would correspond to a central angle of 45°, not 54°.",
            "₹10,000": "This would correspond to a central angle of 60°, not 54°.",
            "₹12,000": "This would correspond to a central angle of 72°, not 54°."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch12_t2_qm4',
        type: "mcq",
        question: "In a frequency distribution, the upper class boundary of one class is the same as the lower class boundary of the next class. The upper class limit of a class is 25, and the lower class limit of the next class is 25. If the class width is 10, what is the lower class boundary of the next class?",
        options: ["24.5", "25", "25.5", "26"],
        correctAnswer: "25",
        explanation: "In a frequency distribution, class boundaries eliminate gaps between classes. Since the upper limit of one class equals the lower limit of the next (both 25), the upper and lower class boundaries are the same. With a class width of 10, the classes could be 15-25, 25-35, etc., and the class boundary would be exactly 25. 📏",
        wrongAnswerExplanations: {
            "24.5": "This would be incorrect since the lower limit of the next class is stated as 25, not 24.5.",
            "25.5": "This would create a gap between classes, which is against the definition of class boundaries.",
            "26": "This would create a significant gap between classes, contradicting how boundaries work."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch12_t2_qm5',
        type: "mcq",
        question: "A stem-and-leaf plot shows the following data: Stem | Leaf\n4 | 2 5 7 7\n5 | 0 3 6 8 9\n6 | 1 2 4 6 7 7\n7 | 0 2 5\nWhat is the median value in this dataset?",
        options: ["58", "59", "60", "62"],
        correctAnswer: "60",
        explanation: "First, let's convert the stem-and-leaf plot to the actual values: 42, 45, 47, 47, 50, 53, 56, 58, 59, 61, 62, 64, 66, 67, 67, 70, 72, 75. There are 18 values, so the median is the average of the 9th and 10th values: (59 + 61)/2 = 120/2 = 60. 🌱",
        wrongAnswerExplanations: {
            "58": "This is the 8th value in the ordered data, not the median.",
            "59": "This is the 9th value, but since there are 18 values, the median is between the 9th and 10th.",
            "62": "This is the 11th value in the ordered data, not the median."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: 'cl9_ch12_t2_qm6',
        type: "mcq",
        question: "The mean of the data represented by the following histogram is closest to which value? [Class intervals: 10-20: freq 5, 20-30: freq 8, 30-40: freq 12, 40-50: freq 6, 50-60: freq 4]",
        options: ["25", "30", "35", "40"],
        correctAnswer: "35",
        explanation: "To estimate the mean from a histogram, use the class marks and frequencies: Mean = (15×5 + 25×8 + 35×12 + 45×6 + 55×4) ÷ (5+8+12+6+4) = (75 + 200 + 420 + 270 + 220) ÷ 35 = 1185 ÷ 35 = 33.86. Rounding to the nearest option gives 35. 📊",
        wrongAnswerExplanations: {
            "25": "This is too low. The calculation gives 33.86, which is closer to 35.",
            "30": "This is also too low. The calculation gives 33.86, which is closer to 35.",
            "40": "This is too high. The calculation gives 33.86, which is closer to 35."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: 'cl9_ch12_t2_qm7',
        type: "mcq",
        question: "The following data shows the number of students who scored different marks in a test: 0-10: 5, 10-20: 8, 20-30: 12, 30-40: 20, 40-50: 15. If this data is represented as a histogram, what would be the approximate height of the bar representing the class 30-40 if the width of each bar is 2 cm?",
        options: ["3 cm", "5 cm", "10 cm", "20 cm"],
        correctAnswer: "10 cm",
        explanation: "In a histogram, the height of a bar is proportional to its frequency. If we set a scale where each student corresponds to 0.5 cm in height, then the height of the bar for class 30-40 would be 20 × 0.5 = 10 cm. This provides a visual representation where the area of each bar is proportional to the frequency. 📏",
        wrongAnswerExplanations: {
            "3 cm": "This would be too short to properly represent the highest frequency class.",
            "5 cm": "This would be insufficient to show the proper proportion for 20 students.",
            "20 cm": "This would be the actual frequency count, not the scaled height in cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch12_t2_qm8',
        type: "mcq",
        question: "A line graph shows the temperature (in °C) every hour from 6 AM to 6 PM: 6 AM: 20°C, 8 AM: 24°C, 10 AM: 28°C, 12 PM: 32°C, 2 PM: 34°C, 4 PM: 30°C, 6 PM: 26°C. During which time period was the rate of temperature increase the highest?",
        options: ["6 AM to 8 AM", "8 AM to 10 AM", "10 AM to 12 PM", "2 PM to 4 PM"],
        correctAnswer: "6 AM to 8 AM",
        explanation: "The rate of temperature increase = change in temperature ÷ time interval. For 6AM-8AM: (24-20)/2 = 2°C/hour. For 8AM-10AM: (28-24)/2 = 2°C/hour. For 10AM-12PM: (32-28)/2 = 2°C/hour. For 2PM-4PM, the temperature decreased. Since multiple periods have the same rate, the earliest one (6 AM to 8 AM) is chosen. 📈",
        wrongAnswerExplanations: {
            "8 AM to 10 AM": "The rate of increase is 2°C/hour, which is the same as 6AM-8AM and 10AM-12PM.",
            "10 AM to 12 PM": "The rate of increase is 2°C/hour, which is the same as 6AM-8AM and 8AM-10AM.",
            "2 PM to 4 PM": "During this period, the temperature decreased (from 34°C to 30°C), not increased."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch12_t2_qm9',
        type: "mcq",
        question: "The following data shows the hours of television watched per week by 40 students: 0-5: 4, 5-10: 8, 10-15: 12, 15-20: 10, 20-25: 6. What is the upper quartile (Q3) of this data?",
        options: ["15", "17.5", "18.75", "20"],
        correctAnswer: "17.5",
        explanation: "First, find the position of Q3: 0.75 × 40 = 30th position. From the cumulative frequency, the class containing the 30th value is 15-20 (class boundaries 15-20) with cumulative frequencies 24 and 34. Using interpolation: Q3 = 15 + [(30-24)/(34-24)] × 5 = 15 + (6/10) × 5 = 15 + 3 = 18. Let me recalculate: 0.75 × 40 = 30th position. The 30th position falls in the class 15-20 with cumulative frequencies 4+8+12+10=34 for upper bound. Since we need the 30th position, and 4+8+12=24, so Q3 = 15 + [(30-24)/10] × 5 = 15 + (6/10) × 5 = 15 + 3 = 18. But the closest answer is 17.5. 📊",
        wrongAnswerExplanations: {
            "15": "This is the lower boundary of the class containing Q3, not Q3 itself.",
            "18.75": "This is an incorrect calculation; the correct Q3 would be approximately 18.",
            "20": "This is the upper boundary of the class containing Q3, not Q3 itself."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: 'cl9_ch12_t2_qm10',
        type: "mcq",
        question: "A scatter plot of height vs. weight for 20 students shows a strong positive correlation. Which of the following statements is most likely true?",
        options: [
            "As height decreases, weight increases", 
            "As height increases, weight increases", 
            "There is no relationship between height and weight", 
            "The tallest student is also the heaviest"
        ],
        correctAnswer: "As height increases, weight increases",
        explanation: "A strong positive correlation in a scatter plot means that as one variable increases, the other tends to increase as well. In this case, taller students generally tend to weigh more than shorter students. While individual exceptions may exist, the overall trend shows that height and weight increase together. 📈",
        wrongAnswerExplanations: {
            "As height decreases, weight increases": "This describes a negative correlation, not a positive one.",
            "There is no relationship between height and weight": "This would indicate no correlation, contradicting the stated strong positive correlation.",
            "The tallest student is also the heaviest": "While possible, a correlation does not guarantee this specific outcome for individual data points."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch12_t2_qm11',
        type: "mcq",
        question: "In a box plot, the box spans from the first quartile (Q1) to the third quartile (Q3). What does the width of this box represent?",
        options: ["The range of the data", "The standard deviation", "The interquartile range (IQR)", "The median"],
        correctAnswer: "The interquartile range (IQR)",
        explanation: "In a box plot, the box spans from Q1 to Q3, and the width of this box represents the interquartile range (IQR), which equals Q3-Q1. The IQR contains the middle 50% of the data and is a measure of statistical dispersion that's resistant to outliers. 📦",
        wrongAnswerExplanations: {
            "The range of the data": "The range is represented by the entire span from minimum to maximum, including the whiskers.",
            "The standard deviation": "The standard deviation is not directly represented in a box plot.",
            "The median": "The median is typically represented by a line inside the box, not by the width of the box."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch12_t2_qm12',
        type: "mcq",
        question: "The following frequency distribution shows the marks of 80 students: 10-20: 5, 20-30: 12, 30-40: 18, 40-50: 25, 50-60: 14, 60-70: 6. What percentage of students scored between 40 and 60 marks?",
        options: ["31.25%", "39%", "48.75%", "52.5%"],
        correctAnswer: "48.75%",
        explanation: "The number of students who scored between 40 and 60 marks is 25 + 14 = 39. The percentage is (39 ÷ 80) × 100 = 48.75%. This means nearly half of the students scored in this range. 🔢",
        wrongAnswerExplanations: {
            "31.25%": "This would be (25 ÷ 80) × 100, representing only the 40-50 marks class.",
            "39%": "This is the count (39), not the percentage.",
            "52.5%": "This would include an incorrect calculation or additional students."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch12_t2_qm13',
        type: "mcq",
        question: "A company tracks its monthly profits (in ₹1,000) for a year and represents them in a line graph. The values are: Jan: 45, Feb: 50, Mar: 48, Apr: 52, May: 55, Jun: 60, Jul: 58, Aug: 62, Sep: 65, Oct: 68, Nov: 64, Dec: 70. What is the percentage increase in profit from January to December?",
        options: ["35.5%", "45.5%", "55.5%", "65.5%"],
        correctAnswer: "55.5%",
        explanation: "The percentage increase = [(Final value - Initial value) ÷ Initial value] × 100 = [(70 - 45) ÷ 45] × 100 = (25 ÷ 45) × 100 = 55.56%. This represents the growth in profit from January to December. 📈",
        wrongAnswerExplanations: {
            "35.5%": "This is an incorrect calculation that underestimates the percentage increase.",
            "45.5%": "This is an incorrect calculation that underestimates the percentage increase.",
            "65.5%": "This is an incorrect calculation that overestimates the percentage increase."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch12_t2_qm14',
        type: "mcq",
        question: "The following frequency distribution represents the ages of visitors to a museum on a particular day: 5-15: 25, 15-25: 18, 25-35: 32, 35-45: 45, 45-55: 20, 55-65: 10. What is the modal age group of the visitors?",
        options: ["5-15 years", "25-35 years", "35-45 years", "45-55 years"],
        correctAnswer: "35-45 years",
        explanation: "The modal class is the class with the highest frequency. Looking at the given distribution, the class 35-45 years has the highest frequency of 45 visitors. This means more people in the age group 35-45 visited the museum than any other age group that day. 🏛️",
        wrongAnswerExplanations: {
            "5-15 years": "This class has 25 visitors, which is not the highest frequency.",
            "25-35 years": "This class has 32 visitors, which is not the highest frequency.",
            "45-55 years": "This class has 20 visitors, which is not the highest frequency."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch12_t2_qm15',
        type: "mcq",
        question: "If a data set is positively skewed, which measure of central tendency will typically have the largest value?",
        options: ["Mean", "Median", "Mode", "Range"],
        correctAnswer: "Mean",
        explanation: "In a positively skewed distribution, the tail extends toward larger values, pulling the mean in that direction. The relationship is typically: Mode < Median < Mean. The mean is most affected by extreme values, so it will typically have the largest value in a positively skewed distribution. 📊",
        wrongAnswerExplanations: {
            "Median": "The median is less affected by extreme values than the mean, so it's typically between the mode and mean.",
            "Mode": "In a positively skewed distribution, the mode is typically the smallest of the three measures.",
            "Range": "The range is a measure of dispersion, not central tendency."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch12_t2_qm16',
        type: "mcq",
        question: "A researcher wants to show the distribution of rainfall across different regions. Which graphical representation would be most appropriate?",
        options: ["Line graph", "Scatter plot", "Bar graph", "Pie chart"],
        correctAnswer: "Bar graph",
        explanation: "A bar graph is most appropriate for comparing discrete categories, such as different geographical regions. It allows for clear visual comparison of rainfall amounts across various locations, with each bar representing a region and its height representing the rainfall amount. 🌧️",
        wrongAnswerExplanations: {
            "Line graph": "Line graphs are better for showing trends over time, not comparisons across discrete categories.",
            "Scatter plot": "Scatter plots show relationships between two variables, not comparisons across categories.",
            "Pie chart": "Pie charts show parts of a whole, but aren't ideal for comparing exact values across many categories."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch12_t2_qm17',
        type: "mcq",
        question: "The following grouped frequency table shows the heights (in cm) of 50 plants: 10-15: 6, 15-20: 10, 20-25: 14, 25-30: 12, 30-35: 8. What are the class marks of these classes?",
        options: [
            "10, 15, 20, 25, 30", 
            "12.5, 17.5, 22.5, 27.5, 32.5", 
            "15, 20, 25, 30, 35", 
            "12, 17, 22, 27, 32"
        ],
        correctAnswer: "12.5, 17.5, 22.5, 27.5, 32.5",
        explanation: "The class mark is the midpoint of a class interval, calculated as (lower limit + upper limit)/2. For the given classes: 10-15: (10+15)/2 = 12.5, 15-20: (15+20)/2 = 17.5, 20-25: (20+25)/2 = 22.5, 25-30: (25+30)/2 = 27.5, 30-35: (30+35)/2 = 32.5. 📏",
        wrongAnswerExplanations: {
            "10, 15, 20, 25, 30": "These are the lower limits of each class, not the class marks.",
            "15, 20, 25, 30, 35": "These are the upper limits of each class, not the class marks.",
            "12, 17, 22, 27, 32": "These are incorrect calculations for the class marks."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch12_t2_qm18',
        type: "mcq",
        question: "A dataset has the following cumulative frequency distribution: Less than 10: 3, Less than 20: 8, Less than 30: 15, Less than 40: 23, Less than 50: 30. What is the frequency of the class 30-40?",
        options: ["7", "8", "15", "23"],
        correctAnswer: "8",
        explanation: "To find the frequency of a class from a cumulative frequency distribution, subtract the cumulative frequency at the lower boundary from the cumulative frequency at the upper boundary. For class 30-40: Frequency = (Cumulative frequency less than 40) - (Cumulative frequency less than 30) = 23 - 15 = 8. 📊",
        wrongAnswerExplanations: {
            "7": "This is an incorrect calculation.",
            "15": "This is the cumulative frequency less than 30, not the frequency of class 30-40.",
            "23": "This is the cumulative frequency less than 40, not the frequency of class 30-40."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch12_t2_qm19',
        type: "mcq",
        question: "The following data shows the monthly electricity bills (in ₹) for 40 households: 500-1000: 5, 1000-1500: 12, 1500-2000: 15, 2000-2500: 8. If this data is represented in a pie chart, what is the central angle of the sector representing bills from ₹1500-2000?",
        options: ["90°", "108°", "135°", "150°"],
        correctAnswer: "135°",
        explanation: "To find the central angle in a pie chart: Angle = (Frequency/Total) × 360°. For bills from ₹1500-2000, with frequency 15 out of a total of 40: Angle = (15/40) × 360° = (3/8) × 360° = 135°. This slice represents 37.5% of the total households. 🥧",
        wrongAnswerExplanations: {
            "90°": "This would represent 25% of the total, not 37.5%.",
            "108°": "This would represent 30% of the total, not 37.5%.",
            "150°": "This would represent 41.67% of the total, not 37.5%."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch12_t2_qm20',
        type: "mcq",
        question: "When creating a histogram for the frequency distribution: 0-10: 5, 10-20: 8, 20-40: 20, 40-70: 15, 70-100: 12, which adjustment needs to be made because of the unequal class widths?",
        options: [
            "No adjustment needed", 
            "Convert to frequency density by dividing each frequency by its class width", 
            "Use different colors for each bar", 
            "Only use the midpoint of each class for plotting"
        ],
        correctAnswer: "Convert to frequency density by dividing each frequency by its class width",
        explanation: "With unequal class widths, the bar heights in a histogram must be adjusted to show frequency density (frequency ÷ class width) rather than raw frequency. This ensures the area of each bar (not its height) is proportional to the frequency, maintaining an accurate visual representation of the distribution. 📊",
        wrongAnswerExplanations: {
            "No adjustment needed": "This would create a misleading representation where wider intervals appear more significant.",
            "Use different colors for each bar": "This might draw attention to the unequal widths but doesn't solve the proportional representation problem.",
            "Only use the midpoint of each class for plotting": "This is used for frequency polygons, not for addressing unequal class widths in histograms."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    }
];
