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
    id: "cl4_ch5",
    chapterNumber: 5,
    chapterName: "The Way The World Looks",
    topics: getAllTopics(),
    duration: 180, // 3 hours total for chapter
    contentCovered: [
        "Introduction to Basic Geometry",
        "Identifying 2D and 3D Shapes",
        "Properties of Shapes",
        "Spatial Understanding",
        "Visualizing Objects from Different Views"
    ],
    description: "Introduction to basic geometry and understanding shapes from different perspectives",
    explanation: `
# The Way The World Looks 🔷

This chapter introduces students to the fundamental concepts of geometry and spatial visualization. Students will learn about:

1. 🔺 Basic geometric shapes and their properties
2. 📐 Understanding 2D and 3D shapes
3. 🎯 Identifying shapes in the environment
4. 👀 Visualizing objects from different angles
5. 🧩 Spatial reasoning and problem solving

The chapter uses real-world examples and interactive activities to help students develop their spatial awareness and geometric understanding.`,
}; 