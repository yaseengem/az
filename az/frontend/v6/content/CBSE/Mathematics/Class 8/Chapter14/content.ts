import { ChapterContent, TopicContent } from '../../../../types';

// Use webpack/metro context to get all topic content files dynamically
const topicContexts = require.context('./', true, /Topic\d+\/content\.ts$/);

// Function to dynamically get all available topics
const getAllTopics = (): TopicContent[] => {
    const topics: TopicContent[] = [];

    topicContexts.keys().forEach((key: string) => {
        const topicModule = topicContexts(key);
        const topicNumberMatch = key.match(/Topic(\d+)/);
        if (topicNumberMatch && topicNumberMatch[1]) {
            const topicNumber = parseInt(topicNumberMatch[1], 10);
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

    return topics.sort((a, b) => a.topicNumber - b.topicNumber);
};

export const Chapter14Content: ChapterContent = {
    id: "cl8_ch14",
    chapterNumber: 14,
    chapterName: "Playing with Numbers 🎲",
    topics: getAllTopics(),
    duration: 240, // 4 hours total for chapter
    contentCovered: [
        "Number puzzles and patterns",
        "Divisibility tests",
        "Properties of numbers"
    ],
    description: "Exploring number patterns, divisibility rules, and special properties of numbers",
    explanation: `
# Playing with Numbers 🎲

This chapter explores interesting patterns and properties of numbers. Students will learn:

1. Number puzzles and patterns:
   - Number sequences
   - Magic squares
   - Number triangles
   - Pascal's triangle
   - Fibonacci sequence

2. Divisibility tests:
   - Tests for 2, 3, 4, 5, 6, 8, 9, 10, 11
   - Multiple divisibility
   - Finding factors
   - Common factors
   - Applications

3. Properties of numbers:
   - Even and odd numbers
   - Prime and composite numbers
   - Perfect numbers
   - Friendly numbers
   - Special number patterns

The chapter develops mathematical reasoning and pattern recognition skills through number exploration.`,
};

export default Chapter14Content; 