-- SET UP SCHEMA HERE

CREATE DATABASE IF NOT EXISTS badmovies;

USE badmovies;

DROP TABLE IF EXISTS favorite;

CREATE TABLE favorite (
  id int NOT NULL UNIQUE,
  title varchar(100) NOT NULL,
  release_date varchar(10) NOT NULL,
  vote_average int NOT NULL,
  poster_path varchar(200) NOT NULL,
  PRIMARY KEY (ID)
);

-- mysql -u root < db/sql/moviesSchema.sql`