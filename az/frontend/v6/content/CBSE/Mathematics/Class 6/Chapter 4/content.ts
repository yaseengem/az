// Chapter 4: Basic Geometrical Ideas
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

export const Chapter4Content: ChapterContent = {
    id: "cl6_ch4",
    chapterNumber: 4,
    chapterName: "Basic Geometrical Ideas",
    topics: getAllTopics(),
    duration: 180, // 3 hours total for chapter
    contentCovered: [
        "Points, lines, rays, and segments",
        "Types of angles (acute, obtuse, right)",
        "Circles and polygons"
    ],
    description: "Introduction to basic geometric concepts and shapes",
    explanation: `
# Basic Geometrical Ideas

This chapter introduces students to fundamental geometric concepts. Students will learn about:
1. Basic elements: points, lines, rays, and line segments 📏
2. Types of angles: acute (∠), right (∟), and obtuse angles 📐
3. Circles and their properties (radius, diameter, circumference) ⭕
4. Polygons and their characteristics 📐

The chapter builds a foundation for understanding geometric concepts and their applications in real-world scenarios.`
};
