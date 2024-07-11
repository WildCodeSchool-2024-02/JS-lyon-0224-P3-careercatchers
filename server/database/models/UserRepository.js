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
      INSERT INTO ${this.table} (email, hashed_password, role)
      VALUES (?, ?, ?)
    `,
      [user.email, user.hashedPassword, user.role]
    );

    // Execute the query and return the result
    return result.insertId;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all users from the "users" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific user by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the user
    return rows[0];
  }

  async readByEmailWithPassword(email) {
    // Execute the SQL SELECT query to retrieve a specific user by its email
    const [rows] = await this.database.query(
      `select * from ${this.table} where email = ?`,
      [email]
    );

    // Return the first row of the result, which represents the user
    return rows[0];
  }

  // The D of CRUD - Delete operation
  async delete(id) {
    const [result] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );

    return result;
  }
  // async readByEmail(email) {
  //   console.log(email);
  //   // Execute the SQL SELECT query to retrieve a specific user by its email
  //   const [user] = await this.database.query(
  //     `select * from ${this.table} where mail = ?`,
  //     [email]
  //   );
  //   console.log([user]);
  //   const [name] = await this.database.query(
  //     `select ${
  //       user.role === "candidate" ? "firstname" : "name"
  //     } from ? where user_id = ?`,
  //     [user.role, user.id]
  //   );
  //   console.log(name);
  //   // Return the first row of the result, which represents the user
  //   return name[0];
  // }
}

// Exporte une instance unique du UserRepository
module.exports = UserRepository;
