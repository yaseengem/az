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

export const Chapter3Content: ChapterContent = {
    id: "cl7_ch3",
    chapterNumber: 3,
    chapterName: "Data Handling",
    topics: getAllTopics(),
    duration: 135, // 3 topics x 45 min
    contentCovered: [
        "Data collection and organization",
        "Mean, median, mode",
        "Bar graphs and double bar graphs"
    ],
    description: "Learn to collect, organize, and interpret data using mean, median, mode, and graphical representations. Develop skills for real-life data analysis.",
    explanation: `
# Data Handling (Chapter 3) 📊\n\nThis chapter teaches you how to collect, organize, and interpret data. You'll learn about measures of central tendency (mean, median, mode) and how to represent data using bar graphs and double bar graphs.\n\nKey concepts include:\n- Data collection and organization\n- Calculating mean, median, and mode\n- Drawing and interpreting bar graphs (📈, 📉)\n\nBy the end, you'll be able to analyze and present data effectively in real-life situations!\n`,
}; 