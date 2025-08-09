// Chapter 15: Appendix – Mathematical Reasoning
// This folder will contain topic subfolders and content files for each topic.

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

export const Chapter15Content: ChapterContent = {
    id: "cl6_ch15",
    chapterNumber: 15,
    chapterName: "Appendix – Mathematical Reasoning",
    topics: getAllTopics(),
    duration: 120, // 2 hours total for chapter
    contentCovered: [
        "Logical puzzles (e.g., magic squares)",
        "Deductive reasoning exercises",
        "Real-life problem-solving scenarios"
    ],
    description: "Developing mathematical reasoning and problem-solving skills",
    explanation: `
# Mathematical Reasoning

This chapter focuses on developing logical thinking and problem-solving skills. Students will learn about:
1. Logical puzzles:
   - Magic squares 🧩
   - Number patterns 🔢
2. Deductive reasoning:
   - Following logical steps 📝
   - Drawing conclusions 🔍
3. Problem-solving:
   - Breaking down problems 🧩
   - Finding solutions 💡
4. Real-life applications:
   - Decision making 🤔
   - Critical thinking 🧠

The chapter helps students develop essential mathematical reasoning skills for everyday life.`
};
