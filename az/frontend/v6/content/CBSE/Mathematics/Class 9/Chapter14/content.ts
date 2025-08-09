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

export const Chapter14Content: ChapterContent = {
  id: 'cl9_ch14',
  chapterNumber: 14,
  chapterName: 'Appendix: Introduction to Mathematical Modelling',
  topics: getAllTopics(),
  duration: 270, // 4.5 hours total for chapter
  contentCovered: [
    "Introduction",
    "Review of Word Problems",
    "Some Mathematical Models",
    "The Process of Modelling – Its Advantages and Limitations",
    "Summary"
  ],
  description: "Study of mathematical modeling, covering the process of creating models to solve real-world problems using mathematical concepts and techniques",
  explanation: `
# Appendix: Introduction to Mathematical Modelling

This chapter introduces students to the concept of mathematical modelling and its applications. Students will learn about:
1. Introduction to mathematical modelling and its importance
2. Review of word problems and their translation into mathematical language
3. Examples of mathematical models in different contexts
4. The process of creating mathematical models, with their advantages and limitations
5. Summary of key concepts and techniques

The chapter builds essential problem-solving skills by connecting abstract mathematical concepts to real-world situations, preparing students for practical applications of mathematics.`,
};
