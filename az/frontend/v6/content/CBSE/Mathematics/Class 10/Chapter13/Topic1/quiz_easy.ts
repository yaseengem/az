import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch13_t1_qe1',
    type: 'mcq',
    question: 'What is the formula for the volume of a cube with side length a?',
    options: ['a³', '6a²', '4a³', '12a'],
    correctAnswer: 'a³',
    explanation: 'The volume of a cube is the cube of its side length: V = a³ 📊',
    wrongAnswerExplanations: {
      '6a²': '6a² is the formula for the surface area of a cube, not volume.',
      '4a³': 'This is not the correct formula for the volume of a cube.',
      '12a': 'This is the formula for the total edge length of a cube, not volume.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch13_t1_qe2',
    type: 'mcq',
    question: 'The surface area of a sphere with radius r is:',
    options: ['4πr²', '4/3πr³', '2πr', '3πr²'],
    correctAnswer: '4πr²',
    explanation: 'The surface area of a sphere is 4πr², where r is the radius 🔵',
    wrongAnswerExplanations: {
      '4/3πr³': '4/3πr³ is the volume of a sphere, not the surface area.',
      '2πr': '2πr is the circumference of a circle, not the surface area of a sphere.',
      '3πr²': 'This is not the correct formula for the surface area of a sphere.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch13_t1_qe3',
    type: 'mcq',
    question: 'The volume of a cylinder with radius r and height h is:',
    options: ['πr²h', '2πrh', '2πr² + 2πrh', '4/3πr³'],
    correctAnswer: 'πr²h',
    explanation: 'The volume of a cylinder equals the area of the base (πr²) multiplied by height h 🥫',
    wrongAnswerExplanations: {
      '2πrh': '2πrh is the curved surface area of a cylinder, not the volume.',
      '2πr² + 2πrh': 'This is the total surface area of a cylinder, not the volume.',
      '4/3πr³': 'This is the volume of a sphere, not a cylinder.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch13_t1_qe4',
    type: 'mcq',
    question: 'If the side length of a cube is doubled, its volume increases by a factor of:',
    options: ['8', '4', '6', '2'],
    correctAnswer: '8',
    explanation: 'When side length is doubled, volume increases by 2³ = 8 times, as V = a³ 📦',
    wrongAnswerExplanations: {
      '4': 'This would be correct for surface area, which increases by 2² = 4 times, not volume.',
      '6': 'This is not the correct factor of increase for volume when doubling the side length.',
      '2': 'This is the factor by which the side length itself increases, not the volume.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch13_t1_qe5',
    type: 'mcq',
    question: 'The formula for the volume of a cone with base radius r and height h is:',
    options: ['1/3πr²h', 'πr²h', '2πrh', 'πr² + πrl'],
    correctAnswer: '1/3πr²h',
    explanation: 'Volume of a cone is one-third of the volume of a cylinder with same base and height: 1/3πr²h 🧁',
    wrongAnswerExplanations: {
      'πr²h': 'This is the formula for the volume of a cylinder, not a cone.',
      '2πrh': 'This is the curved surface area of a cylinder, not the volume of a cone.',
      'πr² + πrl': 'This formula relates to surface area calculations, not volume.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch13_t1_qe6',
    type: 'mcq',
    question: 'A cuboid has dimensions 3 cm × 4 cm × 5 cm. What is its volume?',
    options: ['60 cm³', '47 cm³', '94 cm³', '120 cm³'],
    correctAnswer: '60 cm³',
    explanation: 'Volume of cuboid = length × width × height = 3 × 4 × 5 = 60 cm³ 📏',
    wrongAnswerExplanations: {
      '47 cm³': 'This is not the correct calculation of the volume.',
      '94 cm³': 'This is likely the surface area (2(lw + lh + wh)), not the volume.',
      '120 cm³': 'This is not the correct calculation of the volume.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch13_t1_qe7',
    type: 'mcq',
    question: 'The total surface area of a cube with side length 5 cm is:',
    options: ['150 cm²', '125 cm²', '30 cm²', '75 cm²'],
    correctAnswer: '150 cm²',
    explanation: 'Total surface area of a cube = 6a² = 6 × 5² = 6 × 25 = 150 cm² 🎲',
    wrongAnswerExplanations: {
      '125 cm²': 'This is the volume (5³), not the surface area.',
      '30 cm²': 'This calculation is incorrect for the surface area.',
      '75 cm²': 'This is half of the correct surface area.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch13_t1_qe8',
    type: 'mcq',
    question: 'The volume of a sphere with radius 3 cm is:',
    options: ['36π cm³', '9π cm³', '12π cm³', '27π cm³'],
    correctAnswer: '36π cm³',
    explanation: 'Volume of sphere = 4/3πr³ = 4/3 × π × 3³ = 4/3 × π × 27 = 36π cm³ 🔮',
    wrongAnswerExplanations: {
      '9π cm³': 'This equals πr³, which is not the correct formula.',
      '12π cm³': 'This is not the correct calculation of the volume.',
      '27π cm³': 'This equals 3πr³, which is not the correct formula.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch13_t1_qe9',
    type: 'mcq',
    question: 'What is the curved surface area of a cylinder with radius 7 cm and height 10 cm?',
    options: ['140π cm²', '49π cm²', '70π cm²', '119π cm²'],
    correctAnswer: '140π cm²',
    explanation: 'Curved surface area = 2πrh = 2π × 7 × 10 = 140π cm² 🥤',
    wrongAnswerExplanations: {
      '49π cm²': 'This is the area of one circular base (πr²), not the curved surface area.',
      '70π cm²': 'This equals 10πr, which is not the curved surface area.',
      '119π cm²': 'This is not the correct calculation for the curved surface area.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch13_t1_qe10',
    type: 'mcq',
    question: 'The lateral surface area of a cone with radius 5 cm and slant height 13 cm is:',
    options: ['65π cm²', '25π cm²', '30π cm²', '130π cm²'],
    correctAnswer: '65π cm²',
    explanation: 'Lateral surface area of cone = πrl = π × 5 × 13 = 65π cm² 🧶',
    wrongAnswerExplanations: {
      '25π cm²': 'This equals πr², which is the area of the circular base, not lateral surface area.',
      '30π cm²': 'This is not the correct calculation for the lateral surface area.',
      '130π cm²': 'This equals 2πrl, which is not the formula for lateral surface area of a cone.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch13_t1_qe11',
    type: 'mcq',
    question: 'If the radius of a sphere is halved, its volume becomes:',
    options: ['1/8 of the original', '1/2 of the original', '1/4 of the original', '1/6 of the original'],
    correctAnswer: '1/8 of the original',
    explanation: 'When radius is halved, volume becomes (1/2)³ = 1/8 of the original volume, as V ∝ r³ 🔵',
    wrongAnswerExplanations: {
      '1/2 of the original': 'This would be true if volume was proportional to radius, but it\'s proportional to r³.',
      '1/4 of the original': 'This would be true if volume was proportional to r², but it\'s proportional to r³.',
      '1/6 of the original': 'This is not the correct ratio when radius is halved.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch13_t1_qe12',
    type: 'mcq',
    question: 'A cube has a volume of 125 cm³. What is the length of its side?',
    options: ['5 cm', '25 cm', '15 cm', '√125 cm'],
    correctAnswer: '5 cm',
    explanation: 'For a cube with volume V, side length a = ∛V = ∛125 = 5 cm 📏',
    wrongAnswerExplanations: {
      '25 cm': 'This equals 5², but we need ∛125 = 5.',
      '15 cm': 'This is not the cube root of 125.',
      '√125 cm': 'We need the cube root, not the square root, since V = a³.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch13_t1_qe13',
    type: 'mcq',
    question: 'The total surface area of a hemisphere with radius 7 cm is:',
    options: ['147π cm²', '98π cm²', '49π cm²', '196π cm²'],
    correctAnswer: '147π cm²',
    explanation: 'Total surface area = 3πr² = 3π × 7² = 3π × 49 = 147π cm² (curved + circular base) 🥣',
    wrongAnswerExplanations: {
      '98π cm²': 'This equals 2πr², which is not the formula for total surface area of hemisphere.',
      '49π cm²': 'This equals πr², which is only the area of the circular base.',
      '196π cm²': 'This equals 4πr², which is the surface area of a full sphere, not hemisphere.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch13_t1_qe14',
    type: 'mcq',
    question: 'A cylindrical tank has height 14 m and base radius 5 m. What is its capacity in liters?',
    options: ['1,100,000 liters', '110,000 liters', '11,000 liters', '1,100 liters'],
    correctAnswer: '1,100,000 liters',
    explanation: 'Volume = πr²h = π × 5² × 14 = 350π m³ = 350π × 1000 liters = 1,100,000 liters approx. 🚰',
    wrongAnswerExplanations: {
      '110,000 liters': 'This calculation is missing a factor of 10.',
      '11,000 liters': 'This calculation is missing a factor of 100.',
      '1,100 liters': 'This calculation is missing a factor of 1000.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch13_t1_qe15',
    type: 'mcq',
    question: 'The formula for the diagonal of a cuboid with dimensions l, b, and h is:',
    options: ['√(l² + b² + h²)', 'l + b + h', '√(l² + b²)', 'lbh'],
    correctAnswer: '√(l² + b² + h²)',
    explanation: 'The diagonal of a cuboid is calculated using the 3D extension of Pythagoras\' theorem: d = √(l² + b² + h²) 📐',
    wrongAnswerExplanations: {
      'l + b + h': 'This is the sum of dimensions, not the diagonal.',
      '√(l² + b²)': 'This gives the diagonal of the base, not the whole cuboid.',
      'lbh': 'This gives the volume of the cuboid, not the diagonal.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch13_t1_qe16',
    type: 'mcq',
    question: 'The ratio of the volume of a cylinder to the volume of a cone with the same base and height is:',
    options: ['3:1', '2:1', '1:3', '1:1'],
    correctAnswer: '3:1',
    explanation: 'Cylinder volume = πr²h; Cone volume = 1/3πr²h. Ratio = πr²h : (1/3)πr²h = 3:1 📊',
    wrongAnswerExplanations: {
      '2:1': 'This is not the correct ratio of volumes.',
      '1:3': 'This is the reciprocal of the correct ratio.',
      '1:1': 'This would mean equal volumes, which is incorrect.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch13_t1_qe17',
    type: 'mcq',
    question: 'A cube has a surface area of 96 cm². What is its volume?',
    options: ['64 cm³', '32 cm³', '16 cm³', '8 cm³'],
    correctAnswer: '64 cm³',
    explanation: 'Surface area = 6a² = 96 cm², so a = 4 cm. Volume = a³ = 4³ = 64 cm³ 🎲',
    wrongAnswerExplanations: {
      '32 cm³': 'This is half the correct volume.',
      '16 cm³': 'This equals a⁴, which is not the volume formula.',
      '8 cm³': 'This equals 2a², which is not the volume formula.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch13_t1_qe18',
    type: 'mcq',
    question: 'What is the shape of the cross-section when a plane passes through the center of a sphere?',
    options: ['Circle', 'Ellipse', 'Sphere', 'Point'],
    correctAnswer: 'Circle',
    explanation: 'Any plane passing through the center of a sphere creates a circular cross-section 🔵',
    wrongAnswerExplanations: {
      'Ellipse': 'An elliptical cross-section occurs only when the plane does not pass through the center.',
      'Sphere': 'The cross-section is a 2D shape, not a 3D sphere.',
      'Point': 'A point would occur if the plane is tangent to the sphere, not passing through it.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch13_t1_qe19',
    type: 'mcq',
    question: 'If the height of a cylinder is doubled while keeping the radius constant, the volume becomes:',
    options: ['2 times the original', '4 times the original', '8 times the original', 'remains the same'],
    correctAnswer: '2 times the original',
    explanation: 'Volume = πr²h. When h doubles, the volume also doubles since V ∝ h 🥤',
    wrongAnswerExplanations: {
      '4 times the original': 'This would be true if both radius and height were doubled.',
      '8 times the original': 'This would be true if radius were doubled as well (2³ = 8).',
      'remains the same': 'The volume changes when height changes.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch13_t1_qe20',
    type: 'mcq',
    question: 'The slant height of a cone is related to its height h and base radius r by:',
    options: ['l = √(r² + h²)', 'l = r + h', 'l = r × h', 'l = √(r² - h²)'],
    correctAnswer: 'l = √(r² + h²)',
    explanation: 'By Pythagoras\' theorem, slant height l = √(r² + h²) where r is radius and h is height 🧶',
    wrongAnswerExplanations: {
      'l = r + h': 'This is not the correct relationship between slant height, radius, and height.',
      'l = r × h': 'This is not the correct relationship between slant height, radius, and height.',
      'l = √(r² - h²)': 'This formula is incorrect and would give imaginary results when h > r.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  }
];
