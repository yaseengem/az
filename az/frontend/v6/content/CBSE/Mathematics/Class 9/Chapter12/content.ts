// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter12\content.ts
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

export const Chapter12Content: ChapterContent = {
    id: "cl9_ch12",
    chapterNumber: 12,
    chapterName: "Statistics",
    topics: getAllTopics(),
    duration: 180, // 3 hours total for chapter
    contentCovered: [
        "Introduction to Statistics",
        "Collection and Organization of Data",
        "Graphical Representation of Data",
        "Bar Graphs and Histograms",
        "Frequency Polygons and Ogives",
        "Measures of Central Tendency"
    ],
    description: "Study of statistics including data collection, organization, and graphical representation of data",
    explanation: `
# Statistics

Statistics is a branch of mathematics that deals with the collection, analysis, interpretation, presentation, and organization of data. In this chapter, students will learn:

1. How to collect and organize data in a meaningful way
2. Different methods for graphical representation of data, including bar graphs, histograms, and frequency polygons
3. How to interpret different types of graphs and extract relevant information
4. Calculating measures of central tendency (mean, median, and mode)
5. Applying statistical concepts to real-world scenarios

Statistics plays a crucial role in many fields including science, economics, business, and social sciences, where data-driven decision-making is essential.`,
};
