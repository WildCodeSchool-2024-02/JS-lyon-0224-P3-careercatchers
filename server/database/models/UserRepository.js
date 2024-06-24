// Import de la classe AbstractRepository
const AbstractRepository = require("./AbstractRepository");

// Repository pour la table "users"
class UserRepository extends AbstractRepository {
  constructor() {
    // Appelle le constructeur de la classe parente (AbstractRepository)
    // et passe le nom de la table "users" comme configuration
    super({ table: "user" });
  }

  // Méthode pour créer un nouvel utilisateur
  async create(user) {
    const [result] = await this.database.query(
      `
      INSERT INTO ${this.table} (email, password)
      VALUES (?, ?)
    `,
      [user.email, user.password]
    );

    // Execute the query and return the result
    return result.insertId;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all companys from the "company" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of companys
    return rows;
  }
}

// Ajoutez d'autres méthodes CRUD selon vos besoins

// Exporte une instance unique du UserRepository
module.exports = UserRepository;
