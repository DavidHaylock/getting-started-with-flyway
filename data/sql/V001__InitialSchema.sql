BEGIN;
    CREATE SCHEMA IF NOT EXISTS fauxify;

    CREATE TABLE fauxify.artists (
        id UUID PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        country VARCHAR(255) NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    
    CREATE INDEX IDX_NAME ON fauxify.artists (name);

    CREATE TABLE fauxify.albums (
        id UUID PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        artist_id UUID NOT NULL REFERENCES fauxify.artists(id),
        release_date DATE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE fauxify.songs (
        id UUID PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        album_id UUID NOT NULL REFERENCES fauxify.albums(id),
        track_number INT NOT NULL,
        duration_seconds INT,
        plays INT DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    ALTER TABLE fauxify.songs ADD CONSTRAINT unique_album_track UNIQUE (album_id, track_number);
    CREATE INDEX IDX_TITLE ON fauxify.songs (title);
    CREATE INDEX IDX_ALBUM ON fauxify.songs (album_id);

COMMIT;