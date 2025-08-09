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

export const Chapter8Content: ChapterContent = {
    id: "cl3_ch8",
    chapterNumber: 8,
    chapterName: "Who is Heavier?",
    topics: getAllTopics(),
    duration: 180, // 3 hours total for chapter
    contentCovered: [
        "Understanding Weight ⚖️",
        "Comparing Objects by Weight 📦",
        "Non-Standard Units of Weight 🏋️",
        "Simple Weighing Activities 🎯",
        "Estimation of Weight 👀"
    ],
    description: "Learning about weight and measurement of mass",
    explanation: `
# Who is Heavier?

This chapter introduces young learners to the concept of weight and mass. Students will explore:
1. ⚖️ Understanding the concept of weight and heaviness
2. 📦 Comparing different objects based on their weight
3. 🏋️ Learning about non-standard units for measuring weight
4. 🎯 Engaging in hands-on weighing activities
5. 👀 Developing estimation skills for weight

The chapter helps build a foundation for understanding measurement through practical, real-world examples and activities.`
}; 