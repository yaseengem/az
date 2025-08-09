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

export const Chapter6Content: ChapterContent = {
    id: "cl4_ch6",
    chapterNumber: 6,
    chapterName: "The Junk Seller",
    topics: getAllTopics(),
    duration: 180, // 3 hours total for chapter
    contentCovered: [
        "Basic buying and selling concepts",
        "Understanding money, earnings, and expenditure",
        "Simple transactions and loans"
    ],
    description: "Understanding buying, selling, and basic money concepts for Class 4 students",
    explanation: `
# The Junk Seller 💰

This chapter introduces students to the practical aspects of money and financial transactions. Students will learn about:

1. 💵 Basic buying and selling concepts
2. 💰 Understanding money, earnings, and expenditure
3. 🔄 Making change and calculating differences
4. 📊 Simple financial problem solving
5. 🎯 Practical applications of money in daily life

The chapter uses real-life scenarios to make financial concepts more relatable and easier to understand for young learners.`,
}; 