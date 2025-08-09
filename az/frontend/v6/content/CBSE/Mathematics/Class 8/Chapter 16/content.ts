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

export const Chapter16Content: ChapterContent = {
    id: "cl8_ch16",
    chapterNumber: 16,
    chapterName: "Number Games and Tricks 🎯",
    topics: getAllTopics(),
    duration: 240, // 4 hours total for chapter
    contentCovered: [
        "Mental math tricks",
        "Number sequences and patterns",
        "Fun with numbers"
    ],
    description: "Learning quick calculation methods and exploring interesting number patterns through games",
    explanation: `
# Number Games and Tricks 🎯

This chapter makes mathematics fun through games and tricks. Students will learn:

1. Mental math tricks:
   - Quick multiplication
   - Division shortcuts
   - Square number tricks
   - Percentage calculations
   - Calendar calculations

2. Number sequences and patterns:
   - Arithmetic sequences
   - Geometric sequences
   - Special number series
   - Pattern completion
   - Number pyramids

3. Fun with numbers:
   - Mathematical games
   - Number puzzles
   - Magic numbers
   - Digital roots
   - Number-based activities

The chapter makes learning mathematics enjoyable while developing quick calculation skills.`,
};

export default Chapter16Content; 