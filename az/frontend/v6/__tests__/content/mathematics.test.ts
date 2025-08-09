import { CBSEContent } from '../../content/CBSE/content';
import { Class9MathsContent } from '../../content/CBSE/Mathematics/Class 9/content';
import { Class10MathsContent } from '../../content/CBSE/Mathematics/Class10/content';

describe('CBSE Mathematics Content Structure', () => {
    test('Class 9 Mathematics content structure', () => {
        const class9Content = CBSEContent.Mathematics.Class9;

        // Test basic content structure
        expect(class9Content).toBeDefined();
        expect(class9Content.name).toBe("Mathematics Class 9");
        expect(class9Content.description).toBeDefined();
        expect(class9Content.learningObjectives).toBeInstanceOf(Array);
        expect(class9Content.contentCovered).toBeInstanceOf(Array);
        expect(class9Content.chapters).toBeInstanceOf(Array);

        // Test chapters structure
        const chapters = class9Content.chapters;
        expect(chapters.length).toBeGreaterThan(0);

        // Test first chapter structure
        const firstChapter = chapters[0];
        expect(firstChapter).toHaveProperty('id');
        expect(firstChapter).toHaveProperty('chapterNumber');
        expect(firstChapter).toHaveProperty('chapterName');
        expect(firstChapter).toHaveProperty('topics');
        expect(firstChapter.topics).toBeInstanceOf(Array);
    });

    test('Class 10 Mathematics content structure', () => {
        const class10Content = CBSEContent.Mathematics.Class10;

        // Test basic content structure
        expect(class10Content).toBeDefined();
        expect(class10Content.name).toBe("Mathematics Class 10");
        expect(class10Content.description).toBeDefined();
        expect(class10Content.learningObjectives).toBeInstanceOf(Array);
        expect(class10Content.contentCovered).toBeInstanceOf(Array);
        expect(class10Content.chapters).toBeInstanceOf(Array);
    });

    test('Chapter topics contain required properties', () => {
        const class9Content = CBSEContent.Mathematics.Class9;
        const chapters = class9Content.chapters;

        chapters.forEach(chapter => {
            chapter.topics.forEach(topic => {
                expect(topic).toHaveProperty('id');
                expect(topic).toHaveProperty('topicName');
                expect(topic).toHaveProperty('description');
                expect(topic).toHaveProperty('duration');
            });
        });
    });

    test('Content hierarchy is properly structured', () => {
        // Test CBSE structure
        expect(CBSEContent).toHaveProperty('Mathematics');
        expect(CBSEContent.Mathematics).toHaveProperty('Class9');
        expect(CBSEContent.Mathematics).toHaveProperty('Class10');

        // Test that direct imports match the structure
        expect(CBSEContent.Mathematics.Class9).toBe(Class9MathsContent);
        expect(CBSEContent.Mathematics.Class10).toBe(Class10MathsContent);
    });

    test('Chapter content structure is complete', () => {
        const class9Content = CBSEContent.Mathematics.Class9;
        const chapters = class9Content.chapters;

        chapters.forEach(chapter => {
            // Test chapter structure
            expect(chapter).toMatchObject({
                id: expect.any(String),
                chapterNumber: expect.any(Number),
                chapterName: expect.any(String),
                topics: expect.any(Array),
                duration: expect.any(Number),
                description: expect.any(String)
            });

            // Test topics structure
            chapter.topics.forEach(topic => {
                expect(topic).toMatchObject({
                    id: expect.any(String),
                    topicNumber: expect.any(Number),
                    topicName: expect.any(String),
                    duration: expect.any(Number),
                    description: expect.any(String)
                });
            });
        });
    });

    test('Content references are consistent', () => {
        const class9Content = CBSEContent.Mathematics.Class9;

        // Verify content references match
        expect(class9Content.chapters).toBeDefined();
        expect(Array.isArray(class9Content.chapters)).toBe(true);

        // Check for duplicate chapter numbers
        const chapterNumbers = class9Content.chapters.map(ch => ch.chapterNumber);
        const uniqueChapterNumbers = new Set(chapterNumbers);
        expect(chapterNumbers.length).toBe(uniqueChapterNumbers.size);

        // Check for duplicate chapter IDs
        const chapterIds = class9Content.chapters.map(ch => ch.id);
        const uniqueChapterIds = new Set(chapterIds);
        expect(chapterIds.length).toBe(uniqueChapterIds.size);
    });

    test('Topic 1 content is properly structured', () => {
        const class9Content = CBSEContent.Mathematics.Class9;
        const chapter1 = class9Content.chapters[0];
        const topic1 = chapter1.topics[0];

        // Test Topic 1 basic structure
        expect(topic1).toBeDefined();
        expect(topic1.topicNumber).toBe(1);
        expect(topic1.topicName).toBe("Real Numbers");
        // expect(topic1.duration).toBe(45);
        // expect(topic1.description).toContain("real Numbers".toLowerCase());

        // // Test Topic 1 content exists
        // expect(topic1.explanation).toBeDefined();
        // expect(topic1.explanation).toContain("Real numbers ");
    });
});
