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

  // Méthode pour lire les informations spécifiques d'un candidat
  async getCandidateInfo(userId) {
    const [rows] = await this.database.query(
      `SELECT lastname, firstname FROM ${this.table} WHERE user_id = ?`,
      [userId]
    );
    return rows.length > 0 ? rows[0] : null;
  }
}

// Exporte une instance unique du UserRepository
module.exports = CandidateRepository;
