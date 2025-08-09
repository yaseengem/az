// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 6\Chapter1\Topic1\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch1_t1_qm1',
        type: "mcq",
        question: "Which number is the largest: 4,321, 4,312, 4,231, 4,213?",
        options: ["4,321", "4,312", "4,231", "4,213"],
        correctAnswer: "4,321",
        explanation: "Compare from left to right: 4,321 has the largest hundreds digit (3) among equal thousands. 📈",
        wrongAnswerExplanations: {
            "4,312": "4,321 is larger than 4,312.",
            "4,231": "4,321 is larger than 4,231.",
            "4,213": "4,321 is larger than 4,213."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch1_t1_qm2',
        type: "mcq",
        question: "Arrange these numbers in ascending order: 5,432, 5,423, 5,342, 5,324",
        options: [
            "5,324, 5,342, 5,423, 5,432",
            "5,432, 5,423, 5,342, 5,324",
            "5,342, 5,324, 5,432, 5,423",
            "5,423, 5,432, 5,324, 5,342"
        ],
        correctAnswer: "5,324, 5,342, 5,423, 5,432",
        explanation: "Compare from left to right: 5,324 is smallest, then 5,342, then 5,423, and 5,432 is largest. 📈",
        wrongAnswerExplanations: {
            "5,432, 5,423, 5,342, 5,324": "This is descending order, not ascending.",
            "5,342, 5,324, 5,432, 5,423": "The numbers are not in correct ascending order.",
            "5,423, 5,432, 5,324, 5,342": "The numbers are not in correct ascending order."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch1_t1_qm3',
        type: "mcq",
        question: "Which number is the smallest: 6,543, 6,534, 6,453, 6,435?",
        options: ["6,543", "6,534", "6,453", "6,435"],
        correctAnswer: "6,435",
        explanation: "Compare from left to right: 6,435 is smallest as it has the smallest hundreds digit (4) among equal thousands. 🔍",
        wrongAnswerExplanations: {
            "6,543": "6,435 is smaller than 6,543.",
            "6,534": "6,435 is smaller than 6,534.",
            "6,453": "6,435 is smaller than 6,453."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch1_t1_qm4',
        type: "mcq",
        question: "If a book costs ₹2,345 and another costs ₹2,354, which is more expensive?",
        options: ["₹2,345", "₹2,354", "Both cost the same", "Cannot be determined"],
        correctAnswer: "₹2,354",
        explanation: "Compare digits: thousands (2=2), hundreds (3=3), tens (4<5). Therefore, ₹2,354 > ₹2,345. 💰",
        wrongAnswerExplanations: {
            "₹2,345": "₹2,354 is more expensive than ₹2,345.",
            "Both cost the same": "The prices are different in the tens place.",
            "Cannot be determined": "We can determine by comparing digits from left to right."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch1_t1_qm5',
        type: "mcq",
        question: "Which number comes between 7,654 and 7,656?",
        options: ["7,653", "7,655", "7,657", "7,658"],
        correctAnswer: "7,655",
        explanation: "7,655 is the only number between 7,654 and 7,656. It's one more than 7,654 and one less than 7,656. 🔢",
        wrongAnswerExplanations: {
            "7,653": "7,653 is less than 7,654.",
            "7,657": "7,657 is greater than 7,656.",
            "7,658": "7,658 is greater than 7,656."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch1_t1_qm6',
        type: "mcq",
        question: "Which number is closest to 5,000: 4,999 or 5,001?",
        options: ["4,999", "5,001", "Both are equally close", "Cannot be determined"],
        correctAnswer: "Both are equally close",
        explanation: "Both 4,999 and 5,001 are 1 unit away from 5,000, just in opposite directions. 📏",
        wrongAnswerExplanations: {
            "4,999": "5,001 is also equally close to 5,000.",
            "5,001": "4,999 is also equally close to 5,000.",
            "Cannot be determined": "We can determine that both are equally close."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch1_t1_qm7',
        type: "mcq",
        question: "Which number is the largest: 7,654, 7,645, 7,564, 7,546?",
        options: ["7,654", "7,645", "7,564", "7,546"],
        correctAnswer: "7,654",
        explanation: "Compare from left to right: 7,654 has the largest hundreds digit (6) among equal thousands. 📈",
        wrongAnswerExplanations: {
            "7,645": "7,654 is larger than 7,645.",
            "7,564": "7,654 is larger than 7,564.",
            "7,546": "7,654 is larger than 7,546."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch1_t1_qm8',
        type: "mcq",
        question: "If Team A scored 3,456 points and Team B scored 3,465 points, who won?",
        options: ["Team A", "Team B", "It's a tie", "Cannot be determined"],
        correctAnswer: "Team B",
        explanation: "Compare scores: thousands (3=3), hundreds (4=4), tens (5=5), ones (6<5). Therefore, 3,465 > 3,456. 🏆",
        wrongAnswerExplanations: {
            "Team A": "Team B scored more points than Team A.",
            "It's a tie": "The scores are different in the ones place.",
            "Cannot be determined": "We can determine by comparing the scores."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch1_t1_qm9',
        type: "mcq",
        question: "Which number is the smallest 4-digit number with all different digits?",
        options: ["1,000", "1,023", "1,234", "1,111"],
        correctAnswer: "1,023",
        explanation: "1,023 is the smallest 4-digit number with all different digits. 1,000 has repeating zeros, and 1,234 is larger. 🔢",
        wrongAnswerExplanations: {
            "1,000": "1,000 has repeating zeros.",
            "1,234": "1,234 is larger than 1,023.",
            "1,111": "1,111 has repeating ones."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch1_t1_qm10',
        type: "mcq",
        question: "Which number is the largest 4-digit number with all different digits?",
        options: ["9,999", "9,876", "9,000", "9,900"],
        correctAnswer: "9,876",
        explanation: "9,876 is the largest 4-digit number with all different digits. 9,999 has repeating nines. 🔢",
        wrongAnswerExplanations: {
            "9,999": "9,999 has repeating nines.",
            "9,000": "9,876 is larger than 9,000.",
            "9,900": "9,876 is larger than 9,900."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch1_t1_qm11',
        type: "mcq",
        question: "Which number comes just after 4,999?",
        options: ["4,998", "5,000", "5,001", "4,900"],
        correctAnswer: "5,000",
        explanation: "When we add 1 to 4,999, we get 5,000. This is the next number in sequence. ➕",
        wrongAnswerExplanations: {
            "4,998": "4,998 comes before 4,999.",
            "5,001": "5,000 comes before 5,001.",
            "4,900": "4,900 comes before 4,999."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch1_t1_qm12',
        type: "mcq",
        question: "Which number comes just before 6,000?",
        options: ["5,999", "6,001", "5,900", "6,100"],
        correctAnswer: "5,999",
        explanation: "When we subtract 1 from 6,000, we get 5,999. This is the previous number in sequence. ➖",
        wrongAnswerExplanations: {
            "6,001": "6,001 comes after 6,000.",
            "5,900": "5,999 comes after 5,900.",
            "6,100": "6,100 comes after 6,000."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch1_t1_qm13',
        type: "mcq",
        question: "If City A has 4,567 people and City B has 4,576 people, which city has more people?",
        options: ["City A", "City B", "Both have equal population", "Cannot be determined"],
        correctAnswer: "City B",
        explanation: "Compare populations: thousands (4=4), hundreds (5=5), tens (6<7). Therefore, 4,576 > 4,567. 🏙️",
        wrongAnswerExplanations: {
            "City A": "City B has more people than City A.",
            "Both have equal population": "The populations are different in the tens place.",
            "Cannot be determined": "We can determine by comparing the numbers."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch1_t1_qm14',
        type: "mcq",
        question: "Which number is greater: 5,432 or 5,423?",
        options: ["5,432", "5,423", "They are equal", "Cannot be determined"],
        correctAnswer: "5,432",
        explanation: "Compare digits: thousands (5=5), hundreds (4=4), tens (3>2). Therefore, 5,432 > 5,423. 🔢",
        wrongAnswerExplanations: {
            "5,423": "5,432 is greater than 5,423.",
            "They are equal": "The numbers are different in the tens place.",
            "Cannot be determined": "We can determine by comparing digits from left to right."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch1_t1_qm15',
        type: "mcq",
        question: "Arrange these numbers in descending order: 7,654, 7,645, 7,564, 7,546",
        options: [
            "7,654, 7,645, 7,564, 7,546",
            "7,546, 7,564, 7,645, 7,654",
            "7,645, 7,654, 7,546, 7,564",
            "7,564, 7,546, 7,654, 7,645"
        ],
        correctAnswer: "7,654, 7,645, 7,564, 7,546",
        explanation: "Compare from left to right: 7,654 is largest, then 7,645, then 7,564, and 7,546 is smallest. 📉",
        wrongAnswerExplanations: {
            "7,546, 7,564, 7,645, 7,654": "This is ascending order, not descending.",
            "7,645, 7,654, 7,546, 7,564": "The numbers are not in correct descending order.",
            "7,564, 7,546, 7,654, 7,645": "The numbers are not in correct descending order."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch1_t1_qm16',
        type: "mcq",
        question: "Which number is the smallest: 8,765, 8,756, 8,675, 8,657?",
        options: ["8,765", "8,756", "8,675", "8,657"],
        correctAnswer: "8,657",
        explanation: "Compare from left to right: 8,657 is smallest as it has the smallest hundreds digit (6) among equal thousands. 🔍",
        wrongAnswerExplanations: {
            "8,765": "8,657 is smaller than 8,765.",
            "8,756": "8,657 is smaller than 8,756.",
            "8,675": "8,657 is smaller than 8,675."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch1_t1_qm17',
        type: "mcq",
        question: "If a building is 3,456 meters tall and another is 3,465 meters tall, which is taller?",
        options: ["3,456 meters", "3,465 meters", "Both are equal", "Cannot be determined"],
        correctAnswer: "3,465 meters",
        explanation: "Compare heights: thousands (3=3), hundreds (4=4), tens (5=5), ones (6<5). Therefore, 3,465 > 3,456. 🏢",
        wrongAnswerExplanations: {
            "3,456 meters": "3,465 meters is taller than 3,456 meters.",
            "Both are equal": "The heights are different in the ones place.",
            "Cannot be determined": "We can determine by comparing the numbers."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch1_t1_qm18',
        type: "mcq",
        question: "Which number is greater: 9,876 or 9,867?",
        options: ["9,876", "9,867", "They are equal", "Cannot be determined"],
        correctAnswer: "9,876",
        explanation: "Compare digits: thousands (9=9), hundreds (8=8), tens (7>6). Therefore, 9,876 > 9,867. 🔢",
        wrongAnswerExplanations: {
            "9,867": "9,876 is greater than 9,867.",
            "They are equal": "The numbers are different in the tens place.",
            "Cannot be determined": "We can determine by comparing digits from left to right."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch1_t1_qm19',
        type: "mcq",
        question: "Which number comes between 8,765 and 8,767?",
        options: ["8,764", "8,766", "8,768", "8,769"],
        correctAnswer: "8,766",
        explanation: "8,766 is the only number between 8,765 and 8,767. It's one more than 8,765 and one less than 8,767. 🔢",
        wrongAnswerExplanations: {
            "8,764": "8,764 is less than 8,765.",
            "8,768": "8,768 is greater than 8,767.",
            "8,769": "8,769 is greater than 8,767."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch1_t1_qm20',
        type: "mcq",
        question: "Which number is closest to 7,000: 6,999 or 7,001?",
        options: ["6,999", "7,001", "Both are equally close", "Cannot be determined"],
        correctAnswer: "Both are equally close",
        explanation: "Both 6,999 and 7,001 are 1 unit away from 7,000, just in opposite directions. 📏",
        wrongAnswerExplanations: {
            "6,999": "7,001 is also equally close to 7,000.",
            "7,001": "6,999 is also equally close to 7,000.",
            "Cannot be determined": "We can determine that both are equally close."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 30
    }
];
