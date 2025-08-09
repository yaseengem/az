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

export const Chapter9Content: ChapterContent = {
    id: "cl5_ch9",
    chapterNumber: 9,
    chapterName: "Boxes and Sketches",
    topics: getAllTopics(),
    duration: 180, // 3 hours total for chapter
    contentCovered: [
        "3D shapes (cubes, cuboids) 📦",
        "Drawing nets of 3D shapes 📐",
        "Visualizing 3D objects from 2D sketches 🎨"
    ],
    description: "Understanding 3D shapes and their representations",
    explanation: `
# Boxes and Sketches

This chapter covers:
1. Exploring 3D shapes like cubes and cuboids 📦
2. Learning to draw and understand nets of 3D shapes 📐
3. Developing skills to visualize 3D objects from 2D sketches 🎨

The chapter helps students develop spatial visualization skills and understanding of 3D geometry through hands-on activities and drawing exercises.`,
}; 