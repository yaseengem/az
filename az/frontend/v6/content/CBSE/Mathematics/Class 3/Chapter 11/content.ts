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

export const Chapter11Content: ChapterContent = {
    id: "cl3_ch11",
    chapterNumber: 11,
    chapterName: "Jugs and Mugs",
    topics: getAllTopics(),
    duration: 180, // 3 hours total for chapter
    contentCovered: [
        "Understanding Capacity 🥛",
        "Comparing Liquid Volumes 💧",
        "Non-Standard Units of Volume 🏺",
        "Simple Measurement Activities 🎯",
        "Estimation of Volume 👀"
    ],
    description: "Learning about capacity and volume measurement",
    explanation: `
# Jugs and Mugs

This chapter introduces young learners to the concept of capacity and volume. Students will explore:
1. 🥛 Understanding the concept of capacity and volume
2. 💧 Comparing different containers based on their capacity
3. 🏺 Learning about non-standard units for measuring liquids
4. 🎯 Engaging in hands-on measurement activities
5. 👀 Developing estimation skills for volume

The chapter helps build a foundation for understanding measurement through practical, real-world examples and activities.`
}; 