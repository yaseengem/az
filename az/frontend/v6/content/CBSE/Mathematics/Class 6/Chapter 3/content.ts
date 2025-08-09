// Chapter 3: Playing With Numbers
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

export const Chapter3Content: ChapterContent = {
    id: "cl6_ch3",
    chapterNumber: 3,
    chapterName: "Playing With Numbers",
    topics: getAllTopics(),
    duration: 240, // 4 hours total for chapter
    contentCovered: [
        "Factors, multiples, HCF, LCM",
        "Prime and composite numbers",
        "Divisibility rules (2, 3, 4, 5, 6, 9, 10)",
        "Prime factorization"
    ],
    description: "Exploring number properties, factors, multiples, and divisibility rules",
    explanation: `
# Playing With Numbers

This chapter dives into the fascinating world of number properties and relationships. Students will learn about:
1. Factors and multiples, HCF and LCM 🔢
2. Prime and composite numbers (e.g., 2, 3, 5, 7, 11, 13...) ✨
3. Divisibility rules for numbers 2-10 📐
4. Prime factorization and its applications 🧩

The chapter helps students develop number sense and problem-solving skills through various number properties and relationships.`
};
