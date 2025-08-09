// Chapter 9: Data Handling
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

export const Chapter9Content: ChapterContent = {
    id: "cl6_ch9",
    chapterNumber: 9,
    chapterName: "Data Handling",
    topics: getAllTopics(),
    duration: 180, // 3 hours total for chapter
    contentCovered: [
        "Pictographs and bar graphs",
        "Mean, median, mode (basic concepts)",
        "Interpretation of charts"
    ],
    description: "Introduction to data representation and analysis",
    explanation: `
# Data Handling

This chapter introduces students to basic data handling and representation. Students will learn about:
1. Data representation:
   - Pictographs 📊
   - Bar graphs 📈
2. Basic statistical concepts:
   - Mean (average) 📊
   - Median (middle value) 📏
   - Mode (most frequent) 🔢
3. Interpretation of charts and graphs 📊
4. Real-life applications of data handling:
   - Weather data 🌤️
   - Survey results 📋
   - Sports statistics 🏆

The chapter helps students develop skills in organizing, representing, and interpreting data.`
};
