import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch5_t2_qe1',
        type: "mcq",
        question: "What do we call the way an object looks from the top?",
        options: ["Front view", "Side view", "Top view", "Bottom view"],
        correctAnswer: "Top view",
        explanation: "The top view shows how an object looks when seen from above.",
        wrongAnswerExplanations: {
            "Front view": "Front view shows how an object looks from the front, not from the top.",
            "Side view": "Side view shows how an object looks from the side, not from the top.",
            "Bottom view": "Bottom view shows how an object looks from underneath, not from the top."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch5_t2_qe2',
        type: "mcq",
        question: "When you look at a cube from any side, what shape do you see?",
        options: ["Circle", "Triangle", "Square", "Rectangle"],
        correctAnswer: "Square",
        explanation: "A cube has 6 identical square faces, so viewing it from any side shows a square.",
        wrongAnswerExplanations: {
            "Circle": "A cube has straight edges and flat faces, not curved surfaces like a circle.",
            "Triangle": "A cube has square faces, not triangular ones.",
            "Rectangle": "While a rectangle has 4 sides, a cube's faces are squares with equal sides."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch5_t2_qe3',
        type: "mcq",
        question: "What shape would you see if you look at a cylinder from the top?",
        options: ["Rectangle", "Square", "Triangle", "Circle"],
        correctAnswer: "Circle",
        explanation: "When viewed from the top, a cylinder shows its circular face.",
        wrongAnswerExplanations: {
            "Rectangle": "A cylinder viewed from the side appears as a rectangle, not from the top.",
            "Square": "A cylinder doesn't have any square faces.",
            "Triangle": "A cylinder doesn't have any triangular faces."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch5_t2_qe4',
        type: "mcq",
        question: "If you look at a book from the side, what shape do you typically see?",
        options: ["Circle", "Square", "Rectangle", "Triangle"],
        correctAnswer: "Rectangle",
        explanation: "Most books appear rectangular when viewed from the side.",
        wrongAnswerExplanations: {
            "Circle": "Books typically have straight edges, not circular sides.",
            "Square": "Books usually have sides with unequal lengths, making them rectangles, not squares.",
            "Triangle": "Books don't typically have triangular sides."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch5_t2_qe5',
        type: "mcq",
        question: "When you draw how an object looks from different sides, these drawings are called:",
        options: ["Measurements", "Views", "Dimensions", "Pictures"],
        correctAnswer: "Views",
        explanation: "Different perspectives of an object are called views, such as top view, side view, etc.",
        wrongAnswerExplanations: {
            "Measurements": "Measurements refer to the size of an object, not how it looks from different sides.",
            "Dimensions": "Dimensions refer to the measurements of length, width, and height.",
            "Pictures": "While views are pictures, the specific term for different perspectives is 'views'."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch5_t2_qe6',
        type: "mcq",
        question: "The front view of a cone shows what shape?",
        options: ["Circle", "Triangle", "Square", "Rectangle"],
        correctAnswer: "Triangle",
        explanation: "When viewed from the front, a cone appears triangular in shape.",
        wrongAnswerExplanations: {
            "Circle": "A circle is the shape seen when looking at a cone from the bottom.",
            "Square": "A cone doesn't appear square from any view.",
            "Rectangle": "A cone doesn't appear rectangular from any standard view."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch5_t2_qe7',
        type: "mcq",
        question: "If you look at a pyramid with a square base from below, what shape would you see?",
        options: ["Triangle", "Square", "Circle", "Pentagon"],
        correctAnswer: "Square",
        explanation: "From below, you would see the square base of the pyramid.",
        wrongAnswerExplanations: {
            "Triangle": "The sides of a pyramid are triangles, but the base is a square.",
            "Circle": "A pyramid with a square base has no circular faces.",
            "Pentagon": "A pyramid with a square base has no pentagonal faces."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch5_t2_qe8',
        type: "mcq",
        question: "What shape does a ball appear from any direction you look at it?",
        options: ["Square", "Rectangle", "Circle", "Triangle"],
        correctAnswer: "Circle",
        explanation: "A ball (sphere) appears as a circle from any direction.",
        wrongAnswerExplanations: {
            "Square": "A ball has a curved surface and appears circular, not square.",
            "Rectangle": "A ball has a curved surface and appears circular, not rectangular.",
            "Triangle": "A ball has a curved surface and appears circular, not triangular."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch5_t2_qe9',
        type: "mcq",
        question: "What is the view called when you look at an object from the front?",
        options: ["Top view", "Side view", "Front view", "Back view"],
        correctAnswer: "Front view",
        explanation: "The view of an object as seen directly from the front is called the front view.",
        wrongAnswerExplanations: {
            "Top view": "Top view is when you look at an object from above.",
            "Side view": "Side view is when you look at an object from the left or right side.",
            "Back view": "Back view is when you look at an object from behind."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch5_t2_qe10',
        type: "mcq",
        question: "When drawing the side view of a car, which detail would be most visible?",
        options: ["The roof", "The headlights", "The doors", "The wheels"],
        correctAnswer: "The doors",
        explanation: "In a side view of a car, the doors are most prominently visible.",
        wrongAnswerExplanations: {
            "The roof": "The roof is most visible in the top view.",
            "The headlights": "Headlights are most visible in the front view.",
            "The wheels": "While wheels are visible from the side, the doors typically take up more of the side view."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch5_t2_qe11',
        type: "mcq",
        question: "What view of a house would best show the shape of the roof?",
        options: ["Front view", "Side view", "Top view", "Bottom view"],
        correctAnswer: "Top view",
        explanation: "The top view would best show the complete shape of the roof from above.",
        wrongAnswerExplanations: {
            "Front view": "Front view shows only the front edge of the roof.",
            "Side view": "Side view shows only a partial profile of the roof.",
            "Bottom view": "Bottom view doesn't show the roof at all."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch5_t2_qe12',
        type: "mcq",
        question: "If you look at a rectangular box from the top, what shape do you see?",
        options: ["Circle", "Square", "Rectangle", "Triangle"],
        correctAnswer: "Rectangle",
        explanation: "A rectangular box has a rectangular top face, so the top view shows a rectangle.",
        wrongAnswerExplanations: {
            "Circle": "A rectangular box has straight edges, not circular ones.",
            "Square": "Unless the box has equal length and width, the top view will be a rectangle, not a square.",
            "Triangle": "A rectangular box doesn't have triangular faces."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch5_t2_qe13',
        type: "mcq",
        question: "What happens to the view of an object when you move around it?",
        options: ["It stays the same", "It disappears", "It changes", "It gets bigger"],
        correctAnswer: "It changes",
        explanation: "As you move around an object, your perspective changes, showing different views of it.",
        wrongAnswerExplanations: {
            "It stays the same": "Different positions give different perspectives of the same object.",
            "It disappears": "Moving around an object doesn't make it disappear from view.",
            "It gets bigger": "Moving around an object changes your perspective but not necessarily its apparent size."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch5_t2_qe14',
        type: "mcq",
        question: "What shape would you see looking at a rectangular table from above?",
        options: ["Triangle", "Circle", "Square", "Rectangle"],
        correctAnswer: "Rectangle",
        explanation: "Looking at a rectangular table from above shows its rectangular surface.",
        wrongAnswerExplanations: {
            "Triangle": "A rectangular table has no triangular surfaces.",
            "Circle": "A rectangular table has straight edges, not circular ones.",
            "Square": "Unless the table has equal length and width, it will appear as a rectangle, not a square."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch5_t2_qe15',
        type: "mcq",
        question: "In a map of your classroom, which view is typically shown?",
        options: ["Front view", "Side view", "Top view", "3D view"],
        correctAnswer: "Top view",
        explanation: "Maps typically show the top view, as if looking down from above.",
        wrongAnswerExplanations: {
            "Front view": "Maps don't typically show the front view of spaces.",
            "Side view": "Maps don't typically show the side view of spaces.",
            "3D view": "While 3D maps exist, standard maps show a 2D top view."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch5_t2_qe16',
        type: "mcq",
        question: "If you see only the handle of a cup, which view are you likely looking at?",
        options: ["Top view", "Bottom view", "Side view", "Front view"],
        correctAnswer: "Side view",
        explanation: "The handle of a cup is most visible from the side view.",
        wrongAnswerExplanations: {
            "Top view": "From the top, you'd primarily see the opening of the cup.",
            "Bottom view": "From the bottom, you'd see the base of the cup.",
            "Front view": "Assuming the handle is on the side, a direct front view wouldn't show much of it."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch5_t2_qe17',
        type: "mcq",
        question: "What view of a television would show its screen best?",
        options: ["Top view", "Side view", "Front view", "Bottom view"],
        correctAnswer: "Front view",
        explanation: "The screen of a TV is on its front, so the front view shows it best.",
        wrongAnswerExplanations: {
            "Top view": "The top view would show the top edge of the TV, not the screen.",
            "Side view": "The side view would show the thickness of the TV, not the screen.",
            "Bottom view": "The bottom view would show the base of the TV, not the screen."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch5_t2_qe18',
        type: "mcq",
        question: "What shape would a cylindrical water bottle appear to be from the side?",
        options: ["Circle", "Square", "Rectangle", "Triangle"],
        correctAnswer: "Rectangle",
        explanation: "From the side, a cylindrical bottle appears as a rectangle.",
        wrongAnswerExplanations: {
            "Circle": "A cylinder appears circular from the top or bottom, not the side.",
            "Square": "A cylindrical bottle doesn't appear square from any standard view.",
            "Triangle": "A cylindrical bottle doesn't appear triangular from any standard view."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch5_t2_qe19',
        type: "mcq",
        question: "When architects design buildings, they typically draw different _____ to show how the building will look.",
        options: ["Colors", "Views", "Materials", "Shadows"],
        correctAnswer: "Views",
        explanation: "Architects draw different views (front, side, top) to show a building's appearance.",
        wrongAnswerExplanations: {
            "Colors": "While colors are used in architectural drawings, views are more fundamental for showing structure.",
            "Materials": "Material choices are specified but don't replace the need for different views.",
            "Shadows": "Shadows might be included in renderings but aren't a primary design element."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch5_t2_qe20',
        type: "mcq",
        question: "If an object appears different from various angles, it is likely a:",
        options: ["2D shape", "3D object", "Line", "Point"],
        correctAnswer: "3D object",
        explanation: "3D objects have depth and appear different when viewed from different angles.",
        wrongAnswerExplanations: {
            "2D shape": "2D shapes look similar from most angles as they lack depth.",
            "Line": "A line is one-dimensional and doesn't show different views.",
            "Point": "A point has no dimension and doesn't show different views."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];