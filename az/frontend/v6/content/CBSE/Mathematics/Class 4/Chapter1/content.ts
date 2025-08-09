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

export const Chapter1Content: ChapterContent = {
    id: "cl4_ch1",
    chapterNumber: 1,
    chapterName: "Building with Bricks",
    topics: getAllTopics(),
    duration: 180, // 3 hours total for chapter
    contentCovered: [
        "Introduction to Basic Shapes and Patterns",
        "Understanding Symmetry in Bricks",
        "Spatial Visualization with Bricks",
        "Pattern Recognition and Creation",
        "Basic Geometric Concepts"
    ],
    description: "Introduction to basic shapes, patterns, and spatial visualization through the context of bricks",
    explanation: `
# Building with Bricks 🧱

This chapter introduces young learners to fundamental mathematical concepts through the familiar context of bricks. Students will explore:

1. 🔷 Basic shapes and their properties
2. 🎨 Patterns and symmetry in brick arrangements
3. 🏗️ Spatial visualization and orientation
4. 🔄 Pattern recognition and creation
5. 📐 Basic geometric concepts

The chapter uses real-world examples to make abstract concepts concrete and engaging for young learners.`,
}; 