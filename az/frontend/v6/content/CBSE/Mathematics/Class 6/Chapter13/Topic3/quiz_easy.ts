import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch13_t3_q1',
        type: 'mcq',
        question: 'What is the order of rotation for a square?',
        options: [
            '4',
            '2',
            '3',
            '1'
        ],
        correctAnswer: '4',
        explanation: 'A square matches its original position 4 times in a full 360-degree turn.',
        wrongAnswerExplanations: {
            '2': 'A square matches more than 2 times in a full turn.',
            '3': 'A square matches more than 3 times in a full turn.',
            '1': 'A square has rotational symmetry, so its order is more than 1.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch13_t3_q2',
        type: 'mcq',
        question: 'Which of these letters has rotational symmetry?',
        options: [
            'N',
            'A',
            'B',
            'C'
        ],
        correctAnswer: 'N',
        explanation: 'The letter N looks the same when rotated 180 degrees.',
        wrongAnswerExplanations: {
            'A': 'The letter A does not have rotational symmetry.',
            'B': 'The letter B does not have rotational symmetry.',
            'C': 'The letter C does not have rotational symmetry.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch13_t3_q3',
        type: 'mcq',
        question: 'What is the angle of rotation for a shape with order 3?',
        options: [
            '120 degrees',
            '90 degrees',
            '180 degrees',
            '60 degrees'
        ],
        correctAnswer: '120 degrees',
        explanation: 'Angle of rotation = 360° ÷ order = 360° ÷ 3 = 120°',
        wrongAnswerExplanations: {
            '90 degrees': 'This would be for order 4.',
            '180 degrees': 'This would be for order 2.',
            '60 degrees': 'This would be for order 6.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch13_t3_q4',
        type: 'mcq',
        question: 'Which shape has infinite order of rotation?',
        options: [
            'Circle',
            'Square',
            'Triangle',
            'Rectangle'
        ],
        correctAnswer: 'Circle',
        explanation: 'A circle looks the same at any angle of rotation.',
        wrongAnswerExplanations: {
            'Square': 'A square has order 4.',
            'Triangle': 'A triangle has finite order.',
            'Rectangle': 'A rectangle has order 2.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch13_t3_q5',
        type: 'mcq',
        question: 'What is the order of rotation for an equilateral triangle?',
        options: [
            '3',
            '2',
            '4',
            '1'
        ],
        correctAnswer: '3',
        explanation: 'An equilateral triangle matches its original position 3 times in a full turn.',
        wrongAnswerExplanations: {
            '2': 'An equilateral triangle matches more than 2 times.',
            '4': 'An equilateral triangle matches fewer than 4 times.',
            '1': 'An equilateral triangle has rotational symmetry.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch13_t3_q6',
        type: 'mcq',
        question: 'Which of these letters has rotational symmetry?',
        options: [
            'S',
            'D',
            'E',
            'F'
        ],
        correctAnswer: 'S',
        explanation: 'The letter S looks the same when rotated 180 degrees.',
        wrongAnswerExplanations: {
            'D': 'The letter D does not have rotational symmetry.',
            'E': 'The letter E does not have rotational symmetry.',
            'F': 'The letter F does not have rotational symmetry.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch13_t3_q7',
        type: 'mcq',
        question: 'What is the angle of rotation for a shape with order 2?',
        options: [
            '180 degrees',
            '90 degrees',
            '120 degrees',
            '60 degrees'
        ],
        correctAnswer: '180 degrees',
        explanation: 'Angle of rotation = 360° ÷ order = 360° ÷ 2 = 180°',
        wrongAnswerExplanations: {
            '90 degrees': 'This would be for order 4.',
            '120 degrees': 'This would be for order 3.',
            '60 degrees': 'This would be for order 6.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch13_t3_q8',
        type: 'mcq',
        question: 'Which shape has order 6?',
        options: [
            'Regular Hexagon',
            'Square',
            'Triangle',
            'Rectangle'
        ],
        correctAnswer: 'Regular Hexagon',
        explanation: 'A regular hexagon matches its original position 6 times in a full turn.',
        wrongAnswerExplanations: {
            'Square': 'A square has order 4.',
            'Triangle': 'A triangle has order 3.',
            'Rectangle': 'A rectangle has order 2.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch13_t3_q9',
        type: 'mcq',
        question: 'What is the order of rotation for a regular pentagon?',
        options: [
            '5',
            '3',
            '4',
            '2'
        ],
        correctAnswer: '5',
        explanation: 'A regular pentagon matches its original position 5 times in a full turn.',
        wrongAnswerExplanations: {
            '3': 'A regular pentagon matches more than 3 times.',
            '4': 'A regular pentagon matches more than 4 times.',
            '2': 'A regular pentagon matches more than 2 times.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch13_t3_q10',
        type: 'mcq',
        question: 'Which of these letters has rotational symmetry?',
        options: [
            'Z',
            'H',
            'I',
            'J'
        ],
        correctAnswer: 'Z',
        explanation: 'The letter Z looks the same when rotated 180 degrees.',
        wrongAnswerExplanations: {
            'H': 'The letter H does not have rotational symmetry.',
            'I': 'The letter I does not have rotational symmetry.',
            'J': 'The letter J does not have rotational symmetry.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch13_t3_q11',
        type: 'mcq',
        question: 'What is the angle of rotation for a shape with order 4?',
        options: [
            '90 degrees',
            '180 degrees',
            '120 degrees',
            '60 degrees'
        ],
        correctAnswer: '90 degrees',
        explanation: 'Angle of rotation = 360° ÷ order = 360° ÷ 4 = 90°',
        wrongAnswerExplanations: {
            '180 degrees': 'This would be for order 2.',
            '120 degrees': 'This would be for order 3.',
            '60 degrees': 'This would be for order 6.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch13_t3_q12',
        type: 'mcq',
        question: 'Which shape has order 1?',
        options: [
            'Scalene Triangle',
            'Square',
            'Circle',
            'Regular Hexagon'
        ],
        correctAnswer: 'Scalene Triangle',
        explanation: 'A scalene triangle has no rotational symmetry, so its order is 1.',
        wrongAnswerExplanations: {
            'Square': 'A square has order 4.',
            'Circle': 'A circle has infinite order.',
            'Regular Hexagon': 'A regular hexagon has order 6.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch13_t3_q13',
        type: 'mcq',
        question: 'What is the order of rotation for a regular octagon?',
        options: [
            '8',
            '6',
            '4',
            '2'
        ],
        correctAnswer: '8',
        explanation: 'A regular octagon matches its original position 8 times in a full turn.',
        wrongAnswerExplanations: {
            '6': 'A regular octagon matches more than 6 times.',
            '4': 'A regular octagon matches more than 4 times.',
            '2': 'A regular octagon matches more than 2 times.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch13_t3_q14',
        type: 'mcq',
        question: 'Which of these shapes has the highest order of rotation?',
        options: [
            'Circle',
            'Square',
            'Regular Pentagon',
            'Regular Hexagon'
        ],
        correctAnswer: 'Circle',
        explanation: 'A circle has infinite order of rotation, which is higher than any finite order.',
        wrongAnswerExplanations: {
            'Square': 'A square has order 4, which is less than infinite.',
            'Regular Pentagon': 'A regular pentagon has order 5, which is less than infinite.',
            'Regular Hexagon': 'A regular hexagon has order 6, which is less than infinite.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch13_t3_q15',
        type: 'mcq',
        question: 'What is the angle of rotation for a shape with order 6?',
        options: [
            '60 degrees',
            '90 degrees',
            '120 degrees',
            '180 degrees'
        ],
        correctAnswer: '60 degrees',
        explanation: 'Angle of rotation = 360° ÷ order = 360° ÷ 6 = 60°',
        wrongAnswerExplanations: {
            '90 degrees': 'This would be for order 4.',
            '120 degrees': 'This would be for order 3.',
            '180 degrees': 'This would be for order 2.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch13_t3_q16',
        type: 'mcq',
        question: 'Which shape has order 2?',
        options: [
            'Rectangle',
            'Square',
            'Circle',
            'Regular Pentagon'
        ],
        correctAnswer: 'Rectangle',
        explanation: 'A rectangle matches its original position 2 times in a full turn.',
        wrongAnswerExplanations: {
            'Square': 'A square has order 4.',
            'Circle': 'A circle has infinite order.',
            'Regular Pentagon': 'A regular pentagon has order 5.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch13_t3_q17',
        type: 'mcq',
        question: 'What is the order of rotation for a regular decagon?',
        options: [
            '10',
            '8',
            '6',
            '4'
        ],
        correctAnswer: '10',
        explanation: 'A regular decagon matches its original position 10 times in a full turn.',
        wrongAnswerExplanations: {
            '8': 'A regular decagon matches more than 8 times.',
            '6': 'A regular decagon matches more than 6 times.',
            '4': 'A regular decagon matches more than 4 times.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch13_t3_q18',
        type: 'mcq',
        question: 'Which of these shapes has the lowest order of rotation?',
        options: [
            'Scalene Triangle',
            'Square',
            'Regular Pentagon',
            'Regular Hexagon'
        ],
        correctAnswer: 'Scalene Triangle',
        explanation: 'A scalene triangle has order 1, which is the lowest possible order.',
        wrongAnswerExplanations: {
            'Square': 'A square has order 4, which is higher than 1.',
            'Regular Pentagon': 'A regular pentagon has order 5, which is higher than 1.',
            'Regular Hexagon': 'A regular hexagon has order 6, which is higher than 1.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch13_t3_q19',
        type: 'mcq',
        question: 'What is the angle of rotation for a shape with order 5?',
        options: [
            '72 degrees',
            '90 degrees',
            '120 degrees',
            '180 degrees'
        ],
        correctAnswer: '72 degrees',
        explanation: 'Angle of rotation = 360° ÷ order = 360° ÷ 5 = 72°',
        wrongAnswerExplanations: {
            '90 degrees': 'This would be for order 4.',
            '120 degrees': 'This would be for order 3.',
            '180 degrees': 'This would be for order 2.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch13_t3_q20',
        type: 'mcq',
        question: 'Which shape has order 8?',
        options: [
            'Regular Octagon',
            'Square',
            'Circle',
            'Regular Pentagon'
        ],
        correctAnswer: 'Regular Octagon',
        explanation: 'A regular octagon matches its original position 8 times in a full turn.',
        wrongAnswerExplanations: {
            'Square': 'A square has order 4.',
            'Circle': 'A circle has infinite order.',
            'Regular Pentagon': 'A regular pentagon has order 5.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    }
]; 