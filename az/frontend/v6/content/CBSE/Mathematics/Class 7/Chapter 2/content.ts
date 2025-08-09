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

export const Chapter2Content: ChapterContent = {
    id: "cl7_ch2",
    chapterNumber: 2,
    chapterName: "Fractions and Decimals",
    topics: getAllTopics(),
    duration: 135, // 3 topics x 45 min
    contentCovered: [
        "Multiplication and division of fractions and decimals",
        "Properties and operations",
        "Word problems and practical applications"
    ],
    description: "Mastering multiplication, division, and properties of fractions and decimals. Apply concepts to real-life word problems and practical scenarios.",
    explanation: `
# Fractions and Decimals (Chapter 2) ➗\n\nThis chapter explores multiplication and division of fractions and decimals, their properties, and practical applications. You'll learn to solve real-world problems involving money, measurement, and more.\n\nKey concepts include:\n- Multiplying and dividing fractions and decimals\n- Properties of operations\n- Word problems and practical uses (💸, 📏, 🍰)\n\nBy the end, you'll confidently handle calculations with fractions and decimals in daily life!\n`,
}; 