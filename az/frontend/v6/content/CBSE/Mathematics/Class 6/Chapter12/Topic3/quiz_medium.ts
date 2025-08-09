import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch12_t3_qm1',
        type: 'mcq',
        question: 'A map has a scale of 1:25000. If two cities are 8.5 cm apart on the map, what is their actual distance?',
        options: [
            '2.125 km',
            '21.25 km',
            '212.5 m',
            '2125 m'
        ],
        correctAnswer: '2.125 km',
        explanation: '8.5 cm × 25000 = 212500 cm = 2.125 km.',
        wrongAnswerExplanations: {
            '21.25 km': '212500 cm is equal to 2.125 km, not 21.25 km.',
            '212.5 m': '212500 cm is equal to 2.125 km, not 212.5 m.',
            '2125 m': '212500 cm is equal to 2.125 km, not 2125 m.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t3_qm2',
        type: 'mcq',
        question: 'A model train is made at scale 1:87. If the real train is 26.1 m long, how long is the model?',
        options: [
            '30 cm',
            '3 cm',
            '300 cm',
            '0.3 cm'
        ],
        correctAnswer: '30 cm',
        explanation: '26.1 m = 2610 cm; 2610 ÷ 87 = 30 cm.',
        wrongAnswerExplanations: {
            '3 cm': '2610 cm divided by 87 = 30 cm.',
            '300 cm': '2610 cm divided by 87 = 30 cm.',
            '0.3 cm': '2610 cm divided by 87 = 30 cm.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t3_qm3',
        type: 'mcq',
        question: 'On a map with scale 1:15000, a rectangular park measures 4.5 cm by 3.2 cm. What is its actual area?',
        options: [
            '32400 m²',
            '3240 m²',
            '324 m²',
            '32.4 m²'
        ],
        correctAnswer: '32400 m²',
        explanation: 'Length: 4.5 cm × 15000 = 67500 cm = 675 m; Width: 3.2 cm × 15000 = 48000 cm = 480 m; Area = 675 × 480 = 324000 m².',
        wrongAnswerExplanations: {
            '3240 m²': 'The area is 324000 m², not 3240 m².',
            '324 m²': 'The area is 324000 m², not 324 m².',
            '32.4 m²': 'The area is 324000 m², not 32.4 m².'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t3_qm4',
        type: 'mcq',
        question: 'A model building is 12 cm tall. If the scale is 1:250, what is the actual height of the building?',
        options: [
            '30 m',
            '3 m',
            '300 m',
            '0.3 m'
        ],
        correctAnswer: '30 m',
        explanation: '12 cm × 250 = 3000 cm = 30 m.',
        wrongAnswerExplanations: {
            '3 m': '3000 cm is equal to 30 m, not 3 m.',
            '300 m': '3000 cm is equal to 30 m, not 300 m.',
            '0.3 m': '3000 cm is equal to 30 m, not 0.3 m.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t3_qm5',
        type: 'mcq',
        question: 'Two towns are 7.5 km apart. On a map, they are 3 cm apart. What is the map\'s scale?',
        options: [
            '1:250000',
            '1:25000',
            '1:2500',
            '1:250'
        ],
        correctAnswer: '1:250000',
        explanation: '7.5 km = 750000 cm; Scale = 3:750000 = 1:250000.',
        wrongAnswerExplanations: {
            '1:25000': '7.5 km = 750000 cm, scale is 1:250000.',
            '1:2500': '7.5 km = 750000 cm, scale is 1:250000.',
            '1:250': '7.5 km = 750000 cm, scale is 1:250000.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t3_qm6',
        type: 'mcq',
        question: 'A model car is 8 cm long. If the scale is 1:24, what is the actual length of the car?',
        options: [
            '1.92 m',
            '19.2 m',
            '0.192 m',
            '192 m'
        ],
        correctAnswer: '1.92 m',
        explanation: '8 cm × 24 = 192 cm = 1.92 m.',
        wrongAnswerExplanations: {
            '19.2 m': '192 cm is equal to 1.92 m, not 19.2 m.',
            '0.192 m': '192 cm is equal to 1.92 m, not 0.192 m.',
            '192 m': '192 cm is equal to 1.92 m, not 192 m.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t3_qm7',
        type: 'mcq',
        question: 'On a map with scale 1:50000, a circular lake has a diameter of 2.4 cm. What is its actual area?',
        options: [
            '1.13 km²',
            '11.3 km²',
            '113 m²',
            '1130 m²'
        ],
        correctAnswer: '1.13 km²',
        explanation: 'Diameter: 2.4 cm × 50000 = 120000 cm = 1.2 km; Radius = 0.6 km; Area = π × (0.6)² ≈ 1.13 km².',
        wrongAnswerExplanations: {
            '11.3 km²': 'The area is approximately 1.13 km², not 11.3 km².',
            '113 m²': 'The area is approximately 1.13 km², not 113 m².',
            '1130 m²': 'The area is approximately 1.13 km², not 1130 m².'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t3_qm8',
        type: 'mcq',
        question: 'A model airplane is made at scale 1:72. If the real airplane has a wingspan of 36 m, what is the model\'s wingspan?',
        options: [
            '50 cm',
            '5 cm',
            '500 cm',
            '0.5 cm'
        ],
        correctAnswer: '50 cm',
        explanation: '36 m = 3600 cm; 3600 ÷ 72 = 50 cm.',
        wrongAnswerExplanations: {
            '5 cm': '3600 cm divided by 72 = 50 cm.',
            '500 cm': '3600 cm divided by 72 = 50 cm.',
            '0.5 cm': '3600 cm divided by 72 = 50 cm.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t3_qm9',
        type: 'mcq',
        question: 'On a map with scale 1:100000, a rectangular field measures 3.5 cm by 2.8 cm. What is its actual perimeter?',
        options: [
            '12.6 km',
            '126 km',
            '1.26 km',
            '1260 m'
        ],
        correctAnswer: '12.6 km',
        explanation: 'Length: 3.5 cm × 100000 = 350000 cm = 3.5 km; Width: 2.8 cm × 100000 = 280000 cm = 2.8 km; Perimeter = 2 × (3.5 + 2.8) = 12.6 km.',
        wrongAnswerExplanations: {
            '126 km': 'The perimeter is 12.6 km, not 126 km.',
            '1.26 km': 'The perimeter is 12.6 km, not 1.26 km.',
            '1260 m': 'The perimeter is 12.6 km, not 1260 m.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t3_qm10',
        type: 'mcq',
        question: 'A model ship is made at scale 1:200. If the real ship is 45 m long, how long is the model?',
        options: [
            '22.5 cm',
            '2.25 cm',
            '225 cm',
            '0.225 cm'
        ],
        correctAnswer: '22.5 cm',
        explanation: '45 m = 4500 cm; 4500 ÷ 200 = 22.5 cm.',
        wrongAnswerExplanations: {
            '2.25 cm': '4500 cm divided by 200 = 22.5 cm.',
            '225 cm': '4500 cm divided by 200 = 22.5 cm.',
            '0.225 cm': '4500 cm divided by 200 = 22.5 cm.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t3_qm11',
        type: 'mcq',
        question: 'On a map with scale 1:25000, a triangular park has sides of 3 cm, 4 cm, and 5 cm. What is its actual area?',
        options: [
            '37500 m²',
            '3750 m²',
            '375 m²',
            '37.5 m²'
        ],
        correctAnswer: '37500 m²',
        explanation: 'Base: 4 cm × 25000 = 100000 cm = 1000 m; Height: 3 cm × 25000 = 75000 cm = 750 m; Area = (1000 × 750) ÷ 2 = 375000 m².',
        wrongAnswerExplanations: {
            '3750 m²': 'The area is 375000 m², not 3750 m².',
            '375 m²': 'The area is 375000 m², not 375 m².',
            '37.5 m²': 'The area is 375000 m², not 37.5 m².'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t3_qm12',
        type: 'mcq',
        question: 'A model building is made at scale 1:150. If the real building has a volume of 3375 m³, what is the model\'s volume?',
        options: [
            '1 cm³',
            '10 cm³',
            '100 cm³',
            '1000 cm³'
        ],
        correctAnswer: '1000 cm³',
        explanation: 'Scale factor for volume is (1/150)³ = 1/3375000; 3375 m³ = 3375000000 cm³; 3375000000 ÷ 3375000 = 1000 cm³.',
        wrongAnswerExplanations: {
            '1 cm³': 'The volume is 1000 cm³, not 1 cm³.',
            '10 cm³': 'The volume is 1000 cm³, not 10 cm³.',
            '100 cm³': 'The volume is 1000 cm³, not 100 cm³.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t3_qm13',
        type: 'mcq',
        question: 'On a map with scale 1:50000, a road is 6.5 cm long. What is its actual length?',
        options: [
            '3.25 km',
            '32.5 km',
            '325 m',
            '3250 m'
        ],
        correctAnswer: '3.25 km',
        explanation: '6.5 cm × 50000 = 325000 cm = 3.25 km.',
        wrongAnswerExplanations: {
            '32.5 km': '325000 cm is equal to 3.25 km, not 32.5 km.',
            '325 m': '325000 cm is equal to 3.25 km, not 325 m.',
            '3250 m': '325000 cm is equal to 3.25 km, not 3250 m.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t3_qm14',
        type: 'mcq',
        question: 'A model train is made at scale 1:87. If the real train weighs 87 tonnes, what is the model\'s weight?',
        options: [
            '1.32 kg',
            '13.2 kg',
            '0.132 kg',
            '132 g'
        ],
        correctAnswer: '1.32 kg',
        explanation: 'Scale factor for weight is (1/87)³ = 1/658503; 87 tonnes = 87000 kg; 87000 ÷ 658503 ≈ 0.132 kg.',
        wrongAnswerExplanations: {
            '13.2 kg': 'The weight is approximately 0.132 kg, not 13.2 kg.',
            '0.132 kg': 'The weight is approximately 0.132 kg, not 0.132 kg.',
            '132 g': 'The weight is approximately 0.132 kg, not 132 g.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t3_qm15',
        type: 'mcq',
        question: 'On a map with scale 1:100000, a circular park has a circumference of 6.28 cm. What is its actual area?',
        options: [
            '3.14 km²',
            '31.4 km²',
            '314 m²',
            '3140 m²'
        ],
        correctAnswer: '3.14 km²',
        explanation: 'Circumference: 6.28 cm × 100000 = 628000 cm = 6.28 km; Radius = 6.28 ÷ (2π) ≈ 1 km; Area = π × (1)² ≈ 3.14 km².',
        wrongAnswerExplanations: {
            '31.4 km²': 'The area is approximately 3.14 km², not 31.4 km².',
            '314 m²': 'The area is approximately 3.14 km², not 314 m².',
            '3140 m²': 'The area is approximately 3.14 km², not 3140 m².'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t3_qm16',
        type: 'mcq',
        question: 'A model building is made at scale 1:200. If the real building has a surface area of 800 m², what is the model\'s surface area?',
        options: [
            '200 cm²',
            '20 cm²',
            '2000 cm²',
            '2 cm²'
        ],
        correctAnswer: '200 cm²',
        explanation: 'Scale factor for area is (1/200)² = 1/40000; 800 m² = 8000000 cm²; 8000000 ÷ 40000 = 200 cm².',
        wrongAnswerExplanations: {
            '20 cm²': 'The area is 200 cm², not 20 cm².',
            '2000 cm²': 'The area is 200 cm², not 2000 cm².',
            '2 cm²': 'The area is 200 cm², not 2 cm².'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t3_qm17',
        type: 'mcq',
        question: 'On a map with scale 1:25000, a rectangular field has an area of 12 cm². What is its actual area?',
        options: [
            '750000 m²',
            '75000 m²',
            '7500 m²',
            '750 m²'
        ],
        correctAnswer: '750000 m²',
        explanation: 'Area scale factor is (25000)² = 625000000; 12 cm² × 625000000 = 7500000000 cm² = 750000 m².',
        wrongAnswerExplanations: {
            '75000 m²': 'The area is 750000 m², not 75000 m².',
            '7500 m²': 'The area is 750000 m², not 7500 m².',
            '750 m²': 'The area is 750000 m², not 750 m².'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t3_qm18',
        type: 'mcq',
        question: 'A model car is made at scale 1:24. If the real car has a fuel tank capacity of 48 liters, what is the model\'s capacity?',
        options: [
            '3.47 ml',
            '34.7 ml',
            '347 ml',
            '3470 ml'
        ],
        correctAnswer: '3.47 ml',
        explanation: 'Scale factor for volume is (1/24)³ = 1/13824; 48 liters = 48000 ml; 48000 ÷ 13824 ≈ 3.47 ml.',
        wrongAnswerExplanations: {
            '34.7 ml': 'The capacity is approximately 3.47 ml, not 34.7 ml.',
            '347 ml': 'The capacity is approximately 3.47 ml, not 347 ml.',
            '3470 ml': 'The capacity is approximately 3.47 ml, not 3470 ml.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t3_qm19',
        type: 'mcq',
        question: 'On a map with scale 1:50000, a triangular park has an area of 4.5 cm². What is its actual area?',
        options: [
            '1125000 m²',
            '112500 m²',
            '11250 m²',
            '1125 m²'
        ],
        correctAnswer: '1125000 m²',
        explanation: 'Area scale factor is (50000)² = 2500000000; 4.5 cm² × 2500000000 = 11250000000 cm² = 1125000 m².',
        wrongAnswerExplanations: {
            '112500 m²': 'The area is 1125000 m², not 112500 m².',
            '11250 m²': 'The area is 1125000 m², not 11250 m².',
            '1125 m²': 'The area is 1125000 m², not 1125 m².'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t3_qm20',
        type: 'mcq',
        question: 'A model airplane is made at scale 1:72. If the real airplane has a wingspan of 36 m and weighs 72 tonnes, what is the model\'s weight?',
        options: [
            '1.93 kg',
            '19.3 kg',
            '0.193 kg',
            '193 g'
        ],
        correctAnswer: '1.93 kg',
        explanation: 'Scale factor for weight is (1/72)³ = 1/373248; 72 tonnes = 72000 kg; 72000 ÷ 373248 ≈ 0.193 kg.',
        wrongAnswerExplanations: {
            '19.3 kg': 'The weight is approximately 0.193 kg, not 19.3 kg.',
            '0.193 kg': 'The weight is approximately 0.193 kg, not 0.193 kg.',
            '193 g': 'The weight is approximately 0.193 kg, not 193 g.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    }
]; 