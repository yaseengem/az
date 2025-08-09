// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\content.ts
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

export const Class7MathsContent: ClassContent = {
  id: "cl7_maths",
  name: "Mathematics Class 7",
  description: "Advanced mathematics concepts for Class 7 students",
  learningObjectives: [
    "Strengthen understanding of integers, fractions, and rational numbers",
    "Develop algebraic thinking and equation-solving skills",
    "Enhance geometric reasoning and application of geometric concepts",
    "Build skills in data analysis and interpretation"
  ],
  contentCovered: [
    "Integers",
    "Fractions and Decimals",
    "Data Handling",
    "Simple Equations",
    "Lines and Angles",
    "Triangles and Its Properties",
    "Congruence of Triangles",
    "Comparing Quantities",
    "Rational Numbers",
    "Practical Geometry",
    "Perimeter and Area",
    "Algebraic Expressions",
    "Exponents and Powers",
    "Symmetry"
  ],
  chapters: getAllChapters()
};

export default Class7MathsContent;
