import { QuizContent } from '../../../../../types';

export const quiz_easy: QuizContent = {
  id: 'cl8_ch8_t3_qe',
  title: 'Standard Algebraic Identities - Easy Quiz',
  type: 'mcq',
  questions: [
    {
      id: 'cl8_ch8_t3_qe1',
      question: "Which algebraic identity represents the square of the sum of two terms?",
      explanation: "The identity (a+b)² = a² + 2ab + b² represents the square of the sum of two terms.",
      options: [
        { id: 'cl8_ch8_t3_qe1_opt1', text: '(a+b)² = a² + 2ab + b²', isCorrect: true },
        { id: 'cl8_ch8_t3_qe1_opt2', text: '(a-b)² = a² - 2ab + b²', isCorrect: false },
        { id: 'cl8_ch8_t3_qe1_opt3', text: '(a+b)(a-b) = a² - b²', isCorrect: false },
        { id: 'cl8_ch8_t3_qe1_opt4', text: '(a+b)² = a² + b²', isCorrect: false }
      ]
    },
    {
      id: 'cl8_ch8_t3_qe2',
      question: "The value of (7+3)² using the identity (a+b)² = a² + 2ab + b² is:",
      explanation: "Using identity: (7+3)² = 7² + 2(7)(3) + 3² = 49 + 42 + 9 = 100.",
      options: [
        { id: 'cl8_ch8_t3_qe2_opt1', text: '100', isCorrect: true },
        { id: 'cl8_ch8_t3_qe2_opt2', text: '70', isCorrect: false },
        { id: 'cl8_ch8_t3_qe2_opt3', text: '58', isCorrect: false },
        { id: 'cl8_ch8_t3_qe2_opt4', text: '90', isCorrect: false }
      ]
    },
    {
      id: 'cl8_ch8_t3_qe3',
      question: "Which identity is used to calculate (x+5)(x-5)?",
      explanation: "The identity a²-b² = (a+b)(a-b) can be used where a=x and b=5.",
      options: [
        { id: 'cl8_ch8_t3_qe3_opt1', text: 'a² - b² = (a+b)(a-b)', isCorrect: true },
        { id: 'cl8_ch8_t3_qe3_opt2', text: 'a² + 2ab + b² = (a+b)²', isCorrect: false },
        { id: 'cl8_ch8_t3_qe3_opt3', text: 'a² - 2ab + b² = (a-b)²', isCorrect: false },
        { id: 'cl8_ch8_t3_qe3_opt4', text: '(a+b)³ = a³ + 3a²b + 3ab² + b³', isCorrect: false }
      ]
    },
    {
      id: 'cl8_ch8_t3_qe4',
      question: "Using identities, (5-2)² equals:",
      explanation: "Using identity (a-b)² = a² - 2ab + b²: (5-2)² = 5² - 2(5)(2) + 2² = 25 - 20 + 4 = 9.",
      options: [
        { id: 'cl8_ch8_t3_qe4_opt1', text: '9', isCorrect: true },
        { id: 'cl8_ch8_t3_qe4_opt2', text: '7', isCorrect: false },
        { id: 'cl8_ch8_t3_qe4_opt3', text: '3', isCorrect: false },
        { id: 'cl8_ch8_t3_qe4_opt4', text: '1', isCorrect: false }
      ]
    },
    {
      id: 'cl8_ch8_t3_qe5',
      question: "The value of (x+y)(x+y) is equal to:",
      explanation: "Since (x+y)(x+y) = (x+y)², this equals x² + 2xy + y² by the identity (a+b)².",
      options: [
        { id: 'cl8_ch8_t3_qe5_opt1', text: 'x² + 2xy + y²', isCorrect: true },
        { id: 'cl8_ch8_t3_qe5_opt2', text: 'x² - y²', isCorrect: false },
        { id: 'cl8_ch8_t3_qe5_opt3', text: 'x² + y²', isCorrect: false },
        { id: 'cl8_ch8_t3_qe5_opt4', text: 'x² - 2xy + y²', isCorrect: false }
      ]
    },
    {
      id: 'cl8_ch8_t3_qe6',
      question: "If a = 3 and b = 2, what is the value of a² - b²?",
      explanation: "a² - b² = 3² - 2² = 9 - 4 = 5",
      options: [
        { id: 'cl8_ch8_t3_qe6_opt1', text: '5', isCorrect: true },
        { id: 'cl8_ch8_t3_qe6_opt2', text: '1', isCorrect: false },
        { id: 'cl8_ch8_t3_qe6_opt3', text: '13', isCorrect: false },
        { id: 'cl8_ch8_t3_qe6_opt4', text: '6', isCorrect: false }
      ]
    },
    {
      id: 'cl8_ch8_t3_qe7',
      question: "The algebraic identity for (a-b)² is:",
      explanation: "The identity for (a-b)² is a² - 2ab + b².",
      options: [
        { id: 'cl8_ch8_t3_qe7_opt1', text: 'a² - 2ab + b²', isCorrect: true },
        { id: 'cl8_ch8_t3_qe7_opt2', text: 'a² + 2ab + b²', isCorrect: false },
        { id: 'cl8_ch8_t3_qe7_opt3', text: 'a² - b²', isCorrect: false },
        { id: 'cl8_ch8_t3_qe7_opt4', text: 'a² + b²', isCorrect: false }
      ]
    },
    {
      id: 'cl8_ch8_t3_qe8',
      question: "Which of these is a standard algebraic identity?",
      explanation: "(x+y)(x-y) = x² - y² is one of the standard algebraic identities.",
      options: [
        { id: 'cl8_ch8_t3_qe8_opt1', text: '(x+y)(x-y) = x² - y²', isCorrect: true },
        { id: 'cl8_ch8_t3_qe8_opt2', text: '(x+y)² = x² - y²', isCorrect: false },
        { id: 'cl8_ch8_t3_qe8_opt3', text: '(x-y)² = x² + y²', isCorrect: false },
        { id: 'cl8_ch8_t3_qe8_opt4', text: 'x² - y² = (x-y)²', isCorrect: false }
      ]
    },
    {
      id: 'cl8_ch8_t3_qe9',
      question: "Expand (p+3)² using the appropriate identity:",
      explanation: "Using (a+b)² = a² + 2ab + b²: (p+3)² = p² + 2(p)(3) + 3² = p² + 6p + 9.",
      options: [
        { id: 'cl8_ch8_t3_qe9_opt1', text: 'p² + 6p + 9', isCorrect: true },
        { id: 'cl8_ch8_t3_qe9_opt2', text: 'p² - 6p + 9', isCorrect: false },
        { id: 'cl8_ch8_t3_qe9_opt3', text: 'p² + 9', isCorrect: false },
        { id: 'cl8_ch8_t3_qe9_opt4', text: 'p² - 9', isCorrect: false }
      ]
    },
    {
      id: 'cl8_ch8_t3_qe10',
      question: "What is (x-4)² equal to?",
      explanation: "Using (a-b)² = a² - 2ab + b²: (x-4)² = x² - 2(x)(4) + 4² = x² - 8x + 16.",
      options: [
        { id: 'cl8_ch8_t3_qe10_opt1', text: 'x² - 8x + 16', isCorrect: true },
        { id: 'cl8_ch8_t3_qe10_opt2', text: 'x² + 8x + 16', isCorrect: false },
        { id: 'cl8_ch8_t3_qe10_opt3', text: 'x² - 16', isCorrect: false },
        { id: 'cl8_ch8_t3_qe10_opt4', text: 'x² - 4x + 16', isCorrect: false }
      ]
    },
    {
      id: 'cl8_ch8_t3_qe11',
      question: "Using algebraic identities, find the value of 103 × 97.",
      explanation: "Using (a+b)(a-b) = a² - b²: 103 × 97 = (100+3)(100-3) = 100² - 3² = 10000 - 9 = 9991.",
      options: [
        { id: 'cl8_ch8_t3_qe11_opt1', text: '9991', isCorrect: true },
        { id: 'cl8_ch8_t3_qe11_opt2', text: '10000', isCorrect: false },
        { id: 'cl8_ch8_t3_qe11_opt3', text: '9981', isCorrect: false },
        { id: 'cl8_ch8_t3_qe11_opt4', text: '10291', isCorrect: false }
      ]
    },
    {
      id: 'cl8_ch8_t3_qe12',
      question: "Which identity helps you find (x+y)³?",
      explanation: "The identity (a+b)³ = a³ + 3a²b + 3ab² + b³ helps calculate (x+y)³.",
      options: [
        { id: 'cl8_ch8_t3_qe12_opt1', text: '(a+b)³ = a³ + 3a²b + 3ab² + b³', isCorrect: true },
        { id: 'cl8_ch8_t3_qe12_opt2', text: '(a+b)³ = a³ + b³', isCorrect: false },
        { id: 'cl8_ch8_t3_qe12_opt3', text: '(a+b)³ = a³ + 3a²b - 3ab² + b³', isCorrect: false },
        { id: 'cl8_ch8_t3_qe12_opt4', text: '(a+b)³ = (a+b)(a+b)²', isCorrect: false }
      ]
    },
    {
      id: 'cl8_ch8_t3_qe13',
      question: "The product of (7+x)(7-x) equals:",
      explanation: "Using (a+b)(a-b) = a² - b²: (7+x)(7-x) = 7² - x² = 49 - x².",
      options: [
        { id: 'cl8_ch8_t3_qe13_opt1', text: '49 - x²', isCorrect: true },
        { id: 'cl8_ch8_t3_qe13_opt2', text: '49 + x²', isCorrect: false },
        { id: 'cl8_ch8_t3_qe13_opt3', text: '14x', isCorrect: false },
        { id: 'cl8_ch8_t3_qe13_opt4', text: '49 - 14x', isCorrect: false }
      ]
    },
    {
      id: 'cl8_ch8_t3_qe14',
      question: "Expand (2a-3b)² using the appropriate identity.",
      explanation: "Using (a-b)² = a² - 2ab + b²: (2a-3b)² = (2a)² - 2(2a)(3b) + (3b)² = 4a² - 12ab + 9b².",
      options: [
        { id: 'cl8_ch8_t3_qe14_opt1', text: '4a² - 12ab + 9b²', isCorrect: true },
        { id: 'cl8_ch8_t3_qe14_opt2', text: '4a² + 12ab + 9b²', isCorrect: false },
        { id: 'cl8_ch8_t3_qe14_opt3', text: '4a² - 9b²', isCorrect: false },
        { id: 'cl8_ch8_t3_qe14_opt4', text: '4a² - 6ab + 9b²', isCorrect: false }
      ]
    },
    {
      id: 'cl8_ch8_t3_qe15',
      question: "The algebraic identity for (a+b)³ is:",
      explanation: "The algebraic identity for (a+b)³ is a³ + 3a²b + 3ab² + b³.",
      options: [
        { id: 'cl8_ch8_t3_qe15_opt1', text: 'a³ + 3a²b + 3ab² + b³', isCorrect: true },
        { id: 'cl8_ch8_t3_qe15_opt2', text: 'a³ + b³', isCorrect: false },
        { id: 'cl8_ch8_t3_qe15_opt3', text: 'a³ + 3a²b - 3ab² + b³', isCorrect: false },
        { id: 'cl8_ch8_t3_qe15_opt4', text: '(a+b)(a² + ab + b²)', isCorrect: false }
      ]
    },
    {
      id: 'cl8_ch8_t3_qe16',
      question: "Which of the following can be evaluated using (a+b)² = a² + 2ab + b²?",
      explanation: "(20+5)² can be evaluated using the identity (a+b)² = a² + 2ab + b².",
      options: [
        { id: 'cl8_ch8_t3_qe16_opt1', text: '(20+5)²', isCorrect: true },
        { id: 'cl8_ch8_t3_qe16_opt2', text: '(20-5)×(20+5)', isCorrect: false },
        { id: 'cl8_ch8_t3_qe16_opt3', text: '(20)(5)', isCorrect: false },
        { id: 'cl8_ch8_t3_qe16_opt4', text: '(20-5)²', isCorrect: false }
      ]
    },
    {
      id: 'cl8_ch8_t3_qe17',
      question: "The identity (a+b)(a-b) helps in finding:",
      explanation: "The identity (a+b)(a-b) = a² - b² helps find the difference of squares.",
      options: [
        { id: 'cl8_ch8_t3_qe17_opt1', text: 'Difference of squares', isCorrect: true },
        { id: 'cl8_ch8_t3_qe17_opt2', text: 'Square of a sum', isCorrect: false },
        { id: 'cl8_ch8_t3_qe17_opt3', text: 'Square of a difference', isCorrect: false },
        { id: 'cl8_ch8_t3_qe17_opt4', text: 'Sum of cubes', isCorrect: false }
      ]
    },
    {
      id: 'cl8_ch8_t3_qe18',
      question: "What is (a-b)³ equal to?",
      explanation: "(a-b)³ = a³ - 3a²b + 3ab² - b³ using the cube of difference identity.",
      options: [
        { id: 'cl8_ch8_t3_qe18_opt1', text: 'a³ - 3a²b + 3ab² - b³', isCorrect: true },
        { id: 'cl8_ch8_t3_qe18_opt2', text: 'a³ - b³', isCorrect: false },
        { id: 'cl8_ch8_t3_qe18_opt3', text: 'a³ + 3a²b + 3ab² + b³', isCorrect: false },
        { id: 'cl8_ch8_t3_qe18_opt4', text: '(a-b)(a² - 2ab + b²)', isCorrect: false }
      ]
    },
    {
      id: 'cl8_ch8_t3_qe19',
      question: "Which identity would help simplify 98²?",
      explanation: "Using (a-b)² = a² - 2ab + b²: 98² = (100-2)² = 100² - 2(100)(2) + 2² = 9604.",
      options: [
        { id: 'cl8_ch8_t3_qe19_opt1', text: '(a-b)² = a² - 2ab + b²', isCorrect: true },
        { id: 'cl8_ch8_t3_qe19_opt2', text: '(a+b)² = a² + 2ab + b²', isCorrect: false },
        { id: 'cl8_ch8_t3_qe19_opt3', text: '(a+b)(a-b) = a² - b²', isCorrect: false },
        { id: 'cl8_ch8_t3_qe19_opt4', text: '(a+b)³ = a³ + 3a²b + 3ab² + b³', isCorrect: false }
      ]
    },
    {
      id: 'cl8_ch8_t3_qe20',
      question: "What is the factorized form of x² - y²?",
      explanation: "x² - y² = (x+y)(x-y) using the difference of squares identity.",
      options: [
        { id: 'cl8_ch8_t3_qe20_opt1', text: '(x+y)(x-y)', isCorrect: true },
        { id: 'cl8_ch8_t3_qe20_opt2', text: '(x-y)²', isCorrect: false },
        { id: 'cl8_ch8_t3_qe20_opt3', text: '(x+y)²', isCorrect: false },
        { id: 'cl8_ch8_t3_qe20_opt4', text: 'x² - 2xy + y²', isCorrect: false }
      ]
    }
  ]
};
