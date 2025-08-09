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

export const Chapter5Content: ChapterContent = {
    id: "cl7_ch5",
    chapterNumber: 5,
    chapterName: "Lines and Angles",
    topics: getAllTopics(),
    duration: 135, // 3 topics x 45 min
    contentCovered: [
        "Types of angles: complementary, supplementary, adjacent",
        "Lines: intersecting, parallel, transversal",
        "Angle relationships: vertically opposite, linear pairs"
    ],
    description: "Explore different types of angles and lines, and understand their relationships. Learn to identify and solve problems involving angles and lines in geometry.",
    explanation: `
# Lines and Angles (Chapter 5) 📐\n\nThis chapter covers the basics of lines and angles, including types of angles, relationships between lines, and how angles interact when lines intersect.\n\nKey concepts include:\n- Types of angles (complementary, supplementary, adjacent)\n- Intersecting, parallel lines, and transversals\n- Angle relationships (vertically opposite, linear pairs)\n\nBy the end, you'll be able to solve geometric problems involving lines and angles with confidence!\n`,
}; 