import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch13_t3_qe1',
    type: 'mcq',
    question: 'A solid consists of a hemisphere mounted on a cylinder of the same radius. If the radius is 7 cm and the height of the cylinder is 14 cm, the total surface area of the solid in cm² is:',
    options: ['924π', '735π', '770π', '693π'],
    correctAnswer: '693π',
    explanation: 'Total surface area = 2πr² + 2πrh + πr² = 3πr² + 2πrh = 3π(7)² + 2π(7)(14) = 147π + 196π = 693π cm²',
    wrongAnswerExplanations: {
      '924π': 'This incorrectly adds the curved surface area of hemisphere twice.',
      '735π': 'This incorrectly calculates the cylinder\'s curved surface area.',
      '770π': 'This incorrectly adds the circular base of the hemisphere.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch13_t3_qe2',
    type: 'mcq',
    question: 'A solid is made up of a cone placed on top of a cylinder with the same radius. If the radius is 5 cm, height of cone is 12 cm and height of cylinder is 8 cm, what is the total volume of the solid in cm³?',
    options: ['833.33π', '633.33π', '533.33π', '733.33π'],
    correctAnswer: '633.33π',
    explanation: 'Total volume = πr²h₁ + ⅓πr²h₂ = π(5)²(8) + ⅓π(5)²(12) = 200π + 100π = 300π cm³ = 633.33π cm³',
    wrongAnswerExplanations: {
      '833.33π': 'This incorrectly calculates the volume of the cone.',
      '533.33π': 'This uses incorrect formula for cylinder volume.',
      '733.33π': 'This adds an extra term in the calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch13_t3_qe3',
    type: 'mcq',
    question: 'A hemispherical bowl of radius 7 cm is filled with water. This water is poured into a cylindrical vessel with radius 3.5 cm. The height to which the water rises in the cylindrical vessel is:',
    options: ['18.67 cm', '14 cm', '28 cm', '21 cm'],
    correctAnswer: '28 cm',
    explanation: 'Volume of hemisphere = (2/3)πr³ = (2/3)π(7)³ cm³. Height in cylinder = Volume/πr² = [(2/3)π(7)³]/(π(3.5)²) = 28 cm',
    wrongAnswerExplanations: {
      '18.67 cm': 'This uses incorrect formula for hemisphere volume.',
      '14 cm': 'This assumes the hemisphere radius equals cylinder height.',
      '21 cm': 'This incorrectly calculates the ratio of cylinder to hemisphere radius.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch13_t3_qe4',
    type: 'mcq',
    question: 'A toy is shaped like a hemisphere surmounted on a right circular cone of the same radius. If the radius is 3.5 cm and the height of the cone is 7 cm, the total surface area of the toy is:',
    options: ['110 cm²', '66π cm²', '77π cm²', '88π cm²'],
    correctAnswer: '77π cm²',
    explanation: 'Total surface area = 2πr² (hemisphere) + πrl (cone) = 2π(3.5)² + π(3.5)(√(3.5² + 7²)) = 24.5π + 52.5π = 77π cm²',
    wrongAnswerExplanations: {
      '110 cm²': 'This is a numerical value without π, which is incorrect.',
      '66π cm²': 'This incorrectly calculates the slant height of cone.',
      '88π cm²': 'This incorrectly adds the base area of cone which is already included in hemisphere.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch13_t3_qe5',
    type: 'mcq',
    question: 'A solid consists of a cube with a hemisphere on top. If the edge of the cube is 14 cm, the total volume of the solid in cm³ is:',
    options: ['2744 + 1437.33π', '2744 + 1437.33', '2744 + 1436π', '2744 + 1436'],
    correctAnswer: '2744 + 1436π',
    explanation: 'Volume = l³ + (2/3)πr³ = (14)³ + (2/3)π(7)³ = 2744 + (2/3)π(343) = 2744 + 1436π cm³',
    wrongAnswerExplanations: {
      '2744 + 1437.33π': 'This incorrectly calculates the volume of hemisphere.',
      '2744 + 1437.33': 'This incorrectly approximates π and uses wrong hemisphere formula.',
      '2744 + 1436': 'This omits π in the final answer.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch13_t3_qe6',
    type: 'mcq',
    question: 'A solid is formed by joining a hemisphere and a cone with the same base radius. If the radius is 7 cm and the height of the cone is 24 cm, the total volume of the solid is:',
    options: ['1232π cm³', '1078π cm³', '1540π cm³', '1386π cm³'],
    correctAnswer: '1386π cm³',
    explanation: 'Volume = (2/3)πr³ + (1/3)πr²h = (2/3)π(7)³ + (1/3)π(7)²(24) = 686π + 392π = 1386π cm³',
    wrongAnswerExplanations: {
      '1232π cm³': 'This incorrectly calculates the volume of hemisphere.',
      '1078π cm³': 'This uses incorrect formula for both shapes.',
      '1540π cm³': 'This includes the base area in both calculations.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch13_t3_qe7',
    type: 'mcq',
    question: 'A solid consists of a cylinder with a cone on top. The total height is 21 cm and the height of the cone is 6 cm. If the radius is 7 cm, the total surface area is:',
    options: ['714π cm²', '665π cm²', '637π cm²', '686π cm²'],
    correctAnswer: '686π cm²',
    explanation: 'Surface area = πr² + 2πrh₁ + πrl = π(7)² + 2π(7)(15) + π(7)(√(7² + 6²)) = 49π + 210π + 427π = 686π cm²',
    wrongAnswerExplanations: {
      '714π cm²': 'This incorrectly calculates the slant height of cone.',
      '665π cm²': 'This omits the base area of cylinder.',
      '637π cm²': 'This uses incorrect measurements in calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch13_t3_qe8',
    type: 'mcq',
    question: 'A solid is formed by attaching two hemispheres of radius 3.5 cm on the ends of a cylinder of the same radius and height 7 cm. The volume of this solid is:',
    options: ['336.39 cm³', '359.33 cm³', '323.17 cm³', '269.33π cm³'],
    correctAnswer: '269.33π cm³',
    explanation: 'Volume = πr²h + (4/3)πr³ = π(3.5)²(7) + (4/3)π(3.5)³ = 85.75π + 57π = 142.75π = 269.33π cm³',
    wrongAnswerExplanations: {
      '336.39 cm³': 'This approximates π incorrectly and uses wrong hemisphere formula.',
      '359.33 cm³': 'This approximates π incorrectly and miscalculates hemisphere volume.',
      '323.17 cm³': 'This gives a decimal approximation with incorrect calculations.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch13_t3_qe9',
    type: 'mcq',
    question: 'A solid is formed by removing a cone from a hemisphere of the same radius. If the radius is 7 cm and the height of cone is 7 cm, the volume of the resulting solid is:',
    options: ['571.67π cm³', '412π cm³', '686π cm³', '176.33π cm³'],
    correctAnswer: '176.33π cm³',
    explanation: 'Volume = (2/3)πr³ - (1/3)πr²h = (2/3)π(7)³ - (1/3)π(7)²(7) = 686π - 114.33π = 176.33π cm³',
    wrongAnswerExplanations: {
      '571.67π cm³': 'This calculates the cone volume incorrectly.',
      '412π cm³': 'This uses incorrect formula for hemisphere.',
      '686π cm³': 'This is only the volume of the hemisphere without removing the cone.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch13_t3_qe10',
    type: 'mcq',
    question: 'A cup is in the form of a hemisphere with a cylindrical portion attached to it. If the radius is 3.5 cm and the height of the cylindrical portion is 7 cm, the capacity of the cup in mL is:',
    options: ['385.88', '385.88π', '269.33', '269.33π'],
    correctAnswer: '269.33π',
    explanation: 'Volume = πr²h + (2/3)πr³ = π(3.5)²(7) + (2/3)π(3.5)³ = 85.75π + 28.58π = 114.33π cm³ = 269.33π mL',
    wrongAnswerExplanations: {
      '385.88': 'This incorrectly calculates and omits π.',
      '385.88π': 'This uses incorrect calculations for both shapes.',
      '269.33': 'This is the correct numerical value but omits π.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch13_t3_qe11',
    type: 'mcq',
    question: 'A decorative item is made by placing a cone on a sphere such that the base of the cone is a great circle of the sphere. If the radius of the sphere is 4.2 cm and the slant height of the cone is 10 cm, the total surface area is:',
    options: ['297.92 cm²', '272.16π cm²', '310.52π cm²', '241.78π cm²'],
    correctAnswer: '241.78π cm²',
    explanation: 'Surface area = 4πr² + πrl - πr² = 4π(4.2)² + π(4.2)(10) - π(4.2)² = 70.56π + 42π - 17.64π = 241.78π cm²',
    wrongAnswerExplanations: {
      '297.92 cm²': 'This approximates π incorrectly and uses wrong formula.',
      '272.16π cm²': 'This incorrectly adds the base area of cone twice.',
      '310.52π cm²': 'This incorrectly calculates the sphere surface area.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch13_t3_qe12',
    type: 'mcq',
    question: 'A container is formed by combining a hemisphere and a cylinder with the same radius. If the radius is 7 cm and the height of the cylinder is 21 cm, the capacity of the container in liters is approximately:',
    options: ['2.54', '3.23', '4.78', '5.68'],
    correctAnswer: '3.23',
    explanation: 'Volume = πr²h + (2/3)πr³ = π(7)²(21) + (2/3)π(7)³ = 1029π + 228.67π = 1257.67π cm³ ≈ 3.23 liters',
    wrongAnswerExplanations: {
      '2.54': 'This incorrectly calculates the cylinder volume.',
      '4.78': 'This uses incorrect formula for hemisphere volume.',
      '5.68': 'This incorrectly adds both volumes.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch13_t3_qe13',
    type: 'mcq',
    question: 'A solid is formed by removing a cylinder from a cube such that the cylinder\'s axis passes through the centers of two opposite faces. If the cube edge is 14 cm and the cylinder radius is 3.5 cm, the volume of the remaining solid in cm³ is:',
    options: ['2744 - 538.72', '2744 - 538.72π', '2744 - 539.98', '2744 - 539.98π'],
    correctAnswer: '2744 - 538.72π',
    explanation: 'Volume = l³ - πr²h = (14)³ - π(3.5)²(14) = 2744 - 538.72π cm³',
    wrongAnswerExplanations: {
      '2744 - 538.72': 'This omits π in cylinder volume calculation.',
      '2744 - 539.98': 'This uses incorrect calculation and omits π.',
      '2744 - 539.98π': 'This incorrectly calculates the cylinder volume.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch13_t3_qe14',
    type: 'mcq',
    question: 'A solid iron pole consists of a cylinder with hemisphere at each end. The length of the cylinder is 84 cm and the diameter is 14 cm. The volume of the pole is:',
    options: ['13090 cm³', '14696 cm³', '12936π cm³', '4312π cm³'],
    correctAnswer: '4312π cm³',
    explanation: 'Volume = πr²h + (4/3)πr³ = π(7)²(84) + (4/3)π(7)³ = 4116π + 196π = 4312π cm³',
    wrongAnswerExplanations: {
      '13090 cm³': 'This approximates π incorrectly and uses wrong formula.',
      '14696 cm³': 'This approximates π incorrectly and uses incorrect calculation.',
      '12936π cm³': 'This incorrectly calculates the cylinder volume.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch13_t3_qe15',
    type: 'mcq',
    question: 'A composite figure consists of a cube with a quarter cylinder removed from one corner. If the cube\'s edge length is 7 cm, the volume of the resulting solid is:',
    options: ['343 - 38.5π cm³', '343 - 19.25π cm³', '343 - 28.875π cm³', '343 - 9.625π cm³'],
    correctAnswer: '343 - 38.5π cm³',
    explanation: 'Volume = l³ - (1/4)πr²h = (7)³ - (1/4)π(7)²(7) = 343 - 38.5π cm³',
    wrongAnswerExplanations: {
      '343 - 19.25π cm³': 'This incorrectly calculates the cylinder as half instead of quarter.',
      '343 - 28.875π cm³': 'This uses incorrect fraction for quarter cylinder.',
      '343 - 9.625π cm³': 'This incorrectly calculates the volume of quarter cylinder.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch13_t3_qe16',
    type: 'mcq',
    question: 'A tent is in the shape of a cylinder surmounted by a cone. If the diameter of the base is 24 m, the height of the cylinder is 11 m, and the slant height of the cone is 13 m, the total canvas required to make the tent is:',
    options: ['1172.16 m²', '1112 m²', '1172.16π m²', '1112π m²'],
    correctAnswer: '1112π m²',
    explanation: 'Area = 2πrh₁ + πrl = 2π(12)(11) + π(12)(13) = 264π + 156π = 420π m² = 1112π m²',
    wrongAnswerExplanations: {
      '1172.16 m²': 'This approximates π incorrectly and uses wrong formula.',
      '1112 m²': 'This is the correct numerical value but omits π.',
      '1172.16π m²': 'This incorrectly calculates the total surface area.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch13_t3_qe17',
    type: 'mcq',
    question: 'A solid consists of a cone on top of a hemisphere. If both have the same radius of 7 cm and the cone\'s height is 24 cm, the total surface area is:',
    options: ['847π cm²', '770π cm²', '707π cm²', '619π cm²'],
    correctAnswer: '707π cm²',
    explanation: 'Surface area = 2πr² + πrl = 2π(7)² + π(7)(√(7² + 24²)) = 98π + 609π = 707π cm²',
    wrongAnswerExplanations: {
      '847π cm²': 'This calculates the slant height of cone incorrectly.',
      '770π cm²': 'This adds the base area of cone which is already counted in hemisphere.',
      '619π cm²': 'This uses incorrect formula for hemisphere surface area.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch13_t3_qe18',
    type: 'mcq',
    question: 'A cylindrical hole is drilled through a wooden cube with edge 14 cm. If the axis of the hole passes through the center of the cube and the radius of the hole is 2.1 cm, the volume of the remaining wood is:',
    options: ['2744 - 194.04π cm³', '2744 - 184.04π cm³', '2744 - 193.94π cm³', '2744 - 193.04π cm³'],
    correctAnswer: '2744 - 193.04π cm³',
    explanation: 'Volume = l³ - πr²h = (14)³ - π(2.1)²(14) = 2744 - 193.04π cm³',
    wrongAnswerExplanations: {
      '2744 - 194.04π cm³': 'This incorrectly calculates the cylinder volume.',
      '2744 - 184.04π cm³': 'This uses incorrect radius in calculation.',
      '2744 - 193.94π cm³': 'This has an arithmetic error in calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch13_t3_qe19',
    type: 'mcq',
    question: 'A wooden toy is made by joining a cone and a hemisphere with the same radius. If the radius is 3.5 cm and the cone\'s height is 12 cm, the total volume of the toy is:',
    options: ['179.67π cm³', '153.42π cm³', '172.67π cm³', '162.17π cm³'],
    correctAnswer: '162.17π cm³',
    explanation: 'Volume = (1/3)πr²h + (2/3)πr³ = (1/3)π(3.5)²(12) + (2/3)π(3.5)³ = 49π + 28.58π = 162.17π cm³',
    wrongAnswerExplanations: {
      '179.67π cm³': 'This incorrectly calculates the cone volume.',
      '153.42π cm³': 'This uses incorrect formula for hemisphere volume.',
      '172.67π cm³': 'This adds extra volume in calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch13_t3_qe20',
    type: 'mcq',
    question: 'A solid is formed by placing a cone on top of a cylinder with the same radius. If the radius is 10.5 cm, the height of the cylinder is 15.75 cm, and the height of the cone is 21 cm, the total volume of the solid is:',
    options: ['7870.5π cm³', '7173.75π cm³', '7613.25π cm³', '7470.75π cm³'],
    correctAnswer: '7470.75π cm³',
    explanation: 'Volume = πr²h₁ + (1/3)πr²h₂ = π(10.5)²(15.75) + (1/3)π(10.5)²(21) = 1732.5π + 770.75π = 7470.75π cm³',
    wrongAnswerExplanations: {
      '7870.5π cm³': 'This incorrectly calculates the cone volume.',
      '7173.75π cm³': 'This uses incorrect formula for cylinder volume.',
      '7613.25π cm³': 'This has an arithmetic error in calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  }
];
