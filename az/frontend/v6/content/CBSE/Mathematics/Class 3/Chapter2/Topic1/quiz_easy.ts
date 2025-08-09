import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: "cl3_ch2_t1_qe1",
    type: "mcq",
    question: "What is the number name for 425?",
    options: ["Four hundred and twenty-five", "Four hundred twenty-five", "Four twenty-five", "Forty-two five"],
    correctAnswer: "Four hundred twenty-five",
    explanation: "425 is written as 'Four hundred twenty-five' as it has 4 hundreds, 2 tens, and 5 ones.",
    wrongAnswerExplanations: {
      "Four hundred and twenty-five": "This is close but we don't need 'and' in number names in Indian English.",
      "Four twenty-five": "This is incomplete as it doesn't mention the hundreds place.",
      "Forty-two five": "This incorrectly combines the tens and hundreds digits."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: "cl3_ch2_t1_qe2",
    type: "mcq",
    question: "Which numeral represents 'Three hundred seventy-two'?",
    options: ["327", "732", "372", "370"],
    correctAnswer: "372",
    explanation: "Three hundred = 300, seventy = 70, and two = 2. Adding these: 300 + 70 + 2 = 372.",
    wrongAnswerExplanations: {
      "327": "This incorrectly places the tens and ones digits.",
      "732": "This reverses the order of hundreds, tens and ones.",
      "370": "This is missing the ones digit (2)."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: "cl3_ch2_t1_qe3",
    type: "mcq",
    question: "What is the digit in the tens place of 846?",
    options: ["8", "4", "6", "0"],
    correctAnswer: "4",
    explanation: "In 846, the first digit 8 is in the hundreds place, the middle digit 4 is in the tens place, and 6 is in the ones place.",
    wrongAnswerExplanations: {
      "8": "8 is in the hundreds place, not the tens place.",
      "6": "6 is in the ones place, not the tens place.",
      "0": "There is no 0 in this number."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 25
  },
  {
    id: "cl3_ch2_t1_qe4",
    type: "mcq",
    question: "In the number 509, what digit is in the hundreds place?",
    options: ["5", "0", "9", "None of these"],
    correctAnswer: "5",
    explanation: "In 509, the digit 5 is in the hundreds place, 0 is in the tens place, and 9 is in the ones place.",
    wrongAnswerExplanations: {
      "0": "0 is in the tens place, not the hundreds place.",
      "9": "9 is in the ones place, not the hundreds place.",
      "None of these": "5 is in the hundreds place."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 25
  },
  {
    id: "cl3_ch2_t1_qe5",
    type: "mcq",
    question: "Which of these shows the correct expanded form of 637?",
    options: ["600 + 30 + 7", "6 + 3 + 7", "6000 + 300 + 70", "600 + 37"],
    correctAnswer: "600 + 30 + 7",
    explanation: "637 = 6 hundreds + 3 tens + 7 ones = 600 + 30 + 7.",
    wrongAnswerExplanations: {
      "6 + 3 + 7": "This adds the digits, not their place values.",
      "6000 + 300 + 70": "This is the expanded form of 6370, not 637.",
      "600 + 37": "This only partially expands the number."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 35
  },
  {
    id: "cl3_ch2_t1_qe6",
    type: "mcq",
    question: "What number comes just before 500?",
    options: ["499", "501", "400", "600"],
    correctAnswer: "499",
    explanation: "The number that comes just before 500 is 499. To find the number before, we subtract 1.",
    wrongAnswerExplanations: {
      "501": "501 comes after 500, not before.",
      "400": "400 is 100 less than 500, not just before it.",
      "600": "600 is 100 more than 500, not before it."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 20
  },
  {
    id: "cl3_ch2_t1_qe7",
    type: "mcq",
    question: "How do you write 8 hundreds, 0 tens, and 3 ones as a number?",
    options: ["803", "830", "83", "800 + 3"],
    correctAnswer: "803",
    explanation: "8 hundreds = 800, 0 tens = 0, and 3 ones = 3. Together they make 803.",
    wrongAnswerExplanations: {
      "830": "This would be 8 hundreds, 3 tens, and 0 ones.",
      "83": "This would be 8 tens and 3 ones, missing the hundreds.",
      "800 + 3": "This is the expanded form, not the standard form."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: "cl3_ch2_t1_qe8",
    type: "mcq",
    question: "What is the number name for 307?",
    options: ["Three hundred seven", "Three hundred seventy", "Thirty-seven", "Three thousand seven"],
    correctAnswer: "Three hundred seven",
    explanation: "307 has 3 in the hundreds place, 0 in the tens place, and 7 in the ones place, so it's 'Three hundred seven'.",
    wrongAnswerExplanations: {
      "Three hundred seventy": "This would be 370, not 307.",
      "Thirty-seven": "This would be 37, not 307.",
      "Three thousand seven": "This would be 3007, not 307."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: "cl3_ch2_t1_qe9",
    type: "mcq",
    question: "What number has 9 hundreds, 2 tens, and 4 ones?",
    options: ["924", "942", "900 + 20 + 4", "900 + 24"],
    correctAnswer: "924",
    explanation: "9 hundreds = 900, 2 tens = 20, and 4 ones = 4. Together they make 924.",
    wrongAnswerExplanations: {
      "942": "This would be 9 hundreds, 4 tens, and 2 ones.",
      "900 + 20 + 4": "This is the expanded form, not the standard form.",
      "900 + 24": "This is a partially expanded form, not the standard form."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 35
  },
  {
    id: "cl3_ch2_t1_qe10",
    type: "mcq",
    question: "Which number name is NOT correct?",
    options: ["256: Two hundred fifty-six", "490: Four ninety", "703: Seven hundred three", "185: One hundred eighty-five"],
    correctAnswer: "490: Four ninety",
    explanation: "The correct number name for 490 is 'Four hundred ninety', not 'Four ninety'.",
    wrongAnswerExplanations: {
      "256: Two hundred fifty-six": "This is the correct number name for 256.",
      "703: Seven hundred three": "This is the correct number name for 703.",
      "185: One hundred eighty-five": "This is the correct number name for 185."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 40
  },
  {
    id: "cl3_ch2_t1_qe11",
    type: "mcq",
    question: "If you write out all numbers from 1 to 50, how many times will you write the digit 4?",
    options: ["5", "14", "15", "4"],
    correctAnswer: "5",
    explanation: "The digit 4 appears in: 4, 14, 24, 34, and 40-49 (10 numbers). In total, 5 times as a standalone digit.",
    wrongAnswerExplanations: {
      "14": "This counts both the standalone 4 and the 4 in the tens place too many times.",
      "15": "This incorrectly counts how many times 4 appears.",
      "4": "This is fewer than the actual occurrences."
    },
    difficulty: "easy",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: "cl3_ch2_t1_qe12",
    type: "mcq",
    question: "Which number has the digit 5 in the tens place?",
    options: ["352", "125", "501", "950"],
    correctAnswer: "352",
    explanation: "In 352, the digit 5 is in the tens place (middle position).",
    wrongAnswerExplanations: {
      "125": "In 125, the digit 2 is in the tens place, not 5.",
      "501": "In 501, the digit 0 is in the tens place, not 5.",
      "950": "In 950, the digit 5 is in the ones place, not the tens place."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: "cl3_ch2_t1_qe13",
    type: "mcq",
    question: "What is 267 in words?",
    options: ["Two hundred sixty-seven", "Two thousand sixty-seven", "Two hundred six seven", "Twenty-six seven"],
    correctAnswer: "Two hundred sixty-seven",
    explanation: "267 is written as 'Two hundred sixty-seven' because it has 2 hundreds, 6 tens, and 7 ones.",
    wrongAnswerExplanations: {
      "Two thousand sixty-seven": "This would be 2,067, not 267.",
      "Two hundred six seven": "This incorrectly separates the tens and ones digits.",
      "Twenty-six seven": "This combines the hundreds and tens but separates the ones incorrectly."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: "cl3_ch2_t1_qe14",
    type: "mcq",
    question: "What is the value of 6 in the number 465?",
    options: ["6", "60", "600", "6000"],
    correctAnswer: "60",
    explanation: "In 465, the digit 6 is in the tens place, so its value is 6 × 10 = 60.",
    wrongAnswerExplanations: {
      "6": "This is just the digit itself, not its place value.",
      "600": "This would be the value if 6 were in the hundreds place.",
      "6000": "This would be the value if 6 were in the thousands place."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 35
  },
  {
    id: "cl3_ch2_t1_qe15",
    type: "mcq",
    question: "What is the numeral for 'Seven hundred eighteen'?",
    options: ["718", "780", "708", "78"],
    correctAnswer: "718",
    explanation: "Seven hundred = 700, eighteen = 18. Adding these: 700 + 18 = 718.",
    wrongAnswerExplanations: {
      "780": "This would be 'Seven hundred eighty', not 'Seven hundred eighteen'.",
      "708": "This would be 'Seven hundred eight', not 'Seven hundred eighteen'.",
      "78": "This would be 'Seventy-eight', not 'Seven hundred eighteen'."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: "cl3_ch2_t1_qe16",
    type: "mcq",
    question: "What number has 3 hundreds, 8 tens, and 0 ones?",
    options: ["380", "38", "308", "830"],
    correctAnswer: "380",
    explanation: "3 hundreds = 300, 8 tens = 80, and 0 ones = 0. Together they make 380.",
    wrongAnswerExplanations: {
      "38": "This represents 3 tens and 8 ones, missing the hundreds.",
      "308": "This would be 3 hundreds, 0 tens, and 8 ones.",
      "830": "This would be 8 hundreds, 3 tens, and 0 ones."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: "cl3_ch2_t1_qe17",
    type: "mcq",
    question: "Which of these is the largest number?",
    options: ["345", "354", "435", "543"],
    correctAnswer: "543",
    explanation: "543 is the largest because it has the greatest digit (5) in the hundreds place.",
    wrongAnswerExplanations: {
      "345": "This is smaller than 354, 435, and 543.",
      "354": "This is smaller than 435 and 543.",
      "435": "This is smaller than 543."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: "cl3_ch2_t1_qe18",
    type: "mcq",
    question: "What comes next in the pattern: 550, 560, 570, ___?",
    options: ["580", "575", "600", "670"],
    correctAnswer: "580",
    explanation: "The pattern is increasing by 10 each time. After 570, the next number would be 570 + 10 = 580.",
    wrongAnswerExplanations: {
      "575": "This would mean the pattern increases by 5, but it's actually increasing by 10.",
      "600": "This would mean the pattern increases by 30, but it's actually increasing by 10.",
      "670": "This would mean the pattern increases by 100, but it's actually increasing by 10."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 35
  },
  {
    id: "cl3_ch2_t1_qe19",
    type: "mcq",
    question: "What number is 1 more than 699?",
    options: ["700", "799", "698", "7000"],
    correctAnswer: "700",
    explanation: "To find the number that is 1 more than 699, we add 1: 699 + 1 = 700.",
    wrongAnswerExplanations: {
      "799": "This is 100 more than 699, not 1 more.",
      "698": "This is 1 less than 699, not 1 more.",
      "7000": "This is 6,301 more than 699, not 1 more."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 25
  },
  {
    id: "cl3_ch2_t1_qe20",
    type: "mcq",
    question: "Which of the following numbers has the smallest value?",
    options: ["109", "190", "901", "910"],
    correctAnswer: "109",
    explanation: "109 has the smallest value because it has the smallest digit in the hundreds place.",
    wrongAnswerExplanations: {
      "190": "190 is greater than 109.",
      "901": "901 is greater than 109 and 190.",
      "910": "910 is greater than 109, 190, and 901."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  }
];
