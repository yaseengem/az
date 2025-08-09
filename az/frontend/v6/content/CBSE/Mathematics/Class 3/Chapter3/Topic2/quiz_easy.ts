import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl3_ch3_t2_qe1',
        type: "mcq",
        question: "What is 352 - 241?",
        options: ["111", "101", "121", "131"],
        correctAnswer: "111",
        explanation: "Subtract 352 - 241 by subtracting each place value: 2 - 1 = 1 ones, 5 - 4 = 1 tens, 3 - 2 = 1 hundreds.",
        wrongAnswerExplanations: {
            "101": "You might have subtracted incorrectly in one of the place values.",
            "121": "Check your subtraction in the tens place.",
            "131": "Make sure you're subtracting correctly in each place value."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch3_t2_qe2',
        type: "mcq",
        question: "Find the difference: 700 - 345",
        options: ["355", "365", "455", "465"],
        correctAnswer: "355",
        explanation: "To subtract 700 - 345, regroup the 7 hundreds as 6 hundreds and 10 tens, then continue with the subtraction.",
        wrongAnswerExplanations: {
            "365": "Check your subtraction in the tens place.",
            "455": "Make sure you're regrouping correctly from hundreds to tens.",
            "465": "Double-check your calculations in each place value."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t2_qe3',
        type: "mcq",
        question: "What is the value of 526 - 218?",
        options: ["308", "318", "208", "418"],
        correctAnswer: "308",
        explanation: "When subtracting 526 - 218, subtract each place value. In the ones place: 6 - 8 requires borrowing, making it 16 - 8 = 8.",
        wrongAnswerExplanations: {
            "318": "Check your borrowing and subtraction in the tens place.",
            "208": "Verify your subtraction in the hundreds place.",
            "418": "You may have added instead of subtracting in the hundreds place."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch3_t2_qe4',
        type: "mcq",
        question: "Subtract 127 from 500.",
        options: ["373", "383", "363", "473"],
        correctAnswer: "373",
        explanation: "To find 500 - 127, we need to borrow from the hundreds place since 0 - 7 cannot be done directly.",
        wrongAnswerExplanations: {
            "383": "Double-check your subtraction in the ones place.",
            "363": "Make sure you're borrowing and regrouping correctly.",
            "473": "Check your subtraction in the tens place."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t2_qe5',
        type: "mcq",
        question: "What is 603 - 245?",
        options: ["358", "348", "458", "368"],
        correctAnswer: "358",
        explanation: "When subtracting 603 - 245, we need to borrow from the hundreds place for the tens place and regroup.",
        wrongAnswerExplanations: {
            "348": "Check your calculation in the tens place after borrowing.",
            "458": "Verify your subtraction in the hundreds place.",
            "368": "Make sure you've borrowed correctly for the tens place."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t2_qe6',
        type: "mcq",
        question: "A bookstore had 325 books. 213 books were sold. How many books are left?",
        options: ["112", "122", "212", "102"],
        correctAnswer: "112",
        explanation: "To find books left, subtract 213 from 325. 325 - 213 = 112 books are left in the store.",
        wrongAnswerExplanations: {
            "122": "Check your subtraction in the tens place.",
            "212": "You may have made an error in the hundreds place.",
            "102": "Verify each place value in your subtraction."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t2_qe7',
        type: "mcq",
        question: "What number must be subtracted from 900 to get 575?",
        options: ["325", "425", "375", "225"],
        correctAnswer: "325",
        explanation: "We need to find the value of 900 - ? = 575. Rearranging, we get ? = 900 - 575 = 325.",
        wrongAnswerExplanations: {
            "425": "Double-check your subtraction in the hundreds place.",
            "375": "Verify your calculation in the tens place.",
            "225": "Make sure you're subtracting correctly in each place value."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t2_qe8',
        type: "mcq",
        question: "If you subtract 168 from 427, the result is:",
        options: ["259", "269", "249", "359"],
        correctAnswer: "259",
        explanation: "To find 427 - 168, subtract in each place value with borrowing where needed.",
        wrongAnswerExplanations: {
            "269": "Check your subtraction in the ones place.",
            "249": "Verify your borrowing and subtraction in the tens place.",
            "359": "You may have made an error in the hundreds place."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch3_t2_qe9',
        type: "mcq",
        question: "800 - 356 = ?",
        options: ["444", "454", "544", "554"],
        correctAnswer: "444",
        explanation: "When subtracting 800 - 356, borrow from the hundreds to subtract in the tens and ones places.",
        wrongAnswerExplanations: {
            "454": "Check your subtraction in the ones place.",
            "544": "Make sure you've borrowed correctly from the hundreds.",
            "554": "Verify your subtraction in each place value."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t2_qe10',
        type: "mcq",
        question: "A building has 635 windows. If 423 windows are open, how many windows are closed?",
        options: ["212", "202", "312", "222"],
        correctAnswer: "212",
        explanation: "To find closed windows, subtract open windows from total windows: 635 - 423 = 212 windows are closed.",
        wrongAnswerExplanations: {
            "202": "Check your subtraction in the tens place.",
            "312": "Verify your calculation in the hundreds place.",
            "222": "Make sure you're subtracting correctly in each place value."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t2_qe11',
        type: "mcq",
        question: "What is the value of 504 - 386?",
        options: ["118", "128", "218", "108"],
        correctAnswer: "118",
        explanation: "For 504 - 386, borrowing is needed in both tens and ones places. After regrouping, subtract in each place value.",
        wrongAnswerExplanations: {
            "128": "Check your subtraction in the ones place.",
            "218": "Verify your calculation in the hundreds place.",
            "108": "Make sure you've borrowed correctly from the hundreds place."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t2_qe12',
        type: "mcq",
        question: "A shopkeeper had 950 candies. He sold 275 candies. How many candies does he have now?",
        options: ["675", "685", "775", "575"],
        correctAnswer: "675",
        explanation: "To find remaining candies, subtract sold candies from total: 950 - 275 = 675 candies are left.",
        wrongAnswerExplanations: {
            "685": "Check your subtraction in the ones place.",
            "775": "Verify your calculation in the tens place.",
            "575": "Make sure you're subtracting correctly in the hundreds place."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t2_qe13',
        type: "mcq",
        question: "What is 435 - 217?",
        options: ["218", "228", "318", "208"],
        correctAnswer: "218",
        explanation: "When subtracting 435 - 217, subtract each place value: 5 - 7 requires borrowing from tens, making it 15 - 7 = 8.",
        wrongAnswerExplanations: {
            "228": "Check your subtraction in the tens place after borrowing.",
            "318": "Verify your calculation in the hundreds place.",
            "208": "Make sure you've correctly borrowed from the tens place."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch3_t2_qe14',
        type: "mcq",
        question: "Subtract: 600 - 452",
        options: ["148", "158", "248", "152"],
        correctAnswer: "148",
        explanation: "For 600 - 452, borrowing is needed for both tens and ones places. After regrouping, subtract in each place value.",
        wrongAnswerExplanations: {
            "158": "Check your subtraction in the ones place.",
            "248": "Verify your calculation in the hundreds place.",
            "152": "Make sure you're borrowing correctly for each place value."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t2_qe15',
        type: "mcq",
        question: "A library had 836 books. 427 books were borrowed. How many books are still in the library?",
        options: ["409", "419", "309", "509"],
        correctAnswer: "409",
        explanation: "To find books still in the library, subtract borrowed books from total: 836 - 427 = 409 books remain.",
        wrongAnswerExplanations: {
            "419": "Check your subtraction in the ones place.",
            "309": "Verify your calculation in the hundreds place.",
            "509": "Make sure you're borrowing correctly from the tens place."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t2_qe16',
        type: "mcq",
        question: "What is 704 - 368?",
        options: ["336", "346", "436", "326"],
        correctAnswer: "336",
        explanation: "When subtracting 704 - 368, we need to borrow from the hundreds place for both tens and ones places.",
        wrongAnswerExplanations: {
            "346": "Check your subtraction in the ones place.",
            "436": "Verify your calculation in the hundreds place.",
            "326": "Make sure you're borrowing correctly for each place value."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t2_qe17',
        type: "mcq",
        question: "There were 562 students in a school. 278 students were girls. How many students were boys?",
        options: ["284", "294", "274", "384"],
        correctAnswer: "284",
        explanation: "To find the number of boys, subtract the number of girls from the total: 562 - 278 = 284 boys.",
        wrongAnswerExplanations: {
            "294": "Check your subtraction in the ones place.",
            "274": "Verify your borrowing and subtraction in the tens place.",
            "384": "Make sure you're subtracting correctly in the hundreds place."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t2_qe18',
        type: "mcq",
        question: "What is the value of 900 - 648?",
        options: ["252", "242", "352", "262"],
        correctAnswer: "252",
        explanation: "For 900 - 648, borrowing is needed for all place values. After regrouping, subtract in each place value.",
        wrongAnswerExplanations: {
            "242": "Check your subtraction in the tens place.",
            "352": "Verify your calculation in the hundreds place.",
            "262": "Make sure you're borrowing correctly for each place value."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t2_qe19',
        type: "mcq",
        question: "A farmer had 375 eggs. He sold 146 eggs. How many eggs does he have left?",
        options: ["229", "239", "219", "329"],
        correctAnswer: "229",
        explanation: "To find remaining eggs, subtract sold eggs from total: 375 - 146 = 229 eggs are left.",
        wrongAnswerExplanations: {
            "239": "Check your subtraction in the ones place.",
            "219": "Verify your borrowing and subtraction in the tens place.",
            "329": "Make sure you're subtracting correctly in the hundreds place."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t2_qe20',
        type: "mcq",
        question: "What is 843 - 597?",
        options: ["246", "236", "346", "256"],
        correctAnswer: "246",
        explanation: "When subtracting 843 - 597, borrow from hundreds to tens, and tens to ones before subtracting each place value.",
        wrongAnswerExplanations: {
            "236": "Check your subtraction in the tens place.",
            "346": "Verify your calculation in the hundreds place.",
            "256": "Make sure you're borrowing correctly for each place value."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    }
];
