// Chapter 11: Algebra
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

export const Chapter11Content: ChapterContent = {
    id: "cl6_ch11",
    chapterNumber: 11,
    chapterName: "Algebra",
    topics: getAllTopics(),
    duration: 180, // 3 hours total for chapter
    contentCovered: [
        "Introduction to variables",
        "Simple equations (e.g., x+3=8)",
        "Patterns in geometry and numbers"
    ],
    description: "Introduction to algebraic concepts and patterns",
    explanation: `
# Algebra

This chapter introduces students to basic algebraic concepts and patterns. Students will learn about:
1. Variables and expressions:
   - Using letters for unknown numbers (x, y) 🔤
   - Forming simple expressions ➕
2. Solving simple equations:
   - One-step equations (x + 3 = 8) 🔢
   - Finding unknown values 📊
3. Patterns in:
   - Numbers 🔢
   - Geometry 📐
   - Real-life situations 🌍

The chapter helps students develop algebraic thinking and problem-solving skills.`
};
