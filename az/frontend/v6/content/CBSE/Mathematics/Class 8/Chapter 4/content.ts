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

export const Chapter4Content: ChapterContent = {
    id: "cl8_ch4",
    chapterNumber: 4,
    chapterName: "Data Handling 📊",
    topics: getAllTopics(),
    duration: 240, // 4 hours total for chapter
    contentCovered: [
        "Organizing data using tables",
        "Bar graphs, pie charts",
        "Basic probability concepts"
    ],
    description: "Introduction to data organization, visualization, and basic probability concepts",
    explanation: `
# Data Handling 📊

This chapter introduces students to the fundamentals of statistics and probability. Students will learn:

1. Organizing data using tables:
   - Frequency tables
   - Grouped data
   - Class intervals
   - Tally marks
   - Two-way tables

2. Data visualization:
   - Bar graphs
   - Double bar graphs
   - Pie charts
   - Histograms
   - Interpreting graphs
   - Choosing appropriate graphs

3. Basic probability concepts:
   - Events and outcomes
   - Equally likely events
   - Probability scale (0 to 1)
   - Simple probability calculations
   - Real-life applications

The chapter develops skills in data analysis, interpretation, and basic statistical thinking.`,
};

export default Chapter4Content; 