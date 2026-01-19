export interface Note {
  id: string;
  topic: string;
  title: string;
  contentRef?: string;
  estimatedMinutes?: number;
  tags?: string[];
}

export interface Lab {
  id: string;
  title: string;
  subtitle?: string;
  progress?: number;
  steps: {
    goal: string;
    apparatus: string[];
    procedure: string[];
  };
  futureStepsPlaceholder?: {};
}

export interface Lesson {
  id: string;
  unitId: string;
  title: string;
  type: 'match-terms' | 'multiple-choice';
  completed?: boolean;
}

export interface QuizQuestion {
  id: string;
  prompt: string;
  choices: string[];
  correctIndex: number;
  explanation?: string;
}
