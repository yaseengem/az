import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch2_t2_qm1',
        type: "mcq",
        question: "Raju measured the height of a door as 2 m. Sita measured the same door as 195 cm. Who measured the door more accurately?",
        options: ["Raju", "Sita", "Both measured equally accurately", "Cannot be determined"],
        correctAnswer: "Sita",
        explanation: "Sita's measurement of 195 cm is more precise than Raju's 2 m (200 cm). It provides the exact measurement rather than rounding to the nearest meter.",
        wrongAnswerExplanations: {
            "Raju": "Raju's measurement of 2 m is less precise, as it could represent any length from 1.5 m to 2.5 m.",
            "Both measured equally accurately": "Sita's measurement provides more detail, making it more accurate.",
            "Cannot be determined": "We can determine which is more accurate by comparing the precision of the measurements."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch2_t2_qm2',
        type: "mcq",
        question: "Meena walks 1 km 500 m every day. Her friend Tina walks 1450 m every day. Who walks farther?",
        options: ["Meena", "Tina", "Both walk the same distance", "Cannot be determined"],
        correctAnswer: "Meena",
        explanation: "Meena walks 1 km 500 m = 1000 m + 500 m = 1500 m. Tina walks 1450 m. Since 1500 m > 1450 m, Meena walks farther.",
        wrongAnswerExplanations: {
            "Tina": "Tina walks 1450 m, which is less than Meena's 1500 m.",
            "Both walk the same distance": "Meena walks 1500 m while Tina walks 1450 m, so they walk different distances.",
            "Cannot be determined": "We can determine who walks farther by converting to the same unit and comparing."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch2_t2_qm3',
        type: "mcq",
        question: "A carpenter needs to cut a piece of wood that is 2 m 25 cm long into two equal pieces. How long will each piece be?",
        options: ["1 m 12.5 cm", "1 m 25 cm", "1 m 2.5 cm", "112.5 cm"],
        correctAnswer: "1 m 12.5 cm",
        explanation: "The total length is 2 m 25 cm = 200 cm + 25 cm = 225 cm. Dividing by 2: 225 cm ÷ 2 = 112.5 cm = 1 m 12.5 cm.",
        wrongAnswerExplanations: {
            "1 m 25 cm": "This would give a total of 2 m 50 cm when combined, not 2 m 25 cm.",
            "1 m 2.5 cm": "This is too short; it equals 102.5 cm, not 112.5 cm.",
            "112.5 cm": "This is correct, but the question asks for the answer in meters and centimeters."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch2_t2_qm4',
        type: "mcq",
        question: "A tailor needs 1 m 75 cm of cloth for one dress. How much cloth does he need for 3 such dresses?",
        options: ["3 m 75 cm", "4 m 25 cm", "5 m 25 cm", "5 m 15 cm"],
        correctAnswer: "5 m 25 cm",
        explanation: "For one dress: 1 m 75 cm = 175 cm. For 3 dresses: 175 cm × 3 = 525 cm = 5 m 25 cm.",
        wrongAnswerExplanations: {
            "3 m 75 cm": "This incorrectly adds 3 m and 75 cm instead of multiplying 1 m 75 cm by 3.",
            "4 m 25 cm": "This is not the correct calculation of 1 m 75 cm × 3.",
            "5 m 15 cm": "This is not the correct calculation of 1 m 75 cm × 3."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch2_t2_qm5',
        type: "mcq",
        question: "Rohan's height is 1 m 35 cm. His father's height is 1 m 80 cm. How much taller is Rohan's father?",
        options: ["45 cm", "4.5 m", "0.45 m", "145 cm"],
        correctAnswer: "45 cm",
        explanation: "Father's height - Rohan's height = 1 m 80 cm - 1 m 35 cm = 180 cm - 135 cm = 45 cm.",
        wrongAnswerExplanations: {
            "4.5 m": "4.5 m = 450 cm, which is much more than the difference.",
            "0.45 m": "0.45 m = 45 cm, which is correct, but the question asks for the answer in cm.",
            "145 cm": "This incorrectly adds 100 cm to the difference."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch2_t2_qm6',
        type: "mcq",
        question: "A ribbon is 5 m 25 cm long. If 2 m 75 cm is cut off, how much ribbon is left?",
        options: ["2 m 50 cm", "3 m 50 cm", "2 m 45 cm", "3 m"],
        correctAnswer: "2 m 50 cm",
        explanation: "Original length - cut length = 5 m 25 cm - 2 m 75 cm = 525 cm - 275 cm = 250 cm = 2 m 50 cm.",
        wrongAnswerExplanations: {
            "3 m 50 cm": "This incorrectly subtracts 2 m from 5 m and 25 cm from 75 cm.",
            "2 m 45 cm": "This is not the correct calculation of 5 m 25 cm - 2 m 75 cm.",
            "3 m": "This is not precise enough; the exact answer is 2 m 50 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch2_t2_qm7',
        type: "mcq",
        question: "Mira measured three ribbons: 1 m 20 cm, 95 cm, and 1 m 5 cm. What is the total length of all three ribbons?",
        options: ["3 m 20 cm", "3 m 30 cm", "3 m", "2 m 20 cm"],
        correctAnswer: "3 m 20 cm",
        explanation: "Total length = 1 m 20 cm + 95 cm + 1 m 5 cm = 120 cm + 95 cm + 105 cm = 320 cm = 3 m 20 cm.",
        wrongAnswerExplanations: {
            "3 m 30 cm": "This is not the correct sum of the three lengths.",
            "3 m": "This is not precise enough; the exact answer is 3 m 20 cm.",
            "2 m 20 cm": "This is too small for the sum of all three ribbons."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch2_t2_qm8',
        type: "mcq",
        question: "A snail crawls 5 cm in one minute. How far will it crawl in 1 hour?",
        options: ["60 cm", "3 m", "30 m", "300 cm"],
        correctAnswer: "300 cm",
        explanation: "In 1 hour = 60 minutes, the snail will crawl 5 cm × 60 = 300 cm = 3 m.",
        wrongAnswerExplanations: {
            "60 cm": "This incorrectly assumes the snail crawls 1 cm per minute instead of 5 cm.",
            "3 m": "3 m = 300 cm, which is correct, but the question asks for the answer in cm.",
            "30 m": "30 m = 3000 cm, which is too large. The snail crawls 300 cm in an hour."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch2_t2_qm9',
        type: "mcq",
        question: "The length of a rectangular field is 25 m and its width is 15 m. What is the perimeter of the field?",
        options: ["40 m", "80 m", "375 m", "375 cm"],
        correctAnswer: "80 m",
        explanation: "Perimeter of a rectangle = 2 × (length + width) = 2 × (25 m + 15 m) = 2 × 40 m = 80 m.",
        wrongAnswerExplanations: {
            "40 m": "This is just the sum of length and width, not the perimeter.",
            "375 m": "This is the area (25 m × 15 m), not the perimeter.",
            "375 cm": "This confuses area with perimeter and uses the wrong unit."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch2_t2_qm10',
        type: "mcq",
        question: "Riya starts from home and walks 250 m north, then 150 m east, and finally 100 m south. How far is she from her starting point?",
        options: ["150 m", "200 m", "250 m", "500 m"],
        correctAnswer: "200 m",
        explanation: "Riya is 150 m east and 150 m north of her starting point (250 m - 100 m = 150 m north). Using Pythagoras, the distance is √(150² + 150²) = √45000 = 212 m, which is closest to 200 m.",
        wrongAnswerExplanations: {
            "150 m": "This only considers the east direction, not the north direction.",
            "250 m": "This is the total north distance without considering the south movement and east movement.",
            "500 m": "This is the total distance walked (250 m + 150 m + 100 m), not the direct distance from start to end."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch2_t2_qm11',
        type: "mcq",
        question: "A wall is 2 m 50 cm tall. A ladder of length 3 m is placed against the wall. Will the ladder reach the top of the wall?",
        options: ["Yes, with 50 cm to spare", "Yes, with 5 cm to spare", "No, it is 50 cm too short", "Cannot be determined without knowing the distance from the wall"],
        correctAnswer: "Yes, with 50 cm to spare",
        explanation: "The wall is 2 m 50 cm = 250 cm tall. The ladder is 3 m = 300 cm long. Since 300 cm > 250 cm, the ladder will reach the top with 300 cm - 250 cm = 50 cm to spare.",
        wrongAnswerExplanations: {
            "Yes, with 5 cm to spare": "The difference is 50 cm, not 5 cm.",
            "No, it is 50 cm too short": "The ladder is 50 cm longer than needed, not shorter.",
            "Cannot be determined without knowing the distance from the wall": "This would be relevant for determining if the ladder can be positioned properly, but the question only asks if it's long enough to reach the top."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch2_t2_qm12',
        type: "mcq",
        question: "The distance from home to school is 1 km 200 m. If Rahul has already walked 750 m, how much farther does he need to walk?",
        options: ["450 m", "500 m", "250 m", "1950 m"],
        correctAnswer: "450 m",
        explanation: "Total distance - distance walked = 1 km 200 m - 750 m = 1200 m - 750 m = 450 m.",
        wrongAnswerExplanations: {
            "500 m": "This incorrectly calculates 1200 m - 750 m as 500 m instead of 450 m.",
            "250 m": "This incorrectly calculates the remaining distance.",
            "1950 m": "This incorrectly adds 1200 m and 750 m instead of subtracting."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch2_t2_qm13',
        type: "mcq",
        question: "A piece of string is 4 m 50 cm long. It is cut into 3 equal pieces. How long is each piece?",
        options: ["1 m 50 cm", "1 m 30 cm", "1 m 15 cm", "150 cm"],
        correctAnswer: "1 m 50 cm",
        explanation: "Total length = 4 m 50 cm = 450 cm. Length of each piece = 450 cm ÷ 3 = 150 cm = 1 m 50 cm.",
        wrongAnswerExplanations: {
            "1 m 30 cm": "This incorrectly calculates 4 m 50 cm ÷ 3.",
            "1 m 15 cm": "This incorrectly calculates 4 m 50 cm ÷ 3.",
            "150 cm": "This is correct, but the question asks for the answer in meters and centimeters."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch2_t2_qm14',
        type: "mcq",
        question: "Which is longer: 3 km or 3500 m?",
        options: ["3 km", "3500 m", "Both are equal", "Cannot be determined"],
        correctAnswer: "3500 m",
        explanation: "3 km = 3000 m. Since 3500 m > 3000 m, 3500 m is longer.",
        wrongAnswerExplanations: {
            "3 km": "3 km = 3000 m, which is less than 3500 m.",
            "Both are equal": "3 km = 3000 m, which is not equal to 3500 m.",
            "Cannot be determined": "We can determine which is longer by converting to the same unit and comparing."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch2_t2_qm15',
        type: "mcq",
        question: "A train is 250 m long. It passes through a tunnel of length 750 m. What is the total distance the train travels from the moment its front enters the tunnel until its rear exits the tunnel?",
        options: ["500 m", "750 m", "1000 m", "1250 m"],
        correctAnswer: "1000 m",
        explanation: "The train must travel the length of the tunnel (750 m) plus its own length (250 m) for the entire train to pass through, so 750 m + 250 m = 1000 m.",
        wrongAnswerExplanations: {
            "500 m": "This incorrectly calculates 750 m - 250 m, which is not the relevant calculation.",
            "750 m": "This is just the length of the tunnel, but the train also has to travel its own length.",
            "1250 m": "This incorrectly adds the tunnel length twice or performs some other calculation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch2_t2_qm16',
        type: "mcq",
        question: "If you cut a 5 m rope into pieces of 75 cm each, how many complete pieces will you get?",
        options: ["5", "6", "7", "8"],
        correctAnswer: "6",
        explanation: "5 m = 500 cm. Number of pieces = 500 cm ÷ 75 cm = 6.67, which means 6 complete pieces with some leftover.",
        wrongAnswerExplanations: {
            "5": "This is too few; 5 pieces would use only 5 × 75 cm = 375 cm of the rope.",
            "7": "This is too many; 7 pieces would require 7 × 75 cm = 525 cm, which is more than 5 m.",
            "8": "This is far too many; 8 pieces would require 8 × 75 cm = 600 cm, which is more than 5 m."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch2_t2_qm17',
        type: "mcq",
        question: "A student measures the length of her classroom as 8 m 75 cm. She then measures the width as 5 m 25 cm. What is the difference between the length and width?",
        options: ["3 m 50 cm", "3 m 25 cm", "4 m 50 cm", "350 cm"],
        correctAnswer: "3 m 50 cm",
        explanation: "Length - width = 8 m 75 cm - 5 m 25 cm = 875 cm - 525 cm = 350 cm = 3 m 50 cm.",
        wrongAnswerExplanations: {
            "3 m 25 cm": "This incorrectly subtracts 5 m 25 cm from 8 m 75 cm.",
            "4 m 50 cm": "This incorrectly calculates the difference between length and width.",
            "350 cm": "This is correct, but the question asks for the answer in meters and centimeters."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch2_t2_qm18',
        type: "mcq",
        question: "Mom is making a skirt that needs a ribbon around the edge. If the skirt has a waist of 60 cm and a length of 65 cm, how much ribbon will she need?",
        options: ["125 cm", "190 cm", "250 cm", "785 cm"],
        correctAnswer: "190 cm",
        explanation: "The ribbon goes around the waist and down both sides of the skirt's length, so she needs 60 cm + (65 cm × 2) = 60 cm + 130 cm = 190 cm of ribbon.",
        wrongAnswerExplanations: {
            "125 cm": "This incorrectly adds 60 cm and 65 cm.",
            "250 cm": "This might be assuming a circular skirt, which is not indicated in the question.",
            "785 cm": "This is not a reasonable calculation for the ribbon length."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch2_t2_qm19',
        type: "mcq",
        question: "Ram's height is 135 cm. The height of a door is 2 m 10 cm. How much taller is the door than Ram?",
        options: ["75 cm", "95 cm", "875 cm", "210 cm"],
        correctAnswer: "75 cm",
        explanation: "Door's height - Ram's height = 2 m 10 cm - 135 cm = 210 cm - 135 cm = 75 cm.",
        wrongAnswerExplanations: {
            "95 cm": "This incorrectly calculates the difference between the door and Ram's height.",
            "875 cm": "This is much too large; it may be attempting to add the heights instead of finding the difference.",
            "210 cm": "This is just the height of the door, not the difference between the door's height and Ram's height."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch2_t2_qm20',
        type: "mcq",
        question: "A flight of stairs has 15 steps. Each step is 25 cm high. What is the total height of the stairs?",
        options: ["3 m 75 cm", "3 m 25 cm", "4 m", "375 cm"],
        correctAnswer: "3 m 75 cm",
        explanation: "Total height = Number of steps × Height per step = 15 × 25 cm = 375 cm = 3 m 75 cm.",
        wrongAnswerExplanations: {
            "3 m 25 cm": "This incorrectly calculates 15 × 25 cm.",
            "4 m": "This is an incorrect conversion of 375 cm.",
            "375 cm": "This is correct, but the question asks for the answer in meters and centimeters."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];
