import { QuizQuestion, ChapterContent, TopicContent } from '../../../../types';

// Use webpack/metro context to get all topic content files dynamically
// This scans for all content.ts files one level down in Topic* folders
const topicContexts = require.context('./', true, /Topic\d+\/content\.ts$/);

// Function to dynamically get all available topics
const getAllTopics = (): TopicContent[] => {
    const topics: TopicContent[] = [];

    // Process each found topic content file
    topicContexts.keys().forEach((key: string) => {
        const topicModule = topicContexts(key);

        // Extract the topic number from the path (e.g., "./Topic5/content.ts" -> "5")
        const topicNumberMatch = key.match(/Topic(\d+)/);
        if (topicNumberMatch && topicNumberMatch[1]) {
            const topicNumber = parseInt(topicNumberMatch[1], 10);

            // Find the topic content in the module exports
            // It could be either the default export or a named export like "Topic5Content"
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

    // Sort topics by topic number for consistency
    return topics.sort((a, b) => a.topicNumber - b.topicNumber);
};

export const Chapter13Content: ChapterContent = {
    id: "cl3_ch13",
    chapterNumber: 13,
    chapterName: "Smart Charts!",
    topics: getAllTopics(),
    duration: 180, // 3 hours total for chapter
    contentCovered: [
        "Introduction to Data Collection 📊",
        "Understanding Pictographs 🖼️",
        "Creating Bar Charts 📈",
        "Simple Data Analysis 🔍",
        "Chart Reading Activities 🎯"
    ],
    description: "Learning about data representation and basic statistics",
    explanation: `
# Smart Charts!

This chapter introduces young learners to the basics of data representation. Students will explore:
1. 📊 Learning to collect and organize data
2. 🖼️ Understanding and creating pictographs
3. 📈 Making and interpreting bar charts
4. 🔍 Performing simple data analysis
5. 🎯 Engaging in chart reading activities

The chapter helps build essential skills for understanding and representing data through visual means.`
}; 