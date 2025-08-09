export type MessageType = 'text' | 'greeting_card' | 'content_card' | 'quiz_card' | 'progress_report' | 'activity_report';

export interface BaseMessage {
    id: string;
    timestamp: string;
    isAI: boolean;
    status: string;
    type: MessageType;
}

export interface TextMessage extends BaseMessage {
    type: 'text';
    text: string;
}

export interface TopicData {
    topicId: string;
    topicName: string;
    topicNumber: string;
    chapterId: string;
    chapterName: string;
    chapterNumber: string;

    // Optional additional data
    formattedId?: string;
    quiz?: any;
}

export interface ContentCardMessage extends BaseMessage {
    type: 'content_card';
    summary: string;
    explanation: string;
    topicData: TopicData;
}

export interface GreetingCardMessage extends BaseMessage {
    type: 'greeting_card';
    disabled: boolean;
    topicData?: TopicData;
}

export interface GreetingCardOption {
    option: 'study' | 'quiz';
    topicData: TopicData;
    messageId?: string;
}

export interface QuizOption {
    id: string;
    text: string;
    isCorrect: boolean;
    explanation: string;
}

export interface QuizCardMessage extends BaseMessage {
    type: 'quiz_card';
    question: string;
    options: QuizOption[];
    isAnswered: boolean;
    selectedOptionId?: string;
    disabled?: boolean;
    recommendedTime?: number; // Time in seconds for the quiz question
    timerExpired?: boolean; // Flag to indicate if timer expired for this question
    topicData: TopicData;
}

export interface ProgressReportMessage extends BaseMessage {
    type: 'progress_report';
    progressData: {
        timestamp: number;
        completedSteps: string[];
        totalSteps: number;
        starCount: number;
        topicProgress: Array<{
            topicName: string;
            completedContent: boolean;
            quizzesTaken: number;
            quizzesPassed: number;
            chapter?: string;
        }>;
    };
}

export interface ActivityItem {
    timestamp: number;
    type: 'quiz_completed' | 'quiz_exited' | 'topic_completed' | 'topic_incomplete';
    // Standard topic content fields
    topicName?: string; // Keep for backward compatibility
    topicNumber: string;    
    topicId?: string; // Keep for backward compatibility
    description?: string;
    chapterNumber: string;
    chapterName?: string; // Keep for backward compatibility
    chapterId?: string;
    formattedId?: string;
    quiz?: any;
    // Quiz specific fields
    score?: number;
    total?: number;
    result?: 'pass' | 'fail';
    firstTimeCompleted?: boolean;
}

export interface ActivityReportData {
    timestamp: number;
    activities: ActivityItem[];
    syllabus?: string;
    subject?: string;
    className?: string;
}

export interface ActivityReportMessage extends BaseMessage {
    type: 'activity_report';
    activityData: {
        timestamp: number;
        activities: Array<{
            timestamp: number;
            type: 'quiz_completed' | 'quiz_exited' | 'topic_completed' | 'topic_incomplete';
            chapterNumber?: string;
            chapterName?: string;
            topicNumber?: string;
            topicName: string;
            score?: number;
            total?: number;
            result?: 'pass' | 'fail';
            topicId?: string;
            firstTimeCompleted?: boolean;
        }>;
        syllabus?: string;
        subject?: string;
        className?: string;
    };
}

export type Message = TextMessage | GreetingCardMessage | ContentCardMessage | QuizCardMessage | ProgressReportMessage | ActivityReportMessage;

export interface ExpertSettings {
    syllabus: string;
    class: string;
    freeTrialTopic: string;
    freeTrialUsed: boolean;
    isPurchased: boolean;
    responseEngine: string;
}

export interface ChatInfo {
    name: string;
    displayName: string;
    isAI: boolean;
    subject: string;
    settings: ExpertSettings;
    avatarUrl?: string;
    description?: string;
    avatar_color?: string;
    avatar_image?: any;
    productId?: string;
}

export interface AskedQuestion {
    questionId: string;
    askedAt: string; // ISO date string
    topic: string;
}