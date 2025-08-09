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

export const Chapter6Content: ChapterContent = {
    id: "cl7_ch6",
    chapterNumber: 6,
    chapterName: "The Triangle and Its Properties",
    topics: getAllTopics(),
    duration: 180, // 4 topics x 45 min (if 4 topics, else 3 x 45 min)
    contentCovered: [
        "Types of triangles: scalene, isosceles, equilateral",
        "Properties: angle sum, exterior angles",
        "Pythagoras theorem: verification and applications"
    ],
    description: "Explore different types of triangles, their properties, and the Pythagoras theorem. Learn to solve geometric problems involving triangles.",
    explanation: `
# The Triangle and Its Properties (Chapter 6) 🔺\n\nThis chapter covers the classification of triangles, their properties, and the famous Pythagoras theorem. You'll learn to identify triangles, use their properties, and apply the Pythagoras theorem in real-life situations.\n\nKey concepts include:\n- Types of triangles (scalene, isosceles, equilateral)\n- Angle sum and exterior angle properties\n- Pythagoras theorem (🧮, 📏, 🏗️)\n\nBy the end, you'll be able to solve problems involving triangles and use the Pythagoras theorem with confidence!\n`,
}; 