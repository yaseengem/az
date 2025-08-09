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

export const Chapter8Content: ChapterContent = {
    id: "cl4_ch8",
    chapterNumber: 8,
    chapterName: "Carts and Wheels",
    topics: getAllTopics(),
    duration: 180, // 3 hours total for chapter
    contentCovered: [
        "Understanding 3D Shapes",
        "Properties of Solids",
        "Introduction to Circles",
        "Understanding Wheels and Axles",
        "Practical Applications of 3D Shapes"
    ],
    description: "Introduction to 3D shapes and understanding circles through the context of carts and wheels",
    explanation: `
# Carts and Wheels 🎡

This chapter introduces students to three-dimensional shapes and the concept of circles. Students will learn about:

1. 🔵 Understanding circles and their properties
2. 🎯 Exploring 3D shapes in everyday objects
3. 🚗 Understanding wheels and their importance
4. 📐 Basic geometric properties of solids
5. 🎨 Practical applications of 3D shapes

The chapter uses familiar objects like carts and wheels to make geometric concepts more engaging and easier to understand for young learners.`,
}; 