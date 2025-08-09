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

export const Chapter17Content: ChapterContent = {
    id: "cl7_ch17",
    chapterNumber: 17,
    chapterName: "Appendix – Number Games and Tricks",
    topics: getAllTopics(),
    duration: 135, // 3 topics x 45 min
    contentCovered: [
        "Number patterns and sequences",
        "Mental math tricks",
        "Fun with numbers and puzzles"
    ],
    description: "Enjoy number games, discover patterns, and learn mental math tricks. Develop a love for numbers through fun puzzles and activities.",
    explanation: `
# Number Games and Tricks (Chapter 17) 🎲\n\nThis chapter brings you fun with numbers, including patterns, sequences, and mental math tricks.\n\nKey concepts include:\n- Number patterns and sequences\n- Mental math tricks (🧠, 🔢)\n- Fun with numbers and puzzles\n\nBy the end, you'll enjoy exploring numbers and solving puzzles with ease!\n`,
}; 