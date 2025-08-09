import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch13_t2_qe1',
    type: 'mcq',
    question: 'A hemisphere is placed on top of a cylinder with the same radius. If the radius is 7 cm and height of cylinder is 14 cm, what is the total surface area of the combination?',
    options: [
      '924π cm²',
      '735π cm²',
      '637π cm²',
      '441π cm²'
    ],
    correctAnswer: '735π cm²',
    explanation: 'Total surface area = CSA of cylinder + CSA of hemisphere + area of base = 2πrh + 2πr² + πr² = 2π×7×14 + 2π×7² + π×7² = 196π + 98π + 49π = 343π + 392π = 735π cm²',
    wrongAnswerExplanations: {
      '924π cm²': 'This includes the area of the common circular face twice, which is incorrect.',
      '637π cm²': 'Some parts of the surface area calculation are missing.',
      '441π cm²': 'This answer doesn`t account for the curved surface area of the hemisphere.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch13_t2_qe2',
    type: 'mcq',
    question: 'A cone is placed on top of a cube such that the base of the cone matches exactly with the top face of the cube. If the side of the cube is 8 cm and the height of the cone is 6 cm, what is the volume of the combination?',
    options: [
      '512 cm³',
      '640 cm³',
      '576 cm³',
      '672 cm³'
    ],
    correctAnswer: '640 cm³',
    explanation: 'Volume = Volume of cube + Volume of cone = s³ + ⅓πr²h = 8³ + ⅓π×4²×6 = 512 + ⅓π×16×6 = 512 + 32π ≈ 640 cm³',
    wrongAnswerExplanations: {
      '512 cm³': 'This is only the volume of the cube without including the cone.',
      '576 cm³': 'This uses an incorrect formula for the volume of the cone.',
      '672 cm³': 'This includes an incorrect calculation of the cone volume.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch13_t2_qe3',
    type: 'mcq',
    question: 'A cylinder with hemispherical ends has a total length of 20 cm and radius 3.5 cm. What is its total volume?',
    options: [
      '770 cm³',
      '808 cm³',
      '718 cm³',
      '899 cm³'
    ],
    correctAnswer: '808 cm³',
    explanation: 'Volume = Volume of cylinder + Volume of two hemispheres = πr²h + (4/3)πr³ = π×3.5²×13 + (4/3)π×3.5³ = 808 cm³ where h = 20 - 2×3.5 = 13 cm',
    wrongAnswerExplanations: {
      '770 cm³': 'This uses incorrect dimensions in the calculation.',
      '718 cm³': 'This doesn`t account for both hemispheres correctly.',
      '899 cm³': 'This calculation has arithmetic errors.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch13_t2_qe4',
    type: 'mcq',
    question: 'Two identical cones are placed base to base. What would this combination be called?',
    options: [
      'Bi-cone',
      'Double cone',
      'Spindle',
      'Cone-stack'
    ],
    correctAnswer: 'Bi-cone',
    explanation: 'Two identical cones joined at their circular bases form a bi-cone, which resembles a diamond or spindle-like shape.',
    wrongAnswerExplanations: {
      'Double cone': 'This is not the standard mathematical term for this shape.',
      'Spindle': 'A spindle typically refers to a different geometric shape.',
      'Cone-stack': 'This is not a standard mathematical term for this combination.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl10_ch13_t2_qe5',
    type: 'mcq',
    question: 'A hemisphere is placed on top of a cylinder so that their flat surfaces coincide. If both have the same radius, which of the following surfaces is NOT included in the total surface area?',
    options: [
      'The curved surface of the hemisphere',
      'The circular base of the hemisphere',
      'The curved surface of the cylinder',
      'The circular base of the cylinder'
    ],
    correctAnswer: 'The circular base of the hemisphere',
    explanation: 'The circular base of the hemisphere coincides with the top face of the cylinder, so it`s not exposed and not included in the total surface area.',
    wrongAnswerExplanations: {
      'The curved surface of the hemisphere': 'This is visible and part of the total surface area.',
      'The curved surface of the cylinder': 'This is visible and part of the total surface area.',
      'The circular base of the cylinder': 'This is visible at the bottom and part of the total surface area.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch13_t2_qe6',
    type: 'mcq',
    question: 'A solid toy is in the form of a hemisphere surmounted by a cone of the same radius. If the radius is 5 cm and height of the cone is 12 cm, find the volume of the toy.',
    options: [
      '380 cm³',
      '410.83 cm³',
      '385.42 cm³',
      '395.83 cm³'
    ],
    correctAnswer: '385.42 cm³',
    explanation: 'Volume = Volume of hemisphere + Volume of cone = (2/3)πr³ + (1/3)πr²h = (2/3)π×5³ + (1/3)π×5²×12 = (2/3)π×125 + (1/3)π×25×12 = 385.42 cm³',
    wrongAnswerExplanations: {
      '380 cm³': 'This uses an approximation of π that`s not accurate enough.',
      '410.83 cm³': 'This calculation includes an arithmetic error.',
      '395.83 cm³': 'This uses incorrect formulas for the volumes.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch13_t2_qe7',
    type: 'mcq',
    question: 'A solid consists of a cylinder with a cone on top. If both the cylinder and the cone have radius 3 cm, height of the cylinder is 4 cm and the height of the cone is 3 cm, what is the total height of the solid?',
    options: [
      '9 cm',
      '7 cm',
      '6 cm',
      '10 cm'
    ],
    correctAnswer: '7 cm',
    explanation: 'Total height = Height of cylinder + Height of cone = 4 + 3 = 7 cm',
    wrongAnswerExplanations: {
      '9 cm': 'This includes an extra measure that`s not part of the height.',
      '6 cm': 'This is missing one component of the height.',
      '10 cm': 'This incorrectly adds dimensions that don`t contribute to the height.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl10_ch13_t2_qe8',
    type: 'mcq',
    question: 'A composite solid consists of a cube with a hemisphere attached to one of its faces. If the side of the cube is 10 cm, what is the total surface area of the solid?',
    options: [
      '700 cm²',
      '650 cm²',
      '600 cm²',
      '550 cm²'
    ],
    correctAnswer: '600 cm²',
    explanation: 'Total surface area = 5 faces of cube + CSA of hemisphere = 5×10² + 2π×5² = 500 + 50π ≈ 600 cm²',
    wrongAnswerExplanations: {
      '700 cm²': 'This incorrectly includes the area of the common face twice.',
      '650 cm²': 'This uses incorrect dimensions in the calculation.',
      '550 cm²': 'This doesn`t account for the curved surface area of the hemisphere correctly.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch13_t2_qe9',
    type: 'mcq',
    question: 'A milk container is in the shape of a cuboid with a pyramid on top. If the base of the cuboid is 20 cm × 15 cm and its height is 30 cm, while the pyramid is 8 cm high, what is the capacity of the container?',
    options: [
      '9600 cm³',
      '10000 cm³',
      '9000 cm³',
      '9400 cm³'
    ],
    correctAnswer: '9600 cm³',
    explanation: 'Volume = Volume of cuboid + Volume of pyramid = l×b×h + (1/3)×base area×height = 20×15×30 + (1/3)×20×15×8 = 9000 + 800 = 9600 cm³',
    wrongAnswerExplanations: {
      '10000 cm³': 'This incorrectly calculates the volume of the pyramid.',
      '9000 cm³': 'This is only the volume of the cuboid without the pyramid.',
      '9400 cm³': 'This uses an incorrect formula for the volume of the pyramid.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch13_t2_qe10',
    type: 'mcq',
    question: 'What is the ratio of the volume of a hemisphere to the volume of a cylinder with the same radius and height equal to the radius?',
    options: [
      '1:1',
      '2:3',
      '1:2',
      '3:2'
    ],
    correctAnswer: '2:3',
    explanation: 'Volume of hemisphere = (2/3)πr³, Volume of cylinder = πr²h = πr³ (since h=r). Ratio = (2/3)πr³ : πr³ = 2:3',
    wrongAnswerExplanations: {
      '1:1': 'This would be true if the hemisphere volume were equal to the cylinder volume, which is not the case.',
      '1:2': 'This ratio underestimates the volume of the hemisphere relative to the cylinder.',
      '3:2': 'This is the inverse of the correct ratio.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch13_t2_qe11',
    type: 'mcq',
    question: 'A cylindrical container with radius 7 cm and height 15 cm is filled with ice cream. If the ice cream is shaped to form a cone of the same radius on top of the filled container, what is the height of the ice cream cone?',
    options: [
      '14 cm',
      '21 cm',
      '7 cm',
      '28 cm'
    ],
    correctAnswer: '21 cm',
    explanation: 'If the cone has the same volume as the cylinder: (1/3)πr²h = πr²h₁, where h₁ = 15 cm. Solving: h = 3h₁ = 45 cm. But only the same amount of ice cream forms the cone, so h = 21 cm.',
    wrongAnswerExplanations: {
      '14 cm': 'This incorrectly applies the relationship between cylinder and cone volumes.',
      '7 cm': 'This doesn`t account for the correct volumetric relationship.',
      '28 cm': 'This overestimates the height based on incorrect volume calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch13_t2_qe12',
    type: 'mcq',
    question: 'A solid consists of a right circular cone mounted on a cylinder with the same radius. If the radius is 5 cm, the height of the cylinder is 10 cm, and the height of the cone is 12 cm, what is the total surface area of the solid?',
    options: [
      '395 cm²',
      '445 cm²',
      '470 cm²',
      '505 cm²'
    ],
    correctAnswer: '470 cm²',
    explanation: 'Total surface area = CSA of cylinder + CSA of cone + base of cylinder = 2πrh₁ + πrl + πr² = 2π×5×10 + π×5×13 + π×25 = 100π + 65π + 25π = 190π ≈ 470 cm²',
    wrongAnswerExplanations: {
      '395 cm²': 'This calculation misses some surface components.',
      '445 cm²': 'This uses incorrect dimensions in the calculation.',
      '505 cm²': 'This incorrectly includes the common circular face twice.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch13_t2_qe13',
    type: 'mcq',
    question: 'A toy is in the form of a cone surmounted on a hemisphere. The radius of the hemisphere is 3.5 cm and the height of the cone is 7 cm. The volume of the toy is:',
    options: [
      '102.67 cm³',
      '89.83 cm³',
      '113.17 cm³',
      '125.33 cm³'
    ],
    correctAnswer: '113.17 cm³',
    explanation: 'Volume = Volume of hemisphere + Volume of cone = (2/3)πr³ + (1/3)πr²h = (2/3)π×3.5³ + (1/3)π×3.5²×7 = (2/3)π×42.875 + (1/3)π×12.25×7 = 113.17 cm³',
    wrongAnswerExplanations: {
      '102.67 cm³': 'This doesn` t account for the full volume of both shapes.',
      '89.83 cm³': 'This uses incorrect dimensions in the calculation.',
      '125.33 cm³': 'This includes an arithmetic error in calculating the volumes.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch13_t2_qe14',
    type: 'mcq',
    question: 'The base of a pencil box is a rectangle with dimensions 8 cm × 6 cm. The height of the box is 2 cm, and it has a hemispherical cap of diameter 2 cm at one end. What is the volume of the pencil box?',
    options: [
      '96 cm³',
      '98.09 cm³',
      '97.33 cm³',
      '99.46 cm³'
    ],
    correctAnswer: '97.33 cm³',
    explanation: 'Volume = Volume of cuboid + Volume of hemisphere = 8×6×2 + (2/3)π×1³ = 96 + (2/3)π ≈ 97.33 cm³',
    wrongAnswerExplanations: {
      '96 cm³': 'This is only the volume of the rectangular portion without the hemispherical cap.',
      '98.09 cm³': 'This incorrectly calculates the volume of the hemispherical cap.',
      '99.46 cm³': 'This includes an incorrect approximation of the hemisphere volume.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch13_t2_qe15',
    type: 'mcq',
    question: 'A spherical ball of radius 4 cm is melted and recast into two smaller balls whose radii are in the ratio 1:3. The radius of the smaller ball is:',
    options: [
      '1 cm',
      '2 cm',
      '3 cm',
      '4 cm'
    ],
    correctAnswer: '1 cm',
    explanation: 'If r₁:r₂ = 1:3 and r₁³ + r₂³ = 4³ (volume conservation), then r₁³ + 27r₁³ = 64, giving r₁ = 1 cm.',
    wrongAnswerExplanations: {
      '2 cm': 'This doesn`t satisfy the volume conservation equation.',
      '3 cm': 'This would make the larger balls radius 9 cm, which exceeds the volume of the original ball.',
      '4 cm': 'This is the radius of the original ball, not the smaller ball.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch13_t2_qe16',
    type: 'mcq',
    question: 'A composite solid is formed by placing a cone on top of a hemisphere of radius 5 cm. If the cone has the same radius and a height of 12 cm, what is the total height of the solid?',
    options: [
      '12 cm',
      '15 cm',
      '17 cm',
      '20 cm'
    ],
    correctAnswer: '17 cm',
    explanation: 'Total height = Height of hemisphere + Height of cone = 5 + 12 = 17 cm',
    wrongAnswerExplanations: {
      '12 cm': 'This is only the height of the cone without the hemisphere.',
      '15 cm': 'This uses an incorrect value for the height of the hemisphere.',
      '20 cm': 'This overestimates the total height of the solid.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl10_ch13_t2_qe17',
    type: 'mcq',
    question: 'A solid iron pole consists of a cylinder and a cone. The radius of the base is 8 cm, height of the cylindrical part is 120 cm and the cone part is 24 cm. If 1 cm³ of iron weighs 7.5 g, the weight of the pole is:',
    options: [
      '150.72 kg',
      '180.96 kg',
      '162.24 kg',
      '175.68 kg'
    ],
    correctAnswer: '162.24 kg',
    explanation: 'Volume = πr²h₁ + (1/3)πr²h₂ = π×8²×120 + (1/3)π×8²×24 = π×64×(120 + 8) = 8192π cm³. Weight = 8192π × 7.5/1000 = 192.8 kg.',
    wrongAnswerExplanations: {
      '150.72 kg': 'This doesnt account for the full volume of both shapes.',
      '180.96 kg': 'This calculation includes an arithmetic error.',
      '175.68 kg': 'This uses incorrect dimensions in the calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch13_t2_qe18',
    type: 'mcq',
    question: 'A drinking glass is in the form of a frustum of a cone of height 14 cm. The diameters of its two circular ends are 4 cm and 8 cm. Find the capacity of the glass.',
    options: [
      '308 cm³',
      '366 cm³',
      '396 cm³',
      '436 cm³'
    ],
    correctAnswer: '396 cm³',
    explanation: 'Volume of frustum = (1/3)πh(R² + r² + Rr) = (1/3)π×14×(4² + 2² + 4×2) = (1/3)π×14×(16 + 4 + 8) = (1/3)π×14×28 = 396 cm³',
    wrongAnswerExplanations: {
      '308 cm³': 'This uses incorrect dimensions in the frustum formula.',
      '366 cm³': 'This uses an incorrect formula for the volume of a frustum.',
      '436 cm³': 'This includes arithmetic errors in calculating the volume.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch13_t2_qe19',
    type: 'mcq',
    question: 'A solid is composed of a right circular cylinder with a hemisphere at each end. If the length of the cylinder is 10 cm and the radius of the entire solid is 3.5 cm, what is the total surface area?',
    options: [
      '307 cm²',
      '269 cm²',
      '285 cm²',
      '324 cm²'
    ],
    correctAnswer: '285 cm²',
    explanation: 'Total surface area = 2πrh + 4πr² = 2π×3.5×10 + 4π×3.5² = 70π + 49π = 119π ≈ 285 cm²',
    wrongAnswerExplanations: {
      '307 cm²': 'This includes an incorrect calculation of the surface area.',
      '269 cm²': 'This doesn`t account for all curved surfaces properly.',
      '324 cm²': 'This double-counts some of the surface area components.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch13_t2_qe20',
    type: 'mcq',
    question: 'A metallic sphere of radius 12 cm is melted and drawn into a wire of uniform cross-section. If the length of the wire is 36 m, the radius of the wire is:',
    options: [
      '0.2 cm',
      '0.4 cm',
      '0.6 cm',
      '0.8 cm'
    ],
    correctAnswer: '0.4 cm',
    explanation: 'Volume of sphere = Volume of wire. (4/3)πr₁³ = πr₂²L. (4/3)π×12³ = πr₂²×3600. r₂² = 64/3, r₂ = 0.4 cm',
    wrongAnswerExplanations: {
      '0.2 cm': 'This would result in a wire with insufficient volume.',
      '0.6 cm': 'This would result in a wire with too much volume.',
      '0.8 cm': 'This grossly overestimates the radius needed for volume conservation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  }
];
