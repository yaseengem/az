import { ChapterContent, TopicContent } from '../../../../types';

// Use webpack/metro context to get all topic content files dynamically
const topicContexts = require.context('./', true, /Topic\d+\/content\.ts$/);

// Function to dynamically get all available topics
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

export const Chapter1Content: ChapterContent = {
    id: "cl8_ch1",
    chapterNumber: 1,
    chapterName: "Rational Numbers 🔢",
    topics: getAllTopics(),
    duration: 240, // 4 hours total for chapter
    contentCovered: [
        "Properties of rational numbers",
        "Operations: addition, subtraction, multiplication, division",
        "Representation on the number line"
    ],
    description: "Study of rational numbers, their properties, operations and representation on number line",
    explanation: `
# Rational Numbers 🔢

This chapter covers fundamental concepts of rational numbers and their operations. Students will learn:

1. Properties of rational numbers including:
   - Closure property
   - Commutative property
   - Associative property
   - Distributive property
   - Additive and multiplicative identity
   - Additive and multiplicative inverse

2. Operations on rational numbers:
   - Addition and subtraction
   - Multiplication and division
   - Finding reciprocals
   - Solving word problems

3. Representation on number line:
   - Plotting positive and negative rational numbers
   - Understanding density property
   - Comparing rational numbers

The chapter builds a strong foundation for working with real numbers and algebraic expressions in higher grades.`,
};

export default Chapter1Content; 