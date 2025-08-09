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

export const Chapter5Content: ChapterContent = {
    id: "cl5_ch5",
    chapterNumber: 5,
    chapterName: "Does it Look the Same?",
    topics: getAllTopics(),
    duration: 180, // 3 hours total for chapter
    contentCovered: [
        "Symmetry in shapes and letters 🔄",
        "Mirror images 🪞",
        "Rotational symmetry basics ⭕"
    ],
    description: "Introduction to symmetry and patterns in shapes and letters",
    explanation: `
# Does it Look the Same?

This chapter explores:
1. Understanding symmetry in various shapes and letters 🔄
2. Creating and analyzing mirror images 🪞
3. Learning about rotational symmetry and patterns ⭕

The chapter uses engaging activities and visual examples to help students develop an understanding of symmetry and patterns in the world around them.`,
}; 