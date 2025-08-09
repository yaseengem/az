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
    id: "cl3_ch12",
    chapterNumber: 12,
    chapterName: "Can We Share?",
    topics: getAllTopics(),
    duration: 180, // 3 hours total for chapter
    contentCovered: [
        "Introduction to Division ➗",
        "Equal Sharing and Grouping 👥",
        "Division as Repeated Subtraction 🔄",
        "Simple Division Problems 📝",
        "Sharing Activities 🎯"
    ],
    description: "Learning basic division concepts through sharing and grouping",
    explanation: `
# Can We Share?

This chapter introduces young learners to the fundamental concept of division. Students will explore:
1. ➗ Understanding division as equal sharing
2. 👥 Learning to divide objects into equal groups
3. 🔄 Understanding division as repeated subtraction
4. 📝 Solving simple division problems
5. 🎯 Engaging in sharing activities

The chapter helps build a foundation for understanding division through practical, real-world examples and activities.`
}; 