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

export const Chapter2Content: ChapterContent = {
    id: "cl5_ch2",
    chapterNumber: 2,
    chapterName: "Shapes and Angles",
    topics: getAllTopics(),
    duration: 180, // 3 hours total for chapter
    contentCovered: [
        "Identifying 2D shapes (triangles, quadrilaterals) 📐",
        "Measuring angles using protractors 📏",
        "Types of angles: acute, obtuse, right ⚡"
    ],
    description: "Introduction to basic geometric shapes and angle measurement",
    explanation: `
# Shapes and Angles

This chapter covers:
1. Understanding and identifying different 2D shapes like triangles and quadrilaterals 📐
2. Learning to measure angles using protractors 📏
3. Exploring different types of angles: acute, obtuse, and right angles ⚡

The chapter helps students develop spatial awareness and geometric understanding through hands-on activities and practical examples.`,
}; 