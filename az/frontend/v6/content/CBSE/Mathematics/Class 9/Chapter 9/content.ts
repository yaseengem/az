// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter9\content.ts
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

export const Chapter9Content: ChapterContent = {
    id: "cl9_ch9",
    chapterNumber: 9,
    chapterName: "Circles",
    topics: getAllTopics(),
    duration: 270, // 4.5 hours total for chapter
    contentCovered: [
        "Angle Subtended by a Chord at a Point",
        "Perpendicular from the Centre to a Chord",
        "Equal Chords and their Distances from the Centre",
        "Angle Subtended by an Arc of a Circle",
        "Cyclic Quadrilaterals",
        "Properties of Circles",
        "Theorems Related to Circles",
        "Problem Solving with Circles"
    ],
    description: "Study of circles, their properties, and theorems related to chords, arcs, and angles in circles",
    explanation: `
# Circles

This chapter explores the fascinating properties of circles and the relationships between their various elements. Students will learn about:
1. Angles formed by chords in circles
2. Relationship between chords and their distances from the center
3. Properties of perpendicular lines from the center to chords
4. Angles subtended by arcs of circles
5. Properties of cyclic quadrilaterals
6. Theorems and their applications in solving geometric problems

The chapter builds a strong foundation in circle geometry, which has applications in engineering, architecture, and advanced mathematics.`,
};
