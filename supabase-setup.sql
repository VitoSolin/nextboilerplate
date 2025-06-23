-- =====================================================
-- SUPABASE SETUP FOR SOUND EFFECT GUESSER GAME
-- =====================================================

-- 1. Create storage bucket for sound effects
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'sounds',
  'sounds', 
  true,
  5242880, -- 5MB limit per file
  ARRAY['audio/mpeg', 'audio/mp3', 'audio/wav', 'audio/ogg']
);

-- 2. Create policy to allow public read access to sound files
CREATE POLICY "Public can view sound files" ON storage.objects
FOR SELECT USING (bucket_id = 'sounds');

-- 3. Create policy to allow authenticated users to upload sounds (optional)
CREATE POLICY "Authenticated users can upload sounds" ON storage.objects
FOR INSERT WITH CHECK (
  bucket_id = 'sounds' 
  AND auth.role() = 'authenticated'
);

-- 4. Create policy to allow authenticated users to delete their sounds (optional)
CREATE POLICY "Users can delete their own sounds" ON storage.objects
FOR DELETE USING (
  bucket_id = 'sounds' 
  AND auth.role() = 'authenticated'
);

-- 5. Create table to store sound effect metadata (optional - for better management)
CREATE TABLE IF NOT EXISTS sound_effects (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  file_path VARCHAR(255) NOT NULL,
  file_url TEXT,
  difficulty VARCHAR(20) DEFAULT 'Medium',
  category VARCHAR(50) DEFAULT 'General',
  options JSONB NOT NULL, -- Array of answer options
  correct_answer INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. Insert sample sound effect data
INSERT INTO sound_effects (name, description, file_path, file_url, difficulty, category, options, correct_answer) VALUES
('Notifikasi WhatsApp', 'Sound yang sering bikin kaget di tengah malam', 'whatsapp.mp3', null, 'Easy', 'Social Media', '["WhatsApp", "Telegram", "Instagram", "SMS"]', 0),
('Windows Error', 'Sound yang bikin stress saat presentasi', 'windows-error.mp3', null, 'Medium', 'Operating System', '["Windows Startup", "Windows Error", "Windows Shutdown", "Windows Login"]', 1),
('iPhone Camera', 'Klik! Sound familiar ini dari mana ya?', 'iphone-camera.mp3', null, 'Easy', 'Mobile', '["iPhone Camera", "Android Camera", "DSLR Camera", "Polaroid Camera"]', 0),
('Discord Join', 'Sound saat teman masuk voice channel', 'discord-join.mp3', null, 'Medium', 'Communication', '["Skype Call", "Discord Join", "Zoom Meeting", "Teams Join"]', 1),
('TikTok Like', 'Sound saat double tap video viral', 'tiktok-like.mp3', null, 'Easy', 'Social Media', '["Instagram Like", "TikTok Like", "Facebook Like", "Twitter Like"]', 1),
('Steam Achievement', 'Sound satisfying saat unlock achievement', 'steam-achievement.mp3', null, 'Hard', 'Gaming', '["Xbox Achievement", "PlayStation Trophy", "Steam Achievement", "Nintendo Badge"]', 2),
('Zoom Meeting Start', 'Sound yang udah familiar banget sejak pandemi', 'zoom-start.mp3', null, 'Medium', 'Communication', '["Zoom Start", "Google Meet", "Skype Call", "Teams Meeting"]', 0),
('YouTube Subscribe', 'Sound saat ada yang subscribe channel favorit', 'youtube-subscribe.mp3', null, 'Medium', 'Social Media', '["YouTube Like", "YouTube Subscribe", "YouTube Comment", "YouTube Share"]', 1);

-- 7. Create function to update file URLs after upload
CREATE OR REPLACE FUNCTION update_sound_file_url()
RETURNS TRIGGER 
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.file_url := 'https://your-project-id.supabase.co/storage/v1/object/public/sounds/' || NEW.file_path;
  NEW.updated_at := NOW();
  RETURN NEW;
END;
$$;

-- 8. Create trigger to automatically update file URLs
CREATE TRIGGER update_sound_file_url_trigger
  BEFORE INSERT OR UPDATE ON sound_effects
  FOR EACH ROW
  EXECUTE FUNCTION update_sound_file_url();

-- 9. Enable Row Level Security (RLS)
ALTER TABLE sound_effects ENABLE ROW LEVEL SECURITY;

-- 10. Create policy for public read access to sound_effects table
CREATE POLICY "Public can view sound effects" ON sound_effects
FOR SELECT USING (true);

-- 11. Create policy for authenticated users to manage sound effects (optional)
CREATE POLICY "Authenticated users can manage sound effects" ON sound_effects
FOR ALL USING (auth.role() = 'authenticated');

-- =====================================================
-- NOTES:
-- 1. Replace 'your-project-id' with your actual Supabase project ID
-- 2. Upload audio files to the 'sounds' bucket via Supabase Dashboard
-- 3. File URLs will be automatically generated when you insert/update records
-- ===================================================== 