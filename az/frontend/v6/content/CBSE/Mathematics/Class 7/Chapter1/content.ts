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

        // Extract the topic number from the path (e.g., "./Topic2/content.ts" -> "2")
        const topicNumberMatch = key.match(/Topic(\d+)/);
        if (topicNumberMatch && topicNumberMatch[1]) {
            const topicNumber = parseInt(topicNumberMatch[1], 10);

            // Find the topic content in the module exports
            // It could be either the default export or a named export like "Topic2Content"
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

export const Chapter1Content: ChapterContent = {
    id: "cl7_ch1",
    chapterNumber: 1,
    chapterName: "Integers",
    topics: getAllTopics(),
    duration: 135, // 3 topics x 45 min
    contentCovered: [
        "Operations: Addition, subtraction, multiplication, division",
        "Properties: Closure, commutative, associative, distributive",
        "Applications: Real-life problems involving integers"
    ],
    description: "Mastering operations, properties, and real-life applications of integers for Class 7 students. Includes use of number line, rules for signs, and practical problem-solving skills.",
    explanation: `
# Integers (Chapter 1) 🔢\n\nThis chapter introduces you to the world of integers—positive and negative whole numbers, including zero. You'll learn how to perform operations (addition, subtraction, multiplication, division), understand their properties (closure, commutative, associative, distributive), and apply these concepts to real-life problems such as temperature changes, banking, and elevations.\n\nKey concepts include:\n- Number line representation\n- Rules for operations with positive and negative numbers\n- Properties of integer operations\n- Real-world applications (🌡️, 💰, 🏔️, ⏰)\n\nBy the end of this chapter, you'll be able to solve problems involving integers confidently and understand their importance in daily life!\n`,
}; 