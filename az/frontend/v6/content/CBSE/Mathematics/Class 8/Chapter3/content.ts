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

export const Chapter3Content: ChapterContent = {
    id: "cl8_ch3",
    chapterNumber: 3,
    chapterName: "Understanding Quadrilaterals 📐",
    topics: getAllTopics(),
    duration: 270, // 4.5 hours total for chapter
    contentCovered: [
        "Types of quadrilaterals",
        "Properties of parallelograms, rectangles, rhombus, square",
        "Angle sum property of polygons"
    ],
    description: "Comprehensive study of quadrilaterals, their types, properties, and relationships with other polygons",
    explanation: `
# Understanding Quadrilaterals 📐

This chapter explores various types of quadrilaterals and their properties. Students will learn:

1. Types of quadrilaterals:
   - Square
   - Rectangle
   - Rhombus
   - Parallelogram
   - Trapezium
   - Kite
   - General quadrilateral

2. Properties of special quadrilaterals:
   - Parallel sides
   - Equal sides
   - Equal angles
   - Diagonal properties
   - Symmetry properties
   - Area and perimeter relationships

3. Angle sum property of polygons:
   - Interior angles of polygons
   - Exterior angles
   - Regular polygons
   - Relationship between sides and angles

The chapter strengthens geometric reasoning and spatial understanding through the study of 2D shapes.`,
};

export default Chapter3Content; 