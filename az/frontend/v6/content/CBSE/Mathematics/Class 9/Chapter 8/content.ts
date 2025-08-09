// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter8\content.ts
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

export const Chapter8Content: ChapterContent = {
    id: "cl9_ch8",
    chapterNumber: 8,
    chapterName: "Quadrilaterals",
    topics: getAllTopics(),
    duration: 225, // 3.75 hours total for chapter
    contentCovered: [
        "Introduction to Quadrilaterals",
        "Angle Sum Property of Quadrilaterals",
        "Types of Quadrilaterals",
        "Properties of Parallelograms",
        "The Mid-point Theorem", 
        "Applications of the Mid-point Theorem",
        "Theorem on the Midpoint of a Line Segment",
        "Special Cases of Quadrilaterals: Rectangles, Rhombus and Square",
        "Proving Properties of Quadrilaterals"
    ],

};
