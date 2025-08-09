// This is the main content file for Class 6. Chapters and topics will be organized in subfolders as per the required structure.

import { ClassContent, ChapterContent } from '../../../types';

// Use webpack/metro context to get all chapter content files dynamically
// This scans for all content.ts files one level down in Chapter* folders
const chapterContexts = require.context('./', true, /Chapter\d+\/content\.ts$/);

// Function to dynamically get all available chapters
const getAllChapters = (): ChapterContent[] => {
    const chapters: ChapterContent[] = [];

    // Process each found chapter content file
    chapterContexts.keys().forEach((key: string) => {
        const chapterModule = chapterContexts(key);

        // Extract the chapter number from the path (e.g., "./Chapter5/content.ts" -> "5")
        const chapterNumberMatch = key.match(/Chapter(\d+)/);
        if (chapterNumberMatch && chapterNumberMatch[1]) {
            const chapterNumber = parseInt(chapterNumberMatch[1], 10);

            // Find the chapter content in the module exports
            // It could be either the default export or a named export like "Chapter5Content"
            let chapterContent = chapterModule.default;
            if (!chapterContent) {
                const exportName = `Chapter${chapterNumber}Content`;
                chapterContent = chapterModule[exportName];
            }

            if (chapterContent) {
                chapters.push(chapterContent);
            }
        }
    });

    // Sort chapters by chapter number for consistency
    return chapters.sort((a, b) => a.chapterNumber - b.chapterNumber);
};

export const Class6MathsContent: ClassContent = {
    id: "cl6_maths",
    name: "Mathematics Class 6",
    description: "Foundation course in mathematics concepts for Class 6 students",
    learningObjectives: [
        "Understanding number systems and basic operations",
        "Developing spatial awareness and geometric concepts",
        "Building problem-solving skills through practical applications",
        "Learning measurement and data handling basics"
    ],
    contentCovered: [
        "Knowing Our Numbers",
        "Whole Numbers",
        "Playing With Numbers",
        "Basic Geometrical Ideas",
        "Understanding Elementary Shapes",
        "Integers",
        "Fractions",
        "Decimals",
        "Data Handling",
        "Mensuration",
        "Algebra",
        "Ratio and Proportion",
        "Symmetry",
        "Practical Geometry"
    ],
    chapters: getAllChapters()
};

export default Class6MathsContent;
