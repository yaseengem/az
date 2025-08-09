import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch14_t2_qe1',
        type: "mcq",
        question: "What is the first step in drawing a circle with a compass?",
        options: ["Set the radius", "Mark the center", "Draw the circle", "Sharpen the pencil"],
        correctAnswer: "Mark the center",
        explanation: "The first step is to mark the center point where the compass needle will be placed. This is crucial for drawing an accurate circle. 📍",
        wrongAnswerExplanations: {
            "Set the radius": "Setting the radius comes after marking the center.",
            "Draw the circle": "Drawing comes after setting up the compass.",
            "Sharpen the pencil": "Pencil sharpening should be done before starting, but marking the center is the first actual step."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch14_t2_qe2',
        type: "mcq",
        question: "Which part of the compass should stay fixed while drawing a circle?",
        options: ["The pencil", "The needle point", "The hinge", "The arm"],
        correctAnswer: "The needle point",
        explanation: "The needle point must stay fixed at the center while drawing a circle. This ensures the circle is perfectly round. 🎯",
        wrongAnswerExplanations: {
            "The pencil": "The pencil moves to draw the circle.",
            "The hinge": "The hinge should be tight but doesn't need to stay fixed.",
            "The arm": "The arm moves as you rotate the compass."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch14_t2_qe3',
        type: "mcq",
        question: "What tool do you use to measure the radius of a circle?",
        options: ["Protractor", "Ruler", "Set square", "Compass"],
        correctAnswer: "Ruler",
        explanation: "A ruler is used to measure and set the radius of the compass before drawing a circle. 📏",
        wrongAnswerExplanations: {
            "Protractor": "A protractor measures angles, not lengths.",
            "Set square": "A set square is used for drawing angles.",
            "Compass": "The compass is used to draw the circle, not measure."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch14_t2_qe4',
        type: "mcq",
        question: "What are circles with the same center called?",
        options: ["Intersecting circles", "Tangent circles", "Concentric circles", "Parallel circles"],
        correctAnswer: "Concentric circles",
        explanation: "Concentric circles share the same center point but have different radii. ⭕",
        wrongAnswerExplanations: {
            "Intersecting circles": "Intersecting circles cross each other at two points.",
            "Tangent circles": "Tangent circles touch at exactly one point.",
            "Parallel circles": "There is no such thing as parallel circles."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch14_t2_qe5',
        type: "mcq",
        question: "What should you do to ensure the compass doesn't slip while drawing?",
        options: ["Press very hard", "Hold it loosely", "Keep it steady", "Move it quickly"],
        correctAnswer: "Keep it steady",
        explanation: "Holding the compass steady with moderate pressure prevents slipping and ensures an accurate circle. 🎯",
        wrongAnswerExplanations: {
            "Press very hard": "Pressing too hard can damage the paper or cause the compass to slip.",
            "Hold it loosely": "Holding it loosely can cause the compass to move.",
            "Move it quickly": "Moving quickly can result in an uneven circle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch14_t2_qe6',
        type: "mcq",
        question: "What is the minimum number of points needed to draw a circle?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "1",
        explanation: "You only need one point (the center) and the radius to draw a circle. 📍",
        wrongAnswerExplanations: {
            "2": "Two points are not necessary for drawing a basic circle.",
            "3": "Three points are used for drawing a circle through given points, not a basic circle.",
            "4": "Four points are not needed for drawing a basic circle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch14_t2_qe7',
        type: "mcq",
        question: "Which of these is NOT a part of a compass?",
        options: ["Needle point", "Pencil holder", "Hinge", "Protractor"],
        correctAnswer: "Protractor",
        explanation: "A protractor is a separate tool used for measuring angles, not part of a compass. 📐",
        wrongAnswerExplanations: {
            "Needle point": "The needle point is an essential part of a compass.",
            "Pencil holder": "The pencil holder is part of a compass.",
            "Hinge": "The hinge is part of a compass for adjusting the radius."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch14_t2_qe8',
        type: "mcq",
        question: "What should you do before setting the compass radius?",
        options: ["Draw the circle", "Mark the center", "Sharpen the pencil", "Measure the paper"],
        correctAnswer: "Sharpen the pencil",
        explanation: "Always sharpen the pencil before setting the radius to ensure a clear, sharp circle. ✏️",
        wrongAnswerExplanations: {
            "Draw the circle": "Drawing comes after setting the radius.",
            "Mark the center": "Marking the center comes after setting up the compass.",
            "Measure the paper": "Measuring the paper is not necessary for setting the radius."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch14_t2_qe9',
        type: "mcq",
        question: "What happens if the compass hinge is loose while drawing?",
        options: ["Circle is perfect", "Radius changes", "Pencil breaks", "Paper tears"],
        correctAnswer: "Radius changes",
        explanation: "A loose hinge can cause the radius to change while drawing, resulting in an uneven circle. ⚠️",
        wrongAnswerExplanations: {
            "Circle is perfect": "A loose hinge would not result in a perfect circle.",
            "Pencil breaks": "A loose hinge doesn't cause the pencil to break.",
            "Paper tears": "A loose hinge doesn't cause the paper to tear."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch14_t2_qe10',
        type: "mcq",
        question: "What is the best way to rotate the compass while drawing?",
        options: ["Quickly", "Slowly and smoothly", "In short bursts", "Back and forth"],
        correctAnswer: "Slowly and smoothly",
        explanation: "Rotating the compass slowly and smoothly ensures an even, perfect circle. 🔄",
        wrongAnswerExplanations: {
            "Quickly": "Moving quickly can result in an uneven circle.",
            "In short bursts": "Moving in bursts can create an irregular shape.",
            "Back and forth": "Moving back and forth doesn't create a proper circle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch14_t2_qe11',
        type: "mcq",
        question: "What should you do after drawing a circle?",
        options: ["Erase the center", "Measure the radius", "Verify the circle", "Draw another circle"],
        correctAnswer: "Verify the circle",
        explanation: "Always verify the circle is round and the radius is correct after drawing. ✅",
        wrongAnswerExplanations: {
            "Erase the center": "The center point should remain visible.",
            "Measure the radius": "Measuring should be done before drawing.",
            "Draw another circle": "Drawing another circle comes after verifying the first one."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch14_t2_qe12',
        type: "mcq",
        question: "What is the purpose of the pencil holder in a compass?",
        options: ["To measure angles", "To draw the circle", "To mark the center", "To hold the ruler"],
        correctAnswer: "To draw the circle",
        explanation: "The pencil holder holds the pencil that draws the circle when the compass is rotated. ✏️",
        wrongAnswerExplanations: {
            "To measure angles": "The pencil holder doesn't measure angles.",
            "To mark the center": "The needle point marks the center.",
            "To hold the ruler": "The pencil holder doesn't hold the ruler."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch14_t2_qe13',
        type: "mcq",
        question: "What should you do if the circle is not perfectly round?",
        options: ["Press harder", "Draw faster", "Start over", "Use a different compass"],
        correctAnswer: "Start over",
        explanation: "If the circle isn't perfect, it's best to start over with careful attention to keeping the compass steady. 🔄",
        wrongAnswerExplanations: {
            "Press harder": "Pressing harder can make the problem worse.",
            "Draw faster": "Drawing faster won't fix an uneven circle.",
            "Use a different compass": "The problem is likely technique, not the compass."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch14_t2_qe14',
        type: "mcq",
        question: "What is the best way to hold the compass?",
        options: ["By the pencil", "By the needle", "By the hinge", "By the top"],
        correctAnswer: "By the top",
        explanation: "Holding the compass by the top allows for better control and smoother rotation. 🎯",
        wrongAnswerExplanations: {
            "By the pencil": "Holding by the pencil can cause uneven pressure.",
            "By the needle": "Holding by the needle can cause slipping.",
            "By the hinge": "Holding by the hinge can affect the radius setting."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch14_t2_qe15',
        type: "mcq",
        question: "What should you check before starting to draw?",
        options: ["Pencil sharpness", "Paper size", "Room temperature", "Time of day"],
        correctAnswer: "Pencil sharpness",
        explanation: "Always ensure the pencil is sharp before starting to draw for a clear, precise circle. ✏️",
        wrongAnswerExplanations: {
            "Paper size": "Paper size is not critical for drawing a circle.",
            "Room temperature": "Room temperature doesn't affect circle drawing.",
            "Time of day": "Time of day doesn't affect circle drawing."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch14_t2_qe16',
        type: "mcq",
        question: "What is the purpose of the hinge in a compass?",
        options: ["To draw circles", "To measure angles", "To adjust the radius", "To hold the pencil"],
        correctAnswer: "To adjust the radius",
        explanation: "The hinge allows you to open and close the compass to set the desired radius. ⚙️",
        wrongAnswerExplanations: {
            "To draw circles": "The hinge doesn't draw circles directly.",
            "To measure angles": "The hinge doesn't measure angles.",
            "To hold the pencil": "The pencil holder holds the pencil."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch14_t2_qe17',
        type: "mcq",
        question: "What should you do if the compass needle slips?",
        options: ["Continue drawing", "Press harder", "Stop and reposition", "Use tape"],
        correctAnswer: "Stop and reposition",
        explanation: "If the needle slips, stop immediately and reposition it at the center point. ⚠️",
        wrongAnswerExplanations: {
            "Continue drawing": "Continuing with a slipped needle will ruin the circle.",
            "Press harder": "Pressing harder can damage the paper.",
            "Use tape": "Tape is not a proper solution for a slipping compass."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch14_t2_qe18',
        type: "mcq",
        question: "What is the best way to ensure an accurate radius?",
        options: ["Guess the length", "Use a ruler", "Count the turns", "Measure by eye"],
        correctAnswer: "Use a ruler",
        explanation: "Always use a ruler to measure and set the exact radius needed. 📏",
        wrongAnswerExplanations: {
            "Guess the length": "Guessing can lead to inaccurate circles.",
            "Count the turns": "Counting turns doesn't ensure accuracy.",
            "Measure by eye": "Measuring by eye is not precise enough."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch14_t2_qe19',
        type: "mcq",
        question: "What should you do after setting the radius?",
        options: ["Draw immediately", "Check the setting", "Change the pencil", "Mark the center"],
        correctAnswer: "Check the setting",
        explanation: "Always double-check the radius setting before starting to draw. ✅",
        wrongAnswerExplanations: {
            "Draw immediately": "You should verify the setting first.",
            "Change the pencil": "The pencil should be ready before setting the radius.",
            "Mark the center": "The center should be marked before setting the radius."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch14_t2_qe20',
        type: "mcq",
        question: "What is the final step in drawing a perfect circle?",
        options: ["Erase guidelines", "Complete the rotation", "Measure the diameter", "Color the circle"],
        correctAnswer: "Complete the rotation",
        explanation: "The final step is to complete a full, smooth rotation to finish the circle. 🔄",
        wrongAnswerExplanations: {
            "Erase guidelines": "Guidelines should be kept for reference.",
            "Measure the diameter": "Measuring comes after drawing.",
            "Color the circle": "Coloring is optional and comes after drawing."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 