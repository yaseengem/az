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

export const Chapter4Content: ChapterContent = {
    id: "cl7_ch4",
    chapterNumber: 4,
    chapterName: "Simple Equations",
    topics: getAllTopics(),
    duration: 135, // 3 topics x 45 min
    contentCovered: [
        "Forming equations from real-life scenarios",
        "Solving linear equations using transposition",
        "Applications in problem-solving"
    ],
    description: "Learn to form and solve simple linear equations from real-life situations. Develop algebraic thinking and problem-solving skills.",
    explanation: `
# Simple Equations (Chapter 4) 🧮\n\nThis chapter introduces you to forming and solving simple linear equations. You'll learn to translate real-life problems into equations and solve them using transposition.\n\nKey concepts include:\n- Forming equations from word problems\n- Solving linear equations\n- Real-life applications (🛒, 📦, 💡)\n\nBy the end, you'll be able to use algebra to solve everyday problems!\n`,
}; 