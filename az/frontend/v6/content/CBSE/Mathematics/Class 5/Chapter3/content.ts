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

export const Chapter3Content: ChapterContent = {
    id: "cl5_ch3",
    chapterNumber: 3,
    chapterName: "How Many Squares?",
    topics: getAllTopics(),
    duration: 180, // 3 hours total for chapter
    contentCovered: [
        "Calculating area by counting squares 📏",
        "Perimeter of irregular shapes 📐",
        "Comparing area vs. perimeter 🔄"
    ],
    description: "Understanding area and perimeter through counting squares and practical applications",
    explanation: `
# How Many Squares?

This chapter focuses on:
1. Learning to calculate area by counting squares 📏
2. Understanding perimeter of irregular shapes 📐
3. Comparing and contrasting area and perimeter concepts 🔄

The chapter uses hands-on activities and visual examples to help students grasp the fundamental concepts of area and perimeter measurement.`,
}; 