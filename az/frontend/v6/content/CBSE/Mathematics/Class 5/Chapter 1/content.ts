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

export const Chapter1Content: ChapterContent = {
    id: "cl5_ch1",
    chapterNumber: 1,
    chapterName: "The Fish Tale",
    topics: getAllTopics(),
    duration: 180, // 3 hours total for chapter
    contentCovered: [
        "Large numbers in real-life contexts (e.g., fish catch, boat capacity) 🐟",
        "Estimation and rounding 🔢",
        "Multiplication/division word problems ✖️➗"
    ],
    description: "Introduction to large numbers, estimation, and basic operations through real-life fish-related scenarios",
    explanation: `
# The Fish Tale

This chapter introduces students to:
1. Understanding large numbers through real-life examples like fish catch and boat capacity 🐟
2. Learning estimation and rounding techniques 🔢
3. Solving word problems involving multiplication and division ✖️➗

The chapter uses engaging fish-related scenarios to make learning mathematics fun and relatable. Students will develop their number sense and problem-solving skills through practical applications.`,
}; 