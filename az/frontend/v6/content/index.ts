import content, {
  getSyllabusContent,
  SyllabusStructure,
  SyllabusName,
  SubjectName
} from './content';

// Re-export everything from content.ts
export {
  getSyllabusContent,
  SyllabusStructure,
  SyllabusName,
  SubjectName
};

// Default export the aggregated content
export default content;
