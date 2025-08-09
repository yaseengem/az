// Chapter 1: Knowing Our Numbers
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

export const Chapter1Content: ChapterContent = {
    id: "cl6_ch1",
    chapterNumber: 1,
    chapterName: "Knowing Our Numbers",
    topics: getAllTopics(),
    duration: 240, // 4 hours total for chapter
    contentCovered: [
        "Comparing and ordering 4-digit numbers",
        "Estimation and rounding",
        "Roman numerals (up to 1,000)",
        "Large numbers in real-life contexts"
    ],
    description: "Understanding and working with large numbers, their comparison, and real-world applications",
    explanation: `
# Knowing Our Numbers

This chapter introduces students to the world of large numbers and their applications. Students will learn about:
1. Comparing and ordering 4-digit numbers 🔢
2. Estimation and rounding techniques 📊
3. Roman numerals up to 1,000 (e.g., I, V, X, L, C, D, M) 📜
4. Practical applications of large numbers in daily life 🌍

The chapter builds a strong foundation for understanding number systems and their real-world applications.`
};
