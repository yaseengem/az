import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch13_t3_qm1',
    type: 'mcq',
    question: 'A solid is formed by removing a cone from a cylinder with the same base and same height. If the radius is 7 cm and height is 24 cm, the volume of the remaining solid is:',
    options: ['784π cm³', '1176π cm³', '392π cm³', '880π cm³'],
    correctAnswer: '784π cm³',
    explanation: 'Volume = πr²h - (1/3)πr²h = πr²h(1 - 1/3) = (2/3)πr²h = (2/3)π(7)²(24) = 784π cm³',
    wrongAnswerExplanations: {
      '1176π cm³': 'This is the volume of the cylinder without removing the cone.',
      '392π cm³': 'This is the volume of the cone that is removed.',
      '880π cm³': 'This uses incorrect calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t3_qm2',
    type: 'mcq',
    question: 'A solid consists of a hemisphere attached to a cone with the same base. The radius is 7 cm and the total height is 31 cm. The total surface area of the solid in cm² is:',
    options: ['747π', '707π', '732π', '721π'],
    correctAnswer: '747π',
    explanation: 'Total height = 7 + 24 (cone). Surface area = 2πr² + πrl = 2π(7)² + π(7)(25) = 98π + 175π = 747π cm²',
    wrongAnswerExplanations: {
      '707π': 'This incorrectly calculates the slant height of cone.',
      '732π': 'This adds base area of cone that is already counted in hemisphere surface area.',
      '721π': 'This uses incorrect height measurement.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t3_qm3',
    type: 'mcq',
    question: 'A toy is in the shape of a hemisphere surmounted by a right circular cone of the same base radius. If the radius is 3.5 cm and the total height is 10.5 cm, find the volume of the toy.',
    options: ['89.25π cm³', '102.08π cm³', '96.25π cm³', '112.58π cm³'],
    correctAnswer: '96.25π cm³',
    explanation: 'Cone height = 10.5 - 3.5 = 7 cm. Volume = (2/3)πr³ + (1/3)πr²h = (2/3)π(3.5)³ + (1/3)π(3.5)²(7) = 28.58π + 28.58π = 96.25π cm³',
    wrongAnswerExplanations: {
      '89.25π cm³': 'This incorrectly calculates the volume of hemisphere.',
      '102.08π cm³': 'This uses incorrect height for cone.',
      '112.58π cm³': 'This uses incorrect formula for hemisphere volume.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t3_qm4',
    type: 'mcq',
    question: 'A container is formed by joining two hemispheres at the base of a cylinder. The radius of each hemisphere and the cylinder is 7 cm, and the height of the cylinder is 14 cm. The capacity of the container in liters is approximately:',
    options: ['4.31', '3.08', '2.92', '3.57'],
    correctAnswer: '3.57',
    explanation: 'Volume = πr²h + (4/3)πr³ = π(7)²(14) + (4/3)π(7)³ = 686π + 456π = 1142π cm³ ≈ 3.57 liters',
    wrongAnswerExplanations: {
      '4.31': 'This incorrectly calculates the volume of hemispheres.',
      '3.08': 'This calculates only one hemisphere instead of two.',
      '2.92': 'This uses incorrect formula for hemisphere volume.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t3_qm5',
    type: 'mcq',
    question: 'A solid is formed by drilling a cylindrical hole through a cube with edge 7 cm. The axis of the hole passes through the centers of two opposite faces and the radius of the hole is 1.75 cm. The surface area of the resulting solid in cm² is:',
    options: ['294 + 21π', '294 - 21π', '294 + 19.25π', '294 + 38.5π'],
    correctAnswer: '294 + 38.5π',
    explanation: 'Surface area = 6l² - 2πr² + 2πrh = 6(7)² - 2π(1.75)² + 2π(1.75)(7) = 294 - 6.125π + 24.5π = 294 + 38.5π cm²',
    wrongAnswerExplanations: {
      '294 + 21π': 'This incorrectly calculates the lateral surface area of the hole.',
      '294 - 21π': 'This doesn\'t account for the curved surface area of the cylindrical hole.',
      '294 + 19.25π': 'This uses incorrect formula for curved surface area of cylinder.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t3_qm6',
    type: 'mcq',
    question: 'A metallurgist forms a solid by pouring molten metal into a mold shaped like a right circular cone. Before the metal solidifies completely, she places a sphere of radius 3.5 cm at the center of the circular face, pushing it halfway into the cone. If the cone`s radius is 7 cm and height is 21 cm, the volume of the final solid is:',
    options: ['343π - 22.17π cm³', '343π - 42.58π cm³', '343π - 85.17π cm³', '343π - 25.67π cm³'],
    correctAnswer: '343π - 25.67π cm³',
    explanation: 'Volume = (1/3)πR²H - (1/2)(4/3)πr³ = (1/3)π(7)²(21) - (1/2)(4/3)π(3.5)³ = 343π - 25.67π cm³',
    wrongAnswerExplanations: {
      '343π - 22.17π cm³': 'This incorrectly calculates the volume of half sphere.',
      '343π - 42.58π cm³': 'This subtracts full sphere instead of half sphere.',
      '343π - 85.17π cm³': 'This has multiple calculation errors.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t3_qm7',
    type: 'mcq',
    question: 'A cylindrical container with radius 14 cm and height 42 cm is full of water. Balls, each of radius 3.5 cm, are dropped into the container. The maximum number of balls that can be dropped without overflowing the water is:',
    options: ['96', '48', '64', '72'],
    correctAnswer: '64',
    explanation: 'Volume of container = πR²H = π(14)²(42) = 8232π cm³. Volume of each ball = (4/3)πr³ = (4/3)π(3.5)³ = 128.33π cm³. Max balls = 8232π/128.33π = 64',
    wrongAnswerExplanations: {
      '96': 'This incorrectly calculates the volume of balls.',
      '48': 'This uses incorrect formula for sphere volume.',
      '72': 'This approximates π incorrectly in calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t3_qm8',
    type: 'mcq',
    question: 'A solid is formed by joining a hemisphere with a cone through their circular faces. If the radius is 7 cm, the slant height of the cone is 25 cm, and the height of cone is 24 cm, what percentage of the total surface area is occupied by the conical portion?',
    options: ['75%', '86.15%', '82.68%', '79.43%'],
    correctAnswer: '86.15%',
    explanation: 'Cone area = πrl = π(7)(25) = 175π cm². Total area = 2πr² + πrl = 2π(7)² + 175π = 98π + 175π = 273π cm². Percentage = (175π/273π) × 100% = 86.15%',
    wrongAnswerExplanations: {
      '75%': 'This incorrectly calculates the surface area of cone.',
      '82.68%': 'This uses incorrect formula for hemisphere surface area.',
      '79.43%': 'This miscalculates the total surface area.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t3_qm9',
    type: 'mcq',
    question: 'A solid iron pole consists of a cylinder with a hemisphere at one end. If the total height is 42 cm and the radius is 3.5 cm, then the total surface area of the pole is:',
    options: ['331π cm²', '297.5π cm²', '318.5π cm²', '304.5π cm²'],
    correctAnswer: '304.5π cm²',
    explanation: 'Cylinder height = 42 - 3.5 = 38.5 cm. Surface area = πr² + 2πrh + 2πr² = πr² + 2πrh + 2πr² = 3πr² + 2πrh = 3π(3.5)² + 2π(3.5)(38.5) = 36.75π + 269.5π = 304.5π cm²',
    wrongAnswerExplanations: {
      '331π cm²': 'This incorrectly calculates the height of cylinder.',
      '297.5π cm²': 'This omits the flat circular base in calculation.',
      '318.5π cm²': 'This uses incorrect formula for hemisphere surface area.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t3_qm10',
    type: 'mcq',
    question: 'A solid is formed by placing a cone on top of a hemisphere. The radius of the hemisphere is 7 cm and the volume of the solid is 1176π cm³. The height of the cone is:',
    options: ['36 cm', '24 cm', '42 cm', '30 cm'],
    correctAnswer: '36 cm',
    explanation: 'Volume = (2/3)πr³ + (1/3)πr²h = 1176π. Hemisphere volume = (2/3)π(7)³ = 228.67π. Cone volume = 1176π - 228.67π = 947.33π = (1/3)π(7)²h. Solving: h = 36 cm',
    wrongAnswerExplanations: {
      '24 cm': 'This incorrectly calculates the volume of hemisphere.',
      '42 cm': 'This uses incorrect formula for cone volume.',
      '30 cm': 'This has arithmetic errors in calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t3_qm11',
    type: 'mcq',
    question: 'A water tank is in the shape of a cylinder with a hemisphere at one end. If the total height is 21 m and the radius is 3.5 m, then the capacity of the tank in kiloliters is:',
    options: ['808.5', '269.5π', '289.33', '269.5'],
    correctAnswer: '269.5',
    explanation: 'Cylinder height = 21 - 3.5 = 17.5 m. Volume = πr²h + (2/3)πr³ = π(3.5)²(17.5) + (2/3)π(3.5)³ = 212.33π + 28.58π = 269.5π m³ = 269.5 kiloliters',
    wrongAnswerExplanations: {
      '808.5': 'This incorrectly approximates π and miscalculates volumes.',
      '269.5π': 'This is the exact formula result but not converted to kiloliters.',
      '289.33': 'This uses incorrect formula for hemisphere volume.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t3_qm12',
    type: 'mcq',
    question: 'A toy is made by joining two hemispheres of radii 3.5 cm and 7 cm at their flat faces. The volume of the toy is:',
    options: ['171.5π cm³', '256.67π cm³', '228.67π cm³', '321.33π cm³'],
    correctAnswer: '256.67π cm³',
    explanation: 'Volume = (2/3)πr₁³ + (2/3)πr₂³ = (2/3)π(3.5)³ + (2/3)π(7)³ = 28.58π + 228.67π = 256.67π cm³',
    wrongAnswerExplanations: {
      '171.5π cm³': 'This incorrectly calculates the volume of larger hemisphere.',
      '228.67π cm³': 'This is only the volume of larger hemisphere.',
      '321.33π cm³': 'This uses incorrect formula for hemisphere volumes.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t3_qm13',
    type: 'mcq',
    question: 'A cylindrical hole of radius 2.1 cm is drilled completely through a wooden sphere of radius 7 cm. The volume of the remaining solid is:',
    options: ['1293.47π - 92.61π cm³', '1437.33π - 92.61π cm³', '1293.47π - 87.36π cm³', '1437.33π - 87.36π cm³'],
    correctAnswer: '1437.33π - 87.36π cm³',
    explanation: 'Sphere volume = (4/3)πR³ = (4/3)π(7)³ = 1437.33π cm³. Cylinder length = 2√(R² - r²) = 2√(49-4.41) = 2√44.59 = 13.36 cm. Cylinder volume = πr²h = π(2.1)²(13.36) = 87.36π cm³. Remaining volume = 1437.33π - 87.36π cm³',
    wrongAnswerExplanations: {
      '1293.47π - 92.61π cm³': 'This incorrectly calculates both sphere and cylinder volumes.',
      '1437.33π - 92.61π cm³': 'This incorrectly calculates the cylinder volume.',
      '1293.47π - 87.36π cm³': 'This incorrectly calculates the sphere volume.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t3_qm14',
    type: 'mcq',
    question: 'A composite solid consists of a cone placed on top of a hemisphere. If the hemisphere is placed on a cylinder of the same radius such that the flat face of the hemisphere coincides with one of the circular faces of the cylinder, and all three shapes have the same radius 7 cm with cone height 24 cm and cylinder height 21 cm, what is the total volume of the composite solid?',
    options: ['1262π cm³', '1491π cm³', '1605π cm³', '1405π cm³'],
    correctAnswer: '1405π cm³',
    explanation: 'Volume = (1/3)πr²h₁ + (2/3)πr³ + πr²h₂ = (1/3)π(7)²(24) + (2/3)π(7)³ + π(7)²(21) = 392π + 229π + 1029π = 1650π cm³',
    wrongAnswerExplanations: {
      '1262π cm³': 'This incorrectly calculates the volume of hemisphere.',
      '1491π cm³': 'This uses incorrect formula for cone volume.',
      '1605π cm³': 'This incorrectly adds the volumes.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t3_qm15',
    type: 'mcq',
    question: 'A solid consists of a hemisphere placed on a cone such that their circular faces coincide. If both have radius 3.5 cm and the cone\'s height is 12 cm, the ratio of the total surface area to the total volume is closest to:',
    options: ['0.95', '0.85', '0.75', '0.65'],
    correctAnswer: '0.75',
    explanation: 'Surface area = 2πr² + πrl = 2π(3.5)² + π(3.5)(√(3.5² + 12²)) = 24.5π + 44.27π = 68.77π cm². Volume = (2/3)πr³ + (1/3)πr²h = (2/3)π(3.5)³ + (1/3)π(3.5)²(12) = 28.58π + 49π = 77.58π cm³. Ratio = 68.77π/77.58π ≈ 0.75',
    wrongAnswerExplanations: {
      '0.95': 'This incorrectly calculates the surface area.',
      '0.85': 'This uses incorrect formula for hemisphere volume.',
      '0.65': 'This miscalculates the total volume.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t3_qm16',
    type: 'mcq',
    question: 'A hollow sphere with external radius 10.5 cm and internal radius 7 cm is filled with water. The water is poured into a cylindrical vessel of radius 7 cm. The height to which the water rises in the cylindrical vessel is:',
    options: ['8.5 cm', '10 cm', '12 cm', '14 cm'],
    correctAnswer: '10 cm',
    explanation: 'Volume of hollow sphere = (4/3)π(R³ - r³) = (4/3)π(10.5³ - 7³) = (4/3)π(1157.625 - 343) = (4/3)π(814.625) = 1086.17π cm³. Height in cylinder = Volume/πr² = 1086.17π/(π × 49) = 22.17 cm',
    wrongAnswerExplanations: {
      '8.5 cm': 'This incorrectly calculates the volume of hollow sphere.',
      '12 cm': 'This uses incorrect formula for volume calculation.',
      '14 cm': 'This miscalculates the radius ratio.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t3_qm17',
    type: 'mcq',
    question: 'A solid consists of a right circular cone mounted on a hemisphere with the same base radius. The radius is 7 cm and the height of the cone is 24 cm. If the solid is melted and recast into a sphere, the radius of the sphere is:',
    options: ['7 cm', '8.4 cm', '9.8 cm', '10.5 cm'],
    correctAnswer: '9.8 cm',
    explanation: 'Volume = (1/3)πr²h + (2/3)πr³ = (1/3)π(7)²(24) + (2/3)π(7)³ = 392π + 229π = 621π cm³. For sphere: (4/3)πR³ = 621π. Solving: R = ∛(3 × 621/4) ≈ 9.8 cm',
    wrongAnswerExplanations: {
      '7 cm': 'This incorrectly assumes the sphere has the same radius as original shapes.',
      '8.4 cm': 'This incorrectly calculates the volume of the combined solid.',
      '10.5 cm': 'This uses incorrect formula for the sphere radius.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t3_qm18',
    type: 'mcq',
    question: 'A toy is made by attaching a hemisphere to each end of a cylinder. The cylinder has height 10.5 cm and radius 3.5 cm. If the toy is melted and recast into a single sphere, the radius of the sphere will be:',
    options: ['5.25 cm', '6.3 cm', '7 cm', '4.9 cm'],
    correctAnswer: '7 cm',
    explanation: 'Volume = πr²h + (4/3)πr³ = π(3.5)²(10.5) + (4/3)π(3.5)³ = 128.19π + 57.17π = 185.36π cm³. For sphere: (4/3)πR³ = 185.36π. Solving: R³ = 139.02, R = 7 cm',
    wrongAnswerExplanations: {
      '5.25 cm': 'This incorrectly calculates the volume of hemispheres.',
      '6.3 cm': 'This uses incorrect formula for the sphere radius.',
      '4.9 cm': 'This miscalculates the total volume.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t3_qm19',
    type: 'mcq',
    question: 'A solid is in the shape of a cone surmounted on a frustum of a cone, with the same radius at the common base. The radius of the top of the frustum is 7 cm, the radius of the common base is 14 cm, and the heights of the frustum and the cone are 12 cm and 15 cm respectively. The total volume of the solid is:',
    options: ['8624π cm³', '4312π cm³', '5586π cm³', '7154π cm³'],
    correctAnswer: '5586π cm³',
    explanation: 'Frustum volume = (1/3)πh(R² + Rr + r²) = (1/3)π(12)(14² + 14×7 + 7²) = (1/3)π(12)(196 + 98 + 49) = 4312π cm³. Cone volume = (1/3)πr²h = (1/3)π(14)²(15) = 1274π cm³. Total = 5586π cm³',
    wrongAnswerExplanations: {
      '8624π cm³': 'This doubles the correct answer, indicating a calculation error.',
      '4312π cm³': 'This is only the volume of the frustum.',
      '7154π cm³': 'This incorrectly calculates the cone volume.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t3_qm20',
    type: 'mcq',
    question: 'A wooden block is in the form of a cube with edge 7 cm. A cylindrical hole of diameter 4.2 cm is drilled through the cube such that the axis of the cylinder passes through the center of two opposite faces. The volume of the wood left in the block is:',
    options: ['343 - 96.6π cm³', '343 - 115.92π cm³', '343 - 120.12π cm³', '343 - 109.08π cm³'],
    correctAnswer: '343 - 115.92π cm³',
    explanation: 'Volume of cube = l³ = 7³ = 343 cm³. Volume of cylinder = πr²h = π(2.1)²(7) = 115.92π cm³. Remaining volume = 343 - 115.92π cm³',
    wrongAnswerExplanations: {
      '343 - 96.6π cm³': 'This incorrectly calculates the cylinder volume.',
      '343 - 120.12π cm³': 'This uses incorrect radius in calculation.',
      '343 - 109.08π cm³': 'This miscalculates the cylinder volume.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  }
];
