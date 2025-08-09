// Main content aggregation file
import { CBSEContent } from './CBSE/content';
// Import additional syllabuses as they're created
// import { AustralianContent } from './Australian/content';


// Aggregate all content from various syllabuses
export const all_content = {
    // Syllabuses
    CBSE: CBSEContent,
    // Australian: AustralianContent,

};





export default all_content;
