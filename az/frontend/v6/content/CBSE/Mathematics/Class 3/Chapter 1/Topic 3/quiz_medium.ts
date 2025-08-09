import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl3_ch1_t3_qm1',
        type: "mcq",
        question: "Arjun is standing 2 steps to the right of Meera, and Ravi is standing 3 steps to the left of Meera. How many steps is Ravi away from Arjun?",
        options: ["1 step", "5 steps", "6 steps", "0 steps"],
        correctAnswer: "5 steps",
        explanation: "Arjun is 2 steps right of Meera, and Ravi is 3 steps left of Meera. So the total distance between Arjun and Ravi is 2 + 3 = 5 steps. 👣👣👣👣👣",
        wrongAnswerExplanations: {
            "1 step": "This answer incorrectly subtracts the distances instead of adding them.",
            "6 steps": "This is calculating one extra step that isn't there.",
            "0 steps": "This would mean Arjun and Ravi are in the same position, which isn't true based on the given information."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch1_t3_qm2',
        type: "mcq",
        question: "A bird flies from the ground up to a branch, then to a higher branch, and finally back down to the first branch. Which statement best describes the bird's final position compared to its starting position?",
        options: ["The bird is at the same height as it started", "The bird is higher than where it started", "The bird is lower than where it started", "The bird is back on the ground"],
        correctAnswer: "The bird is higher than where it started",
        explanation: "The bird started on the ground, then flew to a branch (higher), then to an even higher branch, and finally back to the first branch. So the bird's final position is on the first branch, which is higher than the ground where it started. 🐦🌳",
        wrongAnswerExplanations: {
            "The bird is at the same height as it started": "The bird started on the ground but ended on the first branch, which is higher.",
            "The bird is lower than where it started": "The bird started on the ground, which is the lowest point mentioned.",
            "The bird is back on the ground": "The bird returned to the first branch, not to the ground."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch1_t3_qm3',
        type: "mcq",
        question: "If you are standing facing north and turn 90° clockwise, then turn 90° clockwise again, which direction are you facing now?",
        options: ["North", "East", "South", "West"],
        correctAnswer: "South",
        explanation: "If you start facing north and turn 90° clockwise, you face east. Turning 90° clockwise again means you now face south. The directions in clockwise order are: north, east, south, west. 🧭",
        wrongAnswerExplanations: {
            "North": "If you turn 90° clockwise twice from north, you would not be back to north. You would need to turn 360° (four 90° turns) to face north again.",
            "East": "If you start facing north, one 90° clockwise turn would make you face east, but you turned twice.",
            "West": "Turning 90° clockwise twice from north results in facing south, not west. West would be after three 90° clockwise turns."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch1_t3_qm4',
        type: "mcq",
        question: "In the school playground, the slide is to the north of the swings, and the seesaw is to the west of the swings. Where is the seesaw in relation to the slide?",
        options: ["North of the slide", "South of the slide", "East of the slide", "Southwest of the slide"],
        correctAnswer: "Southwest of the slide",
        explanation: "If the slide is north of the swings and the seesaw is west of the swings, then the seesaw must be southwest of the slide (it's both south and west of the slide). Combining directions helps describe diagonal positions. 🎢",
        wrongAnswerExplanations: {
            "North of the slide": "This can't be true. The slide is already north of the swings, and the seesaw is west of the swings.",
            "South of the slide": "This is partially correct (the seesaw is south of the slide), but it doesn't account for the west direction.",
            "East of the slide": "This is incorrect. If the seesaw is west of the swings, and the slide is north of the swings, the seesaw cannot be east of the slide."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch1_t3_qm5',
        type: "mcq",
        question: "A toy train goes around a circular track. If it starts at the station and goes one-quarter of the way around the track, then reverses and goes halfway around the track in the opposite direction, where is it now in relation to the starting station?",
        options: ["At the station", "One-quarter around the track", "One-quarter around the track in the opposite direction", "Halfway around the track"],
        correctAnswer: "One-quarter around the track in the opposite direction",
        explanation: "The train first goes 1/4 of the way around. Then it reverses and goes 1/2 way around in the opposite direction from that point. This means it went back past the station and continued for another 1/4 around, ending up 1/4 of the way around in the clockwise direction from the station. 🚂",
        wrongAnswerExplanations: {
            "At the station": "The train doesn't return to the station. From the quarter point, going half way around in the opposite direction would take it past the station.",
            "One-quarter around the track": "This would be true if the train didn't reverse direction.",
            "Halfway around the track": "The train doesn't go halfway around from the starting point. It goes 1/4 around, then reverses and goes 1/2 around, placing it 1/4 around in the opposite direction."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch1_t3_qm6',
        type: "mcq",
        question: "The school is 5 blocks east and 3 blocks north of Riya's house. If Riya walks from her house to school, how many total blocks does she walk?",
        options: ["2 blocks", "8 blocks", "15 blocks", "None of the above"],
        correctAnswer: "8 blocks",
        explanation: "Riya must walk 5 blocks east and 3 blocks north to reach school. The total distance is 5 + 3 = 8 blocks. She needs to travel both east and north to reach her destination. 🏫",
        wrongAnswerExplanations: {
            "2 blocks": "This is the difference between 5 and 3, not the total distance.",
            "15 blocks": "This is 5 × 3, but we need to add the distances, not multiply them.",
            "None of the above": "The correct answer is 8 blocks, which is one of the options."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch1_t3_qm7',
        type: "mcq",
        question: "A bug is crawling on a grid. It starts at position (0,0), moves 3 squares right, 2 squares up, 1 square left, and 4 squares down. What is the bug's final position?",
        options: ["(2,0)", "(2,-2)", "(4,6)", "(2,-2)"],
        correctAnswer: "2,-2",
        explanation: "Starting at (0,0), going 3 right gives (3,0), then 2 up gives (3,2), then 1 left gives (2,2), and finally 4 down gives (2,-2). Each movement changes one coordinate according to its direction. 🐞",
        wrongAnswerExplanations: {
            "(2,0)": "This doesn't account for the vertical movement correctly.",
            "(4,6)": "This incorrectly adds all the numbers without considering directions.",
            "(2,-2)": "This is the same as the correct answer and shouldn't be a separate option."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch1_t3_qm8',
        type: "mcq",
        question: "In a row of children, Aman is 5th from the left and 8th from the right. How many children are there in the row?",
        options: ["12", "13", "14", "15"],
        correctAnswer: "12",
        explanation: "If Aman is 5th from the left, there are 4 children to his left. If he is 8th from the right, there are 7 children to his right. Including Aman, the total is 4 + 1 + 7 = 12 children. 👧👦👧👦👧👦👧👦👧👦👧👦",
        wrongAnswerExplanations: {
            "13": "This incorrectly counts one extra child.",
            "14": "This incorrectly counts two extra children.",
            "15": "This incorrectly counts three extra children."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch1_t3_qm9',
        type: "mcq",
        question: "Which of these correctly shows the objects in order from left to right: a ball, a doll, a car, and a train?",
        options: ["Train, Car, Doll, Ball", "Ball, Doll, Car, Train", "Car, Train, Ball, Doll", "Doll, Ball, Train, Car"],
        correctAnswer: "Ball, Doll, Car, Train",
        explanation: "The order from left to right should match the sequence given in the question: first the ball, then the doll, then the car, and finally the train. 🏀👧🚗🚂",
        wrongAnswerExplanations: {
            "Train, Car, Doll, Ball": "This is the reverse order (right to left) of the correct sequence.",
            "Car, Train, Ball, Doll": "This order doesn't match the sequence given in the question.",
            "Doll, Ball, Train, Car": "This order doesn't match the sequence given in the question."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch1_t3_qm10',
        type: "mcq",
        question: "A, B, C, D, and E are sitting in a row. A is sitting next to B, C is sitting next to D, D is not sitting with E, and B is not sitting with E. Which of these must be true?",
        options: ["C is sitting next to A", "E is sitting next to A", "C is sitting next to B", "B is sitting next to D"],
        correctAnswer: "C is sitting next to B",
        explanation: "If A sits next to B, C sits next to D, D is not with E, and B is not with E, then the only valid arrangement is either ABCDE or EDCBA. In both cases, B is next to C. 🧩",
        wrongAnswerExplanations: {
            "C is sitting next to A": "This isn't necessarily true. In the arrangement ABCDE, A is not next to C.",
            "E is sitting next to A": "This isn't necessarily true. In the arrangement ABCDE, A is not next to E.",
            "B is sitting next to D": "This isn't necessarily true. In the arrangement ABCDE, B is not next to D."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch1_t3_qm11',
        type: "mcq",
        question: "A treasure map shows that from the big rock, you need to take 4 steps north, then 3 steps east, then 2 steps south. Which single set of directions would lead to the same spot?",
        options: ["7 steps northeast", "2 steps north and 3 steps east", "3 steps east and 2 steps north", "5 steps southeast"],
        correctAnswer: "2 steps north and 3 steps east",
        explanation: "Starting at the rock, 4 steps north then 2 steps south means a net of 2 steps north. Combined with 3 steps east, the shortest path is 2 steps north and 3 steps east. 🗺️",
        wrongAnswerExplanations: {
            "7 steps northeast": "Northeast is a diagonal direction. 7 steps would take you too far and not to the same spot.",
            "3 steps east and 2 steps north": "This is the same destination but listed in a different order, which is fine.",
            "5 steps southeast": "Southeast would take you in the wrong direction (south and east instead of north and east)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch1_t3_qm12',
        type: "mcq",
        question: "In a stack of books, the Science book is below the Hindi book but above the English book. The Mathematics book is above the Hindi book. Which book is at the bottom of the stack?",
        options: ["Science book", "Hindi book", "English book", "Mathematics book"],
        correctAnswer: "English book",
        explanation: "From top to bottom: Mathematics book, Hindi book, Science book, English book. Since the Science book is above the English book, and the Science book is below all others, the English book must be at the bottom. 📚",
        wrongAnswerExplanations: {
            "Science book": "The Science book is above the English book, so it can't be at the bottom.",
            "Hindi book": "The Hindi book is above the Science book, which is above the English book, so the Hindi book can't be at the bottom.",
            "Mathematics book": "The Mathematics book is at the top of the stack, not the bottom."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch1_t3_qm13',
        type: "mcq",
        question: "On a class trip to the zoo, the students visit animals in this order: monkeys, elephants, tigers, and giraffes. If they start walking backward from the giraffes, which animal will they see third?",
        options: ["Monkeys", "Elephants", "Tigers", "Giraffes"],
        correctAnswer: "Monkeys",
        explanation: "The order is: monkeys, elephants, tigers, giraffes. Walking backward from giraffes, they would see: tigers (first), elephants (second), monkeys (third). 🦒🐅🐘🐒",
        wrongAnswerExplanations: {
            "Elephants": "Walking backward from giraffes, elephants would be seen second, not third.",
            "Tigers": "Walking backward from giraffes, tigers would be seen first, not third.",
            "Giraffes": "Giraffes is the starting point when walking backward, so they wouldn't be seen again."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch1_t3_qm14',
        type: "mcq",
        question: "In a race, Raj finished ahead of Sanjay, Priya finished behind Meena, and Meena finished behind Raj. Who finished last?",
        options: ["Raj", "Sanjay", "Priya", "Meena"],
        correctAnswer: "Priya",
        explanation: "Raj finished ahead of Sanjay, so Raj is ahead of Sanjay. Meena is behind Raj but ahead of Priya. So the order from first to last is: Raj, Meena, Sanjay, Priya (or Raj, Sanjay, Meena, Priya). Either way, Priya is last. 🏃‍♀️",
        wrongAnswerExplanations: {
            "Raj": "Raj finished ahead of Sanjay and ahead of Meena, so Raj cannot be last.",
            "Sanjay": "Sanjay finished behind Raj, but we know Priya finished behind Meena who was behind Raj. So Priya must be last.",
            "Meena": "Meena finished behind Raj but ahead of Priya, so Meena is not last."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch1_t3_qm15',
        type: "mcq",
        question: "In a calendar, which day comes between Thursday and Saturday?",
        options: ["Sunday", "Wednesday", "Friday", "Monday"],
        correctAnswer: "Friday",
        explanation: "The days of the week in order are: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday. Friday comes between Thursday and Saturday. 📅",
        wrongAnswerExplanations: {
            "Sunday": "Sunday comes after Saturday, not between Thursday and Saturday.",
            "Wednesday": "Wednesday comes before Thursday, not between Thursday and Saturday.",
            "Monday": "Monday comes after Sunday, which is after Saturday. It's not between Thursday and Saturday."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch1_t3_qm16',
        type: "mcq",
        question: "A toy car moves 3 steps forward, turns right, moves 4 steps, turns right again, and moves 3 steps. How far is the car from its starting point?",
        options: ["0 steps", "4 steps", "7 steps", "10 steps"],
        correctAnswer: "4 steps",
        explanation: "The car moves 3 steps forward, 4 steps right, then 3 steps backward. The forward and backward movements cancel out, leaving the car 4 steps to the right of the starting point. 🚗",
        wrongAnswerExplanations: {
            "0 steps": "This would be true if the car returned to its starting point, but it's still 4 steps to the right.",
            "7 steps": "This incorrectly adds the distances without considering direction changes.",
            "10 steps": "This is the total distance traveled (3 + 4 + 3 = 10), not the final distance from the starting point."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch1_t3_qm17',
        type: "mcq",
        question: "Five children are sitting in a row. Anil is sitting next to Bharti, Bharti is sitting next to Charlie, Charlie is sitting next to Deepa, and Deepa is sitting next to Esha. Which child is sitting in the middle?",
        options: ["Anil", "Bharti", "Charlie", "Deepa"],
        correctAnswer: "Charlie",
        explanation: "If they're all in a row and each person mentioned is next to the next person, the only possible arrangement is Anil, Bharti, Charlie, Deepa, Esha or Esha, Deepa, Charlie, Bharti, Anil. In both cases, Charlie is in the middle. 🧒👧🧒👧🧒",
        wrongAnswerExplanations: {
            "Anil": "Anil must be at one end of the row since he's only mentioned as sitting next to Bharti.",
            "Bharti": "Bharti must be second from one end since she sits next to both Anil and Charlie.",
            "Deepa": "Deepa must be fourth in the row since she sits next to both Charlie and Esha."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch1_t3_qm18',
        type: "mcq",
        question: "The month after March but before May is:",
        options: ["February", "April", "June", "July"],
        correctAnswer: "April",
        explanation: "The months in order are January, February, March, April, May, June, etc. April comes after March and before May. Months follow a specific sequence in the calendar. 📆",
        wrongAnswerExplanations: {
            "February": "February comes before March, not after it.",
            "June": "June comes after May, not before it.",
            "July": "July comes after June, which is after May, so it's not between March and May."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch1_t3_qm19',
        type: "mcq",
        question: "In a row of trees, the mango tree is to the right of the apple tree but to the left of the orange tree. The banana tree is to the left of the apple tree. Which tree is second from the left?",
        options: ["Mango tree", "Apple tree", "Orange tree", "Banana tree"],
        correctAnswer: "Apple tree",
        explanation: "From left to right: banana tree, apple tree, mango tree, orange tree. The banana tree is to the left of the apple tree, which is to the left of the mango tree, which is to the left of the orange tree. So the apple tree is second from the left. 🍌🍎🥭🍊",
        wrongAnswerExplanations: {
            "Mango tree": "The mango tree is third from the left, not second.",
            "Orange tree": "The orange tree is fourth (last) from the left, not second.",
            "Banana tree": "The banana tree is first from the left, not second."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch1_t3_qm20',
        type: "mcq",
        question: "Arjun starts from his home and walks 50 meters north, then 30 meters east, then 20 meters south. How far is he from his home now?",
        options: ["10 meters north and 30 meters east", "30 meters north and 30 meters east", "30 meters east", "50 meters north"],
        correctAnswer: "30 meters north and 30 meters east",
        explanation: "Arjun walks 50m north, then 30m east, then 20m south. Going 20m south after going 50m north leaves him 30m north of his starting point. So he's 30m north and 30m east of his home. 🏠🧭",
        wrongAnswerExplanations: {
            "10 meters north and 30 meters east": "The north distance is incorrect. After going 50m north and 20m south, he's 30m north, not 10m.",
            "30 meters east": "This neglects the north component of his position. He's also 30m north of his starting point.",
            "50 meters north": "This neglects his movement east and south. After all movements, he's 30m north and 30m east of home."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    }
]; 