import { createClient } from '@supabase/supabase-js'

// Replace these with your actual Supabase project credentials
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://your-project-id.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Sound effect interface for type safety
export interface SoundEffect {
  id: number;
  name: string;
  description: string;
  file_path: string;
  file_url: string | null;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  options: string[];
  correct_answer: number;
  created_at?: string;
  updated_at?: string;
}

// Function to fetch all sound effects
export async function fetchSoundEffects(): Promise<SoundEffect[]> {
  const { data, error } = await supabase
    .from('sound_effects')
    .select('*')
    .order('id');

  if (error) {
    console.error('Error fetching sound effects:', error);
    return [];
  }

  return data || [];
}

// Function to get storage URL for a sound file
export function getSoundUrl(fileName: string): string {
  return `${supabaseUrl}/storage/v1/object/public/sounds/${fileName}`;
} 