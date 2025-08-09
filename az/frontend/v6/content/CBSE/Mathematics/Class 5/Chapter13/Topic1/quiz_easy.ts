import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl5_ch13_t1_qe1',
        type: 'mcq',
        question: 'What is the first step in lattice multiplication?',
        options: [
            'Draw a grid',
            'Write the numbers',
            'Multiply the digits',
            'Add the diagonals'
        ],
        correctAnswer: 'Draw a grid',
        explanation: 'The first step is to draw a grid based on the number of digits in the numbers you are multiplying.',
        wrongAnswerExplanations: {
            'Write the numbers': 'You need to draw the grid first before writing the numbers.',
            'Multiply the digits': 'You need to set up the grid and write the numbers before multiplying.',
            'Add the diagonals': 'Adding diagonals is the last step after multiplying and filling the grid.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch13_t1_qe2',
        type: 'mcq',
        question: 'In lattice multiplication, where do you write the first number?',
        options: [
            'Across the top',
            'Down the right side',
            'In the middle',
            'At the bottom'
        ],
        correctAnswer: 'Across the top',
        explanation: 'The first number is written across the top of the grid, one digit per column.',
        wrongAnswerExplanations: {
            'Down the right side': 'The second number is written down the right side.',
            'In the middle': 'The middle is for the products of multiplication.',
            'At the bottom': 'The bottom is for adding the diagonals.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch13_t1_qe3',
        type: 'mcq',
        question: 'What do you draw in each box of the lattice grid?',
        options: [
            'A diagonal line',
            'A circle',
            'A square',
            'A triangle'
        ],
        correctAnswer: 'A diagonal line',
        explanation: 'Each box needs a diagonal line from top-right to bottom-left to separate tens and ones digits.',
        wrongAnswerExplanations: {
            'A circle': 'Circles are not used in lattice multiplication.',
            'A square': 'The boxes are already squares.',
            'A triangle': 'Triangles are not used in lattice multiplication.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch13_t1_qe4',
        type: 'mcq',
        question: 'Where do you write the tens digit in a lattice box?',
        options: [
            'Above the diagonal',
            'Below the diagonal',
            'On the diagonal',
            'Outside the box'
        ],
        correctAnswer: 'Above the diagonal',
        explanation: 'The tens digit is written above the diagonal line in each box.',
        wrongAnswerExplanations: {
            'Below the diagonal': 'The ones digit goes below the diagonal.',
            'On the diagonal': 'The diagonal is just a line, not for writing digits.',
            'Outside the box': 'All digits should be written inside the boxes.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch13_t1_qe5',
        type: 'mcq',
        question: 'Where do you write the ones digit in a lattice box?',
        options: [
            'Below the diagonal',
            'Above the diagonal',
            'On the diagonal',
            'Outside the box'
        ],
        correctAnswer: 'Below the diagonal',
        explanation: 'The ones digit is written below the diagonal line in each box.',
        wrongAnswerExplanations: {
            'Above the diagonal': 'The tens digit goes above the diagonal.',
            'On the diagonal': 'The diagonal is just a line, not for writing digits.',
            'Outside the box': 'All digits should be written inside the boxes.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch13_t1_qe6',
        type: 'mcq',
        question: 'How do you start adding the numbers in lattice multiplication?',
        options: [
            'From the bottom right',
            'From the top left',
            'From the middle',
            'From any corner'
        ],
        correctAnswer: 'From the bottom right',
        explanation: 'You start adding from the bottom right corner and move towards the top left.',
        wrongAnswerExplanations: {
            'From the top left': 'Adding starts from the bottom right.',
            'From the middle': 'Adding starts from the bottom right.',
            'From any corner': 'Adding must start from the bottom right.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch13_t1_qe7',
        type: 'mcq',
        question: 'What do you do if the sum in a diagonal is more than 9?',
        options: [
            'Carry the tens digit to the next diagonal',
            'Write it as is',
            'Start over',
            'Ignore it'
        ],
        correctAnswer: 'Carry the tens digit to the next diagonal',
        explanation: 'If the sum is more than 9, you write the ones digit and carry the tens digit to the next diagonal.',
        wrongAnswerExplanations: {
            'Write it as is': 'You need to carry if the sum is more than 9.',
            'Start over': 'You should carry, not start over.',
            'Ignore it': 'You should not ignore numbers greater than 9.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch13_t1_qe8',
        type: 'mcq',
        question: 'How do you read the final answer in lattice multiplication?',
        options: [
            'From left to right',
            'From right to left',
            'From top to bottom',
            'From bottom to top'
        ],
        correctAnswer: 'From left to right',
        explanation: 'The final answer is read from left to right, starting from the top left corner.',
        wrongAnswerExplanations: {
            'From right to left': 'The answer is read from left to right.',
            'From top to bottom': 'The answer is read from left to right.',
            'From bottom to top': 'The answer is read from left to right.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch13_t1_qe9',
        type: 'mcq',
        question: 'What is the advantage of using lattice multiplication?',
        options: [
            'It keeps your work organized',
            'It is faster than other methods',
            'It doesn\'t require any writing',
            'It works only for small numbers'
        ],
        correctAnswer: 'It keeps your work organized',
        explanation: 'Lattice multiplication helps keep your work neat and organized, making it easier to follow.',
        wrongAnswerExplanations: {
            'It is faster than other methods': 'Speed is not the main advantage.',
            'It doesn\'t require any writing': 'Lattice multiplication requires writing.',
            'It works only for small numbers': 'It works for both small and large numbers.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch13_t1_qe10',
        type: 'mcq',
        question: 'What shape is used in lattice multiplication?',
        options: [
            'Grid',
            'Circle',
            'Triangle',
            'Line'
        ],
        correctAnswer: 'Grid',
        explanation: 'Lattice multiplication uses a grid (lattice) to organize the multiplication process.',
        wrongAnswerExplanations: {
            'Circle': 'Circles are not used in lattice multiplication.',
            'Triangle': 'Triangles are not used in lattice multiplication.',
            'Line': 'Lines are used within the grid, but the main shape is a grid.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch13_t1_qe11',
        type: 'mcq',
        question: 'How many digits are written in each box of the lattice?',
        options: [
            'Two',
            'One',
            'Three',
            'Four'
        ],
        correctAnswer: 'Two',
        explanation: 'Each box contains two digits: the tens digit above the diagonal and the ones digit below.',
        wrongAnswerExplanations: {
            'One': 'Each box contains two digits.',
            'Three': 'Each box contains only two digits.',
            'Four': 'Each box contains only two digits.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch13_t1_qe12',
        type: 'mcq',
        question: 'What is the purpose of the diagonal lines in the lattice?',
        options: [
            'To separate tens and ones digits',
            'To make the grid look nice',
            'To count the boxes',
            'To add the numbers'
        ],
        correctAnswer: 'To separate tens and ones digits',
        explanation: 'The diagonal lines help separate the tens digit (above) from the ones digit (below) in each box.',
        wrongAnswerExplanations: {
            'To make the grid look nice': 'The lines have a specific purpose.',
            'To count the boxes': 'The lines are not for counting.',
            'To add the numbers': 'Adding happens after the digits are separated.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch13_t1_qe13',
        type: 'mcq',
        question: 'What do you do after filling in all the boxes?',
        options: [
            'Add along the diagonals',
            'Multiply the numbers again',
            'Draw more lines',
            'Start over'
        ],
        correctAnswer: 'Add along the diagonals',
        explanation: 'After filling in all the boxes, you add the numbers along the diagonals to get the final answer.',
        wrongAnswerExplanations: {
            'Multiply the numbers again': 'Multiplication is already done in the boxes.',
            'Draw more lines': 'No more lines are needed.',
            'Start over': 'You should add the diagonals, not start over.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch13_t1_qe14',
        type: 'mcq',
        question: 'What is the last step in lattice multiplication?',
        options: [
            'Read the answer from left to right',
            'Add the numbers',
            'Draw the grid',
            'Write the numbers'
        ],
        correctAnswer: 'Read the answer from left to right',
        explanation: 'The final step is to read the answer from left to right, starting from the top left corner.',
        wrongAnswerExplanations: {
            'Add the numbers': 'Adding happens before reading the answer.',
            'Draw the grid': 'Drawing the grid is the first step.',
            'Write the numbers': 'Writing the numbers happens early in the process.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch13_t1_qe15',
        type: 'mcq',
        question: 'What is the size of the grid for multiplying two 2-digit numbers?',
        options: [
            '2x2',
            '3x3',
            '4x4',
            '1x1'
        ],
        correctAnswer: '2x2',
        explanation: 'For two 2-digit numbers, you need a 2x2 grid (2 columns and 2 rows).',
        wrongAnswerExplanations: {
            '3x3': 'A 3x3 grid is too large for two 2-digit numbers.',
            '4x4': 'A 4x4 grid is too large for two 2-digit numbers.',
            '1x1': 'A 1x1 grid is too small for two 2-digit numbers.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch13_t1_qe16',
        type: 'mcq',
        question: 'What is the size of the grid for multiplying a 2-digit number by a 3-digit number?',
        options: [
            '2x3',
            '3x3',
            '2x2',
            '1x3'
        ],
        correctAnswer: '2x3',
        explanation: 'For a 2-digit number multiplied by a 3-digit number, you need a 2x3 grid (2 columns and 3 rows).',
        wrongAnswerExplanations: {
            '3x3': 'A 3x3 grid is too large for this multiplication.',
            '2x2': 'A 2x2 grid is too small for this multiplication.',
            '1x3': 'A 1x3 grid is not the correct size.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch13_t1_qe17',
        type: 'mcq',
        question: 'What is the first number you write in the lattice grid?',
        options: [
            'The number along the top',
            'The number along the bottom',
            'The answer',
            'The grid size'
        ],
        correctAnswer: 'The number along the top',
        explanation: 'You first write one number along the top of the grid, one digit per column.',
        wrongAnswerExplanations: {
            'The number along the bottom': 'The second number goes along the right side.',
            'The answer': 'The answer comes at the end.',
            'The grid size': 'The grid size is determined by the number of digits.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch13_t1_qe18',
        type: 'mcq',
        question: 'What is the second number you write in the lattice grid?',
        options: [
            'The number along the right side',
            'The number along the bottom',
            'The answer',
            'The grid size'
        ],
        correctAnswer: 'The number along the right side',
        explanation: 'You write the second number along the right side of the grid, one digit per row.',
        wrongAnswerExplanations: {
            'The number along the bottom': 'The second number goes along the right side.',
            'The answer': 'The answer comes at the end.',
            'The grid size': 'The grid size is determined by the number of digits.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch13_t1_qe19',
        type: 'mcq',
        question: 'What do you do after writing the numbers in the grid?',
        options: [
            'Multiply the digits and write the products in the boxes',
            'Add the numbers',
            'Draw more lines',
            'Start over'
        ],
        correctAnswer: 'Multiply the digits and write the products in the boxes',
        explanation: 'After writing the numbers, you multiply each pair of digits and write the products in the corresponding boxes.',
        wrongAnswerExplanations: {
            'Add the numbers': 'Adding happens after multiplication.',
            'Draw more lines': 'No more lines are needed.',
            'Start over': 'You should multiply the digits, not start over.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch13_t1_qe20',
        type: 'mcq',
        question: 'What is the final step before reading the answer?',
        options: [
            'Add along the diagonals',
            'Multiply the numbers again',
            'Draw more lines',
            'Start over'
        ],
        correctAnswer: 'Add along the diagonals',
        explanation: 'The final step before reading the answer is to add the numbers along the diagonals.',
        wrongAnswerExplanations: {
            'Multiply the numbers again': 'Multiplication is already done in the boxes.',
            'Draw more lines': 'No more lines are needed.',
            'Start over': 'You should add the diagonals, not start over.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    }
]; 