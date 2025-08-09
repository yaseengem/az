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

export const Chapter13Content: ChapterContent = {
    id: "cl7_ch13",
    chapterNumber: 13,
    chapterName: "Exponents and Powers",
    topics: getAllTopics(),
    duration: 135, // 3 topics x 45 min
    contentCovered: [
        "Laws of exponents: product, quotient, power of a power",
        "Scientific notation",
        "Expressing large and small numbers"
    ],
    description: "Master the laws of exponents and powers, use scientific notation, and learn to express large and small numbers efficiently.",
    explanation: `
# Exponents and Powers (Chapter 13) 10ⁿ\n\nThis chapter covers the laws of exponents, scientific notation, and expressing large and small numbers. You'll learn to simplify expressions and solve problems using exponents.\n\nKey concepts include:\n- Laws of exponents (product, quotient, power of a power)\n- Scientific notation (🔬, 10ⁿ)\n- Expressing large and small numbers\n\nBy the end, you'll be able to use exponents and scientific notation to solve mathematical and real-world problems!\n`,
};
