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

export const Chapter6Content: ChapterContent = {
    id: "cl3_ch6",
    chapterNumber: 6,
    chapterName: "Fun with Give and Take",
    topics: getAllTopics(),
    duration: 240, // 4 hours total for chapter
    contentCovered: [
        "Introduction to Money 💰",
        "Understanding Currency Notes and Coins 💵",
        "Simple Transactions 🛍️",
        "Making Change and Calculations ➗",
        "Real-life Money Problems 📝"
    ],
    description: "Learning about money and basic financial transactions",
    explanation: `
# Fun with Give and Take

This chapter introduces young learners to the practical world of money and transactions. Students will explore:
1. 💰 Understanding the concept of money and its importance
2. 💵 Learning about different currency notes and coins
3. 🛍️ Practicing simple buying and selling scenarios
4. ➗ Making change and basic money calculations
5. 📝 Solving real-life money-related problems

The chapter helps build essential financial literacy skills through engaging activities and real-world examples.`
}; 