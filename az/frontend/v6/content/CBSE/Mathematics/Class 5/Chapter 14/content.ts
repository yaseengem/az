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
    id: "cl5_ch14",
    chapterNumber: 14,
    chapterName: "How Big? How Heavy?",
    topics: getAllTopics(),
    duration: 180, // 3 hours total for chapter
    contentCovered: [
        "Measuring volume (litres, millilitres) 📏",
        "Weight vs. mass concepts ⚖️",
        "Metric unit conversions 🔄"
    ],
    description: "Understanding measurement of volume and weight",
    explanation: `
# How Big? How Heavy?

This chapter covers:
1. Learning to measure volume using litres and millilitres 📏
2. Understanding the difference between weight and mass ⚖️
3. Converting between different metric units 🔄

The chapter helps students develop measurement skills and understand the importance of accurate measurement in daily life.`,
}; 