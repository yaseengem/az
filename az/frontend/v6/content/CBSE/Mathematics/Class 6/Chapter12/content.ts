// Chapter 12: Ratio and Proportion
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

export const Chapter12Content: ChapterContent = {
    id: "cl6_ch12",
    chapterNumber: 12,
    chapterName: "Ratio and Proportion",
    topics: getAllTopics(),
    duration: 180, // 3 hours total for chapter
    contentCovered: [
        "Simplifying ratios",
        "Unitary method",
        "Applications in maps and scales"
    ],
    description: "Understanding ratios, proportions, and their applications",
    explanation: `
# Ratio and Proportion

This chapter introduces students to ratios, proportions, and their practical applications. Students will learn about:
1. Ratio concepts:
   - Simplifying ratios (e.g., 2:4 = 1:2) 🔢
   - Comparing quantities 📊
2. Unitary method:
   - Finding unit value 📏
   - Solving problems 🔍
3. Applications in:
   - Maps and scales 🗺️
   - Recipes and mixtures 🍳
   - Real-life comparisons 📊

The chapter helps students understand proportional relationships and their use in various contexts.`
};
