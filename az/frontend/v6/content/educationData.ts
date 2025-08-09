/**
 * Centralized education data for the entire application
 */

// Student class levels (mapped to Australian and CBSE levels)
export const classes = {
    // 'Australian': [
    //     'Foundation',
    //     'Year 1',
    //     'Year 2',
    //     'Year 3',
    //     'Year 4',
    //     'Year 5',
    //     'Year 6',
    //     'Year 7',
    //     'Year 8',
    //     'Year 9',
    //     'Year 10',
    //     'Year 11',
    //     'Year 12'
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

// Education board syllabuses with their descriptions
export const syllabuses = {
    'CBSE': {
        description: 'Central Board of Secondary Education - National curriculum framework',
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
    // 'Australian Curriculum': {
    //     description: 'National curriculum framework for Australian schools',
    //     features: [
    //         'General capabilities integration',
    //         'Cross-curriculum priorities',
    //         'Achievement standards',
    //         'Learning continua'
    //     ],
    //     website: 'https://www.australiancurriculum.edu.au',
    //     assessmentPattern: {
    //         primary: 'Continuous assessment with learning progressions',
    //         secondary: 'Standards-based assessment',
    //         nationalTesting: 'NAPLAN testing in Years 3, 5, 7, and 9'
    //     }
    // }
};

// Common subjects by class level with detailed metadata
export const subjects = {
    // 'Australian': {
    //     primary: {
    //         'English': {
    //             description: 'Language, literature, and literacy development',
    //             learningObjectives: ['Text comprehension', 'Writing processes', 'Speaking and listening'],
    //             generalCapabilities: ['Literacy', 'Critical and creative thinking']
    //         },
    //         'Mathematics': {
    //             description: 'Number, algebra, measurement, geometry, and statistics',
    //             learningObjectives: ['Number sense', 'Pattern recognition', 'Problem solving'],
    //             generalCapabilities: ['Numeracy', 'Critical and creative thinking']
    //         },
    //         'Science': {
    //             description: 'Scientific understanding and inquiry skills',
    //             learningObjectives: ['Scientific method', 'Scientific concepts', 'Investigation skills'],
    //             generalCapabilities: ['Critical and creative thinking', 'Ethical understanding']
    //         },
    //         'Humanities and Social Sciences': {
    //             description: 'History, geography, civics, and economics',
    //             learningObjectives: ['Historical understanding', 'Geographic knowledge', 'Civic awareness'],
    //             generalCapabilities: ['Critical and creative thinking', 'Intercultural understanding']
    //         }
    //     },
    //     secondary: {
    //         'English': {
    //             description: 'Advanced language and literature studies',
    //             learningObjectives: ['Text analysis', 'Creative writing', 'Critical thinking'],
    //             generalCapabilities: ['Literacy', 'Critical and creative thinking']
    //         },
    //         'Mathematics': {
    //             description: 'Advanced mathematical concepts and applications',
    //             learningObjectives: ['Complex problem solving', 'Mathematical reasoning', 'Data analysis'],
    //             generalCapabilities: ['Numeracy', 'Critical and creative thinking']
    //         },
    //         'Science': {
    //             description: 'Specialized scientific disciplines',
    //             learningObjectives: ['Scientific investigation', 'Conceptual understanding', 'Practical skills'],
    //             generalCapabilities: ['Critical and creative thinking', 'Ethical understanding']
    //         },
    //         'Humanities and Social Sciences': {
    //             description: 'Specialized social science disciplines',
    //             learningObjectives: ['Historical analysis', 'Geographic skills', 'Economic understanding'],
    //             generalCapabilities: ['Critical and creative thinking', 'Intercultural understanding']
    //         }
    //     },
    //     seniorSecondary: {
    //         'English': {
    //             description: 'Advanced English studies and literature analysis',
    //             learningObjectives: ['Advanced literary analysis', 'Critical evaluation', 'Research skills'],
    //             generalCapabilities: ['Literacy', 'Critical and creative thinking']
    //         },
    //         'Mathematics': {
    //             description: 'Advanced mathematics including calculus and statistics',
    //             learningObjectives: ['Advanced problem solving', 'Mathematical modeling', 'Statistical analysis'],
    //             generalCapabilities: ['Numeracy', 'Critical and creative thinking']
    //         },
    //         'Science': {
    //             description: 'Specialized scientific disciplines at advanced level',
    //             learningObjectives: ['Advanced scientific investigation', 'Research methodology', 'Practical skills'],
    //             generalCapabilities: ['Critical and creative thinking', 'Ethical understanding']
    //         },
    //         'Humanities and Social Sciences': {
    //             description: 'Advanced studies in humanities and social sciences',
    //             learningObjectives: ['Advanced research skills', 'Critical analysis', 'Social understanding'],
    //             generalCapabilities: ['Critical and creative thinking', 'Intercultural understanding']
    //         }
    //     }
    // },
    'CBSE': {
        primary: {
            // 'English': {
            //     description: 'Language and literature development',
            //     learningObjectives: ['Language skills', 'Reading comprehension', 'Creative writing'],
            //     assessmentPattern: 'Continuous assessment with periodic tests'
            // },
            'Mathematics': {
                description: 'Basic mathematical concepts and operations',
                learningObjectives: ['Number operations', 'Problem solving', 'Mathematical reasoning'],
                assessmentPattern: 'Continuous assessment with periodic tests'
            },
            // 'Environmental Studies': {
            //     description: 'Understanding environment and society',
            //     learningObjectives: ['Environmental awareness', 'Social studies', 'Scientific observation'],
            //     assessmentPattern: 'Project-based assessment'
            // }
        },
        secondary: {
        //     'English': {
        //         description: 'Advanced language and literature',
        //         learningObjectives: ['Advanced writing', 'Literary analysis', 'Communication skills'],
        //         assessmentPattern: 'Summative and formative assessment'
        //     },
            'Mathematics': {
                description: 'Advanced mathematical concepts',
                learningObjectives: ['Problem solving', 'Mathematical modeling', 'Analytical thinking'],
                assessmentPattern: 'Summative and formative assessment'
            },
        //     'Science': {
        //         description: 'Physics, Chemistry, and Biology',
        //         learningObjectives: ['Scientific principles', 'Experimental skills', 'Conceptual understanding'],
        //         assessmentPattern: 'Practical and theoretical assessment'
        //     },
        //     'Social Science': {
        //         description: 'History, Geography, and Political Science',
        //         learningObjectives: ['Historical understanding', 'Geographic knowledge', 'Civic awareness'],
        //         assessmentPattern: 'Project-based and written assessment'
        //     }
        },
        seniorSecondary: {
        //     'English': {
        //         description: 'Advanced English language and literature',
        //         learningObjectives: ['Advanced writing', 'Literary analysis', 'Research skills'],
        //         assessmentPattern: 'Board examination and internal assessment'
        //     },
            'Mathematics': {
                description: 'Advanced mathematics including calculus and statistics',
                learningObjectives: ['Advanced problem solving', 'Mathematical modeling', 'Statistical analysis'],
                assessmentPattern: 'Board examination and internal assessment'
            },
        //     'Science': {
        //         description: 'Specialized scientific disciplines at advanced level',
        //         learningObjectives: ['Advanced scientific principles', 'Research methodology', 'Practical skills'],
        //         assessmentPattern: 'Board examination, practical assessment, and internal assessment'
        //     },
        //     'Commerce': {
        //         description: 'Business and commerce studies',
        //         learningObjectives: ['Business understanding', 'Financial literacy', 'Economic analysis'],
        //         assessmentPattern: 'Board examination and internal assessment'
        //     },
        //     'Humanities': {
        //         description: 'Advanced studies in humanities',
        //         learningObjectives: ['Historical analysis', 'Social understanding', 'Research skills'],
        //         assessmentPattern: 'Board examination and internal assessment'
        //     }
        }
    }
};

// Assessment types and criteria
export const assessmentTypes = {
    // 'Australian': {
    //     'Formative': {
    //         description: 'Ongoing assessment during learning',
    //         methods: ['Learning progressions', 'Teacher observations', 'Student work samples'],
    //         weightage: 'Varies by school'
    //     },
    //     'Summative': {
    //         description: 'End-term assessment of learning',
    //         methods: ['Achievement standards', 'NAPLAN testing', 'School-based examinations', 'ATAR assessment'],
    //         weightage: 'Varies by school'
    //     }
    // },
    'CBSE': {
        'Formative': {
            description: 'Continuous assessment during learning',
            methods: ['Quizzes', 'Class participation', 'Homework', 'Projects'],
            weightage: '40%'
        },
        'Summative': {
            description: 'End-term assessment of learning',
            methods: ['Board examinations', 'Term papers', 'Presentations', 'Practical examinations'],
            weightage: '60%'
        }
    }
};

// Learning outcomes by class level
export const learningOutcomes = {
    // 'Australian': {
    //     primary: {
    //         description: 'Foundation to Year 6 learning outcomes',
    //         keyAreas: [
    //             'Literacy and numeracy foundations',
    //             'Scientific understanding',
    //             'Social and emotional development',
    //             'Critical and creative thinking'
    //         ],
    //         assessmentFocus: ['Learning progressions', 'Achievement standards', 'General capabilities']
    //     },
    //     secondary: {
    //         description: 'Years 7-10 learning outcomes',
    //         keyAreas: [
    //             'Advanced subject knowledge',
    //             'Critical thinking skills',
    //             'Research capabilities',
    //             'Career pathways'
    //         ],
    //         assessmentFocus: ['Achievement standards', 'Subject-specific skills', 'General capabilities']
    //     },
    //     seniorSecondary: {
    //         description: 'Years 11-12 learning outcomes',
    //         keyAreas: [
    //             'Specialized subject knowledge',
    //             'Advanced research capabilities',
    //             'Career pathway preparation',
    //             'University entrance preparation'
    //         ],
    //         assessmentFocus: ['ATAR assessment', 'Subject-specific skills', 'General capabilities']
    //     }
    // },
    'CBSE': {
        primary: {
            description: 'Primary education outcomes (Classes 1-5)',
            keyAreas: [
                'Basic literacy and numeracy',
                'Environmental awareness',
                'Social skills',
                'Creative expression'
            ],
            assessmentFocus: ['Continuous evaluation', 'Project work', 'Activity-based learning']
        },
        secondary: {
            description: 'Secondary education outcomes (Classes 6-10)',
            keyAreas: [
                'Subject knowledge',
                'Problem-solving skills',
                'Scientific temper',
                'Social awareness'
            ],
            assessmentFocus: ['Summative assessment', 'Practical skills', 'Project work']
        },
        seniorSecondary: {
            description: 'Senior secondary education outcomes (Classes 11-12)',
            keyAreas: [
                'Specialized subject expertise',
                'Research and analytical skills',
                'Career preparation',
                'University entrance preparation'
            ],
            assessmentFocus: ['Board examinations', 'Practical skills', 'Internal assessment']
        }
    }
};
