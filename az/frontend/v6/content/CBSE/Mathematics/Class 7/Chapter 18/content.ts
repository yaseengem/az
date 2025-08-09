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

export const Chapter18Content: ChapterContent = {
    id: "cl7_ch18",
    chapterNumber: 18,
    chapterName: "Appendix – Real-Life Applications",
    topics: getAllTopics(),
    duration: 135, // 3 topics x 45 min
    contentCovered: [
        "Financial calculations: budgeting, interest",
        "Measurement in daily life",
        "Time management and scheduling"
    ],
    description: "Apply mathematics to real-life situations: budgeting, measurement, and time management. Develop practical skills for everyday life.",
    explanation: `
# Real-Life Applications (Chapter 18) 🌍\n\nThis chapter connects mathematics to real-life scenarios, including financial calculations, measurement, and time management.\n\nKey concepts include:\n- Budgeting and interest (💸, 🏦)\n- Measurement in daily life (📏, 🏠)\n- Time management and scheduling (⏰, 📅)\n\nBy the end, you'll be able to use mathematics to solve practical problems in your daily life!\n`,
}; 