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

export const Chapter15Content: ChapterContent = {
    id: "cl7_ch15",
    chapterNumber: 15,
    chapterName: "Visualising Solid Shapes",
    topics: getAllTopics(),
    duration: 135, // 3 topics x 45 min
    contentCovered: [
        "3D shapes: faces, edges, vertices",
        "Nets of solids",
        "Views: top, front, side"
    ],
    description: "Explore three-dimensional shapes, their nets, and different views. Learn to visualize and analyze solid shapes in geometry.",
    explanation: `
# Visualising Solid Shapes (Chapter 15) 🧊\n\nThis chapter introduces 3D shapes, their properties, and how to visualize them using nets and different views.\n\nKey concepts include:\n- Faces, edges, and vertices of 3D shapes\n- Nets of solids\n- Top, front, and side views (🧊, 📦, 👀)\n\nBy the end, you'll be able to visualize and analyze solid shapes from different perspectives!\n`,
}; 