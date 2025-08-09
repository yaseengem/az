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

export const Chapter13Content: ChapterContent = {
    id: "cl4_ch13",
    chapterNumber: 13,
    chapterName: "Fields and Fences",
    topics: getAllTopics(),
    duration: 180, // 3 hours total for chapter
    contentCovered: [
        "Understanding Perimeter",
        "Calculating Perimeter",
        "Understanding Area",
        "Basic Area Calculations",
        "Practical Applications"
    ],
    description: "Introduction to perimeter and area of simple shapes through the context of fields and fences",
    explanation: `
# Fields and Fences 📐

This chapter introduces students to the concepts of perimeter and area. Students will learn about:

1. 📏 Understanding perimeter and its calculation
2. 📐 Understanding area and its calculation
3. 🔢 Basic formulas for perimeter and area
4. 🎯 Practical applications in real life
5. 🧩 Problem solving with perimeter and area

The chapter uses real-world examples like fields and fences to make geometric concepts more relatable and easier to understand for young learners.`,
}; 