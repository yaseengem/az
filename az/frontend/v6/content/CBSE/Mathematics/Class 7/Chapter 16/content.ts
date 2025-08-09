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

export const Chapter16Content: ChapterContent = {
    id: "cl7_ch16",
    chapterNumber: 16,
    chapterName: "Appendix – Logical Reasoning and Puzzles",
    topics: getAllTopics(),
    duration: 135, // 3 topics x 45 min
    contentCovered: [
        "Logical puzzles and brain teasers",
        "Pattern recognition",
        "Deductive reasoning exercises"
    ],
    description: "Sharpen your logical reasoning with puzzles, pattern recognition, and deductive exercises. Develop critical thinking and problem-solving skills.",
    explanation: `
# Logical Reasoning and Puzzles (Chapter 16) 🧠\n\nThis chapter develops your logical reasoning through puzzles, pattern recognition, and deductive exercises.\n\nKey concepts include:\n- Logical puzzles and brain teasers\n- Pattern recognition (🔍, 🧩)\n- Deductive reasoning\n\nBy the end, you'll be able to tackle challenging puzzles and think logically to solve problems!\n`,
}; 