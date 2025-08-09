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

export const Chapter5Content: ChapterContent = {
    id: "cl9_ch5",
    chapterNumber: 5,
    chapterName: "Introduction to Euclid's Geometry",
    topics: getAllTopics(),
    duration: 180, // 3 hours total for chapter
    contentCovered: [
        "Introduction to Euclid's Geometry",
        "Euclid's Definitions, Axioms and Postulates",
        "Summary"
    ],
    description: "Study of Euclid's geometry including axioms, postulates, and basic geometric principles",
    explanation: `
# Introduction to Euclid's Geometry

This chapter introduces students to the fascinating world of Euclidean geometry. Students will learn about:
1. The historical context and importance of Euclid's work
2. Fundamental definitions in Euclidean geometry
3. The axiomatic approach to geometry
4. Euclid's five postulates and common notions
5. Applications of Euclidean geometry in real-world contexts

The chapter builds a foundation for advanced geometric thinking and proofs in mathematics.`,
};
