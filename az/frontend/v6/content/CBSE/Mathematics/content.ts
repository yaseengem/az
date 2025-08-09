import { SubjectContent, ClassContent } from '../../types';

// Use webpack/metro context to get all class content files dynamically
// This scans for all content.ts files directly inside Class* folders
const classContexts = require.context('./', true, /Class \d+\/content\.ts$/);

// Function to dynamically get all available classes
const getAllClasses = (): Record<string, ClassContent> => {
  const classesMap: Record<string, ClassContent> = {};
  
  // Process each found class content file
  classContexts.keys().forEach((key: string) => {
    const classModule = classContexts(key);
    
    // Extract the class number from the path (e.g., "./Class 5/content.ts" -> "5")
    const classNumberMatch = key.match(/Class (\d+)/);
    if (classNumberMatch && classNumberMatch[1]) {
      const classNumber = parseInt(classNumberMatch[1], 10);
      const className = `Class${classNumber}`;
      
      // Find the class content in the module exports
      // It could be the default export or a named export like "Class5MathsContent"
      let classContent = classModule.default;
      if (!classContent) {
        const exportName = `Class${classNumber}MathsContent`;
        classContent = classModule[exportName];
      }
      
      if (classContent) {
        classesMap[className] = classContent;
      }
    }
  });
  
  return classesMap;
};

// Create a mapping of class names to their content dynamically
const classesMap = getAllClasses();

export const CBSEMathematicsContent: SubjectContent = {
    name: "Mathematics",
    description: "Foundation for analytical thinking and problem-solving skills through mathematical concepts",
    learningObjectives: [
        "Develop logical thinking and problem-solving abilities",
        "Understand mathematical concepts and their real-world applications",
        "Master computational skills and numerical fluency",
        "Learn to represent and analyze mathematical relationships",
        "Develop spatial understanding and geometric reasoning"
    ],
    contentCovered: [
        "Number Systems",
        "Algebra",
        "Geometry",
        "Trigonometry",
        "Statistics",
        "Probability"
    ],
    classes: classesMap,

    // Make each class directly accessible at the top level
    ...classesMap
};

export default CBSEMathematicsContent;
