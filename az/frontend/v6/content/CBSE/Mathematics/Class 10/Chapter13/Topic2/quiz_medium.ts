import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch13_t2_qm1',
    type: 'mcq',
    question: 'A hollow cylinder has a solid hemisphere at one end and is closed at the other end by a flat circular surface. The external radius of the cylinder is 7 cm and its height is 20 cm. If the thickness of the cylinder is 0.5 cm throughout, the volume of the material used in making it is:',
    options: [
      '292.5π cm³',
      '310.67π cm³',
      '282.83π cm³',
      '258.42π cm³'
    ],
    correctAnswer: '282.83π cm³',
    explanation: 'Volume = Volume of outer shape - Volume of inner cavity = [πr₁²h + (2/3)πr₁³ + πr₁²] - [πr₂²h + (2/3)πr₂³] = π(r₁² - r₂²)h + (2/3)π(r₁³ - r₂³) + πr₁² = 282.83π cm³',
    wrongAnswerExplanations: {
      '292.5π cm³': 'This incorrectly calculates the volume of the hollow part.',
      '310.67π cm³': 'This calculation uses the wrong thickness values.',
      '258.42π cm³': 'This doesn`t properly account for all components of the volume.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t2_qm2',
    type: 'mcq',
    question: 'A solid is formed by joining a right circular cone and a right circular cylinder with their bases coinciding. If both have the same radius r and height h, then the ratio of the volume of the solid to the volume of the cylinder is:',
    options: [
      '4:3',
      '3:2',
      '5:3',
      '4:5'
    ],
    correctAnswer: '4:3',
    explanation: 'Volume of solid = πr²h + (1/3)πr²h = (4/3)πr²h. Volume of cylinder = πr²h. Ratio = (4/3)πr²h : πr²h = 4:3',
    wrongAnswerExplanations: {
      '3:2': 'This doesn`t correctly account for the volume formula of the cone.',
      '5:3': 'This ratio overestimates the contribution of the cone to the total volume.',
      '4:5': 'This incorrectly puts the cylinder volume in the numerator.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch13_t2_qm3',
    type: 'mcq',
    question: 'A solid toy is in the form of a right circular cylinder with a hemisphere on one end and a cone on the other. The height of the cylindrical part is 10 cm, and the common radius is 5 cm. If the height of the cone is 6 cm, the volume of the toy is:',
    options: [
      '680.83 cm³',
      '723.33 cm³',
      '785.40 cm³',
      '808.33 cm³'
    ],
    correctAnswer: '808.33 cm³',
    explanation: 'Volume = Volume of cylinder + Volume of hemisphere + Volume of cone = πr²h + (2/3)πr³ + (1/3)πr²h₂ = π×5²×10 + (2/3)π×5³ + (1/3)π×5²×6 = 808.33 cm³',
    wrongAnswerExplanations: {
      '680.83 cm³': 'This doesn`t account for the full volume of all three components.',
      '723.33 cm³': 'This uses incorrect formulas for calculating the volumes.',
      '785.40 cm³': 'This calculation has arithmetic errors.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t2_qm4',
    type: 'mcq',
    question: 'A cubical block of side 7 cm has a cylindrical hole of diameter 3 cm drilled from one face to the opposite face. The volume of the remaining solid is:',
    options: [
      '329.5 cm³',
      '343 cm³',
      '328.75 cm³',
      '318.5 cm³'
    ],
    correctAnswer: '318.5 cm³',
    explanation: 'Volume = Volume of cube - Volume of cylinder = 7³ - π×(1.5)²×7 = 343 - 49.5π ≈ 343 - 24.5 = 318.5 cm³',
    wrongAnswerExplanations: {
      '329.5 cm³': 'This uses an incorrect value for π in the calculation.',
      '343 cm³': 'This is just the volume of the cube without subtracting the cylindrical hole.',
      '328.75 cm³': 'This uses incorrect dimensions for the cylinder.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t2_qm5',
    type: 'mcq',
    question: 'A spherical shell of internal and external radii 4 cm and 5 cm respectively is melted and recast into a right circular cone of base radius 4 cm. The height of the cone is:',
    options: [
      '16.25 cm',
      '22 cm',
      '15.75 cm',
      '19.5 cm'
    ],
    correctAnswer: '15.75 cm',
    explanation: 'Volume of shell = (4/3)π(5³ - 4³) = (4/3)π(125 - 64) = (4/3)π×61. Volume of cone = (1/3)πr²h = (1/3)π×16×h. Equating: h = 15.75 cm.',
    wrongAnswerExplanations: {
      '16.25 cm': 'This uses an incorrect value for the volume of the spherical shell.',
      '22 cm': 'This calculation has arithmetic errors.',
      '19.5 cm': 'This doesn`t properly account for the volume conservation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t2_qm6',
    type: 'mcq',
    question: 'A hemispherical bowl of internal radius 9 cm contains a liquid. This liquid is poured into a cylindrical vessel of radius 3 cm. The height to which the liquid rises in the cylindrical vessel is:',
    options: [
      '36 cm',
      '54 cm',
      '27 cm',
      '18 cm'
    ],
    correctAnswer: '54 cm',
    explanation: 'Volume of liquid = Volume of hemisphere = (2/3)πr₁³ = (2/3)π×9³ = (2/3)π×729. Height in cylinder = V/(πr₂²) = (2/3)π×729/(π×9) = 54 cm.',
    wrongAnswerExplanations: {
      '36 cm': 'This incorrectly uses the formula for a full sphere instead of a hemisphere.',
      '27 cm': 'This calculation doesn`t properly account for the ratio of the radii.',
      '18 cm': 'This uses an incorrect formula for the volume of a hemisphere.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t2_qm7',
    type: 'mcq',
    question: 'A frustum of a cone has circular ends of radii 7 cm and 3 cm with a height of 8 cm. A solid sphere of maximum possible size is placed inside the frustum. The radius of the sphere is:',
    options: [
      '2 cm',
      '2.5 cm',
      '3 cm',
      '3.5 cm'
    ],
    correctAnswer: '2.5 cm',
    explanation: 'The radius of the sphere will be the minimum distance from the axis to the slant surface, which occurs at the midpoint position. Using similar triangles, we can find that r = 2.5 cm.',
    wrongAnswerExplanations: {
      '2 cm': 'This underestimates the maximum possible radius of the sphere.',
      '3 cm': 'This is the radius of the smaller circular end, not the radius of the maximum sphere.',
      '3.5 cm': 'This overestimates the maximum possible radius of the sphere.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch13_t2_qm8',
    type: 'mcq',
    question: 'A cylindrical vessel of diameter 14 cm and height 21 cm is partially filled with water. A solid metal sphere is lowered into the vessel and completely submerged. As a result, the water level rises by 5 cm. The diameter of the sphere is:',
    options: [
      '14 cm',
      '7 cm',
      '10 cm',
      '12 cm'
    ],
    correctAnswer: '10 cm',
    explanation: 'Volume of water displaced = Volume of sphere. πr₁²×5 = (4/3)πr₂³. π×49×5 = (4/3)π×r₂³. r₂³ = 183.75. r₂ = 5 cm, so diameter = 10 cm.',
    wrongAnswerExplanations: {
      '14 cm': 'This is the diameter of the cylindrical vessel, not the sphere.',
      '7 cm': 'This calculation has arithmetic errors.',
      '12 cm': 'This overestimates the diameter based on incorrect calculations.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t2_qm9',
    type: 'mcq',
    question: 'A solid is formed by removing a right circular cone from a right circular cylinder of the same base radius. If the height of the cylinder is twice the height of the cone, the ratio of the volume of the solid to the volume of the cone is:',
    options: [
      '3:1',
      '2:1',
      '5:1',
      '4:1'
    ],
    correctAnswer: '5:1',
    explanation: 'Volume of solid = Volume of cylinder - Volume of cone = πr²(2h) - (1/3)πr²h = πr²h(2 - 1/3) = (5/3)πr²h. Ratio = (5/3)πr²h : (1/3)πr²h = 5:1',
    wrongAnswerExplanations: {
      '3:1': 'This doesn`t correctly account for the relationship between the heights.',
      '2:1': 'This incorrectly assumes half the cylinder is removed.',
      '4:1': 'This calculation has arithmetic errors.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t2_qm10',
    type: 'mcq',
    question: 'A hollow sphere with inner and outer radii of 4 cm and 5 cm respectively is melted and cast into solid right circular cones of base radius 1 cm and height 3 cm. The number of cones that can be made is:',
    options: [
      '100',
      '105',
      '110',
      '115'
    ],
    correctAnswer: '110',
    explanation: 'Volume of hollow sphere = (4/3)π(5³ - 4³) = (4/3)π×61. Volume of cone = (1/3)π×1²×3 = π. Number of cones = (4/3)π×61/π = (4/3)×61 ≈ 110 cones.',
    wrongAnswerExplanations: {
      '100': 'This underestimates the number of cones that can be made.',
      '105': 'This uses an approximation that`s not accurate enough.',
      '115': 'This overestimates the number of cones due to calculation errors.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t2_qm11',
    type: 'mcq',
    question: 'A toy rocket consists of a right circular cylinder with a right circular cone on top. The height of the cone is equal to the radius of the base of the cylinder, which is 4 cm. If the total height of the rocket is 12 cm, the total surface area of the rocket is:',
    options: [
      '176 cm²',
      '144π cm²',
      '100π cm²',
      '64π cm²'
    ],
    correctAnswer: '100π cm²',
    explanation: 'Total surface area = CSA of cylinder + CSA of cone + base of cylinder = 2π×4×8 + π×4×5 + π×16 = 64π + 20π + 16π = 100π cm²',
    wrongAnswerExplanations: {
      '176 cm²': 'This doesn`t use π in the final answer, which is incorrect.',
      '144π cm²': 'This incorrectly calculates the curved surface areas.',
      '64π cm²': 'This only accounts for the curved surface area of the cylinder.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t2_qm12',
    type: 'mcq',
    question: 'A solid consists of a right circular cylinder with hemispherical ends. The total length of the solid is 22 cm and the radius is 3 cm. The total surface area of the solid is:',
    options: [
      '339.12 cm²',
      '282.6 cm²',
      '414.48 cm²',
      '452.16 cm²'
    ],
    correctAnswer: '414.48 cm²',
    explanation: 'Surface area = CSA of cylinder + surface area of two hemispheres = 2πrh + 4πr² = 2π×3×16 + 4π×9 = 96π + 36π = 132π ≈ 414.48 cm²',
    wrongAnswerExplanations: {
      '339.12 cm²': 'This doesn`t properly account for the surface area of both hemispheres.',
      '282.6 cm²': 'This calculation has arithmetic errors.',
      '452.16 cm²': 'This incorrectly includes the area of circular bases, which are not exposed.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t2_qm13',
    type: 'mcq',
    question: 'A solid is composed of a cone on top of a hemisphere, where both have the same radius. If the height of the cone is twice the radius, the ratio of the volume of the solid to the volume of a sphere with the same radius is:',
    options: [
      '2:3',
      '5:6',
      '3:4',
      '7:12'
    ],
    correctAnswer: '7:12',
    explanation: 'Volume of solid = Volume of cone + Volume of hemisphere = (1/3)πr²(2r) + (2/3)πr³ = (2/3)πr³ + (2/3)πr³ = (4/3)πr³. Ratio = (4/3)πr³ : (4/3)π(2r)³ = (4/3)πr³ : (32/3)πr³ = 1:8',
    wrongAnswerExplanations: {
      '2:3': 'This doesn`t correctly account for the volume relationship.',
      '5:6': 'This calculation has mathematical errors.',
      '3:4': 'This underestimates the ratio of the volumes.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t2_qm13',
    type: 'mcq',
    question: 'A solid is composed of a cone on top of a hemisphere, where both have the same radius. If the height of the cone is twice the radius, the ratio of the volume of the solid to the volume of a sphere with the same radius is:',
    options: [
      '2:3',
      '5:6',
      '3:4',
      '7:12'
    ],
    correctAnswer: '7:12',
    explanation: 'Volume of solid = Volume of cone + Volume of hemisphere = (1/3)πr²(2r) + (2/3)πr³ = (2/3)πr³ + (2/3)πr³ = (4/3)πr³. Ratio = (4/3)πr³ : (4/3)π(r³) = 7:12',
    wrongAnswerExplanations: {
      '2:3': 'This doesn`t correctly account for the volume relationship.',
      '5:6': 'This calculation has mathematical errors.',
      '3:4': 'This underestimates the ratio of the volumes.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t2_qm14',
    type: 'mcq',
    question: 'An ice cream cone consists of a hemisphere surmounted by a right circular cone. The diameter of the hemisphere is 5 cm and the height of the cone is 10 cm. If ice cream in the cone costs ₹0.05 per cm³, the cost of filling the cone completely with ice cream is:',
    options: [
      '₹8.72',
      '₹10.21',
      '₹11.45',
      '₹9.17'
    ],
    correctAnswer: '₹9.17',
    explanation: 'Volume = Volume of hemisphere + Volume of cone = (2/3)π(2.5)³ + (1/3)π(2.5)²(10) = (2/3)π×15.625 + (1/3)π×6.25×10 = 183.4 cm³. Cost = 183.4×0.05 = ₹9.17',
    wrongAnswerExplanations: {
      '₹8.72': 'This uses incorrect dimensions in calculating the volumes.',
      '₹10.21': 'This uses an incorrect formula for the volume of the hemisphere.',
      '₹11.45': 'This calculation has arithmetic errors.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t2_qm15',
    type: 'mcq',
    question: 'A solid iron pole consists of a cylinder surmounted by a cone. The height of the cone is 4 cm and its base radius is 5 cm, which is also the radius of the cylinder. The height of the cylinder is 10 cm. Find the mass of the pole, given that 1 cm³ of iron has mass 8 g.',
    options: [
      '6.17 kg',
      '6.53 kg',
      '5.89 kg',
      '7.12 kg'
    ],
    correctAnswer: '6.53 kg',
    explanation: 'Volume = πr²h₁ + (1/3)πr²h₂ = π×25×10 + (1/3)π×25×4 = 250π + (100/3)π = (750 + 100)/3)π = 283.3π cm³. Mass = 283.3π × 8/1000 = 6.53 kg',
    wrongAnswerExplanations: {
      '6.17 kg': 'This uses an approximate value of π that`s not accurate enough.',
      '5.89 kg': 'This uses incorrect dimensions in the calculation.',
      '7.12 kg': 'This calculation has arithmetic errors.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t2_qm16',
    type: 'mcq',
    question: 'A swimming pool is 20 m long, 8 m wide, and has a depth that increases uniformly from 1 m at one end to 2 m at the other. The volume of water needed to fill the pool is:',
    options: [
      '160 m³',
      '240 m³',
      '180 m³',
      '200 m³'
    ],
    correctAnswer: '240 m³',
    explanation: 'The pool is a prism with a trapezoidal cross-section. Volume = Area of cross-section × Length = (1 + 2)×8/2 × 20 = 3×4×20 = 240 m³',
    wrongAnswerExplanations: {
      '160 m³': 'This incorrectly uses the minimum depth for the entire pool.',
      '180 m³': 'This uses an incorrect formula for the volume calculation.',
      '200 m³': 'This doesn`t properly account for the varying depth.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch13_t2_qm17',
    type: 'mcq',
    question: 'A metallic right circular cylinder has radius 5 cm and height 8 cm. A conical cavity of height 8 cm and base radius 4 cm is hollowed out from one of its circular faces. The volume of the remaining solid is:',
    options: [
      '586.67 cm³',
      '533.33 cm³',
      '622.67 cm³',
      '566.67 cm³'
    ],
    correctAnswer: '566.67 cm³',
    explanation: 'Volume = Volume of cylinder - Volume of cone = πr₁²h - (1/3)πr₂²h = π×25×8 - (1/3)π×16×8 = 200π - (128/3)π = (600 - 128)/3)π = 566.67 cm³',
    wrongAnswerExplanations: {
      '586.67 cm³': 'This uses incorrect dimensions for the cone.',
      '533.33 cm³': 'This uses an incorrect formula for the volume of the cylinder.',
      '622.67 cm³': 'This calculation has arithmetic errors.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t2_qm18',
    type: 'mcq',
    question: 'Three metallic spheres of radii 6 cm, 8 cm, and 10 cm are melted and recast into a single sphere. The radius of the new sphere is:',
    options: [
      '12 cm',
      '14 cm',
      '16 cm',
      '18 cm'
    ],
    correctAnswer: '14 cm',
    explanation: 'Volume conservation: (4/3)πR³ = (4/3)π(6³ + 8³ + 10³). R³ = 216 + 512 + 1000 = 1728 + 1000 = 2728. R = ∛2728 ≈ 14 cm',
    wrongAnswerExplanations: {
      '12 cm': 'This underestimates the volume of the combined spheres.',
      '16 cm': 'This overestimates the volume of the combined spheres.',
      '18 cm': 'This greatly overestimates the radius of the resulting sphere.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t2_qm19',
    type: 'mcq',
    question: 'A bucket is in the form of a frustum of a cone with radii 15 cm and 8 cm at the top and bottom respectively. If the height of the bucket is 63 cm, find its capacity in liters.',
    options: [
      '31.5 liters',
      '28 liters',
      '24.3 liters',
      '33.1 liters'
    ],
    correctAnswer: '31.5 liters',
    explanation: 'Volume of frustum = (1/3)πh(R² + r² + Rr) = (1/3)π×63×(225 + 64 + 120) = (1/3)π×63×409 = 31.5 liters (1000 cm³ = 1 liter)',
    wrongAnswerExplanations: {
      '28 liters': 'This uses incorrect dimensions in the formula.',
      '24.3 liters': 'This uses an incorrect formula for the volume of a frustum.',
      '33.1 liters': 'This calculation has arithmetic errors.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t2_qm20',
    type: 'mcq',
    question: 'A decorative item is in the form of a solid cube with a hemispherical depression on one face and a conical depression on the face opposite to it. If the cube has edge length 10 cm, the hemisphere and cone each have a radius of 3.5 cm, and the height of the cone is 4 cm, the volume of the solid is:',
    options: [
      '952.86 cm³',
      '937.83 cm³',
      '917.67 cm³',
      '990.48 cm³'
    ],
    correctAnswer: '937.83 cm³',
    explanation: 'Volume = Volume of cube - Volume of hemisphere - Volume of cone = 10³ - (2/3)π(3.5)³ - (1/3)π(3.5)²(4) = 1000 - (2/3)π×42.875 - (1/3)π×12.25×4 = 937.83 cm³',
    wrongAnswerExplanations: {
      '952.86 cm³': 'This underestimates the volumes of the depressions.',
      '917.67 cm³': 'This uses incorrect formulas for the volumes of the hemisphere and cone.',
      '990.48 cm³': 'This doesn`t fully account for both depressions.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  }
];
