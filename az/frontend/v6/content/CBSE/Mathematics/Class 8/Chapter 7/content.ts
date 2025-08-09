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

export const Chapter7Content: ChapterContent = {
    id: "cl8_ch7",
    chapterNumber: 7,
    chapterName: "Comparing Quantities 💰",
    topics: getAllTopics(),
    duration: 270, // 4.5 hours total for chapter
    contentCovered: [
        "Ratios and percentages",
        "Profit and loss, discount, sales tax",
        "Simple and compound interest"
    ],
    description: "Understanding commercial mathematics and financial calculations through ratios and percentages",
    explanation: `
# Comparing Quantities 💰

This chapter introduces students to commercial mathematics. Students will learn:

1. Ratios and percentages:
   - Converting fractions to percentages
   - Converting decimals to percentages
   - Finding percentage of a quantity
   - Increase and decrease in percentage
   - Applications in daily life

2. Commercial mathematics:
   - Profit and loss calculations
   - Finding selling price and cost price
   - Discount calculations
   - Sales tax and GST
   - Multiple successive discounts

3. Interest calculations:
   - Simple interest
   - Compound interest
   - Principal, rate, time relationships
   - Comparing SI and CI
   - Real-world financial applications

The chapter develops essential financial literacy and practical mathematical skills.`,
};

export default Chapter7Content; 