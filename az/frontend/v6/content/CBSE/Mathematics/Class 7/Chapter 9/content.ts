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

export const Chapter9Content: ChapterContent = {
    id: "cl7_ch9",
    chapterNumber: 9,
    chapterName: "Rational Numbers",
    topics: getAllTopics(),
    duration: 135, // 3 topics x 45 min
    contentCovered: [
        "Definition and properties",
        "Operations: addition, subtraction, multiplication, division",
        "Representation on the number line"
    ],
    description: "Understand rational numbers, their properties, and operations. Learn to represent rational numbers on the number line and solve related problems.",
    explanation: `
# Rational Numbers (Chapter 9) ℚ\n\nThis chapter introduces rational numbers, their properties, and operations. You'll learn to represent rational numbers on the number line and apply them in real-life situations.\n\nKey concepts include:\n- Definition and properties of rational numbers\n- Operations (addition, subtraction, multiplication, division)\n- Number line representation (➕, ➖, ✖️, ➗, 📏)\n\nBy the end, you'll be able to work confidently with rational numbers and solve problems involving them!\n`,
}; 