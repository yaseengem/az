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

export const Chapter10Content: ChapterContent = {
    id: "cl8_ch10",
    chapterNumber: 10,
    chapterName: "Exponents and Powers 10ⁿ",
    topics: getAllTopics(),
    duration: 240, // 4 hours total for chapter
    contentCovered: [
        "Laws of exponents",
        "Scientific notation",
        "Negative exponents"
    ],
    description: "Understanding exponents, their laws, and applications in scientific notation",
    explanation: `
# Exponents and Powers 10ⁿ

This chapter explores the concept of exponents and their applications. Students will learn:

1. Laws of exponents:
   - Product rule: aᵐ × aⁿ = aᵐ⁺ⁿ
   - Quotient rule: aᵐ ÷ aⁿ = aᵐ⁻ⁿ
   - Power rule: (aᵐ)ⁿ = aᵐⁿ
   - Zero exponent: a⁰ = 1
   - Negative exponents: a⁻ⁿ = 1/aⁿ

2. Scientific notation:
   - Standard form
   - Converting large numbers
   - Converting small numbers
   - Applications in science
   - Calculations with scientific notation

3. Negative exponents:
   - Understanding negative powers
   - Converting to positive powers
   - Applications
   - Problem solving
   - Real-world examples

The chapter strengthens understanding of number representation and calculations with very large or small numbers.`,
};

export default Chapter10Content; 