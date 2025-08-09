// Main content aggregation file
import { CBSEContent } from './CBSE/content';
import { experts } from './experts_list';
// Import additional syllabuses as they're created
// import { AustralianContent } from './Australian/content';

// Type definitions for syllabus and subject names
export type SyllabusName = 'CBSE';
export type SubjectName = 'Mathematics' | 'English' | 'Science' | 'SocialScience' | 'Environmental Studies';

// Type definitions for content structure
export interface SyllabusStructure {
    [syllabusName: string]: {
        [subjectName: string]: {
            [className: string]: any;
        };
    };
}

// Aggregate all content from various syllabuses
export const content = {
    // Syllabuses
    CBSE: CBSEContent,
    // Australian: AustralianContent,

    // Additional content
    experts
};

// Helper function to get syllabus content
export function getSyllabusContent(syllabusName: string, subject: string, className: string): any | null {
    try {
        const syllabus = content[syllabusName as keyof typeof content];
        if (!syllabus || typeof syllabus !== 'object') return null;

        const subjectContent = (syllabus as any)[subject];
        if (!subjectContent || typeof subjectContent !== 'object') return null;

        return subjectContent[className] || null;
    } catch (error) {
        console.error('Error getting content:', error);
        return null;
    }
}

// List all chapters and topics for a given syllabus, subject, and class
export function listChaptersAndTopics(syllabusName: string, subject: string, className: string) {
    try {
        const syllabus = content[syllabusName as keyof typeof content];
        if (!syllabus || typeof syllabus !== 'object') return [];
        const subjectContent = (syllabus as any)[subject];
        if (!subjectContent || typeof subjectContent !== 'object') return [];
        const classContent = subjectContent[className];
        if (!classContent || typeof classContent !== 'object') return [];
        if (!Array.isArray(classContent.chapters)) return [];
        // Each chapter has chapterName and topics (array of TopicContent)
        return classContent.chapters.map((chapter: any) => ({
            chapterNumber: chapter.chapterNumber,
            chapterName: chapter.chapterName,
            topics: (chapter.topics || []).map((topic: any) => ({
                topicNumber: topic.topicNumber,
                topicName: topic.topicName,
                id: topic.id
            }))
        }));
    } catch (error) {
        console.error('Error listing chapters and topics:', error);
        return [];
    }
}

export default content;
