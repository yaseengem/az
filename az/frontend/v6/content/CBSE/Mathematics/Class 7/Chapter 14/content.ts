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

export const Chapter14Content: ChapterContent = {
    id: "cl7_ch14",
    chapterNumber: 14,
    chapterName: "Symmetry",
    topics: getAllTopics(),
    duration: 90, // 2 topics x 45 min
    contentCovered: [
        "Line symmetry: identifying symmetrical figures",
        "Rotational symmetry: order of rotation"
    ],
    description: "Explore the concepts of line and rotational symmetry. Learn to identify symmetrical figures and understand the order of rotation in shapes.",
    explanation: `
# Symmetry (Chapter 14) 🔄\n\nThis chapter covers line and rotational symmetry, helping you identify symmetrical figures and understand their properties.\n\nKey concepts include:\n- Line symmetry (mirror symmetry)\n- Rotational symmetry and order of rotation (🔄, 🪞)\n\nBy the end, you'll be able to recognize and analyze symmetry in shapes and patterns!\n`,
}; 