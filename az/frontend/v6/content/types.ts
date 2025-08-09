export interface QuizQuestion {
    id: string;
    type: 'mcq' | 'trueFalse' | 'fillInBlanks';
    question: string;
    options: string[];
    correctAnswer: string | string[];
    explanation: string;
    wrongAnswerExplanations: { [key: string]: string };
    difficulty: 'easy' | 'medium' | 'hard';
    marks: number;
    recommendedTime: number;
}

export interface TopicQuiz {
    questions: QuizQuestion[];
}

export interface TopicContent {
    id: string; // UUID
    topicNumber: number;
    topicName: string;
    duration: number;
    description: string; // Under 50 words - plain text description
    explanation: string;
    quiz: TopicQuiz;
}

export interface ChapterContent {
    id: string; // UUID
    chapterNumber: number;
    chapterName: string;
    topics: TopicContent[];
    duration: number; // Duration in minutes
    description?: string; // Under 50 words - plain text description
    explanation?: string;
    contentCovered: string[];
    quiz?: TopicQuiz;
}

export interface ClassContent {
    id: string; // UUID
    name: string;
    description: string;
    learningObjectives: string[];
    contentCovered: string[];
    chapters: ChapterContent[];
    chapters_raw?: any[]; // Raw data for chapters, if needed

}

export interface SubjectContent {
    name: string;
    description: string;
    learningObjectives: string[];
    contentCovered: string[];
    classes?: { [key: string]: ClassContent };
}
