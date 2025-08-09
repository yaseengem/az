// Chapter 17: Appendix – Real-Life Applications
// This folder will contain topic subfolders and content files for each topic.

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
    id: "cl6_ch17",
    chapterNumber: 17,
    chapterName: "Appendix – Real-Life Applications",
    topics: getAllTopics(),
    duration: 120, // 2 hours total for chapter
    contentCovered: [
        "Budgeting and money calculations",
        "Measuring ingredients in recipes",
        "Time management (calendars, schedules)"
    ],
    description: "Applying mathematical concepts to real-life situations",
    explanation: `
# Real-Life Applications

This chapter focuses on applying mathematical concepts to everyday situations. Students will learn about:
1. Financial mathematics:
   - Budgeting 💰
   - Money calculations 💵
2. Cooking and measurements:
   - Recipe conversions 🍳
   - Ingredient measurements 📏
3. Time management:
   - Calendar calculations 📅
   - Schedule planning ⏰
4. Practical problem-solving:
   - Shopping calculations 🛒
   - Travel planning 🗺️

The chapter helps students see the practical value of mathematics in their daily lives.`
};
