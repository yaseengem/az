// filepath: content/CBSE/Mathematics/Class 9/Chapter7/Topic1/quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch7_t1_qe1',
        type: 'mcq',
        question: 'How many sides does a triangle have?',
        options: ['3', '4', '5', '6'],
        correctAnswer: '3',
        explanation: 'A triangle is a closed figure formed by three line segments joining three non-collinear points. It has exactly 3 sides.',
        wrongAnswerExplanations: {
            '4': 'A quadrilateral has 4 sides, not a triangle.',
            '5': 'A pentagon has 5 sides, not a triangle.',
            '6': 'A hexagon has 6 sides, not a triangle.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t1_qe2',
        type: 'mcq',
        question: 'What is the sum of all angles in a triangle?',
        options: ['180°', '90°', '270°', '360°'],
        correctAnswer: '180°',
        explanation: 'The sum of all interior angles in a triangle is always 180 degrees. This is a fundamental property of triangles.',
        wrongAnswerExplanations: {
            '90°': 'This is the measure of a right angle, not the sum of all angles in a triangle.',
            '270°': 'This is incorrect. The sum of interior angles in a triangle is 180 degrees.',
            '360°': 'This is the sum of angles in a quadrilateral, not a triangle.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t1_qe3',
        type: 'mcq',
        question: 'Which of the following is an equilateral triangle?',
        options: [
            'A triangle with all sides equal',
            'A triangle with two sides equal',
            'A triangle with all angles equal to 60°',
            'Both A and C'
        ],
        correctAnswer: 'Both A and C',
        explanation: 'An equilateral triangle has all three sides equal in length. As a consequence, all three angles are also equal, each measuring 60 degrees.',
        wrongAnswerExplanations: {
            'A triangle with all sides equal': 'This is true, but incomplete. An equilateral triangle also has all angles equal to 60°.',
            'A triangle with two sides equal': 'This describes an isosceles triangle, not an equilateral triangle.',
            'A triangle with all angles equal to 60°': 'This is true, but incomplete. An equilateral triangle also has all sides equal.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t1_qe4',
        type: 'mcq',
        question: 'What is a scalene triangle?',
        options: [
            'A triangle with all sides of different lengths',
            'A triangle with all sides of equal length',
            'A triangle with two sides of equal length',
            'A triangle with a right angle'
        ],
        correctAnswer: 'A triangle with all sides of different lengths',
        explanation: 'A scalene triangle has all three sides of different lengths. Consequently, all three angles are also different.',
        wrongAnswerExplanations: {
            'A triangle with all sides of equal length': 'This describes an equilateral triangle, not a scalene triangle.',
            'A triangle with two sides of equal length': 'This describes an isosceles triangle, not a scalene triangle.',
            'A triangle with a right angle': 'This describes a right-angled triangle, which may or may not be scalene.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t1_qe5',
        type: 'mcq',
        question: 'Which of the following statements about triangles is true?',
        options: [
            'The sum of the lengths of any two sides must be greater than the third side',
            'All triangles have at least one right angle',
            'All triangles have at least one obtuse angle',
            'The longest side of a triangle is always twice the shortest side'
        ],
        correctAnswer: 'The sum of the lengths of any two sides must be greater than the third side',
        explanation: 'This is known as the Triangle Inequality Theorem. For any triangle, the sum of the lengths of any two sides must be greater than the length of the third side.',
        wrongAnswerExplanations: {
            'All triangles have at least one right angle': 'This is false. Not all triangles have a right angle. An acute triangle has all angles less than 90°.',
            'All triangles have at least one obtuse angle': 'This is false. Not all triangles have an obtuse angle. An acute triangle has all angles less than 90°.',
            'The longest side of a triangle is always twice the shortest side': 'This is false. There is no fixed relationship between the longest and shortest sides of a triangle.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t1_qe6',
        type: 'mcq',
        question: 'What is an isosceles triangle?',
        options: [
            'A triangle with at least two equal sides',
            'A triangle with all sides equal',
            'A triangle with no equal sides',
            'A triangle with a right angle'
        ],
        correctAnswer: 'A triangle with at least two equal sides',
        explanation: 'An isosceles triangle has at least two sides of equal length. The angles opposite to these equal sides are also equal.',
        wrongAnswerExplanations: {
            'A triangle with all sides equal': 'This describes an equilateral triangle, which is a special case of an isosceles triangle.',
            'A triangle with no equal sides': 'This describes a scalene triangle, not an isosceles triangle.',
            'A triangle with a right angle': 'This describes a right-angled triangle, which may or may not be isosceles.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t1_qe7',
        type: 'mcq',
        question: 'What is a right-angled triangle?',
        options: [
            'A triangle with one angle equal to 90°',
            'A triangle with all angles equal',
            'A triangle with one angle greater than 90°',
            'A triangle with one angle less than 90°'
        ],
        correctAnswer: 'A triangle with one angle equal to 90°',
        explanation: 'A right-angled triangle has one angle that measures exactly 90 degrees (a right angle).',
        wrongAnswerExplanations: {
            'A triangle with all angles equal': 'This describes an equilateral triangle, not a right-angled triangle.',
            'A triangle with one angle greater than 90°': 'This describes an obtuse-angled triangle, not a right-angled triangle.',
            'A triangle with one angle less than 90°': 'This is true for all triangles, as at least one angle in any triangle is less than 90°. It does not specifically describe a right-angled triangle.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t1_qe8',
        type: 'mcq',
        question: 'In a right-angled triangle, the side opposite to the right angle is called:',
        options: [
            'Hypotenuse',
            'Perpendicular',
            'Base',
            'Adjacent'
        ],
        correctAnswer: 'Hypotenuse',
        explanation: 'In a right-angled triangle, the side opposite to the right angle is the hypotenuse. It is the longest side of the triangle.',
        wrongAnswerExplanations: {
            'Perpendicular': 'The perpendicular is the height or altitude of a triangle, not a specific side.',
            'Base': 'The base is any side of the triangle on which the height is measured, not specifically the side opposite to the right angle.',
            'Adjacent': 'Adjacent refers to the sides that form the right angle, not the side opposite to it.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t1_qe9',
        type: 'mcq',
        question: 'What is the formula for the area of a triangle?',
        options: [
            '(1/2) × base × height',
            'base × height',
            'length × width',
            'πr²'
        ],
        correctAnswer: '(1/2) × base × height',
        explanation: 'The area of a triangle is (1/2) × base × height, where base is any side and height is the perpendicular distance from the base to the opposite vertex.',
        wrongAnswerExplanations: {
            'base × height': 'This is the formula for the area of a rectangle, not a triangle.',
            'length × width': 'This is the formula for the area of a rectangle, not a triangle.',
            'πr²': 'This is the formula for the area of a circle, not a triangle.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t1_qe10',
        type: 'mcq',
        question: 'Which of the following cannot be the angles of a triangle?',
        options: [
            '100°, 40°, 50°',
            '60°, 60°, 60°',
            '30°, 60°, 90°',
            '45°, 45°, 90°'
        ],
        correctAnswer: '100°, 40°, 50°',
        explanation: 'The sum of angles in a triangle is always 180°. For the option 100° + 40° + 50° = 190°, which exceeds 180°, making these angles invalid for a triangle.',
        wrongAnswerExplanations: {
            '60°, 60°, 60°': 'The sum is 180°, so these angles can form an equilateral triangle.',
            '30°, 60°, 90°': 'The sum is 180°, so these angles can form a right-angled triangle.',
            '45°, 45°, 90°': 'The sum is 180°, so these angles can form a right-angled isosceles triangle.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    }
]; 