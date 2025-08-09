// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 5\content.ts
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

export const Class5MathsContent: ClassContent = {
  id: "cl5_maths",
  name: "Mathematics Class 5",
  description: "Comprehensive mathematics concepts for Class 5 students",
  learningObjectives: [
    "Strengthen numerical computation skills and problem solving",
    "Expand geometric concepts and spatial understanding",
    "Develop skills in data interpretation and representation",
    "Build mathematical reasoning and critical thinking abilities"
  ],
  contentCovered: [
    "Large Numbers",
    "Operations on Numbers",
    "HCF and LCM",
    "Fractions and Decimals",
    "Percentages",
    "Geometry and Shapes",
    "Measurement of Length, Mass and Capacity",
    "Time and Temperature",
    "Area and Perimeter",
    "Data Handling and Graphs"
  ],
  chapters: getAllChapters()
};

export default Class5MathsContent;
