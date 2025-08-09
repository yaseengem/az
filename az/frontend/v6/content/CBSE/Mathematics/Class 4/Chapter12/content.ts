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
    id: "cl4_ch12",
    chapterNumber: 12,
    chapterName: "How Heavy? How Light?",
    topics: getAllTopics(),
    duration: 180, // 3 hours total for chapter
    contentCovered: [
        "Introduction to Weight",
        "Standard Units of Weight",
        "Comparing Weights",
        "Measuring Weight",
        "Practical Applications"
    ],
    description: "Understanding measurement of weight and comparing different weights",
    explanation: `
# How Heavy? How Light? ⚖️

This chapter introduces students to the concept of weight and its measurement. Students will learn about:

1. ⚖️ Understanding units of weight (g, kg)
2. 📊 Comparing different weights
3. 📏 Measuring weight accurately
4. 🔄 Converting between weight units
5. 🎯 Practical applications of weight measurement

The chapter uses everyday objects and interactive activities to make weight concepts more tangible and easier to understand for young learners.`,
}; 