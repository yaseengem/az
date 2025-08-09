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

export const Chapter15Content: ChapterContent = {
    id: "cl8_ch15",
    chapterNumber: 15,
    chapterName: "Logical Reasoning and Puzzles 🧩",
    topics: getAllTopics(),
    duration: 240, // 4 hours total for chapter
    contentCovered: [
        "Logical puzzles and brain teasers",
        "Pattern recognition exercises",
        "Deductive reasoning"
    ],
    description: "Developing logical thinking and problem-solving skills through puzzles and reasoning exercises",
    explanation: `
# Logical Reasoning and Puzzles 🧩

This chapter develops critical thinking and problem-solving skills. Students will learn:

1. Logical puzzles and brain teasers:
   - Sudoku puzzles
   - Logic grid puzzles
   - Word problems
   - Mathematical riddles
   - Sequence puzzles

2. Pattern recognition:
   - Number patterns
   - Shape patterns
   - Color patterns
   - Letter patterns
   - Mixed sequences

3. Deductive reasoning:
   - If-then statements
   - Syllogisms
   - Analogies
   - Contradictions
   - Drawing conclusions

The chapter enhances analytical thinking and mathematical reasoning abilities through engaging puzzles.`,
};

export default Chapter15Content; 