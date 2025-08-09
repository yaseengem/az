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

export const Chapter7Content: ChapterContent = {
    id: "cl9_ch7",
    chapterNumber: 7,
    chapterName: "Triangles",
    topics: getAllTopics(),
    duration: 300, // 5 hours total for chapter
    contentCovered: [
        "Introduction to Triangles",
        "Congruence of Triangles",
        "Criteria for Congruence of Triangles",
        "Some Properties of a Triangle",
        "Some More Criteria for Congruence",
        "Applications of Triangle Congruence"
    ],
    description: "Study of triangles, their congruence criteria, and properties essential for geometric proofs and constructions",
    explanation: `
# Triangles

This chapter covers the fundamental concepts of triangles and their congruence. Students will learn about:
1. Introduction to triangles and their basic properties
2. The concept of congruence in triangles
3. Different criteria for determining if two triangles are congruent
4. Special properties of triangles and their applications
5. Additional congruence criteria for specific triangle types
6. Practical applications of triangle congruence in real-world scenarios

The chapter builds foundation for more advanced geometric concepts and proof techniques.`,
}; 