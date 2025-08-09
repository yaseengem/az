// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter11\content.ts
import { QuizQuestion, ChapterContent, TopicContent } from '../../../../types';

// Use webpack/metro context to get all topic content files dynamically
// This scans for all content.ts files one level down in Topic* folders
const topicContexts = require.context('./', true, /Topic\d+\/content\.ts$/);

// Function to dynamically get all available topics
const getAllTopics = (): TopicContent[] => {
  const topics: TopicContent[] = [];
  
  // Process each found topic content file
  topicContexts.keys().forEach((key: string) => {
    const topicModule = topicContexts(key);
    
    // Extract the topic number from the path (e.g., "./Topic5/content.ts" -> "5")
    const topicNumberMatch = key.match(/Topic(\d+)/);
    if (topicNumberMatch && topicNumberMatch[1]) {
      const topicNumber = parseInt(topicNumberMatch[1], 10);
      
      // Find the topic content in the module exports
      // It could be either the default export or a named export like "Topic5Content"
      let topicContent = topicModule.default;
      if (!topicContent) {
        const exportName = `Topic${topicNumber}Content`;
        topicContent = topicModule[exportName];
      }
      
      if (topicContent) {
        topics.push(topicContent);
      }
    }
  });
  
  // Sort topics by topic number for consistency
  return topics.sort((a, b) => a.topicNumber - b.topicNumber);
};

export const Chapter11Content: ChapterContent = {
    id: "cl9_ch11",
    chapterNumber: 11,
    chapterName: "Surface Areas and Volumes",
    topics: getAllTopics(),
    duration: 270, // 4.5 hours total for chapter
    contentCovered: [
        "Surface Area of a Right Circular Cone",
        "Surface Area of a Sphere",
        "Volume of a Right Circular Cone",
        "Volume of a Sphere",
        "Applications of Surface Areas and Volumes",
        "Summary of Formulas and Relationships"
    ],
    description: "Study of surface areas and volumes of right circular cones and spheres, their formulas and real-world applications",
    explanation: `
# Surface Areas and Volumes

This chapter covers the fundamental concepts of surface areas and volumes of 3D shapes, focusing on right circular cones and spheres. Students will learn about:
1. Finding the surface area of right circular cones
2. Calculating the surface area of spheres
3. Determining the volume of right circular cones
4. Computing the volume of spheres
5. Applying these formulas to real-world problems
6. Understanding the relationships between different measures

The chapter builds a foundation for advanced mathematical concepts in geometry and calculus applications.`,
};
