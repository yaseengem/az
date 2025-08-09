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
    id: "cl4_ch9",
    chapterNumber: 9,
    chapterName: "Halves and Quarters",
    topics: getAllTopics(),
    duration: 180, // 3 hours total for chapter
    contentCovered: [
        "Introduction to Fractions",
        "Understanding Halves",
        "Understanding Quarters",
        "Simple Fraction Operations",
        "Practical Applications of Fractions"
    ],
    description: "Introduction to basic fractions through the concept of halves and quarters",
    explanation: `
# Halves and Quarters 🍕

This chapter introduces students to the fundamental concepts of fractions. Students will learn about:

1. ½ Understanding halves and their representation
2. ¼ Understanding quarters and their representation
3. ➗ Basic fraction operations
4. 📊 Comparing simple fractions
5. 🎯 Practical applications of fractions in daily life

The chapter uses real-world examples and visual representations to make fraction concepts more tangible and easier to understand for young learners.`,
}; 