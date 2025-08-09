import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch3_t3_qe1',
        type: 'mcq',
        question: 'What is the sum of interior angles of a triangle?',
        options: ['180°', '360°', '270°', '90°'],
        correctAnswer: '180°',
        explanation: 'The sum of interior angles of a triangle is always 180°. 📐',
        wrongAnswerExplanations: {
            '360°': 'That is the sum of angles in a quadrilateral.',
            '270°': 'Incorrect value.',
            '90°': 'That is the measure of a right angle.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t3_qe2',
        type: 'mcq',
        question: 'What is the sum of interior angles of a quadrilateral?',
        options: ['360°', '180°', '270°', '540°'],
        correctAnswer: '360°',
        explanation: 'The sum of interior angles of a quadrilateral is always 360°. ⬜',
        wrongAnswerExplanations: {
            '180°': 'That is the sum of angles in a triangle.',
            '270°': 'Incorrect value.',
            '540°': 'That is the sum of angles in a pentagon.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t3_qe3',
        type: 'mcq',
        question: 'What is the sum of interior angles of a pentagon?',
        options: ['540°', '360°', '720°', '450°'],
        correctAnswer: '540°',
        explanation: 'The sum of interior angles of a pentagon is 540° = (5-2) × 180°. 🔷',
        wrongAnswerExplanations: {
            '360°': 'That is the sum of angles in a quadrilateral.',
            '720°': 'That is the sum of angles in a hexagon.',
            '450°': 'Incorrect value.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t3_qe4',
        type: 'mcq',
        question: 'How many triangles can a pentagon be divided into by drawing diagonals from one vertex?',
        options: ['3', '4', '2', '5'],
        correctAnswer: '3',
        explanation: 'A pentagon can be divided into 3 triangles from one vertex. 📐',
        wrongAnswerExplanations: {
            '4': 'Incorrect number of triangles.',
            '2': 'Too few triangles.',
            '5': 'Too many triangles.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t3_qe5',
        type: 'mcq',
        question: 'What is the measure of each interior angle in a regular pentagon?',
        options: ['108°', '120°', '135°', '144°'],
        correctAnswer: '108°',
        explanation: 'Each interior angle in a regular pentagon = 540° ÷ 5 = 108°. 🔷',
        wrongAnswerExplanations: {
            '120°': 'That is for a regular hexagon.',
            '135°': 'That is for a regular octagon.',
            '144°': 'That is for a regular nonagon.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t3_qe6',
        type: 'mcq',
        question: 'What is the sum of interior angles of a hexagon?',
        options: ['720°', '540°', '900°', '630°'],
        correctAnswer: '720°',
        explanation: 'The sum of interior angles of a hexagon is 720° = (6-2) × 180°. ⬡',
        wrongAnswerExplanations: {
            '540°': 'That is for a pentagon.',
            '900°': 'That is for a heptagon.',
            '630°': 'Incorrect value.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t3_qe7',
        type: 'mcq',
        question: 'In a polygon, if each interior angle is 120°, how many sides does it have?',
        options: ['6', '5', '7', '8'],
        correctAnswer: '6',
        explanation: 'For 120° interior angles, it must be a regular hexagon. ⬡',
        wrongAnswerExplanations: {
            '5': 'Pentagon has 108° interior angles.',
            '7': 'Heptagon has ~128.57° interior angles.',
            '8': 'Octagon has 135° interior angles.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t3_qe8',
        type: 'mcq',
        question: 'What is the formula for the sum of interior angles of a polygon with n sides?',
        options: ['(n-2) × 180°', '(n+2) × 180°', 'n × 180°', '(n-1) × 180°'],
        correctAnswer: '(n-2) × 180°',
        explanation: 'Sum of interior angles = (n-2) × 180° where n is number of sides. 📐',
        wrongAnswerExplanations: {
            '(n+2) × 180°': 'Incorrect formula.',
            'n × 180°': 'Incorrect formula.',
            '(n-1) × 180°': 'Incorrect formula.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t3_qe9',
        type: 'mcq',
        question: 'How many diagonals can be drawn from one vertex of an octagon?',
        options: ['5', '6', '4', '7'],
        correctAnswer: '5',
        explanation: 'From one vertex of an octagon, we can draw 5 diagonals (n-3). 🔷',
        wrongAnswerExplanations: {
            '6': 'Too many diagonals.',
            '4': 'Too few diagonals.',
            '7': 'Too many diagonals.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t3_qe10',
        type: 'mcq',
        question: 'What is the sum of exterior angles of any polygon?',
        options: ['360°', '180°', '540°', '720°'],
        correctAnswer: '360°',
        explanation: 'The sum of exterior angles of any polygon is always 360°. 🔄',
        wrongAnswerExplanations: {
            '180°': 'Incorrect value.',
            '540°': 'Incorrect value.',
            '720°': 'Incorrect value.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t3_qe11',
        type: 'mcq',
        question: 'What is the measure of each exterior angle in a regular octagon?',
        options: ['45°', '60°', '40°', '36°'],
        correctAnswer: '45°',
        explanation: 'Each exterior angle in a regular octagon = 360° ÷ 8 = 45°. 🔷',
        wrongAnswerExplanations: {
            '60°': 'That is for a regular hexagon.',
            '40°': 'Incorrect value.',
            '36°': 'That is for a regular decagon.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t3_qe12',
        type: 'mcq',
        question: 'In a regular polygon, if each exterior angle is 60°, how many sides does it have?',
        options: ['6', '8', '5', '7'],
        correctAnswer: '6',
        explanation: 'For 60° exterior angles, 360° ÷ 60° = 6 sides (hexagon). ⬡',
        wrongAnswerExplanations: {
            '8': 'Octagon has 45° exterior angles.',
            '5': 'Pentagon has 72° exterior angles.',
            '7': 'Heptagon has ~51.43° exterior angles.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t3_qe13',
        type: 'mcq',
        question: 'What is the sum of one interior angle and one exterior angle of any regular polygon?',
        options: ['180°', '360°', '90°', '270°'],
        correctAnswer: '180°',
        explanation: 'Interior angle + exterior angle = 180° (supplementary angles). 📐',
        wrongAnswerExplanations: {
            '360°': 'Too large.',
            '90°': 'Too small.',
            '270°': 'Incorrect value.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t3_qe14',
        type: 'mcq',
        question: 'How many triangles can a hexagon be divided into by drawing diagonals from one vertex?',
        options: ['4', '3', '5', '6'],
        correctAnswer: '4',
        explanation: 'A hexagon can be divided into 4 triangles from one vertex. ⬡',
        wrongAnswerExplanations: {
            '3': 'That is for a pentagon.',
            '5': 'Too many triangles.',
            '6': 'Too many triangles.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t3_qe15',
        type: 'mcq',
        question: 'What is the measure of each interior angle in a regular hexagon?',
        options: ['120°', '108°', '135°', '144°'],
        correctAnswer: '120°',
        explanation: 'Each interior angle in a regular hexagon = 720° ÷ 6 = 120°. ⬡',
        wrongAnswerExplanations: {
            '108°': 'That is for a regular pentagon.',
            '135°': 'That is for a regular octagon.',
            '144°': 'That is for a regular nonagon.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t3_qe16',
        type: 'mcq',
        question: 'What is the sum of interior angles of a heptagon?',
        options: ['900°', '720°', '1080°', '840°'],
        correctAnswer: '900°',
        explanation: 'The sum of interior angles of a heptagon is 900° = (7-2) × 180°. 🔷',
        wrongAnswerExplanations: {
            '720°': 'That is for a hexagon.',
            '1080°': 'That is for an octagon.',
            '840°': 'Incorrect value.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t3_qe17',
        type: 'mcq',
        question: 'How many diagonals can be drawn from one vertex of a hexagon?',
        options: ['3', '4', '2', '5'],
        correctAnswer: '3',
        explanation: 'From one vertex of a hexagon, we can draw 3 diagonals (n-3). ⬡',
        wrongAnswerExplanations: {
            '4': 'Too many diagonals.',
            '2': 'Too few diagonals.',
            '5': 'Too many diagonals.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t3_qe18',
        type: 'mcq',
        question: 'What is the measure of each exterior angle in a regular pentagon?',
        options: ['72°', '60°', '90°', '108°'],
        correctAnswer: '72°',
        explanation: 'Each exterior angle in a regular pentagon = 360° ÷ 5 = 72°. 🔷',
        wrongAnswerExplanations: {
            '60°': 'That is for a regular hexagon.',
            '90°': 'That is for a regular square.',
            '108°': 'That is the interior angle of a regular pentagon.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t3_qe19',
        type: 'mcq',
        question: 'In a polygon with 7 sides, how many triangles can it be divided into by drawing diagonals from one vertex?',
        options: ['5', '4', '6', '3'],
        correctAnswer: '5',
        explanation: 'A heptagon can be divided into 5 triangles from one vertex. 🔷',
        wrongAnswerExplanations: {
            '4': 'That is for a hexagon.',
            '6': 'Too many triangles.',
            '3': 'That is for a pentagon.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t3_qe20',
        type: 'mcq',
        question: 'What is the relationship between the number of sides (n) and the number of triangles a polygon can be divided into?',
        options: ['n-2', 'n-1', 'n+2', 'n'],
        correctAnswer: 'n-2',
        explanation: 'A polygon with n sides can be divided into (n-2) triangles. 📐',
        wrongAnswerExplanations: {
            'n-1': 'Incorrect relationship.',
            'n+2': 'Incorrect relationship.',
            'n': 'Incorrect relationship.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    }
]; 