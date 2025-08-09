// Chapter 10: Mensuration
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

export const Chapter10Content: ChapterContent = {
    id: "cl6_ch10",
    chapterNumber: 10,
    chapterName: "Mensuration",
    topics: getAllTopics(),
    duration: 180, // 3 hours total for chapter
    contentCovered: [
        "Perimeter of squares and rectangles",
        "Area of regular shapes",
        "Practical measurement problems"
    ],
    description: "Understanding measurement of shapes and practical applications",
    explanation: `
# Mensuration

This chapter introduces students to the measurement of shapes and their practical applications. Students will learn about:
1. Perimeter calculations:
   - Squares (4 × side) ⬜
   - Rectangles (2 × (length + breadth)) 📏
2. Area calculations:
   - Squares (side × side) ⬜
   - Rectangles (length × breadth) 📐
3. Practical measurement problems:
   - Flooring calculations 🏠
   - Fencing requirements 🏡
   - Land measurements 🌍

The chapter helps students develop skills in measuring and calculating dimensions of various shapes.`
};
