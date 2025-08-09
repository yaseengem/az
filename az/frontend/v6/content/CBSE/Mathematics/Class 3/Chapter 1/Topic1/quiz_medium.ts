import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl3_ch1_t1_qm1',
    type: 'mcq',
    question: 'If you place four balls in a square pattern, how many balls will be in each row?',
    options: ['1', '2', '4', '3'],
    correctAnswer: '2',
    explanation: 'A square pattern with 4 balls would have 2 balls in each row and 2 balls in each column.',
    wrongAnswerExplanations: {
      '1': 'One ball per row would give a vertical line of 4 balls, not a square pattern.',
      '4': 'Having all 4 balls in a single row would create a line, not a square pattern.',
      '3': 'Having 3 balls in a row would not create a square pattern with 4 balls total.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch1_t1_qm2',
    type: 'mcq',
    question: 'If a shadow is cast to the west, where is the light source?',
    options: ['East', 'West', 'North', 'South'],
    correctAnswer: 'East',
    explanation: 'Shadows are cast in the opposite direction from the light source, so if the shadow points west, the light is coming from the east.',
    wrongAnswerExplanations: {
      'West': 'If the light came from the west, the shadow would point east, not west.',
      'North': 'If the light came from the north, the shadow would point south, not west.',
      'South': 'If the light came from the south, the shadow would point north, not west.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch1_t1_qm3',
    type: 'mcq',
    question: 'Which of these statements about mirrors is true?',
    options: [
      'A mirror shows exactly what you look like to others',
      'A mirror reverses left and right but not up and down',
      'A mirror makes everything look upside down',
      'A mirror always makes objects look smaller'
    ],
    correctAnswer: 'A mirror reverses left and right but not up and down',
    explanation: 'A mirror creates a reflection that reverses directions perpendicular to the mirror surface (typically left/right) but not parallel directions (up/down).',
    wrongAnswerExplanations: {
      'A mirror shows exactly what you look like to others': 'A mirror shows a reversed image, not what others see when looking at you.',
      'A mirror makes everything look upside down': 'Mirrors do not flip images upside down unless specifically designed to do so.',
      'A mirror always makes objects look smaller': 'Regular flat mirrors do not change the size of objects in their reflection.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch1_t1_qm4',
    type: 'mcq',
    question: 'If you are facing north and make a complete 360° turn clockwise, which direction will you face at the end?',
    options: ['North', 'South', 'East', 'West'],
    correctAnswer: 'North',
    explanation: 'A complete 360° turn brings you back to your original direction, which was north.',
    wrongAnswerExplanations: {
      'South': 'A 180° turn would make you face south, not a 360° turn.',
      'East': 'A 90° clockwise turn would make you face east, not a 360° turn.',
      'West': 'A 270° clockwise turn would make you face west, not a 360° turn.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch1_t1_qm5',
    type: 'mcq',
    question: 'Which of these objects would look completely different when viewed from different angles?',
    options: ['A cube with different colors on each face', 'A plain white ball', 'A round coin', 'A flat circular plate'],
    correctAnswer: 'A cube with different colors on each face',
    explanation: 'A cube with different colors on each face would show different colors depending on which side you are looking at.',
    wrongAnswerExplanations: {
      'A plain white ball': 'A plain white ball looks the same from all angles due to its uniform color and spherical shape.',
      'A round coin': 'A round coin looks circular from above and like a thin rectangle from the side, but not completely different.',
      'A flat circular plate': 'A plate looks circular from above and like a thin line from the side, but not completely different in multiple views.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch1_t1_qm6',
    type: 'mcq',
    question: 'If you are standing between a tree and a building, which statement is correct?',
    options: [
      'The tree is in front of you and the building is behind you',
      'The building is in front of you and the tree is behind you',
      'Either statement could be correct depending on which way you are facing',
      'Neither statement is correct'
    ],
    correctAnswer: 'Either statement could be correct depending on which way you are facing',
    explanation: 'If you are between two objects, either one could be in front of you depending on which direction you face.',
    wrongAnswerExplanations: {
      'The tree is in front of you and the building is behind you': 'This is only true if you are facing the tree.',
      'The building is in front of you and the tree is behind you': 'This is only true if you are facing the building.',
      'Neither statement is correct': 'One of the first two statements must be correct depending on which way you are facing.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch1_t1_qm7',
    type: 'mcq',
    question: 'When placing three toys in a line from left to right, which position is the middle toy in?',
    options: ['First position', 'Second position', 'Third position', 'Fourth position'],
    correctAnswer: 'Second position',
    explanation: 'In a line of three toys from left to right, the positions are: first (leftmost), second (middle), and third (rightmost).',
    wrongAnswerExplanations: {
      'First position': 'The first position is the leftmost toy, not the middle one.',
      'Third position': 'The third position is the rightmost toy, not the middle one.',
      'Fourth position': 'There is no fourth position in a line of three toys.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch1_t1_qm8',
    type: 'mcq',
    question: 'If you walk forward, then turn right, then turn right again, which direction are you facing compared to your starting position?',
    options: ['The same direction', 'The opposite direction', 'To the right', 'To the left'],
    correctAnswer: 'The opposite direction',
    explanation: 'After walking forward, turning right once turns you 90° clockwise, and turning right again turns you another 90° clockwise, for a total of 180° - the opposite direction from start.',
    wrongAnswerExplanations: {
      'The same direction': 'You would need to turn right four times to face the same direction again.',
      'To the right': 'After two right turns, you are facing backward, not to the right of your starting position.',
      'To the left': 'After two right turns, you are facing backward, not to the left of your starting position.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch1_t1_qm9',
    type: 'mcq',
    question: 'Which of these position words describes where a fish is in relation to water?',
    options: ['Inside', 'On top of', 'Underneath', 'Beside'],
    correctAnswer: 'Inside',
    explanation: 'A fish lives inside the water, completely surrounded by it.',
    wrongAnswerExplanations: {
      'On top of': 'A fish swimming on top of water would be partially out of water, which is not natural for most fish.',
      'Underneath': 'Underneath would mean the fish is below the water, perhaps on the bottom, but not in it.',
      'Beside': 'Beside would mean the fish is next to the water, not in it.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch1_t1_qm10',
    type: 'mcq',
    question: 'From which direction does the classroom door appear widest?',
    options: ['When looking at it from the front', 'When looking at it from the side', 'When looking at it from above', 'When looking at it from below'],
    correctAnswer: 'When looking at it from the front',
    explanation: 'A door appears widest when viewed directly from the front, showing its full width and height.',
    wrongAnswerExplanations: {
      'When looking at it from the side': 'From the side, a door appears as a thin rectangle or line, showing its thickness but not its width.',
      'When looking at it from above': 'From above, you might see the top edge, which shows the width but not the full door.',
      'When looking at it from below': 'From below, you might see the bottom edge, which shows the width but not the full door.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch1_t1_qm11',
    type: 'mcq',
    question: 'If you are standing at a crossroads and can go north, south, east, or west, how many different directions can you choose?',
    options: ['2', '3', '4', '6'],
    correctAnswer: '4',
    explanation: 'At a crossroads with paths going north, south, east, and west, you have 4 possible directions to choose from.',
    wrongAnswerExplanations: {
      '2': 'There are 4 directions at a crossroads, not just 2.',
      '3': 'A standard crossroads has 4 directions, not 3.',
      '6': 'A standard crossroads has only 4 directions (N, S, E, W), not 6.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch1_t1_qm12',
    type: 'mcq',
    question: 'What happens to your shadow size as you move closer to a light source?',
    options: [
      'It gets larger', 
      'It gets smaller', 
      'It stays the same size', 
      'It disappears completely'
    ],
    correctAnswer: 'It gets larger',
    explanation: 'As you move closer to a light source, your shadow gets larger because your body blocks more of the light rays at sharp angles.',
    wrongAnswerExplanations: {
      'It gets smaller': 'Moving closer to a light source makes your shadow larger, not smaller.',
      'It stays the same size': 'Shadow size changes with distance from the light source, not stays the same.',
      'It disappears completely': 'Moving closer to a light source does not make your shadow disappear.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch1_t1_qm13',
    type: 'mcq',
    question: 'When arranging objects from tallest to shortest, which position would the shortest object be in?',
    options: ['First', 'Middle', 'Last', 'Any position'],
    correctAnswer: 'Last',
    explanation: 'When arranging objects from tallest to shortest, the shortest object comes last in the arrangement.',
    wrongAnswerExplanations: {
      'First': 'The tallest object would be first when arranging from tallest to shortest.',
      'Middle': 'The middle object would be neither the tallest nor the shortest.',
      'Any position': 'The shortest object has a specific position (last) in this arrangement.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch1_t1_qm14',
    type: 'mcq',
    question: 'If a box is in the northeast corner of a room, which two walls is it touching?',
    options: ['North and east walls', 'South and west walls', 'North and west walls', 'South and east walls'],
    correctAnswer: 'North and east walls',
    explanation: 'The northeast corner is where the north wall and east wall meet.',
    wrongAnswerExplanations: {
      'South and west walls': 'These walls meet at the southwest corner, not the northeast corner.',
      'North and west walls': 'These walls meet at the northwest corner, not the northeast corner.',
      'South and east walls': 'These walls meet at the southeast corner, not the northeast corner.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch1_t1_qm15',
    type: 'mcq',
    question: 'When you look at your watch, which direction on the watch face represents east?',
    options: ['3 o\'clock position', '6 o\'clock position', '9 o\'clock position', '12 o\'clock position'],
    correctAnswer: '3 o\'clock position',
    explanation: 'On a watch face, 12 is north, 3 is east, 6 is south, and 9 is west when oriented standard way.',
    wrongAnswerExplanations: {
      '6 o\'clock position': 'The 6 o\'clock position represents south, not east.',
      '9 o\'clock position': 'The 9 o\'clock position represents west, not east.',
      '12 o\'clock position': 'The 12 o\'clock position represents north, not east.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch1_t1_qm16',
    type: 'mcq',
    question: 'If you stand with your left arm pointing north and your right arm pointing south, which direction is behind you?',
    options: ['East', 'West', 'Northeast', 'Southwest'],
    correctAnswer: 'West',
    explanation: 'If your arms are pointing north and south, you are facing east, so west is behind you.',
    wrongAnswerExplanations: {
      'East': 'If your arms are pointing north and south, you are facing east, so it is in front of you, not behind.',
      'Northeast': 'If your arms are pointing north and south, northeast would be diagonally to your left front, not behind you.',
      'Southwest': 'If your arms are pointing north and south, southwest would be diagonally to your right back, not directly behind you.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch1_t1_qm17',
    type: 'mcq',
    question: 'What shape would you see if you look at a cylinder from the top?',
    options: ['Circle', 'Rectangle', 'Square', 'Triangle'],
    correctAnswer: 'Circle',
    explanation: 'When viewed from the top, a cylinder appears as a circle.',
    wrongAnswerExplanations: {
      'Rectangle': 'A cylinder viewed from the side appears as a rectangle, not from the top.',
      'Square': 'A cylinder never appears as a square from any angle.',
      'Triangle': 'A cylinder never appears as a triangle from any angle.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch1_t1_qm18',
    type: 'mcq',
    question: 'If you fold a square piece of paper in half, what shape do you get?',
    options: ['Rectangle', 'Triangle', 'Smaller square', 'Circle'],
    correctAnswer: 'Rectangle',
    explanation: 'When a square is folded in half, its length stays the same but its width is halved, creating a rectangle.',
    wrongAnswerExplanations: {
      'Triangle': 'Folding a square in half diagonally would create a triangle, not folding it in half straight.',
      'Smaller square': 'Folding a square in half changes the proportions, so it is no longer a square.',
      'Circle': 'Folding a square cannot create a circle.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch1_t1_qm19',
    type: 'mcq',
    question: 'If you are looking at a calendar for the month, which direction would you read to find the days of the week?',
    options: ['From left to right', 'From right to left', 'From top to bottom', 'From bottom to top'],
    correctAnswer: 'From left to right',
    explanation: 'On most calendars, the days of the week are arranged horizontally from left to right.',
    wrongAnswerExplanations: {
      'From right to left': 'Standard calendars list days from left to right, not right to left.',
      'From top to bottom': 'The weeks progress from top to bottom, but the days of the week are read left to right.',
      'From bottom to top': 'Neither days nor weeks are typically read from bottom to top on a calendar.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch1_t1_qm20',
    type: 'mcq',
    question: 'If your shadow is pointing east in the evening, which direction is the sun?',
    options: ['West', 'East', 'North', 'South'],
    correctAnswer: 'West',
    explanation: 'In the evening, the sun is in the west, and shadows point in the opposite direction (east).',
    wrongAnswerExplanations: {
      'East': 'If the sun was in the east, your shadow would point west, not east.',
      'North': 'If the sun was in the north, your shadow would point south, not east.',
      'South': 'If the sun was in the south, your shadow would point north, not east.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  }
];
