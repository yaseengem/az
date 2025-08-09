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

export const Chapter2Content: ChapterContent = {
  id: "cl3_ch2",
  chapterNumber: 2,
  chapterName: "Fun with Numbers",
  topics: getAllTopics(),
  duration: 180, // 3 hours total for chapter
  contentCovered: [
    "Number Names and Numerals Up to 999 🔢",
    "Comparing and Ordering Numbers 📊",
    "Place Value and Face Value 📝",
    "Understanding the Structure of Numbers 🧩",
    "Real-life Applications of Numbers 🌍"
  ],
  description: "Exploring number concepts up to 999, including naming, comparing, ordering, and understanding place values",
  explanation: `
# Fun with Numbers

This chapter helps students develop a deeper understanding of numbers up to 999. Students will explore:
1. 🔢 Reading and writing number names and numerals up to 999
2. 📊 Comparing numbers and arranging them in ascending or descending order
3. 📝 Understanding place value and face value of digits
4. 🧩 Breaking down numbers into expanded form
5. 🌍 Applying number concepts to solve everyday problems

The chapter builds a strong foundation in number sense that will help students with more advanced mathematical concepts in the future.`
};

export default Chapter2Content;