import { getDatabase } from './database.js';

// Seed the database with initial data


const initialDreams = [
  { dream_text: 'I was flying over a city.', interpretation: 'This dream may symbolize freedom and ambition.' },
  { dream_text: 'I was being chased by a monster.', interpretation: 'This dream could represent anxiety or fear in your waking life.' },
  { dream_text: 'I found a hidden treasure.', interpretation: 'This dream might indicate discovering hidden talents or opportunities.' }
];

export async function seedDatabase() {
  try {
    const db = await getDatabase();
    for (const dream of initialDreams) {
      await db.run(
        'INSERT INTO dreams (dream_text, interpretation) VALUES (?, ?)',
        [dream.dream_text, dream.interpretation]
      );
    }
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}