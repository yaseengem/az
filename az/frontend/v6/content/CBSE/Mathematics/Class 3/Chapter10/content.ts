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

export const Chapter10Content: ChapterContent = {
    id: "cl3_ch10",
    chapterNumber: 10,
    chapterName: "Play with Patterns",
    topics: getAllTopics(),
    duration: 180, // 3 hours total for chapter
    contentCovered: [
        "Number Patterns 🔢",
        "Shape Patterns 🔺",
        "Color Patterns 🎨",
        "Growing Patterns 📈",
        "Pattern Recognition Games 🎯"
    ],
    description: "Exploring and creating various types of patterns",
    explanation: `
# Play with Patterns

This chapter introduces young learners to the fascinating world of patterns. Students will explore:
1. 🔢 Understanding and creating number patterns
2. 🔺 Recognizing and extending shape patterns
3. 🎨 Working with color patterns
4. 📈 Learning about growing patterns
5. 🎯 Engaging in pattern recognition games

The chapter combines mathematical thinking with creative expression, making learning both fun and educational.`
}; 