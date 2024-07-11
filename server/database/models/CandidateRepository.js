// Import de la classe AbstractRepository
const AbstractRepository = require("./AbstractRepository");

// Repository pour la table "users"
class CandidateRepository extends AbstractRepository {
  constructor() {
    // Appelle le constructeur de la classe parente (AbstractRepository)
    // et passe le nom de la table "users" comme configuration
    super({ table: "candidate" });
  }

  // Méthode pour créer un nouveau candidat
  async create(candidate) {
    const [result] = await this.database.query(
      `
      INSERT INTO ${this.table} ( lastname, firstname, birthday, user_id)
      VALUES (?, ?, ?, ?)
    `,
      [
        candidate.lastname,
        candidate.firstname,
        candidate.birthday,
        candidate.user_id,
      ]
    );

    // Execute the query and return the result
    return result.insertId;
  }

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific candidate
    const [row] = await this.database.query(
      `select * from ${this.table} where user_id = ?`,
      [id]
    );

    // Return the candidate
    return row[0];
  }
}

// Exporte une instance unique du UserRepository
module.exports = CandidateRepository;
