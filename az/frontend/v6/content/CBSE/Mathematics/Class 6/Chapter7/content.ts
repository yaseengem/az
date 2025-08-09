// Chapter 7: Fractions
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

export const Chapter7Content: ChapterContent = {
    id: "cl6_ch7",
    chapterNumber: 7,
    chapterName: "Fractions",
    topics: getAllTopics(),
    duration: 240, // 4 hours total for chapter
    contentCovered: [
        "Types of fractions (proper, improper, mixed)",
        "Equivalent fractions",
        "Addition and subtraction of fractions"
    ],
    description: "Understanding fractions and their operations",
    explanation: `
# Fractions

This chapter explores the concept of fractions and their operations. Students will learn about:
1. Types of fractions:
   - Proper fractions (e.g., ½, ⅓) 📊
   - Improper fractions (e.g., 5/2) 📈
   - Mixed numbers (e.g., 2½) 🔢
2. Equivalent fractions and simplification 🔄
3. Addition and subtraction of fractions ➕➖
4. Real-life applications of fractions 🍕

The chapter helps students develop a strong foundation in working with fractions and their applications in daily life.`
};
