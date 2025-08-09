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

export const Chapter17Content: ChapterContent = {
    id: "cl8_ch17",
    chapterNumber: 17,
    chapterName: "Real-Life Applications 🌍",
    topics: getAllTopics(),
    duration: 240, // 4 hours total for chapter
    contentCovered: [
        "Financial calculations: budgeting, interest",
        "Measurement in daily life",
        "Time management and scheduling"
    ],
    description: "Applying mathematical concepts to real-world situations and everyday problem-solving",
    explanation: `
# Real-Life Applications 🌍

This chapter connects mathematics to everyday life. Students will learn:

1. Financial mathematics:
   - Personal budgeting
   - Savings calculations
   - Interest computations
   - Cost comparisons
   - Financial decision making

2. Practical measurements:
   - Home and construction
   - Cooking and recipes
   - Distance and travel
   - Area and volume
   - Unit conversions

3. Time management:
   - Schedule planning
   - Time zones
   - Duration calculations
   - Project timelines
   - Efficiency optimization

The chapter demonstrates the practical value of mathematics in daily life situations.`,
};

export default Chapter17Content; 