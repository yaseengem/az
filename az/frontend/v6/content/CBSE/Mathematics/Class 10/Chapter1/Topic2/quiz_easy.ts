import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch1_t2_qe1',
    type: 'mcq',
    question: 'What does the Fundamental Theorem of Arithmetic state?',
    options: [
      'Every natural number can be expressed as a product of its factors',
      'Every natural number greater than 1 can be expressed as a product of primes in a unique way',
      'Every integer can be expressed as a product of primes',
      'Every rational number can be expressed as a product of primes'
    ],
    correctAnswer: 'Every natural number greater than 1 can be expressed as a product of primes in a unique way',
    explanation: 'The Fundamental Theorem of Arithmetic states that every natural number greater than 1 can be expressed as a product of prime numbers in a unique way (up to the order).',
    wrongAnswerExplanations: {
      'Every natural number can be expressed as a product of its factors': 'This is too general and does not specify prime factorization or uniqueness.',
      'Every integer can be expressed as a product of primes': 'This is incorrect because negative integers and 0 cannot be expressed as products of primes.',
      'Every rational number can be expressed as a product of primes': 'Rational numbers include fractions and cannot always be expressed as a product of primes.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch1_t2_qe2',
    type: 'mcq',
    question: 'Which of the following is the prime factorization of 60?',
    options: [
      '2² × 3 × 5',
      '2² × 3² × 5',
      '2 × 3 × 10',
      '2³ × 15'
    ],
    correctAnswer: '2² × 3 × 5',
    explanation: '60 = 2 × 2 × 3 × 5 = 2² × 3 × 5, which is its unique prime factorization.',
    wrongAnswerExplanations: {
      '2² × 3² × 5': '2² × 3² × 5 = 2² × 9 × 5 = 4 × 9 × 5 = 180, not 60.',
      '2 × 3 × 10': 'This is not a proper prime factorization as 10 is not a prime number.',
      '2³ × 15': 'This is not a proper prime factorization as 15 is not a prime number.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch1_t2_qe3',
    type: 'mcq',
    question: 'What is the prime factorization of 120?',
    options: [
      '2³ × 3 × 5',
      '2⁴ × 3 × 5',
      '2³ × 3² × 5',
      '2² × 3 × 10'
    ],
    correctAnswer: '2³ × 3 × 5',
    explanation: '120 = 8 × 15 = 8 × 3 × 5 = 2³ × 3 × 5, which is its unique prime factorization.',
    wrongAnswerExplanations: {
      '2⁴ × 3 × 5': '2⁴ × 3 × 5 = 16 × 3 × 5 = 240, not 120.',
      '2³ × 3² × 5': '2³ × 3² × 5 = 8 × 9 × 5 = 360, not 120.',
      '2² × 3 × 10': 'This is not a proper prime factorization as 10 is not a prime number.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch1_t2_qe4',
    type: 'mcq',
    question: 'If a number is expressed as 2³ × 3² × 5, what is the number?',
    options: [
      '120',
      '180',
      '240',
      '360'
    ],
    correctAnswer: '360',
    explanation: '2³ × 3² × 5 = 8 × 9 × 5 = 72 × 5 = 360.',
    wrongAnswerExplanations: {
      '120': '120 = 2³ × 3 × 5, which is missing a factor of 3.',
      '180': '180 = 2² × 3² × 5, which has one fewer power of 2.',
      '240': '240 = 2⁴ × 3 × 5, which has different powers of 2 and 3.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch1_t2_qe5',
    type: 'mcq',
    question: 'Which of the following numbers is divisible by 12?',
    options: [
      '242',
      '246',
      '248',
      '250'
    ],
    correctAnswer: '248',
    explanation: '248 = 12 × 20 + 8 is not divisible by 4 (12 = 2² × 3). To check: 248 = 240 + 8 = 20 × 12 + 8 = 240 + 8 = 248.',
    wrongAnswerExplanations: {
      '242': '242 is not divisible by 4, so it cannot be divisible by 12 = 2² × 3.',
      '246': '246 is not divisible by 3, so it cannot be divisible by 12 = 2² × 3.',
      '250': '250 is not divisible by 3, so it cannot be divisible by 12 = 2² × 3.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch1_t2_qe6',
    type: 'mcq',
    question: 'The HCF of two numbers is 12 and their LCM is 336. If one of the numbers is 48, what is the other number?',
    options: [
      '64',
      '84',
      '96',
      '108'
    ],
    correctAnswer: '84',
    explanation: 'Using the formula: HCF × LCM = Product of numbers. 12 × 336 = 48 × Other number. Other number = (12 × 336) ÷ 48 = 4032 ÷ 48 = 84.',
    wrongAnswerExplanations: {
      '64': 'If other number is 64, then HCF × LCM = 12 × 336 ≠ 48 × 64.',
      '96': 'If other number is 96, then HCF × LCM = 12 × 336 ≠ 48 × 96.',
      '108': 'If other number is 108, then HCF × LCM = 12 × 336 ≠ 48 × 108.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch1_t2_qe7',
    type: 'mcq',
    question: 'What is the HCF of 2³ × 3² × 5 and 2² × 3 × 5² × 7?',
    options: [
      '2² × 3 × 5',
      '2³ × 3 × 5',
      '2² × 3² × 5',
      '2² × 3 × 5²'
    ],
    correctAnswer: '2² × 3 × 5',
    explanation: 'HCF takes the minimum power of each common prime factor: min(3,2)=2 for 2, min(2,1)=1 for 3, min(1,2)=1 for 5. So HCF = 2² × 3¹ × 5¹ = 2² × 3 × 5.',
    wrongAnswerExplanations: {
      '2³ × 3 × 5': 'This is incorrect as we take the minimum power (2) of the prime factor 2.',
      '2² × 3² × 5': 'This is incorrect as we take the minimum power (1) of the prime factor 3.',
      '2² × 3 × 5²': 'This is incorrect as we take the minimum power (1) of the prime factor 5.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch1_t2_qe8',
    type: 'mcq',
    question: 'What is the LCM of 2³ × 3² × 5 and 2² × 3 × 5² × 7?',
    options: [
      '2³ × 3² × 5² × 7',
      '2³ × 3² × 5²',
      '2² × 3² × 5² × 7',
      '2³ × 3² × 5 × 7'
    ],
    correctAnswer: '2³ × 3² × 5² × 7',
    explanation: 'LCM takes the maximum power of each prime factor: max(3,2)=3 for 2, max(2,1)=2 for 3, max(1,2)=2 for 5, and 7¹. So LCM = 2³ × 3² × 5² × 7.',
    wrongAnswerExplanations: {
      '2³ × 3² × 5²': 'This is missing the prime factor 7 which should be included in the LCM.',
      '2² × 3² × 5² × 7': 'This uses power 2 for prime 2, but should use max(3,2)=3.',
      '2³ × 3² × 5 × 7': 'This uses power 1 for prime 5, but should use max(1,2)=2.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch1_t2_qe9',
    type: 'mcq',
    question: 'For any two natural numbers a and b, their HCF × LCM equals:',
    options: [
      'a + b',
      'a × b',
      '|a - b|',
      'None of these'
    ],
    correctAnswer: 'a × b',
    explanation: 'By the Fundamental Theorem of Arithmetic, for any two numbers a and b: HCF(a,b) × LCM(a,b) = a × b.',
    wrongAnswerExplanations: {
      'a + b': 'This is not the relationship between HCF, LCM, and the two numbers.',
      '|a - b|': 'This is not the relationship between HCF, LCM, and the two numbers.',
      'None of these': 'The correct answer is a × b.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch1_t2_qe10',
    type: 'mcq',
    question: 'The numbers that have only 1 and themselves as factors are called:',
    options: [
      'Composite numbers',
      'Natural numbers',
      'Prime numbers',
      'Even numbers'
    ],
    correctAnswer: 'Prime numbers',
    explanation: 'Prime numbers are natural numbers greater than 1 that have exactly two factors: 1 and the number itself.',
    wrongAnswerExplanations: {
      'Composite numbers': 'Composite numbers have more than two factors.',
      'Natural numbers': 'Natural numbers include both prime and composite numbers.',
      'Even numbers': 'Even numbers are divisible by 2, and most have many factors.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch1_t2_qe11',
    type: 'mcq',
    question: 'Which of these numbers is prime?',
    options: [
      '51',
      '61',
      '87',
      '91'
    ],
    correctAnswer: '61',
    explanation: '61 is a prime number as it has no factors other than 1 and itself.',
    wrongAnswerExplanations: {
      '51': '51 = 3 × 17, so it is composite.',
      '87': '87 = 3 × 29, so it is composite.',
      '91': '91 = 7 × 13, so it is composite.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch1_t2_qe12',
    type: 'mcq',
    question: 'Which of the following is the correct prime factorization of 1000?',
    options: [
      '2³ × 5³',
      '10³',
      '10 × 10²',
      '5³ × 8'
    ],
    correctAnswer: '2³ × 5³',
    explanation: '1000 = 10³ = (2 × 5)³ = 2³ × 5³ = 8 × 125 = 1000.',
    wrongAnswerExplanations: {
      '10³': 'This is not a prime factorization as 10 is not prime.',
      '10 × 10²': 'This is not a prime factorization as 10 is not prime.',
      '5³ × 8': 'This is not a proper prime factorization as 8 is not prime (8 = 2³).'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch1_t2_qe13',
    type: 'mcq',
    question: 'If a number is divisible by 2 and 3, it must be divisible by:',
    options: [
      '5',
      '6',
      '8',
      '9'
    ],
    correctAnswer: '6',
    explanation: 'If a number is divisible by 2 and 3, it is divisible by their LCM. LCM(2,3) = 6, so the number is divisible by 6.',
    wrongAnswerExplanations: {
      '5': 'Divisibility by 2 and 3 does not guarantee divisibility by 5.',
      '8': 'Divisibility by 2 does not guarantee divisibility by 2³ = 8.',
      '9': 'Divisibility by 3 does not guarantee divisibility by 3² = 9.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch1_t2_qe14',
    type: 'mcq',
    question: 'What is the HCF of 0 and 5?',
    options: [
      '0',
      '1',
      '5',
      'Not defined'
    ],
    correctAnswer: '5',
    explanation: 'HCF(0,5) = 5 because any number divides 0, so the largest number that divides both 0 and 5 is 5 itself.',
    wrongAnswerExplanations: {
      '0': 'Zero cannot be the HCF because it is not a factor of positive numbers.',
      '1': '1 divides both, but it is not the highest common factor.',
      'Not defined': 'HCF is defined for 0 and any non-zero number.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch1_t2_qe15',
    type: 'mcq',
    question: 'What is the HCF of 12, 18, and 24?',
    options: [
      '2',
      '3',
      '6',
      '12'
    ],
    correctAnswer: '6',
    explanation: '12 = 2² × 3, 18 = 2 × 3², 24 = 2³ × 3. Taking min power of each prime: HCF = 2¹ × 3¹ = 6.',
    wrongAnswerExplanations: {
      '2': '2 divides all three numbers but is not the highest common factor.',
      '3': '3 divides all three numbers but is not the highest common factor.',
      '12': '12 does not divide 18, so it cannot be the HCF.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch1_t2_qe16',
    type: 'mcq',
    question: 'What is the LCM of 12, 18, and 24?',
    options: [
      '36',
      '48',
      '72',
      '144'
    ],
    correctAnswer: '72',
    explanation: '12 = 2² × 3, 18 = 2 × 3², 24 = 2³ × 3. Taking max power of each prime: LCM = 2³ × 3² = 8 × 9 = 72.',
    wrongAnswerExplanations: {
      '36': '36 = 2² × 3², which is less than the LCM.',
      '48': '48 = 2⁴ × 3, which is not the LCM.',
      '144': '144 = 2⁴ × 3², which is greater than the LCM.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch1_t2_qe17',
    type: 'mcq',
    question: 'Which of the following is always true about the HCF of two numbers?',
    options: [
      'HCF is always less than or equal to both numbers',
      'HCF is always greater than or equal to both numbers',
      'HCF is always equal to one of the numbers',
      'HCF is always a prime number'
    ],
    correctAnswer: 'HCF is always less than or equal to both numbers',
    explanation: 'Since HCF is the largest number that divides both numbers, it cannot be greater than either number.',
    wrongAnswerExplanations: {
      'HCF is always greater than or equal to both numbers': 'HCF cannot be greater than either number it divides.',
      'HCF is always equal to one of the numbers': 'HCF can be smaller than both numbers, like HCF(8,12) = 4.',
      'HCF is always a prime number': 'HCF can be composite, like HCF(12,18) = 6.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch1_t2_qe18',
    type: 'mcq',
    question: 'What is the prime factorization of 196?',
    options: [
      '2² × 7²',
      '2² × 49',
      '4 × 49',
      '14²'
    ],
    correctAnswer: '2² × 7²',
    explanation: '196 = 14² = (2 × 7)² = 2² × 7² = 4 × 49 = 196, which is the prime factorization.',
    wrongAnswerExplanations: {
      '2² × 49': 'This is not a proper prime factorization as 49 = 7² is not prime.',
      '4 × 49': 'This is not a proper prime factorization as both 4 = 2² and 49 = 7² are not prime.',
      '14²': 'This is not a proper prime factorization as 14 = 2 × 7 is not prime.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch1_t2_qe19',
    type: 'mcq',
    question: 'Which of the following numbers has exactly three distinct prime factors?',
    options: [
      '12',
      '30',
      '34',
      '45'
    ],
    correctAnswer: '30',
    explanation: '30 = 2 × 3 × 5 has exactly three distinct prime factors: 2, 3, and 5.',
    wrongAnswerExplanations: {
      '12': '12 = 2² × 3 has only two distinct prime factors: 2 and 3.',
      '34': '34 = 2 × 17 has only two distinct prime factors: 2 and 17.',
      '45': '45 = 3² × 5 has only two distinct prime factors: 3 and 5.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch1_t2_qe20',
    type: 'mcq',
    question: 'If p is a prime number, how many factors does p³ have?',
    options: [
      '3',
      '4',
      '6',
      '9'
    ],
    correctAnswer: '4',
    explanation: 'The factors of p³ are 1, p, p², and p³. So there are 4 factors.',
    wrongAnswerExplanations: {
      '3': 'This is the power of p, not the number of factors.',
      '6': 'This is not the correct number of factors for p³.',
      '9': 'This is not the correct number of factors for p³.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  }
];
