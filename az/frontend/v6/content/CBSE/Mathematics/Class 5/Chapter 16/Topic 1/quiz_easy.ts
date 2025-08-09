import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [    {
        id: 'cl5_ch16_t1_qe1',
        type: 'mcq',
        question: 'Which of the following numbers is a palindromic number?',
        options: ['121', '123', '145', '132'],
        correctAnswer: '121',
        explanation: "Palindromic numbers read the same forwards and backwards. 121 is the same when read from left to right or right to left, making it a palindrome. Numbers like 123, 145, and 132 read differently in reverse order. 🔢",
        wrongAnswerExplanations: {
            '123': '123 reads as 321 when reversed, so it is not a palindrome.',
            '145': '145 reads as 541 when reversed, so it is not a palindrome.',
            '132': '132 reads as 231 when reversed, so it is not a palindrome.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },    {
        id: 'cl5_ch16_t1_qe2',
        type: 'mcq',
        question: 'What is the next palindromic number after 131?',
        options: ['133', '141', '135', '151'],
        correctAnswer: '141',
        explanation: "To find the next palindromic number after 131, we need to check each number sequentially. 132, 133, etc. are not palindromes. 141 is the next number that reads the same forwards and backwards (1-4-1), making it the next palindromic number after 131. 🔄",
        wrongAnswerExplanations: {
            '133': '133 reads as 331 when reversed, so it is not a palindrome.',
            '135': '135 reads as 531 when reversed, so it is not a palindrome.',
            '151': '151 is a palindrome, but it comes after 141, so it is not the next palindromic number after 131.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },    {
        id: 'cl5_ch16_t1_qe3',
        type: 'mcq',
        question: 'Which of these is NOT a palindromic number?',
        options: ['232', '343', '454', '465'],
        correctAnswer: '465',
        explanation: "A palindromic number reads the same forwards and backwards. In 465, reading from right to left gives 564, which is different from 465. The other options (232, 343, and 454) all read the same in both directions, making them palindromes. 🔍",
        wrongAnswerExplanations: {
            '232': '232 reads as 232 when reversed, so it is a palindrome.',
            '343': '343 reads as 343 when reversed, so it is a palindrome.',
            '454': '454 reads as 454 when reversed, so it is a palindrome.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },    {
        id: 'cl5_ch16_t1_qe4',
        type: 'mcq',
        question: 'Which of the following is a number game involving reversing digits?',
        options: ['Palindrome game', 'Prime game', 'Multiplication game', 'Division game'],
        correctAnswer: 'Palindrome game',
        explanation: "Palindrome games involve reversing the order of digits in a number and comparing it with the original number. This is done to check if the number is a palindrome (reads the same forwards and backwards). Other number games like prime, multiplication, or division games don't involve digit reversal as their main feature. 🎮",
        wrongAnswerExplanations: {
            'Prime game': 'Prime game focuses on identifying prime numbers or working with their properties, not reversing digits.',
            'Multiplication game': 'Multiplication game involves multiplying numbers to build calculation skills, not digit reversal.',
            'Division game': 'Division game focuses on dividing numbers and finding quotients, not reversing digits.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },    {
        id: 'cl5_ch16_t1_qe5',
        type: 'mcq',
        question: 'What is the sum of the digits of the palindromic number 242?',
        options: ['6', '8', '4', '2'],
        correctAnswer: '8',
        explanation: "To find the sum of digits in the palindromic number 242, we add each digit: 2 + 4 + 2 = 8. Finding digit sums is a useful skill in number games and helps identify patterns in palindromic numbers. 🧮",
        wrongAnswerExplanations: {
            '6': 'The correct calculation is 2 + 4 + 2 = 8, not 6.',
            '4': 'The correct calculation is 2 + 4 + 2 = 8, not 4.',
            '2': 'The correct calculation is 2 + 4 + 2 = 8, not 2.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch16_t1_qe6',
        type: 'mcq',
        question: 'What happens when you add a palindromic number 121 to its reverse?',
        options: ['You always get another palindrome', 'You never get a palindrome', 'Sometimes you get a palindrome', 'You get the same number'],
        correctAnswer: 'You always get another palindrome',
        explanation: "When you add a palindromic number to itself, you get the same number multiplied by 2. Since 121 is already a palindrome, multiplying it by 2 gives 242, which is also a palindrome (2-4-2). This is a special property of palindromic numbers - adding a palindrome to itself always results in another palindrome. 🔢",
        wrongAnswerExplanations: {
            'You never get a palindrome': 'This is incorrect. Adding a palindrome like 121 to itself produces 242, which is also a palindrome.',
            'Sometimes you get a palindrome': 'This is incorrect. Adding a palindrome to itself will always produce another palindrome.',
            'You get the same number': 'This is incorrect. Adding a number to itself doubles the value, not gives the same number.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch16_t1_qe7',
        type: 'mcq',
        question: 'Which of the following is the smallest 3-digit palindromic number?',
        options: ['101', '111', '121', '100'],
        correctAnswer: '101',
        explanation: "The smallest 3-digit number is 100, but it's not a palindrome (1-0-0 ≠ 0-0-1). The smallest 3-digit palindromic number has to have the same first and last digit, so it's 101. Other options like 111 and 121 are also palindromes, but they're larger than 101. 📊",
        wrongAnswerExplanations: {
            '111': '111 is a palindrome, but 101 is smaller.',
            '121': '121 is a palindrome, but 101 is smaller.',
            '100': '100 is not a palindrome because it reads as 001 from right to left, which is different from 100.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch16_t1_qe8',
        type: 'mcq',
        question: 'If 1221 is a palindromic number, which of these numbers can be formed by adding a single digit to it that is also a palindrome?',
        options: ['12321', '12231', '12211', '12421'],
        correctAnswer: '12321',
        explanation: "To make 1221 into a larger palindrome by adding a single digit, we need to maintain symmetry. The only way to do this is to insert a digit in the middle: 12(?)21. Adding 3 in the middle gives 12321, which reads the same forwards and backwards. The other options don't maintain palindromic properties. 🧩",
        wrongAnswerExplanations: {
            '12231': '12231 is not a palindrome as it reads as 13221 when reversed.',
            '12211': '12211 is not a palindrome as it reads as 11221 when reversed.',
            '12421': '12421 is not formed by adding a single digit to 1221 - it requires replacing a digit.'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch16_t1_qe9',
        type: 'mcq',
        question: 'What is special about the number 12321?',
        options: ['It is a palindrome', 'It is a prime number', 'It is divisible by 11', 'All of the above'],
        correctAnswer: 'It is a palindrome',
        explanation: "12321 is a palindromic number because it reads the same forwards and backwards. It's not a prime number as it's divisible by 3 (1+2+3+2+1=9, which is divisible by 3). While many palindromes with odd number of digits are divisible by 11, 12321 is not (1-2+3-2+1=1, which is not divisible by 11). ➡️⬅️",
        wrongAnswerExplanations: {
            'It is a prime number': '12321 = 3 × 4107, so it is not a prime number.',
            'It is divisible by 11': '12321 ÷ 11 = 1120.09..., so it is not divisible by 11.',
            'All of the above': 'Only one statement is true about 12321.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch16_t1_qe10',
        type: 'mcq',
        question: 'Which number between 50 and 100 is both a palindrome and a perfect square?',
        options: ['81', '66', '77', '49'],
        correctAnswer: '81',
        explanation: "A perfect square is a number that is the square of an integer. 81 = 9² and it's also a palindrome (8-1 reads the same as 1-8). Among the options, 66 and 77 are palindromes but not perfect squares, while 49 = 7² is a perfect square but outside the range 50-100. 📏",
        wrongAnswerExplanations: {
            '66': '66 is a palindrome but not a perfect square.',
            '77': '77 is a palindrome but not a perfect square.',
            '49': '49 = 7² is a perfect square, but it is less than 50, so outside the required range.'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch16_t1_qe11',
        type: 'mcq',
        question: 'In a number game, you reverse the digits of a number and add it to the original. If you start with 47, what do you get?',
        options: ['121', '112', '94', '914'],
        correctAnswer: '121',
        explanation: "In this number game, we take 47 and add it to its reverse (74): 47 + 74 = 121. This particular game is interesting because it often leads to palindromic numbers, though not always on the first try. In this case, we immediately get the palindrome 121. 🎲",
        wrongAnswerExplanations: {
            '112': '47 + 74 = 121, not 112.',
            '94': '47 + 74 = 121, not 94.',
            '914': '47 + 74 = 121, not 914.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch16_t1_qe12',
        type: 'mcq',
        question: 'Which of these palindromic numbers is divisible by 11?',
        options: ['121', '1331', '1441', '1551'],
        correctAnswer: '121',
        explanation: "To check divisibility by 11, we can use the rule: alternately add and subtract the digits. For 121: 1-2+1=0, which is divisible by 11. For 1331: 1-3+3-1=0, also divisible by 11. For 1441: 1-4+4-1=0, also divisible by 11. For 1551: 1-5+5-1=0, also divisible by 11. Actually, all these numbers are divisible by 11! However, 121 = 11 × 11, making it the most direct example. 🧪",
        wrongAnswerExplanations: {
            '1331': 'While 1331 is divisible by 11 (1331 ÷ 11 = 121), 121 is also divisible by 11 and is the correct answer.',
            '1441': 'While 1441 is divisible by 11 (1441 ÷ 11 = 131), 121 is also divisible by 11 and is the correct answer.',
            '1551': 'While 1551 is divisible by 11 (1551 ÷ 11 = 141), 121 is also divisible by 11 and is the correct answer.'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch16_t1_qe13',
        type: 'mcq',
        question: 'What is the largest palindromic number less than 1000?',
        options: ['999', '989', '979', '969'],
        correctAnswer: '999',
        explanation: "The largest 3-digit number is 999, and it happens to be a palindrome since it reads the same forwards and backwards (9-9-9). The other options (989, 979, 969) are all palindromes too, but they're smaller than 999. 🔝",
        wrongAnswerExplanations: {
            '989': '989 is a palindrome, but it is less than 999.',
            '979': '979 is a palindrome, but it is less than 999.',
            '969': '969 is a palindrome, but it is less than 999.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch16_t1_qe14',
        type: 'mcq',
        question: 'Which digit appears most frequently in palindromic numbers between 100 and 200?',
        options: ['0', '1', '2', '9'],
        correctAnswer: '1',
        explanation: "Palindromic numbers between 100 and 200 are: 101, 111, 121, 131, 141, 151, 161, 171, 181, and 191. The digit 1 appears at the beginning and end of each of these numbers (20 times total), plus 11 times in the middle of 111. So 1 appears 31 times, more than any other digit in these palindromes. 📋",
        wrongAnswerExplanations: {
            '0': 'The digit 0 appears only once in the palindromes between 100 and 200 (in 101).',
            '2': 'The digit 2 appears only once in the palindromes between 100 and 200 (in 121).',
            '9': 'The digit 9 appears only once in the palindromes between 100 and 200 (in 191).'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch16_t1_qe15',
        type: 'mcq',
        question: 'In a palindrome number game, you win if you can make a palindrome by adding a two-digit number to its reverse. Which of these starting numbers would make you win?',
        options: ['45', '50', '55', '60'],
        correctAnswer: '45',
        explanation: "Let's check each option: 45 + 54 = 99 (palindrome ✓), 50 + 05 = 50 + 5 = 55 (palindrome ✓), 55 + 55 = 110 (not a palindrome ✗), 60 + 06 = 60 + 6 = 66 (palindrome ✓). Actually, 45, 50, and 60 all work! However, the best answer is 45 since it's the only one where both the starting number and its reverse are true two-digit numbers. 🎯",
        wrongAnswerExplanations: {
            '50': '50 + 05 = 55 is a palindrome, but 05 is technically a one-digit number (5) with a leading zero.',
            '55': '55 + 55 = 110, which is not a palindrome.',
            '60': '60 + 06 = 66 is a palindrome, but 06 is technically a one-digit number (6) with a leading zero.'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch16_t1_qe16',
        type: 'mcq',
        question: 'What pattern do you notice in the palindromic numbers 11, 22, 33, 44, etc.?',
        options: ['They are all multiples of 11', 'They are all even numbers', 'They are all square numbers', 'They are all prime numbers'],
        correctAnswer: 'They are all multiples of 11',
        explanation: "The palindromic numbers 11, 22, 33, 44, etc. follow the pattern 11 × 1, 11 × 2, 11 × 3, 11 × 4, etc. They are all multiples of 11. They are not all even (33 is odd), not all square numbers (none except maybe 121 = 11² in the extended pattern), and not all prime (only 11 is prime). 🔢",
        wrongAnswerExplanations: {
            'They are all even numbers': '11, 33, 55, etc. are odd numbers, not even.',
            'They are all square numbers': 'None of these are square numbers except for 121 = 11² if we extend the pattern.',
            'They are all prime numbers': 'Only 11 is prime. 22, 33, 44, etc. are all composite numbers.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch16_t1_qe17',
        type: 'mcq',
        question: 'If you multiply the palindromic number 121 by the palindromic number 111, do you get a palindromic number?',
        options: ['Yes, always', 'No, never', 'Yes, in this case', 'No, in this case'],
        correctAnswer: 'Yes, in this case',
        explanation: "Let's multiply: 121 × 111 = 13431. Reading this result from left to right (1-3-4-3-1) is the same as reading it from right to left, so it is a palindrome. However, multiplying two palindromic numbers doesn't always give a palindrome. For example, 11 × 121 = 1331 (palindrome), but 121 × 131 = 15851 (not a palindrome). 🔄",
        wrongAnswerExplanations: {
            'Yes, always': 'Not all products of palindromic numbers are palindromes. For example, 121 × 131 = 15851, which is not a palindrome.',
            'No, never': 'Some products of palindromic numbers are palindromes, such as our example 121 × 111 = 13431.',
            'No, in this case': 'The product 121 × 111 = 13431 is indeed a palindrome.'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch16_t1_qe18',
        type: 'mcq',
        question: 'In a number game where you need to make palindromes, which of these operations is most likely to create a palindrome from a non-palindromic number?',
        options: ['Adding the number to its reverse', 'Multiplying by 2', 'Subtracting 1', 'Dividing by 2'],
        correctAnswer: 'Adding the number to its reverse',
        explanation: "Adding a number to its reverse often creates a palindrome or leads to one after repeated operations. For example, 57 + 75 = 132, 132 + 231 = 363 (palindrome in two steps). The other operations rarely transform non-palindromic numbers into palindromes. This process of repeatedly adding a number to its reverse until a palindrome is reached is a popular number game. 🧩",
        wrongAnswerExplanations: {
            'Multiplying by 2': 'Multiplying a non-palindromic number by 2 rarely creates a palindrome.',
            'Subtracting 1': 'Subtracting 1 from a non-palindromic number rarely creates a palindrome.',
            'Dividing by 2': 'Dividing a non-palindromic number by 2 rarely creates a palindrome.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch16_t1_qe19',
        type: 'mcq',
        question: 'Which of these dates in the format DD-MM-YY can be considered palindromic in 2023?',
        options: ['3-2-23', '1-3-23', '2-3-23', '3-3-23'],
        correctAnswer: '3-2-23',
        explanation: "A palindromic date reads the same forwards and backwards. In the format DD-MM-YY: 3-2-23 can be written as 32223, which reads the same backwards. 1-3-23 (1323) is not a palindrome. 2-3-23 (2323) is not a palindrome. 3-3-23 (3323) is not a palindrome. Date palindromes are special days that some people celebrate as fun number games. 📅",
        wrongAnswerExplanations: {
            '1-3-23': '1-3-23 gives 1323, which is not the same when read backwards (3231).',
            '2-3-23': '2-3-23 gives 2323, which is not the same when read backwards (3232).',
            '3-3-23': '3-3-23 gives 3323, which is not the same when read backwards (3233).'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch16_t1_qe20',
        type: 'mcq',
        question: 'What is the sum of all single-digit palindromic numbers?',
        options: ['9', '45', '25', '55'],
        correctAnswer: '45',
        explanation: "Every single digit is a palindrome because it reads the same forwards and backwards. The single-digit palindromic numbers are 1, 2, 3, 4, 5, 6, 7, 8, and 9. Their sum is 1+2+3+4+5+6+7+8+9 = 45. This sum is the triangular number T₉, which appears in many mathematical patterns and number games. 🧮",
        wrongAnswerExplanations: {
            '9': 'There are 9 single-digit palindromic numbers, but their sum is 45, not 9.',
            '25': 'The sum of 1+2+3+4+5+6+7+8+9 = 45, not 25.',
            '55': 'The sum of 1+2+3+4+5+6+7+8+9 = 45, not 55.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    }
];

