import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch16_t3_qe1',
    type: 'mcq',
    question: 'In a deductive argument, we reason from:',
    options: ['General to specific', 'Specific to general', 'Example to example', 'Random facts'],
    correctAnswer: 'General to specific',
    explanation: 'Deductive reasoning moves from general principles or premises to specific conclusions.',
    wrongAnswerExplanations: {
      'Specific to general': 'This describes inductive reasoning, not deductive reasoning.',
      'Example to example': 'This is analogical reasoning, not deductive reasoning.',
      'Random facts': 'Deductive reasoning follows a structured logical path, not random facts.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch16_t3_qe2',
    type: 'mcq',
    question: 'If all squares are rectangles and all rectangles have 4 sides, which conclusion follows?',
    options: ['All squares have 4 sides', 'All rectangles are squares', 'Some squares are not rectangles', 'Rectangles have more sides than squares'],
    correctAnswer: 'All squares have 4 sides',
    explanation: 'Using deductive reasoning: squares are rectangles → rectangles have 4 sides → so squares have 4 sides.',
    wrongAnswerExplanations: {
      'All rectangles are squares': 'This reverses the relationship incorrectly; not all rectangles are squares.',
      'Some squares are not rectangles': 'This contradicts the first premise that all squares are rectangles.',
      'Rectangles have more sides than squares': 'Both shapes have exactly 4 sides.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch16_t3_qe3',
    type: 'mcq',
    question: 'If P → Q and Q → R, what can we conclude?',
    options: ['P → R', 'R → P', 'P ↔ R', 'No valid conclusion'],
    correctAnswer: 'P → R',
    explanation: 'This is the transitive property in logic. If P implies Q and Q implies R, then P implies R.',
    wrongAnswerExplanations: {
      'R → P': 'This reverses the relationship incorrectly; we cannot conclude R implies P.',
      'P ↔ R': 'This suggests both P→R and R→P, but we can only conclude P→R.',
      'No valid conclusion': 'We can validly conclude P→R using the transitive property.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch16_t3_qe4',
    type: 'mcq',
    question: 'Which of the following is a valid deductive argument?',
    options: [
      'All mammals have lungs. Whales have lungs. Therefore, whales are mammals.',
      'All mammals are animals. Whales are mammals. Therefore, whales are animals.',
      'Some birds can\'t fly. Penguins are birds. Therefore, penguins can\'t fly.',
      'Most students like math. Ravi is a student. Therefore, Ravi likes math.'
    ],
    correctAnswer: 'All mammals are animals. Whales are mammals. Therefore, whales are animals.',
    explanation: 'This follows valid deductive structure: All A are B, C is A, therefore C is B.',
    wrongAnswerExplanations: {
      'All mammals have lungs. Whales have lungs. Therefore, whales are mammals.': 'This commits the fallacy of affirming the consequent.',
      'Some birds can\'t fly. Penguins are birds. Therefore, penguins can\'t fly.': 'This doesn\'t follow deductively from "some birds".',
      'Most students like math. Ravi is a student. Therefore, Ravi likes math.': 'Using "most" doesn\'t guarantee the conclusion.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch16_t3_qe5',
    type: 'mcq',
    question: 'If it\'s not true that "all triangles are equilateral," what must be true?',
    options: ['No triangles are equilateral', 'Some triangles are equilateral', 'Some triangles are not equilateral', 'All triangles are not equilateral'],
    correctAnswer: 'Some triangles are not equilateral',
    explanation: 'The negation of "all A are B" is "some A are not B," so some triangles are not equilateral.',
    wrongAnswerExplanations: {
      'No triangles are equilateral': 'This is too strong; it doesn\'t follow from "not all are equilateral".',
      'Some triangles are equilateral': 'This doesn\'t necessarily follow from "not all are equilateral".',
      'All triangles are not equilateral': 'This incorrectly negates to mean "no triangles are equilateral".'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch16_t3_qe6',
    type: 'mcq',
    question: 'In the statement "If it rains, then the ground is wet," rain is the:',
    options: ['Premise', 'Conclusion', 'Antecedent', 'Consequent'],
    correctAnswer: 'Antecedent',
    explanation: 'In "If P, then Q" conditional statements, P is the antecedent. Here, "it rains" is P.',
    wrongAnswerExplanations: {
      'Premise': 'While the whole statement can be a premise, "rain" specifically is the antecedent.',
      'Conclusion': 'The conclusion would be "the ground is wet," not "rain".',
      'Consequent': 'The consequent is "the ground is wet," not "rain".'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch16_t3_qe7',
    type: 'mcq',
    question: 'If "No A are B" and "All C are A," what can we conclude about C and B?',
    options: ['All C are B', 'No C are B', 'Some C are B', 'Some C are not B'],
    correctAnswer: 'No C are B',
    explanation: 'If No A are B and All C are A, then No C can be B (syllogistic reasoning).',
    wrongAnswerExplanations: {
      'All C are B': 'This contradicts the premises.',
      'Some C are B': 'This contradicts the premises.',
      'Some C are not B': 'This is true but incomplete - actually NO C are B.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch16_t3_qe8',
    type: 'mcq',
    question: 'If all students in a class passed the exam, and Meera is a student in the class, what can you conclude?',
    options: ['Meera passed the exam', 'Meera failed the exam', 'We can\'t determine if Meera passed', 'Some students might have failed'],
    correctAnswer: 'Meera passed the exam',
    explanation: 'Using deductive reasoning: All students passed, Meera is a student, therefore Meera passed.',
    wrongAnswerExplanations: {
      'Meera failed the exam': 'This contradicts the premise that all students passed.',
      'We can\'t determine if Meera passed': 'We can determine it through deductive reasoning.',
      'Some students might have failed': 'This contradicts the premise that all students passed.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch16_t3_qe9',
    type: 'mcq',
    question: 'Which term describes a deductive argument that is logically correct in its structure?',
    options: ['Sound', 'Valid', 'True', 'Factual'],
    correctAnswer: 'Valid',
    explanation: 'A deductive argument with correct logical structure is called valid, regardless of true premises.',
    wrongAnswerExplanations: {
      'Sound': 'Sound arguments are both valid AND have true premises.',
      'True': 'Arguments aren\'t "true" - this applies to statements or premises.',
      'Factual': 'This applies to statements, not to logical structure of arguments.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch16_t3_qe10',
    type: 'mcq',
    question: 'If P → Q is true, and Q is false, what can we conclude about P?',
    options: ['P is true', 'P is false', 'P could be either true or false', 'P and Q are both false'],
    correctAnswer: 'P is false',
    explanation: 'This is modus tollens: If P→Q and Q is false, then P must be false.',
    wrongAnswerExplanations: {
      'P is true': 'If P were true and P→Q, then Q would have to be true, but Q is false.',
      'P could be either true or false': 'P must be false by modus tollens.',
      'P and Q are both false': 'While P is false, this option redundantly states what was given about Q.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch16_t3_qe11',
    type: 'mcq',
    question: 'In the syllogism "All men are mortal. Socrates is a man. Therefore, Socrates is mortal," what is the conclusion?',
    options: ['All men are mortal', 'Socrates is a man', 'Socrates is mortal', 'Men are mortal like Socrates'],
    correctAnswer: 'Socrates is mortal',
    explanation: 'The conclusion is the statement derived from the premises - "Socrates is mortal".',
    wrongAnswerExplanations: {
      'All men are mortal': 'This is the first premise, not the conclusion.',
      'Socrates is a man': 'This is the second premise, not the conclusion.',
      'Men are mortal like Socrates': 'This reverses the reasoning and isn\'t stated in the syllogism.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch16_t3_qe12',
    type: 'mcq',
    question: 'If we know that "If it\'s sunny, I\'ll go to the beach" and "I didn\'t go to the beach," what can we deduce?',
    options: ['It was sunny', 'It wasn\'t sunny', 'I might go to the beach tomorrow', 'The beach was closed'],
    correctAnswer: 'It wasn\'t sunny',
    explanation: 'Using modus tollens: If P→Q and not Q, then not P. So if not "go to beach," then not "sunny".',
    wrongAnswerExplanations: {
      'It was sunny': 'This contradicts the logical conclusion.',
      'I might go to the beach tomorrow': 'This doesn\'t follow from the given statements.',
      'The beach was closed': 'This introduces new information not in the premises.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch16_t3_qe13',
    type: 'mcq',
    question: 'Which statement correctly negates "All birds can fly"?',
    options: ['No birds can fly', 'Some birds cannot fly', 'All birds cannot fly', 'Many birds can\'t fly'],
    correctAnswer: 'Some birds cannot fly',
    explanation: 'The negation of "All A are B" is "Some A are not B" - so "Some birds cannot fly".',
    wrongAnswerExplanations: {
      'No birds can fly': 'This is too strong - it suggests zero birds can fly.',
      'All birds cannot fly': 'This incorrectly negates to mean "No birds can fly".',
      'Many birds can\'t fly': '"Many" is imprecise; "some" is the correct logical negation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch16_t3_qe14',
    type: 'mcq',
    question: 'If "All A are B" and "All B are C," which conclusion must be true?',
    options: ['All A are C', 'All C are A', 'Some A are not C', 'No A are C'],
    correctAnswer: 'All A are C',
    explanation: 'By transitive property in categorical syllogisms: If all A are B and all B are C, then all A are C.',
    wrongAnswerExplanations: {
      'All C are A': 'This reverses the relationship incorrectly.',
      'Some A are not C': 'This contradicts the valid conclusion.',
      'No A are C': 'This contradicts the valid conclusion.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch16_t3_qe15',
    type: 'mcq',
    question: 'If we know statement P is true and P → Q is true, what can we conclude about Q?',
    options: ['Q is true', 'Q is false', 'Q might be true or false', 'Q is unrelated to P'],
    correctAnswer: 'Q is true',
    explanation: 'This is modus ponens: If P is true and P→Q, then Q must be true.',
    wrongAnswerExplanations: {
      'Q is false': 'This contradicts modus ponens.',
      'Q might be true or false': 'Q must be true by modus ponens.',
      'Q is unrelated to P': 'P→Q establishes a relationship between them.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch16_t3_qe16',
    type: 'mcq',
    question: 'Which logical fallacy occurs in: "If you study hard, you\'ll pass. You passed, so you must have studied hard"?',
    options: ['Affirming the consequent', 'Denying the antecedent', 'Post hoc ergo propter hoc', 'False dilemma'],
    correctAnswer: 'Affirming the consequent',
    explanation: 'This commits the fallacy of affirming the consequent by assuming P→Q means Q→P.',
    wrongAnswerExplanations: {
      'Denying the antecedent': 'This would be "didn\'t study hard, so didn\'t pass."',
      'Post hoc ergo propter hoc': 'This is a causation fallacy, not present here.',
      'False dilemma': 'This presents false either/or choices, not present here.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch16_t3_qe17',
    type: 'mcq',
    question: 'In "All equilateral triangles have equal angles. This triangle has equal angles. Therefore, it is equilateral," the logical error is:',
    options: ['Affirming the consequent', 'Denying the antecedent', 'Non sequitur', 'Circular reasoning'],
    correctAnswer: 'Affirming the consequent',
    explanation: 'This incorrectly concludes P from P→Q and Q. Equal angles doesn\'t guarantee the triangle is equilateral.',
    wrongAnswerExplanations: {
      'Denying the antecedent': 'This would be "not equilateral, so not equal angles."',
      'Non sequitur': 'While the conclusion doesn\'t follow, this is specifically affirming the consequent.',
      'Circular reasoning': 'The argument doesn\'t assume what it\'s trying to prove.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch16_t3_qe18',
    type: 'mcq',
    question: 'If "No A are B" is true, which statement must be false?',
    options: ['All A are B', 'Some A are B', 'All B are A', 'No B are A'],
    correctAnswer: 'Some A are B',
    explanation: '"No A are B" contradicts "Some A are B" - they cannot both be true.',
    wrongAnswerExplanations: {
      'All A are B': 'While this is false, the question asks which statement MUST be false.',
      'All B are A': 'This could be false but depends on other information.',
      'No B are A': 'This is actually equivalent to "No A are B" and therefore true.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch16_t3_qe19',
    type: 'mcq',
    question: 'In deductive reasoning, if the premises are true and the argument is valid, the conclusion must be:',
    options: ['True', 'False', 'Either true or false', 'Unprovable'],
    correctAnswer: 'True',
    explanation: 'A valid deductive argument with true premises must have a true conclusion - this is a sound argument.',
    wrongAnswerExplanations: {
      'False': 'Valid reasoning from true premises cannot lead to a false conclusion.',
      'Either true or false': 'The conclusion must be true, not uncertain.',
      'Unprovable': 'The conclusion is provable through the deductive process itself.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch16_t3_qe20',
    type: 'mcq',
    question: 'If "Some A are B" is true, which statement must also be true?',
    options: ['Some B are A', 'All A are B', 'No A are B', 'All B are A'],
    correctAnswer: 'Some B are A',
    explanation: '"Some A are B" converts to "Some B are A" - they\'re logically equivalent statements.',
    wrongAnswerExplanations: {
      'All A are B': 'This doesn\'t follow from "Some A are B".',
      'No A are B': 'This contradicts the given statement.',
      'All B are A': 'This doesn\'t follow from "Some A are B".'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  }
];
