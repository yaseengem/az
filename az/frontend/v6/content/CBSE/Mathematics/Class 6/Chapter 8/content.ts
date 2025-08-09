// Chapter 8: Decimals
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

export const Chapter8Content: ChapterContent = {
    id: "cl6_ch8",
    chapterNumber: 8,
    chapterName: "Decimals",
    topics: getAllTopics(),
    duration: 180, // 3 hours total for chapter
    contentCovered: [
        "Place value (tenths, hundredths)",
        "Addition and subtraction of decimals",
        "Conversion between fractions and decimals"
    ],
    description: "Understanding decimal numbers and their operations",
    explanation: `
# Decimals

This chapter introduces students to decimal numbers and their operations. Students will learn about:
1. Decimal place value system:
   - Tenths (0.1) 🔢
   - Hundredths (0.01) 📊
2. Addition and subtraction of decimals ➕➖
3. Conversion between fractions and decimals 🔄
4. Real-life applications of decimals:
   - Money 💰
   - Measurements 📏
   - Scientific data 📊

The chapter helps students understand decimal numbers and their practical applications in various contexts.`
};
