import { CBSEContent } from '../content/CBSE/content';
import { Class9MathsContent } from '../content/CBSE/Mathematics/Class 9/content';
import { Class10MathsContent } from '../content/CBSE/Mathematics/Class10/content';

describe('CBSEContent', () => {
    it('should have the correct structure', () => {
        expect(CBSEContent).toBeDefined();
        expect(CBSEContent).toHaveProperty('Mathematics');
        expect(CBSEContent.Mathematics).toHaveProperty('Class9');
        expect(CBSEContent.Mathematics).toHaveProperty('Class10');
    });

    it('should correctly import Class9MathsContent', () => {
        expect(CBSEContent.Mathematics.Class9).toBe(Class9MathsContent);
        expect(CBSEContent.Mathematics.Class9.name).toBe('Mathematics Class 9');
        expect(CBSEContent.Mathematics.Class9.description).toBe('Foundation course in advanced mathematics concepts for Class 9');
        expect(Array.isArray(CBSEContent.Mathematics.Class9.learningObjectives)).toBe(true);
        expect(Array.isArray(CBSEContent.Mathematics.Class9.contentCovered)).toBe(true);
        expect(Array.isArray(CBSEContent.Mathematics.Class9.chapters)).toBe(true);
    });

    it('should correctly import Class10MathsContent', () => {
        expect(CBSEContent.Mathematics.Class10).toBe(Class10MathsContent);
        expect(CBSEContent.Mathematics.Class10.name).toBe('Mathematics Class 10');
        expect(CBSEContent.Mathematics.Class10.description).toBe('Advanced mathematics concepts for Class 10 students');
        expect(Array.isArray(CBSEContent.Mathematics.Class10.learningObjectives)).toBe(true);
        expect(Array.isArray(CBSEContent.Mathematics.Class10.contentCovered)).toBe(true);
        expect(Array.isArray(CBSEContent.Mathematics.Class10.chapters)).toBe(true);
    });

    it('should have the correct number of learning objectives for Class 9', () => {
        expect(CBSEContent.Mathematics.Class9.learningObjectives).toHaveLength(4);
    });

    it('should have the correct number of learning objectives for Class 10', () => {
        expect(CBSEContent.Mathematics.Class10.learningObjectives).toHaveLength(4);
    });

    it('should have the correct content covered for Class 9', () => {
        expect(CBSEContent.Mathematics.Class9.contentCovered).toHaveLength(5);
        expect(CBSEContent.Mathematics.Class9.contentCovered).toContain('Number Systems');
        expect(CBSEContent.Mathematics.Class9.contentCovered).toContain('Polynomials');
        expect(CBSEContent.Mathematics.Class9.contentCovered).toContain('Coordinate Geometry');
        expect(CBSEContent.Mathematics.Class9.contentCovered).toContain('Linear Equations');
        expect(CBSEContent.Mathematics.Class9.contentCovered).toContain('Geometry');
    });

    it('should have the correct content covered for Class 10', () => {
        expect(CBSEContent.Mathematics.Class10.contentCovered).toHaveLength(5);
        expect(CBSEContent.Mathematics.Class10.contentCovered).toContain('Real Numbers');
        expect(CBSEContent.Mathematics.Class10.contentCovered).toContain('Polynomials');
        expect(CBSEContent.Mathematics.Class10.contentCovered).toContain('Coordinate Geometry');
        expect(CBSEContent.Mathematics.Class10.contentCovered).toContain('Trigonometry');
        expect(CBSEContent.Mathematics.Class10.contentCovered).toContain('Statistics');
    });

    it('should have the correct structure for Class 9 Chapter 1 Topic 1', () => {
        const chapter1 = CBSEContent.Mathematics.Class9.chapters[0];
        expect(chapter1.chapterNumber).toBe(1);
        expect(chapter1.chapterName).toBe('Number Systems');
        expect(Array.isArray(chapter1.topics)).toBe(true);
        expect(chapter1.topics.length).toBeGreaterThan(0);

        const topic1 = chapter1.topics[0];
        const expectedTopic = {
            id: expect.any(String),
            topicNumber: 1,
            topicName: 'Real Numbers',
            duration: 45,
            description: expect.any(String),
            latexDescription: expect.any(String),
            explanation: expect.any(String),
            latexExplanation: expect.any(String),
            quiz: expect.any(Object)
        };

        expect(topic1).toEqual(expectedTopic);
        expect(topic1.quiz).toBeDefined();
    });
}); 