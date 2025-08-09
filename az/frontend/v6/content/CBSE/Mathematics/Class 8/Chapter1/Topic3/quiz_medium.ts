import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch1_t3_qm1',
        type: "mcq",
        question: "If points A(-2) and B(4) are marked on a number line, and point C divides AB internally in the ratio 3:2, what is the coordinate of C?",
        options: ["0", "1", "2", "-1"],
        correctAnswer: "1",
        explanation: "Using section formula: C = (-2 × 2 + 4 × 3) ÷ (3 + 2) = (-4 + 12) ÷ 5 = 8 ÷ 5 = 1. The point divides the line segment in the given ratio. 📏",
        wrongAnswerExplanations: {
            "0": "0 divides the segment in a different ratio.",
            "2": "2 is too far to the right for the given ratio.",
            "-1": "-1 is too far to the left for the given ratio."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch1_t3_qm2',
        type: "mcq",
        question: "Three consecutive points P, Q, and R on a number line are such that PQ = QR = 2 units. If P is at -3, what is the coordinate of R?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "1",
        explanation: "Since P is at -3 and PQ = 2 units, Q is at -1. Since QR = 2 units, R is at 1. Moving right by equal distances gives equal jumps on the number line. 🔢",
        wrongAnswerExplanations: {
            "2": "2 would mean QR > 2 units.",
            "3": "3 would mean QR > 2 units.",
            "4": "4 would mean QR > 2 units."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch1_t3_qm3',
        type: "mcq",
        question: "Points A(x) and B(2x) are marked on a number line such that the distance between them is 3 units. What is the value of x?",
        options: ["1", "2", "3", "-3"],
        correctAnswer: "-3",
        explanation: "Distance = |2x - x| = |x| = 3. Since B is to the right of A, x must be negative for 2x to be greater than x. Therefore, x = -3. 🎯",
        wrongAnswerExplanations: {
            "1": "If x = 1, distance would be |2 - 1| = 1 unit.",
            "2": "If x = 2, distance would be |4 - 2| = 2 units.",
            "3": "If x = 3, distance would be |6 - 3| = 3 units, but A would be right of B."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch1_t3_qm4',
        type: "mcq",
        question: "If point P divides the line segment between -4 and 2 in the ratio 2:3, what is its coordinate?",
        options: ["-2", "-1.6", "-1", "0"],
        correctAnswer: "-1.6",
        explanation: "Using section formula: P = (-4 × 3 + 2 × 2) ÷ (2 + 3) = (-12 + 4) ÷ 5 = -8 ÷ 5 = -1.6. This point divides the segment internally in the ratio 2:3. 📊",
        wrongAnswerExplanations: {
            "-2": "-2 divides the segment in a different ratio.",
            "-1": "-1 divides the segment in a different ratio.",
            "0": "0 divides the segment in a different ratio."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch1_t3_qm5',
        type: "mcq",
        question: "On a number line, points A(-1), B(3), and C(x) are such that B is the midpoint of AC. What is the value of x?",
        options: ["5", "6", "7", "8"],
        correctAnswer: "7",
        explanation: "If B(3) is the midpoint of AC, then x + (-1) = 2 × 3. This means x - 1 = 6, so x = 7. The midpoint divides the segment into two equal parts. 🔍",
        wrongAnswerExplanations: {
            "5": "5 would make B too close to A.",
            "6": "6 would make B not the midpoint.",
            "8": "8 would make B too close to C."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch1_t3_qm6',
        type: "mcq",
        question: "If points P(a) and Q(b) are 5 units apart on a number line and their midpoint is at 2, which of these could be the values of a and b?",
        options: ["a = 0, b = 5", "a = -1, b = 4", "a = -0.5, b = 4.5", "a = 1, b = 6"],
        correctAnswer: "a = -0.5, b = 4.5",
        explanation: "Midpoint = (a + b)/2 = 2 and |b - a| = 5. Solving these equations: a + b = 4 and b - a = 5. Therefore, a = -0.5 and b = 4.5. 🧮",
        wrongAnswerExplanations: {
            "a = 0, b = 5": "This gives midpoint at 2.5, not 2.",
            "a = -1, b = 4": "This gives midpoint at 1.5, not 2.",
            "a = 1, b = 6": "This gives midpoint at 3.5, not 2."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch1_t3_qm7',
        type: "mcq",
        question: "Three points A, B, and C are marked on a number line such that AB = 2.4 units and BC = 1.8 units. If A is at -3.5, what could be the coordinate of C?",
        options: ["0.7", "0.5", "0.3", "0.1"],
        correctAnswer: "0.7",
        explanation: "From A(-3.5), moving 2.4 units right gives B at -1.1. From B(-1.1), moving 1.8 units right gives C at 0.7. Moving right means adding the distances. 📏",
        wrongAnswerExplanations: {
            "0.5": "This would make BC ≠ 1.8 units.",
            "0.3": "This would make BC < 1.8 units.",
            "0.1": "This would make BC < 1.8 units."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch1_t3_qm8',
        type: "mcq",
        question: "Points P and Q divide the line segment between -2 and 4 into three equal parts. What are their coordinates?",
        options: ["P = 0, Q = 2", "P = -1, Q = 3", "P = 0, Q = 3", "P = -1, Q = 2"],
        correctAnswer: "P = 0, Q = 2",
        explanation: "The segment length is 6 units. Dividing into 3 equal parts means each part is 2 units. So P is 2 units right of -2 (at 0), and Q is 2 units right of P (at 2). 📊",
        wrongAnswerExplanations: {
            "P = -1, Q = 3": "This doesn't create equal parts.",
            "P = 0, Q = 3": "This makes the second part larger than the others.",
            "P = -1, Q = 2": "This doesn't create equal parts."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch1_t3_qm9',
        type: "mcq",
        question: "If point A is at -2.5 and point B is at 1.5 on a number line, which point divides AB in the ratio 3:2 from A?",
        options: ["-0.9", "-0.5", "0", "0.3"],
        correctAnswer: "-0.9",
        explanation: "Using section formula: (-2.5 × 2 + 1.5 × 3) ÷ (3 + 2) = (-5 + 4.5) ÷ 5 = -0.5 ÷ 5 = -0.9. This point divides AB internally in ratio 3:2. 🔢",
        wrongAnswerExplanations: {
            "-0.5": "This point divides AB in a different ratio.",
            "0": "This point divides AB in a different ratio.",
            "0.3": "This point divides AB in a different ratio."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch1_t3_qm10',
        type: "mcq",
        question: "Points A(-1), B(3), and C(7) are marked on a number line. Which point D would make AB:BC = 1:2?",
        options: ["D = 5", "D = 4", "D = 2", "D = 1"],
        correctAnswer: "D = 1",
        explanation: "For AB:BC = 1:2, B must be twice as far from C as from A. Distance AB = 4 units, so BC must be 8 units. Therefore, D must be at 1 to make this ratio. 📏",
        wrongAnswerExplanations: {
            "D = 5": "This would not create the ratio 1:2.",
            "D = 4": "This would not create the ratio 1:2.",
            "D = 2": "This would not create the ratio 1:2."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch1_t3_qm11',
        type: "mcq",
        question: "If points A(x-2), B(x), and C(x+2) are consecutive points on a number line, what is the value of x that makes B the origin?",
        options: ["0", "2", "-2", "4"],
        correctAnswer: "0",
        explanation: "If B is at the origin (0), then x = 0. This makes A at -2 and C at 2, creating symmetrical points around the origin. The points are equally spaced. 🎯",
        wrongAnswerExplanations: {
            "2": "This would place B at 2, not at the origin.",
            "-2": "This would place B at -2, not at the origin.",
            "4": "This would place B at 4, not at the origin."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch1_t3_qm12',
        type: "mcq",
        question: "Points P and Q divide the line segment between -3 and 9 into three equal parts. What is PQ?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4",
        explanation: "Total length = 9 - (-3) = 12 units. Dividing into 3 equal parts means each part is 4 units. Therefore, PQ = 4 units. Equal parts have equal lengths. 📊",
        wrongAnswerExplanations: {
            "3": "This would make the parts unequal.",
            "5": "This would make the parts unequal.",
            "6": "This would make the parts too large."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch1_t3_qm13',
        type: "mcq",
        question: "If A(-2) and B(6) are marked on a number line, which point C would make AC:CB = 2:3?",
        options: ["0", "1", "2", "3"],
        correctAnswer: "1",
        explanation: "Using section formula: C = (-2 × 3 + 6 × 2) ÷ (2 + 3) = (-6 + 12) ÷ 5 = 6 ÷ 5 = 1. This point divides AB in ratio 2:3. 🔢",
        wrongAnswerExplanations: {
            "0": "This point would not create the ratio 2:3.",
            "2": "This point would not create the ratio 2:3.",
            "3": "This point would not create the ratio 2:3."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch1_t3_qm14',
        type: "mcq",
        question: "Three points A, B, and C are marked on a number line such that AB = 3.6 units and BC = 2.4 units. If C is at 5, what is the coordinate of A?",
        options: ["-1", "0", "1", "2"],
        correctAnswer: "-1",
        explanation: "Working backwards: From C(5), moving 2.4 units left gives B at 2.6. From B(2.6), moving 3.6 units left gives A at -1. Moving left means subtracting. 📏",
        wrongAnswerExplanations: {
            "0": "This would make AB < 3.6 units.",
            "1": "This would make AB < 3.6 units.",
            "2": "This would make AB < 3.6 units."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch1_t3_qm15',
        type: "mcq",
        question: "Points A(-4) and B(8) are marked on a number line. Point P divides AB externally in the ratio 3:2. What is the coordinate of P?",
        options: ["14", "16", "20", "24"],
        correctAnswer: "20",
        explanation: "For external division in ratio 3:2, P = (-4 × -2 + 8 × 3) ÷ (3 - 2) = (8 + 24) ÷ 1 = 20. External division means P lies outside AB. 📊",
        wrongAnswerExplanations: {
            "14": "This point would not create the correct external ratio.",
            "16": "This point would not create the correct external ratio.",
            "24": "This point would not create the correct external ratio."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch1_t3_qm16',
        type: "mcq",
        question: "If points A(2x), B(3x), and C(4x) are consecutive points on a number line and BC = 6 units, what is the value of x?",
        options: ["2", "3", "4", "6"],
        correctAnswer: "6",
        explanation: "BC = 4x - 3x = x = 6 units. Therefore, x = 6. This makes A at 12, B at 18, and C at 24, with BC = 6 units. 🔢",
        wrongAnswerExplanations: {
            "2": "This would make BC = 2 units, not 6.",
            "3": "This would make BC = 3 units, not 6.",
            "4": "This would make BC = 4 units, not 6."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch1_t3_qm17',
        type: "mcq",
        question: "Points A(-1.5) and B(2.5) are marked on a number line. Point P divides AB in the ratio k:1 and is located at 1.5. What is the value of k?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "3",
        explanation: "Using section formula: 1.5 = (-1.5 × 1 + 2.5 × k) ÷ (k + 1). Solving this equation gives k = 3. The point P divides AB internally in ratio 3:1. 🎯",
        wrongAnswerExplanations: {
            "2": "This ratio would place P at a different point.",
            "4": "This ratio would place P at a different point.",
            "5": "This ratio would place P at a different point."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch1_t3_qm18',
        type: "mcq",
        question: "Three points A, B, and C are marked on a number line such that AB:BC = 2:3. If A is at -6 and C is at 9, what is the coordinate of B?",
        options: ["0", "1", "2", "3"],
        correctAnswer: "0",
        explanation: "Total length AC = 15 units. Dividing in ratio 2:3 means AB = 6 units and BC = 9 units. From A(-6), moving 6 units right gives B at 0. 📏",
        wrongAnswerExplanations: {
            "1": "This would not maintain the ratio 2:3.",
            "2": "This would not maintain the ratio 2:3.",
            "3": "This would not maintain the ratio 2:3."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch1_t3_qm19',
        type: "mcq",
        question: "Points A(-2), B(1), and C(7) are marked on a number line. Which point D would make AB:CD = 1:2?",
        options: ["D = 4", "D = 5", "D = 6", "D = 8"],
        correctAnswer: "D = 4",
        explanation: "AB = 3 units, so CD must be 6 units for ratio 1:2. From C(7), moving back 6 units gives D at 4. The ratio of distances must be 1:2. 🔢",
        wrongAnswerExplanations: {
            "D = 5": "This would not create the ratio 1:2.",
            "D = 6": "This would not create the ratio 1:2.",
            "D = 8": "This would not create the ratio 1:2."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch1_t3_qm20',
        type: "mcq",
        question: "If points P(x-3), Q(x), and R(x+3) are marked on a number line and Q is at 2, what is PR?",
        options: ["3", "6", "9", "12"],
        correctAnswer: "6",
        explanation: "If Q is at 2, then x = 2. Therefore, P is at -1 and R is at 5. PR = |5 - (-1)| = |5 + 1| = 6 units. Distance is always positive. 📊",
        wrongAnswerExplanations: {
            "3": "3 is half of the actual distance.",
            "9": "9 is more than the actual distance.",
            "12": "12 is twice the actual distance."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 