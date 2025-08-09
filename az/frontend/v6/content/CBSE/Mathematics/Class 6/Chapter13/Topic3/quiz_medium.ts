import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch13_t3_q21',
        type: 'mcq',
        question: 'A shape has rotational symmetry of order 4. What is the smallest angle through which it must be rotated to look identical?',
        options: [
            '90 degrees',
            '45 degrees',
            '180 degrees',
            '120 degrees'
        ],
        correctAnswer: '90 degrees',
        explanation: 'For order 4, the smallest angle of rotation = 360° ÷ 4 = 90°',
        wrongAnswerExplanations: {
            '45 degrees': 'This would be for order 8.',
            '180 degrees': 'This would be for order 2.',
            '120 degrees': 'This would be for order 3.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch13_t3_q22',
        type: 'mcq',
        question: 'Which of these shapes has both line symmetry and rotational symmetry?',
        options: [
            'Regular Pentagon',
            'Scalene Triangle',
            'Parallelogram',
            'Trapezium'
        ],
        correctAnswer: 'Regular Pentagon',
        explanation: 'A regular pentagon has 5 lines of symmetry and rotational symmetry of order 5.',
        wrongAnswerExplanations: {
            'Scalene Triangle': 'A scalene triangle has no line symmetry and no rotational symmetry.',
            'Parallelogram': 'A parallelogram has rotational symmetry but no line symmetry.',
            'Trapezium': 'A trapezium has line symmetry but no rotational symmetry.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch13_t3_q23',
        type: 'mcq',
        question: 'If a shape has rotational symmetry of order 6, how many times will it look identical in a 720-degree rotation?',
        options: [
            '12',
            '6',
            '3',
            '4'
        ],
        correctAnswer: '12',
        explanation: 'In 720° (2 full turns), a shape with order 6 will match its original position 12 times (6 × 2).',
        wrongAnswerExplanations: {
            '6': 'This would be for one full turn (360°).',
            '3': 'This would be incorrect for any order of rotation.',
            '4': 'This would be incorrect for any order of rotation.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch13_t3_q24',
        type: 'mcq',
        question: 'Which of these letters has rotational symmetry of order 2?',
        options: [
            'X',
            'A',
            'B',
            'C'
        ],
        correctAnswer: 'X',
        explanation: 'The letter X looks the same when rotated 180 degrees, giving it order 2.',
        wrongAnswerExplanations: {
            'A': 'The letter A has line symmetry but no rotational symmetry.',
            'B': 'The letter B has line symmetry but no rotational symmetry.',
            'C': 'The letter C has line symmetry but no rotational symmetry.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch13_t3_q25',
        type: 'mcq',
        question: 'A shape has rotational symmetry of order 5. What is the angle of rotation?',
        options: [
            '72 degrees',
            '60 degrees',
            '90 degrees',
            '120 degrees'
        ],
        correctAnswer: '72 degrees',
        explanation: 'Angle of rotation = 360° ÷ 5 = 72°',
        wrongAnswerExplanations: {
            '60 degrees': 'This would be for order 6.',
            '90 degrees': 'This would be for order 4.',
            '120 degrees': 'This would be for order 3.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch13_t3_q26',
        type: 'mcq',
        question: 'Which of these shapes has the highest order of rotational symmetry?',
        options: [
            'Regular Dodecagon',
            'Regular Octagon',
            'Regular Hexagon',
            'Regular Pentagon'
        ],
        correctAnswer: 'Regular Dodecagon',
        explanation: 'A regular dodecagon has order 12, which is higher than the other options.',
        wrongAnswerExplanations: {
            'Regular Octagon': 'A regular octagon has order 8.',
            'Regular Hexagon': 'A regular hexagon has order 6.',
            'Regular Pentagon': 'A regular pentagon has order 5.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch13_t3_q27',
        type: 'mcq',
        question: 'If a shape has rotational symmetry of order 3, how many times will it look identical in a 540-degree rotation?',
        options: [
            '4.5',
            '3',
            '2',
            '1.5'
        ],
        correctAnswer: '4.5',
        explanation: 'In 540° (1.5 full turns), a shape with order 3 will match its original position 4.5 times (3 × 1.5).',
        wrongAnswerExplanations: {
            '3': 'This would be for one full turn (360°).',
            '2': 'This would be incorrect for any order of rotation.',
            '1.5': 'This would be incorrect for any order of rotation.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch13_t3_q28',
        type: 'mcq',
        question: 'Which of these shapes has both line symmetry and rotational symmetry of order 2?',
        options: [
            'Rectangle',
            'Rhombus',
            'Square',
            'Circle'
        ],
        correctAnswer: 'Rectangle',
        explanation: 'A rectangle has 2 lines of symmetry and rotational symmetry of order 2.',
        wrongAnswerExplanations: {
            'Rhombus': 'A rhombus has 2 lines of symmetry and rotational symmetry of order 2.',
            'Square': 'A square has 4 lines of symmetry and rotational symmetry of order 4.',
            'Circle': 'A circle has infinite lines of symmetry and infinite order of rotation.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch13_t3_q29',
        type: 'mcq',
        question: 'A shape has rotational symmetry of order 8. What is the angle of rotation?',
        options: [
            '45 degrees',
            '60 degrees',
            '90 degrees',
            '120 degrees'
        ],
        correctAnswer: '45 degrees',
        explanation: 'Angle of rotation = 360° ÷ 8 = 45°',
        wrongAnswerExplanations: {
            '60 degrees': 'This would be for order 6.',
            '90 degrees': 'This would be for order 4.',
            '120 degrees': 'This would be for order 3.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch13_t3_q30',
        type: 'mcq',
        question: 'Which of these shapes has rotational symmetry but no line symmetry?',
        options: [
            'Parallelogram',
            'Square',
            'Rectangle',
            'Regular Pentagon'
        ],
        correctAnswer: 'Parallelogram',
        explanation: 'A parallelogram has rotational symmetry of order 2 but no line symmetry.',
        wrongAnswerExplanations: {
            'Square': 'A square has both line symmetry and rotational symmetry.',
            'Rectangle': 'A rectangle has both line symmetry and rotational symmetry.',
            'Regular Pentagon': 'A regular pentagon has both line symmetry and rotational symmetry.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch13_t3_q31',
        type: 'mcq',
        question: 'If a shape has rotational symmetry of order 4, how many times will it look identical in a 1080-degree rotation?',
        options: [
            '12',
            '4',
            '8',
            '16'
        ],
        correctAnswer: '12',
        explanation: 'In 1080° (3 full turns), a shape with order 4 will match its original position 12 times (4 × 3).',
        wrongAnswerExplanations: {
            '4': 'This would be for one full turn (360°).',
            '8': 'This would be for two full turns (720°).',
            '16': 'This would be for four full turns (1440°).'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch13_t3_q32',
        type: 'mcq',
        question: 'Which of these letters has rotational symmetry of order 2?',
        options: [
            'H',
            'A',
            'B',
            'C'
        ],
        correctAnswer: 'H',
        explanation: 'The letter H looks the same when rotated 180 degrees, giving it order 2.',
        wrongAnswerExplanations: {
            'A': 'The letter A has line symmetry but no rotational symmetry.',
            'B': 'The letter B has line symmetry but no rotational symmetry.',
            'C': 'The letter C has line symmetry but no rotational symmetry.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch13_t3_q33',
        type: 'mcq',
        question: 'A shape has rotational symmetry of order 7. What is the angle of rotation?',
        options: [
            '51.43 degrees',
            '60 degrees',
            '72 degrees',
            '90 degrees'
        ],
        correctAnswer: '51.43 degrees',
        explanation: 'Angle of rotation = 360° ÷ 7 ≈ 51.43°',
        wrongAnswerExplanations: {
            '60 degrees': 'This would be for order 6.',
            '72 degrees': 'This would be for order 5.',
            '90 degrees': 'This would be for order 4.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch13_t3_q34',
        type: 'mcq',
        question: 'Which of these shapes has both line symmetry and rotational symmetry of order 3?',
        options: [
            'Equilateral Triangle',
            'Isosceles Triangle',
            'Scalene Triangle',
            'Right Triangle'
        ],
        correctAnswer: 'Equilateral Triangle',
        explanation: 'An equilateral triangle has 3 lines of symmetry and rotational symmetry of order 3.',
        wrongAnswerExplanations: {
            'Isosceles Triangle': 'An isosceles triangle has 1 line of symmetry but no rotational symmetry.',
            'Scalene Triangle': 'A scalene triangle has no symmetry.',
            'Right Triangle': 'A right triangle has no symmetry unless it is isosceles.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch13_t3_q35',
        type: 'mcq',
        question: 'If a shape has rotational symmetry of order 5, how many times will it look identical in a 900-degree rotation?',
        options: [
            '12.5',
            '5',
            '10',
            '15'
        ],
        correctAnswer: '12.5',
        explanation: 'In 900° (2.5 full turns), a shape with order 5 will match its original position 12.5 times (5 × 2.5).',
        wrongAnswerExplanations: {
            '5': 'This would be for one full turn (360°).',
            '10': 'This would be for two full turns (720°).',
            '15': 'This would be for three full turns (1080°).'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch13_t3_q36',
        type: 'mcq',
        question: 'Which of these shapes has rotational symmetry but no line symmetry?',
        options: [
            'Rhombus',
            'Square',
            'Rectangle',
            'Regular Pentagon'
        ],
        correctAnswer: 'Rhombus',
        explanation: 'A rhombus has rotational symmetry of order 2 but no line symmetry.',
        wrongAnswerExplanations: {
            'Square': 'A square has both line symmetry and rotational symmetry.',
            'Rectangle': 'A rectangle has both line symmetry and rotational symmetry.',
            'Regular Pentagon': 'A regular pentagon has both line symmetry and rotational symmetry.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch13_t3_q37',
        type: 'mcq',
        question: 'A shape has rotational symmetry of order 9. What is the angle of rotation?',
        options: [
            '40 degrees',
            '45 degrees',
            '60 degrees',
            '72 degrees'
        ],
        correctAnswer: '40 degrees',
        explanation: 'Angle of rotation = 360° ÷ 9 = 40°',
        wrongAnswerExplanations: {
            '45 degrees': 'This would be for order 8.',
            '60 degrees': 'This would be for order 6.',
            '72 degrees': 'This would be for order 5.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch13_t3_q38',
        type: 'mcq',
        question: 'Which of these shapes has both line symmetry and rotational symmetry of order 4?',
        options: [
            'Square',
            'Rectangle',
            'Rhombus',
            'Parallelogram'
        ],
        correctAnswer: 'Square',
        explanation: 'A square has 4 lines of symmetry and rotational symmetry of order 4.',
        wrongAnswerExplanations: {
            'Rectangle': 'A rectangle has 2 lines of symmetry and rotational symmetry of order 2.',
            'Rhombus': 'A rhombus has 2 lines of symmetry and rotational symmetry of order 2.',
            'Parallelogram': 'A parallelogram has no line symmetry but has rotational symmetry of order 2.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch13_t3_q39',
        type: 'mcq',
        question: 'If a shape has rotational symmetry of order 6, how many times will it look identical in a 1260-degree rotation?',
        options: [
            '21',
            '6',
            '12',
            '18'
        ],
        correctAnswer: '21',
        explanation: 'In 1260° (3.5 full turns), a shape with order 6 will match its original position 21 times (6 × 3.5).',
        wrongAnswerExplanations: {
            '6': 'This would be for one full turn (360°).',
            '12': 'This would be for two full turns (720°).',
            '18': 'This would be for three full turns (1080°).'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch13_t3_q40',
        type: 'mcq',
        question: 'Which of these shapes has the highest order of rotational symmetry?',
        options: [
            'Regular Decagon',
            'Regular Octagon',
            'Regular Hexagon',
            'Regular Pentagon'
        ],
        correctAnswer: 'Regular Decagon',
        explanation: 'A regular decagon has order 10, which is higher than the other options.',
        wrongAnswerExplanations: {
            'Regular Octagon': 'A regular octagon has order 8.',
            'Regular Hexagon': 'A regular hexagon has order 6.',
            'Regular Pentagon': 'A regular pentagon has order 5.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    }
]; 