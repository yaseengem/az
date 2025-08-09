// Chapter 14: Practical Geometry
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

export const Chapter14Content: ChapterContent = {
    id: "cl6_ch14",
    chapterNumber: 14,
    chapterName: "Practical Geometry",
    topics: getAllTopics(),
    duration: 180, // 3 hours total for chapter
    contentCovered: [
        "Construction of line segments and angles",
        "Drawing circles with a compass",
        "Perpendicular bisectors"
    ],
    description: "Learning geometric constructions using basic tools",
    explanation: `
# Practical Geometry

This chapter teaches students how to construct geometric figures using basic tools. Students will learn about:
1. Basic constructions:
   - Line segments 📏
   - Angles (acute, right, obtuse) 📐
2. Circle constructions:
   - Using compass ⭕
   - Drawing arcs 🔄
3. Special constructions:
   - Perpendicular bisectors 📐
   - Angle bisectors 📏
4. Practical applications:
   - Technical drawing 🖊️
   - Design work 🎨

The chapter helps students develop precision and accuracy in geometric constructions.`
};
