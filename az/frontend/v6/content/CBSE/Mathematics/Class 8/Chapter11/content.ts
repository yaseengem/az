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

export const Chapter11Content: ChapterContent = {
    id: "cl8_ch11",
    chapterNumber: 11,
    chapterName: "Direct and Inverse Proportions ⚖️",
    topics: getAllTopics(),
    duration: 240, // 4 hours total for chapter
    contentCovered: [
        "Understanding direct proportion",
        "Understanding inverse proportion",
        "Solving related problems"
    ],
    description: "Understanding relationships between quantities through direct and inverse proportions",
    explanation: `
# Direct and Inverse Proportions ⚖️

This chapter explores proportional relationships between quantities. Students will learn:

1. Direct proportion:
   - Understanding direct relationships
   - Identifying direct proportion
   - Constant of proportionality
   - Graphical representation
   - Real-life examples

2. Inverse proportion:
   - Understanding inverse relationships
   - Identifying inverse proportion
   - Product remains constant
   - Graphical representation
   - Applications

3. Problem solving:
   - Time and work problems
   - Speed, distance, time
   - Cost and quantity
   - Mixture problems
   - Real-world applications

The chapter develops logical thinking and problem-solving skills through proportional reasoning.`,
};

export default Chapter11Content; 