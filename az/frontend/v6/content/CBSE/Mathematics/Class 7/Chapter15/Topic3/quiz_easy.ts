import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch15_t3_qe1',
        type: 'mcq',
        question: 'What does a top view of a cube show?',
        options: ['A square', 'A rectangle', 'A circle', 'A triangle'],
        correctAnswer: 'A square',
        explanation: 'When viewed from the top, a cube appears as a square since all faces of a cube are squares. 📦',
        wrongAnswerExplanations: {
            'A rectangle': 'A cube has equal length and width when viewed from top.',
            'A circle': 'A cube has straight edges, not curved.',
            'A triangle': 'A cube has four equal sides when viewed from top.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch15_t3_qe2',
        type: 'mcq',
        question: 'The front view of a cylinder shows:',
        options: ['A rectangle', 'A circle', 'A triangle', 'An oval'],
        correctAnswer: 'A rectangle',
        explanation: 'When viewed from the front, a cylinder appears as a rectangle showing its height and diameter. 🛢️',
        wrongAnswerExplanations: {
            'A circle': 'Circle is seen in top view of a cylinder.',
            'A triangle': 'A cylinder has no triangular faces.',
            'An oval': 'Front view shows straight edges of the cylinder.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch15_t3_qe3',
        type: 'mcq',
        question: 'Which view of a cone shows a triangle?',
        options: ['Top view', 'Front view', 'Side view', 'Bottom view'],
        correctAnswer: 'Front view',
        explanation: 'The front view of a cone shows a triangle due to its slanting height and base. 🔺',
        wrongAnswerExplanations: {
            'Top view': 'Top view shows a circle.',
            'Side view': 'Side view also shows a triangle.',
            'Bottom view': 'Bottom view shows a circle.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch15_t3_qe4',
        type: 'mcq',
        question: 'The top view of a sphere appears as:',
        options: ['A circle', 'A square', 'A rectangle', 'A triangle'],
        correctAnswer: 'A circle',
        explanation: 'A sphere appears as a circle when viewed from any direction, including top view. ⭕',
        wrongAnswerExplanations: {
            'A square': 'A sphere has no flat faces or straight edges.',
            'A rectangle': 'A sphere is perfectly round from all views.',
            'A triangle': 'A sphere has no angular views.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch15_t3_qe5',
        type: 'mcq',
        question: 'What shape is seen in the side view of a rectangular prism?',
        options: ['A rectangle', 'A square', 'A circle', 'A triangle'],
        correctAnswer: 'A rectangle',
        explanation: 'The side view of a rectangular prism shows a rectangle representing its length and height. 📦',
        wrongAnswerExplanations: {
            'A square': 'Side view shows different length and height.',
            'A circle': 'A rectangular prism has no curved surfaces.',
            'A triangle': 'A rectangular prism has no triangular faces.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch15_t3_qe6',
        type: 'mcq',
        question: 'The front view of a square pyramid shows:',
        options: ['A triangle', 'A square', 'A rectangle', 'A circle'],
        correctAnswer: 'A triangle',
        explanation: 'When viewed from the front, a square pyramid appears as a triangle due to its sloping sides. 🔺',
        wrongAnswerExplanations: {
            'A square': 'Square is seen in top view.',
            'A rectangle': 'Front view shows triangular shape.',
            'A circle': 'A pyramid has no curved surfaces.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch15_t3_qe7',
        type: 'mcq',
        question: 'Which view of a cube shows all faces as rectangles?',
        options: ['None', 'Front view', 'Side view', 'Top view'],
        correctAnswer: 'None',
        explanation: 'A cube`s faces appear as squares from all views due to equal length and width. 📦',
        wrongAnswerExplanations: {
        'Front view': 'Front view shows a square.',
        'Side view': 'Side view shows a square.',
        'Top view': 'Top view shows a square.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
    },
{
    id: 'cl7_ch15_t3_qe8',
        type: 'mcq',
            question: 'The top view of a cylinder shows:',
                options: ['A circle', 'A rectangle', 'A square', 'A triangle'],
                    correctAnswer: 'A circle',
                        explanation: 'When viewed from top, a cylinder shows its circular face. 🔵',
                            wrongAnswerExplanations: {
        'A rectangle': 'Rectangle is seen in front/side view.',
            'A square': 'A cylinder has circular, not square faces.',
                'A triangle': 'A cylinder has no triangular faces.'
    },
    difficulty: 'easy',
        marks: 1,
            recommendedTime: 30
},
{
    id: 'cl7_ch15_t3_qe9',
        type: 'mcq',
            question: 'What shape appears in all three views (top, front, side) of a sphere?',
                options: ['A circle', 'A square', 'A rectangle', 'Different shapes'],
                    correctAnswer: 'A circle',
                        explanation: 'A sphere appears as a circle from all views due to its perfect roundness. ⭕',
                            wrongAnswerExplanations: {
        'A square': 'A sphere has no flat faces.',
            'A rectangle': 'A sphere appears round from all views.',
                'Different shapes': 'A sphere looks same from all views.'
    },
    difficulty: 'easy',
        marks: 1,
            recommendedTime: 30
},
{
    id: 'cl7_ch15_t3_qe10',
        type: 'mcq',
            question: 'The side view of a cone shows:',
                options: ['A triangle', 'A circle', 'A rectangle', 'A square'],
                    correctAnswer: 'A triangle',
                        explanation: 'The side view of a cone shows a triangle due to its slanting height and base. 🔺',
                            wrongAnswerExplanations: {
        'A circle': 'Circle is seen in top view.',
            'A rectangle': 'A cone appears triangular from side.',
                'A square': 'A cone has no square faces.'
    },
    difficulty: 'easy',
        marks: 1,
            recommendedTime: 30
},
{
    id: 'cl7_ch15_t3_qe11',
        type: 'mcq',
            question: 'Which 3D shape looks the same from all views?',
                options: ['Sphere', 'Cube', 'Cylinder', 'Cone'],
                    correctAnswer: 'Sphere',
                        explanation: 'A sphere appears as a circle from all views due to its perfect symmetry. ⭕',
                            wrongAnswerExplanations: {
        'Cube': 'A cube shows squares but can look different.',
            'Cylinder': 'Cylinder shows different shapes from different views.',
                'Cone': 'Cone shows different shapes from different views.'
    },
    difficulty: 'easy',
        marks: 1,
            recommendedTime: 30
},
{
    id: 'cl7_ch15_t3_qe12',
        type: 'mcq',
            question: 'The front view of a rectangular box is a:',
                options: ['Rectangle', 'Square', 'Circle', 'Triangle'],
                    correctAnswer: 'Rectangle',
                        explanation: 'A rectangular box shows a rectangle in front view with its width and height visible. 📦',
                            wrongAnswerExplanations: {
        'Square': 'Width and height are usually different.',
            'Circle': 'A box has no curved surfaces.',
                'Triangle': 'A box has no triangular faces.'
    },
    difficulty: 'easy',
        marks: 1,
            recommendedTime: 30
},
{
    id: 'cl7_ch15_t3_qe13',
        type: 'mcq',
            question: 'What shape is seen in the top view of a triangular prism?',
                options: ['A triangle', 'A rectangle', 'A circle', 'A square'],
                    correctAnswer: 'A triangle',
                        explanation: 'The top view of a triangular prism shows its triangular face. 📐',
                            wrongAnswerExplanations: {
        'A rectangle': 'Rectangle is seen in front/side view.',
            'A circle': 'A triangular prism has no circular faces.',
                'A square': 'Top face is triangular, not square.'
    },
    difficulty: 'easy',
        marks: 1,
            recommendedTime: 30
},
{
    id: 'cl7_ch15_t3_qe14',
        type: 'mcq',
            question: 'The bottom view of a cylinder is identical to its:',
                options: ['Top view', 'Front view', 'Side view', 'None of these'],
                    correctAnswer: 'Top view',
                        explanation: 'Both top and bottom views of a cylinder show identical circles. 🔵',
                            wrongAnswerExplanations: {
        'Front view': 'Front view shows a rectangle.',
            'Side view': 'Side view shows a rectangle.',
                'None of these': 'Top and bottom views are same.'
    },
    difficulty: 'easy',
        marks: 1,
            recommendedTime: 30
},
{
    id: 'cl7_ch15_t3_qe15',
        type: 'mcq',
            question: 'Which view of a square-based pyramid shows a square?',
                options: ['Top view', 'Front view', 'Side view', 'All views'],
                    correctAnswer: 'Top view',
                        explanation: 'Only the top view of a square-based pyramid shows its square base. ⬛',
                            wrongAnswerExplanations: {
        'Front view': 'Front view shows a triangle.',
            'Side view': 'Side view shows a triangle.',
                'All views': 'Only top view shows a square.'
    },
    difficulty: 'easy',
        marks: 1,
            recommendedTime: 30
},
{
    id: 'cl7_ch15_t3_qe16',
        type: 'mcq',
            question: 'The side view of a sphere is:',
                options: ['Same as front view', 'Different from front view', 'A square', 'A rectangle'],
                    correctAnswer: 'Same as front view',
                        explanation: 'A sphere appears as a circle from all views, including side view. ⭕',
                            wrongAnswerExplanations: {
        'Different from front view': 'Sphere looks same from all views.',
            'A square': 'Sphere has no flat faces.',
                'A rectangle': 'Sphere appears circular from all views.'
    },
    difficulty: 'easy',
        marks: 1,
            recommendedTime: 30
},
{
    id: 'cl7_ch15_t3_qe17',
        type: 'mcq',
            question: 'What shape is seen in the front view of a triangular pyramid?',
                options: ['A triangle', 'A square', 'A rectangle', 'A circle'],
                    correctAnswer: 'A triangle',
                        explanation: 'The front view of a triangular pyramid shows a triangle. 🔺',
                            wrongAnswerExplanations: {
        'A square': 'A triangular pyramid has no square faces.',
            'A rectangle': 'Front view shows triangular shape.',
                'A circle': 'A pyramid has no curved surfaces.'
    },
    difficulty: 'easy',
        marks: 1,
            recommendedTime: 30
},
{
    id: 'cl7_ch15_t3_qe18',
        type: 'mcq',
            question: 'The front and side views of a cube are:',
                options: ['Identical squares', 'Different squares', 'Different rectangles', 'Identical rectangles'],
                    correctAnswer: 'Identical squares',
                        explanation: 'A cube shows identical squares from front and side views due to equal dimensions. 📦',
                            wrongAnswerExplanations: {
        'Different squares': 'Cube has equal dimensions.',
            'Different rectangles': 'Cube shows squares, not rectangles.',
                'Identical rectangles': 'Cube shows squares, not rectangles.'
    },
    difficulty: 'easy',
        marks: 1,
            recommendedTime: 30
},
{
    id: 'cl7_ch15_t3_qe19',
        type: 'mcq',
            question: 'Which view of a rectangular prism might show a square?',
                options: ['Front view', 'Any view', 'No view', 'Only top view'],
                    correctAnswer: 'Any view',
                        explanation: 'If two dimensions are equal, that view will show a square. 📦',
                            wrongAnswerExplanations: {
        'Front view': 'Depends on dimensions.',
            'No view': 'Can show square if dimensions are equal.',
                'Only top view': 'Any view can show square if dimensions match.'
    },
    difficulty: 'easy',
        marks: 1,
            recommendedTime: 30
},
{
    id: 'cl7_ch15_t3_qe20',
        type: 'mcq',
            question: 'The top view of a cone shows:',
                options: ['A circle', 'A triangle', 'A point', 'A rectangle'],
                    correctAnswer: 'A circle',
                        explanation: 'When viewed from top, a cone shows its circular base. 🔵',
                            wrongAnswerExplanations: {
        'A triangle': 'Triangle is seen in front/side view.',
            'A point': 'Top view shows the circular base.',
                'A rectangle': 'A cone has no rectangular faces.'
    },
    difficulty: 'easy',
        marks: 1,
            recommendedTime: 30
}
]; 