BEGIN;

ALTER TABLE fauxify.albums
	ADD COLUMN is_ep BOOLEAN DEFAULT FALSE;

INSERT INTO
	fauxify.albums (id, title, artist_id, release_date, is_ep, created_at, updated_at)
SELECT
	id,
	title,
	artist_id,
	release_date,
	TRUE,
	created_at,
	updated_at
FROM
	fauxify.eps;

DROP TABLE fauxify.eps;

ALTER TABLE fauxify.songs
ADD CONSTRAINT fk_album
FOREIGN KEY (album_id)
REFERENCES fauxify.albums(id);

COMMIT;