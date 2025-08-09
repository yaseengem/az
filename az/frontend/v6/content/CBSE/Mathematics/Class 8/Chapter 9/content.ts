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

export const Chapter9Content: ChapterContent = {
    id: "cl8_ch9",
    chapterNumber: 9,
    chapterName: "Mensuration 📏",
    topics: getAllTopics(),
    duration: 270, // 4.5 hours total for chapter
    contentCovered: [
        "Surface area and volume of cubes, cuboids, cylinders",
        "Area of trapezium and other polygons",
        "Practical measurement problems"
    ],
    description: "Understanding measurement concepts, surface area, volume, and their practical applications",
    explanation: `
# Mensuration 📏

This chapter explores measurement concepts and their applications. Students will learn:

1. Surface area calculations:
   - Surface area of cube
   - Surface area of cuboid
   - Surface area of cylinder
   - Lateral and total surface area
   - Net diagrams of 3D shapes

2. Area of plane figures:
   - Area of trapezium
   - Area of general quadrilaterals
   - Area of polygons
   - Converting between units
   - Real-life applications

3. Volume calculations:
   - Volume of cube
   - Volume of cuboid
   - Volume of cylinder
   - Capacity and volume relationship
   - Practical problems

The chapter develops spatial understanding and measurement skills for real-world applications.`,
};

export default Chapter9Content; 