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
    }  });
  
  // Sort topics by topic number for consistency
  return topics.sort((a, b) => a.topicNumber - b.topicNumber);
};

export const Chapter13Content: ChapterContent = {
    id: "cl9_ch13",
    chapterNumber: 13,
    chapterName: "Appendix: Proofs in Mathematics",
    topics: getAllTopics(),
    duration: 270, // 4.5 hours total for chapter
    contentCovered: [
        "Introduction",
        "Mathematically Acceptable Statements",
        "Deductive Reasoning",
        "Theorems, Conjectures and Axioms", 
        "What is a Mathematical Proof?",
        "Summary"
    ],
    description: "Study of proofs in mathematics, exploring how mathematical statements are proved using deductive reasoning, axioms, and theorems",
    explanation: `
# Appendix: Proofs in Mathematics

This chapter introduces students to the concept of mathematical proofs and their importance in mathematics. Students will learn about:
1. Introduction to mathematical proofs and their importance
2. What makes statements mathematically acceptable
3. How deductive reasoning is used in mathematical arguments
4. Understanding key mathematical terms like theorems, conjectures, and axioms
5. The structure and types of mathematical proofs
6. Summary of key concepts

The chapter builds a foundation for logical thinking and mathematical reasoning essential for higher mathematics.`,
};
