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
    id: "cl5_ch6",
    chapterNumber: 6,
    chapterName: "Be My Multiple, I'll Be Your Factor",
    topics: getAllTopics(),
    duration: 180, // 3 hours total for chapter
    contentCovered: [
        "Multiples and factors 🔢",
        "Divisibility rules (2, 3, 5, 10) ✅",
        "Prime and composite numbers 🔍"
    ],
    description: "Understanding number relationships through multiples, factors, and divisibility rules",
    explanation: `
# Be My Multiple, I'll Be Your Factor

This chapter covers:
1. Understanding multiples and factors of numbers 🔢
2. Learning divisibility rules for 2, 3, 5, and 10 ✅
3. Identifying prime and composite numbers 🔍

The chapter helps students develop number sense and understand relationships between numbers through engaging activities and examples.`,
}; 