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
    id: "cl4_ch3",
    chapterNumber: 3,
    chapterName: "A Trip to Bhopal",
    topics: getAllTopics(),
    duration: 180, // 3 hours total for chapter
    contentCovered: [
        "Understanding Time Concepts",
        "Reading Analog and Digital Clocks",
        "Calendar Reading and Usage",
        "Days, Weeks, and Months",
        "Time-based Problem Solving"
    ],
    description: "Learning about time, calendars, and clocks through the context of a trip to Bhopal",
    explanation: `
# A Trip to Bhopal ⏰

This chapter introduces students to the concept of time through an engaging story about a trip to Bhopal. Students will learn about:

1. 🕒 Reading and understanding clocks (analog and digital)
2. 📅 Calendar concepts and usage
3. 📆 Understanding days, weeks, and months
4. ⏱️ Time-based calculations and problem solving
5. 🎯 Practical applications of time in daily life

The chapter uses real-life scenarios to make time concepts more relatable and easier to understand for young learners.`,
}; 