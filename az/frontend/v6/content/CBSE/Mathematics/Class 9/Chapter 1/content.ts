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

export const Chapter1Content: ChapterContent = {
    id: "cl9_ch1",
    chapterNumber: 1,
    chapterName: "Number Systems",
    topics: getAllTopics(),
    duration: 270, // 4.5 hours total for chapter
    contentCovered: [
        "Introduction to Number Systems",
        "Definition and Examples of Irrational Numbers",
        "Properties of Irrational Numbers",
        "Representation of Irrational Numbers on the Number Line",
        "Real Numbers and Their Classification",
        "Decimal Expansion of Real Numbers",
        "Operations on Real Numbers",
        "Laws of Exponents for Real Numbers",
        "Applications of Real Numbers"
    ],
    description: "Study of real number system including rational and irrational numbers, their properties and operations",
    explanation: `
# Number Systems

This chapter covers the fundamental concepts of real numbers, their properties, and operations. Students will learn about:
1. Introduction to different types of numbers
2. Irrational numbers and their properties
3. Representation on number line
4. Real numbers classification
5. Decimal expansions of real numbers
6. Operations on real numbers and their properties
7. Laws of exponents
8. Real-world applications and problem solving

The chapter builds foundation for advanced mathematical concepts in algebra and calculus.`,
};
