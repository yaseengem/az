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

export const Class3MathsContent: ClassContent = {
  id: "cl3",
  name: "Mathematics Class 3",
  description: "Introduction to essential mathematical concepts for young learners in Class 3",
  learningObjectives: [
    "Developing spatial awareness and observation skills",
    "Building number sense and understanding patterns",
    "Mastering basic addition and subtraction operations",
    "Understanding measurement concepts including length, weight, and capacity",
    "Recognizing and creating shapes and patterns"
  ],
  contentCovered: [
    "Observation and Spatial Awareness",
    "Numbers and Counting Patterns",
    "Addition and Subtraction",
    "Measurement Concepts",
    "Basic Shapes and Patterns",
    "Time and Calendar",
    "Introduction to Multiplication",
    "Beginning Division",
    "Basic Data Representation"
  ],
  chapters: getAllChapters(),
};

export default Class3MathsContent;
