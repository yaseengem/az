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

export const Chapter12Content: ChapterContent = {
    id: "cl7_ch12",
    chapterNumber: 12,
    chapterName: "Algebraic Expressions",
    topics: getAllTopics(),
    duration: 135, // 3 topics x 45 min
    contentCovered: [
        "Terms, coefficients, variables",
        "Addition and subtraction of expressions",
        "Framing expressions from word problems"
    ],
    description: "Understand algebraic expressions, their terms, coefficients, and variables. Learn to add, subtract, and frame expressions from real-life problems.",
    explanation: `
# Algebraic Expressions (Chapter 12) 🧩\n\nThis chapter introduces algebraic expressions, their structure, and operations. You'll learn to add and subtract expressions and create them from word problems.\n\nKey concepts include:\n- Terms, coefficients, and variables\n- Addition and subtraction of expressions\n- Framing expressions from real-life problems (📝, 🧮)\n\nBy the end, you'll be able to work with algebraic expressions and use them to solve problems!\n`,
}; 