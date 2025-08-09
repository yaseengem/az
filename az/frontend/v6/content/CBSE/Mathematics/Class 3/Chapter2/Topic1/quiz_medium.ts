import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: "cl3_ch2_t1_qm1",
    type: "mcq",
    question: "What is 765 written in expanded form?",
    options: ["700 + 60 + 5", "7 + 6 + 5", "7000 + 600 + 50", "76 + 5"],
    correctAnswer: "700 + 60 + 5",
    explanation: "The expanded form of 765 is 700 + 60 + 5, which represents 7 hundreds, 6 tens, and 5 ones.",
    wrongAnswerExplanations: {
      "7 + 6 + 5": "This adds just the digits without considering their place values.",
      "7000 + 600 + 50": "This incorrectly assigns place values (thousands instead of hundreds).",
      "76 + 5": "This partially expands the number but doesn't separate tens and hundreds."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: "cl3_ch2_t1_qm2",
    type: "mcq",
    question: "In the number 358, what is the value of the digit 5?",
    options: ["5", "50", "500", "5000"],
    correctAnswer: "50",
    explanation: "In 358, the digit 5 is in the tens place, so its value is 5 × 10 = 50.",
    wrongAnswerExplanations: {
      "5": "This is just the digit without considering its place value.",
      "500": "This would be the value if 5 were in the hundreds place.",
      "5000": "This would be the value if 5 were in the thousands place."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 40
  },
  {
    id: "cl3_ch2_t1_qm3",
    type: "mcq",
    question: "Which of these numbers has the digit 7 with the greatest place value?",
    options: ["472", "174", "741", "247"],
    correctAnswer: "741",
    explanation: "In 741, the digit 7 is in the hundreds place which gives it the greatest place value (700).",
    wrongAnswerExplanations: {
      "472": "The digit 7 is in the tens place, with a value of 70.",
      "174": "The digit 7 is in the tens place, with a value of 70.",
      "247": "The digit 7 is in the ones place, with a value of 7."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: "cl3_ch2_t1_qm4",
    type: "mcq",
    question: "What numeral would you write for 'Eight hundred three'?",
    options: ["830", "813", "803", "83"],
    correctAnswer: "803",
    explanation: "Eight hundred = 800 and three = 3. There are no tens mentioned, so that place is 0. Together: 803.",
    wrongAnswerExplanations: {
      "830": "This would be 'Eight hundred thirty', not 'Eight hundred three'.",
      "813": "This would be 'Eight hundred thirteen', not 'Eight hundred three'.",
      "83": "This would be 'Eighty-three', missing the hundreds place."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 40
  },
  {
    id: "cl3_ch2_t1_qm5",
    type: "mcq",
    question: "What is the number name for 608?",
    options: ["Six hundred eight", "Six hundred eighty", "Sixty-eight", "Six thousand eight"],
    correctAnswer: "Six hundred eight",
    explanation: "608 has 6 in the hundreds place, 0 in the tens place, and 8 in the ones place, so it's 'Six hundred eight'.",
    wrongAnswerExplanations: {
      "Six hundred eighty": "This would be 680, not 608.",
      "Sixty-eight": "This would be 68, not 608.",
      "Six thousand eight": "This would be 6008, not 608."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 40
  },
  {
    id: "cl3_ch2_t1_qm6",
    type: "mcq",
    question: "Which number is equivalent to 4 hundreds + 7 tens + 9 ones?",
    options: ["479", "497", "4709", "470 + 9"],
    correctAnswer: "479",
    explanation: "4 hundreds = 400, 7 tens = 70, and 9 ones = 9. Together they make 479.",
    wrongAnswerExplanations: {
      "497": "This would be 4 hundreds, 9 tens, and 7 ones.",
      "4709": "This incorrectly represents 4 thousands, 7 hundreds, 0 tens, and 9 ones.",
      "470 + 9": "This is the partial expanded form, not the standard numeral."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: "cl3_ch2_t1_qm7",
    type: "mcq",
    question: "What is the number that has 2 in the hundreds place, 0 in the tens place, and 5 in the ones place?",
    options: ["205", "250", "25", "2005"],
    correctAnswer: "205",
    explanation: "With 2 in the hundreds place, 0 in the tens place, and 5 in the ones place, we write 205.",
    wrongAnswerExplanations: {
      "250": "This has 5 in the tens place, not 0.",
      "25": "This is missing the hundreds place.",
      "2005": "This has an extra thousands place not mentioned in the question."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 40
  },
  {
    id: "cl3_ch2_t1_qm8",
    type: "mcq",
    question: "Which of these would be written as 324?",
    options: [
      "3 hundreds, 24 ones",
      "3 hundreds, 2 tens, 4 ones",
      "32 tens, 4 ones",
      "300 + 20 + 4"
    ],
    correctAnswer: "3 hundreds, 2 tens, 4 ones",
    explanation: "324 consists of 3 hundreds, 2 tens, and 4 ones, representing each digit in its correct place value.",
    wrongAnswerExplanations: {
      "3 hundreds, 24 ones": "This isn't the standard way to express place value; tens should be separated.",
      "32 tens, 4 ones": "32 tens would be 320, not 324.",
      "300 + 20 + 4": "This is the expanded form, not the place value description."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: "cl3_ch2_t1_qm9",
    type: "mcq",
    question: "What is the number name for 150?",
    options: ["One hundred fifty", "One hundred five", "Fifteen", "One hundred and fifty"],
    correctAnswer: "One hundred fifty",
    explanation: "150 has 1 in the hundreds place, 5 in the tens place, and 0 in the ones place, so it's 'One hundred fifty'.",
    wrongAnswerExplanations: {
      "One hundred five": "This would be 105, not 150.",
      "Fifteen": "This would be 15, not 150.",
      "One hundred and fifty": "This is acceptable in British English, but in Indian English we typically omit 'and'."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 40
  },
  {
    id: "cl3_ch2_t1_qm10",
    type: "mcq",
    question: "What is the digit in the hundreds place in the number 905?",
    options: ["9", "0", "5", "None of these"],
    correctAnswer: "9",
    explanation: "In 905, the digit 9 is in the hundreds place, 0 is in the tens place, and 5 is in the ones place.",
    wrongAnswerExplanations: {
      "0": "0 is in the tens place, not the hundreds place.",
      "5": "5 is in the ones place, not the hundreds place.",
      "None of these": "9 is clearly in the hundreds place."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 40
  },
  {
    id: "cl3_ch2_t1_qm11",
    type: "mcq",
    question: "Which of these numbers is the smallest?",
    options: ["301", "310", "103", "130"],
    correctAnswer: "103",
    explanation: "103 is the smallest because it has the digit 1 in the hundreds place, which is less than 3.",
    wrongAnswerExplanations: {
      "301": "301 is greater than 103 because it has 3 in the hundreds place.",
      "310": "310 is greater than 103 because it has 3 in the hundreds place.",
      "130": "130 is greater than 103 because it has 1 in the hundreds place but 3 in the tens place."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: "cl3_ch2_t1_qm12",
    type: "mcq",
    question: "If you have a number with 6 hundreds, 4 tens, and 0 ones, what number do you have?",
    options: ["640", "604", "6400", "600 + 40"],
    correctAnswer: "640",
    explanation: "6 hundreds = 600, 4 tens = 40, and 0 ones = 0. Together they make 640.",
    wrongAnswerExplanations: {
      "604": "This would be 6 hundreds, 0 tens, and 4 ones.",
      "6400": "This would be 6 thousands, 4 hundreds, 0 tens, and 0 ones.",
      "600 + 40": "This is the expanded form, not the standard numeral."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 40
  },
  {
    id: "cl3_ch2_t1_qm13",
    type: "mcq",
    question: "What is the standard form of 300 + 70 + 6?",
    options: ["376", "370 + 6", "3706", "367"],
    correctAnswer: "376",
    explanation: "300 + 70 + 6 = 376, which is the standard form showing 3 hundreds, 7 tens, and 6 ones.",
    wrongAnswerExplanations: {
      "370 + 6": "This is still partially in expanded form, not standard form.",
      "3706": "This incorrectly places the digits, adding an extra zero.",
      "367": "This doesn't correctly represent the place values in the expanded form."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 40
  },
  {
    id: "cl3_ch2_t1_qm14",
    type: "mcq",
    question: "How would you write 'Nine hundred ninety-nine' as a numeral?",
    options: ["999", "990", "909", "9009"],
    correctAnswer: "999",
    explanation: "Nine hundred = 900, ninety = 90, and nine = 9. Together: 900 + 90 + 9 = 999.",
    wrongAnswerExplanations: {
      "990": "This would be 'Nine hundred ninety', missing the ones place.",
      "909": "This would be 'Nine hundred nine', missing the tens place.",
      "9009": "This would be 'Nine thousand nine', not 'Nine hundred ninety-nine'."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 40
  },
  {
    id: "cl3_ch2_t1_qm15",
    type: "mcq",
    question: "What number comes just after 599?",
    options: ["600", "601", "598", "590"],
    correctAnswer: "600",
    explanation: "The number that comes just after 599 is 600. We add 1 to find the next number.",
    wrongAnswerExplanations: {
      "601": "This is two numbers after 599, not just after.",
      "598": "This comes before 599, not after.",
      "590": "This is less than 599, not after it."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 40
  },
  {
    id: "cl3_ch2_t1_qm16",
    type: "mcq",
    question: "If you write the numbers from 195 to 205, how many times will you write the digit 0?",
    options: ["1", "2", "3", "4"],
    correctAnswer: "3",
    explanation: "You'll write 0 in: 200, 201, 202, 203, 204, 205. That's 3 zeros in total (hundreds place in 200-205).",
    wrongAnswerExplanations: {
      "1": "This is fewer than the actual occurrences.",
      "2": "This is fewer than the actual occurrences.",
      "4": "This is more than the actual occurrences."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 50
  },
  {
    id: "cl3_ch2_t1_qm17",
    type: "mcq",
    question: "In which of these numbers is the value of 8 equal to 80?",
    options: ["386", "836", "683", "860"],
    correctAnswer: "386",
    explanation: "In 386, the digit 8 is in the tens place, giving it a value of 8 × 10 = 80.",
    wrongAnswerExplanations: {
      "836": "In 836, the 8 is in the hundreds place with a value of 800.",
      "683": "In 683, the 8 is in the tens place, giving it a value of 80.",
      "860": "In 860, the 8 is in the hundreds place with a value of 800."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: "cl3_ch2_t1_qm18",
    type: "mcq",
    question: "What is the place value of 4 in the number 429?",
    options: ["Hundreds", "Tens", "Ones", "Thousands"],
    correctAnswer: "Hundreds",
    explanation: "In 429, the digit 4 is in the first position from the left, which is the hundreds place.",
    wrongAnswerExplanations: {
      "Tens": "In 429, the digit 2 is in the tens place, not 4.",
      "Ones": "In 429, the digit 9 is in the ones place, not 4.",
      "Thousands": "429 is a 3-digit number and doesn't have a thousands place."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 40
  },
  {
    id: "cl3_ch2_t1_qm19",
    type: "mcq",
    question: "Which of these numbers has the same digit in the tens and ones places?",
    options: ["565", "787", "252", "All of these"],
    correctAnswer: "All of these",
    explanation: "In 565, 5 is in both tens and ones. In 787, 7 is in both. In 252, 2 is in both. So all have the same digit in tens and ones places.",
    wrongAnswerExplanations: {
      "565": "This is correct, but not the only answer.",
      "787": "This is correct, but not the only answer.",
      "252": "This is correct, but not the only answer."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: "cl3_ch2_t1_qm20",
    type: "mcq",
    question: "What is another way to write 400 + 50 + 9?",
    options: ["459", "495", "450 + 9", "4 + 5 + 9"],
    correctAnswer: "459",
    explanation: "400 + 50 + 9 = 459, which represents 4 hundreds, 5 tens, and 9 ones.",
    wrongAnswerExplanations: {
      "495": "This would be 400 + 90 + 5, not 400 + 50 + 9.",
      "450 + 9": "This is still partially in expanded form, not fully converted to standard form.",
      "4 + 5 + 9": "This adds the digits without considering their place values."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 40
  }
];
