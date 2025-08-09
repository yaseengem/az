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

export const Chapter8Content: ChapterContent = {
    id: "cl7_ch8",
    chapterNumber: 8,
    chapterName: "Comparing Quantities",
    topics: getAllTopics(),
    duration: 135, // 3 topics x 45 min
    contentCovered: [
        "Ratios and proportions",
        "Percentages: conversion, profit/loss, simple interest",
        "Financial literacy applications"
    ],
    description: "Learn to compare quantities using ratios, proportions, and percentages. Apply concepts to profit/loss, simple interest, and real-life financial literacy.",
    explanation: `
# Comparing Quantities (Chapter 8) 📊\n\nThis chapter covers ratios, proportions, and percentages, and their applications in real-life financial situations. You'll learn to solve problems involving profit, loss, and simple interest.\n\nKey concepts include:\n- Ratios and proportions\n- Percentages and conversions\n- Financial literacy (💸, 🏦, 📈)\n\nBy the end, you'll be able to confidently solve problems involving comparison of quantities and financial calculations!\n`,
}; 