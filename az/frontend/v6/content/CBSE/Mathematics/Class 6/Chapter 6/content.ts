// Chapter 6: Integers
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

export const Chapter6Content: ChapterContent = {
    id: "cl6_ch6",
    chapterNumber: 6,
    chapterName: "Integers",
    topics: getAllTopics(),
    duration: 180, // 3 hours total for chapter
    contentCovered: [
        "Representation on a number line",
        "Addition and subtraction of integers",
        "Real-life applications (temperature, debt)"
    ],
    description: "Understanding integers and their operations",
    explanation: `
# Integers

This chapter introduces students to the world of integers and their applications. Students will learn about:
1. Integer representation on number line 📏
2. Addition and subtraction of integers (±) 🔢
3. Real-life applications:
   - Temperature variations 🌡️
   - Financial transactions (profit/loss) 💰
   - Elevation above/below sea level 🏔️

The chapter helps students understand negative numbers and their practical applications in daily life.`
};
