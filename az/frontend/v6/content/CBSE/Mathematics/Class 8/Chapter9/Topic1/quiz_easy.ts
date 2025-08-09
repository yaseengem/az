import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch9_t1_qe1',
        type: 'mcq',
        question: 'What is the surface area of a cube with edge length 5 cm?',
        options: ['150 cm²', '125 cm²', '100 cm²', '75 cm²'],
        correctAnswer: '150 cm²',
        explanation: 'Surface area of cube = 6 × edge² = 6 × 5² = 150 cm² 📦',
        wrongAnswerExplanations: {
            '125 cm²': 'This is the volume, not the surface area.',
            '100 cm²': 'Incorrect calculation of surface area.',
            '75 cm²': 'Incorrect calculation of surface area.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch9_t1_qe2',
        type: 'mcq',
        question: 'The volume of a cuboid is 120 cm³. If length is 6 cm and width is 4 cm, what is its height?',
        options: ['5 cm', '6 cm', '4 cm', '3 cm'],
        correctAnswer: '5 cm',
        explanation: 'Volume = l × w × h, so 120 = 6 × 4 × h, therefore h = 5 cm 📏',
        wrongAnswerExplanations: {
            '6 cm': 'This is the length, not the height.',
            '4 cm': 'This is the width, not the height.',
            '3 cm': 'Incorrect calculation of height.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch9_t1_qe3',
        type: 'mcq',
        question: 'A cylinder has radius 7 cm and height 10 cm. What is its volume?',
        options: ['1540 cm³', '1440 cm³', '1340 cm³', '1240 cm³'],
        correctAnswer: '1540 cm³',
        explanation: 'Volume = πr²h = π × 7² × 10 = 1540 cm³ 🌟',
        wrongAnswerExplanations: {
            '1440 cm³': 'Incorrect calculation of volume.',
            '1340 cm³': 'Incorrect calculation of volume.',
            '1240 cm³': 'Incorrect calculation of volume.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch9_t1_qe4',
        type: 'mcq',
        question: 'The total surface area of a cube is 96 cm². What is its edge length?',
        options: ['4 cm', '6 cm', '8 cm', '2 cm'],
        correctAnswer: '4 cm',
        explanation: '96 = 6a², where a is edge length. So a = 4 cm 📐',
        wrongAnswerExplanations: {
            '6 cm': 'This is incorrect because 6² is not equal to 96.',
            '8 cm': 'This is incorrect because 8² is not equal to 96.',
            '2 cm': 'This is incorrect because 2² is not equal to 96.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch9_t1_qe5',
        type: 'mcq',
        question: 'What is the lateral surface area of a cylinder with radius 5 cm and height 12 cm?',
        options: ['377 cm²', '357 cm²', '337 cm²', '317 cm²'],
        correctAnswer: '377 cm²',
        explanation: 'Lateral surface area = 2πrh = 2 × π × 5 × 12 = 377 cm² 🎯',
        wrongAnswerExplanations: {
            '357 cm²': 'Incorrect calculation of lateral surface area.',
            '337 cm²': 'Incorrect calculation of lateral surface area.',
            '317 cm²': 'Incorrect calculation of lateral surface area.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch9_t1_qe6',
        type: 'mcq',
        question: 'A cuboid has length 8 cm, width 6 cm, and height 4 cm. Find its volume.',
        options: ['192 cm³', '182 cm³', '172 cm³', '162 cm³'],
        correctAnswer: '192 cm³',
        explanation: 'Volume = l × w × h = 8 × 6 × 4 = 192 cm³ 📦',
        wrongAnswerExplanations: {
            '182 cm³': 'Incorrect calculation of volume.',
            '172 cm³': 'Incorrect calculation of volume.',
            '162 cm³': 'Incorrect calculation of volume.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch9_t1_qe7',
        type: 'mcq',
        question: 'The volume of a cube is 125 cm³. What is its surface area?',
        options: ['150 cm²', '125 cm²', '100 cm²', '175 cm²'],
        correctAnswer: '150 cm²',
        explanation: 'Edge = ∛125 = 5 cm, Surface area = 6 × 5² = 150 cm² 🎨',
        wrongAnswerExplanations: {
            '125 cm²': 'This is the volume, not the surface area.',
            '100 cm²': 'Incorrect calculation of surface area.',
            '175 cm²': 'Incorrect calculation of surface area.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch9_t1_qe8',
        type: 'mcq',
        question: 'What is the total surface area of a cylinder with radius 3 cm and height 8 cm?',
        options: ['208 cm²', '198 cm²', '188 cm²', '178 cm²'],
        correctAnswer: '208 cm²',
        explanation: 'TSA = 2πr(r + h) = 2π × 3(3 + 8) = 208 cm² 📏',
        wrongAnswerExplanations: {
            '198 cm²': 'Incorrect calculation of total surface area.',
            '188 cm²': 'Incorrect calculation of total surface area.',
            '178 cm²': 'Incorrect calculation of total surface area.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch9_t1_qe9',
        type: 'mcq',
        question: 'A cube has surface area 24 cm². What is its volume?',
        options: ['8 cm³', '12 cm³', '6 cm³', '4 cm³'],
        correctAnswer: '8 cm³',
        explanation: 'Edge = √(24÷6) = 2 cm, Volume = 2³ = 8 cm³ 🎯',
        wrongAnswerExplanations: {
            '12 cm³': 'Incorrect calculation of volume.',
            '6 cm³': 'Incorrect calculation of volume.',
            '4 cm³': 'Incorrect calculation of volume.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch9_t1_qe10',
        type: 'mcq',
        question: 'The volume of a cylinder is 314 cm³ and height is 10 cm. What is its radius?',
        options: ['3 cm', '4 cm', '5 cm', '6 cm'],
        correctAnswer: '3 cm',
        explanation: '314 = πr² × 10, so r = 3 cm 📐',
        wrongAnswerExplanations: {
            '4 cm': 'Incorrect calculation of radius.',
            '5 cm': 'Incorrect calculation of radius.',
            '6 cm': 'Incorrect calculation of radius.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch9_t1_qe11',
        type: 'mcq',
        question: 'What is the lateral surface area of a cube with edge 6 cm?',
        options: ['144 cm²', '136 cm²', '216 cm²', '156 cm²'],
        correctAnswer: '144 cm²',
        explanation: 'Lateral surface area = 4 × edge² = 4 × 6² = 144 cm² 🎨',
        wrongAnswerExplanations: {
            '136 cm²': 'Incorrect calculation of lateral surface area.',
            '216 cm²': 'Incorrect calculation of lateral surface area.',
            '156 cm²': 'Incorrect calculation of lateral surface area.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch9_t1_qe12',
        type: 'mcq',
        question: 'A cuboid has length 5 cm, width 4 cm, and height 3 cm. What is its total surface area?',
        options: ['94 cm²', '84 cm²', '74 cm²', '64 cm²'],
        correctAnswer: '94 cm²',
        explanation: 'TSA = 2(lw + lh + wh) = 2(20 + 15 + 12) = 94 cm² 📦',
        wrongAnswerExplanations: {
            '84 cm²': 'Incorrect calculation of total surface area.',
            '74 cm²': 'Incorrect calculation of total surface area.',
            '64 cm²': 'Incorrect calculation of total surface area.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch9_t1_qe13',
        type: 'mcq',
        question: 'The radius of a cylinder is 4 cm and height is 9 cm. What is its curved surface area?',
        options: ['226.2 cm²', '216.2 cm²', '206.2 cm²', '196.2 cm²'],
        correctAnswer: '226.2 cm²',
        explanation: 'CSA = 2πrh = 2 × π × 4 × 9 = 226.2 cm² 🎯',
        wrongAnswerExplanations: {
            '216.2 cm²': 'Incorrect calculation of curved surface area.',
            '206.2 cm²': 'Incorrect calculation of curved surface area.',
            '196.2 cm²': 'Incorrect calculation of curved surface area.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch9_t1_qe14',
        type: 'mcq',
        question: 'If the volume of a cube is 216 cm³, what is its edge length?',
        options: ['6 cm', '8 cm', '4 cm', '5 cm'],
        correctAnswer: '6 cm',
        explanation: 'Edge = ∛216 = 6 cm 📏',
        wrongAnswerExplanations: {
            '8 cm': 'Incorrect calculation of edge length.',
            '4 cm': 'Incorrect calculation of edge length.',
            '5 cm': 'Incorrect calculation of edge length.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch9_t1_qe15',
        type: 'mcq',
        question: 'A cylinder and a cube have the same volume of 343 cm³. If cube edge is 7 cm, what is cylinder height if its radius is 3.5 cm?',
        options: ['9 cm', '8 cm', '7 cm', '10 cm'],
        correctAnswer: '9 cm',
        explanation: '343 = πr²h, with r = 3.5, so h = 9 cm 🌟',
        wrongAnswerExplanations: {
            '8 cm': 'Incorrect calculation of height.',
            '7 cm': 'Incorrect calculation of height.',
            '10 cm': 'Incorrect calculation of height.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch9_t1_qe16',
        type: 'mcq',
        question: 'What is the ratio of surface areas of two cubes with edges 3 cm and 6 cm?',
        options: ['1:4', '1:2', '1:3', '1:6'],
        correctAnswer: '1:4',
        explanation: 'Ratio = (3²):(6²) = 9:36 = 1:4 📊',
        wrongAnswerExplanations: {
            '1:2': 'Incorrect ratio calculation.',
            '1:3': 'Incorrect ratio calculation.',
            '1:6': 'Incorrect ratio calculation.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch9_t1_qe17',
        type: 'mcq',
        question: 'A cuboid has dimensions 6 cm × 5 cm × 4 cm. What is its diagonal length?',
        options: ['9 cm', '8 cm', '7 cm', '10 cm'],
        correctAnswer: '9 cm',
        explanation: 'Diagonal = √(6² + 5² + 4²) = 9 cm 📐',
        wrongAnswerExplanations: {
            '8 cm': 'Incorrect calculation of diagonal length.',
            '7 cm': 'Incorrect calculation of diagonal length.',
            '10 cm': 'Incorrect calculation of diagonal length.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch9_t1_qe18',
        type: 'mcq',
        question: 'The surface area of a cube is 600 cm². What is its volume?',
        options: ['1000 cm³', '900 cm³', '800 cm³', '700 cm³'],
        correctAnswer: '1000 cm³',
        explanation: 'Edge = √(600÷6) = 10 cm, Volume = 10³ = 1000 cm³ 🎯',
        wrongAnswerExplanations: {
            '900 cm³': 'Incorrect calculation of volume.',
            '800 cm³': 'Incorrect calculation of volume.',
            '700 cm³': 'Incorrect calculation of volume.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch9_t1_qe19',
        type: 'mcq',
        question: 'A cylinder has diameter 8 cm and height 7 cm. What is its volume?',
        options: ['352 cm³', '342 cm³', '332 cm³', '322 cm³'],
        correctAnswer: '352 cm³',
        explanation: 'Volume = π(4)²7 = 352 cm³ (radius = diameter÷2) 📦',
        wrongAnswerExplanations: {
            '342 cm³': 'Incorrect calculation of volume.',
            '332 cm³': 'Incorrect calculation of volume.',
            '322 cm³': 'Incorrect calculation of volume.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch9_t1_qe20',
        type: 'mcq',
        question: 'What is the ratio of volumes of two cylinders with same height if their radii are in ratio 1:2?',
        options: ['1:4', '1:2', '1:3', '1:8'],
        correctAnswer: '1:4',
        explanation: 'Volume ratio = r₁²:r₂² = 1:4 (as r₁:r₂ = 1:2) 🎨',
        wrongAnswerExplanations: {
            '1:2': 'Incorrect volume ratio calculation.',
            '1:3': 'Incorrect volume ratio calculation.',
            '1:8': 'Incorrect volume ratio calculation.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 2
    }
]; 