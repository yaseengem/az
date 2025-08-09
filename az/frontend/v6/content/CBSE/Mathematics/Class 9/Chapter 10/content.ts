// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter10\content.ts
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

export const Chapter10Content: ChapterContent = {
    id: "cl9_ch10",
    chapterNumber: 10,
    chapterName: "Heron's Formula",
    topics: getAllTopics(),
    duration: 180, // 3 hours total for chapter
    contentCovered: [
        "Area of a Triangle Using Heron's Formula",
        "Applications of Heron's Formula",
        "Area of Quadrilaterals Using Heron's Formula",
        "Problems Based on Heron's Formula",
        "Properties Related to Heron's Formula"
    ],
    description: "Study of Heron's formula for calculating the area of triangles and its applications to find areas of other polygons",
    explanation: `
# Heron's Formula

This chapter introduces Heron's formula, a powerful method for calculating the area of any triangle when the lengths of all three sides are known. Students will learn:
1. The derivation and application of Heron's formula
2. How to calculate areas of triangles without using height or base measurements
3. Applying the formula to solve real-world problems
4. Extending the formula to calculate areas of quadrilaterals by dividing them into triangles
5. Solving problems involving combinations of different geometric shapes

Heron's formula provides a versatile tool for calculating areas in situations where traditional base-height methods might be impractical or impossible.`,
};
