CREATE EXTENSION IF NOT EXISTS "uuid-ossp" SCHEMA fauxify;

DO $$ 
DECLARE
  song_id UUID;
  song_duration_seconds INT;
  random_created_at TIMESTAMP;
  random_song RECORD;
BEGIN
  FOR i IN 1..100000 LOOP
    SELECT id, title, duration_seconds INTO random_song
    FROM fauxify.songs
    ORDER BY RANDOM()
    LIMIT 1;

    song_id := random_song.id;
    song_duration_seconds := random_song.duration_seconds;

    random_created_at := CURRENT_TIMESTAMP - INTERVAL '1 day' * FLOOR(RANDOM() * 1200);

    INSERT INTO fauxify.song_analytics (id, song_id, play_time, user_id, created_at)
    VALUES (gen_random_uuid(), song_id, FLOOR(RANDOM() * 1000), gen_random_uuid(), random_created_at);
  END LOOP;
END;
$$ LANGUAGE plpgsql;