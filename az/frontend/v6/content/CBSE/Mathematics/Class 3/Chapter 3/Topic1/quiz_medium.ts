import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl3_ch3_t1_qm1',
        type: "mcq",
        question: "What is 367 + 584?",
        options: ["951", "941", "851", "961"],
        correctAnswer: "951",
        explanation: "7+4=11, carry 1. 6+8+1=15, carry 1. 3+5+1=9 in hundreds place. So 367+584=951.",
        wrongAnswerExplanations: {
            "941": "Error in addition. Check your carrying in the ones place.",
            "851": "Error in addition. You may have made a mistake in the hundreds place.",
            "961": "Error in addition. Double-check the tens place."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t1_qm2',
        type: "mcq",
        question: "Find the sum: 575 + 347",
        options: ["922", "912", "822", "932"],
        correctAnswer: "922",
        explanation: "5+7=12, carry 1. 7+4+1=12, carry 1. 5+3+1=9 in hundreds place. So 575+347=922.",
        wrongAnswerExplanations: {
            "912": "Error in addition. Check your carrying in the ones place.",
            "822": "Error in addition. The hundreds place is incorrect.",
            "932": "Error in addition. Check your carrying in the tens place."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t1_qm3',
        type: "mcq",
        question: "A farmer harvested 456 kg of wheat in one field and 278 kg in another field. What is the total harvest?",
        options: ["734 kg", "724 kg", "634 kg", "834 kg"],
        correctAnswer: "734 kg",
        explanation: "Adding: 456+278=734. 6+8=14, carry 1. 5+7+1=13, carry 1. 4+2+1=7 in hundreds place.",
        wrongAnswerExplanations: {
            "724 kg": "Error in addition. Check your carrying in the ones place.",
            "634 kg": "Error in addition. The hundreds place is incorrect.",
            "834 kg": "Error in addition. You may have added 100 too many."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch3_t1_qm4',
        type: "mcq",
        question: "Rahul had ₹325. His father gave him another ₹199. How much money does Rahul have now?",
        options: ["₹524", "₹514", "₹624", "₹424"],
        correctAnswer: "₹524",
        explanation: "Adding: ₹325+₹199=₹524. 5+9=14, carry 1. 2+9+1=12, carry 1. 3+1+1=5 in hundreds place.",
        wrongAnswerExplanations: {
            "₹514": "Error in addition. Check your carrying in the ones place.",
            "₹624": "Error in addition. You may have added 100 too many.",
            "₹424": "Error in addition. Double-check the tens place."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch3_t1_qm5',
        type: "mcq",
        question: "Find the missing number: 347 + ? = 893",
        options: ["546", "536", "556", "446"],
        correctAnswer: "546",
        explanation: "To find the missing number, subtract: 893-347=546. You can verify: 347+546=893.",
        wrongAnswerExplanations: {
            "536": "Error in calculation. Double-check your subtraction.",
            "556": "Error in calculation. The tens place is incorrect.",
            "446": "Error in calculation. The hundreds place is incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch3_t1_qm6',
        type: "mcq",
        question: "What is 691 + 259?",
        options: ["950", "960", "850", "860"],
        correctAnswer: "950",
        explanation: "1+9=10, carry 1. 9+5+1=15, carry 1. 6+2+1=9 in hundreds place. So 691+259=950.",
        wrongAnswerExplanations: {
            "960": "Error in addition. Check the tens place calculation.",
            "850": "Error in addition. The hundreds place is incorrect.",
            "860": "Error in addition. Multiple place values have errors."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t1_qm7',
        type: "mcq",
        question: "A school organized a field trip. Class 3A had 138 students, Class 3B had 142 students, and Class 3C had 119 students. How many students went on the trip in total?",
        options: ["399", "389", "409", "379"],
        correctAnswer: "399",
        explanation: "Adding all three numbers: 138+142+119=399. First add 138+142=280, then 280+119=399.",
        wrongAnswerExplanations: {
            "389": "Error in addition. Check your calculations again.",
            "409": "Error in addition. You may have added 10 too many.",
            "379": "Error in addition. You may have made an error when adding the numbers."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: 'cl3_ch3_t1_qm8',
        type: "mcq",
        question: "What is the sum of 286, 157, and 148?",
        options: ["591", "581", "691", "681"],
        correctAnswer: "591",
        explanation: "Adding all three numbers: 286+157+148=591. First add 286+157=443, then 443+148=591.",
        wrongAnswerExplanations: {
            "581": "Error in addition. Check your work in each place value.",
            "691": "Error in addition. You may have added 100 too many.",
            "681": "Error in addition. Multiple place values have errors."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: 'cl3_ch3_t1_qm9',
        type: "mcq",
        question: "Find the result of 496 + 358",
        options: ["854", "844", "954", "944"],
        correctAnswer: "854",
        explanation: "6+8=14, carry 1. 9+5+1=15, carry 1. 4+3+1=8 in hundreds place. So 496+358=854.",
        wrongAnswerExplanations: {
            "844": "Error in addition. Check your carrying in the ones place.",
            "954": "Error in addition. You may have added 100 too many.",
            "944": "Error in addition. Multiple place values have errors."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t1_qm10',
        type: "mcq",
        question: "A factory produced 245 toys on Monday, 186 toys on Tuesday, and 327 toys on Wednesday. How many toys were produced in these three days?",
        options: ["758", "748", "858", "848"],
        correctAnswer: "758",
        explanation: "Adding all three numbers: 245+186+327=758. First add 245+186=431, then 431+327=758.",
        wrongAnswerExplanations: {
            "748": "Error in addition. Check your carrying carefully.",
            "858": "Error in addition. You may have added 100 too many.",
            "848": "Error in addition. Multiple place values have errors."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: 'cl3_ch3_t1_qm11',
        type: "mcq",
        question: "What is the sum of 595 + 225?",
        options: ["820", "810", "920", "720"],
        correctAnswer: "820",
        explanation: "5+5=10, carry 1. 9+2+1=12, carry 1. 5+2+1=8 in hundreds place. So 595+225=820.",
        wrongAnswerExplanations: {
            "810": "Error in addition. Check your carrying in the tens place.",
            "920": "Error in addition. You may have added 100 too many.",
            "720": "Error in addition. The hundreds place is incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t1_qm12',
        type: "mcq",
        question: "A shopkeeper sold items worth ₹387 in the morning and ₹496 in the afternoon. Find the total sales for the day.",
        options: ["₹883", "₹873", "₹983", "₹783"],
        correctAnswer: "₹883",
        explanation: "Adding: ₹387+₹496=₹883. 7+6=13, carry 1. 8+9+1=18, carry 1. 3+4+1=8 in hundreds place.",
        wrongAnswerExplanations: {
            "₹873": "Error in addition. Check your carrying in the ones place.",
            "₹983": "Error in addition. You may have added 100 too many.",
            "₹783": "Error in addition. The hundreds place is incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch3_t1_qm13',
        type: "mcq",
        question: "A bus traveled 385 km on the first day, 426 km on the second day, and 196 km on the third day. What was the total distance traveled?",
        options: ["1007 km", "1017 km", "907 km", "997 km"],
        correctAnswer: "1007 km",
        explanation: "Adding all three distances: 385+426+196=1007. First add 385+426=811, then 811+196=1007.",
        wrongAnswerExplanations: {
            "1017 km": "Error in addition. Check your carrying carefully.",
            "907 km": "Error in addition. You may have missed 100 in the calculation.",
            "997 km": "Error in addition. Check the addition in the ones place."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: 'cl3_ch3_t1_qm14',
        type: "mcq",
        question: "Find the sum: 675 + 289",
        options: ["964", "954", "864", "874"],
        correctAnswer: "964",
        explanation: "5+9=14, carry 1. 7+8+1=16, carry 1. 6+2+1=9 in hundreds place. So 675+289=964.",
        wrongAnswerExplanations: {
            "954": "Error in addition. Check your carrying in the ones place.",
            "864": "Error in addition. The hundreds place is incorrect.",
            "874": "Error in addition. Multiple place values have errors."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t1_qm15',
        type: "mcq",
        question: "What number should be added to 378 to get 925?",
        options: ["547", "557", "647", "447"],
        correctAnswer: "547",
        explanation: "To find the missing number, subtract: 925-378=547. You can verify: 378+547=925.",
        wrongAnswerExplanations: {
            "557": "Error in calculation. Double-check your subtraction.",
            "647": "Error in calculation. The hundreds place is incorrect.",
            "447": "Error in calculation. Check the tens place carefully."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch3_t1_qm16',
        type: "mcq",
        question: "A collection had 258 postage stamps 📫 from India, 167 from Japan, and 193 from the USA. How many stamps were there in total?",
        options: ["618", "628", "608", "638"],
        correctAnswer: "618",
        explanation: "Adding all three numbers: 258+167+193=618. First add 258+167=425, then 425+193=618.",
        wrongAnswerExplanations: {
            "628": "Error in addition. Check your carrying carefully.",
            "608": "Error in addition. Check the tens place calculation.",
            "638": "Error in addition. You may have added 20 too many."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: 'cl3_ch3_t1_qm17',
        type: "mcq",
        question: "What is 398 + 457?",
        options: ["855", "845", "955", "755"],
        correctAnswer: "855",
        explanation: "8+7=15, carry 1. 9+5+1=15, carry 1. 3+4+1=8 in hundreds place. So 398+457=855.",
        wrongAnswerExplanations: {
            "845": "Error in addition. Check your carrying in the ones place.",
            "955": "Error in addition. You may have added 100 too many.",
            "755": "Error in addition. The hundreds place is incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t1_qm18',
        type: "mcq",
        question: "Rina's math score was 287 in the first term and 326 in the second term. What was her total score?",
        options: ["613", "603", "713", "513"],
        correctAnswer: "613",
        explanation: "Adding: 287+326=613. 7+6=13, carry 1. 8+2+1=11, carry 1. 2+3+1=6 in hundreds place.",
        wrongAnswerExplanations: {
            "603": "Error in addition. Check your carrying in the ones place.",
            "713": "Error in addition. You may have added 100 too many.",
            "513": "Error in addition. The hundreds place is incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch3_t1_qm19',
        type: "mcq",
        question: "The sum of two numbers is 748. If one of the numbers is 369, what is the other number?",
        options: ["379", "389", "279", "479"],
        correctAnswer: "379",
        explanation: "To find the other number, subtract: 748-369=379. You can verify: 369+379=748.",
        wrongAnswerExplanations: {
            "389": "Error in calculation. Double-check your subtraction.",
            "279": "Error in calculation. You may have made errors in multiple place values.",
            "479": "Error in calculation. You may have added 100 too many."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch3_t1_qm20',
        type: "mcq",
        question: "A city library has 256 storybooks, 198 science books, and 347 history books. How many books does the library have in total?",
        options: ["801", "791", "901", "701"],
        correctAnswer: "801",
        explanation: "Adding all three numbers: 256+198+347=801. First add 256+198=454, then 454+347=801.",
        wrongAnswerExplanations: {
            "791": "Error in addition. Check your carrying carefully.",
            "901": "Error in addition. You may have added 100 too many.",
            "701": "Error in addition. The hundreds place is incorrect."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    }
];
