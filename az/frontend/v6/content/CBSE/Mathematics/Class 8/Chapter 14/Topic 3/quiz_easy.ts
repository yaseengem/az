import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch14_t3_qe1',
        type: "mcq",
        question: "Which property states that a + b = b + a?",
        options: ["Commutative property", "Associative property", "Distributive property", "Identity property"],
        correctAnswer: "Commutative property",
        explanation: "The commutative property states that changing the order of numbers in addition or multiplication doesn't affect the result. For example, 5 + 3 = 3 + 5. 🔄",
        wrongAnswerExplanations: {
            "Associative property": "Associative property deals with grouping of numbers, like (a + b) + c = a + (b + c).",
            "Distributive property": "Distributive property shows how multiplication distributes over addition, like a(b + c) = ab + ac.",
            "Identity property": "Identity property involves adding 0 or multiplying by 1."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch14_t3_qe2',
        type: "mcq",
        question: "What is the additive identity for any number?",
        options: ["1", "0", "-1", "10"],
        correctAnswer: "0",
        explanation: "Zero is the additive identity because adding 0 to any number gives the same number. For example, 5 + 0 = 5. 🎯",
        wrongAnswerExplanations: {
            "1": "1 is the multiplicative identity, not the additive identity.",
            "-1": "Adding -1 changes the value of a number.",
            "10": "Adding 10 changes the value of a number."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch14_t3_qe3',
        type: "mcq",
        question: "What is the multiplicative identity for any number?",
        options: ["0", "2", "-1", "1"],
        correctAnswer: "1",
        explanation: "One is the multiplicative identity because multiplying any number by 1 gives the same number. For example, 7 × 1 = 7. 🎯",
        wrongAnswerExplanations: {
            "0": "Multiplying by 0 gives 0, not the original number.",
            "2": "Multiplying by 2 doubles the number.",
            "-1": "Multiplying by -1 gives the opposite of the number."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch14_t3_qe4',
        type: "mcq",
        question: "Which property is shown by (2 × 3) × 4 = 2 × (3 × 4)?",
        options: ["Commutative property", "Associative property", "Distributive property", "Identity property"],
        correctAnswer: "Associative property",
        explanation: "The associative property states that the grouping of numbers in multiplication or addition doesn't affect the result. Here, both expressions equal 24. 🔄",
        wrongAnswerExplanations: {
            "Commutative property": "Commutative property deals with order, not grouping.",
            "Distributive property": "Distributive property involves both multiplication and addition.",
            "Identity property": "Identity property involves 0 or 1."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch14_t3_qe5',
        type: "mcq",
        question: "Which property is shown by 3 × (4 + 5) = (3 × 4) + (3 × 5)?",
        options: ["Commutative property", "Associative property", "Distributive property", "Identity property"],
        correctAnswer: "Distributive property",
        explanation: "The distributive property shows how multiplication distributes over addition. Here, both expressions equal 27. 📊",
        wrongAnswerExplanations: {
            "Commutative property": "Commutative property deals with order of operations.",
            "Associative property": "Associative property deals with grouping of numbers.",
            "Identity property": "Identity property involves 0 or 1."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch14_t3_qe6',
        type: "mcq",
        question: "What is the additive inverse of 7?",
        options: ["1/7", "-7", "7", "0"],
        correctAnswer: "-7",
        explanation: "The additive inverse of a number, when added to the number, gives zero. 7 + (-7) = 0, so -7 is the additive inverse of 7. ⚖️",
        wrongAnswerExplanations: {
            "1/7": "This is the multiplicative inverse (reciprocal) of 7.",
            "7": "Adding 7 to 7 gives 14, not 0.",
            "0": "Zero is its own additive inverse."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch14_t3_qe7',
        type: "mcq",
        question: "Which property shows that 5 × 2 = 2 × 5?",
        options: ["Commutative property", "Associative property", "Distributive property", "Identity property"],
        correctAnswer: "Commutative property",
        explanation: "The commutative property states that the order of numbers in multiplication doesn't affect the result. Both expressions equal 10. 🔄",
        wrongAnswerExplanations: {
            "Associative property": "Associative property deals with grouping of numbers.",
            "Distributive property": "Distributive property involves both multiplication and addition.",
            "Identity property": "Identity property involves 0 or 1."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch14_t3_qe8',
        type: "mcq",
        question: "What happens when you multiply any number by zero?",
        options: ["You get the same number", "You get zero", "You get one", "You get the opposite number"],
        correctAnswer: "You get zero",
        explanation: "Zero is the multiplicative annihilator - multiplying any number by 0 gives 0. For example, 5 × 0 = 0. 🎯",
        wrongAnswerExplanations: {
            "You get the same number": "This happens when multiplying by 1, not 0.",
            "You get one": "This never happens when multiplying by 0.",
            "You get the opposite number": "This happens when multiplying by -1, not 0."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch14_t3_qe9',
        type: "mcq",
        question: "Which property is shown by (-3) × (-4) = 12?",
        options: ["Product of negatives is positive", "Commutative property", "Associative property", "Distributive property"],
        correctAnswer: "Product of negatives is positive",
        explanation: "When two negative numbers are multiplied, the result is positive. This is a fundamental property of negative numbers. ➕",
        wrongAnswerExplanations: {
            "Commutative property": "This deals with order of operations.",
            "Associative property": "This deals with grouping of numbers.",
            "Distributive property": "This involves both multiplication and addition."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch14_t3_qe10',
        type: "mcq",
        question: "What is the multiplicative inverse of 4?",
        options: ["1/4", "-4", "4", "0"],
        correctAnswer: "1/4",
        explanation: "The multiplicative inverse (reciprocal) of a number, when multiplied by the number, gives 1. 4 × 1/4 = 1. ⚖️",
        wrongAnswerExplanations: {
            "-4": "This is the additive inverse of 4.",
            "4": "Multiplying 4 by 4 gives 16, not 1.",
            "0": "Zero has no multiplicative inverse."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch14_t3_qe11',
        type: "mcq",
        question: "Which property is shown by 5 × (3 - 2) = (5 × 3) - (5 × 2)?",
        options: ["Commutative property", "Associative property", "Distributive property", "Identity property"],
        correctAnswer: "Distributive property",
        explanation: "The distributive property shows how multiplication distributes over subtraction. Both expressions equal 5. 📊",
        wrongAnswerExplanations: {
            "Commutative property": "This deals with order of operations.",
            "Associative property": "This deals with grouping of numbers.",
            "Identity property": "This involves 0 or 1."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch14_t3_qe12',
        type: "mcq",
        question: "What is special about dividing a number by 1?",
        options: ["The result is 0", "The result is 1", "The result is the same number", "The result is undefined"],
        correctAnswer: "The result is the same number",
        explanation: "Dividing any number by 1 gives the same number because 1 is the multiplicative identity. For example, 8 ÷ 1 = 8. 🎯",
        wrongAnswerExplanations: {
            "The result is 0": "This happens when multiplying by 0.",
            "The result is 1": "This happens when dividing a number by itself.",
            "The result is undefined": "This happens when dividing by 0."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch14_t3_qe13',
        type: "mcq",
        question: "Which property shows that (8 + 2) + 3 = 8 + (2 + 3)?",
        options: ["Commutative property", "Associative property", "Distributive property", "Identity property"],
        correctAnswer: "Associative property",
        explanation: "The associative property states that the grouping of numbers in addition doesn't affect the result. Both expressions equal 13. 🔄",
        wrongAnswerExplanations: {
            "Commutative property": "This deals with order of operations.",
            "Distributive property": "This involves both multiplication and addition.",
            "Identity property": "This involves 0 or 1."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch14_t3_qe14',
        type: "mcq",
        question: "What happens when you add a number and its additive inverse?",
        options: ["You get 1", "You get 0", "You get the number", "You get the opposite number"],
        correctAnswer: "You get 0",
        explanation: "Adding a number and its additive inverse always gives zero. For example, 6 + (-6) = 0. ⚖️",
        wrongAnswerExplanations: {
            "You get 1": "This happens with multiplicative inverses.",
            "You get the number": "This happens when adding 0.",
            "You get the opposite number": "This happens when multiplying by -1."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch14_t3_qe15',
        type: "mcq",
        question: "What is the result of multiplying a positive number by a negative number?",
        options: ["Always positive", "Always negative", "Always zero", "Could be either positive or negative"],
        correctAnswer: "Always negative",
        explanation: "When a positive number is multiplied by a negative number, the result is always negative. For example, 3 × (-4) = -12. ➖",
        wrongAnswerExplanations: {
            "Always positive": "This happens when multiplying two negative numbers.",
            "Always zero": "This only happens when multiplying by 0.",
            "Could be either positive or negative": "The result is always negative."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch14_t3_qe16',
        type: "mcq",
        question: "Which property is shown by 4 × (1/4) = 1?",
        options: ["Multiplicative inverse", "Additive inverse", "Identity property", "Distributive property"],
        correctAnswer: "Multiplicative inverse",
        explanation: "When a number is multiplied by its multiplicative inverse (reciprocal), the result is 1. ⚖️",
        wrongAnswerExplanations: {
            "Additive inverse": "Additive inverses sum to 0, not multiply to 1.",
            "Identity property": "Identity property involves multiplying by 1.",
            "Distributive property": "This involves both multiplication and addition."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch14_t3_qe17',
        type: "mcq",
        question: "What is special about adding zero to any number?",
        options: ["The result is 1", "The result is 0", "The result is the same number", "The result is undefined"],
        correctAnswer: "The result is the same number",
        explanation: "Adding zero to any number gives the same number because 0 is the additive identity. For example, 5 + 0 = 5. 🎯",
        wrongAnswerExplanations: {
            "The result is 1": "This never happens when adding 0.",
            "The result is 0": "This happens when adding additive inverses.",
            "The result is undefined": "This happens when dividing by 0."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch14_t3_qe18',
        type: "mcq",
        question: "What is the result of multiplying three negative numbers?",
        options: ["Always positive", "Always negative", "Always zero", "Depends on the numbers"],
        correctAnswer: "Always negative",
        explanation: "When an odd number of negative numbers are multiplied, the result is always negative. For example, (-2) × (-3) × (-4) = -24. ➖",
        wrongAnswerExplanations: {
            "Always positive": "This happens with even number of negative numbers.",
            "Always zero": "This only happens when multiplying by 0.",
            "Depends on the numbers": "The result is always negative with three negative numbers."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch14_t3_qe19',
        type: "mcq",
        question: "Which property shows that 6 × (2 + 3) = 6 × 2 + 6 × 3?",
        options: ["Commutative property", "Associative property", "Distributive property", "Identity property"],
        correctAnswer: "Distributive property",
        explanation: "The distributive property shows how multiplication distributes over addition. Both expressions equal 30. 📊",
        wrongAnswerExplanations: {
            "Commutative property": "This deals with order of operations.",
            "Associative property": "This deals with grouping of numbers.",
            "Identity property": "This involves 0 or 1."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch14_t3_qe20',
        type: "mcq",
        question: "What is the result of multiplying four negative numbers?",
        options: ["Always positive", "Always negative", "Always zero", "Depends on the numbers"],
        correctAnswer: "Always positive",
        explanation: "When an even number of negative numbers are multiplied, the result is always positive. For example, (-1) × (-2) × (-3) × (-4) = 24. ➕",
        wrongAnswerExplanations: {
            "Always negative": "This happens with odd number of negative numbers.",
            "Always zero": "This only happens when multiplying by 0.",
            "Depends on the numbers": "The result is always positive with four negative numbers."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 