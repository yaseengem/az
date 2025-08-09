// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 4\content.ts
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

export const Class4MathsContent: ClassContent = {
  id: "cl4_maths",
  name: "Mathematics Class 4",
  description: "Foundational mathematics concepts for Class 4 students",
  learningObjectives: [
    "Build strong number sense and computational skills",
    "Develop basic geometric understanding and measurement concepts",
    "Introduce data handling and basic patterns",
    "Foster logical thinking and mathematical reasoning"
  ],
  contentCovered: [
    "Numbers and Number Names",
    "Addition and Subtraction",
    "Multiplication and Division",
    "Fractions",
    "Decimals",
    "Measurement (Length, Weight, Capacity)",
    "Time",
    "Money",
    "Patterns and Shapes",
    "Data Handling"
  ],
  chapters: getAllChapters()
};

export default Class4MathsContent;
