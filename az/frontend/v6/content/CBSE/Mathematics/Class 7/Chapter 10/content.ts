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

export const Chapter10Content: ChapterContent = {
    id: "cl7_ch10",
    chapterNumber: 10,
    chapterName: "Practical Geometry",
    topics: getAllTopics(),
    duration: 135, // 3 topics x 45 min
    contentCovered: [
        "Construction of triangles (given sides/angles)",
        "Construction of parallel lines",
        "Use of compass, protractor, and ruler"
    ],
    description: "Learn practical skills for geometric constructions using compass, protractor, and ruler. Construct triangles and parallel lines accurately.",
    explanation: `
# Practical Geometry (Chapter 10) ✏️📏\n\nThis chapter focuses on geometric constructions, including triangles and parallel lines, using compass, protractor, and ruler.\n\nKey concepts include:\n- Construction of triangles (given sides/angles)\n- Construction of parallel lines\n- Using geometric tools (✏️, 📏, 🧭)\n\nBy the end, you'll be able to perform accurate geometric constructions for various shapes and lines!\n`,
}; 