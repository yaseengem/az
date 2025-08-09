// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 6\Chapter1\Topic1\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch1_t1_qe1',
        type: "mcq",
        question: "Which number is greater: 3,456 or 3,465?",
        options: ["3,456", "3,465", "They are equal", "Cannot be determined"],
        correctAnswer: "3,465",
        explanation: "Compare from left to right: thousands (3=3), hundreds (4=4), tens (5=5), ones (6<5). Therefore, 3,465 > 3,456. 🔢",
        wrongAnswerExplanations: {
            "3,456": "The ones place in 3,456 is less than in 3,465.",
            "They are equal": "The numbers are different in the ones place.",
            "Cannot be determined": "We can determine by comparing digits from left to right."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch1_t1_qe2',
        type: "mcq",
        question: "Which symbol correctly compares 4,567 and 4,576?",
        options: [">", "<", "=", "≥"],
        correctAnswer: "<",
        explanation: "Compare digits: thousands (4=4), hundreds (5=5), tens (6<7). Therefore, 4,567 < 4,576. 📊",
        wrongAnswerExplanations: {
            ">": "4,567 is less than 4,576 because 6 < 7 in the tens place.",
            "=": "The numbers are different in the tens place.",
            "≥": "4,567 is strictly less than 4,576."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch1_t1_qe3',
        type: "mcq",
        question: "Arrange these numbers in ascending order: 2,345, 2,354, 2,435, 2,453",
        options: [
            "2,345, 2,354, 2,435, 2,453",
            "2,453, 2,435, 2,354, 2,345",
            "2,354, 2,345, 2,453, 2,435",
            "2,435, 2,453, 2,345, 2,354"
        ],
        correctAnswer: "2,345, 2,354, 2,435, 2,453",
        explanation: "Compare from left to right: 2,345 is smallest, then 2,354, then 2,435, and 2,453 is largest. 📈",
        wrongAnswerExplanations: {
            "2,453, 2,435, 2,354, 2,345": "This is descending order, not ascending.",
            "2,354, 2,345, 2,453, 2,435": "The numbers are not in correct ascending order.",
            "2,435, 2,453, 2,345, 2,354": "The numbers are not in correct ascending order."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch1_t1_qe4',
        type: "mcq",
        question: "Which number is the smallest: 3,456, 3,465, 3,546, 3,654?",
        options: ["3,456", "3,465", "3,546", "3,654"],
        correctAnswer: "3,456",
        explanation: "Compare from left to right: 3,456 is smallest as it has the smallest hundreds digit (4) among equal thousands. 🔍",
        wrongAnswerExplanations: {
            "3,465": "3,456 is smaller than 3,465.",
            "3,546": "3,456 is smaller than 3,546.",
            "3,654": "3,456 is smaller than 3,654."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch1_t1_qe5',
        type: "mcq",
        question: "If a book costs ₹1,234 and another costs ₹1,243, which is more expensive?",
        options: ["₹1,234", "₹1,243", "Both cost the same", "Cannot be determined"],
        correctAnswer: "₹1,243",
        explanation: "Compare digits: thousands (1=1), hundreds (2=2), tens (3=3), ones (4<3). Therefore, ₹1,243 > ₹1,234. 💰",
        wrongAnswerExplanations: {
            "₹1,234": "₹1,243 is more expensive than ₹1,234.",
            "Both cost the same": "The prices are different in the ones place.",
            "Cannot be determined": "We can determine by comparing digits from left to right."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch1_t1_qe6',
        type: "mcq",
        question: "Which number comes between 3,456 and 3,458?",
        options: ["3,455", "3,457", "3,459", "3,460"],
        correctAnswer: "3,457",
        explanation: "3,457 is the only number between 3,456 and 3,458. It's one more than 3,456 and one less than 3,458. 🔢",
        wrongAnswerExplanations: {
            "3,455": "3,455 is less than 3,456.",
            "3,459": "3,459 is greater than 3,458.",
            "3,460": "3,460 is greater than 3,458."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch1_t1_qe7',
        type: "mcq",
        question: "Which number is closest to 4,000: 3,999 or 4,001?",
        options: ["3,999", "4,001", "Both are equally close", "Cannot be determined"],
        correctAnswer: "Both are equally close",
        explanation: "Both 3,999 and 4,001 are 1 unit away from 4,000, just in opposite directions. 📏",
        wrongAnswerExplanations: {
            "3,999": "4,001 is also equally close to 4,000.",
            "4,001": "3,999 is also equally close to 4,000.",
            "Cannot be determined": "We can determine that both are equally close."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch1_t1_qe8',
        type: "mcq",
        question: "Which number is the largest: 5,432, 5,342, 5,234, 5,324?",
        options: ["5,432", "5,342", "5,234", "5,324"],
        correctAnswer: "5,432",
        explanation: "Compare from left to right: 5,432 has the largest hundreds digit (4) among equal thousands. 📈",
        wrongAnswerExplanations: {
            "5,342": "5,432 is larger than 5,342.",
            "5,234": "5,432 is larger than 5,234.",
            "5,324": "5,432 is larger than 5,324."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch1_t1_qe9',
        type: "mcq",
        question: "If Team A scored 2,345 points and Team B scored 2,354 points, who won?",
        options: ["Team A", "Team B", "It's a tie", "Cannot be determined"],
        correctAnswer: "Team B",
        explanation: "Compare scores: thousands (2=2), hundreds (3=3), tens (4<5). Therefore, 2,354 > 2,345. 🏆",
        wrongAnswerExplanations: {
            "Team A": "Team B scored more points than Team A.",
            "It's a tie": "The scores are different in the tens place.",
            "Cannot be determined": "We can determine by comparing the scores."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch1_t1_qe10',
        type: "mcq",
        question: "Which number is the smallest 4-digit number?",
        options: ["1,000", "999", "1,111", "1,001"],
        correctAnswer: "1,000",
        explanation: "1,000 is the smallest 4-digit number as it has 1 in thousands place and 0 in all other places. 🔢",
        wrongAnswerExplanations: {
            "999": "999 is a 3-digit number, not 4-digit.",
            "1,111": "1,000 is smaller than 1,111.",
            "1,001": "1,000 is smaller than 1,001."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch1_t1_qe11',
        type: "mcq",
        question: "Which number is the largest 4-digit number?",
        options: ["9,999", "10,000", "9,000", "9,900"],
        correctAnswer: "9,999",
        explanation: "9,999 is the largest 4-digit number as it has 9 in all places. 🔢",
        wrongAnswerExplanations: {
            "10,000": "10,000 is a 5-digit number, not 4-digit.",
            "9,000": "9,999 is larger than 9,000.",
            "9,900": "9,999 is larger than 9,900."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch1_t1_qe12',
        type: "mcq",
        question: "Which number comes just after 3,999?",
        options: ["3,998", "4,000", "4,001", "3,900"],
        correctAnswer: "4,000",
        explanation: "When we add 1 to 3,999, we get 4,000. This is the next number in sequence. ➕",
        wrongAnswerExplanations: {
            "3,998": "3,998 comes before 3,999.",
            "4,001": "4,000 comes before 4,001.",
            "3,900": "3,900 comes before 3,999."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch1_t1_qe13',
        type: "mcq",
        question: "Which number comes just before 5,000?",
        options: ["4,999", "5,001", "4,900", "5,100"],
        correctAnswer: "4,999",
        explanation: "When we subtract 1 from 5,000, we get 4,999. This is the previous number in sequence. ➖",
        wrongAnswerExplanations: {
            "5,001": "5,001 comes after 5,000.",
            "4,900": "4,999 comes after 4,900.",
            "5,100": "5,100 comes after 5,000."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch1_t1_qe14',
        type: "mcq",
        question: "If City A has 3,456 people and City B has 3,465 people, which city has more people?",
        options: ["City A", "City B", "Both have equal population", "Cannot be determined"],
        correctAnswer: "City B",
        explanation: "Compare populations: thousands (3=3), hundreds (4=4), tens (5=5), ones (6<5). Therefore, 3,465 > 3,456. 🏙️",
        wrongAnswerExplanations: {
            "City A": "City B has more people than City A.",
            "Both have equal population": "The populations are different in the ones place.",
            "Cannot be determined": "We can determine by comparing the numbers."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch1_t1_qe15',
        type: "mcq",
        question: "Which number is greater: 4,321 or 4,312?",
        options: ["4,321", "4,312", "They are equal", "Cannot be determined"],
        correctAnswer: "4,321",
        explanation: "Compare digits: thousands (4=4), hundreds (3=3), tens (2>1). Therefore, 4,321 > 4,312. 🔢",
        wrongAnswerExplanations: {
            "4,312": "4,321 is greater than 4,312.",
            "They are equal": "The numbers are different in the tens place.",
            "Cannot be determined": "We can determine by comparing digits from left to right."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch1_t1_qe16',
        type: "mcq",
        question: "Arrange these numbers in descending order: 6,543, 6,534, 6,453, 6,435",
        options: [
            "6,543, 6,534, 6,453, 6,435",
            "6,435, 6,453, 6,534, 6,543",
            "6,534, 6,543, 6,435, 6,453",
            "6,453, 6,435, 6,543, 6,534"
        ],
        correctAnswer: "6,543, 6,534, 6,453, 6,435",
        explanation: "Compare from left to right: 6,543 is largest, then 6,534, then 6,453, and 6,435 is smallest. 📉",
        wrongAnswerExplanations: {
            "6,435, 6,453, 6,534, 6,543": "This is ascending order, not descending.",
            "6,534, 6,543, 6,435, 6,453": "The numbers are not in correct descending order.",
            "6,453, 6,435, 6,543, 6,534": "The numbers are not in correct descending order."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch1_t1_qe17',
        type: "mcq",
        question: "Which number is the smallest: 7,654, 7,645, 7,564, 7,546?",
        options: ["7,654", "7,645", "7,564", "7,546"],
        correctAnswer: "7,546",
        explanation: "Compare from left to right: 7,546 is smallest as it has the smallest hundreds digit (5) among equal thousands. 🔍",
        wrongAnswerExplanations: {
            "7,654": "7,546 is smaller than 7,654.",
            "7,645": "7,546 is smaller than 7,645.",
            "7,564": "7,546 is smaller than 7,564."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch1_t1_qe18',
        type: "mcq",
        question: "If a building is 2,345 meters tall and another is 2,354 meters tall, which is taller?",
        options: ["2,345 meters", "2,354 meters", "Both are equal", "Cannot be determined"],
        correctAnswer: "2,354 meters",
        explanation: "Compare heights: thousands (2=2), hundreds (3=3), tens (4<5). Therefore, 2,354 > 2,345. 🏢",
        wrongAnswerExplanations: {
            "2,345 meters": "2,354 meters is taller than 2,345 meters.",
            "Both are equal": "The heights are different in the tens place.",
            "Cannot be determined": "We can determine by comparing the numbers."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch1_t1_qe19',
        type: "mcq",
        question: "Which number is greater: 8,765 or 8,756?",
        options: ["8,765", "8,756", "They are equal", "Cannot be determined"],
        correctAnswer: "8,765",
        explanation: "Compare digits: thousands (8=8), hundreds (7=7), tens (6>5). Therefore, 8,765 > 8,756. 🔢",
        wrongAnswerExplanations: {
            "8,756": "8,765 is greater than 8,756.",
            "They are equal": "The numbers are different in the tens place.",
            "Cannot be determined": "We can determine by comparing digits from left to right."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch1_t1_qe20',
        type: "mcq",
        question: "Which number comes between 9,876 and 9,878?",
        options: ["9,875", "9,877", "9,879", "9,880"],
        correctAnswer: "9,877",
        explanation: "9,877 is the only number between 9,876 and 9,878. It's one more than 9,876 and one less than 9,878. 🔢",
        wrongAnswerExplanations: {
            "9,875": "9,875 is less than 9,876.",
            "9,879": "9,879 is greater than 9,878.",
            "9,880": "9,880 is greater than 9,878."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
