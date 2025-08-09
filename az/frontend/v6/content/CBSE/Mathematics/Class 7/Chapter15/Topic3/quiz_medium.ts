import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch15_t3_qm1',
        type: 'mcq',
        question: 'A rectangular prism has dimensions 3cm × 4cm × 5cm. What shape will be seen in the front view if 4cm is the width and 5cm is the height?',
        options: ['A 4cm × 5cm rectangle', 'A 3cm × 5cm rectangle', 'A 3cm × 4cm rectangle', 'A square'],
        correctAnswer: 'A 4cm × 5cm rectangle',
        explanation: 'Front view shows width (4cm) × height (5cm) as a rectangle. 📏',
        wrongAnswerExplanations: {
            'A 3cm × 5cm rectangle': 'Front view shows width and height, not length.',
            'A 3cm × 4cm rectangle': 'Height should be 5cm in front view.',
            'A square': 'Width and height are different (4cm ≠ 5cm).'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch15_t3_qm2',
        type: 'mcq',
        question: 'If a cylinder has height 8cm and diameter 6cm, what are the dimensions in its front view?',
        options: ['6cm × 8cm', '3cm × 8cm', '8cm × 6cm', '8cm × 3cm'],
        correctAnswer: '6cm × 8cm',
        explanation: 'Front view shows diameter (6cm) × height (8cm) as a rectangle. 🛢️',
        wrongAnswerExplanations: {
            '3cm × 8cm': 'Use diameter, not radius, for width.',
            '8cm × 6cm': 'Height should be second dimension.',
            '8cm × 3cm': 'Use diameter, not radius, for width.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch15_t3_qm3',
        type: 'mcq',
        question: 'A triangular prism has an equilateral triangle base of side 3cm and height 5cm. What will its side view show?',
        options: ['A 5cm × 3cm rectangle', 'An equilateral triangle', 'A 3cm × 5cm rectangle', 'A 3cm × 3cm square'],
        correctAnswer: 'A 5cm × 3cm rectangle',
        explanation: 'Side view shows height (5cm) × base depth (3cm) as a rectangle. 📐',
        wrongAnswerExplanations: {
            'An equilateral triangle': 'Triangle is seen in top/bottom view.',
            'A 3cm × 5cm rectangle': 'Height should be first dimension.',
            'A 3cm × 3cm square': 'Height and depth are different.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch15_t3_qm4',
        type: 'mcq',
        question: 'A cone has base diameter 8cm and height 12cm. What are the dimensions of the triangle in its front view?',
        options: ['Base 8cm, height 12cm', 'Base 4cm, height 12cm', 'Base 12cm, height 8cm', 'Base 12cm, height 4cm'],
        correctAnswer: 'Base 8cm, height 12cm',
        explanation: 'Front view shows a triangle with base = diameter (8cm) and height = cone height (12cm). 🔺',
        wrongAnswerExplanations: {
            'Base 4cm, height 12cm': 'Use diameter, not radius, for base.',
            'Base 12cm, height 8cm': 'Height should be 12cm.',
            'Base 12cm, height 4cm': 'Incorrect dimensions.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch15_t3_qm5',
        type: 'mcq',
        question: 'A cube has edges of 5cm. If you look at it from a corner (diagonal view), what shape will you see?',
        options: ['A hexagon', 'A square', 'A rectangle', 'An octagon'],
        correctAnswer: 'A hexagon',
        explanation: 'When viewed from a corner, a cube shows a hexagonal outline due to visible faces. 📦',
        wrongAnswerExplanations: {
            'A square': 'Square is seen from front/side/top view.',
            'A rectangle': 'Diagonal view shows hexagonal shape.',
            'An octagon': 'Cube shows six edges in diagonal view.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch15_t3_qm6',
        type: 'mcq',
        question: 'If a square pyramid has base side 6cm and height 8cm, what will be the height of the triangle in its front view?',
        options: ['8cm', '6cm', '10cm', '12cm'],
        correctAnswer: '8cm',
        explanation: 'The front view triangle has same height as the pyramid (8cm). 🔺',
        wrongAnswerExplanations: {
            '6cm': 'Base side is 6cm, not height.',
            '10cm': 'Height remains 8cm in front view.',
            '12cm': 'Height remains 8cm in front view.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch15_t3_qm7',
        type: 'mcq',
        question: 'A rectangular box measures 4cm × 6cm × 8cm. How many different rectangular views are possible?',
        options: ['3', '2', '4', '6'],
        correctAnswer: '3',
        explanation: 'Three different views: 4×6, 6×8, and 4×8 rectangles from different angles. 📦',
        wrongAnswerExplanations: {
            '2': 'Each dimension pair creates a unique view.',
            '4': 'Only three unique rectangular views possible.',
            '6': 'Only three unique rectangular views possible.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch15_t3_qm8',
        type: 'mcq',
        question: 'A cylinder is cut in half vertically. What shape will you see in the cut surface view?',
        options: ['A rectangle', 'A circle', 'A semicircle', 'An oval'],
        correctAnswer: 'A rectangle',
        explanation: 'The vertical cut surface shows a rectangle with cylinder`s height and diameter. 🛢️',
        wrongAnswerExplanations: {
        'A circle': 'Circle is seen in top/bottom view.',
        'A semicircle': 'Vertical cut shows full rectangle.',
        'An oval': 'Cut surface is rectangular.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60
    },
{
    id: 'cl7_ch15_t3_qm9',
        type: 'mcq',
            question: 'In an isometric view of a cube, how many faces are visible?',
                options: ['3', '2', '4', '1'],
                    correctAnswer: '3',
                        explanation: 'Isometric view shows three faces of a cube at 120° angles. 📦',
                            wrongAnswerExplanations: {
        '2': 'Isometric view always shows 3 faces.',
            '4': 'Maximum 3 faces visible in any view.',
                '1': 'Isometric view shows more than one face.'
    },
    difficulty: 'medium',
        marks: 2,
            recommendedTime: 60
},
{
    id: 'cl7_ch15_t3_qm10',
        type: 'mcq',
            question: 'A triangular prism is placed on its triangular face. What shape will its top view show?',
                options: ['A triangle', 'A rectangle', 'A square', 'A pentagon'],
                    correctAnswer: 'A triangle',
                        explanation: 'When placed on triangular face, top view shows the other triangular face. 📐',
                            wrongAnswerExplanations: {
        'A rectangle': 'Rectangle is seen in side view.',
            'A square': 'Triangular prism has no square faces.',
                'A pentagon': 'No pentagonal face in triangular prism.'
    },
    difficulty: 'medium',
        marks: 2,
            recommendedTime: 60
},
{
    id: 'cl7_ch15_t3_qm11',
        type: 'mcq',
            question: 'If a rectangular prism casts a square shadow, what can you conclude about its dimensions?',
                options: ['Two dimensions are equal', 'All dimensions are equal', 'No dimensions are equal', 'Cannot determine'],
                    correctAnswer: 'Two dimensions are equal',
                        explanation: 'Square shadow means the dimensions perpendicular to light are equal. 📦',
                            wrongAnswerExplanations: {
        'All dimensions are equal': 'That would make it a cube.',
            'No dimensions are equal': 'Equal dimensions create square shadow.',
                'Cannot determine': 'Square shadow indicates equal dimensions.'
    },
    difficulty: 'medium',
        marks: 2,
            recommendedTime: 60
},
{
    id: 'cl7_ch15_t3_qm12',
        type: 'mcq',
            question: 'A hexagonal prism is viewed from its end. What shape will you see?',
                options: ['A regular hexagon', 'A rectangle', 'A circle', 'An irregular hexagon'],
                    correctAnswer: 'A regular hexagon',
                        explanation: 'End view (top/bottom) of hexagonal prism shows its regular hexagonal face. ⬡',
                            wrongAnswerExplanations: {
        'A rectangle': 'Rectangle is seen in side view.',
            'A circle': 'Prism has flat faces, not curved.',
                'An irregular hexagon': 'Base is a regular hexagon.'
    },
    difficulty: 'medium',
        marks: 2,
            recommendedTime: 60
},
{
    id: 'cl7_ch15_t3_qm13',
        type: 'mcq',
            question: 'When a cone is cut horizontally halfway up, what shape is the cut surface?',
                options: ['A circle smaller than base', 'A triangle', 'An oval', 'Same size circle as base'],
                    correctAnswer: 'A circle smaller than base',
                        explanation: 'Horizontal cut of cone creates circular face smaller than base. 🔺',
                            wrongAnswerExplanations: {
        'A triangle': 'Horizontal cut creates circle.',
            'An oval': 'Cut surface is perfectly circular.',
                'Same size circle as base': 'Cut circle is smaller than base.'
    },
    difficulty: 'medium',
        marks: 2,
            recommendedTime: 60
},
{
    id: 'cl7_ch15_t3_qm14',
        type: 'mcq',
            question: 'A square pyramid is viewed from directly above its apex. What will you see?',
                options: ['A square with visible edges to corners', 'Just a point', 'A square with visible edges to sides', 'A circle'],
                    correctAnswer: 'A square with visible edges to corners',
                        explanation: 'Top view from apex shows square base with edges from point to corners. 🔺',
                            wrongAnswerExplanations: {
        'Just a point': 'Base is visible around apex.',
            'A square with visible edges to sides': 'Edges go to corners.',
                'A circle': 'Base is square, not circular.'
    },
    difficulty: 'medium',
        marks: 2,
            recommendedTime: 60
},
{
    id: 'cl7_ch15_t3_qm15',
        type: 'mcq',
            question: 'If a cylinder`s height equals its diameter, what shape will its front view be ? ',
        options: ['A square', 'A rectangle', 'A circle', 'An oval'],
        correctAnswer: 'A square',
            explanation: 'When height equals diameter, front view shows a square (equal width and height). 🛢️',
                wrongAnswerExplanations: {
        'A rectangle': 'Equal height and diameter makes square.',
            'A circle': 'Front view is never circular.',
                'An oval': 'Front view shows straight edges.'
    },
    difficulty: 'medium',
        marks: 2,
            recommendedTime: 60
},
{
    id: 'cl7_ch15_t3_qm16',
        type: 'mcq',
            question: 'A cube is cut diagonally from one corner to the opposite corner. What shape is the cut surface?',
                options: ['A rectangle', 'A square', 'A triangle', 'A rhombus'],
                    correctAnswer: 'A rectangle',
                        explanation: 'Diagonal cut through cube creates rectangular surface. 📦',
                            wrongAnswerExplanations: {
        'A square': 'Diagonal cut makes rectangle.',
            'A triangle': 'Cut surface has four sides.',
                'A rhombus': 'Cut surface is rectangular.'
    },
    difficulty: 'medium',
        marks: 2,
            recommendedTime: 60
},
{
    id: 'cl7_ch15_t3_qm17',
        type: 'mcq',
            question: 'When three cubes of same size are placed in a row, what shape is seen from the side?',
                options: ['A rectangle with 1:3 ratio', 'A square', 'A rectangle with 3:1 ratio', 'Three separate squares'],
                    correctAnswer: 'A rectangle with 3:1 ratio',
                        explanation: 'Side view shows length three times the height, creating 3:1 rectangle. 📦📦📦',
                            wrongAnswerExplanations: {
        'A rectangle with 1:3 ratio': 'Width is three times height.',
            'A square': 'Length is three times height.',
                'Three separate squares': 'Appears as one rectangle.'
    },
    difficulty: 'medium',
        marks: 2,
            recommendedTime: 60
},
{
    id: 'cl7_ch15_t3_qm18',
        type: 'mcq',
            question: 'A pentagonal prism is cut perpendicular to its length. What shape is the cut surface?',
                options: ['A regular pentagon', 'A rectangle', 'An irregular pentagon', 'A circle'],
                    correctAnswer: 'A regular pentagon',
                        explanation: 'Perpendicular cut shows regular pentagonal cross-section. ⬠',
                            wrongAnswerExplanations: {
        'A rectangle': 'Cut shows pentagonal shape.',
            'An irregular pentagon': 'Pentagon is regular in prism.',
                'A circle': 'Prism has flat faces, not curved.'
    },
    difficulty: 'medium',
        marks: 2,
            recommendedTime: 60
},
{
    id: 'cl7_ch15_t3_qm19',
        type: 'mcq',
            question: 'If you look down at a triangular pyramid from directly above, what will you see?',
                options: ['A triangle with lines to center', 'Just a point', 'A triangle only', 'A hexagon'],
                    correctAnswer: 'A triangle with lines to center',
                        explanation: 'Top view shows triangular base with edges from apex to vertices. 🔺',
                            wrongAnswerExplanations: {
        'Just a point': 'Base is visible around apex.',
            'A triangle only': 'Edges to center are visible.',
                'A hexagon': 'Base is triangular.'
    },
    difficulty: 'medium',
        marks: 2,
            recommendedTime: 60
},
{
    id: 'cl7_ch15_t3_qm20',
        type: 'mcq',
            question: 'A rectangular prism has dimensions 2cm × 2cm × 4cm. How many of its views will show a square?',
                options: ['2', '1', '3', '0'],
                    correctAnswer: '2',
                        explanation: 'Two views show 2cm × 2cm square, third view shows 2cm × 4cm rectangle. 📦',
                            wrongAnswerExplanations: {
        '1': 'Two dimensions are equal, giving two square views.',
            '3': 'One view shows rectangle.',
                '0': 'Equal dimensions create square views.'
    },
    difficulty: 'medium',
        marks: 2,
            recommendedTime: 60
}
]; 