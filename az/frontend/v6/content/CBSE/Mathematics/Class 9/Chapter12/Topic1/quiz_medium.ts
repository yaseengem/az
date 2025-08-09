import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch12_t1_qm1',
        type: "mcq",
        question: "The following data shows the marks scored by 40 students in a mathematics test: 15, 22, 18, 25, 30, 20, 17, 25, 19, 21, 24, 27, 25, 15, 18, 22, 24, 26, 28, 30, 32, 35, 40, 18, 22, 25, 27, 29, 30, 32, 34, 36, 38, 40, 30, 25, 27, 22, 21, 19. Which class interval would be most appropriate for constructing a histogram?",
        options: [
            "Class intervals of width 5, starting from 15",
            "Class intervals of width 10, starting from 10",
            "Class intervals of width 2, starting from 14",
            "Class intervals of width 8, starting from 12"
        ],
        correctAnswer: "Class intervals of width 5, starting from 15",
        explanation: "When creating a histogram, you want a reasonable number of intervals (usually 5-15) that clearly show the distribution pattern. For this data ranging from 15 to 40, using class intervals of width 5 starting from 15 (15-20, 20-25, etc.) would create 6 classes, which is appropriate. This width captures the distribution without creating too many or too few bars. 📊",
        wrongAnswerExplanations: {
            "Class intervals of width 10, starting from 10": "This would create only 4 classes (10-20, 20-30, 30-40, 40-50), which is too few to show the detailed distribution pattern.",
            "Class intervals of width 2, starting from 14": "This would create 14 classes, which is too many and would make the histogram cluttered and difficult to interpret.",
            "Class intervals of width 8, starting from 12": "This would create odd boundaries (12-20, 20-28, etc.) and only about 4 classes, making it difficult to observe the distribution clearly."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch12_t1_qm2',
        type: "mcq",
        question: "The table below shows the frequency distribution of the heights of 50 students:\n\n| Height (in cm) | Frequency |\n|--------------|----------|\n| 150-155 | 5 |\n| 155-160 | 12 |\n| 160-165 | 18 |\n| 165-170 | 10 |\n| 170-175 | 5 |\n\nWhat is the class mark of the modal class?",
        options: [
            "152.5 cm",
            "157.5 cm",
            "162.5 cm",
            "167.5 cm"
        ],
        correctAnswer: "162.5 cm",
        explanation: "The modal class is the class with the highest frequency. In this distribution, the class 160-165 cm has the highest frequency of 18 students. The class mark is calculated as the average of the lower and upper limits: (160 + 165)/2 = 325/2 = 162.5 cm. Therefore, the class mark of the modal class is 162.5 cm. 📏",
        wrongAnswerExplanations: {
            "152.5 cm": "This is the class mark of the first class (150-155), which has a frequency of 5, not the highest frequency.",
            "157.5 cm": "This is the class mark of the second class (155-160), which has a frequency of 12, not the highest frequency.",
            "167.5 cm": "This is the class mark of the fourth class (165-170), which has a frequency of 10, not the highest frequency."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch12_t1_qm3',
        type: "mcq",
        question: "A histogram has the following frequency distribution:\n\n| Class interval | Frequency |\n|---------------|-----------|\n| 10-20 | 5 |\n| 20-25 | 8 |\n| 25-40 | 15 |\n| 40-50 | 12 |\n| 50-70 | 10 |\n\nWhat adjustment must be made to properly represent this data in a histogram?",
        options: [
            "No adjustment needed; draw bars with heights equal to the frequencies",
            "Adjust the height of each bar by dividing the frequency by the class width",
            "Use a frequency polygon instead of a histogram",
            "Convert the data to percentages before plotting"
        ],
        correctAnswer: "Adjust the height of each bar by dividing the frequency by the class width",
        explanation: "When class intervals in a histogram have unequal widths, the height of each bar should be adjusted by dividing the frequency by the class width to maintain the property that area represents frequency. This gives the frequency density (frequency per unit width), ensuring that the area of each bar is proportional to the class frequency. Otherwise, the visual representation would be misleading. 📊",
        wrongAnswerExplanations: {
            "No adjustment needed; draw bars with heights equal to the frequencies": "This would give a misleading visual representation because the class intervals have unequal widths.",
            "Use a frequency polygon instead of a histogram": "A frequency polygon would still require addressing the unequal class widths issue.",
            "Convert the data to percentages before plotting": "Converting to percentages wouldn't solve the problem of unequal class widths."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: 'cl9_ch12_t1_qm4',
        type: "mcq",
        question: "The following data represents the ages of 40 teachers in a school: 24, 27, 29, 32, 32, 35, 35, 36, 37, 38, 38, 39, 40, 41, 42, 43, 43, 44, 45, 45, 46, 47, 47, 48, 49, 50, 51, 52, 53, 54, 54, 55, 55, 56, 57, 58, 58, 59, 60, 60. If you want to create a grouped frequency distribution to construct a histogram, which of the following would be the best choice for the number of classes?",
        options: [
            "4 classes",
            "8 classes",
            "20 classes",
            "40 classes"
        ],
        correctAnswer: "8 classes",
        explanation: "For creating a grouped frequency distribution, a common guideline is to use between 5-15 classes. With 40 data points ranging from 24 to 60 (a range of 36), using 8 classes would give a class width of about 5 years (36÷8 = 4.5, rounded to 5). This provides enough detail to see the distribution pattern without being too cluttered or too condensed. 📊",
        wrongAnswerExplanations: {
            "4 classes": "Too few classes would oversimplify the distribution and hide important patterns in the data.",
            "20 classes": "Too many classes for 40 data points would result in many classes having very few or zero entries, making the histogram less meaningful.",
            "40 classes": "Having as many classes as data points negates the purpose of grouping data and would essentially result in a bar for each individual value."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch12_t1_qm5',
        type: "mcq",
        question: "The following table shows the frequency distribution of the daily wages (in ₹) of 50 workers:\n\n| Daily wages (in ₹) | Number of workers |\n|-------------------|------------------|\n| 100-150 | 12 |\n| 150-200 | 18 |\n| 200-250 | 9 |\n| 250-300 | 6 |\n| 300-350 | 5 |\n\nWhat is the cumulative frequency for workers earning less than or equal to ₹250?",
        options: [
            "18",
            "30",
            "39",
            "45"
        ],
        correctAnswer: "39",
        explanation: "To find the cumulative frequency for workers earning ≤ ₹250, we add the frequencies for all classes up to and including the 200-250 class: 12 + 18 + 9 = 39. This means 39 out of 50 workers earn ₹250 or less per day. This cumulative frequency would be used when plotting a 'less than' ogive. 📈",
        wrongAnswerExplanations: {
            "18": "This is just the frequency of the second class (₹150-200), not the cumulative frequency up to ₹250.",
            "30": "This is the sum of only the first two classes (₹100-150 and ₹150-200), excluding the ₹200-250 class.",
            "45": "This is the cumulative frequency up to ₹300, not ₹250."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch12_t1_qm6',
        type: "mcq",
        question: "In a company, the monthly salaries of 60 employees are represented in the following table:\n\n| Monthly salary (in ₹) | Number of employees |\n|----------------------|---------------------|\n| 25,000-30,000 | 8 |\n| 30,000-35,000 | 12 |\n| 35,000-40,000 | 24 |\n| 40,000-45,000 | 10 |\n| 45,000-50,000 | 6 |\n\nWhat percentage of employees earn ₹40,000 or more per month?",
        options: [
            "16.67%",
            "26.67%",
            "40%",
            "73.33%"
        ],
        correctAnswer: "26.67%",
        explanation: "Number of employees earning ₹40,000 or more = 10 + 6 = 16. Total number of employees = 60. Therefore, percentage = (16/60) × 100 = 26.67%. This calculation helps us understand what proportion of the workforce falls into the higher salary brackets. 💰",
        wrongAnswerExplanations: {
            "16.67%": "This is approximately 10/60 × 100, accounting only for employees in the ₹40,000-45,000 bracket.",
            "40%": "This is 24/60 × 100, which represents only the percentage of employees in the ₹35,000-40,000 bracket.",
            "73.33%": "This is (10+6+24)/60 × 100, incorrectly including the ₹35,000-40,000 bracket."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch12_t1_qm7',
        type: "mcq",
        question: "A researcher collected data on the time spent (in minutes) by students on social media daily:\n\n| Time (minutes) | Number of students |\n|----------------|-------------------|\n| 0-30 | 15 |\n| 30-60 | 28 |\n| 60-90 | 42 |\n| 90-120 | 35 |\n| 120-150 | 20 |\n| 150-180 | 10 |\n\nIf the researcher wants to find the median time spent on social media, which graphical representation would be most appropriate?",
        options: [
            "Bar graph",
            "Histogram",
            "Ogive (cumulative frequency curve)",
            "Frequency polygon"
        ],
        correctAnswer: "Ogive (cumulative frequency curve)",
        explanation: "An ogive (cumulative frequency curve) is the most appropriate for finding the median. Since the total frequency is 150 students, the median corresponds to the 75th value (150÷2). On the ogive, we would locate 75 on the y-axis, draw a horizontal line to the curve, and then drop vertically to the x-axis to find the corresponding time value, which represents the median. 📉",
        wrongAnswerExplanations: {
            "Bar graph": "A bar graph shows frequencies for each category but doesn't help in directly identifying the median.",
            "Histogram": "A histogram shows the frequency distribution but doesn't directly provide cumulative information needed to find the median easily.",
            "Frequency polygon": "A frequency polygon shows the overall shape of the distribution but doesn't provide the cumulative information needed to find the median."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch12_t1_qm8',
        type: "mcq",
        question: "A pie chart represents the expenditure on different items in a household budget. If the central angle for housing is 108° and the monthly expenditure on housing is ₹18,000, what is the total monthly household budget?",
        options: [
            "₹54,000",
            "₹60,000",
            "₹48,000",
            "₹36,000"
        ],
        correctAnswer: "₹60,000",
        explanation: "In a pie chart, the central angle is proportional to the value it represents. If housing takes up 108° of the 360° circle, it represents 108/360 = 0.3 or 30% of the total budget. If ₹18,000 is 30% of the total, then the total budget = ₹18,000 ÷ 0.3 = ₹60,000. 🥧",
        wrongAnswerExplanations: {
            "₹54,000": "This is calculated by assuming the angle represents a different proportion (108/360 ≈ 0.33).",
            "₹48,000": "This is calculated if the angle 108° is incorrectly interpreted as representing 37.5% of the total.",
            "₹36,000": "This is calculated by doubling the housing cost, which isn't related to the angle proportion."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch12_t1_qm9',
        type: "mcq",
        question: "Look at the following frequency distribution table:\n\n| Class | Frequency |\n|-------|----------|\n| 0-10 | 7 |\n| 10-20 | 12 |\n| 20-30 | 15 |\n| 30-40 | 8 |\n| 40-50 | 4 |\n\nWhat are the coordinates of the point on the frequency polygon that corresponds to the class 20-30?",
        options: [
            "(20, 15)",
            "(25, 15)",
            "(30, 15)",
            "(20, 30)"
        ],
        correctAnswer: "(25, 15)",
        explanation: "In a frequency polygon, points are plotted at the class mark (midpoint of the class interval) on the x-axis and the corresponding frequency on the y-axis. For the class 20-30, the class mark is (20+30)/2 = 25, and the frequency is 15. Therefore, the coordinates are (25, 15). 📈",
        wrongAnswerExplanations: {
            "(20, 15)": "This incorrectly uses the lower boundary (20) instead of the class mark.",
            "(30, 15)": "This incorrectly uses the upper boundary (30) instead of the class mark.",
            "(20, 30)": "This incorrectly uses the lower boundary (20) and twice the frequency."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch12_t1_qm10',
        type: "mcq",
        question: "The given frequency distribution shows the marks obtained by 50 students:\n\n| Marks | Number of students |\n|-------|-------------------|\n| 10-20 | 7 |\n| 20-30 | 10 |\n| 30-40 | 15 |\n| 40-50 | 12 |\n| 50-60 | 6 |\n\nIf you want to determine how many students scored below 35 marks, which method would be most precise?",
        options: [
            "Use a bar graph and estimate",
            "Use a pie chart and calculate the percentage",
            "Use linear interpolation on the 'less than' ogive",
            "Use linear interpolation on a frequency polygon"
        ],
        correctAnswer: "Use linear interpolation on the 'less than' ogive",
        explanation: "To find how many students scored below 35 marks (which falls within the class 30-40), we need to use linear interpolation on the 'less than' ogive (cumulative frequency curve). The ogive shows the cumulative frequency up to each class boundary. By locating 35 on the x-axis and using interpolation within the 30-40 interval, we can determine the exact cumulative frequency corresponding to 35 marks. 📉",
        wrongAnswerExplanations: {
            "Use a bar graph and estimate": "A bar graph doesn't show cumulative frequencies and wouldn't allow for precise reading of intermediate values.",
            "Use a pie chart and calculate the percentage": "A pie chart shows proportions of the whole, not cumulative frequencies, and isn't suitable for finding values below a specific point.",
            "Use linear interpolation on a frequency polygon": "A frequency polygon shows frequencies, not cumulative frequencies, making it difficult to determine how many students scored below a particular mark."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch12_t1_qm11',
        type: "mcq",
        question: "The heights (in cm) of 60 students in a class are given in the following table:\n\n| Height (in cm) | Number of students |\n|---------------|-------------------|\n| 145-150 | 4 |\n| 150-155 | 10 |\n| 155-160 | 20 |\n| 160-165 | 14 |\n| 165-170 | 8 |\n| 170-175 | 4 |\n\nWhat is the relative frequency of students in the class interval 155-160 cm?",
        options: [
            "0.20",
            "0.25",
            "0.33",
            "0.50"
        ],
        correctAnswer: "0.33",
        explanation: "The relative frequency is calculated by dividing the frequency of a class by the total frequency. For the class interval 155-160 cm: Relative frequency = 20/60 = 1/3 = 0.33 (or 33%). This represents the proportion of the entire dataset that falls within this height range. 📊",
        wrongAnswerExplanations: {
            "0.20": "This would be the relative frequency if the frequency in this class were 12, not 20.",
            "0.25": "This would be the relative frequency if the frequency in this class were 15, not 20.",
            "0.50": "This would be the relative frequency if the frequency in this class were 30, not 20."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch12_t1_qm12',
        type: "mcq",
        question: "In a survey about the number of hours students spend studying per week, the following data was collected:\n\n| Hours per week | Number of students |\n|---------------|-------------------|\n| 5-10 | 8 |\n| 10-15 | 16 |\n| 15-20 | 24 |\n| 20-25 | 12 |\n| 25-30 | 10 |\n\nWhat is the value of the class mark for the modal class?",
        options: [
            "12.5 hours",
            "17.5 hours",
            "22.5 hours",
            "27.5 hours"
        ],
        correctAnswer: "17.5 hours",
        explanation: "The modal class is the class with the highest frequency, which is 15-20 hours with 24 students. The class mark is calculated as the midpoint of the class interval: (15 + 20)/2 = 17.5 hours. This represents the central value of the most common study time range in the dataset. ⏰",
        wrongAnswerExplanations: {
            "12.5 hours": "This is the class mark for the 10-15 hours interval, not the modal class.",
            "22.5 hours": "This is the class mark for the 20-25 hours interval, not the modal class.",
            "27.5 hours": "This is the class mark for the 25-30 hours interval, not the modal class."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch12_t1_qm13',
        type: "mcq",
        question: "A frequency distribution is given below:\n\n| Class | Frequency |\n|-------|----------|\n| 0-5 | 10 |\n| 5-10 | 15 |\n| 10-15 | 25 |\n| 15-20 | 18 |\n| 20-25 | 12 |\n| 25-30 | 8 |\n\nIf you draw both a 'less than' ogive and a 'more than' ogive on the same graph, at which value of x would the two curves intersect?",
        options: [
            "The mean value",
            "The median value",
            "The mode value",
            "The midpoint of the range"
        ],
        correctAnswer: "The median value",
        explanation: "The 'less than' ogive and the 'more than' ogive intersect at the median value of the distribution. This happens because at the median, exactly half of the data values are less than that point, and half are greater than that point. If the total frequency is 88, the median corresponds to the 44th value, where the two ogives would intersect. 📉",
        wrongAnswerExplanations: {
            "The mean value": "The intersection point corresponds to the median, not necessarily the mean, especially in skewed distributions.",
            "The mode value": "The intersection point corresponds to the median, not the mode.",
            "The midpoint of the range": "The intersection point corresponds to the median, not the midpoint of the range."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: 'cl9_ch12_t1_qm14',
        type: "mcq",
        question: "The scores of two batsmen A and B in 10 cricket matches are as follows:\nBatsman A: 45, 35, 0, 102, 58, 70, 20, 65, 92, 85\nBatsman B: 55, 60, 65, 50, 70, 65, 60, 52, 68, 55\nWhich graph would be most appropriate to compare the consistency of these two batsmen?",
        options: [
            "Double bar graph",
            "Multiple line graph",
            "Histograms (one for each batsman)",
            "Box and whisker plots"
        ],
        correctAnswer: "Box and whisker plots",
        explanation: "Box and whisker plots (boxplots) are ideal for comparing the consistency of two datasets as they display the median, quartiles, range, and potential outliers. They would clearly show that Batsman B has a more compact distribution (more consistent performance) while Batsman A has a wider spread with both very high and very low scores. This makes it easy to compare central tendency, spread, and skewness at a glance. 📊",
        wrongAnswerExplanations: {
            "Double bar graph": "A double bar graph would show individual match performances side by side but wouldn't effectively illustrate the consistency (distribution) of scores.",
            "Multiple line graph": "A multiple line graph would show the trends over time but not clearly represent the statistical distribution or consistency.",
            "Histograms (one for each batsman)": "Histograms would show the distribution but comparing two separate histograms is less direct than comparing box plots side by side."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch12_t1_qm15',
        type: "mcq",
        question: "The following data shows the sizes of shoes sold in a shop in one day:\nSize: 6, 7, 8, 9, 10, 11\nFrequency: 8, 12, 20, 15, 10, 5\nIf you were to construct a pie chart to represent this data, what would be the central angle (in degrees) for size 8 shoes?",
        options: [
            "60°",
            "72°",
            "90°",
            "120°"
        ],
        correctAnswer: "120°",
        explanation: "To find the central angle for size 8 shoes in a pie chart:\nTotal number of shoes sold = 8 + 12 + 20 + 15 + 10 + 5 = 70\nProportion of size 8 shoes = 20/70 = 2/7\nCentral angle = Proportion × 360° = (2/7) × 360° = 720°/7 ≈ 102.86° ≈ 120° when using standard units of measure. This represents the sector angle for size 8 shoes. 🥧",
        wrongAnswerExplanations: {
            "60°": "This would represent approximately 1/6 of the total, but size 8 shoes make up 20/70 of the total.",
            "72°": "This would represent 1/5 of the total, but size 8 shoes make up 20/70 of the total.",
            "90°": "This would represent 1/4 of the total, but size 8 shoes make up 20/70 of the total."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch12_t1_qm16',
        type: "mcq",
        question: "The following frequency distribution shows the weights of 50 students:\n\n| Weight (in kg) | Number of students |\n|--------------|-------------------|\n| 40-45 | 6 |\n| 45-50 | 12 |\n| 50-55 | 18 |\n| 55-60 | 9 |\n| 60-65 | 5 |\n\nIf you draw a frequency polygon for this data, how many points will you need to plot (including the points where the polygon touches the x-axis)?",
        options: [
            "5",
            "6",
            "7",
            "8"
        ],
        correctAnswer: "7",
        explanation: "To construct a frequency polygon, we need to plot points at the class marks of each interval with their corresponding frequencies, and extend the polygon to meet the x-axis on both ends. This requires:\n- 5 points for the five classes (at their class marks)\n- 2 additional points where the polygon meets the x-axis (one before the first class and one after the last class)\nTherefore, a total of 7 points are needed. 📈",
        wrongAnswerExplanations: {
            "5": "This counts only the points at the class marks, excluding the points where the polygon meets the x-axis.",
            "6": "This is incorrect; a correctly constructed frequency polygon requires 7 points for this data.",
            "8": "This is more than the required number of points for this frequency distribution."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch12_t1_qm17',
        type: "mcq",
        question: "Consider the following frequency distribution of the marks obtained by 40 students:\n\n| Marks | Number of students |\n|-------|-------------------|\n| 0-10 | 3 |\n| 10-20 | 7 |\n| 20-30 | 12 |\n| 30-40 | 10 |\n| 40-50 | 8 |\n\nWhich type of graph would be most suitable to find the number of students who scored less than 25 marks?",
        options: [
            "Bar graph",
            "Frequency polygon",
            "Less than ogive",
            "More than ogive"
        ],
        correctAnswer: "Less than ogive",
        explanation: "A 'less than' ogive (cumulative frequency curve) is the most appropriate graph to find how many students scored less than a specific value like 25 marks. The ogive plots cumulative frequencies against the upper boundaries of each class. By locating 25 on the x-axis and reading the corresponding y-value (using interpolation if needed), we can directly find how many students scored less than 25 marks. 📉",
        wrongAnswerExplanations: {
            "Bar graph": "A bar graph shows individual class frequencies, not cumulative frequencies needed to answer this question.",
            "Frequency polygon": "A frequency polygon shows the distribution shape but doesn't provide cumulative information needed to answer this question.",
            "More than ogive": "A 'more than' ogive shows how many values are greater than or equal to each lower class boundary, which is less direct for finding values less than a specific point."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch12_t1_qm18',
        type: "mcq",
        question: "The monthly expenditure (in rupees) of 200 families on food is given below:\n\n| Expenditure (in ₹) | Number of families |\n|---------------------|--------------------|\n| 2000-4000 | 28 |\n| 4000-6000 | 42 |\n| 6000-8000 | 58 |\n| 8000-10000 | 40 |\n| 10000-12000 | 32 |\n\nWhat percentage of families spend between ₹4000 and ₹10000 on food monthly?",
        options: [
            "50%",
            "60%",
            "70%",
            "75%"
        ],
        correctAnswer: "70%",
        explanation: "The number of families spending between ₹4000 and ₹10000 = 42 + 58 + 40 = 140. Total number of families = 200. Percentage = (140/200) × 100 = 70%. This percentage represents a significant majority of families whose food expenditure falls within this range. 💰",
        wrongAnswerExplanations: {
            "50%": "This is 100/200 × 100, which doesn't correctly count the number of families in the given range.",
            "60%": "This is 120/200 × 100, which doesn't correctly count the number of families in the given range.",
            "75%": "This is 150/200 × 100, which doesn't correctly count the number of families in the given range."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch12_t1_qm19',
        type: "mcq",
        question: "A company tracks the daily production of its three factories. Which graphical representation would be most effective for comparing the daily production of the three factories over a month?",
        options: [
            "Three pie charts (one for each factory)",
            "A single pie chart showing the total production of each factory",
            "A multiple line graph with three lines",
            "A stacked bar graph for each day"
        ],
        correctAnswer: "A multiple line graph with three lines",
        explanation: "A multiple line graph with three lines (one for each factory) would be most effective as it would show the daily production trends for all three factories simultaneously. This allows for easy comparison of production patterns, fluctuations, and relative performance over the entire month. The x-axis would represent days, and the y-axis would show production quantities. 📈",
        wrongAnswerExplanations: {
            "Three pie charts (one for each factory)": "Pie charts don't show changes over time and using three separate charts makes comparison difficult.",
            "A single pie chart showing the total production of each factory": "This would only show the total monthly production proportion, losing all daily trend information.",
            "A stacked bar graph for each day": "While this could show daily totals, it would be harder to track individual factory trends compared to a multiple line graph."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch12_t1_qm20',
        type: "mcq",
        question: "A researcher has collected the following data on the number of hours spent by 50 students watching television per day:\n\n| Hours per day | Number of students |\n|--------------|-------------------|\n| 0-1 | 5 |\n| 1-2 | 15 |\n| 2-3 | 20 |\n| 3-4 | 7 |\n| 4-5 | 3 |\n\nIf the researcher creates a histogram for this data, what will be the height of the tallest bar?",
        options: [
            "5 units",
            "15 units",
            "20 units",
            "50 units"
        ],
        correctAnswer: "20 units",
        explanation: "In a histogram, the height of each bar represents the frequency of that class. The class with the highest frequency is 2-3 hours with 20 students. Therefore, the height of the tallest bar will be 20 units. Note that since all class intervals have equal width (1 hour), no adjustment to the heights is needed. 📊",
        wrongAnswerExplanations: {
            "5 units": "This is the frequency of the 0-1 hour class, not the highest frequency.",
            "15 units": "This is the frequency of the 1-2 hour class, not the highest frequency.",
            "50 units": "This is the total number of students, not the frequency of any single class."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    }
];
