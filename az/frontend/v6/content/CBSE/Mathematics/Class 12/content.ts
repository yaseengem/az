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

export const Class12MathsContent: ClassContent = {
    id: "cl12_maths",
    name: "Mathematics Class 12",
    description: "Advanced mathematics for Class 12 students preparing for higher education and competitive exams",
    learningObjectives: [
        "Mastering advanced calculus concepts and applications",
        "Understanding three-dimensional geometry and vector algebra",
        "Developing skills in probability and statistical analysis",
        "Applying mathematics to solve complex real-world problems"
    ],
    contentCovered: [
        "Relations and Functions",
        "Inverse Trigonometric Functions",
        "Matrices and Determinants",
        "Continuity and Differentiability",
        "Applications of Derivatives",
        "Integrals",
        "Applications of Integrals",
        "Differential Equations",
        "Vector Algebra",
        "Three-dimensional Geometry",
        "Linear Programming",
        "Probability"
    ],    chapters: getAllChapters()
};

export default Class12MathsContent; 