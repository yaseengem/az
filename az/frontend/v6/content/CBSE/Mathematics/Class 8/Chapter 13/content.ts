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

export const Chapter13Content: ChapterContent = {
    id: "cl8_ch13",
    chapterNumber: 13,
    chapterName: "Introduction to Graphs 📈",
    topics: getAllTopics(),
    duration: 240, // 4 hours total for chapter
    contentCovered: [
        "Types of graphs",
        "Plotting points on Cartesian plane",
        "Reading and interpreting graphs"
    ],
    description: "Understanding different types of graphs, plotting points, and interpreting graphical data",
    explanation: `
# Introduction to Graphs 📈

This chapter introduces students to graphical representation of data. Students will learn:

1. Types of graphs:
   - Line graphs
   - Bar graphs
   - Pie charts
   - Histograms
   - Scatter plots
   - Time series graphs

2. Cartesian plane:
   - Coordinate system
   - Quadrants
   - Plotting points
   - Ordered pairs (x,y)
   - Finding coordinates

3. Graph interpretation:
   - Reading data points
   - Understanding trends
   - Making predictions
   - Real-world applications
   - Drawing conclusions

The chapter develops skills in data visualization and interpretation of graphical information.`,
};

export default Chapter13Content; 