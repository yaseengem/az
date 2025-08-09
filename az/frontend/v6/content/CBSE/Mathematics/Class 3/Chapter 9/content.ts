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
    id: "cl3_ch9",
    chapterNumber: 9,
    chapterName: "How Many Times?",
    topics: getAllTopics(),
    duration: 240, // 4 hours total for chapter
    contentCovered: [
        "Introduction to Multiplication ✖️",
        "Repeated Addition 🔄",
        "Counting in Groups 📊",
        "Multiplication Tables 📋",
        "Simple Word Problems 📝"
    ],
    description: "Learning basic multiplication concepts and operations",
    explanation: `
# How Many Times?

This chapter introduces young learners to the fundamental concept of multiplication. Students will explore:
1. ✖️ Understanding multiplication as repeated addition
2. 🔄 Learning to count in groups
3. 📊 Building multiplication tables
4. 📋 Memorizing basic multiplication facts
5. 📝 Solving simple multiplication word problems

The chapter helps build a strong foundation for understanding multiplication through visual aids and practical examples.`
}; 