// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 3\Chapter1\content.ts
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
  id: "cl3_ch1",
  chapterNumber: 1,
  chapterName: "Where to Look From",
  topics: getAllTopics(),
  duration: 180, // 3 hours total for chapter
  contentCovered: [
    "Introduction to Observation Skills 👀",
    "Understanding Different Perspectives 🔄",
    "Spatial Awareness and Direction 🧭",
    "Identifying Objects from Different Views 📐",
    "Pattern Recognition and Symmetry ✨"
  ],
  description: "Developing observation skills and understanding different perspectives in spatial awareness",
  explanation: `
# Where to Look From

This chapter introduces young learners to the fundamental concepts of observation and spatial awareness. Students will explore:
1. 👀 Basic observation skills and attention to detail
2. 🔄 Understanding different viewpoints and perspectives
3. 🧭 Developing spatial awareness and direction sense
4. 📐 Identifying objects from various angles
5. ✨ Recognizing patterns and symmetry in everyday objects

The chapter helps build essential skills for visual perception and spatial reasoning, which are crucial for mathematical thinking.`
};

export default Chapter1Content;
