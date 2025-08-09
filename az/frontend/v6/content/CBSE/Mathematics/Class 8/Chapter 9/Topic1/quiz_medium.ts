import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch9_t1_qm1',
        type: 'mcq',
        question: 'A cube has a surface area of 294 cm². What is its edge length?',
        options: ['7 cm', '6 cm', '8 cm', '5 cm'],
        correctAnswer: '7 cm',
        explanation: 'Surface area = 6a², so a = √(294/6) = 7 cm.',
        wrongAnswerExplanations: {
            '6 cm': 'Incorrect calculation of edge length.',
            '8 cm': 'Incorrect calculation of edge length.',
            '5 cm': 'Incorrect calculation of edge length.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch9_t1_qm2',
        type: 'mcq',
        question: 'The volume of a cuboid is 360 cm³. If its length and width are 10 cm and 6 cm, what is its height?',
        options: ['6 cm', '5 cm', '4 cm', '7 cm'],
        correctAnswer: '6 cm',
        explanation: 'Volume = l × w × h, so h = 360/(10×6) = 6 cm.',
        wrongAnswerExplanations: {
            '5 cm': 'Incorrect calculation of height.',
            '4 cm': 'Incorrect calculation of height.',
            '7 cm': 'Incorrect calculation of height.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch9_t1_qm3',
        type: 'mcq',
        question: 'A cylinder has a height of 14 cm and a base radius of 3.5 cm. What is its total surface area?',
        options: ['330 cm²', '324.5 cm²', '333.2 cm²', '308 cm²'],
        correctAnswer: '330 cm²',
        explanation: 'TSA = 2πr(r + h) = 2×22/7×3.5×(3.5+14) = 330 cm².',
        wrongAnswerExplanations: {
            '324.5 cm²': 'Incorrect calculation of TSA.',
            '333.2 cm²': 'Incorrect calculation of TSA.',
            '308 cm²': 'Incorrect calculation of TSA.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch9_t1_qm4',
        type: 'mcq',
        question: 'If the volume of a cube is 512 cm³, what is its surface area?',
        options: ['384 cm²', '256 cm²', '288 cm²', '324 cm²'],
        correctAnswer: '384 cm²',
        explanation: 'Edge = ∛512 = 8 cm, Surface area = 6×8² = 384 cm².',
        wrongAnswerExplanations: {
            '256 cm²': 'Incorrect calculation of surface area.',
            '288 cm²': 'Incorrect calculation of surface area.',
            '324 cm²': 'Incorrect calculation of surface area.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch9_t1_qm5',
        type: 'mcq',
        question: 'A cuboid has dimensions 12 cm × 8 cm × 5 cm. What is its total surface area?',
        options: ['472 cm²', '484 cm²', '496 cm²', '512 cm²'],
        correctAnswer: '472 cm²',
        explanation: 'TSA = 2(lw + lh + wh) = 2(96 + 60 + 40) = 472 cm².',
        wrongAnswerExplanations: {
            '484 cm²': 'Incorrect calculation of TSA.',
            '496 cm²': 'Incorrect calculation of TSA.',
            '512 cm²': 'Incorrect calculation of TSA.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch9_t1_qm6',
        type: 'mcq',
        question: 'The lateral surface area of a cylinder is 440 cm² and its height is 10 cm. What is the radius?',
        options: ['7 cm', '6 cm', '8 cm', '5 cm'],
        correctAnswer: '7 cm',
        explanation: 'LSA = 2πrh, so r = 440/(2×22/7×10) = 7 cm.',
        wrongAnswerExplanations: {
            '6 cm': 'Incorrect calculation of radius.',
            '8 cm': 'Incorrect calculation of radius.',
            '5 cm': 'Incorrect calculation of radius.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch9_t1_qm7',
        type: 'mcq',
        question: 'A cube has a volume of 1000 cm³. What is its edge length?',
        options: ['10 cm', '12 cm', '8 cm', '9 cm'],
        correctAnswer: '10 cm',
        explanation: 'Edge = ∛1000 = 10 cm.',
        wrongAnswerExplanations: {
            '12 cm': 'Incorrect calculation of edge length.',
            '8 cm': 'Incorrect calculation of edge length.',
            '9 cm': 'Incorrect calculation of edge length.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch9_t1_qm8',
        type: 'mcq',
        question: 'The total surface area of a cuboid is 236 cm². If its length, width, and height are 8 cm, 4 cm, and h cm, what is h?',
        options: ['5 cm', '6 cm', '7 cm', '8 cm'],
        correctAnswer: '5 cm',
        explanation: '236 = 2(8×4 + 8×h + 4×h) → h = 5 cm.',
        wrongAnswerExplanations: {
            '6 cm': 'Incorrect calculation of height.',
            '7 cm': 'Incorrect calculation of height.',
            '8 cm': 'Incorrect calculation of height.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch9_t1_qm9',
        type: 'mcq',
        question: 'A cylinder has a volume of 616 cm³ and height 8 cm. What is its radius?',
        options: ['5 cm', '4 cm', '6 cm', '7 cm'],
        correctAnswer: '5 cm',
        explanation: 'V = πr²h → r² = 616/(π×8) = 24.5 → r = 5 cm.',
        wrongAnswerExplanations: {
            '4 cm': 'Incorrect calculation of radius.',
            '6 cm': 'Incorrect calculation of radius.',
            '7 cm': 'Incorrect calculation of radius.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch9_t1_qm10',
        type: 'mcq',
        question: 'If the surface area of a cube is 486 cm², what is its volume?',
        options: ['729 cm³', '512 cm³', '343 cm³', '216 cm³'],
        correctAnswer: '729 cm³',
        explanation: 'Edge = √(486/6) = 9 cm, Volume = 9³ = 729 cm³.',
        wrongAnswerExplanations: {
            '512 cm³': 'Incorrect calculation of volume.',
            '343 cm³': 'Incorrect calculation of volume.',
            '216 cm³': 'Incorrect calculation of volume.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch9_t1_qm11',
        type: 'mcq',
        question: 'A cuboid has a diagonal of 13 cm and sides 5 cm and 12 cm. What is its height?',
        options: ['12 cm', '5 cm', '13 cm', '6 cm'],
        correctAnswer: '6 cm',
        explanation: 'Diagonal² = l² + w² + h² → h = 6 cm.',
        wrongAnswerExplanations: {
            '12 cm': 'Incorrect calculation of height.',
            '5 cm': 'Incorrect calculation of height.',
            '13 cm': 'Incorrect calculation of height.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch9_t1_qm12',
        type: 'mcq',
        question: 'The curved surface area of a cylinder is 264 cm² and its height is 8 cm. What is its radius?',
        options: ['5.25 cm', '6 cm', '4 cm', '5 cm'],
        correctAnswer: '5.25 cm',
        explanation: 'CSA = 2πrh → r = 264/(2×22/7×8) = 5.25 cm.',
        wrongAnswerExplanations: {
            '6 cm': 'Incorrect calculation of radius.',
            '4 cm': 'Incorrect calculation of radius.',
            '5 cm': 'Incorrect calculation of radius.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch9_t1_qm13',
        type: 'mcq',
        question: 'A cube has a diagonal of 10.4 cm. What is its edge length (rounded to 1 decimal)?',
        options: ['6 cm', '7.5 cm', '8 cm', '9 cm'],
        correctAnswer: '6 cm',
        explanation: 'Diagonal = a√3 → a = 10.4/√3 ≈ 6 cm.',
        wrongAnswerExplanations: {
            '7.5 cm': 'Incorrect calculation of edge length.',
            '8 cm': 'Incorrect calculation of edge length.',
            '9 cm': 'Incorrect calculation of edge length.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch9_t1_qm14',
        type: 'mcq',
        question: 'The total surface area of a cylinder is 462 cm² and its height is 7 cm. What is its radius?',
        options: ['7 cm', '6 cm', '5 cm', '8 cm'],
        correctAnswer: '7 cm',
        explanation: 'TSA = 2πr(r+h) → r = 7 cm.',
        wrongAnswerExplanations: {
            '6 cm': 'Incorrect calculation of radius.',
            '5 cm': 'Incorrect calculation of radius.',
            '8 cm': 'Incorrect calculation of radius.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch9_t1_qm15',
        type: 'mcq',
        question: 'A cuboid has a total surface area of 382 cm². If its length and width are 11 cm and 6 cm, what is its height?',
        options: ['7 cm', '6 cm', '5 cm', '8 cm'],
        correctAnswer: '7 cm',
        explanation: 'TSA = 2(lw + lh + wh) → h = 7 cm.',
        wrongAnswerExplanations: {
            '6 cm': 'Incorrect calculation of height.',
            '5 cm': 'Incorrect calculation of height.',
            '8 cm': 'Incorrect calculation of height.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch9_t1_qm16',
        type: 'mcq',
        question: 'The volume of a cylinder is 770 cm³ and its height is 7 cm. What is its radius?',
        options: ['5.9 cm', '6 cm', '5 cm', '7 cm'],
        correctAnswer: '5.9 cm',
        explanation: 'V = πr²h → r² = 770/(π×7) ≈ 35, r ≈ 5.9 cm.',
        wrongAnswerExplanations: {
            '6 cm': 'Incorrect calculation of radius.',
            '5 cm': 'Incorrect calculation of radius.',
            '7 cm': 'Incorrect calculation of radius.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch9_t1_qm17',
        type: 'mcq',
        question: 'A cube has a surface area of 150 cm². What is its volume?',
        options: ['125 cm³', '100 cm³', '64 cm³', '216 cm³'],
        correctAnswer: '125 cm³',
        explanation: 'Edge = √(150/6) = 5 cm, Volume = 5³ = 125 cm³.',
        wrongAnswerExplanations: {
            '100 cm³': 'Incorrect calculation of volume.',
            '64 cm³': 'Incorrect calculation of volume.',
            '216 cm³': 'Incorrect calculation of volume.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch9_t1_qm18',
        type: 'mcq',
        question: 'A cuboid has dimensions 9 cm × 6 cm × 4 cm. What is its diagonal length?',
        options: ['11.2 cm', '10 cm', '12 cm', '13 cm'],
        correctAnswer: '11.2 cm',
        explanation: 'Diagonal = √(9² + 6² + 4²) = √133 ≈ 11.2 cm.',
        wrongAnswerExplanations: {
            '10 cm': 'Incorrect calculation of diagonal length.',
            '12 cm': 'Incorrect calculation of diagonal length.',
            '13 cm': 'Incorrect calculation of diagonal length.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch9_t1_qm19',
        type: 'mcq',
        question: 'The curved surface area of a cylinder is 352 cm² and its radius is 8 cm. What is its height?',
        options: ['7 cm', '6 cm', '5 cm', '8 cm'],
        correctAnswer: '7 cm',
        explanation: 'CSA = 2πrh → h = 352/(2×π×8) = 7 cm.',
        wrongAnswerExplanations: {
            '6 cm': 'Incorrect calculation of height.',
            '5 cm': 'Incorrect calculation of height.',
            '8 cm': 'Incorrect calculation of height.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch9_t1_qm20',
        type: 'mcq',
        question: 'A cube has a volume of 216 cm³. What is its diagonal length?',
        options: ['10.4 cm', '12 cm', '9 cm', '8 cm'],
        correctAnswer: '10.4 cm',
        explanation: 'Edge = ∛216 = 6 cm, Diagonal = 6√3 ≈ 10.4 cm.',
        wrongAnswerExplanations: {
            '12 cm': 'Incorrect calculation of diagonal length.',
            '9 cm': 'Incorrect calculation of diagonal length.',
            '8 cm': 'Incorrect calculation of diagonal length.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    }
]; 