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
    id: "cl4_ch2",
    chapterNumber: 2,
    chapterName: "Long and Short",
    topics: getAllTopics(),
    duration: 180, // 3 hours total for chapter
    contentCovered: [
        "Introduction to Measurement",
        "Standard Units of Length",
        "Comparing Lengths",
        "Conversion between Units",
        "Practical Applications of Measurement"
    ],
    description: "Understanding measurement of length using standard units and comparing different lengths",
    explanation: `
# Long and Short 📏

This chapter introduces students to the fundamental concepts of measurement and length. Students will learn about:

1. 📐 Standard units of measurement (cm, m, km)
2. ↔️ Comparing lengths of different objects
3. 🔄 Converting between different units of measurement
4. 📊 Practical applications of measurement in daily life
5. 🎯 Estimation and approximation of lengths

The chapter helps students develop a practical understanding of measurement and its importance in everyday life.`,
}; 