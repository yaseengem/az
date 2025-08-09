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

export const Chapter17Content: ChapterContent = {
    id: "cl5_ch17",
    chapterNumber: 17,
    chapterName: "Appendix – Practical Applications",
    topics: getAllTopics(),
    duration: 180, // 3 hours total for chapter
    contentCovered: [
        "Budgeting and money management 💰",
        "Measuring ingredients in recipes 🥄",
        "Time management (calendars, schedules) ⏰"
    ],
    description: "Applying mathematical concepts to real-life situations",
    explanation: `
# Appendix – Practical Applications

This chapter covers:
1. Learning budgeting and money management skills 💰
2. Applying measurement concepts in cooking and recipes 🥄
3. Understanding time management through calendars and schedules ⏰

The chapter helps students apply mathematical concepts to everyday situations, making learning relevant and practical.`,
}; 