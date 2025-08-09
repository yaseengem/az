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
    id: "cl3_ch5",
    chapterNumber: 5,
    chapterName: "Shapes and Designs",
    topics: getAllTopics(),
    duration: 180, // 3 hours total for chapter
    contentCovered: [
        "Basic Geometric Shapes 🔺",
        "Pattern Recognition and Creation 🎨",
        "Symmetry in Shapes ✨",
        "Tessellation and Tiling 🧩",
        "Creative Design Activities 🎯"
    ],
    description: "Exploring geometric shapes and creating patterns",
    explanation: `
# Shapes and Designs

This chapter introduces young learners to the fascinating world of geometry and patterns. Students will explore:
1. 🔺 Identifying and understanding basic geometric shapes
2. 🎨 Recognizing and creating patterns
3. ✨ Understanding symmetry in shapes
4. 🧩 Learning about tessellation and tiling
5. 🎯 Engaging in creative design activities

The chapter combines mathematical concepts with artistic expression, making learning both fun and educational.`
}; 