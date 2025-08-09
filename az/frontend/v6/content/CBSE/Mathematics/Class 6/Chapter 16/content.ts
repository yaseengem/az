// Chapter 16: Appendix – Fun with Numbers
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

export const Chapter16Content: ChapterContent = {
    id: "cl6_ch16",
    chapterNumber: 16,
    chapterName: "Appendix – Fun with Numbers",
    topics: getAllTopics(),
    duration: 120, // 2 hours total for chapter
    contentCovered: [
        "Number games (palindromic numbers)",
        "Cross-number puzzles",
        "Mental math tricks"
    ],
    description: "Exploring fun and interesting aspects of numbers",
    explanation: `
# Fun with Numbers

This chapter explores the fun and interesting aspects of numbers. Students will learn about:
1. Number games:
   - Palindromic numbers (e.g., 121, 1331) 🔄
   - Number patterns 🔢
2. Puzzles:
   - Cross-number puzzles 🧩
   - Number riddles 🤔
3. Mental math:
   - Quick calculations 🧠
   - Number tricks ✨
4. Interesting number facts:
   - Special numbers 🌟
   - Number properties 📊

The chapter makes mathematics engaging and helps students develop a love for numbers.`
};
