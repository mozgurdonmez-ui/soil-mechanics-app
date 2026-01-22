export interface Note {
  id: string;
  title: string;
  category: string;
  content: string;
}

// Keeping other types that might exist in the project
export interface LabStep {
  title: string;
  image: string;
  content: string;
}

export interface Lab {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  steps: LabStep[];
}
