/**
 * Centralized education data for the entire application
 */

// Student class levels (CBSE only)
export const classes = {
    // 'Australian': [
    //     'Foundation',
    //     'Year 1',
    // ],
    'CBSE': [
        'Class 3',
        'Class 4',
        'Class 5',
        'Class 6',
        'Class 7',
        'Class 8',
        'Class 9',
        'Class 10'
    ]
};

// Education board syllabuses with their descriptions (CBSE only)
export const syllabuses = {
    CBSE: {
        description:
            'Central Board of Secondary Education - National curriculum framework',
        features: [
            'Standardized national curriculum',
            'Focus on practical learning',
            'Regular assessment system',
            'Bilingual medium support'
        ],
        website: 'https://www.cbse.gov.in',
        assessmentPattern: {
            primary: 'Continuous and Comprehensive Evaluation (CCE)',
            secondary: 'Summative and Formative Assessment',
            boardExams: 'Class 10 Board Examination'
        }
    },
    // Australian: {
    // }
};

// Common subjects by class level with detailed metadata (CBSE + Mathematics only)
export const subjects = {
    CBSE: {
        Mathematics: {
            description: 'Mathematical concepts and operations',
        },
    },
    // Australian: {
    // }
};
