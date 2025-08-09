import { ClassContent, ChapterContent } from '../../../types';

// Use webpack/metro context to get all chapter content files dynamically
// This scans for all content.ts files one level down in Chapter* folders
const chapterContexts = require.context('./', true, /Chapter\d+\/content\.ts$/);

// Function to dynamically get all available chapters
const getAllChapters = (): ChapterContent[] => {
  const chapters: ChapterContent[] = [];
  
  // Process each found chapter content file
  chapterContexts.keys().forEach((key: string) => {
    const chapterModule = chapterContexts(key);
    
    // Extract the chapter number from the path (e.g., "./Chapter5/content.ts" -> "5")
    const chapterNumberMatch = key.match(/Chapter(\d+)/);
    if (chapterNumberMatch && chapterNumberMatch[1]) {
      const chapterNumber = parseInt(chapterNumberMatch[1], 10);
      
      // Find the chapter content in the module exports
      // It could be either the default export or a named export like "Chapter5Content"
      let chapterContent = chapterModule.default;
      if (!chapterContent) {
        const exportName = `Chapter${chapterNumber}Content`;
        chapterContent = chapterModule[exportName];
      }
      
      if (chapterContent) {
        chapters.push(chapterContent);
      }
    }
  });
  
  // Sort chapters by chapter number for consistency
  return chapters.sort((a, b) => a.chapterNumber - b.chapterNumber);
};

export const Class9MathsContent: ClassContent = {
    id: "cl9",
    name: "Mathematics Class 9",
    description: "Foundation course in advanced mathematics concepts for Class 9",
    learningObjectives: [
        "Understanding real numbers and their properties",
        "Mastering operations on real numbers and laws of exponents",
        "Working with polynomials and understanding their properties",
        "Applying algebraic identities and theorems to solve mathematical problems"
    ],
    contentCovered: [
        "Number Systems",
        "Polynomials",
        "Coordinate Geometry",
        "Linear Equations",
        "Euclid's Geometry",
        "Lines and Angles",
        "Quadrilaterals",
        "Areas of Parallelograms and Triangles"
    ],    chapters: getAllChapters(),
};

export default Class9MathsContent;


// {
//   "class": 9,
//   "subject": "Mathematics",
//   "year": "2025-26",
//   "chapters": [
//     {
//       "chapter": "Number Systems",
//       "topics": [
//         "Introduction",
//         "Irrational Numbers",
//         "Real Numbers and their Decimal Expansions",
//         "Operations on Real Numbers",
//         "Laws of Exponents for Real Numbers",
//         "Summary"
//       ]
//     },
//     {
//       "chapter": "Polynomials",
//       "topics": [
//         "Introduction",
//         "Polynomials in One Variable",
//         "Zeroes of a Polynomial",
//         "Factorisation of Polynomials",
//         "Algebraic Identities",
//         "Summary"
//       ]
//     },
//     {
//       "chapter": "Coordinate Geometry",
//       "topics": [
//         "Introduction",
//         "Cartesian System",
//         "Summary"
//       ]
//     },
//     {
//       "chapter": "Linear Equations in Two Variables",
//       "topics": [
//         "Introduction",
//         "Linear Equations",
//         "Solution of a Linear Equation",
//         "Summary"
//       ]
//     },
//     {
//       "chapter": "Introduction to Euclid’s Geometry",
//       "topics": [
//         "Introduction",
//         "Euclid’s Definitions, Axioms and Postulates",
//         "Summary"
//       ]
//     },
//     {
//       "chapter": "Lines and Angles",
//       "topics": [
//         "Introduction",
//         "Basic Terms and Definitions",
//         "Intersecting Lines and Non-intersecting Lines",
//         "Pairs of Angles",
//         "Lines Parallel to the Same Line",
//         "Summary"
//       ]
//     },
//     {
//       "chapter": "Triangles",
//       "topics": [
//         "Introduction",
//         "Congruence of Triangles",
//         "Criteria for Congruence of Triangles",
//         "Some Properties of a Triangle",
//         "Some More Criteria for Congruence",
//         "Summary"
//       ]
//     },
//     {
//       "chapter": "Quadrilaterals",
//       "topics": [
//         "Properties of a Parallelogram",
//         "The Mid-point Theorem",
//         "Summary"
//       ]
//     },
//     {
//       "chapter": "Circles",
//       "topics": [
//         "Angle Subtended by a Chord at a Point",
//         "Perpendicular from the Centre to a Chord",
//         "Equal Chords and their Distances from the Centre",
//         "Angle Subtended by an Arc of a Circle",
//         "Cyclic Quadrilaterals",
//         "Summary"
//       ]
//     },
//     {
//       "chapter": "Heron’s Formula",
//       "topics": [
//         "Area of a Triangle – by Heron’s Formula",
//         "Summary"
//       ]
//     },
//     {
//       "chapter": "Surface Areas and Volumes",
//       "topics": [
//         "Surface Area of a Right Circular Cone",
//         "Surface Area of a Sphere",
//         "Volume of a Right Circular Cone",
//         "Volume of a Sphere",
//         "Summary"
//       ]
//     },
//     {
//       "chapter": "Statistics",
//       "topics": [
//         "Graphical Representation of Data",
//         "Summary"
//       ]
//     },
//     {
//       "appendix": "Appendix 1: Proofs in Mathematics",
//       "topics": [
//         "Introduction",
//         "Mathematically Acceptable Statements",
//         "Deductive Reasoning",
//         "Theorems, Conjectures and Axioms",
//         "What is a Mathematical Proof?",
//         "Summary"
//       ]
//     },
//     {
//       "appendix": "Appendix 2: Introduction to Mathematical Modelling",
//       "topics": [
//         "Introduction",
//         "Review of Word Problems",
//         "Some Mathematical Models",
//         "The Process of Modelling – Its Advantages and Limitations",
//         "Summary"
//       ]
//     }
//   ]
// }
