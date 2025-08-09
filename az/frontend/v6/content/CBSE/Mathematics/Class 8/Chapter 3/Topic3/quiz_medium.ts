import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch3_t3_qm1',
        type: 'mcq',
        question: 'If the sum of interior angles of a polygon is 1080°, how many sides does it have?',
        options: ['8', '7', '9', '6'],
        correctAnswer: '8',
        explanation: 'Using (n-2) × 180° = 1080°, solve for n: n = 8 sides. 🔷',
        wrongAnswerExplanations: {
            '7': 'Sum would be 900°.',
            '9': 'Sum would be 1260°.',
            '6': 'Sum would be 720°.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch3_t3_qm2',
        type: 'mcq',
        question: 'In a regular octagon, if one interior angle is 135°, what is the sum of all exterior angles?',
        options: ['360°', '180°', '720°', '540°'],
        correctAnswer: '360°',
        explanation: 'Sum of exterior angles is always 360° for any polygon. 🔄',
        wrongAnswerExplanations: {
            '180°': 'Too small for a polygon.',
            '720°': 'Double the correct value.',
            '540°': 'Not related to exterior angles.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch3_t3_qm3',
        type: 'mcq',
        question: 'If each exterior angle of a regular polygon is 40°, how many sides does the polygon have?',
        options: ['9', '8', '10', '7'],
        correctAnswer: '9',
        explanation: 'For exterior angle 40°, 360° ÷ 40° = 9 sides. 🔷',
        wrongAnswerExplanations: {
            '8': 'Would give 45° exterior angles.',
            '10': 'Would give 36° exterior angles.',
            '7': 'Would give ~51.43° exterior angles.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch3_t3_qm4',
        type: 'mcq',
        question: 'A polygon has 10 sides. How many triangles can it be divided into by drawing all possible diagonals from one vertex?',
        options: ['8', '7', '9', '6'],
        correctAnswer: '8',
        explanation: 'A decagon (10 sides) can be divided into 8 triangles (n-2). 🔷',
        wrongAnswerExplanations: {
            '7': 'That is for a nonagon.',
            '9': 'Too many triangles.',
            '6': 'That is for an octagon.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch3_t3_qm5',
        type: 'mcq',
        question: 'If each interior angle of a regular polygon is 144°, what is the number of sides?',
        options: ['9', '8', '10', '7'],
        correctAnswer: '9',
        explanation: 'For 144° interior angles, (n-2) × 180° ÷ n = 144°, so n = 9. 🔷',
        wrongAnswerExplanations: {
            '8': 'Would give 135° interior angles.',
            '10': 'Would give 144° interior angles.',
            '7': 'Would give ~128.57° interior angles.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch3_t3_qm6',
        type: 'mcq',
        question: 'In a regular hexagon, what is the ratio of an interior angle to its corresponding exterior angle?',
        options: ['2:1', '3:1', '3:2', '4:1'],
        correctAnswer: '2:1',
        explanation: 'Interior angle 120° : exterior angle 60° = 2:1. ⬡',
        wrongAnswerExplanations: {
            '3:1': 'Incorrect ratio.',
            '3:2': 'Incorrect ratio.',
            '4:1': 'Incorrect ratio.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch3_t3_qm7',
        type: 'mcq',
        question: 'How many diagonals can be drawn in total in a nonagon (9-sided polygon)?',
        options: ['27', '24', '30', '21'],
        correctAnswer: '27',
        explanation: 'Number of diagonals = n(n-3)/2 = 9(6)/2 = 27. 🔷',
        wrongAnswerExplanations: {
            '24': 'Incorrect calculation.',
            '30': 'Too many diagonals.',
            '21': 'Too few diagonals.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch3_t3_qm8',
        type: 'mcq',
        question: 'If the measure of each exterior angle of a regular polygon is 24°, what is the measure of each interior angle?',
        options: ['156°', '144°', '150°', '160°'],
        correctAnswer: '156°',
        explanation: 'Interior angle = 180° - exterior angle = 180° - 24° = 156°. 📐',
        wrongAnswerExplanations: {
            '144°': 'Incorrect calculation.',
            '150°': 'Incorrect calculation.',
            '160°': 'Incorrect calculation.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch3_t3_qm9',
        type: 'mcq',
        question: 'A regular polygon has 20 diagonals. How many sides does it have?',
        options: ['7', '8', '6', '9'],
        correctAnswer: '7',
        explanation: 'Using n(n-3)/2 = 20, solve for n: n = 7 sides. 🔷',
        wrongAnswerExplanations: {
            '8': 'Would give 28 diagonals.',
            '6': 'Would give 9 diagonals.',
            '9': 'Would give 27 diagonals.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch3_t3_qm10',
        type: 'mcq',
        question: 'What is the sum of all interior and exterior angles of a regular octagon?',
        options: ['1440°', '1080°', '1260°', '1620°'],
        correctAnswer: '1440°',
        explanation: 'Interior sum 1080° + exterior sum 360° = 1440°. 🔷',
        wrongAnswerExplanations: {
            '1080°': 'Only interior angles sum.',
            '1260°': 'Incorrect calculation.',
            '1620°': 'Incorrect calculation.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch3_t3_qm11',
        type: 'mcq',
        question: 'In a polygon, if the sum of interior angles is twice the sum of exterior angles, how many sides does it have?',
        options: ['6', '5', '7', '8'],
        correctAnswer: '6',
        explanation: '(n-2)180° = 2(360°), solve for n: n = 6 sides. ⬡',
        wrongAnswerExplanations: {
            '5': 'Sum would be less than twice.',
            '7': 'Sum would be more than twice.',
            '8': 'Sum would be much more than twice.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch3_t3_qm12',
        type: 'mcq',
        question: 'What is the difference between the measures of an interior angle and an exterior angle of a regular pentagon?',
        options: ['36°', '40°', '45°', '30°'],
        correctAnswer: '36°',
        explanation: 'Interior 108° - exterior 72° = 36° difference. 🔷',
        wrongAnswerExplanations: {
            '40°': 'Incorrect calculation.',
            '45°': 'Incorrect calculation.',
            '30°': 'Incorrect calculation.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch3_t3_qm13',
        type: 'mcq',
        question: 'If a polygon has 35 diagonals, how many sides does it have?',
        options: ['10', '8', '9', '11'],
        correctAnswer: '10',
        explanation: 'Using n(n-3)/2 = 35, solve for n: n = 10 sides. 🔷',
        wrongAnswerExplanations: {
            '8': 'Would give 20 diagonals.',
            '9': 'Would give 27 diagonals.',
            '11': 'Would give 44 diagonals.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch3_t3_qm14',
        type: 'mcq',
        question: 'In a regular octagon, what is the ratio of the sum of interior angles to the sum of exterior angles?',
        options: ['3:1', '2:1', '4:1', '5:2'],
        correctAnswer: '3:1',
        explanation: 'Interior sum 1080° : exterior sum 360° = 3:1. 🔷',
        wrongAnswerExplanations: {
            '2:1': 'Incorrect ratio.',
            '4:1': 'Incorrect ratio.',
            '5:2': 'Incorrect ratio.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch3_t3_qm15',
        type: 'mcq',
        question: 'How many triangles can be formed by drawing all possible diagonals in a pentagon?',
        options: ['5', '3', '4', '6'],
        correctAnswer: '5',
        explanation: 'A pentagon can be divided into 5 triangles using all diagonals. 🔷',
        wrongAnswerExplanations: {
            '3': 'That is from one vertex only.',
            '4': 'Too few triangles.',
            '6': 'Too many triangles.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch3_t3_qm16',
        type: 'mcq',
        question: 'If each interior angle of a regular polygon is 150°, what is each exterior angle?',
        options: ['30°', '40°', '35°', '45°'],
        correctAnswer: '30°',
        explanation: 'Exterior angle = 180° - interior angle = 180° - 150° = 30°. 📐',
        wrongAnswerExplanations: {
            '40°': 'Incorrect calculation.',
            '35°': 'Incorrect calculation.',
            '45°': 'Incorrect calculation.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch3_t3_qm17',
        type: 'mcq',
        question: 'What is the total number of angles (interior + exterior) in a heptagon?',
        options: ['14', '7', '21', '28'],
        correctAnswer: '14',
        explanation: '7 interior angles + 7 exterior angles = 14 total angles. 🔷',
        wrongAnswerExplanations: {
            '7': 'Only counts one type.',
            '21': 'Too many angles.',
            '28': 'Too many angles.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch3_t3_qm18',
        type: 'mcq',
        question: 'In a regular decagon, what fraction of a complete rotation is each interior angle?',
        options: ['4/5', '3/4', '5/6', '7/8'],
        correctAnswer: '4/5',
        explanation: 'Interior angle = 144° = 4/5 of 180° (half rotation). 🔷',
        wrongAnswerExplanations: {
            '3/4': 'That is 135°.',
            '5/6': 'That is 150°.',
            '7/8': 'That is 157.5°.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch3_t3_qm19',
        type: 'mcq',
        question: 'How many diagonals can be drawn from two adjacent vertices of a hexagon?',
        options: ['6', '5', '7', '4'],
        correctAnswer: '6',
        explanation: '3 diagonals from each of 2 adjacent vertices = 6 total. ⬡',
        wrongAnswerExplanations: {
            '5': 'Incorrect count.',
            '7': 'Too many diagonals.',
            '4': 'Too few diagonals.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch3_t3_qm20',
        type: 'mcq',
        question: 'If the sum of interior angles of a polygon is 5 times the sum of its exterior angles, how many sides does it have?',
        options: ['12', '10', '11', '9'],
        correctAnswer: '12',
        explanation: '(n-2)180° = 5(360°), solve for n: n = 12 sides. 🔷',
        wrongAnswerExplanations: {
            '10': 'Ratio would be smaller.',
            '11': 'Incorrect calculation.',
            '9': 'Ratio would be much smaller.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    }
]; 