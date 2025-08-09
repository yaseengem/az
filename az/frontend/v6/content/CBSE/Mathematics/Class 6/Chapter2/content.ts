// Chapter 2: Whole Numbers
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

export const Chapter2Content: ChapterContent = {
    id: "cl6_ch2",
    chapterNumber: 2,
    chapterName: "Whole Numbers",
    topics: getAllTopics(),
    duration: 180, // 3 hours total for chapter
    contentCovered: [
        "Properties of whole numbers",
        "Number line representation",
        "Successor, predecessor, and patterns"
    ],
    description: "Understanding the properties and patterns of whole numbers",
    explanation: `
# Whole Numbers

This chapter explores the fundamental properties and patterns of whole numbers. Students will learn about:
1. Properties of whole numbers (closure, commutative, associative) 🔢
2. Number line representation and operations 📏
3. Successor and predecessor concepts 🔄
4. Patterns in whole numbers and their applications 🧩

The chapter helps students develop a deeper understanding of number systems and their properties.`
};
