// filepath: c:\Users\yaseen\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 4\Chapter14\content.ts
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
    id: "cl4_ch14",
    chapterNumber: 14,
    chapterName: "Smart Charts 📊",
    topics: getAllTopics(),
    duration: 180, // 3 hours total for chapter
    contentCovered: [
        "Collecting and organizing data 📝",
        "Creating and understanding pictographs 🖼️",
        "Introduction to bar graphs 📈",
        "Reading and interpreting data from charts 🧮",
        "Practical applications of data representation",
        "Comparing different types of charts",
        "Making conclusions from data 🔍"
    ],
    description: "Introduction to data handling, representation through pictographs and bar graphs, and interpreting visual data",
    explanation: `
# Smart Charts 📊

This chapter introduces young learners to the fascinating world of data representation and interpretation. Students will learn:

1. How to collect and organize data systematically 📝
2. Creating and understanding pictographs with symbols representing quantities 🖼️
3. Introduction to bar graphs and their components 📈
4. Reading information from different types of charts 🧮
5. Drawing conclusions from visual data 🔍
6. Solving real-life problems using data representation

The chapter builds essential foundation for data handling skills that will be expanded in higher classes. Through engaging examples and activities, students will develop analytical thinking and pattern recognition abilities.`,
};