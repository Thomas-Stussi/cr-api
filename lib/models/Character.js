const pool = require('../utils/pool');

module.exports = class Character {
  id;
  name;
  picture;
  bio;
  aka;
  player;
  pc;
  creatureType;
  race;
  class;
  age;
  alignment;
  languages;
  birthplace;
  family;
  relationships;
  stats;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.picture = row.picture;
    this.bio = row.bio;
    this.aka = row.aka;
    this.player = row.player;
    this.pc = row.pc;
    this.creatureType = row.creature_type;
    this.race = row.race;
    this.class = row.class;
    this.age = row.age;
    this.alignment = row.alignment;
    this.languages = row.languages;
    this.birthplace = row.birthplace;
    this.family = row.family;
    this.relationships = row.relationships;
    this.stats = row.stats;
  }

  static async insert(character) {

    const { rows } = await pool.query(`
      INSERT INTO characters (
        name,
        picture,
        bio,
        aka,
        player,
        pc,
        creature_type,
        race,
        class,
        age,
        alignment,
        languages,
        birthplace,
        family,
        relationships,
        stats
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
      RETURNING *`,
    [
      character.name,
      character.picture,
      character.bio,
      character.aka,
      character.player,
      character.pc,
      character.creatureType,
      character.race,
      character.class,
      character.age,
      character.alignment,
      character.languages,
      character.birthplace,
      character.family,
      character.relationships,
      character.stats
    ]);

    return new Character(rows[0]);
  }

  static async getAll() {

    const { rows } = await pool.query(`
    SELECT * FROM characters`);

    return rows.map(row => new Character(row));
  }

  static async getCharacterById(id) {

    const { rows } = await pool.query(`
    SELECT * FROM characters
    WHERE id = $1`, [id]);

    return new Character(rows[0]);
  }

  static async updateCharacter(character) {

    const { rows } = await pool.query(`
      UPDATE characters
      SET
        name = $1,
        picture = $2,
        bio = $3,
        aka = $4,
        player = $5,
        pc = $6,
        creature_type = $7,
        race = $8,
        class = $9,
        age = $10,
        alignment = $11,
        languages = $12,
        birthplace = $13,
        family = $14,
        relationships = $15,
        stats = $16
      WHERE id = $17
      RETURNING *`, 
    [
      character.name,
      character.picture,
      character.bio,
      character.aka,
      character.player,
      character.pc,
      character.creatureType,
      character.race,
      character.class,
      character.age,
      character.alignment,
      character.languages,
      character.birthplace,
      character.family,
      character.relationships,
      character.stats,
      character.id
    ]);

    return new Character(rows[0]);
  }

  static async deleteCharacter(id) {
    
    const { rows } = await pool.query(`
    DELETE FROM characters
    WHERE id = $1`, [id]);

    return new Character(rows[0]);
  }
};
