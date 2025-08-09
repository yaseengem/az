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

export const Chapter3Content: ChapterContent = {
    id: "cl3_ch3",
    chapterNumber: 3,
    chapterName: "Give and Take",
    topics: getAllTopics(),
    duration: 240, // 4 hours total for chapter
    contentCovered: [
        "Basic Addition Concepts ➕",
        "Understanding Subtraction ➖",
        "Word Problems with Give and Take 📝",
        "Mental Math Strategies 🧠",
        "Number Bonds and Relationships 🔗"
    ],
    description: "Learning basic addition and subtraction through real-life scenarios",
    explanation: `
# Give and Take

This chapter introduces young learners to the fundamental concepts of addition and subtraction through engaging scenarios. Students will explore:
1. ➕ Understanding addition as combining quantities
2. ➖ Learning subtraction as taking away or comparing
3. 📝 Solving simple word problems involving giving and taking
4. 🧠 Developing mental math strategies
5. 🔗 Understanding number relationships and bonds

The chapter uses real-life situations to make mathematical operations meaningful and relatable for young learners.`
}; 