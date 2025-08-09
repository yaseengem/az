import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch3_t2_qm1',
        type: "mcq",
        question: "The mean of 5 numbers is 8. If one number is removed, the mean becomes 7. What is the removed number?",
        options: ["10", "12", "14", "16"],
        correctAnswer: "12",
        explanation: "Total of 5 numbers = 5 × 8 = 40. Total of 4 numbers = 4 × 7 = 28. Removed number = 40 - 28 = 12. 🧮",
        wrongAnswerExplanations: {
            "10": "This would make the new mean too low.",
            "14": "This would make the new mean too high.",
            "16": "This would make the new mean too high."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch3_t2_qm2',
        type: "mcq",
        question: "The median of 7 consecutive odd numbers is 15. What is the largest number?",
        options: ["19", "21", "23", "25"],
        correctAnswer: "21",
        explanation: "The numbers are 9, 11, 13, 15, 17, 19, 21. The largest number is 21. 📏",
        wrongAnswerExplanations: {
            "19": "This is not the largest number in the sequence.",
            "23": "This is too large for the sequence.",
            "25": "This is too large for the sequence."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch3_t2_qm3',
        type: "mcq",
        question: "A set has two modes: 5 and 7. If we add another 7 to the set, what will be the mode?",
        options: ["5", "7", "Both 5 and 7", "No mode"],
        correctAnswer: "7",
        explanation: "After adding another 7, it will appear more frequently than 5, making 7 the only mode. 🎯",
        wrongAnswerExplanations: {
            "5": "5 will no longer be a mode after adding another 7.",
            "Both 5 and 7": "Only 7 will be the mode after adding another 7.",
            "No mode": "There will be a mode after adding another 7."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch3_t2_qm4',
        type: "mcq",
        question: "The mean of 4 numbers is 10. If each number is increased by 2, what is the new mean?",
        options: ["10", "11", "12", "13"],
        correctAnswer: "12",
        explanation: "When each number is increased by 2, the mean also increases by 2. New mean = 10 + 2 = 12. 📊",
        wrongAnswerExplanations: {
            "10": "The mean should increase when all numbers increase.",
            "11": "The mean should increase by the same amount as the numbers.",
            "13": "This is too high for the increase."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch3_t2_qm5',
        type: "mcq",
        question: "The median of 5 numbers is 8. If the smallest number is 3 and the largest is 12, what could be the other three numbers?",
        options: ["6, 8, 10", "5, 8, 9", "7, 8, 9", "4, 8, 11"],
        correctAnswer: "7, 8, 9",
        explanation: "When arranged: 3, 7, 8, 9, 12. The middle number is 8. 📏",
        wrongAnswerExplanations: {
            "6, 8, 10": "This would make the median 8, but the sequence would be 3, 6, 8, 10, 12.",
            "5, 8, 9": "This would make the median 8, but the sequence would be 3, 5, 8, 9, 12.",
            "4, 8, 11": "This would make the median 8, but the sequence would be 3, 4, 8, 11, 12."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch3_t2_qm6',
        type: "mcq",
        question: "A set of numbers has a mean of 15 and a mode of 12. If we add two more 12s to the set, what happens to the mean and mode?",
        options: ["Mean increases, mode stays same", "Mean decreases, mode stays same", "Mean stays same, mode stays same", "Mean decreases, mode increases"],
        correctAnswer: "Mean decreases, mode stays same",
        explanation: "Adding two more 12s (which are below the mean) will decrease the mean. The mode was already 12, so it stays the same. 📊",
        wrongAnswerExplanations: {
            "Mean increases, mode stays same": "Adding numbers below the mean decreases the mean.",
            "Mean stays same, mode stays same": "The mean will change when adding new numbers.",
            "Mean decreases, mode increases": "The mode value doesn't increase, it stays the same."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch3_t2_qm7',
        type: "mcq",
        question: "The mean of 6 numbers is 9. If each number is multiplied by 3, what is the new mean?",
        options: ["9", "18", "27", "36"],
        correctAnswer: "27",
        explanation: "When each number is multiplied by 3, the mean is also multiplied by 3. New mean = 9 × 3 = 27. 📊",
        wrongAnswerExplanations: {
            "9": "The mean should increase when all numbers are multiplied.",
            "18": "This is too low for the multiplication.",
            "36": "This is too high for the multiplication."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch3_t2_qm8',
        type: "mcq",
        question: "A set has mode 5. If we add two numbers that are both different from 5 and different from each other, what happens to the mode?",
        options: ["Mode becomes the new number", "Mode stays 5", "No mode", "Mode becomes both numbers"],
        correctAnswer: "Mode stays 5",
        explanation: "Adding two different numbers that aren't 5 won't change the fact that 5 appears most frequently. 🎯",
        wrongAnswerExplanations: {
            "Mode becomes the new number": "The new numbers appear only once each.",
            "No mode": "5 is still the most frequent number.",
            "Mode becomes both numbers": "The new numbers appear only once each."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch3_t2_qm9',
        type: "mcq",
        question: "The median of 8 numbers is 10. If we add two numbers greater than 10, what happens to the median?",
        options: ["Increases", "Decreases", "Stays same", "Cannot determine"],
        correctAnswer: "Increases",
        explanation: "Adding numbers greater than the median will shift the median position to a higher value. 📏",
        wrongAnswerExplanations: {
            "Decreases": "Adding larger numbers cannot decrease the median.",
            "Stays same": "The median position will shift with new numbers.",
            "Cannot determine": "We can determine that it will increase."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch3_t2_qm10',
        type: "mcq",
        question: "The mean of 5 numbers is 12. If we remove the largest number (which is 20), what is the new mean?",
        options: ["10", "11", "12", "13"],
        correctAnswer: "10",
        explanation: "Total of 5 numbers = 5 × 12 = 60. After removing 20, total = 40. New mean = 40 ÷ 4 = 10. 🧮",
        wrongAnswerExplanations: {
            "11": "This is too high for the new mean.",
            "12": "The mean should decrease after removing the largest number.",
            "13": "This is too high for the new mean."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch3_t2_qm11',
        type: "mcq",
        question: "A set has mean 8 and median 7. If we add a number greater than 8, what happens to the mean and median?",
        options: ["Both increase", "Mean increases, median stays same", "Mean stays same, median increases", "Both stay same"],
        correctAnswer: "Mean increases, median stays same",
        explanation: "Adding a number greater than the mean will increase the mean. The median might stay the same depending on the position. 📊",
        wrongAnswerExplanations: {
            "Both increase": "The median might not increase.",
            "Mean stays same, median increases": "The mean must increase when adding a larger number.",
            "Both stay same": "The mean must increase when adding a larger number."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch3_t2_qm12',
        type: "mcq",
        question: "The mode of a set is 5. If we add two numbers that are both 5, what happens to the mode?",
        options: ["Stays 5", "Becomes the new numbers", "No mode", "Cannot determine"],
        correctAnswer: "Stays 5",
        explanation: "Adding more 5s will only strengthen 5's position as the mode. 🎯",
        wrongAnswerExplanations: {
            "Becomes the new numbers": "The new numbers are also 5.",
            "No mode": "5 is still the most frequent number.",
            "Cannot determine": "We can determine that 5 remains the mode."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch3_t2_qm13',
        type: "mcq",
        question: "The mean of 4 numbers is 10. If we multiply each number by 2 and then add 3, what is the new mean?",
        options: ["20", "23", "26", "29"],
        correctAnswer: "23",
        explanation: "First multiply by 2: 10 × 2 = 20. Then add 3: 20 + 3 = 23. 📊",
        wrongAnswerExplanations: {
            "20": "This only accounts for the multiplication.",
            "26": "This is too high for the transformation.",
            "29": "This is too high for the transformation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch3_t2_qm14',
        type: "mcq",
        question: "A set has median 15. If we add a number less than 15, what happens to the median?",
        options: ["Increases", "Decreases", "Stays same", "Cannot determine"],
        correctAnswer: "Decreases",
        explanation: "Adding a number less than the median will shift the median position to a lower value. 📏",
        wrongAnswerExplanations: {
            "Increases": "Adding a smaller number cannot increase the median.",
            "Stays same": "The median position will shift with new numbers.",
            "Cannot determine": "We can determine that it will decrease."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch3_t2_qm15',
        type: "mcq",
        question: "The mean of 6 numbers is 12. If we add two numbers with sum 24, what is the new mean?",
        options: ["12", "13", "14", "15"],
        correctAnswer: "12",
        explanation: "Total of 6 numbers = 6 × 12 = 72. New total = 72 + 24 = 96. New mean = 96 ÷ 8 = 12. 🧮",
        wrongAnswerExplanations: {
            "13": "The mean stays the same when adding numbers with the same mean.",
            "14": "The mean stays the same when adding numbers with the same mean.",
            "15": "The mean stays the same when adding numbers with the same mean."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch3_t2_qm16',
        type: "mcq",
        question: "A set has mode 8. If we add two different numbers that are both 8, what happens to the mode?",
        options: ["Stays 8", "Becomes the new numbers", "No mode", "Cannot determine"],
        correctAnswer: "Stays 8",
        explanation: "Adding more 8s will only strengthen 8's position as the mode. 🎯",
        wrongAnswerExplanations: {
            "Becomes the new numbers": "The new numbers are also 8.",
            "No mode": "8 is still the most frequent number.",
            "Cannot determine": "We can determine that 8 remains the mode."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch3_t2_qm17',
        type: "mcq",
        question: "The mean of 5 numbers is 10. If we subtract 2 from each number, what is the new mean?",
        options: ["8", "10", "12", "14"],
        correctAnswer: "8",
        explanation: "When each number is decreased by 2, the mean also decreases by 2. New mean = 10 - 2 = 8. 📊",
        wrongAnswerExplanations: {
            "10": "The mean should decrease when all numbers decrease.",
            "12": "This is too high for the decrease.",
            "14": "This is too high for the decrease."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch3_t2_qm18',
        type: "mcq",
        question: "A set has median 20. If we add a number equal to 20, what happens to the median?",
        options: ["Increases", "Decreases", "Stays same", "Cannot determine"],
        correctAnswer: "Stays same",
        explanation: "Adding a number equal to the median will keep the median at 20. 📏",
        wrongAnswerExplanations: {
            "Increases": "Adding the median value cannot increase the median.",
            "Decreases": "Adding the median value cannot decrease the median.",
            "Cannot determine": "We can determine that it stays the same."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch3_t2_qm19',
        type: "mcq",
        question: "The mean of 7 numbers is 14. If we add three numbers with mean 14, what is the new mean?",
        options: ["14", "15", "16", "17"],
        correctAnswer: "14",
        explanation: "Adding numbers with the same mean as the original set will keep the mean at 14. 🧮",
        wrongAnswerExplanations: {
            "15": "The mean stays the same when adding numbers with the same mean.",
            "16": "The mean stays the same when adding numbers with the same mean.",
            "17": "The mean stays the same when adding numbers with the same mean."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch3_t2_qm20',
        type: "mcq",
        question: "A set has no mode. If we add two identical numbers, what happens to the mode?",
        options: ["Stays no mode", "Becomes the new number", "Cannot determine", "Depends on the numbers"],
        correctAnswer: "Becomes the new number",
        explanation: "Adding two identical numbers will make that number the mode since it appears twice while others appear once. 🎯",
        wrongAnswerExplanations: {
            "Stays no mode": "The new identical numbers will create a mode.",
            "Cannot determine": "We can determine that the new number becomes the mode.",
            "Depends on the numbers": "The mode will be the new number regardless of its value."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 