import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl3_ch1_t2_qm1',
        type: "mcq",
        question: "If I am facing east and turn clockwise by 90 degrees, which direction will I be facing?",
        options: ["North", "South", "East", "West"],
        correctAnswer: "South",
        explanation: "When facing east, a 90-degree clockwise turn means turning to your right, which would have you facing south. Understanding rotational direction helps with navigation. 🧭",
        wrongAnswerExplanations: {
            "North": "A 90-degree counterclockwise turn from east would have you facing north, not clockwise.",
            "East": "This is the direction you were already facing, not after turning 90 degrees clockwise.",
            "West": "This would require a 180-degree turn from east, not just 90 degrees."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch1_t2_qm2',
        type: "mcq",
        question: "Riya is standing 2 steps to the north and 3 steps to the east of a tree. Which statement best describes the tree's position relative to Riya?",
        options: [
            "2 steps south and 3 steps west of Riya",
            "2 steps north and 3 steps west of Riya",
            "2 steps south and 3 steps east of Riya",
            "3 steps south and 2 steps west of Riya"
        ],
        correctAnswer: "2 steps south and 3 steps west of Riya",
        explanation: "When describing relative positions, directions are reversed. If Riya is 2 steps north and 3 steps east of the tree, then the tree must be 2 steps south and 3 steps west of Riya. 🌳",
        wrongAnswerExplanations: {
            "2 steps north and 3 steps west of Riya": "This incorrectly flips the east-west direction but not the north-south direction.",
            "2 steps south and 3 steps east of Riya": "This incorrectly flips the north-south direction but not the east-west direction.",
            "3 steps south and 2 steps west of Riya": "This incorrectly flips the number of steps in each direction."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch1_t2_qm3',
        type: "mcq",
        question: "Mohan first walks 3 steps forward, then turns right and walks 2 steps, then turns right again and walks 3 steps. How far is he from his starting position?",
        options: ["0 steps", "2 steps", "4 steps", "8 steps"],
        correctAnswer: "2 steps",
        explanation: "Mohan walks 3 steps forward, then 2 steps right, then 3 steps backward (since turning right twice means facing backward). This leaves him 2 steps to the right of his starting point. 👣",
        wrongAnswerExplanations: {
            "0 steps": "This would mean Mohan returned to his starting point, which is not true since he's 2 steps to the right.",
            "4 steps": "This incorrectly adds all the distances without considering direction.",
            "8 steps": "This is the total distance walked (3+2+3), not the distance from the starting point."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch1_t2_qm4',
        type: "mcq",
        question: "A box has a toy car inside it. The box is on a table. The table is in a room. Which statement correctly describes the position of the toy car?",
        options: [
            "The toy car is below the table",
            "The toy car is inside the room and on the table",
            "The toy car is inside the box which is on the table in the room",
            "The toy car is above the box"
        ],
        correctAnswer: "The toy car is inside the box which is on the table in the room",
        explanation: "This correctly describes the nested relationship: the toy car is inside the box, the box is on the table, and the table is in the room. Understanding nested spatial relationships helps describe complex positions. 🚗",
        wrongAnswerExplanations: {
            "The toy car is below the table": "This is incorrect because the toy car is inside the box which is on the table, not below it.",
            "The toy car is inside the room and on the table": "This is incomplete because it doesn't mention that the toy car is inside the box.",
            "The toy car is above the box": "This is incorrect because the toy car is inside the box, not above it."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch1_t2_qm5',
        type: "mcq",
        question: "In a row of 5 children, Aman is standing to the right of Neha but to the left of Priya. Sanjay is to the left of Neha, and Rohan is to the right of Priya. What is the correct order of the children from left to right?",
        options: [
            "Sanjay, Neha, Aman, Priya, Rohan",
            "Rohan, Priya, Aman, Neha, Sanjay",
            "Sanjay, Aman, Neha, Priya, Rohan",
            "Rohan, Priya, Neha, Aman, Sanjay"
        ],
        correctAnswer: "Sanjay, Neha, Aman, Priya, Rohan",
        explanation: "From the clues: Aman is between Neha and Priya (Neha - Aman - Priya), Sanjay is to Neha's left (Sanjay - Neha), and Rohan is to Priya's right (Priya - Rohan). Putting it all together gives us: Sanjay - Neha - Aman - Priya - Rohan. 👧👦",
        wrongAnswerExplanations: {
            "Rohan, Priya, Aman, Neha, Sanjay": "This is the reverse order (right to left instead of left to right).",
            "Sanjay, Aman, Neha, Priya, Rohan": "This incorrectly places Aman before Neha, but the clue states Aman is to the right of Neha.",
            "Rohan, Priya, Neha, Aman, Sanjay": "This has Neha between Priya and Aman, which contradicts the information that Aman is between Neha and Priya."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch1_t2_qm6',
        type: "mcq",
        question: "If you face north and then make a half-turn counterclockwise, which direction will you be facing?",
        options: ["North", "South", "East", "West"],
        correctAnswer: "West",
        explanation: "When facing north, a half-turn (180 degrees) counterclockwise means turning to your left side all the way around. This would have you facing west. Understanding rotation and directions is important for navigation. 🧭",
        wrongAnswerExplanations: {
            "North": "This would mean no turn at all, not a half-turn.",
            "South": "A half-turn clockwise from north would have you facing south, not counterclockwise.",
            "East": "A quarter-turn counterclockwise from north would have you facing west, not a half-turn."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch1_t2_qm7',
        type: "mcq",
        question: "The sun sets in the west. If you are watching the sunset, in which direction are you looking?",
        options: ["East", "West", "North", "South"],
        correctAnswer: "West",
        explanation: "Since the sun sets in the west, to watch the sunset, you must be looking toward the west. Understanding natural phenomena helps us orient ourselves. 🌅",
        wrongAnswerExplanations: {
            "East": "The sun rises in the east but sets in the west. Looking east would allow you to see a sunrise, not a sunset.",
            "North": "Looking north would not allow you to see the sunset, which happens in the west.",
            "South": "Looking south would not allow you to see the sunset, which happens in the west."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch1_t2_qm8',
        type: "mcq",
        question: "A classroom has 5 rows of desks numbered from 1 to 5, with row 1 closest to the teacher. Ravi sits in row 3, column 2. Meera sits directly in front of Ravi, and Sunil sits directly behind Ravi. In which rows do Meera and Sunil sit?",
        options: [
            "Meera in row 2, Sunil in row 4",
            "Meera in row 4, Sunil in row 2",
            "Meera in row 1, Sunil in row 5",
            "Meera in row 5, Sunil in row 1"
        ],
        correctAnswer: "Meera in row 2, Sunil in row 4",
        explanation: "If Ravi is in row 3, then the person directly in front of him would be in row 2 (Meera), and the person directly behind him would be in row 4 (Sunil). Understanding seating arrangements requires spatial awareness. 🏫",
        wrongAnswerExplanations: {
            "Meera in row 4, Sunil in row 2": "This reverses the positions—someone in front should be in a lower-numbered row, not higher.",
            "Meera in row 1, Sunil in row 5": "This places Meera and Sunil too far from Ravi. They should be in adjacent rows.",
            "Meera in row 5, Sunil in row 1": "This both reverses the positions and places them too far from Ravi."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch1_t2_qm9',
        type: "mcq",
        question: "A treasure map has the following instructions: 'From the big tree, walk 5 steps north, then 3 steps east, then 2 steps south.' If you follow these directions, where will you end up relative to the big tree?",
        options: [
            "3 steps east and 3 steps north of the tree",
            "3 steps east and 5 steps north of the tree",
            "5 steps north and 3 steps west of the tree",
            "2 steps south and 3 steps east of the tree"
        ],
        correctAnswer: "3 steps east and 3 steps north of the tree",
        explanation: "Starting at the tree, going 5 steps north, 3 steps east, then 2 steps south means you'll end up 3 steps north (5 north - 2 south) and 3 steps east of the tree. Combining directional movements helps in navigation. 🗺️",
        wrongAnswerExplanations: {
            "3 steps east and 5 steps north of the tree": "This doesn't account for the 2 steps south in the final movement.",
            "5 steps north and 3 steps west of the tree": "This incorrectly changes east to west, which is the opposite direction.",
            "2 steps south and 3 steps east of the tree": "This ignores the 5 steps north and only considers the last movement."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch1_t2_qm10',
        type: "mcq",
        question: "If we say 'Place the pencil between the book and the eraser,' which arrangement shows this correctly?",
        options: [
            "Book - Eraser - Pencil",
            "Eraser - Book - Pencil",
            "Book - Pencil - Eraser",
            "Pencil - Book - Eraser"
        ],
        correctAnswer: "Book - Pencil - Eraser",
        explanation: "For the pencil to be between the book and the eraser, it must be in the middle of these two objects. The arrangement would be: Book - Pencil - Eraser. Understanding the position word 'between' helps in following directions precisely. 📝",
        wrongAnswerExplanations: {
            "Book - Eraser - Pencil": "This places the pencil after both the book and eraser, not between them.",
            "Eraser - Book - Pencil": "This places the pencil after both the eraser and book, not between them.",
            "Pencil - Book - Eraser": "This places the book between the pencil and eraser, not the pencil between the book and eraser."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch1_t2_qm11',
        type: "mcq",
        question: "Rahul is looking at a photo album. His grandparents are in the center of the photo, his parents are to the left of his grandparents, and his cousins are to the right of his grandparents. Where are Rahul's parents in relation to his cousins?",
        options: [
            "To the right of his cousins",
            "To the left of his cousins",
            "Above his cousins",
            "Below his cousins"
        ],
        correctAnswer: "To the left of his cousins",
        explanation: "If the grandparents are in the center, parents are to the left of grandparents, and cousins are to the right of grandparents, then the parents must be to the left of the cousins. This uses transitive spatial reasoning: if A is left of B and B is left of C, then A is left of C. 📷",
        wrongAnswerExplanations: {
            "To the right of his cousins": "This contradicts the given positions—if parents are left of grandparents and cousins are right of grandparents, parents cannot be right of cousins.",
            "Above his cousins": "The problem doesn't mention vertical positioning, only left and right (horizontal) positioning.",
            "Below his cousins": "The problem doesn't mention vertical positioning, only left and right (horizontal) positioning."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch1_t2_qm12',
        type: "mcq",
        question: "Ria goes to the market which is east of her home. From the market, the library is north, and the park is west. If Ria is at the market, in which direction is her home?",
        options: ["North", "South", "East", "West"],
        correctAnswer: "West",
        explanation: "If the market is east of Ria's home, then her home must be west of the market. When describing relative positions, directions are reversed. Understanding this helps with spatial navigation. 🏠",
        wrongAnswerExplanations: {
            "North": "The library is north of the market, not Ria's home.",
            "South": "The problem doesn't indicate that Ria's home is south of the market.",
            "East": "If the market is east of home, then home cannot also be east of the market."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch1_t2_qm13',
        type: "mcq",
        question: "If I am standing in front of a mirror, raise my right hand, and look at my reflection, which hand appears to be raised in the mirror?",
        options: ["Right hand", "Left hand", "Both hands", "Neither hand"],
        correctAnswer: "Left hand",
        explanation: "Mirrors reverse left and right directions. When you raise your right hand while facing a mirror, your reflection appears to raise its left hand (which is on the right side of your actual right hand). Understanding mirror reflections helps with spatial awareness. 🪞",
        wrongAnswerExplanations: {
            "Right hand": "Mirrors create a left-right reversal, so your right hand appears as the left hand in the reflection.",
            "Both hands": "Only one hand is raised according to the question, so only one hand would appear raised in the reflection.",
            "Neither hand": "If you raise your hand, your reflection will also show a raised hand, just reversed."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch1_t2_qm14',
        type: "mcq",
        question: "In a garden, there is a tree in the center. A swing is to the north of the tree, a slide is to the east, a sandbox is to the south, and a bench is to the west. If I am sitting on the bench facing the tree, what is to my right?",
        options: ["The swing", "The slide", "The sandbox", "Another bench"],
        correctAnswer: "The swing",
        explanation: "If you're sitting on the bench (west of the tree) facing the tree (east), then north would be to your right. Since the swing is north of the tree, it would be to your right. Understanding relative positions from different perspectives is important for spatial orientation. 🌳",
        wrongAnswerExplanations: {
            "The slide": "The slide is east of the tree, which would be directly in front of you if you're sitting on the bench facing the tree.",
            "The sandbox": "The sandbox is south of the tree, which would be to your left if you're sitting on the bench facing the tree.",
            "Another bench": "There is no mention of another bench in the garden."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch1_t2_qm15',
        type: "mcq",
        question: "Rita wrote a sequence of directions: 'Go north for 2 blocks, then east for 3 blocks, then south for 2 blocks.' Where would Rita end up compared to her starting point?",
        options: [
            "3 blocks east of the starting point",
            "3 blocks west of the starting point",
            "2 blocks north and 3 blocks east of the starting point",
            "2 blocks south and 3 blocks east of the starting point"
        ],
        correctAnswer: "3 blocks east of the starting point",
        explanation: "Going north 2 blocks, then east 3 blocks, then south 2 blocks means Rita returns to the same latitude (north-south position) she started at, but is now 3 blocks east of her starting point. Visualizing paths on a grid helps with understanding directions. 🧭",
        wrongAnswerExplanations: {
            "3 blocks west of the starting point": "Going east means moving eastward, not westward.",
            "2 blocks north and 3 blocks east of the starting point": "The 2 blocks south at the end cancels out the 2 blocks north at the beginning.",
            "2 blocks south and 3 blocks east of the starting point": "Rita first goes north 2 blocks and then south 2 blocks, which returns her to the original north-south position, not 2 blocks south."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch1_t2_qm16',
        type: "mcq",
        question: "On a game board, a piece can move in four directions: forward, backward, left, or right. If the piece moves forward 3 spaces, then right 2 spaces, then backward 1 space, where is it compared to its starting position?",
        options: [
            "2 spaces forward and 2 spaces right",
            "2 spaces forward and 2 spaces left",
            "2 spaces backward and 2 spaces right",
            "2 spaces backward and 2 spaces left"
        ],
        correctAnswer: "2 spaces forward and 2 spaces right",
        explanation: "The piece moves forward 3 spaces, then right 2 spaces, then backward 1 space. The net movement is 2 spaces forward (3 forward - 1 backward) and 2 spaces right. Understanding net displacement helps in tracking position changes in games. 🎲",
        wrongAnswerExplanations: {
            "2 spaces forward and 2 spaces left": "The piece moves right, not left.",
            "2 spaces backward and 2 spaces right": "The forward movement (3 spaces) is greater than the backward movement (1 space), so the net movement is forward, not backward.",
            "2 spaces backward and 2 spaces left": "Both the direction of forward/backward and left/right are incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch1_t2_qm17',
        type: "mcq",
        question: "A bird is flying above a lake. A fish is swimming in the lake. Which statement correctly describes their positions?",
        options: [
            "The bird is below the fish",
            "The fish is above the bird",
            "The bird is above the fish",
            "The fish is inside the bird"
        ],
        correctAnswer: "The bird is above the fish",
        explanation: "The bird is flying in the air above the lake, while the fish is swimming in the water of the lake. Therefore, the bird's position is above the fish. Understanding vertical positioning is important for describing spatial relationships. 🐦🐠",
        wrongAnswerExplanations: {
            "The bird is below the fish": "This reverses the actual positions—birds fly in the air above lakes where fish swim.",
            "The fish is above the bird": "This also reverses the positions, which contradicts the typical positions of birds and fish.",
            "The fish is inside the bird": "This would only be true if the bird had eaten the fish, which is not stated in the problem."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch1_t2_qm18',
        type: "mcq",
        question: "In a floor plan of a house, the kitchen is to the right of the living room. The bathroom is above the kitchen. The bedroom is to the left of the bathroom. Where is the bedroom located in relation to the living room?",
        options: [
            "Below the living room",
            "Above the living room",
            "To the right of the living room",
            "To the left of the living room"
        ],
        correctAnswer: "Above the living room",
        explanation: "If the kitchen is to the right of the living room, and the bathroom is above the kitchen, and the bedroom is to the left of the bathroom, then the bedroom must be above the living room. This type of problem requires visualizing relative positions on a 2D grid. 🏠",
        wrongAnswerExplanations: {
            "Below the living room": "This contradicts the positions described—if we follow the path, the bedroom would be above, not below.",
            "To the right of the living room": "The kitchen is to the right of the living room, but the bedroom is to the left of the bathroom, which is above the kitchen.",
            "To the left of the living room": "While the bedroom is to the left of the bathroom, it is not to the left of the living room."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch1_t2_qm19',
        type: "mcq",
        question: "Ram is standing facing the rising sun. In which direction is his shadow pointing?",
        options: ["East", "West", "North", "South"],
        correctAnswer: "West",
        explanation: "The sun rises in the east. If Ram is facing east (toward the rising sun), his shadow will be cast in the opposite direction, which is west. Understanding how shadows work in relation to light sources helps with directional awareness. 🌅",
        wrongAnswerExplanations: {
            "East": "Shadows point away from the light source, not toward it.",
            "North": "If the sun is rising in the east, shadows would point west, not north.",
            "South": "If the sun is rising in the east, shadows would point west, not south."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch1_t2_qm20',
        type: "mcq",
        question: "Anita makes the following moves in a puzzle: 2 steps up, 3 steps right, 1 step down, 1 step left. Where will she end up compared to her starting position?",
        options: [
            "1 step up and 2 steps right",
            "1 step down and 2 steps right",
            "1 step up and 2 steps left",
            "2 steps up and 2 steps right"
        ],
        correctAnswer: "1 step up and 2 steps right",
        explanation: "Anita moves 2 steps up, 3 steps right, 1 step down, and 1 step left. The net movement is 1 step up (2 up - 1 down) and 2 steps right (3 right - 1 left). Calculating net movement in two dimensions helps solve puzzles. 🧩",
        wrongAnswerExplanations: {
            "1 step down and 2 steps right": "Anita moves up more than down (2 up vs 1 down), so she'll end up 1 step up, not down.",
            "1 step up and 2 steps left": "Anita moves right more than left (3 right vs 1 left), so she'll end up 2 steps right, not left.",
            "2 steps up and 2 steps right": "The downward movement (1 step) reduces the upward movement from 2 to 1 step up."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    }
]; 