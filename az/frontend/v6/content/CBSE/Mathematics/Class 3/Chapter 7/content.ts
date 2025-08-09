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

export const Chapter7Content: ChapterContent = {
    id: "cl3_ch7",
    chapterNumber: 7,
    chapterName: "Time Goes On...",
    topics: getAllTopics(),
    duration: 180, // 3 hours total for chapter
    contentCovered: [
        "Understanding Time ⏰",
        "Reading Clocks and Watches 🕒",
        "Days, Weeks, and Months 📅",
        "Calendar Reading 📆",
        "Time-related Activities 🎯"
    ],
    description: "Learning about time, clocks, and calendars",
    explanation: `
# Time Goes On...

This chapter introduces young learners to the concept of time and its measurement. Students will explore:
1. ⏰ Understanding the concept of time and its importance
2. 🕒 Learning to read analog and digital clocks
3. 📅 Understanding days, weeks, and months
4. 📆 Reading and using calendars
5. 🎯 Engaging in time-related activities and games

The chapter helps build essential time management skills through practical examples and interactive learning.`
}; 