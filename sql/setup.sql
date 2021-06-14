DROP TABLE IF EXISTS characters;

CREATE TABLE characters (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  name VARCHAR NOT NULL,
  picture VARCHAR,
  bio VARCHAR,
  aka VARCHAR,
  player VARCHAR,
  pc BOOLEAN,
  creature_type VARCHAR,
  race VARCHAR,
  class VARCHAR,
  age VARCHAR,
  alignment VARCHAR,
  languages VARCHAR[],
  birthplace VARCHAR,
  family VARCHAR[],
  relationships VARCHAR[],
  stats JSON
)
