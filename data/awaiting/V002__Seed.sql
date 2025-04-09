CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

BEGIN;
  DO $$
  DECLARE
    beatles_artist_id UUID := uuid_generate_v4();
    led_zeppelin_artist_id UUID := uuid_generate_v4();
    pink_floyd_artist_id UUID := uuid_generate_v4();
    queen_artist_id UUID := uuid_generate_v4();
    rolling_stones_artist_id UUID := uuid_generate_v4();
    nirvana_artist_id UUID := uuid_generate_v4();
    radiohead_artist_id UUID := uuid_generate_v4();
    david_bowie_artist_id UUID := uuid_generate_v4();
    fleetwood_mac_artist_id UUID := uuid_generate_v4();
    u2_artist_id UUID := uuid_generate_v4();

    abbey_road_album_id UUID := uuid_generate_v4();
    revolver_album_id UUID := uuid_generate_v4();
    led_zeppelin_iv_album_id UUID := uuid_generate_v4();
    physical_graffiti_album_id UUID := uuid_generate_v4();
    dark_side_album_id UUID := uuid_generate_v4();
    money_ep_id UUID := uuid_generate_v4();
    wish_you_were_here_album_id UUID := uuid_generate_v4();
    night_at_opera_album_id UUID := uuid_generate_v4();
    news_of_world_album_id UUID := uuid_generate_v4();
    sticky_fingers_album_id UUID := uuid_generate_v4();
    let_it_bleed_album_id UUID := uuid_generate_v4();
    nevermind_album_id UUID := uuid_generate_v4();
    in_utero_album_id UUID := uuid_generate_v4();
    ok_computer_album_id UUID := uuid_generate_v4();
    kid_a_album_id UUID := uuid_generate_v4();
    ziggy_album_id UUID := uuid_generate_v4();
    heroes_album_id UUID := uuid_generate_v4();
    rumours_album_id UUID := uuid_generate_v4();
    tusk_album_id UUID := uuid_generate_v4();
    joshua_tree_album_id UUID := uuid_generate_v4();
    achtung_baby_album_id UUID := uuid_generate_v4();
  BEGIN
    INSERT INTO fauxify.artists (id, name, country)
    VALUES
      (beatles_artist_id, 'The Beatles', 'UK'),
      (led_zeppelin_artist_id, 'Led Zeppelin', 'UK'),
      (pink_floyd_artist_id, 'Pink Floyd', 'UK'),
      (queen_artist_id, 'Queen', 'UK'),
      (rolling_stones_artist_id, 'The Rolling Stones', 'UK'),
      (nirvana_artist_id, 'Nirvana', 'US'),
      (radiohead_artist_id, 'Radiohead', 'UK'),
      (david_bowie_artist_id, 'David Bowie', 'UK'),
      (fleetwood_mac_artist_id, 'Fleetwood Mac', 'UK'),
      (u2_artist_id, 'U2', 'UK');

    INSERT INTO fauxify.eps (id, title, artist_id, release_date)
    VALUES (money_ep_id, 'Money', pink_floyd_artist_id, '2020-09-12');

    INSERT INTO fauxify.albums (id, title, artist_id, release_date)
    VALUES
      (abbey_road_album_id, 'Abbey Road', beatles_artist_id, '1969-09-26'),
      (revolver_album_id, 'Revolver', beatles_artist_id, '1966-08-05'),
      (led_zeppelin_iv_album_id, 'Led Zeppelin IV', led_zeppelin_artist_id, '1971-11-08'),
      (physical_graffiti_album_id, 'Physical Graffiti', led_zeppelin_artist_id, '1975-02-24'),
      (dark_side_album_id, 'The Dark Side of the Moon', pink_floyd_artist_id, '1973-03-01'),
      (wish_you_were_here_album_id, 'Wish You Were Here', pink_floyd_artist_id, '1975-09-12'),
      (night_at_opera_album_id, 'A Night at the Opera', queen_artist_id, '1975-11-21'),
      (news_of_world_album_id, 'News of the World', queen_artist_id, '1977-10-28'),
      (sticky_fingers_album_id, 'Sticky Fingers', rolling_stones_artist_id, '1971-04-23'),
      (let_it_bleed_album_id, 'Let It Bleed', rolling_stones_artist_id, '1969-12-05'),
      (nevermind_album_id, 'Nevermind', nirvana_artist_id, '1991-09-24'),
      (in_utero_album_id, 'In Utero', nirvana_artist_id, '1993-09-21'),
      (ok_computer_album_id, 'OK Computer', radiohead_artist_id, '1997-05-21'),
      (kid_a_album_id, 'Kid A', radiohead_artist_id, '2000-10-02'),
      (ziggy_album_id, 'Ziggy Stardust', david_bowie_artist_id, '1972-06-16'),
      (heroes_album_id, 'Heroes', david_bowie_artist_id, '1977-10-14'),
      (rumours_album_id, 'Rumours', fleetwood_mac_artist_id, '1977-02-04'),
      (tusk_album_id, 'Tusk', fleetwood_mac_artist_id, '1979-10-12'),
      (joshua_tree_album_id, 'The Joshua Tree', u2_artist_id, '1987-03-09'),
      (achtung_baby_album_id, 'Achtung Baby', u2_artist_id, '1991-11-18');

    INSERT INTO fauxify.songs (id, title, album_id, track_number, duration_seconds)
    VALUES
      -- Beatles (Abbey Road)
      (uuid_generate_v4(), 'Come Together', abbey_road_album_id, 1, 259),
      (uuid_generate_v4(), 'Something', abbey_road_album_id, 2, 182),
      (uuid_generate_v4(), 'Here Comes the Sun', abbey_road_album_id, 3, 185),

      -- Beatles (Revolver)
      (uuid_generate_v4(), 'Eleanor Rigby', revolver_album_id, 2, 138),
      (uuid_generate_v4(), 'Yellow Submarine', revolver_album_id, 6, 160),
      (uuid_generate_v4(), 'Tomorrow Never Knows', revolver_album_id, 14, 178),

      -- Led Zeppelin IV
      (uuid_generate_v4(), 'Black Dog', led_zeppelin_iv_album_id, 1, 296),
      (uuid_generate_v4(), 'Rock and Roll', led_zeppelin_iv_album_id, 2, 223),
      (uuid_generate_v4(), 'Stairway to Heaven', led_zeppelin_iv_album_id, 4, 482),

      -- Physical Graffiti
      (uuid_generate_v4(), 'Kashmir', physical_graffiti_album_id, 6, 515),
      (uuid_generate_v4(), 'Trampled Under Foot', physical_graffiti_album_id, 5, 336),

      -- Pink Floyd
      (uuid_generate_v4(), 'Money', dark_side_album_id, 6, 382),
      (uuid_generate_v4(), 'Time', dark_side_album_id, 4, 413),
      (uuid_generate_v4(), 'Shine On You Crazy Diamond', wish_you_were_here_album_id, 1, 810),
      (uuid_generate_v4(), 'Money', money_ep_id, 1, 810),

      -- Queen
      (uuid_generate_v4(), 'Bohemian Rhapsody', night_at_opera_album_id, 11, 354),
      (uuid_generate_v4(), 'Love of My Life', night_at_opera_album_id, 9, 219),
      (uuid_generate_v4(), 'We Will Rock You', news_of_world_album_id, 1, 122),
      (uuid_generate_v4(), 'We Are The Champions', news_of_world_album_id, 2, 179),

      -- Rolling Stones
      (uuid_generate_v4(), 'Brown Sugar', sticky_fingers_album_id, 1, 215),
      (uuid_generate_v4(), 'Wild Horses', sticky_fingers_album_id, 2, 335),
      (uuid_generate_v4(), 'Gimme Shelter', let_it_bleed_album_id, 1, 270),

      -- Nirvana
      (uuid_generate_v4(), 'Smells Like Teen Spirit', nevermind_album_id, 1, 301),
      (uuid_generate_v4(), 'In Bloom', nevermind_album_id, 2, 254),
      (uuid_generate_v4(), 'Heart-Shaped Box', in_utero_album_id, 1, 278),

      -- Radiohead
      (uuid_generate_v4(), 'Paranoid Android', ok_computer_album_id, 2, 387),
      (uuid_generate_v4(), 'Karma Police', ok_computer_album_id, 6, 260),
      (uuid_generate_v4(), 'Everything In Its Right Place', kid_a_album_id, 1, 245),

      -- David Bowie
      (uuid_generate_v4(), 'Starman', ziggy_album_id, 4, 255),
      (uuid_generate_v4(), 'Heroes', heroes_album_id, 3, 361),

      -- Fleetwood Mac
      (uuid_generate_v4(), 'Dreams', rumours_album_id, 2, 255),
      (uuid_generate_v4(), 'Go Your Own Way', rumours_album_id, 7, 224),
      (uuid_generate_v4(), 'Sara', tusk_album_id, 2, 390),

      -- U2
      (uuid_generate_v4(), 'With or Without You', joshua_tree_album_id, 3, 296),
      (uuid_generate_v4(), 'I Still Haven’t Found What I’m Looking For', joshua_tree_album_id, 2, 276),
      (uuid_generate_v4(), 'One', achtung_baby_album_id, 3, 276);
  END;
  $$ LANGUAGE plpgsql;
COMMIT;
