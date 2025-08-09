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

export const Chapter4Content: ChapterContent = {
    id: "cl4_ch4",
    chapterNumber: 4,
    chapterName: "Tick-Tick-Tick",
    topics: getAllTopics(),
    duration: 180, // 3 hours total for chapter
    contentCovered: [
        "Introduction to Patterns",
        "Number Sequences",
        "Pattern Recognition",
        "Creating New Patterns",
        "Pattern Properties and Rules"
    ],
    description: "Understanding patterns and number sequences through engaging activities",
    explanation: `
# Tick-Tick-Tick 🔄

This chapter introduces students to the fascinating world of patterns and sequences. Students will explore:

1. 🔢 Understanding number patterns and sequences
2. 🎯 Recognizing patterns in numbers and shapes
3. 🎨 Creating new patterns using numbers and shapes
4. 📊 Identifying pattern rules and properties
5. 🧩 Solving pattern-based problems

The chapter uses interactive activities and visual representations to make pattern recognition fun and engaging for young learners.`,
}; 