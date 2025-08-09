import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch13_t1_qm1',
    type: 'mcq',
    question: 'A solid metallic sphere of radius 10.5 cm is melted and recast into smaller spheres of radius 3.5 cm. How many smaller spheres can be made?',
    options: ['27', '9', '18', '36'],
    correctAnswer: '27',
    explanation: 'Volume ratio = (10.5/3.5)³ = 3³ = 27. So 27 smaller spheres can be made 🔄',
    wrongAnswerExplanations: {
      '9': 'This equals (10.5/3.5)², but we need to cube the ratio since volume ∝ r³.',
      '18': 'This is an incorrect calculation of the volume ratio.',
      '36': 'This is an incorrect calculation of the volume ratio.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t1_qm2',
    type: 'mcq',
    question: 'A cylindrical tank of radius 7 m and height 10 m is filled with water. If water costs ₹15 per kL, what is the cost of filling the tank?',
    options: ['₹23,100', '₹10,500', '₹32,340', '₹7,700'],
    correctAnswer: '₹23,100',
    explanation: 'Volume = πr²h = π × 7² × 10 = 490π m³ = 1,540 kL (approx). Cost = 1,540 × 15 = ₹23,100 💰',
    wrongAnswerExplanations: {
      '₹10,500': 'This calculation likely uses incorrect volume value.',
      '₹32,340': 'This calculation likely uses incorrect volume or rate.',
      '₹7,700': 'This calculation likely uses incorrect volume or rate.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t1_qm3',
    type: 'mcq',
    question: 'A right circular cone has height 12 cm and base radius 5 cm. What is its volume?',
    options: ['100π cm³', '60π cm³', '20π cm³', '300π cm³'],
    correctAnswer: '100π cm³',
    explanation: 'Volume = 1/3πr²h = 1/3 × π × 5² × 12 = 1/3 × π × 300 = 100π cm³ 🧁',
    wrongAnswerExplanations: {
      '60π cm³': 'This is not the correct application of the volume formula 1/3πr²h.',
      '20π cm³': 'This equals πrh, which is not the volume formula for a cone.',
      '300π cm³': 'This equals πr²h, which is the volume of a cylinder, not a cone.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t1_qm4',
    type: 'mcq',
    question: 'The total surface area of a hemisphere with radius 7 cm includes:',
    options: ['Curved surface area + area of circular base', 'Only curved surface area', 'Twice the curved surface area', 'Half the surface area of a sphere'],
    correctAnswer: 'Curved surface area + area of circular base',
    explanation: 'Total surface area = 2πr² + πr² = 3πr². Includes both curved surface and flat base 🥣',
    wrongAnswerExplanations: {
      'Only curved surface area': 'This would be 2πr², but we need to include the base.',
      'Twice the curved surface area': 'This would be 4πr², which is actually the surface area of a full sphere.',
      'Half the surface area of a sphere': 'Half sphere surface area is 2πr², but we need to add the base πr².'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t1_qm5',
    type: 'mcq',
    question: 'A cube and a sphere have the same volume. If the edge of the cube is 6 cm, what is the radius of the sphere?',
    options: ['3√π cm', '3 cm', '6/√π cm', '6/(³√π) cm'],
    correctAnswer: '3√π cm',
    explanation: 'Cube volume = a³ = 216 cm³. For sphere: 4/3πr³ = 216, so r = 3√π cm 🔵',
    wrongAnswerExplanations: {
      '3 cm': 'This doesn\'t account for the π term in the sphere\'s volume formula.',
      '6/√π cm': 'This is not the correct calculation for equal volumes.',
      '6/(³√π) cm': 'This is not the correct calculation for equal volumes.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t1_qm6',
    type: 'mcq',
    question: 'A cylindrical pencil is sharpened into a conical shape at one end. If the pencil diameter is 7 mm and the conical part is 2 cm long, how much wood is removed in sharpening?',
    options: ['77π/3 mm³', '49π mm³', '154π mm³', '11.5π mm³'],
    correctAnswer: '77π/3 mm³',
    explanation: 'Volume removed = cone volume = 1/3πr²h = 1/3 × π × (3.5)² × 20 = 77π/3 mm³ ✏️',
    wrongAnswerExplanations: {
      '49π mm³': 'This equals πr²h, which is not the correct formula for the volume of a cone.',
      '154π mm³': 'This is not the correct calculation for the volume of wood removed.',
      '11.5π mm³': 'This is not the correct calculation for the volume of wood removed.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t1_qm7',
    type: 'mcq',
    question: 'The surface area of a cuboid is 146 cm². If its dimensions are 7 cm × 5 cm × x cm, find x.',
    options: ['3 cm', '4 cm', '6 cm', '2 cm'],
    correctAnswer: '3 cm',
    explanation: 'Surface area = 2(lb + lh + bh) = 146. Substituting l=7, b=5: 2(35 + 7x + 5x) = 146, so x = 3 cm 📏',
    wrongAnswerExplanations: {
      '4 cm': 'This value doesn\'t satisfy the surface area equation.',
      '6 cm': 'This value doesn\'t satisfy the surface area equation.',
      '2 cm': 'This value doesn\'t satisfy the surface area equation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t1_qm8',
    type: 'mcq',
    question: 'A metallic right circular cylinder has radius 7 cm and height 20 cm. It is melted and cast into a cone of radius 14 cm. What is the height of the cone?',
    options: ['15 cm', '30 cm', '10 cm', '7.5 cm'],
    correctAnswer: '15 cm',
    explanation: 'Equating volumes: πr₁²h₁ = 1/3πr₂²h₂ → π×7²×20 = 1/3π×14²×h₂ → h₂ = 15 cm 🔄',
    wrongAnswerExplanations: {
      '30 cm': 'This would be correct if cone volume was 1/6πr²h instead of 1/3πr²h.',
      '10 cm': 'This is not the correct calculation for equal volumes.',
      '7.5 cm': 'This is not the correct calculation for equal volumes.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t1_qm9',
    type: 'mcq',
    question: 'A solid iron sphere of radius 3 cm is hammered into a cylindrical shape of height 1.5 cm. What will be the radius of the base of this cylinder?',
    options: ['6 cm', '3 cm', '4.5 cm', '4 cm'],
    correctAnswer: '6 cm',
    explanation: 'Equating volumes: 4/3πr₁³ = πr₂²h₂ → 4/3π×3³ = π×r₂²×1.5 → r₂ = 6 cm 🔨',
    wrongAnswerExplanations: {
      '3 cm': 'This assumes volume = πr²h instead of equating the volumes.',
      '4.5 cm': 'This is not the correct calculation from equating volumes.',
      '4 cm': 'This is not the correct calculation from equating volumes.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t1_qm10',
    type: 'mcq',
    question: 'If the surface area of a sphere is numerically equal to its volume, what is its radius?',
    options: ['3 units', '6 units', '4 units', '9 units'],
    correctAnswer: '3 units',
    explanation: '4πr² = 4/3πr³ → 3 = r, where r is the radius of the sphere 🔵',
    wrongAnswerExplanations: {
      '6 units': 'This doesn\'t satisfy the equation 4πr² = 4/3πr³.',
      '4 units': 'This doesn\'t satisfy the equation 4πr² = 4/3πr³.',
      '9 units': 'This doesn\'t satisfy the equation 4πr² = 4/3πr³.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t1_qm11',
    type: 'mcq',
    question: 'A cone, a hemisphere and a cylinder stand on equal bases and have the same height. What is the ratio of their volumes?',
    options: ['1 : 2 : 3', '1 : 3 : 2', '3 : 2 : 1', '2 : 1 : 3'],
    correctAnswer: '1 : 2 : 3',
    explanation: 'Cone: 1/3πr²h, Hemisphere: 2/3πr²h, Cylinder: πr²h. Ratio = 1 : 2 : 3 📊',
    wrongAnswerExplanations: {
      '1 : 3 : 2': 'This incorrectly places the cylinder volume between cone and hemisphere.',
      '3 : 2 : 1': 'This reverses the correct order of volumes.',
      '2 : 1 : 3': 'This incorrectly places the hemisphere volume below the cone volume.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t1_qm12',
    type: 'mcq',
    question: 'A hemispherical bowl of internal radius 9 cm is filled with liquid. This liquid is poured into a cylindrical vessel of radius 3 cm. Find the height of the liquid in the cylinder.',
    options: ['54 cm', '27 cm', '18 cm', '36 cm'],
    correctAnswer: '54 cm',
    explanation: 'Hemisphere volume = 2/3πr₁³ = 2/3π×9³. For cylinder: πr₂²h = 2/3π×9³ → h = 54 cm 🥣',
    wrongAnswerExplanations: {
      '27 cm': 'This equals 9 × 3, but the correct relationship involves volumes.',
      '18 cm': 'This equals 2 × 9, which is not the correct calculation.',
      '36 cm': 'This equals 4 × 9, which is not the correct calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t1_qm13',
    type: 'mcq',
    question: 'A cuboid has surface area 352 sq.cm. If its length and breadth are 12 cm and 8 cm respectively, find its height.',
    options: ['4 cm', '6 cm', '5 cm', '3 cm'],
    correctAnswer: '4 cm',
    explanation: 'Surface area = 2(lb + lh + bh) = 352. Substituting l=12, b=8: 2(96 + 12h + 8h) = 352 → h = 4 cm 📏',
    wrongAnswerExplanations: {
      '6 cm': 'This value doesn\'t satisfy the surface area equation.',
      '5 cm': 'This value doesn\'t satisfy the surface area equation.',
      '3 cm': 'This value doesn\'t satisfy the surface area equation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t1_qm14',
    type: 'mcq',
    question: 'A cone of height 15 cm and base radius 8 cm is made of modeling clay. A child reshapes it into a sphere. Find the radius of the sphere.',
    options: ['6 cm', '8 cm', '4 cm', '5 cm'],
    correctAnswer: '6 cm',
    explanation: 'Cone volume = 1/3πr²h = 1/3π×8²×15. Equating with 4/3πR³ gives R = 6 cm 🔄',
    wrongAnswerExplanations: {
      '8 cm': 'This assumes volume isn\'t conserved in reshaping.',
      '4 cm': 'This is not the correct calculation from equating volumes.',
      '5 cm': 'This is not the correct calculation from equating volumes.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t1_qm15',
    type: 'mcq',
    question: 'Water flows at the rate of 10 m/min through a cylindrical pipe of diameter 14 mm. How much time will it take to fill a conical vessel with base diameter 40 cm and depth 24 cm?',
    options: ['16 minutes', '12 minutes', '8 minutes', '24 minutes'],
    correctAnswer: '16 minutes',
    explanation: 'Pipe flow rate = π×0.7²×10 cm³/min. Cone volume = 1/3π×20²×24 cm³. Time = 16 minutes 🚰',
    wrongAnswerExplanations: {
      '12 minutes': 'This involves incorrect calculation of either flow rate or volume.',
      '8 minutes': 'This involves incorrect calculation of either flow rate or volume.',
      '24 minutes': 'This involves incorrect calculation of either flow rate or volume.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t1_qm16',
    type: 'mcq',
    question: 'A solid sphere of radius 6 cm is cut into two equal halves. Find the total surface area of one half-sphere.',
    options: ['226.3 cm²', '113.1 cm²', '169.7 cm²', '339.4 cm²'],
    correctAnswer: '226.3 cm²',
    explanation: 'Total surface area = 2πr² + πr² = 3πr² = 3π×36 = 226.3 cm² (curved + flat cut) 🔵',
    wrongAnswerExplanations: {
      '113.1 cm²': 'This equals half the surface area of a sphere (2πr²), but doesn\'t include the cut face.',
      '169.7 cm²': 'This incorrectly calculates the total surface area.',
      '339.4 cm²': 'This is the surface area of a sphere (4πr²), not a hemisphere.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t1_qm17',
    type: 'mcq',
    question: 'A solid metal cylinder of height 2.4 cm and diameter 1.4 cm is melted to form a wire of diameter 0.2 cm. Find the length of the wire.',
    options: ['117.6 cm', '58.8 cm', '29.4 cm', '235.2 cm'],
    correctAnswer: '117.6 cm',
    explanation: 'Volume conservation: π×0.7²×2.4 = π×0.1²×L → L = 117.6 cm 🔄',
    wrongAnswerExplanations: {
      '58.8 cm': 'This is half of the correct length.',
      '29.4 cm': 'This is 1/4 of the correct length.',
      '235.2 cm': 'This is double the correct length.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t1_qm18',
    type: 'mcq',
    question: 'If the radius of a sphere is increased by 50%, by what percentage does its volume increase?',
    options: ['237.5%', '50%', '150%', '125%'],
    correctAnswer: '237.5%',
    explanation: 'New volume ratio = (1.5r)³/r³ = 3.375. Increase = 237.5% (3.375 - 1 = 2.375 = 237.5%) 📊',
    wrongAnswerExplanations: {
      '50%': 'This is the increase in radius, not volume.',
      '150%': 'This would be true if volume was proportional to radius, not r³.',
      '125%': 'This equals (1.5)² - 1, but volume is proportional to r³, not r².'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t1_qm19',
    type: 'mcq',
    question: 'A cylindrical bucket of height 32 cm and base radius 18 cm is filled with sand. This sand is poured to form a conical heap of height 24 cm. Find the radius of the base of the conical heap.',
    options: ['36 cm', '24 cm', '48 cm', '12 cm'],
    correctAnswer: '36 cm',
    explanation: 'Equating volumes: πr₁²h₁ = 1/3πr₂²h₂ → π×18²×32 = 1/3π×r₂²×24 → r₂ = 36 cm 🏝️',
    wrongAnswerExplanations: {
      '24 cm': 'This is the height of the cone, not the radius of its base.',
      '48 cm': 'This is not the correct calculation from equating volumes.',
      '12 cm': 'This is not the correct calculation from equating volumes.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch13_t1_qm20',
    type: 'mcq',
    question: 'A solid is in the form of a cone standing on a hemisphere with both their circular faces coinciding. If the radius is r and height of the cone is h, find the volume of the solid.',
    options: ['π/3(3r³ + r²h)', '2π/3(r³ + r²h)', 'π/3(r³ + r²h)', '4π/3(r³ + r²h)'],
    correctAnswer: 'π/3(3r³ + r²h)',
    explanation: 'Volume = hemisphere + cone = 2/3πr³ + 1/3πr²h = π/3(3r³ + r²h) 🧁',
    wrongAnswerExplanations: {
      '2π/3(r³ + r²h)': 'This doesn\'t correctly combine the volumes of hemisphere and cone.',
      'π/3(r³ + r²h)': 'This underestimates the hemisphere component.',
      '4π/3(r³ + r²h)': 'This overestimates the total volume.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  }
];
