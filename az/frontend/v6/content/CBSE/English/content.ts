import { SubjectContent } from '../../types';
import { Class9EnglishContent } from './Class9/content';
// Import other class content when available

// Create a mapping of class names to their content
const classesMap = {
    Class9: Class9EnglishContent,
    // Add other classes as they become available
};

export const CBSEEnglishContent: SubjectContent = {
    name: "English",
    description: "Development of language skills, reading comprehension, and effective communication",
    learningObjectives: [
        "Develop effective reading, writing, listening, and speaking skills",
        "Enhance vocabulary and grammar understanding",
        "Foster appreciation for literature and creative expression",
        "Build critical thinking through text analysis",
        "Improve communication skills for various contexts"
    ],
    contentCovered: [
        "Reading Comprehension",
        "Writing Skills",
        "Grammar",
        "Literature",
        "Speaking and Listening"
    ],
    classes: classesMap,

    // Make each class directly accessible at the top level
    ...classesMap
};

export default CBSEEnglishContent; 