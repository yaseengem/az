// Chapter 13: Symmetry
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

export const Chapter13Content: ChapterContent = {
    id: "cl6_ch13",
    chapterNumber: 13,
    chapterName: "Symmetry",
    topics: getAllTopics(),
    duration: 180, // 3 hours total for chapter
    contentCovered: [
        "Line symmetry in shapes",
        "Mirror reflection",
        "Symmetrical letters and figures"
    ],
    description: "Understanding symmetry and its applications",
    explanation: `
# Symmetry

This chapter introduces students to the concept of symmetry and its applications. Students will learn about:
1. Line symmetry:
   - Identifying lines of symmetry 📏
   - Creating symmetrical shapes 📐
2. Mirror reflection:
   - Understanding reflection symmetry 🔄
   - Drawing mirror images 🖼️
3. Symmetrical patterns:
   - Letters and numbers 🔤
   - Geometric figures 📐
   - Natural objects 🌿

The chapter helps students develop spatial awareness and appreciation for symmetry in the world around them.`
};
