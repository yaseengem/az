import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch14_t1_qm1',
        type: "mcq",
        question: "When constructing a perpendicular bisector of a line segment, what is the minimum number of arcs needed?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "4",
        explanation: "You need 2 arcs from each endpoint (total 4) to find the points of intersection for the perpendicular bisector. 📐",
        wrongAnswerExplanations: {
            "1": "One arc is insufficient to find the points of intersection.",
            "2": "Two arcs are insufficient to find both points of intersection.",
            "3": "Three arcs are insufficient to find both points of intersection."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch14_t1_qm2',
        type: "mcq",
        question: "What is the angle between the two lines when constructing a perpendicular bisector?",
        options: ["30°", "45°", "60°", "90°"],
        correctAnswer: "90°",
        explanation: "A perpendicular bisector creates a right angle (90°) with the original line segment. 📐",
        wrongAnswerExplanations: {
            "30°": "30° is too small for a perpendicular bisector.",
            "45°": "45° is not the correct angle for a perpendicular bisector.",
            "60°": "60° is not the correct angle for a perpendicular bisector."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch14_t1_qm3',
        type: "mcq",
        question: "When copying an angle, what is the purpose of the first arc drawn from the vertex?",
        options: ["To measure the angle", "To create a reference point", "To divide the angle", "To verify the construction"],
        correctAnswer: "To create a reference point",
        explanation: "The first arc creates reference points that help in accurately copying the angle to a new position. 🔄",
        wrongAnswerExplanations: {
            "To measure the angle": "The angle is measured using a protractor, not arcs.",
            "To divide the angle": "The arc doesn't divide the angle, it marks reference points.",
            "To verify the construction": "Verification is done after the construction is complete."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch14_t1_qm4',
        type: "mcq",
        question: "What is the minimum number of steps required to construct a 60° angle using only a compass and straightedge?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "5",
        explanation: "You need to: 1) Draw base line, 2) Mark vertex, 3) Draw first arc, 4) Draw second arc, 5) Draw final line. 📐",
        wrongAnswerExplanations: {
            "3": "Three steps are insufficient for constructing a 60° angle.",
            "4": "Four steps are insufficient for constructing a 60° angle.",
            "6": "Six steps are more than necessary for constructing a 60° angle."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch14_t1_qm5',
        type: "mcq",
        question: "When constructing a line segment of length 7 cm, what should be the radius of the compass arc?",
        options: ["3.5 cm", "7 cm", "14 cm", "Depends on the starting point"],
        correctAnswer: "7 cm",
        explanation: "The compass should be opened to exactly 7 cm to ensure the line segment is the correct length. 📏",
        wrongAnswerExplanations: {
            "3.5 cm": "3.5 cm would create a line segment that's too short.",
            "14 cm": "14 cm would create a line segment that's too long.",
            "Depends on the starting point": "The radius should be exactly 7 cm regardless of the starting point."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch14_t1_qm6',
        type: "mcq",
        question: "What is the purpose of the perpendicular bisector in geometric constructions?",
        options: ["To measure angles", "To create right angles", "To find the midpoint", "To draw circles"],
        correctAnswer: "To find the midpoint",
        explanation: "The perpendicular bisector helps locate the exact midpoint of a line segment. 📍",
        wrongAnswerExplanations: {
            "To measure angles": "Angles are measured using a protractor.",
            "To create right angles": "While it creates right angles, that's not its primary purpose.",
            "To draw circles": "Circles are drawn using a compass."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch14_t1_qm7',
        type: "mcq",
        question: "When constructing a 45° angle, what angle should you first construct to make the process easier?",
        options: ["30°", "60°", "90°", "120°"],
        correctAnswer: "90°",
        explanation: "A 45° angle is constructed by bisecting a 90° angle, making it easier to achieve the correct measurement. 📐",
        wrongAnswerExplanations: {
            "30°": "Starting with 30° doesn't help in constructing 45°.",
            "60°": "Starting with 60° doesn't help in constructing 45°.",
            "120°": "Starting with 120° doesn't help in constructing 45°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch14_t1_qm8',
        type: "mcq",
        question: "What is the minimum number of arcs needed to construct a 30° angle using only a compass and straightedge?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "4",
        explanation: "You need arcs to construct a 60° angle first, then bisect it to get 30°, requiring 4 arcs total. 📐",
        wrongAnswerExplanations: {
            "2": "Two arcs are insufficient for constructing a 30° angle.",
            "3": "Three arcs are insufficient for constructing a 30° angle.",
            "5": "Five arcs are more than necessary for constructing a 30° angle."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch14_t1_qm9',
        type: "mcq",
        question: "When copying a line segment, why is it important to keep the compass setting unchanged?",
        options: ["To save time", "To maintain accuracy", "To create equal arcs", "To draw straight lines"],
        correctAnswer: "To maintain accuracy",
        explanation: "Keeping the compass setting unchanged ensures the copied line segment is exactly the same length as the original. 📏",
        wrongAnswerExplanations: {
            "To save time": "While it may save time, that's not the primary reason.",
            "To create equal arcs": "Equal arcs are a result, not the reason for keeping the setting unchanged.",
            "To draw straight lines": "Straight lines are drawn using a ruler, not affected by compass settings."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch14_t1_qm10',
        type: "mcq",
        question: "What is the relationship between the radius of the compass and the length of the line segment when constructing a perpendicular bisector?",
        options: ["Equal", "Half", "Double", "No specific relationship"],
        correctAnswer: "Greater than half",
        explanation: "The compass radius must be greater than half the line segment length to ensure the arcs intersect. 📐",
        wrongAnswerExplanations: {
            "Equal": "The radius doesn't need to equal the line segment length.",
            "Half": "The radius must be greater than half to ensure intersection.",
            "Double": "The radius doesn't need to be double the line segment length."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch14_t1_qm11',
        type: "mcq",
        question: "When constructing a 120° angle, what is the most efficient method?",
        options: ["Bisect 240°", "Add two 60° angles", "Subtract 60° from 180°", "Use protractor directly"],
        correctAnswer: "Add two 60° angles",
        explanation: "Constructing two 60° angles adjacent to each other is the most efficient way to create a 120° angle. 📐",
        wrongAnswerExplanations: {
            "Bisect 240°": "This method is more complex than necessary.",
            "Subtract 60° from 180°": "This method is less precise than adding two 60° angles.",
            "Use protractor directly": "The question specifies using compass and straightedge only."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch14_t1_qm12',
        type: "mcq",
        question: "What is the minimum number of steps required to copy a given angle using only a compass and straightedge?",
        options: ["4", "5", "6", "7"],
        correctAnswer: "6",
        explanation: "Steps: 1) Draw base line, 2) Draw arc on original angle, 3) Draw same arc on new line, 4) Measure chord, 5) Mark intersection, 6) Draw final line. 📐",
        wrongAnswerExplanations: {
            "4": "Four steps are insufficient for copying an angle.",
            "5": "Five steps are insufficient for copying an angle.",
            "7": "Seven steps are more than necessary for copying an angle."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch14_t1_qm13',
        type: "mcq",
        question: "When constructing a line segment that is twice the length of a given segment, what should be the compass setting?",
        options: ["Same as original", "Half of original", "Twice the original", "Depends on the starting point"],
        correctAnswer: "Same as original",
        explanation: "Use the original length twice: first to mark the endpoint, then extend by the same length. 📏",
        wrongAnswerExplanations: {
            "Half of original": "Half the length would make the segment too short.",
            "Twice the original": "Setting to twice the length would be inaccurate.",
            "Depends on the starting point": "The compass setting should match the original length regardless of starting point."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch14_t1_qm14',
        type: "mcq",
        question: "What is the purpose of the chord length when copying an angle?",
        options: ["To measure the angle", "To create reference points", "To verify the construction", "To draw the final line"],
        correctAnswer: "To create reference points",
        explanation: "The chord length helps create accurate reference points for copying the angle. 🔄",
        wrongAnswerExplanations: {
            "To measure the angle": "The angle is measured using the arcs, not the chord.",
            "To verify the construction": "Verification is done after the construction is complete.",
            "To draw the final line": "The final line is drawn after establishing reference points."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch14_t1_qm15',
        type: "mcq",
        question: "When constructing a perpendicular to a line at a given point, how many arcs are needed?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "4",
        explanation: "You need 2 arcs on each side of the point (total 4) to find the points for the perpendicular. 📐",
        wrongAnswerExplanations: {
            "2": "Two arcs are insufficient to find the points for the perpendicular.",
            "3": "Three arcs are insufficient to find the points for the perpendicular.",
            "5": "Five arcs are more than necessary for constructing a perpendicular."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch14_t1_qm16',
        type: "mcq",
        question: "What is the most efficient way to construct a 75° angle using only a compass and straightedge?",
        options: ["Add 60° and 15°", "Subtract 15° from 90°", "Bisect 150°", "Add 45° and 30°"],
        correctAnswer: "Add 45° and 30°",
        explanation: "Adding a 45° angle to a 30° angle is the most efficient way to construct 75° using basic constructions. 📐",
        wrongAnswerExplanations: {
            "Add 60° and 15°": "Constructing 15° is more complex than necessary.",
            "Subtract 15° from 90°": "Constructing 15° is more complex than necessary.",
            "Bisect 150°": "This method is more complex than adding 45° and 30°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch14_t1_qm17',
        type: "mcq",
        question: "When constructing a line segment parallel to a given line, what is the first step?",
        options: ["Draw a perpendicular", "Mark a point", "Draw an arc", "Measure the distance"],
        correctAnswer: "Draw a perpendicular",
        explanation: "First draw a perpendicular to establish the correct distance for the parallel line. 📏",
        wrongAnswerExplanations: {
            "Mark a point": "Marking a point comes after establishing the perpendicular.",
            "Draw an arc": "Drawing an arc comes after establishing the perpendicular.",
            "Measure the distance": "Measuring comes after establishing the perpendicular."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch14_t1_qm18',
        type: "mcq",
        question: "What is the minimum number of steps required to construct a 15° angle using only a compass and straightedge?",
        options: ["5", "6", "7", "8"],
        correctAnswer: "7",
        explanation: "Steps: 1) Construct 60°, 2) Bisect to get 30°, 3) Bisect 30° to get 15°. Each bisection requires multiple steps. 📐",
        wrongAnswerExplanations: {
            "5": "Five steps are insufficient for constructing a 15° angle.",
            "6": "Six steps are insufficient for constructing a 15° angle.",
            "8": "Eight steps are more than necessary for constructing a 15° angle."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch14_t1_qm19',
        type: "mcq",
        question: "When constructing a line segment that is three times the length of a given segment, what is the most efficient method?",
        options: ["Use compass three times", "Measure and multiply", "Use protractor", "Draw freehand"],
        correctAnswer: "Use compass three times",
        explanation: "Use the compass to mark the length three times in succession for accurate construction. 📏",
        wrongAnswerExplanations: {
            "Measure and multiply": "This method is less precise than using the compass.",
            "Use protractor": "A protractor is not used for line segment construction.",
            "Draw freehand": "Freehand drawing is not precise enough for geometric construction."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch14_t1_qm20',
        type: "mcq",
        question: "What is the purpose of the intersection points when constructing a perpendicular bisector?",
        options: ["To measure the angle", "To create the bisector line", "To verify the construction", "To draw circles"],
        correctAnswer: "To create the bisector line",
        explanation: "The intersection points are used to draw the perpendicular bisector line. 📐",
        wrongAnswerExplanations: {
            "To measure the angle": "The angle is determined by the construction, not measured.",
            "To verify the construction": "Verification is done after the construction is complete.",
            "To draw circles": "The circles are already drawn to find the intersection points."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 