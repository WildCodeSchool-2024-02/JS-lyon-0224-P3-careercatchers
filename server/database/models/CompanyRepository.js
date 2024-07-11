const AbstractRepository = require("./AbstractRepository");

class CompanyRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "company" as configuration
    super({ table: "company" });
  }

  // The Rs of CRUD - Read operations

  async readAll() {
    // Execute the SQL SELECT query to retrieve all companys from the "company" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of companys
    return rows;
  }

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific company
    const [row] = await this.database.query(
      `select * from ${this.table} where user_id = ?`,
      [id]
    );

    // Return the company
    return row[0];
  }

  async create(company) {
    const [result] = await this.database.query(
      `
      INSERT INTO ${this.table} ( name, user_id)
      VALUES (?, ?)
    `,
      [company.name, company.user_id]
    );

    // Execute the query and return the result
    return result.insertId;
  }
}

module.exports = CompanyRepository;
