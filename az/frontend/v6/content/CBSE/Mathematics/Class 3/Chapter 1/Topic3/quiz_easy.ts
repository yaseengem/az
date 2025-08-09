import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl3_ch1_t3_qe1',
        type: "mcq",
        question: "Which direction is the opposite of right?",
        options: ["Up", "Down", "Left", "Forward"],
        correctAnswer: "Left",
        explanation: "Left is the opposite direction of right. When you face forward, right is on one side and left is on the other. 👈👉",
        wrongAnswerExplanations: {
            "Up": "Up is the opposite of down, not right.",
            "Down": "Down is the opposite of up, not right.",
            "Forward": "Forward is the opposite of backward, not right."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch1_t3_qe2',
        type: "mcq",
        question: "If you are facing north and turn to your right, which direction are you facing now?",
        options: ["East", "West", "South", "North"],
        correctAnswer: "East",
        explanation: "When you face north and turn right, you will face east. The directions in clockwise order are: north, east, south, west. 🧭",
        wrongAnswerExplanations: {
            "West": "West is to your left when facing north, not right.",
            "South": "South is behind you when facing north. You would need to turn around (180°) to face south.",
            "North": "If you turn right from north, you're no longer facing north."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch1_t3_qe3',
        type: "mcq",
        question: "What does 'between' mean when describing a position?",
        options: ["On top of something", "Under something", "In the middle of two things", "Far away from everything"],
        correctAnswer: "In the middle of two things",
        explanation: "When an object is 'between' two things, it is positioned in the middle of them. For example, a book between two toys is placed in the middle of those toys. 📚",
        wrongAnswerExplanations: {
            "On top of something": "This describes the position 'above' or 'on', not 'between'.",
            "Under something": "This describes the position 'below' or 'underneath', not 'between'.",
            "Far away from everything": "This would describe something distant, not 'between' objects."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch1_t3_qe4',
        type: "mcq",
        question: "If a pencil is inside a box, how would you describe the pencil's position?",
        options: ["The pencil is on the box", "The pencil is under the box", "The pencil is inside the box", "The pencil is beside the box"],
        correctAnswer: "The pencil is inside the box",
        explanation: "When something is contained within another object, it is 'inside' that object. The pencil is within the boundaries of the box. 📦✏️",
        wrongAnswerExplanations: {
            "The pencil is on the box": "This would mean the pencil is placed on top of the box, not contained within it.",
            "The pencil is under the box": "This would mean the pencil is positioned below the box, not contained within it.",
            "The pencil is beside the box": "This would mean the pencil is next to the box, not contained within it."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch1_t3_qe5',
        type: "mcq",
        question: "A bird is flying ___ the sky.",
        options: ["in", "on", "under", "between"],
        correctAnswer: "in",
        explanation: "We describe an object surrounded by open space or air as being 'in' that space. A bird flies 'in' the sky, not on it. 🐦",
        wrongAnswerExplanations: {
            "on": "We use 'on' for something resting on a surface. The sky doesn't have a solid surface to be on.",
            "under": "Under means below something. A bird flying would not be under the sky.",
            "between": "Between is used when something is in the middle of two other things."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch1_t3_qe6',
        type: "mcq",
        question: "If you stand with your back to the door, what is directly in front of you?",
        options: ["The door", "The wall opposite to the door", "The floor", "The ceiling"],
        correctAnswer: "The wall opposite to the door",
        explanation: "When you stand with your back to the door, you're facing away from it. The wall opposite to the door would be directly in front of you. 🚪🧍",
        wrongAnswerExplanations: {
            "The door": "If your back is to the door, the door is behind you, not in front.",
            "The floor": "The floor is below you, not in front of you.",
            "The ceiling": "The ceiling is above you, not in front of you."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch1_t3_qe7',
        type: "mcq",
        question: "Which position word describes something that is at a higher level than something else?",
        options: ["Under", "Below", "Above", "Beside"],
        correctAnswer: "Above",
        explanation: "When something is positioned at a higher level than another object, it is 'above' that object. For example, a light is above a table. ☝️",
        wrongAnswerExplanations: {
            "Under": "Under means below something, which is the opposite of being at a higher level.",
            "Below": "Below means at a lower level, which is the opposite of being at a higher level.",
            "Beside": "Beside means next to something, which describes horizontal position, not vertical position."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch1_t3_qe8',
        type: "mcq",
        question: "If Ram is standing to the left of Sita, where is Sita standing in relation to Ram?",
        options: ["To the left of Ram", "To the right of Ram", "In front of Ram", "Behind Ram"],
        correctAnswer: "To the right of Ram",
        explanation: "If Ram is to the left of Sita, then from Ram's perspective, Sita is to his right. Left and right are opposite directions. 👫",
        wrongAnswerExplanations: {
            "To the left of Ram": "If Ram is to the left of Sita, then Sita cannot also be to the left of Ram.",
            "In front of Ram": "The problem describes left and right positions, not front and back positions.",
            "Behind Ram": "The problem describes left and right positions, not front and back positions."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch1_t3_qe9',
        type: "mcq",
        question: "Which of these describes the position of a fish swimming in water?",
        options: ["The fish is above the water", "The fish is in the water", "The fish is under the water", "The fish is on the water"],
        correctAnswer: "The fish is in the water",
        explanation: "A fish swims surrounded by water, so it is 'in' the water. We use 'in' to describe something surrounded by a substance. 🐠💧",
        wrongAnswerExplanations: {
            "The fish is above the water": "If the fish is above the water, it would be jumping out or flying over it, not swimming.",
            "The fish is under the water": "Though technically correct, 'under' typically refers to being beneath something, not surrounded by it.",
            "The fish is on the water": "Objects that float are 'on' water. Fish swim through water, so they are 'in' it."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch1_t3_qe10',
        type: "mcq",
        question: "What position word would you use to describe a cat sitting on a mat?",
        options: ["Under", "Inside", "On", "Behind"],
        correctAnswer: "On",
        explanation: "When an object is positioned resting on top of a surface, we say it is 'on' that surface. The cat is sitting on top of the mat. 🐱",
        wrongAnswerExplanations: {
            "Under": "Under would mean the cat is beneath the mat, not sitting on it.",
            "Inside": "Inside would mean the cat is contained within the mat, which isn't possible for a normal mat.",
            "Behind": "Behind would mean the cat is at the back of the mat, not sitting on its surface."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch1_t3_qe11',
        type: "mcq",
        question: "If you walk two steps forward and three steps to the right, in which direction have you moved overall?",
        options: ["Forward only", "Right only", "Forward and right", "Left and backward"],
        correctAnswer: "Forward and right",
        explanation: "You've moved in two directions: forward (two steps) and right (three steps). Your final position is both forward and right from where you started. 🚶‍♂️",
        wrongAnswerExplanations: {
            "Forward only": "This is incomplete because you also moved to the right, not just forward.",
            "Right only": "This is incomplete because you also moved forward, not just to the right.",
            "Left and backward": "This is incorrect. You moved forward and right, not left and backward."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch1_t3_qe12',
        type: "mcq",
        question: "Which of these objects would typically be found above your head when you're indoors?",
        options: ["Floor", "Carpet", "Ceiling fan", "Table"],
        correctAnswer: "Ceiling fan",
        explanation: "A ceiling fan is attached to the ceiling, which is above our heads when we're inside a building. Things on the ceiling are above us. 🌀",
        wrongAnswerExplanations: {
            "Floor": "The floor is under our feet, not above our head.",
            "Carpet": "A carpet is typically on the floor, under our feet, not above our head.",
            "Table": "A table is typically at waist or knee height, not above our head."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch1_t3_qe13',
        type: "mcq",
        question: "When you stand at the beginning of a queue, where are you?",
        options: ["At the front", "At the back", "In the middle", "At the side"],
        correctAnswer: "At the front",
        explanation: "The beginning of a queue is the front. When you stand at the front of a queue, you'll be served first. 🧍‍♀️🧍‍♂️🧍‍♀️",
        wrongAnswerExplanations: {
            "At the back": "The back is the end of the queue, not the beginning.",
            "In the middle": "The middle is between the front and back of the queue, not the beginning.",
            "At the side": "Side describes a position to the left or right, not a position in a queue."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch1_t3_qe14',
        type: "mcq",
        question: "A book is kept _____ two toys on a shelf.",
        options: ["between", "above", "below", "inside"],
        correctAnswer: "between",
        explanation: "When an object is positioned in the middle of two other objects, it is 'between' them. The book is in the middle of the two toys. 📚🧸🧸",
        wrongAnswerExplanations: {
            "above": "Above would mean the book is on top of both toys, not in the middle of them.",
            "below": "Below would mean the book is underneath both toys, not in the middle of them.",
            "inside": "Inside would mean the book is contained within the toys, which doesn't make sense in this context."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch1_t3_qe15',
        type: "mcq",
        question: "Which of these describes moving from a higher place to a lower place?",
        options: ["Going up", "Going down", "Going sideways", "Going around"],
        correctAnswer: "Going down",
        explanation: "When we move from a higher position to a lower position, we are 'going down'. For example, walking down stairs or climbing down a ladder. ⬇️",
        wrongAnswerExplanations: {
            "Going up": "Going up means moving from a lower position to a higher position, which is the opposite.",
            "Going sideways": "Going sideways means moving horizontally, not vertically from high to low.",
            "Going around": "Going around means moving in a circular path, not vertically from high to low."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch1_t3_qe16',
        type: "mcq",
        question: "If a bird is sitting on a branch, what is directly below the bird?",
        options: ["The sky", "The tree trunk", "The ground", "The branch"],
        correctAnswer: "The branch",
        explanation: "If a bird is sitting on a branch, the branch is directly under the bird's feet and therefore below the bird. 🐦🌳",
        wrongAnswerExplanations: {
            "The sky": "The sky is above the bird, not below it.",
            "The tree trunk": "The tree trunk might be to the side of the bird, not directly below it.",
            "The ground": "While the ground is below the bird, the question asks what is 'directly' below, which would be the branch it's sitting on."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch1_t3_qe17',
        type: "mcq",
        question: "In a classroom setting, the teacher usually stands ___ the students.",
        options: ["in front of", "behind", "inside", "under"],
        correctAnswer: "in front of",
        explanation: "The teacher typically stands at the front of the classroom, facing the students, so the teacher is 'in front of' the students. 👩‍🏫👨‍🎓",
        wrongAnswerExplanations: {
            "behind": "If the teacher was behind the students, the students wouldn't be able to see the teacher easily.",
            "inside": "Inside doesn't make sense in this context as a person cannot be inside other people.",
            "under": "Under would mean the teacher is beneath the students, which doesn't make sense in a typical classroom."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch1_t3_qe18',
        type: "mcq",
        question: "What does 'next to' mean when describing position?",
        options: ["On top of", "Far away from", "Beside or adjacent to", "Inside"],
        correctAnswer: "Beside or adjacent to",
        explanation: "When something is 'next to' another object, it is positioned directly beside or adjacent to it. For example, a chair next to a table is positioned beside the table. 👫",
        wrongAnswerExplanations: {
            "On top of": "On top of means one object is above and touching another object, not beside it.",
            "Far away from": "Next to means close to, not far away from.",
            "Inside": "Inside means contained within something, not beside it."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch1_t3_qe19',
        type: "mcq",
        question: "If you're inside a house, where are the walls?",
        options: ["Around you", "Above you", "Below you", "Between you"],
        correctAnswer: "Around you",
        explanation: "The walls of a house surround the space inside, so they are 'around' you when you're in the house. Walls enclose the interior space. 🏠",
        wrongAnswerExplanations: {
            "Above you": "The ceiling is above you, not the walls.",
            "Below you": "The floor is below you, not the walls.",
            "Between you": "Between would imply you are on one side and something else is on the other side of the walls."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch1_t3_qe20',
        type: "mcq",
        question: "If you are sitting at your desk at school, where is your pencil box typically kept?",
        options: ["On the desk", "Under the chair", "Above the desk", "Between the books"],
        correctAnswer: "On the desk",
        explanation: "A pencil box is typically kept on top of the desk surface where it's easily accessible. Objects resting on a surface are described as being 'on' that surface. 📚✏️",
        wrongAnswerExplanations: {
            "Under the chair": "A pencil box would not typically be kept under a chair as it would be difficult to access.",
            "Above the desk": "Above would mean it's suspended over the desk, not resting on it.",
            "Between the books": "While a pencil box might sometimes be between books, 'on the desk' is the most typical position."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 