// Chapter 5: Understanding Elementary Shapes
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

export const Chapter5Content: ChapterContent = {
    id: "cl6_ch5",
    chapterNumber: 5,
    chapterName: "Understanding Elementary Shapes",
    topics: getAllTopics(),
    duration: 240, // 4 hours total for chapter
    contentCovered: [
        "Triangles and quadrilaterals",
        "3D shapes (cubes, cuboids, spheres)",
        "Measuring angles with a protractor"
    ],
    description: "Exploring 2D and 3D shapes and their properties",
    explanation: `
# Understanding Elementary Shapes

This chapter explores the properties and characteristics of various geometric shapes. Students will learn about:
1. Triangles and quadrilaterals (△, □) 📐
2. 3D shapes: cubes (⬜), cuboids (📦), and spheres (⚪) 
3. Angle measurement using protractors 📏
4. Properties and classification of different shapes 🧩

The chapter helps students develop spatial reasoning and understanding of geometric shapes in both 2D and 3D.`
};
