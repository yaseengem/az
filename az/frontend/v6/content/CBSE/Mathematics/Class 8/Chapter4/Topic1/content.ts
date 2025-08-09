import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const content: TopicContent = {
    id: 'cl8_ch4_t1',
    topicNumber: 1,
    topicName: 'Organizing data using tables',
    duration: 60,
    description: 'Learn how to effectively organize and present data using tables, including creating, formatting, and analyzing tabular data.',
    explanation: `Data organization is a crucial skill in mathematics and everyday life. Tables are one of the most effective ways to organize and present information systematically. Let's explore how to organize data using tables effectively.

What is a Table?
A table is a systematic arrangement of data in rows and columns. It helps present information in a clear, organized manner that makes it easy to read, understand, and analyze. Tables are used everywhere - from school grade books to scientific research, from business reports to sports statistics.

Components of a Table:
1. Header Row: The top row that describes what each column contains
2. Columns: Vertical arrangements of related data
3. Rows: Horizontal arrangements of related data
4. Cells: Individual boxes where rows and columns intersect
5. Gridlines: Lines that separate rows and columns
6. Title: A clear description of what the table contains

Why Use Tables?
Tables offer several advantages:
- Easy comparison of data
- Quick reference of information
- Clear presentation of relationships
- Systematic organization of large datasets
- Efficient data analysis

Basic Principles of Table Organization:

1. Planning the Table:
   - Identify what data needs to be organized
   - Determine appropriate rows and columns
   - Choose meaningful headers
   - Consider the order of information

2. Creating Clear Headers:
   - Use descriptive titles for columns
   - Keep headers concise but clear
   - Use bold formatting to distinguish headers
   - Ensure headers accurately represent the data below

3. Organizing Data:
   - Arrange related information together
   - Use a logical order (alphabetical, numerical, chronological)
   - Maintain consistency in format
   - Align data appropriately (text left, numbers right)

4. Formatting for Readability:
   - Use consistent spacing
   - Add gridlines to separate data clearly
   - Choose appropriate cell sizes
   - Use text wrapping for longer content
   - Leave adequate white space

Best Practices:

1. Data Entry:
   - Be consistent with data format
   - Use appropriate units
   - Handle missing data appropriately (use N/A or -)
   - Double-check for accuracy

2. Number Formatting:
   - Align decimal points
   - Use appropriate decimal places
   - Format large numbers appropriately
   - Use consistent units

3. Text Formatting:
   - Use clear, readable fonts
   - Maintain consistent font size
   - Apply bold or italics sparingly
   - Ensure text fits within cells

4. Table Layout:
   - Keep tables simple and uncluttered
   - Use appropriate column widths
   - Consider page orientation
   - Break large tables into smaller ones if needed

Common Applications:

1. Student Records:
   Example:
   | Name | Math | Science | English |
   |------|------|---------|---------|
   | Alex | 85   | 92      | 88      |
   | Beth | 90   | 85      | 95      |

2. Financial Data:
   Example:
   | Month    | Income | Expenses | Balance |
   |----------|--------|----------|---------|
   | January  | 5000   | 4000     | 1000    |
   | February | 5500   | 4200     | 1300    |

3. Inventory Management:
   Example:
   | Item    | Quantity | Reorder Point | Supplier |
   |---------|----------|---------------|----------|
   | Pencils | 150      | 50           | ABC Ltd  |
   | Pens    | 200      | 75           | XYZ Inc  |

Tips for Effective Table Use:

1. Keep it Simple:
   - Include only necessary information
   - Avoid overcrowding
   - Use clear, concise labels
   - Remove redundant data

2. Maintain Consistency:
   - Use consistent formatting throughout
   - Keep similar data in the same format
   - Use consistent terminology
   - Apply uniform spacing

3. Consider Your Audience:
   - Use appropriate terminology
   - Include necessary explanations
   - Make data easily understandable
   - Consider the purpose of the table

4. Regular Updates:
   - Keep data current
   - Review for accuracy
   - Update formatting as needed
   - Archive old data appropriately

Troubleshooting Common Issues:

1. Overcrowded Tables:
   - Split into multiple tables
   - Use appropriate cell sizes
   - Consider landscape orientation
   - Remove unnecessary information

2. Misaligned Data:
   - Use proper alignment tools
   - Check column widths
   - Ensure consistent formatting
   - Review cell properties

3. Unclear Information:
   - Review headers for clarity
   - Add explanatory notes if needed
   - Check data accuracy
   - Ensure logical organization

Summary:
Organizing data in tables is a fundamental skill that helps present information clearly and efficiently. Key points to remember:
- Plan your table structure carefully
- Use clear, descriptive headers
- Maintain consistent formatting
- Consider your audience and purpose
- Keep tables simple and organized
- Review and update regularly

Tables are powerful tools for data organization when used correctly. They help transform raw data into meaningful information that can be easily understood and analyzed. Whether you're organizing student grades, tracking expenses, or managing inventory, proper table organization makes data management more efficient and effective. 📊`,
    quiz: {
        questions: [...easyQuestions, ...mediumQuestions]
    }
}; 