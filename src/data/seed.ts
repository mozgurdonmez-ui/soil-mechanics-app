import { Note, Lab, Lesson, QuizQuestion } from '../types/models';

export const notes: Note[] = [
  {
    id: 'note-1',
    topic: 'Phase Relationships',
    title: 'Introduction to Soil Composition',
    estimatedMinutes: 10,
    tags: ['basics', 'composition'],
  },
  {
    id: 'note-2',
    topic: 'Soil Classification',
    title: 'The Unified Soil Classification System (USCS)',
    estimatedMinutes: 15,
    tags: ['classification', 'USCS'],
  },
];

export const labs: Lab[] = [
  {
    id: 'lab-1',
    title: 'Water Content Determination',
    subtitle: 'ASTM D2216',
    progress: 0.5,
    steps: {
      goal: 'To determine the water content of a soil sample as a percentage of its dry weight.',
      apparatus: ['Drying oven', 'Balance (0.01g accuracy)', 'Moisture cans'],
      procedure: [
        'Record the mass of a clean, dry moisture can.',
        'Place a sample of moist soil in the can.',
        'Record the mass of the can and moist soil.',
        'Place the can in the drying oven at 110 ± 5°C for 24 hours.',
        'Remove the can and allow it to cool.',
        'Record the mass of the can and dry soil.',
        'Calculate the water content.',
      ],
    },
    futureStepsPlaceholder: {},
  },
];

export const lessons: Lesson[] = [
  {
    id: 'lesson-1',
    unitId: 'unit-1',
    title: 'Match the Soil Types',
    type: 'match-terms',
    completed: false,
  },
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'q-1',
    prompt: 'Which of the following is a measure of a soil\'s water content?',
    choices: ['Void ratio', 'Porosity', 'Degree of saturation', 'Gravimetric water content'],
    correctIndex: 3,
    explanation: 'Gravimetric water content is the ratio of the mass of water to the mass of dry soil solids.',
  },
];
