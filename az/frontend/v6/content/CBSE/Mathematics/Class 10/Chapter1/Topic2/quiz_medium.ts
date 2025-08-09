import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch1_t2_qm1',
    type: 'mcq',
    question: 'If the HCF of two numbers is 18 and their LCM is 720, and one of the numbers is 72, what is the other number?',
    options: [
      '144',
      '180',
      '216',
      '360'
    ],
    correctAnswer: '180',
    explanation: 'Using the formula HCF × LCM = Product of numbers: 18 × 720 = 72 × Other number. Other number = (18 × 720)/72 = 12960/72 = 180.',
    wrongAnswerExplanations: {
      '144': 'If the other number was 144, then HCF × LCM = 18 × 720 ≠ 72 × 144.',
      '216': 'If the other number was 216, then HCF × LCM = 18 × 720 ≠ 72 × 216.',
      '360': 'If the other number was 360, then HCF × LCM = 18 × 720 ≠ 72 × 360.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch1_t2_qm2',
    type: 'mcq',
    question: 'What is the smallest number that leaves remainders 2, 3, and 4 when divided by 5, 6, and 7 respectively?',
    options: [
      '59',
      '109',
      '214',
      '214'
    ],
    correctAnswer: '214',
    explanation: 'The number is of form 5k+2 = 6m+3 = 7n+4. Using Chinese remainder theorem, we get 214 as the smallest such number.',
    wrongAnswerExplanations: {
      '59': '59 gives remainder 4 when divided by 5, which is not 2.',
      '109': '109 gives remainder 1 when divided by 6, which is not 3.',
      '214': 'This is the correct answer, not a wrong option.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch1_t2_qm3',
    type: 'mcq',
    question: 'What is the smallest 4-digit number that is divisible by 12, 15, and 18?',
    options: [
      '1020',
      '1080',
      '1260',
      '1800'
    ],
    correctAnswer: '1080',
    explanation: 'LCM(12,15,18) = LCM(12,LCM(15,18)) = LCM(12,90) = 180. Smallest 4-digit multiple of 180 is 1080 = 180 × 6.',
    wrongAnswerExplanations: {
      '1020': '1020 is not divisible by 15 (1020 ÷ 15 = 68).',
      '1260': '1260 is divisible by all three, but not the smallest such 4-digit number.',
      '1800': '1800 is divisible by all three, but not the smallest such 4-digit number.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch1_t2_qm4',
    type: 'mcq',
    question: 'If a and b are co-prime numbers, then which of the following is always true?',
    options: [
      'a and b are both prime numbers',
      'ab is always a perfect square',
      'HCF(a,b) = 1',
      'LCM(a,b) = a + b'
    ],
    correctAnswer: 'HCF(a,b) = 1',
    explanation: 'Co-prime numbers, by definition, have HCF = 1. This does not require them to be prime, just to share no common factors.',
    wrongAnswerExplanations: {
      'a and b are both prime numbers': 'Co-prime numbers need not be prime (e.g., 8 and 15 are co-prime).',
      'ab is always a perfect square': 'The product of co-prime numbers is not necessarily a perfect square.',
      'LCM(a,b) = a + b': 'This is generally not true for co-prime numbers.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch1_t2_qm5',
    type: 'mcq',
    question: 'What is the largest number that divides 1305, 4665, and 6905 to give the same remainder in each case?',
    options: [
      '1000',
      '1305',
      '4665',
      '6905'
    ],
    correctAnswer: '1305',
    explanation: 'We need HCF(4665-1305, 6905-1305) = HCF(3360, 5600) = 1120. But this exceeds 1305, so the answer is 1305.',
    wrongAnswerExplanations: {
      '1000': 'This is not the largest such number.',
      '4665': 'This number is greater than the difference between the given numbers.',
      '6905': 'This number is greater than the difference between the given numbers.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch1_t2_qm6',
    type: 'mcq',
    question: 'What is the exponent of the highest power of 2 that divides 100!?',
    options: [
      '96',
      '97',
      '98',
      '99'
    ],
    correctAnswer: '97',
    explanation: 'Highest power of 2 in 100! = [100/2] + [100/4] + [100/8] + [100/16] + [100/32] + [100/64] = 50 + 25 + 12 + 6 + 3 + 1 = 97.',
    wrongAnswerExplanations: {
      '96': 'This is incorrect using the formula for finding the highest power of a prime in a factorial.',
      '98': 'This is incorrect using the formula for finding the highest power of a prime in a factorial.',
      '99': 'This is incorrect using the formula for finding the highest power of a prime in a factorial.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch1_t2_qm7',
    type: 'mcq',
    question: 'If the HCF of two numbers is 1 and their product is 117, what is their LCM?',
    options: [
      '117',
      '118',
      '119',
      '120'
    ],
    correctAnswer: '117',
    explanation: 'For co-prime numbers (HCF = 1), LCM equals their product. Since the product is 117, LCM = 117.',
    wrongAnswerExplanations: {
      '118': 'When HCF = 1, LCM equals product (117), not 118.',
      '119': 'When HCF = 1, LCM equals product (117), not 119.',
      '120': 'When HCF = 1, LCM equals product (117), not 120.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch1_t2_qm8',
    type: 'mcq',
    question: 'What is the smallest number that when divided by 35 and 45 leaves remainders 18 and 24 respectively?',
    options: [
      '143',
      '269',
      '314',
      '315'
    ],
    correctAnswer: '314',
    explanation: 'We need a number of form 35k+18 = 45m+24. LCM(35,45) = 315. Using Chinese remainder theorem, we find 314 is the answer.',
    wrongAnswerExplanations: {
      '143': 'When 143 is divided by 35, the remainder is 38, not 18.',
      '269': 'When 269 is divided by 45, the remainder is 44, not 24.',
      '315': '315 gives remainders 0 for both divisors, not 18 and 24.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch1_t2_qm9',
    type: 'mcq',
    question: 'How many numbers less than 200 are divisible by both 3 and 5?',
    options: [
      '11',
      '12',
      '13',
      '14'
    ],
    correctAnswer: '13',
    explanation: 'Numbers divisible by both 3 and 5 are divisible by 15. Count of multiples of 15 less than 200 = ⌊199/15⌋ = 13.',
    wrongAnswerExplanations: {
      '11': 'This is incorrect. There are more multiples of 15 under 200.',
      '12': 'This is incorrect. There are more multiples of 15 under 200.',
      '14': 'This is incorrect. There are fewer multiples of 15 under 200.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch1_t2_qm10',
    type: 'mcq',
    question: 'If the LCM of two numbers is 1080 and their HCF is 30, what could be one of the numbers if the other is 120?',
    options: [
      '240',
      '270',
      '300',
      '360'
    ],
    correctAnswer: '270',
    explanation: 'Using HCF × LCM = Product of numbers: 30 × 1080 = 120 × Other. Other = (30 × 1080)/120 = 32400/120 = 270.',
    wrongAnswerExplanations: {
      '240': 'If the numbers are 120 and 240, their LCM would be 240, not 1080.',
      '300': 'If the numbers are 120 and 300, their HCF would be 60, not 30.',
      '360': 'If the numbers are 120 and 360, their HCF would be 120, not 30.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch1_t2_qm11',
    type: 'mcq',
    question: 'The prime factorization of a number N is 2³ × 3² × 5. How many factors does N have?',
    options: [
      '12',
      '20',
      '24',
      '30'
    ],
    correctAnswer: '24',
    explanation: 'For prime factorization 2³ × 3² × 5, the number of factors is (3+1) × (2+1) × (1+1) = 4 × 3 × 2 = 24.',
    wrongAnswerExplanations: {
      '12': 'This ignores the formula (power+1) for each prime factor.',
      '20': 'This is not the correct calculation using the factors formula.',
      '30': 'This is not the correct calculation using the factors formula.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch1_t2_qm12',
    type: 'mcq',
    question: 'What is the largest power of 5 that divides 75!?',
    options: [
      '18',
      '19',
      '20',
      '21'
    ],
    correctAnswer: '18',
    explanation: 'Highest power of 5 in 75! = [75/5] + [75/25] + [75/125] = 15 + 3 + 0 = 18.',
    wrongAnswerExplanations: {
      '19': 'This is incorrect using the formula for finding the highest power of a prime in a factorial.',
      '20': 'This is incorrect using the formula for finding the highest power of a prime in a factorial.',
      '21': 'This is incorrect using the formula for finding the highest power of a prime in a factorial.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch1_t2_qm13',
    type: 'mcq',
    question: 'If p is a prime number, what is the number of factors of p⁴?',
    options: [
      '4',
      '5',
      '8',
      '16'
    ],
    correctAnswer: '5',
    explanation: 'The factors of p⁴ are 1, p, p², p³, p⁴. Count = 5 factors. Using formula: number of factors = power + 1 = 4 + 1 = 5.',
    wrongAnswerExplanations: {
      '4': 'This is the power of p, not the number of factors.',
      '8': 'This would be the number of factors for p⁷, not p⁴.',
      '16': 'This is not the correct number of factors for p⁴.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch1_t2_qm14',
    type: 'mcq',
    question: 'How many natural numbers less than 100 are divisible by 2 or 5?',
    options: [
      '50',
      '60',
      '70',
      '80'
    ],
    correctAnswer: '70',
    explanation: 'Numbers divisible by 2 = ⌊99/2⌋ = 49. Numbers divisible by 5 = ⌊99/5⌋ = 19. Numbers divisible by both = ⌊99/10⌋ = 9. Total = 49 + 19 - 9 = 70.',
    wrongAnswerExplanations: {
      '50': 'This counts only numbers divisible by 2 (approximately).',
      '60': 'This is an incorrect calculation using inclusion-exclusion principle.',
      '80': 'This is an incorrect calculation using inclusion-exclusion principle.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch1_t2_qm15',
    type: 'mcq',
    question: 'What is the smallest positive integer n such that 1800n is a perfect cube?',
    options: [
      '2',
      '6',
      '10',
      '15'
    ],
    correctAnswer: '10',
    explanation: '1800 = 2³ × 3² × 5². For perfect cube, we need powers divisible by 3. So n must make 3² into 3³ and 5² into 5³, hence n = 3 × 5 = 15.',
    wrongAnswerExplanations: {
      '2': 'Multiplying by 2 does not make 1800 a perfect cube.',
      '6': 'Multiplying by 6 does not make 1800 a perfect cube.',
      '10': 'Multiplying by 10 does not make 1800 a perfect cube.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch1_t2_qm16',
    type: 'mcq',
    question: 'What is the value of HCF (2^4 × 3^5, 2^3 × 3^2)?',
    options: [
      '2³ × 3²',
      '2⁴ × 3²',
      '2³ × 3⁵',
      '2⁴ × 3⁵'
    ],
    correctAnswer: '2³ × 3²',
    explanation: 'HCF takes minimum power of each prime: min(4,3)=3 for prime 2, min(5,2)=2 for prime 3. So HCF = 2³ × 3² = 8 × 9 = 72.',
    wrongAnswerExplanations: {
      '2⁴ × 3²': 'This incorrectly takes the maximum power of 2.',
      '2³ × 3⁵': 'This incorrectly takes the maximum power of 3.',
      '2⁴ × 3⁵': 'This incorrectly takes the maximum power of both primes.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch1_t2_qm17',
    type: 'mcq',
    question: 'If a and b are positive integers such that a = 2³ × 3² × 5 and b = 2² × 3³ × 7, then LCM(a,b) = ?',
    options: [
      '2³ × 3³ × 5 × 7',
      '2⁵ × 3⁵ × 5 × 7',
      '2³ × 3³ × 5',
      '2³ × 3³ × 7'
    ],
    correctAnswer: '2³ × 3³ × 5 × 7',
    explanation: 'LCM takes maximum power of each prime: max(3,2)=3 for 2, max(2,3)=3 for 3, and includes 5 and 7. So LCM = 2³ × 3³ × 5 × 7.',
    wrongAnswerExplanations: {
      '2⁵ × 3⁵ × 5 × 7': 'This incorrectly adds the powers instead of taking the maximum.',
      '2³ × 3³ × 5': 'This is missing the factor 7 which must be in the LCM.',
      '2³ × 3³ × 7': 'This is missing the factor 5 which must be in the LCM.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch1_t2_qm18',
    type: 'mcq',
    question: 'What is the largest number that divides 3991 and 4991 leaving the same remainder in each case?',
    options: [
      '500',
      '1000',
      '3991',
      '4991'
    ],
    correctAnswer: '1000',
    explanation: 'We need the highest common factor of (4991-3991) = 1000. So the largest such number is 1000.',
    wrongAnswerExplanations: {
      '500': 'This is not the largest such number; 1000 also works.',
      '3991': 'This exceeds the difference between the numbers.',
      '4991': 'This exceeds the difference between the numbers.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch1_t2_qm19',
    type: 'mcq',
    question: 'If a number is divisible by 6 and 9, what is the smallest number it must be divisible by?',
    options: [
      '15',
      '18',
      '36',
      '54'
    ],
    correctAnswer: '18',
    explanation: 'If a number is divisible by 6 and 9, it`s divisible by their LCM. LCM(6,9) = LCM(2×3, 3²) = 2×3² = 18.',
    wrongAnswerExplanations: {
      '15': '15 is not divisible by either 6 or 9.',
      '36': 'This is 2 × 18, but 18 is the smallest such number.',
      '54': 'This is 3 × 18, but 18 is the smallest such number.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch1_t2_qm20',
    type: 'mcq',
    question: 'How many numbers between 1 and 500 are divisible by 3 or 5 but not by 15?',
    options: [
      '233',
      '234',
      '265',
      '266'
    ],
    correctAnswer: '233',
    explanation: 'Numbers divisible by 3 = ⌊500/3⌋ = 166, by 5 = ⌊500/5⌋ = 100, by 15 = ⌊500/15⌋ = 33. Answer = 166 + 100 - 33 = 233.',
    wrongAnswerExplanations: {
      '234': 'This is an incorrect calculation using inclusion-exclusion principle.',
      '265': 'This counts all numbers divisible by 3 or 5, including those divisible by 15.',
      '266': 'This is an incorrect calculation using inclusion-exclusion principle.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  }
];
