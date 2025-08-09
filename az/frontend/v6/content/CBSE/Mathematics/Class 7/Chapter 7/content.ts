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

export const Chapter7Content: ChapterContent = {
  id: "cl7_ch7",
  chapterNumber: 7,
  chapterName: "Congruence of Triangles",
  topics: getAllTopics(),
  duration: 90, // 2 topics x 45 min
  contentCovered: [
    "Criteria for congruence: SSS, SAS, ASA, RHS",
    "Applications and proofs"
  ],
  description: "Understand the criteria for congruence of triangles and apply them in geometric proofs and real-life situations.",
  explanation: `
# Congruence of Triangles (Chapter 7) ≅\n\nThis chapter explores the concept of congruence in triangles, focusing on the SSS, SAS, ASA, and RHS criteria. You'll learn to prove triangles are congruent and apply these ideas in geometry and real-world contexts.\n\nKey concepts include:\n- Criteria for triangle congruence (SSS, SAS, ASA, RHS)\n- Applications and geometric proofs (📐, 🏗️)\n\nBy the end, you'll be able to identify and prove congruent triangles with confidence!\n`,
};
