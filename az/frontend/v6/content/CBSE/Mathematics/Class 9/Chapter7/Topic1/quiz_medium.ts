import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch7_t1_qm1',
        type: 'mcq',
        question: 'In a triangle, if one angle is 70° and another is 30°, what is the measure of the third angle?',
        options: ['80°', '60°', '50°', '40°'],
        correctAnswer: '80°',
        explanation: 'The sum of all angles in a triangle is 180°. If two angles are 70° and 30°, then the third angle is 180° - (70° + 30°) = 180° - 100° = 80°.',
        wrongAnswerExplanations: {
            '60°': 'If the third angle is 60°, the sum would be 70° + 30° + 60° = 160°, which is less than 180°.',
            '50°': 'If the third angle is 50°, the sum would be 70° + 30° + 50° = 150°, which is less than 180°.',
            '40°': 'If the third angle is 40°, the sum would be 70° + 30° + 40° = 140°, which is less than 180°.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch7_t1_qm2',
        type: 'mcq',
        question: 'The perimeter of an equilateral triangle is 27 cm. What is the length of each side?',
        options: ['9 cm', '7 cm', '6 cm', '3 cm'],
        correctAnswer: '9 cm',
        explanation: 'In an equilateral triangle, all sides are equal. If the perimeter is 27 cm, then each side is 27 ÷ 3 = 9 cm.',
        wrongAnswerExplanations: {
            '7 cm': 'If each side is 7 cm, the perimeter would be 3 × 7 = 21 cm, not 27 cm.',
            '6 cm': 'If each side is 6 cm, the perimeter would be 3 × 6 = 18 cm, not 27 cm.',
            '3 cm': 'If each side is 3 cm, the perimeter would be 3 × 3 = 9 cm, not 27 cm.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch7_t1_qm3',
        type: 'mcq',
        question: 'Which of the following sets of lengths can form a triangle?',
        options: ['3 cm, 4 cm, 5 cm', '1 cm, 2 cm, 3 cm', '5 cm, 2 cm, 2 cm', '10 cm, 5 cm, 3 cm'],
        correctAnswer: '3 cm, 4 cm, 5 cm',
        explanation: 'For three lengths to form a triangle, the sum of any two sides must be greater than the third side. For 3 cm, 4 cm, 5 cm: 3 + 4 = 7 > 5, 3 + 5 = 8 > 4, 4 + 5 = 9 > 3. Therefore, these lengths can form a triangle.',
        wrongAnswerExplanations: {
            '1 cm, 2 cm, 3 cm': 'For these lengths, 1 + 2 = 3, which equals (not greater than) the third side. Therefore, these lengths cannot form a triangle.',
            '5 cm, 2 cm, 2 cm': 'For these lengths, 2 + 2 = 4, which is less than the third side (5). Therefore, these lengths cannot form a triangle.',
            '10 cm, 5 cm, 3 cm': 'For these lengths, 5 + 3 = 8, which is less than the third side (10). Therefore, these lengths cannot form a triangle.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch7_t1_qm4',
        type: 'mcq',
        question: 'The area of a triangle with base 6 cm and height 8 cm is:',
        options: ['24 cm²', '48 cm²', '12 cm²', '16 cm²'],
        correctAnswer: '24 cm²',
        explanation: 'The area of a triangle is (1/2) × base × height. Therefore, the area is (1/2) × 6 cm × 8 cm = 24 cm².',
        wrongAnswerExplanations: {
            '48 cm²': 'This is the product of the base and height without dividing by 2. The correct formula is (1/2) × base × height.',
            '12 cm²': 'This is half of the correct answer. The area is (1/2) × 6 cm × 8 cm = 24 cm².',
            '16 cm²': 'This is incorrect. The area is (1/2) × 6 cm × 8 cm = 24 cm².'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch7_t1_qm5',
        type: 'mcq',
        question: 'In a triangle, the exterior angle at one vertex is 120°. If one of the interior angles is 45°, what is the other interior angle?',
        options: ['75°', '105°', '30°', '60°'],
        correctAnswer: '75°',
        explanation: 'An exterior angle of a triangle is equal to the sum of the two non-adjacent interior angles. If the exterior angle is 120° and one interior angle is 45°, then the other interior angle is 120° - 45° = 75°.',
        wrongAnswerExplanations: {
            '105°': 'This is incorrect. The sum of all interior angles in a triangle is 180°, so the third angle would be 180° - (45° + 105°) = 30°, making the exterior angle 180° - 30° = 150°, not 120°.',
            '30°': 'This is incorrect. The exterior angle (120°) equals the sum of the two non-adjacent interior angles, so 120° = 45° + x, giving x = 75°.',
            '60°': 'This is incorrect. The exterior angle (120°) equals the sum of the two non-adjacent interior angles, so 120° = 45° + x, giving x = 75°.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch7_t1_qm6',
        type: 'mcq',
        question: 'A right-angled triangle has one angle as 90°. If another angle is 25°, what is the third angle?',
        options: ['65°', '55°', '75°', '115°'],
        correctAnswer: '65°',
        explanation: 'The sum of all angles in a triangle is 180°. If one angle is 90° and another is 25°, then the third angle is 180° - (90° + 25°) = 180° - 115° = 65°.',
        wrongAnswerExplanations: {
            '55°': 'If the third angle is 55°, the sum would be 90° + 25° + 55° = 170°, which is less than 180°.',
            '75°': 'If the third angle is 75°, the sum would be 90° + 25° + 75° = 190°, which exceeds 180°.',
            '115°': 'If the third angle is 115°, the sum would be 90° + 25° + 115° = 230°, which greatly exceeds 180°.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch7_t1_qm7',
        type: 'mcq',
        question: 'The sides of a triangle are in the ratio 3:4:5. If the perimeter of the triangle is 60 cm, what is the length of the shortest side?',
        options: ['12 cm', '15 cm', '16 cm', '20 cm'],
        correctAnswer: '12 cm',
        explanation: 'If the sides are in the ratio 3:4:5, let the sides be 3x, 4x, and 5x. The perimeter is 3x + 4x + 5x = 12x = 60 cm. Therefore, x = 5 cm. The shortest side is 3x = 3 × 5 cm = 15 cm.',
        wrongAnswerExplanations: {
            '15 cm': 'This is the length of the shortest side. If the sides are in the ratio 3:4:5 and the perimeter is 60 cm, then the sides are 15 cm, 20 cm, and 25 cm.',
            '16 cm': 'This is incorrect. If the sides are in the ratio 3:4:5 and the perimeter is 60 cm, then the sides are 15 cm, 20 cm, and 25 cm.',
            '20 cm': 'This is the length of the middle side, not the shortest side. If the sides are in the ratio 3:4:5 and the perimeter is 60 cm, then the sides are 15 cm, 20 cm, and 25 cm.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 90
    },
    {
        id: 'cl9_ch7_t1_qm8',
        type: 'mcq',
        question: 'Using Heron\'s formula, find the area of a triangle with sides 5 cm, 6 cm, and 7 cm.',
        options: ['14.7 cm²', '15 cm²', '16.2 cm²', '17.3 cm²'],
        correctAnswer: '14.7 cm²',
        explanation: 'Using Heron\'s formula, Area = √(s(s-a)(s-b)(s-c)), where s = (a+b+c)/2. Here, s = (5+6+7)/2 = 9. Area = √(9 × (9-5) × (9-6) × (9-7)) = √(9 × 4 × 3 × 2) = √216 ≈ 14.7 cm².',
        wrongAnswerExplanations: {
            '15 cm²': 'This is an approximation, but not the correct value. Using Heron\'s formula, the area is approximately 14.7 cm².',
            '16.2 cm²': 'This is incorrect. Using Heron\'s formula, the area is approximately 14.7 cm².',
            '17.3 cm²': 'This is incorrect. Using Heron\'s formula, the area is approximately 14.7 cm².'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 90
    },
    {
        id: 'cl9_ch7_t1_qm9',
        type: 'mcq',
        question: 'If two angles of a triangle are 55° and 65°, what type of triangle is it?',
        options: ['Acute-angled', 'Right-angled', 'Obtuse-angled', 'Equilateral'],
        correctAnswer: 'Acute-angled',
        explanation: 'The third angle of the triangle is 180° - (55° + 65°) = 180° - 120° = 60°. Since all three angles (55°, 65°, and 60°) are less than 90°, this is an acute-angled triangle.',
        wrongAnswerExplanations: {
            'Right-angled': 'A right-angled triangle has one angle of 90°. In this triangle, all angles are less than 90°.',
            'Obtuse-angled': 'An obtuse-angled triangle has one angle greater than 90°. In this triangle, all angles are less than 90°.',
            'Equilateral': 'An equilateral triangle has all angles equal to 60°. In this triangle, the angles are 55°, 65°, and 60°, which are not all equal.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch7_t1_qm10',
        type: 'mcq',
        question: 'In an isosceles triangle, if the equal sides are each 10 cm and the third side is 12 cm, what is the area of the triangle?',
        options: ['48 cm²', '40 cm²', '60 cm²', '36 cm²'],
        correctAnswer: '48 cm²',
        explanation: 'Using Heron\'s formula, Area = √(s(s-a)(s-b)(s-c)), where s = (a+b+c)/2. Here, s = (10+10+12)/2 = 16. Area = √(16 × (16-10) × (16-10) × (16-12)) = √(16 × 6 × 6 × 4) = √2304 = 48 cm².',
        wrongAnswerExplanations: {
            '40 cm²': 'This is incorrect. Using Heron\'s formula, the area is 48 cm².',
            '60 cm²': 'This is incorrect. Using Heron\'s formula, the area is 48 cm².',
            '36 cm²': 'This is incorrect. Using Heron\'s formula, the area is 48 cm².'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 90
    }
]; 