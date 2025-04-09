BEGIN;

CREATE VIEW fauxify.most_plays AS
SELECT
    s.title AS song_title,
    a.title AS album_title,
    ar.name AS artist_name,
    COUNT(p.id) AS play_count,
    AVG(p.play_time) AS avg_play_time
FROM
    fauxify.songs s
JOIN
    fauxify.albums a ON s.album_id = a.id
JOIN
    fauxify.artists ar ON a.artist_id = ar.id
LEFT JOIN
    fauxify.song_analytics p ON s.id = p.song_id
GROUP BY
    s.id, a.id, ar.id
ORDER BY
    play_count DESC;

COMMIT;