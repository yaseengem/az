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

export const Class10MathsContent: ClassContent = {
    id: "cl10",
    name: "Mathematics Class 10",
    description: "Advanced mathematics concepts for Class 10 students",
    learningObjectives: [
        "Deepening understanding of number systems and algebraic concepts",
        "Advanced geometry and trigonometry applications",
        "Introduction to statistics and probability",
        "Developing mathematical reasoning and problem-solving skills"
    ],
    contentCovered: [
        "Real Numbers",
        "Polynomials",
        "Pair of Linear Equations in Two Variables",
        "Quadratic Equations",
        "Arithmetic Progressions",
        "Triangles",
        "Coordinate Geometry",
        "Trigonometry",
        "Circles",
        "Constructions",
        "Areas Related to Circles",
        "Surface Areas and Volumes",
        "Statistics",
        "Probability"    ],
    chapters: getAllChapters()
};

export default Class10MathsContent;