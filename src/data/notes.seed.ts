export interface Note {
  id: string;
  title: string;
  topic: string;
  readingTime: number;
  content: string;
}

export const notes: Note[] = [
  {
    id: 'note-1',
    title: 'Introduction to Soil Composition',
    topic: 'Phase Relationships',
    readingTime: 5,
    content: 'Soil is a complex material composed of solid particles, water, and air. Understanding these three phases is fundamental to soil mechanics.',
  },
  {
    id: 'note-2',
    title: 'The Unified Soil Classification System',
    topic: 'Soil Classification',
    readingTime: 8,
    content: 'The USCS is a widely used system for classifying soils based on their particle size and plasticity characteristics.',
  },
  {
    id: 'note-3',
    title: 'Effective Stress Principles',
    topic: 'Effective Stress',
    readingTime: 7,
    content: 'The principle of effective stress, developed by Karl Terzaghi, is a cornerstone of modern geotechnical engineering.',
  },
];
