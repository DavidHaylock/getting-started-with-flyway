BEGIN;

  CREATE TABLE fauxify.eps (
    id UUID PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    artist_id UUID NOT NULL REFERENCES fauxify.artists(id),
    release_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

INSERT INTO
	fauxify.eps (id, title, artist_id, release_date, created_at, updated_at)
SELECT
	id,
	title,
	artist_id,
	release_date,
	created_at,
	updated_at
FROM
	fauxify.albums
WHERE 
  is_ep = TRUE;

ALTER TABLE fauxify.albums
	DROP COLUMN is_ep;

COMMIT;