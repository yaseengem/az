import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch16_t3_qm1',
    type: 'mcq',
    question: 'Consider the following syllogism: "No heroes are cowards. Some soldiers are cowards. Therefore, some soldiers are not heroes." This syllogism is:',
    options: ['Valid', 'Invalid', 'Both valid and sound', 'Neither valid nor sound'],
    correctAnswer: 'Valid',
    explanation: 'The form follows: No A are B, Some C are B, therefore Some C are not A - which is valid.',
    wrongAnswerExplanations: {
      'Invalid': 'The syllogism follows valid logical form.',
      'Both valid and sound': 'While valid, we don\'t know if the premises are true, so can\'t claim soundness.',
      'Neither valid nor sound': 'The syllogism is valid, though soundness depends on premise truth.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch16_t3_qm2',
    type: 'mcq',
    question: 'If "If x is divisible by 4, then x is divisible by 2" is true, and "x is not divisible by 2" is true, what can we conclude about x?',
    options: ['x is divisible by 4', 'x is not divisible by 4', 'x might or might not be divisible by 4', 'x is divisible by 8'],
    correctAnswer: 'x is not divisible by 4',
    explanation: 'Using modus tollens: If P→Q and not Q, then not P. If not divisible by 2, then not divisible by 4.',
    wrongAnswerExplanations: {
      'x is divisible by 4': 'This contradicts modus tollens.',
      'x might or might not be divisible by 4': 'We can definitely conclude x is not divisible by 4.',
      'x is divisible by 8': 'If x is not divisible by 2, it cannot be divisible by 8.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch16_t3_qm3',
    type: 'mcq',
    question: 'Which sequence represents a valid chain of deductive reasoning?',
    options: [
      'All A are B, All B are C, therefore All A are C',
      'Some A are B, All B are C, therefore All A are C',
      'No A are B, Some B are C, therefore No A are C',
      'All A are B, Some C are not B, therefore Some C are not A'
    ],
    correctAnswer: 'All A are B, All B are C, therefore All A are C',
    explanation: 'This follows the valid transitive property in categorical syllogisms.',
    wrongAnswerExplanations: {
      'Some A are B, All B are C, therefore All A are C': 'Invalid - we can only conclude "Some A are C".',
      'No A are B, Some B are C, therefore No A are C': 'Invalid - no valid conclusion follows from these premises.',
      'All A are B, Some C are not B, therefore Some C are not A': 'Valid, but through contraposition, not directly.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch16_t3_qm4',
    type: 'mcq',
    question: 'If "Either p or q" is true, and "not p" is true, what must be true?',
    options: ['q', 'not q', 'Either p or not q', 'Neither p nor q'],
    correctAnswer: 'q',
    explanation: 'This follows disjunctive syllogism: if p∨q and ¬p, then q must be true.',
    wrongAnswerExplanations: {
      'not q': 'This would make both p and q false, contradicting "Either p or q".',
      'Either p or not q': 'We already know "not p" is true, so this is incorrect.',
      'Neither p nor q': 'This contradicts "Either p or q".'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch16_t3_qm5',
    type: 'mcq',
    question: 'In a game, stone beats scissors, scissors beats paper, and paper beats stone. If A beats B and B beats C, what can we conclude?',
    options: ['A beats C', 'C beats A', 'A and C tie', 'No valid conclusion'],
    correctAnswer: 'No valid conclusion',
    explanation: 'This relation isn\'t transitive. From the rules, if A=stone, B=scissors, C=paper, then C beats A.',
    wrongAnswerExplanations: {
      'A beats C': 'Transitivity doesn\'t apply here - the relation is cyclic.',
      'C beats A': 'While possible (depending on what A, B, C are), we can\'t conclude this generally.',
      'A and C tie': 'The rules don\'t allow for ties.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch16_t3_qm6',
    type: 'mcq',
    question: 'If we know that "If it rains, the match will be canceled" and "The match was not canceled," what can we deduce?',
    options: ['It rained', 'It did not rain', 'The match was postponed', 'The players got wet'],
    correctAnswer: 'It did not rain',
    explanation: 'Using modus tollens: If P→Q and not Q, then not P. If match not canceled, then it didn\'t rain.',
    wrongAnswerExplanations: {
      'It rained': 'This contradicts the logical conclusion from modus tollens.',
      'The match was postponed': 'This introduces new information not in the premises.',
      'The players got wet': 'This introduces new information and contradicts "it did not rain".'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch16_t3_qm7',
    type: 'mcq',
    question: 'Consider: "If n² is even, then n is even." If n = 5, what can we conclude?',
    options: ['n² is even', 'n² is odd', 'n is even', 'No conclusion possible'],
    correctAnswer: 'n² is odd',
    explanation: 'Since n=5 is odd, n² must be odd (contrapositive: if n is not even, n² is not even).',
    wrongAnswerExplanations: {
      'n² is even': 'This is false since 5² = 25, which is odd.',
      'n is even': 'Given that n=5, n is odd, not even.',
      'No conclusion possible': 'We can definitely conclude n² is odd using the contrapositive.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch16_t3_qm8',
    type: 'mcq',
    question: 'Which statement is the contrapositive of "If it is a square, then it is a rectangle"?',
    options: [
      'If it is not a rectangle, then it is not a square',
      'If it is not a square, then it is not a rectangle',
      'If it is a rectangle, then it is a square',
      'If it is a rectangle, then it is not a square'
    ],
    correctAnswer: 'If it is not a rectangle, then it is not a square',
    explanation: 'The contrapositive of P→Q is ¬Q→¬P, so "If not rectangle, then not square".',
    wrongAnswerExplanations: {
      'If it is not a square, then it is not a rectangle': 'This is the inverse, not the contrapositive.',
      'If it is a rectangle, then it is a square': 'This is the converse, not the contrapositive.',
      'If it is a rectangle, then it is not a square': 'This doesn\'t match any standard logical form.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch16_t3_qm9',
    type: 'mcq',
    question: 'If "Some A are B" and "All B are C", what can we validly conclude?',
    options: ['Some A are C', 'All A are C', 'No A are C', 'Some A are not C'],
    correctAnswer: 'Some A are C',
    explanation: 'From "Some A are B" and "All B are C", we can validly conclude "Some A are C".',
    wrongAnswerExplanations: {
      'All A are C': 'This conclusion is too strong given the premises.',
      'No A are C': 'This contradicts the valid conclusion "Some A are C".',
      'Some A are not C': 'This doesn\'t follow from the premises; we can\'t determine this.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch16_t3_qm10',
    type: 'mcq',
    question: 'In a Venn diagram showing "All A are B" and "All B are C", which region is necessarily empty?',
    options: ['A intersect (not B)', 'B intersect (not C)', 'A intersect (not C)', 'C intersect (not B)'],
    correctAnswer: 'A intersect (not B)',
    explanation: 'Since all A are in B, the region "A and not B" must be empty.',
    wrongAnswerExplanations: {
      'B intersect (not C)': 'Since all B are in C, this region is empty, but wasn\'t an option.',
      'A intersect (not C)': 'All A must be in C (since all A are in B and all B are in C).',
      'C intersect (not B)': 'This region can be populated - C can extend beyond B.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch16_t3_qm11',
    type: 'mcq',
    question: 'What is a fallacy in deductive reasoning?',
    options: [
      'Error in logical structure despite true premises',
      'True premises but false conclusion',
      'False premises but true conclusion',
      'True premises and valid structure but uncertainty'
    ],
    correctAnswer: 'Error in logical structure despite true premises',
    explanation: 'A fallacy is an error in reasoning structure that makes an argument invalid, regardless of premise truth.',
    wrongAnswerExplanations: {
      'True premises but false conclusion': 'This is impossible in valid deductive reasoning.',
      'False premises but true conclusion': 'This describes an unsound but possibly valid argument.',
      'True premises and valid structure but uncertainty': 'Valid deductive arguments with true premises have certainty.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch16_t3_qm12',
    type: 'mcq',
    question: 'If "All A are B" and "No B are C", which statement must be true?',
    options: ['No A are C', 'Some A are C', 'All A are C', 'Some A are not C'],
    correctAnswer: 'No A are C',
    explanation: 'If all A are in B, and no B are in C, then no A can be in C.',
    wrongAnswerExplanations: {
      'Some A are C': 'This contradicts the conclusion that no A are C.',
      'All A are C': 'This contradicts the conclusion that no A are C.',
      'Some A are not C': 'This is true but incomplete - actually no A are C.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch16_t3_qm13',
    type: 'mcq',
    question: 'In mathematical induction, what are we trying to prove?',
    options: [
      'P(n) is true for all natural numbers n',
      'P(n) is true for at least one n',
      'P(n) implies P(n+1) for all n',
      'P(1) is true and nothing more'
    ],
    correctAnswer: 'P(n) is true for all natural numbers n',
    explanation: 'Mathematical induction aims to prove a property P(n) holds for all natural numbers.',
    wrongAnswerExplanations: {
      'P(n) is true for at least one n': 'This would just be finding an example, not induction.',
      'P(n) implies P(n+1) for all n': 'This is one step in induction, not the overall goal.',
      'P(1) is true and nothing more': 'This is just the base case, not the complete induction.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch16_t3_qm14',
    type: 'mcq',
    question: 'If A → B and A → C are true, what can we conclude?',
    options: [
      'If A then (B and C)',
      'If (B and C) then A',
      'If B then C',
      'If not A then (not B and not C)'
    ],
    correctAnswer: 'If A then (B and C)',
    explanation: 'If A implies B and A implies C, then whenever A is true, both B and C must be true.',
    wrongAnswerExplanations: {
      'If (B and C) then A': 'We can\'t conclude this; B and C could be true for reasons other than A.',
      'If B then C': 'No relationship between B and C can be established from the premises.',
      'If not A then (not B and not C)': 'This inverse doesn\'t follow; B and C could be true for other reasons.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch16_t3_qm15',
    type: 'mcq',
    question: 'In the argument "All cats like fish. Rex likes fish. Therefore, Rex is a cat," the fallacy is:',
    options: ['Affirming the consequent', 'Denying the antecedent', 'Affirming the antecedent', 'Non sequitur'],
    correctAnswer: 'Affirming the consequent',
    explanation: 'It incorrectly concludes Rex is a cat because he likes fish, affirming the consequent of "cats like fish".',
    wrongAnswerExplanations: {
      'Denying the antecedent': 'This would be "Rex is not a cat, so Rex doesn\'t like fish."',
      'Affirming the antecedent': 'This is a valid form of reasoning (modus ponens), not a fallacy.',
      'Non sequitur': 'While the conclusion doesn\'t follow, this is specifically affirming the consequent.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch16_t3_qm16',
    type: 'mcq',
    question: 'Given statements: "Some artists are painters" and "All painters are creative." Which conclusion is valid?',
    options: [
      'Some artists are creative',
      'All artists are creative',
      'Some creative people are not artists',
      'No artists are creative'
    ],
    correctAnswer: 'Some artists are creative',
    explanation: 'Since some artists are painters and all painters are creative, some artists must be creative.',
    wrongAnswerExplanations: {
      'All artists are creative': 'Too strong - we only know "some artists" are painters.',
      'Some creative people are not artists': 'Might be true but doesn\'t follow from the premises.',
      'No artists are creative': 'This contradicts our conclusion that some artists are creative.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch16_t3_qm17',
    type: 'mcq',
    question: 'What type of reasoning starts with specific observations and derives a general principle?',
    options: ['Inductive reasoning', 'Deductive reasoning', 'Abductive reasoning', 'Circular reasoning'],
    correctAnswer: 'Inductive reasoning',
    explanation: 'Inductive reasoning moves from specific examples to general principles or patterns.',
    wrongAnswerExplanations: {
      'Deductive reasoning': 'Deductive reasoning works from general principles to specific conclusions.',
      'Abductive reasoning': 'Abductive reasoning seeks the simplest and most likely explanation.',
      'Circular reasoning': 'This is a fallacy where the conclusion is assumed in the premises.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch16_t3_qm18',
    type: 'mcq',
    question: 'If "If p then q" is true, which statement must also be true?',
    options: ['If not q then not p', 'If not p then not q', 'If q then p', 'If p then not q'],
    correctAnswer: 'If not q then not p',
    explanation: 'This is the contrapositive (¬q→¬p) of p→q and is logically equivalent to the original statement.',
    wrongAnswerExplanations: {
      'If not p then not q': 'This is the inverse and doesn\'t necessarily follow.',
      'If q then p': 'This is the converse and doesn\'t necessarily follow.',
      'If p then not q': 'This contradicts the original statement "If p then q".'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch16_t3_qm19',
    type: 'mcq',
    question: 'Which argument form is valid? (Where ~P means "not P")',
    options: ['P→Q, ~P, therefore ~Q', 'P→Q, ~Q, therefore ~P', 'P→Q, Q, therefore P', 'P→Q, P, therefore ~Q'],
    correctAnswer: 'P→Q, ~Q, therefore ~P',
    explanation: 'This is modus tollens: if P implies Q and Q is false, then P must be false.',
    wrongAnswerExplanations: {
      'P→Q, ~P, therefore ~Q': 'This commits the fallacy of denying the antecedent.',
      'P→Q, Q, therefore P': 'This commits the fallacy of affirming the consequent.',
      'P→Q, P, therefore ~Q': 'This contradicts modus ponens, which would conclude Q, not ~Q.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch16_t3_qm20',
    type: 'mcq',
    question: 'What makes a deductive argument sound?',
    options: [
      'Valid structure and all premises are true',
      'Valid structure regardless of premise truth',
      'All premises are true regardless of structure',
      'The conclusion is true regardless of premises'
    ],
    correctAnswer: 'Valid structure and all premises are true',
    explanation: 'A sound argument has both valid logical form and all true premises, guaranteeing a true conclusion.',
    wrongAnswerExplanations: {
      'Valid structure regardless of premise truth': 'This describes validity, not soundness.',
      'All premises are true regardless of structure': 'True premises with invalid structure don\'t ensure soundness.',
      'The conclusion is true regardless of premises': 'A true conclusion doesn\'t make an argument sound.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  }
];
