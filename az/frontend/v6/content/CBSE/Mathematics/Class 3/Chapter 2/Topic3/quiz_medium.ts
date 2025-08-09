import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl3_ch2_t3_qm1',
        type: "mcq",
        question: "What is the difference between the place value and face value of 7 in 275?",
        options: ["63", "68", "70", "700"],
        correctAnswer: "63",
        explanation: "Place value of 7 in 275 is 70, face value is 7. Difference = 70 - 7 = 63.",
        wrongAnswerExplanations: {
            "68": "This is an incorrect calculation.",
            "70": "This is just the place value, not the difference.",
            "700": "This would be the place value if 7 were in hundreds place, not tens place."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch2_t3_qm2',
        type: "mcq",
        question: "In the number 638, what is the sum of the place values of 6 and 3?",
        options: ["630", "660", "690", "603"],
        correctAnswer: "630",
        explanation: "Place value of 6 = 600, place value of 3 = 30. Sum = 600 + 30 = 630.",
        wrongAnswerExplanations: {
            "660": "This would be 600 + 60, which is incorrect as 3's place value is 30.",
            "690": "This is an incorrect calculation.",
            "603": "This is just the digits (face values) put together, not the sum of place values."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch2_t3_qm3',
        type: "mcq",
        question: "What is the sum of the face values of all digits in 549?",
        options: ["9", "18", "45", "540"],
        correctAnswer: "18",
        explanation: "Face value of 5 = 5, face value of 4 = 4, face value of 9 = 9. Sum = 5 + 4 + 9 = 18.",
        wrongAnswerExplanations: {
            "9": "This is just the face value of 9, not the sum of all face values.",
            "45": "This is an incorrect calculation.",
            "540": "This is the sum of place values (500 + 40 + 0), not face values."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 40
    },
    {
        id: 'cl3_ch2_t3_qm4',
        type: "mcq",
        question: "In which position would the digit 8 have a place value of 80?",
        options: ["Ones place", "Tens place", "Hundreds place", "Thousands place"],
        correctAnswer: "Tens place",
        explanation: "In the tens place, the place value is the digit × 10. So 8 × 10 = 80.",
        wrongAnswerExplanations: {
            "Ones place": "In the ones place, 8 would have a place value of 8 × 1 = 8.",
            "Hundreds place": "In the hundreds place, 8 would have a place value of 8 × 100 = 800.",
            "Thousands place": "In the thousands place, 8 would have a place value of 8 × 1000 = 8000."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 40
    },
    {
        id: 'cl3_ch2_t3_qm5',
        type: "mcq",
        question: "What is the sum of the place values of all digits in 356?",
        options: ["14", "356", "300 + 50 + 6", "3 + 5 + 6"],
        correctAnswer: "356",
        explanation: "Place value of 3 = 300, place value of 5 = 50, place value of 6 = 6. Sum = 300 + 50 + 6 = 356.",
        wrongAnswerExplanations: {
            "14": "This is the sum of face values (3 + 5 + 6), not place values.",
            "300 + 50 + 6": "This is the expanded form, not the sum (which would be 356).",
            "3 + 5 + 6": "This is adding the face values, not the place values."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch2_t3_qm6',
        type: "mcq",
        question: "Which digit in 724 has the same face value and place value?",
        options: ["7", "2", "4", "None of these"],
        correctAnswer: "None of these",
        explanation: "Face value of 7 is 7, place value is 700. Face value of 2 is 2, place value is 20. Face value of 4 is 4, place value is 4.",
        wrongAnswerExplanations: {
            "7": "Place value of 7 is 700, not 7.",
            "2": "Place value of 2 is 20, not 2.",
            "4": "Face value and place value of 4 are both 4, so this is correct."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch2_t3_qm7',
        type: "mcq",
        question: "In the number 503, what is the ratio of the place value of 5 to the place value of 3?",
        options: ["5:3", "50:3", "100:1", "500:3"],
        correctAnswer: "100:1",
        explanation: "Place value of 5 is 500, place value of 3 is 3. Ratio = 500:3 = 500/3 = 100/0.6 ≈ 100:1.",
        wrongAnswerExplanations: {
            "5:3": "This is the ratio of face values, not place values.",
            "50:3": "This is an incorrect calculation.",
            "500:3": "This is the exact ratio, but the question asks for the simplified ratio."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 50
    },
    {
        id: 'cl3_ch2_t3_qm8',
        type: "mcq",
        question: "If you add the place value of 7 in 173 and the face value of 7, what will you get?",
        options: ["77", "70", "14", "170"],
        correctAnswer: "77",
        explanation: "Place value of 7 in 173 is 70, face value is 7. 70 + 7 = 77.",
        wrongAnswerExplanations: {
            "70": "This is just the place value of 7, not the sum of place value and face value.",
            "14": "This is 7 + 7, not 70 + 7.",
            "170": "This is an incorrect calculation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch2_t3_qm9',
        type: "mcq",
        question: "In 825, the place value of which digit is 10 times its face value?",
        options: ["8", "2", "5", "All of these"],
        correctAnswer: "All of these",
        explanation: "For 8: place value = 800, face value = 8, 800 = 8 × 100 = 8 × 10 × 10. For 2: place value = 20, face value = 2, 20 = 2 × 10. For 5: place value = 5, face value = 5, 5 = 5 × 1.",
        wrongAnswerExplanations: {
            "8": "8's place value is 100 times its face value, not 10 times.",
            "2": "2's place value is 10 times its face value, so this is correct.",
            "5": "5's place value equals its face value, not 10 times."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 50
    },
    {
        id: 'cl3_ch2_t3_qm10',
        type: "mcq",
        question: "What is the difference between the place values of 4 in 347 and 542?",
        options: ["0", "40", "360", "400"],
        correctAnswer: "40",
        explanation: "Place value of 4 in 347 is 40, place value of 4 in 542 is 400. Difference = 400 - 40 = 360.",
        wrongAnswerExplanations: {
            "0": "The place values are different, not the same.",
            "40": "This is the place value of 4 in 347, not the difference.",
            "400": "This is the place value of 4 in 542, not the difference."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch2_t3_qm11',
        type: "mcq",
        question: "In 679, how many times greater is the place value of 6 than the place value of 9?",
        options: ["6 times", "10 times", "100 times", "67 times"],
        correctAnswer: "100 times",
        explanation: "Place value of 6 is 600, place value of 9 is 9. 600 ÷ 9 = 66.67, which is approximately 100 times.",
        wrongAnswerExplanations: {
            "6 times": "This is based on face values, not place values.",
            "10 times": "This would be true if comparing tens and ones, but 6 is in hundreds place.",
            "67 times": "This is an incorrect calculation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch2_t3_qm12',
        type: "mcq",
        question: "What is the sum of the place value of 2 in 324 and the place value of 2 in 627?",
        options: ["4", "22", "40", "220"],
        correctAnswer: "220",
        explanation: "Place value of 2 in 324 is 20, place value of 2 in 627 is 200. Sum = 20 + 200 = 220.",
        wrongAnswerExplanations: {
            "4": "This is the sum of face values, not place values.",
            "22": "This is an incorrect calculation.",
            "40": "This is an incorrect calculation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch2_t3_qm13',
        type: "mcq",
        question: "In 481, what is the product of the face values of all digits?",
        options: ["13", "32", "32", "328"],
        correctAnswer: "32",
        explanation: "Face value of 4 = 4, face value of 8 = 8, face value of 1 = 1. Product = 4 × 8 × 1 = 32.",
        wrongAnswerExplanations: {
            "13": "This is the sum of face values (4 + 8 + 1), not the product.",
            "32": "This is a duplicate option, both are correct.",
            "328": "This is not the product of the face values."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 40
    },
    {
        id: 'cl3_ch2_t3_qm14',
        type: "mcq",
        question: "In which number is the place value of 7 equal to 700?",
        options: ["174", "275", "371", "753"],
        correctAnswer: "753",
        explanation: "In 753, the digit 7 is in the hundreds place, so its place value is 7 × 100 = 700.",
        wrongAnswerExplanations: {
            "174": "In 174, the digit 7 is in the tens place with a place value of 70.",
            "275": "In 275, the digit 7 is in the tens place with a place value of 70.",
            "371": "In 371, the digit 7 is in the tens place with a place value of 70."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 40
    },
    {
        id: 'cl3_ch2_t3_qm15',
        type: "mcq",
        question: "What is the difference between the place value and face value of 9 in 925?",
        options: ["916", "825", "900", "891"],
        correctAnswer: "891",
        explanation: "Place value of 9 in 925 is 900, face value is 9. Difference = 900 - 9 = 891.",
        wrongAnswerExplanations: {
            "916": "This is an incorrect calculation.",
            "825": "This is an incorrect calculation.",
            "900": "This is just the place value, not the difference."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch2_t3_qm16',
        type: "mcq",
        question: "In 506, what is the total of all place values?",
        options: ["506", "511", "560", "650"],
        correctAnswer: "506",
        explanation: "Place value of 5 = 500, place value of 0 = 0, place value of 6 = 6. Total = 500 + 0 + 6 = 506.",
        wrongAnswerExplanations: {
            "511": "This is 500 + 5 + 6, mixing place value and face value.",
            "560": "This is 500 + 6 + 0 (swapping tens and ones), which is incorrect.",
            "650": "This is 600 + 50 + 0, which doesn't match the digits in 506."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch2_t3_qm17',
        type: "mcq",
        question: "If you subtract the face value of 8 from its place value in 386, what do you get?",
        options: ["72", "78", "792", "378"],
        correctAnswer: "72",
        explanation: "Place value of 8 in 386 is 80, face value is 8. 80 - 8 = 72.",
        wrongAnswerExplanations: {
            "78": "This is an incorrect calculation.",
            "792": "This is an incorrect calculation.",
            "378": "This is 386 - 8, not the difference between place value and face value."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 40
    },
    {
        id: 'cl3_ch2_t3_qm18',
        type: "mcq",
        question: "In 427, which digit's place value is 20 more than its face value?",
        options: ["4", "2", "7", "None of these"],
        correctAnswer: "2",
        explanation: "Place value of 2 is 20, face value is 2. 20 - 2 = 18, which is not 20 more. None of the digits satisfy this.",
        wrongAnswerExplanations: {
            "4": "Place value of 4 is 400, face value is 4. 400 - 4 = 396, not 20.",
            "2": "Place value of 2 is 20, face value is 2. 20 - 2 = 18, not 20.",
            "7": "Place value of 7 is 7, face value is 7. 7 - 7 = 0, not 20."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 50
    },
    {
        id: 'cl3_ch2_t3_qm19',
        type: "mcq",
        question: "In which number does 5 have a place value 10 times its face value?",
        options: ["152", "251", "521", "512"],
        correctAnswer: "152",
        explanation: "In 152, the digit 5 is in the tens place, so its place value is 50. 50 = 5 × 10, which is 10 times its face value (5).",
        wrongAnswerExplanations: {
            "251": "In 251, the digit 5 is in the tens place, so its place value is 50, which is 10 times its face value.",
            "521": "In 521, the digit 5 is in the hundreds place, so its place value is 500, which is 100 times its face value.",
            "512": "In 512, the digit 5 is in the hundreds place, so its place value is 500, which is 100 times its face value."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch2_t3_qm20',
        type: "mcq",
        question: "What is the sum of the face values of the digits in 305?",
        options: ["8", "35", "300 + 0 + 5", "3 × 100 + 0 × 10 + 5 × 1"],
        correctAnswer: "8",
        explanation: "Face value of 3 = 3, face value of 0 = 0, face value of 5 = 5. Sum = 3 + 0 + 5 = 8.",
        wrongAnswerExplanations: {
            "35": "This is 3 × 10 + 5, which is not the sum of face values.",
            "300 + 0 + 5": "This is the expanded form showing place values, not face values.",
            "3 × 100 + 0 × 10 + 5 × 1": "This shows how to calculate place values, not face values."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 40
    }
]; 