BEGIN;
    CREATE TABLE fauxify.song_analytics (
        id UUID PRIMARY KEY,
        song_id UUID NOT NULL REFERENCES fauxify.songs(id),
        play_time INT NOT NULL,
        user_id UUID NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    ALTER TABLE fauxify.songs DROP COLUMN IF EXISTS plays;

COMMIT;