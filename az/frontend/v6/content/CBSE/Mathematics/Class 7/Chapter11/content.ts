import { QuizQuestion, ChapterContent, TopicContent } from '../../../../types';

const topicContexts = require.context('./', true, /Topic\d+\/content\.ts$/);

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
    id: "cl7_ch11",
    chapterNumber: 11,
    chapterName: "Perimeter and Area",
    topics: getAllTopics(),
    duration: 135, // 3 topics x 45 min
    contentCovered: [
        "Perimeter and area of squares, rectangles, parallelograms, triangles, circles",
        "Formulas and applications",
        "Real-life measurement problems"
    ],
    description: "Learn to calculate perimeter and area of various shapes using formulas. Apply these concepts to real-life measurement and problem-solving.",
    explanation: `
# Perimeter and Area (Chapter 11) 📏📐\n\nThis chapter covers the calculation of perimeter and area for different shapes, including squares, rectangles, triangles, parallelograms, and circles.\n\nKey concepts include:\n- Perimeter and area formulas\n- Applications in real-life measurement problems (🏠, 🏞️, 🏟️)\n\nBy the end, you'll be able to solve practical problems involving measurement of shapes and spaces!\n`,
}; 